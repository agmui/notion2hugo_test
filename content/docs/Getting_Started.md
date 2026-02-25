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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CHRKVV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICpFRZJhaHKlmCSvdLcwxa%2Fco6yjQZ2N79t8NM2v4yBRAiAFf9wZR1j5sWE2O9Iex5T1uQrB8EVy3nso3jjulyihNCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT4ibYWGEcw4AKduUKtwDb134GD3fJGZMbOMOJ6q6tjUIfiuCQ5kJa5CoiGdhBAuVe8YQEEaf2R5QJZjOYM5aqdBgT2iCuBI2jAtd18RzfKVb5ZCIA7%2Fkozh8xmRPXjezkRhTvJsREpYRvM0B7V8MHAdZDk4TMxGMGF6THPqJkUi6%2B03pyRAGkG9HBGJ8eSDwlLo3eDlJE8d3ZqMEuf%2Bdo2bd1LVSVYkHSFPGji5rM6aU34v1XVIHHAhxRsTkxML1gp8YGhzHjA6IEvhMokacbf1Mvu7yp2iafPJpgH8LwF2NflsDCfwQW2KQXBshkOVmEt2Etl2efrLsg8UlKCfpWkmg%2FH%2Fvb1vXdq5jg7Oo5BuUZn%2FnomSmbyxQ7KIgbkAIj4UBcKLsyEO6dHsJcF8qXZpKjjCZLm4IGrsd81JbvPmM076UFcgvjBGSO24Wq6u8E%2FF2TpJZKLfF3s3OHQHR8wspt11Znj1ABtyngdmxLKGV4SjT7tGHpHXvO8tupuSM55ENs9ALnwOCwQJkPn2YHjZ7DArO9fsPJdPDhq76VuF9nuj3UqTOKjK0OR8nza%2B4D5MCS3SwBpqhU63hG%2FSfAVhU7UssrkzQRb7TvfzKYRj%2FV1c7LGGn76YqJyjdZGuy1MumsOpkcFtaq6Iwu4P5zAY6pgF8i%2BFFwZPsYOmJFdiA4b61RMjDORei7jWHzd63%2BJi0yb4mHalCMMeAP%2BnlqnLne07KbLvQBRioyPYivcuoJ0HuUiDjkbtwhXFxgY5KEmjYUpGHYOK0VPzTeTRAKThNDNkkdFis6RdKSsIgPEQnymCZ5ZPPT4kk69GF0C%2FVUPxrdDuDDpGbMHL6kk9M46adRkQIPIpK%2BNqSr3wkwqoFuT1DknTZtoi8&X-Amz-Signature=0883551b438a46f4ed13974b06bc3d75f0ef2652eaa9732a5947f1de9494c176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CHRKVV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICpFRZJhaHKlmCSvdLcwxa%2Fco6yjQZ2N79t8NM2v4yBRAiAFf9wZR1j5sWE2O9Iex5T1uQrB8EVy3nso3jjulyihNCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT4ibYWGEcw4AKduUKtwDb134GD3fJGZMbOMOJ6q6tjUIfiuCQ5kJa5CoiGdhBAuVe8YQEEaf2R5QJZjOYM5aqdBgT2iCuBI2jAtd18RzfKVb5ZCIA7%2Fkozh8xmRPXjezkRhTvJsREpYRvM0B7V8MHAdZDk4TMxGMGF6THPqJkUi6%2B03pyRAGkG9HBGJ8eSDwlLo3eDlJE8d3ZqMEuf%2Bdo2bd1LVSVYkHSFPGji5rM6aU34v1XVIHHAhxRsTkxML1gp8YGhzHjA6IEvhMokacbf1Mvu7yp2iafPJpgH8LwF2NflsDCfwQW2KQXBshkOVmEt2Etl2efrLsg8UlKCfpWkmg%2FH%2Fvb1vXdq5jg7Oo5BuUZn%2FnomSmbyxQ7KIgbkAIj4UBcKLsyEO6dHsJcF8qXZpKjjCZLm4IGrsd81JbvPmM076UFcgvjBGSO24Wq6u8E%2FF2TpJZKLfF3s3OHQHR8wspt11Znj1ABtyngdmxLKGV4SjT7tGHpHXvO8tupuSM55ENs9ALnwOCwQJkPn2YHjZ7DArO9fsPJdPDhq76VuF9nuj3UqTOKjK0OR8nza%2B4D5MCS3SwBpqhU63hG%2FSfAVhU7UssrkzQRb7TvfzKYRj%2FV1c7LGGn76YqJyjdZGuy1MumsOpkcFtaq6Iwu4P5zAY6pgF8i%2BFFwZPsYOmJFdiA4b61RMjDORei7jWHzd63%2BJi0yb4mHalCMMeAP%2BnlqnLne07KbLvQBRioyPYivcuoJ0HuUiDjkbtwhXFxgY5KEmjYUpGHYOK0VPzTeTRAKThNDNkkdFis6RdKSsIgPEQnymCZ5ZPPT4kk69GF0C%2FVUPxrdDuDDpGbMHL6kk9M46adRkQIPIpK%2BNqSr3wkwqoFuT1DknTZtoi8&X-Amz-Signature=a4b2ac177b060e78e7861cb14877ebc01f789ea93988b67b452c970c76736715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CHRKVV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICpFRZJhaHKlmCSvdLcwxa%2Fco6yjQZ2N79t8NM2v4yBRAiAFf9wZR1j5sWE2O9Iex5T1uQrB8EVy3nso3jjulyihNCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT4ibYWGEcw4AKduUKtwDb134GD3fJGZMbOMOJ6q6tjUIfiuCQ5kJa5CoiGdhBAuVe8YQEEaf2R5QJZjOYM5aqdBgT2iCuBI2jAtd18RzfKVb5ZCIA7%2Fkozh8xmRPXjezkRhTvJsREpYRvM0B7V8MHAdZDk4TMxGMGF6THPqJkUi6%2B03pyRAGkG9HBGJ8eSDwlLo3eDlJE8d3ZqMEuf%2Bdo2bd1LVSVYkHSFPGji5rM6aU34v1XVIHHAhxRsTkxML1gp8YGhzHjA6IEvhMokacbf1Mvu7yp2iafPJpgH8LwF2NflsDCfwQW2KQXBshkOVmEt2Etl2efrLsg8UlKCfpWkmg%2FH%2Fvb1vXdq5jg7Oo5BuUZn%2FnomSmbyxQ7KIgbkAIj4UBcKLsyEO6dHsJcF8qXZpKjjCZLm4IGrsd81JbvPmM076UFcgvjBGSO24Wq6u8E%2FF2TpJZKLfF3s3OHQHR8wspt11Znj1ABtyngdmxLKGV4SjT7tGHpHXvO8tupuSM55ENs9ALnwOCwQJkPn2YHjZ7DArO9fsPJdPDhq76VuF9nuj3UqTOKjK0OR8nza%2B4D5MCS3SwBpqhU63hG%2FSfAVhU7UssrkzQRb7TvfzKYRj%2FV1c7LGGn76YqJyjdZGuy1MumsOpkcFtaq6Iwu4P5zAY6pgF8i%2BFFwZPsYOmJFdiA4b61RMjDORei7jWHzd63%2BJi0yb4mHalCMMeAP%2BnlqnLne07KbLvQBRioyPYivcuoJ0HuUiDjkbtwhXFxgY5KEmjYUpGHYOK0VPzTeTRAKThNDNkkdFis6RdKSsIgPEQnymCZ5ZPPT4kk69GF0C%2FVUPxrdDuDDpGbMHL6kk9M46adRkQIPIpK%2BNqSr3wkwqoFuT1DknTZtoi8&X-Amz-Signature=7360b09562d2a8809cb38e3a291dbdcd04af4afcf953fc48169eda45c518b054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLCE5Q%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIF0zDj1OMuaJEgLrenyqqt%2F1q4wQH5nkLEcG0apvF6C3AiAkEdZxB8bnk8zUd0PjrLl3N%2BaAJJP5AkSLOchA9731bir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMNIMijKYc6lTgYmPtKtwDGrYC1bRBPit7TCIWf4TtE9pWm9dfdduAFgwaeB3ly3Gqm3%2BO7IT3KI%2BiysHyundZLsOgnhir1vgJjjoH44g4HLLjD6vCyOLwczV8mEtOMp4%2FYtqaNagAZqpbuyhW5Bee1KSdDAgdHcnOB2au8CmV9U62zIgku9vSmVpSPAUyzXSbXkznUIgCbd9bhR5DYbMRphbh0XKmTVWjzmYt05%2FZFd9as40d%2BxdOs2E0Iqvrx8rc6DvQFau4y1faK92Mg4wqLHgmJ0UgaTwe%2BlFhHoRrSKsnxVTmAireg58hg0R1FJ3F3gHBCH2Qq7t2AwwXLwWjxykW4fFa%2BQc%2FHyuzjV5mHJqBYtcfL%2FTDEHH%2FZh0UB%2FDML7uyqqcODI6%2FuROokMBbXeWz6ox1KzokPwQ21t%2FvCk69%2B18UsN09mu25v6xUruLiqNRllPGx8xBNuubRrUlB%2FF3sv2idvfh3pzXPPkwAjH22DZPegFI41%2Bxqs7ybMR7HPMrE23y7sdO4ta1Da%2BsZbp%2FBfK330bHVFr0PiOOCPh%2BCkFkgmmzHc9ygYJ4DoRUyA7ERAXQcOjb2Ck522aRd%2F6zNTTphg63L5ET4K4oPmXsJDg7dzH6xVK7IbfO9DzBPsU4mlX4RQQDFAp4w04P5zAY6pgG0DY4sZd4XsvVM7K3gVdSdR1Cu9Hfwtj5t5yF8yAOnbMFrkAppSu1o9yqjxSdO91dy1EtsOxY3LrbP3w144uhhVkYQdWT1GKMudihOVznSCGoXvNbr5kYokDayDltF2GDhD4JbRjN43lRhbQXQzGu71W43Ii2eZVN2AwuzqetnE8tmlltkGIt8bEiNWZ2lb7k68YTlxQN3XxUatin%2FCfKSve1GFbPz&X-Amz-Signature=8a341d0e1e464dbda30de6685960ba60b05a257d97dd14d03e6b709a0c2c9cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3EA7HP%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCZ18t0wxwLk%2BLpvO5TZaqWr0Qp21HATe3VXb5W4DolWwIhAPd5qWnihqLup82bFBm0nTGRnk%2B7a38CpXbNThs5aBSZKv8DCAIQABoMNjM3NDIzMTgzODA1IgwKp9hydM%2Bqcwm0blEq3AM%2Fw5pfZ1CtfeXvjXhBrxTGJjtKMYO5slpPTjNXWVEDAui%2FMl8LMy9HQbXLptuLD%2Fp3j%2F9IIzO3XMjuLDK8Ase8%2FhwPwgCIHiB5j8DKoDXfH2RSh3%2Bz%2FLjH2nRYEdREF6uYa5RoT20b12pKN2BNsD3s%2FQTl6vQyubqMhi7B5lmlFrOXAqkucsQGE2mq8EadpZOnjDlykeGhFrV%2FmWmCGN2o6aRLV5uyQkYQFpdSMUjj20JMNIdLcsPrC20mWPy894cqcJE9ELWaL5pc1hs%2BfDnrVXOp6I%2FzvZgFrtVpxAP%2FHq2F4bE36Iy3Bo8eIzChVshzi%2BMuHYk6ectV4M4l2Gof%2FAnYncA4YVwOMLGWh84uFW5k0tCxuLvT1kr0jEUCHBpSjFbNb5CqX4XoJPyLFsCG%2FeNwmYmqHpqJZPZPa8HWHkw7WEPEcVFxWYHtFWIFlyqMWhZkISYZcgiDQUVssKe3qgjGyBTZhLb1fk17aCER7HDgl%2Bml3kV6hSi%2F6iNS1Y8yztXgJ%2BxFf6Ti%2BVhadJWWeLKY8ei9xt3ZF9zx9gbBhr5cVTcjJtnHd7U1VVsEr1E8qFrUh4SwGIVBvS8UDIo7s4rMY04aky5%2FOgKbb7OCEKpDPIH5bYGE6Ko4DzDhg%2FnMBjqkATOAZHqPyhPM07h7lMkFrYtuaxmCMT6tVUDDNrA%2FRc5NoRxgdHLWP9iEGj3FIrMdvCgrjS0Pl4YA1f1a2miqRzBx6KUR1CnVJKJoRvcbkCG06F056x5IoAnF029vNwxCMJkmvW5ieur356LwGDL6Z2Vo59P684tXxjzqT9sySvISSZKL%2FMu56buylWSEAQ1L7mzFoNcv6YndynBgWkkH1susLfU%2B&X-Amz-Signature=4afadbcdde75d4948ceb9cba1f9e25b63f3becfc5a5693e5a63addd48270510d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CHRKVV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICpFRZJhaHKlmCSvdLcwxa%2Fco6yjQZ2N79t8NM2v4yBRAiAFf9wZR1j5sWE2O9Iex5T1uQrB8EVy3nso3jjulyihNCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT4ibYWGEcw4AKduUKtwDb134GD3fJGZMbOMOJ6q6tjUIfiuCQ5kJa5CoiGdhBAuVe8YQEEaf2R5QJZjOYM5aqdBgT2iCuBI2jAtd18RzfKVb5ZCIA7%2Fkozh8xmRPXjezkRhTvJsREpYRvM0B7V8MHAdZDk4TMxGMGF6THPqJkUi6%2B03pyRAGkG9HBGJ8eSDwlLo3eDlJE8d3ZqMEuf%2Bdo2bd1LVSVYkHSFPGji5rM6aU34v1XVIHHAhxRsTkxML1gp8YGhzHjA6IEvhMokacbf1Mvu7yp2iafPJpgH8LwF2NflsDCfwQW2KQXBshkOVmEt2Etl2efrLsg8UlKCfpWkmg%2FH%2Fvb1vXdq5jg7Oo5BuUZn%2FnomSmbyxQ7KIgbkAIj4UBcKLsyEO6dHsJcF8qXZpKjjCZLm4IGrsd81JbvPmM076UFcgvjBGSO24Wq6u8E%2FF2TpJZKLfF3s3OHQHR8wspt11Znj1ABtyngdmxLKGV4SjT7tGHpHXvO8tupuSM55ENs9ALnwOCwQJkPn2YHjZ7DArO9fsPJdPDhq76VuF9nuj3UqTOKjK0OR8nza%2B4D5MCS3SwBpqhU63hG%2FSfAVhU7UssrkzQRb7TvfzKYRj%2FV1c7LGGn76YqJyjdZGuy1MumsOpkcFtaq6Iwu4P5zAY6pgF8i%2BFFwZPsYOmJFdiA4b61RMjDORei7jWHzd63%2BJi0yb4mHalCMMeAP%2BnlqnLne07KbLvQBRioyPYivcuoJ0HuUiDjkbtwhXFxgY5KEmjYUpGHYOK0VPzTeTRAKThNDNkkdFis6RdKSsIgPEQnymCZ5ZPPT4kk69GF0C%2FVUPxrdDuDDpGbMHL6kk9M46adRkQIPIpK%2BNqSr3wkwqoFuT1DknTZtoi8&X-Amz-Signature=bfab264af0a73f8ef39d83e8d9b854741bfaa257361605af8c909a529e0e27ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
