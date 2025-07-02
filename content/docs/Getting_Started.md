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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVMDLXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZXFbJpsZ%2F1vKwxheWYE%2FfcJD0Bnk4Y%2FQ7h1X38PS%2BwIhALJIHjMpmnTYytujBM62L%2BlflzwPWLevw04cfv%2FTZMOyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztjy78fopCRbIy3zEq3AMKENJ33jJLnh5rHLi%2FFeOStnNTXbmBZAJm8c3p12CoqAT4Q44D8Y4BiI0xo%2FRe5%2BbnQENjUyb%2FFSE2UN%2BQ6y7fGgZ5YfH6pRC6oEWSOhxFm4d1JpxXTEX%2BhvI4Xaw70WLqGPQUnOcO0oVSnQy8Ae6lAhoqdXs0h3zA0yZPaRPR8py5GCXc%2B3tXfjzr%2FQLg02BopAwv%2FVEU7ermlnrRFaZwqhXAKkB2%2FsGoIgFDcw0CEGy24Gv%2BDyv4E3bm8RcLY6N1mY1i5xEg2sIgJs%2FcTbLFA%2FtHBIlBl%2FvHDGJDpmrtg3mr7NKNPKM%2FOcReKVkCNTWSZOsJUES2iieehHGK5eSZc%2BjXEjl3h2hpv5p3LXux8AKWxt4irf3V7rZsY8VzsYGQTcyJ2n%2B%2BJS2vpSvqR%2BqiwXe8ydV2q64TVWF3ooSmBsWRw%2BTroDRqCo7ERta%2BQrZ2j6DA%2BZi6WoD7PcV1HVxyKky0U28bvWYhKXzli6%2BeUbftm%2FJ7lUG9ZxL4i%2FL7mb29TN573pUXxuPzh22YbFsnhl2BmwwNXrxJbF4lYA0fZqjdkA0uIbEjlXeJE7pprByYUc4LEo2bRL5DjDt%2BYR9DgLaUelLWSo15c4vsGMfldr%2BxpBX2BnI%2FLxH8fzCHn5LDBjqkAfdyPviqeAbvVWzv%2Ffkvh6qf4XXn0L7dMurpLVtRYux0DcMPjdZTMOk5cwyFIxFq73bQ2ISykyu9KvbnDiWy5pSch5S3vKIOZunUKmIN%2B4EMgNtjZJ2OCNOd36YbKKCLQZQTGmaZ20Lc9ZMhdNTCqHLi0gvfTgL4e4yh5xT9bOekxC71DBrYyIezBpaDuEMXS7qjT%2F2l7gL%2FHEOACXeLedWFb9hM&X-Amz-Signature=cabf36b2367b9935ea3b3e20e489445399db36ea87ca23fe54e0ccec0bdeaed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVMDLXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZXFbJpsZ%2F1vKwxheWYE%2FfcJD0Bnk4Y%2FQ7h1X38PS%2BwIhALJIHjMpmnTYytujBM62L%2BlflzwPWLevw04cfv%2FTZMOyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztjy78fopCRbIy3zEq3AMKENJ33jJLnh5rHLi%2FFeOStnNTXbmBZAJm8c3p12CoqAT4Q44D8Y4BiI0xo%2FRe5%2BbnQENjUyb%2FFSE2UN%2BQ6y7fGgZ5YfH6pRC6oEWSOhxFm4d1JpxXTEX%2BhvI4Xaw70WLqGPQUnOcO0oVSnQy8Ae6lAhoqdXs0h3zA0yZPaRPR8py5GCXc%2B3tXfjzr%2FQLg02BopAwv%2FVEU7ermlnrRFaZwqhXAKkB2%2FsGoIgFDcw0CEGy24Gv%2BDyv4E3bm8RcLY6N1mY1i5xEg2sIgJs%2FcTbLFA%2FtHBIlBl%2FvHDGJDpmrtg3mr7NKNPKM%2FOcReKVkCNTWSZOsJUES2iieehHGK5eSZc%2BjXEjl3h2hpv5p3LXux8AKWxt4irf3V7rZsY8VzsYGQTcyJ2n%2B%2BJS2vpSvqR%2BqiwXe8ydV2q64TVWF3ooSmBsWRw%2BTroDRqCo7ERta%2BQrZ2j6DA%2BZi6WoD7PcV1HVxyKky0U28bvWYhKXzli6%2BeUbftm%2FJ7lUG9ZxL4i%2FL7mb29TN573pUXxuPzh22YbFsnhl2BmwwNXrxJbF4lYA0fZqjdkA0uIbEjlXeJE7pprByYUc4LEo2bRL5DjDt%2BYR9DgLaUelLWSo15c4vsGMfldr%2BxpBX2BnI%2FLxH8fzCHn5LDBjqkAfdyPviqeAbvVWzv%2Ffkvh6qf4XXn0L7dMurpLVtRYux0DcMPjdZTMOk5cwyFIxFq73bQ2ISykyu9KvbnDiWy5pSch5S3vKIOZunUKmIN%2B4EMgNtjZJ2OCNOd36YbKKCLQZQTGmaZ20Lc9ZMhdNTCqHLi0gvfTgL4e4yh5xT9bOekxC71DBrYyIezBpaDuEMXS7qjT%2F2l7gL%2FHEOACXeLedWFb9hM&X-Amz-Signature=6b7e79f09fbfb17a01b9880bd304b1c4607e3a002530f62c0c120886f9eb9f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVMDLXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZXFbJpsZ%2F1vKwxheWYE%2FfcJD0Bnk4Y%2FQ7h1X38PS%2BwIhALJIHjMpmnTYytujBM62L%2BlflzwPWLevw04cfv%2FTZMOyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztjy78fopCRbIy3zEq3AMKENJ33jJLnh5rHLi%2FFeOStnNTXbmBZAJm8c3p12CoqAT4Q44D8Y4BiI0xo%2FRe5%2BbnQENjUyb%2FFSE2UN%2BQ6y7fGgZ5YfH6pRC6oEWSOhxFm4d1JpxXTEX%2BhvI4Xaw70WLqGPQUnOcO0oVSnQy8Ae6lAhoqdXs0h3zA0yZPaRPR8py5GCXc%2B3tXfjzr%2FQLg02BopAwv%2FVEU7ermlnrRFaZwqhXAKkB2%2FsGoIgFDcw0CEGy24Gv%2BDyv4E3bm8RcLY6N1mY1i5xEg2sIgJs%2FcTbLFA%2FtHBIlBl%2FvHDGJDpmrtg3mr7NKNPKM%2FOcReKVkCNTWSZOsJUES2iieehHGK5eSZc%2BjXEjl3h2hpv5p3LXux8AKWxt4irf3V7rZsY8VzsYGQTcyJ2n%2B%2BJS2vpSvqR%2BqiwXe8ydV2q64TVWF3ooSmBsWRw%2BTroDRqCo7ERta%2BQrZ2j6DA%2BZi6WoD7PcV1HVxyKky0U28bvWYhKXzli6%2BeUbftm%2FJ7lUG9ZxL4i%2FL7mb29TN573pUXxuPzh22YbFsnhl2BmwwNXrxJbF4lYA0fZqjdkA0uIbEjlXeJE7pprByYUc4LEo2bRL5DjDt%2BYR9DgLaUelLWSo15c4vsGMfldr%2BxpBX2BnI%2FLxH8fzCHn5LDBjqkAfdyPviqeAbvVWzv%2Ffkvh6qf4XXn0L7dMurpLVtRYux0DcMPjdZTMOk5cwyFIxFq73bQ2ISykyu9KvbnDiWy5pSch5S3vKIOZunUKmIN%2B4EMgNtjZJ2OCNOd36YbKKCLQZQTGmaZ20Lc9ZMhdNTCqHLi0gvfTgL4e4yh5xT9bOekxC71DBrYyIezBpaDuEMXS7qjT%2F2l7gL%2FHEOACXeLedWFb9hM&X-Amz-Signature=0000a063aa2f555b005d539e915e5d72fbb4b270b3de8b1f4904424c8716b841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFQRCLQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoPGyJ6PawfUr%2FaC3sOsubpM5Rzquz7onAmp%2Ftzo2mPQIhAMbu3uOneAHfViGf71IeJ0BebNGFMuHulxR4u9neZLpfKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4hrv0tPf0y3sJ4osq3APWKfD1%2BdIVms38Z9ncDVblUOu33i0DmKUJMRjB%2BHyAW55ZHJN5BsHPtLwQFOh9xQfTYyN3I1%2B%2FAiJCW%2BR1epMawuIoGyePhj1gvwLNP6fUdcb54tnaTDasEyzYja9o7uMEHWT4ZLnCgEefRrNv69gq1pwKtT%2BUYES0j%2FCNJ%2FTK1Rs7AaigjPASAV5KVF5m6FRtBASUYa7xiDWPwdz0FxEN2M4wqjK1KZiuVgk%2BpvBp5hCJTTNHU6zC7C%2BobpLRHsyPdulHPtAkqRoqcUmmu404TfPvamzpXy3fwYbIaFFHC953N7PT8Gh4UiKo4CwlZ2rMttu%2BfOqewfbw18Cap2OWuBUCEOiTWZ1N6uqPaJGvGOlG1dib%2BR6DaAeCKhH71cLkj2qEnobi1sxwobtp2YETUDDNLfxVQYIglzn5uB3%2Br5XdRuJ9R6qeGL2sKbhUKmfM81ZS8HsP9jGtKd8W15d808nO%2B06Hi3xVmSxvyFyzskeFhuvtTP%2F8DU2DkTRm%2BuPdggjDUYBfRhJ6hOMcrpVfs4anv7u%2FWgfpxPS6DVH7FdBdFaFTCh3Rngl64TABz3kfnzwLhYUfFDB2283xaD9rknIT1SNA0Yae6eWf2Skn2ivvsZlHcaajv0lpOTD9nZLDBjqkAYb7h1%2BC%2Baw6LGTeq1Z7ZycxXQiPkt6kIbhDDakK4S5p5rs9TnkfTtAhtJRZT%2B8MWDmtE1MN%2Byj2Vz4R1SY0bvhmHIDDFKjDtCThvbOCirT%2FTEteTdrQ0NQdhrXNSUrZ9O7a7OlGHePwrKJ4s8roDHGv1YWrhg%2FuF2Q6iXqpxP2FV9YMUmt6wdBgdAqDX%2BrAEW76ckVPRsypOsJa1nFgBBgm6FWT&X-Amz-Signature=6147834d6e1e67ec322c14520a78bd388dbd3e5d51286f8bfefd25ec4dda89cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRXFIVV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBkYQspSAMgUhzGTJVwqVsKKUxDnW7wKdF32te6NT2dgIgNVZB7WWGe2aaXV6HR07ps67vgDy88ALOVocU5q5IoSsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvtNYkKviTIqZQhPCrcA2Lv0CstEalZEWw7yl%2FujYjQYxsR%2Flm%2Fbc4fjQVh05QAx1I%2FAPe8%2Fkf%2FW5CQgSBQpwCiqvbpyi%2Fl4FfvDno3lDCwka4LHVtkl4tKx7%2BxpSWUK3fcQk6G8YL8q9mSpOst4yadFRzvMWowc%2Fq3AM18HhMifBvljKeiIpoJGh%2FTy0Ql6cseIA9dpKvZdWB5enOpeVO646ZyDeoaSC6rgj4IWnRhJqAjaB4JeSsn%2F1RT9qDOFFd2Ne8kLhs%2FhA2N0UlNIBfLEaHCQ%2BQeedUJDJ6l%2FAsTuFVigoPBhIOOSMkuoaFwSUvfPRh9Ho5%2FHhBEeTBZqmizPJy6VGPDJZX46b57LPS1M3V2kxJgibtY9cxAFd9YU%2BbPPse62BJCp3RENtZ8eoVeFnD1W7LZ3pXbaljLrEI7k6%2BZwf4j%2FH5ApAXPKUzES%2FISlUbhkxLW%2FiYNbtsQ9%2BvU2l318vROi5U6QAsQftCkbfQcRWJ%2F%2Fa4jHZ580osll%2FX39td1VYt0K51wjrqYUruvvzTdGSJlt%2BwFkZsh9%2BWlt74mxHf0V4ZcTNFvV9jwC%2B2MF%2BctMDofGtFysyXanm68d6LF0WzCbLO4nRDHEyJx1A6lD9%2B8rJMgx6jbPDDuu4L1oSwwN3aUFjilMPydksMGOqUBSwho9Mm9USQJLXqSYRDv1sHc%2F6BgMAmJ5H0%2BFp5Op7mq8FyXfWDnOBrj%2B8Z7mLOPQ5d%2Bko15Yb%2BhKxi00CSIQtYthAuFX%2B6v7cxkZp%2BRnapC4zeADE%2FOIKgCJISTa3YXNqmEVXnV%2Fe%2FDG0n5mzIc8Jd4NeTjlUj4LnxTdb%2BD7hZVya4sVlCzAGxMy5SR2qG1ynJpzIu1rXlTRamNwTwmVYJAr4w6&X-Amz-Signature=6c3be4be7b3db6bda90fab0083ed3252393b1246d08278e7b79e24a22d5b5da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVMDLXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZXFbJpsZ%2F1vKwxheWYE%2FfcJD0Bnk4Y%2FQ7h1X38PS%2BwIhALJIHjMpmnTYytujBM62L%2BlflzwPWLevw04cfv%2FTZMOyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztjy78fopCRbIy3zEq3AMKENJ33jJLnh5rHLi%2FFeOStnNTXbmBZAJm8c3p12CoqAT4Q44D8Y4BiI0xo%2FRe5%2BbnQENjUyb%2FFSE2UN%2BQ6y7fGgZ5YfH6pRC6oEWSOhxFm4d1JpxXTEX%2BhvI4Xaw70WLqGPQUnOcO0oVSnQy8Ae6lAhoqdXs0h3zA0yZPaRPR8py5GCXc%2B3tXfjzr%2FQLg02BopAwv%2FVEU7ermlnrRFaZwqhXAKkB2%2FsGoIgFDcw0CEGy24Gv%2BDyv4E3bm8RcLY6N1mY1i5xEg2sIgJs%2FcTbLFA%2FtHBIlBl%2FvHDGJDpmrtg3mr7NKNPKM%2FOcReKVkCNTWSZOsJUES2iieehHGK5eSZc%2BjXEjl3h2hpv5p3LXux8AKWxt4irf3V7rZsY8VzsYGQTcyJ2n%2B%2BJS2vpSvqR%2BqiwXe8ydV2q64TVWF3ooSmBsWRw%2BTroDRqCo7ERta%2BQrZ2j6DA%2BZi6WoD7PcV1HVxyKky0U28bvWYhKXzli6%2BeUbftm%2FJ7lUG9ZxL4i%2FL7mb29TN573pUXxuPzh22YbFsnhl2BmwwNXrxJbF4lYA0fZqjdkA0uIbEjlXeJE7pprByYUc4LEo2bRL5DjDt%2BYR9DgLaUelLWSo15c4vsGMfldr%2BxpBX2BnI%2FLxH8fzCHn5LDBjqkAfdyPviqeAbvVWzv%2Ffkvh6qf4XXn0L7dMurpLVtRYux0DcMPjdZTMOk5cwyFIxFq73bQ2ISykyu9KvbnDiWy5pSch5S3vKIOZunUKmIN%2B4EMgNtjZJ2OCNOd36YbKKCLQZQTGmaZ20Lc9ZMhdNTCqHLi0gvfTgL4e4yh5xT9bOekxC71DBrYyIezBpaDuEMXS7qjT%2F2l7gL%2FHEOACXeLedWFb9hM&X-Amz-Signature=5f9c404c186f1e8cfcd154b2b97d022dda0e8a6f6847648262cb212ccdcc50d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
