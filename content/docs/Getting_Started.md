---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCJXH2X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKjIged4ovWx81NHJoP3TGhfnPFd8QhG87VeA39r37pAiEAvcfeJhl%2F%2BzId6vNvpXqhoN45ZZRAhqRzJXHLCWh3m5Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOasL97ItWbi4Xp5JSrcA%2BVvKidNnav487mUn91AXrcbLpTWn%2F%2BntM73JHtnGLEQVkT%2FHT1T7Dc95EKlVmPMeFlNL4N2bNvo0rMg%2FZqp5jgFL9uNLrWdY0QSSnMS4rhehEMQnj9%2FkohF4pvG1sNnS5xf3Ht0Dk5L8aXedyMpB3OexAAs41wmdT7mRFSmaWnvgfX77VWYNMQe81WFAOoFQPc%2FUxvdi46pu3GznMhthqY3mTJNOv69ssOjWMut8AEGKlsReqr13Wt1wUkCjRiU4Ac2MXB3fhLPLP%2BNsCPBvJrGaC3lWfZtN4jZ1XB43%2BVkXPt47AP4HRthYek2O8eqVCw%2Fp94fR546T0cM%2BfbwmwgD4Pwze%2FxLskj9WhdYsa0pdhubt6Z4opKEfZ%2BT5sfT2wZML0E%2F%2FQf1z6dth9ty%2Br6WqMTsK6B2fzy74HdX%2FDnPa1yS9Zq%2FTCMKCGEy%2BjGYbK%2FHohgd8lE3ORy69w11qbNyhW1zsNwcyZ7uGN1bjQtrBYf%2FdR3WS3AB1s62Sdfj3roa%2FSd2QP0BW0GMK2xNqqe%2FYmM6%2BMX5Y7L%2FKYUmP1ljS6EkVoNn6ly5MGzsXCoDYKX%2B14AdjYcbxMSPNlljaw%2FIeF2%2BPNjvUEiNn8%2BGvgWkQB8Dv4aVr0RgeTBLMLzlw78GOqUBoik3bkds53XG4q3aLPlS1WwYsIqp0oqeQ2SEAkzyYuRifJf88dCnXgTz5gcg8fYyIUDb9wZnn85ASemCXYDoN%2BK8zD5JUjl5ITu7cGSa%2FIo0FzaoFiwVfpHKfMcLik83sB0bLymDXQLM416%2Frqnzu7wijwqHiq%2FR8UbB2YkWBED5GtVI84S6t3hOcnO9bC5xok%2BzTBMsBHFxIfYndTCT9vO8X6Lq&X-Amz-Signature=cb8e3f2956c3ae1a9ca1a3f3e70f8c74aa2a5d73b3df6eb6bf7525fe3ecfba49&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCJXH2X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKjIged4ovWx81NHJoP3TGhfnPFd8QhG87VeA39r37pAiEAvcfeJhl%2F%2BzId6vNvpXqhoN45ZZRAhqRzJXHLCWh3m5Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOasL97ItWbi4Xp5JSrcA%2BVvKidNnav487mUn91AXrcbLpTWn%2F%2BntM73JHtnGLEQVkT%2FHT1T7Dc95EKlVmPMeFlNL4N2bNvo0rMg%2FZqp5jgFL9uNLrWdY0QSSnMS4rhehEMQnj9%2FkohF4pvG1sNnS5xf3Ht0Dk5L8aXedyMpB3OexAAs41wmdT7mRFSmaWnvgfX77VWYNMQe81WFAOoFQPc%2FUxvdi46pu3GznMhthqY3mTJNOv69ssOjWMut8AEGKlsReqr13Wt1wUkCjRiU4Ac2MXB3fhLPLP%2BNsCPBvJrGaC3lWfZtN4jZ1XB43%2BVkXPt47AP4HRthYek2O8eqVCw%2Fp94fR546T0cM%2BfbwmwgD4Pwze%2FxLskj9WhdYsa0pdhubt6Z4opKEfZ%2BT5sfT2wZML0E%2F%2FQf1z6dth9ty%2Br6WqMTsK6B2fzy74HdX%2FDnPa1yS9Zq%2FTCMKCGEy%2BjGYbK%2FHohgd8lE3ORy69w11qbNyhW1zsNwcyZ7uGN1bjQtrBYf%2FdR3WS3AB1s62Sdfj3roa%2FSd2QP0BW0GMK2xNqqe%2FYmM6%2BMX5Y7L%2FKYUmP1ljS6EkVoNn6ly5MGzsXCoDYKX%2B14AdjYcbxMSPNlljaw%2FIeF2%2BPNjvUEiNn8%2BGvgWkQB8Dv4aVr0RgeTBLMLzlw78GOqUBoik3bkds53XG4q3aLPlS1WwYsIqp0oqeQ2SEAkzyYuRifJf88dCnXgTz5gcg8fYyIUDb9wZnn85ASemCXYDoN%2BK8zD5JUjl5ITu7cGSa%2FIo0FzaoFiwVfpHKfMcLik83sB0bLymDXQLM416%2Frqnzu7wijwqHiq%2FR8UbB2YkWBED5GtVI84S6t3hOcnO9bC5xok%2BzTBMsBHFxIfYndTCT9vO8X6Lq&X-Amz-Signature=fdc9e8719518ed3a3cb33a3eaa51c559e1e208c0a0c22706e393310f23d5e899&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAZHP2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9mKxX5CnvPQajHlL5Xfwnflt5KtctwcmsOgckZaitQIgTRUhr4O17rzmIJLMi9PixXXFewIKalevHNzSLAe6gAMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDB3dwth8%2Brj4yiF3LircA9w4IkBUEFxKnGyggaI4TuVzBWpwOnuhXe2VwBXOIyKSWf%2FH0wUIIDyJOr9%2F02pzk%2Fo5VfkLoXjJ3RULJGlMvyZM5gA56%2BafXQ9Ar6WUcz%2B2N9s0qQlKxSZ%2FpFBQN7Kcw0AOHPrbE8Ovjj%2FizKlwe9FvH4S8CSNSudWmeLPZOO5Bfc7HtLV6SaL1LPHhlap8ZLJCJLYSebdX95WbrqkWO9MhLEBRt7xDtWkvDRHmQvWhI4MXTpctbsLJSgrp4DF1KZ4XoWu%2BNtGTj568tUWX3LLTtCJZYiUKD1q%2BWGbJ%2FMD2Dy8hbYpMcOSDEacF%2Be%2Bqf1JYwpRIn7ouRbb%2FCsWXyKtvo1fou7ybIeXqFymbXPbEgNbuuWiv%2Bi41fdRh6UYgiG4q3ofRD5W8KYaFUbtLFBzvZaZnH%2BZx3iRktNrYclLAjyuP9v%2BNE42EwRnFMHxpROBijj%2B5izu%2Bp1PyQT%2F%2BoPvdEcnW5fF3tfoI1PrPp%2FcgiBmYb0wAU1w4tAV4kxyxHzuzPXnxlN%2B4i%2BqenfiC6o2tRK21PBYzJkceb1OWHzjTAi4eHU5Y8z4APPnkaW2OFdOjgXkD19BkORPaYoIXaWhxVLJPg6p9Li6bIpx8ETQAoBvJQ4X3eS2pLDkaMPbkw78GOqUBeUxAP6muiYxDEjLdi%2BCUjnfy569ND8YuUF3jj4HOx8qoi1ZKJH2LfbDNIXQHKDGU5Gd5aMSEoOJyZWQBKHkskM0%2Be4XXh2w%2Bq%2BNTZvIEMizyTkveo2PBA%2BK7pixZq%2F0%2FtOAjm2kLNWRAYWPgybiUI6FGb4ZZME%2FXBGqN2ikIdXY1dMxUUIhu56hkCsVt4fkzZ6s73561yqXHwed%2F6tzbRkuar48J&X-Amz-Signature=96cff150ca7dcef6827cf9ecfaf7009587ba66370a193ad61cadc0185d314ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5MZ6UA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2KjvlRBsa%2BXo1tsbRCupGlQURaZmuXl18o4NN149CFgIhANsT8hnNIsnsG%2BGb8dlpfsY%2Fah1ybeBxY3gEqIcUU%2B8oKv8DCCoQABoMNjM3NDIzMTgzODA1IgyvbeaD5bWv7xJkqf8q3ANx7Mo2qFuL2iFthU%2BzZreoHm%2FFThCV1O4LVPz8yU97fS8x10cgbfeRkHd9ZQjxITLu1I%2BoMC%2FgN0kHNnZB0Dn1ph4U9U0BcVEgBZIzZMqE4Y3si783vHN7P02ha3VtJORTqz%2BmCBFd8CwXJiBlWmT3LeFbNeabI0ofMhYgemx0Dty3hPrjFbVjOdp0b7tpCKGsXl9ygzW05HQ1Fa8zYq4hk6jcnJT%2FTMPRLnpPwOyCqKky64ZVgH2wiIYiwV5hANHm37fTQCPo2p7pbifG1i2nugfxbpBhZllWLT85mQ6UB5RffoLxo7cXyPQ7zGvEYZYUa0jDbWcjczPuTmwB%2FwkGyIYkHNJRs83I6qss%2BGTVj6q4ukDdab8GBus%2BFQhiUatO51Eo%2FZi31TPvpeamOHEpbZEgihkISvfClRI8ATM11M6nZodaMrnUxWviVJEJTP0nat8hhMOBaLd9%2F8G%2FLIY9RzNyGEq69CUZedtw8W8Vc3fQQNCucO5nbf6aJAoD8JoCQlLxr%2Fcyb3rFRco0U021euM6WgAcVayVhXht6lBX0yBzWKw4gaGYPeuhZd8rIXC6TxlGnFHqn%2BED9ug3An6ce%2BA3gvgw6IXom6jJIV3zeSNe2m3%2FoZdpLA2SGzDR5MO%2FBjqkAf%2FtOwLnFWIvnqexCK2L0K4qc%2Bng4l85cl5E4lkc%2Blf%2BjHGOcQa7FFyXsV9sX988a7QpbGIPVy2aU5NF%2FlSGdybqfjMGUCFlbY2baynohvobMveB%2B8BYaZJQgL%2FL9Dy0fPGvSEEAY0%2Fu%2FMucdFnnszs62N%2FrgnB%2Bb3%2BGIqz98nSXNHyDcmpNmhEJet6eU1H9OaP%2Ba8X8A5TwZSjTPEGdsYBibQjF&X-Amz-Signature=c9e09b7417de3f79be6d2be7efb0d2abeb26fb0a8c3216be3cbef73fc5e5a00d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCJXH2X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKjIged4ovWx81NHJoP3TGhfnPFd8QhG87VeA39r37pAiEAvcfeJhl%2F%2BzId6vNvpXqhoN45ZZRAhqRzJXHLCWh3m5Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOasL97ItWbi4Xp5JSrcA%2BVvKidNnav487mUn91AXrcbLpTWn%2F%2BntM73JHtnGLEQVkT%2FHT1T7Dc95EKlVmPMeFlNL4N2bNvo0rMg%2FZqp5jgFL9uNLrWdY0QSSnMS4rhehEMQnj9%2FkohF4pvG1sNnS5xf3Ht0Dk5L8aXedyMpB3OexAAs41wmdT7mRFSmaWnvgfX77VWYNMQe81WFAOoFQPc%2FUxvdi46pu3GznMhthqY3mTJNOv69ssOjWMut8AEGKlsReqr13Wt1wUkCjRiU4Ac2MXB3fhLPLP%2BNsCPBvJrGaC3lWfZtN4jZ1XB43%2BVkXPt47AP4HRthYek2O8eqVCw%2Fp94fR546T0cM%2BfbwmwgD4Pwze%2FxLskj9WhdYsa0pdhubt6Z4opKEfZ%2BT5sfT2wZML0E%2F%2FQf1z6dth9ty%2Br6WqMTsK6B2fzy74HdX%2FDnPa1yS9Zq%2FTCMKCGEy%2BjGYbK%2FHohgd8lE3ORy69w11qbNyhW1zsNwcyZ7uGN1bjQtrBYf%2FdR3WS3AB1s62Sdfj3roa%2FSd2QP0BW0GMK2xNqqe%2FYmM6%2BMX5Y7L%2FKYUmP1ljS6EkVoNn6ly5MGzsXCoDYKX%2B14AdjYcbxMSPNlljaw%2FIeF2%2BPNjvUEiNn8%2BGvgWkQB8Dv4aVr0RgeTBLMLzlw78GOqUBoik3bkds53XG4q3aLPlS1WwYsIqp0oqeQ2SEAkzyYuRifJf88dCnXgTz5gcg8fYyIUDb9wZnn85ASemCXYDoN%2BK8zD5JUjl5ITu7cGSa%2FIo0FzaoFiwVfpHKfMcLik83sB0bLymDXQLM416%2Frqnzu7wijwqHiq%2FR8UbB2YkWBED5GtVI84S6t3hOcnO9bC5xok%2BzTBMsBHFxIfYndTCT9vO8X6Lq&X-Amz-Signature=0df2381c5c3ccef4024945fcd6d3cfcee786cfbcaef6b0458460ac4cba8329b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
