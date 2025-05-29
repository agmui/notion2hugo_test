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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV2CKDC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4MhpgDqntuB2eyRquiqZiRJot%2Fpok5pKOi%2BjQ56ltiwIhANWV95RUizPIuK7BQckj1gGTrO%2F4qA%2B13qf5t%2FjttQ1EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNkwwyNn2Lq08QJNEq3ANxXo5MuSfvRcA5VAu65DV00IH8vg2FBZHRq2SA4Ly3jBZTzyg3wdySyLFcqNQ7Nkah1eKcS4eOk6Y2S06GVMc6b9Lqx26N5rT0Wo5eY%2FsIpcH5F%2FZ9DHsimpITJ2ZU3eN6zBjsQ6zBfnmp2K5gBid9BlMuHZc%2B6BvtJJqTvxYNEYlKoaBuqn5Yu44f83rkBc6%2FOAlmoIlFyolDYbJLh4RC8Kr%2BPrtT3QcnubL6lfCpPGK4cUFXlBsFLMrlTEjLFrnyNYXOs7HhoAdfJhMx41rarxyvoWvMaYDklOWkMEKJ39ihMZl17f1Q8gIZjmzT1eTagNPLZppvQnrugMRQSdPnd5chGbluPxVjIq7ffCQiGi6JTy21ldADPlOFoRGfr8zpuax7Z5b45%2Baz0t65vrOgm3s8SqfO2ylx84dlnfxptu7dt4qUWuQ1vPOWw2%2B7jyDDW2VeQqrgsMi7G2ZUf%2FsSsI57chTj27c2d7Ap5tBCm8I6L%2FBm4UJ%2BJmY0sGvblidx35zpZW77Hj8gjanrk0%2F6ii8vVEjSqD%2FgfzknJoR7rWtHchmucra5wxQTZYmF7IshBr5udCF9h9q3Ruw4ll3K9JSfSkfNTfH1vYC%2BBSxBgNZdCT5ETLb3DosBSTDWr9%2FBBjqkAWV2e6bWK%2BwgJcJ8xUZasdbOEl0dKG%2BQh3dAahek7zGUyd7P2bN032Xj9N423yrcfX7Q6UoFB80HWi2O3FmGZc%2BrWU00HJ%2FZpVjw6UcleQcOMK6mLRGNf35Z4wVJpFJzog7EBegTeWsfExcUx%2FWPax%2FrpvBHwvVIX0QkYNy0zYEzTjTpl6zrtf2w1z4XQzlyQjDxSGtq15%2FRu3cf9xe0gAfsb6ln&X-Amz-Signature=9782f98beac4e59cf38ef693f63a8a5091cc926229c9432c2df58d9602635ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV2CKDC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4MhpgDqntuB2eyRquiqZiRJot%2Fpok5pKOi%2BjQ56ltiwIhANWV95RUizPIuK7BQckj1gGTrO%2F4qA%2B13qf5t%2FjttQ1EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNkwwyNn2Lq08QJNEq3ANxXo5MuSfvRcA5VAu65DV00IH8vg2FBZHRq2SA4Ly3jBZTzyg3wdySyLFcqNQ7Nkah1eKcS4eOk6Y2S06GVMc6b9Lqx26N5rT0Wo5eY%2FsIpcH5F%2FZ9DHsimpITJ2ZU3eN6zBjsQ6zBfnmp2K5gBid9BlMuHZc%2B6BvtJJqTvxYNEYlKoaBuqn5Yu44f83rkBc6%2FOAlmoIlFyolDYbJLh4RC8Kr%2BPrtT3QcnubL6lfCpPGK4cUFXlBsFLMrlTEjLFrnyNYXOs7HhoAdfJhMx41rarxyvoWvMaYDklOWkMEKJ39ihMZl17f1Q8gIZjmzT1eTagNPLZppvQnrugMRQSdPnd5chGbluPxVjIq7ffCQiGi6JTy21ldADPlOFoRGfr8zpuax7Z5b45%2Baz0t65vrOgm3s8SqfO2ylx84dlnfxptu7dt4qUWuQ1vPOWw2%2B7jyDDW2VeQqrgsMi7G2ZUf%2FsSsI57chTj27c2d7Ap5tBCm8I6L%2FBm4UJ%2BJmY0sGvblidx35zpZW77Hj8gjanrk0%2F6ii8vVEjSqD%2FgfzknJoR7rWtHchmucra5wxQTZYmF7IshBr5udCF9h9q3Ruw4ll3K9JSfSkfNTfH1vYC%2BBSxBgNZdCT5ETLb3DosBSTDWr9%2FBBjqkAWV2e6bWK%2BwgJcJ8xUZasdbOEl0dKG%2BQh3dAahek7zGUyd7P2bN032Xj9N423yrcfX7Q6UoFB80HWi2O3FmGZc%2BrWU00HJ%2FZpVjw6UcleQcOMK6mLRGNf35Z4wVJpFJzog7EBegTeWsfExcUx%2FWPax%2FrpvBHwvVIX0QkYNy0zYEzTjTpl6zrtf2w1z4XQzlyQjDxSGtq15%2FRu3cf9xe0gAfsb6ln&X-Amz-Signature=13a549ab5678e8b9c7d8fbe1a1b14acd0321b3e35c6c6ef60d157bf678890372&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV2CKDC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4MhpgDqntuB2eyRquiqZiRJot%2Fpok5pKOi%2BjQ56ltiwIhANWV95RUizPIuK7BQckj1gGTrO%2F4qA%2B13qf5t%2FjttQ1EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNkwwyNn2Lq08QJNEq3ANxXo5MuSfvRcA5VAu65DV00IH8vg2FBZHRq2SA4Ly3jBZTzyg3wdySyLFcqNQ7Nkah1eKcS4eOk6Y2S06GVMc6b9Lqx26N5rT0Wo5eY%2FsIpcH5F%2FZ9DHsimpITJ2ZU3eN6zBjsQ6zBfnmp2K5gBid9BlMuHZc%2B6BvtJJqTvxYNEYlKoaBuqn5Yu44f83rkBc6%2FOAlmoIlFyolDYbJLh4RC8Kr%2BPrtT3QcnubL6lfCpPGK4cUFXlBsFLMrlTEjLFrnyNYXOs7HhoAdfJhMx41rarxyvoWvMaYDklOWkMEKJ39ihMZl17f1Q8gIZjmzT1eTagNPLZppvQnrugMRQSdPnd5chGbluPxVjIq7ffCQiGi6JTy21ldADPlOFoRGfr8zpuax7Z5b45%2Baz0t65vrOgm3s8SqfO2ylx84dlnfxptu7dt4qUWuQ1vPOWw2%2B7jyDDW2VeQqrgsMi7G2ZUf%2FsSsI57chTj27c2d7Ap5tBCm8I6L%2FBm4UJ%2BJmY0sGvblidx35zpZW77Hj8gjanrk0%2F6ii8vVEjSqD%2FgfzknJoR7rWtHchmucra5wxQTZYmF7IshBr5udCF9h9q3Ruw4ll3K9JSfSkfNTfH1vYC%2BBSxBgNZdCT5ETLb3DosBSTDWr9%2FBBjqkAWV2e6bWK%2BwgJcJ8xUZasdbOEl0dKG%2BQh3dAahek7zGUyd7P2bN032Xj9N423yrcfX7Q6UoFB80HWi2O3FmGZc%2BrWU00HJ%2FZpVjw6UcleQcOMK6mLRGNf35Z4wVJpFJzog7EBegTeWsfExcUx%2FWPax%2FrpvBHwvVIX0QkYNy0zYEzTjTpl6zrtf2w1z4XQzlyQjDxSGtq15%2FRu3cf9xe0gAfsb6ln&X-Amz-Signature=efa4542066e95569ce9b88757176fded1319a191394a24280077d29ec6673b18&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZSZIS3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRIzFNVh20Kra4VuMaTbMm1tdGgnuxAhnSMY7C1Y%2BfPgIhANxBdwoLC%2FuPtWA58u4FV%2FJtNZaXgQge4ZauL%2FiSyc8RKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynIyRElbvnU1wIFtwq3AMW1ZTTet5I8enG0MQEZxw37Zn3yjLp3ENNxudUbvV6Lnaz36Ov52p24%2BW4972rcE988J5A9CPLDHhwSLfElALrZOdsYwKw%2BLDK1xGXsNvTEzKcXRzjlAi%2FrCAr7QARsEMxh0H5uWJxbjUxyEWImoVcMayjKE3Ni%2B0q%2BdIFksAV1H%2FZM%2FwuC7lAN%2BXhdazuMagiZZJq9t6sLVjRg3e5qTwtBKq91gOVvqoOcSA1hU37yaftM%2BdJqRq%2FfKk%2BpJ1w83WRdDJWfAF3IfjEc6gH%2F%2B5RabJKuHSj8tjhuYcjIh6aLx%2Br7QgqSOW%2Bx6kKqIIWRQcGkbwexnxXGcSlcBa4sq8F7fAMd7eULl9elwA3J8%2B5aOi9UtCC%2FAAynImy68h5Mi9kq%2FRaf7OEEFPd%2FxMQFiRJGtPTefuBe%2BUaHA6e1%2FOomniUxhqhH5fTm6mPMbpJotuYTEPBD38MDWY2cNWElI%2F3qIx5yZVioVjBb95LXXa45GQwg9VF8SaF067C7WIHOC8LcAZd20rqbaNtKI4AK1TPYQXPMb%2B%2FqKxmvUNlTjig0Ia2RwleYslfuu%2Bi0%2FZHP9f8x3S%2F5y7yxWcVurM3k1KGfAoU7l%2FVyzTiAqgPCTNyi5BQMhEUDzT7ifJS7DDFr9%2FBBjqkAS9VM7UJc6MkLJ3qLMw7mhmrc2o5efEcRSK%2B1ahF5C9QMAfTjZYgrOysC2LLL7rE6QcSg4Jnqh5nqv26urh9EJzbYIZRSjgw%2FmWAMtG9LISAgBmkRFYEge1e2r434oO0mDpf2os%2Fj4gSMCSp12%2BxwFM130XtJ18DJSRNJlQeyDC8s5su%2B%2B93vKvA1WujcK3gdjwQqJirSGvwzRNwd%2F0ihzXrGGaV&X-Amz-Signature=efe2a528e6b57f939f261f96980122a82ff4d17d0df42b4d0e3a4d07069fe059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEK6ZU3A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMrlmHhTrao24u0t3X%2BnKGVa4b4BObwlZpCLMCiRBMDwIgWy75PDiETmZhr0kQjhT1BxkQt3FWXcfX1O85i%2FWBa%2FwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8Ktl9ZsRm7fCUEJyrcA7vyO2vwVMIw%2F3pEfO1c31nZaE22VIBXS%2BwgyQHaDlvUg%2ByL5wxT0PYJd1aoQWLxqA6vu9zhY4RNp7Qg9CBDSHactOIHMCNXNZcFxtqTrgrR4LbGKCb9v6T3FlyHF%2BLqucSve6BJde%2B2Kw%2Fso9de%2B5DgCoGiBnxALhvT%2BriomUtOE6aXSRAP2YUV2N887n%2B0FhKISA2fU7yPfkFCMwos4bJ6USxAlTbNUbElYxqJG%2BLoaaOYuMGqfPwcd50oDbxnyrpyAZW8270Yux3BLwvqWfv8G62SFd%2FFFD4jIFAWJOWzzOeE1kdouvgiZ%2FWg3XxdRZLCzRRzYQKgizByKdXKrgFislBFcnZ7raKovgQGfjjCxHvTFeE0sdwV0wz56pks9613cE0NZUdEZ7FC2j7LN363aDjVYGTcpP2dU%2FwKS8iZ7lLpddREM8egs%2FF%2BpuAOk3gJX4G40b2VnT8%2F%2Bz9wAG0DILuwJ6F2SBfpGMKnnnXhw0m1ryvZBT8IOYR5R8vOmQX49cWR8eWXyLYF8mBCSDIv9ICz4wlIbsVhDo1VmsQoeFuVduZ2dFjfUpo1l2BIvmh9vxeluHjnpxspn7UUkZ1PQmXxTz%2BUlGCbj1Ugr8jqcdOuwrrd78%2BhaPBBMK%2Bv38EGOqUBOAlyHmzOboVhlT5jN%2B8cUs7qwH57nhZZun7LvQuEj5lJbLsMx%2FBVYutJLHokFsO6hDF9sUmh1yvkWxsLYUDaAGfUU9jHF3L5vwxZTDD8iW4hNHUWFLt2q8eJarrxAQu36pVYBKJOwb5a47jwujIXNFpSg0EZJuS9Z50JBzLNsQbxAUu5snsevxshnHEi9igDo5GG7xwcUHnAIhI952WAvmSY5zm1&X-Amz-Signature=aebe39042d569b66437517f20112297ad74c092b5e3bc786fffbeeac6b2431ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV2CKDC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4MhpgDqntuB2eyRquiqZiRJot%2Fpok5pKOi%2BjQ56ltiwIhANWV95RUizPIuK7BQckj1gGTrO%2F4qA%2B13qf5t%2FjttQ1EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNkwwyNn2Lq08QJNEq3ANxXo5MuSfvRcA5VAu65DV00IH8vg2FBZHRq2SA4Ly3jBZTzyg3wdySyLFcqNQ7Nkah1eKcS4eOk6Y2S06GVMc6b9Lqx26N5rT0Wo5eY%2FsIpcH5F%2FZ9DHsimpITJ2ZU3eN6zBjsQ6zBfnmp2K5gBid9BlMuHZc%2B6BvtJJqTvxYNEYlKoaBuqn5Yu44f83rkBc6%2FOAlmoIlFyolDYbJLh4RC8Kr%2BPrtT3QcnubL6lfCpPGK4cUFXlBsFLMrlTEjLFrnyNYXOs7HhoAdfJhMx41rarxyvoWvMaYDklOWkMEKJ39ihMZl17f1Q8gIZjmzT1eTagNPLZppvQnrugMRQSdPnd5chGbluPxVjIq7ffCQiGi6JTy21ldADPlOFoRGfr8zpuax7Z5b45%2Baz0t65vrOgm3s8SqfO2ylx84dlnfxptu7dt4qUWuQ1vPOWw2%2B7jyDDW2VeQqrgsMi7G2ZUf%2FsSsI57chTj27c2d7Ap5tBCm8I6L%2FBm4UJ%2BJmY0sGvblidx35zpZW77Hj8gjanrk0%2F6ii8vVEjSqD%2FgfzknJoR7rWtHchmucra5wxQTZYmF7IshBr5udCF9h9q3Ruw4ll3K9JSfSkfNTfH1vYC%2BBSxBgNZdCT5ETLb3DosBSTDWr9%2FBBjqkAWV2e6bWK%2BwgJcJ8xUZasdbOEl0dKG%2BQh3dAahek7zGUyd7P2bN032Xj9N423yrcfX7Q6UoFB80HWi2O3FmGZc%2BrWU00HJ%2FZpVjw6UcleQcOMK6mLRGNf35Z4wVJpFJzog7EBegTeWsfExcUx%2FWPax%2FrpvBHwvVIX0QkYNy0zYEzTjTpl6zrtf2w1z4XQzlyQjDxSGtq15%2FRu3cf9xe0gAfsb6ln&X-Amz-Signature=0c53f5c987863afb50697cf505ceaf4e7d65a2b427d4251cc4e1b3e4fd6efb78&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
