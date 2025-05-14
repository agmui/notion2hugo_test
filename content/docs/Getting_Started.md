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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OIRGET%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDvOu3ahw2KbOhesG4OPn9sSWNqRfVZlZesdC4cTW85gAiBQtRcx9e6pVGtDL4P5%2FxQiQSAm2GD81m5AOBjw9sppsyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrTxtaWrlmRW%2F0iwKtwDSwbn1TS%2Fr03cwVa2IgxCHiuCOGkjWTsSm6Wz5H%2BvAJNgC42%2FXvkdX5fY2q9KR5bNls%2FZQVue3oqVhKo1l6IoSUCkMHXML9og6O5ibqeG7dPoQg93QNYNeFte3YCjUzi6x3cJvYCRJeH1fTgiSVUXS0vX0RbvRYjvfqQjmKnHzxEoyvt82x2nc6tnehr8ZEXLj6Wt1h%2BdcLGIbDugxR%2FojeL%2B9QXNJlj7gjULnJkL6OfdykjWDXiVf6kv6sOdqdEMo7PmUuFaRq82h2zOpbdVx4e181I3Ox6ywKLluWTOHPT0yXkE9FD6GI9GpKghLaaigWLNga6IDXms%2FWpqR78fCaBFMJH6yn%2BdxuqrOlcpRDr%2FoHXLVfzPru08cgGfda3uOQL6VtNLY5en1kND%2FDhki%2B%2BzpAI4CW9dNc0D3ujMQDJTzvJd0IFYmMRiH68mF8QWSbUvIH%2BtsAV9dqoq9aAqG7hYRpbwrDiOeqg%2FQgXsdDVociAZJicxsJSslOsAyHTs2wsVsuNqxTlvNE8lLJG2eWeTuqfPJ35V1PsQ7Zi679LxjQYl69%2FE4c%2FrVDtDHa2edaKR0QDFfkLmhFBC8lFxnAjiE7TVfU4oyOhDr1jyE%2FcYiMT2Q%2BtlCnu1csMw8fWPwQY6pgFSPGhJaALz%2FfNixe0hkR33yUN1DV6n9AyA2lo%2FEYmqVLOSbc0eUc1elY9FpvvtQUgkNq0JHUBU%2FLS55r5drKxuvC5sj%2B3wVRYepXH8e41jUfq1a4QxaRG0R2PerJ2%2BJDBH2pDjZjS86mKWjnSonCvAoMZR2Rp3XbvTbXSYXuFM3nQS7AF74QQzCtkk70eIvE2WLHa6SERTDbYr4dqfZFS2wkqw5xhK&X-Amz-Signature=81abfbe90608174664b2bd43d75dbb969f0cac39bdb71455579f6885dd7d21db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OIRGET%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDvOu3ahw2KbOhesG4OPn9sSWNqRfVZlZesdC4cTW85gAiBQtRcx9e6pVGtDL4P5%2FxQiQSAm2GD81m5AOBjw9sppsyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrTxtaWrlmRW%2F0iwKtwDSwbn1TS%2Fr03cwVa2IgxCHiuCOGkjWTsSm6Wz5H%2BvAJNgC42%2FXvkdX5fY2q9KR5bNls%2FZQVue3oqVhKo1l6IoSUCkMHXML9og6O5ibqeG7dPoQg93QNYNeFte3YCjUzi6x3cJvYCRJeH1fTgiSVUXS0vX0RbvRYjvfqQjmKnHzxEoyvt82x2nc6tnehr8ZEXLj6Wt1h%2BdcLGIbDugxR%2FojeL%2B9QXNJlj7gjULnJkL6OfdykjWDXiVf6kv6sOdqdEMo7PmUuFaRq82h2zOpbdVx4e181I3Ox6ywKLluWTOHPT0yXkE9FD6GI9GpKghLaaigWLNga6IDXms%2FWpqR78fCaBFMJH6yn%2BdxuqrOlcpRDr%2FoHXLVfzPru08cgGfda3uOQL6VtNLY5en1kND%2FDhki%2B%2BzpAI4CW9dNc0D3ujMQDJTzvJd0IFYmMRiH68mF8QWSbUvIH%2BtsAV9dqoq9aAqG7hYRpbwrDiOeqg%2FQgXsdDVociAZJicxsJSslOsAyHTs2wsVsuNqxTlvNE8lLJG2eWeTuqfPJ35V1PsQ7Zi679LxjQYl69%2FE4c%2FrVDtDHa2edaKR0QDFfkLmhFBC8lFxnAjiE7TVfU4oyOhDr1jyE%2FcYiMT2Q%2BtlCnu1csMw8fWPwQY6pgFSPGhJaALz%2FfNixe0hkR33yUN1DV6n9AyA2lo%2FEYmqVLOSbc0eUc1elY9FpvvtQUgkNq0JHUBU%2FLS55r5drKxuvC5sj%2B3wVRYepXH8e41jUfq1a4QxaRG0R2PerJ2%2BJDBH2pDjZjS86mKWjnSonCvAoMZR2Rp3XbvTbXSYXuFM3nQS7AF74QQzCtkk70eIvE2WLHa6SERTDbYr4dqfZFS2wkqw5xhK&X-Amz-Signature=ecfe41bcfe276b5bce294d9ea19db164bce1bb289baf0fa18f6efff4eb737743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OIRGET%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDvOu3ahw2KbOhesG4OPn9sSWNqRfVZlZesdC4cTW85gAiBQtRcx9e6pVGtDL4P5%2FxQiQSAm2GD81m5AOBjw9sppsyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrTxtaWrlmRW%2F0iwKtwDSwbn1TS%2Fr03cwVa2IgxCHiuCOGkjWTsSm6Wz5H%2BvAJNgC42%2FXvkdX5fY2q9KR5bNls%2FZQVue3oqVhKo1l6IoSUCkMHXML9og6O5ibqeG7dPoQg93QNYNeFte3YCjUzi6x3cJvYCRJeH1fTgiSVUXS0vX0RbvRYjvfqQjmKnHzxEoyvt82x2nc6tnehr8ZEXLj6Wt1h%2BdcLGIbDugxR%2FojeL%2B9QXNJlj7gjULnJkL6OfdykjWDXiVf6kv6sOdqdEMo7PmUuFaRq82h2zOpbdVx4e181I3Ox6ywKLluWTOHPT0yXkE9FD6GI9GpKghLaaigWLNga6IDXms%2FWpqR78fCaBFMJH6yn%2BdxuqrOlcpRDr%2FoHXLVfzPru08cgGfda3uOQL6VtNLY5en1kND%2FDhki%2B%2BzpAI4CW9dNc0D3ujMQDJTzvJd0IFYmMRiH68mF8QWSbUvIH%2BtsAV9dqoq9aAqG7hYRpbwrDiOeqg%2FQgXsdDVociAZJicxsJSslOsAyHTs2wsVsuNqxTlvNE8lLJG2eWeTuqfPJ35V1PsQ7Zi679LxjQYl69%2FE4c%2FrVDtDHa2edaKR0QDFfkLmhFBC8lFxnAjiE7TVfU4oyOhDr1jyE%2FcYiMT2Q%2BtlCnu1csMw8fWPwQY6pgFSPGhJaALz%2FfNixe0hkR33yUN1DV6n9AyA2lo%2FEYmqVLOSbc0eUc1elY9FpvvtQUgkNq0JHUBU%2FLS55r5drKxuvC5sj%2B3wVRYepXH8e41jUfq1a4QxaRG0R2PerJ2%2BJDBH2pDjZjS86mKWjnSonCvAoMZR2Rp3XbvTbXSYXuFM3nQS7AF74QQzCtkk70eIvE2WLHa6SERTDbYr4dqfZFS2wkqw5xhK&X-Amz-Signature=f76b2203e400e98f91393a66bac20f81c3c57cfc2829103e68ffb8fb59284e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6O45JL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCCYkbyQo1WnMkRN5w%2Fzz1Cs31eB4dL9JknRlKaQn7vWAIgOVSfpFTNO%2F7nskBQqxzhuVFU2QNnQ478eX6f%2FO1XfLgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgId0NhQ5pP00JERSrcA5d5aYm0CijYEx%2F5VcmZmWM8r%2FpfzAekP2BxdgDsulowhf6STli3TFfm9rwIoFZR2u%2Fq8sjcDCaf4lh7wGAlqltRK3TwZa1tXIgKr0cdc5nc7bXIK3ix7P86oC0DgyDQFNX9PQ2ePZgW3cuq67Vja7pijErv%2FH5bBUivByXT%2BXBK31pOSyXS40XPtjPabBepn%2BwpKLNqfY9oEQhbHWzg18qOZVUzWwdIN9UUU2ykC1Ku5p5wvFQptYtmm5GqxR6q6%2FEGsW9Js4abS8HFWkYRS9Ab4tZNS0xSDxhfIvYxzcG3Cr0hjTaUlTTWYTPi%2FHupBpXGfE1U0Q3ybc3SFKiJUbpmNQzGKWdmcO%2FfCI5Mp2JMGSRUKUMvhHsBm2lhJbVBjFPsFAUwXMk2XjCheqiyP%2BrUoiEi5zR1WLSCNUhRZW4FLKQL7mSXkzq9eFOblyFOFAQqOx25gx8XPbaMTN7qZZmJ%2F0CdZONHzXJSEzYcip3bWcbT%2B05wjyN%2BB7zhRH4Sz%2B1%2Feo6WLnujQICzJqOnmZuRnSY%2FI29Jt7gQaycIHdV%2BKDbnL9ULwSk7ADpp2yAzCs9ZxTVJJdAvB5jQ5TBP2kNlGDU0b%2BTxIG0cF5iGlhV4Vr88%2BQEAxuEWG42aMKPvj8EGOqUB%2BvVisPNEV3Y3BDefIx0D1Q73KUO%2BmbZpuAQbEINSitgCEE1r7SF606DsU06RU%2B%2Beh%2BqPaO%2FodiqnX5zOSD4XqtSZjUYyf5aU84MPSGSrZFVqiGD2kJyyfHeYscpTGYFgR2lAXyLiWho8aPoUeFVm7j1XZGvUzsVt0PM6XxZp8DvdirVeTxuW43QvJuzuqVxOyWmDN7vtTKYBh3ycC4JsEAGkb0OP&X-Amz-Signature=cd50a0c9f3dcb91d4afd6329912b141872bfdf47a8e88bfb652709ecf6de687f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BUP6FP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF4ZhOnRYQpseIjbOyaQHZ8eW2gLj2F17Rwc31ktCxAnAiBR381d1up9r2KP0AyJSIGSoTmoi1B2HUz73REWoHfWJSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW4bK2HgTvhu%2B432KtwDSu4ynzIddIfWA1XrRc2OcOVIreAPicgxK%2BLsfE03sWCs1sOwWeJP5uV4aYApP7VURE61iStwF%2BONx2HpkwE45zbsgbz%2BJY7tyR61UVfJmxs52GJrEDXMkrGe7nwR%2FJpvg6Q%2BhUku2pr8SrOAkbDplRrrVqBrh49y4bZ9Y436CO75ApBxA4ghz%2FNC3JB6MaUTjCi7igQZ6ZFpHldSmWcTqqnHnMjQNxRiC7NH3RaNSEEneU0zORNK8xV7DEozuH4F8bXNQny1XjRRhwdtHBELMqbSlY%2FtaA8xYHVC1GdfZYWjIcI%2F%2BvCZGfnjS13KMEvLGf6GTkfF0DpOnF%2B0ZmiA%2BiZH1Wisn9EHif8Y6dHWQS%2F2iO3SRtco%2FrXHsmVdJom5vsgEOUWyGLOkNKnh9bfvc0NuNC%2F2qwbr7b9E49AvKCFSEN%2B%2BfzQ%2B8iGXF4dGOIDm%2FYxD2n%2B6%2F8Jxta%2FX2LvBRAMnhzPyrDth4vQBfGPmzkVJcH4RRw4f9abafjQZXqT2Gjo3tBwLpOqP85c0dCw%2BYICT1BgpkzRldXL%2BDRjB2QRRP0aBJ5X7hdwukwrDCVthF1BEIAdgmh8ZFOGNJ7n2kJGQs%2B8bjT0dCzW5Vj3jzwpP2If1yk7yNh9PkfUwke%2BPwQY6pgEokUf%2FUwaX433eFlGYyJXh6jwi3Y2UL0eP5f%2FMRpViPn3HLnk3AaKahBbQeaQUk3ZNClUSZw8mwErGMFIKKyANpqQGxPA2vft1H2RAD7Lf%2FzrjKIQz0zal68IJnuLsaWH1lkLBUmJfVg6yrkgcd%2B0fWBDjsn74vTie0DG4BkOHjNCdW5aNykbdaY4JRuTbYUZVHonSscaal5ghdOAq4cRCv8z0u5PV&X-Amz-Signature=f781924f2813826ebdf8519b83b3432ce7c580f60434296fc333b4cc3e554827&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OIRGET%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDvOu3ahw2KbOhesG4OPn9sSWNqRfVZlZesdC4cTW85gAiBQtRcx9e6pVGtDL4P5%2FxQiQSAm2GD81m5AOBjw9sppsyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrTxtaWrlmRW%2F0iwKtwDSwbn1TS%2Fr03cwVa2IgxCHiuCOGkjWTsSm6Wz5H%2BvAJNgC42%2FXvkdX5fY2q9KR5bNls%2FZQVue3oqVhKo1l6IoSUCkMHXML9og6O5ibqeG7dPoQg93QNYNeFte3YCjUzi6x3cJvYCRJeH1fTgiSVUXS0vX0RbvRYjvfqQjmKnHzxEoyvt82x2nc6tnehr8ZEXLj6Wt1h%2BdcLGIbDugxR%2FojeL%2B9QXNJlj7gjULnJkL6OfdykjWDXiVf6kv6sOdqdEMo7PmUuFaRq82h2zOpbdVx4e181I3Ox6ywKLluWTOHPT0yXkE9FD6GI9GpKghLaaigWLNga6IDXms%2FWpqR78fCaBFMJH6yn%2BdxuqrOlcpRDr%2FoHXLVfzPru08cgGfda3uOQL6VtNLY5en1kND%2FDhki%2B%2BzpAI4CW9dNc0D3ujMQDJTzvJd0IFYmMRiH68mF8QWSbUvIH%2BtsAV9dqoq9aAqG7hYRpbwrDiOeqg%2FQgXsdDVociAZJicxsJSslOsAyHTs2wsVsuNqxTlvNE8lLJG2eWeTuqfPJ35V1PsQ7Zi679LxjQYl69%2FE4c%2FrVDtDHa2edaKR0QDFfkLmhFBC8lFxnAjiE7TVfU4oyOhDr1jyE%2FcYiMT2Q%2BtlCnu1csMw8fWPwQY6pgFSPGhJaALz%2FfNixe0hkR33yUN1DV6n9AyA2lo%2FEYmqVLOSbc0eUc1elY9FpvvtQUgkNq0JHUBU%2FLS55r5drKxuvC5sj%2B3wVRYepXH8e41jUfq1a4QxaRG0R2PerJ2%2BJDBH2pDjZjS86mKWjnSonCvAoMZR2Rp3XbvTbXSYXuFM3nQS7AF74QQzCtkk70eIvE2WLHa6SERTDbYr4dqfZFS2wkqw5xhK&X-Amz-Signature=5b2c3e3e2964d8b8074ae098a663f114a2bac1d8ae8e9c9b83dee5abe5e27502&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
