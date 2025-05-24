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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHU2WXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA1ynaouxAVgTokdT83imiNQf9SbFt%2BzVRiiODG9jRd%2BAiBtn%2BcijbUGSSf%2B%2F%2F6CN0QoBfdLzoGUZLGAJgqsbL4Hbir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM%2BNz%2Ba%2Fo1tc2c1FdCKtwD%2B0DVsnx2pW6SftzFw4xOPm%2FBU%2FPT2t%2B5Gpsi%2BwDR85EwH4hYiczKyOAbxP%2B5Q%2BFiZ3c6WsDp3Lwt9XWYsZEoRyQ7ZQNf75ZuJTYQYDtFWMjfVPOhyIRZQtpNXFJIC32wN5saxXUtGHL0k37xsbgHS%2Bc6NCLtKL%2B96TtO3n0DqreguLhSJ5o9Eh%2BW6AMGw7UZlSzXvjyrOxuYSisaBqwwmfjkROtLV%2B2jVn%2FKrfdh5Ui3YrJYtGa8vkDjkjAc%2Biaw%2BH0iBIK0%2Bz%2FNSSXrquVJ2BCLfhQprSCP9%2BTMlAbAXYSRazNIGhhP5Lrs%2FiPoj7H05AK9AeILorrUpYi2rUTQcRWkAbhSNzIBU%2BCBODYdZFvpcc%2FmMD3CMMyzJQth31uyzZbXio%2FGkbLdApy234PNgXodyzKCbnuXOZYePKs6HTN44MpcuEG%2BDnUFTY%2FP5YRGe0JP%2Fo4suUfO2WO53Ra23El79D8TUkJBjwalYmz5slP3QJ86GA6zVPNlUZbq4c7QdkPI66%2Bk8zjQ6XI9bQ0rVPKfGv3I5n%2B426BGmFCGhQ0G732l3MEuePStDnNzTP968%2F43LIjfJLq6wnJ47myOvGsvqbLYAsbmJI4NIEp1XxVW%2FtM7l2eAM19e0VYwnIDGwQY6pgHMGBvVcq4JnyEF7MeV8eCjvn4dqWQbSrKjO219QS8ow3FB7mL7R0o%2F83uBAXnkow400oxUSZZotcUu460SkO1uhAcaVnBD4E3HDB8sbYrTsnLk%2FdA3qu7tNV9W8%2FTAuGgy6jjoj39EV2LNCsaqnewI%2F4fOtPCui4W8eLemhUq85izV5BnsBfoDVXGvDb3uIK66o2LZeFW0hZxdnd%2Fyf9AlJDRaF9ys&X-Amz-Signature=582247c444ae4b27f4b29c3c650f0c021a3cf33a10a3bf4ba966365004c828a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHU2WXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA1ynaouxAVgTokdT83imiNQf9SbFt%2BzVRiiODG9jRd%2BAiBtn%2BcijbUGSSf%2B%2F%2F6CN0QoBfdLzoGUZLGAJgqsbL4Hbir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM%2BNz%2Ba%2Fo1tc2c1FdCKtwD%2B0DVsnx2pW6SftzFw4xOPm%2FBU%2FPT2t%2B5Gpsi%2BwDR85EwH4hYiczKyOAbxP%2B5Q%2BFiZ3c6WsDp3Lwt9XWYsZEoRyQ7ZQNf75ZuJTYQYDtFWMjfVPOhyIRZQtpNXFJIC32wN5saxXUtGHL0k37xsbgHS%2Bc6NCLtKL%2B96TtO3n0DqreguLhSJ5o9Eh%2BW6AMGw7UZlSzXvjyrOxuYSisaBqwwmfjkROtLV%2B2jVn%2FKrfdh5Ui3YrJYtGa8vkDjkjAc%2Biaw%2BH0iBIK0%2Bz%2FNSSXrquVJ2BCLfhQprSCP9%2BTMlAbAXYSRazNIGhhP5Lrs%2FiPoj7H05AK9AeILorrUpYi2rUTQcRWkAbhSNzIBU%2BCBODYdZFvpcc%2FmMD3CMMyzJQth31uyzZbXio%2FGkbLdApy234PNgXodyzKCbnuXOZYePKs6HTN44MpcuEG%2BDnUFTY%2FP5YRGe0JP%2Fo4suUfO2WO53Ra23El79D8TUkJBjwalYmz5slP3QJ86GA6zVPNlUZbq4c7QdkPI66%2Bk8zjQ6XI9bQ0rVPKfGv3I5n%2B426BGmFCGhQ0G732l3MEuePStDnNzTP968%2F43LIjfJLq6wnJ47myOvGsvqbLYAsbmJI4NIEp1XxVW%2FtM7l2eAM19e0VYwnIDGwQY6pgHMGBvVcq4JnyEF7MeV8eCjvn4dqWQbSrKjO219QS8ow3FB7mL7R0o%2F83uBAXnkow400oxUSZZotcUu460SkO1uhAcaVnBD4E3HDB8sbYrTsnLk%2FdA3qu7tNV9W8%2FTAuGgy6jjoj39EV2LNCsaqnewI%2F4fOtPCui4W8eLemhUq85izV5BnsBfoDVXGvDb3uIK66o2LZeFW0hZxdnd%2Fyf9AlJDRaF9ys&X-Amz-Signature=0191e7d7e8d38d834fc7aedc470924b23767ec30575300f1f098c5e17f83ddd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHU2WXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA1ynaouxAVgTokdT83imiNQf9SbFt%2BzVRiiODG9jRd%2BAiBtn%2BcijbUGSSf%2B%2F%2F6CN0QoBfdLzoGUZLGAJgqsbL4Hbir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM%2BNz%2Ba%2Fo1tc2c1FdCKtwD%2B0DVsnx2pW6SftzFw4xOPm%2FBU%2FPT2t%2B5Gpsi%2BwDR85EwH4hYiczKyOAbxP%2B5Q%2BFiZ3c6WsDp3Lwt9XWYsZEoRyQ7ZQNf75ZuJTYQYDtFWMjfVPOhyIRZQtpNXFJIC32wN5saxXUtGHL0k37xsbgHS%2Bc6NCLtKL%2B96TtO3n0DqreguLhSJ5o9Eh%2BW6AMGw7UZlSzXvjyrOxuYSisaBqwwmfjkROtLV%2B2jVn%2FKrfdh5Ui3YrJYtGa8vkDjkjAc%2Biaw%2BH0iBIK0%2Bz%2FNSSXrquVJ2BCLfhQprSCP9%2BTMlAbAXYSRazNIGhhP5Lrs%2FiPoj7H05AK9AeILorrUpYi2rUTQcRWkAbhSNzIBU%2BCBODYdZFvpcc%2FmMD3CMMyzJQth31uyzZbXio%2FGkbLdApy234PNgXodyzKCbnuXOZYePKs6HTN44MpcuEG%2BDnUFTY%2FP5YRGe0JP%2Fo4suUfO2WO53Ra23El79D8TUkJBjwalYmz5slP3QJ86GA6zVPNlUZbq4c7QdkPI66%2Bk8zjQ6XI9bQ0rVPKfGv3I5n%2B426BGmFCGhQ0G732l3MEuePStDnNzTP968%2F43LIjfJLq6wnJ47myOvGsvqbLYAsbmJI4NIEp1XxVW%2FtM7l2eAM19e0VYwnIDGwQY6pgHMGBvVcq4JnyEF7MeV8eCjvn4dqWQbSrKjO219QS8ow3FB7mL7R0o%2F83uBAXnkow400oxUSZZotcUu460SkO1uhAcaVnBD4E3HDB8sbYrTsnLk%2FdA3qu7tNV9W8%2FTAuGgy6jjoj39EV2LNCsaqnewI%2F4fOtPCui4W8eLemhUq85izV5BnsBfoDVXGvDb3uIK66o2LZeFW0hZxdnd%2Fyf9AlJDRaF9ys&X-Amz-Signature=324edf1eff977df12d212862329fc98812e98d89d34e59e63069dfb2a4369a12&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IDD3DD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0nbUYDrxAJtxFKvBvKXkxCbKbcWd%2FTGqQVKBfdeveIwIgGH3RXW3hzYErY0d%2Fq%2BN%2FCZDfMZ6KSQ17nvkAgjHUS1oq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDADq16g3%2BMsCJh5i5SrcA9PkE6TN99jDYqmdE6L5pmQUOkmCiwpN1HBdGJ5L6rlxV0Ky%2BL%2F8v0oq99jQuf34w0fgDKzgKaJbmzkNeTDATb1uYCI8dSHEx0xBC1yg0HLo%2BYqbuZBjrwl8lSYf6OCgwjCwuXgAFVLByDCp7UJsjhj2ibOyuV4KPswu0KKN7p6yuBwvAmzQIq0D%2F%2FM43PxoexRM%2FiRpN633vM1LE9gmctbFgcJEsO2nE%2BpvT0AywXIUVh7Msyt01EJkt3u%2BWuQVKOhu6VvDbqIpCx%2BahjS5uQI8l%2BCXWMzPAYULZtRoJ3U9i5AW0SqKGT4sQmNGwBtnRTk4NxxJ%2BnFdkrZ7tRT%2FjeIj7BDJGorJiM553fQ7UIdobUVBdIkHcPtgtKV807qrR8Q4cndFbOsxErSgR7p%2F3B1FVHMsLG7Ok%2FNnNst0PNd30sPHjY2KBVCkxYsvLImSOoYK61rIiCoUsAPBGLt%2Fl1ntPjnGNSJHr5CYGvdUAlm8ojyqQ05moUDSQ9%2BKTvNSboAyuI8%2FZvdYfthwIIPsAvV%2FBtfT31j6f3tMfRXmx87967fwluZnXgrFntMutmedUrhGAtBNto44DACv%2FpFZLtQJZqAIAuhih3i8UXzkCxMNh%2FygkOpKPssHHrwVMK2AxsEGOqUBssak5RBasR3kT4ZE9d6FnCLzmTkNOtfpexYykRmo6z5pYENzizVpo6TrdGG3RdlY8LwkNu33saZi%2BCgemrJ24t335qHtOEDpgTBbAOUJKb1xcFchtH33l%2FYXpLBZDECWu68tiW2PeKFl4JpTavJlCoCe8COwS2lyp9NHne9UpZgGCLayeiEcy%2Bpx4ASu0%2Bj5IoIN3eUuRs%2FzrEdh5WZg0rI66crI&X-Amz-Signature=984c8f38adf6493c211e3c4c4d4d934f6890ec0061ac288a6f997c55674dfd72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZIF7FJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDh8BKg8oj9OQHqkmxZypXFa6D1sIYUXNlDYImvzrUZ5gIhAI8x7PHphSmrd5G5b2gMciktPrjALHiAoM5e6z8vj0qsKv8DCBEQABoMNjM3NDIzMTgzODA1IgxVD4ydETv0sdqeEK4q3ANrdja%2FC64kDT6SKY5TKtHtSFjEA97KewEbTlrnJdUO2ruCpUqj5EHgZs5uaB%2BqksGewVnP3Z1T8iDCCfgTY0404uhPAkRWhKd99%2F2PwQQ4zzq0K2Rzp3DukmGnaf%2BOnOVrxAtZmNVxqLKz%2FTBfN7hfpKBl5eZJ62rhypiPFl0yfHUG0eoFPVnK%2BEf2UEjDEb1DYrnEXCPDhdqPMk1rkpaApwx0IIvrZ6V9ImwC42HDqUDkS4Jg4H6hIFj7cYkfkz2DZijIgSYdvOvfL5%2Be9McRGfxDxZLbtpbYUU3c8JbRGUvLQ9TUAM2ZALSNiW%2BlHcastdPPF9tjoXNLXvbRL%2Bg%2ByGCCXb2CULvmJ8Ex9Ko%2FqCSuPhz1zWept2yV1wQltaGs%2FDMIJ4%2BX0TG2cK4MMI4CioerIy2LIuhXeSGoRfSFPTJONUdPxMAv2WeuQ4pOBxdUKN9jwgeUr%2BBU6Vv%2F3kEydH0Ag4uiguNm9wBp42nRbwvJXUtscwsM%2BIZgK%2Bhl%2FbuMFfhv8fmM2eQiNkl30oXmOvFmnH45Df%2FtCkqXU8GPLToSquZ2X8GLVw14aKYZu2QQu07rE9tTFu8A605j1owFWiQESztQ5PUZSTc2LdukYdepuDAuyL7LMy04kjDWgMbBBjqkAX0l1C47LO0hpFkWdwQjnxzH%2F2sF82MWHurFZFUCzC4aBrf30tjiL2U4W4OEgmaT0eBn4ReJC%2BTbQhXnFf5e7X9r1ubUi3dt78cdDSofOZFc7ZFnah4Q9oR6k1bZ8KSfOKvJjeKJWcTPDeRyt3dW%2F6Nrg%2B3Va8EmY77oB6Ij9VGQLpetUuJn3XRmpI%2Fuk8eQ3SubXGwVoSBPqWMRh8L9QxKZWN71&X-Amz-Signature=f75460a3d16a639679b4d85e3e7657ec07ebbd062e85abbb96fa529c1d954d32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHU2WXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA1ynaouxAVgTokdT83imiNQf9SbFt%2BzVRiiODG9jRd%2BAiBtn%2BcijbUGSSf%2B%2F%2F6CN0QoBfdLzoGUZLGAJgqsbL4Hbir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM%2BNz%2Ba%2Fo1tc2c1FdCKtwD%2B0DVsnx2pW6SftzFw4xOPm%2FBU%2FPT2t%2B5Gpsi%2BwDR85EwH4hYiczKyOAbxP%2B5Q%2BFiZ3c6WsDp3Lwt9XWYsZEoRyQ7ZQNf75ZuJTYQYDtFWMjfVPOhyIRZQtpNXFJIC32wN5saxXUtGHL0k37xsbgHS%2Bc6NCLtKL%2B96TtO3n0DqreguLhSJ5o9Eh%2BW6AMGw7UZlSzXvjyrOxuYSisaBqwwmfjkROtLV%2B2jVn%2FKrfdh5Ui3YrJYtGa8vkDjkjAc%2Biaw%2BH0iBIK0%2Bz%2FNSSXrquVJ2BCLfhQprSCP9%2BTMlAbAXYSRazNIGhhP5Lrs%2FiPoj7H05AK9AeILorrUpYi2rUTQcRWkAbhSNzIBU%2BCBODYdZFvpcc%2FmMD3CMMyzJQth31uyzZbXio%2FGkbLdApy234PNgXodyzKCbnuXOZYePKs6HTN44MpcuEG%2BDnUFTY%2FP5YRGe0JP%2Fo4suUfO2WO53Ra23El79D8TUkJBjwalYmz5slP3QJ86GA6zVPNlUZbq4c7QdkPI66%2Bk8zjQ6XI9bQ0rVPKfGv3I5n%2B426BGmFCGhQ0G732l3MEuePStDnNzTP968%2F43LIjfJLq6wnJ47myOvGsvqbLYAsbmJI4NIEp1XxVW%2FtM7l2eAM19e0VYwnIDGwQY6pgHMGBvVcq4JnyEF7MeV8eCjvn4dqWQbSrKjO219QS8ow3FB7mL7R0o%2F83uBAXnkow400oxUSZZotcUu460SkO1uhAcaVnBD4E3HDB8sbYrTsnLk%2FdA3qu7tNV9W8%2FTAuGgy6jjoj39EV2LNCsaqnewI%2F4fOtPCui4W8eLemhUq85izV5BnsBfoDVXGvDb3uIK66o2LZeFW0hZxdnd%2Fyf9AlJDRaF9ys&X-Amz-Signature=c8e39b3fc48eef2a8305834dadfdf4b0bc3ed5ae33819480a0dfe0fe24850982&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
