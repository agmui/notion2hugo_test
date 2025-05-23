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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI3SBMP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHhdN5JRLg9QMlymteWT2Ca%2B42S%2BP7PYy8sPzMDI3V%2FMAiEAwS5GUKcLaHw8%2F8Wo4SEFu0hDAcRs2vSWDMvMk4d978oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKoGpf6OLUOPIZRWircA5xDo9Aw36V%2BgxqCVkiznLl2LgIZTosCwPEktlkEstmcRIYeOrGwwfef%2FHlaApehdRzem3z3Rlo3VNKaUk0Tq4g9smWNn7Of6uYgMyzk5iJRaFR8bzbF1DL52KBGf0AfpiXmkbyF5q%2FbeZ%2FKm%2FFpveBGHQRYero1bynPj6fLSO12%2FTI5GrlODbXgtHD5pD8uUxTbU%2BChlPYA%2BrW753ldxeiFONQ8DncV3jYobNKkJGFkq9JIzmQl5Q5rusUCNlQUjfA685bSjIuCVKRwGftmAy8xsWtVVA93yQSappQkX2c2R4nmPfebfRJKHA5xUynxT2%2FTMuF6WGKMMLwsTDE7iFL4sZEeb%2BqkaNZrXHSaPB2FDSwPX5VcdKJWZTYjwhBawu4XbhDmoCHAsQJuMtv5enOFMVmlJVqnTYnVcbspk5gageM0wjQWuJ6vAHyJRslMk%2FUx7IeQIuQRo3DtJhyoCa9y6eoBiZkgprJnu9p%2FnPLBp%2FHc4i6Amcp5A8%2ByOWNuRjSfAGKqUrRk%2B6lkl99Hc3oTBZ8FhzgRvF6JEz%2BMp%2FSOp76Kf7Qq2B54W2hjLBgMjQuuZRNZp1NKmFCgNfk9ld0vFYgwJYkxlsXNNT1g%2FKP7WNalPFu9ii2F5KUdMNXXw8EGOqUB2NrjZPOIBd8BhWmBoeglatO87TQvApdqeHYOLxtnHvv2X%2Fo5kB4koibbNeif7K%2BszjAJXQ6Hwqvb7dun5ijI70qTok7Jxnu8QibYO6gt6knyDR1ZkO5BZoPdGa1JzFXuHIR0sdv8QE5Pf%2Fr2CRauX51htjpZx3r9wDcgg%2FFfH%2FhP8IJKKkzAUy759rWcSqddpHJVLYpmgvmrQ6DorDBd%2F6EyXeia&X-Amz-Signature=c1890f042bc3f408c26f4605c100418477487e7230140658639c82bbad2226c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI3SBMP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHhdN5JRLg9QMlymteWT2Ca%2B42S%2BP7PYy8sPzMDI3V%2FMAiEAwS5GUKcLaHw8%2F8Wo4SEFu0hDAcRs2vSWDMvMk4d978oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKoGpf6OLUOPIZRWircA5xDo9Aw36V%2BgxqCVkiznLl2LgIZTosCwPEktlkEstmcRIYeOrGwwfef%2FHlaApehdRzem3z3Rlo3VNKaUk0Tq4g9smWNn7Of6uYgMyzk5iJRaFR8bzbF1DL52KBGf0AfpiXmkbyF5q%2FbeZ%2FKm%2FFpveBGHQRYero1bynPj6fLSO12%2FTI5GrlODbXgtHD5pD8uUxTbU%2BChlPYA%2BrW753ldxeiFONQ8DncV3jYobNKkJGFkq9JIzmQl5Q5rusUCNlQUjfA685bSjIuCVKRwGftmAy8xsWtVVA93yQSappQkX2c2R4nmPfebfRJKHA5xUynxT2%2FTMuF6WGKMMLwsTDE7iFL4sZEeb%2BqkaNZrXHSaPB2FDSwPX5VcdKJWZTYjwhBawu4XbhDmoCHAsQJuMtv5enOFMVmlJVqnTYnVcbspk5gageM0wjQWuJ6vAHyJRslMk%2FUx7IeQIuQRo3DtJhyoCa9y6eoBiZkgprJnu9p%2FnPLBp%2FHc4i6Amcp5A8%2ByOWNuRjSfAGKqUrRk%2B6lkl99Hc3oTBZ8FhzgRvF6JEz%2BMp%2FSOp76Kf7Qq2B54W2hjLBgMjQuuZRNZp1NKmFCgNfk9ld0vFYgwJYkxlsXNNT1g%2FKP7WNalPFu9ii2F5KUdMNXXw8EGOqUB2NrjZPOIBd8BhWmBoeglatO87TQvApdqeHYOLxtnHvv2X%2Fo5kB4koibbNeif7K%2BszjAJXQ6Hwqvb7dun5ijI70qTok7Jxnu8QibYO6gt6knyDR1ZkO5BZoPdGa1JzFXuHIR0sdv8QE5Pf%2Fr2CRauX51htjpZx3r9wDcgg%2FFfH%2FhP8IJKKkzAUy759rWcSqddpHJVLYpmgvmrQ6DorDBd%2F6EyXeia&X-Amz-Signature=bbfde98861b16fefd22c62d48da5ab9e4ba50cbe7cd5abc37ca3d4e38637c9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI3SBMP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHhdN5JRLg9QMlymteWT2Ca%2B42S%2BP7PYy8sPzMDI3V%2FMAiEAwS5GUKcLaHw8%2F8Wo4SEFu0hDAcRs2vSWDMvMk4d978oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKoGpf6OLUOPIZRWircA5xDo9Aw36V%2BgxqCVkiznLl2LgIZTosCwPEktlkEstmcRIYeOrGwwfef%2FHlaApehdRzem3z3Rlo3VNKaUk0Tq4g9smWNn7Of6uYgMyzk5iJRaFR8bzbF1DL52KBGf0AfpiXmkbyF5q%2FbeZ%2FKm%2FFpveBGHQRYero1bynPj6fLSO12%2FTI5GrlODbXgtHD5pD8uUxTbU%2BChlPYA%2BrW753ldxeiFONQ8DncV3jYobNKkJGFkq9JIzmQl5Q5rusUCNlQUjfA685bSjIuCVKRwGftmAy8xsWtVVA93yQSappQkX2c2R4nmPfebfRJKHA5xUynxT2%2FTMuF6WGKMMLwsTDE7iFL4sZEeb%2BqkaNZrXHSaPB2FDSwPX5VcdKJWZTYjwhBawu4XbhDmoCHAsQJuMtv5enOFMVmlJVqnTYnVcbspk5gageM0wjQWuJ6vAHyJRslMk%2FUx7IeQIuQRo3DtJhyoCa9y6eoBiZkgprJnu9p%2FnPLBp%2FHc4i6Amcp5A8%2ByOWNuRjSfAGKqUrRk%2B6lkl99Hc3oTBZ8FhzgRvF6JEz%2BMp%2FSOp76Kf7Qq2B54W2hjLBgMjQuuZRNZp1NKmFCgNfk9ld0vFYgwJYkxlsXNNT1g%2FKP7WNalPFu9ii2F5KUdMNXXw8EGOqUB2NrjZPOIBd8BhWmBoeglatO87TQvApdqeHYOLxtnHvv2X%2Fo5kB4koibbNeif7K%2BszjAJXQ6Hwqvb7dun5ijI70qTok7Jxnu8QibYO6gt6knyDR1ZkO5BZoPdGa1JzFXuHIR0sdv8QE5Pf%2Fr2CRauX51htjpZx3r9wDcgg%2FFfH%2FhP8IJKKkzAUy759rWcSqddpHJVLYpmgvmrQ6DorDBd%2F6EyXeia&X-Amz-Signature=9c301454dfae948abefd1bb9a489c3d5ff24fb1d138b0a5cf46428678b23359f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYLDNNPI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICu5wnpzeYtCG8odkS3tJ%2B6aP8EhznQy0DuCfphQNq24AiBHvF6c7zS1aPwexbmZswbhmH1g%2F7qqrIxomh0lrLv6eCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0FFiHMLs%2BUR8kIRPKtwDf8F5EowsnZPPv3FW50T%2FWLC7%2FLZ2PZ%2FKyejSiBDbaWOKshkPZ8ki7BG7Uq%2BZxW0EPvCAZNWKzM6GvRMJ%2FiPLe2ALsMT7GNjj654pjXjXvIQwGlZ1n1hlEpyFbjscq7RDfzGQlrpnTkhBeqszG3phCJstFGoau53K5kdJ%2BBgttx%2Fhuj7a1VDKOTCL7v1qkYCSjBHx6FfHEDU97mc7ZEia4bP7OGXzaq48172N085ipJlHfuqiD%2F8csIYedz%2Fu1A1HhO71uex7LGJt1LaVJgccTGuANUMPZAeSEuGdn4p6zMaNwUHuXX87K65E%2Bc344Q129XFrDCr4ujOQfJCo8joFCd1X60sMKLDCEbkYmVKRmV9v%2BstFvTPouZjqdJvwPUzjq7s221FGxXQ5WTVvxXYJ9KIMuYqFqTzD5jba0ipA5Guu3uQMHDbZ9rqEgDwzstlLNKyj2H9SgTdeZKoTa%2F7170mX4X4FYOkUAotWQiV06hqw8girxL0q9RrzZOhnbgRqdObwBifYAvAlqMomSv7FPIqdkoCEn2RfDLMg4YyGN8NbrMWNK82zxpDuPN6mVi6zfYY6xGVXzurY6A635iOOJ75Nb75Rzhimb6vBXz4FuFERcGRwmTmhQJkp3Lcw1dfDwQY6pgEdWXEipY2ofBaKAH%2BEgufBbFxBV%2BZXJAKABmy61m96yscjSIGAhOKzVEDgKcnnTUHBTWhRyGBE6p8Sm1T1NMwsxUm3XrHdB2CTsl8shtm6bAsh4ABI5MLMLz26J0wt9%2BFjQIjRxGQb26eJMD%2BU5PWHqzFr1QAnAyYHtLF%2B7s%2BNg6LVDsMj%2BgyrxLZkau5HmpZ%2F1%2FpBk74HY1uRt%2BygsFvkAc3J5ZXE&X-Amz-Signature=40f54464f3864ed926e4b00eb36061064744c8afe95cc07e6221bba4a11403bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6ESATW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHFm9O2TIQjcrKJknBS6QBC9KJ3URFbeVOJv7EG4wPxmAiAMHBycnCURcnxsnAvGZtYs2ZL41VAuSE4%2FsJO2zzK1OCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fhE92yvrBoff1XeKtwD%2BX4KRtLIV0qr06QLns2DayND3QkJWbUKRUmeRpvy24IX7CJMHPUpkju1OjViLpiVv7H5emMY6NBibEN%2FuoFPbcHBG6UBJcanKxzOIDXWct3MM%2FIe9cyGqNULkGy16U0inOKdCPAOp%2BiofXks2Qaj65fDaEmmDREDjhdRADyfCr4SeABvNkh%2FFyfTTbwf8Pniz5IPTOF0kKxCYonR1DXatsdY0rWAMHU5%2ByqkRG92tugZKWi2E0fjiL2kMnMaSPzfbNr%2BNlrePQ8V0yPsq3pyXezz%2F2oqqZVfIMrJh2GxmDwiixIQFMZlYnHrrx9sDR0WZFnv7RRO9YkFnW%2FoPg5iJthVq%2BHwLfMBAymkcX0GlYRAD%2F95bhWGsWo61JJB%2FtbRW2n9o07aKGHcb9XRaDqkm4jzhgMhdpsy0gt1PZZ%2BLpVGNajUbf%2Bo%2BxwaWA0tWHCFuCP2OWzcYGQgGKYB79ToL1NUImg3It7ayXFaAynqdG22MiSamfYwZGxMiEmVbTmnW8dA1mjNhKdFJsQizIqXUq65SMyQuTWvp5umlP%2F0jxK7luifUztP%2F5oMUUKXEePO0a91h6X%2BKk1peNz%2FxQZkoPX4n4k0TkCF9orXIBx6RLJppWsIXQ7ifBMp4VkwitnDwQY6pgHbt1tdXC3aCRPkSCgIe6TFuz%2BsfCF90JbIDYlqgIv3pc6gGY4qQajukIBZOxUfAcdZhjVRjLdodMfJkwnilj5EKEtb4wCGg0NfMCO%2BbkrwebDem9cStcC4WMRXVrbci7pfL5Pt4r9KTzGk%2BQen4LRdakD%2FL72W0QU0GX1SpuKu0m77MjgdpZrhs1q%2FSQSheBEpiIHd8c3DD5pDF64of93d3DjUCg9O&X-Amz-Signature=7a92e173682bc3a1637789786ed7fb039be8367d46e8d6673d6e8775e072a6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULI3SBMP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHhdN5JRLg9QMlymteWT2Ca%2B42S%2BP7PYy8sPzMDI3V%2FMAiEAwS5GUKcLaHw8%2F8Wo4SEFu0hDAcRs2vSWDMvMk4d978oqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKoGpf6OLUOPIZRWircA5xDo9Aw36V%2BgxqCVkiznLl2LgIZTosCwPEktlkEstmcRIYeOrGwwfef%2FHlaApehdRzem3z3Rlo3VNKaUk0Tq4g9smWNn7Of6uYgMyzk5iJRaFR8bzbF1DL52KBGf0AfpiXmkbyF5q%2FbeZ%2FKm%2FFpveBGHQRYero1bynPj6fLSO12%2FTI5GrlODbXgtHD5pD8uUxTbU%2BChlPYA%2BrW753ldxeiFONQ8DncV3jYobNKkJGFkq9JIzmQl5Q5rusUCNlQUjfA685bSjIuCVKRwGftmAy8xsWtVVA93yQSappQkX2c2R4nmPfebfRJKHA5xUynxT2%2FTMuF6WGKMMLwsTDE7iFL4sZEeb%2BqkaNZrXHSaPB2FDSwPX5VcdKJWZTYjwhBawu4XbhDmoCHAsQJuMtv5enOFMVmlJVqnTYnVcbspk5gageM0wjQWuJ6vAHyJRslMk%2FUx7IeQIuQRo3DtJhyoCa9y6eoBiZkgprJnu9p%2FnPLBp%2FHc4i6Amcp5A8%2ByOWNuRjSfAGKqUrRk%2B6lkl99Hc3oTBZ8FhzgRvF6JEz%2BMp%2FSOp76Kf7Qq2B54W2hjLBgMjQuuZRNZp1NKmFCgNfk9ld0vFYgwJYkxlsXNNT1g%2FKP7WNalPFu9ii2F5KUdMNXXw8EGOqUB2NrjZPOIBd8BhWmBoeglatO87TQvApdqeHYOLxtnHvv2X%2Fo5kB4koibbNeif7K%2BszjAJXQ6Hwqvb7dun5ijI70qTok7Jxnu8QibYO6gt6knyDR1ZkO5BZoPdGa1JzFXuHIR0sdv8QE5Pf%2Fr2CRauX51htjpZx3r9wDcgg%2FFfH%2FhP8IJKKkzAUy759rWcSqddpHJVLYpmgvmrQ6DorDBd%2F6EyXeia&X-Amz-Signature=da39e635e8b6c0b03d47c1461dabfe540e83fe81242360d6391eb789f41530f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
