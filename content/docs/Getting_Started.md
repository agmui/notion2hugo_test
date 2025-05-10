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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EQJQWB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxdp1uPgdP1%2By3KhnB0fdeJzsgH2HrYc4JfjBT9NplQAiEA%2Bjg8EhsOpA%2Fs6bgOkQa6PL8K2kpfvs7V2loYSdPkjqUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg3utg1%2Bm4VuZOUWyrcA6T6PX4hvhpKkWaeAKhc43zw3ZQTIko3wKCJYYgMAXuYskaYLXNT9wMABPeDGwEIibN0dH8vnz9bHf82HPF%2BmDqyhxktG9Q93z55R%2BePMbVfVswX4IaL2GRK8ipyStwpq9NewIElZyi4jnw9YDlYWau5yT0Xlx5e5SuHBZZTixDbdkQzaOkpMB1N4rUc3HBQhBcDOc6XyTY7pIL0g43KjEImiJUb4CUkqAAUGxs2scUTepPJKGyo59l8H2VwowJ%2Bq5IJvYUCIQwG4YCx8vXK46qDXn650MU3jy1Cz5v%2FSyrS2YPSED45vahIOiEH5ckInwTQKsCQzisOzEs0bXsXpXxCX1UzEWzqDh6Kmw91pgzR%2BPw6nAyeMEK3F%2BF4Maa%2FuCwN%2B38iSFIj7CTeJVF0h3wFP9ayQo3WaKk3MnRNl%2BWSIzun0v5pya50pfKLFJrLbz1mYlSG2ph%2F3Xjh8n4SXEFsJh%2FldoptWzOABGkYB9MLUqoW3NdkG5lXis2meaNhxEmRsqyZtJGPY1Wk65bh1G4faGG9%2Ba8HF90TSnlUla1vBNjksXylkr2PaOCt4IZeUg7NdEAwlpbRXuSiJGtTuP9RHvCM2aS06M6ytOLIdcNpi8DRIpb%2FEk0eT9Y4MIm7%2B8AGOqUB2iG%2BY3FmMJnSfiozNjhlXt1wXJikex7U8jbBg2niy5ConWC4ZT8rhFITaX6hjsrm8ZKVk5ZJF%2FQUyOwjALzLEhxb%2BkTbE4yaKPD42Ju2A9gzuI3JAvL1ZRJc48WeHYytmEqVVNWXKjkvThNI3WjyVJPqS0vQZnuDpC5GzIEE%2B8Kww%2Bu0A6ZJDj6z4WmGERoqNwKQ4EYpsxvXf0SsmozgHdamdfel&X-Amz-Signature=caaff028f423d61c8d8663cf6e825d91a5e2646a1e1fc0026e2fe0b9d25d13ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EQJQWB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxdp1uPgdP1%2By3KhnB0fdeJzsgH2HrYc4JfjBT9NplQAiEA%2Bjg8EhsOpA%2Fs6bgOkQa6PL8K2kpfvs7V2loYSdPkjqUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg3utg1%2Bm4VuZOUWyrcA6T6PX4hvhpKkWaeAKhc43zw3ZQTIko3wKCJYYgMAXuYskaYLXNT9wMABPeDGwEIibN0dH8vnz9bHf82HPF%2BmDqyhxktG9Q93z55R%2BePMbVfVswX4IaL2GRK8ipyStwpq9NewIElZyi4jnw9YDlYWau5yT0Xlx5e5SuHBZZTixDbdkQzaOkpMB1N4rUc3HBQhBcDOc6XyTY7pIL0g43KjEImiJUb4CUkqAAUGxs2scUTepPJKGyo59l8H2VwowJ%2Bq5IJvYUCIQwG4YCx8vXK46qDXn650MU3jy1Cz5v%2FSyrS2YPSED45vahIOiEH5ckInwTQKsCQzisOzEs0bXsXpXxCX1UzEWzqDh6Kmw91pgzR%2BPw6nAyeMEK3F%2BF4Maa%2FuCwN%2B38iSFIj7CTeJVF0h3wFP9ayQo3WaKk3MnRNl%2BWSIzun0v5pya50pfKLFJrLbz1mYlSG2ph%2F3Xjh8n4SXEFsJh%2FldoptWzOABGkYB9MLUqoW3NdkG5lXis2meaNhxEmRsqyZtJGPY1Wk65bh1G4faGG9%2Ba8HF90TSnlUla1vBNjksXylkr2PaOCt4IZeUg7NdEAwlpbRXuSiJGtTuP9RHvCM2aS06M6ytOLIdcNpi8DRIpb%2FEk0eT9Y4MIm7%2B8AGOqUB2iG%2BY3FmMJnSfiozNjhlXt1wXJikex7U8jbBg2niy5ConWC4ZT8rhFITaX6hjsrm8ZKVk5ZJF%2FQUyOwjALzLEhxb%2BkTbE4yaKPD42Ju2A9gzuI3JAvL1ZRJc48WeHYytmEqVVNWXKjkvThNI3WjyVJPqS0vQZnuDpC5GzIEE%2B8Kww%2Bu0A6ZJDj6z4WmGERoqNwKQ4EYpsxvXf0SsmozgHdamdfel&X-Amz-Signature=9fae5be6d7d9bce8badeee1801a5569306c9a23986782f4865904d4c67100ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EQJQWB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxdp1uPgdP1%2By3KhnB0fdeJzsgH2HrYc4JfjBT9NplQAiEA%2Bjg8EhsOpA%2Fs6bgOkQa6PL8K2kpfvs7V2loYSdPkjqUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg3utg1%2Bm4VuZOUWyrcA6T6PX4hvhpKkWaeAKhc43zw3ZQTIko3wKCJYYgMAXuYskaYLXNT9wMABPeDGwEIibN0dH8vnz9bHf82HPF%2BmDqyhxktG9Q93z55R%2BePMbVfVswX4IaL2GRK8ipyStwpq9NewIElZyi4jnw9YDlYWau5yT0Xlx5e5SuHBZZTixDbdkQzaOkpMB1N4rUc3HBQhBcDOc6XyTY7pIL0g43KjEImiJUb4CUkqAAUGxs2scUTepPJKGyo59l8H2VwowJ%2Bq5IJvYUCIQwG4YCx8vXK46qDXn650MU3jy1Cz5v%2FSyrS2YPSED45vahIOiEH5ckInwTQKsCQzisOzEs0bXsXpXxCX1UzEWzqDh6Kmw91pgzR%2BPw6nAyeMEK3F%2BF4Maa%2FuCwN%2B38iSFIj7CTeJVF0h3wFP9ayQo3WaKk3MnRNl%2BWSIzun0v5pya50pfKLFJrLbz1mYlSG2ph%2F3Xjh8n4SXEFsJh%2FldoptWzOABGkYB9MLUqoW3NdkG5lXis2meaNhxEmRsqyZtJGPY1Wk65bh1G4faGG9%2Ba8HF90TSnlUla1vBNjksXylkr2PaOCt4IZeUg7NdEAwlpbRXuSiJGtTuP9RHvCM2aS06M6ytOLIdcNpi8DRIpb%2FEk0eT9Y4MIm7%2B8AGOqUB2iG%2BY3FmMJnSfiozNjhlXt1wXJikex7U8jbBg2niy5ConWC4ZT8rhFITaX6hjsrm8ZKVk5ZJF%2FQUyOwjALzLEhxb%2BkTbE4yaKPD42Ju2A9gzuI3JAvL1ZRJc48WeHYytmEqVVNWXKjkvThNI3WjyVJPqS0vQZnuDpC5GzIEE%2B8Kww%2Bu0A6ZJDj6z4WmGERoqNwKQ4EYpsxvXf0SsmozgHdamdfel&X-Amz-Signature=084a5b4ae53bb51344fbd94ddf604b17ea40d98b1a731d156c20b9c5389b219d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MFCPGTT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8HRA0l5z1QpsBJEt3LtDdCnQFw2GYIKx6DvYC8qI7jgIgFyLRKzGky%2BpcmnqT1a2HswtuBuh2gUCWXnK3EQYsIzkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKwJNyIgO%2FxSvpMSircA2icgPtW1k8U02JOk9dPjYSZRJLN3EISsuljNoF3enzwQZX4TnzLJiz31DXtZOKXA%2B4AY82ZJQ07cT26WqW0CcCvmcbLVANsCZ%2BX2KEwp8QSV6e2gUaxcWBF0aHH8YSGxU6HBXcnoxzkr0JfxtXsUPHsm2DoUwZKoc4QoNKNF9Oj4C%2FTRO0OPT4vCpCCj31VBfd0l1POHmMG%2Bj60PoBdRymcYzPVPzbisNBxHBSNarUaqfzOHT7t1CUV3xljNtqUM56WKsaw%2Bsl%2F0lV5Dgvh0eOOW9ZZXAfxjz3SgMadOZ8MBG%2FMGylB1ss00PbOZ7w9g3YGYDkWonOwg77T24UJLrrm74yDXaCv9Dy20UAc%2FfJBuGbn20B5I4VnqmcW79ErA%2F0XRh9PueZETbK5xhHDdQOTmkLVQroOWQlgZcwzFnqsJGpT5Q6Ivfn71rnVCfa71zPq1SvFNHDiLuGbA2Odd8nax86HwvuWe7x5aWNn2xHlC69FDdmkQaqFFXNwQZdMAcahisfSuw8vFlBJV1wIOKHtCRcP8E7R566ozwWQKtqdr%2BzY9uYJ3g8G9%2BFmnbYZkJ9vvB1M%2BcPNIeM%2FzwQBD3kBQroi8jtuUsfVBv7lzINVWh0FDexD9whsHAmeMNW6%2B8AGOqUBLy5ywIvoCOcU2tOt6E925bBE4ZmpTgEDXaYvh1869zvDerfD3R33F90l9o039LGydqh7ZYoRB0VHK4xAJqe7YtReHDaqzQifVr64oU6gK6s1rQfpBVWJtk57wWkpYHdP6jYO%2Bl1hwj5FCeS0R3B9CxrNL2BvZBq0Qocm%2BINJu%2BpwlPv5BBsqFWuQdVIehVZIg%2FSWw1aiPzfOsVKH4y0cpbnJguat&X-Amz-Signature=24b8adf8ea7e9c685f60704a1c268648db479c92f41ece3522095467b3693248&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5MS3HM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqChgQ8wUBmIRfpECy53Zdn%2BYMV00PaOiVW4%2BCd4zAlQIhAN0F%2FOBsDidofdQ2Ln7Wl8pIMDtxhxvUPQUVo3k2Ia8eKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZq5jInsw0NwXS9e4q3AOIcE01T%2BfhqOQJcdnYd3YXhPq2gcVXbNJq3hZ3MAoofZ7AK9ovQA1hDtY18yhCqaT4lmkSgT9hEbmPciISOKP83xO%2F1XxJ74R5TjJFMpjUkAj9OnQXDlN3vG3CY6HyHNk4iV4HAMpkgQ4rSVKrZEz%2FoLwBNSAjxlSTYu12Bz%2B4R3zzqQQZmgCfYkXetI4S9VBR%2Ff7Qdn66ikGqkdNo2R1De9A0YnA7QzB1CuwDK2cWSum6VmvwWUklFlYYtplQSIi%2FN3aUuoPG1i8dctRheajAg1kYZ7umdAGWqr%2BbTwBpfrUtS8Ca1BLb2bneYa6JWTUtOAcQHn%2BfAVWlmiDTo3ncmR0xqQ7rj8hfAXp6lt%2Bo%2FpPds%2BrvZyHgumuWuJLa7V8G92mn7QnhIYokPqiW%2F98KzIldsP7FXFp%2BWg8bY6gWQzRn9I2FIZ62Wt7gYu2Pv44lMKor6WBNtwqCnTBN2z3OF4WyoxshQsJeAuol5IC0nAzwlJYnJyWGjawz%2BIdH49QwhnZg3k08xpIhIe8RuCRVHIZpIdjsB%2BHlpaDQXekdX1epq3bLEQ6H8TT7xYW%2Ftm6Z5kUUIJrz6B%2FQIDuiFmbti8afrDEatLjNuQXI4tno8k%2BJDj1F9s3NpzWbaTDSuvvABjqkAe2o%2BBWvjSzK2c%2Bc4vwh12XM2SYybwDnnc4OCL3DA2pRs%2BrP6zxw5adUoyZGnqZI9hZEl8JzA4Pp4G9%2BNCfAvRI0BdpBHiv7iKHzOJCxl7TOFysNWmq7OwviAxy0%2BQo%2FGOoWa5mHrlgsYOeYSxAHEi5hlWRBWXdSkjEeZxCydktEFcU7LhLF3jiF3DVYT7e3AXXlumAYRnil7FEmQv%2BPlQzwPf6q&X-Amz-Signature=83bb8cb8b1e93863aa7a67c7a6133ca7ea35fbdbfdd2c7814ac8cd00fa487f00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EQJQWB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxdp1uPgdP1%2By3KhnB0fdeJzsgH2HrYc4JfjBT9NplQAiEA%2Bjg8EhsOpA%2Fs6bgOkQa6PL8K2kpfvs7V2loYSdPkjqUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg3utg1%2Bm4VuZOUWyrcA6T6PX4hvhpKkWaeAKhc43zw3ZQTIko3wKCJYYgMAXuYskaYLXNT9wMABPeDGwEIibN0dH8vnz9bHf82HPF%2BmDqyhxktG9Q93z55R%2BePMbVfVswX4IaL2GRK8ipyStwpq9NewIElZyi4jnw9YDlYWau5yT0Xlx5e5SuHBZZTixDbdkQzaOkpMB1N4rUc3HBQhBcDOc6XyTY7pIL0g43KjEImiJUb4CUkqAAUGxs2scUTepPJKGyo59l8H2VwowJ%2Bq5IJvYUCIQwG4YCx8vXK46qDXn650MU3jy1Cz5v%2FSyrS2YPSED45vahIOiEH5ckInwTQKsCQzisOzEs0bXsXpXxCX1UzEWzqDh6Kmw91pgzR%2BPw6nAyeMEK3F%2BF4Maa%2FuCwN%2B38iSFIj7CTeJVF0h3wFP9ayQo3WaKk3MnRNl%2BWSIzun0v5pya50pfKLFJrLbz1mYlSG2ph%2F3Xjh8n4SXEFsJh%2FldoptWzOABGkYB9MLUqoW3NdkG5lXis2meaNhxEmRsqyZtJGPY1Wk65bh1G4faGG9%2Ba8HF90TSnlUla1vBNjksXylkr2PaOCt4IZeUg7NdEAwlpbRXuSiJGtTuP9RHvCM2aS06M6ytOLIdcNpi8DRIpb%2FEk0eT9Y4MIm7%2B8AGOqUB2iG%2BY3FmMJnSfiozNjhlXt1wXJikex7U8jbBg2niy5ConWC4ZT8rhFITaX6hjsrm8ZKVk5ZJF%2FQUyOwjALzLEhxb%2BkTbE4yaKPD42Ju2A9gzuI3JAvL1ZRJc48WeHYytmEqVVNWXKjkvThNI3WjyVJPqS0vQZnuDpC5GzIEE%2B8Kww%2Bu0A6ZJDj6z4WmGERoqNwKQ4EYpsxvXf0SsmozgHdamdfel&X-Amz-Signature=63183be67f83426fbcdd17e5ab2481bad4b0e0bae154ef23d86faf3bf47d8873&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
