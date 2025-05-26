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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=df3858ee792d75eb8c5d6d3a5a3f804024bbbe7d6f6fb5bf66b45736f3cde62d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=7e1dc7036ef10b772c01fa40cf3c776c8ee68c61e87040baa794eaded32557a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=f00c9f7108fdfec4785bdb5de387757745ca20ff2144d54499f7fca16ddbed28&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVPVRNW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCICbDwl74HXcf7jmLbyDx47Z6hiPH7UKevYcsR1nhlX3tAiAmUTfCWd9CP%2F%2F5uyDTbrKRGvUlhy2FcHHJTwEEuDKPhyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhlh%2BtWRvQN7AEr1PKtwDk2Y2EcIOYsIJeKdBV2MtV%2Bs2UB%2Bp5L5tN4R4XrAGbNUBsXynOOfKx8mDL43FdVbQxuV%2FNfGT9wFJr3%2B1y4yzeJT%2BchcTZ1f4FqZl19l1ZGVT57nNSyJkvL%2BaUTMWEmD%2F2w6z%2FqVTg4gYszGOAzg%2Fw9avkuDTeGHCBiNT602XZekJ%2FrfwyBDBpMmAqTyx8eJlNsxnw%2BYlk7qEHGY%2FJTKrE9AfSJMNfiJC2kGHbOALDt35pQWjvRiJwvVrqPY0lQWjbs8vNS2%2FRXUsp0%2BcEfRqRFWoZ8IoIjAfiKp3SBS06nf0ta5zuER5ax3CWH77cCUMVq9Qnm1PR73%2BHqrl5%2BpXShD3e%2BwV%2BRaCys%2BhkaWUEM4FujdnCgxrPBhZ8ikplU76X2kbBILPB24l31UhTCRRzhK%2FuK8%2FNEJ6V52ZhjHmlWKOFoQmxd8NzDBjMkAFHeTVZGh3Dk2gx3hV3ckaWLAoJfItYDs4mEyfDilggidND6pdfxMttyC4N7RFQty3MIU3NRo1LuJ5KrzuZCRFnRbRzIFzJmYTybKqoKUFPWR5Xag73Zx%2B%2B3tXiJ5DadCWU6zdGXDVH1gYGpFfNxOH7XxQ0qQcQP3pthWMGjuXe%2FSNeypyx0bXQvfSFbqXuPcwgtbQwQY6pgEvA5aLsz0WsOThKvSACtSpmDH2IpRmW24wRqe9csHfWrJgyrzEWp0O%2Fjw6l6ELby5G%2Bs9jmx9l5ulEebhVTuhxEZzVE8x4IPwv11aOmXd7hkLwEUOnE5Ictx0GFkex1Y5lpa%2FZAXaXvT7eNA%2BgK2px3VTGJjXSHFh%2BybX4Azqu%2FW0UlfhmikdEIgJMyZu00GyEaejLSstB7kauca92MN5g1Ukl%2B%2FAo&X-Amz-Signature=9e1640d325644c7b7805f4132be1a039804e46d38673d915fcbed3a859728019&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCELTASS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCRxqUKIHnGqOFwnCQWWUN1CzVeaTBwIIcXPBOtTTkpxwIhAOxOZuWyQLTsB4VMqW4puFZapoLSAddp9scjok8tJu%2BsKv8DCEIQABoMNjM3NDIzMTgzODA1IgzJSQT01QolYhDaCfQq3AOp3%2FHvMva9wVZy8Z9cPCDhnjKWdisD074HJRHjiglaUXYsLhO6xzwPp8uKiIdmnfDKOHIvYCHuP4RzqyY%2F8xqak5WawUcALN2Tn2xNqJfzijY6dwNGkoa6VNCXrUQZH6yo15lTR%2FrFctSt5Vxps1F8Eu188qM7Cp%2FnWD9mkbQ2jgrR3DZamaDk%2BljnFeR%2F%2Fe%2B%2FLA6QSLVhVYU7OEWGIEcbA18IDzCCuYsFVcjGCepE0DVdbjlvf2lvqdRhxZ95BCEZQak7QbdCnq6LLWpLl2159jdOeDRikkBJxugzLYsKtUEll7q4OeVXgEdR%2BKQFozWnQcN9%2BnAS2HluuPcKtfhPVrvZ%2BCtScL7QwDTQxj%2FzsSJEkwa2G7Kr7DnqoctiKJCx8kYw9er2K2jdD%2FhB%2BmhSQpWmcJpdL6ZNyu157ZKDYhh0Ki%2FI77%2B5%2BMxHae5n6ZcsGYpD1sQwQA15DE4g8uK6mo6W7k%2BDcnqoTva8Gcnrt%2FgfVC%2BvSQU%2BhAi42NGDbCfWMLYE028DzRfFifCoG5F9wLSOY81QvXqsV7%2B34%2F6UzhYbpSzNv7l1TGiYhbqglehamLD4tm6UTawI4pQP5%2Flc9eTxIaiDmVjz2cPBJju%2FprCqDnvdmnoozbmnOjD11dDBBjqkAUW%2B6oXFTMIYFkyXbe67aGUY8bLu32%2BVejNqbb4jpKnxo79VjvtYZAZ%2FEg0yIjxELCc8mI3cA%2BjpsoXOYCJuQ%2BIwzuncH5s8tYk7Iq3DISywlRczy%2BgDS7BDEHtngDh0UTd4HBq7QRW17NL3Hnz90zY1jytfgUEx5yGauYMzJ2ffrFD7OwLBql22tTBAxI2Brc7A7L55tSbfNAlmt%2F%2FvTQ1bfXd2&X-Amz-Signature=fa8360af2a3ab061886a4d2c3b641720301f053a38646118f41742dac0875720&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=9461f04f4ac30a58a1195c2370a737ab76143bb35a793c745597950b06b01fde&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
