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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUJ5HE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMGgszdM%2B3CxZNWavZ0S2V9kTJ0959bywsgmD5drPrgAiEAzcZLzMAbgxcAlUKSxYgNuaQ3OpQDNafHPtgOPSCWpgIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Ax%2FbMuN7y68FsMyrcA1sESt0zmIK0Dxegwerw0CKbZ3PF1%2Bse3zYnVitRTFB6Y3LhN6og%2BjeeMv%2Fj%2FYlVWPo5QWSuewgofCw4KpsGsxnFDLeHmfekwYS5NQSVzEncRNf8ltsFvd35EkaJf8ZqEdkK%2Bluor02Xj2ZFHnddZnP0tuB14PvcTSgELEgHXLUYYq3TshCQjs2ZO28F6%2BurBL67ODawuNsayUBYVEJ%2FNJkiDVszahGLJ1aHZpDwkUTdZReYkFtp8iT5zQL1zU6C%2FoBBTz%2FnScMLVwtbbzSvUWRi16OEgMPz2R5VBb7Ih9Hb3Nk0GQHmzcrZAaS2i9wmJ3M5b11Ae%2BSC8rpKEOvXXEsN693W57n70MCnBhVoY%2FnjwbfUJ%2B4gRyJq8EroHObc94qtY03ls7GdOwc%2Bgrj4KL7EgX%2F7bqbYUwm1FgN6YslZkvMz99uaT5A%2FIMHlU5jXEYmNruWi%2BXzoQEitQKO%2B7x%2FCgGVwoLz%2BuJDhtxFl7zY3PFYEv%2F9zcXJl1fP%2BikSG%2FbESSmyUs549sce7sl1sbzomtP3K1k1%2FSyolxIPEaG9smKwbKDquq5SqmZmyIoD1Zo%2BG18BAvlzQAvqQHqMp1M2VdCqpafjKQy1Nub2RolcxdbgBXRcPgUgGYxaWMMidyb4GOqUB0iRx0WVx1HnoQm8Eyp%2FJCk0FoUVA4RIPNBJ%2Ffmh%2FUDfbTu1q0T1KyuxHflX4rLF6wDeYDod6z27g1tOXO1kdlxY%2FJUjx6gTVDexXYTSs7CUCBoyYMY4b%2Fh7BjpTVxf90Q9QwTGtXMn5G8w%2ByVrM2e0zPFjrIOuZ34sF%2FfYNokJOFx7p9TSBTYzbtjZUeIhtsA89BOfIJcn65nTGhwi355Mm3%2Bbqw&X-Amz-Signature=0b70c07d666397245519112d133000b411e6210b4419a12f2c74b8b7683d942c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUJ5HE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMGgszdM%2B3CxZNWavZ0S2V9kTJ0959bywsgmD5drPrgAiEAzcZLzMAbgxcAlUKSxYgNuaQ3OpQDNafHPtgOPSCWpgIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Ax%2FbMuN7y68FsMyrcA1sESt0zmIK0Dxegwerw0CKbZ3PF1%2Bse3zYnVitRTFB6Y3LhN6og%2BjeeMv%2Fj%2FYlVWPo5QWSuewgofCw4KpsGsxnFDLeHmfekwYS5NQSVzEncRNf8ltsFvd35EkaJf8ZqEdkK%2Bluor02Xj2ZFHnddZnP0tuB14PvcTSgELEgHXLUYYq3TshCQjs2ZO28F6%2BurBL67ODawuNsayUBYVEJ%2FNJkiDVszahGLJ1aHZpDwkUTdZReYkFtp8iT5zQL1zU6C%2FoBBTz%2FnScMLVwtbbzSvUWRi16OEgMPz2R5VBb7Ih9Hb3Nk0GQHmzcrZAaS2i9wmJ3M5b11Ae%2BSC8rpKEOvXXEsN693W57n70MCnBhVoY%2FnjwbfUJ%2B4gRyJq8EroHObc94qtY03ls7GdOwc%2Bgrj4KL7EgX%2F7bqbYUwm1FgN6YslZkvMz99uaT5A%2FIMHlU5jXEYmNruWi%2BXzoQEitQKO%2B7x%2FCgGVwoLz%2BuJDhtxFl7zY3PFYEv%2F9zcXJl1fP%2BikSG%2FbESSmyUs549sce7sl1sbzomtP3K1k1%2FSyolxIPEaG9smKwbKDquq5SqmZmyIoD1Zo%2BG18BAvlzQAvqQHqMp1M2VdCqpafjKQy1Nub2RolcxdbgBXRcPgUgGYxaWMMidyb4GOqUB0iRx0WVx1HnoQm8Eyp%2FJCk0FoUVA4RIPNBJ%2Ffmh%2FUDfbTu1q0T1KyuxHflX4rLF6wDeYDod6z27g1tOXO1kdlxY%2FJUjx6gTVDexXYTSs7CUCBoyYMY4b%2Fh7BjpTVxf90Q9QwTGtXMn5G8w%2ByVrM2e0zPFjrIOuZ34sF%2FfYNokJOFx7p9TSBTYzbtjZUeIhtsA89BOfIJcn65nTGhwi355Mm3%2Bbqw&X-Amz-Signature=a804651ba87d61ccd80d19119be999d8e1e59371221b8c22461b8c8c5c1c152e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUZHPPX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWL7VUyrDwQD0t%2FhbYec6OQothdNxqKFvBiwchdXHKLAiBLVD9AieJyxBeE3QFog4blTwoAKx6eY3qEc55ve6AsMyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3gTtWCausE%2F2uoGDKtwDsukFCP4tK4hTxvkMvyiv6bg3am0V0gDlV6ueETF03gpHg%2BWttm6SQXS06tR4QG0mfCL6DaSmQQ1DF8eTlosniV3P8pqUJY4Oc7ZQJ3ItJ%2Bp5wKZ5mNJwyz8ltxACcjelLExByp95C%2BtpNH7ihSbA2krCeU0XyEzKn%2B74IwccnhX36WcQnFpK0%2F0KRizEBrA9iE3qzMoK26IoWq%2BImsUqDAdvi1sjeH3e%2FAxK7FgUv%2Bv7sPQUm19D%2FjFBRY1fJrSx0aWYTEn556V8hqEHVGVpG132MwKKLgp5tmn3jQZDzz3jC4w1yT1gZLHTkrGUga%2BjuKUQO%2BKQRwFI1rx0fPlHVOZxTFnNGyGPOSBXEDRW5gHZZdhNWIWUvA0eB187HfYJXsyutsLxT5wJrNeth5CPSmGHOQQ24c%2BzixriSNKxrLkQoTCYm%2FaXF5MnLM3VdaB%2BPp%2BW8hH7ED1ndj9gSEhtDkWhwWI1vqA%2FojiG7HkPgddicXf37Hivnzc9mO5pCh9tBd2kxrTl%2B8yzT%2F8n5IZL3DqlXdKisgQdSM7YVUlfaGNCZ7XBkSUkzbduJdq1SOiZ5m9hdwsKB41C2oqCLoqmRvcJeSpF0DDV4TqMrg0Wxx8jUDHh8wtJUuYSSwQwpZ7JvgY6pgGk2j6Zjf21Pm9rThheN4mXW3NOTHX4H39%2FliskCgnVWb6Sheaqt0wQV57zH7iExq8yqwyx%2B3YLv%2FFyXyl6WwKsM9E2%2FSOnAbU%2BjvvpXx041hQJtkjlHi0INkU1Sbu7523HyClGBj0%2FrTrLMWzqJ37ryMbjJTDJ8r5NJ09QPm3vl0bRkoosmgiX3zXqE7XG%2Bwr7EWagyOy7%2FZD6X54727cNyart%2FnYE&X-Amz-Signature=2bc9418a2ea40628bd1d4011afccebe5134ae4c396906f832a86984458f3bfb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACXJRGH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1MF6DEMBhetUB2OzeIVT9nBGCcOh8EY5WkDz%2BQUVovAiEA4pyLSqN5v%2FY5%2B%2FFAfpCkl362brj88qJwNkgFZ8mc5lsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICLNeieCbMhEgrWuyrcA12KhLdVIeDd6Zgqs0JxzXMO90kjVGszLaReZq1fhzLNsuH4NBuuNAvW8cOQ72N0RMG2ulIQEW33QcoK646M5lCVb7Yy3kcLsymk4%2FEvy%2FMxaYKzoc8Gd7YUfn4KeKe8qnS0Urfhe1AtOctC60%2BjFvK2GLfobsRdXXN566DrlQAWe3y00iO2By5ztbtNJLXuLxrMnBBL%2BGjEBNhZ46essfKRCqoi79IIg%2F93lXZBGrhjXBjFeLGgHq%2FzssQlDJc8IcanmEK%2BOU0lvk4j2QKGTUckphxvajCwLvrhBu2DBAE0Ksr7wSuNc8FcfpuA4dLHYgtfTiFtAlHkAKrb4BUaJMnn%2B9ejl9ExjMZKSxpNvvdm6GuS%2BZk%2Bir0%2Bktx70riKTiYRB145I3OH%2Bl4HniNkGVNoQj%2F3ceBEnlQHlIGcMgjOOKlXfJQM%2BZS%2Fe3TA965WK3sRmjvbhfxUBHNVLzNuC%2FDfWyAhxAxXoXAA0fxUxzuyOTGj0iGas03dMQjPJnwFK9OEGLcWIelBNumJlu0ijqNg1p%2BCRD7vB2GI%2FfwK%2FbLNAgHX65jmc2XlxZrdBrP4TDW2vwg%2FH3opKaRUCj1yblR9%2BD1zgVtRPZGsRvgyBVQtjd54mTcvE4TI%2BmhWMNqdyb4GOqUBknh8CrDGoCBRZbWrY3C4k6i4kjjHXu4sJgudVqlJBF9o6oXtb9%2Fllfpphiz2eNamYHJzbOug9%2B8ZdIrXVFDg%2FJyDkAK9skCU%2FYFO%2Ft5Ahl4ww5f%2BXzMGZDIvC8WeBMfEeT8RMtpLkInlBLGNdj9ceu2gUb1KZGmGYBhhzUjE2YDzyTah3mQB5HH2QeHE04Si6Fe88N8qmLuD5KC4akJ6IXdmSQT9&X-Amz-Signature=8c6863599454866f7280e64437b5a5ba1a5c829c805a666f9e783e472611d5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJUJ5HE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMGgszdM%2B3CxZNWavZ0S2V9kTJ0959bywsgmD5drPrgAiEAzcZLzMAbgxcAlUKSxYgNuaQ3OpQDNafHPtgOPSCWpgIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Ax%2FbMuN7y68FsMyrcA1sESt0zmIK0Dxegwerw0CKbZ3PF1%2Bse3zYnVitRTFB6Y3LhN6og%2BjeeMv%2Fj%2FYlVWPo5QWSuewgofCw4KpsGsxnFDLeHmfekwYS5NQSVzEncRNf8ltsFvd35EkaJf8ZqEdkK%2Bluor02Xj2ZFHnddZnP0tuB14PvcTSgELEgHXLUYYq3TshCQjs2ZO28F6%2BurBL67ODawuNsayUBYVEJ%2FNJkiDVszahGLJ1aHZpDwkUTdZReYkFtp8iT5zQL1zU6C%2FoBBTz%2FnScMLVwtbbzSvUWRi16OEgMPz2R5VBb7Ih9Hb3Nk0GQHmzcrZAaS2i9wmJ3M5b11Ae%2BSC8rpKEOvXXEsN693W57n70MCnBhVoY%2FnjwbfUJ%2B4gRyJq8EroHObc94qtY03ls7GdOwc%2Bgrj4KL7EgX%2F7bqbYUwm1FgN6YslZkvMz99uaT5A%2FIMHlU5jXEYmNruWi%2BXzoQEitQKO%2B7x%2FCgGVwoLz%2BuJDhtxFl7zY3PFYEv%2F9zcXJl1fP%2BikSG%2FbESSmyUs549sce7sl1sbzomtP3K1k1%2FSyolxIPEaG9smKwbKDquq5SqmZmyIoD1Zo%2BG18BAvlzQAvqQHqMp1M2VdCqpafjKQy1Nub2RolcxdbgBXRcPgUgGYxaWMMidyb4GOqUB0iRx0WVx1HnoQm8Eyp%2FJCk0FoUVA4RIPNBJ%2Ffmh%2FUDfbTu1q0T1KyuxHflX4rLF6wDeYDod6z27g1tOXO1kdlxY%2FJUjx6gTVDexXYTSs7CUCBoyYMY4b%2Fh7BjpTVxf90Q9QwTGtXMn5G8w%2ByVrM2e0zPFjrIOuZ34sF%2FfYNokJOFx7p9TSBTYzbtjZUeIhtsA89BOfIJcn65nTGhwi355Mm3%2Bbqw&X-Amz-Signature=eed00a99a93105e0d81307c4cdbe393428eb8a72b772ac68012f441b89dcd11a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
