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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPBQVXR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBD6Vw59hQGWz1V0L1IGPF%2BotuenKo1%2BuWhvapj0sZPEAiEAsor0hoi1kOFhmgCUXqmL2LXs9Lse8%2BMq3Y1fH5QkCS4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGL5E1YshzD5nXHlyrcA3uPBS0ZSUaUZNvTwyWO5eYqsF58JGI4nt2dTCnDeXB9CwHGpFdsI3KKrWk248ikMRII5nLGCKO6LkjmuxnEbPv6AWL467PNCfl52UnbTtb%2BKdsTWGB7oFHtIE1mLBqyYHnFTrE5qkGRAXdyMoVkDOP22TjiaxqHwykhjCiWSb7BQR3jjgmNtXDZGfartwfGNW0Gw2jsZhzon8%2FSdHqSuqgN5WV2fWKW8ndxnQ2wAA5TU1w7xb9AT7kl%2FX%2Fu3VgjqgJtM9%2BU6NqChFR2FpVVx5oE%2BaPB4i60eKCe8WGGFQfS4BwI3uRT4ANquKjwMl4acrUaLeSxxystMFZJh0AfnMB2MAEGo06FKwSrh5dHQ4d%2F6iBdowB8aiuJ1WLYBrIkXUKeKiqnHc2DkuL2yMAQg4%2F8sLHJ26WIAUiVYQEr4BrfopRAZ4%2F1wFlr4Q47wzsDzykWz0AbVvA58GMTJHysWOX6hPL1509S4LmwJqHxDCP52%2FfiXB%2FoXSz0ZK%2FRsnno9%2BIiiE6OCY16BJRrqnE4KYk%2FNZQbF1wjJGCIIVUHZr5vzeyVooG%2FEC1RGzInXQCf%2FNxcZYeZV0YVvxpdiez6paMcL6sthMp1biwot8enHJOEXuvXb3M3Q1%2BwKdDAMPav9MEGOqUB9PDUN3XXir%2B2jMtTD6ICJBUKwZoWVL7BNgomvDwalKnOiNWly5S9zCMD5OpuOwMMxnXWXOImY7lQNu90j0V2CQUl2J7UClOrNSSpmp4CrtGeTlbPLVWCqls1xFG5cXi%2BlCQEjaZLXttnOhnF5UKIXd3eYuKnscHA26kkJZGZd2vXdL%2Fo3tpeeym6SLFP7L1z2jbjiKL5%2FbjNXfaSSgVekxKsxeyq&X-Amz-Signature=c04d5ab84f9c96dfe70670a605db44cf673cc2978ad788781ea22464e6f96f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPBQVXR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBD6Vw59hQGWz1V0L1IGPF%2BotuenKo1%2BuWhvapj0sZPEAiEAsor0hoi1kOFhmgCUXqmL2LXs9Lse8%2BMq3Y1fH5QkCS4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGL5E1YshzD5nXHlyrcA3uPBS0ZSUaUZNvTwyWO5eYqsF58JGI4nt2dTCnDeXB9CwHGpFdsI3KKrWk248ikMRII5nLGCKO6LkjmuxnEbPv6AWL467PNCfl52UnbTtb%2BKdsTWGB7oFHtIE1mLBqyYHnFTrE5qkGRAXdyMoVkDOP22TjiaxqHwykhjCiWSb7BQR3jjgmNtXDZGfartwfGNW0Gw2jsZhzon8%2FSdHqSuqgN5WV2fWKW8ndxnQ2wAA5TU1w7xb9AT7kl%2FX%2Fu3VgjqgJtM9%2BU6NqChFR2FpVVx5oE%2BaPB4i60eKCe8WGGFQfS4BwI3uRT4ANquKjwMl4acrUaLeSxxystMFZJh0AfnMB2MAEGo06FKwSrh5dHQ4d%2F6iBdowB8aiuJ1WLYBrIkXUKeKiqnHc2DkuL2yMAQg4%2F8sLHJ26WIAUiVYQEr4BrfopRAZ4%2F1wFlr4Q47wzsDzykWz0AbVvA58GMTJHysWOX6hPL1509S4LmwJqHxDCP52%2FfiXB%2FoXSz0ZK%2FRsnno9%2BIiiE6OCY16BJRrqnE4KYk%2FNZQbF1wjJGCIIVUHZr5vzeyVooG%2FEC1RGzInXQCf%2FNxcZYeZV0YVvxpdiez6paMcL6sthMp1biwot8enHJOEXuvXb3M3Q1%2BwKdDAMPav9MEGOqUB9PDUN3XXir%2B2jMtTD6ICJBUKwZoWVL7BNgomvDwalKnOiNWly5S9zCMD5OpuOwMMxnXWXOImY7lQNu90j0V2CQUl2J7UClOrNSSpmp4CrtGeTlbPLVWCqls1xFG5cXi%2BlCQEjaZLXttnOhnF5UKIXd3eYuKnscHA26kkJZGZd2vXdL%2Fo3tpeeym6SLFP7L1z2jbjiKL5%2FbjNXfaSSgVekxKsxeyq&X-Amz-Signature=d3541043b460d4e52cf84e660b991ff079df43972fbdbd6b43e3a219844f6172&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPBQVXR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBD6Vw59hQGWz1V0L1IGPF%2BotuenKo1%2BuWhvapj0sZPEAiEAsor0hoi1kOFhmgCUXqmL2LXs9Lse8%2BMq3Y1fH5QkCS4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGL5E1YshzD5nXHlyrcA3uPBS0ZSUaUZNvTwyWO5eYqsF58JGI4nt2dTCnDeXB9CwHGpFdsI3KKrWk248ikMRII5nLGCKO6LkjmuxnEbPv6AWL467PNCfl52UnbTtb%2BKdsTWGB7oFHtIE1mLBqyYHnFTrE5qkGRAXdyMoVkDOP22TjiaxqHwykhjCiWSb7BQR3jjgmNtXDZGfartwfGNW0Gw2jsZhzon8%2FSdHqSuqgN5WV2fWKW8ndxnQ2wAA5TU1w7xb9AT7kl%2FX%2Fu3VgjqgJtM9%2BU6NqChFR2FpVVx5oE%2BaPB4i60eKCe8WGGFQfS4BwI3uRT4ANquKjwMl4acrUaLeSxxystMFZJh0AfnMB2MAEGo06FKwSrh5dHQ4d%2F6iBdowB8aiuJ1WLYBrIkXUKeKiqnHc2DkuL2yMAQg4%2F8sLHJ26WIAUiVYQEr4BrfopRAZ4%2F1wFlr4Q47wzsDzykWz0AbVvA58GMTJHysWOX6hPL1509S4LmwJqHxDCP52%2FfiXB%2FoXSz0ZK%2FRsnno9%2BIiiE6OCY16BJRrqnE4KYk%2FNZQbF1wjJGCIIVUHZr5vzeyVooG%2FEC1RGzInXQCf%2FNxcZYeZV0YVvxpdiez6paMcL6sthMp1biwot8enHJOEXuvXb3M3Q1%2BwKdDAMPav9MEGOqUB9PDUN3XXir%2B2jMtTD6ICJBUKwZoWVL7BNgomvDwalKnOiNWly5S9zCMD5OpuOwMMxnXWXOImY7lQNu90j0V2CQUl2J7UClOrNSSpmp4CrtGeTlbPLVWCqls1xFG5cXi%2BlCQEjaZLXttnOhnF5UKIXd3eYuKnscHA26kkJZGZd2vXdL%2Fo3tpeeym6SLFP7L1z2jbjiKL5%2FbjNXfaSSgVekxKsxeyq&X-Amz-Signature=7a6e889555a1c0fe68a872c7f089519a39880c5b9af504451061a650b586633b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2XADNK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHkyxJhxPEEgyRL6dDrpHgJElSd6rA5nl6Kq9g2i0Tu%2BAiBHsVlloNbulzoLxPpYWM153HbZsjX36UkIJV4zFMMcWiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2Blnuavddaq9xFv%2BKtwDycklHZTJgux4LciXKon4tyG0fzHlVFa4k3VtgdqgvKk2CZGEzQsjHBZBvxpfXVh6sEC7SOEO7ZAlf3dGHPO2gtxChtlQbrvdIeWz8VYZxu50Vw9dqKr8%2FwxsHUY5EGZ%2BkAnnIfbvXf4HYjNFaE61F2iAgTVXjWa%2FGeF950R5%2F6KXbRVX49WKRCXB7SwZwSyKzFkEk0eSpOB%2BmiT%2FqNiYoyaCVkfVA39IhgMt4NWkr3bhR8R3uNyyIqubVw6b6MH9RUOeBLHNf3LPSwNKqkfHL%2FKoOR7aUoNwBwIVeabmgB9cFyii6%2Bzxt6o7BBK2qRHmFH21kOCSn3lw5GQVZz3hxGpx2oNrRaSxFy4gg09er7v1ejGhhdyyZ4QJEO4Z7AZhWkEliIO24KmHFbgIGZy5q2fVy%2BufkCcpAxmW7Z5DjZcD2o8vJ0VxrMqpwiIghf%2BRXEPmOdUENcT%2FcgrunQZZVdISOyzcw3WCcbLoZLT0ga5hnKZR%2F52P%2F4By7CmQMOH1naZXm91jUXMVkySnPe7HxW6g4HVdSaimcc8MtBqv8BMZvUFKoXiYXOnATvUJEkkuZLd2Vf6HQ2B4fbi63H9QiW32s4qhaJzR58nJTgp%2F8WOmvbFNj8WOfi2XALIwsa%2F0wQY6pgF3BFD2Zx3OpP6mWh8PjH9L2ZljLqrN7kVTrZqcyxVGSUzx%2BFQ4cwGDL6qseWGYamcRsHNQKIZxI91db1K9finMgmQNMWVNsfOzQip5a23q3bV8LwMWHil6mxIcXpvIgu3nQbzpjuG%2FsluFLi%2BSDy%2BKP1MzF%2B3%2BDW1O%2BaUL6AoWwsHGBIJ37W8iHMU1D7zGcHKENe7nSv9%2BrSrKbcO1U4T1J5hQHjqv&X-Amz-Signature=bd50e0212f0a725c8d1d29bbfefae311108dee9227388bd550fcd102a1dbbd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WURWJ7R5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC0qC%2FI%2FPeOxqd7eRehrUqoj%2BYrE%2BBZ%2BKsthO8aYxgwsQIgbjZmVL78%2FmoFwnLHsMRHeeTNCDTsDIfZafiUL6BoReQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkJHw4T4UQaGAxaOSrcA5l6VnY0LGbzcX1W4EVvFs8h0u%2Bi4STfHHvr5jzTz8kJm5gpPxMD1chBCMnD3yuxAPREcDTGk6NM8z57e9A5iETjN0XwiTmLgLepz6rM5U8q4jMpwoAADYDFlp43fyi%2BL7R40nwZxauUDEJh4MDgz3JNN9lU0xkrfvHJhD0leOajLP4pqXSeid5TPsk7K%2FsHMuzkglz1l1ZmslqcOwft3qw5DG%2FpWva%2Bk60pGkpBs7q8iQAaopUfCpeMejI3D4vQBaj2YEhAQRHzPSeQa0hRi1X7rPkGWOnPUTdp0hNzsBer2cWuuQKIoYbO5g9fIxXVV%2BBDo0CCabigtjmzjuInBALqb%2B8eEkkD%2BDtO7jB4kSjHkgVpVmgO8HeBPwUYopnHvQiPnzizkoXIM60%2BVFsznTuUbSssgpJjWpjwiwuh%2Bs72jGclY5WW1yiuG7Y0qfbyFNrwbYvjWZquplo%2FH%2BMSpJG1C8xiS55PqbTsA8OdzEpZ7%2F9m5Qfp7PuX9tUDS0TA71lnVZAWMHxULnUjQmE9goO8BD0ChhD%2BaioygEvWr2OXWKyCqDypx1TS1WzaBnismTNqjCnuthrvlzAbi%2BZaJ5kWPxQiUmaL5LxE1UUfY%2BFYsnfERreSFSlQxO2yMJ%2Bv9MEGOqUBxUPY2xgYKGKxSHu7kwn8ZvAPGbzEQ%2BoxH1pDWgneQQjp%2FsH0C8hVlgocw%2Fc81CQoIuVnF41KweBTrI9%2BX89BGQ8YZqUsdKlJuc2OIZDqhSWLCsbW4vZE1qoQ1%2FLYvaee2Z%2B2jbm3gwazKLgFDt8BRQ6La2%2FqZgfpHyOaPtTvXghMp1qF%2B%2F2eBrcvf60IAi6InN%2BJkZQh4tuR5QdgPC74GzSSq%2Fsy&X-Amz-Signature=624bc0d7d865f17d92f3c2bf80bcfb9b60785485acc693ad4664be6f9144426a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPBQVXR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBD6Vw59hQGWz1V0L1IGPF%2BotuenKo1%2BuWhvapj0sZPEAiEAsor0hoi1kOFhmgCUXqmL2LXs9Lse8%2BMq3Y1fH5QkCS4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGL5E1YshzD5nXHlyrcA3uPBS0ZSUaUZNvTwyWO5eYqsF58JGI4nt2dTCnDeXB9CwHGpFdsI3KKrWk248ikMRII5nLGCKO6LkjmuxnEbPv6AWL467PNCfl52UnbTtb%2BKdsTWGB7oFHtIE1mLBqyYHnFTrE5qkGRAXdyMoVkDOP22TjiaxqHwykhjCiWSb7BQR3jjgmNtXDZGfartwfGNW0Gw2jsZhzon8%2FSdHqSuqgN5WV2fWKW8ndxnQ2wAA5TU1w7xb9AT7kl%2FX%2Fu3VgjqgJtM9%2BU6NqChFR2FpVVx5oE%2BaPB4i60eKCe8WGGFQfS4BwI3uRT4ANquKjwMl4acrUaLeSxxystMFZJh0AfnMB2MAEGo06FKwSrh5dHQ4d%2F6iBdowB8aiuJ1WLYBrIkXUKeKiqnHc2DkuL2yMAQg4%2F8sLHJ26WIAUiVYQEr4BrfopRAZ4%2F1wFlr4Q47wzsDzykWz0AbVvA58GMTJHysWOX6hPL1509S4LmwJqHxDCP52%2FfiXB%2FoXSz0ZK%2FRsnno9%2BIiiE6OCY16BJRrqnE4KYk%2FNZQbF1wjJGCIIVUHZr5vzeyVooG%2FEC1RGzInXQCf%2FNxcZYeZV0YVvxpdiez6paMcL6sthMp1biwot8enHJOEXuvXb3M3Q1%2BwKdDAMPav9MEGOqUB9PDUN3XXir%2B2jMtTD6ICJBUKwZoWVL7BNgomvDwalKnOiNWly5S9zCMD5OpuOwMMxnXWXOImY7lQNu90j0V2CQUl2J7UClOrNSSpmp4CrtGeTlbPLVWCqls1xFG5cXi%2BlCQEjaZLXttnOhnF5UKIXd3eYuKnscHA26kkJZGZd2vXdL%2Fo3tpeeym6SLFP7L1z2jbjiKL5%2FbjNXfaSSgVekxKsxeyq&X-Amz-Signature=d606b2da4e85adfcb0e68a8ec9eaa14a40391c6556404f3d2666d83ec1f65321&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
