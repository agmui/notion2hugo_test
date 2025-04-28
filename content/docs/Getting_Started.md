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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFXUK77%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSryd%2BcRg4pR1ZLvYskO4ULlLQG8QQkDo2VoiM9zJ1SwIgZ4CuoMNePkiDjIl%2F1%2FGe02HnHrnU9xCudN7abpEbwmoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ%2BfgUNfXHOweTFGBSrcA3rUfU0ZK49adDhCS6U3ql26RQvHnQlZVKIogmqy97Z%2FpgDpB9gqD7%2F8LyzkdFMbA71RX53GO0j92u3BDyiQPwlvHns974%2B%2B%2FPiczY8taquy0p4R1ocWluzWZ9YLQ5z4hIqVtod8j4akMnRiLL53YcL2JvD9LTZLJy%2FiyvWZu0MbavYAflmCk1e3TETPX5xuMoPCbpoiZTMWR%2Ferrl95dGTCLcf9k5euulq4ldAOXdFA2aoVTSsKRDYU9OJGgu9GZK%2FE3MR%2FwzpSFi%2Be1rgq%2Fdx5NFIkMRCRHGVL0ep7thBEOXUQ6L0s7sqnOq9ZeCMxJuaykuFe%2BgCqu0HnnomZXNe0njWTsj7Q6MjuUx5s71dKaCef%2F%2FwSvXsJXSir21%2BAeDIGmOfjuy5t0ul%2BioMnSEptd3rrmuK%2BmjqCGzE0rJXeBrq%2BYzzUvm8nbQB8WepigNHcuvJgBDtt9wKIQRG%2BtckRXh0S6duafayEN8Vp3qVcfHUw7v2eS%2FZU7D4E56pQS7FdZ%2FbidomJJ2ThLYbEooeJIdOpaiO2QyS%2BCHTXie4TNEUtch4CmcjfBOmxrIRU6SxDBH%2F1V2RNuf0XsPeDlMEWYQ%2BZk4msClMLpG2Xq%2FggvJV2W0Qofhl31APwMLy7vsAGOqUBQmWO68rFQ2EdEY%2F1ZAi49q%2FoTsTVrlD4oHDjfbkDukC5%2FMgsPVaGEDdu1WrSaWNUQWTW8fXlqVcGgSmVkkPWQBzmUELfDybg5dc%2BJIDXbBhbtmwKKQiVzSdiM%2FYcjnqDn0j3DPwQIhHDX4O7ndy%2BnLD5deZ86c5EFJRMUShTUl0MzzdpQG5soHs6sDCqqtvqmNsQcexlWpCCKsU1xuLDCTr%2FYqAs&X-Amz-Signature=9da1b6a95a102fa39d47eeecffa5b34ac9dd6352d4bc185c0ad84b63fdad221d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFXUK77%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSryd%2BcRg4pR1ZLvYskO4ULlLQG8QQkDo2VoiM9zJ1SwIgZ4CuoMNePkiDjIl%2F1%2FGe02HnHrnU9xCudN7abpEbwmoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ%2BfgUNfXHOweTFGBSrcA3rUfU0ZK49adDhCS6U3ql26RQvHnQlZVKIogmqy97Z%2FpgDpB9gqD7%2F8LyzkdFMbA71RX53GO0j92u3BDyiQPwlvHns974%2B%2B%2FPiczY8taquy0p4R1ocWluzWZ9YLQ5z4hIqVtod8j4akMnRiLL53YcL2JvD9LTZLJy%2FiyvWZu0MbavYAflmCk1e3TETPX5xuMoPCbpoiZTMWR%2Ferrl95dGTCLcf9k5euulq4ldAOXdFA2aoVTSsKRDYU9OJGgu9GZK%2FE3MR%2FwzpSFi%2Be1rgq%2Fdx5NFIkMRCRHGVL0ep7thBEOXUQ6L0s7sqnOq9ZeCMxJuaykuFe%2BgCqu0HnnomZXNe0njWTsj7Q6MjuUx5s71dKaCef%2F%2FwSvXsJXSir21%2BAeDIGmOfjuy5t0ul%2BioMnSEptd3rrmuK%2BmjqCGzE0rJXeBrq%2BYzzUvm8nbQB8WepigNHcuvJgBDtt9wKIQRG%2BtckRXh0S6duafayEN8Vp3qVcfHUw7v2eS%2FZU7D4E56pQS7FdZ%2FbidomJJ2ThLYbEooeJIdOpaiO2QyS%2BCHTXie4TNEUtch4CmcjfBOmxrIRU6SxDBH%2F1V2RNuf0XsPeDlMEWYQ%2BZk4msClMLpG2Xq%2FggvJV2W0Qofhl31APwMLy7vsAGOqUBQmWO68rFQ2EdEY%2F1ZAi49q%2FoTsTVrlD4oHDjfbkDukC5%2FMgsPVaGEDdu1WrSaWNUQWTW8fXlqVcGgSmVkkPWQBzmUELfDybg5dc%2BJIDXbBhbtmwKKQiVzSdiM%2FYcjnqDn0j3DPwQIhHDX4O7ndy%2BnLD5deZ86c5EFJRMUShTUl0MzzdpQG5soHs6sDCqqtvqmNsQcexlWpCCKsU1xuLDCTr%2FYqAs&X-Amz-Signature=e991b0a78c424015bc338cb5686e58211eb999ba4deca4ed9da0a0d58f988fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFXUAXY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQCxVZvGFJsuXv%2FhzAcWeh3Ub14UiU5JdVr3vzbPBJNAiEA7YUsRKQaFP3P4tZc5yD0mz%2B77zFqyEDpHyDw6flkcXAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD2YmdpwiUU1bmOQHCrcA%2FKoCZYQpOhD9PdlR8KTHPCopy%2Fw2JSPhPbLAWe2cvpHfTC746lWCbPj8uuJ4EhhmnFr%2Bil4xQiHiVWUruOjA2Ia8cfoG%2FfpuRJavR9PkpPJMSAiMXcxwtCMJIXClXiTfImQZFtIiVrVuJ3VA%2B8gDAqHCK3GTsGzwG7%2BwqiI2LW2matbeGdkrckfJvkjbtGvrOOjHc4y7WIXFAVs0%2FJzxnYzfv%2FvW%2Fi%2BKfhUFKsJkqjctx%2FgOpkRssOWzG8cUuozxfrGscU%2FmJT%2FbSxWQ9IxLxoUVkaaHlSOcDSyb4bvNBTZlWuKge6iAQ5d8epkNVftGClgyR7p48qnBGXeQiykJ9fNXTc0gpc5NkpRPH0iWDIWyvadeDWzVJkyQmWrCnDXptrZYKJU0iVKWTsoS6fm3rsr4DQ0FVGTPCT098FFlCZZm5ABlb8itQoeP11mfLbqlz2Vn3ZX1hVZXoS7DF0ROCCtX1brM5aoggTqPETwL2EEXPpv6aQqCon6mCmD24Czc6CNvHksj6C5GItuhh4O9jX2RuAvw7AvWan7qxEDYKI1zXAAN1zWqF9I50j6qvNSB7RHDNcUbYLE0ZOG7oYBppMEgrSXP1ZR%2B5LSjlVJrtcpUPDNOKOYGIqmsGgkMLK8vsAGOqUBPqdTKvcrkyQIA4L7jjuBiihnvhAQWX8zQB8VYP75LXwtjEBpBp4YirEH2iNtH30yIkjz3fVUP7hs8ZVqklWHVQHp%2FQR7c4aBJMAmQKweP%2FdPHnKu13vZqhK%2B8DhsPZ9rbD1LH4vNUcZF8BaRFVg6gV1v1lqaKmzdNA2DNWrVlh8y9HUiq5rslERnSxZEWUOo7mZyRKPMZ1qYB8xOM0%2FsNZHG1Pi6&X-Amz-Signature=93a9c10e72248039eac0e124fe4baace84dc909982a59178151a1fba59591426&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDC3W34%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHx4T96HLM1Se2dvU05a3hEk3B6%2FxknOIL0QlXNsJIOwCIAbyKsrbqVtZZ3fT8g5hzOGOcUYUlAoGK%2B5hbowv0FW%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgwqU%2FHjLj4jMLg3Jtcq3AMkU92wHai39HV8lrviPYjkRGTK2Evpd7sg8I4ou8Od1Q1eEmA2xyMNOWcwp1q7y5eHaGxdPzD%2FNxizBf1eLQ%2FozGucJjSN77AnuvIS6NHesBIN%2BOdWzse76shdNuxLv17rwdb8qwgPl9nTs6%2Beinhij1UDB8LEyDX9aDG5KcE9MLkBeIKrx9oJEMxtHK7Qad%2FaU%2B8kffhsivKmEK3WZgdrAwb3yZiNqpnUAPFj4ZSQoBTLP35xQan23hpAgyRrjl8bFT64ZzcBW4Rj%2BgTcs2Hf8KqSlMfM7GEetqvMlEEMbKHQsCqbooHW88QXtSWszVq1j5rx3EqNvDCE5%2Blind7BjXvC%2Bimhb6Xn87oz4A57zuky%2FvzFUadEVq9fZ779x4Agejjr%2BiO6dfLbSzlsWF7GGXg1TWsMF27ZHYpxb8ZUtTU3y%2B1LzwM0iWk7UWPSc0ENfWeB2DJWK0D9dhPQ1mmr1KjYkCyRzbDwlVgtqiVo9srcek39cyjcVinFuZ9z2uHgplh1J8DgvIRm3BgM7oAwUWcQuSadwiZSi65YN%2FUatKcHeV6ecKp4Bm%2Bojv8Do%2BRvqupF0rRK%2Fkleo0cOZWcFyhl5MP3u9zUq0nDLSSED9BP7cqHDCPaKy4JddzCRvL7ABjqnAQC6Dd21Y3crtVJdmqCMJcdpwk1fq%2FhjABG7bDmKNUQKxaF9RFusyCpD2t16rVWXDfQ38ZgQEO94dl2%2B5sPoZODokOXoAokhhJcMEd6QJinThK1hNT0Fi8CJdVbuI9UYT2TPO9EiZYQHFyZ%2BP1Kp3Y%2B0rSxOmG%2FXJcLsGRlk2LQbUz4dxor%2BITtMJem5aLdjJBFkNRTn3T2SVPLocidkfH3ReY4BQ5eb&X-Amz-Signature=8ccd9f88539348369de0c824c6b2980e1b7b8b98f152edb40584a8daad89b62f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFXUK77%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSryd%2BcRg4pR1ZLvYskO4ULlLQG8QQkDo2VoiM9zJ1SwIgZ4CuoMNePkiDjIl%2F1%2FGe02HnHrnU9xCudN7abpEbwmoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ%2BfgUNfXHOweTFGBSrcA3rUfU0ZK49adDhCS6U3ql26RQvHnQlZVKIogmqy97Z%2FpgDpB9gqD7%2F8LyzkdFMbA71RX53GO0j92u3BDyiQPwlvHns974%2B%2B%2FPiczY8taquy0p4R1ocWluzWZ9YLQ5z4hIqVtod8j4akMnRiLL53YcL2JvD9LTZLJy%2FiyvWZu0MbavYAflmCk1e3TETPX5xuMoPCbpoiZTMWR%2Ferrl95dGTCLcf9k5euulq4ldAOXdFA2aoVTSsKRDYU9OJGgu9GZK%2FE3MR%2FwzpSFi%2Be1rgq%2Fdx5NFIkMRCRHGVL0ep7thBEOXUQ6L0s7sqnOq9ZeCMxJuaykuFe%2BgCqu0HnnomZXNe0njWTsj7Q6MjuUx5s71dKaCef%2F%2FwSvXsJXSir21%2BAeDIGmOfjuy5t0ul%2BioMnSEptd3rrmuK%2BmjqCGzE0rJXeBrq%2BYzzUvm8nbQB8WepigNHcuvJgBDtt9wKIQRG%2BtckRXh0S6duafayEN8Vp3qVcfHUw7v2eS%2FZU7D4E56pQS7FdZ%2FbidomJJ2ThLYbEooeJIdOpaiO2QyS%2BCHTXie4TNEUtch4CmcjfBOmxrIRU6SxDBH%2F1V2RNuf0XsPeDlMEWYQ%2BZk4msClMLpG2Xq%2FggvJV2W0Qofhl31APwMLy7vsAGOqUBQmWO68rFQ2EdEY%2F1ZAi49q%2FoTsTVrlD4oHDjfbkDukC5%2FMgsPVaGEDdu1WrSaWNUQWTW8fXlqVcGgSmVkkPWQBzmUELfDybg5dc%2BJIDXbBhbtmwKKQiVzSdiM%2FYcjnqDn0j3DPwQIhHDX4O7ndy%2BnLD5deZ86c5EFJRMUShTUl0MzzdpQG5soHs6sDCqqtvqmNsQcexlWpCCKsU1xuLDCTr%2FYqAs&X-Amz-Signature=7b1709af93450ec3ea6ab018c14d1cd861407fa72d52071941e9bdba2d0957cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
