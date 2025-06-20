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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CAQFPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRx9Eck3u71mSXVXecmboZJJF5aBzSjiZ2i3drBYjxwIgAvPWelRKCUhizuXTJLpWEME2ctdvlveANUCdtY1wPnUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVymnl8k4K72JoDayrcA2i0ze6DnhrhNZY4b3fMnOrmCH1dpWNkFJbCZejEr78fR2iTdpVNbCu4B94dN4EzBKqblrMmRAdFumAwwLPbl8MQwoArFE2Xlv2xOx6DzVEhpmu3vFupBGfDJKqsabkNc7Il%2FZgyRr2Ijf41KjIL27FjOqltpdfUBtlv3Cd1XVONK0ZCMjr78caccov6N22TslAX%2BcUjDHFR5ptsQcOO%2FpcqBC4pmZIJ0SEG65YMT0OBxsB4KkhKpvsTZwPN1z5SOQVCertYSfi4%2BtqStf5AVSP7pF1SrSabBEJkiSLEY5Yio319u%2Bs%2BjPzg5NWcMefNsXLUO3v5jpT6WcRYt1%2FYH7x2uBQJV6vhv9Gxue2XYHoaYPfCXqBoxj8ra9SpjNs0%2Fhf1MbYfW8FDaVyKHuyuu641fYpB1qq8rdz6guRzbKvsWkn%2BH6SSguvYfMFcgBxPyXq7SXc3MlKn1luKRvOmAkWOpQYCiarDBfi%2Baxb2JJg0QyGd5MtrAqyn5PJBAnTmIEVU3%2B97SIfByPb7xVQtmwVx%2FdtB%2FK%2B6W%2FJOTZsnAzBHppaFWjBzPXbUyv%2FT7ness1zjm46PccNKVYVWiqtYTdt02AbJTPGklEeUCILYIoSOsFYjPAOXPphGWs4bMKCz1sIGOqUBKa8DflFPI89Lgi9ishjSg43ingeJiEok4z8UUlcDJRjCROvCz4%2FujVu7fqOVK0pZKkNSvieaYCzI4%2Fe2oT8XntHac3QkMCkea8B1%2Fmuz5odbjDYy%2BbQOwC5CkrTkfHxs2PiGSehzipxFsIOBuqYKI7K4MzwSeWVqfmEbLjmB4TeV%2FOUawiPLxIlxKS%2FKVD6EdLBevQXMXkIGmEsqsVkWaKE%2FT3sG&X-Amz-Signature=c752aac2cd3fc3496f4d8b2085a69c73e35d46680fdfc0401d1736b0aa9d2f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CAQFPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRx9Eck3u71mSXVXecmboZJJF5aBzSjiZ2i3drBYjxwIgAvPWelRKCUhizuXTJLpWEME2ctdvlveANUCdtY1wPnUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVymnl8k4K72JoDayrcA2i0ze6DnhrhNZY4b3fMnOrmCH1dpWNkFJbCZejEr78fR2iTdpVNbCu4B94dN4EzBKqblrMmRAdFumAwwLPbl8MQwoArFE2Xlv2xOx6DzVEhpmu3vFupBGfDJKqsabkNc7Il%2FZgyRr2Ijf41KjIL27FjOqltpdfUBtlv3Cd1XVONK0ZCMjr78caccov6N22TslAX%2BcUjDHFR5ptsQcOO%2FpcqBC4pmZIJ0SEG65YMT0OBxsB4KkhKpvsTZwPN1z5SOQVCertYSfi4%2BtqStf5AVSP7pF1SrSabBEJkiSLEY5Yio319u%2Bs%2BjPzg5NWcMefNsXLUO3v5jpT6WcRYt1%2FYH7x2uBQJV6vhv9Gxue2XYHoaYPfCXqBoxj8ra9SpjNs0%2Fhf1MbYfW8FDaVyKHuyuu641fYpB1qq8rdz6guRzbKvsWkn%2BH6SSguvYfMFcgBxPyXq7SXc3MlKn1luKRvOmAkWOpQYCiarDBfi%2Baxb2JJg0QyGd5MtrAqyn5PJBAnTmIEVU3%2B97SIfByPb7xVQtmwVx%2FdtB%2FK%2B6W%2FJOTZsnAzBHppaFWjBzPXbUyv%2FT7ness1zjm46PccNKVYVWiqtYTdt02AbJTPGklEeUCILYIoSOsFYjPAOXPphGWs4bMKCz1sIGOqUBKa8DflFPI89Lgi9ishjSg43ingeJiEok4z8UUlcDJRjCROvCz4%2FujVu7fqOVK0pZKkNSvieaYCzI4%2Fe2oT8XntHac3QkMCkea8B1%2Fmuz5odbjDYy%2BbQOwC5CkrTkfHxs2PiGSehzipxFsIOBuqYKI7K4MzwSeWVqfmEbLjmB4TeV%2FOUawiPLxIlxKS%2FKVD6EdLBevQXMXkIGmEsqsVkWaKE%2FT3sG&X-Amz-Signature=4cd798aef9c819f79ab87fa7ea61f42623d99eaae607131488aa2bc7cc9d28c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CAQFPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRx9Eck3u71mSXVXecmboZJJF5aBzSjiZ2i3drBYjxwIgAvPWelRKCUhizuXTJLpWEME2ctdvlveANUCdtY1wPnUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVymnl8k4K72JoDayrcA2i0ze6DnhrhNZY4b3fMnOrmCH1dpWNkFJbCZejEr78fR2iTdpVNbCu4B94dN4EzBKqblrMmRAdFumAwwLPbl8MQwoArFE2Xlv2xOx6DzVEhpmu3vFupBGfDJKqsabkNc7Il%2FZgyRr2Ijf41KjIL27FjOqltpdfUBtlv3Cd1XVONK0ZCMjr78caccov6N22TslAX%2BcUjDHFR5ptsQcOO%2FpcqBC4pmZIJ0SEG65YMT0OBxsB4KkhKpvsTZwPN1z5SOQVCertYSfi4%2BtqStf5AVSP7pF1SrSabBEJkiSLEY5Yio319u%2Bs%2BjPzg5NWcMefNsXLUO3v5jpT6WcRYt1%2FYH7x2uBQJV6vhv9Gxue2XYHoaYPfCXqBoxj8ra9SpjNs0%2Fhf1MbYfW8FDaVyKHuyuu641fYpB1qq8rdz6guRzbKvsWkn%2BH6SSguvYfMFcgBxPyXq7SXc3MlKn1luKRvOmAkWOpQYCiarDBfi%2Baxb2JJg0QyGd5MtrAqyn5PJBAnTmIEVU3%2B97SIfByPb7xVQtmwVx%2FdtB%2FK%2B6W%2FJOTZsnAzBHppaFWjBzPXbUyv%2FT7ness1zjm46PccNKVYVWiqtYTdt02AbJTPGklEeUCILYIoSOsFYjPAOXPphGWs4bMKCz1sIGOqUBKa8DflFPI89Lgi9ishjSg43ingeJiEok4z8UUlcDJRjCROvCz4%2FujVu7fqOVK0pZKkNSvieaYCzI4%2Fe2oT8XntHac3QkMCkea8B1%2Fmuz5odbjDYy%2BbQOwC5CkrTkfHxs2PiGSehzipxFsIOBuqYKI7K4MzwSeWVqfmEbLjmB4TeV%2FOUawiPLxIlxKS%2FKVD6EdLBevQXMXkIGmEsqsVkWaKE%2FT3sG&X-Amz-Signature=97a7de5ea3338264bfd4becb2d44302e5fc82ccfdcddc87763feba807a7c1ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNME7KY6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdP%2FjId%2FqFNoORGm98FmbEfupBbUJ1k7jfgfyOg5CekAIhAN37mVsM0YYoseVQ9WDjP0pITkwnjj9G6IfuxxRO5%2FWKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbphXLvASH1uB79Ksq3ANBigsCiGvr02pN0TDK7bz1DZib0h2J3O0kfDyvmKJb8HQbdh8tPWOWz3fI7%2Bim7voSC1ji3NDC4Uj8Nq7EK%2FW59CTagh42mOHpbMf41f9bapX4zbnpGEZ6snjjLE%2BimkwJu%2BrgInwE5Pf3cIqondU0mhsRs5jCmThRQhSbREFz5OGyyuYSgne0HT0lB%2BgkBXLG%2BEZ6R6qOQNqYGW44MRDFPMf6PTpawFPUCK6eyGm0bu%2BeFqzmZW1tNhpMZW1T5TCaEnwIrNyDLL11MxEgSiFGY0cTeS5zU%2Fn%2B5nWjtPtfYTaYCfkYyMleE7%2FGCAfvJkW9l1tRUgwhvw0SpBDlXRqEFoF2ehgL5JVLNFlF%2BdANpFEPCUy2o4Szo9qhQZRvkiteGdwzpfu%2F23BaAwk%2BeMgoN2e%2BKTGz10XlvYMlPU9FTN%2FJIMceLUMGf7dfjoUvraLLaIId7xcohi66qA6RvL%2BqlTAeh4WICfe9oBi35zkj4bgPFjjzTQwbOW%2BM16C8iDVXsGRJ4jxZfvUT2XuWNXmAsHl9ivcd7tWpvqSl5vGU9%2BKguXiUMrtzj4URyuEI2gQj0CoUN8AvNITKXk2TGYf8CBgFF0OuM%2Fh0DoQM%2FyKiLnj5pLlwcG82wfpwRzDLstbCBjqkAV4wIIP8dEa7hptVINWLGJNjosEf665sJizKoncr3IBs4ajxseqAG0bjwOu9gUJEA6imL5xVU0%2BzpgBM4LCKVUz7Bxt5hPZER31C2nxDIofQVgg0q8ZaTj4OrZmKMzBiJUmlQN0JxEeToqSvEGt4jpvIcGlCbsMZyGONryk5BY%2FlH9zxizHhNfV4KMTNAotnmygzz2revBr1%2FCj06Kf8b4uV5IlF&X-Amz-Signature=6cb551762ea107551cd7d8aab21ec540723d06a300105973474c3ff41d646681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCM5XSH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVW8vs7cRlyIIrZzsB2AZ8nvd8rF9VXPjowUq7CX5JZgIgN9VSdjxlvJ8qik3sdprZq2De42H2BXlRkuRXIifnOygqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr0zIkPWa4JkzSbdircAz6gK%2FV7VP7kJHuYv8NW8b8QRQGiY6RJJhWruNCS2rmLWL30zc11OrXPbfR5rDlExADMkdbaQzaWsXyGYA7Zf9E2bjVa25u0SliXQdAUamTgnAsXVr%2B9GUNYgcnRTV%2FKqobCDdBpBPi641NqrjZ5rcwR%2Fa7KP0Uwf6rFj6J2vUw7rk05Frw04LqWomsrAp2uqj5OzVHmoz5D1QmfJr4CqWXpSulJpL2%2BTeHZmeuVYsvF%2B5NsV4YBYSKVgieOYbg8xElz%2BIW%2F8kf2R%2FtsNd1wR41uTqOp2mzPh8kO%2FDkKvoaC7XpVSk%2Fg1W%2BPKttccNq0rGVcz1UZIT%2FgpXkBvkjj%2FI03vOkMBd1lzNcF7kfMB9INwXJshyOz40CF9axZr%2BDrnxutr0hf1EPXkbhxDzyMOiSc6%2BR6EgiSA2mvERkxhnmidDHyE0BtmLktKJB8iFyUFH7yi1dannCDuWnnNofrtaQDrpUS2eSNnc01AD8Qaf2X%2BODnPIaZfQJGUcM0SHjxtm%2BRmaPMehmJ%2FuvndPfQFJipSLV8a405NuTwacHglyING3GBuBvEKimYNv3b45mvt5wLdqFzOiRWD5nL8kAoSE5C7J17U9c1K9jZad%2FC4bywHGy2qoyvtxdpL2UgMJ2y1sIGOqUBBZo9zanoerOmvWgAwshbP8olSfs3nRy11IuMQ3pKCzixmWJ3PLJoILyNt0CQKPgRUZv%2ByMSk0ohFKhTZwuPfG8g3jWJA2AANmAR%2F2gniAiTcUahL8kkf4FAbrWrmXt%2FmW863jLCA8ABp6Z32u8uGnebE1dPFGxbmYKfbl5IMMMV%2BezPAam9VdeqszSylk%2F0eB5BLuzUx9E6odsCOlohNjkkT0JEL&X-Amz-Signature=ed6110361eb0254b929430c30cde706c41eaceaa1303b9d0e093003aa6f0573f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CAQFPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRx9Eck3u71mSXVXecmboZJJF5aBzSjiZ2i3drBYjxwIgAvPWelRKCUhizuXTJLpWEME2ctdvlveANUCdtY1wPnUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVymnl8k4K72JoDayrcA2i0ze6DnhrhNZY4b3fMnOrmCH1dpWNkFJbCZejEr78fR2iTdpVNbCu4B94dN4EzBKqblrMmRAdFumAwwLPbl8MQwoArFE2Xlv2xOx6DzVEhpmu3vFupBGfDJKqsabkNc7Il%2FZgyRr2Ijf41KjIL27FjOqltpdfUBtlv3Cd1XVONK0ZCMjr78caccov6N22TslAX%2BcUjDHFR5ptsQcOO%2FpcqBC4pmZIJ0SEG65YMT0OBxsB4KkhKpvsTZwPN1z5SOQVCertYSfi4%2BtqStf5AVSP7pF1SrSabBEJkiSLEY5Yio319u%2Bs%2BjPzg5NWcMefNsXLUO3v5jpT6WcRYt1%2FYH7x2uBQJV6vhv9Gxue2XYHoaYPfCXqBoxj8ra9SpjNs0%2Fhf1MbYfW8FDaVyKHuyuu641fYpB1qq8rdz6guRzbKvsWkn%2BH6SSguvYfMFcgBxPyXq7SXc3MlKn1luKRvOmAkWOpQYCiarDBfi%2Baxb2JJg0QyGd5MtrAqyn5PJBAnTmIEVU3%2B97SIfByPb7xVQtmwVx%2FdtB%2FK%2B6W%2FJOTZsnAzBHppaFWjBzPXbUyv%2FT7ness1zjm46PccNKVYVWiqtYTdt02AbJTPGklEeUCILYIoSOsFYjPAOXPphGWs4bMKCz1sIGOqUBKa8DflFPI89Lgi9ishjSg43ingeJiEok4z8UUlcDJRjCROvCz4%2FujVu7fqOVK0pZKkNSvieaYCzI4%2Fe2oT8XntHac3QkMCkea8B1%2Fmuz5odbjDYy%2BbQOwC5CkrTkfHxs2PiGSehzipxFsIOBuqYKI7K4MzwSeWVqfmEbLjmB4TeV%2FOUawiPLxIlxKS%2FKVD6EdLBevQXMXkIGmEsqsVkWaKE%2FT3sG&X-Amz-Signature=2eb7af58807ad61ceca013fcff576f5b37ea7f8de77f19d3c6084598bf500d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
