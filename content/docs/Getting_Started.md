---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3B74UH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwhykHO1jicnKp8Fvv1SQFKyk7bYSjST3pJsdnXrD4jAiAwBiWha7gVT1oW0PBW0hxr2fTisMrBJkTNou3PmbNYcir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM%2BrgJbguQrYjTHG0vKtwDpM%2FFAZFe17%2BMj1E7pGBGnOJ%2FMv4vMfK9Ovfs%2BjVN3Cp8X9WfJ9xyMUZCKzTgk3pDsdQhspOOARJ1iWSYQnRlwWT%2BGNIiw%2BHIU2tnjcBWGnm18Yi7Xd7LU7n1VJXmsQiOt8GEZ9ec1LGiaig8wHU7xy0%2BIshnenQovFbMQ8etkN0GDyP4MuvagQ9onGAxlYEUV2NmqLSf9xrMCZxW43Dh2bA5fT4KxFGKHwgghOF9%2Fnt8To%2Faj6FGG1Wf5wDqsgn2RvgUCvdhB0MoQzmza1j6BHHVMXCpkrN%2BbxVbKYFmlIOe9%2FxCQXAKisOgS3cGla47ynt8HLIZH8xeQ4qWr1wFbHTgzGxn3yANAPysBiB6R6HAJLoEr7z4NpionAuwz%2BgXfV4XshSbhro%2BsuqJbOSztdpF5F6pqXN9JbNpotheYBJVBL3yU1TsYWHLZe5ljEpoFsWnmaLhzbhb7j4AaEfzNx7RcJle16W9vo8fNFzFoTR%2Fr30GVIBP0W%2Bfb%2FRQWUvMkLNdsMcLYp3ml76VpLCfx%2FDUG7CFwhfHNPkocHsCy0hb%2BaLfzs2dNBx5bFn19lQ02JjiayH9TEEwu1Cbo4Gk12%2BHtstqK4HvS7vNhkjmJKbs4QHjGbgHonWG4YMwh8q%2BvwY6pgGGHwEmh2HqBE3Ht9BKDcziJsQ4pq6TzF2fnQ14%2FnUfEMFJmfMJYlgEsL3ysR0tG1VxH%2FWAvotc%2Bt3SLO677wDimwybV%2BBDKJi8wbgRSQ55vIFWK9vOxREINCMcKLbz5xSIS%2Fp0X549GLGKcnEwJ6DoiMqR9f8Osm9yp0X5IJkxWtnIsExuKlbsVAV4%2F6FFJy1ftAswoOEDroct%2FQVhRPi0Kq4i7CeR&X-Amz-Signature=0f701816359f7d35d26f91eae4c57661e020f79f09a6c0ff7ee49885e9d7093a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3B74UH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwhykHO1jicnKp8Fvv1SQFKyk7bYSjST3pJsdnXrD4jAiAwBiWha7gVT1oW0PBW0hxr2fTisMrBJkTNou3PmbNYcir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM%2BrgJbguQrYjTHG0vKtwDpM%2FFAZFe17%2BMj1E7pGBGnOJ%2FMv4vMfK9Ovfs%2BjVN3Cp8X9WfJ9xyMUZCKzTgk3pDsdQhspOOARJ1iWSYQnRlwWT%2BGNIiw%2BHIU2tnjcBWGnm18Yi7Xd7LU7n1VJXmsQiOt8GEZ9ec1LGiaig8wHU7xy0%2BIshnenQovFbMQ8etkN0GDyP4MuvagQ9onGAxlYEUV2NmqLSf9xrMCZxW43Dh2bA5fT4KxFGKHwgghOF9%2Fnt8To%2Faj6FGG1Wf5wDqsgn2RvgUCvdhB0MoQzmza1j6BHHVMXCpkrN%2BbxVbKYFmlIOe9%2FxCQXAKisOgS3cGla47ynt8HLIZH8xeQ4qWr1wFbHTgzGxn3yANAPysBiB6R6HAJLoEr7z4NpionAuwz%2BgXfV4XshSbhro%2BsuqJbOSztdpF5F6pqXN9JbNpotheYBJVBL3yU1TsYWHLZe5ljEpoFsWnmaLhzbhb7j4AaEfzNx7RcJle16W9vo8fNFzFoTR%2Fr30GVIBP0W%2Bfb%2FRQWUvMkLNdsMcLYp3ml76VpLCfx%2FDUG7CFwhfHNPkocHsCy0hb%2BaLfzs2dNBx5bFn19lQ02JjiayH9TEEwu1Cbo4Gk12%2BHtstqK4HvS7vNhkjmJKbs4QHjGbgHonWG4YMwh8q%2BvwY6pgGGHwEmh2HqBE3Ht9BKDcziJsQ4pq6TzF2fnQ14%2FnUfEMFJmfMJYlgEsL3ysR0tG1VxH%2FWAvotc%2Bt3SLO677wDimwybV%2BBDKJi8wbgRSQ55vIFWK9vOxREINCMcKLbz5xSIS%2Fp0X549GLGKcnEwJ6DoiMqR9f8Osm9yp0X5IJkxWtnIsExuKlbsVAV4%2F6FFJy1ftAswoOEDroct%2FQVhRPi0Kq4i7CeR&X-Amz-Signature=671c168d498df07e6336026d7b7fbe955bf9626d04ff8302efc7c112a9df5846&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STRVJUVS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvAgNUkY3NnKksN%2F%2Fprd1uZZUg3RU3oWgmK42cvAz66AIgZcHYzFKU6rP2xt1addPluUNqofgPCVayXEcqHLXhURMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIZ1Xu8er%2F7xRAZ4wircA77L62wI3qpNxvKHFxqSCy3az4vdOzIgcKjPJ5Ln2biMLSUp646dfHG5ImjfgVjqqa4z%2BnWYl8P1oYBMd1elPU2TS2%2FYJsLgQYJg%2B3yiTcLtXCno9Kydh8uRs10f9CKL2ulPhz%2BmdmK%2Fv%2FTzxwZFLvEVIFEbYqwBgTUx0Jynzf3J5RZ7Qgim9Sv6VRoOODuqSv54f4WQ3JfpsuEh1Wjzn0NZXD6fI2JCnHr6q5ZKXypQqScjLJBwC7wc99HwIFHh0K6j07v371TaFbEFN6UUxZ%2FbIVoIgRVZV3yH4%2BhczVqcN2yhCax9%2BPKtY41dOrERbH9UndLEhS1MaYsv2q8V9D8QE3j8fTX2LSMYImN6gV1iwSj56ZGQmDG4ApydfWw%2BvGjihhbuiQpQ1l2ClQprfSD3TYc7OjtpLx%2F6GCQVp8caPBBE5xLPZ8iYDXH0%2BmFUdcZ5OWD46aG4Xh7n6m8UUmPaYdUOpQnv0nvWJLMZWvLlPGOLqeiMnj1PZ3adnqPGSNjbDWKG%2BJUdykhr0LEyLbiTnwWJq62KMPIPy79A5tYTflfdgxb%2BrWCgfkEIhi8hdnA0mC2cjUrwBCBKI37fS1%2BNDpTwdKmCfZscpeVxNDHBBO9%2BLLKDVvtkzClLMMnJvr8GOqUBM3Q3EAD4bNAAcFLRIkik5AxoIyuK3EQhWwRfqR4zIP4EwZnWEkIhnLqYie%2FnfE8PH5sVOqhGjd%2F%2FSiaV75YHpZZRjYxaOzTGRmLvo2XSJOYQO%2B2neVkyWN9s9gF8IfOFTfpOaYOjGaAHRbnR9Spk0dvDXwwHZFLjt1%2BGGG36yprXTlWl84MY1P9OPXQyzEQJDaB6nkQY60UNEyoA0e%2BVWXDZ1GD9&X-Amz-Signature=537203d496e24974e1da4a395670f3f159e4f688eaa22191295fbac2f5708e04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5WQ6E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSGYZsvdU69S6H6HBPAhA%2FxekjjC7tb8hlq5ux7vBX9AIhAPOos9sodX2jNNrO5V41iBhNHP1G1PUuYDg43cR%2F%2B7R%2BKv8DCBIQABoMNjM3NDIzMTgzODA1IgykxE4LmuoAhElE6VYq3APHh3H4v3b8OrCE5Y2SJtvddK6loQ5Ym8d8sXTQku9n0LuTLU3oDbmb4pY9EF6Ub0JwMSCZLi6A8bmW81htlRDGUtJc4ukihF9b16%2FI2z7M1aOHRFg9GvtAdyuZ4C2az47ayKmKmT1V6%2Bnhcpe06aXoPeAplp5AeUKpbVnINMjERF6ZxWlDFNIyCkGOG%2B%2B2FVTR6NhbOS%2BaBGCNzXcZGxvnu1a2zpSsskpPUqZeZTW7ZhRVgzTLQU7EeihpJVOGrzYONeXbJSYFZdAeODImx4sxaX8gtT%2FC8O%2BJlMN%2FhRs5Kyfxmf5N7nhYPZFKMA%2BHc3HruwzkfModT0ifyHGtVYZhenEFLB238CoflTGm0mpMmdAYlql0IkloLmZtkrLcEPKmBhw95KzE6UOYppMi8XDWA8rZqQhEBh3n8LJca2H6mtoNWWTLdNoi3vYaqTjwz2C7cwWLilJqWloT0F10KYF24qbaJUGw3LV076117XCPK%2FG2vgLfD1qBeEqdAnqMV6ilKvcREgZx1fQTtFA6X0DiGr1HRvClNNQkBD72zjDB1MYMB2owRTgjnvk4HN5pCaKsnd2TdARUvZmW%2BBtfNSaHgnvBCGwemwLk6g%2FLzVGRDYbQXo6vHjuzBlc%2FfzCKyb6%2FBjqkAYULgSzrYh5vzwnVidmVie2Hx2B7V7AiyoObw8m1wSwGFesTlRrMlYWH2%2BHcZX51UF62qjF9nHyR3GwuimK%2Bvke%2B1vzgSc5qEAZfS%2FeoPmVu5q1yTuWUyFDHgP5qwXgj0xO9gFP5eDO7Sm0JHJS0eo%2BQFn0BWMj7xXzIA8tybyadkUmynuwl26gn9e8%2FuBQw4UURCX6ti86N%2B%2BoIuPKtKkB118nr&X-Amz-Signature=8895725a4fabe3d926dd81ec0b8c21262f38fa7db3560267795078287e3785cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3B74UH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwhykHO1jicnKp8Fvv1SQFKyk7bYSjST3pJsdnXrD4jAiAwBiWha7gVT1oW0PBW0hxr2fTisMrBJkTNou3PmbNYcir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM%2BrgJbguQrYjTHG0vKtwDpM%2FFAZFe17%2BMj1E7pGBGnOJ%2FMv4vMfK9Ovfs%2BjVN3Cp8X9WfJ9xyMUZCKzTgk3pDsdQhspOOARJ1iWSYQnRlwWT%2BGNIiw%2BHIU2tnjcBWGnm18Yi7Xd7LU7n1VJXmsQiOt8GEZ9ec1LGiaig8wHU7xy0%2BIshnenQovFbMQ8etkN0GDyP4MuvagQ9onGAxlYEUV2NmqLSf9xrMCZxW43Dh2bA5fT4KxFGKHwgghOF9%2Fnt8To%2Faj6FGG1Wf5wDqsgn2RvgUCvdhB0MoQzmza1j6BHHVMXCpkrN%2BbxVbKYFmlIOe9%2FxCQXAKisOgS3cGla47ynt8HLIZH8xeQ4qWr1wFbHTgzGxn3yANAPysBiB6R6HAJLoEr7z4NpionAuwz%2BgXfV4XshSbhro%2BsuqJbOSztdpF5F6pqXN9JbNpotheYBJVBL3yU1TsYWHLZe5ljEpoFsWnmaLhzbhb7j4AaEfzNx7RcJle16W9vo8fNFzFoTR%2Fr30GVIBP0W%2Bfb%2FRQWUvMkLNdsMcLYp3ml76VpLCfx%2FDUG7CFwhfHNPkocHsCy0hb%2BaLfzs2dNBx5bFn19lQ02JjiayH9TEEwu1Cbo4Gk12%2BHtstqK4HvS7vNhkjmJKbs4QHjGbgHonWG4YMwh8q%2BvwY6pgGGHwEmh2HqBE3Ht9BKDcziJsQ4pq6TzF2fnQ14%2FnUfEMFJmfMJYlgEsL3ysR0tG1VxH%2FWAvotc%2Bt3SLO677wDimwybV%2BBDKJi8wbgRSQ55vIFWK9vOxREINCMcKLbz5xSIS%2Fp0X549GLGKcnEwJ6DoiMqR9f8Osm9yp0X5IJkxWtnIsExuKlbsVAV4%2F6FFJy1ftAswoOEDroct%2FQVhRPi0Kq4i7CeR&X-Amz-Signature=9ae35c57255c67ffcbee46044c0bfa0738fcc98a968bfeedb1597dfcc9919373&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
