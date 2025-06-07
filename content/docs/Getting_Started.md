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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5E7U245%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSoitLdzvCjlOq0Y58eqYmygREveLU5xhRbMXx5MciQIhANZe3ynl96wlUJDpd1jA2XlUoKAb2CvNfyv1BrN267t6Kv8DCGsQABoMNjM3NDIzMTgzODA1Igy1b08PgXMVmjH33Awq3AP0lJFlZtcEbhsVDCaFcWjIFz%2FJ9f4CVqJypv7QefXHAwp6f0du%2Bx6%2FinAKEJ5wPspo4yzn5Slo0gk2zQbALyoEJ34d6Rhm04Lole%2Fu2qgNAAQaCU5TzA9FS0T9XNUXfmwbUkIYPoIGe87mUHGiRAjBJnt1RCrxzSokqer9rSNToHDBmcSU%2FjbNWckqCZidJ1sQUt0L32%2FVH1Hr1IfsyMWlFt8flr%2B%2F1sjmDrTlTAfiFzX0kZrAawLDtpyoobEQzMXvYlcsoLjzs%2B%2FoBQra4WnW2xkBCAguLyZjsikT8nG3MZd7XU%2BlWhuaE0NbyqzDGhUDSESfcISut2AhYmCJEW36ZcrFhp%2B7Ddp0wN5%2Bo19lh9sQk1nidw2mEFgofbtUE2sRBBDV3Iqqs6E88oAgZjpU0z5aaxlXzZOcgBqgR39HPDM0CnarCIA6GR2slY2tuZCY74dYgK0YNCsIQ29I9l%2FSPwHASNZZrRIuVQ4Z4rjSBVkQi6lwnH%2FT2%2FtX41cp%2FXOkFkWv%2FoAjtgBLQt78KopCV6PUoeDzD%2F2YaPjUpBH%2BWjyXjH7LhJKYEo1HzcZBsDq%2F312QOxzr6MJjvrfBDGFvKhsYGU69Hdi1EJb6obCXgk47pX8mls1X6llcEDDkwI7CBjqkAcPbwfx4%2FtKBq5LxlLWGtnEczBvfK7z2tGF%2BAIEjHxKTOgiT%2Bns9EohhisyvgTJlS8J0nCX8G8IkoXmDQYLD5cqmAXvukCN47MspTxeOri9moVjO9XhCXF%2FZ7y2SMIoa2QwTqcZB90eSLtwmq5UHJqTnDZYxZfP4dnm4O1Dv38e80YwvFNnwHKtOM4kYqRPpmqBN3SfMTCrX%2BkMMRkSjDZULREAX&X-Amz-Signature=999db3677c0dc207528977077e0a21e51235ab312359396c1f7744b43ee9a6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5E7U245%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSoitLdzvCjlOq0Y58eqYmygREveLU5xhRbMXx5MciQIhANZe3ynl96wlUJDpd1jA2XlUoKAb2CvNfyv1BrN267t6Kv8DCGsQABoMNjM3NDIzMTgzODA1Igy1b08PgXMVmjH33Awq3AP0lJFlZtcEbhsVDCaFcWjIFz%2FJ9f4CVqJypv7QefXHAwp6f0du%2Bx6%2FinAKEJ5wPspo4yzn5Slo0gk2zQbALyoEJ34d6Rhm04Lole%2Fu2qgNAAQaCU5TzA9FS0T9XNUXfmwbUkIYPoIGe87mUHGiRAjBJnt1RCrxzSokqer9rSNToHDBmcSU%2FjbNWckqCZidJ1sQUt0L32%2FVH1Hr1IfsyMWlFt8flr%2B%2F1sjmDrTlTAfiFzX0kZrAawLDtpyoobEQzMXvYlcsoLjzs%2B%2FoBQra4WnW2xkBCAguLyZjsikT8nG3MZd7XU%2BlWhuaE0NbyqzDGhUDSESfcISut2AhYmCJEW36ZcrFhp%2B7Ddp0wN5%2Bo19lh9sQk1nidw2mEFgofbtUE2sRBBDV3Iqqs6E88oAgZjpU0z5aaxlXzZOcgBqgR39HPDM0CnarCIA6GR2slY2tuZCY74dYgK0YNCsIQ29I9l%2FSPwHASNZZrRIuVQ4Z4rjSBVkQi6lwnH%2FT2%2FtX41cp%2FXOkFkWv%2FoAjtgBLQt78KopCV6PUoeDzD%2F2YaPjUpBH%2BWjyXjH7LhJKYEo1HzcZBsDq%2F312QOxzr6MJjvrfBDGFvKhsYGU69Hdi1EJb6obCXgk47pX8mls1X6llcEDDkwI7CBjqkAcPbwfx4%2FtKBq5LxlLWGtnEczBvfK7z2tGF%2BAIEjHxKTOgiT%2Bns9EohhisyvgTJlS8J0nCX8G8IkoXmDQYLD5cqmAXvukCN47MspTxeOri9moVjO9XhCXF%2FZ7y2SMIoa2QwTqcZB90eSLtwmq5UHJqTnDZYxZfP4dnm4O1Dv38e80YwvFNnwHKtOM4kYqRPpmqBN3SfMTCrX%2BkMMRkSjDZULREAX&X-Amz-Signature=9a60a504c255e368939830770d6d8278e5cef3909f6f0b3eb9815aacfd6a7736&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5E7U245%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSoitLdzvCjlOq0Y58eqYmygREveLU5xhRbMXx5MciQIhANZe3ynl96wlUJDpd1jA2XlUoKAb2CvNfyv1BrN267t6Kv8DCGsQABoMNjM3NDIzMTgzODA1Igy1b08PgXMVmjH33Awq3AP0lJFlZtcEbhsVDCaFcWjIFz%2FJ9f4CVqJypv7QefXHAwp6f0du%2Bx6%2FinAKEJ5wPspo4yzn5Slo0gk2zQbALyoEJ34d6Rhm04Lole%2Fu2qgNAAQaCU5TzA9FS0T9XNUXfmwbUkIYPoIGe87mUHGiRAjBJnt1RCrxzSokqer9rSNToHDBmcSU%2FjbNWckqCZidJ1sQUt0L32%2FVH1Hr1IfsyMWlFt8flr%2B%2F1sjmDrTlTAfiFzX0kZrAawLDtpyoobEQzMXvYlcsoLjzs%2B%2FoBQra4WnW2xkBCAguLyZjsikT8nG3MZd7XU%2BlWhuaE0NbyqzDGhUDSESfcISut2AhYmCJEW36ZcrFhp%2B7Ddp0wN5%2Bo19lh9sQk1nidw2mEFgofbtUE2sRBBDV3Iqqs6E88oAgZjpU0z5aaxlXzZOcgBqgR39HPDM0CnarCIA6GR2slY2tuZCY74dYgK0YNCsIQ29I9l%2FSPwHASNZZrRIuVQ4Z4rjSBVkQi6lwnH%2FT2%2FtX41cp%2FXOkFkWv%2FoAjtgBLQt78KopCV6PUoeDzD%2F2YaPjUpBH%2BWjyXjH7LhJKYEo1HzcZBsDq%2F312QOxzr6MJjvrfBDGFvKhsYGU69Hdi1EJb6obCXgk47pX8mls1X6llcEDDkwI7CBjqkAcPbwfx4%2FtKBq5LxlLWGtnEczBvfK7z2tGF%2BAIEjHxKTOgiT%2Bns9EohhisyvgTJlS8J0nCX8G8IkoXmDQYLD5cqmAXvukCN47MspTxeOri9moVjO9XhCXF%2FZ7y2SMIoa2QwTqcZB90eSLtwmq5UHJqTnDZYxZfP4dnm4O1Dv38e80YwvFNnwHKtOM4kYqRPpmqBN3SfMTCrX%2BkMMRkSjDZULREAX&X-Amz-Signature=822a37771efddf3279984b02a0f8bae89e1b3acf20aa6033d7949243c9788da3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6OVNB4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6RO47SZJFoK0NGH2qIyUCwVFGlGJ%2FJoqCqDHUlSU%2FqAiEAv5463XJr1Ct5mYHlyBeXVz1Q3p1xotQoYJ%2FEJuoRCxkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNOVVz4ibfE18RE8wyrcA%2FiIy5sfXAvYO4OrBdBd74pj1uitLOReG8GU2SMNN8i9OlzL2YXkgHFS8JgtPGqQ9J1TFC%2FLRj9ihSKFqu6LuvQIi3bcKfQOGlrypQns5ulgLy8XqImwxD7UH4xO39ZHVACMtKipWgBdjHSfuo5pLzGbmjqofflAnBaNCilfT1tbnoaHS4HNXXQfLt0L8gzQ9CGvkRj3h%2FUuCKO6et8h%2BZLOhK9jL%2FaTY50a5mt%2FA4%2FHlD4LmrOd8Rw%2FWNrPGUo%2F89MfGC5saqvLYOxWLRxA%2BvqgCy9MwDmzcaNtyyxud4Wz6tZAQRZ2JExPCK%2F%2FrHOI0wbO5l8GurCDjuueYgbiFnyQDmn%2Fr0pHveO%2F%2Bhg78o9Oey8xiVeEB%2Ftt%2Fc4XqP1HO0QkU%2FlGt%2B8OMctwvc9jlJtu8fb81ek0eIL5EeE3htbHRUX5H%2FGZB9tptSlHnzKHFJqkzlOduyQsOlPBBuisZ8RZ%2FoOwdh3D4fWItnhF1sSlCSs60xLn%2BRc2G2Nd9S5um5JWaN3yAM3db%2BPLvM5o5uIUxg%2FIqhzdOKnULZr4le2gjGgAtRZpsAhbvjLmT1qXafJ72iUZ0sjGjurKArBOXd8m5m4tGmtdrOPPrJJxhCfwLdOmKwPrm5ARHf9vMOvAjsIGOqUB%2FyrWCinsqTbVTZuSoleJI7HiG6oTnrV5zAcn6X7YctZ1dMd%2ByTTRT5IYPTDnAhT%2FpsS51%2BMlkIO7oH1WyxxlKqDgDhfD2fX9je7nb4qRM%2BxX2wgYNNV3XyIthgHaKSk1acM9yoOjj5wdrSb5iGlyqeziNZhDLJGQHdhLWbzEla9YvFZdD9cpqKM3gj%2BWkH0Zk84UhCk4f1%2Bc%2FJrgDrpYK4XJshzq&X-Amz-Signature=2b9cd69a2f9abf712e861897caf801fafc93519730d7e8d5125e17fd5bd2122d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW347MZL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGb1e12Kahf5FflU%2FlzOOpyhBFkfovnqjWri6uXKPxHAiBVdTRrFrcsXIkni5V8pRPEMBbgSxcvTgMPDoFWk8MrEir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMDNXe3cmTgTbAcOemKtwD6S09%2BSj2hnCM7%2Ba320GoiWq9WNyu2BNH5CoeIKMDSHIYK%2BAjfjy8dMl%2BoUZC6PC6ZdGXThTg6WsWXol4dlp7vXtbZNKRa49X0mT0wg4dzMC1zw1lZ%2FWJSP7wFtDhmTZ2q8nUxFl7UP9f81gvPottQIPlqlYZqoiWsB1yGQ6OcUABj7JTNj7fDkZU4WbfXn6haGzhJkHEERAv%2BEQsxZ6MImLVnJatzpWzXVvnXvs52OQ4KuqpXU7eCORBIpb0IrpwWIR3MksySgKKrbzWFDxDBF6Xxig4mVU1QeC7L33DX7f6cmaOCJyYYcNqU9MOoTcHxMeqYr8Jgdijiak3xkrrTvlAkSNRpi2Tnh33B9QoWhhjekXNjSp7M7arI1Q1dJ1MQZgP9kaqV0wGPOf3DTueTZyd2ErofkLQQIJAv4hCe93C63xHKtpTCGdyvYV87l7iFrDbn060P7UZYGqH%2FqycZmje5KCrz5bldiEZh0SNanIWcGNomlYQc8sBeQTUkLS32NSo0qG8zvXCKgeHV1EP37YfNqnhxsdp4v7ari8%2F1y6L4HgyIHg8WagLk1wjr4qSNRI73j37hs2FXDZGJkAUb6i40%2BQmv2RxXryc1RqSTv3lEnKVJk%2BRN3OLCzowgdeOwgY6pgFIkgJomoxCrGsj0Wwac5HGpBCmi0zTTlMRJjxC3ZWl5sB%2B%2BsYIb8icca42jJ%2Bdnie5hIstPnahzKfP0BZDF4zOxKNTr%2BlfGrQfLXXbzYJu%2Bua47iYdbd9x3HBW2wd6W9co%2F1fn8K8cEffWZqrUt9njU242eoRBNqNzgEUdXf61lYffDOpIJ5%2FNhHURcQRUNkhZ9J4Lh8woyTdTR78uggAUhb7ELrrV&X-Amz-Signature=e9fa91974a13e743565be273f95031f4974e37366a857a87d78985f21edfd8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5E7U245%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSoitLdzvCjlOq0Y58eqYmygREveLU5xhRbMXx5MciQIhANZe3ynl96wlUJDpd1jA2XlUoKAb2CvNfyv1BrN267t6Kv8DCGsQABoMNjM3NDIzMTgzODA1Igy1b08PgXMVmjH33Awq3AP0lJFlZtcEbhsVDCaFcWjIFz%2FJ9f4CVqJypv7QefXHAwp6f0du%2Bx6%2FinAKEJ5wPspo4yzn5Slo0gk2zQbALyoEJ34d6Rhm04Lole%2Fu2qgNAAQaCU5TzA9FS0T9XNUXfmwbUkIYPoIGe87mUHGiRAjBJnt1RCrxzSokqer9rSNToHDBmcSU%2FjbNWckqCZidJ1sQUt0L32%2FVH1Hr1IfsyMWlFt8flr%2B%2F1sjmDrTlTAfiFzX0kZrAawLDtpyoobEQzMXvYlcsoLjzs%2B%2FoBQra4WnW2xkBCAguLyZjsikT8nG3MZd7XU%2BlWhuaE0NbyqzDGhUDSESfcISut2AhYmCJEW36ZcrFhp%2B7Ddp0wN5%2Bo19lh9sQk1nidw2mEFgofbtUE2sRBBDV3Iqqs6E88oAgZjpU0z5aaxlXzZOcgBqgR39HPDM0CnarCIA6GR2slY2tuZCY74dYgK0YNCsIQ29I9l%2FSPwHASNZZrRIuVQ4Z4rjSBVkQi6lwnH%2FT2%2FtX41cp%2FXOkFkWv%2FoAjtgBLQt78KopCV6PUoeDzD%2F2YaPjUpBH%2BWjyXjH7LhJKYEo1HzcZBsDq%2F312QOxzr6MJjvrfBDGFvKhsYGU69Hdi1EJb6obCXgk47pX8mls1X6llcEDDkwI7CBjqkAcPbwfx4%2FtKBq5LxlLWGtnEczBvfK7z2tGF%2BAIEjHxKTOgiT%2Bns9EohhisyvgTJlS8J0nCX8G8IkoXmDQYLD5cqmAXvukCN47MspTxeOri9moVjO9XhCXF%2FZ7y2SMIoa2QwTqcZB90eSLtwmq5UHJqTnDZYxZfP4dnm4O1Dv38e80YwvFNnwHKtOM4kYqRPpmqBN3SfMTCrX%2BkMMRkSjDZULREAX&X-Amz-Signature=129414478c7191680300118423edda16fad9084d30fd9849c5334b9929c05f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
