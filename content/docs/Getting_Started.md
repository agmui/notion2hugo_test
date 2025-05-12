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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNNAZZ4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3HcEK9Kme%2FA63jbEbx%2BiRBhXLZ4P1fZ%2B82kxHYfNHogIhAJLNVX5kVXhZKPm5tLTKNWiduhhw78lfi14iY%2F1lAeGGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMA8x1p4d4Il00yKcq3APuBk5HUvYbej5ntLTtVlMS2INoThoefn0%2FktlDdkGy649OoTp5cdhpzwbKSbuGrQyRm2VWY%2BWstJYOqe8EmCkm0g4V2yHppduJqlR7%2FOgQlqweFtR%2B1v2rTdQDRI%2Bhp3pQDpiwfsAZyDKjMCVRdCLdhMFZ6BdDG3g1XJMyqKwfcS1fvg5tcQb75mfSBGKgu3tiGpoHo7ULg0oQg8HAN6zTmm3b5WTZBom13hzpMmXOFn5db4nbBAHh%2FQpUrchH6NQvt1uWIx1aqm2HYPlqyipgITLwBR5K8N7jLmlIra4qkwpIAzeEUEmjHQaBDWukYgHDemAaVmFc1W5hSB0hrgeg2QAIL7a1VWOF63CJLvPhMTEEg2boCV45MTCeihvVwZy9eglKnIEF4VI1gK5kDP44rDTi3gUwICaaPY40vFx6dM72Ngo1l2diDlC4sec2edxr8QSGyZN0pXFYOu0HH5PQamP9UjcBKF841Mq2u3lzg96ofH%2BTiBSIrgvy%2FPLx8rffCmtVsHNgubqfPc93jMtb%2BeMkHj6HgKr9Pjj13ofxomT2nDTArAYmVNgiZl%2BxYWe06iD%2BmkWZOIp5izS4ZMNp6wHPG0fDzpAMMGYHMCAfCJAJP1AjAcznkOfVHDDW9YjBBjqkAePbfiES5gtaflDavOSEajx2dThZtzInwB5dkRTCN6neufBUQdb%2FFkXHq7uPx%2FBzuVhwAkAhpuB0FUy3LposOVCAs7YlmgcEuqZyZ9njps2h8eZMpQ1eR8DjZlUp0Z0DYh3dKKLS5oGMexEDD%2FAzgW0xklZnnhC4wBwQDKF6SHkKw%2BFOxMvv2iN8LLcNZfgdZUay1gb7DVVz7QFDJfWaMn7IUhbU&X-Amz-Signature=2c9a031210a3941505cd37fbc05384a5f32c8e911ec3ff3c6b9a248b22705610&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNNAZZ4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3HcEK9Kme%2FA63jbEbx%2BiRBhXLZ4P1fZ%2B82kxHYfNHogIhAJLNVX5kVXhZKPm5tLTKNWiduhhw78lfi14iY%2F1lAeGGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMA8x1p4d4Il00yKcq3APuBk5HUvYbej5ntLTtVlMS2INoThoefn0%2FktlDdkGy649OoTp5cdhpzwbKSbuGrQyRm2VWY%2BWstJYOqe8EmCkm0g4V2yHppduJqlR7%2FOgQlqweFtR%2B1v2rTdQDRI%2Bhp3pQDpiwfsAZyDKjMCVRdCLdhMFZ6BdDG3g1XJMyqKwfcS1fvg5tcQb75mfSBGKgu3tiGpoHo7ULg0oQg8HAN6zTmm3b5WTZBom13hzpMmXOFn5db4nbBAHh%2FQpUrchH6NQvt1uWIx1aqm2HYPlqyipgITLwBR5K8N7jLmlIra4qkwpIAzeEUEmjHQaBDWukYgHDemAaVmFc1W5hSB0hrgeg2QAIL7a1VWOF63CJLvPhMTEEg2boCV45MTCeihvVwZy9eglKnIEF4VI1gK5kDP44rDTi3gUwICaaPY40vFx6dM72Ngo1l2diDlC4sec2edxr8QSGyZN0pXFYOu0HH5PQamP9UjcBKF841Mq2u3lzg96ofH%2BTiBSIrgvy%2FPLx8rffCmtVsHNgubqfPc93jMtb%2BeMkHj6HgKr9Pjj13ofxomT2nDTArAYmVNgiZl%2BxYWe06iD%2BmkWZOIp5izS4ZMNp6wHPG0fDzpAMMGYHMCAfCJAJP1AjAcznkOfVHDDW9YjBBjqkAePbfiES5gtaflDavOSEajx2dThZtzInwB5dkRTCN6neufBUQdb%2FFkXHq7uPx%2FBzuVhwAkAhpuB0FUy3LposOVCAs7YlmgcEuqZyZ9njps2h8eZMpQ1eR8DjZlUp0Z0DYh3dKKLS5oGMexEDD%2FAzgW0xklZnnhC4wBwQDKF6SHkKw%2BFOxMvv2iN8LLcNZfgdZUay1gb7DVVz7QFDJfWaMn7IUhbU&X-Amz-Signature=e0719e1ca1e7cc6f33e73a32390a6188c199eb95a2d1e100892563018527f8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNNAZZ4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3HcEK9Kme%2FA63jbEbx%2BiRBhXLZ4P1fZ%2B82kxHYfNHogIhAJLNVX5kVXhZKPm5tLTKNWiduhhw78lfi14iY%2F1lAeGGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMA8x1p4d4Il00yKcq3APuBk5HUvYbej5ntLTtVlMS2INoThoefn0%2FktlDdkGy649OoTp5cdhpzwbKSbuGrQyRm2VWY%2BWstJYOqe8EmCkm0g4V2yHppduJqlR7%2FOgQlqweFtR%2B1v2rTdQDRI%2Bhp3pQDpiwfsAZyDKjMCVRdCLdhMFZ6BdDG3g1XJMyqKwfcS1fvg5tcQb75mfSBGKgu3tiGpoHo7ULg0oQg8HAN6zTmm3b5WTZBom13hzpMmXOFn5db4nbBAHh%2FQpUrchH6NQvt1uWIx1aqm2HYPlqyipgITLwBR5K8N7jLmlIra4qkwpIAzeEUEmjHQaBDWukYgHDemAaVmFc1W5hSB0hrgeg2QAIL7a1VWOF63CJLvPhMTEEg2boCV45MTCeihvVwZy9eglKnIEF4VI1gK5kDP44rDTi3gUwICaaPY40vFx6dM72Ngo1l2diDlC4sec2edxr8QSGyZN0pXFYOu0HH5PQamP9UjcBKF841Mq2u3lzg96ofH%2BTiBSIrgvy%2FPLx8rffCmtVsHNgubqfPc93jMtb%2BeMkHj6HgKr9Pjj13ofxomT2nDTArAYmVNgiZl%2BxYWe06iD%2BmkWZOIp5izS4ZMNp6wHPG0fDzpAMMGYHMCAfCJAJP1AjAcznkOfVHDDW9YjBBjqkAePbfiES5gtaflDavOSEajx2dThZtzInwB5dkRTCN6neufBUQdb%2FFkXHq7uPx%2FBzuVhwAkAhpuB0FUy3LposOVCAs7YlmgcEuqZyZ9njps2h8eZMpQ1eR8DjZlUp0Z0DYh3dKKLS5oGMexEDD%2FAzgW0xklZnnhC4wBwQDKF6SHkKw%2BFOxMvv2iN8LLcNZfgdZUay1gb7DVVz7QFDJfWaMn7IUhbU&X-Amz-Signature=da416a97518fedb85e291dc2af659db3bcef604b80367dddf81fca5042e69f52&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBO62VXO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE12f85GGtr16Sx%2FOgSAMzg2mmBYQe%2BA3yFsx%2F91exNoAiAbDXQhgZ0T56J7iTyURqFGNloUcT2aRZ6NOYapLWsktCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJcIhdMtnAlfIN3iKtwD5xNJ%2B%2FxKkBIX%2Bo1f50PjVMKYSiSBsFjCIDeDn2MUT0n%2FkwHZr36dOwY6SS510qQUsZZ7Ww%2BqZlXtUEDdxd3%2BdYUTWBIgj8V2DpygsFvAfYjPcYRLfc5NFSKN9q1OEEALcZIrIQp12S3bv%2B0bRjXp2Ke2c5ev8FFUpv6Mhr6r9RMsfi70zGUnI2rCOWGo5pbCOaKyygbLiQW4FZ3Ti6YfPf6WCAPVxZHluqnx%2BsOrYpvCtvg5hJd4qxKL%2BTV9f0onZnWvM9h7xAx23EnjJzYFAKENQcsvI46XgjLGni5Eoynmtn9Rleqc2U5uyxASTmkqeL%2BbkDlHxUiKEraSCBL0JnqQrQKughZH5yBQof10dWFVU1md8DR4G6IpMpsDfdn8msM%2BZCUGLg2BPp77sGCjFtpBHKuLnX1NHuiGrGTRthdC86vCnh0Q4wflNScxAGwF4hPfgQHKLmJntXRn%2F1hfM5iBVZFMgPE83iu%2BG%2FjToLcgrvdRV1rcSLyWL9OYO3oJ7gUUTHnpbWiVjcIcY5wA0gkRSsvbE1b%2BSefYPvj5RNA64PPATNHEZHJwrl5iIIiC7TUmz2Y9F%2BxPblv4b2LkN%2Bo0hvukwCsH3yLvODbyCF1bNjNvS5T%2FjEfjHCowqPWIwQY6pgHvGsHlJ1bF1%2BEPdGTQkxLq%2BdjVhCaUPi94732AmOl0xjDXAOqCYKV%2FI1V%2FnwEMfJx%2Bar%2BbYkOSlTJuJPn2pbnIA594J6OkGBJWlImrjK05sisf7m5e80XLNOykQIxks0viAZLf6G0vfzxKq4%2BnTCMGB%2BaDAllNsEXevGKQFpEPcuvjLmEh3qRdw%2BKfBdoMVGMxQ73BF8TcLksJtJohIRKEtKP66e7i&X-Amz-Signature=0c47dda992e637890dcafff4c128b856a48bf36350718db83bd59f565e6294c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WR7SH4E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDTwugcmb4sNd6TxCjuFDMBehWhgP0kNqs0pXbz99dUBAIhAKULPlde%2B2z0YPES6tvAgHhn8gvzG1nB0DMrnnNZXxqPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwbwgTeyoNSlTu2CAq3ANTJnSXAqyX1mLFwB0KwwQZRHkYPGqUJi9Au1pAGgzxJBthbepBYki7VJE%2FIOwW8n662bzaAQUZ%2BnvBmpZ6CzDDDEuBer%2FCUsJcZNdrIHmF4MbTYHWyB4PuU3PhN0R14v9pNur7T%2B2%2Br0ViYbQifVJnvB46cNfRVO%2Buz6gCyGxXlpbY20MTJOR5wOY9sD3l6bzCEeEroenVI%2BllaQNz6z%2B0pFNut%2Frks07G7VOGBggswkhFRVabW7vh19GATeABG0PL%2BkuESPP6RD9Em2n4dDQEisdHZocDhaBtF3b2xA8uZsBTo2pI8%2BIMOd4udcdhqK4LZG6NxDsZy%2Bm29F7kzdAT%2B0jJ35RcudssB2saozYduGyioX5A0yb6IhzSbGhZF0mhax%2FOBpzFBupuqhxMeuO0hV0l2e6d8QTBiSpQWQPChR6saXoGFKDgxgE2gJD0wzmsZXs8I%2BLMdqzXQ8COHPCKgnjjx4SoI7vnODa8LH4auTMRWaXBRbFCqlL%2BjNENu17GVO84AfjychXUAO3krIyGtpw5Uu%2FntE1Zg6hP9AVvfS3r3AVj1DpDRFRTrLhEaeznmdRMXZBzxqIa9jiSK5W%2F8Ng0c%2F5lyGi%2Bbm%2Bf14RUiBT3xHEq6%2FTPXqDXXDCO9YjBBjqkAb5YufBHLz4rjdIoPUCUYCKFCMsbvXpFUpKxASebAZW1HrB0Fp6mY3ngvy3c6E%2FoAV9uxJUxOx6WymaK8f1RdxWR1Kdh8vRw%2Fcc9cYkYpnYlgNN1%2F%2Fbz9DoAMuvdabhvC%2BwkjSx1mfQkt9WhlHdb302BV2BwVVwI%2FWq2CEOMjQGlGldF%2F3wAYBfx4fzw3bYxt2W%2Fvu%2FiWfsz94zWgOjpYb%2Fst1kY&X-Amz-Signature=ea35d4cd27fbd271eea96da06273ce3e00d072f54b93b4480c7e65b5c9953520&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNNAZZ4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3HcEK9Kme%2FA63jbEbx%2BiRBhXLZ4P1fZ%2B82kxHYfNHogIhAJLNVX5kVXhZKPm5tLTKNWiduhhw78lfi14iY%2F1lAeGGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMA8x1p4d4Il00yKcq3APuBk5HUvYbej5ntLTtVlMS2INoThoefn0%2FktlDdkGy649OoTp5cdhpzwbKSbuGrQyRm2VWY%2BWstJYOqe8EmCkm0g4V2yHppduJqlR7%2FOgQlqweFtR%2B1v2rTdQDRI%2Bhp3pQDpiwfsAZyDKjMCVRdCLdhMFZ6BdDG3g1XJMyqKwfcS1fvg5tcQb75mfSBGKgu3tiGpoHo7ULg0oQg8HAN6zTmm3b5WTZBom13hzpMmXOFn5db4nbBAHh%2FQpUrchH6NQvt1uWIx1aqm2HYPlqyipgITLwBR5K8N7jLmlIra4qkwpIAzeEUEmjHQaBDWukYgHDemAaVmFc1W5hSB0hrgeg2QAIL7a1VWOF63CJLvPhMTEEg2boCV45MTCeihvVwZy9eglKnIEF4VI1gK5kDP44rDTi3gUwICaaPY40vFx6dM72Ngo1l2diDlC4sec2edxr8QSGyZN0pXFYOu0HH5PQamP9UjcBKF841Mq2u3lzg96ofH%2BTiBSIrgvy%2FPLx8rffCmtVsHNgubqfPc93jMtb%2BeMkHj6HgKr9Pjj13ofxomT2nDTArAYmVNgiZl%2BxYWe06iD%2BmkWZOIp5izS4ZMNp6wHPG0fDzpAMMGYHMCAfCJAJP1AjAcznkOfVHDDW9YjBBjqkAePbfiES5gtaflDavOSEajx2dThZtzInwB5dkRTCN6neufBUQdb%2FFkXHq7uPx%2FBzuVhwAkAhpuB0FUy3LposOVCAs7YlmgcEuqZyZ9njps2h8eZMpQ1eR8DjZlUp0Z0DYh3dKKLS5oGMexEDD%2FAzgW0xklZnnhC4wBwQDKF6SHkKw%2BFOxMvv2iN8LLcNZfgdZUay1gb7DVVz7QFDJfWaMn7IUhbU&X-Amz-Signature=756ab13540e4644b823a53c19875cc84147f073083181b7b4319474a310fe2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
