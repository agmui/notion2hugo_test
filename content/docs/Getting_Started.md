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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OUMF5SC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2Fy%2BNdCttKklh8s%2BVOfU7uUZThRLpO80%2BjedSv0rCNQIgN3UmLHV3MQY%2FypMEm%2BiTwIROjzAc6U0DyHAWxlO0kbsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF%2BsEekTSS%2B2ZJI6vircAxsR6IvDJJDyK0LiOS4uejTw84363a349CbSG8G3J9MQXKNLX%2BYtmCoW2zty0PRPCJdJDy4OZsLuYxvXKncSQ8lhzenGxZ%2BhO19las2WjAQaY8%2FQZVKLS3yeggv0kH4lFFFC19G9%2FczuuNy0F%2FxT9MG1AMxsingGUL5EN1szpO2ANXoTVVi%2Bt9J1pITY9EHz07y7vnFo3J7GtCnspyiEiULUd7tztvpLpsPr7G7iBvdjBgq5EATfkbQhUdqMpWSzmokRp3UzVcfzRkjmPfT01IS8oWSgrk06Lz9weJIWPw4qaNv1AdfHYObml0dShE%2Fg0GR0lA52KnsxOVix1XgSALuwNI%2BXJv8%2BkMVzQRZ4Gmck1MiLWg0u3TVgrAfEUJVItfl8SZlmdiTOJ6fsqDCA5vgx%2BRH%2F%2FBWxeLV7qcWy5gvwUyteH9JaklnsZXc42vXanQHAc3Qo5MsUB%2F8Udbvy1q8thWvjO06Ppb655y2NdhXEjppbvUTLpA3DJBZorfoAvlcF8KCOBFl5e8xQx8A%2FCZrgzlZoE8UAPQcUpYxic8SoO80pHx8G14kyedDYc2%2B57A1GGtEzERWrers98csqbuOe7mUj7f1NRAJhArGAWaUvUy1immqN87i0K68FMOej0L8GOqUBhvw9WjOulpxpkO8KKyjqFbvk1xNxtfrUHmoBTN750%2Bhpf6jXFWFsCCckbDsUYCBKs3e8BDqefOe%2BOh3lxfTAvjdmT1PG4pl9xHlNS7NLQSiX8U%2FphnPuO%2BQCXfQuDVobnMDK8zWQFRmzKWHxnL2%2FiCcf3SIkh040oixkNXW6S0jsHi63ZUVT%2BXO4dU%2Fy2R6dDzrdcQDimzis6Lj%2BLNjDyvmsE9pC&X-Amz-Signature=7ff23049c402c1deca82b86f9aea3de11668806da2456430710acc15e0968335&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OUMF5SC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2Fy%2BNdCttKklh8s%2BVOfU7uUZThRLpO80%2BjedSv0rCNQIgN3UmLHV3MQY%2FypMEm%2BiTwIROjzAc6U0DyHAWxlO0kbsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF%2BsEekTSS%2B2ZJI6vircAxsR6IvDJJDyK0LiOS4uejTw84363a349CbSG8G3J9MQXKNLX%2BYtmCoW2zty0PRPCJdJDy4OZsLuYxvXKncSQ8lhzenGxZ%2BhO19las2WjAQaY8%2FQZVKLS3yeggv0kH4lFFFC19G9%2FczuuNy0F%2FxT9MG1AMxsingGUL5EN1szpO2ANXoTVVi%2Bt9J1pITY9EHz07y7vnFo3J7GtCnspyiEiULUd7tztvpLpsPr7G7iBvdjBgq5EATfkbQhUdqMpWSzmokRp3UzVcfzRkjmPfT01IS8oWSgrk06Lz9weJIWPw4qaNv1AdfHYObml0dShE%2Fg0GR0lA52KnsxOVix1XgSALuwNI%2BXJv8%2BkMVzQRZ4Gmck1MiLWg0u3TVgrAfEUJVItfl8SZlmdiTOJ6fsqDCA5vgx%2BRH%2F%2FBWxeLV7qcWy5gvwUyteH9JaklnsZXc42vXanQHAc3Qo5MsUB%2F8Udbvy1q8thWvjO06Ppb655y2NdhXEjppbvUTLpA3DJBZorfoAvlcF8KCOBFl5e8xQx8A%2FCZrgzlZoE8UAPQcUpYxic8SoO80pHx8G14kyedDYc2%2B57A1GGtEzERWrers98csqbuOe7mUj7f1NRAJhArGAWaUvUy1immqN87i0K68FMOej0L8GOqUBhvw9WjOulpxpkO8KKyjqFbvk1xNxtfrUHmoBTN750%2Bhpf6jXFWFsCCckbDsUYCBKs3e8BDqefOe%2BOh3lxfTAvjdmT1PG4pl9xHlNS7NLQSiX8U%2FphnPuO%2BQCXfQuDVobnMDK8zWQFRmzKWHxnL2%2FiCcf3SIkh040oixkNXW6S0jsHi63ZUVT%2BXO4dU%2Fy2R6dDzrdcQDimzis6Lj%2BLNjDyvmsE9pC&X-Amz-Signature=82f2efcc6046696743c8d02862ae8690dae924025c7d8d68f1d498424f3e52ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSAB4EC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcKG3XMhUE6PJJTyzYnmMe7jHjRCIr8TrnXsZ1YSc%2BQAiBNyEZaVELFMo4Mvtw57vX6JvQwOu%2F0i%2Bt9WLbuO6eyVSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2Fvm8r0rnq%2BqSrsDiKtwDYyzv%2FOLWuE5ONisNbn8F6xIWFqcdRap8NZ4MLpJxL6JMEUgo0wQEeIoxh1DzHh3zV%2FAXVRR%2FIGe2F%2BC4kepY0AHZQNJr9jmlvWhQCwRH6M9H4Al7R7o%2FUIoKRHb9mgYb4vnVx1BB9UpMGlfdPQJdnAPOAU7jcl6RlbO8QtXfE8m4KxD1Fw9wc9cg29Ofwi8uLdwwBLSlf%2BvRdY9DLk%2F%2FtY%2FXeQF7xggEUc7iznXMU8PfsGJraDdkp1zMxhKKL3o3ivLhLjcNBLysPYM0OH220OFqY%2BMnWDLEQZebjgOC6iymcL%2FU23n7Z0Mf%2FoThuT0eAhml7405FJwIE6spCnSaMGdQmqlxvuSXmH4YdEuF9cbbUbZc35ORXwqx%2BDq8y8%2F9IUr1eef36KWeBPN7ssHY23aSJ4CXADgeucKpFEC5%2FAlDQsecZP5vFQCHvxQjO9%2FHUm3hiSMGHrbgUPiLTyAkUmEjnqmNsyn24JQLYzWam2U7hdepY7kubYdFG7Bdljjrj9yPsyZoKBvMJYMMWV9mvGUg%2Fu3yS4NSBoXWpJxqyR93MsJEvrrKuzzftWkyVRNZu%2ByAYt7ReiyXeoJv2pkhuinlaEn7o1OQA4KiwxSkl6o4hF9oWkE7oFozBjYw2aPQvwY6pgECQLreRcL0hhp0hZL%2FtpuNLAYLGmRpZ1Tr26wcAg%2Ff85UFKZThh%2FfmaQBJ5TiyAd3alSpcfuEJG7rksPn3hTGIlQwRerhJDju51Fs1Xam%2FJWQB0VmDRk%2FOK%2Bh89EJ%2Fs9fsDxV1JFRXz6zm3imgIqYXQ5x2lI1HfW7dhJx1lgHQInqLqxEfj9phCZHuqXl4wizKuukW9Apazi9zSFOoqOE%2FKX1SMnID&X-Amz-Signature=f0d1ef1e31d8e23ecadea84216ff9a84b47c10dc642e00da3d2557d23b8e0155&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIQ6QXE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxut%2FullOOD%2BwpjNNRuMgrxxpjxierHg8R3AzZO6a9lAiEA9S0KfSsBa2m95fYitLBwoAHm8hxMkH%2B1nGVyEHR9ipIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOZsAlMEVxgRe2dfASrcA%2F43yMnYg1%2FVANEJawcDo5N1rOFXeMPlZfvehVDTBUBrIqBSXjI1eboKVxY04UXuzJ1CvBU7Wgl56BJsuroYxzGLbjb9494iNzzjiK8hM2PPOM7Ka%2FZfpNL89LLg%2FlA%2BrD2jbNHkkrxueyTjwfhzaZNBViPzM0UpYVKF70DJew22GzgO9YTUP22VO1fQ%2Fnk89u9SspmvE225LyYUcPHdnfxXSh7dXX7VWmSxzsGDzTgvLqS22m49j0gARQE%2BjIlEK9PKeYonGVBfY0kMhG%2F%2BtzFsguupynzI5zzTTindxXezB7LDhQ9wkDofT6T8Q8HQnlTPJJUp9lcnr%2BpOxYsD0CT01P9BqerEjWig%2BIHP1Chu2DIOzNFKvO17s1vIOdUgJpepTbvaLo0U6WuonNwcFGfyKtv7ngepN0N5FhnXCRPGcFpkVM5EEpanWbkKqQY4LcekWMZNrhxOif0MjsfXfT%2FcZGkabG2LwrfeC98TIi6U8VTa1XR6Jup53O06xJ2J5V8XjnP1BQShoFaaGRaVoNpO6nf14a62%2BSf46w5SKHGD2vpICJBDo9OqF9kBGR%2F0Pdscna9MeD8DCxiBDPlubuFmeQpWElF8qsK7PP2VaVA62gRLSPZ7R0X%2BnYW6MOej0L8GOqUBnOYUgXa%2B5thepY455ra3jEX7ykdATJ7nlKazoaTghUhyZfZ4YSjuD0MKCZTcUfuy6QXyuy4i7UpSyrjDsLRkG7%2FX8wtAi6wZKIRwQOj9YoFrM5XmQxkWYXtac57kUXrLeX8gwn1YfRj5Z%2BGPHcVztgMH6pcMhdLGhNMBMvGt91PWXBAtk2563s719l98PzSoOdLJZXarAtFg7NOwVSB04mv%2Bou%2Fp&X-Amz-Signature=a371f7429a87fa8affef514d275aef02357d391b3fffc52ced7b5eb9109c641c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OUMF5SC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2Fy%2BNdCttKklh8s%2BVOfU7uUZThRLpO80%2BjedSv0rCNQIgN3UmLHV3MQY%2FypMEm%2BiTwIROjzAc6U0DyHAWxlO0kbsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF%2BsEekTSS%2B2ZJI6vircAxsR6IvDJJDyK0LiOS4uejTw84363a349CbSG8G3J9MQXKNLX%2BYtmCoW2zty0PRPCJdJDy4OZsLuYxvXKncSQ8lhzenGxZ%2BhO19las2WjAQaY8%2FQZVKLS3yeggv0kH4lFFFC19G9%2FczuuNy0F%2FxT9MG1AMxsingGUL5EN1szpO2ANXoTVVi%2Bt9J1pITY9EHz07y7vnFo3J7GtCnspyiEiULUd7tztvpLpsPr7G7iBvdjBgq5EATfkbQhUdqMpWSzmokRp3UzVcfzRkjmPfT01IS8oWSgrk06Lz9weJIWPw4qaNv1AdfHYObml0dShE%2Fg0GR0lA52KnsxOVix1XgSALuwNI%2BXJv8%2BkMVzQRZ4Gmck1MiLWg0u3TVgrAfEUJVItfl8SZlmdiTOJ6fsqDCA5vgx%2BRH%2F%2FBWxeLV7qcWy5gvwUyteH9JaklnsZXc42vXanQHAc3Qo5MsUB%2F8Udbvy1q8thWvjO06Ppb655y2NdhXEjppbvUTLpA3DJBZorfoAvlcF8KCOBFl5e8xQx8A%2FCZrgzlZoE8UAPQcUpYxic8SoO80pHx8G14kyedDYc2%2B57A1GGtEzERWrers98csqbuOe7mUj7f1NRAJhArGAWaUvUy1immqN87i0K68FMOej0L8GOqUBhvw9WjOulpxpkO8KKyjqFbvk1xNxtfrUHmoBTN750%2Bhpf6jXFWFsCCckbDsUYCBKs3e8BDqefOe%2BOh3lxfTAvjdmT1PG4pl9xHlNS7NLQSiX8U%2FphnPuO%2BQCXfQuDVobnMDK8zWQFRmzKWHxnL2%2FiCcf3SIkh040oixkNXW6S0jsHi63ZUVT%2BXO4dU%2Fy2R6dDzrdcQDimzis6Lj%2BLNjDyvmsE9pC&X-Amz-Signature=cd8435832df382fbb8bdbc0469544c7b94868983bf43a83ca9b9d8671223120d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
