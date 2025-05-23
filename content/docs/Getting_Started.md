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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH7TL5U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEpgoTuOA7It8jgLCqxQ7mAr0X4hJqBZa%2BExobFtpTDpAiAw5hPtOh3d4eB0kNbF%2Bafvi4ejeJIAqFxSHaIk9g9v2yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMql6riBuBr77OgZIcKtwDgJAdsKADV9LgbeuR5mgGyiw7mwuwrQaUIgAd6UgrBJEzJVoX4MEHW3vggr0OP1eO8fejAKiWeajBqaXPTnMft%2ByC6LXyCZ9MKLKZptd4VuT6QPASM91lijJo5n%2FYEhDT%2BOsFsndm0ErbvDIIJ%2FlYo2J4fGAv7Jjl%2FGdKkeRpoK6%2F02mtLqc4%2BC2vJosIF1z6B6AurnGw085FYn3eqKdfiu65%2BKUNAFRYUOXVSS19t3pLbkund0Fey3LgxTU%2BfnctM8%2Buel%2FLxgVKsbCE3CuyBWcJjeXWmA%2F4MhGm9pngJlPdbvAcWteIQPJmdchb5HbpQ3f2FtQGeP%2FMMEtdDrA9eHfbZisYAoyWcrBFXKrAgve6Y7BwzQB8Tl1Q6pnfJU2cdtBzQu7QGrGzWfdPtG0DVg0%2Fr%2FTzHfhtSOohMPho%2Ft06YLJ54iykKTLnXJpnup7vQlUdcYHbdfarjJxkV9cqiy12bG0CEKtgRMQD6BoFv7C2GO9nClKGJJ1mGNL4c7k9SrYZyKkuwg9pDER8TheXyc%2BghD%2Bd9Hqe5IBMG%2Bix21mH6NSUU4nuVys6VePeX49Tpf2X%2B8uoszGUNILgS51joHYDIXD9Tz%2BX9Zf0Wli8Qrlomrj3EifY1RnMrQ0wmtfCwQY6pgEMh8y5lsI%2BvBhLwAjZjU%2FMwdm%2FP%2FmjHIk%2BynM44DlUYJ%2FLbAbRtYDAOQLXN0YSmmTtwPuVq%2ByIG8vqd4mNX6IeO9ZQOyRktUUEZIZvU3nx7Seh4QSAFFAiIWahm5plMSu4XLjYstQtTQfckg83kBQLTk2oYocyrgS3PtrnLjnlj9%2FLloLtEMbHrxQ2B9vuxEg9PEOJpLczEl0ztlFdGn4cq%2F9uwpCy&X-Amz-Signature=c6faa3c70f152af2c9fcd72d671599532260afe60536a9f40a0654752a87882e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH7TL5U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEpgoTuOA7It8jgLCqxQ7mAr0X4hJqBZa%2BExobFtpTDpAiAw5hPtOh3d4eB0kNbF%2Bafvi4ejeJIAqFxSHaIk9g9v2yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMql6riBuBr77OgZIcKtwDgJAdsKADV9LgbeuR5mgGyiw7mwuwrQaUIgAd6UgrBJEzJVoX4MEHW3vggr0OP1eO8fejAKiWeajBqaXPTnMft%2ByC6LXyCZ9MKLKZptd4VuT6QPASM91lijJo5n%2FYEhDT%2BOsFsndm0ErbvDIIJ%2FlYo2J4fGAv7Jjl%2FGdKkeRpoK6%2F02mtLqc4%2BC2vJosIF1z6B6AurnGw085FYn3eqKdfiu65%2BKUNAFRYUOXVSS19t3pLbkund0Fey3LgxTU%2BfnctM8%2Buel%2FLxgVKsbCE3CuyBWcJjeXWmA%2F4MhGm9pngJlPdbvAcWteIQPJmdchb5HbpQ3f2FtQGeP%2FMMEtdDrA9eHfbZisYAoyWcrBFXKrAgve6Y7BwzQB8Tl1Q6pnfJU2cdtBzQu7QGrGzWfdPtG0DVg0%2Fr%2FTzHfhtSOohMPho%2Ft06YLJ54iykKTLnXJpnup7vQlUdcYHbdfarjJxkV9cqiy12bG0CEKtgRMQD6BoFv7C2GO9nClKGJJ1mGNL4c7k9SrYZyKkuwg9pDER8TheXyc%2BghD%2Bd9Hqe5IBMG%2Bix21mH6NSUU4nuVys6VePeX49Tpf2X%2B8uoszGUNILgS51joHYDIXD9Tz%2BX9Zf0Wli8Qrlomrj3EifY1RnMrQ0wmtfCwQY6pgEMh8y5lsI%2BvBhLwAjZjU%2FMwdm%2FP%2FmjHIk%2BynM44DlUYJ%2FLbAbRtYDAOQLXN0YSmmTtwPuVq%2ByIG8vqd4mNX6IeO9ZQOyRktUUEZIZvU3nx7Seh4QSAFFAiIWahm5plMSu4XLjYstQtTQfckg83kBQLTk2oYocyrgS3PtrnLjnlj9%2FLloLtEMbHrxQ2B9vuxEg9PEOJpLczEl0ztlFdGn4cq%2F9uwpCy&X-Amz-Signature=441529d88dbbbba701f79133fc53fd6bbd54d15ac5180ac9b8280e5eb7153904&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH7TL5U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEpgoTuOA7It8jgLCqxQ7mAr0X4hJqBZa%2BExobFtpTDpAiAw5hPtOh3d4eB0kNbF%2Bafvi4ejeJIAqFxSHaIk9g9v2yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMql6riBuBr77OgZIcKtwDgJAdsKADV9LgbeuR5mgGyiw7mwuwrQaUIgAd6UgrBJEzJVoX4MEHW3vggr0OP1eO8fejAKiWeajBqaXPTnMft%2ByC6LXyCZ9MKLKZptd4VuT6QPASM91lijJo5n%2FYEhDT%2BOsFsndm0ErbvDIIJ%2FlYo2J4fGAv7Jjl%2FGdKkeRpoK6%2F02mtLqc4%2BC2vJosIF1z6B6AurnGw085FYn3eqKdfiu65%2BKUNAFRYUOXVSS19t3pLbkund0Fey3LgxTU%2BfnctM8%2Buel%2FLxgVKsbCE3CuyBWcJjeXWmA%2F4MhGm9pngJlPdbvAcWteIQPJmdchb5HbpQ3f2FtQGeP%2FMMEtdDrA9eHfbZisYAoyWcrBFXKrAgve6Y7BwzQB8Tl1Q6pnfJU2cdtBzQu7QGrGzWfdPtG0DVg0%2Fr%2FTzHfhtSOohMPho%2Ft06YLJ54iykKTLnXJpnup7vQlUdcYHbdfarjJxkV9cqiy12bG0CEKtgRMQD6BoFv7C2GO9nClKGJJ1mGNL4c7k9SrYZyKkuwg9pDER8TheXyc%2BghD%2Bd9Hqe5IBMG%2Bix21mH6NSUU4nuVys6VePeX49Tpf2X%2B8uoszGUNILgS51joHYDIXD9Tz%2BX9Zf0Wli8Qrlomrj3EifY1RnMrQ0wmtfCwQY6pgEMh8y5lsI%2BvBhLwAjZjU%2FMwdm%2FP%2FmjHIk%2BynM44DlUYJ%2FLbAbRtYDAOQLXN0YSmmTtwPuVq%2ByIG8vqd4mNX6IeO9ZQOyRktUUEZIZvU3nx7Seh4QSAFFAiIWahm5plMSu4XLjYstQtTQfckg83kBQLTk2oYocyrgS3PtrnLjnlj9%2FLloLtEMbHrxQ2B9vuxEg9PEOJpLczEl0ztlFdGn4cq%2F9uwpCy&X-Amz-Signature=a3f5d642a699dd5cb86daf4b89667bbe58dbc4bccf424beb57b1ff2accb5b7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSZPAGD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCtf4uc4%2Brf2rv9KuhMQpB8X9rDiIFdXrE3j7rb2MO%2F1AIgW5xLQntZsS5KjCQ0IL9ot3jOZFwsJtLsiWTU5l%2BKsbwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkEfy7g%2BU49%2BcljWCrcA3NAJxVMetI%2F8O%2B%2FA8xJE0GHhtp%2FG95Q6bqyp1uaFnZHHpMsHspaXYrOOaJ%2FFxZwKDZtci2m6LWnmqVMcCC8oVllymLkhtJbQms3nwqvvzXcbVmYxaIyV6reG2lqbQ3nggylffRGxEnd0ycatUzDSVC2Kf8IJLButykV9U3BCFo24sSOgxcAkBlGV99xH%2Ba8EkaZklOrnbMQTiVHxXhMtkApVMGJpBncQw82KSVy%2FfbgmM58uvBGPn6uLWp7nN5ZlXsLLJU216y2tQRLMvYnzJd%2B%2BxxY78anzgCD0Qu3KQQICzh8rCrMBeODElxcPP9FZx5R9XYwB1SKVG%2Ba%2BXPmIBTkH%2BHJgqueKoMXLwR5BTJL7ndMnC%2FfHRBgwA99jfzx5aYBsSRwkCZj%2Fs2BrYrub16d1KDr2x5E9V4reaKF2JlYAxP%2BUe6ebtxgU%2BYhk9%2FBU8WBuaam%2Bz76O0MHgC8ypw9d0Ha89F8XvNAEcNkSv70x3gKnchXCGdfq1eaB8RXdNrNAsAr8yXsxcm8Szm3718rKtaWZurUwQv6oYJSva4rGWzSjkRLTSnVgdeSxm55%2BtP7qQB77GzkxdYffcrahc0iC0NAhBu8PlsKdaw2GQ1uYOc1GgRC6mcZK0qaIMInYwsEGOqUBDLiYqSOBEAs6wpoqqulw6R944pmDWtoCsfQMUR%2FTjG4EPLwc4nyUTpiLGHVNCREtqHLSjCRRvRpcRW7edYoiXhnxCjrIwKt4O335xbHQ%2Fcq4gPipma5FqfZ4F3V4Jm0EXXx%2FOdhwKrW%2FaUUIt3NlDOKsD4e%2Ffmqm2Hiyfks0PjxzD4nuewWGgBcRNdwQJWAsEKOqVSWrsxWxK7yJMrrE7qw3c2la&X-Amz-Signature=4d548038f45888c4557e40ef20847dd37344de039080b5a42e3592c51f9bd5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QHRLFX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDY99SukYRqwHTqJzf4cJXwoPPcdBBESREh8xonNFd9AwIhAOhYQWjEIWg0ijRdXIh%2BYOksftxJb7vSVUqcmrkNEZ5eKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxX5WnsX2hbFpFMuIq3AOgIUeuqNxBPhWa%2BzIuyxii7iJwCvnezUJFwQS9Y28BOxM4LNTgoUc%2BPqVpHneisedO0UGhc6%2B4LAQOSGrpJVPyHaCLfWO%2B63F54OknYIIWyJPw9PZE6D3GtB%2FXcjYE1Kd2LgoHhkyb9uQK8q7i6OJXlLZNyoLkFP2Th%2BkCj2DVMcdn7R0lNFWFz%2B%2FCnO3zYpcMtBth4hvECKo74xDR0k2GlQe9AdEZcM%2B6qa72XKmq36ri5SycGn2TXpOqIkLIap7IdF8RYFUcBknhLGWEVtviKe1sLzcoObq2iObl%2BVUP1txkwvSrZIFWBCA4RURTMBywZtQ9fvyr8UojddkRY4I7AOxsUFO1peB11FN3JjVdRhfSYHjP%2B3K6VBZthMqVSWLabikXAO5AmJC%2F0KF8bWE6cAdYQwqHfWP15wQ02KVbXSu2zA3O7ZgSracc3eYc%2FRb8evXqmGM2%2BeQJY5kM9Ll3HsbcK5eWSGXqw224uhArLAk9nEusVKsfIeiWA63gPtMqE2HfSt3WGCa%2FRDvQ1NZQHVvjUb6bO1jmymUneH2tS3BeAiK115pcVfn5nKeb%2BIQVqnsyWBv3zEp0YE%2B95tiOy%2F7uGOltLM2sl48eFnTV2Fl6e2GHLUfBV6jyqTC%2F18LBBjqkAde532fBbkjmbg7XqlM%2BJSkzd%2Basy%2BNTioxwJbG01n3od4xDfcgc%2F9%2FcajRJuzgnWhA1HFyigB7dTYVEwupMpGF%2BB%2FbVhRUbotjRDPSxRUM6HNyvWEAAYXYy1O9BNbV4FFXfQvjSBuoGwYIPWav7jbJWu0bZyPd7RpN2wVx4%2B5dQ%2Fj1dp6rY%2FQoxsTqUDdAuuEJyghmVC5URb0zfzDo7SHJXKKBb&X-Amz-Signature=e9b569c4ca579b0adca69269d11196654ee5315e05ae4d7785ce592193338b30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH7TL5U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEpgoTuOA7It8jgLCqxQ7mAr0X4hJqBZa%2BExobFtpTDpAiAw5hPtOh3d4eB0kNbF%2Bafvi4ejeJIAqFxSHaIk9g9v2yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMql6riBuBr77OgZIcKtwDgJAdsKADV9LgbeuR5mgGyiw7mwuwrQaUIgAd6UgrBJEzJVoX4MEHW3vggr0OP1eO8fejAKiWeajBqaXPTnMft%2ByC6LXyCZ9MKLKZptd4VuT6QPASM91lijJo5n%2FYEhDT%2BOsFsndm0ErbvDIIJ%2FlYo2J4fGAv7Jjl%2FGdKkeRpoK6%2F02mtLqc4%2BC2vJosIF1z6B6AurnGw085FYn3eqKdfiu65%2BKUNAFRYUOXVSS19t3pLbkund0Fey3LgxTU%2BfnctM8%2Buel%2FLxgVKsbCE3CuyBWcJjeXWmA%2F4MhGm9pngJlPdbvAcWteIQPJmdchb5HbpQ3f2FtQGeP%2FMMEtdDrA9eHfbZisYAoyWcrBFXKrAgve6Y7BwzQB8Tl1Q6pnfJU2cdtBzQu7QGrGzWfdPtG0DVg0%2Fr%2FTzHfhtSOohMPho%2Ft06YLJ54iykKTLnXJpnup7vQlUdcYHbdfarjJxkV9cqiy12bG0CEKtgRMQD6BoFv7C2GO9nClKGJJ1mGNL4c7k9SrYZyKkuwg9pDER8TheXyc%2BghD%2Bd9Hqe5IBMG%2Bix21mH6NSUU4nuVys6VePeX49Tpf2X%2B8uoszGUNILgS51joHYDIXD9Tz%2BX9Zf0Wli8Qrlomrj3EifY1RnMrQ0wmtfCwQY6pgEMh8y5lsI%2BvBhLwAjZjU%2FMwdm%2FP%2FmjHIk%2BynM44DlUYJ%2FLbAbRtYDAOQLXN0YSmmTtwPuVq%2ByIG8vqd4mNX6IeO9ZQOyRktUUEZIZvU3nx7Seh4QSAFFAiIWahm5plMSu4XLjYstQtTQfckg83kBQLTk2oYocyrgS3PtrnLjnlj9%2FLloLtEMbHrxQ2B9vuxEg9PEOJpLczEl0ztlFdGn4cq%2F9uwpCy&X-Amz-Signature=4891d021811fa81ad4212dbdc71967533d9cf65d8218212ebfbbf904dad9494f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
