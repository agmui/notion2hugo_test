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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL6XFNO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG4gjK69H0oifmEZycs19YxG%2BhiIKnSBWOkH56lM214eAiBFzMwoqfkimmmH7NjGK00dOvcvxA7iSVoc5uX0q%2BtctCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK86fA27XAwFMlUhKtwDfvKE99XfKF2fLniVBugItzQdXkvFpAYQl71lZ%2FwAbG5P6GpCFa9X8JMFa7tq3d07HzymJ0%2Btjk%2FgsLWl6gjzI9pmQ%2FbEbr3S22pSfTzosp0H4v5RPM8EnByqQFJ1jIPTbdHft5y1LRpOftmBT5ExgW7lf9bnNm%2BeW7er83TIvglUcxWS3lanYsHE90yq65BwnJlGbnnYdXfcpk5DHYhPovL8p5CHnH%2B5qYuSWi7PhHWrElu9j%2F7BVT8mwfF2FtCItuCUU0jHK9ey6XEa0tJ5sM3Bih0OrAJuysSp79mDWmjlqFrWXODllZeSczs%2Brk5cbgbS2E1bfvt7uAPtyDPbFMsQ9Il7s9Ti%2FUNTU9REpyW5Zpf0P6Z9OgeP54%2Fe5vtOdt3qZcny79LIMz0NZfG%2FIUS5yb7mHa1lNtk6UY7TNJDKxP59ihp%2F8u9UZkPAy7zCV3mWPSfMqmwWbzPmdNoeVZDU321lxRj5cUE%2FUpDkBov2hy7PO8jO19itJH8CJMs1gnqmgOVbirkVT6kZe7%2F2x6oq7ui4zNCjXebjBqtFHo%2BnDK3EuVyBvhF3PM3gvQ6HTS454bUW5lqwPMop%2FNEuetndwK89hZb6ZFn1YnBpx3Pmh5WT5jw4D0y5NxYw79L%2FwAY6pgFypzAmm248sijBLIBIKzQACMVFo1ZDSQh6zl141zQ9SL6t8T2ruO4pU2ErPFSzUEAmv2D7b4kCPKAKgS1Q5gmtkIQPyP8%2FDfhF4LP5d0uFWCZ%2BmWensMovA%2FPkEc3eDTiFpeXVOUtwM%2BIKSo5AX7dHpxIHSnG73KK21sBF30dX2cTzC4u3E3HytjRNXxFrRG5%2B%2FQD8r5BHa8A39ix5O4AOPcT08zfF&X-Amz-Signature=92da294c3802bcbd7da6d9d5c9488dff5a949aa0b45913e305bcccb31e1e8d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL6XFNO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG4gjK69H0oifmEZycs19YxG%2BhiIKnSBWOkH56lM214eAiBFzMwoqfkimmmH7NjGK00dOvcvxA7iSVoc5uX0q%2BtctCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK86fA27XAwFMlUhKtwDfvKE99XfKF2fLniVBugItzQdXkvFpAYQl71lZ%2FwAbG5P6GpCFa9X8JMFa7tq3d07HzymJ0%2Btjk%2FgsLWl6gjzI9pmQ%2FbEbr3S22pSfTzosp0H4v5RPM8EnByqQFJ1jIPTbdHft5y1LRpOftmBT5ExgW7lf9bnNm%2BeW7er83TIvglUcxWS3lanYsHE90yq65BwnJlGbnnYdXfcpk5DHYhPovL8p5CHnH%2B5qYuSWi7PhHWrElu9j%2F7BVT8mwfF2FtCItuCUU0jHK9ey6XEa0tJ5sM3Bih0OrAJuysSp79mDWmjlqFrWXODllZeSczs%2Brk5cbgbS2E1bfvt7uAPtyDPbFMsQ9Il7s9Ti%2FUNTU9REpyW5Zpf0P6Z9OgeP54%2Fe5vtOdt3qZcny79LIMz0NZfG%2FIUS5yb7mHa1lNtk6UY7TNJDKxP59ihp%2F8u9UZkPAy7zCV3mWPSfMqmwWbzPmdNoeVZDU321lxRj5cUE%2FUpDkBov2hy7PO8jO19itJH8CJMs1gnqmgOVbirkVT6kZe7%2F2x6oq7ui4zNCjXebjBqtFHo%2BnDK3EuVyBvhF3PM3gvQ6HTS454bUW5lqwPMop%2FNEuetndwK89hZb6ZFn1YnBpx3Pmh5WT5jw4D0y5NxYw79L%2FwAY6pgFypzAmm248sijBLIBIKzQACMVFo1ZDSQh6zl141zQ9SL6t8T2ruO4pU2ErPFSzUEAmv2D7b4kCPKAKgS1Q5gmtkIQPyP8%2FDfhF4LP5d0uFWCZ%2BmWensMovA%2FPkEc3eDTiFpeXVOUtwM%2BIKSo5AX7dHpxIHSnG73KK21sBF30dX2cTzC4u3E3HytjRNXxFrRG5%2B%2FQD8r5BHa8A39ix5O4AOPcT08zfF&X-Amz-Signature=6f10ce617e7d2cac1d26c0c03577719d4d89fee4c7624abc9cdbe8fff80863d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL6XFNO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG4gjK69H0oifmEZycs19YxG%2BhiIKnSBWOkH56lM214eAiBFzMwoqfkimmmH7NjGK00dOvcvxA7iSVoc5uX0q%2BtctCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK86fA27XAwFMlUhKtwDfvKE99XfKF2fLniVBugItzQdXkvFpAYQl71lZ%2FwAbG5P6GpCFa9X8JMFa7tq3d07HzymJ0%2Btjk%2FgsLWl6gjzI9pmQ%2FbEbr3S22pSfTzosp0H4v5RPM8EnByqQFJ1jIPTbdHft5y1LRpOftmBT5ExgW7lf9bnNm%2BeW7er83TIvglUcxWS3lanYsHE90yq65BwnJlGbnnYdXfcpk5DHYhPovL8p5CHnH%2B5qYuSWi7PhHWrElu9j%2F7BVT8mwfF2FtCItuCUU0jHK9ey6XEa0tJ5sM3Bih0OrAJuysSp79mDWmjlqFrWXODllZeSczs%2Brk5cbgbS2E1bfvt7uAPtyDPbFMsQ9Il7s9Ti%2FUNTU9REpyW5Zpf0P6Z9OgeP54%2Fe5vtOdt3qZcny79LIMz0NZfG%2FIUS5yb7mHa1lNtk6UY7TNJDKxP59ihp%2F8u9UZkPAy7zCV3mWPSfMqmwWbzPmdNoeVZDU321lxRj5cUE%2FUpDkBov2hy7PO8jO19itJH8CJMs1gnqmgOVbirkVT6kZe7%2F2x6oq7ui4zNCjXebjBqtFHo%2BnDK3EuVyBvhF3PM3gvQ6HTS454bUW5lqwPMop%2FNEuetndwK89hZb6ZFn1YnBpx3Pmh5WT5jw4D0y5NxYw79L%2FwAY6pgFypzAmm248sijBLIBIKzQACMVFo1ZDSQh6zl141zQ9SL6t8T2ruO4pU2ErPFSzUEAmv2D7b4kCPKAKgS1Q5gmtkIQPyP8%2FDfhF4LP5d0uFWCZ%2BmWensMovA%2FPkEc3eDTiFpeXVOUtwM%2BIKSo5AX7dHpxIHSnG73KK21sBF30dX2cTzC4u3E3HytjRNXxFrRG5%2B%2FQD8r5BHa8A39ix5O4AOPcT08zfF&X-Amz-Signature=b1d2f56f41c5a27d744d919a479172b76ab85698bba83d903562e2878fb98e47&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCHZFOA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCioSdEayIdmD3Wr9yzqh2Z6LqQW0qrDIo915deO1jsFAIhAKJe7EEigKOG1s69ncG5%2B7XIuRyFlLmr4rhRbavvxRCvKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcHtIpeWa8VuLuW7Eq3AOg4YmnABA5mMNo%2B7xQUZZFd4r68IJCW2sd12KSWx%2FTfzvn5rr6TpvtNZVV1mP4CVctrl8ibgnahl0U%2F5IAz8sa3cBjnypwDtCdHDsStRJIB4AGEbVPGNRnLBbM98ZCB1ZDrhRUga4W0fDxPvHOlUM5U927j4FqwgeVGxuWh97l1dS9n6q07UpMRLYfxsDak0ByWZFQnraSh3LeFqGX2foA2IY4Af4mcBNfJttn02hFRRM%2Br3R%2BHlENJXKIpauhdR8pGZ1yZe4amRd0q9v5va4HAiQ6EP%2Fu98MJELABIZ9pUrs3UDAp4%2F1oFtIxCkl4BDGtciykclPaETLJGslwPK3uYKtHYSkgv1KLgzpw10yIzfuLjZNzS%2FEy35CaVQsVOO%2FgJjC6gayjfWaIaiRwEMdGOORbmJy%2FpP3Dh6haZIa6Ox%2BpM3AVAXRIdiVUUrv6mwWqIILgUAi3EBg3JjCrQN3Qv0%2FLWgFRW7t6uGkxcF4OaHbN3tyPkcSNinToSWlDFyNS3lkiS6JUlUfd%2FfnEKykl8irqKlDW5ab%2B19ou%2BiQBKAsIZWlgCM%2F5uwV70FIUZFeTsB1yQRAw%2FjuNMQHy6dzXPaikgm72QtVMpfOTYpIac1DK5OA6RrDw5%2FftYjD70v%2FABjqkAZpb%2Fo%2FqZQSrObBL9Ie3ERHPjKl7rqBYDqmfIP0uMCtaf02MAkGnsveqwFBqfsfFh872ikFxsnOj%2BLKi62nNYiujyhvB3%2Fbo9UMEDy6hGNMwy%2BQUaaVVQ9FmDvPrxvAkGGRf1hV9QeGwBtFcHVyO7dgWPoSuZA%2BUN%2BiDAOXyhLcySJdJoahBsaYMAGlNjqPXgEdV1NaPyRxOy24y2eNcKykOxF3z&X-Amz-Signature=9fd4a4deb1a3f6f7d1b9e00f2688936c40d9d8a158d0c54aad304e92ae6314af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ME3XIAE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHQkKrWrC5Y7%2BpClBC4iekUe5WboXyLWkd6E%2ByIErhHwIhAMckujRK8udLdrcnfiRb%2Bw8ssM1a21%2BQGvrXQO9P%2FKXVKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgcVRQIdOiZk1OF1cq3AP%2FR%2FuDDa6aI%2Fcrnppkg7FcqDcDcCEzEgojPXQg4ArhxQyBL%2FkoOyOLLg96kRtCjLgo12aH%2FbqOqQyaKXRUpsEKf5P%2BX1e35IVTvzEnEMOHpNyFa85sSlzkUeB9v%2FqliHla663tYzGgTbFcPGxwrt5shGPts0xGdiXCjnsSRQPNgI8PdMc08SftAPWOQBF%2F5HnHs%2FNtbxdgUOy5Z6dheZ%2Fy4Y5fRdAbK0ggt%2Fhfc28sj4X6cS3WPl7d7%2FG%2FdlTYVqtcACzt7gcjU8WH8bXrenbelKjQjpdcc6%2BJT2WXIFao6gtBhxSObdY3SkQJ%2FvgURavv1U96%2BSCJjplHC13SD4SFoMHkPBw4HPttw4T6fDMjS2iGN4tFW5WbaTTYC5WTTkvfqVm6DCwQlLvHXg1h2gaCxYEfujQYz1S1VytYC6YjGH4TLiIoccLW41MoZGjnHK7qAhwsQTHMluW3%2FpejrgP5lv0beDjbqEh%2F%2BnHF2T5lPldz5Dk1U1C40rUtkjMJw%2BwvQgXS8JQ7a7gnrrrOkNJoUnYCETGzA4PiFXxiWlC9CALWrg8qU6L91dLwTzLuaUCWS%2B7PZBLXBn%2B2N5r0Ufh7Eca%2B9A5lRnZMRUinXaWHrGPIzr7aGYvU5BvLwDC50v%2FABjqkAZq8LFsEMrpTReDKyXfJgemXCtVOpTtKr9oMMBRBrWamdIWBtgO6QwcXWRl96hJhjvxAi%2FYbJNqH6knc2I43VIpSl0F81hm3Jz%2FJoQiPvD9oaI0n1zL%2BbZUJC5xS%2BOzvbMS%2FO1%2FHCe4TbBfJzpJFTj8VG%2BEG84CBgUwACUa2zll5%2BsYUyWUVLHq3MCFCgDiJgsYOyUor3KyqTfHbn5C0oAGUXHjw&X-Amz-Signature=67da039e5ada2b8c1b11ba46dedae6ef540e69388f4aefd7462dfff7414705e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL6XFNO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG4gjK69H0oifmEZycs19YxG%2BhiIKnSBWOkH56lM214eAiBFzMwoqfkimmmH7NjGK00dOvcvxA7iSVoc5uX0q%2BtctCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK86fA27XAwFMlUhKtwDfvKE99XfKF2fLniVBugItzQdXkvFpAYQl71lZ%2FwAbG5P6GpCFa9X8JMFa7tq3d07HzymJ0%2Btjk%2FgsLWl6gjzI9pmQ%2FbEbr3S22pSfTzosp0H4v5RPM8EnByqQFJ1jIPTbdHft5y1LRpOftmBT5ExgW7lf9bnNm%2BeW7er83TIvglUcxWS3lanYsHE90yq65BwnJlGbnnYdXfcpk5DHYhPovL8p5CHnH%2B5qYuSWi7PhHWrElu9j%2F7BVT8mwfF2FtCItuCUU0jHK9ey6XEa0tJ5sM3Bih0OrAJuysSp79mDWmjlqFrWXODllZeSczs%2Brk5cbgbS2E1bfvt7uAPtyDPbFMsQ9Il7s9Ti%2FUNTU9REpyW5Zpf0P6Z9OgeP54%2Fe5vtOdt3qZcny79LIMz0NZfG%2FIUS5yb7mHa1lNtk6UY7TNJDKxP59ihp%2F8u9UZkPAy7zCV3mWPSfMqmwWbzPmdNoeVZDU321lxRj5cUE%2FUpDkBov2hy7PO8jO19itJH8CJMs1gnqmgOVbirkVT6kZe7%2F2x6oq7ui4zNCjXebjBqtFHo%2BnDK3EuVyBvhF3PM3gvQ6HTS454bUW5lqwPMop%2FNEuetndwK89hZb6ZFn1YnBpx3Pmh5WT5jw4D0y5NxYw79L%2FwAY6pgFypzAmm248sijBLIBIKzQACMVFo1ZDSQh6zl141zQ9SL6t8T2ruO4pU2ErPFSzUEAmv2D7b4kCPKAKgS1Q5gmtkIQPyP8%2FDfhF4LP5d0uFWCZ%2BmWensMovA%2FPkEc3eDTiFpeXVOUtwM%2BIKSo5AX7dHpxIHSnG73KK21sBF30dX2cTzC4u3E3HytjRNXxFrRG5%2B%2FQD8r5BHa8A39ix5O4AOPcT08zfF&X-Amz-Signature=fbf0dd91002635f48b3df99b15ab28cb0cb3f726b7fdecd30db7efac5d1bab45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
