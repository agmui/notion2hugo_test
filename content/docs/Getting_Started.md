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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJMR4BE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDXHG4JMoLaAA9yOkYq4ETrAALj7LThrHhfYbeyj63RhAiEA1vSqPBGCwXZzmDj1qjP8QQGFN%2BBNkjGxqM2jjCLpDYEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhy8dz3t99CxDD26yrcA0j4FkemArGjxanf4GZy6xBEvf4BSUx9CLeEc5cw3MgqrwlF6VDx46t6ZvvZ2Guf3jSRrfPvDSefNIlYdeVulqTt4JaUbPoqsj7RQ8anxWUU40ZpoFQKvFKLSuZ%2BarkJ9MdAi%2Bq%2Fk8RphEkOAqRxcBjJlY39z%2Bjd7pbAItDVEZ0qDSmE97pf9esaSMU530zqSM0HF1tDMsYlGJUBKFRv8gW38OhLJquu%2F%2BDxmOiKGqZXxF756S64Ynqkh1Hp6thenIRsX4XmnpKwfiKE3lvwX2Rkq61GYY4F57x8QC6YvdcMFc6BuTbBnCjkR7r5%2Bz3RYHGPvR9RQT%2Fp5TvhyJGuGIsuu0tWNtzq0uZ21q%2BDntbcgzncxFA4Kh3vMON5HxfaqVbA4gL9E4HzaK%2FGJg2q3wFHKm7YFYe4JurtNyQ2DHAZa31UyL50Hs%2B9cmFoqFyuA8pVZfEc4WtCmpC%2FiEd8okpwflWCZrFnGwN9gSmL8eh47xZQweeJMdVmQBqJLE2XJBL1XXf3g4rsvUAtKhvF%2BxfhBlP5YGwM%2FAr%2BlEb4ezmGl3CVJpArTCJbKxUEz7%2FyuKtZJKJoi1qzIGHbN7IrPy76Svj43lOUigpupl18a8PtyDyMoPsYR5tK3gdRMLW7hMEGOqUBoAtmKHszErb4gCnRHppSXPPgMTUc1iQcQXTsT7S%2Fb9%2BzL6Al7diqJZ0lGlgqFQouCvsJBbj4UPN9zuawdQeqR5JaSHRqhHEhPzpzJMoGDCIKqOe%2FjmmD3xHS08BZk4c7TtG8ZTO4C4L3ZwCwvQzv2rOf0211SGtMI2H0AV4WTYqsJ4HAdWo75jidysERqv6gBHO9wznC64IBvqFG9Xrli1fxU1K1&X-Amz-Signature=783d22a179f180c24d6dffdb344f49bb3cbc7394c4fb5aebf4a91495138b457d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJMR4BE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDXHG4JMoLaAA9yOkYq4ETrAALj7LThrHhfYbeyj63RhAiEA1vSqPBGCwXZzmDj1qjP8QQGFN%2BBNkjGxqM2jjCLpDYEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhy8dz3t99CxDD26yrcA0j4FkemArGjxanf4GZy6xBEvf4BSUx9CLeEc5cw3MgqrwlF6VDx46t6ZvvZ2Guf3jSRrfPvDSefNIlYdeVulqTt4JaUbPoqsj7RQ8anxWUU40ZpoFQKvFKLSuZ%2BarkJ9MdAi%2Bq%2Fk8RphEkOAqRxcBjJlY39z%2Bjd7pbAItDVEZ0qDSmE97pf9esaSMU530zqSM0HF1tDMsYlGJUBKFRv8gW38OhLJquu%2F%2BDxmOiKGqZXxF756S64Ynqkh1Hp6thenIRsX4XmnpKwfiKE3lvwX2Rkq61GYY4F57x8QC6YvdcMFc6BuTbBnCjkR7r5%2Bz3RYHGPvR9RQT%2Fp5TvhyJGuGIsuu0tWNtzq0uZ21q%2BDntbcgzncxFA4Kh3vMON5HxfaqVbA4gL9E4HzaK%2FGJg2q3wFHKm7YFYe4JurtNyQ2DHAZa31UyL50Hs%2B9cmFoqFyuA8pVZfEc4WtCmpC%2FiEd8okpwflWCZrFnGwN9gSmL8eh47xZQweeJMdVmQBqJLE2XJBL1XXf3g4rsvUAtKhvF%2BxfhBlP5YGwM%2FAr%2BlEb4ezmGl3CVJpArTCJbKxUEz7%2FyuKtZJKJoi1qzIGHbN7IrPy76Svj43lOUigpupl18a8PtyDyMoPsYR5tK3gdRMLW7hMEGOqUBoAtmKHszErb4gCnRHppSXPPgMTUc1iQcQXTsT7S%2Fb9%2BzL6Al7diqJZ0lGlgqFQouCvsJBbj4UPN9zuawdQeqR5JaSHRqhHEhPzpzJMoGDCIKqOe%2FjmmD3xHS08BZk4c7TtG8ZTO4C4L3ZwCwvQzv2rOf0211SGtMI2H0AV4WTYqsJ4HAdWo75jidysERqv6gBHO9wznC64IBvqFG9Xrli1fxU1K1&X-Amz-Signature=e067cb7e7c8fd926a685231422aa7ba883ffa732d59348e796cc5d8556db087d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJMR4BE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDXHG4JMoLaAA9yOkYq4ETrAALj7LThrHhfYbeyj63RhAiEA1vSqPBGCwXZzmDj1qjP8QQGFN%2BBNkjGxqM2jjCLpDYEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhy8dz3t99CxDD26yrcA0j4FkemArGjxanf4GZy6xBEvf4BSUx9CLeEc5cw3MgqrwlF6VDx46t6ZvvZ2Guf3jSRrfPvDSefNIlYdeVulqTt4JaUbPoqsj7RQ8anxWUU40ZpoFQKvFKLSuZ%2BarkJ9MdAi%2Bq%2Fk8RphEkOAqRxcBjJlY39z%2Bjd7pbAItDVEZ0qDSmE97pf9esaSMU530zqSM0HF1tDMsYlGJUBKFRv8gW38OhLJquu%2F%2BDxmOiKGqZXxF756S64Ynqkh1Hp6thenIRsX4XmnpKwfiKE3lvwX2Rkq61GYY4F57x8QC6YvdcMFc6BuTbBnCjkR7r5%2Bz3RYHGPvR9RQT%2Fp5TvhyJGuGIsuu0tWNtzq0uZ21q%2BDntbcgzncxFA4Kh3vMON5HxfaqVbA4gL9E4HzaK%2FGJg2q3wFHKm7YFYe4JurtNyQ2DHAZa31UyL50Hs%2B9cmFoqFyuA8pVZfEc4WtCmpC%2FiEd8okpwflWCZrFnGwN9gSmL8eh47xZQweeJMdVmQBqJLE2XJBL1XXf3g4rsvUAtKhvF%2BxfhBlP5YGwM%2FAr%2BlEb4ezmGl3CVJpArTCJbKxUEz7%2FyuKtZJKJoi1qzIGHbN7IrPy76Svj43lOUigpupl18a8PtyDyMoPsYR5tK3gdRMLW7hMEGOqUBoAtmKHszErb4gCnRHppSXPPgMTUc1iQcQXTsT7S%2Fb9%2BzL6Al7diqJZ0lGlgqFQouCvsJBbj4UPN9zuawdQeqR5JaSHRqhHEhPzpzJMoGDCIKqOe%2FjmmD3xHS08BZk4c7TtG8ZTO4C4L3ZwCwvQzv2rOf0211SGtMI2H0AV4WTYqsJ4HAdWo75jidysERqv6gBHO9wznC64IBvqFG9Xrli1fxU1K1&X-Amz-Signature=8a027fe64632e2230e2468e2b536b617c988d23bcaa6ef1f039c1dc9025aa244&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXEJIEO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFJ2bOal6BBm2Zb2aLOX6Hf2zrrlX%2FXNb4wZ%2BXoFq6itAiEAxVge4BjnhIIn%2F%2FZKAsV0DkcHyolcdTewQClkvJ%2Big5QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbUgDVsU4HnM6y2AyrcA%2FIq9lQ3SO3UWTAAxRUqSea1Y1KkAMLS4YbuCB0JbhTiUqwUbTyApYxltiQREwNq%2BBR5%2FcxA3%2B5jeBA%2FDbG7TyTjJfdq8H1jTkWOYbP0FhD9YY4YZNJZttmMCyN0%2FYxK9iZE1Kn%2F9Upad%2BYRqAmpmRfFovg%2Bk0TxMwiGpOMzPMTFSmjysD2vZ7LVCZkbQ3Mb8RW7sJOmnIEyNFeW8kuUmu1ITlI6ijl87iwGo8uGl8zf5sGTyCe3AkxeBz0U%2BbDqMw5NKw03WoUuUxGTJKRMNWwO8Th70HnTGA0Nn1cxVsTyv8gWgXlJq7kXMtnHVcQNLpgaWW3dIQjqCfHLDuZNJh6GYSACDBJYCxFGlbcnFOwGCqpUidhvYh7gQ%2B%2FQ19Q%2FhyMmgdyUDUUxgrm4WNQy2wwT1Zb5RbOwflfIjJMUDag%2FYoEoDoOyatygeFc1BdC0vRBiMqEZWwr6prOo89TiAgh3NihnoWrihnwAnCmLqivbPpoUWg9qr1HDlsKkkvzle0iR50G10yM2RqxZs2jj5DZvnvR5qBcCQGIs9FO3LfYDRqHS0SbSjd1j%2BTTuUVWvUH1q%2Fxe79LKoDnIKwODUmz1cMqcIad5KeiQb9F9P%2Fnay3mvAEbNTZJtyoCWSMP66hMEGOqUBnh8MbLLWjbO0Ytl8jqxsXWLAa1661uwfIxUqXr6hNdhpsBWSxuw%2B%2BRw4f8C8o7wydPdIO2u0VXKBBdUcqrSAES9VM3qZxx1uY1slGuynNNwN33IdNVQMllkvS%2FgQrqQPLunuO18%2FEp%2F9w9k8M51x69KONwHMhsW9%2F7POTnYTLZayVHFBl2jdVrIdwddULqUmnRBHNUOg%2BOg01HgIItmNIO1oi%2Bn9&X-Amz-Signature=22debb197f12a1b7c316281444029b1e25c718222f5f41167592f202c46b2b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRL744HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCj0mySd9FWAd3pr%2B28VdNvk8OD%2FKl3nqol2iBs05ZoxAIhANsyUyj%2FfNiokyALuNyVYTSgRlr7UZ6pExW%2F7ZrkN1QjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4cchcly2aQlJxjgEq3AMzQS8kXi0wpSfzxwS2Ep1zQp%2BDzoppiRYlctTNnMhEhpnuYngjFM2tjTAaIyEGb5diqs55g6Txne4caRCz9A7%2BDTqtQBiujU5Q72nchJ%2BPgo2FK6SbumePMyEDj64az7aqCZDJNo0pj%2Bp1A5WRZ0DPsanUmHpHqjWRH3CGc%2FMYUF5gcBd6jdlx3yv3AtE8kLp%2B46eKIebeBbWf%2BQQJV8todT0xpBilr5PUgX85fLyL%2BxwXIjhDFf3olnEuxcrVxQ0wnU5tKVwuxWtkEbL4eC6VWgxKzGeTnYXOIVO9dhuvEUv6dBkN3dDfFNCe5dLN0B8BF9RpWKjtnATTootSoB%2FeGZoEiLBE0lGJcK7gtDrPz2rKDWx%2FtYCRwDh0eexMAJNUjpWRIdrFDwA0MW2NIJ4dQqrMFoCxnyEXUpzrJktTmw%2FHiOlv47Nlvw8ou8Q5dcUQcECj5E5OwfJsDWv%2BEPSIhpnf%2BS2zY8J5%2FNzzVabCYmZi9OiPzD8CWxOOhxG%2Bb%2FCtfAbsnWA8Z2NVTswTHJB4coP7g5VwCK7v6ACc3apyx8Pc2AtLgB%2BCdYWGjssXb7dgaO%2BL1bAzoYU4Fc%2F67eWKfdq%2FWLXERom9j5K2BogeLkmf1doC42Zkx4omeTCqu4TBBjqkAeSA2sND%2FBgCItx%2B2KcoH57IMvuSjRcLHbmBEbwMy6Oe9fBg9dgkuZQy1jMnYexljsIdA1nkQ5hIIRp5JPNlqP0fQqByP7IihZYMR%2Bez%2FPQKTKUY8zMd%2BRpDtfgtOfFu6SNySKjB6FDubO5RL8ZXtafnYROuoPy7bVs72QjafmScTty9PzjR75S%2BU6Vyd%2B3YxCSce%2F5hfAWKkMKy5Ru4ypvg8aKO&X-Amz-Signature=4e59cb177ff4d268eb4a9e7eadf6994b2822f3d1c058520058ee966ca56f03b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJMR4BE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDXHG4JMoLaAA9yOkYq4ETrAALj7LThrHhfYbeyj63RhAiEA1vSqPBGCwXZzmDj1qjP8QQGFN%2BBNkjGxqM2jjCLpDYEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhy8dz3t99CxDD26yrcA0j4FkemArGjxanf4GZy6xBEvf4BSUx9CLeEc5cw3MgqrwlF6VDx46t6ZvvZ2Guf3jSRrfPvDSefNIlYdeVulqTt4JaUbPoqsj7RQ8anxWUU40ZpoFQKvFKLSuZ%2BarkJ9MdAi%2Bq%2Fk8RphEkOAqRxcBjJlY39z%2Bjd7pbAItDVEZ0qDSmE97pf9esaSMU530zqSM0HF1tDMsYlGJUBKFRv8gW38OhLJquu%2F%2BDxmOiKGqZXxF756S64Ynqkh1Hp6thenIRsX4XmnpKwfiKE3lvwX2Rkq61GYY4F57x8QC6YvdcMFc6BuTbBnCjkR7r5%2Bz3RYHGPvR9RQT%2Fp5TvhyJGuGIsuu0tWNtzq0uZ21q%2BDntbcgzncxFA4Kh3vMON5HxfaqVbA4gL9E4HzaK%2FGJg2q3wFHKm7YFYe4JurtNyQ2DHAZa31UyL50Hs%2B9cmFoqFyuA8pVZfEc4WtCmpC%2FiEd8okpwflWCZrFnGwN9gSmL8eh47xZQweeJMdVmQBqJLE2XJBL1XXf3g4rsvUAtKhvF%2BxfhBlP5YGwM%2FAr%2BlEb4ezmGl3CVJpArTCJbKxUEz7%2FyuKtZJKJoi1qzIGHbN7IrPy76Svj43lOUigpupl18a8PtyDyMoPsYR5tK3gdRMLW7hMEGOqUBoAtmKHszErb4gCnRHppSXPPgMTUc1iQcQXTsT7S%2Fb9%2BzL6Al7diqJZ0lGlgqFQouCvsJBbj4UPN9zuawdQeqR5JaSHRqhHEhPzpzJMoGDCIKqOe%2FjmmD3xHS08BZk4c7TtG8ZTO4C4L3ZwCwvQzv2rOf0211SGtMI2H0AV4WTYqsJ4HAdWo75jidysERqv6gBHO9wznC64IBvqFG9Xrli1fxU1K1&X-Amz-Signature=e62dcbc8caca6d9f58b5568f0afe91512ed78cd43205172e1cd8cfb1b0931870&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
