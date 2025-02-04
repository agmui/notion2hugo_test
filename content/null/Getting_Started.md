---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EA77AY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFi%2BFy8CD3XCE6AsH996EXsaQWTAE1tK9uo8YJsZN5exAiAAzD995S2WxK%2BaVxVcbvW8I6OMJRzGu%2FwP5y2YIc5d0Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF3LfZ%2FUnfF%2FENCVQKtwDp0tmLHRlmp43Rj3RK%2BMpxab2LRYRfE0g2e%2FffVYAe%2BO225pEvcFuqwsITkLiHboHZF%2FiWmg5mkm%2BbmUdLnwIPGNT0zP2oNjXfMuKkY1aa8ax9h%2B39HMqL6azPjIkylaMWJsB9o83Kgqd%2F%2BETlXhAjE0NUl466g%2FzcCGMHpt%2Boa6jFgfoOu%2B9XqwXb0ctrRa28YDlP28pizkBl4wXGU6kP5e2Rtq9mXe%2BhFx%2B364a3AH2qMtNGM9Tgf%2Bnb%2Fw7DuBsKYGE9YRw%2FCMoO1tkDfUjFSEpO9YOOplNPYPO6BXtrnb3Bgnijp%2F8X%2BXPMI3vCY7WjFLMJDvQfziEqAtusYqDoBfJA%2BdU3WgwYCs87R2cDh2vxtoyk7Oj%2BIoYhJeNNzpywSPBLBVhdLCzAV4Wt7Z9quBWf%2B9FcPwkfXQC%2FaQqqGgsDRcxsoH7i2YEoxEvOl2%2Bzv2Xi%2BkmwQF7WPolgyRofGQj%2FiBsZ92gS2V5ttmRdfxmB6Lr33fPbNh%2Fo%2BnlbVf18oGtyA1BoUGqzaz6COEc8S3zHQR%2F3hreCFHi4w6QBvzLru04BN9846UtRbYrqLnLzpFv3dzpNTGkb3%2B5DM656bFMdPz3p6d1BXyZ5kpNVsS0u9ZpEAGftTy8wQAw4pWKvQY6pgE%2FFKO99mXd7W35SkOCcXbBTDiQLW2stNVL%2FgDqnNYCiSncqwkbGaTX51autGOQ0PdSfRFo8rUXgBPlAz4ilrwlwJ37qzAmiRJl3N7VqEOMvj8G1xBCj%2BuddOzhRP%2FRpZn2u3LGubSdqVEnViykkLa4EkdHKyg70ouXySC1JMEADOx26bF30WEXBkqarQYqCV8dG%2Be2TvCvwYaRfCniPmYcGbA4Re1B&X-Amz-Signature=b75eff3bd30ddbb9da5267ae6d19472ed026a7744ee69e64e5f395d42c65321e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EA77AY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFi%2BFy8CD3XCE6AsH996EXsaQWTAE1tK9uo8YJsZN5exAiAAzD995S2WxK%2BaVxVcbvW8I6OMJRzGu%2FwP5y2YIc5d0Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF3LfZ%2FUnfF%2FENCVQKtwDp0tmLHRlmp43Rj3RK%2BMpxab2LRYRfE0g2e%2FffVYAe%2BO225pEvcFuqwsITkLiHboHZF%2FiWmg5mkm%2BbmUdLnwIPGNT0zP2oNjXfMuKkY1aa8ax9h%2B39HMqL6azPjIkylaMWJsB9o83Kgqd%2F%2BETlXhAjE0NUl466g%2FzcCGMHpt%2Boa6jFgfoOu%2B9XqwXb0ctrRa28YDlP28pizkBl4wXGU6kP5e2Rtq9mXe%2BhFx%2B364a3AH2qMtNGM9Tgf%2Bnb%2Fw7DuBsKYGE9YRw%2FCMoO1tkDfUjFSEpO9YOOplNPYPO6BXtrnb3Bgnijp%2F8X%2BXPMI3vCY7WjFLMJDvQfziEqAtusYqDoBfJA%2BdU3WgwYCs87R2cDh2vxtoyk7Oj%2BIoYhJeNNzpywSPBLBVhdLCzAV4Wt7Z9quBWf%2B9FcPwkfXQC%2FaQqqGgsDRcxsoH7i2YEoxEvOl2%2Bzv2Xi%2BkmwQF7WPolgyRofGQj%2FiBsZ92gS2V5ttmRdfxmB6Lr33fPbNh%2Fo%2BnlbVf18oGtyA1BoUGqzaz6COEc8S3zHQR%2F3hreCFHi4w6QBvzLru04BN9846UtRbYrqLnLzpFv3dzpNTGkb3%2B5DM656bFMdPz3p6d1BXyZ5kpNVsS0u9ZpEAGftTy8wQAw4pWKvQY6pgE%2FFKO99mXd7W35SkOCcXbBTDiQLW2stNVL%2FgDqnNYCiSncqwkbGaTX51autGOQ0PdSfRFo8rUXgBPlAz4ilrwlwJ37qzAmiRJl3N7VqEOMvj8G1xBCj%2BuddOzhRP%2FRpZn2u3LGubSdqVEnViykkLa4EkdHKyg70ouXySC1JMEADOx26bF30WEXBkqarQYqCV8dG%2Be2TvCvwYaRfCniPmYcGbA4Re1B&X-Amz-Signature=c3104ecb935e384fdf2386eeed54a2a5595ff75751713bf2e10dd7ca38a3c589&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDVIPWZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIChxu2tksGZl59vXYnpwbDNIdD3%2Bsjod1WU8CxdbXbHEAiEA0pZmPeZv4Ld01sjHZLCWhoFd%2F%2B21QSJYPEiUMqKIvlwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOHnA0LwGywtX0Ox%2FCrcA85Zja4PGihx05A9T22fdpFafUpSmFSNS6whBh0nX1mFfuB%2FlWFFtM2QutY%2Bc8yCfc%2Bz5zNrPwhwlLhtLaP7hbg6MqXOtarryKJFhxT4tjVQCahpc%2F5gVYInGf6%2BSoLsUPPNgZHwhKpZiqGfpRUlhoNbUUrknoypku5aG9%2FeoIfHOw3j2L%2BlyCpQQQu9SAwzXpLejlXlwIgubH2D32l6oxtRUGSKXhbJOlTWcTZ1Hnd1kd4t2L2tROTrUTY0LhjPQuDDJpGhPWTfzBqcBeR%2FiXVx2N3J%2F10TAbOtAQwcLmxnU0GFcR1R0IpPNXHTVBohMXdl%2FqVuElTCyyrLAIzUloxodvDHjuEl4ZKovtSlpiwR3dD%2BtnP9RwkUVlXEENzXvfDmACmx50dZkh56wNGtSKxsiNfk81xNbY3kQL%2B8%2BY53mN6uenuOUH5eD8CH8EOD48ADeXQvbwMgHMVgSx06jttKFTzrT8qFZbjAf8ctbQw0HpvyOJ04SqLdotW95y3UgDHtVstzxl6PNE0TU8llBY%2B2tIZXFGCothjCjVly2Nq%2FN1L%2B38C2aKWMs7fjVGCl9%2F1lq3gzm7P9dCQfUcfOwVbdsm0mWs%2Ffpwk6Y5aFADmFlYTPnC%2FSSzmo4jtRMKqVir0GOqUBXECg9OHFKAMPL2sEQ5SvqSiQsoiAtI16AtpZ46fMD%2BG9byxsUsyDi%2BLePT%2BXvdQOEe0fbWQt4BbHRUddv10Hz5we9kJd0rjSFJSYJf7Qboeo4GlzWsQzxbFXvh1fB0r7plzVFrWNdT3fGo7pLTvmW4ik8zCjarSK8yKJ%2F7KuOP2O68Zoui2j8NMt9OXe4eZS4R26rUQtGxZEkH%2FSObAUlfxWe1j%2B&X-Amz-Signature=1f0a6a0ff81057044342c674ce79e6e7d7dbfa9cb1ff5c624ef37d845d143e62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBMCXMZ3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE8dOe6P%2BvwKpQ%2BJ0Aod%2Fijhw0RhaqBt0mvMYj2AveViAiEA1QpGmEOfLHE8vRajf%2BgH8RITbpL3rquIxvv8Viag4ygq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGtTlPmRH8QQB4lhlyrcA7J96Nf8M7xhNHaPwWCyOkCR2We9gB5qxrEhwyjHSZUPHRMBqHFcvpXRF2DYPyU8I2OPrVL8i%2BzzgNi3isdU1UY2V9KWteeHwgYxelUMgW3piI8j1T8N2UW0SeqX5wEFM4sN3bjVYt242Bks%2BC1MBGZ%2FHv5MJ7YipQrRPNFHMq4ZeU6v3rWuMPL0fXegQCCmUBdqfsyK%2F4X7VJFMJouUSWkKgauMcBrEqRmsHkpysGYax9qR34VJp2M9WKfmALaFbyF0gavehQ6J8wl2Y5BXXR99mo1zxmDCq%2FOiyTlvD%2BSFRn7msjJ3A%2FEOD6sXesc2336%2FA4q%2BDuB9nc9NNWJGhe7Eg79KjCCBG6WnUFpdf9%2FRhqOLeCuzvW3V%2F%2FfXJZ3TVddXNZh3Mrr%2Fim%2FA2tBTS%2F8l3YKyNEWrcN4Gv3lVcdgJfXyW5zlhdz5pcANZiX7xv2TWOYOT4u8wynPmL5OcyP4Fcz%2FCMgADqtK5Lh6RR%2B5rHk%2BdKGV24t7r1uCbgiDhEH7cORbgIhxOVJ4HZujbcWvDjKrPvh4in5jYD1%2FMrCXL8M3CVsJ7eTfMF%2F9lQUEXcP4lhEwapz3oCludeNFlCJ4nP%2BKIdYf955wA7AWCKJBjDElQmzdeKjnIFeTeMKqWir0GOqUBzR%2BddG%2BKuJe9vThluqNI3IC%2FzkgakxaSawxA0%2BHZx6EL4M6X5xW%2F%2FFwLTea8bIuDVPbBKfJJljAbqcKVohEq5qavwW5OpcEB0lWGvCPKOktvN3Cu68iq9dcgqbHf%2F6FZg2YzZRJ8FOVVoS77%2BgUXV047y1SRrOBv6pfR8dVvlosSccViRRbqSGm5r8pNn5GlylfRBg3Tt07CSzQnMibuRGfpI81b&X-Amz-Signature=a7c4bb620bc3ae7724d0055dfd0a6a0e015add6d3be5aef56f4c6e5b6115f511&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EA77AY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFi%2BFy8CD3XCE6AsH996EXsaQWTAE1tK9uo8YJsZN5exAiAAzD995S2WxK%2BaVxVcbvW8I6OMJRzGu%2FwP5y2YIc5d0Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMF3LfZ%2FUnfF%2FENCVQKtwDp0tmLHRlmp43Rj3RK%2BMpxab2LRYRfE0g2e%2FffVYAe%2BO225pEvcFuqwsITkLiHboHZF%2FiWmg5mkm%2BbmUdLnwIPGNT0zP2oNjXfMuKkY1aa8ax9h%2B39HMqL6azPjIkylaMWJsB9o83Kgqd%2F%2BETlXhAjE0NUl466g%2FzcCGMHpt%2Boa6jFgfoOu%2B9XqwXb0ctrRa28YDlP28pizkBl4wXGU6kP5e2Rtq9mXe%2BhFx%2B364a3AH2qMtNGM9Tgf%2Bnb%2Fw7DuBsKYGE9YRw%2FCMoO1tkDfUjFSEpO9YOOplNPYPO6BXtrnb3Bgnijp%2F8X%2BXPMI3vCY7WjFLMJDvQfziEqAtusYqDoBfJA%2BdU3WgwYCs87R2cDh2vxtoyk7Oj%2BIoYhJeNNzpywSPBLBVhdLCzAV4Wt7Z9quBWf%2B9FcPwkfXQC%2FaQqqGgsDRcxsoH7i2YEoxEvOl2%2Bzv2Xi%2BkmwQF7WPolgyRofGQj%2FiBsZ92gS2V5ttmRdfxmB6Lr33fPbNh%2Fo%2BnlbVf18oGtyA1BoUGqzaz6COEc8S3zHQR%2F3hreCFHi4w6QBvzLru04BN9846UtRbYrqLnLzpFv3dzpNTGkb3%2B5DM656bFMdPz3p6d1BXyZ5kpNVsS0u9ZpEAGftTy8wQAw4pWKvQY6pgE%2FFKO99mXd7W35SkOCcXbBTDiQLW2stNVL%2FgDqnNYCiSncqwkbGaTX51autGOQ0PdSfRFo8rUXgBPlAz4ilrwlwJ37qzAmiRJl3N7VqEOMvj8G1xBCj%2BuddOzhRP%2FRpZn2u3LGubSdqVEnViykkLa4EkdHKyg70ouXySC1JMEADOx26bF30WEXBkqarQYqCV8dG%2Be2TvCvwYaRfCniPmYcGbA4Re1B&X-Amz-Signature=109ae81d6e2798a577fa1e1014849dad9b3e38dd9c893194974a6be05d1e49d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
