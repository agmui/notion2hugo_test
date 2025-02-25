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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PYD5AJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGoGzM0LhdwAOXOQws4hPDJJeENBdychKi24gXEfKJQ9AiACTFzZm86QPH0s1sTv0jIlIBH72fJv%2F1X1Wlohoo0Wfyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMbQfkSmnigoNiRLsTKtwDbKlvUNkSXLXC9qLxbipsxE7nJFQST6yKiaFQxobsLCufJW1DoM%2BMrRwq82On2a5cTzOn3GK%2BGsjMkfr3gFCRgVxhmcC2wNLe%2FaXEb3GCEKpY8Oab3VPS1G4QqM6FXQG7SCLoKQqyi9LP6uQOrDdYx63iu%2BhGTaEFlG7x5%2FXgPsEFKroCQQQFfPk6kpWdEh5igU4fT4zq5ChBa1KfVE8nYecDLF8B1CJVcbSxVWXqjWVBpEF5OMLi5j1gVALVRCQJCemXYeM4W3oE0W3rUal3N1o5rDD42OELXz46DPRu5Zx1Kmn08vyXe7AZ1feYYXw9fnLGRPPdrR58HKnFmyW4AcXZJcCQPsCmYgaDZ%2F88k4CgTlEnNdlgZo4bha5M0mwgD11BWzeEtdJubLfQQE%2BKan6%2B9zBneGX2%2FZJ88p%2BDunRvNnU6fl5OSsOZtnU8hqUVi6q0I6vrjqmsF5teOe9CSXqzex3Duadcmi63%2F2YXXFXsG8sp1on3zlxivysxaJ9qCMjIRCAaI41sc1ZK3tr1lRS4GAAge76CiIsxMV2GAjLkvAwBTsIPoz6xGXgQ1zfT7z7DCt1xObnzgCRfXdsayQA82Ycmc1797QN%2B%2BEl%2BAPaJl1r%2Bqc8uT2loq%2FQw5qL2vQY6pgF6Hic%2FN9AM6SbJ3jfBLJzDPN5rg%2BiI4j047pdWZYgHgHaExYGIbBhvuZHcjYR9TIVkoUIeDM4W17py4fsiWALTHT2HzSDRAaXybAIWX8Sfj9HLfT10Fw5cdcLOwQzMlONqiglezIfpYfhLPGAaAsRNhvR6RjVQG%2BWAxFjHDmLu%2Ftn4OiS%2BiitmfkHXCbAylmU4fwDKIREplp9JqmruONYorJ53wice&X-Amz-Signature=e405c0c2594b7f3a96ec2c6ac7ade01858eb4d23b1561008326a1ef8717329f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PYD5AJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGoGzM0LhdwAOXOQws4hPDJJeENBdychKi24gXEfKJQ9AiACTFzZm86QPH0s1sTv0jIlIBH72fJv%2F1X1Wlohoo0Wfyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMbQfkSmnigoNiRLsTKtwDbKlvUNkSXLXC9qLxbipsxE7nJFQST6yKiaFQxobsLCufJW1DoM%2BMrRwq82On2a5cTzOn3GK%2BGsjMkfr3gFCRgVxhmcC2wNLe%2FaXEb3GCEKpY8Oab3VPS1G4QqM6FXQG7SCLoKQqyi9LP6uQOrDdYx63iu%2BhGTaEFlG7x5%2FXgPsEFKroCQQQFfPk6kpWdEh5igU4fT4zq5ChBa1KfVE8nYecDLF8B1CJVcbSxVWXqjWVBpEF5OMLi5j1gVALVRCQJCemXYeM4W3oE0W3rUal3N1o5rDD42OELXz46DPRu5Zx1Kmn08vyXe7AZ1feYYXw9fnLGRPPdrR58HKnFmyW4AcXZJcCQPsCmYgaDZ%2F88k4CgTlEnNdlgZo4bha5M0mwgD11BWzeEtdJubLfQQE%2BKan6%2B9zBneGX2%2FZJ88p%2BDunRvNnU6fl5OSsOZtnU8hqUVi6q0I6vrjqmsF5teOe9CSXqzex3Duadcmi63%2F2YXXFXsG8sp1on3zlxivysxaJ9qCMjIRCAaI41sc1ZK3tr1lRS4GAAge76CiIsxMV2GAjLkvAwBTsIPoz6xGXgQ1zfT7z7DCt1xObnzgCRfXdsayQA82Ycmc1797QN%2B%2BEl%2BAPaJl1r%2Bqc8uT2loq%2FQw5qL2vQY6pgF6Hic%2FN9AM6SbJ3jfBLJzDPN5rg%2BiI4j047pdWZYgHgHaExYGIbBhvuZHcjYR9TIVkoUIeDM4W17py4fsiWALTHT2HzSDRAaXybAIWX8Sfj9HLfT10Fw5cdcLOwQzMlONqiglezIfpYfhLPGAaAsRNhvR6RjVQG%2BWAxFjHDmLu%2Ftn4OiS%2BiitmfkHXCbAylmU4fwDKIREplp9JqmruONYorJ53wice&X-Amz-Signature=2382c433fec517d89f688c4a5471395859facefa47b9aa1bcba9fa2e9a4e659c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRDXY7KI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDV1jWNjPkq3QxWnSXLhJqMsr3SRfpVFgkRf3rm61xhNAiAM8sdX5RelxnCQ%2F%2BLMLKv5TOxUwsU1sA7zOKgvGqtbnir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMaLqXNCI8%2B3EwxqhUKtwDCsFDq1yQG1Ei3jcTyR72KcLm%2FCtq%2Bnay4X5dFBe%2FddUnvZ0UVJxgHzZzxsS9ybjKdcCcakFpQ7XRrVSikR5Dipy3S89J3ewkveBocoMpUgEiMbNMpGDw%2BqSWd3AyniIGXg9OZR2JAy6UEN5c79r3t4j%2Fzwiq403x708oimMxm%2FLOdUvLs1TFztY2vV8DjxcV8Fk2J1yt%2FcpGjrIf5J7oE%2BWcvR5B8Khvmp2V1P48mEj9kBb55Xz3e0ktOPcN3ULp4406zl8cfwd%2FbBqGrjBMy65f9A5B8%2BqKkxOBcaLIhoki6rYTuq8QLHrBw9xrYfr%2FKrS1yGsw5d4syjxRXglLFtD1NaGt4ceuBydu6iMEZrA0Ig6hs2pI44BUyM37PvTTnP%2F25ovCfeQciJfHHdf%2B3KJ3Fx4%2BwavySIATQi6CV53d3P0crWjQ916EZvZIKB1tsjFpA70iGCcLiIfXWivJD3DMvOdBQIUVcq4weFxRZyFK7rX92kaG5NVPs1NREkLLz%2FA8f5OzLfMlY44yVIk7t7ia1uyWyJl%2BOYnGE6QdNBnKQb7fvnJKZ9MoPs3yYet4SavCM4EeSwUVARw9NvbaIjw2ZM4l7OIlmo8Pr4EexAQ76Z%2FS3vNuqq%2BoP7Aw6qL2vQY6pgGMRJ6xAiDBSVz7UPn0WxDmV6f%2ByrAPlFO9LU1wqb3Kqi8QToybTf95UpHX%2Fjk%2FPWJmkB%2Bl%2Futton%2BE3xojKCIBOg2Te9IsyQmUSPTQlfFJ1YIQQ4aiJYOSIBlYOZI5nNfdWwd0Kjlr7Aqvqi8bNnAAZe41Y4l0dJnyK2MT94UZQSDTE01LikyY7o4%2F%2FmKBsL8WOeJiWItu1M2dx%2FGfdFrxY0SOr5Qy&X-Amz-Signature=090d9ef3815622fa9923386adb3c9e5a82154059d74d63182a4733667555849c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGB2H6H%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDQHal8oCf%2FWJUfaqhEQKBWQ7i9tad4gVsMTH64AOeN7QIgaMq7jbUb3KNDrS6wElxP%2FUT1oiNyELnMKtDyP%2F2FrIgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEr6KGBTPOdFRAc38CrcA2cjsBeiK4%2FURcWN0moDbkPR9JX260isg8h1wEuumSBWjUKGkoBkiHWoQVDxKArRIYesQVjOLukrKuVj0rlx6Gi9wRQFCJ%2FilLRYrI9h3rby6C0M9j5vHSomHJL9D1HWj6HyLt%2FDBoHxHTDEESIK%2BV5baxNJtbbXZ1nkyeu%2BOXW03veGJjkounZJhxz%2F%2BOiZ8d7u73PLhdxKObK2ztEkTbrBIrhuwS11Sarr0ig3GmI1PVIapVFdHKx5KqwzxWX7RG7ddsF5a3hooCC3%2FVcMwb3KfvTiz%2BYkeRjO3gpc9rsoCcn2dVi%2Bg5sdJSaUjmoBi7q0qJLd4ZMFJATlqHsXlDKvt%2FFDr4eCiGL1AvsUEjxMdjzpWXPo3OY%2FD5r45Wwp4%2F8Mzd%2BbgQDsPlhp4sFrLhvGkJUM5ei0vLNgY3A62ekUZCMvspmDXiFyzTbdguHIKW156WgTay0%2BoArTpNL30DQkwIjk873rgIsCPkvuBS3jmIJvGMqDggU9b1D8ZQKyE0Mh5Pb84%2B3qgxUiQny6vscz6HAQL%2Bbl38AvY2RPt9SZEs0Xm5066RcLZl4%2BPVpggRdxrYdqj2z1J6VQo3S3oEQUL4Q3bn96YM0g14bap%2BYpcX7W9OTD6iX5G3OKMMSh9r0GOqUB7L32Gz%2BEnMrJ1bnBQicXX2z0MGzAOez4%2BgLXCNnSRrxQZilyXLF2xWFKEBn4pIvNPglggaw%2B11yrrj6FRBje%2Fl9GH8JdvedU10FnBixGwMCbO4InVwF5xlJkrcK%2FtxgfLnVFzPd5eYhQexYXZM009qzCFl7czYjtlmU5NMqAsBMtfYY2U966mYbyPTVsp9BDnIqesIQ1eup8ifTQOW3tI68ObGAX&X-Amz-Signature=e7989dd7dfbbd580f07695fa68f8998340e6ea8189b1b44952c250d3cfaca945&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PYD5AJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGoGzM0LhdwAOXOQws4hPDJJeENBdychKi24gXEfKJQ9AiACTFzZm86QPH0s1sTv0jIlIBH72fJv%2F1X1Wlohoo0Wfyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMbQfkSmnigoNiRLsTKtwDbKlvUNkSXLXC9qLxbipsxE7nJFQST6yKiaFQxobsLCufJW1DoM%2BMrRwq82On2a5cTzOn3GK%2BGsjMkfr3gFCRgVxhmcC2wNLe%2FaXEb3GCEKpY8Oab3VPS1G4QqM6FXQG7SCLoKQqyi9LP6uQOrDdYx63iu%2BhGTaEFlG7x5%2FXgPsEFKroCQQQFfPk6kpWdEh5igU4fT4zq5ChBa1KfVE8nYecDLF8B1CJVcbSxVWXqjWVBpEF5OMLi5j1gVALVRCQJCemXYeM4W3oE0W3rUal3N1o5rDD42OELXz46DPRu5Zx1Kmn08vyXe7AZ1feYYXw9fnLGRPPdrR58HKnFmyW4AcXZJcCQPsCmYgaDZ%2F88k4CgTlEnNdlgZo4bha5M0mwgD11BWzeEtdJubLfQQE%2BKan6%2B9zBneGX2%2FZJ88p%2BDunRvNnU6fl5OSsOZtnU8hqUVi6q0I6vrjqmsF5teOe9CSXqzex3Duadcmi63%2F2YXXFXsG8sp1on3zlxivysxaJ9qCMjIRCAaI41sc1ZK3tr1lRS4GAAge76CiIsxMV2GAjLkvAwBTsIPoz6xGXgQ1zfT7z7DCt1xObnzgCRfXdsayQA82Ycmc1797QN%2B%2BEl%2BAPaJl1r%2Bqc8uT2loq%2FQw5qL2vQY6pgF6Hic%2FN9AM6SbJ3jfBLJzDPN5rg%2BiI4j047pdWZYgHgHaExYGIbBhvuZHcjYR9TIVkoUIeDM4W17py4fsiWALTHT2HzSDRAaXybAIWX8Sfj9HLfT10Fw5cdcLOwQzMlONqiglezIfpYfhLPGAaAsRNhvR6RjVQG%2BWAxFjHDmLu%2Ftn4OiS%2BiitmfkHXCbAylmU4fwDKIREplp9JqmruONYorJ53wice&X-Amz-Signature=106b09aa1a7c35fade7223b1eb63ed0772988630492e50f601377f265e9fb2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
