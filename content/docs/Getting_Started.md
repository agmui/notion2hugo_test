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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDU6WFE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCMxPlOPDKpb4Ej5Eq%2B%2BAPqyGLPHqWmE8YaujEsCLmcPAIhAP8shdGec4SHpuYOdO0Q8L89ayTGIhWqzqU1iA8Tgxv1Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzGZ%2BMp4frLG5nfiAUq3AN%2FqAJzk5RNVv9TCY21ZGhgxUQM5jPHJscM6JTa5vyYK6ubWCOKoaJI%2FjuR%2FgeWijBJYQZ4lDFLE2O91GimBi6l7Ltk8XE7RZ%2F8fxM0%2B0Cc9RfsLQQQ3FN%2B6159FCb7iKMSN%2Ft9k%2BwK%2FRETCegzSL2YFuHwlcBkpgYBIsgYR%2FxeYKIV1iQtsoTUNd4TSRMRam7ANJ2k7xJM1bMzoE7RFLxvtDuy8r9lwyASqpHNYTA6A03uduM63oYp0%2FmMXa19lz%2Bi%2FI9nx%2BzBh6Ypv2jtUPGkN0CVqc47Q8WgN2Fc8V9c9Cl%2Ftm0dmqI1wf%2F%2F3LZ%2FlJfVOcFLQgXwsbmsNSIrmC1QQ%2FUFjqNyej7%2BlGcjtB1hLVCWsik1oIRTmjdBNzbC%2Ftoq0FXa0WZ7os61%2BARIOonict535IMngELURdWTvG79DIv8FR0BANv4N%2Bm4oCeGBXMGAflUzASD3NV%2B74jiaCIMSzPd%2F2F0pxQMdaB3AjdDvIMdm11n60Jes10xdoAPTBavJi87R0ZyULhto03DJ5vHXy9i8hdjydTCafZAv%2FVRsv45IR2RojTyKqXSluOfiYBOm7OhSe16Lc2Y3GBYBWOkrg7xW%2FgV6S18pmOiLunrcVcq3Jp8ZQz6B6vAzzC99s29BjqkAcc%2BqIfMBWq8F8Y4hjPlxXrciRF2AP%2FYEvJdJd5Y3xiuYArt%2BagJJvQNf60P8HgTG0QsX0Z8L%2B8FxrK8svnIgi2Kq%2BNRn0VdBrmOcuAfbstT5UqSYehQlSo0nfQk52IxJHWNbwJuMbLwpEFY%2Fw8kmbgj%2FxbvZ%2BC9KNbtud0D%2BP%2F5cn02GAT1CGmPY3ZKhwiFcXk4pBQ1LEtuMz%2FGKXZWC9CcyvTo&X-Amz-Signature=8f4cb0860d3beac35e1305bddff9cbdfceda81c28bbd9471e240727b85583fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDU6WFE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCMxPlOPDKpb4Ej5Eq%2B%2BAPqyGLPHqWmE8YaujEsCLmcPAIhAP8shdGec4SHpuYOdO0Q8L89ayTGIhWqzqU1iA8Tgxv1Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzGZ%2BMp4frLG5nfiAUq3AN%2FqAJzk5RNVv9TCY21ZGhgxUQM5jPHJscM6JTa5vyYK6ubWCOKoaJI%2FjuR%2FgeWijBJYQZ4lDFLE2O91GimBi6l7Ltk8XE7RZ%2F8fxM0%2B0Cc9RfsLQQQ3FN%2B6159FCb7iKMSN%2Ft9k%2BwK%2FRETCegzSL2YFuHwlcBkpgYBIsgYR%2FxeYKIV1iQtsoTUNd4TSRMRam7ANJ2k7xJM1bMzoE7RFLxvtDuy8r9lwyASqpHNYTA6A03uduM63oYp0%2FmMXa19lz%2Bi%2FI9nx%2BzBh6Ypv2jtUPGkN0CVqc47Q8WgN2Fc8V9c9Cl%2Ftm0dmqI1wf%2F%2F3LZ%2FlJfVOcFLQgXwsbmsNSIrmC1QQ%2FUFjqNyej7%2BlGcjtB1hLVCWsik1oIRTmjdBNzbC%2Ftoq0FXa0WZ7os61%2BARIOonict535IMngELURdWTvG79DIv8FR0BANv4N%2Bm4oCeGBXMGAflUzASD3NV%2B74jiaCIMSzPd%2F2F0pxQMdaB3AjdDvIMdm11n60Jes10xdoAPTBavJi87R0ZyULhto03DJ5vHXy9i8hdjydTCafZAv%2FVRsv45IR2RojTyKqXSluOfiYBOm7OhSe16Lc2Y3GBYBWOkrg7xW%2FgV6S18pmOiLunrcVcq3Jp8ZQz6B6vAzzC99s29BjqkAcc%2BqIfMBWq8F8Y4hjPlxXrciRF2AP%2FYEvJdJd5Y3xiuYArt%2BagJJvQNf60P8HgTG0QsX0Z8L%2B8FxrK8svnIgi2Kq%2BNRn0VdBrmOcuAfbstT5UqSYehQlSo0nfQk52IxJHWNbwJuMbLwpEFY%2Fw8kmbgj%2FxbvZ%2BC9KNbtud0D%2BP%2F5cn02GAT1CGmPY3ZKhwiFcXk4pBQ1LEtuMz%2FGKXZWC9CcyvTo&X-Amz-Signature=64bb6d1389f817bb4c0f1869e476bd0d46b959909ce6cc31a2e4950913ce9bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBCONZT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC9QOg%2FAQZ1K%2BPbc1PAtZL60Ew%2BTQ2vz%2FUGmLr5Of9FJAiEAi08LWyg0rxnv1eVQljbQxWP9sDca0hi5GZDhBpJSDOwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF4ReFQrBtxkb92DYyrcA4hEJtAaWN9hm4oKR5Tj%2BYJyRdvqgG%2FikHD0If5tvQl4lxFzoN90hiQMP1iO9pAttvgCgXqAyF%2B29Ncr9Rac3l6FUpgyA8douWoDi3xZNN1BACgzO5E45jgjF%2F59vOOGsXYJZx%2Frmo9CK4JxekQ%2BDszwG4gpHVG8aRS5GWryCQ1w%2Fz9DZZV1IrWSOfwA7PYTs3qciXpvay7bMTHcC9sqoj0d4FR8RjBNg3qFVGfXB4kxdwyiOR3A0J8o83sGsWq1CvFiWFk3C2qxgBgeXwqkJMifpQ9zFlWjMz2TETBhdEDvSLDZVUtsPes2U6jyDt%2BWboT82hSumnbnQ%2FkyHH7i51RlxGFBnbUJZrgN4wKr5EysGCEI%2BDQqrkJU%2FTF2k1D4qZJWcVcpNRvdQVUT8HARoKS813QM4Q75fb1V5FgKcCA08fKtQbenf2s7ZoPBanPCup6k%2FCtsTx1Gun7MszWFtfid%2FmECdmzOzhKTVRduHpo7gOCvu9B5WiE8RFjizOlr16%2BU9R189RwcO526cEMmkYgQJ%2Fl2Po04w0pKsaHxA1f0Ami6jo1DTev1vrpmrBBv7oLGWdKP2%2FXpXy%2FSfRFO1bp638zfBwOoVn9DFj7IipTAh0wucI5nOMI2xqcSMIf2zb0GOqUBKnvhEt72tG6fR1baQlIg8auiIkDUYEJyUQQbw3LqZFcHkujo3n%2F5JUIaw8WWweJb3jlXY9qTzeYfid%2FehHUEyd7DfgnDMwnQl3TSXpyuH7snMjia1r6g5fuorHu1fRLlnjPr4cq6QQfXjOm%2BASh2YQYVo0ciXfyo410%2BynrSiEApCw5Iz4F6JCPvuA9vG%2F2CyiP1VCAZdhjkHjXG6T1kz%2FIC8uf9&X-Amz-Signature=8c557fe3ae05367b3b591cc4da6961c12730ba42826ac13ae9ff6244b0722f78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5UGPFSQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCGNblUuLorCvzD0YJrK6j7mwT4khU2CBAcr%2F7zDUZ9QgIhAPXzypJmTZSItFBWmKsBphxXFCUuszYc5LS%2BDYWRiTF9Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzcPBuTGul2MM5eeAMq3AMIC76zBHqfSh%2FIsG0cVfHXxgjkgBbtRqHx0kjnBCg1ko0Awotix307dy99hJvy%2FcENtBDBrai3Mb8sC63NNFYFh2svbCP%2BtmJ690x1JiDaR%2F0h0JzKJxuuysl4ypNcg18BLxbxxXtsEYNVRs8i%2BtHM2YM%2BSk8DKEf1vYFMLBHR4l7sv1zOrRW4Cyhvk%2FfraMXLJpfk7ex1f07F3dzaQqU0Qpq5IHiWNOpXsRK73xlWVre%2B8lFP%2Fk8cE0FH8BP4mthGvptE7Lg4cwfXlzIdVj9gvPQ%2Fh9FN%2FBay9qPjlC4Om98oLgrNE2eLajl7amOkgk0Ux3Hv8n%2B5q%2Ffspznhjru5EyYi%2BpTXpSB6z0B0NtbN0rTQLnmz68ifao%2F%2FTf9jYdMdZZgD9eM6q3kw81%2FHYW16hhHiq%2F7fFoqLLggP0Fn1OlnZB1nRXL1mljQPY3MEOM7uxst%2BjFcELKkh65it6rMh9ZioyDrrt5i4pePtj9y%2FJ2DhT6%2FOY0HRivvL6tPA0%2FEo2h%2FEmQIzfO%2BXmVJcMMnTFjUd6OS699hUzrmkWfL5LDxdm7szwTrvbqMO98ghqihNOtHxwU4GMZwHh%2FkKaTzVtk0MiHVwnLS%2BCXMKKFn02qacVAThNZlvnjUeOTCb9s29BjqkAfxpEZ78XsUmzv5BcX1kloB0SY%2FQHkOEGj0fWK%2FGlqHKwpaRrAnyn1nDNlB2KitsF7x0t1WW78RuMogBuEwcIU4DKlguhamzBB9%2FeHHx4QExY%2BZGr%2B9gU9f8SxwOn2WQhsINH8F0B4hU97HwNtp7CKkv7PFO52yAORpnQXEYUR2cXRoUp3EpoUb%2B9Z906PtJI8BtreQ6Mkrws60yfxpFJdb8oCsu&X-Amz-Signature=1fe65234fb9a6acf2f41f6c91fa6f129d8f0a4d4d6a77137df83b3e715fc5e14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDU6WFE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCMxPlOPDKpb4Ej5Eq%2B%2BAPqyGLPHqWmE8YaujEsCLmcPAIhAP8shdGec4SHpuYOdO0Q8L89ayTGIhWqzqU1iA8Tgxv1Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzGZ%2BMp4frLG5nfiAUq3AN%2FqAJzk5RNVv9TCY21ZGhgxUQM5jPHJscM6JTa5vyYK6ubWCOKoaJI%2FjuR%2FgeWijBJYQZ4lDFLE2O91GimBi6l7Ltk8XE7RZ%2F8fxM0%2B0Cc9RfsLQQQ3FN%2B6159FCb7iKMSN%2Ft9k%2BwK%2FRETCegzSL2YFuHwlcBkpgYBIsgYR%2FxeYKIV1iQtsoTUNd4TSRMRam7ANJ2k7xJM1bMzoE7RFLxvtDuy8r9lwyASqpHNYTA6A03uduM63oYp0%2FmMXa19lz%2Bi%2FI9nx%2BzBh6Ypv2jtUPGkN0CVqc47Q8WgN2Fc8V9c9Cl%2Ftm0dmqI1wf%2F%2F3LZ%2FlJfVOcFLQgXwsbmsNSIrmC1QQ%2FUFjqNyej7%2BlGcjtB1hLVCWsik1oIRTmjdBNzbC%2Ftoq0FXa0WZ7os61%2BARIOonict535IMngELURdWTvG79DIv8FR0BANv4N%2Bm4oCeGBXMGAflUzASD3NV%2B74jiaCIMSzPd%2F2F0pxQMdaB3AjdDvIMdm11n60Jes10xdoAPTBavJi87R0ZyULhto03DJ5vHXy9i8hdjydTCafZAv%2FVRsv45IR2RojTyKqXSluOfiYBOm7OhSe16Lc2Y3GBYBWOkrg7xW%2FgV6S18pmOiLunrcVcq3Jp8ZQz6B6vAzzC99s29BjqkAcc%2BqIfMBWq8F8Y4hjPlxXrciRF2AP%2FYEvJdJd5Y3xiuYArt%2BagJJvQNf60P8HgTG0QsX0Z8L%2B8FxrK8svnIgi2Kq%2BNRn0VdBrmOcuAfbstT5UqSYehQlSo0nfQk52IxJHWNbwJuMbLwpEFY%2Fw8kmbgj%2FxbvZ%2BC9KNbtud0D%2BP%2F5cn02GAT1CGmPY3ZKhwiFcXk4pBQ1LEtuMz%2FGKXZWC9CcyvTo&X-Amz-Signature=49a4f109d5ed8479cb8f0432eb487511943e29b78d48da8ac8e877955be936fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
