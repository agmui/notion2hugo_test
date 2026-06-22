---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J32W32A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDz46xeLeHsxNcr4oxp0tYJpUdXfsjz7xYALHmrBwdH2AiAbrUdtOlIMYvfDwaIN29Mr%2FKRzybr1q1guERkIVmL9tCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH83H6gIQOi0Uo5qdKtwDYUr7LwWkp8AIpPne1NjC1w26KSZKwfFKFE2RLoLu0eJH3nrl01JTafjKA42JrRMLRZFO8%2BhS%2FpIP%2F8KOhbZd6ZJ1U7C9dAI5nwNXUtSvTP%2FXCKemUwCmHr%2FkFf01mDxXj5rxZhh%2B%2B7VeOGITWCL%2Bwi%2FTuNueB2YmA3CCpG08ujjjV8fdID2e3PTgr%2FhziY4T6dsVnkGh7qTLj0B%2B1uFEPmDcu%2F9ifk6Xe6Tl3YpnSeQTn4ams0EQafe%2Bsr%2FIWjrsrVxwiGl%2BF2kROFkHyoqbNoKwXJ7psnp84kYGi8kLr6mT1UgK3Ub9zDi8L%2BDt1n6u7HaTcbrQPF0G6uglEv2xRkHFbYfxV%2BITDaf7fV68Rfp7aQZEfIOKA3CIw4I7yYAU5XuWhNdGU4Y%2BptkXiFL9s6z33UXYR2H%2ByBswR8lBxacQ1G3gmOvQVHGjYv%2F1V8scO42gE8IVQ1FhkkfmWI6UlSH4fi3KZpkpgW9tIGIM%2B90OSm4Fl8DzZXk9Yk%2BOiB%2FCqmSrE9ny3SXcwPOjHsyFW22lYfEuSqIVypkSOaZ%2FjS8qll3tB6BK%2Fhp3myRZjPJQVq%2B89e3sQzjytyhsksYTK%2FLgu%2B0poE8ZdpR3w1f8IejYkAuuNdeEZV0Rddgwzdbi0QY6pgGuW4DMrJn8nuKOfx%2FLEnOTdEPsBaKu7%2FsF939iUHYJiFPudRO8UXE45sK%2BoItpPDiBZ0%2B%2BEh2vHvZJmrIqYEPQ%2FKfFga1ObkTlVe0XA4gy6ZHakOrjopONktD4WeIUWHNs1%2Bi21GBZYOz7bOA7gugEsP6l8XEPIFGxXdTodZWkQFByozzM%2FwmjM5%2BeHqE%2FufV55KLdPo8Jn%2FzJlD76aYWu8iRzxNDB&X-Amz-Signature=7ad9d47d5de77ea1c9292c2491156a8b8c69610cddfed90b7ba8b4d80c0e427f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J32W32A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDz46xeLeHsxNcr4oxp0tYJpUdXfsjz7xYALHmrBwdH2AiAbrUdtOlIMYvfDwaIN29Mr%2FKRzybr1q1guERkIVmL9tCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH83H6gIQOi0Uo5qdKtwDYUr7LwWkp8AIpPne1NjC1w26KSZKwfFKFE2RLoLu0eJH3nrl01JTafjKA42JrRMLRZFO8%2BhS%2FpIP%2F8KOhbZd6ZJ1U7C9dAI5nwNXUtSvTP%2FXCKemUwCmHr%2FkFf01mDxXj5rxZhh%2B%2B7VeOGITWCL%2Bwi%2FTuNueB2YmA3CCpG08ujjjV8fdID2e3PTgr%2FhziY4T6dsVnkGh7qTLj0B%2B1uFEPmDcu%2F9ifk6Xe6Tl3YpnSeQTn4ams0EQafe%2Bsr%2FIWjrsrVxwiGl%2BF2kROFkHyoqbNoKwXJ7psnp84kYGi8kLr6mT1UgK3Ub9zDi8L%2BDt1n6u7HaTcbrQPF0G6uglEv2xRkHFbYfxV%2BITDaf7fV68Rfp7aQZEfIOKA3CIw4I7yYAU5XuWhNdGU4Y%2BptkXiFL9s6z33UXYR2H%2ByBswR8lBxacQ1G3gmOvQVHGjYv%2F1V8scO42gE8IVQ1FhkkfmWI6UlSH4fi3KZpkpgW9tIGIM%2B90OSm4Fl8DzZXk9Yk%2BOiB%2FCqmSrE9ny3SXcwPOjHsyFW22lYfEuSqIVypkSOaZ%2FjS8qll3tB6BK%2Fhp3myRZjPJQVq%2B89e3sQzjytyhsksYTK%2FLgu%2B0poE8ZdpR3w1f8IejYkAuuNdeEZV0Rddgwzdbi0QY6pgGuW4DMrJn8nuKOfx%2FLEnOTdEPsBaKu7%2FsF939iUHYJiFPudRO8UXE45sK%2BoItpPDiBZ0%2B%2BEh2vHvZJmrIqYEPQ%2FKfFga1ObkTlVe0XA4gy6ZHakOrjopONktD4WeIUWHNs1%2Bi21GBZYOz7bOA7gugEsP6l8XEPIFGxXdTodZWkQFByozzM%2FwmjM5%2BeHqE%2FufV55KLdPo8Jn%2FzJlD76aYWu8iRzxNDB&X-Amz-Signature=f68bc0e3352d1466f12c2ff7b66c235b9b16e3c148916cb0619660f4f597c0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J32W32A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDz46xeLeHsxNcr4oxp0tYJpUdXfsjz7xYALHmrBwdH2AiAbrUdtOlIMYvfDwaIN29Mr%2FKRzybr1q1guERkIVmL9tCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH83H6gIQOi0Uo5qdKtwDYUr7LwWkp8AIpPne1NjC1w26KSZKwfFKFE2RLoLu0eJH3nrl01JTafjKA42JrRMLRZFO8%2BhS%2FpIP%2F8KOhbZd6ZJ1U7C9dAI5nwNXUtSvTP%2FXCKemUwCmHr%2FkFf01mDxXj5rxZhh%2B%2B7VeOGITWCL%2Bwi%2FTuNueB2YmA3CCpG08ujjjV8fdID2e3PTgr%2FhziY4T6dsVnkGh7qTLj0B%2B1uFEPmDcu%2F9ifk6Xe6Tl3YpnSeQTn4ams0EQafe%2Bsr%2FIWjrsrVxwiGl%2BF2kROFkHyoqbNoKwXJ7psnp84kYGi8kLr6mT1UgK3Ub9zDi8L%2BDt1n6u7HaTcbrQPF0G6uglEv2xRkHFbYfxV%2BITDaf7fV68Rfp7aQZEfIOKA3CIw4I7yYAU5XuWhNdGU4Y%2BptkXiFL9s6z33UXYR2H%2ByBswR8lBxacQ1G3gmOvQVHGjYv%2F1V8scO42gE8IVQ1FhkkfmWI6UlSH4fi3KZpkpgW9tIGIM%2B90OSm4Fl8DzZXk9Yk%2BOiB%2FCqmSrE9ny3SXcwPOjHsyFW22lYfEuSqIVypkSOaZ%2FjS8qll3tB6BK%2Fhp3myRZjPJQVq%2B89e3sQzjytyhsksYTK%2FLgu%2B0poE8ZdpR3w1f8IejYkAuuNdeEZV0Rddgwzdbi0QY6pgGuW4DMrJn8nuKOfx%2FLEnOTdEPsBaKu7%2FsF939iUHYJiFPudRO8UXE45sK%2BoItpPDiBZ0%2B%2BEh2vHvZJmrIqYEPQ%2FKfFga1ObkTlVe0XA4gy6ZHakOrjopONktD4WeIUWHNs1%2Bi21GBZYOz7bOA7gugEsP6l8XEPIFGxXdTodZWkQFByozzM%2FwmjM5%2BeHqE%2FufV55KLdPo8Jn%2FzJlD76aYWu8iRzxNDB&X-Amz-Signature=61dc94b73a865495e9fc9319141d5c85c9ac225c7c34895099facfbcddb15491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ3N7BR%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICtAgIEc%2F1hRVVxo2EyuU2ekEZ%2Bah%2FJekKZlla3JVveEAiEAtn1UuyYdT2e%2Fy6MDvr0DaswbezClohlRFmWNCCc%2FdjQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqosclHUCXdtBkh9SrcA9u4tSaPCP10VcDoMB5Dq0oKtXqae%2F%2BzGqu3snpT75an%2BKsgp8EHPMNUU7IXx2t1UAXN81C9MZFLw%2BlgdZLLFLhEqSIQ0RrMhnsKvwppSncHqAg42G4CYrgi7FWtiUfLg2FZqYJH5ReN5QiVEXdbDf5kRPx5Lo%2BjoqIFDN5ct3uNK8HnX9vO%2Ba7evQFAD6jxALkCHqQcUkvzmNtZ95Y8QaQKVenJesOP6tE5g0qbIaAbXLfJ%2BjCOzfgk0NE2VVjvfo73oF7YkUUG6oMcN0I3mmCIL%2BJR53IP%2FfvHGidT5ndwkOfwBKqysE1Acdms%2F6Tgb2FGSgaiHEhHuSfrFkTWdS4AVJFUwaLNWLfEz5hmM1EjHzxrnbpVhsMnsNPGl%2BMLrDGZuzw9vN24ehAoSsbXjiUBzJfPlD9j17b2M8ugTh%2Fvmj13EvlrthMoSvQP%2B9znpRP%2Bq5bUfwg%2Bo%2FMTaNC%2BA8NfHA1dstYikthi3j%2FITJUzfcHqV4ycuiidioZ3SHathHFSTMVPmZXHjtjHeOfMTAkzrIXED19xF6Zvjg3wdYR1FJdujFQpxW%2FPvBwGynhkGwsU3LLj5LvXUihJbLOhVVFHPkb%2FY3K5tMoGHwGe5ruLOhyrPp1N0C5uaOszMKbZ4tEGOqUBYT5%2FZFN9h2mrh7xsiB7suodvS0xV%2FvuCEdKkG%2Ba%2FwuhWs%2BlsDQOK33t87ft%2FEsU7LwnShrPch77vMLuDmE7UxaYZx1dYGKY0u3LklaCXLY7uEJqWgTCEzrhsQP2aANEz8oazM4bUT8bsNmAvGla9s9T%2BtACc9PZKbq8%2BemQ%2FD%2BIaOe4%2FaXpMffF8g7so8lx3%2FRYqrro5enOdTfbZCKhh9BidYdeB&X-Amz-Signature=5ef5da30e9ce549de98208386ae31936fe82f62ad5339a7c08a4e2e5a6f9eaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWX5NPK%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICwPzRN4%2FyyUFIvQNCFwEc4cNPZUb4dIAYi2swoOxmMsAiEA2OBXksbxakqCqN8%2BWN2QuNgXBdawkbaI86WwW3zxkzoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh1CgIKlidupNZilircAyzSk28xMfeGmiVuidOeE%2BpOj3dnKDb%2B059hv0v%2BWMcfpH0B27byl8QTsFmh5FTKyF1tOvLVG7r8BzVZGmGd8zDU%2BYKcafCz9MAvwOFtZ6znN%2FUr0L4EmZwQqB92dWpyPFyfRYSjn4LihU1pdVhvg66XORFJgeN6YBIUp0miJ%2F1VQCdpwCqYnXjssUsS9Qe2ZlZMN0898BmQEVHAx72WJKAJ77L4bDdGycYgWWeaonIRlo7axonol7WHRsWSLTWcumE6dialXD8e3dwA3nL%2FwvJvWtZdkwvAEoO%2FEaKWSwYEWO1QCKUbvBbM0COlqmnscppLvkpq0qQYDU2HevqKfpDIckkFYGkEQaTFt023rA91tnAFOhCLVmbMbBTYudE2CNOkN8uctFYwddG%2FQw63tN9qHrcuwEkBs94aagBOn%2BYtTFAnYqSyC%2FOaqyCIrBD7McsOqSfB5q9ja7PGTY%2BKzu3igDwt9dN%2FYtXLgAWlRy7tMPorWZ2MjYODoAkv7b%2F7gdvKcEGB98mZQd6r9yIXg%2FDItuzc4kfdGwpdFpmKTyPhDIINgvy3waaGHP701x6caJxsn9MzCYG2Lo7L4X9i5AENszLz4H%2BXkvKSwdZ6mBYej3CE%2FsXLV04JRjqvMOzX4tEGOqUBENI3%2FumW9MI%2B8SF3LdAOAt%2B2tm5AyhmNKlsV51TAeKhhn1G4ZmpcYlTfK1GBECyW33rVdYyA8mXUnwwutI5wikH8dQjCN%2FbzeiRnGGvhlbZg6WXprhMAc5Um4nqt%2BXn9RlmsqqW8LB6Zim840QI9KiebnRmQYA2KZn7%2BqaxggVfEJbj1Pl48H%2BlAIadzAZGoq%2Bg%2Bi%2Fj%2B6jf44HnBiyiTxOXq4uFZ&X-Amz-Signature=4c58588f7e1e4e6dc2bebf38adc0dca500be131e33f72edad28027b2431da319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J32W32A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDz46xeLeHsxNcr4oxp0tYJpUdXfsjz7xYALHmrBwdH2AiAbrUdtOlIMYvfDwaIN29Mr%2FKRzybr1q1guERkIVmL9tCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH83H6gIQOi0Uo5qdKtwDYUr7LwWkp8AIpPne1NjC1w26KSZKwfFKFE2RLoLu0eJH3nrl01JTafjKA42JrRMLRZFO8%2BhS%2FpIP%2F8KOhbZd6ZJ1U7C9dAI5nwNXUtSvTP%2FXCKemUwCmHr%2FkFf01mDxXj5rxZhh%2B%2B7VeOGITWCL%2Bwi%2FTuNueB2YmA3CCpG08ujjjV8fdID2e3PTgr%2FhziY4T6dsVnkGh7qTLj0B%2B1uFEPmDcu%2F9ifk6Xe6Tl3YpnSeQTn4ams0EQafe%2Bsr%2FIWjrsrVxwiGl%2BF2kROFkHyoqbNoKwXJ7psnp84kYGi8kLr6mT1UgK3Ub9zDi8L%2BDt1n6u7HaTcbrQPF0G6uglEv2xRkHFbYfxV%2BITDaf7fV68Rfp7aQZEfIOKA3CIw4I7yYAU5XuWhNdGU4Y%2BptkXiFL9s6z33UXYR2H%2ByBswR8lBxacQ1G3gmOvQVHGjYv%2F1V8scO42gE8IVQ1FhkkfmWI6UlSH4fi3KZpkpgW9tIGIM%2B90OSm4Fl8DzZXk9Yk%2BOiB%2FCqmSrE9ny3SXcwPOjHsyFW22lYfEuSqIVypkSOaZ%2FjS8qll3tB6BK%2Fhp3myRZjPJQVq%2B89e3sQzjytyhsksYTK%2FLgu%2B0poE8ZdpR3w1f8IejYkAuuNdeEZV0Rddgwzdbi0QY6pgGuW4DMrJn8nuKOfx%2FLEnOTdEPsBaKu7%2FsF939iUHYJiFPudRO8UXE45sK%2BoItpPDiBZ0%2B%2BEh2vHvZJmrIqYEPQ%2FKfFga1ObkTlVe0XA4gy6ZHakOrjopONktD4WeIUWHNs1%2Bi21GBZYOz7bOA7gugEsP6l8XEPIFGxXdTodZWkQFByozzM%2FwmjM5%2BeHqE%2FufV55KLdPo8Jn%2FzJlD76aYWu8iRzxNDB&X-Amz-Signature=9f0a1a27b95331dccfde48ac4ee793631879612f297ebd5f7ea9a16ea7a7eeac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
