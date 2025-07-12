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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2ETKN7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJQUYoYUVBq70OlZkOoWtF7ZiqvtsPDbBjhhU%2B4Nt0fAiBQtHKmajUbZ9tzj1hnr7UlGvudY44iIaClCxECNSNsViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxaiDfeeLLMjCWTZgKtwD0fMY0Lkw4j6UWyFE86O4r2yyyeUUp%2BUcpUpAPAc8UFYfNDApi0NtGc0QSvPtbuH3h%2Bg%2FajK%2FmPFNKtS9mMin%2FowB%2B%2F95EW4XthQXrOhwvmFo50z45LcCf4M4MZzDyu%2BKzH1kD66P6olZNJwoihQyBllNz7DP7cZczr98NkVx1AZGW04JlKEJGauOXy5lYdiC3LA4V4bd64uc6SL9XSiPTtOj5XkxG0Hm7Es9ztAljRKugCIVXpir4b%2F65XVt2tTQ5sdkHW%2FLwac44SvAFPd5FNplBAmeAoIC5Ds3qXymukYUveFvfX50SjTJSFoVK8bl1GWbEkNKLIWi9UxJVZp6L%2F7g7uZy7Spa4E8WqpG0TjzKkW%2BfHWQyQQlGaw7%2FjyAyHq75Va%2BuVr90Cwu1vhaqxXDUHPj0N3VMt20JlFa4Ea0jcq4H7dm7RWgjfFOj%2FVhTk3jXD%2ByxUPJy6mWB%2BLM8ikovm%2B2D0tbnBik3hqF219LvTYNFMHpHD%2FgNNjMgu4rpmSXHsY%2FLn5B26KWpOAD6HMVr%2FZ7rDhj90Memq1mnsDdXHO8%2BEY6HM%2B2eY2VbFMi5Vrhozb7YcUc%2BYnlTsc8XkI1vbsz3eDkVKa8dbWvo7QS9V77P66x2hjp1GVAwoNnKwwY6pgH57CVAkcy18CPG1TtPEF4%2FugBKa51fWZbgX7bDV%2F22Q7sNm9BP3CjTV4EQsUdO4hQe8cn0QIhJ5I8IScKapRZFr4odRstW2m%2B22uv%2FZEbveJ5Gqa4SZiOEzMzjuUZO7wegDvAYpm8cE37QSoYtHext2x4O00hEN6MubZ9lM0VSgEI4FFGzOrsgAAT8ZU6mtaTKEnY%2FLAxNe7Xgw9FY2GZyGc2%2FMgfc&X-Amz-Signature=c06d1ca3ef645b3e8e5360d2a63bdb0f033af90166ea91ceec1296c90269af21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2ETKN7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJQUYoYUVBq70OlZkOoWtF7ZiqvtsPDbBjhhU%2B4Nt0fAiBQtHKmajUbZ9tzj1hnr7UlGvudY44iIaClCxECNSNsViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxaiDfeeLLMjCWTZgKtwD0fMY0Lkw4j6UWyFE86O4r2yyyeUUp%2BUcpUpAPAc8UFYfNDApi0NtGc0QSvPtbuH3h%2Bg%2FajK%2FmPFNKtS9mMin%2FowB%2B%2F95EW4XthQXrOhwvmFo50z45LcCf4M4MZzDyu%2BKzH1kD66P6olZNJwoihQyBllNz7DP7cZczr98NkVx1AZGW04JlKEJGauOXy5lYdiC3LA4V4bd64uc6SL9XSiPTtOj5XkxG0Hm7Es9ztAljRKugCIVXpir4b%2F65XVt2tTQ5sdkHW%2FLwac44SvAFPd5FNplBAmeAoIC5Ds3qXymukYUveFvfX50SjTJSFoVK8bl1GWbEkNKLIWi9UxJVZp6L%2F7g7uZy7Spa4E8WqpG0TjzKkW%2BfHWQyQQlGaw7%2FjyAyHq75Va%2BuVr90Cwu1vhaqxXDUHPj0N3VMt20JlFa4Ea0jcq4H7dm7RWgjfFOj%2FVhTk3jXD%2ByxUPJy6mWB%2BLM8ikovm%2B2D0tbnBik3hqF219LvTYNFMHpHD%2FgNNjMgu4rpmSXHsY%2FLn5B26KWpOAD6HMVr%2FZ7rDhj90Memq1mnsDdXHO8%2BEY6HM%2B2eY2VbFMi5Vrhozb7YcUc%2BYnlTsc8XkI1vbsz3eDkVKa8dbWvo7QS9V77P66x2hjp1GVAwoNnKwwY6pgH57CVAkcy18CPG1TtPEF4%2FugBKa51fWZbgX7bDV%2F22Q7sNm9BP3CjTV4EQsUdO4hQe8cn0QIhJ5I8IScKapRZFr4odRstW2m%2B22uv%2FZEbveJ5Gqa4SZiOEzMzjuUZO7wegDvAYpm8cE37QSoYtHext2x4O00hEN6MubZ9lM0VSgEI4FFGzOrsgAAT8ZU6mtaTKEnY%2FLAxNe7Xgw9FY2GZyGc2%2FMgfc&X-Amz-Signature=f66e6ba53590fc8c7dbfb609e17952750260f86be93cc3fa204c48f7307ebbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2ETKN7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJQUYoYUVBq70OlZkOoWtF7ZiqvtsPDbBjhhU%2B4Nt0fAiBQtHKmajUbZ9tzj1hnr7UlGvudY44iIaClCxECNSNsViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxaiDfeeLLMjCWTZgKtwD0fMY0Lkw4j6UWyFE86O4r2yyyeUUp%2BUcpUpAPAc8UFYfNDApi0NtGc0QSvPtbuH3h%2Bg%2FajK%2FmPFNKtS9mMin%2FowB%2B%2F95EW4XthQXrOhwvmFo50z45LcCf4M4MZzDyu%2BKzH1kD66P6olZNJwoihQyBllNz7DP7cZczr98NkVx1AZGW04JlKEJGauOXy5lYdiC3LA4V4bd64uc6SL9XSiPTtOj5XkxG0Hm7Es9ztAljRKugCIVXpir4b%2F65XVt2tTQ5sdkHW%2FLwac44SvAFPd5FNplBAmeAoIC5Ds3qXymukYUveFvfX50SjTJSFoVK8bl1GWbEkNKLIWi9UxJVZp6L%2F7g7uZy7Spa4E8WqpG0TjzKkW%2BfHWQyQQlGaw7%2FjyAyHq75Va%2BuVr90Cwu1vhaqxXDUHPj0N3VMt20JlFa4Ea0jcq4H7dm7RWgjfFOj%2FVhTk3jXD%2ByxUPJy6mWB%2BLM8ikovm%2B2D0tbnBik3hqF219LvTYNFMHpHD%2FgNNjMgu4rpmSXHsY%2FLn5B26KWpOAD6HMVr%2FZ7rDhj90Memq1mnsDdXHO8%2BEY6HM%2B2eY2VbFMi5Vrhozb7YcUc%2BYnlTsc8XkI1vbsz3eDkVKa8dbWvo7QS9V77P66x2hjp1GVAwoNnKwwY6pgH57CVAkcy18CPG1TtPEF4%2FugBKa51fWZbgX7bDV%2F22Q7sNm9BP3CjTV4EQsUdO4hQe8cn0QIhJ5I8IScKapRZFr4odRstW2m%2B22uv%2FZEbveJ5Gqa4SZiOEzMzjuUZO7wegDvAYpm8cE37QSoYtHext2x4O00hEN6MubZ9lM0VSgEI4FFGzOrsgAAT8ZU6mtaTKEnY%2FLAxNe7Xgw9FY2GZyGc2%2FMgfc&X-Amz-Signature=4d2363d6f3adda6d3b6e51570e3b6199d72d9c27c94850e63105866208f35ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7E2JQR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiEWlt90RrrWiJij5bMaLIszijXngWe%2BXBq9NxwOKeAiBKThaPeVkToMDcMG9DZizzbQhs%2BF2%2Bcmff04s2QLn4FyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FOFtfn9obixDuGmyKtwDpmw06tiymleRMIcoz6mqk74GLzNDJ95kMjMeGfRWrpY%2FkU0fBz2ZTENLhklnE5REGNGzUUkUvvpXz52OwgJ%2FnEjTxLAsaJqO8Fwb3GMSCDQkzUVgO0HB6mmJzpmNNdjSh1ZSf2of5PcKF0SemL%2BJ6wP55qkOjGWZQUg8uVnGmZFmLlknW%2BK8qHKRf5ZLeQE7WdQrHLcbSwbKKsOFA4SzHwu%2FVtz4QEOCcOgZyQMvsqOH8U1a7LyVvXRNxtPwMwWG4L0g%2FiI9Z5N67oikRGssfAzRtnbM0TNdSfGSUFICtRnK%2BY7Pb04Ge7hST6oMNNAXxH3JVprwsnnlOdh%2Ff%2BzPqQOhGi8sJL5jZKzTDY5vi%2BUUvsDGmuLcEiaMIcAh42TX9AwRnXc7UAcU6TguO74Zc6WNlPaicVlPxHBMjM%2FFP3lB2BQ8QZYS3HhmsUThNp1yjr8YO1IGVKcMTJBneX2hRQOtCkQ1QSZ7FCFzu%2B%2FPNjDRvgg%2BFp%2Ffkiw7wDTH84RY8I6zZElieWUOkFy75l8Ratf7GOmrxhQfqXclOZjLl2Sl7hr0euXwAeUmoeUaOxiEY5%2Ff%2Fn0v4rrEmAD2RsS2knpEpbcb5AsB4VoUnUTgskbbstEPY4Qmprgbcfow4dnKwwY6pgGfl2nXETCSQ2b82VzVEZadK42%2BGSfCGJrDzL0Txtu7hDrBbeQ93l23ObkAkpGR6AxqiqcjkbJcZenylQMT8nbr7h%2FtUEjsve3YrOisT%2FL30TYm43LVNPda991T%2FCOU%2Bf6aIZhmk8ptEpsRmMgL4eh7mwfOvZ5gliMfzN0mV2yLCTWfJMUv2r0Y%2FezrWNdd9L0fmU8SMmCvyGxvCIvsndgO%2FVEAigyb&X-Amz-Signature=7d92f3c0a4e7b9dfd9ab6d0146bb047a3b3240c0bb9c73e59b948eaf01037378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLC2IDZM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAeT64S2k8Bzau7zzcCNE7Ag8fs7uMqjh0XoSbh%2B5F6AiEA7WB%2BaQPcqgrBn7OF97kzOQ%2FauUkybcN3CmezCmdhfmcqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOqRnmDgfRc2b2GESrcA%2FSO6GEXxRNz5%2B4sUxRwlASnUbXADkAc0pbLwuFeJFImUUvFFN8t%2BrQXpYaPfjIHGMd5MpzRhLOCCnGrc6J91zA5CtBOiwb%2BT7iUEwDIfc7WcHYreg6%2B6uUe8%2FvNuquBvrOh3bGdUmTpaBYL2y4wIG%2BANQa56N0mUDWE3b2NtsTl8dz1TkTgAevx1lpub6U9LDlSQWJpd90eIw9TBAJoKtg9R%2F15SD7TK7QuCo%2FeutEmuF7FEHx5oIAzv8yXxQumVpq7Gan0cgMBAd6InXkEbYpgrB%2FmLseoKah%2BDIXzlrqVid06ByDWPqrKtkGM8V0yfPdMzVi%2FUXoGbZi5PE2bGIyAOOO8RiV66FO5icNpKYS41fRqWBUFhj1UVs%2B%2Bsn%2BJBBVZXI2GRAlZoqVsdC7cnVS8aE4S2JOZanP3%2Fhgdb7qgAzyo05ZKYZDJ34Rsm1UC5OC5CE9k5MvgdAiI37NlQVtZ1fnmeav%2FHF%2B5EXd7ZsdhGY1LcTjW7USOxuZluaGkBJuMYETVyCPv8xsglKj1NiB9kwuhsDVPhSyAXwmVNee7L8Gz0m9UBXaJ0Pxo2kCuH%2BTjiACIF4H0Rztq9mNir5h8A5AWYDXGcq2AjFC5MqjJJcKnqcbLqgYOwETYMIXZysMGOqUBoNPUqImW0QfoL5CJJ6AW2XDNb%2FbHivJfR2VtTISoto7OWF75C8sx3TamJcflvN%2BwVoIuTNJQDkJ7E27hctuJ3F%2Fz%2BQ632GzrqBWevFsINO6zrTOut1PrhQCRRmlRJxVWAv965eyFwaEhWKXGTGAEgs6sJT6xg7DQADf9teXLfpG5xKjze14EG7jDverF2fq1N0UiLDhvnVMrj6rShQ96CLvhV42y&X-Amz-Signature=766bf1a806b48ff08712078b068e118bc638da4ed580c072ad9314cd3452fca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2ETKN7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJQUYoYUVBq70OlZkOoWtF7ZiqvtsPDbBjhhU%2B4Nt0fAiBQtHKmajUbZ9tzj1hnr7UlGvudY44iIaClCxECNSNsViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxaiDfeeLLMjCWTZgKtwD0fMY0Lkw4j6UWyFE86O4r2yyyeUUp%2BUcpUpAPAc8UFYfNDApi0NtGc0QSvPtbuH3h%2Bg%2FajK%2FmPFNKtS9mMin%2FowB%2B%2F95EW4XthQXrOhwvmFo50z45LcCf4M4MZzDyu%2BKzH1kD66P6olZNJwoihQyBllNz7DP7cZczr98NkVx1AZGW04JlKEJGauOXy5lYdiC3LA4V4bd64uc6SL9XSiPTtOj5XkxG0Hm7Es9ztAljRKugCIVXpir4b%2F65XVt2tTQ5sdkHW%2FLwac44SvAFPd5FNplBAmeAoIC5Ds3qXymukYUveFvfX50SjTJSFoVK8bl1GWbEkNKLIWi9UxJVZp6L%2F7g7uZy7Spa4E8WqpG0TjzKkW%2BfHWQyQQlGaw7%2FjyAyHq75Va%2BuVr90Cwu1vhaqxXDUHPj0N3VMt20JlFa4Ea0jcq4H7dm7RWgjfFOj%2FVhTk3jXD%2ByxUPJy6mWB%2BLM8ikovm%2B2D0tbnBik3hqF219LvTYNFMHpHD%2FgNNjMgu4rpmSXHsY%2FLn5B26KWpOAD6HMVr%2FZ7rDhj90Memq1mnsDdXHO8%2BEY6HM%2B2eY2VbFMi5Vrhozb7YcUc%2BYnlTsc8XkI1vbsz3eDkVKa8dbWvo7QS9V77P66x2hjp1GVAwoNnKwwY6pgH57CVAkcy18CPG1TtPEF4%2FugBKa51fWZbgX7bDV%2F22Q7sNm9BP3CjTV4EQsUdO4hQe8cn0QIhJ5I8IScKapRZFr4odRstW2m%2B22uv%2FZEbveJ5Gqa4SZiOEzMzjuUZO7wegDvAYpm8cE37QSoYtHext2x4O00hEN6MubZ9lM0VSgEI4FFGzOrsgAAT8ZU6mtaTKEnY%2FLAxNe7Xgw9FY2GZyGc2%2FMgfc&X-Amz-Signature=f7c0b5d57fa7e13d1b48da6ff97daf759b69b367cb4250d252bee2ca7cfa29eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
