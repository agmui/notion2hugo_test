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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UBVXF7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHXwzjjKUFnLClzaZ%2BuKlcwAFPJb8Of2j%2Foa7xVY%2BKKAiBJG67gHWUD7cZOVZmh8bGKqaD6Lv%2FSiFKtJpxkomPu7CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2hGDzRKs7jyqgcjKtwD8nI%2B0eK4jzZeiRv7aCXn3LYLjU55oXbI84B3vah4kApDF5FXlPwD0IWa%2Bk53Nk%2BgKh5OHBtFF%2FX4HHXRf95TSUvtTfgRryfPUsFCWKy2QKDDI2c2g4xOcOxKHXMhUOwj2rNsxGsazk6nwZLmCkw7CWD4VxbJbzYiWuajPx9Rz1r4BSrHECuivpk%2FX%2BVogyz%2BsZqzoX5cWO%2FQAOcgM1aI%2FPFOAoQ62HAfP6IunIYlNpd5zY9S4304%2BRaqsQKUGPRazDSUNQXGBt2ya8uGkxibaPIuVNUyMYj5DYiYk%2BYXl%2BZT7NU9AaMm%2B0i3xlHcPJV%2Fl8vQzkhDAlpGrtykQt5Bmd073cHuWMZuPbY%2F9BzwQG3JcHCczu%2FYRExuI0mJ2NwZszRh3pQdryMnV94kv5NTZne60sgn4iU5VsgKqmUsjIbjLUnOLfM93pSwdB5F%2FEZYUTapgyJzXK45GCM5XCovdHQ77lk5Dm1q%2FilKRMWjtZ5a2566wqvKiN%2FzZg7jPybnz5hA0HKfYhVsTITDjexH%2FaeTkU4mx%2FxwUYspBSLEJm72MPL8FGcj4HRfBhL21nEYt7RqQ3NNlVHFFf4rl%2BrWKcbcLNj2zhCqtIkHeyfGXkzDfhtEsoGfleEVoZ0w5smuvQY6pgG%2FpFDob30ukbIga7nrvifPgtp2pygJLpcd346JoLfEuZT0z7J0AFZcBR%2BaaapvXjggw3WcYrgSE%2FmimKC68vpJD0uiIep9LgvuneQRhJQoenho8eksNrjRQrx9CmakBQVD15JQ1jXKyN8Ipph0OcWEbHEY57RoCsrskzZ7qdIROfv5FRcKd9eJetSwEF%2FsncFX%2F0gYBvb5Na9ZBmP0Q8BJSjtKDDcu&X-Amz-Signature=669e87d000d608fc0b94e439ac74d7ef9fa4a62109de59e0038228524e1fac54&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UBVXF7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHXwzjjKUFnLClzaZ%2BuKlcwAFPJb8Of2j%2Foa7xVY%2BKKAiBJG67gHWUD7cZOVZmh8bGKqaD6Lv%2FSiFKtJpxkomPu7CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2hGDzRKs7jyqgcjKtwD8nI%2B0eK4jzZeiRv7aCXn3LYLjU55oXbI84B3vah4kApDF5FXlPwD0IWa%2Bk53Nk%2BgKh5OHBtFF%2FX4HHXRf95TSUvtTfgRryfPUsFCWKy2QKDDI2c2g4xOcOxKHXMhUOwj2rNsxGsazk6nwZLmCkw7CWD4VxbJbzYiWuajPx9Rz1r4BSrHECuivpk%2FX%2BVogyz%2BsZqzoX5cWO%2FQAOcgM1aI%2FPFOAoQ62HAfP6IunIYlNpd5zY9S4304%2BRaqsQKUGPRazDSUNQXGBt2ya8uGkxibaPIuVNUyMYj5DYiYk%2BYXl%2BZT7NU9AaMm%2B0i3xlHcPJV%2Fl8vQzkhDAlpGrtykQt5Bmd073cHuWMZuPbY%2F9BzwQG3JcHCczu%2FYRExuI0mJ2NwZszRh3pQdryMnV94kv5NTZne60sgn4iU5VsgKqmUsjIbjLUnOLfM93pSwdB5F%2FEZYUTapgyJzXK45GCM5XCovdHQ77lk5Dm1q%2FilKRMWjtZ5a2566wqvKiN%2FzZg7jPybnz5hA0HKfYhVsTITDjexH%2FaeTkU4mx%2FxwUYspBSLEJm72MPL8FGcj4HRfBhL21nEYt7RqQ3NNlVHFFf4rl%2BrWKcbcLNj2zhCqtIkHeyfGXkzDfhtEsoGfleEVoZ0w5smuvQY6pgG%2FpFDob30ukbIga7nrvifPgtp2pygJLpcd346JoLfEuZT0z7J0AFZcBR%2BaaapvXjggw3WcYrgSE%2FmimKC68vpJD0uiIep9LgvuneQRhJQoenho8eksNrjRQrx9CmakBQVD15JQ1jXKyN8Ipph0OcWEbHEY57RoCsrskzZ7qdIROfv5FRcKd9eJetSwEF%2FsncFX%2F0gYBvb5Na9ZBmP0Q8BJSjtKDDcu&X-Amz-Signature=7732be8fb0784b52cf35828e6db4687e1ee30a50f9a9f97c48f73ae4b4d8edbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YF3PU3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTtKsNBJ0pnfpkfkxV5IFyKRhCMjyK64rvmCVGnAlWAiEAgfnTK3frxuxlKR007UJ9QPi0Km99x4XBPo28t7kmq98qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDhhJ1UUvNDwFErcCrcA2a5jmzuqozxPMYasf%2FuSfbN%2FyMOsg4Wohl8h4cs9YR7Mo2zFGgBvPTyOybho%2B8OT3Zr1GftrOAXk7ociAFoTAq0EWkhw9rdTtTzSqvgLAF6BvHAmRvIxhzP1MJ9k%2BC%2FcSFMw2GrpRo%2B5INYKZOdVUl6hVN%2Fy%2BfAusJdugKxTqjF5tIGIc0jfKnIEq%2FoO%2F2gW0VaYg%2B2boZOZsh9NSbV1MxEVVH%2BK4SfIXqE7CJlfRhpQ148HANJtdkOu6wR72rYMVWahf2rScesd3KSHcq%2BIQO%2FE2nh4C7CxPabAWBfT4Douc%2BLK1L9fGfbdbX303AgSzh9g6vQBwT7HvdSU3TiHk1S6oK3SH%2BehQ7sYFlxvk78DisybAEz%2BambKcPLKATwbeqE%2BEWgIH9A9xsM9hA%2FSFjuDZy4Zm0vwPvojjUaISZhh%2B9tDxIt%2FuWMQ9TFE8iSQihy%2BTbSLFkI2p7ekqYzBzle%2FHFXSE9B2KJX%2FSmC4GhmyupOmWpcXH%2FVNRc5sRLdyujrKlcTrkx0iIsQZNGZJFrAyZpmuuQFLLcF63bZn2GfbhvCup47a1jJHESl0ZaTHlYeWmCUoLaZ5nmOpqhy7E%2F9Li0newvIV%2FZlLyN3%2Fwz1Y76uCtILK%2FWPOC%2BKMOTIrr0GOqUBIc%2FgNxcm3uD5sZLDU%2FqW8aIY8PH2HSjIpgDYWc2WBamYcjNxPry1O8%2BKnFUzcaCUDAuJcBrm1n6qumMBhm2Dg3yyvLgVTAG3eVI%2FaDJ2xndU6FmFUV6iYgkc8Dhfvzh4AiA03DMbKhVaeiyv7NXHx%2BJD5kJ07IW7PmfBM7SjUzgv7hJwzs0ent11ek5TGkcFSlDpiZWBLprjsnsmSqaaoCWSzTbl&X-Amz-Signature=1efd33005f5df8d4d22d0e6b5a660f9278860e7a1da5cb49843d4ae0ba5a8f04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSUCGNP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvKIPUQ7hhUvVp2O6eenemB5OPwVUCdlzuWgjO%2FNibnAIhALDb3O3Cukwa2SC3ZC8OgNZVt%2BbOhAJsuyFLEdXkt64IKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxK08GYl0oiALF9I0q3APoefDK8hNND8OtJTnnmFBFQJTXlYBnoh86BIISpudnHz4fPrXA3C5JBJnGiLxlW6uUjmbdwm5Fj4MOez69OiP3gay3RMrWyx78AuqqvAdcbwZCTrLw7pzznBn4s0zeKflDQZzoEUdT88Ttk%2FxaB2CkcSS%2BOsFVr1XIC%2BLtiJWgFj9dHcNs7iFIKMw82dnz23hJ7ZvFrsQMlZ5RHD4Pme9gAiOeQh40WyTl4xmTh%2FVdZq1nlEDmVcho6m0nd845oSMsyWcvCD%2BlndwI4034e7GoXibPYztVA8RghEmPMRrGEZgSSNkTO5QA5RfW9NBG8U3lp%2Fw2XaPvEesMtQEJQJ9QE8qg0KZT3KDEANMdGQO8Dm0JejT%2FF2G6HCclVH8%2Bkec8u%2BpmkbRfdcqUW0KSN4kkJtt0dmb2kfjmT8uvcZ1nWS4f1sCrfKvzS%2B3l5%2B0rcpBx9RgloR%2BjX0ynOJ9Fq3Mu5Vit%2BSyDjcScW%2B13B5uSdDbUzo6CO60QVreOVvdq8sQPkf3U8DFJVtnEBIUg%2F%2BY0ZRDTqf%2FYYfCoklrE%2FeumFKD6hld0ZoTR4UdCsF7O06PElyMkNAp77QB%2F72F5Zp6Hd1bQVuFiDknDC5QTRGo%2FuNkODyHJ%2FJ1Dg2XibDDiyK69BjqkAdjhBc7nDu0B5kZ7cY3144yLA98AM0bGxsSYdolH%2BMuDgkCJqQQB%2FxtXZ3tg0m6MdV4d0JP5PZfL6RURkbCYGAN5%2FpaXwwIvqTtDjTSne2GWI%2BX023EiKENS9aTGoW5MQySvVOJjlHMmky0NBTdrAgcio5Bap%2FB6%2FttWb0GtralFbuc0%2BrAom0mBvf6T3Nrpvt%2B3W3%2B378TmPJiIaWmD%2FSSwyDdY&X-Amz-Signature=c03e6cde2ba7df5cb833b170f60c5f59e915adc68cae728174d924a97be1ffd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UBVXF7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHXwzjjKUFnLClzaZ%2BuKlcwAFPJb8Of2j%2Foa7xVY%2BKKAiBJG67gHWUD7cZOVZmh8bGKqaD6Lv%2FSiFKtJpxkomPu7CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2hGDzRKs7jyqgcjKtwD8nI%2B0eK4jzZeiRv7aCXn3LYLjU55oXbI84B3vah4kApDF5FXlPwD0IWa%2Bk53Nk%2BgKh5OHBtFF%2FX4HHXRf95TSUvtTfgRryfPUsFCWKy2QKDDI2c2g4xOcOxKHXMhUOwj2rNsxGsazk6nwZLmCkw7CWD4VxbJbzYiWuajPx9Rz1r4BSrHECuivpk%2FX%2BVogyz%2BsZqzoX5cWO%2FQAOcgM1aI%2FPFOAoQ62HAfP6IunIYlNpd5zY9S4304%2BRaqsQKUGPRazDSUNQXGBt2ya8uGkxibaPIuVNUyMYj5DYiYk%2BYXl%2BZT7NU9AaMm%2B0i3xlHcPJV%2Fl8vQzkhDAlpGrtykQt5Bmd073cHuWMZuPbY%2F9BzwQG3JcHCczu%2FYRExuI0mJ2NwZszRh3pQdryMnV94kv5NTZne60sgn4iU5VsgKqmUsjIbjLUnOLfM93pSwdB5F%2FEZYUTapgyJzXK45GCM5XCovdHQ77lk5Dm1q%2FilKRMWjtZ5a2566wqvKiN%2FzZg7jPybnz5hA0HKfYhVsTITDjexH%2FaeTkU4mx%2FxwUYspBSLEJm72MPL8FGcj4HRfBhL21nEYt7RqQ3NNlVHFFf4rl%2BrWKcbcLNj2zhCqtIkHeyfGXkzDfhtEsoGfleEVoZ0w5smuvQY6pgG%2FpFDob30ukbIga7nrvifPgtp2pygJLpcd346JoLfEuZT0z7J0AFZcBR%2BaaapvXjggw3WcYrgSE%2FmimKC68vpJD0uiIep9LgvuneQRhJQoenho8eksNrjRQrx9CmakBQVD15JQ1jXKyN8Ipph0OcWEbHEY57RoCsrskzZ7qdIROfv5FRcKd9eJetSwEF%2FsncFX%2F0gYBvb5Na9ZBmP0Q8BJSjtKDDcu&X-Amz-Signature=e5a33be00cc79625788b6f3a07621841b8b94744a5dad328f4d6980f3d5ef89c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
