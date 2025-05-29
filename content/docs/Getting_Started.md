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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTOMJZH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5P2lTR%2F3vJeySvbGpP99Qx1Rbw6AG%2F%2FHngI%2FVgM%2BoAIhAJ%2F4BsFdAI73rlmO04BRfmFGP7Nj3kqN5IZcK1wJ%2Fm4CKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyivGWeA4eiG0wdRNwq3APcNBR2EkA2DYjM7Ys6Df5G66pe3FCYY51kA3wtPDMvGFgbaIigPplUYDLazMjXChkY8XS8yRUw3%2BHIoadrTqIgDwC2I710zXoP6MqL5xs%2BKglsMNSIvdgXCxVLYvrEXKvGH0kak8r9PEIklNlpOqX2%2BJ%2F9KGW5utad5KwMd8xnnd2WlMie2tMh5xEImrBZLP2kxgfL9DlbASlZoc0gnoulthP9lD3%2BSCJcbTipK5VgUqOpIZczmqshMAJkJtONx9hPu2FxhmZj1sQoHnMoFmi5ltei1Qp7QsPWeiQ4OgbhDjDOP3H%2FsNl3DA%2BnvX1ygGRT1k%2BfVxTCFl3tciKeCQ2Ia6k8BD7zVwGjUPSWRrgjO0Mj7Q0AqZV2prF9YikNCotTw8k0hlTqxSQsAGICSp4ksnGRgimcrO6m1kg9feMEN%2BRy0gJcKTz60u1L4xf4QHniaeSssvtuea6eP7X%2BEpfX%2BRYm%2BqNosywQvuMxh4geoE1iNi7QoL0GUUsDBSQEoOhNjCeaPLvfpvUzUcjP6ShcVQiE0qZYeBYIQdKM7iJON5TZ71H6wrY1CCAHhowSNiIvSxNTwJZU2MADMybiyxBlRwXouFDzE%2BXWvvSaWlCbavwJw8ECl%2BSOXGJyDjCN2t%2FBBjqkATFeqX2rGpYYLpHp2tgbxp3x0qtTe47tYWt3hbgEKkpOXFod%2BkAvz1%2F%2FelqRxKLrN5XG2gP%2BieIjN9E4cM13YJXaZJK9andA5GM2tm4r80dwvM%2FjsgNmf%2F0VNUNp04UN%2B4CigmfsI1CIUrIYgw19E9T51PnWJWt%2F600ncmtJyc6o1brON8MxAkcIyZb7HR8emwRSUrMdHhMe2T5CM%2BCPf%2BVQ3e4H&X-Amz-Signature=25629210469266f9463066a6e6f85074c97d8113c567b67baf01dc35ee6ba3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTOMJZH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5P2lTR%2F3vJeySvbGpP99Qx1Rbw6AG%2F%2FHngI%2FVgM%2BoAIhAJ%2F4BsFdAI73rlmO04BRfmFGP7Nj3kqN5IZcK1wJ%2Fm4CKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyivGWeA4eiG0wdRNwq3APcNBR2EkA2DYjM7Ys6Df5G66pe3FCYY51kA3wtPDMvGFgbaIigPplUYDLazMjXChkY8XS8yRUw3%2BHIoadrTqIgDwC2I710zXoP6MqL5xs%2BKglsMNSIvdgXCxVLYvrEXKvGH0kak8r9PEIklNlpOqX2%2BJ%2F9KGW5utad5KwMd8xnnd2WlMie2tMh5xEImrBZLP2kxgfL9DlbASlZoc0gnoulthP9lD3%2BSCJcbTipK5VgUqOpIZczmqshMAJkJtONx9hPu2FxhmZj1sQoHnMoFmi5ltei1Qp7QsPWeiQ4OgbhDjDOP3H%2FsNl3DA%2BnvX1ygGRT1k%2BfVxTCFl3tciKeCQ2Ia6k8BD7zVwGjUPSWRrgjO0Mj7Q0AqZV2prF9YikNCotTw8k0hlTqxSQsAGICSp4ksnGRgimcrO6m1kg9feMEN%2BRy0gJcKTz60u1L4xf4QHniaeSssvtuea6eP7X%2BEpfX%2BRYm%2BqNosywQvuMxh4geoE1iNi7QoL0GUUsDBSQEoOhNjCeaPLvfpvUzUcjP6ShcVQiE0qZYeBYIQdKM7iJON5TZ71H6wrY1CCAHhowSNiIvSxNTwJZU2MADMybiyxBlRwXouFDzE%2BXWvvSaWlCbavwJw8ECl%2BSOXGJyDjCN2t%2FBBjqkATFeqX2rGpYYLpHp2tgbxp3x0qtTe47tYWt3hbgEKkpOXFod%2BkAvz1%2F%2FelqRxKLrN5XG2gP%2BieIjN9E4cM13YJXaZJK9andA5GM2tm4r80dwvM%2FjsgNmf%2F0VNUNp04UN%2B4CigmfsI1CIUrIYgw19E9T51PnWJWt%2F600ncmtJyc6o1brON8MxAkcIyZb7HR8emwRSUrMdHhMe2T5CM%2BCPf%2BVQ3e4H&X-Amz-Signature=a068e705d0fac0aca79cb5a9a20ef820351f16b5a51845c457dcb3814cb8001a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTOMJZH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5P2lTR%2F3vJeySvbGpP99Qx1Rbw6AG%2F%2FHngI%2FVgM%2BoAIhAJ%2F4BsFdAI73rlmO04BRfmFGP7Nj3kqN5IZcK1wJ%2Fm4CKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyivGWeA4eiG0wdRNwq3APcNBR2EkA2DYjM7Ys6Df5G66pe3FCYY51kA3wtPDMvGFgbaIigPplUYDLazMjXChkY8XS8yRUw3%2BHIoadrTqIgDwC2I710zXoP6MqL5xs%2BKglsMNSIvdgXCxVLYvrEXKvGH0kak8r9PEIklNlpOqX2%2BJ%2F9KGW5utad5KwMd8xnnd2WlMie2tMh5xEImrBZLP2kxgfL9DlbASlZoc0gnoulthP9lD3%2BSCJcbTipK5VgUqOpIZczmqshMAJkJtONx9hPu2FxhmZj1sQoHnMoFmi5ltei1Qp7QsPWeiQ4OgbhDjDOP3H%2FsNl3DA%2BnvX1ygGRT1k%2BfVxTCFl3tciKeCQ2Ia6k8BD7zVwGjUPSWRrgjO0Mj7Q0AqZV2prF9YikNCotTw8k0hlTqxSQsAGICSp4ksnGRgimcrO6m1kg9feMEN%2BRy0gJcKTz60u1L4xf4QHniaeSssvtuea6eP7X%2BEpfX%2BRYm%2BqNosywQvuMxh4geoE1iNi7QoL0GUUsDBSQEoOhNjCeaPLvfpvUzUcjP6ShcVQiE0qZYeBYIQdKM7iJON5TZ71H6wrY1CCAHhowSNiIvSxNTwJZU2MADMybiyxBlRwXouFDzE%2BXWvvSaWlCbavwJw8ECl%2BSOXGJyDjCN2t%2FBBjqkATFeqX2rGpYYLpHp2tgbxp3x0qtTe47tYWt3hbgEKkpOXFod%2BkAvz1%2F%2FelqRxKLrN5XG2gP%2BieIjN9E4cM13YJXaZJK9andA5GM2tm4r80dwvM%2FjsgNmf%2F0VNUNp04UN%2B4CigmfsI1CIUrIYgw19E9T51PnWJWt%2F600ncmtJyc6o1brON8MxAkcIyZb7HR8emwRSUrMdHhMe2T5CM%2BCPf%2BVQ3e4H&X-Amz-Signature=5c0bb2fcbe04f65a04ba0e88389308a8307b59b5d22ccde4e0f6f36329bc24e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AWCZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZeydP%2BVyLOm4iQSTs9xGXBk8qNDHjguXscC8B4U0yXAiEA%2Fgi2EHMQo6GcFdqOua23YazMQwUMXL6aWYZ0J7Ye0PUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ1sg87BnBcoFYuHircA8TYbEaWEnmdEGE76DV3aeeNwKJAFLn%2F3rDH9sH2oE6tuK3nIO3bI00zC8UA9aFKgzuDgRK6C4%2F1Nq3wOHfvklT9Qe4HEZUKdVcXkPl4Fk9%2BQflDM3Qxn%2BU1W%2F%2BCw2DlqAaqfXpAv6pVhE3HbpNr8ylHBq1wtsivVQARFHW4Y6v2QmhCvyQIGZyXDHcCqkj18owfsdBrWBB78F%2FJnrFiccpmosD4vsYjA9IzJUMkmf9pRxqXcqoJPxrdNYnQRtbm%2Fhq424NNn3RIzQVdbpiSG4ytk7y7GWTI%2FUFv9rNhWDrkCcGMlG2pvY7o4w%2FHLHztUqZuBQc6lGou87SVcGGYSuwXob42lAB7qWz9y8BDs%2B47HL8CL0imDYVDooPWtlAqqBBoUlelDulV6iRz%2BNcsPkmv%2FsvqVE9GqFFJZhWbj%2BHrPNGufYoI49zg%2FBceY0bwqIXUffO0%2FUy4L01pHeH%2B0JZYajxv%2B%2B05kZAQf09BS%2BjNeAwWcxW8C8b2QBFPU2VNJJbxelaiJkjRlqlcOvRfsv7nPpnKrsH9e0cUEAJHGXTHlBn0Q2KI%2BqXNmW00tCFAT%2FXCaFHjK8I7WITDvkkGK%2BWZkqW%2F447VbxGfcivPW6oGJXdZf8EMa7xZ6O%2BBMIDb38EGOqUBfZuNC7XhyyPg5mNMQXsGBX8AVh1BJvfoBGY5fhYhb%2FsTuB%2BDAZUWdyEA0m637vEciHwELdRTUADm1jcJxQtVLuStjqA4Xmr0bMTl2tmG5pYRhrJH8YoP7bgYWZa75mgOb8lVXSkI8%2BfFkHIfCGikkKopQG2EBIVNHOLwp0q1mDh08mKZ2W1Y8V5X5bP%2FSDMg%2BwDkS9UIfNJPr3qwghOm28LX8jRl&X-Amz-Signature=c5899c8b00c6c28e215de849855105aba5ee29581075a19914d6479e7438110e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPNPO35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcfi1CJ7qfRigkY1lgE8NkLQaBb4UoH5wZNAARKZX6awIhAPGm81cdpMfxwkFpl4K5R9Ua3mFq55iaoJhJwv3dYiGYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT4sBKUb%2FNEbUFrlYq3APwP3iH%2BqXYdP970evyAd7yPYO%2Bo%2FF2h8YvFwL4OPJhhJyoTeOYUKPu7VS3WTFju3%2B33yzWjAgCorDtshMJwIjLArOZ2Ro4tfKpjAW2C0K8HrC7p0yfr7v%2FMFD%2FexN9kzAm9LZQBZFcCw3XNGPWjmmGnHFkpSkQEykzSzCCzC7bQqXVQlcbMpoKhKZMUZj2HKIM3zL%2FHWMn6Q6m2X0lXYlxxqu%2Bl1HxsQtdIzEtEgwdFLJEW7kIc1W1UgpuxQ2m1i2uD4cCwPgOB1juSW1PgL99rlbdpW7t%2FcsfBpCNzJ9pGhlFDBF%2FDUIznmfpNftxIFkKvlG8cPBEujYWazJruw4GQuA92Xz98JycWmoOm3EcYpTIbidwXO8clHFlnsOPTi5w8rhproMZmMqunVDeKlFh%2F5nfnueVZs82kbKeLdxXbBaU8z55lf8hsCZ8YmRmFDcmJwXhjUaT1%2BixnEBxzE5rqlBQampT4oY5amhtlfgn97QNhfKEafEU1lZxD79s2yVoVWKR7VXEPs1p7AgxUtlhNNHgSZ4gBncBDyI9jcjCcLthkl0t6ao8U66qvF2gC3n3FAGbT%2BWnJpDaph5O7pb312GyA4jBIpmrAMPJLA8JqH5b1bsYoFUXC3dLgzDA2t%2FBBjqkAfb3XAm4RpswTmYbxFwYeCY609dxshKonvWem2UJ82ZIjWFMgYk4Egez49YUD%2FMTvznX7MeUmmV8wcucv%2F1vnkdwYMgtd91fKNvJxVmcD%2FVNwpK2Rgck8%2Bi3JqXI9InFy%2BDWXZgwR93VlfPvtizmTCNSJKikGLj0TWl4%2FDDqs5WDnqD1KmjAvMyx8HlaGU7zumLhe5dCNmgzX7UwJUfOZR3W8LSj&X-Amz-Signature=68eaa1e147a6cdf032f69b9f2a82f2ddb12b4b5b33d8b4a018538ee37c5c24f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTOMJZH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5P2lTR%2F3vJeySvbGpP99Qx1Rbw6AG%2F%2FHngI%2FVgM%2BoAIhAJ%2F4BsFdAI73rlmO04BRfmFGP7Nj3kqN5IZcK1wJ%2Fm4CKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyivGWeA4eiG0wdRNwq3APcNBR2EkA2DYjM7Ys6Df5G66pe3FCYY51kA3wtPDMvGFgbaIigPplUYDLazMjXChkY8XS8yRUw3%2BHIoadrTqIgDwC2I710zXoP6MqL5xs%2BKglsMNSIvdgXCxVLYvrEXKvGH0kak8r9PEIklNlpOqX2%2BJ%2F9KGW5utad5KwMd8xnnd2WlMie2tMh5xEImrBZLP2kxgfL9DlbASlZoc0gnoulthP9lD3%2BSCJcbTipK5VgUqOpIZczmqshMAJkJtONx9hPu2FxhmZj1sQoHnMoFmi5ltei1Qp7QsPWeiQ4OgbhDjDOP3H%2FsNl3DA%2BnvX1ygGRT1k%2BfVxTCFl3tciKeCQ2Ia6k8BD7zVwGjUPSWRrgjO0Mj7Q0AqZV2prF9YikNCotTw8k0hlTqxSQsAGICSp4ksnGRgimcrO6m1kg9feMEN%2BRy0gJcKTz60u1L4xf4QHniaeSssvtuea6eP7X%2BEpfX%2BRYm%2BqNosywQvuMxh4geoE1iNi7QoL0GUUsDBSQEoOhNjCeaPLvfpvUzUcjP6ShcVQiE0qZYeBYIQdKM7iJON5TZ71H6wrY1CCAHhowSNiIvSxNTwJZU2MADMybiyxBlRwXouFDzE%2BXWvvSaWlCbavwJw8ECl%2BSOXGJyDjCN2t%2FBBjqkATFeqX2rGpYYLpHp2tgbxp3x0qtTe47tYWt3hbgEKkpOXFod%2BkAvz1%2F%2FelqRxKLrN5XG2gP%2BieIjN9E4cM13YJXaZJK9andA5GM2tm4r80dwvM%2FjsgNmf%2F0VNUNp04UN%2B4CigmfsI1CIUrIYgw19E9T51PnWJWt%2F600ncmtJyc6o1brON8MxAkcIyZb7HR8emwRSUrMdHhMe2T5CM%2BCPf%2BVQ3e4H&X-Amz-Signature=defb0302b7e053a2bdad0ca250fe6444338ac99c606f9355c156789db9ed62af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
