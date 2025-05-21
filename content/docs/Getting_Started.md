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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2BQRIT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATX0K3U1%2F7BFdS7umWeAMafXGIvg4xOxgFZJMQC74jAAiA7kkEuFeWUNgahC2Kd7GZF%2BWP95vhJAMa7bYJdshiDCCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuL15O%2F35Pa90Tb%2F2KtwDzf1OWuvKJcyLmxbTRLNlS7YAtm4ipqnOi%2FKqvNnroN8dI5HbN%2FUkYNilEsGqE8LqUF%2BRh6dOEMZhb1wlm%2B4EEdJUGMdbWANhT3NpQ4P1zccxb7l8IlQTdqBermAneOU%2B0VPkxs8B9HkeTK4nHRbXs2j9hOrpFE6Hldr31r7BH6sDGd1ynoGBhc4qt9qITxZpclTDione8onpAo5yHsqesOlsgAflzkZJ%2BBGiNXZ2MFZ1w7w1pzhqOLD1UvdO5nap%2FEvC8xbvTabWdFfF%2BW8GG06EBFVRbVkkARzPu9nRBie9Nsy66mWGK4MTc%2BZVL5de4oThkENfn5JsM9pNeqY5ocpyo35W1GeIElQCsL0tKlKSA3WE1PniUYInDWRCcehBV0blfr30zzTZI1xpT19CK%2FU2SsAlNqfGqTbOGYPb%2FvzUtOuhvd%2BHmLSjXMzJqYYSOEh4vQDslSSjrHYA7aQFDylfKVVvQ3adf38gCBkU0tCipS63ND9M7O3g1Ka%2BgZLWLTDck8SGZN8%2F561cbZncZCjJuLCv7L4C1ZFODYt0aT67KK%2F1Mus01pXOmYflmG9LdMvo7P8krP3YMp%2FK4c9WIPcxXiF9Whuf14p%2BweasIbN37IlGb35Y5SyT0Bgw1%2B21wQY6pgFDHvFkmvelWezaJe8T4uejyWQN%2FYmDQph015YKY6Dv7GzcWh8FZf%2B3JjkwX71tLA%2Bs%2Fd6ORhLDr1sfHrB3DQTDwHrryLiI%2BWvNKiBSkOolJnD6pQag3xcg0KjOyBd885g%2FBtqbcFn255sasrWVsGPcCviwWPzR82qLxIuqxCArv1JVcDzeyAV7GeC5L6bxIiiNx%2BF%2B6iNtCGE8j%2FcM2JN2zAnlKeP8&X-Amz-Signature=d355bcf0c6078be86e9fdd020bf361b08f86ac4940c66abce30e4931abc2e305&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2BQRIT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATX0K3U1%2F7BFdS7umWeAMafXGIvg4xOxgFZJMQC74jAAiA7kkEuFeWUNgahC2Kd7GZF%2BWP95vhJAMa7bYJdshiDCCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuL15O%2F35Pa90Tb%2F2KtwDzf1OWuvKJcyLmxbTRLNlS7YAtm4ipqnOi%2FKqvNnroN8dI5HbN%2FUkYNilEsGqE8LqUF%2BRh6dOEMZhb1wlm%2B4EEdJUGMdbWANhT3NpQ4P1zccxb7l8IlQTdqBermAneOU%2B0VPkxs8B9HkeTK4nHRbXs2j9hOrpFE6Hldr31r7BH6sDGd1ynoGBhc4qt9qITxZpclTDione8onpAo5yHsqesOlsgAflzkZJ%2BBGiNXZ2MFZ1w7w1pzhqOLD1UvdO5nap%2FEvC8xbvTabWdFfF%2BW8GG06EBFVRbVkkARzPu9nRBie9Nsy66mWGK4MTc%2BZVL5de4oThkENfn5JsM9pNeqY5ocpyo35W1GeIElQCsL0tKlKSA3WE1PniUYInDWRCcehBV0blfr30zzTZI1xpT19CK%2FU2SsAlNqfGqTbOGYPb%2FvzUtOuhvd%2BHmLSjXMzJqYYSOEh4vQDslSSjrHYA7aQFDylfKVVvQ3adf38gCBkU0tCipS63ND9M7O3g1Ka%2BgZLWLTDck8SGZN8%2F561cbZncZCjJuLCv7L4C1ZFODYt0aT67KK%2F1Mus01pXOmYflmG9LdMvo7P8krP3YMp%2FK4c9WIPcxXiF9Whuf14p%2BweasIbN37IlGb35Y5SyT0Bgw1%2B21wQY6pgFDHvFkmvelWezaJe8T4uejyWQN%2FYmDQph015YKY6Dv7GzcWh8FZf%2B3JjkwX71tLA%2Bs%2Fd6ORhLDr1sfHrB3DQTDwHrryLiI%2BWvNKiBSkOolJnD6pQag3xcg0KjOyBd885g%2FBtqbcFn255sasrWVsGPcCviwWPzR82qLxIuqxCArv1JVcDzeyAV7GeC5L6bxIiiNx%2BF%2B6iNtCGE8j%2FcM2JN2zAnlKeP8&X-Amz-Signature=d52de44abcab390950a00084229671e37dd573b9e13481aa7317a03e5fffa479&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2BQRIT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATX0K3U1%2F7BFdS7umWeAMafXGIvg4xOxgFZJMQC74jAAiA7kkEuFeWUNgahC2Kd7GZF%2BWP95vhJAMa7bYJdshiDCCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuL15O%2F35Pa90Tb%2F2KtwDzf1OWuvKJcyLmxbTRLNlS7YAtm4ipqnOi%2FKqvNnroN8dI5HbN%2FUkYNilEsGqE8LqUF%2BRh6dOEMZhb1wlm%2B4EEdJUGMdbWANhT3NpQ4P1zccxb7l8IlQTdqBermAneOU%2B0VPkxs8B9HkeTK4nHRbXs2j9hOrpFE6Hldr31r7BH6sDGd1ynoGBhc4qt9qITxZpclTDione8onpAo5yHsqesOlsgAflzkZJ%2BBGiNXZ2MFZ1w7w1pzhqOLD1UvdO5nap%2FEvC8xbvTabWdFfF%2BW8GG06EBFVRbVkkARzPu9nRBie9Nsy66mWGK4MTc%2BZVL5de4oThkENfn5JsM9pNeqY5ocpyo35W1GeIElQCsL0tKlKSA3WE1PniUYInDWRCcehBV0blfr30zzTZI1xpT19CK%2FU2SsAlNqfGqTbOGYPb%2FvzUtOuhvd%2BHmLSjXMzJqYYSOEh4vQDslSSjrHYA7aQFDylfKVVvQ3adf38gCBkU0tCipS63ND9M7O3g1Ka%2BgZLWLTDck8SGZN8%2F561cbZncZCjJuLCv7L4C1ZFODYt0aT67KK%2F1Mus01pXOmYflmG9LdMvo7P8krP3YMp%2FK4c9WIPcxXiF9Whuf14p%2BweasIbN37IlGb35Y5SyT0Bgw1%2B21wQY6pgFDHvFkmvelWezaJe8T4uejyWQN%2FYmDQph015YKY6Dv7GzcWh8FZf%2B3JjkwX71tLA%2Bs%2Fd6ORhLDr1sfHrB3DQTDwHrryLiI%2BWvNKiBSkOolJnD6pQag3xcg0KjOyBd885g%2FBtqbcFn255sasrWVsGPcCviwWPzR82qLxIuqxCArv1JVcDzeyAV7GeC5L6bxIiiNx%2BF%2B6iNtCGE8j%2FcM2JN2zAnlKeP8&X-Amz-Signature=d09a35e8763192cc21a076cfdf2ae751297b2cf0ccce5c907a5e95a3329179b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIJINJS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEbeTy7FHlb0Ja2FGKKOFLdI90Ck0iE6I1e4IUSsjunAiEAqFHYFRWP4UIUMPRbhBc4UQWvLPzFqrkQ4t2ptviHAGwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLSZjYY1gFZxrSL6CrcA0f5KW0cY8%2BkMNiH%2BtHozqIaJT%2FJk28flVD6wNgw%2BaGZCtDO7nkfSIhAQlf6C4k2CVMDVBXL6OWLnX6XKJfvIdJxS24N7m45c8X4%2BGtigyNVOfrqIHvHoks1lM6TXQo93rBLauzsDnoGBLHU2GYHT27MsNMAsphJl%2B1CLN1QymuTX4LnHep0X%2BXrsCGXPZTuXSR7hjdlo9N0i6wHXMFM3QLAkWJ7Y3v6raD89CQmUTzaF10saeAguARlwZKeSnJYE4W7CP9bApAJb2M2woXW0ULHlWtBKJtJKE3BABBRIBGHErMv87te9I5CRHyl00sAmr5BgU7HzCh7uZja3x7%2B9kUmXY7baXkn2ivh2acGaXFT7dsuvWEkffaj%2FYVBN7ynkH%2BBvM%2BYXT2GF6dVgeizsOpgdJ87iC8eSJFfQwp%2BFifj0tRHpWOotklL4F5mT%2FQ71rcQ%2B0TxWYi%2BcAICpY1UzSBaL%2F9AzORZ8OMOiaiRRU6AxjD%2Ff2MAcjnKQ%2FbkE30bNtBOSUnMne58Mk5FbO3nBbsfHy4Pf%2FjbhpjsSwMeDmJQcSn6svdkxhJ%2FxXA%2BxKE1dQQ5XjrQU6nad0F2%2FJVwGtR38DKQUDI%2FHRJFndyVnNHqmVYzLLKiDY471pyIMPnstcEGOqUBf3gBjnZbQK6cjuEwHCY%2BNbzxeER%2FcXVtTZxPt%2BSCv1rBGPPxAdLp0YY%2B0%2F8jrp3XtDyPT8lXHdhZ5CNtSU5zDyqODIquE642rQ95SiYusMLLWFqjYkJUi7B4OOlBTUdJ%2BcIJWi%2Fi3UXfPquUaro3rUuX0hG1tLAi7I0mY6oUpJOIIN%2B8DEhapi4XQWzTVnjb%2FhmagOqpzdlmj1lUCWevAq%2F1yHhi&X-Amz-Signature=ef6d99fa1211aa3cd7cc282ff6702cc4645fdc14695420a0db722297aaf91595&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRG3I6W%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJ0pRnzXd2GEDRkq%2BlMq1hdeTVZDx1w3WJUxNxbEbqlAiEAqBVLMFKBHxoCa3KdhKXrmqAq2kaHkKxsDD7zWSpQ%2BtAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM01G4ZooAnypNXiECrcA5KktJdhbmdZ2dvGMIt%2FDmdtiJPMj8C4ZfGBISjuteoncmLdavln4ZUtYqKqiMkowYDxGYuQQgPqmnKStPmKdUqk6b%2ByYRrL2SOKpW5JdgA1azPpkoIU0n7xQCVJxADMoYnwwOPj%2FIvs7fHvPul%2Brs5sT8GsPgcxh17gwdVlWdiby4jkBT0nmstIFH5V9RhKrtCcO6jRBnh3yk3k9CnLlR52s4Crv6BrA%2Brxs9c9z13q3pAYOIEbuK%2Bh6JxK5hX9QeC2f%2Bqd1rhGtYa4IzkgKPAfFNRybVSmXqmdIrYQzF8wBwPzWolVr0Lsjwaopf1TZzsVelN5nQaMt49POG0c9IgdhXh0Wtgmotv1C%2FdzAIULaxXOpgpZomtoLF5W%2Fch%2F0tJPSb0%2BrbDaHVNAgck1XWK%2BLVRmYm5q5eEyYeF1rcQXdmmLQDXHkp5Y1lJgeYGx1l1huyEqsluTaxTb4pvGDdysAgxwjZFbQuJ3y4NRO9k4EZEwo79UMnMkM9f551kv090aUhUJMqEMK%2BJgxs9F5XKsEd0%2F5wVUEb4Ll9DXzPqvrJhm0aJLqh%2FPJnjBHt6eqebuRe%2Fj%2Bh%2BOPI8LotMjc1GYBw1VbaiiDUHyURwMxNwuYDY%2FUUHTAzAer8EXMPrstcEGOqUB62szXvGaUs8nYp89oA%2B8XfHD4POKE%2B%2BGBOcUgn3VK5oIVdat43XYid2AOtHmXSzqEnuMNd9SzMowdG%2B95hw8vZRCgeMA4EFE%2Fd9w9tCoEJjtshXeVMAW247EOxnVrnQqXXWzwK5bxc4T%2FLcQYdEgEaixcJuHLqLEnWNpkgU3yOFOBkqI%2B%2B975F8eIPUQiqO3%2BIY1qsMFzFsXQjGziCa53FVERGUl&X-Amz-Signature=b06858d8945db6faef3bae97fcf597141985576bf5504226391b5c0caeed5056&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2BQRIT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATX0K3U1%2F7BFdS7umWeAMafXGIvg4xOxgFZJMQC74jAAiA7kkEuFeWUNgahC2Kd7GZF%2BWP95vhJAMa7bYJdshiDCCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuL15O%2F35Pa90Tb%2F2KtwDzf1OWuvKJcyLmxbTRLNlS7YAtm4ipqnOi%2FKqvNnroN8dI5HbN%2FUkYNilEsGqE8LqUF%2BRh6dOEMZhb1wlm%2B4EEdJUGMdbWANhT3NpQ4P1zccxb7l8IlQTdqBermAneOU%2B0VPkxs8B9HkeTK4nHRbXs2j9hOrpFE6Hldr31r7BH6sDGd1ynoGBhc4qt9qITxZpclTDione8onpAo5yHsqesOlsgAflzkZJ%2BBGiNXZ2MFZ1w7w1pzhqOLD1UvdO5nap%2FEvC8xbvTabWdFfF%2BW8GG06EBFVRbVkkARzPu9nRBie9Nsy66mWGK4MTc%2BZVL5de4oThkENfn5JsM9pNeqY5ocpyo35W1GeIElQCsL0tKlKSA3WE1PniUYInDWRCcehBV0blfr30zzTZI1xpT19CK%2FU2SsAlNqfGqTbOGYPb%2FvzUtOuhvd%2BHmLSjXMzJqYYSOEh4vQDslSSjrHYA7aQFDylfKVVvQ3adf38gCBkU0tCipS63ND9M7O3g1Ka%2BgZLWLTDck8SGZN8%2F561cbZncZCjJuLCv7L4C1ZFODYt0aT67KK%2F1Mus01pXOmYflmG9LdMvo7P8krP3YMp%2FK4c9WIPcxXiF9Whuf14p%2BweasIbN37IlGb35Y5SyT0Bgw1%2B21wQY6pgFDHvFkmvelWezaJe8T4uejyWQN%2FYmDQph015YKY6Dv7GzcWh8FZf%2B3JjkwX71tLA%2Bs%2Fd6ORhLDr1sfHrB3DQTDwHrryLiI%2BWvNKiBSkOolJnD6pQag3xcg0KjOyBd885g%2FBtqbcFn255sasrWVsGPcCviwWPzR82qLxIuqxCArv1JVcDzeyAV7GeC5L6bxIiiNx%2BF%2B6iNtCGE8j%2FcM2JN2zAnlKeP8&X-Amz-Signature=b4bb8d851e7ba7aa9d2a0e368aecc893a81153be398393dfa7d1b64549493b87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
