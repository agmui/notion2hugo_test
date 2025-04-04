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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4TVWW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx67qzda3tLpx3HWJulKUtzIjZ5StDb0%2FisPGEXg0NvAiB2fJ%2Biufy%2BnU5zlPBj8FPTLqY%2FNjtGHc5iQbcTd1%2FtLyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd1InhchKzyMPB3F9KtwDH1FAejrITSqfTupeWNErVepe2jLP%2FvlDzggsbgY%2BOur%2FFAf0ACzeoasvudJ2cGFW6crUXCoTMlDkZBMwLlMxS0myfWFWsi3GkQIhzS9yDP8wilmeRqNseJJ60yhYMzXU85boPXZFO2YZqJJmiMS6V2OxhUfFMeQEhXAGoLbb22QBuL%2BukNzLRGQb%2FgBkKABJeOFduWPW1XrhCKJyMvmnfaLLHZ7p2hJbcI%2F7Nf4E6l0DeS0X7oE1F6L2r4JX6vFMxYZ5r7g5y3FDbxBolZ8fjdaAPrYHK4XBKGvIK2s39aO35P5EVX90la4lxePxGbr9FjgkGjdGOOFZ6ubnsgQ6qh8urcep%2FoNL16rKsEfg6sJIBaeUwiCzhKOBwp1vA%2Fv%2Bm9nBxzdWdHPTNFFwlIQ7%2FIBHg%2Bu23GsD%2BZChkG5oxsqf%2BJXaX7inZhrmuYcPyFZYUd0Ix92ky8ozLKIPSTf6ooOcicmvKg1FkNdk9cQFfdMq229wtyyMZnS3plXLIpssNRqDvbrxYQtGcdH055pDSumhbFqHb%2Fo1DkuIfZcYLJYcdTthJqxKC0T9QExAXpZEUlGy0D99vAgXuI5kZeX%2BvrSQWfus6hCii6OgAllySkytTz%2BAqzl%2FjEgk1Dkw8oG9vwY6pgEjICk5EIH%2F0X7XWm9FkkZ5LRrT0aZp3VYIaT1T8vqrV%2B1TzXJyjFY73hQGvkplpuY0VdUP8%2FkovcyQAW0tjIMenyO0qvRZ0Bo5ChCWvlupsy09qe6k0WpbrY3uAZVMZUm0Njc9qoHpisLJQ7Hcsm33qkzp1NlciWigzKM4R1nZvRQomczWD66UPiZLhV82LKo6x4SASEM4tpMOMSMklf17dE85Bnrq&X-Amz-Signature=a33f3574662f8d8ef6c650a7a5858ec4b4fba93a218c32de85dfd24657af9544&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4TVWW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx67qzda3tLpx3HWJulKUtzIjZ5StDb0%2FisPGEXg0NvAiB2fJ%2Biufy%2BnU5zlPBj8FPTLqY%2FNjtGHc5iQbcTd1%2FtLyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd1InhchKzyMPB3F9KtwDH1FAejrITSqfTupeWNErVepe2jLP%2FvlDzggsbgY%2BOur%2FFAf0ACzeoasvudJ2cGFW6crUXCoTMlDkZBMwLlMxS0myfWFWsi3GkQIhzS9yDP8wilmeRqNseJJ60yhYMzXU85boPXZFO2YZqJJmiMS6V2OxhUfFMeQEhXAGoLbb22QBuL%2BukNzLRGQb%2FgBkKABJeOFduWPW1XrhCKJyMvmnfaLLHZ7p2hJbcI%2F7Nf4E6l0DeS0X7oE1F6L2r4JX6vFMxYZ5r7g5y3FDbxBolZ8fjdaAPrYHK4XBKGvIK2s39aO35P5EVX90la4lxePxGbr9FjgkGjdGOOFZ6ubnsgQ6qh8urcep%2FoNL16rKsEfg6sJIBaeUwiCzhKOBwp1vA%2Fv%2Bm9nBxzdWdHPTNFFwlIQ7%2FIBHg%2Bu23GsD%2BZChkG5oxsqf%2BJXaX7inZhrmuYcPyFZYUd0Ix92ky8ozLKIPSTf6ooOcicmvKg1FkNdk9cQFfdMq229wtyyMZnS3plXLIpssNRqDvbrxYQtGcdH055pDSumhbFqHb%2Fo1DkuIfZcYLJYcdTthJqxKC0T9QExAXpZEUlGy0D99vAgXuI5kZeX%2BvrSQWfus6hCii6OgAllySkytTz%2BAqzl%2FjEgk1Dkw8oG9vwY6pgEjICk5EIH%2F0X7XWm9FkkZ5LRrT0aZp3VYIaT1T8vqrV%2B1TzXJyjFY73hQGvkplpuY0VdUP8%2FkovcyQAW0tjIMenyO0qvRZ0Bo5ChCWvlupsy09qe6k0WpbrY3uAZVMZUm0Njc9qoHpisLJQ7Hcsm33qkzp1NlciWigzKM4R1nZvRQomczWD66UPiZLhV82LKo6x4SASEM4tpMOMSMklf17dE85Bnrq&X-Amz-Signature=b54cb7aeda4eb05bb033dcc48e2c97c70338de258abfbe691ad39295f4e023c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QPCI6K%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdrXR4mme6FWvOIxQht61R%2FIzKvMPzTHdlDHg7gcLqlAIgCDNioki8aCBMZ10jTJvG2A4wkQIrNkoCuZMgwlPOZ3wqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrYU8dguWBmy1mX6yrcA%2B77zHfGN9m5pJsMHpVKHObMDZVWkXOoK34r2TkW9htybysYup0ISUF8Psx7HXKBQILFeI7eGGtp%2BO%2Fz2szudi9n3HnDF%2B5FRadgzzGv2tYIDo175Mc1rIErhN1T8suycpA4MQnrHUWWerxr4RTXCq80Csw6vPQsF0ifbEo5nnG4uOgoU1D97g8p6EMXWDuKdvQFOvhwO4%2FuUPn%2BAxtlpcsewKRtQGLfQPtKVFK1bETStl62O76Sr1%2Bv6TIjXk5tXNf0aMzI%2BD5VPAIOJR%2FmC4KivzQmExFoh%2FJ%2Fh39CUjNQqiXVaOh4hucskS7Qwaj%2B7ilFh5CjZF8q5Pjs1QqNjnPGBDuqVEQljRRw6%2FxkjClEHHeTVK1oNSL%2BaEu1qaFY0qcsILL0xLm%2F%2B1fX4YetplocBMMUVgmX4UQgyY8HrL20VBwQDmtKfhN8en8FOxg7%2FrZh0Jx%2FIb5PZaXFpj9aM0uCArgjWhTs54uRBxnSv6su2e7mDc126K9v2N3mrjC1E3J%2F5LCDVuL24y86AJi31NhPADOoCzgMaL8mydyqOm%2FHaU%2B210ztyuDMaNGoBuRobZvjQN4vMDnHum%2Fe8vrJwznr6xGK%2B1FkJNW5HfbaNKaH31VKL5dqmI35NeCmMO6Bvb8GOqUBO3zJSF2RphEFplK5MIxgvgV3IrCVOs0uxSTA9cDOjlFtJFyoaL5PO%2FpzXC7OOB9reXUFb6GpHeefBH8ar6R10i8MCnrQGcO7yJ6b3A%2FdyXuJ51CFc4sr8omQF6OyZoVsiJmyX3P%2BkZzFK%2BXs%2BQ0gFabMju2joAD441gbAgS3tjBhtMkzVXMn1%2F9iyhgxZWoWzQ52cn%2FjM4WMZFunXQDwbG3ZB3Aw&X-Amz-Signature=2beb03badff778a9171c4f2fa6c33edbd64ab88b9a2e658e7284bce3264eb1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNUOOP6L%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpcXYsFBogsxYAjnNMkDzdc2E0toAU5RSvyANthols%2FAIhAPxTzaY3i0mrvPpykcWvvOS%2Bj88z7WyPkfbn3MG9qDCoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqEYcgc8ZS3ZdtNxAq3AMVdyL5cGEOaRCM79s333V5rNwjpjy%2B%2BbKT2oxGlDwB3Yd9Ece%2BN3je2tKJAt36K6a0asGG67c1ulT6lQBj8Td9MdcNKJiBSo4iNql132tY6JyYbY3riBsbHipwGJJGnjZKYYV%2FrMMnt2Hj9iLMk4K81B0IJan7NTsyI2uQB%2BEntBTZCBKwLHmoQverPfIjFbXWbekw4pBRIkdBpQKp5raISXNBdFLRlJ0kCKNMsfLo%2F%2BTuxJKWo%2BT9VgcEXaqJPoXJeasfcgBJhnYfMRLlSiFag71wEbj5zu3nUUSe%2FpYsS%2BlyzxLH%2FqDZpbw7zQV2W27qKsNt%2BD8%2BOw9s9Y8r5w2kzeRhc%2FRVMDyY9oGaoFN6oBq%2B3b3Jt%2BQ64e4LAkdvlmA0jp9nkOm41Q5Fg8FVcbvFygwtIRwC%2BM2%2FKuxEuBQd4FIZkxijyshSI8Vc9vepEEHFpr3CYS85exsLjDNK0R2%2FtERIE4%2B98cLOhhQouGk7FcxP15GCzwv5GnoWTdroHIn9E%2BYY7tbImvXWQAk2d8MVX51ypPRLTKX3Cn%2FPjnOqTL%2FQjiyomcr3NOJCTZbT7IWWfC%2B3Hc2V8CIWlWmL5AFnjb5qFtVTYrLtuqmDtL282kHMyn3o4rPEuVgqHTC5gr2%2FBjqkAR3xZbni0YmQwYVYADSKLdfHeH3jvNNok1rcUxtAHK2gFb5RmYa689iaT0BwT6tvCBG2frBsbJ1kYxu3tx%2FMOruRjYrE70Z%2Ftqv2IYdi4VO3GjfG4GALncf5p%2BODr9F%2B0cmGL414OsW8Qov0UjzJt4T0ZIHerQwdXO9K9IngY1pv8d1DTYBPTCIgQmYMoQtaTVsDsdcZLenupoWFYfevFd4zsOTt&X-Amz-Signature=065c46a6982856e3288cd5aa1e28ffcfd827a3b2fa4f56f46e02610023e711f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4TVWW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx67qzda3tLpx3HWJulKUtzIjZ5StDb0%2FisPGEXg0NvAiB2fJ%2Biufy%2BnU5zlPBj8FPTLqY%2FNjtGHc5iQbcTd1%2FtLyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd1InhchKzyMPB3F9KtwDH1FAejrITSqfTupeWNErVepe2jLP%2FvlDzggsbgY%2BOur%2FFAf0ACzeoasvudJ2cGFW6crUXCoTMlDkZBMwLlMxS0myfWFWsi3GkQIhzS9yDP8wilmeRqNseJJ60yhYMzXU85boPXZFO2YZqJJmiMS6V2OxhUfFMeQEhXAGoLbb22QBuL%2BukNzLRGQb%2FgBkKABJeOFduWPW1XrhCKJyMvmnfaLLHZ7p2hJbcI%2F7Nf4E6l0DeS0X7oE1F6L2r4JX6vFMxYZ5r7g5y3FDbxBolZ8fjdaAPrYHK4XBKGvIK2s39aO35P5EVX90la4lxePxGbr9FjgkGjdGOOFZ6ubnsgQ6qh8urcep%2FoNL16rKsEfg6sJIBaeUwiCzhKOBwp1vA%2Fv%2Bm9nBxzdWdHPTNFFwlIQ7%2FIBHg%2Bu23GsD%2BZChkG5oxsqf%2BJXaX7inZhrmuYcPyFZYUd0Ix92ky8ozLKIPSTf6ooOcicmvKg1FkNdk9cQFfdMq229wtyyMZnS3plXLIpssNRqDvbrxYQtGcdH055pDSumhbFqHb%2Fo1DkuIfZcYLJYcdTthJqxKC0T9QExAXpZEUlGy0D99vAgXuI5kZeX%2BvrSQWfus6hCii6OgAllySkytTz%2BAqzl%2FjEgk1Dkw8oG9vwY6pgEjICk5EIH%2F0X7XWm9FkkZ5LRrT0aZp3VYIaT1T8vqrV%2B1TzXJyjFY73hQGvkplpuY0VdUP8%2FkovcyQAW0tjIMenyO0qvRZ0Bo5ChCWvlupsy09qe6k0WpbrY3uAZVMZUm0Njc9qoHpisLJQ7Hcsm33qkzp1NlciWigzKM4R1nZvRQomczWD66UPiZLhV82LKo6x4SASEM4tpMOMSMklf17dE85Bnrq&X-Amz-Signature=a052d2bbfab3b31b00a1b253f495d96f5d12899311a90d86333d1f1bba8a8df2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
