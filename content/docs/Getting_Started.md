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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2U4HE26%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7c08GOKo5vmmVGwVcWBXTkK79XJAixnDrgfJv3BvOQAiA%2BHiqBPjjtPkcbYm%2F8Hh5XzOUivzJVySNsLBuLh9d4ECqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHtHwCCP62%2Fh%2BSUvKtwDiT5cDkjlQQ8cl0J8ht9yG4ItH8Li1CpNoPcvCOcgubIIWH%2BFOX%2BG0qlZawZjs8UBvYbEM1qS5qM0Oq70q9BJdubSDIWSJH9eiBYTiNlznYQ6BoGPl0uPLCNJYQtPgKKv%2FnJxqFVAtTbz%2B%2F39MiaTTpoQWYHI8XDni%2Fw3iMnCmA95WKEqD0PwMb5X5mhVufsWPikRwrMC2ylEXBBU1pwyl%2B1BCajWUTGkA55MyFjSHPkCoPK%2B26zpJmJRKMQOcQojVWoZO2Yi6UQXUNMRzemlcu6MW6okZ%2FCgcbU0It5bjGv9t%2BiLfrYtiHKS%2FalMD0750OhfzSsKBrAIovr4jjJXu3dbbaOyiKUJpogfP%2FUs5dfcWmLqSCH7w1gWbve5VYAONybrDQbPBfR1MEUDFlx6fc7DKE50roM2HP2SeUcVC9%2BrhYlsdj5mYP2GcAgsYJeFoU9%2B5aLy%2Bu1aACMUyTyCEwIHSTH%2BQmSAfFbMYDG6oFYBAsHBtnTs9fslGLAEuj1v1%2FqHN7OGOgRVVDOb5fgRouWAHq9pdgBJSGK%2FeuGrjNMq9aAxtxH4I%2Ba73cgwPsSQOiQyvFkMh3xqIOxAILkaQejFkXgxTdQNHwOLL8I0IPFVzVo1pT2Qfg2RynUwlrH9wAY6pgF2DJKM9bvxXjZyf7bpi5rayyheNiNPS%2F4JundQkw%2BqB2wjOvIKFK2LjDSdi1gLMnINGM7jUSVmQb9%2BzrdqeF7E%2FgwVD0fAknjhMNU8PpxHPsaZNswoaxUblhJOyCAySGZYZMpYO554ik3jX7Fns%2FO28iliF4pk6PSSt5T6LaXIDz75kjt2DSO7lAf%2B0iQ8AeAMkmPjzAexd3Uo0UM8sIhs5fF%2FTvAE&X-Amz-Signature=72e68e2bd629049bdceaee547ae295ae470290d384296205f1908e7e8c662ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2U4HE26%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7c08GOKo5vmmVGwVcWBXTkK79XJAixnDrgfJv3BvOQAiA%2BHiqBPjjtPkcbYm%2F8Hh5XzOUivzJVySNsLBuLh9d4ECqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHtHwCCP62%2Fh%2BSUvKtwDiT5cDkjlQQ8cl0J8ht9yG4ItH8Li1CpNoPcvCOcgubIIWH%2BFOX%2BG0qlZawZjs8UBvYbEM1qS5qM0Oq70q9BJdubSDIWSJH9eiBYTiNlznYQ6BoGPl0uPLCNJYQtPgKKv%2FnJxqFVAtTbz%2B%2F39MiaTTpoQWYHI8XDni%2Fw3iMnCmA95WKEqD0PwMb5X5mhVufsWPikRwrMC2ylEXBBU1pwyl%2B1BCajWUTGkA55MyFjSHPkCoPK%2B26zpJmJRKMQOcQojVWoZO2Yi6UQXUNMRzemlcu6MW6okZ%2FCgcbU0It5bjGv9t%2BiLfrYtiHKS%2FalMD0750OhfzSsKBrAIovr4jjJXu3dbbaOyiKUJpogfP%2FUs5dfcWmLqSCH7w1gWbve5VYAONybrDQbPBfR1MEUDFlx6fc7DKE50roM2HP2SeUcVC9%2BrhYlsdj5mYP2GcAgsYJeFoU9%2B5aLy%2Bu1aACMUyTyCEwIHSTH%2BQmSAfFbMYDG6oFYBAsHBtnTs9fslGLAEuj1v1%2FqHN7OGOgRVVDOb5fgRouWAHq9pdgBJSGK%2FeuGrjNMq9aAxtxH4I%2Ba73cgwPsSQOiQyvFkMh3xqIOxAILkaQejFkXgxTdQNHwOLL8I0IPFVzVo1pT2Qfg2RynUwlrH9wAY6pgF2DJKM9bvxXjZyf7bpi5rayyheNiNPS%2F4JundQkw%2BqB2wjOvIKFK2LjDSdi1gLMnINGM7jUSVmQb9%2BzrdqeF7E%2FgwVD0fAknjhMNU8PpxHPsaZNswoaxUblhJOyCAySGZYZMpYO554ik3jX7Fns%2FO28iliF4pk6PSSt5T6LaXIDz75kjt2DSO7lAf%2B0iQ8AeAMkmPjzAexd3Uo0UM8sIhs5fF%2FTvAE&X-Amz-Signature=c1a53d5d1ad1f0f76bdbae76120f176053e11cc5a8761d89ca3d0b09d3381004&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2U4HE26%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7c08GOKo5vmmVGwVcWBXTkK79XJAixnDrgfJv3BvOQAiA%2BHiqBPjjtPkcbYm%2F8Hh5XzOUivzJVySNsLBuLh9d4ECqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHtHwCCP62%2Fh%2BSUvKtwDiT5cDkjlQQ8cl0J8ht9yG4ItH8Li1CpNoPcvCOcgubIIWH%2BFOX%2BG0qlZawZjs8UBvYbEM1qS5qM0Oq70q9BJdubSDIWSJH9eiBYTiNlznYQ6BoGPl0uPLCNJYQtPgKKv%2FnJxqFVAtTbz%2B%2F39MiaTTpoQWYHI8XDni%2Fw3iMnCmA95WKEqD0PwMb5X5mhVufsWPikRwrMC2ylEXBBU1pwyl%2B1BCajWUTGkA55MyFjSHPkCoPK%2B26zpJmJRKMQOcQojVWoZO2Yi6UQXUNMRzemlcu6MW6okZ%2FCgcbU0It5bjGv9t%2BiLfrYtiHKS%2FalMD0750OhfzSsKBrAIovr4jjJXu3dbbaOyiKUJpogfP%2FUs5dfcWmLqSCH7w1gWbve5VYAONybrDQbPBfR1MEUDFlx6fc7DKE50roM2HP2SeUcVC9%2BrhYlsdj5mYP2GcAgsYJeFoU9%2B5aLy%2Bu1aACMUyTyCEwIHSTH%2BQmSAfFbMYDG6oFYBAsHBtnTs9fslGLAEuj1v1%2FqHN7OGOgRVVDOb5fgRouWAHq9pdgBJSGK%2FeuGrjNMq9aAxtxH4I%2Ba73cgwPsSQOiQyvFkMh3xqIOxAILkaQejFkXgxTdQNHwOLL8I0IPFVzVo1pT2Qfg2RynUwlrH9wAY6pgF2DJKM9bvxXjZyf7bpi5rayyheNiNPS%2F4JundQkw%2BqB2wjOvIKFK2LjDSdi1gLMnINGM7jUSVmQb9%2BzrdqeF7E%2FgwVD0fAknjhMNU8PpxHPsaZNswoaxUblhJOyCAySGZYZMpYO554ik3jX7Fns%2FO28iliF4pk6PSSt5T6LaXIDz75kjt2DSO7lAf%2B0iQ8AeAMkmPjzAexd3Uo0UM8sIhs5fF%2FTvAE&X-Amz-Signature=9d5979f3b9a3189a210aa9f0a3594380fd9a8870a3010aa6b19d0bc2620e485b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MV4W3JH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9iPGPUq4b0ZIDxBIPPshkuJAj7cFaEwIyqUrl4noIgIgPKS16RusSQ1FaFR2a80GPorOK7fyoi77tmyMmimG5LoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMl7xhlz0ubGklUmSrcA9owh73y5RGcUMBg7Vw0hUOEGkYZnCwbHPGiWyH0Fq6suzrd4Isgp7f5nIh8%2BPrwPe7yscd9PjzWEUC7l1mU6Nq1ZnPouz8xUu7HRCc4B%2F8POFaZHIZP0SUq%2BqZDg7hUw8Ifff7kohOUmaNMSfU0GGKmth20C9h9iExMdmP8HaPgacqPJah5w6hj42wibYkrm3eEq%2FFtYKneYaR5JapaazIigjnWDa8669d0eUxwP4qx3x1gzhzyM2kFjlB%2B9Rc%2FkG9fbgTHRsSkkGVAetBmUzcPDby2v5zkyu6N7UiewBE7gJehdi%2Bisu3almckHHQVxDAk%2B9G2Ov9mbBtH2YrwecFCXl0rZ8KB08tZrcCwXLI6IvwWov2RCUL8ASw8X5DyV%2BCabKS41Zkgo%2BHmd2JnJ4cQBuZdISIZYvnBg5s4aPp4xPjuclROo%2BbhH99bgg74EXXKhH2BNfoWc88HbPS4CQ5lifowPOuIay8X1fnO5S51U7gVEFYFI4ATOe5j770XXsVXvdmoqDPTh1f9y%2FVlsoSoshxABa0H7Z7ksKhURwVseO7P0GStwcwFeAUBOL9EfCHmE6X6kyn%2FKDWXWbZii24yxuYhdiqU9aK3ieCLGDcnzLirgDWMaH3oplXkMJ%2BR%2FcAGOqUBtQKW1m02yCgP2cvbQDmVVjJIIe2nFHvk5LByOZCnV%2B4WksSxo4Iq07SzYrRLMJskwlx04NyPP1tODMITQuGou8Es8qoZ4oivrGgKyfvyKL6%2FX7v%2Bs255nPycCh8WT9t8rPDAkwJyuAoAFgQnVoO9VX2XKDXYHfyj3ByinVJ8SKBH3HlbsljKjplswUvkMEN7vw8yOUo%2BFa4HnhYxuLo2PLGx%2B9hg&X-Amz-Signature=3a1ee5b69206bdb8ebca93f9b56567bfb13cb69add25692216ad3f444e1c651a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RXGEKR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGQ5efBR%2B86KJl%2FgM8ud%2BWcn01cnL2u%2B0PQz3jl1cGgIgVhcNM1hcdEe5l50Wf0mJnLAFINwEwc8kD0s8eVgnQ5sqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6O3nP1bZmXvHoZ8yrcA7w4DSlITJVlxBclqpKRgObdtEomtqDy%2FySkhrCozeir34icAobj4D6chUeQ964jNHp2Tsdg%2BFFs6ajBqcuUT3ParZn10iSyIbC47%2B%2BmL4oHWzRxXp9vMu%2BCw7PZ1TRRIhDt8KjEBzMeo2VeecS625biACeS%2FobhuqzjdaEzxEE5ttu4gOrqPC5vcAp3QyqVjsRZPWzFN3bZuRMH5XFjdk3RsVJhJmPcFAsEtKWGnBC0WU7kI%2F41NATDRKZ2iGa4m5msqMeIdE7XDw9oGJ4TsytDC3WqVRAcKhgNApS2NPM71%2BmzV1rp1EkWOM03GgSN4KujqxGCxeqKN2XB09H2tzCx4OcDKqrDv9%2B19a9TauSziYE%2Fur2JUhn5gvnJc6Qlgv7eTcDoT1v7m58fO%2F25X0e0hGHavJ7FX1tV3RAlMLIPd3iTJ6P%2BUf7UzBX8w%2FydHxV99MTOUuvgUbb%2FsVUZffbEDMdliBAr1mA6ahVWkepex0%2FhvBug1dIii6Gb5t%2Fm0IzvoVIG7ibTfjVETVtXJDfao23a8hmSCa0l%2F1rkRr5iS3WnwsP%2FqXNkhKorkNSHzGfhsYukmMjCxg7etpt0i0GhpwCk6HtYp%2Bze1YqAVPvkA%2BBbxXkbKDdQroV8MPqk%2FcAGOqUBap%2BxX%2FK7dEU%2FPPdsvsZfjhHkOa15gphfmAv5O7naUwjJHctfSe6s%2FYVdaau4cjFLRlmGnnpcREBI29n5iDvcVHeFzPfyGtgT%2F%2FR7hMNTrxbpj1NfRoX4i2BkFH%2FEsSlkCEpIIPZb%2B0d1f%2BH6Kw8x6RLr3apSme5wd6FJoRXrw0EVz84uNfYxS2BIU3WrNTa8j%2B0N%2FIIONbY3ma847SXlnykcTIYn&X-Amz-Signature=a2ee148e72739a259bb4fa75bccd270f932ee3b0ad95ab77b40844c2c64bbefb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2U4HE26%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7c08GOKo5vmmVGwVcWBXTkK79XJAixnDrgfJv3BvOQAiA%2BHiqBPjjtPkcbYm%2F8Hh5XzOUivzJVySNsLBuLh9d4ECqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHtHwCCP62%2Fh%2BSUvKtwDiT5cDkjlQQ8cl0J8ht9yG4ItH8Li1CpNoPcvCOcgubIIWH%2BFOX%2BG0qlZawZjs8UBvYbEM1qS5qM0Oq70q9BJdubSDIWSJH9eiBYTiNlznYQ6BoGPl0uPLCNJYQtPgKKv%2FnJxqFVAtTbz%2B%2F39MiaTTpoQWYHI8XDni%2Fw3iMnCmA95WKEqD0PwMb5X5mhVufsWPikRwrMC2ylEXBBU1pwyl%2B1BCajWUTGkA55MyFjSHPkCoPK%2B26zpJmJRKMQOcQojVWoZO2Yi6UQXUNMRzemlcu6MW6okZ%2FCgcbU0It5bjGv9t%2BiLfrYtiHKS%2FalMD0750OhfzSsKBrAIovr4jjJXu3dbbaOyiKUJpogfP%2FUs5dfcWmLqSCH7w1gWbve5VYAONybrDQbPBfR1MEUDFlx6fc7DKE50roM2HP2SeUcVC9%2BrhYlsdj5mYP2GcAgsYJeFoU9%2B5aLy%2Bu1aACMUyTyCEwIHSTH%2BQmSAfFbMYDG6oFYBAsHBtnTs9fslGLAEuj1v1%2FqHN7OGOgRVVDOb5fgRouWAHq9pdgBJSGK%2FeuGrjNMq9aAxtxH4I%2Ba73cgwPsSQOiQyvFkMh3xqIOxAILkaQejFkXgxTdQNHwOLL8I0IPFVzVo1pT2Qfg2RynUwlrH9wAY6pgF2DJKM9bvxXjZyf7bpi5rayyheNiNPS%2F4JundQkw%2BqB2wjOvIKFK2LjDSdi1gLMnINGM7jUSVmQb9%2BzrdqeF7E%2FgwVD0fAknjhMNU8PpxHPsaZNswoaxUblhJOyCAySGZYZMpYO554ik3jX7Fns%2FO28iliF4pk6PSSt5T6LaXIDz75kjt2DSO7lAf%2B0iQ8AeAMkmPjzAexd3Uo0UM8sIhs5fF%2FTvAE&X-Amz-Signature=8d1a0dc77d10a824fcf69384b9670e973c45889ccd2b9d624def2ddcc20a0419&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
