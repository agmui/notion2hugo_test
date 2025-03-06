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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJK7LFG6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArgSlePTWC%2FbRwq9uQ0b8zOsxS6447yK7OTVCFGWjUDAiEA1mP0wyVeP8RRQYt0LDLtlCP62aw%2BU%2Fs56Az16fbS%2BAsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDvZyUZImUGX%2B3vnhCrcA3qAU9dIbH8p5%2FhIfrSR5ZvzsPUOIl6wujo4PQ5FAMAP0S3bjVpKYUxMXTi5G5qSxHtb68ncFKNAgDcZkNXKQmMqLzPeEjJmSmF%2Bv9SC5PCr%2BbXYbD6FCFBvQjTVsAfi1xdwB7qtkEfx7fhVUEuqtv4N5Y%2FY8Don%2FUHHZJ6kS0sr1WgU8oPQTFKWpbtSDB5YXIBD31JWP0p5xV41qouWWoGHRvVXwHZhuxk6PbzNNsewKTcutrBP2dQsPIBHUDG3ZKC19m2C%2F1XvCWaLNWoUUyMci3N6UM78gl990n%2BTruXhDg0QGwZO%2FpGRCUry5VhqtHktElqrX%2FKMI4UkPtOCR3JKikhwe72fkJH7ENDHpg0zGYKeH3gScoqLfYdXdVZxWI4cyDjC9oO5GX2mYyvN74gRAXkHIQnXw7Omm2MtyyO%2FXYZeBc5j0RvwK6wMCApl%2F6GDYFPZQxDK4lQNib9eKjnONpQmlJl%2FHw8onjvTsGQNM1NCyhwRYwPGPdG7%2FEps5PjFCrUEAdsD3XzlrvnWVQgA%2FnRg97eTGnb8ar0kojcWJXwmW4zt2QoOFvgY%2BnBZbLiU2tlt6468OZBT%2FZ45mj615auum0Jsxi1lCV2em59J1wOEzq2azBzPfYkbMOjvpr4GOqUB%2FZtSivZP3CPtbnbHd9WiYeVr1zFdTqT4QS9pDbAQOF%2FOlDW3tgrB4pYI%2BLlC0CnOU4yejTkK5W4S5kVjRybtob%2FOJ5quLjqH06Rp9WIZeCWH1tKONO9z2HvsqIMV2n18SK4Q4bkhgRTQz9A1mSvLY26KLqfGjkQ4MRKGuvNiBP2jG0ecXi%2FZmkLkfTby96BFUfQILqvjNgO6N0fInJDVrv1p%2Fou4&X-Amz-Signature=0a57e0c6e113abf0318124b42cd75ec8354934270f705122c0b0bd8371d0f696&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJK7LFG6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArgSlePTWC%2FbRwq9uQ0b8zOsxS6447yK7OTVCFGWjUDAiEA1mP0wyVeP8RRQYt0LDLtlCP62aw%2BU%2Fs56Az16fbS%2BAsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDvZyUZImUGX%2B3vnhCrcA3qAU9dIbH8p5%2FhIfrSR5ZvzsPUOIl6wujo4PQ5FAMAP0S3bjVpKYUxMXTi5G5qSxHtb68ncFKNAgDcZkNXKQmMqLzPeEjJmSmF%2Bv9SC5PCr%2BbXYbD6FCFBvQjTVsAfi1xdwB7qtkEfx7fhVUEuqtv4N5Y%2FY8Don%2FUHHZJ6kS0sr1WgU8oPQTFKWpbtSDB5YXIBD31JWP0p5xV41qouWWoGHRvVXwHZhuxk6PbzNNsewKTcutrBP2dQsPIBHUDG3ZKC19m2C%2F1XvCWaLNWoUUyMci3N6UM78gl990n%2BTruXhDg0QGwZO%2FpGRCUry5VhqtHktElqrX%2FKMI4UkPtOCR3JKikhwe72fkJH7ENDHpg0zGYKeH3gScoqLfYdXdVZxWI4cyDjC9oO5GX2mYyvN74gRAXkHIQnXw7Omm2MtyyO%2FXYZeBc5j0RvwK6wMCApl%2F6GDYFPZQxDK4lQNib9eKjnONpQmlJl%2FHw8onjvTsGQNM1NCyhwRYwPGPdG7%2FEps5PjFCrUEAdsD3XzlrvnWVQgA%2FnRg97eTGnb8ar0kojcWJXwmW4zt2QoOFvgY%2BnBZbLiU2tlt6468OZBT%2FZ45mj615auum0Jsxi1lCV2em59J1wOEzq2azBzPfYkbMOjvpr4GOqUB%2FZtSivZP3CPtbnbHd9WiYeVr1zFdTqT4QS9pDbAQOF%2FOlDW3tgrB4pYI%2BLlC0CnOU4yejTkK5W4S5kVjRybtob%2FOJ5quLjqH06Rp9WIZeCWH1tKONO9z2HvsqIMV2n18SK4Q4bkhgRTQz9A1mSvLY26KLqfGjkQ4MRKGuvNiBP2jG0ecXi%2FZmkLkfTby96BFUfQILqvjNgO6N0fInJDVrv1p%2Fou4&X-Amz-Signature=125a77b21a6872c6af14d84416099bc763ad1703afa72326cf5696ccfdf28673&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIRQLZM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCogvHI%2BM%2Bc8NThWTbvaSbdNG%2B6iex5uWRaT%2BrdwfUTDQIhAK3TCBpjUM3LdfQSSKJKtJGAJkdyMAm%2BD8p14M6rM%2B9EKv8DCDEQABoMNjM3NDIzMTgzODA1Igy%2FQdqYQdSzfZ1GBrEq3APTmDR%2BPLNC79JoJJQ1mvcLBnRHkrncVtqNdpq6HE9gaCp6p7QE%2B97ipsCeiAeQabrnjU4rgdYD1G1x5%2B36PgP2XEEdsl22NSEu%2Fm1S6UQcqmwNKAADI5kXJzBE6nacf6e6KTP4YXcFiEBpYFGBlNAFt3rpGWohNKrq01%2BsEtGdqWLCjPiKsF%2BUAdmyWTgkJHkRQmgliXSd0%2FnghEr2sCBTLhtiY7kGAh0txjO7BrqF9JjDJvUfylURyjebyEmDLtdzbfVBzkBJlAWxzMgFAmEQoyZV5DO8197tvc9zjIA9mMVQ4E6zPIQpvdjvkzIVmm9CEiw%2B4E%2B9puWg4kqJZFXy%2FhPbwiGmmvgGTJMLV2lH2CpbFNS3gcy5Ea03fekCFsPZiYhHOC%2FOdrWgBc7KhiCqIK4ZajywaGgJmfUJkfe%2BNq8x98EhBlwVe8myzXALZDiEg6T3qOm9rJhz6sGXPXuyz0gxwcHiD7jXuj9vilagXhiGauDh0ggBR3hctYNNoh%2BR%2BltYQSYj2irnYNvQrb4%2FcstW%2BmJD6x95tiJJ3Lnd1TMjzk%2FOcUIDhPp1ytrxLlxkHZ2PUjdYSdO%2FO3NAGVdI5EYIxo1TmsiNJWH9NlMLTh3w7%2FqV%2F0HRDdtFHDCDkKe%2BBjqkASp3cYsVcszGgc6%2BGmdwT3C9pKEAH%2B%2Bv4jvCrbCIembinQDclvZ2RPQFywwRF4hi3MBYmwnGJs%2FMeCcKVLeRy%2F1dr%2FLYTsRrhxJJ9EFY2uwfA4TkNVXtQG87HLTAiFoA%2BxzIP4gFGp1cT%2FtSn0DQZfGn%2B5Sg9eXrWXVsjjX53UcAxvHTj%2BJJ1sl9tcMSJOq37gYUgWXaxF9EBz5FFlH2M92qEWd3&X-Amz-Signature=bd305426bac595ed973e435fe2d02964d49d067574e9cba70df8a69f67023e95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC76SJAP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTw6Nl4TU%2F41T%2BTrKOLS61LVHJbGaJtbZKL%2FWBpLJ%2BiQIhAIQT9F0KX6sV1T3c%2B6Bx3LBAZiTlFgexmonQHWi4Bu78Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx6bSL69jVUc4M6Vr4q3APQUfWBmaM8rap84x9RYFVkWJdq%2BqaVx7%2FmsL0Cg6JLRgUZMDzvVuQatsqSz17tfunpTtCJhE%2F3asLj93RHXH7TEayggoMm5sEOBkSZvano1H%2BVwTGULh9xv%2FgzJTIgCsehWapptLltzjt%2BPNKJ6huKOQA144B86gMqh501Xzf6aWZBEJLa%2BvMJe92zwvo6D9lLOW1BS8ZOQ%2F%2FGdYgTECkaXpYd047%2BAFzm76bhlNAcx5Etah7I7OhAUKNr7tkFWRavxSuGGThsWAm3UpFJAac2a9DddxEjMGubm1S4yco1Q8NOfsOfi3TJV5elfhbG9uReR6i4sBNuI4Awmyr5%2FKNB7gGZUIRitgACdzBaEgZSFlLas551o%2BBs8B9pcWpd%2B2JH0h3QDjGjSJmrz%2BQ8tmI5O2NMlReZmiB86ZubsajwIk4IPuyQ81%2FLnu6PFz2dGCs6cjI5%2Ffng1DOJnFSPLMqeHfV%2Fr2poN4euXhclQ5Ik1kZzKKLWdJAjLvBtyh83v9GG7T5Xuj%2FXc5ujG8PoPGWyw6tNLd426joYrtBqnPOvuMGEBX2C8oBZz%2Begl3EX6N9CFzS4BMLBUOjkGdaXukUioHt%2FFdz74kLAmSXPwnWSinCZPcTFsvcSzDsBwjCSj6e%2BBjqkAZhiHlcPSdl0RfhuihQryb4fowxreTpGV2a9JqouvdzQNzA%2B0rzEpmc%2BspF02XbYoID5%2BZ3apHb6dZKZMU5HJ3O6WFmFVHEF6ZxXxAb0qY2TZUU3LpcioTXXOfzb8tOXDzPMD0LlHthIfFLOMwb9XTSo5hfNJKbseY%2FohuSPBUjhAmo3Q38eZX1D0GLZiX47psmk3XCLDjsQb9F8U0iJCXcBP3jz&X-Amz-Signature=f44fd7c3f50971e14906e1924121db05c349443161ec24d504a4ccee8018647d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJK7LFG6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArgSlePTWC%2FbRwq9uQ0b8zOsxS6447yK7OTVCFGWjUDAiEA1mP0wyVeP8RRQYt0LDLtlCP62aw%2BU%2Fs56Az16fbS%2BAsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDvZyUZImUGX%2B3vnhCrcA3qAU9dIbH8p5%2FhIfrSR5ZvzsPUOIl6wujo4PQ5FAMAP0S3bjVpKYUxMXTi5G5qSxHtb68ncFKNAgDcZkNXKQmMqLzPeEjJmSmF%2Bv9SC5PCr%2BbXYbD6FCFBvQjTVsAfi1xdwB7qtkEfx7fhVUEuqtv4N5Y%2FY8Don%2FUHHZJ6kS0sr1WgU8oPQTFKWpbtSDB5YXIBD31JWP0p5xV41qouWWoGHRvVXwHZhuxk6PbzNNsewKTcutrBP2dQsPIBHUDG3ZKC19m2C%2F1XvCWaLNWoUUyMci3N6UM78gl990n%2BTruXhDg0QGwZO%2FpGRCUry5VhqtHktElqrX%2FKMI4UkPtOCR3JKikhwe72fkJH7ENDHpg0zGYKeH3gScoqLfYdXdVZxWI4cyDjC9oO5GX2mYyvN74gRAXkHIQnXw7Omm2MtyyO%2FXYZeBc5j0RvwK6wMCApl%2F6GDYFPZQxDK4lQNib9eKjnONpQmlJl%2FHw8onjvTsGQNM1NCyhwRYwPGPdG7%2FEps5PjFCrUEAdsD3XzlrvnWVQgA%2FnRg97eTGnb8ar0kojcWJXwmW4zt2QoOFvgY%2BnBZbLiU2tlt6468OZBT%2FZ45mj615auum0Jsxi1lCV2em59J1wOEzq2azBzPfYkbMOjvpr4GOqUB%2FZtSivZP3CPtbnbHd9WiYeVr1zFdTqT4QS9pDbAQOF%2FOlDW3tgrB4pYI%2BLlC0CnOU4yejTkK5W4S5kVjRybtob%2FOJ5quLjqH06Rp9WIZeCWH1tKONO9z2HvsqIMV2n18SK4Q4bkhgRTQz9A1mSvLY26KLqfGjkQ4MRKGuvNiBP2jG0ecXi%2FZmkLkfTby96BFUfQILqvjNgO6N0fInJDVrv1p%2Fou4&X-Amz-Signature=6c35f229ea4097c6940478d1a29f1d1546a7646a5a726c4808c3f6b7e93be0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
