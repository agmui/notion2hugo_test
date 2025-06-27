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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BQTWF5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDtT52C0SXphOPjwHVks%2B4yRBNh2Ba0gW8DX2SKSzpryAIgIjyqh4CQPp41OCTBATxbQAPkG2SOkkkTnXP9eevM%2FRcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHzpIqriJEaNc4UJnyrcA1ELTjZF3i1KNSkmP4QK%2FaRKQAi9AS%2BwAWVQO4PauauXcjRcFfNRPLw7nNiOAhLhfH%2BIejyV6JeOOpnP54KnpiClfh9BLmtxz3mNON7QLjkJsuVLlBV6CZHRZhqls52H0cuJDrxY0Uz1CLHF8Uh9N%2FLnaey3RWQ3OrzmX4NvGKKOmpqCz%2BaYKkkEnp2S4yYIuwxTbIpfVCU4jF2G32G9MaW%2BMQQCKVL19RRmdhFnMojSJpwILa07qLjvT0UXDRvhAa8LsGz4p9gMgr5ulxf%2BVZfZJ1C0e9yA6IGWLqybz1RgboLL73TP68zhCubif40o%2B2cX2CjKzLAsVFCvJokdb433wSIm4O4zkLzEc33b5EuNuEV07%2BRes9QEZMAJAsVoSGzvkA5CivYmRo4SfHCHi3wQCb24uVUKjJpkyEUUn9oL0ZAhy%2BA7snkRyVfqZfOhhQrbe3tJnyr5VNb9cpKsY5SwOklBi8S04NyyC5EvgtfjsC3nJmcXM7xeZwhi1XJkgrUFujECRQK4Or6%2FegML%2FYE80GpS26Lo86BUKF1XU8CtwwMx440pHqv0wMWLOtFjymXIADF70ICdUEBifJt%2FY00a4OmCUdwi3dPKW1xYooeYLFtWMBzUywEsSsG6MPb%2B%2BcIGOqUBX4iiR2eVsp8z4b25RP2TtfQvtvMfeCKY9%2BK7UDnM8Ljum6XQ0TSuwq4F1auvX6UOMAN1omN00VxVo%2FnoUKTd%2F4JJPxtVX9WpnfOMhkif9K9E8vJvrdW%2FCI4JI%2BIooti9ptpvaDkPeibS7YpUKrQ9tHEtkTzC%2ByOXLPYeTGVzskYbe3Hua0X4CcGghByOarG7QGxg9jECxNZ4jHtidnla5IQk44Ty&X-Amz-Signature=c466890f024d8607a72964afc142582d11dee1b9096815b1d4126a6ba84c7e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BQTWF5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDtT52C0SXphOPjwHVks%2B4yRBNh2Ba0gW8DX2SKSzpryAIgIjyqh4CQPp41OCTBATxbQAPkG2SOkkkTnXP9eevM%2FRcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHzpIqriJEaNc4UJnyrcA1ELTjZF3i1KNSkmP4QK%2FaRKQAi9AS%2BwAWVQO4PauauXcjRcFfNRPLw7nNiOAhLhfH%2BIejyV6JeOOpnP54KnpiClfh9BLmtxz3mNON7QLjkJsuVLlBV6CZHRZhqls52H0cuJDrxY0Uz1CLHF8Uh9N%2FLnaey3RWQ3OrzmX4NvGKKOmpqCz%2BaYKkkEnp2S4yYIuwxTbIpfVCU4jF2G32G9MaW%2BMQQCKVL19RRmdhFnMojSJpwILa07qLjvT0UXDRvhAa8LsGz4p9gMgr5ulxf%2BVZfZJ1C0e9yA6IGWLqybz1RgboLL73TP68zhCubif40o%2B2cX2CjKzLAsVFCvJokdb433wSIm4O4zkLzEc33b5EuNuEV07%2BRes9QEZMAJAsVoSGzvkA5CivYmRo4SfHCHi3wQCb24uVUKjJpkyEUUn9oL0ZAhy%2BA7snkRyVfqZfOhhQrbe3tJnyr5VNb9cpKsY5SwOklBi8S04NyyC5EvgtfjsC3nJmcXM7xeZwhi1XJkgrUFujECRQK4Or6%2FegML%2FYE80GpS26Lo86BUKF1XU8CtwwMx440pHqv0wMWLOtFjymXIADF70ICdUEBifJt%2FY00a4OmCUdwi3dPKW1xYooeYLFtWMBzUywEsSsG6MPb%2B%2BcIGOqUBX4iiR2eVsp8z4b25RP2TtfQvtvMfeCKY9%2BK7UDnM8Ljum6XQ0TSuwq4F1auvX6UOMAN1omN00VxVo%2FnoUKTd%2F4JJPxtVX9WpnfOMhkif9K9E8vJvrdW%2FCI4JI%2BIooti9ptpvaDkPeibS7YpUKrQ9tHEtkTzC%2ByOXLPYeTGVzskYbe3Hua0X4CcGghByOarG7QGxg9jECxNZ4jHtidnla5IQk44Ty&X-Amz-Signature=789ba956f7b16a6c88d7c4e9eacb9f091deebdf11abd9658bb40ad7ea269ba80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BQTWF5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDtT52C0SXphOPjwHVks%2B4yRBNh2Ba0gW8DX2SKSzpryAIgIjyqh4CQPp41OCTBATxbQAPkG2SOkkkTnXP9eevM%2FRcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHzpIqriJEaNc4UJnyrcA1ELTjZF3i1KNSkmP4QK%2FaRKQAi9AS%2BwAWVQO4PauauXcjRcFfNRPLw7nNiOAhLhfH%2BIejyV6JeOOpnP54KnpiClfh9BLmtxz3mNON7QLjkJsuVLlBV6CZHRZhqls52H0cuJDrxY0Uz1CLHF8Uh9N%2FLnaey3RWQ3OrzmX4NvGKKOmpqCz%2BaYKkkEnp2S4yYIuwxTbIpfVCU4jF2G32G9MaW%2BMQQCKVL19RRmdhFnMojSJpwILa07qLjvT0UXDRvhAa8LsGz4p9gMgr5ulxf%2BVZfZJ1C0e9yA6IGWLqybz1RgboLL73TP68zhCubif40o%2B2cX2CjKzLAsVFCvJokdb433wSIm4O4zkLzEc33b5EuNuEV07%2BRes9QEZMAJAsVoSGzvkA5CivYmRo4SfHCHi3wQCb24uVUKjJpkyEUUn9oL0ZAhy%2BA7snkRyVfqZfOhhQrbe3tJnyr5VNb9cpKsY5SwOklBi8S04NyyC5EvgtfjsC3nJmcXM7xeZwhi1XJkgrUFujECRQK4Or6%2FegML%2FYE80GpS26Lo86BUKF1XU8CtwwMx440pHqv0wMWLOtFjymXIADF70ICdUEBifJt%2FY00a4OmCUdwi3dPKW1xYooeYLFtWMBzUywEsSsG6MPb%2B%2BcIGOqUBX4iiR2eVsp8z4b25RP2TtfQvtvMfeCKY9%2BK7UDnM8Ljum6XQ0TSuwq4F1auvX6UOMAN1omN00VxVo%2FnoUKTd%2F4JJPxtVX9WpnfOMhkif9K9E8vJvrdW%2FCI4JI%2BIooti9ptpvaDkPeibS7YpUKrQ9tHEtkTzC%2ByOXLPYeTGVzskYbe3Hua0X4CcGghByOarG7QGxg9jECxNZ4jHtidnla5IQk44Ty&X-Amz-Signature=694f5f481965a326d2a6067da316b41ea9bf132cff6cf89715a57c7589c65328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAO2DPV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCC59rsHgoPcKZYQHTdQnJE13WJKptsKALqzyEz%2B0KetAIhAPb4H%2Bbijj40TvcVxtVtU3lxJ3LEWkuUmy1JGpHmhhmOKv8DCHUQABoMNjM3NDIzMTgzODA1IgzyITfAdN%2FiXZ5OQEIq3AMinX0TMiAu5zIxrPa2EW81D0kOjiKVz7QHJuRt%2FYaXQ1gLF6B3r8WftSJi60wFXVM8hpSZQwX8cCZcJKNltQlCL9lzIDvxVU9MYRmg%2FLxrEjA9tsrB%2BJOD0lhCMY2FX4MNHF6euq2%2FzVOBXVuR%2Bc9Y3G1%2FUKGo1eVJBL0%2FfWawVaVXP4WJI9ACZH63lnSR0Ovsh1WCnsSGOC6zZW0tULgc0vDXzXymUmWN3qW4WeBKX0PZYJqrRxlQXGcpUPyru2KBZq9nU89msRL4fgC%2FTBPrc5TmH5wn%2BhjtL40KE6ebV6b4Nb9aMBoPCdfoKZPLDYaoImE9XWmblP1i5T5%2FRLv0ymfA3y6cMfrxsSH7ZHTZbyZNcVi%2BiUJQ4E7zirPh5HsU5jB0KikHPRGCReRGJJreHAfCvTsfIKBId8tyxSomb3g6h8cP9RDwVT92bklxaGm%2FWjMoYtqBmtkpO0VK0b%2BSy0u%2BUfmSz0TWUZqsTD8KhQsFFMBcU%2B5197w0KDLb1EvdqzRfeM%2FOfEOJY7%2BE0cUmbu0QPZhBpOVdrurwzzbw2A7%2Br4VGZOnJuqelRe7bQoiCs5L%2Bv2Utop5IikXsEc3eXw4r%2Fk698LiHceXo8TtkThWY8j1jD0JQl%2FW4BzCI%2F%2FnCBjqkARJs1w7lEy7cMnt6tqfsAtW2FKFjdlaUsdFa7CcYznyjmi%2BOCfqNXvvRP995aiDRNV1o5ueb1idb8UX0hjwzUN12UAUW7DH9X%2FkNTm4fDx3bRarABuPUTh5LOLZ1Z7%2FNOE90io4in6GsO1Kc7xxr83yQsno%2FA5DlIHaQaFjOJA3PTt1uS58CNFiWLF0HSfYwHI9oZS8dMQ98gNDLBarBpsWO1hPM&X-Amz-Signature=c9a971ab3e22e81fc4b58cae858cb7d3b36b755aa6ecf2e436070e73dc5504ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDAX4EK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCRs2Sm0STD%2B18bN5b1AAFysC6y%2BMWBhUtV6PzHKZeeQAIhAPlEeKTUZujRCiwo7Oxpbm055vWODHpFIds3c1%2BwGKm5Kv8DCHQQABoMNjM3NDIzMTgzODA1IgxVSeBKzC6dc5Uvcywq3AN2pBeuqqSaj89LZ14CPvH7Xk4GRSEDLODDdFLt5VfAJL7zBPjiGVzuMGjNmTPM0ratHkNyHvyEAaUYYLBpwjkQtvtGp0qC0%2FunqyKpox1MOTX55Q%2FS6HeWvjIMxjsSbwq6ya6PYtgs5UJOHTYFiamMbCPrKpKpJje6Y4toJS%2BmtfI5ADcOr8kKLY2j%2FOkZ0HbVrPE5qkUVNuJFunbm9OqRM0PFWICOePOK5iQ9BB0WHHwJYRY2FwAJhtHgguRTLwxC1UPiHq6zwnQ9phRt%2FCdKqPB8RciK3y%2FnOlhB0wRk7lxDz6BNVGD0QVOWBdbPhQCvO0M3WdxCMxsbECzqremIws0mdS2UsHEw836rfzH0yMfJdw%2B%2Fi%2B9weYYEXknEJMhXyKTPgRe%2FhRkice17e8TRAYcgdiqvwz6RhDtTby9FrgtuMsMZ19C3n3OYfjZV56biKvoHt3GMfIs8673de%2Bsc%2BJne3AeaZ6G%2FHHRDeC40%2FkWZLogJorGTytp5S8625ZeTIBQxjpCW4S0D6DHtKLlM0QCdoYH%2Fw8aNeYKbdgM5QMkA3%2FibSvmQ2L65xzgeEf3WFWsYGN0%2BxRijRg2PzgsPLkFQotr2W%2B4z%2FExct%2FiPtR9EZdrhDwTr%2Bzg7ITD%2B%2FvnCBjqkAZ9j5C4bZBfGXAandhrsbbkmLQUlq4qOE6fWEINK86gTdM9Cacgc09sy05565Wjpw9CWNbSp51zAj2EBR1s8I6NglDVYmwHbtsocthXmGot6AOMDMMq7%2BcxLscDPSm%2F9H77lNuVuN7ADCtHhFeqV8VmIgRnQzl6h1eRfrtyipyheyTDQgmSGtEMct57ywxmCLOVF8rrAFJkJ0q8G8XFJ903x%2FUFQ&X-Amz-Signature=95341cd12573c3e466f86fcfa723da1c8ba7ca98cb8ade001cadb302f2f269d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BQTWF5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDtT52C0SXphOPjwHVks%2B4yRBNh2Ba0gW8DX2SKSzpryAIgIjyqh4CQPp41OCTBATxbQAPkG2SOkkkTnXP9eevM%2FRcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHzpIqriJEaNc4UJnyrcA1ELTjZF3i1KNSkmP4QK%2FaRKQAi9AS%2BwAWVQO4PauauXcjRcFfNRPLw7nNiOAhLhfH%2BIejyV6JeOOpnP54KnpiClfh9BLmtxz3mNON7QLjkJsuVLlBV6CZHRZhqls52H0cuJDrxY0Uz1CLHF8Uh9N%2FLnaey3RWQ3OrzmX4NvGKKOmpqCz%2BaYKkkEnp2S4yYIuwxTbIpfVCU4jF2G32G9MaW%2BMQQCKVL19RRmdhFnMojSJpwILa07qLjvT0UXDRvhAa8LsGz4p9gMgr5ulxf%2BVZfZJ1C0e9yA6IGWLqybz1RgboLL73TP68zhCubif40o%2B2cX2CjKzLAsVFCvJokdb433wSIm4O4zkLzEc33b5EuNuEV07%2BRes9QEZMAJAsVoSGzvkA5CivYmRo4SfHCHi3wQCb24uVUKjJpkyEUUn9oL0ZAhy%2BA7snkRyVfqZfOhhQrbe3tJnyr5VNb9cpKsY5SwOklBi8S04NyyC5EvgtfjsC3nJmcXM7xeZwhi1XJkgrUFujECRQK4Or6%2FegML%2FYE80GpS26Lo86BUKF1XU8CtwwMx440pHqv0wMWLOtFjymXIADF70ICdUEBifJt%2FY00a4OmCUdwi3dPKW1xYooeYLFtWMBzUywEsSsG6MPb%2B%2BcIGOqUBX4iiR2eVsp8z4b25RP2TtfQvtvMfeCKY9%2BK7UDnM8Ljum6XQ0TSuwq4F1auvX6UOMAN1omN00VxVo%2FnoUKTd%2F4JJPxtVX9WpnfOMhkif9K9E8vJvrdW%2FCI4JI%2BIooti9ptpvaDkPeibS7YpUKrQ9tHEtkTzC%2ByOXLPYeTGVzskYbe3Hua0X4CcGghByOarG7QGxg9jECxNZ4jHtidnla5IQk44Ty&X-Amz-Signature=6c6a399693d90763c5c45be1f0c9ffec7a66bd321da142874130e2408e17c3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
