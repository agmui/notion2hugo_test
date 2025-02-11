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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=5cf9f96abef93a60db60ce55445d600caa3e55ba52cb210ec37b2dc6e6b45b35&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=685989541f519a81495b0dd0897db8c698f2c84d67b22554330fd3e93b03ac49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6CKVIF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F4QNkzvW44W%2BQkfLvIzFIDmlDixT7ghos5ndYDc2qqwIhAKoZNUgGcbGZyeKwnuEq1oH5v%2BW3eNe7cXI2Sqi37XjXKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbt6BMDIZkCKCj9ogq3AMt7KfClW7SwtG%2Fo7fuCFA00zKAfJi1XzUSDtzOVT%2BJtRYmYDywTYb8jxza6C6inCtmVnVEWyOi9doYmzAJSn9eLf7L9A1UUwYGpnfTXGORzPmCsuXqtNqRhm65SLSs2hep%2FWarDR%2FPTcPXtw8VQTn%2BQKN%2FKK%2Foa8rpwyhjQNKwiTKXqB3c4pUc31Kyqn7kD0bz9JBbJgcx8jToqJzFLhQgqWnzdFAuKc9nJn4TJCeinwEMGqegTdq%2BrmlfZ7sBakQ8E4nrnUbNGL2w%2FU2flTUJLcBeSjCFz1KopZmEHNN94YVIA5FBbDrR7pG6Csb5O2uZk1Ircde0yfNivJVeCTq4PtOen4Pwj1z%2F8B9xQJJGuQm%2Fiq6%2BKzrewXqkxd7sKIChhSxWQTUVMriXwzPXIVgc%2FeEMbZ7V8h8GCCVTTcRN%2BLI9GH18IRmVnXyxMDRlNRb9tE%2BlmUVHi6tgxjDSsSOjZOGfPc2rXcBEeJVCccvwejm3V2gN%2FpoWFwxx5%2BC%2BUOx%2FtA7M%2FGrfnJuST%2FqrmHgWVxC15p%2FgtJU1WtW%2FkEVCjGEhO2XpP%2FS%2Fb9T7b77BpoiWfXwrxHbiKleCXX%2FJZTyiuWz%2FHqB0HGj%2BeNvmrrMuX1%2BbOhLOyBTRduYW5jCBuKy9BjqkAfWAo2ZnFq01DwBTVFSuW2oo0YF31pGWOZFsPNiYdexGTIZZCLc3xlB%2FiBKQH17PVYoOIRNJnEXVqI5%2FaKKeHqkrCL3OFAEn7McFb1Bk9ZwP5QrD0qrygBMrysfkvLNtLNFcoOZOEzvebpaQ9CcqjT6sWioPlbTymQut6tCkKzdDz4TI3H2u3z2ZGqyBs6rAa%2FB3cshoayj4Kj8N%2FEAAjLBOuHyX&X-Amz-Signature=4a33192ad9818f36c142e74c40e23c60452227cfed6ae67f228adf7152302759&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHKLJL4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpACobAqUIQSTVWFl22JbzxKm6UrIaQJfZprw3IWhhsAIgWLOrHReGpw6h2pouYWypO4qRQQ01jV%2BYJJqRlRtDONIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuwc1EGk76pAfcdwSrcAy%2F%2BXv7LO7ZlE39d8s2SzEzqoFzJNHM%2B4WBFZoVC4IVjp1a7QL%2BTuzAehsR1KStOAolj8spB3Q3sxGS52CIM5vETSqQwzW6asu2ftktpIZNIS%2Bqd8u4WJJQFXr9jBjque8xkN5TYQo2YVp%2F4mX3gmXayX7JmOV0RngxhYPoTlZiegF9id2RkiqTel5Ab7H%2Fjx0fQmmNZH2Vg7x%2B3h8IswlEQbOdMgO3a3EZyhP3poRqtBTaTP5edV5PovNnp%2FIbC01M6C%2FC61noyPtbYDcz659akIW5V8DFtr81uB29bnAErJv4mkFMPzDg6OlejLNS185mXh3%2BYXrV0bCpwldgJlvKTidJqKLKJGrXzLONUdiIumSV5oQj%2FEmiEIKZ8JD17EYdWFw0MlvCR6Kt4fUtcwlqZcsq2AZWarC8wuVvKjVAD%2BjgQ3KpB1Jut017XTwDhQhELSbtknwwBwQsVgDcI2M%2Bu8IAptRy58WaRUqJe98XNQzBXvWKMSCuDpba2%2FipZd9orS4xW5xDVD%2FX3HkpAXsSR%2Fk7RCSM1CHWaD7qMD%2FPzX0onQpl0nsvH3Nf5k0D39I4Zn8sFSmvwviO0urHWIz2Ks2t2wzjFepJ%2BfrZa7Pt8xBuwATlvgqJzK5gmMOa3rL0GOqUBsdrbupaaToFBhU7CJQkyxlsJe8xxiFfb14j5eg537MGd33l66mNcVo7cBdHRU2Fee%2Bau%2FrI4prgN%2BVgD5WrBcQC3vsnEMFWW5reK5HAGdsL4Jj3JSdkMET66VU2TOOOWLIHuWDYN17Q2Lmb9Nbawa9OLbPI81Y7LPWiKB%2Bz6kERfvaC%2BsiydUgQfM5b%2BPpoVhYcRk7CJhxnJt3hEI5njSh5Gk9fQ&X-Amz-Signature=4d2eada235a46328c412f9ae8f38b86cdaad80e311ca8f195d4b883d6407e916&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=1ac3172e61685516839ba087568e267b4849599ddd999366ed9a76c59184b1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
