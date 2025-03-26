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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QM7BH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqffNmH1DR3ahkm%2F6%2BCbUeB5szMOYh6Bf3jDfHwHczQIgKZ1mpm6kf3Jpqu6C2aTLPT%2BxiQeW80Ovk6hVHa3qkO4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIynN8cLOqD451j0QCrcA4W7YFEUhdBK1FKDZ5pKrp4Mrv51HCo%2FlOICClzYLIOZbqw9x%2F7T27cs%2FOx2psJ6%2Byf4JB9oog22Sw44ANNpJ7KNpSULQUBeWWslU4J9kmc%2BkOes7IPpg%2B9HLGSuhj7GLv4O49WsnRkmovkIHSfhLbHJt3fkvMMaYbHMXTFfkJFZjp2vosftm%2FcUbkNkL7SsccZ%2F1ICeXkWbi8F0BaRmveigP1ZfaG4atcbnjt97vzmunDTHWLaXp992a8uDQf6jw4kc4uEEUqX7iIUkL%2FckJmeicvtv1w0%2B64uUS9CZLZLX2G9IIfJ%2Fe23XpmxuYry2pgbMOlocmXlECuxxp8LcgZhAafISXxOzvnj2%2BOZQnJl9dSMDLNJ7f8tIJ3z49oVOGv1Sm9%2FimzQy%2FQAF%2FcS0l3%2BLg9d3A1dJUEVZ%2BjO%2Bt7jsvC3AwOt%2Fh7kSUx0s38%2B61QoBg1kXtAONpGbmxVis2zygnzDQlQWl5ho%2Feys6ic7SQVWMJRtIpfxl8pqWTT08ftUQmFjd6HjwiF9pPhkv3Sf%2FFQIHRsaFe%2BXP3W6tpBFNVTSlmPeDSYcnp7mFH9fRyI6uN3WxIMM37nrnHnFxZBanEAKxzsv16CrKlWY9K2Zc5a0qvxP60Ncdh10WMN6tjr8GOqUBgL7QlRYSYCD2kYa2SyJAbR%2F%2FZ1btlDFWQG2opJ890d0a7vXarqU0bbdqOYCN0W%2F3Z05iWf98UQPsHiPXM1lnUbsyBZ%2FpXZd5GizIOT28FK30vJVCdNn8GH7OmIWjgpzk5maIZ%2BEhdw6Xb124yB30L6mzXlyjX1fMiVXHk2d8Pgkdeq4eHIlhAdIcb%2F5HuFnkqIQWj56%2FYB7BtPRrfTjU%2FaWi9S4C&X-Amz-Signature=acbbb265939a772089f37de058a0092d960b4fb5af906c33eec9e5661088ad7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QM7BH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqffNmH1DR3ahkm%2F6%2BCbUeB5szMOYh6Bf3jDfHwHczQIgKZ1mpm6kf3Jpqu6C2aTLPT%2BxiQeW80Ovk6hVHa3qkO4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIynN8cLOqD451j0QCrcA4W7YFEUhdBK1FKDZ5pKrp4Mrv51HCo%2FlOICClzYLIOZbqw9x%2F7T27cs%2FOx2psJ6%2Byf4JB9oog22Sw44ANNpJ7KNpSULQUBeWWslU4J9kmc%2BkOes7IPpg%2B9HLGSuhj7GLv4O49WsnRkmovkIHSfhLbHJt3fkvMMaYbHMXTFfkJFZjp2vosftm%2FcUbkNkL7SsccZ%2F1ICeXkWbi8F0BaRmveigP1ZfaG4atcbnjt97vzmunDTHWLaXp992a8uDQf6jw4kc4uEEUqX7iIUkL%2FckJmeicvtv1w0%2B64uUS9CZLZLX2G9IIfJ%2Fe23XpmxuYry2pgbMOlocmXlECuxxp8LcgZhAafISXxOzvnj2%2BOZQnJl9dSMDLNJ7f8tIJ3z49oVOGv1Sm9%2FimzQy%2FQAF%2FcS0l3%2BLg9d3A1dJUEVZ%2BjO%2Bt7jsvC3AwOt%2Fh7kSUx0s38%2B61QoBg1kXtAONpGbmxVis2zygnzDQlQWl5ho%2Feys6ic7SQVWMJRtIpfxl8pqWTT08ftUQmFjd6HjwiF9pPhkv3Sf%2FFQIHRsaFe%2BXP3W6tpBFNVTSlmPeDSYcnp7mFH9fRyI6uN3WxIMM37nrnHnFxZBanEAKxzsv16CrKlWY9K2Zc5a0qvxP60Ncdh10WMN6tjr8GOqUBgL7QlRYSYCD2kYa2SyJAbR%2F%2FZ1btlDFWQG2opJ890d0a7vXarqU0bbdqOYCN0W%2F3Z05iWf98UQPsHiPXM1lnUbsyBZ%2FpXZd5GizIOT28FK30vJVCdNn8GH7OmIWjgpzk5maIZ%2BEhdw6Xb124yB30L6mzXlyjX1fMiVXHk2d8Pgkdeq4eHIlhAdIcb%2F5HuFnkqIQWj56%2FYB7BtPRrfTjU%2FaWi9S4C&X-Amz-Signature=f1c7fd98b611f433b2bfb7c82eff4d6731a53efb9353b95930d2461ab3d0e817&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG36SBU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1rwdzyGaMxswg1wQzzQMC1lnmYhHGbSE14pjgFs0neAIgB8JI7fjdQ9eIJ5NcPiy0JlKmQeS0%2Fxx5Se4Ux3C4DYkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNQTYDQZDnZnZZyJVircA9FPQulWdF0HgdMFS%2BVg5eBULeheiCbUQpQdqSxyaKugHC6li4%2BKDf%2FJEo4s2RVmR5Fb1uFPYnKbBCzdGaKyt5H33cstaeIzHMfyf6VerHJen1uYQDWwoc9CGlX%2BuGKj6XEwD%2BjcNPJ29ohBZQHexnJ2OKBYdJbrvNOr2T7mx5ikkEQlW9JTTh70vKKBdVJ4E9o8LE29wypcEeNQKo1NpIvUQto8cs2npnJIQdbtupohPE0Dk5BPcV6VDd5EfNA531CDAj3xdWtWK67epWdGdLzwZDHmGmWFvUQjQ2IgOPPE1lbMIwFU2ZjUdZn%2Bm5Iej0RASN4pIZsn1LUDidBfo7ceYk%2F5vbda6rCnk3G%2FVLss4ma0bPlCI%2B7p8AsVdaTBux%2B20BenplDuNT%2B25B5vo7K4Lt3ilYpS9VCyhjpyPZZREsUinYKl6Jx1Ab8FVKL2HFcDiJqlnsdtKRK0JPiCxP%2Fa6jolr1%2BepJxxxlFeL%2Bd%2BDdVummlVcdw0r%2B60U1pyMvt9n1nVcUgcPAdknilEUZv1TclSGetCy8gIRWnzTEsjZqzVmlJFc32xfeODkUdEixObj73Nl6Dl2e%2BkDXoJ%2FOiNHt%2F2Gpa8N0dz4Ef5pkHK72JxvteRQfYFGL6nMMeujr8GOqUBNz%2FxBgbO5qR1PbMGIEMI2vn%2Fqx%2FI06qIIviumVbEZ7DvYyvzFYZ0Lb6CR8Heh0jTdqtI2%2BNz%2BzwLctMWAJoqdxd3ual6Bip3myWzAM5jw2%2F4HRePe7X5YZlYpgS9nXxvbxxdsbHP7UVOyCc4qotiUhrHmQGpb3gLqXvD8DYHvj9colFKLsvYs5SURddQphYYdNOA80T6A3klipfX6ps8X37tmUYY&X-Amz-Signature=f896e11ec27768b6a86bb8d1e5fa4b8fec1230bc9d9e9b03a1ac326b1f233479&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMS66VRI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYBaIvGzBdSCPXKPmRmaP7uQH3SkbfUxXA308tZWZWxwIgS4oBgAwChx7FXSEK1h4x4WGyBsho6fWxHfAfRL8wD94q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPwqW34zMWHf8DgTayrcA77woT%2FAGnaWvgJO7WtZFqJAHEXtARtkZ6fSqkOzDhc8lcGlJhw2P6%2Fz6yc3ocIG2TBkP1bnEjgeY23G64e%2F35pEBlxD4jocQCrH9aUWZJ5J473GbnWTgm1OZS4CxatXRjpDL3ykYdi5f5I4TE4DgeBCLqIaaaERPNICRKVnPcvfzg%2FQEXY6AN%2FBfaSjYndD9A%2BZ9AqI9sFbz6zFlCY28GQlzPKOXbGOmZji7MTE%2F%2Fpf4r3hsQucLHs1TVUloqSYgPy8bZkUVXkZqGF7S1OU3s4O4nrgEW4ZyYwtxIvGxHqP3TKeySVo4TKgU8hMKhnitbP1U2OB9iJ%2FQuN%2FxPTaQLvk0C60mqDg3frcmaT1vjGf4idB0EaIRX7YPUbQpytVmtqnfxxZnj2b1FuJkuOQl4SOemGcKpedgmOYPx%2BX3GbBQhAF698kxy7OZtpfdUmvuoy9QQP4L2omH9ulpWw0QbO0bEHYSbsr%2BdlAHm2t2c7I6Bh%2B0zl4MMK8kUFjt1qxPiu22lRqDxKKLyTOcEwASVSfEyYsokWLz8RM2tUd6vxEA4gHz5caShqenZdld4RUeSIfMK9%2BDLinZow1IKLTZXWBrPm7XvMlucj5CyxichY8G47WMCWSs32kkwqWMJWsjr8GOqUB1Wf%2FcNMZjAB6iNSR94lOr3He9pBgXeoGUrkKSi1uJklg3YsReDWVMBZfEsa1Z47u6iBbLC0bEMDkDQGf07mCMndvDVYNk21bITyV7bfN5DccYsMAWMbtJYiux%2BkX9iEboxY7Y4AGFwulK2ByktPbDqZm9D2sM6anpaNilJ4XgXVtNuAayWZxURcmeReAjDsYI0vV6snd68L27Ka1kEc8iMhk9cpx&X-Amz-Signature=1361501cd4b4f950b00e5cee85358037c97157143249161cec1aef35bf119004&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QM7BH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqffNmH1DR3ahkm%2F6%2BCbUeB5szMOYh6Bf3jDfHwHczQIgKZ1mpm6kf3Jpqu6C2aTLPT%2BxiQeW80Ovk6hVHa3qkO4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIynN8cLOqD451j0QCrcA4W7YFEUhdBK1FKDZ5pKrp4Mrv51HCo%2FlOICClzYLIOZbqw9x%2F7T27cs%2FOx2psJ6%2Byf4JB9oog22Sw44ANNpJ7KNpSULQUBeWWslU4J9kmc%2BkOes7IPpg%2B9HLGSuhj7GLv4O49WsnRkmovkIHSfhLbHJt3fkvMMaYbHMXTFfkJFZjp2vosftm%2FcUbkNkL7SsccZ%2F1ICeXkWbi8F0BaRmveigP1ZfaG4atcbnjt97vzmunDTHWLaXp992a8uDQf6jw4kc4uEEUqX7iIUkL%2FckJmeicvtv1w0%2B64uUS9CZLZLX2G9IIfJ%2Fe23XpmxuYry2pgbMOlocmXlECuxxp8LcgZhAafISXxOzvnj2%2BOZQnJl9dSMDLNJ7f8tIJ3z49oVOGv1Sm9%2FimzQy%2FQAF%2FcS0l3%2BLg9d3A1dJUEVZ%2BjO%2Bt7jsvC3AwOt%2Fh7kSUx0s38%2B61QoBg1kXtAONpGbmxVis2zygnzDQlQWl5ho%2Feys6ic7SQVWMJRtIpfxl8pqWTT08ftUQmFjd6HjwiF9pPhkv3Sf%2FFQIHRsaFe%2BXP3W6tpBFNVTSlmPeDSYcnp7mFH9fRyI6uN3WxIMM37nrnHnFxZBanEAKxzsv16CrKlWY9K2Zc5a0qvxP60Ncdh10WMN6tjr8GOqUBgL7QlRYSYCD2kYa2SyJAbR%2F%2FZ1btlDFWQG2opJ890d0a7vXarqU0bbdqOYCN0W%2F3Z05iWf98UQPsHiPXM1lnUbsyBZ%2FpXZd5GizIOT28FK30vJVCdNn8GH7OmIWjgpzk5maIZ%2BEhdw6Xb124yB30L6mzXlyjX1fMiVXHk2d8Pgkdeq4eHIlhAdIcb%2F5HuFnkqIQWj56%2FYB7BtPRrfTjU%2FaWi9S4C&X-Amz-Signature=b37550d502673c3b446872500455f00057d9245cd64e8b104aec01ae9b5ee4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
