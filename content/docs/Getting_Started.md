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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654MTFPKO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvfLS62pZOA0LgTmjsf%2Fd%2Fp6M2haRYwDXVRIa6VLMCmAIgVHBU3tSzVCp%2F3%2F7zv4Mf%2FLIvyt2yKSZB6mfRsWt7UEcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBASHTHv%2Fl%2Bxz6a24yrcA%2F5vrKPUdueJxuW%2FX2dlOAWmoukxdfCJkyvzuEZASkR2I5gy0Eyd0mY6PoVOXux0kFOsPpzfqr7%2BOU6t%2FQQXlk0wv3eS3gScXzl41ItxA6zU4fvsYdKPz5tgZbwbuc%2BAf7g644EoOilKBH0ASyRua5Iu8OdLlwMSjM7gOWV6xd6yu1ujNCRlUyfalTqnh5eRNXzd0UbqlA4BNtv9Ck4Xnw29%2BwaSyXQX3CZ%2F%2BjuEgq1p02vZP2hxp93GwUJ5Rr%2F5MTBLHpxCtc23thmibUZZv5sZ9IxrzNa1i0n9WfXOxHuWiH8i0xFO3nIJ%2Bdobehfa1dv4jGnd7JjLQOvVn9UQM2ngSkuFH1AL60Avk%2FIPcmK6Fce6tA7vSTf3uJJwuzL75j6sNeuznBnNSUrYTDeWXN%2BhkP%2BMm6K1gPI2HPTORzwwxQVsEILDpOa4anc%2Fs8iqXvajTCdS%2BGL2aG%2FePgBLKdEtc8Ki7CIw6Edbm0q29YOg8fNPtvuQ9U3%2FZiOLQfy8E0E8xDohLUGnibiByj2gsoITpbbrakmqghaGqJ%2FAV3kG4lipP15SETBvmj8bmHKtaQgwZQ0DoKU1CFrrmDHZfeTmdJB%2Fj8xkv4NePUvwziIWOYbPGwUdtSCKEqpFMM30vsAGOqUBvom8CL%2FD5f59fRVMgSqp6bdgRJNYF80OUf1sZTaKv8DkPwmkj78RhwHN1%2FmhXxiPywyD3rDy0Z2WIc5ZQGbXIuHWxS8G%2FpCLa4TVXNIaHBJbH0HxDwtLY7Zg6evyl3v7807a53As4ipmPoGIbi3rmOblGNxZYUQiVndA3464tpVfr1Pzd3SF%2Fpu%2Bq5HYusie59HuQ%2BG8HtMR4UP2NWBLftbuie%2FL&X-Amz-Signature=f70683a75758585a0b2abbe16513e24e561fec0aad5541e178f7154e36eb6ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654MTFPKO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvfLS62pZOA0LgTmjsf%2Fd%2Fp6M2haRYwDXVRIa6VLMCmAIgVHBU3tSzVCp%2F3%2F7zv4Mf%2FLIvyt2yKSZB6mfRsWt7UEcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBASHTHv%2Fl%2Bxz6a24yrcA%2F5vrKPUdueJxuW%2FX2dlOAWmoukxdfCJkyvzuEZASkR2I5gy0Eyd0mY6PoVOXux0kFOsPpzfqr7%2BOU6t%2FQQXlk0wv3eS3gScXzl41ItxA6zU4fvsYdKPz5tgZbwbuc%2BAf7g644EoOilKBH0ASyRua5Iu8OdLlwMSjM7gOWV6xd6yu1ujNCRlUyfalTqnh5eRNXzd0UbqlA4BNtv9Ck4Xnw29%2BwaSyXQX3CZ%2F%2BjuEgq1p02vZP2hxp93GwUJ5Rr%2F5MTBLHpxCtc23thmibUZZv5sZ9IxrzNa1i0n9WfXOxHuWiH8i0xFO3nIJ%2Bdobehfa1dv4jGnd7JjLQOvVn9UQM2ngSkuFH1AL60Avk%2FIPcmK6Fce6tA7vSTf3uJJwuzL75j6sNeuznBnNSUrYTDeWXN%2BhkP%2BMm6K1gPI2HPTORzwwxQVsEILDpOa4anc%2Fs8iqXvajTCdS%2BGL2aG%2FePgBLKdEtc8Ki7CIw6Edbm0q29YOg8fNPtvuQ9U3%2FZiOLQfy8E0E8xDohLUGnibiByj2gsoITpbbrakmqghaGqJ%2FAV3kG4lipP15SETBvmj8bmHKtaQgwZQ0DoKU1CFrrmDHZfeTmdJB%2Fj8xkv4NePUvwziIWOYbPGwUdtSCKEqpFMM30vsAGOqUBvom8CL%2FD5f59fRVMgSqp6bdgRJNYF80OUf1sZTaKv8DkPwmkj78RhwHN1%2FmhXxiPywyD3rDy0Z2WIc5ZQGbXIuHWxS8G%2FpCLa4TVXNIaHBJbH0HxDwtLY7Zg6evyl3v7807a53As4ipmPoGIbi3rmOblGNxZYUQiVndA3464tpVfr1Pzd3SF%2Fpu%2Bq5HYusie59HuQ%2BG8HtMR4UP2NWBLftbuie%2FL&X-Amz-Signature=7e14c7e335940e154ab4fbfa8e14ac4f2381d9749ee0f647bf1005507696e148&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RQK7R5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcWNVef8xSOFG94X5IVg2M3jKqPRzfKwLqtkcu%2FrjfvAiEAtVZJh8Fan8NyftHOCs%2BVmAqDJ%2B7gHw85HeFQeI3BfYIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF6lgx5PZPppo6bYMircAw0mDBGr6mDWYU5SYrEUkcZA8eUS08y4M%2F6fFJXsY%2BP3rjvNSGtTZK8WvxOVdkz7k3WCGERuLNGwWEXNeuq5DbSSrFJjXd3XnsXbRSzVlwmQcy6NyHb%2BkJd9c52WSgkotdVlbPdeWyhUmqOQ%2Bavx3mH6go%2FSZitfh2%2FcMeLmSw33yM%2F2CJuadJH9CA7rhYsEl0lyHEx2TnRuckpOdk69rm7aeXKNkYKcO6AyQfJ53JKBa0FyD%2FGvCD1r1lCAVPiBQ1Dl8ZgDkwCWj9cpN1p0ghs8E64Hb4yDS8Ys57%2Fqr1oRpFkBHs8rHlCW%2BIeVoljSk3tfjMccPi9Mb6jM7KKusw4siIIsVEhGmoSXG%2BDHQnuceszmLYuDK3JfjoYJKEHzO7djMo%2FLBAWJRo5bB%2FEnP7RN4KijuLoa%2BNjt7U%2BTJLJWFAi%2FTXiMMjCnFuv0XLJYPPacwhkGwNCYnpF1Kb2Udsbpe6wnoj57FJldweGnBSMPpiIU0GG1TVVwgydQoDESFLfAIknClJ9tlX5%2FkJ8dQRYlvIf7bQUzF6O7erwgYkSkiud8NsCN0jIugKdq5nh80WxD1D5nZWSjoleZSdVdFtg%2FzPYLCsUMS0lBIZE0HF%2F9B8o2rTzHBB4sHhSfMN70vsAGOqUB%2FH4Gcw%2FKIRdL%2F3seowB%2F3%2BXt4mctaoWJwAOSxRz190uS0K%2BGzVDjeqY28Z%2Bi21Np9KFsUuJVNllppoTRu%2BgRP9gw9s0Pd5GEK3MtI3EVBb9STKu1guoTu1hzZL5Cqxyy%2FHxJZ17y9Ab3ohCSm%2BPuAshgpEE2CVggfYq37OixQRdW72ryGwZwLA2OA5KkU0fsdhQvinXUov%2BFfOaYBHvQ2f4y6pft&X-Amz-Signature=a2eab46b9f89680158f8113ab9411189ea148e32ea8bf0f1da4b9b2af50ad6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RQK7R5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcWNVef8xSOFG94X5IVg2M3jKqPRzfKwLqtkcu%2FrjfvAiEAtVZJh8Fan8NyftHOCs%2BVmAqDJ%2B7gHw85HeFQeI3BfYIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF6lgx5PZPppo6bYMircAw0mDBGr6mDWYU5SYrEUkcZA8eUS08y4M%2F6fFJXsY%2BP3rjvNSGtTZK8WvxOVdkz7k3WCGERuLNGwWEXNeuq5DbSSrFJjXd3XnsXbRSzVlwmQcy6NyHb%2BkJd9c52WSgkotdVlbPdeWyhUmqOQ%2Bavx3mH6go%2FSZitfh2%2FcMeLmSw33yM%2F2CJuadJH9CA7rhYsEl0lyHEx2TnRuckpOdk69rm7aeXKNkYKcO6AyQfJ53JKBa0FyD%2FGvCD1r1lCAVPiBQ1Dl8ZgDkwCWj9cpN1p0ghs8E64Hb4yDS8Ys57%2Fqr1oRpFkBHs8rHlCW%2BIeVoljSk3tfjMccPi9Mb6jM7KKusw4siIIsVEhGmoSXG%2BDHQnuceszmLYuDK3JfjoYJKEHzO7djMo%2FLBAWJRo5bB%2FEnP7RN4KijuLoa%2BNjt7U%2BTJLJWFAi%2FTXiMMjCnFuv0XLJYPPacwhkGwNCYnpF1Kb2Udsbpe6wnoj57FJldweGnBSMPpiIU0GG1TVVwgydQoDESFLfAIknClJ9tlX5%2FkJ8dQRYlvIf7bQUzF6O7erwgYkSkiud8NsCN0jIugKdq5nh80WxD1D5nZWSjoleZSdVdFtg%2FzPYLCsUMS0lBIZE0HF%2F9B8o2rTzHBB4sHhSfMN70vsAGOqUB%2FH4Gcw%2FKIRdL%2F3seowB%2F3%2BXt4mctaoWJwAOSxRz190uS0K%2BGzVDjeqY28Z%2Bi21Np9KFsUuJVNllppoTRu%2BgRP9gw9s0Pd5GEK3MtI3EVBb9STKu1guoTu1hzZL5Cqxyy%2FHxJZ17y9Ab3ohCSm%2BPuAshgpEE2CVggfYq37OixQRdW72ryGwZwLA2OA5KkU0fsdhQvinXUov%2BFfOaYBHvQ2f4y6pft&X-Amz-Signature=debacb313c9e0fd9355719494405adc729754d42e47507b2b9444ff7d988803b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654MTFPKO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvfLS62pZOA0LgTmjsf%2Fd%2Fp6M2haRYwDXVRIa6VLMCmAIgVHBU3tSzVCp%2F3%2F7zv4Mf%2FLIvyt2yKSZB6mfRsWt7UEcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBASHTHv%2Fl%2Bxz6a24yrcA%2F5vrKPUdueJxuW%2FX2dlOAWmoukxdfCJkyvzuEZASkR2I5gy0Eyd0mY6PoVOXux0kFOsPpzfqr7%2BOU6t%2FQQXlk0wv3eS3gScXzl41ItxA6zU4fvsYdKPz5tgZbwbuc%2BAf7g644EoOilKBH0ASyRua5Iu8OdLlwMSjM7gOWV6xd6yu1ujNCRlUyfalTqnh5eRNXzd0UbqlA4BNtv9Ck4Xnw29%2BwaSyXQX3CZ%2F%2BjuEgq1p02vZP2hxp93GwUJ5Rr%2F5MTBLHpxCtc23thmibUZZv5sZ9IxrzNa1i0n9WfXOxHuWiH8i0xFO3nIJ%2Bdobehfa1dv4jGnd7JjLQOvVn9UQM2ngSkuFH1AL60Avk%2FIPcmK6Fce6tA7vSTf3uJJwuzL75j6sNeuznBnNSUrYTDeWXN%2BhkP%2BMm6K1gPI2HPTORzwwxQVsEILDpOa4anc%2Fs8iqXvajTCdS%2BGL2aG%2FePgBLKdEtc8Ki7CIw6Edbm0q29YOg8fNPtvuQ9U3%2FZiOLQfy8E0E8xDohLUGnibiByj2gsoITpbbrakmqghaGqJ%2FAV3kG4lipP15SETBvmj8bmHKtaQgwZQ0DoKU1CFrrmDHZfeTmdJB%2Fj8xkv4NePUvwziIWOYbPGwUdtSCKEqpFMM30vsAGOqUBvom8CL%2FD5f59fRVMgSqp6bdgRJNYF80OUf1sZTaKv8DkPwmkj78RhwHN1%2FmhXxiPywyD3rDy0Z2WIc5ZQGbXIuHWxS8G%2FpCLa4TVXNIaHBJbH0HxDwtLY7Zg6evyl3v7807a53As4ipmPoGIbi3rmOblGNxZYUQiVndA3464tpVfr1Pzd3SF%2Fpu%2Bq5HYusie59HuQ%2BG8HtMR4UP2NWBLftbuie%2FL&X-Amz-Signature=06f846eb88af0c22ba29c8e0da079e8c24d7fad742afa4e238d478e567b71535&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
