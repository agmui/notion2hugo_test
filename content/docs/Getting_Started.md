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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPILX2U%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6uyW6uuCwg99%2FyPcYVR2R0VdFcqBeGj5b788qra34sQIgJC5%2FGzddixxsg17QS8bWSRJGQKClrt0kOP9JL2BmHMYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK6AJOpi9Vu0LMzeyrcA3bUxqswXhF4MXorBA%2ByqGEOpfMs0HM4PRsmoPzK3hsVWFCs2BoCLdpFxSW%2BvFcwAZRjQJfcrpy%2FHtodUiYXb3hLaUkTp1UhIi8IMgern%2FUacXznurN1wqoMxnlmfX5NfMILR9N8XXsOPBDylyXDn8vk4wXaXXgbpv1sHVUgdBQufVOGzkBB2ysy4L0MOg2QEgZMSmHYPl7vEJUfj4gi8LkfAS29EPJ%2BUexQ6pieLlEQ6MDWdFd7kzVxXkCO%2BzCce9ZkgZ9eFJrkw53CjwAC6OwDn4Jb2elmI95SSfoETTkHcIF7XzJ%2BoCiQHq%2F%2F8cDSizrol%2FOwogAWeKV03XRdM2vnZDsDxxmKINnANmK%2Fcqi0a7lRuViN2v2sU%2FVKWIun0xfye2hx%2BI2MTOUJHyzFc1%2BtESYlkUr51%2FYPICqATXnfUrrhjmCr8YSIbcRPzwvODAy1Ikesao5lNsahah0kzVY2PRJowJY26nx0MZO6Bs9WDAhqt1Q3bRu8ObnhIKkynv2gF7l3%2F05Qb1FxLjKXA6HwPog0PiIOFLSxtFVokKymVk9aB%2BiIggttsMX6KCgiOk673ZiAxttspmZNMprT6YQ39ft7Z8XSuInRWXpLiBGXx0SzSAXBXkbd1k24MIXdrckGOqUBj%2FSarY2IYUSSDJw4Hp%2BYi1G6DqAl8d2GFdWssFs9UembumwjzJk2gnbiIwb2eFUbH4JT4Xkzlh%2B1mdtdyGSjW0pj%2BT7Y%2BN37Wxq3JYkAKAkY4VGt%2BxQPgWAkMv%2Bc29KKAfs48v28wkrtvD6VgBtNc9q315FZc3N21B9qxJt%2FoP0DdhKZHJPaTnVSFocbd9T%2FCHg7cxBgYN5X5d772TzV2eiCGj6s&X-Amz-Signature=ce0e878a774a124a2f153d616d80c3e09309ba4820b8fd9e35632724ecf92fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPILX2U%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6uyW6uuCwg99%2FyPcYVR2R0VdFcqBeGj5b788qra34sQIgJC5%2FGzddixxsg17QS8bWSRJGQKClrt0kOP9JL2BmHMYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK6AJOpi9Vu0LMzeyrcA3bUxqswXhF4MXorBA%2ByqGEOpfMs0HM4PRsmoPzK3hsVWFCs2BoCLdpFxSW%2BvFcwAZRjQJfcrpy%2FHtodUiYXb3hLaUkTp1UhIi8IMgern%2FUacXznurN1wqoMxnlmfX5NfMILR9N8XXsOPBDylyXDn8vk4wXaXXgbpv1sHVUgdBQufVOGzkBB2ysy4L0MOg2QEgZMSmHYPl7vEJUfj4gi8LkfAS29EPJ%2BUexQ6pieLlEQ6MDWdFd7kzVxXkCO%2BzCce9ZkgZ9eFJrkw53CjwAC6OwDn4Jb2elmI95SSfoETTkHcIF7XzJ%2BoCiQHq%2F%2F8cDSizrol%2FOwogAWeKV03XRdM2vnZDsDxxmKINnANmK%2Fcqi0a7lRuViN2v2sU%2FVKWIun0xfye2hx%2BI2MTOUJHyzFc1%2BtESYlkUr51%2FYPICqATXnfUrrhjmCr8YSIbcRPzwvODAy1Ikesao5lNsahah0kzVY2PRJowJY26nx0MZO6Bs9WDAhqt1Q3bRu8ObnhIKkynv2gF7l3%2F05Qb1FxLjKXA6HwPog0PiIOFLSxtFVokKymVk9aB%2BiIggttsMX6KCgiOk673ZiAxttspmZNMprT6YQ39ft7Z8XSuInRWXpLiBGXx0SzSAXBXkbd1k24MIXdrckGOqUBj%2FSarY2IYUSSDJw4Hp%2BYi1G6DqAl8d2GFdWssFs9UembumwjzJk2gnbiIwb2eFUbH4JT4Xkzlh%2B1mdtdyGSjW0pj%2BT7Y%2BN37Wxq3JYkAKAkY4VGt%2BxQPgWAkMv%2Bc29KKAfs48v28wkrtvD6VgBtNc9q315FZc3N21B9qxJt%2FoP0DdhKZHJPaTnVSFocbd9T%2FCHg7cxBgYN5X5d772TzV2eiCGj6s&X-Amz-Signature=ad8c00f99655bbecee14057b85499bff88068c7e22ee3d2f0ee1eb429e3b29c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPILX2U%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6uyW6uuCwg99%2FyPcYVR2R0VdFcqBeGj5b788qra34sQIgJC5%2FGzddixxsg17QS8bWSRJGQKClrt0kOP9JL2BmHMYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK6AJOpi9Vu0LMzeyrcA3bUxqswXhF4MXorBA%2ByqGEOpfMs0HM4PRsmoPzK3hsVWFCs2BoCLdpFxSW%2BvFcwAZRjQJfcrpy%2FHtodUiYXb3hLaUkTp1UhIi8IMgern%2FUacXznurN1wqoMxnlmfX5NfMILR9N8XXsOPBDylyXDn8vk4wXaXXgbpv1sHVUgdBQufVOGzkBB2ysy4L0MOg2QEgZMSmHYPl7vEJUfj4gi8LkfAS29EPJ%2BUexQ6pieLlEQ6MDWdFd7kzVxXkCO%2BzCce9ZkgZ9eFJrkw53CjwAC6OwDn4Jb2elmI95SSfoETTkHcIF7XzJ%2BoCiQHq%2F%2F8cDSizrol%2FOwogAWeKV03XRdM2vnZDsDxxmKINnANmK%2Fcqi0a7lRuViN2v2sU%2FVKWIun0xfye2hx%2BI2MTOUJHyzFc1%2BtESYlkUr51%2FYPICqATXnfUrrhjmCr8YSIbcRPzwvODAy1Ikesao5lNsahah0kzVY2PRJowJY26nx0MZO6Bs9WDAhqt1Q3bRu8ObnhIKkynv2gF7l3%2F05Qb1FxLjKXA6HwPog0PiIOFLSxtFVokKymVk9aB%2BiIggttsMX6KCgiOk673ZiAxttspmZNMprT6YQ39ft7Z8XSuInRWXpLiBGXx0SzSAXBXkbd1k24MIXdrckGOqUBj%2FSarY2IYUSSDJw4Hp%2BYi1G6DqAl8d2GFdWssFs9UembumwjzJk2gnbiIwb2eFUbH4JT4Xkzlh%2B1mdtdyGSjW0pj%2BT7Y%2BN37Wxq3JYkAKAkY4VGt%2BxQPgWAkMv%2Bc29KKAfs48v28wkrtvD6VgBtNc9q315FZc3N21B9qxJt%2FoP0DdhKZHJPaTnVSFocbd9T%2FCHg7cxBgYN5X5d772TzV2eiCGj6s&X-Amz-Signature=06be96b61f4e97b7af6b27a27c380d30942a5da04d188f3b37de4889cba0abca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6STYVQ%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDb5GpSW1PJQGRJ6KoA5ByzwBGT8NvqKod4O44UqWCbzAIhANuQrZ3s39pX12QBfVZZaU6%2FVGNh4mBWOPvznxLJMBeuKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6%2FZ7oXb9g5o4hIAq3ANfaPrTwQuP4hzITbDRybaEPWgMEmBcBhxWPKlSvahKnDraB0%2BFObeNEYo2%2FFkP8y4lSKTOxmU4lSZlX6dLox8ZL%2By%2BuhKqwvK0tH5Td1lX64VOzG%2Fpe3CC%2FZqAcL4J6tOPiisbAju2SgFLzMgXdIHJAQBpZ7M%2BfNxZloa7dey5m%2BOJ6D2HGHfhTNSdEl0j333E7QxZBP%2FOgXiTxRTfdKmv8xRXNuyQqQsznA6gmpOwNKXYumo%2BMK2xrqLJ0ZPikuj865BPKvBDlG1P4zpbs%2FmQsHK7niMdmdedo4N0nOdMrfotglg2SD%2BFf7GAlBgjBauvGEq%2FS8F8u5idDGBAzGFRW9WSy4x%2Bz2YSav86t2uZ4f%2BoHm6Zds7Ohr6JwLG%2FghqH%2BXswvl5mOqiZmpNRcFe4yPlkeqktK6DlhOW%2FVc3AX2hhTZomt28GJRNfxxis5f%2FnoagCBQwXSnuK1p7q3Y%2Fm6gUfxmwgSTJsJ8Z5CNqzdXurpKuQobRAVpcL7be1HBYVfuJrJxWxi%2BrgR9%2FRFtqCA6TK4ZZJEWkLGV9cs2NRnAp0EZtybmNz2zTH3Rcfw9fx2GEqlWPWWDIN4GLyxWOreUuGoPDMDpA27gnknrrczHsXVK3AWmtj7s%2Bc8jCyxq3JBjqkAfRJBQriZFKFSAldWNiSc1fGXpoeX1vh%2B6XlOA8LmkqV%2FivhyfW65VSapWl%2BPOo817rQ7amQZiO%2Ba%2FanrLO0IsUE%2BdeY9VZD1un6gG%2FSZzk4a9AKcuf%2FCR%2FXIDwWAHLM%2F8iO62gJKdlCfUmBHHGYkAZ5wX1guKcsEskDgOz%2F5c0UokZ11t%2BX70ViIqa5%2FWXkMXYU8daxGnKxQUdq7AAt8099LjLk&X-Amz-Signature=d45b53b204e4639addcd3a0c11e209424f02d6e16140adefec9816006edccb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFVZRBE%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDdUntcLIA0PeeFE39XgDnxO3Aa2bpBafrPIGSHsDoIqQIgJmi%2FjGbY03aY8eSXAa%2BMtB3YmjpK1HIsOZSvcNd29wcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb0Sf13qc3eqt858SrcA2NqNx4KJzCSBa94C5yS7C%2FFMzDfOLYU4%2BuVJEBAWUswxxgPGASePrGsEJYblfNF5pMYyg42oyQ6WKEYZbWdo5ZNis9NZB2VDYDR6X6VBigu9ecT7a1JGbzH2wcR7FFOTiOGgFoQ1ifWhBP7cq81D%2FrFEw08PywQaLrlp83jK%2BdRAf%2FZlidE5TleWBzu%2FNOChEvvKMcuph0N8qsv95DWm8EOaM0ARWAWgoBMQUT7b%2FCqFfBzk1HH7Cf9yER44nTZud6Ox%2BzbSHsT1RJOIwTqMNuitVkb6OlH%2FXQxecSolNa12KaWxrMebnWa6vSKqk7YEhzuUzn5sVFSNrdAtttnu3Gh5JT2Q5uxCm4B5FFBKMxJ4BndOLFf4PQzx05ZVzM%2FS7TTwvUOhEDiGzjgJI1nBv7x1CcxBGFJvYq73IgZpKiz9XegOKJQGddFI5U3XXqG%2FOCtjeV313RMT72GaiNCCxsD2ZQ4AneQYZQBEwP9qSZ5ShEJG4CcOY3yQkpM%2BbO8rSY7F0WlaCnVKhk5uv3937mxnfFWRYtdb2c%2FTdl%2FcmPDxzP28T4ExZJ9iopAvmRttzi%2BOmigfCzgvY61oiFYrYwLD1ltqmnsYvhizTUonF9HaEngBYAVZtyM9NktMPXUrckGOqUBl7lprUsGZjNRWsHC86Y6Qhf31349y8EbNUkn01hRqkltwKFyWlzBXbY7qQMVIE8u85Ojdj1kc6zEbBGVWPfw1oFqgS%2FNaKP1H%2Fmgvr20MtRAQ3ySbHOjlqEH7pt%2BQBQ2US2NjTZZnc2LXGEqJQ3DiATstBcGPgJkNdSgBxDKcawz9tax6NEWeyJlhMVZnkt34dGNpyIapyjdZdabdvcB5rLhiEjy&X-Amz-Signature=9aad3e77d9d0fe1bc1a7751791c73089802250f52853b8d1e093c74c226c9f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPILX2U%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6uyW6uuCwg99%2FyPcYVR2R0VdFcqBeGj5b788qra34sQIgJC5%2FGzddixxsg17QS8bWSRJGQKClrt0kOP9JL2BmHMYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK6AJOpi9Vu0LMzeyrcA3bUxqswXhF4MXorBA%2ByqGEOpfMs0HM4PRsmoPzK3hsVWFCs2BoCLdpFxSW%2BvFcwAZRjQJfcrpy%2FHtodUiYXb3hLaUkTp1UhIi8IMgern%2FUacXznurN1wqoMxnlmfX5NfMILR9N8XXsOPBDylyXDn8vk4wXaXXgbpv1sHVUgdBQufVOGzkBB2ysy4L0MOg2QEgZMSmHYPl7vEJUfj4gi8LkfAS29EPJ%2BUexQ6pieLlEQ6MDWdFd7kzVxXkCO%2BzCce9ZkgZ9eFJrkw53CjwAC6OwDn4Jb2elmI95SSfoETTkHcIF7XzJ%2BoCiQHq%2F%2F8cDSizrol%2FOwogAWeKV03XRdM2vnZDsDxxmKINnANmK%2Fcqi0a7lRuViN2v2sU%2FVKWIun0xfye2hx%2BI2MTOUJHyzFc1%2BtESYlkUr51%2FYPICqATXnfUrrhjmCr8YSIbcRPzwvODAy1Ikesao5lNsahah0kzVY2PRJowJY26nx0MZO6Bs9WDAhqt1Q3bRu8ObnhIKkynv2gF7l3%2F05Qb1FxLjKXA6HwPog0PiIOFLSxtFVokKymVk9aB%2BiIggttsMX6KCgiOk673ZiAxttspmZNMprT6YQ39ft7Z8XSuInRWXpLiBGXx0SzSAXBXkbd1k24MIXdrckGOqUBj%2FSarY2IYUSSDJw4Hp%2BYi1G6DqAl8d2GFdWssFs9UembumwjzJk2gnbiIwb2eFUbH4JT4Xkzlh%2B1mdtdyGSjW0pj%2BT7Y%2BN37Wxq3JYkAKAkY4VGt%2BxQPgWAkMv%2Bc29KKAfs48v28wkrtvD6VgBtNc9q315FZc3N21B9qxJt%2FoP0DdhKZHJPaTnVSFocbd9T%2FCHg7cxBgYN5X5d772TzV2eiCGj6s&X-Amz-Signature=304913fdfbdbdf55f732f6e14e6252ccf77f1a9be764e521a5a411b83f9ba228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
