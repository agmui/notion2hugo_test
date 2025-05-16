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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHJA76H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSykcHwIsEYH45bR%2BwCnci9yrsYOkBGlz591%2F6Z5N2yQIgaX3GUzgP9ByWc2fIXqoLKBiW%2BvDBbEeDLTJh7jak8rIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDUM6HTAZWYxdYdXMyrcA41ChyI8N0VXdT%2FZY7TqGHWXc5u4Ajr34stdpUqHHOgISwhLnajXsse0EFnMCLIONjkjYegYQyj3CRVF4J902dCbyyLVaXiXnaNCkN%2BYoAK7a9QrpvhcUfV7nA0cD%2FZhNkEnVFdLnarNT3AYwYpUCfuI6M4hCsBJVW1psnRjGredJjWfmhJXvciIOEj6xrZpxeD3R1tnzfWWUjfYboAJMAe%2FleXnT3NR3zZ0r72oAKhB1YbUZy%2FS%2F2JMWGV7y6EX699xwoZo6Hk9M2fcdbvJnVNqA6nGyyeL40A0FBJ6m1ZkPxlP%2FpVPhUHjpzQ2Xq5IKmofninZB8cwJJtU22HDTcKg0inv8BUaGKND5dN5G2%2FDQzFVwwXvy6nhCXkZKqppQcGGwqnigRV0R6q2K2h0FghaFzDHjpx0RrZjf3ZQ5KNSX5n2Hb3P3JDUItsBX3MQrIAJOOcetcsPnRpwkhM5bRy5PCtRryEdbnTA1iD4zb6MqITvdZlW48%2FA8kOYqen6%2BpdxXPF1c1UfcY5slr5gNnIOGmJHSWAiesRbB9q9jlMdOkqwp5C26zMus8JFyQaJCKayLThNGNH1iw%2F1NvfNYX7aljlC%2BhuDl2qNSUyd5lk1wpglE2ANAPDcZh3CMJvUmsEGOqUB1P24ouNsVIc8NFzy06Y2KnnKUjJOBwpZOz4HwlI2blh6lGl8AHSKl70L6TsG%2FNOQP9DRdZyjjqfCsCUYF%2BRIBPBCLsXkf%2BYT7cuVYvrCmvWEKgM%2B%2B5h0B7qsgLO%2Bb%2F3HYX5uxstiXpJDD3XlCeZJSOLoGFEXKN4NIt%2BrTdvXvfHxLmDhpJWzvfCVg1cr9K%2FkDrXGzmZY5sO2fT4Q6SvVtBm0YSjx&X-Amz-Signature=50b9e72447adff48f1bfc75a98321510e035ea79254326419c85b56a2c359895&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHJA76H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSykcHwIsEYH45bR%2BwCnci9yrsYOkBGlz591%2F6Z5N2yQIgaX3GUzgP9ByWc2fIXqoLKBiW%2BvDBbEeDLTJh7jak8rIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDUM6HTAZWYxdYdXMyrcA41ChyI8N0VXdT%2FZY7TqGHWXc5u4Ajr34stdpUqHHOgISwhLnajXsse0EFnMCLIONjkjYegYQyj3CRVF4J902dCbyyLVaXiXnaNCkN%2BYoAK7a9QrpvhcUfV7nA0cD%2FZhNkEnVFdLnarNT3AYwYpUCfuI6M4hCsBJVW1psnRjGredJjWfmhJXvciIOEj6xrZpxeD3R1tnzfWWUjfYboAJMAe%2FleXnT3NR3zZ0r72oAKhB1YbUZy%2FS%2F2JMWGV7y6EX699xwoZo6Hk9M2fcdbvJnVNqA6nGyyeL40A0FBJ6m1ZkPxlP%2FpVPhUHjpzQ2Xq5IKmofninZB8cwJJtU22HDTcKg0inv8BUaGKND5dN5G2%2FDQzFVwwXvy6nhCXkZKqppQcGGwqnigRV0R6q2K2h0FghaFzDHjpx0RrZjf3ZQ5KNSX5n2Hb3P3JDUItsBX3MQrIAJOOcetcsPnRpwkhM5bRy5PCtRryEdbnTA1iD4zb6MqITvdZlW48%2FA8kOYqen6%2BpdxXPF1c1UfcY5slr5gNnIOGmJHSWAiesRbB9q9jlMdOkqwp5C26zMus8JFyQaJCKayLThNGNH1iw%2F1NvfNYX7aljlC%2BhuDl2qNSUyd5lk1wpglE2ANAPDcZh3CMJvUmsEGOqUB1P24ouNsVIc8NFzy06Y2KnnKUjJOBwpZOz4HwlI2blh6lGl8AHSKl70L6TsG%2FNOQP9DRdZyjjqfCsCUYF%2BRIBPBCLsXkf%2BYT7cuVYvrCmvWEKgM%2B%2B5h0B7qsgLO%2Bb%2F3HYX5uxstiXpJDD3XlCeZJSOLoGFEXKN4NIt%2BrTdvXvfHxLmDhpJWzvfCVg1cr9K%2FkDrXGzmZY5sO2fT4Q6SvVtBm0YSjx&X-Amz-Signature=7c20db21b9b0ba008247904694c8d8ced2baa871d0dd38fd915cb1ab640fa979&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHJA76H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSykcHwIsEYH45bR%2BwCnci9yrsYOkBGlz591%2F6Z5N2yQIgaX3GUzgP9ByWc2fIXqoLKBiW%2BvDBbEeDLTJh7jak8rIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDUM6HTAZWYxdYdXMyrcA41ChyI8N0VXdT%2FZY7TqGHWXc5u4Ajr34stdpUqHHOgISwhLnajXsse0EFnMCLIONjkjYegYQyj3CRVF4J902dCbyyLVaXiXnaNCkN%2BYoAK7a9QrpvhcUfV7nA0cD%2FZhNkEnVFdLnarNT3AYwYpUCfuI6M4hCsBJVW1psnRjGredJjWfmhJXvciIOEj6xrZpxeD3R1tnzfWWUjfYboAJMAe%2FleXnT3NR3zZ0r72oAKhB1YbUZy%2FS%2F2JMWGV7y6EX699xwoZo6Hk9M2fcdbvJnVNqA6nGyyeL40A0FBJ6m1ZkPxlP%2FpVPhUHjpzQ2Xq5IKmofninZB8cwJJtU22HDTcKg0inv8BUaGKND5dN5G2%2FDQzFVwwXvy6nhCXkZKqppQcGGwqnigRV0R6q2K2h0FghaFzDHjpx0RrZjf3ZQ5KNSX5n2Hb3P3JDUItsBX3MQrIAJOOcetcsPnRpwkhM5bRy5PCtRryEdbnTA1iD4zb6MqITvdZlW48%2FA8kOYqen6%2BpdxXPF1c1UfcY5slr5gNnIOGmJHSWAiesRbB9q9jlMdOkqwp5C26zMus8JFyQaJCKayLThNGNH1iw%2F1NvfNYX7aljlC%2BhuDl2qNSUyd5lk1wpglE2ANAPDcZh3CMJvUmsEGOqUB1P24ouNsVIc8NFzy06Y2KnnKUjJOBwpZOz4HwlI2blh6lGl8AHSKl70L6TsG%2FNOQP9DRdZyjjqfCsCUYF%2BRIBPBCLsXkf%2BYT7cuVYvrCmvWEKgM%2B%2B5h0B7qsgLO%2Bb%2F3HYX5uxstiXpJDD3XlCeZJSOLoGFEXKN4NIt%2BrTdvXvfHxLmDhpJWzvfCVg1cr9K%2FkDrXGzmZY5sO2fT4Q6SvVtBm0YSjx&X-Amz-Signature=5182390d565d27f376de84e9c555736dc4f9a1185f9717c4d1302cf78259a99d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC3T44T%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoBV6m0bzgr9%2FYrdXpQqYaB4CZKo0WQ9CiaQAEI7NGGgIgDyM3hu9IpmLyjsn9RvgQOvSEQBOM6%2B81nx%2Bzu%2F6mLdQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN7D0uGgC8MRQYXY1SrcAzRBqBAA436nYhBXWykm624g5kkCDdrabUYaa0%2B4URAkll%2FPqcPhM%2B2rEpv6OSU5pJ4vf8TqUt7xj1yz9Bdd72yXHi72%2FzG%2FxO6c%2Fq%2B1tGo3XOi65ujyZA8nBAtlsZ40HeZRxx4NNPL5ygsBgw%2BMRBdvFs1HBFal4%2BJL%2F%2FwGN%2F2istgtNoREwr3yq4AynthkqBdXT79dldQqUWvvrztiU%2BOwTSst%2FsWo6Zi4LX%2FOEHdmfuF0aY2XNTh47ns6VsvMnQenZrFsbSYMZaUtEtdzBP2G7bTQPz1O%2B8ApiSotlcowyXi4ZRdT41W1jicXBZ19eaTAm%2FlhCIWcRJ3AkPS0sYL4f8JmJIeGzotGKWe08ZLBwKmPRVZ%2B6nCgUCkpIGB9ZfN8rvbE3X2NiDobFy3POgzUlzAUCqq3MMk605PqtppDG%2FsktcgKThHU2rBvEuhg%2BZns2GSgYvwibWIVwj1T%2BWPF3GDikM1MC9E7B3o8P73d7MJnQzeLhmLqVigWfUkxcgelngmQ6%2BlyOioYCfBlmGEtnHJnbzupU7EpJ%2BghOutn%2FzhyLWNfSOxWW8UNbivlr69rOAdj7C9QfCrKmnoqTnuyD28%2BnQVOJMRW1AvAEJhTTnO3H2MlETuS0DPKMKnTmsEGOqUBQwuavyEHZ7VI%2Ftie76pBnkyHqi02q2DF3V00Pox8BAmSnza%2BewNClBTtRX7IDqO0u3Cp1IJfZ7qnq58kJOMAXasqNbxH5kBJppVrjwA43hXeDfd%2FV9DvcJ5zeeGFYhL5wMYi0NsKeEPle3%2Fz7FQyNCldWhj1GBcePqaqYy4d3fWBV6ZcIFUvKfTbeRztdOdI0X3NArQ8tS08vKD5JI4lzfu1KBYt&X-Amz-Signature=b3b289cf44343a741b0c8d1bef277d351d436afe2c1003396b84126e2acfc901&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56GDQ5U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADYuIaSc7T16kMsTmgNMbnQbjiv97oTrELOSoqMqfUnAiEA0IB5A4mspsGOLr2KfYMCyt6Dk%2FmW%2BKLARp%2BhaObE5Twq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCAyl%2Bvd11RpwTjvsyrcA0WNVDEy7tEMpcSFTY238b9cxDvNS6KiVsf0SNjV4DKMemgZAsQnO1WEw00dY9R1ALYWX0NtVg307%2F0Z%2BWQd5Ys7lP%2Fh7gJp2Hvi9hOtmrl6MxtTft5mJmiR5kfbvEJWmk7SgqqrCiBIZb%2BVRNAMOktUBwWd%2BGpeMCtkYZZhzIHVEyGw%2BoURh21tqJ10tozgo2zqMpLn9iKE04nusfe8ngzv9fHv9YZ%2BqDch68MEbcAnAXUWP4dhqDSR58U%2BWYnBBM5RbjuuMJJPHP1gJ2MA1nHmRlZMfZRxzfEJZEeM%2BjNt%2FeeoMM7C0iTcQcSOTAsZ08b%2FzL9d7oXm3BXfer45vsxvDcsQAb0p%2FX2V20%2BPhL5nNRy4lKN31Y1JpfpIkzPE%2BpyWfUr391ZQVncdqWMkGorQysZ20jm53nQPGHW3cJe%2FJFqnWAzyGXSLX2X%2Fqq02TPsBt7WMPJtfb%2FTLkJFg5WD2OmLh0RiaXVRWPVZxBhBqotWfL6DjBDzAs4vuq%2FLCdHFq111iLV5KOs%2FirZaGXjehfj0pl%2FecBLH6lb%2BRu%2FiQBDkzo89978Ydu0fE%2FSG10xTNjkHDnHa3BWGhUxt1LOJ5pE4KVqMPylpHqXqdb7di%2FejPAGvGLfEyZwXAMJvTmsEGOqUB%2FUdf%2Ffc6yX5fOTWIbOu5kWu1Pedy29a8rxCCz2xAA%2F3WOQu7eC%2FHMT%2FSFecoQOez%2BXIv67slbKDZrszivagmV6cqC%2Bed75M4NaHuGTqtk5Cx0b%2BCO5VUzYMv6B36VRg5mkJ7IcKDJCtIrZJFaxKYgoSGnn1SNpeeSY41qJ1mV1KHUaqYaXiYEOwAKc2YCeLrWrw4b4AkX%2FJNpnVwUUVUpMW4m2CD&X-Amz-Signature=86b535d01d784a9c6f0718dd1d5194059122c247d7b7a8c2b740e653fe8bb569&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHJA76H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSykcHwIsEYH45bR%2BwCnci9yrsYOkBGlz591%2F6Z5N2yQIgaX3GUzgP9ByWc2fIXqoLKBiW%2BvDBbEeDLTJh7jak8rIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDUM6HTAZWYxdYdXMyrcA41ChyI8N0VXdT%2FZY7TqGHWXc5u4Ajr34stdpUqHHOgISwhLnajXsse0EFnMCLIONjkjYegYQyj3CRVF4J902dCbyyLVaXiXnaNCkN%2BYoAK7a9QrpvhcUfV7nA0cD%2FZhNkEnVFdLnarNT3AYwYpUCfuI6M4hCsBJVW1psnRjGredJjWfmhJXvciIOEj6xrZpxeD3R1tnzfWWUjfYboAJMAe%2FleXnT3NR3zZ0r72oAKhB1YbUZy%2FS%2F2JMWGV7y6EX699xwoZo6Hk9M2fcdbvJnVNqA6nGyyeL40A0FBJ6m1ZkPxlP%2FpVPhUHjpzQ2Xq5IKmofninZB8cwJJtU22HDTcKg0inv8BUaGKND5dN5G2%2FDQzFVwwXvy6nhCXkZKqppQcGGwqnigRV0R6q2K2h0FghaFzDHjpx0RrZjf3ZQ5KNSX5n2Hb3P3JDUItsBX3MQrIAJOOcetcsPnRpwkhM5bRy5PCtRryEdbnTA1iD4zb6MqITvdZlW48%2FA8kOYqen6%2BpdxXPF1c1UfcY5slr5gNnIOGmJHSWAiesRbB9q9jlMdOkqwp5C26zMus8JFyQaJCKayLThNGNH1iw%2F1NvfNYX7aljlC%2BhuDl2qNSUyd5lk1wpglE2ANAPDcZh3CMJvUmsEGOqUB1P24ouNsVIc8NFzy06Y2KnnKUjJOBwpZOz4HwlI2blh6lGl8AHSKl70L6TsG%2FNOQP9DRdZyjjqfCsCUYF%2BRIBPBCLsXkf%2BYT7cuVYvrCmvWEKgM%2B%2B5h0B7qsgLO%2Bb%2F3HYX5uxstiXpJDD3XlCeZJSOLoGFEXKN4NIt%2BrTdvXvfHxLmDhpJWzvfCVg1cr9K%2FkDrXGzmZY5sO2fT4Q6SvVtBm0YSjx&X-Amz-Signature=344c13b7aea846197eb216c54f627e79872019ff8bbbc065f995da7dbc639a83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
