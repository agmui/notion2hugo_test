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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EITI6YP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZcFvGzllWlJDQX%2FJWIYzHmGc1uVkEKTtT%2BHAudCCABAiBrcVDJ4Fz8N1vW%2BeoHVxpfXofxr7qp3sfH2jOYl%2BwPsyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMLKPkHeXcZc78jkLmKtwDDf0HookkRzpkvorC%2BUOFEBas2%2Flup1AV5y6jZUv5h6qq9wY4RMtpokka6HQ234H%2FyYPyz1FtszH4Wqs0mizCv%2BORf2t8kjFbmk6x6qYPBgQhX8WjScmza4jOGHd3fZ2HmBJ9N86awuNox3L4yF8JgiGcliKA9LpPYDjfxETX7S2zZA74ns9TfWxK6j62wBD%2FsJ%2BbpPYIXo9T3RCwztF%2B%2FaU2qiHpR%2Fn8CqxGp7iZ6dkAJLwm0Bz%2BXfmuOffb1JgSA1nTvCerSlC7d4w97v9doc3cH91gJnXFDg5p88TWSIbGHnd6gE7IGx39Xw72JZcVALbg2YoTCoXpD2PglprtApykVk4UOFezN5vpP1apKzsszoz27Myv1k9%2FjciJ40IpYsA0BhZ6tPYvNwo000hLA3sdr7xmKxwTvwkwHnhe82kAqvGuXOVhHXNND6m7lCelji0VvT1ii3ZDx5YY5KsXQs9VeamMycwglPOEVGLRai1nOhjgHLVy8PrQ2w1z6JM9byMluKqzN2xeUPK%2FQN5ZyLP1pAHAEBImqV1m7f4QQl4D3ezIuJvajJQDyovn8YpRkI%2B6%2FYPGyNzAAr0jpAnopvOEa3s4b3ZFDGx8NXwSassr5ge3wIYPmmrgKhEw%2Fqf0vwY6pgGMNMZfhvdXtVC4hP12BhbHb7%2FtIIhQ%2FfBX4%2B8NINXmjziUVfJWQGTuxk2N6E0LcoopBGoTjteJW2r2%2BqzD%2BgdS4NZppy6RZHN8oo2o1OiAXctb4TpufwqPQYeWbaawg%2Bc1ty8mgo13RT%2B%2B2fAm95xeQuI%2FJoS9y6%2FYk603MXYE8V4y2nRINBbayqLo6b4dfdLWZ%2BFG6V75lb65bPFTjtCHvfr7sXAZ&X-Amz-Signature=93cce6ab87f3072ecdd67c47146d0d1f2b8fc126ce48d7df553b52066e58c1da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EITI6YP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZcFvGzllWlJDQX%2FJWIYzHmGc1uVkEKTtT%2BHAudCCABAiBrcVDJ4Fz8N1vW%2BeoHVxpfXofxr7qp3sfH2jOYl%2BwPsyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMLKPkHeXcZc78jkLmKtwDDf0HookkRzpkvorC%2BUOFEBas2%2Flup1AV5y6jZUv5h6qq9wY4RMtpokka6HQ234H%2FyYPyz1FtszH4Wqs0mizCv%2BORf2t8kjFbmk6x6qYPBgQhX8WjScmza4jOGHd3fZ2HmBJ9N86awuNox3L4yF8JgiGcliKA9LpPYDjfxETX7S2zZA74ns9TfWxK6j62wBD%2FsJ%2BbpPYIXo9T3RCwztF%2B%2FaU2qiHpR%2Fn8CqxGp7iZ6dkAJLwm0Bz%2BXfmuOffb1JgSA1nTvCerSlC7d4w97v9doc3cH91gJnXFDg5p88TWSIbGHnd6gE7IGx39Xw72JZcVALbg2YoTCoXpD2PglprtApykVk4UOFezN5vpP1apKzsszoz27Myv1k9%2FjciJ40IpYsA0BhZ6tPYvNwo000hLA3sdr7xmKxwTvwkwHnhe82kAqvGuXOVhHXNND6m7lCelji0VvT1ii3ZDx5YY5KsXQs9VeamMycwglPOEVGLRai1nOhjgHLVy8PrQ2w1z6JM9byMluKqzN2xeUPK%2FQN5ZyLP1pAHAEBImqV1m7f4QQl4D3ezIuJvajJQDyovn8YpRkI%2B6%2FYPGyNzAAr0jpAnopvOEa3s4b3ZFDGx8NXwSassr5ge3wIYPmmrgKhEw%2Fqf0vwY6pgGMNMZfhvdXtVC4hP12BhbHb7%2FtIIhQ%2FfBX4%2B8NINXmjziUVfJWQGTuxk2N6E0LcoopBGoTjteJW2r2%2BqzD%2BgdS4NZppy6RZHN8oo2o1OiAXctb4TpufwqPQYeWbaawg%2Bc1ty8mgo13RT%2B%2B2fAm95xeQuI%2FJoS9y6%2FYk603MXYE8V4y2nRINBbayqLo6b4dfdLWZ%2BFG6V75lb65bPFTjtCHvfr7sXAZ&X-Amz-Signature=9ba071600e72ad9178b7892ecff87378110bf11c96aec81235455419bfe5ad34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3P435X%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdMcdGBUS6gdliNEMr%2FBCW1XlKY3ukKDukFkD4bHzvJwIhAMyv1Obj8YkNykeRfzuWm28LvsVU3H2Qbj%2Bo1SmKRtHwKv8DCBcQABoMNjM3NDIzMTgzODA1Igye65Hz1MN0UKDdNrIq3AOu2p8EcJ9frH2omNkZzgywFOT3csxNjU%2B13W390IgQMERx2MgCERb95TbLlBiEtyr6lOnNxL83%2BNsY7YIrpSnh74wSLqV6if2v8a%2BQ9bEjfs4uxry2Q5Yl%2Bz%2Bn4c7fgON6yIkW7M4uF0Iuje5DTVaPSDxu3mnPlp5H5APC3yXURIbqsgvXsZs%2BgXJjhW9WFjThPtO3425yYs7Jgb3jHrjdmLonC04XML1Q0z57uR%2Fej61kw0HDVdUZ4WRymZNM8Fz5h814s1kR3pCYKJ1mGOi41TFmyV3mCqNTWeKgPbslm%2BNbZ8nMihcQRev6vv0%2BAw4yUXw7%2BbR8rHQtxmWNZnXijSCoY2vv8Dy1WWooNBM6oi8F2z%2BZKHeRgi2Zdgi4qTC3rN6uJA0%2FCZEez3MATMZZnHNz%2F9%2FKzK9EznS%2BQvU%2F5xvNf6nCXzuTfqfqc2rPgpWzao6kIBQuVcLImOZLAynNeQN7VqLeGQnFdwqKZJ9Tl%2B8dVEPx1ZrAoUPqNLDHFum%2BZYbRyqlmvgedVxCKrLFGJkaEDXCfu5J3%2FENUnyTI0%2Fx3939LmH8X3TCKxVULrVytVGjpK46kmwhF0n8hmaBnACq0cU0n4pKJElrCTNhOPR9EbSz%2FSwlT19%2BV5jCbqPS%2FBjqkAQdGWrokJwYOPdLChPmz1GVPefiNJwFZoR8j9RTY6aWoBjgeWz1ayg9gd3%2FP2%2Fzm1n%2BMEy0Xsil%2BSVolcv%2BbZ6kccWroDkFOSF%2FVT75Fsg8XHP9dD4gAlGrZg12Rp67dAyLctp%2F3uMgDJ5XPrBHYZIv1tqA5%2B7xgpWzP3vpb%2FKPs9vMU8mmZ5NS1cwTRylVW0UMQk%2BjLGZmF5tmP1gx5dLA5CQXY&X-Amz-Signature=37f23e346bcfb8f12d2b3f2b4b5bd4b5b12c1854ab547d47513412bfe6c428e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIELUTT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoSwiGz%2F2u7GEj9ub%2F8Smb5cVfjJ22l50QiPEBAWGVmAiEA5iZfFbjpCTcDsf9QiwqagjcxJZ6agpFqTlr34nMWDzoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMnzqhuf9QEJur3UNircAzUsHKhrR%2BiXvRDx31oSh9KRFa%2BRVanzhAPB%2B5uiC0r69vJVgPhlZidvx0FxAJ9gethVpDU%2BEMVNNProgYUjgRHwP7ffnaEoqoAauGlEkhevrdoLt2urXf4jlcg4xUbt7peXFs80Hh4Fzx9S9ljIAMLdTqE7tt6YTewI6cnw4d8yz1P1veglgt38FNYpmFwf2HHDcKNcBqWEgg5ot6Rpz6LfQ%2BTvotU%2Fx9oq6TxpYmuFzeN3zEzyUYDay3o4h98ScGNe35Cqj0W02JEWt%2FYVhjbd1xKaGCJvRdEvf9yWmcQYIHtePmf3FMZc5hnsiGGlKKisX8Z5UkWa%2Bu7EM4kTsjpnrXV7GSUaz9dDeNVUE%2B0uZLdVShDtPWiZo9ZFfM1NMn%2Blp7p9lSJu9E3oXLWlZ3PwFlndNl1EtlTybAAjtsn6rLAD3o9LOV7e264rqMw1mYCIPXhlH3W8E72pNCiRwOHijMrmBV2rkawMXEl4MnQ0P438TWu9kD%2FriCQ3eUViUSzZnRARzIBPuz12GRilNAo0fVQt%2BjhPF9K%2BcrLJRvFdFBc1s4nzXV0qAEcw5WzP%2Buu%2Fk1IPOxAhWXQVTjEkiGBabeoKpDdjvmo6whQzoMgGtPS9xhNVHWIqt0cTMJ6o9L8GOqUB4TWdlnQWJM5b1oT%2FRmg863kyQmNtUS9zDNehNYJu0jFkhCZ0w0ktgGefAEzsg92q5%2B4NoZ2Fo3FJX473k9W4qJg%2BrX9kCTgd9UWF31pKityGucf52vAuCjimaGW%2FI6tOfyOfhqDv2WrMQl5PIjuMjIG8gQyyeu97FnKw1Cnr6DVPx0e5omqgCf%2Bu4vst6e%2FUlxG8dg2uw96NRwxV%2FS8GrbGa9VYF&X-Amz-Signature=2ee3097f369096ff0149f2a1915e308464252c285d85cabc9ab9a78e96727003&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EITI6YP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZcFvGzllWlJDQX%2FJWIYzHmGc1uVkEKTtT%2BHAudCCABAiBrcVDJ4Fz8N1vW%2BeoHVxpfXofxr7qp3sfH2jOYl%2BwPsyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMLKPkHeXcZc78jkLmKtwDDf0HookkRzpkvorC%2BUOFEBas2%2Flup1AV5y6jZUv5h6qq9wY4RMtpokka6HQ234H%2FyYPyz1FtszH4Wqs0mizCv%2BORf2t8kjFbmk6x6qYPBgQhX8WjScmza4jOGHd3fZ2HmBJ9N86awuNox3L4yF8JgiGcliKA9LpPYDjfxETX7S2zZA74ns9TfWxK6j62wBD%2FsJ%2BbpPYIXo9T3RCwztF%2B%2FaU2qiHpR%2Fn8CqxGp7iZ6dkAJLwm0Bz%2BXfmuOffb1JgSA1nTvCerSlC7d4w97v9doc3cH91gJnXFDg5p88TWSIbGHnd6gE7IGx39Xw72JZcVALbg2YoTCoXpD2PglprtApykVk4UOFezN5vpP1apKzsszoz27Myv1k9%2FjciJ40IpYsA0BhZ6tPYvNwo000hLA3sdr7xmKxwTvwkwHnhe82kAqvGuXOVhHXNND6m7lCelji0VvT1ii3ZDx5YY5KsXQs9VeamMycwglPOEVGLRai1nOhjgHLVy8PrQ2w1z6JM9byMluKqzN2xeUPK%2FQN5ZyLP1pAHAEBImqV1m7f4QQl4D3ezIuJvajJQDyovn8YpRkI%2B6%2FYPGyNzAAr0jpAnopvOEa3s4b3ZFDGx8NXwSassr5ge3wIYPmmrgKhEw%2Fqf0vwY6pgGMNMZfhvdXtVC4hP12BhbHb7%2FtIIhQ%2FfBX4%2B8NINXmjziUVfJWQGTuxk2N6E0LcoopBGoTjteJW2r2%2BqzD%2BgdS4NZppy6RZHN8oo2o1OiAXctb4TpufwqPQYeWbaawg%2Bc1ty8mgo13RT%2B%2B2fAm95xeQuI%2FJoS9y6%2FYk603MXYE8V4y2nRINBbayqLo6b4dfdLWZ%2BFG6V75lb65bPFTjtCHvfr7sXAZ&X-Amz-Signature=6ee10f59dc0294ff4141b85b1571b38b4a11f16fe731371a979d0a0a82b0edd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
