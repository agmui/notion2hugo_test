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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYGZNNR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC%2B4QxR6%2BBZV8FHgoDOCasNqBY8Ak8BVjbEkoYjrysJUgIgLvU1v7taDTZm5BC0IiUlqcIKgNL0rGZrcUVxCbKFZicqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSS7o2hGJaUaxIPHCrcA8mG4B9vRjzOV4oQSRhrojLscLFHlS3JDUMf76MwHh8zfUmBr4hF5rAObiEM4di3FUnoE19lrTpB9Dd1hJddlGnNLa2BIIMKmR4MYhDOWChRkqCKg0G2yfOHXtPT3fdOuVo5kJVqpEFNO9ByQPveQZFuiKt53656GQje8lOOiNJhnkSGCdAQIE6bzRu5UMHvjIEJJPpFJgb6eZTcsKWttHOTvWqIly8lpKY9NUMenuj69CL6W3ZsRllWL%2FlrrmsB56VntvV0St31tYBEvps610UsGqs5H6R7jkA%2BviXzP2eNGc59jZfzqx0MNHf39lJhWWiLOmcCAyCZGJG4NKhBpN8NX9YsNW8CoRfCywLKq4UrgujoHmw%2B6Wl5IbmrnKKX7jHNfGyMo%2BMLC6l2cue1VvjQjdc0iKYRjBWbffChr%2BmW%2F5SxVONJ%2FfbSWh%2Bcokp3SyloxjjO8YPhG3lAf9EjwFP6EbufOG6VCmuCVlob1bIugKSwDgPEBHMQGCA9q9TUte2kpAgx25ys18Uo2Z3DaYjOGEAlzJmLk6ybkh%2BShbQdO9d7qMNHItGLIx2hMEelqMUeq%2FUmqOe2VpWSvT9Q%2BakGu9fAYEEqqMsAwLoOBbRdYh%2B2OAAmQq6ti%2B67MLa5874GOqUBxgIjmqV%2BU0KyGWPb8v1FrWkrWLACMNje3gLbu%2FN%2B1cvl8JAvi3ac63z9wZg%2F7Es6wtoQQqk6dWLhrEQEuUlFp4uH2R6lgSpaRyhDo%2BQOnJ4CvdqRz%2BVmBJFuxy5G%2BDpOks%2FJD%2FV2UOt%2FXvWpC3d%2BqJIr5MFgzEF6JGRTgJk13rlqwk01DuTdf4Er70Bfzu1kpinGaxqVinPSFhDjAf1BwFuh6f0o&X-Amz-Signature=64ca0dfa4ed848655ffd3d3c463b589c12d1956b8663b983b6fb78dac71fe09c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYGZNNR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC%2B4QxR6%2BBZV8FHgoDOCasNqBY8Ak8BVjbEkoYjrysJUgIgLvU1v7taDTZm5BC0IiUlqcIKgNL0rGZrcUVxCbKFZicqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSS7o2hGJaUaxIPHCrcA8mG4B9vRjzOV4oQSRhrojLscLFHlS3JDUMf76MwHh8zfUmBr4hF5rAObiEM4di3FUnoE19lrTpB9Dd1hJddlGnNLa2BIIMKmR4MYhDOWChRkqCKg0G2yfOHXtPT3fdOuVo5kJVqpEFNO9ByQPveQZFuiKt53656GQje8lOOiNJhnkSGCdAQIE6bzRu5UMHvjIEJJPpFJgb6eZTcsKWttHOTvWqIly8lpKY9NUMenuj69CL6W3ZsRllWL%2FlrrmsB56VntvV0St31tYBEvps610UsGqs5H6R7jkA%2BviXzP2eNGc59jZfzqx0MNHf39lJhWWiLOmcCAyCZGJG4NKhBpN8NX9YsNW8CoRfCywLKq4UrgujoHmw%2B6Wl5IbmrnKKX7jHNfGyMo%2BMLC6l2cue1VvjQjdc0iKYRjBWbffChr%2BmW%2F5SxVONJ%2FfbSWh%2Bcokp3SyloxjjO8YPhG3lAf9EjwFP6EbufOG6VCmuCVlob1bIugKSwDgPEBHMQGCA9q9TUte2kpAgx25ys18Uo2Z3DaYjOGEAlzJmLk6ybkh%2BShbQdO9d7qMNHItGLIx2hMEelqMUeq%2FUmqOe2VpWSvT9Q%2BakGu9fAYEEqqMsAwLoOBbRdYh%2B2OAAmQq6ti%2B67MLa5874GOqUBxgIjmqV%2BU0KyGWPb8v1FrWkrWLACMNje3gLbu%2FN%2B1cvl8JAvi3ac63z9wZg%2F7Es6wtoQQqk6dWLhrEQEuUlFp4uH2R6lgSpaRyhDo%2BQOnJ4CvdqRz%2BVmBJFuxy5G%2BDpOks%2FJD%2FV2UOt%2FXvWpC3d%2BqJIr5MFgzEF6JGRTgJk13rlqwk01DuTdf4Er70Bfzu1kpinGaxqVinPSFhDjAf1BwFuh6f0o&X-Amz-Signature=ba9673cf31fd35a91d6c7ca63cc94931db5490e579c9752c686f750362729cac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SUESKG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDGPsYuERFTUzwKGhUJy%2FT3mPYg4C9UfBMMw8Oc55DgBAIgBvWs%2F4Q17AgNKcjZtUeFTi7M7zV79OSnaTJZs1DMurIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd2bHf%2FzFvY43VukSrcA33eyNRI5l2KQLfbPRPLSE7mHFnC25difesXdH%2FnjbhsjssCacVHxGGGvECMMog8Iy%2Fd2WR6Hiiwbg7TfCSMrCkNr98Jd6x27I%2ByISyqlBnCWe%2FtrKO%2FtlBv5y%2F4MdwiGpSx1wBKYTFQVVUlHXAzq5Lu%2Fwl3wZ%2Boik5ZED6U%2BHrnY0yZmOfkMsh%2B21pd%2FTnAEmAdOwv2jtMW37vm68j%2BqZsf5gwdfv%2FrF5kRrI9W4PMDW8Svuj3E9P0nb%2FfTFMoEB%2FS6o5326meU%2B1tD7jPoJr%2FLXKC6jEFFydMcp2S2cGlc2hxfxodG%2BgIPlqT%2FMH6Q1I3P%2FLxclHX57bcxYHD7Kt3pOa5p9RvEbYbp7yfgRXrpREs2lJqMOJ6fs%2Bn6VmdmVclq6kygTIhXOnbDiFP%2F8HZm1Z5%2Bms66PpjacTuN3XBj6ocU8gBwN%2Fo0wM9HBlsYq7ZqAMPMXBrpTOCx9pd8n2UvTICLR4ekz%2FCIZ43xhLmQFxfeVrf%2FdLtU3qA0YnIX%2FTPDL2%2FCaECFmxIJuCy%2FiRCKazktTKxji5NL2DxLasEy08TyBz11zMpP71kqwL3L9FkIypAVNfJ9kpUHqXJL5iSdjH8DN6jWRJicLCdsNaxpjNqmioTSPPhzJ%2FKkMLm5874GOqUBNuSHJTXMb21Z2%2BvFvXkyKCVjIFsu8Sy1iLqCqUvw1aG5beRS91K7SKeD1xRxHoopER7aX4MoON8qMlRbIFASk9qVali0JdQ8AY3c5Bji%2FgW%2FWEE5I8BEcWExtLhxZfqrhs9pxi9cduFITSSxZP7rUi3fvYPOdx81ASj%2BBQxZv71IO1LlU1vYWZb1D%2B7vxF1CmcyUV4H3ABZG8nZF2b7qF25rQ7%2Fz&X-Amz-Signature=57b511e80f32e831237e68acc04c89c3929deaa5ec2c20f0af703e15f82408e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YUR2R4L%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCbG9a0RprDkxcpWsIej1BwUxIabvksTSG0HbJiJ5ECowIgOxxh%2FHpRkDuX6rw%2Bg2%2F8eO%2BuK1L%2FErWBqeUE5MnAMQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAGDwrDwuDY20dYnSrcA%2F2tOdRmfSvVMNiAejGUhxiM9aNDdj3RnAi8UL1xuFb3ef71Teaxj2FhvGEorDiTcGSeuYHLVkh7Au4PHGp1S%2B5%2BstdToVENh7HM%2B53dmREqWJdXlYCRQP%2FxDDHKkeTi%2Frjtq4FOwrm3L7YrUV4lPf7tRULumwweN2%2Fn%2F0iAxQrI5VEecUqVoB3%2FBTTH79gHq1oboBzKE3xj0o9CS%2FNfcYrQ0bEjbkVrvpk%2BvseziQTgV4A%2Bkji4sT4Hl6RDU9MBT5k%2BwPH8fzrl7uwdSQ5vVwr06aM%2FobvSPNYuWc4B0suWyG5PfNfkvetoeJedAOnAnKBUia5PWEzjkWn5oIOwkE7Eh2NjwzIT1v62gtCt3cuWckc16li2V%2Bi3qNSfGMBV8wYO89LdhxcWtWB1Dk8z01nG0DKHqaeUC5jyazF9X2cYfXH%2FgUSPY67ge1FB7jiNFPRt%2FagJmx%2FiQBSlkQCko5N8yrtwGmHDsIPiNGHfEcbZhhkcgmtrsAVTSrwqYRAMlyDwpOvsbory1O66GmH1wJQpwpELndW%2BwSK1%2BFJKHLye0UjvL21XfMBCCicS1LeLFjcQJS01b7%2FPTm9FiIA%2FHsuG6ylXsBS1jjzUsAXHrYzjRPcufOW0pUIROx%2BrMIm5874GOqUB3SNS9fDlwK2dwJBC51vqpQgRuu%2BnXM4uQpOOtMVK9CTtVfxHXGS6Y5h%2FyFvXUtPXjstv7YGZiwt2Fy3J71B3FpmrmVsAlPhZkgNj0crd7QD41X3i18efawepQ5%2B8rmb%2BYVxAVnzb9CYmgBlr915sOEg790TeMQ2%2FRDMxzkv%2Bn0YCXW9U%2BZrMQ0kKQ9bsffGi7Vu6WmJXpTSawD8BDuVtFDJvpNyA&X-Amz-Signature=73569279cb0cd9ad9a6fd8e6449b3751c1f62039209dc66ede0ee40819417e15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYGZNNR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC%2B4QxR6%2BBZV8FHgoDOCasNqBY8Ak8BVjbEkoYjrysJUgIgLvU1v7taDTZm5BC0IiUlqcIKgNL0rGZrcUVxCbKFZicqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSS7o2hGJaUaxIPHCrcA8mG4B9vRjzOV4oQSRhrojLscLFHlS3JDUMf76MwHh8zfUmBr4hF5rAObiEM4di3FUnoE19lrTpB9Dd1hJddlGnNLa2BIIMKmR4MYhDOWChRkqCKg0G2yfOHXtPT3fdOuVo5kJVqpEFNO9ByQPveQZFuiKt53656GQje8lOOiNJhnkSGCdAQIE6bzRu5UMHvjIEJJPpFJgb6eZTcsKWttHOTvWqIly8lpKY9NUMenuj69CL6W3ZsRllWL%2FlrrmsB56VntvV0St31tYBEvps610UsGqs5H6R7jkA%2BviXzP2eNGc59jZfzqx0MNHf39lJhWWiLOmcCAyCZGJG4NKhBpN8NX9YsNW8CoRfCywLKq4UrgujoHmw%2B6Wl5IbmrnKKX7jHNfGyMo%2BMLC6l2cue1VvjQjdc0iKYRjBWbffChr%2BmW%2F5SxVONJ%2FfbSWh%2Bcokp3SyloxjjO8YPhG3lAf9EjwFP6EbufOG6VCmuCVlob1bIugKSwDgPEBHMQGCA9q9TUte2kpAgx25ys18Uo2Z3DaYjOGEAlzJmLk6ybkh%2BShbQdO9d7qMNHItGLIx2hMEelqMUeq%2FUmqOe2VpWSvT9Q%2BakGu9fAYEEqqMsAwLoOBbRdYh%2B2OAAmQq6ti%2B67MLa5874GOqUBxgIjmqV%2BU0KyGWPb8v1FrWkrWLACMNje3gLbu%2FN%2B1cvl8JAvi3ac63z9wZg%2F7Es6wtoQQqk6dWLhrEQEuUlFp4uH2R6lgSpaRyhDo%2BQOnJ4CvdqRz%2BVmBJFuxy5G%2BDpOks%2FJD%2FV2UOt%2FXvWpC3d%2BqJIr5MFgzEF6JGRTgJk13rlqwk01DuTdf4Er70Bfzu1kpinGaxqVinPSFhDjAf1BwFuh6f0o&X-Amz-Signature=4dbe1f4e3706cc7c18608ddbdbd766769d941d6a039fb54070b5f8c90e24a295&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
