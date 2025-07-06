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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5TAGRA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICxNocCU7QlwvTq%2FoyfjNu0ICrHE2eJZKt9YZhsKP8NvAiEAiJIz%2F1V28Oly%2Bm2ejq%2BRbsAtwAwGvJCTJs1eyERLFcIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHJoy0%2FCmIFIiq7KFCrcA5JMDBS8paZfAaM1TohL%2F7iaMUCE%2Bwrf3KgxGm2B2%2BDaMYB0df1IcQKjVg8PWCt3FycWnkzEZI%2F3a9aW3YjywMAHPwlafoWi6InKdsdtuC8F08SjX%2FjminQo8NBhT1UjKfnGtB6cHVqN242ZzTvigPLJPGP7f2djVUEVslVC3rRCkfwyF7tGFSAqhcpSiiYDs9hoCVBA0sEcdjLXphnQ7fDj66fcFONqRFYvw%2BrKvLrmCDhIpJGz2MRLmihU%2BzxYAHC80E%2FICw3q8fccdQteQ7HZDPTmZnS0Vbp4SLg5Sx7Ms%2F010IK8LjqthSxYzwQd6xN3KreQBLa8SUs9rGaMrIEl7RQx3sl4B94kaLwQ0%2B%2BKgRMfGBuQwOXSWXmcaqrTYElG82mCLx5voIV3kmkjVsDM817cxhO8DbAqIbRXelGdZYa4GopStgcfCJc15N8WoJJZiuS4KWnQFZDi1KujTVfi8TjAATXMnawMXAfbAwzU0gHtGPKrvpZccx7nMXRVq20gI33FgzWhTP%2FkDkgs4fPeM4Pk%2Fp4PSNr4GmDaLgxOkRVLs1reYH9up1V3bfqut6mQ1pkGGAGGAXB72dPl9WaXk2drH3bHkactAMDSTvHLWJACdGd64pbnfSImMKnOqcMGOqUBeg4BVmBlUvVpTDUqg%2BDXNCcR%2BeBEv5mFy79K9KFUYJo00sFzbdC%2FapuKqQt7xXJo15bg4%2B2rhhiQ2T8oppSf26wLjS%2F47jOc89g9epVLJY%2BUDk5GvXxTucT1dU0MgLWEXTzzKZQFCBi%2FRmfbrKhtrKNcd85osrrpN1es4MFLo1MaH7w0rEg36jMWT9jUWihUrzKvUKqrE9oMGGT7I6cnSbdajqME&X-Amz-Signature=694bb0a8eca76f67946bcaf6a1e4d6191c29367a60e6232f18831cd455f45617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5TAGRA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICxNocCU7QlwvTq%2FoyfjNu0ICrHE2eJZKt9YZhsKP8NvAiEAiJIz%2F1V28Oly%2Bm2ejq%2BRbsAtwAwGvJCTJs1eyERLFcIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHJoy0%2FCmIFIiq7KFCrcA5JMDBS8paZfAaM1TohL%2F7iaMUCE%2Bwrf3KgxGm2B2%2BDaMYB0df1IcQKjVg8PWCt3FycWnkzEZI%2F3a9aW3YjywMAHPwlafoWi6InKdsdtuC8F08SjX%2FjminQo8NBhT1UjKfnGtB6cHVqN242ZzTvigPLJPGP7f2djVUEVslVC3rRCkfwyF7tGFSAqhcpSiiYDs9hoCVBA0sEcdjLXphnQ7fDj66fcFONqRFYvw%2BrKvLrmCDhIpJGz2MRLmihU%2BzxYAHC80E%2FICw3q8fccdQteQ7HZDPTmZnS0Vbp4SLg5Sx7Ms%2F010IK8LjqthSxYzwQd6xN3KreQBLa8SUs9rGaMrIEl7RQx3sl4B94kaLwQ0%2B%2BKgRMfGBuQwOXSWXmcaqrTYElG82mCLx5voIV3kmkjVsDM817cxhO8DbAqIbRXelGdZYa4GopStgcfCJc15N8WoJJZiuS4KWnQFZDi1KujTVfi8TjAATXMnawMXAfbAwzU0gHtGPKrvpZccx7nMXRVq20gI33FgzWhTP%2FkDkgs4fPeM4Pk%2Fp4PSNr4GmDaLgxOkRVLs1reYH9up1V3bfqut6mQ1pkGGAGGAXB72dPl9WaXk2drH3bHkactAMDSTvHLWJACdGd64pbnfSImMKnOqcMGOqUBeg4BVmBlUvVpTDUqg%2BDXNCcR%2BeBEv5mFy79K9KFUYJo00sFzbdC%2FapuKqQt7xXJo15bg4%2B2rhhiQ2T8oppSf26wLjS%2F47jOc89g9epVLJY%2BUDk5GvXxTucT1dU0MgLWEXTzzKZQFCBi%2FRmfbrKhtrKNcd85osrrpN1es4MFLo1MaH7w0rEg36jMWT9jUWihUrzKvUKqrE9oMGGT7I6cnSbdajqME&X-Amz-Signature=d8d95481a622805fff4dfdd251d40e8428026eb370f30399451132979c005455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5TAGRA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICxNocCU7QlwvTq%2FoyfjNu0ICrHE2eJZKt9YZhsKP8NvAiEAiJIz%2F1V28Oly%2Bm2ejq%2BRbsAtwAwGvJCTJs1eyERLFcIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHJoy0%2FCmIFIiq7KFCrcA5JMDBS8paZfAaM1TohL%2F7iaMUCE%2Bwrf3KgxGm2B2%2BDaMYB0df1IcQKjVg8PWCt3FycWnkzEZI%2F3a9aW3YjywMAHPwlafoWi6InKdsdtuC8F08SjX%2FjminQo8NBhT1UjKfnGtB6cHVqN242ZzTvigPLJPGP7f2djVUEVslVC3rRCkfwyF7tGFSAqhcpSiiYDs9hoCVBA0sEcdjLXphnQ7fDj66fcFONqRFYvw%2BrKvLrmCDhIpJGz2MRLmihU%2BzxYAHC80E%2FICw3q8fccdQteQ7HZDPTmZnS0Vbp4SLg5Sx7Ms%2F010IK8LjqthSxYzwQd6xN3KreQBLa8SUs9rGaMrIEl7RQx3sl4B94kaLwQ0%2B%2BKgRMfGBuQwOXSWXmcaqrTYElG82mCLx5voIV3kmkjVsDM817cxhO8DbAqIbRXelGdZYa4GopStgcfCJc15N8WoJJZiuS4KWnQFZDi1KujTVfi8TjAATXMnawMXAfbAwzU0gHtGPKrvpZccx7nMXRVq20gI33FgzWhTP%2FkDkgs4fPeM4Pk%2Fp4PSNr4GmDaLgxOkRVLs1reYH9up1V3bfqut6mQ1pkGGAGGAXB72dPl9WaXk2drH3bHkactAMDSTvHLWJACdGd64pbnfSImMKnOqcMGOqUBeg4BVmBlUvVpTDUqg%2BDXNCcR%2BeBEv5mFy79K9KFUYJo00sFzbdC%2FapuKqQt7xXJo15bg4%2B2rhhiQ2T8oppSf26wLjS%2F47jOc89g9epVLJY%2BUDk5GvXxTucT1dU0MgLWEXTzzKZQFCBi%2FRmfbrKhtrKNcd85osrrpN1es4MFLo1MaH7w0rEg36jMWT9jUWihUrzKvUKqrE9oMGGT7I6cnSbdajqME&X-Amz-Signature=e35c771280c0a2769c4d7e8245bc614aa3f8f05baad56fc86670441abcd133cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULXU7PN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICaupPURkfol5o06GhZKNszE4vUHa03EQWFkYDztQVVqAiEA%2BNIOU1Fcc8X6QEeyYRZ0ivM6WLK5dI74H6s%2B0DGIzNwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKm%2FrbjJuO509PzLAircA8DipaA4YQDjt6gFhrCafimBItSm7yInErOh7hGLcdvS9pqVeLVjkEZw92SO%2BdbOO4AlDVAmYov%2BOZpj157ur8syjIrH%2F5euq%2F%2FL%2B1AWFEnu%2BFEOdJE0XJu1dY5r89YKHXl4hoKi4PZIT6OTjGLx2L8GMW%2BKAUQ%2F2e%2BM20e9eWL%2BDfS36A1CCia%2Feu00M58Nhv4OLH%2BD2UGjH4FGWUKVeGeUkPxKm%2BUmEAWem%2FCpfYoOeOw43e57EpNoVss7Katk2YJO4UiqP0mpBofuIOtBCSb%2FJ6ahCuJf6pSo3I8vL%2BYwWwjV%2FvaF1wKuTwpKIC0zoftd4ciWQNB3v1Yram1AX4yndybbgDUmg8RSrutVTwxAABKAEZPXQ8SRDQcHDIhMUlxEu%2BTGrsc9PLpG7UDz0ewbStPCKrYxok%2B%2Fklr%2BqgL58s3kb0vVwXxuucKqm45eidJzncONBYXOuk7vhjGqlaAPrIRyA8YeJlLuawtRJRt71DQ6yGzMdqJYjSFWyDHYHi4hp%2B%2FnjtePiKFMLgpaBCdNrE1JWTWUMpBT6iRDb0zkvz0dUBkSQKfKemuSMfzU6qSEOfHNqOFfaAkB0NcwoSWBgiIYstGEUQE30Mp9Z8JJ3keO6kZ3gqbUTdf0MPTTqcMGOqUBbB856TaXLM0ib86DsFOdpjn%2Fzgr756EVRKqBW2oE2EHFvNFGFeqDKPM3nTagH6vOauo%2Bqf%2BgXE6oZOOWFWuA0llrEwQNcVHRgtFQe4aml9xZthHkayQ%2BXnhpqnZlD%2Fh7rVxdomdA2vQKjPlFVzn1ZcR5ufuiVZzgDkEFp5j43JBAWtvzVdspS%2Bi2IK6zH%2FcOGE%2F25ZJ0O759TERbBzhNuIVRgtGS&X-Amz-Signature=cc23815209c79a2b9ba4673be548853c463c2af3e00356ad5436fa402f8500d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAF5RL7H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIA%2Bq3UIlC9ua9O6lm3yYnoqGKjEhjLH9hrnHAtSzqJ33AiAkbox8SbytJWHXWjNgu7pzK3S4Z%2FNXJgRNCIGyx2zGaCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMaoiDolQt3IGpn5GtKtwDDqpRnZPoQFn1b8NLGaBNTSqd4xYCf%2FJNwK%2F4JIrxfu%2BtOy34c0O77BtUE8JwRh2DgF%2BYno%2BmNckhm8610LLvIu7RzXBPkGYS4TF1U1GapoC0Jrk93HVxL8MFqnhMOriQjkSK925aAZX0QMPG9njnFBwEzoT92jE%2BlntyL2Z7u4YRt%2B8bBS2kO9JFZ764uRjlW5PygyuSTS5MTv5rVcYetkt7O44gdkTxyzkSODAyBL5M%2Flb8SNBKxI5rsj4lU3VHP8QhweGI5JHzEOW6RiUM085Rwzy9wJ%2FUjAfsA1nSC7hbynxNL88jkbqtjOz85I4AamIQbjsm6Jh37i4Ggy%2BPoY1WnIB4rnC5ppH1FLToHbK0wPTp9f%2F7pOvvdH2c4ykGti8k2VMkUOnCo0tHGOhRySjVxXgQtTfW7A%2FJWTNuoiwLUoyNSFECKJ4YBxXGX655VbZEaUKiCQ5eDgy6YMJM6TQGeNxZ%2BIOLLVL6joa5GJ90xSucAfdVrxurSxv%2BTgJyfJZJ9rnpNkMsuwTN5ay%2FWFkWqiNw05iVujHeSxU3Tw6gIxtvN%2Bjz5n3tRBhYHSZwei09iQM7ChOY00tzJOxAVudrhv5mGihiPo4dyay%2FUpr2u9vttEdieJ56XfswqNCpwwY6pgHgfMrhK7LKBb30gJJ1O%2Fs2IFEqc6MwficohkasVDPMPk8YPmj6vde4VnCI8uOJXp5Rz02IpEcUBi2KwuLtDC3KmumYVnO4bND0Wxpn3hA7Bktr80DXs%2BHR6bhvvt2TDvL2nnVkoULHYO%2BpqlWa9i4ujVoUW6xy4Hwgoj6VhlmDfbQtK2U48K0evL4vqk7RrFpIAbGqDtsrjVbAMXbZkOYq7%2Bm8ZmI5&X-Amz-Signature=0f7495be0bc33b7b9f6f9bf541107565c64378970ea7b41ffe52f4d14aafd531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5TAGRA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICxNocCU7QlwvTq%2FoyfjNu0ICrHE2eJZKt9YZhsKP8NvAiEAiJIz%2F1V28Oly%2Bm2ejq%2BRbsAtwAwGvJCTJs1eyERLFcIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHJoy0%2FCmIFIiq7KFCrcA5JMDBS8paZfAaM1TohL%2F7iaMUCE%2Bwrf3KgxGm2B2%2BDaMYB0df1IcQKjVg8PWCt3FycWnkzEZI%2F3a9aW3YjywMAHPwlafoWi6InKdsdtuC8F08SjX%2FjminQo8NBhT1UjKfnGtB6cHVqN242ZzTvigPLJPGP7f2djVUEVslVC3rRCkfwyF7tGFSAqhcpSiiYDs9hoCVBA0sEcdjLXphnQ7fDj66fcFONqRFYvw%2BrKvLrmCDhIpJGz2MRLmihU%2BzxYAHC80E%2FICw3q8fccdQteQ7HZDPTmZnS0Vbp4SLg5Sx7Ms%2F010IK8LjqthSxYzwQd6xN3KreQBLa8SUs9rGaMrIEl7RQx3sl4B94kaLwQ0%2B%2BKgRMfGBuQwOXSWXmcaqrTYElG82mCLx5voIV3kmkjVsDM817cxhO8DbAqIbRXelGdZYa4GopStgcfCJc15N8WoJJZiuS4KWnQFZDi1KujTVfi8TjAATXMnawMXAfbAwzU0gHtGPKrvpZccx7nMXRVq20gI33FgzWhTP%2FkDkgs4fPeM4Pk%2Fp4PSNr4GmDaLgxOkRVLs1reYH9up1V3bfqut6mQ1pkGGAGGAXB72dPl9WaXk2drH3bHkactAMDSTvHLWJACdGd64pbnfSImMKnOqcMGOqUBeg4BVmBlUvVpTDUqg%2BDXNCcR%2BeBEv5mFy79K9KFUYJo00sFzbdC%2FapuKqQt7xXJo15bg4%2B2rhhiQ2T8oppSf26wLjS%2F47jOc89g9epVLJY%2BUDk5GvXxTucT1dU0MgLWEXTzzKZQFCBi%2FRmfbrKhtrKNcd85osrrpN1es4MFLo1MaH7w0rEg36jMWT9jUWihUrzKvUKqrE9oMGGT7I6cnSbdajqME&X-Amz-Signature=469fe24e1b4defe77b9e4063b2298841d6eab269a90cbe3d7dc859d9bc5668d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
