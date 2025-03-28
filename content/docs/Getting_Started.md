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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIFS4HB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2RKvQAwl9muOaKvbuPuJPoHFxkVSuJKlhsjyWOn7iAIhAJGoQGm3KJhZaiBPwjGUyraAFm59L9VzpF0vE%2FxygsFjKv8DCFgQABoMNjM3NDIzMTgzODA1IgziS9rcJF7eNsdNv64q3AMi1NUyyat3xrIySzrR8Q0mre6vW5EzLKW36W%2FHFmGqb%2Fbz9GSwE0oBq%2FUo5CHcnCn74uHw7SlqVB43%2BH03t%2BBVKSLl07YEJju5sAJnsSdTjwBU6ukhNVHa2BRYgtA8wqpNHsR2LiSR%2FpjhTwtg72I01OlZMPYl6jfs%2FjDqJC2muNsgVlOFYUgsKdenldhF0l5aW7bOxSKpj%2Fj52oSjTD%2Ba%2FnuzA3CdtFKd3qdK5bCOStJGgHgwkWUdKvEQxEfxdMhOwKGnq5e62kkmLNqdJzyeWbkFU2MT9%2FI5Y%2BvXOAltdTSE%2FQqhBWu%2FYcAXRnsoLMncblnd%2Bx%2BPnUphKSLdQHwUxlinB9eB3tQd9yLfuRgeep16U8Jvn4rt4lWQRQiKoQcowOiL5XqvjruDyZuZQwWpcbxOUjE%2FCSFHe4S5tJAQYb%2Be6RSpnKhWS0h907mRypwpB0Up78aEOJ8yJPhRmMtBhztwrx7fyNqdoclw8z6dKVemuM%2BrksbfwxvDEcmzQt0naWyIGitOBCw0PgQ8ayWiGyxKw%2FgLxNLHmd8lmwHVswQj0h3Hp4DoBqIOgQsTTqm0e8AoTCCCSAaoVnqFdmXinbHUDCPKtyZ%2B22FWZbYit81hw3%2BpaotGDy2f8zD7hpm%2FBjqkAVtyygRXYtktJEpoM4BNa4kbldsklh0dNWM3Lp3Rw0BdmU5aiNqmIVnfYVuR1DapffM4jB46fgN55JvfUBj1%2FikRvp2ltglltKsyxrgXymgUWpQyH31Ump3VA8EbGcq3BWxLwn0AMyaB2W0XN3cqR49l5UtAVFyzJ5dsYKHMvczlI%2B4X8dHKN8Hpqvi4OxT2F6Tmw%2FrbOiOHnT3zsGwBIAVIrfS2&X-Amz-Signature=4befc131ac84f4d1a418e5757ce57538f9a7bdc42e8888bf8e44d020ed3869e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIFS4HB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2RKvQAwl9muOaKvbuPuJPoHFxkVSuJKlhsjyWOn7iAIhAJGoQGm3KJhZaiBPwjGUyraAFm59L9VzpF0vE%2FxygsFjKv8DCFgQABoMNjM3NDIzMTgzODA1IgziS9rcJF7eNsdNv64q3AMi1NUyyat3xrIySzrR8Q0mre6vW5EzLKW36W%2FHFmGqb%2Fbz9GSwE0oBq%2FUo5CHcnCn74uHw7SlqVB43%2BH03t%2BBVKSLl07YEJju5sAJnsSdTjwBU6ukhNVHa2BRYgtA8wqpNHsR2LiSR%2FpjhTwtg72I01OlZMPYl6jfs%2FjDqJC2muNsgVlOFYUgsKdenldhF0l5aW7bOxSKpj%2Fj52oSjTD%2Ba%2FnuzA3CdtFKd3qdK5bCOStJGgHgwkWUdKvEQxEfxdMhOwKGnq5e62kkmLNqdJzyeWbkFU2MT9%2FI5Y%2BvXOAltdTSE%2FQqhBWu%2FYcAXRnsoLMncblnd%2Bx%2BPnUphKSLdQHwUxlinB9eB3tQd9yLfuRgeep16U8Jvn4rt4lWQRQiKoQcowOiL5XqvjruDyZuZQwWpcbxOUjE%2FCSFHe4S5tJAQYb%2Be6RSpnKhWS0h907mRypwpB0Up78aEOJ8yJPhRmMtBhztwrx7fyNqdoclw8z6dKVemuM%2BrksbfwxvDEcmzQt0naWyIGitOBCw0PgQ8ayWiGyxKw%2FgLxNLHmd8lmwHVswQj0h3Hp4DoBqIOgQsTTqm0e8AoTCCCSAaoVnqFdmXinbHUDCPKtyZ%2B22FWZbYit81hw3%2BpaotGDy2f8zD7hpm%2FBjqkAVtyygRXYtktJEpoM4BNa4kbldsklh0dNWM3Lp3Rw0BdmU5aiNqmIVnfYVuR1DapffM4jB46fgN55JvfUBj1%2FikRvp2ltglltKsyxrgXymgUWpQyH31Ump3VA8EbGcq3BWxLwn0AMyaB2W0XN3cqR49l5UtAVFyzJ5dsYKHMvczlI%2B4X8dHKN8Hpqvi4OxT2F6Tmw%2FrbOiOHnT3zsGwBIAVIrfS2&X-Amz-Signature=addfd0022c8ed32ee49ae8140671c89f3de208356dd5db3dbd14efbe1325cbad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FE576W%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE4MF5SxcKgQmq0FV3obwyzgNDsMoa9lkebhRgm%2F0D1gIgViwsPBLVpPtgmlA1hs4%2BZFo4ztoiAS9a2VHOwlGQ%2Fg4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLSoJU0uy5%2BIMHoPLircAySi4xNTb%2Fa7kQ4dXtPcpnXq6QDze8w67xVpO1GBX7Fwus0eB3nzxjmvP0%2Fbla2Y3JMCQD0hozuaHC4Oyi9EriTmNRA%2FbDuV2KDfmr5Hejq9D%2B2tC9LuVWy4pUbVW6q3cNm2Sr0vEThdlZIut07M6hso4TOMVrEwlv%2BuJ4sPe6x0qaKyVyGH4n2eqamDXdNFWNWY8bjF2HWs8CKtbrr1De0L4OTm%2BS8JHbsB3%2FA779g9pfYIVrhKmhq8PqKmP%2FFZAyPDcD%2Bgc7A1MnnY3eK9i9d1x5gn2aYDtvSq2BRUhFeR0nY4Zx%2BuZAt3RqXT4IIppFPNKbUWiWUPp7%2BlQ0MzI38d2yCbB92I3wdlxpNmxw3GnfNrUSZNUPOB51UUC%2Bpo65nd2GIzsRn8hlqsJmbT%2FC0RP3%2Fy5vVjV3AfrTvrXiMTes0Gr%2FFNWU8kyMlDGtqBhgrwGHu5YJAnbvUpvMQX3mzz5UaHZUAqrNtxyb2c%2Byr10lO3TBxtz74mlMajQ53Dck2ll8DVVZVd4Zr9X5nogP%2FkGoToYKclt7U6bCn0HbbeiqCoNUDjUKIBi7AiyX1gtojxMV%2BWamLF2mL7JsmsCQ85sIh19oyaJF32zhI51oIiONxTKczCEiPnBWc4MNuGmb8GOqUBMdsBlXXGuSo0ejGeXjLzEE1jrGQMPfwipmmwRRZ6NFM79xa6FlwjJT5H%2Fie30Ulo8g2O4TA0RyNyFsnZj6ZIbbQvxEtSTgCUQW9%2BnDYg0o%2BjG5wDpchB2G002Ja6LBbKtKKTOKmmgVuiIjV0ydSD62N%2F7Cl7nQtGaQ3M57QwHOFVr6VkvAT78u1SgP3AT28QOsvB7fhXbpCz%2FLhdemWjjhqyEu65&X-Amz-Signature=548d2881030bb3104b51980f19171ae28d9ab17341f8e03debb31fc60d08c381&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLHGL7E6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU8KSkgp%2BbbsJyvW7wUBGX0QuFUeDEnawLYRRAY09vogIgNFL0%2FK2TGjlG2JTVadpPYF3%2FxvlTqzBDEZgk%2FhA11Loq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPDyzHQd9qkL135UhCrcA9fqAtfEcYfAMfGU1L2FpJzKNia4b4YCzS%2FRD9G1DElt77pX1u3pysOQD%2FtKkcjL5e2JLwlohYMPBOaGK8Nha0i%2B4OPX8izRsVWAPDVg0a87k09t%2FjwwRxueIp3qAXfZxcM2OZgCvlgcgIKGwtn9BglSAl8Sb8YbUSbd9%2F%2FiT2iNSYP%2FhRTOMUyEvpweD6c0%2FugruFm4eqYf7HToZQVxRrlSxYP4ks4SLGE6%2B11ytgZkDDSzNcvgN2wz0gCxuHRQChyi7mjFqBY3S1Afw4upllNviKgfQtjzNjtuzwXJH1OchZkSguMn4UPecezM0%2Fk1lqiFAtwO%2BXPMHh2DvT0VPzMKeS3eXMSt1SrLcYCeYP%2BRLPH1VVRN1pDW79ej6FLEYwIU%2FPHmFDpBwg%2BX1Oq3utN2N94L%2FjnGxmHCYoVH9KM%2BHoAEE8jRtdjB%2Fcg%2F0C9zVz9xpkktIE6wN8nI3uocrYwSoAqKe0sSpPmA2I4jyaZfQEYRiyvaM%2FrAQI2DS0a9U9tnEFvJTK20MOVnjD06kHyR4ac6WgUndshbDZENATEttM0uIrpAKTFbe6UgfZHrZqPqkwkddaoF3YjQmf1XmeNYwG8YEuaCzx8y2LWdKWhp19l%2BgrGu85H3fmBhMM6Gmb8GOqUBh%2F%2Fro8U%2BTEq1dT0P3yzfg5QiHOfqYBXF35%2FEE%2FPEGVH5H2DaLz0Le3hf1gnostCSmQf6fOqdP8CgchCPvSyZJUoTPQkNSrhlVNX3daJqPC0OZH1XkG3zn8eStct9O5OdcOD%2B5lw4XmCz9h9v5pjy4USE8CCpxePfrjdfdZ06NJB%2B8Y3X9m%2B9Qnd11Uz9TbKTD5oJ42mwvOVzzhFjnvFD%2F6YuRWxL&X-Amz-Signature=801cc2dec7101900f4e35ecaec1282e9f880e7ec9692fc8d7260d0639306280c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIFS4HB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2RKvQAwl9muOaKvbuPuJPoHFxkVSuJKlhsjyWOn7iAIhAJGoQGm3KJhZaiBPwjGUyraAFm59L9VzpF0vE%2FxygsFjKv8DCFgQABoMNjM3NDIzMTgzODA1IgziS9rcJF7eNsdNv64q3AMi1NUyyat3xrIySzrR8Q0mre6vW5EzLKW36W%2FHFmGqb%2Fbz9GSwE0oBq%2FUo5CHcnCn74uHw7SlqVB43%2BH03t%2BBVKSLl07YEJju5sAJnsSdTjwBU6ukhNVHa2BRYgtA8wqpNHsR2LiSR%2FpjhTwtg72I01OlZMPYl6jfs%2FjDqJC2muNsgVlOFYUgsKdenldhF0l5aW7bOxSKpj%2Fj52oSjTD%2Ba%2FnuzA3CdtFKd3qdK5bCOStJGgHgwkWUdKvEQxEfxdMhOwKGnq5e62kkmLNqdJzyeWbkFU2MT9%2FI5Y%2BvXOAltdTSE%2FQqhBWu%2FYcAXRnsoLMncblnd%2Bx%2BPnUphKSLdQHwUxlinB9eB3tQd9yLfuRgeep16U8Jvn4rt4lWQRQiKoQcowOiL5XqvjruDyZuZQwWpcbxOUjE%2FCSFHe4S5tJAQYb%2Be6RSpnKhWS0h907mRypwpB0Up78aEOJ8yJPhRmMtBhztwrx7fyNqdoclw8z6dKVemuM%2BrksbfwxvDEcmzQt0naWyIGitOBCw0PgQ8ayWiGyxKw%2FgLxNLHmd8lmwHVswQj0h3Hp4DoBqIOgQsTTqm0e8AoTCCCSAaoVnqFdmXinbHUDCPKtyZ%2B22FWZbYit81hw3%2BpaotGDy2f8zD7hpm%2FBjqkAVtyygRXYtktJEpoM4BNa4kbldsklh0dNWM3Lp3Rw0BdmU5aiNqmIVnfYVuR1DapffM4jB46fgN55JvfUBj1%2FikRvp2ltglltKsyxrgXymgUWpQyH31Ump3VA8EbGcq3BWxLwn0AMyaB2W0XN3cqR49l5UtAVFyzJ5dsYKHMvczlI%2B4X8dHKN8Hpqvi4OxT2F6Tmw%2FrbOiOHnT3zsGwBIAVIrfS2&X-Amz-Signature=b0cf29d9cc5713481f7a370f897cedd5c61f42a0dbdf43be6b5d4995064e6a37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
