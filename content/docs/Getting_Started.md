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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YI6M7V%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAXeA5V1Du7XV9KSvwI3TnLH64UxuukXSfvHwCAx4y1AiAfsvi8AEH91yOfLJ1YCsCf1c8gppaIkd%2Fl0r%2F3f08%2Fqir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQbplocpNKZpMEGvBKtwDTleF8Bvi66PENzKXJcjK%2BsWqR615ZxclHqY9Al1Sme1Ed8KLPhGucXzJFKkbTY%2B2EGsQn0WmI6jOjyn6L42LV7zDMi9XJyGnLrZZmOkaoRGKLS%2FuDvQ5ak%2BIfqpMRXLGIJNakz%2BCa1YWH80bEtkHht5B3EnyZ60gWCSsCCg313ZS3N3A7vKNhVNGrHqq8YbLvrgKXW2te7Ax%2Bx1sCUs1VIA%2BKT2K1YH65Bz83jGB%2BpflbAyCPJhhGTwmM%2FA6qp%2F6TLYynZxMRIaICobzirhamu%2BHOEos0J6fS7Ija6%2BJDXPfsvkI8fINY6CUzAIAByFj6QD3ton5T5bUzF92hX940GHDuhPDTn9IubqZ1x3Naibu3eLg55MK01kWlXFAqZ84EiDoP7pLS0vFozAborojuwkSRDx4wBvXo%2Fit6gbddR7RjjtDHTGKKVG88oEBr8FbX%2BGuf6IpwStF1kYNb2WqZNsVmzfFvhjvwvP1IQNYR8vc3LePjRGAAPgrgyV%2BBA34XBx39gIafJNxQtamCN04ufTgQeVZng%2Fl9qt%2FHI5XN1N7NfS4HCAnCOqoTH9oMOl7ci0rkpzb8cz4ub08c%2FnWaNira22Vw6rRDmaQt6JuyBVCvRWyV739dR%2BnIgcwiOCBwAY6pgHwdtsPfzItKzLDTKOLYwmX6%2FP8yXdEmhA%2BEbRSKnFjKW6bDwP3iXGnaw%2FdCWRMN2pWJFl%2Bhzz9D%2Bn7cbydySrv5U9JwKyUcoiHaX0TDtYfh0SffwHNfYhyHqWzWH6ZP8tO1G2x4LnZiGq0O85Gh6K58hHV9tKHzmGgNdy8HOqft5DoKm4uhpUY4Ra%2FsCfNyjTGVP40jkPfoRQnPmSBcHVZYn8fwkzI&X-Amz-Signature=0ab7a35bd9c4d22c3db76239767f223fd7eb4b0f1f923084764cd0cda1e181ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YI6M7V%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAXeA5V1Du7XV9KSvwI3TnLH64UxuukXSfvHwCAx4y1AiAfsvi8AEH91yOfLJ1YCsCf1c8gppaIkd%2Fl0r%2F3f08%2Fqir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQbplocpNKZpMEGvBKtwDTleF8Bvi66PENzKXJcjK%2BsWqR615ZxclHqY9Al1Sme1Ed8KLPhGucXzJFKkbTY%2B2EGsQn0WmI6jOjyn6L42LV7zDMi9XJyGnLrZZmOkaoRGKLS%2FuDvQ5ak%2BIfqpMRXLGIJNakz%2BCa1YWH80bEtkHht5B3EnyZ60gWCSsCCg313ZS3N3A7vKNhVNGrHqq8YbLvrgKXW2te7Ax%2Bx1sCUs1VIA%2BKT2K1YH65Bz83jGB%2BpflbAyCPJhhGTwmM%2FA6qp%2F6TLYynZxMRIaICobzirhamu%2BHOEos0J6fS7Ija6%2BJDXPfsvkI8fINY6CUzAIAByFj6QD3ton5T5bUzF92hX940GHDuhPDTn9IubqZ1x3Naibu3eLg55MK01kWlXFAqZ84EiDoP7pLS0vFozAborojuwkSRDx4wBvXo%2Fit6gbddR7RjjtDHTGKKVG88oEBr8FbX%2BGuf6IpwStF1kYNb2WqZNsVmzfFvhjvwvP1IQNYR8vc3LePjRGAAPgrgyV%2BBA34XBx39gIafJNxQtamCN04ufTgQeVZng%2Fl9qt%2FHI5XN1N7NfS4HCAnCOqoTH9oMOl7ci0rkpzb8cz4ub08c%2FnWaNira22Vw6rRDmaQt6JuyBVCvRWyV739dR%2BnIgcwiOCBwAY6pgHwdtsPfzItKzLDTKOLYwmX6%2FP8yXdEmhA%2BEbRSKnFjKW6bDwP3iXGnaw%2FdCWRMN2pWJFl%2Bhzz9D%2Bn7cbydySrv5U9JwKyUcoiHaX0TDtYfh0SffwHNfYhyHqWzWH6ZP8tO1G2x4LnZiGq0O85Gh6K58hHV9tKHzmGgNdy8HOqft5DoKm4uhpUY4Ra%2FsCfNyjTGVP40jkPfoRQnPmSBcHVZYn8fwkzI&X-Amz-Signature=3df7de377070a366d68f9548d7ba7fbae69af312f6e1edc3ea0b6552e9234836&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6IUKYT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9BAwrIa3e3b1n1yrzGgZfefOkAaVn%2Bhoz%2BRc0aP3%2FxQIhAK1YWPVe%2BzYZIBioTNBz7FAoHxAechWYx5UncesCbGmZKv8DCFQQABoMNjM3NDIzMTgzODA1IgxlxHCsGjR7lIZ%2BBTcq3AMdKrbmUwQWEUfS6TX5Rz3bgE%2Fkj0OU3mppr4oM1q3sk7JyQ9F0mhX0NffnhFxDsqgteV15Ti0AAJKdxjKu17Hgl4qNHSZi9fwA23tbXEhOiHnQvpesKl0BcuW2oCHoDQSL%2B81vjwvfpyuPiv2hqc%2FzKBJ0tApvlx04Rv27tEvEPjmg8Mtr0smAO8B9l3viUDG7lwzcUDEZ5fjdI9CrQxOFJa7eJEbalDQpGI%2FWVQV0jjd4nC0b7ewYr4Os5vf0BRkJl8AF6Bll9XPCJVffJ0DMc%2FgQ1ln5LwoOaK4hcNAHDVbpnMxv%2B4gOudsrB4dlSWB4ixxCZaML6i2wdvat6k2OBNFlKsL2d%2BOgUrqaAr54g7cM8FMGnfM7SicFu%2FgytZ%2BmUa2Dedh%2Fjn33zmavEogljsoD5YQm3%2FXLLJC3CRQeX5xKCq7rS%2Fj%2FSp%2F5n8lTB8ryiflaOkEF1aVEcJY%2BONvB3MARVt4OahNtlOCDLUmxS9QxldMYhywOedh4d2%2Bay%2FZojaRyRIKIrGC%2FMguS9YI74SPODRu%2BPJ1jyOyOe5lOgyO%2FFwhncuq7pT6KQ4H%2BGdqCN%2Ffelwjgz8Fr4ghA%2B8fsOeiwKK2SU7x%2B6Z6%2FlsV3jRvNCX0%2BR6un2fXIojD834HABjqkAQueMZI7Fvl1p6JvT2TQ6t0DekP3HoQqT%2BvHgjf7YMzC6AVT5BihvQeOHu6wzIs8XrvtV19j0x8IuJ1FlRHROUMPZhh8EOWnfXCNdJc0xi0I3eun3KZxKwtTm%2FuegPs6SDZKIld6ieU9nZfaTn%2F7uYClyA8FNS59CvQY7latkHLiyoBbsnYgW0VPbQD6m5Ax6pOeSzO5b01TMMrRnAAxvXV8Kxc%2F&X-Amz-Signature=1b989364b43fefc15a7e56f51b759de7ba4e4837c18073ca25cd249f99a4c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMGKNGN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCMb807t4l8mGSoY8tVZ%2Ff1u5Cfv3DN%2Fzfqi3ck767aAiAPY9XGxD6LVbFYBXlyg8QiDxE45v0iRsiaNApRTJYDFSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMAE7FRwomf%2BzC3TD6KtwDyWFjET%2FJ%2FPCyUOa8m%2Bt7LdXrivIZW767nJYE1OxzLR6Z9y%2B2JEbYWdezAofGXVmNPj79oHUTGJU77P5HroOQcK7m0skDKs56N9JWiJMVmJfAHDua7a5wJbclwViUV7PEIloAx7VROOO1fIhQQXU1XhyV3%2BJrSiPIRJzEdfzgLyQPB40Vhh0%2FrO6aGOgZAjwJLX50RNrZTKOAjrvqSRoP05xglB4DwAvVeYIg4bZFjjsbwpJij5656nRAJG1djiSXSzv1iVjC7ZFR7ptDhpaTl3m7Lmhwq9HmNwrfRsdD3ZFqdx%2FXEtocW8o8%2BWtYSTRG5PP4Q%2Fx8HFZFrjF%2FJxKf4wrPXvFJWkWzDEdRY4h2SkqeNnxMrTd00sy8WwJSs4ppWEsNwB0n6MIYuVVMsT7UUxLDJCGGkvaJH81Y6qC9xf3tOcyLKCikHVCFxcDwmpaoEHx8zN7VH%2BIGCWe9X1zDiwK%2F0U55UVyED6u3he%2FjC25uDx%2BgwTviaJ1tUpjkadDwuRkwUDUPGkUUZgDRFcvVex8em%2FWbyFvehykfuJdy3zxwcIAVyk220SbpY7JlekjrlPo495nJXFkSSZKuYuKxBOU%2BSyqStZQ3jI4hMJqPrti9p%2FHwXKyQMzPXQ%2FYwi%2BGBwAY6pgHoZTNJe%2BHszsKyovq3ACo0Z5zk%2BkALaxmtYVdNSmhOTrYKkBermso8vqmhF6hV%2B4vabPsIhL9MiapMXir72GSj8cnWdbKaxQSPjm%2BYzXmJ7XuHuOrTIioMsBCIpKxR4C7oKwqrIy92bb33pdeP4%2F3s15cjuPft4%2F2D8UJh3sqxB%2BYK80JJEl4P3Jw%2FB2g%2BqajJmV2lYBWeHT0Zvi9lK0c%2Bw61AsgTr&X-Amz-Signature=c21f6b3285f5d1c2ffb2d8d6d63299171feb7469a093ecf5bfbcff6cb30adbf0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YI6M7V%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAXeA5V1Du7XV9KSvwI3TnLH64UxuukXSfvHwCAx4y1AiAfsvi8AEH91yOfLJ1YCsCf1c8gppaIkd%2Fl0r%2F3f08%2Fqir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQbplocpNKZpMEGvBKtwDTleF8Bvi66PENzKXJcjK%2BsWqR615ZxclHqY9Al1Sme1Ed8KLPhGucXzJFKkbTY%2B2EGsQn0WmI6jOjyn6L42LV7zDMi9XJyGnLrZZmOkaoRGKLS%2FuDvQ5ak%2BIfqpMRXLGIJNakz%2BCa1YWH80bEtkHht5B3EnyZ60gWCSsCCg313ZS3N3A7vKNhVNGrHqq8YbLvrgKXW2te7Ax%2Bx1sCUs1VIA%2BKT2K1YH65Bz83jGB%2BpflbAyCPJhhGTwmM%2FA6qp%2F6TLYynZxMRIaICobzirhamu%2BHOEos0J6fS7Ija6%2BJDXPfsvkI8fINY6CUzAIAByFj6QD3ton5T5bUzF92hX940GHDuhPDTn9IubqZ1x3Naibu3eLg55MK01kWlXFAqZ84EiDoP7pLS0vFozAborojuwkSRDx4wBvXo%2Fit6gbddR7RjjtDHTGKKVG88oEBr8FbX%2BGuf6IpwStF1kYNb2WqZNsVmzfFvhjvwvP1IQNYR8vc3LePjRGAAPgrgyV%2BBA34XBx39gIafJNxQtamCN04ufTgQeVZng%2Fl9qt%2FHI5XN1N7NfS4HCAnCOqoTH9oMOl7ci0rkpzb8cz4ub08c%2FnWaNira22Vw6rRDmaQt6JuyBVCvRWyV739dR%2BnIgcwiOCBwAY6pgHwdtsPfzItKzLDTKOLYwmX6%2FP8yXdEmhA%2BEbRSKnFjKW6bDwP3iXGnaw%2FdCWRMN2pWJFl%2Bhzz9D%2Bn7cbydySrv5U9JwKyUcoiHaX0TDtYfh0SffwHNfYhyHqWzWH6ZP8tO1G2x4LnZiGq0O85Gh6K58hHV9tKHzmGgNdy8HOqft5DoKm4uhpUY4Ra%2FsCfNyjTGVP40jkPfoRQnPmSBcHVZYn8fwkzI&X-Amz-Signature=e8eecd87a0bb8059073762ebb84ca44c330f7e38d41eff210b436d1c823f2e04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
