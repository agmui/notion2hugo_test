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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7J6OKZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDMdwSz02q6Jyb5Wjl7h20J%2FAGCzQsZRJBI4TJxmet8DAiAxbxJHJwwCbUxmdEKybO9QsiGzTFP1prreSwX%2BeBe%2FKCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMVkNg7XtKdxnssCdOKtwDKvdbf5yiZVVHcbvQut%2Fvlv0n1%2BxQm4GounEB3Zd9ig9r5NwKqQFfPJg0lT3zAiv8veANMbYFmnk61GrHkm7KuG7W8PdAKQ62%2B3ZzZE0ZYASwIypYKpiYHBY5w%2FEdKVfbVhjvrE0tC4f9qlIJfVB104s2l4bNcjtwmhtS9DH48ChTr49WSN38kjeezQZA3z9tBzpwbwcnJF6sw2mJ1dRvTxctbltNdslJBc%2FbnENKzs5NorEFYvXUWstuJ8priGb7XzRt1%2FLa5zO89uAiGQ8bhGsHPlEKBuq4r%2BvF266ZAZg1%2BoCmoQIIqgjMtNmaf2Veab2NDhOQ1wXkmzw2LPPphWYFB7t8eYqt1OjlxhUIItOy6bokyw6s2RH3OKnJlOkHoflDVe4f2a6iE6yy1otLHEu9gOfegkamnUm9EKhIJ7mkswU%2F3g7hO7wf3i44WaD5Kv%2BY8YOC4inRZYFiyjtJjOe5A66x4SCZp8zTIbYo9T3b9WPK%2FeL%2FtdssLmEOCUzbyVplLa%2FmerROBfMlsyDeP1u2s7i5%2BS1JWV8eLT30NUryq%2BRyumrAAGlFT3Ku8jYA1TPijfx0diUCXM4lQkUG1bJZb%2B4pAP1uxNXFHKl62c%2FOEIg%2FRhk%2B6EjUXK0woLS%2FvQY6pgHnUkdv7FpeL%2ByB3X6X8DPcMODd37ZrX9hF3v%2FZ2ym5jku6Le04D95e8cl1oiUSHWtVQAe%2F4CUFQlUV2Xlud%2Fwc9FndxljgryIQpvc6tbxjMeCBXo83rh6ZEYDwjm8n1e8vkkCuNggEGKa%2FiDdDP82XYaewGQK2ZPzjMqSegesQYqCY1mKyuWGTV%2B0LAPYan5yoKh3Qjhm7JIkZK4GrbRQjImf0SvZZ&X-Amz-Signature=a4a77ac57a7bc247ccd4882111fd226f4854bb3ba68fec6c363112b4c9cc5d01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7J6OKZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDMdwSz02q6Jyb5Wjl7h20J%2FAGCzQsZRJBI4TJxmet8DAiAxbxJHJwwCbUxmdEKybO9QsiGzTFP1prreSwX%2BeBe%2FKCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMVkNg7XtKdxnssCdOKtwDKvdbf5yiZVVHcbvQut%2Fvlv0n1%2BxQm4GounEB3Zd9ig9r5NwKqQFfPJg0lT3zAiv8veANMbYFmnk61GrHkm7KuG7W8PdAKQ62%2B3ZzZE0ZYASwIypYKpiYHBY5w%2FEdKVfbVhjvrE0tC4f9qlIJfVB104s2l4bNcjtwmhtS9DH48ChTr49WSN38kjeezQZA3z9tBzpwbwcnJF6sw2mJ1dRvTxctbltNdslJBc%2FbnENKzs5NorEFYvXUWstuJ8priGb7XzRt1%2FLa5zO89uAiGQ8bhGsHPlEKBuq4r%2BvF266ZAZg1%2BoCmoQIIqgjMtNmaf2Veab2NDhOQ1wXkmzw2LPPphWYFB7t8eYqt1OjlxhUIItOy6bokyw6s2RH3OKnJlOkHoflDVe4f2a6iE6yy1otLHEu9gOfegkamnUm9EKhIJ7mkswU%2F3g7hO7wf3i44WaD5Kv%2BY8YOC4inRZYFiyjtJjOe5A66x4SCZp8zTIbYo9T3b9WPK%2FeL%2FtdssLmEOCUzbyVplLa%2FmerROBfMlsyDeP1u2s7i5%2BS1JWV8eLT30NUryq%2BRyumrAAGlFT3Ku8jYA1TPijfx0diUCXM4lQkUG1bJZb%2B4pAP1uxNXFHKl62c%2FOEIg%2FRhk%2B6EjUXK0woLS%2FvQY6pgHnUkdv7FpeL%2ByB3X6X8DPcMODd37ZrX9hF3v%2FZ2ym5jku6Le04D95e8cl1oiUSHWtVQAe%2F4CUFQlUV2Xlud%2Fwc9FndxljgryIQpvc6tbxjMeCBXo83rh6ZEYDwjm8n1e8vkkCuNggEGKa%2FiDdDP82XYaewGQK2ZPzjMqSegesQYqCY1mKyuWGTV%2B0LAPYan5yoKh3Qjhm7JIkZK4GrbRQjImf0SvZZ&X-Amz-Signature=c6eb3bb0b16f12d7adb74ab987bbc75369cd7d343fead537fd3704ea3d561b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPZ2NZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICyhALU2lcvshZo3r5k9oASBt3o%2Bia%2FVYkPhkno%2B77ZYAiBdTDhdqtO2nyrX6fvpdQ3DpDvJVJ0gZVE4r3cqQhSKgir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMsaHqgXRaY99j%2F4yiKtwDg2ME5QyRRUGdaGbqrqPzhQzLkd4yxxtB4eWl3I1xP%2B97cbmL7AW5sn4WTWBOfLzs0qqh0SgpcRJiA%2Bryut%2F7MiqUXGN2mJhTPjhp2G8%2FjpG5QtBWX0kl%2Bvk7nw7UAYdRYo%2BkvFlmPuniVMSdVnk8EvScB3t%2FK%2B8rMIbOzesXVSgs0C1gR%2Bp5upDLiRa29Ig4FAIvkAnKmmYvhOUeKEsgzWsUpJ%2BIRzTbTiXRQOXbpR20JAYrWBf9fN5k7ZpigJSbrdeX3xpZx8XaXGXGGI3B7nNm6dfCUKUJ%2BEpe21aQxDisDTvgcKsix%2FY11iLEcusDAnZRn0%2BvHI0PRo%2FTfIgFh3p7HzPDlIWhRm8hnUyyx%2BFgUHeUKXDU4NKb8hEDOSc4HZ54jqlcgqJpMMhNSZNNgXM7uTy4VcCmOLyKXe6jXfn7bsrJPnl%2FTAsXXH9bc1VwXl8ENjB%2BlFaki6gvQwcqKj6VYF6GNKPjjFUA6nEjbuL2OOtXAnLd5XG%2BmlVlpmMYdW9HonI0wckkvFpSvw3j7Dh4CFWwS6vm4yroy9EEZ3KY6Ge6eB6U7kmiH7x3DZgUsoM47vC7B6r%2B3tl80i%2FUYRjnA%2B02K3o5et5qd4g9iGbm%2FDJxun2fuHk5szIwrrS%2FvQY6pgFYEZR4GLrkp%2FYh8ay8IOMdX3gM2WjayDDRIWrvJY2gmPBX42NFL2g5UGnedaAp9xyX2%2BpeY7EfgHA2Ei1cGeXKf%2Bf1JzwcixQijCMszQZNY3QEtKdQqswFvmsAaTvrF6UUALfey3MF52alLDOr%2FoOFC8BK3jMuX%2Bs6gWm3gDEWs8jLASRoRDquGQPo8hRbrloJAibjt1IIMMMltZunuM%2BLW0oGxAwg&X-Amz-Signature=4d39bd4a33f99af21880c066a58e2cb82a0b00eb19230c11533888742920321f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4EPHAF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDsdpt%2FlqGuakqD1aBnIkDcWVfei20grTZzXXM3arTJiAIhAJDsteWE4y%2BvEMxVwrRHaEtYW3DuSEm38Xbb2412TZYMKv8DCDkQABoMNjM3NDIzMTgzODA1IgxMyjhmsmsS3vFH3V0q3AMXth4XTSdWZkOdGy3zVk3%2FmkS96Iy4fLdK2wsH0DSYxzdWKUMhcFZCDO0kh4GV1oyqso6hYTdf17Mw8Sv5qA7CDnI0Wv%2B71FijuGQ%2FHmBVyli0%2Bmsia01vfZyULWdq%2BX3WXGNCWqYe135VMOwDhQk%2FCDo2j0JBcCfwIOPG%2FCzV%2Bs2YD724MMtKtuJjDQP7aTag3KqFtDG5Jew91w7Ito%2BUq0knlDYum5udwWwxrX7LAgHZF%2BJ7fQLAnTx%2Foh04oZJqliFCfBluc2LUcKx6vD5OAh1WcaHy4PCrZo3%2FbvON0CnmJ2xLE24DtENOyqHAg7DRpjX0qZlHV6F7Lq8UIcZ3megTJJq0nZrlxxItYLFb0LhUw5aruUWVWdtzXXT8h4ZkqmelCiif20x%2F1PmOiJr%2FzQQyx6c89tDC%2Fc8tTrEZV%2B0EmuaN4YrMFV88f%2BfDBNsNwg3eZOGtSGI2SdU0TfX6ywXVJe9ipa%2FMZPe7JIhMjotHEHOvCge5ybVsu%2Bw80VDLyy3VsnwXtggkWjvCTpNbD3Xcxz8Bra8GS%2B04aEHXZueLzCSfpFtTL%2BqzjsfWkb35%2B8n6Aeg5ppF9BNn4NnZsfgeDf4r1MF7cHTcFUH3PtkZjAS5ZSLw2U2E%2FlTCQtL%2B9BjqkAfEgu5gkaMRcf5bTK6WHeBkSk9EJjyd38YQCp8HtROg%2By3igduNoRJynq%2FV6lqG%2FhPw2GN%2FcCGHHYLoEhoFQo3kDQIZ%2FpxtzoXDJ4emsUfXxrJBDgBQ21sMoN6Gp82bCCJRq%2B53dU8bk%2FuXW5EQ3PHXXNI7qvanpJF%2FM37gW%2B3u5nn59ANzuym6un71NHrwJ5jmo%2B53z7Yz0%2BQumNIsnYT3sonZ2&X-Amz-Signature=c17f116f4b2ee78304ae283744ae86e3522580ffad3e2e2da24924f14d75560f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7J6OKZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDMdwSz02q6Jyb5Wjl7h20J%2FAGCzQsZRJBI4TJxmet8DAiAxbxJHJwwCbUxmdEKybO9QsiGzTFP1prreSwX%2BeBe%2FKCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMVkNg7XtKdxnssCdOKtwDKvdbf5yiZVVHcbvQut%2Fvlv0n1%2BxQm4GounEB3Zd9ig9r5NwKqQFfPJg0lT3zAiv8veANMbYFmnk61GrHkm7KuG7W8PdAKQ62%2B3ZzZE0ZYASwIypYKpiYHBY5w%2FEdKVfbVhjvrE0tC4f9qlIJfVB104s2l4bNcjtwmhtS9DH48ChTr49WSN38kjeezQZA3z9tBzpwbwcnJF6sw2mJ1dRvTxctbltNdslJBc%2FbnENKzs5NorEFYvXUWstuJ8priGb7XzRt1%2FLa5zO89uAiGQ8bhGsHPlEKBuq4r%2BvF266ZAZg1%2BoCmoQIIqgjMtNmaf2Veab2NDhOQ1wXkmzw2LPPphWYFB7t8eYqt1OjlxhUIItOy6bokyw6s2RH3OKnJlOkHoflDVe4f2a6iE6yy1otLHEu9gOfegkamnUm9EKhIJ7mkswU%2F3g7hO7wf3i44WaD5Kv%2BY8YOC4inRZYFiyjtJjOe5A66x4SCZp8zTIbYo9T3b9WPK%2FeL%2FtdssLmEOCUzbyVplLa%2FmerROBfMlsyDeP1u2s7i5%2BS1JWV8eLT30NUryq%2BRyumrAAGlFT3Ku8jYA1TPijfx0diUCXM4lQkUG1bJZb%2B4pAP1uxNXFHKl62c%2FOEIg%2FRhk%2B6EjUXK0woLS%2FvQY6pgHnUkdv7FpeL%2ByB3X6X8DPcMODd37ZrX9hF3v%2FZ2ym5jku6Le04D95e8cl1oiUSHWtVQAe%2F4CUFQlUV2Xlud%2Fwc9FndxljgryIQpvc6tbxjMeCBXo83rh6ZEYDwjm8n1e8vkkCuNggEGKa%2FiDdDP82XYaewGQK2ZPzjMqSegesQYqCY1mKyuWGTV%2B0LAPYan5yoKh3Qjhm7JIkZK4GrbRQjImf0SvZZ&X-Amz-Signature=0ca0c2afc03a2ca30719f710dcd0b6ba2822d7366b796756ddd4ff67ac6a8014&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
