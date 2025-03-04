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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTNGH6T%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaXG6Q6TuGY980dolc%2Ft%2FIFfkm2f8CKRmrLZAjWUgayAiEAoFNuYSJaA0hP07RkzYuttgS8iScsrB8Uygk16TOJqEMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP18xlYE4nMbFOIa6CrcAy%2BQoj4HOLiBIEC8tKpvQC64%2F8JmzrJK5Mp89DGj0XrwYQlDgmKgQTw3EXGxYgY1EfZIcJGl6PAa3JZi08u7%2BCWzSX9atPrsoLoACQx8SIa1XvjCnkQnpSeOyTEiwboyFfwXslLFr9dN2vA%2B5Or3F5QoinOJGLNqbrdVaXOcLCJ7bCuYBYjKY%2BWm1WDYeCFTaIj3RjWXhpi0Pj%2Fl0ZsvTKB0AvQCw43pQk5svJ4sLuI1o4Giq0ApVY57aobZzPVNOwl3oh7npvx5vwihh7lNixJnzg%2FHWGA%2BlGdvg6rjhv8TnUydpGkQzwumpPg6H4uJi0OZJpNB4CZ8dOUXbqg5NCBw0wHbrAzAdrltQgt6sCWoAiPyv%2BAEDa%2FUo%2BEV%2FsDxWRV6G6DwhiPK4wKOlctVIVJICtJxN0fjc%2B5z52l%2BWmNMZJBmxFlUH4vFZE%2FgUkmYlwNXA2FxJ31wHUQEwwaQAIKTRcUYZhUpU0OPexufEe6jIkYRxADPk%2FZ3AHT68ZuN0KjCgqApvNQHIGC02u8p7PMA7yx8h%2B8QI7Ko8ctfXIVWub2wshMPYkLuS5qGGqXACBbnIdYko6ywxX9RPGeqCG4gRKPa%2FdIknf8OvyCNj2LncAeR33wQlf7WgWl4MP73mL4GOqUB5Q3QVrOId%2F%2BmY6so9Oo%2F8QNWNUDGTqtkCgc6hbQ93DAL%2FpfF5CYDa%2BeZDnNcgDYeNGlcINScqkP6cE4kWeAWeoWd1zo2QY809SYlDLQwZzxxGubneXic5WpNXms1LNgw8g6TVlTd8Ajh2ySRnF7Pnxfst1zUp8yPe85Nwr454Qx5e%2FdUmBA5M5HEV8TTL7YKADkP4E0TyYqcQzf6xgPgE5xJDGx5&X-Amz-Signature=0fa9f343491b26f22516bd66132770c89ac436e958de5a233766b43d6df6ef6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTNGH6T%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaXG6Q6TuGY980dolc%2Ft%2FIFfkm2f8CKRmrLZAjWUgayAiEAoFNuYSJaA0hP07RkzYuttgS8iScsrB8Uygk16TOJqEMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP18xlYE4nMbFOIa6CrcAy%2BQoj4HOLiBIEC8tKpvQC64%2F8JmzrJK5Mp89DGj0XrwYQlDgmKgQTw3EXGxYgY1EfZIcJGl6PAa3JZi08u7%2BCWzSX9atPrsoLoACQx8SIa1XvjCnkQnpSeOyTEiwboyFfwXslLFr9dN2vA%2B5Or3F5QoinOJGLNqbrdVaXOcLCJ7bCuYBYjKY%2BWm1WDYeCFTaIj3RjWXhpi0Pj%2Fl0ZsvTKB0AvQCw43pQk5svJ4sLuI1o4Giq0ApVY57aobZzPVNOwl3oh7npvx5vwihh7lNixJnzg%2FHWGA%2BlGdvg6rjhv8TnUydpGkQzwumpPg6H4uJi0OZJpNB4CZ8dOUXbqg5NCBw0wHbrAzAdrltQgt6sCWoAiPyv%2BAEDa%2FUo%2BEV%2FsDxWRV6G6DwhiPK4wKOlctVIVJICtJxN0fjc%2B5z52l%2BWmNMZJBmxFlUH4vFZE%2FgUkmYlwNXA2FxJ31wHUQEwwaQAIKTRcUYZhUpU0OPexufEe6jIkYRxADPk%2FZ3AHT68ZuN0KjCgqApvNQHIGC02u8p7PMA7yx8h%2B8QI7Ko8ctfXIVWub2wshMPYkLuS5qGGqXACBbnIdYko6ywxX9RPGeqCG4gRKPa%2FdIknf8OvyCNj2LncAeR33wQlf7WgWl4MP73mL4GOqUB5Q3QVrOId%2F%2BmY6so9Oo%2F8QNWNUDGTqtkCgc6hbQ93DAL%2FpfF5CYDa%2BeZDnNcgDYeNGlcINScqkP6cE4kWeAWeoWd1zo2QY809SYlDLQwZzxxGubneXic5WpNXms1LNgw8g6TVlTd8Ajh2ySRnF7Pnxfst1zUp8yPe85Nwr454Qx5e%2FdUmBA5M5HEV8TTL7YKADkP4E0TyYqcQzf6xgPgE5xJDGx5&X-Amz-Signature=4e2661fbe718e5598b9072719f8801bf14bbf04d08b4ed57957784ca74bc05ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRR4WR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaLY03h2ZHOU%2BIO9Vy6NpjXobevGr6NKTMHeJaX9RhDAiEAqhgkBHIgr7aD3HDfmrvHx%2FpkNsn9BlbaFsb3Iy1O6rcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZkGZEpSLxwFwnVjCrcA%2BVNw9ksCRru3OLmrchf%2Blu52ta3S6HVe%2FHsKmlb09JYu6kWKyTLtuZk2ua6XymfUfWAHiDJ0V8yUL%2FDrV66HcPAzNTB2XqncU9XWhp3dp6VlEwcIPRlk1ONtXoKbBJvjA9ufI9PTWMST2dEGvzD6O4EuYEWWQQ38dwX8ONy7Jx1plkOhR4wdLsRo9j0a6i%2FfC%2B4BdngERfmhi6wgy8aK%2FiUgJvMhJsI2kw7VL1ZW5CHa4bQcsldYkszf0BVhnrEf5cUDg1wpMsNPw9wcgPG3MF2pSfU4JwqlVfTZiYMh07vKim4Nss8pe795RS9FGwn3TW06B2q4ql9Y%2BwYstNANI3hUwy3nJyDBV1UxyVhwVp%2B%2BqHxtUTCBbGBYLHfVIn3lrxHA5XAYWdze0UAFRCGhU8iGsYyTj9fMChuhNnft2p8EVnTM4eJZf4YTIRCinSr%2F%2BTEUZSeiriw6cnzLOCcTAyN2uwWtADuuPVFyXQNIx%2Bm2qWBybHZvV2tdEGldcQL8g7b5Jv3J%2Bre%2FE%2B2MvYq%2FXJ6DC6k1DTJlbOHTajZQZfB2VUgw3I%2FlI0zyChETwp%2BFtWBS8ci3vaJ4rdZm4PbbdI8yBwCczK%2Bvy7ToOfxdUQcv%2BKRUObJe%2FEMXHgiMKH4mL4GOqUB21T8zyitpXofNifGMLS708jNt73TR0ePO70G1eV6iJN58Y5amD6rNdPbsuTCWRvtjjs4VCuxVHIv1aCln4Q0gsOgDqvhKpHW67vdE05e5rLUmJb4tiBXqzR4k5YKGz7mtqHSOIdn8R7p8rHdCBnFlX7HaM6QPt5hOJVdDNTYmZc1685LzHEsZdBs77fobgqtFfGcvheieYoleCSpDB9ELW%2BcWpeM&X-Amz-Signature=2919fd0f1322fc14769128709f6a55b7672264bf60c31ddcd61e6f8cb0652041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWXFKUD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIx2ZVHo3vl6G%2Blt025DzibrS1SQnhEa3qwZtmjly04AIhAPmTZcvZMSpNg4B2sKXb3O0JjWEiNlbZzl8U2iePQU8iKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElr6i3FqmaHoZZKEq3AOIvJJU6QnvSkjBXnEU%2F9T0I8Jf1bnp%2BZtWzMvF3DjpSrmoRfsXJ1CqGWde8x9vMXXV4KVgsF2QHGKLgAWM3sL6q1Sfz0GvbI%2FiqhC2jUdz7Yi5d9VgeMaovHNd1xp6leC1lmIyhA8NCVOfThS2KBiuB%2F2MgBdFwDBennb6%2Fuk9aDfmAO5X2%2F979sXH1gVisPMN0KZFrZly6jNqrEFwKcKT4iPUHBq2eNNrmnC5m6%2BQm9a8LXSM96%2FsNVD3We2DC4nQkAUTzH5B384fnhuKWBupDqzJXBAs%2BO8wQN08BNg8%2F6pTGbwAOLrD9K%2FbQu8rN7pU%2Bq74wid%2FtvEdkwZJid1cIvqKoMMtvMnoF7GV0BiTnIyGY8kqCsUHKNh6gnjVHqbgQC1s9HG913N8dLGizqgTOVJAEuyB%2F9W8Betv2TRNWHw%2FpV%2FaK0dtSqaTohdNcw0GjY6I8RpeFAchcA4kVRN%2BAA81wHVo9PQ1KV9Bn9G6syQaExlUsojZGY42DbFllftoZiB4XRFRaF8KcKEy37L1P9CDMA77e7qDOJyM8pzXK8WvGgpAngw0YL0St1F5J6WwDBji4t88DBaDuUyDPDKFXDNFhhs6Cq%2FHYQ913VrpliZl8dyS8fWmGAv82jCZ%2BJi%2BBjqkAXjLh04fOqaHT9mU1choRQHpQi%2BTR1nMH03PwfJ9oPGuwENHL21hYGUBnNMXtB5lQUWFXgYLMIMQ0FBpPky1DOnPQHMaZeGXFZxF6DJzlzxUWKr5Hf%2BOfprToGJz%2Bvv4ohqZ98UINt7lYEmu3doyQqhikyNR%2BohR773spUZqGiNhIw0LtARLcP8M6bWB0MMvwbkd4xf9hodZkvD%2FnLSmR7f52jc%2F&X-Amz-Signature=8533ec9a7c382a90c1a610cb80de5a65460e5ee2dc5e8b7684093009f7173153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTNGH6T%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaXG6Q6TuGY980dolc%2Ft%2FIFfkm2f8CKRmrLZAjWUgayAiEAoFNuYSJaA0hP07RkzYuttgS8iScsrB8Uygk16TOJqEMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP18xlYE4nMbFOIa6CrcAy%2BQoj4HOLiBIEC8tKpvQC64%2F8JmzrJK5Mp89DGj0XrwYQlDgmKgQTw3EXGxYgY1EfZIcJGl6PAa3JZi08u7%2BCWzSX9atPrsoLoACQx8SIa1XvjCnkQnpSeOyTEiwboyFfwXslLFr9dN2vA%2B5Or3F5QoinOJGLNqbrdVaXOcLCJ7bCuYBYjKY%2BWm1WDYeCFTaIj3RjWXhpi0Pj%2Fl0ZsvTKB0AvQCw43pQk5svJ4sLuI1o4Giq0ApVY57aobZzPVNOwl3oh7npvx5vwihh7lNixJnzg%2FHWGA%2BlGdvg6rjhv8TnUydpGkQzwumpPg6H4uJi0OZJpNB4CZ8dOUXbqg5NCBw0wHbrAzAdrltQgt6sCWoAiPyv%2BAEDa%2FUo%2BEV%2FsDxWRV6G6DwhiPK4wKOlctVIVJICtJxN0fjc%2B5z52l%2BWmNMZJBmxFlUH4vFZE%2FgUkmYlwNXA2FxJ31wHUQEwwaQAIKTRcUYZhUpU0OPexufEe6jIkYRxADPk%2FZ3AHT68ZuN0KjCgqApvNQHIGC02u8p7PMA7yx8h%2B8QI7Ko8ctfXIVWub2wshMPYkLuS5qGGqXACBbnIdYko6ywxX9RPGeqCG4gRKPa%2FdIknf8OvyCNj2LncAeR33wQlf7WgWl4MP73mL4GOqUB5Q3QVrOId%2F%2BmY6so9Oo%2F8QNWNUDGTqtkCgc6hbQ93DAL%2FpfF5CYDa%2BeZDnNcgDYeNGlcINScqkP6cE4kWeAWeoWd1zo2QY809SYlDLQwZzxxGubneXic5WpNXms1LNgw8g6TVlTd8Ajh2ySRnF7Pnxfst1zUp8yPe85Nwr454Qx5e%2FdUmBA5M5HEV8TTL7YKADkP4E0TyYqcQzf6xgPgE5xJDGx5&X-Amz-Signature=9f76cc319306d28e75f1122830feba5272c1cdb5009a6d4777022892cb0c6076&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
