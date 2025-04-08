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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5KR3LT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCXnAxptMGudM7K12bRTHxlc4gb9pLa3D%2BMW3Y%2F4DRPFgIgVEUjyDRuLgMC28c6LVLjZD9yga94vRB6FdNVG%2BXUhVQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKcDx5bs7zm9Ej3NkCrcA4DZBFInwMqKA26YeknKWYP5nt4c1n917SSkTxsrP0KQZT9vFGAX7%2Bk5tRZcXLIygp3et04jERfsOHPEgsoxMcn9SFWeDJ4svpRUByNNboJhqkUdsatV8q%2BiodXC64ch1RojdaS23z55zEXSVLrDaw5xhamdGfcMVT4P9MHIDjTr9BmnsPXDCQTfS5HKD4EnTGAgcdOdfMh5P9Nw5QERfrq41PKu1XcJHujPz6wdjiHxVPQTbK7HZ2mgSuVES8gjlXV0cKFkMTvoOhHvDHRSBfmxafT6aTTJJRB4cEvOp%2FOA4B3KunuQ6yp%2FJhW%2BQPOJDH0g0h4T24oLza8yBa8eBKP%2F8UJqRimVrzptV9XWLDK3sPLDkwaLgsqypd5UEIzVeCqc30F9V%2FEVhLGMIaMqj3xoxUkGmXmyDZD9rvTTSilYRFd7nfJRTyMqpFXF0WJ0yHgPAYSACWKXTaNjhp2jldBf%2Bf%2BSBuXwK0zQStLqgqa97bzxT3BS3GIHeUIFpZ%2BTW%2FjuhE7VubwJl5l17R9610U7xo8KXefjtKrziNNfjfQ6ta1%2BygZngtgt5baME8c97G7%2F2ThKxspL%2Br4%2FXCkI3zJVXRPftJMvoTwq%2FuAncWbE%2F4hqn%2FBtjKAxSARlMMmq1r8GOqUBPfikM8Bpm%2BiG9ok3DiFAeEUfWrJOhKIEonvfA1nbz%2F6QZpdUX7Wcgv4FUCdkcADHtaZea9WfZg0Q706pPKnbqzEcFGl2GHcPT5vVQ92oH73sMXv9yX2i55kI5jRJKY%2F7Vs8eMumQ6IhOzl4YkBNJrChdvNbC7f71V%2F98kTdjdocQhydwXYk0OihjmJP9AeaMxDHIqCjMpz0nFDAq5XRHFUWWedve&X-Amz-Signature=0e6d20ec216669e76fc71e90de641f80bef469a74e753c535e81db9d24ac033e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5KR3LT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCXnAxptMGudM7K12bRTHxlc4gb9pLa3D%2BMW3Y%2F4DRPFgIgVEUjyDRuLgMC28c6LVLjZD9yga94vRB6FdNVG%2BXUhVQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKcDx5bs7zm9Ej3NkCrcA4DZBFInwMqKA26YeknKWYP5nt4c1n917SSkTxsrP0KQZT9vFGAX7%2Bk5tRZcXLIygp3et04jERfsOHPEgsoxMcn9SFWeDJ4svpRUByNNboJhqkUdsatV8q%2BiodXC64ch1RojdaS23z55zEXSVLrDaw5xhamdGfcMVT4P9MHIDjTr9BmnsPXDCQTfS5HKD4EnTGAgcdOdfMh5P9Nw5QERfrq41PKu1XcJHujPz6wdjiHxVPQTbK7HZ2mgSuVES8gjlXV0cKFkMTvoOhHvDHRSBfmxafT6aTTJJRB4cEvOp%2FOA4B3KunuQ6yp%2FJhW%2BQPOJDH0g0h4T24oLza8yBa8eBKP%2F8UJqRimVrzptV9XWLDK3sPLDkwaLgsqypd5UEIzVeCqc30F9V%2FEVhLGMIaMqj3xoxUkGmXmyDZD9rvTTSilYRFd7nfJRTyMqpFXF0WJ0yHgPAYSACWKXTaNjhp2jldBf%2Bf%2BSBuXwK0zQStLqgqa97bzxT3BS3GIHeUIFpZ%2BTW%2FjuhE7VubwJl5l17R9610U7xo8KXefjtKrziNNfjfQ6ta1%2BygZngtgt5baME8c97G7%2F2ThKxspL%2Br4%2FXCkI3zJVXRPftJMvoTwq%2FuAncWbE%2F4hqn%2FBtjKAxSARlMMmq1r8GOqUBPfikM8Bpm%2BiG9ok3DiFAeEUfWrJOhKIEonvfA1nbz%2F6QZpdUX7Wcgv4FUCdkcADHtaZea9WfZg0Q706pPKnbqzEcFGl2GHcPT5vVQ92oH73sMXv9yX2i55kI5jRJKY%2F7Vs8eMumQ6IhOzl4YkBNJrChdvNbC7f71V%2F98kTdjdocQhydwXYk0OihjmJP9AeaMxDHIqCjMpz0nFDAq5XRHFUWWedve&X-Amz-Signature=c4e6c5e3eca5eb26292a3935c3b136e120ce5116a0ca6452e424501f884f4bee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZOODXN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQClt2lIRcF3n2RMs2QpWv2EuZ%2BjyTGG12Wncvuh%2F7kIrQIhANWRtec5E1W5VPxsVtgnkkciPPl0DYRkhvmMjTPpUCY2Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxuOOGGOhlfb%2FUnXJoq3AOw9j1wFhuEhFDYJGS0kgAlK5Ef0OmOVbN7DqLEAhSO%2BlBLBRf%2FQUc%2FR0p6QGxYduspo0HHEBupODp3ysNQjTb%2B8Jbu69vjpzfKKyMlQEWPUi%2B4HdICApF0YpkXHedAI5bZ7E7WaYI6ydqa34jRxK7T7x19lOQ96oxb27jm4urOGZmEa0HdMdNA8iQMJk%2F18HcS402ynmXjLSib86ed4fPTUeSNkHJgU0ZKOOY60UhPkttVyGaePy3pFbZpOgwatDieCQTU%2B6c6OEcmmZdtGjHTAzv236C2fNbsnp21j0oxHOdEZ2haBYWdRpwGpC79fXsNE6x9UqJue4QVslLnA2lSkQt4t7mrwn%2BwgYKYLfVD%2BPxo5U2u%2FQlPhTuF%2B3lNc3GlRNF9Uo5SyKUpaL%2BkdZyaepIwFIbbWxQCxCJyLePMiNF7vfksyply%2BNLY3TZkWc2R02PEGlPulg98a2FBwl3ACY1eOHkHCkWx640UprBfsyMpRt291%2Fmf5G1UV8QJItLf9uN9dhRDQ4HDauapu4pM1gKQD0bbC93R8xNYRA57%2BGj0J9nfTkkwEK3z1hiYCznHqjpcZH1SoSCE%2FEYDVcrN46nueXQRVfhq62k5Im%2Bo34DWz5rhX97%2BDYTcsDCCqta%2FBjqkATOpaz2mugtdYwc3WnV3g5YgJyzodpQ3MCE6py4UE5nx6WL%2BqaveAPSG0%2FjESqUSR3F97QwYRLihafEfXsdmJlZ%2FIeo2qEvTiSem4UwCr2BDh6cnUk%2B0%2F9%2BEdlnVfds%2BIyhBLT0%2FuEn2QFdlRVOIl3EUnYGN10%2FOB2QuFg%2Bh%2BgNxJMl6yrXvWvyQpiMDEj12bheywGWIC1m7WR2jkVu2G8rHwDHw&X-Amz-Signature=a18f7ae7fb4b374aa641e60bae29017175fd20a0ee39402fc16bc59fe8bf8963&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGBTXFC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC98KpdfE7dmfrqRGMvLdtNVBqDuPlnU1WgjvJhEKdkaQIhANWtx51S5MCBwsLNhm0M5lJxZmqEnQv9k5Rlr3f4WFq0Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxADL0SHhbko7mi%2FTcq3AP6A8h%2BfIWhCRlKhO2vPcZUz8VMon1iOlnitUUXhwmltUSJRynvHgrbp%2FQ9AKw7O1atWsi8eX7mv30qiwzLQR3fLjb6ruyGvusLenI335cUM57XOgToPfOMLZ3V0QxRnxk93eYczzDNFzIWrMHI0%2FSi%2F0L1Uo%2BW2hQyv4G2nP9ywZjIZeuK3YadFcv%2F7OjZxtBiitud93YdzbE7rV6YhXlDdcq4xZk5ZWQ%2Fp1JyO1r9NC7cLJmcRKIrruOKLpwywLiVO5FIa7KLwBR%2B28BBhiNWA%2FyFhNnBA%2BiUyAJ%2BKVHHkWMQOVaTVuwxQuTVBelC9P6BCd5Hu9Pp%2BoPr2ab7yksv6jyX%2BmRPu9cFjiy0o%2BGMkCgckloVwtFWdfGdu3%2FxSbC%2FB7NJbqaQj3eYQaK7phdl1bProw%2Bl9L7bzxer0ElPqM1vUONbt6D2m9aJRQ8d4HGnIljF65kypkVKZoFu6YrgA%2BgtcHEQHZO80yK3wlp49MKrzojYzJO44vc1%2Fh6VE8alIBPDCsFle1TnzXFt1bBEX3oc8c4FC46k0tLiJH1nyZRexxTgU1qAIOYiCSbuT9M%2BxWzSxt4L3FLcWgOQw%2FuCv8yz28GoeZjitWtyGBYPi71cRsk5CLeNe1WHkzDRqta%2FBjqkAT3Wy6WtVk%2F1Qp5bpTFawaGE%2B2edln6PYt1ypUEi%2BbWWcrxdq0MDsxiMBHnBlnqEXvLXR4J4kY6936RRKjEbJdjNbgZ4E%2BBrDJEadi8mJzYrF99kMy61KLBmZYmg78kaiqJBZbwj%2B9PRNwugC66MEBCHzPdKYs97QXiBtLzO7I%2BB8%2B6BJw1FMRMp%2BpWp1pc5BBu2AOXpVR%2FcAMiGrGDANbeaoTIG&X-Amz-Signature=9b1b39879948f382d2be8a8a7ac8bfbbcbfc9d604f195bd18b738b60f641824c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5KR3LT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCXnAxptMGudM7K12bRTHxlc4gb9pLa3D%2BMW3Y%2F4DRPFgIgVEUjyDRuLgMC28c6LVLjZD9yga94vRB6FdNVG%2BXUhVQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKcDx5bs7zm9Ej3NkCrcA4DZBFInwMqKA26YeknKWYP5nt4c1n917SSkTxsrP0KQZT9vFGAX7%2Bk5tRZcXLIygp3et04jERfsOHPEgsoxMcn9SFWeDJ4svpRUByNNboJhqkUdsatV8q%2BiodXC64ch1RojdaS23z55zEXSVLrDaw5xhamdGfcMVT4P9MHIDjTr9BmnsPXDCQTfS5HKD4EnTGAgcdOdfMh5P9Nw5QERfrq41PKu1XcJHujPz6wdjiHxVPQTbK7HZ2mgSuVES8gjlXV0cKFkMTvoOhHvDHRSBfmxafT6aTTJJRB4cEvOp%2FOA4B3KunuQ6yp%2FJhW%2BQPOJDH0g0h4T24oLza8yBa8eBKP%2F8UJqRimVrzptV9XWLDK3sPLDkwaLgsqypd5UEIzVeCqc30F9V%2FEVhLGMIaMqj3xoxUkGmXmyDZD9rvTTSilYRFd7nfJRTyMqpFXF0WJ0yHgPAYSACWKXTaNjhp2jldBf%2Bf%2BSBuXwK0zQStLqgqa97bzxT3BS3GIHeUIFpZ%2BTW%2FjuhE7VubwJl5l17R9610U7xo8KXefjtKrziNNfjfQ6ta1%2BygZngtgt5baME8c97G7%2F2ThKxspL%2Br4%2FXCkI3zJVXRPftJMvoTwq%2FuAncWbE%2F4hqn%2FBtjKAxSARlMMmq1r8GOqUBPfikM8Bpm%2BiG9ok3DiFAeEUfWrJOhKIEonvfA1nbz%2F6QZpdUX7Wcgv4FUCdkcADHtaZea9WfZg0Q706pPKnbqzEcFGl2GHcPT5vVQ92oH73sMXv9yX2i55kI5jRJKY%2F7Vs8eMumQ6IhOzl4YkBNJrChdvNbC7f71V%2F98kTdjdocQhydwXYk0OihjmJP9AeaMxDHIqCjMpz0nFDAq5XRHFUWWedve&X-Amz-Signature=882c7d374b72fd4bd7e43cf1cb15253d4b711d9a82f894811799029ad136080b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
