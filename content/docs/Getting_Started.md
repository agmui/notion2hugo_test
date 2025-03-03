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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWLZZOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTrx3cEuSaa6QXhgzSY7hnPO%2FH4GVhAAXvZ82mk6RSvgIgE%2FAds1Sk5VE0k7RyNuMVreVqEuGAvi7dZkf%2Fq7X9AyYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9NKC%2BKO%2BW2rGF4XircA5zaiJmGWPy8Y0Z9ZJP34I0qDFPq1c2LleEL6Eo0BCjzv4wZ7SML%2BBanIAlprZvlcl%2FCLR4FNrzwHjYOa4U1mdAipb4nlL7P3KOllFsf1FLHK6wH05LiezRYQf8VL7HRrA%2FqBQyvu5hd1NqHC0iAn9kYX%2BOb0NjTFybBX%2FSZ3%2FN7tPLNmoSkCq8AWZHQKcUfyda5WEVow1FGJsE6HcPZJZ80NrH2aq%2FlbisORUuE%2BWsbF7uc%2B7q1lbWrESULaMZGm6OfUlD3MyKx2nYQeymq4D6M9iSro1%2BMeh2WlcXHr6L2WULjBD9HApZW21qJlgKt%2F6n4k9tixx1OzO5gFWkv97JM1p7qmvPSrlR5PzKCGRnd8a9pa%2BwNq3AMbvDYVrRSi0vXtiFXtzIyk9zoF2l2wneoXoUkpZ1Z7HzXUZiqsdT3%2BTZao2vipax2mzRPob9oXqIrrVN1O4Q6C9wZeD4mn4kLjYrFHVC6qNdGXAjvxJnAssrTNquWQ48wyaN0lQ2Dr68Ck5MYBnTB2SEUgI4oLcrSK2gyKRXkt8O763n6atRyVIMvut3d%2Fw627zG06XGmJAMc3M7JQnTsXvbKWCOrH952jFoqRl6ipGJcakF2RU2p35HG2BYHEXN6L8kPMInKk74GOqUBGzpw%2FTXzcAwnOeqOTGWCKqaxvLCzHk0ODuclKQAPf0RxWTiH0nM8C%2BJrNQYBnIPADSGOWV9dCIgFl9azgkLzM7OuTe5eukP98576rM%2B5wjCNuO4d9q%2BIi4SpOuH7iWlB%2B1x2CH07KK7RlbwBj4TVathoGZNLx%2Ftmsdw1zVygzWHinkN%2FmIGwTlDwo2H4gWC0wVtMFZoF5ioSDW3KPJpzWhtJ4YJR&X-Amz-Signature=cd69475f692fe64cff7bb31af16e51a92b2274c4be8df25012c1b5a58542949d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWLZZOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTrx3cEuSaa6QXhgzSY7hnPO%2FH4GVhAAXvZ82mk6RSvgIgE%2FAds1Sk5VE0k7RyNuMVreVqEuGAvi7dZkf%2Fq7X9AyYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9NKC%2BKO%2BW2rGF4XircA5zaiJmGWPy8Y0Z9ZJP34I0qDFPq1c2LleEL6Eo0BCjzv4wZ7SML%2BBanIAlprZvlcl%2FCLR4FNrzwHjYOa4U1mdAipb4nlL7P3KOllFsf1FLHK6wH05LiezRYQf8VL7HRrA%2FqBQyvu5hd1NqHC0iAn9kYX%2BOb0NjTFybBX%2FSZ3%2FN7tPLNmoSkCq8AWZHQKcUfyda5WEVow1FGJsE6HcPZJZ80NrH2aq%2FlbisORUuE%2BWsbF7uc%2B7q1lbWrESULaMZGm6OfUlD3MyKx2nYQeymq4D6M9iSro1%2BMeh2WlcXHr6L2WULjBD9HApZW21qJlgKt%2F6n4k9tixx1OzO5gFWkv97JM1p7qmvPSrlR5PzKCGRnd8a9pa%2BwNq3AMbvDYVrRSi0vXtiFXtzIyk9zoF2l2wneoXoUkpZ1Z7HzXUZiqsdT3%2BTZao2vipax2mzRPob9oXqIrrVN1O4Q6C9wZeD4mn4kLjYrFHVC6qNdGXAjvxJnAssrTNquWQ48wyaN0lQ2Dr68Ck5MYBnTB2SEUgI4oLcrSK2gyKRXkt8O763n6atRyVIMvut3d%2Fw627zG06XGmJAMc3M7JQnTsXvbKWCOrH952jFoqRl6ipGJcakF2RU2p35HG2BYHEXN6L8kPMInKk74GOqUBGzpw%2FTXzcAwnOeqOTGWCKqaxvLCzHk0ODuclKQAPf0RxWTiH0nM8C%2BJrNQYBnIPADSGOWV9dCIgFl9azgkLzM7OuTe5eukP98576rM%2B5wjCNuO4d9q%2BIi4SpOuH7iWlB%2B1x2CH07KK7RlbwBj4TVathoGZNLx%2Ftmsdw1zVygzWHinkN%2FmIGwTlDwo2H4gWC0wVtMFZoF5ioSDW3KPJpzWhtJ4YJR&X-Amz-Signature=9e70ce280a0c09a194e4f3c6b65c710eef0ed3721f69de5de3b43ba2ec05b7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V65HI6H%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDmmjJAKqqaocTnuuI9k1uOfbmbEPv8H0%2BCjAU%2B1BYCgIhAKR7nD9mgu4L8X2Cvgby10TzVT4UEFEFlYbCt61ShHNLKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk5ys87UnFpJYvSBkq3APLtslxtdFpBpbB7LjY5Jp3auwubwpwyuBsMbp64wWV5yaVtTycjJJ5qukDBFnCT8ntuooU3EU6%2BhwY7LbXKtmxHq61Rqam0QeRLE8X%2BB7RkwauueyKDXL%2FEU%2FrO8HnMxb1O%2FKBx5Fk7jR%2B%2F4JrbR2u5XyVLiW4khylnaa1zIXpRnJo9N2S1kZAjFTV4Y7p%2BBfBBRlAyuJU4ntrZDMdTalYEFQ%2BBjWtBt%2FUlLxxnEP2lgrkuWstGaLgscxL%2FQ7tLAkXOmgs7SP62WzYGWBFQ2KS95H6%2BGnXCj5ze7viVmd2BEpbXFbtu75vnZTjYoNBjiUEENFzlJXCMtpCAvxmjQ%2F8lgempG9C16vipoYx7X0pchtO3gO82pfBtE5E8xljtdN6k4lmtYsA%2FfzUKkd%2F%2FOONm2vzPzZU5YeQ62khnqu7OpUAwFH29JzBpVBWrharbmwJJsTrlp4rrR0u4DutYVwtZgmgIpHmQjEy2qGpkgIDP2KGqsSAyjzzt%2BlONkVfjACHVU1n4xyJLj2xi3eiWSRxTu1yVBcak7XOnLfXGKgzfjnooVxP3Dm4pyjYSA6vCnvYMVqyKGzXD4v6rdc5Nyl3CQubXqRdu8uD14aoktlLUMI0yt2shfux5ZMN%2FDCSypO%2BBjqkAT3Q408u4TWev%2FYuLWvPeEQsBNEHyxhTt3inLoFkEixbAOxYmmx7Kf%2FuOzImswxOSeEaX9TZcrQO0jJOB8cS%2FkawCkqEtq5UMbrahLDyFPMYr13fMfyrxYqnfC1zpbgUGZkp6HCKa%2BvPwmCgXdyC1qw%2BwbmZBIyxxxa%2BbJZpJceBW3GFtYzsnKV%2Bl4C9tY7fImEDyRm1sUxl%2Bvro9gIOlPnKlZjW&X-Amz-Signature=7c2c8dc5ec862ef95621f2e40e40b76cb2bb2caf0fabf41c5e8c88440b382034&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6L5JL5Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASAJJYrAWzOTF5aWa5J%2BeaV8DtKuMEJjr%2BhADF0UqPDAiEA%2F41Lqarts6iKEToKSYdYJODcfF33wQB1FxzMU3EiC1sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWMCq0sL%2Fhqb7hhdCrcA8HtPwccdh91XtC0dvGin1d%2BVKN1Pvtw2XYLh9m6125%2F5cIgp8d%2FRwSJ2TLmILcEzH5Q4CRwg6wM%2Bohog0VxB8Ft3wjG5d7gmI98DI4Bdkl0za59P3iA4UJHmytTpkeQNrNzBvbsE1dC3TxnbEXewnqSgx8RMPWnx7RNMMbIXNXDxRura70ijX%2BJknmQiB%2FIEBqEMVWcReFy1iC54Zy0ZTcKB9pU3BHvSp%2FkWcHHl4A5UOz2fBDveL4%2F7KJ4u%2Bc9NM71xG9oZIkrRC8XDPH0anvpGP%2FAZyFro5ZbibYqDDbWqz93OAhfhS0TmoEpcjXSwKojRXM%2BrBOg0F9GGICXRGgJOIc6ouTJwh16WnQUN9sfje9tIREWEPePkQLtjZAgnhqZkzTBxRF35k1kwM27lD5BcJ0ZYROhQgTCiP1YgPhzJ68gqeQJMOW0Nc%2BQ8uePcBsjwE34BlW4Xlt20EY2U35bEjgKJ3iNvcksQNRxuo9i%2BJXz1%2FzL18wfUXaahtOgKuqXQY5PekaHxCOLPP%2Bi2AmAzMgzkrCkvJNSmoTFdFCmF5WkrgLjORewESZBKtWmqg10NRTcICeD0kp0FB3cHgQA1sPd%2FHr1Mcz458DleQupbeFD%2BoHgyKfvW3cmMMfJk74GOqUBfkBY1sFw0mHzIVBarbWcPrvzEi8soiXKiz0jvnYIQrS00BxthO3rHouuIc58RWCYxBiBgfQ3DcgHDpeaD1YqKgObyGbWbafNBWilEQJTHDY1Pg5OyCbMIlWPhmcCQ%2FUkIZwO4gJ0y6DrPLLhYzk5eO1kEM%2FLloaMrBofdh%2FzqL0hwKAKh5trcXYognvuHgKO501YXs9c7x%2FQ56jfGEzc3b9Vabp9&X-Amz-Signature=d9f5f5821a9d8028e061cdfc31bb52604c31c1f0c3af2735117a7482091d2c24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWLZZOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTrx3cEuSaa6QXhgzSY7hnPO%2FH4GVhAAXvZ82mk6RSvgIgE%2FAds1Sk5VE0k7RyNuMVreVqEuGAvi7dZkf%2Fq7X9AyYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9NKC%2BKO%2BW2rGF4XircA5zaiJmGWPy8Y0Z9ZJP34I0qDFPq1c2LleEL6Eo0BCjzv4wZ7SML%2BBanIAlprZvlcl%2FCLR4FNrzwHjYOa4U1mdAipb4nlL7P3KOllFsf1FLHK6wH05LiezRYQf8VL7HRrA%2FqBQyvu5hd1NqHC0iAn9kYX%2BOb0NjTFybBX%2FSZ3%2FN7tPLNmoSkCq8AWZHQKcUfyda5WEVow1FGJsE6HcPZJZ80NrH2aq%2FlbisORUuE%2BWsbF7uc%2B7q1lbWrESULaMZGm6OfUlD3MyKx2nYQeymq4D6M9iSro1%2BMeh2WlcXHr6L2WULjBD9HApZW21qJlgKt%2F6n4k9tixx1OzO5gFWkv97JM1p7qmvPSrlR5PzKCGRnd8a9pa%2BwNq3AMbvDYVrRSi0vXtiFXtzIyk9zoF2l2wneoXoUkpZ1Z7HzXUZiqsdT3%2BTZao2vipax2mzRPob9oXqIrrVN1O4Q6C9wZeD4mn4kLjYrFHVC6qNdGXAjvxJnAssrTNquWQ48wyaN0lQ2Dr68Ck5MYBnTB2SEUgI4oLcrSK2gyKRXkt8O763n6atRyVIMvut3d%2Fw627zG06XGmJAMc3M7JQnTsXvbKWCOrH952jFoqRl6ipGJcakF2RU2p35HG2BYHEXN6L8kPMInKk74GOqUBGzpw%2FTXzcAwnOeqOTGWCKqaxvLCzHk0ODuclKQAPf0RxWTiH0nM8C%2BJrNQYBnIPADSGOWV9dCIgFl9azgkLzM7OuTe5eukP98576rM%2B5wjCNuO4d9q%2BIi4SpOuH7iWlB%2B1x2CH07KK7RlbwBj4TVathoGZNLx%2Ftmsdw1zVygzWHinkN%2FmIGwTlDwo2H4gWC0wVtMFZoF5ioSDW3KPJpzWhtJ4YJR&X-Amz-Signature=922d751a73017a1d443b6c220e8d248b35b3a695e92acf0f2fc451f9536e2f49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
