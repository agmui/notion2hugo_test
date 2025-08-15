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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ABZ7DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDG1%2BqLcHxdVnNpR2kbvSpTaeJjy0qh6D9tv2%2F0qOi6DAiEA5KRh10m1pqee2fakoNTN2H2k6gPIBGt69LSDOp60faYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKTiviAyl6Hl1UHDkircAxVt0xQjcdFu2xV%2BCM2Inmkd0b1n9NyN7LwY8%2Fb09Dzqw242JSJRwIk30mJJr7lTYGynrNkILUrSr%2FwWnoHCkRBBhkNY74a2RREGiXtLWrVzJQZtZPIKNoCz0ayExQAiLUxG2nfQnOo7lC%2BVOZW5aa080AKDHExl%2FZwX7X%2FIFdExyi5vwOrVCGTE02dgTcI%2BLyRsf8mPkYi6q1UUG5%2FLivbyBmU3GQEXYaQj45gDiqb4Y1Uqb4Cj9nuIqMlGP%2FC%2FTio2pZmaIgtnyH7EloLnVok94NFZ9d7t0oU%2FIkQGHD83Rc6vU9BTTfW5xuxOq4waHNZJq%2Bw55RFdU09N3MGwZPcqVwZYN0QlRegrB6y4kMfsvIire9aToOLjtG3iJzuS32O3n86mg4Rgo3uzMGVHpSAcMrvD2rOOptLiRE%2BPBo9DkM1E4JjkPTdtsfeeqQ6j9%2B5mz6cKAjbjUQPQ6gDHNnxHjogVX8izLQabZVnZW3UbEwapE%2F8rM7bsDscl%2B7iPkvlUIaeEMlh1Ye2n8QYr%2B4t3fNJvlS9r1QT8MBtYZtZnm0qHXd%2BgncmRcKRslSFsOg%2FpdL9NL96cT3iTSXAbAseV2nOv20wioC4R8LobdmalYLXvPRisV1x0Z994MPO3%2FMQGOqUBvipLwFvVYLYWu5kQ%2B%2BuCeirH%2BOqloYBQloOwjZkGTC%2FVt6C7ZFwin%2FlyE7mKjmm7YfDMKZir%2Fi16rsHmyWWU6p4XCAnxYMFFwbOiFoUdFFF4gXP2tFhnzFI%2FOSf29WyPBxyH8cEV7kV%2BEuOEjd34GSTTpI3JdYQIZK9MLYAPTEy9uLbFtoqLkEsbWRtp4YcCfx5cqrUXCw8OxFprMyJiDfdueHNe&X-Amz-Signature=c6e98e489fe4707a109c3daf1bd0149dfba7e684cdf02bf09d285f07743eb54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ABZ7DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDG1%2BqLcHxdVnNpR2kbvSpTaeJjy0qh6D9tv2%2F0qOi6DAiEA5KRh10m1pqee2fakoNTN2H2k6gPIBGt69LSDOp60faYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKTiviAyl6Hl1UHDkircAxVt0xQjcdFu2xV%2BCM2Inmkd0b1n9NyN7LwY8%2Fb09Dzqw242JSJRwIk30mJJr7lTYGynrNkILUrSr%2FwWnoHCkRBBhkNY74a2RREGiXtLWrVzJQZtZPIKNoCz0ayExQAiLUxG2nfQnOo7lC%2BVOZW5aa080AKDHExl%2FZwX7X%2FIFdExyi5vwOrVCGTE02dgTcI%2BLyRsf8mPkYi6q1UUG5%2FLivbyBmU3GQEXYaQj45gDiqb4Y1Uqb4Cj9nuIqMlGP%2FC%2FTio2pZmaIgtnyH7EloLnVok94NFZ9d7t0oU%2FIkQGHD83Rc6vU9BTTfW5xuxOq4waHNZJq%2Bw55RFdU09N3MGwZPcqVwZYN0QlRegrB6y4kMfsvIire9aToOLjtG3iJzuS32O3n86mg4Rgo3uzMGVHpSAcMrvD2rOOptLiRE%2BPBo9DkM1E4JjkPTdtsfeeqQ6j9%2B5mz6cKAjbjUQPQ6gDHNnxHjogVX8izLQabZVnZW3UbEwapE%2F8rM7bsDscl%2B7iPkvlUIaeEMlh1Ye2n8QYr%2B4t3fNJvlS9r1QT8MBtYZtZnm0qHXd%2BgncmRcKRslSFsOg%2FpdL9NL96cT3iTSXAbAseV2nOv20wioC4R8LobdmalYLXvPRisV1x0Z994MPO3%2FMQGOqUBvipLwFvVYLYWu5kQ%2B%2BuCeirH%2BOqloYBQloOwjZkGTC%2FVt6C7ZFwin%2FlyE7mKjmm7YfDMKZir%2Fi16rsHmyWWU6p4XCAnxYMFFwbOiFoUdFFF4gXP2tFhnzFI%2FOSf29WyPBxyH8cEV7kV%2BEuOEjd34GSTTpI3JdYQIZK9MLYAPTEy9uLbFtoqLkEsbWRtp4YcCfx5cqrUXCw8OxFprMyJiDfdueHNe&X-Amz-Signature=02670ac9316c164c3f4da153014ab0a3ade9a87e324b4b2646a2086e4f5dcd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ABZ7DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDG1%2BqLcHxdVnNpR2kbvSpTaeJjy0qh6D9tv2%2F0qOi6DAiEA5KRh10m1pqee2fakoNTN2H2k6gPIBGt69LSDOp60faYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKTiviAyl6Hl1UHDkircAxVt0xQjcdFu2xV%2BCM2Inmkd0b1n9NyN7LwY8%2Fb09Dzqw242JSJRwIk30mJJr7lTYGynrNkILUrSr%2FwWnoHCkRBBhkNY74a2RREGiXtLWrVzJQZtZPIKNoCz0ayExQAiLUxG2nfQnOo7lC%2BVOZW5aa080AKDHExl%2FZwX7X%2FIFdExyi5vwOrVCGTE02dgTcI%2BLyRsf8mPkYi6q1UUG5%2FLivbyBmU3GQEXYaQj45gDiqb4Y1Uqb4Cj9nuIqMlGP%2FC%2FTio2pZmaIgtnyH7EloLnVok94NFZ9d7t0oU%2FIkQGHD83Rc6vU9BTTfW5xuxOq4waHNZJq%2Bw55RFdU09N3MGwZPcqVwZYN0QlRegrB6y4kMfsvIire9aToOLjtG3iJzuS32O3n86mg4Rgo3uzMGVHpSAcMrvD2rOOptLiRE%2BPBo9DkM1E4JjkPTdtsfeeqQ6j9%2B5mz6cKAjbjUQPQ6gDHNnxHjogVX8izLQabZVnZW3UbEwapE%2F8rM7bsDscl%2B7iPkvlUIaeEMlh1Ye2n8QYr%2B4t3fNJvlS9r1QT8MBtYZtZnm0qHXd%2BgncmRcKRslSFsOg%2FpdL9NL96cT3iTSXAbAseV2nOv20wioC4R8LobdmalYLXvPRisV1x0Z994MPO3%2FMQGOqUBvipLwFvVYLYWu5kQ%2B%2BuCeirH%2BOqloYBQloOwjZkGTC%2FVt6C7ZFwin%2FlyE7mKjmm7YfDMKZir%2Fi16rsHmyWWU6p4XCAnxYMFFwbOiFoUdFFF4gXP2tFhnzFI%2FOSf29WyPBxyH8cEV7kV%2BEuOEjd34GSTTpI3JdYQIZK9MLYAPTEy9uLbFtoqLkEsbWRtp4YcCfx5cqrUXCw8OxFprMyJiDfdueHNe&X-Amz-Signature=add9f3e380768f926caf6b08a445b2efe7946087c6da9112e1a6f26c16eba904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEJ562T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCGL8cH%2B%2FE2IlZaMPNnH3zEqIOFiLoPXI2URCzQ2jcWsAIge3XoQ3%2Fl64uvfBDtNUD3w5vkzdLMwn90j4RvISLexysq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF1IDmDaKxvptrW2JCrcA8OOnGQ%2FvCPs2sNfRFsC5SX0OZQztQBbSWrTb1mdtVxt4mhOdthccWZL3N6Bqvdg38K3dxoY28t%2B8pYdfB5qe7Gh6%2F9wtJrl7uikmhTgJMvclU2d4Lkbf8DmW59vyhYP59dxQAqIz0bEqUUtQ%2BabcfacINqQ18yCTGfNRQL%2BsgT6tIGv%2FJINy7fFT6p6Wzu2CWlYl3X29lwK7WJ64EYvWFg84tlGUFvhm1HUWvZZyFOaUaAtSBJ9Q5uu9XR8khP0pbIkbZ7f52ht%2FfjKy3h1hFwbZmwM2NvRmk4sDjV7Dq6l8KOh17ekVkp6%2BlRf%2FybJiOYu%2BZYV%2FGP0I5ja%2FOVrUSUtJeR1oNdoAu8M4EPhe7PnMYPd1OFcyDnPXQFhky75jhNoebhxjnSNEbZ%2Bi09KuJXkIXuXE4iGNMAuo4u3u0wEigl70QeL1P45TXkI7TBrPYKP%2B7nYf%2BHb%2F%2Fe2Uul1H9VhcesRdRot6B1S%2BuNXZep81U5t3ZldYiqT9XXDcFUVoCFjo0w%2FxQ8m%2FAVUFVK4Ng%2FneYQ0jSAaoajIQaSKv%2Frjy4o1qtR75FgSRQ9FTkJ2OZ7mA4uWHJVUE8mTXyl4X0GuLqzY7YxJLJojDb2V%2B2k28G%2FUIZx9Y5iDiTSmMK%2B3%2FMQGOqUBZmIRUW4DLgRjOdSOrhkFGQqRBVFs46PQjdZUE9EcIp3Fmz4FrEolYTjCbk14iutijiyJQNgE2GerWmgNntcHfTmuvf9OMS%2FeIDiGOFBlduoNZiSIt3%2FW0tOvgo0yH%2Fa2f0aKCIJJ03EJ4Lg5NW6I5nfTrO%2BcqiuBbZRJH6Kk3EjGHvB4g%2BNABSZMw43ePmHJbQXYjPQ0hfPAIOayxx1WAJlf1wNp&X-Amz-Signature=2fb17d58480d958c28d6532aa9f013e8f49c514c830c267d55b350650094793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUOH73C4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD%2B2gU9oOJnrWaZ32xcDwl39fjapJL7rDggKd3FoAK95QIgCyfxl7txbyiUvOm0n1A5ZG4T%2BP2A2bYQWqLKAdNZF9Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLO6XTUrREStE%2FGwkSrcAxmv5H2n%2BBR8vuYIyhzt7DZygfsi4oJar7N3qGwrP55gL57eq%2BrfuEC55D2YN5HaSclkVI39C1t0Pa%2BgRI2A05vOsFNKXm5Uz1vZ5RRrC6BFvfIcNFqJD0VUwBbKy0oMqfzq9jNHA4gWYTDkkKD6D%2BbPSFW9xHy5MY%2FzdNhxAzH9OYMLC87rMaHC0QWAAB7gKkswpxShgCu8%2ByPSFFShH2Rmkw95lRnBSmD7Nh2m4aZaklhv%2BrdYBx07Ui72yokxJv3WBoj2RxAwhuDcLj8LuMGO1v7v4l4lqZqBVwi4b0rGJtQjjQ%2FViwe%2BduCSaTK8aU1f8T0A6IY5wXRQRmECAn6r0IVv6p1vAsFzFvTn6KSl89oaq81ma%2Fa%2Bo%2BpW%2BvMtFiPOfkKhIr%2FB6%2FKR7xnoaPMYzgM0pjjdV1xlnARGP8R8VwQNEgEZ8Xiv%2B5LSyTYd7g0rvsCEjZUH7oZomOlGnddMQyufirYDGyk6UYz8KoOJnajhnFakL9o10%2FCriJSUYp7qGWbGG0PxPpvRNaOgvQlflSlhPkjrtDwrHhZafFPajp0KkvsaYccWRrmtyeBzgZYb6rvLhYhiEhBktpHVzIhLJfMY2sBxR82k%2F8w%2Bqll2zzcIxvi3ohwy2nGHMMK3%2FMQGOqUBJ9wfOj3ruFgClcE6%2Bm8iuxJA1zNFHZfNKHtq1k04GyJZVMVGYMkf2G6YZOYjop6eR8o8n3KxRP9agp3Jb1sCUVDqweVp26TlD6OB0Debc4Iz1Z6A4%2F16aFeka%2FXMWD0Zb%2B8xeWVjIIsnERCaNZhR5EGR9aEMVh9VgyTFwCy5tfJWJBoz1K273qdIN9gT1xcq6Zrb1c0ILwXCeSJXrUv6YxgqpR%2Bv&X-Amz-Signature=d2fccc3aab17c11cd84d792bbc3a304a4878e564e5f1aff43f55f98b3ead6996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ABZ7DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDG1%2BqLcHxdVnNpR2kbvSpTaeJjy0qh6D9tv2%2F0qOi6DAiEA5KRh10m1pqee2fakoNTN2H2k6gPIBGt69LSDOp60faYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKTiviAyl6Hl1UHDkircAxVt0xQjcdFu2xV%2BCM2Inmkd0b1n9NyN7LwY8%2Fb09Dzqw242JSJRwIk30mJJr7lTYGynrNkILUrSr%2FwWnoHCkRBBhkNY74a2RREGiXtLWrVzJQZtZPIKNoCz0ayExQAiLUxG2nfQnOo7lC%2BVOZW5aa080AKDHExl%2FZwX7X%2FIFdExyi5vwOrVCGTE02dgTcI%2BLyRsf8mPkYi6q1UUG5%2FLivbyBmU3GQEXYaQj45gDiqb4Y1Uqb4Cj9nuIqMlGP%2FC%2FTio2pZmaIgtnyH7EloLnVok94NFZ9d7t0oU%2FIkQGHD83Rc6vU9BTTfW5xuxOq4waHNZJq%2Bw55RFdU09N3MGwZPcqVwZYN0QlRegrB6y4kMfsvIire9aToOLjtG3iJzuS32O3n86mg4Rgo3uzMGVHpSAcMrvD2rOOptLiRE%2BPBo9DkM1E4JjkPTdtsfeeqQ6j9%2B5mz6cKAjbjUQPQ6gDHNnxHjogVX8izLQabZVnZW3UbEwapE%2F8rM7bsDscl%2B7iPkvlUIaeEMlh1Ye2n8QYr%2B4t3fNJvlS9r1QT8MBtYZtZnm0qHXd%2BgncmRcKRslSFsOg%2FpdL9NL96cT3iTSXAbAseV2nOv20wioC4R8LobdmalYLXvPRisV1x0Z994MPO3%2FMQGOqUBvipLwFvVYLYWu5kQ%2B%2BuCeirH%2BOqloYBQloOwjZkGTC%2FVt6C7ZFwin%2FlyE7mKjmm7YfDMKZir%2Fi16rsHmyWWU6p4XCAnxYMFFwbOiFoUdFFF4gXP2tFhnzFI%2FOSf29WyPBxyH8cEV7kV%2BEuOEjd34GSTTpI3JdYQIZK9MLYAPTEy9uLbFtoqLkEsbWRtp4YcCfx5cqrUXCw8OxFprMyJiDfdueHNe&X-Amz-Signature=07bafa1ce57e37a603679dbdf57a73c292f733df2bb81226d76a9f7f6aa0fc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
