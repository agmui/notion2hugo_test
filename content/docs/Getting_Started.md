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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7EWXU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC6tSPJhsAOIrPwPniSN5eouLU4oNdNzoIgoyODbhDQIhAMiD22xPJPxk5X%2BRKZyXBfB4BkgGbPTKdTY0AsgQTQhTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSlhe9nR2pJlkovvEq3ANL%2Fw33GJ%2BookzCuTMj3bhuVXFzavRoI%2FKakKYuQlIvgGqTePhFLwfZA4b9C4Q6FXvNfvA9s3KjAxek1aOgeQ656aOEGMOSlJJ89CB3%2FbkkyjERDHpoQa4qNNrW9JTPThltZjEFVP5T4ew%2FjzwtHorBZUj53qWVtbu4fmE4l5BqbjMiFrKqidKBE7%2BuVkqAvfenWOnewBCCsCuKshE5WoXo1qUaUJmAEuZHkzh3Jlo620norAWLgJocgR%2F%2FTJ8IQnMSK4y4Jzp7f2LLwK%2B6bkZh6XnD1xYCe7bCotPYdIJ2hrmi6mygP9%2FfkhWy6Ec%2BRCPfQxamWdo9vx4qsvV%2FuPrZMgrExkBFYcAIsLUnbNhxFhGWeve7P92YZK2FWloxHirGkL1eudehlyxQYMTpw8J%2BGaEyriqnR6RtJIwlrw3%2FR9g%2ByKWYJEfMuKMjdQFvjxmN9osUSf71e2VwaPV0RQb5UoaDNmctiHIkgC58oZrMIv0KcoPrTcWC4zC1VdHCxSFaty6U5rUTndgsgmVZMesz4n1dxcdxsKVSIhvHgxsqhedxVdx%2B8sMkJKaFrHf3BKVXpvAJcAGXMTJpGO9otOKs7fVLMpBsYKEFlKW%2B3vmKImv7XqnLTf%2FB3yx%2BjjDv7pjCBjqkAdkNbabIZckDj%2Fw0gRphvDgUwamA4dmmYp7aqGDxAvq54Fssi6Whhh3IWk%2Bjl7ibpnEp%2FAn4EFXFmzS5qzWeUtK9BBc%2F8SoGEpJXm951fs1bcCflySZaABccxR%2FGg8dhsCANdFrbkvNccoqRCMXbb6ed7lzum9HTYg0U7nX1le48rxANeFMO%2BcC5DC9GTlg09re%2BC5wt0KZk2IbytYDi0wIP8myw&X-Amz-Signature=2ee66e83c8fe9280adf8c66ed5a97a8e4cd5706242a848601a783213ea1da0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7EWXU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC6tSPJhsAOIrPwPniSN5eouLU4oNdNzoIgoyODbhDQIhAMiD22xPJPxk5X%2BRKZyXBfB4BkgGbPTKdTY0AsgQTQhTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSlhe9nR2pJlkovvEq3ANL%2Fw33GJ%2BookzCuTMj3bhuVXFzavRoI%2FKakKYuQlIvgGqTePhFLwfZA4b9C4Q6FXvNfvA9s3KjAxek1aOgeQ656aOEGMOSlJJ89CB3%2FbkkyjERDHpoQa4qNNrW9JTPThltZjEFVP5T4ew%2FjzwtHorBZUj53qWVtbu4fmE4l5BqbjMiFrKqidKBE7%2BuVkqAvfenWOnewBCCsCuKshE5WoXo1qUaUJmAEuZHkzh3Jlo620norAWLgJocgR%2F%2FTJ8IQnMSK4y4Jzp7f2LLwK%2B6bkZh6XnD1xYCe7bCotPYdIJ2hrmi6mygP9%2FfkhWy6Ec%2BRCPfQxamWdo9vx4qsvV%2FuPrZMgrExkBFYcAIsLUnbNhxFhGWeve7P92YZK2FWloxHirGkL1eudehlyxQYMTpw8J%2BGaEyriqnR6RtJIwlrw3%2FR9g%2ByKWYJEfMuKMjdQFvjxmN9osUSf71e2VwaPV0RQb5UoaDNmctiHIkgC58oZrMIv0KcoPrTcWC4zC1VdHCxSFaty6U5rUTndgsgmVZMesz4n1dxcdxsKVSIhvHgxsqhedxVdx%2B8sMkJKaFrHf3BKVXpvAJcAGXMTJpGO9otOKs7fVLMpBsYKEFlKW%2B3vmKImv7XqnLTf%2FB3yx%2BjjDv7pjCBjqkAdkNbabIZckDj%2Fw0gRphvDgUwamA4dmmYp7aqGDxAvq54Fssi6Whhh3IWk%2Bjl7ibpnEp%2FAn4EFXFmzS5qzWeUtK9BBc%2F8SoGEpJXm951fs1bcCflySZaABccxR%2FGg8dhsCANdFrbkvNccoqRCMXbb6ed7lzum9HTYg0U7nX1le48rxANeFMO%2BcC5DC9GTlg09re%2BC5wt0KZk2IbytYDi0wIP8myw&X-Amz-Signature=e62de3b3ea65af0cc62980dc91c0875d79f3b700653bf6f5de59977004e55edf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7EWXU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC6tSPJhsAOIrPwPniSN5eouLU4oNdNzoIgoyODbhDQIhAMiD22xPJPxk5X%2BRKZyXBfB4BkgGbPTKdTY0AsgQTQhTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSlhe9nR2pJlkovvEq3ANL%2Fw33GJ%2BookzCuTMj3bhuVXFzavRoI%2FKakKYuQlIvgGqTePhFLwfZA4b9C4Q6FXvNfvA9s3KjAxek1aOgeQ656aOEGMOSlJJ89CB3%2FbkkyjERDHpoQa4qNNrW9JTPThltZjEFVP5T4ew%2FjzwtHorBZUj53qWVtbu4fmE4l5BqbjMiFrKqidKBE7%2BuVkqAvfenWOnewBCCsCuKshE5WoXo1qUaUJmAEuZHkzh3Jlo620norAWLgJocgR%2F%2FTJ8IQnMSK4y4Jzp7f2LLwK%2B6bkZh6XnD1xYCe7bCotPYdIJ2hrmi6mygP9%2FfkhWy6Ec%2BRCPfQxamWdo9vx4qsvV%2FuPrZMgrExkBFYcAIsLUnbNhxFhGWeve7P92YZK2FWloxHirGkL1eudehlyxQYMTpw8J%2BGaEyriqnR6RtJIwlrw3%2FR9g%2ByKWYJEfMuKMjdQFvjxmN9osUSf71e2VwaPV0RQb5UoaDNmctiHIkgC58oZrMIv0KcoPrTcWC4zC1VdHCxSFaty6U5rUTndgsgmVZMesz4n1dxcdxsKVSIhvHgxsqhedxVdx%2B8sMkJKaFrHf3BKVXpvAJcAGXMTJpGO9otOKs7fVLMpBsYKEFlKW%2B3vmKImv7XqnLTf%2FB3yx%2BjjDv7pjCBjqkAdkNbabIZckDj%2Fw0gRphvDgUwamA4dmmYp7aqGDxAvq54Fssi6Whhh3IWk%2Bjl7ibpnEp%2FAn4EFXFmzS5qzWeUtK9BBc%2F8SoGEpJXm951fs1bcCflySZaABccxR%2FGg8dhsCANdFrbkvNccoqRCMXbb6ed7lzum9HTYg0U7nX1le48rxANeFMO%2BcC5DC9GTlg09re%2BC5wt0KZk2IbytYDi0wIP8myw&X-Amz-Signature=93a924e20d7e8fa627f609b0e7536bf926865a119af91902284aaa45b532e9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=9ca30ef2577aec65cb5b9d7f75243da36c5eae2996173c6d42a1355a8bca1039&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXSY55E%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAonzVHzaC8p2EAxTTVdYvG2Kt4fk1yDMrGg6ZSpNgZmAiAmR%2BZre%2FzqTeIDdb9hw2a8MrdOTZIjHl81cfdd%2BVlGjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM26Xt90swWdrAGKp5KtwDrzd4fv3eec42uMb8Y9X4a9sUa9gQC7%2FfExgchdjWSTjRoleX%2F5nJCWrDJYdq0jW05P8LuAv12B8d4jqSi0boHE81ZgPojSMa0aNiW8s9MrKsrVBxnSQMZWct8XegCIqWedkieXhqujovMtMO0u0%2BU5wT0LsEYD8WiXIXdKGUVEjgftrkTN2PGppl3h9%2BZhe0PeLQLT%2FkCo61XBo1EpHHu7gp26jhTDECh20nwJFAg%2F43xEkFc2GFnMV1q3S106GXhePYnQiSTRAy3BnrnuupmBidDrxFiTMnoSrW9snYLRIEEROQfYYz6xbKuc87Fp3zCCjtb2U1qpsV9UTU%2BiJMfpmt3OflXX1Y7zFD9m2Cq4eq4L00I4%2BjdbUsJ%2FhQH8NHcReqqsTev86zWFrfhcXpTo9UWO6DU%2FXxkDdkAkc%2BsIhNB7Hf4pKA76sYLP9N5%2F4Cg7yA0z7u%2FD40WnngkDvkwnzbiXoTGPWnXLW3NBz0BgILhd9BTsmSWkQXDAWhZe8C231IMWXkwxAP2k6pm%2Fs1mlX0ZDjAhflr%2Fi5FB1JcfTBmZV3qsKBsNG1NSIJtz7%2FCvO0OigZnSt4Ui5%2BzcFjoSp7JSW%2Fk8ZxwAHTW%2BvHcQ7OhEvvSDncAjJO2zMEw1e6YwgY6pgGWEtpWZYEQKUimdWhZUDiBaKOpuQSrOZJtbnDUmJGpDzHcPVZ5x0RT6nGLUPkXIlUqibz3uQojJgJztR0XJzc4LilBYlf1p%2FhjNePCAJwGDtDSo0295RoTP10racVTkfGH75Cnkne5Yg1hF3vy3rpYriZwju%2FoNAcq6Z0%2FsS04%2FLFTRuF2rvRtmGnmPMHz2F%2BriRZUQoawbHgdm%2FppOqxBpVcsBVPK&X-Amz-Signature=1da7a33405ec1fa139184dabfefe14628ccca65dfb68d2e78cebd4998478814e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7EWXU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC6tSPJhsAOIrPwPniSN5eouLU4oNdNzoIgoyODbhDQIhAMiD22xPJPxk5X%2BRKZyXBfB4BkgGbPTKdTY0AsgQTQhTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSlhe9nR2pJlkovvEq3ANL%2Fw33GJ%2BookzCuTMj3bhuVXFzavRoI%2FKakKYuQlIvgGqTePhFLwfZA4b9C4Q6FXvNfvA9s3KjAxek1aOgeQ656aOEGMOSlJJ89CB3%2FbkkyjERDHpoQa4qNNrW9JTPThltZjEFVP5T4ew%2FjzwtHorBZUj53qWVtbu4fmE4l5BqbjMiFrKqidKBE7%2BuVkqAvfenWOnewBCCsCuKshE5WoXo1qUaUJmAEuZHkzh3Jlo620norAWLgJocgR%2F%2FTJ8IQnMSK4y4Jzp7f2LLwK%2B6bkZh6XnD1xYCe7bCotPYdIJ2hrmi6mygP9%2FfkhWy6Ec%2BRCPfQxamWdo9vx4qsvV%2FuPrZMgrExkBFYcAIsLUnbNhxFhGWeve7P92YZK2FWloxHirGkL1eudehlyxQYMTpw8J%2BGaEyriqnR6RtJIwlrw3%2FR9g%2ByKWYJEfMuKMjdQFvjxmN9osUSf71e2VwaPV0RQb5UoaDNmctiHIkgC58oZrMIv0KcoPrTcWC4zC1VdHCxSFaty6U5rUTndgsgmVZMesz4n1dxcdxsKVSIhvHgxsqhedxVdx%2B8sMkJKaFrHf3BKVXpvAJcAGXMTJpGO9otOKs7fVLMpBsYKEFlKW%2B3vmKImv7XqnLTf%2FB3yx%2BjjDv7pjCBjqkAdkNbabIZckDj%2Fw0gRphvDgUwamA4dmmYp7aqGDxAvq54Fssi6Whhh3IWk%2Bjl7ibpnEp%2FAn4EFXFmzS5qzWeUtK9BBc%2F8SoGEpJXm951fs1bcCflySZaABccxR%2FGg8dhsCANdFrbkvNccoqRCMXbb6ed7lzum9HTYg0U7nX1le48rxANeFMO%2BcC5DC9GTlg09re%2BC5wt0KZk2IbytYDi0wIP8myw&X-Amz-Signature=1c3f5e1b26caec06b4a270a84bdd077b0f3c41e3671468ffd3b1cc8c33e34b91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
