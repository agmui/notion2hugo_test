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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQWQYIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDygOpNo1IGjKop9qNqP8NFkp7q39GBHUS%2Bb3aSlfPhEwIgJqzQgN2CJbmLTELgtjWxKS3QwgrAoLESjIjcVKxJmhAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI2L6xK0CLM%2F4J4uCSrcA%2FUTAr2epVLYsHhqQWOe4HWbp7Ga%2FoiXwdjRmRJKDMa31KbNr2Lm%2F68Mo7S116IuLd8QDmUCY%2FCN4QIDnPt44D3ibgx0LeD2hxvQpQ%2B%2Boe09UanGWEuw6qdZjiGqCM%2BipkSubwZD1h2orV6GAEI5dN2PICgGuMMFovCqGFMcUoZwLIzz6nlgWzT0BFIyhSgXprS6gqeYxb%2FG3TJl446G%2F5NiMWPUvhVmG3NPryeMgW5OkdJka2gVsYM9fVt%2Fhk8hwwRaybuy3KJaMLaqKIRR6QpoOdz7Kr%2BGRx6i4ItdM7JxAAzx76LAxQRY8PJojZOygH0m%2F%2Bn0N9BrAIWP10tvTF6YlkJpAjxcFO7P5OQHtpo8tRpZUyb9oDo387G6PVqiT7H6bolmQaEaai8hupSUFw2TWQD2LvuJubS7e%2FsqrH3lXzE7ceX97VgryE6ipXjBC54XexZ6il1Ms9vgwb2KjiYpJvh%2FD926EXCKFM0CO53kiwMuiBoHEu5NPoqeL5WPmtfJn9YA3jnQdhT3%2BkESH9KaOtGpd9D2RLQx2oWUZQeX8SRj5HBgXUM8FZcnFSZJs8kdo7vRhP%2BS%2Fz23ZUFQuflEz1gYEEVAIRtFCUozBBAr%2FBvw1chh%2FAjmR3C2MLuQgb4GOqUB63wFZJ4rJb6wmDgFO1s06JWVS6yVgS223cMJF6zrplmJVo%2BMTME8GO1bp3MzUOwh5rZNsCM3OdgdHCL1vv%2BA7xBX8iZ5gUW4tmNjsv%2B4IhojltPKj3MQFFtvafe3UfiRRp7x3JIxeGPynrl81rbgPOXLrqMWnjLKhPcSy2Z5StXFo8H0pf0sO4uj%2FIGhj%2FX9Ejv10regwCLPEO6c9TNBgv2eAw3U&X-Amz-Signature=ae471f9377bb5a35dcbd6ea92b359f5d4b1fc78c08677f3c59040c8cc733477f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQWQYIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDygOpNo1IGjKop9qNqP8NFkp7q39GBHUS%2Bb3aSlfPhEwIgJqzQgN2CJbmLTELgtjWxKS3QwgrAoLESjIjcVKxJmhAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI2L6xK0CLM%2F4J4uCSrcA%2FUTAr2epVLYsHhqQWOe4HWbp7Ga%2FoiXwdjRmRJKDMa31KbNr2Lm%2F68Mo7S116IuLd8QDmUCY%2FCN4QIDnPt44D3ibgx0LeD2hxvQpQ%2B%2Boe09UanGWEuw6qdZjiGqCM%2BipkSubwZD1h2orV6GAEI5dN2PICgGuMMFovCqGFMcUoZwLIzz6nlgWzT0BFIyhSgXprS6gqeYxb%2FG3TJl446G%2F5NiMWPUvhVmG3NPryeMgW5OkdJka2gVsYM9fVt%2Fhk8hwwRaybuy3KJaMLaqKIRR6QpoOdz7Kr%2BGRx6i4ItdM7JxAAzx76LAxQRY8PJojZOygH0m%2F%2Bn0N9BrAIWP10tvTF6YlkJpAjxcFO7P5OQHtpo8tRpZUyb9oDo387G6PVqiT7H6bolmQaEaai8hupSUFw2TWQD2LvuJubS7e%2FsqrH3lXzE7ceX97VgryE6ipXjBC54XexZ6il1Ms9vgwb2KjiYpJvh%2FD926EXCKFM0CO53kiwMuiBoHEu5NPoqeL5WPmtfJn9YA3jnQdhT3%2BkESH9KaOtGpd9D2RLQx2oWUZQeX8SRj5HBgXUM8FZcnFSZJs8kdo7vRhP%2BS%2Fz23ZUFQuflEz1gYEEVAIRtFCUozBBAr%2FBvw1chh%2FAjmR3C2MLuQgb4GOqUB63wFZJ4rJb6wmDgFO1s06JWVS6yVgS223cMJF6zrplmJVo%2BMTME8GO1bp3MzUOwh5rZNsCM3OdgdHCL1vv%2BA7xBX8iZ5gUW4tmNjsv%2B4IhojltPKj3MQFFtvafe3UfiRRp7x3JIxeGPynrl81rbgPOXLrqMWnjLKhPcSy2Z5StXFo8H0pf0sO4uj%2FIGhj%2FX9Ejv10regwCLPEO6c9TNBgv2eAw3U&X-Amz-Signature=69ce9c4263b43114925442afc1e3e23da341f595a494776f610220378bc6bd8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA33ZN25%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFf1MHC9xoorwKgu%2FRpReSVKOrcQq2HpMAysKOaoxWlFAiBYtXT%2FVXLilq2THEsqyZya4lEptGKHkX49i071j8NRQir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMpYDvvHJ4ykbKP6EAKtwDh39Tm2i07GoUlQuMigS45NI6YSXYKgwlipZHvbhSSsrvm5NiSKMLnkRxIDYjdeeHI98Ky32Vfn02q15KA5ZfNuj5X3J0x2N4SM6h3LRetAqYyxtjVso7yHkw%2BfGTy2zb%2F%2BTIy1sVLqB5lJnfIYQejky7ROp8%2FMOvb7GeitdDcy%2FB1rok7D%2BBWcxNdlExVmt9Pv1MaXm7YlfpzJ%2FaUMoo%2FoI7S2X%2BFYhDTv5ab5KLne93iBXI2hM7pEOT7uIZtU8Otpek4UEyjSeS8%2Fx7o6sAXORtMbvoFGqPWhewEXdxuQW1Wsi4YTg4VgpvjB8BMqazhkmkjEadZzEyFyUeIu8LETk9zrMr1R19JkYjxh85Dofx%2B8i1UmLvyFDM06ehpdPLce3CYnINCqYRBYJsgaHYwA1PJ43W5st68X6N0ES5ae41LwQ04cL7UgwrgLyJvlqlglprx9mrYj8NQk%2BEru2ShckFshRlcX6ctJB%2FMfy7YEdFItL%2Byikf5nb6zkMA08Vwsc5N7Jg9pZZ2V%2B15gFXfQkhpfnRTkkaeeKEUu%2B%2B6ESAj8sg4D%2BoSyqeYNt2jhVK7I0MAMrPBnnDkXbj1UNXuQn4gQ3KgzCs1wva5Sg7upvei3Q8Oa8oqK4ZL5%2F8wzq2BvgY6pgH%2FxntxnMhTmehDIzy8OGXlvG4w7fxTo%2BWsGXflAqIZ9FLHDG6AV1UQhrgFIAOP9ktuNySCiGrjxStT8OBGtluwrpFVNdnZ99%2FPQTrHjNbrFFkQ1eaA0736IcBP15%2B9xzIxKOF64Z1VVmnW0bHnQwr6swzl2ERjSU8VEdlTy1IykUuipucID%2Fdu6a9tZvSva0Gwb0aHmX%2Fm8RKmt9t9CJLeZe%2B%2BHcRN&X-Amz-Signature=e2a4d597be65ca84e95918657ba8b64b3de6d6da40726d22ecb68657c739dbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROXLYRO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDDiZ0MM7OYHFa3jNwcOWaxT%2BSe2zWWLgFN385iMfTAIAiAFnvW8lDx0X30ybQN55%2BWNI8wb%2FtaN9fAODscrgWsbrSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2nZur6Ve5t0ESBoLKtwDKiNfnCEZCSCBAx2I%2FDaXn2foQ9lojC6Fzsm3JoE3GAW9%2FUGrz8PbU0P2IQqoMB0zSBx8z8kx7TnJYRJ7SD%2BME3DoNbMjfpJxrjQ67u82xtfKrW2KTgFp4u9L468G6rxTl0eSQBDuxnq6Mz997IjOV6FcNoQQXsVC9gN2hu0hUHLm5Jenavz1IO4ySQDMLPaozPTywqqiKfGgonITwItsUPVfo%2BU39Ef51%2FHybWtiAK5KO1LiNBKBUgG0h2IPNvPuDu2qZAT8OnBT4%2BDDB%2BmKPCu5FyVaCxLEthuWPEUI%2BLNfXqGyC4OwgYwwFpoVDMkHXJnlQQuGQltiRUNFlWl9b3R9qqcoOonnmlGwOLuKWvvRiJGHSwvgJ7d4xjOJoUoqX%2FIoDpTU4zNSJJLmBggeBweApphdoOEXpwfvtAglediMIHX%2BD%2BEG2TGQhXG8HAPfWhNwyWJDZnlDeMXwxTLNBbwRPKX2QsgXilD3XVyiw9J8TEtS28GPvndqIfsmKbgqSsXwrk%2FmfiT14jisHJgWA5cHizdohyMoo%2BaYuk7HcHWMeakcjCAHDOHCalX8mnwjdI7uCcOufzGqy2nFVadXo5bX2jkQbZVCp5RLuh23XW7k8UVnilKg9Hpq0R0w162BvgY6pgFWdMepWlSgu%2BRpVxtzvdRucO12z7DLpeqpoiGjDNDheadi%2B6kvHNpMVot0fJ8yFntPoN68TO7Rrxxk3zwr1CYUlSXiaMAhTggn4Gyhiee9C8yGvAVyaklI%2FUKRHhwFVikTgATIZnsqYre%2FLLIYKf1VouEaOc1KHNlhZDmo4Ci%2BzKqOniUt45fG2tHvwdwFz3GYcZ5yk7byTR0trn2%2F5cJB4ijsSlUq&X-Amz-Signature=4b666667df85c7c2c387b36c1f8acae280ac59a497a33fdc73ce4538ed09bddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQWQYIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDygOpNo1IGjKop9qNqP8NFkp7q39GBHUS%2Bb3aSlfPhEwIgJqzQgN2CJbmLTELgtjWxKS3QwgrAoLESjIjcVKxJmhAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI2L6xK0CLM%2F4J4uCSrcA%2FUTAr2epVLYsHhqQWOe4HWbp7Ga%2FoiXwdjRmRJKDMa31KbNr2Lm%2F68Mo7S116IuLd8QDmUCY%2FCN4QIDnPt44D3ibgx0LeD2hxvQpQ%2B%2Boe09UanGWEuw6qdZjiGqCM%2BipkSubwZD1h2orV6GAEI5dN2PICgGuMMFovCqGFMcUoZwLIzz6nlgWzT0BFIyhSgXprS6gqeYxb%2FG3TJl446G%2F5NiMWPUvhVmG3NPryeMgW5OkdJka2gVsYM9fVt%2Fhk8hwwRaybuy3KJaMLaqKIRR6QpoOdz7Kr%2BGRx6i4ItdM7JxAAzx76LAxQRY8PJojZOygH0m%2F%2Bn0N9BrAIWP10tvTF6YlkJpAjxcFO7P5OQHtpo8tRpZUyb9oDo387G6PVqiT7H6bolmQaEaai8hupSUFw2TWQD2LvuJubS7e%2FsqrH3lXzE7ceX97VgryE6ipXjBC54XexZ6il1Ms9vgwb2KjiYpJvh%2FD926EXCKFM0CO53kiwMuiBoHEu5NPoqeL5WPmtfJn9YA3jnQdhT3%2BkESH9KaOtGpd9D2RLQx2oWUZQeX8SRj5HBgXUM8FZcnFSZJs8kdo7vRhP%2BS%2Fz23ZUFQuflEz1gYEEVAIRtFCUozBBAr%2FBvw1chh%2FAjmR3C2MLuQgb4GOqUB63wFZJ4rJb6wmDgFO1s06JWVS6yVgS223cMJF6zrplmJVo%2BMTME8GO1bp3MzUOwh5rZNsCM3OdgdHCL1vv%2BA7xBX8iZ5gUW4tmNjsv%2B4IhojltPKj3MQFFtvafe3UfiRRp7x3JIxeGPynrl81rbgPOXLrqMWnjLKhPcSy2Z5StXFo8H0pf0sO4uj%2FIGhj%2FX9Ejv10regwCLPEO6c9TNBgv2eAw3U&X-Amz-Signature=37a27314a07cecfbe668432fdfce05464403ef963589e6a3539e4abe5e56787f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
