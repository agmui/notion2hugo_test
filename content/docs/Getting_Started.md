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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXEYJGQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgJBSIFE4ZrK3r%2BxkGFTYLpf0IoJboMrSrCaVEsFVGMwIgfD9JKd%2Bn4tXode81V%2F9RHR0qm9YASJwjiAlF7nBeavkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAwH4pzCbRdOq51aYircA16IUkg%2B6QSSfyA58U1dkkGSuNDztJCcfZs7OLGJ2wKrcXzvoS35KzFS6qCapkS9APGFNJfsKx5gbb97pbjTjDduU7CFRcOFrNbU77%2F7Dzc1tjs2SIw0QrCYaSsZuEpyV8FzACfn5%2FISWA8FyvvmK83sYaQOz9wv8slODEQpVxpG4j4ZCs7ZVlL5SkYhyKZomLc8LTSHQs0HF41sCZ6%2BH2LwWZbLaZcbiBmR0dqfzfBZH0D11ZVX9u54uT8g9hJyzpTtERiSI3e%2Fihk5HCg0Aa11zlqwNHx6NMeKwwN4Ezs1o9WVLe%2FvqtscZqgv37P7Xe944Denc72Yyq%2BWiL7ExpB4h2GV6qZWdZbZhXczliCSGyuWw%2FK1838FYlxF0P13r5Mj06ftqMRajCPJdVGhfE9xaBrbc4DEg1S2fqfYVaJCJS87ZogUzBRNjUfznCPb2TCUDUGMNQQp7nkCvbCc%2BXYhE1WTFmaDfDuFz1N7dANRjzCnOh3VbPEWOLmjfbGHFBoP0y%2Fe2nvAte4nVnxkN3COsuM2PGaWdyXu8%2Bq0QD3aNUcN3SusVVeQJ8lE8F5TXN5KxAi21M%2FuDRsA6bkB2Uu8Tcu6zvijB%2BtVWosTAO61hRSQ1uKxLT%2BwZN9vMIetucAGOqUBhTR3PoVVlMNwn%2FFixzdVIPh67%2FGlpIKljJcNvCUzHexiQNnUXEx6sI4tAXrtqTW7plVoJb2oxChQx%2B8WIquenAgv0L%2FB9ve7p3CCkLwrYir3CRHeX28%2BasUIm4fq8qWlsmJq8EmMKgKdViyGC3DqSYq2IfkWY3FSWKU1F5qnszLk%2BVYMj%2FJ5s%2FScwP8RrqEBfHpnDMgfvCVmKsFF6Xgwo3TBS9wR&X-Amz-Signature=405dc040e947513ebcf8826475767a7485da6cb7869474171b5bfebe47924cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXEYJGQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgJBSIFE4ZrK3r%2BxkGFTYLpf0IoJboMrSrCaVEsFVGMwIgfD9JKd%2Bn4tXode81V%2F9RHR0qm9YASJwjiAlF7nBeavkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAwH4pzCbRdOq51aYircA16IUkg%2B6QSSfyA58U1dkkGSuNDztJCcfZs7OLGJ2wKrcXzvoS35KzFS6qCapkS9APGFNJfsKx5gbb97pbjTjDduU7CFRcOFrNbU77%2F7Dzc1tjs2SIw0QrCYaSsZuEpyV8FzACfn5%2FISWA8FyvvmK83sYaQOz9wv8slODEQpVxpG4j4ZCs7ZVlL5SkYhyKZomLc8LTSHQs0HF41sCZ6%2BH2LwWZbLaZcbiBmR0dqfzfBZH0D11ZVX9u54uT8g9hJyzpTtERiSI3e%2Fihk5HCg0Aa11zlqwNHx6NMeKwwN4Ezs1o9WVLe%2FvqtscZqgv37P7Xe944Denc72Yyq%2BWiL7ExpB4h2GV6qZWdZbZhXczliCSGyuWw%2FK1838FYlxF0P13r5Mj06ftqMRajCPJdVGhfE9xaBrbc4DEg1S2fqfYVaJCJS87ZogUzBRNjUfznCPb2TCUDUGMNQQp7nkCvbCc%2BXYhE1WTFmaDfDuFz1N7dANRjzCnOh3VbPEWOLmjfbGHFBoP0y%2Fe2nvAte4nVnxkN3COsuM2PGaWdyXu8%2Bq0QD3aNUcN3SusVVeQJ8lE8F5TXN5KxAi21M%2FuDRsA6bkB2Uu8Tcu6zvijB%2BtVWosTAO61hRSQ1uKxLT%2BwZN9vMIetucAGOqUBhTR3PoVVlMNwn%2FFixzdVIPh67%2FGlpIKljJcNvCUzHexiQNnUXEx6sI4tAXrtqTW7plVoJb2oxChQx%2B8WIquenAgv0L%2FB9ve7p3CCkLwrYir3CRHeX28%2BasUIm4fq8qWlsmJq8EmMKgKdViyGC3DqSYq2IfkWY3FSWKU1F5qnszLk%2BVYMj%2FJ5s%2FScwP8RrqEBfHpnDMgfvCVmKsFF6Xgwo3TBS9wR&X-Amz-Signature=e3f90e2db88456a61e5b854dfdc9bcc127f2105584055346a99250ea106f27a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SUJGFV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyMT8lx6kSDAKcCNhVIBxVLy4%2F1uPraWsBVdlEomCIJAiEAiNdBo73EYSgddOeJsTzLIsbisRBxJ%2BgU2PPkEAD1Cdkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDENZ7ksUll7O1D4SsyrcA%2BUikF82Z87k6%2B9gLKuCLmw%2BBbPKFHXC6zcRSV47F0tUNUh8zuR8zQLCEhPPde9tyzhew%2Ff194c7G4WMbWXOQQhih%2FSr%2FpdakAkKUx50r%2BlpaLVq85hJmWAH8aZX4NQwdcgxfL8ief8%2BprJoQeyyrwy0olcPOPDGKkWpSoqcvg9J8x70UR3OIThadhDy5YvucR5965kwFRR6mhjhmq%2Bw9yhi4rGqAjLH3s4emESc9w3Uq19a8iGPaSRyc1adHECyOrh4LdQbrPsEhlsR9ZLMs2%2B0QetO3JkbS2sa5UTkJ6iEOUObYgV4R%2BS4VHkU6o%2B7cv9ERCxegUXdQqrUwk9VxRc2IMyM2ZM1SdLe9npUJxLvU2U%2Fm%2Fu8roEc4dOP%2FPVkgM32FMhh1sMjt7u3mriXQiVsHCAIYBr8nLaKGJPu52pyW%2BCu93Z%2BHwsxxnc8BrIGJYqtZue4p8nhJWmmYtOGlrvdHWR7YPg9amwts8tzPMAEt9KopW1cL052Ee1Ld0VXXouVBlEvf3PBVva2ClI3IjrGHY3UPwOh9SJ2UKMJ%2FmYG7F1LaplPPn2VqayUkuIw02ZyYM6oD35ukZWPJio9g8S4tX1MXjUnxcB9ZD5Ixwp0TDtdGHDeFOMyZn9cMLWrucAGOqUBGKwTgLoXeUP8YEv20TT%2BXToUGmCLkF2wlD7zD8HkUrbLf%2FtgahLVLaQnPQKbG%2FD6N4SWlnWuj5CjCTL1L%2FE5%2FQ2tmTQ6UTh2SyK3mRSJugHfSS2%2FKiS37JhHys7rG4%2BJk7J5Rm3ax7bEl7klSECWnD8kU0MqHNCjSUkqBYOprLS6MaFNIc5cMK%2F8OZSYk3UC9t2yXxvrDWSfp2RF5HXlWGR1J%2FQl&X-Amz-Signature=ad0cdce154e848266281484d5ed6863f28f54e3e288ae14b52975365d01c7bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3CZRTO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocGGdwVkzZkTc8yo%2FC3cpVwYgsjYvKqP4LS4yko%2Fv%2FwIgFKiXiBf64V7P4lQ44vz7BtJ4Bd5mOR7chOo9pYUC4JQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIQ6yni7cMweisADNSrcA%2F1kV48j7PBGYO8uvdG9e7KeRTAUb%2FVBOpGZxYL8sBSurkxe3Kq7H72hBcvjhqN1tpNJgPBs0B1bJq%2BTumluZFOmEEnNps3A6nxh76QZeh1ZG81UiiCRPM4osMr%2BwnPKUcN%2B%2Bt2OfzGry3YTm6APv19%2FaAf%2B7P3mnwNYxk2XRqXYg637h5tKRRulSSRylrVRurfdcdbQ0Ytmd%2FDLfWydetkCCjSe%2BCiH%2FTiI8xrcDA8wMf%2FlZ9AM7zMgaD4mwweCzxpwkzdW9oWWgN35b%2F2KgiMqc75UpEAllThvx8Epqk9s%2Fwo7qcd6ozyYIq7Tad35xTImw7r17ctfl%2FUHWFjL6gg5IsH2WpUQPX2ibJxi7WJITfBnQBHOk%2FO%2BlhLXvHU98PZY0h6mrjyXeHx%2FiFSYg5dlLYCil%2FV0zTTgkQMHTKcoHEaUIDY9%2FKNHq%2Bj1FSMeRjeBQnZlI%2BjaNcKTcAxYL8zm9fBLhSbWenm1ngzS7RLadyCOkN%2BdHmg5VFDcJsUvBJjo7piGvSVxvujBaoGGqDCQv06F3AaSK0GrRk8d77%2FnhvC867lwD3lh%2F1%2BAvw4s91HT9o%2BnNL0W%2F0E1638ONB%2Fg%2F3zDT3ZYw3Bphq%2FyWv%2Bi5ynNtJ2mlb%2BAxW4cMLqyucAGOqUBa4dj%2BTPsClHSQYS%2BqlhhnZAMXRfo3meKbjbJrsdXTp%2F5mPZo%2F3eCBBdFjsaem0m%2FF6LEFk%2FxpydEjryp69Qdj9eaTnnka2cP09QuRHVhzjmkvZqqLKc8NmoLa4PyKa23rUwdTDSXFFWia7WcD3ACUX4Z8mtqouhMhWF7lb7LaRzfHA7tAVD%2BLe687t%2BTas8hk7ZIXYAMvjFnACmM4V5xYsxKgJpe&X-Amz-Signature=3400c43d0718a98bc828992b380acbdcce906ad31c5a47bc582352fd525ddf57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXEYJGQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgJBSIFE4ZrK3r%2BxkGFTYLpf0IoJboMrSrCaVEsFVGMwIgfD9JKd%2Bn4tXode81V%2F9RHR0qm9YASJwjiAlF7nBeavkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAwH4pzCbRdOq51aYircA16IUkg%2B6QSSfyA58U1dkkGSuNDztJCcfZs7OLGJ2wKrcXzvoS35KzFS6qCapkS9APGFNJfsKx5gbb97pbjTjDduU7CFRcOFrNbU77%2F7Dzc1tjs2SIw0QrCYaSsZuEpyV8FzACfn5%2FISWA8FyvvmK83sYaQOz9wv8slODEQpVxpG4j4ZCs7ZVlL5SkYhyKZomLc8LTSHQs0HF41sCZ6%2BH2LwWZbLaZcbiBmR0dqfzfBZH0D11ZVX9u54uT8g9hJyzpTtERiSI3e%2Fihk5HCg0Aa11zlqwNHx6NMeKwwN4Ezs1o9WVLe%2FvqtscZqgv37P7Xe944Denc72Yyq%2BWiL7ExpB4h2GV6qZWdZbZhXczliCSGyuWw%2FK1838FYlxF0P13r5Mj06ftqMRajCPJdVGhfE9xaBrbc4DEg1S2fqfYVaJCJS87ZogUzBRNjUfznCPb2TCUDUGMNQQp7nkCvbCc%2BXYhE1WTFmaDfDuFz1N7dANRjzCnOh3VbPEWOLmjfbGHFBoP0y%2Fe2nvAte4nVnxkN3COsuM2PGaWdyXu8%2Bq0QD3aNUcN3SusVVeQJ8lE8F5TXN5KxAi21M%2FuDRsA6bkB2Uu8Tcu6zvijB%2BtVWosTAO61hRSQ1uKxLT%2BwZN9vMIetucAGOqUBhTR3PoVVlMNwn%2FFixzdVIPh67%2FGlpIKljJcNvCUzHexiQNnUXEx6sI4tAXrtqTW7plVoJb2oxChQx%2B8WIquenAgv0L%2FB9ve7p3CCkLwrYir3CRHeX28%2BasUIm4fq8qWlsmJq8EmMKgKdViyGC3DqSYq2IfkWY3FSWKU1F5qnszLk%2BVYMj%2FJ5s%2FScwP8RrqEBfHpnDMgfvCVmKsFF6Xgwo3TBS9wR&X-Amz-Signature=4c5d7693d6d281ccafce0937666a48dd19181ed57f9f21ffd1ea2b2d79772120&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
