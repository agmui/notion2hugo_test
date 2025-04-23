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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOHTJT4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK6GVDp9O%2FkiyrjuR24%2FMQBrwJ6i1tW6COvwrlOvqW0AIgQeTC38iMf%2F3mh33GILsPAnhJJifRMKDZ3Lmk%2BQwfbiQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjk9nWDd%2F%2FsLSmJLSrcA0RXnX0ajL6L%2F7n8JnBzeGf4fioHgPMGEFuSAmaVKXU%2FK5pAhWoONKpjy%2Bo6%2FjDqANkepTOxuzBWvrlKDf0f8uu14cxLHXd3AvjmTixePLrEAk0BLsY%2FNY%2FWGqp2cGUa1nd1UkdHGJvrZN%2FNro4i35IpRikjHMQyJP%2FXykOS%2FK%2B2SnR8u%2FI7bT5Ea%2F%2Bbx98YwIqZ4qBFEGBYPNzTTjkqByNbWvcQsUre9fVzrU%2FZn5I%2FQfQaTR2bHaOmcXeIV3RrTyokzw%2B3ZQbyNLUOEz0Qqa%2FfO3VczErPiuTshrSDPnjWYjutrGc%2BIuh4eobCVbhYOs0vbbbsmFVm6VyJxlSS3Gim%2BoQLWztE3XtRSAbDLww%2Fu7Q4zLDtT7Sfb9%2F18Nh6rvNSGgoIfBy%2FXjry6RXZnSuHksCRySRi2ckCRfFQo051Ywr74IpxbYUqdqC2mDFLVlEFlxv3IMbYFlBMfKZqaKzz84K3O2Jbb22GAvUy%2FXNOReQyT4lw8bpk45cnKunIH311j5MhEScBSGbbDiwU79FFiYrBFtYya%2F0JUR5I64OX6I1biDEbU2w2ed%2Fllj9RKZ9xS2FvfVbv1iFSxyR2%2BsDZ0ELI59bMYPDZMtVY9p72qSQsGYmbhUMthezSMMfGpcAGOqUBfnTMsRztVczPS0sLZXSgv0j%2FrU7EF7b9Vkd3yOHYX3hoVO7zvHEcykWgXWqMD0SGO7ApbVQh%2Fxn69Ij1A%2FCYcXwF200Qm%2BHcnoxuWhdzGxAZaMHqrqotIs0OE9ntzoVLXmC4ao7%2Fdk8LEQuYN1fEipZPmRkf49UPn6s4h3mgi%2BpI4UW9TBBQYxJtj5AApkKtWNdBMhq%2BMqdDjDHFK0AsuHZFh%2FLz&X-Amz-Signature=1e443ddb92086b0493a7d90200df8602bfd94993e83141c7f2a3b57afe348ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOHTJT4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK6GVDp9O%2FkiyrjuR24%2FMQBrwJ6i1tW6COvwrlOvqW0AIgQeTC38iMf%2F3mh33GILsPAnhJJifRMKDZ3Lmk%2BQwfbiQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjk9nWDd%2F%2FsLSmJLSrcA0RXnX0ajL6L%2F7n8JnBzeGf4fioHgPMGEFuSAmaVKXU%2FK5pAhWoONKpjy%2Bo6%2FjDqANkepTOxuzBWvrlKDf0f8uu14cxLHXd3AvjmTixePLrEAk0BLsY%2FNY%2FWGqp2cGUa1nd1UkdHGJvrZN%2FNro4i35IpRikjHMQyJP%2FXykOS%2FK%2B2SnR8u%2FI7bT5Ea%2F%2Bbx98YwIqZ4qBFEGBYPNzTTjkqByNbWvcQsUre9fVzrU%2FZn5I%2FQfQaTR2bHaOmcXeIV3RrTyokzw%2B3ZQbyNLUOEz0Qqa%2FfO3VczErPiuTshrSDPnjWYjutrGc%2BIuh4eobCVbhYOs0vbbbsmFVm6VyJxlSS3Gim%2BoQLWztE3XtRSAbDLww%2Fu7Q4zLDtT7Sfb9%2F18Nh6rvNSGgoIfBy%2FXjry6RXZnSuHksCRySRi2ckCRfFQo051Ywr74IpxbYUqdqC2mDFLVlEFlxv3IMbYFlBMfKZqaKzz84K3O2Jbb22GAvUy%2FXNOReQyT4lw8bpk45cnKunIH311j5MhEScBSGbbDiwU79FFiYrBFtYya%2F0JUR5I64OX6I1biDEbU2w2ed%2Fllj9RKZ9xS2FvfVbv1iFSxyR2%2BsDZ0ELI59bMYPDZMtVY9p72qSQsGYmbhUMthezSMMfGpcAGOqUBfnTMsRztVczPS0sLZXSgv0j%2FrU7EF7b9Vkd3yOHYX3hoVO7zvHEcykWgXWqMD0SGO7ApbVQh%2Fxn69Ij1A%2FCYcXwF200Qm%2BHcnoxuWhdzGxAZaMHqrqotIs0OE9ntzoVLXmC4ao7%2Fdk8LEQuYN1fEipZPmRkf49UPn6s4h3mgi%2BpI4UW9TBBQYxJtj5AApkKtWNdBMhq%2BMqdDjDHFK0AsuHZFh%2FLz&X-Amz-Signature=0af3c37110a2e1bcaea1b214ce2966e63129064ec27f3469537ded08bbeb2830&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGNJGHT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDZrT4a4m32PeOOVWbElDVuT5MbdyfGUpkAyVFriaapTAiA2ZTadZ%2FsVfQCIIJIGOagE3LjPeYD7GlnfSrP9Qy4K5iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK%2F%2BF9UWPE1K2qTfFKtwDvbOybBlF9vQOSNFOr7%2BoiYBrBmeKqliZ4g%2Bx%2FVUcOTmWaa9ZirmQj0ZAY6xjS0ZzcFSylcyyY0omHKgmIACltzCJxpO%2Fx0wfCHrbbJjrxo5qIw%2F3vPBRXW5DhuPt1QPK21vYNU0FYUpmT55mNpbMwVUYVtl9mLXwE6DW937HlzPmi2Bpke5xfyL3YffcQgsq9svH6XVUVIBzBGe5F%2BR6LBRq5FVGwSkzLuP3AEFqnPl%2FIvKZJg0WCawFGnUQ5rblephqj%2FtAmkI%2BEyf7lmU4zmOzBwZVQ7oELpDv0CniicRWHfKMX6rC6bqu8gnx%2BitOlUjMzhIiKqkVXlXIFkF%2FuitLsAAcwdhz5C1Osi0D%2B1MLHQdXZbPHMjVU2L2RH%2FFYp%2BdpYxKQfEN%2B0ydcmBxMX0oFfl3EhyEhxkkN79p2b09%2FAdJytOik9hD1N8yvR1zTKuqBEkbFIdIukvpZt2baqSgxXqL9OcVW0kFJj0mgyJ9J6TVFZtBnla91ctMvSdGBPaJlCbBv1wWqDrODp9ynSo3ZsM8fGvHJjVtxdXXE65KSQ32fRjtTYj3YN8qags9zn3owJvYtBCDcY98bF7UAc4VtEqeqQz6xJfpx0Ycfq0voVx%2Bo08J8WHTMj%2Fkw38alwAY6pgE%2Bb5N05L7krU9vHnLDJnFGaaOHjCTrdLyzmTHVIxbxx3BIFYBco6cFs%2FSqXbtNm6Kief0YSiSWoIOgsAc154M7eYT5PoeYrijwkXYKvVo%2FM7pIXdc6KW6O5bpCjGrAtXUByMRHKB0j1mXI3fTuMmy%2Fmgg%2Fe4nTIvNDK%2FKhstS%2FjHwgUT6ZK9Clh05dmG7j8IO8%2FaTWg4TjguTRWy50JQPE2tTbq%2FFC&X-Amz-Signature=35767246201b1c27e1eaf8bbebb8ff57e67893633e919cf8b17decb88b8f67d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQ5Y6Q5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfiAEL1V%2B%2F%2FudnKOAjEz%2FwtdV168N5QcShFyLPMXIWCQIgHKyXeHnrgQd%2FunbFVMUPOKvur4oWP9Nl7onE6VPMEXwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzE0rLAjAbk%2BrJNQyrcA7E9jDw1jh5jeNpQREbBV%2F77rz34LFzKeAafdnrFgxrxb%2BEETXgh4Y1c59Kq6bWy%2FGbingWDmpDN5dRcS8YynZ6SHXVUnBACRzN6qFGXBK9WTZbstpVysYAQrtp1%2BfTZs1cW2QJyNY%2FOfRaFeRduV%2BBFFlNoLQFDV2r4dMDjex6R1h%2FfjFnIe2VvQ6IE91zDFdIdMy2KIodCXDcXUZ7AKkdqDc5h3ADGFpBhwsu3yQQvQaRqWknmPLRWiBLBeDYlODB7S6lJ3W4NnJnLRXmW3qXjX2HB48Xa%2BFM47A8lc%2Fk6YKtaHvxFD5HL9Cl2rXhdO1zZihswu5oPQklHvgKqbVxsQCGDs8MmFvnqInSRxWvy5g8eDas2ozOURX9hAnYIBLkcfsC8kvjnsTwIAi5GX%2BbpqqhA1ueBZWbDLMl0HrmpVPB6O6%2B31VumQVsUif%2F73G1U%2B%2Fck8iu5mUYip7USoBBpArRQUKnYs4nbfsy3087XTweMJ%2BQ9eVZRmP2cUxSHSlKA0hWhIht83WmKcMghMWLqxXYSypIBKe%2B3BjWeVAh%2BNFjVfMoP83OpJc5mqRD1l92jfwP0L2tgUwivejoBlEN0axo3e0iJcDTZlQ9Mvg5MJCiDt2hqJzetRIx9ML3GpcAGOqUBhlL2jSOLNUA5prv4qNt0%2FsGPr1E9dublDmtUboPHcae42INIkPbMsjL8CiPGQ78Lg9lhrDZrNUlZSxoCK2bPhqsIvIhL22qKxIGIzqkoUBdFqpCIqBNlDrI6QB9We%2B6cWEAt%2B2Dgweg1AyXbYDzZh38iLXZbNlnvamT%2BlK%2BnAHm2v8O%2FFCv1zx2FuhDvqw%2FRfckHBfvt9VwApgAWoph7zSw0vRPO&X-Amz-Signature=d1318b7db1c6dc3aed27e8f1cfe6eac0ed4aacb924d1668ef6f2a91639fe8b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOHTJT4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK6GVDp9O%2FkiyrjuR24%2FMQBrwJ6i1tW6COvwrlOvqW0AIgQeTC38iMf%2F3mh33GILsPAnhJJifRMKDZ3Lmk%2BQwfbiQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjk9nWDd%2F%2FsLSmJLSrcA0RXnX0ajL6L%2F7n8JnBzeGf4fioHgPMGEFuSAmaVKXU%2FK5pAhWoONKpjy%2Bo6%2FjDqANkepTOxuzBWvrlKDf0f8uu14cxLHXd3AvjmTixePLrEAk0BLsY%2FNY%2FWGqp2cGUa1nd1UkdHGJvrZN%2FNro4i35IpRikjHMQyJP%2FXykOS%2FK%2B2SnR8u%2FI7bT5Ea%2F%2Bbx98YwIqZ4qBFEGBYPNzTTjkqByNbWvcQsUre9fVzrU%2FZn5I%2FQfQaTR2bHaOmcXeIV3RrTyokzw%2B3ZQbyNLUOEz0Qqa%2FfO3VczErPiuTshrSDPnjWYjutrGc%2BIuh4eobCVbhYOs0vbbbsmFVm6VyJxlSS3Gim%2BoQLWztE3XtRSAbDLww%2Fu7Q4zLDtT7Sfb9%2F18Nh6rvNSGgoIfBy%2FXjry6RXZnSuHksCRySRi2ckCRfFQo051Ywr74IpxbYUqdqC2mDFLVlEFlxv3IMbYFlBMfKZqaKzz84K3O2Jbb22GAvUy%2FXNOReQyT4lw8bpk45cnKunIH311j5MhEScBSGbbDiwU79FFiYrBFtYya%2F0JUR5I64OX6I1biDEbU2w2ed%2Fllj9RKZ9xS2FvfVbv1iFSxyR2%2BsDZ0ELI59bMYPDZMtVY9p72qSQsGYmbhUMthezSMMfGpcAGOqUBfnTMsRztVczPS0sLZXSgv0j%2FrU7EF7b9Vkd3yOHYX3hoVO7zvHEcykWgXWqMD0SGO7ApbVQh%2Fxn69Ij1A%2FCYcXwF200Qm%2BHcnoxuWhdzGxAZaMHqrqotIs0OE9ntzoVLXmC4ao7%2Fdk8LEQuYN1fEipZPmRkf49UPn6s4h3mgi%2BpI4UW9TBBQYxJtj5AApkKtWNdBMhq%2BMqdDjDHFK0AsuHZFh%2FLz&X-Amz-Signature=41157d72fb4d3eb88b051698cda6b6e7234a85164d3949c73b8686b20f3135ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
