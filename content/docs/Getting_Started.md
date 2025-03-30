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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVRC733%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD6EQS3TtB%2FAO0GeUE5jECXRAubsrKnxnmZwnZlsPjtgQIgYGbmNf9FwQ%2FHaje8ASeC8ZhfOEkzY4SJOq5xOlEb0tEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXfO7DWyXgaFSs6LCrcA%2Bgx6NEmHtIJDn4Y90yqfGgH2nWNfdTgSLRb3T1Q1SSa1xJQM%2BvFeGxLkGgoqGkkVOYJHcbpzyVkDFBrTJQSL%2B8iQhZJapitFbiVTxi9CyRwEpZXLmh54jybWlccmF7M95Cb00%2FkJYY8Dt6dMmvYoW%2B0xeKxyM4ZsASJ9lugf3ztHUkF1UDrEYU7ojNMtpVkDl2o4orDcvPiQSlRQgYLMW3k1shal5TCTTCT1gWyg5R7WXIXddJhbD8R5N6Yy9qLUXQMRFbTv7WYhbDRT5fOmMVsT09ZZpKwyn6LDukrZRjYbIfrcQDv%2FCM33dwge4EUOumFYpDiRJiqcOX6X%2BQ7VmGtKvyomeDP%2FyakZW4tDPsJMlwvmfgpdZByA2UhU0BrkfeZwrFYTXOdvKdrAntKTcxiWHwnm9ePvlF8GP1TKAjVgR8236SLLVUWxeN4R2VpQ2IjJ5HFFw8xyHAC%2FYMJ8flKyH0BpwyGGhMUct0vK5MVHl3IPdgvY2oYWQYytr0%2F%2BZsRQOZdEvkxjVlQytiehnQZ2is5jczCuFOfu9nEIn4wLTBd%2FQU0SCG4jAQNo88MG6QAL%2Fw2xmZulvMPsM2uX0MAddMnOgIJ63YD%2BxmSKHxUkWZ9Q6Ym7WKdtSp2MJvwo78GOqUBEl%2BRNs9O4%2B6z9o0BihUiv1qwfJMPqiaXv3YRlsYZpl7wKX1%2FLLVJQTvMXLf6mNceNSaH79Bf25fAu8KZm1btsaqCRbJd57Mugf4MvgBAs8q9CARVlyX9A4IpXdOfNgqzcTdnsKd%2BNxNZ%2BTyA6dmOmJa2NBTQvLshyMAdfSDPtneyTUbA84q3Zz8j%2Bn7Rn2dRG97Wv56Yw0m%2BAHjxdZxBWkBjRc%2Fn&X-Amz-Signature=887067234927c1f299015e9d0b957a66278ed844db6de190c602e413a024c31b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVRC733%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD6EQS3TtB%2FAO0GeUE5jECXRAubsrKnxnmZwnZlsPjtgQIgYGbmNf9FwQ%2FHaje8ASeC8ZhfOEkzY4SJOq5xOlEb0tEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXfO7DWyXgaFSs6LCrcA%2Bgx6NEmHtIJDn4Y90yqfGgH2nWNfdTgSLRb3T1Q1SSa1xJQM%2BvFeGxLkGgoqGkkVOYJHcbpzyVkDFBrTJQSL%2B8iQhZJapitFbiVTxi9CyRwEpZXLmh54jybWlccmF7M95Cb00%2FkJYY8Dt6dMmvYoW%2B0xeKxyM4ZsASJ9lugf3ztHUkF1UDrEYU7ojNMtpVkDl2o4orDcvPiQSlRQgYLMW3k1shal5TCTTCT1gWyg5R7WXIXddJhbD8R5N6Yy9qLUXQMRFbTv7WYhbDRT5fOmMVsT09ZZpKwyn6LDukrZRjYbIfrcQDv%2FCM33dwge4EUOumFYpDiRJiqcOX6X%2BQ7VmGtKvyomeDP%2FyakZW4tDPsJMlwvmfgpdZByA2UhU0BrkfeZwrFYTXOdvKdrAntKTcxiWHwnm9ePvlF8GP1TKAjVgR8236SLLVUWxeN4R2VpQ2IjJ5HFFw8xyHAC%2FYMJ8flKyH0BpwyGGhMUct0vK5MVHl3IPdgvY2oYWQYytr0%2F%2BZsRQOZdEvkxjVlQytiehnQZ2is5jczCuFOfu9nEIn4wLTBd%2FQU0SCG4jAQNo88MG6QAL%2Fw2xmZulvMPsM2uX0MAddMnOgIJ63YD%2BxmSKHxUkWZ9Q6Ym7WKdtSp2MJvwo78GOqUBEl%2BRNs9O4%2B6z9o0BihUiv1qwfJMPqiaXv3YRlsYZpl7wKX1%2FLLVJQTvMXLf6mNceNSaH79Bf25fAu8KZm1btsaqCRbJd57Mugf4MvgBAs8q9CARVlyX9A4IpXdOfNgqzcTdnsKd%2BNxNZ%2BTyA6dmOmJa2NBTQvLshyMAdfSDPtneyTUbA84q3Zz8j%2Bn7Rn2dRG97Wv56Yw0m%2BAHjxdZxBWkBjRc%2Fn&X-Amz-Signature=b61c7e17dddc5c39e68dc51b28228919e3c9ad2b1bb397ca03a00d55b67948df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JU3F7T2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICCI9fg8QsWRMQA7ez8hv6dh00bwhMJ2q1Df5onbcnfoAiAKD0AaAzljDMcvrV2x0cGNQrVU%2FLL%2FhDuwsUIvRyjkbyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMatg7POshjQZbLzyIKtwD2icyM1%2FgCnH%2B%2BGylM03M049kuEGAiSXnoUCLF2fP5TTq1uvHXozixNSeHiTExAWTVQZ2BtdacgeH3BWrEd5dwgXphfsTJz8yZ4i31pQ8KHSpMKcdc2trj7LC5OxrskBYw16F9NvMPNcp2oZX87XmpVHOP5Ci%2BfQaBsVlTV2k0urk%2BScZfv%2BXumjJFQ%2FyYJo0BE10cFSLIeLu8ivspN8wxiKPj8iwm6PjSIzz4qBzA9iHt16t89RYrzAQ%2Bn1EvQwlpXd53mn%2FroJxzMltXXSrQrHxHulJ9Ls7sQ2UZcvv4bPMiazvbUJVza371e7XSHlyWA7WX5V240gVe9cDFmebT9U%2B00pqmzgv4q0%2B6DD%2Fbl8UfOhG7tN7fdudlQRe5h9%2FUzEB%2Bn3ld6VJyg0v4d1dBB2c8YLcgk9cd%2BL7kR9MN1heelDkA1PQvisYIRcvD134NuHmJuaTJ3LVGmjRc%2F8IbbXxGMsEZwxHBQSQyDWYVNR51PEnSSlex3rQ1yFfbqqjCg1BG6NAyas%2BfBQee6Kp7Yyh3zSkJ8QqGMg6OSaz5mH6X7NhGvApIaNwQlKFvHT5t5MsOGfvwRDIgmmF6NsTk7h%2BnKCkl%2F7XJgeJdt0%2FWLTsM%2BTDhu%2FG1sTShWMwgfCjvwY6pgHhD9SYoCMEpfldh0xzcbxcEL1fKDjQx0t7Oa9BLCKlqrJ4P%2F2LkhfMNQKhhHpuuA7JMYFXaJfp2R98pogU530sC3hpK%2FAqPH4KbDZ6dMel%2FQmF111DlhyRG7Ku%2FNZZucxMKQUoTckIHCPlmsObdUK48s2wT1SIIArlln1VdtxfVi833IQ1GTPByj0YO4qeMA81s0hygota0Y7YM%2FT9MhAc0uCeX3pg&X-Amz-Signature=aebff90f99767814758a1f4f65a735a7226268ef37711e8372c9013b327a855e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBQE7VJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCzTLhRm9cHZ4Z%2B4e2aTxZk%2F0T3C622NFlTGly7nUslAgIhANXOGzqoMoa4k%2FXPINyZ6sKX3MZgl89sXmoe5P6TfEePKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx97nUR8GeLA5WfRMUq3AN4r%2FAgoy9gRQFrcPtTrjZaUQqdxPonamq0q081fExXQ%2FRlr2wFiHMYlIHheG6HH7P2xpt%2BrUiBBmfEO0eSGcDeABgp3EhPf0ofNr2UzpDCIeRQ6uWE2I09F21ij%2BNugM0vysMzbKZ0BJRFylNf5PRTYhKzCIV7ELNAlvEay%2BDXLwlcxi%2Bz5wIOG8w6fbNYksPNUPfxuV2TYFBrJfqiEjj%2F6Pv9ENW04AjfYXiAKCPhwKjBaXp6puzBv8uGhuIki7pVHQRuw%2B8A%2BygfdcrHqYeNJD%2BAg7nEXnpUQpoZ1aEXgBGdwoZS4zniG565pd%2B6zPrxyBPeRyRFSde8%2BiHfprqrEjA%2FMOhvalb6txHTTmB4BvMQ7sDfubPDOUCdpZUK07o5P0Ady%2F9jABSB%2B2dHHiXpsZXvtSncWV7smED7%2B1wdDRWHdR8opjBmlWne%2FzdauI8jLl6zVoXfULpAhCO5QN3Da187liIwMMAE6UqtzLbx9ZChkZ35P2j3fAblaEOk%2BRz4ZJ%2B1ap%2F5eFhFAoWiRdG0gNR9KucOqknm2kTUjIAUG5eP%2BYJLLWDFaCE1UKAN33JY3Bhwk4NomTH1grZmzU62MYAHSeeNWvUxLF4kYEgVm65pL9HU53ZXaNHxWDC376O%2FBjqkAc2ZHPnrIoJYnw6lBz90dEWLqkB%2FX1i2EsO8QjBK4kNEbe8XYbZOjVz3TxSSFwHB7WgN36APcg4B7BGDw%2Ft%2BEcmdpRhO%2Ff%2Bf2gOVdw89tlGl00JtmQgeS0oHONK6RBxcVJPYArEGOPAakALscFd1RQg2Wb6ckVPif55dbfqfsmkoPoE0EQ0pN2KdKGb23TNLBr%2BhrPeWZgvFilvZ%2F%2FFNLh9PKxA4&X-Amz-Signature=c804a13bede8f5ac093e760f293d6464d95494750cc60d29e5e528d1ad226491&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVRC733%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD6EQS3TtB%2FAO0GeUE5jECXRAubsrKnxnmZwnZlsPjtgQIgYGbmNf9FwQ%2FHaje8ASeC8ZhfOEkzY4SJOq5xOlEb0tEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXfO7DWyXgaFSs6LCrcA%2Bgx6NEmHtIJDn4Y90yqfGgH2nWNfdTgSLRb3T1Q1SSa1xJQM%2BvFeGxLkGgoqGkkVOYJHcbpzyVkDFBrTJQSL%2B8iQhZJapitFbiVTxi9CyRwEpZXLmh54jybWlccmF7M95Cb00%2FkJYY8Dt6dMmvYoW%2B0xeKxyM4ZsASJ9lugf3ztHUkF1UDrEYU7ojNMtpVkDl2o4orDcvPiQSlRQgYLMW3k1shal5TCTTCT1gWyg5R7WXIXddJhbD8R5N6Yy9qLUXQMRFbTv7WYhbDRT5fOmMVsT09ZZpKwyn6LDukrZRjYbIfrcQDv%2FCM33dwge4EUOumFYpDiRJiqcOX6X%2BQ7VmGtKvyomeDP%2FyakZW4tDPsJMlwvmfgpdZByA2UhU0BrkfeZwrFYTXOdvKdrAntKTcxiWHwnm9ePvlF8GP1TKAjVgR8236SLLVUWxeN4R2VpQ2IjJ5HFFw8xyHAC%2FYMJ8flKyH0BpwyGGhMUct0vK5MVHl3IPdgvY2oYWQYytr0%2F%2BZsRQOZdEvkxjVlQytiehnQZ2is5jczCuFOfu9nEIn4wLTBd%2FQU0SCG4jAQNo88MG6QAL%2Fw2xmZulvMPsM2uX0MAddMnOgIJ63YD%2BxmSKHxUkWZ9Q6Ym7WKdtSp2MJvwo78GOqUBEl%2BRNs9O4%2B6z9o0BihUiv1qwfJMPqiaXv3YRlsYZpl7wKX1%2FLLVJQTvMXLf6mNceNSaH79Bf25fAu8KZm1btsaqCRbJd57Mugf4MvgBAs8q9CARVlyX9A4IpXdOfNgqzcTdnsKd%2BNxNZ%2BTyA6dmOmJa2NBTQvLshyMAdfSDPtneyTUbA84q3Zz8j%2Bn7Rn2dRG97Wv56Yw0m%2BAHjxdZxBWkBjRc%2Fn&X-Amz-Signature=22830ea39e512af1d7b37966bffef9ccd6ecb5a710b68f771fda6aea135105d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
