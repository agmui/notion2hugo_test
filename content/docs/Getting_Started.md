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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDFGKKR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3KO%2FZQvZ0QOz2E3x%2Fbe%2B2y1C27fAG9mg1izAuPURVEAiB03fe%2BUbUOVvY976Lpf2elZmnacU5tvENWjUJaR8yX9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSiltPEnBT41GS1NQKtwDvJFT1PWGt1D%2Fsf8hrr2CmVmNdOWLK6VrItxVJAx9%2FjogYviY6ATZ8bE%2F8rOYPIY%2BP6lbllcUtBcO1HPQHF%2B4MVitLbbC8Dej8KKeyV2mJgA%2BJCdyxER1gHziHDQM%2FSkp1E0wN91rTsyxFLnlgEfD7qbyA2OoTL5%2FEizE0xvswBmUdkM3%2FBk6eqfdfPX1hj0cG3zqH1F3efo%2FXN5JyV8bgTtaH172wx9yphQAH1o%2FRMOWQgN%2B9YCilP2TvvHzK06ot6D2%2B6uMzTy5%2BoiMJBJxE%2BwCR6yOQfBvEK8ncfPot8fikmHv5CgYvICmraznFjLd%2FdngnhFT0z2Bm3milbyFOSo87GIl%2B57hTk6VNXFhLRCwX220KqDmdp0nS7dleTYajWUzce9v%2FQVcOdSMikkGL1oV5ihqDm27ywr8jfOku7MnCVNWjLwDb0sjYF6ADVP8vdzrUJviYTJOXJSn4Fpjzbl8D1N5Ib25qZls%2FbuE3suauewbdXL8gswgK1Rc%2BxSxGuEPVpgSy7tQYH%2FUZY%2Bo%2Fpnu8phD8q%2BMhU85JO7aWvA3FWmPX%2FVar7TY3cAP8YlsstFR922QQv4wtxnNSCYuqI5QRS2r9pItvd%2FuV7sI%2B3s2%2BhKEB%2BqikCwFAbQwh7aywAY6pgFXSokwHO2oHerbjSVnrjRnt%2Fr7pZI44pW0N57cq4Y6zEM4N5UbyYMsX9%2BTcWY2nL8v57VwGkQ2hmAWS8Y4A%2BooYZh16YxRMV7AQ03rDqdPTFIPI8W%2FL944ej4C6fcJ2rRx2L7xtzECQJAk0aEo%2F4kzz0piR9cPbNkOsa6FtNxXK9ZtfOzEkj%2B7%2BuCJaYlzYKXRzum0DHr97%2Fo2cFefMMWE%2FF2svuw9&X-Amz-Signature=789f144ce4b5ce2f6b30a14ea16a6e948530184331d4bb42a226db6a96faf73b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDFGKKR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3KO%2FZQvZ0QOz2E3x%2Fbe%2B2y1C27fAG9mg1izAuPURVEAiB03fe%2BUbUOVvY976Lpf2elZmnacU5tvENWjUJaR8yX9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSiltPEnBT41GS1NQKtwDvJFT1PWGt1D%2Fsf8hrr2CmVmNdOWLK6VrItxVJAx9%2FjogYviY6ATZ8bE%2F8rOYPIY%2BP6lbllcUtBcO1HPQHF%2B4MVitLbbC8Dej8KKeyV2mJgA%2BJCdyxER1gHziHDQM%2FSkp1E0wN91rTsyxFLnlgEfD7qbyA2OoTL5%2FEizE0xvswBmUdkM3%2FBk6eqfdfPX1hj0cG3zqH1F3efo%2FXN5JyV8bgTtaH172wx9yphQAH1o%2FRMOWQgN%2B9YCilP2TvvHzK06ot6D2%2B6uMzTy5%2BoiMJBJxE%2BwCR6yOQfBvEK8ncfPot8fikmHv5CgYvICmraznFjLd%2FdngnhFT0z2Bm3milbyFOSo87GIl%2B57hTk6VNXFhLRCwX220KqDmdp0nS7dleTYajWUzce9v%2FQVcOdSMikkGL1oV5ihqDm27ywr8jfOku7MnCVNWjLwDb0sjYF6ADVP8vdzrUJviYTJOXJSn4Fpjzbl8D1N5Ib25qZls%2FbuE3suauewbdXL8gswgK1Rc%2BxSxGuEPVpgSy7tQYH%2FUZY%2Bo%2Fpnu8phD8q%2BMhU85JO7aWvA3FWmPX%2FVar7TY3cAP8YlsstFR922QQv4wtxnNSCYuqI5QRS2r9pItvd%2FuV7sI%2B3s2%2BhKEB%2BqikCwFAbQwh7aywAY6pgFXSokwHO2oHerbjSVnrjRnt%2Fr7pZI44pW0N57cq4Y6zEM4N5UbyYMsX9%2BTcWY2nL8v57VwGkQ2hmAWS8Y4A%2BooYZh16YxRMV7AQ03rDqdPTFIPI8W%2FL944ej4C6fcJ2rRx2L7xtzECQJAk0aEo%2F4kzz0piR9cPbNkOsa6FtNxXK9ZtfOzEkj%2B7%2BuCJaYlzYKXRzum0DHr97%2Fo2cFefMMWE%2FF2svuw9&X-Amz-Signature=916faf56ef8903c835868e6d85d03a5236597704283b2b2b39d804617f587baf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBHYNO5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhtaeo57%2FP1ZKj%2FmqyQavFIvfTBgkoZT10kt5ijW8OMwIhAMSkZyWyepdTW53peMZgBo6ceq%2BtyIwiWj91UVYPUe59Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzGu68dSNfmDiXjD5wq3AO0ECKqR0we5M6I5ta0dlKEBwNqHrG%2F728GpREZaupMaIO%2B%2Fz1kRTocn9mad1z3SBwzjcaIHbBNB5P4YDXIWAzZ6EPkR1JhGrfrgeBqlJ7DoHOWagDUsygM77kGlyBxAF9WgfDcdGt5TK6BJGyIIsBLxU3wfD9y9HtVnC058ZaQ1mejFuCiFRrJAXR1R6ywafax%2Fthrr5ORZQPhvfXVxYSUp6wFt5amr%2BReGcze2TQZCHGbcuKKE1l2WLI0eJ4cY9q4kVMlk%2FYBpguTNRKZBXGpuAEolwSWIeplSTx1%2FDHLaY98GCk8Hdi%2BWBpgBID7WUWzKkeLiN9CfID51wyjPr4pqS%2FLX6XmDXl9sLYRc9nzDPWohzrKTUQN1CuKrG3d3w%2F6I6vhR1hdSE00nQ72lZEwH5vzQ5XwiMZCiM3WAi10n%2FO%2FXS%2Br9Ik2CEw3WWGE0iCQ8SnhSAlVLBac%2BZabMXnPcZtRYx8tclNca32wEx9R6Ty0JKNW36i1cN4KbDFiFjWGlvKLMizpWskaV8SQJGQtim5sFmfLElh2sDYyXIFmQ3BcOvFzx03JmrO6iAyolNxZhqMmTkp3GYKE%2B9A41woL82RqTCE7OnBjzqvdmPPnxFuEw1qslbb0mM2mODD3g7LABjqkAb1awfSIzlG3LsKyJkxXOFy3V7v1nYLdpGrgJJMKEZjNg9l0PnWMhsBqc1s8SJncsmLcVgxpbVhP4RLO1W4jsjobOpLqeH94vKokC%2FnpgwSblm65RGGVQSMpWRk0ktwhxRxMabtx%2FJcnlwpig5AqSwI8tzvE3sADoTvPdWDVjnZD2i6IU2SmVMYYv6i2VKI7Le6LfPPuhsmYH8MqjDOpgIcfLHud&X-Amz-Signature=cab976615364e6f6dd2a8de6eca46d74f3ad78001964f7cc1f049fc71805d6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXP6TON%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt06TMNpUDd%2BT4RSzn820NduSZh3RmHdC%2B1zo2Xq7g1gIhAJCdZCigKZAOx%2FtM8f9rFSue1bYvwN13L3Y6anwovOs2Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxZ0Da9YjcEfJqcbTYq3APAmVSB%2F4nuS%2ByJoP4H%2BWppl3GvimMsrivWYnPoaZaCKf2%2B04lqJlRYOz4xVzmOe2lM%2BT1kDcsEAOotYw%2BgUv%2FCVrxSXfl7Dcg8AbOdlAuh2Sh%2B3GnmkjCe2ggtyJYuVLevu9oTWg%2F6DAPAzJd6e%2Fmn53cGB3ZMFFaOQtl4edCgkTLKDDZmDfFeusscOhMAsb6OPFLcsSUiDBmE1GWE5xGR2dXb158%2FxWk%2B1YRR8ZmMEniwINJH1hEEV7WomLmpnVs9dj4kRMukLqop%2F9hJaOfhZ6YQKVUl9Al6v%2BPfnTpqLH46OgA7xvyASbg2g4ri2qFaiz%2BgCFeDF0w6oXfJb4Di%2F9cB%2FKslyb%2Bgtixd3wGuAdrn0Y4bizmNONLhi99RBMyPJBCTAKwHmscg1vU0NCWJyVpBGwWZUYvOyywpANmab4eviRBFA%2FynL4CD1OTDm%2BBk%2FKP%2BWp2LRS32cbWPoibSG1%2FfEVyz77S4lAiosUE7sOA2s2K2BIUSaW%2Bim73nT601s%2FJP2XKYYeIs2jFQd3hztywyAWmRZso9uYUBZL2%2BN%2FuuEzwz5UhTyNOTCKcIlVMqtFgYHnhSH2wpMDbJweaFI65gdY0UIN%2FIFvH%2BMQiVwwsCybJ9Jo9iEYRohjCJhLLABjqkASe7k%2FBuz8hDqefnLY%2FGEWAI%2BFawY5nSK5OQVNIfM46IDl1zypkH5jmyHbkducQmbuclig17Dun3l%2BzPRDFhQgqJARDK6z12dhN1poZ29VeolGE%2FAIv0qsO0gPEtdgbLWKz7FVfC7XWbR%2FMoQMVX37F9dQxhFoe38Pxj7TTEQc2pwqyJEy47adIHYYlU%2FEzZ4VryXYTQp3nnC%2BvcEBTVZ0vyiu0j&X-Amz-Signature=0840a05cd4b7307df325b2190738e3a3fdcf0ec728c5daa62c2e46f57be47872&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDFGKKR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3KO%2FZQvZ0QOz2E3x%2Fbe%2B2y1C27fAG9mg1izAuPURVEAiB03fe%2BUbUOVvY976Lpf2elZmnacU5tvENWjUJaR8yX9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSiltPEnBT41GS1NQKtwDvJFT1PWGt1D%2Fsf8hrr2CmVmNdOWLK6VrItxVJAx9%2FjogYviY6ATZ8bE%2F8rOYPIY%2BP6lbllcUtBcO1HPQHF%2B4MVitLbbC8Dej8KKeyV2mJgA%2BJCdyxER1gHziHDQM%2FSkp1E0wN91rTsyxFLnlgEfD7qbyA2OoTL5%2FEizE0xvswBmUdkM3%2FBk6eqfdfPX1hj0cG3zqH1F3efo%2FXN5JyV8bgTtaH172wx9yphQAH1o%2FRMOWQgN%2B9YCilP2TvvHzK06ot6D2%2B6uMzTy5%2BoiMJBJxE%2BwCR6yOQfBvEK8ncfPot8fikmHv5CgYvICmraznFjLd%2FdngnhFT0z2Bm3milbyFOSo87GIl%2B57hTk6VNXFhLRCwX220KqDmdp0nS7dleTYajWUzce9v%2FQVcOdSMikkGL1oV5ihqDm27ywr8jfOku7MnCVNWjLwDb0sjYF6ADVP8vdzrUJviYTJOXJSn4Fpjzbl8D1N5Ib25qZls%2FbuE3suauewbdXL8gswgK1Rc%2BxSxGuEPVpgSy7tQYH%2FUZY%2Bo%2Fpnu8phD8q%2BMhU85JO7aWvA3FWmPX%2FVar7TY3cAP8YlsstFR922QQv4wtxnNSCYuqI5QRS2r9pItvd%2FuV7sI%2B3s2%2BhKEB%2BqikCwFAbQwh7aywAY6pgFXSokwHO2oHerbjSVnrjRnt%2Fr7pZI44pW0N57cq4Y6zEM4N5UbyYMsX9%2BTcWY2nL8v57VwGkQ2hmAWS8Y4A%2BooYZh16YxRMV7AQ03rDqdPTFIPI8W%2FL944ej4C6fcJ2rRx2L7xtzECQJAk0aEo%2F4kzz0piR9cPbNkOsa6FtNxXK9ZtfOzEkj%2B7%2BuCJaYlzYKXRzum0DHr97%2Fo2cFefMMWE%2FF2svuw9&X-Amz-Signature=4c77b16b343fd9b39498342159ef4fdd2abf8f278c35adbae5b16de87f7ec32a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
