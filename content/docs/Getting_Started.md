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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQKGZHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyT%2BFY2TCrjQGx8znE7P%2BDFW5FCTorjnZKqy3TBAx6JwIgckvhkn7IFpPLufvx6RNLgh4zPfn%2FSJNEXKk3BBhLc8Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIvdIBEIHZuxHPN8ECrcA7DtWBXiYWycVK%2BuLE%2FGdpT4uh2qMCyLWi3ZK68PqeUHc7hD80BCCHWgAUGOidQ9pjQoKQCDsHDG%2BHkDwox6kwo6IpY4QFgkjBj8gcaJGh0%2Fcnj7NcyDqea5QwVklhOxqNysZpSOaSsNv1jg08YiytFeyl7KH19PVtWm3wkuX%2FUGqfFbh8g2%2BIQa4CfZOdjaLtWL4gZ6iqZj5%2Fk%2F4vNIhQr1eevT%2BnANjQwHWc7f7EVZfV3utNKBXV0iJVLJjS3GJViTSKZ%2BX8J%2BXHHYkth8Wk%2Fpq1omXF6UW38GUN5RDlpmCyFp4msEufVnCFvzM04fDWYCts8a%2BfH523K8b1k2Z3KBR3TfcTLvk7cZQvRZnmqVcVSmRIZfkj2C1%2BVDWQolb94%2F%2BX3mgCU36yXO4CHZHAjzU%2FbwKgAZvb9dGmmVwwzvcZSX8Od8PUjtpJG2cyQ%2Bk4CH%2B3lzydASXFMuPiG6yqR56Mj3AnSdBRZpZ%2Fy93HMCAjSXPpcCAzGQNoza7GGe%2BA61sZx76RMAguS5zGi%2B3tl8HPIHXubalMDahdp13cjvPypaW7r83KpOatVDUxDQnLgidAI5rvFfTJFLzAwnc6ayOL2bYTVHW09GU1ANnXAIOOjFSKGIJSWJNGdKMLDPk8EGOqUBp6ONXy%2F0Nm2BMJI%2B%2FGsHyO5CE%2BHPZa4f9DqcN51XP4INMiYWoG8Ylxenm6OGFSJJnu%2B7pns8TokTELTIaORIac1TWlFh%2BOw03zPHyoKMWfMAEpv1B7pzWMctvTU%2FvlJkpdEeMiw9X%2Fz5Ar7aDPqNDkH1T8kt4B6zOSKjFD%2BfBxf8Gakk39J8tXBug9Mgcu2hK4dy9hMCGSHhnWJLISjdQ%2BTYi%2Fnm&X-Amz-Signature=a4341e366eee2b5bf8b10d41cb03de04f9deda0c358805c461c2002479ca7145&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQKGZHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyT%2BFY2TCrjQGx8znE7P%2BDFW5FCTorjnZKqy3TBAx6JwIgckvhkn7IFpPLufvx6RNLgh4zPfn%2FSJNEXKk3BBhLc8Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIvdIBEIHZuxHPN8ECrcA7DtWBXiYWycVK%2BuLE%2FGdpT4uh2qMCyLWi3ZK68PqeUHc7hD80BCCHWgAUGOidQ9pjQoKQCDsHDG%2BHkDwox6kwo6IpY4QFgkjBj8gcaJGh0%2Fcnj7NcyDqea5QwVklhOxqNysZpSOaSsNv1jg08YiytFeyl7KH19PVtWm3wkuX%2FUGqfFbh8g2%2BIQa4CfZOdjaLtWL4gZ6iqZj5%2Fk%2F4vNIhQr1eevT%2BnANjQwHWc7f7EVZfV3utNKBXV0iJVLJjS3GJViTSKZ%2BX8J%2BXHHYkth8Wk%2Fpq1omXF6UW38GUN5RDlpmCyFp4msEufVnCFvzM04fDWYCts8a%2BfH523K8b1k2Z3KBR3TfcTLvk7cZQvRZnmqVcVSmRIZfkj2C1%2BVDWQolb94%2F%2BX3mgCU36yXO4CHZHAjzU%2FbwKgAZvb9dGmmVwwzvcZSX8Od8PUjtpJG2cyQ%2Bk4CH%2B3lzydASXFMuPiG6yqR56Mj3AnSdBRZpZ%2Fy93HMCAjSXPpcCAzGQNoza7GGe%2BA61sZx76RMAguS5zGi%2B3tl8HPIHXubalMDahdp13cjvPypaW7r83KpOatVDUxDQnLgidAI5rvFfTJFLzAwnc6ayOL2bYTVHW09GU1ANnXAIOOjFSKGIJSWJNGdKMLDPk8EGOqUBp6ONXy%2F0Nm2BMJI%2B%2FGsHyO5CE%2BHPZa4f9DqcN51XP4INMiYWoG8Ylxenm6OGFSJJnu%2B7pns8TokTELTIaORIac1TWlFh%2BOw03zPHyoKMWfMAEpv1B7pzWMctvTU%2FvlJkpdEeMiw9X%2Fz5Ar7aDPqNDkH1T8kt4B6zOSKjFD%2BfBxf8Gakk39J8tXBug9Mgcu2hK4dy9hMCGSHhnWJLISjdQ%2BTYi%2Fnm&X-Amz-Signature=4086466bbb7f5020369beb62ab007499ba4c9a96d381b2b36629d493a57a4c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQKGZHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyT%2BFY2TCrjQGx8znE7P%2BDFW5FCTorjnZKqy3TBAx6JwIgckvhkn7IFpPLufvx6RNLgh4zPfn%2FSJNEXKk3BBhLc8Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIvdIBEIHZuxHPN8ECrcA7DtWBXiYWycVK%2BuLE%2FGdpT4uh2qMCyLWi3ZK68PqeUHc7hD80BCCHWgAUGOidQ9pjQoKQCDsHDG%2BHkDwox6kwo6IpY4QFgkjBj8gcaJGh0%2Fcnj7NcyDqea5QwVklhOxqNysZpSOaSsNv1jg08YiytFeyl7KH19PVtWm3wkuX%2FUGqfFbh8g2%2BIQa4CfZOdjaLtWL4gZ6iqZj5%2Fk%2F4vNIhQr1eevT%2BnANjQwHWc7f7EVZfV3utNKBXV0iJVLJjS3GJViTSKZ%2BX8J%2BXHHYkth8Wk%2Fpq1omXF6UW38GUN5RDlpmCyFp4msEufVnCFvzM04fDWYCts8a%2BfH523K8b1k2Z3KBR3TfcTLvk7cZQvRZnmqVcVSmRIZfkj2C1%2BVDWQolb94%2F%2BX3mgCU36yXO4CHZHAjzU%2FbwKgAZvb9dGmmVwwzvcZSX8Od8PUjtpJG2cyQ%2Bk4CH%2B3lzydASXFMuPiG6yqR56Mj3AnSdBRZpZ%2Fy93HMCAjSXPpcCAzGQNoza7GGe%2BA61sZx76RMAguS5zGi%2B3tl8HPIHXubalMDahdp13cjvPypaW7r83KpOatVDUxDQnLgidAI5rvFfTJFLzAwnc6ayOL2bYTVHW09GU1ANnXAIOOjFSKGIJSWJNGdKMLDPk8EGOqUBp6ONXy%2F0Nm2BMJI%2B%2FGsHyO5CE%2BHPZa4f9DqcN51XP4INMiYWoG8Ylxenm6OGFSJJnu%2B7pns8TokTELTIaORIac1TWlFh%2BOw03zPHyoKMWfMAEpv1B7pzWMctvTU%2FvlJkpdEeMiw9X%2Fz5Ar7aDPqNDkH1T8kt4B6zOSKjFD%2BfBxf8Gakk39J8tXBug9Mgcu2hK4dy9hMCGSHhnWJLISjdQ%2BTYi%2Fnm&X-Amz-Signature=6f8d06bc9fe1b5e54909e78efffc8eca3e5a64b61b29ace846419b84b4db978d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IMOIB7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFA5gSF7TkrICdsgauHxhb9l2WQEJ9275qJNYDJUx76FAiAqiY736rhPo6r%2FrciDT%2FKCvf8wynoqmjJhzZCqCB3ToCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM8zYVb5Wp%2F9JX3X1lKtwDIpvgu8dxEdDNIJUPPDTtTrX81mNEQIlfXCO9FaEDKkfwQ4bz20EjoXvaThdI5fgULo5RGWyvDLeJHp7Ic9oHaK%2FNXc%2F2hEk%2FjMBLQrf9blEEhfBp%2Fve3xBrKzWyprgVUktxGcdBqo%2BvajeyxaY0KzILF%2Bgk3OyUzdKh6XDJSI1NsLKzbbB2xBAtTlpUM3tUyFK%2FtgtA0LCK9%2FHmi4IWHNPjON1DmYqqOj79JPEvDI%2FZ3%2Bs5a4202MdZAc7IALeiomCU5JPl6hpxYceHqLFzFzlhm7eUnZZE0%2Fv5edN3at9NknHoq1qHrJFppdd7BSAXJpTjQcgkDSlpDkP1M1FNu%2BGTt4qeDMqQvJ8Z%2BnX5aABVAqxhj42qkIKKf%2BqRuDc5JyU6ADEvEDaU%2BBQcPRwlT%2BDZRx2D%2FrfZPKEx5nLB5KAWRM9IhvUCuKr0EbZfcqjDhNFOvdZES7D%2F42IIQhsYmqT%2BvamcjfZDohX1GpAoKU03W8yUuN0nsy10dvUWeT%2FQ63m75yZff0lw2jJf27riopJ4hKiGrF1qHd8hP0UK2AjtIRQRb2WNsFGvu4tl43lkQjIuRzLU4XlbpThilx7HjPnG3wYN84I1N5SqjReFyye2bhj%2FcPV1uSLBJ1tcw4c%2BTwQY6pgFVq4HesRyACNxrcGf77nPN46IZtFZZgd1xTiwgTydXzcOKkVtlDezU%2BT%2B%2BklOXkBCdmO3vOtKJ194JQAIIcnhXaxmMJ9ObVX6LOwAWzSLOAb5quzE3%2BNysySyFXaxcNzk3bjSL5scwChwvXKsIHq9gVw9Nwbd%2B1ncTRUgL4YNSojp3i7UrHHqhGWI0paFOcdJxu1ueDLDgBYS4Rp%2FQ0P%2B24b%2BOKALT&X-Amz-Signature=41533954c0af2f5c82610ab3c2515a53be66452697e9626ede4b4f785ee77080&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43TJSCB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCua8BNf3wGH%2FLE78v7uYQyShC%2BnkUlkw1nU%2F1NP1nbFQIhAKZ07ILabTDqsFTHbgGroz%2Brhhn7Af5cZGm47vcRPV1JKv8DCBwQABoMNjM3NDIzMTgzODA1IgyIql7pqJWYQAK4%2FhQq3AMoFbUMF2FynInmL%2B7za7HVvPHXtPgLcAi5SCmxuZoMO%2FjfaPCGJXWbyGucMkPRY2ouJI4nV4NTKPfgIgP%2Fx2h16cLGciAphN00sxZzGs%2FvRTiS5KZS2e8%2Bl%2F%2BLN4YeIN7R1ufHRtWTX0HU9tYy%2FOsw6S9bL%2Br6ycyPNHhfgcXnxkqN4hVfGROpQ7HHN0C8IWXCiCGJCvwak6Xh%2F8%2BlEdNjwzWlsRy4Iarsof%2Bn4kqfLQNDJbq3cEOqvhWj08TdE%2FARY%2BZBGyeej5ZFeOc3DINHAihvlrDI%2BPQQCHRgUfJ6xKdbCw5N1EBUaLb6kDDaEqaeKQbsv3W7tGXDxqT9bV%2BtcuyY2NW%2B60DI7lZM1DKbQWHmLnJALSZy3c8qQfSLt%2B4Cc4%2FHcwtCJxfQdIaE5eDBcAwewAfHjPHGzlMmbp4opNR9hqEgsCZAKr6bv3tjU0EwUfa7UYe9YvnRJQ685rePcE7ZCnGfMD6%2FaZfJqNp0qoD7TsJDHXUu3OPokubApt%2FafSb5J52CUHZWS4lMLwQQ490h27%2FY5G6BzLLng3C8Us%2B%2FzRJPupt2rSBDYXFnjaxRLPOy6FBni2SeYChEh8k%2FATnX%2Fj23niusAe%2F2R5OKOis8wzF5EI%2B9WYh2AjCN0JPBBjqkARlB1LnecggWTw0ZSAxKj1GIjtPFWzlGwvj40%2Bhvtu%2Fi17U7lDSB5UiZ6He86gXEEc5irIwefY8%2FT31DmQ1LeEB4Q4xLaqzer8N%2FfRrC4sge6eR0YGK6sI6TOoNmMrW5QhdViyU0ixNHo2dld91xVMvp%2BHOVC0d%2F06DOWSbvasHYQJZ5B6u5S8TBZlLWBS%2FAooNDJAfhi7nIoE7whYuMdjRn90D2&X-Amz-Signature=b540725f4653c09493fef26bdb0c76d1bd57770dc273299096bacbd261c02646&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQKGZHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyT%2BFY2TCrjQGx8znE7P%2BDFW5FCTorjnZKqy3TBAx6JwIgckvhkn7IFpPLufvx6RNLgh4zPfn%2FSJNEXKk3BBhLc8Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIvdIBEIHZuxHPN8ECrcA7DtWBXiYWycVK%2BuLE%2FGdpT4uh2qMCyLWi3ZK68PqeUHc7hD80BCCHWgAUGOidQ9pjQoKQCDsHDG%2BHkDwox6kwo6IpY4QFgkjBj8gcaJGh0%2Fcnj7NcyDqea5QwVklhOxqNysZpSOaSsNv1jg08YiytFeyl7KH19PVtWm3wkuX%2FUGqfFbh8g2%2BIQa4CfZOdjaLtWL4gZ6iqZj5%2Fk%2F4vNIhQr1eevT%2BnANjQwHWc7f7EVZfV3utNKBXV0iJVLJjS3GJViTSKZ%2BX8J%2BXHHYkth8Wk%2Fpq1omXF6UW38GUN5RDlpmCyFp4msEufVnCFvzM04fDWYCts8a%2BfH523K8b1k2Z3KBR3TfcTLvk7cZQvRZnmqVcVSmRIZfkj2C1%2BVDWQolb94%2F%2BX3mgCU36yXO4CHZHAjzU%2FbwKgAZvb9dGmmVwwzvcZSX8Od8PUjtpJG2cyQ%2Bk4CH%2B3lzydASXFMuPiG6yqR56Mj3AnSdBRZpZ%2Fy93HMCAjSXPpcCAzGQNoza7GGe%2BA61sZx76RMAguS5zGi%2B3tl8HPIHXubalMDahdp13cjvPypaW7r83KpOatVDUxDQnLgidAI5rvFfTJFLzAwnc6ayOL2bYTVHW09GU1ANnXAIOOjFSKGIJSWJNGdKMLDPk8EGOqUBp6ONXy%2F0Nm2BMJI%2B%2FGsHyO5CE%2BHPZa4f9DqcN51XP4INMiYWoG8Ylxenm6OGFSJJnu%2B7pns8TokTELTIaORIac1TWlFh%2BOw03zPHyoKMWfMAEpv1B7pzWMctvTU%2FvlJkpdEeMiw9X%2Fz5Ar7aDPqNDkH1T8kt4B6zOSKjFD%2BfBxf8Gakk39J8tXBug9Mgcu2hK4dy9hMCGSHhnWJLISjdQ%2BTYi%2Fnm&X-Amz-Signature=0957832a199637c003db5e8bf4e47cf2f06f2ebda3139c12c185f7b203f04a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
