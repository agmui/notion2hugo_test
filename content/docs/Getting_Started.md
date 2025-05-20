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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKZADVV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGjiJkZYy%2FrmKdt0UquorM3k8c2MWsBwgEZ968URE%2BAiBPS3%2BWgLzGeiu5uQVEK4ZWtv4WHt65Yy0RlDUreQMNjyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCSiRC4WZBWVkcMyKtwDxzvnvGj7%2F0FhOWmmJeSm7pI587cFe1wlHEcW24hP7pZXecWhpy8D33r%2Bl1lU9qb837rMY8oW1Aovs5NBqSChdLx6Pj3EEuhaKzPXUu2i81P0wJ5IU1Z6AO%2BS6zLzALz9mioutNJVt%2FN73q6HXvuAsE7Jq9ALP%2Byp0n1nnR1w2ygnydp6xoeFygmcttg7%2FeMmiE97nZSZ3OhZWkLD0K6yQdjv2bC5YvH23XBydCvdnTU2vBp6b%2FfUwOZCEnhvR5RH4mdIsHDZVD9QLolODneJy42re341%2FvnaWexyzhNLrbi1178HOrfkwr4uSjubgsRXgvhyTpJ41nqskv8UJV54SOtXJCsou%2BXHU26ogzcfN4G%2FQq8Alr4HyznKRK99FDYG4Dq3MXLlDpYohZmrue9tD5NC6FLHB5PRkJW4WXIU51blY6OBhTs1RIlP0MPq37npNHZ1yP7sjoCAOhBHS0RKs8S6cKdhi%2BFw9UtAtGKfkMG8%2FWTEOTfn5RMxi6Qk2vgx0aURMtnFtVLE3siC8m8PmsEPzhEhysP6ZlOI3A1VN38BbqbdTT7PNNgqus3ntgTU5Zaktm1VDF2uuxuxJwYGXdN3qQl5WWMwuUPAa0mlAW80xE%2FgTmdVd2RiWGwwifuvwQY6pgEQuTCwQd6342xMJsZAe5LUOqto%2FGGAM5YPSSQJAlBfa97x%2BGTcTsSQ2fPuhaaezUMRP%2BQeMN9b%2BWWsfQccZUCzcSf76FHk%2FnxKUUlBsohPMXre94EDSFhYoj0jdaj4O3XP94SEiGX9HBlZ17HxmfXbsLt%2F0TiXvpUjl7uSzyBJ%2FP9M1%2FxRpbmAUKIbb1PGqPl2hDYW%2FXqPc2vMcbGOTUnIuZzHbB2%2F&X-Amz-Signature=f2f7e3df4309a92789bde277f2ce9c2b1af5a8f5b249746e995958541c69c130&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKZADVV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGjiJkZYy%2FrmKdt0UquorM3k8c2MWsBwgEZ968URE%2BAiBPS3%2BWgLzGeiu5uQVEK4ZWtv4WHt65Yy0RlDUreQMNjyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCSiRC4WZBWVkcMyKtwDxzvnvGj7%2F0FhOWmmJeSm7pI587cFe1wlHEcW24hP7pZXecWhpy8D33r%2Bl1lU9qb837rMY8oW1Aovs5NBqSChdLx6Pj3EEuhaKzPXUu2i81P0wJ5IU1Z6AO%2BS6zLzALz9mioutNJVt%2FN73q6HXvuAsE7Jq9ALP%2Byp0n1nnR1w2ygnydp6xoeFygmcttg7%2FeMmiE97nZSZ3OhZWkLD0K6yQdjv2bC5YvH23XBydCvdnTU2vBp6b%2FfUwOZCEnhvR5RH4mdIsHDZVD9QLolODneJy42re341%2FvnaWexyzhNLrbi1178HOrfkwr4uSjubgsRXgvhyTpJ41nqskv8UJV54SOtXJCsou%2BXHU26ogzcfN4G%2FQq8Alr4HyznKRK99FDYG4Dq3MXLlDpYohZmrue9tD5NC6FLHB5PRkJW4WXIU51blY6OBhTs1RIlP0MPq37npNHZ1yP7sjoCAOhBHS0RKs8S6cKdhi%2BFw9UtAtGKfkMG8%2FWTEOTfn5RMxi6Qk2vgx0aURMtnFtVLE3siC8m8PmsEPzhEhysP6ZlOI3A1VN38BbqbdTT7PNNgqus3ntgTU5Zaktm1VDF2uuxuxJwYGXdN3qQl5WWMwuUPAa0mlAW80xE%2FgTmdVd2RiWGwwifuvwQY6pgEQuTCwQd6342xMJsZAe5LUOqto%2FGGAM5YPSSQJAlBfa97x%2BGTcTsSQ2fPuhaaezUMRP%2BQeMN9b%2BWWsfQccZUCzcSf76FHk%2FnxKUUlBsohPMXre94EDSFhYoj0jdaj4O3XP94SEiGX9HBlZ17HxmfXbsLt%2F0TiXvpUjl7uSzyBJ%2FP9M1%2FxRpbmAUKIbb1PGqPl2hDYW%2FXqPc2vMcbGOTUnIuZzHbB2%2F&X-Amz-Signature=444bc52f5e3bb104e4d8de537b70adcd5c860142445b9f4c3921e1af65781445&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKZADVV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGjiJkZYy%2FrmKdt0UquorM3k8c2MWsBwgEZ968URE%2BAiBPS3%2BWgLzGeiu5uQVEK4ZWtv4WHt65Yy0RlDUreQMNjyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCSiRC4WZBWVkcMyKtwDxzvnvGj7%2F0FhOWmmJeSm7pI587cFe1wlHEcW24hP7pZXecWhpy8D33r%2Bl1lU9qb837rMY8oW1Aovs5NBqSChdLx6Pj3EEuhaKzPXUu2i81P0wJ5IU1Z6AO%2BS6zLzALz9mioutNJVt%2FN73q6HXvuAsE7Jq9ALP%2Byp0n1nnR1w2ygnydp6xoeFygmcttg7%2FeMmiE97nZSZ3OhZWkLD0K6yQdjv2bC5YvH23XBydCvdnTU2vBp6b%2FfUwOZCEnhvR5RH4mdIsHDZVD9QLolODneJy42re341%2FvnaWexyzhNLrbi1178HOrfkwr4uSjubgsRXgvhyTpJ41nqskv8UJV54SOtXJCsou%2BXHU26ogzcfN4G%2FQq8Alr4HyznKRK99FDYG4Dq3MXLlDpYohZmrue9tD5NC6FLHB5PRkJW4WXIU51blY6OBhTs1RIlP0MPq37npNHZ1yP7sjoCAOhBHS0RKs8S6cKdhi%2BFw9UtAtGKfkMG8%2FWTEOTfn5RMxi6Qk2vgx0aURMtnFtVLE3siC8m8PmsEPzhEhysP6ZlOI3A1VN38BbqbdTT7PNNgqus3ntgTU5Zaktm1VDF2uuxuxJwYGXdN3qQl5WWMwuUPAa0mlAW80xE%2FgTmdVd2RiWGwwifuvwQY6pgEQuTCwQd6342xMJsZAe5LUOqto%2FGGAM5YPSSQJAlBfa97x%2BGTcTsSQ2fPuhaaezUMRP%2BQeMN9b%2BWWsfQccZUCzcSf76FHk%2FnxKUUlBsohPMXre94EDSFhYoj0jdaj4O3XP94SEiGX9HBlZ17HxmfXbsLt%2F0TiXvpUjl7uSzyBJ%2FP9M1%2FxRpbmAUKIbb1PGqPl2hDYW%2FXqPc2vMcbGOTUnIuZzHbB2%2F&X-Amz-Signature=06d976ac5b29a9ef7732459fc5808e49c388e2fe5680cbddc2ff43154ff468b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDSJ66Q%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUu0KXbjlxSqqychBPS0M3FjlMA%2BfBtgy%2FzxDMu0AI1AiEA8belbDiTCzM3vG8%2F3H09GPQorwenmqqB%2Fk7CkltExo4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4GxZGTkGIJr%2FvuAircA6oeaNrBZWWMootgsf4q%2BOr%2BgsU9z0RdfdRqWEfN0yyuJF1utYMghLqGippVX5whf5oMjFGzpyaSM4wPDdGKB8usBhEDMhqZWk9AwWEQfRYveAFZ3rSCZBGScPYeU4dorh%2FjpodCzkkvLkyVYMWC0fk7BwvVJlAv%2BDmSEJOkIvm%2FDcvIOW7K2u2Ntj0MdGs%2BlT1Tx4N3b0nfV9QANrri7cxwvayBp06dU%2FSpgRCn8RRoIPWaSQZCXB5WurQ3actcV0zHJfl3s3aQeTa0qP9tq1YHvb8sLwCGhOD3exk1hJTHeOzVgzLRMj1I0ajHyTo3uun6wPgMUFU3U1YF74v%2FdmWMX642v1ODiFXo6eLpz185zuDGdKFO00gGuEsxChS%2F1gXhKUo6sQxTvdEFhlDU1pzkG1uYzobAQfg0fdn8JcPElgRYqYuUyr8GaYsJh01w5uGwQbHxK0AJ%2F6pVbTzWcyG5apX%2FZJUi458u8wfJaLT05ciT4t3IALyDyPiEBuwUl%2B4jsYVoRjLakjwSa%2B1nELUnemC89IdTsuIVoeujBrl4JHs5QInOn9UVlMjVdckncnXXKw8dUaOcai85cUQMC001zyGsabT5iR33bP8iKTPxDaOx3P%2FCaCROzvYGMM76r8EGOqUBOZqT9c6I47cbtGUr%2BYacROXM5%2BtTom21DjdSJ911o1GyNsVcpkUrbPJFV%2FDUhUaOSb4vdY7DsvxunuJalN8dtXr6vWyjP2za9D7AIhZ7QBzysex2Ve1yn2KYWvi%2FKVbBM1c8m27DuOJt4dhCnRSRG%2BXLcwyoFBFFrmToRA%2BUCxH4D9FBWphMinPjeHJNsSRtkkdmF83wcxmrMvWVQ%2Bb94Eq4Db5N&X-Amz-Signature=f536e22b688473b4e05b57140ea7e5c0c6558dee9c8df963486ec42bcf3c81f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGH7I2I%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr5MaNEkxvmUWV9GuYSa%2BT0U%2Bu%2FSR1SZ9eEw%2FwErh0yQIgUg3yMvD8sgdFnYXi8pFji%2BPIluRsuRsLLeQG1nopxGoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdqpxDk33wjFtAFFSrcA%2BzthiNtzXBFS4FPTFE8kWLz4dNtVlTXcVpRn0ocz1tvNmOVnW%2BNWNZpyIDEW9iopiGj5YzTnoPloKwfU47F3tP%2FUOrIgc98JncM1x7bCFpHI9v3Eh8VwjsB%2Fh726Vgs2%2BMmTMPbuPgFvkTxvGSFpXlHvxF%2BPxJZ595pbjVs6hmUTvPYaG383Lss6E7KaXmtqcpBifW8v8GZJx435c7U8mdd6isY9phhPfWayReHLnB7zIC3ExHZlW%2BaRaXONg9MdPaQhtxeuMeuJGq5JSEfknFPZ9KG51I1G84mA9VoCpkwJCWx7sOpZYkenGDZc5hy3jGqwOiKzIvx3I%2BjwMFY8OVPA1iL%2FBcky7ztoezAikF6XZ1rvrBJjzZNT4DymKOza8gG3U8GdoZb%2BcGJjGVmKDGodR4Do0B08HSEitRZE7ZS7REtcxojRvg9vdCfmTNSkzZg0nUg8hx%2FjD7gFgxRD3WGPpnf2EDmxcps9RgSZrU1h%2BQ52g54VogxXqmLGow2isrvuu%2BFPEPqCZi%2BhHXRLbRb%2B5Vu1sF92CN1mqYbcZk5XZALgBuBYJp444bywiqCs8Mxhj0K4eVHluvEBgNkC2I4GSerPseLs%2FZcVhM1gLmlX%2BVDLuEAnvArKFbxMJr7r8EGOqUBssmRiu%2FaHUFXLyxj%2Bi5h9APN6ByweZpNR6D2HThjyhndh8XADMW5hAaC5hhUKQc1WjJ4ywHGNLkM14ExU5bbUQmuqdv2SXnUIaoqX9ZWX2zwwCtMb5Hqt%2BnAmLh34wJ5HhquNk%2BzkhqGn1aR8Z7ZCpfTgsHy7cX9C7vipfNm9KwksbGYrydEvYR4gWrWKfUTx73MZPIRRxGtgYlxSHUNZQdKelE4&X-Amz-Signature=9808a5aa03e8ed72c1681808f8348f2e565575d27cefc8d15a65ca6fe803b1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKZADVV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGjiJkZYy%2FrmKdt0UquorM3k8c2MWsBwgEZ968URE%2BAiBPS3%2BWgLzGeiu5uQVEK4ZWtv4WHt65Yy0RlDUreQMNjyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCSiRC4WZBWVkcMyKtwDxzvnvGj7%2F0FhOWmmJeSm7pI587cFe1wlHEcW24hP7pZXecWhpy8D33r%2Bl1lU9qb837rMY8oW1Aovs5NBqSChdLx6Pj3EEuhaKzPXUu2i81P0wJ5IU1Z6AO%2BS6zLzALz9mioutNJVt%2FN73q6HXvuAsE7Jq9ALP%2Byp0n1nnR1w2ygnydp6xoeFygmcttg7%2FeMmiE97nZSZ3OhZWkLD0K6yQdjv2bC5YvH23XBydCvdnTU2vBp6b%2FfUwOZCEnhvR5RH4mdIsHDZVD9QLolODneJy42re341%2FvnaWexyzhNLrbi1178HOrfkwr4uSjubgsRXgvhyTpJ41nqskv8UJV54SOtXJCsou%2BXHU26ogzcfN4G%2FQq8Alr4HyznKRK99FDYG4Dq3MXLlDpYohZmrue9tD5NC6FLHB5PRkJW4WXIU51blY6OBhTs1RIlP0MPq37npNHZ1yP7sjoCAOhBHS0RKs8S6cKdhi%2BFw9UtAtGKfkMG8%2FWTEOTfn5RMxi6Qk2vgx0aURMtnFtVLE3siC8m8PmsEPzhEhysP6ZlOI3A1VN38BbqbdTT7PNNgqus3ntgTU5Zaktm1VDF2uuxuxJwYGXdN3qQl5WWMwuUPAa0mlAW80xE%2FgTmdVd2RiWGwwifuvwQY6pgEQuTCwQd6342xMJsZAe5LUOqto%2FGGAM5YPSSQJAlBfa97x%2BGTcTsSQ2fPuhaaezUMRP%2BQeMN9b%2BWWsfQccZUCzcSf76FHk%2FnxKUUlBsohPMXre94EDSFhYoj0jdaj4O3XP94SEiGX9HBlZ17HxmfXbsLt%2F0TiXvpUjl7uSzyBJ%2FP9M1%2FxRpbmAUKIbb1PGqPl2hDYW%2FXqPc2vMcbGOTUnIuZzHbB2%2F&X-Amz-Signature=80beb42aaa1878ededf1d092411614692c785bad3ea6fae6ef937f35ebe65477&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
