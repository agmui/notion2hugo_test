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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHTVOEK%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCFbx5DmufSCvZ7wWNILLbaEva3c385IERfkHXVaSHMPgIhAK0jjpXTttSMF6dOR%2Fvgd1xH5S07f47NTKuOy%2FQs7tFNKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPvGqj9GpgXjlhW1sq3ANjhXNEn92AXB2RbTBaRb4xHSz4NczyKchZt%2BjViwwqO1kM8rqqnuQyV13Ur6JDQ4x%2Ba%2FLx0WNkNNHReWK5B9ukQRCRRGlhbLGrwrxlQuZnsqzXu0xl%2BW3L%2B5fKChNq5s54%2BddX7iuBaFtinu%2FTL8a1%2Fk175TYOL1ueeWM6hn2DFqczm7JtfMfzdXYxN7kbVlLLuTby0UZW1pENosiv1DeAHOWTxfUqD5cTqGCDj79L97uaqh6iNJn6k3%2BL6EtzfyL0W8OlU%2BW3MwscAS7snkSwE3GzvMmaAFc%2Fem3%2FfBeK91XsvPc%2Fe%2Fk4Yg8ZoWN0k9afRqbWH9KlAg1wezwYR4WRQ5wnzrULPX3hxUotrX9Yq%2FucF0JNiSJhXhG3YjHAljXnnu%2BSzOezTz0cS19jvA6YwEkM%2BZPr9E%2F5cufHdQ9wjcqt9FL1PE8tR2UOBYz7YV3cpCBtFbljofjK%2B789aRlzzMlC4Ij1dmHMBPBZJbcbWxyJUcdexOBxJExa9L6xN2In0hBMD5khMQcmS43GPbT%2B5vmNWszPfCG5na5hBxh5y9ID5lr0ei5jRmnq6Os9iDYe8gl4ZlY6Yktrh4paJfIwQpe8uoUFr8cgHAeW76zDhqbTHMpnmAXQ9pBgAzDmi4PGBjqkAUSDFK5N7etMHvFltUtpUPY84KTAEhP650%2BiA12QW9BibAb7Dn70UZ%2BnoAewjWFUjsCcEEMiayHAor1UslJWO25FYT%2BoPGcwhyPF4m6mzH02CR6Ith8NGMDL15imhseXQ9kOtLFU9DFxTQpFc5CVFVJJiR32y6E3e0o5zzOxcySSxtj5QiPYEASKYeLm2rCqGrQEMzavmgGlybjnCoYj8YlfH6fq&X-Amz-Signature=b1f863c909145e3d8c5d15d1f6b497c7b1f7f7f79ba495999bba8f509f041e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHTVOEK%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCFbx5DmufSCvZ7wWNILLbaEva3c385IERfkHXVaSHMPgIhAK0jjpXTttSMF6dOR%2Fvgd1xH5S07f47NTKuOy%2FQs7tFNKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPvGqj9GpgXjlhW1sq3ANjhXNEn92AXB2RbTBaRb4xHSz4NczyKchZt%2BjViwwqO1kM8rqqnuQyV13Ur6JDQ4x%2Ba%2FLx0WNkNNHReWK5B9ukQRCRRGlhbLGrwrxlQuZnsqzXu0xl%2BW3L%2B5fKChNq5s54%2BddX7iuBaFtinu%2FTL8a1%2Fk175TYOL1ueeWM6hn2DFqczm7JtfMfzdXYxN7kbVlLLuTby0UZW1pENosiv1DeAHOWTxfUqD5cTqGCDj79L97uaqh6iNJn6k3%2BL6EtzfyL0W8OlU%2BW3MwscAS7snkSwE3GzvMmaAFc%2Fem3%2FfBeK91XsvPc%2Fe%2Fk4Yg8ZoWN0k9afRqbWH9KlAg1wezwYR4WRQ5wnzrULPX3hxUotrX9Yq%2FucF0JNiSJhXhG3YjHAljXnnu%2BSzOezTz0cS19jvA6YwEkM%2BZPr9E%2F5cufHdQ9wjcqt9FL1PE8tR2UOBYz7YV3cpCBtFbljofjK%2B789aRlzzMlC4Ij1dmHMBPBZJbcbWxyJUcdexOBxJExa9L6xN2In0hBMD5khMQcmS43GPbT%2B5vmNWszPfCG5na5hBxh5y9ID5lr0ei5jRmnq6Os9iDYe8gl4ZlY6Yktrh4paJfIwQpe8uoUFr8cgHAeW76zDhqbTHMpnmAXQ9pBgAzDmi4PGBjqkAUSDFK5N7etMHvFltUtpUPY84KTAEhP650%2BiA12QW9BibAb7Dn70UZ%2BnoAewjWFUjsCcEEMiayHAor1UslJWO25FYT%2BoPGcwhyPF4m6mzH02CR6Ith8NGMDL15imhseXQ9kOtLFU9DFxTQpFc5CVFVJJiR32y6E3e0o5zzOxcySSxtj5QiPYEASKYeLm2rCqGrQEMzavmgGlybjnCoYj8YlfH6fq&X-Amz-Signature=e07f2f4f28f8c79a64543a8759d99d6e3a1a29c3fa0ccf2aefbf635fc2e266be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHTVOEK%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCFbx5DmufSCvZ7wWNILLbaEva3c385IERfkHXVaSHMPgIhAK0jjpXTttSMF6dOR%2Fvgd1xH5S07f47NTKuOy%2FQs7tFNKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPvGqj9GpgXjlhW1sq3ANjhXNEn92AXB2RbTBaRb4xHSz4NczyKchZt%2BjViwwqO1kM8rqqnuQyV13Ur6JDQ4x%2Ba%2FLx0WNkNNHReWK5B9ukQRCRRGlhbLGrwrxlQuZnsqzXu0xl%2BW3L%2B5fKChNq5s54%2BddX7iuBaFtinu%2FTL8a1%2Fk175TYOL1ueeWM6hn2DFqczm7JtfMfzdXYxN7kbVlLLuTby0UZW1pENosiv1DeAHOWTxfUqD5cTqGCDj79L97uaqh6iNJn6k3%2BL6EtzfyL0W8OlU%2BW3MwscAS7snkSwE3GzvMmaAFc%2Fem3%2FfBeK91XsvPc%2Fe%2Fk4Yg8ZoWN0k9afRqbWH9KlAg1wezwYR4WRQ5wnzrULPX3hxUotrX9Yq%2FucF0JNiSJhXhG3YjHAljXnnu%2BSzOezTz0cS19jvA6YwEkM%2BZPr9E%2F5cufHdQ9wjcqt9FL1PE8tR2UOBYz7YV3cpCBtFbljofjK%2B789aRlzzMlC4Ij1dmHMBPBZJbcbWxyJUcdexOBxJExa9L6xN2In0hBMD5khMQcmS43GPbT%2B5vmNWszPfCG5na5hBxh5y9ID5lr0ei5jRmnq6Os9iDYe8gl4ZlY6Yktrh4paJfIwQpe8uoUFr8cgHAeW76zDhqbTHMpnmAXQ9pBgAzDmi4PGBjqkAUSDFK5N7etMHvFltUtpUPY84KTAEhP650%2BiA12QW9BibAb7Dn70UZ%2BnoAewjWFUjsCcEEMiayHAor1UslJWO25FYT%2BoPGcwhyPF4m6mzH02CR6Ith8NGMDL15imhseXQ9kOtLFU9DFxTQpFc5CVFVJJiR32y6E3e0o5zzOxcySSxtj5QiPYEASKYeLm2rCqGrQEMzavmgGlybjnCoYj8YlfH6fq&X-Amz-Signature=bf0e843e87ce205814852ffcdcf193f61289b8109c9b7fd6977cb895f1e9b308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6D4OVJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCID%2BxmGlWS%2BZ4oZWvfFD4zvLFaeUiDovd%2BvQsVIaK23n9AiEA%2BH6a7xFtXgpnKr666vEFRTwHxRa7sFb6HY9ZHrPxJloqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8dgdqkqBLq1C%2FNbircA7SF4SB3P0v%2Fvj%2FmfcbKDf%2BCArw9BTTzhB5VUDLKlsYIHtm0F7pYFS%2FiS37sTCAnmDB8FJNJTNY0EnH1gjFGlLWTpZuS76GJ7LhLh8IXIvTMRz1sbVxzzqhfNIXj8uXTyynrF8TeEdgvrE0M8T7S1BuaXHoqDIdOFYO2aYQ52kjC20DDROLNLK4cZDsnLlILHPNonpEZB9o8dMbUfFAfU16SRja3IXBiMtAd4ckxQOOli85%2BP%2B1ouSksVEfTA717YEyywlhKWfzutS9ydbDthPRrWyKPAWdI7wEPmd%2FAJKr5M4B%2BjR9tt1ziBt0iA6ywsMACklL78lLynPrurp9KAQpb1ty8%2FyFkXjH06%2BLJ5ymzs2OLeoZPMvxhj2Cj7qs2sBgP1WdNO%2FyoYsYhVmWmk%2BbKTL4fR3UkQ%2Fa8c6pid0hA8zoJoGJQyT%2Bg1CzOHDq6J3AsjVS2rfZq80Rfyh2szZXhd2gb54VzJ8F8UPMUfzkwK4WLIcVCInwc1mpnB3798%2BZS5X8i8k9i62H5psn%2Fsh29hcAOZyZOhEPELQov2I4RTDj3XSUAIgUdmIBsbkMw9YiCqE9fdwXdjj1bLHtIIY2h9Re5Ixmn%2BNYxb5L7L%2FvKJ4B8dar%2F1tYZtGN6MNWLg8YGOqUB%2FYzc%2BFyG2J58vN4jZkKhA3M%2BHtX7uqXxc64Nxgp6bGasUBLdrE7BlV3dB6QBVG3lwH8ZclEPK%2Fn4QQxI6BUBnpyT9uzoQkTVcr%2F7413EXRJcKek%2BvCTuvfgUumYHjqowzdQEPdSAY6na1hRwoEPiS1MqCXOCgSnsYshMUZIr%2FSY2G8KoteRgdYqFCw%2BsEwDTPexp6LpZStyMBxpbW4akNBSwozQU&X-Amz-Signature=438504b2e120494d82c3e20bf9eca5cd35dcafab1fb7b98d9f3e731cbfb7ee0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VUXBLX%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB282qe49BRYv77zl5swV%2FphebG3GSpV4%2BBICOXZdpxuAiBwJ%2F99cH48t3j6bzQpzP9%2FsK9241G8fwzwlneAhJZ5qCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1SRxkhpeEImi%2Fu%2BMKtwD6r68XlfqJzx2HkiVx3wYkicaeqge7vVY763zxunGt48qfeU5uTEeaeOrXaRUG6TZnUffivL7HMl9TqOO1eUp3LNy%2Fuhu98poJnwXTRzBsNgRu3DPPVPJOGyLZ70KXsb3lFHWo%2Frb9j2jFZrHuY4cGnGFxpm%2BcfLdiAmoUd2PcbyhjiGq95WNHr7dOtdwxfvk9WUd7Dlba3ccWg%2F7n867Z7iuwbQLDDOKj%2BHO6WZe%2BrZpQMeMR7UE%2F3UwHq6GSOtCJDgOxs8x5CRG8gdBY2kBCYW4wBbi4eDhCyWA3muNIeBErzfemWaITAJ41%2BHkXVbXclsH%2BZ0karefiutIVCqP9a99m5yngbVKvxTl10r60HgR4nACSz0MVa9%2FoTj1OTYScdrLychCqHX%2F1fDThClgY3TuKRZYSMwTHAtavd6Kzbisgbxys9hmyOYq2LSIhuNUQz1CJ3WX66rJbtTyM9o%2Bbo%2F0fmor6Et8Nr2T8kBGVSWZHsiuvWWRNy2TyVYlgcxZmH7R95ZV4uhpj9fR41vm%2BsoifcxEozFMv8MMlEW9cXzQGkQGwm%2BMAFdUuYuy1f9wvkv1NaLAMsHjhYZ6ylgRnPAGgaK4oCzwNoMoa7oqNoZYiAnqTvSBJi5eRTcwvYyDxgY6pgHRm4gQi8WuSn3E9InVchgh4XXNLEda1yf0QOxM2fubiMdqYSRRGsYK8XP5OSmYffmuju7t13a6Z5xE8BfPyhb2UcglNdMkzLl6WENjZGacr0AG6%2FiBe6yNRwA0I0mJH25SXdl4lhecV%2BJvl6GugYL38YUWDMZlkQrR4Ke6GY%2BmyyCIhOwU2WS4fHAciKNRzBdOkTh1l370on0oXcBP6W9YgiX%2BvJda&X-Amz-Signature=9d88b89cef97a7a46666c7d9cc41db9d79233621dcb48e389ce3350e2853b3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHTVOEK%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCFbx5DmufSCvZ7wWNILLbaEva3c385IERfkHXVaSHMPgIhAK0jjpXTttSMF6dOR%2Fvgd1xH5S07f47NTKuOy%2FQs7tFNKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPvGqj9GpgXjlhW1sq3ANjhXNEn92AXB2RbTBaRb4xHSz4NczyKchZt%2BjViwwqO1kM8rqqnuQyV13Ur6JDQ4x%2Ba%2FLx0WNkNNHReWK5B9ukQRCRRGlhbLGrwrxlQuZnsqzXu0xl%2BW3L%2B5fKChNq5s54%2BddX7iuBaFtinu%2FTL8a1%2Fk175TYOL1ueeWM6hn2DFqczm7JtfMfzdXYxN7kbVlLLuTby0UZW1pENosiv1DeAHOWTxfUqD5cTqGCDj79L97uaqh6iNJn6k3%2BL6EtzfyL0W8OlU%2BW3MwscAS7snkSwE3GzvMmaAFc%2Fem3%2FfBeK91XsvPc%2Fe%2Fk4Yg8ZoWN0k9afRqbWH9KlAg1wezwYR4WRQ5wnzrULPX3hxUotrX9Yq%2FucF0JNiSJhXhG3YjHAljXnnu%2BSzOezTz0cS19jvA6YwEkM%2BZPr9E%2F5cufHdQ9wjcqt9FL1PE8tR2UOBYz7YV3cpCBtFbljofjK%2B789aRlzzMlC4Ij1dmHMBPBZJbcbWxyJUcdexOBxJExa9L6xN2In0hBMD5khMQcmS43GPbT%2B5vmNWszPfCG5na5hBxh5y9ID5lr0ei5jRmnq6Os9iDYe8gl4ZlY6Yktrh4paJfIwQpe8uoUFr8cgHAeW76zDhqbTHMpnmAXQ9pBgAzDmi4PGBjqkAUSDFK5N7etMHvFltUtpUPY84KTAEhP650%2BiA12QW9BibAb7Dn70UZ%2BnoAewjWFUjsCcEEMiayHAor1UslJWO25FYT%2BoPGcwhyPF4m6mzH02CR6Ith8NGMDL15imhseXQ9kOtLFU9DFxTQpFc5CVFVJJiR32y6E3e0o5zzOxcySSxtj5QiPYEASKYeLm2rCqGrQEMzavmgGlybjnCoYj8YlfH6fq&X-Amz-Signature=6b778a3e4da0923c77c439f7e2398e6e7f1d4998a0b8544693559133793a74e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
