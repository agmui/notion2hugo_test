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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWNHLK6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhY8fa2PTSdXxCs6%2B%2BrhrnjSi0h%2FTSfjFRclULzIVebwIgUIgA17st8OENUwT0T%2B5265JwR8Dhu%2BN8blrLhfhp6YgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGACStu1v%2BmL8ua2ircA%2FcqYmmq7D5V1xJchdb%2FOfn62muFBmPUrHnDFvCxOgZyzEn9Zaq1adtCOyEvSw0I3m9xHkv8GUrrTQhzyVb6GV%2FHm%2FRZUJuYH4svhFwJZVUrO9dQb5pX5wIyVITg6jTKtH14wGYzTtNBC5LHzK8uvDh8KF1vQej49vOLb9THo%2Fl5rqLDPGp0cLs1lq5cpLUhgeiLPHwDjp1YLAzRwvwf1Vx5jxA%2FXKk4MaJt8cv8tApXBvqC5U68P3KBQrteqb7y8BVZCLrTAvQfsNz9KkcPkF3i4p2kTyc4YQCBh35G6yIbOoYR764NYaYuUwt%2Bca3%2B0r%2FC5k8AQ2IYLstktiLepcs8zpdl295kzyOM0tKB6QuyTEUkTzD9X0WdD8ErLyAu6JM%2BxeFKMnyNS5NMSLgJb8yyN%2F%2B0y%2FRkFJOQF6gM%2FiM8Hofi0OHNjUHG2B6%2BZJMuaqlBvBYJ8aSup0%2Bc7Kco0V7vW36JN9XQKVOdubhQ%2BPkouDFJryDX%2F9inpbl6%2BgMs8EBn7K4F5uICimaTSXP%2B2C%2Bmu47gWk8XkPDzD68JtPsmMGJgxx5F%2F0YnF1Xj0wE1hmWFT6NLVJ3Szlht%2BJtkzHPACxLRUkXnfZu2aZz0zHa5xz3VV7dJWC4DpgFxMIntqcEGOqUBrPBLE3Ozj5LpiRdyyF7NGPzBQWU23g7rnp4TuGNo%2B%2F%2BUNF44lP%2BDfF4YZYDJGlsmgTCHIq9Dy2YYIwyEi%2Bk%2BUXorJjayBuIZR4SfGJLutQeX69Jb1K%2BZN3%2FRegtZIkdhuxluqgXA9WOtHCaOAqkkNQf4TZXREXYeb0wI6nuIf3w1Yw%2Buw9pwGl0EgDMX8tpDoPLH9VKlnqAYoIhVaotiPRlKc22a&X-Amz-Signature=551622e2ebef8d98b55596759c6aac98f028b59050fb3193346defb1ada7c912&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWNHLK6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhY8fa2PTSdXxCs6%2B%2BrhrnjSi0h%2FTSfjFRclULzIVebwIgUIgA17st8OENUwT0T%2B5265JwR8Dhu%2BN8blrLhfhp6YgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGACStu1v%2BmL8ua2ircA%2FcqYmmq7D5V1xJchdb%2FOfn62muFBmPUrHnDFvCxOgZyzEn9Zaq1adtCOyEvSw0I3m9xHkv8GUrrTQhzyVb6GV%2FHm%2FRZUJuYH4svhFwJZVUrO9dQb5pX5wIyVITg6jTKtH14wGYzTtNBC5LHzK8uvDh8KF1vQej49vOLb9THo%2Fl5rqLDPGp0cLs1lq5cpLUhgeiLPHwDjp1YLAzRwvwf1Vx5jxA%2FXKk4MaJt8cv8tApXBvqC5U68P3KBQrteqb7y8BVZCLrTAvQfsNz9KkcPkF3i4p2kTyc4YQCBh35G6yIbOoYR764NYaYuUwt%2Bca3%2B0r%2FC5k8AQ2IYLstktiLepcs8zpdl295kzyOM0tKB6QuyTEUkTzD9X0WdD8ErLyAu6JM%2BxeFKMnyNS5NMSLgJb8yyN%2F%2B0y%2FRkFJOQF6gM%2FiM8Hofi0OHNjUHG2B6%2BZJMuaqlBvBYJ8aSup0%2Bc7Kco0V7vW36JN9XQKVOdubhQ%2BPkouDFJryDX%2F9inpbl6%2BgMs8EBn7K4F5uICimaTSXP%2B2C%2Bmu47gWk8XkPDzD68JtPsmMGJgxx5F%2F0YnF1Xj0wE1hmWFT6NLVJ3Szlht%2BJtkzHPACxLRUkXnfZu2aZz0zHa5xz3VV7dJWC4DpgFxMIntqcEGOqUBrPBLE3Ozj5LpiRdyyF7NGPzBQWU23g7rnp4TuGNo%2B%2F%2BUNF44lP%2BDfF4YZYDJGlsmgTCHIq9Dy2YYIwyEi%2Bk%2BUXorJjayBuIZR4SfGJLutQeX69Jb1K%2BZN3%2FRegtZIkdhuxluqgXA9WOtHCaOAqkkNQf4TZXREXYeb0wI6nuIf3w1Yw%2Buw9pwGl0EgDMX8tpDoPLH9VKlnqAYoIhVaotiPRlKc22a&X-Amz-Signature=78db08c694ae84f462fbdaa007a5f755ebe57c9e9d5c23eba38bc545276b0c71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWNHLK6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhY8fa2PTSdXxCs6%2B%2BrhrnjSi0h%2FTSfjFRclULzIVebwIgUIgA17st8OENUwT0T%2B5265JwR8Dhu%2BN8blrLhfhp6YgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGACStu1v%2BmL8ua2ircA%2FcqYmmq7D5V1xJchdb%2FOfn62muFBmPUrHnDFvCxOgZyzEn9Zaq1adtCOyEvSw0I3m9xHkv8GUrrTQhzyVb6GV%2FHm%2FRZUJuYH4svhFwJZVUrO9dQb5pX5wIyVITg6jTKtH14wGYzTtNBC5LHzK8uvDh8KF1vQej49vOLb9THo%2Fl5rqLDPGp0cLs1lq5cpLUhgeiLPHwDjp1YLAzRwvwf1Vx5jxA%2FXKk4MaJt8cv8tApXBvqC5U68P3KBQrteqb7y8BVZCLrTAvQfsNz9KkcPkF3i4p2kTyc4YQCBh35G6yIbOoYR764NYaYuUwt%2Bca3%2B0r%2FC5k8AQ2IYLstktiLepcs8zpdl295kzyOM0tKB6QuyTEUkTzD9X0WdD8ErLyAu6JM%2BxeFKMnyNS5NMSLgJb8yyN%2F%2B0y%2FRkFJOQF6gM%2FiM8Hofi0OHNjUHG2B6%2BZJMuaqlBvBYJ8aSup0%2Bc7Kco0V7vW36JN9XQKVOdubhQ%2BPkouDFJryDX%2F9inpbl6%2BgMs8EBn7K4F5uICimaTSXP%2B2C%2Bmu47gWk8XkPDzD68JtPsmMGJgxx5F%2F0YnF1Xj0wE1hmWFT6NLVJ3Szlht%2BJtkzHPACxLRUkXnfZu2aZz0zHa5xz3VV7dJWC4DpgFxMIntqcEGOqUBrPBLE3Ozj5LpiRdyyF7NGPzBQWU23g7rnp4TuGNo%2B%2F%2BUNF44lP%2BDfF4YZYDJGlsmgTCHIq9Dy2YYIwyEi%2Bk%2BUXorJjayBuIZR4SfGJLutQeX69Jb1K%2BZN3%2FRegtZIkdhuxluqgXA9WOtHCaOAqkkNQf4TZXREXYeb0wI6nuIf3w1Yw%2Buw9pwGl0EgDMX8tpDoPLH9VKlnqAYoIhVaotiPRlKc22a&X-Amz-Signature=0f37c86d15b4762835e89f516aa7606677bf466a1f009b266bb10baf18f261cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOTPCGHX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiavWG5qK8EGC0NF1bqd8mrEiNXwJlliJIL3d1oaOJ2AiEA%2BIpWBXRq3UEHPec1qm4ZpUdiqmXEcNuelqjaKdbDHbgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUC3L4D7ZGzCCF9zyrcA6uZ8wPX2TILS%2BtB4J0Fs9Fi%2BbypGjIM0YDbq3xJNsKoRYy4rQ5hJWlUPpYXzbJtCd%2BsvMQ%2FvRpHf6ClAWL%2F7sbBnvJ9YqfUViJxtYigVKim9abiUomFq5CrVam%2Fz5nrgldiB0AMoQal2C5LkT2UD80c%2FEP6tJ%2Fhm%2FD3Coxo2KVILeyEKZ7Sjueh9oKLrsftiL1U2gdEoLpQtcBerqHfkUfHhhw3ZGt5vBj3eLtV9%2Br7n%2BPv9EPJAsdX862741JT3IGUruxDJeRq9J7g1ev1EnBreM5YSiCFPeTarNxD5W9cysbD6QkeCHZHTsA8ep1JP75Ys%2BSvIWHBabKh%2BjNcMLERVNUGUuNVt1%2Fq2DhlDR95I0P3nWbUt72h37MSnKArt7gnqqTbnc8zz3IsPDHpdLpNVxij%2Fh%2Bdmufmb6k5yu46jq9LO%2FaizwjCchiwOOMdNw7jte4TvZ8bHVM4K0rfOrwPVlUk7gDucUGrsWxlNhKNRWMam0jn%2FD2EI6diT2DHSW1rZyx1H%2Bu0nXgUsj1f8L91SpEgWJkK%2FjK18TeahA6MQXGKP0Cl94Q%2FacosrwATvJJTP1zn4bjIeDVqJCR0fiW95HDA45cNoqglYTmcGL3XwxxJEpN0ebyLiANtMK%2FrqcEGOqUBrhi2ZlIFa34PoRSJJHymFyCoJM%2Bmf7bHE8MFG53Vp1Gkku%2FK1%2BeHJg3tkDhbgcSnyEkgRa44OaQQAdkX1Ntep3lwlWFO4rZKVCTdbqmvbvKV%2FLZ%2F8%2BN9EguCAr8QEobDVBUBEm3foiyQ1PJN96eKtNSIyo%2FM9Fqf6YRO1DjTSaHFwxPgaAQjSTPlW0%2FGbZlOdjyIQvq7RaLnVLmEcoHolBTkUhdw&X-Amz-Signature=ac1af3f4c2573dca5aa0a048d7e59fa58797468749695dca254b4e4fb1bb5330&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPSESZU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8gSHvAB82MljqyMMhAZlCznbmAmxXoS3ZbAGZItHyAiEAyWr%2BrIQiD8t%2BlZCqsFNsELRyMz54j93OhbHvWjQltnMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BjDAHB5XSZSUOx4ircA6v%2BCIEK0rFtxcjOqyM3Hmqx66p%2FquZPbB21mYQKAg55o6mudsYKDW4i8q7rhdWORvur4SHBuAHper7DXePXzyo%2BEuPksAEEZz4UJO3sw7rOnnRQ9iHrecxdT6aycSoIw1xalCZo%2FS9Y4bMzfjwegJ0burmAro95mxp71CBgM4l0PGGtRnz34L%2ByeEv90rjZ43DKpbFJE6cZm%2BwbkDmxlXUd3b5d%2FUcxJK2IJODq3Jcp0douR9xG0Ydz4NFYCbOrjWZbSeRBLt6X5fV9DcsFbpqWP2bi2HmoHfoAjlKtKcaUtV%2BybVkc9a307MA61e8HV6naNgVRGPT4ejJRxhVhqqUbDKZCl0K362dOz443xJRkEy%2Fb21Aq%2BcoI4mNn2SUJ4bmT5Rd0dOmlrQewohuseLdKgYMWbp5nL%2BUPSeLLs13bgqBAMjKrZj6pLVz8eUn0TBdkhgWRBgiBPa12RtW76mpY0HNqLzB%2FScFwICyT%2BL%2F3FvswrAfCgN5xXYYr9Medm93sxSNEvfcIbRtkV6QxPaOXi%2FzvS9Ynwt0AewC%2FX3oN4iIxDmyE9OD44BhDmiWoAMCEd5cBKGJ0KLBIK%2BdrBYhOvpWYAcXgBU2g%2FrvddFjPcVAS6M8%2BKQCb2P6uMI34qcEGOqUBW%2F6JLuGg2drLC0mHzh8dAOmqCMa4O%2BYngnCDR0JXJEdGSYgzZ1yTX3mq6ptby5jtOw%2B8MqjqZT2pl2FYbDC79%2Fok4uEthjo1ZjwZWgUpxJc6OaNDwv%2FYNpEqadfDrHgsQxWCB4sD7cMBKFJFRapJ6Gfw0eYYTkDNiekbyRrrqDN96fAD2l3XQx9OEWyx%2BBOt0S%2BakIL0u%2FYsYhMcFycARk2eOH8I&X-Amz-Signature=47e42b887dfa7f037f4fd5ae46c378466f3402a85302523d580fed7e067aa44c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWNHLK6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhY8fa2PTSdXxCs6%2B%2BrhrnjSi0h%2FTSfjFRclULzIVebwIgUIgA17st8OENUwT0T%2B5265JwR8Dhu%2BN8blrLhfhp6YgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGACStu1v%2BmL8ua2ircA%2FcqYmmq7D5V1xJchdb%2FOfn62muFBmPUrHnDFvCxOgZyzEn9Zaq1adtCOyEvSw0I3m9xHkv8GUrrTQhzyVb6GV%2FHm%2FRZUJuYH4svhFwJZVUrO9dQb5pX5wIyVITg6jTKtH14wGYzTtNBC5LHzK8uvDh8KF1vQej49vOLb9THo%2Fl5rqLDPGp0cLs1lq5cpLUhgeiLPHwDjp1YLAzRwvwf1Vx5jxA%2FXKk4MaJt8cv8tApXBvqC5U68P3KBQrteqb7y8BVZCLrTAvQfsNz9KkcPkF3i4p2kTyc4YQCBh35G6yIbOoYR764NYaYuUwt%2Bca3%2B0r%2FC5k8AQ2IYLstktiLepcs8zpdl295kzyOM0tKB6QuyTEUkTzD9X0WdD8ErLyAu6JM%2BxeFKMnyNS5NMSLgJb8yyN%2F%2B0y%2FRkFJOQF6gM%2FiM8Hofi0OHNjUHG2B6%2BZJMuaqlBvBYJ8aSup0%2Bc7Kco0V7vW36JN9XQKVOdubhQ%2BPkouDFJryDX%2F9inpbl6%2BgMs8EBn7K4F5uICimaTSXP%2B2C%2Bmu47gWk8XkPDzD68JtPsmMGJgxx5F%2F0YnF1Xj0wE1hmWFT6NLVJ3Szlht%2BJtkzHPACxLRUkXnfZu2aZz0zHa5xz3VV7dJWC4DpgFxMIntqcEGOqUBrPBLE3Ozj5LpiRdyyF7NGPzBQWU23g7rnp4TuGNo%2B%2F%2BUNF44lP%2BDfF4YZYDJGlsmgTCHIq9Dy2YYIwyEi%2Bk%2BUXorJjayBuIZR4SfGJLutQeX69Jb1K%2BZN3%2FRegtZIkdhuxluqgXA9WOtHCaOAqkkNQf4TZXREXYeb0wI6nuIf3w1Yw%2Buw9pwGl0EgDMX8tpDoPLH9VKlnqAYoIhVaotiPRlKc22a&X-Amz-Signature=6a3faf571dd6fd03433bcb5561670d0cc103fa171122f8a885c57b7b9be4c02f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
