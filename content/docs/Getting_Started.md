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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NX4GNM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGHXeuim7BOeaHL9DhA15Uwk%2BAQpPa%2BDl7aaoFKiV0iRAiA13SaaBO37tylw3%2FY5eqpL%2FKXYhNfpnSZqDnT4wM%2FUtSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM6Th9GTP9gKV0CIl4KtwDYv%2FZzYvAVtvVnTpJVvOo2c%2BrYyDLmPhnMUm%2FakrI5dEbPXxO5lUrxIg7QiTS0n92x5H%2BnFvQXwtzALwJVLRFLxbn6Fm2jjrGzfuNsifTcONYz%2B1DGwo%2FtFNlBuCTVAkB3i06AkNA6WRENuFrHI5QeN15VNC5S7j55Utlb1u0ZT%2BJmykVzDqP7FzjDXFwe%2FUzRV9pjN%2FjsA1jB2tl7iic46egNqwVU39vqT1FwtdJ9XDDQPRcAJmIrhjC8D%2BwecXECpx6VM%2BzihEy4PK3fFywY%2BCdeW6czDmfXlptD9ffsXeX10MWiqWUqxQeGU%2Bbza22%2FQXrFup7fVvg7Lr0ocYtfNeQ2pFlZr1KHHk%2FVloaYkBHrYcXQvdmF30%2Fw8GrD%2B8vaMCluax35ELLn1676SukOf3olOnin4dA956VpQs38NH78YLusYsqH721JT9X2pl7XoWFF%2F8HywK0YWu8sjpzN5xgIBJzPeOSmSCFgaeMy2xWIbwTZnOhGa%2FhypQkmblR29hRCo%2FTpZ3x7fxW3N%2FxRdwAaL%2FUjbA6EJ0btqKw9sdSSGzsfbLCxwgvYNPxlpMzoQtFkwxAM3KI%2BfisazHpj5%2BQ26xPzJJv6f6Nyrtp9UbL8fNZCeGEqnkOPEwwlvOyvgY6pgGxBywloaSWrc0%2BspAPSE7sSddh84U%2FqsfdTCGINWWz9b%2BvVZjubH4DgyZ2d334%2FZGp9DffskWc4tqkinmNq8nsavwzpvVB77OlmYyQLhWS0PS440xxccPtWm%2BiIP1phtFNdXGCVC%2Fv%2FvQIJY4nZpcU5NqAZ3xtmPDyCpfrFdQZcnMtTZaT8VaQg5FB0di1vujcJ1mRh3bvWW66olABFLZ2WQJnyhoI&X-Amz-Signature=d0e653bb6478aa41dd4b73146a662b7e98fd8596b4e6352fb6ebc0591c58c4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NX4GNM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGHXeuim7BOeaHL9DhA15Uwk%2BAQpPa%2BDl7aaoFKiV0iRAiA13SaaBO37tylw3%2FY5eqpL%2FKXYhNfpnSZqDnT4wM%2FUtSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM6Th9GTP9gKV0CIl4KtwDYv%2FZzYvAVtvVnTpJVvOo2c%2BrYyDLmPhnMUm%2FakrI5dEbPXxO5lUrxIg7QiTS0n92x5H%2BnFvQXwtzALwJVLRFLxbn6Fm2jjrGzfuNsifTcONYz%2B1DGwo%2FtFNlBuCTVAkB3i06AkNA6WRENuFrHI5QeN15VNC5S7j55Utlb1u0ZT%2BJmykVzDqP7FzjDXFwe%2FUzRV9pjN%2FjsA1jB2tl7iic46egNqwVU39vqT1FwtdJ9XDDQPRcAJmIrhjC8D%2BwecXECpx6VM%2BzihEy4PK3fFywY%2BCdeW6czDmfXlptD9ffsXeX10MWiqWUqxQeGU%2Bbza22%2FQXrFup7fVvg7Lr0ocYtfNeQ2pFlZr1KHHk%2FVloaYkBHrYcXQvdmF30%2Fw8GrD%2B8vaMCluax35ELLn1676SukOf3olOnin4dA956VpQs38NH78YLusYsqH721JT9X2pl7XoWFF%2F8HywK0YWu8sjpzN5xgIBJzPeOSmSCFgaeMy2xWIbwTZnOhGa%2FhypQkmblR29hRCo%2FTpZ3x7fxW3N%2FxRdwAaL%2FUjbA6EJ0btqKw9sdSSGzsfbLCxwgvYNPxlpMzoQtFkwxAM3KI%2BfisazHpj5%2BQ26xPzJJv6f6Nyrtp9UbL8fNZCeGEqnkOPEwwlvOyvgY6pgGxBywloaSWrc0%2BspAPSE7sSddh84U%2FqsfdTCGINWWz9b%2BvVZjubH4DgyZ2d334%2FZGp9DffskWc4tqkinmNq8nsavwzpvVB77OlmYyQLhWS0PS440xxccPtWm%2BiIP1phtFNdXGCVC%2Fv%2FvQIJY4nZpcU5NqAZ3xtmPDyCpfrFdQZcnMtTZaT8VaQg5FB0di1vujcJ1mRh3bvWW66olABFLZ2WQJnyhoI&X-Amz-Signature=f553dd8db5f079308b04f8e15206acc1ce21bda85ae86dd60dcd906126f24fba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLKV5YR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICD03ZYYpB57ftUe1w66Q3vrP%2FTxVPDvjwb%2BHw8QRdMjAiAEatJmSpFpbysMAMyVfNEYDMsRaGgfxU81XajCJ4Hw7yr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMbOjbmgckjmdD52PdKtwDJrBk3%2F%2FO%2BBKe0zgk7EFRhndhy69uRm6V6IGSGLVew2bsS9ymycyQH5ZOIky4C1k19n%2F6myxktl6U4qgVW36Oa5cCmt1RDYKIR%2Bw8q9V1MwcJPV3w3%2Bu1avFSRP5MHwrM3%2FSrx7wF1tqhHW33CewftXS5jBpBxwaD2Zz6gjYEmP4V84L9GUwZcgIpfnzIdB8WeKfNrfJ3n8N3UXeygFtPF7Wvxf%2F0XbbUmTmrVRMVIqFMJFMnydj%2FhPmbk22TURkw2Rk765eEJgY9QNlP208SYXLyDXUNvXlM5L0kVWqr0NJpiXEjQdUdFlY4jVRkCgBJf5TtJguIzNn4OYsI6EFUs08qOqrjf%2BjW4N4a3Di%2Bgpq2mS7L%2FXlE3Sga9cy0XYYj6MOgLrTmVLPLECSsB4UiFOL%2Be88hb1yTjGrVdn%2BC2riSMpqtkx03PEhHEih9rhA7Q46BkK3kmkHtbSD5BmxNzxthBmON2Q8e77k1oUZfcXwgklAdQpkskWA1PcKVrutxs0DGC4VLUxmqzvmTytQFHiBIN%2BJQRAEoagKItRyTBzR%2FO3Ud2OvBM5WpgJGVtM7BI59E1CI9vsJtBN%2BIhFFqUq9jL36jvCR0WvdQok3jXe79zHyYkYe4uRFsYMUw%2FPKyvgY6pgH8n8yYcgMxt04rgebRK2zgrffiRP2ublAQiKkaNU8p970ya1IbUDyED6y7T7D5u0TthtJkLLPuUBhgGtyqdrpgkO79NQt6QspOAdcAwS8hzrXaXColWEdDykC8pf1%2FmDjRSpaNeGJjYhMwOXztjzujuEwaTPLAxxvx9hqU8PFItOxhSZDqYHNNJhCW9vymfIYDh9PqEo1DRzO6uQlKYgZkEIpOlBVD&X-Amz-Signature=f9fae4dbfdb2c2722b25f5af21a7d34ebb85864bf108ec3e87eee311aee4b679&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3NJ3ZCS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD291rXh1IzvgjgiHjzbQjIZg7TDMuYi5KD5JUZUR5Y%2BgIhAIOOCdbdwk3C6N4lPOXgelg7xmS0ltFrg3NadxM7TEFWKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjNE7hvHo8nEP9%2Fhgq3AMdgANOoihzsRVu%2BBHnpWRp5%2F%2FRL6RMFIcik68hJ7QE5QjD68IfjaFfFkksKZr4HFjZb2svkTr9BvmaBpZwwVaKgivAAwVYVRlSNrc0jDWoZ5BYoBUnSWTTn%2FO4KijFeRcGSX3VJiHgAt2Uos1vQCvVuH%2BtrwtNYxQc6brZZpQtuK5HuRnZx2NHAgnYg6fm4GX%2B84GFv8kwd%2BHgOXpCFjtgxHq1%2F7sMJHTekWtnurzyfL9ZlYkWVehpfQB6M4iZSwgLiZgJCjpivOfvcLanAn%2BtGyNcCttlCPP57bTEAwCNCng9ZGQhPhrpe0hMwNVZJnjtzacqja6t7QaEMd0RS2OxxE6C4O00Od5B8ZVHLzu%2FCi2zDS%2BTBxjBQIv6xKmvtYrgoe17WMMnrQeqsLyJFhOhsCKr8RIISFkulc6N6kmWWFFPnL3Yjbzg0%2BJXwtNXlb7ObJ4td4y0juPa%2BbkQ%2Fbemce1rsnqc3Zt2JT8kaBHu3IFODEZFm6qpB2QvqZ3U%2FPAIlmDTqv6jtUQNYOgucSipBxthY8sQ%2FSv0GnOzxHJD%2FdDEv%2Fo7icNImryvoy8isgEb1S0kQfYVAQZ1k0GO%2FQP3ltHbR1cIqw3Vfu7zVH0%2BebTq5vZK%2FjZzFjHTmTCC87K%2BBjqkARpR2M16CUKCOZv%2FmltNhAjWTmiG3%2Bhk4OqyoSKoYzIkprWqC00Qhf%2BcY%2B4ZiaBVzrs3VJ30QlzifDIJLcq7ct%2BckK7rc1W3%2FyArRTWaTdU2bT7Na1pfttCe5lw2IhUFrz%2FFxdvUJbNprncDtn9fMc3Jl8T8kgNHA7Yi96uVpgotFUzZ%2Bespr%2FYbvnf0uMz0dEUdBHK2VzTkq0PLVtwQI4oEW3rk&X-Amz-Signature=ec4885486f63c1a5ffe1b56f0bc2391bdac06df95e260cf17ce6a14d3724f6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NX4GNM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGHXeuim7BOeaHL9DhA15Uwk%2BAQpPa%2BDl7aaoFKiV0iRAiA13SaaBO37tylw3%2FY5eqpL%2FKXYhNfpnSZqDnT4wM%2FUtSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM6Th9GTP9gKV0CIl4KtwDYv%2FZzYvAVtvVnTpJVvOo2c%2BrYyDLmPhnMUm%2FakrI5dEbPXxO5lUrxIg7QiTS0n92x5H%2BnFvQXwtzALwJVLRFLxbn6Fm2jjrGzfuNsifTcONYz%2B1DGwo%2FtFNlBuCTVAkB3i06AkNA6WRENuFrHI5QeN15VNC5S7j55Utlb1u0ZT%2BJmykVzDqP7FzjDXFwe%2FUzRV9pjN%2FjsA1jB2tl7iic46egNqwVU39vqT1FwtdJ9XDDQPRcAJmIrhjC8D%2BwecXECpx6VM%2BzihEy4PK3fFywY%2BCdeW6czDmfXlptD9ffsXeX10MWiqWUqxQeGU%2Bbza22%2FQXrFup7fVvg7Lr0ocYtfNeQ2pFlZr1KHHk%2FVloaYkBHrYcXQvdmF30%2Fw8GrD%2B8vaMCluax35ELLn1676SukOf3olOnin4dA956VpQs38NH78YLusYsqH721JT9X2pl7XoWFF%2F8HywK0YWu8sjpzN5xgIBJzPeOSmSCFgaeMy2xWIbwTZnOhGa%2FhypQkmblR29hRCo%2FTpZ3x7fxW3N%2FxRdwAaL%2FUjbA6EJ0btqKw9sdSSGzsfbLCxwgvYNPxlpMzoQtFkwxAM3KI%2BfisazHpj5%2BQ26xPzJJv6f6Nyrtp9UbL8fNZCeGEqnkOPEwwlvOyvgY6pgGxBywloaSWrc0%2BspAPSE7sSddh84U%2FqsfdTCGINWWz9b%2BvVZjubH4DgyZ2d334%2FZGp9DffskWc4tqkinmNq8nsavwzpvVB77OlmYyQLhWS0PS440xxccPtWm%2BiIP1phtFNdXGCVC%2Fv%2FvQIJY4nZpcU5NqAZ3xtmPDyCpfrFdQZcnMtTZaT8VaQg5FB0di1vujcJ1mRh3bvWW66olABFLZ2WQJnyhoI&X-Amz-Signature=8769e72d7d53d494d6700b71a605f00f86caf94d84dff0ea9992979dc0a46ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
