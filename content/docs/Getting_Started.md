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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLOBW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBv371MA0%2FzGa8tJr%2FysoSJIvduidkHgG3yEvWX6tgYAIhAJ20yav8k%2FAGN62Z607u3XQymY%2FTSdSTrPG8DLOpNA86Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwHqYKU7JcbsFeCHQYq3APkU2h7OeIbjs8DQXaQAQXjsls%2FklLSIFLLgz5xj7y1dtZpYzA5Ng1sZGR5uruY4nP%2FjIz%2B0kMKb6NBv8XbP3Jo4jWjdARaAbXT4VRyh481nOdIafaUdoY4VeadCp7DdzPLmVahu%2F2jLOdv87glUt5RrKYo9SbEWzcm9RE3E1L%2FJBBskAlzpTm3UwpnzfQnyR6GLUO56U5gtJjheNglbfwGjmWTHNPnga076xGPAvq4oq2I0OUIrDLs%2BKek7iqxXwpimMCo6nmX%2FJptVJUqqlGBwuI%2FV0nwk3TuZ%2BFwvKs%2Bwe0dkRbMPu6UU02E7LfBal6jAIubT3Bumc51nyjSSKmLOOJtItjpq54l7Yv2b8oYbO%2BkEHL%2BPsnSN1goi5gUZdf%2BjGDjUOFVkAvwPD57%2FvHXUmxjzcPxwWMJz4BTNeqc3fqDsrpGXidj%2B3v0I00TJQ9w7Ou2jcj1er6ybAA67hrQcVv%2FcNEkOeYwgI4v%2FkVQ40n14OKeoDgHyb33tmqArhiw7CD5mfUZhHyiI5IdjfnMY0%2FvzFhj5RhIu8vDyTOffmlHrt4MgBNjKIhuNSZ08tumrt8kj4wzeBe3WBk3ObJ2BdaY%2FZDROiTbDTDmS2q%2FTBbtln2aaHsD%2F%2B54BjDV5qXDBjqkAYEo%2B08pYnUPg2Kow7rurLNK0w0Id74eO9xAtNdJ06ag1sF9ulP2iplCcJ93Sa98QAXHu6Dp8cnZEvpQd4xVo8autTJzEJcsKzJVlDYSdvRbFi0FVHwGFaF5gL2R64TabXsx98Z%2BplbeewQpP8yFkffoJBwFRrsFfJlXm%2BN5fmRyE5j0UgYRplsry3eSikW8SEu51I5ZDrJFWxi4tMgKo2ienden&X-Amz-Signature=2c6a6891e8e57f6874886ace7afe6300db490dcd54f662a6f339af0786416f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLOBW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBv371MA0%2FzGa8tJr%2FysoSJIvduidkHgG3yEvWX6tgYAIhAJ20yav8k%2FAGN62Z607u3XQymY%2FTSdSTrPG8DLOpNA86Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwHqYKU7JcbsFeCHQYq3APkU2h7OeIbjs8DQXaQAQXjsls%2FklLSIFLLgz5xj7y1dtZpYzA5Ng1sZGR5uruY4nP%2FjIz%2B0kMKb6NBv8XbP3Jo4jWjdARaAbXT4VRyh481nOdIafaUdoY4VeadCp7DdzPLmVahu%2F2jLOdv87glUt5RrKYo9SbEWzcm9RE3E1L%2FJBBskAlzpTm3UwpnzfQnyR6GLUO56U5gtJjheNglbfwGjmWTHNPnga076xGPAvq4oq2I0OUIrDLs%2BKek7iqxXwpimMCo6nmX%2FJptVJUqqlGBwuI%2FV0nwk3TuZ%2BFwvKs%2Bwe0dkRbMPu6UU02E7LfBal6jAIubT3Bumc51nyjSSKmLOOJtItjpq54l7Yv2b8oYbO%2BkEHL%2BPsnSN1goi5gUZdf%2BjGDjUOFVkAvwPD57%2FvHXUmxjzcPxwWMJz4BTNeqc3fqDsrpGXidj%2B3v0I00TJQ9w7Ou2jcj1er6ybAA67hrQcVv%2FcNEkOeYwgI4v%2FkVQ40n14OKeoDgHyb33tmqArhiw7CD5mfUZhHyiI5IdjfnMY0%2FvzFhj5RhIu8vDyTOffmlHrt4MgBNjKIhuNSZ08tumrt8kj4wzeBe3WBk3ObJ2BdaY%2FZDROiTbDTDmS2q%2FTBbtln2aaHsD%2F%2B54BjDV5qXDBjqkAYEo%2B08pYnUPg2Kow7rurLNK0w0Id74eO9xAtNdJ06ag1sF9ulP2iplCcJ93Sa98QAXHu6Dp8cnZEvpQd4xVo8autTJzEJcsKzJVlDYSdvRbFi0FVHwGFaF5gL2R64TabXsx98Z%2BplbeewQpP8yFkffoJBwFRrsFfJlXm%2BN5fmRyE5j0UgYRplsry3eSikW8SEu51I5ZDrJFWxi4tMgKo2ienden&X-Amz-Signature=ae22d3a9c1ac5fa87e6d0946ff45fb7d34af0d3f249b202fbefae9bbb8401043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLOBW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBv371MA0%2FzGa8tJr%2FysoSJIvduidkHgG3yEvWX6tgYAIhAJ20yav8k%2FAGN62Z607u3XQymY%2FTSdSTrPG8DLOpNA86Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwHqYKU7JcbsFeCHQYq3APkU2h7OeIbjs8DQXaQAQXjsls%2FklLSIFLLgz5xj7y1dtZpYzA5Ng1sZGR5uruY4nP%2FjIz%2B0kMKb6NBv8XbP3Jo4jWjdARaAbXT4VRyh481nOdIafaUdoY4VeadCp7DdzPLmVahu%2F2jLOdv87glUt5RrKYo9SbEWzcm9RE3E1L%2FJBBskAlzpTm3UwpnzfQnyR6GLUO56U5gtJjheNglbfwGjmWTHNPnga076xGPAvq4oq2I0OUIrDLs%2BKek7iqxXwpimMCo6nmX%2FJptVJUqqlGBwuI%2FV0nwk3TuZ%2BFwvKs%2Bwe0dkRbMPu6UU02E7LfBal6jAIubT3Bumc51nyjSSKmLOOJtItjpq54l7Yv2b8oYbO%2BkEHL%2BPsnSN1goi5gUZdf%2BjGDjUOFVkAvwPD57%2FvHXUmxjzcPxwWMJz4BTNeqc3fqDsrpGXidj%2B3v0I00TJQ9w7Ou2jcj1er6ybAA67hrQcVv%2FcNEkOeYwgI4v%2FkVQ40n14OKeoDgHyb33tmqArhiw7CD5mfUZhHyiI5IdjfnMY0%2FvzFhj5RhIu8vDyTOffmlHrt4MgBNjKIhuNSZ08tumrt8kj4wzeBe3WBk3ObJ2BdaY%2FZDROiTbDTDmS2q%2FTBbtln2aaHsD%2F%2B54BjDV5qXDBjqkAYEo%2B08pYnUPg2Kow7rurLNK0w0Id74eO9xAtNdJ06ag1sF9ulP2iplCcJ93Sa98QAXHu6Dp8cnZEvpQd4xVo8autTJzEJcsKzJVlDYSdvRbFi0FVHwGFaF5gL2R64TabXsx98Z%2BplbeewQpP8yFkffoJBwFRrsFfJlXm%2BN5fmRyE5j0UgYRplsry3eSikW8SEu51I5ZDrJFWxi4tMgKo2ienden&X-Amz-Signature=05128464dfaefc3479b616f81915bc34f22d460bbff0504ce7491ea7e63b3bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ53MZ7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDp7S%2Bitx6BO9sZ%2F%2B7p%2F%2FJtTgs8T%2BcALpTY0rdzA8a3PwIgFtuHLImaO%2FlSH2qZ8M3w2dm6ItCOosD7x6qhq6jUcYYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP%2BesXGLxHfR22m%2BZircA5ijMRuxXtwQjOWKQg3O4htEa5pS9zdSHzrVyRqY6MKpEz4uEPjV3IgTqd64Ino210o9ZShrNAShqR%2F6UQ5bErVy0%2Bdix5VEqFf7636b3C1B3qum6cBs0nTEwuluJJpfZ0my2JrEClf1eqioVSfHlUkNZbBaUl%2BRr18tBYrzsYyl5GQpBa5ufpQDMXV%2BBi03G%2BT%2B2GpBnl83RJLHm7Y7qa1vj91xftTH4pXPzkmmzKQnt5foSfiIIun%2FWzG0lYlh%2FaKHo0oFPbloSmhCnGEIsX5BHKPe35JCRTx4ThVO3pGJJeYBFl68ZOtvvU3Jlh18J5bjTdKV6ivcYt6oUPZpcHhg%2FubeCNgw%2FtYok8zNjdE8fA5sLt0YHiF9AV2yUYQSfLXsFSbRPev%2BzIQ4BPMG0dghG1dfgg8DEKPIn4V%2BiGasI0dp%2Bi44J%2FdjdLGqA1NEaD9mIL6DI14JrVBUN%2BQ8ljX4cix%2B6HHLwVQCsNcRPdlRN0hFL6nbIoljKVpYVFo3Sgh9hzJv8LCGRk1tMBC%2BO8OVa2%2Fx8gxG0kW8duxP8TkZltMyEMd9%2Bvakqf5IZyTdx2325BY0ic8nwlJYk5mO9U%2BpEXecI2YhV0GwDOerZSj1E%2BnVIS8BZAfwFT3EMJOipcMGOqUBXNi4%2FhuQ%2Bcq3ZieAkONo9XfZ7pCsOeYUw02x889IJM02HI8u3j%2BV4JLINU0Dn7mZjWiFXbBCveZ%2Fpkklgb4J5vz%2F4h9pYPDCud7jTErel7K0Wd4GWb72spJiGnEMBwJRFKK0kLswGmSuGb5zLqiLM5Yks8xYiJCvdDie8zFg1cHlSmWto4PysBiNJjSHUILpBxm5ujFbM24ZAx%2B8pAEb6F1%2B6%2BS0&X-Amz-Signature=c88a8e79f75d3285a21e8d8375e200650912391104db96ceba7861be203c00f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3OGLTU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEout5FTR0Ch0Wak1af3NUZy%2BA2rbmUdDMRzkZNuLB05AiBek6DK38uX3uc9qyuFYv4WUsNk6lm4BUrsyjznm%2BViRSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfX%2BZZQIEQ6pxqx%2FYKtwDONAcr32XQchY582VqGeUBgRGcF6vQzWdDsKEfKJLG7O9dfto%2BvXMzrDjppYVDH59GlVlVZ32suy0jdklmVyv0C5gbORWe41zFgvlHPk%2FcnPH0m%2BnRXSqqClNO9DecI35KL0HgaU0B6K%2B7BtmfXrlRGEJq0j98Svb5QkPEO8aqeuyJCTX1Hoo%2F2F2PeipiqLoauONqHl6jde%2F1AzPP1g8kpxhhFlPJo2A5apFzJ5ZqbvZVFKT5vtycm0EaiKriEHY7ysj1UaEoPo6jOcVMTtffjtPtDEzimAYMCvUWueViEwzWxVqGc2QzZhVCdwLCHO8CcLSrbkAyH5QQVpbvLq1Y20Cia%2BKKOL6C5CD6DBGjrSb7ApJWaBk7B9cwsJ7o%2BO0g2zyXeW4Y4cRVkXSK0MluvXICkZtdmd4vYhbia%2BioAEbZJATJMHRqzfN1btWb7eKVLOHOnRA5iH7WOLgHNeZk7eboWrhk0WsiEVJLWujInXZKBjg9vc6pzNOd%2BOb7dAbvZD3Mvf5hVXPWyaqKQEAh%2Fuekyb6lXMOtENpM0C%2F4w0PJ2BJOHNF%2FEnkP0tlfQCEGOdM6GJ7NCg8Jib2P2qj6PdxDmuNENKPTHlGwgnX7RyFqA12ZtNv7VU%2F9V0w9%2B2lwwY6pgG6Ibak20%2BuLARHLUwM9zPjnpIJFDoCwinw37PrmQsg9vwsrQj8%2FW9jVMAqswXrOYakWqult9tKMACUbJ4fMTe19%2BiNDtRPAnriWDArBNEociYEyWn6Qzw4PPwmixLsf9W9PlUJDsWA4QLxL7OoHmgfz4Am%2FnEXNyvy1cE7hE4jXnosayRdBnhqmtCYAEmbfFk0kshZZZ1l4x%2BTui2RmIr%2FM6W6QlZE&X-Amz-Signature=5e6fb5329ae24ee72d0fc22a236c21ff9c2e1490bf78b1349c9ba562d964fbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLOBW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBv371MA0%2FzGa8tJr%2FysoSJIvduidkHgG3yEvWX6tgYAIhAJ20yav8k%2FAGN62Z607u3XQymY%2FTSdSTrPG8DLOpNA86Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwHqYKU7JcbsFeCHQYq3APkU2h7OeIbjs8DQXaQAQXjsls%2FklLSIFLLgz5xj7y1dtZpYzA5Ng1sZGR5uruY4nP%2FjIz%2B0kMKb6NBv8XbP3Jo4jWjdARaAbXT4VRyh481nOdIafaUdoY4VeadCp7DdzPLmVahu%2F2jLOdv87glUt5RrKYo9SbEWzcm9RE3E1L%2FJBBskAlzpTm3UwpnzfQnyR6GLUO56U5gtJjheNglbfwGjmWTHNPnga076xGPAvq4oq2I0OUIrDLs%2BKek7iqxXwpimMCo6nmX%2FJptVJUqqlGBwuI%2FV0nwk3TuZ%2BFwvKs%2Bwe0dkRbMPu6UU02E7LfBal6jAIubT3Bumc51nyjSSKmLOOJtItjpq54l7Yv2b8oYbO%2BkEHL%2BPsnSN1goi5gUZdf%2BjGDjUOFVkAvwPD57%2FvHXUmxjzcPxwWMJz4BTNeqc3fqDsrpGXidj%2B3v0I00TJQ9w7Ou2jcj1er6ybAA67hrQcVv%2FcNEkOeYwgI4v%2FkVQ40n14OKeoDgHyb33tmqArhiw7CD5mfUZhHyiI5IdjfnMY0%2FvzFhj5RhIu8vDyTOffmlHrt4MgBNjKIhuNSZ08tumrt8kj4wzeBe3WBk3ObJ2BdaY%2FZDROiTbDTDmS2q%2FTBbtln2aaHsD%2F%2B54BjDV5qXDBjqkAYEo%2B08pYnUPg2Kow7rurLNK0w0Id74eO9xAtNdJ06ag1sF9ulP2iplCcJ93Sa98QAXHu6Dp8cnZEvpQd4xVo8autTJzEJcsKzJVlDYSdvRbFi0FVHwGFaF5gL2R64TabXsx98Z%2BplbeewQpP8yFkffoJBwFRrsFfJlXm%2BN5fmRyE5j0UgYRplsry3eSikW8SEu51I5ZDrJFWxi4tMgKo2ienden&X-Amz-Signature=9ca6188c6f8ae07f7ac01ee3646332f9554b6191b459451d5fe7f23e7e0ac5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
