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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPT7NBBG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsk3Y8rFOyv0QUsBVcI8XvIUNzgdeauc9KJvTHcWRrnAiAfF3xZDl3ivtzZYMh2nUSm9b%2BZlC1Q0KMu%2Bu6N3Ils%2Fyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMfyLBbjCrhbLP8Bd1KtwDJk5U0Gbl4NKumSW5XL155dWDfo2hTTOyup97ub2bOaESHL5ljHSt4yvsEu1Rwds2mT%2FvCme2Z%2FovHXoVBrb3m0DssrOM0Qc%2BN3sZ4199x0bXSFaFDz26Qdlb2%2FDiRe7kiXBGElh5kg2kbogKxfc06OSCHW4mSFrWMnclN2johvsVP6yBI2ow5Svt2Ki41xe6DLPZo0Pyq43AJFJcCruiysnE9tYf1eMDqm8IMaDdUnD%2BdHJMCh4D8lf7qRQcsbOxl98dhPfYCG%2BUwvuB%2FDk3HWPfQhgcp6Tc3ofl4kDw9QgnyHeSfvjeLGFoxbFwOLcstaGSei7szM1sGI7Ebfkea7wfmVQHadJUGXFd7uWvrT7Vobaiqn3%2FjTqkNYQPql9ushhVoq0HESO7GfE1zytb8c6tqgGm0m1wLU0buq%2Fc9zaw%2F%2BI7xOnrJy45p0tndK06MY89UNeYfXYy2%2BMlWEQeKmgopqJ4%2FPc1eYYlxzzQ9M36ABa58d4GO4UzEK4ZD1ANOUJl1oFc12z6n1j%2Bvh9uwB%2FS3Pu3OV68D3h8NluGzTQrcE8uLM296FQg5kX%2B0elAJM%2Bocfl34LquLuFOH0DoTivVqTWJ9OUr6edT180RPXPPlfzNd3cl%2Bx9zobUw5Y2SvwY6pgFQGYn6Kecx%2BFILW1o%2BSp3Wz5jC0CITP25fqxHN6mAk7xnbdhE%2BNJUrq1pHqs4X5bMRHXWiIGfcqidR5vQw6usw%2BBY4PN9SSuQiCnsV1WOMNnpptS0rWH1IjP%2FTsCS36U%2Bsuu%2B%2FTN6pCNi619zxGGCQUz3a28YQJKq4TDrcKA4z7IbM7kzm29dKsnd5RqC%2BiO3T0U%2Bj4IZ3DeaN5BQg1Ziotj0blBoV&X-Amz-Signature=90fc99117794ac5fc76b36ce20750308cf0b5434b8e33495d9aadcfed8181b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPT7NBBG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsk3Y8rFOyv0QUsBVcI8XvIUNzgdeauc9KJvTHcWRrnAiAfF3xZDl3ivtzZYMh2nUSm9b%2BZlC1Q0KMu%2Bu6N3Ils%2Fyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMfyLBbjCrhbLP8Bd1KtwDJk5U0Gbl4NKumSW5XL155dWDfo2hTTOyup97ub2bOaESHL5ljHSt4yvsEu1Rwds2mT%2FvCme2Z%2FovHXoVBrb3m0DssrOM0Qc%2BN3sZ4199x0bXSFaFDz26Qdlb2%2FDiRe7kiXBGElh5kg2kbogKxfc06OSCHW4mSFrWMnclN2johvsVP6yBI2ow5Svt2Ki41xe6DLPZo0Pyq43AJFJcCruiysnE9tYf1eMDqm8IMaDdUnD%2BdHJMCh4D8lf7qRQcsbOxl98dhPfYCG%2BUwvuB%2FDk3HWPfQhgcp6Tc3ofl4kDw9QgnyHeSfvjeLGFoxbFwOLcstaGSei7szM1sGI7Ebfkea7wfmVQHadJUGXFd7uWvrT7Vobaiqn3%2FjTqkNYQPql9ushhVoq0HESO7GfE1zytb8c6tqgGm0m1wLU0buq%2Fc9zaw%2F%2BI7xOnrJy45p0tndK06MY89UNeYfXYy2%2BMlWEQeKmgopqJ4%2FPc1eYYlxzzQ9M36ABa58d4GO4UzEK4ZD1ANOUJl1oFc12z6n1j%2Bvh9uwB%2FS3Pu3OV68D3h8NluGzTQrcE8uLM296FQg5kX%2B0elAJM%2Bocfl34LquLuFOH0DoTivVqTWJ9OUr6edT180RPXPPlfzNd3cl%2Bx9zobUw5Y2SvwY6pgFQGYn6Kecx%2BFILW1o%2BSp3Wz5jC0CITP25fqxHN6mAk7xnbdhE%2BNJUrq1pHqs4X5bMRHXWiIGfcqidR5vQw6usw%2BBY4PN9SSuQiCnsV1WOMNnpptS0rWH1IjP%2FTsCS36U%2Bsuu%2B%2FTN6pCNi619zxGGCQUz3a28YQJKq4TDrcKA4z7IbM7kzm29dKsnd5RqC%2BiO3T0U%2Bj4IZ3DeaN5BQg1Ziotj0blBoV&X-Amz-Signature=e2abb78fcce4bed48d990bd46a08278e4113dc0cc56ed5576a5ccab8fc2ae7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAZUIWZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FxgBCrs02TFAwvDdXmT98alrIcvJpca3Aou76cTcfbAiBuxH3Y6ZtwfkXcgaB7XxWakdYWreJFEpMds%2FF093Aktyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMhfgo84myOVFHjWTpKtwDf85YAlKphHKAdwI8cuek%2BFVKXeXV1x%2Bdh1gXmEw%2BQ6lJG1I1Elb76AWi5jEIM4%2Bf6pi7JNb1gGYHfPJATuOrG0CMI4ZdcxoLCUAMCcf7XTpKsoJnsPdawwTRt%2B9OyrtY2%2FFD0pHJ4VlgBl0CidhGj4%2F2OUoe1oe0l7FdYY9kzQKGhFZookBiFpV2blBj6ZO1%2BmANMARZt%2BLFX1lyEnlQpqT0ruSOSnq6G%2F9BH3xF6mnC4VMB3wc6Nhd26QybgzHsAykPsLRJHiT5BX1mFAayNpIwgMhCEzQ0J9YLNES1iwcvsBj5GG4zI4NJYQAZPWZ6U6%2Fm%2BeTOM8RYGAmAdqy9DoGwxJnpdNVmZdymZxDwAtRLXwsdegs3e77HtO3L7E5VZCK6bVMs7NTiXQID88saPAVd%2FTekfAtCUfYdVfCnXvdHQYolR4Yk8d2zxJiSTs4VeOfg1YeT%2BIYHMndKypyJndjR0Yta7FZyvwTSjnrOIaBKHk4djnMcc5hd%2BBuvQa3p3Nm1ds6fVqx6eLKF0bcHiCkn5Vzmgd%2BzvnLpjQKDY7jfkvhZHako7%2FFQYVpbe7Gxq7fZqQMs9CrLN8UbOKbTp4lTTOhNF1tT1uVoJoE87OMg5tmvQjFddRXZniAwxI2SvwY6pgEg8LFQT5f%2F%2FWTMo22VZs82SQdCLb%2F2mziG8B98lmxDPYPBK5YykEms9MH7ZZmCKeXQwbqozQYVPL9FQtPqESN9TVLGaTWmgkHcxHcH%2BdtxQx9yoobc9fBEs6c%2Fz2zcEP%2BokwwuT8Eshgz8K90X64rR1n5N9h5GrihDOsWe%2FRnd%2FeZUymtR0E1Pn%2BEd8Tt7hSAprqFcA8gcxACZYIR6zXreyvfyFO%2Fz&X-Amz-Signature=02f8d94472747cf90cc4ef6125208fb64777ed7fe0f29b7e5fc0379249296e47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUQTLFB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9%2F8JzmBkV09BEA3GDiWDzvHUdPDj6jjJ7WkKuCJJEgIgJn2p%2BubGL%2B24E1uxznGW49isXe670OLbL83BcCwnQIYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFQsXS0s4Z%2FgMwJ4ISrcA5FNps6F04UyqK23wG7p694kXRwSYcVJH0R2iN4UoCf2kMtDC8nL2I94uu97Msoajj29bXw%2BiUBNiBuKxvVykvpnvRfDtrLQcIVOFePbWVIgIW0jULjEwMt99eIm5Wc4%2F1eLhjhwQeu0ST6wmmoi5qsd8eYm%2FLe11fmaWZr9vNs3bXqAOKSSeD1wUeUh1WF4Qx%2BslU1yzAZaEwN6vUUjB0xUcGn1iTuzmjTJw6m42LFXiwUYtW%2BnMqyu54PmhiBJGuL1v8UlEqG7VWpo%2BNVFCk%2FSSBD8n5FZxRSooGay9oQW%2FuKZc4IJDP%2BadG76c5%2BZBM%2FHkzJdfCS1B7JReqf9CbDq2De9QSNZYCS4mL29lnbVkNaq4TEMTgm6B49dupDKNL3tje3HYFzopEmMhKfuh%2FtM9YcHMwYa%2FUKeFAI8QAxon6SI1Cs3JZQ45bDIQ0HjxTBHIQ7f%2FIKl3wl0SvV%2FmIdmSy2n4jf9OSHLfIF%2FNi76Sf%2BFhinhbbsKuIMed2agtTg0VgbaodZJQIKNJN2QcFkBdSs%2FvP9eRSQSNoydCmeR%2BD8jRX20adH0bbLQyZcsNdC7Lao72ITrNoZ%2B1UotVuGTb1gExz41VMFC%2B2t7OWuqjMKq8hSDV97WCjnZMOeNkr8GOqUB6zc6aYMYXA1wuviPt49SMRiZVKeLSvTFJ7Jqp7P6N0lf%2FD7W5o47AYaicRKyhH79E0gLbLvvLofOROdxxP8GzjSdj4%2BkdryJ%2Bnti6k%2FJftt%2F45TIi%2B6PYfXfH%2BO5P%2BFYF1znkjw16Yc%2FSFSAFFqZF6a1OmQwJ3%2BwYyG%2FHN9154OUHLPEkslN38VyioVclrXnts0nh74fyZHkl%2FJZjxdXJJWpg3BI&X-Amz-Signature=ed39cd5b20ce1df45e9efbe15e3602834910243f4c813fb610737efb487c751a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPT7NBBG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsk3Y8rFOyv0QUsBVcI8XvIUNzgdeauc9KJvTHcWRrnAiAfF3xZDl3ivtzZYMh2nUSm9b%2BZlC1Q0KMu%2Bu6N3Ils%2Fyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMfyLBbjCrhbLP8Bd1KtwDJk5U0Gbl4NKumSW5XL155dWDfo2hTTOyup97ub2bOaESHL5ljHSt4yvsEu1Rwds2mT%2FvCme2Z%2FovHXoVBrb3m0DssrOM0Qc%2BN3sZ4199x0bXSFaFDz26Qdlb2%2FDiRe7kiXBGElh5kg2kbogKxfc06OSCHW4mSFrWMnclN2johvsVP6yBI2ow5Svt2Ki41xe6DLPZo0Pyq43AJFJcCruiysnE9tYf1eMDqm8IMaDdUnD%2BdHJMCh4D8lf7qRQcsbOxl98dhPfYCG%2BUwvuB%2FDk3HWPfQhgcp6Tc3ofl4kDw9QgnyHeSfvjeLGFoxbFwOLcstaGSei7szM1sGI7Ebfkea7wfmVQHadJUGXFd7uWvrT7Vobaiqn3%2FjTqkNYQPql9ushhVoq0HESO7GfE1zytb8c6tqgGm0m1wLU0buq%2Fc9zaw%2F%2BI7xOnrJy45p0tndK06MY89UNeYfXYy2%2BMlWEQeKmgopqJ4%2FPc1eYYlxzzQ9M36ABa58d4GO4UzEK4ZD1ANOUJl1oFc12z6n1j%2Bvh9uwB%2FS3Pu3OV68D3h8NluGzTQrcE8uLM296FQg5kX%2B0elAJM%2Bocfl34LquLuFOH0DoTivVqTWJ9OUr6edT180RPXPPlfzNd3cl%2Bx9zobUw5Y2SvwY6pgFQGYn6Kecx%2BFILW1o%2BSp3Wz5jC0CITP25fqxHN6mAk7xnbdhE%2BNJUrq1pHqs4X5bMRHXWiIGfcqidR5vQw6usw%2BBY4PN9SSuQiCnsV1WOMNnpptS0rWH1IjP%2FTsCS36U%2Bsuu%2B%2FTN6pCNi619zxGGCQUz3a28YQJKq4TDrcKA4z7IbM7kzm29dKsnd5RqC%2BiO3T0U%2Bj4IZ3DeaN5BQg1Ziotj0blBoV&X-Amz-Signature=7d98aaa760a56cb26c67c4fa9808b407141f641bf470a7d3322b50656e853b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
