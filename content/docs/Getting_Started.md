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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSXIXHF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeb2oDiHl%2F6IxyLBfvN2z4fzPwPKZtZjcHN0ZYZ3CTQQIhANCkP7aG34Bl90UKSh8WLwCRdZXPW1d2IzlHqRh%2BfvQYKv8DCC8QABoMNjM3NDIzMTgzODA1IgzSLMy%2B3lzwXSBC8fAq3ANu%2BqZqX4wR5PbrXSjGPdaFaqTqdiIyE77Puyx%2FAMZeJqDYi4ikdQ%2BT5szMPxGhNFF20xt3iAIJkSSwveryANrqagugg%2FjmvJZmhkG%2B6JEp6Rmip%2Fc9HY5ewuLgXyrx4zeNfvYmO8uRf6nwwDFPscfTHEUZLMAD6gmd8erIWs83Du22wEhyM%2B6OecGQEv48znHo4wicj%2BUIkcnD5dyVNJd%2FkH%2F72IP7kLtXDR9cidSIm3y1pzNKlyX6p6iaxM4GKNZlp3YJCWx20U8aphcGW1CPyRRsHHTiD8uGxHZixwq9LB9VI6NeNtW9KswTFOrQGAdRFuG7Kue8%2BrUE%2FLEx%2F6KrbSQyovSD7KWge0oA8lUQZTGlcJeVZdQYwGLFTPqHII3p72yXP%2Ftl0f5VmYej%2BLQ4mx9ViOZkVD6xKtR9a6sn3MH3nVLvNFwVFncz46TM%2B60Kmzk1H8nIrhVZtnaLHgD6%2F0ChsuDgoZKvwV2ksWSl5z8RvsiwW3NWwD6DRtJGkIvkX0%2F%2BQhWNqu5D2cuXqADyClWEj65ulv2oFj%2FNYYUrpoFIXKJH4XO0Wvjs6gXBvCFQeA0HsiUisv%2FKBf%2BZnF7yMOIxB1HPEhvlILWiDuFYlqLBQqemYasRJdJG4jDDmZC%2FBjqkARhTedoFP95PbQOyPzluGd7oCSat1711TXk0I0zXKYjUU%2FZN9Zjw%2F4ybAnotqUQq3Y6aSCcgvT%2FTQFwmo1p6xMQGgL4Hfo8DXuFmjHedm8Dqtv6keKjB3rexMES7YnzB4q2h3bKdytEjQKchqL9YATMwUEhwJUg3tJiuxRyU689%2Bvk8e5Ddrgt0C5Be2QxPaSNVHkylAqqI6bCQdjkLx8lsJFryF&X-Amz-Signature=cf0417beb03092fc8a4fbd4faf2f0344dd2f567562a596b92f9b1efb49465a70&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSXIXHF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeb2oDiHl%2F6IxyLBfvN2z4fzPwPKZtZjcHN0ZYZ3CTQQIhANCkP7aG34Bl90UKSh8WLwCRdZXPW1d2IzlHqRh%2BfvQYKv8DCC8QABoMNjM3NDIzMTgzODA1IgzSLMy%2B3lzwXSBC8fAq3ANu%2BqZqX4wR5PbrXSjGPdaFaqTqdiIyE77Puyx%2FAMZeJqDYi4ikdQ%2BT5szMPxGhNFF20xt3iAIJkSSwveryANrqagugg%2FjmvJZmhkG%2B6JEp6Rmip%2Fc9HY5ewuLgXyrx4zeNfvYmO8uRf6nwwDFPscfTHEUZLMAD6gmd8erIWs83Du22wEhyM%2B6OecGQEv48znHo4wicj%2BUIkcnD5dyVNJd%2FkH%2F72IP7kLtXDR9cidSIm3y1pzNKlyX6p6iaxM4GKNZlp3YJCWx20U8aphcGW1CPyRRsHHTiD8uGxHZixwq9LB9VI6NeNtW9KswTFOrQGAdRFuG7Kue8%2BrUE%2FLEx%2F6KrbSQyovSD7KWge0oA8lUQZTGlcJeVZdQYwGLFTPqHII3p72yXP%2Ftl0f5VmYej%2BLQ4mx9ViOZkVD6xKtR9a6sn3MH3nVLvNFwVFncz46TM%2B60Kmzk1H8nIrhVZtnaLHgD6%2F0ChsuDgoZKvwV2ksWSl5z8RvsiwW3NWwD6DRtJGkIvkX0%2F%2BQhWNqu5D2cuXqADyClWEj65ulv2oFj%2FNYYUrpoFIXKJH4XO0Wvjs6gXBvCFQeA0HsiUisv%2FKBf%2BZnF7yMOIxB1HPEhvlILWiDuFYlqLBQqemYasRJdJG4jDDmZC%2FBjqkARhTedoFP95PbQOyPzluGd7oCSat1711TXk0I0zXKYjUU%2FZN9Zjw%2F4ybAnotqUQq3Y6aSCcgvT%2FTQFwmo1p6xMQGgL4Hfo8DXuFmjHedm8Dqtv6keKjB3rexMES7YnzB4q2h3bKdytEjQKchqL9YATMwUEhwJUg3tJiuxRyU689%2Bvk8e5Ddrgt0C5Be2QxPaSNVHkylAqqI6bCQdjkLx8lsJFryF&X-Amz-Signature=3cf6cc5ffbe6f8b2e4990daa212dd231f3f2d866c0554b8458db56b8de812d79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IDM3Q5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCao9pdXE%2BVmz%2BJcGELhLfCeRCPO7Mq%2BiR7Xlpcl2dH%2BQIgLLnJAGHgP2%2FMY5NGjaCgeOZ4fm%2F3HmMzYzmsvyhQrdUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDsYeGnZfUYV%2Bx14qCrcA%2FpFszQWBsVNIjuVoo%2BeXqrE0IedrPB0Di7lt%2FtKeRf75hHUk9KZCgUjeqDVs8%2BwY%2FEisOrxKk%2BzIFr0rqSGHhGxzGm6rFWOrBxgVmCXNSmR%2BqK%2BjQlV1ifqCwqO2LFwAz9uDxYc%2BrzLXKu7lHm2SjZdZjZ%2FGIv9DssL4blR4PQXME6iS5PpP2BO2fDrGxr2zR%2Bmfq%2BKy7VgEDWOjNTk6mxbBUIOjT1vENBw5mPmF8bR%2F%2BL8%2FZxiB6v6%2FRiczQtVABvMdyga5haPAqdviVhC1p%2Fomvsmmt2%2FjVQ%2FePgY4OX6C%2Fum%2FGIHj1%2BxkjeeWO4ShZ5SwDo%2BzAWlPk%2F4j%2Fice06FX6SAxpmfW0UmW3uAYhGbCVhbcTep%2FHn12lPvlLvMoZTZngRtj2KvgyDJqG98Ffrdt0ryh79coR2DwbgV9pKv7pv7Q4UQ9ZajvbscIuqiFcjJtYJiA4bbFbwHvxpgx3uqF%2FLzaWEEQFsbTWN28mBt%2FW1XpDNKIQJolAr3CVKH%2FUxSZaR2LQFLaZG3SsQDfqgsZMmVF157ai02eaK45NbLwAV%2Fa495wfeR9r94Hi9CxusTRXe8naNODyjjp88makYsXQj9aSeZHtpla2MTb4dwIlEf1E8udMeIe8IDMN6ZkL8GOqUBzmVmVJGbTCJKoVv%2BmhL1RXGxyF%2BjTuAtx7ySi3OO82x5YEBuMLciemUBZU%2B%2BesJrcQtC9QTYn9qQBeucUDq5ctB2SFPj8yesUFMu4iHUgQZqm0UfXzYjutRpQ%2BKJQ%2Bq8d62Yn29eS2o8dcV2UgY9eSF10UcU%2BRkQB8Mukdu6QkFKvopFkOMmcvXnIkT32toK%2BqeG8rHIufxJiF9I%2B6nR%2BnTvj5fh&X-Amz-Signature=9ee7812c41b2605caf32d10b026526d617d6bf092b01990ac1358d7532b86e83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4SGL77%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg1TwNQRd3eKGEszloI56sRxmX2WwMjitGc9sItmba3AIhALwmyy%2BcsuIM9nSMG68qRCG2zP%2B3IIc9U8dYgqYy7AHaKv8DCC8QABoMNjM3NDIzMTgzODA1IgzhqWsMYYKOvZ6VW%2FAq3ANBQDr0eyhSr0zDSZsTlCyS0qBtKalA38WRGjXKHOcr01x5itEtQ4enwa1ER4W92ESB%2BHMU8hQG1mhu5sBSsqLuWByi9PpKZ%2B95ImU2%2Fgn3T2PzfT2%2BzojuK3qmB9SkbYMxNqc%2BNTxkBkhpdlXiOQHPRkOY%2FK4exHrf1KCKf8xBH0N1jtMdrSbmlhgNTd%2B%2FuPq1UvEijNbE8FmpiQG2Z1i3PvLhbbgJql%2FnFqEN%2Fi%2B3%2FrorQBZqamvY5RdvFtVGSyzR7um6U6%2BpYBKGzUB532UViE424tj6eWiscwNIDt2PjfBj3%2Fg3cFP%2FtwKsjhaAmbWPSIzK%2B3QtkIaZ2sNGfY%2F3%2BlfsiyXfpr1RtZWk%2BRNdp0aRI1bWRIYZFDLUk5zU%2BxwGuChfgYaJlpG9s6jT4SL22jYkR6PmDHPQOxD2XmCqokzylCSjHEHyXRn2YN7mAhgNDYuKZV6py9yab95ZiEMkcL8%2FYd1KBUjfavHv2Eluq%2BSjxzG0HNjd9nGMuk83RZm7ho9z0ir10MGDAQACnOxYzHHCklOkvcfaH7D7YcNVeS%2BEH2wGjugGmXUj1ldxf5SNX%2F1%2FuuktltgZjGccRY%2BmrvMmfTHbA8SxN0MI%2Fp68QLO72GIc5daLYa5DcDCnmpC%2FBjqkAV%2BryJ6fEgD%2Bv%2BAhE4zCdABdx%2Fl7PuPu%2B2LDZ%2F5BojTRCCBSp%2BiSHTQ0UieOIP6TelFypMZ4zB7CavY7v0IIMhf1bujPTsYQ9fUZUW4i7thWLeVW9DBWHLoMUKQi%2Biy8T1vWSizpWTw5XN6dkYWNJdmNJASAJxwkRiNkE6X9VZ0H1R2vqz5V6uXEtxBlhI1sLz6aqwTGXDgBkk%2B4KcV3oc2Vb7dU&X-Amz-Signature=48281e5525edcd66ba75b3b03ed240b2512ce442b5c27574f9356e174fa6cc92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSXIXHF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeb2oDiHl%2F6IxyLBfvN2z4fzPwPKZtZjcHN0ZYZ3CTQQIhANCkP7aG34Bl90UKSh8WLwCRdZXPW1d2IzlHqRh%2BfvQYKv8DCC8QABoMNjM3NDIzMTgzODA1IgzSLMy%2B3lzwXSBC8fAq3ANu%2BqZqX4wR5PbrXSjGPdaFaqTqdiIyE77Puyx%2FAMZeJqDYi4ikdQ%2BT5szMPxGhNFF20xt3iAIJkSSwveryANrqagugg%2FjmvJZmhkG%2B6JEp6Rmip%2Fc9HY5ewuLgXyrx4zeNfvYmO8uRf6nwwDFPscfTHEUZLMAD6gmd8erIWs83Du22wEhyM%2B6OecGQEv48znHo4wicj%2BUIkcnD5dyVNJd%2FkH%2F72IP7kLtXDR9cidSIm3y1pzNKlyX6p6iaxM4GKNZlp3YJCWx20U8aphcGW1CPyRRsHHTiD8uGxHZixwq9LB9VI6NeNtW9KswTFOrQGAdRFuG7Kue8%2BrUE%2FLEx%2F6KrbSQyovSD7KWge0oA8lUQZTGlcJeVZdQYwGLFTPqHII3p72yXP%2Ftl0f5VmYej%2BLQ4mx9ViOZkVD6xKtR9a6sn3MH3nVLvNFwVFncz46TM%2B60Kmzk1H8nIrhVZtnaLHgD6%2F0ChsuDgoZKvwV2ksWSl5z8RvsiwW3NWwD6DRtJGkIvkX0%2F%2BQhWNqu5D2cuXqADyClWEj65ulv2oFj%2FNYYUrpoFIXKJH4XO0Wvjs6gXBvCFQeA0HsiUisv%2FKBf%2BZnF7yMOIxB1HPEhvlILWiDuFYlqLBQqemYasRJdJG4jDDmZC%2FBjqkARhTedoFP95PbQOyPzluGd7oCSat1711TXk0I0zXKYjUU%2FZN9Zjw%2F4ybAnotqUQq3Y6aSCcgvT%2FTQFwmo1p6xMQGgL4Hfo8DXuFmjHedm8Dqtv6keKjB3rexMES7YnzB4q2h3bKdytEjQKchqL9YATMwUEhwJUg3tJiuxRyU689%2Bvk8e5Ddrgt0C5Be2QxPaSNVHkylAqqI6bCQdjkLx8lsJFryF&X-Amz-Signature=702cbafc9f273ed282eca0e3ae10d3bf071e3759d4b22238635dd6e5b15c1131&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
