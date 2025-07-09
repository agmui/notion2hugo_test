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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMXPQF5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei%2F5S22snUaM5ViAhPnC6leyFLTB%2FCeeHs1iODY7FTAiEAybm4hyGqPplY4NYlpAZqrmOSmKjX5F925TcVrS35mIMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3js7kwDCKW%2ByTQwCrcA1dnYwkPjbVPOYuN8XoBS5RMjkMYNYhOoykH3xnI66uNolsLQCadVsAJaQ9fzB1fnUybFG8a2pxXp3QmIcZGvKiTngTYa6LsVB44mOgK4eiouHW1zDwHcXT64cMq43QKHGnvJFCASAh4OOq5ZWxsZUQ4KfIgJWyKzNvSxxTzf158763WLO%2BCS543eX7HYlwMnnH7jCWm523RsyTgjn%2BLWpASQ0T6eP%2BsBxDxZOQkSblSlA9dUELksieV%2F9S6ONro6kn2dBgi4vgKhaMQkeUwD1HP8u6m3VMm6JO9WwA5ANpoEGceK8PkeI8Fam%2BdQ31EGwE%2FuOUfZ%2BqnRoo7g3oiNtTYIy02btRNuaVzbOqHR4cXa46n5lxuXpdIDHVgElC5FsIdKpUvCXvsEgInuIE77e4pCrQ34n492SAosNUSSMrzvEYzVqRkj1P0LG76rP2ODxoI4Au%2Fy5xzm941HdfSLUISYu747q2vN6nhQesZ05Grzz0dArv%2FT%2B2yc%2BFDekzC6j5KX7AAftwGKy%2B1OsJ9%2F0Qv3QYUNq7rHLCtO872f6Nz2oKTFPL6uGnfDV8qYWS15SEbCwL%2FGUyBJ1N3W8qTN%2BBb4AgntV7fIB1i1%2Fgj2VrbierW4TnNOC7KQMvqMJ%2FqucMGOqUBLRzlt%2BuNkxNkg%2BxWniSkO2PyokSMWgJV2EAbGhxT5Wb9LwoSvsEDpoHMe5H4tW4k85lyxjl3Evh8QDqltPJ%2Fpk5Lb1rjJtVT7a5%2Bt9V%2FAFV53%2BdE6SlQBqzxVRbEAhnKXsnhZxljzEtu%2BuUMPX%2BlK6LAM6pFTjvQ%2Fvn%2Fgtl8yfYhw9k47ZFAZUg%2BPoiXciZS4DxcI2MWYOAMD6xmPzhNRKaiOsSW&X-Amz-Signature=9d1cfe04443324c4f40d15ea2cc693aa595b972f3b2ac817757a057cdfadcf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMXPQF5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei%2F5S22snUaM5ViAhPnC6leyFLTB%2FCeeHs1iODY7FTAiEAybm4hyGqPplY4NYlpAZqrmOSmKjX5F925TcVrS35mIMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3js7kwDCKW%2ByTQwCrcA1dnYwkPjbVPOYuN8XoBS5RMjkMYNYhOoykH3xnI66uNolsLQCadVsAJaQ9fzB1fnUybFG8a2pxXp3QmIcZGvKiTngTYa6LsVB44mOgK4eiouHW1zDwHcXT64cMq43QKHGnvJFCASAh4OOq5ZWxsZUQ4KfIgJWyKzNvSxxTzf158763WLO%2BCS543eX7HYlwMnnH7jCWm523RsyTgjn%2BLWpASQ0T6eP%2BsBxDxZOQkSblSlA9dUELksieV%2F9S6ONro6kn2dBgi4vgKhaMQkeUwD1HP8u6m3VMm6JO9WwA5ANpoEGceK8PkeI8Fam%2BdQ31EGwE%2FuOUfZ%2BqnRoo7g3oiNtTYIy02btRNuaVzbOqHR4cXa46n5lxuXpdIDHVgElC5FsIdKpUvCXvsEgInuIE77e4pCrQ34n492SAosNUSSMrzvEYzVqRkj1P0LG76rP2ODxoI4Au%2Fy5xzm941HdfSLUISYu747q2vN6nhQesZ05Grzz0dArv%2FT%2B2yc%2BFDekzC6j5KX7AAftwGKy%2B1OsJ9%2F0Qv3QYUNq7rHLCtO872f6Nz2oKTFPL6uGnfDV8qYWS15SEbCwL%2FGUyBJ1N3W8qTN%2BBb4AgntV7fIB1i1%2Fgj2VrbierW4TnNOC7KQMvqMJ%2FqucMGOqUBLRzlt%2BuNkxNkg%2BxWniSkO2PyokSMWgJV2EAbGhxT5Wb9LwoSvsEDpoHMe5H4tW4k85lyxjl3Evh8QDqltPJ%2Fpk5Lb1rjJtVT7a5%2Bt9V%2FAFV53%2BdE6SlQBqzxVRbEAhnKXsnhZxljzEtu%2BuUMPX%2BlK6LAM6pFTjvQ%2Fvn%2Fgtl8yfYhw9k47ZFAZUg%2BPoiXciZS4DxcI2MWYOAMD6xmPzhNRKaiOsSW&X-Amz-Signature=7fd9f2efa6518606cdd906a463afa6296a394bd6fb56ee7344867e01605072f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMXPQF5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei%2F5S22snUaM5ViAhPnC6leyFLTB%2FCeeHs1iODY7FTAiEAybm4hyGqPplY4NYlpAZqrmOSmKjX5F925TcVrS35mIMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3js7kwDCKW%2ByTQwCrcA1dnYwkPjbVPOYuN8XoBS5RMjkMYNYhOoykH3xnI66uNolsLQCadVsAJaQ9fzB1fnUybFG8a2pxXp3QmIcZGvKiTngTYa6LsVB44mOgK4eiouHW1zDwHcXT64cMq43QKHGnvJFCASAh4OOq5ZWxsZUQ4KfIgJWyKzNvSxxTzf158763WLO%2BCS543eX7HYlwMnnH7jCWm523RsyTgjn%2BLWpASQ0T6eP%2BsBxDxZOQkSblSlA9dUELksieV%2F9S6ONro6kn2dBgi4vgKhaMQkeUwD1HP8u6m3VMm6JO9WwA5ANpoEGceK8PkeI8Fam%2BdQ31EGwE%2FuOUfZ%2BqnRoo7g3oiNtTYIy02btRNuaVzbOqHR4cXa46n5lxuXpdIDHVgElC5FsIdKpUvCXvsEgInuIE77e4pCrQ34n492SAosNUSSMrzvEYzVqRkj1P0LG76rP2ODxoI4Au%2Fy5xzm941HdfSLUISYu747q2vN6nhQesZ05Grzz0dArv%2FT%2B2yc%2BFDekzC6j5KX7AAftwGKy%2B1OsJ9%2F0Qv3QYUNq7rHLCtO872f6Nz2oKTFPL6uGnfDV8qYWS15SEbCwL%2FGUyBJ1N3W8qTN%2BBb4AgntV7fIB1i1%2Fgj2VrbierW4TnNOC7KQMvqMJ%2FqucMGOqUBLRzlt%2BuNkxNkg%2BxWniSkO2PyokSMWgJV2EAbGhxT5Wb9LwoSvsEDpoHMe5H4tW4k85lyxjl3Evh8QDqltPJ%2Fpk5Lb1rjJtVT7a5%2Bt9V%2FAFV53%2BdE6SlQBqzxVRbEAhnKXsnhZxljzEtu%2BuUMPX%2BlK6LAM6pFTjvQ%2Fvn%2Fgtl8yfYhw9k47ZFAZUg%2BPoiXciZS4DxcI2MWYOAMD6xmPzhNRKaiOsSW&X-Amz-Signature=24f670daf01e1a956e5329f173d57427371c443a6084808694f3729a28ca72ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRZ4GLT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTzcD4wNCdcp7PLWeH6pa99n2i8DRNJEvda1IKv8EowIhANzviGuzwoovtLDgNJ7Qrzuv4Ih1QbvFsOYfkTU5iAHKKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs5F0yEyfLTmtz9O0q3AM6a2sKYKbwq%2FO86q9h5BuRhrACSd449N0kDWrE8bX7Juy26skOOhYpEVxVOXQuYfQUGDtvL0xVuZfrzUGybh%2FLuJX1v0zDl1jvVDJKl%2BSbDp14UIiQoCyGIM%2BKJjz2KgvZdvDG2uZyTcRAT4QSzVFaFFViC8RN3%2BZwfCp4vCqajaxgmu5JiYw32M2HukLQl%2FWcwtDWp4tDarulLkrsn9uMx7TeOa2ifO2ilk6KCww5MzByDaGLwAopGBYsV8kUdY6HzCVtGkd1fhHZRpH%2FprG8qZCaNqo1jRat3I2xxaY9sDS%2BAECEcNQf3QxwPnh8xYletOBSdJ1HngBqOfh94xaeCQ8nCjlpP73xKPJv5NZdA0J6U4tBzbuzlNqkde2QgqG1vukKT09IZk1VxcedVzgrTM9vPFdNJvm0nzhZs2BC7IjaI282Tuwfp907gNKG8Vn6kL15kSsT1i6Qt4%2F1SPnx3G1dQuqn9WrznIROT%2B6L3jxoX4GTC5l7JzSp57XZYci7ZK8X8FHC8matHi56uSpwIW5o%2BxV%2F2jkx5udp7hMTgwGRmuiouIXmke5M5%2FnAXU5LRY8nJ6wRboTErVtnKelS6jIZU1AOJb0IRuVWuH32Wyvhjc4y2VwHunxjDjCG67nDBjqkATPtUrPbcq4zT7YLq11yScb6KCVM6Jx2fnov4TQqi9SGfmQrFrVlmbc06utvnwfE%2Fp4q91he7Rlt3VyKG70bk%2By%2BqIiLXuqyjraHPk%2BRWZn5XjwL5ezMruJt1GEZhdFCUiMAhtg6MYoYFgA3w7t4ouPsbz0Gj2d3Os4hqno54xa8zQYlQ%2F7N692qlsj0Gik5xTVbRu36N6SCoKZsSrCS982GYroS&X-Amz-Signature=34542f14c06dfffe93b2fb110f5fc61b6036dd0ae0d30a29ff4da35f08373135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILH27L7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntR%2BPu1G5d1TR8sMMCyiafTJUvU%2BvSnqTU1QiDai4SAiArV4GRVr1%2BV2ul8uuxeQjo0fZzwwKbzTOqm5tOm82tciqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp5pMR%2BsslSmQPHYVKtwDoKRA9cLPzi5jizlD1CGzoHBofegEo%2FnPXArh%2BUSk9AP3lwFJ%2FmNO6gxZ%2BP3gOq6OJO9vkwuMhLRELYuSYlTwuTGvwgdcxLjZD1BwPXRYRUP8Mvz9D4NIfk7l09f7S4DN%2BQPOy%2BDljmt2cDagl%2Fi6k%2B1smOJl9uGp2yh7TWezI41fcp%2FvayrKsKuKN2w3JnNqj2zADk9imyn8%2BDC%2Bj1G9YuZRBccMivm10AXv%2FpzbwunrzNeGfhezntuxh5ae30UXrou1UaqCEMpxbq5liI63JCNtBceYNtK99BLzu4onp%2Bd8nuDfBWuVsBJH5SMIpSefsy8GV%2BdzX1FSe31GguVvSSt9YOmOGyLDqmwjY%2FKTwHV4x0fs4A%2FNEqwhjF%2FH0ck42LDsSAziit8st8zcAkLUIxcfWyezbAhS1Ex68bKZDzMDJ6ab2eW8EK%2BCGvWJ8Tq%2FelhBSsTb3r97mfbPrhG77xDUZbm6SiD8IpP9WQRySgmx2yeS1%2FX1tqOA0wqQPK1s%2F8u%2Ft7aRZRwXX6so6utwWaSqwIOfuFR%2BcV8OmFYdV3%2BeJlBl9USPYn6c%2BdbDNOEMAyZt6BywxQRk%2BtHa3vUkx1gufhz4JYnJrAKK4BVmU6gEbBL7n8y4XXr5Uywwluu5wwY6pgHutd6f13vMjuiqivL1OMjknHxPYW7%2FhZ6mcKwtSqecuOAfJApcha7X7nkubQv5WYvyS6DW%2B1fw6wWYXzBusnaqT1WFCAEmpaTjjVe9S96JrNCUntqymDWgy4CppGy2BlYnN9%2B9PeUWqpuB8vDdj%2FXFiIVLaQixZc6d23icF2SulQmDYDLZrBXyMGT1pNxEEJ3KUMq3bPPFCv0LTf3QbyfM4chcGDxO&X-Amz-Signature=4a7af897b03fa687b4c2bbe6de5b865e7d424861d5c976dbd3ab2272752ccb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMXPQF5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei%2F5S22snUaM5ViAhPnC6leyFLTB%2FCeeHs1iODY7FTAiEAybm4hyGqPplY4NYlpAZqrmOSmKjX5F925TcVrS35mIMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3js7kwDCKW%2ByTQwCrcA1dnYwkPjbVPOYuN8XoBS5RMjkMYNYhOoykH3xnI66uNolsLQCadVsAJaQ9fzB1fnUybFG8a2pxXp3QmIcZGvKiTngTYa6LsVB44mOgK4eiouHW1zDwHcXT64cMq43QKHGnvJFCASAh4OOq5ZWxsZUQ4KfIgJWyKzNvSxxTzf158763WLO%2BCS543eX7HYlwMnnH7jCWm523RsyTgjn%2BLWpASQ0T6eP%2BsBxDxZOQkSblSlA9dUELksieV%2F9S6ONro6kn2dBgi4vgKhaMQkeUwD1HP8u6m3VMm6JO9WwA5ANpoEGceK8PkeI8Fam%2BdQ31EGwE%2FuOUfZ%2BqnRoo7g3oiNtTYIy02btRNuaVzbOqHR4cXa46n5lxuXpdIDHVgElC5FsIdKpUvCXvsEgInuIE77e4pCrQ34n492SAosNUSSMrzvEYzVqRkj1P0LG76rP2ODxoI4Au%2Fy5xzm941HdfSLUISYu747q2vN6nhQesZ05Grzz0dArv%2FT%2B2yc%2BFDekzC6j5KX7AAftwGKy%2B1OsJ9%2F0Qv3QYUNq7rHLCtO872f6Nz2oKTFPL6uGnfDV8qYWS15SEbCwL%2FGUyBJ1N3W8qTN%2BBb4AgntV7fIB1i1%2Fgj2VrbierW4TnNOC7KQMvqMJ%2FqucMGOqUBLRzlt%2BuNkxNkg%2BxWniSkO2PyokSMWgJV2EAbGhxT5Wb9LwoSvsEDpoHMe5H4tW4k85lyxjl3Evh8QDqltPJ%2Fpk5Lb1rjJtVT7a5%2Bt9V%2FAFV53%2BdE6SlQBqzxVRbEAhnKXsnhZxljzEtu%2BuUMPX%2BlK6LAM6pFTjvQ%2Fvn%2Fgtl8yfYhw9k47ZFAZUg%2BPoiXciZS4DxcI2MWYOAMD6xmPzhNRKaiOsSW&X-Amz-Signature=5d8de9ab5b36ed64d10c951dcc4b018087a2bfc7b54736a3e78f9e641ab03c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
