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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRAYY7K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQSFGseTODSQWB5ShMPUy451J8JnuctYEnsWHjzRTqPAiEA8fI%2FAWTcYirx8la%2FW89Ak3q%2B8Fj8d4c5AiGBkGrf7Roq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJx4AbWstpanV0YWQCrcAycaXRafC4O%2BHyXE8jM2BQCEJaQEzD%2F%2Buti5wQbeF9dtGYf3MwvOuN3ThEDWeJXqFDS0jr1pnxoirByQaZXoWKB%2Bjfw1KQ%2BZZBzaxDXtRShNOUmXLQxU3q8SWV5KkOz102clLZ3HWuXV%2FLpLYDlgMZdD96q2D37zExIOC68XFluFOc4hum5v2%2FBwOrZOOGsixu7W%2BT0Lvx8xJyyFP8tUPqRVpXb7StsDDcpMZO2bVVcnJG%2BsNt9yZoKa%2FN4IITSvjGFAve9xrWC4RWc92pc5vclCy6nHUyrpH02VecvX%2Fb1I63yn8QyjUyM6ZOc6Ap%2Beqat0DL2oeGtqVbpPw3VPPiVkay6dK4sfjpEHMdwG6XVVojReEu1Z18jBQWtobCMCwSNQ0AnpRJwAf1ccONzi%2FnyYuE03eFm5O3lhbhfkcEbjk1O3AOFjnM0hQjfAIb9SkFFEfQcihVPQcMJHUcWUX7QvoJfB0E7085Rg1Eb9qZu4KaugaLS1OCojUajRfBAxhgZqFd9C5TfdJpi1moCCnhXvitg8pztoAV5519%2Bq%2F7sACHw9VUfmSxvmoDz1a36Mn%2FyL3GC2DRPU1dpvVrLJuL6WPPT9cjjN4vUu0zX4uPTz%2Bdkq8z%2Bsu6qIRxGdMJHq9b8GOqUBfovO5VnI1XiGfDACBfh8biJOhyJqLcXj3hSsQ1OSAIy3G3oailitVbsvBd2Coc5OAG3MJsta4XCdzi6mPMsgO5eUghQeGlLTlUIOMaFYrjy%2FitZNRmKK9eYCDbYaJx9QQOHQydvZzt5d6P1ew0GHOSGo91KjbCROYYG4OD7AzNzojhsv%2Fa9A%2BSRKvyiLLjL0WWgYWoi79Lpa%2F%2FvQfTfjr1DHO5aA&X-Amz-Signature=0ee7ef1416041dea31b72c72762d6643c428b5118216cee20842623e60882a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRAYY7K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQSFGseTODSQWB5ShMPUy451J8JnuctYEnsWHjzRTqPAiEA8fI%2FAWTcYirx8la%2FW89Ak3q%2B8Fj8d4c5AiGBkGrf7Roq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJx4AbWstpanV0YWQCrcAycaXRafC4O%2BHyXE8jM2BQCEJaQEzD%2F%2Buti5wQbeF9dtGYf3MwvOuN3ThEDWeJXqFDS0jr1pnxoirByQaZXoWKB%2Bjfw1KQ%2BZZBzaxDXtRShNOUmXLQxU3q8SWV5KkOz102clLZ3HWuXV%2FLpLYDlgMZdD96q2D37zExIOC68XFluFOc4hum5v2%2FBwOrZOOGsixu7W%2BT0Lvx8xJyyFP8tUPqRVpXb7StsDDcpMZO2bVVcnJG%2BsNt9yZoKa%2FN4IITSvjGFAve9xrWC4RWc92pc5vclCy6nHUyrpH02VecvX%2Fb1I63yn8QyjUyM6ZOc6Ap%2Beqat0DL2oeGtqVbpPw3VPPiVkay6dK4sfjpEHMdwG6XVVojReEu1Z18jBQWtobCMCwSNQ0AnpRJwAf1ccONzi%2FnyYuE03eFm5O3lhbhfkcEbjk1O3AOFjnM0hQjfAIb9SkFFEfQcihVPQcMJHUcWUX7QvoJfB0E7085Rg1Eb9qZu4KaugaLS1OCojUajRfBAxhgZqFd9C5TfdJpi1moCCnhXvitg8pztoAV5519%2Bq%2F7sACHw9VUfmSxvmoDz1a36Mn%2FyL3GC2DRPU1dpvVrLJuL6WPPT9cjjN4vUu0zX4uPTz%2Bdkq8z%2Bsu6qIRxGdMJHq9b8GOqUBfovO5VnI1XiGfDACBfh8biJOhyJqLcXj3hSsQ1OSAIy3G3oailitVbsvBd2Coc5OAG3MJsta4XCdzi6mPMsgO5eUghQeGlLTlUIOMaFYrjy%2FitZNRmKK9eYCDbYaJx9QQOHQydvZzt5d6P1ew0GHOSGo91KjbCROYYG4OD7AzNzojhsv%2Fa9A%2BSRKvyiLLjL0WWgYWoi79Lpa%2F%2FvQfTfjr1DHO5aA&X-Amz-Signature=4172f12c9f3b15a4489d9e489990489cb3be02023042c6ba27c285716e158eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UN66HJ6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG66%2FnusMlJhiB1jXZK0olEq2fLN9Qm0HNSuYTv0h03WAiAjdnabDyLqSKgXsMbNyH%2FR4sP%2BEqG1ahHmEdbKXm0taSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMHCNbfBXTf1oUT0A0KtwDxkr1AjoAMnpL5x3e%2FEfKQrSdPqeScBuxady5bfdjpBiiQ5H9vP5x87ksnSqgrDypQBbW18Q1HqLgZvLULkcKR%2FFUk8XDZLNFm0PhQYcOju%2F8KdCP2wblzo0MYjgozrB0YhPUFj%2F%2BK2BFAMFjKak856FCF3NPMVbJolIPxSPOH84ZeWP0zLISfCxYicm%2Bx%2BxxoEReirNq%2FmxnRhjr%2BqhyiPJZETknZu1X4TrGcEZ7a0asi969z2HQ4LcIGKILy8HWEloFFyulyviV%2F38wtVE31LCECksucD5I%2Fu4IiZP3Z1shVzlCPFTOT%2BBL2Xl8ZwW4sVC18EK82rcZQjKlw%2FaII%2F4RrSk9OYqOZiHMRsM%2B5mFAL1C8JtfPke8KuVcPyeNjQm6Pqi3H46qIPkWuM8wHtPspT%2Brbb15euluPgYsxeMf3v%2BnP6W576Rfe11hFVA565c89OOcAirKgKxrNo2B6yPkKxD%2F6aLoQTm0umYSfL2itpfzSwN%2B40pHr7esyjhZAKqkOXo%2Fj9vGQQ%2FVN0yOyJw1dt5S9wSuq8EALP73CeQDTcwGH2A%2FbruadNlHGeJH7CJpagavQ5oVFkmctHmhA2xao1szRzdWbpmF9EP0%2BQHP3rbW4pFVTQsIercQwnur1vwY6pgER6tAtGDAU6TxdzGcM2SyzJwz5HrtSgtxxc7cvtXKGt58j4ttmvvQcZ1QIi6ctibgQEv%2B3PP1IqC%2F683noV5eIHL21R3hi8KeNhBHdDqqxBfj6V%2Fn27wNL599QhG1%2FbW6%2BBNuJYy0%2FFK6cAm32jpZa6zbBKzWwDjecDhH%2BZa7THJ9dNWUQO1yuXrSBYw8ZUwjybBhQtZPSVRORl7RaKIvZwvrvrE8U&X-Amz-Signature=30440b8f2cabcef0befc8861820abd2f39540168c5a9fe84a05c1c5837a956ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPFVW2C%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMwAnR9K9j2aHxt51dE7RZAXnX4Gx8yRHfMlOQuvFwwIhAIW8%2BKSWiFTRHhAiaecVlTyShONt0VXyJNqkA0hoMoYAKv8DCB4QABoMNjM3NDIzMTgzODA1IgwMEKP0%2B%2FMvk3xUs2cq3AN8KiRRNfgdd330rwM%2Bxqy3807NLTAaPaEE%2BZP0Z%2FRiR89GpDHOQAqWK%2FLhPmWuAPNhPc%2B2GoJIAyp0MJySpLHe4msYB%2BgDHIjCaDkVEsBYZxRT07KE1%2Bb3ysaPLLDz3NlnOx8qqlp1t8uXeguJliqM1m6dvUoOhjeIA15TPXy4%2FRzueWkTmjo6Phla7qQBcGl%2BKNqQM%2Brh%2Fhn%2FB%2BDKd9kk078zlHCBzyXHxzIrZvw9DCF5NCWY0%2BjNqxdb4lvCrlEBryXBPnJjohao91zeKywghaLFFZjJMMeQrJNx%2FjnFBGzLptBZoHfVvrWyvMsiRKG4leV7bD%2FwI%2Bhx%2F9YSk5LXluOY6tzJjNEbRkjq7DQkhjhUHGFJOe7Ubsy0n9x%2BTmRMQMpTxdiLgA5En40STW2DDaUriNj76xbfYG35BzHBiu8Cmbop8zJPr8Wwn9DLfd3O6htZMfbFRAuBAr4YwCRCPzjbtO594yMh8qKJ1ukg05aLqen3EuN%2BWFHM8CEnBBzNicsi7DA8%2FDeUXALluzKYvZkBraK5dbF2nHfwhATjLf5hRwWp7blqL8vdzJC0zF22HGJlS1ZCf1XMCxkCtvXvx6sXdzBNURSmE%2BcjH0DQde67dPAdT%2BIJGO6nGDD16vW%2FBjqkAUPe0azn%2B5XQxXOCnFv%2B8ynSdiZxSD8ZbX2jqjkL4alSNcygSPp8bGDK4TYzbEWLpn%2F9OtVzSLPxeAeCtZS78uz0NAlYR5nodrMv8wPDdGA5Ekd88ioJk%2FzunbJ9jJjSOs09sNkIPSMNvdrrlHEM4%2ByzKEyP%2FDdWHP41xU0Mpfx5d%2ByyRNE99oEJ4N0Z425gBnbJPDi9dZZCsafytdAw7SAEHjRl&X-Amz-Signature=111e0a35b7fcbf6dc11debc454e08c41cac97ee10c619df58cb0ba691cf97caf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRAYY7K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQSFGseTODSQWB5ShMPUy451J8JnuctYEnsWHjzRTqPAiEA8fI%2FAWTcYirx8la%2FW89Ak3q%2B8Fj8d4c5AiGBkGrf7Roq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJx4AbWstpanV0YWQCrcAycaXRafC4O%2BHyXE8jM2BQCEJaQEzD%2F%2Buti5wQbeF9dtGYf3MwvOuN3ThEDWeJXqFDS0jr1pnxoirByQaZXoWKB%2Bjfw1KQ%2BZZBzaxDXtRShNOUmXLQxU3q8SWV5KkOz102clLZ3HWuXV%2FLpLYDlgMZdD96q2D37zExIOC68XFluFOc4hum5v2%2FBwOrZOOGsixu7W%2BT0Lvx8xJyyFP8tUPqRVpXb7StsDDcpMZO2bVVcnJG%2BsNt9yZoKa%2FN4IITSvjGFAve9xrWC4RWc92pc5vclCy6nHUyrpH02VecvX%2Fb1I63yn8QyjUyM6ZOc6Ap%2Beqat0DL2oeGtqVbpPw3VPPiVkay6dK4sfjpEHMdwG6XVVojReEu1Z18jBQWtobCMCwSNQ0AnpRJwAf1ccONzi%2FnyYuE03eFm5O3lhbhfkcEbjk1O3AOFjnM0hQjfAIb9SkFFEfQcihVPQcMJHUcWUX7QvoJfB0E7085Rg1Eb9qZu4KaugaLS1OCojUajRfBAxhgZqFd9C5TfdJpi1moCCnhXvitg8pztoAV5519%2Bq%2F7sACHw9VUfmSxvmoDz1a36Mn%2FyL3GC2DRPU1dpvVrLJuL6WPPT9cjjN4vUu0zX4uPTz%2Bdkq8z%2Bsu6qIRxGdMJHq9b8GOqUBfovO5VnI1XiGfDACBfh8biJOhyJqLcXj3hSsQ1OSAIy3G3oailitVbsvBd2Coc5OAG3MJsta4XCdzi6mPMsgO5eUghQeGlLTlUIOMaFYrjy%2FitZNRmKK9eYCDbYaJx9QQOHQydvZzt5d6P1ew0GHOSGo91KjbCROYYG4OD7AzNzojhsv%2Fa9A%2BSRKvyiLLjL0WWgYWoi79Lpa%2F%2FvQfTfjr1DHO5aA&X-Amz-Signature=bfcbafcc368724012ecbc551d9b2e5958c888ac44595aff1cec544ba413262b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
