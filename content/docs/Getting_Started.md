---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y446SWDI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDisE%2B%2BZKxHqWjYi%2Fg%2BMP6KhUu75B%2FP6bwe22A8s5bsKgIgTDtk12p8KrcKlKlYYNlSi%2BxjEoG8CWtzkWBMgH%2FJnTsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDixGOw4vh5hTm7BByrcA91uHadPolZ7pOhzL7GxxoL6BiU8dNV4cAeulqcRRXE1sCj9O2dQ6yNeWjHc4Wasnw9TNabidln7h%2By8XIz8s8lqwaGpYPBgn8xt%2BJffxdN73IzupAZCI0WEXC%2BrQNG8ImPMOIiOtBVBuduosewq8F7ZpqeLDwLC2MWaXE2EY5U4a4CumtUKNEKueTCLBtQnOKCueCa%2BWF996moqt%2B1ebhyhve893Xcr5XK52ElkwY4%2B6Fvo%2FqbDWal3EXb96ldY4YKhZWyxSBJMQHwfNKhfZ5i55esxqrYdGbMGSrte1FDFGcwtufwZCxzJJjPN8YlortDIF6Az0UG0m00lfANN3MkFYOblTO0BctYIk2h3qfPJ7dijaKgJFTqcVsk7BFw2fE95iKB6GB6GCKVyX4NqmrbibaAyswBYebmi8ktDar3bM%2B8EmWGz9NpRf7OuzSNvcaVn5QL%2FLK%2FLQb3KSiFEK%2FR3PeXsd07Ia5vXTVHrR%2BV9HHjiVf0TCF5HbbVrOcus8xycDzeHWje5NNvbKPBs8NtjvGVefZO6MjSJJ5rr5koExGwUcsekR7ICVbYTL8q7I5EnzuQdSHmiV68Z%2FLBIaMpyntOLmXVyqK591goZbSAERD%2B8IEG7jt%2BKokhtMNf6tL8GOqUBHgZN%2B2LANfVxJs8K3iM%2B0jNSe8XKvyliRi5JmmmrHn%2Ftvtfgmywk0CYwZ2JZHSuLL50Pq55QkvU7%2B0hND%2Ba2va3gnT3RsC4x%2BTjDJ%2FhZy90Ayo%2F%2FcHAGBRXDyvnkVd0OzgFWjrDZlWpMTj5rEoFq1ytkM9mwOnaJkqMVFGyure4EZLo30gy3gZwOIsL77JEU8WOWguFTy4tq49V%2FneNn6mdg27sr&X-Amz-Signature=3a16df7a39514003e5dbc51ce8b05cf2e846b36fd3aa6e34c8b0d33f2251c9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y446SWDI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDisE%2B%2BZKxHqWjYi%2Fg%2BMP6KhUu75B%2FP6bwe22A8s5bsKgIgTDtk12p8KrcKlKlYYNlSi%2BxjEoG8CWtzkWBMgH%2FJnTsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDixGOw4vh5hTm7BByrcA91uHadPolZ7pOhzL7GxxoL6BiU8dNV4cAeulqcRRXE1sCj9O2dQ6yNeWjHc4Wasnw9TNabidln7h%2By8XIz8s8lqwaGpYPBgn8xt%2BJffxdN73IzupAZCI0WEXC%2BrQNG8ImPMOIiOtBVBuduosewq8F7ZpqeLDwLC2MWaXE2EY5U4a4CumtUKNEKueTCLBtQnOKCueCa%2BWF996moqt%2B1ebhyhve893Xcr5XK52ElkwY4%2B6Fvo%2FqbDWal3EXb96ldY4YKhZWyxSBJMQHwfNKhfZ5i55esxqrYdGbMGSrte1FDFGcwtufwZCxzJJjPN8YlortDIF6Az0UG0m00lfANN3MkFYOblTO0BctYIk2h3qfPJ7dijaKgJFTqcVsk7BFw2fE95iKB6GB6GCKVyX4NqmrbibaAyswBYebmi8ktDar3bM%2B8EmWGz9NpRf7OuzSNvcaVn5QL%2FLK%2FLQb3KSiFEK%2FR3PeXsd07Ia5vXTVHrR%2BV9HHjiVf0TCF5HbbVrOcus8xycDzeHWje5NNvbKPBs8NtjvGVefZO6MjSJJ5rr5koExGwUcsekR7ICVbYTL8q7I5EnzuQdSHmiV68Z%2FLBIaMpyntOLmXVyqK591goZbSAERD%2B8IEG7jt%2BKokhtMNf6tL8GOqUBHgZN%2B2LANfVxJs8K3iM%2B0jNSe8XKvyliRi5JmmmrHn%2Ftvtfgmywk0CYwZ2JZHSuLL50Pq55QkvU7%2B0hND%2Ba2va3gnT3RsC4x%2BTjDJ%2FhZy90Ayo%2F%2FcHAGBRXDyvnkVd0OzgFWjrDZlWpMTj5rEoFq1ytkM9mwOnaJkqMVFGyure4EZLo30gy3gZwOIsL77JEU8WOWguFTy4tq49V%2FneNn6mdg27sr&X-Amz-Signature=79884f97c4b8378b734661af56511bc4fd9f826bf762ce15aa2060387b299200&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6GO3BR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDLG9WtCz9p5AuRkQ7cS2lXb0rdpFCYxTAXBXIzgK71ugIhAKoHSNCvZgjCTs2FYi5vs8KWjVPxONVVGUzQHoH9jG%2FdKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6mcOfWnABbJ4tb2wq3AP5rTE2xwpW5EO6dWuG8vYvlaamIhE9%2FFCn6%2FY3sh%2FOHr309xI3abY5lKqT9AxtyV%2FPw9bCv0GJ6Ui4qATSxBPqNbng%2FPLKY1hWHpZgzHP6ZVe%2B4zRB4ZrS2PwoQf6kiZJNcrrULOWjt6gX%2Fh%2BXJekgFAz9Fi1kkro09Ue84nLrUSu0hV57npyYuCrKOlZ8GguvZqW1auwBCeTh7AwgPQbdYgv8O2ZOaKb%2FhHab0GLd8CuWhCOtnwFWnhgVyCZOB%2FDJg2IDZTwYUpju1W8fsH8Df2q1NPHHRmJDUR%2FcGtzXbIvNQ7Xw0jK3av4XSW4BUB2QdSxMR0Riwk1TfuKldZ9nskjZnSeZ74zPrEADu1s69Gih61Iptvlr7KPlH5Thu3j5w9DgP4DnUQa3tc0ZQ74j0WJEMOVFqKbBzrVZHUiqVW0BGULs8XPy7bjK2sv8imEIEe8G9C84lvqJyZIz%2BUf0acPx5gGw2dzMs63B0MT%2BT89NNj8rslur5ur03tKtw5jOtaD73tvm5yZZYRo2LEH%2B4zQzR7cQZtV%2BAzMSc4NSLgYte%2Fq3ABLX4s%2BCSbkE5ynxpiDddxJ0SZU8SZAMocP9pyd8K%2B4lAjSSAL8ZHvWGsxluPHubi9oJ%2BBwDrTC6%2BrS%2FBjqkAZBsecncVzjBvG%2FV6OUeaBJ%2FnjsSlCG72NzXziF1p3OPbvHDbib4wurlo0TWjVtqL9PLanFArmGsPrshkZY5e7J6VLE5QGEYwBfJ3ILE8uUkMNeW4Ohp%2B%2BgD4hfz%2FOQWwPl1Qrq39Rpk9bNzRculdGypF%2FOPgnG%2Bjydt0U5r%2FsijRxJ5UlZ7suNcsr66VjQk685LI29zxJlw1XoJ5SB0m2tY2Aj6&X-Amz-Signature=aa6127a20f6595ba303b50adf7bbddeec8ea0ed98bb0f8181663aac52c5bc662&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7A4JNTB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICkK8fDU4Dr3epM5uX9e2EvEjXhNroGU9IC8lQCTHvTuAiBQYPguafP7t94g1av7PK3zlib2WLHXqZCKZP8KgdGU%2FiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxAj2DDDM907TjnfKtwDvUln7W8d9LvYC4MwmzKJCE5l0cH4KgQNhLQCtGs1eV2Syv0jqVqRLbeyo%2Bb1qSAJh7UQJZgyHmJUgR%2FD2doPS2PO%2F9z67OMcwEAcOV1C1KLZZtJDBsCQ8hFwBPLqHmZZrQY5SxxlPa8iIPhZ%2FxtyoqimuZpl%2B1YRHzoxqO3O4LbY0Vj9HMH2lqEsLUyb3uXxmcU0hz2NQMCVPg2jTKypyZqKT8xHVVf9B1nsHLhx7ErA4P4eb10k0hoxr26iVcS4BiDGj4YWn9%2BeQm4FwKRvWtFfMplRHiBI7DvfMlQI%2B7LnMlp93KfSvSIkOGqBGxYN%2BfZaiCptBXNJX00wlB%2F0AJSkPwUxoLaseZ7aF6tUG9jLed0BZyWXNvNzQi74OUFV40LpkMPzsXEbLE%2Bv%2BbmkD3WbeNP44c%2B9k%2F1EjB4fp4IM3C2pmgm6KjNfrBQ3%2BToDReAKf0AGjAeI2M6o5hxcVeNZS6HeuVrpDpFwzMlA5tz37U8Rilw3cWib%2FYYTEzJVvLtnMlTa1F8umS0VwAX7CxPRe6lWHmeIxWAf4G4y3JKLCxJLXtArjyGhNCNf5m%2BLmx7pG%2FboG6cyEjg7CpjD7WoROIlUDDrGiJMhhmcLq9AcCfOLmkgmbdL%2Brd0wwPq0vwY6pgG3ZF8H9fQ6Yc04lkvkbjY6FMoh53UhwsreitYaHq4%2BtFYxluttRE%2F%2BCmN1WhYfES6B2lWkyCKiP9qIXC4JKMUNITff8EV1NrtzYMUGtG%2Bc3xBlVCI2JeK5yQHXi%2FLvgXOmGvCSXIxXpeKsUKURixsaGqCtlkoFJMVDaNqB3BtS1gB7CtzpFLBoNmSwwnqjc4kBuXarTVyDM6C3aOVd4TG6fTS0eMVC&X-Amz-Signature=c5df43257782b9069676b46520e0dddfa5d3bd70f150409c669021f96168924f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y446SWDI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDisE%2B%2BZKxHqWjYi%2Fg%2BMP6KhUu75B%2FP6bwe22A8s5bsKgIgTDtk12p8KrcKlKlYYNlSi%2BxjEoG8CWtzkWBMgH%2FJnTsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDixGOw4vh5hTm7BByrcA91uHadPolZ7pOhzL7GxxoL6BiU8dNV4cAeulqcRRXE1sCj9O2dQ6yNeWjHc4Wasnw9TNabidln7h%2By8XIz8s8lqwaGpYPBgn8xt%2BJffxdN73IzupAZCI0WEXC%2BrQNG8ImPMOIiOtBVBuduosewq8F7ZpqeLDwLC2MWaXE2EY5U4a4CumtUKNEKueTCLBtQnOKCueCa%2BWF996moqt%2B1ebhyhve893Xcr5XK52ElkwY4%2B6Fvo%2FqbDWal3EXb96ldY4YKhZWyxSBJMQHwfNKhfZ5i55esxqrYdGbMGSrte1FDFGcwtufwZCxzJJjPN8YlortDIF6Az0UG0m00lfANN3MkFYOblTO0BctYIk2h3qfPJ7dijaKgJFTqcVsk7BFw2fE95iKB6GB6GCKVyX4NqmrbibaAyswBYebmi8ktDar3bM%2B8EmWGz9NpRf7OuzSNvcaVn5QL%2FLK%2FLQb3KSiFEK%2FR3PeXsd07Ia5vXTVHrR%2BV9HHjiVf0TCF5HbbVrOcus8xycDzeHWje5NNvbKPBs8NtjvGVefZO6MjSJJ5rr5koExGwUcsekR7ICVbYTL8q7I5EnzuQdSHmiV68Z%2FLBIaMpyntOLmXVyqK591goZbSAERD%2B8IEG7jt%2BKokhtMNf6tL8GOqUBHgZN%2B2LANfVxJs8K3iM%2B0jNSe8XKvyliRi5JmmmrHn%2Ftvtfgmywk0CYwZ2JZHSuLL50Pq55QkvU7%2B0hND%2Ba2va3gnT3RsC4x%2BTjDJ%2FhZy90Ayo%2F%2FcHAGBRXDyvnkVd0OzgFWjrDZlWpMTj5rEoFq1ytkM9mwOnaJkqMVFGyure4EZLo30gy3gZwOIsL77JEU8WOWguFTy4tq49V%2FneNn6mdg27sr&X-Amz-Signature=b317848b9a5a8bd2fd8088e8f18182a088bb1f3d42c67a75c9ce02260f640cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
