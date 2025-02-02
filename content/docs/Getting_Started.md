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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJO7RRUN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiGgUpfPz01G67%2FbJ8nVBqfrzs%2BpjoN41j3X%2B%2FcKg0lAiA2ATJyzAJGeqp7DmNOZG1HQVp5SSKbkOAvDKYIPNU96yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIGSA4qdxemzpXnSIKtwDfAQHPYZ9QcdrOSILW4ezd5qu%2Fv%2B3HwbSz15HLowCSNhso4nQrtdazr25A%2BlrgLNvOe7m4kwPH9l1lYoSzngGQFk7sbLFfP%2FDZNXN5LFjgDab7nJosUpwYLc0Cr4ChwU%2BgvupbZipkDNdWVT%2Fve7AtTRnSqXYqKWzhZeoDpJ1h0YCkBjeL4xML%2BwgDGDqlCVOcn00GnBTVFt5m%2BXlKkNKwff3IcZDkY0Y1jbcSoW9wSgMJwC1yDG2DlMWbDEbdSHqcsWEZRV5q3PKY5byfW%2BNgXy2rCnsXWE8OQpWrrrwj%2F6BPI1N4wOrRWiKGs86%2Fy8qsXiRJzJRHTN9W0DgbbMfw7kOUa6yaIBY%2BIo35LEydLlrMMC7aVclDutq8fxGTaLZaPV1b6rnqPxA7cCu0v1%2B3E%2BjkAJh0XIIZmQvh8Qxy0XL0mm0joJR9rIs9PtZ88FWzmX3I%2FlQ7eaX3YscsWWI0yqjCGaWukvvcykwM0G3eVbI8Qo8bX2a4wNxINi3iodc72E3JIhYa%2BlQbrPSV%2BXDmUoWN6uYwvmJmJoPB4iBqsyPFEd2z6olW58kdgvMS52fsRRlrPSBXC%2B8PqkYF9FOow754TdOc3CigBGGzGr97sq3DXLSoZd00mq0sQsw9eL7vAY6pgH9cWeMupwqOfMs9YiWz2tPcN%2Fl9EVDO2zyjFzDldvgzC0NR%2F6wB3jesVitpkYk3nRgod0DssGGkyvp1yGFluF6jX%2Fj8xmfp3SDT%2Fo56bxnnQnqpS6UpLyatTEiHyqCwA3UiIOanOmAFmEneG5ahsKR5ASdDLzKG%2FPM%2FPc0il5u6PdP%2Bw4lFaxsELqIikAz5eJJ84GV%2BbqxDPhtzQMODzqv0sIsuiRT&X-Amz-Signature=66ccd122567670f3b306a54b034648b612fee1985a11579f2d9926e16400a51e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJO7RRUN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiGgUpfPz01G67%2FbJ8nVBqfrzs%2BpjoN41j3X%2B%2FcKg0lAiA2ATJyzAJGeqp7DmNOZG1HQVp5SSKbkOAvDKYIPNU96yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIGSA4qdxemzpXnSIKtwDfAQHPYZ9QcdrOSILW4ezd5qu%2Fv%2B3HwbSz15HLowCSNhso4nQrtdazr25A%2BlrgLNvOe7m4kwPH9l1lYoSzngGQFk7sbLFfP%2FDZNXN5LFjgDab7nJosUpwYLc0Cr4ChwU%2BgvupbZipkDNdWVT%2Fve7AtTRnSqXYqKWzhZeoDpJ1h0YCkBjeL4xML%2BwgDGDqlCVOcn00GnBTVFt5m%2BXlKkNKwff3IcZDkY0Y1jbcSoW9wSgMJwC1yDG2DlMWbDEbdSHqcsWEZRV5q3PKY5byfW%2BNgXy2rCnsXWE8OQpWrrrwj%2F6BPI1N4wOrRWiKGs86%2Fy8qsXiRJzJRHTN9W0DgbbMfw7kOUa6yaIBY%2BIo35LEydLlrMMC7aVclDutq8fxGTaLZaPV1b6rnqPxA7cCu0v1%2B3E%2BjkAJh0XIIZmQvh8Qxy0XL0mm0joJR9rIs9PtZ88FWzmX3I%2FlQ7eaX3YscsWWI0yqjCGaWukvvcykwM0G3eVbI8Qo8bX2a4wNxINi3iodc72E3JIhYa%2BlQbrPSV%2BXDmUoWN6uYwvmJmJoPB4iBqsyPFEd2z6olW58kdgvMS52fsRRlrPSBXC%2B8PqkYF9FOow754TdOc3CigBGGzGr97sq3DXLSoZd00mq0sQsw9eL7vAY6pgH9cWeMupwqOfMs9YiWz2tPcN%2Fl9EVDO2zyjFzDldvgzC0NR%2F6wB3jesVitpkYk3nRgod0DssGGkyvp1yGFluF6jX%2Fj8xmfp3SDT%2Fo56bxnnQnqpS6UpLyatTEiHyqCwA3UiIOanOmAFmEneG5ahsKR5ASdDLzKG%2FPM%2FPc0il5u6PdP%2Bw4lFaxsELqIikAz5eJJ84GV%2BbqxDPhtzQMODzqv0sIsuiRT&X-Amz-Signature=17b6e1aaa3de9d4532a71eccf0e9dfc7edb5d63de069a42dd274b9250e800899&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UU6D5DK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIyO4lgEWOHPVQ3DYYIEs4M06J0%2BD3eG64C3hFuG8iuAiBM6xqw5mjLy0cq%2B%2FN5X4uCPcs9JVY2%2F%2F0MzynW4%2F0EViqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCWcN4HBi%2BRzaOo8%2BKtwD05HJLqLrbl4VNtbT3HIpB%2F%2BLCfHUNjtOWWm6IdvvoQ4D66jtahWZFA1ASTK4UfHvhuhlYOo9eCXG4%2FbBkiuzDP1Mpz%2Fm04w2pHwUPmli9rpm0UNsFismIUHMH4sx%2Fy5c0pq0ZKhZgcdOxCl94osM41G926xoPyCoLVZT2ymSDqFlb62CqCxxGsPmoTvv%2FGr%2FPb0etl64n4iSIRJ7GhD%2FZluFBX6buI0J8%2BnP51RbHYnQOIrwP0TX66gLCrt7rPPd3e%2BvZqh6PjCfbSLwozBRC1tUXOl39L6nMLyPCAKOrRQt1OcqONxZ6gfUrq1zlfZl9km24iyz7SA76rNu%2B0yLmSovm8%2FaAlMIMi1%2F%2B0oZvaqMeJBZ7oVHLTwLdATRlx18W%2ByNWA2SruIkEzZgeF6jZ4uNsm0iOz29KnUvmdQry9n9TgksOZ4InVWl4mtmARLEK3uGIJg1cABSXuCjGiWNC2RhnTgGkfoU5SxlhD56fJnHkDkiBmaO34pdDHWaQ8BoPKoMl9%2BFBkxuKidEMdNr7dA6a0a6oPHt7w0DLBYyXdy0M2gatlvTE0GBaNgdZXH9ldMrLCQxvFnkrpgFOqZhU7mPPZuUS1nWsmHyXvSKXVO3mZyS4NHp%2BAeV0eIw0%2BP7vAY6pgGGLXWmHsuJZ4wMpVyvR%2FzrQPD4X8yiLfqoELv5n%2BgyQuaKZp2AeHaGnWYxObEghI%2F%2BIoDxQ7hwdTGmI2pDExD40rl3UE24dmSvM507LfYiUnwPaX%2F8hKMY6iL47msKtIzb3PCMA%2FkSPEzkfqcXdGwbYs4dLBF4d0enMKHRZUOrDss5vQFFCK06oJvucVeyg7i%2Bdf8yC1sx6GTYdGKcg5Wn3XYVv5tH&X-Amz-Signature=18879530e6270ac6e59a705d943206f90da48fa346dd9c7cbb988182399e7212&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5KA46KW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXClIkuIn1ctwavS2Q2Bt2XXHpIKlgtOz0d%2BP7MO%2FfaAiAtP5q3gdShtzeqBfJLrEsZO%2BTdYlWqDLXaGcIYClYpWSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IYX1W0Z4KlrPHYRKtwDY%2FXZD8Y0fJR011TK7TU%2BoQK5PtdGq2vV79KJSMSvrCgyAZXixl5XN6HXDmtLyLkVMuo7IZC9FHRNYzhpRDzULZ9twxPZjddZQ8PrHBMtdgqM9IVnGfbcTTRrMI3dqQgzqx3hRCI0eqs4yUQBjVcBrSWEMwJZ5LS%2BlE4R7dlSWv4gmec9W4N8WQLUtH40p1wcEjTflaoXXBGv2P3jxcnQwx9diTiTg3fGTmtwank%2BA270KkYU3B7tAMj9XKKEwV2PE%2FqZQTUf%2Feh9zQxZDH66Tbr4bAlYWBZr8Sn96VG%2FfAD0KeZcR7LTs2EKhpjXA11x870qPHrtQ%2BfY4cR3ZN9gonnCRiEDz64yjTxYPmnUv%2BLra09EbnnArhSb4EEynxcKDVJbtTXbTCMoxFdWWW0LC4js6TQuvIhdEua4PRnOUwfVFMrjKM0VwblzBSUhTAyLnZHdHFMyzNDs2pKtBFUiJi3Lrpxn72QeBa3d0sX3M4MsS%2B3Fsm2%2BfeEgWGr7xwdj2jpQBCC6Hg5xp0%2FS0duvOMdkNfNg89dfI8uthkShk3jyyZHC%2FmOXDarqNUZKnJgy3zoXib18mR06huN%2F37qSqlNAD%2BieQiq8d98e22kPBCfEFJPtuIC4ZU0n8z4wiOP7vAY6pgEgqnBlpaSxVftAUWNE5I5BENsM03RMvKwl29JE3SwUNlHdmn7v7NNpneqm8zvaBB4Xda7BNqc332luNY%2F1p7%2F1SHAlFmP61ZdgivFLo4k0mdn5upcAcVzxTdkxtSbsJGdz1dfEKkSedePrJ5dZNQP6y5PMgN4SS2UzTf9uYWsxFJgWFQllHflhn9xu2DxuK6A9X1BNk5Lkc%2F02g%2F0GHGI7kOlVG3B7&X-Amz-Signature=0ceed5c246cdad6df94d8aa1b9f07838ab4251565ba8625eacc7e55e3c01df84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJO7RRUN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiGgUpfPz01G67%2FbJ8nVBqfrzs%2BpjoN41j3X%2B%2FcKg0lAiA2ATJyzAJGeqp7DmNOZG1HQVp5SSKbkOAvDKYIPNU96yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIGSA4qdxemzpXnSIKtwDfAQHPYZ9QcdrOSILW4ezd5qu%2Fv%2B3HwbSz15HLowCSNhso4nQrtdazr25A%2BlrgLNvOe7m4kwPH9l1lYoSzngGQFk7sbLFfP%2FDZNXN5LFjgDab7nJosUpwYLc0Cr4ChwU%2BgvupbZipkDNdWVT%2Fve7AtTRnSqXYqKWzhZeoDpJ1h0YCkBjeL4xML%2BwgDGDqlCVOcn00GnBTVFt5m%2BXlKkNKwff3IcZDkY0Y1jbcSoW9wSgMJwC1yDG2DlMWbDEbdSHqcsWEZRV5q3PKY5byfW%2BNgXy2rCnsXWE8OQpWrrrwj%2F6BPI1N4wOrRWiKGs86%2Fy8qsXiRJzJRHTN9W0DgbbMfw7kOUa6yaIBY%2BIo35LEydLlrMMC7aVclDutq8fxGTaLZaPV1b6rnqPxA7cCu0v1%2B3E%2BjkAJh0XIIZmQvh8Qxy0XL0mm0joJR9rIs9PtZ88FWzmX3I%2FlQ7eaX3YscsWWI0yqjCGaWukvvcykwM0G3eVbI8Qo8bX2a4wNxINi3iodc72E3JIhYa%2BlQbrPSV%2BXDmUoWN6uYwvmJmJoPB4iBqsyPFEd2z6olW58kdgvMS52fsRRlrPSBXC%2B8PqkYF9FOow754TdOc3CigBGGzGr97sq3DXLSoZd00mq0sQsw9eL7vAY6pgH9cWeMupwqOfMs9YiWz2tPcN%2Fl9EVDO2zyjFzDldvgzC0NR%2F6wB3jesVitpkYk3nRgod0DssGGkyvp1yGFluF6jX%2Fj8xmfp3SDT%2Fo56bxnnQnqpS6UpLyatTEiHyqCwA3UiIOanOmAFmEneG5ahsKR5ASdDLzKG%2FPM%2FPc0il5u6PdP%2Bw4lFaxsELqIikAz5eJJ84GV%2BbqxDPhtzQMODzqv0sIsuiRT&X-Amz-Signature=cb0b1089a73c69fad6a6452c894d60a8281c8d9523e08ade7ae96ca407e39b79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
