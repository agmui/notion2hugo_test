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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667T2MZV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID2NeXaVF0uHhXVeoZxGvhGloBjy3QL5BRv8IZlxS3QzAiEAnmgpv1otHU3cOGtxQNo8NQtVsIDf8hKGcgwT1OcogdUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJuaDQjHx4rm7fhDPSrcA57M2OonTRNHji6jvM1xQAxFVowY7Wjyq55Rp6WZC0EXi8KosgPMGK5mhH9YzVTtCA%2FK9938UXTU9Ib8jX%2FsJZ7tFmSZa2SWCBQpO3VNfZTVqVEAElWlhZ6keMj8uFCq9gmOw2gU4f7qNLDo0m46E0tvceeNc5eqF9SBe8BSrrU%2FKTKZXb6lk%2B7O8%2FnsF8k6YYKRAU9kk%2Fz%2FeeBbOxprXaFn7Rf4PAMxz%2FePaN2ZvTbiFG5hwYkF0WB2s34v0bzE9ohM2xwyAbB3IxDyrJAewKclbCy71j51s%2BbChyKt5sqPU4%2Fl2DJ1c8RuwhqhQoHEGtwL5a7Wa1coaEWNh4%2F8yK%2FmPnlvTVdPhcnidaLKjoku1dF6wKMy%2F4OHcB9VU1fJBXs9%2F4tS6ZUusNe8zsSLv24s%2B1X9O1KkvGeApnXgofZRYrkAeVrxHg413yJ5v%2Boeg4AYnJnBjBfO6s97VkQ8HxDOYqNutVJSqjgZ60MaFJcyuULhTdIlOvKl0k57lVpoGJpwnJUsPpyJUZerASqDXC12PF93g080XiE3ytoD62X1rxN4sMq%2F3L1ufkVusS1EZVO0agTu%2Bx2K3aodfYfR92CDHWaD0FfJCx2T9MaC4LdUaK3QVU592%2FQz1l6uMLm7tsIGOqUBMNrRgghjJsHDsrOn8pEfLfh4ua06P7Rju4evicvkYKwyT6kGI%2BoKj%2FB1KG%2BN9r%2BHc%2FSIg6b8Uuz7prtrofAQBs1IJOIeMMFBNFcjtEZtSHzUBWqH3u3eOq5KbD1djQA0MOoOwRbUatUFl2ntjZlvUnzPoa8vudCCazmqtt5G%2BwnZ3Jay7sCcUSLitu5mi5%2FC0JJHa6RuO1ZM06sf%2Bm0QsO6eV7sL&X-Amz-Signature=2a16390dd47c8f4fcca2c412eea5ca5a5a729fe75c2bded65306a45bd91166bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667T2MZV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID2NeXaVF0uHhXVeoZxGvhGloBjy3QL5BRv8IZlxS3QzAiEAnmgpv1otHU3cOGtxQNo8NQtVsIDf8hKGcgwT1OcogdUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJuaDQjHx4rm7fhDPSrcA57M2OonTRNHji6jvM1xQAxFVowY7Wjyq55Rp6WZC0EXi8KosgPMGK5mhH9YzVTtCA%2FK9938UXTU9Ib8jX%2FsJZ7tFmSZa2SWCBQpO3VNfZTVqVEAElWlhZ6keMj8uFCq9gmOw2gU4f7qNLDo0m46E0tvceeNc5eqF9SBe8BSrrU%2FKTKZXb6lk%2B7O8%2FnsF8k6YYKRAU9kk%2Fz%2FeeBbOxprXaFn7Rf4PAMxz%2FePaN2ZvTbiFG5hwYkF0WB2s34v0bzE9ohM2xwyAbB3IxDyrJAewKclbCy71j51s%2BbChyKt5sqPU4%2Fl2DJ1c8RuwhqhQoHEGtwL5a7Wa1coaEWNh4%2F8yK%2FmPnlvTVdPhcnidaLKjoku1dF6wKMy%2F4OHcB9VU1fJBXs9%2F4tS6ZUusNe8zsSLv24s%2B1X9O1KkvGeApnXgofZRYrkAeVrxHg413yJ5v%2Boeg4AYnJnBjBfO6s97VkQ8HxDOYqNutVJSqjgZ60MaFJcyuULhTdIlOvKl0k57lVpoGJpwnJUsPpyJUZerASqDXC12PF93g080XiE3ytoD62X1rxN4sMq%2F3L1ufkVusS1EZVO0agTu%2Bx2K3aodfYfR92CDHWaD0FfJCx2T9MaC4LdUaK3QVU592%2FQz1l6uMLm7tsIGOqUBMNrRgghjJsHDsrOn8pEfLfh4ua06P7Rju4evicvkYKwyT6kGI%2BoKj%2FB1KG%2BN9r%2BHc%2FSIg6b8Uuz7prtrofAQBs1IJOIeMMFBNFcjtEZtSHzUBWqH3u3eOq5KbD1djQA0MOoOwRbUatUFl2ntjZlvUnzPoa8vudCCazmqtt5G%2BwnZ3Jay7sCcUSLitu5mi5%2FC0JJHa6RuO1ZM06sf%2Bm0QsO6eV7sL&X-Amz-Signature=542bbb0bf09c90e96ce42b535dfdf5f038f6a9be6140974d902320366d715142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667T2MZV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID2NeXaVF0uHhXVeoZxGvhGloBjy3QL5BRv8IZlxS3QzAiEAnmgpv1otHU3cOGtxQNo8NQtVsIDf8hKGcgwT1OcogdUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJuaDQjHx4rm7fhDPSrcA57M2OonTRNHji6jvM1xQAxFVowY7Wjyq55Rp6WZC0EXi8KosgPMGK5mhH9YzVTtCA%2FK9938UXTU9Ib8jX%2FsJZ7tFmSZa2SWCBQpO3VNfZTVqVEAElWlhZ6keMj8uFCq9gmOw2gU4f7qNLDo0m46E0tvceeNc5eqF9SBe8BSrrU%2FKTKZXb6lk%2B7O8%2FnsF8k6YYKRAU9kk%2Fz%2FeeBbOxprXaFn7Rf4PAMxz%2FePaN2ZvTbiFG5hwYkF0WB2s34v0bzE9ohM2xwyAbB3IxDyrJAewKclbCy71j51s%2BbChyKt5sqPU4%2Fl2DJ1c8RuwhqhQoHEGtwL5a7Wa1coaEWNh4%2F8yK%2FmPnlvTVdPhcnidaLKjoku1dF6wKMy%2F4OHcB9VU1fJBXs9%2F4tS6ZUusNe8zsSLv24s%2B1X9O1KkvGeApnXgofZRYrkAeVrxHg413yJ5v%2Boeg4AYnJnBjBfO6s97VkQ8HxDOYqNutVJSqjgZ60MaFJcyuULhTdIlOvKl0k57lVpoGJpwnJUsPpyJUZerASqDXC12PF93g080XiE3ytoD62X1rxN4sMq%2F3L1ufkVusS1EZVO0agTu%2Bx2K3aodfYfR92CDHWaD0FfJCx2T9MaC4LdUaK3QVU592%2FQz1l6uMLm7tsIGOqUBMNrRgghjJsHDsrOn8pEfLfh4ua06P7Rju4evicvkYKwyT6kGI%2BoKj%2FB1KG%2BN9r%2BHc%2FSIg6b8Uuz7prtrofAQBs1IJOIeMMFBNFcjtEZtSHzUBWqH3u3eOq5KbD1djQA0MOoOwRbUatUFl2ntjZlvUnzPoa8vudCCazmqtt5G%2BwnZ3Jay7sCcUSLitu5mi5%2FC0JJHa6RuO1ZM06sf%2Bm0QsO6eV7sL&X-Amz-Signature=57a5295ee954371fb63b66a6a35de7e0a5747efe687f5914f01480098f28e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPHLSQD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHhVs%2Bm7oHzwKWMdjwmS8NCkmliKsen2L7Z7kZzbmAM1AiBho2%2BMlncTt5uKzCYhPkSoJushJhTvZQwL%2BpusfYc5HCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2BAOY2QpDUnr43M3QKtwDY%2FahbmFuxWBYUcgKsdyftQI28wG2JbSo7%2FRKE2kl00ddunDJW23K8H%2BpPYvOAPijJj7gIcuemTk%2Fqp4PokmKqsgUmAGs%2Bxouk1Yh3cS9AqfNNzW%2F1JP6FaDNxlgBv4w4rvDQXO7uBI5zby3WXy21QVvLW166bBBH5HrYcx%2BA7K1f0T7OcWQJgfFvFjLrFUXuTRZqbiLOdzfbRBQrnVtgmSUl1%2BdWZd6OHaIREvgHLGG9B6ij8UVbBb03lm%2FQD%2Fo02%2BSw8EowtKCWNZQe9ADJtynZSE%2F4MawDbmJ4OKsJ9vh%2BIkcODReFZc%2B47iq2yTn2mczGRaQHQPyTGwRv6Q12UtkT2AeHxv6Jcu06siWIGHoqEBnFQ2b1gZEoT3iS%2F7%2BHOhICnQ4Isknj1%2BdP7fhWKLww2Lx1Io1fKkxYwd7CLyHV3uNxv4BSGwWDyLo%2B1thoOesd%2F7p6%2Bggfx1x6Ibfm0sj8NhsiarmNeP611BgQcqkFzv%2BIUMa9ldv0UGHwqshx%2Fpx%2F2dUEOFQMne06%2FwbOIp8oDUwTIlu9OFcM1N%2BSiupMSJMmA6KdsVxuyLqFaQsTVoFjCS9pjKUDPkpOlBcj3NbpFHTy4bsJMZhRkXMFnkp1NJcSd6VAs820Lacwsbu2wgY6pgFMIEoyLRYjSLLOz6Qyg58OuVX%2BnXtTDsyaGk%2BTD9VUXXgUgbfkVKfyptn7prNyxiqBe%2BCajsspOcLVp8ZYicyvXOlytOt8QyPTFNh7RV%2BJjSk1lCpZLYXPVFiwQm4h%2Bhw9r6W3oRE2p%2BBbXSr91EMFmo5JeKL%2F%2BJZMb%2BYyLRH12%2F%2FBU5ObtQYEiG%2FOGSXNpjn5H5frF1SopoiBlio%2FpBtuAkkPk9nV&X-Amz-Signature=7206e85e73ccca5781882a6fb5b7aefdb4211204608ae39b2ea282dd871b250b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWGPTUB2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCTBGvT18b1AIGNfpY4uhSK65i%2FxwQex2nFr0DtQTLiUwIhAMyUJ4qxSCzVERXc%2BkhkjdXgEBIImaUTHq%2BoIZPRG7m3Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyxsW8%2FcTgRzzaN7Gkq3ANv6RqAPrBSlKPGqW71BeSuBJ%2Bn3ENA%2BQEtSKt3FnKIXNk3dnqeUgLZrgEVFIofEHsDIQ4V7vS5jlu5mH4xsrWJNI0bvOiCnKFfZiXKJ33445ETUmyLXPDoZxkTzbnA7yGkvl7UsSNQry%2BbYntguaJnAQTzgSbSw8T6YiSxR2vaAEI8Qd8dpFMGTB49%2BqovAVd%2Bm2oI9zRZ5984JumENA31O629k7yxFJQYO0qOnG4omTOic4xECmfEb3HuEuQtedCWfP3x8sxKq1bxpugMGgYxKoEFV7G%2BVKzNPDpWM%2BONq%2FIVjCWNPS4TQMeKrhWHnL7tlwYioLF23I31z07Sjl9InwZaZAm91nPuGXONjhmUswQzNoPQMbKpDrlI3d2Esj7wMWDAQY0YrV2iqjdqdDcH%2BWzhWx%2FacaXOLX3EuiNKMRE%2FsmTZu5IChP4iN6oofzE9NsryQWaBvPrOZNaSh2l2bRVtgQHypsyPLhDIsR%2Flz9f6FsMkjgwXbXtyTDEhHSIniUjbm0tYRn6VRyYOGOMK2PuEmC884Fw%2F%2BTazKsyAquRovpODBAYEgpgY56LRArX3BssPZv4PbZnta7liFVuLq2oBxVE9d0o7FtDy0JdKQ1qp0E%2BvNqsJp2DC3zDHurbCBjqkAUMVEMLKwn2ZMJxZs5P6vd14bMuO7rJu3zbMjCeXvgmCvHAkz3UG%2Bo5ScDSodUFhMFWQtRaNUsajtkfk3f96kkzkj72mTURSV6OmLOmQs22fqbI40BsiDuGOn1QSYgHOIO6N9pHOQ4XxHhxw6B9AkfUMoS00TdXOm4c2hcsuob%2FJCPDRMX7a2yn5Yb04I%2FGENO%2BiLBmlx62thvfiHP%2B4ewoCUCZU&X-Amz-Signature=ca235c4fe1cd434b0abe2f36deb34475f93a94e67bb719847efb676d935d86d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667T2MZV3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID2NeXaVF0uHhXVeoZxGvhGloBjy3QL5BRv8IZlxS3QzAiEAnmgpv1otHU3cOGtxQNo8NQtVsIDf8hKGcgwT1OcogdUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJuaDQjHx4rm7fhDPSrcA57M2OonTRNHji6jvM1xQAxFVowY7Wjyq55Rp6WZC0EXi8KosgPMGK5mhH9YzVTtCA%2FK9938UXTU9Ib8jX%2FsJZ7tFmSZa2SWCBQpO3VNfZTVqVEAElWlhZ6keMj8uFCq9gmOw2gU4f7qNLDo0m46E0tvceeNc5eqF9SBe8BSrrU%2FKTKZXb6lk%2B7O8%2FnsF8k6YYKRAU9kk%2Fz%2FeeBbOxprXaFn7Rf4PAMxz%2FePaN2ZvTbiFG5hwYkF0WB2s34v0bzE9ohM2xwyAbB3IxDyrJAewKclbCy71j51s%2BbChyKt5sqPU4%2Fl2DJ1c8RuwhqhQoHEGtwL5a7Wa1coaEWNh4%2F8yK%2FmPnlvTVdPhcnidaLKjoku1dF6wKMy%2F4OHcB9VU1fJBXs9%2F4tS6ZUusNe8zsSLv24s%2B1X9O1KkvGeApnXgofZRYrkAeVrxHg413yJ5v%2Boeg4AYnJnBjBfO6s97VkQ8HxDOYqNutVJSqjgZ60MaFJcyuULhTdIlOvKl0k57lVpoGJpwnJUsPpyJUZerASqDXC12PF93g080XiE3ytoD62X1rxN4sMq%2F3L1ufkVusS1EZVO0agTu%2Bx2K3aodfYfR92CDHWaD0FfJCx2T9MaC4LdUaK3QVU592%2FQz1l6uMLm7tsIGOqUBMNrRgghjJsHDsrOn8pEfLfh4ua06P7Rju4evicvkYKwyT6kGI%2BoKj%2FB1KG%2BN9r%2BHc%2FSIg6b8Uuz7prtrofAQBs1IJOIeMMFBNFcjtEZtSHzUBWqH3u3eOq5KbD1djQA0MOoOwRbUatUFl2ntjZlvUnzPoa8vudCCazmqtt5G%2BwnZ3Jay7sCcUSLitu5mi5%2FC0JJHa6RuO1ZM06sf%2Bm0QsO6eV7sL&X-Amz-Signature=05cdfe526394c9c996dbb6df78ba99c3bda8d99f2f0cb52f5f0e665fbcced949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
