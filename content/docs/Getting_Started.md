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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NOG5LUV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7iPIY%2BtYC6prQBclFlkV5V8CHId9VRhLVmLjALYHKPAiBPa9dt4OZ7FVqK8uhU5HU5jKPI5nIlEp2cv19FKP08gyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt%2B%2FRYJ6aNP5t2BRKtwD%2FkJO4eRn896s8irA%2BDBJJRqp1v%2Fb42tOD8xQkbpwnRr%2FcUl19EmE3i8lZZxP5uQaq%2F827TRPL9RFVWwtTgJ%2B%2FqjduAnYkzVZssfEVT1wE7ExDio4yBv5DQsgnvn7QOqaXqVkQxBYw6MjZ73bkdBHR2TaPP6GpxOxA9fM8jH08liQrtuUEyKOlt1x%2BDGFYnXI6k%2F4EHpdxsHrr5OsjvPId7PJCly4CiCBNzDvAt8QDPLTIrSmJVdJMLD7D3UIEiScD9dLSGhRM%2Fv2LvD5MctVhSAwMSLJNNzgpIYeRPVrzvMKf%2FQPS%2BANDlOXsBW8ssZxQpD3xCUqGn4%2BsGlSUTv3LbnzWsLCGxeOpSdhT8klazIt9cef7SNDMzBTPh6%2FHC1q3fqOf%2BJxiMVTeCo%2BQk9qhhs9joiY6nImlut6%2B0fEu%2BZBZ%2BALavgxgUiJq%2Bly1L3C18JfMFmM7vetwryHzid5KVppOIhsllPAY90ofXEZKIS%2F2xwOu3fnd23DYc%2BxoaTY7W5AjHcTFbd8LoG7mRHiF4YffOBiij8NXHxB2YpNC2ck2qmj2e%2FYGvrzSzx63L7lWv%2BQseD9kUUruTX6qMxbcRR1cKgvBpYQawaRja%2Bc9aCxHmv%2BqWIHBgjwtJYwxtnKwwY6pgGyJqnqZbyxrB%2F2rTO4%2B6HGleZkcfLG9JKtU7OueKFrmje6M0NAxbNdsO91ASWctyYk3qhDnSAvvZ7L7p0uCNKyUdRpqzHDgb7WG5ZCOgsM704Cdh4i7B0MrDuNl%2Fe3QhSN07go5jaZHXN9i4eLhFKGAD3oR81y5RV475voowK%2F2jr8L5cQGSi9Ly8eeM3Ot61k%2F1wYcAfGVq3RvHaaI1oqubakJdfj&X-Amz-Signature=106ac4985c9c664277d4e3691ef586dfc53b0457fe6dcd67dcd5191c1315ec60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NOG5LUV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7iPIY%2BtYC6prQBclFlkV5V8CHId9VRhLVmLjALYHKPAiBPa9dt4OZ7FVqK8uhU5HU5jKPI5nIlEp2cv19FKP08gyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt%2B%2FRYJ6aNP5t2BRKtwD%2FkJO4eRn896s8irA%2BDBJJRqp1v%2Fb42tOD8xQkbpwnRr%2FcUl19EmE3i8lZZxP5uQaq%2F827TRPL9RFVWwtTgJ%2B%2FqjduAnYkzVZssfEVT1wE7ExDio4yBv5DQsgnvn7QOqaXqVkQxBYw6MjZ73bkdBHR2TaPP6GpxOxA9fM8jH08liQrtuUEyKOlt1x%2BDGFYnXI6k%2F4EHpdxsHrr5OsjvPId7PJCly4CiCBNzDvAt8QDPLTIrSmJVdJMLD7D3UIEiScD9dLSGhRM%2Fv2LvD5MctVhSAwMSLJNNzgpIYeRPVrzvMKf%2FQPS%2BANDlOXsBW8ssZxQpD3xCUqGn4%2BsGlSUTv3LbnzWsLCGxeOpSdhT8klazIt9cef7SNDMzBTPh6%2FHC1q3fqOf%2BJxiMVTeCo%2BQk9qhhs9joiY6nImlut6%2B0fEu%2BZBZ%2BALavgxgUiJq%2Bly1L3C18JfMFmM7vetwryHzid5KVppOIhsllPAY90ofXEZKIS%2F2xwOu3fnd23DYc%2BxoaTY7W5AjHcTFbd8LoG7mRHiF4YffOBiij8NXHxB2YpNC2ck2qmj2e%2FYGvrzSzx63L7lWv%2BQseD9kUUruTX6qMxbcRR1cKgvBpYQawaRja%2Bc9aCxHmv%2BqWIHBgjwtJYwxtnKwwY6pgGyJqnqZbyxrB%2F2rTO4%2B6HGleZkcfLG9JKtU7OueKFrmje6M0NAxbNdsO91ASWctyYk3qhDnSAvvZ7L7p0uCNKyUdRpqzHDgb7WG5ZCOgsM704Cdh4i7B0MrDuNl%2Fe3QhSN07go5jaZHXN9i4eLhFKGAD3oR81y5RV475voowK%2F2jr8L5cQGSi9Ly8eeM3Ot61k%2F1wYcAfGVq3RvHaaI1oqubakJdfj&X-Amz-Signature=9478e3f64c8cdc2ced20e58030df96425023e84706e52f493a9dfcc1a182ad6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NOG5LUV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7iPIY%2BtYC6prQBclFlkV5V8CHId9VRhLVmLjALYHKPAiBPa9dt4OZ7FVqK8uhU5HU5jKPI5nIlEp2cv19FKP08gyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt%2B%2FRYJ6aNP5t2BRKtwD%2FkJO4eRn896s8irA%2BDBJJRqp1v%2Fb42tOD8xQkbpwnRr%2FcUl19EmE3i8lZZxP5uQaq%2F827TRPL9RFVWwtTgJ%2B%2FqjduAnYkzVZssfEVT1wE7ExDio4yBv5DQsgnvn7QOqaXqVkQxBYw6MjZ73bkdBHR2TaPP6GpxOxA9fM8jH08liQrtuUEyKOlt1x%2BDGFYnXI6k%2F4EHpdxsHrr5OsjvPId7PJCly4CiCBNzDvAt8QDPLTIrSmJVdJMLD7D3UIEiScD9dLSGhRM%2Fv2LvD5MctVhSAwMSLJNNzgpIYeRPVrzvMKf%2FQPS%2BANDlOXsBW8ssZxQpD3xCUqGn4%2BsGlSUTv3LbnzWsLCGxeOpSdhT8klazIt9cef7SNDMzBTPh6%2FHC1q3fqOf%2BJxiMVTeCo%2BQk9qhhs9joiY6nImlut6%2B0fEu%2BZBZ%2BALavgxgUiJq%2Bly1L3C18JfMFmM7vetwryHzid5KVppOIhsllPAY90ofXEZKIS%2F2xwOu3fnd23DYc%2BxoaTY7W5AjHcTFbd8LoG7mRHiF4YffOBiij8NXHxB2YpNC2ck2qmj2e%2FYGvrzSzx63L7lWv%2BQseD9kUUruTX6qMxbcRR1cKgvBpYQawaRja%2Bc9aCxHmv%2BqWIHBgjwtJYwxtnKwwY6pgGyJqnqZbyxrB%2F2rTO4%2B6HGleZkcfLG9JKtU7OueKFrmje6M0NAxbNdsO91ASWctyYk3qhDnSAvvZ7L7p0uCNKyUdRpqzHDgb7WG5ZCOgsM704Cdh4i7B0MrDuNl%2Fe3QhSN07go5jaZHXN9i4eLhFKGAD3oR81y5RV475voowK%2F2jr8L5cQGSi9Ly8eeM3Ot61k%2F1wYcAfGVq3RvHaaI1oqubakJdfj&X-Amz-Signature=3410f1d0d2cdb7beb95757f569dd448d2eba73040428b028d3267d8c857d8966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3YABNF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqbv93dCfHgxB9mpxeQZQd7uck3G2l8fT6BnT0wiRy3gIgPv8ZnGOHe3wlPeLkaS85XcyOU6G1ReJb9GEhA2sJPYoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9wJVxH8Ffd2%2BMJFCrcAzW33kTCaCQP9DZaJVXEaCkOuivF5Cif5I5aNHHN%2BYxZYdV%2BvISgUozZnjX%2B1%2FCisHkaIHLgtMNlhmka9px%2FV4dYKG5UF5CNdNCw9%2Bv%2BySUI4ukpEjBSv9uhlyleWXxJpQ9oLed2XVW5z1Wo%2FVLv3NHkf18RqlCRO9CpNHP18hJyHvcgUoaRzuzlAfH8MWXjsRaXdHuArTegvBR6RQE0h3lkQYDl7Ox82uVpHgJRIeiKG0KMa7rdrMsjm9ZM%2FkPzgaq2dmjl1qN6Aqv9ZHffn1%2FjWcXl4Zii8QTl%2FM29qnVIATotuRqqj3h9Mb00b1RJAID%2BakFKCoM1d7sc2lL89O0lqDZjIkFLKaybu%2F1tmyWEoiwYdiSSIGZUVJrv6%2FiYXO4Pu5yqw0c8qknCTV8fyEiKY0AL0BdwltaBJ5eIOKrXowb5jRS2WHAaMno4s6k7cYKCBNnDHwu%2B9JZuqVzC9h8L1wLKXwLrEfM8uf7QgEZo39KjgxKcAqOg8%2FjsjMz%2FblSNQwmJix24MJCftG%2BARsblKUexQ%2BqQ2JenvltuseE%2B6rZQgW59WEZe44v7TnBYWYuCYqwNczxphjdisprIgzZ0ZhAv01%2Br8e8CPfpvtGBptFH9liyB1yVghxVDMIbZysMGOqUBMcZbz2WzrKNTJBzu6EzSFJdp3Ste8ce%2BL0Bd9WVI8%2BHOVFjlj8zH5y68tC37tMoNHKFprWrE1hgLCgBRc78iAzsQgMUMfP9CmfyMEoeQ%2FsNxIincQWTBMuZweg%2Bl6IPpXXPbL8WPQAT5Xsr3%2BodGKZAdPh%2BW5ucmeS20p7BXjTulrQ7oqUkHkMXwbY7I8Gp8lakJo1G8M%2FkJOxdIYSABKL5C%2BXMp&X-Amz-Signature=0bf7c211abce5a5baec43875b2e32e3093bb19f98bfa47e324c97fa67aca9515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3TL7VEX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElYnWQMT6FO1Rb6PktevsDNUfciu8zLi%2FjLzCFN3AkqAiEAjliWZzW6VN%2BTFeq9L14xNs5RTRP%2FBFhqV8eGiiO7LnkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcJM7jt6kxbvsleUyrcA9olO4Wxwq5GeMFyXf%2Br%2FbFppTEgGqomkOoYJ5ve9L1LXtByCKZl5qbMh8P40uJwdrq8bw0xbqvnUayt4rFBUKI8cg7GTE6fwOdix6PP94yfWaku9DZz55UNPiPAtGqOSBr3J6CTOWkIJ3dFSH2JDknlu8uoASFtl9vTdZBX9L8t6hctRXnv0nFfJNfMXgx%2BuYDiRMEP23n%2Fj%2FsKmzla27Nb2%2F7EBzN7VZyK8fIvCGdGG8BrWxFRXh5CDfeoz3P0SChSZ1k5OSQO06HCbuYJKYqS1jyGUBfjW50gaWg5f%2BoCv2LIA14xYBvXDdpLcCwKQPFCYQmnd%2BCHXaE1oSrlj5orawBKHkS%2FNAPcZ5j378e%2BApbd761KY4zFsCKFA5BzzBTky2GhfhEVh8yBasARJ6G5BXucpCHOYVSFhOUcLrpFl8CJYyYNkACemdeb6HGWXjMgETLO4miaNOMuYzAs9UhMZ5OybcQx9IJCLKJb35klhal%2B5rc6fuVh5T9ettwMXxrrqFB840uotDKuKxhnZKaZnCgEqZu5WWmGCjODm78RkFPF0hKxvDNEf7u1H%2B95ZzDY4RmUOrGD9gOIO09yxwZc6T7NCOjG8f4q9XdSwjnds7O3Gcwsw3lqO7ozMNjZysMGOqUBka4AD0x%2F7P%2BqO%2F6f4s19E5jHadLY9r%2FZE%2B3Fte0kmx2ejH1U974znRfFv3e71IlemzrLFTndi9dKHNC3i1EMZpLlSezF%2BP4toAz0eySKmn6iGaXUngq4kuO2t5aZh51G3yUTMMeviD7pQoPFkaaZiPRT9nSYK2a%2BpYCGH3DNuB64knkQupeuvUEOQsqNse8O%2Fv73UHzvRNhdpJzt581sZ9KSjUym&X-Amz-Signature=41d0f0e80b3729adcbe50923e196c1c13f0af73f8a181e60785cc6238d449423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NOG5LUV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7iPIY%2BtYC6prQBclFlkV5V8CHId9VRhLVmLjALYHKPAiBPa9dt4OZ7FVqK8uhU5HU5jKPI5nIlEp2cv19FKP08gyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt%2B%2FRYJ6aNP5t2BRKtwD%2FkJO4eRn896s8irA%2BDBJJRqp1v%2Fb42tOD8xQkbpwnRr%2FcUl19EmE3i8lZZxP5uQaq%2F827TRPL9RFVWwtTgJ%2B%2FqjduAnYkzVZssfEVT1wE7ExDio4yBv5DQsgnvn7QOqaXqVkQxBYw6MjZ73bkdBHR2TaPP6GpxOxA9fM8jH08liQrtuUEyKOlt1x%2BDGFYnXI6k%2F4EHpdxsHrr5OsjvPId7PJCly4CiCBNzDvAt8QDPLTIrSmJVdJMLD7D3UIEiScD9dLSGhRM%2Fv2LvD5MctVhSAwMSLJNNzgpIYeRPVrzvMKf%2FQPS%2BANDlOXsBW8ssZxQpD3xCUqGn4%2BsGlSUTv3LbnzWsLCGxeOpSdhT8klazIt9cef7SNDMzBTPh6%2FHC1q3fqOf%2BJxiMVTeCo%2BQk9qhhs9joiY6nImlut6%2B0fEu%2BZBZ%2BALavgxgUiJq%2Bly1L3C18JfMFmM7vetwryHzid5KVppOIhsllPAY90ofXEZKIS%2F2xwOu3fnd23DYc%2BxoaTY7W5AjHcTFbd8LoG7mRHiF4YffOBiij8NXHxB2YpNC2ck2qmj2e%2FYGvrzSzx63L7lWv%2BQseD9kUUruTX6qMxbcRR1cKgvBpYQawaRja%2Bc9aCxHmv%2BqWIHBgjwtJYwxtnKwwY6pgGyJqnqZbyxrB%2F2rTO4%2B6HGleZkcfLG9JKtU7OueKFrmje6M0NAxbNdsO91ASWctyYk3qhDnSAvvZ7L7p0uCNKyUdRpqzHDgb7WG5ZCOgsM704Cdh4i7B0MrDuNl%2Fe3QhSN07go5jaZHXN9i4eLhFKGAD3oR81y5RV475voowK%2F2jr8L5cQGSi9Ly8eeM3Ot61k%2F1wYcAfGVq3RvHaaI1oqubakJdfj&X-Amz-Signature=398d9907b640c126b7e7d4c5cc2dfd70bde34754251ccff4f836d838644595e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
