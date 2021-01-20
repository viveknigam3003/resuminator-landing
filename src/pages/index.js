/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { MuiThemeProvider } from "@material-ui/core"
import React from "react"
import Contribute from "../components/ContributeCard"
import Footer from "../components/Footer"
import MenuBar from "../components/Header/MenuBar"
import MastHead from "../components/Home/MastHead"
import Meta from "../components/Meta"
import Steps from "../components/Steps/Steps"
import { theme } from "../styles/theme"

export default function Home() {

  return (
    <React.Fragment>
      <Meta />
      <MuiThemeProvider theme={theme}>
        <MenuBar />
        <MastHead />
        <Steps/>
        <Contribute />
        <Footer />
      </MuiThemeProvider>
    </React.Fragment>
  )
}
