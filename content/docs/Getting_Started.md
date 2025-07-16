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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOFXZ4U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIG%2BxRqldsi5ae28n3RMP%2F7gW8VmcvpPTSvvJF5QdONW1AiA4mrStHn4kN5jPXZSnrSZfFzbOnTJxBN12iYMoPBPDnCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMyJ%2FXjpnt847bpceQKtwDMCl%2BZj48u6W3TAwp8lK7q68RqqGuk7rn4achynQ7HqrDBpvp9WBLdK8Z2DkKfGkNLV74hgzMTIT7IVL5URWl68QH6r4aNp%2B4HBG%2FazNgBMkr361uMVQva%2FMQtptLERAC%2FBO6%2Fxx%2Bl4z39tALgqlW930eqkat8%2BQQXUFv9X0ihFZ%2FrP1mgUc9bQk0j0%2BKMfyLPJnry3Wt7wGYmR%2FWzYHjkYDQS8qqn%2F3NPqzq6xUhoQRMpXn4od26EnvDrLfab1ryZ45CpYwyRxD7NjKtLLdZs70lUwT7aLllXgN%2FYtxuWysyYLpQIbbv5d1EJDOIzwe2JwCKlCC1M4T%2FNvt3%2B8tHyElFDXzmFOfWO%2FWafoxBa%2Fq7ZNHgX4XH7%2FeyZorhhyc%2FO9D83SwYaBOwbOzzPoH32YOnNYZQEoJKdkamHFoKVjEL962XVz9LdWw4%2B4782pQvSThHgnFpWBNDkmS1pYiD6Mk4smMJMpIRb9TPywVcf5%2F1UpsTAi5ysPaPbN5DGdnHwtODGcddo6jhj2VOUjKc3re0QvQIZWjjyP1O5DwKN0mt7SBMm%2FLcwR9louNSqqK3Qu0ZhqJL1%2BdiSROSI4tqeYYKPTFnstug8D4jIV5VCGiRApeBA3xA5ea%2ByBkw8K3cwwY6pgHlii8ZFkC4A11l6JyyHyRgCDP6GZazpmVDzujsTf8OtFowRQIVZEzVyAY9iRHXagm2ZJGoJewBT1uDtQVNrFDUrX3EO4FMrztHACajC67XZx3nfIPJppTh8Go5F7AOslwMHJIuRRmQiAisEoW0sQiLC6AutvRsHRHmiZ5L%2F9wXXl%2B7zAbCPmgndKd%2BVoxTnX19Xi33BEW%2FPeYLHKyY2f7kOuBlfE52&X-Amz-Signature=142401232f4a23f2c41056966f6d9f6a6694092750657cd3a41e5ade1d5547a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOFXZ4U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIG%2BxRqldsi5ae28n3RMP%2F7gW8VmcvpPTSvvJF5QdONW1AiA4mrStHn4kN5jPXZSnrSZfFzbOnTJxBN12iYMoPBPDnCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMyJ%2FXjpnt847bpceQKtwDMCl%2BZj48u6W3TAwp8lK7q68RqqGuk7rn4achynQ7HqrDBpvp9WBLdK8Z2DkKfGkNLV74hgzMTIT7IVL5URWl68QH6r4aNp%2B4HBG%2FazNgBMkr361uMVQva%2FMQtptLERAC%2FBO6%2Fxx%2Bl4z39tALgqlW930eqkat8%2BQQXUFv9X0ihFZ%2FrP1mgUc9bQk0j0%2BKMfyLPJnry3Wt7wGYmR%2FWzYHjkYDQS8qqn%2F3NPqzq6xUhoQRMpXn4od26EnvDrLfab1ryZ45CpYwyRxD7NjKtLLdZs70lUwT7aLllXgN%2FYtxuWysyYLpQIbbv5d1EJDOIzwe2JwCKlCC1M4T%2FNvt3%2B8tHyElFDXzmFOfWO%2FWafoxBa%2Fq7ZNHgX4XH7%2FeyZorhhyc%2FO9D83SwYaBOwbOzzPoH32YOnNYZQEoJKdkamHFoKVjEL962XVz9LdWw4%2B4782pQvSThHgnFpWBNDkmS1pYiD6Mk4smMJMpIRb9TPywVcf5%2F1UpsTAi5ysPaPbN5DGdnHwtODGcddo6jhj2VOUjKc3re0QvQIZWjjyP1O5DwKN0mt7SBMm%2FLcwR9louNSqqK3Qu0ZhqJL1%2BdiSROSI4tqeYYKPTFnstug8D4jIV5VCGiRApeBA3xA5ea%2ByBkw8K3cwwY6pgHlii8ZFkC4A11l6JyyHyRgCDP6GZazpmVDzujsTf8OtFowRQIVZEzVyAY9iRHXagm2ZJGoJewBT1uDtQVNrFDUrX3EO4FMrztHACajC67XZx3nfIPJppTh8Go5F7AOslwMHJIuRRmQiAisEoW0sQiLC6AutvRsHRHmiZ5L%2F9wXXl%2B7zAbCPmgndKd%2BVoxTnX19Xi33BEW%2FPeYLHKyY2f7kOuBlfE52&X-Amz-Signature=3a3285422c31135ceea3f05b001e0882afee7694cfe5ac7e4bd9927a44fde6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOFXZ4U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIG%2BxRqldsi5ae28n3RMP%2F7gW8VmcvpPTSvvJF5QdONW1AiA4mrStHn4kN5jPXZSnrSZfFzbOnTJxBN12iYMoPBPDnCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMyJ%2FXjpnt847bpceQKtwDMCl%2BZj48u6W3TAwp8lK7q68RqqGuk7rn4achynQ7HqrDBpvp9WBLdK8Z2DkKfGkNLV74hgzMTIT7IVL5URWl68QH6r4aNp%2B4HBG%2FazNgBMkr361uMVQva%2FMQtptLERAC%2FBO6%2Fxx%2Bl4z39tALgqlW930eqkat8%2BQQXUFv9X0ihFZ%2FrP1mgUc9bQk0j0%2BKMfyLPJnry3Wt7wGYmR%2FWzYHjkYDQS8qqn%2F3NPqzq6xUhoQRMpXn4od26EnvDrLfab1ryZ45CpYwyRxD7NjKtLLdZs70lUwT7aLllXgN%2FYtxuWysyYLpQIbbv5d1EJDOIzwe2JwCKlCC1M4T%2FNvt3%2B8tHyElFDXzmFOfWO%2FWafoxBa%2Fq7ZNHgX4XH7%2FeyZorhhyc%2FO9D83SwYaBOwbOzzPoH32YOnNYZQEoJKdkamHFoKVjEL962XVz9LdWw4%2B4782pQvSThHgnFpWBNDkmS1pYiD6Mk4smMJMpIRb9TPywVcf5%2F1UpsTAi5ysPaPbN5DGdnHwtODGcddo6jhj2VOUjKc3re0QvQIZWjjyP1O5DwKN0mt7SBMm%2FLcwR9louNSqqK3Qu0ZhqJL1%2BdiSROSI4tqeYYKPTFnstug8D4jIV5VCGiRApeBA3xA5ea%2ByBkw8K3cwwY6pgHlii8ZFkC4A11l6JyyHyRgCDP6GZazpmVDzujsTf8OtFowRQIVZEzVyAY9iRHXagm2ZJGoJewBT1uDtQVNrFDUrX3EO4FMrztHACajC67XZx3nfIPJppTh8Go5F7AOslwMHJIuRRmQiAisEoW0sQiLC6AutvRsHRHmiZ5L%2F9wXXl%2B7zAbCPmgndKd%2BVoxTnX19Xi33BEW%2FPeYLHKyY2f7kOuBlfE52&X-Amz-Signature=997a440c9d584cfb091f43dd432463c27284f2fefa97a7f0a2aea3f5cbf55ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7BRET2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDd8tpBmBNHM1HgPaBo8TC5YQB%2FKWTiPWNVUi2QkZL91gIhALJUh0UE6Ij0Y2Th8rps6xc2UmKVm%2BUZnyV8grUH7LpyKv8DCFQQABoMNjM3NDIzMTgzODA1Igw0Jin%2BIlw%2FQkmYvQ8q3AMjKlpmUyAcCSX0wATwxu%2Ff5X06KwNqJVmr9tejRE1lFG3e71RDskbrjPUksxuOeSlYiGh8Flc%2BlmwsIsV0G10ZL4mtuVYlQZOAHMdNf0ESG%2BRNt1kODOWq43DzWTQRdeG4tiG67IbxhOnWupbPWxhyXW7I5DmdrwtQxhROOSxfOX%2Bwo%2F3hje%2F9h7yL83qlC0Xyhp0t9h76mOHeuhkqejH0wL%2BohQjtZfXrJNm48lflUxDGx4hDrDnToSY%2FtLu2XpV%2FNxTJDNFLel5dl8dm4jlZQJCM2gtDUhBVeQs39RSiJlN5V5Wwf6p5igGBbj57gsa2mbsODlU0XCstLeZ7CuoVjvjZemIPmc%2BRnxE59427mo20Lvn9qNxyzdk6qOJ6gO9kfRwse1sgGOrPJbBv4Rifx9sCZCa9c6M1lB7uY0JXUkHUi4tzDU0cybxCMcOXNhjK9%2BkpMqeROXQSNc3ykIBNF7uTweAb%2BxvY765kATSz51iLMwxhFeB59VFyIdzeW%2B7sT1qz8EtxgN4k9b3ZEAdKnq0%2FuPa0X%2BYwfgdJ0wxRYfw9K5%2F8PCQsBj5A%2BBjmh8ogMT8%2BNHPThNUrAtzxb3wPv99STEYcZs4HeNsUE7rP%2FQ94ebbS4GfSJp6BHDClrtzDBjqkARm7C3btYBPW99VdcRkbrHkJE%2FtelBfHJb5ZAp9Fbn42eDVAaiGN6n1a5sJXaRvGVVyOhfoGQEkqKKPlUNQ3R0LIignnGuFH%2B%2F%2BLtqT2OiWtPblKo4TD3mfPYrQqLSUmo5Vv%2BlZkk%2FjejnqKrYjv9UFr483mCBlxGNNU5BeVhgsMspDKJzbYm1Rl7A6WClxuYVLo867eFZdgET6attZOJ8DK37%2Fh&X-Amz-Signature=2f24ec20e17e95a3b5008ba81b1d3496ffaea36f5185e27040821cff6b0829d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2S2L7N%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDkbXr5Y5ETyhSqx9nw2NZPpT7DNTcFNbJveezpdjg2xAIgIhG9bmgR9Td9wRa8RIe7kKmTVDeGIp9iNJ7ExmT8Z1kq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOoGoGRzCcPVl3WC9yrcA2Q9mTlpGHyC%2BpJa5sdl7PeJG7K1w0gThKKGXcibDjeCFB2oarVzqrMUDREmwdaaD5a6Dyek1SmaJydGVJq7eUxvETDylXTNPaScwV3PuCS7YZoAO3hnKH%2FRnM78H0kkKTYR2zA%2BjD0FzNKLNYnELj7ivpsn0rdzkb0vFXYAX2284j9wi1co6Oed67rIbxR8ASNXEQVyv0ANLsua7yD4uPkvcOQonUJMjjfQAeUktbZDjsea0GaIpW%2F8yhcxQ24JTnz6hZykz2Rc2LpJupdCn%2Fz60gB40DP868jZchSadGCBJJt279pWzh5y8BV7j6vSnWMEq7sFX2rpq45Bsr9qtUnLGUV1i6DhQ0IPemYfZN%2BHm3%2FWVZr5cgfj4gKK0g9qAMkqR7KHCJCz8%2BieZo8KPzldVTkqNag3%2FM5S25mtw%2BJUNk5zi4VjYrXMYaHTl%2BaFzXP4ijtpfhroxalSbeI13KKldEa69URvTp2W4UFOK0UNsr6EEzCIq3cnVcAqRfnG6MFNnGtgoaNc1wzSwihdv865VD%2Bxkbugwj3BMY3iJLZa8HsgrqEiUHcwkjWIpwoDjNWPYe4XTQnIxudPSqCyyznWwlohcM0OapZcAsrZNgbnC4A7DVWd%2Fcf%2ByrjlMO6t3MMGOqUBaAwGjbuP%2FPJhWMtS%2FQglatubNRwoqCIe2hkxwLUZlweAStR3fLQoYw2ppxRM6OU3%2FIZstcC7JZiy%2FNO5tBfmdC0SlI%2BfdWqeiT0%2FUOVtxBuxhUN585LPF7J6RBNfvGPIhjPWXGQ1RGOZoNt2ohEnD9B2dkX44WJpuEeZ8ByUMkoaQZfYhAaH2MGEGkEayxoydQOWp3715NJ7Md5pAN0alxcrvTpl&X-Amz-Signature=90f19fa2d39cfd1a620dc15b399db99d54dbd753a535ac224bfe680f07294152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOFXZ4U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIG%2BxRqldsi5ae28n3RMP%2F7gW8VmcvpPTSvvJF5QdONW1AiA4mrStHn4kN5jPXZSnrSZfFzbOnTJxBN12iYMoPBPDnCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMyJ%2FXjpnt847bpceQKtwDMCl%2BZj48u6W3TAwp8lK7q68RqqGuk7rn4achynQ7HqrDBpvp9WBLdK8Z2DkKfGkNLV74hgzMTIT7IVL5URWl68QH6r4aNp%2B4HBG%2FazNgBMkr361uMVQva%2FMQtptLERAC%2FBO6%2Fxx%2Bl4z39tALgqlW930eqkat8%2BQQXUFv9X0ihFZ%2FrP1mgUc9bQk0j0%2BKMfyLPJnry3Wt7wGYmR%2FWzYHjkYDQS8qqn%2F3NPqzq6xUhoQRMpXn4od26EnvDrLfab1ryZ45CpYwyRxD7NjKtLLdZs70lUwT7aLllXgN%2FYtxuWysyYLpQIbbv5d1EJDOIzwe2JwCKlCC1M4T%2FNvt3%2B8tHyElFDXzmFOfWO%2FWafoxBa%2Fq7ZNHgX4XH7%2FeyZorhhyc%2FO9D83SwYaBOwbOzzPoH32YOnNYZQEoJKdkamHFoKVjEL962XVz9LdWw4%2B4782pQvSThHgnFpWBNDkmS1pYiD6Mk4smMJMpIRb9TPywVcf5%2F1UpsTAi5ysPaPbN5DGdnHwtODGcddo6jhj2VOUjKc3re0QvQIZWjjyP1O5DwKN0mt7SBMm%2FLcwR9louNSqqK3Qu0ZhqJL1%2BdiSROSI4tqeYYKPTFnstug8D4jIV5VCGiRApeBA3xA5ea%2ByBkw8K3cwwY6pgHlii8ZFkC4A11l6JyyHyRgCDP6GZazpmVDzujsTf8OtFowRQIVZEzVyAY9iRHXagm2ZJGoJewBT1uDtQVNrFDUrX3EO4FMrztHACajC67XZx3nfIPJppTh8Go5F7AOslwMHJIuRRmQiAisEoW0sQiLC6AutvRsHRHmiZ5L%2F9wXXl%2B7zAbCPmgndKd%2BVoxTnX19Xi33BEW%2FPeYLHKyY2f7kOuBlfE52&X-Amz-Signature=12b409ba9490cd7c76010cc0014457089caed839dbcc6ff473843833467b35d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
