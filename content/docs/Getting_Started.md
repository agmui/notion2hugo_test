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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5KNLLMF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXcTkFPg6YiFT31R5%2BinkmZI0du%2FLUVCxeQgpbonq8eAiEAsGXKJtq1%2ByMMpnNzZEpXw5xXLKH9KJI1rsfHhH2RBRsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV1iwzCEWbzxGXJPCrcA6pKc279bsvImB%2FE%2F630HlN%2B3C3f23rWFORXag77FccKIiLUE31u9gUv7HDhbjx9p4O8NtAD2SygdsONe7AKfb5B0GhKZxOBM4YG7n88pWeebRsSNV7LV8OYgBhVHrrqTBQ0iXJo7kCKsNp43nQt9mKXEC5TtR58g9%2F9fhiM5CsNgg%2FnH%2Fu4ogutW8emLH%2BrOSFcG7O2Y7ORBqoYegixM7bZh3UaO%2FI83EBqpiPBOAvoIBmxL1Lyl5RkzUuupDpscQ6Tr%2B%2FigPMGQg1AnXcWAjk2kW5RCA1rgLSg4ckL7u4COvXRKj4CDPjO7hrj%2F%2FevSBJo4j8jBaiAV8SBvNucx07nNEcaurzfrEtBgEq6pJ13NYxCNt16lK6mWudD9%2F34f3gkPmAoOhKxC6CEm8hsTtIptjM%2B%2BVfPWACQDoAE6splOqRNHs0XM0%2B2EvJmS6PwDiX7SmVsJVXnG4uO8hQFdnqXPl0fOFKK%2F3Aj%2BujhfaSLB60SHbnhVOfqymUui7bgVU9D%2FrVbsGFwySPnB04l%2BsZUjVlsrHYnEUBYroiEnSyjGD3yY%2BWoDR9L0kpHLz2uco5FeyexVGKsYgNwmA9AeyGJi9yqlhPAuMyiIhSGhjAYRYs%2Bujq8x8FpxxtvMMCeqL0GOqUB7QJyxIbuKPHDadHmmUOhwURUYBh8X%2B9RWkVdi6zCNBIpqlEzdu%2FH3Nzlrf43fFBUFwIFuFBh84Y1R%2BpX45ypTUef39Y0ja6yCEJmV%2FoCHoHK8wAesomne3tiaH0naMEPS9ohmTvvxCzGVzpM4vuoyEjRqn7HppepGVqus90w3kZd3Zl%2Fg4MrJ%2FMKOt6MfbUbFA%2Bv0KyPS%2BD7PNqV3rKc3TfpTSqi&X-Amz-Signature=b08f1e82a61d22a36848c9075d81ce2613d3d658e92429c3717baffe50f574d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5KNLLMF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXcTkFPg6YiFT31R5%2BinkmZI0du%2FLUVCxeQgpbonq8eAiEAsGXKJtq1%2ByMMpnNzZEpXw5xXLKH9KJI1rsfHhH2RBRsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV1iwzCEWbzxGXJPCrcA6pKc279bsvImB%2FE%2F630HlN%2B3C3f23rWFORXag77FccKIiLUE31u9gUv7HDhbjx9p4O8NtAD2SygdsONe7AKfb5B0GhKZxOBM4YG7n88pWeebRsSNV7LV8OYgBhVHrrqTBQ0iXJo7kCKsNp43nQt9mKXEC5TtR58g9%2F9fhiM5CsNgg%2FnH%2Fu4ogutW8emLH%2BrOSFcG7O2Y7ORBqoYegixM7bZh3UaO%2FI83EBqpiPBOAvoIBmxL1Lyl5RkzUuupDpscQ6Tr%2B%2FigPMGQg1AnXcWAjk2kW5RCA1rgLSg4ckL7u4COvXRKj4CDPjO7hrj%2F%2FevSBJo4j8jBaiAV8SBvNucx07nNEcaurzfrEtBgEq6pJ13NYxCNt16lK6mWudD9%2F34f3gkPmAoOhKxC6CEm8hsTtIptjM%2B%2BVfPWACQDoAE6splOqRNHs0XM0%2B2EvJmS6PwDiX7SmVsJVXnG4uO8hQFdnqXPl0fOFKK%2F3Aj%2BujhfaSLB60SHbnhVOfqymUui7bgVU9D%2FrVbsGFwySPnB04l%2BsZUjVlsrHYnEUBYroiEnSyjGD3yY%2BWoDR9L0kpHLz2uco5FeyexVGKsYgNwmA9AeyGJi9yqlhPAuMyiIhSGhjAYRYs%2Bujq8x8FpxxtvMMCeqL0GOqUB7QJyxIbuKPHDadHmmUOhwURUYBh8X%2B9RWkVdi6zCNBIpqlEzdu%2FH3Nzlrf43fFBUFwIFuFBh84Y1R%2BpX45ypTUef39Y0ja6yCEJmV%2FoCHoHK8wAesomne3tiaH0naMEPS9ohmTvvxCzGVzpM4vuoyEjRqn7HppepGVqus90w3kZd3Zl%2Fg4MrJ%2FMKOt6MfbUbFA%2Bv0KyPS%2BD7PNqV3rKc3TfpTSqi&X-Amz-Signature=65fe384129e7bb4daa1c4484db6c0a2537ed576f26c2ce2c354f272e7e0c7da1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDKHTDX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9F81wTff%2BzlSPMTfBlkyncpy3WlWC17pgEhTarK%2FO3AiEAzSs9HyJ%2BUspmbUOhqO6T30ml8v16c8%2Ff1aEoqkc%2FQ5kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJW9fFxXLsx7V0NuircA2%2B1cLvc8e3xPwNWo9dVd9ifTbWHlRQxxpKsYa5A%2FV%2BOmqHacBKHsZANWD9WtxiOuX%2BwWBLj0%2FwZFsDhmoUGqGWuHhEGE6xI3CN1UiP0yXqaL5BkigWudX9eA49osibzU8yXejxxfmjVWkpsuoFCRRCCGWY9Zbq0tbdHcc15JcAqLn2aL2nNuRQXNdryNUvRiexTFv1ZvNsTffMNQ5D9TKzzoJF1a3ZV6A23NZovHnIvQUZAAU2G8yAG5UvuDsy0WAZO8P%2F%2BDO6VDMjKIHsF4rQfP5WcwDHoZqv%2BErh5yKZ5rTuoeH0rjc%2Fd%2BQaE3tDYFdvcEnqC%2FNMBuXfaIEIs3AXzwFLgTk31Y5SO%2FW1S8X3NFDm%2BRC2Kv4RkccRBNhNp2QTaBeknlMz1DR7ov2mKerO6O2VMj1s%2Fk49X5%2BYNf2ep23ZLfEyA8B7HCWrfc84GnLnVwttJLxrnwkQVWyUMMH3j0Cx6g9jbCJZjS3yB0BCk5%2FG9x%2B1ijcyfaPw2%2B1wXYr2rHDjI5D9Rdn9Mwmt%2F1kIf2R2GLOtqROuARSU38D3hmTP7%2FSlTfhPXdJ%2FHarmiLX%2BEQ8F4KZPtaaYRXBRrx2NtJjH%2Brv3skLx4nfzOtm6NNYFXmh1aGaRZl2ruMOueqL0GOqUBbNJugnDrLwiQgk1lIsZZk02RroUT6NgPk0C1gSyQg5UMcBCkLsm8YrH2DF9uA2wYs7O59pBk8nM2n5RnmldURmaaPPHJkNtBYUAlHP71hNZVa48JB2loovvkg2Rcg7m%2FrAFJpj1odDAr7TbSnKULXEeqgTPd9%2FxU3EYOeI75b%2FQ39cX70rOhmc8an2mdCzMuVjrv0Xepw69uC0pA9p0vPkY0asE6&X-Amz-Signature=abebcf4a6ecd42ea1fe4c9ae5477730883e606cfbb497ac5c588a93b8baa1d58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44QFXIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDyETdqfg6ovNd%2FuHbu1mOnchcR9evkwaF8WlXiF4iYgIgfC%2BobYM%2BFX7MrDfkJiZHxzUzqNei9MgLumhOtX4GBWIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtWarRvMpyqbGFWbircA%2Fg9DyZL%2FPG%2BtNCcKOY1cpyjMffhANfYzO5toD5jmizvDhmr3kA9y7c8iin21PdYPm4Hdoiq6mF%2FNGv7wYcR7O2qKUW6pFVUkbfYMLAcT%2B%2BXO5alX1Glj%2B%2BmgWz8fDReLsi6KxOMXH3lbzDO5LIQ18%2FGRYPpPCDSAvUt3mgUY%2F34PJOJlV6b1cPwA1YX1zpquP98WYOugzEgP4YMWMFEUEl9iH53RGDPQIpH%2FfJx9gty2G1Acy7ctj9ity2AdrkgSwPKNZZTygSGD5gUnmp%2BKpAiL6YzJztYSq7OT%2FYu2SrWKTCoIYHu%2FsxL7eQ%2FCcr37%2B0zUuuKIJELm9ygg2RvYCMqIqjEOPjRlvaISiB4z%2BKXDS7aIclj72Q8WAlMcNzgmJmM53K%2BWiTMX1sUH1GDnJ8CTUXVYrCUg5IsMOlFCSBzGKsNKsdqrMeKUh4AeRh%2F51v29MFirM2APT%2FLnWQ%2FZbKGHBjaqFKobVX49UPVyWI6iXxjya7QxQ17SU4zmugPreoOTN5vV5L5heCvP1qC37hEzX7ElHzlpVhMlg8%2FjUV5LxqD%2F3%2FhgpA4bdJjw1p8t4tctMzbabxh4vnRxYC3V1UdS3Eh0coEPLS6ieexuN3Z3nYj4R9AaCIZOWmhMLufqL0GOqUBcSDWmlIu6hppdkX%2FiGbrtCupTdqM1c3fg4R9ov4Hl1ufWO%2BDLX2b9juyve6D6c5xNHP3i5u9vNSXgJhWs9XsylSEsCzh7pE%2F6%2B9QQgQPRukyqHK1kl1YFSMazd1yiCj7F%2FWcrPjeQMjsGoWO5q%2BUN%2Bq%2Fu%2F%2BSsDpW0%2FxVy0SabT7L1k0pirwuR8tC2swTQ8ch5%2F9Oh53uh%2BApDTAifVZSrlFYFp6K&X-Amz-Signature=0727ac04c1aa29c2e97bbf40a91819bc4a5b0e110057db2e284144377d82a70f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5KNLLMF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXcTkFPg6YiFT31R5%2BinkmZI0du%2FLUVCxeQgpbonq8eAiEAsGXKJtq1%2ByMMpnNzZEpXw5xXLKH9KJI1rsfHhH2RBRsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV1iwzCEWbzxGXJPCrcA6pKc279bsvImB%2FE%2F630HlN%2B3C3f23rWFORXag77FccKIiLUE31u9gUv7HDhbjx9p4O8NtAD2SygdsONe7AKfb5B0GhKZxOBM4YG7n88pWeebRsSNV7LV8OYgBhVHrrqTBQ0iXJo7kCKsNp43nQt9mKXEC5TtR58g9%2F9fhiM5CsNgg%2FnH%2Fu4ogutW8emLH%2BrOSFcG7O2Y7ORBqoYegixM7bZh3UaO%2FI83EBqpiPBOAvoIBmxL1Lyl5RkzUuupDpscQ6Tr%2B%2FigPMGQg1AnXcWAjk2kW5RCA1rgLSg4ckL7u4COvXRKj4CDPjO7hrj%2F%2FevSBJo4j8jBaiAV8SBvNucx07nNEcaurzfrEtBgEq6pJ13NYxCNt16lK6mWudD9%2F34f3gkPmAoOhKxC6CEm8hsTtIptjM%2B%2BVfPWACQDoAE6splOqRNHs0XM0%2B2EvJmS6PwDiX7SmVsJVXnG4uO8hQFdnqXPl0fOFKK%2F3Aj%2BujhfaSLB60SHbnhVOfqymUui7bgVU9D%2FrVbsGFwySPnB04l%2BsZUjVlsrHYnEUBYroiEnSyjGD3yY%2BWoDR9L0kpHLz2uco5FeyexVGKsYgNwmA9AeyGJi9yqlhPAuMyiIhSGhjAYRYs%2Bujq8x8FpxxtvMMCeqL0GOqUB7QJyxIbuKPHDadHmmUOhwURUYBh8X%2B9RWkVdi6zCNBIpqlEzdu%2FH3Nzlrf43fFBUFwIFuFBh84Y1R%2BpX45ypTUef39Y0ja6yCEJmV%2FoCHoHK8wAesomne3tiaH0naMEPS9ohmTvvxCzGVzpM4vuoyEjRqn7HppepGVqus90w3kZd3Zl%2Fg4MrJ%2FMKOt6MfbUbFA%2Bv0KyPS%2BD7PNqV3rKc3TfpTSqi&X-Amz-Signature=ef8e829c1cafb16b0d4848ecca7be99a13fa4e239725a3b71352eec5bf33813e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
