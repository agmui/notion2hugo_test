---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOGET65%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDR9tEBxHhRxae57xDTJLEn4jaQXZebERMEzstB%2F70ylAIgMtO1oV5on38wdWoeiCOStmdtUZ19nYCtCbwKT%2FN7mJ4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPKVzbHBjsZWs384nCrcA3Tl3jB0Yl2GoQKeAG8wBo5iRD6kDayfROa7f1DYbEJUxteWoLJdKHofuSnC4Y9QdkBi0MgDjmSptAN8eicJWiGbMvHgGbFVJiXhVPt6IfKE07FjV0bL3I1LxWh1PooP4q8GqDFF4jTqIbD7nq8egltwqpOBN3IYZcrPlXngU%2FGaFuGoZ3%2B0%2FqVKcZtT0nPmQQMXOzDJ0hkTsTVcoI6Tyq%2FjjfuxdYKR1iyuQZBUzTe6lNOglg%2BAJ8bcB43a7ZltOsOfOWORMRlbd4da%2BTM3O54dGE2YCoPfcyN2WwKbuu10YVkP7tw0mftcyHqcPs3yvkva3VgecqClExdVYpToJaAplF4ncPJ3W5AM2%2FDUuGbKhGhja7r4qvLIBPlVVa%2B4Gm3hmtRq33IzjHIliK3g5gv7koyqIwY4IVmENpj3vQn8wlWGCEk4WkTmztGPA9dHQu8tGhSyFUli%2B9ZpV1u4jbM04Wvvqp%2Fd82bIskM3IACGDpsUAo8uzJDNkui1zHXwOs2MuiMtYTXGc1nW77F2L8r%2F59PAIXGahRhNrGa9rJOAlDvXfPnvskECyd1VAE8SaqYEXC7xcjoKjHxwTdE6EgPoImGip4i7aREhYuyikWZGN2azgab0S3%2BokBczMObPir0GOqUBK6QyU%2FMMtMZ8s4sE4xTG7nCqgDA6aAPRGR29xhsu9Av%2B0kqyv72YlBGFnQay42xYSrXSZHOkubghI28jftpCIpyWG7Rm8qUp%2BZZV3TlvQ8QwAXj5VNg1OtlsX8GM3Rx5Eayt59YvgFSS28WH6DCDE0bYokrOPXSz5ADsLvgEj4F853JhCfYGvQq%2Bs8Yh4Qr%2BiFxAtNUtVnbQ8byjQ67VbqkY3Pua&X-Amz-Signature=80be77a8da8913469c6b509a3db655c7b67eb74b0947ea5bb4599fd8d2994383&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOGET65%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDR9tEBxHhRxae57xDTJLEn4jaQXZebERMEzstB%2F70ylAIgMtO1oV5on38wdWoeiCOStmdtUZ19nYCtCbwKT%2FN7mJ4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPKVzbHBjsZWs384nCrcA3Tl3jB0Yl2GoQKeAG8wBo5iRD6kDayfROa7f1DYbEJUxteWoLJdKHofuSnC4Y9QdkBi0MgDjmSptAN8eicJWiGbMvHgGbFVJiXhVPt6IfKE07FjV0bL3I1LxWh1PooP4q8GqDFF4jTqIbD7nq8egltwqpOBN3IYZcrPlXngU%2FGaFuGoZ3%2B0%2FqVKcZtT0nPmQQMXOzDJ0hkTsTVcoI6Tyq%2FjjfuxdYKR1iyuQZBUzTe6lNOglg%2BAJ8bcB43a7ZltOsOfOWORMRlbd4da%2BTM3O54dGE2YCoPfcyN2WwKbuu10YVkP7tw0mftcyHqcPs3yvkva3VgecqClExdVYpToJaAplF4ncPJ3W5AM2%2FDUuGbKhGhja7r4qvLIBPlVVa%2B4Gm3hmtRq33IzjHIliK3g5gv7koyqIwY4IVmENpj3vQn8wlWGCEk4WkTmztGPA9dHQu8tGhSyFUli%2B9ZpV1u4jbM04Wvvqp%2Fd82bIskM3IACGDpsUAo8uzJDNkui1zHXwOs2MuiMtYTXGc1nW77F2L8r%2F59PAIXGahRhNrGa9rJOAlDvXfPnvskECyd1VAE8SaqYEXC7xcjoKjHxwTdE6EgPoImGip4i7aREhYuyikWZGN2azgab0S3%2BokBczMObPir0GOqUBK6QyU%2FMMtMZ8s4sE4xTG7nCqgDA6aAPRGR29xhsu9Av%2B0kqyv72YlBGFnQay42xYSrXSZHOkubghI28jftpCIpyWG7Rm8qUp%2BZZV3TlvQ8QwAXj5VNg1OtlsX8GM3Rx5Eayt59YvgFSS28WH6DCDE0bYokrOPXSz5ADsLvgEj4F853JhCfYGvQq%2Bs8Yh4Qr%2BiFxAtNUtVnbQ8byjQ67VbqkY3Pua&X-Amz-Signature=3f1b9abd9e08d14ae824a2536e57c528c0aa7478e0aecf6a323db8338f62cd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAW6RKI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD01%2F5iMIAfwHw2yPYhrtT1zvAvDJDM5vhqPgRwO%2F9dzgIhAJxTksWzqI9zwJ0xq1VB1iSbfpjkWy2RE2CRDKkFrRZcKv8DCDkQABoMNjM3NDIzMTgzODA1IgxT78oZCE31YTwzHyIq3AM9z0KDaOfESdlHMxKO6VVrrzzIkTfNQKk9nIBEhPdrr8Mbh68JbXXw2Aa6D2b7JRCg%2FFuJGofoZ85eFgqYFXHklSZxbjQm5TZaXuMZ37xyq7lBN%2BgQGREurGcJhHsiK9WaLHYzSdT9%2FAPeLBHDTvZr2%2F8q88%2FFFIV%2BBJNDmWLf%2B7kwgzQerxEltS4JZYIP1xGE%2FbjQDSvVdOdc8EqpOgQQNTEVmx8ONN7pMEaeht03nwL6mrHbgaJ1w0UWCAmEsa2zr1n66ZQrVitaq4NHxX0T64xW4ua9CKgRXQ1QothoEIxEuO8%2FcTblrNqiu2EjWyHfnScSXNMIJSwCXnioP1OKg4%2FbxzIm4eBuNiQz0FEYOnESS5udUQcEGQWeL4FoHq9laHVkfDgGmISVwQp81hRoou93NAo%2FlPHs%2FQkhQ4oYSvDUPYW3nkwC%2Fwetqhrimv5UR5T12GS1d%2FmJyiRy9gIlXw1eRlTP4inw1zZxqQG9FOrcx%2BkUwCR4rGzVpgV755TYLdki7RP2Ogz%2B0wy96LqaXcxaoppq5jVVXB1%2FGXFHUyR%2B4ruJyzjtbqNJiSSVgm3e%2F4cBjmxcMisATpnGWAX8t9Vd3b5TVEuohGX9qsQVksAe4OX%2Fvr0bZ31oVDCrz4q9BjqkAd%2FDF65I%2FGhG1v1qbj8EmaHYowgPgSn3ub57ORbaR5bV%2BNraMIImapuIP4lNBgsezk26P7Ao1MfE08Gj3lQAAKMLhpNlZnwlKABVfJOVQg5OOKd85%2FXonjhdwFQmpmo5fkfA25cZIjVaMAkVIKPdxmVwEc7v3qFLw2yZG1d5icfs8IR5WdW45PgDbk8fECljc0lud9uVMtOA5B9adcmQyvLR8OuD&X-Amz-Signature=532f240c5d021c2c5ea619b8b4f484eafc1bac829fc890284bd42af555b66779&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325PYBB3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtZ%2BzSSlfnrwRHf8ofJ4MMYRtNUDJtG1zn1L%2BP7BrawAiAGigkZUPLtNo6UtOVpxAnmPCV1jcfot6fxTuGGgvfdOCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMdmuGKWId%2BnTE6qkfKtwDGnvsfI8NB4ymn%2FS5oTDIqup0cfqb6yHZD5RUAfyj%2FPdCfvuF2HTR85WiZf0VqgEZqh9bLdogMDR%2BxhwKmhXd4222pdRvth%2B4gOUB9mZfM6m6M9SBn%2FsztWZRJRSXA5tRwN7xyglzH7iZER8Loktz5KBPALny0BXnZAal7qeF0UVm3TF6uEGosD8gnP%2FMAnuy9IdJtyXMFIawG%2FAos1OeFrK%2FNMQshH9H6kCrfrwhMgrfCT7Q7WTFRxdIB6yf3zgtjr8AYGeYP%2BJDcpFMvl%2B5QH1LwzaThCcncym8B0I0Epln8ak%2BVKTYI2GTBwAiC4FFwJn48%2FHtBcNAoMJMbybY5oTaBRtPrz6H8UMOnx6mhwZfCc7b57MYf6ykVKhNINjV88QqHCsHNIOype87vS0%2BGP2Vaa4cRrfY3T%2Fub0L4i03NMtx17yvR3AbrrdYWH1JZ51mllOSxiKts%2FFU0bQ%2Fl9b1vNrddEmMPaJHw1ZX%2Fzcjgc2iUsSvFr1aB%2Bm1u5GfhdBcGojqDHz7rA%2FSxKVlUloWdqpKI0KQmKhrV0zrkfqMh%2FPLddtFV4mmgysxeuEGgJaGs%2FP81vmWJcPA4lkIcwy9%2FF4XokNHab47o5NSiaon5BSkmmoX7WZY%2FTjsw0M%2BKvQY6pgHWh3DlkN3yEZckaWSklIkMqan0PsUI0uNzzLdiVpUtkJjrNo2SylrDCiZplELcSVZD7uynYA0FSMmuQci17jXPyWRykBjusC%2Bao8ne8U5adLS97KIgZBBcz%2F3KdM%2FOEjmcmmMClianCm8Q8GZT2YkuJ1eom1IQmt8tPatfGyTse1%2F5t%2FgJF5M%2BUwvDweeYypCj7bGtN4tJ9iu9JyRVVnM8gwBoQSkN&X-Amz-Signature=b9ac6d45b351cba2e312fbdc3eebbcadde1d4a2f75255223d987d4d1a54425bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOGET65%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDR9tEBxHhRxae57xDTJLEn4jaQXZebERMEzstB%2F70ylAIgMtO1oV5on38wdWoeiCOStmdtUZ19nYCtCbwKT%2FN7mJ4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPKVzbHBjsZWs384nCrcA3Tl3jB0Yl2GoQKeAG8wBo5iRD6kDayfROa7f1DYbEJUxteWoLJdKHofuSnC4Y9QdkBi0MgDjmSptAN8eicJWiGbMvHgGbFVJiXhVPt6IfKE07FjV0bL3I1LxWh1PooP4q8GqDFF4jTqIbD7nq8egltwqpOBN3IYZcrPlXngU%2FGaFuGoZ3%2B0%2FqVKcZtT0nPmQQMXOzDJ0hkTsTVcoI6Tyq%2FjjfuxdYKR1iyuQZBUzTe6lNOglg%2BAJ8bcB43a7ZltOsOfOWORMRlbd4da%2BTM3O54dGE2YCoPfcyN2WwKbuu10YVkP7tw0mftcyHqcPs3yvkva3VgecqClExdVYpToJaAplF4ncPJ3W5AM2%2FDUuGbKhGhja7r4qvLIBPlVVa%2B4Gm3hmtRq33IzjHIliK3g5gv7koyqIwY4IVmENpj3vQn8wlWGCEk4WkTmztGPA9dHQu8tGhSyFUli%2B9ZpV1u4jbM04Wvvqp%2Fd82bIskM3IACGDpsUAo8uzJDNkui1zHXwOs2MuiMtYTXGc1nW77F2L8r%2F59PAIXGahRhNrGa9rJOAlDvXfPnvskECyd1VAE8SaqYEXC7xcjoKjHxwTdE6EgPoImGip4i7aREhYuyikWZGN2azgab0S3%2BokBczMObPir0GOqUBK6QyU%2FMMtMZ8s4sE4xTG7nCqgDA6aAPRGR29xhsu9Av%2B0kqyv72YlBGFnQay42xYSrXSZHOkubghI28jftpCIpyWG7Rm8qUp%2BZZV3TlvQ8QwAXj5VNg1OtlsX8GM3Rx5Eayt59YvgFSS28WH6DCDE0bYokrOPXSz5ADsLvgEj4F853JhCfYGvQq%2Bs8Yh4Qr%2BiFxAtNUtVnbQ8byjQ67VbqkY3Pua&X-Amz-Signature=3b841cf0fe99f7f6657176f6ec2442a644f460e63e91e6118eb0960299b43fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
