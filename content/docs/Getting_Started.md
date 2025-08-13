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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMW72D7P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhHNild4OTF25DsDmJ5twpNHDXOgdh8z0hI%2Fhi3sbMwIhAMDlNEFW%2FXqhwx5dnVK15GctTzmRYTOctTXAWkkhLSsIKv8DCC8QABoMNjM3NDIzMTgzODA1Igz79QjoGGta3EM8Smgq3AMCYLZaBb8B0hGu8KeCBogKiIxURZ36VQOijn0lgxahV%2BUQTpTKxeDCpODVM6gAyuZWsiUVLvRblJfD2fl8%2FQgW%2FJnAurnQDLg%2BRvrgFUYgp551dHbOE5fxKFlLe44TD30nXt7GJmlLHkXzQrVOL1VwEyNkRn47Mrg90Qy68xA9BAe35zpa3Y5LeYvs3u6YtB%2BDyoTj%2ByuInTitL9w%2F2ED1Xv5PeaaV0qIRfQWvdAfpZi%2BylWWgpq9w1BHrSF%2Fi8WLW7ZChZWeHeg8Buwf6Ok%2BnxINlfG%2BQJWoRG1twK4A1cp22kmIPzdO5%2B3Cl8Drhcxn2q4WNoEdFqe0HiYh6bAQZPWV0ajBLvMtVnIMREX9FeNxVUNJfmOLDmwNu25pjpjFQl3VOin8bhX0iB8Ms0zPR5hqdf52OexBDF4vONaYMmZvLj%2Fb05DTEDCvzf%2FLh6%2FwFwrK75op7%2Byqd6itbybmC1p7H3LNqSiHgnWV91T75Ezcxlp3RzlnFv9M2Ic4eH4ggGN2mUvf8W2COY%2F9WRfP0eGNAVD%2FA1t7qhXxCzl%2FZU1J1aumk%2BDjAYYSPGjCFwBpogte7WaITzMSLZP0Pyltb17XHoIXREV9Jxkh2wgzqkSLkEHWj%2FibfcfpDoTCMs%2FLEBjqkAc%2FRGYCsUspWbD26UfL7mplYlMGYHAuHVgd1Dj1xNDFu2722HbuG55HbyA2QvQso4el87yH4IP8CDlLWSLXVrKwwxulkLNS%2FWrfO3RNI3Ee2EdG1%2FtcwoCiq5CcLjjiHvS%2Fh9W%2FOzW%2F6Txa9%2BZH7Pn06T%2BfaBo%2FQulkR0fietx0W8IFlxI3wl%2Ff7PZc9nFEN1BWaa%2Fd7FUYj76HIZ8lnb6W6Cv%2BE&X-Amz-Signature=b33309e774180228045eaffef4ac89cb3c7716fdb0bf2e538e0baaf1c5e8b3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMW72D7P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhHNild4OTF25DsDmJ5twpNHDXOgdh8z0hI%2Fhi3sbMwIhAMDlNEFW%2FXqhwx5dnVK15GctTzmRYTOctTXAWkkhLSsIKv8DCC8QABoMNjM3NDIzMTgzODA1Igz79QjoGGta3EM8Smgq3AMCYLZaBb8B0hGu8KeCBogKiIxURZ36VQOijn0lgxahV%2BUQTpTKxeDCpODVM6gAyuZWsiUVLvRblJfD2fl8%2FQgW%2FJnAurnQDLg%2BRvrgFUYgp551dHbOE5fxKFlLe44TD30nXt7GJmlLHkXzQrVOL1VwEyNkRn47Mrg90Qy68xA9BAe35zpa3Y5LeYvs3u6YtB%2BDyoTj%2ByuInTitL9w%2F2ED1Xv5PeaaV0qIRfQWvdAfpZi%2BylWWgpq9w1BHrSF%2Fi8WLW7ZChZWeHeg8Buwf6Ok%2BnxINlfG%2BQJWoRG1twK4A1cp22kmIPzdO5%2B3Cl8Drhcxn2q4WNoEdFqe0HiYh6bAQZPWV0ajBLvMtVnIMREX9FeNxVUNJfmOLDmwNu25pjpjFQl3VOin8bhX0iB8Ms0zPR5hqdf52OexBDF4vONaYMmZvLj%2Fb05DTEDCvzf%2FLh6%2FwFwrK75op7%2Byqd6itbybmC1p7H3LNqSiHgnWV91T75Ezcxlp3RzlnFv9M2Ic4eH4ggGN2mUvf8W2COY%2F9WRfP0eGNAVD%2FA1t7qhXxCzl%2FZU1J1aumk%2BDjAYYSPGjCFwBpogte7WaITzMSLZP0Pyltb17XHoIXREV9Jxkh2wgzqkSLkEHWj%2FibfcfpDoTCMs%2FLEBjqkAc%2FRGYCsUspWbD26UfL7mplYlMGYHAuHVgd1Dj1xNDFu2722HbuG55HbyA2QvQso4el87yH4IP8CDlLWSLXVrKwwxulkLNS%2FWrfO3RNI3Ee2EdG1%2FtcwoCiq5CcLjjiHvS%2Fh9W%2FOzW%2F6Txa9%2BZH7Pn06T%2BfaBo%2FQulkR0fietx0W8IFlxI3wl%2Ff7PZc9nFEN1BWaa%2Fd7FUYj76HIZ8lnb6W6Cv%2BE&X-Amz-Signature=4cffb403ea386eebb088e079c2859f36ecf59a2e8dd42569e9d1de99aac4bf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMW72D7P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhHNild4OTF25DsDmJ5twpNHDXOgdh8z0hI%2Fhi3sbMwIhAMDlNEFW%2FXqhwx5dnVK15GctTzmRYTOctTXAWkkhLSsIKv8DCC8QABoMNjM3NDIzMTgzODA1Igz79QjoGGta3EM8Smgq3AMCYLZaBb8B0hGu8KeCBogKiIxURZ36VQOijn0lgxahV%2BUQTpTKxeDCpODVM6gAyuZWsiUVLvRblJfD2fl8%2FQgW%2FJnAurnQDLg%2BRvrgFUYgp551dHbOE5fxKFlLe44TD30nXt7GJmlLHkXzQrVOL1VwEyNkRn47Mrg90Qy68xA9BAe35zpa3Y5LeYvs3u6YtB%2BDyoTj%2ByuInTitL9w%2F2ED1Xv5PeaaV0qIRfQWvdAfpZi%2BylWWgpq9w1BHrSF%2Fi8WLW7ZChZWeHeg8Buwf6Ok%2BnxINlfG%2BQJWoRG1twK4A1cp22kmIPzdO5%2B3Cl8Drhcxn2q4WNoEdFqe0HiYh6bAQZPWV0ajBLvMtVnIMREX9FeNxVUNJfmOLDmwNu25pjpjFQl3VOin8bhX0iB8Ms0zPR5hqdf52OexBDF4vONaYMmZvLj%2Fb05DTEDCvzf%2FLh6%2FwFwrK75op7%2Byqd6itbybmC1p7H3LNqSiHgnWV91T75Ezcxlp3RzlnFv9M2Ic4eH4ggGN2mUvf8W2COY%2F9WRfP0eGNAVD%2FA1t7qhXxCzl%2FZU1J1aumk%2BDjAYYSPGjCFwBpogte7WaITzMSLZP0Pyltb17XHoIXREV9Jxkh2wgzqkSLkEHWj%2FibfcfpDoTCMs%2FLEBjqkAc%2FRGYCsUspWbD26UfL7mplYlMGYHAuHVgd1Dj1xNDFu2722HbuG55HbyA2QvQso4el87yH4IP8CDlLWSLXVrKwwxulkLNS%2FWrfO3RNI3Ee2EdG1%2FtcwoCiq5CcLjjiHvS%2Fh9W%2FOzW%2F6Txa9%2BZH7Pn06T%2BfaBo%2FQulkR0fietx0W8IFlxI3wl%2Ff7PZc9nFEN1BWaa%2Fd7FUYj76HIZ8lnb6W6Cv%2BE&X-Amz-Signature=c8cea3ea0b1e82e2f3717960591d4c980bc09937d3cad3a0e5d2f35bdd088f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DB52FGG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPQA1h6Xzhlj5XcqjbIE14cV9a%2FhxT%2FLRu7tQh27N%2FjAiA76f3R8H9BDvgx15i2rjMLJ%2FA1tMpibCTjqeCjQmNyiSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMrPKJBL%2BN%2BYbjG%2FdkKtwDLqYfVvl1Caql9ZcwJQiWyGJwnmdWUPoDKLJaVDJZu2jzY2os9D2BqFzOM0cCMtWCciXZDXOkrkeBMhqaH9etrO4PELE6ZzIlR6JWlv0UePranxoe%2BG3mICj%2FfzkzFjtKv2%2Bb%2Bsd0jjA48KAooP%2F7Prqd6F4r6BQk3VuEO6q3%2FHmIf4i0w22wkxrh5xDWA73nt4yOttw%2BiWTpI5UEz9awzn%2F3S6GfrJgNYleFWBO13frH4OjFiIc0yqkR3xXi3cJrBnnGZPbWr5IjNdrUx12Ict%2BPsG5GbzRD3z3nKkc8qq%2BO49ImAW5zjAsy9fNV6EnptRt2yPvMOFhzgkIJtT2NS4yo3Q8XuCUdMLGS5elBBBKhXfOLqddPBOUdPagxdvKyRlCtQOr6Rt6HiepCnSqy9eNXRmeubnOnkkDT2%2BQoGWLMummcRtBVWYv2Wr54zEjhAQXocUsvY54HPknHxqUh2Ar6GIAzUg9PXXEPhWe9Z5s5TbRbzJZdVEW0tIz%2BU%2FLVxy9Vje5qZP2dWezHYR6cOc5ymwoR1if%2F%2B8Q9AiwWFbp4p3TBjZol50fMPFo3%2B06x4GcVPFw6PVAMyutUBYEzSMu09StLLzaWSHocW7EnvH53fwyUnuqVC6YEbQUwibPyxAY6pgHkmnTROraiaNqjDuBQyDwWU5w6fcWRxcciI0BU0ArOWArSduN0Ndt4mug3LMNMKv2hRk6hH2oshNtc7sTeYOHVYuBSwrfLxMshJtynqFaK1LB4%2B6aZMDq7OrG0AMVtXG2J14OPuCib3%2B%2FpTFYsTIgPAOo7gKKw5xHHFFLBNj6%2F7fZftqxczcSTFaWiRuChQwC%2Bk%2FL04RdQcMo5bMWxRTP1M3E4dJ%2FO&X-Amz-Signature=2139ee3e9704393612085ba2aa29662ba9ff94833706dcc7677179d247e318c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPRA65E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn2kQO0808%2FTlhnUM883cAYa%2F88Xy4kIq8niES751UQIhALGKm%2FwcTjFFYMmzcV7vv14d9mi4CZyqcVPw%2BLwLBv53Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzfSljUXlT6oET7e7Aq3ANwNuOy%2BSXGDzOP3Pzl9DEw4l316%2FGdIwd4FXAIS2NtSVRYhDVicl1nYyi%2FukgdKARPy9BBwkGJ7MB9uc3GIqRZ6QKfeZI9tyKKxoTOgqHMWjrGIvNbYFh7Gv6cCOyNcOdU%2FAGqQT4qwLcLRZrw5o1oButG2qUJZ2B5qoZqkzLAnxZrvP2T1EIDdmcDd%2Bs%2FhrSuAM32yuzTic%2B2Uj%2FWKESylEsHGsICUuqV%2FfoRlNnXA8ItdvxVfVojdYEAasPmWtX6viUj%2FMTnYJ8i56VdAwsA%2BKPPsdNwG68cmDRGDmyhGy5BzW4IfhwG3Dj6zXk5dU8FFDgwT9ynPNMxiTWPgs%2BshoZ1zCQ982o%2FyZYAu0unEf4yht9t3xnC1yIi%2Fn8jw2E2FEnG51ssH%2FeYzBMKEBh7v%2FTm8YFxw9ICKHqMHznz98P24WEHerwzn8Fj4v60QvA%2FcKQ5W1LGPLcaiztptiaxZTgswDz%2F50ZiiZr9f3dc%2FYocPicK2dDJo0aTNv2G3jWcOMn%2BVBbIbKasVftZ5HcyEYr477I3fTftFI666VD35QNazubAkniK4rWh2OV2r99nUUZ5%2BVULpMEL7Rgd2ItB82slaMRKsBKaORC6Na99XEtBABj0TMADMhSQaDCls%2FLEBjqkAVGc%2B%2FkclvzZARbE1MqFLX7Q3G1prvBLTGeMVS6VbK6xNw6LgSg82idf9E9iGqBi3su98OMiQi1GQHiGbrK%2BIW%2ByTEAoEbY8JCorIxMKq9uUXAdEtJWeUpv0KD9pC5S9C%2BBdV1Zv4A%2FjpZRrz5PXaX5KTC9EGHdpIeIpHU9XwebhxHwVI8y%2FEwGvrnLZI1ms4YlU7UcJG2tDsWNS%2Fv%2Bo2Dcr0YCJ&X-Amz-Signature=5d22c214cc7c9d3c5fb7412b965796aab22ed46fe9035b10265831b7280cb872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMW72D7P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhHNild4OTF25DsDmJ5twpNHDXOgdh8z0hI%2Fhi3sbMwIhAMDlNEFW%2FXqhwx5dnVK15GctTzmRYTOctTXAWkkhLSsIKv8DCC8QABoMNjM3NDIzMTgzODA1Igz79QjoGGta3EM8Smgq3AMCYLZaBb8B0hGu8KeCBogKiIxURZ36VQOijn0lgxahV%2BUQTpTKxeDCpODVM6gAyuZWsiUVLvRblJfD2fl8%2FQgW%2FJnAurnQDLg%2BRvrgFUYgp551dHbOE5fxKFlLe44TD30nXt7GJmlLHkXzQrVOL1VwEyNkRn47Mrg90Qy68xA9BAe35zpa3Y5LeYvs3u6YtB%2BDyoTj%2ByuInTitL9w%2F2ED1Xv5PeaaV0qIRfQWvdAfpZi%2BylWWgpq9w1BHrSF%2Fi8WLW7ZChZWeHeg8Buwf6Ok%2BnxINlfG%2BQJWoRG1twK4A1cp22kmIPzdO5%2B3Cl8Drhcxn2q4WNoEdFqe0HiYh6bAQZPWV0ajBLvMtVnIMREX9FeNxVUNJfmOLDmwNu25pjpjFQl3VOin8bhX0iB8Ms0zPR5hqdf52OexBDF4vONaYMmZvLj%2Fb05DTEDCvzf%2FLh6%2FwFwrK75op7%2Byqd6itbybmC1p7H3LNqSiHgnWV91T75Ezcxlp3RzlnFv9M2Ic4eH4ggGN2mUvf8W2COY%2F9WRfP0eGNAVD%2FA1t7qhXxCzl%2FZU1J1aumk%2BDjAYYSPGjCFwBpogte7WaITzMSLZP0Pyltb17XHoIXREV9Jxkh2wgzqkSLkEHWj%2FibfcfpDoTCMs%2FLEBjqkAc%2FRGYCsUspWbD26UfL7mplYlMGYHAuHVgd1Dj1xNDFu2722HbuG55HbyA2QvQso4el87yH4IP8CDlLWSLXVrKwwxulkLNS%2FWrfO3RNI3Ee2EdG1%2FtcwoCiq5CcLjjiHvS%2Fh9W%2FOzW%2F6Txa9%2BZH7Pn06T%2BfaBo%2FQulkR0fietx0W8IFlxI3wl%2Ff7PZc9nFEN1BWaa%2Fd7FUYj76HIZ8lnb6W6Cv%2BE&X-Amz-Signature=657cd567cd90069bb0e7a95a3767fe73e41ae02c3982ae96e7a2e48d478baf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
