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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JRY7CZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCT7XtLqhyXufwrQPWVr%2B%2Bp4NdbVYutsjMGuBEDypLQIhAPdsdyoKdBbm4sUb9JQrFwiR9kBmruCnUojo1%2FQEKM6TKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKxf8S4uTc8Fg65yIq3ANCoiVtImiCV5FAlcVPsYEz%2BcllW4sLELuFqh1A0WsMIo17TDNAUsFl%2BZo0admGdesoJjspeYMWFZbyqEnvBtSJDC%2FrRiyVxBSu6e3JtnBHht1qmow759hwXQd%2FlOm1vRw7NOCqWWO%2BVI%2F%2Bd3ZqBFDT2cxmMCIhXJQvq%2Fxsc%2B1LhFwWoM0szCVG1XPBpJAmu8sjYzsb%2FiqITp9ZKg%2BuaMCcXbGMPXgjP8hrfX9v2%2FoV0q0Qg7ZIG587EGbW6YOAiwNXAcwoNkd3JSQafoIU%2FmH6w0xIJaneW9iWN4clKo1s62nO02F%2F2Bc7FDiDtatYhbZyauWhPda6BQhz5M3mDz0Bkqd55NHtOqD1ZazOxCImHSQWdfNYBPovjwnE3yVU8n0uJU58n%2BVy3KB4kNqJH%2BGqyiusC8Pg4OIzqrB1bSKtjJPVsjMK4CiFXjmOYc1%2FCiXbkVNPW1GTs%2BtCkieKYGiKAnd98YPJ4S6xvEhMeV1il6f1PjkItzM2UmvqJdoHo%2FwTH%2FNoHd%2FcbkmMtlwhku0b%2Fc5rRJ%2Fo2%2FjpRe6sQO7Dh%2BNKRq%2FKVJaU5GFbnnjqs%2BNoI6PRRF%2FElVh0rqwK0ni%2FwU0wwgi14YIu1YgKMTcw6TTwhSCATvH3frRigzCKgbrEBjqkAWp5sE3KzbrdL9Dt0plIo9GkqkpMx4qjJP%2BdQQaQKusM3A83VPnodvs2gF0WpGEQjpzQNHaiZ1wYuSzO6Jj3zf4TSccnB256JfzNmxUwhTHhlhW5%2FPk0v62OxKlVk1T96GMxi9gAu8uzzlGka8PGplje5JVDZgT0Alg53PGlu07KBFBaDwWr0KLHsiknYQZ7PzstL8M0PdJGEluXKRAyy%2F3l0hRP&X-Amz-Signature=228e5481c02c0c3594a7ae8cfca2f1be4208cad9708c623b4bb03e7de1365ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JRY7CZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCT7XtLqhyXufwrQPWVr%2B%2Bp4NdbVYutsjMGuBEDypLQIhAPdsdyoKdBbm4sUb9JQrFwiR9kBmruCnUojo1%2FQEKM6TKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKxf8S4uTc8Fg65yIq3ANCoiVtImiCV5FAlcVPsYEz%2BcllW4sLELuFqh1A0WsMIo17TDNAUsFl%2BZo0admGdesoJjspeYMWFZbyqEnvBtSJDC%2FrRiyVxBSu6e3JtnBHht1qmow759hwXQd%2FlOm1vRw7NOCqWWO%2BVI%2F%2Bd3ZqBFDT2cxmMCIhXJQvq%2Fxsc%2B1LhFwWoM0szCVG1XPBpJAmu8sjYzsb%2FiqITp9ZKg%2BuaMCcXbGMPXgjP8hrfX9v2%2FoV0q0Qg7ZIG587EGbW6YOAiwNXAcwoNkd3JSQafoIU%2FmH6w0xIJaneW9iWN4clKo1s62nO02F%2F2Bc7FDiDtatYhbZyauWhPda6BQhz5M3mDz0Bkqd55NHtOqD1ZazOxCImHSQWdfNYBPovjwnE3yVU8n0uJU58n%2BVy3KB4kNqJH%2BGqyiusC8Pg4OIzqrB1bSKtjJPVsjMK4CiFXjmOYc1%2FCiXbkVNPW1GTs%2BtCkieKYGiKAnd98YPJ4S6xvEhMeV1il6f1PjkItzM2UmvqJdoHo%2FwTH%2FNoHd%2FcbkmMtlwhku0b%2Fc5rRJ%2Fo2%2FjpRe6sQO7Dh%2BNKRq%2FKVJaU5GFbnnjqs%2BNoI6PRRF%2FElVh0rqwK0ni%2FwU0wwgi14YIu1YgKMTcw6TTwhSCATvH3frRigzCKgbrEBjqkAWp5sE3KzbrdL9Dt0plIo9GkqkpMx4qjJP%2BdQQaQKusM3A83VPnodvs2gF0WpGEQjpzQNHaiZ1wYuSzO6Jj3zf4TSccnB256JfzNmxUwhTHhlhW5%2FPk0v62OxKlVk1T96GMxi9gAu8uzzlGka8PGplje5JVDZgT0Alg53PGlu07KBFBaDwWr0KLHsiknYQZ7PzstL8M0PdJGEluXKRAyy%2F3l0hRP&X-Amz-Signature=041d7f2be83f92e6d918f56955390a1de7b583e674311ac7bf5f0d917fce7584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JRY7CZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCT7XtLqhyXufwrQPWVr%2B%2Bp4NdbVYutsjMGuBEDypLQIhAPdsdyoKdBbm4sUb9JQrFwiR9kBmruCnUojo1%2FQEKM6TKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKxf8S4uTc8Fg65yIq3ANCoiVtImiCV5FAlcVPsYEz%2BcllW4sLELuFqh1A0WsMIo17TDNAUsFl%2BZo0admGdesoJjspeYMWFZbyqEnvBtSJDC%2FrRiyVxBSu6e3JtnBHht1qmow759hwXQd%2FlOm1vRw7NOCqWWO%2BVI%2F%2Bd3ZqBFDT2cxmMCIhXJQvq%2Fxsc%2B1LhFwWoM0szCVG1XPBpJAmu8sjYzsb%2FiqITp9ZKg%2BuaMCcXbGMPXgjP8hrfX9v2%2FoV0q0Qg7ZIG587EGbW6YOAiwNXAcwoNkd3JSQafoIU%2FmH6w0xIJaneW9iWN4clKo1s62nO02F%2F2Bc7FDiDtatYhbZyauWhPda6BQhz5M3mDz0Bkqd55NHtOqD1ZazOxCImHSQWdfNYBPovjwnE3yVU8n0uJU58n%2BVy3KB4kNqJH%2BGqyiusC8Pg4OIzqrB1bSKtjJPVsjMK4CiFXjmOYc1%2FCiXbkVNPW1GTs%2BtCkieKYGiKAnd98YPJ4S6xvEhMeV1il6f1PjkItzM2UmvqJdoHo%2FwTH%2FNoHd%2FcbkmMtlwhku0b%2Fc5rRJ%2Fo2%2FjpRe6sQO7Dh%2BNKRq%2FKVJaU5GFbnnjqs%2BNoI6PRRF%2FElVh0rqwK0ni%2FwU0wwgi14YIu1YgKMTcw6TTwhSCATvH3frRigzCKgbrEBjqkAWp5sE3KzbrdL9Dt0plIo9GkqkpMx4qjJP%2BdQQaQKusM3A83VPnodvs2gF0WpGEQjpzQNHaiZ1wYuSzO6Jj3zf4TSccnB256JfzNmxUwhTHhlhW5%2FPk0v62OxKlVk1T96GMxi9gAu8uzzlGka8PGplje5JVDZgT0Alg53PGlu07KBFBaDwWr0KLHsiknYQZ7PzstL8M0PdJGEluXKRAyy%2F3l0hRP&X-Amz-Signature=bfbd0cc45eaf14f1903386e548438e76a47875ff401fa7dfad3dcca62866a9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYW5VZS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJis6ifD1xS1r6zNbjj4fGKNui4XDbAITvEQpO8ltiRAiEA%2FDjghbogyjPOFELcPldGwBBv8mtgVGQCpzt5Z2dDfIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFNjyBV02O2IqqssByrcA1AY7mQKQKtP4A9i249QbtILVyODi9JCh5oPp4X3Wm%2F2S6F6EXzJ4T920fAh2hzaJx1cAWe5UD4tMtBqZO63Rdv3%2BnQRmH1fLttTIkxQ6hNY4cAA3Q%2BHGj1fDwjZjanJ3Okxca7y0P0nqIZ2T9zaEwHoLfTlDPDdDDEw0V9Bs%2FOWzLOkXKVafjFozKgzGQCzswCAdhn8KeDjSrHp2bH7T%2Blep1syZyWDGD7VXz%2FRS8wGayylJ4A4aLQ0b0qqdJA%2BM9a%2BQx%2Fef5TeyBma4ay%2BJq9Dy4L6vY8FbP%2F7Ex0XDTA5mQutgmACPS0riQF1W0Z9GAii7Y1VC6pf2TJb%2BjWGv7bnm3wFiAezz2dvReJ9%2B0KRjdsCnWDhwJaOyjvbFApNuJXt5JPI6abdvv95GWJGnhM8HUEETqtU3K%2BtJ8W3KPBVatytJ%2F0Z6sBFpea%2BQZT2KVF%2FBd%2BvBebf77xbFzyhXUs9L3dbvsxNsa5qDhncmPZkvl6lAxVnC%2FnbTMiX6lYVknk5mAgjIBNE1Ek%2B7WjVLfZNSSxtUQdRlZn011rVZEY4iib1t6%2FRIzlx1WU8iJy49%2FcnM18LxSnbKgYkWrhReZdpDxnVSHiSuBHcrwUmW6ov66EplEPXJU8iH1WwMOmAusQGOqUBJV5aXHdrVOp9fPwEMh1bLdLGnYapRw0Rb5na7s8pPy1hN3ToJP5U4W53%2BhLsz7TaAw0niOyM%2FmuM6hmC1FBbNXw3g%2B5rKveCiwFc6sdqIkk%2FgrmucAZm1aOJnP%2BrNpGkoFd2tQUaqIJruv0fl%2BoTT8%2B4EM1KsqDw0TldD9CAaMfvjdrQDsVxp3XiswzcLfemygp22A91oowVldoDyhQemsX0anE3&X-Amz-Signature=f094c7823cc70840bc0892ebeee4c16e6306ba9d4c28ed439fa9cae5857b29aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBX2EOQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSpaH3QXqIDK64GpxIgC7PCmJNYSQwXgtvhDmxRFmZGgIgdd2D%2B2spDfKOkobsLVwtQQYnoWcQuPoQu7niCwgCCnMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAzkJ3IgDbDHNV3lVSrcA5S7vyQqU9TT2Uq8RKvdnffWRTUXtC%2FRvWmgvjjoqmcHTjWmZ6Zlno9Uu9XNIKtT7Tkmk9EUFJixEN2fQrf83XgpUtN6YMMhzP%2FYJrm6rOjXOjBUD9R427o%2BDkPJ7gg4%2FV3le78lfeAn%2FqK0U2wdoUq4yW4dS28o5HK4QtiwkJfnh8Ea1yP7pvYQSm4i%2FDIwL%2BthmsQyM3%2BJxhbThmtM0BkXqpzsNwdAtzLhkX2ekQ1diTu27W%2BOxTKaqRS94Mw6hHa1FI98MfRUjAdp6oVXmn9CPqfZ4NmIR%2FG2W0BfsTdvBinaCB4w975XNsfm9zkHgPLKrjeaffNbne734rr0vQmDs79PsAqZUVo495ch9UifxnMZ9amhnJ9iX3XBXt8bO%2BA4JYbG7U3jZpAAIRDcJAZ%2Ft891BP9wA4wPhC0D%2BwkJwZoPnvCicy%2B%2BmIcRu5ZyrvQ67PIX4O1zdKVQcB6ds%2FeisoGj%2FNIARFHSnQgbsTJiNJ8t4YvSld9f4xpC3EtXUDTFyO1N0LQP1hYPenbCqwUhZehU8R6rUWE9WH6LY34HDMvsgva5CRjYrbK9gcs1t5qTO32F5TB%2F5ObTQBavJS1%2FNQcwI%2FjzRxXhDAMsB3nATzKVhq5olCEuFoFdMPyAusQGOqUBTcyGdx3iCk598%2BjuNtiwOg9IkqR79Pmk78DcR3YQPXjs4uhvnhtGgWVpStD4%2FNcPUBjZiFSM0ZTrjw7bxfqw479pLYTONMASAuCCcTycevQ4F7s81ihADUHGuojT9b5KsRhhGJRUGbUw3TgwgGpUu9kzFkgzwljCjm9c0q5%2BN2XqPETcv2JBR3fgI%2FruD7sz7QD9mNYrh6IZgwvaIYqpHHiME%2B%2F3&X-Amz-Signature=b08ec504f017dc749e4d13df4f55468e579f496696cc06509bc4d052fc190fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JRY7CZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCT7XtLqhyXufwrQPWVr%2B%2Bp4NdbVYutsjMGuBEDypLQIhAPdsdyoKdBbm4sUb9JQrFwiR9kBmruCnUojo1%2FQEKM6TKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKxf8S4uTc8Fg65yIq3ANCoiVtImiCV5FAlcVPsYEz%2BcllW4sLELuFqh1A0WsMIo17TDNAUsFl%2BZo0admGdesoJjspeYMWFZbyqEnvBtSJDC%2FrRiyVxBSu6e3JtnBHht1qmow759hwXQd%2FlOm1vRw7NOCqWWO%2BVI%2F%2Bd3ZqBFDT2cxmMCIhXJQvq%2Fxsc%2B1LhFwWoM0szCVG1XPBpJAmu8sjYzsb%2FiqITp9ZKg%2BuaMCcXbGMPXgjP8hrfX9v2%2FoV0q0Qg7ZIG587EGbW6YOAiwNXAcwoNkd3JSQafoIU%2FmH6w0xIJaneW9iWN4clKo1s62nO02F%2F2Bc7FDiDtatYhbZyauWhPda6BQhz5M3mDz0Bkqd55NHtOqD1ZazOxCImHSQWdfNYBPovjwnE3yVU8n0uJU58n%2BVy3KB4kNqJH%2BGqyiusC8Pg4OIzqrB1bSKtjJPVsjMK4CiFXjmOYc1%2FCiXbkVNPW1GTs%2BtCkieKYGiKAnd98YPJ4S6xvEhMeV1il6f1PjkItzM2UmvqJdoHo%2FwTH%2FNoHd%2FcbkmMtlwhku0b%2Fc5rRJ%2Fo2%2FjpRe6sQO7Dh%2BNKRq%2FKVJaU5GFbnnjqs%2BNoI6PRRF%2FElVh0rqwK0ni%2FwU0wwgi14YIu1YgKMTcw6TTwhSCATvH3frRigzCKgbrEBjqkAWp5sE3KzbrdL9Dt0plIo9GkqkpMx4qjJP%2BdQQaQKusM3A83VPnodvs2gF0WpGEQjpzQNHaiZ1wYuSzO6Jj3zf4TSccnB256JfzNmxUwhTHhlhW5%2FPk0v62OxKlVk1T96GMxi9gAu8uzzlGka8PGplje5JVDZgT0Alg53PGlu07KBFBaDwWr0KLHsiknYQZ7PzstL8M0PdJGEluXKRAyy%2F3l0hRP&X-Amz-Signature=7d1c60c21e34658be20c03cb25ec188166a88eb3e5f999b9cf70c63377e4cd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
