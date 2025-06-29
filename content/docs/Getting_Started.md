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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7XWCV6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfnSZZ4Z%2F98XJAOy5BpRY0zn%2BHZw75OQiGj3YoCi2%2BAIhAOGKB9tKBUJIOcfzGrX09FSgQooMFesuNDLPW9U8COp3KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywa%2FGKxk9v2ByV25Mq3ANX%2F5j6T2s5A2XEC0isPA17pMk3KsRVZE%2F4Vl8MddbdwdykFmskEFQ%2FkRMdHttRVIbJYkxbT5FrVTFZYozaMEPo7yvDClXeNoyfTwwwfjc6UHcBRmvkpK9WJkPJB%2FbFOXNoeku3Id4easTxaXRLWu0NnWHtfdaKOOQPNMFDSJBxTD0jlYoc0lIQUVXq%2BmK63HAbao3BYeCsHzmiYL9q8RdSTCow4ZQXJa1wYfh0MHSYODFRfuR7PR4mg0AIar%2BwtaYMjP7zgzXLGZfo7a6CtRNDPfH4fAvsIhAQZIYFJR5Kf9MX50Vv4opEJgidtMcSNYSJ6YJwAWMVnWHhIaNYAL6lmIC8t21P69FOcDnfI2CIGlGlj8R2qdpcwukAOmb%2Bl26XgvQukd2VVV4rSJSNAgbSBbeB8k%2BnAFhJiJ5mdu0sDuQrv4QPLyp7UIMhcRBjCrHIEkiVxSF28lhSVTQNXkIcH8mQ%2BfPvpxJ02hiyyltO3r1mRbH3ql%2Fn7znE0gWWZxwPxl2s2lmKPwYUUbRWQcd28oknXzEVOksx17eNCEr57XacQeT40MWwDfsMgY8sVrLaGgMGUJpAkZI5NqKUSayeRNJz63FCqZQzACfvJU89KCRNC7uRrTJXf3%2BMTjD13oXDBjqkARpQ1%2FmvXYqZ9COZKQTv98OTaO1SfZ78Gb7sVs9s%2F1SwH43Len8yexrSEiFBTM4mxMs2rGc54VKWsVtliJujUAPZ7Vdp7v0wgGxzI6bdfEJxCXQ0%2FNWP%2FURnKNNpzgdFrZW14tzMWWM8%2B1HDx2rm%2FL4PSo3azUj9LhrOM%2BQSz7NgpSKRfWH0rEnsDHAwKqVHvjruJeNI0Rl0KWSgRKk%2FTcmaK0iT&X-Amz-Signature=5f680770f53a24d2f10fff8fc0ab94fc0363a09a75226743c3cad60aee547fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7XWCV6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfnSZZ4Z%2F98XJAOy5BpRY0zn%2BHZw75OQiGj3YoCi2%2BAIhAOGKB9tKBUJIOcfzGrX09FSgQooMFesuNDLPW9U8COp3KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywa%2FGKxk9v2ByV25Mq3ANX%2F5j6T2s5A2XEC0isPA17pMk3KsRVZE%2F4Vl8MddbdwdykFmskEFQ%2FkRMdHttRVIbJYkxbT5FrVTFZYozaMEPo7yvDClXeNoyfTwwwfjc6UHcBRmvkpK9WJkPJB%2FbFOXNoeku3Id4easTxaXRLWu0NnWHtfdaKOOQPNMFDSJBxTD0jlYoc0lIQUVXq%2BmK63HAbao3BYeCsHzmiYL9q8RdSTCow4ZQXJa1wYfh0MHSYODFRfuR7PR4mg0AIar%2BwtaYMjP7zgzXLGZfo7a6CtRNDPfH4fAvsIhAQZIYFJR5Kf9MX50Vv4opEJgidtMcSNYSJ6YJwAWMVnWHhIaNYAL6lmIC8t21P69FOcDnfI2CIGlGlj8R2qdpcwukAOmb%2Bl26XgvQukd2VVV4rSJSNAgbSBbeB8k%2BnAFhJiJ5mdu0sDuQrv4QPLyp7UIMhcRBjCrHIEkiVxSF28lhSVTQNXkIcH8mQ%2BfPvpxJ02hiyyltO3r1mRbH3ql%2Fn7znE0gWWZxwPxl2s2lmKPwYUUbRWQcd28oknXzEVOksx17eNCEr57XacQeT40MWwDfsMgY8sVrLaGgMGUJpAkZI5NqKUSayeRNJz63FCqZQzACfvJU89KCRNC7uRrTJXf3%2BMTjD13oXDBjqkARpQ1%2FmvXYqZ9COZKQTv98OTaO1SfZ78Gb7sVs9s%2F1SwH43Len8yexrSEiFBTM4mxMs2rGc54VKWsVtliJujUAPZ7Vdp7v0wgGxzI6bdfEJxCXQ0%2FNWP%2FURnKNNpzgdFrZW14tzMWWM8%2B1HDx2rm%2FL4PSo3azUj9LhrOM%2BQSz7NgpSKRfWH0rEnsDHAwKqVHvjruJeNI0Rl0KWSgRKk%2FTcmaK0iT&X-Amz-Signature=6b2e5bd56b8408d0a77184961c27d02fea3bd1eac79b1a2a02e3f10c7ab040bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7XWCV6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfnSZZ4Z%2F98XJAOy5BpRY0zn%2BHZw75OQiGj3YoCi2%2BAIhAOGKB9tKBUJIOcfzGrX09FSgQooMFesuNDLPW9U8COp3KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywa%2FGKxk9v2ByV25Mq3ANX%2F5j6T2s5A2XEC0isPA17pMk3KsRVZE%2F4Vl8MddbdwdykFmskEFQ%2FkRMdHttRVIbJYkxbT5FrVTFZYozaMEPo7yvDClXeNoyfTwwwfjc6UHcBRmvkpK9WJkPJB%2FbFOXNoeku3Id4easTxaXRLWu0NnWHtfdaKOOQPNMFDSJBxTD0jlYoc0lIQUVXq%2BmK63HAbao3BYeCsHzmiYL9q8RdSTCow4ZQXJa1wYfh0MHSYODFRfuR7PR4mg0AIar%2BwtaYMjP7zgzXLGZfo7a6CtRNDPfH4fAvsIhAQZIYFJR5Kf9MX50Vv4opEJgidtMcSNYSJ6YJwAWMVnWHhIaNYAL6lmIC8t21P69FOcDnfI2CIGlGlj8R2qdpcwukAOmb%2Bl26XgvQukd2VVV4rSJSNAgbSBbeB8k%2BnAFhJiJ5mdu0sDuQrv4QPLyp7UIMhcRBjCrHIEkiVxSF28lhSVTQNXkIcH8mQ%2BfPvpxJ02hiyyltO3r1mRbH3ql%2Fn7znE0gWWZxwPxl2s2lmKPwYUUbRWQcd28oknXzEVOksx17eNCEr57XacQeT40MWwDfsMgY8sVrLaGgMGUJpAkZI5NqKUSayeRNJz63FCqZQzACfvJU89KCRNC7uRrTJXf3%2BMTjD13oXDBjqkARpQ1%2FmvXYqZ9COZKQTv98OTaO1SfZ78Gb7sVs9s%2F1SwH43Len8yexrSEiFBTM4mxMs2rGc54VKWsVtliJujUAPZ7Vdp7v0wgGxzI6bdfEJxCXQ0%2FNWP%2FURnKNNpzgdFrZW14tzMWWM8%2B1HDx2rm%2FL4PSo3azUj9LhrOM%2BQSz7NgpSKRfWH0rEnsDHAwKqVHvjruJeNI0Rl0KWSgRKk%2FTcmaK0iT&X-Amz-Signature=421945ac8f0a0e6c6b7cf610cacf98041142b9b5487db79e5d3641470b4d87fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPBGOWFC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FnFzzI5fmT31GCQKtc8uoV2SsIa3gquAlbotTaWzE5AiEAsu00A0JouiqY%2BtAyCLIWIiVmjrdK%2BMFNa%2BQUqaqzOAEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyjvN%2FU3izzf2npgircAxfDzgFndFw%2FV1BdRBTtFs6RMkC%2B0pfy4DTtVKOLOrgeWGelyKbhjvOF%2FsSMHnjpcJUW3OxgaKP20kU7kF61t%2FJowVuwsYkYhJFup%2FGqSH1hGD1bmaMCcnpXeABcC3vtHGnH4kKd0I4gwDCQsEGRQcLixiQGfytCqZwng1v3ftvrY1SsFKyk0izDFz5Av8Gh22Wq4a9FrKYWx%2F%2BgncykOON4H2GTrMYd1ucN8OFPrrmo5fjV6M5JGswAjUc5QZ%2BoVXOGVgpVWk2yI5XNuTrtjj0wlJD%2FrKTZT6HrnFOGJXlQqfcwenbZeT744c6TACacyLYpNix9XSEwc9Hs9%2FhCqiufJ3zOvSfbDgVWXBqAfsHdc8tslfTAdQmJiBWamyW6IgEsM3PdAT9a9%2F1Wn2CxJCSUiYUXiqeNdPzUf66rCyaleHCnYLWRRjw0qdnBSL6gC7HgRYLfZ1CId3qAxd5rEB6erp%2FZqZRnzideDLytiIHIVEIcO6vwf%2FyqEHs9pxWJHZuMzSHz3pLsF%2FVOQ1HXxJjVzxIPJ80v5ybM4CmuewnScWs%2BB01%2BbKDA5ZWB%2Ff2zZ3Jdero3jL0sBByoRg%2FtVBoWE3k7cyTLbIUbQrmc7X%2Bvez9RelLP0j%2FqsWDcMPHghcMGOqUBP7MMsJtq70wHy4KtLwXqGoL%2FPa1zfe1zM3ksc3W%2FmttptdN1u%2BJ0roSeGgAJmG5Wt04fHZNkm5v1JB9K0DJRPDDM5a%2BZquE7L7pxprWFWQQgkDfscJ7kb64ih77BF%2FrWORkWDvGjnhJ93dnlBOETTwc382TlHDFQADgQRbaz3qKUCqWobodLmxxmGptOkxKkXQkulkkm16cbH7gdN6pl6bRLpEhe&X-Amz-Signature=f9145a06f8e7b86091f4f76f4be6cd6f9103d76cecd6a20db16461696b341b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG6F5JJV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjYI7hYVVMRS9TfUoShR0t96YiCu35jOAJANF2SR1K8QIgKlOhWP1v90l0HgIFYCwyJHF7efstQqD3FteXyDS02NQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaz5qGCOvmjNq%2FFDircA%2FOmfv4VYpI5wIb44ObOe%2BYvoXmdppsqTEA7RsF0IeyJ%2BN33ul127pt1wOYZTjJPv54%2FM0srWiKPqDqheOo78u4T87304ppzX6YIs2Zmh%2BkYqnBHS%2FAkwBieMcBNzA%2BZHdxxajP9bxMR42A5iBY7okb5a6zqTNV6%2FJz2vhb27auVXccIy6wNuBszqr3SPyq1whfS9w%2BYl6NwkMfgzsQYHtgYlFiL5CVE6oBYk6AEeRilIEuw7Hc9BdpS3YYtrUerkRQUS5zrBLMaC%2Fny66b9%2BS4gEnXapKD6kTn2HJVzoAyHXoqxjd3UOCSTFdMxwjzCx019t53svwHaB6AP%2BDEWT5dpoQtzmr2SsNvi3cUg3ohM6sZpGO%2BeyLcoY7D7a%2B8bvG4bKfLwuOcf98%2BxQrU2UbNDWvFOhCoWwQVQH0tfKMxizsA5YRkd4zVCOG6xfwN32YC9scoptAElpve6s%2FnUf%2BpCyp05SvlwJaLlaq%2BYUmehj%2FgaVrjQ6LCfN1QpDmYmwxIreKSu%2BPNH3VkwlFXAINvI3CKWhNr%2BmXT2d2K8UlJt14Rot27q2DXXET%2Bk3hVxotxePNtEkFmDdbiPj56ddJv5J08maT9rWMt93170vj2QCkVI%2F0FLTaWlqC3hMMT3hMMGOqUBoLBTGPif0cHUQr1fBmfsUxB8VxUFGJL0qkgOSlfD2gjBlHs%2BmkD6t%2FsIL8VQOCExl5Hc6S2kMdajRxotO%2FBsQaPv9Dp33BHeo0MQT8tagKb69xFcNlM2gUCpodOJkUjGD1BYga1Z84WG%2FqWTxWQPJrnUMSuXMYUIK7BVm59mp7O3MAiFxt8%2FbQlZzmaKQ7DauZ74bUX%2BqOF26OxefIVW2Z63fUrC&X-Amz-Signature=a48e8a88b452ab2126274980d2f86f6990c3362f6ebaf179442320bc70efdd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7XWCV6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfnSZZ4Z%2F98XJAOy5BpRY0zn%2BHZw75OQiGj3YoCi2%2BAIhAOGKB9tKBUJIOcfzGrX09FSgQooMFesuNDLPW9U8COp3KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywa%2FGKxk9v2ByV25Mq3ANX%2F5j6T2s5A2XEC0isPA17pMk3KsRVZE%2F4Vl8MddbdwdykFmskEFQ%2FkRMdHttRVIbJYkxbT5FrVTFZYozaMEPo7yvDClXeNoyfTwwwfjc6UHcBRmvkpK9WJkPJB%2FbFOXNoeku3Id4easTxaXRLWu0NnWHtfdaKOOQPNMFDSJBxTD0jlYoc0lIQUVXq%2BmK63HAbao3BYeCsHzmiYL9q8RdSTCow4ZQXJa1wYfh0MHSYODFRfuR7PR4mg0AIar%2BwtaYMjP7zgzXLGZfo7a6CtRNDPfH4fAvsIhAQZIYFJR5Kf9MX50Vv4opEJgidtMcSNYSJ6YJwAWMVnWHhIaNYAL6lmIC8t21P69FOcDnfI2CIGlGlj8R2qdpcwukAOmb%2Bl26XgvQukd2VVV4rSJSNAgbSBbeB8k%2BnAFhJiJ5mdu0sDuQrv4QPLyp7UIMhcRBjCrHIEkiVxSF28lhSVTQNXkIcH8mQ%2BfPvpxJ02hiyyltO3r1mRbH3ql%2Fn7znE0gWWZxwPxl2s2lmKPwYUUbRWQcd28oknXzEVOksx17eNCEr57XacQeT40MWwDfsMgY8sVrLaGgMGUJpAkZI5NqKUSayeRNJz63FCqZQzACfvJU89KCRNC7uRrTJXf3%2BMTjD13oXDBjqkARpQ1%2FmvXYqZ9COZKQTv98OTaO1SfZ78Gb7sVs9s%2F1SwH43Len8yexrSEiFBTM4mxMs2rGc54VKWsVtliJujUAPZ7Vdp7v0wgGxzI6bdfEJxCXQ0%2FNWP%2FURnKNNpzgdFrZW14tzMWWM8%2B1HDx2rm%2FL4PSo3azUj9LhrOM%2BQSz7NgpSKRfWH0rEnsDHAwKqVHvjruJeNI0Rl0KWSgRKk%2FTcmaK0iT&X-Amz-Signature=b651c3194924d36d86f1525e395b9866e86ca268e3c2cfc36c4426df2a3f09d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
