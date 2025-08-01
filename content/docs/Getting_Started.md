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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=8e9cf59e2b24ee86f451de0eb00c9a18b702da5a0a72858e53aaf44c587c7943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=2740137f98176f743e725a46b69b165bab97507c5219f657b6d04be2c6a473c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=4edb251f1805112dfab28e7e859bd4350ec52e229f9927cec349813de88e49d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2PMTYH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiaxiQR30K9P5j9NWS65oq05uamu0AZZrUjZ8DKU%2Ba8AiA%2FphF1ZUQYxZjtlPB3JSjBrtME9f0exdFclh4hi%2BOHwiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtTnnuFKI%2BbLHsceKtwDuYG4wNFc5eE7LbYeWcC7wcszF33eB0ZL2TYlCxP5BDd06XwXPf8e5I4mJaPhnDr67D2oZYFOYjCSqBhlPjfV6WzTqNf1NaSxWqlFLK5DKNEpMeWuZIR1jgeo9M7vjPlekYq65wTA3T4dirGMsCRSCF%2B6eKU3JlSZ1%2FFc3cZ%2FoTUcETefFLWcEAh4u0C2oc4a9dM21VgdBhdEgqXfC5%2FQq7P%2BMJu%2BaCExr0Y3BL67RIUKw677GD9rVeM67KqwIH8SkNO1%2FaEMcRKIpKY%2Bm8JnIjLQFNLVFnOSlJnbnu8A7WzICtxnkIpnUEi%2FFK%2BHmL8dBRDkQeFx2zn1oaMa8g9UYXblypTDeC3slwoW9p7lRlvlFR%2FUSETehOd%2BDarcWgZIQ9ZOtvtTEv88HOr3EiN0vGxB1UiEr39edoIXX8%2BL9vbO6iXoTCCuwF8qnA6Y5fD0ASuXaZD%2B3wMsxhKZIwyqBoj7ppu8cF6mdjZUlrAedS5wHphkKebrg0XEWWpaxJ23z4ccjWHoSZfRmPhheimZmEPq2ctuSVyyzTgoi2WHUVcSltNGLJobpvdXpmzDYMJIEkT9x0fo8MBMkG%2B9Y2u0sfRO3AEQje90FdWhaPlaR%2BxzsgMyGD8X9D0ooTIwuuuxxAY6pgGPYexrlZccL595LBIbI2SnA5pVwRb86uTG7KK0aD%2B%2Fy0PfVcsIHVgSlNPxIF%2BMayCCPEW7dSAPDKcQeOe%2BAe8ZMO2yLU1%2FtffmAKBeYJy8UlAx6N1Rf%2Blj9fRNHCcWAIuhltZDOC2etLrCzd%2FvpSN7zczaIZ30%2FZAgjjwVMKxUkgqwmjB1EobGqfAM3xEJZztVFXGEI8kjMp0a6BRJm%2FnVRccFjbAB&X-Amz-Signature=a630cdeeae5fc98cc9f1c39675dc8601d91ba9f946293891657171b5b148c5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCNUA7L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzfdfB8R%2BTeFFl11KiHQJddjtW0aF7QY6SgixT4FGbeQIhAOm5XzpFFRDWMUoaudKOW6Syj2%2BpekN0qii1jqZ0dVqcKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSch0fyrLxiDrlk64q3ANOuQNhMZrwCMQr4LmRPxuNIKqW4EVDnAcr%2F6%2BxwoV2yygjgDlYWz9qLAa0mfz%2FIemKDDtxuGNsFnBAYBwsIfpSeeNWR%2FaLkpqN7BeQASvgLJLnjVKqczLUhVPLt7Oh6h2NDG%2BgVFW18rBMaRLlGT5p6WZr8P6JOjUgkctl7w6b9IkKS3WPV6n2tYqcJc1hNQtxZMFRbsgPyPocZtTK7cp%2B0YDrzj0iAfN72%2BOkbeePQsaCzXWgtS8FIBblqTsKC3gHK1dGUkWnRVGmDRr%2FmUzN8DgCTv%2Bkbf5cn2Wnmvdva48YXYp8oRsfXZothaghwKoimmvr2mdjQRcR9Ia2AEI31FBmxYMJwDuujpi0p0j4PW1xAKugsre03qbrJE9mO0C8qms%2Ba9bKKXac2whQsc2zK5r6H9KkHrakAWpC%2F4rHjxoLxTYqOOy3%2B5B42MJ6rDaW2A%2BHaE67iOvroJ4k39A6zj%2BNGNtaPflN%2FK%2BREbbx5HPN3ZeP6hTJZpvtkxFs15yJqZPeAHPKeDjYfe1951KuvaM%2B%2Fzmb9hC0Li7QX%2BxLz2w%2FDEG32jzeIBopebFaz0YEGL45Emzs0GNwHkUtKXcaOil1KRpGg3I1Q%2Bbz0N6UDqzxnzNqAYAsN9cqzjCd7LHEBjqkAcGR5QKDFxSRSMPj5Tb8naP9gZHO5%2FAx0zYcbYUWNhqTSOQtIYHcff%2FruWuujsU1wkprDSM6rTPaeWnJmuhlWtkdefvP46WujS5E49jXVKN76j3XmvZE%2BqFHp9Q4X%2F0ndZUWPw1QGN8GbqkKgfdpBGOYScoTUCar48OmUK%2BXGoVv0g%2FfNj5DgaSErcLrtmzlvsiigJ94UA8F2avJa6BYB8Pwuigv&X-Amz-Signature=41ccee25bb506fd6fb18dda85fe50e542fd00ffeb09c355f130b8805cbb9d437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=d50b9ec257523221900273803bb64d2df5b2bb642cd384951a3fda853efb5f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
