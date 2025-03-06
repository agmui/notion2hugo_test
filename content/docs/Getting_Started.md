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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIWD24C%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2rptFszhI826W1KTm8NKmZ8L0bTJ5RoIFc%2BbXYmFeAiB%2BDuCS%2BsOcOoMSo05M7skakp6SECeQHhKp3yAoJF0U4yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwMVkdg3D1pIagMIzKtwDifVBmb%2FwwgwgDoVo9dE1aWvfr0nRzZmPIY35ZFigHZW9HFY%2BvQR8GSy%2F234%2BGjsDcSqxqp%2BLpZZnMkfvHAObMgQAwYVblrKVUo8js5GARhi%2Fk3WCm1neiVGY4%2BrQ45GxLvtqUFan4DzcqgF0EIuLCSOZKwKpqLA8hQ41JpFYhul1EHXF%2B02HiX4DKQJXbc%2FeKot%2FtLo%2FLa0wZUIRF3zPRm9PfRWYY3lna8jX9LeAJ%2B4UR2eFwU5qI6qYHti20U2LQw6LJRKApmjXWESSqI%2BcivNgUdkoL7yFHU7sknxspBMQGOLtHIOm9JAZfH%2BXk4fGm6hJXWWVwzPBfMgSYPO2UCfRlJKV7u8kUmFMP0h2trAZC4tago0F7MPisarzt3NkB4eYruSOE6ah%2BXB7R8PDagMjoAhXfqP0mTYAvEBVqPLC1dBYJ8%2FMSZBJYEDRXoSOMTj%2FmATtMNW0z0xun8ypCAnA8aNnJwd%2F5AvrMECq8OIcN2c8DTr0UcWARPvqf1C45NCXwFXhQI1eejFwSoEMLV7Dt4aCwpv3hrkx4uAny%2BFmyA7IOVfAEVfg00EF0vmD2UYTWyNg0YEFwZQVytfycEA6te%2FhcEnjKWhwDoj5JS%2Bl2xqWJxISWCeVFYQwwc2nvgY6pgHGw3kG%2BDSExabYoB6SeapLfx%2BEw%2B5XlkFYp%2Fe9JPaPj%2B2LMswsgEsFW%2FWsYzyh%2B40MgokQMfxLszQ8J7l5wzpjUpw7u6PwZ30c7nSD131MIe%2F0tkgzBNS%2BnXXwnQVwOUJXPYG%2BnJ2K8qhrphWcvFuwzed9kYy7Wg7YSD8Z8Za6AciR30qJnj2IMdGt2v44TI94QStQjDbxvJONwQMKYjJgmFS7mLoJ&X-Amz-Signature=fd7ec32b517880235f61bdd0e566098206415311acffe2863024dfc1b55cfbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIWD24C%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2rptFszhI826W1KTm8NKmZ8L0bTJ5RoIFc%2BbXYmFeAiB%2BDuCS%2BsOcOoMSo05M7skakp6SECeQHhKp3yAoJF0U4yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwMVkdg3D1pIagMIzKtwDifVBmb%2FwwgwgDoVo9dE1aWvfr0nRzZmPIY35ZFigHZW9HFY%2BvQR8GSy%2F234%2BGjsDcSqxqp%2BLpZZnMkfvHAObMgQAwYVblrKVUo8js5GARhi%2Fk3WCm1neiVGY4%2BrQ45GxLvtqUFan4DzcqgF0EIuLCSOZKwKpqLA8hQ41JpFYhul1EHXF%2B02HiX4DKQJXbc%2FeKot%2FtLo%2FLa0wZUIRF3zPRm9PfRWYY3lna8jX9LeAJ%2B4UR2eFwU5qI6qYHti20U2LQw6LJRKApmjXWESSqI%2BcivNgUdkoL7yFHU7sknxspBMQGOLtHIOm9JAZfH%2BXk4fGm6hJXWWVwzPBfMgSYPO2UCfRlJKV7u8kUmFMP0h2trAZC4tago0F7MPisarzt3NkB4eYruSOE6ah%2BXB7R8PDagMjoAhXfqP0mTYAvEBVqPLC1dBYJ8%2FMSZBJYEDRXoSOMTj%2FmATtMNW0z0xun8ypCAnA8aNnJwd%2F5AvrMECq8OIcN2c8DTr0UcWARPvqf1C45NCXwFXhQI1eejFwSoEMLV7Dt4aCwpv3hrkx4uAny%2BFmyA7IOVfAEVfg00EF0vmD2UYTWyNg0YEFwZQVytfycEA6te%2FhcEnjKWhwDoj5JS%2Bl2xqWJxISWCeVFYQwwc2nvgY6pgHGw3kG%2BDSExabYoB6SeapLfx%2BEw%2B5XlkFYp%2Fe9JPaPj%2B2LMswsgEsFW%2FWsYzyh%2B40MgokQMfxLszQ8J7l5wzpjUpw7u6PwZ30c7nSD131MIe%2F0tkgzBNS%2BnXXwnQVwOUJXPYG%2BnJ2K8qhrphWcvFuwzed9kYy7Wg7YSD8Z8Za6AciR30qJnj2IMdGt2v44TI94QStQjDbxvJONwQMKYjJgmFS7mLoJ&X-Amz-Signature=0616635074961bac7337f357b1d1163901a104cc0a03f6359f60ad0f7f7af35a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPTNNVH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDZ0pJk9NF21z5x78VkhkQZUah3Pljm0HWgxI9SJwpbAiEA9a5qaNiTFwqb4v35C5MUDUU34cK0QJPpNzEIO%2FEryBYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNfP4vslZEk99gIsjSrcA0En6VLB5O%2BmfSb3JjuF2pTN1buStetYk0ewJ1KElmb1uMqBwTRRgtceKXnVauZiutitLSArESu9pBBSkf17NU5X7fn283Aaon1VTqXJ%2F2l37VU1TbpjXYIB5zHX0Fvqi8PkK73Vx8OyaJK4OT6BjCjX0v3hUJ0QK5i7qY6ugo6VELHZNlMFAWITZQhP6Fv8umEQO4GfloTinW5QRmFu%2BogLbxGjbewFYMes8S0A2YB4A63Eug98J1a2pEUbVrgMckei3OHeWYtCsEhjdViyHNxs7dN7XExDGvemln3uY96yzM56KyP7Bwa6fmJ3%2Fg%2FQTn%2BC0fSOmn%2F0%2BLl%2Fs5xXIXlwvzREo8q6b89b2xgTaTR3%2Bw9ejJoj5twlDqmnv2Q1qCwfNubbMft6KhNTcGWHr5jupXKrLx4FO3PDdw7xQOlzvWwMeFx3r92I3Y9%2B%2F787W5HDX7AXeN3QVb3SGZZmlQiqi2DutoJ91k%2FMnvjEkaaAtXOHYSApIspEp3rPoBR2eIT1H4LgFTl%2FCDf04y5aWNI7bafEumSXO%2FcgeNRvpooEAN3XMR4C21pA9CzXISx5gP8rbeuhJUl0YdM%2FZTl60ILybwknlYcMGWMviW6hwPoiAdrvBIafnYrGhlfHMMTNp74GOqUBiuTWtrBl%2F%2B91%2BN1o8oPkwlpcQM8Ay20C7bPjRCoo5GaeLlqO%2F%2BycfYDsrps2Ja2bZUj7y2oc%2FsbtQQoTtDd9kl%2BdW5GsmbScTaaEwkir9Sqswo0jZ%2F4ro31%2FrVla6Y0UtG94pTCDWiCPBqBT5awmRw7DnaVBt6idwknkSoJ%2BYQllLsG7%2F5r4FZ9dajU0VPgH6WLgm7Mp9ceKovVnJFe22r%2BunJXr&X-Amz-Signature=bd4cd8ae2b6ce7bf4f71169679f7f7ddc8e7f5f34065172fd20f5576a85e9bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KVF6DT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVQL5vOT97mKUmNckpuPfV%2FBzKwNYOQnBOgviTCgZvqAIhAPtqhY9J%2Bjp6RM7Vvrcl4YJW7XdL0ybrxt09jlLMDU7xKv8DCDMQABoMNjM3NDIzMTgzODA1IgwdcEpUaUX%2FPIexJJsq3AOi5BFRhtPt5Wn%2FzHnu2q5JiS%2FwXTab6J4yn78y%2BT05%2BapNtHw6ghSlezOVCEiCN8EsADXAgbOjBcs6OVCD9ZS%2BhQESf4tYhroxPYjGVTgx8cUeg9DhHqpirC6CzZUNLd3lYyZrAIl7B5LDQlmAWzfIwp69C0t8txW7tDEKKECNAYjcOv3wvWkJ8G67lDP50k%2Bz6a5navB0uIVQjk8eL0%2B0G2tH5vvjz9nig1hRpMemQHaYCWuNl1ZET%2Bzh1lQkuOKVv9VIYqH5gs0H2QqIhz7anLFsH2hthGcJwd%2BfkbrYQmiNGS4uAkx%2F2eXG9gZyeWcSrMhh6cR1VlFX1dBUU6x3ZTDBT89xsZDoptTfEtBlW9JFrrj5dmeRo6AvXYULSFiuqdKBtbUmmKRp8VS9PLTDfx3TDJgnv2sz7sT8p5Rj38OYg7dhRns4zUHF%2FffknS3xYZNcjikbLWGSYrliX8aDQM3FUPTAdqifT8CjDj%2FdLV7bTJE6fsSCTgz0s8Za1l9PKwFQ0Ev9FwNmcQ9SFoIrIu3dDFsRgEhQRIeeEDXNCrGHeAw999dYUFBqOuxA7q40YgAcGlkCTMg5EyJrXh2v%2BCAiOdQNH9st6SSxdA%2B98rMooWePr9WpGBznxDD0zae%2BBjqkATdLWPH7y%2BA9cXrc6d%2BwGl9cF%2F%2FIUaP94vAMiMRo85z%2BBHuSC%2ByQelYwxcj%2FWLjFlf6SCzUkNrev%2BQeMYsIIlzagfr8lKP4VNMC7eto%2BMpnSo7fiaj47cHI%2F7SdMWLN9wjUVx35TEkqtbXzM9A%2BBuHstXpI8dFgTsznKFTl%2FNiagcRITkpoQdalC1sZybhRLCQ2fBNauw6qdeDq9uwcK4TYUH0oF&X-Amz-Signature=9122446ada7cb4bcce87d9652eae285da96b001f0db328b903d3b8764b2f8bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIWD24C%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2rptFszhI826W1KTm8NKmZ8L0bTJ5RoIFc%2BbXYmFeAiB%2BDuCS%2BsOcOoMSo05M7skakp6SECeQHhKp3yAoJF0U4yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwMVkdg3D1pIagMIzKtwDifVBmb%2FwwgwgDoVo9dE1aWvfr0nRzZmPIY35ZFigHZW9HFY%2BvQR8GSy%2F234%2BGjsDcSqxqp%2BLpZZnMkfvHAObMgQAwYVblrKVUo8js5GARhi%2Fk3WCm1neiVGY4%2BrQ45GxLvtqUFan4DzcqgF0EIuLCSOZKwKpqLA8hQ41JpFYhul1EHXF%2B02HiX4DKQJXbc%2FeKot%2FtLo%2FLa0wZUIRF3zPRm9PfRWYY3lna8jX9LeAJ%2B4UR2eFwU5qI6qYHti20U2LQw6LJRKApmjXWESSqI%2BcivNgUdkoL7yFHU7sknxspBMQGOLtHIOm9JAZfH%2BXk4fGm6hJXWWVwzPBfMgSYPO2UCfRlJKV7u8kUmFMP0h2trAZC4tago0F7MPisarzt3NkB4eYruSOE6ah%2BXB7R8PDagMjoAhXfqP0mTYAvEBVqPLC1dBYJ8%2FMSZBJYEDRXoSOMTj%2FmATtMNW0z0xun8ypCAnA8aNnJwd%2F5AvrMECq8OIcN2c8DTr0UcWARPvqf1C45NCXwFXhQI1eejFwSoEMLV7Dt4aCwpv3hrkx4uAny%2BFmyA7IOVfAEVfg00EF0vmD2UYTWyNg0YEFwZQVytfycEA6te%2FhcEnjKWhwDoj5JS%2Bl2xqWJxISWCeVFYQwwc2nvgY6pgHGw3kG%2BDSExabYoB6SeapLfx%2BEw%2B5XlkFYp%2Fe9JPaPj%2B2LMswsgEsFW%2FWsYzyh%2B40MgokQMfxLszQ8J7l5wzpjUpw7u6PwZ30c7nSD131MIe%2F0tkgzBNS%2BnXXwnQVwOUJXPYG%2BnJ2K8qhrphWcvFuwzed9kYy7Wg7YSD8Z8Za6AciR30qJnj2IMdGt2v44TI94QStQjDbxvJONwQMKYjJgmFS7mLoJ&X-Amz-Signature=0e4e0f759eacc6a72114dab6860f9e50143ef059838194c254b85c56f93a64b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
