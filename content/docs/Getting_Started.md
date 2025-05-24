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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQOODWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDed73c%2F%2FQwlEMmJbfL1RM3d84uEYtYoo1FFrV5AbQhuAIgQyTi8IIBeRdODq6BffuEMc%2F3ko%2Bjt67435jG2AmFq9wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNpi7eCX3qKwctfGjCrcA%2Fb3qBaPlIyrOdOoieRkd6TBEENZwIn27mRuXg0ZtmAfBQ6FH1rYgXkxslewLmFzWw%2Bm%2BMlJzaD9Da%2F9qfjJrf7PmBhtDWZNx1EnB4DeQwG0%2B1GKra7jviXCPgset1iYEh36IvDeiRrFHuUNvwXSyP%2Bq%2BMgJuGHhONztexDO9NXCkjJSctj15uRwbpad9qyZv5QHO6o7viCV1fvfRvlGnGE1EZXcU2BWr41HNSipCJHiBzBacxzUz8OXV7%2Fcqd9AGmbGeQSZE1fo8cI5WPoIPsadW9IaSipfAFLRfkEmHT%2FWLKOzwIOjkYkE1qn%2FOgHkZ%2FHxkK%2BWwCI7SiW4SoA51ksrvlg8yCq%2FjvBTrBNR6fJfbrqYGH80mo97DnjXsduysZsv5gaAiZ8zCusWN48Guh4EWfDRujt5XvuLWS1eMIOBIyY4EWYeHBXrk9qKk6ufjQrCXAZAbal0dUkf8T9qXvMBIPUYhU7ORVBJbwHoiZ6QF2jHb3CTd2tWapSd0EBC1a07Y9c%2BusGu3lXcLuqqf%2Fe61FXA9VArkBKe2mXqiss4Nhy%2BsIDXpNsID3r4tWUguVQF%2FUw9k1WfASMRcrCZZ%2Fu66lohQgPOAbQTN22KYfUbV5HyJ3FNtMZh0RTDMJiAxsEGOqUBnlh19ykltBlSo9j%2F1G%2FCLSlNHVI%2BBqLI0C83D8CVuGUrSLH%2BrE7%2FS67%2FVgI8wo%2FPgED4eLRqc8j%2FTIS%2Fza8cS8MbnKFCu%2B%2Fc%2FwhsA0w6Kar9uTKPJ%2FH8EuTYMXW2HQMLxPCs1ue44Fm6fHqz%2FCzKQejJtvVbWuz%2ByjLsdxGY8idFfbGN7iYL1yupF9Cv9mNDr3BPUidDl4Qodv31YpBPQ7uhrNiI&X-Amz-Signature=62094cd1cb9aa22b39b6c219bc85e358926eb3fed470e8acbbcc6ee13908cd3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQOODWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDed73c%2F%2FQwlEMmJbfL1RM3d84uEYtYoo1FFrV5AbQhuAIgQyTi8IIBeRdODq6BffuEMc%2F3ko%2Bjt67435jG2AmFq9wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNpi7eCX3qKwctfGjCrcA%2Fb3qBaPlIyrOdOoieRkd6TBEENZwIn27mRuXg0ZtmAfBQ6FH1rYgXkxslewLmFzWw%2Bm%2BMlJzaD9Da%2F9qfjJrf7PmBhtDWZNx1EnB4DeQwG0%2B1GKra7jviXCPgset1iYEh36IvDeiRrFHuUNvwXSyP%2Bq%2BMgJuGHhONztexDO9NXCkjJSctj15uRwbpad9qyZv5QHO6o7viCV1fvfRvlGnGE1EZXcU2BWr41HNSipCJHiBzBacxzUz8OXV7%2Fcqd9AGmbGeQSZE1fo8cI5WPoIPsadW9IaSipfAFLRfkEmHT%2FWLKOzwIOjkYkE1qn%2FOgHkZ%2FHxkK%2BWwCI7SiW4SoA51ksrvlg8yCq%2FjvBTrBNR6fJfbrqYGH80mo97DnjXsduysZsv5gaAiZ8zCusWN48Guh4EWfDRujt5XvuLWS1eMIOBIyY4EWYeHBXrk9qKk6ufjQrCXAZAbal0dUkf8T9qXvMBIPUYhU7ORVBJbwHoiZ6QF2jHb3CTd2tWapSd0EBC1a07Y9c%2BusGu3lXcLuqqf%2Fe61FXA9VArkBKe2mXqiss4Nhy%2BsIDXpNsID3r4tWUguVQF%2FUw9k1WfASMRcrCZZ%2Fu66lohQgPOAbQTN22KYfUbV5HyJ3FNtMZh0RTDMJiAxsEGOqUBnlh19ykltBlSo9j%2F1G%2FCLSlNHVI%2BBqLI0C83D8CVuGUrSLH%2BrE7%2FS67%2FVgI8wo%2FPgED4eLRqc8j%2FTIS%2Fza8cS8MbnKFCu%2B%2Fc%2FwhsA0w6Kar9uTKPJ%2FH8EuTYMXW2HQMLxPCs1ue44Fm6fHqz%2FCzKQejJtvVbWuz%2ByjLsdxGY8idFfbGN7iYL1yupF9Cv9mNDr3BPUidDl4Qodv31YpBPQ7uhrNiI&X-Amz-Signature=26d89586ce87c04d6b34855b579b37b0e5dd158a9e488355863ca2c43c219fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQOODWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDed73c%2F%2FQwlEMmJbfL1RM3d84uEYtYoo1FFrV5AbQhuAIgQyTi8IIBeRdODq6BffuEMc%2F3ko%2Bjt67435jG2AmFq9wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNpi7eCX3qKwctfGjCrcA%2Fb3qBaPlIyrOdOoieRkd6TBEENZwIn27mRuXg0ZtmAfBQ6FH1rYgXkxslewLmFzWw%2Bm%2BMlJzaD9Da%2F9qfjJrf7PmBhtDWZNx1EnB4DeQwG0%2B1GKra7jviXCPgset1iYEh36IvDeiRrFHuUNvwXSyP%2Bq%2BMgJuGHhONztexDO9NXCkjJSctj15uRwbpad9qyZv5QHO6o7viCV1fvfRvlGnGE1EZXcU2BWr41HNSipCJHiBzBacxzUz8OXV7%2Fcqd9AGmbGeQSZE1fo8cI5WPoIPsadW9IaSipfAFLRfkEmHT%2FWLKOzwIOjkYkE1qn%2FOgHkZ%2FHxkK%2BWwCI7SiW4SoA51ksrvlg8yCq%2FjvBTrBNR6fJfbrqYGH80mo97DnjXsduysZsv5gaAiZ8zCusWN48Guh4EWfDRujt5XvuLWS1eMIOBIyY4EWYeHBXrk9qKk6ufjQrCXAZAbal0dUkf8T9qXvMBIPUYhU7ORVBJbwHoiZ6QF2jHb3CTd2tWapSd0EBC1a07Y9c%2BusGu3lXcLuqqf%2Fe61FXA9VArkBKe2mXqiss4Nhy%2BsIDXpNsID3r4tWUguVQF%2FUw9k1WfASMRcrCZZ%2Fu66lohQgPOAbQTN22KYfUbV5HyJ3FNtMZh0RTDMJiAxsEGOqUBnlh19ykltBlSo9j%2F1G%2FCLSlNHVI%2BBqLI0C83D8CVuGUrSLH%2BrE7%2FS67%2FVgI8wo%2FPgED4eLRqc8j%2FTIS%2Fza8cS8MbnKFCu%2B%2Fc%2FwhsA0w6Kar9uTKPJ%2FH8EuTYMXW2HQMLxPCs1ue44Fm6fHqz%2FCzKQejJtvVbWuz%2ByjLsdxGY8idFfbGN7iYL1yupF9Cv9mNDr3BPUidDl4Qodv31YpBPQ7uhrNiI&X-Amz-Signature=1cfe269ca2c951a204cf3a6a2b47d40d6cf7c4bb6a16ff38ca62cf004648491a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIRYVZ6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICAysp9Vj37HisGtQSYtYQhQzbBqb51j6f3MTd0ujTEYAiEA4bNJFp47XsaV8cfN7wSmKualPlV40zV5jYZG%2FQRaRuYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDD%2FKrd2%2FDR47pojOiCrcA3M7%2FerrEJAF0lPVcaWPxXnAt84HjGZKGQY%2Fi4RHWf4olUmXD0NrCI9Dbemgp7WlkcuEsm%2FZdEzde94dqs1nxrnNy3BGusMHwN2WeGZvihyK1NsHUCUZiJ9%2FyvitN%2Bbxr67KUPfm%2B3vAvAgZicc3nylKOUIezbAP%2BDGfhPCRLfBkrJT51DcurFGGLHRYX4AL9L3b0yCb1ncWWbmUmvny%2BQt88npHA4V%2BM6LSxv9RI3pFt7ZHoQJnMJg2Rz6FCAG%2Bn7RB4i1QwSCiHHB0y2ftmL18welCeq8LRe8phSODWtQihQZgsIhDWHfSD1qJ30eq1Ys7Uv9okRWMF3%2BHehTjAJ2MsmV3qh1g03quL5BdW8Umv64Ne%2FwgvPjB1wp26%2FGbdGbs3X0l%2Fv9ByhF99TTUF3ktEe5tsQv1UUACjOtIQRNK%2FaDH18ZmWg2mPVjhL77iVWAszdhzhdKin7ZmmaaqSLunOeMgOWz5c12cNEVNHrmlrAxUg4q7Bj%2BCeMWONAu6GjsEK%2BQK1Fwqcuxjj7%2FQ%2BLeZ4Khu7aYp59ZSKunzOj4tLHA5gwdLOsm3ehrEIMNFUWyTUEyuYztzEgo1F6%2FsOhIbfI8dDsG2Lv8sbK6SGMVkz11ou83YHFPO%2F78QMOmAxsEGOqUBf1CJtTpERwyWJVoJVnVhuV%2FFAZ%2BWN%2BArwr8FtiBFh8G5LBh6GhFL1KUfrMAsmpeqawKBn4dsGQcCdF2pzQET0W%2FwQ9%2BJRD9uJz1ABoLtMelyJ%2Bf0k3qEpq%2FA2y6WjsaObZvwi0WFs%2B6kzhLw0YOkIXub21nqbyupwEjuWSAsfE5kciJJWUf2mDY4pu7hAdUHoK2BKHqCji7SN2lQ4tC4tE3KLe%2F4&X-Amz-Signature=12e7c5589834c265971004e7dd224df8301dda4472c912d5bf32f99855e8c050&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2E5XWVU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICSHLzDBa1npjljOm4%2FAn6dJ3S4Qj7Vtu7IwUxRM%2BcS%2BAiBac7%2BO6r5rfPM9YvE1yF2kBQF%2BT0RNP45TEJHHcAjhqSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJZ6QHjFxt478YIw3KtwD6gG6%2F5eaGOMx7eX%2FnJtGEvtBPV5nYSaJ5MY%2FDQPosrBWHQajWfZivmwXmL%2BTOihyFW8qQ6JJw413QeoM0cmSrR%2BxJxTshez8%2FE3Vwxpnya18qOEu84%2F865ffwVGNHtxmcGWjEt6sT%2BjP9xDIkBNgP2cYZAmyHX%2FeD6asxu1pd9rXLi%2BXm4utuZR50ghwD6CUZ9q%2BTEqEsMdplZVVyDZdKrbELXd1zuIL%2B5wWjSHbmf3DgCdeWC7TNijU%2FmrqRn2BHYFTkEi0JreC7CIMtIv1oIBQ4ZLUwgWfion4EO5yu4EswRlhYe5S6%2BlOBYN4Y5DL%2BEED47qKQ%2FQG0ea3iLRwBZ78CPhAOeqgaNAHCGy945rWA4%2BoHKwJAHwrjc%2Bmle%2BBopuOWzjKfY%2B6GXeFOEfED4wBXUXUGhZBrCKz5jg0zJRhu7sPi%2BcEh0nygeA5aKCwgAZLTScVV5PcaxbqRC0w60cpTwev1FmRCh%2FKVQtSoFRVg4dlk2tN4IfLXvaTOP%2B2v%2BMwrVfl%2FpMRRAf5TWgWQPil7X8LZLH2YtlbIGDEgZ%2FXnrYFvAEt9wSOwWESmSN0A0hF0Dw5ealCjdCYMltv1J9FJwdcrGIklm0t%2FopcKEnzM%2FCOksmqR0%2BuQ94wp5PGwQY6pgGVcZJYaDFETFmOzOQ72fFmhoBEyxkye3%2FgS8%2B0GlRDPg1XOUV5GUzF467kJTRKWZg7%2FGKb20aVqyLdfIEH0orRVsZ8HFuOw7xSNwwlejdYtlxLubyTfTqpC1mST9fijo4nXFWOJNaIQb5Tchd8vMj3Lg88NNtcaB3ZCQN1hT%2BH0hzhrTFMNk19aQgNaeVRUX2r%2FzOlDXwTSpioHwRdwQBT37p803kp&X-Amz-Signature=513b66af445b07c83483991150c66b9c114b3df3d2f211f9eefb0d8873b5663f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQOODWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDed73c%2F%2FQwlEMmJbfL1RM3d84uEYtYoo1FFrV5AbQhuAIgQyTi8IIBeRdODq6BffuEMc%2F3ko%2Bjt67435jG2AmFq9wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNpi7eCX3qKwctfGjCrcA%2Fb3qBaPlIyrOdOoieRkd6TBEENZwIn27mRuXg0ZtmAfBQ6FH1rYgXkxslewLmFzWw%2Bm%2BMlJzaD9Da%2F9qfjJrf7PmBhtDWZNx1EnB4DeQwG0%2B1GKra7jviXCPgset1iYEh36IvDeiRrFHuUNvwXSyP%2Bq%2BMgJuGHhONztexDO9NXCkjJSctj15uRwbpad9qyZv5QHO6o7viCV1fvfRvlGnGE1EZXcU2BWr41HNSipCJHiBzBacxzUz8OXV7%2Fcqd9AGmbGeQSZE1fo8cI5WPoIPsadW9IaSipfAFLRfkEmHT%2FWLKOzwIOjkYkE1qn%2FOgHkZ%2FHxkK%2BWwCI7SiW4SoA51ksrvlg8yCq%2FjvBTrBNR6fJfbrqYGH80mo97DnjXsduysZsv5gaAiZ8zCusWN48Guh4EWfDRujt5XvuLWS1eMIOBIyY4EWYeHBXrk9qKk6ufjQrCXAZAbal0dUkf8T9qXvMBIPUYhU7ORVBJbwHoiZ6QF2jHb3CTd2tWapSd0EBC1a07Y9c%2BusGu3lXcLuqqf%2Fe61FXA9VArkBKe2mXqiss4Nhy%2BsIDXpNsID3r4tWUguVQF%2FUw9k1WfASMRcrCZZ%2Fu66lohQgPOAbQTN22KYfUbV5HyJ3FNtMZh0RTDMJiAxsEGOqUBnlh19ykltBlSo9j%2F1G%2FCLSlNHVI%2BBqLI0C83D8CVuGUrSLH%2BrE7%2FS67%2FVgI8wo%2FPgED4eLRqc8j%2FTIS%2Fza8cS8MbnKFCu%2B%2Fc%2FwhsA0w6Kar9uTKPJ%2FH8EuTYMXW2HQMLxPCs1ue44Fm6fHqz%2FCzKQejJtvVbWuz%2ByjLsdxGY8idFfbGN7iYL1yupF9Cv9mNDr3BPUidDl4Qodv31YpBPQ7uhrNiI&X-Amz-Signature=c7e193cbf9f56a4bcdff117054e4bd46ca49c18baf09e87c725f29b861492def&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
