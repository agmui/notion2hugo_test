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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=9cba8dcec24a30120055528b794a16e0a8cf6394f061a3e9b244eb44a9ab86a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=bbb7ed9dfb2439c2661734c1048786e96216777f74e4c241d76de58e50e709f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=724f03b261ca2cd8d3a21b721bdf1831c42d7c09ac9e8a9fbeff7f1ac3a41e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=f362f521cde2540ddf1000afcce9a3a5cceef6ede4947948ff8e18ac1e812eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCDDQM7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz768sd0Evs%2FgN8YevVSLSuUeT1TMtT8T9JNw5qRSZ8wIhANRybNYcBMGDoSPxQ1ewW3dg5CWHQgqX1WZ0JiDmNFCgKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwepdFHjOqcEwcxk%2Fcq3AOrtNPlTiRAkTc2OJDgzq5Jgi2%2BtsHRpepDlONOfhd%2FoTsvEaG%2FcUW0RdVe4EGe2Itxc7bsOVTT4WoJBKatpSDnijxO4X7go5u%2FDEGlGS3tRhLqgu2LvOxAMnIi%2BaN6eC%2F89Od6tp%2Bqjuvx08RN7KPrRC7aeGxPo9TjI%2FOMH%2BGN2eWIks%2BBIv4FIj2hP3WSe%2BE7hyhmDc40BorxdZJ39PMlgPmP9Egoh%2Bwk5bZyhPgXRaA%2F1he2dBILCWwxvxfTI7OqOxSnr%2B%2FQdmOl3tfY6h0VOIdE0uZ%2FWeCEDipo32p9RIoqV2uMwDFYUxyrkVnLIfuPIz6wS73IWemVBtnTBidooTRkMpQfgQIKRG3yPQUlGA8HJJixhFNb8O%2BBeesR2xLw1RAMC77n6UpZOX54omtFgwcH8J34tnD6Lec3lQ3h4BlVeCf%2B9AYs5YsSdfcLLQdKJwTiPBVC6AAQNj2dV7tJNaiWqfYO6vD9%2B9QR%2Fw7s0rb0lw5MBqSQpo%2FV8FH%2F76fhSHFD5I0zgHXXmr8fwVQzxWglgLiqc%2Fq4YGsTLuokESDSmSGQJfyXcjYZ26F7pQ%2FdFr72QmwqEXlsDy38IwO0kbc3Nuq8nAC9M9Oyxyw7pyVK94Fi%2BDHEWH2cYzDomqzEBjqkAb5VU%2FPXg1NPiSNNUO2kUC9heqt6af9%2Bcyte3ZvgvcmvzzStBypO%2F5y5vBq%2FMUxCGQVkSuqQKLcXsL01WCqYYZwaxQ9DZ%2BlCRi8hm0FyWm9Utleo611Rt1OySPnedDRG285qMKQ0LFnZRmNjGv2R8dMmOJTComPY8Z6l2Q4CaPg81JTtdCRvMKYcv0gf6VYxIMHegpdKtjsBe%2BfqpadxNyuQAT5N&X-Amz-Signature=d925906a304c347acefe17dfa3c64ccbb62920190192857daad1f9467de16cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=86da1281a0d81599d31c93283e2ce247a60efb07055d464d81cca1b33dd17415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
