---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DHR2SY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4G6ueRHBEIiY7aavS7AFgNKoq3tP2zPWkV9SvsZ3%2ByAiBLHUCxz3ADqjy%2FUU%2BAjQgZyyKmXLfXLK9sPVt3o9Xp0CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNo7TnkIR%2Fjqw2IpfKtwDtVhV34PSVNB78oP8V4xunCoPyXf07KgngWO0mSY4lmbFXf%2FSc68Ba4BpJp6LE6%2F40XrWpjk2vY9nUwunFnRnB4NW3J3jLTErZlR2%2FrTOpidfkwnLA3R99mEacEzuoSMV8KqQ%2FRCMNRpGOMJeQ5AB3S0AVlT7PJmebGFVRO5Hgu2V1XoiJT3NvfPVsl4%2FDaT0ozu1wGoA4mH4JlnjfJwOhMSRH8BZLpmVZe0e4xHpns%2BHLit%2FbyH22zQDSLenHd%2Br3c%2B%2FZS4nk6U4V%2BId4tic5ZiF9S6XpWJ5WhB%2F%2F5HyqCObHJm1vOuzBlIfCSvir5d6KOJo7kByJTf20aBYSOUkL80JFcxsxpkWdsN0SFl7lL%2BzvafCes76LODMLZsHSAjz7Jgq0k8jnwZ8jyKfQsSHDS81t0yuvYrn4S7XHGPzAfHS7Zl4XnvkoWgrkMu13mHP0R3x6kyBAN5%2Bf8foBJ8DlG9ltLeveFU%2FvoqIA9czoW4mK%2FOxbhNGA%2FvJfN3%2FGscd2yirHG7pkWYQDlwCG3ni04gUj2nHqsa%2BFjZlGDYoxeF2%2F9JIxPCuc%2FkoPU4yciCDlWLME%2FMup602E%2BQcO6iZdX%2FpL%2FkIWLXEgH49kHVnf3NyFIFcDNNQ%2FLN6Mkgw1ZjvyAY6pgE6uFDuUa8jDp%2FLbLwGvqWBdRP08qXusO6mQab5HrynEUGvGeiI5QPw9qIqxDVKaFwP90N26ruukrdGcwsopkzqINR%2F26XsN%2B3BaFslnFys64ze2N9Cu4fUvvpZSAI13zJX5nByIhInOIZBa6WnmqGcHwNqEe4oOSeWB8Huf9ET%2B3EdYfgfSYmJ5WAIsrBRdu%2BiL9%2FKJqCZNCDuDn3YxjhMuSNgqPHH&X-Amz-Signature=f9cba3c1c26db1efe3b209826d5fdb7e5fa43a14ae221c89162e1ddb4048a62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DHR2SY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4G6ueRHBEIiY7aavS7AFgNKoq3tP2zPWkV9SvsZ3%2ByAiBLHUCxz3ADqjy%2FUU%2BAjQgZyyKmXLfXLK9sPVt3o9Xp0CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNo7TnkIR%2Fjqw2IpfKtwDtVhV34PSVNB78oP8V4xunCoPyXf07KgngWO0mSY4lmbFXf%2FSc68Ba4BpJp6LE6%2F40XrWpjk2vY9nUwunFnRnB4NW3J3jLTErZlR2%2FrTOpidfkwnLA3R99mEacEzuoSMV8KqQ%2FRCMNRpGOMJeQ5AB3S0AVlT7PJmebGFVRO5Hgu2V1XoiJT3NvfPVsl4%2FDaT0ozu1wGoA4mH4JlnjfJwOhMSRH8BZLpmVZe0e4xHpns%2BHLit%2FbyH22zQDSLenHd%2Br3c%2B%2FZS4nk6U4V%2BId4tic5ZiF9S6XpWJ5WhB%2F%2F5HyqCObHJm1vOuzBlIfCSvir5d6KOJo7kByJTf20aBYSOUkL80JFcxsxpkWdsN0SFl7lL%2BzvafCes76LODMLZsHSAjz7Jgq0k8jnwZ8jyKfQsSHDS81t0yuvYrn4S7XHGPzAfHS7Zl4XnvkoWgrkMu13mHP0R3x6kyBAN5%2Bf8foBJ8DlG9ltLeveFU%2FvoqIA9czoW4mK%2FOxbhNGA%2FvJfN3%2FGscd2yirHG7pkWYQDlwCG3ni04gUj2nHqsa%2BFjZlGDYoxeF2%2F9JIxPCuc%2FkoPU4yciCDlWLME%2FMup602E%2BQcO6iZdX%2FpL%2FkIWLXEgH49kHVnf3NyFIFcDNNQ%2FLN6Mkgw1ZjvyAY6pgE6uFDuUa8jDp%2FLbLwGvqWBdRP08qXusO6mQab5HrynEUGvGeiI5QPw9qIqxDVKaFwP90N26ruukrdGcwsopkzqINR%2F26XsN%2B3BaFslnFys64ze2N9Cu4fUvvpZSAI13zJX5nByIhInOIZBa6WnmqGcHwNqEe4oOSeWB8Huf9ET%2B3EdYfgfSYmJ5WAIsrBRdu%2BiL9%2FKJqCZNCDuDn3YxjhMuSNgqPHH&X-Amz-Signature=22dbde5451e0e56a90dd62e941702640ea6b11e330a45e562deceab130194b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DHR2SY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4G6ueRHBEIiY7aavS7AFgNKoq3tP2zPWkV9SvsZ3%2ByAiBLHUCxz3ADqjy%2FUU%2BAjQgZyyKmXLfXLK9sPVt3o9Xp0CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNo7TnkIR%2Fjqw2IpfKtwDtVhV34PSVNB78oP8V4xunCoPyXf07KgngWO0mSY4lmbFXf%2FSc68Ba4BpJp6LE6%2F40XrWpjk2vY9nUwunFnRnB4NW3J3jLTErZlR2%2FrTOpidfkwnLA3R99mEacEzuoSMV8KqQ%2FRCMNRpGOMJeQ5AB3S0AVlT7PJmebGFVRO5Hgu2V1XoiJT3NvfPVsl4%2FDaT0ozu1wGoA4mH4JlnjfJwOhMSRH8BZLpmVZe0e4xHpns%2BHLit%2FbyH22zQDSLenHd%2Br3c%2B%2FZS4nk6U4V%2BId4tic5ZiF9S6XpWJ5WhB%2F%2F5HyqCObHJm1vOuzBlIfCSvir5d6KOJo7kByJTf20aBYSOUkL80JFcxsxpkWdsN0SFl7lL%2BzvafCes76LODMLZsHSAjz7Jgq0k8jnwZ8jyKfQsSHDS81t0yuvYrn4S7XHGPzAfHS7Zl4XnvkoWgrkMu13mHP0R3x6kyBAN5%2Bf8foBJ8DlG9ltLeveFU%2FvoqIA9czoW4mK%2FOxbhNGA%2FvJfN3%2FGscd2yirHG7pkWYQDlwCG3ni04gUj2nHqsa%2BFjZlGDYoxeF2%2F9JIxPCuc%2FkoPU4yciCDlWLME%2FMup602E%2BQcO6iZdX%2FpL%2FkIWLXEgH49kHVnf3NyFIFcDNNQ%2FLN6Mkgw1ZjvyAY6pgE6uFDuUa8jDp%2FLbLwGvqWBdRP08qXusO6mQab5HrynEUGvGeiI5QPw9qIqxDVKaFwP90N26ruukrdGcwsopkzqINR%2F26XsN%2B3BaFslnFys64ze2N9Cu4fUvvpZSAI13zJX5nByIhInOIZBa6WnmqGcHwNqEe4oOSeWB8Huf9ET%2B3EdYfgfSYmJ5WAIsrBRdu%2BiL9%2FKJqCZNCDuDn3YxjhMuSNgqPHH&X-Amz-Signature=7d2ae4ced966a284c7ab2ed3f6eed8070aef0a359e7c6b54eb5148519ab2d28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHGZPD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP8pyckGSFU47Zw8g%2Bse4tMaQqEqzZkoIFuSMe31M1JAiB5U9dssXEidlwhpBEkIj%2B8IKtTCxNOJrrwiA9Wca%2F7OSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhTrgSeIW%2B7GFxewkKtwDS3oEmCWQxwBW5VSMFamsVff2wOC5XoIC7eHVC46nJHAR3WEigIsHQZYq0WWE%2F8osJcBl2JFNdNlGIzSejKd16Gx7TLbccukqShv4cfpf5QSB4k57rbgHtECyOKiPnKsN6yulUjVozFmO4bmMcTMpo%2BNtl2Nz3jsLceYyD7kn5ox06oN7u5HGdpz7z0%2Fie17HRt9oefzSLDFcF94Gf9xh6fEXUVS8mcGOY0v8L793L%2BUbi3ZOxKHn3An9zjLUTiJQmyAA55c3TNVkitMO0nXWgwEbqj0V7e%2F6bj%2B3TS1xbYyO7ik4IEUjmOuy6OGJeeO9lvxA9j2pQwsrMbnKDu1FSfqQ2qJrVUSuKz%2Ftjab%2B8S9IgO1XgSmeNdgTdTF2aSpwZRK0YZIvk64Eyb6RsZR0A2qNwygld8M%2BTDU5ukhheFOEkxcNUfbbPxHbhAEapqMgeWuV3m3LG4qt2utbemlajKSDeP069fSgwe%2BthPbuLocAaB%2BkxdLQeE%2BYB2Tbfu1MlMIIi0eH9DU%2BB6RYX9cH%2FjEDpp0ytUhtZe3qNGE1Zat7qWQ3pJopjeCUJEC9gksY%2BXIkd3d%2F3Ilc3CHn5gASRDqkIQ0l0ZsRkM797Mw3MosjhHXpPAXvfGUeozsw0JjvyAY6pgE%2BIuVDW0FIqeZCHR3CtryF%2BKLlYofy2BbcaHIgtwnvKMMNfE0xmVHtSfxYSIoVgLIGkaOFIK3hP1jls8yCQ3vA%2FTorkMLVmS2E%2B04lbzLcGRYuY%2FdhMWbLlnCCvwWvxpPNtlLMnKvshUgB3FK4uApr8La6NC2yOHzGmAH6jvuXJmmYZr8BPJCwKzJbyY27fekUXxc5dRS7k8tNaBentgoS8UUJYZkZ&X-Amz-Signature=79821e3f0825339d064ccd83daec17d30fff92fbfa07acd32ee7df9bc11b598e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234NQ6MG%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcple01%2BUO5J%2F%2FYY0ZOukETzIPPO%2FeFg084FGuJ8b1cAIhANUfH0QK%2FuMV%2Blnzye0X9rY%2BP4D57bzaYjKOp0t%2FUJ4LKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwUEtUeHJJq69P7dYq3AOThlbLIu8ZfUg0yX6THfKkMDFaey1V9534xnjbwR%2BSQ5hcsRmY59dK1AIHlsJovnx6Kc%2B2SyMb%2FnTpXKpfRI52xpDJwIel9tudfRl47EcHJKBQbK2kQWU5bo8vBz04W1Bo2se3cnXKIYvVtNVjdRraW6ufy6e%2BWBuMlLaG5IjhS%2BFZce361n8H4M%2Feltldy84Y58JtDzAn2b%2BAGTLrQDXxYn%2Bh1Ajx7i6wogFWWLzfbYE62IZyU%2BwDGG1JxzCTHqfN65Aw2jgYvUe6Sb38AmXWRVZnPdDqOxCXMpafYqmarQvig4RBpOoqRtWAJyTKS1apCRvCD9f1NB93fj74BUEXmfliuxLXdER6yFO%2BMinqXLsah46lG8RS0f4GO6P41AISQcNVidSu%2BAMjXC1qQsO9k5siv56VHuxQ4RjfMIpTPMAvgwkfrXeJ%2FMnFgtbaPJZVxrGe3EgG4%2BD1H8tf4gD7e15j6KRDcizR2aXOZneFS3EOTtuCoL9JOLiLxR2G0cXlttRBJb8HlfzgDqaKAlmnW%2FP7t0jp9Kf0CY4jqKHXM37%2Fdgnz1VX48ibbd%2FI0%2FbLZwlxaiMkfkCX4Mt38bMBQPYNJNeO4AyfHD%2FcfLTZxsfZxDYDyImNad7O77TCeme%2FIBjqkAQB3agP3Ao3ynJYpPHeCjCoDEBg0DTTfkR4GOgNGwjegfxQWf5s1ogvLQDHmuNJD%2ByDiFvzHTyEFf8470Pj%2Bgp6wdIy8M5CQRL8bBN5mxMnXCWkm9d99mqG58iEcXT3yl7OnEHqTJK%2BTnL%2BPqH6%2BCvp3DLMriUkr9%2FwoKs%2BSJfy9gboH6D4reyvGPR87lPQIj0EuMfNs7q2yYf3MZUXyg7ZegyeB&X-Amz-Signature=fe2a629d1fca8b390eded84e54f44181669f12dfce6be02ef61774b5b54d5609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DHR2SY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4G6ueRHBEIiY7aavS7AFgNKoq3tP2zPWkV9SvsZ3%2ByAiBLHUCxz3ADqjy%2FUU%2BAjQgZyyKmXLfXLK9sPVt3o9Xp0CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNo7TnkIR%2Fjqw2IpfKtwDtVhV34PSVNB78oP8V4xunCoPyXf07KgngWO0mSY4lmbFXf%2FSc68Ba4BpJp6LE6%2F40XrWpjk2vY9nUwunFnRnB4NW3J3jLTErZlR2%2FrTOpidfkwnLA3R99mEacEzuoSMV8KqQ%2FRCMNRpGOMJeQ5AB3S0AVlT7PJmebGFVRO5Hgu2V1XoiJT3NvfPVsl4%2FDaT0ozu1wGoA4mH4JlnjfJwOhMSRH8BZLpmVZe0e4xHpns%2BHLit%2FbyH22zQDSLenHd%2Br3c%2B%2FZS4nk6U4V%2BId4tic5ZiF9S6XpWJ5WhB%2F%2F5HyqCObHJm1vOuzBlIfCSvir5d6KOJo7kByJTf20aBYSOUkL80JFcxsxpkWdsN0SFl7lL%2BzvafCes76LODMLZsHSAjz7Jgq0k8jnwZ8jyKfQsSHDS81t0yuvYrn4S7XHGPzAfHS7Zl4XnvkoWgrkMu13mHP0R3x6kyBAN5%2Bf8foBJ8DlG9ltLeveFU%2FvoqIA9czoW4mK%2FOxbhNGA%2FvJfN3%2FGscd2yirHG7pkWYQDlwCG3ni04gUj2nHqsa%2BFjZlGDYoxeF2%2F9JIxPCuc%2FkoPU4yciCDlWLME%2FMup602E%2BQcO6iZdX%2FpL%2FkIWLXEgH49kHVnf3NyFIFcDNNQ%2FLN6Mkgw1ZjvyAY6pgE6uFDuUa8jDp%2FLbLwGvqWBdRP08qXusO6mQab5HrynEUGvGeiI5QPw9qIqxDVKaFwP90N26ruukrdGcwsopkzqINR%2F26XsN%2B3BaFslnFys64ze2N9Cu4fUvvpZSAI13zJX5nByIhInOIZBa6WnmqGcHwNqEe4oOSeWB8Huf9ET%2B3EdYfgfSYmJ5WAIsrBRdu%2BiL9%2FKJqCZNCDuDn3YxjhMuSNgqPHH&X-Amz-Signature=b3f172efbe2ca6359d16bae4411002d951b9350bbe5b57600482059409ef1192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
