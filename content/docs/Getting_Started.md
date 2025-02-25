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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDYNNCI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD%2FfWuciUZ1YAlb0%2BHIJx7TrzLq%2BihRzD3q8r2o5C3nugIhAJdJNqYwWz1XetHbxECNwv%2FO2D9YuLcOdOIKnhkOw3nnKv8DCEsQABoMNjM3NDIzMTgzODA1IgwwPEAI2NyudMXpWuAq3ANt9aA9MZio5%2BTbQy7KZdJgqaQtMdMMBLvzGE9hkhBk5yiKr%2Bs6GzC23KjlCOQn0gY10zFRyQLf7UiV6Cg89dp%2FMbmgOQ9nvHiRNRrwAkFOycI%2F0gSAk0gv6j0T32KO0OQk0uDVf%2B5EfvOs9XeEl6Em9iRJLFMvENtqAIJKkX0GQq2rI7zbo18gWLwCa0%2F0YX3wPlGmuXkiLEpB5LaEA6iNBhTiFCwzyz33q9BQ9FX68dgP9tcBM8%2BXoyiJ8GcAQH0yJK03x%2FlfWayq4zST8Wq%2FKDpu4DQqbXPmF5N3W41wVUp5zFpNgQLzojwftVDLeDAYBDNng5icMs3FBojjJYv1ukWgQDGV9RaWTb3c4gE0Y4U7IF%2BcXMQ12V2rzza%2BxcKgndB4VyJOQ%2BZolZzOv3EoRnBqR6bN1emtIM6Yh3j7j0UTQm1auy3kjQlsVwfaZW%2FZwh4WOVu5wk2Vcn%2BoZvRsh3uir0uamFB4l%2Fl7nm2Tre8kS7NehnbbayO%2BEKQeor036kt97D1UvAqGUz3SRdIpOv46ZnsG6EjJ9dJiSDYmw48r0q2lOjSKHuK%2BpfnjnPW0%2BPtUX8wm8slFtfbyxVEU1ATN%2FvK561QXqCxuK4dHguGxF6pxwzVJUclxwzChjfi9BjqkAQPzidEVnaToZYWsX7jcA4fIOKoj%2FicfUYgzDB%2Bz%2FT2EKhCAfHYNuSiYoR3MVa0Hu4lUg0C8fezmYBr%2BpspsEpVzAs8vlOIalJUas0ZtZkqojUIGw9155ehP37Lk2ENJWcSJvXZPmFFq66G9t%2B%2BCkmvJvEk1cXo4w5nR%2FXpWY6H9WSxKCw4136B4jYeMG3LZv7t9AvEgcQt%2BjEkul54a%2FjhaWyi3&X-Amz-Signature=f2a56ac54d27700cddcc96f593f3e159f63a92c8173c41183591cb8d5c7d85ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDYNNCI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD%2FfWuciUZ1YAlb0%2BHIJx7TrzLq%2BihRzD3q8r2o5C3nugIhAJdJNqYwWz1XetHbxECNwv%2FO2D9YuLcOdOIKnhkOw3nnKv8DCEsQABoMNjM3NDIzMTgzODA1IgwwPEAI2NyudMXpWuAq3ANt9aA9MZio5%2BTbQy7KZdJgqaQtMdMMBLvzGE9hkhBk5yiKr%2Bs6GzC23KjlCOQn0gY10zFRyQLf7UiV6Cg89dp%2FMbmgOQ9nvHiRNRrwAkFOycI%2F0gSAk0gv6j0T32KO0OQk0uDVf%2B5EfvOs9XeEl6Em9iRJLFMvENtqAIJKkX0GQq2rI7zbo18gWLwCa0%2F0YX3wPlGmuXkiLEpB5LaEA6iNBhTiFCwzyz33q9BQ9FX68dgP9tcBM8%2BXoyiJ8GcAQH0yJK03x%2FlfWayq4zST8Wq%2FKDpu4DQqbXPmF5N3W41wVUp5zFpNgQLzojwftVDLeDAYBDNng5icMs3FBojjJYv1ukWgQDGV9RaWTb3c4gE0Y4U7IF%2BcXMQ12V2rzza%2BxcKgndB4VyJOQ%2BZolZzOv3EoRnBqR6bN1emtIM6Yh3j7j0UTQm1auy3kjQlsVwfaZW%2FZwh4WOVu5wk2Vcn%2BoZvRsh3uir0uamFB4l%2Fl7nm2Tre8kS7NehnbbayO%2BEKQeor036kt97D1UvAqGUz3SRdIpOv46ZnsG6EjJ9dJiSDYmw48r0q2lOjSKHuK%2BpfnjnPW0%2BPtUX8wm8slFtfbyxVEU1ATN%2FvK561QXqCxuK4dHguGxF6pxwzVJUclxwzChjfi9BjqkAQPzidEVnaToZYWsX7jcA4fIOKoj%2FicfUYgzDB%2Bz%2FT2EKhCAfHYNuSiYoR3MVa0Hu4lUg0C8fezmYBr%2BpspsEpVzAs8vlOIalJUas0ZtZkqojUIGw9155ehP37Lk2ENJWcSJvXZPmFFq66G9t%2B%2BCkmvJvEk1cXo4w5nR%2FXpWY6H9WSxKCw4136B4jYeMG3LZv7t9AvEgcQt%2BjEkul54a%2FjhaWyi3&X-Amz-Signature=5d3180500bee66d7a2b82c67155a79c97526015748b02481979694e28f05b71e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DB7Z3KX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDWxi%2FzwiGhTO4td78gt7oiSg4LKeLr%2FWVzPt%2B7VG1%2BUwIhAOztHZwgtD6CxjK7N6pzAdei8MIrWd83HMY5bIQvuyJEKv8DCEsQABoMNjM3NDIzMTgzODA1IgydIJvQZuM1oSq1wX4q3APdqM%2F9odZM9II76hCaRrB4toe1zvzTia05nLuwdDQ0SvWYj2ufJ4KKX502DCHPgzuPGAletHOBDAYg0%2F%2FaiLsrICQAnnqR492wH2FwwgNvflmZbZ4epnqyCiygf26q2kxocf0ubhkmC%2BNHBXD58C1PrbFbkYaQSfHBgQQ7Q8y35Hbd%2B6ccLc3Sfu%2F%2FpfEPuXlOhMm3XdGrHBsokLNH1YArFXkTFn5dYiIR6BgU3jtEEArbvNeaC%2FlQGCHvftyf9yxhAQ7osjI17esPdBzEd%2FMjgcnrUxUyANyaUu0S3hpsjlcNKaji61kH2ieHV%2FK%2B4QMW2Xlhp2j19qFGDkyZhLDKvn2jkbdh%2FbX%2FLF8oTzPZGtwPQLrk7F5fkvis8kA1DP1h3XnhJG3%2FSncXwL7Go1kB8p9QNAE7fHjVFaBVPWlLuDuefxHpaSp8h%2B0LIW9eIYyzmxicewKdSqBWIDbz%2F%2BieKJZxrhCb9jZqgTza8c09wchv7B3JUqcOyVJ21sSflxklavumYen1rZVArFwCN6ykBdRXCHVpTmISjUyayAn5NKC8gEHnfZL9F0%2FLgMpGJaOCvFPWyCA%2Bm0v7%2BMOCFlA9%2BeWzS%2FGC6IlUhKWGH6vHf8LilCkBZqXWm5aNqzChjfi9BjqkAemE410YPmM0Vkz%2B95Q2Y9cV4%2FUtoL1Q%2BVnrN2ielzPDZRiWo9qR713JLjmED0qYha65dFQT2i5zwcLbli2smw5VzacbRuCqKkjM1n6WqOJV9W%2BciasbJfRdGiIwQ6SGUnyvJgmOzgwEyYOPoLNNQF42oMtNZ5Q3RooYI7n%2Bj58UQ9jpZ0TIk%2Bz0DbiEFEc7l2jfaDMDqld6TlzK87mFKLeqMIol&X-Amz-Signature=5dfb4493bf07446469d5ec8c6864cf7e3ce069c301de56712908de52f835263a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6DHKDG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFPLkh%2BiM7l0CIghT4X7RBlizGOo1BQJlc2CD2Ju%2BzCBAiAlHGH4qNQZo9c7JdNCZyM9VbMSffCZTZ3yO0upbhoxKir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMUf2llzzhjHupsCmjKtwDCAaISSBssQiQgG5CRQWPHdivlD%2F8eaS8jvEVw7ZxqBfyTlt9uCkfgv3h1l1R4xWqj2kTDI9cLXqb%2F9%2BBcTytKeBYjBnj5Ie6yzPO5lQAa%2BG%2F7zloXR5PGT6EEfbtYmlB5RoEb1FTCis9b%2BTbInzd%2FPrMa5dD8wpc3sZILlRnFDxh31j14Vi5zc255etK%2FK5irlP6gG4rSwZOAqWB9EpWlR8L2ryy7kWO8%2FP9y%2BzpxmuBRenNrtInPPPWwZr2sQ8YU9O0TlHAOyZNHPMj60Lw%2FqtzszQOwjrIUM0rpiPmiR9XpSLsIa3V8KBAvnclwHFwkjiEqoLvp9YnJ%2F%2BpZpRxtwaMtj6NgzFA5CdPW85SA%2BR8qd3%2BoeUYbPtfVlAUjfhowbViekW3neyB97Ww1YwhfuZ0pg2waUvYESkmTyiFKgMC0VUv9ATIXfXIV3OlLlBD5d638SlNbYSLONgFBcvl6cCeMSNXngM1CY1S6G9kw9uJsVeSoS9P5n2UFrKpbwahUINPlwVJ%2FMfqMGjhttshxNtxHE37C34UIdlPt26E8vswtbLCZIwBYOxqOULJCn3sQ08DJFaBKzyhlX2zmWTyE96TR1lC5XJS%2FJ2RUWyCWnrnBRHLxBg6DoInZD8w5Iz4vQY6pgGTcTHIP9w%2FV9pw1%2FhCJ6N83T5fuiULB%2FQTXNa%2B6iYwNW8k%2FhPz9BK%2FN%2FkxqbJ1%2FGGJg92HykAt8wPYbtsVPlNkbEUUd5VoFEUo%2BUVMyjpLd3%2BUvm2Y0uP0qI1x7hF3XDUzM3nwGV48AebEQfmfbply3%2FB4cYKNBdTdDDRFhSgch7oQABtfzuVJmI4inN%2BkG2sul5MgXNVqrZ%2FY%2Bwp5Q96tMqXTuUwq&X-Amz-Signature=e94f0a115c3d97872160de5d8037bb00596167bcf0f1388d67c9a0a48b71f6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDYNNCI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD%2FfWuciUZ1YAlb0%2BHIJx7TrzLq%2BihRzD3q8r2o5C3nugIhAJdJNqYwWz1XetHbxECNwv%2FO2D9YuLcOdOIKnhkOw3nnKv8DCEsQABoMNjM3NDIzMTgzODA1IgwwPEAI2NyudMXpWuAq3ANt9aA9MZio5%2BTbQy7KZdJgqaQtMdMMBLvzGE9hkhBk5yiKr%2Bs6GzC23KjlCOQn0gY10zFRyQLf7UiV6Cg89dp%2FMbmgOQ9nvHiRNRrwAkFOycI%2F0gSAk0gv6j0T32KO0OQk0uDVf%2B5EfvOs9XeEl6Em9iRJLFMvENtqAIJKkX0GQq2rI7zbo18gWLwCa0%2F0YX3wPlGmuXkiLEpB5LaEA6iNBhTiFCwzyz33q9BQ9FX68dgP9tcBM8%2BXoyiJ8GcAQH0yJK03x%2FlfWayq4zST8Wq%2FKDpu4DQqbXPmF5N3W41wVUp5zFpNgQLzojwftVDLeDAYBDNng5icMs3FBojjJYv1ukWgQDGV9RaWTb3c4gE0Y4U7IF%2BcXMQ12V2rzza%2BxcKgndB4VyJOQ%2BZolZzOv3EoRnBqR6bN1emtIM6Yh3j7j0UTQm1auy3kjQlsVwfaZW%2FZwh4WOVu5wk2Vcn%2BoZvRsh3uir0uamFB4l%2Fl7nm2Tre8kS7NehnbbayO%2BEKQeor036kt97D1UvAqGUz3SRdIpOv46ZnsG6EjJ9dJiSDYmw48r0q2lOjSKHuK%2BpfnjnPW0%2BPtUX8wm8slFtfbyxVEU1ATN%2FvK561QXqCxuK4dHguGxF6pxwzVJUclxwzChjfi9BjqkAQPzidEVnaToZYWsX7jcA4fIOKoj%2FicfUYgzDB%2Bz%2FT2EKhCAfHYNuSiYoR3MVa0Hu4lUg0C8fezmYBr%2BpspsEpVzAs8vlOIalJUas0ZtZkqojUIGw9155ehP37Lk2ENJWcSJvXZPmFFq66G9t%2B%2BCkmvJvEk1cXo4w5nR%2FXpWY6H9WSxKCw4136B4jYeMG3LZv7t9AvEgcQt%2BjEkul54a%2FjhaWyi3&X-Amz-Signature=3456e8e7343f63b82133c944a7589f2aa7fd12f79a88b9a01cf3614618a826bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
