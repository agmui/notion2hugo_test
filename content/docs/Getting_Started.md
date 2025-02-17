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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIT3N3P4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGwqK9OwbQWQykVCuiQJP4h6V%2FM%2FhcF6TNOGIRon70fyAiEAyumayQEAKpKTE3AxMeNwH0PLH7PNBcC%2FtVyp6Xler%2Boq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDD9KOosqCSWrCi8UOyrcA7moGYIlZ8EP7d2RJ3tKxFdHYD93cttikIJdUw5EFW6YQD%2FSJWweoxCfyYK3etRmLxNhnitmFawkM9Pe1Wpo7sY8bV9vtNMdMmCXxfEtVl%2FhrFdBNQdZMQX%2Fvt95eZxiGa70GCt%2B0H5ID%2BArWuWQOEqCzsfiCDK4oYSU90Bi3i793pyFbzEPvLp4F08U9k4zKsPcDSJMv1JcL28WCdd9LbKCKvU0NpAI1oY%2F5ExqEq3AuExF7%2FZ58EP4rvHETLIVqswKAghIH7RVGfyFNQ9SRHM%2FoBGy3sYzeHbRPS3avvltSN32uF981u%2Bol2%2BWCDNqLstyRqJvs5DgOjmeDOcdLnG%2BkMGl%2B6A1BJalS6%2FpAVD1btIiEUu%2Bo6CZAfbE5jeBIhehJpLWxL3TXsxuXDSf93LOU2RItt%2FJxWbZut3H2hZzyEBLRBXn7hTqx%2BZLX%2BT7Vd9Srxz%2BOsESJVzI87l924NO%2BumPLzHPfD%2BQ5vc99HqOTJZTfP8MpHY43DInIWu%2FaHodSW9%2FHJ13isbZKrcK%2FjYMkckhmhRE8yhBfHHMr72q18ip0IK1gpbnwCJ2Nxp7FFL2ybkh8BJhMee7bm%2B8%2BHP5qLdAVBz33Nb8uZ6%2F%2FigYkW%2Fgd7xlCM8n4DA5MLGByr0GOqUBbgAAz5JAJJQeqjxmxTYI5%2B97pUCV5XwkwhfQOk4nWvTACcpIZ%2FoezIQ6%2B5su%2BdPAEsE4ki5QkiRebgsrc0MHtby0dOZkNFu9Bgdd6%2BiMqGu4GOt%2B7v2UbH9qqteXbtoZ9z1KRRGEg0zjHdwbcdVcOh6Nnii7xC%2BtFEawZAUjzXWZuWdBl%2FAYVa1WTiowy%2F8RibBlX6IPSWlfEmtUE5f%2B1WHlTlky&X-Amz-Signature=204a7de9e0e0c304ba0168b5e9f1906c15370ed2f4d2d8d91840bcd23c561a49&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIT3N3P4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGwqK9OwbQWQykVCuiQJP4h6V%2FM%2FhcF6TNOGIRon70fyAiEAyumayQEAKpKTE3AxMeNwH0PLH7PNBcC%2FtVyp6Xler%2Boq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDD9KOosqCSWrCi8UOyrcA7moGYIlZ8EP7d2RJ3tKxFdHYD93cttikIJdUw5EFW6YQD%2FSJWweoxCfyYK3etRmLxNhnitmFawkM9Pe1Wpo7sY8bV9vtNMdMmCXxfEtVl%2FhrFdBNQdZMQX%2Fvt95eZxiGa70GCt%2B0H5ID%2BArWuWQOEqCzsfiCDK4oYSU90Bi3i793pyFbzEPvLp4F08U9k4zKsPcDSJMv1JcL28WCdd9LbKCKvU0NpAI1oY%2F5ExqEq3AuExF7%2FZ58EP4rvHETLIVqswKAghIH7RVGfyFNQ9SRHM%2FoBGy3sYzeHbRPS3avvltSN32uF981u%2Bol2%2BWCDNqLstyRqJvs5DgOjmeDOcdLnG%2BkMGl%2B6A1BJalS6%2FpAVD1btIiEUu%2Bo6CZAfbE5jeBIhehJpLWxL3TXsxuXDSf93LOU2RItt%2FJxWbZut3H2hZzyEBLRBXn7hTqx%2BZLX%2BT7Vd9Srxz%2BOsESJVzI87l924NO%2BumPLzHPfD%2BQ5vc99HqOTJZTfP8MpHY43DInIWu%2FaHodSW9%2FHJ13isbZKrcK%2FjYMkckhmhRE8yhBfHHMr72q18ip0IK1gpbnwCJ2Nxp7FFL2ybkh8BJhMee7bm%2B8%2BHP5qLdAVBz33Nb8uZ6%2F%2FigYkW%2Fgd7xlCM8n4DA5MLGByr0GOqUBbgAAz5JAJJQeqjxmxTYI5%2B97pUCV5XwkwhfQOk4nWvTACcpIZ%2FoezIQ6%2B5su%2BdPAEsE4ki5QkiRebgsrc0MHtby0dOZkNFu9Bgdd6%2BiMqGu4GOt%2B7v2UbH9qqteXbtoZ9z1KRRGEg0zjHdwbcdVcOh6Nnii7xC%2BtFEawZAUjzXWZuWdBl%2FAYVa1WTiowy%2F8RibBlX6IPSWlfEmtUE5f%2B1WHlTlky&X-Amz-Signature=c28b18568c89dc3e27c00a7769131edbb2c16d3650f455f561373631c73de8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMRWQAM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAoPV3OamCxVqcJ9Mym8pfm9gUTirlYDwdMulAIOIshXAiEA3zJZdo5cfG6RmS58wPLLn55dz2b6rNUINixeFo0QKAEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInY9dpdgFewx%2FxHlyrcAz7906q1anqEmFIypOzKxjYvZnaxVkioL9rTnrsFbX9dUKGmf%2Fw1d13%2FGw36W8hkGMzL%2F1GPGikK5C%2Fuo%2B8XDp6BoCGSosw2zVXc4%2Bf1h4y8WONvxFYbFfHKLBCquWWVTeVxLiQ4Fsxa4v%2BmkSAgMkT7uaPCpUHRKUBumnsBSIT7fApDnU6wtFEo36a7RbUVplAQRgyBwW%2FL25iZJlsioP8zodua1EQ1OP%2FYCogmhRScAGulK7avkaN4vt9bPPgb0%2F6ruqRcL4KroGo5b5sxHjMXqzzP0Pa7rPeIozOZpSV%2F%2Bk1Wh3wXkdsRpeTQltB1EvN97xTRrj0cSE42FkUtRYn4ePdGGOLFgErwTlJI2GisoyImaS%2FWq088f0rMIJVPZ9JxPwt6mTaFiM5%2BhtdANY%2BTnhZS7%2BW9VQ1sQS%2BvOdoeExyLqT2Esv6AC6O%2ByaxyNZdjgnbQQKLKQiaQVpSExaCO%2BAIe9qGE2%2BDseT5sTFiaAxQ%2BesPc6i96CGUzPgkz1vdrJDbqGNVq6ym6uEw0EC%2FutQKDQRc%2FIWuPg8jN7o%2BVkGCgv2TsXDJ7R%2FsLfZJWvEl%2Fc9EoqKOMJOP5SG%2BMNtc8xdb4uNXdmf%2FVZV5AG2oBb%2Fc%2FeBz%2B62jou7u%2FMMuAyr0GOqUBUZcMMb%2FimMul6QsfYkkRPF6GAtqDUuRiMFYNb12zWkWdSpaZXc8ZQ5OdhUWMpwLvwJ88fNxwJ5mECibIFa%2BuKRyo073ZFUog7Tus1eKxYt0vQmKyTk0H35EwfeuHpXOktixrVaOZmBEjmxCqsq7q6EcF%2FCryGfnPDecvMwvSca%2FwRpys7vde7KI17frLKzOaqdc8Pg8y9Tp7%2FM9oAB9Scb94oiOU&X-Amz-Signature=d3f442d3c97cf13a2d5203b6f205b0d4f03be67bb0d1dc0e3893b57387c08b14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7PHGWQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID3o0ZAhPxJ9pcJzoRUk3shqavI1GJewP1%2FAJjaQlMNWAiEA%2F07ErRWrQpnV%2FlPINBEQW%2Fgu6Hua%2FuN1SZVZkTHOo1kq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDISB4Qmo5SvPMrXBSyrcA5jl4tHZSTDL%2B%2FJ0D2f3Q84uQ2KhZez5lhQvCSheK3B353KUYtEYozVgl99h4T4A5loUF41yw%2FfAoLJwFHrvcj55a%2FfLkxr56qYi4%2BxrLwGyaPmWW5Qx80%2FmvDLOigzPH2xejz4fjR4EsVWmnA5a2rwIYEob1ghsNjAObvSW%2FA61Ep4gSEir3TbUA23gKpR2w8PEViFn0vXSZM8Zv0Ooua%2BvdMACYhPdoZ5iRexDxbhGCZCGFf5k4E45Mf9bHhDypkeTC%2FeOK3Ylw7vkjTPu0taa6QEAyZMPD%2F10HksdEvj5MVPVPnjTKDs9hDznQPBd63XV7WAxSImOUFhlGMK4MK5BBU%2F8mNoHtJV4UOQYnVtT1oTk93SBQbQpvBsMpNphQbFIRPlyatqfQy%2FCsfzj1cB9yOMiauM53CpYXHTkVrb8tYRAwAMZ%2BHYjcteWCaCCMLCZAyNHqEGJi%2FWo4GWxun7OOznvH74DSxT%2BBGNyEpCjcCGthQnOAWfLVSqpwmTTFETOLuN5V%2FF%2F%2B98K%2B5p0RW2lyFiuL8cxTYniS32JXk2xc6lWF6nXZRjgue90mVmLOp8yXDMydzalqwsyqkm5I0iaWfRC6HENYDA%2FJkiCTr3SSoCGcGb4P%2BhyXoBHMI2Byr0GOqUBEAMW0Vwl8SAnRPQXWxNgOXI10UWFaVqmGEQ%2BxaDwqdINGL4wE7ykp%2B9qEEJudiIlJfV6vT%2B0HuWWTXyGw311PXo1KnItFVgBR13UjeWdaTLD5yGjf1HqWDrmDDXtmH36Y%2Baf%2F3qH5S8Dt97pvbpPMXwrb8gHg3p56SMkgppSTY1hcwLl0XDYOtkN6oC4VMRXplqfGza1jOYtZFhq90x5ul5rSw2n&X-Amz-Signature=dccf373773255c6997645b756fb10d80462c54cfb8dabd0639b07a1b41d6f608&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIT3N3P4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGwqK9OwbQWQykVCuiQJP4h6V%2FM%2FhcF6TNOGIRon70fyAiEAyumayQEAKpKTE3AxMeNwH0PLH7PNBcC%2FtVyp6Xler%2Boq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDD9KOosqCSWrCi8UOyrcA7moGYIlZ8EP7d2RJ3tKxFdHYD93cttikIJdUw5EFW6YQD%2FSJWweoxCfyYK3etRmLxNhnitmFawkM9Pe1Wpo7sY8bV9vtNMdMmCXxfEtVl%2FhrFdBNQdZMQX%2Fvt95eZxiGa70GCt%2B0H5ID%2BArWuWQOEqCzsfiCDK4oYSU90Bi3i793pyFbzEPvLp4F08U9k4zKsPcDSJMv1JcL28WCdd9LbKCKvU0NpAI1oY%2F5ExqEq3AuExF7%2FZ58EP4rvHETLIVqswKAghIH7RVGfyFNQ9SRHM%2FoBGy3sYzeHbRPS3avvltSN32uF981u%2Bol2%2BWCDNqLstyRqJvs5DgOjmeDOcdLnG%2BkMGl%2B6A1BJalS6%2FpAVD1btIiEUu%2Bo6CZAfbE5jeBIhehJpLWxL3TXsxuXDSf93LOU2RItt%2FJxWbZut3H2hZzyEBLRBXn7hTqx%2BZLX%2BT7Vd9Srxz%2BOsESJVzI87l924NO%2BumPLzHPfD%2BQ5vc99HqOTJZTfP8MpHY43DInIWu%2FaHodSW9%2FHJ13isbZKrcK%2FjYMkckhmhRE8yhBfHHMr72q18ip0IK1gpbnwCJ2Nxp7FFL2ybkh8BJhMee7bm%2B8%2BHP5qLdAVBz33Nb8uZ6%2F%2FigYkW%2Fgd7xlCM8n4DA5MLGByr0GOqUBbgAAz5JAJJQeqjxmxTYI5%2B97pUCV5XwkwhfQOk4nWvTACcpIZ%2FoezIQ6%2B5su%2BdPAEsE4ki5QkiRebgsrc0MHtby0dOZkNFu9Bgdd6%2BiMqGu4GOt%2B7v2UbH9qqteXbtoZ9z1KRRGEg0zjHdwbcdVcOh6Nnii7xC%2BtFEawZAUjzXWZuWdBl%2FAYVa1WTiowy%2F8RibBlX6IPSWlfEmtUE5f%2B1WHlTlky&X-Amz-Signature=56cc2f2ac709a53127e627dded9ed3519e1bac6200094381b0db7e3880273496&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
