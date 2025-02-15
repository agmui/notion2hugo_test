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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Z3C6BA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICcmiUwmYxK%2BVyi8mevUHyqdl1XY2R6jdQBDdgcCfHz4AiBt3xaX3VcuJQYidrg6W8PGHyzei4tyzZ7Bto9%2BoZpVSir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMZBUzMnRHus%2BPe5K9KtwDzSH0wzdLvcumbJb2xen%2BL%2FAMQWrYuAzB%2F6m98Yo%2F7lScaqgVeDGz8qWidcOWs%2FZrLoq2F082mubscBjQBvHc%2BVowVZGvOtZt0THVOWJ%2FSolmEug5Kck2ytdGwKx7gLSGybh%2B7HaByx5hSx3yoIzX%2BbUrfw92Ace%2B8LfDC8wMojdmmiRhpxYkFzJKexjU8K6D8WhL6uZTGa4jiPcYtUrAKOWTR4vV0KS%2FPIy6zz7yfIFazjonNKGCzDGavGvN04bwNauqhjtH4ePI5Sl1t%2F1UEYCAyfDICKxUTgvKBh4F3mSzJiGLc%2BadCEDuvs38%2F8AYiln2yptzddxIennGHKuUTxNtcjQLRJGQtbPVAx1Mmz%2BU9eECR3xs0pT6vmytdyXxZXNMOnUqqbSkRpL44Xv23l9h4nyAzhAA8R7GI665rdSAGBJczXgq8VReOf3NiEXtWIByWh8%2FqnTBZCIAZMeNDqNcwR1z8ZPMkEUL3RUQvVL4lsvRMBWUhOPDuUu28lfQ%2FOPwSrWVygm319njQ7C8RK251ntx8pK6JJ1mPz3wa4mKGCevQjfJHvfJJye5AeNJWxo3JLH3h22fqlr%2FLx5I6kefwJOO4Z38G8XhbwY%2BTRbB3cGXpjWGjfTMbr8w%2Fq7EvQY6pgGseNj7KlqUiSV9aPJBsN06tN5NUS4ncvOU3i5sWfWyFfeQ6JXz%2BqdPYeD3%2FoNMJ6%2BE21X%2FDZuzQIc1WK9qTOmMT9JH6UOlFo9mC6DF5BtAbvm7JbZT8zy3q0gVQp6OFV9KX%2FQqGcpBOj6sN5tVBXXaIyFIezC6UiPEi5chySC2Xs2og7dqKzcFNqfdUqa4sDyb5e8XLSZpJy9esxxolNabuAyOvWN2&X-Amz-Signature=f8b1355fc16923ab79f9e0b677f52a52f1f411a07d98931fe587079cd4d956fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Z3C6BA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICcmiUwmYxK%2BVyi8mevUHyqdl1XY2R6jdQBDdgcCfHz4AiBt3xaX3VcuJQYidrg6W8PGHyzei4tyzZ7Bto9%2BoZpVSir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMZBUzMnRHus%2BPe5K9KtwDzSH0wzdLvcumbJb2xen%2BL%2FAMQWrYuAzB%2F6m98Yo%2F7lScaqgVeDGz8qWidcOWs%2FZrLoq2F082mubscBjQBvHc%2BVowVZGvOtZt0THVOWJ%2FSolmEug5Kck2ytdGwKx7gLSGybh%2B7HaByx5hSx3yoIzX%2BbUrfw92Ace%2B8LfDC8wMojdmmiRhpxYkFzJKexjU8K6D8WhL6uZTGa4jiPcYtUrAKOWTR4vV0KS%2FPIy6zz7yfIFazjonNKGCzDGavGvN04bwNauqhjtH4ePI5Sl1t%2F1UEYCAyfDICKxUTgvKBh4F3mSzJiGLc%2BadCEDuvs38%2F8AYiln2yptzddxIennGHKuUTxNtcjQLRJGQtbPVAx1Mmz%2BU9eECR3xs0pT6vmytdyXxZXNMOnUqqbSkRpL44Xv23l9h4nyAzhAA8R7GI665rdSAGBJczXgq8VReOf3NiEXtWIByWh8%2FqnTBZCIAZMeNDqNcwR1z8ZPMkEUL3RUQvVL4lsvRMBWUhOPDuUu28lfQ%2FOPwSrWVygm319njQ7C8RK251ntx8pK6JJ1mPz3wa4mKGCevQjfJHvfJJye5AeNJWxo3JLH3h22fqlr%2FLx5I6kefwJOO4Z38G8XhbwY%2BTRbB3cGXpjWGjfTMbr8w%2Fq7EvQY6pgGseNj7KlqUiSV9aPJBsN06tN5NUS4ncvOU3i5sWfWyFfeQ6JXz%2BqdPYeD3%2FoNMJ6%2BE21X%2FDZuzQIc1WK9qTOmMT9JH6UOlFo9mC6DF5BtAbvm7JbZT8zy3q0gVQp6OFV9KX%2FQqGcpBOj6sN5tVBXXaIyFIezC6UiPEi5chySC2Xs2og7dqKzcFNqfdUqa4sDyb5e8XLSZpJy9esxxolNabuAyOvWN2&X-Amz-Signature=fc942e6df28d7940ab041e2889bdd064ddfdcf9395c7f76c17e65bf0d5ce5205&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMDE5RR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIE1lwg1g8b2fp8%2FYHru3ND7JTNaXcwDeV0FrWVEQEzb2AiEAnuQCMhlSnwYgDyVGRZjufPxR0vr%2FoeY1usAbrKctqV0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGByNkJAtoEmLUuViSrcA%2B6nG0TrFAJtEMjhWJBd9uYTKHZWd%2BY0c5lxwHzvPFLV23XyIGWSaa4iLsxhell3Y3mEgAQsfl4eOIzJduyxLogZSd3aSv3oMurSD9U7V9%2Fu0Y6d4zbXEjWTfkdw%2FtCIa5UtWEMhY3xIG0hcpOHWhSIrWTQfFZvKU6sOwnGIJlVYdmcmiT7HOrywLQ0tXfX%2BTjnpq5iuopFl9RmZgyvIl7gmAgko20c2FESFaNPkVJ0FwONkRIohjk6rjHD8vveuSXg23y088vcEjUlHDvUXtMob2YOOz%2BghmrkKSEX0iNi7OiUgAuNqEUU%2FS4bpTXwWTMdcx3RYKGq6Ly4wsjO5ygZqXOaTtJkouW6MoAMo%2Bg7PwiSSJbK6gkM70NIbZdveYbU4Pc5syvk%2FIA0hPA2kzz9vZ2aKpXWjx559AmDLZuUsljHOIf8L0%2BquOxn9yCquJqkvuIgaL5OrdsBBAAV6oMabD6iHeGw9TCHdSr1Hgn8aspcPIot6IQfj7Af34aQggW5TDKeMykxP%2Fa5%2Bsx4WhgJIJWOGjMQ8eHvSRpbFsdqVWCa9rlHqGBXqnqSgPQ4KQ75faGETKx2CKbWeCr01ISPtOPpYxCMoXrbH5oIGziTg7kxARLXvDvtFAyrUMOOuxL0GOqUBROeTv5RcBrE2wo6tQs45yteS5W8VJvTxyeitFZsLXCATpwzs50tHgf2apthsEQLz7mivz%2FBez49xDpYi2QtAjT8jVyomguBs6HAcOc6DnO%2Bxtki8r585cir4KOyL2YgHakPjMp4g1BYfzWtE7%2FlJ6lSp9vJopsLHCibwk3OjR7Q0efdf6FqQWAglGE9Uvz6XjbnU0ifD8w6w1LpKwE0DgCRLtGSw&X-Amz-Signature=073f8eb2e4bcb0761c453a8e900c74dd0ef7c16ed5d1e5261262fa7beaa33ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG56NTPT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDDSqJDFoxldCPZL51Cx26JsbF887RtbLUG5nlw14hvYgIhAOu5IIJTRViiqpmnPj%2F7VOQ5TZ4abTHrQVB%2F9xsjBV8iKv8DCFAQABoMNjM3NDIzMTgzODA1IgwDDn%2Fs5DCurk%2BvuzQq3ANDmYSTQ1CEiEILuinG0kfcWs87wjHZKNZIbdwf6SMppZVAqe98jQnL%2FCyrgzye8R6ORY5uJ97my9WdSpdTc6aon%2Fe7uuleQkP4Z2%2FvlfLZbN81KwyDN%2FGv5doLN9LhBYPPcxpXypB4DFAzr4E2X3JOSudX82Ui6EspLA0riaiQMVbFDGmFxELeC3m6tVWJzssrSRHny3TdCMJ25VdYDvFzoQ4OdsI%2FfbpJjjbkaByrpWs1ttxGAQaVuB3K8D5zXA%2B8X%2B7qrUJgAPJUbk%2FC28%2BUxGraTu5t%2FkYAbl2MMnzXNoqg6JFuFLnxajSviNzCojEn5rCDu%2FAWTXT5L16f9ySLUE8tojJW0%2BU2mG%2BNtE6f54kL%2FpPyrobrIbwhEjqX7v2BP8czsXsF3z1UQdebKXoaEL2tJZ7CYFKDYL5G3phyNvdHYyH79qHmPGqFNHgLRZ8OJnSUx%2F6kXF3gyPSjDP8uNhp6Wq9NdZs9cInazOKpdMPUkaITfP%2BvX1l4Itf4NLP1iZQnhMcVvWaJIhWSkC7gJ3WlU9zht5OTf76ogl95yWpZzAFOTQQwb%2FcpOsnWR%2B9oN54RvEsutopo3XoYR4nCT0SAk9TNfb61riCMoJL8ptQOnzrnLEtXhaiWETDIrsS9BjqkARRJIf3fP8ZAE8paaBDqvzXszS%2BGXIkjzNVQ5jgswBrXwt9wQEqq2sJWC5hGjruOI59Z1QCPy5D7u7uVLOD8AtOiOi1au%2Bm%2BffiXJd%2F23KjJX%2B4sm75auk0qpxFwtO%2BqBYSI8hPl7TjRQu%2B6ahOijwKCj2EJh5MKQhUGCI6sN5zivyS8J6ry3QZqjcFszyl4OwIJYCA3LLe1RJzYBsGhE9bqQzka&X-Amz-Signature=fa44fe9fac39c44571343e0d4b3207d92fc9c87939ea9ac0e419ec441b4b8e74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Z3C6BA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICcmiUwmYxK%2BVyi8mevUHyqdl1XY2R6jdQBDdgcCfHz4AiBt3xaX3VcuJQYidrg6W8PGHyzei4tyzZ7Bto9%2BoZpVSir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMZBUzMnRHus%2BPe5K9KtwDzSH0wzdLvcumbJb2xen%2BL%2FAMQWrYuAzB%2F6m98Yo%2F7lScaqgVeDGz8qWidcOWs%2FZrLoq2F082mubscBjQBvHc%2BVowVZGvOtZt0THVOWJ%2FSolmEug5Kck2ytdGwKx7gLSGybh%2B7HaByx5hSx3yoIzX%2BbUrfw92Ace%2B8LfDC8wMojdmmiRhpxYkFzJKexjU8K6D8WhL6uZTGa4jiPcYtUrAKOWTR4vV0KS%2FPIy6zz7yfIFazjonNKGCzDGavGvN04bwNauqhjtH4ePI5Sl1t%2F1UEYCAyfDICKxUTgvKBh4F3mSzJiGLc%2BadCEDuvs38%2F8AYiln2yptzddxIennGHKuUTxNtcjQLRJGQtbPVAx1Mmz%2BU9eECR3xs0pT6vmytdyXxZXNMOnUqqbSkRpL44Xv23l9h4nyAzhAA8R7GI665rdSAGBJczXgq8VReOf3NiEXtWIByWh8%2FqnTBZCIAZMeNDqNcwR1z8ZPMkEUL3RUQvVL4lsvRMBWUhOPDuUu28lfQ%2FOPwSrWVygm319njQ7C8RK251ntx8pK6JJ1mPz3wa4mKGCevQjfJHvfJJye5AeNJWxo3JLH3h22fqlr%2FLx5I6kefwJOO4Z38G8XhbwY%2BTRbB3cGXpjWGjfTMbr8w%2Fq7EvQY6pgGseNj7KlqUiSV9aPJBsN06tN5NUS4ncvOU3i5sWfWyFfeQ6JXz%2BqdPYeD3%2FoNMJ6%2BE21X%2FDZuzQIc1WK9qTOmMT9JH6UOlFo9mC6DF5BtAbvm7JbZT8zy3q0gVQp6OFV9KX%2FQqGcpBOj6sN5tVBXXaIyFIezC6UiPEi5chySC2Xs2og7dqKzcFNqfdUqa4sDyb5e8XLSZpJy9esxxolNabuAyOvWN2&X-Amz-Signature=8f0316e8c53a85d55f5f2a677cb963cbb315243a178e7304b0724dceb32ab48e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
