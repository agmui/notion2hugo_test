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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODAS4AW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdJchphztG4pCJoOQKO3XQKtQxbQEC7MQFcwy%2FyAJy1AiEAp4XhPm6xdykSbz28BJW8Sgzp9CycNrMtZPtzb92sZQUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAxsSB27xU1dx5aEKCrcA%2B%2BIaDRd03vI%2BpwPRnvTeV%2FWfAEHlZIma%2BdH6PLpjjEK295Jm3FnWebMvaEaeNJ8zPmD7ATVWmF2YLEa7AVkuw3GOqRN7vQaVajcFc5jdJFOqX4T5Tqvtz4x6KI%2FUsQNBSAqPgrlQ8svMiefxqVwULA6PcVg6X6beFCfjXpmyoqppUIGyFbrgbo0cpwr406XQftf%2B4Ijt7CsjAgxFDWMRJOHu841Tz7IRB9JLSIw3riHgKBB%2Bq5lrJvdcaYHlYIme9mR6i%2FV8E09e069TnKar6I2hyf0tXPS1eNU7zXCDlRmQeZzh2249SuyztK%2F0Trqp%2Fmsg2noN7DIkJE5KqlwKB5OZQS92qpPxEm7z5ZRMAOidc%2FDr5gR%2BQHAzCi%2B3uiZGS2WQtS8tW8MGsOseT5A1ZA4eNmIOcCnvERCNxzmDCmtlql24dM1i9IhcBMts66Evaal%2FRsZvOO2hm9V6Zfu7Ir7aQkp2YEkwFHzrSFwHnDQmXw9BVTtIJkGKBPmF6eKiuFAumYYAHjownIxHYn9fE4JAd8AK6GyOZWKSKzgkyejGjQXbUvuhgKObB96gRusag2BkYpZeuK5KrYcnuxA6ze8inBQ65t7%2Fro6RSCqvi96naufppDnahlx8KrqMMyMuMAGOqUBqEf2p%2BgIF4994CxD2wP2pf%2BvCC5fZ6xHIjJiAQnIb2djItmrggH3rGwBC9wkoxs0zOLR89yHGqygTNxB70yRyIeu1xv%2BSMVZfygp8PmZKqewy1wanKgMAow9zw9gyFV02YUXkS3F8PRbmQLHwfsuYqnltDx2Lgldvd3GGJxjpRa9%2FdVDTOCitO6GQ3b5Nn%2FQTzbPfL%2BJa2JzGb4UeQTgZec3U99S&X-Amz-Signature=50aaa540dd03dcbe102c0621c76b0defb8297a9a89146518a8b9dab46d6763a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODAS4AW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdJchphztG4pCJoOQKO3XQKtQxbQEC7MQFcwy%2FyAJy1AiEAp4XhPm6xdykSbz28BJW8Sgzp9CycNrMtZPtzb92sZQUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAxsSB27xU1dx5aEKCrcA%2B%2BIaDRd03vI%2BpwPRnvTeV%2FWfAEHlZIma%2BdH6PLpjjEK295Jm3FnWebMvaEaeNJ8zPmD7ATVWmF2YLEa7AVkuw3GOqRN7vQaVajcFc5jdJFOqX4T5Tqvtz4x6KI%2FUsQNBSAqPgrlQ8svMiefxqVwULA6PcVg6X6beFCfjXpmyoqppUIGyFbrgbo0cpwr406XQftf%2B4Ijt7CsjAgxFDWMRJOHu841Tz7IRB9JLSIw3riHgKBB%2Bq5lrJvdcaYHlYIme9mR6i%2FV8E09e069TnKar6I2hyf0tXPS1eNU7zXCDlRmQeZzh2249SuyztK%2F0Trqp%2Fmsg2noN7DIkJE5KqlwKB5OZQS92qpPxEm7z5ZRMAOidc%2FDr5gR%2BQHAzCi%2B3uiZGS2WQtS8tW8MGsOseT5A1ZA4eNmIOcCnvERCNxzmDCmtlql24dM1i9IhcBMts66Evaal%2FRsZvOO2hm9V6Zfu7Ir7aQkp2YEkwFHzrSFwHnDQmXw9BVTtIJkGKBPmF6eKiuFAumYYAHjownIxHYn9fE4JAd8AK6GyOZWKSKzgkyejGjQXbUvuhgKObB96gRusag2BkYpZeuK5KrYcnuxA6ze8inBQ65t7%2Fro6RSCqvi96naufppDnahlx8KrqMMyMuMAGOqUBqEf2p%2BgIF4994CxD2wP2pf%2BvCC5fZ6xHIjJiAQnIb2djItmrggH3rGwBC9wkoxs0zOLR89yHGqygTNxB70yRyIeu1xv%2BSMVZfygp8PmZKqewy1wanKgMAow9zw9gyFV02YUXkS3F8PRbmQLHwfsuYqnltDx2Lgldvd3GGJxjpRa9%2FdVDTOCitO6GQ3b5Nn%2FQTzbPfL%2BJa2JzGb4UeQTgZec3U99S&X-Amz-Signature=3b5581632314707fd288f29297e7b4bb34f9ad48a618134331160ffe0411bd34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6IHKD6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZAtiig4DDCojn99p431DD4kKr2pfBH8%2BvmY7be7wFMAiEAvrps5OTd8Sen1lmcpOEiav1IE%2BFXrRepzx5mOrh%2BAEEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDuZACmkJEfJ0SWz6SrcAyZ1Qm4H%2BH12FzMgCnxrypkDUAxegLN4ytaM1MwGDtaAbQ4daWyIeE5Tug%2BYykg3bSbVSaWNNcFjG1Zk6Vg2vyF%2FsVTrv%2FA8%2Fsm6UfILyRGEt8tPltG3RYECOFS2Xyydm3Y1Jii%2BPI4F5Oho2P6R7oQVOBJl0NI%2BoW%2FVqu21cQBut1ni%2BQ4O6HHyEkz%2FLAnVaHWsMRrOnD8eNIHYbAjakAkjAqLMq9yzq5N8wi4BAhLncDiiSmPF9LRDkFr%2BpEt7qldTcnh%2FgK4Qa%2Fl5wOPPjYXTt%2BI25ButAz%2FcTMMZp7BdALT8bQSTifQHh%2FtbxIvFmkcsomNX3h%2F6RTbFN0CqIE%2FAbJAORjvu3uVcR4%2Ba33ssJohxrGCQ8VYonFMo8f%2BT9e2GkoAsucY%2FNOlsbO7u%2FtowsuzzcAa3JGpz%2FwmSmtXfuq1UB6BsCziK%2B93CF2cpM8BvCx5rpDRvms8KIBLatV9Aew2OsjR2AP4e5fXOX3Ti%2FV60oUXvaUvA7Vda2%2FyEqdCugn58TtOecEzfT3Czpm1TLVjFs3L9y1KkmPOA0pyzGWTKW9a1ltNwR13gdCv0KrY9E5EKxJiaiFXHZlZCk2D39LfC5hjhFk65V%2Fwx%2BbRZ%2BlCtgwJi1zdVxPcVMJuMuMAGOqUBf9Wg%2BCUVqfvnzCwy34C%2FBsstd02BkWciR%2BSEH9P6drt0tXW67JmFfD%2Fn%2Fg5mkN81bVbqIPkYc3yFmZYF9N%2Fd4Vd8yCDmQsHFv0tUakVOKsDi11RsHgc4OyWkxePih7HVH9oNwmmv%2F8ZwjhTbUhGQBHov8P3Urivncins4%2BSbMT4BlhX6qZBzJwKUqJ8ttCYl%2By46zm0kfGnhscSnbvmEvbv7sRHx&X-Amz-Signature=0a849d0557b505b1f4e4a17900587509c0bc64d407765aca8365233221fc4398&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2SGSBU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrEyyJrG7%2BOhNrRNiLBj7qoUSr2uK6Pmz54Gtl6myqyAiEAgCGt89FsCgSZQrhXcho9fG%2BlijtaUr4%2BLM9e3Dn4Cu8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNtDB3vVvf7NPD714ircA2hTCb8p6%2B%2BHqQqhPz30EZkb%2FyEZ41imXhBD%2B0ZBEl79wsJoEIzapG2MX6rE%2FNVcTf6oiciwMPSWsuRLzZ2i%2Fzw9Sdp6tVosp%2FhN7PM9ShMUlolh84fZUstyWS8Y5K9xxqU6uuzhQ6Sht4i%2Fjjtodh8dB%2Bk5lAan2jBXyCORn%2BwU0bm3qoOuV3H0f9aOKpSy6gLrRxZyL9zIDZCWZb0XUOqW4GrCfXctgUp3LI9ptJdqxVzVSYcjNL8pB7mPTN0UgI%2B7KDzdQIEgkgSsai5otrTPUg1ChNEMjNbGU9TL54yslWqYY9LH7QhGdIbNDNIq0MK4NmwKo1zp1jk88CinCYn0eBthwZZxuR0JgTefGpZ4fYmq5CZWC1KT%2BZA4976cDxNiL0fY49K5174g8WSuIvn2Vp2uoz2lheAjp3pmnGVoVxah%2F0jnwxeMQmtKpEYb330rRmDhyaBiloeSndEBXgrOnXwn190AkIML4jNIXd3Ut4lt%2Bijmt6xtqvzI0tOdQA38awQNO%2F7aSkw4vz3AEMAoH1Z0yB6KbXoDnKDD7KokkQtiSofsGtWNHU07Jr7MtsGGyqKBRG4%2FmqnL4IhKMMvvRk6hBL7bIanYcBSM0ejYlmPwGB%2Bw8MBD5fkyMPqLuMAGOqUBHY2XxrTzo1bi2%2Fz5s2x4YDeM04uvg0ac%2Fx7zSQD0nlqOFyV9IRIXOsWS4xV4vWtFQ4CavINT8Kxo%2B12f6Wl%2F3Uzh5gQZ8G3Nkid3HKHfUJ87lKtT7m36umIJK2abNxJ1VITpAm2X31k4%2BiBTaZwvqSLzZjvmYyrCR5w4BL0JBMtEauuIWedX4%2Ft4bbZDmW6oEDuesc2mNsi5kXqZ3sJwT5fXmusp&X-Amz-Signature=48f85c69e5791daea36fb4bcd1d9d9cef88a59ba3227ab3548bdfde9c378d6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODAS4AW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdJchphztG4pCJoOQKO3XQKtQxbQEC7MQFcwy%2FyAJy1AiEAp4XhPm6xdykSbz28BJW8Sgzp9CycNrMtZPtzb92sZQUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAxsSB27xU1dx5aEKCrcA%2B%2BIaDRd03vI%2BpwPRnvTeV%2FWfAEHlZIma%2BdH6PLpjjEK295Jm3FnWebMvaEaeNJ8zPmD7ATVWmF2YLEa7AVkuw3GOqRN7vQaVajcFc5jdJFOqX4T5Tqvtz4x6KI%2FUsQNBSAqPgrlQ8svMiefxqVwULA6PcVg6X6beFCfjXpmyoqppUIGyFbrgbo0cpwr406XQftf%2B4Ijt7CsjAgxFDWMRJOHu841Tz7IRB9JLSIw3riHgKBB%2Bq5lrJvdcaYHlYIme9mR6i%2FV8E09e069TnKar6I2hyf0tXPS1eNU7zXCDlRmQeZzh2249SuyztK%2F0Trqp%2Fmsg2noN7DIkJE5KqlwKB5OZQS92qpPxEm7z5ZRMAOidc%2FDr5gR%2BQHAzCi%2B3uiZGS2WQtS8tW8MGsOseT5A1ZA4eNmIOcCnvERCNxzmDCmtlql24dM1i9IhcBMts66Evaal%2FRsZvOO2hm9V6Zfu7Ir7aQkp2YEkwFHzrSFwHnDQmXw9BVTtIJkGKBPmF6eKiuFAumYYAHjownIxHYn9fE4JAd8AK6GyOZWKSKzgkyejGjQXbUvuhgKObB96gRusag2BkYpZeuK5KrYcnuxA6ze8inBQ65t7%2Fro6RSCqvi96naufppDnahlx8KrqMMyMuMAGOqUBqEf2p%2BgIF4994CxD2wP2pf%2BvCC5fZ6xHIjJiAQnIb2djItmrggH3rGwBC9wkoxs0zOLR89yHGqygTNxB70yRyIeu1xv%2BSMVZfygp8PmZKqewy1wanKgMAow9zw9gyFV02YUXkS3F8PRbmQLHwfsuYqnltDx2Lgldvd3GGJxjpRa9%2FdVDTOCitO6GQ3b5Nn%2FQTzbPfL%2BJa2JzGb4UeQTgZec3U99S&X-Amz-Signature=764a20ba5c146c4b3d5ca4e8a5b54ce08a5c216a0c7c1e500e5706741f758a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
