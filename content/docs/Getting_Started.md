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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZ4SLU3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwO548QAPPi4dIxGTxgtGY1SJefa22B0K56a%2BBRzielAiA4A6mezmj%2FmMn7JK6lDdb5IR4WJC7SZEhacqDJFoFAFCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiOr%2BhotvJ5yPN20KtwD4sZxGv4hebVuVuAiSLezaXCGkc4eHTjBm83wuBzmP5t61KF%2Fe2VD8%2FQ%2BlbSsioZ1munlpUcFMl70VuUVwo4shAg3UULslkQnJZmQUVk6FmDJ5Y5bo8CXGHze63Akajyqwx3EJZgFaLXGFgSz0Ee70L95Vh4REVL3jcvs1ZUKAhPdzk0Z26gsS%2FC%2BDs%2BR0OxcXFPf6VR9kVv61jo7IAM74qPUcPPzSTRUG2COwT73izWKea888Ntctvu3i%2FP9kS8Jz%2BDEuF8o2FbynrduRCDDiSfIT5Q%2FR%2BHJUPDUuE5iXtGXbPOWt4CIfRf%2BS2Mm3jfUVcTo1OcuA52IwvsR%2FTTKknRcLFk3%2BawNat5VM7czc72YwlDe%2BjEYP9s9NsOpIpm7Q4ikNGln46AmyTcO1ob0sjAe2Fxuu4pLrj9twbejpaynchVY4SXlrFElm7x5CREG6xaX1y3kbLBgZcr7aV3QoDtay1BiEm5FVcclPghznQpO8bLYni7AYVnecYWBNoS82iBK5onOefL1oNqdjSnmFlna8wyjRWOPZ8XLPNIcAnWiSwgvDLLHX8TyvQ%2FiuUGk7dHgUxnAzW%2Bos6ryv25WEzt92TBQItvHK1XPWb2C8vXloimeNkLyfPt%2FK%2FIwr6TsvAY6pgFtXXOgOI0nuXXLwvcRNT4s8C6jzNV5G%2FhEZreXRhH7BQEwnwi9ticTdL2tneFJrYexlgbPcIydQjUYiS7nAwdvsXC337tZWtNzgPmFY89j%2BbKB45C43NZ4lsuiZK16Yx4G5oaPieRL%2FhXhzvcAhYvGZg0SPH31pSnjSIqSrAjchRiDv3dol5k5C%2BanluTQSqDalEa%2F30aatXc%2FvUuITrdgLsrDBwyd&X-Amz-Signature=1a02a302e80af329d91dbf91cc5d007ec80f2febca3657a164e96422240ae40c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZ4SLU3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwO548QAPPi4dIxGTxgtGY1SJefa22B0K56a%2BBRzielAiA4A6mezmj%2FmMn7JK6lDdb5IR4WJC7SZEhacqDJFoFAFCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiOr%2BhotvJ5yPN20KtwD4sZxGv4hebVuVuAiSLezaXCGkc4eHTjBm83wuBzmP5t61KF%2Fe2VD8%2FQ%2BlbSsioZ1munlpUcFMl70VuUVwo4shAg3UULslkQnJZmQUVk6FmDJ5Y5bo8CXGHze63Akajyqwx3EJZgFaLXGFgSz0Ee70L95Vh4REVL3jcvs1ZUKAhPdzk0Z26gsS%2FC%2BDs%2BR0OxcXFPf6VR9kVv61jo7IAM74qPUcPPzSTRUG2COwT73izWKea888Ntctvu3i%2FP9kS8Jz%2BDEuF8o2FbynrduRCDDiSfIT5Q%2FR%2BHJUPDUuE5iXtGXbPOWt4CIfRf%2BS2Mm3jfUVcTo1OcuA52IwvsR%2FTTKknRcLFk3%2BawNat5VM7czc72YwlDe%2BjEYP9s9NsOpIpm7Q4ikNGln46AmyTcO1ob0sjAe2Fxuu4pLrj9twbejpaynchVY4SXlrFElm7x5CREG6xaX1y3kbLBgZcr7aV3QoDtay1BiEm5FVcclPghznQpO8bLYni7AYVnecYWBNoS82iBK5onOefL1oNqdjSnmFlna8wyjRWOPZ8XLPNIcAnWiSwgvDLLHX8TyvQ%2FiuUGk7dHgUxnAzW%2Bos6ryv25WEzt92TBQItvHK1XPWb2C8vXloimeNkLyfPt%2FK%2FIwr6TsvAY6pgFtXXOgOI0nuXXLwvcRNT4s8C6jzNV5G%2FhEZreXRhH7BQEwnwi9ticTdL2tneFJrYexlgbPcIydQjUYiS7nAwdvsXC337tZWtNzgPmFY89j%2BbKB45C43NZ4lsuiZK16Yx4G5oaPieRL%2FhXhzvcAhYvGZg0SPH31pSnjSIqSrAjchRiDv3dol5k5C%2BanluTQSqDalEa%2F30aatXc%2FvUuITrdgLsrDBwyd&X-Amz-Signature=7b8342a242400cbe14a9558c331515775cf51c1189596d96f03b5a4690f64f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKDRTZG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGdXDYVRk3ALEdEiPVi0AsIn64FP6rDaWDO1WCehLrzwIhAJ1xF98vjefUllMTHxDB2qESxEbNBTNMgh0shFU8zY68KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza8S2Mm95G%2B3dI1j4q3AO0ecBiHJrzE9ngwruuK3CF3f8eVL1mLFOXDIN8wN8KMd9aih3LlmtaDuRVbesB0RjsKrTNkZeNS5GHyjcWhAILpb4uIcvmuiDiqrqY4PXFE%2B4R%2BJ%2BIdbsx9SJzrzm8r4vACUxnAACh4b7aHvmBZwI6aJ7xknplQ53RKBhZIZFF%2FA1W6qHmHsi8DXNexeDq3KPw9VgsaWUR10yAw%2BmgeiXqPpvijhUYXDRIobD1EXRPegCu2M%2Bz3BvyhAZQsdBGvXhnz%2BTMRpiZB7Wpy2yGnnaOv%2B81OeaCpJcr7Iy6pSIsWBmUBAz3JyzcgXOallfcY57I84jrE%2Fb2ShiLIm7Ea6KrOWw%2B5ONxNkotSr0fMxGQjXf6fBe7n%2BsWdi3GERixgMOHzF%2FAMIK0%2F7ltgGQFYm8nF5k6SNUDZcYy4%2B4glYdsPgzVgkCfNXEkCl34LgXp3sQZNORWqSndN55B%2FgpDH3zJIXTYpavH6BkXhs4KuNM08%2FdbMuyg%2Fjh12MEZnK%2FWA7pbgvL4IDNOz%2F5gjil9iPzGGPy75xYeLqYbKPVZ9s4Duk1juLOXl6YbEEDLgaDyDuES3f%2B3lR%2FaWJ0nuYO2f62u0q6vCTjIzFsEAzrUGNKTre9VbzWwy1x%2F0B7YWTCtpOy8BjqkAcEeQw70VbbaAygSjRZ%2BDxJMQfV6nvvKrggSzY%2Bg6g5awhsFeGlnu6ZmWLIC%2BL%2BhxUiKoimYMu1%2FE66qPy08%2BTFTDYJBu4mnM%2Fk%2FcR8RrXOomMqjjuDR08xXi9rP00Q%2F5i%2BiCMg%2FQ4SuE0oMbpri4EsACZ1OZBmAm7FAHetTmMjopSY4iTHh9SZ0vB6%2BBN2X7jjjEM8IRUm60FOJmHZ4iZyOq9z3&X-Amz-Signature=c44c071f2b226c6c0859d3d67c82b0e66c3a8a471b8505a6412369299dea8f93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P735BHL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLnFRgm5Duxz5%2BAsmT7PJLAxgICxbCNhoD0dvVVoI7rAiEAnFt9uKqYwMDEJH7Nu9dOa7NV4waQ41SUPM1GmlR8pakqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEksuqe6mDoWwURQgircA7xCsx7F8%2Fs7PzJQZS%2FowKbKzEXA5JFymsQsFhRA%2BpZhj6ejZy3bFVA%2FShvgeeU%2BKFDdfajwI2w0Rba5ZqvGo4b%2FCIp0KMvXbPNQjzsc8kmqNAmh%2BrPOeclv6MhU733tnjj21rAvKEeLRbzwFiu6xG43zwmRgZBEFDlbr7h5cSq2CdM94xylTJQri9bwrDzu2lsGheaWVqf5IkgOCBBEcCTaMyHpOqeCUUtGaA3KdWQX8oec5n26k8ZyMM2MOsmQRBuTpwNs7gedvD8An8y%2BPh42HjjckRzuqTkO9EGS7Ll8YBVhwmfqLxSsm%2BBzhxFkBbTVEONkVbcpH2cLbuYn%2Br%2FHJai2cX5V1yP7azRD43Lu37Z%2Fdw7IpD4FEBQp5QNxexffsMPoHYIpivhMJkLjCXGMe6jucl7QyH0ZjfC9sexOIumbiDQKU5pyh0OhUVlNmo0leWQIrH9V3H1vFyLe%2Fe1M8W5pQyGwJfTGzy%2FFWZF36QwaGUHW1dJno2nntgIksyW0tN%2FKrIH%2Bsg4OuC2D5MViN8W6ROWmMnjuM41AXgyG8ibyU%2B%2FUFViW8zuff51RCdWY7U%2BscqWYosjiSI%2FxKPB%2BcQHK9tRIniC%2FDPmccFKjZ6gXHKEg3IwhMNh2MNaj7LwGOqUB9vY%2Feb78eS%2BCBqNGf%2FfvmAY0S8XiwbvnqSqJ7YMACwdH58Dl7Vo02benHkI6Zy8xy2Mk%2FynDZoAxRKm47ftUvc2rlmVeJ24RVe%2FNL86KCNRnvR%2BRZUtKo7lnsvWJGr0uFIWQuEEeNJ35haPEIK7amnZ9gbAif1KmPMZOvRk5MeBMkRgdC8O4jFTgLJkQY3bSHraua7z1p89PCFsqAliyeznGyK00&X-Amz-Signature=b4436a0a37ae9c5097469ae461a3a9527da0a303ff7b30d5a91b8fa4fce97913&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZ4SLU3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwO548QAPPi4dIxGTxgtGY1SJefa22B0K56a%2BBRzielAiA4A6mezmj%2FmMn7JK6lDdb5IR4WJC7SZEhacqDJFoFAFCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiOr%2BhotvJ5yPN20KtwD4sZxGv4hebVuVuAiSLezaXCGkc4eHTjBm83wuBzmP5t61KF%2Fe2VD8%2FQ%2BlbSsioZ1munlpUcFMl70VuUVwo4shAg3UULslkQnJZmQUVk6FmDJ5Y5bo8CXGHze63Akajyqwx3EJZgFaLXGFgSz0Ee70L95Vh4REVL3jcvs1ZUKAhPdzk0Z26gsS%2FC%2BDs%2BR0OxcXFPf6VR9kVv61jo7IAM74qPUcPPzSTRUG2COwT73izWKea888Ntctvu3i%2FP9kS8Jz%2BDEuF8o2FbynrduRCDDiSfIT5Q%2FR%2BHJUPDUuE5iXtGXbPOWt4CIfRf%2BS2Mm3jfUVcTo1OcuA52IwvsR%2FTTKknRcLFk3%2BawNat5VM7czc72YwlDe%2BjEYP9s9NsOpIpm7Q4ikNGln46AmyTcO1ob0sjAe2Fxuu4pLrj9twbejpaynchVY4SXlrFElm7x5CREG6xaX1y3kbLBgZcr7aV3QoDtay1BiEm5FVcclPghznQpO8bLYni7AYVnecYWBNoS82iBK5onOefL1oNqdjSnmFlna8wyjRWOPZ8XLPNIcAnWiSwgvDLLHX8TyvQ%2FiuUGk7dHgUxnAzW%2Bos6ryv25WEzt92TBQItvHK1XPWb2C8vXloimeNkLyfPt%2FK%2FIwr6TsvAY6pgFtXXOgOI0nuXXLwvcRNT4s8C6jzNV5G%2FhEZreXRhH7BQEwnwi9ticTdL2tneFJrYexlgbPcIydQjUYiS7nAwdvsXC337tZWtNzgPmFY89j%2BbKB45C43NZ4lsuiZK16Yx4G5oaPieRL%2FhXhzvcAhYvGZg0SPH31pSnjSIqSrAjchRiDv3dol5k5C%2BanluTQSqDalEa%2F30aatXc%2FvUuITrdgLsrDBwyd&X-Amz-Signature=f6a4c1d51658f24808402687cc1e94edd81d80d35ac76b2ba5244c8cd196d956&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
