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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGTMMVO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCxGefrBoJ7LK23iREh6K9STG7FU%2F6EYEfgkfWWWpUx9AIgeZ36aeE7wjJYKXq4ui7nxPJhhO2eWMunT0NwXLdd2BQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEZ2%2BBMoftiQecMQSrcA5d7sQCFzluJ%2Fk1JpVrzJ3%2BvyT0LLr8L%2BorSxkwDRyEBICc6aOI4hLt5b%2FuOt8lMDJK1VzMkzKAD9%2BEzVSmntCks6gFqDe0go1FMUvhua0qEMRH2Nteh8IzwgEvWPKrnD4XjUunsKVOuWDBrcSEYWXakLT8QlsZy9upx5VS01g1kAIwg%2BgEiMK84rFwpPv%2FZaZXvUV1coTI5H%2FmikQdJFrUIvoKzYLv4wi2nHoLo%2BIKg3WdQ93qblSB0WBoF88gYDfquRTQxHKPpvjfjisE0OuG4Kiczo33A168bheTnD8n79CHGXPjLD67LpHuQ%2FtaHTcSn2t0YxkiT8T8CIa6HkYkHHJAYNYp3NC4%2B6x0%2F9FBHohPy78EncfQVRJha2Sg%2FO08hZFEta9DqnZ8uO4gt2kROqHFKgk9%2FyFl9PwJ6uht3IuO4ekRaKDXsVu9l4tERUSVezThVaXjX64guH3iKWp4Et4vTyWKpvs8QP%2F5KqX5%2B%2BlrR7K2mIwATHS1JTDavoiHBFWpshiwkFN65e18X15kz0Ouw11T25Jl7Vki%2BTeZchjiR6iJSOYq7XunNyWcXt%2BF77hPZeUuzV%2FB5fy0e44gQbOxC2YAsSA62NzRR7IhiKN9oJecMeeZXd%2F3FMJDShL4GOqUBa7Xdm1IU0Y7%2FD%2FMvEAUY2il0oP6HvbMuEky9ymwjN77I2%2Fb9Nm1c0J7ANnxvKmweW0QARn7ylKzKRb%2FsBaGGCR5tzxkR8ElkTrCa7g%2F%2BxGR%2Fv77WhWygELy98gRHfmG0Hef6hW8ds0ZLzR7r0FCKhX5JQxvcHcp5sSQ5LY4MAPww2%2FO8UiqwOmuNCxuQNW%2BGsr4aQ4iK7H7GeJh8e6Mzh2CySiWh&X-Amz-Signature=2e91e79c9ab69876b07d6dc16ed106e16fb9bc2e29dc7c7bc82208d32ce97b63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGTMMVO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCxGefrBoJ7LK23iREh6K9STG7FU%2F6EYEfgkfWWWpUx9AIgeZ36aeE7wjJYKXq4ui7nxPJhhO2eWMunT0NwXLdd2BQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEZ2%2BBMoftiQecMQSrcA5d7sQCFzluJ%2Fk1JpVrzJ3%2BvyT0LLr8L%2BorSxkwDRyEBICc6aOI4hLt5b%2FuOt8lMDJK1VzMkzKAD9%2BEzVSmntCks6gFqDe0go1FMUvhua0qEMRH2Nteh8IzwgEvWPKrnD4XjUunsKVOuWDBrcSEYWXakLT8QlsZy9upx5VS01g1kAIwg%2BgEiMK84rFwpPv%2FZaZXvUV1coTI5H%2FmikQdJFrUIvoKzYLv4wi2nHoLo%2BIKg3WdQ93qblSB0WBoF88gYDfquRTQxHKPpvjfjisE0OuG4Kiczo33A168bheTnD8n79CHGXPjLD67LpHuQ%2FtaHTcSn2t0YxkiT8T8CIa6HkYkHHJAYNYp3NC4%2B6x0%2F9FBHohPy78EncfQVRJha2Sg%2FO08hZFEta9DqnZ8uO4gt2kROqHFKgk9%2FyFl9PwJ6uht3IuO4ekRaKDXsVu9l4tERUSVezThVaXjX64guH3iKWp4Et4vTyWKpvs8QP%2F5KqX5%2B%2BlrR7K2mIwATHS1JTDavoiHBFWpshiwkFN65e18X15kz0Ouw11T25Jl7Vki%2BTeZchjiR6iJSOYq7XunNyWcXt%2BF77hPZeUuzV%2FB5fy0e44gQbOxC2YAsSA62NzRR7IhiKN9oJecMeeZXd%2F3FMJDShL4GOqUBa7Xdm1IU0Y7%2FD%2FMvEAUY2il0oP6HvbMuEky9ymwjN77I2%2Fb9Nm1c0J7ANnxvKmweW0QARn7ylKzKRb%2FsBaGGCR5tzxkR8ElkTrCa7g%2F%2BxGR%2Fv77WhWygELy98gRHfmG0Hef6hW8ds0ZLzR7r0FCKhX5JQxvcHcp5sSQ5LY4MAPww2%2FO8UiqwOmuNCxuQNW%2BGsr4aQ4iK7H7GeJh8e6Mzh2CySiWh&X-Amz-Signature=055d3253f1a4b3681094f27013d78179a5ca2ebd8d9f32c1f30baccd615e8370&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6JB7CP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC33FIp6bkV4JZ9ueVsY1%2B35bGk3JSo%2BS9isDkGmssXmQIhAI3ShvLwVzuOWWYBhJ%2BF5xYRxwZTlAnbjC%2BM8MWiukOyKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1qBxZbNs2B8bSgqAq3APJ0oO18g9xisc%2BjIJgdGAPSEMCSxsqNQlz%2FzNWuWqNj%2BXLBDBmNkqpn2mW4MhDJDEvlJIsAyIxHi%2FAMsoMWrjYJ5q%2B2CTOhcwjc8BjEA4Mwf96GZsnHjeJicylBjrKaSThwSrpTQ69uC%2FBG4QNYZoRseMS6p0p1Hpgom4qQFiFbOg9Mv39KUlK4gM5lvN5cj6RUC3%2B2alOQx66l6BtJKzugEEl8wi%2F5PHYoiIWMho7PhR7kLwKwYqGT7UZPMYDgG%2FI%2BEtsY7iDlMRevhdBcrX%2FkD2SXNgoHvLlVZojeX3nYbdcHGOoVlhu%2BIbsf5bOzf1Rdx3cGNe4cqWPQuQi%2BJS1LfT3fH4oaOXRUVHhy6bAxsx9%2FMRmmkE60%2B%2F7asjhw29J8%2BN76U8crDt7%2Fc6PNKeVRkaLAQbwnu8hG2SOQUhGY7cjiodza%2FWe9Dfe6sGNdxav8XyerTy8SRgxhKRRV60ezY1xD38Wi%2FsadzpVwWWEErcrd65dWKboZz4KL%2BL8Pa57QYhZg0C%2FPaEGoB6TN0dRVkjfWvsuXl6W48PYvQhccYrYksTM7lPXdjT%2FDGINZMtKS%2BmpdsCocuYoIumkSiLIHX57o%2Fi0d1g6hqDoKzmyqlTpL%2FFmqarei0NLVjC90oS%2BBjqkATwCyTr7tlFpA9YojunMiLWOmGlx8%2FnlgcmSecGmy7CNNqd1NwjtzH5LN2l7y8XiOhElArpM%2BQ6DoV2OuHnzj9%2F%2BHP0dl9ri%2BbC6qwX0t5Ca5iPsqvVOJK3Gzy1t%2BGL6JCrmMwxOAD59mKPswf%2BYepYa0IAULYkfkxW9aoQUm2YSc6a5XaxJXA6GXSQkUJFdtFlZhPqnKTGackVjFQu2UkP9JClE&X-Amz-Signature=f82789e2ff432cf18296d2381286f362830b613563d0a20a7f058e024b8639a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIXKZ7R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCe6wl0Gw9bKSALcrtFvePTNKzkpm3Gtc8EjRqS1DpYLQIgKlkGd3x6sERWF9K4A8FssLdg1PvIBvWTqjcoXCQE67EqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtEhfwwdAb850OupircAz0jehD%2Fji4IwNHZfiE46JC5V3FCT1mpx9YleNNm6iWk51zipF7EyR2x%2B3%2ByQc%2FiW2IxCKc9zuYgmcO171Znvz45VMl8QcQ2ht%2FMLZEcXqhWIhr8Sgk15MsRgTZhxa%2FYHjbtseSg9kU29DQrpRf9ec6kbSWIt6VWgRBAWDm%2FL8RUUGepnSHZ8ojWwf5ExdvHr5jp2r3%2B6pL3lQbrh2dB5h8HMjOnETFb%2FwJaZvUOUrc9jJ9wXyGOnQqnKx34Muu4mmTcEUa4xxpx9WaSXeB%2Fwsaa9hCOhQZqdkeSwM7udTrxLreRZCHWwAra%2BPqkUNW5Pa6ZQFgUPkh1Dqxnv7Eo2UHIXWnqmN3vOLDcfMU6o%2FZqzJKrlgb910F74GRHklEFwLrPaBB%2Fiy%2BlGP4kJ86%2FqlEM%2F1dQPNoE5zC2AqdczyA62kiUtAfB58fjHrttvqWSjemt682ZYV6li25ry2JVsKAgcnQKv174kp03weu8cQab9EFaZut3cmSuYrGxKsncgPWNf8qqxbAbBjpuLneDedshJTz0f0JUF29iBkazED1Aiua0MxchWq5t0UNgp0MoXVq7wuF4R9PirBVi3yJ41NCXoZWlfLL323Xjm5PV2wg1iBZqHfliIUMDgT6oMLzShL4GOqUBO%2Bam6sQSpuNcEUqveO1GpnhcXDl%2B6WYT1%2BHligX1Q6uLSNvz9iyx38FiEn0qRresFMpd7aZhKgC3UQt6igmhIJ8esuLBZoI5ACa5RA5%2FrL%2FyDeM6npHSc6Fo0%2F1Z9L%2BcicLaeuMX7rc%2BACuhrycM3aR1ouVdOuweFmDKsyGDZSB9xtzB8zZk2yMni1vHplR0Rc%2FqezqECe3lbI9TUHGbbLwk2fMq&X-Amz-Signature=65e6a4f1dd9cb97917386a16744458d946f9a6bf7c47942d5e016aa8b95e1e32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGTMMVO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCxGefrBoJ7LK23iREh6K9STG7FU%2F6EYEfgkfWWWpUx9AIgeZ36aeE7wjJYKXq4ui7nxPJhhO2eWMunT0NwXLdd2BQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEZ2%2BBMoftiQecMQSrcA5d7sQCFzluJ%2Fk1JpVrzJ3%2BvyT0LLr8L%2BorSxkwDRyEBICc6aOI4hLt5b%2FuOt8lMDJK1VzMkzKAD9%2BEzVSmntCks6gFqDe0go1FMUvhua0qEMRH2Nteh8IzwgEvWPKrnD4XjUunsKVOuWDBrcSEYWXakLT8QlsZy9upx5VS01g1kAIwg%2BgEiMK84rFwpPv%2FZaZXvUV1coTI5H%2FmikQdJFrUIvoKzYLv4wi2nHoLo%2BIKg3WdQ93qblSB0WBoF88gYDfquRTQxHKPpvjfjisE0OuG4Kiczo33A168bheTnD8n79CHGXPjLD67LpHuQ%2FtaHTcSn2t0YxkiT8T8CIa6HkYkHHJAYNYp3NC4%2B6x0%2F9FBHohPy78EncfQVRJha2Sg%2FO08hZFEta9DqnZ8uO4gt2kROqHFKgk9%2FyFl9PwJ6uht3IuO4ekRaKDXsVu9l4tERUSVezThVaXjX64guH3iKWp4Et4vTyWKpvs8QP%2F5KqX5%2B%2BlrR7K2mIwATHS1JTDavoiHBFWpshiwkFN65e18X15kz0Ouw11T25Jl7Vki%2BTeZchjiR6iJSOYq7XunNyWcXt%2BF77hPZeUuzV%2FB5fy0e44gQbOxC2YAsSA62NzRR7IhiKN9oJecMeeZXd%2F3FMJDShL4GOqUBa7Xdm1IU0Y7%2FD%2FMvEAUY2il0oP6HvbMuEky9ymwjN77I2%2Fb9Nm1c0J7ANnxvKmweW0QARn7ylKzKRb%2FsBaGGCR5tzxkR8ElkTrCa7g%2F%2BxGR%2Fv77WhWygELy98gRHfmG0Hef6hW8ds0ZLzR7r0FCKhX5JQxvcHcp5sSQ5LY4MAPww2%2FO8UiqwOmuNCxuQNW%2BGsr4aQ4iK7H7GeJh8e6Mzh2CySiWh&X-Amz-Signature=9d100f7a30889eeaca748335507b44dd770e63c49e4914511e848f040977c78f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
