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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFEBIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYUBwt7RR6uC%2Fhyx1jmgQA5YJVA6Ju7WEf0rhRXhICNAiA3Lr0m7ViMkko%2B%2BddfmYKOH9StdEt2DnfW3fB8YjO3gCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoHph6TgbwYRLrzHKtwD5FOaCISc3OH%2Bte4MVuDjKOkX0S3nNQmvet9yzq8maI9jPelLvcZIPLhcJ0DUN8yzute07qpzE%2BoHSNjSG%2BUDHkdIKxp8%2FFxIb7Wz75pGMTj9ZU6fHl9lyUO2AhvMXInghqr0hYFJLfDxgvanwtXiy%2BncnbUnuiupJJktyoX2IPCfwuKv6QCd6JEkTOzSgT3nFMKl5WBWfr2oQsqFtftKm2KWf6aHVaIq6KqZC25Qf1U0Q5jSoHDAhkcYxZ2Rx8RN6gB%2BGx%2BjNfsMJFVF1DsFtzpmwhSbBvt9HKIKCV0o9Yj99ZMgu8nnjJCRrOHZoyFru4J3ayOoDmsACKqI2ws56oUKWDoJBVg4SXA8%2F57CIft928yY7ap5zErgECdM%2FV%2FXqOa6A%2Fm1I3NSo0pTfssgdjFsRBhKTvkQCdjyhWtANz%2B0rxByT7HV2HEB9XwfdSLUIf3P%2FYttMiU4bAmSYEWlI50rjlxyQ2z3OCgsq8U56Pgg4NVqiAwi8OsvpyBwM1QhL15UwKHm9G0%2BGE%2BhuUJzPX257j3m5Cjp0j%2FDuRTrrKBXkTP9%2Bx6hQ5QjCoiiaQ6ALnZ%2FJQXi3i75w1ryNlMnRQQ3B%2BgxdHBtJFzUyhGPpiPaKTfZOg3fWeA4N7cwsLuUwwY6pgH6M4Mdlx%2Bw%2FX50cILJ9Yscw%2FwlVyH88QEOJASubIDnYp8qivGCNEDWjzkM1UXmUhdwc0nh3p7OoxmT47dCEJdEBjU3w2%2B9Yy2ByDUVrEER50xxIV8cUs%2FNzV1l%2F0aQan384F8v5CAoIA%2Fl9bjPTbaAQkWTvjMtAiFtkZFm1xk08fXhA55M39IVw87ueheaDC%2Bpiy%2FNZYllFDSHPHryVb2L3A0l6ghp&X-Amz-Signature=f51e75a900cb20600ffcfea8bd4d8e901592b92ce0e5d460cd1742a3ed0c08b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFEBIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYUBwt7RR6uC%2Fhyx1jmgQA5YJVA6Ju7WEf0rhRXhICNAiA3Lr0m7ViMkko%2B%2BddfmYKOH9StdEt2DnfW3fB8YjO3gCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoHph6TgbwYRLrzHKtwD5FOaCISc3OH%2Bte4MVuDjKOkX0S3nNQmvet9yzq8maI9jPelLvcZIPLhcJ0DUN8yzute07qpzE%2BoHSNjSG%2BUDHkdIKxp8%2FFxIb7Wz75pGMTj9ZU6fHl9lyUO2AhvMXInghqr0hYFJLfDxgvanwtXiy%2BncnbUnuiupJJktyoX2IPCfwuKv6QCd6JEkTOzSgT3nFMKl5WBWfr2oQsqFtftKm2KWf6aHVaIq6KqZC25Qf1U0Q5jSoHDAhkcYxZ2Rx8RN6gB%2BGx%2BjNfsMJFVF1DsFtzpmwhSbBvt9HKIKCV0o9Yj99ZMgu8nnjJCRrOHZoyFru4J3ayOoDmsACKqI2ws56oUKWDoJBVg4SXA8%2F57CIft928yY7ap5zErgECdM%2FV%2FXqOa6A%2Fm1I3NSo0pTfssgdjFsRBhKTvkQCdjyhWtANz%2B0rxByT7HV2HEB9XwfdSLUIf3P%2FYttMiU4bAmSYEWlI50rjlxyQ2z3OCgsq8U56Pgg4NVqiAwi8OsvpyBwM1QhL15UwKHm9G0%2BGE%2BhuUJzPX257j3m5Cjp0j%2FDuRTrrKBXkTP9%2Bx6hQ5QjCoiiaQ6ALnZ%2FJQXi3i75w1ryNlMnRQQ3B%2BgxdHBtJFzUyhGPpiPaKTfZOg3fWeA4N7cwsLuUwwY6pgH6M4Mdlx%2Bw%2FX50cILJ9Yscw%2FwlVyH88QEOJASubIDnYp8qivGCNEDWjzkM1UXmUhdwc0nh3p7OoxmT47dCEJdEBjU3w2%2B9Yy2ByDUVrEER50xxIV8cUs%2FNzV1l%2F0aQan384F8v5CAoIA%2Fl9bjPTbaAQkWTvjMtAiFtkZFm1xk08fXhA55M39IVw87ueheaDC%2Bpiy%2FNZYllFDSHPHryVb2L3A0l6ghp&X-Amz-Signature=d39ec82d2515269f4b21390c2a736864aaf66f10a52cea33a8d374f7314b8d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFEBIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYUBwt7RR6uC%2Fhyx1jmgQA5YJVA6Ju7WEf0rhRXhICNAiA3Lr0m7ViMkko%2B%2BddfmYKOH9StdEt2DnfW3fB8YjO3gCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoHph6TgbwYRLrzHKtwD5FOaCISc3OH%2Bte4MVuDjKOkX0S3nNQmvet9yzq8maI9jPelLvcZIPLhcJ0DUN8yzute07qpzE%2BoHSNjSG%2BUDHkdIKxp8%2FFxIb7Wz75pGMTj9ZU6fHl9lyUO2AhvMXInghqr0hYFJLfDxgvanwtXiy%2BncnbUnuiupJJktyoX2IPCfwuKv6QCd6JEkTOzSgT3nFMKl5WBWfr2oQsqFtftKm2KWf6aHVaIq6KqZC25Qf1U0Q5jSoHDAhkcYxZ2Rx8RN6gB%2BGx%2BjNfsMJFVF1DsFtzpmwhSbBvt9HKIKCV0o9Yj99ZMgu8nnjJCRrOHZoyFru4J3ayOoDmsACKqI2ws56oUKWDoJBVg4SXA8%2F57CIft928yY7ap5zErgECdM%2FV%2FXqOa6A%2Fm1I3NSo0pTfssgdjFsRBhKTvkQCdjyhWtANz%2B0rxByT7HV2HEB9XwfdSLUIf3P%2FYttMiU4bAmSYEWlI50rjlxyQ2z3OCgsq8U56Pgg4NVqiAwi8OsvpyBwM1QhL15UwKHm9G0%2BGE%2BhuUJzPX257j3m5Cjp0j%2FDuRTrrKBXkTP9%2Bx6hQ5QjCoiiaQ6ALnZ%2FJQXi3i75w1ryNlMnRQQ3B%2BgxdHBtJFzUyhGPpiPaKTfZOg3fWeA4N7cwsLuUwwY6pgH6M4Mdlx%2Bw%2FX50cILJ9Yscw%2FwlVyH88QEOJASubIDnYp8qivGCNEDWjzkM1UXmUhdwc0nh3p7OoxmT47dCEJdEBjU3w2%2B9Yy2ByDUVrEER50xxIV8cUs%2FNzV1l%2F0aQan384F8v5CAoIA%2Fl9bjPTbaAQkWTvjMtAiFtkZFm1xk08fXhA55M39IVw87ueheaDC%2Bpiy%2FNZYllFDSHPHryVb2L3A0l6ghp&X-Amz-Signature=fca64808bcf67fe8da8ce9d1a3219d49b512a108f78652868d253c586b327a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHF526F%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkJAm9x2B6oIHIpixi8okkHAK2RdSRfo%2BqV%2BcwFCmQ%2BAiBVVMbm4oUBQLHikRajDL6uWyUJahDJwjF58U87kGOjUCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCSMyJnySwOM8wI8KtwDkZQ1Cd75HUiCyqqg%2B1R7fQETfVR%2Fv2vYhxR3WvyOJDoTt2I8Fof1CZOPt84X8CCIbuZXenvvc1kRY8WBxz83NuWrcxLeh2zDvmVdw1lVUmdRcns2yGBjOHBIOe1eAI7qvbW8njc8RFIS12xHinxkNTA%2Fn%2FxhZ6%2F%2FjGGVIVAJyye51PoSXbWTF83DrXchZ0irfPJYUYLiZs%2FNE7iiNRbXSfgscP7IDEq8tVlfmRYlmulNAsBePmz57Szlk80b424QN7i0xkTRFMyJVlRu3VWgHkKoWD7tNUCfScXsyJlnNit7B4G0XlDydBHPQmopFjRuBqsquMGwdA6sK7f5sMqs4MS8LvR1BHNsVQ6Zaar2Il0QZIn65dyVurYbuLv5hzxqq1wsMwRUHlcMvQ50xcT4zLKcxGLZZCfvvqqhAcE%2F7kGaVO%2F2%2BJv87e557v1L5XeOq2jU4OtErM3DXVfP%2BwQkCwJMBt6x%2FNpQfeOV5yZhaX9JjdeBSar2RtSBI7jLAqCKYCnC2AeDAx1%2B3Sdu%2B%2BXlgmhtA2vDdhnxdH5V2i%2BKeerpt6DZmi7i1vlPaRmCOZyvzYMDAWwu352WNZjMK83CY5RaHEyD%2F9hMb6ICjHE8qJO6V8w9ste1gWAhh5Uwr7uUwwY6pgEVz%2FIH4ItNU%2FQxfVuq8dta6UK72fGkAkdXp81%2FhTxi3B%2BQhz5LZA2ehRpfKJDb0kp06RsTYWzwb4GEGFfMpiHagPgQUt9xgfBtDTaxfufeGRE%2FtsfC961lnoHzEKhQ39HPDsd0itM1JZeKO%2BwmIjHUKPvDlFm78%2FJiL1jssnw23tFNWw%2F7cH%2F1di%2FwoZpO4%2FP7BREIvNIfZcXp8%2FlOu3ai0T%2BcBKQt&X-Amz-Signature=4610456f61f7873f9512887c9c7141a206d916099bebc3754d550e3eaebe75a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UET5WM7%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCelCBwhIBDeD6YOcudmxHVec8k6fUGtthyn1IRaLkQbwIhAL2UzSZWlBeiF%2F%2BUECwtnpkuDbE0H9rXl8Pq3kGhn4XKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEa73cjlgGRtHYXqkq3AOuQPSmlWWC8Z1S22BW6LtkV0ycjlsurFSMz2ktCltfw%2BktzE3UVSxyzhN3lWvHg2jUgYvcDN%2BAHNH7hxtJy4qgE%2F%2BbwQ6Gv3DO8R4uWKwktUlYcjyV%2BsAVu%2Fso5v69sbfJ71ZMjXmYr%2Bt3HNMMqGkzgpU6VVv8rIzLgYG0z8%2FskQwnWHOgDKblaW8XdfrY4ebKUlaAAaH%2Bl0ruVOh2eiQR4LIqsFz684cWE%2FplPlTCFv%2BkZ1K%2FkPLhv0cblXottjc3rsct5HPAFKXfZdVZ7kkoAYarxwbTp2x5hg3xgUV1Ue1Jpd7CWiKIHy%2Blg7Ek6mm5FCjXFkwlNGSCcNZyNrqUoNlpAuYXhE4815eZD3Mcf8G5KA92Y6kObsszc9fE5SuXoEnGpruWGTHfJuA6KL5pduSY0LmIwu3D8uHOy2mWk7FK9CXk2Vb7m9rFSaxbbzvgMRqpewoD9CiKFAzNnES54JUBGSq35CLhWNAlZVjfxptQ7ou6A2OJxa0NqPMgb2HbrcFy%2FR0hjKEozWOEDGqIQko393ZC%2BOLtVQ%2FEQE3UP1fX7oPcTJ%2Bed8f%2BKMHC6HmGlTkCv2S5DPjinJ3txx3jdFR2ZRf6lPGEdRZF7%2FX8uhKllUlQGMJ51pDq8DCku5TDBjqkAeTTdJ9wM%2BfPeCuAozkSC1Pk9N79TxD7ujVhxj0bjVBdAElVlPPW1kA7O13AtUZPwF9bK4pSBkxFOUohfv87%2F7HGhN6QenBkbKU5mH0lGRc8N5j5XysWZoSwlNMvJuNJTBqDCVgekdrB8GvsE53MabFpGKkgpBC6GG%2BwLjfcyQI5bdlMzM1TScR5yjLR%2FLWnomYedRoSJYROoNXmqJS3kEfS%2BzOb&X-Amz-Signature=69d3dc764861fdf804f32b6cc7ea391ac01bbb8688b19d205f43b92daf9319ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFEBIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYUBwt7RR6uC%2Fhyx1jmgQA5YJVA6Ju7WEf0rhRXhICNAiA3Lr0m7ViMkko%2B%2BddfmYKOH9StdEt2DnfW3fB8YjO3gCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoHph6TgbwYRLrzHKtwD5FOaCISc3OH%2Bte4MVuDjKOkX0S3nNQmvet9yzq8maI9jPelLvcZIPLhcJ0DUN8yzute07qpzE%2BoHSNjSG%2BUDHkdIKxp8%2FFxIb7Wz75pGMTj9ZU6fHl9lyUO2AhvMXInghqr0hYFJLfDxgvanwtXiy%2BncnbUnuiupJJktyoX2IPCfwuKv6QCd6JEkTOzSgT3nFMKl5WBWfr2oQsqFtftKm2KWf6aHVaIq6KqZC25Qf1U0Q5jSoHDAhkcYxZ2Rx8RN6gB%2BGx%2BjNfsMJFVF1DsFtzpmwhSbBvt9HKIKCV0o9Yj99ZMgu8nnjJCRrOHZoyFru4J3ayOoDmsACKqI2ws56oUKWDoJBVg4SXA8%2F57CIft928yY7ap5zErgECdM%2FV%2FXqOa6A%2Fm1I3NSo0pTfssgdjFsRBhKTvkQCdjyhWtANz%2B0rxByT7HV2HEB9XwfdSLUIf3P%2FYttMiU4bAmSYEWlI50rjlxyQ2z3OCgsq8U56Pgg4NVqiAwi8OsvpyBwM1QhL15UwKHm9G0%2BGE%2BhuUJzPX257j3m5Cjp0j%2FDuRTrrKBXkTP9%2Bx6hQ5QjCoiiaQ6ALnZ%2FJQXi3i75w1ryNlMnRQQ3B%2BgxdHBtJFzUyhGPpiPaKTfZOg3fWeA4N7cwsLuUwwY6pgH6M4Mdlx%2Bw%2FX50cILJ9Yscw%2FwlVyH88QEOJASubIDnYp8qivGCNEDWjzkM1UXmUhdwc0nh3p7OoxmT47dCEJdEBjU3w2%2B9Yy2ByDUVrEER50xxIV8cUs%2FNzV1l%2F0aQan384F8v5CAoIA%2Fl9bjPTbaAQkWTvjMtAiFtkZFm1xk08fXhA55M39IVw87ueheaDC%2Bpiy%2FNZYllFDSHPHryVb2L3A0l6ghp&X-Amz-Signature=1ac53ba1cbf3c13a056ef872da15e907466fab4c38805db52159b78bb37105f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
