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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AJYWEH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD5EtmftBiovchFgbTyOKoVrQT74wyzuVHVJi0Yc1rK1gIgLtUFyHI49l8sqSebeSfKYOfmX98Ksk%2Fib8p9IjZyo%2FoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYI8rKp6UtLLsxJBCrcA9mbrChgtz3pxzUDfVHQRfz5DmgKjGUxpZxjv6cQY8PbbA4oOcZqqdnS1q1ur%2FIlEQUxwh4t%2F5c6f16S1YgOQ5w0WQ9slf1F3MhKOnS%2B7S77OSgzPU2CqX0RqWQKpsU77PkzjmOSu1rUKToSZ6SaC4R1poAbgstfxT4m5mLeQNNxp9Nw%2Fflcil6EOObMXx4lz1s%2BAcx%2F8VUCFA2sLqeVLyaw6nzzHM9haiOWg3wuegAKGGRCpViKRTi7rQPCXQ4AFvvMKt6q208%2FA0pgxa2Wg4F1hvFF9Asjc3ZhJ9gWQIhMhLdxWEwS%2BQdqcBf7jnZylXGuH5ZekI9EIN9RERYRvw4v%2FC3QgBMX%2B27rfXcSY1ftP%2Bf1xrOM3fF7oRfM8o0dpAREg59SBwuvMceZ%2BmJfCbLw4ARJAEN%2BTiAbynr2Jq8d8WaHAp%2B47NVv1rCp6S2G3amc%2FT3wwZoylb9ZFdj7ZR9y3GN1rsr1qV8R6wed9uE6PIhWI7j0Sxed9Oem3itBQRucw%2F%2BJw%2FTK5NRxyNf2SxgaIKzZ7rO7xKcAqVA2wwJ%2FC4JWupUr5Cpf1ANUT87rutMtNPgYKJ0CCKOzSdB9tBibHwcFIyTJDsLQbcSRCZqUJwLfV6boIpwhEGBKMMrK478GOqUBmBFVEQIB7htJ8Zsm3m4GLQjCKMTEf7X0Pf%2BxMc7sQMsiIgUXZYaKPfPmFbJiENWI%2FbElaOB5NexJhNkCT39LUQKBu8t0fTSEPOBOT%2F%2BM1jZ%2BMY3RX8YnnJ7MlO2sbsfZqovCfbqpD3xXZtTn36jLemfSD7Sx8XpGafKNditgDLqITMbuShQrdnE%2BL1S%2FcYlg8xQW9duuHqw33AgC51Y1a8cHOCYf&X-Amz-Signature=5c6cb3d9c3405060d690da3a54e3f2cb49bfdcf56c5140716d8cbfcee0bdaac0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AJYWEH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD5EtmftBiovchFgbTyOKoVrQT74wyzuVHVJi0Yc1rK1gIgLtUFyHI49l8sqSebeSfKYOfmX98Ksk%2Fib8p9IjZyo%2FoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYI8rKp6UtLLsxJBCrcA9mbrChgtz3pxzUDfVHQRfz5DmgKjGUxpZxjv6cQY8PbbA4oOcZqqdnS1q1ur%2FIlEQUxwh4t%2F5c6f16S1YgOQ5w0WQ9slf1F3MhKOnS%2B7S77OSgzPU2CqX0RqWQKpsU77PkzjmOSu1rUKToSZ6SaC4R1poAbgstfxT4m5mLeQNNxp9Nw%2Fflcil6EOObMXx4lz1s%2BAcx%2F8VUCFA2sLqeVLyaw6nzzHM9haiOWg3wuegAKGGRCpViKRTi7rQPCXQ4AFvvMKt6q208%2FA0pgxa2Wg4F1hvFF9Asjc3ZhJ9gWQIhMhLdxWEwS%2BQdqcBf7jnZylXGuH5ZekI9EIN9RERYRvw4v%2FC3QgBMX%2B27rfXcSY1ftP%2Bf1xrOM3fF7oRfM8o0dpAREg59SBwuvMceZ%2BmJfCbLw4ARJAEN%2BTiAbynr2Jq8d8WaHAp%2B47NVv1rCp6S2G3amc%2FT3wwZoylb9ZFdj7ZR9y3GN1rsr1qV8R6wed9uE6PIhWI7j0Sxed9Oem3itBQRucw%2F%2BJw%2FTK5NRxyNf2SxgaIKzZ7rO7xKcAqVA2wwJ%2FC4JWupUr5Cpf1ANUT87rutMtNPgYKJ0CCKOzSdB9tBibHwcFIyTJDsLQbcSRCZqUJwLfV6boIpwhEGBKMMrK478GOqUBmBFVEQIB7htJ8Zsm3m4GLQjCKMTEf7X0Pf%2BxMc7sQMsiIgUXZYaKPfPmFbJiENWI%2FbElaOB5NexJhNkCT39LUQKBu8t0fTSEPOBOT%2F%2BM1jZ%2BMY3RX8YnnJ7MlO2sbsfZqovCfbqpD3xXZtTn36jLemfSD7Sx8XpGafKNditgDLqITMbuShQrdnE%2BL1S%2FcYlg8xQW9duuHqw33AgC51Y1a8cHOCYf&X-Amz-Signature=573f74d3470ea0e3c12da22862d12e7e1c28dba688463106b9892b4f6232560f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDSK3W4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFQzzo9N7ijZPdJAgzXrGB1RsvrYxXlRrkK0y9mVm0r4AiEA8kAg9BsriP4FiHbL%2FsMzUgY8nuZzfOZIl14XxEkXskYqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjUz6DZDexOFIq8ZyrcAxCan6jfKq8hKUrmaIyEquvx1bJKxLmKQBJBqzportS0o0XU3g48ZkyNfcoTvuTfvV1ldWisZ%2FRxNdeBUsi6FWeOEfWkXA9ALk6ipRbEe7WowqC6y1zsSKvaY7jEnJ%2FhBqmmF%2FdQ3lcCMPeGJ5ZnVHr6Om33QWCwjupVDJNpcHCuuDhXz75txzu8tu8FU4QskNlyKuHEZrTPadnG%2FHM3s%2BEpQfrkp4p4vSQbMyzXQ6wTukYtTWhFTa789x1r4oX4Tjc5xhlVG%2BAHayDHHzaSxdQBA%2FttQ7Tk1%2BT6rVde%2BKJoXyHk9ZNTpz80imxOSdgVuU%2Boylq4AerJn9SpwSWwbpgAh%2BaWh3JA5P0JXjg770xIEGuXeAzt7AVXVZdEP89h8XMIEUD2hGkJ%2F6d3O%2F9xn4ld%2FNTMjqO2QMygr6SgDzdiQmBC8FsBTFQC9ml94obKm6Irt9b4LkP6JBtX3SNaL67exMsAkZLpcmRUwGuoaPj4FzCobnaAxauQBqIalygjAadm4hS0ox2lubmxRuS%2F5yp%2FGLfU%2FX%2FIM3EifIhWNO6422vhHCUuQV7nQVrUXso4eE%2B1Zfmb9Bzr6tJmald1klfkL6QnKIVtcFs3GUGy2vKzgPObRM8BHeSVbi8%2FMOzL478GOqUB7vOQ5V88HOHHbznlkw8Lr5H4nQG7WEoV%2BkG%2Bzp%2F%2B0q6Dw6z5HbNK5cJCZWR8gzJLDV1z%2FmiMWXiYJCLkDrdTPP%2FCpza5bni%2BVvzwFv3NUreDRkyTOHTbCqSzI16cdkVNr2E0bAjLJy3Dax33QKt4jOzDmPKUQUhIrh%2FcQjxJvK3DWXltFJzKSDtGUOuLE7sMd1MhmUosxn3zXwvpSNOYrjijA4zd&X-Amz-Signature=d8b8c42928f5a20e92a5168832dad2fbef52f04467eca7d829a48a62a7d60092&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7HGRLP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDU3fGQLVkuVqSbSGPEf4Sr53schDGQYuH6QpbkQqtoJAIgBAgZGAtUQo6jChWNFoONIfex8uYP761qlga0rEUyHGMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLF6kT9adiEPVKLdMyrcA10t8C1dLUMFjbwsXEZEWMc7Hw3IzHVo%2BDOGSZwWABbz6DNzCk%2BumohQFqZJsXX94ZSyQYlPnfuB5nyYZMEpibLzfM4yDH1Hxd7LnG0umfXTmFmkYJzXzyhSwuNChq1yFym86qdOXr%2B9qqXLh0AhWDWaGupkdLvE8F9ZByr3uqs%2Bn3Z%2FqqD3nzMgtmm0HM8K%2FjDnRjbOmrH1K0lkGq%2FduXoCykr0FSYsW%2BXU2FB%2FjQPJzgjD9Pcx4qdrhvpUzkHiKfJZvQfnWmJ0pJPPJLMNeKSNWNqQXFBw%2B2eEIn80dVFFv6bOnZvWKqCSFFmwQgnQ5fMmq5Sb3z3z42yNVvAFLcehs3QJZAvqhfqqfztZTq3WFtgpAK3CJcLvFFWMDGoRYp01qqPvHMTYnsXz8G5lQfGPn73QhJ%2FnPPgZMTUmtHb8MZ06HQD44rXezKv7MGzoQf3Mg2urDxsh533PiHv2XPGPggKgK3vPuJM6TSE2LwJKVbiLOAxSqF0qlySZKWWtf4VknSjDcmgnkrPqUf0N4zGblvbWczGcXn7cM2m90xgP%2Fr9GhE6N6dHnZ3Fzqe2AQgHecQrC9Y%2BQvW80hg7PJDqr212WhEm0kgvrTWIwwlNjGbhllQ5E32c7ql7cMMjK478GOqUBrMgrJ3c%2BEtXPJdTXTgbtveFRoDuOdu3S93Q6UL1cCIumuy688Chg9DYq%2F62WW43VqRVn233LKA2qC89djm0abHC2SgNx%2B1yvIpcxrNznG5q9jEonp6I7sfeUwocTACZF6WZk%2FHnvW4piV3zyRRA0fvcl86NJwMDAHGgDmFsSV5i66FDccOF0iUr5wChA6jlPFY9zLqvLTip6AJJjHWLFEZz9SFB4&X-Amz-Signature=a131b87aaa6e67a4eb5d9c0c47f0dc4a760ce23d282120929bc70f3f52669f47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AJYWEH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD5EtmftBiovchFgbTyOKoVrQT74wyzuVHVJi0Yc1rK1gIgLtUFyHI49l8sqSebeSfKYOfmX98Ksk%2Fib8p9IjZyo%2FoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYI8rKp6UtLLsxJBCrcA9mbrChgtz3pxzUDfVHQRfz5DmgKjGUxpZxjv6cQY8PbbA4oOcZqqdnS1q1ur%2FIlEQUxwh4t%2F5c6f16S1YgOQ5w0WQ9slf1F3MhKOnS%2B7S77OSgzPU2CqX0RqWQKpsU77PkzjmOSu1rUKToSZ6SaC4R1poAbgstfxT4m5mLeQNNxp9Nw%2Fflcil6EOObMXx4lz1s%2BAcx%2F8VUCFA2sLqeVLyaw6nzzHM9haiOWg3wuegAKGGRCpViKRTi7rQPCXQ4AFvvMKt6q208%2FA0pgxa2Wg4F1hvFF9Asjc3ZhJ9gWQIhMhLdxWEwS%2BQdqcBf7jnZylXGuH5ZekI9EIN9RERYRvw4v%2FC3QgBMX%2B27rfXcSY1ftP%2Bf1xrOM3fF7oRfM8o0dpAREg59SBwuvMceZ%2BmJfCbLw4ARJAEN%2BTiAbynr2Jq8d8WaHAp%2B47NVv1rCp6S2G3amc%2FT3wwZoylb9ZFdj7ZR9y3GN1rsr1qV8R6wed9uE6PIhWI7j0Sxed9Oem3itBQRucw%2F%2BJw%2FTK5NRxyNf2SxgaIKzZ7rO7xKcAqVA2wwJ%2FC4JWupUr5Cpf1ANUT87rutMtNPgYKJ0CCKOzSdB9tBibHwcFIyTJDsLQbcSRCZqUJwLfV6boIpwhEGBKMMrK478GOqUBmBFVEQIB7htJ8Zsm3m4GLQjCKMTEf7X0Pf%2BxMc7sQMsiIgUXZYaKPfPmFbJiENWI%2FbElaOB5NexJhNkCT39LUQKBu8t0fTSEPOBOT%2F%2BM1jZ%2BMY3RX8YnnJ7MlO2sbsfZqovCfbqpD3xXZtTn36jLemfSD7Sx8XpGafKNditgDLqITMbuShQrdnE%2BL1S%2FcYlg8xQW9duuHqw33AgC51Y1a8cHOCYf&X-Amz-Signature=484c86a7f1d03c21ababcf95b038e15457a800000b34a448463a195bb7725f57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
