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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQI5UL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmeKUA6IS817gveiOioiBF5MlQertFVCZx2IQcvxhhTAIgRN%2BVmn71zwc2JHr9JeXrDf4lb1SZyLAy%2FbvfmYKbKdMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOm5LDROZNWCnh0lkircA9RCj%2FyKfhnOmoac5ewprf1M2OTCbhSYxSi%2F1REnygX2AQjvrD0yXbPhuj7JPbCPLG7xggT7RLM5m0hwOdmIuP0yUthcNkspA%2B3KKb%2BLvpcd3NnLtKIz%2Fml%2B1qAPVNKXafFZR33Cu4%2FG5yz1IkVAqWdG%2B7qKKRrg%2Bmi282t3A%2BS9%2Bnpj2lLBoWS9FEMqyA17OQpCOon5L%2Frgy61TgLRsD1k1JB7tZGnMadL8Yc9iGXLsThRzMIfsFFlFyPLW%2FiQRHbhs5WNpmJZ7Ir5JPlXg%2BVP%2B5Q1aj4YZEEi86jW5M4NYtwfu0uyXIvmSmRcZBJyHA93SazZZ0lA%2B%2FcgLG2ItKqH%2BpqAPLeM4MM571idwSyD6XTl%2Bw85mPoYJIXn5DItNGuVWvmvDOh0KrolJtYgzOHB9Ddu0rnZQOQVc94CphM33l86N5qxmx%2FAbpC%2BN8c4B7OaKKIRHthkWdZKLV5DCv%2Bg89MwbcvVU0RPdKFrcNzMhLc3MyI7o2VW66hHcbADHJg3unK6RHY68L6ag%2BN788%2F8%2BInuJcV4w2oari9tZ%2BW%2Bt1IafgZpOBja%2BW7bD9y5RhiJH4mhVU8bkYB4At3f5Azq2IlhgglS8Lx%2BADXE%2Fv3mpDaO1wDG6muZjB34DMK7Qr8IGOqUBqvAqKsmcUAv7mjHMicAbfY%2BiUi9xFux4bqSZYprOpB6SzL4nFAv1FrEMn6xNybVq%2BqpuT7MBDG4J%2B32H5mKXPQXcksIJRcf0CjVAAYHC8j5o2y5JXn8vnjiqWkYqEyv1IqyZ9HyZ9hf%2FIkGJ2RTtnT5stJBaqHaRdkSOIHo7%2BAjQSIIsIA0zcu5OD%2FnXl9f5NBXODX4KpnYNcWKABuqFLzdTpP6q&X-Amz-Signature=2771bd07469fa4fdc95fc2a4b483ef1e50c9462864e939837e351050eeff579c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQI5UL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmeKUA6IS817gveiOioiBF5MlQertFVCZx2IQcvxhhTAIgRN%2BVmn71zwc2JHr9JeXrDf4lb1SZyLAy%2FbvfmYKbKdMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOm5LDROZNWCnh0lkircA9RCj%2FyKfhnOmoac5ewprf1M2OTCbhSYxSi%2F1REnygX2AQjvrD0yXbPhuj7JPbCPLG7xggT7RLM5m0hwOdmIuP0yUthcNkspA%2B3KKb%2BLvpcd3NnLtKIz%2Fml%2B1qAPVNKXafFZR33Cu4%2FG5yz1IkVAqWdG%2B7qKKRrg%2Bmi282t3A%2BS9%2Bnpj2lLBoWS9FEMqyA17OQpCOon5L%2Frgy61TgLRsD1k1JB7tZGnMadL8Yc9iGXLsThRzMIfsFFlFyPLW%2FiQRHbhs5WNpmJZ7Ir5JPlXg%2BVP%2B5Q1aj4YZEEi86jW5M4NYtwfu0uyXIvmSmRcZBJyHA93SazZZ0lA%2B%2FcgLG2ItKqH%2BpqAPLeM4MM571idwSyD6XTl%2Bw85mPoYJIXn5DItNGuVWvmvDOh0KrolJtYgzOHB9Ddu0rnZQOQVc94CphM33l86N5qxmx%2FAbpC%2BN8c4B7OaKKIRHthkWdZKLV5DCv%2Bg89MwbcvVU0RPdKFrcNzMhLc3MyI7o2VW66hHcbADHJg3unK6RHY68L6ag%2BN788%2F8%2BInuJcV4w2oari9tZ%2BW%2Bt1IafgZpOBja%2BW7bD9y5RhiJH4mhVU8bkYB4At3f5Azq2IlhgglS8Lx%2BADXE%2Fv3mpDaO1wDG6muZjB34DMK7Qr8IGOqUBqvAqKsmcUAv7mjHMicAbfY%2BiUi9xFux4bqSZYprOpB6SzL4nFAv1FrEMn6xNybVq%2BqpuT7MBDG4J%2B32H5mKXPQXcksIJRcf0CjVAAYHC8j5o2y5JXn8vnjiqWkYqEyv1IqyZ9HyZ9hf%2FIkGJ2RTtnT5stJBaqHaRdkSOIHo7%2BAjQSIIsIA0zcu5OD%2FnXl9f5NBXODX4KpnYNcWKABuqFLzdTpP6q&X-Amz-Signature=a6c397f9529a03a2ab4d0e8c2357a0e072641e05479a5d67be571abf8f46a407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQI5UL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmeKUA6IS817gveiOioiBF5MlQertFVCZx2IQcvxhhTAIgRN%2BVmn71zwc2JHr9JeXrDf4lb1SZyLAy%2FbvfmYKbKdMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOm5LDROZNWCnh0lkircA9RCj%2FyKfhnOmoac5ewprf1M2OTCbhSYxSi%2F1REnygX2AQjvrD0yXbPhuj7JPbCPLG7xggT7RLM5m0hwOdmIuP0yUthcNkspA%2B3KKb%2BLvpcd3NnLtKIz%2Fml%2B1qAPVNKXafFZR33Cu4%2FG5yz1IkVAqWdG%2B7qKKRrg%2Bmi282t3A%2BS9%2Bnpj2lLBoWS9FEMqyA17OQpCOon5L%2Frgy61TgLRsD1k1JB7tZGnMadL8Yc9iGXLsThRzMIfsFFlFyPLW%2FiQRHbhs5WNpmJZ7Ir5JPlXg%2BVP%2B5Q1aj4YZEEi86jW5M4NYtwfu0uyXIvmSmRcZBJyHA93SazZZ0lA%2B%2FcgLG2ItKqH%2BpqAPLeM4MM571idwSyD6XTl%2Bw85mPoYJIXn5DItNGuVWvmvDOh0KrolJtYgzOHB9Ddu0rnZQOQVc94CphM33l86N5qxmx%2FAbpC%2BN8c4B7OaKKIRHthkWdZKLV5DCv%2Bg89MwbcvVU0RPdKFrcNzMhLc3MyI7o2VW66hHcbADHJg3unK6RHY68L6ag%2BN788%2F8%2BInuJcV4w2oari9tZ%2BW%2Bt1IafgZpOBja%2BW7bD9y5RhiJH4mhVU8bkYB4At3f5Azq2IlhgglS8Lx%2BADXE%2Fv3mpDaO1wDG6muZjB34DMK7Qr8IGOqUBqvAqKsmcUAv7mjHMicAbfY%2BiUi9xFux4bqSZYprOpB6SzL4nFAv1FrEMn6xNybVq%2BqpuT7MBDG4J%2B32H5mKXPQXcksIJRcf0CjVAAYHC8j5o2y5JXn8vnjiqWkYqEyv1IqyZ9HyZ9hf%2FIkGJ2RTtnT5stJBaqHaRdkSOIHo7%2BAjQSIIsIA0zcu5OD%2FnXl9f5NBXODX4KpnYNcWKABuqFLzdTpP6q&X-Amz-Signature=01d5e08c85f399a9718118b21fb03b47c6d51cb5fca00d5adc13345eb260c27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PO5Z7G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHr02yGJoXbrT8fFFcQqo0tZNDOrUoBjr7A4yIzVHUbMAiAt83CdQmedy9t5avBOfflfX7J6oIqAQITs5Mpo9OGe3Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMOcnzTKe86TLMrIPgKtwDQ9e%2Fs3nYv9zBVjKFEfqvm7ZqWVguW7tinZJVFri1vRlepC%2B%2FBD6vRmPjFSGlY%2FnMditxs7poZMs1y3cpkx%2BmlfdE%2BO3p2tTi6Xm4iI7raitjCvbK5LwNdajcxgfbZunL1%2FKWL3q2JsK1O5EE%2FGiKnS43htTN0HlVon%2Byrv%2FOveIJNI%2Fzdtv5NLxHCevH%2Bc4YBTK1U01CMDfW4XGCTGBbuY6LQPGc3QIwKcRpEH%2BBr0eNMLYoLadlgzMZnPyizZVFHyGWAW0w3rVwTA6OxQBW1jqWPrcamEUw%2BhgEfB3WPePh%2B5diw2Skwu1fwBkIDLtGWF5BufwTOsdU8RzgFj2Dxs%2B%2FsB%2BU1uvWj2qNNC%2F%2BWOHF75pyPHx47vU5d1ffRfm08Z5SPAWP6%2FTT1jfhBrw28whbAcnJqRFFzzYBE9QedDaRa0EVXxGeqLK%2BZt6YWy44DPl%2BqJ0P4uCDAPRjCf5eBmHj50lwusc9qaDuq%2B2aINeBwVl8nRNH7kFn4AQy19Lz6ohwxcB70Ogjd0L2i31de8anCiNnQC9wyhskYDAhX601mUvld0LjdtQIEC21sb%2Fat2HNy1DWY6RawgDXR1s4OGvHtrIONcNy0FpdZ9ghMnDZU04drFc4pDstouMw7fSvwgY6pgFrAvkSER992yucpDuBPATTkezLfaDzwdNzb91QzlpbOKnrY3LiQQ%2BUbj2PVqZtjkS5O9rkChnLpRVm37pr4uJQGEiab6MusE1aFYh9%2BJnOHOygSPMaKrt35w69W8bUB%2BqVUi%2F1OJCGn2V4e3HM1UgDFi2z6ikPdMlavKUsYIw8KjmLESvJFRJIwL2j2P4M9rlsGL%2BsuLJpoX81w556lKU0dm1cQ58y&X-Amz-Signature=2a4b62f2ad83ffd3342c53fd88789c2d874a3b9eb9f067b74a9f6a9097a6d317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BO35QN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGeG8oa3yzsghYp85OzaJa%2FiWOBdnhxLpfvonIkgySXVAiEAyqUykzTaSDVW1u8VUFGAZnk4Hex0T2E%2BkCDSHQhHvJAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHeI%2BbPD2DXjJh2awSrcA0r%2FuJCfkNcnfV%2Fk91DwlsEyQxXq66wTGH%2BH4nA8Ebu1pyTW7whP%2FHi0i4%2FDhILooPZp%2FVMeufwGpsHqDNY3GRJR7WyftWvD8VyF6r6uy8d7XkthTCgJrmVKMGV6uow6kFoNGNMLEiPEe8lSVghOXcbTJCP0pl%2FGQf48XZ%2BB9K%2Ft%2F%2BtgnPR2QCzHF%2Bb8qepfG4wqtOb35kTUnZAjxpMCCUpZBJbaxY7toISpNkmSRbFFqzPOHe3eCIRFycFDfHleEm2SA813u42LNuXgWUUTaNI7OEi2ROju%2Bv4%2Btx7bc1ukGvP%2FAfY7%2BPbL3Hb05nsWJ9qm44ZF3lJo4LJGGaeCXE07hFd3MAvpIkSO2lC6M2S5EGGDDk3l%2BOjOxzcAASiOBn7jML2BoNEibbBxYT1xCDEh9fMCPk0li91mArLu%2F%2F5aUyetXZsfz9JK3HA5smYpUXyPLTumMPGYzBDNDxQYiEsj8vVObAFZDFWe3FZtb%2BYJQ3cPvwvsxywN3%2BYnTYZbzJK050UqhQsdN0neCq5whcf5z02B5mBb7diJl1rvlyZTpm6Mtugn6O8oH0ajjdHNkDkhdx4%2BwmBI%2FQa1GFGNDvLAN5Atrj%2FRdXeIoQGygQYuuArcUdCXeb7gK0JZMPP9r8IGOqUBEQk1mudexIEpTGHaOGRoclcUYXbmsgvXtIEUZlhRoNQz%2FFIl5AYSGJOvaECF5f2624RFw15ElPlxNbRMxbxXE5S3qPQO0a%2Fu2r4m%2BnArhQDuvn4cnmHMh3nV%2F4Gx9i5Un%2Fa7JXpiFCqmADNG1H445XF92%2BOzinDm3gfw%2BKISPyC3xBdNC8YHhqNR0NH0LmXuiGqqIOUYqKWTbnXGzUOfv820moPH&X-Amz-Signature=f05cc9ecf65191f66b1e9d76e5727aa53b640a80f4a14999c5d22d85cd533b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQI5UL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmeKUA6IS817gveiOioiBF5MlQertFVCZx2IQcvxhhTAIgRN%2BVmn71zwc2JHr9JeXrDf4lb1SZyLAy%2FbvfmYKbKdMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOm5LDROZNWCnh0lkircA9RCj%2FyKfhnOmoac5ewprf1M2OTCbhSYxSi%2F1REnygX2AQjvrD0yXbPhuj7JPbCPLG7xggT7RLM5m0hwOdmIuP0yUthcNkspA%2B3KKb%2BLvpcd3NnLtKIz%2Fml%2B1qAPVNKXafFZR33Cu4%2FG5yz1IkVAqWdG%2B7qKKRrg%2Bmi282t3A%2BS9%2Bnpj2lLBoWS9FEMqyA17OQpCOon5L%2Frgy61TgLRsD1k1JB7tZGnMadL8Yc9iGXLsThRzMIfsFFlFyPLW%2FiQRHbhs5WNpmJZ7Ir5JPlXg%2BVP%2B5Q1aj4YZEEi86jW5M4NYtwfu0uyXIvmSmRcZBJyHA93SazZZ0lA%2B%2FcgLG2ItKqH%2BpqAPLeM4MM571idwSyD6XTl%2Bw85mPoYJIXn5DItNGuVWvmvDOh0KrolJtYgzOHB9Ddu0rnZQOQVc94CphM33l86N5qxmx%2FAbpC%2BN8c4B7OaKKIRHthkWdZKLV5DCv%2Bg89MwbcvVU0RPdKFrcNzMhLc3MyI7o2VW66hHcbADHJg3unK6RHY68L6ag%2BN788%2F8%2BInuJcV4w2oari9tZ%2BW%2Bt1IafgZpOBja%2BW7bD9y5RhiJH4mhVU8bkYB4At3f5Azq2IlhgglS8Lx%2BADXE%2Fv3mpDaO1wDG6muZjB34DMK7Qr8IGOqUBqvAqKsmcUAv7mjHMicAbfY%2BiUi9xFux4bqSZYprOpB6SzL4nFAv1FrEMn6xNybVq%2BqpuT7MBDG4J%2B32H5mKXPQXcksIJRcf0CjVAAYHC8j5o2y5JXn8vnjiqWkYqEyv1IqyZ9HyZ9hf%2FIkGJ2RTtnT5stJBaqHaRdkSOIHo7%2BAjQSIIsIA0zcu5OD%2FnXl9f5NBXODX4KpnYNcWKABuqFLzdTpP6q&X-Amz-Signature=47c2c49fad73b49f0bddc4f0377fb754fe0f03b988ca227708cfcef88043af9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
