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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYCWFYI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDn%2F%2BKYDDgVySD9%2FVYcEvWknkXp1Y80U%2BNcHlSpw7qaxgIgIN3tTHdGPoMNgII4KflJfRmylOoMOaUWtI4smkz5MTcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKVG3MNUUudlFGKumyrcA6oC6YbAwOURx2Jk572IOq6jifJTEvF52fd1u8h5Wo%2B0xZvbqWhNTN55keqmO%2B6WWyyDUNIdA2luEaS71E95%2BZAGKvdm5HzJojprxES1ny%2ByZ0i4HUL8c6jUwdkeOO1CouQJsdYWy8pqSzExbLyTqNfy8d0hGeseYyAATHQnMfGGulKzaGQsup2cp2PdOyEoOQCTx%2BRGtYApWpzK4AocM0H1AvYyFunbRucj3AyKSv9Uvzf0veo%2BaVfn72SWpkKx%2B6A3gHzWhx6mjpsA3%2BaMUYEEZ0FTP6T3G2nx4AMIzFsMMJiNqcwwRXXQk7wlnknP2XO9ujx8LpCKXC92zzUhpdqzSZ3t%2BbotPGnTi8CBg0n8DltDt03IWqqMRvEdaojgjCxqnf8D%2B2TpHO%2FwBtneLGLzR93DYSwoGvYuqI7q%2Br67J%2FgLWBvq5ETYm8QagCHcqgBS9IL%2BnvgIPlFsWAeKl5KCtnkSFvsLXyrprTVvyEkxvSRFt3lwT2zBJPXzakbV2vl2c36wc6RlU6X9Pr3wAsNH9A7n9QeEAcSGddFJaV8DAdkkDVvugFASkJSyyy3eK8p0v5aHbmN30BQybhNuMUKiEK5mqgeE4hqwHL2JvQEnVmtwJ0o9cPCdQ5tsMOeUr8IGOqUBETDEiicHsITOYnnvYuLtuFXRkD%2B7vcq7MeCHt%2BgrO1zwaFb1Hoo9YnCdh2u1lK3D4y5NIbzvSf1K1y2ct3CEtmHxJ7SBK3831tDQOmXoOk6PvJDDuX3fCG8eCnTomJ5CvE39Vu0dG8bh7ZmouXyaCh%2Fg2WPEkBlrLFiDQNTc5akhCLqKhRcl0g8Ej3Qz82oVTVZJJAFSBqyyCEpbZ7so%2BDflwBdb&X-Amz-Signature=bcd3a332edb272ac190135b8fa686e9533bd53399f5253d5ade5d6bf2f54c086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYCWFYI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDn%2F%2BKYDDgVySD9%2FVYcEvWknkXp1Y80U%2BNcHlSpw7qaxgIgIN3tTHdGPoMNgII4KflJfRmylOoMOaUWtI4smkz5MTcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKVG3MNUUudlFGKumyrcA6oC6YbAwOURx2Jk572IOq6jifJTEvF52fd1u8h5Wo%2B0xZvbqWhNTN55keqmO%2B6WWyyDUNIdA2luEaS71E95%2BZAGKvdm5HzJojprxES1ny%2ByZ0i4HUL8c6jUwdkeOO1CouQJsdYWy8pqSzExbLyTqNfy8d0hGeseYyAATHQnMfGGulKzaGQsup2cp2PdOyEoOQCTx%2BRGtYApWpzK4AocM0H1AvYyFunbRucj3AyKSv9Uvzf0veo%2BaVfn72SWpkKx%2B6A3gHzWhx6mjpsA3%2BaMUYEEZ0FTP6T3G2nx4AMIzFsMMJiNqcwwRXXQk7wlnknP2XO9ujx8LpCKXC92zzUhpdqzSZ3t%2BbotPGnTi8CBg0n8DltDt03IWqqMRvEdaojgjCxqnf8D%2B2TpHO%2FwBtneLGLzR93DYSwoGvYuqI7q%2Br67J%2FgLWBvq5ETYm8QagCHcqgBS9IL%2BnvgIPlFsWAeKl5KCtnkSFvsLXyrprTVvyEkxvSRFt3lwT2zBJPXzakbV2vl2c36wc6RlU6X9Pr3wAsNH9A7n9QeEAcSGddFJaV8DAdkkDVvugFASkJSyyy3eK8p0v5aHbmN30BQybhNuMUKiEK5mqgeE4hqwHL2JvQEnVmtwJ0o9cPCdQ5tsMOeUr8IGOqUBETDEiicHsITOYnnvYuLtuFXRkD%2B7vcq7MeCHt%2BgrO1zwaFb1Hoo9YnCdh2u1lK3D4y5NIbzvSf1K1y2ct3CEtmHxJ7SBK3831tDQOmXoOk6PvJDDuX3fCG8eCnTomJ5CvE39Vu0dG8bh7ZmouXyaCh%2Fg2WPEkBlrLFiDQNTc5akhCLqKhRcl0g8Ej3Qz82oVTVZJJAFSBqyyCEpbZ7so%2BDflwBdb&X-Amz-Signature=329da3798df7c380176e993c09318af88146668f7f9093fdc5d9c44fde839a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYCWFYI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDn%2F%2BKYDDgVySD9%2FVYcEvWknkXp1Y80U%2BNcHlSpw7qaxgIgIN3tTHdGPoMNgII4KflJfRmylOoMOaUWtI4smkz5MTcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKVG3MNUUudlFGKumyrcA6oC6YbAwOURx2Jk572IOq6jifJTEvF52fd1u8h5Wo%2B0xZvbqWhNTN55keqmO%2B6WWyyDUNIdA2luEaS71E95%2BZAGKvdm5HzJojprxES1ny%2ByZ0i4HUL8c6jUwdkeOO1CouQJsdYWy8pqSzExbLyTqNfy8d0hGeseYyAATHQnMfGGulKzaGQsup2cp2PdOyEoOQCTx%2BRGtYApWpzK4AocM0H1AvYyFunbRucj3AyKSv9Uvzf0veo%2BaVfn72SWpkKx%2B6A3gHzWhx6mjpsA3%2BaMUYEEZ0FTP6T3G2nx4AMIzFsMMJiNqcwwRXXQk7wlnknP2XO9ujx8LpCKXC92zzUhpdqzSZ3t%2BbotPGnTi8CBg0n8DltDt03IWqqMRvEdaojgjCxqnf8D%2B2TpHO%2FwBtneLGLzR93DYSwoGvYuqI7q%2Br67J%2FgLWBvq5ETYm8QagCHcqgBS9IL%2BnvgIPlFsWAeKl5KCtnkSFvsLXyrprTVvyEkxvSRFt3lwT2zBJPXzakbV2vl2c36wc6RlU6X9Pr3wAsNH9A7n9QeEAcSGddFJaV8DAdkkDVvugFASkJSyyy3eK8p0v5aHbmN30BQybhNuMUKiEK5mqgeE4hqwHL2JvQEnVmtwJ0o9cPCdQ5tsMOeUr8IGOqUBETDEiicHsITOYnnvYuLtuFXRkD%2B7vcq7MeCHt%2BgrO1zwaFb1Hoo9YnCdh2u1lK3D4y5NIbzvSf1K1y2ct3CEtmHxJ7SBK3831tDQOmXoOk6PvJDDuX3fCG8eCnTomJ5CvE39Vu0dG8bh7ZmouXyaCh%2Fg2WPEkBlrLFiDQNTc5akhCLqKhRcl0g8Ej3Qz82oVTVZJJAFSBqyyCEpbZ7so%2BDflwBdb&X-Amz-Signature=afdeb527d0a3169114036efa6423174f6b4b38d9116ea6b6a1ce7dd0e3afdc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=00829c612233ca3e79b55cb4600aca2227192ad6fbb8ab9e017ee6642377eb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2HKWAY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFTOqcsXdiDBfXAqmkob7JJEl6%2BQc%2FKTbf88U4KGVk5XAiEA4EWko6kfjN7ZOPaCEjC%2FT%2FtT9sXobseOqsO7a8zrgesqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPcR9rrKUh9f6%2FmwircA3Y3pXIAuLqmD3Z3XKwu6av31aIXPwvK7GJGF5aXl9wGjZpNDQwGJNJVz%2FtH9iT7c%2BqfamOYjt9iKHHI%2BpiTa13SvNd7hiZ3BcQ8ecQcqcZJmaDrv%2Fr1tpv0pY%2FqgqEJJb07QDvye5BHhyGXWqknFEgPojBGfHYyOLG054wh%2FQvvbLu4zOs9YLAMKtl%2BuIMlA30Ng8ve8hNxJ%2FDa0U5DzUNrG%2FepYL9Ke5Nq1LcXK5hj2lJTe6IcrUxi%2FAgYZOg8Ob9R%2Fo9G%2FKSH2760l1quHJhfYfOOvPX7E058Ws18e6EoBbfjWp7%2FRrxUiGt9qrNf1IPXFOPOMRtASRA4QrVlGnsubDToyLx%2B9gPqqi%2B7ugXpJ3bqz4m5XEkXcY5zyoD%2FsTvj2xE%2B1wzARoie2jsGf7K%2BPbLlQ7ALSxsqq%2B8UYUyJGWKnjdDg%2FAx%2FHlquUeRfNBsMakHxGoeX3eTbKBzuVFdgDB2hpR4aKcFDnqSvxk8iZcy51xG3Oy6BiuG2TA50%2B6LSFWyCzO1%2FqroHQMebArFrEqnKXwKwmpNdbFyVoh9LuBXTtyF2%2BgLU5zE1pbU1EPo2NRfiGuXv%2BATWOWjoetY4fzTCdYg9Yn5Qu9RuIEnWdZIga%2Fg4Ej7FmpOKMOz%2BrsIGOqUB%2BbukB%2BgyqSAdLisWEyHqvPykx%2B4veHV2TbCK1EY2Ny2dK2BLoil756VIy2dQ8Mce%2FalfkUhff2LAY%2FrQLvTPNg4bRRjoRShMXBkduGrAMCBqA%2FFl3JWjHLDtxauLKxgEZWKYCUCIcVWBZv5Q8f9bq9%2BdlIqZwFw3FJF2%2Fa4thU5QWV%2B5ZCaGmgd0bDOpzJwFCyVnZLPIpWp5cHD8fuEMgGysKa0y&X-Amz-Signature=5694a0041c56f0c569599d472bcd9a5c71a33fa39bbd45f7c06d4d80dd44bb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYCWFYI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDn%2F%2BKYDDgVySD9%2FVYcEvWknkXp1Y80U%2BNcHlSpw7qaxgIgIN3tTHdGPoMNgII4KflJfRmylOoMOaUWtI4smkz5MTcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKVG3MNUUudlFGKumyrcA6oC6YbAwOURx2Jk572IOq6jifJTEvF52fd1u8h5Wo%2B0xZvbqWhNTN55keqmO%2B6WWyyDUNIdA2luEaS71E95%2BZAGKvdm5HzJojprxES1ny%2ByZ0i4HUL8c6jUwdkeOO1CouQJsdYWy8pqSzExbLyTqNfy8d0hGeseYyAATHQnMfGGulKzaGQsup2cp2PdOyEoOQCTx%2BRGtYApWpzK4AocM0H1AvYyFunbRucj3AyKSv9Uvzf0veo%2BaVfn72SWpkKx%2B6A3gHzWhx6mjpsA3%2BaMUYEEZ0FTP6T3G2nx4AMIzFsMMJiNqcwwRXXQk7wlnknP2XO9ujx8LpCKXC92zzUhpdqzSZ3t%2BbotPGnTi8CBg0n8DltDt03IWqqMRvEdaojgjCxqnf8D%2B2TpHO%2FwBtneLGLzR93DYSwoGvYuqI7q%2Br67J%2FgLWBvq5ETYm8QagCHcqgBS9IL%2BnvgIPlFsWAeKl5KCtnkSFvsLXyrprTVvyEkxvSRFt3lwT2zBJPXzakbV2vl2c36wc6RlU6X9Pr3wAsNH9A7n9QeEAcSGddFJaV8DAdkkDVvugFASkJSyyy3eK8p0v5aHbmN30BQybhNuMUKiEK5mqgeE4hqwHL2JvQEnVmtwJ0o9cPCdQ5tsMOeUr8IGOqUBETDEiicHsITOYnnvYuLtuFXRkD%2B7vcq7MeCHt%2BgrO1zwaFb1Hoo9YnCdh2u1lK3D4y5NIbzvSf1K1y2ct3CEtmHxJ7SBK3831tDQOmXoOk6PvJDDuX3fCG8eCnTomJ5CvE39Vu0dG8bh7ZmouXyaCh%2Fg2WPEkBlrLFiDQNTc5akhCLqKhRcl0g8Ej3Qz82oVTVZJJAFSBqyyCEpbZ7so%2BDflwBdb&X-Amz-Signature=7c42d5c6c66c471f98d3d9d4e1d94590004527d4a569f1ac643b97e7ebbcafda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
