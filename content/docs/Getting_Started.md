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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCD5HE7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHvxHik3H7w3ZpwGskFGSmWQMtpiEXA8QK9MoxVA6XQAIhAIrRRDK%2B1541QmVRQOa0vEuAAgYtVKAZXtWOoaRZ08GkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwNp28Q%2F9Tqykl6Ynkq3AOeaW%2FaK4tZJDBHg5lKYil2R8pfHPhsITNVzR8ytkw8cYODYzShbJimDoBTfYq0o%2Bz5jeWXtKATQLm1CssMNKWD9Av4hyyxZwQgRuLWE%2FbgoliN739RRY5slkFsmeWOiS9UA3bCmG4AoUvoL%2F5J4lCEgyGqsoUkyyoTYDrh%2BWqEmIiKhUdiqHiYuQs%2BqWjcVsnkpJ7el9ydujTg2jfDJZFAGduH7%2BkNNXdEorbRZESxMA7gGRWhgi%2B%2B%2FMryp%2FPuRwqK5j8e%2FC2WBnia3C0XDCIVN1ZqXAjFg%2BTDp2C19mUMBHLtnBiCRJ9zEa%2FbANcGr4ELJrVoKmFfNgqIiHPzNyFKoid69wFfl45o%2FZuRV%2BhkkE7ACZKumvAvnhq7Mt3vNOkb%2BCGaCxVXroHEa1uGff9L6Ux2qRRnz9gyrMWyGa5WwMegiTquoOVosPpyhYTz2aee2eP2xZU7qv%2BrGiOdsjha8IMPqUJ4W5XIG9mHz%2F%2B1XFGQJvYTThS%2FG6feKekv2ufhwkC1MpryUopKLo2nLEsHANJHlSRU%2BqLWzP06TS47lEgH52MdEz0zC1RYGNG2dd5NkMFYqdXpyBbWVC5zjkLEBvK%2FZa%2BMR%2B9VpU2M3dkiHpJuPblRlA%2F%2Fu8qn9TCqp8XCBjqkAT7ifKNauJfYzHDea3e4F7%2BYNlm69xj5TCRrA%2F43v3jUkNyaedGyQXlUbk3DtQC3F%2Bs1ZTOnx7UCASsS79mewKSyGAHMRM0bbeGmi3M6OCdBjeBN%2Bj1s678tuVKcU9L4Y0g0eyGlKsJ7sPdjpKBQj8g7jnGSOucpP8V3m8lO6i6vDy6YQTXgHbf5h0AUjRSoEw7aGsmpwl6LMfqTsJ8Zdp4aZG9J&X-Amz-Signature=3947aa17420c3d353033eb197377e185bc0879ee0ac3618ca307de8470cd1e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCD5HE7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHvxHik3H7w3ZpwGskFGSmWQMtpiEXA8QK9MoxVA6XQAIhAIrRRDK%2B1541QmVRQOa0vEuAAgYtVKAZXtWOoaRZ08GkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwNp28Q%2F9Tqykl6Ynkq3AOeaW%2FaK4tZJDBHg5lKYil2R8pfHPhsITNVzR8ytkw8cYODYzShbJimDoBTfYq0o%2Bz5jeWXtKATQLm1CssMNKWD9Av4hyyxZwQgRuLWE%2FbgoliN739RRY5slkFsmeWOiS9UA3bCmG4AoUvoL%2F5J4lCEgyGqsoUkyyoTYDrh%2BWqEmIiKhUdiqHiYuQs%2BqWjcVsnkpJ7el9ydujTg2jfDJZFAGduH7%2BkNNXdEorbRZESxMA7gGRWhgi%2B%2B%2FMryp%2FPuRwqK5j8e%2FC2WBnia3C0XDCIVN1ZqXAjFg%2BTDp2C19mUMBHLtnBiCRJ9zEa%2FbANcGr4ELJrVoKmFfNgqIiHPzNyFKoid69wFfl45o%2FZuRV%2BhkkE7ACZKumvAvnhq7Mt3vNOkb%2BCGaCxVXroHEa1uGff9L6Ux2qRRnz9gyrMWyGa5WwMegiTquoOVosPpyhYTz2aee2eP2xZU7qv%2BrGiOdsjha8IMPqUJ4W5XIG9mHz%2F%2B1XFGQJvYTThS%2FG6feKekv2ufhwkC1MpryUopKLo2nLEsHANJHlSRU%2BqLWzP06TS47lEgH52MdEz0zC1RYGNG2dd5NkMFYqdXpyBbWVC5zjkLEBvK%2FZa%2BMR%2B9VpU2M3dkiHpJuPblRlA%2F%2Fu8qn9TCqp8XCBjqkAT7ifKNauJfYzHDea3e4F7%2BYNlm69xj5TCRrA%2F43v3jUkNyaedGyQXlUbk3DtQC3F%2Bs1ZTOnx7UCASsS79mewKSyGAHMRM0bbeGmi3M6OCdBjeBN%2Bj1s678tuVKcU9L4Y0g0eyGlKsJ7sPdjpKBQj8g7jnGSOucpP8V3m8lO6i6vDy6YQTXgHbf5h0AUjRSoEw7aGsmpwl6LMfqTsJ8Zdp4aZG9J&X-Amz-Signature=5398d8a6b8d4f83987735b629ce11252fed3515a397830d933d29d5b3770c485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCD5HE7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHvxHik3H7w3ZpwGskFGSmWQMtpiEXA8QK9MoxVA6XQAIhAIrRRDK%2B1541QmVRQOa0vEuAAgYtVKAZXtWOoaRZ08GkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwNp28Q%2F9Tqykl6Ynkq3AOeaW%2FaK4tZJDBHg5lKYil2R8pfHPhsITNVzR8ytkw8cYODYzShbJimDoBTfYq0o%2Bz5jeWXtKATQLm1CssMNKWD9Av4hyyxZwQgRuLWE%2FbgoliN739RRY5slkFsmeWOiS9UA3bCmG4AoUvoL%2F5J4lCEgyGqsoUkyyoTYDrh%2BWqEmIiKhUdiqHiYuQs%2BqWjcVsnkpJ7el9ydujTg2jfDJZFAGduH7%2BkNNXdEorbRZESxMA7gGRWhgi%2B%2B%2FMryp%2FPuRwqK5j8e%2FC2WBnia3C0XDCIVN1ZqXAjFg%2BTDp2C19mUMBHLtnBiCRJ9zEa%2FbANcGr4ELJrVoKmFfNgqIiHPzNyFKoid69wFfl45o%2FZuRV%2BhkkE7ACZKumvAvnhq7Mt3vNOkb%2BCGaCxVXroHEa1uGff9L6Ux2qRRnz9gyrMWyGa5WwMegiTquoOVosPpyhYTz2aee2eP2xZU7qv%2BrGiOdsjha8IMPqUJ4W5XIG9mHz%2F%2B1XFGQJvYTThS%2FG6feKekv2ufhwkC1MpryUopKLo2nLEsHANJHlSRU%2BqLWzP06TS47lEgH52MdEz0zC1RYGNG2dd5NkMFYqdXpyBbWVC5zjkLEBvK%2FZa%2BMR%2B9VpU2M3dkiHpJuPblRlA%2F%2Fu8qn9TCqp8XCBjqkAT7ifKNauJfYzHDea3e4F7%2BYNlm69xj5TCRrA%2F43v3jUkNyaedGyQXlUbk3DtQC3F%2Bs1ZTOnx7UCASsS79mewKSyGAHMRM0bbeGmi3M6OCdBjeBN%2Bj1s678tuVKcU9L4Y0g0eyGlKsJ7sPdjpKBQj8g7jnGSOucpP8V3m8lO6i6vDy6YQTXgHbf5h0AUjRSoEw7aGsmpwl6LMfqTsJ8Zdp4aZG9J&X-Amz-Signature=41aaac61024f4d5d31569a5ca6720bac73ff846342cc37425ef2aaa4bae95d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHFVCM6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrAZ0%2B4Az9t3vVbteEsS%2F56qbQrpSBbO6HCBDe%2Bc%2FkzAiEA6PDlUC1xe8r9unlv3zM1zMgFNBxZNwBso7AedV3cgNYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAbCkXaq6clpjaYfkyrcA5%2FFIwMAYh%2FaUohGOGqdjlC3lQlMxWa8jhKbW1bRIrPXT%2B7z7Zl9W2Z%2BJfegPVOhF91D8Q9jQVDTuziM3ATzIutGMNxPWfmAREdnN0RvtexiU2RT%2FLrm9724nTXD486Bnr2BmUTZ4nLEY%2BS5J28Gdg1YLL22tKr%2ByxNllpoqVEa9EQ%2B7BUsey2nBa1BW%2FPHp0ebN9Q5sgQeKgd7%2FKssG2%2F%2FvHoRvjDkV%2BuaYRtvvWXQkH6PhNMf%2BWdSLgcz%2B%2BSWdFpPj2uXni%2F9TArwuAqM%2FNSwBghP5t7j632PqIZnsBWBh5DZKzV8agYOsGYTpcAgrdv35VB1FdotGwVJ4WDtOfhnDCyVTR42hWl22o4wYhyjXn%2BiDyKXhsMcbuedMRb5uzlaFnsOaxYZmSgVmUxBe5eYX96a9qqd5SMeLBt9N1ktZOc8GFMm2msGjt%2BZzzpSEmAX9cGD%2BKSQSpdVQ9KbvpIUX0k1hg%2FmA7DhSvlYclihM1J8JGKhZLJjc%2Fq050L7E6Uxk%2BU90gVTDINK%2B9Liri28z10m1Bdj7p9qLSnI5%2Bj0zodKYLt59owxZU840KB8ti1xMkQHtmfB3YrSKqdzy1oNTEHyzePRDFko8TGtxtp8Cpft3Y9sCMqILAmpBMPe2xcIGOqUBj8Mf%2BPPNRYEOogwVObCD5qKWesx9xi4LdxGAswCIcgn0pLdAvGrtQjuBk6czU%2Fgc8YGt1sYiuWPyJ0q%2FHrmtOS%2FLExCoaEWmI%2BrVZapM498vJ4iLbe1nERa9I4%2FV%2B%2FMt7TqpZ7egzjxbX3HrwlT47SHD51g4kzrYeNM%2Ba2Y%2BaUzf2tuJ%2BJzLFMLL4Q9qP%2B%2FE4611OXvV%2BBnwxX%2Bdr8gtUhZawmLl&X-Amz-Signature=0ca6aeeaa5161d8493ba664d282aa57adeb6040dfc57e5995b5ef8bda2ab13e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNIK34Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFiyS65pFaLwZYoLHfVTqs%2FNSNCIg6xiS2E40P9ebpmgIhAK8cl6gYjB6%2F1cG5V7RnO6idpYSHWUeYwoYKNCzW36dzKv8DCHUQABoMNjM3NDIzMTgzODA1Igyn1aVCcfLUpfcvHUUq3ANhulKW%2BebemURqcLzfZdWkYz35QkU7UOR7WSelcYWlAvwiZGeIltx6q52WR4ijsCwKE7DBmEd7tkrZVbhDPtpRTknLuoWNRRm88YGopra4wOHAfhJ5cybxoD%2Fwax731FNuqACkzKo3tr7f%2BalyUr9iYBznbSj5CzusOqe%2FzN%2Fsd9N%2F9oXkBfP1vr5BJmM4%2BH7QM4RjYLtAPe7zXtM4oW9VusQcurHzi24q4occZ6vTg3tkh3eiT8QTOM9IltWUigbRC4Q1NuRSGVdvHldMq6yG4nwCcL8ASclGebXbAMbDNPq24CT%2BCSsXdscZHumbzpt5rNuopavLhejT2vj%2FZcgNIFVxuyRHnT%2FlKIp1sIInigQqP1C0oGLjdAyxXXHHZnNerYngdy3UJ0uBVpj0oHTpITH4zlOffcKs1odura8I60HsfyZPtY3uZ%2FvdsCdNJw6R6jyLVUGK2OqpZf6jH%2BwzFqmMwxRv7P7W6qSIdTuwpWBkau2CJ%2BTlMD1%2FaA4t0APpfw067fByqZUfsBfm5HmMmE9sro2fK%2BuPww%2B8cIDMcjjk5C78Txb%2BKXsV5PxiHXubzzO5sTwIoTjRbE0zaTulRlvR4GMBJdildA%2BIf0hSFSJlBlPLQcuRENmTrTDxpsXCBjqkAQFWEWl9A5Z%2FHJ6%2Fr0GLvg6JaVk2xEEDWbQBfbW%2B%2FKE2LZTNNXXj3TwjCl0pFa0SZnhlCvahZRCsH3wOezOFYn%2BD9mCJOBZHpe%2FH%2Fy5hMRcN8%2BHWACz1Nqos%2BD1XXLzJStF5%2BkQHdQAg359DdArhbpaWAswNkHs16ft4ykW8jXj88NAL9fjMCdEtJBOBYOrS2MZ6tZDBEl%2BybW7zvOIJ1epuz9Sb&X-Amz-Signature=0012a42b397b478d926123e9b0d9840b9d773f9f3ab82da71c4f036ef8f2f25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCD5HE7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHvxHik3H7w3ZpwGskFGSmWQMtpiEXA8QK9MoxVA6XQAIhAIrRRDK%2B1541QmVRQOa0vEuAAgYtVKAZXtWOoaRZ08GkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwNp28Q%2F9Tqykl6Ynkq3AOeaW%2FaK4tZJDBHg5lKYil2R8pfHPhsITNVzR8ytkw8cYODYzShbJimDoBTfYq0o%2Bz5jeWXtKATQLm1CssMNKWD9Av4hyyxZwQgRuLWE%2FbgoliN739RRY5slkFsmeWOiS9UA3bCmG4AoUvoL%2F5J4lCEgyGqsoUkyyoTYDrh%2BWqEmIiKhUdiqHiYuQs%2BqWjcVsnkpJ7el9ydujTg2jfDJZFAGduH7%2BkNNXdEorbRZESxMA7gGRWhgi%2B%2B%2FMryp%2FPuRwqK5j8e%2FC2WBnia3C0XDCIVN1ZqXAjFg%2BTDp2C19mUMBHLtnBiCRJ9zEa%2FbANcGr4ELJrVoKmFfNgqIiHPzNyFKoid69wFfl45o%2FZuRV%2BhkkE7ACZKumvAvnhq7Mt3vNOkb%2BCGaCxVXroHEa1uGff9L6Ux2qRRnz9gyrMWyGa5WwMegiTquoOVosPpyhYTz2aee2eP2xZU7qv%2BrGiOdsjha8IMPqUJ4W5XIG9mHz%2F%2B1XFGQJvYTThS%2FG6feKekv2ufhwkC1MpryUopKLo2nLEsHANJHlSRU%2BqLWzP06TS47lEgH52MdEz0zC1RYGNG2dd5NkMFYqdXpyBbWVC5zjkLEBvK%2FZa%2BMR%2B9VpU2M3dkiHpJuPblRlA%2F%2Fu8qn9TCqp8XCBjqkAT7ifKNauJfYzHDea3e4F7%2BYNlm69xj5TCRrA%2F43v3jUkNyaedGyQXlUbk3DtQC3F%2Bs1ZTOnx7UCASsS79mewKSyGAHMRM0bbeGmi3M6OCdBjeBN%2Bj1s678tuVKcU9L4Y0g0eyGlKsJ7sPdjpKBQj8g7jnGSOucpP8V3m8lO6i6vDy6YQTXgHbf5h0AUjRSoEw7aGsmpwl6LMfqTsJ8Zdp4aZG9J&X-Amz-Signature=4b1c887a1ec9e1651fc5c66107a221fda079d556afdda103e80d8051a8840b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
