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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KYQI5E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDPxm%2FYhSqWnQw9nUNB1%2BZulj%2F%2BrwxW%2FUg1U0rOQxESxgIhAM%2BzvB0GdPzxalBkzpDkpu1pLYOnrjgq5Del3uz87HwxKv8DCCsQABoMNjM3NDIzMTgzODA1IgxR743H7nmPrA83%2B0cq3APSWK3CUZ%2B77Lo8Tir4cLXp13Y1yD43eSicfZBxBABqoZSvUX%2Bb0fY52dTpFgZO9nToN9Nf3ERq%2Bqbo2VVm6gGLMZ5GpeD24VBoGibAuUWoa8%2FwunPSh%2F%2BIDeWvv7oGAui6czPbnWFvuU%2FmcPyath5B3vQnXB5vQctjG%2BzQc9n6uEdDNTX8et2VYJocJ0Th5W05%2BEh%2BvzY9hBl06SjNEb6mtz4nU77%2FlVVux9fiTB9ka94NDKU6BhYa%2BH2JOixLQ%2BEegMm6%2FtRKq%2BCS4mFj47nTqZ0gSl%2FxXu7NIJmEYTRYLmSg5KNXIgktTWWoysQArW3YpXK6iAveTGUckiGAsnR6%2FSpv5uR%2BhwhyHU6GOgiGoRH5Y%2B6cFzkFSqmfZmQ3zmUksrCFrZ1b%2B%2FqbI7f%2B6lv4LY1NNhTCjJhf8HkkYjHvoe%2FVuxxiyL7ZZhVxA8Y3I90pw81kPMGhfXWMnmACV3RViWk9PMZm1nC5%2F2WqC3xJD3J7OwSp4CHNJVf5h%2FSKxTAVmA1FzXqRjCBSqgQq0vvSDDHqGsYa%2FMYGE%2FS3pmqaAzTFCBTtaS41uk72kXdaR5JdTtv5TzCTOazKc9%2B3XknN7ofFsmz9zM4%2F6RNeHs2H%2Byr1f%2F40eagNZsTM0jDjsby9BjqkAcPwNgkdqFVfNsdGzahAq2HgMRFPFcVP1dUR2mLhVROyOLjvGgR6Fedbb94VyyCMAtj8%2BML3kHksYHAv%2F4RdBsW3HtDEiQN6uEiOILoY%2BwFP8uEfLnPVwgSrWIa9iGzG9ruxvifVEmjNXA6pjn0WMKdKCmz8%2F2w03OnJCOAfZPE1mrijksYiWHeQ%2BgHcdcyGI8pUU72ujpP%2B6F2r8E%2B5KxYhjAYr&X-Amz-Signature=9e29ec54c0f0e92c99c21ebc19b9d1ce3f43b7f387204bf21b7ebfa6c48e1521&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KYQI5E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDPxm%2FYhSqWnQw9nUNB1%2BZulj%2F%2BrwxW%2FUg1U0rOQxESxgIhAM%2BzvB0GdPzxalBkzpDkpu1pLYOnrjgq5Del3uz87HwxKv8DCCsQABoMNjM3NDIzMTgzODA1IgxR743H7nmPrA83%2B0cq3APSWK3CUZ%2B77Lo8Tir4cLXp13Y1yD43eSicfZBxBABqoZSvUX%2Bb0fY52dTpFgZO9nToN9Nf3ERq%2Bqbo2VVm6gGLMZ5GpeD24VBoGibAuUWoa8%2FwunPSh%2F%2BIDeWvv7oGAui6czPbnWFvuU%2FmcPyath5B3vQnXB5vQctjG%2BzQc9n6uEdDNTX8et2VYJocJ0Th5W05%2BEh%2BvzY9hBl06SjNEb6mtz4nU77%2FlVVux9fiTB9ka94NDKU6BhYa%2BH2JOixLQ%2BEegMm6%2FtRKq%2BCS4mFj47nTqZ0gSl%2FxXu7NIJmEYTRYLmSg5KNXIgktTWWoysQArW3YpXK6iAveTGUckiGAsnR6%2FSpv5uR%2BhwhyHU6GOgiGoRH5Y%2B6cFzkFSqmfZmQ3zmUksrCFrZ1b%2B%2FqbI7f%2B6lv4LY1NNhTCjJhf8HkkYjHvoe%2FVuxxiyL7ZZhVxA8Y3I90pw81kPMGhfXWMnmACV3RViWk9PMZm1nC5%2F2WqC3xJD3J7OwSp4CHNJVf5h%2FSKxTAVmA1FzXqRjCBSqgQq0vvSDDHqGsYa%2FMYGE%2FS3pmqaAzTFCBTtaS41uk72kXdaR5JdTtv5TzCTOazKc9%2B3XknN7ofFsmz9zM4%2F6RNeHs2H%2Byr1f%2F40eagNZsTM0jDjsby9BjqkAcPwNgkdqFVfNsdGzahAq2HgMRFPFcVP1dUR2mLhVROyOLjvGgR6Fedbb94VyyCMAtj8%2BML3kHksYHAv%2F4RdBsW3HtDEiQN6uEiOILoY%2BwFP8uEfLnPVwgSrWIa9iGzG9ruxvifVEmjNXA6pjn0WMKdKCmz8%2F2w03OnJCOAfZPE1mrijksYiWHeQ%2BgHcdcyGI8pUU72ujpP%2B6F2r8E%2B5KxYhjAYr&X-Amz-Signature=6c427e3c04a730fe32c16c1fd760b93781e44ad1faa46258d6357ef5a0eec732&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV5X6JL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCr%2FmmxavE5m%2FbZT0r0MAObCjhDIZK5aeaU%2F%2Bbk8%2B%2BcoAIgRJT7Ox0ZzZi0U8FTahWwcQ3UIjyoM%2F8mIOEK17McQmIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCxVkLMWfZ75kYNQzircA8IJqtaAR%2Fqh%2FA7O3D%2FmM3%2Bkavbi35dwTFWVK5PJ%2FUPuY%2Bh%2F0MA02SOuLoSw0Ahp%2Bo5wek9WhVW7bI0yAyuu9HNaefIrCIFPLw3Y22FUrhWsSHX%2FSoteWWc%2B2Kfb4bdlWdM65XLP8hxswhltABF%2F8ggJuEUmwWUTIHIJU8AqUFMv4OIRoc4ocrF5ftI8RGnQkcjAGSWCc3jw1UZBu%2BIomX4mri%2BNgqsiv12MDw4gwYfw6dGTGvGqNoEueS%2BxwsxaBQ2IHYIuicrAbpq6F4HsDf63yuNlNsn9YhTGyLk2GxP6yUv%2Bk7jo%2F9DGCj3QPZtO84%2BO0paB0WduLeEPdUTtvcS1mx7EoVT2vIJRzvVoVAxaDZn3JJBEceraIFk%2FYCtzf7vU%2BM0eXBXvSPKrLHrMXk3tWbD7T6EaKoKjNqzOWJja0l7IT97ghDHYHhwnarWYYW%2B%2FX0bVwzuNuHKqqyYuhKF0LKnFYXOZvngNSU1yjsyLkQeRTvY%2FlF1wJ4KihzRE44ne60m9k1%2BZgPzZ69mkCy8e%2F%2BfIOVrmrAzVcyMeDiqv3qO1VbRV15QX3u2Ns%2FbjBpGc%2FblcL%2F75CZeRJwvGykB%2FVWeLrG1lkcb6bOpfkVTXSUpgWrchPbM7OdhqMKixvL0GOqUB%2FTh73julfXSNE9wKX%2FMWWgufkjbiU3MvsaKQQoa6dKYNzafICuvEHcMNGgSAj4Y7aB0%2Bq84%2F%2Bq0t1QnduMwYgBYyjZlPjb3mA3P8z5EIk3Cyf1SxsfXdVL48BgsHER91gKm%2BCxlWi%2FG%2BfSo7Gr5sXCJiPCLfgEpTmGJbkUs%2BXqD2BGtk45SGD%2FtaV1D0QzbxVsp%2FrDh%2FcRF9AEQIY5jioVVt4I%2FH&X-Amz-Signature=6014887f393372dd59ca36e1ba06e0072695392e2be36e282c3904c43daaf6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETEVOAY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDPSZ%2Bry9%2BSsXb0%2FLZtx1nE4ltmz1Z4XjM47jEJ38PgvAiEA%2FeOZS%2B0e09QjbH%2FvhR5f4gwJIj%2FACWpOcxOeHvZ6pugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOu5zHtPQ6ONyVOZ0SrcA4iZKl4JU7vyhzwCVQtss02XX7TAxVSXQbdbHXgggTH0bnb5My4Y%2FVay4yqkElOdd6ihI21skl9v6TF%2FbYCB56%2BUwRzZb6zAst3q8XiMiAQwjNqBHbL%2FF45A5zbwlBLtsC5oHP%2Fl1Wghd3d0fUTUkTf7LGcNQVCGvB5sEYutgidFauwRoEaY66JAwpv%2FZjP2pjluwUr9lmyMe3RCWJHd1vbj%2FbbUlURv%2BLdMzMMFCVwuV%2Bmxs8j6eRIqPF44oZArXUxeDxl6xIJfJQbjH3nZ5Y60ecCNgxDNwnqBkbkHoVprFgd9AUhStR0acONnqAt%2BBzwJ1pTucwDqQuM%2FSMj7qF3e4%2F9oFY8C9f%2FkpEovg6QcXQXgvZrNMC%2FP%2FhEXdfIy1pfjqCS0DKnwua%2FVfvRLhBHFVWVF8%2FxlsrdfEwfaWndkkUxOQYcypFgXtbRla%2FZbch3OtX3w5MAMjjnxAsByi3iGWY%2Fj0SZT3Uq00spaW9B%2Fynv7J1hID7duywLlHU4EVpOhYdpRhRKbxw1Z2%2FQJNAwt0pM0Z2tvuo7h0Xa1i6b9v3Fl5E3lYDNWKUqVk1ttGdhVbOZIPi2%2B%2F6XoK8IgaUB9GF4bNeRzIUwfeOQ7SIlTZatQ535By%2BALyjFWML%2BxvL0GOqUBcnukFkXvDDxLpCgG3snX34juP6Bg%2BwCcbUH6k4yRev32gc%2Fv2HbPnAUoLwfGN6p%2BXhlZPwuWFbvLr0dSJ1HW7VSkVLe%2FpfiXqxh63hHgOIM3XhwR39VidjXc27lG4znzkl%2BNLQNSv3jZzmOWDb6%2BNuMZQgmBJFNA%2FXRB4i7daNBByAtElkhF6gCTzPFYzp%2FmPXhh1nP0id%2FijRRHk1A4j3qry9V5&X-Amz-Signature=209580c0af80edb4f1db6b0e0b61b9fa22aa0b87d39e436a9bc7472856a3cca6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KYQI5E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDPxm%2FYhSqWnQw9nUNB1%2BZulj%2F%2BrwxW%2FUg1U0rOQxESxgIhAM%2BzvB0GdPzxalBkzpDkpu1pLYOnrjgq5Del3uz87HwxKv8DCCsQABoMNjM3NDIzMTgzODA1IgxR743H7nmPrA83%2B0cq3APSWK3CUZ%2B77Lo8Tir4cLXp13Y1yD43eSicfZBxBABqoZSvUX%2Bb0fY52dTpFgZO9nToN9Nf3ERq%2Bqbo2VVm6gGLMZ5GpeD24VBoGibAuUWoa8%2FwunPSh%2F%2BIDeWvv7oGAui6czPbnWFvuU%2FmcPyath5B3vQnXB5vQctjG%2BzQc9n6uEdDNTX8et2VYJocJ0Th5W05%2BEh%2BvzY9hBl06SjNEb6mtz4nU77%2FlVVux9fiTB9ka94NDKU6BhYa%2BH2JOixLQ%2BEegMm6%2FtRKq%2BCS4mFj47nTqZ0gSl%2FxXu7NIJmEYTRYLmSg5KNXIgktTWWoysQArW3YpXK6iAveTGUckiGAsnR6%2FSpv5uR%2BhwhyHU6GOgiGoRH5Y%2B6cFzkFSqmfZmQ3zmUksrCFrZ1b%2B%2FqbI7f%2B6lv4LY1NNhTCjJhf8HkkYjHvoe%2FVuxxiyL7ZZhVxA8Y3I90pw81kPMGhfXWMnmACV3RViWk9PMZm1nC5%2F2WqC3xJD3J7OwSp4CHNJVf5h%2FSKxTAVmA1FzXqRjCBSqgQq0vvSDDHqGsYa%2FMYGE%2FS3pmqaAzTFCBTtaS41uk72kXdaR5JdTtv5TzCTOazKc9%2B3XknN7ofFsmz9zM4%2F6RNeHs2H%2Byr1f%2F40eagNZsTM0jDjsby9BjqkAcPwNgkdqFVfNsdGzahAq2HgMRFPFcVP1dUR2mLhVROyOLjvGgR6Fedbb94VyyCMAtj8%2BML3kHksYHAv%2F4RdBsW3HtDEiQN6uEiOILoY%2BwFP8uEfLnPVwgSrWIa9iGzG9ruxvifVEmjNXA6pjn0WMKdKCmz8%2F2w03OnJCOAfZPE1mrijksYiWHeQ%2BgHcdcyGI8pUU72ujpP%2B6F2r8E%2B5KxYhjAYr&X-Amz-Signature=df78cd8c49d03ebfc13050a2558f1d863a2a3141720b4a034ef992b3d7b89e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
