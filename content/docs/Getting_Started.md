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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYOEDUM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC3DAaUD8nj89YqQ47a434pSpUbsAxLzwLQxfyhxXUCVgIhAP3KR%2Fub1J2p0xNZcr9Y54gC88alXzv0MnozbAp%2BB0pCKv8DCEkQABoMNjM3NDIzMTgzODA1Igxy2l9MKhi43XUKHywq3APtpu02UaVT3CFcOVoW1b1FguK5JsTZTMtA7p%2FWWLoAq2QALyC6Cgn3ojxA9RvUycqTO2WGynWoxTYxT%2BFEbYnmZjnurQT4BAgjJMae30zANxaM6eMGhipHY1QA8AQDZIeE11907Wwbs8u53waZkW4H8kMPhOTYSnYu45agdfnV7oMmRbHrew0iYjnwRe766uBKfq%2FJ45FTh27ofx5f3kr%2B7kR7gY0DSsA7I25wIqSZmIVdCoCh%2FBwK10qorkPHRGydq6nt5KcHbhrW8oKqPytcv0y5j3V1%2BQTqOETnZyTY6chQ1JCWKFXwvGQLg3%2B2Jtij5VLjtsC5XDRJksVaGzyxnWZxcaQZw2zOyjlU%2FbO0g8fZgy2Tevv2X2qh%2BQ%2BNGrP4FxhKhMejgt2aGyW1Uq5YLklKGiaoZ3iGIfXVBSa5f4Kx1CXIjC7U2H54v%2Fbflcq2TZWNh9gNqutPAOebOsO5rs%2FBBuIlwcbfirsS3cGicipnsXuwwkTp0isi36QqH3%2FhDrKUnSt1tV7z8zVqO0fAikQK%2BwoSw%2FSj%2BNeg0GBuIgwM5B46a6%2BAJipP6cxMFQGNaFCs2pbTN%2FHACHFDVdIew51jm%2FcFqhuqan7BdIRBICKesvObQczrSXsbIDCO0ve9BjqkAVWRWiTx%2FmmDzkOgsFlSBokLW2Q2ik7OunAHoNrVq%2FjjSGZYq2wrWpdkC3qUmRsmtRmv9trElCN3wsKwo3bzkrAR9nvENA7LPbX6FZqN31eWubue4BetMNgE8xAztYym6HfBiFDVm3Z3nwFvXVDl4CDA%2BBdzcIqA2NPRHgEb3yfSVUz53zCV3lFe6Hd%2FnEXOZ2jESMGsvXNd82jtzm5q7vdOfr4C&X-Amz-Signature=3e9fd478b414c14e1b5b02c0f5a6902ee76f7615aaf6e4699f82ed497f394e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYOEDUM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC3DAaUD8nj89YqQ47a434pSpUbsAxLzwLQxfyhxXUCVgIhAP3KR%2Fub1J2p0xNZcr9Y54gC88alXzv0MnozbAp%2BB0pCKv8DCEkQABoMNjM3NDIzMTgzODA1Igxy2l9MKhi43XUKHywq3APtpu02UaVT3CFcOVoW1b1FguK5JsTZTMtA7p%2FWWLoAq2QALyC6Cgn3ojxA9RvUycqTO2WGynWoxTYxT%2BFEbYnmZjnurQT4BAgjJMae30zANxaM6eMGhipHY1QA8AQDZIeE11907Wwbs8u53waZkW4H8kMPhOTYSnYu45agdfnV7oMmRbHrew0iYjnwRe766uBKfq%2FJ45FTh27ofx5f3kr%2B7kR7gY0DSsA7I25wIqSZmIVdCoCh%2FBwK10qorkPHRGydq6nt5KcHbhrW8oKqPytcv0y5j3V1%2BQTqOETnZyTY6chQ1JCWKFXwvGQLg3%2B2Jtij5VLjtsC5XDRJksVaGzyxnWZxcaQZw2zOyjlU%2FbO0g8fZgy2Tevv2X2qh%2BQ%2BNGrP4FxhKhMejgt2aGyW1Uq5YLklKGiaoZ3iGIfXVBSa5f4Kx1CXIjC7U2H54v%2Fbflcq2TZWNh9gNqutPAOebOsO5rs%2FBBuIlwcbfirsS3cGicipnsXuwwkTp0isi36QqH3%2FhDrKUnSt1tV7z8zVqO0fAikQK%2BwoSw%2FSj%2BNeg0GBuIgwM5B46a6%2BAJipP6cxMFQGNaFCs2pbTN%2FHACHFDVdIew51jm%2FcFqhuqan7BdIRBICKesvObQczrSXsbIDCO0ve9BjqkAVWRWiTx%2FmmDzkOgsFlSBokLW2Q2ik7OunAHoNrVq%2FjjSGZYq2wrWpdkC3qUmRsmtRmv9trElCN3wsKwo3bzkrAR9nvENA7LPbX6FZqN31eWubue4BetMNgE8xAztYym6HfBiFDVm3Z3nwFvXVDl4CDA%2BBdzcIqA2NPRHgEb3yfSVUz53zCV3lFe6Hd%2FnEXOZ2jESMGsvXNd82jtzm5q7vdOfr4C&X-Amz-Signature=e6ba8486893582da7da513df97f06671ee1ffb8089befa0a1da6312d1ab556aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R24CRD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC1bQn6dreHXc9IzG3C2k4G5%2Bu%2FzIBnNmjUbSYE%2FQYLEAIhAIo1nSE8UpIkPAQxpqruu0gAG3cMB%2F3pvIhJPoB0vKrLKv8DCEkQABoMNjM3NDIzMTgzODA1Igw3ABb0YqegMauy2%2B0q3ANnjNEpx%2BOOL5vsSk%2FiDPikqB6Hg09ZFiE%2FaVCmy5UV987mpCt2YylhcQgFp4O9nRywIjuLW3BvrWSCEOxtJhYGaCr%2FjiqEZs3ksmJZM4%2BOzrfFDGa%2F9YQ6b95ZKhpNsYU3pxsoPZtIFlbewRlpaHFyZghrUI0jbRplATCGnEVRGBlozod%2FtU09Flo4xRYpv9eTCeH48u%2FgzkCa8uNlEaxZh0n%2B6PNTSYU9z%2FdoeN5P7rQZaM8YO0bX3%2FTjtsEJ0CGSQMKmF7Kdctinmy7tI%2FSDqLyZWmrC0CoT%2BEdNLA7tLhWQeFgDbnr5huuswkCQlLMRpMv8B9B%2FQBV22%2FxvJosckAFnseTVL0uxxIN3QRO%2BRosLs9tYnGDwgXXD4E9HZBKP59%2BXKf35MJazQ1oLwCJvlhETH823A%2BPgdX0RpXH7FvbNtmgY6sUe%2BEwkfhknwPl6z1nQvPtjgFRIIKrIj63GB6vWga0q3fI46ksZXdDu5sn8b%2B05A%2FTPqUXIDY6gj0EM6Yb8zK3E%2FvVaAohNdE4MC9ZrajQD%2B%2Bx78EFg%2Bv7eJipPMpUIK20QadIKJT8X%2F7S0SaSZPq8wrGSOG8JUICL130%2B8J51SfumFSnGAVDXYMdpxYARsWEJszvIIsTCK0ve9BjqkAUjgB4DY7rUCcXd4O%2BM2d1GfZmNvif35S2n%2FD4UJceK%2B4Eu5J1nda44oOy9agZVmSIVzGjK%2FMuxnmP22O0goC9n%2Br0m3d8dtSSsFzdrcNp2YMBKnHRfWwPp0fKvSbt%2Bp4WCMBbfWudsRimcssDvKakjjkIttpEpf8Fdk%2FrilxhWyQYXlI5cfo7G6M6sXACPDHr%2F17C%2B5eic3Y8%2BBNI3Xh0K230Rx&X-Amz-Signature=05b92f987b9c90f58c2e9b72129092b2cad69d5b3dded4af97c16e56f0caeea5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHA54BV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGpgfDCbPQ%2B1ksh68KWn97FvkSKli4L1mUtqIe8xShnfAiEAhoKiMHUj3MroDQcM8TavwqlcsSLtSUb5EudVOPxCj9sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEeFLv4KA8OWUVSGECrcA3yUAAvJbK51X%2FmOEaQoaWzjd7NAACj%2BkLtyqAXuuv3Km7B%2FnW0IqB2K8ev7LSwSjrZsUdCp4SVa5a%2BgyALg9Jhv7u%2FiuRTpOiIC%2Fhlk50dWLZSPZT%2BZlRQbNDW3XCD05bRRiO17%2ByxAeiKh29QwTq9pDmCNZ%2FbyMLtx3czpAW%2FMCKIVrOCsu4EQUz5PpvWoWKc2VF7Y1nY62%2F5GOvQyhvDy%2FXgnwcy%2B0jHo8AFEtVCqzaZJS5aTleglUPsuyUyQsQff78YZyMARJe8%2BQnoUglZ6J%2BruCb%2BvQljnsNf26SnV1kVKE90751pko%2BLLg0WTX53zl8mOUOdcYPcXCHoA%2FqZnYEF001ItavatplZV6EKmJKDG%2F8VX6srpOsOTzJz6UajDvSVD%2BRqnjUbKoim0cO%2BFfQCs0N2ZI0xRPhtEyDqS9Lf2pDR5G8eMyMxtRfFKa6zI8bIkbNz1qF88E9Vm%2BJJGVHhN1Knd0Prs4yRSy7QXwYer%2FPu%2FGnrSxv9eNpzfa%2BeLuBNmd8rDRWK7kQi0CnZWxv4a6SOjdQZAw3SdZ920F8sEeD%2FyDmZxQN3E6O2yJelMbyYNU8JkXMOq%2BDHDH%2FDDfVESku9gtg%2BeIwM%2BEH28D%2BJgne9OeoStkT6nMOLQ970GOqUBiB15rVgyGwU04qBnLZtdlisVQekQjTGu6afSJ1bWITSEzCOJAQFU%2FFYQI1V07OSgiLhUk%2BA5JF1yFETup3L8LWrnZpAIV0Sw6yzA2o8Yz7edzi8gj81QjfAPkW1e62BlyZRf5mMLt3Em9IpBJvRhM7qUsz3tSSUZ55NVsfD5kLJQp119%2BbkEdGGQWxRv3rVDGyvEk%2BkLdJTI3052%2FBgn39tM6FWs&X-Amz-Signature=a3ab1de9a922c523b5678a4682fbdbb8de805fe3b78e8444365fa704f31dbe73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYOEDUM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC3DAaUD8nj89YqQ47a434pSpUbsAxLzwLQxfyhxXUCVgIhAP3KR%2Fub1J2p0xNZcr9Y54gC88alXzv0MnozbAp%2BB0pCKv8DCEkQABoMNjM3NDIzMTgzODA1Igxy2l9MKhi43XUKHywq3APtpu02UaVT3CFcOVoW1b1FguK5JsTZTMtA7p%2FWWLoAq2QALyC6Cgn3ojxA9RvUycqTO2WGynWoxTYxT%2BFEbYnmZjnurQT4BAgjJMae30zANxaM6eMGhipHY1QA8AQDZIeE11907Wwbs8u53waZkW4H8kMPhOTYSnYu45agdfnV7oMmRbHrew0iYjnwRe766uBKfq%2FJ45FTh27ofx5f3kr%2B7kR7gY0DSsA7I25wIqSZmIVdCoCh%2FBwK10qorkPHRGydq6nt5KcHbhrW8oKqPytcv0y5j3V1%2BQTqOETnZyTY6chQ1JCWKFXwvGQLg3%2B2Jtij5VLjtsC5XDRJksVaGzyxnWZxcaQZw2zOyjlU%2FbO0g8fZgy2Tevv2X2qh%2BQ%2BNGrP4FxhKhMejgt2aGyW1Uq5YLklKGiaoZ3iGIfXVBSa5f4Kx1CXIjC7U2H54v%2Fbflcq2TZWNh9gNqutPAOebOsO5rs%2FBBuIlwcbfirsS3cGicipnsXuwwkTp0isi36QqH3%2FhDrKUnSt1tV7z8zVqO0fAikQK%2BwoSw%2FSj%2BNeg0GBuIgwM5B46a6%2BAJipP6cxMFQGNaFCs2pbTN%2FHACHFDVdIew51jm%2FcFqhuqan7BdIRBICKesvObQczrSXsbIDCO0ve9BjqkAVWRWiTx%2FmmDzkOgsFlSBokLW2Q2ik7OunAHoNrVq%2FjjSGZYq2wrWpdkC3qUmRsmtRmv9trElCN3wsKwo3bzkrAR9nvENA7LPbX6FZqN31eWubue4BetMNgE8xAztYym6HfBiFDVm3Z3nwFvXVDl4CDA%2BBdzcIqA2NPRHgEb3yfSVUz53zCV3lFe6Hd%2FnEXOZ2jESMGsvXNd82jtzm5q7vdOfr4C&X-Amz-Signature=4d6d543e62bc1f58dfd25169ed92927531f5a54dde08bf280660ea8297a0f053&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
