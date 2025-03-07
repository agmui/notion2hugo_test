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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOCP5EE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC3lNxz%2BZsUKer3RgyXZWvUtNMtSkpy2xRee5ozYS%2BVSAiAV63P6%2B5dMAsz67p1q4uOr4ZKsSoahBRBmKdX68r8gNSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMz5mFsPp%2BEUnqLT1RKtwD%2BfPLjlS5jhs6MCqfdSdLmvvyRatZCa8jiL1hN%2B3Uyug3Z19YWuclGXGkBB0oLaGgRZcEwdLbCyiLyUA3xzYw%2F0yYoWN%2FEasO%2B3wGuV8T1KfrDEfG3OFuLg6IOr%2FbH1362fnnAZDnunqERRGZf9GXPuBereEyMH1pmxYIIt%2F%2FhOwPW58XFgJi6LCXovatFBitgj3FiEF7UCD1uCKKeoeNQCdmU7UldeNRHdxqfcJMKoWE9hicKcMntXvXbNdn52b%2FMIHBMzj%2FgXDkMA5dJB1rQaXdKe9tsyvQvmW4nwEXJpVDMOzK1k6u0WVesYr%2FgFhjyTk%2B97YAr6pf1upeRGQQqXfNJpEXQjFi3vP9ehX8PrWX8%2FQs4WaBx46kRVupD6%2B6u5h5BNoYHztodEWfWY1pW%2B%2BiBB2HONMs3eHywE1S6c59BZpdoi52VPEgyDqE8%2BXxFbY1GNCyBBUJQfMk%2B79OnV2rnh8i4sS4XG0T3UhI27YI%2FV7p49cAhI0O4XjV3RRanvfEUL%2FkmSqoUovqaa7w%2BtyUSAQ%2FeJCJp5Bk3%2F2doMlXfVA7zMDqb4BuXRIGw3Lzj9S62bdK4IAXpzDhopJKIHV%2FevLdx8aGlUT%2BRvjqGNWH1ukCrOTyB5qPsigw692tvgY6pgHZJ%2BNrfhctlN5rEK%2BRJaUYbt4Mx8zSK%2BWfG7ubCqjvCCS%2BdC1mU0jceumGKFstaYM9MrsHNBRp%2FkAOXpyJXibSSuh4%2BQck6n9k6F7N1vbT%2F2AUxDwpitV2sAk2sWgG454tKbKv7r%2BDxyCJ26OEsKW0I9%2Fu1OVrTnpDUYgG4icz%2FKNwtY4xgVJ26ngOPBzVZcjMXlzM2bRYmXX8FJYVumXjYTnbxhiH&X-Amz-Signature=6f671499cdf5f29366f1355289d10bc7920675dcb12824dd11444a9cc8554298&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOCP5EE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC3lNxz%2BZsUKer3RgyXZWvUtNMtSkpy2xRee5ozYS%2BVSAiAV63P6%2B5dMAsz67p1q4uOr4ZKsSoahBRBmKdX68r8gNSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMz5mFsPp%2BEUnqLT1RKtwD%2BfPLjlS5jhs6MCqfdSdLmvvyRatZCa8jiL1hN%2B3Uyug3Z19YWuclGXGkBB0oLaGgRZcEwdLbCyiLyUA3xzYw%2F0yYoWN%2FEasO%2B3wGuV8T1KfrDEfG3OFuLg6IOr%2FbH1362fnnAZDnunqERRGZf9GXPuBereEyMH1pmxYIIt%2F%2FhOwPW58XFgJi6LCXovatFBitgj3FiEF7UCD1uCKKeoeNQCdmU7UldeNRHdxqfcJMKoWE9hicKcMntXvXbNdn52b%2FMIHBMzj%2FgXDkMA5dJB1rQaXdKe9tsyvQvmW4nwEXJpVDMOzK1k6u0WVesYr%2FgFhjyTk%2B97YAr6pf1upeRGQQqXfNJpEXQjFi3vP9ehX8PrWX8%2FQs4WaBx46kRVupD6%2B6u5h5BNoYHztodEWfWY1pW%2B%2BiBB2HONMs3eHywE1S6c59BZpdoi52VPEgyDqE8%2BXxFbY1GNCyBBUJQfMk%2B79OnV2rnh8i4sS4XG0T3UhI27YI%2FV7p49cAhI0O4XjV3RRanvfEUL%2FkmSqoUovqaa7w%2BtyUSAQ%2FeJCJp5Bk3%2F2doMlXfVA7zMDqb4BuXRIGw3Lzj9S62bdK4IAXpzDhopJKIHV%2FevLdx8aGlUT%2BRvjqGNWH1ukCrOTyB5qPsigw692tvgY6pgHZJ%2BNrfhctlN5rEK%2BRJaUYbt4Mx8zSK%2BWfG7ubCqjvCCS%2BdC1mU0jceumGKFstaYM9MrsHNBRp%2FkAOXpyJXibSSuh4%2BQck6n9k6F7N1vbT%2F2AUxDwpitV2sAk2sWgG454tKbKv7r%2BDxyCJ26OEsKW0I9%2Fu1OVrTnpDUYgG4icz%2FKNwtY4xgVJ26ngOPBzVZcjMXlzM2bRYmXX8FJYVumXjYTnbxhiH&X-Amz-Signature=5f665e35df58702a4a6cce32d91a9c8084cebea5d671e4fd57c6826b0431cfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JJLWIDM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFdFIBAetxrwmbOHAYmVpbxGsFQuZjAn44BpOn2co1VvAiBMKN0Pg7TWciiJNG4IeL8ftYM%2FYfroJca14Ghq10NXQCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMSkv7TvL3Pjcpe%2FVmKtwDekzBfyeFivNp2%2BFw0IDkoZ2hdsby30J7AW3MIii9pSqfiN0xo28wMHfKBYIKXWwF1ZWfZmtJjcy0Pp5h4ES94KpPa%2Fc%2FID%2Fu8G%2FUTRiiQUJcZiGsuf8XgyO4O4Nj5fbzosSuUBuW9LoBvOwp1zu%2FSW9NosiwBjgctLICrgIkw3a32XWz3eAPjd4%2Br2GgdxO7kruinBP%2BPQXQErBN%2BtT2uPiQaEtZzFLn1YIhe15MgXhYsp2%2BCjDbZRIhwwn%2BCP%2BKrArTk9PUr2Rytegg4XJ7nv0dv9xPCx1AG08RfRHiy%2FpxrCGS7rrU6ZHUHyfDZ7bM%2F5%2Bi5mtxkW1jgcbwMKipBug7PhfGFJ518mvzcsb%2B%2FyggRHINr1RxdeKU79SRy8cn%2BtWxZXJli8wD239%2B71F8PnwWOZazUbw3x0cuy%2FpK5JnPoleM%2Fc97Cp89kwJYpf0bYBcNr8bi8jpMg9fDLWchJc5RKRbEwYP22f5KVPyhMdy6FVTsqe2gLZnIn6cTXPQXiJ1hT6dUN%2BfNaS8APHXnkPBGKyFsgBWfzK%2BXfSYfMympm48%2Fz%2Fx0TYm7T%2BdWlO1zCjxIW05sHlQTF8N4GV52UJ26mkMeIKVk0KbmfjHKNDwIRlUcjDnLA0jlbbAwjd6tvgY6pgFAJ%2Fz0BkkpQope9lzeLUopPVhP9Vukn5FsNCXQwVikm7Xo4gOAYcbXf3LxT6LG3PDnEWqzBuIY5DEUiHP%2FM7kH2TK9UXdpp0K71m9NL%2Fqva5Gte%2FewlcIJkO%2BKuWOrBeR%2FGqT8RJCc8QAmzEfI6t6%2FdzcqPvm1KHpHKEMl%2B1ikT6LRTleJNvn6NVqDW3vYPzCYXsVGTTjjcQ21zvos8df2t%2Bxpt1HJ&X-Amz-Signature=839828fdea1b0584df7d85a0516baf78406ca88683305909913a213a196e557a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBGB3E4L%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIG%2FyqfbFsLj08ff0rh6STb7kCRUt%2BV6pk4%2BbSl0VKZfGAiAWVLCQILDmF3pi11hJryibtoJ%2BpE9hLOv%2FuUWpOjGsHyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMVT8NLNw2bijsCIT9KtwDlS9ycTUuqDByECXrEcLcTeHGKnD3%2B9WQikOn0SV7NbijR%2BmDPL8ArrMIDiBJut02EeTBpPO85q%2BBs38yqc6i%2BpeYowP7U2%2BfdJy4vNgP1vnxlpUVvWR7K69Y6HsIRII1u%2BuYfbqkXa6%2BbBMIsL%2BpwS0Vo4mSjFOZkT2bNGMufaWUT4RhvmB74HBnUJnnUa7auqOahGqHs6D6vhD8Z3HMFvOCk4lZdrtokwzpAoaktPEXkclPpF%2BI7boaUI6cvn229Mkqt2%2B%2Bj0frIUENVFYVieldlFMxAN%2FPE6njR%2BdbuVh9WwdXgEvZO2YO9xoMe%2BGf8fW9USG6RkcI424zIZ4pjBl7f9kf4szuJRj85O5YHZ6hn%2B0xlaQHuYu6TYwDSljX6HBlXrpPq9O515yZRLUyiVJzXoMaSCbWedIJetK0Wg%2Boh%2FzU8gOtkCEc8m8b9dbPJAu6gAkG8w2TZbDsgmg%2BKZWX9oDoFI9v2Wzph98tsixfZ5gWHL4rKa1mp%2FWWHvZ9MU2kw04TRJVdOFP3D870ZxyRR6RfjumNXCpdFR%2BdQ%2BQlfqhE%2BSDuW6BlOOWzYRQDnotQ3dv1F3ps5MVp8KrRr9O1G8JGlEGOdzw7ANwNmpWysqr%2BG9skfLKOqL0woN6tvgY6pgG3zVt9VHNkxs7aZKDWehXUrwOu%2B4f8hiMe9LjG4wcCcVhHXAOyRhPgekT0vyrPd22vfHjs6R7rOG2RQR5iPWDh5NHT85Kihcfj17FNvkeS0CZKS1SGfk%2B8o1cKTTesb%2BhZoY2JCXue0EzDpVg%2Ff9qlIgpQ3vsYfH41NfOKSIJz6NrSae8C81oaIY5ff8Yhc%2F9Xv5BJicIOgOErAMcurXzwoMZ7jbXG&X-Amz-Signature=3fcbd13502a2ce7e8ded47194020fe5eaa668e68cdb1ffdc87517eff5e5de4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOCP5EE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC3lNxz%2BZsUKer3RgyXZWvUtNMtSkpy2xRee5ozYS%2BVSAiAV63P6%2B5dMAsz67p1q4uOr4ZKsSoahBRBmKdX68r8gNSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMz5mFsPp%2BEUnqLT1RKtwD%2BfPLjlS5jhs6MCqfdSdLmvvyRatZCa8jiL1hN%2B3Uyug3Z19YWuclGXGkBB0oLaGgRZcEwdLbCyiLyUA3xzYw%2F0yYoWN%2FEasO%2B3wGuV8T1KfrDEfG3OFuLg6IOr%2FbH1362fnnAZDnunqERRGZf9GXPuBereEyMH1pmxYIIt%2F%2FhOwPW58XFgJi6LCXovatFBitgj3FiEF7UCD1uCKKeoeNQCdmU7UldeNRHdxqfcJMKoWE9hicKcMntXvXbNdn52b%2FMIHBMzj%2FgXDkMA5dJB1rQaXdKe9tsyvQvmW4nwEXJpVDMOzK1k6u0WVesYr%2FgFhjyTk%2B97YAr6pf1upeRGQQqXfNJpEXQjFi3vP9ehX8PrWX8%2FQs4WaBx46kRVupD6%2B6u5h5BNoYHztodEWfWY1pW%2B%2BiBB2HONMs3eHywE1S6c59BZpdoi52VPEgyDqE8%2BXxFbY1GNCyBBUJQfMk%2B79OnV2rnh8i4sS4XG0T3UhI27YI%2FV7p49cAhI0O4XjV3RRanvfEUL%2FkmSqoUovqaa7w%2BtyUSAQ%2FeJCJp5Bk3%2F2doMlXfVA7zMDqb4BuXRIGw3Lzj9S62bdK4IAXpzDhopJKIHV%2FevLdx8aGlUT%2BRvjqGNWH1ukCrOTyB5qPsigw692tvgY6pgHZJ%2BNrfhctlN5rEK%2BRJaUYbt4Mx8zSK%2BWfG7ubCqjvCCS%2BdC1mU0jceumGKFstaYM9MrsHNBRp%2FkAOXpyJXibSSuh4%2BQck6n9k6F7N1vbT%2F2AUxDwpitV2sAk2sWgG454tKbKv7r%2BDxyCJ26OEsKW0I9%2Fu1OVrTnpDUYgG4icz%2FKNwtY4xgVJ26ngOPBzVZcjMXlzM2bRYmXX8FJYVumXjYTnbxhiH&X-Amz-Signature=65eb6febb96fcaacdd864b102a54cd4ad124224236c9bc5ce2d65cbb3b92a747&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
