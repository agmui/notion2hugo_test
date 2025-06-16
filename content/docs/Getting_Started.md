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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3V2FTD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDs%2BDExpAUu9%2BNIZQ5eYe8Bex9orehsvmTYrmzC82npjAIhAOeMYn8vDVOdeh89OSZIfKqL2XHhCbxR0hliLD0KcQmJKv8DCGMQABoMNjM3NDIzMTgzODA1IgyVqP8QCndDcqlU950q3AOWd%2F2EiYbxytqFCB%2BNCvPik86avdLTRCWWQDuAovmYpoa2gUrx%2Bx3fbG5OpqxN3u%2FZ%2BqzVAD5hH1aeIDPf%2FiQ66XXsxt0ZI2JnhkjqZJe9750cEBN6KGQ1DKbml6XC0sdrz13Fpsxery80ChMVN750N%2BrOTfmFU%2BRe%2Bw9PCSEkLYd9cFMXhsPzgQObcjDwGuy3MJzgW4fvDTTQ9oqz%2Bk%2FogyFZiHbGtBcCGLqn20E%2B3N4S2hma1plCcv836NwTPfhLp9nUMXeIsgKdwnS1Y70d58D6vnqoPpAOrH0RMz5xB0lhngelo3zENiUihgkWUFWCSMX8PY0bF%2FAlNBIGGL6stwEkT%2BuKebiiBIuK4RMfQles%2B4K%2FgPdULF6QuOBGIC0FKbAOZpVuelEhOuZDChCv5R3LPZvLOQL%2BqfSgWJAdNNg1%2FGV%2F646Lm1xc5IFG00gy7B3f%2Bhc7RTR0dPMqB3XtCmPgXFJyWSMqN7eWNT0fAWo44Vv5fCe2fue2pVceqCqDkhJZCEEK6DOS9l7vwrQ7lyE2%2BxMBtpw8w9q8T%2FMxwpAJ7PFIYT12XwUnpD0vre8XL%2FiJ5meIFpcBPeNhMnuQXxX0DVk3v8Tnra1JWerJ0KfTnVoC5Z4CQZB%2FHzCjr8HCBjqkAR2xGfYltJWiX5lst0PUh0DCfGNrS4yanj4zx7yKygIK2Q27DTwWbzNus0bi3uzEaeCxUeG2RoKYARGW9nv2jkHyYdmuGUJIl5QtAPtuim0sfs8wXbij8YyH94EKDhKuwoOECUzSYw0LPaJFWTJqMhoITcrwDZsbh2llAliQcvtz%2FRFzibLv3kmN1D9CO5%2FHrV9%2BbTfoYz%2B6s5fVKT9pfE2CPuMX&X-Amz-Signature=9cbefc8cfe54be42df15b320033903fcebe8273db70c5a5e8355c56a93a272c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3V2FTD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDs%2BDExpAUu9%2BNIZQ5eYe8Bex9orehsvmTYrmzC82npjAIhAOeMYn8vDVOdeh89OSZIfKqL2XHhCbxR0hliLD0KcQmJKv8DCGMQABoMNjM3NDIzMTgzODA1IgyVqP8QCndDcqlU950q3AOWd%2F2EiYbxytqFCB%2BNCvPik86avdLTRCWWQDuAovmYpoa2gUrx%2Bx3fbG5OpqxN3u%2FZ%2BqzVAD5hH1aeIDPf%2FiQ66XXsxt0ZI2JnhkjqZJe9750cEBN6KGQ1DKbml6XC0sdrz13Fpsxery80ChMVN750N%2BrOTfmFU%2BRe%2Bw9PCSEkLYd9cFMXhsPzgQObcjDwGuy3MJzgW4fvDTTQ9oqz%2Bk%2FogyFZiHbGtBcCGLqn20E%2B3N4S2hma1plCcv836NwTPfhLp9nUMXeIsgKdwnS1Y70d58D6vnqoPpAOrH0RMz5xB0lhngelo3zENiUihgkWUFWCSMX8PY0bF%2FAlNBIGGL6stwEkT%2BuKebiiBIuK4RMfQles%2B4K%2FgPdULF6QuOBGIC0FKbAOZpVuelEhOuZDChCv5R3LPZvLOQL%2BqfSgWJAdNNg1%2FGV%2F646Lm1xc5IFG00gy7B3f%2Bhc7RTR0dPMqB3XtCmPgXFJyWSMqN7eWNT0fAWo44Vv5fCe2fue2pVceqCqDkhJZCEEK6DOS9l7vwrQ7lyE2%2BxMBtpw8w9q8T%2FMxwpAJ7PFIYT12XwUnpD0vre8XL%2FiJ5meIFpcBPeNhMnuQXxX0DVk3v8Tnra1JWerJ0KfTnVoC5Z4CQZB%2FHzCjr8HCBjqkAR2xGfYltJWiX5lst0PUh0DCfGNrS4yanj4zx7yKygIK2Q27DTwWbzNus0bi3uzEaeCxUeG2RoKYARGW9nv2jkHyYdmuGUJIl5QtAPtuim0sfs8wXbij8YyH94EKDhKuwoOECUzSYw0LPaJFWTJqMhoITcrwDZsbh2llAliQcvtz%2FRFzibLv3kmN1D9CO5%2FHrV9%2BbTfoYz%2B6s5fVKT9pfE2CPuMX&X-Amz-Signature=6cd4d0cf38405cf27e76acf349caf57e0a8862ec9de29cb671f725dacd679162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3V2FTD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDs%2BDExpAUu9%2BNIZQ5eYe8Bex9orehsvmTYrmzC82npjAIhAOeMYn8vDVOdeh89OSZIfKqL2XHhCbxR0hliLD0KcQmJKv8DCGMQABoMNjM3NDIzMTgzODA1IgyVqP8QCndDcqlU950q3AOWd%2F2EiYbxytqFCB%2BNCvPik86avdLTRCWWQDuAovmYpoa2gUrx%2Bx3fbG5OpqxN3u%2FZ%2BqzVAD5hH1aeIDPf%2FiQ66XXsxt0ZI2JnhkjqZJe9750cEBN6KGQ1DKbml6XC0sdrz13Fpsxery80ChMVN750N%2BrOTfmFU%2BRe%2Bw9PCSEkLYd9cFMXhsPzgQObcjDwGuy3MJzgW4fvDTTQ9oqz%2Bk%2FogyFZiHbGtBcCGLqn20E%2B3N4S2hma1plCcv836NwTPfhLp9nUMXeIsgKdwnS1Y70d58D6vnqoPpAOrH0RMz5xB0lhngelo3zENiUihgkWUFWCSMX8PY0bF%2FAlNBIGGL6stwEkT%2BuKebiiBIuK4RMfQles%2B4K%2FgPdULF6QuOBGIC0FKbAOZpVuelEhOuZDChCv5R3LPZvLOQL%2BqfSgWJAdNNg1%2FGV%2F646Lm1xc5IFG00gy7B3f%2Bhc7RTR0dPMqB3XtCmPgXFJyWSMqN7eWNT0fAWo44Vv5fCe2fue2pVceqCqDkhJZCEEK6DOS9l7vwrQ7lyE2%2BxMBtpw8w9q8T%2FMxwpAJ7PFIYT12XwUnpD0vre8XL%2FiJ5meIFpcBPeNhMnuQXxX0DVk3v8Tnra1JWerJ0KfTnVoC5Z4CQZB%2FHzCjr8HCBjqkAR2xGfYltJWiX5lst0PUh0DCfGNrS4yanj4zx7yKygIK2Q27DTwWbzNus0bi3uzEaeCxUeG2RoKYARGW9nv2jkHyYdmuGUJIl5QtAPtuim0sfs8wXbij8YyH94EKDhKuwoOECUzSYw0LPaJFWTJqMhoITcrwDZsbh2llAliQcvtz%2FRFzibLv3kmN1D9CO5%2FHrV9%2BbTfoYz%2B6s5fVKT9pfE2CPuMX&X-Amz-Signature=fc02c778750b33a7c1ac1842f576a2fa93973b2f64911f966e30a995cdf34d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXLPVSO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICfVjr79iV7eVmCaKgY%2Fypg05ve3wRss354PE9jyUnn1AiEArMe%2BbaXuTICeGvRI5cSnhR5jIBFan4SSHTKjx4R8H4oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJ7VFrEz3IxhC7vdTSrcA1EKH%2BxpqVDsoGJHclIEZtsaabin6xmlc8iYuhMDqpSQYXe3XY9DDZnJkJTaGgqF81fRv1v1CxILPQ0EhKGsWxSBQXUBs1x2iHXiFAQQ38nWt5qtJDtvTuorCdNKjRiGF7zu%2FOsy3XYjeqrHSket%2BVFNhSh%2Br39KUTO4zJdlu8DKBtsSuH%2FPMGA5DkJbYLhR07TZgmgblAu6HUCSVcY8dHTcgXVMi%2BsQ9ZxaBTeX9yd7ziO7yrW0r5DfXJVM%2Btmjr%2B9zOUckFMGZwxQgpvbtIQddjBMn%2FkzH9uSb9iINrlW0k2dS3hvI%2BRib%2BcaHc1sIbkYxaE8J3iKy%2BzesFsjoslPoG%2BHrwI9uT9VaICGwVnLC1tMpRckgrNeFxXGM3%2BYVLwxeDE2SiX0SQU4DstvPeQH%2BTGtNCSe6kzUzcVUvuW0OzND%2B9mKt9sowt3pNJuFhYAgqobSnkC1XuQJsigpAZHOmkc0eDU9WoraSq3lnG1XsPtx%2FPDtyayyqjfjIwjVNHG7YxkJA1EgTezkbjsG7O4crG5%2F6Ek%2Fq0w1PsGeb0Qb77kQhsdtJgIqFSQwpNZWB4HqUaUHCkfVYNv6X7ndUR7MgQL94iLR2GpDLtBbyXbgkbdK%2BZZAM2KsI0mZ%2FMLmvwcIGOqUBex%2FtlUX7EHAXj4Da%2BhPnyK%2FsIlO2lotDpg1HpDPDFOP2y3CbhLVhpQl43lGVHepzGPR7%2BqH0WDOLEAfaBR4hPWB1ezXY4JncfENr79chFwVfGa%2BM%2BF295pfwCx7plLyJUk9SN6BaQO2TYXGEW7UUFcB7J25MZEcFdSH9KJlruyXXGbwByUsOVoVGrryhWPyH6Rka8Ic3erj2vLgpK59vNqUYzldI&X-Amz-Signature=2cec5323a47404a426dd69a2eee39ae0c281504bf2d5642d05612ab0e2bf5683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWRFJOE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGQcvO8cLUh4gJsj057dhqyc%2BNY5FJTcdcjBCklOk2qqAiEAtilUEjmnjlyNy83gT7n7QZuC18kKALxs%2BZ6Xc%2BqAzqYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOqyK3hRWjxGaoiVXSrcAyIm4YOue6Kck6306V83AhN2z1mx1KfPNlsoP85WVPM6oOEvnP5wpjDqt3%2FGiOiWoPZ8iFSpq5nWNOD5NoFVJQjWblDx%2BLzhJp3kvqQykesF8JZavzTLKsoEFk7XBPUjI4QHJFDyiPwz718KE%2Bjftoo6QjHW4x88j4gzg5Vsy0U7wXIpSUixUPKLU0Tfk1vqOUyo4%2BbmQLEFLogDbkTvG1n6S4MYFHxESsEqqnY%2BgaPDWcaZN2GMPXxR0VPV4qVzHqX4S5jd3xlkOTKMI%2FQcGKois4LWwxA%2BB3a7%2BazvfPGM9Fb0NRLpgAxAKbHH8U6fu%2Bb%2B6Op3X%2BsDIRXyigurYwf1okkWBmeJDx08aDZbsHIf5zcrak165MecMTiG58kjPo888Ig%2F%2BDEuIw3j9iL7QzIyb0HgOU9QGiWj542GwVfkE42BqCXIjhbIv6RMhAGEuA3lrWsODsoDV5nYv2fpiGMOSmAcU1ylL7qmmZak07FcOdKL387G%2BJKgofAGbMMC%2Fjal2dUgSvSt0nyXqLjdlYGOqBPRL0nRLre7nS0hziSz4g0WS7Mg5gz6pRJy2sXA6IBsxAFWXr9JWTAR9Pvq3fBuyX9N1V%2F4cF0FBgaCq%2BgRzC2%2F88iAWAHRKRvsMI6wwcIGOqUB0oKhHY73bbHlhkjiLJc7tlapqjVtuD1TujXPb%2BfQ7OR1wAW2ahQQA3qjfzyUDA%2F7ejcj5IiApjL66TsmoFgJnCVwfP4xxynRIypXd%2BHIJ5za3fPEPTw%2B50ayIwMh52oaa8DggsOYK1wiijF8gPTVobupsdXPxiR%2F6%2BzeSByPW5owg0QPHmNBWusHZUUw4rQHgrCqNPuCijAJLWUn0RoD3M9hY68O&X-Amz-Signature=e10b85dd40061e0453cf3e1e3a2fc11f01a17bc24a42424cf3471dbf9c98a8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3V2FTD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDs%2BDExpAUu9%2BNIZQ5eYe8Bex9orehsvmTYrmzC82npjAIhAOeMYn8vDVOdeh89OSZIfKqL2XHhCbxR0hliLD0KcQmJKv8DCGMQABoMNjM3NDIzMTgzODA1IgyVqP8QCndDcqlU950q3AOWd%2F2EiYbxytqFCB%2BNCvPik86avdLTRCWWQDuAovmYpoa2gUrx%2Bx3fbG5OpqxN3u%2FZ%2BqzVAD5hH1aeIDPf%2FiQ66XXsxt0ZI2JnhkjqZJe9750cEBN6KGQ1DKbml6XC0sdrz13Fpsxery80ChMVN750N%2BrOTfmFU%2BRe%2Bw9PCSEkLYd9cFMXhsPzgQObcjDwGuy3MJzgW4fvDTTQ9oqz%2Bk%2FogyFZiHbGtBcCGLqn20E%2B3N4S2hma1plCcv836NwTPfhLp9nUMXeIsgKdwnS1Y70d58D6vnqoPpAOrH0RMz5xB0lhngelo3zENiUihgkWUFWCSMX8PY0bF%2FAlNBIGGL6stwEkT%2BuKebiiBIuK4RMfQles%2B4K%2FgPdULF6QuOBGIC0FKbAOZpVuelEhOuZDChCv5R3LPZvLOQL%2BqfSgWJAdNNg1%2FGV%2F646Lm1xc5IFG00gy7B3f%2Bhc7RTR0dPMqB3XtCmPgXFJyWSMqN7eWNT0fAWo44Vv5fCe2fue2pVceqCqDkhJZCEEK6DOS9l7vwrQ7lyE2%2BxMBtpw8w9q8T%2FMxwpAJ7PFIYT12XwUnpD0vre8XL%2FiJ5meIFpcBPeNhMnuQXxX0DVk3v8Tnra1JWerJ0KfTnVoC5Z4CQZB%2FHzCjr8HCBjqkAR2xGfYltJWiX5lst0PUh0DCfGNrS4yanj4zx7yKygIK2Q27DTwWbzNus0bi3uzEaeCxUeG2RoKYARGW9nv2jkHyYdmuGUJIl5QtAPtuim0sfs8wXbij8YyH94EKDhKuwoOECUzSYw0LPaJFWTJqMhoITcrwDZsbh2llAliQcvtz%2FRFzibLv3kmN1D9CO5%2FHrV9%2BbTfoYz%2B6s5fVKT9pfE2CPuMX&X-Amz-Signature=669f321fb6e57f4c92617a7f87246d89ac8809a8b4dfe3172ff7f093723f037f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
