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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N6RQ4A%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Pl3j61I%2Flov12%2FN7mCz3%2FWTYG0v9iJ4hP5%2BNIsea7AIhAKSUasMAjgldwX9XW%2FDKnYy8ofmqBKuwJHtplAa6XRISKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsmcbOUSQqHNOyoKIq3AO9EcnFozjzThhBDxVBujLNNxP7%2BlEEomBWRN%2Fs%2FKRW%2BhF20mdzMgHzLlZIio7tbRJXbHvAN4MvIBKDTiE8hEgMnH8VHJBgtDhJxdFg8j%2Fp4do5V%2FHYp29gd0Z12MRwWLWxPRu3mNrjlQvL0D6JKcaJcaaclkjr2J9mWDSqEWRXA0D0ffZPoSp54LDih%2Fr3l1qSnyuw2ZT4mPa%2FuMIhjop1%2BSJwZTidO640b4qZiurI6CsNHS6CC5dt%2F57bBIxqrXYaoMwjwUDiqrhjJXLQPMMsltU9Q%2BUqzSRmFFl0oNn0UkToDexR%2F%2F9DUAbORPXkadTGduNxG3ZwdePwvep%2BmZeCj1wfY1dlldHB0iZBbJFxRXTNajrn%2BScqW9jYKxnMFJMvoRvYLQKW7tkQtbqja1vbxu3LNPzNXVCekrlKcT%2B%2Bx2uAxBE3H9BoXsVrgR1QHpDmCD4kUpwgOJ%2Bu246919A9Ajz5zG%2Btwz%2FgvsZ88sdqlK%2F6av9KSRX%2BeBIsL6aZuZzVp3XjfPNAxIHUPSHWVeryEWxxPVX9CmW9FQA6Kg%2F1II8nQ%2B1QCUwlePkwmbTudCsr8Y%2Fi5qrt%2B%2BenUItDkuBHF97JRNiz2LHpirc4PtuXr760xh39aHcTFmlRgjD%2Bia29BjqkAXz46RMNDTW8Of7YdhIiU8Z3nlX17Rg7FUbLaja4PRQkL6NdZk%2FEbIkmGwOZa5ZtpZ1gim3K8ZIMWGKa71T1SthZMPx86Fs2Mx%2ForlB%2BPvS7lnmQ1xEYVKYaMGGTAueIArf%2F8fWOgXePfeMY3kIyWiV6dc6xbQeNCj4Tl6w%2Fy88sjeWU5HSDCZ3IkSz%2FAlxkR3BWtN%2BV%2FHPgYjLrzN6bAlZF%2BStm&X-Amz-Signature=0328c4583d9020a4c8f12862ec78fc09a809e0e29159a8350947afe53f83176e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N6RQ4A%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Pl3j61I%2Flov12%2FN7mCz3%2FWTYG0v9iJ4hP5%2BNIsea7AIhAKSUasMAjgldwX9XW%2FDKnYy8ofmqBKuwJHtplAa6XRISKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsmcbOUSQqHNOyoKIq3AO9EcnFozjzThhBDxVBujLNNxP7%2BlEEomBWRN%2Fs%2FKRW%2BhF20mdzMgHzLlZIio7tbRJXbHvAN4MvIBKDTiE8hEgMnH8VHJBgtDhJxdFg8j%2Fp4do5V%2FHYp29gd0Z12MRwWLWxPRu3mNrjlQvL0D6JKcaJcaaclkjr2J9mWDSqEWRXA0D0ffZPoSp54LDih%2Fr3l1qSnyuw2ZT4mPa%2FuMIhjop1%2BSJwZTidO640b4qZiurI6CsNHS6CC5dt%2F57bBIxqrXYaoMwjwUDiqrhjJXLQPMMsltU9Q%2BUqzSRmFFl0oNn0UkToDexR%2F%2F9DUAbORPXkadTGduNxG3ZwdePwvep%2BmZeCj1wfY1dlldHB0iZBbJFxRXTNajrn%2BScqW9jYKxnMFJMvoRvYLQKW7tkQtbqja1vbxu3LNPzNXVCekrlKcT%2B%2Bx2uAxBE3H9BoXsVrgR1QHpDmCD4kUpwgOJ%2Bu246919A9Ajz5zG%2Btwz%2FgvsZ88sdqlK%2F6av9KSRX%2BeBIsL6aZuZzVp3XjfPNAxIHUPSHWVeryEWxxPVX9CmW9FQA6Kg%2F1II8nQ%2B1QCUwlePkwmbTudCsr8Y%2Fi5qrt%2B%2BenUItDkuBHF97JRNiz2LHpirc4PtuXr760xh39aHcTFmlRgjD%2Bia29BjqkAXz46RMNDTW8Of7YdhIiU8Z3nlX17Rg7FUbLaja4PRQkL6NdZk%2FEbIkmGwOZa5ZtpZ1gim3K8ZIMWGKa71T1SthZMPx86Fs2Mx%2ForlB%2BPvS7lnmQ1xEYVKYaMGGTAueIArf%2F8fWOgXePfeMY3kIyWiV6dc6xbQeNCj4Tl6w%2Fy88sjeWU5HSDCZ3IkSz%2FAlxkR3BWtN%2BV%2FHPgYjLrzN6bAlZF%2BStm&X-Amz-Signature=4535ceee32425b63a359655636fadad7e0addc78b69c3ad758c9982f4aaa6613&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNUYKFV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqpjLOGARkAaLJNHqXGD4pA1YYb5Wq5A1ENdm0t1tV8AiEAsmpHdivCf0I66X85K1AlmRti7CMg92ydUwj5%2B0fONCoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGg8yQzV05sh2gxeyrcAwdRvdrhhUPeS9sMqTiR25tdYnHK1RB%2BOb0ZeytM5kX8bZ27m4hA2sG71mFllKq9RNHrZV872HdW8WpO3XA6Rr3BfStKHu%2Fb6S7H0o73aXhbwqXF80HRGxtvBu2keKzc5heC5gVIeV6%2BYKKp7puGXYMVfaLgqQozFRFcazarygFaav9yX%2FyGSsIp59wzVggWzEFM1iBtC2CNTZtNLkbSJd%2B8yypoeqfxWoWJ2%2B8dDH83SxgfE1Xs4p%2F53YkHkBw12esLCRJiVZq%2Frk%2FTEyn82mDrP45L6GgS%2FZ2s1HHQuWc2KeaYyU9LcJ9oisqxuCLopJ8DMMOC%2FiXpPY3EHsz0Iaj0y%2BEdpEACjJE05WvTJZA4zsxwPA6iLpzimBempEKcv4Ykw%2BmPP%2B8Gg7y%2BHls7HJuIN983yMVIS6dsCrgthPWUkjn9VGSYPyw6BVJ%2F3os7mJk0znv4xaNFkHac0yUcdv6aDbnuzvssDyZyayBlZdWf3shj9kjhMq720I%2BWVC%2BMhnuMmc7nhD9GwDJnOVHui1%2F0D4AVBxIzXZeDwHi0evBqSfxjSQEPHgfowoJ1mtDvBm79d9XhFe28t9VYgnx6YNSAQKXGI%2BlqrS9mKPyYDe3txpqbcUe9zCwF7FP8MJmKrb0GOqUBiUoMzZHOqOwE%2BX1qhSpAEqNaI0UkRoQEWR%2FZ6ELydXZj%2FciAFr4fN9A5KBTXRg%2BpjsXQgStl2EAI1ag4m6vv2goi3a9UVuKOAuANclgZpZ%2BSUoTCPJFW2FEe%2FbEuY%2FNx5Y9j5Jz%2FjDmJq12w7CXBeK1ucm85JTSDk2vG2kAv157%2BvjlwJlE9O2KhrVly0N0DazJXl6mbtzR9%2BG%2BJZl0%2F%2BQpCbUaP&X-Amz-Signature=6b56e6b9c09a518a21fa93bc244691b3675dc323623ff1406ba79225e6d88856&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXNCBLP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDawPa%2Fu0tHWQ1DvKQrJL%2BqR9OdHGRP50Mu2v%2B4D6GQAiBtpbjwVsMZFSJqgw%2FnFQXz%2FXxQqNE6Hhp%2FTERJI3ajSSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqfzrygCnfX6YP4ZKtwD6MzRuK9xM96VvAJNk6jGTEUKJSyT%2FvtiFqEjHtUyPdF%2FJOXJB1eJ%2F7x5p5K8ASAhFp8ToZA8Df8n5eKTesQSdHqiHMdmYda5S3j1llJPnCABx6NgeQwFVDv96wrApr%2Bw724YsI4JdGMQ4%2FoB961hC8qlIIGnx%2FATjRWONuG48uorcwEbG05yiZ6oxsX0NZ8gubljZOxM8loAmHNjc9bhbTCWmfDKEhCyvSKIcmVGWkaz04vJ%2FQgsjv7IRn71lDyQJEvX0s4%2BQoAV8a83L48buTS%2Bi2ZWACzBKUdSAilL0mcMkcmU1ZA99OlSKrW6p1lhy%2FBVkJUAZFIy4%2FbhTJc4foPx9P07yUiS%2B16%2BfGRzJPhp1GpttK8S7cFgh1U010C05Nw9p336%2Fdsp0lUATZ7uH87G%2BJQuqbTj1SIsUDrKHwd8nIP7nzre7BjK8JgA9lE374LTdEFlwA0tm%2FnzKZr3Sfj6tDWSat30N%2BUg3j%2FUUsR073ao7dpn3Xxxk7%2BPhTO118mu%2BkyaICUgf8cFwf5pKhsONCn8AoQ0puir1GGpJQqS%2BGrjMSQNJMScsuXQPSeN%2FrpFbWszHnkaVvlAe0tZsslNzcs15pWia80I4WFu%2BdwSzDXp1L0agpfLfk4wmIqtvQY6pgFuu18R4zCRfC01wy3YXQjMcqyqoxpQy%2Bcj3H43T0BPFtP%2FK5ffMUNP20SVDDjE2eJ%2BkpfdNxiYIAsogADgJLRAfoCygAE0ty3Gin0CGyAHZFyYBIXpBSonEyv%2BtGKzgSVKhUhVSwJyANRRS8Y1i9%2BeNal5vjJm%2FDxPOWpHQ6DflmxsmUZz8vMjaPoudkR7FuiVWCLLaAIvahE5mbJleEHAxC1400tF&X-Amz-Signature=e47ba11253ca93834a3d7bc1b5f8ccc7192a2a7eeebf111dc905d5d876c9aa87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N6RQ4A%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Pl3j61I%2Flov12%2FN7mCz3%2FWTYG0v9iJ4hP5%2BNIsea7AIhAKSUasMAjgldwX9XW%2FDKnYy8ofmqBKuwJHtplAa6XRISKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsmcbOUSQqHNOyoKIq3AO9EcnFozjzThhBDxVBujLNNxP7%2BlEEomBWRN%2Fs%2FKRW%2BhF20mdzMgHzLlZIio7tbRJXbHvAN4MvIBKDTiE8hEgMnH8VHJBgtDhJxdFg8j%2Fp4do5V%2FHYp29gd0Z12MRwWLWxPRu3mNrjlQvL0D6JKcaJcaaclkjr2J9mWDSqEWRXA0D0ffZPoSp54LDih%2Fr3l1qSnyuw2ZT4mPa%2FuMIhjop1%2BSJwZTidO640b4qZiurI6CsNHS6CC5dt%2F57bBIxqrXYaoMwjwUDiqrhjJXLQPMMsltU9Q%2BUqzSRmFFl0oNn0UkToDexR%2F%2F9DUAbORPXkadTGduNxG3ZwdePwvep%2BmZeCj1wfY1dlldHB0iZBbJFxRXTNajrn%2BScqW9jYKxnMFJMvoRvYLQKW7tkQtbqja1vbxu3LNPzNXVCekrlKcT%2B%2Bx2uAxBE3H9BoXsVrgR1QHpDmCD4kUpwgOJ%2Bu246919A9Ajz5zG%2Btwz%2FgvsZ88sdqlK%2F6av9KSRX%2BeBIsL6aZuZzVp3XjfPNAxIHUPSHWVeryEWxxPVX9CmW9FQA6Kg%2F1II8nQ%2B1QCUwlePkwmbTudCsr8Y%2Fi5qrt%2B%2BenUItDkuBHF97JRNiz2LHpirc4PtuXr760xh39aHcTFmlRgjD%2Bia29BjqkAXz46RMNDTW8Of7YdhIiU8Z3nlX17Rg7FUbLaja4PRQkL6NdZk%2FEbIkmGwOZa5ZtpZ1gim3K8ZIMWGKa71T1SthZMPx86Fs2Mx%2ForlB%2BPvS7lnmQ1xEYVKYaMGGTAueIArf%2F8fWOgXePfeMY3kIyWiV6dc6xbQeNCj4Tl6w%2Fy88sjeWU5HSDCZ3IkSz%2FAlxkR3BWtN%2BV%2FHPgYjLrzN6bAlZF%2BStm&X-Amz-Signature=7188553ea6e29ce6a31c2f3457f7587990d9953b592a893c4852e93224d8cc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
