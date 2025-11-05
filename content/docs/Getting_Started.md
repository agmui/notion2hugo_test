---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7BYRKZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiIEfaqkAjQKeqRk8%2FAV0KdcivafuE2CsVyQ6B%2Bl8CpAiAMsyya%2FXiKcMOH9BRqLQPV2uxRosinsRlDgU7J%2FX6D9yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUMd2DthZ5%2F2JXU%2BhKtwDzW1%2FMrzx52FtHsTRNLgQyvY2uMpsNbomFW1ZMRQai7uFvsHrw0%2FT7kTktBh0twcckF2bsGmd6JXOUdcG0JNgs4HN6Yu0p07kAUti2vFdOeWSIZaMW7qNf0rbgKqz0%2BCT9YfFxkcdnGcJYag5exz6Qab2I2zrg4QOVgCALev64tWy7%2Bu6sNRUhL8P0DL3c9NvWKo2dLDXM%2B8CYCDcw%2BGv2QBSKjqIM8WFvWNLKYHLYIy6xtIOdOZxLMvFTibBDVmVnCHe0bTQIbDTZvLDTTkyIWqwHybuOss95W4WeD%2BjQym2FvISlpXqvpbvMmFIwOghv2QGqqw3AuAoba6kWpKmz%2Fsqw0RNmDSOFiIvE9S8XzRFH3gYhzHVIHmEOGUD70ojtp%2BnO%2FFigjodFD7mfPaffuyJLHwHm7M%2FwxeNtJZgzST4P0ZI6Deqem3CW85Z3vCExn%2F7t75S%2BIKCuwOAMdwNvJJLI%2BxJYUPtbrPs0NVqtAxlh6n7HBAiFSuaYULD6QcWi3mHknzY9Fw6gNi1sdfkgiqqU4uwxqUSidGGM4rosgXTJdiXtRo8gP2ExqefZP7Lr16kxPRneRAKaPBNWT%2B17erIpZ%2BcNBRFF7dFr19g6fUOGZ%2BuZvVzwbjlJQ8w692pyAY6pgG4ruZTA2DWz%2BqRN9jgjpr8S%2BbDuU6%2FdUWE4gwN1nGVUVQLKJiCVdpnylEjgXjkfnPwTi9MfjZOkk1hn%2BHE0fLCraqHlxx8AmTYXzXMj8GUI570C2BQAzPNdLAqhgNdC09qoPk5oJnNTag93ExQPkGJpVsalO2W8GqNSV1Uo9jk1bpWpLyOlWkpMlE6U2HGWVmpLMez8A6x6PG2NRf7qpsyiA%2Fo%2FuE6&X-Amz-Signature=c2e705c17a9fa94afd11d7250913425d6a01c8c28f90d4a69bed57e72ae9fe5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7BYRKZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiIEfaqkAjQKeqRk8%2FAV0KdcivafuE2CsVyQ6B%2Bl8CpAiAMsyya%2FXiKcMOH9BRqLQPV2uxRosinsRlDgU7J%2FX6D9yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUMd2DthZ5%2F2JXU%2BhKtwDzW1%2FMrzx52FtHsTRNLgQyvY2uMpsNbomFW1ZMRQai7uFvsHrw0%2FT7kTktBh0twcckF2bsGmd6JXOUdcG0JNgs4HN6Yu0p07kAUti2vFdOeWSIZaMW7qNf0rbgKqz0%2BCT9YfFxkcdnGcJYag5exz6Qab2I2zrg4QOVgCALev64tWy7%2Bu6sNRUhL8P0DL3c9NvWKo2dLDXM%2B8CYCDcw%2BGv2QBSKjqIM8WFvWNLKYHLYIy6xtIOdOZxLMvFTibBDVmVnCHe0bTQIbDTZvLDTTkyIWqwHybuOss95W4WeD%2BjQym2FvISlpXqvpbvMmFIwOghv2QGqqw3AuAoba6kWpKmz%2Fsqw0RNmDSOFiIvE9S8XzRFH3gYhzHVIHmEOGUD70ojtp%2BnO%2FFigjodFD7mfPaffuyJLHwHm7M%2FwxeNtJZgzST4P0ZI6Deqem3CW85Z3vCExn%2F7t75S%2BIKCuwOAMdwNvJJLI%2BxJYUPtbrPs0NVqtAxlh6n7HBAiFSuaYULD6QcWi3mHknzY9Fw6gNi1sdfkgiqqU4uwxqUSidGGM4rosgXTJdiXtRo8gP2ExqefZP7Lr16kxPRneRAKaPBNWT%2B17erIpZ%2BcNBRFF7dFr19g6fUOGZ%2BuZvVzwbjlJQ8w692pyAY6pgG4ruZTA2DWz%2BqRN9jgjpr8S%2BbDuU6%2FdUWE4gwN1nGVUVQLKJiCVdpnylEjgXjkfnPwTi9MfjZOkk1hn%2BHE0fLCraqHlxx8AmTYXzXMj8GUI570C2BQAzPNdLAqhgNdC09qoPk5oJnNTag93ExQPkGJpVsalO2W8GqNSV1Uo9jk1bpWpLyOlWkpMlE6U2HGWVmpLMez8A6x6PG2NRf7qpsyiA%2Fo%2FuE6&X-Amz-Signature=b62305e1977ed7f17e286e8cb11205e922f6e7dd470980c11d6c758a6fb20909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7BYRKZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiIEfaqkAjQKeqRk8%2FAV0KdcivafuE2CsVyQ6B%2Bl8CpAiAMsyya%2FXiKcMOH9BRqLQPV2uxRosinsRlDgU7J%2FX6D9yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUMd2DthZ5%2F2JXU%2BhKtwDzW1%2FMrzx52FtHsTRNLgQyvY2uMpsNbomFW1ZMRQai7uFvsHrw0%2FT7kTktBh0twcckF2bsGmd6JXOUdcG0JNgs4HN6Yu0p07kAUti2vFdOeWSIZaMW7qNf0rbgKqz0%2BCT9YfFxkcdnGcJYag5exz6Qab2I2zrg4QOVgCALev64tWy7%2Bu6sNRUhL8P0DL3c9NvWKo2dLDXM%2B8CYCDcw%2BGv2QBSKjqIM8WFvWNLKYHLYIy6xtIOdOZxLMvFTibBDVmVnCHe0bTQIbDTZvLDTTkyIWqwHybuOss95W4WeD%2BjQym2FvISlpXqvpbvMmFIwOghv2QGqqw3AuAoba6kWpKmz%2Fsqw0RNmDSOFiIvE9S8XzRFH3gYhzHVIHmEOGUD70ojtp%2BnO%2FFigjodFD7mfPaffuyJLHwHm7M%2FwxeNtJZgzST4P0ZI6Deqem3CW85Z3vCExn%2F7t75S%2BIKCuwOAMdwNvJJLI%2BxJYUPtbrPs0NVqtAxlh6n7HBAiFSuaYULD6QcWi3mHknzY9Fw6gNi1sdfkgiqqU4uwxqUSidGGM4rosgXTJdiXtRo8gP2ExqefZP7Lr16kxPRneRAKaPBNWT%2B17erIpZ%2BcNBRFF7dFr19g6fUOGZ%2BuZvVzwbjlJQ8w692pyAY6pgG4ruZTA2DWz%2BqRN9jgjpr8S%2BbDuU6%2FdUWE4gwN1nGVUVQLKJiCVdpnylEjgXjkfnPwTi9MfjZOkk1hn%2BHE0fLCraqHlxx8AmTYXzXMj8GUI570C2BQAzPNdLAqhgNdC09qoPk5oJnNTag93ExQPkGJpVsalO2W8GqNSV1Uo9jk1bpWpLyOlWkpMlE6U2HGWVmpLMez8A6x6PG2NRf7qpsyiA%2Fo%2FuE6&X-Amz-Signature=c457b2a6c0d0b55a9b39fac3cb42223f4f5203d968d01943dab536fcc3b61838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFG3XK6Z%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxzq6MB7AiacxVVfqgKBQs3TjweYDinWecoX%2Bocg%2BALAiEAnyvI6QbJps8X%2BtTXon7ovN68%2BBt%2FGC%2FVaAD4gMln2rIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGrXqPQGXHdqmxVxvSrcA3XJLOnuDt0Qno7vNkHapcy0ayLXRLrRZzDye3z5p9c65VML3ggcXGw%2B%2FBTMzUW7mfgm3EzEzKEhupLTO0mtya3wgbJ%2FjhDc4HeLpapQxmPWRz7Nat%2ByYDLJReOXjgzDC9f%2Bq752jNGsucq9tiPyx8yuRSP1audJJMQG2JcRVJ9zyNAfN7Eg9S5EpZlRqEdSwAw%2Ft7Kt3FQMwG0opkYHIN%2FNIsfgD%2FhmCAqFmlQ1sjpLMU4FWJsgNftPjAo78txlb1wNTpe%2BDuNj6oMv9D%2FsqqqVQ46PbOCdJRFP7NLwcLYNIZBDlR5FKscJbnaY8eBSYNq%2Bcc1jmGTfipIdx3pZPbjbtOQcRcMS%2FnRO4tDy0l3YiANGxXTkOoDhVlTJMgPiC%2BcL9XWRCNhdU1s3t3bSUv%2BVspS7bUgVxs1qXgVW4WeJZFnSlx2LDlnaKw6IE75elYaJ1RsMrkJYow0YgwgTspmE6cudueZUTrElQGlaRFClRt6aI6y6fMc9iWGBZ7%2BnytXeCZbjuaBnt%2Fuw0AuJhhWCroVdbXcegK4Glul7unM%2Bj0JqvQqFL0ywcqnXumWQoUqbfYfdo4oQZzwYnXDQLymGfCy3E7CgGI0QfRh5tsUHsUtie1cV7RV2PciFMLvcqcgGOqUB6lK1gT6rUVFYBhl%2BRL1F9iIN2mnnla9KlZWSS2jhAnlgu3ZkuXB5goV%2BxOTwPw21lrjgK4s9%2FvIfqd1WUbCi%2Fvij5XWQMlqxEbozGu1b2gJrYPEFU7WHLIq9XXIUDObQPA9y%2BNP71aQASVKNnOWQXDDPUSM1gHxNXfVwfsY%2Bg01TgpkKym4AG0PH6TeR2IFl7HfzoKkmtj%2Bp%2BO%2B%2F19dtD6E6uEpa&X-Amz-Signature=14e54f4ce423c40734c212bcbdbe10e9a7641c3c43fcb2bbebac8ddff77945c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJFJTQO%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMJ4PrX7uf42%2FKxJsxq3vu12MQAAhCYz8mtnJcXblD1wIhAOhS2VtJKQ0qeQ%2Bh8EUf01mlHIP%2FIv6P9VxDjBxVYrXnKv8DCH4QABoMNjM3NDIzMTgzODA1IgyLmJDXOiiahjj%2Burgq3AMh%2F0zqJ62jz5YQqRxvNHlCsWRBbL5o42pN7SkjpabJAgKC5S9H%2Bzi8jKt9tJevVMHuCj3gmtTrGZPWa7i567tpQuf7DMVNr%2BqVDASjt5l2EjA1m6wSX5w3XUXtbZx4%2Bbr7cj8FDD37usAT3RBQwp8dFlp6Nm3qHpPzNA7oexIeVU32e3fe%2F3kzRXg7XAJbcwteSnJ1%2Fe%2B0xBJMZa8tVwVGjFIgt5J3sJ77c6fbZa60z2Z%2FrjXf6FVuprwQBW8ZWpbB8Hl8se2kel%2F6Z2k3uMCnAW1non2GfFJh%2BRVr9A8fD3yKri7qHSYRhm5b9Re777BMxKLdXqisDhXjQNcr9CFlZ2o6p%2BTZ8jzOUI8uiZO%2FSAOUQjPngmHLiVPGiSV%2B8KdCf5f%2FWQ3KutEbUQMFI%2B54zKOCMDYKKI6uKDr27DII85CG8YaRU5et%2F5iVhXyiotQBjPNb%2BtAO2Wf6F%2FAjxBkN1XZhyCTCvGmB%2F4AbKXmnfi1MNJhj863SufSorlvrRoe1Sy5E%2B24%2FOsvZKsmhDtiQJ%2BVzHEZWZJtckLtK1CtWVYNJIJJEeYSdaUx4ZYxAl8PUf%2Fd2oHoMhId2i4F1RDECKnoyEcAnP2jhREo3q3uPv0KamgESOTjateBTYTC83anIBjqkAZqpJbZkySapeex0OtU6xWsqPQd9u%2FmcuxwBwuAWzV9Sp2AHa5VqR44ZBd4yvmHNJXQNQNXyfPWLOZfWPDyJhBzFFKWGIWy3s%2Fi3%2BZoTmQ9gckOPAKbiXu9mrD15AK437n1oV1A%2BcvsUiHb%2BPgOaCMUXwc0CCBP640l6aYz0NdppL2A6ayo8ROHheSd46tMuQzciWa%2FD7OG8ZW6MKwxPg56Hp064&X-Amz-Signature=97fe460555c9bce812e6dca796d718428292f0af94780ba8ab9fe407e4f7326a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7BYRKZ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiIEfaqkAjQKeqRk8%2FAV0KdcivafuE2CsVyQ6B%2Bl8CpAiAMsyya%2FXiKcMOH9BRqLQPV2uxRosinsRlDgU7J%2FX6D9yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUMd2DthZ5%2F2JXU%2BhKtwDzW1%2FMrzx52FtHsTRNLgQyvY2uMpsNbomFW1ZMRQai7uFvsHrw0%2FT7kTktBh0twcckF2bsGmd6JXOUdcG0JNgs4HN6Yu0p07kAUti2vFdOeWSIZaMW7qNf0rbgKqz0%2BCT9YfFxkcdnGcJYag5exz6Qab2I2zrg4QOVgCALev64tWy7%2Bu6sNRUhL8P0DL3c9NvWKo2dLDXM%2B8CYCDcw%2BGv2QBSKjqIM8WFvWNLKYHLYIy6xtIOdOZxLMvFTibBDVmVnCHe0bTQIbDTZvLDTTkyIWqwHybuOss95W4WeD%2BjQym2FvISlpXqvpbvMmFIwOghv2QGqqw3AuAoba6kWpKmz%2Fsqw0RNmDSOFiIvE9S8XzRFH3gYhzHVIHmEOGUD70ojtp%2BnO%2FFigjodFD7mfPaffuyJLHwHm7M%2FwxeNtJZgzST4P0ZI6Deqem3CW85Z3vCExn%2F7t75S%2BIKCuwOAMdwNvJJLI%2BxJYUPtbrPs0NVqtAxlh6n7HBAiFSuaYULD6QcWi3mHknzY9Fw6gNi1sdfkgiqqU4uwxqUSidGGM4rosgXTJdiXtRo8gP2ExqefZP7Lr16kxPRneRAKaPBNWT%2B17erIpZ%2BcNBRFF7dFr19g6fUOGZ%2BuZvVzwbjlJQ8w692pyAY6pgG4ruZTA2DWz%2BqRN9jgjpr8S%2BbDuU6%2FdUWE4gwN1nGVUVQLKJiCVdpnylEjgXjkfnPwTi9MfjZOkk1hn%2BHE0fLCraqHlxx8AmTYXzXMj8GUI570C2BQAzPNdLAqhgNdC09qoPk5oJnNTag93ExQPkGJpVsalO2W8GqNSV1Uo9jk1bpWpLyOlWkpMlE6U2HGWVmpLMez8A6x6PG2NRf7qpsyiA%2Fo%2FuE6&X-Amz-Signature=d37afc0b3b14ba68813ba137c5518b4622516e2087f4a5af75bf4b0d970cb1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
