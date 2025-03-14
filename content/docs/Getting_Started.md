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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=0a46a2beb1ebf117132eeadc93d0f3ce7bf6d50e11c66a942c168e8405fc8e97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=49c8ee6024825c13c01c819660fc3e67b0c4fa41d42c7a07ee6ddcea0346f360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4J5VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6OxOCS%2FA58caOyy%2FMnT9aAYe2kFWYCGTYTO0yO1CkOAiA%2F8h5CR0974y%2B1Ue3zn91PFXY%2FQp3c4tczCvkM7i4UPSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvCFQCL4gtAxB%2Bd7KtwDC94kplugQ0xHYTl7JXAoa8eL5vxVaE%2BxfR%2F1tz%2Bs13ezPgAwVoy8w0Gg6GUT4A2RrbSRY1HjDD7yRGObCs6rd2XIgMAMRirj1TRetuUoqvFfpHbY6SP6QyT9p7HP4UdeJMulViESFXdGCKd6ZwWhCbQHFI8vsp7UpBBJUZBxdHeetz5T4c8d%2BsN%2FYznDhZZFS2QW%2F44ubLWFmX2y%2BFA7NPsYkEyR0VeiMpLmAUS2PFR9zIub3JlDTGO2UBCO1%2Fz9%2F1erUzozagJRQ5g220Dsi97d7cSAWk32p%2FUgVlWoOpFW0BXb4H%2FsihyxC60QyowTAdhe93cZFDUCFMAaJv9Jx4XLn%2Fq4SjQp6BfhDoUPFcTGISeYOVW7I6UQ8R%2BstiAdIUrAXJddIIAENjtOmaS%2BKZdBOsbPYe46Scs%2FFy%2F2g1T5O0EW2f7fO4nAQdwpPs5gksrBHpZBx3HYrEQDASm11AoYU7%2BMnQ4jnSC6tpTeIp%2Fe2KxLzlGuBpNa%2BcjORykUnWjfLYfbZJwj4n%2BNctut9rTAHcgYv9xqUf8B7vxUAj%2B%2FBj3ZNvXNJ9%2B4Tfl3fck3hb4krC76SpZl6QEfR%2FAxWubk0B1BTsrq5nEQrabO3H4OpqR5O9cJ29dqDEIw5MDRvgY6pgG3pYtNqWnyr2jIYwjMJOzoqvBMLbgOQ69z%2BIXp4SmiBmpSt1oK3%2FVnO3YES5cvFabHqWaUpJJb4yZgO16EoFbN7DEgarRLhUtZQNMT03m41tkO9v5TTLFSB6sr%2B602vjfb27%2FdSD1at7QEe%2BSFdq%2BOpylV3FHFUJURjWB5RiFlAipm1Pf9m0OCDwQARzhMJF9%2BuTSWAWH346nBf9JO3rlaqmetfMM6&X-Amz-Signature=b2cbc0f2b3045b1369344bcbe9939977084b38a4042ae9b71a2727d5a28bc6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLDAUWR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxC3uIupAu%2FJAHHqUegbGQwsqoOXJ0PEcnf4NyAUQ0QAiBKAusnxTPrlUYJJfCNvMkHGeSRNYyBzkGXjb3%2F9OpsmiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVYJaxQL2ZeAFxNpkKtwDyt0NO46yyOROmF%2BRqAhBTxwPGoQD7PpnZ%2BEGTNC3ONAwDE6YqS8rMd0znE1qQSTILPFVWZ2hG0mIaXP2RlpCLZ18dEDEubjmhXjbam%2BXrPdU1ZSRHtubJvopZeMdagQxkYLREsUcDuMHebUlmyS1XZu2SbxabWd0EIU5JDZO1hewLaBXSZ1gJPZFxE97CvbV1%2FDEufqD4SOguYpXP6PQbiqPK9Qx8SmlIoyw6NpFnSfZvhnWxxLGgR7gFWVlJqy%2BmpMo5W800mkj2aujFnY%2FwmRXNy7uM1FvnECq3%2Ft%2BxyXxjxexS7sASOBy1EkHKojZXwZo9BLNpAgdL9U9QZ%2BUz2YjPeMh%2Bhbnwk4liMsIoLs5TyyN34nHIhUrkUiEBmDSmqlYP1lZWdqgiLLfkVzL2bmwy87OsrwA9hVDadCn7WmUdquWlUNQfm3h0pnNzlFPT1Vc7hP%2FXhICr4I4dSnJl0ECF8yfQSGs72C9jSwD1BdVF8FNBM3gYXQDLC10YEpdSJ9mDC36VogvOqhPI05700SvgNqkEIsOR33Lbhv45tzrDPf7%2B5Jc2Q3GLkX3dS26uMGP0ofRoHTSGpP2AwQOLTDCDgk4wp62UgO6YNBGfDJkXQdH9U3SgnYRPmIw1dLRvgY6pgGU%2BGGMWojZrHOSqhXLAuELc0VDU1zS7b1uc7ry%2FTOB3HwPF6D52V1BN7odLw9Wg9B01mQi%2FOl04NPxH59aeZhlUGxyEeIf7mdTzZc0fF3fdWvcmbGZqbnhju%2FXNXV6%2FvxKGTdQiX1Pz0pHpj8izTrut8yhXUK0k14iSBqF8XHtRFIQ3lUNP7%2FmpN1mHt7ka6Hy%2FX%2F7APoo2x3UpzvWXtudeikpKcPu&X-Amz-Signature=8189a7f6c0a2b076cedb99234c27ece5ddee37f2c311bcbd2bc42942ce10820a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4AX63U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwTkS2%2FIL%2BcQX5%2FdxZ1pDCF%2FibqtjORkiKb2JEuenEAiEAsBxRnHcxzmjvn5gjWlo2rrWzd5Y%2BF%2BGUnSdKximnfDwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4AW8uXltIoC2tVAyrcA2b7KnZjPvwLDoRxwK2HFbYCC0SyBVO3pNl0NCHK6ZYGpEltvoACXBscgP36wFs7qR8B%2FqCSmSD7GdiEmuCE99wYobmLRmvKxSejb7N0PZq41%2FkZfwUX%2FNIain2pohMcU6p5isYLAOeoQRNnAN%2BX%2Fk0imteWJtvqHel4vn5kwg0fdDeGwA5T245yQUgmubOLtmC%2F7uIYafV8PZiDc1WGkrbtPtBz4VOnmw2DY5Sqd9KfWUzF64dw2qGDcwykKVsJC5tvi2QQqhJNg2dSDEEIHrmtbdSm7Pum8suSOR%2B0lkTPsQMBM2tzOEAmhoGOTcQLaQ39X1r6QQnjI3pDqYPfPw1d6GWRuLATnv83vEokWG2YpW1jGEOrcGcrwPpIhNGizouWyAcY7mQ0Hkiyy4c7HB4ef7bUAvS65pGMaW0Y6t1PdFkqg1GRJYlbeIYr%2BsvSYCsByX1Fne8Y5pK7Rpm6pB6tpHao6mIMJJfDDLcUWh2F3ZisZpZByLqnC41hVPpH2GyWD6f%2B6XdNekSmUjJBrlUOIBXLGB3vxl5b6YgjjQxBDdLe8urxrDaXd54SilYD6z0kCtVVtZJWhlz32jsl%2FdZ1rZNnqs6pkMi3F0lD3T2Yrbpm6VADxFvhw1iiMOm%2F0b4GOqUBhv%2FS6q9cP4SLjpNFhii%2FA6KF0Fn74q9S6fyEP7ye6TgJpeMW%2Fa8EmBQXUVvR2x9vz1ZA%2BzW6zJZH3CyFkonk%2FJQIuH2Q%2FUtmNYM%2F7RuoN79vCZ2vXUWgaTOGNYZcQRaOwShnVptkpKIJyw6KoOQs3f7qnLGQwyHFszpTf%2FSqrRl3O00x3ubNOkGREBAn2XwQEnXj8b9KwvdC6NoqWensWxqPk3KN&X-Amz-Signature=a063f1ae1b88b11fbaee352d230cefde04382deec899eb9f88f4292243a95322&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
