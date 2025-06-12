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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZCRGDG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIA2PUFmH3vW1HdBxNLvZ7LIT5f4mfEWaEanrGZchkVJbAiAUUn%2FK2Vz47HxJd6lN82%2FQxBWablVqGVslzav%2FXQwhzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0WJA5gB8Uh%2BGiqCKtwD10fzljWS9EDzd8KJETiaGw%2BNNrlQDYmKLBVKpjdkHIyj2IpX0lIISwDGl7VUVvumPp65t%2FLrgTJrnPA%2BkGWaf1nnlKGmZ9QJXYBxT7KIkx988SrulwaDUtvyTatQL8K0IL93Rh%2Fw%2BjKsiG6gWOCviJdBgNc22JYZGJia4iqPKjXh7PAf3%2FunA45Pdb4EMGQyIjp6gSNmNKOXDOnwTslHfrXtxFAwxiQpks%2BD3pAZKs5BqIbMZFt8R3TaRd8M4luwDEETQK%2B3VlAmxqFdV1PYJCh6d5WU5qGZHIfiWTtbrhe2adPlyKSHvfD81XpmipCzGh4OPvM%2BK7C89uy%2BdLW%2BxUQCbX9fIQj5idd5FfD9TVjMZW9YwAcg0vEBoW450oy%2FYVs0GdG2EmRYtF4gFFkqZhpSNjCIudhQ7wpd1M%2F7%2ByeajqFUzENfJ%2Bm0hVoxJlchjCyoAFveGl6YnxZgkjm0J%2F524OsriZxyMXnNB%2FaHt4cIaAhfqUwAznHzVtQ5l3srW1OpPOnd2gbf4u%2BZpevmPbRgEKsKU%2BK%2FkjhHt%2BSGWeEbDsPXFofHTF42YbGfXfXFbUx1CTM3P%2BmItoMtaAMXEiBkguVPWsnME2pKy7uCLDaa%2FiUKx7Sru7%2FQ73Mw4LitwgY6pgFMta1SqKPLzvalSTFb27uXeRC7zkUpm3xRZkZcfJxEfxcM0KNjGnJlCsB9n%2Bs8X5N6Zfj5VX1rb297QjxykaDyhSC%2Bc7ph6KICjKAi34wzWBmdSO3yPsELJg8FrUYv%2Fy0Ui4syacWwuGv0DAehkiKbjWFrPxftSI3fDYoTJGyl5KBZApYXPffvG%2BcOhkqrtE6lnXSPLBQGzojzGdGCS23w98Y6%2F4%2B9&X-Amz-Signature=2971d106fbe339d7bd8d60d23074acaa07a64eb6b568b2bb06c915fb6ecfd5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZCRGDG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIA2PUFmH3vW1HdBxNLvZ7LIT5f4mfEWaEanrGZchkVJbAiAUUn%2FK2Vz47HxJd6lN82%2FQxBWablVqGVslzav%2FXQwhzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0WJA5gB8Uh%2BGiqCKtwD10fzljWS9EDzd8KJETiaGw%2BNNrlQDYmKLBVKpjdkHIyj2IpX0lIISwDGl7VUVvumPp65t%2FLrgTJrnPA%2BkGWaf1nnlKGmZ9QJXYBxT7KIkx988SrulwaDUtvyTatQL8K0IL93Rh%2Fw%2BjKsiG6gWOCviJdBgNc22JYZGJia4iqPKjXh7PAf3%2FunA45Pdb4EMGQyIjp6gSNmNKOXDOnwTslHfrXtxFAwxiQpks%2BD3pAZKs5BqIbMZFt8R3TaRd8M4luwDEETQK%2B3VlAmxqFdV1PYJCh6d5WU5qGZHIfiWTtbrhe2adPlyKSHvfD81XpmipCzGh4OPvM%2BK7C89uy%2BdLW%2BxUQCbX9fIQj5idd5FfD9TVjMZW9YwAcg0vEBoW450oy%2FYVs0GdG2EmRYtF4gFFkqZhpSNjCIudhQ7wpd1M%2F7%2ByeajqFUzENfJ%2Bm0hVoxJlchjCyoAFveGl6YnxZgkjm0J%2F524OsriZxyMXnNB%2FaHt4cIaAhfqUwAznHzVtQ5l3srW1OpPOnd2gbf4u%2BZpevmPbRgEKsKU%2BK%2FkjhHt%2BSGWeEbDsPXFofHTF42YbGfXfXFbUx1CTM3P%2BmItoMtaAMXEiBkguVPWsnME2pKy7uCLDaa%2FiUKx7Sru7%2FQ73Mw4LitwgY6pgFMta1SqKPLzvalSTFb27uXeRC7zkUpm3xRZkZcfJxEfxcM0KNjGnJlCsB9n%2Bs8X5N6Zfj5VX1rb297QjxykaDyhSC%2Bc7ph6KICjKAi34wzWBmdSO3yPsELJg8FrUYv%2Fy0Ui4syacWwuGv0DAehkiKbjWFrPxftSI3fDYoTJGyl5KBZApYXPffvG%2BcOhkqrtE6lnXSPLBQGzojzGdGCS23w98Y6%2F4%2B9&X-Amz-Signature=75c85ac9421be412678761be8db6ca1a338503ec9686f88c39fe60cd2a1db93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZCRGDG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIA2PUFmH3vW1HdBxNLvZ7LIT5f4mfEWaEanrGZchkVJbAiAUUn%2FK2Vz47HxJd6lN82%2FQxBWablVqGVslzav%2FXQwhzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0WJA5gB8Uh%2BGiqCKtwD10fzljWS9EDzd8KJETiaGw%2BNNrlQDYmKLBVKpjdkHIyj2IpX0lIISwDGl7VUVvumPp65t%2FLrgTJrnPA%2BkGWaf1nnlKGmZ9QJXYBxT7KIkx988SrulwaDUtvyTatQL8K0IL93Rh%2Fw%2BjKsiG6gWOCviJdBgNc22JYZGJia4iqPKjXh7PAf3%2FunA45Pdb4EMGQyIjp6gSNmNKOXDOnwTslHfrXtxFAwxiQpks%2BD3pAZKs5BqIbMZFt8R3TaRd8M4luwDEETQK%2B3VlAmxqFdV1PYJCh6d5WU5qGZHIfiWTtbrhe2adPlyKSHvfD81XpmipCzGh4OPvM%2BK7C89uy%2BdLW%2BxUQCbX9fIQj5idd5FfD9TVjMZW9YwAcg0vEBoW450oy%2FYVs0GdG2EmRYtF4gFFkqZhpSNjCIudhQ7wpd1M%2F7%2ByeajqFUzENfJ%2Bm0hVoxJlchjCyoAFveGl6YnxZgkjm0J%2F524OsriZxyMXnNB%2FaHt4cIaAhfqUwAznHzVtQ5l3srW1OpPOnd2gbf4u%2BZpevmPbRgEKsKU%2BK%2FkjhHt%2BSGWeEbDsPXFofHTF42YbGfXfXFbUx1CTM3P%2BmItoMtaAMXEiBkguVPWsnME2pKy7uCLDaa%2FiUKx7Sru7%2FQ73Mw4LitwgY6pgFMta1SqKPLzvalSTFb27uXeRC7zkUpm3xRZkZcfJxEfxcM0KNjGnJlCsB9n%2Bs8X5N6Zfj5VX1rb297QjxykaDyhSC%2Bc7ph6KICjKAi34wzWBmdSO3yPsELJg8FrUYv%2Fy0Ui4syacWwuGv0DAehkiKbjWFrPxftSI3fDYoTJGyl5KBZApYXPffvG%2BcOhkqrtE6lnXSPLBQGzojzGdGCS23w98Y6%2F4%2B9&X-Amz-Signature=f72d068a5030e478a9fadb3ecb2b8b61c0465895039f3607c18c24786111faf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JP6JL4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDfd04BetuF%2FRe8a49sZ8GB0fKuqcWcFgq7nRAKgEX2CQIgd%2FngpQbaH6D%2F43Za6gH75z8Ey2q6r6clRCG6ZxFc8ioqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDofbR2u62i1kMIgayrcA9OuWS3oWVjyKk%2B70vEagrzc%2FpR3VgFr77rDN9SN2Yn2UglHu5ID049W264CXqdJoJ2%2F2jFC%2FYq0OQ0%2FoK%2BWCTH%2FmOaHEcNiFIUK%2BgFq7wFtr3WlSf1eIEXxwPIETxz4H0yg7C06YgrXjZRKR%2FXUAwNTOiz%2Bcj0biafG6rnF6lCKd8wU4NnFrPNhQRkhhKBwBIB8x2zwaCq9ToMH4Yh5ncA3Zp%2FbxghFDebQmNrSFW8XpHigWh5chphUtHtFele9%2FcYMNdSiCXG0xy0eg1CSyP1MLDHgaO6c68WoAN9r7ojWvalsumoyYUgUeMzF0I%2FKVCXUkd%2B7AH%2Fg9J7ch3O%2BpxE%2B73LO6jkFT5SKTMAF4%2BHvrlRYbW1axEXlLKlanr41UV%2Byi8hb4hVrb%2Fq6FA%2BGtpsbP7yrqW1pH5nEq6G6ADdPNFUrZsQh0U02KvxZNtDR9txHkIkyJC45kS0vaOaGxTgNSODk%2B4e7YC8MlEhVGYT2Y3gulyEu6ZsxuTZdzoFRgSWHVnk0fyhhVggXMAXUTXDtOZjtVGjjH5EEF892AGRT61pbBa%2BDUqi%2BJN%2BPZdDWXcpVcVD5hu8dv6bXVBiCYN0bvWNXX6ZFjJfRKr%2FzK2MNlsARuiK4yzPZvPbjMOC4rcIGOqUBSTXKhIGOZP63qSXjeRWsalfUMJ%2Bpvd0GZl1DnAgNxroxyPDqn80bDjqp%2BjVFPR%2F7Qeevuv8mSQQH%2BiLbrSPHhxVY%2BEOf9mlJVioGNJu6FduMFAU0To%2BBQesZaUdHifFfxdbP5DbsjTvGR%2FcnCNEaE08elq0%2BkpcYRVMMTpgDNVW9TXS35Q32wtljFcqFeXbW8B%2BnBrChCbu9b6HUk5D02Lv2Tlot&X-Amz-Signature=53f98976c5e707809dc89b19e43845ddf74017a03fac72bc02c209444a0bb82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SJBHIM4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDs8ra%2FrOTM0Jr37i2w9a2rAJGtJnMZNld96KMhg22uOAiAtoUnSQnmlLSGwXWvvR82RxsGas%2FazHpPCpguu4yUOsiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZ3kI0pjJdJ%2FMvZKKtwDx%2F5nS8D0iHonHRtoZ0UFq2vw3o1zXZhuhL2JgyYgvtoGgOPUZtz5%2FAQ7c8VlrLKBdmOE%2FYegp6ldTcSDUVsNHOKyfM77%2FlZSq2WuJVb638gRynikWgzdvPOM2quHX1BpJAhJgGBgefgW1xOcQkeya9%2BZIdZdWpl1Pb0CLZrXxNL4UNL94sboZGSy4vnjRB%2FAeTLvOS5f7mF5KHrhYR%2BSDVesu%2BM5XZcYjoQN4Apn5Ar4yjoNGGL2rOXv7F7JsHwjgls4KY7aWoaOJFY7kaKxlj%2BPa%2BEiviQ5mko5qskV9x9Ma9T%2Fy4m%2FMxBzfa9ppxEqKu4QLahyU6z3ILX%2FxY8rdlG8PRfPLRnSr3TjdkH7FQ6GD8rP3m%2BAUhgeFHk%2B%2FG9%2FB55f%2BacCZwQJt4rr5zKwx9gEClsZ1MmRCkvl%2BkCiyovxLHRh37ETBTgJhmhcBAryiTAJdyMrbYRw7MN9WdZBBsv6O6fedfFbJyOn3j%2BA2dkGAwOHP%2BHsZQ8lh%2FafJCZlRMapPebZeuMg2sVgKlphpiCT8U9S5IMVZtvuQsFEzMGOZ8Tq%2BYhwO%2F4rmWsFD%2FD1ZR2Mzh4tp8IYKQ8NGkqUK2922hJV9y9OM5TBCast3fEVM%2BtX4qAD%2BvpRNZAwirmtwgY6pgFGv0Du%2FhnoYyemB9DOghG8aj8x6cR3Iph7ppt%2BnUrL1lA6AXfW2N10rqMwmyUk9doZ6RtRRinCIfy3aGRZi4MTIlm9UV5%2BTU0TKiiV4IcMEXA4EaSogCM5YBsm0P1VecersgGEGfaU%2BImQm4ZyVBWMErJF0C1CXpQXNo1EAvyo8%2BUOzSORkLNeZ%2BweJAGi%2B2FhWkRkCJfSAEZg%2F4vDXneK071C1PE5&X-Amz-Signature=b817e741692d44e76239a0adaf13f135af7942b068d1af1cdc212e4ca83f0a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZCRGDG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIA2PUFmH3vW1HdBxNLvZ7LIT5f4mfEWaEanrGZchkVJbAiAUUn%2FK2Vz47HxJd6lN82%2FQxBWablVqGVslzav%2FXQwhzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0WJA5gB8Uh%2BGiqCKtwD10fzljWS9EDzd8KJETiaGw%2BNNrlQDYmKLBVKpjdkHIyj2IpX0lIISwDGl7VUVvumPp65t%2FLrgTJrnPA%2BkGWaf1nnlKGmZ9QJXYBxT7KIkx988SrulwaDUtvyTatQL8K0IL93Rh%2Fw%2BjKsiG6gWOCviJdBgNc22JYZGJia4iqPKjXh7PAf3%2FunA45Pdb4EMGQyIjp6gSNmNKOXDOnwTslHfrXtxFAwxiQpks%2BD3pAZKs5BqIbMZFt8R3TaRd8M4luwDEETQK%2B3VlAmxqFdV1PYJCh6d5WU5qGZHIfiWTtbrhe2adPlyKSHvfD81XpmipCzGh4OPvM%2BK7C89uy%2BdLW%2BxUQCbX9fIQj5idd5FfD9TVjMZW9YwAcg0vEBoW450oy%2FYVs0GdG2EmRYtF4gFFkqZhpSNjCIudhQ7wpd1M%2F7%2ByeajqFUzENfJ%2Bm0hVoxJlchjCyoAFveGl6YnxZgkjm0J%2F524OsriZxyMXnNB%2FaHt4cIaAhfqUwAznHzVtQ5l3srW1OpPOnd2gbf4u%2BZpevmPbRgEKsKU%2BK%2FkjhHt%2BSGWeEbDsPXFofHTF42YbGfXfXFbUx1CTM3P%2BmItoMtaAMXEiBkguVPWsnME2pKy7uCLDaa%2FiUKx7Sru7%2FQ73Mw4LitwgY6pgFMta1SqKPLzvalSTFb27uXeRC7zkUpm3xRZkZcfJxEfxcM0KNjGnJlCsB9n%2Bs8X5N6Zfj5VX1rb297QjxykaDyhSC%2Bc7ph6KICjKAi34wzWBmdSO3yPsELJg8FrUYv%2Fy0Ui4syacWwuGv0DAehkiKbjWFrPxftSI3fDYoTJGyl5KBZApYXPffvG%2BcOhkqrtE6lnXSPLBQGzojzGdGCS23w98Y6%2F4%2B9&X-Amz-Signature=6e640a5ed2b73c6602a0217507280d2d9a1308b49577a4246a14ca2500d34cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
