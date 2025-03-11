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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOQ462H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGUaTCAmhO8Fo%2FzGRCUiKNNuzDWXJQo5Ya2xM71H8H%2FiAiAykQR8hqNn1F%2BRiTlXOuEe22lLgy8eOZy78RKsxm6cciqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUMRLBSZm3dFdT%2FQKtwDYvyMMQmPY5ADt2C7KZdYDK46Ukw%2FJ1Yfo1Tfl%2BCRcSMMg9XddUZeAw9Bl2mEHh09q0H72KVlocENsz5tNpLitSl7LFqVyDd1pkn4uS7gJcUa4%2FHQxjonnyj4bY54NZH2eoJELP3WwR9ifAVfUNemVA3Ptm2Zi7FhB1PkK5gdZQ%2FVr1g7sMQcph%2F8vRq1SfB2t0VvSBTN%2BWpcXd1CkRSUMxQAo3sRsvCuXgzao026%2FMebj8ugUljZVkq63K55gQH6w%2F2CAgif1PtFBI%2B9K6BAlbbBFGiPjDshAUvArN2xDOxQaZbtYZ%2B2dn92kSxigiaI1BXoX%2FSwPomCYLu7VUtTySqwCdi4%2FBWHnoWj43E1uc5kBg5l7EaBFjlskqJAf0RY%2Bn%2FTUmqoz4nhynVe70BhlQN0dGnpa2HE5ulzEmFYk8YpodkVtdtzOhS2zKDMaQHiS79of5i%2FtpyF65MMAXbjJUam%2F0b%2FS8wSr%2FyYpy43Ol85HyzkovRVqsUOlM%2BqgL1DU9fh2j9eNBr%2B0LwhXAWZ2%2FYBwde5OYHV5Lc%2FCcsDjDMNcFJ1dX3z6qzWzfULGJTP9R6qBG0rFHpd5OjlxeCjD%2FxMrqXqe7lnKkaWdASzBvwuMNNU%2Bc3k5IdRmfcwqfC%2BvgY6pgGsE9ytat7IdJY1FxNDymgUaNcDQ7BpHUDdkMuptWjOUbNynSQGklnXDmd5nPBKpwgt5aCMVeyXpdnh8jPywd4%2FI7lXf%2BtezQntKSjl2oXs5rmw%2BjIVmCN60HH4ME8m0wEnUS%2FF6eEBZL3hHzQZH3ENwKUpIhbdH86ynH3w2p9ksB89HqOIA4tf8rhsuzZOH%2BsqzoMTr%2BH0MSrKyuxINIkT2qZ0XKNi&X-Amz-Signature=c12bdddb3be1189beb9ca14341897750cc179af0561d75ec7c83ea7d2b936558&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOQ462H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGUaTCAmhO8Fo%2FzGRCUiKNNuzDWXJQo5Ya2xM71H8H%2FiAiAykQR8hqNn1F%2BRiTlXOuEe22lLgy8eOZy78RKsxm6cciqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUMRLBSZm3dFdT%2FQKtwDYvyMMQmPY5ADt2C7KZdYDK46Ukw%2FJ1Yfo1Tfl%2BCRcSMMg9XddUZeAw9Bl2mEHh09q0H72KVlocENsz5tNpLitSl7LFqVyDd1pkn4uS7gJcUa4%2FHQxjonnyj4bY54NZH2eoJELP3WwR9ifAVfUNemVA3Ptm2Zi7FhB1PkK5gdZQ%2FVr1g7sMQcph%2F8vRq1SfB2t0VvSBTN%2BWpcXd1CkRSUMxQAo3sRsvCuXgzao026%2FMebj8ugUljZVkq63K55gQH6w%2F2CAgif1PtFBI%2B9K6BAlbbBFGiPjDshAUvArN2xDOxQaZbtYZ%2B2dn92kSxigiaI1BXoX%2FSwPomCYLu7VUtTySqwCdi4%2FBWHnoWj43E1uc5kBg5l7EaBFjlskqJAf0RY%2Bn%2FTUmqoz4nhynVe70BhlQN0dGnpa2HE5ulzEmFYk8YpodkVtdtzOhS2zKDMaQHiS79of5i%2FtpyF65MMAXbjJUam%2F0b%2FS8wSr%2FyYpy43Ol85HyzkovRVqsUOlM%2BqgL1DU9fh2j9eNBr%2B0LwhXAWZ2%2FYBwde5OYHV5Lc%2FCcsDjDMNcFJ1dX3z6qzWzfULGJTP9R6qBG0rFHpd5OjlxeCjD%2FxMrqXqe7lnKkaWdASzBvwuMNNU%2Bc3k5IdRmfcwqfC%2BvgY6pgGsE9ytat7IdJY1FxNDymgUaNcDQ7BpHUDdkMuptWjOUbNynSQGklnXDmd5nPBKpwgt5aCMVeyXpdnh8jPywd4%2FI7lXf%2BtezQntKSjl2oXs5rmw%2BjIVmCN60HH4ME8m0wEnUS%2FF6eEBZL3hHzQZH3ENwKUpIhbdH86ynH3w2p9ksB89HqOIA4tf8rhsuzZOH%2BsqzoMTr%2BH0MSrKyuxINIkT2qZ0XKNi&X-Amz-Signature=150a42e5d39c11a27c4fd9b9b9e027caab3d88ae68639995eed1c52cd4fd567b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWENRUAB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCM%2BDiSgVWmv3qO%2Fd0JEBw3ZENH34YtQY0jyTbtgY9iEwIhALBIdTvLo0IgvvkZqj0mwgxDf2rxz16bhcWJkKQbrGIIKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXT%2F1kEMyflDzoI%2BYq3AP7UUo0GHuKGB1wmQ1Crmc8iNdcqYwsBBA%2Fl65%2BAt6qBxi4onEq8UOtpdQWzqhUbF7BgYrnsJBUB7e5T9XZwC6jjQVWmr8HV%2F5pIubg4xpwC9uuAWxa9XyBxD0pv8WZOxoTcGARfTIFd8Mtp3%2BEvCkRCDfCSED%2BRFGw9rcTr2R5WJiQqRC%2B10fyDlT4OTR8xcral54vbT29dimB%2FLDqoNNGr0OhGjWAgMjKxdYDSlzFX5sbM2jRgvFhbMF7y1KqS7m%2BZrDzM26Zpe0g3vG8JlJw0Evyfy4vcXgX30tWw%2BftwrEmLknelS0WhoaVoW35Fd5bz3n3YVm0M7BSfUf1aKLoxLZ3YD0qrSadfxGBL09fUKzQfR7C5SAulS%2FsPqFx9iZKm273KY1M9b51w9kmx0F3yhZeouwR5%2B1Dulmw3%2F2xFSmzIBw1p0wkIx1NIfSwCSCK6MnYuKLy8QAsVamswNhwtJ4n%2F0%2F7HSEan1QMI5vxKd8sdNUbLRBtmSXlLoblOWfdWpCElSth4R47hWexzCLZepgC5dCkMM6lalpkKEfWaPOgny7xTklKT0siELnmwIv2KBjem0UA8sUr06BlWuY5To%2F4wtjrJaLI%2BGO9kQZHPacu9lG07lDNd6ciIzDx776%2BBjqkAXrOkQcF6XipSHGN3N5MaLqGwCzhjQ88EAN345IeoKwSgSU49hBIZhrV2az4bSkD1FXy2Uo6KnqHb3%2B0pf%2BfIyB053pRXuwpxSPgGfRvoTPZ%2FOQmWxA1bvd5fRjyrKXufs7%2B7IAuodShboEjdobQy4mfgxbvTxveynZ%2FHEAJgAOSb7iM%2BRJN0ioXhSPxkqZnyioO%2BNaXJSlp2rAIwll0B1QhWRwL&X-Amz-Signature=d3f9542fcb377368458a373c5d2495b2f45c0655795626e77b2f07add43e01c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMWGFMK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIAImypW17Xwu6LYg9ISIs42NONy115yRkxXZCPt1%2BqG5AiBWs1MD4doRRpv1rj%2Fh4Y%2BnZ%2BPlNn4Z0g9dZ7DUO8wTfSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXMrzw%2BEdsmva8J0kKtwDIh1yV%2Bnwail%2FtaAUd6q5%2BvB79hjhOQGu9uQVHA2Cb3xPowvLTUMf4rAJNwt9EQeVvLp%2BlYQjE4FsEA9KMytCNCbeT3tqlzahv29ZqGekqe0%2BwOLjKj75xizlXnU99dQ0PHeetejkH%2BJ3LESorPN2BhJ2EyGgoWM%2B%2FVNN2tdjTnKX7OBtP629T1lSCLxaHX3Sbcr%2FNefxLJyfcPr%2Baof0Pbl4oegRBHYTcwZ0JdrUUzJbSvj%2Fs6JO9Xyf0e6HbR1dJ56GA2zmnVjqQDqeuzmT8BHAQyMk4f%2FigRaPVXkAvIUKz4S1d%2Fq7g1S7m1%2BQvNX0LkB6fAbpPW8yF%2FzukwPL5yzmxmihbLKxmN03aLpacPyGxrG%2FS5DjUjdlX8EQ85VXBaCqDGcb7HNxg4RlyJrLhnXWpdAMxitA%2FbRSpU9w2Qsxs1xZkU54mA1HvSbojHzc3r7vHeMC48y%2Bd6oYgHdh7ZXiGLUlLc9mjvfhIV8AAwvXCfI981Hz1%2BJ4wS3iwEeJMJnxWamL3gNsv%2FDKKHSAVebCLwCxIsLqeb3O4hFYaZvzWkGu%2Bcyz5qY52T021QgenHTREr5O5aKluVCdviCekq2eT1Q0cPGjXmo%2BEZgKbcvCyWMcgnu5AgzeivEw2%2B%2B%2BvgY6pgFOETLbaaGnv23CZKuvy%2BOEhV%2FBJmuRnu2BwCnVHzf2oXQQKUhdd2W3MfNABHcX7B6vLVxAGEqUB9sVRGi3xd7WiHLdUKIpBIH1O61VFtnWbHLzRyWfQwwmNqbMe%2FZLzLrJtnItpkylEirf1gA2ecR1r1sy66lR7SYXaB2kqQzMU3ahMut%2B2YqAne91uWq3LctMmeB90RddwdzFZzWHH3mwPY5r%2BKHc&X-Amz-Signature=019815aa0e0ca217bf74df2cb0a78fa4cf3cec6c1c1f3e36bd81ed8d346fad72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOQ462H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGUaTCAmhO8Fo%2FzGRCUiKNNuzDWXJQo5Ya2xM71H8H%2FiAiAykQR8hqNn1F%2BRiTlXOuEe22lLgy8eOZy78RKsxm6cciqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUMRLBSZm3dFdT%2FQKtwDYvyMMQmPY5ADt2C7KZdYDK46Ukw%2FJ1Yfo1Tfl%2BCRcSMMg9XddUZeAw9Bl2mEHh09q0H72KVlocENsz5tNpLitSl7LFqVyDd1pkn4uS7gJcUa4%2FHQxjonnyj4bY54NZH2eoJELP3WwR9ifAVfUNemVA3Ptm2Zi7FhB1PkK5gdZQ%2FVr1g7sMQcph%2F8vRq1SfB2t0VvSBTN%2BWpcXd1CkRSUMxQAo3sRsvCuXgzao026%2FMebj8ugUljZVkq63K55gQH6w%2F2CAgif1PtFBI%2B9K6BAlbbBFGiPjDshAUvArN2xDOxQaZbtYZ%2B2dn92kSxigiaI1BXoX%2FSwPomCYLu7VUtTySqwCdi4%2FBWHnoWj43E1uc5kBg5l7EaBFjlskqJAf0RY%2Bn%2FTUmqoz4nhynVe70BhlQN0dGnpa2HE5ulzEmFYk8YpodkVtdtzOhS2zKDMaQHiS79of5i%2FtpyF65MMAXbjJUam%2F0b%2FS8wSr%2FyYpy43Ol85HyzkovRVqsUOlM%2BqgL1DU9fh2j9eNBr%2B0LwhXAWZ2%2FYBwde5OYHV5Lc%2FCcsDjDMNcFJ1dX3z6qzWzfULGJTP9R6qBG0rFHpd5OjlxeCjD%2FxMrqXqe7lnKkaWdASzBvwuMNNU%2Bc3k5IdRmfcwqfC%2BvgY6pgGsE9ytat7IdJY1FxNDymgUaNcDQ7BpHUDdkMuptWjOUbNynSQGklnXDmd5nPBKpwgt5aCMVeyXpdnh8jPywd4%2FI7lXf%2BtezQntKSjl2oXs5rmw%2BjIVmCN60HH4ME8m0wEnUS%2FF6eEBZL3hHzQZH3ENwKUpIhbdH86ynH3w2p9ksB89HqOIA4tf8rhsuzZOH%2BsqzoMTr%2BH0MSrKyuxINIkT2qZ0XKNi&X-Amz-Signature=31de9b7f98b4fe37aedd90f61cc6c1fc7b8757e715c39317600e7c4f3157b0d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
