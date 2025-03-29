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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TG43J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAppltbrA9FmDNZ2L9UqSk4FG%2BnGLVWDRsebdD63YDZbAiEAow3ZBreV8LbxN7mPNCG%2FncvibLdhIzJ0cn35AwDM8tcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLvy1ctlEQGQe%2FhG2ircA26n9hU40ZWW51mva5VNOA9kVQrJRR19K4fnGg0OsGPLUocavDAVf400zsw7CZDEWQp9Dw7lrxUuuwP0xGocLx9ErvAL6nMxB4AbZWAMgqv97g5Ce70Xg4JR0EnIBehL16oC4G9vMcQJwqEDdxk3vH%2FT3BOJs4oHUAhYVD1smUHueL2j1SPfYqPTxprnRg61zfjjOYVOfg0CGJDv8rCXE9aDRNg2EMtCt5Kdxy8sT4VwUvVczAphMb09RWH3TRXsjD3ttIv3q93s%2B085fDlNJtMuZ3mLWnuwpqLxRIGinauaWGWvbDin2HnKPxwHRJhPkxnan9SM1bM6CF6qP4NS1qRRbJ6Deq1JJReYx23NAwB9jL9kV3jNOEjcRlYRIZzo0en2Wjsp86ZHsf0FS%2FxFzIk163%2BQ3JMsCv1IUhv5TGjf%2BrlX44fr2rZ4hPgvtL3YHHDTYaeOUb%2BoNVrWudHUAMjJgMw6zZzSeh%2Fosqo6xLru0P6OzYbQp0Jck5cPvsFTKRAvhySkqILEnRUPAc7xsFI%2F9A%2FhjZn4lI3TOvinMz9Vd%2BomMiChRq6JM79MWQzL60WF6NrnQiyY8c1VKZP2oHkSJaq1yV7olrY%2BX2O6dC0WwYd9%2BtcaUrNa1d%2BDMODenL8GOqUB6k%2FxejBLRO9PBXoFtfA%2B1fX0hwB13meUg6D4%2Brtc2%2FJLC8smgmhmN%2B5iPk6vykhPgyXzdUHKeg9L7t6FdRMwlSEtJd1W61KEbLxdCpuG9S9zTF%2B5MlX2W1BSYvvw62CKohjETWD0KQZh78OwIC13aA4x7BOQM1%2BgKpLAnm%2BkQDH4QdWa1%2FwRMAqJ2rPlsCHEk7VUGInl1IlsHFNKqw1MhLumnyMG&X-Amz-Signature=275425f1332eafb56cc3b02e8d1a41376b85933f6917dd7aacec80c68074b466&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TG43J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAppltbrA9FmDNZ2L9UqSk4FG%2BnGLVWDRsebdD63YDZbAiEAow3ZBreV8LbxN7mPNCG%2FncvibLdhIzJ0cn35AwDM8tcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLvy1ctlEQGQe%2FhG2ircA26n9hU40ZWW51mva5VNOA9kVQrJRR19K4fnGg0OsGPLUocavDAVf400zsw7CZDEWQp9Dw7lrxUuuwP0xGocLx9ErvAL6nMxB4AbZWAMgqv97g5Ce70Xg4JR0EnIBehL16oC4G9vMcQJwqEDdxk3vH%2FT3BOJs4oHUAhYVD1smUHueL2j1SPfYqPTxprnRg61zfjjOYVOfg0CGJDv8rCXE9aDRNg2EMtCt5Kdxy8sT4VwUvVczAphMb09RWH3TRXsjD3ttIv3q93s%2B085fDlNJtMuZ3mLWnuwpqLxRIGinauaWGWvbDin2HnKPxwHRJhPkxnan9SM1bM6CF6qP4NS1qRRbJ6Deq1JJReYx23NAwB9jL9kV3jNOEjcRlYRIZzo0en2Wjsp86ZHsf0FS%2FxFzIk163%2BQ3JMsCv1IUhv5TGjf%2BrlX44fr2rZ4hPgvtL3YHHDTYaeOUb%2BoNVrWudHUAMjJgMw6zZzSeh%2Fosqo6xLru0P6OzYbQp0Jck5cPvsFTKRAvhySkqILEnRUPAc7xsFI%2F9A%2FhjZn4lI3TOvinMz9Vd%2BomMiChRq6JM79MWQzL60WF6NrnQiyY8c1VKZP2oHkSJaq1yV7olrY%2BX2O6dC0WwYd9%2BtcaUrNa1d%2BDMODenL8GOqUB6k%2FxejBLRO9PBXoFtfA%2B1fX0hwB13meUg6D4%2Brtc2%2FJLC8smgmhmN%2B5iPk6vykhPgyXzdUHKeg9L7t6FdRMwlSEtJd1W61KEbLxdCpuG9S9zTF%2B5MlX2W1BSYvvw62CKohjETWD0KQZh78OwIC13aA4x7BOQM1%2BgKpLAnm%2BkQDH4QdWa1%2FwRMAqJ2rPlsCHEk7VUGInl1IlsHFNKqw1MhLumnyMG&X-Amz-Signature=f712a813da278401d79f60d8df2b3f6bfc098408c949011d3f83a4fd52fddd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5TARWI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC7O9cxi0guNjvH8nMHoYRwDvSwLVd8PaTbVwPry0P9%2FQIgX%2FVIGYU1wvHnyYA6y7woPNz52VUTsastq7Rffwur1dEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDE45bGnP7nwgUMzxFyrcA0LbLB7t4e9uHTjwQaXVu9CjHeV0MH5eCtWTLVc3yynW3vsUXC630JmOciLc6jJYjvffb7DsohpY7ElcGFIhXP0MvaRbFPQxLMIJ30f6EZJr%2B9d9WC58dRtJydwlHRoUv6YUqMzTfiDL8wJ%2BpI%2FaV62wWBH8ENCVoQAQz9PyUcTNyjPcOXNSsE5KPY36%2Bj11vubbMHLEP%2BiIXSGD1y6H8aloN06F0X6Lk0U7h3e9MXB0vHL1hLwLdIbdkmmrEUT%2FkOFum%2FwUkmOq5UHwSf55Cr1L5LuEvIWWnHeQdYwKf0yQp1eYWXxy3GgMbxLPwNaaIRJMCjuKnjxP8lqNavtqRBCUCgfPT2vWRkN08x7xrL33bMoPMaUhMpbrQ2xOdwlnKRYLoyYDdPv3XmuI2gx%2FHWfooXic5CFYXUn%2BY%2BGWzHJ42I9ovfIzNDGNi4sSKkCNxWP%2FiD5LsTmzztMo1Nx%2BNKJcQk8P3a%2BWKtu1fuK30ESXQsMTqwLYDwTM9DDoTjFNS%2FYyJP2ALUA5HnvNLf17m%2B5%2BOK9Ut1tPfC8uYz%2F8v3m0b8OTMXGNH62t%2B1aBV4hZkDQyD7vqZ1VYcZYhuc3M%2BOZknghL8fau6Ay9b6BtoZ0x8BHsXz6LJP0Zeu5aMInfnL8GOqUBgmMz8b9er5fp7ZNsgj5FKdEwLGRbMlLuWOZi1lV2nc%2BdBkG3LdjR0y%2Ben4yDGhexsLlCQGKDC21nt6WpCjr2OKpmQjMNQdm6TVTWZzFtVcMPJj1fH%2BBJE78A3k5cc8482KeTZpCgc54kN%2F7q85L6RnbbnWARoIqVwJ0J4xFnO4%2FAbfO0WNH2W9w8PcLoUZqIGYAAOq2E%2Bi1gPG7VJ1%2FBxGFADdNW&X-Amz-Signature=255c535cea7afa069ef22c6f91cdb99d014e1c20313c84c13fbd53016d1a6000&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFCN62R%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDqQKJ2eHSVT0%2F%2F1jzeZuCIuYcheEOyj%2BM5b38UOQkFwgIhAL724549oJ9oPGX5l5Y108xygLyd0WdkLGLWIUDU%2BEEsKv8DCGgQABoMNjM3NDIzMTgzODA1IgyTx1kDFwEpLtAzNjMq3ANod7d1dCZVI6J1XWAV6RXw%2FlB%2B38kM0NrI2AuZLbUgBDEVHbHCAnUP9Lv0G3HA%2B5wV1HbznVW29FcfDjdW%2BN8LUv9kMlDj%2FMaN%2BHTeYQuFeg9WbVjtc%2FQ2Lhtnz6miYS4%2BAB0%2Fcxb8yvWHvLmON1abVEFxxLSC6hN5oMroL6Zc4av1A7TpRsV0erYAiDJrj4zulrUKWPwQToFKFPzba8hLl0ljPDt2wbNb%2BE7hvLbt6AyYgiqK943XNI5rMUHSMIAgDO4JkQiOlCljN0TfFnyg8CTKFhKHNS%2BXZ%2FJpDl%2FYkE%2B2PW4n6Qvj%2B4dHKztuImMZRKDLL3Y7lRFg2gr6mY9kg4QFiIJ6u5UFTfUxST74MLqdTpDbwI2LNOipng1Fc2rDHO4CRMn0QmXxcXj6OghauBlJRN59%2BnZ12Rx%2FwWThI7hvOifMQcyudg8oZd%2BR2WgRbbectqCX9VcRwzla7FBYCnG1Kc2ivrMhO9O2mFhK5llHDuKjrcKBn5%2FiwQPTnI%2FB%2BIdM2%2FB7GoL%2FxoMAKhdJFsDmlcnReA%2BbZcbvJzzXMNq1vxiSXunV9bl2Pcnmxaj2g9RCKJMkyV6U7kang8Yw4jTZhleFd7czgWCKKCVKNtO5s4ANnGCY8%2FcdDjCJ35y%2FBjqkAY9iIBB%2FtQDlFx1rEK9Z3N2UXFyQrX3dJB1lNPQ21bxSDnW%2FGGKXWuevsWE5SGKJqR9BvL67m7PqvfRRLeXKz4b927Aax5uaAqxmnv1QOvVYcvEWMFN7p2TfbUWtasTkJdTTrKoUJwGZNnXxgATpKtyBylws9hdCffzCPeIUJSH0uPt3N37LovKd3VIt7jxbqZQHW7xgb3wWmPSGR396aSoUwx5r&X-Amz-Signature=386f63b2ac23da11a10384a4dd208c1d26609a43ebb7f4c5d278c3ddbb6e81c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TG43J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAppltbrA9FmDNZ2L9UqSk4FG%2BnGLVWDRsebdD63YDZbAiEAow3ZBreV8LbxN7mPNCG%2FncvibLdhIzJ0cn35AwDM8tcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLvy1ctlEQGQe%2FhG2ircA26n9hU40ZWW51mva5VNOA9kVQrJRR19K4fnGg0OsGPLUocavDAVf400zsw7CZDEWQp9Dw7lrxUuuwP0xGocLx9ErvAL6nMxB4AbZWAMgqv97g5Ce70Xg4JR0EnIBehL16oC4G9vMcQJwqEDdxk3vH%2FT3BOJs4oHUAhYVD1smUHueL2j1SPfYqPTxprnRg61zfjjOYVOfg0CGJDv8rCXE9aDRNg2EMtCt5Kdxy8sT4VwUvVczAphMb09RWH3TRXsjD3ttIv3q93s%2B085fDlNJtMuZ3mLWnuwpqLxRIGinauaWGWvbDin2HnKPxwHRJhPkxnan9SM1bM6CF6qP4NS1qRRbJ6Deq1JJReYx23NAwB9jL9kV3jNOEjcRlYRIZzo0en2Wjsp86ZHsf0FS%2FxFzIk163%2BQ3JMsCv1IUhv5TGjf%2BrlX44fr2rZ4hPgvtL3YHHDTYaeOUb%2BoNVrWudHUAMjJgMw6zZzSeh%2Fosqo6xLru0P6OzYbQp0Jck5cPvsFTKRAvhySkqILEnRUPAc7xsFI%2F9A%2FhjZn4lI3TOvinMz9Vd%2BomMiChRq6JM79MWQzL60WF6NrnQiyY8c1VKZP2oHkSJaq1yV7olrY%2BX2O6dC0WwYd9%2BtcaUrNa1d%2BDMODenL8GOqUB6k%2FxejBLRO9PBXoFtfA%2B1fX0hwB13meUg6D4%2Brtc2%2FJLC8smgmhmN%2B5iPk6vykhPgyXzdUHKeg9L7t6FdRMwlSEtJd1W61KEbLxdCpuG9S9zTF%2B5MlX2W1BSYvvw62CKohjETWD0KQZh78OwIC13aA4x7BOQM1%2BgKpLAnm%2BkQDH4QdWa1%2FwRMAqJ2rPlsCHEk7VUGInl1IlsHFNKqw1MhLumnyMG&X-Amz-Signature=d2e0adeb144a260f8b2c96072eb5d0e4980069027265e30446de5c261b9058d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
