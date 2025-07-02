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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7N2QDA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAmP3RIokkgXrJDAT3%2BaisCsTwtZBxs01jba3XTqzPhwIgbNypzy664LQ%2BSeDSH44hx4FDyOJ0ehfhnMEyHS1q7fIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvoiUD%2F3e%2FK6lnmyrcA6ZsvOSdCSpKqqqD4CPXgVG%2FXeOnHnWtVBjcHP5QuhDn7OAeLmwE5TrtBTClzUsyiL8GDkqDfvAEtUgA5kuTq9SI6dt%2FkK%2FErktmeepqr%2F6w65ft1v8XAaVsbO5sP1r7HBFnCZA9OTERS3xIszG1TjrharhvuSKeyHkYTKX9AfmSrQGAO8KNUHjerl%2Bb57fUNFJ91WMOg6XFAIjM2pNxwmJPy4k6X2dM3xMVjBq8MMozGMGFzsh66vGDqdIByv1nAGDklN2TmQUSS44MX8UWHkXYLCAmhq2l0vlOa0cU22%2FFy08HTTEf8Z9oUTN4pEJy7B%2FGMSTtjJU9ZEyyPCBUlPpV5Em8qmnX4lHZvWxtx%2BnHv7OEOqRhXgo405XPmr2coemOcFMahPqantxF37p9oQoF680aC6l8OLPj0tayJgsDRAp3V4uj3djrFymGv5CANsDZ0VPXxpi5Zpz7JkBuCza%2BcgjxWCHQrmUKRtT8XDIQFK9%2BMslrBRV%2F8zBS4mD2oorVwc6c95KUIIngump%2BJ3j%2FEsZsun1imn2njYQVMl8MjJCGxcpkYx5amblCExDrXau1bD%2F%2Fu%2FR91P7wLvtYdB51kf8kzBvzM5mghLSLi3Z4I6mG4qXyuP4TNwQhMOa9lsMGOqUBsl0Z3krv2RWMX2nRqk18n0pOLtejzzfyHepqflQlxfGFscW2bjZvOv8%2BGZlT5q%2BiW%2BGpZvNRhwgH46Wkfo88wjnZyqLzBWyoLnLDqycbCnNzgRE538gtfbzScmMi7kYmdrsGsB42bwFyQENmKgS2kulBn7i1rIc7POdn67PvBDb%2BVc34zLUG1lxXdZBwITBt%2BEspKsKuZiqSHj%2FiMpAocYuCKVyK&X-Amz-Signature=39ca2e626f5dd2727a88d88f78588c1657ea4bef9152dfb53760071ff4412812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7N2QDA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAmP3RIokkgXrJDAT3%2BaisCsTwtZBxs01jba3XTqzPhwIgbNypzy664LQ%2BSeDSH44hx4FDyOJ0ehfhnMEyHS1q7fIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvoiUD%2F3e%2FK6lnmyrcA6ZsvOSdCSpKqqqD4CPXgVG%2FXeOnHnWtVBjcHP5QuhDn7OAeLmwE5TrtBTClzUsyiL8GDkqDfvAEtUgA5kuTq9SI6dt%2FkK%2FErktmeepqr%2F6w65ft1v8XAaVsbO5sP1r7HBFnCZA9OTERS3xIszG1TjrharhvuSKeyHkYTKX9AfmSrQGAO8KNUHjerl%2Bb57fUNFJ91WMOg6XFAIjM2pNxwmJPy4k6X2dM3xMVjBq8MMozGMGFzsh66vGDqdIByv1nAGDklN2TmQUSS44MX8UWHkXYLCAmhq2l0vlOa0cU22%2FFy08HTTEf8Z9oUTN4pEJy7B%2FGMSTtjJU9ZEyyPCBUlPpV5Em8qmnX4lHZvWxtx%2BnHv7OEOqRhXgo405XPmr2coemOcFMahPqantxF37p9oQoF680aC6l8OLPj0tayJgsDRAp3V4uj3djrFymGv5CANsDZ0VPXxpi5Zpz7JkBuCza%2BcgjxWCHQrmUKRtT8XDIQFK9%2BMslrBRV%2F8zBS4mD2oorVwc6c95KUIIngump%2BJ3j%2FEsZsun1imn2njYQVMl8MjJCGxcpkYx5amblCExDrXau1bD%2F%2Fu%2FR91P7wLvtYdB51kf8kzBvzM5mghLSLi3Z4I6mG4qXyuP4TNwQhMOa9lsMGOqUBsl0Z3krv2RWMX2nRqk18n0pOLtejzzfyHepqflQlxfGFscW2bjZvOv8%2BGZlT5q%2BiW%2BGpZvNRhwgH46Wkfo88wjnZyqLzBWyoLnLDqycbCnNzgRE538gtfbzScmMi7kYmdrsGsB42bwFyQENmKgS2kulBn7i1rIc7POdn67PvBDb%2BVc34zLUG1lxXdZBwITBt%2BEspKsKuZiqSHj%2FiMpAocYuCKVyK&X-Amz-Signature=8679490d3d5af6b588d2e29858ef39d6c541789d99b711aef22bf29f5078924d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7N2QDA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAmP3RIokkgXrJDAT3%2BaisCsTwtZBxs01jba3XTqzPhwIgbNypzy664LQ%2BSeDSH44hx4FDyOJ0ehfhnMEyHS1q7fIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvoiUD%2F3e%2FK6lnmyrcA6ZsvOSdCSpKqqqD4CPXgVG%2FXeOnHnWtVBjcHP5QuhDn7OAeLmwE5TrtBTClzUsyiL8GDkqDfvAEtUgA5kuTq9SI6dt%2FkK%2FErktmeepqr%2F6w65ft1v8XAaVsbO5sP1r7HBFnCZA9OTERS3xIszG1TjrharhvuSKeyHkYTKX9AfmSrQGAO8KNUHjerl%2Bb57fUNFJ91WMOg6XFAIjM2pNxwmJPy4k6X2dM3xMVjBq8MMozGMGFzsh66vGDqdIByv1nAGDklN2TmQUSS44MX8UWHkXYLCAmhq2l0vlOa0cU22%2FFy08HTTEf8Z9oUTN4pEJy7B%2FGMSTtjJU9ZEyyPCBUlPpV5Em8qmnX4lHZvWxtx%2BnHv7OEOqRhXgo405XPmr2coemOcFMahPqantxF37p9oQoF680aC6l8OLPj0tayJgsDRAp3V4uj3djrFymGv5CANsDZ0VPXxpi5Zpz7JkBuCza%2BcgjxWCHQrmUKRtT8XDIQFK9%2BMslrBRV%2F8zBS4mD2oorVwc6c95KUIIngump%2BJ3j%2FEsZsun1imn2njYQVMl8MjJCGxcpkYx5amblCExDrXau1bD%2F%2Fu%2FR91P7wLvtYdB51kf8kzBvzM5mghLSLi3Z4I6mG4qXyuP4TNwQhMOa9lsMGOqUBsl0Z3krv2RWMX2nRqk18n0pOLtejzzfyHepqflQlxfGFscW2bjZvOv8%2BGZlT5q%2BiW%2BGpZvNRhwgH46Wkfo88wjnZyqLzBWyoLnLDqycbCnNzgRE538gtfbzScmMi7kYmdrsGsB42bwFyQENmKgS2kulBn7i1rIc7POdn67PvBDb%2BVc34zLUG1lxXdZBwITBt%2BEspKsKuZiqSHj%2FiMpAocYuCKVyK&X-Amz-Signature=398eb387648c25aa9a8d70eb14a04ef85c7abbadfe0e7057f9becd6f71538787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBHB5CY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE84MGaRfv9HZJQ3gTCgre1jtvMc%2FhMxYinHFctOaljTAiBpWSENMkhpdEeNojeNsy7zdd1%2Fp850Y9eK1UKlkgrN2yqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeYYcBEfi4tDsnZcKtwDqfzIrxVnKOIpgHE%2FiJfIFIQ3qhZ606hsQYFSfO%2BLevt2hhDechbugaFZWYXh2HNJr66bPg2JbZdlAvNOc0IP%2BALPV6AkaY%2FmuDhy9PhqZWsm5Fpt%2BzxdJGE12O7R2G3ie85iZ7FqZ0GiNpBJfjZoQWPDRkE3M3ntBhUsoshYm7V0hPSFdLdlM%2BdH9OIQ1FaYNLdvmn%2Fn93nwI%2B%2BTQXs%2FMzLo3TbYebqXB40HEykMKfFB6XYkURhNkV1URB6JvroJT10mAGh63phzlo%2FEK%2F3%2B0oTHydVyY426%2FKqifqazBpWofv1zkzhnHVKRQ62OOmmGdIb5xARtynhmT1Kc4BCvXGArU%2Fhr5j12tQ%2Bj2ZIPIwXA2u5L%2Bpr4dPLwCTHxD%2BNy12oL8EeLiRZO7zUij8ChKz46luq3XZLVBBO9SMkzYNmND6fZgjQhhBxYGxWUYMHak627IMpg9Ck6vegH%2FrkG3JsYHR4Aqo6r4VuDrn26WHV97Fi6rNLOqEqGnkasRPZR1ii7%2F42keEpXYMofG8QiOFHpMRLpSY0HV%2Fubo%2FulmVdoRUQFR%2FuyqaKd2p3u2EJ9Hay3rY%2FZ5KA7%2FLyFVl2PscnxaA0q840BfG8sPcQunjXxyg1nuEe%2BpwIV3M0w17yWwwY6pgHSptOBQ35gIlAF5ENtnlyJDDxpAhY6D1kMMly6ra2%2Bh6Gz488aDsFQ66vYfgb3FDSXkEKrdXWjKzJQfGzV4KBR5emecgcLyL%2BZZ0rZ%2Bzukg9YJKQddJikjZIbauuKadTLpKkiDEJxY7hu1tKUYcPHp%2BUDUnNJ5HP%2Ftgm7W5Bp5hGAmcu4WrIKmwYufV577dyYgpbPz3O0vNOU9ktBXP0e1MBryFI2k&X-Amz-Signature=575e424a6f92427cd13367a596b14170e8fb17bee19e663f57647c8e4780a510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IBVJRK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtuax%2F5hN%2FZ2PIKrg6NmeLaZ8iHOPjdssPCyBTencJsgIhAO78ks4R54ZpGUOU8smwvP1lq%2BSf1YxIMidakbrxppXSKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2S8YI3MoDcYT9m0q3AND6DWgnaJIUsF7YkETefxy6SM%2FfVs6wlXvaJE2jlsnR6zubU0R3TWcw0I%2BbSNGlDezx7NkljllFtnnDX%2FRpP7CBG4AAV%2Bnffjvbg27jIim8kXN6mK%2FZb2N33rXBZXyESxnpn5dfbgx5V5j37cbCdbkoBlfIfCk%2FsVvq93GjNbL60SujyrQO5cuMKV0rm1CBYLJemgyFXjcggK8CJA0%2FmWh75jXdT6y7LnNdIZiSi%2Fv36yXhiR%2BaO66mBzGo2Fmm%2BPCABrSxS3eMwQculOA39wCs6vCF%2BE2J3cVgtn4oqPg6hnpgGpmNmKVG15x3BdgrsPbrn%2FN2OQardln4L3%2F58j0x%2B62jYWdXdXKXiXw1tXhYif%2FvYOaGjqmPSZ77OXx0i15nFby8EKd0eirpUT3h6PdSCr3%2Fb%2F4%2BYJAnjpayqaM7fNPCCYSJJizb%2FYGqaqNr4d3DqVrPL0KOTR8K8ErBvGoLI%2B%2FJFVnhHmSSMhJtvnjoYL4RsSTnDKFOLKeUcTHN2lZ5d3fQa8Z%2BETe2I5llSkO1JCno2YbwDBeqghUMAfU9D5UbwlWPrbfxf1RSSVU4ymCw28HCN1oUo9Y%2BzHYcM1JV3Qjswj90VlgTddtoTFXobIojDh%2FlheOVu6InzC2vZbDBjqkAbtpESuQG2%2BJuEK0rxPGW0YgWaJOaR3b588Kj0lg%2BW2zYR%2FrW%2FqSgBCFXSHeH4pGvF5Ae%2FKoRq6Mx9YwCjqBq54Djrvms7CMtiNIXslgtit9PVAhfvvDCXRkLpLyI8hS47inoJTUdgYnakn7uWCor8uhU6mnL9jq39Pq7XpWdmxyT1p1iDNHL8xeUErNa6DYo5FwVjzCE9kK%2B5bPICqc6A9KWy8Y&X-Amz-Signature=61c826586089edea780605f6f005ff1278b0935151a0d5414cdefa7aac071f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7N2QDA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAmP3RIokkgXrJDAT3%2BaisCsTwtZBxs01jba3XTqzPhwIgbNypzy664LQ%2BSeDSH44hx4FDyOJ0ehfhnMEyHS1q7fIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvoiUD%2F3e%2FK6lnmyrcA6ZsvOSdCSpKqqqD4CPXgVG%2FXeOnHnWtVBjcHP5QuhDn7OAeLmwE5TrtBTClzUsyiL8GDkqDfvAEtUgA5kuTq9SI6dt%2FkK%2FErktmeepqr%2F6w65ft1v8XAaVsbO5sP1r7HBFnCZA9OTERS3xIszG1TjrharhvuSKeyHkYTKX9AfmSrQGAO8KNUHjerl%2Bb57fUNFJ91WMOg6XFAIjM2pNxwmJPy4k6X2dM3xMVjBq8MMozGMGFzsh66vGDqdIByv1nAGDklN2TmQUSS44MX8UWHkXYLCAmhq2l0vlOa0cU22%2FFy08HTTEf8Z9oUTN4pEJy7B%2FGMSTtjJU9ZEyyPCBUlPpV5Em8qmnX4lHZvWxtx%2BnHv7OEOqRhXgo405XPmr2coemOcFMahPqantxF37p9oQoF680aC6l8OLPj0tayJgsDRAp3V4uj3djrFymGv5CANsDZ0VPXxpi5Zpz7JkBuCza%2BcgjxWCHQrmUKRtT8XDIQFK9%2BMslrBRV%2F8zBS4mD2oorVwc6c95KUIIngump%2BJ3j%2FEsZsun1imn2njYQVMl8MjJCGxcpkYx5amblCExDrXau1bD%2F%2Fu%2FR91P7wLvtYdB51kf8kzBvzM5mghLSLi3Z4I6mG4qXyuP4TNwQhMOa9lsMGOqUBsl0Z3krv2RWMX2nRqk18n0pOLtejzzfyHepqflQlxfGFscW2bjZvOv8%2BGZlT5q%2BiW%2BGpZvNRhwgH46Wkfo88wjnZyqLzBWyoLnLDqycbCnNzgRE538gtfbzScmMi7kYmdrsGsB42bwFyQENmKgS2kulBn7i1rIc7POdn67PvBDb%2BVc34zLUG1lxXdZBwITBt%2BEspKsKuZiqSHj%2FiMpAocYuCKVyK&X-Amz-Signature=7c842a2d40ec465e3bc0058bd4a64a3c2b76dfbde567ee3c95fe35295b44d34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
