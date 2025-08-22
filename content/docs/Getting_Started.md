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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODA2H5C%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYuihcieyunqj8NlyKf0oRmY5xWHKu%2BBbYecefb2ytAiEAow17GFSMiI7cryZImiEwts%2F8d4ah788s3lX3tH710NYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAugPMgAw5tNLqSwyrcA0BkDa1%2BoMY%2Bx3SR1xv0URGdyD5wLER%2BpotJUJDvrkaYrJqhNOtuNHOD1ke1NZeJ%2BD0pa%2BhNT5CSy1htQ4kl%2Fwh1XqJUcLtirF%2BqZEC9tA2Noe8NunSDRtY8yT0txgrUBS2J2jp5Kdm1rQYKdB5v%2BQKN6pRgzRzU2tB9gT5H5iAN8Ahifd5DP4bzyizwClr2hsrlY4EKSUOZBh5JVXku580V9FdQmk7G%2BGJL%2BHr9Vpn9wr9HOswRRJxtTrqaciDJnHZNueKVm%2BPcVCCkyMi0JUvSag828RZFb8n0NwM3pPE4O3X6uyMHRS2qHPsERtq36mDm%2FVEw1cYAv4hlc3Ussvx4Dl4f62PdBNXT0AKcdnBGeoh5jtINqR5usk5N%2Btiq%2BSmbGL29zze8CRhwVHHyxaOp%2B9N81bzvohSTuFO0beYKfor7BaX0NLC7i%2BUNKC7646YJwRMqnNY3nblOfcWA4fwfp27ibf04QvBWsvVhvS6cMfLIuIWM9O%2Be8UdfGm6ta5cD9uZWG7T%2F%2F7UerXMDBup%2BiKoFAu5X9mdeaQU0NsgHHt6cra1ckazL3CC0cDLp0vqw6%2FhuVn20N%2BF7mfPUjlQNE%2BDdSEJ9N%2BnEa%2FiUcWkG7LCJglzlzsALp3rQMPvxnsUGOqUBzu74H6Zp%2F4BM75GT5bprTj7hBb2baUt%2B5d466jSdG2aGWx9X7uM6bTLOvhNKkmrNGxu3hpRKaJbtQFjpwpEPnPrLs4%2BZA5PWVQQtqU%2FbAX87BNb1Peip4N98uH1HqUAnLnKESHjO7%2B39xyI52VOEi81dhQmFxZ8dTeSdIDDh59v3LqOe%2Fm%2B64J%2BxXFdoHwlcEk30cee%2BkCgVFyOh9MnQrnwoPuEX&X-Amz-Signature=56caeecbf074d40bb9d984da95172e691e70e59bb55c3ccd27b81c546d11b3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODA2H5C%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYuihcieyunqj8NlyKf0oRmY5xWHKu%2BBbYecefb2ytAiEAow17GFSMiI7cryZImiEwts%2F8d4ah788s3lX3tH710NYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAugPMgAw5tNLqSwyrcA0BkDa1%2BoMY%2Bx3SR1xv0URGdyD5wLER%2BpotJUJDvrkaYrJqhNOtuNHOD1ke1NZeJ%2BD0pa%2BhNT5CSy1htQ4kl%2Fwh1XqJUcLtirF%2BqZEC9tA2Noe8NunSDRtY8yT0txgrUBS2J2jp5Kdm1rQYKdB5v%2BQKN6pRgzRzU2tB9gT5H5iAN8Ahifd5DP4bzyizwClr2hsrlY4EKSUOZBh5JVXku580V9FdQmk7G%2BGJL%2BHr9Vpn9wr9HOswRRJxtTrqaciDJnHZNueKVm%2BPcVCCkyMi0JUvSag828RZFb8n0NwM3pPE4O3X6uyMHRS2qHPsERtq36mDm%2FVEw1cYAv4hlc3Ussvx4Dl4f62PdBNXT0AKcdnBGeoh5jtINqR5usk5N%2Btiq%2BSmbGL29zze8CRhwVHHyxaOp%2B9N81bzvohSTuFO0beYKfor7BaX0NLC7i%2BUNKC7646YJwRMqnNY3nblOfcWA4fwfp27ibf04QvBWsvVhvS6cMfLIuIWM9O%2Be8UdfGm6ta5cD9uZWG7T%2F%2F7UerXMDBup%2BiKoFAu5X9mdeaQU0NsgHHt6cra1ckazL3CC0cDLp0vqw6%2FhuVn20N%2BF7mfPUjlQNE%2BDdSEJ9N%2BnEa%2FiUcWkG7LCJglzlzsALp3rQMPvxnsUGOqUBzu74H6Zp%2F4BM75GT5bprTj7hBb2baUt%2B5d466jSdG2aGWx9X7uM6bTLOvhNKkmrNGxu3hpRKaJbtQFjpwpEPnPrLs4%2BZA5PWVQQtqU%2FbAX87BNb1Peip4N98uH1HqUAnLnKESHjO7%2B39xyI52VOEi81dhQmFxZ8dTeSdIDDh59v3LqOe%2Fm%2B64J%2BxXFdoHwlcEk30cee%2BkCgVFyOh9MnQrnwoPuEX&X-Amz-Signature=1a416e6dcfae8dbe0fc991b3970c8a5599bbfcf0d13d4a7cba838029e3dfb941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODA2H5C%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYuihcieyunqj8NlyKf0oRmY5xWHKu%2BBbYecefb2ytAiEAow17GFSMiI7cryZImiEwts%2F8d4ah788s3lX3tH710NYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAugPMgAw5tNLqSwyrcA0BkDa1%2BoMY%2Bx3SR1xv0URGdyD5wLER%2BpotJUJDvrkaYrJqhNOtuNHOD1ke1NZeJ%2BD0pa%2BhNT5CSy1htQ4kl%2Fwh1XqJUcLtirF%2BqZEC9tA2Noe8NunSDRtY8yT0txgrUBS2J2jp5Kdm1rQYKdB5v%2BQKN6pRgzRzU2tB9gT5H5iAN8Ahifd5DP4bzyizwClr2hsrlY4EKSUOZBh5JVXku580V9FdQmk7G%2BGJL%2BHr9Vpn9wr9HOswRRJxtTrqaciDJnHZNueKVm%2BPcVCCkyMi0JUvSag828RZFb8n0NwM3pPE4O3X6uyMHRS2qHPsERtq36mDm%2FVEw1cYAv4hlc3Ussvx4Dl4f62PdBNXT0AKcdnBGeoh5jtINqR5usk5N%2Btiq%2BSmbGL29zze8CRhwVHHyxaOp%2B9N81bzvohSTuFO0beYKfor7BaX0NLC7i%2BUNKC7646YJwRMqnNY3nblOfcWA4fwfp27ibf04QvBWsvVhvS6cMfLIuIWM9O%2Be8UdfGm6ta5cD9uZWG7T%2F%2F7UerXMDBup%2BiKoFAu5X9mdeaQU0NsgHHt6cra1ckazL3CC0cDLp0vqw6%2FhuVn20N%2BF7mfPUjlQNE%2BDdSEJ9N%2BnEa%2FiUcWkG7LCJglzlzsALp3rQMPvxnsUGOqUBzu74H6Zp%2F4BM75GT5bprTj7hBb2baUt%2B5d466jSdG2aGWx9X7uM6bTLOvhNKkmrNGxu3hpRKaJbtQFjpwpEPnPrLs4%2BZA5PWVQQtqU%2FbAX87BNb1Peip4N98uH1HqUAnLnKESHjO7%2B39xyI52VOEi81dhQmFxZ8dTeSdIDDh59v3LqOe%2Fm%2B64J%2BxXFdoHwlcEk30cee%2BkCgVFyOh9MnQrnwoPuEX&X-Amz-Signature=e4909a50018c12d46cd310b1bd0d78b23fb3944bf0a2ad81019b73fc879792a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTYQHYM%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbQ5eBJ4KyEmXoHQl6lG3MIsZXQbDMkT3o%2B9hb2mQJyAiEApwufvbPrI7dbjLoJlYzRozygXt1t0E9zW6lnMF3GHXAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8nmD7mngBISAh%2BySrcA3ts7NDI9O1izdX%2FPXzBY2lT4wgyb%2BYGDcBXWt4nGuWCJZ6vG8Snj6HykWFRVIHILsauCS0k4ARpurW5a5RN9ysOhLdq3FV2jj38xfufm9HxqJMmkZLW9S2ggGwwqJ4EzKM%2FTu%2BHbkmM49n%2Bgx6NG%2BI2ov0UkKEd2ezVDhGqEqbzpY8sUcEUnf0D%2BON9m%2Fl7hEdAzA6D9POl9jqRClj%2BZuqxcqe2FpGBBZmAX%2BoIK5w9AuclOAqhIjwxv1mzz8nU1UvZgc%2BaYs0EVmWBdUu6lLPbmMGOFN4K9IdmV0qGJjdNGJIeqzHq5jKDz%2Fl4PhCHUuc%2BCqZRmMRv9oPvzrfY1FduUQNvIDS132YmTOUJW3r2uqvwrmRStPGpVPak1mzEUfp3gMOO8Purajhw3KkwwuoMA4gSWhz0SyRdsJ14hnQvGeKjd0T4fPSQCX3ZaDk7ylQOiW7Zv38viIkuplpEj2cNOkfLN4NxrFT7mGDH6%2BLslwGJOBBTfJmsL2ji5KlK9qYvRQjqgakYXNntnavTMuWLbETEJZTF4DjxZ23AANeatp%2B7x%2BXxw9woD2gq%2B2NZNhxngQYlhwvvwqFDCfeK1EJxhOTb1sJP8l575uqfQivDTuPiGn28mD9DGIsZMInynsUGOqUBxNMTwfl5MPAPOLyMd3hioPuwP7jN7dgUZdMYANIYOMSwTjaYGC29Nd9No9%2B%2FvN4eKESAIEPmq9cLFtb%2Bh2xStsdJVBzo6376Zgk7EinMcoE5A33cZslfU4S20v07iWNmK%2B2E%2BdDDQNdMAljgIY816pTcYB4drdLsgvbE%2B2zTHYckpMuJkBOAXYsYD%2F1E8oRRZNT68TDXfWveG%2F3w2w3MNaoKkbTf&X-Amz-Signature=74b9028bbe2ee804303492ec954dc968de2cc35d0965fba686f453706c20ccc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWXWO62%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASfthJ5Cs06dnFPdlZbOGUNnxPcUaBJVMLiuhPVe63KAiEAtAf9XWehWdBqvIL9vfZXkPu%2BjqXbiANvhs%2F7%2BjEpSikqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKa4TmubzzJC8aeircA8SYhPKhud%2Bi3qjyw0f0Y45CSIkXqFSlhvSVCdGTyAe277FidCfudq6%2BkBWMTx0IU7jpSZvcXmcKG9Itari0bnoJSj4POxpiOJdVVypg1494E34xu%2FInGNV1JrTHLPu976YVwElM2CWXoHV9iljin2Jo2wiIGNsLjx3P0tQnwaiHi8oTGgl8uUkSw1DppO66kI2PuAikRy7eb9MxrRwWT6fBh8javEvkTVF7uqUQnlbFKjLm7Msqbm9CA8ZGJ3VY93vJ83Neygs1T41n9PFjdgHt1Zslfn0DgAFo3fuEATe62CfZbD7wIszBQhgh%2BVRVoJo8R9AIep%2FLO%2BcgHu3NZRc%2BKzMjJsrio8i8TPJOjvxVOEXdZhHsIIUcuUfxvoCxtrQkvh1zTZvDleE07SGHgH69LGIBJJkqAMQXPHNJHpsaVtM5D4COooV23FSSAUawUMDHaYw1aXAYkQL5U3%2F3vPiw5GxKO34KiVo4NcvigfuDpTzL7URH6s1UQDesd8g4zqbAjqUQYR6mHKJ4QbqRmVAVOT15Kw%2BpBjzgu94L4wWPpaFvHH7SJTA5rgKqInczdvTBxoxYysPA5O63eLqRtthiyCKMOYIRlUMiwBOHV8jhMbqtBSBuOJjTkIIKMK%2FynsUGOqUBwdz1IMFTwiPZzYW7aPWAmISPV%2FBJi3JzXZznrbMBW6uu5gc15FBATcYLb%2FtyirRGSMMNv%2BkCD%2Bzgi%2Bt0ZBtSnjU0o4YL2iy5Des8KjurMvPo%2Fbb7e%2BAs8F27Y3MLKRnTar%2F0aagzFOeRp%2BTyPzsHDVc%2B%2BWe7%2B8v6cuRHLU3%2FWIh8Jb%2FzkKxWJW22Cpn5srz5Qvto8GEQkgxy4ecRlTH%2F%2Fz5ghm3G&X-Amz-Signature=0e2763d6c3d0917f695511b48e0e5f3d71b98821ed5adfbf08cfd624acc1cb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODA2H5C%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYuihcieyunqj8NlyKf0oRmY5xWHKu%2BBbYecefb2ytAiEAow17GFSMiI7cryZImiEwts%2F8d4ah788s3lX3tH710NYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAugPMgAw5tNLqSwyrcA0BkDa1%2BoMY%2Bx3SR1xv0URGdyD5wLER%2BpotJUJDvrkaYrJqhNOtuNHOD1ke1NZeJ%2BD0pa%2BhNT5CSy1htQ4kl%2Fwh1XqJUcLtirF%2BqZEC9tA2Noe8NunSDRtY8yT0txgrUBS2J2jp5Kdm1rQYKdB5v%2BQKN6pRgzRzU2tB9gT5H5iAN8Ahifd5DP4bzyizwClr2hsrlY4EKSUOZBh5JVXku580V9FdQmk7G%2BGJL%2BHr9Vpn9wr9HOswRRJxtTrqaciDJnHZNueKVm%2BPcVCCkyMi0JUvSag828RZFb8n0NwM3pPE4O3X6uyMHRS2qHPsERtq36mDm%2FVEw1cYAv4hlc3Ussvx4Dl4f62PdBNXT0AKcdnBGeoh5jtINqR5usk5N%2Btiq%2BSmbGL29zze8CRhwVHHyxaOp%2B9N81bzvohSTuFO0beYKfor7BaX0NLC7i%2BUNKC7646YJwRMqnNY3nblOfcWA4fwfp27ibf04QvBWsvVhvS6cMfLIuIWM9O%2Be8UdfGm6ta5cD9uZWG7T%2F%2F7UerXMDBup%2BiKoFAu5X9mdeaQU0NsgHHt6cra1ckazL3CC0cDLp0vqw6%2FhuVn20N%2BF7mfPUjlQNE%2BDdSEJ9N%2BnEa%2FiUcWkG7LCJglzlzsALp3rQMPvxnsUGOqUBzu74H6Zp%2F4BM75GT5bprTj7hBb2baUt%2B5d466jSdG2aGWx9X7uM6bTLOvhNKkmrNGxu3hpRKaJbtQFjpwpEPnPrLs4%2BZA5PWVQQtqU%2FbAX87BNb1Peip4N98uH1HqUAnLnKESHjO7%2B39xyI52VOEi81dhQmFxZ8dTeSdIDDh59v3LqOe%2Fm%2B64J%2BxXFdoHwlcEk30cee%2BkCgVFyOh9MnQrnwoPuEX&X-Amz-Signature=98649c43a83ccffd3fd1c53d1602120d6bea27991a40252ae32a5ef1c15125e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
