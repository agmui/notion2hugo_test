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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH35MBB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCiJreSzgx6bazlR1J2ppscR%2FaDlzBTYVkjZHvGw8JamgIhAMk7gmZU2p5FP577ETudhJfW5OdRbUyzyztTQNL%2FbdqjKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6KRLtoH1%2FXjFG10Uq3AOo%2BAoQbxSMGQgWYL1Zoxqht2P5O3jZrudW%2B2ahfqmYjXJjpN2679DOdt5pxSvGzJyIaVqBvtZO%2B388GsxtnPQ6OMmLY%2BavOSEK1kWl7UFyt2tMhgaktNhdqQdafJUhAHw%2BIOT93CLwIrg4hiFcZcR2I2BaTzz8ZeNZCuNV2RK7BGR0vQdrMwDLbDHuqCYqwjWOc8uibyAo7UjvcZvY1LdtkKgQOy21nNpYhfCEJws3smwluLNpK203VwKHpqkV80O6GFpVJXj4%2FYjPzc%2BAQvSau1LdMYln4G0WeHiRF2vPVIL4aJ9SCm626C8nrGZJTpozfRe%2BEEus3EwHv01Zz47wkpXt7gNX4jFKu0vpAANxayBK%2BzDySREiQWykmUeB0WpZivKW3BGvE4EXzGJyr2mtBaNgODwfuVtCoZhhkpObGnFPZukgpHld9pxIWqASOQ8%2B%2Fn%2Bjolv1w80wvt9EfSt47ZJQc%2BFAOmKCQa%2Br2v%2BJ2E5UQaNv2E4lXIiSjEM4UEZP2H2NCAFHav4bvB6Axth%2FnWlDgZa%2B%2F8hr87hp0ozlxxU4zRljVXQ9HTb5IsJTa9uXDd8RHc3ppLzlztofmfFbgPItCzU%2BtIspfNaAKxoX%2FxDcRkQlPrHOISlU3jDV6qrDBjqkAQae9Dm15nuuEUqBtjVrlu2XJV5u1eS%2FneZEBeKcnFC%2Bxz4SoK3xiZ3XjDdhiBTDBiPbDdtbsRcYbQV%2FB5lYh53x6T6vKQh7Hu2C8LIbBiciWb%2BHdhm2MG5Eo1Ug74zQng41PMvXTbvLWMNqbnVRC3RLGg7N1WbqU0LPRgMQ6%2BfSHau1oLdFxhHDRsDTlIzKq57fPYTMvEeBycBXC%2BFYvEKQtOau&X-Amz-Signature=7c55ec7f4501069d3057f2bef1899ee91c5819270629e2f083269e0aa9cc72dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH35MBB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCiJreSzgx6bazlR1J2ppscR%2FaDlzBTYVkjZHvGw8JamgIhAMk7gmZU2p5FP577ETudhJfW5OdRbUyzyztTQNL%2FbdqjKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6KRLtoH1%2FXjFG10Uq3AOo%2BAoQbxSMGQgWYL1Zoxqht2P5O3jZrudW%2B2ahfqmYjXJjpN2679DOdt5pxSvGzJyIaVqBvtZO%2B388GsxtnPQ6OMmLY%2BavOSEK1kWl7UFyt2tMhgaktNhdqQdafJUhAHw%2BIOT93CLwIrg4hiFcZcR2I2BaTzz8ZeNZCuNV2RK7BGR0vQdrMwDLbDHuqCYqwjWOc8uibyAo7UjvcZvY1LdtkKgQOy21nNpYhfCEJws3smwluLNpK203VwKHpqkV80O6GFpVJXj4%2FYjPzc%2BAQvSau1LdMYln4G0WeHiRF2vPVIL4aJ9SCm626C8nrGZJTpozfRe%2BEEus3EwHv01Zz47wkpXt7gNX4jFKu0vpAANxayBK%2BzDySREiQWykmUeB0WpZivKW3BGvE4EXzGJyr2mtBaNgODwfuVtCoZhhkpObGnFPZukgpHld9pxIWqASOQ8%2B%2Fn%2Bjolv1w80wvt9EfSt47ZJQc%2BFAOmKCQa%2Br2v%2BJ2E5UQaNv2E4lXIiSjEM4UEZP2H2NCAFHav4bvB6Axth%2FnWlDgZa%2B%2F8hr87hp0ozlxxU4zRljVXQ9HTb5IsJTa9uXDd8RHc3ppLzlztofmfFbgPItCzU%2BtIspfNaAKxoX%2FxDcRkQlPrHOISlU3jDV6qrDBjqkAQae9Dm15nuuEUqBtjVrlu2XJV5u1eS%2FneZEBeKcnFC%2Bxz4SoK3xiZ3XjDdhiBTDBiPbDdtbsRcYbQV%2FB5lYh53x6T6vKQh7Hu2C8LIbBiciWb%2BHdhm2MG5Eo1Ug74zQng41PMvXTbvLWMNqbnVRC3RLGg7N1WbqU0LPRgMQ6%2BfSHau1oLdFxhHDRsDTlIzKq57fPYTMvEeBycBXC%2BFYvEKQtOau&X-Amz-Signature=5403cf5636f082f7d0ca82a2d9190c610f3861aeddb8550f1b34a63cf1e99ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH35MBB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCiJreSzgx6bazlR1J2ppscR%2FaDlzBTYVkjZHvGw8JamgIhAMk7gmZU2p5FP577ETudhJfW5OdRbUyzyztTQNL%2FbdqjKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6KRLtoH1%2FXjFG10Uq3AOo%2BAoQbxSMGQgWYL1Zoxqht2P5O3jZrudW%2B2ahfqmYjXJjpN2679DOdt5pxSvGzJyIaVqBvtZO%2B388GsxtnPQ6OMmLY%2BavOSEK1kWl7UFyt2tMhgaktNhdqQdafJUhAHw%2BIOT93CLwIrg4hiFcZcR2I2BaTzz8ZeNZCuNV2RK7BGR0vQdrMwDLbDHuqCYqwjWOc8uibyAo7UjvcZvY1LdtkKgQOy21nNpYhfCEJws3smwluLNpK203VwKHpqkV80O6GFpVJXj4%2FYjPzc%2BAQvSau1LdMYln4G0WeHiRF2vPVIL4aJ9SCm626C8nrGZJTpozfRe%2BEEus3EwHv01Zz47wkpXt7gNX4jFKu0vpAANxayBK%2BzDySREiQWykmUeB0WpZivKW3BGvE4EXzGJyr2mtBaNgODwfuVtCoZhhkpObGnFPZukgpHld9pxIWqASOQ8%2B%2Fn%2Bjolv1w80wvt9EfSt47ZJQc%2BFAOmKCQa%2Br2v%2BJ2E5UQaNv2E4lXIiSjEM4UEZP2H2NCAFHav4bvB6Axth%2FnWlDgZa%2B%2F8hr87hp0ozlxxU4zRljVXQ9HTb5IsJTa9uXDd8RHc3ppLzlztofmfFbgPItCzU%2BtIspfNaAKxoX%2FxDcRkQlPrHOISlU3jDV6qrDBjqkAQae9Dm15nuuEUqBtjVrlu2XJV5u1eS%2FneZEBeKcnFC%2Bxz4SoK3xiZ3XjDdhiBTDBiPbDdtbsRcYbQV%2FB5lYh53x6T6vKQh7Hu2C8LIbBiciWb%2BHdhm2MG5Eo1Ug74zQng41PMvXTbvLWMNqbnVRC3RLGg7N1WbqU0LPRgMQ6%2BfSHau1oLdFxhHDRsDTlIzKq57fPYTMvEeBycBXC%2BFYvEKQtOau&X-Amz-Signature=a2266e46b12805e9fa6f36f15f22faa29bec73f9f953fc23e8566641e9cf384b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSGN643%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCDI7T6P2K9X7E84y%2Bds%2F5uFlBdLDXRkG3nUdK7ggp38AIgKmbgYRD4e5l6n3uwdNIozHxCk%2B7ohJXdMRRrYMUmgDkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKSqhCuCn1xjfdTs6yrcA1MH7NyrMVysVo%2BRDBVFVpPXA7yh577VB%2FWB9eytjAcOYx9GHYd0Gg%2BJ9lW6EewzIp4C1lsyrCMsNXyRfz8Zvn7N4tGaqlmXsYWYs7CnPX%2FOzeS3qjYkL0R2aVyz4ZpLqDcabiXqCxN3jz8KopTM9o%2BOYWN1yu1aToEHaxAYkXb2yOMIuou8nogLJwbM0JGflrioaUozHj7fiMTisE%2B28tfZ%2FAfbwk2LbwGN50O33hqbio3lcHB56WdOwgEDmZgslCj5ypwMUqVii%2FRMvkE5dGui2ZF2AgQM7s%2FkUT928UckUfU9iKdpt4QB8C1jv8cKvA%2BmaSR7PsqrYzs7pSo5Fzus4VsLu8qLU8URTLzOiohYVtKd3U3qq6g7gjbF%2FKEjCowBWqZ6TiOl%2Byh5Eg1HONJbXyPl7f2AK4W7I05%2BnSLbsl3mo22VIT2DG9D2lOUCseQdwTetDCxYnrtdah7Wm3PP9xF%2B%2FL39%2BcmHhjrYO1ePu2Ia4HWzJYGG8GuGqOvm9CuVhM9dwDjyg3tJX4gbsXlSG4xLUg4Bndu%2BSFD3O4l3beikEodz9gV5wyoZMi7%2BKYTz4I0d5faOcVLR45BK1K%2Fnu4GFy%2FutNNwDa29SRJuKHQCvRe2z%2FYXGrHpmMLrwqsMGOqUBmMD%2BLIrYzkWLylqKXmC%2B%2BoW1VBfxXwPbOu7Z6hnQCOlehFNa2Hes5zcVlNGaLxesTLTWmFau1E4RsrTVKAgs4wD6WWLN1%2FJjl0Uola%2FdS57gTWNBLQt9hDokYQdUOy40nygTnkL2h%2FrzB2fQ1EWkDfmH%2FmHM47aF5IV3MDkPRQDw048m6hiQ07Hy%2Ba4jERqyi6dHghXx%2BV5OvId%2BJeQMIPsep9WI&X-Amz-Signature=2dcd94819d4921f670ebfc7cb72c355979b604c65295d88269888ed939ada0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33ZMJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD6jYAyTeJgHZ5nphrLWZwmdufEn1yjASx%2Bg30UIVzLNwIgMSOhk1cc3pyxZ8pJj%2FmTvAf8Uzyf0AKSfuLYSfL8ilgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGrIZrkm%2BZQ3kgek2yrcA2zzgzeToP7e9ZBkdWI5VlJPFiwcARif5NKH479L9upP%2B1gMBbk9UYbkiWxvm5PguJY0Yzzjbhy7ItGrk%2BEKCBCk7wGkN0uzo7TCGRINSwLLAEoRMet2Y8epiD8F8DDSH9bhyu3752kuUN4jhDG%2B5qV93UDc2QCLqhi8s93P1om4PFBKYwAytVAxKCnKwG3pEG6RmNiBgZa9wyOL9t1H9aT2kLy14aUxnaktQfhTBBccUcU7mIUKQioeKPvYtM6p0rMeR8uEeRtp5e99fmegrrgYc%2BCmiw8h9dSGQd1LtBYN%2FDZ623O9miESQL%2FYlyvf8z%2FooXmUEBQgWdSubnthN1JNJPtmmkxNS6OZQIvQn%2BiCa%2BRUobFfQuhT5kJFfsfwKsaUsloNrTMu%2FmFHmXzljjDKCOzzaxlR1nwtluJVjp1y0NML9clQSFai0aSMPts4fZ4qepcuqiYEEDs1KMFnRxH0jBrVUOwq28On1q7ed8v4aovAt9Tsc5AqENceEqeID5DbcF7ozfibM%2Fzyy%2FASm3Vh9uOn5lNXvvlV7XDzKIj7%2F2AIAJZXq3dF8w3uH1VKb5m%2FIhhXkXy5V5dI9rhe4CjEnluwxDnhJHXcdC6t7m0cezm4aUzoMe8lo2kYMJjeqsMGOqUBL8l99714R3J6Lt3EPAxleq%2B8%2Bs40TiYz9%2BIenVk1bhsvTBtu%2B9zMnUijIl3Gc7T%2B8gfEUKDCCChMHw2dcj3hEsBqQ24EUf3oRo1OrIf%2Bq8zu5Fncnm%2BnhQph0hGN2MJGg9E6nAfN%2B8%2BT4Za8bkE2QFFo1c53JDmDyA6Oj8GZCw8Ax7cBDcnwVQt8eEz9%2BYlOZGLov0Q6Kdi0B2iIjfjbGrowY1ZN&X-Amz-Signature=0890a1f7c05e4868a26ee79c4c1760fd750a5c4a64c4b4474a63dbfee2c32e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH35MBB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCiJreSzgx6bazlR1J2ppscR%2FaDlzBTYVkjZHvGw8JamgIhAMk7gmZU2p5FP577ETudhJfW5OdRbUyzyztTQNL%2FbdqjKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6KRLtoH1%2FXjFG10Uq3AOo%2BAoQbxSMGQgWYL1Zoxqht2P5O3jZrudW%2B2ahfqmYjXJjpN2679DOdt5pxSvGzJyIaVqBvtZO%2B388GsxtnPQ6OMmLY%2BavOSEK1kWl7UFyt2tMhgaktNhdqQdafJUhAHw%2BIOT93CLwIrg4hiFcZcR2I2BaTzz8ZeNZCuNV2RK7BGR0vQdrMwDLbDHuqCYqwjWOc8uibyAo7UjvcZvY1LdtkKgQOy21nNpYhfCEJws3smwluLNpK203VwKHpqkV80O6GFpVJXj4%2FYjPzc%2BAQvSau1LdMYln4G0WeHiRF2vPVIL4aJ9SCm626C8nrGZJTpozfRe%2BEEus3EwHv01Zz47wkpXt7gNX4jFKu0vpAANxayBK%2BzDySREiQWykmUeB0WpZivKW3BGvE4EXzGJyr2mtBaNgODwfuVtCoZhhkpObGnFPZukgpHld9pxIWqASOQ8%2B%2Fn%2Bjolv1w80wvt9EfSt47ZJQc%2BFAOmKCQa%2Br2v%2BJ2E5UQaNv2E4lXIiSjEM4UEZP2H2NCAFHav4bvB6Axth%2FnWlDgZa%2B%2F8hr87hp0ozlxxU4zRljVXQ9HTb5IsJTa9uXDd8RHc3ppLzlztofmfFbgPItCzU%2BtIspfNaAKxoX%2FxDcRkQlPrHOISlU3jDV6qrDBjqkAQae9Dm15nuuEUqBtjVrlu2XJV5u1eS%2FneZEBeKcnFC%2Bxz4SoK3xiZ3XjDdhiBTDBiPbDdtbsRcYbQV%2FB5lYh53x6T6vKQh7Hu2C8LIbBiciWb%2BHdhm2MG5Eo1Ug74zQng41PMvXTbvLWMNqbnVRC3RLGg7N1WbqU0LPRgMQ6%2BfSHau1oLdFxhHDRsDTlIzKq57fPYTMvEeBycBXC%2BFYvEKQtOau&X-Amz-Signature=7e5473f28e3a046a027de20cf0ee6825c9eaf40954c6a5086257bc82712ca58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
