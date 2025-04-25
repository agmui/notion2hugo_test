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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4LOTNQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2FHsEzFW%2BU3epI%2BtMbH2t8RLOVZvDEp%2Fb6OQyTfpzNwIgc8oF8pXnqeYswKbebd%2BywyBdhA3Lffc19BRUN2%2Fo9Q4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNIH1rglKFdN4Os59yrcAznghN2Wfa2w67OVkxc%2BqkUeFomvTFYj9E8DUA6zTeAOO3d8oqdDemMw0uW%2BNuo6A5%2FwzTprDFs%2F2qKCHZ1WlVK1gtJYleKDKK77t0PPQ6pfWRGiKbZemagif3OoyJfDOGK2HN%2FYVVH0HtiFfQkESjtCyKY%2B%2Bax65QmvlCiwdoiO4%2BGtycNC6vChMTlcyJR0yf3RZ4vCNNrevs2QFXysXzbJwFNXlasMm4kU81G1NrY0Imgb%2Fg8yJS%2B9qcKxGm5tSzo%2B8Ozlzp%2FPnkTZ49v%2B2N9eXl51AuMabCTUmExOUA9R%2BHy1eUOyuW%2FpJRDZclRINNtqMB1af6AqmoA2SVwiC1gRw0Rr5ow34%2FT5FYAaRDRUROijZzw4jcs08FU2ma%2BWNiW1XWWpDzDyfeEmuG6HxkQ%2Fivz9s3XDapzfAzyhk2dH7nDqfYw0fICSdIiDlfw8Wcext3tBIsgs%2FjDxW5brDzLW84eeyYly9v1DM87Ekis8tUdDnWavAS7Ekdp4PKLFq82lnWJECOoy%2Bvay8C0DQQmOiiis8QCeh5kTXvvTpP6vQkceck%2FaUhIuEdOKx%2Fp0XHV6Ycr1yIa039WxwTtJt%2Byt%2FtUFKteCH%2Btjr6NIqv5sLZhSc0we7d3vOUyCMJe0rsAGOqUB8czvtxCZQZQ6mYlJUmKXhEFCFHr7%2B%2FHgaDHARUy3PHC4t%2BZ4xLyDMA2ryJxtLwjqPxI6K2FWBn3Iy%2FarbJUICozvRbpqmt6U2h9M3vi2fwh%2BkY%2Bm3%2ByFr1V%2B045jgQujrJ6mW4ogCfCnsJAv0TOb%2FiAAEvGJBVuipAPkqgmKzHSvAN%2FKJyvK3xCk3h4hYYZBsBkMJXrbod%2Bn4jdUBngnlPSqOsas&X-Amz-Signature=d15bddb0b5af281718cc0a29b1579d4dc03a2e49eb28556b4b43118da62d94b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4LOTNQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2FHsEzFW%2BU3epI%2BtMbH2t8RLOVZvDEp%2Fb6OQyTfpzNwIgc8oF8pXnqeYswKbebd%2BywyBdhA3Lffc19BRUN2%2Fo9Q4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNIH1rglKFdN4Os59yrcAznghN2Wfa2w67OVkxc%2BqkUeFomvTFYj9E8DUA6zTeAOO3d8oqdDemMw0uW%2BNuo6A5%2FwzTprDFs%2F2qKCHZ1WlVK1gtJYleKDKK77t0PPQ6pfWRGiKbZemagif3OoyJfDOGK2HN%2FYVVH0HtiFfQkESjtCyKY%2B%2Bax65QmvlCiwdoiO4%2BGtycNC6vChMTlcyJR0yf3RZ4vCNNrevs2QFXysXzbJwFNXlasMm4kU81G1NrY0Imgb%2Fg8yJS%2B9qcKxGm5tSzo%2B8Ozlzp%2FPnkTZ49v%2B2N9eXl51AuMabCTUmExOUA9R%2BHy1eUOyuW%2FpJRDZclRINNtqMB1af6AqmoA2SVwiC1gRw0Rr5ow34%2FT5FYAaRDRUROijZzw4jcs08FU2ma%2BWNiW1XWWpDzDyfeEmuG6HxkQ%2Fivz9s3XDapzfAzyhk2dH7nDqfYw0fICSdIiDlfw8Wcext3tBIsgs%2FjDxW5brDzLW84eeyYly9v1DM87Ekis8tUdDnWavAS7Ekdp4PKLFq82lnWJECOoy%2Bvay8C0DQQmOiiis8QCeh5kTXvvTpP6vQkceck%2FaUhIuEdOKx%2Fp0XHV6Ycr1yIa039WxwTtJt%2Byt%2FtUFKteCH%2Btjr6NIqv5sLZhSc0we7d3vOUyCMJe0rsAGOqUB8czvtxCZQZQ6mYlJUmKXhEFCFHr7%2B%2FHgaDHARUy3PHC4t%2BZ4xLyDMA2ryJxtLwjqPxI6K2FWBn3Iy%2FarbJUICozvRbpqmt6U2h9M3vi2fwh%2BkY%2Bm3%2ByFr1V%2B045jgQujrJ6mW4ogCfCnsJAv0TOb%2FiAAEvGJBVuipAPkqgmKzHSvAN%2FKJyvK3xCk3h4hYYZBsBkMJXrbod%2Bn4jdUBngnlPSqOsas&X-Amz-Signature=94ed243ea1de010d7d33438d70a474d5b5d86e11142fbb333f1bfd475b4a844d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGON77Y4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F8f%2FFiAj4%2BYzHB3qiXhs9xXosCcNxsQFwtcIzbJvr%2BwIhAO8O5ezDfxlQgOyn%2B4Z7CF3p99v5N%2F6%2F5bfb%2B2LD7OQ%2BKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDrNc1HLIETSzyYP8q3AO%2B2evsU%2FsXRZ7h4cKuOdIv46b6EiLDvwVYuOfPC8ysFy%2BQ7xbbMwloUhyGCA2zgFQyAyVrCb293IjBoCnhaxnKnkyBBGEIHEnLTtQEVqMpQadi5kWU9ITZK5Ut5prmwOLrhdAbBmw7W8zQIjUFl3pwvhPT8%2Bk8ukxz5QYetWf2aa%2FCZyctIUOZQ6G7Dyfs226AHdMKc73NTcCPbCk5GWbELqDcVZc%2FUk7nQiMh1HedC20v018SHQ3hnnLyVnwR3eO5LcRFqyLpiZf0Yf%2FXITNMUuhA%2BzTQqVaCffUsRKWZM0kOaDLBRL51O3KLNGyq5b73P6AVur6FRFzX%2FpRTZTBsE%2BPZ%2BTtKZavt0tadrVSDC0XIXH6%2BZKx7W4XDg1eYxkTpu7srJi5Ys0leoWUbzeOI1zBlO%2BhbgSEDkC6YzOWXJsdusDFC8tNwwidDVq07V%2FuayNuz6Uzwrif%2BSEIUUIKsw%2FS5sXp8Pw3f3%2BVTdV7AtjqqZ%2Bo1NZKMtw%2FFmth4jECGx8Sk%2FZ%2Fx6BNPQ1xyqd6v006HaX0K%2B%2FQgc%2BFBVT7iUiIc295t5cMCMwAp3dC7hOdAZXQ7NilKDaLu9t8gV2lPUJNwq2XLfts0JvWqscoaR5Ith7E0r7AkfPe%2FsTDus67ABjqkAUg5QhConAMjqb1lZLoIc0414si3xSjGQU2f3kTI4denwXvGvnH%2BDbBaY4uQJ5XMxDNDhjZhsJOJnZOcER7ahyBjgOUjN9E8gt1iYSBHS6qFdpeaqlxmAq5bQeAk1ZFkPtk3o1Y3ze0JaAkCFqtYTy0%2FuRNB9UZbEwG5wupcww%2B7ityZ401c1e79kfWLSnahuPWnfIPg0UbA59MrdVAiKQ%2BuKJT5&X-Amz-Signature=07d769d91600f774d25dc75d3946098f0464ed3377d159cf8168af468f3723b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIID2ME%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjVMeWPkqzChGZcNQ4xCLaKX8Z1vZzxE3VnSV6%2B9fMiAiAE2olxQzAQMLe24wej0aJFUPBhF7xFQLamZEixo2V7zSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAcxzORkTs%2Bdy8lGpKtwDqIdThZsbjHWjP%2BkxPVwZ8dMU9j0Q0UVN2BcL86W3LO8oIeAWtNdbOfJ55a6wUz3uU19GIwUaaad8vXiyN2oAgUx0fefGGoCWAITJPJzpybuxqgvJcpzTEX%2Bt2MnkFOGpw3suycZuTjEq3nULmMorxp7%2FvC6Ac5Vknc7esvdf%2BtTu1r4wG8SG8pLlSz%2B6IMKlIAu021f6lgskFWOMwCc86EphjsWA3x0ztp%2Blijm%2Bw4VP8dtDCnb2hFBMGAqYKN1yCR4phpL167%2BDaA9MHAdpFDHRSN0goKMsl6UkjgsrOVaHhqiFR%2FAhFs3OPgBsaZOkVD%2F64wvHUZ%2BQEwVM%2FjfA%2ByFJaO0NvPrD9BTfdg5JiyhCFjJJdzSm0bAsmfOp7TgEdWeUJnc6xYV4%2F6XZfH1c1KvumEQS4dH%2BBiGhJdtAu0p3FEh9FbGbDclnm6gRZbKj7zhNn5P1jsMHzwHscG1%2BaxxVt1m7Rc0QyKnLgowlvkIIn0bNloO8Y%2FfcVzJcnQ%2FqFQ6k5u6dDd7QN1yUdJ5X%2BVXY81AnrGLZf359bRdp61e5ekn2w2IfY4P8FrLGdLWil4H9YH4aGl1AwmViJVLCy1uuOaPFGMBYMCJ8jNcUjhBp%2FmO2dYAziKjjNZ4wiLSuwAY6pgFGBYx%2FWpZSEmUrf%2Frlm2N7%2BTRjDGdmU9JJTGr3kmPtdaO853H%2FwdI%2Fa9ikTGjiPSs%2F%2FT%2FqDRcKO3dLjJUag1nqcB2bGEeNvB9SHlMuyGUWLFo%2BQzfQjvDFT%2BrsxvTX%2BGXwnEhSb4BaN9l5vSvMuRC7sls768MPGoI2RNIRCTBPGamVPg8hqZHJqtl69v%2BwikmJSL1IvByyp6mHCLMVBIySiABlnahn&X-Amz-Signature=1eda137b5c1a96ac49f88a444f96c4e52d6b0757a94c16d49bdcf002c809e244&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4LOTNQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2FHsEzFW%2BU3epI%2BtMbH2t8RLOVZvDEp%2Fb6OQyTfpzNwIgc8oF8pXnqeYswKbebd%2BywyBdhA3Lffc19BRUN2%2Fo9Q4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNIH1rglKFdN4Os59yrcAznghN2Wfa2w67OVkxc%2BqkUeFomvTFYj9E8DUA6zTeAOO3d8oqdDemMw0uW%2BNuo6A5%2FwzTprDFs%2F2qKCHZ1WlVK1gtJYleKDKK77t0PPQ6pfWRGiKbZemagif3OoyJfDOGK2HN%2FYVVH0HtiFfQkESjtCyKY%2B%2Bax65QmvlCiwdoiO4%2BGtycNC6vChMTlcyJR0yf3RZ4vCNNrevs2QFXysXzbJwFNXlasMm4kU81G1NrY0Imgb%2Fg8yJS%2B9qcKxGm5tSzo%2B8Ozlzp%2FPnkTZ49v%2B2N9eXl51AuMabCTUmExOUA9R%2BHy1eUOyuW%2FpJRDZclRINNtqMB1af6AqmoA2SVwiC1gRw0Rr5ow34%2FT5FYAaRDRUROijZzw4jcs08FU2ma%2BWNiW1XWWpDzDyfeEmuG6HxkQ%2Fivz9s3XDapzfAzyhk2dH7nDqfYw0fICSdIiDlfw8Wcext3tBIsgs%2FjDxW5brDzLW84eeyYly9v1DM87Ekis8tUdDnWavAS7Ekdp4PKLFq82lnWJECOoy%2Bvay8C0DQQmOiiis8QCeh5kTXvvTpP6vQkceck%2FaUhIuEdOKx%2Fp0XHV6Ycr1yIa039WxwTtJt%2Byt%2FtUFKteCH%2Btjr6NIqv5sLZhSc0we7d3vOUyCMJe0rsAGOqUB8czvtxCZQZQ6mYlJUmKXhEFCFHr7%2B%2FHgaDHARUy3PHC4t%2BZ4xLyDMA2ryJxtLwjqPxI6K2FWBn3Iy%2FarbJUICozvRbpqmt6U2h9M3vi2fwh%2BkY%2Bm3%2ByFr1V%2B045jgQujrJ6mW4ogCfCnsJAv0TOb%2FiAAEvGJBVuipAPkqgmKzHSvAN%2FKJyvK3xCk3h4hYYZBsBkMJXrbod%2Bn4jdUBngnlPSqOsas&X-Amz-Signature=d76bc5fc424667f927d5598ba982d5a6ff34c6041c3c4bf2f04146ecc6261c89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
