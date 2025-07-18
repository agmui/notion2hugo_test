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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVUE22H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC09adN30VzlNVH5QrxpQ%2FSlN8qTs22va3DzJpbZZQH2wIgUPX27jZlMAfI%2FobyHb6E4gmvFHEUdxSsFX7qzE%2B2gEcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIYgtWtxhEHHeTASrcA5n%2Bb3WsTk%2Fen8qILHxpGMiCaHoITjACdPk45oViWmQQYb07Ch3qGMj18fvcSgw5AXdwd4%2F7sQMk1xot1ViMPX1lr7qjx38Z8MTRD3JhpNkhhFMeDF7gXHxdrxuZT2jnRtjtKwOl7hAIfVijzTlATMhcC9FgOdUCqbjuaCYXzGKJzUa4%2Ba8JXvhthc3RQ54XxHY35e0E9lbxzH3pCsxNq3AVRIa%2FKEpNntLdUQBVcfZtyQANe4ZlXdrqRkA9TO3ZpS%2BtupkXGO0rkx9NX2SZXL1kW%2BklKywbPaAAqun2pfcPtzsW%2FZjOEafEWvUzNXj28Hq%2B3W5wDe97qK3N%2FJ1%2BAG5yfbnY%2BXNv8HlyUWEg5N7BU9tVuCJZqIz1FNneUeZKXctY38%2FJhM2nhEBSfpVoIHkZsWUzGYGgbdWJha5d79qh%2B2ss2Je%2B%2BU2e9oJ2VKG%2BAPidXmr%2Bw5SnBOODgNbRYCIEvFo4DXeq80TYstskg1VMfCxM9j7goJr0h8GMfln5ThW1byVaE4sLYVJHbQy%2Ff67WeKzWZ%2Bp2CnHAkKPLCd3rKjt0Rz5dUPOFOSyFPc%2Fmy0lyqDOsnqSUuM47gL3M9HzUXKBraQng13tWJOhU3uIh2WpkXIRIdR4pgkh2MLmw58MGOqUBu6e0FyYkE06Y0CoPIIGUKv4CWZtq7Q%2Bu1Wh9Ept2y%2FieAIXT%2BW%2FU8QBOqd5b39eD3A5b5HSIgOrStknuP9pYQoQx78iSzt6H%2BbGD%2Fa%2BS1nbNe89A63wNP3rMFyQgRgox5Q1c8CBIzAGxXMSgAiPBs7kkeEwjSI42qbQK4uO6DSEj120st94yDKHguNau3xIlDDFBGr1ogebeHVA6B1F23JyazGwL&X-Amz-Signature=44fe161fd938e3df9830968e2573558c6fdd5415de9e193b5f90ccb6056ab5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVUE22H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC09adN30VzlNVH5QrxpQ%2FSlN8qTs22va3DzJpbZZQH2wIgUPX27jZlMAfI%2FobyHb6E4gmvFHEUdxSsFX7qzE%2B2gEcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIYgtWtxhEHHeTASrcA5n%2Bb3WsTk%2Fen8qILHxpGMiCaHoITjACdPk45oViWmQQYb07Ch3qGMj18fvcSgw5AXdwd4%2F7sQMk1xot1ViMPX1lr7qjx38Z8MTRD3JhpNkhhFMeDF7gXHxdrxuZT2jnRtjtKwOl7hAIfVijzTlATMhcC9FgOdUCqbjuaCYXzGKJzUa4%2Ba8JXvhthc3RQ54XxHY35e0E9lbxzH3pCsxNq3AVRIa%2FKEpNntLdUQBVcfZtyQANe4ZlXdrqRkA9TO3ZpS%2BtupkXGO0rkx9NX2SZXL1kW%2BklKywbPaAAqun2pfcPtzsW%2FZjOEafEWvUzNXj28Hq%2B3W5wDe97qK3N%2FJ1%2BAG5yfbnY%2BXNv8HlyUWEg5N7BU9tVuCJZqIz1FNneUeZKXctY38%2FJhM2nhEBSfpVoIHkZsWUzGYGgbdWJha5d79qh%2B2ss2Je%2B%2BU2e9oJ2VKG%2BAPidXmr%2Bw5SnBOODgNbRYCIEvFo4DXeq80TYstskg1VMfCxM9j7goJr0h8GMfln5ThW1byVaE4sLYVJHbQy%2Ff67WeKzWZ%2Bp2CnHAkKPLCd3rKjt0Rz5dUPOFOSyFPc%2Fmy0lyqDOsnqSUuM47gL3M9HzUXKBraQng13tWJOhU3uIh2WpkXIRIdR4pgkh2MLmw58MGOqUBu6e0FyYkE06Y0CoPIIGUKv4CWZtq7Q%2Bu1Wh9Ept2y%2FieAIXT%2BW%2FU8QBOqd5b39eD3A5b5HSIgOrStknuP9pYQoQx78iSzt6H%2BbGD%2Fa%2BS1nbNe89A63wNP3rMFyQgRgox5Q1c8CBIzAGxXMSgAiPBs7kkeEwjSI42qbQK4uO6DSEj120st94yDKHguNau3xIlDDFBGr1ogebeHVA6B1F23JyazGwL&X-Amz-Signature=9a9b7643952262bdfbd0336598ec22b8152dd0ebd5be29d73894958648b22863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVUE22H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC09adN30VzlNVH5QrxpQ%2FSlN8qTs22va3DzJpbZZQH2wIgUPX27jZlMAfI%2FobyHb6E4gmvFHEUdxSsFX7qzE%2B2gEcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIYgtWtxhEHHeTASrcA5n%2Bb3WsTk%2Fen8qILHxpGMiCaHoITjACdPk45oViWmQQYb07Ch3qGMj18fvcSgw5AXdwd4%2F7sQMk1xot1ViMPX1lr7qjx38Z8MTRD3JhpNkhhFMeDF7gXHxdrxuZT2jnRtjtKwOl7hAIfVijzTlATMhcC9FgOdUCqbjuaCYXzGKJzUa4%2Ba8JXvhthc3RQ54XxHY35e0E9lbxzH3pCsxNq3AVRIa%2FKEpNntLdUQBVcfZtyQANe4ZlXdrqRkA9TO3ZpS%2BtupkXGO0rkx9NX2SZXL1kW%2BklKywbPaAAqun2pfcPtzsW%2FZjOEafEWvUzNXj28Hq%2B3W5wDe97qK3N%2FJ1%2BAG5yfbnY%2BXNv8HlyUWEg5N7BU9tVuCJZqIz1FNneUeZKXctY38%2FJhM2nhEBSfpVoIHkZsWUzGYGgbdWJha5d79qh%2B2ss2Je%2B%2BU2e9oJ2VKG%2BAPidXmr%2Bw5SnBOODgNbRYCIEvFo4DXeq80TYstskg1VMfCxM9j7goJr0h8GMfln5ThW1byVaE4sLYVJHbQy%2Ff67WeKzWZ%2Bp2CnHAkKPLCd3rKjt0Rz5dUPOFOSyFPc%2Fmy0lyqDOsnqSUuM47gL3M9HzUXKBraQng13tWJOhU3uIh2WpkXIRIdR4pgkh2MLmw58MGOqUBu6e0FyYkE06Y0CoPIIGUKv4CWZtq7Q%2Bu1Wh9Ept2y%2FieAIXT%2BW%2FU8QBOqd5b39eD3A5b5HSIgOrStknuP9pYQoQx78iSzt6H%2BbGD%2Fa%2BS1nbNe89A63wNP3rMFyQgRgox5Q1c8CBIzAGxXMSgAiPBs7kkeEwjSI42qbQK4uO6DSEj120st94yDKHguNau3xIlDDFBGr1ogebeHVA6B1F23JyazGwL&X-Amz-Signature=e2d17e4f1063bbe433ca3f700a2664216a56402b591a04649ca5f4e5253b220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637YURSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCL0C%2FyoxdXG%2B392fOwvs8yD9Lr7UFEbPKlHoBT2Hj9FgIgCRrG0laHNSuig5bpZvksFzHC%2BiZsihbllSRl3UAsmsYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5%2Bt8%2FPycB3EA32KCrcAzoynH5d1dadtiPt62PIMaPdqRrptgVM1EmbEd94qcMFzkEw2s0%2BrYj4UIjahnuuIrREGfDiw5zh0js0e7sAibfz%2FwkcC31SSZENfKLsiIhzOvTj1%2FLzb5kI6H0Ie9k62wzv53JKrA7HKskyZI3dSwGfTPkX5y9hwFPFES6MpXqRChv1W8v9AjZTolEKylYAsH75c7BdW2UzPDMvEJI0MxLYnD40PrXj5LVHmmejM40Ro6QVLtH8wS%2FNcTgqICnIdB6rjifVYyc0U8vqyr6eg6A%2BIGoB6QRX5RbOh%2FaT1sS4F3rl7KC7ilfbHF090zv1ajcrTJBtaEbpyzsAMt7ilU%2F%2BIpe2GJOA%2FJjUV4SJqpEVJOI%2BknDfsq06o%2B6s83jtsqCIzJo8peT66YRLeSrYFjZ9TXTjA08SnWYdyvf2plBTgWRDCV320aeeJtnN9g44hlv%2FiRCWeN4%2FVhOoAd0CjlwmMpp4b%2FbL2csP3hVOar5%2B%2FO2%2BH1au%2BQLgyCiy2VYcgICYPDzDB7GKEi5QXxHv7zayYAgwNAtMMm%2F3zzkvo3Sy0OZZUtJZ3cPd1J%2BrR3%2BS7H9ORsEtQr6xSRwfDRKzunSs%2FKERpKcxLxeSydINv6MNK6PCtC62ZI2Ak0yMMIuw58MGOqUB2KDrXVJ3cABSeN380L2Of8zFuqLkx6rSpxhm%2F8%2FtWQGIHpmlUOw61jCDsqh4gfPFQxUj%2BHZl6GnZDTBo%2BTKzt02SuM4SPI%2BW2LO2Y2r4SLLv6EgX9XAPx67VENhD6Ru2fCjvm06c3Ugbu1L1FsRcgNL5%2BSL3%2FVHellvenLzMDMEgIxvtqtF4klntRikXrE%2BZ7Gsw7z%2BE3N%2F2TGzW2pBYALGgHno2&X-Amz-Signature=d17d117a7fe97b11229bdb9778cbaea102fae6000940817fa1fb7f77d5166b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HX4W4RX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEVNk58S0%2Bgas%2Bd8LOKmEWElEIv8crOr%2B0T78Qbba6xwIhAM1%2BKHyDj8f6O%2FTH6g7x1Mw8icz9y%2Fi6dtf15n0wNwvfKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznfwumhdV84uRcQ9Aq3AOsAwGK3zH%2FDfyEJ81RfUfNXCsFWZ%2BytLbmwa9H1nlLAGjhv%2FvSSa1odPiwXPBEr34pLMKiEPBf1Y1NmoGKplc613z1KHYQiAzp88uVLXw%2BRXboihRZsAQcOBfNBkyKgx4W00xt2cgZFiMELDLP0ve9OKi8JDLEiaQoBKh8BLRqFhhCsAtai0nLAQ9Jok1DE7Wlw%2BTcec4Tp1YefOZsRVaDe00YdecsGNBqVRsogugcRGAT1HAR3jJgfgXYU0tkTBSoR9iH87O5yj9JyS35EJpho4vduIor4Ar7K4m3C6o8xOhIB9tlwvQfwcJWHXFleotyLXLIZxEgC3%2FyBxfcaugXf8xVP8KYxT%2FjnUeWCVjNsl456eroaa8ExPKiXQLJwEKgZFMpNa1BdPMOeLy1kmfI2sQbfrKQF8bxPaz94SvgyocoUy8%2FXx%2FDiVHOtaH35P%2FDOEcWvFWdR%2BghhdNwV41v9TtvP9svdx4JlfvCAGErLphc8YIksuZhW31lDfP7kf3pEH5V31%2F5EvOKP9BDvdKV0IPpzfuU8HWudD1Ek2ODeSHeUx%2FyIobPhiGy0LqUibdLf%2Bmcc3UKnU%2BuMNi2UsWa0n9FfpjXu6nswi1HCixJ6Vtq2to1g0hDOOD7QTCtsOfDBjqkAYkt%2B9m7eNfvDOIbTlkt5JwvFqn77sI186k20rkgjgZlH8RHStFtGBD67ZHGizvYoyE91m1wCYjGSWI7kaSOCjOMqCcneEpD9J3vPc0m1F5cYjTDanP%2BsPCmzzOUEV9poR8ASZskOLwQ%2BhRvxGOzUlo3kKbs0knKicuOVwRTuwBCsmrgH8jSAmi%2BED%2FppRAsxHVGwrl1QjRz5yth1RKpt8k8O6h0&X-Amz-Signature=6eba9bef11ccbe32341c41c4eea0c2321a5ebd4c13360937851b794edff0de9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVUE22H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC09adN30VzlNVH5QrxpQ%2FSlN8qTs22va3DzJpbZZQH2wIgUPX27jZlMAfI%2FobyHb6E4gmvFHEUdxSsFX7qzE%2B2gEcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIYgtWtxhEHHeTASrcA5n%2Bb3WsTk%2Fen8qILHxpGMiCaHoITjACdPk45oViWmQQYb07Ch3qGMj18fvcSgw5AXdwd4%2F7sQMk1xot1ViMPX1lr7qjx38Z8MTRD3JhpNkhhFMeDF7gXHxdrxuZT2jnRtjtKwOl7hAIfVijzTlATMhcC9FgOdUCqbjuaCYXzGKJzUa4%2Ba8JXvhthc3RQ54XxHY35e0E9lbxzH3pCsxNq3AVRIa%2FKEpNntLdUQBVcfZtyQANe4ZlXdrqRkA9TO3ZpS%2BtupkXGO0rkx9NX2SZXL1kW%2BklKywbPaAAqun2pfcPtzsW%2FZjOEafEWvUzNXj28Hq%2B3W5wDe97qK3N%2FJ1%2BAG5yfbnY%2BXNv8HlyUWEg5N7BU9tVuCJZqIz1FNneUeZKXctY38%2FJhM2nhEBSfpVoIHkZsWUzGYGgbdWJha5d79qh%2B2ss2Je%2B%2BU2e9oJ2VKG%2BAPidXmr%2Bw5SnBOODgNbRYCIEvFo4DXeq80TYstskg1VMfCxM9j7goJr0h8GMfln5ThW1byVaE4sLYVJHbQy%2Ff67WeKzWZ%2Bp2CnHAkKPLCd3rKjt0Rz5dUPOFOSyFPc%2Fmy0lyqDOsnqSUuM47gL3M9HzUXKBraQng13tWJOhU3uIh2WpkXIRIdR4pgkh2MLmw58MGOqUBu6e0FyYkE06Y0CoPIIGUKv4CWZtq7Q%2Bu1Wh9Ept2y%2FieAIXT%2BW%2FU8QBOqd5b39eD3A5b5HSIgOrStknuP9pYQoQx78iSzt6H%2BbGD%2Fa%2BS1nbNe89A63wNP3rMFyQgRgox5Q1c8CBIzAGxXMSgAiPBs7kkeEwjSI42qbQK4uO6DSEj120st94yDKHguNau3xIlDDFBGr1ogebeHVA6B1F23JyazGwL&X-Amz-Signature=88e7acd00b0a200fb221b30ef60a65997d6ee440a1ff1ec71391007a612897a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
