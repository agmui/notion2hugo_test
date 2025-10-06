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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCCH5N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsKbpfr9sDMDxKBGk%2F8HysBiJj1nvvnuwtx%2F0IJbbRYAiEAxsS6xJPvvyltyRP9o5hvkw87O392hV7dOA%2FAnVfMLysqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLZh4rpEmJTm2mQBircA1yWe696YucfJ0VL8saLGmPH1xs7aBvD8BBk1ByIHo8T90zZTTQc%2BqSOJOQreE6HZq1rQXSkDZ7q6ZaOiGMkBW45njI5uIiHL%2BqqAXpgAdaHLjLOC6%2BhqgAD6%2FbRIyA8JS%2Fxk3aaPIlknsrn81DpkbQ5YW0OfDiS%2B8n0Vj9fVjDSo9Lg%2FzLJBywKhKsEv3y42GfvZYD7PxE4xLV4anHf5mHDSv%2BlNjUf0G4Z70O5IFNzz429pOWlt%2FLB9hHcScIPBNB4RziamGV2i0B7uOlZyDIOoa5pAkOeFTXeIw5WNhoirI3U57BwKY9Ih2pFCKntiInUUVZtVQhinmAvyfes7HdIBmNPX1rRESwLctq1U1X7xYCNUCXsS5i8kcQTIQ5AnFbRXwHCmn1c3XI3TM6HiktJMU%2F2gTzBnk9n91EYlwNr5OOQbQvdwMNedayQhE1d%2BtOujSRJfLMTp3w%2FMaQ%2F5sg%2BZYoR%2BJSpCVdGzKUcC2SsGKxnssUDEtXurATHFJ7RyXs225IQ7I7M7MiFn76%2BAGXWJ5vkRlOTl%2F3BBTV9mkrKJDKZ6lCng%2B%2F9ikEtEDuMU2CKsMrF8Fl4GoIEEsC68EhkNv3clGDYuaqWrCp2uigOdqNWk63kYtqAFVNqMLqWjMcGOqUB9YcJ9al5HKaRs02IiSU9PkPTfcE5LNxu06zsQhC16w8nxQx%2F9Zmxf2zpEcg0nCB3Eb3xHZkOcsG2Rq6Rb11MeLy1GXfEY%2FbFCKsH43q29UDgTulN5SisylrxAtqOzwtU6an8I8xpx6w%2BT2LcDxtQuVqXk2iB6ZqLF5XRSZzkhFtw1foLqshmAXdJqJwK35ND1jU9udZosbuKH%2Bnrm090UrAeQDLW&X-Amz-Signature=d1df9db3d6e4219f77c3765e1dafa6f23fbf1d8253cdad496d1e7573706ec9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCCH5N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsKbpfr9sDMDxKBGk%2F8HysBiJj1nvvnuwtx%2F0IJbbRYAiEAxsS6xJPvvyltyRP9o5hvkw87O392hV7dOA%2FAnVfMLysqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLZh4rpEmJTm2mQBircA1yWe696YucfJ0VL8saLGmPH1xs7aBvD8BBk1ByIHo8T90zZTTQc%2BqSOJOQreE6HZq1rQXSkDZ7q6ZaOiGMkBW45njI5uIiHL%2BqqAXpgAdaHLjLOC6%2BhqgAD6%2FbRIyA8JS%2Fxk3aaPIlknsrn81DpkbQ5YW0OfDiS%2B8n0Vj9fVjDSo9Lg%2FzLJBywKhKsEv3y42GfvZYD7PxE4xLV4anHf5mHDSv%2BlNjUf0G4Z70O5IFNzz429pOWlt%2FLB9hHcScIPBNB4RziamGV2i0B7uOlZyDIOoa5pAkOeFTXeIw5WNhoirI3U57BwKY9Ih2pFCKntiInUUVZtVQhinmAvyfes7HdIBmNPX1rRESwLctq1U1X7xYCNUCXsS5i8kcQTIQ5AnFbRXwHCmn1c3XI3TM6HiktJMU%2F2gTzBnk9n91EYlwNr5OOQbQvdwMNedayQhE1d%2BtOujSRJfLMTp3w%2FMaQ%2F5sg%2BZYoR%2BJSpCVdGzKUcC2SsGKxnssUDEtXurATHFJ7RyXs225IQ7I7M7MiFn76%2BAGXWJ5vkRlOTl%2F3BBTV9mkrKJDKZ6lCng%2B%2F9ikEtEDuMU2CKsMrF8Fl4GoIEEsC68EhkNv3clGDYuaqWrCp2uigOdqNWk63kYtqAFVNqMLqWjMcGOqUB9YcJ9al5HKaRs02IiSU9PkPTfcE5LNxu06zsQhC16w8nxQx%2F9Zmxf2zpEcg0nCB3Eb3xHZkOcsG2Rq6Rb11MeLy1GXfEY%2FbFCKsH43q29UDgTulN5SisylrxAtqOzwtU6an8I8xpx6w%2BT2LcDxtQuVqXk2iB6ZqLF5XRSZzkhFtw1foLqshmAXdJqJwK35ND1jU9udZosbuKH%2Bnrm090UrAeQDLW&X-Amz-Signature=24da7d7cf99ac87fbc9061e34bd7605eba9cce7990ee6cf288a7a5dbfdffe237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCCH5N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsKbpfr9sDMDxKBGk%2F8HysBiJj1nvvnuwtx%2F0IJbbRYAiEAxsS6xJPvvyltyRP9o5hvkw87O392hV7dOA%2FAnVfMLysqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLZh4rpEmJTm2mQBircA1yWe696YucfJ0VL8saLGmPH1xs7aBvD8BBk1ByIHo8T90zZTTQc%2BqSOJOQreE6HZq1rQXSkDZ7q6ZaOiGMkBW45njI5uIiHL%2BqqAXpgAdaHLjLOC6%2BhqgAD6%2FbRIyA8JS%2Fxk3aaPIlknsrn81DpkbQ5YW0OfDiS%2B8n0Vj9fVjDSo9Lg%2FzLJBywKhKsEv3y42GfvZYD7PxE4xLV4anHf5mHDSv%2BlNjUf0G4Z70O5IFNzz429pOWlt%2FLB9hHcScIPBNB4RziamGV2i0B7uOlZyDIOoa5pAkOeFTXeIw5WNhoirI3U57BwKY9Ih2pFCKntiInUUVZtVQhinmAvyfes7HdIBmNPX1rRESwLctq1U1X7xYCNUCXsS5i8kcQTIQ5AnFbRXwHCmn1c3XI3TM6HiktJMU%2F2gTzBnk9n91EYlwNr5OOQbQvdwMNedayQhE1d%2BtOujSRJfLMTp3w%2FMaQ%2F5sg%2BZYoR%2BJSpCVdGzKUcC2SsGKxnssUDEtXurATHFJ7RyXs225IQ7I7M7MiFn76%2BAGXWJ5vkRlOTl%2F3BBTV9mkrKJDKZ6lCng%2B%2F9ikEtEDuMU2CKsMrF8Fl4GoIEEsC68EhkNv3clGDYuaqWrCp2uigOdqNWk63kYtqAFVNqMLqWjMcGOqUB9YcJ9al5HKaRs02IiSU9PkPTfcE5LNxu06zsQhC16w8nxQx%2F9Zmxf2zpEcg0nCB3Eb3xHZkOcsG2Rq6Rb11MeLy1GXfEY%2FbFCKsH43q29UDgTulN5SisylrxAtqOzwtU6an8I8xpx6w%2BT2LcDxtQuVqXk2iB6ZqLF5XRSZzkhFtw1foLqshmAXdJqJwK35ND1jU9udZosbuKH%2Bnrm090UrAeQDLW&X-Amz-Signature=1d9e1ad4eaabf6900cab8c502fbaced92c457b4ea01503546621657d58c8e2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFSZ27R%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBakbA5DU01cicTaiFqP8IOPiMlOb3IuDLQ%2Fq4gZm7KfAiEA6rc6BT%2FoMgdwDWw%2B3K5V8md8AZ%2FTJmC1xn%2FWFJUZblcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh38nbpnRjygDz%2BqircA0GVASazwFfBH69Q8pBmVKIwuF1AoLaVisiQ7y2399sCaSqJvSFuZzmaKIGbBQWMVVfPcfzgDxsH6Ex3SWqz0%2FY%2FIvhwWN%2FcywRdn6ZAUvDXTOm3rT3WAItJx4BuCIq4l6sgx7%2FwiK2vx5iJXg4EdEcRKoelmU21lOUmiZ8%2BWgLbZk6T7EgLOJSUBI90yyhRL%2FzYlz%2F5OcJ9sYc6JRX4CQAi2ar1Dr8vNzQnXa2GkwHsWe0fJFOAZqK602RIusbV4W6rTTrFFNz5nzdmF%2F8gc7Z%2FuLgMInXn7vDAFs1x6YLBixT1QSgA6tUPtKG3sXLnanhDQVC9r8zkwCQsoAlsU8J%2B%2BHfHNLhvuimbZm%2FEJ7v3Rmyj1Px%2Fst7%2BxHVc34%2FT9XBD1BoW%2ByFt6cnPim8PoN6twqUiSaOOo5AlwpV5rjNb68FcxFzj3Luv4M0Y%2B7Eog%2BIEVJkuyjMHa3Z145l%2FxEfmC4vaXnJqAAKdrHFrNF1Fkmghfg26Cez0bK1Bh4T7gGk%2F7yEZB0xpNdYgKFnparCqM9td533P1q5OZoxtPQbjYm3e6XxzVodYhrm1vDmUcXlbfJypo9VE%2F0jdmvHDbY%2BqnRTU%2B%2BhvKR792ussyUwtSOqI9U4RLn%2F%2BRmKHMOWVjMcGOqUBaMYiM99hpqdxz3qDMQjQKs81EjyZDxgV2AYNy5GWFpXxPb4dRXOqYKxYYo6QUTufzPqTmHMuibQ2Pwvsa9uj5dMfQfxWziUXhVBqFVPOYVGXQnbfqqNcf%2Bj8ffIAJDsjQVolNtTfbmgPWdAyIG5biQIlj%2BhxDm%2F6QdzF9GPUby9gC5bH%2Bw0dZnImZREeG73uDmSMfSZPV96ZD6i8KhGqb7vlfaeo&X-Amz-Signature=f3047863d2c4e66c60caa55e8cdb42d486d7837504c4730c96fba72fd5d9a10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SA3YG4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc06qxqr0EBVWSrxhAMexf1Qqz9Pqhc2RXcURIXBDDqwIhALLxdqQHjfv3gkE41CXnqU7sLqepcHnIQYddDjxU3TIYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF4hMIqE9ftP%2FTGu4q3AOUdIYXIsz8DkYzyq5wtcoxJi7wHVw6fE3FJmfV1A1Rir4MdhX%2B9%2F5VTEEQUOD4MHrg0ztq93E2NE3uS5rrkOV2n2wFR0l7l7Y9UU1TLzesNwLGoFwhGcao3vbW5QwYAESFilm6Q3QzSRHj5eLSFTbhIi%2BeChLOjkUdjuoBBKtT%2BO7QHb48j3UyFilEGCBP8kNQ2XKnqKZXx%2FD8RVEr%2BCczwwDfFCS4StpqwMzzq6emxGh3Nu9mU%2B1Nhx7SuuYaaUooJsPiPNETBptamb%2BUftfu6Wt%2F%2BmHZr%2BTquYBfT9QHDdUYIp5ubm3yms4ERX5tMgYv3BhNDVlSOiuHBiCuM%2B55B3ZLAePP1ANmWDaYLB%2B6l5eavdMKJYnXTjRMSkO%2BsWz%2FEWlRp%2BGHuTzRI11RUtH3lrqDHfVoiCy3M8f1OH2MrkY8t9S3hnAx6mVxEXWRyfXkCeWXshM8kLj63qkzSqyMb7S%2BpDTJdlFMtNl%2BjRjPR%2FT4DZ2NrdMqwY4twMCR97XkIagU3%2Fp0vLoH8EDZQi0JUokfk5Q%2BMew8DdDLgyjThH1zzrdOkNueuIyS%2BQ%2BHcd7p2Fx6fb0ApQtx%2Bu4SIa1qNQBr6HokjRtzBcS4G6LVNw2TGGqiOgLNLBr%2BCDDclYzHBjqkASwe95V7szkWUTW1v5fioreqQQcYfYiMuw4uSWp96%2B1Xggm56YUGqRwlzAcaQzRM66mwDy8Tsg4M14VN7%2FZXLjHC8bnY2L%2F2JLaS%2BN2ov24lOwsyn9F9U0Ay4bvKpcE%2B4F%2BxKjGQxLXSiHMFUjIFhugppqG8ARSAAnaaF9hG6qOTkYPfkE5ZFyVQDTxS3gbdsY7z%2Bee%2BKgRhMbw7xn63jsXVCe6d&X-Amz-Signature=e53882c65242a2fa0f77cb6d8142da1766052434b412c8fe7abc6b8ddb0f430b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCCH5N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsKbpfr9sDMDxKBGk%2F8HysBiJj1nvvnuwtx%2F0IJbbRYAiEAxsS6xJPvvyltyRP9o5hvkw87O392hV7dOA%2FAnVfMLysqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLZh4rpEmJTm2mQBircA1yWe696YucfJ0VL8saLGmPH1xs7aBvD8BBk1ByIHo8T90zZTTQc%2BqSOJOQreE6HZq1rQXSkDZ7q6ZaOiGMkBW45njI5uIiHL%2BqqAXpgAdaHLjLOC6%2BhqgAD6%2FbRIyA8JS%2Fxk3aaPIlknsrn81DpkbQ5YW0OfDiS%2B8n0Vj9fVjDSo9Lg%2FzLJBywKhKsEv3y42GfvZYD7PxE4xLV4anHf5mHDSv%2BlNjUf0G4Z70O5IFNzz429pOWlt%2FLB9hHcScIPBNB4RziamGV2i0B7uOlZyDIOoa5pAkOeFTXeIw5WNhoirI3U57BwKY9Ih2pFCKntiInUUVZtVQhinmAvyfes7HdIBmNPX1rRESwLctq1U1X7xYCNUCXsS5i8kcQTIQ5AnFbRXwHCmn1c3XI3TM6HiktJMU%2F2gTzBnk9n91EYlwNr5OOQbQvdwMNedayQhE1d%2BtOujSRJfLMTp3w%2FMaQ%2F5sg%2BZYoR%2BJSpCVdGzKUcC2SsGKxnssUDEtXurATHFJ7RyXs225IQ7I7M7MiFn76%2BAGXWJ5vkRlOTl%2F3BBTV9mkrKJDKZ6lCng%2B%2F9ikEtEDuMU2CKsMrF8Fl4GoIEEsC68EhkNv3clGDYuaqWrCp2uigOdqNWk63kYtqAFVNqMLqWjMcGOqUB9YcJ9al5HKaRs02IiSU9PkPTfcE5LNxu06zsQhC16w8nxQx%2F9Zmxf2zpEcg0nCB3Eb3xHZkOcsG2Rq6Rb11MeLy1GXfEY%2FbFCKsH43q29UDgTulN5SisylrxAtqOzwtU6an8I8xpx6w%2BT2LcDxtQuVqXk2iB6ZqLF5XRSZzkhFtw1foLqshmAXdJqJwK35ND1jU9udZosbuKH%2Bnrm090UrAeQDLW&X-Amz-Signature=1d9210834fc1261fadfa5fdd198b61e3f2fa7140b598273a36fb4ff9593388ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
