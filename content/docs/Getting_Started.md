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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YX45RG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCq7dSHigjDhr79Ki3D1OfLNylnPHhqgR6ChDfGfe1t6QIgLyGIxAjbPTvxvSD3NC%2B0%2FWUyeNUQ0S8bszHTZqzP5FYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOPdXyZYjw7Yz61atCrcA8Ua1h65xneD85erian7WZCrreTJUJoEshbU0QyFx6NvwR7MuUD7Bbk1nwijgQN4rWijBsMd6spZviBw3wDjXtXdi40LOrLoOY96YsncMfzukzjmqheX5GC83mhEGFcZzykVhzAdDDW9%2Fo%2FNmzp76Ds4y0XU0Y4HfZzH3%2FHWOUwLCcLjsx5FBoUvLW7bV80Cq8VPsHIbgqyHpI8S1dQeQZgDA4oYNFJ8wg8zgj7bVH%2FVHaKPuaf%2BL1eGArK01EFH2uB2%2FI6w0wQgJVT%2F28%2B06aaZ0FiV5HNHPZGTUMnZ0BEk6noD5xTDgh%2B7yKRFiGE0m%2Bx1iLfAHYA1MkKTp9iIKNxYZrjsg6Q6UP07Vpu6oZOi%2FWA6sJtrv0Vaemkwe5oVkBpc7kLe%2FBjIRlyRRpBK2n%2BNc8rNzyllmqdvySErhbSCPyn4NBOXA%2F4N1DR4PAUo7nwr1S87r5qvx276db7xOYSUg3n0ggPnvDNdviFKn2yG8KDiNy3tYD8kLKOdPfXJlO6QB74r6fbFd5JhArF20b7HUIfm7pJug3qjP8jShu7Eu0PRl8n7ODHqerrmOHuV9TyXreo13feyvuFCkQf7lKK39iF3QN7YDwiQtaJqOD13V047J%2BWdWgwT0DYCMICbkb0GOqUBbG4T6mswiYl8XelzHeRtk4ahhnZoXOYARKWh%2FlK03fthANby3BsUSqxIOTLmg2u%2F68dX9e8lOuMxfgtukYJOu9zcv13sr6heauhrYZIWxKCKF6PhPo1767%2FP9Dr2xZKjiR%2BkLFKEcmxFk33%2BoTkb3Qj6B26NRCxQPj71VolvMG1g7xFHxd1KIT%2Ff71FQri90bqZ%2Fq7zCFrVQBRGUA7fjhRX2EFCk&X-Amz-Signature=68063257e2be3e1e6ba7d0c515e9eb97e758018faf0021f11630692eacaa54f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YX45RG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCq7dSHigjDhr79Ki3D1OfLNylnPHhqgR6ChDfGfe1t6QIgLyGIxAjbPTvxvSD3NC%2B0%2FWUyeNUQ0S8bszHTZqzP5FYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOPdXyZYjw7Yz61atCrcA8Ua1h65xneD85erian7WZCrreTJUJoEshbU0QyFx6NvwR7MuUD7Bbk1nwijgQN4rWijBsMd6spZviBw3wDjXtXdi40LOrLoOY96YsncMfzukzjmqheX5GC83mhEGFcZzykVhzAdDDW9%2Fo%2FNmzp76Ds4y0XU0Y4HfZzH3%2FHWOUwLCcLjsx5FBoUvLW7bV80Cq8VPsHIbgqyHpI8S1dQeQZgDA4oYNFJ8wg8zgj7bVH%2FVHaKPuaf%2BL1eGArK01EFH2uB2%2FI6w0wQgJVT%2F28%2B06aaZ0FiV5HNHPZGTUMnZ0BEk6noD5xTDgh%2B7yKRFiGE0m%2Bx1iLfAHYA1MkKTp9iIKNxYZrjsg6Q6UP07Vpu6oZOi%2FWA6sJtrv0Vaemkwe5oVkBpc7kLe%2FBjIRlyRRpBK2n%2BNc8rNzyllmqdvySErhbSCPyn4NBOXA%2F4N1DR4PAUo7nwr1S87r5qvx276db7xOYSUg3n0ggPnvDNdviFKn2yG8KDiNy3tYD8kLKOdPfXJlO6QB74r6fbFd5JhArF20b7HUIfm7pJug3qjP8jShu7Eu0PRl8n7ODHqerrmOHuV9TyXreo13feyvuFCkQf7lKK39iF3QN7YDwiQtaJqOD13V047J%2BWdWgwT0DYCMICbkb0GOqUBbG4T6mswiYl8XelzHeRtk4ahhnZoXOYARKWh%2FlK03fthANby3BsUSqxIOTLmg2u%2F68dX9e8lOuMxfgtukYJOu9zcv13sr6heauhrYZIWxKCKF6PhPo1767%2FP9Dr2xZKjiR%2BkLFKEcmxFk33%2BoTkb3Qj6B26NRCxQPj71VolvMG1g7xFHxd1KIT%2Ff71FQri90bqZ%2Fq7zCFrVQBRGUA7fjhRX2EFCk&X-Amz-Signature=ba7dc2f3c6236216717d7bd9bcace3773d6c4dfea28cb34415e74dea6080f770&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJ3HM2G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICOPjVyN%2BFQkqoqlPNQfYfK%2BAXfz78q8QTZntO0eQkSwAiEAh9EdbAAmP94lfmgXlz0dKuRPmLFMo3RrF6MA2ZnUm0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDkOZ%2BIpcUG9d2R02ircA3R6z7S%2F1blryP8IbAzzqlciF0mrs0p8eKbRnxj1DxwAIgRGuxlZQZi2eJ1iPKD484fAU1We%2FXLftZ9sQKJ6i7lgIfPrtRCkxrVxHf5mlF5btUr721NIKpiUmW8ZlpeGGhF2PYWcyeTcda8%2BW9dQO%2F7TtINEE0Coxaukk8EqSIF8eQQcpM0R568%2FED%2Bbo1VH0oFUN7ReLEj4CV32VZkmhQEm1qumKedizb%2F8GsbnfoxlX8HsYhyRlzdXmITn1B%2FOyScQxqGcWk5%2FEvcJDE5Hct0geA8ulu7CmcFZab1Yi38iZBEj894fZeGYMx6ImBJUO1tnQR6yTlmo0acsBPIp%2Bl%2F22aXsc5IpJhU5mRE2DQf3rj0uI9wANaz5v35sS2jHVnedrkuvi5TadjpdCPDXhbMR0cPmhbQX2JfrTTIt5xbYMAylVCjv%2FOgDRKvrbnv6xeXtSyISqCYQnOdvSjTz5VCb%2FQvO0kIyMGRsZJGVMitwuZUrp0%2B3RmyXdD2Um%2FHlsc5dCjSSaoQebSRyqpN4rk0h2T1v6qAs5dqrdxodNXEE2hUIfQrV6C0XBjtwKNpfof8ZiKXl8WM7lv1mDBdFTbUvUyIxOP9qe7zLT2vUr4Oii%2BQMUcMgg4EnaCuaMP2akb0GOqUB5kw7%2FLTvYYQyhNG3pRV8VJH9aaLsWNRztLZ2%2B26Mpl3BbrWQ00xJb4KfZ8%2FX%2FTPAk2A3DX2xabS3pRI6tzrlY5JYOZI3uFbuqGgre1GO0o6IjQqqw%2Bj6BcCXREMdZJ0aQ2Zu4O6Tf%2F52gsShPdPkE0F3YdGdGnbp%2BYGgGuy7vGIKQexBebvKMqacnfbG2rmMwlJ5DRDuGXmUUpNPljXhQGHQutbs&X-Amz-Signature=25f0bd404862f3c534acd2f21e728f1ebef75d1b903f077d10f3f1e38db7fa94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBDQZX3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGisfBiMLfBTOtVcGbu79AwXYd5pY13ZZF2wckqLBCMtAiBT6h4rMSMe0xYPAtLUFNuONKMsqA8VaVWpn7%2FuvrK%2FdSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMAEUA1Ye%2FEhfvmMeZKtwDxfNvyx6qzrQ6GrvMp3rvRBtYXQ89%2BHqBnaobllH4OFoyWBufpkbyQWCenNs4GNHpEgr2IIJTBjAwQk6X78mmHY0xQe0io%2FkN9E2RQxL3hitvL2Rf4uYSg1ZUqDWwM%2FrvWMePuAz87%2BEVjTdVq4c1ST0LQweYIfUy7i3tkZqt4acbNTmlmKaiWuW9vXYF%2BohmLoGs9vwYVcmEWaoPxAV0RWb3TCWtR4knOgx7SxUxD2rEeV8I6WT%2FsXd0kOmfpgTq3rzsDN3P0Luo4McgNtQuMm%2FjPrOr5tj4CMDepUJPNbCjGyLrkqeWyeI76aAxlPJO5a%2BPm9xoo0Dq7sEyhMY%2BJjeDpzc21IItKFW5nr%2Bt9YjqumViztgC8n%2Bgg%2BzIaDC%2ByVOjNOl9lThWt2uvKvll54wf%2FQpDFOxDZPVH6nFSJ0%2FSEH4yAFPbA4zGVCcvQBalva9ZaSB8eX3qMf%2FAJymXUM6pT4Tlntkf7KEdESCcl2I%2BFY7aoIC%2BzjT%2BTlvYpU8HHvYcYdYdMaWJAPQviDYwWenzp8%2FmRhAwsZkEaRrDS6ZglKg5pa8BAIYhGz5FI%2FMBNEq7OYWPhkMOIqHBAT1pfeyreGhhe3mA9RdQEQSv08EYBEgC9XPb51jmoLwwn5uRvQY6pgF9ZBZ%2BEr8Ot5K6ygXHzzapYtxsyC0l8g3O8IFjJfGAEj49ilxrtc8kkV2pVVnxdqKhAGKds8I8ROVxkMimiXqxkXibBLJxg%2B8dUeEn7nF5BMj%2BFPJtldFvWwVoFpH553DoyLPzE1ucBNMl6AjDx6XY9BVryHwHM%2BlhI7gYFCY0LL9TPFbPci3AddzX2TrN%2FEuootXlb4jfddfSXcJectOTMYFGuXrL&X-Amz-Signature=5bcf45c1c7986f879f691dc9bb39b29ad96ee8f29b95dc0e2b328cec735be109&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YX45RG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCq7dSHigjDhr79Ki3D1OfLNylnPHhqgR6ChDfGfe1t6QIgLyGIxAjbPTvxvSD3NC%2B0%2FWUyeNUQ0S8bszHTZqzP5FYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOPdXyZYjw7Yz61atCrcA8Ua1h65xneD85erian7WZCrreTJUJoEshbU0QyFx6NvwR7MuUD7Bbk1nwijgQN4rWijBsMd6spZviBw3wDjXtXdi40LOrLoOY96YsncMfzukzjmqheX5GC83mhEGFcZzykVhzAdDDW9%2Fo%2FNmzp76Ds4y0XU0Y4HfZzH3%2FHWOUwLCcLjsx5FBoUvLW7bV80Cq8VPsHIbgqyHpI8S1dQeQZgDA4oYNFJ8wg8zgj7bVH%2FVHaKPuaf%2BL1eGArK01EFH2uB2%2FI6w0wQgJVT%2F28%2B06aaZ0FiV5HNHPZGTUMnZ0BEk6noD5xTDgh%2B7yKRFiGE0m%2Bx1iLfAHYA1MkKTp9iIKNxYZrjsg6Q6UP07Vpu6oZOi%2FWA6sJtrv0Vaemkwe5oVkBpc7kLe%2FBjIRlyRRpBK2n%2BNc8rNzyllmqdvySErhbSCPyn4NBOXA%2F4N1DR4PAUo7nwr1S87r5qvx276db7xOYSUg3n0ggPnvDNdviFKn2yG8KDiNy3tYD8kLKOdPfXJlO6QB74r6fbFd5JhArF20b7HUIfm7pJug3qjP8jShu7Eu0PRl8n7ODHqerrmOHuV9TyXreo13feyvuFCkQf7lKK39iF3QN7YDwiQtaJqOD13V047J%2BWdWgwT0DYCMICbkb0GOqUBbG4T6mswiYl8XelzHeRtk4ahhnZoXOYARKWh%2FlK03fthANby3BsUSqxIOTLmg2u%2F68dX9e8lOuMxfgtukYJOu9zcv13sr6heauhrYZIWxKCKF6PhPo1767%2FP9Dr2xZKjiR%2BkLFKEcmxFk33%2BoTkb3Qj6B26NRCxQPj71VolvMG1g7xFHxd1KIT%2Ff71FQri90bqZ%2Fq7zCFrVQBRGUA7fjhRX2EFCk&X-Amz-Signature=92aa11dcad6e390c54b696021934f3397811b1079d093564652936a306c55c23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
