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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHKGEPY%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4lqO4g11oFhWP6f6Aj2zK7JhkU1G0xQwuNbZqVe3ILgIhAMDZaHA8Gr33l4JdpkfZH2Ehxmtpq7g8Vh%2FYKxtpmPnOKv8DCHsQABoMNjM3NDIzMTgzODA1IgwTqy4iGau6viyMUs4q3AMfPdwRcp%2F432hSpt8X2geJ1sxOJZjmHIFqzEw6Dk2quHcifx1U1dQi7SskabQ9ZSfGK40dqYFPk%2Fc0f%2BC6bU7iilEZv%2FMxwlv3%2FOuyYUnrmIUhGom5poyHflGY4tUAVYXh596I5IEjZheRMfctmRShD9oGg841Peq3d%2FZR%2B%2BHFXDXCSj%2FJjOxjAApFOHY0HKp0cngh10SCGlDUCHcqSLaV%2F3MRPFtsQAGnd%2B%2Fs0jyZHo0bWSMHs%2F%2FMMLoGK%2F2pceBvJtqpS0NdG73lD4kSnXAeH%2BWw8ggPUgnVhQwD%2FAO5BLaj9Yqw4mzjJm2isbMecA0yVWuxi3xk637qIfS%2B%2BP5dA3K%2FQ0Cz6r%2B0W8NW%2BBtxBf5%2Fz6hF0KWWi5KVQfJ9YxlzdUgLq7gEgRFGJZDw1Ds4IOstcZtIxzPBE4mYOS8QZaTXilkLpufiN%2BR%2FRpUCnr9iuPapNZ3zQNud%2FrA872SlK9P0fdUZkC36mKz2ztRTEtj4kDUN04ZezP7JHK3GDbOvuoA%2FkUVtqN0ZxhDBWEsx%2FCvramP19sjUVGM3GucotWnYdZlK%2FbuDsbBO1WPFvRl0RDxZ08PSpn6n3EaS5lKoCRs%2F%2F8bOM2aJ08tyDNuw08BN7oPwaXk%2F6CiN5DD6spnJBjqkATbgdSQt8DPxvgL9gAmlhBDFVG9jtv%2FncKUXlyQwRIY7gMAz%2BWznArB36bGg3mONnRoFJB7po9Sx9N6PstKChQRlXcT8bkMndRmq1FjPek2AY0rM%2FkvDrZVdRm1gc%2FBKtV4GXwOmTPGqSiAkvZlC0L10E64qQZ0C1OBSGaLVHlN5mOwFX8VWKFf5zk1RGM2crxxjjq6%2FlU8HADGvJoihdYqngKYS&X-Amz-Signature=e742384e28eeebc07f3a596f9c30b757a883665ec4d33f0378e0a92286588439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHKGEPY%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4lqO4g11oFhWP6f6Aj2zK7JhkU1G0xQwuNbZqVe3ILgIhAMDZaHA8Gr33l4JdpkfZH2Ehxmtpq7g8Vh%2FYKxtpmPnOKv8DCHsQABoMNjM3NDIzMTgzODA1IgwTqy4iGau6viyMUs4q3AMfPdwRcp%2F432hSpt8X2geJ1sxOJZjmHIFqzEw6Dk2quHcifx1U1dQi7SskabQ9ZSfGK40dqYFPk%2Fc0f%2BC6bU7iilEZv%2FMxwlv3%2FOuyYUnrmIUhGom5poyHflGY4tUAVYXh596I5IEjZheRMfctmRShD9oGg841Peq3d%2FZR%2B%2BHFXDXCSj%2FJjOxjAApFOHY0HKp0cngh10SCGlDUCHcqSLaV%2F3MRPFtsQAGnd%2B%2Fs0jyZHo0bWSMHs%2F%2FMMLoGK%2F2pceBvJtqpS0NdG73lD4kSnXAeH%2BWw8ggPUgnVhQwD%2FAO5BLaj9Yqw4mzjJm2isbMecA0yVWuxi3xk637qIfS%2B%2BP5dA3K%2FQ0Cz6r%2B0W8NW%2BBtxBf5%2Fz6hF0KWWi5KVQfJ9YxlzdUgLq7gEgRFGJZDw1Ds4IOstcZtIxzPBE4mYOS8QZaTXilkLpufiN%2BR%2FRpUCnr9iuPapNZ3zQNud%2FrA872SlK9P0fdUZkC36mKz2ztRTEtj4kDUN04ZezP7JHK3GDbOvuoA%2FkUVtqN0ZxhDBWEsx%2FCvramP19sjUVGM3GucotWnYdZlK%2FbuDsbBO1WPFvRl0RDxZ08PSpn6n3EaS5lKoCRs%2F%2F8bOM2aJ08tyDNuw08BN7oPwaXk%2F6CiN5DD6spnJBjqkATbgdSQt8DPxvgL9gAmlhBDFVG9jtv%2FncKUXlyQwRIY7gMAz%2BWznArB36bGg3mONnRoFJB7po9Sx9N6PstKChQRlXcT8bkMndRmq1FjPek2AY0rM%2FkvDrZVdRm1gc%2FBKtV4GXwOmTPGqSiAkvZlC0L10E64qQZ0C1OBSGaLVHlN5mOwFX8VWKFf5zk1RGM2crxxjjq6%2FlU8HADGvJoihdYqngKYS&X-Amz-Signature=f5c08d18983c2edc32bc04d66b8e6dd776aa1a1bc7a517b13bf1799b3bc75a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHKGEPY%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4lqO4g11oFhWP6f6Aj2zK7JhkU1G0xQwuNbZqVe3ILgIhAMDZaHA8Gr33l4JdpkfZH2Ehxmtpq7g8Vh%2FYKxtpmPnOKv8DCHsQABoMNjM3NDIzMTgzODA1IgwTqy4iGau6viyMUs4q3AMfPdwRcp%2F432hSpt8X2geJ1sxOJZjmHIFqzEw6Dk2quHcifx1U1dQi7SskabQ9ZSfGK40dqYFPk%2Fc0f%2BC6bU7iilEZv%2FMxwlv3%2FOuyYUnrmIUhGom5poyHflGY4tUAVYXh596I5IEjZheRMfctmRShD9oGg841Peq3d%2FZR%2B%2BHFXDXCSj%2FJjOxjAApFOHY0HKp0cngh10SCGlDUCHcqSLaV%2F3MRPFtsQAGnd%2B%2Fs0jyZHo0bWSMHs%2F%2FMMLoGK%2F2pceBvJtqpS0NdG73lD4kSnXAeH%2BWw8ggPUgnVhQwD%2FAO5BLaj9Yqw4mzjJm2isbMecA0yVWuxi3xk637qIfS%2B%2BP5dA3K%2FQ0Cz6r%2B0W8NW%2BBtxBf5%2Fz6hF0KWWi5KVQfJ9YxlzdUgLq7gEgRFGJZDw1Ds4IOstcZtIxzPBE4mYOS8QZaTXilkLpufiN%2BR%2FRpUCnr9iuPapNZ3zQNud%2FrA872SlK9P0fdUZkC36mKz2ztRTEtj4kDUN04ZezP7JHK3GDbOvuoA%2FkUVtqN0ZxhDBWEsx%2FCvramP19sjUVGM3GucotWnYdZlK%2FbuDsbBO1WPFvRl0RDxZ08PSpn6n3EaS5lKoCRs%2F%2F8bOM2aJ08tyDNuw08BN7oPwaXk%2F6CiN5DD6spnJBjqkATbgdSQt8DPxvgL9gAmlhBDFVG9jtv%2FncKUXlyQwRIY7gMAz%2BWznArB36bGg3mONnRoFJB7po9Sx9N6PstKChQRlXcT8bkMndRmq1FjPek2AY0rM%2FkvDrZVdRm1gc%2FBKtV4GXwOmTPGqSiAkvZlC0L10E64qQZ0C1OBSGaLVHlN5mOwFX8VWKFf5zk1RGM2crxxjjq6%2FlU8HADGvJoihdYqngKYS&X-Amz-Signature=0eec3352742271e2d47910ca14ea4a9744961beab5ff693d4fa4fe0a7d97b7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUKAIW6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHybDLv3UOiJdUR8jTQ4T3E9HKzBVDCpD8CYZoeAYduzAiAiSTfwAjI4pFy0Ged4K57MOsdqmHIWNzsE9UlU3%2FirAir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMgeQM%2B73cneUA7udOKtwDiU1cnD8CWDKtgiJI%2FulNRi3eLzBnAdwjKmsmt%2BbsFRdZzSANVPhR6O32SZmqtrCq0%2BNiyLpGudsyCMhFTwcxlz655H8%2FuwNfJ9xuicJuuSOV9qOjrup%2FFta6rzbJGoZ1jj%2FSR6dMXEsYzLrjhv2g6c7EP%2FG6maQz6lk1kfMzEmlmmWRX7cOdjtwQ3TRtcsmCMKTECQF82bFDOo6OzX7VoNMgozviPLElA2%2Bb8vfR%2FO8%2F5zOkaIx24%2Be5JD1Frunmo%2BN%2BEQTTR0am7EdLeKHhlfpzd%2Bsaig5DcgSx6Dv%2Fz8HnNlORPSgUpoh6SYLuoJtVy2JcVcewp%2FEbEDf6RA%2BSZ7SZ6DCFjq9ijv5YZbBVhWoUHmFkj7zia9FrkP7i4LZKrsUuCw6Y8K%2FP7fd22UeFRcmD1Irrmcs6ivNVNtAk%2FT1OJtW%2B69Fs%2FMPaU%2BDsyaFkmVL0%2FX9TRg8yE%2Fpz%2BmNHlFF2R7VKY45GMA7ikp8B4IFESZO0tCTfUsWlCZWY1Epi85qT0XXQ1Pq1N3QE8RKzsaz25RawGbiKIv%2F9DcV71cVCA3QZwP6Is3VzL8Ng0g2t2qSX4CwKVGt%2Bym2suvOy5z%2B%2BcuGE%2B7jA066Awz6uVs%2B3hp589rVDei9AueYwibGZyQY6pgFgDIMd963K8fe0ACrWJVZHziTEEmCs7BH0i9L8as5Br9zXWzQbkZO6m%2BD8rEEqfwtEFuxBxqEFoklcY9zNUJC%2BIT6QkrnqXsPxIuQUmxEHf1Z%2BoreYV4%2Bxkw2M5czzoAO8DeNpkdVfW2vd9REWkBqfVt7huuLaDJyRvXdZzNL7Hjgbc29GB11d5YKGiNYjxGj0j%2BoaIkgejARPDerBdAf6TpgHGli9&X-Amz-Signature=a45407eae01e445fe6082f6adc606d11d613fa83bf3fec05d3f4865accff6859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I35T5D%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZaI%2BlxiaiWuFJD6Wx8BC0KVkDjZhf9N2RizyRTL7Q9AIhAP4tSpvQeJ0Gm5fj4TARdaFOh5VWMaXkQPtBpB73%2F91vKv8DCHsQABoMNjM3NDIzMTgzODA1Igwlz4cHa38wJYv9rysq3ANktH%2F%2FMXN%2FeN%2F26pCp1AptNBHFxmbEwUTVypqFjmx%2FImRkXl8lEeniyi1akrVJ%2BiYRK9mB08G1rhaL8BS1HTembTY0DmSq8tdhGalFbUR7X91qMuZAgzVCmvQ62q9YN1UxiOfDynsX7pd5y3BJBvvMxKGrgg8zXz4iY6Na%2FVXdDvNcfyIQwKYgnfOaggem8CDNTqxI8ICZnvHxLYDcoNk%2BX4rlKKuGm0inkGt%2FGSC8Y6%2B1EaaCe1ImPYfb43CpUJJK%2B2vvDz3jXeS%2F%2FAOppNrRc5rGyOmFNFEegJMT9bY%2Fhr34edQ3uipYEF1fXqF71E0OIMwXtw2Gr2f18%2FtUfDyPyz5rYtiEkVsfoLbOcpnyzfiMi01PD0WVyztCCAUC4fuevIl5q7ogL9WwdV1ohJL7Ocoe9CRtxsVNqitA8Dvz8SZA4s%2BNeDWAzxie6giMEoTe%2F6knLz7h06Ntd6aSf8gz8AOhLy%2BHGCwYTttibC5WDeP0%2FjI3Lr0afAxWpG%2Bj1vmz2VXSexw796Tam%2B9keosNz8fkEmBNcdUcEV44y2i%2B%2FC%2Byk%2Fcf9Qk6iOhQ6nPBG%2BL%2FwV1ugEzbex775chyicEbXJR8zNIS3PiaUnP4QPoBISTVxf8djdPYjW3ymjD3spnJBjqkAV%2BFIgCjCjxtaAJdU6zUmyfplX1rnzJHWtVk3T%2BtkYEglFn4Nk5UPGunLdFt8xIdFaENJBhDCRr8oDvafStvPCl6pIS9wd42RD5HITxZ66ku1nIGk1n42%2FPSK4SmSWVlDac%2F4URWUA6vCo%2F9qo934aSUqY3xxnm1Ypx5Rgkd4UcyRsWcLUPSzdHCQ83ojXTlyr34oE8mQJGmr1fF%2FMfAqGmwpzy9&X-Amz-Signature=f20257feb05d7cbc967d5d0b7a7f400dadb7a19ad864547a816381186f70603b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHKGEPY%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4lqO4g11oFhWP6f6Aj2zK7JhkU1G0xQwuNbZqVe3ILgIhAMDZaHA8Gr33l4JdpkfZH2Ehxmtpq7g8Vh%2FYKxtpmPnOKv8DCHsQABoMNjM3NDIzMTgzODA1IgwTqy4iGau6viyMUs4q3AMfPdwRcp%2F432hSpt8X2geJ1sxOJZjmHIFqzEw6Dk2quHcifx1U1dQi7SskabQ9ZSfGK40dqYFPk%2Fc0f%2BC6bU7iilEZv%2FMxwlv3%2FOuyYUnrmIUhGom5poyHflGY4tUAVYXh596I5IEjZheRMfctmRShD9oGg841Peq3d%2FZR%2B%2BHFXDXCSj%2FJjOxjAApFOHY0HKp0cngh10SCGlDUCHcqSLaV%2F3MRPFtsQAGnd%2B%2Fs0jyZHo0bWSMHs%2F%2FMMLoGK%2F2pceBvJtqpS0NdG73lD4kSnXAeH%2BWw8ggPUgnVhQwD%2FAO5BLaj9Yqw4mzjJm2isbMecA0yVWuxi3xk637qIfS%2B%2BP5dA3K%2FQ0Cz6r%2B0W8NW%2BBtxBf5%2Fz6hF0KWWi5KVQfJ9YxlzdUgLq7gEgRFGJZDw1Ds4IOstcZtIxzPBE4mYOS8QZaTXilkLpufiN%2BR%2FRpUCnr9iuPapNZ3zQNud%2FrA872SlK9P0fdUZkC36mKz2ztRTEtj4kDUN04ZezP7JHK3GDbOvuoA%2FkUVtqN0ZxhDBWEsx%2FCvramP19sjUVGM3GucotWnYdZlK%2FbuDsbBO1WPFvRl0RDxZ08PSpn6n3EaS5lKoCRs%2F%2F8bOM2aJ08tyDNuw08BN7oPwaXk%2F6CiN5DD6spnJBjqkATbgdSQt8DPxvgL9gAmlhBDFVG9jtv%2FncKUXlyQwRIY7gMAz%2BWznArB36bGg3mONnRoFJB7po9Sx9N6PstKChQRlXcT8bkMndRmq1FjPek2AY0rM%2FkvDrZVdRm1gc%2FBKtV4GXwOmTPGqSiAkvZlC0L10E64qQZ0C1OBSGaLVHlN5mOwFX8VWKFf5zk1RGM2crxxjjq6%2FlU8HADGvJoihdYqngKYS&X-Amz-Signature=92db210c16e299c96b56d7254a3fd3af183165c771f2edbcebad688e2f1abb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
