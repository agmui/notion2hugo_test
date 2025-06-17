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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIMRMZ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2vEQ5rDwubJrtkEnRx4wqwIvdowSJj6IvIe4gNZF4yAIgH59GSWCUYzHpq6H4tvnYdNZ6a69MqzYBx9x%2Fnk6W6vYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF%2FDSxS2zdsEvCLaOCrcA7YMoa1wVXFaAor33fTlqnV0WWyYOyzecq87iDGxzkVRHP43m18hdHro7Qfwj7MCBX5Kp4M7ooU%2BWP7GV6tDldkXC%2By%2BkJIja%2B869xQ%2FBy2Zf%2F12WNM9tM5qEQ8WeYlx%2FhLAxNgUZ2VWyrTwxiuxAzn2zotJ9tdG0d8s%2F0JlBFolN6GkuB2Fj6HY8rHUrGAeTkOberD%2Fj9ItWkY1bLi5JcvxK8O%2FesU9E9qt562LLof1AGRC35asm3Qe%2B04nWCaR9SoaByIoc4BelJ1cEqMTgigZGXnPvPGu6yqlXzDimQgRoUGB4sv0jyYSr3Z9LZipQ4Vlm6YEks%2F345dsYUiVtlEQTTG0Dg9YV2YPciNYXT8myxQ3bWnG8XhDHKzcSRMx4%2FstdYeD5mXvvYfeBng04m%2BMxTG7hiWz6yFNy9vpzWC3p9ZdkxDRtdvK9BesWcNH7URHIV1j%2F%2FR0nzb7I1IToDEt0bHPzpzArjtAIUV0cPhdvjcDTRumbS04in7e3He5QiMUiF5sASKCNfdQZuaDgdLEl1RaMcFQa%2FtEztgXqRNoar0yeMj3NbJ2gpEymQa9VijUEXCvhkc%2FisjYqyyTMMO7IlK2aIqTZQNuS5K7N08cJmFSlqPNKsakkqntMJOJx8IGOqUBqIY7iQ7sg4cc%2BGNFE9VVbrK5pmSN0Wr%2BFuQRIzXuFbY3Pq2%2FXUjZXlSNGuaqTyG3BU44qoGQQbTigd%2BOZysQFvWBsPlbcGG6XfnQX38QsmrfrzQCV1o6%2FYQvBrm9FrnSc0xlFg%2B0mBMUKw7GtiEO5YVw4St0uSMCXzlIqUk%2FjJjy5ulryAEMCEm2FRRVjU5ZCEPqDf5TF0GRH%2BVQI%2FaXHNfIl8OP&X-Amz-Signature=6574728a01838f54cac96a8a5768148b7e4de9604d27234efe74f2547fbfc827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIMRMZ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2vEQ5rDwubJrtkEnRx4wqwIvdowSJj6IvIe4gNZF4yAIgH59GSWCUYzHpq6H4tvnYdNZ6a69MqzYBx9x%2Fnk6W6vYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF%2FDSxS2zdsEvCLaOCrcA7YMoa1wVXFaAor33fTlqnV0WWyYOyzecq87iDGxzkVRHP43m18hdHro7Qfwj7MCBX5Kp4M7ooU%2BWP7GV6tDldkXC%2By%2BkJIja%2B869xQ%2FBy2Zf%2F12WNM9tM5qEQ8WeYlx%2FhLAxNgUZ2VWyrTwxiuxAzn2zotJ9tdG0d8s%2F0JlBFolN6GkuB2Fj6HY8rHUrGAeTkOberD%2Fj9ItWkY1bLi5JcvxK8O%2FesU9E9qt562LLof1AGRC35asm3Qe%2B04nWCaR9SoaByIoc4BelJ1cEqMTgigZGXnPvPGu6yqlXzDimQgRoUGB4sv0jyYSr3Z9LZipQ4Vlm6YEks%2F345dsYUiVtlEQTTG0Dg9YV2YPciNYXT8myxQ3bWnG8XhDHKzcSRMx4%2FstdYeD5mXvvYfeBng04m%2BMxTG7hiWz6yFNy9vpzWC3p9ZdkxDRtdvK9BesWcNH7URHIV1j%2F%2FR0nzb7I1IToDEt0bHPzpzArjtAIUV0cPhdvjcDTRumbS04in7e3He5QiMUiF5sASKCNfdQZuaDgdLEl1RaMcFQa%2FtEztgXqRNoar0yeMj3NbJ2gpEymQa9VijUEXCvhkc%2FisjYqyyTMMO7IlK2aIqTZQNuS5K7N08cJmFSlqPNKsakkqntMJOJx8IGOqUBqIY7iQ7sg4cc%2BGNFE9VVbrK5pmSN0Wr%2BFuQRIzXuFbY3Pq2%2FXUjZXlSNGuaqTyG3BU44qoGQQbTigd%2BOZysQFvWBsPlbcGG6XfnQX38QsmrfrzQCV1o6%2FYQvBrm9FrnSc0xlFg%2B0mBMUKw7GtiEO5YVw4St0uSMCXzlIqUk%2FjJjy5ulryAEMCEm2FRRVjU5ZCEPqDf5TF0GRH%2BVQI%2FaXHNfIl8OP&X-Amz-Signature=e96db29956b1eb5224b88484fb8413cb9a73219f9061f431ee6fd4a9497d847b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIMRMZ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2vEQ5rDwubJrtkEnRx4wqwIvdowSJj6IvIe4gNZF4yAIgH59GSWCUYzHpq6H4tvnYdNZ6a69MqzYBx9x%2Fnk6W6vYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF%2FDSxS2zdsEvCLaOCrcA7YMoa1wVXFaAor33fTlqnV0WWyYOyzecq87iDGxzkVRHP43m18hdHro7Qfwj7MCBX5Kp4M7ooU%2BWP7GV6tDldkXC%2By%2BkJIja%2B869xQ%2FBy2Zf%2F12WNM9tM5qEQ8WeYlx%2FhLAxNgUZ2VWyrTwxiuxAzn2zotJ9tdG0d8s%2F0JlBFolN6GkuB2Fj6HY8rHUrGAeTkOberD%2Fj9ItWkY1bLi5JcvxK8O%2FesU9E9qt562LLof1AGRC35asm3Qe%2B04nWCaR9SoaByIoc4BelJ1cEqMTgigZGXnPvPGu6yqlXzDimQgRoUGB4sv0jyYSr3Z9LZipQ4Vlm6YEks%2F345dsYUiVtlEQTTG0Dg9YV2YPciNYXT8myxQ3bWnG8XhDHKzcSRMx4%2FstdYeD5mXvvYfeBng04m%2BMxTG7hiWz6yFNy9vpzWC3p9ZdkxDRtdvK9BesWcNH7URHIV1j%2F%2FR0nzb7I1IToDEt0bHPzpzArjtAIUV0cPhdvjcDTRumbS04in7e3He5QiMUiF5sASKCNfdQZuaDgdLEl1RaMcFQa%2FtEztgXqRNoar0yeMj3NbJ2gpEymQa9VijUEXCvhkc%2FisjYqyyTMMO7IlK2aIqTZQNuS5K7N08cJmFSlqPNKsakkqntMJOJx8IGOqUBqIY7iQ7sg4cc%2BGNFE9VVbrK5pmSN0Wr%2BFuQRIzXuFbY3Pq2%2FXUjZXlSNGuaqTyG3BU44qoGQQbTigd%2BOZysQFvWBsPlbcGG6XfnQX38QsmrfrzQCV1o6%2FYQvBrm9FrnSc0xlFg%2B0mBMUKw7GtiEO5YVw4St0uSMCXzlIqUk%2FjJjy5ulryAEMCEm2FRRVjU5ZCEPqDf5TF0GRH%2BVQI%2FaXHNfIl8OP&X-Amz-Signature=d1adb20988356e84e22453f67e1cd14d40d1c7f421bbed8e0158c15e1df1bbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOQIWQQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCST%2FpfV8UgrhZDmaaZXtlHw5KA4NzwkyCsewM2w1Q59wIgK7CHslTEAFfP%2FyO0xqtLw5Ge8GswruXZmJlJZB4StBIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNKkD65bC8NIZ7dyyCrcA831P3bIfu6N6pPcMeujhYMpWvJZFNw4Vp5C0tBPD%2BAKe6IebE6O896nyJjcXq%2FuM01TjM1WsnvgLbKoC5YWKVzceZM05ujvpW1f5aSQUMTJElo6DB%2Fo2trr%2FKSufSrQe%2BbZmZUkzs48INFe5S0pZqFZWkCO26Rim2CoMikMEVNIQ%2FUwyO8g7viMzQsiSycDsL3Mf5spEysjCaxvmxEwtBNWBdRPFORwisxIhZxR6gAYMnPpFVr5ctP0lEuxRrHVqigxayS%2FtfkTGwb2c%2BjshSWUGOIMeswWECzR5GN6e6z6w50HrsxO1t2WzYJLekPl9dPyYpfOA9OvUZBbMCuGNvcKnmIZHZPpcolPsFld78MSkLEsCY2EsEHwsLATFN5wt6lMLQODd1Hw5Vw5doxaJ3nbF1%2F03z3YhFZAeOAkGY%2BMVvpeUYhwPznjNLY227xyNCvx7gu%2FdV0TxeUNVd9XczNM3vlEXN%2FiUJ4B24cvSYp9kMhe9neUYwEiZQcyhw6YBi5EqeiMIzYb0%2BhbRSrUSLiobsFXn0EO7JoJBIP7JooAzl072sGPmu8oA9jTTGZbp%2BQMnPz%2Bp7H6XRDAVVolMr9tCqRdC%2FeIcIKNb8rNA072nGd6GiWqMrU4dNirML%2BJx8IGOqUBxqHdiocV8I%2FtGChvk1spkFTuLFHsEe%2FWf67EBPTnOvZ5AMih2AAGNYBPNZdMobwiZGTiLSfzxFM1lrrKrGTga%2FBxll6mCvs3%2B8Pos2xrmOUFy8IFxppZ%2F7X0ZUkqSwkE78eR%2B8izSosm3ySOYvifi4DVWKeHb5zCFKlqMkpRpPmVFVDPWExMCDnAjhyHtkIns32I8uNr0sNDzQoKyY%2FFRJnVNY%2Fk&X-Amz-Signature=572a51cf3dcc368275ca15a735cba3776a3f9edc16d8ae38c773d9b4358e8442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHYMOPY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC91c%2FLiP9JtYD568KZpPJN0EfrDd%2FhF42V22XtfzytFAiEAy9fkbIQlCyqfQlYAhw%2F%2BGbbf%2B6e%2BrDIV%2BOjbEXIWXFwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBJE4nY0e5IRQieq7yrcA0us53pTIN4ft2WYDK5C3HVFIbzrZCr5XoB7NXZgs7BeFkZvh5KlfdLraZre1RnwMUeILzObTRwpojIHg971gmmLWntROxUs38sXP5YFxZODXdLyQfTRAi%2Fm8hjxLwNPq4GnBlAljjYYiHly6PDANlfy5YDgR7tsqQp6iDh53iCOxVI4Vn9qOdTkAI5cWE0Ng3OghJLCpmyLHxyxPtYSx8urvZPiuMykkT7IZ024YMHr1FF9%2F%2FlC4gY4O5XJ7WsMalTkhiI5bntl7xi72mg6CMQpgYmhlt8tZFlrsL19hNPIFoziAfvO7vI1GNo%2BHSy4ofyYskfF7C6WbQutOQDromnWZe9M%2B0kQRInl2M%2B6s4aYCooBt8w8ymxS9kah73nY8FdQJwAxEADZxv07od9UxbyolMXGviYK2sWIvKGKy21QtxhTSZa%2Bu6VyqIKyN1O5LojHjEmPXdg5%2FHotXXGT6m51vyeeiFkMkRu90Oh%2BXHUlT09czhp%2FjcO5A3wMhDcCkX3GsoFDotjbIhaAcj1ZkCTXq7O1T7gv9v7%2F1FSgEKgI%2BlPM8CW8Gm%2BYOS%2F%2BYlMfbDytArZZjpGtUOMMPS%2FFEdAMZjznYl%2FBlDfqMGKGVx0G7BwucHHkpFNZm30yMIaJx8IGOqUBe8xcSeIxW98Kc%2F23jwgbW8Po5MI2HRRpWHEHTxA%2BUuMvWukT9oNJmo5lT7OZENQpQZGwPdhvCFT3SRht%2B5W4bmnJ7jGzCoEgrIDNoWz0rt23SvjT3sSVGKWW6U5xO9N30k%2BdVIZKYnCz0vq%2BU%2Fd8br68z3gILu1R6c%2Bk8WOG3g847EZp3%2F7KrDqCme%2Fu2%2B6Khf4Lf99ezL%2B%2BPhyHaSjhEY6kGc87&X-Amz-Signature=b3f1fccae4c886e164111098530c772efc768906e11787bc268cb91a19b9ad58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIMRMZ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2vEQ5rDwubJrtkEnRx4wqwIvdowSJj6IvIe4gNZF4yAIgH59GSWCUYzHpq6H4tvnYdNZ6a69MqzYBx9x%2Fnk6W6vYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF%2FDSxS2zdsEvCLaOCrcA7YMoa1wVXFaAor33fTlqnV0WWyYOyzecq87iDGxzkVRHP43m18hdHro7Qfwj7MCBX5Kp4M7ooU%2BWP7GV6tDldkXC%2By%2BkJIja%2B869xQ%2FBy2Zf%2F12WNM9tM5qEQ8WeYlx%2FhLAxNgUZ2VWyrTwxiuxAzn2zotJ9tdG0d8s%2F0JlBFolN6GkuB2Fj6HY8rHUrGAeTkOberD%2Fj9ItWkY1bLi5JcvxK8O%2FesU9E9qt562LLof1AGRC35asm3Qe%2B04nWCaR9SoaByIoc4BelJ1cEqMTgigZGXnPvPGu6yqlXzDimQgRoUGB4sv0jyYSr3Z9LZipQ4Vlm6YEks%2F345dsYUiVtlEQTTG0Dg9YV2YPciNYXT8myxQ3bWnG8XhDHKzcSRMx4%2FstdYeD5mXvvYfeBng04m%2BMxTG7hiWz6yFNy9vpzWC3p9ZdkxDRtdvK9BesWcNH7URHIV1j%2F%2FR0nzb7I1IToDEt0bHPzpzArjtAIUV0cPhdvjcDTRumbS04in7e3He5QiMUiF5sASKCNfdQZuaDgdLEl1RaMcFQa%2FtEztgXqRNoar0yeMj3NbJ2gpEymQa9VijUEXCvhkc%2FisjYqyyTMMO7IlK2aIqTZQNuS5K7N08cJmFSlqPNKsakkqntMJOJx8IGOqUBqIY7iQ7sg4cc%2BGNFE9VVbrK5pmSN0Wr%2BFuQRIzXuFbY3Pq2%2FXUjZXlSNGuaqTyG3BU44qoGQQbTigd%2BOZysQFvWBsPlbcGG6XfnQX38QsmrfrzQCV1o6%2FYQvBrm9FrnSc0xlFg%2B0mBMUKw7GtiEO5YVw4St0uSMCXzlIqUk%2FjJjy5ulryAEMCEm2FRRVjU5ZCEPqDf5TF0GRH%2BVQI%2FaXHNfIl8OP&X-Amz-Signature=b7de589cccf0b29ea6283b91c93bcf5cc3403ab2b78c6df57d67e8e074ff0873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
