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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTS5VT6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGWzWVEJRb%2BP%2FVLzWnGjI6a4Cm1eEoDbOiSsCAWul4MVAiB2r6DUWvKepc%2BakB5rZCYg%2B5pCmk8nmrm0tPEzZffhcyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMzvcI5VpLZgXJxvDAKtwDD9Sqp4Ija4hsOSHj7DbmpW5mY42ULrDgFlBoaa02c9XvYz1gPB4qJDEOn4QWkXwJj%2FJvl51IZVwm%2Blh7iNZCbQebcEro9jeVLMzfAju7fDwWriq20vi%2FzqkekFTb0L70nCkFKrnVcJ5vOPB8RRBc4UGTeNYeTwKWHExYp6p6LmGFhUeDvbJRiAf34EN8jgon5CV7LcwQ5d5pEVoJIwGlVZYiPNlfiO6TBzJvVxDmdiD1i8h6tcqCx%2Fi3S8dkmkPxzYERTqV9s1H4pP%2BrdUnN5o6WYDEmEPDqp1E3AgnC5VOpcIdxYXYg6j3Ok5mTOPK91LphsBAFT3YrSawUeWNC2Js%2F%2BGfnRErg%2FiN%2FQ5JaQXqYXv9T%2BCGox7mh3fvMFGciXVMBFQBETSxbgWufzOUHGANBstzp0byZAEphk2NpLy9NY%2BvSwVwDgBEfY0ePiwO1C9pR%2FPkiK5ClBrKti4zx%2BWHU%2BU7JsxAuVSORS1CGJuCnl3%2BXSFt3XGOx2Ciek7sccKzn1le5L72LDzMeu8AVmd3mpyshd2TL6yDWNXjUO7%2BOiTIXQxhdfK%2Flfyemj56Yy5DnepJkVjREK%2BN2%2BRAUUDqSrv6ORav%2Fvfktj6XeIM2%2Bl%2Fx%2Fa5Sv9GxxWpAw%2FaGSwQY6pgFy07EQRR3e3eafftik7mGa2ZQrWJKSViw22konmySxZQB8Zj%2FODJxLfcONZgBiJ0ylFAGI9oRqbHXBOA6Ey0zfZw%2FYDW4w%2F%2B4n8QkkTJ33s%2FagK4edlmEN2syJdSxRyDx3GiX%2BbQuCrtcof%2B5FNKj430rqBgnYTuShsjmzw0j9uDf5QtZfPB8jHt8Jo9nXQLi7w9KsDavqv581r8ZWGaFxGcXAA15E&X-Amz-Signature=473d86e8e19a552a88d25d53740448bca02cc9354b817c61be68045284ef87af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTS5VT6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGWzWVEJRb%2BP%2FVLzWnGjI6a4Cm1eEoDbOiSsCAWul4MVAiB2r6DUWvKepc%2BakB5rZCYg%2B5pCmk8nmrm0tPEzZffhcyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMzvcI5VpLZgXJxvDAKtwDD9Sqp4Ija4hsOSHj7DbmpW5mY42ULrDgFlBoaa02c9XvYz1gPB4qJDEOn4QWkXwJj%2FJvl51IZVwm%2Blh7iNZCbQebcEro9jeVLMzfAju7fDwWriq20vi%2FzqkekFTb0L70nCkFKrnVcJ5vOPB8RRBc4UGTeNYeTwKWHExYp6p6LmGFhUeDvbJRiAf34EN8jgon5CV7LcwQ5d5pEVoJIwGlVZYiPNlfiO6TBzJvVxDmdiD1i8h6tcqCx%2Fi3S8dkmkPxzYERTqV9s1H4pP%2BrdUnN5o6WYDEmEPDqp1E3AgnC5VOpcIdxYXYg6j3Ok5mTOPK91LphsBAFT3YrSawUeWNC2Js%2F%2BGfnRErg%2FiN%2FQ5JaQXqYXv9T%2BCGox7mh3fvMFGciXVMBFQBETSxbgWufzOUHGANBstzp0byZAEphk2NpLy9NY%2BvSwVwDgBEfY0ePiwO1C9pR%2FPkiK5ClBrKti4zx%2BWHU%2BU7JsxAuVSORS1CGJuCnl3%2BXSFt3XGOx2Ciek7sccKzn1le5L72LDzMeu8AVmd3mpyshd2TL6yDWNXjUO7%2BOiTIXQxhdfK%2Flfyemj56Yy5DnepJkVjREK%2BN2%2BRAUUDqSrv6ORav%2Fvfktj6XeIM2%2Bl%2Fx%2Fa5Sv9GxxWpAw%2FaGSwQY6pgFy07EQRR3e3eafftik7mGa2ZQrWJKSViw22konmySxZQB8Zj%2FODJxLfcONZgBiJ0ylFAGI9oRqbHXBOA6Ey0zfZw%2FYDW4w%2F%2B4n8QkkTJ33s%2FagK4edlmEN2syJdSxRyDx3GiX%2BbQuCrtcof%2B5FNKj430rqBgnYTuShsjmzw0j9uDf5QtZfPB8jHt8Jo9nXQLi7w9KsDavqv581r8ZWGaFxGcXAA15E&X-Amz-Signature=d7823d79229e36ab1e0a1aa857bb73b43bd67736481a0a618ae33c1d0ce2b7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTS5VT6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGWzWVEJRb%2BP%2FVLzWnGjI6a4Cm1eEoDbOiSsCAWul4MVAiB2r6DUWvKepc%2BakB5rZCYg%2B5pCmk8nmrm0tPEzZffhcyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMzvcI5VpLZgXJxvDAKtwDD9Sqp4Ija4hsOSHj7DbmpW5mY42ULrDgFlBoaa02c9XvYz1gPB4qJDEOn4QWkXwJj%2FJvl51IZVwm%2Blh7iNZCbQebcEro9jeVLMzfAju7fDwWriq20vi%2FzqkekFTb0L70nCkFKrnVcJ5vOPB8RRBc4UGTeNYeTwKWHExYp6p6LmGFhUeDvbJRiAf34EN8jgon5CV7LcwQ5d5pEVoJIwGlVZYiPNlfiO6TBzJvVxDmdiD1i8h6tcqCx%2Fi3S8dkmkPxzYERTqV9s1H4pP%2BrdUnN5o6WYDEmEPDqp1E3AgnC5VOpcIdxYXYg6j3Ok5mTOPK91LphsBAFT3YrSawUeWNC2Js%2F%2BGfnRErg%2FiN%2FQ5JaQXqYXv9T%2BCGox7mh3fvMFGciXVMBFQBETSxbgWufzOUHGANBstzp0byZAEphk2NpLy9NY%2BvSwVwDgBEfY0ePiwO1C9pR%2FPkiK5ClBrKti4zx%2BWHU%2BU7JsxAuVSORS1CGJuCnl3%2BXSFt3XGOx2Ciek7sccKzn1le5L72LDzMeu8AVmd3mpyshd2TL6yDWNXjUO7%2BOiTIXQxhdfK%2Flfyemj56Yy5DnepJkVjREK%2BN2%2BRAUUDqSrv6ORav%2Fvfktj6XeIM2%2Bl%2Fx%2Fa5Sv9GxxWpAw%2FaGSwQY6pgFy07EQRR3e3eafftik7mGa2ZQrWJKSViw22konmySxZQB8Zj%2FODJxLfcONZgBiJ0ylFAGI9oRqbHXBOA6Ey0zfZw%2FYDW4w%2F%2B4n8QkkTJ33s%2FagK4edlmEN2syJdSxRyDx3GiX%2BbQuCrtcof%2B5FNKj430rqBgnYTuShsjmzw0j9uDf5QtZfPB8jHt8Jo9nXQLi7w9KsDavqv581r8ZWGaFxGcXAA15E&X-Amz-Signature=4f06572eb5955efb0f02ac1b5b361509d654d1bef396a92b2b9d7c5a940b4fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISZUCM3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCNQiUyKXDiiKwu4kxQIvprwMaTbdXBqOKNGJbnkajI9gIgcOIjkln5tVUW72deqvCw%2ByvpTW7iLlNyq%2BEVRTYCdTMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNKeri7mWSdr1%2FcB3ircAziSU0BMk9ZCndSN4ofZuXy4GHeOAHjlCqBXw2H7oJu1H7N%2BbG2BoGYTErNihNhhllZr6BQPpyqjUN6mw72iNqvsm4BFKtNtSExY6ipm8TzwAa21yNa97H5OjQ%2F2BxySF0NwoWTYPfz2y8lvHgwgoYl5tkjxnH8H2z7J03GHxyG7E94zfv3cECoVEUl2puLTTnP0KpI2kgQ7fzRoCvls5%2FpmbOCoHi5D4TiEqK6W9Yji2qCboBKxioZuMXUs4Vwf0Jm%2F2o0fCs5urNPzwgpiuE6EUBZNkOEJ3TNkdYYVrCq97q7Ms%2BjZ7qacibbYMfCxXqSkCEQyBXAH%2BTiDCBeDF7d5Fbbhc2iKI4KCQUCitSFXScjwgq%2Bqhs2a36sx9vJO2fGct9IAOy%2FuYaKsmxlZY0m8Q7onqJAWyImHLhUJKSUTQ5wRwKkeS2zyBqC42PixCkyvaf2ulXMcZvLmtXUJXwfoA%2BsQYowDrCHKAgCeOX4ibRSpiQLQZQ5jLjRJ%2FXDGaAg1F8WyvXyP7M8qQaVo4x%2BAvcvCMRmIeMpgOFFs88nWdSvjgSHoZJUD69GHtzlpy1syY2Zm7moVT2fK18betTxgScIcXL9TJbZ%2BN6zlZpUcvEPxZLbNf3Z8Zxj1MKyhksEGOqUBwNzhcpYsAW%2FYLiVbyct8a4GO5qCbLJFxQKj5Vz6QFT%2F7BgsDuCFCCr40WzAxv9grul6VMrngGBydqTqohbmBkOVJ5a6RwsEppXHjnoB9JI4bR7UutzzjvybhrWPEd7IjrxQlzDutQATxJMs1Yqd1YfcbRwjIgaCqfFkqTVV%2FinLXQqZ7POcqH%2Fg0Q0sTojO6wMsZGyXjmDJQn4jhqnjVe6ULdrXz&X-Amz-Signature=9b6258fcf68da095c801f21fe53392a64ffa9a24cf349ecc7568b87e7be98feb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF54IBJV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9mGlFw7AvWWu1X7FwsSJ9HJxwu%2F7xUljrnm4Zij8cvAIgCCfhFmxMlSCFPA7TP8M%2FPvm0ROOomFrh6wPmgS8Diysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBHG444PUqyZ22fzzCrcAyJgetcDyCSFWkY8ysARxNgt%2FmcKNE%2BNZ7%2BnZUIgoMTrEnN%2BPu8TVeIJwreLUowJGPlB3VaMkfVEoKlsXV5Rndkt2pdYwgngMyxWUeMWUN05a1e%2BPEZhjvbfEJpM1RY0cXdYe2CjdIw5VwCMqTeE7jVSVxL1UXNZrT%2BF2vbf0egX0%2BXOG5QJ4GnSVnMpyd41yzJ4S1hwjosSKHU0zFpXWRdUu6Q8qRW%2F1ac4b4pdFvYd8hof9h6M3FujoCP9DxtIdTKgdwCkiibzTxnV95QCAcTA7bJ2fhXuTV%2BaR89Vvy3t1mFSRm0bP2xvHjmd1GFl07XasuET62g6X9jeURdrgyEfDoiQyAdRqG%2FSiWYde7vbbjEw%2F%2FzBWKGH2hHAf1vSHH8xH7RbsYoqDIeWHtM8shFCaPzkVDX%2Fwzwl3IU%2FO12kqroigEPGMeBswqd3AqTOsAMPG6fp%2FbFeP2Z%2Blj%2FA5dxOgaKF1JBzPM9sxVLIQC%2Fd8vcJzDdWSepG9crNreXiDzUVx%2B5NcILVVKK8akKvQoIWv9U7DUqO8Nd49Yp2eoexipKJmfkQ1KENFXFAfkOBGiGzS7vBtqH4kgS2ozoCeCcaJ6JDuWD05HajLQvU4lMrrc%2FWAJBFcKombkikMKmhksEGOqUB1WA3KyY2F1avFZrmzYhrlwz4o2dD3GBSQ1UV1gqeTu9WYfSHoZs38uX4zhS9OIaUCccpaaV9M1Uf8lPB%2By4ROb4Gd0lrff1Eaq5zYErNuXiQiUu7jIh2NEvy5V9kKEIJPBJ95BU18IVbqAhJ2moyQtNqR3O8DBcTR6D8zTrZogJNYMc4R9CDpnlZq%2FAZUIyQzX5qg58BSzbA0IncOXFZrPLcdxDC&X-Amz-Signature=64640b19b2ab60a4614632ab671b549f39cf8da748f82d900238c1afa50e78c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTS5VT6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGWzWVEJRb%2BP%2FVLzWnGjI6a4Cm1eEoDbOiSsCAWul4MVAiB2r6DUWvKepc%2BakB5rZCYg%2B5pCmk8nmrm0tPEzZffhcyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMzvcI5VpLZgXJxvDAKtwDD9Sqp4Ija4hsOSHj7DbmpW5mY42ULrDgFlBoaa02c9XvYz1gPB4qJDEOn4QWkXwJj%2FJvl51IZVwm%2Blh7iNZCbQebcEro9jeVLMzfAju7fDwWriq20vi%2FzqkekFTb0L70nCkFKrnVcJ5vOPB8RRBc4UGTeNYeTwKWHExYp6p6LmGFhUeDvbJRiAf34EN8jgon5CV7LcwQ5d5pEVoJIwGlVZYiPNlfiO6TBzJvVxDmdiD1i8h6tcqCx%2Fi3S8dkmkPxzYERTqV9s1H4pP%2BrdUnN5o6WYDEmEPDqp1E3AgnC5VOpcIdxYXYg6j3Ok5mTOPK91LphsBAFT3YrSawUeWNC2Js%2F%2BGfnRErg%2FiN%2FQ5JaQXqYXv9T%2BCGox7mh3fvMFGciXVMBFQBETSxbgWufzOUHGANBstzp0byZAEphk2NpLy9NY%2BvSwVwDgBEfY0ePiwO1C9pR%2FPkiK5ClBrKti4zx%2BWHU%2BU7JsxAuVSORS1CGJuCnl3%2BXSFt3XGOx2Ciek7sccKzn1le5L72LDzMeu8AVmd3mpyshd2TL6yDWNXjUO7%2BOiTIXQxhdfK%2Flfyemj56Yy5DnepJkVjREK%2BN2%2BRAUUDqSrv6ORav%2Fvfktj6XeIM2%2Bl%2Fx%2Fa5Sv9GxxWpAw%2FaGSwQY6pgFy07EQRR3e3eafftik7mGa2ZQrWJKSViw22konmySxZQB8Zj%2FODJxLfcONZgBiJ0ylFAGI9oRqbHXBOA6Ey0zfZw%2FYDW4w%2F%2B4n8QkkTJ33s%2FagK4edlmEN2syJdSxRyDx3GiX%2BbQuCrtcof%2B5FNKj430rqBgnYTuShsjmzw0j9uDf5QtZfPB8jHt8Jo9nXQLi7w9KsDavqv581r8ZWGaFxGcXAA15E&X-Amz-Signature=c5bac0f4de4d1a3772b668befdd07e5125131d58fc647095c0c0f09ad8f94fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
