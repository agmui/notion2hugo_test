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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6B5YSR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDU1mODTQHq7h0I8ySJaydg4vz1vnIGw44kFYz5QSGPbQIhAPPqg7DzAGJRo%2FM5Y68K7B5XyPqhvihp3iXLCHbrYizyKv8DCCgQABoMNjM3NDIzMTgzODA1Igx9ih0ZSbYhsC4hvg8q3AOZJgzgga%2FxbVdgRCaF6SxSTaqztfG3J2bhd5SyxXw6AzAYtCNpU5GUItiQYlIjyXtcUuLFIACQcSoMnru5m8jT8arfd9FMYnyBaDfbS6YuuizkXFt4I7B%2Fef3XUYN7kyqJhQ1yS77skICVihmQAjG4tMJL4ZoaQUEMMgdPhYrUxW3nBiYcqbzVhjhwFoIIhRKZEEiwf12GAN6mrSCcrGwiFVs36CZTxUUfpZiZeWXu1lXmkgUnwjbT8CU71g%2FhTdHbxgETL5Cw6xNdgaNvQZXXx4SvDDNpharhtr%2FPIFMMAjcZ5%2B1l2LdI%2Bc6x0o%2BdjWcB%2B0nR90mWcDdFJzNvk51I5tZe7%2FrvlJo%2FLUsdq9Ks6avCvJbPsOrMVyTduZswrn8Gzb1rDVUfvzgL2riD%2FifWsYonomwPW%2F5h8RYhKKKtZrSF3CNDQc6FRQIRI92zZ%2FIYmAW6icyeVPxCP8%2FmsZ4%2Fg9M0B5togLBGPWjqk%2FU%2BaxllWzfZ3Wk1qcgchttQcod8nkhMyc3kfJg%2Fu0LwGmUO6a0cU8XfENk8PRkhM89f5nMvSMVJkOyhh4WGGTnvXOY0yFDy%2F%2BegpY2Lj%2BZ%2Fk5aaa%2Bi%2BDTFUE8E8JjXtXz2nXuJsd6NVes1%2FKLfFPjCn3NLDBjqkAbX0RC0DTMdsIh0mq3UxZe6YVZ%2B67p3ZaIa1BZqE8KmRXWkdjryDQ5ScunTkVfEjpafVEpSJ7XnGYZccG5YDtSJG6z1NZomfPPwuXGiWpBakbdjJyHYhjw5N1yHyUUsTkomRLWaKBL5sKbQhR1TyYAf4KS%2BPVUu2ukB%2FZMiN9PwHI24fPrjY9VrrOKauR9b7l00nDMmjESMR2Rhc2G2LLSHY9eac&X-Amz-Signature=412167a0452e580a10669a122ce3d056120ecb7b5c3ef2a532262df7a2e824b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6B5YSR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDU1mODTQHq7h0I8ySJaydg4vz1vnIGw44kFYz5QSGPbQIhAPPqg7DzAGJRo%2FM5Y68K7B5XyPqhvihp3iXLCHbrYizyKv8DCCgQABoMNjM3NDIzMTgzODA1Igx9ih0ZSbYhsC4hvg8q3AOZJgzgga%2FxbVdgRCaF6SxSTaqztfG3J2bhd5SyxXw6AzAYtCNpU5GUItiQYlIjyXtcUuLFIACQcSoMnru5m8jT8arfd9FMYnyBaDfbS6YuuizkXFt4I7B%2Fef3XUYN7kyqJhQ1yS77skICVihmQAjG4tMJL4ZoaQUEMMgdPhYrUxW3nBiYcqbzVhjhwFoIIhRKZEEiwf12GAN6mrSCcrGwiFVs36CZTxUUfpZiZeWXu1lXmkgUnwjbT8CU71g%2FhTdHbxgETL5Cw6xNdgaNvQZXXx4SvDDNpharhtr%2FPIFMMAjcZ5%2B1l2LdI%2Bc6x0o%2BdjWcB%2B0nR90mWcDdFJzNvk51I5tZe7%2FrvlJo%2FLUsdq9Ks6avCvJbPsOrMVyTduZswrn8Gzb1rDVUfvzgL2riD%2FifWsYonomwPW%2F5h8RYhKKKtZrSF3CNDQc6FRQIRI92zZ%2FIYmAW6icyeVPxCP8%2FmsZ4%2Fg9M0B5togLBGPWjqk%2FU%2BaxllWzfZ3Wk1qcgchttQcod8nkhMyc3kfJg%2Fu0LwGmUO6a0cU8XfENk8PRkhM89f5nMvSMVJkOyhh4WGGTnvXOY0yFDy%2F%2BegpY2Lj%2BZ%2Fk5aaa%2Bi%2BDTFUE8E8JjXtXz2nXuJsd6NVes1%2FKLfFPjCn3NLDBjqkAbX0RC0DTMdsIh0mq3UxZe6YVZ%2B67p3ZaIa1BZqE8KmRXWkdjryDQ5ScunTkVfEjpafVEpSJ7XnGYZccG5YDtSJG6z1NZomfPPwuXGiWpBakbdjJyHYhjw5N1yHyUUsTkomRLWaKBL5sKbQhR1TyYAf4KS%2BPVUu2ukB%2FZMiN9PwHI24fPrjY9VrrOKauR9b7l00nDMmjESMR2Rhc2G2LLSHY9eac&X-Amz-Signature=6a24794f6019d9e53abd1ab2ce0cfda6176e56fc32452a27c0c9112676e869b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6B5YSR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDU1mODTQHq7h0I8ySJaydg4vz1vnIGw44kFYz5QSGPbQIhAPPqg7DzAGJRo%2FM5Y68K7B5XyPqhvihp3iXLCHbrYizyKv8DCCgQABoMNjM3NDIzMTgzODA1Igx9ih0ZSbYhsC4hvg8q3AOZJgzgga%2FxbVdgRCaF6SxSTaqztfG3J2bhd5SyxXw6AzAYtCNpU5GUItiQYlIjyXtcUuLFIACQcSoMnru5m8jT8arfd9FMYnyBaDfbS6YuuizkXFt4I7B%2Fef3XUYN7kyqJhQ1yS77skICVihmQAjG4tMJL4ZoaQUEMMgdPhYrUxW3nBiYcqbzVhjhwFoIIhRKZEEiwf12GAN6mrSCcrGwiFVs36CZTxUUfpZiZeWXu1lXmkgUnwjbT8CU71g%2FhTdHbxgETL5Cw6xNdgaNvQZXXx4SvDDNpharhtr%2FPIFMMAjcZ5%2B1l2LdI%2Bc6x0o%2BdjWcB%2B0nR90mWcDdFJzNvk51I5tZe7%2FrvlJo%2FLUsdq9Ks6avCvJbPsOrMVyTduZswrn8Gzb1rDVUfvzgL2riD%2FifWsYonomwPW%2F5h8RYhKKKtZrSF3CNDQc6FRQIRI92zZ%2FIYmAW6icyeVPxCP8%2FmsZ4%2Fg9M0B5togLBGPWjqk%2FU%2BaxllWzfZ3Wk1qcgchttQcod8nkhMyc3kfJg%2Fu0LwGmUO6a0cU8XfENk8PRkhM89f5nMvSMVJkOyhh4WGGTnvXOY0yFDy%2F%2BegpY2Lj%2BZ%2Fk5aaa%2Bi%2BDTFUE8E8JjXtXz2nXuJsd6NVes1%2FKLfFPjCn3NLDBjqkAbX0RC0DTMdsIh0mq3UxZe6YVZ%2B67p3ZaIa1BZqE8KmRXWkdjryDQ5ScunTkVfEjpafVEpSJ7XnGYZccG5YDtSJG6z1NZomfPPwuXGiWpBakbdjJyHYhjw5N1yHyUUsTkomRLWaKBL5sKbQhR1TyYAf4KS%2BPVUu2ukB%2FZMiN9PwHI24fPrjY9VrrOKauR9b7l00nDMmjESMR2Rhc2G2LLSHY9eac&X-Amz-Signature=dee83a62d2368b4d0ce61385692c8118ad8d7dad183b22c447fc4389b72aa852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTINPCJC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD17uw%2BsiBb26ShMkCkZ9%2BXyCaquBZGviNAopMmq4%2Fb2AIhAOLHHj3dAJXVq0tonKxGs31qEB47wblKHv%2BI6T3C0RcHKv8DCCgQABoMNjM3NDIzMTgzODA1IgyJ0cVkLssdBeQlFeAq3AOub7eIGnOA%2BTGLBMP%2F6emwgUNsjukUobmu79kefOfNJGaFdYw88HFhcFnmJ8HTkDryli4qAyXjDoWNVJ6NBZ7gbkPEtSRS0Otf2rVh0fk3PFMF6lt%2Bg%2FUDY6u4D4N6SoSb6rP0sY3a6myB7XKFECitpUaqrck0o0R5PxMt9NiLqyqH%2Fi7Qj3xmHthoHYGS8D3SuBss1J3d1XJNEKFcep2POewQuvvqdx8o%2FWqq0RTXmkEQCKHnfy4Ty7eeoAQizpXVFS5UlMdZa%2FBO8m1Dj8U%2FoYmW2UjExFoUMh3dtaHdZ5%2FAkhwmxXjWrvlqYHpPpJw5K7w%2BYLs7Odp%2FISb29592I0fMLpco6FdjETP5KcO42DRrc1JWl7uddoyOywPbCfI0oyJ1mko34bPRl3mwQETrFc3v%2BBmRXPqpRx8L%2F9%2FHLeuOkuorYpPJ73zsWtPNl7GZcwGSTuXAXgZvUhzrmPA7RpezLh%2BTVFfQyL%2F7h3kua%2BajO%2FnJslnqg%2Be6rAkW%2BhX6A8A3fw2iIYHZgQQRdhXvgKVJMaR%2Bh8lzoCDJVY%2FSwCW90KpjBBAEslUIKWpWNSYUupvYIdqbUosnx4nUIzzjZbbAxIEgGIhY1NGx18CILCGnZRnOEyDnHMGmRzCi3NLDBjqkAarPP9w%2Fb8mqGHDzzDR7qcYjBl3gFs7%2B3lZtRkFNGK%2FZDQWelods8XABFtZjNL5NMKNDJ7fnPtn%2BnpmrIbpLE9nnV4%2FJ8ypOYC8poTCw6t%2FHT3DhRakrOB13ejSewWBwQI2jhkGxaLx1NM27vIhimYCwx0Q91me8Xf5hH5zenbAsoeVqSxWjUxXlOBM93LgN8DpCwhVAzdnYKBC3CoLL5IkcfBIi&X-Amz-Signature=e8c761ea0824384ca4b77a19cab5cac99bc772c46cc3c6a1ac4b3dbc2916a4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUSZLTCE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICRaXk9albucDyUm%2Bh7l%2BMYFaqW7WA6MKc6x4EuizliAAiA5remEigePWDuThTLse1UE3ESM5zQnvubuE%2FY2HmG5qyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMwZ%2BDzhmnYKh%2BphLUKtwDxGBmkUp%2BsgUKinS%2Fa8bYqiC418%2FNY%2F3jZVNS6NgStq6uaHyJwtjQrAN2emVLeeXrE7cae6HNOQdsTL8oNFv0u61G1ydRiPJr%2F%2Fpf19XgyR3PDgmx0C%2B9k9ZPkrB5ObQFaY5nuWW6%2FXZwZ8QsExp66iexMRnlAOrLHi8CrcFthn9RkU%2F7HW0YgFD3xGtk5lTH0dBZNJBFOTZPV1WM88kI1Z5VMNz5s09nPZS2NTYDLvKli7W61AkAG5GdHipNxfgOU%2FY0YHJARYTxlr0smr1nBAo2kcS%2FjiINgTz4wk8qzoZytaGUr7B3LNqDY%2BWuMiDhtYwiesIHk7CsGDRN3lFPSfOsQiPoVx1PhQn5UzAe6uu3fQoQKp5PhKy6hxJ8oAauL6ec9rhhXnJD2j7d3ZT7qC0fYQTO8SH2BzlS4loQ56dNHthE13WYt6wVm5t39ODEuZzUmRAK9cSYZlmma2DAsPPJwa6jv8SlLq3kNUzjClE0j7Lvlm7qfmyRXteJpBV8oJeP1HiCOaQygbDqVJWx9Uq%2B%2F41ULIq5bOEE0AzK2JraTA0GOiV8fsuFqpaWLSkGApVxxIeE3JP%2B3u6u628S%2Fjs3lR3hv3FazbueCYaFcSpydWd%2BNucHBLdYmF0wwNvSwwY6pgGNWfiSsEYwTbJSN4XE3TNRxDUtBFHRkTilcc1ItvKWazvvJe%2B4ZcEwkOsj9Ec3gr3S0z%2BFVcg2E5SM1rsDSuHm9ojq11cLX29EsWb7D7hFe91xE6bb%2B%2FlGE3tS59sfVeruzoSTEmAYR07JI5dL2OV%2BbaA1NT3CH9zRkfRyZJ7lmP4kgroJ6PUVblHK1ARRQJHsfeMOJ%2FMCweZRr22NP%2F%2BqQIMi8V8X&X-Amz-Signature=2fd918dbb7916e632658af897fee60a3803434ed1fd662fde1b79ac0685621ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6B5YSR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDU1mODTQHq7h0I8ySJaydg4vz1vnIGw44kFYz5QSGPbQIhAPPqg7DzAGJRo%2FM5Y68K7B5XyPqhvihp3iXLCHbrYizyKv8DCCgQABoMNjM3NDIzMTgzODA1Igx9ih0ZSbYhsC4hvg8q3AOZJgzgga%2FxbVdgRCaF6SxSTaqztfG3J2bhd5SyxXw6AzAYtCNpU5GUItiQYlIjyXtcUuLFIACQcSoMnru5m8jT8arfd9FMYnyBaDfbS6YuuizkXFt4I7B%2Fef3XUYN7kyqJhQ1yS77skICVihmQAjG4tMJL4ZoaQUEMMgdPhYrUxW3nBiYcqbzVhjhwFoIIhRKZEEiwf12GAN6mrSCcrGwiFVs36CZTxUUfpZiZeWXu1lXmkgUnwjbT8CU71g%2FhTdHbxgETL5Cw6xNdgaNvQZXXx4SvDDNpharhtr%2FPIFMMAjcZ5%2B1l2LdI%2Bc6x0o%2BdjWcB%2B0nR90mWcDdFJzNvk51I5tZe7%2FrvlJo%2FLUsdq9Ks6avCvJbPsOrMVyTduZswrn8Gzb1rDVUfvzgL2riD%2FifWsYonomwPW%2F5h8RYhKKKtZrSF3CNDQc6FRQIRI92zZ%2FIYmAW6icyeVPxCP8%2FmsZ4%2Fg9M0B5togLBGPWjqk%2FU%2BaxllWzfZ3Wk1qcgchttQcod8nkhMyc3kfJg%2Fu0LwGmUO6a0cU8XfENk8PRkhM89f5nMvSMVJkOyhh4WGGTnvXOY0yFDy%2F%2BegpY2Lj%2BZ%2Fk5aaa%2Bi%2BDTFUE8E8JjXtXz2nXuJsd6NVes1%2FKLfFPjCn3NLDBjqkAbX0RC0DTMdsIh0mq3UxZe6YVZ%2B67p3ZaIa1BZqE8KmRXWkdjryDQ5ScunTkVfEjpafVEpSJ7XnGYZccG5YDtSJG6z1NZomfPPwuXGiWpBakbdjJyHYhjw5N1yHyUUsTkomRLWaKBL5sKbQhR1TyYAf4KS%2BPVUu2ukB%2FZMiN9PwHI24fPrjY9VrrOKauR9b7l00nDMmjESMR2Rhc2G2LLSHY9eac&X-Amz-Signature=5b3efe438793e332ca2ed5f41d2b2dc53a64fbd6e01ce6e47e882ba7385b90fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
