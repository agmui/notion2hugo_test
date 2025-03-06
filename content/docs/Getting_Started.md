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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVOLKYD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj6E4XwnX346tUVrlq%2Br8Rv8CyJN%2Blbb1qN8S7ipz7nAiAkZeAC0qVlKKojEnxy7GkBM2zIII6ef0JJgjjx6OhINCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMj%2BriGRaOmI3afJh4KtwDSIuFjqzU8lRmHoC31qHEp0VBUU3XH8UzrwJHSqcJ8O2PbgJQCYkUZJ2rgngXYGbik9JgNBoa5TqkY4%2FdHy5ZMChJMs1ilywenYDe8xNH1cpe4sYHEHc8sUzW%2F0oJjJTyBWh4%2FKxR4iOzNYV29NzFg4s%2F%2B6A6ZZcjOP27oXW7tDZpDmYdd0RGMAyvHKLmPgBcI%2F7jTcFNn%2FgTjNp9K6Rupu3pgSjAzQUzFuqgfiY2n%2FzDdinCXGG%2BoozTML7h%2BQLmIvW7XX6hJRDpcvb2GAsf%2BX8696Mz4kpCs1Zo04rnrzwoQrjt%2BgKVmnMbmXTYHC7EH5ri9Ysp94JTrQJ5v66DbFBKIRzjgziiNzeGSwKktcNuElw8Fmbk1FO9KDsiM8d7ha%2FZ0PIAQqgRsy1ZPtmNHeCjZ4Mi%2FqFDDqP0Pc5wfEevfopOIQUL%2BiNQZ2k12SdJ1MQFkhl1P02U0Gv8fc42veVGYNZ04xXgsXGEr8bwk9UevKNc2ovNoNSRQIrcwk%2FQ%2B303aXaMYmQm68g%2FLIkcR6iNGnm%2FeBVmaXRxubhj5JBzhMJowYFDljbnE%2BYvz%2BDJKlP0ApMfF4UW4T3oXSk%2F81jHV6f8z4%2FYodUkw1pIKomDDdnmrDZq4o0BYkQw6PKlvgY6pgGo%2FWVk23CdwIqEJWnJbDLuLNwwGbS1HH3Fcd2o9UOwnUbePkPmjAslz65SlsPlE6n%2Fcjxr%2B0JxAZ5MltSVS3FCvfuszBYHW%2BWnNLNoTDXIswro3jPRPQ46GbvjlGCBKcX54ah9jyffbO4aFrWNcEE%2F9%2FWJzGIZ8y5FhXfaW5aqQ21m4JMqBTWAWgkw4%2F6sPDZYiDPveyX%2FAd86qr4k4jrKVhZK72sZ&X-Amz-Signature=93f7518954e246f14ab27ae957d116ffb91bc78e53df1530817972bc35e314dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVOLKYD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj6E4XwnX346tUVrlq%2Br8Rv8CyJN%2Blbb1qN8S7ipz7nAiAkZeAC0qVlKKojEnxy7GkBM2zIII6ef0JJgjjx6OhINCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMj%2BriGRaOmI3afJh4KtwDSIuFjqzU8lRmHoC31qHEp0VBUU3XH8UzrwJHSqcJ8O2PbgJQCYkUZJ2rgngXYGbik9JgNBoa5TqkY4%2FdHy5ZMChJMs1ilywenYDe8xNH1cpe4sYHEHc8sUzW%2F0oJjJTyBWh4%2FKxR4iOzNYV29NzFg4s%2F%2B6A6ZZcjOP27oXW7tDZpDmYdd0RGMAyvHKLmPgBcI%2F7jTcFNn%2FgTjNp9K6Rupu3pgSjAzQUzFuqgfiY2n%2FzDdinCXGG%2BoozTML7h%2BQLmIvW7XX6hJRDpcvb2GAsf%2BX8696Mz4kpCs1Zo04rnrzwoQrjt%2BgKVmnMbmXTYHC7EH5ri9Ysp94JTrQJ5v66DbFBKIRzjgziiNzeGSwKktcNuElw8Fmbk1FO9KDsiM8d7ha%2FZ0PIAQqgRsy1ZPtmNHeCjZ4Mi%2FqFDDqP0Pc5wfEevfopOIQUL%2BiNQZ2k12SdJ1MQFkhl1P02U0Gv8fc42veVGYNZ04xXgsXGEr8bwk9UevKNc2ovNoNSRQIrcwk%2FQ%2B303aXaMYmQm68g%2FLIkcR6iNGnm%2FeBVmaXRxubhj5JBzhMJowYFDljbnE%2BYvz%2BDJKlP0ApMfF4UW4T3oXSk%2F81jHV6f8z4%2FYodUkw1pIKomDDdnmrDZq4o0BYkQw6PKlvgY6pgGo%2FWVk23CdwIqEJWnJbDLuLNwwGbS1HH3Fcd2o9UOwnUbePkPmjAslz65SlsPlE6n%2Fcjxr%2B0JxAZ5MltSVS3FCvfuszBYHW%2BWnNLNoTDXIswro3jPRPQ46GbvjlGCBKcX54ah9jyffbO4aFrWNcEE%2F9%2FWJzGIZ8y5FhXfaW5aqQ21m4JMqBTWAWgkw4%2F6sPDZYiDPveyX%2FAd86qr4k4jrKVhZK72sZ&X-Amz-Signature=cc230c22ce3019ac1bdf7974d9e5b5be468e30d3dde703de8824e3a78a25fa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3GYOXQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX8s4buw%2Bayug9gYI34r%2FUNmN2sDhFzu3F9KZv75IAygIgQYFQdXn6LSOaJ%2BFlBjAw%2B3XA1qjhsXdZk0jkEQO9M4Eq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAsnMdI4SJCq3MRpIircA8L3R0rV9uKUaThxsNhq%2Bmt4mWgzXTepUQV9rviquK25tKP%2B8qFRyqNOJIP55kzbDmHeID9Xt1%2Fcu22nNV8UsCUE60MIGbRSyw7sRyDn3fCYVJ5RqBY4%2FzeAll13xitGce3CaXPVon8PUpLYbSyGl8NjD8%2BvfXoNZFo9Ss25RgfsJyjdYKdjxAP6AkMBomKi76dF0qgUfp0m0cUSX0RR3c2feQ74nHAGBlvBnIj%2Fn4GiyWyOf8W5rFnWfW4fwmwGxNK%2Fle9cVNDVMXef8vpQ0DhdApFa4hcHW6v%2FXUA5P3uNYs6Gut%2FS47ysx6xc1yOt1PkG9bLTdEbu%2BJGhLTwxT3ZP2QCrbIB4NCY20eCSuiFNy9Kzbdg7%2F9XdM0eNzBF5wsmPFpFpRPe570JvDiUkbCq4lA1HbUrmyS4EGzgezEVo3bHtjauvqnxc8gofmOySrn3BlCrIoPeZkGPBmxKN9CV1haGSAfMKnS9txRsuQZTxuetwGd%2BH08%2Fdpt8l3GCAWXyX27OzMmaGPdlrvvLhpOS15SIPTOohsKH4oMvglsPdGNrwSWUHiR1lSpE4HDw1ckUZYqVIcRBTlLiYnG%2BH1PXZ6strQF6ciNm1YwmPPaNnQhpilq7bmWVG2uuXMPnypb4GOqUBIQWtgvb48WPJqIVGL8XXIsn5Y1v2zLAAmmb%2B9cCul5DEzKssaVoqtgIOW90SzPbLSN%2Fzn0sddx4U3eiD72cImv9j4TJdHkIblNv3FF9KNTP7qy%2BS42iiH3HIjxY2o4k19tpBsGfrTTznvmTE15Zn75Ohw2AeGdrWK4Vz1KL66Rl0AF9C9%2BfwwgUq6EGB7UCaPtHW%2BjyWaMCvsncQjkjQ4%2FGK%2BK3j&X-Amz-Signature=cf3a7f90e45a475af7748086f024d8aefd76f135d0c61d6abff3dbc01d972e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFKYHGU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbjgZU%2BM4VWmLIhN8KwhGC7Huqk5%2BWGjYPJzgF9duawQIhAKrJACxzgAaRqZY5gxqhaUe%2FxkWBHdHPBRgT9HKWvLdYKv8DCCwQABoMNjM3NDIzMTgzODA1Igz3n55536OwNi8O3Acq3ANYvsu%2BAbkDTdPDIFDxZPTCcuAYel8jjd5473JrJBo9E55WGvslVIFRSFXFnftdgEHZ3T%2FoS09V5wpKeSOcJrZDk%2BKaoNa3iETnlPNbLUc5NLvTy07ZobOqhDpg37ccnjKmkNIQIhDDB%2BFWULh8l6KoChZvVBtqcCgnCmA8LQKCaefNipucEBHJeSAuIZkTQyiI4sAxXotxcuXWkW3ZRK3rhaSRs0IqBhqSs4%2FgN93bTtCL2MsSRx3Wyujm8Ltyls1%2BK0xlO4T%2FymQ4MuvgFVR3PP2PWeYs%2BAXzJXokp4QWwuECiq9UV2TpUGDQMgZMyuEUtzlin5CyLYdRLMS4MW%2BPHl3MZCs33EBSiHHrDUdZUwDbWrJzqkfwEretHI9v%2BO1eRgeSCXo9qoRwG6AJ5tkKJn1SvTs2XIVO2hwwU%2BAhGYuGGmh5Q01IOgp4YuTrp%2BCzavyf601vbE6DMNIodDbAvQmfyC%2FDB8aHRx6%2BGZZ2HIMq1TZQxrwxQxJwVq3lmUo1ucErR%2FYhkvoYiLCNtMSRk49prOItB77ghCI9BMCQp19JITrAenJ4%2FpjwlJlYWhIw1iZRMlyyIldhHyM0O5BWG4nY5cMl3jp8r3cKl20FLWTezPCMLtncQ%2B1k5zDt8qW%2BBjqkAfaNYK5ZkXHyI%2BhD5ak7TeTmW65jNalyhSugz6mqKJHLV5cJ8mgJ8pp9FrEKuan%2FLCeiCJTEDbvyxtfEbAyfc8jRicMEnYRDqQQINrAiTUCqdTrpPda2p9cSoFr2z1q%2B5uRLNbiEJvljybygBj%2B2%2FLrEW0syhirDDdcqK21FLwv7zbove86BVYjgV0ix%2BIXRfMEhj%2FiurnWPdOTMasJooY0j5uRB&X-Amz-Signature=3ff6c30728339d4256b2d92b060a34ed30e3db4861dc80536b91afe22ca67738&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVOLKYD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj6E4XwnX346tUVrlq%2Br8Rv8CyJN%2Blbb1qN8S7ipz7nAiAkZeAC0qVlKKojEnxy7GkBM2zIII6ef0JJgjjx6OhINCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMj%2BriGRaOmI3afJh4KtwDSIuFjqzU8lRmHoC31qHEp0VBUU3XH8UzrwJHSqcJ8O2PbgJQCYkUZJ2rgngXYGbik9JgNBoa5TqkY4%2FdHy5ZMChJMs1ilywenYDe8xNH1cpe4sYHEHc8sUzW%2F0oJjJTyBWh4%2FKxR4iOzNYV29NzFg4s%2F%2B6A6ZZcjOP27oXW7tDZpDmYdd0RGMAyvHKLmPgBcI%2F7jTcFNn%2FgTjNp9K6Rupu3pgSjAzQUzFuqgfiY2n%2FzDdinCXGG%2BoozTML7h%2BQLmIvW7XX6hJRDpcvb2GAsf%2BX8696Mz4kpCs1Zo04rnrzwoQrjt%2BgKVmnMbmXTYHC7EH5ri9Ysp94JTrQJ5v66DbFBKIRzjgziiNzeGSwKktcNuElw8Fmbk1FO9KDsiM8d7ha%2FZ0PIAQqgRsy1ZPtmNHeCjZ4Mi%2FqFDDqP0Pc5wfEevfopOIQUL%2BiNQZ2k12SdJ1MQFkhl1P02U0Gv8fc42veVGYNZ04xXgsXGEr8bwk9UevKNc2ovNoNSRQIrcwk%2FQ%2B303aXaMYmQm68g%2FLIkcR6iNGnm%2FeBVmaXRxubhj5JBzhMJowYFDljbnE%2BYvz%2BDJKlP0ApMfF4UW4T3oXSk%2F81jHV6f8z4%2FYodUkw1pIKomDDdnmrDZq4o0BYkQw6PKlvgY6pgGo%2FWVk23CdwIqEJWnJbDLuLNwwGbS1HH3Fcd2o9UOwnUbePkPmjAslz65SlsPlE6n%2Fcjxr%2B0JxAZ5MltSVS3FCvfuszBYHW%2BWnNLNoTDXIswro3jPRPQ46GbvjlGCBKcX54ah9jyffbO4aFrWNcEE%2F9%2FWJzGIZ8y5FhXfaW5aqQ21m4JMqBTWAWgkw4%2F6sPDZYiDPveyX%2FAd86qr4k4jrKVhZK72sZ&X-Amz-Signature=655b65231fa40e7006b57fc42c77963e289ad3ca0f81a74b1c4def4d23f585bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
