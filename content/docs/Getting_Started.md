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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5LAW5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC6fnPelOaukYrl6ywAy0gFfMmbprQFLlc6mKqdNggl3wIgZtdfFoHni7ZDutjc%2FH4wvzPXAeKy5Fu5E%2FTPpLu1JMkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMPar1YQk7vG%2FN1pICrcA297t6KWtdPDkgLt05Z6jJtZsJOQePTX3%2F3MWvb8vZ3judah1TSwtj0ZbLS%2BZJI%2FGb9JZtsNyP5hghPt5TdEjy%2BQWvk3TPwY2IJL7RzS8eFIx6nmVd%2BmdWKBPZ57V8gH00K7UmMfj2uy%2BLOI7I6nhJ9P2s9NJTagfVCz%2BcCV4w5WyspKbPUpmvwsZJAHQbGMI3NAxT87CkzG8l0ARioT6x7lpsL%2F0goZVxZPROdG2lMEyoqefcTvZ3RCwkLFYk1LIyK4tfjak6NBx8hK3TB1pyayVEJV6IjWy6mdIKlHMa1FBQrcie0CFHh1kG8uWhi7Urew%2B%2BGtbCpXKe6HKv4ggESZZNOUzLZFKia5GlK3RsPC5GEeiMkDGZKwzhymJj07775KbcnnjeCmezv1rWyl36X4brCqEGj9sYXobdwdMBEC8UbYrW8GXhal1kXFdOHqM6OBJwgZ9Urk9kaKl0J7vXsCJeKpocvqSu7omXb3jilAdLQpM4WLf2DJq2uR4DvCSLTU2HeQKYhn9mGMpTPWY%2FS3D8ptIt7yEnaDWzGYEud4QonDXEQ%2BsxBKjPG35B7pkmowGjSgezaJlUggo2Rmb204Cv0n3ol76ag5gybUc9u3imfKXicXepfd68gmMPjb08MGOqUBFq4L6fz8%2BZQd%2F7OcV6Czg0bihfMHrR8mqKVFDnnsa4o2xR%2FnlWYm78VH1TBv91vvGX9IKH5MXMRNmoF0qzljUAEWPN55O11bRsH26lHMtBLxg9ew9WKELrtRg6wT7Jzk%2BD%2BPL7aZc%2BRZIW385xwMezxcELHYotE9mJ2fRd3ML9t5H%2BWc90kx14SLgv2PKVyjVKymtqopZ%2BWD66gx94Wz6S8baDXd&X-Amz-Signature=cf006dee68d5a6e2d70f057f2b1602b29060e78e1a24319fbb563624e4755e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5LAW5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC6fnPelOaukYrl6ywAy0gFfMmbprQFLlc6mKqdNggl3wIgZtdfFoHni7ZDutjc%2FH4wvzPXAeKy5Fu5E%2FTPpLu1JMkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMPar1YQk7vG%2FN1pICrcA297t6KWtdPDkgLt05Z6jJtZsJOQePTX3%2F3MWvb8vZ3judah1TSwtj0ZbLS%2BZJI%2FGb9JZtsNyP5hghPt5TdEjy%2BQWvk3TPwY2IJL7RzS8eFIx6nmVd%2BmdWKBPZ57V8gH00K7UmMfj2uy%2BLOI7I6nhJ9P2s9NJTagfVCz%2BcCV4w5WyspKbPUpmvwsZJAHQbGMI3NAxT87CkzG8l0ARioT6x7lpsL%2F0goZVxZPROdG2lMEyoqefcTvZ3RCwkLFYk1LIyK4tfjak6NBx8hK3TB1pyayVEJV6IjWy6mdIKlHMa1FBQrcie0CFHh1kG8uWhi7Urew%2B%2BGtbCpXKe6HKv4ggESZZNOUzLZFKia5GlK3RsPC5GEeiMkDGZKwzhymJj07775KbcnnjeCmezv1rWyl36X4brCqEGj9sYXobdwdMBEC8UbYrW8GXhal1kXFdOHqM6OBJwgZ9Urk9kaKl0J7vXsCJeKpocvqSu7omXb3jilAdLQpM4WLf2DJq2uR4DvCSLTU2HeQKYhn9mGMpTPWY%2FS3D8ptIt7yEnaDWzGYEud4QonDXEQ%2BsxBKjPG35B7pkmowGjSgezaJlUggo2Rmb204Cv0n3ol76ag5gybUc9u3imfKXicXepfd68gmMPjb08MGOqUBFq4L6fz8%2BZQd%2F7OcV6Czg0bihfMHrR8mqKVFDnnsa4o2xR%2FnlWYm78VH1TBv91vvGX9IKH5MXMRNmoF0qzljUAEWPN55O11bRsH26lHMtBLxg9ew9WKELrtRg6wT7Jzk%2BD%2BPL7aZc%2BRZIW385xwMezxcELHYotE9mJ2fRd3ML9t5H%2BWc90kx14SLgv2PKVyjVKymtqopZ%2BWD66gx94Wz6S8baDXd&X-Amz-Signature=bacbd13d08bb8700657cf547304bf70d3005280513ec024bdc18f8d36c1012a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5LAW5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC6fnPelOaukYrl6ywAy0gFfMmbprQFLlc6mKqdNggl3wIgZtdfFoHni7ZDutjc%2FH4wvzPXAeKy5Fu5E%2FTPpLu1JMkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMPar1YQk7vG%2FN1pICrcA297t6KWtdPDkgLt05Z6jJtZsJOQePTX3%2F3MWvb8vZ3judah1TSwtj0ZbLS%2BZJI%2FGb9JZtsNyP5hghPt5TdEjy%2BQWvk3TPwY2IJL7RzS8eFIx6nmVd%2BmdWKBPZ57V8gH00K7UmMfj2uy%2BLOI7I6nhJ9P2s9NJTagfVCz%2BcCV4w5WyspKbPUpmvwsZJAHQbGMI3NAxT87CkzG8l0ARioT6x7lpsL%2F0goZVxZPROdG2lMEyoqefcTvZ3RCwkLFYk1LIyK4tfjak6NBx8hK3TB1pyayVEJV6IjWy6mdIKlHMa1FBQrcie0CFHh1kG8uWhi7Urew%2B%2BGtbCpXKe6HKv4ggESZZNOUzLZFKia5GlK3RsPC5GEeiMkDGZKwzhymJj07775KbcnnjeCmezv1rWyl36X4brCqEGj9sYXobdwdMBEC8UbYrW8GXhal1kXFdOHqM6OBJwgZ9Urk9kaKl0J7vXsCJeKpocvqSu7omXb3jilAdLQpM4WLf2DJq2uR4DvCSLTU2HeQKYhn9mGMpTPWY%2FS3D8ptIt7yEnaDWzGYEud4QonDXEQ%2BsxBKjPG35B7pkmowGjSgezaJlUggo2Rmb204Cv0n3ol76ag5gybUc9u3imfKXicXepfd68gmMPjb08MGOqUBFq4L6fz8%2BZQd%2F7OcV6Czg0bihfMHrR8mqKVFDnnsa4o2xR%2FnlWYm78VH1TBv91vvGX9IKH5MXMRNmoF0qzljUAEWPN55O11bRsH26lHMtBLxg9ew9WKELrtRg6wT7Jzk%2BD%2BPL7aZc%2BRZIW385xwMezxcELHYotE9mJ2fRd3ML9t5H%2BWc90kx14SLgv2PKVyjVKymtqopZ%2BWD66gx94Wz6S8baDXd&X-Amz-Signature=2a90e33f63264b7bed26c48a90f842f713de0dfb2a3786a943f4b28661887b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TANGTLAL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA27QyEFh%2Fk%2FkZD%2Bvqzy2F8sjSUGOmPN2zhifgNiQGIZAiEAi3bTgm%2FnX0FHXHZmYgTVPNVB1RlzAB6PkNxryFHAJgUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKVY2UGADNeVloczkSrcAxaToXWe54pyeXaJNUR6Q4AfFNGBqMcxI%2F4tAPgwhqDjNGv1dsnDV%2Fq89Yy3ceGQcEe2ubItBqtngvZTamHGjxH9VVwmCoQvf73U%2BbBJqkOl5hmWwdA84GZ44c8acHWnejtD3cNzvskD4ZiMZqjbyxHC0ViawAILUHEjkFJd7dC8%2BYCRJtM6LY4D2VLe6onP9qCC9D0vHRsvuVEPEjgihkSJR8uOyLTQxIbu9ZL8lDiXvzx10fW4Gu1PmHng5AEc60MVR6Jh38PodgfR8MR9zEo3W9QJKxr0ugDQyLRqP9n4DKwKsoKv7InIk6h%2BccnBKb7SD%2Fy4R7DR%2Bmy2G29Y5NqNyF6JfLQvYF1S2p%2FEzUp8vNQVkV6c5%2BPgGgt%2FUC5ulCIEa5QyTtugXGIh1Gw%2FdK%2BpCcCcq2LAnEeITCDzgkRoRRbAcFhgyoCVGM1%2BgQi3rnHCSYg0PNI%2F8i3jbfFAqG5RIL97pKHq56cCrIpSHm1wdBcITmpvYhAIcDX9Q2nDRZX9J1o6i6l9xA8kjKPkVUFdcC7g2rdrrHzDvtpH%2BVCWYE5F95Qit4HQaoW0gwIgJlcCLtFEqsSwyUX2J%2FfyxwU2KW8Um2M2XEMFHCH5X2CAunIZucPfUXXlUrkKMKXc08MGOqUB7GOQ1Q7tcnQUk8tbZw9BkuW%2FvNerHeYEjoyoHSsKXQEsmMjc3KZZqidnsu%2FL87u2j%2BpLF0L6amu03HyTBsyv6FBGYR2VdyMi6r8RvTjYv0LA%2F0lOXw76F9xVv8XLDa2nULUK2s29ywgKRY4OQLXc2S5RgJA46cpp2%2FzCn2xO863AwXGkN74TgmfAe0geo%2F%2B324WBDK1Ex5D0%2BibIhtUxtbMeNKVC&X-Amz-Signature=cba56c41d7e91cf793f66ccb6aa256e6fc727bab059032c7f6ecaa1326178048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PHUB2LC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCB06EiF8O5IqXs0P73pO9An1omd8VZJ74eq3SIfD1GoAIgDFvxvzzaBiztgiw5w%2FpyvWFmgsxXDEqM0%2FwgwVPTVbYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPMgS78imECWx69CcSrcA8D3IWvFQeWmEmi%2FJR1zT%2FRP0LCFnawNW3nGRxYmzluqAXoM9L%2BdbuzD8e3khwO5J8b7KzTyO3IhAvEjfXbXbz1zr6SC7CNZict0eL6pRGE%2FqNOXlwRW4kH86S%2FICqZTW%2Fbb2J8Dk6ipj61VqMgmBBL32rWCrIr6F6HijAKGc64le%2Fhl6YL9CNNy34so6qVdD68TpZCl%2FyRPubgK4%2FiO6OuERdXOH8GT7cd9BnNKRwyqMQBy8YKXyxwjK9lGOAtiQlLds45LN7UA1CbvCCLIwOEFjN7Er1G0MJjkSThdtyG12zE%2FP2tHC1RZGdvmkVqltmIAcL%2BD%2FxGuE7XFg7mwGEp4HM1voLIFGUgAHTtW3VIYZHnEBHuYaDPfdoMngSV3dP0sxlSd2awbjljopXWkQzEGUV6nFfeXJ6RrUr0Qh2u4jB0KE3Ix%2FvhA9x8AZ1OTVMpLArbtkO%2FLs%2Fa1WtSeoXW2jdF%2BaB7bgzvoh1RQrylFuqks7vWzSIgfegqK7fG%2B9QTcsydBDoia03kBFfmmhTqNK3LrD6JrQu3tD7shil6arsE6OQdQ43irIYt%2FDd9BGa3CRYQSctNxoOENQM2WB2F9sxIAVFyWcouFB1p2g1cJ32TV8qX3rvpwEsp4MOLb08MGOqUBNtlyPZWMGFPFOJPVMgW6eGBWZjx7XxUkX9dqGLsWjtifoeTgIGOJNkMdCxLfnVE3tkvBF23eU1jXB2Je8s4Zcg4%2FqKFQX%2BAmsri6ZtSXR%2F6D19fSqTeo%2FtvjIGURh5xf7pugYmLlZhZBgKL0MiLWmIzf%2F1C0ijAR7q67j%2F1Fe63FJtzUeSWlefZTthiPUbsodzFezxBaIMaPfaoHcqh8GBV6VxWM&X-Amz-Signature=2006e3774e92676516e3798867d46290474855eec56e8c5711c160586faa2ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5LAW5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC6fnPelOaukYrl6ywAy0gFfMmbprQFLlc6mKqdNggl3wIgZtdfFoHni7ZDutjc%2FH4wvzPXAeKy5Fu5E%2FTPpLu1JMkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMPar1YQk7vG%2FN1pICrcA297t6KWtdPDkgLt05Z6jJtZsJOQePTX3%2F3MWvb8vZ3judah1TSwtj0ZbLS%2BZJI%2FGb9JZtsNyP5hghPt5TdEjy%2BQWvk3TPwY2IJL7RzS8eFIx6nmVd%2BmdWKBPZ57V8gH00K7UmMfj2uy%2BLOI7I6nhJ9P2s9NJTagfVCz%2BcCV4w5WyspKbPUpmvwsZJAHQbGMI3NAxT87CkzG8l0ARioT6x7lpsL%2F0goZVxZPROdG2lMEyoqefcTvZ3RCwkLFYk1LIyK4tfjak6NBx8hK3TB1pyayVEJV6IjWy6mdIKlHMa1FBQrcie0CFHh1kG8uWhi7Urew%2B%2BGtbCpXKe6HKv4ggESZZNOUzLZFKia5GlK3RsPC5GEeiMkDGZKwzhymJj07775KbcnnjeCmezv1rWyl36X4brCqEGj9sYXobdwdMBEC8UbYrW8GXhal1kXFdOHqM6OBJwgZ9Urk9kaKl0J7vXsCJeKpocvqSu7omXb3jilAdLQpM4WLf2DJq2uR4DvCSLTU2HeQKYhn9mGMpTPWY%2FS3D8ptIt7yEnaDWzGYEud4QonDXEQ%2BsxBKjPG35B7pkmowGjSgezaJlUggo2Rmb204Cv0n3ol76ag5gybUc9u3imfKXicXepfd68gmMPjb08MGOqUBFq4L6fz8%2BZQd%2F7OcV6Czg0bihfMHrR8mqKVFDnnsa4o2xR%2FnlWYm78VH1TBv91vvGX9IKH5MXMRNmoF0qzljUAEWPN55O11bRsH26lHMtBLxg9ew9WKELrtRg6wT7Jzk%2BD%2BPL7aZc%2BRZIW385xwMezxcELHYotE9mJ2fRd3ML9t5H%2BWc90kx14SLgv2PKVyjVKymtqopZ%2BWD66gx94Wz6S8baDXd&X-Amz-Signature=e1668995e71ef6d1a20d533ca04393b6276f94d459c23a1f082d52262ac94b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
