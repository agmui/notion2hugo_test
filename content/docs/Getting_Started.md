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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ2XLWU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXbrzFFKaj0roP%2F86G2NrTzVpByUhk8izAAEOUOugDAiAojvWFkd7JPEUIHlbSLl0ahPSUqUb9RVbdS%2BncbjPxAiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5m0ZWYmHAJaW7ykPKtwDaQmIX0Lz2MSFr4eQ542VYP8ZFWVmLqoT3ybKe6muXlN8BrjUyBOZ%2FPPNyVej3jmc1TZXnDbvHTtnqzjwpJ8iZY6o8qj6K8XrXNluoJYe9ocoIhkt8i1oWIdZHlgap1t8OD2mr4OadXSy6KZWGVq2thtbTk3PSYRHNqqdmW7ix2yjQuRxcZpXzfUM2QXUvFBOWc4LdOW2m%2BVO1fwXMCoyrt2zT%2ByExr8xW2BkwIj4%2BJGfrBkCjnIPTIGR2EJBRstcatxGSjtKLXUfvCwKso8sEQvoNhwnnjD5U2l%2BF7MdnKAa%2FsfAijM%2Bi7kSVYAz3vs8IESV5Ff6mLoAG4dQVOWyMzXDzqBYvwH6m9QYLDHbcShpJk3iqAE10i10kLkvmvFPQVl1MDZlmplCx3WB%2Bx2N%2FVkGcUMMpyMZpHBjSkPGXoxgYROi03fruiihw9pVQPplbROB9Bwi7fIyxJxTqGYvhZmojxzBJC3HSh%2B6Nm3Rj897wKtjt%2F2O5Ijaf7UMptUCQj7E3aIHCrvcpjaQ4IkWrrv6Rag793jjDXPegNmNI1Cuxn%2BdLg0MZi1rvx99OLX1ZSsAfBzLa9IelW12OgdTWcx7c%2Bz33JiizdL2fVUW3RuqsMnY2ifyDhWGpRcwjqGQwQY6pgEOD7jd9E6XzKXQq%2FiJFf41ubcTQqPyrPBjU4JIl7fSsSKHmzujAAJUpNBSsOqtm%2BtGZkExr%2Buicwc74SmqbA%2FKNJ7Gzh78PNxWyIAebjYgXYIrAl2wylCeCrIFaiNTTrB%2FKXsc%2FrWjDkOvp8c7c5g2p7m167ULV3yLoO%2F3CfELR5DMoryp%2B1NyyYJsMIM0DedJM9c%2F2UOng0mzOTIok3iDeKNnsaer&X-Amz-Signature=992fbfc00eb6205dec9dbfc571690c791d8dd4e34dff57ec399a240d26751611&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ2XLWU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXbrzFFKaj0roP%2F86G2NrTzVpByUhk8izAAEOUOugDAiAojvWFkd7JPEUIHlbSLl0ahPSUqUb9RVbdS%2BncbjPxAiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5m0ZWYmHAJaW7ykPKtwDaQmIX0Lz2MSFr4eQ542VYP8ZFWVmLqoT3ybKe6muXlN8BrjUyBOZ%2FPPNyVej3jmc1TZXnDbvHTtnqzjwpJ8iZY6o8qj6K8XrXNluoJYe9ocoIhkt8i1oWIdZHlgap1t8OD2mr4OadXSy6KZWGVq2thtbTk3PSYRHNqqdmW7ix2yjQuRxcZpXzfUM2QXUvFBOWc4LdOW2m%2BVO1fwXMCoyrt2zT%2ByExr8xW2BkwIj4%2BJGfrBkCjnIPTIGR2EJBRstcatxGSjtKLXUfvCwKso8sEQvoNhwnnjD5U2l%2BF7MdnKAa%2FsfAijM%2Bi7kSVYAz3vs8IESV5Ff6mLoAG4dQVOWyMzXDzqBYvwH6m9QYLDHbcShpJk3iqAE10i10kLkvmvFPQVl1MDZlmplCx3WB%2Bx2N%2FVkGcUMMpyMZpHBjSkPGXoxgYROi03fruiihw9pVQPplbROB9Bwi7fIyxJxTqGYvhZmojxzBJC3HSh%2B6Nm3Rj897wKtjt%2F2O5Ijaf7UMptUCQj7E3aIHCrvcpjaQ4IkWrrv6Rag793jjDXPegNmNI1Cuxn%2BdLg0MZi1rvx99OLX1ZSsAfBzLa9IelW12OgdTWcx7c%2Bz33JiizdL2fVUW3RuqsMnY2ifyDhWGpRcwjqGQwQY6pgEOD7jd9E6XzKXQq%2FiJFf41ubcTQqPyrPBjU4JIl7fSsSKHmzujAAJUpNBSsOqtm%2BtGZkExr%2Buicwc74SmqbA%2FKNJ7Gzh78PNxWyIAebjYgXYIrAl2wylCeCrIFaiNTTrB%2FKXsc%2FrWjDkOvp8c7c5g2p7m167ULV3yLoO%2F3CfELR5DMoryp%2B1NyyYJsMIM0DedJM9c%2F2UOng0mzOTIok3iDeKNnsaer&X-Amz-Signature=44af8c4450d9bd96937c3cc8ca406bbf31c363a7a156e62f596787261606efa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ2XLWU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXbrzFFKaj0roP%2F86G2NrTzVpByUhk8izAAEOUOugDAiAojvWFkd7JPEUIHlbSLl0ahPSUqUb9RVbdS%2BncbjPxAiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5m0ZWYmHAJaW7ykPKtwDaQmIX0Lz2MSFr4eQ542VYP8ZFWVmLqoT3ybKe6muXlN8BrjUyBOZ%2FPPNyVej3jmc1TZXnDbvHTtnqzjwpJ8iZY6o8qj6K8XrXNluoJYe9ocoIhkt8i1oWIdZHlgap1t8OD2mr4OadXSy6KZWGVq2thtbTk3PSYRHNqqdmW7ix2yjQuRxcZpXzfUM2QXUvFBOWc4LdOW2m%2BVO1fwXMCoyrt2zT%2ByExr8xW2BkwIj4%2BJGfrBkCjnIPTIGR2EJBRstcatxGSjtKLXUfvCwKso8sEQvoNhwnnjD5U2l%2BF7MdnKAa%2FsfAijM%2Bi7kSVYAz3vs8IESV5Ff6mLoAG4dQVOWyMzXDzqBYvwH6m9QYLDHbcShpJk3iqAE10i10kLkvmvFPQVl1MDZlmplCx3WB%2Bx2N%2FVkGcUMMpyMZpHBjSkPGXoxgYROi03fruiihw9pVQPplbROB9Bwi7fIyxJxTqGYvhZmojxzBJC3HSh%2B6Nm3Rj897wKtjt%2F2O5Ijaf7UMptUCQj7E3aIHCrvcpjaQ4IkWrrv6Rag793jjDXPegNmNI1Cuxn%2BdLg0MZi1rvx99OLX1ZSsAfBzLa9IelW12OgdTWcx7c%2Bz33JiizdL2fVUW3RuqsMnY2ifyDhWGpRcwjqGQwQY6pgEOD7jd9E6XzKXQq%2FiJFf41ubcTQqPyrPBjU4JIl7fSsSKHmzujAAJUpNBSsOqtm%2BtGZkExr%2Buicwc74SmqbA%2FKNJ7Gzh78PNxWyIAebjYgXYIrAl2wylCeCrIFaiNTTrB%2FKXsc%2FrWjDkOvp8c7c5g2p7m167ULV3yLoO%2F3CfELR5DMoryp%2B1NyyYJsMIM0DedJM9c%2F2UOng0mzOTIok3iDeKNnsaer&X-Amz-Signature=171b5be5173d8521e9873ed0b02aba65ba88e99701456c62341ecd18fb41d134&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H34ZJHD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHgA1QMMnUOJTseh03CNpwhKm3MMAy7S1KjW2fqFnysdAiEAxWS%2Bxgp1NdTxWWRDmPI7sv%2FK1Md90Bf30%2BqVCaWfaVoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO6wXjzuwlbVgoCDCrcAyXO8ZyQzMazot%2FRKMUihya2T5hRugFwTowyyCSMs%2FQb4GCUrXRY6xvn2CQ1GWmNRRhHYQ%2BcZsMpPQ808PsgzzDhWCF7nyKoRgGRSaVnbgtUw%2BdYKOU033xs856v%2BkbzPFUvIsUqXML0mmH3%2FKdvv%2FP9CSJgy2c%2BhUlidy%2FQYSfMZkwXX1Ji5UoIqotKkeKrwaIBFKhmI6x7arsGxo4risdo%2FhvnOffE%2F%2B0OgaoIa6xo23NKch3bF2HGELoS5lAOiG0cPR3G%2FoA1Fv1tXcXXnXdsAdDp81yimU4G6Q2UweJsK%2By8ruer%2B8DLj711xXOicpB%2Fs5APb4b1qGZMWs1%2FeKUoLCOX7FKWnm%2FrJW%2FupOrfqWVXM4%2BtcjpccJJzLGwxRBWllWdwO5Gw8VZ5LHumAdVLkpQdO8G5N%2B84NW%2BnujtJhz2rrLpNtLXrnjMdrSMrCdFA7p6uy8eRv6yF6OY%2B3tf9YsnC%2BT1eoZOlAThqEBsb7xumZpX5bUUEkwGEYe%2Bt8S4ax%2FFd3ZJjmTrvCkzGJ3fAlxIeJSbC6R8svEMEuMl0PgAt39XHFRE3poTs0GgRBX0t9ginbv9Ccc64lkPSjqRqPuIhKBfU37GzzdL0gcECTbrC1gTPtmTBb%2FIWMJWhkMEGOqUBSjuNSWwTGnznfXRxmQIQn3jLq4GqDi77%2BlccdzfwCrZBc8GIHFawqPTRX1KoEaYqRIwGs4S3kWu%2F6dIy66y7SG4TRAVI2FEP7WcWgZL4gmo7S8niMqE2gn%2FVFt%2FYN%2F%2FDnr0%2FwvxnwlxoJpudHoKBFn9ujQ%2FxUSlSfAGSGPBeIvFpq8jgK%2BkZSvlB10gazt2D9SvIKVRizQoFel64kcL26G1mmsXk&X-Amz-Signature=8b10da2381173ce9266e51bd7b14e095d804104c25384d4db92b71d847722629&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54HEIDZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDK4V9DMDSLMasfsTB8AzpXa50OWeOmPJEKjbUxD7WnpAIhAIMFuQGMJMMITP0OJ86%2BOzy%2FHRY%2BC9gzvJ5Q66Rle3WDKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6H4iu9lyzi0VO%2Bhwq3AP5JFSIoV5XDMU6VMUcJfb1kW3T%2BQZSJl3G1oR8kSArYUyD19p%2Fj%2FUDydU5JhRcjnmHgNXq5KRubQQuRkBeHJEr6qFh%2FL2VN0dY%2F7vpwhnObLsMzrCf5HayW1XOJw8DR79AmUN%2FYXgySBbTaUWktTXk5kjJtMi2oMfb4HzNkLz8UqPiyQzfMmuv8bL2mxcyJYovO85edNynEWOj0nbgOg92xrQKz0LacyIKLKcQeqn9zurnWXmiQFi270IMbRQ4FuNyy%2F2FoKNJeZUnqooKG%2B9dQUmIcaTYx6mGNK6FN6%2BYfkTE08M4Twemoci%2FkcdGthqnXLPk9iRvbxP8R8RjxwKYwsFPHxOZ3Jg2bNu8PNSsVR0qhRDAK0jPO%2F7AeG7JNKrqeGYNBd4WS19cfxiFufmtMNiRz4Yjzsau5G0b8qROPvIfzRdPo82Pi8mifSVkl2Y3w4ps1%2FiFdzOtLvZ8LsXCDjTT0ZGeuujqOqIjfoDwgaT7FHfDonEpsIFmwQpk7RZWv1Q1k0FyRNT%2FY%2B7o7nNmDEItc8m4LhwJD9Nej9A%2B%2FV15guNiv6J1hGXYBcgim%2BQWqO0OhxP1iHYvqcISA7g4iR%2FK9M8HwKXd37K8sOFh7ZzD%2FNfPf6MlXukICzDkoJDBBjqkAW9yq99uOc6oiu2DWvCiyNP16cryBlHnT%2FKLku8N17liPOovj6k8ZMBvfo8OqlGkce8m48NzYnJnOEDKMawTY%2FLg4H4btSEB%2FhBqUIqul4IFqdC%2BBfFD6ex4A2UAtzPvPSBdyRmtGKX%2B14ESJj9kH6gH8ScS6F4D5SjrsTtZ4Wf4FJzE8J38NVdK6dvaZnVD06CX%2FPT1SORCEHPXeu%2BICiyWQLTO&X-Amz-Signature=6db3e2cd99327cadc68f0eac00cbe02b737ce36980032dde00b4313c7d213218&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ2XLWU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICDXbrzFFKaj0roP%2F86G2NrTzVpByUhk8izAAEOUOugDAiAojvWFkd7JPEUIHlbSLl0ahPSUqUb9RVbdS%2BncbjPxAiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5m0ZWYmHAJaW7ykPKtwDaQmIX0Lz2MSFr4eQ542VYP8ZFWVmLqoT3ybKe6muXlN8BrjUyBOZ%2FPPNyVej3jmc1TZXnDbvHTtnqzjwpJ8iZY6o8qj6K8XrXNluoJYe9ocoIhkt8i1oWIdZHlgap1t8OD2mr4OadXSy6KZWGVq2thtbTk3PSYRHNqqdmW7ix2yjQuRxcZpXzfUM2QXUvFBOWc4LdOW2m%2BVO1fwXMCoyrt2zT%2ByExr8xW2BkwIj4%2BJGfrBkCjnIPTIGR2EJBRstcatxGSjtKLXUfvCwKso8sEQvoNhwnnjD5U2l%2BF7MdnKAa%2FsfAijM%2Bi7kSVYAz3vs8IESV5Ff6mLoAG4dQVOWyMzXDzqBYvwH6m9QYLDHbcShpJk3iqAE10i10kLkvmvFPQVl1MDZlmplCx3WB%2Bx2N%2FVkGcUMMpyMZpHBjSkPGXoxgYROi03fruiihw9pVQPplbROB9Bwi7fIyxJxTqGYvhZmojxzBJC3HSh%2B6Nm3Rj897wKtjt%2F2O5Ijaf7UMptUCQj7E3aIHCrvcpjaQ4IkWrrv6Rag793jjDXPegNmNI1Cuxn%2BdLg0MZi1rvx99OLX1ZSsAfBzLa9IelW12OgdTWcx7c%2Bz33JiizdL2fVUW3RuqsMnY2ifyDhWGpRcwjqGQwQY6pgEOD7jd9E6XzKXQq%2FiJFf41ubcTQqPyrPBjU4JIl7fSsSKHmzujAAJUpNBSsOqtm%2BtGZkExr%2Buicwc74SmqbA%2FKNJ7Gzh78PNxWyIAebjYgXYIrAl2wylCeCrIFaiNTTrB%2FKXsc%2FrWjDkOvp8c7c5g2p7m167ULV3yLoO%2F3CfELR5DMoryp%2B1NyyYJsMIM0DedJM9c%2F2UOng0mzOTIok3iDeKNnsaer&X-Amz-Signature=ba4e4d66a4d6a4d236e5b1aa8f360535323b0f1eb25d38a6cc9840665240b5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
