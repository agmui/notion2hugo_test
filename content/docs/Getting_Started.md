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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UOQ346%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY4xH8LqRqq6B%2BUItK5lIyP29LYzJcuLYqtMSoNznomAIgHQ4mrgmfFxJmUy0N3ha9HEu8zYR9GlfZaapg%2B8H0f9oq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKnox4EkhvL4Z6i09CrcA5Q8lEPbaGE9qFj3fP65w9Mu47vhj3ZKOly8xnw5gJOvlao3e1PpVzPokAADFtj%2FMDW%2BJNG7KRNBKcmRNCT8AwXDqyXw69xz6PUSqPmjKH880j8OwKMRGz4lofituIRxaV%2FNsu2%2B%2FeBzH21wh1wcktkNinvwt9SuFWIsZ7jp2if5jwZgAtsK26XeD1CxM6jYBk8fctnZJeVZw4zJxiB2Qun7A2biV22Ts1Wv7vt8piiToKcCYlP5BZUHzKKsj7UBOHQmWiLTfF2hjddvT7PKJEBoomwOeCEBa%2F1yFuuiguc%2Fa1UzTNZuhs57ua8Rx3nJaywXj5rte0SQWrS3yoyAYj5drfzTNjibL1uA2McM1%2BCLb%2BDqjYPbpRYkXcA%2FZv2FQ5bFPBZ4TEi%2Bw0MJCfSeaDMmboX74ofRj9napHlcd%2FBiIx83XS83dzsGio%2F966XOcL%2Fj%2BSdTJKNhhbL8Jny2tIh09V9AGiI4WcmTk2e8Fa%2FLWBTKcuRPzgTMpn5UfDK0%2B5cIUNVjbax5mPRh2OKZV4iFkTN4GMHvINJ%2BN5iRqx24ZLyPLdyqhqpWE5iEdFdmPz%2BWO9U2xjJbHVZ763fCThlgmdDlADJ0Z5tCV3G91ZiXe%2Fz%2FSLj2gFilwiBrMIOEub0GOqUBGfSkjt4wGuwdpGkJzdZYgI%2F%2FwopfDSE5hYJV7PlnlZcODzR7L69k6xnI1K%2Bjozkc0tUriyv6Zn%2B5gCBjk1bvocUdpYzVSBwyn6M%2Fd1b%2Bo%2FYthxQOVRvfFbG4s35pPQhECz6Yd8nAqrE3ize8%2BGbqhxnOfo0UxzAiug2OyJifgKanfHrNOjB4Jd9p9RFr0CH9w9DWuFngoBX5qfOIH4kxfRHNuxWp&X-Amz-Signature=071ae5cefde8c2307a85f18f24f0dc81a2fd51ef4ea3ac10f9426b50f202287a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UOQ346%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY4xH8LqRqq6B%2BUItK5lIyP29LYzJcuLYqtMSoNznomAIgHQ4mrgmfFxJmUy0N3ha9HEu8zYR9GlfZaapg%2B8H0f9oq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKnox4EkhvL4Z6i09CrcA5Q8lEPbaGE9qFj3fP65w9Mu47vhj3ZKOly8xnw5gJOvlao3e1PpVzPokAADFtj%2FMDW%2BJNG7KRNBKcmRNCT8AwXDqyXw69xz6PUSqPmjKH880j8OwKMRGz4lofituIRxaV%2FNsu2%2B%2FeBzH21wh1wcktkNinvwt9SuFWIsZ7jp2if5jwZgAtsK26XeD1CxM6jYBk8fctnZJeVZw4zJxiB2Qun7A2biV22Ts1Wv7vt8piiToKcCYlP5BZUHzKKsj7UBOHQmWiLTfF2hjddvT7PKJEBoomwOeCEBa%2F1yFuuiguc%2Fa1UzTNZuhs57ua8Rx3nJaywXj5rte0SQWrS3yoyAYj5drfzTNjibL1uA2McM1%2BCLb%2BDqjYPbpRYkXcA%2FZv2FQ5bFPBZ4TEi%2Bw0MJCfSeaDMmboX74ofRj9napHlcd%2FBiIx83XS83dzsGio%2F966XOcL%2Fj%2BSdTJKNhhbL8Jny2tIh09V9AGiI4WcmTk2e8Fa%2FLWBTKcuRPzgTMpn5UfDK0%2B5cIUNVjbax5mPRh2OKZV4iFkTN4GMHvINJ%2BN5iRqx24ZLyPLdyqhqpWE5iEdFdmPz%2BWO9U2xjJbHVZ763fCThlgmdDlADJ0Z5tCV3G91ZiXe%2Fz%2FSLj2gFilwiBrMIOEub0GOqUBGfSkjt4wGuwdpGkJzdZYgI%2F%2FwopfDSE5hYJV7PlnlZcODzR7L69k6xnI1K%2Bjozkc0tUriyv6Zn%2B5gCBjk1bvocUdpYzVSBwyn6M%2Fd1b%2Bo%2FYthxQOVRvfFbG4s35pPQhECz6Yd8nAqrE3ize8%2BGbqhxnOfo0UxzAiug2OyJifgKanfHrNOjB4Jd9p9RFr0CH9w9DWuFngoBX5qfOIH4kxfRHNuxWp&X-Amz-Signature=1d6f18fdc14abad0c6d15fe9292c9136b1e559fc42335bff56f1b3fc719c303f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IA6KP4K%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9fjG20g92JMabADdrXFxl9QHEVYFNiH16y17ycA%2F0fAiEAkZWyqjHdfbocK%2Fr6eCwWj34Fz%2Bu2lJ0pPFyOlEYSukMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHG57H7H%2B5fw6MjWrCrcA0tgNiJkR0iTDmz1CZXOTcGAUuDJpDPTjTPo%2FJULtOGsbAL4zUXukrZazkM5wITmktoPrvVE0KvAZaXSamUwZLnAb74UnkyjyxmwGKzFYQYcH5mBsINPGUC5mAbyA5EprJO2DKBSsBakiRoFKAvgEvdsBqf7YD%2BBQuiD%2BS6Jxjjrl5dq7kLeEludKjz%2Fi0gLne%2F%2FlzFTUbCfwlS8cN8ZGOVXn%2BSsDdU4ChQ11E20HSJS2q30BvTE4Wo8YnChwK8vCncow%2FUeNYTTDifMtANjxP7OCJJYgfrdL4gFN2bYPMNPgGbTCrr888O4p2TSWPYOWBxO4E0R7fEV%2F2KhuDjj1UjVyf81J3r9Hehu38XLYnNwYHYyJ1ObF0P%2B1gnUXFPZCn59GSgaVAIrLUP%2FZBJKqtiT7RqdisnZprWInMHDtk9pOLCiMuD66OgIUT0B5yj6KvB5klCS5y7R23a3Zcpc6j9vRqF61HUBkTbRYffY7iBGhvF5zNR2CqoXV58sum6AHDeqhaTmn3UnpftYtS3sh0JFT9UdxA%2Blf90FHRdxjumwXYXQ2l5njtlLsvkCP8lgNPVqPFFuJK%2B2qft086kV1jmAFvB%2Bo9de1Rp2c7W%2BC0mSNoGNMLRXrU%2Bcv4mCMKaFub0GOqUBYF6tB8ZqCcHcVl02zOe%2B4nWVQFdsCxyOadYSvZRg%2BmBihV8DHHIyyYS%2FQFRnhyGMlQZEKi10kMVS5KHOv7lkSUQxBixsVGUJnJBHPxcveXaNs4fx8IzX2EjQOvB5MvA62kF%2Bgedk5Xc2JJQodKsSS7fpACcDJWixORwMlo8julvDfasCVgWLE51xMZOKgAvvek0InZ9DD32O5oAIXf90bRs%2Bd0wz&X-Amz-Signature=ad95da817d7dd0d9ace2629d096023d1e4f3f38034375e890e98b5fd0c523b97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVMJLL2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2BUQF8fkj4rFadevB7FLmjE6Lr4l6Zhe4djFPaNuS5AiEAnyhazpe%2FEFt%2FvKCw1yA%2ByFkfeZsB6c%2F5OxVqI8KT7%2Boq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFgcM2z4SM2LTfdnXircAxqOtTHhd2Jx2iPunS0xGOhac1IfpHxlxz7R6zvd%2ByMvPg1ytkOiLsng%2BeEwgQZ%2F%2FtPgTn5kH6ZbFjuETk8lcfntAOsYNs6gS1QzjwdG2rjVPyjN9iNv4Nf7INhHFz%2BbyScQpQeDZbJtPWSSzIQzKqJzeL7nc0q5IEBc7UGTLiAY2W3WHt9lLAkF7gKyotk%2FR%2B45OMHLUrHA29%2FBFCiYV7oXGhQUh1zY6468bfuiseiylQn0HNulsSp27YIjW4e%2FhO7R1i%2FW6TFiHOirUXAjtRFqzpiWAMoFW8%2B%2FDQHsSVognOm%2BXhW8Sw%2F%2Bx6Yz36DZk6lf%2BJzNM11E%2FL0kyaINUasnRush%2FgMzsyZqMzuGCbz99csK0epZbQDdTeVs%2B2y%2FRN1OilzCLCo9JptutKQPn11Dm79XvTf0yo8EY1v8%2B83LQfteWXfOzjjista5mMv2p65f0umGyUlz0xwcQRxJV6z8nDm4C8ImfdAqzxljpWfl5rgxLT%2B3Ui2eFR6yZ7P6dBiDtZwAOMjl6Hqxq1gheRcCuhzfIruNGUBk8ExxwSQV0HZPoMw8BI5N6YuMGPT%2BUsD3JbJ9yQNQlQfohl7bQ1xnKS9iUo5l%2FhmqHOVQnMqmsrA%2Fc4ThgPa4s0LvMMKFub0GOqUBU6ut25CBcf0umRVPpuumjmD02y1f7yJZdR9l6AtPuK%2Fi96P%2F7n%2FD12Q8xI5CuFDWVciwlLhnd6iYIjnkaql%2FvX4I8CStWW2seBmCN4eSP09A%2BmGPWIlS24i%2FZI1aZ0xDuEKP%2BNURc6Mv5laUHPzIdY9Qlg6chW%2Fhl66lLsRU1DkyPwUdZz7U6%2BeAzszrScSUvAwlans7Liqyk%2FgxnF%2BIGrs87%2Fax&X-Amz-Signature=b85d7f38606702ad490d84a9ae957bef47ae971c724f8d3082a93dc92405cc08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UOQ346%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY4xH8LqRqq6B%2BUItK5lIyP29LYzJcuLYqtMSoNznomAIgHQ4mrgmfFxJmUy0N3ha9HEu8zYR9GlfZaapg%2B8H0f9oq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKnox4EkhvL4Z6i09CrcA5Q8lEPbaGE9qFj3fP65w9Mu47vhj3ZKOly8xnw5gJOvlao3e1PpVzPokAADFtj%2FMDW%2BJNG7KRNBKcmRNCT8AwXDqyXw69xz6PUSqPmjKH880j8OwKMRGz4lofituIRxaV%2FNsu2%2B%2FeBzH21wh1wcktkNinvwt9SuFWIsZ7jp2if5jwZgAtsK26XeD1CxM6jYBk8fctnZJeVZw4zJxiB2Qun7A2biV22Ts1Wv7vt8piiToKcCYlP5BZUHzKKsj7UBOHQmWiLTfF2hjddvT7PKJEBoomwOeCEBa%2F1yFuuiguc%2Fa1UzTNZuhs57ua8Rx3nJaywXj5rte0SQWrS3yoyAYj5drfzTNjibL1uA2McM1%2BCLb%2BDqjYPbpRYkXcA%2FZv2FQ5bFPBZ4TEi%2Bw0MJCfSeaDMmboX74ofRj9napHlcd%2FBiIx83XS83dzsGio%2F966XOcL%2Fj%2BSdTJKNhhbL8Jny2tIh09V9AGiI4WcmTk2e8Fa%2FLWBTKcuRPzgTMpn5UfDK0%2B5cIUNVjbax5mPRh2OKZV4iFkTN4GMHvINJ%2BN5iRqx24ZLyPLdyqhqpWE5iEdFdmPz%2BWO9U2xjJbHVZ763fCThlgmdDlADJ0Z5tCV3G91ZiXe%2Fz%2FSLj2gFilwiBrMIOEub0GOqUBGfSkjt4wGuwdpGkJzdZYgI%2F%2FwopfDSE5hYJV7PlnlZcODzR7L69k6xnI1K%2Bjozkc0tUriyv6Zn%2B5gCBjk1bvocUdpYzVSBwyn6M%2Fd1b%2Bo%2FYthxQOVRvfFbG4s35pPQhECz6Yd8nAqrE3ize8%2BGbqhxnOfo0UxzAiug2OyJifgKanfHrNOjB4Jd9p9RFr0CH9w9DWuFngoBX5qfOIH4kxfRHNuxWp&X-Amz-Signature=7348897d14896219406fdb3d29a98379efb2d865befdfa1a66d82a00e266af87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
