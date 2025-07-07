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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7OTBVR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHcFEZSWzerAjAqV3a6ItoZGXhaDQPeOIXVzZz%2Fa%2BA5QIhALArAH6eaQoo2M8UOCOf6dJpZPV9Pec5Hb%2BfOn9FzaoFKv8DCHMQABoMNjM3NDIzMTgzODA1IgzRC%2F8%2FLANW3EQZnjcq3AOkBZTLMWnwL7oqxoT1h8s%2BktA71tZEk4hgjWM2C5ic7zRF%2Be8DJxIG5Vtl3MtAY5WH4mUj0Qjad1JBNtqRBOvKrYFmrl%2BurEC%2FSq5rWQ85zUd1SDn%2BJ%2FNENbe9gpiv64PE%2FNAnnqH5S5wBaXDlm0YxXrWlNXxE8jwb1W6VGhEAJZ0B%2FHakdfjY7DGY0rqjeOfaeSpkYhbu9yB0JXr4G9rhAOyDvdK4i4A5gMd7AuqlRwlBHnLqZJd1vbPkL75HMyrOkRhOT8ZCnQ4PwV9Btmq23oAOrHEW1h5S6U%2BfsI7RqHzFQXc7UpWifKqoYaDW9xqu3L6Wi2EQ6rnZAQJK9WQ2mAzt02H3XetMzj2aQ3S8R3YrbIk3S49VeHovj6Kj1gMLlheEVSEOfDA4lTwPpg9%2FsQiGEIkNeVdk1%2F62DClKcn138zpgPlNPaK3FFGOxwNslUbxE0gDV5xDct%2BhqiioSTciZRzocvmP43wpMjTfujfjCqisOT60W3b0EepKjcqytolD2715sr9uwjtRVhEO28fnxGj%2BMb8gIke4RXOZ6s0pNevOmH8NEUqWAv4ewvPCyUbRAaENvfW3GVuds4J4ZFL%2FgppMJje7QNqzlrMQEd%2B%2FNF3saluEv4Z6JaTC9t67DBjqkAdncxmdTGHsIThwHhf6Sbz7jYQf3UVM9nVv7FDGShD1Q5ilcofovye1pkEgk1%2FscpDbD3r%2BuUce89NQ8QShoXc4xw9pA38Ie7wSfBiCeLAT1zUO4dDKbXjncqvR%2Fz8mMjLnCW9dMIOHbCxvKwvMgO%2F6mxhPKc95cS1mztQ5xCZUdL2y2XiAGG0hGLHy7u5wc6jYycUSOB7Os6lWEfoDRbBtP8NlD&X-Amz-Signature=9fcb382aa33050621f80cb70b2dd51c05a541231dfd66ce410243ca9326aa0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7OTBVR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHcFEZSWzerAjAqV3a6ItoZGXhaDQPeOIXVzZz%2Fa%2BA5QIhALArAH6eaQoo2M8UOCOf6dJpZPV9Pec5Hb%2BfOn9FzaoFKv8DCHMQABoMNjM3NDIzMTgzODA1IgzRC%2F8%2FLANW3EQZnjcq3AOkBZTLMWnwL7oqxoT1h8s%2BktA71tZEk4hgjWM2C5ic7zRF%2Be8DJxIG5Vtl3MtAY5WH4mUj0Qjad1JBNtqRBOvKrYFmrl%2BurEC%2FSq5rWQ85zUd1SDn%2BJ%2FNENbe9gpiv64PE%2FNAnnqH5S5wBaXDlm0YxXrWlNXxE8jwb1W6VGhEAJZ0B%2FHakdfjY7DGY0rqjeOfaeSpkYhbu9yB0JXr4G9rhAOyDvdK4i4A5gMd7AuqlRwlBHnLqZJd1vbPkL75HMyrOkRhOT8ZCnQ4PwV9Btmq23oAOrHEW1h5S6U%2BfsI7RqHzFQXc7UpWifKqoYaDW9xqu3L6Wi2EQ6rnZAQJK9WQ2mAzt02H3XetMzj2aQ3S8R3YrbIk3S49VeHovj6Kj1gMLlheEVSEOfDA4lTwPpg9%2FsQiGEIkNeVdk1%2F62DClKcn138zpgPlNPaK3FFGOxwNslUbxE0gDV5xDct%2BhqiioSTciZRzocvmP43wpMjTfujfjCqisOT60W3b0EepKjcqytolD2715sr9uwjtRVhEO28fnxGj%2BMb8gIke4RXOZ6s0pNevOmH8NEUqWAv4ewvPCyUbRAaENvfW3GVuds4J4ZFL%2FgppMJje7QNqzlrMQEd%2B%2FNF3saluEv4Z6JaTC9t67DBjqkAdncxmdTGHsIThwHhf6Sbz7jYQf3UVM9nVv7FDGShD1Q5ilcofovye1pkEgk1%2FscpDbD3r%2BuUce89NQ8QShoXc4xw9pA38Ie7wSfBiCeLAT1zUO4dDKbXjncqvR%2Fz8mMjLnCW9dMIOHbCxvKwvMgO%2F6mxhPKc95cS1mztQ5xCZUdL2y2XiAGG0hGLHy7u5wc6jYycUSOB7Os6lWEfoDRbBtP8NlD&X-Amz-Signature=60deb8b0970c38656d27685f664c599ffd55846400a4d5a7ec44cf0f80487acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7OTBVR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHcFEZSWzerAjAqV3a6ItoZGXhaDQPeOIXVzZz%2Fa%2BA5QIhALArAH6eaQoo2M8UOCOf6dJpZPV9Pec5Hb%2BfOn9FzaoFKv8DCHMQABoMNjM3NDIzMTgzODA1IgzRC%2F8%2FLANW3EQZnjcq3AOkBZTLMWnwL7oqxoT1h8s%2BktA71tZEk4hgjWM2C5ic7zRF%2Be8DJxIG5Vtl3MtAY5WH4mUj0Qjad1JBNtqRBOvKrYFmrl%2BurEC%2FSq5rWQ85zUd1SDn%2BJ%2FNENbe9gpiv64PE%2FNAnnqH5S5wBaXDlm0YxXrWlNXxE8jwb1W6VGhEAJZ0B%2FHakdfjY7DGY0rqjeOfaeSpkYhbu9yB0JXr4G9rhAOyDvdK4i4A5gMd7AuqlRwlBHnLqZJd1vbPkL75HMyrOkRhOT8ZCnQ4PwV9Btmq23oAOrHEW1h5S6U%2BfsI7RqHzFQXc7UpWifKqoYaDW9xqu3L6Wi2EQ6rnZAQJK9WQ2mAzt02H3XetMzj2aQ3S8R3YrbIk3S49VeHovj6Kj1gMLlheEVSEOfDA4lTwPpg9%2FsQiGEIkNeVdk1%2F62DClKcn138zpgPlNPaK3FFGOxwNslUbxE0gDV5xDct%2BhqiioSTciZRzocvmP43wpMjTfujfjCqisOT60W3b0EepKjcqytolD2715sr9uwjtRVhEO28fnxGj%2BMb8gIke4RXOZ6s0pNevOmH8NEUqWAv4ewvPCyUbRAaENvfW3GVuds4J4ZFL%2FgppMJje7QNqzlrMQEd%2B%2FNF3saluEv4Z6JaTC9t67DBjqkAdncxmdTGHsIThwHhf6Sbz7jYQf3UVM9nVv7FDGShD1Q5ilcofovye1pkEgk1%2FscpDbD3r%2BuUce89NQ8QShoXc4xw9pA38Ie7wSfBiCeLAT1zUO4dDKbXjncqvR%2Fz8mMjLnCW9dMIOHbCxvKwvMgO%2F6mxhPKc95cS1mztQ5xCZUdL2y2XiAGG0hGLHy7u5wc6jYycUSOB7Os6lWEfoDRbBtP8NlD&X-Amz-Signature=3b423499497e963ae0ff5994e81d24cb3cd9c9265bf419bbab871346356fea68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSF4NXL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOx4JX3odNOhVlA6MCZyGorwEvs3CBVzxnhB9dNj7glAiBVDq%2F0rHb%2Bupi1PEsaHd4fm6PTMyTJuxtS9NN2NFKlsyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM2Sb2cfzLP%2BdisncFKtwDbh9Og1mXpCZqWHiH4VMZoULhD5QcZZmglOKEd2mOLeN1k7q%2F%2F5hwCAYlNvxEO8gI0uzu9cv%2B%2FKqsUGLUWA6kX7mutjQ9uwRVcaF9C%2BJx4Nj%2B2OomehtbPZs1FIB95uTmhLyZgxnQgpwAAs8GgXHDP5B%2BDxWBHGAyTqvZV9zHmfsK%2B5pWa9vmnbtn3HZD1sRqsbUIAwcwwfueQJnwrsjBVwCGdVOz9%2FZP6RCvDObsKsSpjtgrqnx3Xr0bZE919sFODY8iTdjOP3KXavSvKmJSkQxNDxA7ooLH9nM5ETmguh0e9fk4cytteZk1NexbCDDTjaiv1PET44uDcf8GsGybmCvx7QkXlToYkTBfKqhUGV1UYow1GBI8kq22S%2FSD%2B3IanJ9Soueo7H4YSmls68W%2F4G%2FXfsJjUv6o4T1VBt218mdIw0qBC1rjp7ALfrP7oZNFSKwCUyvLga%2Fjmjrua35et%2FCfeJhS2y3ObKhBJVX6x3osis4C0QTPhG6O1T%2FEH1uJQQaheBtjYvOxNf1g661WLCZ2u9JcoGm05jDXMl0mglRnzbaSZbVgosfuAgK9vf1cRa7z7jdN7uu%2F8JSC14Yz20y5f8vAn0nqoPWzYR0f1D8ejU8v3QetR0j%2Bamsw%2FriuwwY6pgHHQy5vWLA8eiuKNlrZNPrB9W5INUcC4XiGwnG7Zfbbq4bt2xUWgYD4NSvakwL8C%2BmoHKCChVJjX8GKypJ4s88D2NGilCTnA9r8JjqtBH4AjoPEaj5NwiJ6UC2j%2FktmTeU%2BFoXhGOT6BOnnFDlXQLrR6Y2lzeG6j%2FTLC%2FxkjLSQUwVsrhaFaIaAjD5pLzQsfU1HLnJhEQyc3LvcFMVFROErmgkDDizA&X-Amz-Signature=93a6659691059f81de62434a1eac658b49490a68f86e05c28a47dda0d1e6f0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5KGUNKN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFsVtfSs2sgJB2x5kAUu7xoQYIXPAaNc%2FgVIIzhfG%2BiiAiADov3pEIGf5s4P2DjW8%2FUmkyM1vDJwzzDNlTukPFeiUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMKvLLq4kNn9Nsd2g5KtwDQMXTtFYHjoyOvLDWHtwPK6P4LTV%2Bv8bMdp2of7AsOS9MqFg3F23bNk%2F3LaaXNDTHthaFb2nhROUSQvRquTQLG9xaYFg2sAe0BETag9%2Fj2iAY8M2cmCk3BCyzkT4t2SQOI5nGQnLjGPcyRM7t3fBr9nvFdXT8LedDyoVtvtksw0cPPSnd5cpLurWLlAWog4r1ZHZ0SfSUoplKvDmoF5CAktvIMLYnJVaPdt%2Bgm9LD2u%2F21I5tocGO50oyQTFLpPEt6TC5sgOxZ3w%2FXGHtELSFz06MS8z1xsKYruQ6d7Dzh39W%2FH6rX0QRvKLXzbSvydlgWR2M%2BlvH63szp1LkgXap8FpujPEfAzFjiBoWOAKMeR2SerKe9gUhGlx%2BH49Wo%2B4eeNpdtp9xCXw6SnAgHzYrIY7KJwE3gGhrEymdeIgLEsuzJ2%2B5NfKfX1VA3wO3m6tr2uCmCi0m51DH4zfXtZcG%2FPcCfzd%2F6x6ngysAAcVmOevOgPk%2FYqulN6zy%2BzUkep0DO3GgRgPY%2BS2znGhlSmBqzHBVRAlvM%2BzMkAwxrtqPGPeKqbtJLIHosGPpiVa3Wp3hg%2Fg%2FcnEilPM3T5U3d2sgewXDAmCm4DbAonh6h%2Fmp1P8KNS0NEfCbQbeUP1Uw2reuwwY6pgG0p4HH7m7hMpslubTDPNBQdzolTf2f4xDfuRPHYmFq4wQZYfIIZoVSuFTNzLUgSx7SH%2FqcrhxmVRfrj5bfXe02c%2BHtmaterCqP58pwVOOhcz7mO9i7vPhBN%2FWRB1y62JlMmz08GBUgnUI8UCQLdcu5VrnRZHZ7o%2FmTyHFrKwLwtXOgrC5aan2GT1HBXgZCGFVp%2F%2BNhb655FygDO4XeKY56xcbhov98&X-Amz-Signature=5b93a9f8a8a536d4572c87122f766eda86a42854848c7b92b291da1414d9835a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7OTBVR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHcFEZSWzerAjAqV3a6ItoZGXhaDQPeOIXVzZz%2Fa%2BA5QIhALArAH6eaQoo2M8UOCOf6dJpZPV9Pec5Hb%2BfOn9FzaoFKv8DCHMQABoMNjM3NDIzMTgzODA1IgzRC%2F8%2FLANW3EQZnjcq3AOkBZTLMWnwL7oqxoT1h8s%2BktA71tZEk4hgjWM2C5ic7zRF%2Be8DJxIG5Vtl3MtAY5WH4mUj0Qjad1JBNtqRBOvKrYFmrl%2BurEC%2FSq5rWQ85zUd1SDn%2BJ%2FNENbe9gpiv64PE%2FNAnnqH5S5wBaXDlm0YxXrWlNXxE8jwb1W6VGhEAJZ0B%2FHakdfjY7DGY0rqjeOfaeSpkYhbu9yB0JXr4G9rhAOyDvdK4i4A5gMd7AuqlRwlBHnLqZJd1vbPkL75HMyrOkRhOT8ZCnQ4PwV9Btmq23oAOrHEW1h5S6U%2BfsI7RqHzFQXc7UpWifKqoYaDW9xqu3L6Wi2EQ6rnZAQJK9WQ2mAzt02H3XetMzj2aQ3S8R3YrbIk3S49VeHovj6Kj1gMLlheEVSEOfDA4lTwPpg9%2FsQiGEIkNeVdk1%2F62DClKcn138zpgPlNPaK3FFGOxwNslUbxE0gDV5xDct%2BhqiioSTciZRzocvmP43wpMjTfujfjCqisOT60W3b0EepKjcqytolD2715sr9uwjtRVhEO28fnxGj%2BMb8gIke4RXOZ6s0pNevOmH8NEUqWAv4ewvPCyUbRAaENvfW3GVuds4J4ZFL%2FgppMJje7QNqzlrMQEd%2B%2FNF3saluEv4Z6JaTC9t67DBjqkAdncxmdTGHsIThwHhf6Sbz7jYQf3UVM9nVv7FDGShD1Q5ilcofovye1pkEgk1%2FscpDbD3r%2BuUce89NQ8QShoXc4xw9pA38Ie7wSfBiCeLAT1zUO4dDKbXjncqvR%2Fz8mMjLnCW9dMIOHbCxvKwvMgO%2F6mxhPKc95cS1mztQ5xCZUdL2y2XiAGG0hGLHy7u5wc6jYycUSOB7Os6lWEfoDRbBtP8NlD&X-Amz-Signature=b72261cbad10fbf42a617c28c6910f26f7046e133c8798eb4c1c3075f9dbfe2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
