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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P35FZO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCr7ApexGwTBASHKO%2Bs1hz3U%2BHgkkjdRj5UjB%2FAO7egIhAO7Ul5wJz%2B%2BGJPJ7CsNdrxZ586ennVUxqU23eSOPJTO0KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgXwCGAy%2BH92jPjk8q3AOBCOL%2FaSMCFnbh24KmKx3GhUjl41m2O4ANvtSRTbEYpLU1p75AGsQXI3GLhjeFFPSEDMqmQanfvpU4Gi%2FfmI1WmvUyP2J82O8LLqyGizTlIgk9V4bKjDP%2B0z7sZnmRTPnk50nNN3m7f9Z7wmzxSDIBvlU5078nhVXrSKbXs2mpE%2BKg99NpQA5nb7%2FxMcNqKISnT%2FDQ%2BrD%2FbCcDmE3%2BbGi0redFg8BXgV3mTGleXxw6%2B47%2FklVDCzTQPKq%2BzXyQACqghCDTiZ5lYsIUk2nXf5gz0NqGKc2w2fSibTSgw%2FlqcVuuBIh%2FkVb59OfZrmpU5BBVxBq%2Bt3%2Bm4l6GM%2BzrqJgGOE%2FiXZrz1m%2FAlgAcZCt1ZCSZdDUwvl9kKJfzI33KGoWV55JmHZVou7x5f5LJJWozj56u%2B4GzVzQzfBaV%2FqXCwqa0SIg0HL4gOmPLsKqPSK1xZrrpmFqMNmBypC4cIQBaA1GlILY2ogNVtCJmNRVNmVtNkkMK8K5iTCuBEW0%2BrFWGQzirE9R8poPQxm6FbsDexxxpHkA%2F2Fjs540KsTFLfnk3zEePiYifMgiTeamhyd65CP6d0wGMYuqS%2FC7xBXZqMzNpDMylL1b4qPs7Ov%2FD1C60CTC9jsVan%2F20HDC%2FxtDCBjqkATUL87a3wUGJ5Z6AToBTnIbWafBIEkPRx5sPiWk%2Bm8gvviEpVI%2B501eh1bgQB01DZ1UCm9ntYp%2BafZybt1098uBGrJaQ4Kg4izavZWr7Pudsro2%2B%2BeUaE13anytu%2BnCUbB5AHI96JYPcgUQ70H7ZrdAMxy4yhgs5zDbbPId9vwry%2Bao2YHdatQv9AOimWMe6qYGTUYQdEWplvYwK08lbhi%2F%2FLf89&X-Amz-Signature=a7a83c39041b2ba5c233f0a6c746c46bd3f40087afc8dc0d932a7e61edb348fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P35FZO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCr7ApexGwTBASHKO%2Bs1hz3U%2BHgkkjdRj5UjB%2FAO7egIhAO7Ul5wJz%2B%2BGJPJ7CsNdrxZ586ennVUxqU23eSOPJTO0KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgXwCGAy%2BH92jPjk8q3AOBCOL%2FaSMCFnbh24KmKx3GhUjl41m2O4ANvtSRTbEYpLU1p75AGsQXI3GLhjeFFPSEDMqmQanfvpU4Gi%2FfmI1WmvUyP2J82O8LLqyGizTlIgk9V4bKjDP%2B0z7sZnmRTPnk50nNN3m7f9Z7wmzxSDIBvlU5078nhVXrSKbXs2mpE%2BKg99NpQA5nb7%2FxMcNqKISnT%2FDQ%2BrD%2FbCcDmE3%2BbGi0redFg8BXgV3mTGleXxw6%2B47%2FklVDCzTQPKq%2BzXyQACqghCDTiZ5lYsIUk2nXf5gz0NqGKc2w2fSibTSgw%2FlqcVuuBIh%2FkVb59OfZrmpU5BBVxBq%2Bt3%2Bm4l6GM%2BzrqJgGOE%2FiXZrz1m%2FAlgAcZCt1ZCSZdDUwvl9kKJfzI33KGoWV55JmHZVou7x5f5LJJWozj56u%2B4GzVzQzfBaV%2FqXCwqa0SIg0HL4gOmPLsKqPSK1xZrrpmFqMNmBypC4cIQBaA1GlILY2ogNVtCJmNRVNmVtNkkMK8K5iTCuBEW0%2BrFWGQzirE9R8poPQxm6FbsDexxxpHkA%2F2Fjs540KsTFLfnk3zEePiYifMgiTeamhyd65CP6d0wGMYuqS%2FC7xBXZqMzNpDMylL1b4qPs7Ov%2FD1C60CTC9jsVan%2F20HDC%2FxtDCBjqkATUL87a3wUGJ5Z6AToBTnIbWafBIEkPRx5sPiWk%2Bm8gvviEpVI%2B501eh1bgQB01DZ1UCm9ntYp%2BafZybt1098uBGrJaQ4Kg4izavZWr7Pudsro2%2B%2BeUaE13anytu%2BnCUbB5AHI96JYPcgUQ70H7ZrdAMxy4yhgs5zDbbPId9vwry%2Bao2YHdatQv9AOimWMe6qYGTUYQdEWplvYwK08lbhi%2F%2FLf89&X-Amz-Signature=fbe98c35f6d657d24dd8dfbaa023f2bfc9d70b20e49a2e50849424ee0606fbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P35FZO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCr7ApexGwTBASHKO%2Bs1hz3U%2BHgkkjdRj5UjB%2FAO7egIhAO7Ul5wJz%2B%2BGJPJ7CsNdrxZ586ennVUxqU23eSOPJTO0KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgXwCGAy%2BH92jPjk8q3AOBCOL%2FaSMCFnbh24KmKx3GhUjl41m2O4ANvtSRTbEYpLU1p75AGsQXI3GLhjeFFPSEDMqmQanfvpU4Gi%2FfmI1WmvUyP2J82O8LLqyGizTlIgk9V4bKjDP%2B0z7sZnmRTPnk50nNN3m7f9Z7wmzxSDIBvlU5078nhVXrSKbXs2mpE%2BKg99NpQA5nb7%2FxMcNqKISnT%2FDQ%2BrD%2FbCcDmE3%2BbGi0redFg8BXgV3mTGleXxw6%2B47%2FklVDCzTQPKq%2BzXyQACqghCDTiZ5lYsIUk2nXf5gz0NqGKc2w2fSibTSgw%2FlqcVuuBIh%2FkVb59OfZrmpU5BBVxBq%2Bt3%2Bm4l6GM%2BzrqJgGOE%2FiXZrz1m%2FAlgAcZCt1ZCSZdDUwvl9kKJfzI33KGoWV55JmHZVou7x5f5LJJWozj56u%2B4GzVzQzfBaV%2FqXCwqa0SIg0HL4gOmPLsKqPSK1xZrrpmFqMNmBypC4cIQBaA1GlILY2ogNVtCJmNRVNmVtNkkMK8K5iTCuBEW0%2BrFWGQzirE9R8poPQxm6FbsDexxxpHkA%2F2Fjs540KsTFLfnk3zEePiYifMgiTeamhyd65CP6d0wGMYuqS%2FC7xBXZqMzNpDMylL1b4qPs7Ov%2FD1C60CTC9jsVan%2F20HDC%2FxtDCBjqkATUL87a3wUGJ5Z6AToBTnIbWafBIEkPRx5sPiWk%2Bm8gvviEpVI%2B501eh1bgQB01DZ1UCm9ntYp%2BafZybt1098uBGrJaQ4Kg4izavZWr7Pudsro2%2B%2BeUaE13anytu%2BnCUbB5AHI96JYPcgUQ70H7ZrdAMxy4yhgs5zDbbPId9vwry%2Bao2YHdatQv9AOimWMe6qYGTUYQdEWplvYwK08lbhi%2F%2FLf89&X-Amz-Signature=6b5d11cdfa76ec80d03be04645ce107d421600ba191f9244b66bce41cb47aff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Z462G6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFp%2BCBSCKcPAdKN0bufYLy3YFWS0mjyTRiPAXoqG24pAiA3z8YV2JzoYds6pulgffsokHYXQEgHVFOIZ%2Bhv3IMMgiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDVpAPRUV7U%2FyhhWaKtwDNm%2F1BvCukVrSBKdLc9PGPwp5Y3cjzv19rwn%2FewQUapYmCP11pEzOuthmvfrEDbXV2%2BrvOs31GbdtWmISuZ0CarU9%2FZtBNAzoWqeE2crl7H8ZGpEvQvsXzWzs525WluFR2XFciQG3wUzobNKQezG4v49SIc0F3ij2KLmktIfI4VohJtgqw6ESx%2BvuKZC8hA41WINTKzGta1eHMi5OgwrQFQ%2BWmomvJ%2Bvqz6lEYkV3qDTPk9Ywe5R3eFDvJz37ubP4srB28cRxQEY%2BaEDhZfi73Y4e8VU1aGYSOSm2l8ETSNcS948mieF5hNCucrYAfp5olkyiSRVO3%2FNVtSbnhHPGN5%2F867LRqMT7rjCoJOnAPYmzBhxLtH%2B0PVg6L6qivlIKAGDrVJQ0Sg51ydZRIoRO153P1wkPQHy%2Bz0Z27xao33HABoxyuOEPvkdK2y%2F83Dp4yKXIO7qY4qQjtcDdsZECQp2gxWVXQTJyNqgIcP3OkqE71s%2BbnD0ej%2FaGACa3y5ixMetb9LG2aZ3hQCX%2FlAZotL0fOd3fkNvaVeXQn%2Fpl5U7ZzXLunkgeeM%2BpGU5RqmIzCHStx5B%2FcBuTYImqKNZMKK9FCGHxMb0b%2FXftJZO%2FyFNN2nXguGZmabfQ3Hcw6LPQwgY6pgF8w14unLJfw%2BrXII4xOTq1AvYQ%2BFHfBpRr9x2FfA%2FyV4KgPqNPbwuu8B%2BY%2BMVtpwO2DhFsfL3athgRHSCSnD%2F5GzN0dVLVkyKwx1Ig%2BKWJtOhXqFqjgqEn%2BNIrUT9gL9pjO7PQ5VWoUppSHBdGjBtJaYQmr%2B%2BO0uGeidiLvymewxVN6pmf6OgKnqbI3ORO%2BkNVeMGXoLWhSqcDBFZUvdC5VWxquFK5&X-Amz-Signature=df3ed9e724408082f3420a5f7e94df2e88f79903599e2050bf2f31fe9ce2b7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7JETVN2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqWhiZXOTJZPjR6DVxmihJPwwQEbwhwy6cKnIZtCRvDAiB8Bjs0CeBTv8O66%2FViowITchVOW%2FfqemLAfLJbbv8IQiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4zZ0SOJt4SXKUJTEKtwDOprXUKihvjlQ9Y3CRXZ%2FdyVMjIOt9aa%2BovGj2zMoBXLDTwxgf%2FWkxwCAwETb1KYMhAOvUfEkr%2FXZnU0EZXPjL1LwWDhjri5coRWYYr140fei5arclbFStyAbuhPW76z1BACdJoZ1qHZn%2F8kJ43p5OZ%2FaJi7ksq7lOQ0QPXXcTQiCflpVSR%2BKrBYsI2ooSb%2Fehogs1S5ntrFpraelrHMT0AACRrijB9QcTRtD02lfO3IPu2LY1SmIEEw%2FtJBt84XE6heLf7aLgKHO6pDTnEui%2B2aPT8BfPY22DlACUpICnXuVKXf9LCSlkyTkil6C2KvjTiLTxk8p24iFzMtOAU9KOfw7DiFcYvXR6KnOVxU%2BhUl%2B9WIJO4mgFN%2FTZYwg1QtSkOh1LOUPmrMa1ANtBBRKfjKMZ%2FiDfCHA5Yu30AOGrLSIkj8QqPxHFJBjgm13ruv0rEB%2BElbBbYQxrCSdNojAaDgtSqc1tI75xI4mZvvE061Wn82y3KiG3u2X9QTHY7A8tNPkvwHQ8D77UdxmDc5Z5TTiF68WwnLTUk3GsO3ffWKOp05dBZJB%2BNhQTi2%2Bt%2B1kV%2BR5g7g8B3z9VLlc3%2B%2FYIQOkuyhNHr%2Bj6NJKOlqMWmIcL%2FnAv0sBbT91C9Aw2rPQwgY6pgHZ5r5ynwFYcaDgE8ewgxn9b8V8Kdov7qCy6e6lczcyrn0a3isXF8TzKFQAzG7eAU8o7P4kDlQzYhNOqu5pFjK03uhv8HiVs%2BNlYPiCAUnQWfT6w4Aq5bOIMdEIZIU6I4cDuGwZxoN8I79dHQhvA3aTfhWbBA3BJ0E6WraaDT4jF%2Bc1eexp6ywyYhUwWONIMnYZ%2BTOGIkiP3BYMinDdxchYXelIqpY%2F&X-Amz-Signature=7fab35c3e6c659c2baf445e818d168541d099102f17e05f8d4ff52b96738d3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P35FZO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCr7ApexGwTBASHKO%2Bs1hz3U%2BHgkkjdRj5UjB%2FAO7egIhAO7Ul5wJz%2B%2BGJPJ7CsNdrxZ586ennVUxqU23eSOPJTO0KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgXwCGAy%2BH92jPjk8q3AOBCOL%2FaSMCFnbh24KmKx3GhUjl41m2O4ANvtSRTbEYpLU1p75AGsQXI3GLhjeFFPSEDMqmQanfvpU4Gi%2FfmI1WmvUyP2J82O8LLqyGizTlIgk9V4bKjDP%2B0z7sZnmRTPnk50nNN3m7f9Z7wmzxSDIBvlU5078nhVXrSKbXs2mpE%2BKg99NpQA5nb7%2FxMcNqKISnT%2FDQ%2BrD%2FbCcDmE3%2BbGi0redFg8BXgV3mTGleXxw6%2B47%2FklVDCzTQPKq%2BzXyQACqghCDTiZ5lYsIUk2nXf5gz0NqGKc2w2fSibTSgw%2FlqcVuuBIh%2FkVb59OfZrmpU5BBVxBq%2Bt3%2Bm4l6GM%2BzrqJgGOE%2FiXZrz1m%2FAlgAcZCt1ZCSZdDUwvl9kKJfzI33KGoWV55JmHZVou7x5f5LJJWozj56u%2B4GzVzQzfBaV%2FqXCwqa0SIg0HL4gOmPLsKqPSK1xZrrpmFqMNmBypC4cIQBaA1GlILY2ogNVtCJmNRVNmVtNkkMK8K5iTCuBEW0%2BrFWGQzirE9R8poPQxm6FbsDexxxpHkA%2F2Fjs540KsTFLfnk3zEePiYifMgiTeamhyd65CP6d0wGMYuqS%2FC7xBXZqMzNpDMylL1b4qPs7Ov%2FD1C60CTC9jsVan%2F20HDC%2FxtDCBjqkATUL87a3wUGJ5Z6AToBTnIbWafBIEkPRx5sPiWk%2Bm8gvviEpVI%2B501eh1bgQB01DZ1UCm9ntYp%2BafZybt1098uBGrJaQ4Kg4izavZWr7Pudsro2%2B%2BeUaE13anytu%2BnCUbB5AHI96JYPcgUQ70H7ZrdAMxy4yhgs5zDbbPId9vwry%2Bao2YHdatQv9AOimWMe6qYGTUYQdEWplvYwK08lbhi%2F%2FLf89&X-Amz-Signature=9b6705f4a8a31b49547878a5383b1750dbc7d5657ead671025a9709ca89238c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
