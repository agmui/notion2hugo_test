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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6M55TE4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC%2FQEYfr3SKoVFZphss7zL0gHiC0q37MpTojzMKuboLAAIgIyurT3BPBX5z1o1rfmnhmNdbIpmL3jTE5esKuq47fDoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoI0fknCruhe68YhCrcA%2FFnzLB0PN%2BpHTlZDbP%2BzSj75L520hfS5znleMmNVR8tldFwBBEhTI1crt7G9Aj%2FLwya2mXSnrKsUYbb7j6DrB%2FtxnI7mPkMmZZ7k7YWCz45CVrWfpTDg%2Ff7xrBZHuEruZzWBiBuZYuFwrBZN6LCLeVxdzIHshwwqp86l2g25n%2Bqk38onK5G9pttoehvfBOgdWrMjLWLffkq6X4eubk%2F8EhB7D%2F22XwOgI064KytamsVXiy8GVrQUoDyOyc%2FWI8cozKA%2FqD2l7hbR0UbhPkatO%2BVdx2%2Fa%2FrkLtEl5mlyS%2F6Lf3JcrLG5v4%2BQ5sB%2BJ6KqPHA%2Bh1YnNzKvMpysLicqcBiBKbawO0QrXbpL0bOLr%2FrxxsdwibhhxI2UMT%2Bz9mrLOjFh5cXMXerfwrvN%2F0ODqWDIMBwpQg8MthnAxqrSYDygzQGC3gWO6TRKKjunzT9K3iiRdwMW5pgRj5PwfpugCVk%2BOS7Qqa%2FGHrd1ZB5GDsU4%2FA3k3jq5cn6uua6I2maLgMhXLhcoPbFrEZ8KFiwCJRTa%2F5GmfHFB%2BvZ0GidU%2BpckyYog5O8d%2FCMpr04XbZ9lObyBWpZnhBQ5RxfaXy%2BQ6sSVeKZf8AK9LGdFCNu6UMuRvlFYxc0u%2F4mLlpc8MMzn%2BMEGOqUBSr9e8vBqZc4zY6QJdzdA2xEfykawwM1ufgqS1t3ibayS%2B9F%2FBmmRuywakrkd6kkGm2xw1ZRjkJnqWDuCVcYTKNWOaUVo1D4O9SCxPBt7648XqMNEQ7%2FPdHkSPjxEwppmrtdg%2F0gQH7QrIgR02dJwxU3bs6QqOIqsMR%2F2fmLSjFen5BsIfUz%2FMo%2FJuomYlF%2BzEXF01zkJCnv8OwgJG50JQZHM36yt&X-Amz-Signature=64545b2a5d1a03e61ca14710442b9a95aded1a79844818a74ee1318f06d9f537&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6M55TE4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC%2FQEYfr3SKoVFZphss7zL0gHiC0q37MpTojzMKuboLAAIgIyurT3BPBX5z1o1rfmnhmNdbIpmL3jTE5esKuq47fDoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoI0fknCruhe68YhCrcA%2FFnzLB0PN%2BpHTlZDbP%2BzSj75L520hfS5znleMmNVR8tldFwBBEhTI1crt7G9Aj%2FLwya2mXSnrKsUYbb7j6DrB%2FtxnI7mPkMmZZ7k7YWCz45CVrWfpTDg%2Ff7xrBZHuEruZzWBiBuZYuFwrBZN6LCLeVxdzIHshwwqp86l2g25n%2Bqk38onK5G9pttoehvfBOgdWrMjLWLffkq6X4eubk%2F8EhB7D%2F22XwOgI064KytamsVXiy8GVrQUoDyOyc%2FWI8cozKA%2FqD2l7hbR0UbhPkatO%2BVdx2%2Fa%2FrkLtEl5mlyS%2F6Lf3JcrLG5v4%2BQ5sB%2BJ6KqPHA%2Bh1YnNzKvMpysLicqcBiBKbawO0QrXbpL0bOLr%2FrxxsdwibhhxI2UMT%2Bz9mrLOjFh5cXMXerfwrvN%2F0ODqWDIMBwpQg8MthnAxqrSYDygzQGC3gWO6TRKKjunzT9K3iiRdwMW5pgRj5PwfpugCVk%2BOS7Qqa%2FGHrd1ZB5GDsU4%2FA3k3jq5cn6uua6I2maLgMhXLhcoPbFrEZ8KFiwCJRTa%2F5GmfHFB%2BvZ0GidU%2BpckyYog5O8d%2FCMpr04XbZ9lObyBWpZnhBQ5RxfaXy%2BQ6sSVeKZf8AK9LGdFCNu6UMuRvlFYxc0u%2F4mLlpc8MMzn%2BMEGOqUBSr9e8vBqZc4zY6QJdzdA2xEfykawwM1ufgqS1t3ibayS%2B9F%2FBmmRuywakrkd6kkGm2xw1ZRjkJnqWDuCVcYTKNWOaUVo1D4O9SCxPBt7648XqMNEQ7%2FPdHkSPjxEwppmrtdg%2F0gQH7QrIgR02dJwxU3bs6QqOIqsMR%2F2fmLSjFen5BsIfUz%2FMo%2FJuomYlF%2BzEXF01zkJCnv8OwgJG50JQZHM36yt&X-Amz-Signature=3ab454f968a5203f1410e6a62775ebf3fad2a2da2101d71f31b09be72b171c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6M55TE4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC%2FQEYfr3SKoVFZphss7zL0gHiC0q37MpTojzMKuboLAAIgIyurT3BPBX5z1o1rfmnhmNdbIpmL3jTE5esKuq47fDoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoI0fknCruhe68YhCrcA%2FFnzLB0PN%2BpHTlZDbP%2BzSj75L520hfS5znleMmNVR8tldFwBBEhTI1crt7G9Aj%2FLwya2mXSnrKsUYbb7j6DrB%2FtxnI7mPkMmZZ7k7YWCz45CVrWfpTDg%2Ff7xrBZHuEruZzWBiBuZYuFwrBZN6LCLeVxdzIHshwwqp86l2g25n%2Bqk38onK5G9pttoehvfBOgdWrMjLWLffkq6X4eubk%2F8EhB7D%2F22XwOgI064KytamsVXiy8GVrQUoDyOyc%2FWI8cozKA%2FqD2l7hbR0UbhPkatO%2BVdx2%2Fa%2FrkLtEl5mlyS%2F6Lf3JcrLG5v4%2BQ5sB%2BJ6KqPHA%2Bh1YnNzKvMpysLicqcBiBKbawO0QrXbpL0bOLr%2FrxxsdwibhhxI2UMT%2Bz9mrLOjFh5cXMXerfwrvN%2F0ODqWDIMBwpQg8MthnAxqrSYDygzQGC3gWO6TRKKjunzT9K3iiRdwMW5pgRj5PwfpugCVk%2BOS7Qqa%2FGHrd1ZB5GDsU4%2FA3k3jq5cn6uua6I2maLgMhXLhcoPbFrEZ8KFiwCJRTa%2F5GmfHFB%2BvZ0GidU%2BpckyYog5O8d%2FCMpr04XbZ9lObyBWpZnhBQ5RxfaXy%2BQ6sSVeKZf8AK9LGdFCNu6UMuRvlFYxc0u%2F4mLlpc8MMzn%2BMEGOqUBSr9e8vBqZc4zY6QJdzdA2xEfykawwM1ufgqS1t3ibayS%2B9F%2FBmmRuywakrkd6kkGm2xw1ZRjkJnqWDuCVcYTKNWOaUVo1D4O9SCxPBt7648XqMNEQ7%2FPdHkSPjxEwppmrtdg%2F0gQH7QrIgR02dJwxU3bs6QqOIqsMR%2F2fmLSjFen5BsIfUz%2FMo%2FJuomYlF%2BzEXF01zkJCnv8OwgJG50JQZHM36yt&X-Amz-Signature=9203f15cff4cd2d574f34a53f65d40969983fea52998a73fd6cd24a89e75b751&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7TN7Q4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDFm6bJJZN1%2F3qRyzQFUTCY1pgMbqaCPm6BXTGN%2FTUEEgIgdbcd7izSa4EO7iw489UeaXn%2FHiXARkQXj5dKSqDPt04qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc63esEflGPVQDsjCrcA9kGPW%2BMyqrv5RvQkZSjfZLGTNwB9Q8ccQfAApgueFBRdpv98P%2BI3r7OrBVxVdeBZl76uOn8E76lr2g5gzydMEoaHmG4CqhpWjzhLEZ0aKhOOgZsZtRHxRlAbbKcJMvbhaEpWn%2FNiE7g5zY%2FHdW1msxEqby8uw8e2BigJn0iqHsoEgq%2BxNP66moevo5wSpk6kM1tTUZona5Hbf%2FD%2BJivYfn0cro355wQvb3FzHIfysnIgPkh0ov1wq1Azqb8RtSCni4w5MnofoRQWPO4VFInCskmws5m0ORYSRjyHlhXwNLvrBhewI1Py6aJanr3x8HHBvkNz2rBIjNMvYexwXjx3vXrc9ifDsyuD9vBd2ADYhmtZI%2BIovK8jcY%2FovUQvY3%2FJMWdnKnCehjLX%2Fo4BJ92NlNzbsaZfD825bMvhNMnT99QtIqZ9TP34Z0yvHk1YPHZiRk4jKx376U1hFOGyoV8aZWmp%2BC2Q76JGWtEBL83cdt%2F%2BZjw50Zl06M6F4EVrzFof4BuLSLATLfE4prLemc%2BVWRZkiVMvBDfuU3iISokJlh3%2BOjgOqPmp8Pp%2BvA8R7MhWXIH%2BijQp27XEjXHY3kyi40DarII5J941t0WtidxAyRxo00KUb7fiubE3fyAMKfn%2BMEGOqUBrMI0YRDEGM2Y%2FGQLfOCTv99QSGMsjAROcuAZ1o9J%2FJUjC85ZPqrT%2FZd85HYbk%2BtHHWNHG0t0Tme7owmvvVIOdHgjqGhuih8xpIzPJiY0PV8TNBq2KVxVZmPpsDe0wworXX7mDLamr9z4hHHcXtm8wZfC8pwhVPrMvSiocwccfjh0iLYaZWRkHyYXHATLEExCHrZcCuqSSSQh%2FE%2BWx20KCClngYd1&X-Amz-Signature=4425ef8074cc07572ad47de802854a5783b3b296736c73a45437339bb754d44b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MP4BQEB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFD%2FdGO621IWPMLrQpVyZpUP2lGeCtB4HnOPgGTSXOt5AiEA3qb5SzYPOEDd652Si7nd2l5vZ20mAeuIzZNWdlJ8GpQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz9cKwzCVjk5pkcCSrcA6zGL%2Fh8CGpa1dV5RLfW0RAFy6go%2BiyhxLw5ZM64rQNWkQ%2BP7MMBvoYZ6E4hI7wxHFsssY6X8yC9J%2FXJlMCvEZFrEvod19ToPBsPVjZzc2%2BXUFHOpa7BqRrmOzjc25jcqoG12yhFCKaDy9xnl7OTlmMc9%2B71qVIzzMLhNyMKmln6yAxktt%2B0YryiWifjpbmT4YF0bXIvJVxstCO0yryxQJx7DTlaRWOK5Vt2oJ5u92YAnyF5bPiVcOtcwX2XUiFbDAV0yY31vksMswFKxnemYPmIlxlIOIxFuK84N1NceftvrTWDUB%2BWDbbdAuv1iqjDBa4OioSlE8x36WZ54%2BYkhJqLaPuZ3zByy%2FTDF5hu37IcMb%2B1%2BJge1GazkG8Mn0IE0MMODGV30CQiohld33UsQiZOCbj1BTl2IauZvg1C0A8xcPMf8u4xSgzR%2Fp7E7v8XoXBEeLURhFBICZz0Bss19Q1f9HXBdXvxtz5IkFJjyKHfub7Ovf7QnQCowVdYyxJ6SnyfljBSOlSBOuyA32iaMSX%2BEDBuncQ%2BxTqaYYY93yRwehLo4dxrlKbqTVzOYNJbXhArrl0Yy6jATIHVUCHqX8%2B17%2FxkGhQkmnL3mIDuqDW9RhJiwVhI%2FWK2eEHsMKjn%2BMEGOqUBM%2FGwp9sY3qu%2Bzuvfh2cJEmbrygsB9XI0gTNtgW6VLt4sqMTvp%2BpDkYKJcLhiZPBVBIw%2BrSVyug0TpbxCO8AMXGumtxxnpUXgSGSGeAe1P1TmO9biLuzgkA2V2yoL5zAHuUQizbkmI8yZSFPefc4WS4GS%2FGawlihf33hFpR7QtQQeZsWKuYVkrae3XGGe%2Bcnh2%2FcD%2F1Av14wIzdXpEO3i91UZYK6D&X-Amz-Signature=5da029315dee5982f401664e3a8101bb67d973e259eb72a190b0535843bf561e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6M55TE4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC%2FQEYfr3SKoVFZphss7zL0gHiC0q37MpTojzMKuboLAAIgIyurT3BPBX5z1o1rfmnhmNdbIpmL3jTE5esKuq47fDoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoI0fknCruhe68YhCrcA%2FFnzLB0PN%2BpHTlZDbP%2BzSj75L520hfS5znleMmNVR8tldFwBBEhTI1crt7G9Aj%2FLwya2mXSnrKsUYbb7j6DrB%2FtxnI7mPkMmZZ7k7YWCz45CVrWfpTDg%2Ff7xrBZHuEruZzWBiBuZYuFwrBZN6LCLeVxdzIHshwwqp86l2g25n%2Bqk38onK5G9pttoehvfBOgdWrMjLWLffkq6X4eubk%2F8EhB7D%2F22XwOgI064KytamsVXiy8GVrQUoDyOyc%2FWI8cozKA%2FqD2l7hbR0UbhPkatO%2BVdx2%2Fa%2FrkLtEl5mlyS%2F6Lf3JcrLG5v4%2BQ5sB%2BJ6KqPHA%2Bh1YnNzKvMpysLicqcBiBKbawO0QrXbpL0bOLr%2FrxxsdwibhhxI2UMT%2Bz9mrLOjFh5cXMXerfwrvN%2F0ODqWDIMBwpQg8MthnAxqrSYDygzQGC3gWO6TRKKjunzT9K3iiRdwMW5pgRj5PwfpugCVk%2BOS7Qqa%2FGHrd1ZB5GDsU4%2FA3k3jq5cn6uua6I2maLgMhXLhcoPbFrEZ8KFiwCJRTa%2F5GmfHFB%2BvZ0GidU%2BpckyYog5O8d%2FCMpr04XbZ9lObyBWpZnhBQ5RxfaXy%2BQ6sSVeKZf8AK9LGdFCNu6UMuRvlFYxc0u%2F4mLlpc8MMzn%2BMEGOqUBSr9e8vBqZc4zY6QJdzdA2xEfykawwM1ufgqS1t3ibayS%2B9F%2FBmmRuywakrkd6kkGm2xw1ZRjkJnqWDuCVcYTKNWOaUVo1D4O9SCxPBt7648XqMNEQ7%2FPdHkSPjxEwppmrtdg%2F0gQH7QrIgR02dJwxU3bs6QqOIqsMR%2F2fmLSjFen5BsIfUz%2FMo%2FJuomYlF%2BzEXF01zkJCnv8OwgJG50JQZHM36yt&X-Amz-Signature=bb945cab20f2667c8b9541eecd17b57a7808f54326ffb8953166c5e4c09041f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
