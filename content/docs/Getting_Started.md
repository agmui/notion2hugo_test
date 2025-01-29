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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MRSISK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIByshr7R3Fyza9JrQg0PdxGs9frHW0MBQFCx6ULXP5RkAiBBIyG1YqwqeTukIAlY1a5guX1T863THrPseX8KwR0buyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDWPy2eJxLxjMMNcKtwDlpeaemeQZLCDzcMonNowr0O7azljoBRhTmdxupYHXTTR8HBQMmEgPJTgTD3u3cCqIWBZ2v3Wl%2B311huVSQVv723ulWiF20GituLoo%2BLu8ZFmVQ0xcRAoye%2BKAmdbMNEV%2FVcOS254jVkX29SBNyFp99xFxOEGY4V3cSPR4Q3ul9fvrS55ggaoN6T1vTEdD792BuIhiq6CWLldRLpvh%2BnLLGk8CVvaVXR7xdY%2Bfi%2Fnt%2BsuPypk6TJ6QOxh%2F2iJaedDVHz3p4BD9gqATugtF1OBXeL85EeyxjiHGFZJQWfKcZ%2BBSel8jSGhqUySWYq3WVMD06RH7nTkZZ7W11wYBUhAQ1liGpaG8xEyAOeSc5tfqL2AwbQfZ%2BX0AUZ9PfOaKGBx3H0qVFFyFLap7LmTWQn9ZXhnjaklCbClAi1hZX6kvH47YxHKdtI3pGcXg4Rz6qYhwcmGBB%2FLPwPFCb%2F%2BUV6uxDQPBAkF1dvrDIUCjYGxQpv%2B5lpTiB8CzFFEs%2B1cLIN2geqqiufkEHMCApd3ZOg2NF%2BXoBFtiFADaB1n8kJhTuwp%2FiynOrHgpwB5tQUBggyVYzGNSd2fiGFs3kJjQhQhoZGFSbwg0%2BArwoBx0Y48ihTuVIpm33uajj%2Fv7AYw5%2BjlvAY6pgGaYcZxhKWUlN5XxNwoYv0mDeUkkAJRS73%2FMYPTePN%2FV%2FAWYBY13XSjl%2F9mVKVdRsCUhRJJJXHA5qey1x%2BDW0PuG%2BxCzFqA%2BtCsMoKttj%2FRcCiUHWV0FTC4UJEIQTwrPfmtQvX3Xz5Dq7khjRxiagFf8ba1d1hGp0H08q%2FrxJ80C7z3mkvUagLcofd1pzem36jzoDq2fArQrDtKsGBi6Xn8Few08tfJ&X-Amz-Signature=7979ea58f5ecbabdbb6c39c6f7472261f8b3bee714760bb3ffe358366c2dab42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MRSISK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIByshr7R3Fyza9JrQg0PdxGs9frHW0MBQFCx6ULXP5RkAiBBIyG1YqwqeTukIAlY1a5guX1T863THrPseX8KwR0buyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDWPy2eJxLxjMMNcKtwDlpeaemeQZLCDzcMonNowr0O7azljoBRhTmdxupYHXTTR8HBQMmEgPJTgTD3u3cCqIWBZ2v3Wl%2B311huVSQVv723ulWiF20GituLoo%2BLu8ZFmVQ0xcRAoye%2BKAmdbMNEV%2FVcOS254jVkX29SBNyFp99xFxOEGY4V3cSPR4Q3ul9fvrS55ggaoN6T1vTEdD792BuIhiq6CWLldRLpvh%2BnLLGk8CVvaVXR7xdY%2Bfi%2Fnt%2BsuPypk6TJ6QOxh%2F2iJaedDVHz3p4BD9gqATugtF1OBXeL85EeyxjiHGFZJQWfKcZ%2BBSel8jSGhqUySWYq3WVMD06RH7nTkZZ7W11wYBUhAQ1liGpaG8xEyAOeSc5tfqL2AwbQfZ%2BX0AUZ9PfOaKGBx3H0qVFFyFLap7LmTWQn9ZXhnjaklCbClAi1hZX6kvH47YxHKdtI3pGcXg4Rz6qYhwcmGBB%2FLPwPFCb%2F%2BUV6uxDQPBAkF1dvrDIUCjYGxQpv%2B5lpTiB8CzFFEs%2B1cLIN2geqqiufkEHMCApd3ZOg2NF%2BXoBFtiFADaB1n8kJhTuwp%2FiynOrHgpwB5tQUBggyVYzGNSd2fiGFs3kJjQhQhoZGFSbwg0%2BArwoBx0Y48ihTuVIpm33uajj%2Fv7AYw5%2BjlvAY6pgGaYcZxhKWUlN5XxNwoYv0mDeUkkAJRS73%2FMYPTePN%2FV%2FAWYBY13XSjl%2F9mVKVdRsCUhRJJJXHA5qey1x%2BDW0PuG%2BxCzFqA%2BtCsMoKttj%2FRcCiUHWV0FTC4UJEIQTwrPfmtQvX3Xz5Dq7khjRxiagFf8ba1d1hGp0H08q%2FrxJ80C7z3mkvUagLcofd1pzem36jzoDq2fArQrDtKsGBi6Xn8Few08tfJ&X-Amz-Signature=b73bdf940903bfd43d0c9fd3efc6a8b8d61a956b20d10d89a74f5b9cc0fc69f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6LFOI6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDhc%2BoU749pw8GxTYrNuhc8GirBsWMm%2BqVCGl09saEFwQIhAMm6Mz22QAOyKapXv5m%2FLO65BVGVSMnOPFhVbQ6GcYP1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2FKcrEgPklGO6N7Uq3APfAe1hXv0v%2Fi0IdQfmoypL6eR46EGr32jhiiMYZq3rrHAV2RQ2x9Yb1L%2FvAI8ddnMMfUQrLhG9WE78cuwZjjSeKEkzGaR9%2B%2FPXL0vh67sOM3OF5XT2EfBA%2BJR%2F6CWwwiMA1oun%2BI5S2T3fb1HFJp%2Bd6w550pcZ8Z%2FLUtBJdWxKltVtbmBRTpsQEaViELjA0xp5ZOEtE%2B1FzPBXPXDE9ZDmM8UYp6JdZ7dz9v9qyPcPY9a%2B9ddtedb%2FflxoAhKM46ZRMDgaGHHnV8Nte%2F1Ygvw2le8bQ8DACSMdJFlFBvQtT8zCe2LQKSZRhoN6iB1Tah8Wk1mMruESoZLBlI86CYlN28MczO9tJ08qMFdONYFjygG9A%2Fnuo42Iwiv1BiNCsr89HGe9CRwyIQDP7V5ygtl78BHAS37PlVDm0TAewIO2ny59iLcrKLOHoMUyu406T%2FU%2BTWooohTWgsjU%2FZGZ%2FbawH8ODF7cgkqs1MkaZYw92FFK9UWNVuX%2Fc6%2BWPfGXmLJgCHVYpSk7%2Fqa40eyG%2F%2Brr9cqwqvBHd0xu0mfIZSXJs4JiCsr5WsmdPNGYWaExQI0IJOn5hlKA0GuDWbizmVrlWnnqrfuH5iw9sCpDWI2V7Pkwj7jJhAolUV%2FEEuDCm6eW8BjqkAQHlnjewWDf3PO0cveBL%2FyNwUV2VGOdV3%2B%2F5FFzTyFiHeY4dMv33HurafNUWtkZy69LGJMl6lTXts%2Bs0Q7bijWBJ5I1xAsrHWbXjlg6jMDpVhj02Xx8RRFgDk2sSYsHyrzRJtR4Z8MqsCpPGti8LypA3lpjaO3po51Oyl2okCpDd%2Fnz1hiu2zVIBFN5WwLBCKh4CpbE7n%2F3IbPLJc8f4dCWfqgfI&X-Amz-Signature=7a710a27a48877d1b5bd5eaf5bc00df1fbcf340b0a3449c5fff940daedd45793&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFUKOWZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIE6qMy%2F6CT3xDMZT03Tjo%2Ba%2BNCeQz0sx7oEwCNyXzuC5AiAj538y%2B%2BAysKMafxbSnjqjHtnG2lrw7j%2F4uT0%2B6bAhqSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4%2FLda%2BH03bn8V1EKtwDyjlIDNGPoJtsVBvRsocI4hhOHcc7NeIuYy1nNsAGQVLrRhDfUP6kwXjTTjNftCmdzEicBuUxXYGhdbxrKDG1a04TjWzRlUEHPQHjtxLAr2vSjNJYIg%2BXQHffmdxNw5UsAdodvvn5D8Bhz6OrsA5OE1A3%2B9%2FtisKSZitXFp%2BMEJWAb7MO4aDG5pbiBnOSLn1k1GCJxqIXntj4aOWFinhXISpPIZ7O7vNmOtsrndWHzwnGBEqPQ9%2BuSMOcsU%2BOqZfpSdCo%2BGcSQ2etGyUjwjOMAQ4f0Ofs6cOrAt4TFRKQm%2F4YZBzm5zMLglzOKoN4gYSZKxQWD3KnOVn4vAMbZNMWtOWa%2BjjamHdqPWvevUlQF48hbrzG7CiYYttIB8vf6YB0%2FhYeMCICC93UiAG%2FHhBLOOi4SVt26rEB853Ux3zE%2Fqj0pETMAquRvlP22w1w07tHJKoSO9I1f6gJiuR%2FjoQUZ5tfoxnSKrve3zslX4LszdJ%2Fqdcy79jO2lfHwF7Y3ZFoYtdlkYgodjSE%2FcrECBIKvK5%2BoQGUY9KmSA1BQOVDFr%2BS0iik4Pc7zIUNdBvVQPdc7yqVlscFWBiry1iS3EZ%2Fjv4S%2FAW66vZuqA%2Fgr0syinPTzbaCCJ8u6SqMlKAw%2BujlvAY6pgE3SVfgk3yyChofHuJYzvs5JJuAeqQVhhmsk6Tu2ukNtfkfmuOcEx5LUeu1shA%2BZlsmMdYBHfa4lORa6GJmiyD%2FNv9lA3jzPXmKJYcyetONLcI%2FryRAeMvkHZgiiTWwLvraAkcrQf1uD11LZwzAzJ7A5zHGvHKAlGxaUB6MOMWIVevj2KMAzMD3zlZuOjQ6UCLkBp5S1zmdUqgTtydSv3DgylNEPQ0j&X-Amz-Signature=0adda0bc83ff364f88e5d0b1b72ca5a33bd2fea6b2901e1cf6f8ad7d55eaf16a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MRSISK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIByshr7R3Fyza9JrQg0PdxGs9frHW0MBQFCx6ULXP5RkAiBBIyG1YqwqeTukIAlY1a5guX1T863THrPseX8KwR0buyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDWPy2eJxLxjMMNcKtwDlpeaemeQZLCDzcMonNowr0O7azljoBRhTmdxupYHXTTR8HBQMmEgPJTgTD3u3cCqIWBZ2v3Wl%2B311huVSQVv723ulWiF20GituLoo%2BLu8ZFmVQ0xcRAoye%2BKAmdbMNEV%2FVcOS254jVkX29SBNyFp99xFxOEGY4V3cSPR4Q3ul9fvrS55ggaoN6T1vTEdD792BuIhiq6CWLldRLpvh%2BnLLGk8CVvaVXR7xdY%2Bfi%2Fnt%2BsuPypk6TJ6QOxh%2F2iJaedDVHz3p4BD9gqATugtF1OBXeL85EeyxjiHGFZJQWfKcZ%2BBSel8jSGhqUySWYq3WVMD06RH7nTkZZ7W11wYBUhAQ1liGpaG8xEyAOeSc5tfqL2AwbQfZ%2BX0AUZ9PfOaKGBx3H0qVFFyFLap7LmTWQn9ZXhnjaklCbClAi1hZX6kvH47YxHKdtI3pGcXg4Rz6qYhwcmGBB%2FLPwPFCb%2F%2BUV6uxDQPBAkF1dvrDIUCjYGxQpv%2B5lpTiB8CzFFEs%2B1cLIN2geqqiufkEHMCApd3ZOg2NF%2BXoBFtiFADaB1n8kJhTuwp%2FiynOrHgpwB5tQUBggyVYzGNSd2fiGFs3kJjQhQhoZGFSbwg0%2BArwoBx0Y48ihTuVIpm33uajj%2Fv7AYw5%2BjlvAY6pgGaYcZxhKWUlN5XxNwoYv0mDeUkkAJRS73%2FMYPTePN%2FV%2FAWYBY13XSjl%2F9mVKVdRsCUhRJJJXHA5qey1x%2BDW0PuG%2BxCzFqA%2BtCsMoKttj%2FRcCiUHWV0FTC4UJEIQTwrPfmtQvX3Xz5Dq7khjRxiagFf8ba1d1hGp0H08q%2FrxJ80C7z3mkvUagLcofd1pzem36jzoDq2fArQrDtKsGBi6Xn8Few08tfJ&X-Amz-Signature=6179246f2688c0d9381c982adfa8cb2dd8505825944e2792ea4a35f77826cdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
