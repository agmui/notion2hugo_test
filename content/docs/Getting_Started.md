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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHW3OTU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF3JW6LS%2F%2B2CjjM5kpU7%2B73wxlBRv2nCwKz8v9k0j%2BPJAiEA0acCk44ZIBKCW1jFkccMIL%2FMuIFLscg0PEABWn7Yrj8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIqAFIX8F3%2FCBFRUxircA2cVbd1MJG1yZrwUMGSN1oZR1GL7v7VMn7mKGCDL7Ot8dZhNXIMm0FamwUIHCt%2FApWkh96zmwgCG8AQ6MbczFMEO0%2F1QckdftZor8SkBKFUbuMa84fwUteTHwwUH6QmPaaAY1qLT9icAQ8AkhMxk2Z8SopwJU4zp%2FHuIYFcz%2FTlCiV39s%2FvmA%2B3zzUJcDk0fBuMCVZAVsd18GtRb3vBO%2FXZuWj22e5XzzHaAMx%2Fd2Y5c1IqA4QaCEbLs4zEHA%2FD2%2BTkgz3VI3KiTwGHaMpdG76ffGZ0uztq6S5JmbHttg7Kx4DW3T%2FP3N%2FYkaW7EA2jbTQUJTMbOpDfzMXPTj6Wz3IqVFKpRV%2FnVXd3uaiCC7juxREtK7bG9srhoowMRUHxw91YeNj3Bp17Lx6LlRr6Xwh47pUZm12gkMsVZ9n9icaB27tBt6LvcrNynF9nEfcMl%2Boolx%2Fra6p1L6RuwH%2F2CuZ4QjK4XvFUsfmfYyfN9KXh%2BKQqlFlC16SuzjxHioCC%2B7aUddGXaygzlamvhE37yGhSi8DBxiWxcv%2BVf%2BnzdM%2FgO8YJsNkV6YlYZDn%2FBX5jzL8RPquEkxmPKWERbj4peP2XpuJYJWlYW9nHyfBfhYnQdwx8SDu6MAiZPkPpbMMqEmcQGOqUB%2F62VS2aGDDlKNs3uud64uHoM6iUYg8Fb1n61xVNZlZlHJ8ni5Gh6RLG1BnLCLX4%2Beub95o1jFY0KAZDt5dEpN2VmxXH5xzFeGynRb4szlfK8uvAyIM9I7gJHewFDexaePnOIesT3nL2YWuGPlSp%2BuzJD8YF3Yadb6tU9CKdiSk7wdBQlPmD%2By5WMM0yoiTWEZUIDYtCqx7f3kgGVnvS5zdFtz9%2Fq&X-Amz-Signature=52faef5719d6e3923789a1aa538f513ce9402173bbc6cb9a384095ea707cd294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHW3OTU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF3JW6LS%2F%2B2CjjM5kpU7%2B73wxlBRv2nCwKz8v9k0j%2BPJAiEA0acCk44ZIBKCW1jFkccMIL%2FMuIFLscg0PEABWn7Yrj8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIqAFIX8F3%2FCBFRUxircA2cVbd1MJG1yZrwUMGSN1oZR1GL7v7VMn7mKGCDL7Ot8dZhNXIMm0FamwUIHCt%2FApWkh96zmwgCG8AQ6MbczFMEO0%2F1QckdftZor8SkBKFUbuMa84fwUteTHwwUH6QmPaaAY1qLT9icAQ8AkhMxk2Z8SopwJU4zp%2FHuIYFcz%2FTlCiV39s%2FvmA%2B3zzUJcDk0fBuMCVZAVsd18GtRb3vBO%2FXZuWj22e5XzzHaAMx%2Fd2Y5c1IqA4QaCEbLs4zEHA%2FD2%2BTkgz3VI3KiTwGHaMpdG76ffGZ0uztq6S5JmbHttg7Kx4DW3T%2FP3N%2FYkaW7EA2jbTQUJTMbOpDfzMXPTj6Wz3IqVFKpRV%2FnVXd3uaiCC7juxREtK7bG9srhoowMRUHxw91YeNj3Bp17Lx6LlRr6Xwh47pUZm12gkMsVZ9n9icaB27tBt6LvcrNynF9nEfcMl%2Boolx%2Fra6p1L6RuwH%2F2CuZ4QjK4XvFUsfmfYyfN9KXh%2BKQqlFlC16SuzjxHioCC%2B7aUddGXaygzlamvhE37yGhSi8DBxiWxcv%2BVf%2BnzdM%2FgO8YJsNkV6YlYZDn%2FBX5jzL8RPquEkxmPKWERbj4peP2XpuJYJWlYW9nHyfBfhYnQdwx8SDu6MAiZPkPpbMMqEmcQGOqUB%2F62VS2aGDDlKNs3uud64uHoM6iUYg8Fb1n61xVNZlZlHJ8ni5Gh6RLG1BnLCLX4%2Beub95o1jFY0KAZDt5dEpN2VmxXH5xzFeGynRb4szlfK8uvAyIM9I7gJHewFDexaePnOIesT3nL2YWuGPlSp%2BuzJD8YF3Yadb6tU9CKdiSk7wdBQlPmD%2By5WMM0yoiTWEZUIDYtCqx7f3kgGVnvS5zdFtz9%2Fq&X-Amz-Signature=2758c2bb3b543cdbcde99b9175b16366c79a4f386103021e2846ae659c795fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHW3OTU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF3JW6LS%2F%2B2CjjM5kpU7%2B73wxlBRv2nCwKz8v9k0j%2BPJAiEA0acCk44ZIBKCW1jFkccMIL%2FMuIFLscg0PEABWn7Yrj8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIqAFIX8F3%2FCBFRUxircA2cVbd1MJG1yZrwUMGSN1oZR1GL7v7VMn7mKGCDL7Ot8dZhNXIMm0FamwUIHCt%2FApWkh96zmwgCG8AQ6MbczFMEO0%2F1QckdftZor8SkBKFUbuMa84fwUteTHwwUH6QmPaaAY1qLT9icAQ8AkhMxk2Z8SopwJU4zp%2FHuIYFcz%2FTlCiV39s%2FvmA%2B3zzUJcDk0fBuMCVZAVsd18GtRb3vBO%2FXZuWj22e5XzzHaAMx%2Fd2Y5c1IqA4QaCEbLs4zEHA%2FD2%2BTkgz3VI3KiTwGHaMpdG76ffGZ0uztq6S5JmbHttg7Kx4DW3T%2FP3N%2FYkaW7EA2jbTQUJTMbOpDfzMXPTj6Wz3IqVFKpRV%2FnVXd3uaiCC7juxREtK7bG9srhoowMRUHxw91YeNj3Bp17Lx6LlRr6Xwh47pUZm12gkMsVZ9n9icaB27tBt6LvcrNynF9nEfcMl%2Boolx%2Fra6p1L6RuwH%2F2CuZ4QjK4XvFUsfmfYyfN9KXh%2BKQqlFlC16SuzjxHioCC%2B7aUddGXaygzlamvhE37yGhSi8DBxiWxcv%2BVf%2BnzdM%2FgO8YJsNkV6YlYZDn%2FBX5jzL8RPquEkxmPKWERbj4peP2XpuJYJWlYW9nHyfBfhYnQdwx8SDu6MAiZPkPpbMMqEmcQGOqUB%2F62VS2aGDDlKNs3uud64uHoM6iUYg8Fb1n61xVNZlZlHJ8ni5Gh6RLG1BnLCLX4%2Beub95o1jFY0KAZDt5dEpN2VmxXH5xzFeGynRb4szlfK8uvAyIM9I7gJHewFDexaePnOIesT3nL2YWuGPlSp%2BuzJD8YF3Yadb6tU9CKdiSk7wdBQlPmD%2By5WMM0yoiTWEZUIDYtCqx7f3kgGVnvS5zdFtz9%2Fq&X-Amz-Signature=bbbfd7cc995b7d5ebee4453f053b00c7cd19a7a0f377f081fa5dea0db395f13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWGZJ3K%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCeFtNi5v1GmZb%2B3xTOBXOJpWkcV0OCu8lbJFf6DrWSqwIhAJUbUo1VkxqekTgZBjPYXML0ijvoh3erTRNrBIgxNzUwKv8DCHgQABoMNjM3NDIzMTgzODA1IgwfqxJVNsWvrGw1yc8q3AP3zMEtUUnPvci%2FW%2BHiZDNpHdUi8htARBqh4nrPM9DpZnLBmLyTYfvYmwXbOppZ1jj1RHh5mKu2K5F85HsCOdszH%2BNIH4XOK%2Bo30q58TtRwn9qjzCHKkOGj67nv5e0i6VV0r%2FhCR9dlUxsCvG0wVo9ED7TtYsxgvJKCTqySpoJS4%2BwD%2F%2BZE5ywnEIbxJti8zIylQRWi902tGoKW2%2FdfjL5GShQ4QIFL%2B1uJ1hjXq4uEqG0JsADoI7P8iWX6iHl6SjZ9lZgo9sU39RpsFxpPEmNP6OE%2FUH3w9m%2BN%2F2U3N3nUxHCTfwU4ReEy7fNgqzIHTgU0O278%2Ba9xG6Iv%2FIt8Bt5k9ovhgchwZkKrxFUltotOJ2StkDe1Kg%2BkD%2Bm3jUMomQu4yksDG9BcnOX9BH9u3xfEsD78zqAvzArf5mfZPiH%2BC93L4Y59yQdWhNalrOtpGKDYm2sOpe8cWGwt6BTJFaVqRxQtqfoPayfTsCAoeT%2BY087FhzOTjPAk5l741mPL9Kgn1GsXm9Shn6h3660t%2BVCsYhjD2%2Fz44KUaAtIvFg72X1JrT7rBInITwVT%2BbZjaURe9iUxcYjJbHpQAqENDxKUz%2B2UYkLo7i7Wm1LAPEyPof2ibp35A1HshFdaCBzCRgpnEBjqkAdNmLuvMq4rB2PkFLG%2BwD34VxPEjJGcT%2BNhCf8Wq4pMZANZbmJUgKEptkBqtZOBARAHcKtX3hhxNu4q%2F4uKGKra%2F7Rh07dg2qcDzBWjgSnpK%2FIUyuE0QWRoiVshbZqdHKvpDXfCdjqDQ6a2m0lpPnk29mgTMW%2FcUxEATUimrghtBYhK9Qf5LPXcMeMrFKjbaninXGmIgOHUTo71TWNyYmblKrvLU&X-Amz-Signature=c28e494643ad5e1d3b9390239c1e82879ac754e9edf54a8d30235f3046cd05ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRSMJDK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDK5RcAprxwLG%2FDm45l58PjV1Hy9O5VYrwART5aEqTy%2BAIhAJQcm7WwB8HLMn2k8FgXR4l65Po81H3RVFPFEBVKwLweKv8DCHgQABoMNjM3NDIzMTgzODA1Igx0v26cdm0BiFTT0fAq3APuELlveHNc8%2BbYNxZXCif1Dacig8SL%2FhpQHYOMLz5AAjAnwrpKi%2Fn5NIHfmOpJMDow6PRj%2BjWf83uTKNE0cCpczLui%2FfsseG45peXUa4UAQ%2B%2B%2Baao5bYG9%2FFKYRWS9Icw7ikpqSsymbl6KiZ6QLldrQGck0SnLra8SM8JBiiUQvbD50B6VmRnVT65HpPz7c0Iu%2F6sPuv5h4PAS4vZNlTouAj7vE63Xy4v8YNcBWSj7Ggh33ayO71yr0424LsB%2F98GaQhMHDy7BtLAydFVUFA4TB8tIQJ72yfWXAqnC%2F7V8Jb26VeLqtTkEFyM%2B81fhEGUPEhyepsBQr61udJTOXWHMjlPZ0Y8Ug3T9YE8isR87qJGhaWkAdETxmqEbPDZg0eMUyLdqmnf8oAZEsPe26cJEweUic72TJN5uA08ATe7C9v1CDN9fZ7ObYhfi7UgfzZ2y6pAfj7gO6NMa9i%2Fe2irZ%2BOmWv3Vj1njIsUDVvndP7vjJi9nuWy68t5fFVpGwmJOsJKf776gSyQbgFJBf9BFTaVBnxamLhPoUb%2BjHeNkO%2B%2FVXVvQ43TakGmzTD37vzXHX%2FdMBkhio%2FkgD3SIxdw9z8MoN7TpXitIpkK%2BxJM1sms%2BPwA19h6H7siVtUDDD%2B5jEBjqkAd%2BfGU%2Fm7g5AgTFkczJp6Sa7qKvwh6%2Bh5UI0LZvVKJl4NaYg42spm7%2F81QjWmDyZTGZUwPyzg8ga%2BTq2XRH8u%2F7XCb%2FaFAtRjaDS0WWwMXiVH5HTk5Setst5EVnMgW%2B06qRzEDUcSdMoAEnTAXGHLK0eLZdpUOD6G2AIq%2F8%2BKBEhcMh8X1dZr%2FF7RIo%2F69kmEtdXeqMYCuElpIBNtd0HJAGDgSpm&X-Amz-Signature=81d33e1aaa038c4aae4b92e040e07ceaf0d17fc8ed3aedfc64c4e11606334e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHW3OTU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF3JW6LS%2F%2B2CjjM5kpU7%2B73wxlBRv2nCwKz8v9k0j%2BPJAiEA0acCk44ZIBKCW1jFkccMIL%2FMuIFLscg0PEABWn7Yrj8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIqAFIX8F3%2FCBFRUxircA2cVbd1MJG1yZrwUMGSN1oZR1GL7v7VMn7mKGCDL7Ot8dZhNXIMm0FamwUIHCt%2FApWkh96zmwgCG8AQ6MbczFMEO0%2F1QckdftZor8SkBKFUbuMa84fwUteTHwwUH6QmPaaAY1qLT9icAQ8AkhMxk2Z8SopwJU4zp%2FHuIYFcz%2FTlCiV39s%2FvmA%2B3zzUJcDk0fBuMCVZAVsd18GtRb3vBO%2FXZuWj22e5XzzHaAMx%2Fd2Y5c1IqA4QaCEbLs4zEHA%2FD2%2BTkgz3VI3KiTwGHaMpdG76ffGZ0uztq6S5JmbHttg7Kx4DW3T%2FP3N%2FYkaW7EA2jbTQUJTMbOpDfzMXPTj6Wz3IqVFKpRV%2FnVXd3uaiCC7juxREtK7bG9srhoowMRUHxw91YeNj3Bp17Lx6LlRr6Xwh47pUZm12gkMsVZ9n9icaB27tBt6LvcrNynF9nEfcMl%2Boolx%2Fra6p1L6RuwH%2F2CuZ4QjK4XvFUsfmfYyfN9KXh%2BKQqlFlC16SuzjxHioCC%2B7aUddGXaygzlamvhE37yGhSi8DBxiWxcv%2BVf%2BnzdM%2FgO8YJsNkV6YlYZDn%2FBX5jzL8RPquEkxmPKWERbj4peP2XpuJYJWlYW9nHyfBfhYnQdwx8SDu6MAiZPkPpbMMqEmcQGOqUB%2F62VS2aGDDlKNs3uud64uHoM6iUYg8Fb1n61xVNZlZlHJ8ni5Gh6RLG1BnLCLX4%2Beub95o1jFY0KAZDt5dEpN2VmxXH5xzFeGynRb4szlfK8uvAyIM9I7gJHewFDexaePnOIesT3nL2YWuGPlSp%2BuzJD8YF3Yadb6tU9CKdiSk7wdBQlPmD%2By5WMM0yoiTWEZUIDYtCqx7f3kgGVnvS5zdFtz9%2Fq&X-Amz-Signature=7c4bd650cfa8c0ab8969a68e5ce76492c5ae6e3f360a89d7de7b9808092e23cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
