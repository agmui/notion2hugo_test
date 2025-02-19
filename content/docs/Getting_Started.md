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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUH4VG3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2FdieydGEzxF91q9fWT%2FbtGxwQpOAogdaR9Ja3Hy17AiEA6Ttcp0h9CwBARHRR0WblqB9Y0hBJlxNHsgMhQxDFBlwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7YpYUTgxriIXJRPCrcA8TCiOdeutto8siJb4T8NQ%2Fe6ps1T0TSPXNt7yGEoqPuq8ia%2Byqm6rFSnafjD1xSa2NlIVhh%2F2ebye44gvwPoSJ7Cnw%2BCvb1S7M%2BkYU2frAmkhoAcpJ%2B4mUMolSAx1pwHyI0MZYXUzYzLQlbVDnrBXnJflG31bq0L%2FDyZ2URDsmTYm2E9NLFDbucLmEYPYvjoZJiy%2BIk4PV5f8w5DNkRl4vA49%2BFMmFVN65QM4LeeCgFHT1eLmysgZBGM5Ww6vHW%2FuQf%2BSMErqRNVFAZv%2FG%2FjGl2%2BP2kzP4CDrl8yQtlu3d71fmdF3BBhPgGwRwi9tv1cD55WvmyYgVQOQT4hgnIWUsSaE7uEAMhgWjByY3TpYX9N5EyegDeN77LUerGd3ixQc%2FNdZZPN61qwvaaB7Sx9ggmJ2DkwJhsgO99jur%2F%2FhEoMiVIk7IKyB8f2xjqsRVDsJuH82lJayKOHSQAR65dWxWOXH4ZXbQGPii2%2Fv7w%2BupwuNU4nkg9ojNYXVtjvPsl1iM21iTeSYakaViaqqd%2FFiVkgGg%2FMrmNTp%2BTPiR6TXNYCweoSsHK%2F151rkD%2FXQSHjftI%2F0%2B5OGiC320998bQa9rIgdgbYaxaDB3fmPb5%2FER3wCZVNycIb5lPiK%2BiMMTv2L0GOqUB9LqoTty9mzpCCa8KrKg1IIdPQx9J5%2BnA6gSjJysP9QaPn6O1qf2bBjNbQDBOz8iWf9oRB9MCL0mDRw67aHAM7aqq9tV%2FI4fRKzZu1CzZhKTce8b%2FuJb%2BPSGHe2Uu%2FSjIepThXOR4BrmUucLm2kqzT58StCjNun8BWSqDw2rYHqs5ypbE7TC7j2SeW5vjhhN%2BTQMm2%2FYSHZU0R3tooDX5nk1sH%2Bai&X-Amz-Signature=d0345de9f6b912597d25e504912bba3bc0d678e6cb73e8d6fc4bd11dc4ac6cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUH4VG3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2FdieydGEzxF91q9fWT%2FbtGxwQpOAogdaR9Ja3Hy17AiEA6Ttcp0h9CwBARHRR0WblqB9Y0hBJlxNHsgMhQxDFBlwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7YpYUTgxriIXJRPCrcA8TCiOdeutto8siJb4T8NQ%2Fe6ps1T0TSPXNt7yGEoqPuq8ia%2Byqm6rFSnafjD1xSa2NlIVhh%2F2ebye44gvwPoSJ7Cnw%2BCvb1S7M%2BkYU2frAmkhoAcpJ%2B4mUMolSAx1pwHyI0MZYXUzYzLQlbVDnrBXnJflG31bq0L%2FDyZ2URDsmTYm2E9NLFDbucLmEYPYvjoZJiy%2BIk4PV5f8w5DNkRl4vA49%2BFMmFVN65QM4LeeCgFHT1eLmysgZBGM5Ww6vHW%2FuQf%2BSMErqRNVFAZv%2FG%2FjGl2%2BP2kzP4CDrl8yQtlu3d71fmdF3BBhPgGwRwi9tv1cD55WvmyYgVQOQT4hgnIWUsSaE7uEAMhgWjByY3TpYX9N5EyegDeN77LUerGd3ixQc%2FNdZZPN61qwvaaB7Sx9ggmJ2DkwJhsgO99jur%2F%2FhEoMiVIk7IKyB8f2xjqsRVDsJuH82lJayKOHSQAR65dWxWOXH4ZXbQGPii2%2Fv7w%2BupwuNU4nkg9ojNYXVtjvPsl1iM21iTeSYakaViaqqd%2FFiVkgGg%2FMrmNTp%2BTPiR6TXNYCweoSsHK%2F151rkD%2FXQSHjftI%2F0%2B5OGiC320998bQa9rIgdgbYaxaDB3fmPb5%2FER3wCZVNycIb5lPiK%2BiMMTv2L0GOqUB9LqoTty9mzpCCa8KrKg1IIdPQx9J5%2BnA6gSjJysP9QaPn6O1qf2bBjNbQDBOz8iWf9oRB9MCL0mDRw67aHAM7aqq9tV%2FI4fRKzZu1CzZhKTce8b%2FuJb%2BPSGHe2Uu%2FSjIepThXOR4BrmUucLm2kqzT58StCjNun8BWSqDw2rYHqs5ypbE7TC7j2SeW5vjhhN%2BTQMm2%2FYSHZU0R3tooDX5nk1sH%2Bai&X-Amz-Signature=ac86fa15defd119ee6d358f6d7d2b7efcc430bf125e9e3f847491a2f6b1e8473&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWIWMGE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWlW8n7COcP7UsGnY09d%2BX5YZphxQTSPLd%2BEa8yqEuGAIgAn9FaZdJKP9l%2BSfdqKbNcBnq1EE1b8YpFUPWyfEiZH0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlK3TEFCNt6fX3J%2FCrcA%2Fhgm%2F80qQYOvzb7jjoAdXDh4zClxV9FpkP7u8upIln9kBZyD%2Bvuo%2FDmqRNgeJiRRbx0VIkcXUOIArSrvuEmfXjHu5UgQR1wnoLaaRmcNcpvOfIDycNwLaX3gF2cOjU6V8KrpKdEKQ2YxYhG9q3mUqAekPGWzn9IF%2FheQmuVAhr%2BhX%2FRokgjamhbBLlwwmDuaoMWFw1BbtX7C3exGBuAJw4QOtKYphj7dfTKxbCTJwgDiAgSHVEu350Yhi843PgyqwX4dBrB68LdRTkEBtS%2FqFHoWzTenT9jBuRUzi7ZqyOR7SdTREOLqE93p4zpoojIXvECJTe7J5znBIck6moAsaCk769XXEMR79Ru89FafssePIA7lgE5ai%2FLPY4lI5fNq57SI8qk7M9gtP13ysjDv7d71Lqw8h45FdN9zG48bX7EeZzHoxJ2lhYd%2F6O0vJHhXtd5%2Fwds877TCdPEkEJcUwTA%2FjcdGtUhxx6aK2mrk5yNjNV9g8BAkcXOrGuXfKKHalsOENDbPSEMf03nIagrSj9ARPo5FjZgoTvXUtCKYwG6dx9B83b6snK4MDcZmlLgmz4MwAu%2Bf%2FElVFpcOXb1WWcavQ%2Fjiiyc34%2Fj6FIDE3CuumX6mgJVHNGjFTlLMM7u2L0GOqUBayMOGWCdgR7sN6zLI6o853kGdvkmuakmqX%2BubErDGLW6TaFwbSnZcyGeG86ojpVlr%2BApWgqg4Nze%2BnfxYwngljFdDyvYIi%2BgvXatp8Gwa1iFjl1t6uT7HVaPrdrRvQrFQKBZrJ%2Ftzbz43oImdf78cJrgzsHvCsQpx4wEB%2B1smqEz2I6XvHOe46MIyffK1Srj96QtyZLP%2FRgWzk7nL9sSSYbfXnoB&X-Amz-Signature=e14977e902e50655a5e43c14fc63571e1623215b98997d5bf8a50c38d06c587c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2Z2XKRR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALLH7qJgH5e6Nv2dY0V%2BDeEP%2FIdKu5KTy54%2FdQTpnlwAiBSnuuL79CW2Kv%2B%2FzRtUsJUk9IEhrbp%2BQZ8HA9sUIRcLSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMns1W4RbBPomZ0l8bKtwDVu72ew6JyMH1WxdfiSvRe0BFx6ZKc5qHNx7mcenhf950MLhoLcS0Tq%2Fu447rNGjW8MQhU2s1WdgS6%2BX4x590QXfSIQtz5GAYD2wLaiUjpNIxV7AEG8y7K%2BtS6El7s5HS4%2BS3ES4mCSiQ2DGGLSHfhdTAxEbrqzFGJHl8RkrhtFSnWwGrmRq8c72gV9028t8d7HG40p8fR3px%2BcCkfY97yemV0jVSWqOtpInNBTzVTDiCW4HepoDa2eN%2FPGMrNsTSzRvbnlao0AtGH53zJRmd0Y8KeiCzT6VkbDXqWsruzrnsUK9nn5ciXKe9ZU%2BYhc4sxkiYDbSGXCz%2B7ExATC6D6ZhKK9lOrl7W4Y3VmYvlBpl6tFPOQcnc1OPVdhjd%2FmCmYTui9pjJfv1G2hYkpYTitFzPXyvT4C%2FqYbsAzRokWGhfSJ8GYNU0sher12XyavCrOUWLuSVq0Bwi9uKefCd6itBnE%2FUl62FOseVEVg7af92kKqALzV5IUrF%2FaFhqk4YglfI0D5Ii98mO7T%2FuSfyCj%2Fi5daHzBB3y19ypPHEBuCS6APy46HFUvgNSrCqQthtdUO1JULaUiCRH4L3AV0TbK5BJIW8Hwo2Vd3wWX3YvIBdz2kEs1QkogvRc%2FR4w8%2B%2FYvQY6pgHAykVVEn%2Bf72URM0z3%2FZoe8b8IzoVtx2yNG%2F0EM%2FzbFmiyl1vcwPz52viCS0ASE%2BmHZuH98LZghm7Zt1IEV2Q1R5VO5woFjO6WL0O6IYQB%2FiPj9g1webs93X3W23ztgi3ZEvhpNt7yT7xeajWCIxWOZXNOwoBo7qGGSwjEwN9xl5oUmCJ8Q5WKMBxDJJFowmQ7ssrD5ilq%2BfeELODB%2BKa%2BTj7l0QKF&X-Amz-Signature=87910d63fb38381ee8348e6605da16b3ed8b2be9ac99008a5c586372735b4f08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUH4VG3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9%2FdieydGEzxF91q9fWT%2FbtGxwQpOAogdaR9Ja3Hy17AiEA6Ttcp0h9CwBARHRR0WblqB9Y0hBJlxNHsgMhQxDFBlwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7YpYUTgxriIXJRPCrcA8TCiOdeutto8siJb4T8NQ%2Fe6ps1T0TSPXNt7yGEoqPuq8ia%2Byqm6rFSnafjD1xSa2NlIVhh%2F2ebye44gvwPoSJ7Cnw%2BCvb1S7M%2BkYU2frAmkhoAcpJ%2B4mUMolSAx1pwHyI0MZYXUzYzLQlbVDnrBXnJflG31bq0L%2FDyZ2URDsmTYm2E9NLFDbucLmEYPYvjoZJiy%2BIk4PV5f8w5DNkRl4vA49%2BFMmFVN65QM4LeeCgFHT1eLmysgZBGM5Ww6vHW%2FuQf%2BSMErqRNVFAZv%2FG%2FjGl2%2BP2kzP4CDrl8yQtlu3d71fmdF3BBhPgGwRwi9tv1cD55WvmyYgVQOQT4hgnIWUsSaE7uEAMhgWjByY3TpYX9N5EyegDeN77LUerGd3ixQc%2FNdZZPN61qwvaaB7Sx9ggmJ2DkwJhsgO99jur%2F%2FhEoMiVIk7IKyB8f2xjqsRVDsJuH82lJayKOHSQAR65dWxWOXH4ZXbQGPii2%2Fv7w%2BupwuNU4nkg9ojNYXVtjvPsl1iM21iTeSYakaViaqqd%2FFiVkgGg%2FMrmNTp%2BTPiR6TXNYCweoSsHK%2F151rkD%2FXQSHjftI%2F0%2B5OGiC320998bQa9rIgdgbYaxaDB3fmPb5%2FER3wCZVNycIb5lPiK%2BiMMTv2L0GOqUB9LqoTty9mzpCCa8KrKg1IIdPQx9J5%2BnA6gSjJysP9QaPn6O1qf2bBjNbQDBOz8iWf9oRB9MCL0mDRw67aHAM7aqq9tV%2FI4fRKzZu1CzZhKTce8b%2FuJb%2BPSGHe2Uu%2FSjIepThXOR4BrmUucLm2kqzT58StCjNun8BWSqDw2rYHqs5ypbE7TC7j2SeW5vjhhN%2BTQMm2%2FYSHZU0R3tooDX5nk1sH%2Bai&X-Amz-Signature=a02400d9d714faedad7cd27133ab79650dc2357091f5350c3365a92eace55b58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
