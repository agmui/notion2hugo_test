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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756OPALG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQXuxXazuW5WtpO3ZJxyyKT3GLJa5Rh%2Fo3BhjixcATfAiEAjFcS3KXTg2rQQQ4SiWPspH%2BiaPpudFHGUn%2BQ0di27ZcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsIfS7cDztkbo7Y4yrcA%2Fm8rIAFw2HqS749Zr99p2hG%2BWIfTExwTIYbZavoipnrisVtdzbVQi%2BRQxQ2oLUh1mYNjFDr7UXhaj2DQZRxqCMARGNs1w7TPY%2Bwitm3SbGuWUEjXZNSrJoz4CvfHEYHdWkCDe7QbAbhlNf0F3%2FJLobsiNULIuDGiwc0zQuQ0YX3oqO4sQ5tXoczMC994vGf6O9Tz5v6Q5sz%2FR5PXcXXRmsJoXJXyAI53efuEVmCNPT6vX2na5nm7zZ12MBs7XDQ7gK6DgCU6soQoCtjwxTsM2o1kntWZchJtRq1yFlp6kDrSHksM%2BoHBOVZL9WYLckc1%2BxOJc2np78gs%2FAEXoxXYjRuvfCNE2d%2F%2F8kxt34%2FoIrGbjKxKN4ZoRwuESfcIK%2BY9B3R2dYxb4Gzpw3rScAm0ldePRbaPPWu833lVyglBbQsgCnZhmBdagX4vdufFVluJzKHvY%2FKj7QzjWQ2j1G1uYtSY0xjueBmVpgCPhMcUlkbIdGjtq4IVxbaueNT6gIesMYHb1YamXTpbRF%2Bex5rIfzjDznM2SQCpte5GWym1JJOhPET%2Bvbjrb%2Bb%2BD2PSknOVKbcsTEJ1lo92PNaV1gchaE%2FrB71IyG4Avu%2BQrJMLxjH%2BAf9hW63DgLsaYYiMMSI6L0GOqUBYMfvr2rx7%2Bgm5Q3qkVlAL8MexWagYyEZ55eTxdDNAaJuLo9lPtfE0Qh%2FXCoZpyPB9WjTnfxreKrGsYhigrS0%2FxLJA9KWmeVr1H%2BnZXKBre2rPKMUkxjWD2ojgck6GeLmNUhZOYK8ONrIcjBCy%2FmN7ZWV6PmIJzCBmAoIch7bMlJ6UZpbAf3zCbOuVGVQJlI3HVzaL%2Be2Uan3cXyAhvqTEMtu%2BOMi&X-Amz-Signature=445f69feb5efe024eb55c680182e75e76c1780f5600dc1918582e3bee7fbfbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756OPALG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQXuxXazuW5WtpO3ZJxyyKT3GLJa5Rh%2Fo3BhjixcATfAiEAjFcS3KXTg2rQQQ4SiWPspH%2BiaPpudFHGUn%2BQ0di27ZcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsIfS7cDztkbo7Y4yrcA%2Fm8rIAFw2HqS749Zr99p2hG%2BWIfTExwTIYbZavoipnrisVtdzbVQi%2BRQxQ2oLUh1mYNjFDr7UXhaj2DQZRxqCMARGNs1w7TPY%2Bwitm3SbGuWUEjXZNSrJoz4CvfHEYHdWkCDe7QbAbhlNf0F3%2FJLobsiNULIuDGiwc0zQuQ0YX3oqO4sQ5tXoczMC994vGf6O9Tz5v6Q5sz%2FR5PXcXXRmsJoXJXyAI53efuEVmCNPT6vX2na5nm7zZ12MBs7XDQ7gK6DgCU6soQoCtjwxTsM2o1kntWZchJtRq1yFlp6kDrSHksM%2BoHBOVZL9WYLckc1%2BxOJc2np78gs%2FAEXoxXYjRuvfCNE2d%2F%2F8kxt34%2FoIrGbjKxKN4ZoRwuESfcIK%2BY9B3R2dYxb4Gzpw3rScAm0ldePRbaPPWu833lVyglBbQsgCnZhmBdagX4vdufFVluJzKHvY%2FKj7QzjWQ2j1G1uYtSY0xjueBmVpgCPhMcUlkbIdGjtq4IVxbaueNT6gIesMYHb1YamXTpbRF%2Bex5rIfzjDznM2SQCpte5GWym1JJOhPET%2Bvbjrb%2Bb%2BD2PSknOVKbcsTEJ1lo92PNaV1gchaE%2FrB71IyG4Avu%2BQrJMLxjH%2BAf9hW63DgLsaYYiMMSI6L0GOqUBYMfvr2rx7%2Bgm5Q3qkVlAL8MexWagYyEZ55eTxdDNAaJuLo9lPtfE0Qh%2FXCoZpyPB9WjTnfxreKrGsYhigrS0%2FxLJA9KWmeVr1H%2BnZXKBre2rPKMUkxjWD2ojgck6GeLmNUhZOYK8ONrIcjBCy%2FmN7ZWV6PmIJzCBmAoIch7bMlJ6UZpbAf3zCbOuVGVQJlI3HVzaL%2Be2Uan3cXyAhvqTEMtu%2BOMi&X-Amz-Signature=2ebbacd82c08ea716c457a6c52b3445a7c5acd53adc3e4c426d4607d4c4a31d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTLQLGD%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBryCTQMzCfAMlzMm%2BAKxKUivJd7rRfXrod9n3yjzUUhAiEAoNowy0gQlDRN047%2FrvOGrtM%2FfZ80YGUXnlF5DetxkUMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHafNB3ONphXWB3QjSrcA80zCfBEE8v50XbS64MM1MV5cqiTPI%2FCUo1wwYfHXTP6OY%2BG0gWp3M1J1VHNUJXPrHW7wKb1BamXqsCBOqHsd9pWVoOsQwRpHkasd7H%2Fys0rpYH3lgCq%2FXYM734jW6U2SOrfBhJGzPeuoLVOcBRBIx9DGE5yjGbs%2FEMyJYy%2BXIAe5CBdzsGVfHqre178phSzz49OQrqMEKk8iJZH%2BiDuEgMdaHrwF78BAe8Evd3%2FRsjVnBaluC3ITqYSeic6QDt6Zg54UFTsUPDV%2B28b1fAH143DuQw%2B1En0C888JFwavXuZr%2BhEo93tBX3Ks5%2F2YwRtXERZ54Ev6qwlZO4ivNckZ287USC%2FdV%2Fb8hD1D5NhaMrz19gIVMm786jGCSnYsqCvzDUE%2By%2F4Wp81%2F%2BAe8uWHdHn%2FuOxI7yO0zvRb2FOxVn1PSlwb1bHIk3bVbFIiWkya9nGQOU%2B0whJR2VafzX4w4oOOaZ2isHp%2BCSLxKPLyH3na3oCI5QRarDZ4QdFJJTm2hx3LS3rjRIcdM2Yv9Ks111NdQhktQDioNA0yPh4Vv2GPeqVY8P%2BZg7FEjyFQ2uEr4W9vb4Sgigo8X%2FfHTepuHecqsxsq7FuGb7xfPZYIwHdFSh%2Bxe7L75SI%2B8a3KMJiM6L0GOqUB7RDV%2FRYJEybB%2FSERtDiPWJxn%2Bvo6kgcErqyz962S7Yf0nNiS7x61Hut1o6IVeVQNEAlxrw4sj%2Fi3QH5Ea4jVckdnZEYknRFWFZDw0fHQXu7lA%2FtQhztskb7VvcDU%2F0tJZnhnSAj0PUYTf3DBnwoam3INNGnMytU5giiaH2WKyee29l3M52EYJ9QvLZb2lLYVlk7oP2PK2MBB9N2yCOAqhqcFyrXC&X-Amz-Signature=8ff99fceb4d414b2989b33f30a62921ecd654db6947b581d65c95c1b4e8eb502&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5V526Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQDW4myZBTZZD%2FmPsWVZUimrAvVSVCFaSzPgOoWPCW9AiEAzDg5MrgMGL0admHcTku80ef1DMv1SphDB69Y%2F7wGZssqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5uYSLPT79eTZV0yrcA84h598LMXV%2FrWUEUsevCOtGX7rbPXfWYn%2FmB0AQLJuzd2IsaI1hifC8bALc89RQTrrgbgvFO9PV%2BcHXFPcySbQk9jqaWpo8P4LJ42gclO0ZvCV2sFcafmqqoW2zuEXwxRjHP%2BF07WIqr%2Bp3ukJNhI%2F7Ax2mMjYH5dnyyQSMza%2FgcywucrmF65nPIXI4VlO5lpRVdDlndFP9xOYr5lAinNw9wqugm6oZ%2FI%2BNOXMMaxaPrSisvcFvXv%2BUEumx7pgZ%2FpdvYDKwjTAGDRmoagXSCUZ2FI39wfPxA3hUYc6ZVUGI8yHtqlQ7KzzafEQzleT%2B5MOMH5GO9jsbCfztxltbua7p0fIOrig%2BU28v1G9cznFaO8QgIhHfFLsjnIZ7MNYJT8iHhxR0kIi5lY6HQfhCf%2Fh5jDWWAACU%2Fb460h1voovEMmAECZekB5GuhVKimXDCN0SnvuoY2YIMAXlvv6jraprN0360D%2BNOlKI%2FMeqJVNMEkTPOtImsrhau15mAEOHRa5%2BaoszqrHGrzjWn8reeXVf9A4oz02DnG%2FvxfLRkHw%2BYBqgAJoFqSdvvEjBkz33YaYAARcf8pBcb003DXU9khalQbOi2kdRXbvP6sacwsrk%2FzNxQW7amLhmvwEA7MLyY6L0GOqUBRiLKrP7g%2B5HNtDh006K7MBVj99O8g6kVNXr7c7pGdZOcfy6hTnqofkGcsmQonvGJqzqeonW651PE2fGr8oP1xG2%2BDMtUMzX7%2BEOcPCYDGG0cbGC7%2F0E2l%2B9ROshteL6iSbTQsodp1dZCWUFGLjVf6%2FA1aM781V9FTYlAdpQwgJj9disPNjX4ZNlj1vPu7jfXP%2BPav3utppLQBM4ZLkTWPe88prQj&X-Amz-Signature=d93d87cc77daa4655bba3ec0e0ada0d9afbaf47f66003ea6a46b424f7eadc634&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756OPALG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQXuxXazuW5WtpO3ZJxyyKT3GLJa5Rh%2Fo3BhjixcATfAiEAjFcS3KXTg2rQQQ4SiWPspH%2BiaPpudFHGUn%2BQ0di27ZcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsIfS7cDztkbo7Y4yrcA%2Fm8rIAFw2HqS749Zr99p2hG%2BWIfTExwTIYbZavoipnrisVtdzbVQi%2BRQxQ2oLUh1mYNjFDr7UXhaj2DQZRxqCMARGNs1w7TPY%2Bwitm3SbGuWUEjXZNSrJoz4CvfHEYHdWkCDe7QbAbhlNf0F3%2FJLobsiNULIuDGiwc0zQuQ0YX3oqO4sQ5tXoczMC994vGf6O9Tz5v6Q5sz%2FR5PXcXXRmsJoXJXyAI53efuEVmCNPT6vX2na5nm7zZ12MBs7XDQ7gK6DgCU6soQoCtjwxTsM2o1kntWZchJtRq1yFlp6kDrSHksM%2BoHBOVZL9WYLckc1%2BxOJc2np78gs%2FAEXoxXYjRuvfCNE2d%2F%2F8kxt34%2FoIrGbjKxKN4ZoRwuESfcIK%2BY9B3R2dYxb4Gzpw3rScAm0ldePRbaPPWu833lVyglBbQsgCnZhmBdagX4vdufFVluJzKHvY%2FKj7QzjWQ2j1G1uYtSY0xjueBmVpgCPhMcUlkbIdGjtq4IVxbaueNT6gIesMYHb1YamXTpbRF%2Bex5rIfzjDznM2SQCpte5GWym1JJOhPET%2Bvbjrb%2Bb%2BD2PSknOVKbcsTEJ1lo92PNaV1gchaE%2FrB71IyG4Avu%2BQrJMLxjH%2BAf9hW63DgLsaYYiMMSI6L0GOqUBYMfvr2rx7%2Bgm5Q3qkVlAL8MexWagYyEZ55eTxdDNAaJuLo9lPtfE0Qh%2FXCoZpyPB9WjTnfxreKrGsYhigrS0%2FxLJA9KWmeVr1H%2BnZXKBre2rPKMUkxjWD2ojgck6GeLmNUhZOYK8ONrIcjBCy%2FmN7ZWV6PmIJzCBmAoIch7bMlJ6UZpbAf3zCbOuVGVQJlI3HVzaL%2Be2Uan3cXyAhvqTEMtu%2BOMi&X-Amz-Signature=1496ac1720b2146d5dd7a991405bfe5a2e5d99460b29e91460112552acfb2224&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
