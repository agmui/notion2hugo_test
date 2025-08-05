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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEJYA7K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF9bx7T8aIT7di3wpgstL0xZ%2BnFiDvwk6V4pqDsiF7bXAiEAi%2B8CKOazmnfi3QwkOgWtIWrE26Zxu0E7mYPxOcO6B0cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMDKE67HVrO8h%2F2lCrcA1M%2BQj2ZYlLvlzy8%2BFYBWVz%2FSn1UY7mXs4%2BxVVWJhEol3KlVnxELsSWih2TCOPSpq58ka350WYEpNQIFXqku7KwZdsAnKfRtPcwMKVxezO%2FSqOP5YMPI3vy%2FTZVannJyY2Ve%2FGWIYrM5Xj4TcuIa69T8FBYPxbiTqwNXSOMLV8nyhNEoMxXLeaq3s%2Fwe%2B9liKgxm9TmNPw2USVGgfJdIajXY4Rp2zR0lEIc2T0O03b3zP2%2BTSo5p2dVV6VI9CFZ5tm5WyATPg%2B1eoTB6zW3DzVfQzgxjaHQf%2B0MyXqiQ0cQ%2BhO3MnTsSMVDQOaBJ0E87KEQUjHbOeyeDe9Dlq1QxXDlauss0u2N9JOKVvDjPQpdKwyBnWZbTb4MVQjJEUSIypoMELsrNBAl4ibFux16n0fE4eQGBYJLrV16BNMO6LeF7HCscTQfJUVA5duOvkyyQA4HADwmSZTyJBZgzCYk8VNBfVn0mMFhsd2mQUOeD5R2HmAL0MrFE2eDvKQlJtpeO7unz3MK%2B3XvsHrpkyjY2K0YL2xdJmxzPHpv4ZljX%2F%2BZ28bGFumcUGOiIKnptiZ2%2B0jFiT8lfj91GhdObYEjft6HI9ED64FMFWzgQSRB2Yp8QjH8Advmvle3%2ByogEMPKDyMQGOqUBPhMwLTIAOi5oy2DZyPq%2FTVSbpMBXweg1spe44hfGCDx69eSHfXfHzyOTUHJjEE7tAJ%2FG58q7%2Ffv52tNqDCqRTl9loZpRR7%2FduHac9GMo451xkv%2FPcQA5HXoEAAdubZNfnYipmsidT2hCSUNyuC3oEBwZVbz2TIhyNio4s4HVtDWqDXJWFPM2mEbE2Cat0YN0cehNUloDNnp6Uq21Si15VIQKarCC&X-Amz-Signature=f13248cc21a553096afe94dd166019bc2162149a6aa17097fbc17c23206b4851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEJYA7K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF9bx7T8aIT7di3wpgstL0xZ%2BnFiDvwk6V4pqDsiF7bXAiEAi%2B8CKOazmnfi3QwkOgWtIWrE26Zxu0E7mYPxOcO6B0cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMDKE67HVrO8h%2F2lCrcA1M%2BQj2ZYlLvlzy8%2BFYBWVz%2FSn1UY7mXs4%2BxVVWJhEol3KlVnxELsSWih2TCOPSpq58ka350WYEpNQIFXqku7KwZdsAnKfRtPcwMKVxezO%2FSqOP5YMPI3vy%2FTZVannJyY2Ve%2FGWIYrM5Xj4TcuIa69T8FBYPxbiTqwNXSOMLV8nyhNEoMxXLeaq3s%2Fwe%2B9liKgxm9TmNPw2USVGgfJdIajXY4Rp2zR0lEIc2T0O03b3zP2%2BTSo5p2dVV6VI9CFZ5tm5WyATPg%2B1eoTB6zW3DzVfQzgxjaHQf%2B0MyXqiQ0cQ%2BhO3MnTsSMVDQOaBJ0E87KEQUjHbOeyeDe9Dlq1QxXDlauss0u2N9JOKVvDjPQpdKwyBnWZbTb4MVQjJEUSIypoMELsrNBAl4ibFux16n0fE4eQGBYJLrV16BNMO6LeF7HCscTQfJUVA5duOvkyyQA4HADwmSZTyJBZgzCYk8VNBfVn0mMFhsd2mQUOeD5R2HmAL0MrFE2eDvKQlJtpeO7unz3MK%2B3XvsHrpkyjY2K0YL2xdJmxzPHpv4ZljX%2F%2BZ28bGFumcUGOiIKnptiZ2%2B0jFiT8lfj91GhdObYEjft6HI9ED64FMFWzgQSRB2Yp8QjH8Advmvle3%2ByogEMPKDyMQGOqUBPhMwLTIAOi5oy2DZyPq%2FTVSbpMBXweg1spe44hfGCDx69eSHfXfHzyOTUHJjEE7tAJ%2FG58q7%2Ffv52tNqDCqRTl9loZpRR7%2FduHac9GMo451xkv%2FPcQA5HXoEAAdubZNfnYipmsidT2hCSUNyuC3oEBwZVbz2TIhyNio4s4HVtDWqDXJWFPM2mEbE2Cat0YN0cehNUloDNnp6Uq21Si15VIQKarCC&X-Amz-Signature=819b050ff3c79fd7e7ae76fb258c4fc32f1826f4cd1d13a023efbe575cb2ffb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEJYA7K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF9bx7T8aIT7di3wpgstL0xZ%2BnFiDvwk6V4pqDsiF7bXAiEAi%2B8CKOazmnfi3QwkOgWtIWrE26Zxu0E7mYPxOcO6B0cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMDKE67HVrO8h%2F2lCrcA1M%2BQj2ZYlLvlzy8%2BFYBWVz%2FSn1UY7mXs4%2BxVVWJhEol3KlVnxELsSWih2TCOPSpq58ka350WYEpNQIFXqku7KwZdsAnKfRtPcwMKVxezO%2FSqOP5YMPI3vy%2FTZVannJyY2Ve%2FGWIYrM5Xj4TcuIa69T8FBYPxbiTqwNXSOMLV8nyhNEoMxXLeaq3s%2Fwe%2B9liKgxm9TmNPw2USVGgfJdIajXY4Rp2zR0lEIc2T0O03b3zP2%2BTSo5p2dVV6VI9CFZ5tm5WyATPg%2B1eoTB6zW3DzVfQzgxjaHQf%2B0MyXqiQ0cQ%2BhO3MnTsSMVDQOaBJ0E87KEQUjHbOeyeDe9Dlq1QxXDlauss0u2N9JOKVvDjPQpdKwyBnWZbTb4MVQjJEUSIypoMELsrNBAl4ibFux16n0fE4eQGBYJLrV16BNMO6LeF7HCscTQfJUVA5duOvkyyQA4HADwmSZTyJBZgzCYk8VNBfVn0mMFhsd2mQUOeD5R2HmAL0MrFE2eDvKQlJtpeO7unz3MK%2B3XvsHrpkyjY2K0YL2xdJmxzPHpv4ZljX%2F%2BZ28bGFumcUGOiIKnptiZ2%2B0jFiT8lfj91GhdObYEjft6HI9ED64FMFWzgQSRB2Yp8QjH8Advmvle3%2ByogEMPKDyMQGOqUBPhMwLTIAOi5oy2DZyPq%2FTVSbpMBXweg1spe44hfGCDx69eSHfXfHzyOTUHJjEE7tAJ%2FG58q7%2Ffv52tNqDCqRTl9loZpRR7%2FduHac9GMo451xkv%2FPcQA5HXoEAAdubZNfnYipmsidT2hCSUNyuC3oEBwZVbz2TIhyNio4s4HVtDWqDXJWFPM2mEbE2Cat0YN0cehNUloDNnp6Uq21Si15VIQKarCC&X-Amz-Signature=60a1b0ae5d5f5cda4de49463dc4cb217a11482ddbafad0e21ae9aca616b2c975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XP46WKH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICYUf%2FS5iaSm456V1wbvvQmuVeDr3appaU8JuAVl2HtlAiEAmjVx%2Fc2AI1zoYnTE1JPssvjuV1Y2utgjLE%2BIQOOOjeEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGyku24G%2F%2BB5u37ybyrcA8ebhaiR9nPneSFPie0dBKcXMOoplh8NrOMf73NfV%2B0uKODX1bf32pGOMJ2jl2nnbOnwdHanTy%2FD%2BZWYOItKE9460omDAAF2scjCLv7AybJHweuqnB2e3FtzUzL3jfeUzZh5CWkzHAptwfBEH29hg%2FFPaQ9rkfBqxuomYqPs6TvwYbZ6aSxphdVKds8Lj%2BRa%2BYvT%2BN%2FZ9pkNHwrWxg09WKx6MjVTxTUevHEbipUaljpca%2FyPDnHYaQshyZsui6Jw07HV738M%2BvcONQLwk4j1MTizx1IEAfmSTryvMaEm7mKZhCI3VyhlmvAnQN9Jbp%2FyXzXcCm5m1cUwksSjLZ5XTZZLmC01LjuB9v3LiGZuOXeJSFPqtAyNNdYZpQ%2BlgesLr0ZZsOWGmOxeUzG4auZIVRnDlAFoG0033O0fXrFAdedDUxDl%2BR83ncE3cL9nWmC06Wf0mnKZiVLMRpG61DODy%2Bk1Yyr0iW3L1wZ5siOu7QyDXdc%2BdN%2BpfzhiBsEqj40tBIuU38sM24XpDBMtFr5BAXGopX7IMoOCG5m%2FOWEgvLwrX60Y2EoRZB7ib1njhA9OHOHkKJ9ZhUBi5RdmcxDZPBaz5dmd0T%2Fmrqf3Xa5wkzeHlM5OP9Ktwn13u6JVMJiEyMQGOqUBioLk8Ccsti%2Bwnb7lc6SRtXH0mDTfndV4fuvMxR1UH5YxqS4dgEIQy7PIHpeHD27sX3tHDrE35MQ92KtsG%2BcGOu02v%2BFAio4AJHeI4CAOJ%2BAw1aoYMm0Gm01xvdTOGZZ25gAhNoweRkpC9iGIRuVBdxqT0cScyzhSPSGoNq1RF8MoEmWsEXBOa39hpHmrdCRpRaTNv8aDEMflHy%2Fzf6dYcRr8q%2BK%2B&X-Amz-Signature=d6d7960f08a6ed358a8d8d3936510e81a1a2a5ee8ef131be88e9229a6f96f929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYK4NTQC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHNuWQbGe%2BoHLyTkZ1707ks7NM5x3vbSafBZVx1cCfD8AiEAvefQDU1Trt3uXAX0JNKempMvHTGXHSzGQuxLvG6e4z0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ9vPdLMzxz2lGTXMCrcAygib6lm49B8N6Wh5PHRMMOPRip8NbbOhHpJL%2By3GPBk6oNn6qWA1aSJEHA8nazfPW%2Bgl3QmAsMVKU4b8npYAmdC5ovCxNNbQ%2BY6QM0EoRERN%2BmeJLJw6A%2BFCcGcotnYtzTASS%2FDW3zF4xOQPN9bupC5pUMUgE6imG0VpzcjmpmCnNWXVXYaLydNu6rIWGp2Sf199XAr3JuW%2FmiiYuxuUMZweFS2qFBSl9k8LfxPq%2BYoFQ3etg%2BJQX1K5XovIByHsOBA4JpvW94e2lHfeOKVS9Dtloo1Q1E1VU4Oe2LQ2sGcYX%2FllV2PnOBnWnFoCxHLzgYJ8ghlBGXR275ZUthNFnQQ%2BojQhmBfiSsX0jcCMlCLbxcibcnGX7zQOG8bl7tUlVHhMZcNpeG7qfEIXPI2srDiuPu%2B3LDqqWnOz%2Bs9tXwJ9Mj8mqObzt5F1mLmLhuCxygOZlGpQLDiMCEjdByBjWU1NAgYthOUYzTGWrf0Az92q1s7ckmfC08C9tOkFcuX5clQYaQpPgNgOo74YVVJApDCOc8ahiSVU6XM3u21mNtQBJBct6xVbKj4V4JeKNHGws0liiorcxTPZDV%2BwgznETTV6M8ojgyZc3OAKEAlFhDOrFTSVbiiLnMbnKpsMK%2BEyMQGOqUB0B4eSqgHrtrrfEtOYGw8QU8FN9MRQs1XOKeJZQZqo%2FhaHXUUlNjEM1%2Fo1ijApgt5RaKhfo8qbsD3qYt9WACOB0rMHODhOMcdKgEy9idNc10ZkepaB5W8j%2FuDILnE9Ok5HcpoiYh%2Fl20aMhLmOBGWOaj9BmiKrNu0SPk7EwMu9qvMly7Z3LKr%2Biu%2ByCQqo1RMOAqHMmKS%2FuRWubTLX5Cl%2BYpTcls4&X-Amz-Signature=8bd65eea828e8240756e93a3bde86e4305098c6a9ff49639d4df70fb048f3473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEJYA7K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF9bx7T8aIT7di3wpgstL0xZ%2BnFiDvwk6V4pqDsiF7bXAiEAi%2B8CKOazmnfi3QwkOgWtIWrE26Zxu0E7mYPxOcO6B0cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMDKE67HVrO8h%2F2lCrcA1M%2BQj2ZYlLvlzy8%2BFYBWVz%2FSn1UY7mXs4%2BxVVWJhEol3KlVnxELsSWih2TCOPSpq58ka350WYEpNQIFXqku7KwZdsAnKfRtPcwMKVxezO%2FSqOP5YMPI3vy%2FTZVannJyY2Ve%2FGWIYrM5Xj4TcuIa69T8FBYPxbiTqwNXSOMLV8nyhNEoMxXLeaq3s%2Fwe%2B9liKgxm9TmNPw2USVGgfJdIajXY4Rp2zR0lEIc2T0O03b3zP2%2BTSo5p2dVV6VI9CFZ5tm5WyATPg%2B1eoTB6zW3DzVfQzgxjaHQf%2B0MyXqiQ0cQ%2BhO3MnTsSMVDQOaBJ0E87KEQUjHbOeyeDe9Dlq1QxXDlauss0u2N9JOKVvDjPQpdKwyBnWZbTb4MVQjJEUSIypoMELsrNBAl4ibFux16n0fE4eQGBYJLrV16BNMO6LeF7HCscTQfJUVA5duOvkyyQA4HADwmSZTyJBZgzCYk8VNBfVn0mMFhsd2mQUOeD5R2HmAL0MrFE2eDvKQlJtpeO7unz3MK%2B3XvsHrpkyjY2K0YL2xdJmxzPHpv4ZljX%2F%2BZ28bGFumcUGOiIKnptiZ2%2B0jFiT8lfj91GhdObYEjft6HI9ED64FMFWzgQSRB2Yp8QjH8Advmvle3%2ByogEMPKDyMQGOqUBPhMwLTIAOi5oy2DZyPq%2FTVSbpMBXweg1spe44hfGCDx69eSHfXfHzyOTUHJjEE7tAJ%2FG58q7%2Ffv52tNqDCqRTl9loZpRR7%2FduHac9GMo451xkv%2FPcQA5HXoEAAdubZNfnYipmsidT2hCSUNyuC3oEBwZVbz2TIhyNio4s4HVtDWqDXJWFPM2mEbE2Cat0YN0cehNUloDNnp6Uq21Si15VIQKarCC&X-Amz-Signature=984122c3efb522db9447ef917061dabfc47d05667437618e79dece96d5225af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
