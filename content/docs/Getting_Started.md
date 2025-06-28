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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2PAH6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF68rq5fsoDPKZBuLkt61j5iIRB1cP4kNiHQuazzI94UAiEA26gkdsONpkv5queaBATL4N8MYT%2BAsXu%2BQeMs7hH4maIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtqNh7qSvoNwf3qsircA2YIMlucD%2BdAZqN0LIjk6oC%2FuhNsOLcwloDYKqAL94ga7WruQ6%2BTv6Lzepfj8PKGBiROC%2BTGNcPETkH8T5SbCi1%2FlP3FLd9txrDvKAP29TXEsRwzYR7hrT9hTBL9e7I8457Uj6UNrm4gzyVfncaVM3MoTQwhLeIZt48i0ae1sZBFWz2vWvOyNGoXWGdHFH7s1adxBi%2B%2FpO7eObeLxWQr%2BOEHlhUuc7XSyx3xyFAvl9BbyELFkaXyUd48AvOZeNyKEkA69uqMmor0iQYsP5%2F3JrD%2FcI1ahyiYV3ovcayAW9ia2nPirAa4zS6wNpqSrDSS78%2FwaNfHUTC5nGUWDJPgR%2BnSV8b2OQsYBGE8%2B1WatGaXUT%2FxjHTw4pXpDsCRw1lXX%2BNNLf%2FvE6Z4DMfy0Ap6ijSa2lLoki7EkivKsvoFfNw3ap5Ybdnk3m%2FCNSj%2FmUOuwzIW9Of5PLGSriQ92ofhOXxV6sUMh9b%2BTjDZkx7xSYaNvPcNsvGYeVvZSOXfFG4GYLayOmSDONHs7P6Ft6p%2BIzqj0djdl2XyhAGX3qpAM5LBQMmBBvY0j0x%2FbeK1qizwuBQnY6mgaj1oAUuwvETEw8RQSn44ez%2B1n9%2FMCAzQ87t6B8tnYartF9EnxS6cMLGQ%2F8IGOqUBH7O5GPlfqbZGxRsqg8ymItOF7evGKuv5PasQuVo92UNofR3HkNFpmxunNrJMgn7Mm6panehLRCx5boyBHQjtOTzcPg8ltZD81NuTiB9KCNcbJVtf5B82gicKmMww2Yt8HjTv7Ugh4cw%2B1htinvUFnnzJ02uf6L1BeyDsTUc9L1mMLoYOKYDFyl1WHYlvdq6kEBdfLVQ5nQBDYLgiBK0ih2lSqWFt&X-Amz-Signature=332ab0c0685c86061459641ade464f4acd3bab6f0c0ca3588e522f6bf139ae24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2PAH6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF68rq5fsoDPKZBuLkt61j5iIRB1cP4kNiHQuazzI94UAiEA26gkdsONpkv5queaBATL4N8MYT%2BAsXu%2BQeMs7hH4maIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtqNh7qSvoNwf3qsircA2YIMlucD%2BdAZqN0LIjk6oC%2FuhNsOLcwloDYKqAL94ga7WruQ6%2BTv6Lzepfj8PKGBiROC%2BTGNcPETkH8T5SbCi1%2FlP3FLd9txrDvKAP29TXEsRwzYR7hrT9hTBL9e7I8457Uj6UNrm4gzyVfncaVM3MoTQwhLeIZt48i0ae1sZBFWz2vWvOyNGoXWGdHFH7s1adxBi%2B%2FpO7eObeLxWQr%2BOEHlhUuc7XSyx3xyFAvl9BbyELFkaXyUd48AvOZeNyKEkA69uqMmor0iQYsP5%2F3JrD%2FcI1ahyiYV3ovcayAW9ia2nPirAa4zS6wNpqSrDSS78%2FwaNfHUTC5nGUWDJPgR%2BnSV8b2OQsYBGE8%2B1WatGaXUT%2FxjHTw4pXpDsCRw1lXX%2BNNLf%2FvE6Z4DMfy0Ap6ijSa2lLoki7EkivKsvoFfNw3ap5Ybdnk3m%2FCNSj%2FmUOuwzIW9Of5PLGSriQ92ofhOXxV6sUMh9b%2BTjDZkx7xSYaNvPcNsvGYeVvZSOXfFG4GYLayOmSDONHs7P6Ft6p%2BIzqj0djdl2XyhAGX3qpAM5LBQMmBBvY0j0x%2FbeK1qizwuBQnY6mgaj1oAUuwvETEw8RQSn44ez%2B1n9%2FMCAzQ87t6B8tnYartF9EnxS6cMLGQ%2F8IGOqUBH7O5GPlfqbZGxRsqg8ymItOF7evGKuv5PasQuVo92UNofR3HkNFpmxunNrJMgn7Mm6panehLRCx5boyBHQjtOTzcPg8ltZD81NuTiB9KCNcbJVtf5B82gicKmMww2Yt8HjTv7Ugh4cw%2B1htinvUFnnzJ02uf6L1BeyDsTUc9L1mMLoYOKYDFyl1WHYlvdq6kEBdfLVQ5nQBDYLgiBK0ih2lSqWFt&X-Amz-Signature=4f884b6080854d83f75894caca433ead3ca15fd3d2e634d5e7e1053c188dc6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2PAH6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF68rq5fsoDPKZBuLkt61j5iIRB1cP4kNiHQuazzI94UAiEA26gkdsONpkv5queaBATL4N8MYT%2BAsXu%2BQeMs7hH4maIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtqNh7qSvoNwf3qsircA2YIMlucD%2BdAZqN0LIjk6oC%2FuhNsOLcwloDYKqAL94ga7WruQ6%2BTv6Lzepfj8PKGBiROC%2BTGNcPETkH8T5SbCi1%2FlP3FLd9txrDvKAP29TXEsRwzYR7hrT9hTBL9e7I8457Uj6UNrm4gzyVfncaVM3MoTQwhLeIZt48i0ae1sZBFWz2vWvOyNGoXWGdHFH7s1adxBi%2B%2FpO7eObeLxWQr%2BOEHlhUuc7XSyx3xyFAvl9BbyELFkaXyUd48AvOZeNyKEkA69uqMmor0iQYsP5%2F3JrD%2FcI1ahyiYV3ovcayAW9ia2nPirAa4zS6wNpqSrDSS78%2FwaNfHUTC5nGUWDJPgR%2BnSV8b2OQsYBGE8%2B1WatGaXUT%2FxjHTw4pXpDsCRw1lXX%2BNNLf%2FvE6Z4DMfy0Ap6ijSa2lLoki7EkivKsvoFfNw3ap5Ybdnk3m%2FCNSj%2FmUOuwzIW9Of5PLGSriQ92ofhOXxV6sUMh9b%2BTjDZkx7xSYaNvPcNsvGYeVvZSOXfFG4GYLayOmSDONHs7P6Ft6p%2BIzqj0djdl2XyhAGX3qpAM5LBQMmBBvY0j0x%2FbeK1qizwuBQnY6mgaj1oAUuwvETEw8RQSn44ez%2B1n9%2FMCAzQ87t6B8tnYartF9EnxS6cMLGQ%2F8IGOqUBH7O5GPlfqbZGxRsqg8ymItOF7evGKuv5PasQuVo92UNofR3HkNFpmxunNrJMgn7Mm6panehLRCx5boyBHQjtOTzcPg8ltZD81NuTiB9KCNcbJVtf5B82gicKmMww2Yt8HjTv7Ugh4cw%2B1htinvUFnnzJ02uf6L1BeyDsTUc9L1mMLoYOKYDFyl1WHYlvdq6kEBdfLVQ5nQBDYLgiBK0ih2lSqWFt&X-Amz-Signature=51da1b1c39983516461ada15030ab470d210bf73354e017936dd7c808a3e0158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELEP33D%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74iPOqATasymRgu%2Fa%2BezmRRe9DcXp%2B2ndnNlAuXzhUAiEA7p4zDjAIasBah%2FOfKE8wtHmScIMuBHVovC7p3WF3CyEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmFA9D4xiXndx%2BxkircA6YAWu1w2MBiEtwblwxoI7YJJI3ol2aigkrd2J0UHVRJY868p8LDqwi8RSIOBoPpTJ7H%2FhDAfqDXGXHeflKzewmTiZ1Zi2S2MkIXfAl9XD3c%2BVUm2rz6gPm3q14oPdaje6USq2qGE5yAdfB4OYWAtCQlm%2BHU2fMmWcavqIRdf1j2ZPe8c%2FP4I54eezpvaNRfD9MhRCo%2BTlS9IxX4QNa8LvRjhVVl7Ucb5EUXBYtBStYDlfNboUKAOB0W%2Bm383dgRqg859wddprknV0BkZnXbXpme8aTPUIw7MUAsimUF35k3KaGhSOnZgHOpGns%2BAhhDg0Qix9mEHKRT8jOuqYYUvbOEsfQtU5W2aKaWR71M0M5Av9k2ZYrHY4Ys%2FyXBlU5KO5ZP80cj1RoeaXSygFWZDmFum03ji%2FZVWhCuKn%2FykCm26BIEahDehGu5zMNnoWbVxLQmWUHxNQFRi27dZQOGSFWBmhSrF8m%2FgunM4rmL%2F%2Bq8P6AYLx%2FbocZzcPLxdKVJ5YKr3PvRKr18GNsn1dt8aoPu7oVnALDmGljenWNLVsc0DKkz0QZbmSIJRcstx17hBHWZOHW5FsnKbKiyT4n9y%2F3716Fv05asBRug0%2FXpbIw8mgYBkYGRW6X0PiUmMK6Q%2F8IGOqUB072%2FEYgQKcOE7krMKPpzjKbpi4E770Cjz4uNm4eC701W97yvpIWDGkuch%2By%2B4t9tFIAprDSX80JJ8ofIA7TLJkEttbFtYs63WAxlJU4Ng1J9cSue3ecXMkEzLyN2Ue0LzIa2Iqm8wyFBZOhHYql2j9pe2K36lAaoP1iuQC78ppeOG8r6RpqSvsMPmwIq0agFMlv26qu0WpQ95qw6dOgllVVI9OHP&X-Amz-Signature=a1a5d0b6c50e38965809779aac78d89853871f0eac3f254f4d464e6565275289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RU4SVL4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPo%2B07yshZBGNg8AflBBXEvfphvPLTnulfqtFllU1RwAiEAly1CRDJh2H21g1LaX5MhKc93dvRa8vklLwfiN17kGVwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIWiOapg%2F%2B7%2Fkoa7yrcAzWYO8pd4nJnW12ka3xiC6DpDLkp8WVwiE9UXshuTKtdKhULpBb%2FdCpGOml4SOXKzfAiwHb84GFta5LaYUBP4G%2FDjWIZDwCWDdg68r6P6FY2Rmt7fXhyxh%2FBdGIeqI09qRex7U1uUCe2Y4vPxjufjWGalMg7tFzSSLZH4EnoUcwaYdGlog244N4%2F9tCxVL1tbJB8gB6L7TZqLAhcJcQJmK4B%2BA70TfgPc%2BEECYYt6wg2Dq7QyMpfIgk0X8p7CoVylwhtkWdx%2B0OrHgQJ7pmRZSmb27tSYKMgpuziRp1AsPaN7Z3hL3UGIZJ9aBItn4e%2FBW93fJgM6FutLlFJeh6k%2B0fhMoJxI2RPJ2GIi4Y1jhl%2B84rJXgVdjhHhINMJGLLQ%2B4KHrR48BBrjcPJRtariALJ8HFs8vM8RAhoPgWfuvO%2BGtMQE6oGeBJlWo92bRmxirWZOtQWqwB19g%2B7LsmIkW%2FMV0C8AkRdjmsSTUdlaWk2owvaC2sbVmhZmVKaUG%2F7QtIBt21mBXomuZEH%2FOdd6PsEuN0FVySB%2FnkaUl9EL%2FY%2Blbj5AZkbEIrW8Hp7ESHHTuNpo8QeQrXvRkKX3qSszfzfSknHnOaNNkD0qoSurXMMKnas0KY99MJSxtuJ9MPnB%2F8IGOqUBAa23rmrtX7CO6wZcghlFJs5mwmJM2IopRdUKMwx9WZ%2FOAKXbiI38pzEqu9uU79nrBI%2FvC%2Bz25heOw6XDm3nFTZqLhiClS09Qngz15RC8r5W1XtuLof6IGfW1gQlivKxZ%2Fmrn8ZvLdYiAZBowzgoBu%2FTFFAiOXWq4RQ1scqg6plM2P99%2Fa3%2B3c7odWhavwXxCB%2FjQuiHAfpA%2FTgAXgx6FFC1V1aJJ&X-Amz-Signature=35ddf4a41becb8ecc767f632d6e17a6e93def4820699701e094f5ef8fccff384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN2PAH6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF68rq5fsoDPKZBuLkt61j5iIRB1cP4kNiHQuazzI94UAiEA26gkdsONpkv5queaBATL4N8MYT%2BAsXu%2BQeMs7hH4maIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtqNh7qSvoNwf3qsircA2YIMlucD%2BdAZqN0LIjk6oC%2FuhNsOLcwloDYKqAL94ga7WruQ6%2BTv6Lzepfj8PKGBiROC%2BTGNcPETkH8T5SbCi1%2FlP3FLd9txrDvKAP29TXEsRwzYR7hrT9hTBL9e7I8457Uj6UNrm4gzyVfncaVM3MoTQwhLeIZt48i0ae1sZBFWz2vWvOyNGoXWGdHFH7s1adxBi%2B%2FpO7eObeLxWQr%2BOEHlhUuc7XSyx3xyFAvl9BbyELFkaXyUd48AvOZeNyKEkA69uqMmor0iQYsP5%2F3JrD%2FcI1ahyiYV3ovcayAW9ia2nPirAa4zS6wNpqSrDSS78%2FwaNfHUTC5nGUWDJPgR%2BnSV8b2OQsYBGE8%2B1WatGaXUT%2FxjHTw4pXpDsCRw1lXX%2BNNLf%2FvE6Z4DMfy0Ap6ijSa2lLoki7EkivKsvoFfNw3ap5Ybdnk3m%2FCNSj%2FmUOuwzIW9Of5PLGSriQ92ofhOXxV6sUMh9b%2BTjDZkx7xSYaNvPcNsvGYeVvZSOXfFG4GYLayOmSDONHs7P6Ft6p%2BIzqj0djdl2XyhAGX3qpAM5LBQMmBBvY0j0x%2FbeK1qizwuBQnY6mgaj1oAUuwvETEw8RQSn44ez%2B1n9%2FMCAzQ87t6B8tnYartF9EnxS6cMLGQ%2F8IGOqUBH7O5GPlfqbZGxRsqg8ymItOF7evGKuv5PasQuVo92UNofR3HkNFpmxunNrJMgn7Mm6panehLRCx5boyBHQjtOTzcPg8ltZD81NuTiB9KCNcbJVtf5B82gicKmMww2Yt8HjTv7Ugh4cw%2B1htinvUFnnzJ02uf6L1BeyDsTUc9L1mMLoYOKYDFyl1WHYlvdq6kEBdfLVQ5nQBDYLgiBK0ih2lSqWFt&X-Amz-Signature=731b919618d3eb7f57c3111c7d61e934e5667986376423f22a1588931438f9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
