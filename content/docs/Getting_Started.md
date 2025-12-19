---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VE234RH%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUyT6vZXx0vTNRQQikInVsON021mw2A1JL%2FcgoeujiEgIgPkKw3cGgVAxqjc6bsnkcSqak%2F34SiWny4pY6mWTzeFwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC0heyTYg3anqwCjircA5MFn4yi3oJEmwXCafHPgAekCA%2FAXvBmYHBQfWiPnHsfVmkhG8r8t6cLTuXn0lJbwsiHhVLyJO%2BpaV5fAxPDwpOQpA1JE%2B%2BzYKNrDxrBIxW%2BLUWHJL%2BhDVXjktU8Y%2FIhDirOPLBmo3gRQ1bFcAOa1TIRm9aC0d39ldcS6ki5UvhC%2BQZa9Sm8Vk%2BxXducVuUeoefK%2FUsmg7eBB7YkzDFn%2B5E%2BJSgsBoHUOAnFtXrfJxdh4%2FbNHbcpzDEsvlI7k9cxN3Lut4TKQ0VFRGreG84hQizTqvaRrRFnnP7MpaGT6MdIy%2F6FB%2Fwd%2Fsqv5IJCwLp7n4ltlbEgJ%2FF8vkQ%2BVG9LLslj04Dek7ak0rNKAjdTZfptInE21MA0AkpoR0veDWhdEX8HKIV2tyDpUbA8Vrz8BJcOUiGdvqCA5%2Fwnu%2FyP38GVuI8NmzyoUAYXtT81CvBgNCMLFGZxetI8FP2WI9yPJXwfRo6%2BaMiH7sH5yKqENTg81IOjH3f3hx%2F7PF54jKEoki4W%2FkoKJP5N4e7AjTFdVNnS8bZa6IoQHYbvjGJhuavXsW4vIi7Dzb%2B9iYkDu11IlZxlpT46Q44bTUxizGXtYKW6lyBEtu450BV89VQiOPMRX5PIVg7YopPWs8X8MNHHksoGOqUB9nsgWZvyoIAIkQticaWWWPTlGd9gDvZOnqDJGmg16qX%2BfXI7mnI5mWEii%2B2nFkepQPY2r2xh%2FO0JgZt2LoL1zKNk6S19WPWeqWYNcGYbWzqIPTSy820lh3vXbJutGJmeIrXj7DQPfkJL%2BeP1c2frFbK0vSAx3i0KI%2B6Plk7vZtsPRb%2FxQ3bS3hZh67pWX6Vf6A4x6ksCQ44PDPFc3R%2F%2F4nb5XQHB&X-Amz-Signature=d477f9be9c5598e3760cef07891bafdbffd6322c119c319c00294c6fd6bed759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VE234RH%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUyT6vZXx0vTNRQQikInVsON021mw2A1JL%2FcgoeujiEgIgPkKw3cGgVAxqjc6bsnkcSqak%2F34SiWny4pY6mWTzeFwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC0heyTYg3anqwCjircA5MFn4yi3oJEmwXCafHPgAekCA%2FAXvBmYHBQfWiPnHsfVmkhG8r8t6cLTuXn0lJbwsiHhVLyJO%2BpaV5fAxPDwpOQpA1JE%2B%2BzYKNrDxrBIxW%2BLUWHJL%2BhDVXjktU8Y%2FIhDirOPLBmo3gRQ1bFcAOa1TIRm9aC0d39ldcS6ki5UvhC%2BQZa9Sm8Vk%2BxXducVuUeoefK%2FUsmg7eBB7YkzDFn%2B5E%2BJSgsBoHUOAnFtXrfJxdh4%2FbNHbcpzDEsvlI7k9cxN3Lut4TKQ0VFRGreG84hQizTqvaRrRFnnP7MpaGT6MdIy%2F6FB%2Fwd%2Fsqv5IJCwLp7n4ltlbEgJ%2FF8vkQ%2BVG9LLslj04Dek7ak0rNKAjdTZfptInE21MA0AkpoR0veDWhdEX8HKIV2tyDpUbA8Vrz8BJcOUiGdvqCA5%2Fwnu%2FyP38GVuI8NmzyoUAYXtT81CvBgNCMLFGZxetI8FP2WI9yPJXwfRo6%2BaMiH7sH5yKqENTg81IOjH3f3hx%2F7PF54jKEoki4W%2FkoKJP5N4e7AjTFdVNnS8bZa6IoQHYbvjGJhuavXsW4vIi7Dzb%2B9iYkDu11IlZxlpT46Q44bTUxizGXtYKW6lyBEtu450BV89VQiOPMRX5PIVg7YopPWs8X8MNHHksoGOqUB9nsgWZvyoIAIkQticaWWWPTlGd9gDvZOnqDJGmg16qX%2BfXI7mnI5mWEii%2B2nFkepQPY2r2xh%2FO0JgZt2LoL1zKNk6S19WPWeqWYNcGYbWzqIPTSy820lh3vXbJutGJmeIrXj7DQPfkJL%2BeP1c2frFbK0vSAx3i0KI%2B6Plk7vZtsPRb%2FxQ3bS3hZh67pWX6Vf6A4x6ksCQ44PDPFc3R%2F%2F4nb5XQHB&X-Amz-Signature=f4afb540f874ce0259d44c9585c0bd4bc61bb3b2761d7523077a36e3b8cb8028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VE234RH%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUyT6vZXx0vTNRQQikInVsON021mw2A1JL%2FcgoeujiEgIgPkKw3cGgVAxqjc6bsnkcSqak%2F34SiWny4pY6mWTzeFwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC0heyTYg3anqwCjircA5MFn4yi3oJEmwXCafHPgAekCA%2FAXvBmYHBQfWiPnHsfVmkhG8r8t6cLTuXn0lJbwsiHhVLyJO%2BpaV5fAxPDwpOQpA1JE%2B%2BzYKNrDxrBIxW%2BLUWHJL%2BhDVXjktU8Y%2FIhDirOPLBmo3gRQ1bFcAOa1TIRm9aC0d39ldcS6ki5UvhC%2BQZa9Sm8Vk%2BxXducVuUeoefK%2FUsmg7eBB7YkzDFn%2B5E%2BJSgsBoHUOAnFtXrfJxdh4%2FbNHbcpzDEsvlI7k9cxN3Lut4TKQ0VFRGreG84hQizTqvaRrRFnnP7MpaGT6MdIy%2F6FB%2Fwd%2Fsqv5IJCwLp7n4ltlbEgJ%2FF8vkQ%2BVG9LLslj04Dek7ak0rNKAjdTZfptInE21MA0AkpoR0veDWhdEX8HKIV2tyDpUbA8Vrz8BJcOUiGdvqCA5%2Fwnu%2FyP38GVuI8NmzyoUAYXtT81CvBgNCMLFGZxetI8FP2WI9yPJXwfRo6%2BaMiH7sH5yKqENTg81IOjH3f3hx%2F7PF54jKEoki4W%2FkoKJP5N4e7AjTFdVNnS8bZa6IoQHYbvjGJhuavXsW4vIi7Dzb%2B9iYkDu11IlZxlpT46Q44bTUxizGXtYKW6lyBEtu450BV89VQiOPMRX5PIVg7YopPWs8X8MNHHksoGOqUB9nsgWZvyoIAIkQticaWWWPTlGd9gDvZOnqDJGmg16qX%2BfXI7mnI5mWEii%2B2nFkepQPY2r2xh%2FO0JgZt2LoL1zKNk6S19WPWeqWYNcGYbWzqIPTSy820lh3vXbJutGJmeIrXj7DQPfkJL%2BeP1c2frFbK0vSAx3i0KI%2B6Plk7vZtsPRb%2FxQ3bS3hZh67pWX6Vf6A4x6ksCQ44PDPFc3R%2F%2F4nb5XQHB&X-Amz-Signature=cd9eef0d19b3c85f0765a5627000ef4fdd78be10cee4e627cbc4b0f5c3089b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GDDCDM%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWseECXiJNXcDNubsPWpVdwsHEFfTB008T8isFodTy%2BAiEAny8y%2BGS67xDkF0Zpm88msHn6N2St0wfrMOhoN3qlL1IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9NdOmHUticjoo9ISrcAxGni9dpeBI10a4BMLBKMMoZcF%2BWwvGR9BUX9vJtoKjKP5znrz18qpZcWTTPC9yPO0iGpttA2XTABvE%2FWOVRWi8UU71AqO8DYA8epo5ivUSxJ907pn6vA5BusLVMwKODSHqLJKtACUsWTWy67eW5si1v8mwh2t0LPhah2baCUNFnGP%2BPj%2Bbfga7rQriiqDooZ2LgjyNxBB985Eyp8SgDvLMSCuZhBb4TKvciS7kgXv6XeWSIPsd6jVt9rMcI7TscqTWCrDTkGTHDgF0Zu934uAjodxByFnjebVwF5Gx2G2WX0%2FwmtzEx%2BR5ilfc%2Fott3npRDgZZOlMzm3ZAsNCF38fmYwMyP0%2Bqtsbda%2FBQncHq4RUduZ31pEqipIi%2FU%2BrieE3H0Gx9F2z5nzPOOtLim2FNQM8abM4g6UV%2BqDnwmkYTD0eTpH0Rx%2FACJKGlWJXxV9KM6f0p73KgFpjOuc2sjAYADw3ykZElC0Ur%2Bu7SQMdlt%2F2tNQChs%2Bmv5cprv8IIiUZROo7gHnagtCdntW%2B9kppR%2FFg8IBwgVYR2t6vGM2eZgZls37eTGkIgp4EdetLMBqpIzjQA7YRmWGRkF5CksUk0StAUnQ6TznXP5wND8%2FzRBOm5qf0HPHF6McftpMIjHksoGOqUBeNN6%2BIpc61w8owMqlh46SuXiHRUiG5i18NQ5KTHPgqYtqubbSUvXLET%2FbXaZe50AhQo4OXHlVMSAlUzvyaqIXZ88xgAiqhZKQ%2B6abpv6eTPCI5HvqdzW9%2FGpLjzu%2FSxUwxZBRX4xoP1HSsDyTihtB19o0FfMCBvb%2FJ9cmJ6F%2FGpIeIm4jJ%2F0LD8qs2oElYL%2FzwpvVTAFVLk%2FE416CTEPhdgENM%2Bl&X-Amz-Signature=32a9b40dd45037e7ee4ae76c0c151ecc983c49738a3437cffe9086bf64fd0b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIVPUN6%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh9W%2FipIQy2rfav%2FFRb%2ByzHa5T713CvMe4%2FvgtIrA8nQIhAODghqA3nXOxN7gI8OF%2BCL8uWhLSmF5tOqmtQ7WRMcmlKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSGcZiIBT9fy35J9Aq3APeIeVyr0DqF2k8ojwTeD8W4TzZT88B1iBZT17ZUob5SwAVqSCq0ujS1jb3%2B%2FyP5WH%2FEFChBORrFYkX4nhoWNPGg3L7%2BTPfX9c%2BTKGKNv3pFvCmkAw%2Fv4m61bvZK15cVma0xocQR5VBhc5ppCvnzE8k3pLaw5EvgWYEOEZTekE8XUjdl9CddnFf4vmI%2F1yxly1Sisl%2FELuMR7kmbaNiTnT4manXaQk5M4JkyVjqFw9lKR6OHJslrPFbAQtuIlui6zNgdSwIBnL2%2BOM5mqaVYzxkFDgm7PknsujPItjLAApF8cLWURvaBk0vbnqNUDUKfWV2Y1vWc7%2FKZLr4aC%2FoETMuOYFPlAZKoKC%2BUsRV4yz7OIY6CCSGxbDU5tpoR%2F0nXsxs%2BoNIelT3y2pC9J%2FqPRon3L3Ra%2FwfqQa12mG81gpyKHA%2F6mPP0jvfJxdwFZmBJKvLU5XDh6CkJRe18wBn8i0ZUxTfs92T2F4ntG9V0MRQ%2Bf%2FX%2Fcf%2BUhhP4uvR0lTxsNAMvOi87m3uHIE8wOlurGkq1c%2BPVNNEqVbMM12sMwMGvBu84%2BjY8Dh8cxfs0j74IVR3fY0p2pyAbQVmFXDkHG8gb5h5%2FhSrfIgANrkuptKJEJ21FGvz3HEG8Wj9kDCNyJLKBjqkARQwnFp4gf6zd3sQlWcth2uEhok8sWMYmpKXmGRJaCMdLDRLjPgk5uVwyhJ4frGjuY5cZbJ1SmlN%2FioQ%2F9k80GEinIFWryzi%2FYEzN8%2FiWcX1Z5o6CiSVwP%2Bw9zKZXYyi7NDJ1sb3ogGOx8%2BOBtpl8NETYifR3AYf0IFc%2Fpi3bxEEv7Df1LOeX9NRud7tXIdLtG06c7Yb8q%2BvqV1%2BQE3ddkpsyvYR&X-Amz-Signature=f582781ebb8339a7be14392628b1229384ccc075a0b9acaf0497f56675b76d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VE234RH%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUyT6vZXx0vTNRQQikInVsON021mw2A1JL%2FcgoeujiEgIgPkKw3cGgVAxqjc6bsnkcSqak%2F34SiWny4pY6mWTzeFwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC0heyTYg3anqwCjircA5MFn4yi3oJEmwXCafHPgAekCA%2FAXvBmYHBQfWiPnHsfVmkhG8r8t6cLTuXn0lJbwsiHhVLyJO%2BpaV5fAxPDwpOQpA1JE%2B%2BzYKNrDxrBIxW%2BLUWHJL%2BhDVXjktU8Y%2FIhDirOPLBmo3gRQ1bFcAOa1TIRm9aC0d39ldcS6ki5UvhC%2BQZa9Sm8Vk%2BxXducVuUeoefK%2FUsmg7eBB7YkzDFn%2B5E%2BJSgsBoHUOAnFtXrfJxdh4%2FbNHbcpzDEsvlI7k9cxN3Lut4TKQ0VFRGreG84hQizTqvaRrRFnnP7MpaGT6MdIy%2F6FB%2Fwd%2Fsqv5IJCwLp7n4ltlbEgJ%2FF8vkQ%2BVG9LLslj04Dek7ak0rNKAjdTZfptInE21MA0AkpoR0veDWhdEX8HKIV2tyDpUbA8Vrz8BJcOUiGdvqCA5%2Fwnu%2FyP38GVuI8NmzyoUAYXtT81CvBgNCMLFGZxetI8FP2WI9yPJXwfRo6%2BaMiH7sH5yKqENTg81IOjH3f3hx%2F7PF54jKEoki4W%2FkoKJP5N4e7AjTFdVNnS8bZa6IoQHYbvjGJhuavXsW4vIi7Dzb%2B9iYkDu11IlZxlpT46Q44bTUxizGXtYKW6lyBEtu450BV89VQiOPMRX5PIVg7YopPWs8X8MNHHksoGOqUB9nsgWZvyoIAIkQticaWWWPTlGd9gDvZOnqDJGmg16qX%2BfXI7mnI5mWEii%2B2nFkepQPY2r2xh%2FO0JgZt2LoL1zKNk6S19WPWeqWYNcGYbWzqIPTSy820lh3vXbJutGJmeIrXj7DQPfkJL%2BeP1c2frFbK0vSAx3i0KI%2B6Plk7vZtsPRb%2FxQ3bS3hZh67pWX6Vf6A4x6ksCQ44PDPFc3R%2F%2F4nb5XQHB&X-Amz-Signature=3e2fa30fa2901818041d762f8ef433936bac23bbeb7b6e176cd5ed58d3bdb05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
