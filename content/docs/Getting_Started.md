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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFL2GSY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCelwzgNWgvRDC1jrHKEUNHzejZpvjf3i76Y%2F7N57pNLAIgcjrcmYTSBdu8D7OIz4FlhREpqm8Smqbk%2B9Z2acKG2JYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdNUegjUIokeI%2FjZSrcA6WTOl6smNaybfeyLW9Z7LDZzc7lipuJurigGa03fhpZthDhtjSW4n5EpsW13%2Fzm5QiwBCWnTDGGn1SdekTQbPefp6W2my0bo%2FFHl5j80H7plPSif3rfpw1hyPGTnBVd%2BBXom9J8KTwj0D1Dq0IeBgrarGujM7q6nQBHhh0nZdMRVbwxtzkmvWBf0FS8ZewrUcgLhYDWj7gR7EQzcUJGbQbOYvP4Zj%2Fh%2FZKLsf8kyznpKrxQygNby5WQRYJeX%2FnRIm05rF0HvlvoB7UhzArcq7qiHWcF0YveOGrkwFGydl7FYO3eV5LdsffLQkIAzqGx4n1KqAqO4ozW15P6tXPyFNlE1SYblvhwue2nfMqH8GyEYx%2BfCWRRyO1jyPfeYxL3n45b7H%2BTfZgaryiyzVzN6OzV4T%2Biat5gsseiVFFcediSKd8hiSJlkPhWkUk%2BFR%2B8Gqdcbbb4EtOnylULNupeVVg%2FObLi2Jvl4t%2FMuK05ZwJI6LGTIcCePEwuCMXYe%2FOHwxJLvy4bC3HwAGK9t%2BxARFXdwXqnJgieqxFiJ%2B7sx7Jv%2BGDOdRrsQUzh%2F%2FFFdofgaUjqq9SdsdJJNOGmn3klPoXnJVxvjDg%2FXeMYQr7AXHXoX7I%2BOS2BnwudTfxrMNvH1sQGOqUBin4mACHeRI1bWlxy7Hb8u5KbnhjXVBhK1kwcwy%2Bzvry8Cs%2BGS4x97a2p%2Bcz%2Bp7Gnl9BzAZp8HSAHGGmtPPMjz06k1EPk9REWD3VR6myRo1iN5B4Ja7W29G0PcxbEgWD0aR0Z8t075ch%2BLdktv2f%2BYWTl4qK53EqhLyJm1XogZLFArbKP8NiqXN%2FWxq4fUBwxjaKu2ftbD9yG1OpWVHxfpu0wJnek&X-Amz-Signature=fa97735789e3e78a47f45d268556f816b63695f3a3b7ec9054a656fa6c49de22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFL2GSY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCelwzgNWgvRDC1jrHKEUNHzejZpvjf3i76Y%2F7N57pNLAIgcjrcmYTSBdu8D7OIz4FlhREpqm8Smqbk%2B9Z2acKG2JYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdNUegjUIokeI%2FjZSrcA6WTOl6smNaybfeyLW9Z7LDZzc7lipuJurigGa03fhpZthDhtjSW4n5EpsW13%2Fzm5QiwBCWnTDGGn1SdekTQbPefp6W2my0bo%2FFHl5j80H7plPSif3rfpw1hyPGTnBVd%2BBXom9J8KTwj0D1Dq0IeBgrarGujM7q6nQBHhh0nZdMRVbwxtzkmvWBf0FS8ZewrUcgLhYDWj7gR7EQzcUJGbQbOYvP4Zj%2Fh%2FZKLsf8kyznpKrxQygNby5WQRYJeX%2FnRIm05rF0HvlvoB7UhzArcq7qiHWcF0YveOGrkwFGydl7FYO3eV5LdsffLQkIAzqGx4n1KqAqO4ozW15P6tXPyFNlE1SYblvhwue2nfMqH8GyEYx%2BfCWRRyO1jyPfeYxL3n45b7H%2BTfZgaryiyzVzN6OzV4T%2Biat5gsseiVFFcediSKd8hiSJlkPhWkUk%2BFR%2B8Gqdcbbb4EtOnylULNupeVVg%2FObLi2Jvl4t%2FMuK05ZwJI6LGTIcCePEwuCMXYe%2FOHwxJLvy4bC3HwAGK9t%2BxARFXdwXqnJgieqxFiJ%2B7sx7Jv%2BGDOdRrsQUzh%2F%2FFFdofgaUjqq9SdsdJJNOGmn3klPoXnJVxvjDg%2FXeMYQr7AXHXoX7I%2BOS2BnwudTfxrMNvH1sQGOqUBin4mACHeRI1bWlxy7Hb8u5KbnhjXVBhK1kwcwy%2Bzvry8Cs%2BGS4x97a2p%2Bcz%2Bp7Gnl9BzAZp8HSAHGGmtPPMjz06k1EPk9REWD3VR6myRo1iN5B4Ja7W29G0PcxbEgWD0aR0Z8t075ch%2BLdktv2f%2BYWTl4qK53EqhLyJm1XogZLFArbKP8NiqXN%2FWxq4fUBwxjaKu2ftbD9yG1OpWVHxfpu0wJnek&X-Amz-Signature=35ad269343f28de153ad3e1b0b04a3fba9d55e2e886c6b89bf97592a50d10c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFL2GSY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCelwzgNWgvRDC1jrHKEUNHzejZpvjf3i76Y%2F7N57pNLAIgcjrcmYTSBdu8D7OIz4FlhREpqm8Smqbk%2B9Z2acKG2JYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdNUegjUIokeI%2FjZSrcA6WTOl6smNaybfeyLW9Z7LDZzc7lipuJurigGa03fhpZthDhtjSW4n5EpsW13%2Fzm5QiwBCWnTDGGn1SdekTQbPefp6W2my0bo%2FFHl5j80H7plPSif3rfpw1hyPGTnBVd%2BBXom9J8KTwj0D1Dq0IeBgrarGujM7q6nQBHhh0nZdMRVbwxtzkmvWBf0FS8ZewrUcgLhYDWj7gR7EQzcUJGbQbOYvP4Zj%2Fh%2FZKLsf8kyznpKrxQygNby5WQRYJeX%2FnRIm05rF0HvlvoB7UhzArcq7qiHWcF0YveOGrkwFGydl7FYO3eV5LdsffLQkIAzqGx4n1KqAqO4ozW15P6tXPyFNlE1SYblvhwue2nfMqH8GyEYx%2BfCWRRyO1jyPfeYxL3n45b7H%2BTfZgaryiyzVzN6OzV4T%2Biat5gsseiVFFcediSKd8hiSJlkPhWkUk%2BFR%2B8Gqdcbbb4EtOnylULNupeVVg%2FObLi2Jvl4t%2FMuK05ZwJI6LGTIcCePEwuCMXYe%2FOHwxJLvy4bC3HwAGK9t%2BxARFXdwXqnJgieqxFiJ%2B7sx7Jv%2BGDOdRrsQUzh%2F%2FFFdofgaUjqq9SdsdJJNOGmn3klPoXnJVxvjDg%2FXeMYQr7AXHXoX7I%2BOS2BnwudTfxrMNvH1sQGOqUBin4mACHeRI1bWlxy7Hb8u5KbnhjXVBhK1kwcwy%2Bzvry8Cs%2BGS4x97a2p%2Bcz%2Bp7Gnl9BzAZp8HSAHGGmtPPMjz06k1EPk9REWD3VR6myRo1iN5B4Ja7W29G0PcxbEgWD0aR0Z8t075ch%2BLdktv2f%2BYWTl4qK53EqhLyJm1XogZLFArbKP8NiqXN%2FWxq4fUBwxjaKu2ftbD9yG1OpWVHxfpu0wJnek&X-Amz-Signature=9c9d442c4cadb117b6d21301deefd0892578894ba5207d4e203b30431f09dd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PU3RR74%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFAgFqEO%2Blay9EtwliipJvKm6luWG4accGelWzL%2FnhOMAiEAlQf9eXkvdW7RkH7JTVRhXp0rNv9b9tX1w8K1vOq7ThkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMv6r0VMlxc%2BbNZLIircA%2B%2FkdAZDoBi6PpW1SFI0JvTaRGI0r6zqs3lMMtSe%2FFw9iN8NHqL3ylgt1TLTpKndDpQqHmnhlzTOxJtBzN0kPyHbiWRzboR%2Fc7GPvXfrRSN%2FnmmRxOUrZgB3Xrc%2F6xFVtziio8KjnAD1AkgIozuqMvq7fpuwYlv6mNa4Hk4Y1Tgro93FmuAVYSmB8WUFxx1pR6I83ZcEmQjEpaJtkOcnAgv8pJCg4b7sy8wpADoiP0BfurCKACyS711hXycH8rYNBK1yGPos0ln7EwrxPj8MyyoAxZ5I%2FUyR%2Fzy2NARwhDF4YD34%2BugWyxSCE%2FuTUlyyCAySRcHvsi8R6tmyvykIb2PRvC4tS20DtDbw1GNtynT32rUPnFZl2l3GVeC1nS5S%2FS5BV1enXflMnEEiZsbqN1c3FW9iJ1XL%2BWyFm3Zsb3KpFyF9UIKq1TiN8QGMnCu%2BdGcsu4tT%2FXMg7CNZGE%2Fx7MPWK7q1RDiWZ7BleTGgLR8yFY9FMQZARmZd%2F1vy%2ByyodU0MD2mXzd7T2P1n6lRbnHF6NzUZgCwu6t9UzNEc2ve9A1gsApjK6X%2FQs9vkrNNrdBlVNZdqAqEL5fxak6D0M%2F1Jze%2FgUuia1WBEIdFavXH8cj6g%2BK5HHgZIcM6jMLfH1sQGOqUB7tQFnTCiHj%2FnX%2BTfzm%2Fo2jeG%2F2H6VJnWx6fYElLtYBWZdfC%2FH%2F1j5%2BbssbnOVtW4Erx0H1N4yH9pSpww9HMQ5efbblAtDPgCq8Q4FfRr1uyTpm2TI%2BqDU9dRcZ3%2B40eUYjIMa%2FpI8tFRDTvFYiLFuojHtQm30nv3hLUlJKlZaM3AtBtx8NXOVxrANfUZWeQovvp7yLsnAvK9IZA3nGvC2DAYQORM&X-Amz-Signature=4de41dce4dcc5272780cb5486d31974645d48de50a470199ffe64cce606b904f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAALQSW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAfdrP%2FvDtmWFNxxA96sYkhpHdWQkJ82YJCIYRqzLeNtAiEAih7QzVJDJe6RVI8RRfKnJ6FtxxquTLfmsD8DV5ecKJUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsMkgbZrSHWMLzlkSrcA6Ik3uWkRYTv47adDE%2BhEKiPTDiImcM2vbMLBTYdyK0FafuwEZR%2B9Z71b3yPRAPs14t5wbs002QPSYXg3WQWSzFSt8iW98W6oVknFhDnDG8Zq9Z2wlXWz1LLRqkrNmmCNfPuR6xv1SBWVIe7cKyLQoMsIb3sCd69WbnvYx1lKZOdNWhSRibPaIXcXdv4FOqywv419XfhaN4OUVsI5XmiW3dV1YockFKeKV%2F9vjk%2Fyz6HWn9tU1eyWgC5aZwEauU7HFBv%2FOVtT9L5lK3qUKCx5P336tAlhQRucyapx6wcdA1ETNL2VRcZv1VAYfVOwe3DiyYhmN1cmg%2BlQBs80D5phFuRQoaWi3yWjdfAZg2uk7V%2Bfr257Zor4kXm%2FOy44%2Fh7vhS%2BB0I9BPsayH%2FAo1l%2FTjhlytUNtUVwZ1bfgvRQL6q9vB5pLw0wchaBCwJWhfy80JHBOuCagTgF4wbXd9GM7bIqWR7WL%2FHuJ5kNZM8hXgHHP3JC54wunKD2dJr0az5ojnjVBJnB%2Bn1%2BDQjcVEUG1HfmuhEHPfnxRG1Xph51CBGlZCeE3mPpVn3yP2yTP3si7cienAHHZvcXnGaNRTZcmIXAb1scNzAeXwLWbz8ihUYPMPCv%2BNRX7Hhf9HOZMLjH1sQGOqUBgaOcuEuMfX5NOJBClrJbuQ89m67VyCt92sXZSUsuOmW%2Bz%2BEAwWIPVBFd2JUVfF3XjIZ2IGWSXRSC3og1LH0jOQk4DK8Vi5cB2xhXAnmww9NQhsEOPp1qOYZeFO1mCr4n89hrGff0jfvyQbrPHPGX3cCDjZDR9ojtmdyDXKC6eHiLUiWrWHkeb1JR57FXkHN67QsYgW8ppSshYNXiy7EA8LX9GUfp&X-Amz-Signature=7f79e993ff56d22458a3a0b6afe735ad0aa3a9e73565a1889f44c19ba9ae1cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFL2GSY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCelwzgNWgvRDC1jrHKEUNHzejZpvjf3i76Y%2F7N57pNLAIgcjrcmYTSBdu8D7OIz4FlhREpqm8Smqbk%2B9Z2acKG2JYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdNUegjUIokeI%2FjZSrcA6WTOl6smNaybfeyLW9Z7LDZzc7lipuJurigGa03fhpZthDhtjSW4n5EpsW13%2Fzm5QiwBCWnTDGGn1SdekTQbPefp6W2my0bo%2FFHl5j80H7plPSif3rfpw1hyPGTnBVd%2BBXom9J8KTwj0D1Dq0IeBgrarGujM7q6nQBHhh0nZdMRVbwxtzkmvWBf0FS8ZewrUcgLhYDWj7gR7EQzcUJGbQbOYvP4Zj%2Fh%2FZKLsf8kyznpKrxQygNby5WQRYJeX%2FnRIm05rF0HvlvoB7UhzArcq7qiHWcF0YveOGrkwFGydl7FYO3eV5LdsffLQkIAzqGx4n1KqAqO4ozW15P6tXPyFNlE1SYblvhwue2nfMqH8GyEYx%2BfCWRRyO1jyPfeYxL3n45b7H%2BTfZgaryiyzVzN6OzV4T%2Biat5gsseiVFFcediSKd8hiSJlkPhWkUk%2BFR%2B8Gqdcbbb4EtOnylULNupeVVg%2FObLi2Jvl4t%2FMuK05ZwJI6LGTIcCePEwuCMXYe%2FOHwxJLvy4bC3HwAGK9t%2BxARFXdwXqnJgieqxFiJ%2B7sx7Jv%2BGDOdRrsQUzh%2F%2FFFdofgaUjqq9SdsdJJNOGmn3klPoXnJVxvjDg%2FXeMYQr7AXHXoX7I%2BOS2BnwudTfxrMNvH1sQGOqUBin4mACHeRI1bWlxy7Hb8u5KbnhjXVBhK1kwcwy%2Bzvry8Cs%2BGS4x97a2p%2Bcz%2Bp7Gnl9BzAZp8HSAHGGmtPPMjz06k1EPk9REWD3VR6myRo1iN5B4Ja7W29G0PcxbEgWD0aR0Z8t075ch%2BLdktv2f%2BYWTl4qK53EqhLyJm1XogZLFArbKP8NiqXN%2FWxq4fUBwxjaKu2ftbD9yG1OpWVHxfpu0wJnek&X-Amz-Signature=fbb0772f469f30715513dd51024edde8808330f18eccf3de6084469fde6e1e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
