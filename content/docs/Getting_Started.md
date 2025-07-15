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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNNO2W6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVAgx45wUn5UDovjhAglvCXR8CZaZB6lpWSCKoGdko6gIhAJH0zrYXeB3pcXgQ10By2qHCS0ZOPcEau1PRhiX6x7HpKv8DCEoQABoMNjM3NDIzMTgzODA1IgxnX1gyAH1P%2Fhp7ebEq3ANDjb7tgIoeS8eW8rClmQbD6D%2FqAEzAfJR4UhZEti16bzVDYhHA4dncLh9gyPjPW1D9LdcMKm%2Fa5me3ABK7PY8TszgsrQy%2FLdVpMgprKBYd1f9kmzSwvqUbNDx4C9kuyz1ZRvdN7Qf9FF7YPVUfy9nS6dsC9kTJ%2BFh9DeIGFYSPAr0sjWkkUZkB%2Fxqh969qcYedLVJDWub9tnbU5fMr9TNhN%2BZQ1j911lwgRWXsAwbquaPNjjTh%2BonLbHtncrepSsce%2BaGbiFgtVM6UP3wTzNj9STxAYteLN0zM11dfUgBbrTlV71opSE7XD4rwiV5Ur1KwVEWOfd1GQXH2FumvJEXik9uMqoBFxmJ8%2B8j7Eb%2FixQzvjsFESrT9XygwbB8TMhOZH01tan8HJWUXeWq0U7oCfbmxBkJ3TjuMuEJB3IlmR3lC3E4eb5Qcmj0Bcb5KYQ3lemqErHod1Gv7BbrzG%2FuEDC3HCpFJD9011NJD224qSha24MtetHWtvNet0xq6o%2F%2BZgyXfxzL9Fx9m6h0dLE3%2BhuL5Fyr7UoyEX4wBw09prAtpyTM8RK%2FWlfj6cayd1uxrWdF12YIQRj8x3XKzlumGwyoZzQUggwCHDlzPPj4haKnuYX6iodNYt68QJTD9hdrDBjqkAUcdN1M24g1w3HJnhm5Z7pl7yenvqi5%2BjSiFpW4xGmbbvujSgyz0ehMS%2BUObSJpY4Lle3NqmZWDFi10DyZA8nZkvJnoJ6iSsmHyZ6RqTxKLBGdf0F6mvqscm0eh%2BhS8m8gRd6M3qHPxIJDH1432jyrRm%2FktVr5amxbF7yZ6pGqwVMbL09GcQITyPKH1Q%2Fb6jW%2Fke0czfpTwpg9XQFltshxFE0tOM&X-Amz-Signature=80ccf8ee154e71639d83ea1c50196d618af276b9e868bc2972ebba205b1397b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNNO2W6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVAgx45wUn5UDovjhAglvCXR8CZaZB6lpWSCKoGdko6gIhAJH0zrYXeB3pcXgQ10By2qHCS0ZOPcEau1PRhiX6x7HpKv8DCEoQABoMNjM3NDIzMTgzODA1IgxnX1gyAH1P%2Fhp7ebEq3ANDjb7tgIoeS8eW8rClmQbD6D%2FqAEzAfJR4UhZEti16bzVDYhHA4dncLh9gyPjPW1D9LdcMKm%2Fa5me3ABK7PY8TszgsrQy%2FLdVpMgprKBYd1f9kmzSwvqUbNDx4C9kuyz1ZRvdN7Qf9FF7YPVUfy9nS6dsC9kTJ%2BFh9DeIGFYSPAr0sjWkkUZkB%2Fxqh969qcYedLVJDWub9tnbU5fMr9TNhN%2BZQ1j911lwgRWXsAwbquaPNjjTh%2BonLbHtncrepSsce%2BaGbiFgtVM6UP3wTzNj9STxAYteLN0zM11dfUgBbrTlV71opSE7XD4rwiV5Ur1KwVEWOfd1GQXH2FumvJEXik9uMqoBFxmJ8%2B8j7Eb%2FixQzvjsFESrT9XygwbB8TMhOZH01tan8HJWUXeWq0U7oCfbmxBkJ3TjuMuEJB3IlmR3lC3E4eb5Qcmj0Bcb5KYQ3lemqErHod1Gv7BbrzG%2FuEDC3HCpFJD9011NJD224qSha24MtetHWtvNet0xq6o%2F%2BZgyXfxzL9Fx9m6h0dLE3%2BhuL5Fyr7UoyEX4wBw09prAtpyTM8RK%2FWlfj6cayd1uxrWdF12YIQRj8x3XKzlumGwyoZzQUggwCHDlzPPj4haKnuYX6iodNYt68QJTD9hdrDBjqkAUcdN1M24g1w3HJnhm5Z7pl7yenvqi5%2BjSiFpW4xGmbbvujSgyz0ehMS%2BUObSJpY4Lle3NqmZWDFi10DyZA8nZkvJnoJ6iSsmHyZ6RqTxKLBGdf0F6mvqscm0eh%2BhS8m8gRd6M3qHPxIJDH1432jyrRm%2FktVr5amxbF7yZ6pGqwVMbL09GcQITyPKH1Q%2Fb6jW%2Fke0czfpTwpg9XQFltshxFE0tOM&X-Amz-Signature=16fa88aadfd1e1b80e99ab4b373a5e371071a3387fceabc42fe05fa1595eecac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNNO2W6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVAgx45wUn5UDovjhAglvCXR8CZaZB6lpWSCKoGdko6gIhAJH0zrYXeB3pcXgQ10By2qHCS0ZOPcEau1PRhiX6x7HpKv8DCEoQABoMNjM3NDIzMTgzODA1IgxnX1gyAH1P%2Fhp7ebEq3ANDjb7tgIoeS8eW8rClmQbD6D%2FqAEzAfJR4UhZEti16bzVDYhHA4dncLh9gyPjPW1D9LdcMKm%2Fa5me3ABK7PY8TszgsrQy%2FLdVpMgprKBYd1f9kmzSwvqUbNDx4C9kuyz1ZRvdN7Qf9FF7YPVUfy9nS6dsC9kTJ%2BFh9DeIGFYSPAr0sjWkkUZkB%2Fxqh969qcYedLVJDWub9tnbU5fMr9TNhN%2BZQ1j911lwgRWXsAwbquaPNjjTh%2BonLbHtncrepSsce%2BaGbiFgtVM6UP3wTzNj9STxAYteLN0zM11dfUgBbrTlV71opSE7XD4rwiV5Ur1KwVEWOfd1GQXH2FumvJEXik9uMqoBFxmJ8%2B8j7Eb%2FixQzvjsFESrT9XygwbB8TMhOZH01tan8HJWUXeWq0U7oCfbmxBkJ3TjuMuEJB3IlmR3lC3E4eb5Qcmj0Bcb5KYQ3lemqErHod1Gv7BbrzG%2FuEDC3HCpFJD9011NJD224qSha24MtetHWtvNet0xq6o%2F%2BZgyXfxzL9Fx9m6h0dLE3%2BhuL5Fyr7UoyEX4wBw09prAtpyTM8RK%2FWlfj6cayd1uxrWdF12YIQRj8x3XKzlumGwyoZzQUggwCHDlzPPj4haKnuYX6iodNYt68QJTD9hdrDBjqkAUcdN1M24g1w3HJnhm5Z7pl7yenvqi5%2BjSiFpW4xGmbbvujSgyz0ehMS%2BUObSJpY4Lle3NqmZWDFi10DyZA8nZkvJnoJ6iSsmHyZ6RqTxKLBGdf0F6mvqscm0eh%2BhS8m8gRd6M3qHPxIJDH1432jyrRm%2FktVr5amxbF7yZ6pGqwVMbL09GcQITyPKH1Q%2Fb6jW%2Fke0czfpTwpg9XQFltshxFE0tOM&X-Amz-Signature=db2a8ab99dd3c511326ac9f2bacbba4e6b00bec30aa6c7f31d33385068d899f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXYGCJ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDsVxcgj37cFahnrWYpicePYASVH9b4FUwq7QJmPhbTogIhALNjZWG3l88ht8ooNRzTbI0sWqlsd1EBdQgt00RbEfU9Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzvarpsZeI16oS3tvAq3AM2QzKLCLYtWYzaZS7Zbc6JBP1M9uBz3GOJ1GHT6NEBA4X9Lb4rKx11XUVz55zcdsWOOMoPddC%2BGWegMOTKiJr%2B38%2FZED8Fq2qy1GRm9EJGYpapBsW4M0q5AGGRf8AQ9EMfeCJYT%2FiU3bJKkw5NTTigN9Nd1cCA5LLIQ5LZcIQU2zs%2B2rx8k8jTHCk%2BgqTr9xnwy%2BKMy6NR96pdXbWVqYjuXfPTInXYRExbVlxoE7mpFiWMfpVcReKn0iMhKAfOY8tyi3CoDYUdE%2Bp4hycZxqQ4%2BVrPr1haJSHfunjyJpJLadOJgWacUanJUhSyFP1ly4BssdxgMHUGrzomTSMV2EPXu9W2z1kuLWok%2B7eywqFNGnk%2BT%2F%2BlMYqjNZq%2BAGhGKEG%2FuNQQulabCLHh2WlB%2BVXtp8AmdamZdtjTdvTkreaGLVRi%2BFXocyb7kS5IvAhG3WAONjtYdeuLiV5A9U3mjpMbvc0DuCWooQVOEiDWjn9uufRLAHPhUHCwcUEZDlu7AVFL9KvcSi%2B2xaShYqI8hEplTFpaQFtI0EX5f1gHPxBcSCVSSoAIoZE3BOvXuBDHbxdBfBIS1i1oc%2FjJhVDDO53s5%2F0RykT%2FBOKT2b6yZceKiALzYMHOf0q6zB4dczCHhtrDBjqkAQdZMxpbOU1m7%2Fy3L4zKLeTbr8a9FYbJ0IXHLZ8y8UH6Pkam6%2BAu7XByzY%2Bh8VqyZM7FwQqvWLVnsnW6IxrSr4U0ZfJQRCDoK9msg5RGfqFZUtD1sSjm2HD7mAv7Wm1XYY6uU5%2Fn9BuMOymFL9aVW8%2FtzK55X9VHkZJ%2FxPRBc9jaW6COYIrKnmsqioENFYvLOcyNF0aZT%2BhDPyjZmH2ebOKSd3il&X-Amz-Signature=dc1bfbf65a0d57e847ffd9bc379d675987402bbe276848c26ae9cfd2a3e371a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWIODODG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVBJbqC1kSCyHZCbWr6gSH8br5LyygmE94ttkUPmn5jwIhAMJa5TmVJUT7kgvttVi%2F7cdUuRI%2BJYMahD0IWwxOXmXlKv8DCEoQABoMNjM3NDIzMTgzODA1Igz5qwjLPCH669vx0ekq3AOAfJRlOez0u9AUXi07FGJ90Pz5ij2nQiEdl686y8%2BvFshtFQ5qU5ORM4TXLpQH0EBEXzaZVvXap%2FoX%2BPXxkWeVMyrv95IdiD%2FUz1I9GqLvUXpYF2cOyVNEGHf3Vd2k8q2SLulfCTM8IEBld3nzlB97PCxcdLMaMHAImqM9CnrkMpKFgGi2i40%2BNKdDwyam9jHoymePvB5TOV18NEpn2r7sK56QdN5pddwidbCrVpOQCXPsmbuC0UJqUmqz%2BNn0UtOH7M0wstRMCHpA19Ys0vgfnEAsboy4JIA0xfQh6m9wv%2FZLPnbHWBKCq2yOt7161mq0PeT4W7skoHJK4goQLmFp2Bu6aeuMvs0yP%2BM4DvdCmr5kIsDdOS9JjcReSUb9CZJMgAz918EswbaYbxzcQtrTpJAi6Ni%2FXRkO5mOFHdWplo835mOAtG2b%2FOvRqdXI2N9uRyIHGBz6n0jG0Qng7T1gFfThznQ7J9LGxi9qRc9rcSJUOUXWaLZZGnuUkZgp9rc0wWME2wbaUvyMoyvZebP1PW1c7wURQj33be1Tbhf%2BV1w0NC6rZyPyywxeVvqENFOyJJyTds2qzGWgkzwbwf6uhyWUmzlKcktbGmD6w%2BFemIbTvayE3iWgaIQeaDD9htrDBjqkASb9a6YEpFgD2Tfb0Djds6CX5nRgxFQoqrahfhWxG3FRMg49xbHTjOMErVY5z65aPJ1LI9RzaySaggAHqFjXfzumA0LBpm711ccA6s1To8%2BMmm1QYXrsX8rMxTyzk5D7h2K4QbAR6yQdXTY7jsZC6VinBhKKq6D8l16DxUYcRQMs6uTLm8oIOB4f36fJmVYv3ax%2B1IJ01qDvBoL%2Fitli9vSXdEGh&X-Amz-Signature=dfd54dfd51cdcbc46fd09e8e27eca213df1c1e88dd885c1c20513a24c3139ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNNO2W6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVAgx45wUn5UDovjhAglvCXR8CZaZB6lpWSCKoGdko6gIhAJH0zrYXeB3pcXgQ10By2qHCS0ZOPcEau1PRhiX6x7HpKv8DCEoQABoMNjM3NDIzMTgzODA1IgxnX1gyAH1P%2Fhp7ebEq3ANDjb7tgIoeS8eW8rClmQbD6D%2FqAEzAfJR4UhZEti16bzVDYhHA4dncLh9gyPjPW1D9LdcMKm%2Fa5me3ABK7PY8TszgsrQy%2FLdVpMgprKBYd1f9kmzSwvqUbNDx4C9kuyz1ZRvdN7Qf9FF7YPVUfy9nS6dsC9kTJ%2BFh9DeIGFYSPAr0sjWkkUZkB%2Fxqh969qcYedLVJDWub9tnbU5fMr9TNhN%2BZQ1j911lwgRWXsAwbquaPNjjTh%2BonLbHtncrepSsce%2BaGbiFgtVM6UP3wTzNj9STxAYteLN0zM11dfUgBbrTlV71opSE7XD4rwiV5Ur1KwVEWOfd1GQXH2FumvJEXik9uMqoBFxmJ8%2B8j7Eb%2FixQzvjsFESrT9XygwbB8TMhOZH01tan8HJWUXeWq0U7oCfbmxBkJ3TjuMuEJB3IlmR3lC3E4eb5Qcmj0Bcb5KYQ3lemqErHod1Gv7BbrzG%2FuEDC3HCpFJD9011NJD224qSha24MtetHWtvNet0xq6o%2F%2BZgyXfxzL9Fx9m6h0dLE3%2BhuL5Fyr7UoyEX4wBw09prAtpyTM8RK%2FWlfj6cayd1uxrWdF12YIQRj8x3XKzlumGwyoZzQUggwCHDlzPPj4haKnuYX6iodNYt68QJTD9hdrDBjqkAUcdN1M24g1w3HJnhm5Z7pl7yenvqi5%2BjSiFpW4xGmbbvujSgyz0ehMS%2BUObSJpY4Lle3NqmZWDFi10DyZA8nZkvJnoJ6iSsmHyZ6RqTxKLBGdf0F6mvqscm0eh%2BhS8m8gRd6M3qHPxIJDH1432jyrRm%2FktVr5amxbF7yZ6pGqwVMbL09GcQITyPKH1Q%2Fb6jW%2Fke0czfpTwpg9XQFltshxFE0tOM&X-Amz-Signature=20f08c82e9c8daea45467fc07c795870f8886e1b5be844abf3c06ac4ccb3c06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
