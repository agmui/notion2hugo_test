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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KXBBDD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSRbfH4v4UICj2sGQM%2FMhTqitxGfb9VVSN9Ck0SwHCHwIhAMkic7tfmdKrvXzF7N4jn6v2e32bBnNwBlSt6mVGZOScKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7SsbJsCvpHxXJtoq3AM2s3tAJ2vT41f%2BpAqiouXgiXfdklEabrtYxna%2B8Fip2Z2P9HPawUBq6KlHeuGfWrXTazNPScW%2BgV%2FcE2SYNIwn0wrIkBZpZ9dvlzKghp%2B4KQZsE8kY4KXxPxV9e7SHo72K1SH1PdqIXa4%2F1VkKIyOe4kJLzquOwoGD5SrstCdh2gXM3KZ1nIj7GhliBhd2tvbjEjfRwwbJo45XWAGODqIMDvJWRp%2FL1TvnMNLNwinaEYOTobvYN2n6FhOT5hQzLa6Axn9%2Bi8ZKylhHiXodITtXdbTpgxRT74HqQLi0V1bOhKaKDby5lab%2FQVpFnc1BNX51hlhsdgZUqeGJxQ2UAFN73Gv0MFL76o8HLQPUOHgTSa6Ya01%2BnXOfJnYimEKZJ4bM4gibY3GW75Iucn06pvrlAvqkVre%2B4rfKxoZBOMMNV9wRziDK2p2RDDYFGBg19NJvOc9DW%2FC%2BOebnTviw5B0JY3HMVVXzLyFh7%2B1VL9dKKs%2FoIOFSKyR4kaON9BdELpfFWme1BS9DCYpx0%2FjqCdkgCbhkKS9T0hO2QDP8VyvPd6Id2HA0sm%2BOfbKwI%2BOqTalbHqQNJr3ohjui1APhLExjfvJ4TweQfgsfQlByQRmoc%2BbOGgznF7J81dhO9jDy%2FMjDBjqkAVYMqY3ZtmZySAU4BwTwQULQcsh2vqc5oAVTs9p2O5%2FEL7idNXMrMsP%2B3sZil838EcJyhW3FbFqGjK14wbw9e1X3fMDV%2BoqzVpUTCB3Q94NdVETiO%2FGClNKd1e%2B8kT9jXKH5UGTy%2BTjZuDQWGHxfhUR1VLM3TfenzTm5TfQeH3aNZ4UTc4ocvSkDJLqkorc9U8Mwe05IdUaxBb2NG01hEQITTOV9&X-Amz-Signature=f9b9e0fdafa7bd333c48c8ed5c22dc4269470389fccad1ea2cc62862b8e0d7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KXBBDD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSRbfH4v4UICj2sGQM%2FMhTqitxGfb9VVSN9Ck0SwHCHwIhAMkic7tfmdKrvXzF7N4jn6v2e32bBnNwBlSt6mVGZOScKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7SsbJsCvpHxXJtoq3AM2s3tAJ2vT41f%2BpAqiouXgiXfdklEabrtYxna%2B8Fip2Z2P9HPawUBq6KlHeuGfWrXTazNPScW%2BgV%2FcE2SYNIwn0wrIkBZpZ9dvlzKghp%2B4KQZsE8kY4KXxPxV9e7SHo72K1SH1PdqIXa4%2F1VkKIyOe4kJLzquOwoGD5SrstCdh2gXM3KZ1nIj7GhliBhd2tvbjEjfRwwbJo45XWAGODqIMDvJWRp%2FL1TvnMNLNwinaEYOTobvYN2n6FhOT5hQzLa6Axn9%2Bi8ZKylhHiXodITtXdbTpgxRT74HqQLi0V1bOhKaKDby5lab%2FQVpFnc1BNX51hlhsdgZUqeGJxQ2UAFN73Gv0MFL76o8HLQPUOHgTSa6Ya01%2BnXOfJnYimEKZJ4bM4gibY3GW75Iucn06pvrlAvqkVre%2B4rfKxoZBOMMNV9wRziDK2p2RDDYFGBg19NJvOc9DW%2FC%2BOebnTviw5B0JY3HMVVXzLyFh7%2B1VL9dKKs%2FoIOFSKyR4kaON9BdELpfFWme1BS9DCYpx0%2FjqCdkgCbhkKS9T0hO2QDP8VyvPd6Id2HA0sm%2BOfbKwI%2BOqTalbHqQNJr3ohjui1APhLExjfvJ4TweQfgsfQlByQRmoc%2BbOGgznF7J81dhO9jDy%2FMjDBjqkAVYMqY3ZtmZySAU4BwTwQULQcsh2vqc5oAVTs9p2O5%2FEL7idNXMrMsP%2B3sZil838EcJyhW3FbFqGjK14wbw9e1X3fMDV%2BoqzVpUTCB3Q94NdVETiO%2FGClNKd1e%2B8kT9jXKH5UGTy%2BTjZuDQWGHxfhUR1VLM3TfenzTm5TfQeH3aNZ4UTc4ocvSkDJLqkorc9U8Mwe05IdUaxBb2NG01hEQITTOV9&X-Amz-Signature=4cd584d2ce51e4bf6085e32b24a82da8fde675477131892d19e3d61803d7026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KXBBDD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSRbfH4v4UICj2sGQM%2FMhTqitxGfb9VVSN9Ck0SwHCHwIhAMkic7tfmdKrvXzF7N4jn6v2e32bBnNwBlSt6mVGZOScKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7SsbJsCvpHxXJtoq3AM2s3tAJ2vT41f%2BpAqiouXgiXfdklEabrtYxna%2B8Fip2Z2P9HPawUBq6KlHeuGfWrXTazNPScW%2BgV%2FcE2SYNIwn0wrIkBZpZ9dvlzKghp%2B4KQZsE8kY4KXxPxV9e7SHo72K1SH1PdqIXa4%2F1VkKIyOe4kJLzquOwoGD5SrstCdh2gXM3KZ1nIj7GhliBhd2tvbjEjfRwwbJo45XWAGODqIMDvJWRp%2FL1TvnMNLNwinaEYOTobvYN2n6FhOT5hQzLa6Axn9%2Bi8ZKylhHiXodITtXdbTpgxRT74HqQLi0V1bOhKaKDby5lab%2FQVpFnc1BNX51hlhsdgZUqeGJxQ2UAFN73Gv0MFL76o8HLQPUOHgTSa6Ya01%2BnXOfJnYimEKZJ4bM4gibY3GW75Iucn06pvrlAvqkVre%2B4rfKxoZBOMMNV9wRziDK2p2RDDYFGBg19NJvOc9DW%2FC%2BOebnTviw5B0JY3HMVVXzLyFh7%2B1VL9dKKs%2FoIOFSKyR4kaON9BdELpfFWme1BS9DCYpx0%2FjqCdkgCbhkKS9T0hO2QDP8VyvPd6Id2HA0sm%2BOfbKwI%2BOqTalbHqQNJr3ohjui1APhLExjfvJ4TweQfgsfQlByQRmoc%2BbOGgznF7J81dhO9jDy%2FMjDBjqkAVYMqY3ZtmZySAU4BwTwQULQcsh2vqc5oAVTs9p2O5%2FEL7idNXMrMsP%2B3sZil838EcJyhW3FbFqGjK14wbw9e1X3fMDV%2BoqzVpUTCB3Q94NdVETiO%2FGClNKd1e%2B8kT9jXKH5UGTy%2BTjZuDQWGHxfhUR1VLM3TfenzTm5TfQeH3aNZ4UTc4ocvSkDJLqkorc9U8Mwe05IdUaxBb2NG01hEQITTOV9&X-Amz-Signature=deb4175e069a4aa45a86a1552768c50b4bbbb3eb9f4779071c88b11bf7e2fef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQV2MB2R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2mvZNSfCg2oLotCJneyAjlRHiu%2B5XvoRoHelhDSq29AiAKr%2FbRW8KQ4f4YtPIFArl1%2BkRzBfqvwH%2FA%2BwIWVQ1E5CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv3ddDpfy%2FJkItHsvKtwDFGOgsAJfVJRCqpCMqYEsp%2Ff%2B0UMcTemEl%2BMDE7cIjN2%2FMelT5c%2BCnO7no4CChd0BavBjdYqSufMNQifgCV%2FlvLysKc%2FW7iemxQ23BbQ1WBmX%2B3HXsZKYaxDniH62oBkVKuIYpXjSP8SzofyPXomdmoer%2BMHD8Es9iQmikjQil%2FzYgz0AFZNFb10FS49tiUX3BN7M98wROW5de5PHaq01HnH3Wdwn02Fwik99aSz3%2Bd8i7DHdKRyrRmHiulGJnSkKTzU8mV1ZcDsL3YEw%2BCbfeVeMGLAcrxlZRvzFOuDHXazeFRvptRFaUrySfL66GwP7NS2EFKad4zEu4tI5uNbPDKfP9GZdLjCxPTMlTmEG8SuIp3ltK4XGermv3cSaxDmOwBA2Or3n6LzXgV2S7C5ORW43DIvuoOLqHOMxCl17NTRamINq9k4VikYq9y7L2LA5Ye1H%2FqoCo1G22FAs5EYy34X9BtOc5JuyJJDd4L0X5f78R8%2B4hDcptltI3GmsUJB%2Fx%2FAUApcbeTbXxsuZmWGmiYafi5jsWWxiCxiZAI4cdi06r0rboAYpKwWSbUBlqaYME9knohLO0fm8L1o5N%2BiD8C5mVxeCUqB2MAteCtJ4B%2Fke%2FiQK3iYV6TLeYvowrP3IwwY6pgHpO2X3dYnm%2BAO%2FcW6rT5P%2FpeNN7vSBX6aD6PyaEx9jTx1czKX2xTDFL8o87yifNuho3l3rJcrS87e%2B2Vv6vfns27PZEdVkeoP0WyNwR6r3uq6ZR6Lwl%2Ffj2wcGCEcZuO2DoB8QXoXXsJoaPaZf45W7zD5RqsaLnmKVzsWeQUUaHSguD%2Fhh897dDIroFIwU%2FX%2Fflk5LSLrtKCbMSWVAjFHgMCNCNkiq&X-Amz-Signature=2ba3c7c94d1fde7f776e04416f4ad6ecf14f2c5d92d9e090779dce61a21688f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5ILXP5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAIt5oQhHqJZhzhn1FsMz%2B8nYx0%2FJhyzuq6fZWkPaN6AiAgBmb8cYByLfrwZzvGzXn8qfMzsJx59uINiV9MMB2WTyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOthLIkhbO1dkspVLKtwDRCdTr5loF0LtQlaz%2BuSs3MlmADezdNzBWlImu3H1aZ9binCVVm8WMiTkUsKb6N0bhM0X4ZCMBKDfI%2B%2FWyCIGJivRK48y0cg2Gtqp5FpNQYbC6mbSUirk%2FMeqHvJeWcaCPW9aY4G97MAsYtmVIe22ryU2D5X2rLuyc9P49R5HhGvIULdj%2FbILDCWthdUq%2Fbg3BOeHr1P6UhSUcoFDJsYeawUj5hv6MM3n3JRZPZZ9vbg%2FkUMcBVZJ%2Bdm3ig1n9QkBENHdhUvTVV9eLsgLOC0eUhTa7cpd9Y4xXcTGRP%2BnVxMknXUXX6qMTEdvwm3iyeoN2LajWYQ64ntrkwI3q%2FP7BryKv9aPwRGtmUqgNgksFDUHFLR68qXyE2L2DAA74AdffPNjpdSF4ahLoQ1MvDsUod%2FX%2B2N9fbgi7Z3cb9tpwjbBHpZTN%2Bd9dcpYuSC6Tm7cGoFPLI0LptbSv0i2g80P61MQu4KmArAOyPvG8rfYLkVW7zE9oJbpx3jgKT%2BpSwQG%2BM%2BerW9OkawJVciHqClzB%2Fsl3iRhpcfvgPi0an7JZ%2FogU7hdt%2FJEVJwzBefpAZQrA6%2By4fYgp4RxSuxGeBs%2F4NeFqFyXNeqrm%2FRP%2BcpYIWbNlXul2KuQ7MQ2sv4wlP3IwwY6pgG92NIQHF%2FpBwUT7sNiakxLzvKD9WQKzBiCl01mmhcvxrW%2FkmLgwDoyFOF2qYufGx7eOL6Pc4loeBdq1TdkRryo0CiShoMAnr1NFS1w8YdZ8DIrrbhL1IFv5BrTw5%2BfN61T%2Fkxk%2BJTyp9ctAXSv5m%2BK4614iASr3rsAAwoW399l6M2PKRwDsdzKJ6Jh%2Fvy2F4CHIaWT4i0a%2BkVo7%2Ft%2BFWKFYQsknsYv&X-Amz-Signature=674d4fb69d9d38bc9cb02860f8f4a46d9e887e29fe376b848ec4c9eaaf1eaef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KXBBDD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSRbfH4v4UICj2sGQM%2FMhTqitxGfb9VVSN9Ck0SwHCHwIhAMkic7tfmdKrvXzF7N4jn6v2e32bBnNwBlSt6mVGZOScKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7SsbJsCvpHxXJtoq3AM2s3tAJ2vT41f%2BpAqiouXgiXfdklEabrtYxna%2B8Fip2Z2P9HPawUBq6KlHeuGfWrXTazNPScW%2BgV%2FcE2SYNIwn0wrIkBZpZ9dvlzKghp%2B4KQZsE8kY4KXxPxV9e7SHo72K1SH1PdqIXa4%2F1VkKIyOe4kJLzquOwoGD5SrstCdh2gXM3KZ1nIj7GhliBhd2tvbjEjfRwwbJo45XWAGODqIMDvJWRp%2FL1TvnMNLNwinaEYOTobvYN2n6FhOT5hQzLa6Axn9%2Bi8ZKylhHiXodITtXdbTpgxRT74HqQLi0V1bOhKaKDby5lab%2FQVpFnc1BNX51hlhsdgZUqeGJxQ2UAFN73Gv0MFL76o8HLQPUOHgTSa6Ya01%2BnXOfJnYimEKZJ4bM4gibY3GW75Iucn06pvrlAvqkVre%2B4rfKxoZBOMMNV9wRziDK2p2RDDYFGBg19NJvOc9DW%2FC%2BOebnTviw5B0JY3HMVVXzLyFh7%2B1VL9dKKs%2FoIOFSKyR4kaON9BdELpfFWme1BS9DCYpx0%2FjqCdkgCbhkKS9T0hO2QDP8VyvPd6Id2HA0sm%2BOfbKwI%2BOqTalbHqQNJr3ohjui1APhLExjfvJ4TweQfgsfQlByQRmoc%2BbOGgznF7J81dhO9jDy%2FMjDBjqkAVYMqY3ZtmZySAU4BwTwQULQcsh2vqc5oAVTs9p2O5%2FEL7idNXMrMsP%2B3sZil838EcJyhW3FbFqGjK14wbw9e1X3fMDV%2BoqzVpUTCB3Q94NdVETiO%2FGClNKd1e%2B8kT9jXKH5UGTy%2BTjZuDQWGHxfhUR1VLM3TfenzTm5TfQeH3aNZ4UTc4ocvSkDJLqkorc9U8Mwe05IdUaxBb2NG01hEQITTOV9&X-Amz-Signature=f3346f27b431699dcf4ba3f7ca332cec5a6a93fc3fe2002a26fe5e52a0ca479e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
