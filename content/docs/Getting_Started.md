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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFGP5BL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDz79s%2F0tp0mMMwcPqrlqsFNYNuqzPb9Dh9wvbiFS6QIgOSrU0401N16WTas3VKZqADKne6S%2FpVS%2FPce39ZyalmYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOySocFs32NwDzfqHCrcA7depdivCW3BS341SiDMvzZ%2B44RRkNww8llnOz%2FmPr%2FmessjBhqSw%2FDVxeaGI0hvil7K8bN%2BeenZAJKQTIt%2F5h3Oy98hPxRNHDhnb2VzZFgt%2BMirToSO7nB5o%2BzfMtFH3WTCy8DkaYg%2Bo91mXufR4E9XAZ40MCfmYv8oOdyf6wWC09brsX7XwkjvdOcM5hSxtw3l1GA6C4%2FRLYeobtMaU1q5lzv0xP7DH6J3QMxGKbD4etFyk%2FHayc7Xu3JRJgQ016UcXOhf65XEg7jpaKLMS%2F3xJhPt7lC5EZuFFYpa88fVMgWgX%2F545ZA9lG93qlMKT1w%2FbxCuWdZ3VQP6Tpvp9g2c%2BhmRsAtBzGmo%2BBC18qOudxi9V30kMrFCUdA5gLMfleHEcPgqviM05feoGkkEUAnt9MHXolA7Ncbj9by584OQhswYAWZLm%2F3sY1ZnmBjDDecRhkdEVzWTWtjYt4oqh7pAl5vC8XqlnGMqzViN%2BIByKjGnTYhyeIoybVlmbswNGYLmHQXmcNBgesEuZRcA19uHqxISlNtrCu8%2B6RH%2B27o53bOW2xHeBSUuYwR79XaGiXkIUmpHiLQM056W7qQqiTnXOq5pkXQ3KRQm7J2MTsFZ2C%2FCmuNsdScxH3jbMPaVz8MGOqUBQ71sovxy%2BTOJ2Xl44GGaU8b45%2FPA6gHYejhZ7HOs0p8UZ%2FtgtmJR6KrhHKtDKebYavmhu4JEIU8%2FVRJ4NqnFlYjF%2BuHe25Z3Ch46fsnGcgO0uAAApdj8qlV0%2BM78I4fdMYe6Vayi6ki%2BwGpbC%2BuV72nXyn2g3DsecU3gE3AXr9omsm%2BYkSamkPtLdbv3LsMsK%2F9hTo4AoHZZaaBbWEeqP5jS364t&X-Amz-Signature=55e7d4c877fbd813ad09f813bfa60285ce049c4e332af8fafc246f818dff2aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFGP5BL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDz79s%2F0tp0mMMwcPqrlqsFNYNuqzPb9Dh9wvbiFS6QIgOSrU0401N16WTas3VKZqADKne6S%2FpVS%2FPce39ZyalmYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOySocFs32NwDzfqHCrcA7depdivCW3BS341SiDMvzZ%2B44RRkNww8llnOz%2FmPr%2FmessjBhqSw%2FDVxeaGI0hvil7K8bN%2BeenZAJKQTIt%2F5h3Oy98hPxRNHDhnb2VzZFgt%2BMirToSO7nB5o%2BzfMtFH3WTCy8DkaYg%2Bo91mXufR4E9XAZ40MCfmYv8oOdyf6wWC09brsX7XwkjvdOcM5hSxtw3l1GA6C4%2FRLYeobtMaU1q5lzv0xP7DH6J3QMxGKbD4etFyk%2FHayc7Xu3JRJgQ016UcXOhf65XEg7jpaKLMS%2F3xJhPt7lC5EZuFFYpa88fVMgWgX%2F545ZA9lG93qlMKT1w%2FbxCuWdZ3VQP6Tpvp9g2c%2BhmRsAtBzGmo%2BBC18qOudxi9V30kMrFCUdA5gLMfleHEcPgqviM05feoGkkEUAnt9MHXolA7Ncbj9by584OQhswYAWZLm%2F3sY1ZnmBjDDecRhkdEVzWTWtjYt4oqh7pAl5vC8XqlnGMqzViN%2BIByKjGnTYhyeIoybVlmbswNGYLmHQXmcNBgesEuZRcA19uHqxISlNtrCu8%2B6RH%2B27o53bOW2xHeBSUuYwR79XaGiXkIUmpHiLQM056W7qQqiTnXOq5pkXQ3KRQm7J2MTsFZ2C%2FCmuNsdScxH3jbMPaVz8MGOqUBQ71sovxy%2BTOJ2Xl44GGaU8b45%2FPA6gHYejhZ7HOs0p8UZ%2FtgtmJR6KrhHKtDKebYavmhu4JEIU8%2FVRJ4NqnFlYjF%2BuHe25Z3Ch46fsnGcgO0uAAApdj8qlV0%2BM78I4fdMYe6Vayi6ki%2BwGpbC%2BuV72nXyn2g3DsecU3gE3AXr9omsm%2BYkSamkPtLdbv3LsMsK%2F9hTo4AoHZZaaBbWEeqP5jS364t&X-Amz-Signature=2d2dc85aca8169a3fa4960001fdb413f43de1cbb2864943dd9a5e16c560a28aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFGP5BL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDz79s%2F0tp0mMMwcPqrlqsFNYNuqzPb9Dh9wvbiFS6QIgOSrU0401N16WTas3VKZqADKne6S%2FpVS%2FPce39ZyalmYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOySocFs32NwDzfqHCrcA7depdivCW3BS341SiDMvzZ%2B44RRkNww8llnOz%2FmPr%2FmessjBhqSw%2FDVxeaGI0hvil7K8bN%2BeenZAJKQTIt%2F5h3Oy98hPxRNHDhnb2VzZFgt%2BMirToSO7nB5o%2BzfMtFH3WTCy8DkaYg%2Bo91mXufR4E9XAZ40MCfmYv8oOdyf6wWC09brsX7XwkjvdOcM5hSxtw3l1GA6C4%2FRLYeobtMaU1q5lzv0xP7DH6J3QMxGKbD4etFyk%2FHayc7Xu3JRJgQ016UcXOhf65XEg7jpaKLMS%2F3xJhPt7lC5EZuFFYpa88fVMgWgX%2F545ZA9lG93qlMKT1w%2FbxCuWdZ3VQP6Tpvp9g2c%2BhmRsAtBzGmo%2BBC18qOudxi9V30kMrFCUdA5gLMfleHEcPgqviM05feoGkkEUAnt9MHXolA7Ncbj9by584OQhswYAWZLm%2F3sY1ZnmBjDDecRhkdEVzWTWtjYt4oqh7pAl5vC8XqlnGMqzViN%2BIByKjGnTYhyeIoybVlmbswNGYLmHQXmcNBgesEuZRcA19uHqxISlNtrCu8%2B6RH%2B27o53bOW2xHeBSUuYwR79XaGiXkIUmpHiLQM056W7qQqiTnXOq5pkXQ3KRQm7J2MTsFZ2C%2FCmuNsdScxH3jbMPaVz8MGOqUBQ71sovxy%2BTOJ2Xl44GGaU8b45%2FPA6gHYejhZ7HOs0p8UZ%2FtgtmJR6KrhHKtDKebYavmhu4JEIU8%2FVRJ4NqnFlYjF%2BuHe25Z3Ch46fsnGcgO0uAAApdj8qlV0%2BM78I4fdMYe6Vayi6ki%2BwGpbC%2BuV72nXyn2g3DsecU3gE3AXr9omsm%2BYkSamkPtLdbv3LsMsK%2F9hTo4AoHZZaaBbWEeqP5jS364t&X-Amz-Signature=bef892fb463e0b001b8f56b503a435ae393390f0a02c0e42ab3628e56e2e433c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XFQCZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm3WSMgksdumdLE6EvqU3YQSvBY0ur3G8vcKjTM3TBvAIhAMvTpAxyi8A5zkmM58tIQHj4vSOiVWLLKdlTUFjptXlJKv8DCBgQABoMNjM3NDIzMTgzODA1Igy4C4EOJ%2BRJxhkpQPIq3AOKS2U0mDY1%2Bw2PXCe3XpiQAV3wZie3e5C1iUQi7OGDjKozwthqJLR2LKWfiONcxvg2B9aQe77EAAzsH8x%2BRPSFXzjK1D4ydEEvYG8HV7c2QOvmf9JRHynX6fDRbaXcIp6qY35ckDo4JVL%2F1BrFXayuOAJ2FEmkC0hfGhuPPkHzj4RdqtBrY347gWExUZk6IZubA91gWyRjwtH9Fm2BNUb%2FPECDG9dFM4cmO3YCG2fd7wK0TxwGIvQyb4DgSImOG%2BRy2m91cKV4gJ6E813kQE40bY4G7QHJmf1YLNFkPqeMZ0wbuQFnlc8cULN%2B21wBWaOvlhGZ2eP%2B%2Bh79wI8wVCYx9F89YDP3vfhqWaSqyDISFRwQyR6aVkOiW92QSSRc%2FBmkufGxxEbqfYDUMFtkVLUA4fxwKtgr5N3jqpSY3jAnExi3ahDp%2BuBf04q2NSvuXZ9efKMi1sYjyfWnOtX9be8yQeVRVbxyI7Sz%2B5vN5ororLzEXyWcmR9q3hPJj4K50ZrUw2O6imQcEauOp82hOnBEr1HiACqgQKMCDjfQgyEqrCXCStU0mJb63Yi1aj1zmOK0vyJJ5yHPjLH0MlaH3mbazn2kbR6C84CS141bB4Vl7HM9b%2BMU0eFNHAyvfzCyls%2FDBjqkAbe2b53TsVPRovuqqFT0wZsRAa7JpoUCYOAm6RsRynZVOkErrzpHG19Kp%2FlfVRMYCXlbWw1cMH6jPygkSKgAw8%2BfYFyu7KcvfJ7owZrGqk5KhT4umo8zd%2BNrAMm4N9ez0aO99JVZefOHlxFvBOd8pUOFnTWv1UuqMwUTaUaW2nEt0CPLXpD8qgRhedUWUBBAQOue%2FTuI8rX4sFC0Ux%2B8DPGZ7Tnm&X-Amz-Signature=28e1bc6599f7025241387a6f830dd4ce645836eb3536ed921210ea017e2f987d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3YAXLL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4PaDylA0dqEplBQkRfGAnipbjgh%2Bz0ZnLLf9eFzTicAiEAqI9ecIi0VtW3h6KXn3uuPtWh9%2FiAUMSQ5%2BFjLRFPZtMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGDkNCdgWGD26iq6HyrcA1Q5aOTgHWHIC0q3zi5GH8OzE%2B%2FslZZw7LkRZHy1YaxPNirHeqAoMy6EQHkjJxdGVxMYPvUa7wN39VuzQn2q2ghvQLFrax2czoHAcoSXED79nUZiQLd3N%2BXulthPWCutWr49pTk%2F8l090k3JbwP7GLDOAxLGJ%2ByDEsQ0s%2FnfKikXS6xNYaOlFgAhNPmowFMaDpSgnMTXBXco8JQMG%2BXkQpFEsuFpP0iUw%2BK9Czj%2Fw8LlKhi4uP6YoL5zX6xFefmv%2B457CJh51jI%2FVwsXdpXasqmTz0%2FEapDYb79A17%2Bo87soYGMvfIEvZlwLqFI1Dg%2Fibqsr2tBEAcbTT1tsAtqxswDcWvDWvps0uHrpl8ORF7jATCQXlzsQviDCESzbDJajpDSYpjFOGYu0393zCPv%2BvWj1W6n4pGm2X2ktJH0jtClkzGt2JoE73StHTOkJx2aoWIdC2uCRRwbhecn53wJdrzUY6fssNNACNdh0%2FjLDzdVVohTr77uQExUburj0hO42CygfYBCROUMf3WmGSS0K654PCWiRgceb2HhIp6kCMIsRGzbRLAOYdK%2BWexrdmbuh4EQrgYb2yiXKLP0nKmPtZSuvNxOEMcrnqeySLV%2FMv%2FKZ8D9O3q3IUcKag54IMOKWz8MGOqUBbVyGQQxM96NodSkHIqfFRbFG731shG3qYBz4xyoWySKgkP7Ps3HgAcg6OOym%2BtQrPy%2BBmTBwwX%2BB5ck%2BK%2FykaCoVNO%2FCwcdoAaaJPjOUYQKv5Np6F4xbmCFL6Aij9F1V0AV%2FKzGQ7%2FYRx54s1qIzf6U4AULCTszpF2auP5PTXJ1qTLxJ3N2yOZvd7KFvQ1NGxGoeny%2FRZ7Ib1agB12mw21JtXE7v&X-Amz-Signature=db73f8d5f86d6c9f41ce8f1f8c3f5e1442542e804401ff5f431b146077e66b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFGP5BL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDz79s%2F0tp0mMMwcPqrlqsFNYNuqzPb9Dh9wvbiFS6QIgOSrU0401N16WTas3VKZqADKne6S%2FpVS%2FPce39ZyalmYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOySocFs32NwDzfqHCrcA7depdivCW3BS341SiDMvzZ%2B44RRkNww8llnOz%2FmPr%2FmessjBhqSw%2FDVxeaGI0hvil7K8bN%2BeenZAJKQTIt%2F5h3Oy98hPxRNHDhnb2VzZFgt%2BMirToSO7nB5o%2BzfMtFH3WTCy8DkaYg%2Bo91mXufR4E9XAZ40MCfmYv8oOdyf6wWC09brsX7XwkjvdOcM5hSxtw3l1GA6C4%2FRLYeobtMaU1q5lzv0xP7DH6J3QMxGKbD4etFyk%2FHayc7Xu3JRJgQ016UcXOhf65XEg7jpaKLMS%2F3xJhPt7lC5EZuFFYpa88fVMgWgX%2F545ZA9lG93qlMKT1w%2FbxCuWdZ3VQP6Tpvp9g2c%2BhmRsAtBzGmo%2BBC18qOudxi9V30kMrFCUdA5gLMfleHEcPgqviM05feoGkkEUAnt9MHXolA7Ncbj9by584OQhswYAWZLm%2F3sY1ZnmBjDDecRhkdEVzWTWtjYt4oqh7pAl5vC8XqlnGMqzViN%2BIByKjGnTYhyeIoybVlmbswNGYLmHQXmcNBgesEuZRcA19uHqxISlNtrCu8%2B6RH%2B27o53bOW2xHeBSUuYwR79XaGiXkIUmpHiLQM056W7qQqiTnXOq5pkXQ3KRQm7J2MTsFZ2C%2FCmuNsdScxH3jbMPaVz8MGOqUBQ71sovxy%2BTOJ2Xl44GGaU8b45%2FPA6gHYejhZ7HOs0p8UZ%2FtgtmJR6KrhHKtDKebYavmhu4JEIU8%2FVRJ4NqnFlYjF%2BuHe25Z3Ch46fsnGcgO0uAAApdj8qlV0%2BM78I4fdMYe6Vayi6ki%2BwGpbC%2BuV72nXyn2g3DsecU3gE3AXr9omsm%2BYkSamkPtLdbv3LsMsK%2F9hTo4AoHZZaaBbWEeqP5jS364t&X-Amz-Signature=9fb314e4cc938a987f0ca6883352d9c812503dae9c25d4435869d71775888c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
