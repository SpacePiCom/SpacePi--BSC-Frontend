import { createSlice } from '@reduxjs/toolkit'

import { config as ThemesConfig } from '@/configs/theme'
import { switchThemes } from '@/themes/hooks'
import type { themesStoreType } from '@/themes/type'

export const store = createSlice({
  name: 'themes',
  initialState: {
    // Dark mode (false): true (dark mode) false (light mode)
    dark: localStorage.getItem('themes') === 'dark' || ThemesConfig.dark,
    // Loading state (false): true (loading) false (loaded)
    loading: false
  } as themesStoreType,
  reducers: {
    // Update theme loading state
    updateThemesLoading(state, action) {
      state.loading = action.payload
    }
  },
  extraReducers: (_builder) => {
    // Switch theme loading
    _builder.addCase(switchThemes.pending, (state) => {
      state.loading = true
    })
    // Switch theme load successful
    _builder.addCase(switchThemes.fulfilled, (state, action) => {
      state.dark = action.payload === 'dark'
    })
    // Switch theme load failed
    _builder.addCase(switchThemes.rejected, (state) => {
      state.loading = false
    })
  }
})

// Export Actions methods
export const { updateThemesLoading } = store.actions
// Export state variables
export default store.reducer
