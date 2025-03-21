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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJ5QP6B%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIF%2F4pN9MnIwj%2FaHpHdMOZPuUOjrm2JDFg7iTVC1piIYTAiADKCU%2FUyjZsKOWzoPSbSBn%2B9AcFNiL5fp4Q9p1LWE%2FIyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLkMKPXX%2BrxP%2BQXA%2FKtwDgUaq4HRgoKfFg6neUxwvIxSiSaGH64EOYC%2BBftOtKBFjuSrfTVRcitKFvV54n79277%2BRAfZ9WMZ3Pmps%2BWojqqay8hATwWQWtuHTjf0JFVAGrC7b%2FAFY1SCrDIstmlEq%2FJTq8qtih4DPXrfD9mMoRmWeMZ1sq4rHB0HJ0RvvmfgkLgSSi4RScAiiUf6mOuVWiP5HQKL935FRTVyTQHx%2Fz8ISfpnP2Rq8L1kbGBQLWRVs%2FxmoqB4CHS4%2B6QdyNQaNgZpz1okainZ5HPefLGD1a07UQoHW84mlAyJv0jGtEDCOJHQ9ZAKhR%2Bl7hl%2BFZYh8mBfjZ%2BZkLsScd1foX3NGRauEtKIt8Hg7jpC77r7tUUnN4wBtLb0O2QPNPAZsCc47Z%2BpUiYsRBN1XxDUqaMnAH2WDR%2F%2BegQlGUmhrjjIF3AhXbdlUhEnyVY8PY184BTmdnuSrOfX7ULtvHEC812AKnYF3Ir%2FkBYx8Qmm0rIzN5WET2yzU2hXOqO4gXrgiWe8nHH%2FkZMhZv%2Fz%2BpPLaut0JdAw0EcreAyrwQT%2BZ%2F1oWSciBtllUELVYfh0a5RY%2Fgtxbm5ii6rD9lBMCgJUb7e%2F200%2BOTAgMQcm2E9UmyJrOsT2sx2kGvk3WiYkzr9kwrpv2vgY6pgF%2FQ5O38fArpnXSLJeoZF3SGxo9cQsrl5q05EHlV3jBEj6B2f9o%2BJu0tu61G2X7nKIodL9NhQ%2FjymZKV3oTvNNyZtGIIjETuV4sIjeUikEEmG%2BqM8kJewWy%2BaemAWOASyUCclMzmOe%2FTWow%2F2y30QMjq7rroPh8p%2BYyYHLA0NjlsYkE8x66AnZEbdcca%2FWR7TbMtDppXhZzRWph537%2Fs8X84tVCQjH5&X-Amz-Signature=17694e91a12b45a24d12d2f8a2c323bbf3cb20a28ad7993954e473c2b266aae2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJ5QP6B%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIF%2F4pN9MnIwj%2FaHpHdMOZPuUOjrm2JDFg7iTVC1piIYTAiADKCU%2FUyjZsKOWzoPSbSBn%2B9AcFNiL5fp4Q9p1LWE%2FIyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLkMKPXX%2BrxP%2BQXA%2FKtwDgUaq4HRgoKfFg6neUxwvIxSiSaGH64EOYC%2BBftOtKBFjuSrfTVRcitKFvV54n79277%2BRAfZ9WMZ3Pmps%2BWojqqay8hATwWQWtuHTjf0JFVAGrC7b%2FAFY1SCrDIstmlEq%2FJTq8qtih4DPXrfD9mMoRmWeMZ1sq4rHB0HJ0RvvmfgkLgSSi4RScAiiUf6mOuVWiP5HQKL935FRTVyTQHx%2Fz8ISfpnP2Rq8L1kbGBQLWRVs%2FxmoqB4CHS4%2B6QdyNQaNgZpz1okainZ5HPefLGD1a07UQoHW84mlAyJv0jGtEDCOJHQ9ZAKhR%2Bl7hl%2BFZYh8mBfjZ%2BZkLsScd1foX3NGRauEtKIt8Hg7jpC77r7tUUnN4wBtLb0O2QPNPAZsCc47Z%2BpUiYsRBN1XxDUqaMnAH2WDR%2F%2BegQlGUmhrjjIF3AhXbdlUhEnyVY8PY184BTmdnuSrOfX7ULtvHEC812AKnYF3Ir%2FkBYx8Qmm0rIzN5WET2yzU2hXOqO4gXrgiWe8nHH%2FkZMhZv%2Fz%2BpPLaut0JdAw0EcreAyrwQT%2BZ%2F1oWSciBtllUELVYfh0a5RY%2Fgtxbm5ii6rD9lBMCgJUb7e%2F200%2BOTAgMQcm2E9UmyJrOsT2sx2kGvk3WiYkzr9kwrpv2vgY6pgF%2FQ5O38fArpnXSLJeoZF3SGxo9cQsrl5q05EHlV3jBEj6B2f9o%2BJu0tu61G2X7nKIodL9NhQ%2FjymZKV3oTvNNyZtGIIjETuV4sIjeUikEEmG%2BqM8kJewWy%2BaemAWOASyUCclMzmOe%2FTWow%2F2y30QMjq7rroPh8p%2BYyYHLA0NjlsYkE8x66AnZEbdcca%2FWR7TbMtDppXhZzRWph537%2Fs8X84tVCQjH5&X-Amz-Signature=35332401378f02fc2830e3d70893ec2c15dd80b06dec0f6919584afd458153ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMVZB2M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIE4NZ%2FpqUO6I1Gk6M%2FDwh38a7r27IvJLzUFuwalZPjZXAiEAiGz%2FQi1wuL4eVs7E8e3gHM3C5PBAmI5dgrxp71u2Di8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKsQa5uhk%2FfaCmF1SrcA2sXfKyxosgtPna834%2B36b0mb7YE8Qanzw6pMBeHi8PuNhkGywDS6dRNj1zm4pIyNucyW72I4bjGjKvVuxeBEyF2f0RLIlYTwtc8V%2BQGqQVYUCoyRNTXYhLmZbOP7g%2FlstiAKBwV9SzdD2grz408uTK7AnnInCUY1ERoXvSozkjvxhlHK5abeQ5k695y5vmJEGALK97awIzewmPfq8qPmBG9W%2FNT9YGd77dIcp83RxfRUn40ZJbq1l1tdy6%2BOZkXrE5P1Aie%2F%2F%2FAhjOV1uCjBF58CbcLqvxBRHG1U3RE0oIVqQgq9qDhPh%2FdnRY8ec%2FIdgGQMmzIpYGQgtTL29ASJ8m1n4wemyxjf%2BqJQfqbTgDclcycDKOxL518IFrI%2BTjzlRVXPNyDNwArs6IOieW7QgAbcENgVdxiTNgbZC5B0PKB7oQBO4UeBUSEcETS%2BPnEIV3O3xQB9jbFYoZcdhciV7k%2BHPo4HXB7rYNWPejayYLhxC8yjlS5Gl2MfPDBeEvcB1BD5wTdzZuNMTGJSldcpvTr1rV6H78JmEFtZQrIDgZipkVbF2Lj8SAsYTKty3N1d1OELrlKqdzRxLNmuXq2HwYYNACN8Zb%2BVYskqyZ%2BTIqtVrTekCWvNKodxnG0MI%2Bb9r4GOqUBLibswoVKuehPSH5SO0z5sOlwjMNA2auIfDv8Y%2FhVLHLVQUSUqyOSySys0VqvUqwH9AFLUXixwdHORxfQEk3qI9R6VwQmRSCgD%2FO7uiHI1HBg0FzuoPoSojmOMtv3P1qONAz1aX6r2qz9lUOug5%2FQh7jF8ouw4gSXcbD3wVJl0sjQkGonZ%2FgcErAeZTdnocQ90L3CP5zp5%2BFnnfkW3Zn1trWFPQmC&X-Amz-Signature=044073992749b192f2f1805b5673189858168883cc0ed5a81e4f61b3ef4567bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y655YHH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD0NETe1elwRNtb4AAItf8NEZba4%2Bscaga44s2dOawWLgIhAMobSN02D9JxXCjkxvr5tp4f7NNKwx7Q8FcUqmZEHDnuKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyltmdPZH465ZsgwgMq3ANfNX%2F9D%2Bx3XlBMkqwBd4FM2A7kjy9rXJ9jjwiy0DCux7JfpLNgkQjzOMrRCpZcJfWFTzG7f2ErKBCk%2BEkRniboC9JSg3voQ%2FPLVFhCUZnY4VOeLMpdL1plpf0JHs%2BXNfFE1Nj5oB%2BBO0Uo92VXwbA7FqJPvgRb40lm4BistDj6l%2BUf1s9lLpQgs70N%2Fy28DYJGJnostXzp5xv%2B6R%2FdnUcOhUusPouheAwdzP3pv2A1PgDRCXTZqzJ0Qc79rdbmL%2BFXTapHXpY9wm%2Ftfo6hQTcTqijL6LOOfb2mYt6jzud35QEf3p5tCi1c1Zu7Tr2X%2F2hR3JSJzr6K%2BptDoA0QS4ZW0y3ubVbeCvpszNNToiw3hQ5SSutWaCJ9BY5vU5mCaVbbKgLm7Ce4n0Nf4mFs9N3VbNYrMUbuDB5zl9f6PQeVpD6vEA7Nk6Fv3jhDh%2BdjXXQYAdL6qUr4U94I2qAzb347tfqTU0RJryz2OzI5FkuOFfvIadmNAiB8y9o1lKh8VkuinLV2WNOCrLQx9A5o%2Fg7T2nxfU4mzJB6%2FHUahpIhpKY7iIxvG76%2B%2FIZqEGSu7nMywlzqs%2BRY3eIqAC81clIafoENRGQAhN0DstEB3OZmZ71GDJVPeUi1iXLHrpTCRm%2Fa%2BBjqkAbwhuC0mQwaS3SplKGX3KlheKJlvXJ4Vthhaa%2Fbap30%2BhOjIvnkjTrLm7nEWGgLRxx3EZyHrcFmOZ5zhhE80PB17wwqd9mGcju7%2FyR9ASRmdilWxollr5RO65eNmtOJnGHxlu92fGBkxztbTKUvAH4JTEZGBveTkbw%2BpAf1txC8iRXPj3FbN%2Btko5IT1bWhXmSGvcZQz0qs1JhzDpsvPGDYvUM3v&X-Amz-Signature=5680cb0442ac775131d658ecba7cde2c329f8f1a71fa5b99581afc93676fb09f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJ5QP6B%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIF%2F4pN9MnIwj%2FaHpHdMOZPuUOjrm2JDFg7iTVC1piIYTAiADKCU%2FUyjZsKOWzoPSbSBn%2B9AcFNiL5fp4Q9p1LWE%2FIyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLkMKPXX%2BrxP%2BQXA%2FKtwDgUaq4HRgoKfFg6neUxwvIxSiSaGH64EOYC%2BBftOtKBFjuSrfTVRcitKFvV54n79277%2BRAfZ9WMZ3Pmps%2BWojqqay8hATwWQWtuHTjf0JFVAGrC7b%2FAFY1SCrDIstmlEq%2FJTq8qtih4DPXrfD9mMoRmWeMZ1sq4rHB0HJ0RvvmfgkLgSSi4RScAiiUf6mOuVWiP5HQKL935FRTVyTQHx%2Fz8ISfpnP2Rq8L1kbGBQLWRVs%2FxmoqB4CHS4%2B6QdyNQaNgZpz1okainZ5HPefLGD1a07UQoHW84mlAyJv0jGtEDCOJHQ9ZAKhR%2Bl7hl%2BFZYh8mBfjZ%2BZkLsScd1foX3NGRauEtKIt8Hg7jpC77r7tUUnN4wBtLb0O2QPNPAZsCc47Z%2BpUiYsRBN1XxDUqaMnAH2WDR%2F%2BegQlGUmhrjjIF3AhXbdlUhEnyVY8PY184BTmdnuSrOfX7ULtvHEC812AKnYF3Ir%2FkBYx8Qmm0rIzN5WET2yzU2hXOqO4gXrgiWe8nHH%2FkZMhZv%2Fz%2BpPLaut0JdAw0EcreAyrwQT%2BZ%2F1oWSciBtllUELVYfh0a5RY%2Fgtxbm5ii6rD9lBMCgJUb7e%2F200%2BOTAgMQcm2E9UmyJrOsT2sx2kGvk3WiYkzr9kwrpv2vgY6pgF%2FQ5O38fArpnXSLJeoZF3SGxo9cQsrl5q05EHlV3jBEj6B2f9o%2BJu0tu61G2X7nKIodL9NhQ%2FjymZKV3oTvNNyZtGIIjETuV4sIjeUikEEmG%2BqM8kJewWy%2BaemAWOASyUCclMzmOe%2FTWow%2F2y30QMjq7rroPh8p%2BYyYHLA0NjlsYkE8x66AnZEbdcca%2FWR7TbMtDppXhZzRWph537%2Fs8X84tVCQjH5&X-Amz-Signature=60d647dd745bbe640d1a2a7adf0208da08175387e7a58698040e2a972cec921d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
