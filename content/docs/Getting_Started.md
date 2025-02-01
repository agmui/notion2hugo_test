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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5XZD7E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzcsoqJqPpojTNHMgAGHA4F0ypCRZ0df9BwALHyCdzXAiBfi0fq5k%2ByyZx%2FzYT6%2FbikM1hltPpZZ6AK2sqVYB9ZqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5xzl4ozShcgxF4LKtwDdGW7fAhI0sBXHfk5QgvK%2Fs2K92Qm6ujSGdDE7MKXESR8nyQ689sZen4VS%2B7Op2KScfT%2BSGZlJXNkkLYeWOYzfJxXlkgUk3ExMvyn9v%2BzSKupPXfIUdCn9fErZr0JWmC7z2X1jZi0njeVVTU9wzPjob3SUiRG6LfrJhWyU012j7431v3V8hm%2BJl6aucw2jqh3fonERZ8cQ6unIO6QDlIL7QLDAWrF%2BEOVcl%2Bs2WNfcZFfvfJAD5o41nkkhlJtQyIZPouXfdEExb%2FVKVpx6brg9DUb3uYRz1UIatNzGutsKKRfWDFzJCH8QSEGSQTK%2BnUW24oB7O0u72tJ5n3Lt2T9U03ogZ7kqrEFd4hLhYS6WjsBWmsQmH43ZO9oZb9B1MpQASFruFn5lGbUW%2BwBNHD%2BEc%2F8qSmEVtctJx7L8yfA%2FllsJ%2FNlNMCroz9NIvaWManthEjsb20ljBza8MHxA9GjAwOly3Ny%2B9JbWH86m64zIqNjlHt6kQRY4kzeTC6yuCSJaFdlczGW5KKY15xTMvGNCMZAVV%2FRNqhE7Cxjkjmd3WuXncx9GFBB%2FbHejtpPJJkkH1jhLcIgo6qvLPn6vmKpmi%2B7DD%2F%2F1uUnfoGlWadHqsUpOcHOiSJsuJGOZ0Mw%2B972vAY6pgGzV9GuQ%2FXjn5h1aHAFy9n0RRPKXYfpmXjNYbclUmRk25ouZ1GGUPW%2FrIlGE7tPyJmabALdarmufpy8E3BuZr6ZVsf2z8Jb7Q0DSCmsOuWX%2B6wTueQv%2Bmyc%2Bdmq%2BlFHRQ5JIQcWB8i2EvcyB97nb3k6ePxGd0WWKre33jn7jQT6UX9cl7FKG8jzA7Veug%2BCQ24QV%2BxIeySIrumQYn7bl3WwVAzSV7%2BD&X-Amz-Signature=fb2f7744ebf32e93816b348f2bc44918a49eeb4db5a108622c7c11c794b58a89&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5XZD7E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzcsoqJqPpojTNHMgAGHA4F0ypCRZ0df9BwALHyCdzXAiBfi0fq5k%2ByyZx%2FzYT6%2FbikM1hltPpZZ6AK2sqVYB9ZqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5xzl4ozShcgxF4LKtwDdGW7fAhI0sBXHfk5QgvK%2Fs2K92Qm6ujSGdDE7MKXESR8nyQ689sZen4VS%2B7Op2KScfT%2BSGZlJXNkkLYeWOYzfJxXlkgUk3ExMvyn9v%2BzSKupPXfIUdCn9fErZr0JWmC7z2X1jZi0njeVVTU9wzPjob3SUiRG6LfrJhWyU012j7431v3V8hm%2BJl6aucw2jqh3fonERZ8cQ6unIO6QDlIL7QLDAWrF%2BEOVcl%2Bs2WNfcZFfvfJAD5o41nkkhlJtQyIZPouXfdEExb%2FVKVpx6brg9DUb3uYRz1UIatNzGutsKKRfWDFzJCH8QSEGSQTK%2BnUW24oB7O0u72tJ5n3Lt2T9U03ogZ7kqrEFd4hLhYS6WjsBWmsQmH43ZO9oZb9B1MpQASFruFn5lGbUW%2BwBNHD%2BEc%2F8qSmEVtctJx7L8yfA%2FllsJ%2FNlNMCroz9NIvaWManthEjsb20ljBza8MHxA9GjAwOly3Ny%2B9JbWH86m64zIqNjlHt6kQRY4kzeTC6yuCSJaFdlczGW5KKY15xTMvGNCMZAVV%2FRNqhE7Cxjkjmd3WuXncx9GFBB%2FbHejtpPJJkkH1jhLcIgo6qvLPn6vmKpmi%2B7DD%2F%2F1uUnfoGlWadHqsUpOcHOiSJsuJGOZ0Mw%2B972vAY6pgGzV9GuQ%2FXjn5h1aHAFy9n0RRPKXYfpmXjNYbclUmRk25ouZ1GGUPW%2FrIlGE7tPyJmabALdarmufpy8E3BuZr6ZVsf2z8Jb7Q0DSCmsOuWX%2B6wTueQv%2Bmyc%2Bdmq%2BlFHRQ5JIQcWB8i2EvcyB97nb3k6ePxGd0WWKre33jn7jQT6UX9cl7FKG8jzA7Veug%2BCQ24QV%2BxIeySIrumQYn7bl3WwVAzSV7%2BD&X-Amz-Signature=bf436f7494714436d3f4e92fb1234f378ce6151c27454dbcf9c0bcb024a726db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EURECX7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmvPOX%2FTQXyRTzDhzYmYUWIwbS4xyTeK3ay04fOiF02gIgRgUqJFx13CDIR3Ok4T9JSy7C88uEo4EhByqu0InCLM8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFArLJzO42aniYpNyrcAxy8Oxq0lH%2Bt%2FrpfRMwSPBL2ivmrZgfPpLgjb8EHEElh%2Fc5POBqKyMLrS%2FIjvz%2FZg7yPOyBNGKR27viu4ra3YN22rcHOYLq%2BXQeysQTJATGDbJuYFHY4HhbduSNse%2FGt5jw%2Bb2cwxkNuN3A6i2d8RjXvOV3OCjxqdacYzM7fBP5zWKHEtZZxlOngcreCJQXqzMVGfhpfPnDnSFnWHDSbp7nsRFESoLIeT3iuvVmPs0iAmUhsIYyHh0GWzae%2B2so85VkeJq6AZRWxMOmRGdo3aH31ynXid63VVhGxZvCfMkDoK0QF7N8LfrmxMtGRZckvQRI2z6VM%2FjZP2%2BlFsc3mO5PyWzMiSmEVwuARqSFZq7fPACsgN%2Bypkxb1TIb6qr2gsrwgHipy0RTD9MUetoVp2zfglQ7Dno4RcpvfIxPjt2Ti0grPeBQMl0dkNx8JmxX6FqXuO1dxF4IxBMsUYbubzPssxBQSf4TGzoobSTG1yIL31RpRUNwEWW4ovnmKCtEztzZCfSvz0F%2FRjY%2BTrSj2l%2BKLqh%2Bg3hsJqntfRiM%2Fotx2g%2FlJyJJVxM73HbG8GJfGlijvQjat1pAMSQs8Dvr3YhdcJ2D8H7qCyAV2OdPSQFThmIbB%2ByMe3ea%2BZRxdMKTf9rwGOqUBZMqpkaDSgn%2FwSZ7Z3ES%2Fa5tKbh6fQCJihbc2XpShXzs8y3lGSa6fCPEn%2Fdi%2FUbCLArvhGKVRVvWQzwYq%2BXqQ4AZTTWsT6U8oIX1X%2BSB8%2BAr6B5T%2FY1FSXFdFFBrYBqk1RbqhtyxSkHtJ6SyLJhCE3bzcnX0AhP2SMrEkT0sfUlaw739uByNAnbqOlB1T3E1v0JIrVtqs2fkROkLPy8TdkYRlAda2&X-Amz-Signature=3ccc91b7c80982535e3d469711cf268d3cd9a3f7ac162c8011b4a38b821a6177&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PMVT35%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPAFOnRZH7yOfYp3av%2FTPpQ6A%2Fgpp2WitMSjjdszWrHwIgVthZVR1%2BrOl6nISI%2Fa3bj5R0r9yJlbn7gPg9mFctYb0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvYCk25XLNz25HuRyrcAzH%2FXVh9%2FAYhgi3RKAkiH5KMg7kApXHsAT9j8SK4O84LVI3NJHS1%2FvUZ2K%2FC%2BgNF5JSZqtMzNlxIA1UZazvWuDRDpRM%2BNBNt2vzRJInLifeDwHm8hMPq7rZ1ev97gtoKfRGF3RSQg%2BPD5NMIQY4vs9LSIGI%2B9eDb0KDGO4tElvv6v0J%2BxCVxGUSF%2BWawIBrUQusDDhbXreoem6NuRudcwo08y9nGIB%2FUv%2FmkWXhzxcVyV4kInz7GTf75Gmyh%2BR%2BUz%2BUuzI4oj7Vh2NzRRUz3cAIDdX8TT577FUd8JTQLcuwLS0nF8qMrTbTeJWmTH%2B2ALQWGa3neDLAukfdNNix%2BV3GM4N4wGk64U4s05P8Sdkv3Q8JYb9lgD1Ti4Ld3R%2Bd0ANuEA96uWeBdHayQKFfV%2B4YRRF%2FJagmIcsCyIaHlqCD1iKMbNrvSCLM7%2FUjGi7srJ%2BDLduYEMqsnhWVksZy6o1kbJ4o4nig7Ig7a5xm4z1Nc37qWyygQkApZVNJYS7ruXkwDm41494Nji3i59ftX9TsjXdHJnRxnazeEr%2B4fRS%2B0claPVZPtpff6%2FIss0d0ANWJTjR9wILeX8Dl3z6vcLppVV%2Fl9T9rl7uHHwcvmcThJp0tKwq%2FEgd5odrFrMIjf9rwGOqUBXF60ORWmOFRdndYO7JrwYnlNIKdkeCON0F8HAAaTe7ufk3o2MNNLU3Xwx2KZGzgdUdd7rWgekJD%2BBXtXROQMiLMfZp5SXPNs5mRZq5y9BdYjBFMHfBO3M2I76rUIpze%2BlrEwnT4wAzImr50DihGdblq0eN2e0cQ4T00MjjBNsDGa%2F6w6oN011ACS%2BXjVy8brJYrEoA8%2BfYozE20FZD4c4Cp9vd1u&X-Amz-Signature=65f0d04332f68e9248d14ece40893d7d2f1f0c597f01998c8112255e5e4cdd36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5XZD7E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzcsoqJqPpojTNHMgAGHA4F0ypCRZ0df9BwALHyCdzXAiBfi0fq5k%2ByyZx%2FzYT6%2FbikM1hltPpZZ6AK2sqVYB9ZqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5xzl4ozShcgxF4LKtwDdGW7fAhI0sBXHfk5QgvK%2Fs2K92Qm6ujSGdDE7MKXESR8nyQ689sZen4VS%2B7Op2KScfT%2BSGZlJXNkkLYeWOYzfJxXlkgUk3ExMvyn9v%2BzSKupPXfIUdCn9fErZr0JWmC7z2X1jZi0njeVVTU9wzPjob3SUiRG6LfrJhWyU012j7431v3V8hm%2BJl6aucw2jqh3fonERZ8cQ6unIO6QDlIL7QLDAWrF%2BEOVcl%2Bs2WNfcZFfvfJAD5o41nkkhlJtQyIZPouXfdEExb%2FVKVpx6brg9DUb3uYRz1UIatNzGutsKKRfWDFzJCH8QSEGSQTK%2BnUW24oB7O0u72tJ5n3Lt2T9U03ogZ7kqrEFd4hLhYS6WjsBWmsQmH43ZO9oZb9B1MpQASFruFn5lGbUW%2BwBNHD%2BEc%2F8qSmEVtctJx7L8yfA%2FllsJ%2FNlNMCroz9NIvaWManthEjsb20ljBza8MHxA9GjAwOly3Ny%2B9JbWH86m64zIqNjlHt6kQRY4kzeTC6yuCSJaFdlczGW5KKY15xTMvGNCMZAVV%2FRNqhE7Cxjkjmd3WuXncx9GFBB%2FbHejtpPJJkkH1jhLcIgo6qvLPn6vmKpmi%2B7DD%2F%2F1uUnfoGlWadHqsUpOcHOiSJsuJGOZ0Mw%2B972vAY6pgGzV9GuQ%2FXjn5h1aHAFy9n0RRPKXYfpmXjNYbclUmRk25ouZ1GGUPW%2FrIlGE7tPyJmabALdarmufpy8E3BuZr6ZVsf2z8Jb7Q0DSCmsOuWX%2B6wTueQv%2Bmyc%2Bdmq%2BlFHRQ5JIQcWB8i2EvcyB97nb3k6ePxGd0WWKre33jn7jQT6UX9cl7FKG8jzA7Veug%2BCQ24QV%2BxIeySIrumQYn7bl3WwVAzSV7%2BD&X-Amz-Signature=70220bf9d2932b280fd81bef2f6e0b543523e28b0ea258d05a9d00be922cd934&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
