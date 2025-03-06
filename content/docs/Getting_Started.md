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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWSUWXY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ29%2Fl5xS73FqdXHWlZvFkk35%2FLM4i5s5rojoAhh6zKwIhAOjcA%2Blhj64nKWllApcm0LeEBSuuXSougECTxfN0z6%2B3Kv8DCDMQABoMNjM3NDIzMTgzODA1Igzacz28rdFDg34QZ4oq3AOGrvqOvk4z76wm0CwcLg3PXbpSpaYbIt7Z7QWEjBkiFacrowXSpaJZ5ZMtfyWEx86Azt6ATzfyNokINSU2DvLCuK%2Fzckci1KnRMQsHyB2B7LIo%2BxuyX2qBLW6tmy4qscVqe2OsoAa7SX7U60Gq8Vn3YRlbTse0jN4TuHnqmtBiHxBOUxYveR7JjbvU3QO9UYtLkf5XvoOeMn5XhnrpfTZzmecjkwgr0PGBPrjIA%2BrelL7EwuGHCvXSqej6aMKA4ZCSRrhzrv1pf7zr%2Bttlv74IeqfwbhKumrHlpiBT%2BgJ9CmA1ArNXMWlNxHxAyWvIfa26ojRHB5fO%2FGFXjinn6vMoiqH8LR0pz2pvGhhWuYRFqIq6FxSk1GopBVcynf678wC4iHDNS6NHY0T7WPZszpgUtaPgQwNa8bvAWnQR2Xy8DiOkm6ufgen9tt8OzUfermnb3emZRTtZs0IUlKhhyjUtYEKVbEfqnSirY%2Bw6VcIEsjsztSo4FkLtf889F6WrmUy3JX%2B6lb90BsHoy%2BPj6ynwSGmr0jCyygRgRN3ygnKDMq3yNQfvpYnS5ftXZvkKCInxnTI8q1tl2Dqy5Dw%2F%2BwtqMpAuzHsVHttFau2TIvvE%2B5NlMsjE7eFW5gq9ODDOzae%2BBjqkAbueS0T535nJxK6e82KWssBmbCX4TSFpKFdDt%2FPcUYJuJXK8n1Z4yuNNttaZpE0gsi1903D1ChxaZlGAb1cvUOjE7ZelcZsCCDhyiXXb9%2FGDuG8mgTUVlbUfNi7K7EMeqpOZ4QXPd0aQ7dnEMI0YiVpZUYKHuPPp5pGhQgVO0%2FhKIn78SCDen3rGwgMMGBm9%2BMf23kuGs5uzVfmRG3e1CbRucV5N&X-Amz-Signature=9c3a03c8ea57f2c2ffd8712785c0d8d3d7ccbd21c09bef2d761cf3e059ebd041&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWSUWXY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ29%2Fl5xS73FqdXHWlZvFkk35%2FLM4i5s5rojoAhh6zKwIhAOjcA%2Blhj64nKWllApcm0LeEBSuuXSougECTxfN0z6%2B3Kv8DCDMQABoMNjM3NDIzMTgzODA1Igzacz28rdFDg34QZ4oq3AOGrvqOvk4z76wm0CwcLg3PXbpSpaYbIt7Z7QWEjBkiFacrowXSpaJZ5ZMtfyWEx86Azt6ATzfyNokINSU2DvLCuK%2Fzckci1KnRMQsHyB2B7LIo%2BxuyX2qBLW6tmy4qscVqe2OsoAa7SX7U60Gq8Vn3YRlbTse0jN4TuHnqmtBiHxBOUxYveR7JjbvU3QO9UYtLkf5XvoOeMn5XhnrpfTZzmecjkwgr0PGBPrjIA%2BrelL7EwuGHCvXSqej6aMKA4ZCSRrhzrv1pf7zr%2Bttlv74IeqfwbhKumrHlpiBT%2BgJ9CmA1ArNXMWlNxHxAyWvIfa26ojRHB5fO%2FGFXjinn6vMoiqH8LR0pz2pvGhhWuYRFqIq6FxSk1GopBVcynf678wC4iHDNS6NHY0T7WPZszpgUtaPgQwNa8bvAWnQR2Xy8DiOkm6ufgen9tt8OzUfermnb3emZRTtZs0IUlKhhyjUtYEKVbEfqnSirY%2Bw6VcIEsjsztSo4FkLtf889F6WrmUy3JX%2B6lb90BsHoy%2BPj6ynwSGmr0jCyygRgRN3ygnKDMq3yNQfvpYnS5ftXZvkKCInxnTI8q1tl2Dqy5Dw%2F%2BwtqMpAuzHsVHttFau2TIvvE%2B5NlMsjE7eFW5gq9ODDOzae%2BBjqkAbueS0T535nJxK6e82KWssBmbCX4TSFpKFdDt%2FPcUYJuJXK8n1Z4yuNNttaZpE0gsi1903D1ChxaZlGAb1cvUOjE7ZelcZsCCDhyiXXb9%2FGDuG8mgTUVlbUfNi7K7EMeqpOZ4QXPd0aQ7dnEMI0YiVpZUYKHuPPp5pGhQgVO0%2FhKIn78SCDen3rGwgMMGBm9%2BMf23kuGs5uzVfmRG3e1CbRucV5N&X-Amz-Signature=ae00a4435cd0c6525379dcc99b0add5bec750896749691b343e4b2dd4cc4a0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTKHOYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr2fb5XRCMe8p%2FBBaEZ91QSC1n9iCFEcx3VAwX61krgIgPdHHzmtZnS3DUwKksm4VSiCNgDZO7iGREaqQ04bZi98q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKpNGdzqSzS1lBnNOCrcA9MESt8Aj4n9ZxWnsLMKP5Je5JfAAAVAFLl4suh7aEvRxB970Uq0xL1nBkNR3xKaxghjX9VioJVk6x0WtBxg9LL%2Ffbne12g8iVwFw2UaHcdy2zEUfqk2fqrlKR5HV%2F%2FXlALBiku3apbzA9eGKqDRZPEZ1zd9gKF7xOScdjYSD6ELwerHB23apUHU6pGfMyIwaeZGBYg9dbXXOFKEAnfyZ4RZuvs8siCuw9NN2SXKUQg3reWf7UzmtW8OUWWlJWdRZFDFZu1bsW4od3gZdteevuZUx6N%2BZr1DLUNyqLwOFZjy2xQg%2FKETq8rinJy5C61msPzDoTuSm7UOD72P0Lxuu923goP5kdwUgkbH3okx%2FQpr8nZxzUERy810FME%2FkMGWglacAfNuY3GsSYtgrB7dO616CiTUu1rJpjYcq1ZmGN764P8cvhsYtsLPimYA1z0Wh9ZlzIok8Dtvp%2BrXueTW13TVjvgWULHu7LUMQP2Fzm74n%2FtnGaJFi%2B%2F4h0ztZoy0XCIdtYO%2FFTil6cY1WC6y4iz3huelY47%2BMyC9FqGZO2FJ8ASytWwDtkcbgN7YlJkfdgagmt1lPScWhVy4YlAdNkcDw8IxLYoxs4hwFWsUa5HhxHPnUVE9%2B0gTQr%2FfMMzNp74GOqUBQKDGaPbRyQ7ocOlo4a4hst3OtAjqj%2Fl0GYrNKXjZegLiF4ehnmwaUXXo5%2BgHO7N5Q1NAXXsl3G8b0%2FhD8JNuyEzyEmZGjo7JNtQRQD6iVE8v6K9pnkVrzAvhRpPCJu%2FeUPAfccU0AOyjyw05bMU1bv0yPXz0kLW7gTjk6mSAJhxwUpcquVX%2BkWo01rx%2BhqXNR8ZM7kZwxBXcMPt7%2B3TeXaLdpVdQ&X-Amz-Signature=75059f3a1b327035892d4201b9002c861d9614fcc761d0e9283672bab82fc48e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGBQRUI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsPXS%2B9ohCRSSWaxs7OMvYM3q9onkuKfv0%2BRn7UhwCjAiB%2BcphpXfgqamplIvBSHa1UaXjk1ywht%2BcjBmNCQulV5yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMmQLm8OHuH01Q%2BC3FKtwD0lB5ePzFptEHupvsuLm8mNqO3kCKkRC%2BhTB%2Bq1uhTJDivZF4xmLr%2BaMgNTHRFL7j5sW5jqHbgJszXZvvWnlyrXOuiMBXzr5aAET4VPemcdHh5dHUJRR0OO%2FWHlyqycXq2znqyat76MlLMTokSy0vMSr0zx6rgdwhjr4YhO%2Fd4vSVWzCMx3qzZiuILXgLBGVqypZ7fx%2BnbKe1N%2Fm%2B74vZkvRHi4qFmoEeprvnmQ0geTe%2F3%2B0WLth6l2CQZ4w3Kun%2Fh4Zi%2BXV09vMHK6smuT121rXD7hiKopZAtFFVFhImlifakkAXeLTSObAORXJUdog62T1jKBTuUaH4kEuMw4u7Yd4wxYlH5UKmwCsrRWy878eM7mtx8upmqDo%2BYKFVr5fsBQfJsoRLAjie03y9J6%2FmUycXtuRqOA3TJ14Sae%2B41Y00W5Sh0Jh%2F1k0R3PfGqZq4WxSmD%2BqarEDvRZ1HzY1FK7tRrddJktjtq881RigRdBTtRpXNiR4VKOQLNRToyO2GvWxh0K3yYZXDwbodZHsiN5c3wDBnOtelR1z8K77WIv2Xf4bktESg9ir%2FFCy2Nv18M5v0f%2BYB27JnOjyaKnEBNxyqBxrK945vHcOmrxWfy4FnAvaM77q9NPLRow8wmM6nvgY6pgExu8iVRwm%2BE8dl301%2FVZVrmNdp%2FouAAGKAsjY6QqHzku2wMGC6MLvnrTVTqrHCLvc9i9zZaCmiV7jNsoJUvQsKtVYCS%2Bu%2FINMjFJIAZgdm8Skv71UkWDlZMvlzMwQHG4PVG%2B31QCALvG65Cu3bCX3NXAJC8fzITo%2FzcJOajvQDWcw2R9myczK6tOKGVONsCq66FdbmcO%2Bm5%2BhlfTDyrSBgewhshTk3&X-Amz-Signature=d5ad022453baf0208d0c6e8eb448af487d65f41375299b4f1ee7ec23afaed214&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWSUWXY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ29%2Fl5xS73FqdXHWlZvFkk35%2FLM4i5s5rojoAhh6zKwIhAOjcA%2Blhj64nKWllApcm0LeEBSuuXSougECTxfN0z6%2B3Kv8DCDMQABoMNjM3NDIzMTgzODA1Igzacz28rdFDg34QZ4oq3AOGrvqOvk4z76wm0CwcLg3PXbpSpaYbIt7Z7QWEjBkiFacrowXSpaJZ5ZMtfyWEx86Azt6ATzfyNokINSU2DvLCuK%2Fzckci1KnRMQsHyB2B7LIo%2BxuyX2qBLW6tmy4qscVqe2OsoAa7SX7U60Gq8Vn3YRlbTse0jN4TuHnqmtBiHxBOUxYveR7JjbvU3QO9UYtLkf5XvoOeMn5XhnrpfTZzmecjkwgr0PGBPrjIA%2BrelL7EwuGHCvXSqej6aMKA4ZCSRrhzrv1pf7zr%2Bttlv74IeqfwbhKumrHlpiBT%2BgJ9CmA1ArNXMWlNxHxAyWvIfa26ojRHB5fO%2FGFXjinn6vMoiqH8LR0pz2pvGhhWuYRFqIq6FxSk1GopBVcynf678wC4iHDNS6NHY0T7WPZszpgUtaPgQwNa8bvAWnQR2Xy8DiOkm6ufgen9tt8OzUfermnb3emZRTtZs0IUlKhhyjUtYEKVbEfqnSirY%2Bw6VcIEsjsztSo4FkLtf889F6WrmUy3JX%2B6lb90BsHoy%2BPj6ynwSGmr0jCyygRgRN3ygnKDMq3yNQfvpYnS5ftXZvkKCInxnTI8q1tl2Dqy5Dw%2F%2BwtqMpAuzHsVHttFau2TIvvE%2B5NlMsjE7eFW5gq9ODDOzae%2BBjqkAbueS0T535nJxK6e82KWssBmbCX4TSFpKFdDt%2FPcUYJuJXK8n1Z4yuNNttaZpE0gsi1903D1ChxaZlGAb1cvUOjE7ZelcZsCCDhyiXXb9%2FGDuG8mgTUVlbUfNi7K7EMeqpOZ4QXPd0aQ7dnEMI0YiVpZUYKHuPPp5pGhQgVO0%2FhKIn78SCDen3rGwgMMGBm9%2BMf23kuGs5uzVfmRG3e1CbRucV5N&X-Amz-Signature=07ce058195342f0b93a9b653bee519cef5218212dafb437c7c5c788de0e91a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
