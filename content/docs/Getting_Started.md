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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTETHRTS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIG8%2B6u8j3jVmz5Fe%2Fj4m9SUoBJo9exaHTlDme2zPzPN%2BAiEAgdH42Wv5AFkNgiySHtq7EBMMvi6dTPWl3tTXNbwPUnwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNHv8uDH35jqutfhmCrcAxmrpPSz6ig9FzTvLzoPEcQc8yGlCGGppxcS5CwX5%2FgsnRDYAl2%2BAadYGhoV%2FmVXkgPW3qJvAhOvOdVs3u60jPBaKUqzMIePK4SnTAt9xuGXcRU6gBZ5TBWtvY2Xn0ZcpehOMSrVntbCOiBwwPyAyWhuI2N0gFUYVShE5sblYZOKbdnytUZBOstmknv%2FMFCWFuTUU5ZDWE6C%2BUbkuXnuevAuEmZ%2Bd3kW7j%2FqLYcnmYST4O%2BqSFzk1DoCUEbgGDKg9SMtkbhszG3qxj7b3ztqnzXjp76r00clxCKbHB5InV20LxCPbRf%2BfgzYpYzKUEqvIbtqLKyMoSIpaoaIf5jDa8it6zNuhVH36c%2BkKFaT%2BDwH7AB%2F6QjWmfwcYrV4aXeCIGrU7TWnPvpqf9KWuuJ9HeecAfgVQdg0R59fLQTu5oAE0YsNRjZvGN%2F0i8DuXBLjZZMTNSZBFgTA72nsTllIEYV2ZPgyG9SFiQtbM8p%2FIzHsg9tSdH2v%2BKreyRXIEcSVpAjMUkAuYlyTAc7LkrWSx69CgeQ3CHY7iTWdVjr%2FpwJxYUMmifVLYFXeeELwZmK%2FnpvWojELZwaCsv03fnyLJLD3fY8omIvzZ9NCn81WZr7oTCD0EXv%2B6Ta0RAKmMKvcwcQGOqUB%2F7BqD%2BdecHidkUK0LIfK7N1IDEZnZzfuF8l7l9wW5hdrYCXw1bkrhO0Q2OZqLE6CvLI3TYwNKISoG2wPXBomneeDDGmBtoFEYitP%2BDbXe03CuRs9XgClk6GgUlzF4uqdzbdYD%2BJaCSLEfBN3%2Fq1WCxIqNu%2FNqmbHM5DQKYloPTZ9BSQ8wtYRN6sOZQyKfXFpp34APOtmSTjnSoPbJ8Pfoz3yquLY&X-Amz-Signature=5245f8cd71da7f9640587f2999d52f73a8d5ea485334277f53165fd6ce0fb62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTETHRTS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIG8%2B6u8j3jVmz5Fe%2Fj4m9SUoBJo9exaHTlDme2zPzPN%2BAiEAgdH42Wv5AFkNgiySHtq7EBMMvi6dTPWl3tTXNbwPUnwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNHv8uDH35jqutfhmCrcAxmrpPSz6ig9FzTvLzoPEcQc8yGlCGGppxcS5CwX5%2FgsnRDYAl2%2BAadYGhoV%2FmVXkgPW3qJvAhOvOdVs3u60jPBaKUqzMIePK4SnTAt9xuGXcRU6gBZ5TBWtvY2Xn0ZcpehOMSrVntbCOiBwwPyAyWhuI2N0gFUYVShE5sblYZOKbdnytUZBOstmknv%2FMFCWFuTUU5ZDWE6C%2BUbkuXnuevAuEmZ%2Bd3kW7j%2FqLYcnmYST4O%2BqSFzk1DoCUEbgGDKg9SMtkbhszG3qxj7b3ztqnzXjp76r00clxCKbHB5InV20LxCPbRf%2BfgzYpYzKUEqvIbtqLKyMoSIpaoaIf5jDa8it6zNuhVH36c%2BkKFaT%2BDwH7AB%2F6QjWmfwcYrV4aXeCIGrU7TWnPvpqf9KWuuJ9HeecAfgVQdg0R59fLQTu5oAE0YsNRjZvGN%2F0i8DuXBLjZZMTNSZBFgTA72nsTllIEYV2ZPgyG9SFiQtbM8p%2FIzHsg9tSdH2v%2BKreyRXIEcSVpAjMUkAuYlyTAc7LkrWSx69CgeQ3CHY7iTWdVjr%2FpwJxYUMmifVLYFXeeELwZmK%2FnpvWojELZwaCsv03fnyLJLD3fY8omIvzZ9NCn81WZr7oTCD0EXv%2B6Ta0RAKmMKvcwcQGOqUB%2F7BqD%2BdecHidkUK0LIfK7N1IDEZnZzfuF8l7l9wW5hdrYCXw1bkrhO0Q2OZqLE6CvLI3TYwNKISoG2wPXBomneeDDGmBtoFEYitP%2BDbXe03CuRs9XgClk6GgUlzF4uqdzbdYD%2BJaCSLEfBN3%2Fq1WCxIqNu%2FNqmbHM5DQKYloPTZ9BSQ8wtYRN6sOZQyKfXFpp34APOtmSTjnSoPbJ8Pfoz3yquLY&X-Amz-Signature=d5159315813809bdaa474f2e0edc8da700852d45f38f6f88ea672cae329622ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTETHRTS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIG8%2B6u8j3jVmz5Fe%2Fj4m9SUoBJo9exaHTlDme2zPzPN%2BAiEAgdH42Wv5AFkNgiySHtq7EBMMvi6dTPWl3tTXNbwPUnwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNHv8uDH35jqutfhmCrcAxmrpPSz6ig9FzTvLzoPEcQc8yGlCGGppxcS5CwX5%2FgsnRDYAl2%2BAadYGhoV%2FmVXkgPW3qJvAhOvOdVs3u60jPBaKUqzMIePK4SnTAt9xuGXcRU6gBZ5TBWtvY2Xn0ZcpehOMSrVntbCOiBwwPyAyWhuI2N0gFUYVShE5sblYZOKbdnytUZBOstmknv%2FMFCWFuTUU5ZDWE6C%2BUbkuXnuevAuEmZ%2Bd3kW7j%2FqLYcnmYST4O%2BqSFzk1DoCUEbgGDKg9SMtkbhszG3qxj7b3ztqnzXjp76r00clxCKbHB5InV20LxCPbRf%2BfgzYpYzKUEqvIbtqLKyMoSIpaoaIf5jDa8it6zNuhVH36c%2BkKFaT%2BDwH7AB%2F6QjWmfwcYrV4aXeCIGrU7TWnPvpqf9KWuuJ9HeecAfgVQdg0R59fLQTu5oAE0YsNRjZvGN%2F0i8DuXBLjZZMTNSZBFgTA72nsTllIEYV2ZPgyG9SFiQtbM8p%2FIzHsg9tSdH2v%2BKreyRXIEcSVpAjMUkAuYlyTAc7LkrWSx69CgeQ3CHY7iTWdVjr%2FpwJxYUMmifVLYFXeeELwZmK%2FnpvWojELZwaCsv03fnyLJLD3fY8omIvzZ9NCn81WZr7oTCD0EXv%2B6Ta0RAKmMKvcwcQGOqUB%2F7BqD%2BdecHidkUK0LIfK7N1IDEZnZzfuF8l7l9wW5hdrYCXw1bkrhO0Q2OZqLE6CvLI3TYwNKISoG2wPXBomneeDDGmBtoFEYitP%2BDbXe03CuRs9XgClk6GgUlzF4uqdzbdYD%2BJaCSLEfBN3%2Fq1WCxIqNu%2FNqmbHM5DQKYloPTZ9BSQ8wtYRN6sOZQyKfXFpp34APOtmSTjnSoPbJ8Pfoz3yquLY&X-Amz-Signature=2d5313088d2989bbe62766d005f1fc80083a2c4edb764364c2c73e59efd2ea0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEF73RGI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAgUbnfb0c2VGtodr2N2QcBDOFred6ZOUXnezP%2BFZvUKAiBn7rMPtPrs8U9RtkUDRpTcKx1a8gwWQBYMddH49kjTSSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7mSOEcIWrpeqHDmBKtwD3YIYb5vdsMU51FTclZdfqyiyPoLuRK104hz6t%2FyAaoN7so26DgjOMXc5qTtbmfTN%2BRnSEXIMwlDvZovkBjCf307KHK1dbDaVrhuP6578C1ijiflNC%2B0vLrigYK1fLyL7FHxCTZ%2BATrsRUvJ%2Fq7kjWBD8WqUNQ9A%2FVKqOzYHuvm4fW%2FceuhsakRvnNgnYgYSm3cYha4xrCkKUsNwjcPneOjbpzYkYE9WuNbCshnBXcLdRWDO1MV0yBsijTXxuevqYm0G2%2Fj%2F69opqKZ7N8M%2Br79Xjf8AIRGGe6RnsnaNSnKbaKc8PJev9wQYvksBTCvxDaI3m%2BOVlay0nqa%2Fcum%2Bhj4dgklbb3HKwMyfhCbBkBv7Nzdv4SGm6k5hOPZmXme68ZtEvNtZjqqz%2Bjz92I1f7TH0p0APPdDbJpNNRqtcyRx1C6rC5mF%2FZNmg112ir8%2B3cMHjrx9H%2BzwFL%2FaeAXp8ram4A1%2FkiOBr23geuQPmft5kQAgK8FIzJQlm0pPj3%2BXyWpPWxlBe6kbe6dH%2FZJZAJsXh2ctIpVtXsTeFWP1o4vHw8I0THcaNfuS6ug8vRsnn9ugnn9OlaJ%2BiPU%2B0oqEC235vyW5DGzV9RdV7qlnfKpSeyPKzXcxxPsnd0%2B9cwsNvBxAY6pgEkJ%2FBhQrUIARN0lj12u%2B63Vmu6i2oxWIP%2FPJIGrcNPd8ot74irCcR%2F4OPYlbNQmrgJlxfIgxP%2BvBV94ynMeqPDrohdCfI0QnzYOBXQ8ZqKAdduFMQZLDEhOtkKvEwc1qZK81c5fr2gsTJaD3XZCSlD9XCfISjg0Gnzdwf9mrKff5O7wax0Y1Mtm%2BoX10ssWoUyObVHTjRpaIYpbflRbz2m%2BY%2BVcvKZ&X-Amz-Signature=70581bd64382c50bf8017ee9aa64549f593b0a1a6428569b448080040f3ef903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWJU7NN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIB80ODW%2Bt4nCh4oB1mRLHSPbYd7Kq7pOxWbPo4MwrcuzAiEApLf3OlT%2Bm2N45JOL94ZmXNMGhOyTagAhf3WStvVsW%2Foq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC9%2BiHptaqEi8ecv8ircA7lkME0tiIknsYyfmsGvqZQPQJkFOcIJxcWEYCpq1PTOYfO%2FowB3ElihbFMGV%2BMBcwy91WV%2FNqv0SGviUopkqRKCv8ofojRfaWhFEuZKVbU6A5NDh0I47%2BPVTmYgXro5ssRlF%2FxzGR%2B0CVpc45pGLx5lm7ahWxkbYjFeddJHh8bhOnyzgthVhbeEkhSVkcS1w2jhaqsgDfK5sSR7OUw%2BUg40kHZU2%2BkQF7iLa7zK8PZvWco5mX3lQ2vJzrDYK0ZSsVCVyw6TLVaRdUMxNDKOMFBESOglQxEE3RuOX7tZA4JBTmapPKDmtC6m6Bb9t4MGDIh%2BQQNHbg6WviPlbMcrLJsAy4jw7OvlCvbBhTzF0cC7G0XzklgvxzeySG6XipHJ6pLID7NZeoi6i%2BKNaLkE5pEU99189br1l3TG1C0RJquS3WiZYadw6K0X904f0LlMEK2fRguMVTWGxXc7yxufVN3qxNaNq99i%2BU%2FsIs4e%2B%2BbpCb5S6CNNQlLCfe2kd7IpIIuQcBhKYVBPVmpnGui3xGdOOTihFDyw5tvxtEdfUtomkdlHnrWs1Ossk9S8qJDCMy3RiSw%2BGNICupr%2BXgs3D%2FYXKHZNZvWYN2cDNFHPBSDNLzsjiSIPp%2BRi6RgBMK%2FcwcQGOqUB8wwiTHYXwXA76%2B7i4BoF%2BrfIqupRNwJYORsoAsNqmErnzEMeagX17UGTQNdZGaf2eUfg05u2anMbTY3Nq6DQtYSds8200koPUoHIC%2Bw5fZO1Lndv5mbx1rdu7LWHT%2FBwaqPpgB12ifZudS8nLhkfVQwEMFzIbB8qHl21Pk1LdnwrTQh4uaVIjjz1EIeQSgCM9pbTJF%2BfqNPk%2FaGJCK0cWw1u1yw5&X-Amz-Signature=e66b5adadbcdc8e02804497cb5e9c931a4473d0af343579ce543837842515748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTETHRTS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIG8%2B6u8j3jVmz5Fe%2Fj4m9SUoBJo9exaHTlDme2zPzPN%2BAiEAgdH42Wv5AFkNgiySHtq7EBMMvi6dTPWl3tTXNbwPUnwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNHv8uDH35jqutfhmCrcAxmrpPSz6ig9FzTvLzoPEcQc8yGlCGGppxcS5CwX5%2FgsnRDYAl2%2BAadYGhoV%2FmVXkgPW3qJvAhOvOdVs3u60jPBaKUqzMIePK4SnTAt9xuGXcRU6gBZ5TBWtvY2Xn0ZcpehOMSrVntbCOiBwwPyAyWhuI2N0gFUYVShE5sblYZOKbdnytUZBOstmknv%2FMFCWFuTUU5ZDWE6C%2BUbkuXnuevAuEmZ%2Bd3kW7j%2FqLYcnmYST4O%2BqSFzk1DoCUEbgGDKg9SMtkbhszG3qxj7b3ztqnzXjp76r00clxCKbHB5InV20LxCPbRf%2BfgzYpYzKUEqvIbtqLKyMoSIpaoaIf5jDa8it6zNuhVH36c%2BkKFaT%2BDwH7AB%2F6QjWmfwcYrV4aXeCIGrU7TWnPvpqf9KWuuJ9HeecAfgVQdg0R59fLQTu5oAE0YsNRjZvGN%2F0i8DuXBLjZZMTNSZBFgTA72nsTllIEYV2ZPgyG9SFiQtbM8p%2FIzHsg9tSdH2v%2BKreyRXIEcSVpAjMUkAuYlyTAc7LkrWSx69CgeQ3CHY7iTWdVjr%2FpwJxYUMmifVLYFXeeELwZmK%2FnpvWojELZwaCsv03fnyLJLD3fY8omIvzZ9NCn81WZr7oTCD0EXv%2B6Ta0RAKmMKvcwcQGOqUB%2F7BqD%2BdecHidkUK0LIfK7N1IDEZnZzfuF8l7l9wW5hdrYCXw1bkrhO0Q2OZqLE6CvLI3TYwNKISoG2wPXBomneeDDGmBtoFEYitP%2BDbXe03CuRs9XgClk6GgUlzF4uqdzbdYD%2BJaCSLEfBN3%2Fq1WCxIqNu%2FNqmbHM5DQKYloPTZ9BSQ8wtYRN6sOZQyKfXFpp34APOtmSTjnSoPbJ8Pfoz3yquLY&X-Amz-Signature=8e5e8be190a5c367cc87bdea47f00f9a44ecf66fa166ff0ef73dd4d8cdc29958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
