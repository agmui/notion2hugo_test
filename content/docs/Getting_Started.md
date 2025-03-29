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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5NG2HB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGsQOWLUx5xj8zVc%2FnIXLppSs%2FEGR6rwPpqWwGZVEOYxAiEAozoKH7hoLvI%2Bx3PWfAVEZb7%2B8qFswm6HcJwqOy3Lqi0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAT33ZZmXDl871NooircA%2F5oE3cDGvQ8rN%2FpZEs6ODdmffmkO7cvMzq7xKr5o1yWWSY103u9p6mXBla1xfgIF3bbVUldF5h%2FA1RRi0MOUHfbv3XDGGb2GqOrMF68DLEhQd3wj7t9WTzIiaO2RVoInE2UQZp4vcoWBCIFLQ9SOCukPaMQ1JPJTpnxjRBdOzJB88Yfi4s1LLkw66Djr6mNQJN9HO357wRqRLvlq7xKzl7KxpkwSbKBHFJbqKg79LO0iy%2BmzeB91XhaWBUXEkgSohDK7vdNdtNLr5GZZDDKM%2BtO2syOF%2BGFok7v679Wj08sRXxneY1jPa%2FBFoYijjUPD83VjgCkOnoDyt%2FiJAOUgcU3WkzzVLf%2BA%2FcWpz26aKKXjNmwZ6vF9Vdav8rmZSTDhDQPW3ul9MwncCA9JlEMdZzhXLsR22D3CT6fITinK1apxjwUkiDFBLgQbcFscN0lV8AtOmpT%2FXAAeIUqaSd%2FmzKlMQLxVDF0k%2FkFWYWIMG5NusPsM%2F9FR6JwhAHTQaAQIhuQXX7wwF9XSp9EjBKDujUHYwuMpI4joxR6O4a34gG%2FtjenIBUVDHExa4%2FI8T8gG0YKfON9QJTmhqrlmMNA0kEfzsR7g3oE8k7r6lW9AoBzNYRh6k5XmTT1w%2FEAMJfFnr8GOqUBrFvfa6OCVVHynxSEc4Y6TEP3klghFCMonvFVMFQcS2033eoro85HeSzl7l1b15C1W6H%2F0V2Y7lT3IYQzhJP2%2Fv5M2t%2FXbj1pIBLvOB%2BjNUdgu%2BcnWXZx%2FM2JdaWr07BDN0HJKNmfsprbW46FVNjYS%2BRXrca5GnpzVjZI%2BGNxf3X0JcsZGA86am6eIscX%2FQfDGWGSNR%2FK50pInOUDatYxzjoviGhx&X-Amz-Signature=527a227c7a4354c41dbc67149a1856827bdc77c4c4c73da9d188f3639cdb1e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5NG2HB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGsQOWLUx5xj8zVc%2FnIXLppSs%2FEGR6rwPpqWwGZVEOYxAiEAozoKH7hoLvI%2Bx3PWfAVEZb7%2B8qFswm6HcJwqOy3Lqi0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAT33ZZmXDl871NooircA%2F5oE3cDGvQ8rN%2FpZEs6ODdmffmkO7cvMzq7xKr5o1yWWSY103u9p6mXBla1xfgIF3bbVUldF5h%2FA1RRi0MOUHfbv3XDGGb2GqOrMF68DLEhQd3wj7t9WTzIiaO2RVoInE2UQZp4vcoWBCIFLQ9SOCukPaMQ1JPJTpnxjRBdOzJB88Yfi4s1LLkw66Djr6mNQJN9HO357wRqRLvlq7xKzl7KxpkwSbKBHFJbqKg79LO0iy%2BmzeB91XhaWBUXEkgSohDK7vdNdtNLr5GZZDDKM%2BtO2syOF%2BGFok7v679Wj08sRXxneY1jPa%2FBFoYijjUPD83VjgCkOnoDyt%2FiJAOUgcU3WkzzVLf%2BA%2FcWpz26aKKXjNmwZ6vF9Vdav8rmZSTDhDQPW3ul9MwncCA9JlEMdZzhXLsR22D3CT6fITinK1apxjwUkiDFBLgQbcFscN0lV8AtOmpT%2FXAAeIUqaSd%2FmzKlMQLxVDF0k%2FkFWYWIMG5NusPsM%2F9FR6JwhAHTQaAQIhuQXX7wwF9XSp9EjBKDujUHYwuMpI4joxR6O4a34gG%2FtjenIBUVDHExa4%2FI8T8gG0YKfON9QJTmhqrlmMNA0kEfzsR7g3oE8k7r6lW9AoBzNYRh6k5XmTT1w%2FEAMJfFnr8GOqUBrFvfa6OCVVHynxSEc4Y6TEP3klghFCMonvFVMFQcS2033eoro85HeSzl7l1b15C1W6H%2F0V2Y7lT3IYQzhJP2%2Fv5M2t%2FXbj1pIBLvOB%2BjNUdgu%2BcnWXZx%2FM2JdaWr07BDN0HJKNmfsprbW46FVNjYS%2BRXrca5GnpzVjZI%2BGNxf3X0JcsZGA86am6eIscX%2FQfDGWGSNR%2FK50pInOUDatYxzjoviGhx&X-Amz-Signature=b17c83329b6bc06f704f852733b94a634544516c54351df65e21760b061ba3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTNMZTL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCID4DjEbmBRObv6d7x6IfnoZ2FHBO98iu3N6IhMVLAcnvAiEApImEcUDqhUmIoB1fpTTeN0qdtYMFVx%2F7CuO2D5zHJcUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFGQkEYtu7xPRcpcsCrcA882xBtJrNTCwsUFGcJca876%2BSFNI4zGNH3sRck32VZXujACuFgysWCn6wHXxUN%2B%2Bfhs2Wca6dOmtA%2FSf5kzKy7tUfxCESHuiJC%2FC6WETZN1PewFcHz5e4flMl2c104vcvLG7PVpfTOwMdHe0Y6JzeX%2B3E9cnHiSAvchEVTA%2FQVyH5ZMldUYnRs37R%2BedAP2NRxpUkdqHyzOCF%2FV0ZqPdCYNXShi8EVQnR%2BnTcnnPxMxL0jdDZ69JMSlsd7IeV2tGAO7pQvebJ1NE7lINJ3WtS95G0s%2B4IyWoN0P%2Fo4n7VIMs2kdgcixwYOBM3MJIxnf6HyRZLkJjJQojdzwyNQVA7DEOvGLcw%2B9A2k%2BmW5DanGyCSXvF%2BdxSatL4t%2BvZsaaaos%2FxWD0R810EiN2zmqC8wjkwwZzUbCrxQGfTc1pP%2FIBi8MdxBbne5%2F%2BKkEgPqKOfM2D6k13tixqYUr1r%2BN0xYbcEN8N1zfxDmdK5gJ8MmULqHdpKnRhkZxX7p8j%2BoA9GfQZeOPGnLltGBmbeR7O0tjioNBEZTo6f6b3W0xT9QkFDmrakW0ZANIe27liwZXYPRedB8FJwneRnRhYYfjvu%2Fv6sZiskptk%2B%2FEYyHoIu0p5w%2FM3%2BSEQJnobIw1UMKnFnr8GOqUBQJMhKyzix33g5BBxx2%2Bmr540FNfIgJkxfPsz5Ewp2Ywk2rMm9649FJ5MmMHfd3VuERK6w0hp6cj8bxF%2FhyYax0FEYYzgOTstclcng8ui7zchGNMn2Lp0ux%2B4ePgaPYVlOHNVthOv1h7LcbMeSnld5I2L3A8IK4LQ%2BVoPOpZxhOHMtqu9mta1yKafRVo0elCQy%2Bayq60e90Tp3RKkQGqDholCjfAc&X-Amz-Signature=26721b39eacc4648b225ef72476c4b70dc46060db3ea0caa950615cced8271e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLXUIL2J%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCxECx7PBhbykIbQZmRR1Y017eY4%2F7Cn2sCcVNSBrc0OQIgT60Z5wRZg%2FAuvOEaVeTtwHRNlowOGjvPHFpo3Jo%2B34Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKZUaMwSPU9SYw1riCrcA1obcRx9CPD3Vf%2FdDQcQaDbADehTIMVAtGTlry9nHGBXEYISVwFWYGNprVWuZl7B3PYtbiANnLciS7zg7zNXsSnaYeTd9tAphagtoKIetnuyXeaqz1fGk0IZR5jvEnCY4S%2FHhTSbH54o3RO7%2BziT8yopBs9nGnJC9m1y52kMnec8j80y7yDKfOk44ViCTbQ5BpGGESsQr6LKu1zQ6HqVau%2Fe8Ag1fRl8r1IR5udNsoSIyOH3eqVlRUd7jQUY%2Bdf36Yd9QatNjCgkjF9MppoCGboEw%2FNqEYgmMdRfGCQNdrlM5qHp3uxYHjR6pQ6VgMCicqK6MXa0qFwhJi%2FPxjzL%2FWldw0lNaey1exYs4O5eUnnAu51tk%2Bg0ermSSo2xBSKrvaGDIBvmVWNQOH9YJiozBHA8FNJeSE40JPfLS%2BBMEd9OH540FFLYjPtcuKNvQSF%2BKI%2Faghf6xgpYwLBU%2B0ISBx2AYzIM%2BwYqsVMjXcKopb1cnlxw7YwZKo0sz3mOqEmUY2E6Vh9NXLfqWXZApeobiBxdClkulfVf%2BptyWRydoLMTQoVwQ3Li%2BAP6rYh66wpY1AaJPEDlzsjmXWmklJPb0TRmQFHPqUdN7W6gomkFY0xJSk3wVP8J0Xg%2FqX7qMJnFnr8GOqUBzlyWjPKTYmaeW1bIvhC5pi55XGbJLTGvokpkGhS16k4eSW%2BGEKvQmqJ6gT15pGdKn6F%2FWEETEhT0aBipXKyhT8gTgoeAUdgCiUFB7HRS6rZeJzIz%2F81nfzPwiYr11gsxVc5bYneDiXWWw7PZDqqhilGKF6ZjNVjdS59Aq10KfEfeX%2Frzy6XOPVi%2FKrHLvQzh9xh5%2B9M0o7%2BtgtzTgYTO9n7wub37&X-Amz-Signature=9332e72064d65d052e9b159ddfbd556820ea5d7086fbdcf0d845e043c2621572&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5NG2HB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGsQOWLUx5xj8zVc%2FnIXLppSs%2FEGR6rwPpqWwGZVEOYxAiEAozoKH7hoLvI%2Bx3PWfAVEZb7%2B8qFswm6HcJwqOy3Lqi0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAT33ZZmXDl871NooircA%2F5oE3cDGvQ8rN%2FpZEs6ODdmffmkO7cvMzq7xKr5o1yWWSY103u9p6mXBla1xfgIF3bbVUldF5h%2FA1RRi0MOUHfbv3XDGGb2GqOrMF68DLEhQd3wj7t9WTzIiaO2RVoInE2UQZp4vcoWBCIFLQ9SOCukPaMQ1JPJTpnxjRBdOzJB88Yfi4s1LLkw66Djr6mNQJN9HO357wRqRLvlq7xKzl7KxpkwSbKBHFJbqKg79LO0iy%2BmzeB91XhaWBUXEkgSohDK7vdNdtNLr5GZZDDKM%2BtO2syOF%2BGFok7v679Wj08sRXxneY1jPa%2FBFoYijjUPD83VjgCkOnoDyt%2FiJAOUgcU3WkzzVLf%2BA%2FcWpz26aKKXjNmwZ6vF9Vdav8rmZSTDhDQPW3ul9MwncCA9JlEMdZzhXLsR22D3CT6fITinK1apxjwUkiDFBLgQbcFscN0lV8AtOmpT%2FXAAeIUqaSd%2FmzKlMQLxVDF0k%2FkFWYWIMG5NusPsM%2F9FR6JwhAHTQaAQIhuQXX7wwF9XSp9EjBKDujUHYwuMpI4joxR6O4a34gG%2FtjenIBUVDHExa4%2FI8T8gG0YKfON9QJTmhqrlmMNA0kEfzsR7g3oE8k7r6lW9AoBzNYRh6k5XmTT1w%2FEAMJfFnr8GOqUBrFvfa6OCVVHynxSEc4Y6TEP3klghFCMonvFVMFQcS2033eoro85HeSzl7l1b15C1W6H%2F0V2Y7lT3IYQzhJP2%2Fv5M2t%2FXbj1pIBLvOB%2BjNUdgu%2BcnWXZx%2FM2JdaWr07BDN0HJKNmfsprbW46FVNjYS%2BRXrca5GnpzVjZI%2BGNxf3X0JcsZGA86am6eIscX%2FQfDGWGSNR%2FK50pInOUDatYxzjoviGhx&X-Amz-Signature=f7cccca2c3d69fe653b83717ed83becb367f1138b72f0dbe0fce75aa3a028ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
