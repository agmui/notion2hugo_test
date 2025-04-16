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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXIY7TH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Od%2FU0SsD9jnrruwXOBytUMgutHV1QpsJ4H%2BUAB9%2BaQIgKxOcs4louW6FDBbUvkwm%2FSgY6ebMoHLKby4T3jKe3gcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIfygdt7%2BZE1p1lamCrcA3U%2FUmYyo0hTlkOT7UBRY3i7OKc14%2FJTUVsb5VyUtGH8Nt8We3LKgoQHNJb%2FdsjQ5QHxXq1GLiAZWzPIwd90wcnnYtSdUkRXhxqmvwmR2q8JhY6W4HNZCNuT2eA6PY59%2FsZvmv%2FglaPiqvNL3G6Xi6TDwAXn081BV%2F53aQp3acwHwoHPeYyjBu0eKZBV1R8Lg5RX4%2BlmW%2BfpxwT6FKja3Azy%2BbgbOMdX69wAPG5wRDklQeA%2BgwJ1UMGLjmaHEncQo1lMaBLx337U%2FgfyUK6P%2FG49KNE%2F8ZKQZFNq6ALiC1QoWd674u%2B6HCOREggI9KcDiqv%2BJaReWLGZKCav4b3uv2sIy8wgN%2BjGh1ux023sLl6tuGRmSC75GQSkvxBx2UWzYDGvMAY4vrS9EpBLdHLj%2BVt%2BRiPisbRKllNbWb9nTsJfgfFrwaE1ALsVb8Q83sf3PmnWgYFs%2FWz1a487HP3ibM8qLbcr7ijg1f1yZiEJYu4P7vaZjI87GoOuAxz75xLkRvzH%2BLTBG7U3dgHvv45hDI5neo5%2B96i7s1S8MNNrp%2FcbxmLyDgrZLslSwLNyzRxWi%2BEOJgM%2B1a4ZycdgDUfIrAO2osnA8tbAbqR52DXaKaYvFwAKgTKcJGwGu5iwMLDX%2FL8GOqUB4OvuD6JNqiDsKLB%2FIPQBHttrwvOQ1SrraKX3u4%2F%2F%2B%2Fzjx2Fk%2Bvp2vrVtCfXW7bUnAtQkWG%2FTZFF4EK9TI%2F%2BgPjcxoN0wQgIrGsN6rs9w6QC1XR8XUHbxUjufUr09fnJxZFJWDO51qBSSFhhpEbN0bzdvFm0WSTMkl64f7GNXEWGwBzG0m9456hubvfSIDZReWAFLviS7CQPz9jpXNWB06AQe2Wlu&X-Amz-Signature=90fa5ff6ca026719c6e1df53efbbafdf8627abd9da693c14739be3c4d4154327&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXIY7TH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Od%2FU0SsD9jnrruwXOBytUMgutHV1QpsJ4H%2BUAB9%2BaQIgKxOcs4louW6FDBbUvkwm%2FSgY6ebMoHLKby4T3jKe3gcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIfygdt7%2BZE1p1lamCrcA3U%2FUmYyo0hTlkOT7UBRY3i7OKc14%2FJTUVsb5VyUtGH8Nt8We3LKgoQHNJb%2FdsjQ5QHxXq1GLiAZWzPIwd90wcnnYtSdUkRXhxqmvwmR2q8JhY6W4HNZCNuT2eA6PY59%2FsZvmv%2FglaPiqvNL3G6Xi6TDwAXn081BV%2F53aQp3acwHwoHPeYyjBu0eKZBV1R8Lg5RX4%2BlmW%2BfpxwT6FKja3Azy%2BbgbOMdX69wAPG5wRDklQeA%2BgwJ1UMGLjmaHEncQo1lMaBLx337U%2FgfyUK6P%2FG49KNE%2F8ZKQZFNq6ALiC1QoWd674u%2B6HCOREggI9KcDiqv%2BJaReWLGZKCav4b3uv2sIy8wgN%2BjGh1ux023sLl6tuGRmSC75GQSkvxBx2UWzYDGvMAY4vrS9EpBLdHLj%2BVt%2BRiPisbRKllNbWb9nTsJfgfFrwaE1ALsVb8Q83sf3PmnWgYFs%2FWz1a487HP3ibM8qLbcr7ijg1f1yZiEJYu4P7vaZjI87GoOuAxz75xLkRvzH%2BLTBG7U3dgHvv45hDI5neo5%2B96i7s1S8MNNrp%2FcbxmLyDgrZLslSwLNyzRxWi%2BEOJgM%2B1a4ZycdgDUfIrAO2osnA8tbAbqR52DXaKaYvFwAKgTKcJGwGu5iwMLDX%2FL8GOqUB4OvuD6JNqiDsKLB%2FIPQBHttrwvOQ1SrraKX3u4%2F%2F%2B%2Fzjx2Fk%2Bvp2vrVtCfXW7bUnAtQkWG%2FTZFF4EK9TI%2F%2BgPjcxoN0wQgIrGsN6rs9w6QC1XR8XUHbxUjufUr09fnJxZFJWDO51qBSSFhhpEbN0bzdvFm0WSTMkl64f7GNXEWGwBzG0m9456hubvfSIDZReWAFLviS7CQPz9jpXNWB06AQe2Wlu&X-Amz-Signature=973e8aa11f2f2a450679c919e4e418134fbcdcd41ee51bb26d295d58abfc4761&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRHM6I2D%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdARoYfIRM6jqHPbrHrA61UE7d0%2BB5RKjWX19tMtUE9AIhAJWLiXIGOY%2F9pGs1Pb5IPrAxJntpEpK8kTXB3c7koMn7Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwBh5Hv861u8u%2FAr%2Boq3AN3N2X8h8nPZMx3QYCTUK8qz0pRYvbXlGJbPhZLoai4MPuXdXNmdWBdplVaWqzzmx9slrluWuXk8Dg8MHELytjz%2FNGInKjeyan3IxI2mfDfDToxVp1QCja%2B5NvqVZc3oKmmFBj9601g%2BpThaV4EeLzFAZZomO%2BWewoxWZZ9LUkveGUia5KdfDIipO0I4ZC6LFP8DYE%2F1mRGdomPrR0e%2BuE0yh5w%2FqFw%2FS6LXg81ZJ5vnbN2xc0fzMC1mYiY2HWmz5HYX8DdSM6HcoiXMHMDDNoGyaeSH30yaS6WT0gU%2FXAfDoVcJYBNGV5uDfjIbqTf4esBf8TzcVkFc%2FZXBkQYG53xUevaolziu6%2BZjFEiFInnsgY%2FsE4%2BkWi84vobklW0k1QWwRP51PFaERO9c8v%2FbPtJxLyC%2BTPPS1S18x%2BUBX%2FHlJsKGWIcCFiKugcNx1JkK5zcfrhcvAQWuQfjEC4XpzPjAmBCrT8besiR%2FipjiT6oNz7pQh0bFKEs8hZ9pba7a18WU5eKcJrQZBacIilqQuaPh%2BRhmW3k%2BRV6kfZvLM72YwgOhXXf73IDerskVPRGj8VtYf%2F9NCLe1013JtWXyZuvZvRch2%2FiWRgO6uPe4NDVepuwgNoEwbu3fTgNFjDI1vy%2FBjqkAfEXhEyeNeo65fxKxBiDOc2%2BgYP6Dfm2JrLivNbBKopWdiAbKF%2FKDjQEq4Ita3G2nmSKYXoc6tM0i1ltZNi%2Fy0bysrMKfnezKwGwGAlbSKdWEILIJ%2BxxQV4CsUVdmuNt6IfodyaSQrvH5WixHxbNMk0Gd2yp3HoAtL9JUZJGs7OcwALkXc5%2BuePh14M6rJtOGX2y4B8TyRwIWxxTIGGvRuEfqfr%2F&X-Amz-Signature=b095d7f930a1ca731b43288380d56bbe0fecac6d1924ea6e3be5316dcfaa62f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBZIJFY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAt57sEw3Gtxw3FRIoEBi8NP0DJRW5H82qMF3HhXY2PAiEA4NoEKx%2BpIIMvbue7CSY3K5LpCCFgKfiz7c9s3rSczTsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJqXbs5HmZiUP8SptircAzfThj4EYCXksWuuJefoar9vDqYMYRFfkrjk%2BAdkt37r10NDzD6CK7uMjxs9dPhBHg%2Bs4P%2FEhILGfI1v1iLcu1fT3xGFONxrFNWSYrdc5a1rp0DXGywdLMbrUGXJj3ehJsee9xg7InQ3d%2FhtIyJOfe82f6Fz983ClOdGVT17xUIOskkAS4vM0QUH3UIGyp3Ses1CWe6HX4JjxOGeTTqbuX7ErqKEQ2to2Nk6LD%2FBkT8Sm1Yus0Yv3uH2LXzbVgDc1s%2FI9EDVvZkcL0TuQ6L4OhI9WBn5fU%2F%2FrFIUuqTJXehuKxgJkyvOtO%2FwIhvIfiKWs5hXobFOfFEj00bTPQG9NM4QYkAe6MlJZLDMzfXdtIx6mA6cV0M87TYSaxqwXFp4yl6J%2BNjC%2BzKQXhARcoTLCZJyZn6j0U3F%2Fs9iDyD4PpYbtELEO%2B3%2FKIT1Rwm0vIqEdfqPBiaoTxnPKLMPGyDbE%2B7Kbl24BVKnKSllfU6HsXUNqfyyIjRCSqt1W4X7IF7uMsMYw%2F6rVI%2F84NMJuEJsR78q56BrX0axmevDQP7PqP9n40V46tEWnR2gGTDqhWVumHREaiR14MeCBeaz7bFKpehVghofJMdWzZKJowNDhF0d5mW3aVl91GqELpmmMIDX%2FL8GOqUB57YB4UEFgTz3FetZHy6X7JcV0Uu2sUnYBzDTRMvPNpUscOPfneTAlan2HwyzdS1mvrwhZ%2Fx7%2B5OzeRR6X%2FexhW9gDjMAqOlOVPpjDfRXZ9qtUF9eHj2kIlgTZEpWvN91jXPcGX20hFAeD39BONdt%2BQFOXg1NRgi945CR86FENsWpZmIk7qAq6n3P%2BsyBp9s0CQIbn3mun8OMiWhVxD31i9lY9S2x&X-Amz-Signature=bb6f84ff63c7b99b70e5ee62ca0500be7f6dd916c3e1c44661a43951f6a0fa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXIY7TH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Od%2FU0SsD9jnrruwXOBytUMgutHV1QpsJ4H%2BUAB9%2BaQIgKxOcs4louW6FDBbUvkwm%2FSgY6ebMoHLKby4T3jKe3gcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIfygdt7%2BZE1p1lamCrcA3U%2FUmYyo0hTlkOT7UBRY3i7OKc14%2FJTUVsb5VyUtGH8Nt8We3LKgoQHNJb%2FdsjQ5QHxXq1GLiAZWzPIwd90wcnnYtSdUkRXhxqmvwmR2q8JhY6W4HNZCNuT2eA6PY59%2FsZvmv%2FglaPiqvNL3G6Xi6TDwAXn081BV%2F53aQp3acwHwoHPeYyjBu0eKZBV1R8Lg5RX4%2BlmW%2BfpxwT6FKja3Azy%2BbgbOMdX69wAPG5wRDklQeA%2BgwJ1UMGLjmaHEncQo1lMaBLx337U%2FgfyUK6P%2FG49KNE%2F8ZKQZFNq6ALiC1QoWd674u%2B6HCOREggI9KcDiqv%2BJaReWLGZKCav4b3uv2sIy8wgN%2BjGh1ux023sLl6tuGRmSC75GQSkvxBx2UWzYDGvMAY4vrS9EpBLdHLj%2BVt%2BRiPisbRKllNbWb9nTsJfgfFrwaE1ALsVb8Q83sf3PmnWgYFs%2FWz1a487HP3ibM8qLbcr7ijg1f1yZiEJYu4P7vaZjI87GoOuAxz75xLkRvzH%2BLTBG7U3dgHvv45hDI5neo5%2B96i7s1S8MNNrp%2FcbxmLyDgrZLslSwLNyzRxWi%2BEOJgM%2B1a4ZycdgDUfIrAO2osnA8tbAbqR52DXaKaYvFwAKgTKcJGwGu5iwMLDX%2FL8GOqUB4OvuD6JNqiDsKLB%2FIPQBHttrwvOQ1SrraKX3u4%2F%2F%2B%2Fzjx2Fk%2Bvp2vrVtCfXW7bUnAtQkWG%2FTZFF4EK9TI%2F%2BgPjcxoN0wQgIrGsN6rs9w6QC1XR8XUHbxUjufUr09fnJxZFJWDO51qBSSFhhpEbN0bzdvFm0WSTMkl64f7GNXEWGwBzG0m9456hubvfSIDZReWAFLviS7CQPz9jpXNWB06AQe2Wlu&X-Amz-Signature=a92c47f6891dc2ed995ea4311049e1ccbf305fa0006d8808395c5e06fcfececc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
