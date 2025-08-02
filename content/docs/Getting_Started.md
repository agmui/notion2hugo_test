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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BIEMRP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkIXNVvAkKnzjjuz2Opb7ZAquut6WYZSozIxPUr%2F6x8AiEAhpgl2%2BH7SmRIFrscBsEWsFtF%2FshzwFwyAYkjOtaNgw4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGl850ajdgunBYJQFircA%2B%2FQH0RBZiDLddfMjdCDONPInxGdPk5mTTfS4o1gvPbQwF12TGwNUo%2BnYecmEXkCKrgOsf00O9Ye6tDjik4Qxrycko2iVsmniOjXr%2FQJM%2By%2FmHg1RSsg185o4CqUrbf9gSUubK9cdEKZXaWNKqGUGRI9JslCRjqr9USPD0BwU29vOIaxm%2FgXYjp%2BuNMP%2BvN9jGgz%2B%2BppIVV6zIiwtt4KyaxyQZyIM4nsDYKyVEOKdc52wcRduCcLA%2BbVpZPeRaQmrRAEYBojbFc1LzcdAgJLIFOTlyRESm1BNp19hV23Aw3lAgvaH9fdsspcGaeJwDfbm3POFJBRwDBttVRlhU7gMG45QN%2FuU5CX9u9aAXhr5IkA%2Bw5GFgISQfE6yR7d2ueLB%2FPvmuQEzxXY9jVurZuzMQNNnGNMO34HZ2aTIfNja8Q0HgUXQlGG%2BVHv46y89jTMFg5G3JEwDSjeWT6WIsp5lPsG4s2ARaQ17oeYnAS2yOnsUEzTSODCeUOZ2omDT9hX9M9QQCn0T1zNIBRhkD4p68l8lln3AFK87xoQ3bTKO9GA3UR6t9avNiFeM52JoBM1iEi36%2Bx3zKCoQ7%2F6edYBziLzhDUriei1mXXRZTRI6blQFK7RPfjaZ1Cse%2BJTMOCSuMQGOqUB27jrM9j%2F%2FvcKXNUc7fjnSl3I3Jn9HXRhjpOyBnC1TKAj%2Bcc8AJbMOT9egtMvImSmz7XjkRqe62gQB2d4pMRyLzV5N9HZJ3jCPbeBEWxZVqpxvIo0Xnr7iWpapDP3Ac99cNeZppn37ZeMZNGvHBHeeKbLGlrSyhuipwOp%2FuNDF2%2BbbPGO1nW6FJE7eKzP4Ypo46YaWXv5E1F%2FpK5Jh1WycBRLcKHb&X-Amz-Signature=80a94ba12cca6188bd84a66cbc6fd268ae4f5505a7980e714532611bdd28ed3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BIEMRP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkIXNVvAkKnzjjuz2Opb7ZAquut6WYZSozIxPUr%2F6x8AiEAhpgl2%2BH7SmRIFrscBsEWsFtF%2FshzwFwyAYkjOtaNgw4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGl850ajdgunBYJQFircA%2B%2FQH0RBZiDLddfMjdCDONPInxGdPk5mTTfS4o1gvPbQwF12TGwNUo%2BnYecmEXkCKrgOsf00O9Ye6tDjik4Qxrycko2iVsmniOjXr%2FQJM%2By%2FmHg1RSsg185o4CqUrbf9gSUubK9cdEKZXaWNKqGUGRI9JslCRjqr9USPD0BwU29vOIaxm%2FgXYjp%2BuNMP%2BvN9jGgz%2B%2BppIVV6zIiwtt4KyaxyQZyIM4nsDYKyVEOKdc52wcRduCcLA%2BbVpZPeRaQmrRAEYBojbFc1LzcdAgJLIFOTlyRESm1BNp19hV23Aw3lAgvaH9fdsspcGaeJwDfbm3POFJBRwDBttVRlhU7gMG45QN%2FuU5CX9u9aAXhr5IkA%2Bw5GFgISQfE6yR7d2ueLB%2FPvmuQEzxXY9jVurZuzMQNNnGNMO34HZ2aTIfNja8Q0HgUXQlGG%2BVHv46y89jTMFg5G3JEwDSjeWT6WIsp5lPsG4s2ARaQ17oeYnAS2yOnsUEzTSODCeUOZ2omDT9hX9M9QQCn0T1zNIBRhkD4p68l8lln3AFK87xoQ3bTKO9GA3UR6t9avNiFeM52JoBM1iEi36%2Bx3zKCoQ7%2F6edYBziLzhDUriei1mXXRZTRI6blQFK7RPfjaZ1Cse%2BJTMOCSuMQGOqUB27jrM9j%2F%2FvcKXNUc7fjnSl3I3Jn9HXRhjpOyBnC1TKAj%2Bcc8AJbMOT9egtMvImSmz7XjkRqe62gQB2d4pMRyLzV5N9HZJ3jCPbeBEWxZVqpxvIo0Xnr7iWpapDP3Ac99cNeZppn37ZeMZNGvHBHeeKbLGlrSyhuipwOp%2FuNDF2%2BbbPGO1nW6FJE7eKzP4Ypo46YaWXv5E1F%2FpK5Jh1WycBRLcKHb&X-Amz-Signature=6441a1e64e9c727becc9c1903cb65fdf553e888e6192471e07f9255eea62962b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BIEMRP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkIXNVvAkKnzjjuz2Opb7ZAquut6WYZSozIxPUr%2F6x8AiEAhpgl2%2BH7SmRIFrscBsEWsFtF%2FshzwFwyAYkjOtaNgw4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGl850ajdgunBYJQFircA%2B%2FQH0RBZiDLddfMjdCDONPInxGdPk5mTTfS4o1gvPbQwF12TGwNUo%2BnYecmEXkCKrgOsf00O9Ye6tDjik4Qxrycko2iVsmniOjXr%2FQJM%2By%2FmHg1RSsg185o4CqUrbf9gSUubK9cdEKZXaWNKqGUGRI9JslCRjqr9USPD0BwU29vOIaxm%2FgXYjp%2BuNMP%2BvN9jGgz%2B%2BppIVV6zIiwtt4KyaxyQZyIM4nsDYKyVEOKdc52wcRduCcLA%2BbVpZPeRaQmrRAEYBojbFc1LzcdAgJLIFOTlyRESm1BNp19hV23Aw3lAgvaH9fdsspcGaeJwDfbm3POFJBRwDBttVRlhU7gMG45QN%2FuU5CX9u9aAXhr5IkA%2Bw5GFgISQfE6yR7d2ueLB%2FPvmuQEzxXY9jVurZuzMQNNnGNMO34HZ2aTIfNja8Q0HgUXQlGG%2BVHv46y89jTMFg5G3JEwDSjeWT6WIsp5lPsG4s2ARaQ17oeYnAS2yOnsUEzTSODCeUOZ2omDT9hX9M9QQCn0T1zNIBRhkD4p68l8lln3AFK87xoQ3bTKO9GA3UR6t9avNiFeM52JoBM1iEi36%2Bx3zKCoQ7%2F6edYBziLzhDUriei1mXXRZTRI6blQFK7RPfjaZ1Cse%2BJTMOCSuMQGOqUB27jrM9j%2F%2FvcKXNUc7fjnSl3I3Jn9HXRhjpOyBnC1TKAj%2Bcc8AJbMOT9egtMvImSmz7XjkRqe62gQB2d4pMRyLzV5N9HZJ3jCPbeBEWxZVqpxvIo0Xnr7iWpapDP3Ac99cNeZppn37ZeMZNGvHBHeeKbLGlrSyhuipwOp%2FuNDF2%2BbbPGO1nW6FJE7eKzP4Ypo46YaWXv5E1F%2FpK5Jh1WycBRLcKHb&X-Amz-Signature=5028ea71bdc13274d6042d333d7fa2b9ee7c183173dc6ca76046cf212fea3d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634H6SREJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtN%2FC7MqewZQGgZIVJMA8IIjtHnMCIW9UqQTRMRCYEvQIgChvPgy0YoUp6bQiiLc%2Bn%2BpzfQLf7Ekp1wxcF6hPYor8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGbEOEPPI3Z7IjK9UyrcA8dZLBjKVbJy40aWtjSpEPtqhqpD%2FRQDcrwBAFX5slW5VfcYoGj7ZoOy4jgHO0SJQ2x8AV%2BGRk8OnwGqu8jQ9ytRNiot2Iw42%2Bs0qM9cdT8mY0mGiPvepOH4E7f2RqirKoWGtEPZVoJJ0aEWDdklW5h04aPamSMetZNKSdX2gxG3iW%2BvE38HxXXTzu8MFqAOWG4E3WGVokgeg%2BMHj%2FFQpxdoct4FipoURZ0oQGbqm1NyqcIrNDBTRqOYW5xSLfeTrrGfLKa95D68ai%2F1Ncyh1CauryFSWTC6sjvF5oi2mweaGZvwY7PUKgbTiicFdaIV58NeG2UD0L4y5%2F%2FPvbR1j7A%2Bda6WbvusuSmke%2FemmCWY3NyF08pYx6W2l60pZF%2BM7AfF%2B3FRR4zdQ6mos69ByoBrNd0ckpEz85soCz5pV3qL3OAl3JncOIkma5gYQoz1E7eJDLQBeHcBC3Ti3mrXBJEQpjTA06ry%2B9Pf5xxmulLukrDIMlgaRurXH4PS1vBybhyi2AAoFaMctU2fBh17Y9W1zYKxWq0eDXdQu3bQnfodTMkyYDPXz8k2CtbdKLB0DnCJCxZBSnoJfh1I%2FvsGw3maHrnJOdYBwYxX2zrtjWUyqe3e2aAvLwGmiaQuMLWRuMQGOqUB1kt3b3drPL3syI%2BK74N%2BRX88pXc9ID05%2B4Wy8WOTZYGtaZkEshLo1rHVNp10O%2FMqujvhKZLZWiiy8%2BzEgRAUKBA3OCE8iG7cxCpm2dhM1cgJ%2Bi93v1fezO5aNr%2Bh5zNUv8zzHUc49rELkz0Dc7PFiHII1tqJCyXyYziuv8ZVfUntovRiLqqdu2QcGk6%2Bs6vguz%2BCslRDNX9sea%2Bm0Mvwf8NnfwDP&X-Amz-Signature=f94896f72dc425b5fbb0218516bd7074de033fe720ebc6f5e5b8eaab8d1fda97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLHH6UX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDlZUpE64GumHgN12ckzn65XWRv57xLCxXG10KbfY6YAiBHcwa72rvdVfN2SmN%2BfZwOgzsJfaaSmhO1qXuIS9Adjyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMKZDywzq4qORN%2FHuHKtwDqzlBhNOumLvpDF%2FAZgBroLmN7cPvDlYbt8P8he26JfOAXfjyydPbi%2Fqx08IsH4UcG2U5lyEPPODnoSFgMkRlVdpKTz8GTo8VJsJe%2BJsALkQhHXyPGywgaAoBCo6MpfTcNy11r52pyxtOuZCqV%2B6lneZOruNNHEXwgooaiRjPi%2B6BcKIhomBGx0uOPitbjNaZ7IMtxl8%2FiANF40%2FjvObniUVuLhgNNJZPy5sQekhYWkhGFBeMUpo2mvNlHwKkNx6JU325Kfxfp75nCMeS0L8hNbSscxFEoGfMk7bYw9hPZKlhRGEY6CQhLqYtLHovYcxG3gSmpIH6J7dx5uKcrSNK32UYKFwjT6TzCXdlkT0cuKNFGCP9LVid0jQAlBmrt2bgOUVw4uJwGY6OcPkaJSyGvZgaf0d%2FpaQXc4dLLgyXDpt5GbqmhqK7x9Co%2BvAYnSmc8SE1Z%2FSi71X1T2pQ9Ku6tFZf9Fp5Tbhj9y6sZdPXW3MnJM0REUMDHq1HzHZxuXeJdN4ZbdUs%2FZSh874MTA7%2FM%2BROqqEyAk4BI5NIsLY1lyTwSnIaGq1kxbvxJXl5cCaXc%2F%2BXFVy2NT2qAchXdKAXkVXmw7ahISv2QOszz%2FdP9%2BhXJDc88tWRzF55VM8wrpS4xAY6pgFqxVC4tGUaCBX401yWZsL%2FnalBO1GJDMM7NYuWfS2RbKHY7jwC5PA4BPTuIAmVxWipI6512ARyKrLfeg9Hex4y%2BgDcN%2Fimu9sQ%2Bp0THmO8oDaI6l1Vs8tHovFFuXuvkVUgB7CDAuUEuIvKzXK%2FzDrat9jjBUgKTR2HPsTeebPCaPnDGOuHGYCE2IjU1uoHLhwMbh3RsVT2morkpIt%2B5YBCeCW21FnS&X-Amz-Signature=423aeae2281c65b926f08f89f338e13fd999b0df2d5d1d96d8e5f535bbef2131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BIEMRP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkIXNVvAkKnzjjuz2Opb7ZAquut6WYZSozIxPUr%2F6x8AiEAhpgl2%2BH7SmRIFrscBsEWsFtF%2FshzwFwyAYkjOtaNgw4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGl850ajdgunBYJQFircA%2B%2FQH0RBZiDLddfMjdCDONPInxGdPk5mTTfS4o1gvPbQwF12TGwNUo%2BnYecmEXkCKrgOsf00O9Ye6tDjik4Qxrycko2iVsmniOjXr%2FQJM%2By%2FmHg1RSsg185o4CqUrbf9gSUubK9cdEKZXaWNKqGUGRI9JslCRjqr9USPD0BwU29vOIaxm%2FgXYjp%2BuNMP%2BvN9jGgz%2B%2BppIVV6zIiwtt4KyaxyQZyIM4nsDYKyVEOKdc52wcRduCcLA%2BbVpZPeRaQmrRAEYBojbFc1LzcdAgJLIFOTlyRESm1BNp19hV23Aw3lAgvaH9fdsspcGaeJwDfbm3POFJBRwDBttVRlhU7gMG45QN%2FuU5CX9u9aAXhr5IkA%2Bw5GFgISQfE6yR7d2ueLB%2FPvmuQEzxXY9jVurZuzMQNNnGNMO34HZ2aTIfNja8Q0HgUXQlGG%2BVHv46y89jTMFg5G3JEwDSjeWT6WIsp5lPsG4s2ARaQ17oeYnAS2yOnsUEzTSODCeUOZ2omDT9hX9M9QQCn0T1zNIBRhkD4p68l8lln3AFK87xoQ3bTKO9GA3UR6t9avNiFeM52JoBM1iEi36%2Bx3zKCoQ7%2F6edYBziLzhDUriei1mXXRZTRI6blQFK7RPfjaZ1Cse%2BJTMOCSuMQGOqUB27jrM9j%2F%2FvcKXNUc7fjnSl3I3Jn9HXRhjpOyBnC1TKAj%2Bcc8AJbMOT9egtMvImSmz7XjkRqe62gQB2d4pMRyLzV5N9HZJ3jCPbeBEWxZVqpxvIo0Xnr7iWpapDP3Ac99cNeZppn37ZeMZNGvHBHeeKbLGlrSyhuipwOp%2FuNDF2%2BbbPGO1nW6FJE7eKzP4Ypo46YaWXv5E1F%2FpK5Jh1WycBRLcKHb&X-Amz-Signature=dab02110be3f3e4e92c9ed98661589805059e1b04864c235fcd42cae314d0db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
