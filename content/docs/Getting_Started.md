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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWX3ECUK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHKXmC2KnhLbSjRwgj8grspbu8gNlKG8j74cZCFmTJJTAiEA5ovl2cqlOkHXE%2F8amqG94F9Yf1WPq0UqrfhgH0Ow4BMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGNjYygFLSNcSaW%2BNyrcA7I5c2AjsaVj1GCrUVgPG30jXywOhj3mn1YQkPcvtWrOhMnWUh7oKGkKUXw%2BqxMs9EgNexUKXYkQZaUw%2BoGqDP%2B4C6maR1n2tLMaRteuPGIQ4T1tl7OTI8SHX7zANT70RZg%2BKJ%2FIa%2BPBxv7RykmPbFNeOEclmxsVFTeq%2Bwg7N9OSsvZf7NJsDNcopU6c3zSJHbzxFoklJZmClS29wA%2F1Quc8Rphb9OYkn90Xt90l7HSQYdpOxjUhjyrGEzyp1x2wvxd5m95HWvJu8V62ixhfkr0EsKnrMlPyGJ8c9c1TTLkLG6Ce7djlcZea5vYby8TniXTf9DaCCG15Q22fGSaqdsRw5MuvziNXL9JhNzD5Yp9PThLCPKfVkZPzT7h%2BgsOZnhHmdzgmrsJ23ZYEe4QFi7WndkjD8%2BiZ2WduQsHmuI6gtWrnyqAV4DrjQQxqsTZkDr0uEaJtt4pNRKC9ze9WAKtismGfbnZhAHVwemoUxNXCp02BqqkouPBWQEg%2BsGNF%2B8aIpEalHPcX6XPDQ5Q2qTXCsTz5hLdIZ0CQzVqvXRkXl4rKUcr2WV4OWAX3fZSHZ2b0IwbYEtRSJzRxVuOaqCrmdLynR0cPsuIH8rKLTm5MfDWHXzGmrmXRZ%2BuYMInvksEGOqUB1bSQSXtB55pjXbw43gWIegA1azsLudlZajVbFMfH%2FjIRa0x98rfhI6sCvxj%2Fa%2B5r9tmXtcIvOggKaX2Q0xps17yW7ofhps%2Bfw%2BidiHXTv3fxQ0WiGk%2BLAo9nNKHN4UnY6U3OrYrKHzLvSd7c6jir%2Fc84Zq0vSyHLNHiUTY6jx5AmfkWlNVZmJtvW9SGTTWtEtXir6%2B6QADgmMslVfFEzzOG5kVO8&X-Amz-Signature=1fb8ddee82ca415b53f6de43568db79b23eff7d50bdef6487d7d0ffd2bf57369&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWX3ECUK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHKXmC2KnhLbSjRwgj8grspbu8gNlKG8j74cZCFmTJJTAiEA5ovl2cqlOkHXE%2F8amqG94F9Yf1WPq0UqrfhgH0Ow4BMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGNjYygFLSNcSaW%2BNyrcA7I5c2AjsaVj1GCrUVgPG30jXywOhj3mn1YQkPcvtWrOhMnWUh7oKGkKUXw%2BqxMs9EgNexUKXYkQZaUw%2BoGqDP%2B4C6maR1n2tLMaRteuPGIQ4T1tl7OTI8SHX7zANT70RZg%2BKJ%2FIa%2BPBxv7RykmPbFNeOEclmxsVFTeq%2Bwg7N9OSsvZf7NJsDNcopU6c3zSJHbzxFoklJZmClS29wA%2F1Quc8Rphb9OYkn90Xt90l7HSQYdpOxjUhjyrGEzyp1x2wvxd5m95HWvJu8V62ixhfkr0EsKnrMlPyGJ8c9c1TTLkLG6Ce7djlcZea5vYby8TniXTf9DaCCG15Q22fGSaqdsRw5MuvziNXL9JhNzD5Yp9PThLCPKfVkZPzT7h%2BgsOZnhHmdzgmrsJ23ZYEe4QFi7WndkjD8%2BiZ2WduQsHmuI6gtWrnyqAV4DrjQQxqsTZkDr0uEaJtt4pNRKC9ze9WAKtismGfbnZhAHVwemoUxNXCp02BqqkouPBWQEg%2BsGNF%2B8aIpEalHPcX6XPDQ5Q2qTXCsTz5hLdIZ0CQzVqvXRkXl4rKUcr2WV4OWAX3fZSHZ2b0IwbYEtRSJzRxVuOaqCrmdLynR0cPsuIH8rKLTm5MfDWHXzGmrmXRZ%2BuYMInvksEGOqUB1bSQSXtB55pjXbw43gWIegA1azsLudlZajVbFMfH%2FjIRa0x98rfhI6sCvxj%2Fa%2B5r9tmXtcIvOggKaX2Q0xps17yW7ofhps%2Bfw%2BidiHXTv3fxQ0WiGk%2BLAo9nNKHN4UnY6U3OrYrKHzLvSd7c6jir%2Fc84Zq0vSyHLNHiUTY6jx5AmfkWlNVZmJtvW9SGTTWtEtXir6%2B6QADgmMslVfFEzzOG5kVO8&X-Amz-Signature=dc97f78eb46ce448331a4ff078c51e0c543ce26fc99aa96f15ab8cdf06ac81d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWX3ECUK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHKXmC2KnhLbSjRwgj8grspbu8gNlKG8j74cZCFmTJJTAiEA5ovl2cqlOkHXE%2F8amqG94F9Yf1WPq0UqrfhgH0Ow4BMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGNjYygFLSNcSaW%2BNyrcA7I5c2AjsaVj1GCrUVgPG30jXywOhj3mn1YQkPcvtWrOhMnWUh7oKGkKUXw%2BqxMs9EgNexUKXYkQZaUw%2BoGqDP%2B4C6maR1n2tLMaRteuPGIQ4T1tl7OTI8SHX7zANT70RZg%2BKJ%2FIa%2BPBxv7RykmPbFNeOEclmxsVFTeq%2Bwg7N9OSsvZf7NJsDNcopU6c3zSJHbzxFoklJZmClS29wA%2F1Quc8Rphb9OYkn90Xt90l7HSQYdpOxjUhjyrGEzyp1x2wvxd5m95HWvJu8V62ixhfkr0EsKnrMlPyGJ8c9c1TTLkLG6Ce7djlcZea5vYby8TniXTf9DaCCG15Q22fGSaqdsRw5MuvziNXL9JhNzD5Yp9PThLCPKfVkZPzT7h%2BgsOZnhHmdzgmrsJ23ZYEe4QFi7WndkjD8%2BiZ2WduQsHmuI6gtWrnyqAV4DrjQQxqsTZkDr0uEaJtt4pNRKC9ze9WAKtismGfbnZhAHVwemoUxNXCp02BqqkouPBWQEg%2BsGNF%2B8aIpEalHPcX6XPDQ5Q2qTXCsTz5hLdIZ0CQzVqvXRkXl4rKUcr2WV4OWAX3fZSHZ2b0IwbYEtRSJzRxVuOaqCrmdLynR0cPsuIH8rKLTm5MfDWHXzGmrmXRZ%2BuYMInvksEGOqUB1bSQSXtB55pjXbw43gWIegA1azsLudlZajVbFMfH%2FjIRa0x98rfhI6sCvxj%2Fa%2B5r9tmXtcIvOggKaX2Q0xps17yW7ofhps%2Bfw%2BidiHXTv3fxQ0WiGk%2BLAo9nNKHN4UnY6U3OrYrKHzLvSd7c6jir%2Fc84Zq0vSyHLNHiUTY6jx5AmfkWlNVZmJtvW9SGTTWtEtXir6%2B6QADgmMslVfFEzzOG5kVO8&X-Amz-Signature=60413e75072fb645ebeee9f4f1fb136165ae55bf74b2422cd0f9eb1ce8be0592&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEY64FJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDVGaEQn24caeSTCrnS0aYi6OsVbEygWyXSCCuHr8s24wIgIDqtAPvOm9HYK7IKIKjvuDRDYnf0hVN8LHDnVbDeNq8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCnhgeIOJ%2BrZG%2BTGcCrcA%2BDUigJu745vUWn5NPW7SOapn1k8NEivG3%2BylgkXbsXN0PXWOmbqN4ex0fT2Cv%2Bah1G0JtKzUd8VA3YJJM1k7eoarTRnKf21H%2FJtvlLckSqMk0kb2mm3dy9RPQmpRTlR1T6%2B2XmRpyEApC1jzV%2BmX%2FnIWKDGi68XNPI6%2BHfXrbwz5PuMne%2FMs%2BwtCDsyzx2Ydq1cDZtOGiOKA3geYnpo4t1XbCMFA8Jfqm8ARkiS7RjRoCWc%2BMmwr175hQGBp7KBRDz5cONawyyb041zlJzb0MdSXSpYuEayglmN0Qfd4NG62LGf7sy2iG7iU4aA7znp1EIRQpKci7rt38qbiAa%2BJThVAAs2kVeSCGZ7UGnUOwVBmBE14YU0%2Bb7E37vFw29tYGRB4RN9z%2BuJdorJAkI6PtJmxb6pNqSYR05panU0zckYt%2FyfBIampxHxsv5Ml5Nq1DV0F0x5RhazVnh18y%2BTP5x%2Fmm8mDEzxsoGXSZhSWM4VEiLms6TFlweohmZrS2xJqDgUP3kfoYVTc6vkOTF8fqjcfRO6f6RaLC2%2Bn3vl8X8HOec9TiJ0ZjsWoyJHqkOw2vtL8FM966rH2A3%2FYVAWk2eOIV6vq4d0xupNMe7BLGRbPD5JGoqXJ5J6k7dfMPXuksEGOqUBebYhviEXFqe9QIh2vZ%2FKBz5wttc9P00%2FDroFIBk5%2FHP0AoID7IHev9uJMhp2ibuimbSG42H8AhRg1BB9ck1c3nDMI74OQyoEaVLqrqevDT6ViLf%2F51Tbhogs4A2ln2O9IanwiV953dUJF%2BcWT%2FLo90hj4walaTYRGgPzrQLM2opwt88bDNam6Jnl5DRicbgNCvxfooO3WBbElZDO%2BpbSGxhMoO5q&X-Amz-Signature=0287acfcb844ee23908af19c1f9489f00e87340c3ec2bb9e34ce7ca977f78603&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZTZKQY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICEF1I4Q0ynHiMaD1tjyVb5CT7QkprM1p1Tp5G7G7DneAiEAo87zY70VwzqMqmdB5BlhykzfRbOIlhx3UHCd3puFen4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDC0JcAzn792zNuGQtircA%2BGUc0N9aslzMHq4qwtw2C8Q9kaLMvMNJ%2BgR2BmnA1vhedUY9M5Fp2v2PdlmOF012B445Kk15lv1rnSnmPZgTf6%2BXBpg7f3bpojvzRntjhPeqIMEzYYZ4xsJRs1vICCP4UWUrEqjwuvvxI2%2F3Yf12it%2Bpxmsuho5bJGMVH6p5D%2F40YHyJh%2Fw%2F0HSlzzMXzCzm1BEsjFdkp2sw0no%2FOPoBfUrgxd1xjVuQtAYdC%2BeF3QQRQEDnIBPYOJWehOx1oX8O1jpapphz9Ren4UP7h1EJX2COnnvjDCOdCTe7ZIUlsG6yu%2FEd7oONRuOyFqA3o%2BoqF0UGggICq6e2Hv2roaTKVDQTBGXocmMvXmn2EKWUJ%2BWX9QZXhjTKxiCCVZa5UEZoiyuNDNGYNLQOp46TE0IhQaJa4OpjI%2FPMGnvxyY%2BvgjjvaTbTrhBe04R36X3O9dBIhxL01Y83uOmmKzEk1Va6HhT74HPfhKB125FWb%2FzaMQmeBQbzYAenh%2BdbB3rdrthlvxfce5sy0eIqZ4UIuGOclrrSyfxYsx%2BW46BHM1x0thWB5IQpyfL%2Fz4KcQNhyYZm5U4G8%2BZs4cFenRdfK%2BZBrtZkq5GRXiUm%2BzwjXJ8WKhvzcuLKWlVgleQ9j4i7MMTvksEGOqUB4qDK2L%2BiX26AYpEXiQXtL%2Bi57n3jSDDtskl3VraKtJlMuxtUd2GvVXiUNgPVX%2B1W63APKPDSa0yBXq26j8RtklYfSIyWkgZYW1M5UbA6Dzf%2FxPowO3nlTh5ILQcsCvc2v05w%2FuVD0gJi9%2Ft5pAh1XCiwfio52GYEvA8DlbSW7WT9w2yClh5dvqExDaOqFGUBvnJuqB%2FqzSp%2FgrvHAGAftINuDOKr&X-Amz-Signature=ca8cbf4d5e94c6fb6181db8ce3e9372173d717a9997ffc1463db55165793786d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWX3ECUK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHKXmC2KnhLbSjRwgj8grspbu8gNlKG8j74cZCFmTJJTAiEA5ovl2cqlOkHXE%2F8amqG94F9Yf1WPq0UqrfhgH0Ow4BMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGNjYygFLSNcSaW%2BNyrcA7I5c2AjsaVj1GCrUVgPG30jXywOhj3mn1YQkPcvtWrOhMnWUh7oKGkKUXw%2BqxMs9EgNexUKXYkQZaUw%2BoGqDP%2B4C6maR1n2tLMaRteuPGIQ4T1tl7OTI8SHX7zANT70RZg%2BKJ%2FIa%2BPBxv7RykmPbFNeOEclmxsVFTeq%2Bwg7N9OSsvZf7NJsDNcopU6c3zSJHbzxFoklJZmClS29wA%2F1Quc8Rphb9OYkn90Xt90l7HSQYdpOxjUhjyrGEzyp1x2wvxd5m95HWvJu8V62ixhfkr0EsKnrMlPyGJ8c9c1TTLkLG6Ce7djlcZea5vYby8TniXTf9DaCCG15Q22fGSaqdsRw5MuvziNXL9JhNzD5Yp9PThLCPKfVkZPzT7h%2BgsOZnhHmdzgmrsJ23ZYEe4QFi7WndkjD8%2BiZ2WduQsHmuI6gtWrnyqAV4DrjQQxqsTZkDr0uEaJtt4pNRKC9ze9WAKtismGfbnZhAHVwemoUxNXCp02BqqkouPBWQEg%2BsGNF%2B8aIpEalHPcX6XPDQ5Q2qTXCsTz5hLdIZ0CQzVqvXRkXl4rKUcr2WV4OWAX3fZSHZ2b0IwbYEtRSJzRxVuOaqCrmdLynR0cPsuIH8rKLTm5MfDWHXzGmrmXRZ%2BuYMInvksEGOqUB1bSQSXtB55pjXbw43gWIegA1azsLudlZajVbFMfH%2FjIRa0x98rfhI6sCvxj%2Fa%2B5r9tmXtcIvOggKaX2Q0xps17yW7ofhps%2Bfw%2BidiHXTv3fxQ0WiGk%2BLAo9nNKHN4UnY6U3OrYrKHzLvSd7c6jir%2Fc84Zq0vSyHLNHiUTY6jx5AmfkWlNVZmJtvW9SGTTWtEtXir6%2B6QADgmMslVfFEzzOG5kVO8&X-Amz-Signature=5bcf8e7e8bb7501693f3024f109bb1ddf5862049a5433fe382a9e4c3f2ae1722&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
