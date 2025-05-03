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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEFZFTW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCAW6LFnrvt3lS8uBEFWKlFHo%2BKMAf%2BWu8zVRHehmAyngIhAMa5CEZP9%2FWrZQL5I9DpfLhIEe%2F9%2F6wflwLHQfhn6L3vKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYKscv5s%2BqXn7gY8q3AP4Wy2%2BVidwZvCYbod3UeKlMXXpFZ7qHmJGN3AAPAWg4TPcrfDUhOGo7n9vTLatgk6KjcGGJMoGNnkAXhFV6m4I%2Bf18q5l9NCC4mC3TBr6urb1kp7UiPfyYiXv8K7O%2FQIPtwnVdPn2Uz%2F5LHgffSCN4qQTvXSyKHYqiMkY53zn6ktMq%2Fre5tQ0V2IPQ%2F%2BoOsuGE4p%2BhVaG8ttGPWKbt%2Fnk4HK8j%2FOU59X4UX5eBFfIUh3pwBTvIF0DNngwr5IKxOWsuNb87AxhYGbkkXr5xIfdNh0jWg%2Bpf8pWu3WGDhfAWF0hQ9eQE8AeskaM3KJEhDTBPgSZ542zas5QDqEyLe35on2PQMDbaS0d%2BhUuOwOCDBYQsDhzk7DviesvnMLe6mP%2Bvn2D370BO7A58BUwFD%2BMe4VX3mVkkkQxf3v3AOSM576PZlmdXVHc8tmrColkubtMAh4K5mAbwWirQcmeaULPn7banOBy914zKz7PfiIo%2BKJAS%2FVFPSVkRDw%2FibO8fdsYqJsnwwspK7fChA5WE4RftvIYsJCbUrgyjE0E0478JJAbS%2Fhr%2F0u%2FAtcujCJ7oAW4faJxQdEmelUzNIRGwc9nGxGeTyIXl7NboPVAZVY29ww7zHDwYNG0Zh6lxTzC17tXABjqkAa9HLm36Rpj6r%2B3v8bw%2F0StKaDeLNG2nQhO6TO4rLOwf82QCzwoPT1UcBYRQU02q3El8f63WMtAczDX3kCYpZKUo40mwWNCdhzGt9DmxyAkKdHTKdrHW11HN%2BNUZCSuY9O4iLx4tezjr1s8BUGil093hmr%2FSSrA6CoO3Ht%2Be06ArpQgTQgriuiMVVN2BmBhJrfnpi1axIk3XdKqIdC%2BeB198MYJI&X-Amz-Signature=3b223e78416bdc6664879bd0b49ef229fa199ea958934757f1e6b2e0d0b63a36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEFZFTW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCAW6LFnrvt3lS8uBEFWKlFHo%2BKMAf%2BWu8zVRHehmAyngIhAMa5CEZP9%2FWrZQL5I9DpfLhIEe%2F9%2F6wflwLHQfhn6L3vKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYKscv5s%2BqXn7gY8q3AP4Wy2%2BVidwZvCYbod3UeKlMXXpFZ7qHmJGN3AAPAWg4TPcrfDUhOGo7n9vTLatgk6KjcGGJMoGNnkAXhFV6m4I%2Bf18q5l9NCC4mC3TBr6urb1kp7UiPfyYiXv8K7O%2FQIPtwnVdPn2Uz%2F5LHgffSCN4qQTvXSyKHYqiMkY53zn6ktMq%2Fre5tQ0V2IPQ%2F%2BoOsuGE4p%2BhVaG8ttGPWKbt%2Fnk4HK8j%2FOU59X4UX5eBFfIUh3pwBTvIF0DNngwr5IKxOWsuNb87AxhYGbkkXr5xIfdNh0jWg%2Bpf8pWu3WGDhfAWF0hQ9eQE8AeskaM3KJEhDTBPgSZ542zas5QDqEyLe35on2PQMDbaS0d%2BhUuOwOCDBYQsDhzk7DviesvnMLe6mP%2Bvn2D370BO7A58BUwFD%2BMe4VX3mVkkkQxf3v3AOSM576PZlmdXVHc8tmrColkubtMAh4K5mAbwWirQcmeaULPn7banOBy914zKz7PfiIo%2BKJAS%2FVFPSVkRDw%2FibO8fdsYqJsnwwspK7fChA5WE4RftvIYsJCbUrgyjE0E0478JJAbS%2Fhr%2F0u%2FAtcujCJ7oAW4faJxQdEmelUzNIRGwc9nGxGeTyIXl7NboPVAZVY29ww7zHDwYNG0Zh6lxTzC17tXABjqkAa9HLm36Rpj6r%2B3v8bw%2F0StKaDeLNG2nQhO6TO4rLOwf82QCzwoPT1UcBYRQU02q3El8f63WMtAczDX3kCYpZKUo40mwWNCdhzGt9DmxyAkKdHTKdrHW11HN%2BNUZCSuY9O4iLx4tezjr1s8BUGil093hmr%2FSSrA6CoO3Ht%2Be06ArpQgTQgriuiMVVN2BmBhJrfnpi1axIk3XdKqIdC%2BeB198MYJI&X-Amz-Signature=d6d24faae86d5ec2ec948958954b84e687497ea7325372bacff11ed2e6b3d8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEFZFTW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCAW6LFnrvt3lS8uBEFWKlFHo%2BKMAf%2BWu8zVRHehmAyngIhAMa5CEZP9%2FWrZQL5I9DpfLhIEe%2F9%2F6wflwLHQfhn6L3vKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYKscv5s%2BqXn7gY8q3AP4Wy2%2BVidwZvCYbod3UeKlMXXpFZ7qHmJGN3AAPAWg4TPcrfDUhOGo7n9vTLatgk6KjcGGJMoGNnkAXhFV6m4I%2Bf18q5l9NCC4mC3TBr6urb1kp7UiPfyYiXv8K7O%2FQIPtwnVdPn2Uz%2F5LHgffSCN4qQTvXSyKHYqiMkY53zn6ktMq%2Fre5tQ0V2IPQ%2F%2BoOsuGE4p%2BhVaG8ttGPWKbt%2Fnk4HK8j%2FOU59X4UX5eBFfIUh3pwBTvIF0DNngwr5IKxOWsuNb87AxhYGbkkXr5xIfdNh0jWg%2Bpf8pWu3WGDhfAWF0hQ9eQE8AeskaM3KJEhDTBPgSZ542zas5QDqEyLe35on2PQMDbaS0d%2BhUuOwOCDBYQsDhzk7DviesvnMLe6mP%2Bvn2D370BO7A58BUwFD%2BMe4VX3mVkkkQxf3v3AOSM576PZlmdXVHc8tmrColkubtMAh4K5mAbwWirQcmeaULPn7banOBy914zKz7PfiIo%2BKJAS%2FVFPSVkRDw%2FibO8fdsYqJsnwwspK7fChA5WE4RftvIYsJCbUrgyjE0E0478JJAbS%2Fhr%2F0u%2FAtcujCJ7oAW4faJxQdEmelUzNIRGwc9nGxGeTyIXl7NboPVAZVY29ww7zHDwYNG0Zh6lxTzC17tXABjqkAa9HLm36Rpj6r%2B3v8bw%2F0StKaDeLNG2nQhO6TO4rLOwf82QCzwoPT1UcBYRQU02q3El8f63WMtAczDX3kCYpZKUo40mwWNCdhzGt9DmxyAkKdHTKdrHW11HN%2BNUZCSuY9O4iLx4tezjr1s8BUGil093hmr%2FSSrA6CoO3Ht%2Be06ArpQgTQgriuiMVVN2BmBhJrfnpi1axIk3XdKqIdC%2BeB198MYJI&X-Amz-Signature=9703d6eb69a45f6ffd18a8cc56a3111fdc574572369228f6cdb675dff3b875d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAMMVDE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFCTkZac%2FKrHCAssSBhyvVoEjlN%2BkZXoMZlTwYaYy387AiB9y3IiSfp9bv3PpMcujchln4RmRLs3b3OgEfZPDrqhNiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYAVH03MNxJ%2FCkAs6KtwDIqyQwN3MeYi9TO3wQRL1hkzgVYsWt%2FlUqCm9pUxaRMTafxxYShX4iXwwvhDisaVDkWe0ckn0i1F9CIjxwlp3yMHX7Lf5cIfRoz6156sEt%2FlUo5YE4Vt%2FgcDLhKtggWpKy4Y7MDLHbns6%2FDVIAO7nuin%2B67Tw%2FNA%2Fp6%2F%2FrIMfVLA8zP1V944DgVYOQMVHMcmcdMHl1Aw7XTZ7bQJhXWODN83V%2FIuthA14vLEkR7i578V3XMnE3GsYjdBMy1hU%2FX%2BULn6wL1zOUyqSgyZB5eGDpJDKPq4A4TXWhIeOV%2FZB1vNeby6RMEaDVDo2feR5mErLg1FPpzhc6s5pQeW0DB7CC4s36X%2FVi1GW8Gw%2BJdZXOZBqmcU9ZC7kAkfWiSmWAw6tYu6CgnyUso0KwjlIPckThEGElNX6RlLjDo53ZEpde8jwRi3zuxPdHhvtkEssKQSda5qy33u6y3Rj8MmUrEJdIprrbX163zZdyoSFdWDbFyeZsitYdf9XPW02j0sRv85Go5dTzeqfOyxdUASUfdIyGKv9CLVYG%2BxmHstF%2FOV9Xef%2BziSLmPC4w1kEW0cm67dIKaaYt%2B6JsUoo3jZigFcjoNzGbhstaRxayhiXKKVJjXoY%2BZTA4yn4mcceLXEwnu7VwAY6pgGm6tD7dSpdge%2FgNj07sW%2FXyK9c%2B9%2BxBlkZ%2B%2FnZmmJ0Sa9i7lwLrSOiB2aQv3y%2FsfVGeERm5IPVr3AzWUU9y2BVwA6zLcfifk%2F8SaThqZ3l%2FWc9K8y5ZZXZOKRv5ptZT%2BKEpdpsylgTfo4%2BiLC3hxbnsb%2Fx26qAu3UVzQvMXVeLnQ8hACYREd2oi1WBcD0W%2FLaXYn3vY3lck2K%2Bma1KlbmHlSR8uc%2Fk&X-Amz-Signature=804a202a49fbe2deb70e93a1a9c3f6ab22b3042c34a47ca230f97e97f1cc0667&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD63BZG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGfD9CEbQynh2EJScqWdzPwu4lPOZrZmZRX3wnCym84zAiEA088F3BMA7IZyhIPjMAnztMpT6WbABFJBtc7lEn3bOKYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaL%2FHcCiuklGAMGaSrcA4qZ9Jf1uhbkQ0lERkfmvdQYc9lIqoXdehGUM3lvFsRT1uuIWL0Ci2V3vvHvtEbqLj9z%2FBaXmAROY1Kg2P7epIB%2FHW9a%2FDhUwREgAf62zOsgEINyj44eFYJHYkc34RfblXpkAbo2YF31Kts%2FYwhs0lL5m3LzxTV2g%2Fmoz5Zj5ee711oeiZjvIhRt4rLMuaklSpqLRTfLiw8%2FkrzHc8yyVfJUVpJU3NLD59l3AVV5i%2FC3I19uVsozPf%2Ft8ZWqSn9LB1KVwRSl0Opa9Yf26q8o5Y2mwUG8MFkV7nZ3EwaMddPP1TaHJi0azlYPkLOWeNQJLuIujDLyOGVIZ0G9kGvWRsMn%2Bpq3ycczKEhz8LaaOdBiyXLP0JixsCvdcSly9T0JJugufzIqdr9xeeauqfu3CKR7y5k3kcqVFaQFuPSDvhqz4PzQHcJi%2F7KDg6BMPikJ9J7QttMIdrAKml7QNInxw4mBCOhzecOT9gxBBLQKI7tm8iGmepGRisHK0Z3VQj4C9bbA5dhZu%2F1FwOeCR0MJe0tS1x2UP93gAhNKE%2B7eh0JKoV%2Ftorr3w2imS0EWGTc%2Fwi5W0JWBVNqpQvHwCheLyjYJOlnV0%2Bz7nmatlp7SmBBNFyjTFdKXiiPS%2FMCZMIzu1cAGOqUBXu9yo3SiAKpnOqLSbr5%2BktrSPCP8YINAITSAfsS3u9NlBw45A9YvT6JLuDYd1IfvqYGguxMcxZCQpoqZicMUjA%2Fd9excF8fSIWlJfWFRoHu1jIRZGFhvT82jRq%2B1JiAT5L9iEYNW6tRVtQNLmeXHgsVnSD%2BV9SZznGmc26dlRU%2Fn8Vweeitz2OWmOeb9kLyDvCIqoh3egVLQUvFWzSvBb4UXG4fM&X-Amz-Signature=ac0e5973b4cfa2f969ff4e077a368c2ea2cb3b0d00d1d17b5958fbfe4be716e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEFZFTW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCAW6LFnrvt3lS8uBEFWKlFHo%2BKMAf%2BWu8zVRHehmAyngIhAMa5CEZP9%2FWrZQL5I9DpfLhIEe%2F9%2F6wflwLHQfhn6L3vKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYKscv5s%2BqXn7gY8q3AP4Wy2%2BVidwZvCYbod3UeKlMXXpFZ7qHmJGN3AAPAWg4TPcrfDUhOGo7n9vTLatgk6KjcGGJMoGNnkAXhFV6m4I%2Bf18q5l9NCC4mC3TBr6urb1kp7UiPfyYiXv8K7O%2FQIPtwnVdPn2Uz%2F5LHgffSCN4qQTvXSyKHYqiMkY53zn6ktMq%2Fre5tQ0V2IPQ%2F%2BoOsuGE4p%2BhVaG8ttGPWKbt%2Fnk4HK8j%2FOU59X4UX5eBFfIUh3pwBTvIF0DNngwr5IKxOWsuNb87AxhYGbkkXr5xIfdNh0jWg%2Bpf8pWu3WGDhfAWF0hQ9eQE8AeskaM3KJEhDTBPgSZ542zas5QDqEyLe35on2PQMDbaS0d%2BhUuOwOCDBYQsDhzk7DviesvnMLe6mP%2Bvn2D370BO7A58BUwFD%2BMe4VX3mVkkkQxf3v3AOSM576PZlmdXVHc8tmrColkubtMAh4K5mAbwWirQcmeaULPn7banOBy914zKz7PfiIo%2BKJAS%2FVFPSVkRDw%2FibO8fdsYqJsnwwspK7fChA5WE4RftvIYsJCbUrgyjE0E0478JJAbS%2Fhr%2F0u%2FAtcujCJ7oAW4faJxQdEmelUzNIRGwc9nGxGeTyIXl7NboPVAZVY29ww7zHDwYNG0Zh6lxTzC17tXABjqkAa9HLm36Rpj6r%2B3v8bw%2F0StKaDeLNG2nQhO6TO4rLOwf82QCzwoPT1UcBYRQU02q3El8f63WMtAczDX3kCYpZKUo40mwWNCdhzGt9DmxyAkKdHTKdrHW11HN%2BNUZCSuY9O4iLx4tezjr1s8BUGil093hmr%2FSSrA6CoO3Ht%2Be06ArpQgTQgriuiMVVN2BmBhJrfnpi1axIk3XdKqIdC%2BeB198MYJI&X-Amz-Signature=43f4cecd9f64e0899a286e4f421a5f11aefd1c57ccfedde18352dd1a3c385e09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
