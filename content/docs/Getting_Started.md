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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTBMMN3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA3r9MDMj1EBUC%2Fh9XpjjKMlVIlXh%2FKPQoovLjH7n2h4AiEAp5cToLc%2FxyJ%2BXPbvevPvq%2BKlumLtcL8%2FB5NlTqAWb2wqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOphKWhFApMBhFyzMircA2P4njSGCdjeqr6GomaJyekYu%2FCPm2hFzAIybeWt2lA6yc4sUh0AErohNDjNpIkyqaQY3q0sorBhXxIRVCoiGZMa7fVrJPZpT6OFkxzgFzejLLZ3nsvGRqmYthe9pfI64UBZSWhWZfoBHpnuO7EQMqf6LQtWsNJdPA%2FfPBWpLwvf5s4fXp3kGZk84aFaSBaXCktxfUl7PvdVXY%2F6zuIoU%2BzNqElc8E3YuU4CNgAwj1QtcnHEZM%2FOozI56sYKtOCazERCR0LWT2lgJNjwUlqJ6cwsYELVu%2FxWhJWpAGhYP9WLs1q0btN2mvpMfsq2jfhFC0WARTPHDTSsby%2F%2FD1jSxstq58c6b8eAdfQWN1rk7uXTXwgajZWWFEjxatzHH5mTk0Me6LN02StG%2B8PTOsx%2FwfjIJqvJz6oULHkSs64THBCSgwWKlfB5AZOE0teKFCfitZLwKxJFJ7VQfGxRVN0WhU7vd%2FNDlE0aVnF3fMebJjLmGH4Iavh7EFilEptIL7hbdq2CTV48HoQ53a69mfNd1DpGhaCQiOwuAgr%2Fu1Gl8SHZMf0iXYO1nzaUB5UluInKowCth0y0iZiyRixCBdp5%2BRJQup3NIPZz44fqD%2Fb%2BLe2NjZVZxK8TUm%2FWh%2BHJMLnhyMAGOqUB6hB8xek4oHQh9Q6L9kT3BfxEh9TXBpclfKHokGQG6thUuF3zgxNn0JevfYXbSmZ8SnFgriICbEc3ph%2FZR3%2BPuziNldHnsTmDG%2FN3i3zn96Pzdpdc72Vyq71n%2BYJpgTW%2FO1ZYAI903chNWI5ePPv8aWWDWa78S4zTL%2FiVnWmsgZfIaCEKv8iYi1N60k4ffP5fFI650Nl0Lt94JpE4wZCl3qYrdeCE&X-Amz-Signature=95bac0b7731633a7f2fc2e809f65c4966c8705bf1fd41e92b02ff0ef5dab3604&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTBMMN3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA3r9MDMj1EBUC%2Fh9XpjjKMlVIlXh%2FKPQoovLjH7n2h4AiEAp5cToLc%2FxyJ%2BXPbvevPvq%2BKlumLtcL8%2FB5NlTqAWb2wqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOphKWhFApMBhFyzMircA2P4njSGCdjeqr6GomaJyekYu%2FCPm2hFzAIybeWt2lA6yc4sUh0AErohNDjNpIkyqaQY3q0sorBhXxIRVCoiGZMa7fVrJPZpT6OFkxzgFzejLLZ3nsvGRqmYthe9pfI64UBZSWhWZfoBHpnuO7EQMqf6LQtWsNJdPA%2FfPBWpLwvf5s4fXp3kGZk84aFaSBaXCktxfUl7PvdVXY%2F6zuIoU%2BzNqElc8E3YuU4CNgAwj1QtcnHEZM%2FOozI56sYKtOCazERCR0LWT2lgJNjwUlqJ6cwsYELVu%2FxWhJWpAGhYP9WLs1q0btN2mvpMfsq2jfhFC0WARTPHDTSsby%2F%2FD1jSxstq58c6b8eAdfQWN1rk7uXTXwgajZWWFEjxatzHH5mTk0Me6LN02StG%2B8PTOsx%2FwfjIJqvJz6oULHkSs64THBCSgwWKlfB5AZOE0teKFCfitZLwKxJFJ7VQfGxRVN0WhU7vd%2FNDlE0aVnF3fMebJjLmGH4Iavh7EFilEptIL7hbdq2CTV48HoQ53a69mfNd1DpGhaCQiOwuAgr%2Fu1Gl8SHZMf0iXYO1nzaUB5UluInKowCth0y0iZiyRixCBdp5%2BRJQup3NIPZz44fqD%2Fb%2BLe2NjZVZxK8TUm%2FWh%2BHJMLnhyMAGOqUB6hB8xek4oHQh9Q6L9kT3BfxEh9TXBpclfKHokGQG6thUuF3zgxNn0JevfYXbSmZ8SnFgriICbEc3ph%2FZR3%2BPuziNldHnsTmDG%2FN3i3zn96Pzdpdc72Vyq71n%2BYJpgTW%2FO1ZYAI903chNWI5ePPv8aWWDWa78S4zTL%2FiVnWmsgZfIaCEKv8iYi1N60k4ffP5fFI650Nl0Lt94JpE4wZCl3qYrdeCE&X-Amz-Signature=d537a8d5daf3daeab0e388e9db6d4c12b1c3a170bfd8e20eb5b4bf7e3ae9f594&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTBMMN3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA3r9MDMj1EBUC%2Fh9XpjjKMlVIlXh%2FKPQoovLjH7n2h4AiEAp5cToLc%2FxyJ%2BXPbvevPvq%2BKlumLtcL8%2FB5NlTqAWb2wqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOphKWhFApMBhFyzMircA2P4njSGCdjeqr6GomaJyekYu%2FCPm2hFzAIybeWt2lA6yc4sUh0AErohNDjNpIkyqaQY3q0sorBhXxIRVCoiGZMa7fVrJPZpT6OFkxzgFzejLLZ3nsvGRqmYthe9pfI64UBZSWhWZfoBHpnuO7EQMqf6LQtWsNJdPA%2FfPBWpLwvf5s4fXp3kGZk84aFaSBaXCktxfUl7PvdVXY%2F6zuIoU%2BzNqElc8E3YuU4CNgAwj1QtcnHEZM%2FOozI56sYKtOCazERCR0LWT2lgJNjwUlqJ6cwsYELVu%2FxWhJWpAGhYP9WLs1q0btN2mvpMfsq2jfhFC0WARTPHDTSsby%2F%2FD1jSxstq58c6b8eAdfQWN1rk7uXTXwgajZWWFEjxatzHH5mTk0Me6LN02StG%2B8PTOsx%2FwfjIJqvJz6oULHkSs64THBCSgwWKlfB5AZOE0teKFCfitZLwKxJFJ7VQfGxRVN0WhU7vd%2FNDlE0aVnF3fMebJjLmGH4Iavh7EFilEptIL7hbdq2CTV48HoQ53a69mfNd1DpGhaCQiOwuAgr%2Fu1Gl8SHZMf0iXYO1nzaUB5UluInKowCth0y0iZiyRixCBdp5%2BRJQup3NIPZz44fqD%2Fb%2BLe2NjZVZxK8TUm%2FWh%2BHJMLnhyMAGOqUB6hB8xek4oHQh9Q6L9kT3BfxEh9TXBpclfKHokGQG6thUuF3zgxNn0JevfYXbSmZ8SnFgriICbEc3ph%2FZR3%2BPuziNldHnsTmDG%2FN3i3zn96Pzdpdc72Vyq71n%2BYJpgTW%2FO1ZYAI903chNWI5ePPv8aWWDWa78S4zTL%2FiVnWmsgZfIaCEKv8iYi1N60k4ffP5fFI650Nl0Lt94JpE4wZCl3qYrdeCE&X-Amz-Signature=eb8fc3f4256003d181f05d30a6ed336b46e22482b85773d699d6e3f278a0ac25&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEV3KMS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDwopjRLMrsKiwvetINxaFqMRM15UwxMjnt2g7mtdOLEAiAEnAj62knMGwLa6IKuM3RxjQvOahDbloGPziH1xH38mCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Ok8dxi7v%2Bgo%2BfVqKtwDy3WZ3aXXIoJQPCupXOmUs1EbZkhuY%2FDhtZ4iO1ypokV6ZhxY%2B0uMesfpZYevM07FdkkAn6587JmLPem%2BoOYsA9qB0t3Ny37UF0pIhjfOZzE6KxR06mhfnb0TSigK0ouqU8eCXTNqXqabIQdmm%2F4k5DpOHQu4xSnHuBVov%2FAGpy7vj%2FzmH%2FK7uklOxmm3hV3mHqL50a2HNDVIsEc3ZDcQWPLcUft5cA9KKr9XcaRUjMSk3vEe2rMMChAnLUPYskNlfd3IqgJl3F34YjmdW269xuMcFnYDnPJhJae4zl%2F2z%2FBtNXtYOT%2BxbqcEMVr5sJpSegub3dT7e%2BHFA15l%2FE55uZR71NsBMel24f5BxgBjFvNM8GMZLin3u61x5hLNG5L4Oc55KVhEm3JuZpVpOMVYYAGL7Is32BQP0prJpMKlIPjhECitYuIKv9D9d2zU7UAYgJQr9GwTkeQobDFLTzdcpG3QiXSgr8XfwEocBsuNM%2Fu4C%2BdcsxabuhGaypd3M46%2BXiCLsl9r5aAtnXRM8bQzgKR828DEbgQiOmKHvzEnbcF6rkAZyUaedHS42U%2BOcbPq7%2FjXMGJUcVMiWTvkDcKvUWavP045eN5Ldvr%2FSZzp1ELEVUAUV8yVZoD3oYowj%2BLIwAY6pgHZGXEwWoktYjbvv9RTFEEVJhUN7CGZdsxRJ9W6l%2BzWUcqVF8ntyooNvIs3Rljm50v0qO%2FS84YgYgHjGpyn4wKR%2BLHaduKQURWL2VcdMhQcZ0AMNStGsNLhCKglbJZAk9UOObCRzT3h1QR%2FLPQH6I3HhCRSFzvPlQSZVcCL4B7PTGGGCIjMDEzHh6ZQbBL9yQbMp1PynqJ7Lx90MdG9oKADjXby6faY&X-Amz-Signature=af31cf3aaa286ea3d72542a83c0dbccb9847ea8f0da1054fd37bbb2506bda934&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP477WS4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgXDm0wRoycCXLwElfqFZVx0uFV2sGyoehTJE%2FxbEnAQIhAPOl7qFsL5bdvAuMKUa6klRyXxcvwtz2o9DFsk7Wt850KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlEzRfQ7yMp7WcvVoq3AM4rjoJ5VvtSzA4cAgH7IzoMdDd3fh2PPij61woGkZP9uVKMtx225LokzxH60YWHwyMEzmMLZ99BuahsnWklYib%2F%2BXcHAb0gtK03dD%2BfeZmop453LshO2%2Fm0tl378bwDD7fWL5y2TKpjy9l6cpZnJ3ZxZWj84s9btgEPZpTFFXeqjKjco5IaCaG07G6BdY6LRCY7kroRRAez%2BMksld%2B0l958lYffm85Q0xcGlrUTESkW2p8ew4p9YggNoKJUemH7MG41%2BM3U7Svf2yfa%2FhZyH5lD3fQZ5fdZ5ALIuti1kezwHrjScuqaNFeL9ygjthiSCKCptM3PAyJ6qdOSU%2BfMXJZpZHua5icXOC04A3SH1wfeeM5FXhxijuhO3H91%2B16wRP022RSGaeOWE%2F7dJVUHx13B%2FFAhcScUzEqaTw%2FN%2BTnBO%2BAlDRkwRdEL%2BAyYAgVy%2BC7TPYgrITnoQvrVlc6HBUsA6TfWOda2m%2BGz0ys%2BgAdJYVybMHVZJHavcBX6%2BX%2BEdqyzAj3Nb%2B9VGqUXDuTAgefT%2FV5kOV8zkF1SK2U3QE5Srv5b9BY7DGfzMj6wZnb3rPQOg21DnERODITfHLbbwsnMaKVw751w%2BlbTSdvj78ENkYq8FHpYgzrIIrn7jC77MjABjqkAbDPkh03jqjtCYe6HkHQVjHd4GrJMwWCXXG%2BlyTZocTVGY8mJ%2BboH33ylYDCo9CyZCOfCjxZ%2FlPKdXXWkVVBIZhIYXNFyyTAlMz64okoqbTROCtWwoAX8Itsn9EOWMqhRdhbsKqlo76AhsLBJZoj3jyH9wj38FDQIXbDIaqcePYiP8t0O6WiwySSoBcahFCiQLROslPx7vnRbMo0ljpatnQRTA%2Bq&X-Amz-Signature=d7e242e1d333fbbae44c72da4abe4dacb4fcdcbee18c98bcae926b4867bd96ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTBMMN3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA3r9MDMj1EBUC%2Fh9XpjjKMlVIlXh%2FKPQoovLjH7n2h4AiEAp5cToLc%2FxyJ%2BXPbvevPvq%2BKlumLtcL8%2FB5NlTqAWb2wqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOphKWhFApMBhFyzMircA2P4njSGCdjeqr6GomaJyekYu%2FCPm2hFzAIybeWt2lA6yc4sUh0AErohNDjNpIkyqaQY3q0sorBhXxIRVCoiGZMa7fVrJPZpT6OFkxzgFzejLLZ3nsvGRqmYthe9pfI64UBZSWhWZfoBHpnuO7EQMqf6LQtWsNJdPA%2FfPBWpLwvf5s4fXp3kGZk84aFaSBaXCktxfUl7PvdVXY%2F6zuIoU%2BzNqElc8E3YuU4CNgAwj1QtcnHEZM%2FOozI56sYKtOCazERCR0LWT2lgJNjwUlqJ6cwsYELVu%2FxWhJWpAGhYP9WLs1q0btN2mvpMfsq2jfhFC0WARTPHDTSsby%2F%2FD1jSxstq58c6b8eAdfQWN1rk7uXTXwgajZWWFEjxatzHH5mTk0Me6LN02StG%2B8PTOsx%2FwfjIJqvJz6oULHkSs64THBCSgwWKlfB5AZOE0teKFCfitZLwKxJFJ7VQfGxRVN0WhU7vd%2FNDlE0aVnF3fMebJjLmGH4Iavh7EFilEptIL7hbdq2CTV48HoQ53a69mfNd1DpGhaCQiOwuAgr%2Fu1Gl8SHZMf0iXYO1nzaUB5UluInKowCth0y0iZiyRixCBdp5%2BRJQup3NIPZz44fqD%2Fb%2BLe2NjZVZxK8TUm%2FWh%2BHJMLnhyMAGOqUB6hB8xek4oHQh9Q6L9kT3BfxEh9TXBpclfKHokGQG6thUuF3zgxNn0JevfYXbSmZ8SnFgriICbEc3ph%2FZR3%2BPuziNldHnsTmDG%2FN3i3zn96Pzdpdc72Vyq71n%2BYJpgTW%2FO1ZYAI903chNWI5ePPv8aWWDWa78S4zTL%2FiVnWmsgZfIaCEKv8iYi1N60k4ffP5fFI650Nl0Lt94JpE4wZCl3qYrdeCE&X-Amz-Signature=11e87fda46c365702dbe739a5550a4c28f7ffe18784a039e59d1161c191a5b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
