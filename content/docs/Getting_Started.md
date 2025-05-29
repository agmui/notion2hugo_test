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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHCBXAW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5TIshDBlwcpzDk%2Bu6W3iEn749IdpwtswMUZDCSMgaQIhAPkDciUBImnWnrjHwOohiiGgf36RnrckPHyhciy8G17ZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLMmHt7s71I0piCL4q3APN2jcAmwT5e%2FNN2rrWq6SWXijYQ06sJExhIJDnUlEAKYx8TMJfVmEGwpZtizVyJypwWDuO%2FDFwUulN1fJnpo7rChrF5yqLXHqDo6qp1Dwj7J6MSthMhgL0w%2FGIZZGRLDyhRmuJLIk23p21c2XJLNIeik5vxz424LO2IVn7LWxb%2B8RGmdVlTlMbEvgJ5zKeXbF2cz%2F1erMUO%2F1KANbJpbqkMYJIhV8CJOi8IWj7HdIvjNcbR2reBTeWi9BztNnLNXUpmtYkhvno6KItb86ElSXCVcLeFgZgODrINI0uGfmVYzS4zkaZ48Rv4Yy9NRoGBvHxy8USr%2BhtE4OpmvPi9RqKhIXqxQOaYTT9pJnFO9PKhomvuDqwSDcVEmEQZtdPpTeixJiLrvLcq7np7GqdksNZ9Id5MMusv5LIkApxQ%2Buku7QCv4WCsCNppT1RO0SOGwbFGYzShiJ%2FpflcX8yr5UdQ41n4CNwnp57RTXXVQV42%2Bjfp6e95W4UDnF%2FiB3NfVjaPWWNHzlnjDkniBzTC442Gpe8YWZUDyIkTTz9NH8wqV6XzQNDS8ukHT5dQ3q%2BtjyyFnA3mNijmbhk4%2BWoUg5Oh8GAKB3pJozH%2Fem6AZVM%2BjL6QoRST76ZzN5DvLTCsr9%2FBBjqkAbD8BuYgytc4xLWfhMpXvxtJXPpOrz5VsL%2FAlXKiFIQ1nrCvLI9GuE5aWrRpOUXVmU%2FrSC6cuho96PsfYNPNCGo8uNsPfhmb33ENpTcEjqdIne30t5frWLNO4vJQSzaNiz4ndC4LELCaZPRA8wpbFF13MRpY7iPr0IaryltQQGuZPGSQak3esWPiBMr%2BPzL3lr0tied%2FLjUW4dbsG7CqI%2BOoENtX&X-Amz-Signature=b86ad4e9b8ab422925dca14c667101484f1504eeca14ff237de2c9057e40f9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHCBXAW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5TIshDBlwcpzDk%2Bu6W3iEn749IdpwtswMUZDCSMgaQIhAPkDciUBImnWnrjHwOohiiGgf36RnrckPHyhciy8G17ZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLMmHt7s71I0piCL4q3APN2jcAmwT5e%2FNN2rrWq6SWXijYQ06sJExhIJDnUlEAKYx8TMJfVmEGwpZtizVyJypwWDuO%2FDFwUulN1fJnpo7rChrF5yqLXHqDo6qp1Dwj7J6MSthMhgL0w%2FGIZZGRLDyhRmuJLIk23p21c2XJLNIeik5vxz424LO2IVn7LWxb%2B8RGmdVlTlMbEvgJ5zKeXbF2cz%2F1erMUO%2F1KANbJpbqkMYJIhV8CJOi8IWj7HdIvjNcbR2reBTeWi9BztNnLNXUpmtYkhvno6KItb86ElSXCVcLeFgZgODrINI0uGfmVYzS4zkaZ48Rv4Yy9NRoGBvHxy8USr%2BhtE4OpmvPi9RqKhIXqxQOaYTT9pJnFO9PKhomvuDqwSDcVEmEQZtdPpTeixJiLrvLcq7np7GqdksNZ9Id5MMusv5LIkApxQ%2Buku7QCv4WCsCNppT1RO0SOGwbFGYzShiJ%2FpflcX8yr5UdQ41n4CNwnp57RTXXVQV42%2Bjfp6e95W4UDnF%2FiB3NfVjaPWWNHzlnjDkniBzTC442Gpe8YWZUDyIkTTz9NH8wqV6XzQNDS8ukHT5dQ3q%2BtjyyFnA3mNijmbhk4%2BWoUg5Oh8GAKB3pJozH%2Fem6AZVM%2BjL6QoRST76ZzN5DvLTCsr9%2FBBjqkAbD8BuYgytc4xLWfhMpXvxtJXPpOrz5VsL%2FAlXKiFIQ1nrCvLI9GuE5aWrRpOUXVmU%2FrSC6cuho96PsfYNPNCGo8uNsPfhmb33ENpTcEjqdIne30t5frWLNO4vJQSzaNiz4ndC4LELCaZPRA8wpbFF13MRpY7iPr0IaryltQQGuZPGSQak3esWPiBMr%2BPzL3lr0tied%2FLjUW4dbsG7CqI%2BOoENtX&X-Amz-Signature=7f1323bdeca9dc11f5a4998d9a0611f07b517a3cbe66418745c41691283b699b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHCBXAW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5TIshDBlwcpzDk%2Bu6W3iEn749IdpwtswMUZDCSMgaQIhAPkDciUBImnWnrjHwOohiiGgf36RnrckPHyhciy8G17ZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLMmHt7s71I0piCL4q3APN2jcAmwT5e%2FNN2rrWq6SWXijYQ06sJExhIJDnUlEAKYx8TMJfVmEGwpZtizVyJypwWDuO%2FDFwUulN1fJnpo7rChrF5yqLXHqDo6qp1Dwj7J6MSthMhgL0w%2FGIZZGRLDyhRmuJLIk23p21c2XJLNIeik5vxz424LO2IVn7LWxb%2B8RGmdVlTlMbEvgJ5zKeXbF2cz%2F1erMUO%2F1KANbJpbqkMYJIhV8CJOi8IWj7HdIvjNcbR2reBTeWi9BztNnLNXUpmtYkhvno6KItb86ElSXCVcLeFgZgODrINI0uGfmVYzS4zkaZ48Rv4Yy9NRoGBvHxy8USr%2BhtE4OpmvPi9RqKhIXqxQOaYTT9pJnFO9PKhomvuDqwSDcVEmEQZtdPpTeixJiLrvLcq7np7GqdksNZ9Id5MMusv5LIkApxQ%2Buku7QCv4WCsCNppT1RO0SOGwbFGYzShiJ%2FpflcX8yr5UdQ41n4CNwnp57RTXXVQV42%2Bjfp6e95W4UDnF%2FiB3NfVjaPWWNHzlnjDkniBzTC442Gpe8YWZUDyIkTTz9NH8wqV6XzQNDS8ukHT5dQ3q%2BtjyyFnA3mNijmbhk4%2BWoUg5Oh8GAKB3pJozH%2Fem6AZVM%2BjL6QoRST76ZzN5DvLTCsr9%2FBBjqkAbD8BuYgytc4xLWfhMpXvxtJXPpOrz5VsL%2FAlXKiFIQ1nrCvLI9GuE5aWrRpOUXVmU%2FrSC6cuho96PsfYNPNCGo8uNsPfhmb33ENpTcEjqdIne30t5frWLNO4vJQSzaNiz4ndC4LELCaZPRA8wpbFF13MRpY7iPr0IaryltQQGuZPGSQak3esWPiBMr%2BPzL3lr0tied%2FLjUW4dbsG7CqI%2BOoENtX&X-Amz-Signature=fffec6f26e7b7f1092172ebb8e0ae5c9c1ff66967490e97f0036d0699bd10beb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCDYWUG3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwvIh7HLGjgvk16G3GDJyeDoS5yZQOtxjCiJd1s2ODdwIgTNR09On%2Bw%2F%2FbU2NDFnGXQy0%2BtSP6ywp18kWDpTvuPtAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyveSS8uiXcX2jJbyrcA%2Fp9cn5qbCH0QBj1XyGfekTS8IybmMN0mMt9qpbb%2Fg3ABIAauvd4NmtYYQU4wVuDnAUsTsWXYMIrag2G7SIb56%2Fe9eJHC4PZpRkpFO5hiaAehj2WDZZryCL0Bpg7m307hkAcvP7Rk4q552zHD7%2Ff91T57X3ioDP5%2BIK0uTiOi11t9HIID2MGKAegIJ0CY2yM6NIvPLIV%2FU0ZFGsU0io%2BRezZkRUp3cmvQyMlu7oj8UQDSv6wshH73MDb8fnT4swRX9ohPMXlJy8xBawSfrNUW9kmtJb7%2Fbb%2FWqJ12RUH3rDFPNYfQYb4V7qZr%2BvmaliPUKhnIGS08%2F2YVjOg4qTf7W4rVHdfQZ50NUgRNyaTukZh%2BeSyYz7vjTn650V3eMwVPLuYxdUiXHWJSagBXzJohzmom3CKQLm2vJb03CudxJEF6Q7gHUsEM3oMylqnXmhHbR3%2FUWADeqj8oyas06E7MNtsJIAZFe8YcLpyqOOFR%2B2GNVYpK8iGMAQUKWrB7nfM7opTyA%2FsvDZrNuc79GWQ3QjXKbqLaCfoxB21R7iROZt%2B%2BX1Ppshwzt%2FTCoWrV4JVygpw9wTETqY22KW%2FBtJ1FCb1eTN82i1twM3lh62je%2F6TFFxNyNvSYh8DJt5oMOKv38EGOqUBJotXo8g7K%2B4e5NxOPF1MJ68J8sY9XiSyDmk2M%2F0ClQa3R5lG39LWYsZq9jacMyV6udmN%2BAMeRuFdrkWlqKPz%2FsnS5c0Es14EcqvIgSKqaw625rw9SQ2MjMa6ETP7u3QpoyhUDJ9u5Es17gizggoV2sKOMNFojwhvHEvFPywYWR%2BwqVqOmBMwC1OqhN0q%2Fach8bL5hpIn86bAsXdEHNfSKmhsKZgq&X-Amz-Signature=a12d8eec7df396d7b7bf9f7539d3b777041d5b81334f1482e4115198fced1f95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWIGK6H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGexfb6S1CIU5Y56ZjPYJIfm%2BxStPQH6xj8DEJwv5xhSAiEAreVOkDGEE9XkKW%2Fk4aMMqlqF0tukgPAg3YLbvaPuf8IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE3OQYIXhnLgCVN9CrcAxi%2B4fHTdTVQx9eSHBU36QQ6GEjWWDPlVfX6RYA8JSZ0xfAAaorugx%2BZL55o8YjBElh7qlAIC0qeTM5jaZJbCp816f97ZrMRub8VmZry0G7395WbZqhip1SZKfGfTOzmmWLCzeGnPu4UzT506GzKNQZ1enRyytbCifWMy2N%2Fg9BlIvevvSwHFQKpjhSluCxBfNwTj7WUJFxB08kKIyjkJ4L4XPeTZ1PwvzL6wgVaTsQLEc6Uw3ZbpOjL2b5gP35OQWJnNVhQZNVdofDzDmKCxbicPxkBHmVP57hGc3EE0KkXD5FcrS7JIsnN5Zz1qkOp7datdC52j17QY%2BKPwEq%2B1YMTOC%2BlFtx9xyN%2BC0kZ1n7U7An%2FQ3RVqqS%2BLIMSDvWWciiiFRuTjxBq70sRMZ5BYvBSVkLLxVOsIukZBhiUHQ8GntTQUfDj71mLc%2FkcjXlJTOpER9MkvPk51VdGpWSQG%2FhYNNqFqme7A8OemN2gd54%2FI1PHTee4nAKNRnAymzcL8fAS1RP6zdOnprIaR2gGO30sufAi0segNUkZDuKWJBhbgcBqlOTxeLZocjVkDhUHfpAM6IXFXXbcSaQb9HdvHoEacgi66tGFLuJ1gDIBdnXgWGQ0ksULKQhQcBPfMNWv38EGOqUBtjajsxHybMv0dbtgqdyYZPBO%2BRdfccL42TnXdnPedTrMDQxlyRbl75V%2BILPGQxVjntynO%2Bl%2B1YTGJ23UFy7HEDD7LtySAS1txeay8mQ6bHK3vArwl9KTK5KBXywL6o71uYlBlM7xFjJ%2FwU3vlzQ4pJC4kvOtXazyTBHG5txYN1HfQSprw106Ou7q0b7rDw3WDhx5WOjYnNeZrFkmwzwwJXYI70yc&X-Amz-Signature=bb20a1ff709ad67478f6772d8e30afc8aaa99a13cfe0b842fe65b65042bdcd55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHCBXAW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5TIshDBlwcpzDk%2Bu6W3iEn749IdpwtswMUZDCSMgaQIhAPkDciUBImnWnrjHwOohiiGgf36RnrckPHyhciy8G17ZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLMmHt7s71I0piCL4q3APN2jcAmwT5e%2FNN2rrWq6SWXijYQ06sJExhIJDnUlEAKYx8TMJfVmEGwpZtizVyJypwWDuO%2FDFwUulN1fJnpo7rChrF5yqLXHqDo6qp1Dwj7J6MSthMhgL0w%2FGIZZGRLDyhRmuJLIk23p21c2XJLNIeik5vxz424LO2IVn7LWxb%2B8RGmdVlTlMbEvgJ5zKeXbF2cz%2F1erMUO%2F1KANbJpbqkMYJIhV8CJOi8IWj7HdIvjNcbR2reBTeWi9BztNnLNXUpmtYkhvno6KItb86ElSXCVcLeFgZgODrINI0uGfmVYzS4zkaZ48Rv4Yy9NRoGBvHxy8USr%2BhtE4OpmvPi9RqKhIXqxQOaYTT9pJnFO9PKhomvuDqwSDcVEmEQZtdPpTeixJiLrvLcq7np7GqdksNZ9Id5MMusv5LIkApxQ%2Buku7QCv4WCsCNppT1RO0SOGwbFGYzShiJ%2FpflcX8yr5UdQ41n4CNwnp57RTXXVQV42%2Bjfp6e95W4UDnF%2FiB3NfVjaPWWNHzlnjDkniBzTC442Gpe8YWZUDyIkTTz9NH8wqV6XzQNDS8ukHT5dQ3q%2BtjyyFnA3mNijmbhk4%2BWoUg5Oh8GAKB3pJozH%2Fem6AZVM%2BjL6QoRST76ZzN5DvLTCsr9%2FBBjqkAbD8BuYgytc4xLWfhMpXvxtJXPpOrz5VsL%2FAlXKiFIQ1nrCvLI9GuE5aWrRpOUXVmU%2FrSC6cuho96PsfYNPNCGo8uNsPfhmb33ENpTcEjqdIne30t5frWLNO4vJQSzaNiz4ndC4LELCaZPRA8wpbFF13MRpY7iPr0IaryltQQGuZPGSQak3esWPiBMr%2BPzL3lr0tied%2FLjUW4dbsG7CqI%2BOoENtX&X-Amz-Signature=2b6b3e153b25f2a293491fb1f7f801e7c033797da29c55ade91f234e088bfd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
