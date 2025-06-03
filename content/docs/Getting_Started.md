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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOOANI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIH1OfMR4gn6QmJSb%2BO4%2Fa55OSNpPCJnqn9xq0mfEx7QSAiEAjf8UWcOF9Viwy6fMOAIC7tntewPDNBNzXRII0MqySHoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIqO2rKKIIp%2FztUZLircA6glCFvCPvEUhSXuQECbO%2B0vjWNURUv1a9ji8cqbdW97xz3CTcxjGSAtG03Nr0PuDFIZWRfAPND7vT19gRK4tkv3BzCw7v8CaIUeSH8eOTgApJDq%2BaSry85otw5TBvw8KboT25yaHZhZzP0RT8L%2ByJrqOEYrXlht9ZzUXKu7tJUNcG6QihcfscLSZ3NxmG6TTVdGG6Byl4HV%2BrIeWyJz6SSXcNQasyiEP8AEtB5QqiRuS%2BqPk4tSFc%2BMHLlGBAuiYmJPIqOriJ9HUqBEH1gP8E4BTTewN2VqFnH48C2l0zh%2F3u4aMVj046aVTFkehvOrdMs3d80Ar%2FeQBodcxZsFmbrwBgr5K2JGUplvNRrN1sosJDAkLgVIZRNdZgbTVtNPlz%2BXeOLeeeq94OyyG8O06j69vGwE%2BNa9gL%2FbfxUzTdTG%2B%2B6vBOyzOIdI0qSkKf4tRvDTfVaiTOWfHPU8oEkvqsYzOAkXiGDvXf8sZLlBo5l8LPfM11N62XikhT2%2BZecVXaY8gwF55eMKOsFcNuI59Y%2FpsxpfLbdP8XlV3u2lkezFsoOxEDcj3gctOjPe5wgPLY5l3q6mWitXobYI5rySilmBjU4%2BpVsjdOKTD9o96byOe3lozvvleKT8zV6PMKyF%2FcEGOqUBgb1KQn%2FT03l1jPIwDoJ55O2KJmumemMc3UsvT%2BndiTwbIbNWxlV84UptKKOjHTCgfQt7HmPwDmq9plA2zPblERg%2Ftv5GRVUAMrdOZkXhCshYmpE68SJTHSYo5ndjzAvRDwbxtXEBDLHBAhTCcAG4D%2Bs8bOE5TJpVmeeSjuQQic3fiZO5hXnF7ScZDKUWcNaKcC8az9CsRZxmLk0nMNf%2FWxWVsSYH&X-Amz-Signature=f031c5ae35767e91bc8ab9f87ab49b41acbd03a00040f192686281610c01faa6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOOANI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIH1OfMR4gn6QmJSb%2BO4%2Fa55OSNpPCJnqn9xq0mfEx7QSAiEAjf8UWcOF9Viwy6fMOAIC7tntewPDNBNzXRII0MqySHoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIqO2rKKIIp%2FztUZLircA6glCFvCPvEUhSXuQECbO%2B0vjWNURUv1a9ji8cqbdW97xz3CTcxjGSAtG03Nr0PuDFIZWRfAPND7vT19gRK4tkv3BzCw7v8CaIUeSH8eOTgApJDq%2BaSry85otw5TBvw8KboT25yaHZhZzP0RT8L%2ByJrqOEYrXlht9ZzUXKu7tJUNcG6QihcfscLSZ3NxmG6TTVdGG6Byl4HV%2BrIeWyJz6SSXcNQasyiEP8AEtB5QqiRuS%2BqPk4tSFc%2BMHLlGBAuiYmJPIqOriJ9HUqBEH1gP8E4BTTewN2VqFnH48C2l0zh%2F3u4aMVj046aVTFkehvOrdMs3d80Ar%2FeQBodcxZsFmbrwBgr5K2JGUplvNRrN1sosJDAkLgVIZRNdZgbTVtNPlz%2BXeOLeeeq94OyyG8O06j69vGwE%2BNa9gL%2FbfxUzTdTG%2B%2B6vBOyzOIdI0qSkKf4tRvDTfVaiTOWfHPU8oEkvqsYzOAkXiGDvXf8sZLlBo5l8LPfM11N62XikhT2%2BZecVXaY8gwF55eMKOsFcNuI59Y%2FpsxpfLbdP8XlV3u2lkezFsoOxEDcj3gctOjPe5wgPLY5l3q6mWitXobYI5rySilmBjU4%2BpVsjdOKTD9o96byOe3lozvvleKT8zV6PMKyF%2FcEGOqUBgb1KQn%2FT03l1jPIwDoJ55O2KJmumemMc3UsvT%2BndiTwbIbNWxlV84UptKKOjHTCgfQt7HmPwDmq9plA2zPblERg%2Ftv5GRVUAMrdOZkXhCshYmpE68SJTHSYo5ndjzAvRDwbxtXEBDLHBAhTCcAG4D%2Bs8bOE5TJpVmeeSjuQQic3fiZO5hXnF7ScZDKUWcNaKcC8az9CsRZxmLk0nMNf%2FWxWVsSYH&X-Amz-Signature=9b85e80a3abd13d05d656428c8f7b821634f1af439fb80a9fc27f3e79679b0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOOANI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIH1OfMR4gn6QmJSb%2BO4%2Fa55OSNpPCJnqn9xq0mfEx7QSAiEAjf8UWcOF9Viwy6fMOAIC7tntewPDNBNzXRII0MqySHoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIqO2rKKIIp%2FztUZLircA6glCFvCPvEUhSXuQECbO%2B0vjWNURUv1a9ji8cqbdW97xz3CTcxjGSAtG03Nr0PuDFIZWRfAPND7vT19gRK4tkv3BzCw7v8CaIUeSH8eOTgApJDq%2BaSry85otw5TBvw8KboT25yaHZhZzP0RT8L%2ByJrqOEYrXlht9ZzUXKu7tJUNcG6QihcfscLSZ3NxmG6TTVdGG6Byl4HV%2BrIeWyJz6SSXcNQasyiEP8AEtB5QqiRuS%2BqPk4tSFc%2BMHLlGBAuiYmJPIqOriJ9HUqBEH1gP8E4BTTewN2VqFnH48C2l0zh%2F3u4aMVj046aVTFkehvOrdMs3d80Ar%2FeQBodcxZsFmbrwBgr5K2JGUplvNRrN1sosJDAkLgVIZRNdZgbTVtNPlz%2BXeOLeeeq94OyyG8O06j69vGwE%2BNa9gL%2FbfxUzTdTG%2B%2B6vBOyzOIdI0qSkKf4tRvDTfVaiTOWfHPU8oEkvqsYzOAkXiGDvXf8sZLlBo5l8LPfM11N62XikhT2%2BZecVXaY8gwF55eMKOsFcNuI59Y%2FpsxpfLbdP8XlV3u2lkezFsoOxEDcj3gctOjPe5wgPLY5l3q6mWitXobYI5rySilmBjU4%2BpVsjdOKTD9o96byOe3lozvvleKT8zV6PMKyF%2FcEGOqUBgb1KQn%2FT03l1jPIwDoJ55O2KJmumemMc3UsvT%2BndiTwbIbNWxlV84UptKKOjHTCgfQt7HmPwDmq9plA2zPblERg%2Ftv5GRVUAMrdOZkXhCshYmpE68SJTHSYo5ndjzAvRDwbxtXEBDLHBAhTCcAG4D%2Bs8bOE5TJpVmeeSjuQQic3fiZO5hXnF7ScZDKUWcNaKcC8az9CsRZxmLk0nMNf%2FWxWVsSYH&X-Amz-Signature=cbd0ac152c332f4d529a36a4542c5201a2cca82633a7fbd7accfaff8bc30a440&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZZGZJGS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDYLM7DFAknWbknLWLq9wFxfHKQVmW%2BV3au2MhjstxP4QIhAPvZxAO%2FABgYqZ3imD1btQK%2FXbjUL%2BcJx%2BMQJJCXK9j5Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwvN9YNrVBd9Lw3gvIq3APBfM4A8YTThw%2B3MU10YrYIrLY8nsQ2f9N4qJ4OZX9iYSrpr47ixIZ031FEXJu0mF9Ps79WV3iv4Zv3ugXAIofVqJT%2FJxOEl%2BujsWw%2Fuovzfo6hoD5NQTPMLI3bYyvEXFaZVztmw5D2pKqwsyLurjRNitPKx%2FravbY75PzBhtZ1MjQkS2%2BOOx4GmhYCpqcIWy1Kjt3CSYI748wlonh8BVZvUL%2FLLIf8gLjdq%2Bbq6QZmBGSlrt4vOOl0AhP12lcsPelHs8UilxN0oP%2FsPGUe0pvARa3SrJDBwpiSsugizkrlNiwWAxIxvFcizueMk5qOB1WXqpXC08PHl2bqDy%2BcnK%2BY4jk%2BWqA4QfXG3aqwagmzkd18s2hmQU%2FYAzNBNuXd5rFpVz0woJAQAi8U0IYfmbphDGMqozrasqf3pTRYAPTGe%2BaCMOFTVpsI6BY9FFsf%2F8%2Fq3infYYtRjql4wFDiVH2y91ekd%2FilySbF7XReYGNET2%2Bq06U1fGKvrKMRTgqT%2BVgJnWr%2BOjLHpca2yClG5%2F0JdJVfue80VMd4%2Bs3aKsjY0mNus4yFK%2BPYlSrqDhdJaMCYePuGgGRl3XItIPmw0gY1eutsRH93t%2BW4ty6c799qNRZbyErytFXISt0O1DD%2Bhf3BBjqkAS9LIS8i1a2VkD0w0gKbpZC1NEHd1JXQqUoP0YKmgEtQJz56vGL2XoSXwj2K0tOm91Em6%2BS3Vs2aBjiXtOwYHnrGhHcb0qUvdTelNXKFbWSU6RkDly695cbxRH2tSVFmz98jr8hwQ1zzgEQMKrF8D9HtHngrXfBiKYxkIla7BcQ34jo5OaZap%2BVnVAz%2FNxMKZx%2BJsgGrlYGMgfKhY1eZz6wslbXF&X-Amz-Signature=23395fe4add65d55ef65acfe96224aa9c45959bf8b608ead282f85883ed779a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34JJGI2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICCmuGRLybxouEWv0bW9cJDCA9XAdGvTmZB8J4hga0deAiEAgCzBmAdFLeDoTSP0%2BSwHwviGLJMTvGQPA5X8QzG0G6Eq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAYqFTQAobhb8K9kiCrcA%2BhNjvbRrhl5L1Zg4fIJFrhBmE4vUq8jUCK8fDymMmyLj4Y4q67Xp%2BeeiCSK%2BWXrRQpz9mMHfM5CVm7VJmqioXHGrl4tily%2BmF9hP0kOsThSkVracfsQlZ%2BJFmEwTsGWQMP8HAxqsSWx04W02fWQblnmXL90v6z%2FFAFX%2BAiinLtHljHeGhlP5lNMPx3zhHtyElpHXj75vfGEo2lWGNiG3CuiWsvJ6EcDndxfLfQGWqCBOBb%2F%2FJXVOuA1u0N4dPwdWPj089mQwSr8UN6DKcBdcAXu5B9SGCWOHP7SnhbBtOMNkjT%2F7eiByKN8iCyd66qQPaOgQhRzRPIUOQziY3meaQI6oobt%2FzbjgMdYixuc8c94W52OWu1%2B2JN7G7e4FcJ3KjeOpBci46s5hcvKw4GNMW35J6%2BBr7TncHHiFLUPXGHBlFlpbnkwBUzaCUjNC3PHQx9ifH0YMlGAEZA8xLknd3%2F2TTv%2FwCLpsV6ncmjuOEC8HC%2B7qBBKxQRV8dU%2B6CdQwGUAMfdNJ2KJORjDZAsa%2B%2FF3wgzutpb2eSNLEHQJzbEfWx3FwGYlpRcreRT%2FnbqoMPN15ckUpjGvfOICRnYDon6tSy5hh%2FWMZaeSlMZvodDAcsnRSvJkRuBwqWLcMOOF%2FcEGOqUBnwpVNk%2F0S8ldEtKz9XjAABwItagZMTENtzyWl5cHfc%2FNMtl7YjTAdU0cBu3%2FPGP5BDd%2BPULAk1YLKdHb0%2B7IYNEonMKvxu9GydDV3LIPuDCx8xDlwH%2FFKSUQxggBVVjy3z5ijI5mq91zQnbShoOK%2BPNdBPKDoXENpfXhqaKhdbDxLNa%2BS5R1k1JxGZkTImm9t4yY32ag%2BjTTp6K6UpPreQgGyvNs&X-Amz-Signature=4672f346409d2c8fcdf7aa62784379e7e924e0a6cb03caa551df554623d46d43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOOANI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIH1OfMR4gn6QmJSb%2BO4%2Fa55OSNpPCJnqn9xq0mfEx7QSAiEAjf8UWcOF9Viwy6fMOAIC7tntewPDNBNzXRII0MqySHoq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIqO2rKKIIp%2FztUZLircA6glCFvCPvEUhSXuQECbO%2B0vjWNURUv1a9ji8cqbdW97xz3CTcxjGSAtG03Nr0PuDFIZWRfAPND7vT19gRK4tkv3BzCw7v8CaIUeSH8eOTgApJDq%2BaSry85otw5TBvw8KboT25yaHZhZzP0RT8L%2ByJrqOEYrXlht9ZzUXKu7tJUNcG6QihcfscLSZ3NxmG6TTVdGG6Byl4HV%2BrIeWyJz6SSXcNQasyiEP8AEtB5QqiRuS%2BqPk4tSFc%2BMHLlGBAuiYmJPIqOriJ9HUqBEH1gP8E4BTTewN2VqFnH48C2l0zh%2F3u4aMVj046aVTFkehvOrdMs3d80Ar%2FeQBodcxZsFmbrwBgr5K2JGUplvNRrN1sosJDAkLgVIZRNdZgbTVtNPlz%2BXeOLeeeq94OyyG8O06j69vGwE%2BNa9gL%2FbfxUzTdTG%2B%2B6vBOyzOIdI0qSkKf4tRvDTfVaiTOWfHPU8oEkvqsYzOAkXiGDvXf8sZLlBo5l8LPfM11N62XikhT2%2BZecVXaY8gwF55eMKOsFcNuI59Y%2FpsxpfLbdP8XlV3u2lkezFsoOxEDcj3gctOjPe5wgPLY5l3q6mWitXobYI5rySilmBjU4%2BpVsjdOKTD9o96byOe3lozvvleKT8zV6PMKyF%2FcEGOqUBgb1KQn%2FT03l1jPIwDoJ55O2KJmumemMc3UsvT%2BndiTwbIbNWxlV84UptKKOjHTCgfQt7HmPwDmq9plA2zPblERg%2Ftv5GRVUAMrdOZkXhCshYmpE68SJTHSYo5ndjzAvRDwbxtXEBDLHBAhTCcAG4D%2Bs8bOE5TJpVmeeSjuQQic3fiZO5hXnF7ScZDKUWcNaKcC8az9CsRZxmLk0nMNf%2FWxWVsSYH&X-Amz-Signature=7f14a3cb30e1d40454f60cf40a8e12a34baec1657eae6f5cc54e525ea52d5de8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
