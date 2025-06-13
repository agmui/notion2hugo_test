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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSU5NZT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM10ahpbPOSu5RRc7KV%2BwWE7h1AQttdy7Lnq2OPWYoSwIhAJT67iO4xs4ZTB6XxYKAqTzZcsVKPtd5AKmFGltTVTgSKv8DCBUQABoMNjM3NDIzMTgzODA1Igyu1wKITxnWx6vVXTwq3APJAHUD6GmBgsxUD78O9RFr39g6ms8NoWoCpp6rPtl3XZ8%2FQYOY%2BEI%2Bq7V8LdiMMELdEA7uQbSNRs5CCQIhuzdvRlUAIT6fGjmYuDDl9RBO%2FW9v2E10gbeAK9z7NjnemyLEwWfBnH7Q9iqlScmXe0%2BXoo4oxmn2M7KbBFc%2F9C2E5cMo89jBBMj2O64%2F6lhKewpEnG%2FiKR0KiEcm62LzlkqPXoLjjI9abR1wlhYyKmAQ4ANdaUp1fOznXKefSJXn04SGlAUXvh4w36B7T7P66j%2FzY%2BDk8gwfteaToYfGmmA9b4RdfcCYnz%2BWZSG2NjtkjimiAQh%2FF9nq8Agbjzj8olRFs4B0zBeZTG%2BRJsGuW%2FmF0nwwlF5sRvKl5DJ5kOINlyRaIunRthSwpjcGIFJN77UJS3%2Bm9r3grDefawkuCUtmibd%2FhJpmnsJcy%2B%2Fe%2B%2FrRmqZ6VfmZ77ifHGnVI7GyoNr97ekX%2Ft%2FNerYUR7irI7iLpJxghieSOl%2F9pANiIvUD52PHMXPkzY64gcUZK2Upc3MiZhuHYZs2T3Dq2jbM%2Bl7Yyfc1bvrAWKZjVv8pE66a8%2BUrGgZnAw0NdBfQcWVNHjOpg6QtuErXkGuoYHk%2FGFc97RmRjhbOw54VD4mdzDCAqrDCBjqkAWbHVNTMK%2Fk4x8G2%2BDgl0tQShNeHPfk0XkRA%2BGo%2B9ePianDDWRZrGH7ODBnyanYdLW5grauV2Am%2B1kY2z5BTZsUjhQtRBNphnS3WuL3PpZ8yWzK4FayCy0Hm6rkKzgDcU5pOKN%2FcsArs8ApReMxZ4EQiIzzuR9EIAJfHzXCJ9TG7G3lCdHXcgx1oTetdvfyTeGLmGyNkGmmRzPHVqKpPtMbiKnET&X-Amz-Signature=cb1eeeae6369ef407029cd1f234731dd47b5b98970e297dc45fa8ccb922f2128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSU5NZT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM10ahpbPOSu5RRc7KV%2BwWE7h1AQttdy7Lnq2OPWYoSwIhAJT67iO4xs4ZTB6XxYKAqTzZcsVKPtd5AKmFGltTVTgSKv8DCBUQABoMNjM3NDIzMTgzODA1Igyu1wKITxnWx6vVXTwq3APJAHUD6GmBgsxUD78O9RFr39g6ms8NoWoCpp6rPtl3XZ8%2FQYOY%2BEI%2Bq7V8LdiMMELdEA7uQbSNRs5CCQIhuzdvRlUAIT6fGjmYuDDl9RBO%2FW9v2E10gbeAK9z7NjnemyLEwWfBnH7Q9iqlScmXe0%2BXoo4oxmn2M7KbBFc%2F9C2E5cMo89jBBMj2O64%2F6lhKewpEnG%2FiKR0KiEcm62LzlkqPXoLjjI9abR1wlhYyKmAQ4ANdaUp1fOznXKefSJXn04SGlAUXvh4w36B7T7P66j%2FzY%2BDk8gwfteaToYfGmmA9b4RdfcCYnz%2BWZSG2NjtkjimiAQh%2FF9nq8Agbjzj8olRFs4B0zBeZTG%2BRJsGuW%2FmF0nwwlF5sRvKl5DJ5kOINlyRaIunRthSwpjcGIFJN77UJS3%2Bm9r3grDefawkuCUtmibd%2FhJpmnsJcy%2B%2Fe%2B%2FrRmqZ6VfmZ77ifHGnVI7GyoNr97ekX%2Ft%2FNerYUR7irI7iLpJxghieSOl%2F9pANiIvUD52PHMXPkzY64gcUZK2Upc3MiZhuHYZs2T3Dq2jbM%2Bl7Yyfc1bvrAWKZjVv8pE66a8%2BUrGgZnAw0NdBfQcWVNHjOpg6QtuErXkGuoYHk%2FGFc97RmRjhbOw54VD4mdzDCAqrDCBjqkAWbHVNTMK%2Fk4x8G2%2BDgl0tQShNeHPfk0XkRA%2BGo%2B9ePianDDWRZrGH7ODBnyanYdLW5grauV2Am%2B1kY2z5BTZsUjhQtRBNphnS3WuL3PpZ8yWzK4FayCy0Hm6rkKzgDcU5pOKN%2FcsArs8ApReMxZ4EQiIzzuR9EIAJfHzXCJ9TG7G3lCdHXcgx1oTetdvfyTeGLmGyNkGmmRzPHVqKpPtMbiKnET&X-Amz-Signature=f130f35d78821ebd5487d90256dcd84125fcd103d717d689628824d874394862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSU5NZT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM10ahpbPOSu5RRc7KV%2BwWE7h1AQttdy7Lnq2OPWYoSwIhAJT67iO4xs4ZTB6XxYKAqTzZcsVKPtd5AKmFGltTVTgSKv8DCBUQABoMNjM3NDIzMTgzODA1Igyu1wKITxnWx6vVXTwq3APJAHUD6GmBgsxUD78O9RFr39g6ms8NoWoCpp6rPtl3XZ8%2FQYOY%2BEI%2Bq7V8LdiMMELdEA7uQbSNRs5CCQIhuzdvRlUAIT6fGjmYuDDl9RBO%2FW9v2E10gbeAK9z7NjnemyLEwWfBnH7Q9iqlScmXe0%2BXoo4oxmn2M7KbBFc%2F9C2E5cMo89jBBMj2O64%2F6lhKewpEnG%2FiKR0KiEcm62LzlkqPXoLjjI9abR1wlhYyKmAQ4ANdaUp1fOznXKefSJXn04SGlAUXvh4w36B7T7P66j%2FzY%2BDk8gwfteaToYfGmmA9b4RdfcCYnz%2BWZSG2NjtkjimiAQh%2FF9nq8Agbjzj8olRFs4B0zBeZTG%2BRJsGuW%2FmF0nwwlF5sRvKl5DJ5kOINlyRaIunRthSwpjcGIFJN77UJS3%2Bm9r3grDefawkuCUtmibd%2FhJpmnsJcy%2B%2Fe%2B%2FrRmqZ6VfmZ77ifHGnVI7GyoNr97ekX%2Ft%2FNerYUR7irI7iLpJxghieSOl%2F9pANiIvUD52PHMXPkzY64gcUZK2Upc3MiZhuHYZs2T3Dq2jbM%2Bl7Yyfc1bvrAWKZjVv8pE66a8%2BUrGgZnAw0NdBfQcWVNHjOpg6QtuErXkGuoYHk%2FGFc97RmRjhbOw54VD4mdzDCAqrDCBjqkAWbHVNTMK%2Fk4x8G2%2BDgl0tQShNeHPfk0XkRA%2BGo%2B9ePianDDWRZrGH7ODBnyanYdLW5grauV2Am%2B1kY2z5BTZsUjhQtRBNphnS3WuL3PpZ8yWzK4FayCy0Hm6rkKzgDcU5pOKN%2FcsArs8ApReMxZ4EQiIzzuR9EIAJfHzXCJ9TG7G3lCdHXcgx1oTetdvfyTeGLmGyNkGmmRzPHVqKpPtMbiKnET&X-Amz-Signature=a6e9de9f77214186294ebb355d29cd038b344f1a5f8fea0a4e2d56431f9b81ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66DFOQU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICZ51aXSpZixTqyvOXTTBXE6mcpIQvSGydQPhkQGVhklAiB9t%2BbHBUKfEvLjcQN1HnUU%2B4ogXOb1ZSxQizines7GESr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMHabBJrIOCFUEZJghKtwDx2%2B65Q0wM3BijKSKy63D3TOjLd2f%2B6lrYF2GcRD6pUWAosnch8%2FxxHl6E0K40x0nqCdx336yITXir1VN72JLIHxZOtB6p9SVgUhUzSxNwJtOZswftOB2dhDkEuOnS0pzlj%2BWdLZD96ZuHSorLIB3xNmXeo%2FiYTYcjpLcAA3HVN6aRwKYBak49SKWpQtlTjNcaO8xrwOYmxTRJhPsuKrN5A%2Fp3buPRJM9jobiedf%2F9UTHVlknLuXZ8IGqHqcAzt9u2rgXr4gR%2FH7B%2BSa%2F4VpJJBX1%2Bb86eSMxnFWxBujEDMl9pFOVIt4WBqlIta5mWhf17I85dF7QgUP%2FC%2BDp%2FFoxul%2BBr3GZgbrU4v9RbGYAlbZvsNz65ajC%2B%2FV1Oh25nYd6LWQ%2FyxHp4mt%2Bo0qi2TXZp1OtS0R1ZsF65RTJtrcbMc0bLMpfiZ3uqryLje3XOnhzgZJhi4xPzNwFyjrW6ROzVpJtoliUP%2BgjeEjV4%2BsECeM4NEXPOe0wkHiI%2Bq9L%2Fnv0HyIfYMyd6TGCfwteTYa%2BWy6OENoCpNlk6So7%2BnEYZ4MQ3gMdoZBMzk9vHlgqv80iO43q5Hfc3Pju0PNR8HwhD6Ndi3S0Vg4F2OvFUz8%2B4%2FmOdAij%2B5nVZwRBMFYww6mwwgY6pgFlq2%2Br6oE9nQrtwozriMzN4Nwy%2BugjtIVeinyTO9vljj3EOmodMEuKOiRegg11obTJ0a49EoZoNJMotEN5kdWEtN6w4ArCCEXi9kpqS22UwPQ%2BBHHxhnVqzRXp3sZyz67iKtyUsmIU6IQqRLzP4Fa2Xf8hhJlW%2BcavIIx949uzYPopgt26Hq3qXpozD82gASCD%2B%2B7e6lkQcpMWzm39JjnwXFxNTKsa&X-Amz-Signature=70b991c94c79b9df2fd728b35c54ca6f294815f24daa2a9a4ee52cecf80f9bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6WQKNB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCdAoxGrgEHUadyQpMTQF%2BbcN7QlbYyuaz28EHdk0UTmgIgURNJjDUibUmgpL1SZQeG9nIJhjJL9NmgtPG6O3uxvjgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC2gs3B6TvEOl%2BwhESrcA1eqRbbhkqDe7nA4%2Ft5ftFy0nV%2FW9yYsBad4WapgaPnjtb1mX4uo3sOWtAANrncXruJffjyT2ofcjatqkEEU%2BvQZzmtqmJd2RQfZNllREaJ5koNRcNsw759ryJ8HxpkjB4yfEtotcI8SWEE4xcdd5VB3KE4R0BKz7sGBbIGoOKW902soZB22wm1pi1X7okEgKrRQN%2F5nJb0u74diqR86ZQiOMrim6NJPvZyK3JdH0tNFfUewnEB4rdzOoYsoH24wa1HOzi%2ByufB9QIr3Q4c2yKE6QG66lGbVkomeelABZhhdcHxuzfuMHWwfwH0Uqesd1xiAElToOzb1SEW85kJUiH1i1LizTcFAEqx5bJSfFoYtmhkjd45XAupFY7q2MImDnaqelySZlVu1zE6E1cyuZjo3Lj3DBkTAYMgNn6ya2LNX3SbgKlbuqQ9BlCs6X0cniQFYPMGUW2O2z%2FYMuKAMwiXb4yg27A1yCYPG4YHYx2UcS466Bi%2F4CgtqUHKnfBjD5Y36qNlVSIwMCVKNbl%2BBjhn23CFLBbESVstZ%2BbiLRCQfI0e%2B2Mb4hkqm6AgF5e1yEGg6Lrb4fnxpYM1sR0Yem1SNT6YpLBYMgybdnUx%2F8QNQWD0%2BcrRKR51NmYXhMOupsMIGOqUBP6lWHjRGAw47gh1Klk%2FxOqQQ3%2BwTrMUM0juP7%2FpYMmhgM4DL7k0FE%2BOCHOmWDLhx398zNrxycXqpujZDVfIoNoQkhnelX3G7if3GMTeeS%2FH9y9ynUFKyluoZod2qT3eg2dfifrHy7YBYRjUSttSib9jl0zZFIDDqR6V0owbaD%2Fn3eqGGmDN688X3o5VtC9NqU7iVFv%2FC0yk%2BawOU97k9TYbZ8s19&X-Amz-Signature=99c191650aa5574435567dcd3d40cc55a3f996482a03406ae98e72d649976213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSU5NZT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM10ahpbPOSu5RRc7KV%2BwWE7h1AQttdy7Lnq2OPWYoSwIhAJT67iO4xs4ZTB6XxYKAqTzZcsVKPtd5AKmFGltTVTgSKv8DCBUQABoMNjM3NDIzMTgzODA1Igyu1wKITxnWx6vVXTwq3APJAHUD6GmBgsxUD78O9RFr39g6ms8NoWoCpp6rPtl3XZ8%2FQYOY%2BEI%2Bq7V8LdiMMELdEA7uQbSNRs5CCQIhuzdvRlUAIT6fGjmYuDDl9RBO%2FW9v2E10gbeAK9z7NjnemyLEwWfBnH7Q9iqlScmXe0%2BXoo4oxmn2M7KbBFc%2F9C2E5cMo89jBBMj2O64%2F6lhKewpEnG%2FiKR0KiEcm62LzlkqPXoLjjI9abR1wlhYyKmAQ4ANdaUp1fOznXKefSJXn04SGlAUXvh4w36B7T7P66j%2FzY%2BDk8gwfteaToYfGmmA9b4RdfcCYnz%2BWZSG2NjtkjimiAQh%2FF9nq8Agbjzj8olRFs4B0zBeZTG%2BRJsGuW%2FmF0nwwlF5sRvKl5DJ5kOINlyRaIunRthSwpjcGIFJN77UJS3%2Bm9r3grDefawkuCUtmibd%2FhJpmnsJcy%2B%2Fe%2B%2FrRmqZ6VfmZ77ifHGnVI7GyoNr97ekX%2Ft%2FNerYUR7irI7iLpJxghieSOl%2F9pANiIvUD52PHMXPkzY64gcUZK2Upc3MiZhuHYZs2T3Dq2jbM%2Bl7Yyfc1bvrAWKZjVv8pE66a8%2BUrGgZnAw0NdBfQcWVNHjOpg6QtuErXkGuoYHk%2FGFc97RmRjhbOw54VD4mdzDCAqrDCBjqkAWbHVNTMK%2Fk4x8G2%2BDgl0tQShNeHPfk0XkRA%2BGo%2B9ePianDDWRZrGH7ODBnyanYdLW5grauV2Am%2B1kY2z5BTZsUjhQtRBNphnS3WuL3PpZ8yWzK4FayCy0Hm6rkKzgDcU5pOKN%2FcsArs8ApReMxZ4EQiIzzuR9EIAJfHzXCJ9TG7G3lCdHXcgx1oTetdvfyTeGLmGyNkGmmRzPHVqKpPtMbiKnET&X-Amz-Signature=0ab8b671776f6f1e21197103946dd85a6a9cfa5b2a4b585866f59f5229d7008d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
