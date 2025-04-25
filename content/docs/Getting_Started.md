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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMDF3D5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbp0pScAX3u7Y93iL9VG9hGoDDY0uGJVhojSyRE8ITlwIgaLkifrmPHHz2TNf17VLTqTcxFxcOrSKdpPJIwWestBUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMenDOTzYk3IFguZ7CrcAzqO8qS0bbSzfkbWSOEP5fytqXk5Cxoz8hPuQWfOfB97TCFVEip2yUS4ApJMiiUs5CBdnmkcam14DqWqJctOV6rAV%2BLe7ah86jVwxzsQwaQaK%2FGaEm8BYFtalPphuqQ3gA%2BnbrY%2BsfFQsxs%2BkJ1p1k7Ehy7Ia0IlZq9nz4PPYFRY1DuaJ3pL%2BTkSv%2B9k%2BXEaLvGa%2FCrKSfikYrPvh2z%2FaAslL0XROU%2FjFHHlpsifAtHMo1zKPAGd526%2B4a8xkrYRT5f3tUFhHIkfgawmVzcRsZbJMZZqMXx%2BBQ%2FIZh5kjd00Jp1DvfKkkkXIfQnr6zce%2FPTxawKwP%2BhrXwPTCGoCkm1mz2gYyePiCg0amuQ8%2F3BxPHMMJ5Up79qpxBqIpVniTmgkAZKZj%2FfNLUa2YGn5ie%2BytGndv%2BoA8ekq8tng0HvXoQvZr7%2FIjicfsmNWZYqOCRimRaFiAMu%2Fbu8FiUM6Ei3JxkVkvaovsNFkmoyUmfv%2BVRTDd0wKo%2FfmeTDkgnDxHbiDskOpXD7BlRJI5NpgX9GO%2FtWq2oq7ro2%2FXucaiwcyRfFviLDQfqu1%2FcZPVcyfPRivJDyw5jN1QbsZzYpjD4tHTyV4yXoeFKyZcsT4Xo5ZOYS5KnP0y9NRkrH2MLGwrMAGOqUBPOi4Q%2Fcu8wiCCmPWZEPK3bye6xHCMzzEQnDtg29mT4wNqS7yBnY%2FAxUtWhpcj7s6py3pElrK%2BBRSzb9iWWeuPePRMIH10MwH%2F%2B35RIil5SWkIGzGb0iUL7kcsfwE%2FOpdskNW8AdurcdV8Jg3ogA94%2Bdh%2BylTz1geDy%2Bn3I7mx1IGJbZ%2FLxlKwNaCji7cEq4kMS8oPDeK%2BSw0fKanI7CFacKYDTHR&X-Amz-Signature=b2d0fdecb588de8092a09086fd076ba4bfae2062da6878e4d4fca7a44b2a4536&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMDF3D5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbp0pScAX3u7Y93iL9VG9hGoDDY0uGJVhojSyRE8ITlwIgaLkifrmPHHz2TNf17VLTqTcxFxcOrSKdpPJIwWestBUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMenDOTzYk3IFguZ7CrcAzqO8qS0bbSzfkbWSOEP5fytqXk5Cxoz8hPuQWfOfB97TCFVEip2yUS4ApJMiiUs5CBdnmkcam14DqWqJctOV6rAV%2BLe7ah86jVwxzsQwaQaK%2FGaEm8BYFtalPphuqQ3gA%2BnbrY%2BsfFQsxs%2BkJ1p1k7Ehy7Ia0IlZq9nz4PPYFRY1DuaJ3pL%2BTkSv%2B9k%2BXEaLvGa%2FCrKSfikYrPvh2z%2FaAslL0XROU%2FjFHHlpsifAtHMo1zKPAGd526%2B4a8xkrYRT5f3tUFhHIkfgawmVzcRsZbJMZZqMXx%2BBQ%2FIZh5kjd00Jp1DvfKkkkXIfQnr6zce%2FPTxawKwP%2BhrXwPTCGoCkm1mz2gYyePiCg0amuQ8%2F3BxPHMMJ5Up79qpxBqIpVniTmgkAZKZj%2FfNLUa2YGn5ie%2BytGndv%2BoA8ekq8tng0HvXoQvZr7%2FIjicfsmNWZYqOCRimRaFiAMu%2Fbu8FiUM6Ei3JxkVkvaovsNFkmoyUmfv%2BVRTDd0wKo%2FfmeTDkgnDxHbiDskOpXD7BlRJI5NpgX9GO%2FtWq2oq7ro2%2FXucaiwcyRfFviLDQfqu1%2FcZPVcyfPRivJDyw5jN1QbsZzYpjD4tHTyV4yXoeFKyZcsT4Xo5ZOYS5KnP0y9NRkrH2MLGwrMAGOqUBPOi4Q%2Fcu8wiCCmPWZEPK3bye6xHCMzzEQnDtg29mT4wNqS7yBnY%2FAxUtWhpcj7s6py3pElrK%2BBRSzb9iWWeuPePRMIH10MwH%2F%2B35RIil5SWkIGzGb0iUL7kcsfwE%2FOpdskNW8AdurcdV8Jg3ogA94%2Bdh%2BylTz1geDy%2Bn3I7mx1IGJbZ%2FLxlKwNaCji7cEq4kMS8oPDeK%2BSw0fKanI7CFacKYDTHR&X-Amz-Signature=5ff81b69e262cefb4ca6e7bf0c554ae5f295894f739ff472826bfaf2f51036b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPGXHC2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Xx5yC30zDO5dYyZ5cW1AEM%2F%2FRQGbiQ5cYrx6BSuaLQIhAJBZV3Khf1o%2F2L6Xm8kzCWjbQ5qi%2FG3It94X4xr7%2BDvcKv8DCCYQABoMNjM3NDIzMTgzODA1IgxJt31O7x5MT2u22Ksq3APXisIzCyIhwDgYy8DEr5sd4jWfGveTK585Vbvzu27nPa5UP56jmILuPAEzZ4PhD46rhFamo%2B8qmsomuHXV%2FBNClpwHsVrWqnCfFHVcvF33dvAPoXvjnaZ%2BGldFIy%2BZquHgZGeuXfn8mU3gc711dyTkkXPVz2kCdTQ3iX1dtEdvfktmIgPxCOIuttawkFdHzYk06vvdyEhGZbmmBd87KzkCD6yZrLr6%2BeDn%2BXSbszzXPSe9c5W7yCHUPijRwZfdHid%2BQUy3ga9P3oUWyQWB%2BlCLlCGaoXtIr2tSYRqK5XR%2FFTZwZRYzDp6wX3z%2FmcTPSt7WdblJ1MHWmDh8lhuT%2B7z8ohkxcu4Eqb2EtAEBrGvdNo987T7gtaKGKDe3%2FECGWY54lcQ2GwyfHU3gfV%2FMybZsH6MxBLe2iMtkpMBnO8QxUxNOdAAmWSF50ahq5q4YmyoyJ%2FOP%2BRluGjMzfyiw7dVWMxztdos5PwsAk94fpQ%2FF2qKCSUAAsUa%2FOAMiaUBD3HUrcua0tjzpZeBp43UP6F9zUPw4kccHx8Y0Etse8MWyF53Li3GMzruHF7cGc0j8eE%2Fbpky%2FUQ0z2Krar8Dv2zEMdf8LPeFC9vFUyU5bFd%2F2OKdMQigktMNTYWf4SDCwr6zABjqkAQT%2F2mXKrLr7GlnQyVF%2FcoajTPizBw2o%2F6UwspDbJw%2FuugM3idz1H86ACjotwuxy8ooUiF2ib0QEv4yLKX7i7O339DE7k4OAbPkenVzOFYIMkn9UeuPcr8NFCOdtZSfmiBdYGQ5QH2XlBdWB5ozhJrcKKqJaIk26ghRuX2PWXqf4kk%2BStyGEhQDALsIQTRH%2FicjADw%2BhSbz%2FswgBUiCD0pEdNhyS&X-Amz-Signature=6243d043cf78074a53cd4a8db460d39ad6e745766b95ce9b5268dae7b51afc58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAY3EESI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT7b3AJTGPqRFfXETcRYHRuND%2BkW5LzJmEqgpKjfxiIAiEAyzf0SlEg%2B6%2FmXmoB8uVAsb%2F6ZfgWV%2F1YUEYZAhT2srkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDACv8dKkHOOUvrNhiyrcAxm88qJC%2B1UQit1Ck8x03ebNCFlzYgo19zFeTYLarCD1Mp3ZF82MyKldCbNWaCkl3FQQd9KuNzr%2FOq%2Ffnj4GlUmPDbxK%2BiFVtVY5Su%2FP3IAz546yakxnNA0J87b0qdCmC40kSCdfKhq3CxoeYc0ew2kOsxIY7qAgryICjn1TGQ0JWAHm%2BMsNZIIqkVAj30%2Fmbz9tlmPwg%2BfzBiFVPLT6L2jNXJovx%2FOokKWVSHUZYggWTlP6a8ZuEiR9%2B528VDeFiYkQjzQoF5FYL61W9%2BEqfjIMOWacet0B8zBQJAkdsOHtrih7F7HRKclSp8ZqDDpxRznzC558%2BVRFbL5Wuw25cgVc%2BUIFJoBqo9btxIgauYJTs9wnPFRqyDiWNdETymNR62xnVt5KWiKrwz%2BjQXwx%2FcrkFc%2FLAyP584kdJDhEKBtYIwf3Iw7Q%2FwFLuakFX4ZS6Tz2dCaBxe3KqPV5eMqTBHB1ygzSJ%2BDIlJUbPG4mlLsUb9ZJB9d1RTx%2FqGrU4Q9bL2wsicpcGG7HrIYAxXs4BUe0AfRCgkIhitJ4ZtRH1rAx0MMp%2BpWF%2Fh715KpsqMywcILVVZI9VNkMmmvmo5R8uB4tm6nM8DmRhLGtrt9HrEnFSC0wegevmP8WEdwHMKuvrMAGOqUBUkqbtQU9iQz3KZk8B3TDktelanUFwT%2F2AcDBoL%2BS3MVU2ZRlSrKzff8VFw9ugvJ0%2Ff%2FxnJ6W7EldKyUoXkemxPe6oWZCjB5R7kakQ8OQssAAVT%2BqjenmPO%2FKYD26GOTQictw8Qu2BvGuogGC34hhhdk%2Bft3KyqvG0GDCzR7P7abRBZpyZuIpfbmumWaYIwvZ3xMX%2B%2BgbJcnQB3aucnV4z81W4Qgg&X-Amz-Signature=94543d8317ae7d24038ee0f454c5d7a3bd232979da6ebcbceb29ed84c7a9a319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMDF3D5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbp0pScAX3u7Y93iL9VG9hGoDDY0uGJVhojSyRE8ITlwIgaLkifrmPHHz2TNf17VLTqTcxFxcOrSKdpPJIwWestBUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMenDOTzYk3IFguZ7CrcAzqO8qS0bbSzfkbWSOEP5fytqXk5Cxoz8hPuQWfOfB97TCFVEip2yUS4ApJMiiUs5CBdnmkcam14DqWqJctOV6rAV%2BLe7ah86jVwxzsQwaQaK%2FGaEm8BYFtalPphuqQ3gA%2BnbrY%2BsfFQsxs%2BkJ1p1k7Ehy7Ia0IlZq9nz4PPYFRY1DuaJ3pL%2BTkSv%2B9k%2BXEaLvGa%2FCrKSfikYrPvh2z%2FaAslL0XROU%2FjFHHlpsifAtHMo1zKPAGd526%2B4a8xkrYRT5f3tUFhHIkfgawmVzcRsZbJMZZqMXx%2BBQ%2FIZh5kjd00Jp1DvfKkkkXIfQnr6zce%2FPTxawKwP%2BhrXwPTCGoCkm1mz2gYyePiCg0amuQ8%2F3BxPHMMJ5Up79qpxBqIpVniTmgkAZKZj%2FfNLUa2YGn5ie%2BytGndv%2BoA8ekq8tng0HvXoQvZr7%2FIjicfsmNWZYqOCRimRaFiAMu%2Fbu8FiUM6Ei3JxkVkvaovsNFkmoyUmfv%2BVRTDd0wKo%2FfmeTDkgnDxHbiDskOpXD7BlRJI5NpgX9GO%2FtWq2oq7ro2%2FXucaiwcyRfFviLDQfqu1%2FcZPVcyfPRivJDyw5jN1QbsZzYpjD4tHTyV4yXoeFKyZcsT4Xo5ZOYS5KnP0y9NRkrH2MLGwrMAGOqUBPOi4Q%2Fcu8wiCCmPWZEPK3bye6xHCMzzEQnDtg29mT4wNqS7yBnY%2FAxUtWhpcj7s6py3pElrK%2BBRSzb9iWWeuPePRMIH10MwH%2F%2B35RIil5SWkIGzGb0iUL7kcsfwE%2FOpdskNW8AdurcdV8Jg3ogA94%2Bdh%2BylTz1geDy%2Bn3I7mx1IGJbZ%2FLxlKwNaCji7cEq4kMS8oPDeK%2BSw0fKanI7CFacKYDTHR&X-Amz-Signature=266bd32643fcb99e6b95f21387473b5c2cf70df0826e5d7c7317d21698bc405e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
