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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQA7GH5B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCZ5bY2IaTgbEHxsWj9FAvJW%2FPKi7JNf4uzJ0%2BVSw4stwIgW%2FG%2FLs77getYisb0Xp%2BOwUOF3XGzy90hkFrQwwPp%2BV8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHB82yi%2B9aIaXNdjjCrcA9HU5kIfsTtMSHk%2F9NbYhL%2Fz9k18LY2HdS3dv765%2BtqjLf1wLy1efidfMJDxlTFqokEPv7mYA1eJ3IXFT7fWK913TlxX%2Fs6zPO3PnEdqpC%2BSi2zFTKRoa9OUka9lNUsjaai7vQGyIptBgOISLS%2F7w9wDOb4Z%2FJ5YhsiNSf93mBgcSaCudXHiWlAvPsBLs%2Fi04P438WMnswUiB7xHKCQT41Q9knZl%2BMD%2FLLxUbpSNMsfCTLf2PFC3MD72a%2F%2BNojnmBIcEkpyFSxS7rQ8YL13dZk%2B2kMcudkUSl8NhdndG5wUUzfP1VNJ487J4hekgd1DgcNaI8eT6dWtaNCeEuH718HreSSDXJI%2FLQWhZqc4iKyzuG081I9nCTgxHDjVV4ELHJyWNfdMEz1G7RsuY3ZC56SULFYwszBTjcq6UvztfKy0o9IzAa0hEVagltZBSIXF6h%2B3NQJS447Yo54v4sWavxPyoSEhSvslKsQ62Pe5945T506XEqgZ%2FX9z0k%2FI9APGVVmosMxdF9d1vI9kUzovTbHINj1%2Bfa2wJvr2mcuU4f54PN1Zv5lbYkfvqsk9pzqr0CzEAonfN%2Baf7ouagQMFF1nsGnnTPWgCxuzNxi6iOLsUEvQcJfLX90bB1pBhIMOb6lr0GOqUBJ2y8MCbrI7K01ry3aMjZFibTYwfHryhNdBYnUO%2FHQMBhbCTFrzvaYGfXgs2Ga3dJLcGk8C3AIFXDz9VqezKwu8gePxYilBxZWmUWF0oDT4xyzXB7FBmojj03AZsCwmfkIqfKZrVgnp68crg48b4IhJ4bdfNqjwqB6Yq%2B1w3Vntzn3QGs2f8HGbxPy1ROj%2BurdftbWLMcIsRZXmonnT%2Fc0WcgwMjb&X-Amz-Signature=94484b488d37d325a58b52c8753eb371bc6c741a937eb1063016adf2861ccb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQA7GH5B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCZ5bY2IaTgbEHxsWj9FAvJW%2FPKi7JNf4uzJ0%2BVSw4stwIgW%2FG%2FLs77getYisb0Xp%2BOwUOF3XGzy90hkFrQwwPp%2BV8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHB82yi%2B9aIaXNdjjCrcA9HU5kIfsTtMSHk%2F9NbYhL%2Fz9k18LY2HdS3dv765%2BtqjLf1wLy1efidfMJDxlTFqokEPv7mYA1eJ3IXFT7fWK913TlxX%2Fs6zPO3PnEdqpC%2BSi2zFTKRoa9OUka9lNUsjaai7vQGyIptBgOISLS%2F7w9wDOb4Z%2FJ5YhsiNSf93mBgcSaCudXHiWlAvPsBLs%2Fi04P438WMnswUiB7xHKCQT41Q9knZl%2BMD%2FLLxUbpSNMsfCTLf2PFC3MD72a%2F%2BNojnmBIcEkpyFSxS7rQ8YL13dZk%2B2kMcudkUSl8NhdndG5wUUzfP1VNJ487J4hekgd1DgcNaI8eT6dWtaNCeEuH718HreSSDXJI%2FLQWhZqc4iKyzuG081I9nCTgxHDjVV4ELHJyWNfdMEz1G7RsuY3ZC56SULFYwszBTjcq6UvztfKy0o9IzAa0hEVagltZBSIXF6h%2B3NQJS447Yo54v4sWavxPyoSEhSvslKsQ62Pe5945T506XEqgZ%2FX9z0k%2FI9APGVVmosMxdF9d1vI9kUzovTbHINj1%2Bfa2wJvr2mcuU4f54PN1Zv5lbYkfvqsk9pzqr0CzEAonfN%2Baf7ouagQMFF1nsGnnTPWgCxuzNxi6iOLsUEvQcJfLX90bB1pBhIMOb6lr0GOqUBJ2y8MCbrI7K01ry3aMjZFibTYwfHryhNdBYnUO%2FHQMBhbCTFrzvaYGfXgs2Ga3dJLcGk8C3AIFXDz9VqezKwu8gePxYilBxZWmUWF0oDT4xyzXB7FBmojj03AZsCwmfkIqfKZrVgnp68crg48b4IhJ4bdfNqjwqB6Yq%2B1w3Vntzn3QGs2f8HGbxPy1ROj%2BurdftbWLMcIsRZXmonnT%2Fc0WcgwMjb&X-Amz-Signature=e6893b1cd6b62fa377482e29130b6a7396206b9895cb546651cd5ada101b9fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46NAZQ7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDBOwKe%2FJSaksGqWLBnyg6Zm8i7y%2F%2Fddh2RhwlPxazm3AIgN2LQ21R1HYJ8NfoISOats7pAmuRT3Cky2t82ExK8ROQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDoqFVrvVgWCGaAGSircA6PQgnnUgG%2BaIhKE4aVRmrbRDjfy4BzZnFJ970Je%2BXpSPwvUFPbMs7ftnp2f8IPg8OLbnxecwEoSEF%2BdUYnnlw3v8icrZvAjNtx5CmHCXWoau7%2FvStpwp1S1yw%2BvRsAWWkd4l%2BCfmIVVyNGFyfoTfkAHskif1PDu6gW46IyzCMeci3kYGYEFdkdJZdpO0dqUfxBPYKcI%2BikQCJ3BTo5xE%2BtsvSTTogNqwpxkJKmmf6IVhLTRw%2FXg5uSBVakqCOTEK9UUg2AVx%2BGJIGnDiR2O29ds7daiPNMRLcZqPWoWpFlnUBz25RGOPMdCIzINLc4kHxP4v7EFdgKbVWNAAHu4HOhoRfDleqQu8FLQ%2B9GQ%2BpxnXg4ZIUX92wQNJMqt4VDHrpS%2FxGCS7RoKFO9bwi0R1rfIhlGkTDwaLYdNw7ttJvNMiHVEa0meyaWdubf%2BTNO6lh3Y%2Bq96N%2BqaN9O97BueS0oWZ3NKHFBA2nK8OD69t00YaWWT1GF6cKlUk8nEVQTLUUeYzTYCr0IQFjUOqS7jkkGTQP0eu%2FBLaTx%2BNW8X%2FLxOHtjxOvU1CUZRh8Jg6WPQguh%2BeR947M3scAOg5w4%2FEL6WeTOVKv5GdoxndexE0IE87vjpMWfP5%2B3iy2rGMIX8lr0GOqUBM7POVcOdDsxF%2BCPabX8yYVJ29FZH9D25xmL1xsyBU97yzZQmCDjDwpyWJMggOgmu6W5eW80C7kZvqJ0jPZD9NvEGod22qLzUbtWnO7JCr3pEOf5PN0CWvAHdmry8IMsWNnxGX6B3yAEO8pRRlHfWbEh%2FSdBgEEdtm4XARp82YrksEoi7WleEPfHItpAorwiQH0%2FUcNZgo7L3gKbkaKOR60j5PzFU&X-Amz-Signature=59c8eb402c1d17b13435d4239e71f3761106f501497f89a5e8b1e62f5f15cedd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XNVZX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDbswt4VuAIKemDaRXo7ItwEFSxMQ1ImaJUa3aO%2Bz8FTQIhAI13bXMAwj1u2ryGcT%2F9cDN4T2LXsJj42OH7V9rEKZjMKv8DCHEQABoMNjM3NDIzMTgzODA1IgwgNxAxNW3hqJWEoQoq3APfbe1w8VXPGgQrBmv4j2Qp3TTDRJnKMq0qxmMgLUBx%2FTY1BB11f%2FR92exNHNJNSFRqm61kj4VlquwEJqBexsHSgn0NR3YoKCGjZF9DtcBL9JHwpzjrEZyL3BxMx4FXGfV3ZAID%2BfnCie0Y2N%2Fj5yiDbdJjq%2BmsUJ3o9SEgoB0D9b%2BYq3FZW6TOB%2Fs%2BBfH2GaW59EkkJtb5zrGSmIlIN6mEoAzEpbrfexslwAqRrW0HAsz5lqAbAdxxLixqoacmeUk9AIbpgcebmNhv1t6pykKKPXvy3GuxcdmLvqrzVCl2kd3Miw14UrR7Nk2QZHQN4QEG3BvLfxyVyRfsPnlV%2FVV8wAXJ80O%2Bt%2FJI90UhASInQM2xIYfe3pOzf3telh9WEL5X6PqeIE9KPSueZgw1ysdlcvg%2BhgZR7yXo7vsAyp07kFx35Se33fnXKYbFTPMn3ybp9udgTxRBnDhF3%2BKvB%2FLcNhgK4ZyKHw1E1Dejx0LiCamVGKE%2BROYLS6zxkiQzZ6OOhT5NX3vUqCIYrHIxhDdvqgXTijPKhmYgBFwPFUVNYrM0sUfI3dGBjwOFclfvm1mwem3YQfGdTjAwk%2FocUN9AALiF%2B11zZujTAULbE%2BsvQ8i%2BijF%2BgjoGrV1SpDDB%2B5a9BjqkATvGgpKYg2SoVBpNbeM1uiurl1LPJvguDbdOBQ8V5zeismnv3S%2BKZ16aM%2BMmcYUg5Fch1ri%2FVjtBHpmKCY3sKLm8t4P4Fw3VLhl03xVii4NLQqygZumyv6LcQE1xCLY6KwiGZU5STk1CHa%2Fy7rBSh3Yh3aMH3HTqKL68Z3lPM%2BHHEc1IUP4IChcX8WKQ2frLH%2FhkFYWDpWhkqEWATF1u6a5Fx20S&X-Amz-Signature=42d7a80f18798a928a76711ff19dd590ec423df17709b914eb4cdf50fdfbc34c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQA7GH5B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCZ5bY2IaTgbEHxsWj9FAvJW%2FPKi7JNf4uzJ0%2BVSw4stwIgW%2FG%2FLs77getYisb0Xp%2BOwUOF3XGzy90hkFrQwwPp%2BV8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHB82yi%2B9aIaXNdjjCrcA9HU5kIfsTtMSHk%2F9NbYhL%2Fz9k18LY2HdS3dv765%2BtqjLf1wLy1efidfMJDxlTFqokEPv7mYA1eJ3IXFT7fWK913TlxX%2Fs6zPO3PnEdqpC%2BSi2zFTKRoa9OUka9lNUsjaai7vQGyIptBgOISLS%2F7w9wDOb4Z%2FJ5YhsiNSf93mBgcSaCudXHiWlAvPsBLs%2Fi04P438WMnswUiB7xHKCQT41Q9knZl%2BMD%2FLLxUbpSNMsfCTLf2PFC3MD72a%2F%2BNojnmBIcEkpyFSxS7rQ8YL13dZk%2B2kMcudkUSl8NhdndG5wUUzfP1VNJ487J4hekgd1DgcNaI8eT6dWtaNCeEuH718HreSSDXJI%2FLQWhZqc4iKyzuG081I9nCTgxHDjVV4ELHJyWNfdMEz1G7RsuY3ZC56SULFYwszBTjcq6UvztfKy0o9IzAa0hEVagltZBSIXF6h%2B3NQJS447Yo54v4sWavxPyoSEhSvslKsQ62Pe5945T506XEqgZ%2FX9z0k%2FI9APGVVmosMxdF9d1vI9kUzovTbHINj1%2Bfa2wJvr2mcuU4f54PN1Zv5lbYkfvqsk9pzqr0CzEAonfN%2Baf7ouagQMFF1nsGnnTPWgCxuzNxi6iOLsUEvQcJfLX90bB1pBhIMOb6lr0GOqUBJ2y8MCbrI7K01ry3aMjZFibTYwfHryhNdBYnUO%2FHQMBhbCTFrzvaYGfXgs2Ga3dJLcGk8C3AIFXDz9VqezKwu8gePxYilBxZWmUWF0oDT4xyzXB7FBmojj03AZsCwmfkIqfKZrVgnp68crg48b4IhJ4bdfNqjwqB6Yq%2B1w3Vntzn3QGs2f8HGbxPy1ROj%2BurdftbWLMcIsRZXmonnT%2Fc0WcgwMjb&X-Amz-Signature=d79f176caefd150fe273d6bd3f4d1411c1eff8d386f2bfe11471f11a14278a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
