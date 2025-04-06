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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBWBWHQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQxcRt1MsUwg8EirQ%2FrceBL7lr7aWR6ZxF75IvGQRcSAiBXQFVHVZaa67fGiSF%2BPlH%2BVg8EiIu2AUnUvNspSuZqByr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjEUOc63x93vMhVB0KtwDmx8Nts1viWg%2FFHnJtXSFUCxIhSdLjjIbFSWCI4G7c4XkfuQoEVbbfB%2BOXr6c0tX%2F5Q38MUOBgdbz%2BhF3Grw1zTPO7p23AjYneckefPQuOl7pt83Eofdv3kmEJplwJj4%2FDKsgVauz5hN8XqlJFp%2F7aKQzkCauCnc7GqEb%2Bj%2FAeI7DNN9vt%2BpEzdUQB0pecjA7ZJSjfiVhXiMhq1iB3jAjLM58SUJiJnA3g%2BfdroeIcQ129odsMNaLFKZU%2FJPRgEsWnUR0R62qFtQ%2BgeNNJrTja6GA347bLLlqQq%2F8%2F7pLguH1QItjdpRzx2BxkTLfI5HByu6afy0E1uqjygMxRtAOm5U9cBpcNqKpK9h4964nY5GAPoBQglBq%2F%2B36l6uR7zTAlhXMx02%2Fnm8XudI9xwm2lFyb9TKFa1G1itIhRGXI4OeR94KpFeVzEY9TovLIiXqcsDuC8aEkAaXj8Yh8Z0O%2FS9w6UVYjTUr%2BIDitIkQkNmbhhckzMKJFxnDrQax15unOwqjOR%2BOqpXTLSFTHeKBB6ylJYEAWpfoUKsTq9fuYkIMSUb9dhlwn%2FgetjjI67NaNMhGHy8As49W%2BTqOaJF6vimybTBzq1a9XvOaCyxNp6V7bE%2BY0cutyheW7BRUw9v%2FHvwY6pgGvDbaF0GwLXFE7wzA2yewTGpKCSQxJ0OVQ4L2jkPHdeuSN81qpHiSsjEyfGNtIb8h%2FmJ9V1NKq%2BKH9AzdUOX91VxKhQxQDXR2v0DW%2FXhf8xvd6258C%2FAxjWoaA4crg%2FLfBZnLOl%2B%2B%2FliXKnaOHsP2A40Kk4Am0kIRPMGVxvM2rubmtRfM7d1gcPWRsj8j6SWp2PNZl%2FsrnxHWPPuGgP3dvTr0mQQRB&X-Amz-Signature=99c3e2b24f0c6a72182da83b18f0b235f45db31cefcc50fef883f61314ce2fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBWBWHQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQxcRt1MsUwg8EirQ%2FrceBL7lr7aWR6ZxF75IvGQRcSAiBXQFVHVZaa67fGiSF%2BPlH%2BVg8EiIu2AUnUvNspSuZqByr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjEUOc63x93vMhVB0KtwDmx8Nts1viWg%2FFHnJtXSFUCxIhSdLjjIbFSWCI4G7c4XkfuQoEVbbfB%2BOXr6c0tX%2F5Q38MUOBgdbz%2BhF3Grw1zTPO7p23AjYneckefPQuOl7pt83Eofdv3kmEJplwJj4%2FDKsgVauz5hN8XqlJFp%2F7aKQzkCauCnc7GqEb%2Bj%2FAeI7DNN9vt%2BpEzdUQB0pecjA7ZJSjfiVhXiMhq1iB3jAjLM58SUJiJnA3g%2BfdroeIcQ129odsMNaLFKZU%2FJPRgEsWnUR0R62qFtQ%2BgeNNJrTja6GA347bLLlqQq%2F8%2F7pLguH1QItjdpRzx2BxkTLfI5HByu6afy0E1uqjygMxRtAOm5U9cBpcNqKpK9h4964nY5GAPoBQglBq%2F%2B36l6uR7zTAlhXMx02%2Fnm8XudI9xwm2lFyb9TKFa1G1itIhRGXI4OeR94KpFeVzEY9TovLIiXqcsDuC8aEkAaXj8Yh8Z0O%2FS9w6UVYjTUr%2BIDitIkQkNmbhhckzMKJFxnDrQax15unOwqjOR%2BOqpXTLSFTHeKBB6ylJYEAWpfoUKsTq9fuYkIMSUb9dhlwn%2FgetjjI67NaNMhGHy8As49W%2BTqOaJF6vimybTBzq1a9XvOaCyxNp6V7bE%2BY0cutyheW7BRUw9v%2FHvwY6pgGvDbaF0GwLXFE7wzA2yewTGpKCSQxJ0OVQ4L2jkPHdeuSN81qpHiSsjEyfGNtIb8h%2FmJ9V1NKq%2BKH9AzdUOX91VxKhQxQDXR2v0DW%2FXhf8xvd6258C%2FAxjWoaA4crg%2FLfBZnLOl%2B%2B%2FliXKnaOHsP2A40Kk4Am0kIRPMGVxvM2rubmtRfM7d1gcPWRsj8j6SWp2PNZl%2FsrnxHWPPuGgP3dvTr0mQQRB&X-Amz-Signature=28bad300621dcfe755a0ff707cfa0864afe0646545457f3a858b1d301a1485c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIRCL2BV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2pR%2FTDvHWZRUPwOQ%2FOM%2Fgs7w%2Biz9gcospc7nS507gDAiEApLOjVhi7JAa2WQqai83%2FOqayrwVjbonk0aZt7xUvDdwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNmL55Uf9lKoGPbeqCrcA8t%2FsNDlC1DpEVXuzrdxbWXFhr0mvuySD%2BY2VFrmf7QWCDvjKtMLx8b892xWIGz0lQBvmXsQU6Gn1K5UNQSsHKqWg3KJ%2BWCwC0q6dgnEPBMPYTb4gK7P7P%2BfrE2GA4F2%2BrZZ5gF4mQ58yxfI%2FXFASgXRnjdUtpqudR%2FyIbDCLXgbRH0SHIqi0ZBKsoNfGiItjBhpt%2FPOhbQhlQT0H9CrYVTUwmXCwR0F4iNO%2F4oTNv56b%2B1QbxmBYHM3QtyNfIfJS%2Fgb8HVySG7Vg2xWVl7wnoLh3PBNbfnHTxVZ%2F%2BKydW0ufWC52ZYDSlYNqD%2F7ZF2LlhDYNCawT9l%2FL7gxlYXfNpp9DlrgbCr0q08AOWxvprwcithlYeVHXsPH%2Bg%2FKP4d%2FhdnjYnklTkQ2ToX%2F9Hwymx8%2BPfsyb5Y4x04FhIEMxfK3qKmtlJ0Rt7MpMrnVFC6svjAahGdZ6AxPWvfQ8PmWkvw06FFIL1ZHBSOgGaQijfaNZuj7JfKVeirwYogxv886Ydc7kGGC07kbopuI3iUK5phydyjsGnyr%2FsKjEujNLZtz8UVelNm7vJOV%2FIEZ8jLHMSRjQ%2F5KKN08Ayw2%2BeC6q9jTS3XChSWHxtytCDccxn6lGVho7HBxYE6Lur3qMI6AyL8GOqUB2acgtnHTJesNGqomew5G6%2B9OpdQyLYhP3ba9LKzR6xLuCS93VL4wpMhGjgVZIAI1eQz1qZw8yxY4G3WKROlIUt1eSyRsVftXaatSB2FSJvPMSy2aEKiEG2t7bUGeYzQNes3TvI%2BzzBKdHgVq%2BFqASN2lKYxzI3Iqf%2FkFGCBCT63rTUvOnzSQ4YgvD%2FPH4ozLO7kVTfGrpa1b8cRcqt%2FJxQy30%2B%2FC&X-Amz-Signature=be16aa8c928f88ef20411f4b408529f7e9fd3a7af4a5a9d9811980af1eae1f06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMELU3NA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmMSKh3wSIgpOl3YKxNC7Ha0hrvnosuRPAhLcydgJF%2BAiAo%2F4leqWhm45TvZLtkHtxfNQF%2FKAaSbyD%2F7U%2B1cdi5tyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVWjsQeE%2FzS4dK%2Fu5KtwDWsRbyDOLQ9w907Dp8DM31bTglD08TKnQN3h6Ox%2B0Lh4aWTe9dOf7Tav86K50XGHFpbOlgNjQsSz2LGwA8ui%2FvjwM8xSx%2BdPZTSVrlPDoUpcl7TZpEZGgOKvIeWJdKScc8vnNyNR%2FxNMFlQB1QwzONQCI9SIgO%2BSHUc91PFVM5haaggUHd69TAG3ikZPs%2B0EJd%2FNPiJ1LVoUUYPGjRn2C4T43NC44m3JH%2BP3%2FJRKi6X%2FcEIDtP5R9o81lp0PxrqfVCP1AykdctBSDI5qYjibLMW4BC0TFbDp2iIIqA6GzTI90BhXvBaL82bsTfsz4V8bummeqYO4WZgC9dRTc5bbM%2BFaMA5ZQttZX5CkqNZZkquawa%2Bg7MZhR7V80baq7uZX4C6cjKPT0%2BP3z9pXVFIovl%2BjYzyDQ3CjZymSL3UXtrJ90%2BGOe0igY8sDtii2Rs5bWmR659dJKzVoH22lsCfWByeqkmllZBlm6lUB1EJj%2FlnpEOidugX07L9PFOYzLbTaiApxSYziFOTdv6nC4RttWLdbW5FnyhwzoESBNaYNjU%2FWsWL7Vxdq5%2BihSLD1y5IgKD%2Fbn%2BXYmzYQpQumkSz%2Bj2OmaOuE2Iq%2BEuSa1TICKAGBY1oVyxm%2BGBu1H2A4wqoDIvwY6pgHyCdkq0Z3RJcwSoRhsOaNh95FNTFRzLZmY8fAUHQLlVtoy2Yqg%2BjIAQGY%2BFzWTzrqB7sJMsGZrFNb19MrSmF8WisIeZy8inXmYXIbGZRZwPNxql%2BkqfS7yFbAlkfGNAZGF8pb7FdRtBNgig6EFu3A8WkNaSV7ug9HLGplvzMRspjf2o5O8kvKvgR7QaEDBayG4cr1LEQkqDpncAHIllv%2FYf7IHmI0Z&X-Amz-Signature=db2ae1a653339e54aab83b3c216f7b89f97a7c60fcd3c5e43411fba1d4fb2456&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBWBWHQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQxcRt1MsUwg8EirQ%2FrceBL7lr7aWR6ZxF75IvGQRcSAiBXQFVHVZaa67fGiSF%2BPlH%2BVg8EiIu2AUnUvNspSuZqByr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjEUOc63x93vMhVB0KtwDmx8Nts1viWg%2FFHnJtXSFUCxIhSdLjjIbFSWCI4G7c4XkfuQoEVbbfB%2BOXr6c0tX%2F5Q38MUOBgdbz%2BhF3Grw1zTPO7p23AjYneckefPQuOl7pt83Eofdv3kmEJplwJj4%2FDKsgVauz5hN8XqlJFp%2F7aKQzkCauCnc7GqEb%2Bj%2FAeI7DNN9vt%2BpEzdUQB0pecjA7ZJSjfiVhXiMhq1iB3jAjLM58SUJiJnA3g%2BfdroeIcQ129odsMNaLFKZU%2FJPRgEsWnUR0R62qFtQ%2BgeNNJrTja6GA347bLLlqQq%2F8%2F7pLguH1QItjdpRzx2BxkTLfI5HByu6afy0E1uqjygMxRtAOm5U9cBpcNqKpK9h4964nY5GAPoBQglBq%2F%2B36l6uR7zTAlhXMx02%2Fnm8XudI9xwm2lFyb9TKFa1G1itIhRGXI4OeR94KpFeVzEY9TovLIiXqcsDuC8aEkAaXj8Yh8Z0O%2FS9w6UVYjTUr%2BIDitIkQkNmbhhckzMKJFxnDrQax15unOwqjOR%2BOqpXTLSFTHeKBB6ylJYEAWpfoUKsTq9fuYkIMSUb9dhlwn%2FgetjjI67NaNMhGHy8As49W%2BTqOaJF6vimybTBzq1a9XvOaCyxNp6V7bE%2BY0cutyheW7BRUw9v%2FHvwY6pgGvDbaF0GwLXFE7wzA2yewTGpKCSQxJ0OVQ4L2jkPHdeuSN81qpHiSsjEyfGNtIb8h%2FmJ9V1NKq%2BKH9AzdUOX91VxKhQxQDXR2v0DW%2FXhf8xvd6258C%2FAxjWoaA4crg%2FLfBZnLOl%2B%2B%2FliXKnaOHsP2A40Kk4Am0kIRPMGVxvM2rubmtRfM7d1gcPWRsj8j6SWp2PNZl%2FsrnxHWPPuGgP3dvTr0mQQRB&X-Amz-Signature=f82305169637158ddcefbd5e65417f3bb460a57cd0d7fa9f968a8b80f3a3a784&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
