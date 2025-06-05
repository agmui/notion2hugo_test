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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFI3YY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEe343N1m%2F4Cr23P16dF5UC43bkM5jCuzXrrU38CRQkzAiAX5wC94Y9U2bawYHU7Fe2%2FjQIi%2BommYf1pmlrzsluzsir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1DYmN6q%2BUuahRUB7KtwDvxA42UbpIvL7hrKdqQ2p4lxKcaqqzuPKh%2FtTqC%2BmjWQnrL5macbfjLwo%2B0%2BLWWVT%2Bi3ePy%2FIKXeEwbV34nc%2F7S1QiAHLB9XY86p1uHq0RI0wULI7nvh0QWSS4Yuh1QhgQ8gZQk1WXe3gQKnOYTLtLUsefcVaipt6Dl5iiE9X%2FdcrmEAimFNHO8O9Jocrivj15Bvqoy%2BVre6RcIiC8YQ7nHGBvh2DYPoLcuLzUmir7Q1d0fL6hM3GQgGLELGndeaurCC8AcoHG2yOUR34IBEc%2Bw7bkGM8wZsyKK3i0SOzN7SjajTsb0SkuVVVy7FSvsmhU%2FU%2FjeTkp6%2Bxbh0qsae4iZlovD9B2IScROpaSomg1Q1Pl3FOVwGfeEnjIjY7yiQs%2BSwsJfbqnz1e%2B%2BmGD2BnAWimgy7elviZ%2F83lTCxFEVIpxtO%2Fzhi0eNwAoY65fZjxra14Uf40FLl5CfOYyhi8x0iLmzOBlt4u3dJW6Pc25yJ7f7HT%2F9CjGMU1Iw3Xgf5VTMvsIVpEDkoj0vrMKh31n%2B9fQZBfe3x866ieg4j7q%2FBm0lWG4NcWaN%2F7X134M2Hifb0eT7WwRJxn0IXmRh4z469ZErYZ44DTBeKLXQ92z81PWluX7l6WOTJ0gXkw86iHwgY6pgGsndZPXE1tfGvSIThXt1F4myfinv6SwXjPh7FPDG8M5et1VBkhPhnZFOuNkODIdF%2F5OWIrSKabTCxlirUZBOdnOMOh6QdeWntPfElxHpQiTA8Ovi9z4D9rVTvFnuu9t52fhU9WfSqZGwoJuGvRMco27IDyqhXehdTppbrUiBW6%2BpIAczVc2z5I%2Bos8qgW7aVUP2%2BbOykjMnVdOHVUAimi1NHQ6j46N&X-Amz-Signature=05121edffa63b2fd25cbd825cef0460031b5597ed6fa26c80a5af8f2f4e0bd44&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFI3YY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEe343N1m%2F4Cr23P16dF5UC43bkM5jCuzXrrU38CRQkzAiAX5wC94Y9U2bawYHU7Fe2%2FjQIi%2BommYf1pmlrzsluzsir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1DYmN6q%2BUuahRUB7KtwDvxA42UbpIvL7hrKdqQ2p4lxKcaqqzuPKh%2FtTqC%2BmjWQnrL5macbfjLwo%2B0%2BLWWVT%2Bi3ePy%2FIKXeEwbV34nc%2F7S1QiAHLB9XY86p1uHq0RI0wULI7nvh0QWSS4Yuh1QhgQ8gZQk1WXe3gQKnOYTLtLUsefcVaipt6Dl5iiE9X%2FdcrmEAimFNHO8O9Jocrivj15Bvqoy%2BVre6RcIiC8YQ7nHGBvh2DYPoLcuLzUmir7Q1d0fL6hM3GQgGLELGndeaurCC8AcoHG2yOUR34IBEc%2Bw7bkGM8wZsyKK3i0SOzN7SjajTsb0SkuVVVy7FSvsmhU%2FU%2FjeTkp6%2Bxbh0qsae4iZlovD9B2IScROpaSomg1Q1Pl3FOVwGfeEnjIjY7yiQs%2BSwsJfbqnz1e%2B%2BmGD2BnAWimgy7elviZ%2F83lTCxFEVIpxtO%2Fzhi0eNwAoY65fZjxra14Uf40FLl5CfOYyhi8x0iLmzOBlt4u3dJW6Pc25yJ7f7HT%2F9CjGMU1Iw3Xgf5VTMvsIVpEDkoj0vrMKh31n%2B9fQZBfe3x866ieg4j7q%2FBm0lWG4NcWaN%2F7X134M2Hifb0eT7WwRJxn0IXmRh4z469ZErYZ44DTBeKLXQ92z81PWluX7l6WOTJ0gXkw86iHwgY6pgGsndZPXE1tfGvSIThXt1F4myfinv6SwXjPh7FPDG8M5et1VBkhPhnZFOuNkODIdF%2F5OWIrSKabTCxlirUZBOdnOMOh6QdeWntPfElxHpQiTA8Ovi9z4D9rVTvFnuu9t52fhU9WfSqZGwoJuGvRMco27IDyqhXehdTppbrUiBW6%2BpIAczVc2z5I%2Bos8qgW7aVUP2%2BbOykjMnVdOHVUAimi1NHQ6j46N&X-Amz-Signature=fb7e35914f07ebfcf60bd345f71c87168538b55e256f8b0720c6de457f2b9c28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFI3YY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEe343N1m%2F4Cr23P16dF5UC43bkM5jCuzXrrU38CRQkzAiAX5wC94Y9U2bawYHU7Fe2%2FjQIi%2BommYf1pmlrzsluzsir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1DYmN6q%2BUuahRUB7KtwDvxA42UbpIvL7hrKdqQ2p4lxKcaqqzuPKh%2FtTqC%2BmjWQnrL5macbfjLwo%2B0%2BLWWVT%2Bi3ePy%2FIKXeEwbV34nc%2F7S1QiAHLB9XY86p1uHq0RI0wULI7nvh0QWSS4Yuh1QhgQ8gZQk1WXe3gQKnOYTLtLUsefcVaipt6Dl5iiE9X%2FdcrmEAimFNHO8O9Jocrivj15Bvqoy%2BVre6RcIiC8YQ7nHGBvh2DYPoLcuLzUmir7Q1d0fL6hM3GQgGLELGndeaurCC8AcoHG2yOUR34IBEc%2Bw7bkGM8wZsyKK3i0SOzN7SjajTsb0SkuVVVy7FSvsmhU%2FU%2FjeTkp6%2Bxbh0qsae4iZlovD9B2IScROpaSomg1Q1Pl3FOVwGfeEnjIjY7yiQs%2BSwsJfbqnz1e%2B%2BmGD2BnAWimgy7elviZ%2F83lTCxFEVIpxtO%2Fzhi0eNwAoY65fZjxra14Uf40FLl5CfOYyhi8x0iLmzOBlt4u3dJW6Pc25yJ7f7HT%2F9CjGMU1Iw3Xgf5VTMvsIVpEDkoj0vrMKh31n%2B9fQZBfe3x866ieg4j7q%2FBm0lWG4NcWaN%2F7X134M2Hifb0eT7WwRJxn0IXmRh4z469ZErYZ44DTBeKLXQ92z81PWluX7l6WOTJ0gXkw86iHwgY6pgGsndZPXE1tfGvSIThXt1F4myfinv6SwXjPh7FPDG8M5et1VBkhPhnZFOuNkODIdF%2F5OWIrSKabTCxlirUZBOdnOMOh6QdeWntPfElxHpQiTA8Ovi9z4D9rVTvFnuu9t52fhU9WfSqZGwoJuGvRMco27IDyqhXehdTppbrUiBW6%2BpIAczVc2z5I%2Bos8qgW7aVUP2%2BbOykjMnVdOHVUAimi1NHQ6j46N&X-Amz-Signature=d60302d1501f0179a8ec37d6c7b36dce51fe57aa9717dedf133347430b38d60e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYRB2ZF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIH%2BT%2FUvUqs1dMwRMHjzasp7CVwYabIYqPjLHCVL%2FgKw5AiAtTLC9ruuVNR3X7SZhp6DZRTPIHWRRDMIRZqYTJsUw0Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjArDk5dZcaaOntT%2FKtwDufWtTAHVyQ4NWguTV6fO24HHm7iAUa6jLDcZUPOw%2FIZ7QdSe4qPzAH9Kh%2FP%2BFk2GAc1gHfBlPp5b%2FNiYxFaEYr2Uk%2BvihF8d5iMkNaTw5cKz6RW%2FJ%2Fy5i%2FfW%2FUQd0ZSDCXaEHGUA7ADn86k5ZKgog5maot%2FNYOEbcQI3wBfIqpsdf9Jeiirm0lmMiq3L7rOuuZwMQaw5T2VshZKk1nKA%2FvvZE0PjMGl29VHI1VlPcOUXkgHU7EG3%2BhkzMh%2BHlOA43bwrXc9aol%2FKzmGOhmGDFuzWxIqikNchqIiSaMAimUoBjNlR1nGm8Siz5KiovMQ28TypeAqUW%2FR56TLeLgE2mGDjbtHj00%2BQdMD739b7aOboM%2Bx%2B%2FKQTsupDl7q8%2FyfoHntZ9ySUDMEe2n7B5CvJdkBwKt4iHAaFToYP8Gj7jByRkhKmPKjPBpkwoofaTi46rlIC3XRsBXjQasM9bE66JCawpd9JY9bzNL%2FsvaJQ4PntT60lG5%2FhqMtEoeLbXzhqb9NNAumf5Z3ZuffBWUDhEoji9ZmP5dZ3AP0Fl2g%2BGWzU%2FahUvluAu9TzzJ1Kw2egm%2B9uxzh0GrbN8r8%2BX48znih2fCbQSCDgbR3DnZS0esFIzze5RYmAfuykDT8wj6mHwgY6pgE%2BagwWc%2FB9Ga61aibbLCruttkeB8IEYS5bscR29ZqsqdE8CI8gS5knivwlmUIoXlWFpG2sxcjVIl5AkfkXLsB9oAp912NGOFb7Sgm39IZsLG8UDwFbUTP5FBTQWepUbUzPap3tKjwbgLY9FORWdYViRTdKmYF4MR1r9jQZloHFhWg%2FvbwoO%2FwiIGkZiSsHmd8M87x8EP2PSPWDOF9w6Ev17hebQnK9&X-Amz-Signature=aa261fe8a369a693b9c4734a848c862c34a0cb20d19956773d58045c4bd0af96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3Z5UVC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCnvsiMbOm3zQAPhcYrqWvu9c77kPkfCwQDE8JIIFDFigIhAK2%2B7YJ0U4%2BP%2BI4GBEy%2BveY3J32mJBD1M8K6HfwLeX9uKv8DCEsQABoMNjM3NDIzMTgzODA1IgxD8IqftK3JAkPwTUgq3AMDlxy%2BcEjdC6YJMUXp4k21Rle%2FSSf0gpusd5kjILf5DUrlj7ngePQVbBSGurFZOaaO4z2McKIrAkFq1L5gmgBd%2FCdvg5vc6hS35dCh79XEKOrUwzchAR7QBhDJN1S3eOl%2BAoohfOYr4mi4r2elHXGpjsKSS0qgg%2FYTwnu2jI4ShOqibbwMZ0kTWfRjVsonGKpn%2BW7fJRHpEdj56Z7RtBaXJ4Ug8gx9rJitOrgJmfjTa4dq1Leq4ITTAkjJayEFsX9sDv%2F8D4FVfiMQakg%2BGuaDQRhvx9AKSnL6NGDfXE5YnMDI2zgzJNK5hTIWUZYwaUerU98Gy57o9ioI7IwS%2Bm8a2N5IbMlkWhz0icG4doUgMXS5Qp5z4Hh%2BwlI5z0FfqlAIkAuSVpt2uglmYCmG%2BRs0dCukenoq3p114Daqdw5P3C8rQu3IzwoT%2F8xkktBih4wytrhKYZE4FmA8edvZ2xNIGvdrFBNz9mMkEgd02Q45wXDeoDsIBxBvXIUA55aTBZYtINksHSCJhYwP2D%2B6FnCOuBAHWX%2FdK%2BaqP48RH0MrqQQFVhZkwGcM64Cptt3YR0AFiYmiJR0akcIvwBFtsx7rmBt4PV0%2B%2Bp%2B2%2F7%2FqIDVmMFkJLa1WYMekokeNITD%2BqIfCBjqkAbQwPi1%2B08%2B4QdBzPwfA21%2BvTuiKSVYAKiGlyW8OrBx2sP0yK4Y6GJGFs5e1PQc8UH187yWs1K2EBMLe8HxEjg1k0y3uJ3iqW4zpzQtBzL9bnRJ8y6oiwNdWr0ktGm84GFUq0B0EFtCVLXeAd%2Bpu%2B37euJSVEpgPkF84OijquLGMjOMO3SDVsfeMIvXcA%2F10l6z6wJlM0ubyTurv3h2E0TV1E784&X-Amz-Signature=4d961d9c3ce22fbbbd03aa6a1f190eb84b20f709f9265a88b39a114a896d6354&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFI3YY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEe343N1m%2F4Cr23P16dF5UC43bkM5jCuzXrrU38CRQkzAiAX5wC94Y9U2bawYHU7Fe2%2FjQIi%2BommYf1pmlrzsluzsir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1DYmN6q%2BUuahRUB7KtwDvxA42UbpIvL7hrKdqQ2p4lxKcaqqzuPKh%2FtTqC%2BmjWQnrL5macbfjLwo%2B0%2BLWWVT%2Bi3ePy%2FIKXeEwbV34nc%2F7S1QiAHLB9XY86p1uHq0RI0wULI7nvh0QWSS4Yuh1QhgQ8gZQk1WXe3gQKnOYTLtLUsefcVaipt6Dl5iiE9X%2FdcrmEAimFNHO8O9Jocrivj15Bvqoy%2BVre6RcIiC8YQ7nHGBvh2DYPoLcuLzUmir7Q1d0fL6hM3GQgGLELGndeaurCC8AcoHG2yOUR34IBEc%2Bw7bkGM8wZsyKK3i0SOzN7SjajTsb0SkuVVVy7FSvsmhU%2FU%2FjeTkp6%2Bxbh0qsae4iZlovD9B2IScROpaSomg1Q1Pl3FOVwGfeEnjIjY7yiQs%2BSwsJfbqnz1e%2B%2BmGD2BnAWimgy7elviZ%2F83lTCxFEVIpxtO%2Fzhi0eNwAoY65fZjxra14Uf40FLl5CfOYyhi8x0iLmzOBlt4u3dJW6Pc25yJ7f7HT%2F9CjGMU1Iw3Xgf5VTMvsIVpEDkoj0vrMKh31n%2B9fQZBfe3x866ieg4j7q%2FBm0lWG4NcWaN%2F7X134M2Hifb0eT7WwRJxn0IXmRh4z469ZErYZ44DTBeKLXQ92z81PWluX7l6WOTJ0gXkw86iHwgY6pgGsndZPXE1tfGvSIThXt1F4myfinv6SwXjPh7FPDG8M5et1VBkhPhnZFOuNkODIdF%2F5OWIrSKabTCxlirUZBOdnOMOh6QdeWntPfElxHpQiTA8Ovi9z4D9rVTvFnuu9t52fhU9WfSqZGwoJuGvRMco27IDyqhXehdTppbrUiBW6%2BpIAczVc2z5I%2Bos8qgW7aVUP2%2BbOykjMnVdOHVUAimi1NHQ6j46N&X-Amz-Signature=3a71c6efc38a8740b857280656c60123a981debc85cb41c71482e0c8b31b2125&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
