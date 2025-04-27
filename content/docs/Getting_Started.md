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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMQIKHB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxGVqpoRfN2alAgPsgT3or14dLkeEXEiyh58L4Yg9VAIgb8VUnxHzP%2FrOlrhkcz3KBasVJcgUKQwkOOY0w%2BYY4fAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC5XeH%2BESFssQnED%2FSrcA%2BbzgWRamuhpWtaIR9Kl9WAPEQORELKLFguXsKpSWkY7hvccTKJAZAkwrO1t%2BnDjRExpMOFcTayiR0AR3YBRqoAaTCwDce1jRSNE3mHERO3jnWITJhZ7duEeMg%2FqZtWmnj%2F2%2FkQMFmRYf9tGlw4Y7XpEUljMuo7jd%2Fk%2BveuowjHOtSesXarU9ZUYxpAwe0gFMuWvgH9VzxN2D9weSVP2RibiU1X2GVIgBKQ8LRk0KVIZll50%2FSpQxFq%2ButN9GDa6mLqLXeAtV2Hgj4jmu26DGRjbLYffAb8mDdzFaVCvJGJJNLLAhEimsiXVxIp17P5dx9T2M1xjM6PN1hr2f1B3hHQG%2BxI5EHGsimYwZSO7NdFyT8AANWmgdwz%2BErr2wMlmfANOax3NVbEDBv4hlBCMnJE3Z%2FksQkzDXJ87a8HuaPmXcKxsF9VkuSX9iM7eaobmFKdNj4fPmSt%2FYd1HwzZ7JN0KwwCt7txFyw5hI3UVmDt6BkVfGA3ztYapFgiXd99SfVLUesqxwyXz8xaaoKtKOxTzz7uQuFsn4YUAc%2FzGNIlAmnlEQacxlGuxmjukwnBzym9y64qx2zJMw3TkWQxOGs65wwYhoWg9iejQLwX9%2BQ8hqC1U22henj27%2BAkgMJvttsAGOqUBkG86vVExzuD0ek15J4tHl4GbWHGAUJ1r8o5nODIUoo0D9uYyvd50sTeA1n%2B2GpnZNvGgrf5N1q8t14DuO4b5hg4VsnrsgUsNDoaz3nqQ6s6YgVjx4IYHT%2F1QARUK2HVt3w1XJcGlUvFACe8hHra0nSRD4%2FPeHPQ8jk7jF3PPr7OIge1PREobntJY2gF92ylKjTxRgk%2FfDUXihKZOrzrJ81Gqh%2FzE&X-Amz-Signature=20da2b87fa70bc0064f67f1c86f838cc1648ea0e7932cfdc3c0b26256955057a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMQIKHB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxGVqpoRfN2alAgPsgT3or14dLkeEXEiyh58L4Yg9VAIgb8VUnxHzP%2FrOlrhkcz3KBasVJcgUKQwkOOY0w%2BYY4fAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC5XeH%2BESFssQnED%2FSrcA%2BbzgWRamuhpWtaIR9Kl9WAPEQORELKLFguXsKpSWkY7hvccTKJAZAkwrO1t%2BnDjRExpMOFcTayiR0AR3YBRqoAaTCwDce1jRSNE3mHERO3jnWITJhZ7duEeMg%2FqZtWmnj%2F2%2FkQMFmRYf9tGlw4Y7XpEUljMuo7jd%2Fk%2BveuowjHOtSesXarU9ZUYxpAwe0gFMuWvgH9VzxN2D9weSVP2RibiU1X2GVIgBKQ8LRk0KVIZll50%2FSpQxFq%2ButN9GDa6mLqLXeAtV2Hgj4jmu26DGRjbLYffAb8mDdzFaVCvJGJJNLLAhEimsiXVxIp17P5dx9T2M1xjM6PN1hr2f1B3hHQG%2BxI5EHGsimYwZSO7NdFyT8AANWmgdwz%2BErr2wMlmfANOax3NVbEDBv4hlBCMnJE3Z%2FksQkzDXJ87a8HuaPmXcKxsF9VkuSX9iM7eaobmFKdNj4fPmSt%2FYd1HwzZ7JN0KwwCt7txFyw5hI3UVmDt6BkVfGA3ztYapFgiXd99SfVLUesqxwyXz8xaaoKtKOxTzz7uQuFsn4YUAc%2FzGNIlAmnlEQacxlGuxmjukwnBzym9y64qx2zJMw3TkWQxOGs65wwYhoWg9iejQLwX9%2BQ8hqC1U22henj27%2BAkgMJvttsAGOqUBkG86vVExzuD0ek15J4tHl4GbWHGAUJ1r8o5nODIUoo0D9uYyvd50sTeA1n%2B2GpnZNvGgrf5N1q8t14DuO4b5hg4VsnrsgUsNDoaz3nqQ6s6YgVjx4IYHT%2F1QARUK2HVt3w1XJcGlUvFACe8hHra0nSRD4%2FPeHPQ8jk7jF3PPr7OIge1PREobntJY2gF92ylKjTxRgk%2FfDUXihKZOrzrJ81Gqh%2FzE&X-Amz-Signature=e46f3224d4badbce6368d65f62356ab5f306cc2bfb555a20e868e58d5113142d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFIJCAJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX3PsWf1ULDD1iYXVsXfkASsU36XWTo5vfhWmaNc0jFQIhALF%2FV2AqjOMa6C2BQbeKjG4KnEcxKvFmod9mMHryyB7QKv8DCFcQABoMNjM3NDIzMTgzODA1IgykQxka9jIB11e9eJ0q3AN7AsymQ1AzwmNpVcZr3MiCX5RQcJUJlbzWfOi%2FyefHDqOdeHZlRPcpiGIjdxMycVIg9zZoDOwMlwaGfN65rUV5O%2BQWl1N2XKdAzDEG6XU8%2FOdSvoZYQO8Am4fAWqMkbzd5LosQoFtm%2BLlbAYCfR7%2FvlYe655GVmc6rswcDSXygb79UnXwyltPpi4821wSfrHAL%2FqDGepq%2FVdoF73nb1z7%2BAxcxTJQqzgC7pAW0rI4FgbBgw5walHfk2Vg5tbvPXZHS6jQ%2FST8%2BRQTnb36VzgzXk7ziP0k5arpvSHXOM8DGkfjBanbl2%2FBp6QsQH6W%2BRgSPoSIPze55LfDk%2FSOwPw7nRJTW4PKsc%2BICDvVnbI4lBkeZ9ZHKr7SRaVyPl4A%2FzTdzwrFGiSFcwTmlumTsUf%2Bvf9L2UBCIul9AX405x3C4tc1tU0jX4bUXsZ5LZj3b8HON4xilApkbjhUDaN7QdZtd6qNtoK2rnx%2F6t%2FDlM6U6kzFFuZAF8EhiwzkAph8ThA7V78Q9STPxafI8W3cM6ZlHN%2BTdEdSdAfAm%2Bs0flxEXuNP9gFpWLh2VZqJsAhUzmvF9mz9E318fJPlo5o%2FGU8JGaIWV0wNtONi%2Fj5ADk2xyWWKKm39yGN7BDq7F3DDhhrfABjqkAVmeDZtaCDAyoMxvbFzp55SGHmWXwJQJbhsJ3cB%2BjtqqsXlIYzOf5QfvaeIp4l6WTE9H6z5jqg4X%2FyyvRdyiUkaFe0rHKQQq87PSoYfbWGdp44U9HPBiaSeHTgA4VDshZnCUnALNu2zzElvf9p1DuGWRZP%2B40IO3CtGu6xJtSIYIViw1iee9uWWik%2ByBgJqVDeoSPBJ2e5ZylThROHGf%2BX7thlDN&X-Amz-Signature=2ed04b9767f5d6f8281a8f454b71a95a55543825ac475d4dd2580e540282ecea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIYWK7Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD383tpc%2BFptKfFiORg83GwwRieRYi%2FUTf6RC8RAchnAiEAxGJUnuU0CnOA7LaRNFUF81%2FX27HSanFkBhiaoGzHH5Iq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN%2Fe3w%2Bg30Eq9dny0ircA6T2FiQaGl9cf2KhbTzdqrtW%2FJ%2FbZLDR4w1s2u7qv4TLs7KvEdlGOzzrxJv37LxhCvQkvlPlOIjRJoVZEjSrCYvtxzcziARHNzQCFxn4zw3Vkpct2UcFAtjVUCpjAoDfzFzVHuIf5e7LpNrwiwpdanUZRUGbGahreQY12QhH%2Bw9YkdmiQgUQ5CvPPUrXjjNBWJjnMN%2BqYqd2WxOkqY%2FkDADQLXPiae9vRxezBScv4RtxLDAUK%2BYOQNE1CM0SCzjBPoEbCNOfw8zyQiBfWbAn0svQi0uwv0bWbCSxix2ShEAVU%2BaCSNcH0xAekicWSEkGp%2BfX0W4qHux%2BmiWL0fyYCbsBjDP68wLKCMg0OEWpbJm2hkPlVn1SXB0KTjhjw4AoUfWsErG9Rdz1MHnlfwl3O3XAm0QKWhAOtoJKQQQDnGw8GmFgH4dkYrhr147ewInlp49UTd777CHFQ7U42zVb%2Fjtp6CebKq1A%2FHd98emA0fkxM4IAYHrmhe0tQQI0iEPdTHSonz3ef41JrQ8WGuydJrwKazVhculjfLsav8oprkcTdOno8AEei3xNxBQ3N4yxVvlWwwbNcArB4bk7WtNoGzCKCKTJ4OQVuRQOr6SwBiDFLrtxXJg%2FxynEQR3qMKXttsAGOqUBoZ4CKZ0YjkjGO4o%2Fbi8q%2Bd5Gv2dMLtHGAFINVH1p3rx%2BrT%2B1so06JV%2BVWwoDNuMTN6EowlCBBG6W1rCBTDRQrycGInWv6kO94fNVKTb4hPqNSJ%2FYP%2FbkDZUsOVv8bTnwUQvxiEfrwLGmjF7WG6PURyGqjfFpSQdPSJfyKCplu7cVQZugn0YZxintM85xV%2F%2FVzDSJqxRliz0d1njl%2FwdsVkLWSK7N&X-Amz-Signature=2856c4e6f5aeee463db6995eff5ede99b0d2016ccd9635d7433e162bab826b12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMQIKHB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxGVqpoRfN2alAgPsgT3or14dLkeEXEiyh58L4Yg9VAIgb8VUnxHzP%2FrOlrhkcz3KBasVJcgUKQwkOOY0w%2BYY4fAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC5XeH%2BESFssQnED%2FSrcA%2BbzgWRamuhpWtaIR9Kl9WAPEQORELKLFguXsKpSWkY7hvccTKJAZAkwrO1t%2BnDjRExpMOFcTayiR0AR3YBRqoAaTCwDce1jRSNE3mHERO3jnWITJhZ7duEeMg%2FqZtWmnj%2F2%2FkQMFmRYf9tGlw4Y7XpEUljMuo7jd%2Fk%2BveuowjHOtSesXarU9ZUYxpAwe0gFMuWvgH9VzxN2D9weSVP2RibiU1X2GVIgBKQ8LRk0KVIZll50%2FSpQxFq%2ButN9GDa6mLqLXeAtV2Hgj4jmu26DGRjbLYffAb8mDdzFaVCvJGJJNLLAhEimsiXVxIp17P5dx9T2M1xjM6PN1hr2f1B3hHQG%2BxI5EHGsimYwZSO7NdFyT8AANWmgdwz%2BErr2wMlmfANOax3NVbEDBv4hlBCMnJE3Z%2FksQkzDXJ87a8HuaPmXcKxsF9VkuSX9iM7eaobmFKdNj4fPmSt%2FYd1HwzZ7JN0KwwCt7txFyw5hI3UVmDt6BkVfGA3ztYapFgiXd99SfVLUesqxwyXz8xaaoKtKOxTzz7uQuFsn4YUAc%2FzGNIlAmnlEQacxlGuxmjukwnBzym9y64qx2zJMw3TkWQxOGs65wwYhoWg9iejQLwX9%2BQ8hqC1U22henj27%2BAkgMJvttsAGOqUBkG86vVExzuD0ek15J4tHl4GbWHGAUJ1r8o5nODIUoo0D9uYyvd50sTeA1n%2B2GpnZNvGgrf5N1q8t14DuO4b5hg4VsnrsgUsNDoaz3nqQ6s6YgVjx4IYHT%2F1QARUK2HVt3w1XJcGlUvFACe8hHra0nSRD4%2FPeHPQ8jk7jF3PPr7OIge1PREobntJY2gF92ylKjTxRgk%2FfDUXihKZOrzrJ81Gqh%2FzE&X-Amz-Signature=13687e06f7fb029b86668a6edea326d2b5dbb357d384bacce8fd228e140f6b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
