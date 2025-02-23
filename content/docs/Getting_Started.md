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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MU5JOHZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvB0eRVQdnSDSiivl7H97ewVtfLJkP9uXh6Ng9QMZ1AiEA1zhQxTxKVM4FuVwdhdysEl2J%2FnaNpgWSbcjGUdXv3OUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc1kg9vG21LQwZr6ircAw9YtugUEMEtda%2FbTWuPMRuU8lG3QrVC2jZ75BrpV6Z3zeqWmqOPFsM3UHlpPqHUc4oqCqUec5bZvWMQGQql62pwkQozG04Td9h1gnAo6vraDDLk9wn8OQ3iWVoV1kIhwnj9INMhkY%2Be%2BuHwXlI3xWYZRcCmbxE4AFM7t2Kl1cLYJyBmDGSZFWnHRAEB3SkrJTixR04%2BEia09kVKjCvaAezhCfdeL9VsPH3nF30SOs226hmUHFS%2FsdVC9PKsIC2hCty0tDJcD0598WVYtBKH%2BFKqGrWrTwXShAGf3%2BZkKkfWBA4dXb%2BKTCbsJCt6utie69dnTbxVzSzivValF1euJk%2FKgsLnd2nvfbaZLMYUMznj%2B8wR80dpvINOau8BaUs18UUV38vtNE15HOyJde4XeF0Ww8QoWWF1ZqrjqNKQjEsZ9x5rlT5QTArsVswEqZCINhIwHXru5GFLknWeqltRtlJwcGGYZFu62lec3YStgWFj2ixJN6otbwbkqsusmFDw1W7HBe6kDzmv7lbnEBi9KZM3d8%2BNAvSsFF2VcseLxeMhNhKzF7BHcbvsP90yptES5l2zoTovEljBtqKUucSt3GOQj8vad%2B2Ebh%2B2Mmf%2Ft7wNcEy%2BlgdwfVGCunHuMKKW6r0GOqUBCOggabr4ORBeGS2Rn0tOdQoyJKsj5A6j3VFlLIu6ubIIE4SVTLiIbpMhwUuTPpMereWej57szXoalC3n1UIR42hQCVBU%2FZUqdYZC3Fp1kdD%2FwuaSJ%2Fkk39IpB2DTZ3YJD0SsdqSSk9puz%2FXnptFYYKp7a4nRecePKxkkgK6riixoe%2FbNqCgVqpwpVub8bFv9O1tp8S%2BDp8wC34pimYy5e6cNBEcH&X-Amz-Signature=e5a5b84e1eeb25b59b6c52a7d46926cbd35df11267d207273438cf92749cc4c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MU5JOHZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvB0eRVQdnSDSiivl7H97ewVtfLJkP9uXh6Ng9QMZ1AiEA1zhQxTxKVM4FuVwdhdysEl2J%2FnaNpgWSbcjGUdXv3OUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc1kg9vG21LQwZr6ircAw9YtugUEMEtda%2FbTWuPMRuU8lG3QrVC2jZ75BrpV6Z3zeqWmqOPFsM3UHlpPqHUc4oqCqUec5bZvWMQGQql62pwkQozG04Td9h1gnAo6vraDDLk9wn8OQ3iWVoV1kIhwnj9INMhkY%2Be%2BuHwXlI3xWYZRcCmbxE4AFM7t2Kl1cLYJyBmDGSZFWnHRAEB3SkrJTixR04%2BEia09kVKjCvaAezhCfdeL9VsPH3nF30SOs226hmUHFS%2FsdVC9PKsIC2hCty0tDJcD0598WVYtBKH%2BFKqGrWrTwXShAGf3%2BZkKkfWBA4dXb%2BKTCbsJCt6utie69dnTbxVzSzivValF1euJk%2FKgsLnd2nvfbaZLMYUMznj%2B8wR80dpvINOau8BaUs18UUV38vtNE15HOyJde4XeF0Ww8QoWWF1ZqrjqNKQjEsZ9x5rlT5QTArsVswEqZCINhIwHXru5GFLknWeqltRtlJwcGGYZFu62lec3YStgWFj2ixJN6otbwbkqsusmFDw1W7HBe6kDzmv7lbnEBi9KZM3d8%2BNAvSsFF2VcseLxeMhNhKzF7BHcbvsP90yptES5l2zoTovEljBtqKUucSt3GOQj8vad%2B2Ebh%2B2Mmf%2Ft7wNcEy%2BlgdwfVGCunHuMKKW6r0GOqUBCOggabr4ORBeGS2Rn0tOdQoyJKsj5A6j3VFlLIu6ubIIE4SVTLiIbpMhwUuTPpMereWej57szXoalC3n1UIR42hQCVBU%2FZUqdYZC3Fp1kdD%2FwuaSJ%2Fkk39IpB2DTZ3YJD0SsdqSSk9puz%2FXnptFYYKp7a4nRecePKxkkgK6riixoe%2FbNqCgVqpwpVub8bFv9O1tp8S%2BDp8wC34pimYy5e6cNBEcH&X-Amz-Signature=a100a8804649aafc9f882db5d9a0ab86d4e4acde06d0ca48c9790086efa3fbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRXOC63%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkDCdmkNV2mZfSd%2B5TPGvYBf8crtbFAxHTc0FnoU3vSAiEA33kBYHiEe%2BDMXVc3vk7WXvIUhR4A%2BMWCvIhRpWLK4LkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiPEtPZx77A%2BSCEoSrcAxOqZmNpOdv2EQxqRhrsPImfYe3QCi6wsrVGjwQKbqGk3Y3sGMeyMVQmO9LVTQx2r%2FhbF05LciNZonEIHAMKpu%2Bvx1r%2B5phvCdaxueSquh9g%2FhI4ZUeTCH86FLvulgy9IWTps5ZerVDhR0B5iowpFcLSMZA9vzAGZQGhyE87L2tTrqpDgFhEK%2FDAjy8Q45NQiXGnkdNNtPx4tfYk4JIpPipTeDRyJGqzPCYa2F3LXt4JXPKCb%2F5DK23InPsWjD6FS3d5NUjBCKjnJcyKp%2BM4ogUkPoBDFhUgN%2F3IzAXx9URsHf0%2Fm0m220vBiG%2F2S8BamPuJ8JSaImZ7dR0O3yL8qbLQWVOOXhRXqqSP0iPk1PE9nE72qrmJZ872Sp6unhu1OlBCfrt8Yd4JuBaO6q3zmYSe3bfwADTbbxtJlEqEG8AHKdjgHyJfs8uPDGBeNErMth05yPMOeJyuC8%2FcF7eOaSpteDfKfi8iLSGH54jLGDMsYDmr84R06O32KtrfVcFN8oUtHXuBjOc5grfBSwJhWe0%2BBo4Z529Z6t2424WUnH3jFlxc9rHJgpoTt9a8HZTY5PsSEuFcY94vQEZ3ol4vsOoyMsR7alxbr7IJgZO%2Fgy%2FN%2FhiytS2qhgiPA426MK2A6r0GOqUBRXknU9lqB0HJX8CZuxP3FfMvFPYxhspKNbtnwRw%2F%2B%2F%2FijKZhv4SjKAKnWcTZJ4BmyOxLaf7SgUk%2ByD35YxJukwqLZjg6XxiglxEPJAZpvBaJDhts2gLx4u6mz%2BBI5jwDR6g53CNo2clF5kSW5f9YBXF2FJCutNyVaUyB%2BfhW7med4R487MKhWfeTFbcQ8NOP3A8CC2GdpnnthdIS6bfWtl7iq4hU&X-Amz-Signature=0e70678bbd61407321ed213f581d04efff09a5138aaf73b22f4b727aa0031dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6HMPPU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsEKvBM8QURMbm7uLFLALL5NWQRdqm4yFnfO%2FyWlHwQAiEAzy1hJ9OYoWBIMXsOSZPbXfHQOt6Yg5oWiZRs%2FSc2CqgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQ8SqEEXvyVmOJiyrcA%2FLcTg%2FLljJDOZv%2FqqURe3WwwDJVqf9PrkM9Q6OTW5ypqGSLSctJAOKziwoPi5QL0LBG%2F%2FJCyBfsLOtaNTX%2Fy9PHKbiQu%2FwVFCGGufNiWcMD838OTsYrKvIykTolCUeRZmzkSnszE0Hz4zru2sJ1I2P1bG2WePfRmv5lTUebtdcB6wQPRkwn3BA4xFtVCXV2I2HJE4mxxyexakZgy35BWTTsmQqepeKZXbytJSczS2djubgXkLRYymc5tO2J5IOrDI%2BAP8qXGrQjfudUyDUu8nqGPvWz05RS8tiHelrkVoU9pl%2BJJL47HZIc6proHkcOM4m%2BPc%2BfQa%2BIHRf9YDBGgSDhxgCbHTeQ3gz%2BKOtTMOSnvsW7FvzOMW8OkxT8Cw09Dh6CM7cKuPZcPi0LBlQd0hqA%2BScL6hNRXAEQK0sQqmrsxZSIF1yw1ABIcBpRlwRgjkyBg8mTY48A7ZH815rabEFx4ei2uI5POYcP31Lg5AikZE2Fs%2FsfsbmdQ7AlzNo9tfnwMarZf9dcFsVhpXCs3ZuPnUIGte%2BP3K5Xvd01yWSrQilKRXoKsidfzmtKkdrjX%2FPhP0cokAnL%2FB7bvtoWQ1EmtJLvzMnMDnPazyYiWfqdfZvQi9h5bgGkwMk7MJ%2FC6r0GOqUBVrKWRc9kGHU1attQFBcvWUVYQNspX4zsSpATGNiU2B8nP4t62oVmUfgTdazn4VanKztYGSl13OZsV%2BiT5IH%2BcEAo%2B9hzBMTn009BkCh4GW7UwqBwA4nM8ccXxP%2FK5s3V8VbZrEr7EkYB63ezshVBi7TMGiny5zoLeIu3GEHayIn0h8qdLWs7wXEhNp7kYVCUu5OsxlBYHwlig%2FcB%2BnhL8CZ7qENS&X-Amz-Signature=6eb50fdd80f7a4d9b0086ba084285e8a618de3483d57efc66173d813b3cc533d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MU5JOHZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvB0eRVQdnSDSiivl7H97ewVtfLJkP9uXh6Ng9QMZ1AiEA1zhQxTxKVM4FuVwdhdysEl2J%2FnaNpgWSbcjGUdXv3OUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc1kg9vG21LQwZr6ircAw9YtugUEMEtda%2FbTWuPMRuU8lG3QrVC2jZ75BrpV6Z3zeqWmqOPFsM3UHlpPqHUc4oqCqUec5bZvWMQGQql62pwkQozG04Td9h1gnAo6vraDDLk9wn8OQ3iWVoV1kIhwnj9INMhkY%2Be%2BuHwXlI3xWYZRcCmbxE4AFM7t2Kl1cLYJyBmDGSZFWnHRAEB3SkrJTixR04%2BEia09kVKjCvaAezhCfdeL9VsPH3nF30SOs226hmUHFS%2FsdVC9PKsIC2hCty0tDJcD0598WVYtBKH%2BFKqGrWrTwXShAGf3%2BZkKkfWBA4dXb%2BKTCbsJCt6utie69dnTbxVzSzivValF1euJk%2FKgsLnd2nvfbaZLMYUMznj%2B8wR80dpvINOau8BaUs18UUV38vtNE15HOyJde4XeF0Ww8QoWWF1ZqrjqNKQjEsZ9x5rlT5QTArsVswEqZCINhIwHXru5GFLknWeqltRtlJwcGGYZFu62lec3YStgWFj2ixJN6otbwbkqsusmFDw1W7HBe6kDzmv7lbnEBi9KZM3d8%2BNAvSsFF2VcseLxeMhNhKzF7BHcbvsP90yptES5l2zoTovEljBtqKUucSt3GOQj8vad%2B2Ebh%2B2Mmf%2Ft7wNcEy%2BlgdwfVGCunHuMKKW6r0GOqUBCOggabr4ORBeGS2Rn0tOdQoyJKsj5A6j3VFlLIu6ubIIE4SVTLiIbpMhwUuTPpMereWej57szXoalC3n1UIR42hQCVBU%2FZUqdYZC3Fp1kdD%2FwuaSJ%2Fkk39IpB2DTZ3YJD0SsdqSSk9puz%2FXnptFYYKp7a4nRecePKxkkgK6riixoe%2FbNqCgVqpwpVub8bFv9O1tp8S%2BDp8wC34pimYy5e6cNBEcH&X-Amz-Signature=d3bb9be623ab4c33c4f9f774e3557fd6a1ae73d970ebf3b460b195d569ea4e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
