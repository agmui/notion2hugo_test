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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGMYABA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSqHJh0aK5UObHeW2%2FpY%2BdYl4VltqlUezBiPYBW3pJ4wIgJGJ8V8BfGBGFg%2B5HzxXHKchqWeXoNNnfTYdFH9Fv9ggqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0NrsbGVjkfPCMZlSrcA3S%2F9JkejQL0JUWYyqKOsuUIPa3JUVf2V56Pb597hMJNyyagRAs%2FwzgNK%2FqOlBy48kmKotp280PaXel2ejz4%2FxkEgR8YP9jlXsPK7C%2FYdOtNMzIa8%2Fs0Y0f04wVnydtt6tnd4F5o45YjPu0HLF9Z2g%2FhL5o2GOOSc5J%2BxZtoQ22u8mLQ0Bp6BYvolir%2BAwFVFqEuLo6F9Rmj1oQKC6rvE918F6Z7bb4bGHLB18n90IRZlYxToKTmO0zb1JVN1rTHuw31YatKW8xoaVad8SflN9%2Btdr1%2BFEK9ojIlKKrjB5hBaZ93etYnyCM4FeSbaqW6XK4%2B2fuAp%2F5Sfs4StPpva8%2BP%2FVkCgDLMzjZqLqAqCcNmdePFlPsHZr%2F6zvI8NjuJHAYLtABRj0Ox27Lu9EJumHPCy6SeTv4twAKTpU3k7ez4mGK0sDVZvTkEJ2tzCQZg8cd1CVu9TgcT1jFV6EysoP9jSL3xeyqU1IYDpcXMuP7YLejHeT3tDH%2BheISn%2FOtQif76bkQS68oez1cd1Ds7i%2BvEgWc8Dwgpv1NWjOK0LVBFlW9DazF6Rr%2Fkjb45q3CQNZ%2Fso4viQ00zb6Q65nBk6R%2FT8sR1AY4stgAa0suCwZSveoSrwVtq2P8T5pj6MLrcrsQGOqUBr8pOplDi3zQJi5pGxKrJuZX9EkQ6qg6U7DtRrfsPVVw8qfoB8cIe1rICWFN4E%2FBWwiUodafcFUzDNwkUcli6z3tUpRuV8Mnm0mlBPFM0%2F1DlyC7UNqhGlp7pop7otp5lK0XY7U6%2B7MdrrlI6YeV7aKM8%2F6Y87jflqU2iXEOn176FDHfqhmJ0Pgt8kd8go0ZzTpnXckfzUVuFiTqrGDM9mV3U6N0B&X-Amz-Signature=37f8a9a447a8483c8da68eb9e0e52a68aa399f9bec59a564f94d9806a496088c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGMYABA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSqHJh0aK5UObHeW2%2FpY%2BdYl4VltqlUezBiPYBW3pJ4wIgJGJ8V8BfGBGFg%2B5HzxXHKchqWeXoNNnfTYdFH9Fv9ggqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0NrsbGVjkfPCMZlSrcA3S%2F9JkejQL0JUWYyqKOsuUIPa3JUVf2V56Pb597hMJNyyagRAs%2FwzgNK%2FqOlBy48kmKotp280PaXel2ejz4%2FxkEgR8YP9jlXsPK7C%2FYdOtNMzIa8%2Fs0Y0f04wVnydtt6tnd4F5o45YjPu0HLF9Z2g%2FhL5o2GOOSc5J%2BxZtoQ22u8mLQ0Bp6BYvolir%2BAwFVFqEuLo6F9Rmj1oQKC6rvE918F6Z7bb4bGHLB18n90IRZlYxToKTmO0zb1JVN1rTHuw31YatKW8xoaVad8SflN9%2Btdr1%2BFEK9ojIlKKrjB5hBaZ93etYnyCM4FeSbaqW6XK4%2B2fuAp%2F5Sfs4StPpva8%2BP%2FVkCgDLMzjZqLqAqCcNmdePFlPsHZr%2F6zvI8NjuJHAYLtABRj0Ox27Lu9EJumHPCy6SeTv4twAKTpU3k7ez4mGK0sDVZvTkEJ2tzCQZg8cd1CVu9TgcT1jFV6EysoP9jSL3xeyqU1IYDpcXMuP7YLejHeT3tDH%2BheISn%2FOtQif76bkQS68oez1cd1Ds7i%2BvEgWc8Dwgpv1NWjOK0LVBFlW9DazF6Rr%2Fkjb45q3CQNZ%2Fso4viQ00zb6Q65nBk6R%2FT8sR1AY4stgAa0suCwZSveoSrwVtq2P8T5pj6MLrcrsQGOqUBr8pOplDi3zQJi5pGxKrJuZX9EkQ6qg6U7DtRrfsPVVw8qfoB8cIe1rICWFN4E%2FBWwiUodafcFUzDNwkUcli6z3tUpRuV8Mnm0mlBPFM0%2F1DlyC7UNqhGlp7pop7otp5lK0XY7U6%2B7MdrrlI6YeV7aKM8%2F6Y87jflqU2iXEOn176FDHfqhmJ0Pgt8kd8go0ZzTpnXckfzUVuFiTqrGDM9mV3U6N0B&X-Amz-Signature=9ea6bc24ff0beca9666b89d9289aabdae6c9eac95145357e5ea23f875ecb4ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGMYABA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSqHJh0aK5UObHeW2%2FpY%2BdYl4VltqlUezBiPYBW3pJ4wIgJGJ8V8BfGBGFg%2B5HzxXHKchqWeXoNNnfTYdFH9Fv9ggqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0NrsbGVjkfPCMZlSrcA3S%2F9JkejQL0JUWYyqKOsuUIPa3JUVf2V56Pb597hMJNyyagRAs%2FwzgNK%2FqOlBy48kmKotp280PaXel2ejz4%2FxkEgR8YP9jlXsPK7C%2FYdOtNMzIa8%2Fs0Y0f04wVnydtt6tnd4F5o45YjPu0HLF9Z2g%2FhL5o2GOOSc5J%2BxZtoQ22u8mLQ0Bp6BYvolir%2BAwFVFqEuLo6F9Rmj1oQKC6rvE918F6Z7bb4bGHLB18n90IRZlYxToKTmO0zb1JVN1rTHuw31YatKW8xoaVad8SflN9%2Btdr1%2BFEK9ojIlKKrjB5hBaZ93etYnyCM4FeSbaqW6XK4%2B2fuAp%2F5Sfs4StPpva8%2BP%2FVkCgDLMzjZqLqAqCcNmdePFlPsHZr%2F6zvI8NjuJHAYLtABRj0Ox27Lu9EJumHPCy6SeTv4twAKTpU3k7ez4mGK0sDVZvTkEJ2tzCQZg8cd1CVu9TgcT1jFV6EysoP9jSL3xeyqU1IYDpcXMuP7YLejHeT3tDH%2BheISn%2FOtQif76bkQS68oez1cd1Ds7i%2BvEgWc8Dwgpv1NWjOK0LVBFlW9DazF6Rr%2Fkjb45q3CQNZ%2Fso4viQ00zb6Q65nBk6R%2FT8sR1AY4stgAa0suCwZSveoSrwVtq2P8T5pj6MLrcrsQGOqUBr8pOplDi3zQJi5pGxKrJuZX9EkQ6qg6U7DtRrfsPVVw8qfoB8cIe1rICWFN4E%2FBWwiUodafcFUzDNwkUcli6z3tUpRuV8Mnm0mlBPFM0%2F1DlyC7UNqhGlp7pop7otp5lK0XY7U6%2B7MdrrlI6YeV7aKM8%2F6Y87jflqU2iXEOn176FDHfqhmJ0Pgt8kd8go0ZzTpnXckfzUVuFiTqrGDM9mV3U6N0B&X-Amz-Signature=fc9a6db91f41ac86aa61b7795ffa31b95d777de72a2ddc24aa9ca52fc50e42f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVZEANF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDustRlGg7ZPZZcDAdJ1oK2NtDpkfPoR9LvXPxzxfIivgIgYoKKuhkQRdkmXTiT7ihzCNwVGhB7ym6U%2BxWYsSO63E0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtv14PN0br3nDJqNircA%2BqYKIYGWwWDyjilee5C6KDk0nlZUcYLh%2Bn0h0JjZKFIwXuk0ooVUYnJBGH%2BleSVhTmRNfkbxhAm6q3f5UdE4M6y5MY%2BSWin1NXMeoVOt3awkTFmmxFAP%2FbPRmRKiGjZ%2BU1yUrE4CrDtdWJkJDKaLcOGRabtVAyHctm6BTC78PJZb2BzvQo2hUID0lVj8Xx56ozf1n0llLAewuBJxsvFMOr2jBECPdaXr9k2BwO9%2FysOPo6HHuY7iauwQ50e%2B1B%2Fr%2F5fmvRZ1c2GQdrrxZeyinRq2TiCEQuz4OqbuNI7Ys01Q0%2F3TcqeJPoyDsSMhppwRFDC2W%2BeEsKoY3Nemk67Hiynm6fR9ov8g8GBaV3lPVf11qHBZPbihKHnQWtGJE7%2BPnagA1xmUSu5woTUa2MwwrwJTXYjn8biMkW4zNDNcYhJAm0dFOuW0Li18atnDV2zFEoA65nk583jJJTpTKKW%2FZi3OJknlUaqitlbH8zVPuxlrsyn1VC9YQARIsNgcej2sWfRZed%2FceSb8Wzn%2FbT2IAoK7FlvNGGIYnvayJYH5rLfY%2BxHSx1xbeBB9zcB6rLryfFxQnRwhdwJY3UerNFnTYxwyiwuGFrJX%2Btzm6XQl223zEgRTUl8Xmfx5PJEMMjcrsQGOqUB7K4Xa%2BMtabzOu18gKQZ91bHasW6VCettUWR4f7dMSv9%2BiGC%2Fdyk%2Ff%2Bj9zUcK1iBELleC3%2FHadgblCUPnTL0jhvtj%2BMDqPtx7qEu6CimLPwcOBgPXMhUJWshlsfsuGGt1Hvl%2FmHb7pdMXgjNcb58Hq39xtZbMAg1NwYgGU5CL%2Bmh31uYFqvdsITwLES8q18mt%2FHKhM7X5pkGRepFkVBYADhG0M4Md&X-Amz-Signature=3cd17ece85b2d74870db435f7abd74174f9be30134e9a88991ae3b6ecb8ee86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNEOCX2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgwYcmcgbf%2Bdzm9WdygnHE%2F8pMVhetIKvDuuZAeeEsaAiAsO22%2F445uFzGed4ksIZ%2FJugWdcOIoQCB%2B7x013FRMdiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGi497kmeT%2BzGExPBKtwDyNUI37HX2M9xdLCAlVAoIVrrYjN4dVfyXp43oudaRt501aLJinn4gVc2tCsmK4MpBcV0TUZ%2FTgYBbdTo9GMF2JzUcMciadRZqcRbpWlG2gdpCk0jrfhAFRmLARzevurnamCPJ2hUwbJV3BzLsJSGshXWYw0TutcKHh7nMEzP1KhfbF3jqJP9xNrMx1CPdlPcZnSCwlYDxBERD0o9dY9rmCcaxITm1PncmNogjKHP%2BA9NBtBPD2Grt6Stg%2FwkBlGxWpEcMD9zrvLtjlhKbVSsNBE6pxww9wy%2FuaKeMYOpqOY0UN0JR9jH4IDmkkc9hFiXyxxzabpAk6Cqy8aadzHzR9u27qEI9SxcJZpHBA0hDw6GdlRag%2F9AZj040WIeCWsg73Uy0%2FjzzFZJotLcWIO3xgFJnuNInIECkFEV%2Bv%2BHfyqx1oylL8SxIiHDhAtY38n57V8rwS8ufLSl%2FVn%2BJl%2FTKPq5Mpx4wgd5Liewt9V%2BIDJP4lDbC%2BSByqYRlM%2FDCLdSI%2Bs1%2BPnzgIu0LoRje2z667PrjmaxlmX%2FIW3%2FV2NtBUKWT30M2NRLPp3NGfJoiBanZtS6jrH7kBfOKSOJCxxm5GBv9%2BCW46r7ncOeejkuUeqWdICReBT73zI4AyEw%2BNuuxAY6pgHy4UOvHQuMciLoS9MRaN54kl6NiInWk0ffPNg2YIWBF9W3qthkf2mxR%2BeT0m4u%2BRM5UuXZfOlEFxsHJNimMn5TCXlMJpB3pIAS8Hh%2FtrUncKq9TBPvqpbDL8dxURS6U%2Bc%2FMSRF5sic23ybbqdYSYxtuwGjYjC2qipAz%2BFt4jOMxoZuKkKEpRw2bPGCdtLh%2B9cjANKRk%2BWuiRH6E2fD9R2mq6z9t%2BPB&X-Amz-Signature=182d786748fcdd0d6678fe9c649422540db5a56f4ccc12c3ede5ea2f29fe8f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGMYABA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSqHJh0aK5UObHeW2%2FpY%2BdYl4VltqlUezBiPYBW3pJ4wIgJGJ8V8BfGBGFg%2B5HzxXHKchqWeXoNNnfTYdFH9Fv9ggqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0NrsbGVjkfPCMZlSrcA3S%2F9JkejQL0JUWYyqKOsuUIPa3JUVf2V56Pb597hMJNyyagRAs%2FwzgNK%2FqOlBy48kmKotp280PaXel2ejz4%2FxkEgR8YP9jlXsPK7C%2FYdOtNMzIa8%2Fs0Y0f04wVnydtt6tnd4F5o45YjPu0HLF9Z2g%2FhL5o2GOOSc5J%2BxZtoQ22u8mLQ0Bp6BYvolir%2BAwFVFqEuLo6F9Rmj1oQKC6rvE918F6Z7bb4bGHLB18n90IRZlYxToKTmO0zb1JVN1rTHuw31YatKW8xoaVad8SflN9%2Btdr1%2BFEK9ojIlKKrjB5hBaZ93etYnyCM4FeSbaqW6XK4%2B2fuAp%2F5Sfs4StPpva8%2BP%2FVkCgDLMzjZqLqAqCcNmdePFlPsHZr%2F6zvI8NjuJHAYLtABRj0Ox27Lu9EJumHPCy6SeTv4twAKTpU3k7ez4mGK0sDVZvTkEJ2tzCQZg8cd1CVu9TgcT1jFV6EysoP9jSL3xeyqU1IYDpcXMuP7YLejHeT3tDH%2BheISn%2FOtQif76bkQS68oez1cd1Ds7i%2BvEgWc8Dwgpv1NWjOK0LVBFlW9DazF6Rr%2Fkjb45q3CQNZ%2Fso4viQ00zb6Q65nBk6R%2FT8sR1AY4stgAa0suCwZSveoSrwVtq2P8T5pj6MLrcrsQGOqUBr8pOplDi3zQJi5pGxKrJuZX9EkQ6qg6U7DtRrfsPVVw8qfoB8cIe1rICWFN4E%2FBWwiUodafcFUzDNwkUcli6z3tUpRuV8Mnm0mlBPFM0%2F1DlyC7UNqhGlp7pop7otp5lK0XY7U6%2B7MdrrlI6YeV7aKM8%2F6Y87jflqU2iXEOn176FDHfqhmJ0Pgt8kd8go0ZzTpnXckfzUVuFiTqrGDM9mV3U6N0B&X-Amz-Signature=11f8392ac32ecdfea5e141e7e53ade20bd948371f8c92d6f37dcc2a8fd15af00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
