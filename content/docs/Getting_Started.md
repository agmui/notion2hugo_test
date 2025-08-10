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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLSONJA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJJmq1kBARWMnMjgrTQr2QaJTqZCQMDMRH1T%2BWW6a6OAiBZqJ7mYzUEG7hqGI5pm%2BJCPqHsAKjB3OcYrmK4FaGFsyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1HS2q%2Bk5qk%2B8R%2B5KtwDXfNrALmSZA9DEOfWdrZChYLOcmPj5y79uq503UYBunOkR8wRcCDk%2B%2FoYM9s6PfxL0c0JYkpdigLqQa%2BP7rqIvTCM3KBTQeekDIc2uuE70D7zTpdv2mTR1K5A%2BRohgbzzMhniMOTlh1ROq%2FSJeOz6LltxIP%2BBe0HDrMrdnYW4hjeurhbfnWRAu51yrHJjxC0LJblbe553eepQnPaAcvk3Sp%2Bmkl3UMmDayEN4ggNTJx21e67HFunWc9DZx1o1n4Gvx1ZjUAEbJvgv9ceS%2BM3K5vN3Clajav5p%2BSv3ymG1O6ZvMiTUVT656Cmw3wxkFQwHSyrRh8BQW8EJQO8qc39MUJk%2BpoxbRU%2BMdmwCyYsGb3uCJkXZHbeMIy3gsf8Be62w7vT3GEi4jI%2Fd%2BqgLxs3jMi0B%2FO0ebtGSfEcpyFIXd059iLpvMIdqg5b6hPRjnrakHgQFmsN9X04attTQ82Y7YlXTlvtu1pTPUhztgZaiPDHtO7HvEFgGiL3EctLu47v%2FKlkoqa9bkaGfHv8RBLFQ5GcCYavJRZjoZUj8%2FaWFdapOagfmmrxCHlubTHLyjCGGolaQy3WncZcV0Q5XSOj64bV4ZnFRfLfJF2HPmekvoWaTwM2Rn8qQW5Y6mYMwqPXgxAY6pgHMSLOOnCBz9SoDdkx17UfHwqn1XzV6brHXD31hADejd6rq6dSOjQsp8eWaozdWiqrmJh%2BvDt%2BCte9ubSbOJG3Q2Bg1kqQOi8cKJ7pZ6CKwgOGA2ADAbiZH97yrwI92Ct63%2F9oscxP8gJdinIHfLt1%2FPSG8qOvJGN6AZSwmTrYHugwCGaPIqjvv6uswK6ZL7xEQDBLw6UrCSjf8P7AwJUc%2FhsXW9AOF&X-Amz-Signature=0518c46a19b97b652e4eae5d1c5c961891c71cfd6935c1651cdb57acb0787711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLSONJA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJJmq1kBARWMnMjgrTQr2QaJTqZCQMDMRH1T%2BWW6a6OAiBZqJ7mYzUEG7hqGI5pm%2BJCPqHsAKjB3OcYrmK4FaGFsyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1HS2q%2Bk5qk%2B8R%2B5KtwDXfNrALmSZA9DEOfWdrZChYLOcmPj5y79uq503UYBunOkR8wRcCDk%2B%2FoYM9s6PfxL0c0JYkpdigLqQa%2BP7rqIvTCM3KBTQeekDIc2uuE70D7zTpdv2mTR1K5A%2BRohgbzzMhniMOTlh1ROq%2FSJeOz6LltxIP%2BBe0HDrMrdnYW4hjeurhbfnWRAu51yrHJjxC0LJblbe553eepQnPaAcvk3Sp%2Bmkl3UMmDayEN4ggNTJx21e67HFunWc9DZx1o1n4Gvx1ZjUAEbJvgv9ceS%2BM3K5vN3Clajav5p%2BSv3ymG1O6ZvMiTUVT656Cmw3wxkFQwHSyrRh8BQW8EJQO8qc39MUJk%2BpoxbRU%2BMdmwCyYsGb3uCJkXZHbeMIy3gsf8Be62w7vT3GEi4jI%2Fd%2BqgLxs3jMi0B%2FO0ebtGSfEcpyFIXd059iLpvMIdqg5b6hPRjnrakHgQFmsN9X04attTQ82Y7YlXTlvtu1pTPUhztgZaiPDHtO7HvEFgGiL3EctLu47v%2FKlkoqa9bkaGfHv8RBLFQ5GcCYavJRZjoZUj8%2FaWFdapOagfmmrxCHlubTHLyjCGGolaQy3WncZcV0Q5XSOj64bV4ZnFRfLfJF2HPmekvoWaTwM2Rn8qQW5Y6mYMwqPXgxAY6pgHMSLOOnCBz9SoDdkx17UfHwqn1XzV6brHXD31hADejd6rq6dSOjQsp8eWaozdWiqrmJh%2BvDt%2BCte9ubSbOJG3Q2Bg1kqQOi8cKJ7pZ6CKwgOGA2ADAbiZH97yrwI92Ct63%2F9oscxP8gJdinIHfLt1%2FPSG8qOvJGN6AZSwmTrYHugwCGaPIqjvv6uswK6ZL7xEQDBLw6UrCSjf8P7AwJUc%2FhsXW9AOF&X-Amz-Signature=8e2795332c1ee396dd1213364435832db736a384e9ddb65c80b2837187cc335d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLSONJA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJJmq1kBARWMnMjgrTQr2QaJTqZCQMDMRH1T%2BWW6a6OAiBZqJ7mYzUEG7hqGI5pm%2BJCPqHsAKjB3OcYrmK4FaGFsyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1HS2q%2Bk5qk%2B8R%2B5KtwDXfNrALmSZA9DEOfWdrZChYLOcmPj5y79uq503UYBunOkR8wRcCDk%2B%2FoYM9s6PfxL0c0JYkpdigLqQa%2BP7rqIvTCM3KBTQeekDIc2uuE70D7zTpdv2mTR1K5A%2BRohgbzzMhniMOTlh1ROq%2FSJeOz6LltxIP%2BBe0HDrMrdnYW4hjeurhbfnWRAu51yrHJjxC0LJblbe553eepQnPaAcvk3Sp%2Bmkl3UMmDayEN4ggNTJx21e67HFunWc9DZx1o1n4Gvx1ZjUAEbJvgv9ceS%2BM3K5vN3Clajav5p%2BSv3ymG1O6ZvMiTUVT656Cmw3wxkFQwHSyrRh8BQW8EJQO8qc39MUJk%2BpoxbRU%2BMdmwCyYsGb3uCJkXZHbeMIy3gsf8Be62w7vT3GEi4jI%2Fd%2BqgLxs3jMi0B%2FO0ebtGSfEcpyFIXd059iLpvMIdqg5b6hPRjnrakHgQFmsN9X04attTQ82Y7YlXTlvtu1pTPUhztgZaiPDHtO7HvEFgGiL3EctLu47v%2FKlkoqa9bkaGfHv8RBLFQ5GcCYavJRZjoZUj8%2FaWFdapOagfmmrxCHlubTHLyjCGGolaQy3WncZcV0Q5XSOj64bV4ZnFRfLfJF2HPmekvoWaTwM2Rn8qQW5Y6mYMwqPXgxAY6pgHMSLOOnCBz9SoDdkx17UfHwqn1XzV6brHXD31hADejd6rq6dSOjQsp8eWaozdWiqrmJh%2BvDt%2BCte9ubSbOJG3Q2Bg1kqQOi8cKJ7pZ6CKwgOGA2ADAbiZH97yrwI92Ct63%2F9oscxP8gJdinIHfLt1%2FPSG8qOvJGN6AZSwmTrYHugwCGaPIqjvv6uswK6ZL7xEQDBLw6UrCSjf8P7AwJUc%2FhsXW9AOF&X-Amz-Signature=87ceeff02b203d66b640d94d56efc12d3de16b033f7529475a7d91c717fc0ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T4N7EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfw%2B1yzjawE8b2ZjuLhVSo%2FRYM4E2NxSAdRkqSKKMJwIge0fXzq8kvnJFXQozk2wqJSRQfLA8cNtBs52UNmkXSHIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF4EnZ17DdyWLtvkCrcA63MLfF73xAohZOeOsTJfnVh4YAGp7T9ZNZ4gCaWAuuXKIVbL2JYvA2jOWE%2Bj8Blt%2Fdiu4xSlQMX3N%2BTb2vsTV8MnhOxrW22wqU7ZCGtKfzbxL3T0hUxWA8OCp75DLv9IhEKot7S1HBKhokgNam3ZawDI5vGDKXb0%2BhGCt%2FD%2F0qdvUsu3%2BdTYn%2B55dzwAbdYg%2F2xCWlAp8h9r%2FqTnLJ3RvnbHfLSDFdRVz7WcBjoJ3rBybxU6153Q1OZ4HvQC%2FL8rkQuIZHNANg0OY9RUAgTnUfiUZQ7RQf2OEda%2FLANGXrEa6EBJEqtedS25omVVV1WTRU23tdEdPJnrOQMGL%2BHd6RzhMRX4HrKzhC%2F5VIAdZ8selnsW%2FeZreS%2F0C%2BQKfB%2FNEx7p%2Fv%2FYmY4pNcL0dktKR2P10xBlUpPD9AXI9JBXBzTUxB1KXecEBHgOekQc9irToBO83goHQ%2BFTsSfDQiYVfxAiCD6cfGKRLc1f2B4uckhqrJk8JMLN69GChok6dmYFCb5Zuid1CVbJCy%2B%2B4uWBjpkd8C%2B0i2V2a4%2FFOOYPy39KX9vz0o%2F2b0szQDS3j5aY0qHU15eYxz59QqZ6DZl72%2FfxZjTeLYGsc0EwdXg9unhgFTK19YmjyFpWrIAMML14MQGOqUBz8%2FJHudRvBFtsFGsxDWUH0xODj7F5xoYwm%2B9ykM5NcItG51XOO8YWAxuBYpFBi%2F1EVjF3y7bazOOXwXfWj%2BpmmBZ%2FqpCXzvC4CiITEnGZvk23a3CCRO31FzoJxvimqx2gc%2FZ%2B188BEaCHh%2FMDPfhgXt5zGG8dPvi24w2PTvY7tjUUuqF%2FILoePuUQIvFoOq6TZd%2BkeEfEW3GN4tt1agcNS3REGDQ&X-Amz-Signature=864ffe873a8e10486c016fae775ada47a19d372d25d3672e56096c924699c57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQ7Q52H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAvf4UHAeaUiHAkhPm78svvVOweAixZOxY2JF0QIwONAiAYLHdy5QnBgAIjQ%2BGliSxpLUOmLdvI8Am46dLAoZsrxyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2BTabeIREsvFTU93KtwDCcOs95vO9MQSqm2NUSoGi6hZm1%2F9aRYKvo8LCDpsmg9GfTQBymrJCBVyiSVwiU6BEm%2BCRRhxd2yUAJbAACVkxPAxO4z%2FUdYBM3gHVNbeJYsBrprImS4pAISO%2BPkmWyqb%2B9%2FV%2FaR9oOvKISTmMKoUNDzJ3MbDDzrTMIwuoSxdHmr2s2YKgFjQusjUWeWf1Bsm4FQYyRZ3HoA8Xt2%2Bnbg60v0wU9SKSTuaGL2VVUkRP6J6a3mWUEQV6knfCO%2FCzaLisKdzfL5kUUx836%2BFI3YohXXTC4eUmVDirZ6R4iGxrAF3LGkCciw%2BdKcu4KnzrGbCmXypdVWFYluDKrqF8%2F%2Fe6IRw2ZaT%2BshIAYBAngwwcGe4z03NDoOn9FDoNfWREOHakZCOkuFntFp%2BcVSIQdPxGalxwjGFwYK3TaQxrv63QiNvEBOmXTt6o28hqlJBAB%2BlA5h0IX1iZQ7usnC%2BHdBtCAVh%2FxzPqi21nCStSdV5%2B8pl%2FkARTh6UJKdx30EB8lqd%2Fn3RthYnQWMHOaCHQ%2FAN8lwXoDbZ6WGNa6SrSIW9MO1IBMrpvjCy5%2BPOaJ1ryP4AjL%2FW11aeEhNR5QI8CMNpeRQhsGYEnExv6r9bkSgMRK%2B7z6xDVW%2B6cJXjmaUwxvXgxAY6pgE3KpH4nZWt2dOQWfm4yF74MMyvXXvHRo6Tdo4HaQudOmitDZuDdZNKGfCVO%2FumAP5%2BXp2%2BWXvxZZl8ByuONGryDfhoo2GOGHGIE%2Fp7%2BO68sB4tx4aVzDGzEmji6HVeH8UW%2Bl1q2u1NnB2kJ7sKomxQaR0%2BWNQfoo2%2FrUMUby48m4dusoCYA0NOgXbnVSDKqWg969mBt%2BM48JKNOqacUnklhjFcZElz&X-Amz-Signature=1b02adb4f4ebe22c9beff43e3ed65ecc3cbff5248273b8b216f7f32b62388278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLSONJA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJJmq1kBARWMnMjgrTQr2QaJTqZCQMDMRH1T%2BWW6a6OAiBZqJ7mYzUEG7hqGI5pm%2BJCPqHsAKjB3OcYrmK4FaGFsyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1HS2q%2Bk5qk%2B8R%2B5KtwDXfNrALmSZA9DEOfWdrZChYLOcmPj5y79uq503UYBunOkR8wRcCDk%2B%2FoYM9s6PfxL0c0JYkpdigLqQa%2BP7rqIvTCM3KBTQeekDIc2uuE70D7zTpdv2mTR1K5A%2BRohgbzzMhniMOTlh1ROq%2FSJeOz6LltxIP%2BBe0HDrMrdnYW4hjeurhbfnWRAu51yrHJjxC0LJblbe553eepQnPaAcvk3Sp%2Bmkl3UMmDayEN4ggNTJx21e67HFunWc9DZx1o1n4Gvx1ZjUAEbJvgv9ceS%2BM3K5vN3Clajav5p%2BSv3ymG1O6ZvMiTUVT656Cmw3wxkFQwHSyrRh8BQW8EJQO8qc39MUJk%2BpoxbRU%2BMdmwCyYsGb3uCJkXZHbeMIy3gsf8Be62w7vT3GEi4jI%2Fd%2BqgLxs3jMi0B%2FO0ebtGSfEcpyFIXd059iLpvMIdqg5b6hPRjnrakHgQFmsN9X04attTQ82Y7YlXTlvtu1pTPUhztgZaiPDHtO7HvEFgGiL3EctLu47v%2FKlkoqa9bkaGfHv8RBLFQ5GcCYavJRZjoZUj8%2FaWFdapOagfmmrxCHlubTHLyjCGGolaQy3WncZcV0Q5XSOj64bV4ZnFRfLfJF2HPmekvoWaTwM2Rn8qQW5Y6mYMwqPXgxAY6pgHMSLOOnCBz9SoDdkx17UfHwqn1XzV6brHXD31hADejd6rq6dSOjQsp8eWaozdWiqrmJh%2BvDt%2BCte9ubSbOJG3Q2Bg1kqQOi8cKJ7pZ6CKwgOGA2ADAbiZH97yrwI92Ct63%2F9oscxP8gJdinIHfLt1%2FPSG8qOvJGN6AZSwmTrYHugwCGaPIqjvv6uswK6ZL7xEQDBLw6UrCSjf8P7AwJUc%2FhsXW9AOF&X-Amz-Signature=16457bb9c9171c03167b48238347cd6d37963d6ede95c1bc5690dbc043da2e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
