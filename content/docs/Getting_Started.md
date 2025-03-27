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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPHLAG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjly03Xmm3oPJSTR3%2B6gktBPRLKbYHmD%2F0L%2FfwDH8stQIhAPPoToy%2FHDr6Di15PlnkENLuEyXRBufmRgOHBSMLwVaoKv8DCD8QABoMNjM3NDIzMTgzODA1IgwpOg76KVl5L7CfyNUq3AOj1mL13iwU3gVnzBi5DMAIWwEkBVa98r2QmFek2%2Bzm76%2FMuIbZGpDGK%2BUVOhIKxD2ZKsoAxgC3yuIY1gQmMAU4V9TjLJNN0KMzJSel0R3IkyOSlG3CjBi1lfwMP1AFsQaxR%2BXQ26RzNFXtaRsOL3UWAr1wtgBkE8Bw8eO3Stk0%2F3XY1mJrtgj6OzJco7sV4O254egMuGCGji2lho9BGyuwCmkiUgDbTF9Jl%2BHlwutU7cjRt9CzgERVd%2F1jO5futUGS21hWnsXaYaNp%2F53tFkVww7SM5rik1KkcXO%2B1TsQMBLf29yisbBu9DUFAqXpg707KbEymbk11vs8htroHDkrxFas0xR3zyk7MuEAmoMGc9MVLNhNfLJ5NWuFQc7c9%2FF79dlPyA5L4UFDpgvpHN509zoFaxnUZffAkdHJ6dMee8LYUYPZvPLWHWQrw9Maq%2FctSff%2FyfvARN8ZRc%2F%2F5ELcMOgdBoOwT%2FWqF0pR6vWI6%2B1zVFy5%2FqzKnC%2Fc1ATR9b32Pvl0IIxCsIHn4XYQM%2Bo6kLP%2Bqh0jcna%2B0%2F3ilTJesvYVBFvTtJ6eI8kGLMrDH6uYFndERdyN2N3YKaCsgH3Zll%2FaDYi%2FedtjZg9rNzXCf5hHIXjy2WPR8RlqfEDCQzJO%2FBjqkAb2o7X2LgEd5HxhImu47BS2yIpne8KFCryCojalHXTNIN6DIeAza9Snsu12yu4maoEJGYS0LRH6qKxWNIvn2dz%2F0T%2BLCYgj3zL51G3%2B9CaZwcDRVgww0EjN%2F%2F1aPKEePw1OVU4MvSYkeNRwJOOSz%2BLJqiWfuWF7oOFKalsLUGHd5tbh33zCjfEVlpgxCyO5bUFnSS3MEgG5sh%2B6tgyEPQ1hOTln0&X-Amz-Signature=45036ade96b881f699691b55af308db7d47ad248e63905e8074607ded8c8a5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPHLAG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjly03Xmm3oPJSTR3%2B6gktBPRLKbYHmD%2F0L%2FfwDH8stQIhAPPoToy%2FHDr6Di15PlnkENLuEyXRBufmRgOHBSMLwVaoKv8DCD8QABoMNjM3NDIzMTgzODA1IgwpOg76KVl5L7CfyNUq3AOj1mL13iwU3gVnzBi5DMAIWwEkBVa98r2QmFek2%2Bzm76%2FMuIbZGpDGK%2BUVOhIKxD2ZKsoAxgC3yuIY1gQmMAU4V9TjLJNN0KMzJSel0R3IkyOSlG3CjBi1lfwMP1AFsQaxR%2BXQ26RzNFXtaRsOL3UWAr1wtgBkE8Bw8eO3Stk0%2F3XY1mJrtgj6OzJco7sV4O254egMuGCGji2lho9BGyuwCmkiUgDbTF9Jl%2BHlwutU7cjRt9CzgERVd%2F1jO5futUGS21hWnsXaYaNp%2F53tFkVww7SM5rik1KkcXO%2B1TsQMBLf29yisbBu9DUFAqXpg707KbEymbk11vs8htroHDkrxFas0xR3zyk7MuEAmoMGc9MVLNhNfLJ5NWuFQc7c9%2FF79dlPyA5L4UFDpgvpHN509zoFaxnUZffAkdHJ6dMee8LYUYPZvPLWHWQrw9Maq%2FctSff%2FyfvARN8ZRc%2F%2F5ELcMOgdBoOwT%2FWqF0pR6vWI6%2B1zVFy5%2FqzKnC%2Fc1ATR9b32Pvl0IIxCsIHn4XYQM%2Bo6kLP%2Bqh0jcna%2B0%2F3ilTJesvYVBFvTtJ6eI8kGLMrDH6uYFndERdyN2N3YKaCsgH3Zll%2FaDYi%2FedtjZg9rNzXCf5hHIXjy2WPR8RlqfEDCQzJO%2FBjqkAb2o7X2LgEd5HxhImu47BS2yIpne8KFCryCojalHXTNIN6DIeAza9Snsu12yu4maoEJGYS0LRH6qKxWNIvn2dz%2F0T%2BLCYgj3zL51G3%2B9CaZwcDRVgww0EjN%2F%2F1aPKEePw1OVU4MvSYkeNRwJOOSz%2BLJqiWfuWF7oOFKalsLUGHd5tbh33zCjfEVlpgxCyO5bUFnSS3MEgG5sh%2B6tgyEPQ1hOTln0&X-Amz-Signature=143d7155a570cfb072030bc8020449919d9cce573a66440e3f7288a874fafcba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMRH3TC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKAML7WuYqzigdM5XFCA%2BXC0qQfpeg7Qs%2F04noB%2FhPEAIhAJ9mRE9KScyCoMx0DbI1VWjFOrJeWMUzu3Bi57OgknntKv8DCD8QABoMNjM3NDIzMTgzODA1Igyh98622Hzp0Ntru6sq3AMtuVXW28m8t6f0mK%2BRTBSaFxrusjEQZlJYiHvo0m1x8Bb2iGTjUXDBmRui%2FYnucoJObheE4dDwlV1IFNPs7ao2twdLIIhdz820l24Of%2BxpYlqkDEG%2BTvPxvDHGRjanT%2F0opN1GqEKn%2FdV4LlTlhwJYoXAjBBXlMWK4j1vaAT09CcCXLcrL69gRNgRUGq5LYsyEdd8Ti%2Fhv%2FmEvSsKQWCiRVNB4VCH5h8lewUQNBcX%2B83NsJI7PwAvx4uC58nUCozPGt4H5JG6LBau%2B6uXpKsnMtJgThJBHMJDy90t4pwiHlD6cTlZg63H0xah87XOMCYJOu0S40jT%2B%2FaqKlfLMh8kBpYqINY79qKE8BhxlrK%2FIS%2B1qq%2FwNTKvlquj49ZjIzeK3ofwg61RbICtJPNFbPJgY6gZXksaR7Qm2sPhADPBNtUAngg8OmPF7FdkPPrpmiRDXgpw3FmRlw%2BL7iWBInmQVvOSjJez4MmT7jqz11AWVgw%2BlrgarNMdRDlPotLYyZrVD%2BQjaTKKKpqQGX3DGESl0LwnfdPjwaqONkqjNLmD19NT7qR3Ydl38CGfxgHzRrKJ5H2GjUgfBqpz2%2BgxAN8TQXSXosuGfghGiRBS83f0TVTvAz6ppCO4a28rdBDDRy5O%2FBjqkAXbGb%2FQdYxtxByEE1CBxHm2AORPLUMaCElk%2FQkpbYwjeJANiXrifM%2BXT2WKqwuCvOxLyaKx2e0f7vPzklItSHrJJ2SDFF6ilwcVLIO1LePI1VpRLa6D64smUcDGYE5uWcpdhQnjrQRb4QibK3XU8TiJj4cagt6KqD125w5QPOQneSL9YUIqzBoeAtwWMnDTQPpOJ6PlvsSAFeAu8ByYtOPPeqdDf&X-Amz-Signature=e58b48fb10c2443eb798ccb32f65c07fb303b64d8efc9c742689118e7e68e510&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOP6VQG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMvkIoaBqP0QueMUxvj%2F3F0EL5Xw8aKR2XCdNJLYkW9wIhAJ31z0xqpMskAjVr7UzFcoDJNMDtbai7zBo2%2FGjCUFlgKv8DCD8QABoMNjM3NDIzMTgzODA1IgzYr%2FRUd%2BPCOAdHkDUq3APHc1rSvOXBgk1oYfaECgE0cZ9izudxcgyslhP5ADPNiQfXhTuL1i2Tptg%2B%2Fs7g8JqbVVCMkOcRci7NZpu7mnP2%2BFDkB33wKiaV6sH10Tqy8hduQXeOQWE6phtPO1Lg4clZ%2F8KUEnbkUqb7Gv72JX%2B5jy9fytpG2%2FaVDn4N%2BMVLLgnQ73cxhGlGhFyF7H3YRKAF9VoIvjvetf0qXXl1Hfl9q3Hf4sZXqVeVld2jXtKCcyuEJ%2Bbc7t5Ad6NZZk9C%2FwYtfjVhYS0mOtySwgvpzMb%2BbcHe71RB9Qgb52JIh1why%2FEvA%2FvuGjqz6b8YLzc4tNz5Jswmgkxxv6T4tvAS7wI3RObcTp0Bjd4L5sTLIjJtK1qkL3zVeY3LQZc6n7Y995pRkUGIT3%2BQ7f0TmJVcfY09P%2FRFCpgDoaMwX9wiGZOFuf0h855vnC9IjYbw6jb2PmV3bV2lUSyc11D9oF8D8lbg6%2BXyCImUErgrMl%2F3XSDZ1cbgoZlgPrHPsQd8rLikHu2ScoNEhMtrAxiBmKJECKN4zqLGUICZe%2BDWn8nJeJGV0O8wqKKWlARUMRsGdc2O2yyvMLGf0SDBTysBwk707FUGgahEEB7j2V%2FNWtK12y1nVkZKqLsB0RD206DAZzDRy5O%2FBjqkAZa%2F3maOiFLOJtLHy61B%2F9dEnQTc8OHwE3fHFnwpEWmziBxoHz5X%2BZ6Sj5MdIFu%2FgeDdgX2nvCtWaYH6nY9jDjyIc8T5hNDVmguNnYnTyEzfxbUao51jCTuUTV6nOzak14MAiwZPJOT3AkGzl28GQQa%2FzrkgWo4gfhcn3UXngRlAQLvzYHbIbXw8dmdwepQ40xq7eoftp3y449biyKtGywAp0zwy&X-Amz-Signature=7a7d3203b128eb61910dcde911951a4b7aa0a6ae096ea1fd5b2b56d45608a524&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPHLAG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjly03Xmm3oPJSTR3%2B6gktBPRLKbYHmD%2F0L%2FfwDH8stQIhAPPoToy%2FHDr6Di15PlnkENLuEyXRBufmRgOHBSMLwVaoKv8DCD8QABoMNjM3NDIzMTgzODA1IgwpOg76KVl5L7CfyNUq3AOj1mL13iwU3gVnzBi5DMAIWwEkBVa98r2QmFek2%2Bzm76%2FMuIbZGpDGK%2BUVOhIKxD2ZKsoAxgC3yuIY1gQmMAU4V9TjLJNN0KMzJSel0R3IkyOSlG3CjBi1lfwMP1AFsQaxR%2BXQ26RzNFXtaRsOL3UWAr1wtgBkE8Bw8eO3Stk0%2F3XY1mJrtgj6OzJco7sV4O254egMuGCGji2lho9BGyuwCmkiUgDbTF9Jl%2BHlwutU7cjRt9CzgERVd%2F1jO5futUGS21hWnsXaYaNp%2F53tFkVww7SM5rik1KkcXO%2B1TsQMBLf29yisbBu9DUFAqXpg707KbEymbk11vs8htroHDkrxFas0xR3zyk7MuEAmoMGc9MVLNhNfLJ5NWuFQc7c9%2FF79dlPyA5L4UFDpgvpHN509zoFaxnUZffAkdHJ6dMee8LYUYPZvPLWHWQrw9Maq%2FctSff%2FyfvARN8ZRc%2F%2F5ELcMOgdBoOwT%2FWqF0pR6vWI6%2B1zVFy5%2FqzKnC%2Fc1ATR9b32Pvl0IIxCsIHn4XYQM%2Bo6kLP%2Bqh0jcna%2B0%2F3ilTJesvYVBFvTtJ6eI8kGLMrDH6uYFndERdyN2N3YKaCsgH3Zll%2FaDYi%2FedtjZg9rNzXCf5hHIXjy2WPR8RlqfEDCQzJO%2FBjqkAb2o7X2LgEd5HxhImu47BS2yIpne8KFCryCojalHXTNIN6DIeAza9Snsu12yu4maoEJGYS0LRH6qKxWNIvn2dz%2F0T%2BLCYgj3zL51G3%2B9CaZwcDRVgww0EjN%2F%2F1aPKEePw1OVU4MvSYkeNRwJOOSz%2BLJqiWfuWF7oOFKalsLUGHd5tbh33zCjfEVlpgxCyO5bUFnSS3MEgG5sh%2B6tgyEPQ1hOTln0&X-Amz-Signature=9b0bba76251e910582e758c3f56448275b8dbd42c20954f9a9dd12d68a800080&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
