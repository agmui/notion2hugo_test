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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEOYITH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtM0UvX%2FSoq%2BrqzfGSIyCQJVzu3TdsEoVLgQb2KqvBAIhAKpjgwVrJ0A%2BYDSsynyX5FOf3cYciCDLSoqcUmPVgZUWKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM98stQixddNzRPWMq3APRoksMVpuBpXFgKw11DtrfwgepvIhAIBt7eIxhYSFgjSnh31PSHlD4GGyzumLm5lhPxx%2FJd%2B5%2BsO3MhouTEYG4YcmuvlGQkYOLNWtx4sIclTucGXWlbjBC7m%2FrWP1iDEkrG5C%2FWb7otXnBktFGmoMOJcvQROe9piU8lL6PK%2B4UgvwyjtDiF1CP0OqsDOZYfmRJnW0uMZFAM4AEZys5Fzr2XeGCX38d5xsQ2OLp%2Fw1cRsToiBJJ%2BKG6yqxDlrnH37YrjcRWCPfwynRefwXHDfXulHWtbc5UztQbz5SrSFR3OBWZk5EZe5fRnFGCdXeKt%2FhiWG4V%2FC6RNs%2BnFWGz6cAB%2FQxyFXhKX4MseJi%2BiFrxTi1IzaR60KyYfG5lvQ7GB64gogXV%2BM4ZDddj77Eb0lEzXLtOF956TQ%2BeaiBmyseAMGhTJ955mM3yol3MPR%2ByfBv5ONjmFyW7Ve7mHmmD9bqUGdsWj9OJuCzXl6JaqYD0tOpR19KVMRciu%2B4Oryuhnvfz%2BPBT69xOMdc0ki0CpiT1k41wNqs8Kvos0aNJ6Upg4epaK4x55c39cnbCzUOnVIut4zFBpLHjGcN1e%2B9xYvml880tfZ5zczCxP1MLcQpoCtLCOe7cwjiQ5JZbRzCRhM%2FCBjqkAWYxCoJT3cWyPFqb3SpgMr5hxzI9SZkJ%2FdVyF1mYJ61lY8ropf1lU%2BoW8VWtEVLcsK4ItPsMO49YL3mNIU7JKMSDYveCx9y3g6d%2BLKK2g9tKqscCvQ7QRUBTp9W3U2E%2FdIkJ2GpKq6MCAX3RgkvOk%2F%2BuB5uBNIehL6R3s5lgFlRBwLm3UfA0%2BB6h9%2B%2BakCLkQy4kMeOEqtC9uYysXxGh9cI4kEMo&X-Amz-Signature=ca34a6ce9f91e8fc5f61d5e604af0407e0f12149ecbb5700a55d884600f246de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEOYITH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtM0UvX%2FSoq%2BrqzfGSIyCQJVzu3TdsEoVLgQb2KqvBAIhAKpjgwVrJ0A%2BYDSsynyX5FOf3cYciCDLSoqcUmPVgZUWKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM98stQixddNzRPWMq3APRoksMVpuBpXFgKw11DtrfwgepvIhAIBt7eIxhYSFgjSnh31PSHlD4GGyzumLm5lhPxx%2FJd%2B5%2BsO3MhouTEYG4YcmuvlGQkYOLNWtx4sIclTucGXWlbjBC7m%2FrWP1iDEkrG5C%2FWb7otXnBktFGmoMOJcvQROe9piU8lL6PK%2B4UgvwyjtDiF1CP0OqsDOZYfmRJnW0uMZFAM4AEZys5Fzr2XeGCX38d5xsQ2OLp%2Fw1cRsToiBJJ%2BKG6yqxDlrnH37YrjcRWCPfwynRefwXHDfXulHWtbc5UztQbz5SrSFR3OBWZk5EZe5fRnFGCdXeKt%2FhiWG4V%2FC6RNs%2BnFWGz6cAB%2FQxyFXhKX4MseJi%2BiFrxTi1IzaR60KyYfG5lvQ7GB64gogXV%2BM4ZDddj77Eb0lEzXLtOF956TQ%2BeaiBmyseAMGhTJ955mM3yol3MPR%2ByfBv5ONjmFyW7Ve7mHmmD9bqUGdsWj9OJuCzXl6JaqYD0tOpR19KVMRciu%2B4Oryuhnvfz%2BPBT69xOMdc0ki0CpiT1k41wNqs8Kvos0aNJ6Upg4epaK4x55c39cnbCzUOnVIut4zFBpLHjGcN1e%2B9xYvml880tfZ5zczCxP1MLcQpoCtLCOe7cwjiQ5JZbRzCRhM%2FCBjqkAWYxCoJT3cWyPFqb3SpgMr5hxzI9SZkJ%2FdVyF1mYJ61lY8ropf1lU%2BoW8VWtEVLcsK4ItPsMO49YL3mNIU7JKMSDYveCx9y3g6d%2BLKK2g9tKqscCvQ7QRUBTp9W3U2E%2FdIkJ2GpKq6MCAX3RgkvOk%2F%2BuB5uBNIehL6R3s5lgFlRBwLm3UfA0%2BB6h9%2B%2BakCLkQy4kMeOEqtC9uYysXxGh9cI4kEMo&X-Amz-Signature=994e519446d567786b8f5b77d30e6c64b02dbe51ed541df8ef71ecee35d9e8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEOYITH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtM0UvX%2FSoq%2BrqzfGSIyCQJVzu3TdsEoVLgQb2KqvBAIhAKpjgwVrJ0A%2BYDSsynyX5FOf3cYciCDLSoqcUmPVgZUWKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM98stQixddNzRPWMq3APRoksMVpuBpXFgKw11DtrfwgepvIhAIBt7eIxhYSFgjSnh31PSHlD4GGyzumLm5lhPxx%2FJd%2B5%2BsO3MhouTEYG4YcmuvlGQkYOLNWtx4sIclTucGXWlbjBC7m%2FrWP1iDEkrG5C%2FWb7otXnBktFGmoMOJcvQROe9piU8lL6PK%2B4UgvwyjtDiF1CP0OqsDOZYfmRJnW0uMZFAM4AEZys5Fzr2XeGCX38d5xsQ2OLp%2Fw1cRsToiBJJ%2BKG6yqxDlrnH37YrjcRWCPfwynRefwXHDfXulHWtbc5UztQbz5SrSFR3OBWZk5EZe5fRnFGCdXeKt%2FhiWG4V%2FC6RNs%2BnFWGz6cAB%2FQxyFXhKX4MseJi%2BiFrxTi1IzaR60KyYfG5lvQ7GB64gogXV%2BM4ZDddj77Eb0lEzXLtOF956TQ%2BeaiBmyseAMGhTJ955mM3yol3MPR%2ByfBv5ONjmFyW7Ve7mHmmD9bqUGdsWj9OJuCzXl6JaqYD0tOpR19KVMRciu%2B4Oryuhnvfz%2BPBT69xOMdc0ki0CpiT1k41wNqs8Kvos0aNJ6Upg4epaK4x55c39cnbCzUOnVIut4zFBpLHjGcN1e%2B9xYvml880tfZ5zczCxP1MLcQpoCtLCOe7cwjiQ5JZbRzCRhM%2FCBjqkAWYxCoJT3cWyPFqb3SpgMr5hxzI9SZkJ%2FdVyF1mYJ61lY8ropf1lU%2BoW8VWtEVLcsK4ItPsMO49YL3mNIU7JKMSDYveCx9y3g6d%2BLKK2g9tKqscCvQ7QRUBTp9W3U2E%2FdIkJ2GpKq6MCAX3RgkvOk%2F%2BuB5uBNIehL6R3s5lgFlRBwLm3UfA0%2BB6h9%2B%2BakCLkQy4kMeOEqtC9uYysXxGh9cI4kEMo&X-Amz-Signature=8bbc6a0b7f6911f6d4d2a786ec8e14c03b10034d933916e7c1a79428810bbfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3IJYPA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEL1DrKfjxSP%2BJAH7SkvllQsAFpi%2BZ8AyXMik0Mq5GlAiEA3%2F1bpy%2BKamo9LMUW9NSykReruEa3a0stb9T7rnCuFKQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Y%2B0owte0ANV26ZircAz4VFh9Ujjv3%2BSBkdObabtO9PT4lOIChxNGvclH%2BlKVtu1ciZpICVXZcPQL%2B1%2Fjz1Oxnp3vkyqrDCOmPJgYOzYNso5Zj7pCFAzYEeOKXXVqzVpKJ5rynQK%2BmMUWqlX3pyRK1N%2FtzQWS1zZ4ZBdDo7vqgB%2FpizlN%2FCQpP70CK%2BwirTXjzg8MYcc5SBb9SW61MathyFCWezCDFhdoAc69bMDJT16AfnG3JleODtYwZTWcY1TNPfmxZgpn3FMK3kYW%2FGBS80Y4fPEB78qSD2CIDY24bKqcRf4sEWJbRFkHWOr4w%2BMim4RfGgxe5pIcO6KoYRS9jMGFhKT0Gnttpdd%2FLQEe6Zde4UPuBrz8uw9yVmmesLTJ3F36qUrbo0um4%2Fa3jyDryKDSqs2fQhBNL%2F01OroKwh7p1NSEI6xkbxQXMcato5eVzc6U2Sb2sZOYoccP1w%2FWiNBwMt2mtgRsqbFotaVjQMTtcZOA16kOzutbPiZ%2FsxfEeb3kjuILsm5Uj12yNEhv4BjKJ%2Bd9XCeJ5lAxXB35IYCyWJxBn5BAB1LjqQ8YCse6um5RGHbH3LDONiGeYjfZsGZCFlfHgkTz5rWjmG5ujHqxzjFpc9b99X2aZD1MFPPQzDIb4Qg%2FiSwSQMM%2FfzsIGOqUBLty%2Fa%2B%2FdlpnJFJhduJ%2F7YdIAq1IVzedXGigyC7eQZzgmFs1nzrLjUJQJ6hTZkHo93jtlC5XOYTH%2Buw3QC71pznel47MERArCuqu5B0%2BS8XxDox%2FiviPjXnLw6nydAqVvY7IQZY%2B8ojZKquMfcravFnXStPX4uN31lB43BaxaKWXn1gEK4UlZX1B%2B5FV0DsYkRF02O8OE4C7Jqs4Hk%2BctrarQSJBb&X-Amz-Signature=18f877d53717038d82b9a351a806246ca0d66469333e25fc0a6007cddcddb514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJ733TI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCks0fCqaxRPcbfohA%2BWKKut13daA5KUOBnj1gmCGrvkAIgWrPLaBRZ9jnMivvhr%2BjwUVKa5oNw2BA3TpPenEvgbmgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvec7N4YbP9vrBsrircAyHDeH10oie76hKqYgMJ380xWMu2QVOb0rLK5H0Kqt888dWHBYcP3KpJGV%2BjUnS%2BRzQuMOFcnOT6GlMGhaWag7o%2BvSrUNw3iaas2uF6M980PCFw66pTObATajWHC30ztFMSj7n3JlyPAJ0qp6ikcHKk34FWjCf6ejU9z0v7Rnd8jkscabRStRJ9mawR2qaBd%2FUTHrtQ9%2BxdiY%2BYjESZ4jCSbntDc4kdu0YurJ2ds1kcdoFRXUIPEpiqtg%2FKuWyo2g%2B4rao1ThPuU7sIRP6jtUJmO5wPq4kBIDteFMqoYNmPhRiwVKDj%2B50gpbAPeARvwZnDPLni7QF0vcOO03NqDYGxKQJT8gP93KH5BBdXGHt%2FovoL8yAufVTukG8sXBCU22%2FR6abBV37hK9Bfa7GgH7jKTwD7olwQ4aErI2A99sq8UzvyFTF0lsNoB6PAs8n3YncMAmrEROOAPQ%2FHPmx0Sl10H3SrVkpZ4DujdQeaF6s3DNv7wHUmoo7KGPPcq0yeDmp%2B6nK%2FBINgKNocjCn%2BqvD7QjSB9ixTYVEb%2B%2FdSC0LQIvDSWX5rAE4o8gPcsbG%2BJJvf%2FdyEyrwcS3uvCPqvgj5ilQ%2B8P4geyNWCBW4WiHlmqcpPK7o1wD%2FcnkEAOMJzgzsIGOqUBJmfTVOXpTARLjNAehL0HkzIBmQcVZts7TryIl7gkRSZUgLZ%2BTQJezCMjRS%2BTLYfT8x%2BeE92ibjUoNBV1fcVJpKD7cx0Dmd1MjDewCmasudIf1fXJlVX1glzquz0Pt9hc1pPN0ggHJG6l7b48Wc%2BFbVpFfr6dpovTIfYgw8K6EBuRRxAouVt0l3RiJeqzT1DyI3uKnuOeQal2OD7Inz3Sel3EmnXO&X-Amz-Signature=fd354553d7d5a1af5853bc5058fe264c69ad3b0e31cf140be938967eda6b4d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEOYITH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtM0UvX%2FSoq%2BrqzfGSIyCQJVzu3TdsEoVLgQb2KqvBAIhAKpjgwVrJ0A%2BYDSsynyX5FOf3cYciCDLSoqcUmPVgZUWKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM98stQixddNzRPWMq3APRoksMVpuBpXFgKw11DtrfwgepvIhAIBt7eIxhYSFgjSnh31PSHlD4GGyzumLm5lhPxx%2FJd%2B5%2BsO3MhouTEYG4YcmuvlGQkYOLNWtx4sIclTucGXWlbjBC7m%2FrWP1iDEkrG5C%2FWb7otXnBktFGmoMOJcvQROe9piU8lL6PK%2B4UgvwyjtDiF1CP0OqsDOZYfmRJnW0uMZFAM4AEZys5Fzr2XeGCX38d5xsQ2OLp%2Fw1cRsToiBJJ%2BKG6yqxDlrnH37YrjcRWCPfwynRefwXHDfXulHWtbc5UztQbz5SrSFR3OBWZk5EZe5fRnFGCdXeKt%2FhiWG4V%2FC6RNs%2BnFWGz6cAB%2FQxyFXhKX4MseJi%2BiFrxTi1IzaR60KyYfG5lvQ7GB64gogXV%2BM4ZDddj77Eb0lEzXLtOF956TQ%2BeaiBmyseAMGhTJ955mM3yol3MPR%2ByfBv5ONjmFyW7Ve7mHmmD9bqUGdsWj9OJuCzXl6JaqYD0tOpR19KVMRciu%2B4Oryuhnvfz%2BPBT69xOMdc0ki0CpiT1k41wNqs8Kvos0aNJ6Upg4epaK4x55c39cnbCzUOnVIut4zFBpLHjGcN1e%2B9xYvml880tfZ5zczCxP1MLcQpoCtLCOe7cwjiQ5JZbRzCRhM%2FCBjqkAWYxCoJT3cWyPFqb3SpgMr5hxzI9SZkJ%2FdVyF1mYJ61lY8ropf1lU%2BoW8VWtEVLcsK4ItPsMO49YL3mNIU7JKMSDYveCx9y3g6d%2BLKK2g9tKqscCvQ7QRUBTp9W3U2E%2FdIkJ2GpKq6MCAX3RgkvOk%2F%2BuB5uBNIehL6R3s5lgFlRBwLm3UfA0%2BB6h9%2B%2BakCLkQy4kMeOEqtC9uYysXxGh9cI4kEMo&X-Amz-Signature=c3567aefe03ea00fb5884df22de71b3f2634ec2be5a5b6c984ab4831702338bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
