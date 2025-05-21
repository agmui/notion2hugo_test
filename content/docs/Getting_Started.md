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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSW2F7P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFzIgk9MuLIe3%2FB%2F%2F24aYUZ8%2BTsS6sAuksxZdStpTwWAiEAro58QdXmH47k96zHJvlNQO4GDxjY9o8gx%2FsFo%2FQt0lYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Nc7CY1PhJ7jG58ircA3inT7Vd5KvfdpUiOAdsts2qzjM89mMJqNiyLFAGnzKpr9b3kq1L9njGHAXXF4%2FhSHxPiok5U21ca02GMEtNfwmGURpzm4i%2Bu6ud%2F5u7TGUGvxzb%2FvWJa0PrCBaZID9s6Wn6Gh5ctVAWpTuPifPmGoR2AHDynGNTxTQbZN4HgnQme7hPUziTF7gPz6pxl1LuLo%2B5Sfc4J4RWSnpW%2Bzt%2BuWHkhmnMh0SNJmHYPBFLTjRH5utU1Dwo%2BXqBI7%2F%2Fk9tXYrN1zlKMZEajC3ffvuo7H5UVpZJExhw5ijOhd7DlIZaVmH8IpqYqU56KWDdC%2BJm%2BcivN%2B%2FJLyWM6UYcjWQSk14zEh%2BDcGe4fqoSWCwnmuCHcCwMtXE976Zg1c0xSF1pIjmY2MIJjNjWWMU28JHi3%2BhR54aVL07eLVPsGWjSJW5Vkyc4sc5f5%2FHW3%2ByGE8p8BnxnLCSoM3U3jJ421s7SW2KSV%2FEGzjIDpjnN1hIhYx05b%2BeDQMiBHsP2ptyAKz5GogIxFdBmJLNg6YWfnUnRYckp1NKNcs%2BLDGYZfDSBATZ%2F5YYkLAUfmEFd1KNGfe9DtDYr2q0KnBXEnmZNYj8OzzxujNhObjIXY9PjMla4CuYqclJMEvITzjQMMcQM4MNiPtcEGOqUBP6pldHEGNXUbvuBFcilibCEqpUaGb1wvMnoCRTAzHWZR1IandIx8hPhxX95Zlhj8ILmwvmZTLl2TqfPav6SJNExkN%2BCDq%2B7La4EvSKbLhn0Jt3utk8W3vK25ob9W66%2FtsUTq0cwdTUJghP4JShUTWO%2FRm594bQz3T5gH9ViVxV%2Bo8%2FMiJW5Z0SrqCpSAgvWu05ofaHUn%2BrqKuTyKrwPMX0xfkq6q&X-Amz-Signature=ed0dadd390de689391e6e81c3a1cfc09027efb38bb5f61ec81d5139230180fee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSW2F7P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFzIgk9MuLIe3%2FB%2F%2F24aYUZ8%2BTsS6sAuksxZdStpTwWAiEAro58QdXmH47k96zHJvlNQO4GDxjY9o8gx%2FsFo%2FQt0lYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Nc7CY1PhJ7jG58ircA3inT7Vd5KvfdpUiOAdsts2qzjM89mMJqNiyLFAGnzKpr9b3kq1L9njGHAXXF4%2FhSHxPiok5U21ca02GMEtNfwmGURpzm4i%2Bu6ud%2F5u7TGUGvxzb%2FvWJa0PrCBaZID9s6Wn6Gh5ctVAWpTuPifPmGoR2AHDynGNTxTQbZN4HgnQme7hPUziTF7gPz6pxl1LuLo%2B5Sfc4J4RWSnpW%2Bzt%2BuWHkhmnMh0SNJmHYPBFLTjRH5utU1Dwo%2BXqBI7%2F%2Fk9tXYrN1zlKMZEajC3ffvuo7H5UVpZJExhw5ijOhd7DlIZaVmH8IpqYqU56KWDdC%2BJm%2BcivN%2B%2FJLyWM6UYcjWQSk14zEh%2BDcGe4fqoSWCwnmuCHcCwMtXE976Zg1c0xSF1pIjmY2MIJjNjWWMU28JHi3%2BhR54aVL07eLVPsGWjSJW5Vkyc4sc5f5%2FHW3%2ByGE8p8BnxnLCSoM3U3jJ421s7SW2KSV%2FEGzjIDpjnN1hIhYx05b%2BeDQMiBHsP2ptyAKz5GogIxFdBmJLNg6YWfnUnRYckp1NKNcs%2BLDGYZfDSBATZ%2F5YYkLAUfmEFd1KNGfe9DtDYr2q0KnBXEnmZNYj8OzzxujNhObjIXY9PjMla4CuYqclJMEvITzjQMMcQM4MNiPtcEGOqUBP6pldHEGNXUbvuBFcilibCEqpUaGb1wvMnoCRTAzHWZR1IandIx8hPhxX95Zlhj8ILmwvmZTLl2TqfPav6SJNExkN%2BCDq%2B7La4EvSKbLhn0Jt3utk8W3vK25ob9W66%2FtsUTq0cwdTUJghP4JShUTWO%2FRm594bQz3T5gH9ViVxV%2Bo8%2FMiJW5Z0SrqCpSAgvWu05ofaHUn%2BrqKuTyKrwPMX0xfkq6q&X-Amz-Signature=ecb2d5934b360100b6ea44a40755021b27092ec5d3aaf088be4f0923a7cf37a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSW2F7P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFzIgk9MuLIe3%2FB%2F%2F24aYUZ8%2BTsS6sAuksxZdStpTwWAiEAro58QdXmH47k96zHJvlNQO4GDxjY9o8gx%2FsFo%2FQt0lYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Nc7CY1PhJ7jG58ircA3inT7Vd5KvfdpUiOAdsts2qzjM89mMJqNiyLFAGnzKpr9b3kq1L9njGHAXXF4%2FhSHxPiok5U21ca02GMEtNfwmGURpzm4i%2Bu6ud%2F5u7TGUGvxzb%2FvWJa0PrCBaZID9s6Wn6Gh5ctVAWpTuPifPmGoR2AHDynGNTxTQbZN4HgnQme7hPUziTF7gPz6pxl1LuLo%2B5Sfc4J4RWSnpW%2Bzt%2BuWHkhmnMh0SNJmHYPBFLTjRH5utU1Dwo%2BXqBI7%2F%2Fk9tXYrN1zlKMZEajC3ffvuo7H5UVpZJExhw5ijOhd7DlIZaVmH8IpqYqU56KWDdC%2BJm%2BcivN%2B%2FJLyWM6UYcjWQSk14zEh%2BDcGe4fqoSWCwnmuCHcCwMtXE976Zg1c0xSF1pIjmY2MIJjNjWWMU28JHi3%2BhR54aVL07eLVPsGWjSJW5Vkyc4sc5f5%2FHW3%2ByGE8p8BnxnLCSoM3U3jJ421s7SW2KSV%2FEGzjIDpjnN1hIhYx05b%2BeDQMiBHsP2ptyAKz5GogIxFdBmJLNg6YWfnUnRYckp1NKNcs%2BLDGYZfDSBATZ%2F5YYkLAUfmEFd1KNGfe9DtDYr2q0KnBXEnmZNYj8OzzxujNhObjIXY9PjMla4CuYqclJMEvITzjQMMcQM4MNiPtcEGOqUBP6pldHEGNXUbvuBFcilibCEqpUaGb1wvMnoCRTAzHWZR1IandIx8hPhxX95Zlhj8ILmwvmZTLl2TqfPav6SJNExkN%2BCDq%2B7La4EvSKbLhn0Jt3utk8W3vK25ob9W66%2FtsUTq0cwdTUJghP4JShUTWO%2FRm594bQz3T5gH9ViVxV%2Bo8%2FMiJW5Z0SrqCpSAgvWu05ofaHUn%2BrqKuTyKrwPMX0xfkq6q&X-Amz-Signature=fa0ee4b1861f5c2b7497e23b4336ea4abf530599563303c4bc8555b48ffcabea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORUANZ4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk5eFwS3IcDrCV3pcwbGff06iAma9M280i5wtpPrg2zAiEA%2BYZSL8LLkqvw4EJFvWjx%2BoHsTQrzxqWrf6ofnm87FwIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlcyoEe6gKCesur1ircA1scYQgu7kbzanqzaPud8mvKC15qBsvAtXd7aefQpLQlkzPugBi07jx6UXpBtywslRfPWuylyAZd7BanjG5MbLfSzeODDsCBZft5WPPDi5hUAKfVpHOfkPli5QsaQhsj2KyVS9cwQ9I5QDqxF3uZO5u7MxE19VTIa5weUcRDT8TME5YVdWGIidqh2JF8Qszdu%2Fz%2B%2Fol0BGWUwcWw64E4B04LE1JiNeMwoJ9%2FwIVwXTQ8g%2B2fz8I1PrxlPZXHXYS%2B2pIo6Ry0k0EHK6hfcbclPeYZOiIJI6NHd9bzV%2Fe6xIM%2BuF6ImspW2PcV1Q5PuEypUclmbEM47eJ%2Bx9RrzEVnTuz4QAjTnJsscLVsrXR6ajFOBEtHuPc7mtZXJaub0XI51pnDJ8WSw2PvpJEc6Nc29bZPRGt9SL7PrvpmQQa8r7UZdbyuK3z5kEhngOgw89UH6ilCntpcWe0ey6yh7Gq1dqLkY71Gek69xkix9MIzaO%2B%2FDM9pLABRc%2FSZKzk4B2N51b7bDPSPFcxEHyOnpjKBtTAwFSRfQj%2FDoQ8MyLusApmGAz%2F2jhoAla7VQfSYvfr1lrp3wHr2nMC9QQZ5OSTdAgwNyV6UkJZH%2BRINDdSuMMlUFggXm722yjB7ljC4MMaQtcEGOqUB7PqB57XzyQfkduqiA%2F7RZ6YkXzDnRfdNpyLMY8Sgy8t6xqSFHK0%2BuSk76zte5ENxwM5zPCXRMdWHOnMuUevGXNBDrDB3EK6Lx6wSZgxW6gmjKVPoumyLggkntWIepJ%2BDI5%2F0Iy9Pmemu%2FeDZAzdlInZMmqs8SSEy%2BZvyJK1Npby78Oih8StbLqfOMS4eoOj%2FalsGTE7kabE8fuLyhy33NX5HOk4N&X-Amz-Signature=d66ad665476b2fa551635a591f8895631b5b1ab706a75bedb29f6a5fe7d51b43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVARCAC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mpIO2f0MDe9J%2FHi4GQ0D0RKQOVTYzD1cnVQXbPV03QIgQ6AJ8zi%2BzIUupWoWiiuZ51TmZhxN8QGQxNN1e6ff9zMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNlpqqF5T6XcXPbjircA6Zx51cIUYr5KyK3vQP6SO3jiGcMS9So9m17n4vK512YSaSVD8xw%2BiuXWk%2FbTCfk9tiIVGR9s%2FWFHRz1qJPhaC6ET%2F4Dmh7oUdgtSoQdwWVuz4hfCCn2PJH40JCgV4lMRXZy%2FejjbIpw8wC94EvqfFGtEsaUZo3lEgWWR0Tv7NnYFzDkiO8FZkZBl3mkmCyY1GScueWJJqW7szSEzdbhxAwusz0PEmGZgQnMDCwzmARPR3oDZiJMlNY7EXar9J822FTEJUcoPD4k9uk%2BhZn10I7cLnfiYc0pULIFH21MbFdg%2FvyLPxjIDThZ2Us6oYH1%2FUCKyBWnvAKkFvUmoKYtvcvqzl3blsSyEjgEAeo5bfg5NxHAdQgBBs7QV72eT48I8uHgvUOCVN76GS7bJQN3WCWkg7lfOuKgor5cp4fyZrxCImDRZSFtoCgiYtwCr6e1gQpBLoTG3GcklDARfWzpfduRMnkY2mTTIts4jfOTRFwJfvPGyBeEvLtEGxCNnhwnsretO2g%2FwZ%2BVZ6kqfWXYTsGpy9geHxJuTgAXnpKjCQhxUAmFd3eLZ6s%2FctT8Mdp8wQFPqoXeFfJuHShbd987gMBfyd0M1xBlRm5ppzTFZGDPRn1fmQdQ6nDwdKpeMP2PtcEGOqUB%2FeUjd0U9iorGnkar5uDez0mE%2F0npMQpeL%2F%2BA6RMBfCCUb1ZBOV6RT13soTewF0fFOJaxl5jf3V8pbKaDFduz9xT77Ve%2BDNUhnge5QBVK7rZkjqsRF9ta%2F6tgy8bAW3Ufn5Ds9NJmzTN7dtfxHo0IFfRbVG%2BttKfV1wfpnC5aJHOKE1Zd5BSwPCKKUqGBuOb%2F6%2FdnqNPBy29q8%2F348Vsfh709EPb3&X-Amz-Signature=6cb18b6e65bbac9703a6b4bf33ec29d795a903abf8ed1668f5db945280a996f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSW2F7P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFzIgk9MuLIe3%2FB%2F%2F24aYUZ8%2BTsS6sAuksxZdStpTwWAiEAro58QdXmH47k96zHJvlNQO4GDxjY9o8gx%2FsFo%2FQt0lYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Nc7CY1PhJ7jG58ircA3inT7Vd5KvfdpUiOAdsts2qzjM89mMJqNiyLFAGnzKpr9b3kq1L9njGHAXXF4%2FhSHxPiok5U21ca02GMEtNfwmGURpzm4i%2Bu6ud%2F5u7TGUGvxzb%2FvWJa0PrCBaZID9s6Wn6Gh5ctVAWpTuPifPmGoR2AHDynGNTxTQbZN4HgnQme7hPUziTF7gPz6pxl1LuLo%2B5Sfc4J4RWSnpW%2Bzt%2BuWHkhmnMh0SNJmHYPBFLTjRH5utU1Dwo%2BXqBI7%2F%2Fk9tXYrN1zlKMZEajC3ffvuo7H5UVpZJExhw5ijOhd7DlIZaVmH8IpqYqU56KWDdC%2BJm%2BcivN%2B%2FJLyWM6UYcjWQSk14zEh%2BDcGe4fqoSWCwnmuCHcCwMtXE976Zg1c0xSF1pIjmY2MIJjNjWWMU28JHi3%2BhR54aVL07eLVPsGWjSJW5Vkyc4sc5f5%2FHW3%2ByGE8p8BnxnLCSoM3U3jJ421s7SW2KSV%2FEGzjIDpjnN1hIhYx05b%2BeDQMiBHsP2ptyAKz5GogIxFdBmJLNg6YWfnUnRYckp1NKNcs%2BLDGYZfDSBATZ%2F5YYkLAUfmEFd1KNGfe9DtDYr2q0KnBXEnmZNYj8OzzxujNhObjIXY9PjMla4CuYqclJMEvITzjQMMcQM4MNiPtcEGOqUBP6pldHEGNXUbvuBFcilibCEqpUaGb1wvMnoCRTAzHWZR1IandIx8hPhxX95Zlhj8ILmwvmZTLl2TqfPav6SJNExkN%2BCDq%2B7La4EvSKbLhn0Jt3utk8W3vK25ob9W66%2FtsUTq0cwdTUJghP4JShUTWO%2FRm594bQz3T5gH9ViVxV%2Bo8%2FMiJW5Z0SrqCpSAgvWu05ofaHUn%2BrqKuTyKrwPMX0xfkq6q&X-Amz-Signature=ae66ed884487f58d1814abfe1290dedb3ef320d2df5d4e25f5ed76b11eef268c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
