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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOZRYZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL%2Bv69Gg%2F8wIX1k%2B9aP9HwY%2Flumid2bzfFP0nG6duPsAiEAxSfuDyzEXF%2F1PNzlZoU1nGCM2Fb%2BOaVPlRR6aAzs3Noq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPjviwFnU2FLJsaHNSrcA5BtUHIoUtL1rzruvj5YKhkF3upGhaOSDmgctqXPxjuFA7dLn2lqF1ORPPgqSuVDvhLLMAuCu3zQ9OcOmPZzEL2KVj7tAKC7u6RmWzmbteuMeZ8v118Qv%2BDtqls7nRF6%2BW2SqbOxAayDIxXyN4GI6%2BJekjNB8KGmzEkKybWDy98kMLXKLqVLwMav3tCast6Bzk3PmVsYiqPTIFRJUgdQ959KrNi2fQ5DrC0lTUpxuWl9htqPXokniQBoKU6Pg3%2BIB4dhX3I4v0d5eI0G7igN4nsT8Eu29CZKs8OPBqeLUsLqcmAxnAwDi9R9R4JJPe98lqQStnEDbjN2GFC0kzfMDNiQrgmlkWY14C5pc7%2BJZQgzcOHHjQaTdyCgl6GdcK%2Bp40Ti6a%2FIxLzgJEdg8cH8pDHzigJCg5xv%2B2fR5nc3tkhb0tLJqmGNFKKjMonXjQpPL0gI3a3NlEBuJeQ1FLqjLft23WZx1lV36BuGX5i1PsLBWtGWv5IODdZ56nyh%2Bx6G59RuLYQit4XheoT7mWwQ7EX5ZQhNpA%2FOvk6nQbi8%2FWyaj21IWKbsVyQPZPf0ST0T6VbY8e53IIj9Szwt4L48bc7EtcHYweeHU5P%2BVl748KYBOIMDnfoVucvwMXeiMMOE98QGOqUBYTwS1HbrSparirnlKtGhpegWNNm%2BA1%2BJY523415%2FtkBz2Tr%2B9VTDplq%2F65zRMDhd43C35MEFRwkR%2Bdq%2F0E28Oq%2B03x5MXXvw9g9zAk6VdMGh2pL5S%2F44TG3Ey%2Fg%2F9fAUS0GkdpHLldY2DFfJj9Nkf26IP%2BBCk1SPlvteqrihmTkmiXA58FbnhtzqLcVcBnCWcaeA3jtd%2FV39%2BCgCKMGZW%2FMX%2FwhB&X-Amz-Signature=b96943c134893f1dc677d9bb8a8eadc87dada49bcaef059958fae359c86546e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOZRYZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL%2Bv69Gg%2F8wIX1k%2B9aP9HwY%2Flumid2bzfFP0nG6duPsAiEAxSfuDyzEXF%2F1PNzlZoU1nGCM2Fb%2BOaVPlRR6aAzs3Noq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPjviwFnU2FLJsaHNSrcA5BtUHIoUtL1rzruvj5YKhkF3upGhaOSDmgctqXPxjuFA7dLn2lqF1ORPPgqSuVDvhLLMAuCu3zQ9OcOmPZzEL2KVj7tAKC7u6RmWzmbteuMeZ8v118Qv%2BDtqls7nRF6%2BW2SqbOxAayDIxXyN4GI6%2BJekjNB8KGmzEkKybWDy98kMLXKLqVLwMav3tCast6Bzk3PmVsYiqPTIFRJUgdQ959KrNi2fQ5DrC0lTUpxuWl9htqPXokniQBoKU6Pg3%2BIB4dhX3I4v0d5eI0G7igN4nsT8Eu29CZKs8OPBqeLUsLqcmAxnAwDi9R9R4JJPe98lqQStnEDbjN2GFC0kzfMDNiQrgmlkWY14C5pc7%2BJZQgzcOHHjQaTdyCgl6GdcK%2Bp40Ti6a%2FIxLzgJEdg8cH8pDHzigJCg5xv%2B2fR5nc3tkhb0tLJqmGNFKKjMonXjQpPL0gI3a3NlEBuJeQ1FLqjLft23WZx1lV36BuGX5i1PsLBWtGWv5IODdZ56nyh%2Bx6G59RuLYQit4XheoT7mWwQ7EX5ZQhNpA%2FOvk6nQbi8%2FWyaj21IWKbsVyQPZPf0ST0T6VbY8e53IIj9Szwt4L48bc7EtcHYweeHU5P%2BVl748KYBOIMDnfoVucvwMXeiMMOE98QGOqUBYTwS1HbrSparirnlKtGhpegWNNm%2BA1%2BJY523415%2FtkBz2Tr%2B9VTDplq%2F65zRMDhd43C35MEFRwkR%2Bdq%2F0E28Oq%2B03x5MXXvw9g9zAk6VdMGh2pL5S%2F44TG3Ey%2Fg%2F9fAUS0GkdpHLldY2DFfJj9Nkf26IP%2BBCk1SPlvteqrihmTkmiXA58FbnhtzqLcVcBnCWcaeA3jtd%2FV39%2BCgCKMGZW%2FMX%2FwhB&X-Amz-Signature=767cf2caff497df8cd1cc912642a73786c4bd93440bd1c6fa6916326128e547e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOZRYZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL%2Bv69Gg%2F8wIX1k%2B9aP9HwY%2Flumid2bzfFP0nG6duPsAiEAxSfuDyzEXF%2F1PNzlZoU1nGCM2Fb%2BOaVPlRR6aAzs3Noq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPjviwFnU2FLJsaHNSrcA5BtUHIoUtL1rzruvj5YKhkF3upGhaOSDmgctqXPxjuFA7dLn2lqF1ORPPgqSuVDvhLLMAuCu3zQ9OcOmPZzEL2KVj7tAKC7u6RmWzmbteuMeZ8v118Qv%2BDtqls7nRF6%2BW2SqbOxAayDIxXyN4GI6%2BJekjNB8KGmzEkKybWDy98kMLXKLqVLwMav3tCast6Bzk3PmVsYiqPTIFRJUgdQ959KrNi2fQ5DrC0lTUpxuWl9htqPXokniQBoKU6Pg3%2BIB4dhX3I4v0d5eI0G7igN4nsT8Eu29CZKs8OPBqeLUsLqcmAxnAwDi9R9R4JJPe98lqQStnEDbjN2GFC0kzfMDNiQrgmlkWY14C5pc7%2BJZQgzcOHHjQaTdyCgl6GdcK%2Bp40Ti6a%2FIxLzgJEdg8cH8pDHzigJCg5xv%2B2fR5nc3tkhb0tLJqmGNFKKjMonXjQpPL0gI3a3NlEBuJeQ1FLqjLft23WZx1lV36BuGX5i1PsLBWtGWv5IODdZ56nyh%2Bx6G59RuLYQit4XheoT7mWwQ7EX5ZQhNpA%2FOvk6nQbi8%2FWyaj21IWKbsVyQPZPf0ST0T6VbY8e53IIj9Szwt4L48bc7EtcHYweeHU5P%2BVl748KYBOIMDnfoVucvwMXeiMMOE98QGOqUBYTwS1HbrSparirnlKtGhpegWNNm%2BA1%2BJY523415%2FtkBz2Tr%2B9VTDplq%2F65zRMDhd43C35MEFRwkR%2Bdq%2F0E28Oq%2B03x5MXXvw9g9zAk6VdMGh2pL5S%2F44TG3Ey%2Fg%2F9fAUS0GkdpHLldY2DFfJj9Nkf26IP%2BBCk1SPlvteqrihmTkmiXA58FbnhtzqLcVcBnCWcaeA3jtd%2FV39%2BCgCKMGZW%2FMX%2FwhB&X-Amz-Signature=3902ddd15dd5ce02b489b0514b2887ed18d538ecad7375cd05c817f7068c233f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNVCONB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjTQgaKrC61QwuSV0ZToSLFMYH5UZme%2BzPyw9SCRfkPAIhAKa65D%2Ft%2B2VCID35YMPUb27ySdhE1Omfm5Quo%2Bz24clRKv8DCEQQABoMNjM3NDIzMTgzODA1IgxfJMJlF4ck3ZfUJYYq3APC2Ia%2FPyTptYEW5BIShgBKaV1qvl3vYlHwGqeKY8EHSQKo8JOqqeuokqFfQ8vCD8urydl%2B%2B1hE9r7K6WJk%2B5TLDdkiROo9McH0G2tPiZkghBbhDYHnMMMaPWIVbVKSsdgZnn7c6TRfwwblsjUpv62OLIGavC%2BfN94fkDE%2FinuW%2FnlqFzmdMfoTR7yZGQu%2BcY7MWe5%2BZBHrmSsfC8xezJp8d6e0tAVEYJmDQ8bUjjMt7178C5VSXYHF9mPbCJQSga4Tgvs%2BG8y8ZoB0Sg25YudmdWWtcVFLm1HudctB%2BgVux3o91vlUULGdTogu19Mtd5KyU8kwegwfcNnmw7q%2BnZauOUqbcMWAWxetXUM7rjNP18gzYccxHwmkLzzAItggom36E%2BfPBJ%2Bg5c%2F13IPmhvKRKU71hC16NZoi9yAXu9nA9aZFAMLcbn9K5EUlv%2FvA0uVh5XHUtXWWyuVLUduh2JSKR43Jolyq8Odb%2FN0eVmOco5SvIbFjx63h09i%2Fd8P5QYBwtbHJYJ9S15kxcKNwZdUdjAdoOEICdJEzBb%2BzXRR%2F66luCw1stvL%2BqN1Sn9nPk23N3osZn1YeWyKuY6x0WT%2Fc%2F9%2B6gdLU7c%2FzLjsNwX4AMw1w4kuRd9YFt0i4szCfhffEBjqkAYJ001qy8CdK8VERmQ34xLkSIj7WfHyH%2BhkFOqSH8P%2BOFGjTQqQZg6US2KBTyZU2dXgZ8LvRFHZy%2Fp3s9ADZPMzYmXOjTWL%2B9ePrR7mS%2FjapW%2FMBQ62CwsdJyKlQUBJnL%2Fu7O%2BjPWAwzo6FWeRxF1ed67yWCBuTnMDGDOD%2FPMfx5J3ksYdj7NFayXQholSoy%2FsAxvGvQjxKgoU42l%2FxpgiLFwr8%2F&X-Amz-Signature=b37a24730ffd3efad368f278fc44470b306ef446efbac8eb97fe4e83a8cfda88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGHINXQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1Ic8siC3OOGwvY%2BRMYuMXFUZryspUj8Pmik2wMjfHdAiAi5lKxMLxnw0VwApQmMBQQAH7zSmxDVjc7k9hNFgDLIyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM2VaJYWYhjd2OerPWKtwDTdvCHF8nsf%2BP%2FP5hEx7%2Bj3%2BYzSeTZ0Oq5biT0HdfPz%2Fg80HEiXr8fPhAjK%2F3C2ppRRuL5qjJsvybK6OYP2c8vMAxfIKfcGGt59FJD%2FYSnEeJb0Zs33qBx6KZ4CiLaIQlZQS5aeHBwvWgj%2BtX2wfKhGUQvVPYhrmQm4iS0mlbQchhHddax9TSeG%2BdCDoEMFQYwMZaa%2BvR1N3I8%2BwnTvsXXtWFDIlFNl5RCO2aea%2BqtriBYJIILbmgFvhiDk1HHFMy2dG1YmGJlQN2eaiGbhM63fkewqTOizoWgpTXjvnJbzQGH2mUBKZBgwNMXRoj45TjcA7WHDPDqA6V13b%2BGwkUWKa%2F%2FLDyopM4vyYygGqZg2MheI765y0vVdQPJUWqU3tY1Gq24HzJj6y9%2FhVdQ0CB699w3yauwy6Qg%2FV7oomqo0qhfC8c3hMJO7Pbf94g6BbfKIRWExPnETTNsF4V3jpmKd9uYvmWwr8L29YtZ18rzlfTrphGMUqSpgvLqorU66ESyypWnHhWpqAGRIXR4st82aow1pmyoAAdP7wCD6GOOmScYsnYHx%2FaPHy6ujfbAD6rXoAG4TNV69N%2F0Mfty7MvltEKbSlHsmOeYpqghh0N3NAu7GvRHQNpr%2FCWfR8wjIX3xAY6pgEfD9NboFxMDqRUFj4y6sf5JU9qnnJRfQn9bRq808UEc%2BP5xMcxV5TQxEOlo37pmwJ3pt%2BQBBKJFVah6TEOUCWI5npcN5VLPt7JnHCFq%2F1zCNXL8qJyTZ8XgJDn4zssef2xTR96gbE3hXjnv67lOTvvK3pEdfZzLSeXEzvE1tEq9y8A5UY25BIJX552%2FvT519Z7pG0wsWD0tyHSygfmoZoVpMj2UBBQ&X-Amz-Signature=a19c80bee19c2e95ec24a8a85495f6890c325186f8d113e47eb6785d33917096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOZRYZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL%2Bv69Gg%2F8wIX1k%2B9aP9HwY%2Flumid2bzfFP0nG6duPsAiEAxSfuDyzEXF%2F1PNzlZoU1nGCM2Fb%2BOaVPlRR6aAzs3Noq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPjviwFnU2FLJsaHNSrcA5BtUHIoUtL1rzruvj5YKhkF3upGhaOSDmgctqXPxjuFA7dLn2lqF1ORPPgqSuVDvhLLMAuCu3zQ9OcOmPZzEL2KVj7tAKC7u6RmWzmbteuMeZ8v118Qv%2BDtqls7nRF6%2BW2SqbOxAayDIxXyN4GI6%2BJekjNB8KGmzEkKybWDy98kMLXKLqVLwMav3tCast6Bzk3PmVsYiqPTIFRJUgdQ959KrNi2fQ5DrC0lTUpxuWl9htqPXokniQBoKU6Pg3%2BIB4dhX3I4v0d5eI0G7igN4nsT8Eu29CZKs8OPBqeLUsLqcmAxnAwDi9R9R4JJPe98lqQStnEDbjN2GFC0kzfMDNiQrgmlkWY14C5pc7%2BJZQgzcOHHjQaTdyCgl6GdcK%2Bp40Ti6a%2FIxLzgJEdg8cH8pDHzigJCg5xv%2B2fR5nc3tkhb0tLJqmGNFKKjMonXjQpPL0gI3a3NlEBuJeQ1FLqjLft23WZx1lV36BuGX5i1PsLBWtGWv5IODdZ56nyh%2Bx6G59RuLYQit4XheoT7mWwQ7EX5ZQhNpA%2FOvk6nQbi8%2FWyaj21IWKbsVyQPZPf0ST0T6VbY8e53IIj9Szwt4L48bc7EtcHYweeHU5P%2BVl748KYBOIMDnfoVucvwMXeiMMOE98QGOqUBYTwS1HbrSparirnlKtGhpegWNNm%2BA1%2BJY523415%2FtkBz2Tr%2B9VTDplq%2F65zRMDhd43C35MEFRwkR%2Bdq%2F0E28Oq%2B03x5MXXvw9g9zAk6VdMGh2pL5S%2F44TG3Ey%2Fg%2F9fAUS0GkdpHLldY2DFfJj9Nkf26IP%2BBCk1SPlvteqrihmTkmiXA58FbnhtzqLcVcBnCWcaeA3jtd%2FV39%2BCgCKMGZW%2FMX%2FwhB&X-Amz-Signature=651188aed3b955ce474c663210f25f9ed569dda54499793bbe0460ab6476a673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
