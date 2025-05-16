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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OAQPP2A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF33FmpdS0Es7XLtTs36cUIRosLgQeL5ScOx7MMxYCISAiEAxQgHjXuMJPEkHR%2BvhUOlR7BNQYsIrZ%2FGMEDqfxeCOoYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI3cwqPpugxaL2o7zSrcA71Brl0Z4hTjDz4n5OF5j9HEH6Wl2%2FjqmPeQnyab7iuKnysESCbqg5WQmedCv8iwuhSsZVNbIjOjG6DhmIh3AkCEZg6qTGIRJxoCmx%2Fy40fDPH4DJukFZGeCaLOP6eXNPRc9A1Zaf2PmzlQy1LRJBRL2MHYkmKej2v3ODGuLwzeUei2Pynetfaf6ih4MUmCuUKQ9yzyScTLxmj82F2VN34OSrzLyvIzGx6lRjjjUTE4zU3Rx8mc37B%2FrgWiwjSx61UZJeOkZWNoDOxxAFBW1TZuRWKub46T6vh75A22ije7FviqXvkeg8%2BZpE0zbB8KfomjC6O2arMX54SMYZUgBCkGVkkMl5fSP%2Fqg%2FcZ8qETBHz%2FYei4rSSAWRjxZPBxdK99r2KU7yT98tOnYA11pvUhaXaDjoLYIplR7FV1q%2BBuqBlO%2B%2BaHmRzRfxFvaVpNZN%2Bg0B0Vpc5E85sS4AK%2Fa4%2Fmp4g6uPSAylG%2FmopqpTafVP6xk6lClYpxGZI%2FhfdV4H864jBmQ7jGNP7qWN2omadE9Ve8iF57aQRqBo7vdfBUZXB9Ec5s7XcnauLUyNH83352wehs%2BJ06Df%2Bdr5sQumUwnNvscI7DnoKqK24sY7lCFhdKD2HAMczFiZqhw%2BMJuonMEGOqUBOxl9ZvsRqcWe5qVK04qoUTymbA%2BxFV0itxuAssoYd2EaLeUrZiNTLSyKjWGK%2Bcizez0412qKre1Ysm19aAb0z%2B%2FYrgIcZUR9JspbeaRQE0E72JtfkO9bKL7yom3nhcE7Tg3btmT7tkX%2F1Knp3nChFststri4VH4%2BYGJ6NJGe0%2Fo9ONu6DYzxXUz9bnhp6SJNqzraN05yQqyy4hXjSctqrdzcakKu&X-Amz-Signature=2127a099c36cdda9b2c4570a6d0a0baa34f927dab086eb2cc0e696cdbd386753&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OAQPP2A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF33FmpdS0Es7XLtTs36cUIRosLgQeL5ScOx7MMxYCISAiEAxQgHjXuMJPEkHR%2BvhUOlR7BNQYsIrZ%2FGMEDqfxeCOoYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI3cwqPpugxaL2o7zSrcA71Brl0Z4hTjDz4n5OF5j9HEH6Wl2%2FjqmPeQnyab7iuKnysESCbqg5WQmedCv8iwuhSsZVNbIjOjG6DhmIh3AkCEZg6qTGIRJxoCmx%2Fy40fDPH4DJukFZGeCaLOP6eXNPRc9A1Zaf2PmzlQy1LRJBRL2MHYkmKej2v3ODGuLwzeUei2Pynetfaf6ih4MUmCuUKQ9yzyScTLxmj82F2VN34OSrzLyvIzGx6lRjjjUTE4zU3Rx8mc37B%2FrgWiwjSx61UZJeOkZWNoDOxxAFBW1TZuRWKub46T6vh75A22ije7FviqXvkeg8%2BZpE0zbB8KfomjC6O2arMX54SMYZUgBCkGVkkMl5fSP%2Fqg%2FcZ8qETBHz%2FYei4rSSAWRjxZPBxdK99r2KU7yT98tOnYA11pvUhaXaDjoLYIplR7FV1q%2BBuqBlO%2B%2BaHmRzRfxFvaVpNZN%2Bg0B0Vpc5E85sS4AK%2Fa4%2Fmp4g6uPSAylG%2FmopqpTafVP6xk6lClYpxGZI%2FhfdV4H864jBmQ7jGNP7qWN2omadE9Ve8iF57aQRqBo7vdfBUZXB9Ec5s7XcnauLUyNH83352wehs%2BJ06Df%2Bdr5sQumUwnNvscI7DnoKqK24sY7lCFhdKD2HAMczFiZqhw%2BMJuonMEGOqUBOxl9ZvsRqcWe5qVK04qoUTymbA%2BxFV0itxuAssoYd2EaLeUrZiNTLSyKjWGK%2Bcizez0412qKre1Ysm19aAb0z%2B%2FYrgIcZUR9JspbeaRQE0E72JtfkO9bKL7yom3nhcE7Tg3btmT7tkX%2F1Knp3nChFststri4VH4%2BYGJ6NJGe0%2Fo9ONu6DYzxXUz9bnhp6SJNqzraN05yQqyy4hXjSctqrdzcakKu&X-Amz-Signature=a57d082434f539732b60c540f5e9a563f6f3349359ebbc4f5eb6eba04dc69389&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OAQPP2A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF33FmpdS0Es7XLtTs36cUIRosLgQeL5ScOx7MMxYCISAiEAxQgHjXuMJPEkHR%2BvhUOlR7BNQYsIrZ%2FGMEDqfxeCOoYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI3cwqPpugxaL2o7zSrcA71Brl0Z4hTjDz4n5OF5j9HEH6Wl2%2FjqmPeQnyab7iuKnysESCbqg5WQmedCv8iwuhSsZVNbIjOjG6DhmIh3AkCEZg6qTGIRJxoCmx%2Fy40fDPH4DJukFZGeCaLOP6eXNPRc9A1Zaf2PmzlQy1LRJBRL2MHYkmKej2v3ODGuLwzeUei2Pynetfaf6ih4MUmCuUKQ9yzyScTLxmj82F2VN34OSrzLyvIzGx6lRjjjUTE4zU3Rx8mc37B%2FrgWiwjSx61UZJeOkZWNoDOxxAFBW1TZuRWKub46T6vh75A22ije7FviqXvkeg8%2BZpE0zbB8KfomjC6O2arMX54SMYZUgBCkGVkkMl5fSP%2Fqg%2FcZ8qETBHz%2FYei4rSSAWRjxZPBxdK99r2KU7yT98tOnYA11pvUhaXaDjoLYIplR7FV1q%2BBuqBlO%2B%2BaHmRzRfxFvaVpNZN%2Bg0B0Vpc5E85sS4AK%2Fa4%2Fmp4g6uPSAylG%2FmopqpTafVP6xk6lClYpxGZI%2FhfdV4H864jBmQ7jGNP7qWN2omadE9Ve8iF57aQRqBo7vdfBUZXB9Ec5s7XcnauLUyNH83352wehs%2BJ06Df%2Bdr5sQumUwnNvscI7DnoKqK24sY7lCFhdKD2HAMczFiZqhw%2BMJuonMEGOqUBOxl9ZvsRqcWe5qVK04qoUTymbA%2BxFV0itxuAssoYd2EaLeUrZiNTLSyKjWGK%2Bcizez0412qKre1Ysm19aAb0z%2B%2FYrgIcZUR9JspbeaRQE0E72JtfkO9bKL7yom3nhcE7Tg3btmT7tkX%2F1Knp3nChFststri4VH4%2BYGJ6NJGe0%2Fo9ONu6DYzxXUz9bnhp6SJNqzraN05yQqyy4hXjSctqrdzcakKu&X-Amz-Signature=e0c562beedd36f9b6e96035394f31d5a814661faed2a11becef242bfde17f235&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATKYCCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD853zTeUuP5%2Fu8ta4PCJlTMUrq%2FmcbApJ6LQR6xG3cewIhAM6%2B%2F8DV8pIy662RpEqKPjQkjp369ALB%2FpiNkiHeSlKGKv8DCEQQABoMNjM3NDIzMTgzODA1IgwUH8hSrAmUmGYR6wkq3ANYAs%2F5Uv%2FwSMF4IrraoVP%2B1szptklLXeCJXeUmyDyp1LGdN4gPHoV34qGPsBXeocbqUifxPEdWfPo%2BdJtI7pYYXGGI%2Fc5qp8LWrqqvx2v78GhuZYgJ%2FebEQ0T7F%2B0TlgK5gaFbg5j94xq%2B1XckDTlftIRtY7p4qsJ37lU9Pj6vStQIjWFfzvTMXLp8WF6dvTuIK7rYw%2BSstQU4ilP90NkKcx6BsTQ61CP5XJLH3eM3BV5X1cASPQtKliJOmDROqVo1uPRgOVhvSE5brIkjn7ski38rtsqYXwdHdBDRCjMj%2Ffk371nN1rYxc9EOMGtEeXA1cR3y7JtHIdVaGs0w3g%2BFePoSdxDh290YP833wTLPo7mtHcAJOcYKoFiDm8BMrYVcLl4BbT7cVzc0YMX4RFLoYh6uMUxPghGhBGsDW4bcHaCiWbMVf6izwqHO4NA0ojQVAOswS2ZR%2BiG0ACosMk9DzarM8J2J388bfEX%2BhqpBb3YPma%2BFVDrqkuuLGUpwkIMW27k7Z9WnbOKGI%2B8Bv21qDp1%2FRsU1fes5vWXJNhG7yv90HKqhU6sLm%2Bf8D7lVY3M8%2B4futuipsNsPW27errxkmpnzy2KB%2FnfIhHARHmQgJHnDQ7kovibLE%2FJ7ETDIp5zBBjqkATS4jPtU0Ig6o7o8L%2B9qK49JTCvT9iAxk%2FpS4yoaTaWW4i4zyy4EQO%2BWpp1bRxSxdQ1hWXmVtlIKaOx%2BC8FZDGLM9aqXqBXXgxgjdSr2OiQgwQJF9r74lnmLA4qecF3IZxfdRhsFW0vpybxjyxu%2BXDRunc1OhUGwrcX5SgJgXJE9IHBsdGMaIuLQHgLYGlhA5V3YDjGjArUvL6wqzo9pGu5eVr7y&X-Amz-Signature=0338505eb93358583cefd2fb20c72946ae52d6586852244450bdc202158cf4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSG6F7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWf1OJwYS9LHdC%2B8CCiJ60H2%2BkAjuHNedv17zd0yf4ZAiAj1cxFPndUd6e5ocwdrPeqMNH222oHsA8yTtfq9XPZ6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMBWn3NM46jGmLIDk3KtwDphrX2n2Ygj2RXUqzEtE0vYFvBi0miQXjovJoJTMOg6wNv2h%2BcrtIXry2QErqFSaN8ix6VFgV5b8qv4wtBfhxI400Unw%2BxjI8SpS52kWW6ktcTawn%2FowJgbTTonwDI8sBC820hheAeqZ2c2%2F3G%2FFJgYqa8oOgeRc2qjHrI%2F2Gx3MtiZZOPPeITsbGm1ESeYcmlhUVRnF44unLY%2BPEWzh6PcgKTwNxp3uvZz18deMDvm3JPSz79mQ%2F9s7Y7NZg6WrkO93cR4vI5oeZ%2FcmmMq%2By5UTzTsl1Qhpre5NqxN1xPgVe%2BJ9kS77LR4KkF9%2BDq5mSD6i0NC27eaTSnwe8%2BO2pJhy2yQAFQpYPy2pC%2BzSgxlyKNl8ZK15fVhmJqQvKA4zZLd20CB1dhO%2BeE8oCLc1ygEsC3GIna6Sk75InUfnNd321vko%2BbXtxmTeUcLOdQtXeQ8owUE5ReRBBITM0p3ONZstkA5b2Xqpc5jMJhptiJ%2FZcv5DSfFfhfXXd2F%2BLWnEky1k5sRBkTgyhqOlnXQwf42LZFhEjMc7SuI5yYViFYfxXSwJIpR3G%2FyJEpdKHwNWycq6DGsuVmjtRVaEmCw3aawaRRXtapp6LmRORR%2BJdwfoLE0hxl1E%2FqBbAP7Yw1KecwQY6pgF70%2BYRVr%2BnG4qF6di09sg%2B38YVQNMXpe08lqtGTv2h4xSDNfIbjKTtuI4dbwc5w7I0tzNgzeX5h0kJF%2FX0eIZSS640rHxzf2BEKic1rb5O1PGV84RJ%2BbLFGEuIUujJQzQXSjHzieLbZYD0IokwucqfXUJI0i3y%2BgBdHC8Y32iZ9FAPPpADvixGUtThLpjykq0W4CjQ6hQ%2FWplY0ty3meiR1lAfjljg&X-Amz-Signature=a59276d23a109a7486aab8be0b523f2832782122bb58013f6b4de8c69d48b28e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OAQPP2A%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF33FmpdS0Es7XLtTs36cUIRosLgQeL5ScOx7MMxYCISAiEAxQgHjXuMJPEkHR%2BvhUOlR7BNQYsIrZ%2FGMEDqfxeCOoYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI3cwqPpugxaL2o7zSrcA71Brl0Z4hTjDz4n5OF5j9HEH6Wl2%2FjqmPeQnyab7iuKnysESCbqg5WQmedCv8iwuhSsZVNbIjOjG6DhmIh3AkCEZg6qTGIRJxoCmx%2Fy40fDPH4DJukFZGeCaLOP6eXNPRc9A1Zaf2PmzlQy1LRJBRL2MHYkmKej2v3ODGuLwzeUei2Pynetfaf6ih4MUmCuUKQ9yzyScTLxmj82F2VN34OSrzLyvIzGx6lRjjjUTE4zU3Rx8mc37B%2FrgWiwjSx61UZJeOkZWNoDOxxAFBW1TZuRWKub46T6vh75A22ije7FviqXvkeg8%2BZpE0zbB8KfomjC6O2arMX54SMYZUgBCkGVkkMl5fSP%2Fqg%2FcZ8qETBHz%2FYei4rSSAWRjxZPBxdK99r2KU7yT98tOnYA11pvUhaXaDjoLYIplR7FV1q%2BBuqBlO%2B%2BaHmRzRfxFvaVpNZN%2Bg0B0Vpc5E85sS4AK%2Fa4%2Fmp4g6uPSAylG%2FmopqpTafVP6xk6lClYpxGZI%2FhfdV4H864jBmQ7jGNP7qWN2omadE9Ve8iF57aQRqBo7vdfBUZXB9Ec5s7XcnauLUyNH83352wehs%2BJ06Df%2Bdr5sQumUwnNvscI7DnoKqK24sY7lCFhdKD2HAMczFiZqhw%2BMJuonMEGOqUBOxl9ZvsRqcWe5qVK04qoUTymbA%2BxFV0itxuAssoYd2EaLeUrZiNTLSyKjWGK%2Bcizez0412qKre1Ysm19aAb0z%2B%2FYrgIcZUR9JspbeaRQE0E72JtfkO9bKL7yom3nhcE7Tg3btmT7tkX%2F1Knp3nChFststri4VH4%2BYGJ6NJGe0%2Fo9ONu6DYzxXUz9bnhp6SJNqzraN05yQqyy4hXjSctqrdzcakKu&X-Amz-Signature=5a587129b902e4e26592f307058dc5baa39a80afcd47bccafc725a8ed474ee46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
