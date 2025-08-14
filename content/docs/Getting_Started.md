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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJW5DME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeoFADLwOpU%2BYa9qY6MyY7IHfyNWaF%2F7fBqia5eWPSTAiEAzpmS4SrgAe5sTWj7PbkrK7TNBbIXEcWa1AciPiSarqsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDATGllmBEYFw%2BiMu0yrcAyJrsGzlFHJFKcy%2FrwvAXS6K7MKZ6WuiWAqVtCwOgKPhTZxH5laLNU5k9cu%2Fcny%2FgdG7lu3ec4xfH3SW4fh9GyKSC%2FJhxj8LSboSM7lGc4Ewn3dWx%2BCXidsGS3LIYgNlHhLpC%2BrzjRbHBcC6NKY5c38EtAFOMVt0fdWc%2F2zHA%2B1qdyFaaPrsd0PGbElqzgeTLeDH6CDxrEWEDoAwsrWDdCKf5cvgBbD0pyH3%2FrNFD%2F0yIC7x%2B2hiB6epD7%2F0yzpFzesTDWuQpK2MHs4Ql7%2FyoguwuZ5wH6r02FvGIO8HnN24BIeJgqBlwJBhQqLuzqsXN7sks7kFkntap0AvLTRiWDUlHm4AE6qMdSkR2NRoHI%2FnPmn%2FOV4MWjo%2BUpFYuHCLutBzWofFMR82DKUVv1WICSOQNPnZ1xaV8%2Bbhev%2B5CxZK9nwxQaEUqixe3QrGWRNo0Rekb8%2Bx94gPeMRCfFzHYUBwPb6OpEOsUX0EBhwUwNl90xewd5oRdWys3E8LjM%2BegEdsc0wPp7ddMxEBEBbCd2FrX5BeSEcf3BXrHZP%2BFaxk8aEBtxEg0xsmTD7qoYEFg7HZcoEEFRA9qfTXqjNZ1HxGjGvAIHTDPWSumxOYUQZoXs%2FdRkaicw91EQpLMOmJ9sQGOqUBHSceQfiyhtICFzM8XqKHFmr%2BFSxtfid2jCnLCGe2wyfdIwQ7KDSE3N0teLmCojTWB0EmeJInQWlQWtG9EmJVxiwWeseus2tns9REM%2Fdn5LbEC2wCiaRGJDI0ruYL8r5rCraJZCIevkc2QMNP1xpi3V141OOJV%2B9T1NosDr7MBp3jATtvE4km8M7U0xK0HH1IMAC%2BeATD3rf9xieaCKlolzS1pcyu&X-Amz-Signature=aff47fd5cbde15bb4daaef1243ec7db6e83994ccaec390acbd0e5ed0295501a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJW5DME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeoFADLwOpU%2BYa9qY6MyY7IHfyNWaF%2F7fBqia5eWPSTAiEAzpmS4SrgAe5sTWj7PbkrK7TNBbIXEcWa1AciPiSarqsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDATGllmBEYFw%2BiMu0yrcAyJrsGzlFHJFKcy%2FrwvAXS6K7MKZ6WuiWAqVtCwOgKPhTZxH5laLNU5k9cu%2Fcny%2FgdG7lu3ec4xfH3SW4fh9GyKSC%2FJhxj8LSboSM7lGc4Ewn3dWx%2BCXidsGS3LIYgNlHhLpC%2BrzjRbHBcC6NKY5c38EtAFOMVt0fdWc%2F2zHA%2B1qdyFaaPrsd0PGbElqzgeTLeDH6CDxrEWEDoAwsrWDdCKf5cvgBbD0pyH3%2FrNFD%2F0yIC7x%2B2hiB6epD7%2F0yzpFzesTDWuQpK2MHs4Ql7%2FyoguwuZ5wH6r02FvGIO8HnN24BIeJgqBlwJBhQqLuzqsXN7sks7kFkntap0AvLTRiWDUlHm4AE6qMdSkR2NRoHI%2FnPmn%2FOV4MWjo%2BUpFYuHCLutBzWofFMR82DKUVv1WICSOQNPnZ1xaV8%2Bbhev%2B5CxZK9nwxQaEUqixe3QrGWRNo0Rekb8%2Bx94gPeMRCfFzHYUBwPb6OpEOsUX0EBhwUwNl90xewd5oRdWys3E8LjM%2BegEdsc0wPp7ddMxEBEBbCd2FrX5BeSEcf3BXrHZP%2BFaxk8aEBtxEg0xsmTD7qoYEFg7HZcoEEFRA9qfTXqjNZ1HxGjGvAIHTDPWSumxOYUQZoXs%2FdRkaicw91EQpLMOmJ9sQGOqUBHSceQfiyhtICFzM8XqKHFmr%2BFSxtfid2jCnLCGe2wyfdIwQ7KDSE3N0teLmCojTWB0EmeJInQWlQWtG9EmJVxiwWeseus2tns9REM%2Fdn5LbEC2wCiaRGJDI0ruYL8r5rCraJZCIevkc2QMNP1xpi3V141OOJV%2B9T1NosDr7MBp3jATtvE4km8M7U0xK0HH1IMAC%2BeATD3rf9xieaCKlolzS1pcyu&X-Amz-Signature=a3bb23b6287b543cd89db6701d6f689e213dd7174cc0c3863d3f58b8ca6e8b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJW5DME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeoFADLwOpU%2BYa9qY6MyY7IHfyNWaF%2F7fBqia5eWPSTAiEAzpmS4SrgAe5sTWj7PbkrK7TNBbIXEcWa1AciPiSarqsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDATGllmBEYFw%2BiMu0yrcAyJrsGzlFHJFKcy%2FrwvAXS6K7MKZ6WuiWAqVtCwOgKPhTZxH5laLNU5k9cu%2Fcny%2FgdG7lu3ec4xfH3SW4fh9GyKSC%2FJhxj8LSboSM7lGc4Ewn3dWx%2BCXidsGS3LIYgNlHhLpC%2BrzjRbHBcC6NKY5c38EtAFOMVt0fdWc%2F2zHA%2B1qdyFaaPrsd0PGbElqzgeTLeDH6CDxrEWEDoAwsrWDdCKf5cvgBbD0pyH3%2FrNFD%2F0yIC7x%2B2hiB6epD7%2F0yzpFzesTDWuQpK2MHs4Ql7%2FyoguwuZ5wH6r02FvGIO8HnN24BIeJgqBlwJBhQqLuzqsXN7sks7kFkntap0AvLTRiWDUlHm4AE6qMdSkR2NRoHI%2FnPmn%2FOV4MWjo%2BUpFYuHCLutBzWofFMR82DKUVv1WICSOQNPnZ1xaV8%2Bbhev%2B5CxZK9nwxQaEUqixe3QrGWRNo0Rekb8%2Bx94gPeMRCfFzHYUBwPb6OpEOsUX0EBhwUwNl90xewd5oRdWys3E8LjM%2BegEdsc0wPp7ddMxEBEBbCd2FrX5BeSEcf3BXrHZP%2BFaxk8aEBtxEg0xsmTD7qoYEFg7HZcoEEFRA9qfTXqjNZ1HxGjGvAIHTDPWSumxOYUQZoXs%2FdRkaicw91EQpLMOmJ9sQGOqUBHSceQfiyhtICFzM8XqKHFmr%2BFSxtfid2jCnLCGe2wyfdIwQ7KDSE3N0teLmCojTWB0EmeJInQWlQWtG9EmJVxiwWeseus2tns9REM%2Fdn5LbEC2wCiaRGJDI0ruYL8r5rCraJZCIevkc2QMNP1xpi3V141OOJV%2B9T1NosDr7MBp3jATtvE4km8M7U0xK0HH1IMAC%2BeATD3rf9xieaCKlolzS1pcyu&X-Amz-Signature=e580b7f3fb50deb2ce367555e57522b7fe931ea8d7d35e949be93e62f50f6bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEPPRU3A%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADZBlKk2FNapv5zJ5pRBms%2BDz42aOe2WZhPCw9jh%2BQkAiAmvVemqXq48f44tVZW%2BV1JFj1vEox8MyHHwg%2FP%2BELyfyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7fjIlczLJOqDAVj6KtwDU2dsQp5e8QU43LYFFWz6QsD8NqfB5K%2FBpfNWJZJQcMSha7pfCb67xDPbVeP9ZmRwQStQ%2Bz1EBuJ4O%2FySfeQJIhg3iQwxdrL4M6uNrAWPxrs6SAXzVJtljJeCEekr6gd5nEN1trKvx6BJ0%2BhjoUsEAKEnpAGPQX0sRXKRUclJyX8WLe03%2BmXXigwSqChszMTb2yHqy4%2BaTWF6i5x%2Byw206xVT4t8IaQ82AFQsxWjhDXB%2FfVe7UEboQs7YKA3bT8Frs3gk%2BkCbvqa95OJp8KGG%2F3pzommvYg4vCbvYtBj0LxUV6ycHC2WQdxoqmM5E1kKTd94RP5PgbhAOxeZiSTbexN6ZqxGi5juvs6RQLfMekrdVQpC7upxK6E7%2Fek%2BMEOX3tv6xh809SFf4n%2BaiokJjfuXScyYtVJyDkIY1uZtbsKqtAf55F8s%2BTVbeT8hHeBUufhQNQFyC9clt0PcwPBqsSn9KR263J8odFGjfqU0v1yYAavFx%2Bb%2B7jAuHklJetcGXscBgI27R%2FbIeeKAO1VhWEQJemt0bWaLNrToN2Cg3Deti2y%2Fh3d02pyl6mWKbryF3GQsE44uLy6hLzate1SeFreOeaVRs6W8D5OjS6BIxlcE4kYD89uoO7HYC2Eww2Yn2xAY6pgF2Y9irF%2FHWtnBNGdld4u4bl3owC14V74arZYkZ2wjCRwmWELnRw4RCNtJscPn04KEQmK6YrQINf0kzJMKuiulhwR5MSBvsmwvxaw46QN7gUYFVPpNJUWf2vjK533Z6uxPrCm7MloUYSpHBfwvJXpjirKE1T8g4B4TUhmhnCdIr8VkmR4AaGgQAII4bsZQ4VbO%2FSHtT88MNMbSDqxPU0%2BZsfF0by3IM&X-Amz-Signature=b1548f584dfb747e73d3c7678b3302a56cfdc0ca6e03b95d44d39c560117071f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGGLS3Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcb%2Blzp%2BbbF8zekzklpQ9YTVfEbYTf2g8cmbch9Cds1AiEA4mWB215UqvCLMoYw1TDinJ5bfAJOY2lSqUNzI7%2FscCQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK2HWOsPkHgiMfAGTircA1h9fVv2oTlTTapE08NYv0IFNLVWT60rDiX06sfjGAHzncC0pAchlKRrpQX2vxMIUnnwUO4By%2Be0l5LGSgaQuM6UdoufzduuyqF%2FCavwQHVVnAjJbq8CNsTJLW2Xr9fASQFANWoP%2FqDA38b6YUkuCmXCpmy2XjI7ycOPcfcdWNhFxai6b8zBKCEOSwLMgutYGWHy7FF7V6yrd6iaUAVnvrP84RrXLBJO%2F0060o2e2KgCaZhcL%2Ftv9ZeDv8kte5SwleZuqTbJDux0zoxv0JGtxbuwbxiWt9sGI18MVXKc%2BoTKN0W%2F7ya8SV%2BorN5TubcYu%2FowAe3joJiOUaTILWkzMenW7N7VNrIpmtQPTZ%2Fpl8PpB3jMWcuQHky0obfSJcYTXeo9g%2FPPPqOPRlqYBHQ2RlU9IyUs0WB0y8P%2FkSwf7Es9JG4VQWDfnuu59tNBuBOMb0vMkFIhIQoTckCh64sYotiOuw%2BUqbV2Y6wlgXcLP3Dy6mdZYxJpBx9%2B0ELoYIkTaym%2FMu%2FjtY0Cs0DsbjWE8s7idjAywr6h9sVOdfTJBuqyVh83nhexA8LuFcQswcN1qJcR6mOr2eGDA8jGjOBzd6svXp9F6bFhQR2RWsCNVzOdyS2w%2F9xB5qkcSQOhMP2J9sQGOqUBMVy8PghgzuyGzSPZQu0DwhodtKT8ubaEkSMWw1jK19jmLrGKB7L7YAYOphspmygH4fj7dw2kSO46m0uqDsnGB3rChpSkdDEFtpwm9cMFbqkMZVkErILwWSBRazRrEOybd5UDWwlVjbcRvhejnu76qssG1UuKLvMqrZu%2F0E3kIcdCpsLHAI73%2B6HfjzEXZf1RcxCLfaEVWeeea3JNNB59stSk3sTX&X-Amz-Signature=6bfdcdad637f8fcdf394827723869770b13bbba4afad33537bdca606013569f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJW5DME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeoFADLwOpU%2BYa9qY6MyY7IHfyNWaF%2F7fBqia5eWPSTAiEAzpmS4SrgAe5sTWj7PbkrK7TNBbIXEcWa1AciPiSarqsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDATGllmBEYFw%2BiMu0yrcAyJrsGzlFHJFKcy%2FrwvAXS6K7MKZ6WuiWAqVtCwOgKPhTZxH5laLNU5k9cu%2Fcny%2FgdG7lu3ec4xfH3SW4fh9GyKSC%2FJhxj8LSboSM7lGc4Ewn3dWx%2BCXidsGS3LIYgNlHhLpC%2BrzjRbHBcC6NKY5c38EtAFOMVt0fdWc%2F2zHA%2B1qdyFaaPrsd0PGbElqzgeTLeDH6CDxrEWEDoAwsrWDdCKf5cvgBbD0pyH3%2FrNFD%2F0yIC7x%2B2hiB6epD7%2F0yzpFzesTDWuQpK2MHs4Ql7%2FyoguwuZ5wH6r02FvGIO8HnN24BIeJgqBlwJBhQqLuzqsXN7sks7kFkntap0AvLTRiWDUlHm4AE6qMdSkR2NRoHI%2FnPmn%2FOV4MWjo%2BUpFYuHCLutBzWofFMR82DKUVv1WICSOQNPnZ1xaV8%2Bbhev%2B5CxZK9nwxQaEUqixe3QrGWRNo0Rekb8%2Bx94gPeMRCfFzHYUBwPb6OpEOsUX0EBhwUwNl90xewd5oRdWys3E8LjM%2BegEdsc0wPp7ddMxEBEBbCd2FrX5BeSEcf3BXrHZP%2BFaxk8aEBtxEg0xsmTD7qoYEFg7HZcoEEFRA9qfTXqjNZ1HxGjGvAIHTDPWSumxOYUQZoXs%2FdRkaicw91EQpLMOmJ9sQGOqUBHSceQfiyhtICFzM8XqKHFmr%2BFSxtfid2jCnLCGe2wyfdIwQ7KDSE3N0teLmCojTWB0EmeJInQWlQWtG9EmJVxiwWeseus2tns9REM%2Fdn5LbEC2wCiaRGJDI0ruYL8r5rCraJZCIevkc2QMNP1xpi3V141OOJV%2B9T1NosDr7MBp3jATtvE4km8M7U0xK0HH1IMAC%2BeATD3rf9xieaCKlolzS1pcyu&X-Amz-Signature=22737a53e00711b1ca598dc55d2a06f45e980a3346e5d5fe5b814511ef6ac45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
