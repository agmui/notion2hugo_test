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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQBCBXB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCGmisXSs6PC%2B4F2Euhts6J%2FT6qmu%2BU%2Fxn041atoC4wIgQKXTGYQDG89tnaw%2FlYC2q20aiTQLsYhQNavQD%2Btu3Mcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBO9xb36OsxabKM68SrcA61p%2Ffs3ycGFBSn4U%2FR65ymnFrCG3oWXNYZliFQjCUx5m8mj4fkQsmRrtKBtrk3nRQkhGL89F0BHtDeWqNLORJ02%2FEu3g9X0QKuWT%2FCn9tT8scnhKlQBNUX1xfYydpLYQPO9XBl8ukXQFO%2B5u66Pyg9HLT8A0CHjF6BJjBmZRjS80ESwFgyXo4gtOVabkpU7SKR1KbXgApoNOPshuXYIZP5eX%2BxleCyARvfQJZ5xtGJm4ncS4AwrkQ0LxB842V8dHxOWKECLeozgJROlT5TgUHB%2Fb4AN9rys4fel2XXr6oaMKlsS7ERk5ZY12bi3ci8ZVAAnCbvYAYmjHDa5RalSwkCVYEnQvPtBfk%2B4efaus3%2FnXhogGx13sgDmw4%2FEcmmmQMuFFGixKHR8VowzESSRrv7AYLNDKv1b6HKgIbLt8fq%2BjF%2FQ9I75Y%2F1%2BM1SRXme40lcd7YTFJGvQvUS16l1td2HGPekcqJY4c5go8RSNM%2F0WsvvPEpO8MNGhiZU0W0FwSag4Fw8q7UaRED%2F6f8atmHEklIoKeXhcCK6MOkCEvanraxKVKu06i%2FVjCOLEQrDDuZ8ytYs3dEqbw5kRCMmTw8%2F0w1PMp8YzmvcdzFYu90k6Cp4wsa76Akc7STA2MOvq88QGOqUBcDN%2BJENgW4mqfTbby43okgvYxTqJoak4ZyTk95v%2BXZ3L4ies3B%2BlHDZLj3kX7KZxHMpYC5g%2F6Qi8tczESGl1XIQCjgJXjIH%2FTcbwHg3eHOWRqkYkpjFIaE6ET%2FjYxFNH%2FEd9is4EOuYlGIF4xyn3qhYDPn6v6EID7lDYUHzicX7kWVWD8hZWW1OLBB3cvGTM0thBVttamP9DXWMWEVOeXexL1eap&X-Amz-Signature=5b2b14e09dd2e405954b27b436d6d77617e80c1e6a67062d3476834ad85704fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQBCBXB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCGmisXSs6PC%2B4F2Euhts6J%2FT6qmu%2BU%2Fxn041atoC4wIgQKXTGYQDG89tnaw%2FlYC2q20aiTQLsYhQNavQD%2Btu3Mcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBO9xb36OsxabKM68SrcA61p%2Ffs3ycGFBSn4U%2FR65ymnFrCG3oWXNYZliFQjCUx5m8mj4fkQsmRrtKBtrk3nRQkhGL89F0BHtDeWqNLORJ02%2FEu3g9X0QKuWT%2FCn9tT8scnhKlQBNUX1xfYydpLYQPO9XBl8ukXQFO%2B5u66Pyg9HLT8A0CHjF6BJjBmZRjS80ESwFgyXo4gtOVabkpU7SKR1KbXgApoNOPshuXYIZP5eX%2BxleCyARvfQJZ5xtGJm4ncS4AwrkQ0LxB842V8dHxOWKECLeozgJROlT5TgUHB%2Fb4AN9rys4fel2XXr6oaMKlsS7ERk5ZY12bi3ci8ZVAAnCbvYAYmjHDa5RalSwkCVYEnQvPtBfk%2B4efaus3%2FnXhogGx13sgDmw4%2FEcmmmQMuFFGixKHR8VowzESSRrv7AYLNDKv1b6HKgIbLt8fq%2BjF%2FQ9I75Y%2F1%2BM1SRXme40lcd7YTFJGvQvUS16l1td2HGPekcqJY4c5go8RSNM%2F0WsvvPEpO8MNGhiZU0W0FwSag4Fw8q7UaRED%2F6f8atmHEklIoKeXhcCK6MOkCEvanraxKVKu06i%2FVjCOLEQrDDuZ8ytYs3dEqbw5kRCMmTw8%2F0w1PMp8YzmvcdzFYu90k6Cp4wsa76Akc7STA2MOvq88QGOqUBcDN%2BJENgW4mqfTbby43okgvYxTqJoak4ZyTk95v%2BXZ3L4ies3B%2BlHDZLj3kX7KZxHMpYC5g%2F6Qi8tczESGl1XIQCjgJXjIH%2FTcbwHg3eHOWRqkYkpjFIaE6ET%2FjYxFNH%2FEd9is4EOuYlGIF4xyn3qhYDPn6v6EID7lDYUHzicX7kWVWD8hZWW1OLBB3cvGTM0thBVttamP9DXWMWEVOeXexL1eap&X-Amz-Signature=349494f42f92624be4d8a0ba654e67307369f3ba0d3bcf78bfbcf91dd4e87b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQBCBXB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCGmisXSs6PC%2B4F2Euhts6J%2FT6qmu%2BU%2Fxn041atoC4wIgQKXTGYQDG89tnaw%2FlYC2q20aiTQLsYhQNavQD%2Btu3Mcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBO9xb36OsxabKM68SrcA61p%2Ffs3ycGFBSn4U%2FR65ymnFrCG3oWXNYZliFQjCUx5m8mj4fkQsmRrtKBtrk3nRQkhGL89F0BHtDeWqNLORJ02%2FEu3g9X0QKuWT%2FCn9tT8scnhKlQBNUX1xfYydpLYQPO9XBl8ukXQFO%2B5u66Pyg9HLT8A0CHjF6BJjBmZRjS80ESwFgyXo4gtOVabkpU7SKR1KbXgApoNOPshuXYIZP5eX%2BxleCyARvfQJZ5xtGJm4ncS4AwrkQ0LxB842V8dHxOWKECLeozgJROlT5TgUHB%2Fb4AN9rys4fel2XXr6oaMKlsS7ERk5ZY12bi3ci8ZVAAnCbvYAYmjHDa5RalSwkCVYEnQvPtBfk%2B4efaus3%2FnXhogGx13sgDmw4%2FEcmmmQMuFFGixKHR8VowzESSRrv7AYLNDKv1b6HKgIbLt8fq%2BjF%2FQ9I75Y%2F1%2BM1SRXme40lcd7YTFJGvQvUS16l1td2HGPekcqJY4c5go8RSNM%2F0WsvvPEpO8MNGhiZU0W0FwSag4Fw8q7UaRED%2F6f8atmHEklIoKeXhcCK6MOkCEvanraxKVKu06i%2FVjCOLEQrDDuZ8ytYs3dEqbw5kRCMmTw8%2F0w1PMp8YzmvcdzFYu90k6Cp4wsa76Akc7STA2MOvq88QGOqUBcDN%2BJENgW4mqfTbby43okgvYxTqJoak4ZyTk95v%2BXZ3L4ies3B%2BlHDZLj3kX7KZxHMpYC5g%2F6Qi8tczESGl1XIQCjgJXjIH%2FTcbwHg3eHOWRqkYkpjFIaE6ET%2FjYxFNH%2FEd9is4EOuYlGIF4xyn3qhYDPn6v6EID7lDYUHzicX7kWVWD8hZWW1OLBB3cvGTM0thBVttamP9DXWMWEVOeXexL1eap&X-Amz-Signature=98780df20628ba7709077720cc8860609e5dd5616fd1495c403dd8bcf36a219c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYF6C4X%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIT20T3abgBEENnHnvMrSYTdQqyQCT04BRwnzp25WnIAiEAhZE48Hap9HZ6lVqjwnggnUveJddWCR31F2KsvkfqyOUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNSLlon5VL%2BwUdZndircA7eXOh7xWr44lHHRgHly%2FCgA49sMUq5HYSsTwG6Mc9Hkpe224K3dSjrgeyDST8dFti4z%2F3rFLKeeg7K%2Bzw0rZ61qmF7ZgGu7re%2FCjo2hIYwc2b%2BrfEMXo8L%2Br7T14SxM1nH0r7i3DBuES4Z2AAK%2B4ssx3X42hgJUPKC80skrKHZopjSkGswoEn%2FjUAVRmTdgkXq32iIlm80BvFw4EjFJNtZhsU0xyvKfjOZ9XoQQxHP3fN1ljCI0acZs6LUajaVdqPG8MizPEp1Q5kH7kZd3SrzgjClwVlVnbHQFhUOXcwjFo%2FvUMkk5oRTKpJwH7CFPy2UilfT8P7OAgW3m6%2BFBDQpyef3%2BMhpRV2pdME3vLWR8Fn2owU5oS3WV2VNj985hdx7Zv7rYdq%2B0qAuBHQHp3WtAkmmdI9THqq2RlDmPDrRyzL53qkYgG7MvyVrSjkS%2BOXxlxNTkL9VIOSRGxBiX%2FJXAZ1WyvFDCaWYZaGUpjLPByhR9nGI28WF1XpQXYsUsxYjU8JVNF1VkB7VKr5TfsFEnslpYGSzClQ8Ilp103ccyrHrsIvOg1Iy4AdW6BavsKc%2BxYyBN2V6819XWHLshcTXx1Wqqvc%2Bd54beAm0R1Aer8xBfQ%2BRw0wn%2FGcdDML7q88QGOqUBZmYx6LCRsgn4wiB3uPMlEAlJAfHsafU6uY77XRi%2FiYj%2BqTyszMfL0ydv15CQ6h2g1Ax12cuQYlpGJFqpYsb0W6rkO5jmg1XLTDAH2Fn4SggiWFh5dcScKVLLb%2FqZ20pNTIfu4K34TjPd8YTraMkGmTu3EoXF4hcxumEWf5gA7NTMCnhGmAh1pb1bwNIgDxQKajl3KPrPKceUU9GTCXgPXTivc4%2Ft&X-Amz-Signature=80825e75a3faca4378cc031cae8db3c8a7726df15513d5864970653c761937bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFEMGVP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENuHK2ZB1ZpNWf6gGlPA1TNErtM%2FfRzdQvzAIQquX3WAiAx4qmRQyCbOES1jve%2FyTSYOz4%2BfgBoIxjyoFbzVCZt9ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMShllbpTGzcnzu5F2KtwDjqlXeoG1oyoj9BgcSCrGuPa3PdsvA3YsCo1HLlHkxkDHgAq%2BAU4VGaw9vJ9ySTycU6sH6LtAZTzTOn32zdUykC7x559EhllDflq5iku1KnPchBja31OItFceVZDqFBsBJ3F97PB4g%2BbxlKa0gCP2nTgFhuMctZbPBAT0s9kIMF0bil2pX8Btzkj5aYXwVC03kuFWj%2BVd1lzR0qOVs6f0hC%2FKRoBE9%2Fw%2BoVc2hUogWBd1ZA9cLlBOtc2gW%2FecLyg2lw%2BVfYI2naBOq308xWy92OGN6nEI8amsvy%2FixVUc8qc2Hq3ypHNTBb8Fh18E8%2BI0htet7Sev6RPGgyywBqAGPffyjc0fjOSYp08HJmx9GL7jIFh3WM71te3ABR9vEIdx9PjgXfvJN5TbHNrhmoAUNAgBHBhiQg0efgJLExkudXG22iLt5AlTCugmcLdDIYCqZT4e012kgxeSnuV%2BoinDQiQn64nOVJjCFlY3ID%2FqN8%2FuANqy3xk5eNeK67hRH9DRp4kYNJycsyBH0gl1Md3F0SyLTfrXvLEJJymGrEFEhUIW0BItztoX%2BCfXbuWGunemWF0PkhwCdK6svnT5fxgn28skE6p4xzgkj50WWLISgxGQi6iIZIAyNL%2BK80owx%2BrzxAY6pgGyH5Ew%2BBRbj7h77rplxyW8Y9Wd%2FBq%2FW4sjRgB7Haptr5PNgsnFMdLvrKdHiWr9WJG6PIMSu9jnvtzGp3QL%2Fbxfbf3X8T8O4smHDqQmjzw3UJjCHzfy%2BoaLsuvWQ%2FDRJ4WelQOBY5lhnuWevUSG892woJxKmeb%2FilNoSLd6PGM10kk9dqyxbxlpyqE11XkOvYQIeo1skjr60Pa1N3iLc4bsVOZO0jDq&X-Amz-Signature=cd334923e99ef2a382a81e3390bc7f65e23c51da54de236e461b3b4959918eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQBCBXB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCGmisXSs6PC%2B4F2Euhts6J%2FT6qmu%2BU%2Fxn041atoC4wIgQKXTGYQDG89tnaw%2FlYC2q20aiTQLsYhQNavQD%2Btu3Mcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBO9xb36OsxabKM68SrcA61p%2Ffs3ycGFBSn4U%2FR65ymnFrCG3oWXNYZliFQjCUx5m8mj4fkQsmRrtKBtrk3nRQkhGL89F0BHtDeWqNLORJ02%2FEu3g9X0QKuWT%2FCn9tT8scnhKlQBNUX1xfYydpLYQPO9XBl8ukXQFO%2B5u66Pyg9HLT8A0CHjF6BJjBmZRjS80ESwFgyXo4gtOVabkpU7SKR1KbXgApoNOPshuXYIZP5eX%2BxleCyARvfQJZ5xtGJm4ncS4AwrkQ0LxB842V8dHxOWKECLeozgJROlT5TgUHB%2Fb4AN9rys4fel2XXr6oaMKlsS7ERk5ZY12bi3ci8ZVAAnCbvYAYmjHDa5RalSwkCVYEnQvPtBfk%2B4efaus3%2FnXhogGx13sgDmw4%2FEcmmmQMuFFGixKHR8VowzESSRrv7AYLNDKv1b6HKgIbLt8fq%2BjF%2FQ9I75Y%2F1%2BM1SRXme40lcd7YTFJGvQvUS16l1td2HGPekcqJY4c5go8RSNM%2F0WsvvPEpO8MNGhiZU0W0FwSag4Fw8q7UaRED%2F6f8atmHEklIoKeXhcCK6MOkCEvanraxKVKu06i%2FVjCOLEQrDDuZ8ytYs3dEqbw5kRCMmTw8%2F0w1PMp8YzmvcdzFYu90k6Cp4wsa76Akc7STA2MOvq88QGOqUBcDN%2BJENgW4mqfTbby43okgvYxTqJoak4ZyTk95v%2BXZ3L4ies3B%2BlHDZLj3kX7KZxHMpYC5g%2F6Qi8tczESGl1XIQCjgJXjIH%2FTcbwHg3eHOWRqkYkpjFIaE6ET%2FjYxFNH%2FEd9is4EOuYlGIF4xyn3qhYDPn6v6EID7lDYUHzicX7kWVWD8hZWW1OLBB3cvGTM0thBVttamP9DXWMWEVOeXexL1eap&X-Amz-Signature=285ad75257c0d6747b1d45b280a98e2b08f75a431785cc16908671da82907575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
