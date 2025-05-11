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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5UGOTN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDk1nLTXy7n0iBjT8zwShfFm0wvHNHNX1a8UP9qYjjbYQIgaLztqnAy1lEx%2FduTwMImPCmBIEQUYD4ol79qVIFinh8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhx1UYqW%2FfxdC3qYSrcA5uuVKJ4KsZXYZuoOIta4MpQ%2F6aB9cvb5DvS0godAIpWWoKv%2B7H%2BhDKi0X7s9s8PoznJkqkDumwBkNLMIrJn44bjaDVz0fJWiHVeTlFYuiMpQ7B%2FvYctEEtVu6i4Sxu8qSdfLKyt4uGIEWygwaLCG9WzOblJB9sm%2BBAhkldjDVIu5cUGl8te%2FTUmw0bxeWiYvILrHVJ3edON36A63%2Ffv8%2BshoVIvFDC3DG9J1%2BRHOkB5IxJqMlTNZMoOZ9%2BmG3QGMWIxwIV1JS3y0V7%2Fzy4wMvZMbgGm9cBEOt8a85tz0uBJMhxpFEdkDbFGAcIidAK7KTfuaI5IXl5wOZ0x%2FPAFmEP3yJ%2F9M3nqZLVPKWh0ioEjdUXhV4WQy6cPho2vzHJDGYdZFqs954KpwPi7bVB39fIi%2FFOXkGMUjENU0coKFYgPH12M%2B6yzGvmJLkuOn2Yfgkft3AvvNzG4ezSuv%2BzELJjku3qI01vdYggRgMABUcdDwyV6z7s4SVd0RO7OsxS7hEGCleXJlA%2FmKWFOy6RnZeMEsOoZPRkYwn0yRrP8%2B7jXwsbNZiARLsXomyGSabTRWvrDfD7ub6SzPlWdfoXKypA6b3AmBo620VUua0JKqvVUCzhCHBRxv2BukuXLMKS5gcEGOqUBLPPbBhkw7Em%2BWFxxC04Ou17betTYgjvjm1Ah66RVOiTAoDIt%2F7A2U1AN9ygZKjKowtAYq9YqienZbG8FrIb9N2mna60Nia0sZKNgRQR8%2FUwzrRQmqO2PDED9zPGSsPHTnzBahtXhek3Kqn%2BGxH2HiBHg1DQN2LrCuVATB54N3hen5uIHKSLDwSsbTKszK6EXPP%2BwQcVEWD7cRkKEJIfbAxk9k%2FhH&X-Amz-Signature=cc1cc0216a0a4281615d85cfb50b484d74f2c810c9bfa01015788f15b25d7604&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5UGOTN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDk1nLTXy7n0iBjT8zwShfFm0wvHNHNX1a8UP9qYjjbYQIgaLztqnAy1lEx%2FduTwMImPCmBIEQUYD4ol79qVIFinh8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhx1UYqW%2FfxdC3qYSrcA5uuVKJ4KsZXYZuoOIta4MpQ%2F6aB9cvb5DvS0godAIpWWoKv%2B7H%2BhDKi0X7s9s8PoznJkqkDumwBkNLMIrJn44bjaDVz0fJWiHVeTlFYuiMpQ7B%2FvYctEEtVu6i4Sxu8qSdfLKyt4uGIEWygwaLCG9WzOblJB9sm%2BBAhkldjDVIu5cUGl8te%2FTUmw0bxeWiYvILrHVJ3edON36A63%2Ffv8%2BshoVIvFDC3DG9J1%2BRHOkB5IxJqMlTNZMoOZ9%2BmG3QGMWIxwIV1JS3y0V7%2Fzy4wMvZMbgGm9cBEOt8a85tz0uBJMhxpFEdkDbFGAcIidAK7KTfuaI5IXl5wOZ0x%2FPAFmEP3yJ%2F9M3nqZLVPKWh0ioEjdUXhV4WQy6cPho2vzHJDGYdZFqs954KpwPi7bVB39fIi%2FFOXkGMUjENU0coKFYgPH12M%2B6yzGvmJLkuOn2Yfgkft3AvvNzG4ezSuv%2BzELJjku3qI01vdYggRgMABUcdDwyV6z7s4SVd0RO7OsxS7hEGCleXJlA%2FmKWFOy6RnZeMEsOoZPRkYwn0yRrP8%2B7jXwsbNZiARLsXomyGSabTRWvrDfD7ub6SzPlWdfoXKypA6b3AmBo620VUua0JKqvVUCzhCHBRxv2BukuXLMKS5gcEGOqUBLPPbBhkw7Em%2BWFxxC04Ou17betTYgjvjm1Ah66RVOiTAoDIt%2F7A2U1AN9ygZKjKowtAYq9YqienZbG8FrIb9N2mna60Nia0sZKNgRQR8%2FUwzrRQmqO2PDED9zPGSsPHTnzBahtXhek3Kqn%2BGxH2HiBHg1DQN2LrCuVATB54N3hen5uIHKSLDwSsbTKszK6EXPP%2BwQcVEWD7cRkKEJIfbAxk9k%2FhH&X-Amz-Signature=df81586ea1b5f58789ba3dde7b1c079c776e40ac453ac7ec8eca85c241de4221&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5UGOTN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDk1nLTXy7n0iBjT8zwShfFm0wvHNHNX1a8UP9qYjjbYQIgaLztqnAy1lEx%2FduTwMImPCmBIEQUYD4ol79qVIFinh8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhx1UYqW%2FfxdC3qYSrcA5uuVKJ4KsZXYZuoOIta4MpQ%2F6aB9cvb5DvS0godAIpWWoKv%2B7H%2BhDKi0X7s9s8PoznJkqkDumwBkNLMIrJn44bjaDVz0fJWiHVeTlFYuiMpQ7B%2FvYctEEtVu6i4Sxu8qSdfLKyt4uGIEWygwaLCG9WzOblJB9sm%2BBAhkldjDVIu5cUGl8te%2FTUmw0bxeWiYvILrHVJ3edON36A63%2Ffv8%2BshoVIvFDC3DG9J1%2BRHOkB5IxJqMlTNZMoOZ9%2BmG3QGMWIxwIV1JS3y0V7%2Fzy4wMvZMbgGm9cBEOt8a85tz0uBJMhxpFEdkDbFGAcIidAK7KTfuaI5IXl5wOZ0x%2FPAFmEP3yJ%2F9M3nqZLVPKWh0ioEjdUXhV4WQy6cPho2vzHJDGYdZFqs954KpwPi7bVB39fIi%2FFOXkGMUjENU0coKFYgPH12M%2B6yzGvmJLkuOn2Yfgkft3AvvNzG4ezSuv%2BzELJjku3qI01vdYggRgMABUcdDwyV6z7s4SVd0RO7OsxS7hEGCleXJlA%2FmKWFOy6RnZeMEsOoZPRkYwn0yRrP8%2B7jXwsbNZiARLsXomyGSabTRWvrDfD7ub6SzPlWdfoXKypA6b3AmBo620VUua0JKqvVUCzhCHBRxv2BukuXLMKS5gcEGOqUBLPPbBhkw7Em%2BWFxxC04Ou17betTYgjvjm1Ah66RVOiTAoDIt%2F7A2U1AN9ygZKjKowtAYq9YqienZbG8FrIb9N2mna60Nia0sZKNgRQR8%2FUwzrRQmqO2PDED9zPGSsPHTnzBahtXhek3Kqn%2BGxH2HiBHg1DQN2LrCuVATB54N3hen5uIHKSLDwSsbTKszK6EXPP%2BwQcVEWD7cRkKEJIfbAxk9k%2FhH&X-Amz-Signature=6bc8a8e9156d275f3bccea748ab5caec521ee1e66f78ccc172d6d7ad681d547b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45ELEIM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDwOGuES%2BQKqxf3g89H%2FGZjUKcXD5ID5Z4n43q3dtCf1AiEAwLEOZWpwqIs%2B2oqWjoUIAQIhHhxc10g2jgMcOpE8AwAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEImnopkzJRPydoeTircAwFlJlQMnavMGA3I0UhpjJXtVos40KjRKG5SUmA4EhxN8eC4mU3pW%2Fmvz7m72U9GvD39fPVEqY63qAvNTDT9GVZpIQvhVh5p7K8LwO5yhYlnFs2XPN1l%2FhCprbckiTFLLDozarWWviPlq%2FsfMnrZzafATEPM9OX0u3GGJizINwa3X9MXxK51%2BRfW6lywcvLcXGax3Y2COKdvmfbB5QWYQlX5yLbQtnm%2F1avKiRelVtdw8kC%2BKaeUO%2BO2c8%2BFu6pEQ0NFLeFaEwL%2FfUyGB%2BEznHQFmixB7S7JJfomQStW%2B9WFPNKxLQKTRT7FWN3oH3UwBzWxlXTg2oNkeosmMVLIV9C%2BfVxVENE9n4D2MAysr7GwF%2FmAMPgE8h1QEr4BraV%2Bsm%2BT%2FBwstp3LB27JmYs0egTBbkvpETDH2a7Y7rh3l2uOnASbArWDctq3vVgZzZdFlWS%2FNVFlsjEQ6Axr3e5E%2B5i2%2FtKc0AU%2F3P1bG274SgFu8fm7uz6STOkmilcZeaJqUS%2FI2aWWAfB5WG1kjVs90JLjDrTuRLNuS%2BhwXSK%2FuOdobWa3eLKp3ZK5oYZdeN6pk8q1SYnRHCmMgJkdwheb%2BmO1rinXITwrclP5jBHNU7yE%2FXu3qKf2LbPX0ddbMI25gcEGOqUBcyPZNtYubD8PQEQrG8I5PSm5QcLhjjUmWWqnQdvWMDkF823%2BpNyXuSHVze9WRF3MAB3E%2BSb2GHnGFusMwCeCnjRmpDKIFWJg1XJ4iC3I9vA%2BbyIiZrbBscrR%2Bj8xg%2FdvOn2k1s4E15EC%2FaCCO%2BvUP3oPgChAKto0elodIlsJ%2FUCqR0uyqqQwcrjq7JzUECwTNMMtw8JLZC8foFkltcacbUsUYzHq&X-Amz-Signature=518b636b7e4975a9e27059ec5a4467c5980fd8919468237852ba0f8e4115ca89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPXIMA7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIERS9lX7e%2Femn%2FW%2BSye3tcOh%2BUiyI69A1NJfoQ6ISexhAiAUoxXqbhuu9581GST3r7r%2F8lKmMrQcCeQoCnKh46ck9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FyasLDuLDH6HzLZKtwDIVCFSDhNvocrfderm%2FlSHD001hgevnwDuEGKV8G3xvtsr%2Bu34sivIKgi51%2B%2BKISDmtqsKx1BBLwRbyo47gqjxwnYLO8BSJGX%2B9zGkZIdD4IwJ%2F3AqyLlUFPbtTcNPnMvggZo6xq8rpuNXwywcaUI%2Fm6GivxqWSYjcGlhNvPOTzRVjcaKApmvHGm8OSYK3%2B2928BXGsnCq%2Bryp80PfMh4X9p2iPMUzVuJ%2BWr55Tae8T%2F0pj0FXmT4UKcISylo%2F%2BUmq3h0veZjMyrxlW4Qieyfmwwdu%2FmN%2BI28n2cx3cCk18aGj4dOjVuqRmheWBCGtt0cNDYo6j%2FiESg5gADro20ESdkXM4JjMz1kI7mIsBMCjNtm4ucV%2FHzYo5GqpK87OYNzz%2BaNETf%2FoTIaQrgWQgh4T2%2B6I%2BkEy5cqwDI04Kax8JyaYxNLJjDQmZMe6Mwkhz1sKbzbcM7VM4cuD06N7T%2FKmBYa%2FU70LuCXjGi8%2F6uyXSK2czTCmmjS48WIhNIkHXcrf0guVnsi0SQlmJfu09d9KetzsdBhOf7v5EoIFzQlJI5iU621ckcS%2B3y0REkfpqF1N6ypnrIWUuDZEGs%2Fd%2BPLhim%2Bh0qaSJjJSdR4vm8OvaTLuDNKJvIPklQAfuowuLmBwQY6pgE0qcGacQsKr%2BrBbxWv9C2NIQHQ3h0%2Filw7SM8px9HrAlDUSTEfOoYp6Hq2tkUUq8WLZcLefI4S4shTTvPJOmSS9k9nk2HtDorPQh3XOGSMxDrpxdKkCZ3Ib7iOoIivGVvHxnDOXxxil%2BFKga7QbuJ28U%2B3xO3QalFFo1meRKFZ5JdYZh05oxVWF9lX%2FoX6z6Zn%2FkxWMaa3vNORXs%2F9ExDjSkpQ8vCJ&X-Amz-Signature=37da51bcac6efaa6839f1760c4463647dc14f25d0de8d3f1a1299c12acb86e94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5UGOTN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDk1nLTXy7n0iBjT8zwShfFm0wvHNHNX1a8UP9qYjjbYQIgaLztqnAy1lEx%2FduTwMImPCmBIEQUYD4ol79qVIFinh8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhx1UYqW%2FfxdC3qYSrcA5uuVKJ4KsZXYZuoOIta4MpQ%2F6aB9cvb5DvS0godAIpWWoKv%2B7H%2BhDKi0X7s9s8PoznJkqkDumwBkNLMIrJn44bjaDVz0fJWiHVeTlFYuiMpQ7B%2FvYctEEtVu6i4Sxu8qSdfLKyt4uGIEWygwaLCG9WzOblJB9sm%2BBAhkldjDVIu5cUGl8te%2FTUmw0bxeWiYvILrHVJ3edON36A63%2Ffv8%2BshoVIvFDC3DG9J1%2BRHOkB5IxJqMlTNZMoOZ9%2BmG3QGMWIxwIV1JS3y0V7%2Fzy4wMvZMbgGm9cBEOt8a85tz0uBJMhxpFEdkDbFGAcIidAK7KTfuaI5IXl5wOZ0x%2FPAFmEP3yJ%2F9M3nqZLVPKWh0ioEjdUXhV4WQy6cPho2vzHJDGYdZFqs954KpwPi7bVB39fIi%2FFOXkGMUjENU0coKFYgPH12M%2B6yzGvmJLkuOn2Yfgkft3AvvNzG4ezSuv%2BzELJjku3qI01vdYggRgMABUcdDwyV6z7s4SVd0RO7OsxS7hEGCleXJlA%2FmKWFOy6RnZeMEsOoZPRkYwn0yRrP8%2B7jXwsbNZiARLsXomyGSabTRWvrDfD7ub6SzPlWdfoXKypA6b3AmBo620VUua0JKqvVUCzhCHBRxv2BukuXLMKS5gcEGOqUBLPPbBhkw7Em%2BWFxxC04Ou17betTYgjvjm1Ah66RVOiTAoDIt%2F7A2U1AN9ygZKjKowtAYq9YqienZbG8FrIb9N2mna60Nia0sZKNgRQR8%2FUwzrRQmqO2PDED9zPGSsPHTnzBahtXhek3Kqn%2BGxH2HiBHg1DQN2LrCuVATB54N3hen5uIHKSLDwSsbTKszK6EXPP%2BwQcVEWD7cRkKEJIfbAxk9k%2FhH&X-Amz-Signature=58ac4c7f82fb621c4e4d56da46170e6fd2d55c6ae8ba4d21910096d868e6d12e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
