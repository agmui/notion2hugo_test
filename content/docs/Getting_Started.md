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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7W4Z2PY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCpR9HqR78EYE2BvWSMetTw7yVS2gDc3h9aETnMu%2FEL6QIhAJAfdrabW40JCqB6KwFsB7CVoZualBtKFOQQK49H4qmLKv8DCD8QABoMNjM3NDIzMTgzODA1IgyqlMjBX3eJwVOgvuMq3AM%2BUqF9NYHnjfZeb08I2q8ePfmOb2mWhQtIJKTaqW522ydwWB4QWR8hQYLtROTuNn0h7mbykz3lzef%2BcFpz%2FYmdHW2XFdW%2FEZaLFsArlGIihSIbvt9YmS4mNcKJePeLor%2FUqYNGvfNK5%2B8jv4z2tUwoWgTYdHGbtCAbTwIHRvYrU4WEos65%2FJV9dVt4vfzxtY%2BFF8mt7Vw31Ieiem17Wwaf9ztzQNT20UIiefkOBawV9CqtjvdQPd6cxwg7UvJDfr3%2BMVe%2BYXJq2fNuIHhYGI066WKEsbFPP6p%2BiRJIZ35Q4K9JAUNRhQP3MgdBCUavabfpBCX2gDf89wl7pzNYq2QD%2BpqYsGWgEleUoDMp74j1WKz62DMBB2z3CWF7zHdGZugkQ53LRn7SVso6g%2BU5sqZ9G%2B6PNRngySURkX%2F%2BpXVN73dUY1oAmBOdNauD3IaGrJNgPXrTnwlBL9m7V8%2BkqB5WHYMZQi8k57oSEMo%2FQJeyivZIwOKkufxepy7okgYXVX5lFij%2B0Eg3aFp62xq8BjHrN1WAnuaL1fywoq72gIq5bHVPlw1rjJzOq0QKrCh8cdkgvXxky8hyQJkPnLZPOPdxFcvdJI8RLhdcMb2T6NjrhNcvJkzaB64lDnBhwjCI1NfDBjqkAU7p3XPJWFWuHXWFa5N6YZhga06%2B3nVCja3w0NKI%2BSL5XkzDLAo%2BDXvcJ%2FDc8b%2B0wN1OKjv5PyHVq2W0%2Fo3SL6SsDFJZGfF6Yp8hshOe5KBfRm7yONlJPv5KI2hNm9Jy37wHeqUoiztFcJKwPopyALEK%2FfkttDcnOt0c%2FdVNTkg7IZ1uGpZPaPXRSmAdjqsDLglQ%2FmPLva4xtex3sR8uhrqg5UFU&X-Amz-Signature=17d7f6297ff1212fca85f1ac8422f67284d362c5414c039caa83aaa1adb7d8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7W4Z2PY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCpR9HqR78EYE2BvWSMetTw7yVS2gDc3h9aETnMu%2FEL6QIhAJAfdrabW40JCqB6KwFsB7CVoZualBtKFOQQK49H4qmLKv8DCD8QABoMNjM3NDIzMTgzODA1IgyqlMjBX3eJwVOgvuMq3AM%2BUqF9NYHnjfZeb08I2q8ePfmOb2mWhQtIJKTaqW522ydwWB4QWR8hQYLtROTuNn0h7mbykz3lzef%2BcFpz%2FYmdHW2XFdW%2FEZaLFsArlGIihSIbvt9YmS4mNcKJePeLor%2FUqYNGvfNK5%2B8jv4z2tUwoWgTYdHGbtCAbTwIHRvYrU4WEos65%2FJV9dVt4vfzxtY%2BFF8mt7Vw31Ieiem17Wwaf9ztzQNT20UIiefkOBawV9CqtjvdQPd6cxwg7UvJDfr3%2BMVe%2BYXJq2fNuIHhYGI066WKEsbFPP6p%2BiRJIZ35Q4K9JAUNRhQP3MgdBCUavabfpBCX2gDf89wl7pzNYq2QD%2BpqYsGWgEleUoDMp74j1WKz62DMBB2z3CWF7zHdGZugkQ53LRn7SVso6g%2BU5sqZ9G%2B6PNRngySURkX%2F%2BpXVN73dUY1oAmBOdNauD3IaGrJNgPXrTnwlBL9m7V8%2BkqB5WHYMZQi8k57oSEMo%2FQJeyivZIwOKkufxepy7okgYXVX5lFij%2B0Eg3aFp62xq8BjHrN1WAnuaL1fywoq72gIq5bHVPlw1rjJzOq0QKrCh8cdkgvXxky8hyQJkPnLZPOPdxFcvdJI8RLhdcMb2T6NjrhNcvJkzaB64lDnBhwjCI1NfDBjqkAU7p3XPJWFWuHXWFa5N6YZhga06%2B3nVCja3w0NKI%2BSL5XkzDLAo%2BDXvcJ%2FDc8b%2B0wN1OKjv5PyHVq2W0%2Fo3SL6SsDFJZGfF6Yp8hshOe5KBfRm7yONlJPv5KI2hNm9Jy37wHeqUoiztFcJKwPopyALEK%2FfkttDcnOt0c%2FdVNTkg7IZ1uGpZPaPXRSmAdjqsDLglQ%2FmPLva4xtex3sR8uhrqg5UFU&X-Amz-Signature=f41fb5a82db807a751f104aacf3491a3c76fc89b05d95617c241218a24ac3fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7W4Z2PY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCpR9HqR78EYE2BvWSMetTw7yVS2gDc3h9aETnMu%2FEL6QIhAJAfdrabW40JCqB6KwFsB7CVoZualBtKFOQQK49H4qmLKv8DCD8QABoMNjM3NDIzMTgzODA1IgyqlMjBX3eJwVOgvuMq3AM%2BUqF9NYHnjfZeb08I2q8ePfmOb2mWhQtIJKTaqW522ydwWB4QWR8hQYLtROTuNn0h7mbykz3lzef%2BcFpz%2FYmdHW2XFdW%2FEZaLFsArlGIihSIbvt9YmS4mNcKJePeLor%2FUqYNGvfNK5%2B8jv4z2tUwoWgTYdHGbtCAbTwIHRvYrU4WEos65%2FJV9dVt4vfzxtY%2BFF8mt7Vw31Ieiem17Wwaf9ztzQNT20UIiefkOBawV9CqtjvdQPd6cxwg7UvJDfr3%2BMVe%2BYXJq2fNuIHhYGI066WKEsbFPP6p%2BiRJIZ35Q4K9JAUNRhQP3MgdBCUavabfpBCX2gDf89wl7pzNYq2QD%2BpqYsGWgEleUoDMp74j1WKz62DMBB2z3CWF7zHdGZugkQ53LRn7SVso6g%2BU5sqZ9G%2B6PNRngySURkX%2F%2BpXVN73dUY1oAmBOdNauD3IaGrJNgPXrTnwlBL9m7V8%2BkqB5WHYMZQi8k57oSEMo%2FQJeyivZIwOKkufxepy7okgYXVX5lFij%2B0Eg3aFp62xq8BjHrN1WAnuaL1fywoq72gIq5bHVPlw1rjJzOq0QKrCh8cdkgvXxky8hyQJkPnLZPOPdxFcvdJI8RLhdcMb2T6NjrhNcvJkzaB64lDnBhwjCI1NfDBjqkAU7p3XPJWFWuHXWFa5N6YZhga06%2B3nVCja3w0NKI%2BSL5XkzDLAo%2BDXvcJ%2FDc8b%2B0wN1OKjv5PyHVq2W0%2Fo3SL6SsDFJZGfF6Yp8hshOe5KBfRm7yONlJPv5KI2hNm9Jy37wHeqUoiztFcJKwPopyALEK%2FfkttDcnOt0c%2FdVNTkg7IZ1uGpZPaPXRSmAdjqsDLglQ%2FmPLva4xtex3sR8uhrqg5UFU&X-Amz-Signature=828a8f03c5a06aaccdbbbd611872ee7b44533e4e0eaa1348892211a069537154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XCNUCBU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCG%2BI8MDiGlpd6JD1JHPmjI4z0h5syKTf%2BcGZER2QXHOgIhALNwFr9flAZEztU391klEaijQ0sqLEdT2J4c0zme2BWrKv8DCD8QABoMNjM3NDIzMTgzODA1IgxeRj6BrHj3WrHqzngq3AOW4lxBXV03oUusE7LfmGAX5TxcB1iF2wcrEfkJiQha3grThcoQxllZWjKEEEjb0UE1mExHeSg2edzWAGTFj9aMaB1fRPxDgI1Mp37DTjFnJpWltJUCjXnmCz9404x%2FT3j6XaSSM%2BAFD%2BB9%2FiPdNzFrl3SgDYy%2FtrgQYqdZIV9hTtwyZs1NJNFLS%2BO7ibxCj8AeSSZYvAqcn39izQhWgOGLMkr7pZ%2B6zVL1pmKXeSMNRLdYWqpELmhpRhcyTELqeDPwV7JorwWoGxUxWCDmVdJaj1bmXh2HUJz7X4gLkWw98WMEfeAdsC%2FnfpBv52cshOu5Z4Ilzor0p53YUevVmDcp1trK121GvmVigfQdTFk2loTWVDToooLPsjgK%2BCvOVZIsu63yyruFd9c8G1RrYqqk3%2BcI32pb4ZKJjMgI4tVbNRpfPKTfvxscjU3b7QKZk%2FgmV5wBc%2FdDTG21%2FiQZs6pR25EleBDaPB%2Fe%2FRE2j%2FMPygCO1VDSGzD37n8jFJO1269pknRmHrNS2MoVuJixImxPpT3CUBVWA6lga%2BkC5zv3b9IjHwLNpfubIhQ%2BlJormYcya7lsBZWtBPauVcim1Q3s3oxzd0nNHXM7tek8aUXaXwFXMLCqdwbJFROHMzCR1NfDBjqkAUMQ7H2mrjpWKR6Zb9xjJA5Lu1v%2BYtnC779hDoXwh252m5tDYqmKqQa4wWrJaukcsvDsruX%2FboB7o5Hh3RvMdzHeIB4sPJ4qgb1tJhVP38Z45yrHxl9UXHv8kWcPSJxB2pfekzqxosUSqpBbbUV5KkVhI2kdwAMmuQAK3X49ECKAF3zdkLv%2BZZcCNQGJ35JHnr663IKR9foU44vHHZwE7pL9qoJ7&X-Amz-Signature=1faeb338dc096290796e0b5b63d36f3fd15672999b4a6e9af71653f16b24d332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRKOW7Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCCMSS3MHXLVCsS7B8u0aYXUUxzFKM3qLmMmJDjG%2FKhgwIhANbwTpSDmIyS6LDvsJ39Y0mKhJuoo5BmxwfnxsEfcUrHKv8DCD8QABoMNjM3NDIzMTgzODA1IgyukmEXwYULKwx5h48q3AOrV9TlsT0xnkhoPNv1XB7DsbrwRbzB6N0dCnONjnP8GrVGJBR3tRec2O7sk0TASIdqVYUchs%2B2c218Xef87XfrDM24nC%2FrDswC7ODLMEwVk8FWZgMi4BF1svvRqenrJPtHmqaqJ2ZrQK9eMOrBVub44yd3URemnoRCvfuXKAglfNuidW5qCwLWyjJp6PNvQOKWu%2FkEehSUsQ55xFU5%2Bw6uQs51KVZC3xt1f5FKwS7n3F7iC3MGzSA0%2BpkyrabszzcRQQOwVtwll5XMADxvNDiFuNRPGktjsEB4bquV5vfiVf85f%2F0IOmQ0PZF6yse8J0ZeIt6sP2ZppHos%2FSFz8npaT3K%2BhFGGC7EQqoCC13gYxo24sjLBjgrdsdX0rJ7%2BReAMmhDAizYFBld3BQP4fzNKI%2BMWacBh6Q9oD1%2FxDm48CQzseIHatF0cmETU%2FJqiW4sftI5Q4cfc%2F9LBURnnDBlQckRqJfMUvZLe3HFVBndH%2Fupg%2FgO99rGru2Iq7xuN1USc8r61wqkl%2FAHxiw8Za74wjuB7fR2mCl%2BFO4MrDa97NGLckzjNFOTp6%2F3MX%2BwivOYDo19v8AFOVEiZAce9QWw1jTmKOoHjSK3f%2Bqgqr5KQT%2FuPOLJlVS68gLcwSjD%2B1NfDBjqkAVe79FnCKKBxJ4kOXDPhh33EAam2g1t1YVrhO3J2qWUgKVCxwUr8lCw1xtPDb0VzqIFp4tuiIRgVAwHDMX40IO1LuWLmsI97D3HB18bKHBq5EcDupLjSxPJEMMDK15zEHasF3LoL%2BwMIFlCSy8MqV0E%2FvSTvaRehSxQXlEU856pWC5IVWDNgGtpPTHIFqeXHREoC20d76Y%2FlutpMPffBqJrcmTKQ&X-Amz-Signature=2457d984485163429d3368774f62f119b670ecb1aff5d1ac99e2f49142b4e361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7W4Z2PY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCpR9HqR78EYE2BvWSMetTw7yVS2gDc3h9aETnMu%2FEL6QIhAJAfdrabW40JCqB6KwFsB7CVoZualBtKFOQQK49H4qmLKv8DCD8QABoMNjM3NDIzMTgzODA1IgyqlMjBX3eJwVOgvuMq3AM%2BUqF9NYHnjfZeb08I2q8ePfmOb2mWhQtIJKTaqW522ydwWB4QWR8hQYLtROTuNn0h7mbykz3lzef%2BcFpz%2FYmdHW2XFdW%2FEZaLFsArlGIihSIbvt9YmS4mNcKJePeLor%2FUqYNGvfNK5%2B8jv4z2tUwoWgTYdHGbtCAbTwIHRvYrU4WEos65%2FJV9dVt4vfzxtY%2BFF8mt7Vw31Ieiem17Wwaf9ztzQNT20UIiefkOBawV9CqtjvdQPd6cxwg7UvJDfr3%2BMVe%2BYXJq2fNuIHhYGI066WKEsbFPP6p%2BiRJIZ35Q4K9JAUNRhQP3MgdBCUavabfpBCX2gDf89wl7pzNYq2QD%2BpqYsGWgEleUoDMp74j1WKz62DMBB2z3CWF7zHdGZugkQ53LRn7SVso6g%2BU5sqZ9G%2B6PNRngySURkX%2F%2BpXVN73dUY1oAmBOdNauD3IaGrJNgPXrTnwlBL9m7V8%2BkqB5WHYMZQi8k57oSEMo%2FQJeyivZIwOKkufxepy7okgYXVX5lFij%2B0Eg3aFp62xq8BjHrN1WAnuaL1fywoq72gIq5bHVPlw1rjJzOq0QKrCh8cdkgvXxky8hyQJkPnLZPOPdxFcvdJI8RLhdcMb2T6NjrhNcvJkzaB64lDnBhwjCI1NfDBjqkAU7p3XPJWFWuHXWFa5N6YZhga06%2B3nVCja3w0NKI%2BSL5XkzDLAo%2BDXvcJ%2FDc8b%2B0wN1OKjv5PyHVq2W0%2Fo3SL6SsDFJZGfF6Yp8hshOe5KBfRm7yONlJPv5KI2hNm9Jy37wHeqUoiztFcJKwPopyALEK%2FfkttDcnOt0c%2FdVNTkg7IZ1uGpZPaPXRSmAdjqsDLglQ%2FmPLva4xtex3sR8uhrqg5UFU&X-Amz-Signature=293a2dc7b01dea00bb86fa3e1a905bccfa1babb34ee3cde179957060aee5f73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
