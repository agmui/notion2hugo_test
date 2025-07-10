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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXITWN6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4qtLXaRFm8XjS1cFUzwPZZor1%2FDoGzfhL3944byE%2FQIgEtWfXPDcERhin%2B97KsRBoDPwPntIBXhpYdDKnhBXJC4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BACksL4FIPz9eC4yrcA9GhKb5c74p1Ap31ZwsVRzmQnH8jra81nPiSXJEPucKOgzzqsKobi6bIAmdmKb0YqEUaFDrSNAGxwtOjz%2FuKG8xR5YUTkWmojV0Y2lMFNNqE%2FekCd0v5iB8Ib2l6kpUmBCn7qmr4K0oEjHpVA5JcQPhHFE%2FKkiA%2FsSQuBtUOz6tlwIqdOGDuJNMGDYJXTyTFo8PZzHKHdQarOmuner6GvYwmAiMc3K%2FDE8M2dAL0KkDxVk2V7Y9MsiL7qZq%2B6e1dS1itpfV4ylIqKxbyeD%2Fv12ZtwMFQdGufHzoEMsl5yk7jGuKccEsUr8p5SwSOzf%2BtzDWxXPzZAkii5QNYv0AEzV7A4OJvgWarLfUr5xgiUa70aA4sHUpX1Nh%2BVHwztv8%2FlwXpp%2Bs7%2B%2FPKU1ChYSRZcUe16wbfLstdDo8fOB6MAiQjH%2F33KjjF%2F%2FYN7vd33nsnqEZt3%2BGY20GoWLOdTaUgtlYged4vG92%2Bpf4uWCBbuELp3nDKLX2xVhgRHAhpWerz3vxHcppXM3gz5KtpqadndvbPfawQ25jnXUARQuSPVu%2BrmHqFAAOlBEV8aluUI2t1MmYg41HtWGqi7iu6JyniUGwiOl8m3kIjHzC%2B434KWdCk0DQWAJMcswnr4Sa0MLaov8MGOqUBsgs1v6kvTkbeSnHxHXWt7nC9qWHCyyIY78Szfh4kXw9f8dThkiyhwFGnhvnYu74uVBTF%2FFJx3aEYmYsLz8S3WZKCbIWHa7%2BhK5juLzOrsy72fAFiDnEDZOLXF6Og1%2BDJLfSEgGjFqYP2siXT12Ns8ip%2BGSbMJksUOgdeTi%2BMo2d0sl07gi6Gy5c6PQjNM1P4PV4xL3NVuj0cFKmI9M3%2F%2B%2BG9uQil&X-Amz-Signature=9acc30a08752eaee0bc548feadbc60cb3925759369394251efbdfb7b4c486f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXITWN6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4qtLXaRFm8XjS1cFUzwPZZor1%2FDoGzfhL3944byE%2FQIgEtWfXPDcERhin%2B97KsRBoDPwPntIBXhpYdDKnhBXJC4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BACksL4FIPz9eC4yrcA9GhKb5c74p1Ap31ZwsVRzmQnH8jra81nPiSXJEPucKOgzzqsKobi6bIAmdmKb0YqEUaFDrSNAGxwtOjz%2FuKG8xR5YUTkWmojV0Y2lMFNNqE%2FekCd0v5iB8Ib2l6kpUmBCn7qmr4K0oEjHpVA5JcQPhHFE%2FKkiA%2FsSQuBtUOz6tlwIqdOGDuJNMGDYJXTyTFo8PZzHKHdQarOmuner6GvYwmAiMc3K%2FDE8M2dAL0KkDxVk2V7Y9MsiL7qZq%2B6e1dS1itpfV4ylIqKxbyeD%2Fv12ZtwMFQdGufHzoEMsl5yk7jGuKccEsUr8p5SwSOzf%2BtzDWxXPzZAkii5QNYv0AEzV7A4OJvgWarLfUr5xgiUa70aA4sHUpX1Nh%2BVHwztv8%2FlwXpp%2Bs7%2B%2FPKU1ChYSRZcUe16wbfLstdDo8fOB6MAiQjH%2F33KjjF%2F%2FYN7vd33nsnqEZt3%2BGY20GoWLOdTaUgtlYged4vG92%2Bpf4uWCBbuELp3nDKLX2xVhgRHAhpWerz3vxHcppXM3gz5KtpqadndvbPfawQ25jnXUARQuSPVu%2BrmHqFAAOlBEV8aluUI2t1MmYg41HtWGqi7iu6JyniUGwiOl8m3kIjHzC%2B434KWdCk0DQWAJMcswnr4Sa0MLaov8MGOqUBsgs1v6kvTkbeSnHxHXWt7nC9qWHCyyIY78Szfh4kXw9f8dThkiyhwFGnhvnYu74uVBTF%2FFJx3aEYmYsLz8S3WZKCbIWHa7%2BhK5juLzOrsy72fAFiDnEDZOLXF6Og1%2BDJLfSEgGjFqYP2siXT12Ns8ip%2BGSbMJksUOgdeTi%2BMo2d0sl07gi6Gy5c6PQjNM1P4PV4xL3NVuj0cFKmI9M3%2F%2B%2BG9uQil&X-Amz-Signature=30d45d53c27b5b35dc41eedfeeed1583ba9ab8d4aebfe97040b764da1f9add3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXITWN6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4qtLXaRFm8XjS1cFUzwPZZor1%2FDoGzfhL3944byE%2FQIgEtWfXPDcERhin%2B97KsRBoDPwPntIBXhpYdDKnhBXJC4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BACksL4FIPz9eC4yrcA9GhKb5c74p1Ap31ZwsVRzmQnH8jra81nPiSXJEPucKOgzzqsKobi6bIAmdmKb0YqEUaFDrSNAGxwtOjz%2FuKG8xR5YUTkWmojV0Y2lMFNNqE%2FekCd0v5iB8Ib2l6kpUmBCn7qmr4K0oEjHpVA5JcQPhHFE%2FKkiA%2FsSQuBtUOz6tlwIqdOGDuJNMGDYJXTyTFo8PZzHKHdQarOmuner6GvYwmAiMc3K%2FDE8M2dAL0KkDxVk2V7Y9MsiL7qZq%2B6e1dS1itpfV4ylIqKxbyeD%2Fv12ZtwMFQdGufHzoEMsl5yk7jGuKccEsUr8p5SwSOzf%2BtzDWxXPzZAkii5QNYv0AEzV7A4OJvgWarLfUr5xgiUa70aA4sHUpX1Nh%2BVHwztv8%2FlwXpp%2Bs7%2B%2FPKU1ChYSRZcUe16wbfLstdDo8fOB6MAiQjH%2F33KjjF%2F%2FYN7vd33nsnqEZt3%2BGY20GoWLOdTaUgtlYged4vG92%2Bpf4uWCBbuELp3nDKLX2xVhgRHAhpWerz3vxHcppXM3gz5KtpqadndvbPfawQ25jnXUARQuSPVu%2BrmHqFAAOlBEV8aluUI2t1MmYg41HtWGqi7iu6JyniUGwiOl8m3kIjHzC%2B434KWdCk0DQWAJMcswnr4Sa0MLaov8MGOqUBsgs1v6kvTkbeSnHxHXWt7nC9qWHCyyIY78Szfh4kXw9f8dThkiyhwFGnhvnYu74uVBTF%2FFJx3aEYmYsLz8S3WZKCbIWHa7%2BhK5juLzOrsy72fAFiDnEDZOLXF6Og1%2BDJLfSEgGjFqYP2siXT12Ns8ip%2BGSbMJksUOgdeTi%2BMo2d0sl07gi6Gy5c6PQjNM1P4PV4xL3NVuj0cFKmI9M3%2F%2B%2BG9uQil&X-Amz-Signature=a4530538a91ed5bd04e05503f66d1c94cc881de4453d56645186e994037fe4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY343T67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzwqxYKhlbXGV%2ByikLIK7uam2EO1%2BTKMbAWf%2BVciOm%2BAiEAgKik1Yg4L75L4Fuxet7mXF5P1iIeeOfDWAo%2B2dY8pWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPqIjT4Q0u3L8EagyrcA5NjWjjIKb8O9lMvCI9iPrwDrLE9A5qHYOMq0w968swAFlYxcCsj6cw8yb3Q1MYZzgK62AZY7z5ION5XkvDwUChg74JaEkIF5KOaZrXJcDAt2RUniukZRfWG%2BFydAN%2BVOh%2BnS%2BWlT53ImsJI%2FUcNu6suNqWCgS2Cc8l0YCCpcuK%2Fysi1cuFMjmwZOApEthrFsagDg0%2FFBNdEexCj0LCtN%2B%2BEOP4Q8aKT8YqxfFF1g0tQ0PZiTw4pCSzIBnEtARLhvxZ4lgxrzwPXOWVj9OWm%2BWg2471sHzn4SqWH%2BAH9O%2F5K014ClcNcU4mP0Iqum%2F1NcfqFcjtsmEQoNnEP42r5bfcyYa0c7UFCNClhB4%2FJwZxby%2F8OKbZaYnc7o6muKevxv%2FQYGI1qXmoNcwhawmT6%2Bo%2BOWVPU0WZwxOyREvaiE%2F0m6uHor1sEIrzkde7n3SREfwobvHQCsFgnTeHjfF%2BFgicw3Jk%2Ffe2QRigfJpF4IzUx0C89eSfSDoq4Ctu2426FTsW3L0mK1ZeHs%2B%2FHC78zlBqNgmKki02QCW08k4in6ZfwvJAp5q6rrx31t5ksKGxyDIEbC%2B5X6gC4%2B3Co64aQcJ%2FJT6ntuzSwqLtMDIyo46v7PmSr0xYD4zhGWm%2FeMJ6ov8MGOqUBNPIP%2Fa75IouPmNpw%2B3JUcqNZrkma6gAekwTplCMoyKDlnBEj%2B5hcgyIG0UGqfTKJwMxSf6xomKOKRw5wCtcAs6Mb0ucaK%2FDMFJb1TU9nnkOYSTwGSWDi%2FuvaEvp5mDmzeT8qhowgrCBJvJ4Y08M2cpm%2BQZGFgONPcgLbqFK5dU9GlnPBnI0jQViY80ZBesr%2Fz3%2B%2FelDP0jyjPr3%2BBSpJpkuAD2aD&X-Amz-Signature=aa7dc495a9c45c63d00f94368092856123fd1b5468e8af0d11897dc9f7f93086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKGOBLE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv1lN3l%2BFAErAnOFXqNHZzmNXOVwfjOei2Q69Qr%2BEogAiEAgTpFHp3vaRq0iWAlUb5WmJ8I96pIr5na1hdR9vMYyX0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ33OYxhgqpOdBeyrcA6Ha0rskkNeOXbu%2FjjhlOgtE2DWNHRLUR0ADBoPOEvQIF%2B4vL7z5Y2YkArBFvNF%2BH1DIt2BUaCuW5kaSMip%2FWHS9DNRjFgE7INfz00wayWmyeJ%2FZj5eEWcXaA%2FRG38BDYtaVnkEByZdqXX9vZZbXwYlpJgU3j22cCVSNIHmJ3QUn5fMDZk3Zlez734INvaqsbyiG56M1tlicveJ9vg5EI93ntMQDXLD892IweTFvlrTAESqWb9f010eyi%2FpfMcSaqCGdQLW%2FjskiQlsg6s3CQumy4cpffsIBqkoyCCxO1FVYtl8BzUzjDDXTmtLhExtPZt8woMNvIX3VESwbO%2FXB38ijS%2FCLe0iy9m6HO%2Fucah8FZkqlBsUJVd4AnSsOqwhXj1XPy%2Fc4L0APlO%2FI9MrgGpmWQay1zN0adp%2F5rOvQNU41SQ9ZdTT0B39gS5NfUEPhmrqNPrfN4s9S1FeABrf7or2gtzBtlfFkizvAWoetHy5zqgj%2FanVyv43GFP8jdr0dQl2e4qwYWdQQYF3NGu7qNQ0HD4cReb%2Bspig7ue0wG5z8lSAgrOZFt%2FTAw1R61UD3lSPbELZ2N1QsKTaV3n7Ok7isW0WFAWDVx28nuqBf9VC05m8hZSXo3Lp6F%2BvOMOynv8MGOqUB00e8AjGsJSNRNO4o42TdkJy%2Bi%2BspWDP5JrwrT0Osl2IFMRp04pv0ZJlDtsQRT4KG%2FtO9EfSNDNKrc9yR1xGEaNrCl2C3j6%2Fi04mkMGq1x6qtxTBOfDTlCVrHPBqowFGtpOtvPqvhwH%2FYRnYlPUSenIHeBH7ODKxgr7nasmJy0Ar%2BNeOKnrXLLUw8tUQMP7FzUa6NXmeu0EP%2Ffd%2BSWB9joF6jE9%2FQ&X-Amz-Signature=976aea407666bc3592666f4639a8cf4755492e7bb335ca30c0e5e894a287a84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXITWN6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4qtLXaRFm8XjS1cFUzwPZZor1%2FDoGzfhL3944byE%2FQIgEtWfXPDcERhin%2B97KsRBoDPwPntIBXhpYdDKnhBXJC4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BACksL4FIPz9eC4yrcA9GhKb5c74p1Ap31ZwsVRzmQnH8jra81nPiSXJEPucKOgzzqsKobi6bIAmdmKb0YqEUaFDrSNAGxwtOjz%2FuKG8xR5YUTkWmojV0Y2lMFNNqE%2FekCd0v5iB8Ib2l6kpUmBCn7qmr4K0oEjHpVA5JcQPhHFE%2FKkiA%2FsSQuBtUOz6tlwIqdOGDuJNMGDYJXTyTFo8PZzHKHdQarOmuner6GvYwmAiMc3K%2FDE8M2dAL0KkDxVk2V7Y9MsiL7qZq%2B6e1dS1itpfV4ylIqKxbyeD%2Fv12ZtwMFQdGufHzoEMsl5yk7jGuKccEsUr8p5SwSOzf%2BtzDWxXPzZAkii5QNYv0AEzV7A4OJvgWarLfUr5xgiUa70aA4sHUpX1Nh%2BVHwztv8%2FlwXpp%2Bs7%2B%2FPKU1ChYSRZcUe16wbfLstdDo8fOB6MAiQjH%2F33KjjF%2F%2FYN7vd33nsnqEZt3%2BGY20GoWLOdTaUgtlYged4vG92%2Bpf4uWCBbuELp3nDKLX2xVhgRHAhpWerz3vxHcppXM3gz5KtpqadndvbPfawQ25jnXUARQuSPVu%2BrmHqFAAOlBEV8aluUI2t1MmYg41HtWGqi7iu6JyniUGwiOl8m3kIjHzC%2B434KWdCk0DQWAJMcswnr4Sa0MLaov8MGOqUBsgs1v6kvTkbeSnHxHXWt7nC9qWHCyyIY78Szfh4kXw9f8dThkiyhwFGnhvnYu74uVBTF%2FFJx3aEYmYsLz8S3WZKCbIWHa7%2BhK5juLzOrsy72fAFiDnEDZOLXF6Og1%2BDJLfSEgGjFqYP2siXT12Ns8ip%2BGSbMJksUOgdeTi%2BMo2d0sl07gi6Gy5c6PQjNM1P4PV4xL3NVuj0cFKmI9M3%2F%2B%2BG9uQil&X-Amz-Signature=d52d276ce1ba4b3de70f69e3d383e043d9b6afd6ab1f6a2ac3bedeb0a4eb0e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
