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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=a3f4447841d2038082ed2110e242a2033bfeec0a8a2ceef9e75d67b23b82f988&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=b5c49092e00d074ea26f8503b08a16b19e5e36822bc415124cc73c4c9399d857&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3H7PST%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBz6A9NFY3049KRYC9RpHTIQpzwRIkEt8gOdqiwPLr3AiEAgwmsz7p8cBRRJyUr5XYABwzcDQ1cmbxKd%2B2SbhozmyUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGoB65OItFbBZ%2BhwCCrcA%2BeaU49mP%2F04zFliWKznS%2FlEAmaxGPuXJr1FnpsSQeI%2F%2FNmcn%2Fke86y%2B30mVtwg1FBqRu0hZKuPyulj056A6mMWsNX1ZEC9cAy%2BDz92m0c8r3LcM7f8czOHihxVB5foPZQQnoFNk11orBkbznpAER98v03zO0SE3tHbu6QVRfKy3uuBMYEGvtPXK7gqx5Uq7Fbh%2FtTUpZdlZHDjd0LuHylBy7xR%2BB6o%2Ft71CgdUVkd9YDbtAwau0Oo5sk1fXx3C45WXoaR6%2FyXlQzU05VAgistcrP1rmlDuK33C0R0u9VzlBpVXw%2BU4H31AYDWQWNRd73zx0E5C7GzLvzsMHmNwz4GzyyYEXlcWf5IuRwfGisIOEB%2B9rCM9sFveFideQU1mNn383KnnRgHRysV6ucdjh0wbrhXqSFSgX4PdW6WSmOFAIXiBYhpDuU5FQ3NCRZDaFdmma2oraVIuCi4AxyALVfmZ5qDgZwpwNnxp4E51e9646Ww5RpZaANNLCkEF0641YN%2BwaRNix7OI8k8GC%2BGjtDheJZEJry6bTwmHDtS0PB27llJtqw7keUd%2FYVkUYeAhTAC2aSSrBc9rlPoaCC8psoZyzyTG2aZhzis1hrzOR0%2Fua8c4p1bmzZuND1bv%2FMKD8j78GOqUBGlesR%2FlfMKj9MZgCmumN3ZDVAorPw6UZJyn2KoTV3wVhat4XDBuHv02inKYVtIJL4HFs1UEQmz6hRmkSWQsQA6zF%2FjA0Q9daQa8C3INxEfz%2BYKIMxf%2BkMpRKEHeQQiXeoBDVsopkhXLScpwh04C2RFHIEYKSfiHu5t6qPU6k2PgXKJWpGi9z71s3jvjmYnkkDvT7o7oYyEgv0UcFgWLgy4572XE6&X-Amz-Signature=0ecf2e67f27eee790153ad32828b5b4afe9caf6d303c4e1fc722948c09f5c195&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4DM44V%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL9LSTxvRLZhPnNpLiMkrUJrvYieeIrF8KmDZ01mT9LAiEA3mUJiLwc699aYssSAlwgs9LtMjyO%2FZW6INucc3NFqZkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNmQ14fqgkwLYOzpyyrcA0SNFDe0t%2BGaO7Y1n%2BC8HfCwp%2BCExCsbp1wUJCleVWbPqjgqF%2BbVIlHyiURze%2B41QjbMNrWEf1equOquytBdSlyJSabnV68IEm5VEJJf0O9uRa%2FNAtvKnrNsyW4giuKe1FeGNWeXjrb7gADcDNRzlWGwwB3hez%2B4vBrqCDXBUiLgt4ds%2BPn67S4MKAA7LJtnhY46R3cY9fR0DjgIDq%2FewMBnSOT5FC1M9SwULZeZvkSZgTGx6QqsbYQbIlbHo01%2BCW3mx7DpAm9pKDW3F8wYFC1cSD1jnObQbDUAU71u0GFHQK2Ns9fB5qulGDcJ7Va2iuwvtI%2Fd5iJ0HBBrSWuzWFzcwmwF1xs2ynrHrYPOvFFr1%2F7werft7mQhOw66yeLIPFKXMswHIqBcT8ASR4DZ272JPLpwfaxKW4zjB%2BbugiolqXTb80xx3q6heYjTDHFlfESs9HkK6%2Bi%2BNfdg6ZiYj4KVAU9lZQ2gyskAJlZ3gyVGOR8QYJhUH%2Fv1pCqFY0spVb16OJy0ZVR2jk7%2BQROnZ1gDgvJhLK3Ce3tbRiUwQtzT1up4N7LUkQLhtGzSgiZTbxzLc7UsLMRCy6Q5M0%2FMRKEQTZ1a8B926MzfFg87nzAFAbrqEc3O%2BOteQ8rXMIXbj78GOqUB76vaqb4s2daZ8x2qDJvab2OS2SfvO786WnuoeaUeh41qGzfueQvZoz1MpPF2E7IwIvyDUAxlQyZrbCfah7LAZES%2FmkfDPuq4a4eRVJgL%2Fz5Ux39aPbl5HW1YSZAFRuTW7JJm8xSwp19TrthLUlgu9nubNePvp8WIYgVoMJNnQc1r1zmZ%2F42yajANgoGj0pN4m3ss9OFdeRa%2BUzeoFWzWAKCvGDKg&X-Amz-Signature=7ea344a7495599e847cff72077f45139c52a0621cde1571aa1fc6282d4a955b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=b39e9c42c3742571d34858bba3b582cc8e1f3f8c09eb4c1137b0b3c8dc4d7a35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
