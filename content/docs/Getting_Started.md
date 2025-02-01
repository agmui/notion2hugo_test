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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RLGLD2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC4yNJz6i2ivD0VykmO%2ByyQWNA5LmoktAxXYVmgisabQIhAMNL8GXTUPKBNUiRdl2OWGLIlaP1PisUx6nel5cG1GVKKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzwPViZ0L6zfMriVQq3ANiXeKxLtQfE8JxfMG9DNS3H1tkI1p5xYntw%2BHVRlfVM1fHl6F9gAULcVLQAt5rdHy%2BaInZ%2FnT143PJUsrPzIJ49nhVs4CPXpAwzzidN73ZX4u66OWcmS0Rf3n72pTnjUICCxFlDXnvWPE3A%2BbBdnriyTnkqqSGbYXStltRB%2FQYdws27EYAiBOx%2BluBNcHMWoL3iloYGaqifft89VZHNbC4kBhSZQCT1Jy9vTypoXxVCijK4mdj18Hw98WKlTQ4VZPpbuWHYLfBs0PUXoyUr8mfyfeEfnJ28EzY43sEQZ9Oki7X%2FVDlZtFLSs%2FMy3mOVWx7a1RSRou%2BfiU6I0wBROmYS9Ca%2BLFPLCVNzNOVNS9%2BuPtLCDNQ0F2erOpXemG%2B8VrN%2BMAHDBZgmJkI1ZhyHuHMzrI60TJpB0PjZxnw35peTsDnuboL55GUBiXEfbFf8p9Q5FERUt8i1Db9lGXvkqkxjhIdgZid9zi3HNNUWQN%2Bvq8YCJN89HiVwA2j1rWeL89NcY29dHbm0CfGpBynC6zTfHnu3Tk5rOVunn0yEWZZFZaOwJPplyr8cpg7IlLikaSTGeJOCmFUY4mySAbhRhCbVGJNCkopRtt0tOuScgkT5pnqfmdINx6eTxO0wTCnsvq8BjqkAS2ydVz%2BTdyLPYAfCV%2FmeOYXg5bF81kQqqnxorO%2FHncyrg0uYw7hAafkkmdMI7uOovP7z9Eq5nDiGPDP5C06SGLec78dwNWpZ0LzluE2Ggc3JMTPHXBdTv98z6rLHpEkkRDt04z1%2BuR4imEfmYcgAkl6q8V2ObKNXTJIqEDhV5Yz6zv7m4RPsYgRJ%2FoGgAr3Hg5ewfqvDiWE5WqUdhNsCqFq1dQF&X-Amz-Signature=cb5a460232979b9fe3daab184965ea2d6c83b548e7232c52e575806ec625b2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RLGLD2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC4yNJz6i2ivD0VykmO%2ByyQWNA5LmoktAxXYVmgisabQIhAMNL8GXTUPKBNUiRdl2OWGLIlaP1PisUx6nel5cG1GVKKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzwPViZ0L6zfMriVQq3ANiXeKxLtQfE8JxfMG9DNS3H1tkI1p5xYntw%2BHVRlfVM1fHl6F9gAULcVLQAt5rdHy%2BaInZ%2FnT143PJUsrPzIJ49nhVs4CPXpAwzzidN73ZX4u66OWcmS0Rf3n72pTnjUICCxFlDXnvWPE3A%2BbBdnriyTnkqqSGbYXStltRB%2FQYdws27EYAiBOx%2BluBNcHMWoL3iloYGaqifft89VZHNbC4kBhSZQCT1Jy9vTypoXxVCijK4mdj18Hw98WKlTQ4VZPpbuWHYLfBs0PUXoyUr8mfyfeEfnJ28EzY43sEQZ9Oki7X%2FVDlZtFLSs%2FMy3mOVWx7a1RSRou%2BfiU6I0wBROmYS9Ca%2BLFPLCVNzNOVNS9%2BuPtLCDNQ0F2erOpXemG%2B8VrN%2BMAHDBZgmJkI1ZhyHuHMzrI60TJpB0PjZxnw35peTsDnuboL55GUBiXEfbFf8p9Q5FERUt8i1Db9lGXvkqkxjhIdgZid9zi3HNNUWQN%2Bvq8YCJN89HiVwA2j1rWeL89NcY29dHbm0CfGpBynC6zTfHnu3Tk5rOVunn0yEWZZFZaOwJPplyr8cpg7IlLikaSTGeJOCmFUY4mySAbhRhCbVGJNCkopRtt0tOuScgkT5pnqfmdINx6eTxO0wTCnsvq8BjqkAS2ydVz%2BTdyLPYAfCV%2FmeOYXg5bF81kQqqnxorO%2FHncyrg0uYw7hAafkkmdMI7uOovP7z9Eq5nDiGPDP5C06SGLec78dwNWpZ0LzluE2Ggc3JMTPHXBdTv98z6rLHpEkkRDt04z1%2BuR4imEfmYcgAkl6q8V2ObKNXTJIqEDhV5Yz6zv7m4RPsYgRJ%2FoGgAr3Hg5ewfqvDiWE5WqUdhNsCqFq1dQF&X-Amz-Signature=8dfe70177145900936de5a719ba48428f365fec9b27efa0ab4a0d0a34b7d0026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCY2TH7F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTRPh0Bd6E8jRcmMoAa6vmDCezI2TqKc7bGmw7l%2BZMgIhAPv4pJ6tS9plLfpJudesOLHO%2FoHmjSo2sDnwnkHTrbmHKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfE%2FjMu2wXjP5xtZEq3AMUMx2cQgPsALrNsOzzcD2ELGQlDy1YW4c5pPqZF2X8ExU8tEpHdPn%2BYnakpF5DoYuEuOHbinf7OPKOahBNPPZFHwet1rdgkrVHxRLuZKJS6wvjoolyqZpO6rhgVmRb%2BCPALMUJJUU4OOXgFJRRbrvXUIzIKqeT9%2BWphVhSw%2ByS5cz24fVgFSpDQg3CStmwHLWLjVe2xnQWVpvf6qCJhXtE3wPcPomfnyZRSSu0Wpjdhsai5zPotuUz%2FuYJ5qSA0fUsqXBNjJgs%2Fc6G2luaxAbXX0%2BLgsnjwPScUol9Q%2F8lmhC6twKiUNDsJMO0daAXgyxrESMxtugMTsKPpBsgx7Ed5U5sBXl%2BG9Y647yx08Bh7FK2kDqbKYN7ujjtSJw3ijCZGR6oI4uLdXnEtQtyXYGBW62Mkg55R%2B4Fcg1s11KoCfagf3nMHfn4481DCgYvS%2FISfky5cOeOF3nNc9gAAgmnsknBrQ66ViyARykgRa3OpPDZ3KDuflh420uIHP8C7Fw4i68F%2FW8KAOf95J6kLYJKfqsyeyVkUbdacaSCkzuT8w%2BWj5BilQxMW80UM9F7KrTv8JDxlk%2BV0FeiORcIFAVnjPS5LwZq3WTP%2BmtjlGWIVaPikaUL%2BQ%2FwLD3PwTD5lfq8BjqkAdEN%2BMMwAHmWI8NvtPPyfHiNi%2B%2F3d4kuIiHabRciwbmc7IFRfnt%2BtDgqaaA7MN9%2FzBpPjhXbVwFVrt35uWE3ZmuVYZEkaH4x%2FCYrlB%2FDUkb0A1z78LboYavvn4oOcdy0cuPNdZe4EuAE1hcvCe6%2FOm5HyImWa6DEHsRsTjfYNCEI6fzep5XUwsHJsKqrNeYbKcEe84M5aLxkeaHTatlQ%2FN8hqUS7&X-Amz-Signature=8ac2dcf9c4dd2872aacee67e32f68de256f9c669eec53dc1956d601dc158549b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZL27LA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8qdGbEu6OtS8AHEu5JPDN7c4S1uDL6uNeCrDpzOKwzAiEAx%2BNRWI2kSyDfGJ7ImCxY6nEM6Hm7xK477i3NZXrJQJoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMINmcRVLE8tr36gFCrcA4I%2BTpU4%2FyTyiG5y6SEcEyqLlbsooxWOINoKLzElu0NPAwwcy3ZgjtXHM7Wzp0ajFSJ1qr%2Fw4MoU%2B6MZsDDUv6OiOBfacs0i14%2B7ycjYbzHGYycFfnxHjYBPZOn4h6Nxy6UH5QvZ5E3jkj0K31JKabs3gTALI%2BPmsLWtgs4syED7g%2BfXh6B2Dt0ZooChpu02RNl%2B%2BkRdtZCP5zn9rE3sBKOZFuUluHHxUay1Ivn%2FlGuLDq0jIXYfLx6Kc2oIgA5vxMvq9kF%2BCvN0tZ6UZky0iMQqHsQ5OrJph0eS4GFj5eR%2FBLgM%2Bp3zZPZc6oz0mP%2B3eK%2B%2FW%2FGtjfsVvRtCWfxl3PKarfQpXqFLF86mNKxv2zY8E1A%2FsKHNOiQUZTZBeEbmGYzNm14ycRUi6kAFvvqpcUC8PqHcqnmKQZRQXAYZxpeeNEK59txGjp22CKImuXxYHworesmUP4XxMxx5vaNTBxXfXtScOTVaYry05Ob5vELqiF9icjGsycSsAOsUyudrxX%2BjHia5b0gwhiBjoFkOYuT%2FfQqx7LrRIMDZY7PiGejMwir6eo%2B6AwN6VRgbNTRfnJDTU09KaLQoVBoLc7no6bLxgXrszNUk3Sw1oYGLOPrlV6RnZtSKC%2BxGRFbMML6y%2BrwGOqUBR5SLsLCzLQUzIxrzMB5rIYLQ9AizF3ZEEh2rTbu7Q0ptgGmIAosemBK9amByCFI%2FjvhCaEVtvcHWWOUY6c26Fbe0nKPRRjg05GjSBKzJQhyyJRo8wEV%2Bx32PmsPSKXG0Q7iVFHZFqeywjgQj5F4HSn7YnmzcrNYiL917HvcGfxxw8V6unMUQQWE3hvUFDb0iEd5AJhs0HD6nQV0YBbO199ALmpJo&X-Amz-Signature=d1749ca8363b498016091ac629b2104a62ab4ba6d16a57c5cfe39b34006cef8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RLGLD2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC4yNJz6i2ivD0VykmO%2ByyQWNA5LmoktAxXYVmgisabQIhAMNL8GXTUPKBNUiRdl2OWGLIlaP1PisUx6nel5cG1GVKKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzwPViZ0L6zfMriVQq3ANiXeKxLtQfE8JxfMG9DNS3H1tkI1p5xYntw%2BHVRlfVM1fHl6F9gAULcVLQAt5rdHy%2BaInZ%2FnT143PJUsrPzIJ49nhVs4CPXpAwzzidN73ZX4u66OWcmS0Rf3n72pTnjUICCxFlDXnvWPE3A%2BbBdnriyTnkqqSGbYXStltRB%2FQYdws27EYAiBOx%2BluBNcHMWoL3iloYGaqifft89VZHNbC4kBhSZQCT1Jy9vTypoXxVCijK4mdj18Hw98WKlTQ4VZPpbuWHYLfBs0PUXoyUr8mfyfeEfnJ28EzY43sEQZ9Oki7X%2FVDlZtFLSs%2FMy3mOVWx7a1RSRou%2BfiU6I0wBROmYS9Ca%2BLFPLCVNzNOVNS9%2BuPtLCDNQ0F2erOpXemG%2B8VrN%2BMAHDBZgmJkI1ZhyHuHMzrI60TJpB0PjZxnw35peTsDnuboL55GUBiXEfbFf8p9Q5FERUt8i1Db9lGXvkqkxjhIdgZid9zi3HNNUWQN%2Bvq8YCJN89HiVwA2j1rWeL89NcY29dHbm0CfGpBynC6zTfHnu3Tk5rOVunn0yEWZZFZaOwJPplyr8cpg7IlLikaSTGeJOCmFUY4mySAbhRhCbVGJNCkopRtt0tOuScgkT5pnqfmdINx6eTxO0wTCnsvq8BjqkAS2ydVz%2BTdyLPYAfCV%2FmeOYXg5bF81kQqqnxorO%2FHncyrg0uYw7hAafkkmdMI7uOovP7z9Eq5nDiGPDP5C06SGLec78dwNWpZ0LzluE2Ggc3JMTPHXBdTv98z6rLHpEkkRDt04z1%2BuR4imEfmYcgAkl6q8V2ObKNXTJIqEDhV5Yz6zv7m4RPsYgRJ%2FoGgAr3Hg5ewfqvDiWE5WqUdhNsCqFq1dQF&X-Amz-Signature=4a23e87e8163d3135d8004083cd6e39d842601751ededbcebfa3f84ddba471ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
