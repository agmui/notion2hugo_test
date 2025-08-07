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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZT2SNNS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAZnyzH7oFN2oTmwHAAapFvJGmro06fhIV25JtfImrNMAiEA5UqigA8DISVJo0ZZAoXBeXFaRoU09nclq43j1bQTDa8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNISFCwgu59WdwyGZSrcA%2FwpGZcrvRYaJnU58Z8%2BRxiwiQDFUgR9i%2FgKpfuQPgccQ6gKw4aVJDPB2nEAEl5pAhduxiOuUIxZ5w172hMFcgQZnrxHYqCp6dak4axHm6%2FaaqdkKWeaFsWat9ui87zQs3MzfJMZrzYAHK1lrTxB77OjHEPSI5Yve71qFNc9AjB%2FeG8X0YSy6Tj6OXJcbmU9kd9Dx1M5mfeFOg1PEO%2B%2FtkfiR%2Fmwrq1Wf8Oz8cUBct3A7AzoOmG114k%2B67xX%2BlIrn%2FFTJ9OyRYyzAv18TtjE4NNHea5V5wlWezpzA9%2FHg8M7hLfR%2B5gmmpS8DiDLlE0Ao3nIwEDI%2B0gO8pDnfRIReN2LxGRmVEi4mHRQ1DtukPiWCbKFWkY7hFg%2BOdyc5ryMh7jGLD2qM6dCHOa0zE%2FDOnnBS0YdHoSUfYiSlwK%2BGgimuRBbZ4srYyv8mVlWFRvGHGrcrUSYCYkEZCjFSWqkhjr8k34GlMW41A%2BEtTJUKXPGJkK64QdiShWTsag82JzwoHzMR%2BzoPcUIhERYNtvtC5%2BgJcbRQnS0Xw%2FGUfX9l0UuE47eBYCuP1ZLrNz3B%2BR2gICXmOzzHPM9gDOHsYHMe7GHt0aJOQPzoO%2BSGlzWoGEaxC%2BLL6lqEDyiXzGrMNTs0MQGOqUB4u48Sv7RafxQGR3AY2OOo2%2FsoyUxpeqA9rWXbUo1kz65F1TnfTVYch1AipEjYeSgnybVko2OzKtJ3HtLM8Zb6HsWkaOZkgFXBTGUuYnfGUVNv5HKqctLqsfOmhobr1d%2FYMqdtQ1nxh3u%2F7blMlFWr1ffDPqzNkgXzI5ZC9Q8qjXq8NRUJzkWZE2DoR%2F%2BCRRQi6KACNdjn%2Fftpgk76VppCgxtA0Ad&X-Amz-Signature=b95bd650a7e6e49d18b325d6344276bba5df2b445e302be1dc301b8855899abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZT2SNNS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAZnyzH7oFN2oTmwHAAapFvJGmro06fhIV25JtfImrNMAiEA5UqigA8DISVJo0ZZAoXBeXFaRoU09nclq43j1bQTDa8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNISFCwgu59WdwyGZSrcA%2FwpGZcrvRYaJnU58Z8%2BRxiwiQDFUgR9i%2FgKpfuQPgccQ6gKw4aVJDPB2nEAEl5pAhduxiOuUIxZ5w172hMFcgQZnrxHYqCp6dak4axHm6%2FaaqdkKWeaFsWat9ui87zQs3MzfJMZrzYAHK1lrTxB77OjHEPSI5Yve71qFNc9AjB%2FeG8X0YSy6Tj6OXJcbmU9kd9Dx1M5mfeFOg1PEO%2B%2FtkfiR%2Fmwrq1Wf8Oz8cUBct3A7AzoOmG114k%2B67xX%2BlIrn%2FFTJ9OyRYyzAv18TtjE4NNHea5V5wlWezpzA9%2FHg8M7hLfR%2B5gmmpS8DiDLlE0Ao3nIwEDI%2B0gO8pDnfRIReN2LxGRmVEi4mHRQ1DtukPiWCbKFWkY7hFg%2BOdyc5ryMh7jGLD2qM6dCHOa0zE%2FDOnnBS0YdHoSUfYiSlwK%2BGgimuRBbZ4srYyv8mVlWFRvGHGrcrUSYCYkEZCjFSWqkhjr8k34GlMW41A%2BEtTJUKXPGJkK64QdiShWTsag82JzwoHzMR%2BzoPcUIhERYNtvtC5%2BgJcbRQnS0Xw%2FGUfX9l0UuE47eBYCuP1ZLrNz3B%2BR2gICXmOzzHPM9gDOHsYHMe7GHt0aJOQPzoO%2BSGlzWoGEaxC%2BLL6lqEDyiXzGrMNTs0MQGOqUB4u48Sv7RafxQGR3AY2OOo2%2FsoyUxpeqA9rWXbUo1kz65F1TnfTVYch1AipEjYeSgnybVko2OzKtJ3HtLM8Zb6HsWkaOZkgFXBTGUuYnfGUVNv5HKqctLqsfOmhobr1d%2FYMqdtQ1nxh3u%2F7blMlFWr1ffDPqzNkgXzI5ZC9Q8qjXq8NRUJzkWZE2DoR%2F%2BCRRQi6KACNdjn%2Fftpgk76VppCgxtA0Ad&X-Amz-Signature=91e097dd1583e6f2917767f7dbee9f4d80b4afe3fd6c5dbec0cc841b135dc501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZT2SNNS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAZnyzH7oFN2oTmwHAAapFvJGmro06fhIV25JtfImrNMAiEA5UqigA8DISVJo0ZZAoXBeXFaRoU09nclq43j1bQTDa8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNISFCwgu59WdwyGZSrcA%2FwpGZcrvRYaJnU58Z8%2BRxiwiQDFUgR9i%2FgKpfuQPgccQ6gKw4aVJDPB2nEAEl5pAhduxiOuUIxZ5w172hMFcgQZnrxHYqCp6dak4axHm6%2FaaqdkKWeaFsWat9ui87zQs3MzfJMZrzYAHK1lrTxB77OjHEPSI5Yve71qFNc9AjB%2FeG8X0YSy6Tj6OXJcbmU9kd9Dx1M5mfeFOg1PEO%2B%2FtkfiR%2Fmwrq1Wf8Oz8cUBct3A7AzoOmG114k%2B67xX%2BlIrn%2FFTJ9OyRYyzAv18TtjE4NNHea5V5wlWezpzA9%2FHg8M7hLfR%2B5gmmpS8DiDLlE0Ao3nIwEDI%2B0gO8pDnfRIReN2LxGRmVEi4mHRQ1DtukPiWCbKFWkY7hFg%2BOdyc5ryMh7jGLD2qM6dCHOa0zE%2FDOnnBS0YdHoSUfYiSlwK%2BGgimuRBbZ4srYyv8mVlWFRvGHGrcrUSYCYkEZCjFSWqkhjr8k34GlMW41A%2BEtTJUKXPGJkK64QdiShWTsag82JzwoHzMR%2BzoPcUIhERYNtvtC5%2BgJcbRQnS0Xw%2FGUfX9l0UuE47eBYCuP1ZLrNz3B%2BR2gICXmOzzHPM9gDOHsYHMe7GHt0aJOQPzoO%2BSGlzWoGEaxC%2BLL6lqEDyiXzGrMNTs0MQGOqUB4u48Sv7RafxQGR3AY2OOo2%2FsoyUxpeqA9rWXbUo1kz65F1TnfTVYch1AipEjYeSgnybVko2OzKtJ3HtLM8Zb6HsWkaOZkgFXBTGUuYnfGUVNv5HKqctLqsfOmhobr1d%2FYMqdtQ1nxh3u%2F7blMlFWr1ffDPqzNkgXzI5ZC9Q8qjXq8NRUJzkWZE2DoR%2F%2BCRRQi6KACNdjn%2Fftpgk76VppCgxtA0Ad&X-Amz-Signature=66189e40717fb9fa95cd792406f00aed47e00d4a74ca8771155c3e59b34c1773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVZ3ZND%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDJwagNwru6T1tzxiXRk9JHe4hhnps%2F9ul2VIYDYLb0HgIgVE07EFW7XuMbfsVKwBgLTjvH8oC5NQdaajleaWUGpcoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb02HkV%2BoZ9MhSWaCrcA6Zr1C%2BNP8yC8exva8vhBSOgeWXW%2B2XknIKtkV2z1NQ0ZrEvwVqIuwYQxz4Z26vvDwXTh7HB7YNT1DZ7QDvm33Qly1t6CbeJydkkJjRq%2BNcgf8QAfQtEUUu7hPy9A80Ew%2BiRp5%2B%2FQnOwT3GlqiStBw2DGL04aJSDp0WUFiC97q5wzowsler90jWbq3UleKJ6Buatnze5VFRagjNasKUi8bChchCrcduZFI308eDETcJQe8dt7HuLu0eNasAPRuvg2jI1LhWDDZwq6aKBXoqg4aljgsEZifZpt1rbQTyrdwnQynsT068rR%2F%2FtVA3%2FlObZHj8z5nRs%2BFpD1n3YZrC1NMw4uw1VgPekYIo8BzNKLdru%2BUYWmXeoG4Vx50rdpL8SldP8KEgam95PuXvwP2E2i64NwZBmMyCZdkHBz%2BgbpTKr%2BzFk3LtFIukjMj5iFyeILYJ%2Fq3WUGveqY8%2F9T%2BeRor%2BYct2LkTAm%2Fz4Gd4C7m2GLBk9UJaYtPZGAEIayx4vgzjLYOeQsXkpYI9YXvk8%2BLdZyaBXwhoAP1Sc2hqeymfdpg0PbdAchod3acgmPgVd8jsJa1%2B%2BlkxnMY0qQq6z66ghBnhA7gEhw6jR57oK1fjht27%2Bi1Nw5Hn7vSktyMO7s0MQGOqUBJisU7kPyZjsGD4EAgcdxY1sWxPTSgIA%2FIECv8bIv7JS2xG%2BkvIUwP%2F0SUp3G%2FKx11UeDSH0ETV6viTHq6GHjg3cbMyQAdKbm9B6cDBFq1uapxcd2gekFVzyu3LIGfXQm5jASYiExDpQgtxfwElBxyA36ggAbFSjwsqW0%2FYsk1JVvVqrPgc4EzWYguMnNIaBL%2FLG%2B5OnvFt%2FgNBMHYf1QcMmpnFwE&X-Amz-Signature=94b0ab6075a39eee1d1db4d609472d923cf73f664862840ba0ae7e5e5a899fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HZWDPD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCJcT8o0BQjMuSJLIAMYAKxPKobUCvRSCLhYO6NMheUHwIgQiKddYnebdZNF06g4LqfySXYaEqwec3ieuA7VbMTewgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqozBn8TAZXZaI35ircA5E4AfOPHnmE4R15YjZNBZ8arRMEUW2vKmkqUUR2mA88tc%2BdkhMsATg1S4eew%2B4IC3l5Y0CGMhgrxwlOipiqZ%2FKuJhUaT9mtRXMXxrWfrN1mNNpTHSW%2BuylFdv4G0nnqxRIaoLmmtpRJSjHdVzKJaHNBYk4VNOLy4%2FvwiN8ONcTQXcSFKgMxEXbdMe7VTQoPiPA%2FfuA%2BLKJnc6eIEce64APktDggAdW5H7EmgSsskj9CzzbgffD59PI8zhFdFA7ZIbQ5Y3HAkcmT5huTuB9643Uv2zm1MkRebUANvnIvCy4sDJXsDMyD4Ckpe3D%2BZ4TvtZGIulvvMVlKdRI%2FozMDy315Lniv4fQXvKR4x2OopOOJfqc2%2Bz4Qta04pOcAPlLavf6UQu87ebJxyA%2BFZL8yHq0H5KR6xBH8S%2Fk1ikRQ7wTUT5O4H%2Fyh%2FS45Ilq%2FLoh2fvdUzT7KDu%2FUcSJvvQs6GgfC01ZXDbzOY52zar1Bf%2FkR04i7G73t5eHs645wfSjGv42zDn%2BZ0CGV0IuqDvGgaKk6n%2B5usjqaCT7AcjIHef%2BPy8MqYLUIdt1CB3xKAEhA1%2F9zld%2Fxa%2BaCPjhHKwQ%2FzOz5Hbo488kvMSBH49mcmcnPTbT2%2FFeBibmXH%2BS8MITt0MQGOqUB%2B21xy09034rjsEX3FZXKxW%2FegS7d2pGvyWqm7i1KYYxDkM9gs9l1faZu%2BZ4GFwONIHJWHYKekq%2BV85ZnWM%2Fta4pjvwMhJDDqov6x%2BQPqs36t385DFIhRAnL7WcDAPZvgwnpTpD9TQw%2FUkWqHqUb%2B3ImjH2O7A9adHFoz9oufF3u2L4IpUqrULgiIdh1isUno%2BMkjWyXn1s4ZRm5%2Feb8Gz4RxxwlN&X-Amz-Signature=dfd9954f550cf8f7998f53846c62f93d847305834b355c40f0d5b22b96e926a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZT2SNNS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAZnyzH7oFN2oTmwHAAapFvJGmro06fhIV25JtfImrNMAiEA5UqigA8DISVJo0ZZAoXBeXFaRoU09nclq43j1bQTDa8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNISFCwgu59WdwyGZSrcA%2FwpGZcrvRYaJnU58Z8%2BRxiwiQDFUgR9i%2FgKpfuQPgccQ6gKw4aVJDPB2nEAEl5pAhduxiOuUIxZ5w172hMFcgQZnrxHYqCp6dak4axHm6%2FaaqdkKWeaFsWat9ui87zQs3MzfJMZrzYAHK1lrTxB77OjHEPSI5Yve71qFNc9AjB%2FeG8X0YSy6Tj6OXJcbmU9kd9Dx1M5mfeFOg1PEO%2B%2FtkfiR%2Fmwrq1Wf8Oz8cUBct3A7AzoOmG114k%2B67xX%2BlIrn%2FFTJ9OyRYyzAv18TtjE4NNHea5V5wlWezpzA9%2FHg8M7hLfR%2B5gmmpS8DiDLlE0Ao3nIwEDI%2B0gO8pDnfRIReN2LxGRmVEi4mHRQ1DtukPiWCbKFWkY7hFg%2BOdyc5ryMh7jGLD2qM6dCHOa0zE%2FDOnnBS0YdHoSUfYiSlwK%2BGgimuRBbZ4srYyv8mVlWFRvGHGrcrUSYCYkEZCjFSWqkhjr8k34GlMW41A%2BEtTJUKXPGJkK64QdiShWTsag82JzwoHzMR%2BzoPcUIhERYNtvtC5%2BgJcbRQnS0Xw%2FGUfX9l0UuE47eBYCuP1ZLrNz3B%2BR2gICXmOzzHPM9gDOHsYHMe7GHt0aJOQPzoO%2BSGlzWoGEaxC%2BLL6lqEDyiXzGrMNTs0MQGOqUB4u48Sv7RafxQGR3AY2OOo2%2FsoyUxpeqA9rWXbUo1kz65F1TnfTVYch1AipEjYeSgnybVko2OzKtJ3HtLM8Zb6HsWkaOZkgFXBTGUuYnfGUVNv5HKqctLqsfOmhobr1d%2FYMqdtQ1nxh3u%2F7blMlFWr1ffDPqzNkgXzI5ZC9Q8qjXq8NRUJzkWZE2DoR%2F%2BCRRQi6KACNdjn%2Fftpgk76VppCgxtA0Ad&X-Amz-Signature=1ce56750c489d6e039d75aaa5d9cc0f82cf3ee5a099864e7d7b98d3cb3736af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
