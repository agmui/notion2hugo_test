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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q4RDPI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCeXfHHfU83jV0sv5UOMWLlZeQQJCbvP9pIeUe%2BCbu5AiEAhTcs5cRcE7v9P7EeaR5EgXAfPMbiL7dgBS3a5DuT%2FfMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNLskvX1bRI6pnLiZCrcAwiTQjU%2Fb%2BZxucnBkbVcfQBhN8%2FzkiRd79a9bv317qFR2VnrzRgZiZRS5sYTryx71cMjDvw%2FuYiFIjFZjI0%2BfQXf6VncfrJhHNEWPLFhsVjGSfGeqy6SnpguYQIaoyLLUp7J%2FMz3YLmEJ0Pxnrs2mgHwB9TjZoglvsFAneSpmL52I6mCqLPOzYJ6ZdZtm1g1eZOhCYEqso5RvPsck9uBlnqfX8E79Z7P2F0Th%2BiXKJ3dslmGwBBGs8RLAZsQjhWH93W%2FVpFF1aIlyTbQIqLLVjWiEmJbFKsecflRzDbGiY8KobmVOFwcuL2ati97rx3cqU98cUhvILVRBrLfObifTJz3eRhrx2nIhuzTtvb39q%2FqsDIUrn%2B02rPNOfNw5WpJEhDPNhaXXd7S8RNyHQ5bTBlR9J9kYVTFY%2BoO1N3rl%2B0fPksDUtQf8n%2BA3ScufjLRpoCjVryGScZfidONUym55WnTwUoR9dw2qkmDhxkPOkeWrFIZ1mvs91SV77ptNjUTwgatAWbdX93uiVz%2FcUL%2BdQwsx76ux6vtPmvwmYjtFhP%2FqHjI1%2FjbHCjE5uTo0mMvblzWwarx4we6M%2B43UmmRw48r5PfteM0eFHRKjU3Ey%2B5XRkP8fElZUpKQlDrNMPvd8r0GOqUBU7qykPea98HJBDslp4KPwp4KF44x5dIGav0lT4Tjv32oTcZZ4qPmC9M4qGK4l3KtiIkN6t2BXALBn8IHeulGoQSCnZSRuavdmwDvEGGt9%2By7L%2FqFhs7KqFvzNBfkxqx%2Ft9WzIhM4u61mwlLMVHyHWEetwhyaeXPm0UKQC2CT4u9DxwtGRP4zMUoameCpfIrb6DCn6CvPyq9qbhtvE4d7LUHJ3MwZ&X-Amz-Signature=f465bed8fa09cddf7d72c1313c83722ff7eb078cbaf493ab73f964667c06be4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q4RDPI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCeXfHHfU83jV0sv5UOMWLlZeQQJCbvP9pIeUe%2BCbu5AiEAhTcs5cRcE7v9P7EeaR5EgXAfPMbiL7dgBS3a5DuT%2FfMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNLskvX1bRI6pnLiZCrcAwiTQjU%2Fb%2BZxucnBkbVcfQBhN8%2FzkiRd79a9bv317qFR2VnrzRgZiZRS5sYTryx71cMjDvw%2FuYiFIjFZjI0%2BfQXf6VncfrJhHNEWPLFhsVjGSfGeqy6SnpguYQIaoyLLUp7J%2FMz3YLmEJ0Pxnrs2mgHwB9TjZoglvsFAneSpmL52I6mCqLPOzYJ6ZdZtm1g1eZOhCYEqso5RvPsck9uBlnqfX8E79Z7P2F0Th%2BiXKJ3dslmGwBBGs8RLAZsQjhWH93W%2FVpFF1aIlyTbQIqLLVjWiEmJbFKsecflRzDbGiY8KobmVOFwcuL2ati97rx3cqU98cUhvILVRBrLfObifTJz3eRhrx2nIhuzTtvb39q%2FqsDIUrn%2B02rPNOfNw5WpJEhDPNhaXXd7S8RNyHQ5bTBlR9J9kYVTFY%2BoO1N3rl%2B0fPksDUtQf8n%2BA3ScufjLRpoCjVryGScZfidONUym55WnTwUoR9dw2qkmDhxkPOkeWrFIZ1mvs91SV77ptNjUTwgatAWbdX93uiVz%2FcUL%2BdQwsx76ux6vtPmvwmYjtFhP%2FqHjI1%2FjbHCjE5uTo0mMvblzWwarx4we6M%2B43UmmRw48r5PfteM0eFHRKjU3Ey%2B5XRkP8fElZUpKQlDrNMPvd8r0GOqUBU7qykPea98HJBDslp4KPwp4KF44x5dIGav0lT4Tjv32oTcZZ4qPmC9M4qGK4l3KtiIkN6t2BXALBn8IHeulGoQSCnZSRuavdmwDvEGGt9%2By7L%2FqFhs7KqFvzNBfkxqx%2Ft9WzIhM4u61mwlLMVHyHWEetwhyaeXPm0UKQC2CT4u9DxwtGRP4zMUoameCpfIrb6DCn6CvPyq9qbhtvE4d7LUHJ3MwZ&X-Amz-Signature=227300b26b2a7ea997fc453743877b2e09ba5e81234e35d37c0f37dc2416fb24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REA4YTIU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNCDSePkXtbXsK2LHFjTSJnR0nL%2BfHmuvRDGGl4juqQIhAJHQv%2BxGDizNN%2Fjw9WMZMy48gSNHFPmWC%2BRa7l7XRG3aKv8DCDMQABoMNjM3NDIzMTgzODA1IgzRahqvF519lZoz9Koq3ANGRv5yMC1gqoG%2FZ7lmcfL8eGVU0cBsdV3AC4rIf22LvSNTJrMsrKy0UJl663dA156%2FDj5jQ6UAwzRxXfU7kkhy%2Fm058HRIclRR4ntwSZIm5bQ7fAUR8fmXfR%2F44WkmGqk6sxSKO8YCn%2FQDLR8Qj4HCqb71AM%2BMFxwC45FnuHq%2BIqsletq5th3WevLZZ55whBAuACBHE8ETK4UE590L6%2BSOmkB3raQbN8qZyJrXofWUqnH6m7NFX8i9rALP5DycelOaohE2kZWUVqb4g9%2B4AycyswDjerkV6i56uI9ls2JAgiI%2BpoyOTTAM8Kwlm3zIUXKOcua0m46MUiy9Xh5l1kSb6NN9mgNHVvc2aKr1D0DLPcKDrxAEc5d7yEaqwVxJQ44V2%2BCtG4OH2JYeyUQZu8oYra%2FXwlSXZ%2FNT05iAjfcKnY4zFnJ2iFg8lJ9j7CEQIS0Vj1hi7Fr3hnYvlUxLyFCGgBHS8yQiW1SC%2FlV5LZMsq%2F%2FaS6%2Bn3aRd0T450cifJ0VXcDm9XCeihV4UaKC%2FZCuW7IxJ%2Bg5mSsRKovRXfmSH1z%2Bm0L09aLRe04Xmi1UOYVB8ZtEeoqFUZigFr8zje8%2FVVl05cNQUz%2BrDh1m%2FC5bd0i2klN8WsYhehLA1zjDE3vK9BjqkAeAvn0ewWxJsXGqkTaYDsTWL1Ye65oJ1GxcE3z89Akc9iYwTX34PSxQpFb9%2BEWfaly1YUeGL3RyLW63RaBeZfe15hv6Cev3%2BI3wnlsWeDHwznaoJ14XON0EOge4ZmKbk05aOxJG%2BQ8lFRxjmwdeCdvQciA3Oe6YyQUBoT%2FlOe%2FRrLNKCa0QZ4HYjNEefcSxJs%2BoNzO1D%2Fzoa7D62VnT06bEHvUcR&X-Amz-Signature=c30a4704f28c10a1810fb7d10308cc9d01988c484bcc1a7b46d7b7e3906a83de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOPMKMF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDDkNEuEDQUFvnC%2FD3KzXK35aZ0azm7rRsTG6eutNK9AiEAlSbuS8h6O1VaVpYtFLn%2FECQxGray9C8VKk%2Ftlf37X00q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNpDQ9VVAbx1hGRnwCrcA3l30O6BB2CUSdXLg5gD7xh4Nwr%2BskGxdjeoFHOPHUYd2yxMuIOsbJ%2BU1msgQPKOswaZLORN5e5CAFeXCxt7fok7uXX%2BeP5HquwFQxntl0ms8KwstTPHJ426yNYCHvA2jSQNcJC0jz6wpyEjXy%2BTQxuMw9Hu22MVN0kDvivVS%2F6Oq1eEhliTBHIFM3qvep2yu0j3aLLofoaeT1DedOaqBaLiDiJiySQ9DnHWzBQqVaKzJFrv1NvJoFXQ4S0kw%2Bk%2FgolergI3FBnAc8fqQ%2FoC0Dx7yCmM50cLv5QzPhtVCMRvtm519Oras2%2F8%2BDGqqhtc9bfKzpIJTPp%2B5XDD3oNAb%2Fsr5jEVyuwJBqGS2dSc6sv4JukWQ78YLboiZ%2FIO5lsB50gq%2FN3UxJsMtembkvIYddxepfTMyD9Gwg9Ed%2FozLQBrhNkxaEdJNc1WPpBRbfuXNjmXpxoLsjGJXYHm%2F%2FH6hXGDSYL6naZBEGF7jGraZ9bkvOU03lxRFV3VdC7a00qAms5YkxBZ4XCy7apxDN9iGnQO4X%2FZJnY2aCLZ%2F%2FmMg6A%2BaWx%2BTfRh%2By9kw3WzBgAzfj%2BniT5eYoHClOgIR2PmW5XFtRNwmvCp5cfVMb0%2FMnHmyRELfMODG8nbFMAiMNzd8r0GOqUBCSLJ8ZP0b85hqSjh4uHjvTXVC%2BzncqyqmNcYBRR6tDJkbpgZjCxcGF4253j%2BqMknk5hVeyV8AhybBep7cj2S3hHKOsvF7bkwSUdUUUR7XEtWb0mvioCxwZ%2FLbmUoVWQq0DGMgnE03ICUZ8F9L%2BdpzpQA8aoCwNUkLZKF3nm%2FWsCbc13mS%2FoH%2BRXhvnIO2ooAIsIqdsKx0dfr4lfGnJLMo4u2UO2J&X-Amz-Signature=b30a9a2114e2388c3cfe21d3997477df92a4b893ab38b9a00b052eaa28ae47b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q4RDPI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCeXfHHfU83jV0sv5UOMWLlZeQQJCbvP9pIeUe%2BCbu5AiEAhTcs5cRcE7v9P7EeaR5EgXAfPMbiL7dgBS3a5DuT%2FfMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNLskvX1bRI6pnLiZCrcAwiTQjU%2Fb%2BZxucnBkbVcfQBhN8%2FzkiRd79a9bv317qFR2VnrzRgZiZRS5sYTryx71cMjDvw%2FuYiFIjFZjI0%2BfQXf6VncfrJhHNEWPLFhsVjGSfGeqy6SnpguYQIaoyLLUp7J%2FMz3YLmEJ0Pxnrs2mgHwB9TjZoglvsFAneSpmL52I6mCqLPOzYJ6ZdZtm1g1eZOhCYEqso5RvPsck9uBlnqfX8E79Z7P2F0Th%2BiXKJ3dslmGwBBGs8RLAZsQjhWH93W%2FVpFF1aIlyTbQIqLLVjWiEmJbFKsecflRzDbGiY8KobmVOFwcuL2ati97rx3cqU98cUhvILVRBrLfObifTJz3eRhrx2nIhuzTtvb39q%2FqsDIUrn%2B02rPNOfNw5WpJEhDPNhaXXd7S8RNyHQ5bTBlR9J9kYVTFY%2BoO1N3rl%2B0fPksDUtQf8n%2BA3ScufjLRpoCjVryGScZfidONUym55WnTwUoR9dw2qkmDhxkPOkeWrFIZ1mvs91SV77ptNjUTwgatAWbdX93uiVz%2FcUL%2BdQwsx76ux6vtPmvwmYjtFhP%2FqHjI1%2FjbHCjE5uTo0mMvblzWwarx4we6M%2B43UmmRw48r5PfteM0eFHRKjU3Ey%2B5XRkP8fElZUpKQlDrNMPvd8r0GOqUBU7qykPea98HJBDslp4KPwp4KF44x5dIGav0lT4Tjv32oTcZZ4qPmC9M4qGK4l3KtiIkN6t2BXALBn8IHeulGoQSCnZSRuavdmwDvEGGt9%2By7L%2FqFhs7KqFvzNBfkxqx%2Ft9WzIhM4u61mwlLMVHyHWEetwhyaeXPm0UKQC2CT4u9DxwtGRP4zMUoameCpfIrb6DCn6CvPyq9qbhtvE4d7LUHJ3MwZ&X-Amz-Signature=9c3db22f5333fa8502dfd78c6149458e3e33393a6e4cd6d9b8d60beeeb9be366&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
