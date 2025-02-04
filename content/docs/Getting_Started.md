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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRSQS25%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDYS19jF5CcztSUUpu2HWVdJ2YXAxu5Db%2Fdohru%2BeqtIgIhAI5bkKy%2Fi8hIFpr2PDQlvBIq5s4ygCzStYU9Psc5H6A4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxSI%2B3btdL7%2BvXKhbUq3ANpOfWb14WDYHN%2BHeDupBNKwqwQg29gF1u0Sk6OPi57QYmu3IUnf%2FyyFtmnUxRi9Tk1gviSZqHoRXN4rBv4EAj4U1pXRNDCLo3eQ%2BZkvMrbDzD4hYNqMIh%2BGzKR0R0EWULKqxXV5IuuMIBOuYPk8QwSbCdNGgUrFw9xYQQO43O%2F5F4iUvYO5od3o730atGf9rqt016lbiIxpGl1I9lwyF4do4ZtqO3RDZMbrpdB6tfwJWRmf82dU7HG9Z0QZv6%2BuOaIzbHHlXs%2FUbk%2Fn6v%2FRSLWQtU%2BYzmxFgihkNsznrMtYblP5XpKTsqueAaifNeMBiyCCTvxLFkEnRt4oWh7cdfckHJNYXeueydiH%2BIxCTKd7oYDlnZUf4x0iVtNKWZmhKSTFAIUdXa3itgxYxndc0%2Fu7Lix8ziceWDwMiTmUCRRwuBbH24kRdkgkXdrObXlsk60drJgR9ioZRLfQ1DjGchY6lLwfmAWa14%2BW25sCa3qrPkFitPLv70XnKYVsv8wAJde9MUayuNNju2AoOKrKmQBZw55B3eGvyREMx4%2BFHffJ%2FQEG3REKTb8a%2Bguq0Vt19N%2Fe1DITCjNq6OX0GltXlTbu7NIlWGJRV1NW8c46aaVhS4dASfWoaO%2Fxw%2BQrzDnzIe9BjqkAW2D3javfHgy30t49ry9AphecIPAoxSSABxGJYVmL%2BBcSEjGcwCErtak%2FMeBRsCYkhGMu1jiyOQtWyTQIYy2ZTDW4ELIHQQ6MhBNvJJTB3%2FqIfovkeGaqAxcbAO2Lc0VY3HOfJkh33wMCr2SMutUnnMx%2B5rQfBMFOJ%2BuGBhiXkaRqzbax%2BwfAxyzgmdshbEvvqZi9Et2rUMVE36hxOoe%2FTi7uy2H&X-Amz-Signature=e15cb7ed7802c28db0d53a40d9cf14250eb92c0e0fa2eaf47817da5917615584&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRSQS25%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDYS19jF5CcztSUUpu2HWVdJ2YXAxu5Db%2Fdohru%2BeqtIgIhAI5bkKy%2Fi8hIFpr2PDQlvBIq5s4ygCzStYU9Psc5H6A4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxSI%2B3btdL7%2BvXKhbUq3ANpOfWb14WDYHN%2BHeDupBNKwqwQg29gF1u0Sk6OPi57QYmu3IUnf%2FyyFtmnUxRi9Tk1gviSZqHoRXN4rBv4EAj4U1pXRNDCLo3eQ%2BZkvMrbDzD4hYNqMIh%2BGzKR0R0EWULKqxXV5IuuMIBOuYPk8QwSbCdNGgUrFw9xYQQO43O%2F5F4iUvYO5od3o730atGf9rqt016lbiIxpGl1I9lwyF4do4ZtqO3RDZMbrpdB6tfwJWRmf82dU7HG9Z0QZv6%2BuOaIzbHHlXs%2FUbk%2Fn6v%2FRSLWQtU%2BYzmxFgihkNsznrMtYblP5XpKTsqueAaifNeMBiyCCTvxLFkEnRt4oWh7cdfckHJNYXeueydiH%2BIxCTKd7oYDlnZUf4x0iVtNKWZmhKSTFAIUdXa3itgxYxndc0%2Fu7Lix8ziceWDwMiTmUCRRwuBbH24kRdkgkXdrObXlsk60drJgR9ioZRLfQ1DjGchY6lLwfmAWa14%2BW25sCa3qrPkFitPLv70XnKYVsv8wAJde9MUayuNNju2AoOKrKmQBZw55B3eGvyREMx4%2BFHffJ%2FQEG3REKTb8a%2Bguq0Vt19N%2Fe1DITCjNq6OX0GltXlTbu7NIlWGJRV1NW8c46aaVhS4dASfWoaO%2Fxw%2BQrzDnzIe9BjqkAW2D3javfHgy30t49ry9AphecIPAoxSSABxGJYVmL%2BBcSEjGcwCErtak%2FMeBRsCYkhGMu1jiyOQtWyTQIYy2ZTDW4ELIHQQ6MhBNvJJTB3%2FqIfovkeGaqAxcbAO2Lc0VY3HOfJkh33wMCr2SMutUnnMx%2B5rQfBMFOJ%2BuGBhiXkaRqzbax%2BwfAxyzgmdshbEvvqZi9Et2rUMVE36hxOoe%2FTi7uy2H&X-Amz-Signature=8f958e91862a240408b48aff34cdca7a2d1d946935b39e03aae4af524ddbd333&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFRDBHI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGfkKn5A1d5M4TpzICbZCDzRxxLPTfAal%2BDJWPU8YUVHAiEA4YfakaPPdBco9SioTT8w9hzJlvOAmqvLnBe2N77%2BAHEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFlS0P04lZ3e3cMBZCrcA66JibGG8xn7PpwZF3v3HTgHphOBGmDbK3pPQo0x4Dtv%2FQc17My7IiZQzfxB9%2FFOw%2BWiMWlF3PLlwWGPaBxCuwh2OjKnxJRyQBbfdPcBNO4IUzxIr3iJ1tyHkkz%2Bz1wripa%2Fl5OtocDDk7YObmxXSCfetuiPsP9IOX1%2B%2Bx1RoIpXG5ykmv0zct2y5x4pNYrukDdKjkn1kRRL5dK4vpW75UDNEQLvkijX2hKQKk%2B0ehnlI8cQ7IRt3JhlWayvXVUNVaPMm3Hs9RdTEGdEMw2GBjctAFyV7CoE2IYeHbmdjZ%2B4o6GjU%2Fo8Lw0Ca7Wq0mPSdOSY1HYvhnI02eaXmcwtGI5%2B0tU7ybQGeuW6Djl30a8qOiO%2BNP6RwL2HyQXU8kCBO2PAal4L2%2FFVI9ICMLDGADs8qua%2F1o8aRkJhLeDZOoK11v3Qg4JUZzROUOUiyz5ULdEtBxrFPgpBxuobdIfTeBcCtdyoj2Vp2OcOL8msZDvPdDbgoErPK16FvSzXBc2Ba%2BNZIf05BgrfH9txluexDTHFxwsI9GRAjfokW3ib%2FkQ8MHw7c1ETZ%2Fk5zymg9gI6occv04Flsu3Oul5r7TDNA2SdgQgVc7mdAKIoeK3%2Ff%2BxRXw8ORBQJBm%2FgE9gnMI%2FMh70GOqUBkX%2B2Aje8lqbXedCBnoXL%2F3WtH0qvWh5qd%2FC6R6%2BTrHtcixA3aweNmwhOPyQf%2FTDC3DSl4BCdLJ1M5UOm3Ca7EpgW6EzplIPmTXQLbFdZGWeJd7cbO7thsnCrDOQAlcyeXtTEaNDeBMGl1LIpd%2FFGAM1cFcsM8wev2AcV%2FKIXQeaTg0S5wNSwT1qcS1LC5yir%2FchGS1JXk1HWx9%2BPMGUVGLKoxPKT&X-Amz-Signature=32ffa2afa78d9b98d5997b3d455de47d6ea40157c4185ae16c2d508faf6beb53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHTH2AK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDGN%2FzwC9755AvRQkyIAX4n1ys60aa6fN1%2BV6Jo6puGiAiA9Xu2L4f%2FSotiWIhNsfy%2BB0hX1b3GNKhpDivw%2B1EfDBSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMY6F1Zw0jXb4TsTDAKtwD4VAFCbvIj%2FniJFppq%2FveUYa8PDMp4AXuaH4l5r07hB5lp7lhagVfRn7HXoyR40DUCE3OPzcFpFKGfrcdgU1WoVHHgW1e%2Bd%2FBID%2BL93lCyOBn%2FiJ5v58C7r1I0ai3BEt85xdRFv8CO2pfaEclYC6Vj4m9TGjBDlCzLVb5fXDbjupkrUNVPpkCFRkXgtvV9f3UmKT%2FM1I2y0r9kfMtL86toP%2Fybev7YT563MbJn3CH%2FFY51bIq4Su4CawNv10V8Yc051UE%2FSoC3UkYWjAjOmtu1raLsB2SvJXyP91SMcdLP4Gs9bOSf02pFQLB7iXv08lcisIXvQ5SdQzKeDfw6TljBc7Ip2uzZlYMREOe%2BLzX6xhzDveFLq3oyBZAbY1D7DL2oCGuGEcmy0Mx2p1qONIO296sY6i%2FAXXD0fi3%2FzxrsUTasoDVCaXb0pv4ZTFGsyBRjmKBRgCmtmNe3j0BuEkEINpVKAqj%2BAv7ZqrN7%2Bn4sgwmmZmXCLZs0FE00dWcJALWqLnGlAuZzpn0A2dudu6Yz7EpiE3ST3ENrAPmCheEjio53yBzv3hC%2FqmZ3ukMn0XdlwoYQmsyj3OimJiiEEBGP%2FEYFOVY%2FiDN2BHEr9ahd5icfLgRHiDJYZCv%2FvUw6MyHvQY6pgFWKpKk2BEUWVDyD%2BbeS8Ae9IahLizaZ5QWX8y%2BNGmp8G%2FG2i8mig0%2Fvjw5JPzZ%2B3ZbTz3blK0XP18kV%2FK%2FRBg8QfLZy%2FhtKd87Dhd9cGq1qyv0vx2363paiAhuxWl8fkp0RX48b%2BxuBkgoMxTaT1oBZNmlJgTlD48r30a8xl7n%2FfB6v7ET%2Fidxiyh1Hd6xSXVdVQP61%2Fz4mcah4d5%2FPBk%2BIup68sjM&X-Amz-Signature=a9128286956b9920aed007557b34a8d1cfa4bc7a6343d7a23f2691cc1c2168a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRSQS25%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDYS19jF5CcztSUUpu2HWVdJ2YXAxu5Db%2Fdohru%2BeqtIgIhAI5bkKy%2Fi8hIFpr2PDQlvBIq5s4ygCzStYU9Psc5H6A4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxSI%2B3btdL7%2BvXKhbUq3ANpOfWb14WDYHN%2BHeDupBNKwqwQg29gF1u0Sk6OPi57QYmu3IUnf%2FyyFtmnUxRi9Tk1gviSZqHoRXN4rBv4EAj4U1pXRNDCLo3eQ%2BZkvMrbDzD4hYNqMIh%2BGzKR0R0EWULKqxXV5IuuMIBOuYPk8QwSbCdNGgUrFw9xYQQO43O%2F5F4iUvYO5od3o730atGf9rqt016lbiIxpGl1I9lwyF4do4ZtqO3RDZMbrpdB6tfwJWRmf82dU7HG9Z0QZv6%2BuOaIzbHHlXs%2FUbk%2Fn6v%2FRSLWQtU%2BYzmxFgihkNsznrMtYblP5XpKTsqueAaifNeMBiyCCTvxLFkEnRt4oWh7cdfckHJNYXeueydiH%2BIxCTKd7oYDlnZUf4x0iVtNKWZmhKSTFAIUdXa3itgxYxndc0%2Fu7Lix8ziceWDwMiTmUCRRwuBbH24kRdkgkXdrObXlsk60drJgR9ioZRLfQ1DjGchY6lLwfmAWa14%2BW25sCa3qrPkFitPLv70XnKYVsv8wAJde9MUayuNNju2AoOKrKmQBZw55B3eGvyREMx4%2BFHffJ%2FQEG3REKTb8a%2Bguq0Vt19N%2Fe1DITCjNq6OX0GltXlTbu7NIlWGJRV1NW8c46aaVhS4dASfWoaO%2Fxw%2BQrzDnzIe9BjqkAW2D3javfHgy30t49ry9AphecIPAoxSSABxGJYVmL%2BBcSEjGcwCErtak%2FMeBRsCYkhGMu1jiyOQtWyTQIYy2ZTDW4ELIHQQ6MhBNvJJTB3%2FqIfovkeGaqAxcbAO2Lc0VY3HOfJkh33wMCr2SMutUnnMx%2B5rQfBMFOJ%2BuGBhiXkaRqzbax%2BwfAxyzgmdshbEvvqZi9Et2rUMVE36hxOoe%2FTi7uy2H&X-Amz-Signature=e0c4f77f62ed4a015c069f140b56f6a46a4fd1d9d2460a54fc18a8c0939f81a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
