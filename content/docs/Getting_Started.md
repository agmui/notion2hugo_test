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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=b3079ca0693e7803c5bcfda2c347aaef233c5cf58fb16a8b978a2588b9df4dda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=0a1a8ebd2b0027d858fc3f14562f01fd7a2e33460986c90f207c56579fcf67bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PUZ4BP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC7v91esURS%2BICILU7cl6rcN%2B4M0dZc3yqp%2FJh0Me2jIQIgQDYDr4%2Fg%2FmXsIeYrWfzJx7Em%2BP1S9VbTlWIbBM2E3vMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKjHZ5cwGjH4plZuGircAzXgrn73SvMUaVTLBZioH28MpMp6nHm6QvMvh0HNJJZhOzRiMzJ8GoMKBKKz53xkbUaBt88ODtCaNM8AOwHujIRsXO6GCOD%2FtiGGJJy%2BHLfLXrXYedqAPmyTtdR6FfbZDA%2FgHoywN3QFxHnZsOP2qi32UhU4slz73RaqzwUb7I01Nd09m0Z2EK%2BGNq5uwGFvfzROmXvXeD52KUTKFFc%2FygEZLzzsi19IpqvDxPVZMvs7528x5CqJRzSjugDasnYYbjtQjZ%2BDxl8gVlVsb0dcLunC0ls91JGm4iwy0LbMf6%2Fr6zIGo20n3SLy6RuwYOaWOcf2e8MrZaR0vdyOM9kBzl5pl4PEXGkwj2wIMwnZsxfdkpJfGJcXDfplA3nJD2zbuK67YOBRbdzBJ8eHtcCSFw663xUvUHOhx9HIIb0C8avkBzNflJNJg%2FBnw0ozCDtfHEte1CiBmD8dhuYlfnbn%2BSe43QaYPh2WB4ciBXl2ZKTe1Snqk8U7GOZsJjz45Z%2Bnf32UiOBH9lffbyGWU2UhQxF%2BuAcwj%2FkLXpihwqHC7rA9jSQGAjxS2LHr9T70VwxuDwQdtBSFp2KxMWbETfEmp0N3%2FHDO15raUOSXKCfF2ENp8l2z8FyrzSt6j96CMJOI%2FL0GOqUBarvyxhNmrz0EtYjp3tPJazM7r04n7%2FNStlp6lqRt8woqjppciagngQdLnj5uRREt8ZBO%2FOY4M%2B5e2OZMsm2NRmKrKgYRuWj1cepolWOSw7yA4NN%2Ft%2BKNL0mdHiQFZAwNGvN8sopehWzdxgwL8FJl%2BzJ6wOGfby0QMtewqHOwiNZDfy8j%2Bxr9giGIF3FNmTvaRIDruNMoYrXqN1rz5zn5qyOhlx%2B0&X-Amz-Signature=f83b0956443ccd46d65944649953be75896dbc9d519a89bb3f00f174874f3f82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TXNZCW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDZlZuwj5BhasqiQ4gKVa%2BoTp89lm2ToW9l3xuyt%2BJYdgIgRbpe%2B3YrH1eM%2BTeVAZQtOB2R9HMFcRy2MpEyrPCLQ5Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFlxwJZMlBuvwfjTWircA2vATayI6g2g7PxB6UwqSF3O7eVnNLoNGwptgGj62ggWhn08aURuHAHXhXAbB%2BZuWf6CR8CVWlpKG6uAstNlB0iLzWPq6G2Lr%2FIgj5nk6%2BRwuzMdJJDRChN0BGL2Gvo255ogpsn4Rne28GdwFbwl%2F9PluraQWKknDAhkxcYVbKF9wUa%2B%2B4Vw%2BabshG9bUtQsOVlTaDLqYE2rlvsHMIvIXWVFOSertpI5jyHPrvBSWh1VpSKQyMVajhpcYjlzSMp9Iv2j4Vfn4F5rc41ANzehkjdPWUd9fQTnm6yWHnylNNyDoNAioNiTR9FsG6Z5XQnrwsJokrBA9MRycc8fNBabgZ2vMyVx4%2BCBo%2FQBCV6t3TdfyR%2BAdEMBzT%2FOpCO%2FY%2Fl0KXyMqEcTYyKqBaic%2FF%2Fw8b50aQ1Z7PmfeuOf%2BtqAq%2FmTMZlDpkyJIzCEfMaOjnE757AYzC0652bSnIQ73FScNbD4Pikd81AX5viV47xaqk%2BSx2tO7sbAsC2GT0k7PZZK%2FKPWpH%2FUszwl2cus8TczOYozka9hJQgDXY4gWLCDcwrU9y7n7xeykGL04cNliOla4CFpLimyjIynMBZ8UmgJyEkbpdteKv2MOyhauYVy7kCQJkRsIbjFN0mqMfg%2BMLWI%2FL0GOqUB4nmOgCZ7aeUmstuF7ru%2FA2EclJ4SvDaBopNG7m145FmBFMmY9zqPBZTwQlXUNaMm%2Bk%2FSGF0RDaBw0pNKZCPzBclBorydGX11fxnN%2F8zfFP7oUmR76zPb1l6Vl%2FiLex9lEqu5UY0GDRvNgsAaqvMNW5G267mWAm3kyg6lANJWIWIhTNQMQ7C%2BiRcmGwXURDn8hp9%2FtJbOIaW9HzSQeaxI8D6XLZRm&X-Amz-Signature=4a60cd952b4e2cbc0f2b61f65ec29f0759e5955e59064ebf16b7b3545807684d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=893b10dfe2e19201eccf67df824561a7d3914afd91967547ee3ef2a3c0181faf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
