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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2PEGG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCIwQcwQQ7tCrB%2BFrmRc%2FM7ijvmdzVRuVQog%2BLu3BsBSQIhAPRG9ArYleQebf02kHpNO2nIMuyaiGtuRJ0MAOb%2FqeizKv8DCDwQABoMNjM3NDIzMTgzODA1IgzlR7mtzv3ana9vckIq3AP3%2Fniho1gx6ZRZuKlYPRSO%2FFavy7YG8MWkWqOgExqiaRJTmfsXSN2Y%2Fa3o1bdlWFR%2BeQVYGKMXwN8S6P4CFfvwDjX%2FUX2E37fLy%2Bdvhm6WMB4R2tkYYom2o9j1i5dnFlF24u2fymKAW2vIm%2BdrSn6oC3W7RgUPDViCu4EUpYQPUhKLT%2FeoJhMV3byudms9kqjKlq55ixPjF1DKBdlglnKUHkEXnoC2TrG%2Fe8ficGuLzuc3RSrTRFhTSOAW4hs8zl7tsIqVcb95ZIV0RhQJENKtH%2BJyoYTvqkNVHHrBSjC12pQ23XgjOskirGXElgIimHO7%2BBMRd4mNAodpCiXFl7ANZx8ELGPRRILmpJgvzNG5%2BkdmJF8ytgkPhJoEaspc57%2BNfa6bBVmRWrmMAOnCvx96zKthjMZu2wWd26S%2B9qVkn0RMclbQEVXLNIKHE9t%2Fpk8Hsx5h%2FPAexa7YtvW91R%2B87AJfOoWCIHvCbW4z%2F%2F%2F9ap95ecNaKoqtc6QV%2FZIHNLVv8ihISns1lJ9ANsNzSTSjz%2BihHSJAK0qIHYoxOgLQOxxGeR0WaENyvAiaqP3hnJowggGa3OslBwvkvipt7DOR%2Bx8iNkCDg8t7fjapGd4CdAyOlnt5%2FEV8ej5MLjCz%2FtbDBjqkAbAkswUgMxqWI5B6YbakIaL9Ze39B9kUqFUMJoe7Fw00wL%2F1QlGqQPzh4YTqXv2SzKNtx8q0H2%2Bps1xCekCQitnQ%2B%2BE2mnvRsjStb%2Bv%2Fg8HwTmdNtHZX0ahYov%2BTzMhuaTdZrPr1FY3LwctW1tcywD9v7dNIBr6UEQjW2B%2BHavTVskT8ifmO0q%2F3F%2BYucP0ilzT%2FH0qecA9YDUSeXE28dgVvSMrT&X-Amz-Signature=09f2c2645c3fb5bbf4ad26e5b076309c8aecec4ba53fa99ef6217724fb19fb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2PEGG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCIwQcwQQ7tCrB%2BFrmRc%2FM7ijvmdzVRuVQog%2BLu3BsBSQIhAPRG9ArYleQebf02kHpNO2nIMuyaiGtuRJ0MAOb%2FqeizKv8DCDwQABoMNjM3NDIzMTgzODA1IgzlR7mtzv3ana9vckIq3AP3%2Fniho1gx6ZRZuKlYPRSO%2FFavy7YG8MWkWqOgExqiaRJTmfsXSN2Y%2Fa3o1bdlWFR%2BeQVYGKMXwN8S6P4CFfvwDjX%2FUX2E37fLy%2Bdvhm6WMB4R2tkYYom2o9j1i5dnFlF24u2fymKAW2vIm%2BdrSn6oC3W7RgUPDViCu4EUpYQPUhKLT%2FeoJhMV3byudms9kqjKlq55ixPjF1DKBdlglnKUHkEXnoC2TrG%2Fe8ficGuLzuc3RSrTRFhTSOAW4hs8zl7tsIqVcb95ZIV0RhQJENKtH%2BJyoYTvqkNVHHrBSjC12pQ23XgjOskirGXElgIimHO7%2BBMRd4mNAodpCiXFl7ANZx8ELGPRRILmpJgvzNG5%2BkdmJF8ytgkPhJoEaspc57%2BNfa6bBVmRWrmMAOnCvx96zKthjMZu2wWd26S%2B9qVkn0RMclbQEVXLNIKHE9t%2Fpk8Hsx5h%2FPAexa7YtvW91R%2B87AJfOoWCIHvCbW4z%2F%2F%2F9ap95ecNaKoqtc6QV%2FZIHNLVv8ihISns1lJ9ANsNzSTSjz%2BihHSJAK0qIHYoxOgLQOxxGeR0WaENyvAiaqP3hnJowggGa3OslBwvkvipt7DOR%2Bx8iNkCDg8t7fjapGd4CdAyOlnt5%2FEV8ej5MLjCz%2FtbDBjqkAbAkswUgMxqWI5B6YbakIaL9Ze39B9kUqFUMJoe7Fw00wL%2F1QlGqQPzh4YTqXv2SzKNtx8q0H2%2Bps1xCekCQitnQ%2B%2BE2mnvRsjStb%2Bv%2Fg8HwTmdNtHZX0ahYov%2BTzMhuaTdZrPr1FY3LwctW1tcywD9v7dNIBr6UEQjW2B%2BHavTVskT8ifmO0q%2F3F%2BYucP0ilzT%2FH0qecA9YDUSeXE28dgVvSMrT&X-Amz-Signature=710f2bca7b1cd275dcb14126aefbb4b3bfa93a12f6a7a525e48ca764db380fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2PEGG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCIwQcwQQ7tCrB%2BFrmRc%2FM7ijvmdzVRuVQog%2BLu3BsBSQIhAPRG9ArYleQebf02kHpNO2nIMuyaiGtuRJ0MAOb%2FqeizKv8DCDwQABoMNjM3NDIzMTgzODA1IgzlR7mtzv3ana9vckIq3AP3%2Fniho1gx6ZRZuKlYPRSO%2FFavy7YG8MWkWqOgExqiaRJTmfsXSN2Y%2Fa3o1bdlWFR%2BeQVYGKMXwN8S6P4CFfvwDjX%2FUX2E37fLy%2Bdvhm6WMB4R2tkYYom2o9j1i5dnFlF24u2fymKAW2vIm%2BdrSn6oC3W7RgUPDViCu4EUpYQPUhKLT%2FeoJhMV3byudms9kqjKlq55ixPjF1DKBdlglnKUHkEXnoC2TrG%2Fe8ficGuLzuc3RSrTRFhTSOAW4hs8zl7tsIqVcb95ZIV0RhQJENKtH%2BJyoYTvqkNVHHrBSjC12pQ23XgjOskirGXElgIimHO7%2BBMRd4mNAodpCiXFl7ANZx8ELGPRRILmpJgvzNG5%2BkdmJF8ytgkPhJoEaspc57%2BNfa6bBVmRWrmMAOnCvx96zKthjMZu2wWd26S%2B9qVkn0RMclbQEVXLNIKHE9t%2Fpk8Hsx5h%2FPAexa7YtvW91R%2B87AJfOoWCIHvCbW4z%2F%2F%2F9ap95ecNaKoqtc6QV%2FZIHNLVv8ihISns1lJ9ANsNzSTSjz%2BihHSJAK0qIHYoxOgLQOxxGeR0WaENyvAiaqP3hnJowggGa3OslBwvkvipt7DOR%2Bx8iNkCDg8t7fjapGd4CdAyOlnt5%2FEV8ej5MLjCz%2FtbDBjqkAbAkswUgMxqWI5B6YbakIaL9Ze39B9kUqFUMJoe7Fw00wL%2F1QlGqQPzh4YTqXv2SzKNtx8q0H2%2Bps1xCekCQitnQ%2B%2BE2mnvRsjStb%2Bv%2Fg8HwTmdNtHZX0ahYov%2BTzMhuaTdZrPr1FY3LwctW1tcywD9v7dNIBr6UEQjW2B%2BHavTVskT8ifmO0q%2F3F%2BYucP0ilzT%2FH0qecA9YDUSeXE28dgVvSMrT&X-Amz-Signature=39f9c52c3c5d224da11175163c4675b8f4a8ca73f9c88b8788a4c691d641acc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYXNTFK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDx5rRPsS1TMxp23qEXsRvmZL9diQc69mqIVbbdCITQegIhAPS6XD9r5broi66LZHRS25Q7szJJsdPeNX5pt7013ag%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igw%2F7jvddNfFBzQUfkYq3AOeM5YXUtqQFGAJSau%2FxKIeM7znkBUND9elz6Smgmg851koCxsWYzHmEIUQNRpetbi0CvmHXtfUU6zSGFtrhnB182CqLc9uqq7iEFrhkff%2Bxm%2FGolM89yQe5%2BWVji%2BI%2Fgug%2BmVNUNz0Er6EdZ9mzdQ6FaiqGm3tXS8HPjTB%2Bsr%2BIoDROCh2TjMOBexgXovqb6bUSswhA374c2j3v6mGWWCXx9AslAjMlGwoNWrrs%2FwJWWsMqIdirXD1dOfe%2Fs58gpKzndpW%2BN%2ByR4M5p8Hh2gNs1TTHj35Y1BqgrRBYARBife2o2zwqCbclIDpGd%2BkDlflOo%2F5VMh39ap6hWpSRmu%2FKaNfE%2BUXaTe5JAfaCg1Y7pTXJAhffbwok333iacb6uZdZn%2Bvx3DV6OZa7F34uahf5MAS3o8SM80i%2FTOWcJhpN8BWZMuSRFYO%2Fbt5NM1Y962SYofqP%2Fr%2F2vMhqUE6sJOm7yoePDFEkN1FmUuq%2BeA8xiIZ1PSQWwgai801VrDmPSXh1VKrWFnIetdAw8XbxbapjEB1A4hKiF0zk1iH9uBDBlFP%2FbUcEe5ISCgt9%2B0fJI3RoN29ZMiUhd3vACImW2wkZOS06awVlgyhJBoL%2B2AXx98lkqzC%2BG2NMoP44xzDT%2FtbDBjqkATM%2FD0e5Fh6BoQByElVXTPcEmje0aNU3ZHlMSisDvC0O906fGJLrhYBGbUcwuXqGolsax4hUo49koI4Lzp5jVum7k2pH8Ug1JBx%2F8rMCno6sPAJYSInSUZ%2FLUZo%2B9s2ovJQy%2BJynM679OJ72NspR2V1XeEG40XkHYjWRy%2FJ9YnKkaPXCZMx7x%2BY%2FWGGDGM3K8tXm%2BXJshxQc7DIUOjnyPn0Tol6s&X-Amz-Signature=546b3924cc3605e4733f21f4de3ba5e39561ff964b3c72f87d1c68a79ca6b480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3DN6HI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQD8LlE2sJDHmDvJptJJg2poOS31X%2FRo%2FLkxM7Ojkwkj6gIhAMeazllOZsURVdw0loP3ZDBIvB9KKJQ1TLWXkIKImnQ5Kv8DCDwQABoMNjM3NDIzMTgzODA1Igxk9ErLcuZ4cNYaSLEq3ANRPoHscovEqZlDI5CrWV9R9NKj8nJDSELEjaW9gd3lftNSQHCLrmmuwbj3czq93ja5W7xqhVPAOSG0b3BMWo5A0FDz2oPNXg2%2BG2pU5a%2FRbmdQ8%2FMMaU0%2BRwRIo8dKnIU3vwfXyDTXfUcJH2Jj7rYuwswxsKU3hnVySHTKtcMAbBvVkq1BNY4wgVzLNw85FFZ0Z6RjaXQvpBvcwUklwNEVjDESNUemgcNqZWTuiyjWygwhDUbygXXBWrmB4E%2BQeJ%2FVsNJ1l58INPyPHnX%2Bwyd3Vy1G9dr0WY1DNnTA1WgTu0dCqIaqw1m6fWCvgiz5Z%2FvEuHc9u4hYCY97eM3IVOrKdImZqW8SwfP3%2FLTRhGAh7Y61kDLA0oKiUvcZNm4tRuL21H8DYazVmTwJrgJWODPj6KAM9MJILL0u%2Batsy5TZFcNWccXsHdNRbPPuVYitjepd1yOCfrzhVZOiPWhusXo2G5ayQO9%2BzYdmZYe4b7LI06KNK11Hrrx%2FSkaat954mxkH3KvxNxEnUn%2FBO8Cjp%2BWqr59zUzvQ3vfYLDa%2BAzYDgtwNxuqNgpA%2FZCWcmMEbbcLf%2F6DnrX4yDrJAATC3OcFlUTl8zl%2BvvBwNsRtR%2FUv7MIggTviEJDEPSvg8JzD%2F%2FdbDBjqkAXyVLnbKKZgO2rkbHdj902gnNhCAkBrXSPC66bvDZMi4aJTd34jlmc2oEnsxy%2F6F8sRaR0tZ8eJhNilkpOjUn%2Bobq%2Feb%2F0RyUgWzhIKekEqoUFk%2BUkEYIcLBEcGtcgA0pWnz%2FrplRObmJekZTsQQpBhVWd6BHKL5gofFn87F8b6JBrSK6PLbYZ5akmpDS79kKcH1OaUUeNmoipD6tUtnpsCSKmTP&X-Amz-Signature=5f2d2f0de87d8133a0954161aeb9256a186dd7d3ee2d1b6349b8c7c74ff511c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2PEGG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCIwQcwQQ7tCrB%2BFrmRc%2FM7ijvmdzVRuVQog%2BLu3BsBSQIhAPRG9ArYleQebf02kHpNO2nIMuyaiGtuRJ0MAOb%2FqeizKv8DCDwQABoMNjM3NDIzMTgzODA1IgzlR7mtzv3ana9vckIq3AP3%2Fniho1gx6ZRZuKlYPRSO%2FFavy7YG8MWkWqOgExqiaRJTmfsXSN2Y%2Fa3o1bdlWFR%2BeQVYGKMXwN8S6P4CFfvwDjX%2FUX2E37fLy%2Bdvhm6WMB4R2tkYYom2o9j1i5dnFlF24u2fymKAW2vIm%2BdrSn6oC3W7RgUPDViCu4EUpYQPUhKLT%2FeoJhMV3byudms9kqjKlq55ixPjF1DKBdlglnKUHkEXnoC2TrG%2Fe8ficGuLzuc3RSrTRFhTSOAW4hs8zl7tsIqVcb95ZIV0RhQJENKtH%2BJyoYTvqkNVHHrBSjC12pQ23XgjOskirGXElgIimHO7%2BBMRd4mNAodpCiXFl7ANZx8ELGPRRILmpJgvzNG5%2BkdmJF8ytgkPhJoEaspc57%2BNfa6bBVmRWrmMAOnCvx96zKthjMZu2wWd26S%2B9qVkn0RMclbQEVXLNIKHE9t%2Fpk8Hsx5h%2FPAexa7YtvW91R%2B87AJfOoWCIHvCbW4z%2F%2F%2F9ap95ecNaKoqtc6QV%2FZIHNLVv8ihISns1lJ9ANsNzSTSjz%2BihHSJAK0qIHYoxOgLQOxxGeR0WaENyvAiaqP3hnJowggGa3OslBwvkvipt7DOR%2Bx8iNkCDg8t7fjapGd4CdAyOlnt5%2FEV8ej5MLjCz%2FtbDBjqkAbAkswUgMxqWI5B6YbakIaL9Ze39B9kUqFUMJoe7Fw00wL%2F1QlGqQPzh4YTqXv2SzKNtx8q0H2%2Bps1xCekCQitnQ%2B%2BE2mnvRsjStb%2Bv%2Fg8HwTmdNtHZX0ahYov%2BTzMhuaTdZrPr1FY3LwctW1tcywD9v7dNIBr6UEQjW2B%2BHavTVskT8ifmO0q%2F3F%2BYucP0ilzT%2FH0qecA9YDUSeXE28dgVvSMrT&X-Amz-Signature=2bf75934995353e78ef925d8e82b6f45963911b5781358c12ce7d35d98861e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
