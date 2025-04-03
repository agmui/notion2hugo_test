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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJG54IC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzUgoybWGiEXP5EzYcUVIU2z1BvWfL9sKfBXU%2Bn8n6QIgPq7F5QwV5Pbu1FqSjXulIuIbEmcwP2bIYHhGdKC5eI8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOmk1CK2o3P5fXTxCrcA%2FFaveH4qT20T5vlHMhRWpL7Wnc3XMSJ07hMLvQufU6FnX6QZczU7uCRjGVdJeygpWh1tmcQML18o%2FSS9TpJODujCk5NTc7Svs3RTxA7dU2kRwW40mPJ7AkR5qUNsy2ioWB4iG%2FlO7rRVu50kDGzSFsONp0Q8xzO7y7dLSBAsLrbnxergRndH5I6tgPkE2gJsR0Six7fOuE42HiZ7mHgXf17ecruN%2FN6zfsI3g8oyct8yPxPhE3kKWaX5nE0NwAJmMTmDq8MnRZKNJsXQPkbtX8Ytu69uPsGehKxKbzZhac0qYOUxIjC84D3UDGw2%2FMqdyF0l1%2FeRbExIOU1y%2Bjo7QkRgh90zY3combTGQMD7eF80zw86FQ6KsFvmUnqEgJdYYA6k6C6ebMK7WetRySKOyka6cBG1xt7Z8bUqwugc%2FL9BqnVqu0nPwz3uLtYj5h3g4DjyovlHfQHD67kKLJuaOliPdg7N7xBN7YzJFjFGWo771%2BO6CK%2B0UtcEXkzHhrsrQjGNZE2Yggb%2FSQZ67aalb0W5LGHZskhqYtxrP5JVRcT0idxztap5bymlAdKF%2BrEmupIGxZ%2FdBudOXRB3bEsysnNxn2Vj6os96al851GLxz5wrAtpamIvDyoAhFvMMSyur8GOqUB18GEiINZXm%2BIQKVxY0vZy%2Frh9USFTdz77fjAFOJuI9j9Dk4YuLrrGxDreCYxH3TwTGnnu3GgRYqBvpYa%2FDt%2FIXD%2B6HHhN59468JxaQVGeyBttFrot%2FLZafn9AO2lR74bo3HPv2u0Yz9xBSfwkEiUplQqakDgSRmcifWMtZkXlGp6KOoSPmoFsY2RobszIEn6yXaxFQVwt4UWsXX%2FIjHjHU3YZMjU&X-Amz-Signature=4f0d6e6dba8172efced2bdb703f0799cf7617c40ca853793f7660a4e6f3b05fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJG54IC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzUgoybWGiEXP5EzYcUVIU2z1BvWfL9sKfBXU%2Bn8n6QIgPq7F5QwV5Pbu1FqSjXulIuIbEmcwP2bIYHhGdKC5eI8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOmk1CK2o3P5fXTxCrcA%2FFaveH4qT20T5vlHMhRWpL7Wnc3XMSJ07hMLvQufU6FnX6QZczU7uCRjGVdJeygpWh1tmcQML18o%2FSS9TpJODujCk5NTc7Svs3RTxA7dU2kRwW40mPJ7AkR5qUNsy2ioWB4iG%2FlO7rRVu50kDGzSFsONp0Q8xzO7y7dLSBAsLrbnxergRndH5I6tgPkE2gJsR0Six7fOuE42HiZ7mHgXf17ecruN%2FN6zfsI3g8oyct8yPxPhE3kKWaX5nE0NwAJmMTmDq8MnRZKNJsXQPkbtX8Ytu69uPsGehKxKbzZhac0qYOUxIjC84D3UDGw2%2FMqdyF0l1%2FeRbExIOU1y%2Bjo7QkRgh90zY3combTGQMD7eF80zw86FQ6KsFvmUnqEgJdYYA6k6C6ebMK7WetRySKOyka6cBG1xt7Z8bUqwugc%2FL9BqnVqu0nPwz3uLtYj5h3g4DjyovlHfQHD67kKLJuaOliPdg7N7xBN7YzJFjFGWo771%2BO6CK%2B0UtcEXkzHhrsrQjGNZE2Yggb%2FSQZ67aalb0W5LGHZskhqYtxrP5JVRcT0idxztap5bymlAdKF%2BrEmupIGxZ%2FdBudOXRB3bEsysnNxn2Vj6os96al851GLxz5wrAtpamIvDyoAhFvMMSyur8GOqUB18GEiINZXm%2BIQKVxY0vZy%2Frh9USFTdz77fjAFOJuI9j9Dk4YuLrrGxDreCYxH3TwTGnnu3GgRYqBvpYa%2FDt%2FIXD%2B6HHhN59468JxaQVGeyBttFrot%2FLZafn9AO2lR74bo3HPv2u0Yz9xBSfwkEiUplQqakDgSRmcifWMtZkXlGp6KOoSPmoFsY2RobszIEn6yXaxFQVwt4UWsXX%2FIjHjHU3YZMjU&X-Amz-Signature=1441d80f7e72c67a96865f74f87532a6fbf3e1bfb21ca4b28e6e3bd9420b7a00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5K2VWI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaaKnxKEuqHZU9Tzy%2Btj5DZfZH8R0HWEE6evoPioCGwIhAPbwSKaeNVRZgGpEai2s6dBqRnVgzY5B21iGT1LyISd8KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmG748%2FJBgcLJmWcq3AMYUZBt21gdOLfxtfZ3mu3NfyLX2REnqTKUfXBtJkRPpTHKdL8XyAjS9N99WNbbzrhIETbRgXpenEQ%2BiQXVJ2kPyZaVCyX8P3TLK%2BOdtjJxKF1D3%2FiuON6Z7xZp4%2FPtDFl7BsYe8DaC%2BlFsmPQqqa7cfFGwF%2FcwA1oqrLQkdPH83KTa4PpV5rsgph6GouQ%2Bpm1azWOKkl%2Fz2N%2F58PkAnbJefYWBK6k1PMb2LyykspOw5ThCDXT1JNQNPPyByi8DZgeugfKlrqlmhC9r5b1oeV0f23KznQL3nbm9LSmBLKpK6400gsA%2FvhEfcy5sOHhHxzj2x6%2BYtf5Z8uOLnPRgOWFLSs%2BcPVXi5%2BglVDPQnEqRDB5GJMe%2BIuqlSdS8HRusbPNP72LIs7G6hVCoyLDHxsUELtelJdSZrYWRvp9Ch83xivq4Fw82PYZ1Req7vWb2O4hcb563IiF5tgj4OW1qVUJ4HEa8rbaIEiyjte%2F%2B897bpcI73aci2NaTteYTLXhEFERQyBDi74Zeyngf0kthpgzqbWQxthVBNWQWu%2FZ7XONkAnqLL7S%2F9luaDh7P5cJEmFXImNoLr%2BxxEs9CbDhnEv1HVpmCGxMr%2FzIlZXmTv%2F0w0Qru6kkUlcynr8vDozDRsrq%2FBjqkATFFzpfs2Dxk0dL6oeL1LkhKi0ySHoX%2B6I6I38N7ZJHjFq6rRSI%2BqUf3BpkVr9Aj8e%2BVzTu6WBxoLxwN5DFaQEvxfMaaHcppTV9sfJWaGn9a8bhRsEY4hfw%2BSJgOaBgDfRqM2h%2BwbjmP5pPievtlPno2zq%2BLCLBZ5hKT5do4lOQVlb7Zn8HVOuj%2FzONPehScJKNp63poMXkChWvTt08j9LT8KIaB&X-Amz-Signature=964dec7162ccc4ab6e9f9ac3e384a853381aaa969a30a95698ff40f20edcd66e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3Y4R6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlqJiH3nCyL7XDJrHLvtpz1iE4cQEnXsqjgWeSQMO7jAiEAiC30nrrEdpaAWPZrA3aARbtJYsnhegRoeQg6%2FDJjgEQqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2BNSGtUieLLy9YQSrcA5IgvLVBr4jTMXG5YZ%2F3hX77yiwDvxcJwFGSyTdgIfOutuCSdL%2FuiefN%2FpHj%2B25o74xLdvZutIZglnPEqow550BMnFwRmjEDrfk5PAKgDOcHO7VsM3Qi4cBU7KY6%2B5PsXWP9mJB7O%2FXqqyhiET17Vnqi0tlWbGamMAvsEX5zQVPq%2FInqTe%2BC6ZJg1hDDKW3o8%2BwrBYwPFiPQc8va9W07hQcQ0h11elJOj9eDR7Q7azU%2B%2BvNSUQ6tDX7hPhoSQzMQgJXjNBrbc%2BoChBdpP0miRdbTVT%2BYTbPsR%2FAExilDVsGSSoChRbtb7Wd4%2FqKMN9Uuwkevgnx9VSUzRwteDvNz%2B5lw5JyxIYXi09B4sEkqV7yhFCMRKX%2FiLolmuwKmkBJlF8T4bAmVZJb9cNejo7J%2FyLnEPON%2FKgJjNtU3q07pABAgx3W6E%2B42p8DuT2DfT6AlsIJ7xlMw2isIbFhatcJ9dwYNigV60uiXIG2giUopmrWeE%2F9jGRY3zSYZRqXZmTSUwSQbU7UjDgF2sIYKvM4AnC6RfhOwYCQvSd4F6pjgrw%2FVEFfsU8wHOpJCXS6sadiJ6Ue%2FzXONHwZR85gXTMjGvdy1QeCMyYLx9FBFyU%2BJmWtwZTz6Qo%2FAhBcnGVEyMPGyur8GOqUBUNmGhrSEic3q0trg2Gdol0li5Tg7saQ0LLSkAu%2Fft4%2F%2B0fSzq20AUMmTUTsYVeB08ucbg3E1hu3xys6cX8rQY2gEPXhJN6XoW9IkrD6icv6cm6yRPEOISXTblt6dUd5%2FWblL5F6G9%2Fvc9YfgevJ9tHejzhozcbeqWfg3Zx%2By4qYT02WnjDkb%2BmbwZb3AzHh0JXSONIQ%2FuYDWzns2Q0TJqZl%2F7UBi&X-Amz-Signature=7e14e8e0116f526761bafe22cf25534388f38f670142d5b701f4a69475f2ad49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJG54IC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzUgoybWGiEXP5EzYcUVIU2z1BvWfL9sKfBXU%2Bn8n6QIgPq7F5QwV5Pbu1FqSjXulIuIbEmcwP2bIYHhGdKC5eI8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOmk1CK2o3P5fXTxCrcA%2FFaveH4qT20T5vlHMhRWpL7Wnc3XMSJ07hMLvQufU6FnX6QZczU7uCRjGVdJeygpWh1tmcQML18o%2FSS9TpJODujCk5NTc7Svs3RTxA7dU2kRwW40mPJ7AkR5qUNsy2ioWB4iG%2FlO7rRVu50kDGzSFsONp0Q8xzO7y7dLSBAsLrbnxergRndH5I6tgPkE2gJsR0Six7fOuE42HiZ7mHgXf17ecruN%2FN6zfsI3g8oyct8yPxPhE3kKWaX5nE0NwAJmMTmDq8MnRZKNJsXQPkbtX8Ytu69uPsGehKxKbzZhac0qYOUxIjC84D3UDGw2%2FMqdyF0l1%2FeRbExIOU1y%2Bjo7QkRgh90zY3combTGQMD7eF80zw86FQ6KsFvmUnqEgJdYYA6k6C6ebMK7WetRySKOyka6cBG1xt7Z8bUqwugc%2FL9BqnVqu0nPwz3uLtYj5h3g4DjyovlHfQHD67kKLJuaOliPdg7N7xBN7YzJFjFGWo771%2BO6CK%2B0UtcEXkzHhrsrQjGNZE2Yggb%2FSQZ67aalb0W5LGHZskhqYtxrP5JVRcT0idxztap5bymlAdKF%2BrEmupIGxZ%2FdBudOXRB3bEsysnNxn2Vj6os96al851GLxz5wrAtpamIvDyoAhFvMMSyur8GOqUB18GEiINZXm%2BIQKVxY0vZy%2Frh9USFTdz77fjAFOJuI9j9Dk4YuLrrGxDreCYxH3TwTGnnu3GgRYqBvpYa%2FDt%2FIXD%2B6HHhN59468JxaQVGeyBttFrot%2FLZafn9AO2lR74bo3HPv2u0Yz9xBSfwkEiUplQqakDgSRmcifWMtZkXlGp6KOoSPmoFsY2RobszIEn6yXaxFQVwt4UWsXX%2FIjHjHU3YZMjU&X-Amz-Signature=1ddd5312bfda519e9a6194d7ca80aacf8ad99702c023ba7b3380bccddbfb295c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
