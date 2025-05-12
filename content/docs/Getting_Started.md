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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLS6ERYR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDbs83XqBis%2FnoNS3ItCfgiwtievW0JctaMSc6P%2BY6oAgIgcG9T7UrXbDWfe%2FQU7OBn9O7PBUV1CvgQqmQKKRhLix4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmH6zLeAsM5qXfeFSrcA7woHnjo0BbBJizgWAW2imeuxKDCCZsHLGT8c2Ii5Z1Gdh1RxUe9N%2BeHA%2B1G3s6WK%2FpIsOz9KLEIHrkFLEdS3eIYC3kdC0PRIpC89cDKtiz0UHzyeAS%2Bj9Nvv2FimsEvZ%2F5pV%2BVzCBPq9tL9dWcb0wN86s7zBad2MLWkXUQxnWwpvQHD5UgFq%2Fm%2BOfoBP8nDASIbGSJnu8vE7SwpS1Bx%2BUM436cfzSsv1DUV3Y2WVpytrPhvmPdtAhyyks0bNNyUlbOFsJ7bqMCSnrVsd0nwSgNXgyQzecM0FBFhujIuKAlnWhqro%2BtPlm62wh8i0wzbM6F7%2F2ocwSEyO11fkskwyofW1RIoK4Cl2GHRrDPAXcvLOcgvwN7A%2F2tHoiTtXTmiNoN3jF5HQhLJTm3hTKWXyZvuHiaGQwtBE%2FNJG%2BQxSWNBgR%2BjQmfdZra%2FwrnumT7efu46DbH9nnck8Bzo%2Bn5CKh4VteHsttN0SNKQPa0Jj0qW0D3l2PqE9ZZGlrP1lx8V7ZxHGZCWWvvF5gWvm6kj5foWf1G5pcsnhuiSZPQS0RarKkPugvCJyp%2FI0MQXUBGMa6zg3Unj%2BIvolXupoABXIAifKSelgi6kRIuvEU%2BUtPTCT2LNMs2QkEpOimpRMLa4h8EGOqUBXfQJNgf5vg8OqIwHkfvRAzueCz4UvBHBnlaYBcV4DwFXtRaHLmNeyph%2BDb1DXg43wQDJKaODOIk6XtseUppeONqEqYMcwZB3q0NvnzOuiAyBzxjianWwgVB5%2BvmJmo1RCz60N3pa2aqkuHY%2B01zQ0y2%2FZvexToRRjQMrPO%2Fykt2QyeFOZYRYEqeV0Eq6drpExJwK1av7Nl1S1ldt5OFzSwGGtvSU&X-Amz-Signature=8dfa2778d68ac7cd54f746f9ea633ff466d7f72a08b3f2505e4e6145ca668ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLS6ERYR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDbs83XqBis%2FnoNS3ItCfgiwtievW0JctaMSc6P%2BY6oAgIgcG9T7UrXbDWfe%2FQU7OBn9O7PBUV1CvgQqmQKKRhLix4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmH6zLeAsM5qXfeFSrcA7woHnjo0BbBJizgWAW2imeuxKDCCZsHLGT8c2Ii5Z1Gdh1RxUe9N%2BeHA%2B1G3s6WK%2FpIsOz9KLEIHrkFLEdS3eIYC3kdC0PRIpC89cDKtiz0UHzyeAS%2Bj9Nvv2FimsEvZ%2F5pV%2BVzCBPq9tL9dWcb0wN86s7zBad2MLWkXUQxnWwpvQHD5UgFq%2Fm%2BOfoBP8nDASIbGSJnu8vE7SwpS1Bx%2BUM436cfzSsv1DUV3Y2WVpytrPhvmPdtAhyyks0bNNyUlbOFsJ7bqMCSnrVsd0nwSgNXgyQzecM0FBFhujIuKAlnWhqro%2BtPlm62wh8i0wzbM6F7%2F2ocwSEyO11fkskwyofW1RIoK4Cl2GHRrDPAXcvLOcgvwN7A%2F2tHoiTtXTmiNoN3jF5HQhLJTm3hTKWXyZvuHiaGQwtBE%2FNJG%2BQxSWNBgR%2BjQmfdZra%2FwrnumT7efu46DbH9nnck8Bzo%2Bn5CKh4VteHsttN0SNKQPa0Jj0qW0D3l2PqE9ZZGlrP1lx8V7ZxHGZCWWvvF5gWvm6kj5foWf1G5pcsnhuiSZPQS0RarKkPugvCJyp%2FI0MQXUBGMa6zg3Unj%2BIvolXupoABXIAifKSelgi6kRIuvEU%2BUtPTCT2LNMs2QkEpOimpRMLa4h8EGOqUBXfQJNgf5vg8OqIwHkfvRAzueCz4UvBHBnlaYBcV4DwFXtRaHLmNeyph%2BDb1DXg43wQDJKaODOIk6XtseUppeONqEqYMcwZB3q0NvnzOuiAyBzxjianWwgVB5%2BvmJmo1RCz60N3pa2aqkuHY%2B01zQ0y2%2FZvexToRRjQMrPO%2Fykt2QyeFOZYRYEqeV0Eq6drpExJwK1av7Nl1S1ldt5OFzSwGGtvSU&X-Amz-Signature=6cdffdb5adbfc156a1a23edef59b51b94c77c78f4fc9f2e9598fd894e7a4ee53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLS6ERYR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDbs83XqBis%2FnoNS3ItCfgiwtievW0JctaMSc6P%2BY6oAgIgcG9T7UrXbDWfe%2FQU7OBn9O7PBUV1CvgQqmQKKRhLix4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmH6zLeAsM5qXfeFSrcA7woHnjo0BbBJizgWAW2imeuxKDCCZsHLGT8c2Ii5Z1Gdh1RxUe9N%2BeHA%2B1G3s6WK%2FpIsOz9KLEIHrkFLEdS3eIYC3kdC0PRIpC89cDKtiz0UHzyeAS%2Bj9Nvv2FimsEvZ%2F5pV%2BVzCBPq9tL9dWcb0wN86s7zBad2MLWkXUQxnWwpvQHD5UgFq%2Fm%2BOfoBP8nDASIbGSJnu8vE7SwpS1Bx%2BUM436cfzSsv1DUV3Y2WVpytrPhvmPdtAhyyks0bNNyUlbOFsJ7bqMCSnrVsd0nwSgNXgyQzecM0FBFhujIuKAlnWhqro%2BtPlm62wh8i0wzbM6F7%2F2ocwSEyO11fkskwyofW1RIoK4Cl2GHRrDPAXcvLOcgvwN7A%2F2tHoiTtXTmiNoN3jF5HQhLJTm3hTKWXyZvuHiaGQwtBE%2FNJG%2BQxSWNBgR%2BjQmfdZra%2FwrnumT7efu46DbH9nnck8Bzo%2Bn5CKh4VteHsttN0SNKQPa0Jj0qW0D3l2PqE9ZZGlrP1lx8V7ZxHGZCWWvvF5gWvm6kj5foWf1G5pcsnhuiSZPQS0RarKkPugvCJyp%2FI0MQXUBGMa6zg3Unj%2BIvolXupoABXIAifKSelgi6kRIuvEU%2BUtPTCT2LNMs2QkEpOimpRMLa4h8EGOqUBXfQJNgf5vg8OqIwHkfvRAzueCz4UvBHBnlaYBcV4DwFXtRaHLmNeyph%2BDb1DXg43wQDJKaODOIk6XtseUppeONqEqYMcwZB3q0NvnzOuiAyBzxjianWwgVB5%2BvmJmo1RCz60N3pa2aqkuHY%2B01zQ0y2%2FZvexToRRjQMrPO%2Fykt2QyeFOZYRYEqeV0Eq6drpExJwK1av7Nl1S1ldt5OFzSwGGtvSU&X-Amz-Signature=5e5377d653250b8f5c323cda9ec7e6391bb720ea418b88868f8663e8760c7456&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPRXPVZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD5pMehZIKq89ASmLuZXuehXAAHn5enGxNy0Is1ghOvxgIhAO4Y1Ov7YHEPpMiMEYbOhG3h95Y%2BXMJiJmKVO%2FRd%2Fp55KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxV9OWUz4rV%2FkeeUIq3AOCWkQ922BPVutc6%2BfIYihrNjztzac2m8rtUoIjNdHCwBdhlKtHNvXBzhzKEJJaMJK4rlGpqW4HDT%2BGhVZu5IxpCfVpRxldle2Zw2DLStnHzO7jd3LgbDy1KlLEZIBV4hyOrNDY6I4lLKpD5bkRwEQBCNhZ9B4w8BlUCsotrkxaf1n1k0dg7jVbuUf7sY7IDil%2B%2BWq3HDHjKW%2F2OEn4VcQOs27jH3WHYW2wgxKYW4qVgikiccBzKXD%2BAY2C1U98uc4dgqGvbX2ODtJ1ojrK0J8tHxif%2B%2F30TKeyQjsU7et2%2F9zzo1nGgGGiPBPgjz85XP2rP%2B0%2F7dQ4YnDuVZCcFqECNys1XjFU1pdF2BwuHayMDJcQFpWHpI3QRrlv2e7etFHC3%2BLlpXzlsfdDgmiWtbIHO3WwujXmc8ok7Hrn2AeCPKV5nADw06hKQlJlIlo43CEdIbSK7RbUH4C3dTsNRVB9bkJcvkEDiCHdb%2B1GLPVlI47avV9KyBU%2FDilNW6Vx1gpkQHdk84VB7xHjKhdcAtDMZZC4nsPPL8XokVbE3g9gbvQNJINADeZhGpF1qdtgAHvbVu1mAQv%2FeIBTBrS2sHjk%2BmffYLgXtiGPmJ3i2hU7v5CoR9YK%2F%2F9WsMTTizDXt4fBBjqkAb8XZ7s0Unz8nx1P057SQr%2BNvFcusQdgLC67BV009nY3ihNVUPc09NI19%2BCmz7BCf0ivvnthhOVKOCtpEKwp3k0ABxgmT9DaiYQRQWbZvuGzThGxUx9CraB1v7GewrSQt5eq263TMI%2FfQpuSy5pRHJ0mPcCkwS%2BlntHFCI81jp%2FNS%2B9PfNeE79MQ2SokIZirccqPJ0fgBcBTPeYxhOIimF1AnO81&X-Amz-Signature=8f6f019fb7d90187699e2baacd0ace10d9c198c09fee886333f7d9546d6b7f51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIGA2IT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUlMNp8GFgQ3h3IP8fNM7Fwp2bL2RQoDxtjcfShCxFZQIhAOerrju7W0rPTOz1BY6g7y%2FXEo6rm6FnJS61texpwxRQKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FwekLgXnCjOVzFEUq3APLCo59eyMJXXAAtpD9i7HDG%2BhfGVW9eA9o1tMS%2Fge8y4YFQ17otASVc2jE2KpvNinSmXH5Ashi91qKOpD91iAkc0LHcgVnwJoiAVoetJjbnpFTbhVDz3lH21CPOwqhTihp7%2BmKY7JmL9LAIgJXTnFso08pqEZQL2lBDGABSlAC5MwmuGgZzJ9ultDw8yPLj6t0d38mMF53VnamYKer%2Bj6WdasQYdgKqV0Hj5ta%2FP0P38ftHSA38cOI%2F1kHORzNbILjqiF2DkmiXUlbcpekVEmBixnvA%2F7ylrYrv0uIZ3vrpI%2BRkjSznAvVY%2FWzFKL06F8CuodeeJFFVmXpZgTg4qW9drhjhiLB6XvpLd7QhOGE%2FU6j5IYPrZoZrkql98Z232OA0yx5kE%2Ba5UWkTTb658y6a6PIihDQK85dp67uWbYv6jwmlJmmwVqwuf2i1dQoZBlBQr0M0ocFHFAxWezwSu1kgh%2B9dwufFSxIQFPuwT%2FC%2B3e56jE8sv8tTF2VHXMwZDIlPG4QDk7Map4HVz5sz0N43%2F5fsXKkX9A0xwQ4vq2MVIR7sGDWDetc9rEwrZUwe0eY8cAisnZwvMLUidaxy2rfr9i%2FjDpCLwHNnIQtAWQltSzf3CcEQYvEiOv%2BFzDjt4fBBjqkAa%2FZKOPxoX0C%2BcFThWdamb9YFrDnkY60VR1YS%2FNCRyQHUudfQ7zptOXONgnRgi5DpWWFRc4i2GqVtRFJjDPYt5lTKhdxLHX4Q4Uyss%2FUccaNzH3DQ7v45874cgm1EnSv0mIGe%2FjLhjO15isFYXtY4egkTuXmmP0UOX9p5kIabujoeom65vlvg6vFjeM7q6o1TTUoZToaegTnVBZQod7oukyK0lsL&X-Amz-Signature=29e7e43040e185371657e599d0ff0e245011e1c9255c3ed6f1d670d2bf44a39e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLS6ERYR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDbs83XqBis%2FnoNS3ItCfgiwtievW0JctaMSc6P%2BY6oAgIgcG9T7UrXbDWfe%2FQU7OBn9O7PBUV1CvgQqmQKKRhLix4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmH6zLeAsM5qXfeFSrcA7woHnjo0BbBJizgWAW2imeuxKDCCZsHLGT8c2Ii5Z1Gdh1RxUe9N%2BeHA%2B1G3s6WK%2FpIsOz9KLEIHrkFLEdS3eIYC3kdC0PRIpC89cDKtiz0UHzyeAS%2Bj9Nvv2FimsEvZ%2F5pV%2BVzCBPq9tL9dWcb0wN86s7zBad2MLWkXUQxnWwpvQHD5UgFq%2Fm%2BOfoBP8nDASIbGSJnu8vE7SwpS1Bx%2BUM436cfzSsv1DUV3Y2WVpytrPhvmPdtAhyyks0bNNyUlbOFsJ7bqMCSnrVsd0nwSgNXgyQzecM0FBFhujIuKAlnWhqro%2BtPlm62wh8i0wzbM6F7%2F2ocwSEyO11fkskwyofW1RIoK4Cl2GHRrDPAXcvLOcgvwN7A%2F2tHoiTtXTmiNoN3jF5HQhLJTm3hTKWXyZvuHiaGQwtBE%2FNJG%2BQxSWNBgR%2BjQmfdZra%2FwrnumT7efu46DbH9nnck8Bzo%2Bn5CKh4VteHsttN0SNKQPa0Jj0qW0D3l2PqE9ZZGlrP1lx8V7ZxHGZCWWvvF5gWvm6kj5foWf1G5pcsnhuiSZPQS0RarKkPugvCJyp%2FI0MQXUBGMa6zg3Unj%2BIvolXupoABXIAifKSelgi6kRIuvEU%2BUtPTCT2LNMs2QkEpOimpRMLa4h8EGOqUBXfQJNgf5vg8OqIwHkfvRAzueCz4UvBHBnlaYBcV4DwFXtRaHLmNeyph%2BDb1DXg43wQDJKaODOIk6XtseUppeONqEqYMcwZB3q0NvnzOuiAyBzxjianWwgVB5%2BvmJmo1RCz60N3pa2aqkuHY%2B01zQ0y2%2FZvexToRRjQMrPO%2Fykt2QyeFOZYRYEqeV0Eq6drpExJwK1av7Nl1S1ldt5OFzSwGGtvSU&X-Amz-Signature=a62911abe6ec132f78f9cb3c83fae8b7c183586c364fe35c7a64381673c7240e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
