---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL64DRIL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICvoKYa8dXuFoOJuxnPkVHZoZAcTmYKruCy4z%2F%2FVmnpaAiBuJfodnctWjQ6hGaQDdzVdcIiTn1eAJEaC6irD1OOEOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWtkx3wUhH0JTEqnKtwDrVyPrGwUeDlH1hVqJmPcwngFIpKHZFDbvfFArCDemqWKfPXoQy8nkksGmmMGNiyEmoBwEGC%2BU1hs4c6BZZRhJzf3hv8SkLnFsTDPPGf5DHCVgNGNf4Na2jaLByLZfLBqr6dSoO7i3XTI8RvatB3X7UMYJnHaP4pcQ4X9Xe5%2BiInThQ0lt37H508DGBfQndPSGHT4AQZtaUdjtBG07zDSNdjyGbit4uIqyvvNc%2FCLzHy9Ex5%2FVgBj7VZxLCMiqUaHM%2F7bQiLGJXe%2FPCMff6b%2FN3FnqPnjneUfLCfV2cUrfqsqEBr1tjN%2FHVf%2BHNa2zj6ULwXw7hMr%2BgxVIXbRzZC6srmNViVm1lfQJ2Wdg9YQ2qwurUqGnDvODqamwtQJvLISb37INsPSh4%2BB3flFfs4GLWU4kMTmfBRqBfs2dqgHIsY7hu%2FDRgXJe%2B3lqaTrsOtWKytDBikxeyYrY6lQDAQfD7FqBfQBqTjYiqDuJMnPTz19OUrm2iGma9gm5VPzAyHjqPif88z%2BwVFDWsA9931fz1dX%2BNbxQc%2BxotJdWZLBgXV5%2F1h%2BP%2BYvUfnB2h%2F7MRc4LO%2FhkfF5w0Z14PkAP21sHS9U9pQF8uz6to3ABX1Bi6xaR1mGAwT8KokXqRAw0YKixAY6pgESpXYw%2FippyTZ0giTmD0MIFaJnro6z%2FfbTHYzAqCT%2Fv3LD44cuvNfVpItT4nNeVmXC13g7U9CMSiDHdt76P1hqp2SF5QMeW2sTq6qhIP2mMfvNFQ0sxDx6cpDlMSackWmfpNcbL2IJO6yf%2Fl6JMhNKW%2FMyZYtO%2BEQSCnDXJXDRT543QoQR%2BVi%2FBGYsaYBYsmgFQef4%2FYoUjFchaUg6MFcxwaBep1E2&X-Amz-Signature=4fe9f699887ae9367ace75bdb0e8c9eb0b172e3c61c74c06321bd461c534f934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL64DRIL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICvoKYa8dXuFoOJuxnPkVHZoZAcTmYKruCy4z%2F%2FVmnpaAiBuJfodnctWjQ6hGaQDdzVdcIiTn1eAJEaC6irD1OOEOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWtkx3wUhH0JTEqnKtwDrVyPrGwUeDlH1hVqJmPcwngFIpKHZFDbvfFArCDemqWKfPXoQy8nkksGmmMGNiyEmoBwEGC%2BU1hs4c6BZZRhJzf3hv8SkLnFsTDPPGf5DHCVgNGNf4Na2jaLByLZfLBqr6dSoO7i3XTI8RvatB3X7UMYJnHaP4pcQ4X9Xe5%2BiInThQ0lt37H508DGBfQndPSGHT4AQZtaUdjtBG07zDSNdjyGbit4uIqyvvNc%2FCLzHy9Ex5%2FVgBj7VZxLCMiqUaHM%2F7bQiLGJXe%2FPCMff6b%2FN3FnqPnjneUfLCfV2cUrfqsqEBr1tjN%2FHVf%2BHNa2zj6ULwXw7hMr%2BgxVIXbRzZC6srmNViVm1lfQJ2Wdg9YQ2qwurUqGnDvODqamwtQJvLISb37INsPSh4%2BB3flFfs4GLWU4kMTmfBRqBfs2dqgHIsY7hu%2FDRgXJe%2B3lqaTrsOtWKytDBikxeyYrY6lQDAQfD7FqBfQBqTjYiqDuJMnPTz19OUrm2iGma9gm5VPzAyHjqPif88z%2BwVFDWsA9931fz1dX%2BNbxQc%2BxotJdWZLBgXV5%2F1h%2BP%2BYvUfnB2h%2F7MRc4LO%2FhkfF5w0Z14PkAP21sHS9U9pQF8uz6to3ABX1Bi6xaR1mGAwT8KokXqRAw0YKixAY6pgESpXYw%2FippyTZ0giTmD0MIFaJnro6z%2FfbTHYzAqCT%2Fv3LD44cuvNfVpItT4nNeVmXC13g7U9CMSiDHdt76P1hqp2SF5QMeW2sTq6qhIP2mMfvNFQ0sxDx6cpDlMSackWmfpNcbL2IJO6yf%2Fl6JMhNKW%2FMyZYtO%2BEQSCnDXJXDRT543QoQR%2BVi%2FBGYsaYBYsmgFQef4%2FYoUjFchaUg6MFcxwaBep1E2&X-Amz-Signature=b9322d980f70e50bf999a5909c75761986ee08298029ef3a0dc7bf1ce62ad7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL64DRIL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICvoKYa8dXuFoOJuxnPkVHZoZAcTmYKruCy4z%2F%2FVmnpaAiBuJfodnctWjQ6hGaQDdzVdcIiTn1eAJEaC6irD1OOEOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWtkx3wUhH0JTEqnKtwDrVyPrGwUeDlH1hVqJmPcwngFIpKHZFDbvfFArCDemqWKfPXoQy8nkksGmmMGNiyEmoBwEGC%2BU1hs4c6BZZRhJzf3hv8SkLnFsTDPPGf5DHCVgNGNf4Na2jaLByLZfLBqr6dSoO7i3XTI8RvatB3X7UMYJnHaP4pcQ4X9Xe5%2BiInThQ0lt37H508DGBfQndPSGHT4AQZtaUdjtBG07zDSNdjyGbit4uIqyvvNc%2FCLzHy9Ex5%2FVgBj7VZxLCMiqUaHM%2F7bQiLGJXe%2FPCMff6b%2FN3FnqPnjneUfLCfV2cUrfqsqEBr1tjN%2FHVf%2BHNa2zj6ULwXw7hMr%2BgxVIXbRzZC6srmNViVm1lfQJ2Wdg9YQ2qwurUqGnDvODqamwtQJvLISb37INsPSh4%2BB3flFfs4GLWU4kMTmfBRqBfs2dqgHIsY7hu%2FDRgXJe%2B3lqaTrsOtWKytDBikxeyYrY6lQDAQfD7FqBfQBqTjYiqDuJMnPTz19OUrm2iGma9gm5VPzAyHjqPif88z%2BwVFDWsA9931fz1dX%2BNbxQc%2BxotJdWZLBgXV5%2F1h%2BP%2BYvUfnB2h%2F7MRc4LO%2FhkfF5w0Z14PkAP21sHS9U9pQF8uz6to3ABX1Bi6xaR1mGAwT8KokXqRAw0YKixAY6pgESpXYw%2FippyTZ0giTmD0MIFaJnro6z%2FfbTHYzAqCT%2Fv3LD44cuvNfVpItT4nNeVmXC13g7U9CMSiDHdt76P1hqp2SF5QMeW2sTq6qhIP2mMfvNFQ0sxDx6cpDlMSackWmfpNcbL2IJO6yf%2Fl6JMhNKW%2FMyZYtO%2BEQSCnDXJXDRT543QoQR%2BVi%2FBGYsaYBYsmgFQef4%2FYoUjFchaUg6MFcxwaBep1E2&X-Amz-Signature=378aa7eee4a2cf64a7a186b559aaf3b31d3334aa9f68f41477c855c8e443d17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMQOIEI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEpZ7%2FK%2Fw5PlEwhopJW7NZDjOg6ihOQfOTldqODGPE2%2FAiEAgRemBrH3DkLhNPuqsepXtg%2F%2FK5bNM9E91i%2Bj0YRL8qoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwezLHoLOO45iQSyrcA6sFQfJUGK6ABp5AR6rPy4XODoQTs1CCyph8b5sTmbsB4D9IBXRpgTTf1hOJOFKBIvPtxZGimvUO%2F5OKRi6%2Bw97SgA82W3Qvv2g6K%2Fg8NilUgs7SZsffY6LE5I8aLJkjUvat8HDhgUBMBigQYgb4JwW4UCRbp6N5QcKxM4p%2BqX%2FGD6z5ieXD%2F5H%2B6ZzbnrVHWMVixNSZMfZZDC81ysKBMfUlSoFlVWc98Usc%2FolCLcHVJZOefF4mM03kEkKaSZ5LcDULVIiMlCMKIiLk6pwF0mau3M0TEH9UcfA%2FhW%2BUOUV%2FtTIPU32zVPO04aDxkk4SVRbbvPdnso5a9boqZ0XtbFsAWLcJ1%2B1dWdb0M2DoCMlKzcWFbLJw0YgAk2hu%2BvH%2B6PUuhhaJWE%2F8Md4XMDseGZVIeEh1hiyHKauAC5pT2j3uEX0XPpGKqXRWCanh37b%2BK6Nk2W2OxOgm%2Blh3PIs5cAksDhhhgFJpo5tGY%2BnbEr%2FD8qSxpdKb6629jtTArwetiof5YSSsMsD8ly0jg3Eg0%2FPG5D%2BW6tQr6h%2F%2FX7n8J0lBywyVAP2j6J3cSY9dEQZgokhlUcmpyVyAIRNwFSjqwpWz6a3wutCZONFWVvvAzQjDRnbFrmNc7XCweL40MKKEosQGOqUBvs%2BXpfNkhtalNPFY16s8Zb4j%2B7vhwBuCf5ryIEC3%2FYQPCzgSDJltVwiAT6DIP5aygXRE%2FheT3Ecevk5LR5cSWt%2FLIinV%2BTxepG4jZHPhTkDzaL9eC7pTDApMhRUWVF32J9ylH4LJDXWBdurBzonKYVq0cDVhHpQqlaSsSyB104JSHGhATVqC99LFwcFQTzgXh74qjxUXXoBonNDA9ZkynSuKv4NP&X-Amz-Signature=d014dcb427133429dc15f4845b00e4bb7f36347d77d2aaf620cfff61adfae50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVL3OQDW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFWnptXkDcTUv0mbkjPYEqeGpIBte6J4SCm8pBDypW%2FTAiAuTXBnuKOWH%2FYIBlJy8zvTG2tm0udy3m1JlrCPG6VePSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycK0x0xFBeSUtVvNKtwDi8XGtpssEgPrsJo%2FsINmaZY7k3xk0ebwL6qmOv24m1NSBVjhgHTK4StY7ImV7Wpt06RD3kHURtgOrsQ8yF1dOj3f87m4x3su9ZoHMfyAG%2F1Iq7Y5GDme1yBiasUyv315Oa2XzR0w4bbTFXP5426%2BBk8BwB0nbwy%2BNItLgYPSk7nz6crCIp3y8NERKPgDMCcgqm3ycch%2BFP0YK2RFx3S99UsWxH4XgOCqZFuqkbHKnduW1ow1VOifbm4jW5uykLOC8kyug9bF%2Fec9neczQOeBPeBbgV8AGZk9Ei0B6qgd8olJwAfVG0qVIpDGKEx1tObB22CpSkYvHuYCZZBpHbLrV%2FL4IGzJ2LY3a6QoorNAuwiVpo9GGuPfaskoOZ6vSWTS96rfXs8ctwZHTNmA8Dnru1yns99sD5oK8TE8ey8h8ClJ5bTaxfQxqZUZPrd%2BEkhcEl%2BNH7e1R6U2k8JGei2XAE8bkV%2B0k9tTPiaUWNpuiYb5mgvrj%2Bhz4GNhU5U3S6mF2ofXp%2FJ1bnqeBTIqXzOe4D04o4Nbeju53PbH%2FymvPxAQYOSv%2FPArWnLtfi8rW8v589obDvzC%2Be7CDr3xypEsMtO6AcB9kcJ5wXH%2FOa3rMjUw%2FvJ02nPeU77W40gw24OixAY6pgE1kVk8RTmgkC6Z2wMbcNRnyIaWFEttcn5ZGskXDnxyUQ6PhTGupNLXUeWStlxSOrfS4dV71V5clGlQ%2FQWz%2F7qAITPHE15c5rvzDgqvaZYYNlPwmdTTROvi5ADubS6g7kVlFiPh9jVdNyP0FtXfCB1aZcQbVtYAnnWOOGRq0QZ999hL7u1xLyql6d35rbczZ3j7izzk6i0buYn4oSc%2B388iGwcUk4Pg&X-Amz-Signature=e26687332095f6cc66c5cd5a392bfd8a3fe0dc5225a4eee81c87ed8595b2b70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL64DRIL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICvoKYa8dXuFoOJuxnPkVHZoZAcTmYKruCy4z%2F%2FVmnpaAiBuJfodnctWjQ6hGaQDdzVdcIiTn1eAJEaC6irD1OOEOCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWtkx3wUhH0JTEqnKtwDrVyPrGwUeDlH1hVqJmPcwngFIpKHZFDbvfFArCDemqWKfPXoQy8nkksGmmMGNiyEmoBwEGC%2BU1hs4c6BZZRhJzf3hv8SkLnFsTDPPGf5DHCVgNGNf4Na2jaLByLZfLBqr6dSoO7i3XTI8RvatB3X7UMYJnHaP4pcQ4X9Xe5%2BiInThQ0lt37H508DGBfQndPSGHT4AQZtaUdjtBG07zDSNdjyGbit4uIqyvvNc%2FCLzHy9Ex5%2FVgBj7VZxLCMiqUaHM%2F7bQiLGJXe%2FPCMff6b%2FN3FnqPnjneUfLCfV2cUrfqsqEBr1tjN%2FHVf%2BHNa2zj6ULwXw7hMr%2BgxVIXbRzZC6srmNViVm1lfQJ2Wdg9YQ2qwurUqGnDvODqamwtQJvLISb37INsPSh4%2BB3flFfs4GLWU4kMTmfBRqBfs2dqgHIsY7hu%2FDRgXJe%2B3lqaTrsOtWKytDBikxeyYrY6lQDAQfD7FqBfQBqTjYiqDuJMnPTz19OUrm2iGma9gm5VPzAyHjqPif88z%2BwVFDWsA9931fz1dX%2BNbxQc%2BxotJdWZLBgXV5%2F1h%2BP%2BYvUfnB2h%2F7MRc4LO%2FhkfF5w0Z14PkAP21sHS9U9pQF8uz6to3ABX1Bi6xaR1mGAwT8KokXqRAw0YKixAY6pgESpXYw%2FippyTZ0giTmD0MIFaJnro6z%2FfbTHYzAqCT%2Fv3LD44cuvNfVpItT4nNeVmXC13g7U9CMSiDHdt76P1hqp2SF5QMeW2sTq6qhIP2mMfvNFQ0sxDx6cpDlMSackWmfpNcbL2IJO6yf%2Fl6JMhNKW%2FMyZYtO%2BEQSCnDXJXDRT543QoQR%2BVi%2FBGYsaYBYsmgFQef4%2FYoUjFchaUg6MFcxwaBep1E2&X-Amz-Signature=b8cb88dfabd239c1c91c4d23582aab9328f909e539487cd2ba29023ba470645c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
