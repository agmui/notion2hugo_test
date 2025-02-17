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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZAG7KE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDPQ%2BCR29NKMbUKuFyM44prT%2BzWufeTE0lwiXrifTsCLQIhAIY421gZArPxiYIfoAAimpx95zOk3ixsWEa4OBK2zOtqKv8DCHEQABoMNjM3NDIzMTgzODA1IgzJQs%2FYAeHHgbfoouIq3APcs2J%2FlNuJ9ogl%2FCP31vEBzxuJATus%2B0AvQLDTkF8XT731b9CjDUmxEOhnXncp2DeJHvB%2FnyluPF6EU1Y9BvZc1lmryK92AV9PzIJj4vnH8TSU%2F2xJH4bWTHHDmJaVau%2Bbr9uNTjqHKmN1cacb%2FeZjVc1cJyDFZapfmfwtrA29jZ5Xr%2FnhKM7sZzTPNDJscH0xFP5iQhR4o7KuKgBt7%2FevzXvRrpG1psCUKTnTA78GdvPwG0pUc43KyHNjs37o7LsiE2I47Wh0%2Fzh2eQlS0mz2nlPlAxcTHOHMFV2AvHXAu7BR1c32vdynFoLesZjyaZZbQwbU0O%2FqFXFu0P%2Bs7pK5JRS9EbJccjlKEqU9eDj9m3SX99a35S7nPfdkt9EyQkVIUh8ta2VLEGvQU6qFBiUtATT7WDXEmiCZ2oguZEEHznys%2FYSESPQwlQeQXRO2DZvInMQq2JejKqEg1ixt2INlQ2%2FRrI%2FA3PkMrJ43j577Ik3eqKd3o4vsO1uckFPwrtlYsK2FGzdNs81xpXUN9wP3sQKxh1fKJRhwbQ4eb%2Bbq6ggGf5bvEzXJfnygwMpddt0g1Nev2qzIYiEozq0OgSow4pj%2F%2BgyHSI0cl5OaRslyjIvqsD4ye6wxS4ILBzC9zcu9BjqkARPDe2fmzf9vWEd1F9BOELk6gQyVFBAWFuCchxgty0rzK7monrZgwRWdYtt5SFHre%2Fix4IrNZ4fc8vSwUeriNyHGWmrPwCvS19EIy6CblYMSVE7VJwDXBaoHiyNFtDfzkSTKS%2FiZD%2FAJaiR%2Bku7sVU2ED6q0vH0fQxBTctoDlxCSuOB2zfrBNkLKhuX6QEjojEHHWxUm5Nqif2E64XOthfXCV5I8&X-Amz-Signature=f49803367f1f94aa21d9a5fe2481f4386b0edce4dbe8b3c3dd79303121b26703&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZAG7KE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDPQ%2BCR29NKMbUKuFyM44prT%2BzWufeTE0lwiXrifTsCLQIhAIY421gZArPxiYIfoAAimpx95zOk3ixsWEa4OBK2zOtqKv8DCHEQABoMNjM3NDIzMTgzODA1IgzJQs%2FYAeHHgbfoouIq3APcs2J%2FlNuJ9ogl%2FCP31vEBzxuJATus%2B0AvQLDTkF8XT731b9CjDUmxEOhnXncp2DeJHvB%2FnyluPF6EU1Y9BvZc1lmryK92AV9PzIJj4vnH8TSU%2F2xJH4bWTHHDmJaVau%2Bbr9uNTjqHKmN1cacb%2FeZjVc1cJyDFZapfmfwtrA29jZ5Xr%2FnhKM7sZzTPNDJscH0xFP5iQhR4o7KuKgBt7%2FevzXvRrpG1psCUKTnTA78GdvPwG0pUc43KyHNjs37o7LsiE2I47Wh0%2Fzh2eQlS0mz2nlPlAxcTHOHMFV2AvHXAu7BR1c32vdynFoLesZjyaZZbQwbU0O%2FqFXFu0P%2Bs7pK5JRS9EbJccjlKEqU9eDj9m3SX99a35S7nPfdkt9EyQkVIUh8ta2VLEGvQU6qFBiUtATT7WDXEmiCZ2oguZEEHznys%2FYSESPQwlQeQXRO2DZvInMQq2JejKqEg1ixt2INlQ2%2FRrI%2FA3PkMrJ43j577Ik3eqKd3o4vsO1uckFPwrtlYsK2FGzdNs81xpXUN9wP3sQKxh1fKJRhwbQ4eb%2Bbq6ggGf5bvEzXJfnygwMpddt0g1Nev2qzIYiEozq0OgSow4pj%2F%2BgyHSI0cl5OaRslyjIvqsD4ye6wxS4ILBzC9zcu9BjqkARPDe2fmzf9vWEd1F9BOELk6gQyVFBAWFuCchxgty0rzK7monrZgwRWdYtt5SFHre%2Fix4IrNZ4fc8vSwUeriNyHGWmrPwCvS19EIy6CblYMSVE7VJwDXBaoHiyNFtDfzkSTKS%2FiZD%2FAJaiR%2Bku7sVU2ED6q0vH0fQxBTctoDlxCSuOB2zfrBNkLKhuX6QEjojEHHWxUm5Nqif2E64XOthfXCV5I8&X-Amz-Signature=c66c6cddf9d8a614806fa95844114f5a300df105590a529b8c21a65f7a1ddfcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYZJ2HP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBHw4%2F3eeGTQX2xdJfTf3gLUn9e3RSpw6Zi3AEn%2FpkhBAiEA7UxXcjQBCJC1zRKpblkHzdOLQ4JxyjWuIRPYNP8%2Bjogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDATz1iDI8ChAQVhHbircA0GOaodvI2x%2FrAGROTSQ4RVhD1ujI1RqOIfZNMJHx%2BdQn1Wq%2Fuw3tQS3quKb4wn5CAv202z0V3%2FLY2Y9MXqnxbwovD%2FlOfX9Xn%2BIsj%2FafoGikq%2F6wY16lUe5qY7G4aUWNc6jFl%2FWbroiHehxX%2Fz2n7afSPDwnpkyE2VxF0R6ebt7By7HC2ngrTzasgpBeq1qp4daLEVr34Ds7Lr%2BobzRIDw3UAZ8HJZpsCAuS%2Bb1Fk1%2FnSS58RHAwQA%2BNt2V7OMYRdiginFT8PYW6Y%2Fv37TfisUKpRSHVpT8dabeT%2FdSnHKCwQCYU1BzjRJ5s%2Baxyaqgl0%2Fb9jFx5vNAdPgPyLkrifRayTV6K6rJAO5JcGlEJK7PKt2mYplhVnbZJx8i%2FJYvjQWfLbZkOjrHeJxtlf%2B4ndZkP6Iy9r%2Fe5QUkEQNbRL3DaNktAPfpzAx7nprjxxp3dmLRmeDc%2BO%2BwbMxMOeCBLs1axbzn25rukKG%2FWb5vIr77%2BRr0d9Asv0NRzMvtGKiLPbcK64Zqo0Druu%2BeFAB9Y7M%2BS6QIMu8vna%2FzrVcxFYzeNtuc4gNDu%2FpiQPiX8Af22sF5iTPVBGgFh0pfHJ59OkNUZhMLP3dqtzITxPf1jk9x%2BKKlJxDX7Jd6KOCfMLHOy70GOqUBhOwvBoKcF9YVywAPtfiuXm8RFErK6dQPOp%2BNm9qX75E0P0Uiqc29ZrvxgBZIr3zFV%2BXo4CGB3tg4yDHJdoYSZplqmXI0C3AcxkCUtY%2FrQ%2BH%2BTnE6rh9xkdYTzveA6NKxyvRgzn0ViWMeogJ6VHkLyq5hIEIYDAx369xha0iX8aZW9s2L0Iwl%2FTPO3aZkaIXI4u9mD4tvTUuFRV8tskuJGx%2B59Uay&X-Amz-Signature=1a31f455c824e9aecf52a194c06087fd4eafeffe6c2eae58a5a54dbdf3354034&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDQZLFI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBuY8pFRxp260orCienx9tdcyPBQro77vb9ytwJ4KKvzAiAOXvOor5NyofvzZBTXVXat8r1NfQK3M9XG%2F%2BdxoywKvCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMsec68S4Otw4kscFCKtwD8%2BFhS5iWmAW3PMnQIeTVDIyPfXlaEqnPdH2BpVf5It9TBpgEqqhM9HoGHDG5X%2BoHRMAKg2aMigTG4FQTx6wcaUy8Y%2FtPABJbmX6w3qVzFUAGdAiJ%2Be0WdT%2F1arR%2Bw1%2FdBPg5LKTBN30WXHkAGBX7WYfBn8lAtjbWvVoipC3LSMYVjX%2Bsw2boyyIFg2i2iiH8kHIBwkYjfQrE1aqlfIt1q1VjaZrKgXdRkT5Vy%2BLdWI1%2FUK5YphomK5LE1c1%2BQn0X2OdkhOMN36XNzE%2BPQfWfUwPtcVbbfKnsAN9vAo0cRDLdqXOr%2BD5OLezRq%2BG1E4fXYxcXgMwJB%2BdwO5wnS2FbgKnmxghW8DYOXW9%2BsDYH1VMqfotct6afCzPlLHfPOA7AjQRZGuQtQkcUUMv5HMv8l013vmaPkpQVysEDKQ%2BJ40e2IBBkFfX4WiJOUUtyBDynCLlMEbZWCmoNPk1g1gVarLvp2TZxS4ZYqZNDxuiRgvVDgAvqv9wvcr5eXoruOKNBIsoV42lZdmPvQhoIXskKwJU%2FkWI4g5plXVp%2F5%2BAOZAYSgqFIx2Jr374zohAKdPmHoVAeY9i52mwTqRpv2ti8FS5Z3KI%2B1ykJ%2BJD%2BO9ZIFc9xSPyf0E703vr4R4kwsM7LvQY6pgGHc3MyWYiiNc978p6oesWREEX5%2B5e3vHcK4nmZIKgLIdRMuN9PDhkR3t6mNgah4vcmkGxQ2g%2BMk4ZmC5HCGBwosANfYUWLwM9NjbRKJ3VSAdScTEwMaecClovS8t89XzJhUXRy0Q%2FyIEEOxxdQehefUDlB8fTxz0hQ%2BsqFiN07MhQ2F76pQDVcKRLwgbSMXOFror9fq2B2eN4oQ5ZOZO1CefDn6b96&X-Amz-Signature=7a14836fec2d7a74ba93a539e1150e89240ef10227515854185dae150ab14903&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZAG7KE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDPQ%2BCR29NKMbUKuFyM44prT%2BzWufeTE0lwiXrifTsCLQIhAIY421gZArPxiYIfoAAimpx95zOk3ixsWEa4OBK2zOtqKv8DCHEQABoMNjM3NDIzMTgzODA1IgzJQs%2FYAeHHgbfoouIq3APcs2J%2FlNuJ9ogl%2FCP31vEBzxuJATus%2B0AvQLDTkF8XT731b9CjDUmxEOhnXncp2DeJHvB%2FnyluPF6EU1Y9BvZc1lmryK92AV9PzIJj4vnH8TSU%2F2xJH4bWTHHDmJaVau%2Bbr9uNTjqHKmN1cacb%2FeZjVc1cJyDFZapfmfwtrA29jZ5Xr%2FnhKM7sZzTPNDJscH0xFP5iQhR4o7KuKgBt7%2FevzXvRrpG1psCUKTnTA78GdvPwG0pUc43KyHNjs37o7LsiE2I47Wh0%2Fzh2eQlS0mz2nlPlAxcTHOHMFV2AvHXAu7BR1c32vdynFoLesZjyaZZbQwbU0O%2FqFXFu0P%2Bs7pK5JRS9EbJccjlKEqU9eDj9m3SX99a35S7nPfdkt9EyQkVIUh8ta2VLEGvQU6qFBiUtATT7WDXEmiCZ2oguZEEHznys%2FYSESPQwlQeQXRO2DZvInMQq2JejKqEg1ixt2INlQ2%2FRrI%2FA3PkMrJ43j577Ik3eqKd3o4vsO1uckFPwrtlYsK2FGzdNs81xpXUN9wP3sQKxh1fKJRhwbQ4eb%2Bbq6ggGf5bvEzXJfnygwMpddt0g1Nev2qzIYiEozq0OgSow4pj%2F%2BgyHSI0cl5OaRslyjIvqsD4ye6wxS4ILBzC9zcu9BjqkARPDe2fmzf9vWEd1F9BOELk6gQyVFBAWFuCchxgty0rzK7monrZgwRWdYtt5SFHre%2Fix4IrNZ4fc8vSwUeriNyHGWmrPwCvS19EIy6CblYMSVE7VJwDXBaoHiyNFtDfzkSTKS%2FiZD%2FAJaiR%2Bku7sVU2ED6q0vH0fQxBTctoDlxCSuOB2zfrBNkLKhuX6QEjojEHHWxUm5Nqif2E64XOthfXCV5I8&X-Amz-Signature=60fef9dfb6bbfb86c94b7a91aef3b4b9d3815b423128e6734c70bbfd32cb6e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
