import { createAsyncThunk } from '@reduxjs/toolkit'

import { stateType } from '@/stores/type'
import { updateThemesLoading } from '@/themes/store'

// Switch theme
export const switchThemes = createAsyncThunk(
  'themes/switchTheme',
  async (_, { getState, dispatch }) => {
    const { themes } = getState() as stateType
    const { dark } = themes

    try {
      // Check if the theme is in dark mode
      const is = dark ? 'light' : 'dark'
      // Set theme attribute
      document.documentElement.setAttribute('theme', dark ? 'light' : 'dark')
      // Store theme in localStorage
      localStorage.setItem('themes', is)
      // Update theme loading state (delay by 1 second)
      setTimeout(() => dispatch(updateThemesLoading(false)), 1000)
      // Return the theme variable
      return is
    } catch (error) {
      throw new Error('Error switching theme: ' + error)
    }
  }
)
