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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBBEYJ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAgBkDmQhJd%2FUq4y72VigdBViGYl%2FHD7DQ8qz780VALIAiAV8xse%2FKxegswufcVYDEweSzhoXWHstn%2F1mK%2BadlRkjiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITQFrLPWremj%2BC98KtwDCyOW%2BZ3CIEjotfWINBqUiAPiXaZuwN2XDBsjaFdgKCPAWzm1fA7cCghkIBcIs1iCFjeNsZNn0wVb8xgGLRbXC%2FMuIvEnnD2HFJhZa8wHf4w2rroSxbHkTg9oYqNa9a5LgTqazEekeEqSS0YTxtoGBh96Ee4Zh27cFuTXSAURrnNo%2FjAh5VR7vEKwYGVMmwzvIQib%2Fa3Qy98hTL%2BGWOMbiuL%2FT%2F7ZD%2FaqYYnO%2BK9y5IBOXmPPFC2Fz81iaifcCZ2nhBsAQ8CfgcuDO39jEgJZuq4No%2FF1Abzv0vhW6SrUPDRvJ7KhVkjASNxVsmmZ9l5bkFYTsfJgm1nuBr%2B4klWXovfEI5R5Ep46MIsUMg0WUgDJzbDLcCC8LsSwoEl7wqTREAILxRtFGY39luwHtSEOB7jFsYPMcVNwJ93hA58lnHPQI%2FycjlNke%2Fa3IHmwHFflpo%2FIA1wWsBtW5zH%2F5fMYLF9s6C7oMfST6UrV5WuYTJ1hKWBUOAXFv%2BKKx8jv1g8TPeHCabq%2BbrQEYU%2BQIoxl2TQVKFtWrj5PDWDjs5TBGJiG%2B81bp%2B%2FnV256gySCruQrYPYFx8De0iSsxNToC8IYc%2BFqQK%2BecNbi2Hn97r6UvfrEAD8pPGdWpjzEzyMwiJWMvgY6pgEAha%2Fw7RDFDPM2xRgB3KGSXhqPydkZ13Ec35uqKPLCvM2ZGKH2dNJ2FLGfYjhXhk7l8a5%2BIweVZ5w1X4cLowGN2dvRmubhOUNGJon7gwdeeDMOwg8FUNrejO6auSYieCiDOiwDOI3PipAVOLxQDeuWY6noRp2pNFsl5Omh8aOuPoe9iB60EBoCTl509Q%2BUs6TIPjwigrfPRxIHXckFD5XYgrhX6eAA&X-Amz-Signature=4802f7b86659283066e8cb4536e55825e862d1654c8b5a3a808b0378bcab1fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBBEYJ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAgBkDmQhJd%2FUq4y72VigdBViGYl%2FHD7DQ8qz780VALIAiAV8xse%2FKxegswufcVYDEweSzhoXWHstn%2F1mK%2BadlRkjiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITQFrLPWremj%2BC98KtwDCyOW%2BZ3CIEjotfWINBqUiAPiXaZuwN2XDBsjaFdgKCPAWzm1fA7cCghkIBcIs1iCFjeNsZNn0wVb8xgGLRbXC%2FMuIvEnnD2HFJhZa8wHf4w2rroSxbHkTg9oYqNa9a5LgTqazEekeEqSS0YTxtoGBh96Ee4Zh27cFuTXSAURrnNo%2FjAh5VR7vEKwYGVMmwzvIQib%2Fa3Qy98hTL%2BGWOMbiuL%2FT%2F7ZD%2FaqYYnO%2BK9y5IBOXmPPFC2Fz81iaifcCZ2nhBsAQ8CfgcuDO39jEgJZuq4No%2FF1Abzv0vhW6SrUPDRvJ7KhVkjASNxVsmmZ9l5bkFYTsfJgm1nuBr%2B4klWXovfEI5R5Ep46MIsUMg0WUgDJzbDLcCC8LsSwoEl7wqTREAILxRtFGY39luwHtSEOB7jFsYPMcVNwJ93hA58lnHPQI%2FycjlNke%2Fa3IHmwHFflpo%2FIA1wWsBtW5zH%2F5fMYLF9s6C7oMfST6UrV5WuYTJ1hKWBUOAXFv%2BKKx8jv1g8TPeHCabq%2BbrQEYU%2BQIoxl2TQVKFtWrj5PDWDjs5TBGJiG%2B81bp%2B%2FnV256gySCruQrYPYFx8De0iSsxNToC8IYc%2BFqQK%2BecNbi2Hn97r6UvfrEAD8pPGdWpjzEzyMwiJWMvgY6pgEAha%2Fw7RDFDPM2xRgB3KGSXhqPydkZ13Ec35uqKPLCvM2ZGKH2dNJ2FLGfYjhXhk7l8a5%2BIweVZ5w1X4cLowGN2dvRmubhOUNGJon7gwdeeDMOwg8FUNrejO6auSYieCiDOiwDOI3PipAVOLxQDeuWY6noRp2pNFsl5Omh8aOuPoe9iB60EBoCTl509Q%2BUs6TIPjwigrfPRxIHXckFD5XYgrhX6eAA&X-Amz-Signature=3a9da16b0f3acf31a17848095dea44fb1f7dbe46f744be396f5fdc2d9486478f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUG5WBW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMDwmzDFKH9OwQ4PWMKL6mY2kxaS2WnGQKCk4l512%2FdQIhAPFhMqdcSpg50rwlwdrlGnQDLRYpBOBTGReXMBtycia8KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcORWs8rmaVOSV5mkq3APr9gC9H3XP2SWVQh%2FlV5EZYXRQgV6T094e81RBK3KWsrYzn%2FvJXXe5DjXSaPuV73jJaozEn4ErMGy7c1xmZWP6aM%2FhjMSR9TxzEjBNRM757XyrUaXIYh%2F7v6jtpsVVD516bYpG5WE37ItEL8Sv3cD71J0c28L%2BFsnY1DG9JDEjIMIJgdeHyDBpc6rIDzBH6ywrepK13a1jcXddjcNijgIZZSc3isDqk1daXNUlH2PWj6MQ4wD3RBblJ5DyJD%2FAFbRt5VmGzh1lU8RTqBWU8O6xSgrne5KNZuTfIjm6Zfq9xGmuUxiWNKDaFDzcZD1E6EWrZODdLwIa4dqyUuPRGRjg1%2FvC9CpKXomM2q5zl1vpWuynFTGr5VgXMCVIsqY4ct38c8MVBZivIkTkT2Xgm1SeChDvXq1mjIokatYJrPF%2FXV1wB6RLNBWDAVOgmNVqrIT2%2B2Ex%2BXfRVhg8Jo1KzfJdj%2Bcy%2BM7pJEwRgJiU4OmJzKpQM2ktvSUAWPfpxpkzjKQgSFABh7m9TEhiD42pl50%2F50NVVMakU4fw8sdkhZn5qMpJ6HBsci%2BinoMcppl1YQ3eCL7w7J6vwVUwJRZleIUOK6I13XV8XzciDOmtvWKNDU3CKYypJf6P7YARkjDTlYy%2BBjqkAWXz8xYOLzJdyjpS9Ozouu1VF1w8VR7BqY2KxGHyGluFGJPRdhmijlcTcAElLeB2HM0JyMzp%2Fx4E1SkQxOhLHwkmvvHXxnDWXk3UCKXQPtQYwzAMh7DrcgxOEVthH8u4boGtxbwffvxv0azGTjzehEnBz009iHGyFy1noGi%2Bk9cd0NkJrgl%2B7STYyuxnKwDiwSKOkhgbhVp9tJa9983cj%2FQH9Dyr&X-Amz-Signature=ec1b3d5e82f193d20d1ace179e8b2f1fb907eca494ab426e27246a96166e9c76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7WE32C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD9me%2BfKvVbfSheePrqFd8eXp71PH5RsQokZUzXTmEkrwIgGdiiNgKFotlGnCHUChQa2dzVuZh7Bfe7wxOEBtFn6rcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4qhaFEDNPv6dVM7yrcA7B0A1wQtlvImSk26WIq9iEnUU3CsfPFu23TVTJIzNuE%2FcyJU9YFffUQ7WlzRUxTBVi0oDsnw8nHhrpKUQenjQPFZTN0SqAQKbU%2B7ZWrs0%2FX2fPFGLQvFHmkMUR%2BObY18esmrRaPONOMRCFTmKhsFJo2343wOBnV5T4f2KKKkzKhY70YWbgbxhdiI%2B3OsVeu%2BeHUPmvwJf5ZYpQeq6BeqXaqy60RDt7bd6BlaLw5%2BPdfx5fgBEI%2FhUa2oyHwrZFOQ8Ngm8an81YS3FNyds6btJuFizY2dI2sw3%2B7cb5Wl29u60kB49YMq%2BjccEcOV14tB1mpA5jSPvqEX5VygWCiBk4xCDH1ujdjj3fYKScK3Xk23mlDoBN9oNmsZfYykK1dhmc7t2XhCvUkKHhzphZcRMhlVJCt%2BvmeOkCnfoewUj0OG8qnMG%2BlSDR6g43SJZRxj2Qv1TG00ELPReZzoudKATE5csi6FtWMvewfHMBBPWYgKhYSSh2tZ%2FAb5v%2BAafoAYXTmGjRIEAzZ8zuVpQwt7BUQNLaXSx2AdHsCzg%2BYm1wVXuaZ1O%2FhftYnHa0hEO%2BYdeYqSHkPoKTjPjA8QL3amG4U3kNphFLjyEQJOy%2BHKbWl8jo8qSQl%2B32HtLtmMNOVjL4GOqUBiAtBHeztjCiDu024MQwXrfsp6dpZztcMwKyzsZCcOJclOKdbagi%2BCrseHq%2Bkn1HEGn%2FRFP8Mv6Kh05pNSZdVX4bc51hVq6QAeK8qk%2BcK3yAi0XToRebFOSUX%2FrUnFoxkSBjq8LXiahMavTnL9gpZBWwjtHwpqPKlbJn%2FLJVLRkgDuvNN%2Fa6CibLhvLy8dQMpo1YxCve5sr%2FAfBa1Xe3iq6uA1yco&X-Amz-Signature=321024f48a2965b4e52c696e013de1753d95f63dad74ef5fbe1fcc5d0d060090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBBEYJ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAgBkDmQhJd%2FUq4y72VigdBViGYl%2FHD7DQ8qz780VALIAiAV8xse%2FKxegswufcVYDEweSzhoXWHstn%2F1mK%2BadlRkjiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITQFrLPWremj%2BC98KtwDCyOW%2BZ3CIEjotfWINBqUiAPiXaZuwN2XDBsjaFdgKCPAWzm1fA7cCghkIBcIs1iCFjeNsZNn0wVb8xgGLRbXC%2FMuIvEnnD2HFJhZa8wHf4w2rroSxbHkTg9oYqNa9a5LgTqazEekeEqSS0YTxtoGBh96Ee4Zh27cFuTXSAURrnNo%2FjAh5VR7vEKwYGVMmwzvIQib%2Fa3Qy98hTL%2BGWOMbiuL%2FT%2F7ZD%2FaqYYnO%2BK9y5IBOXmPPFC2Fz81iaifcCZ2nhBsAQ8CfgcuDO39jEgJZuq4No%2FF1Abzv0vhW6SrUPDRvJ7KhVkjASNxVsmmZ9l5bkFYTsfJgm1nuBr%2B4klWXovfEI5R5Ep46MIsUMg0WUgDJzbDLcCC8LsSwoEl7wqTREAILxRtFGY39luwHtSEOB7jFsYPMcVNwJ93hA58lnHPQI%2FycjlNke%2Fa3IHmwHFflpo%2FIA1wWsBtW5zH%2F5fMYLF9s6C7oMfST6UrV5WuYTJ1hKWBUOAXFv%2BKKx8jv1g8TPeHCabq%2BbrQEYU%2BQIoxl2TQVKFtWrj5PDWDjs5TBGJiG%2B81bp%2B%2FnV256gySCruQrYPYFx8De0iSsxNToC8IYc%2BFqQK%2BecNbi2Hn97r6UvfrEAD8pPGdWpjzEzyMwiJWMvgY6pgEAha%2Fw7RDFDPM2xRgB3KGSXhqPydkZ13Ec35uqKPLCvM2ZGKH2dNJ2FLGfYjhXhk7l8a5%2BIweVZ5w1X4cLowGN2dvRmubhOUNGJon7gwdeeDMOwg8FUNrejO6auSYieCiDOiwDOI3PipAVOLxQDeuWY6noRp2pNFsl5Omh8aOuPoe9iB60EBoCTl509Q%2BUs6TIPjwigrfPRxIHXckFD5XYgrhX6eAA&X-Amz-Signature=e8f813f1386b4ab9479de596408c64daa426369fef726a2da22208ed1b2e28f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
