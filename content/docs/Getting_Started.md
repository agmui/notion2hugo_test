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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5DG7IU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpxOHXuluzRBABY4ny8GhtISHRGatz0DjEkl8V5OHY3AiEAv1tJ%2FYw6TITQmsjTae1xyBa9Yg6RfFUICDRbdjBqhzQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCshDwe2NcLyHvChHSrcA1a00%2BZzrBQSWZxXA6LewblKQNwyrKE%2BRiuP9EjO8rj75RW%2FyjbJN%2B8IGt1W%2FYCUTXny90RDjtwn4sSDSYI3OzAm80S7%2FtdR2Pyn69Ly4DTxElQSBRBuCiFvuQENI6zAUeHeNWhuYEAx%2BPQvJp2P5kNxKLni%2FjAU%2BWjOF2ng1cJo6DP3DjQN6KKiikaJOzwprlcQtJa8VfRt4ZA%2FOMrukxsEH0Q6U9KZ1qdsKB2VCAzlht7jMV%2FcqNk2iVRcaIAaqQINd7NJ0vf2drkJUbb%2FWxF5HFoGeCX5m4xZ7Pcl7bJoLi9kIQLkziM6oOfdrU9FuBBAUhL2sk5m9%2B9J8rrNr1yTnGrzGnO4eQXXa%2BSP%2Fh9eb%2FXrXxj4rRF50usN8uqwu2oXfFNQChLCvcHa3Tn3f%2BtzA3ul3AAPMWlabxQ8aTkz840uE1R3Bv%2FbbZu4DoBp%2BVJE%2BmtSdO60kY0%2FSgpB6tqS%2BAlLEVyC076kJG2IISEYxe%2F1lHiJTl3Rct0bf753VJiHEogO%2FjOKreV1iO9I0q7V6%2BH1EjvRVglla3n3VpZJV4wZwhizwfGNuYvBrNNxwjhi4p8IYfFasYs%2Bezma2PnDvr4J0okcC2NdB5qTCcVf3Pk3dpklG33e%2Biq%2BMID9pcEGOqUBDxZOphFmKGHGK2SHA4m2DGRQa3F1i%2FrB%2BepZEzvbYorkn3%2BEfpoNpDnbNkJbu4fq6tTn7qQown2C6v3V5Uag9DKguIvCl%2BA74VuNQlEpqTAFhcz4jvNjYZsXX8VYfk89rKh%2BXg5anVQHi%2B02o8Y42d7bmuWQOcCF2icEIgaa2wM%2Fiaq%2BHXMu5wpOFPRPZ1m4EPngc1nrJYhkEO4KrYd%2Bl55Ce%2Fdc&X-Amz-Signature=4fb9a3cc7a1cb71f67e1d3c06ab8e642207646fde5e8bca50bbc22e4497af325&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5DG7IU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpxOHXuluzRBABY4ny8GhtISHRGatz0DjEkl8V5OHY3AiEAv1tJ%2FYw6TITQmsjTae1xyBa9Yg6RfFUICDRbdjBqhzQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCshDwe2NcLyHvChHSrcA1a00%2BZzrBQSWZxXA6LewblKQNwyrKE%2BRiuP9EjO8rj75RW%2FyjbJN%2B8IGt1W%2FYCUTXny90RDjtwn4sSDSYI3OzAm80S7%2FtdR2Pyn69Ly4DTxElQSBRBuCiFvuQENI6zAUeHeNWhuYEAx%2BPQvJp2P5kNxKLni%2FjAU%2BWjOF2ng1cJo6DP3DjQN6KKiikaJOzwprlcQtJa8VfRt4ZA%2FOMrukxsEH0Q6U9KZ1qdsKB2VCAzlht7jMV%2FcqNk2iVRcaIAaqQINd7NJ0vf2drkJUbb%2FWxF5HFoGeCX5m4xZ7Pcl7bJoLi9kIQLkziM6oOfdrU9FuBBAUhL2sk5m9%2B9J8rrNr1yTnGrzGnO4eQXXa%2BSP%2Fh9eb%2FXrXxj4rRF50usN8uqwu2oXfFNQChLCvcHa3Tn3f%2BtzA3ul3AAPMWlabxQ8aTkz840uE1R3Bv%2FbbZu4DoBp%2BVJE%2BmtSdO60kY0%2FSgpB6tqS%2BAlLEVyC076kJG2IISEYxe%2F1lHiJTl3Rct0bf753VJiHEogO%2FjOKreV1iO9I0q7V6%2BH1EjvRVglla3n3VpZJV4wZwhizwfGNuYvBrNNxwjhi4p8IYfFasYs%2Bezma2PnDvr4J0okcC2NdB5qTCcVf3Pk3dpklG33e%2Biq%2BMID9pcEGOqUBDxZOphFmKGHGK2SHA4m2DGRQa3F1i%2FrB%2BepZEzvbYorkn3%2BEfpoNpDnbNkJbu4fq6tTn7qQown2C6v3V5Uag9DKguIvCl%2BA74VuNQlEpqTAFhcz4jvNjYZsXX8VYfk89rKh%2BXg5anVQHi%2B02o8Y42d7bmuWQOcCF2icEIgaa2wM%2Fiaq%2BHXMu5wpOFPRPZ1m4EPngc1nrJYhkEO4KrYd%2Bl55Ce%2Fdc&X-Amz-Signature=393f5013739d69140e8a7dd3b62de8c06e28add70e44e9c7977a5bf0da15daa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5DG7IU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpxOHXuluzRBABY4ny8GhtISHRGatz0DjEkl8V5OHY3AiEAv1tJ%2FYw6TITQmsjTae1xyBa9Yg6RfFUICDRbdjBqhzQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCshDwe2NcLyHvChHSrcA1a00%2BZzrBQSWZxXA6LewblKQNwyrKE%2BRiuP9EjO8rj75RW%2FyjbJN%2B8IGt1W%2FYCUTXny90RDjtwn4sSDSYI3OzAm80S7%2FtdR2Pyn69Ly4DTxElQSBRBuCiFvuQENI6zAUeHeNWhuYEAx%2BPQvJp2P5kNxKLni%2FjAU%2BWjOF2ng1cJo6DP3DjQN6KKiikaJOzwprlcQtJa8VfRt4ZA%2FOMrukxsEH0Q6U9KZ1qdsKB2VCAzlht7jMV%2FcqNk2iVRcaIAaqQINd7NJ0vf2drkJUbb%2FWxF5HFoGeCX5m4xZ7Pcl7bJoLi9kIQLkziM6oOfdrU9FuBBAUhL2sk5m9%2B9J8rrNr1yTnGrzGnO4eQXXa%2BSP%2Fh9eb%2FXrXxj4rRF50usN8uqwu2oXfFNQChLCvcHa3Tn3f%2BtzA3ul3AAPMWlabxQ8aTkz840uE1R3Bv%2FbbZu4DoBp%2BVJE%2BmtSdO60kY0%2FSgpB6tqS%2BAlLEVyC076kJG2IISEYxe%2F1lHiJTl3Rct0bf753VJiHEogO%2FjOKreV1iO9I0q7V6%2BH1EjvRVglla3n3VpZJV4wZwhizwfGNuYvBrNNxwjhi4p8IYfFasYs%2Bezma2PnDvr4J0okcC2NdB5qTCcVf3Pk3dpklG33e%2Biq%2BMID9pcEGOqUBDxZOphFmKGHGK2SHA4m2DGRQa3F1i%2FrB%2BepZEzvbYorkn3%2BEfpoNpDnbNkJbu4fq6tTn7qQown2C6v3V5Uag9DKguIvCl%2BA74VuNQlEpqTAFhcz4jvNjYZsXX8VYfk89rKh%2BXg5anVQHi%2B02o8Y42d7bmuWQOcCF2icEIgaa2wM%2Fiaq%2BHXMu5wpOFPRPZ1m4EPngc1nrJYhkEO4KrYd%2Bl55Ce%2Fdc&X-Amz-Signature=b40995bc3fd44ffec903c143ad7883644d4bc74eae3eac7726244d338e80354c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GFWJZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATThOPVWwjsQ6Tr7KVHLPRPSOMc%2FyjZR7WjeWnnYPKFAiA7LyIf4dLS%2F1Ldsfm0YArvEw1vbmGeLK%2BXJi50OqFsxCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLBA%2FqL8HrWQGdUEsKtwDiKb1ohx7NCtNwBt25sAF2Vnys6I6BmaS9Io7r6scOQEd%2FkCT%2BzW%2BOmWU6WveJ3K8CbCRsnUVozuU%2FPB9WJMgKCg3%2BVpkkKWrMBUxtUroTaWPUNqb38y56xIaLL9GeQx%2FHz0wtQvBFk0aiTQrS2agU6I%2BNVoy5rzaC3%2BRDfcZYamy2UfJoBjbiLS057OdiE7NkPujjSEM3ph21hHkGtFYnHdHZEQUitFirqrAsB4rT28ZEPUEK2GqTcbILXL0303%2F0wPPTocwXWN9vBMF58eu6HGFWbeMbt7h6WQETCw1iWa9T8R3mdhvHPEbPDiNt17%2BehZkp7LbVKLUwHY4SBZj7PMaYAB2%2FYkjnuwGSyCqOgjGnTuL6Uy6nIBWDXrJ3xlFmaE06R5IXy4kXptMrJGaD2OnIbhWS%2F3WHgvnjVCrgFn3xr3faoA2oq0et3NoZZnWnaV7q5bL%2FixDqvQRElIQsMWDgt0FL4z%2Fq3RzoSUgYD4fES6LDBUIx1NPnkIG15z4JF5kSY6OmXAMOBYk05NXRro2d8ncH4aPnqSZ%2FE8bTner04dm0%2F7C1juggbgCR%2Bb8Jw7QEwPLZzbXtAJ2Nvh2CFJEoz3TivTlRaICaTWMkyzJGwDero3mmH3yjg0wjvmlwQY6pgFcvxhoI9LiIFwrAbV5mePRR0zWwA8x09mtLWiMzb9vjnKqB8NgB6%2BGGmqVSFd0B0esE828kN9aIytPq2HkiOi0pXT5fdGevkwToxPHAi6LuHAM3elFmn3a7vc4vJ4uecHjML0VrSN%2FLf7ECNVE%2BtXNQQaXYjlXPxCygeGK5ao3x7FEMDj7UJgaww5n5efecC3GyTpYmHX6kWUNNBEVEFoQ3%2Fo3Fuhg&X-Amz-Signature=e39630320479a08b5b7708de7cd841aaea37994d16216e8295110ab79e2d514a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UWIIARB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgfmiPtaH6DXTBmazGlPJg7akrffJBt9ekrYtBPwugrAIhAJ09Y13%2BeP%2B%2BXvUCtcfHjpte3vcNvxKbremAdHOa79HEKv8DCG0QABoMNjM3NDIzMTgzODA1Igw6NvNIMsgyxOZu7Wwq3APxdPYsYjsn3NbA3NAjTkODgrA%2B24ImnTH69%2B78td%2FN09xqPOaBjX2YWoWkFJgtzdnS2fil4Ed%2BUXaIgPh39C70ZRMEhS5V78Rjb4DCCCP%2FswrMcRwqekJhZsw1CElsyKKaB87hoM9sa3peqmOFbgjGDFIgJTTuEJ5tU8XEOV6uPAHLEGxY20E1zCnA1OQtHLI1PhbEHFPC5w9pdwF0%2FE3xZkNK3lVlwLIiapmX%2FR77Y6ArFXPJgHOrk23Nhjv4Wc7tNSvPitkfoyuh%2B5PHjU11JFDY6pcx5i48EhmkLzgY27thGYMBj7usQXq2mi3UzhCUQNVJtkJImuqC3XK5m5R4Era9uecrvIdn%2BaUUS4OKgS%2F3wsZajQy9yupmY6x9KZ4XmTdZkYd18fgBmDv0ZLuBiOFzy0BdnK3Y5u8r6GG9aTk9jZ0DDR9qDjvL9M8xBOo5hd594e2csrS1lxC6v6rcyQ7DEwEzIHDg8zJLVFEN%2Fm73cVgLJ9czhRqyyfUrbdMirEblxYAfZQerfW3xKORcFj8ZsuVmfUVrajIaTdwNTE%2FWvJHLQJ8RdHTFfi3n6zJOOq2t5uOls7K0EvhjzkHetNB%2FARbHaVf9oyJ6evNN1H4MN7xMj5STXiayzjCotKXBBjqkAfK4nJLzhZjNelWpWWMfVW2hZ5Ero8hW5OWwTT3nZgJO6RKFx%2BK8kOVtDMgjdLtxzn787LuYB31Isr7p2bpT1SQk6bAfli78ewItKdkfivPr1gXiyoTEAd9Ek3bgM1bqlCJBn0sHLVtZt4azKgYiH6WDUXaI7%2Fb77Th7MqEMGM8Oi6V6pLkoqOLboTrO4CLNn6uw%2FQsNpXeBV0UxZaGzNkJYRxmI&X-Amz-Signature=a2478be952b9c751e6e703bd0a196a20f3ff346746423cbe579767446a5d300e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5DG7IU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpxOHXuluzRBABY4ny8GhtISHRGatz0DjEkl8V5OHY3AiEAv1tJ%2FYw6TITQmsjTae1xyBa9Yg6RfFUICDRbdjBqhzQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCshDwe2NcLyHvChHSrcA1a00%2BZzrBQSWZxXA6LewblKQNwyrKE%2BRiuP9EjO8rj75RW%2FyjbJN%2B8IGt1W%2FYCUTXny90RDjtwn4sSDSYI3OzAm80S7%2FtdR2Pyn69Ly4DTxElQSBRBuCiFvuQENI6zAUeHeNWhuYEAx%2BPQvJp2P5kNxKLni%2FjAU%2BWjOF2ng1cJo6DP3DjQN6KKiikaJOzwprlcQtJa8VfRt4ZA%2FOMrukxsEH0Q6U9KZ1qdsKB2VCAzlht7jMV%2FcqNk2iVRcaIAaqQINd7NJ0vf2drkJUbb%2FWxF5HFoGeCX5m4xZ7Pcl7bJoLi9kIQLkziM6oOfdrU9FuBBAUhL2sk5m9%2B9J8rrNr1yTnGrzGnO4eQXXa%2BSP%2Fh9eb%2FXrXxj4rRF50usN8uqwu2oXfFNQChLCvcHa3Tn3f%2BtzA3ul3AAPMWlabxQ8aTkz840uE1R3Bv%2FbbZu4DoBp%2BVJE%2BmtSdO60kY0%2FSgpB6tqS%2BAlLEVyC076kJG2IISEYxe%2F1lHiJTl3Rct0bf753VJiHEogO%2FjOKreV1iO9I0q7V6%2BH1EjvRVglla3n3VpZJV4wZwhizwfGNuYvBrNNxwjhi4p8IYfFasYs%2Bezma2PnDvr4J0okcC2NdB5qTCcVf3Pk3dpklG33e%2Biq%2BMID9pcEGOqUBDxZOphFmKGHGK2SHA4m2DGRQa3F1i%2FrB%2BepZEzvbYorkn3%2BEfpoNpDnbNkJbu4fq6tTn7qQown2C6v3V5Uag9DKguIvCl%2BA74VuNQlEpqTAFhcz4jvNjYZsXX8VYfk89rKh%2BXg5anVQHi%2B02o8Y42d7bmuWQOcCF2icEIgaa2wM%2Fiaq%2BHXMu5wpOFPRPZ1m4EPngc1nrJYhkEO4KrYd%2Bl55Ce%2Fdc&X-Amz-Signature=ecaa0bca4df2d35900432cbce3cac5ce5eaefeaba6eff1e37eccfb0d36f0c954&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
