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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7BD5L2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC2akvye1H0nAMPphy2LRFt%2BoImvlLzApuQ0YIAfBJvNgIhAKsA%2Bnl%2B676XbPbAfnEvvl6UdEPw6lwh%2Blyn64N6ajcaKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbSaD28is4f%2Ffckvkq3AO1xGtQzdQ7hQInDK0TR06Mzc49OSO6JZoOEPxjPR0GjV528Z4pgCZMpOFnnEf1honJBo1NWbs%2BnqTHzg2lnirHiOLkVTDlUBNBQrqBF5qTvaGAy4bNpXPw80uGxwUiuMZo0%2F1oMd3PGJVEqjmn9VDSt%2F5uLYW9ZPhvek8KgkGEJuMgjqbrNT5TAP5Ng6nc1qpUmKaZkLn4uEU2aLKqcvUWNxIy7HJh6BlM2YNpSCaog5H8jEzaMfidWqkbgmRo6XXrcjzKIqA7tc0iHpn0iRoIODRTIYrMFXgZJmX4RRUdojtqQ1NPG0sLBmG1IsdGKcRAuxIpO8tNFZoT2yeOhG1BNsZpgNjcsYtZ%2FKXTjKpJir7qSHZS858trtNtf%2FuqL91IzxTpUXmuoIWzQl23lYK%2FxgE4zE0ULi6lWCG8sAt%2BfIlKOOCUt8jSOd39VExbqgFI4zo1mkzajeW9oH7OqjzXhXthql%2BrmqCC4blw4m3gR6zsjtKgVXeqdCwd12mobdA3oeYqZ%2BURuNu6JUucRN0J5lXK5c0oRscH1af5bOY5Xa0lbFXfLQ2d%2F59cqRWgZPsMBGrcfe9HYIE97HtehIGwl03YmEhCZCVLN8tOfCt9S9r8y9JvNL584ggYLDDqstm%2FBjqkAUyPrH2W3RoBmWvOFWwdW%2FlAaZHhKdvwX1JfBTrXvHfaBcEM7BeKZZngsYYcxwFdxEp69kD2aGb4HMy24rmHiFpUQVrvj6adRmFo19HGez9GDhI59RM%2B74uWyZD6w7MhBHeA0ItepXb5Tzvl2IyAGODB3rEA1W75IsL1RgdFkdyELOET1EUxB5%2B2kfukjEk8t%2FYKIjXe7Mz8YAOCZ%2Bq6LxRENstR&X-Amz-Signature=f7ba20d56d973172065b812c3912ee1ffa6ffa7f54d57f88a225374dc50ea834&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7BD5L2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC2akvye1H0nAMPphy2LRFt%2BoImvlLzApuQ0YIAfBJvNgIhAKsA%2Bnl%2B676XbPbAfnEvvl6UdEPw6lwh%2Blyn64N6ajcaKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbSaD28is4f%2Ffckvkq3AO1xGtQzdQ7hQInDK0TR06Mzc49OSO6JZoOEPxjPR0GjV528Z4pgCZMpOFnnEf1honJBo1NWbs%2BnqTHzg2lnirHiOLkVTDlUBNBQrqBF5qTvaGAy4bNpXPw80uGxwUiuMZo0%2F1oMd3PGJVEqjmn9VDSt%2F5uLYW9ZPhvek8KgkGEJuMgjqbrNT5TAP5Ng6nc1qpUmKaZkLn4uEU2aLKqcvUWNxIy7HJh6BlM2YNpSCaog5H8jEzaMfidWqkbgmRo6XXrcjzKIqA7tc0iHpn0iRoIODRTIYrMFXgZJmX4RRUdojtqQ1NPG0sLBmG1IsdGKcRAuxIpO8tNFZoT2yeOhG1BNsZpgNjcsYtZ%2FKXTjKpJir7qSHZS858trtNtf%2FuqL91IzxTpUXmuoIWzQl23lYK%2FxgE4zE0ULi6lWCG8sAt%2BfIlKOOCUt8jSOd39VExbqgFI4zo1mkzajeW9oH7OqjzXhXthql%2BrmqCC4blw4m3gR6zsjtKgVXeqdCwd12mobdA3oeYqZ%2BURuNu6JUucRN0J5lXK5c0oRscH1af5bOY5Xa0lbFXfLQ2d%2F59cqRWgZPsMBGrcfe9HYIE97HtehIGwl03YmEhCZCVLN8tOfCt9S9r8y9JvNL584ggYLDDqstm%2FBjqkAUyPrH2W3RoBmWvOFWwdW%2FlAaZHhKdvwX1JfBTrXvHfaBcEM7BeKZZngsYYcxwFdxEp69kD2aGb4HMy24rmHiFpUQVrvj6adRmFo19HGez9GDhI59RM%2B74uWyZD6w7MhBHeA0ItepXb5Tzvl2IyAGODB3rEA1W75IsL1RgdFkdyELOET1EUxB5%2B2kfukjEk8t%2FYKIjXe7Mz8YAOCZ%2Bq6LxRENstR&X-Amz-Signature=7ab6342115bc7bc9e5688ac18850c5a7239c39ebd19a8581f485d44bf3fb2bba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZ7XTWB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHB5A0Pta0fRN8i1KYyrP%2FzkT52euZb4qvXP7WB0at00AiAscUAtVTTwC1VbVaE0CqpK%2BtunzhbVc1cuAeja%2BCrUnSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BOWZ7ztO2U3tLMNeKtwDcDjD7kVJgxIFzW%2FMSZCC6ZZLI9zT07LxkJx6kO774ovUFM%2BjBRzZzcuP1cPq7UQFwdzAUD9F9vlpnBEm%2F7iBVlYL504uG1vZt0ZBiKqg4eiYlYjl4gEionu0lRUmfoWWrmVBZ0NtWovanR%2Bpwbi0%2B4W5Pt1ANaPbdRtIcHTGQtCN4DKGSP3w%2FG2N3parXyKaJB72%2FQHnwH9DKrAjzZdJ%2B8EMgbcTaiAA%2B82daG5LGo8hS4vJUgR0dpkDjRYFmJR02%2Bq9ZJbPmyKZg5bv1hX8Bv9ODSV1nutckKcULkzmPZqnz4bokbMinnj68utj5oA1zDHmMU6Ysc292NOjzGCnV0lWpJRoRRP2k1Gj%2F14zLhNEubzyn96CzzPxGWj3%2BuAK7XMVGfWBmZWaXTFgCn1xtLUXCLIKC8dODOOFLdj73Mh8aTa%2B3H9jBBnZZcdlaP87FfK9FdY9r8150Nc15WzaNK1wMrOdOEeUS498ABY4%2BV9uvPxD0UBfv%2BhkaXEq01xe%2Bpe0R77AJgvpjbv6kaftQE74oURH3RboFkSKwxOWShEE2uH5rbgUKfYvIMq0Yi9MbyFTomlrtvo7xjTZcQiOV%2FADUkjbDEsi58hm6ZUR68Rp6Pn%2BxhI%2B1vIBAbow6bLZvwY6pgHgCYvidX7BrM8OXXoR5FGumssefejvT0YZF2vFZ6lBBFy4oczqzK742s3NElQZp46J2Siza3zQG9UnXMLutpUB3bVC1zdMo%2FTIH7mzsEp7scbyazEB313DvNu6EEZltYXOfcCA7QU2qdqCMwk9o194NtZo%2B4AeeQTzqDhAqRu7dF9Mw%2BDVL3g8l6amLFUZikg0E7sdE%2BU7MqxswJRnpYd%2FdEtr173m&X-Amz-Signature=52e5260a7c19982a1342aed81a3812a81042f59a351a4be9218617061aca4b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q2GJEK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD20akOea2LRCQ%2FKFXXxDjnUoUfawIinDdcdNab7j4L3wIgCuxfxZupYoonWjWnxXV%2F0c8HQ5j5KJ5QSdP0%2FiofRFYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu8iHC913Z3yTQRsSrcAwFAlq%2Bub4lwAiasaDSPRM5Ts%2F60YheRwjagePfgm5dP2izS0bzM9hJ8il5eWbq4nAoslNxVolV1Jjd3cIAvDJb4YfDj3mtOnQBiksjZuWUswzIIVWWM9hMchREXxnrVeOGxEMbUHoWbeGiKuNrJqX17aZettOCO32Q59jSjdf719dlrpWUo9tKdBX%2BCvi%2BIRxmQ7EzdxhnSGXYzhpNSmM4CjqDX%2BrPHCQ1fBPxKKl7Coq25e38uzAaTddiJXjpETsEWv%2FyzWjPALKL%2FoaMoxeAVWZA7XhSwZm5FlSXiwev%2BG7yFvBUoOs142QFqfDa%2FvPOaovvO%2FwuoF7A4hofp204OlJ16z4lpNZWMwzwcRsrRm2Lqgm0vqKjzIOHh4lZct08%2FyrwxLpGphoEGfjNYdh%2FM8LH4rxUPvlnb9sLTU3L0tYC4i7jciPBRoGDhn6ss8jIc5pSUxjSHTLZZ2iBQMdwSMyA50VrUVwpZN%2FxfOCPGiJD9oqQeBxDlSnKzC2%2BalM3vG5FjF%2BUBo5rIb0Qm5BNOFJsXJzW2ltkoOozpTol1PNBXKKyjFA1O4U7Yu4lGGyw90wemLwT3CJsadsONTjiNAeZsu7iM2ha8HxA91Zk6MH2U%2FzLIssOir2i4MMmy2b8GOqUBs90uXHnxNbdqEyr6mYY226dZ6KsxO4%2BcvvKcsWrQFpUbg71W%2FHbXmzVJOFiZs2A3Dsvz0I%2FCsJ7XxYLjJdQd5MVk0jhCZbbuvpqf%2FiMvC6euP1ZfRqQzquLM3%2BbLTpDumxDVPSyn2rj0q4NHSWg5WxgF%2FyEDzA70acLG0G2MRnMz6lnhJAADCPbsolPgP49WiSP7VHnRjjTrRjHE1E%2FMeTUAOYO6&X-Amz-Signature=8496876709a67468cd5b2799f132e7b4983f29b9ff04fc2104330bcfb8f0ad2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7BD5L2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC2akvye1H0nAMPphy2LRFt%2BoImvlLzApuQ0YIAfBJvNgIhAKsA%2Bnl%2B676XbPbAfnEvvl6UdEPw6lwh%2Blyn64N6ajcaKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbSaD28is4f%2Ffckvkq3AO1xGtQzdQ7hQInDK0TR06Mzc49OSO6JZoOEPxjPR0GjV528Z4pgCZMpOFnnEf1honJBo1NWbs%2BnqTHzg2lnirHiOLkVTDlUBNBQrqBF5qTvaGAy4bNpXPw80uGxwUiuMZo0%2F1oMd3PGJVEqjmn9VDSt%2F5uLYW9ZPhvek8KgkGEJuMgjqbrNT5TAP5Ng6nc1qpUmKaZkLn4uEU2aLKqcvUWNxIy7HJh6BlM2YNpSCaog5H8jEzaMfidWqkbgmRo6XXrcjzKIqA7tc0iHpn0iRoIODRTIYrMFXgZJmX4RRUdojtqQ1NPG0sLBmG1IsdGKcRAuxIpO8tNFZoT2yeOhG1BNsZpgNjcsYtZ%2FKXTjKpJir7qSHZS858trtNtf%2FuqL91IzxTpUXmuoIWzQl23lYK%2FxgE4zE0ULi6lWCG8sAt%2BfIlKOOCUt8jSOd39VExbqgFI4zo1mkzajeW9oH7OqjzXhXthql%2BrmqCC4blw4m3gR6zsjtKgVXeqdCwd12mobdA3oeYqZ%2BURuNu6JUucRN0J5lXK5c0oRscH1af5bOY5Xa0lbFXfLQ2d%2F59cqRWgZPsMBGrcfe9HYIE97HtehIGwl03YmEhCZCVLN8tOfCt9S9r8y9JvNL584ggYLDDqstm%2FBjqkAUyPrH2W3RoBmWvOFWwdW%2FlAaZHhKdvwX1JfBTrXvHfaBcEM7BeKZZngsYYcxwFdxEp69kD2aGb4HMy24rmHiFpUQVrvj6adRmFo19HGez9GDhI59RM%2B74uWyZD6w7MhBHeA0ItepXb5Tzvl2IyAGODB3rEA1W75IsL1RgdFkdyELOET1EUxB5%2B2kfukjEk8t%2FYKIjXe7Mz8YAOCZ%2Bq6LxRENstR&X-Amz-Signature=2815fe32d2c55e2cd5604a6457dd6780d9a13514b24b17646e717920a2cf5918&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
