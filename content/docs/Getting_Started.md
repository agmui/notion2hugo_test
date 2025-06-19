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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D34JVAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BwFNHnfaYalFlcahCbSHYNhW2kPa1YnWQFRvpuBrqgIhAPOIFTPJi4Wf7bZoSbXIBjA1FrzerOYEo22DGwYidwY5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIwpYcKu538dQxTYq3ANaXTQgTN4Jp0S9ZkrY%2FWl4lPZMzAC1hjUrthOg4mFxwbT6agfaGHDZwc9Zvr%2FVXWy9YJYFVC7ibHKHs6td90hs0JTqy%2BiwdkZn%2FyxMcRMw16avBFF2pwDwbcg4uRwFzcgGRLoRyhD7w50mR8Y9THvq6MUtbIOo0b%2B%2Bny4ASO6qICwTNir1JIM8WNg%2FcyRbTnSdqnpbSwn7FjfkPxD9z%2FTsvMeWFXVMhpel72ECmIQCZYXsK7LRGBotSyZP%2BGsDn5Xex0wVOzyshO81WJBmoRt2nkbnp514y6sG6Qdt%2Flx6VcQrAXr30BVNFQ1Gdd21QJZNBjNGG8%2FmI5W51wEyvvdnAhY7HfCsB0XyQCDPuehCmQopZm8n9Hc7A5yxYRtzbOFyzsBKI7mUTyXXC5QedV%2BBKA1XGeQAp05dPDLcF98BBodGQFfi8iyR4PX6fYSNoYdxMPFN%2FPpyNDzCmBBkY702BbpQP5wVh56o%2Fv%2BBUts%2F6My66j0cDEZYLAtgCizAkRg4OdhONtGBFmVdkvtyMgjyHVFolft8fszz3qyEGyMtXUmLk4h%2B8OTyGeb5f4hisJC9MbzC5yjyZkaaUzVvmDn%2FxdTV3gOcbaOK2aPOZMMq8oxPhggtK11maOR%2BKzDFotLCBjqkAYeaeTy%2FHdHg7a0qDGwrL2ar4o88P0ObWHjkH4gfMxWixJC8rIVyJuRxZYB2gWinlx%2FVSp%2FCPvNfFwLeMOdm1G%2BGlEAFwBGZuNKpHS2MYua5RqWHTKa%2FrzfYkSmlafrl9yOyesLpgHE%2BJ%2BhFz4fwJb9uZ2zXIixtQTL2NmJ9zOklL9dZtctXrQR6XeZFHmO97t2h96z97LM%2BFMcyjyfuJOfoElVD&X-Amz-Signature=d06f7ccf47c56c056b45c0bcd154e325b377e309e816bc1b3047322aff77524b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D34JVAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BwFNHnfaYalFlcahCbSHYNhW2kPa1YnWQFRvpuBrqgIhAPOIFTPJi4Wf7bZoSbXIBjA1FrzerOYEo22DGwYidwY5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIwpYcKu538dQxTYq3ANaXTQgTN4Jp0S9ZkrY%2FWl4lPZMzAC1hjUrthOg4mFxwbT6agfaGHDZwc9Zvr%2FVXWy9YJYFVC7ibHKHs6td90hs0JTqy%2BiwdkZn%2FyxMcRMw16avBFF2pwDwbcg4uRwFzcgGRLoRyhD7w50mR8Y9THvq6MUtbIOo0b%2B%2Bny4ASO6qICwTNir1JIM8WNg%2FcyRbTnSdqnpbSwn7FjfkPxD9z%2FTsvMeWFXVMhpel72ECmIQCZYXsK7LRGBotSyZP%2BGsDn5Xex0wVOzyshO81WJBmoRt2nkbnp514y6sG6Qdt%2Flx6VcQrAXr30BVNFQ1Gdd21QJZNBjNGG8%2FmI5W51wEyvvdnAhY7HfCsB0XyQCDPuehCmQopZm8n9Hc7A5yxYRtzbOFyzsBKI7mUTyXXC5QedV%2BBKA1XGeQAp05dPDLcF98BBodGQFfi8iyR4PX6fYSNoYdxMPFN%2FPpyNDzCmBBkY702BbpQP5wVh56o%2Fv%2BBUts%2F6My66j0cDEZYLAtgCizAkRg4OdhONtGBFmVdkvtyMgjyHVFolft8fszz3qyEGyMtXUmLk4h%2B8OTyGeb5f4hisJC9MbzC5yjyZkaaUzVvmDn%2FxdTV3gOcbaOK2aPOZMMq8oxPhggtK11maOR%2BKzDFotLCBjqkAYeaeTy%2FHdHg7a0qDGwrL2ar4o88P0ObWHjkH4gfMxWixJC8rIVyJuRxZYB2gWinlx%2FVSp%2FCPvNfFwLeMOdm1G%2BGlEAFwBGZuNKpHS2MYua5RqWHTKa%2FrzfYkSmlafrl9yOyesLpgHE%2BJ%2BhFz4fwJb9uZ2zXIixtQTL2NmJ9zOklL9dZtctXrQR6XeZFHmO97t2h96z97LM%2BFMcyjyfuJOfoElVD&X-Amz-Signature=c83d58bd79ae4a42eeca08716dd6a5bd0edb9f801e97f8bd89862d6f9df53362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D34JVAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BwFNHnfaYalFlcahCbSHYNhW2kPa1YnWQFRvpuBrqgIhAPOIFTPJi4Wf7bZoSbXIBjA1FrzerOYEo22DGwYidwY5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIwpYcKu538dQxTYq3ANaXTQgTN4Jp0S9ZkrY%2FWl4lPZMzAC1hjUrthOg4mFxwbT6agfaGHDZwc9Zvr%2FVXWy9YJYFVC7ibHKHs6td90hs0JTqy%2BiwdkZn%2FyxMcRMw16avBFF2pwDwbcg4uRwFzcgGRLoRyhD7w50mR8Y9THvq6MUtbIOo0b%2B%2Bny4ASO6qICwTNir1JIM8WNg%2FcyRbTnSdqnpbSwn7FjfkPxD9z%2FTsvMeWFXVMhpel72ECmIQCZYXsK7LRGBotSyZP%2BGsDn5Xex0wVOzyshO81WJBmoRt2nkbnp514y6sG6Qdt%2Flx6VcQrAXr30BVNFQ1Gdd21QJZNBjNGG8%2FmI5W51wEyvvdnAhY7HfCsB0XyQCDPuehCmQopZm8n9Hc7A5yxYRtzbOFyzsBKI7mUTyXXC5QedV%2BBKA1XGeQAp05dPDLcF98BBodGQFfi8iyR4PX6fYSNoYdxMPFN%2FPpyNDzCmBBkY702BbpQP5wVh56o%2Fv%2BBUts%2F6My66j0cDEZYLAtgCizAkRg4OdhONtGBFmVdkvtyMgjyHVFolft8fszz3qyEGyMtXUmLk4h%2B8OTyGeb5f4hisJC9MbzC5yjyZkaaUzVvmDn%2FxdTV3gOcbaOK2aPOZMMq8oxPhggtK11maOR%2BKzDFotLCBjqkAYeaeTy%2FHdHg7a0qDGwrL2ar4o88P0ObWHjkH4gfMxWixJC8rIVyJuRxZYB2gWinlx%2FVSp%2FCPvNfFwLeMOdm1G%2BGlEAFwBGZuNKpHS2MYua5RqWHTKa%2FrzfYkSmlafrl9yOyesLpgHE%2BJ%2BhFz4fwJb9uZ2zXIixtQTL2NmJ9zOklL9dZtctXrQR6XeZFHmO97t2h96z97LM%2BFMcyjyfuJOfoElVD&X-Amz-Signature=c9ee22405076b66f581f4b057f244356eedcd3ce6233c7164e93a457ed96b5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4U7JGE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUHPqKCYnrRmUXiR1%2FQb9ZYXLWNXI0D4ASKRxIl81h1gIhAOUrMkD62QuQZmI6QHdmH4syphYwQ8d267Exlzw0FiasKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTx46H4c1NzNBMjPwq3AOoDFwtIQ%2BZz7EV1aHho%2FO70FOhrkDPchn1mCFPwNL%2BmsjWS8%2FpditE0JcPASJWLZFR%2FNbD6h1nET78jRbRnQJErBDwQkNmlrJ9xRM9UPIhoTmePS5JwBHSTameT71zZw%2FD%2FBvYvfPOlt%2Bmm2fdxLhiWedH7%2FhTYuevxLDAkyZaUnTWJLbumgjj4uSZCKQ74eUR4RWD%2BFUcHGiSzh01e6JWx3T3fADAqIN1qUDmsTnkUtSzqSldiZAUc22SRFJy7FAr842PGr85yqG9rQmCnAvX1wRCzg%2BlEVL2c5iF1LU%2F9n4TwuXvdLgHhm6W09ZUGTaIRi609IMSzw8WuA9tC1nPZh1YqgTYtvn3KpHFIE8kHu63%2BFEPahYvldYNkR7afYOgZRJGm33iSyXTeZximHZu%2BAL6OYhql2KFouUaFnTkeNLO%2BdQMl9RtCm2J6XWwcTjcFUmD9BTDERd0BY6j3z16x%2BFh%2F9TKJWmshdr7WijgLJrd%2BhUWhxw5bSUjw%2B%2FqsrrUe%2FNrOoZvwbuhXo9m118h2YMR6xRaKCckv5Hh1dLt9NgxqklAgY5p6YpjIvmsIvGLd%2Fl1518ngiqGgv%2BSmO56%2FW8IvQfV1U825JeLQJrJyiLdW9f6o2qjNPRDEjD%2BodLCBjqkAWn9NN%2FRc1OnY7SEZwtU%2FhJ6%2F8FfxQhcSL5ClMFVh7kFKHsvn99ZT4kv%2B7jiQlvea1gK2K2uJQQBCIz%2BjdmXfmBaS82lKqAppqrTE6BXuMZMt5zz3NT7xytGsfvKWpRElHCicKoG0dsgQjpYoH7y%2BB2hq12BxxqMGdqUCecpNHs0ZvRKSV3HmHIwzxVWLj5nvscyPSmfsjf9%2FKWsKpSLRWG6L3Ti&X-Amz-Signature=a2b7af798905ce88771e3262e42244d055fc5fa32227079e4a8e74cd115fc0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLZ2IV6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn4yc0Z4R7CIPm5ifMAomFxrKspe6RqgEFvuLtT4rhlQIhAN3rAlBwaslkqZNlHRWqKlHJg3b9WyMmTY3%2FUj2ZEEVYKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxThp3y1YYNFPtoM9Mq3AO59Lxxr1U22%2FK4YE9i%2FR%2BTenPaHM3Fo7kbudHqzNS1lfQPHyBJNLEVqunGE4U7JR7VuGVeci6dlNHs1Ibbg%2BNmKyDu0ew98qXhlciJIOoYaLrYCeRATLHT4qtkfmIG4CBamH%2Fa9uSDX5sv1e7mKyYgUExd0dOCitgj%2Bm5hWa79yB8ALYhEeWWfqOxuyQHnk3b73bVR9WzUel7YftMUpC8nVU5uwFqwk9uGPYnmPBMuRCnPJ%2BawdEmqYIRcUqH8ROQVBzvOzFO3zinFjLfvI5t%2Fk%2B68xat7vatKfQBXL2wJHeBtKd%2BRGLGFZIv6QZvsi%2FqzSSABvSwkGyBU0oZIX4QpX4697aYchbWhp3ieIst5FhxX53B0cFv%2FIjcnQdT%2BxJkXe5LfyUrUNPK6oYjfsscNSd5CWNxQ14wQceN%2FWasESgsIXe43hY8T1Iyi06K7yn90AhMyo6R1yPJQaczMhXYa%2FdX7rz%2FpHvSOZhH38aiME12iGIeWqhAUM0uCwvaj%2BG%2BurOtW4yZiXBCpq3JJVldl913KLdoyGvZMKi8qdg6Lo8By72%2FMI%2BVduLU9w5bbOCLJ4Zm8hVC3XQ0%2BEq3Xr%2B081ni3b0ChFcKmY62%2Bn8%2BYEYPq%2FH6p6%2B1O26bdfDD8odLCBjqkAdBLBYbXBf%2FfQcYE6h8qKVCgm1f2ZvC%2BjK624I1oORWbAktOmWzFqRcFyCiAb5p1BLlKSqzwbIqs9JvLhff7aaepVQ8Rfdtw9f0VcbX7wxmoO%2BuZwlZ1A34TfaL%2BT%2BBAr0sJgDivp0SiaXOEXhhwQqppf9xVXpDhbCjgQLdgDtbTP3q04XxTVcxVaBH6C23%2BM1CzSDjjVQfQSqb1ow7CqjHxEPgD&X-Amz-Signature=0a3727333612730627053e77438f72c2d904d5416cce4d6b7f3fcb9b7020eeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D34JVAU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BwFNHnfaYalFlcahCbSHYNhW2kPa1YnWQFRvpuBrqgIhAPOIFTPJi4Wf7bZoSbXIBjA1FrzerOYEo22DGwYidwY5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIwpYcKu538dQxTYq3ANaXTQgTN4Jp0S9ZkrY%2FWl4lPZMzAC1hjUrthOg4mFxwbT6agfaGHDZwc9Zvr%2FVXWy9YJYFVC7ibHKHs6td90hs0JTqy%2BiwdkZn%2FyxMcRMw16avBFF2pwDwbcg4uRwFzcgGRLoRyhD7w50mR8Y9THvq6MUtbIOo0b%2B%2Bny4ASO6qICwTNir1JIM8WNg%2FcyRbTnSdqnpbSwn7FjfkPxD9z%2FTsvMeWFXVMhpel72ECmIQCZYXsK7LRGBotSyZP%2BGsDn5Xex0wVOzyshO81WJBmoRt2nkbnp514y6sG6Qdt%2Flx6VcQrAXr30BVNFQ1Gdd21QJZNBjNGG8%2FmI5W51wEyvvdnAhY7HfCsB0XyQCDPuehCmQopZm8n9Hc7A5yxYRtzbOFyzsBKI7mUTyXXC5QedV%2BBKA1XGeQAp05dPDLcF98BBodGQFfi8iyR4PX6fYSNoYdxMPFN%2FPpyNDzCmBBkY702BbpQP5wVh56o%2Fv%2BBUts%2F6My66j0cDEZYLAtgCizAkRg4OdhONtGBFmVdkvtyMgjyHVFolft8fszz3qyEGyMtXUmLk4h%2B8OTyGeb5f4hisJC9MbzC5yjyZkaaUzVvmDn%2FxdTV3gOcbaOK2aPOZMMq8oxPhggtK11maOR%2BKzDFotLCBjqkAYeaeTy%2FHdHg7a0qDGwrL2ar4o88P0ObWHjkH4gfMxWixJC8rIVyJuRxZYB2gWinlx%2FVSp%2FCPvNfFwLeMOdm1G%2BGlEAFwBGZuNKpHS2MYua5RqWHTKa%2FrzfYkSmlafrl9yOyesLpgHE%2BJ%2BhFz4fwJb9uZ2zXIixtQTL2NmJ9zOklL9dZtctXrQR6XeZFHmO97t2h96z97LM%2BFMcyjyfuJOfoElVD&X-Amz-Signature=7c8d1827e1a9ef684fe47330df5f05370b237e5df579c29db0929c01de98fad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
