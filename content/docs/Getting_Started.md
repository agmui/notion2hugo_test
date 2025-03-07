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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCCPSQF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2FyGumWANrjOqkHmQWQ8%2FijmRcS705ijrfkFvNJ%2FL3rwIhAJdqaYMpWcIZXykf2EoVdFt666lhg0rfNEjR1dgc7cAgKv8DCEsQABoMNjM3NDIzMTgzODA1IgzSIf%2BoMAZ%2F2fZ58Xgq3APpuwnimRGEWA0UMMEx2dsUbhoMi8XIbimg8H7j8Sd9cKfAs%2F2wLYL6b9vuMAVEYPFB5%2FpfDsjjGYlL%2F0OdKuz19KY2%2F7i3kdaKYkEgxOV2zBblHJnjvdwoFwao8LP4WujKysEO2T%2F276iH%2BzZmsP9amBqM7org3s0vo9BtFUY6AyNQ7dMb3n3DK7Dng3ATIpmn4p%2FXzoxaYecx0D6d%2FyjMPUASMoSVwdqNr%2FbF2lCUDjKi24%2B%2F7EohuaXeq0iK50uqlYfAzaklASicPa8MYpGNRKTTwK7JjWTvpkSUJegbje6sGH%2BbOK%2F1tXVE49N%2FCYpdo71UbBGRdRE3TmIZhxh%2FAbH0TCKI658S%2BSRtft3THtV%2BtUynTCuqL7KRJQpsGJxUUAhE23ys3%2BNwtBT0purcRtGg5EQ9yT%2FbdApVcUAAy4eq1X15hDiO4i83pyZ5RRn%2FMCzI4sjWDr%2FmKBHs5Zpu9b1fRtSLnugccRCh57cD4WHP9IC0%2FZSFnz9DeUv32soUoNWgEbKlLDNpFWNht%2FzBq9jcGiQ%2BfhllTt9iBhvYCFAcfli8A8WuZl0fP4uTpk6DdNwmBUGMOqOEb%2F6UV%2FxxhtB2fl8Pw6bFtwHlBI%2BkGP%2FCp3b%2BnSPhZRCNUDDs36y%2BBjqkAZ69jums%2BNTQgqgRhzaz8XuzuAQN4Fhigv5Bbf8AKxR1Uf1VMysoNqJsal8%2Fxdy2Zm%2Fl1uyL7s1mvWykRadoxRCijzvq1NQaHj6R%2F8ssPypmxmW6aQ5HJL0w3yE0x6eETUVivPOiIy1dEgUxXTdMMxaRXuhsKyZV%2BgpHTAfrUdXtanUgGZy0BcqLOMtlwSCqHsOgpUx1wBmR%2F2tdhaZf9RRpik7V&X-Amz-Signature=5a9b8ea4942eb69a612f2090e680444256d31c2630aa15648d525ba1f649c8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCCPSQF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2FyGumWANrjOqkHmQWQ8%2FijmRcS705ijrfkFvNJ%2FL3rwIhAJdqaYMpWcIZXykf2EoVdFt666lhg0rfNEjR1dgc7cAgKv8DCEsQABoMNjM3NDIzMTgzODA1IgzSIf%2BoMAZ%2F2fZ58Xgq3APpuwnimRGEWA0UMMEx2dsUbhoMi8XIbimg8H7j8Sd9cKfAs%2F2wLYL6b9vuMAVEYPFB5%2FpfDsjjGYlL%2F0OdKuz19KY2%2F7i3kdaKYkEgxOV2zBblHJnjvdwoFwao8LP4WujKysEO2T%2F276iH%2BzZmsP9amBqM7org3s0vo9BtFUY6AyNQ7dMb3n3DK7Dng3ATIpmn4p%2FXzoxaYecx0D6d%2FyjMPUASMoSVwdqNr%2FbF2lCUDjKi24%2B%2F7EohuaXeq0iK50uqlYfAzaklASicPa8MYpGNRKTTwK7JjWTvpkSUJegbje6sGH%2BbOK%2F1tXVE49N%2FCYpdo71UbBGRdRE3TmIZhxh%2FAbH0TCKI658S%2BSRtft3THtV%2BtUynTCuqL7KRJQpsGJxUUAhE23ys3%2BNwtBT0purcRtGg5EQ9yT%2FbdApVcUAAy4eq1X15hDiO4i83pyZ5RRn%2FMCzI4sjWDr%2FmKBHs5Zpu9b1fRtSLnugccRCh57cD4WHP9IC0%2FZSFnz9DeUv32soUoNWgEbKlLDNpFWNht%2FzBq9jcGiQ%2BfhllTt9iBhvYCFAcfli8A8WuZl0fP4uTpk6DdNwmBUGMOqOEb%2F6UV%2FxxhtB2fl8Pw6bFtwHlBI%2BkGP%2FCp3b%2BnSPhZRCNUDDs36y%2BBjqkAZ69jums%2BNTQgqgRhzaz8XuzuAQN4Fhigv5Bbf8AKxR1Uf1VMysoNqJsal8%2Fxdy2Zm%2Fl1uyL7s1mvWykRadoxRCijzvq1NQaHj6R%2F8ssPypmxmW6aQ5HJL0w3yE0x6eETUVivPOiIy1dEgUxXTdMMxaRXuhsKyZV%2BgpHTAfrUdXtanUgGZy0BcqLOMtlwSCqHsOgpUx1wBmR%2F2tdhaZf9RRpik7V&X-Amz-Signature=8de268ee3acdf39399793ae3d1961c0f431052506f8c183db449624ed072e496&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5UKS2Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGfHCn1WWH9MGnH86I%2F7EfCStG6HgFkzjkSewbC13%2BqDAiAjNfzEqnMTGGusofTHvWbAwe%2F2QQHReb0koRTsqUIjUyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWIBChq6F2JK7Rd1SKtwDgIPPkMRH1Wpu5p1NBscelyEDoHIdcQD%2BxwV7lmduNLwZjnIO9AWV8i6vQ00EH9G96gwatarvG%2F2SXsYlm5aeI4hK8QhOz99TwvXel3Hs7UW5pgJ7rBwSMleyIzhWHB4cRI4JiMFQ1c6rH%2Bjm%2F4l3e5wXvY1JEJwNL0tOQXFrBgeAC7RwLjdfzmsVuAjYegywFakKDsWsRPhy3WNfh9I%2FKCivZyZeOTMt8sTzJKUp81aJJbnEJe7rU%2Baox5paBYbmJkF8WoYzP6gOPEOUrmmfgTdGhzWkkkqD4m9nXarjwt%2BbPUu5u3bRFsWwr13A3OUMeJw000qoOy%2Fl2IvtlHPkAuo1we8M%2BREPr7WasB%2FgCoVr9Y0wGRMilwElT8j3C511KC9wdK0Kf0b6EQsS3jf7BCGDAjLDjU5C4r5ZxdnaJbIDZCRuMMUbXS8bWQD8b5ANF78lKg2epXA2MkWmHEFNA3v02of0twNXVYfrBIifhR7%2Bd8sv6mz8b2WsOxvvXG5rQKD%2F7KPo4qUjJTf5sNkBUR%2Fi0Msz%2FmhhoO8R1v4m%2FDnKVYoFP1iYzxCzAX2%2BRiHKsVdBEcEAG%2BGtV2wz5MK3xdmHPypvf6ETELgVi4X6vA7YwpChw6wcNu7TU0MwkeCsvgY6pgHoFLSuWRRzC4jcfqKntO2VRPO2sVzrgqegs4dEPiKnSShAO2tnlIzst3lIiIHU%2F8YA6XfdfxRB4sP9zqCtroRUVwI%2ByXqvs8gnmqCN%2Fha3WybvmxoKkrSKp9t6puVvAWnu%2FRiBdKF1WjSnKphxwOI70Egj5%2Bs8ZzMWVwJ%2BggcBFavxfEz6sqq5b%2FKB8cDz3zjH6mOtdgKceBowHBVKV3yTZ33HOy%2FI&X-Amz-Signature=dc92829c2f8484a285723e82cc5107c0312f736244a77d4d0a2b6811bc8a13c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIJGLINX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOW060ZdoMq7F6pBgpyvDf0sd0NT06ti9gfuUAVWQoVQIgQqpAwKcW7gd1ZaMRpUHQUdx761BNkNrKCXi1neRu%2FX8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF0iiNYAGSAe522JmircA%2BE2n66ehW99pGR5a3A%2BaCRdBvtDDE6uzGo4BDmhKhEhqLRodfQ96fxB%2BVu6aqVnYvL6AhXSj1kVYsAH%2BOHz1AlWz7rC3qUZu3e%2FCbjbZ%2Bvt3ZgprCUv7F0r55p5l04967AyEHdrmfrXudFlmvWHr9ZCM%2FaHGSL4OzCLozGT3nJbYczZ5dB8OQaocmjUPkJ8Qp7r2dLB4VxSxPgLYTmVAPpLVpoa%2Bj9bF9B1ZxaSKemekTd1hwesW6J%2BJks76%2F5DeKmE9ovSpssYg4HRvQdPWOY%2FRotbFvA8XUw%2FrP3vbcxkCjnKfVnM8QvGDNPesZ8WCTdm%2BEr%2FYZ%2B%2BsuTAvM7B%2B2FcPIKFi5C3MAAlF5%2Be%2F4Ii3LObD5ZCDpW%2F0BuLCheZZjAz25Tskc5T5vYPRysR2pKSJASqLWfY68mwf3RpQ0RBI8fwVF1WhliTDnZut%2FK8B1TG6mwbrwmhbGKSssPaw7LKGVEECav%2FqmYJYq%2B5riVc08iRP6%2B0GxX5MKEi%2FOOm%2FsmAeuJBXkrfvh0mVf9TbNs6NlTh%2F5tOwvQp5dboS%2FaJeKSJL%2FcyhnkoqlZWwiPq2ykusGZCOKy5Mt17WJ%2FdgOpL%2F3UUnlD7V1N8moj8BrbIJtX47oWnCUquqOtAMO3frL4GOqUBy5%2BvSdxLoBjY%2FJJypC%2FC4qzYXzBBkFPM5FduD0Kdbe1n8EaltJg8fwXILMxW4MAZl%2Bvkek%2BRzHvb1F4n1XSaZta3Y8dd8bP2U7v9r%2BZGdVmjm0nlatz0eTsoT1nB%2BX6o%2BT9AX8dBQyA3zluK6yttDFjOGHHqOdz4EkAOraU1J9ipPGUZFELfuCI6B7o6v8JvqnVY85FyofKlBYdrF%2BA%2BNsyk%2BqSA&X-Amz-Signature=8220eb7ce9cb64c3b6260a267d1c3490a43dd638d61c205629645b627133f463&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCCPSQF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2FyGumWANrjOqkHmQWQ8%2FijmRcS705ijrfkFvNJ%2FL3rwIhAJdqaYMpWcIZXykf2EoVdFt666lhg0rfNEjR1dgc7cAgKv8DCEsQABoMNjM3NDIzMTgzODA1IgzSIf%2BoMAZ%2F2fZ58Xgq3APpuwnimRGEWA0UMMEx2dsUbhoMi8XIbimg8H7j8Sd9cKfAs%2F2wLYL6b9vuMAVEYPFB5%2FpfDsjjGYlL%2F0OdKuz19KY2%2F7i3kdaKYkEgxOV2zBblHJnjvdwoFwao8LP4WujKysEO2T%2F276iH%2BzZmsP9amBqM7org3s0vo9BtFUY6AyNQ7dMb3n3DK7Dng3ATIpmn4p%2FXzoxaYecx0D6d%2FyjMPUASMoSVwdqNr%2FbF2lCUDjKi24%2B%2F7EohuaXeq0iK50uqlYfAzaklASicPa8MYpGNRKTTwK7JjWTvpkSUJegbje6sGH%2BbOK%2F1tXVE49N%2FCYpdo71UbBGRdRE3TmIZhxh%2FAbH0TCKI658S%2BSRtft3THtV%2BtUynTCuqL7KRJQpsGJxUUAhE23ys3%2BNwtBT0purcRtGg5EQ9yT%2FbdApVcUAAy4eq1X15hDiO4i83pyZ5RRn%2FMCzI4sjWDr%2FmKBHs5Zpu9b1fRtSLnugccRCh57cD4WHP9IC0%2FZSFnz9DeUv32soUoNWgEbKlLDNpFWNht%2FzBq9jcGiQ%2BfhllTt9iBhvYCFAcfli8A8WuZl0fP4uTpk6DdNwmBUGMOqOEb%2F6UV%2FxxhtB2fl8Pw6bFtwHlBI%2BkGP%2FCp3b%2BnSPhZRCNUDDs36y%2BBjqkAZ69jums%2BNTQgqgRhzaz8XuzuAQN4Fhigv5Bbf8AKxR1Uf1VMysoNqJsal8%2Fxdy2Zm%2Fl1uyL7s1mvWykRadoxRCijzvq1NQaHj6R%2F8ssPypmxmW6aQ5HJL0w3yE0x6eETUVivPOiIy1dEgUxXTdMMxaRXuhsKyZV%2BgpHTAfrUdXtanUgGZy0BcqLOMtlwSCqHsOgpUx1wBmR%2F2tdhaZf9RRpik7V&X-Amz-Signature=f9dfae7c7865cb33228a166aa7e8600d9a62a705ebed70ad57d95e1f9939b6f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
