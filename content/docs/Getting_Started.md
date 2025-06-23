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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABNQHRM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGws%2FxtG59mWekEE2%2BUvwcrTjHNuFIxEBRJi%2FS6qr1VRAiBlrGsk7RnAWxkA6zvAoT3Sg2d%2FHhDu4m8Cll7r3QdDSyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo8L%2Fk5ZOatUjcj7xKtwD%2B0EMg8SrrmJQVTsnPhKZ7VyI7eB5OATBCWQBmcQetC0m0ilsfG%2FCUWn8ZRbNWbiaeerDe%2FdykCowOibS0emB9o2mn4EKbfMNvdtoJLqg2ArNfU68tOLpTlbCUAINdZKY1GV8df8%2B%2BZr3v8%2FFg0OC1IvAmMDwbmXDUxouvt%2Fefqap7lTAo5fEnnua369NchDPCVByeukGOwXfAAibiTZ%2BWggvSoXWdFrX2N23GdY1eMNiYNYbhZLCpuMqqIHuQCoTLEzKP1NIXGAGrugHZk5CVYQ7bTL2bMZlJ4EcLhjJFk4lhXuwCtFQ8kHXb5lQLGVxXPjep7b0MZruY7oTSjC1QTUzSPcA3eUrDT5oqhNbl4mBPh66oT%2Fn4GepoAf01%2FymiImrjzyyGv4g%2FpY7T%2F7an8vRn%2FPDneffIn55ZNLla2tu6pDcKprpbhkKaeknifNjv9P1eaPeJCPvJRTo4avE8dge1jN0%2BvTwwwnTuE4VnLFTmCCiPJJmhJLPv0Uyhp65ww2nVpbtNGvhTEK0LghWZvClRsAK9h3aayoawk6VbIsGMEtOGyVbXj8SECFfEDVWCx9kQvFsvgUoV0U9%2BS0Dd9yOJcolRTzraKpTffZ3%2F4n6M9nZK3B9WVB6CXcwg6jiwgY6pgHMyjP6L9nSpVyw38Asr3AddvJDL7xiKyqT63FL0v0iIY9WbMs0O10GJ7xA5Xceg6pDnTH6pMY%2F3cAU5uSkEstygw4OViJVItFn6hj1fe24iZ7LmQGBM0FIRiLl9TWfcjz51gOJU4ez67dHf%2BdIoM8UTkXfIpiTw4hqD753s47x3aTbS1CAiXxHumQiBgkZtsMwge318F7laS2APimoA4JwEvyzQnya&X-Amz-Signature=e356151f88dc696210c14d605d2bb376fae972db3e0b9b6edd313434d70056ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABNQHRM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGws%2FxtG59mWekEE2%2BUvwcrTjHNuFIxEBRJi%2FS6qr1VRAiBlrGsk7RnAWxkA6zvAoT3Sg2d%2FHhDu4m8Cll7r3QdDSyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo8L%2Fk5ZOatUjcj7xKtwD%2B0EMg8SrrmJQVTsnPhKZ7VyI7eB5OATBCWQBmcQetC0m0ilsfG%2FCUWn8ZRbNWbiaeerDe%2FdykCowOibS0emB9o2mn4EKbfMNvdtoJLqg2ArNfU68tOLpTlbCUAINdZKY1GV8df8%2B%2BZr3v8%2FFg0OC1IvAmMDwbmXDUxouvt%2Fefqap7lTAo5fEnnua369NchDPCVByeukGOwXfAAibiTZ%2BWggvSoXWdFrX2N23GdY1eMNiYNYbhZLCpuMqqIHuQCoTLEzKP1NIXGAGrugHZk5CVYQ7bTL2bMZlJ4EcLhjJFk4lhXuwCtFQ8kHXb5lQLGVxXPjep7b0MZruY7oTSjC1QTUzSPcA3eUrDT5oqhNbl4mBPh66oT%2Fn4GepoAf01%2FymiImrjzyyGv4g%2FpY7T%2F7an8vRn%2FPDneffIn55ZNLla2tu6pDcKprpbhkKaeknifNjv9P1eaPeJCPvJRTo4avE8dge1jN0%2BvTwwwnTuE4VnLFTmCCiPJJmhJLPv0Uyhp65ww2nVpbtNGvhTEK0LghWZvClRsAK9h3aayoawk6VbIsGMEtOGyVbXj8SECFfEDVWCx9kQvFsvgUoV0U9%2BS0Dd9yOJcolRTzraKpTffZ3%2F4n6M9nZK3B9WVB6CXcwg6jiwgY6pgHMyjP6L9nSpVyw38Asr3AddvJDL7xiKyqT63FL0v0iIY9WbMs0O10GJ7xA5Xceg6pDnTH6pMY%2F3cAU5uSkEstygw4OViJVItFn6hj1fe24iZ7LmQGBM0FIRiLl9TWfcjz51gOJU4ez67dHf%2BdIoM8UTkXfIpiTw4hqD753s47x3aTbS1CAiXxHumQiBgkZtsMwge318F7laS2APimoA4JwEvyzQnya&X-Amz-Signature=6a9f501f0ee37d0ec74fe0515b925157360a09d8dcb4d6d3b2272dd0ba57908a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABNQHRM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGws%2FxtG59mWekEE2%2BUvwcrTjHNuFIxEBRJi%2FS6qr1VRAiBlrGsk7RnAWxkA6zvAoT3Sg2d%2FHhDu4m8Cll7r3QdDSyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo8L%2Fk5ZOatUjcj7xKtwD%2B0EMg8SrrmJQVTsnPhKZ7VyI7eB5OATBCWQBmcQetC0m0ilsfG%2FCUWn8ZRbNWbiaeerDe%2FdykCowOibS0emB9o2mn4EKbfMNvdtoJLqg2ArNfU68tOLpTlbCUAINdZKY1GV8df8%2B%2BZr3v8%2FFg0OC1IvAmMDwbmXDUxouvt%2Fefqap7lTAo5fEnnua369NchDPCVByeukGOwXfAAibiTZ%2BWggvSoXWdFrX2N23GdY1eMNiYNYbhZLCpuMqqIHuQCoTLEzKP1NIXGAGrugHZk5CVYQ7bTL2bMZlJ4EcLhjJFk4lhXuwCtFQ8kHXb5lQLGVxXPjep7b0MZruY7oTSjC1QTUzSPcA3eUrDT5oqhNbl4mBPh66oT%2Fn4GepoAf01%2FymiImrjzyyGv4g%2FpY7T%2F7an8vRn%2FPDneffIn55ZNLla2tu6pDcKprpbhkKaeknifNjv9P1eaPeJCPvJRTo4avE8dge1jN0%2BvTwwwnTuE4VnLFTmCCiPJJmhJLPv0Uyhp65ww2nVpbtNGvhTEK0LghWZvClRsAK9h3aayoawk6VbIsGMEtOGyVbXj8SECFfEDVWCx9kQvFsvgUoV0U9%2BS0Dd9yOJcolRTzraKpTffZ3%2F4n6M9nZK3B9WVB6CXcwg6jiwgY6pgHMyjP6L9nSpVyw38Asr3AddvJDL7xiKyqT63FL0v0iIY9WbMs0O10GJ7xA5Xceg6pDnTH6pMY%2F3cAU5uSkEstygw4OViJVItFn6hj1fe24iZ7LmQGBM0FIRiLl9TWfcjz51gOJU4ez67dHf%2BdIoM8UTkXfIpiTw4hqD753s47x3aTbS1CAiXxHumQiBgkZtsMwge318F7laS2APimoA4JwEvyzQnya&X-Amz-Signature=8497cba55f201864cfba0808e33eb3032ab3de19930acfc23dd23eba261c9f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4PW76U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDqeUyCmaV31Vgb%2B%2FxPv4bX7%2F4%2FFtCVAxJ%2Beyy5AVsd9AIgcFzsi%2FXwUegvnmV0bY56PqWPZtG%2B768w5sENJBEcat8qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8o6BeEZW8%2BDE0qyrcAx1Rn%2F6IGMftOs5OEURf%2FdDquEe7c0mcJE32Lgf7KcQFSrvwNjks4LkWzG7H0jI%2BcU8vO1bwJJCLXT0%2FbHVWH1G2OYb%2Bo03MeavgMGhWNHYFgFi47UeNlMt%2B%2BbB67lcu8BhZrY3M7YhJXhfSlgZxwUw6Os1OAjqZZDPrdxOAnzyBTe%2BLUk%2BwafM53aXP2MkIJvAZe7NYCP%2BfLzgDqH51xKQzy2JOgBAbOHW6Fkgj1h8ZPQ7AvOjbcZw2tbsX%2FaEvwdxuyr8SuKHuThXuiAOqiJ9EdxxupjmVzKXEzIImDBCFtd7KYk5kvXOLfXARZGLX%2FFM5AITRdMRpiq88LkE0I5xPpM%2BZg3wJJAsW8f39vRvhOBMDYOPYIiPnJGQu9ITpNKbKPp9VaPElefgx7KN7BGq3c59XZ8%2Fnn8BT%2FjkGbgaJj03KbU9F9k4R%2BJdT7OXfc3KwaH8e94%2FzanxHtWa0TjI3QrweI0JLd4Z3HNQvS1UKqRyN9xkCAjrkdWJHZdeuDSzLny6P%2BrUD0OVH%2F77N1DG%2BKyKGtzOd2PqPSNQEzowBuO6Q3rIKlMXE7H0RPuT3JWNTOYB8pe1%2BR3RFMblRWo2w5n9XPxnKGykJEnVjLfEHv9hPWdisZUFKPNo8MJKo4sIGOqUB4mZlTtWHNxwi21BWqtZHvJE7uDOop9DZpiKH8CtbyiBpdh2czzyTdSuiZLTfOlMcVMA8Ay1mp6uLADHzuPWEkwuEHbFAazkdUQhvjmboSJusE9zXwHXevV0DNIlZ10wb7Pz2U9VUni41epfDKjlUEIM%2F6hXvf1NbU0bS5Cx2iuabUAGWHlxOHDNmmzKA5TboyREBww5cyZ1fzCdCmAtspQf9a0%2BY&X-Amz-Signature=e341ccd7dd1d5624a637f8f008d4004f565907f7a352dc0445d6dc070f11af8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK6JPS7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGpaWY%2F5Ey1NlkwNLBSZ1BrQ9K8kTtVPejVsuCys9vozAiB9t%2F%2F9ceXcPBuRzRwHZMLAoEIUv24X%2FiQ8j8kNh1JURSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWhJuFet19L3lVyiKtwDIE6Lq3ok%2BvPDPuQFmhArcAZl44XAzc1ZrJFjXCQutpf9O%2Fbgc5yXi4bUgSWNX9l9wsGG7d3yIK9rSM1C%2Fj5Nxs0lh1L9d1PL519yTyTbtstd5bVhce6wlYKrNde45qHuNYDiEOaimJRGxnu57%2BRf1MXQN1zttJEeqCEmHsgBae7Gfmpm%2B0b70zS6v%2Fihdd31ihWtYTNYscbToprUSSfJmLxD%2BWNK5dzy1qkOi8PObXFJuhFv82v%2BDq%2BSwIXPobVqmLhIfBViP%2BbVvo2t%2FPK6lFkRRf0VVpVA8ep7azTU5B5Qk75uPuvWApNg%2FjndCA%2FPFJ64VDxqPxJfy6peEA56VvEWd3sVhmPp8XtWHXdYgZu8dJzo6PUehWNToCHJtsrt7o2BlQdlLC%2B8%2BOwZl0BjFqM5Q7FDNmiupQc0fhKEL00nd03BssTQErnMnXY8CanQBBTeWZ3Izb1QuoLlEsPpcbSog5Xd%2Bqe%2F%2FvejrP4Gi78NkDD5tCWYQgf3OA9gEBbH27pIjr90UTwKwcvBBXM0xj5zv0RLB%2FLVKrAyr1hPQ4NfHap5xaffaPSxNNhbepQWNwDaisHDj56uHx6RyNaQ1ASRep%2F4dHN9E1jrjOpzRvYH8j5SUCDYTiCi8T4w46fiwgY6pgF1xBARuMIgJQwxZtaVk9aoLjv7ElxewCIk2ZP9Y%2F86YydZ2eXjljFbu%2FwXj8CV8KdBfIdUmA82dsQ%2BBUOxTmry7ewStsMd520N16%2BwHvGWKozGuQHZORG7j3%2FoQYPzxiL7%2Baos2Pj6zE4N0MDNDnngcwJCQT9HA8IouqsRwP2CgUD%2FzWFX0zz3qtFu0t4JssH3TTkF1HDkhvqU2Zta3Zucd84X4h7w&X-Amz-Signature=1e8b94c88b586f8174dcd7b3800c5a55413bb2676988bba1f2440127a59c0b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABNQHRM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGws%2FxtG59mWekEE2%2BUvwcrTjHNuFIxEBRJi%2FS6qr1VRAiBlrGsk7RnAWxkA6zvAoT3Sg2d%2FHhDu4m8Cll7r3QdDSyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo8L%2Fk5ZOatUjcj7xKtwD%2B0EMg8SrrmJQVTsnPhKZ7VyI7eB5OATBCWQBmcQetC0m0ilsfG%2FCUWn8ZRbNWbiaeerDe%2FdykCowOibS0emB9o2mn4EKbfMNvdtoJLqg2ArNfU68tOLpTlbCUAINdZKY1GV8df8%2B%2BZr3v8%2FFg0OC1IvAmMDwbmXDUxouvt%2Fefqap7lTAo5fEnnua369NchDPCVByeukGOwXfAAibiTZ%2BWggvSoXWdFrX2N23GdY1eMNiYNYbhZLCpuMqqIHuQCoTLEzKP1NIXGAGrugHZk5CVYQ7bTL2bMZlJ4EcLhjJFk4lhXuwCtFQ8kHXb5lQLGVxXPjep7b0MZruY7oTSjC1QTUzSPcA3eUrDT5oqhNbl4mBPh66oT%2Fn4GepoAf01%2FymiImrjzyyGv4g%2FpY7T%2F7an8vRn%2FPDneffIn55ZNLla2tu6pDcKprpbhkKaeknifNjv9P1eaPeJCPvJRTo4avE8dge1jN0%2BvTwwwnTuE4VnLFTmCCiPJJmhJLPv0Uyhp65ww2nVpbtNGvhTEK0LghWZvClRsAK9h3aayoawk6VbIsGMEtOGyVbXj8SECFfEDVWCx9kQvFsvgUoV0U9%2BS0Dd9yOJcolRTzraKpTffZ3%2F4n6M9nZK3B9WVB6CXcwg6jiwgY6pgHMyjP6L9nSpVyw38Asr3AddvJDL7xiKyqT63FL0v0iIY9WbMs0O10GJ7xA5Xceg6pDnTH6pMY%2F3cAU5uSkEstygw4OViJVItFn6hj1fe24iZ7LmQGBM0FIRiLl9TWfcjz51gOJU4ez67dHf%2BdIoM8UTkXfIpiTw4hqD753s47x3aTbS1CAiXxHumQiBgkZtsMwge318F7laS2APimoA4JwEvyzQnya&X-Amz-Signature=abdaabdf78ae25831c43210a6fd7078f0fcb929744eec65315a90a25ce94954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
