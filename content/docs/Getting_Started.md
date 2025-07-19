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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO2JQ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOQvY9LlYllNGd9KMqhdFD7F%2F1vtr2q2ls%2B3EkugcmWwIhAKYxkBbYHa0U%2BFoIQs9sN2LLu5mxW44HunY%2FecRK963fKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7HqSdLdjJiJ8hKVEq3AMEPqlh5SPiDtiV3CuNr0wKMrWTletpBAWgW6c7VlcCJub3E6d7AzUx%2F5e1bmVbYJBNBaVS9DC5D7p1gNRsBqpZhS1MyBv%2B3jxQxRYojfiXnm3SKaBIfVfeu%2F8Jt7CkrdZpwJphGnf%2BnuLwDXBQLzsnOXrr8ldD4KjwLUsgFCaVaW5Bl8cs0vl9%2Fuj0hoDEyCCuehwl3PPcki236XaULw2AIzkkRuWs5Zt%2F6nCsYbepNyAxSpQqoedwSo%2FTm7cgy9vld8q0%2FlSPCWvh7d42zK%2FwmUUSgz7ijq2I%2B0NH9RjdDK0Acp3sWDYrUMnCWxf8LCEOqRAgDX%2F5j39al8PCJtcpWN9M9jY8OSypSp0qaeVsx4EM3L2lj6xIxLQ26Q7e1g1Jbvtxc0GRqda0BFwzXudN4YyGAsz9OZBjfYHmPQQO6I5pESySUNYRhJaiDi9j7ZRCR4d5IVJkc7CYox2Vz04AyUHJD9UBIISlnXRy2M%2B4KFrwMLuiSsr6aEn%2Fqsi56FsM5JwZwknxW8GUJ7MvZWkTyhnbkC6F6ag6EvpmI0%2BJE2UO1JvDOk2XxV%2FEuJjqE3oIMfWbYTl%2BYZbLIFG9Fr4HlbxxtUfzmqMiltz3%2BLBN4hZcExQ2wRqud2kUDzCB4e3DBjqkAZJylq7R18ku%2B0P79ncTg1h%2BchWJGGeH4YztVa%2FrUqEqoYPiT8tjmp31GMSj8k6fme23o2z9Yep5tF%2B9U3uEQkx5UguuG6bxbZbtmS%2B9%2BsfjpClph2ZAIorDEnvFdcMMJ%2Bpt%2F%2B011g5fYsRCGpjIE7yu5gA81vxyKp1PrQJ7Vww0Z6HIL2ivC5lX3cr8o2O4FVa%2FXP0XBmuotyxvOuj7dhR8c9np&X-Amz-Signature=354a34d8be9d2d7215c9d38f7efc7239e88cced2d7bc03b377191e63106c1e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO2JQ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOQvY9LlYllNGd9KMqhdFD7F%2F1vtr2q2ls%2B3EkugcmWwIhAKYxkBbYHa0U%2BFoIQs9sN2LLu5mxW44HunY%2FecRK963fKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7HqSdLdjJiJ8hKVEq3AMEPqlh5SPiDtiV3CuNr0wKMrWTletpBAWgW6c7VlcCJub3E6d7AzUx%2F5e1bmVbYJBNBaVS9DC5D7p1gNRsBqpZhS1MyBv%2B3jxQxRYojfiXnm3SKaBIfVfeu%2F8Jt7CkrdZpwJphGnf%2BnuLwDXBQLzsnOXrr8ldD4KjwLUsgFCaVaW5Bl8cs0vl9%2Fuj0hoDEyCCuehwl3PPcki236XaULw2AIzkkRuWs5Zt%2F6nCsYbepNyAxSpQqoedwSo%2FTm7cgy9vld8q0%2FlSPCWvh7d42zK%2FwmUUSgz7ijq2I%2B0NH9RjdDK0Acp3sWDYrUMnCWxf8LCEOqRAgDX%2F5j39al8PCJtcpWN9M9jY8OSypSp0qaeVsx4EM3L2lj6xIxLQ26Q7e1g1Jbvtxc0GRqda0BFwzXudN4YyGAsz9OZBjfYHmPQQO6I5pESySUNYRhJaiDi9j7ZRCR4d5IVJkc7CYox2Vz04AyUHJD9UBIISlnXRy2M%2B4KFrwMLuiSsr6aEn%2Fqsi56FsM5JwZwknxW8GUJ7MvZWkTyhnbkC6F6ag6EvpmI0%2BJE2UO1JvDOk2XxV%2FEuJjqE3oIMfWbYTl%2BYZbLIFG9Fr4HlbxxtUfzmqMiltz3%2BLBN4hZcExQ2wRqud2kUDzCB4e3DBjqkAZJylq7R18ku%2B0P79ncTg1h%2BchWJGGeH4YztVa%2FrUqEqoYPiT8tjmp31GMSj8k6fme23o2z9Yep5tF%2B9U3uEQkx5UguuG6bxbZbtmS%2B9%2BsfjpClph2ZAIorDEnvFdcMMJ%2Bpt%2F%2B011g5fYsRCGpjIE7yu5gA81vxyKp1PrQJ7Vww0Z6HIL2ivC5lX3cr8o2O4FVa%2FXP0XBmuotyxvOuj7dhR8c9np&X-Amz-Signature=be71f4da4887bd9abca48b15c0aae3a21338668ad2cb3f6482d0f8978bea1da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO2JQ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOQvY9LlYllNGd9KMqhdFD7F%2F1vtr2q2ls%2B3EkugcmWwIhAKYxkBbYHa0U%2BFoIQs9sN2LLu5mxW44HunY%2FecRK963fKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7HqSdLdjJiJ8hKVEq3AMEPqlh5SPiDtiV3CuNr0wKMrWTletpBAWgW6c7VlcCJub3E6d7AzUx%2F5e1bmVbYJBNBaVS9DC5D7p1gNRsBqpZhS1MyBv%2B3jxQxRYojfiXnm3SKaBIfVfeu%2F8Jt7CkrdZpwJphGnf%2BnuLwDXBQLzsnOXrr8ldD4KjwLUsgFCaVaW5Bl8cs0vl9%2Fuj0hoDEyCCuehwl3PPcki236XaULw2AIzkkRuWs5Zt%2F6nCsYbepNyAxSpQqoedwSo%2FTm7cgy9vld8q0%2FlSPCWvh7d42zK%2FwmUUSgz7ijq2I%2B0NH9RjdDK0Acp3sWDYrUMnCWxf8LCEOqRAgDX%2F5j39al8PCJtcpWN9M9jY8OSypSp0qaeVsx4EM3L2lj6xIxLQ26Q7e1g1Jbvtxc0GRqda0BFwzXudN4YyGAsz9OZBjfYHmPQQO6I5pESySUNYRhJaiDi9j7ZRCR4d5IVJkc7CYox2Vz04AyUHJD9UBIISlnXRy2M%2B4KFrwMLuiSsr6aEn%2Fqsi56FsM5JwZwknxW8GUJ7MvZWkTyhnbkC6F6ag6EvpmI0%2BJE2UO1JvDOk2XxV%2FEuJjqE3oIMfWbYTl%2BYZbLIFG9Fr4HlbxxtUfzmqMiltz3%2BLBN4hZcExQ2wRqud2kUDzCB4e3DBjqkAZJylq7R18ku%2B0P79ncTg1h%2BchWJGGeH4YztVa%2FrUqEqoYPiT8tjmp31GMSj8k6fme23o2z9Yep5tF%2B9U3uEQkx5UguuG6bxbZbtmS%2B9%2BsfjpClph2ZAIorDEnvFdcMMJ%2Bpt%2F%2B011g5fYsRCGpjIE7yu5gA81vxyKp1PrQJ7Vww0Z6HIL2ivC5lX3cr8o2O4FVa%2FXP0XBmuotyxvOuj7dhR8c9np&X-Amz-Signature=0886a84604b6910f1aa2e603ee376c64bf3e9ddfe889cf703046b77815e196b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTPRRRF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhCqGIIvdbTcQPYiBIVj6JtKbVAT7njomZMMZ5c5lLgIga9MMQepsGx7SmjIRUTLy7Aosu1gY%2BTeOnX%2FqF9MAt4sqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9gtaLIT2wghLyszCrcAzqeEj%2FwL1DEw46o2FMH%2FN8I0uhMo2zNRvg2go8TKH%2Bgj4lSFGcG80wht9%2FXoak6mYIpSxI9BibhMcjB1syjVFCYpw73qgIlBMj163Lh1FSVzNMyR3zxFQHZ8DrsRvzukWyJ3ElNBd1L5P68jLnjW9qEHViKV6BZgCJ7GB07533FAw865owwN2gDzPls%2BRCO5TXZIjqlmbb0xuWdmnErFS8lP2g9Px7Vy98XepafiBQX542%2FcDO1T1MKKvn8icGHTwqHVDieZZGisZS5u3sakVqRKdBArTEPi2uxxMfQhNBWFFZMzl0YClmHHLKOwjv1wegrs3Y%2BIML2RwRM4w%2BABtYyQFXiu%2Fz3K9OXqlC1ypB33a7VcRBjcjbeNkmhyBLzPUFyUmHr2ocVJhDIeapBnq6owu4B%2BuCSPykenycynbJ204fd6CWHMKQ2MNYCjNY6vBERV2CyvyPt8fnrAfh4PqvStqiiR2%2FUixRh2IY8s31v5MbBq%2BZIl06fM3wf%2FVajx6saTBuheWahuS85jEfbvIoSOBvwvlhbzGAQxhLoyz1xyDu5e6e3giaGQERy6jdTSDnmAx6lQqtOlNIxAHiFYbdNBGNhTB7XhRvDeBcwdnhOKGvfLjBVoXQhJqC3MJzr7cMGOqUB%2BxydJ1v4RdE2801Xd1Hfy7STRFPkch3mjesI3tOSk6utJQTN%2FTsHZBvnT%2BBcoZ1h2fog%2BiJ%2F61x532r0vbXLbE7kuhmJmBXBQMgoTVquuW1DFPlTc6f4XSkp8HIAg7YahTMOKgjTV5mTUsRpz9lXBzw7U65ZlmAiibHRRoaOPPpDyGHaCaSph4kX%2FHDUuBkvpnunzHcZxvdRhkrA7XLg9cOwDmIY&X-Amz-Signature=3be1e185a98beb6bf2bf06feeb4fe5babfbb15b458227a99bde4bdea5801b32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMCKAQ5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYHqk722FO1R0o19fd9W2bMq1CU7z0iBlOPeLLZTkGwIhAIMg%2B%2Bs5M0hCtlRDh%2FLlNUch1epykUrnSrcg3oM3wC31KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn5h48KI%2F%2F7QmkhUgq3AM8NVUjiss6Jn0%2BXdokzXKuYWhOesDuFDCRldnLVyngsfIMfocxPj%2BnmZIR3XDYbsx%2BR44KLiBdG%2B%2B5fVqqht6GwhCpwEg8BBM3RGZ0g%2FFwCbCG4GEDFsz5uW2FG1xVFZspHdlQKBvaCWGiMu0aVjFAIySJ1b68wQCcPtQ%2FBkFsdVvtL2uWhkPArROfxK3FRNKKC3Cawpog8SJ2XFi9ZBBefm3JvcJL8NhrGVYWiJ04YpwfulW7uwduvjxncz1vlN146lLvN0k0ZhaQf7mojR1voHVGD2nU0yBRaWD%2BM4b%2BSwXWHTERPKxi%2B2n5PeW2cr3oq8QfGB9XDjmElkZhMW8yhwIXEfhgqVLQ0i7uK%2F9yuOHruZpGcc10%2B5JfaEQN84fbBnPLtBfFO4NgllklFTkDQLXIF8plzczj4ilLzuCzoaPL7%2FRoq4I3GCQHWcdQR4NYFdJFK9gCND7IaOCcLnQCyD3BsvzNGGkEM%2F2st8Y5bGjcYmxYaa%2BOa5jZ%2F0hFvC0Y4cN9bjWHj4Hefs7mM0yvKX%2FC9mj7l2kQR3KFSfVY%2Fnl57q56pXywtvJ43IrpH7Cq65s%2FE%2BHKAj1%2FhrApixntFHIYdFJ65RhHk1%2B091KqvYut8sHjBmzl4AT7PTCI4O3DBjqkASj1G8bh7sCcx3KRJ5NxKFjoOeZAfVG1LMNi8DHXjOWZ9gZutKgANWHqmbfdYBoLaBhOUqIGn246Uin7L4sUJLYUIteMxOVZRUmMRbz9s5iRgxhlv%2F2IXMmLqeRkLABsofQ8bnOb%2BA0i1z08VrOyEhd9K2W6VaUuMm8s6m5SzQHWCftUJMexV%2F3xt8253ldx%2Fcc2gw4R4gpGczvYl4%2FeF2gRNuAM&X-Amz-Signature=e6bba203f4ff04acb9104535e2eaf9b54ce58f966780abfbd04a2e2620d1eb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UO2JQ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOQvY9LlYllNGd9KMqhdFD7F%2F1vtr2q2ls%2B3EkugcmWwIhAKYxkBbYHa0U%2BFoIQs9sN2LLu5mxW44HunY%2FecRK963fKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7HqSdLdjJiJ8hKVEq3AMEPqlh5SPiDtiV3CuNr0wKMrWTletpBAWgW6c7VlcCJub3E6d7AzUx%2F5e1bmVbYJBNBaVS9DC5D7p1gNRsBqpZhS1MyBv%2B3jxQxRYojfiXnm3SKaBIfVfeu%2F8Jt7CkrdZpwJphGnf%2BnuLwDXBQLzsnOXrr8ldD4KjwLUsgFCaVaW5Bl8cs0vl9%2Fuj0hoDEyCCuehwl3PPcki236XaULw2AIzkkRuWs5Zt%2F6nCsYbepNyAxSpQqoedwSo%2FTm7cgy9vld8q0%2FlSPCWvh7d42zK%2FwmUUSgz7ijq2I%2B0NH9RjdDK0Acp3sWDYrUMnCWxf8LCEOqRAgDX%2F5j39al8PCJtcpWN9M9jY8OSypSp0qaeVsx4EM3L2lj6xIxLQ26Q7e1g1Jbvtxc0GRqda0BFwzXudN4YyGAsz9OZBjfYHmPQQO6I5pESySUNYRhJaiDi9j7ZRCR4d5IVJkc7CYox2Vz04AyUHJD9UBIISlnXRy2M%2B4KFrwMLuiSsr6aEn%2Fqsi56FsM5JwZwknxW8GUJ7MvZWkTyhnbkC6F6ag6EvpmI0%2BJE2UO1JvDOk2XxV%2FEuJjqE3oIMfWbYTl%2BYZbLIFG9Fr4HlbxxtUfzmqMiltz3%2BLBN4hZcExQ2wRqud2kUDzCB4e3DBjqkAZJylq7R18ku%2B0P79ncTg1h%2BchWJGGeH4YztVa%2FrUqEqoYPiT8tjmp31GMSj8k6fme23o2z9Yep5tF%2B9U3uEQkx5UguuG6bxbZbtmS%2B9%2BsfjpClph2ZAIorDEnvFdcMMJ%2Bpt%2F%2B011g5fYsRCGpjIE7yu5gA81vxyKp1PrQJ7Vww0Z6HIL2ivC5lX3cr8o2O4FVa%2FXP0XBmuotyxvOuj7dhR8c9np&X-Amz-Signature=041a5ae16e10414b1c627b70cfd29c043acba650f4ea69b89e3b4af7dea67ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
