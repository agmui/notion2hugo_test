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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFCY46T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDFMw%2BUMFhwWPYEhUF83oEH8V2afeEqWy2YskR32p4IIwIhAMgCjX5nvN%2Bnci9sP%2B%2BAe5CwscW1hP30J12PJlVfssj2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxKVnemqEzNbA8e9ygq3APj%2BIbx%2F97RWxNkiALH%2F3gUUN73o8Za8Nl7Abneg%2BGSUYko23oHbxGEd25cZIyxLKN3dCV5Tmy5UGwP48lMz8jbJIfjNeLBXKsvGbK0w93HELZmE7XQBN2Wf9wSWbQ6n6%2BvSRwsBNB4Errt7UpuOQQfvgvsH5yGvt8T6u40D%2B%2F9xMkMu2ivpS%2FSXrcmxXuMstxTndtdRnIHDO7qZwL2Lji%2BTltGKX1KaC96k5VNkPkHGWmFOYCMSo8GA6lwpFzf06bVmlTcsFfSo%2FCDfxlEogfuwHsyLXrRRil7GcTEWOO82SxE16F2PB6u9nkEgdKXRt0oxsXThK3wqs58iP5f6mZI6kOdT5z7%2BKiXNtUu5I9wQS5OIa8KzCPOOfv2LXGrSkgxdFkXmidi9sHp0yJkk%2FjI3W0aOnVWZUUposhd0eFS4ZPKWhyNDDbQHXYH22rxeI4pSoCOfcLLw%2B99ONopAANou7y9P6EF3CfqYkUTU8f4SQODtCmT16l82fbjFZ7Yf8pdpaJ%2BTcmy9KSvu2GuzDGlo4aK%2FbKncdwH%2BIRLRqc7OUTup5Un8h2pxxVbcjMncnwVImb0PVe4ANeVZsLSXBhGygdTDUbcPqvw9r5rCTexhJgwinC8lwX09fqOdjDgveu%2BBjqkAdK7cwDoYZlgn9Vz3WeMyk8ezsDSsiSd1UlXSc4OEB%2FXk9AKJZDw3YXwSoZgjzo3P6f7WTJoODAAISNOIGoCFCt83ffCufMHq9eiSth4tVRfu5y7JEVnFz6G%2FUD2kfWBn8GO7TvKkimeZZqKXE%2FJDnQ1B35tgBu44%2FaoGCxFqYx2fnEEpYTWfcl8FZ4lFzwzEzRG7yM13jaxT83GX1GuRer09P83&X-Amz-Signature=03abb92bbc568f82c53b86fac3c7fbb7d6347d5b66efd8f34eeb6b69d3fc41f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFCY46T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDFMw%2BUMFhwWPYEhUF83oEH8V2afeEqWy2YskR32p4IIwIhAMgCjX5nvN%2Bnci9sP%2B%2BAe5CwscW1hP30J12PJlVfssj2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxKVnemqEzNbA8e9ygq3APj%2BIbx%2F97RWxNkiALH%2F3gUUN73o8Za8Nl7Abneg%2BGSUYko23oHbxGEd25cZIyxLKN3dCV5Tmy5UGwP48lMz8jbJIfjNeLBXKsvGbK0w93HELZmE7XQBN2Wf9wSWbQ6n6%2BvSRwsBNB4Errt7UpuOQQfvgvsH5yGvt8T6u40D%2B%2F9xMkMu2ivpS%2FSXrcmxXuMstxTndtdRnIHDO7qZwL2Lji%2BTltGKX1KaC96k5VNkPkHGWmFOYCMSo8GA6lwpFzf06bVmlTcsFfSo%2FCDfxlEogfuwHsyLXrRRil7GcTEWOO82SxE16F2PB6u9nkEgdKXRt0oxsXThK3wqs58iP5f6mZI6kOdT5z7%2BKiXNtUu5I9wQS5OIa8KzCPOOfv2LXGrSkgxdFkXmidi9sHp0yJkk%2FjI3W0aOnVWZUUposhd0eFS4ZPKWhyNDDbQHXYH22rxeI4pSoCOfcLLw%2B99ONopAANou7y9P6EF3CfqYkUTU8f4SQODtCmT16l82fbjFZ7Yf8pdpaJ%2BTcmy9KSvu2GuzDGlo4aK%2FbKncdwH%2BIRLRqc7OUTup5Un8h2pxxVbcjMncnwVImb0PVe4ANeVZsLSXBhGygdTDUbcPqvw9r5rCTexhJgwinC8lwX09fqOdjDgveu%2BBjqkAdK7cwDoYZlgn9Vz3WeMyk8ezsDSsiSd1UlXSc4OEB%2FXk9AKJZDw3YXwSoZgjzo3P6f7WTJoODAAISNOIGoCFCt83ffCufMHq9eiSth4tVRfu5y7JEVnFz6G%2FUD2kfWBn8GO7TvKkimeZZqKXE%2FJDnQ1B35tgBu44%2FaoGCxFqYx2fnEEpYTWfcl8FZ4lFzwzEzRG7yM13jaxT83GX1GuRer09P83&X-Amz-Signature=a4018916d6b478c37be21c17870c7020ae6ff059649439cad9c7623f62fa6a34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H2EQFF6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCYKCqW%2BUozjDvfbcAcWofwqx%2BqFnf0yUD2FnM0n2qRnAIhAO8wCPK%2B03W7%2BGtT5LemM7YAhWwsvURPww8AJgOlLIG4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyucH6a8OB6eXFVQiQq3AM%2BsuGmNbyZF%2FwFZxCje5%2BsWE4pOOpn73SSRHMr7PZrGJ6aZ%2B6BtiVpH9WvHoEZlskAxaMjtXpr13IRkdrtD0MyRJio%2B582wmTJK6ax0mFFceB%2FxlliQeNwIykaLD5Nbf3I7jqsiWeNqu7RqyK9gD3SDMow0uvtnLon7WMvPVlGHCSAqVEAPrpeY1j6CWHy3%2FId2PxhgwfWPGU7vP%2BF4f9eKva5zGTFqvH9VWoJIRf2aX5uLMem4MMNl1UEIKxOVtDr9uR0bj47nSalJAtKRtSCpLkGZK89X6c3R443XJIhNLToMHAIkDEp0sBep%2FUCaQedRF%2BNe%2BIdMen5aA%2Fi5j%2Fq3QQE6HjK2AeHJSs08MX%2F4kK8LrqsIiFOlokv8%2B9fJIlBKd1x2LuVPI8hRBA23s91TR1bSCn%2BB9g3pKWusKzh1q8Q60%2B9I1OmoQsp5Ks6GKhQai%2F0lrYxARk0RLNczwXrMbCt%2FjU7L4xSSI%2F9VXSXNz6GhuFbDtXjFgTtaaKqqv5yTZOa1WiyfFuiiRWK8mXrNiwwhz5su9UsHnIZYaAAOCiHjYeyaMU70klVA8cikircgLVMC6n6vnTIC6qGU8zeJMJjXwdxZWr0tWJkm0mnmL40pkIGOV61DMSrzTCbvOu%2BBjqkAUcaeeEo3PN%2FuBEYnS7HaaRl%2F3Tr0b6gDEMGbpUZNckYomv7hsayf4iNYMXrChKZDW4pJJIjaBTerTlGx3Iz0sN8Cr18Lj32wZxY2lQBC%2BcGal933sw1xFaLnW1IjqTNm6JqrFXA9PiXdUIbx0DVjFq1IJNlrtZzHHe%2FliDu6Ox8cvFu8i%2B1AAwsy0OGkqLNswC54PXrOIQ42%2FOqFPRQvkN6l8Qi&X-Amz-Signature=4f93af23adcda1d2b3e8da02ea44c49c6a315538ac8e073c1e8dcfd93ed711bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UE5K7C%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE8KNF2o04VDueFs5V3StnEV828oJuHxbv75Ib%2FrEj98AiBJe1k78g4w9G7UrSodSpyHfIylr4b2xH5S3k1ZWONdNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMO3cEdvYIFN8Hnz43KtwDly8nm%2BxUvpN%2FGlO0X9%2FDPLA%2B%2FUKCWLWucqfnmlo43gB7qLQ9eyuqA7eu1DZ0bs6A80xta2vMykF7%2B84p19EIuwf4i0HUpD1WN191r5n62QmjMeaiJVaBQbwAXh95HSa6JdyK0ZFTl3OZDdaxJ2VgH0DrZ46htJ2WCx1FYZTby86H6uaWpjuDyj4m09U5wur%2FGfBoHzOTVXy9nHtf3barHqma%2FGHT3nJhbtcrdid7YBlgNP1vtWoS8cBPpeZm%2FBPxMDiXtZqP5wC6fM1FabnIuTxTNapwsGQYsaZZTMXANd3AJ%2FPz36VMBOTNv9WFzNRxGxmgvRTFha9BZG0vO7L7l4SgkAR7lPV%2BoCcjvFNOBAvzyjpyQX%2FqzbJi0oUOlpzYupBXvbhAPGdygbq1HysMDsCXtm3G9VfeHOloekwXHBtZlMftYqiRuK1wOky5wUOPkSZ1J3HQYdaV1DqxKyttBIC%2B6GaRl3jQT7TEDvn00zFxtAB5rWJxGj5S%2Fc4MFj0x0jnf7H3iiTd76xiOVpMlmuEEGrm%2BVu9IJus16H%2B%2Fhn7DDWPO93iV2Ych5IhXdfBg3aV4ENllKDioSqgSC2bb%2BUFWHdE5RxtGmt1ztk0DS0dIBY4MMlj6kXy6yWkwkbzrvgY6pgG1YaD4v1UmUv4Ps66AW%2Fc8EuHJPxwHfy8BQEHXvFk8l4ndmMGb%2Fx8ZcHJrvzTPRYm8Kv43pvNG8hunCBOj0%2FWC35kKQtBnxlxxpcPQ2TU9qb%2BGVdLZaNc17Ktabp%2BT9XFTqmCsCu9pe96KouOWo0O9BbRjWPHEGheF%2F9euaX7Ns0s05Yc6EsCIk39u6I24M4NCjqvZqiYanVFS4IHe9Fzcrhsl0eT8&X-Amz-Signature=5267ea29c08c8de859825fc6b5bee73047e55a464467892dfad176262b57f0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFCY46T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDFMw%2BUMFhwWPYEhUF83oEH8V2afeEqWy2YskR32p4IIwIhAMgCjX5nvN%2Bnci9sP%2B%2BAe5CwscW1hP30J12PJlVfssj2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxKVnemqEzNbA8e9ygq3APj%2BIbx%2F97RWxNkiALH%2F3gUUN73o8Za8Nl7Abneg%2BGSUYko23oHbxGEd25cZIyxLKN3dCV5Tmy5UGwP48lMz8jbJIfjNeLBXKsvGbK0w93HELZmE7XQBN2Wf9wSWbQ6n6%2BvSRwsBNB4Errt7UpuOQQfvgvsH5yGvt8T6u40D%2B%2F9xMkMu2ivpS%2FSXrcmxXuMstxTndtdRnIHDO7qZwL2Lji%2BTltGKX1KaC96k5VNkPkHGWmFOYCMSo8GA6lwpFzf06bVmlTcsFfSo%2FCDfxlEogfuwHsyLXrRRil7GcTEWOO82SxE16F2PB6u9nkEgdKXRt0oxsXThK3wqs58iP5f6mZI6kOdT5z7%2BKiXNtUu5I9wQS5OIa8KzCPOOfv2LXGrSkgxdFkXmidi9sHp0yJkk%2FjI3W0aOnVWZUUposhd0eFS4ZPKWhyNDDbQHXYH22rxeI4pSoCOfcLLw%2B99ONopAANou7y9P6EF3CfqYkUTU8f4SQODtCmT16l82fbjFZ7Yf8pdpaJ%2BTcmy9KSvu2GuzDGlo4aK%2FbKncdwH%2BIRLRqc7OUTup5Un8h2pxxVbcjMncnwVImb0PVe4ANeVZsLSXBhGygdTDUbcPqvw9r5rCTexhJgwinC8lwX09fqOdjDgveu%2BBjqkAdK7cwDoYZlgn9Vz3WeMyk8ezsDSsiSd1UlXSc4OEB%2FXk9AKJZDw3YXwSoZgjzo3P6f7WTJoODAAISNOIGoCFCt83ffCufMHq9eiSth4tVRfu5y7JEVnFz6G%2FUD2kfWBn8GO7TvKkimeZZqKXE%2FJDnQ1B35tgBu44%2FaoGCxFqYx2fnEEpYTWfcl8FZ4lFzwzEzRG7yM13jaxT83GX1GuRer09P83&X-Amz-Signature=abc26883e0db79db5422f4ba11e20ed03fe3ed0544d951298949cd4909bc4638&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
