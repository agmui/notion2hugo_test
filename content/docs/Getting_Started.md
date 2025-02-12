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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D3KSQT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIyO9ObE%2BJhuxWtjK0t6Uzm5eXVWkBAxrQiva7I1RNwIhAK5pcQIGqMxBxQtDakaQJR04CeAlylB5ndxMXKnl8i0DKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOJGIJI3HU5NUA3bYq3AOxCB308Y9HL0kOvtIYZceEGwSr%2BhP6saQ7kYctgZJnH6l%2BqnNvhuiw3XEGDzYElZtSGmX6pQ1i5DgO8pkcFz7xYC1TwAW%2F%2BhfMCy%2FuMFfzWU3zzDisFxdS%2BcgpmrfuwQq2yFMJ%2FkBMC2oUKWE4gh9m%2BPlJgE6hKH7XmJi0tstGZ1PNrYvOGbbf1jt2uHONxOaKOMVOO9rxToTGCT%2FrJ4WzAUSC5egfC%2FQkPdHISVWVKVxVAJKhU9uA7dqj9pWVwpjNS%2Fv8hsnAK1GDNG6nwpbImHX0dW5bYKGSKara4WYbt3wlvBxsV22Xuf34LOi2rw3cy69BExpeEOxDRGrBHAs8BtkQSH2Uw5ZtqJzWlHjIUg6XbenfD0olGSSy7tOcn3Rs8PAFQ02ytTkJaa%2BcnrrYHMQho6V4nVAk43ogT2OYaw8x7%2BK13CnT3JsEOk8bR9aLhaemMBJYsAR9k0vP2QI6608BSDyJfpK03Gx4RUSOAMoEhESbKS29tT24YRJe6zzpLWKnfjVmhijWG9Tvm3h%2ByLOsTPeRJMRsQ7R3O7N%2BpQe3EnBNd92UHquCvGTr11aNhBJN9o9TowscdFAc8iI%2BEfqJ76yhuDA9hyAdFqRP1DGpnz4cFMaeqc3pFzDykLG9BjqkAXW5KQsXgRYlYkDIvhV9bM8SLxfiRIR1s2zFfxznnsQOe1KiZb44XpzXFdxKCtuJvQexPf%2BgP9%2BBEoaMqm4fKwcnI305hyLeyuGPpWEUiqfCBgUXf1Jb6NAHUobChqcGw7kVuC%2FsUuR0DJl15thU9qYLQd1cXU%2BuNnlMSc9P7kEfCY3vBN2yQKH8Z4vN5MrQRxvGN%2FGaigZUH9Fifp3ozWX0py5m&X-Amz-Signature=0979df4378f2e85ee7fef8257846071f29e0233d763701f41832cf966a878449&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D3KSQT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIyO9ObE%2BJhuxWtjK0t6Uzm5eXVWkBAxrQiva7I1RNwIhAK5pcQIGqMxBxQtDakaQJR04CeAlylB5ndxMXKnl8i0DKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOJGIJI3HU5NUA3bYq3AOxCB308Y9HL0kOvtIYZceEGwSr%2BhP6saQ7kYctgZJnH6l%2BqnNvhuiw3XEGDzYElZtSGmX6pQ1i5DgO8pkcFz7xYC1TwAW%2F%2BhfMCy%2FuMFfzWU3zzDisFxdS%2BcgpmrfuwQq2yFMJ%2FkBMC2oUKWE4gh9m%2BPlJgE6hKH7XmJi0tstGZ1PNrYvOGbbf1jt2uHONxOaKOMVOO9rxToTGCT%2FrJ4WzAUSC5egfC%2FQkPdHISVWVKVxVAJKhU9uA7dqj9pWVwpjNS%2Fv8hsnAK1GDNG6nwpbImHX0dW5bYKGSKara4WYbt3wlvBxsV22Xuf34LOi2rw3cy69BExpeEOxDRGrBHAs8BtkQSH2Uw5ZtqJzWlHjIUg6XbenfD0olGSSy7tOcn3Rs8PAFQ02ytTkJaa%2BcnrrYHMQho6V4nVAk43ogT2OYaw8x7%2BK13CnT3JsEOk8bR9aLhaemMBJYsAR9k0vP2QI6608BSDyJfpK03Gx4RUSOAMoEhESbKS29tT24YRJe6zzpLWKnfjVmhijWG9Tvm3h%2ByLOsTPeRJMRsQ7R3O7N%2BpQe3EnBNd92UHquCvGTr11aNhBJN9o9TowscdFAc8iI%2BEfqJ76yhuDA9hyAdFqRP1DGpnz4cFMaeqc3pFzDykLG9BjqkAXW5KQsXgRYlYkDIvhV9bM8SLxfiRIR1s2zFfxznnsQOe1KiZb44XpzXFdxKCtuJvQexPf%2BgP9%2BBEoaMqm4fKwcnI305hyLeyuGPpWEUiqfCBgUXf1Jb6NAHUobChqcGw7kVuC%2FsUuR0DJl15thU9qYLQd1cXU%2BuNnlMSc9P7kEfCY3vBN2yQKH8Z4vN5MrQRxvGN%2FGaigZUH9Fifp3ozWX0py5m&X-Amz-Signature=cc4aa93ef5edae43c024855eb1f411415e8e2a0f049487268cf5c5ace8cd74df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL64HN5L%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwGz%2B5TR4Bb27kbZpH7QoDNz4FxgcF2yMw8neJeSlheQIhALwqv9oh35LWDhgYy1VwmtN63nbb75cNBwEKvszu76ESKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1vIvShf5vQcDK650q3AOkTw6n%2FO3uutS5H11rxXt2qs3XDpmj51KFYiaREHJiEZdWWrW6iFckB%2FhpUHaWV%2F0CZ4nYyMlfivxS8Y53b8vA2XJ11qBRL01kx9fYItWPKOdwPdXpbLmtVoAsUTazSZTHjgWejxDJM%2BhU1ahRY1kP%2BxJ700jcIZjweT6M0xdYAwBpdqP24h2Reiuk79mww1oe7m4pMA66lz3%2F6nPn7G%2Fm9CXHt%2BK2Zp%2FuVQizhxLbkrnu6y8gAkfApRqn%2BFTuhytl5O%2FEJEsoNfXZ4%2FAJrtPWp%2FLB%2Fhr%2BJW4HYdGkRgBkOF81uWJSpsdaShRtmRA2Gkc03WfWUj2qo2CCYkjOX5GGR2Hr1CDiRXIt8SHTZFNo%2BfnB7HH%2BVgKJlvZRYIutUevSNBTO6BQuTaICgR3GLF0VWwOCD2k00LlihEnwt%2BBOwDer0jJwO7ehfWLiuWlrvdSaEzzuh4VKPLgiChKxYhrIQ43ajxhyYXq7I1qr4YMcGCO%2FK7Mi52Sho2rDgyyORMfCt9u4hMZap25RflrmvMyfupxt3Pq5vaINXl5Gf9a6Qr5LgSATaiRItNrSmKC4Z5P%2BLdg%2FvUo1JjCW2e8CzxOAZC%2FJeNt47gG4D1TmOw%2BM1B8QCrx3svbiIpZvCDCklbG9BjqkAcMlZdfdEbRTCeX4RSZOZe9J%2BbyS41POFrezM1fiM868T0xxA3Ot9R8pCxkbqcGDf%2Br%2BFelWEoDJgLtqvRe4%2ByjtUVgRJiYtBdHUSImsCOl517MYed5I4IKia8dBX4wBZXxFgMJk9VQ6afsylxAs0DaAysgk3I7DGeVWoYXd0u67T9Obu7aM%2BktPxkQR1NLhOcTTodWhswXUcK%2BibowSMAkqBoKf&X-Amz-Signature=088f9b58887e44b0fd8d459fa2d53b5f5082c7f0019eee158b230e445eabfd38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2ML4YH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi6rYEBwCvguIEZ3cogClG1I6xVJC5WaJQXDG7Iv%2F6hAiEAqETPA6dZB4CclifGF0dpoWXkKqehpcYUjIHFXIA8aU0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW7%2FnexNbbg3Mfh9SrcA6nRfbppWRzLFQgvNE3OXfFqfij2Oc1ucDtmO0DNRyk3aM%2BbJ6aiAHmgHGxrcsq4XSKtakdAfO8CyHkcUKih33BPmKXpORVUn1V3Z5sj%2BzfssO8k1ALNIMACE1p1wrdhuJ2PUlmp4QKtLAiv62JzfOsDm5e6MrMPkzDq4ZQaFUSsTmurOYB1lYXEynRoxOIMvyrfIyJ2GRyg5cbtZLKz%2BDBH4JqUUqVBPmlghkRAt3K6X5%2FibRBKARJJ8sHzv766n%2Bi6g8IWV6uxIQwUx%2F2pqGQYMh5jYqbw%2FXzaYW7k6EjnkPYYMEbhFR2rg4rIvd6QRL8gbBmE22JGv3fKK1LUf%2F6rvt%2FDM2u2tJlcfEZcepBRtCUtGg5g0JXAF4V2F6R903c6pCde4SzybM4Uhs9hmhwy18mfpcX0%2BSbUHdo%2FfMYeUmv1P9OUy7IjONw8%2BA16I6SuQu3%2FUaO1d8aiDVauU7hH9D3KMDQrlCMp2qhZavoeDME71l0VPhRTNnLHoHGigRXAoB3dIiVtohNS3m25G0JFqhWUNLAnUMddPG%2BAVxgy2iqCMx1V41k1HpqdpSAFHcseklZa1%2BBdJcd77LTPSbeVzOexPoT%2F92XV%2BgQ9cJi7w1OxIIUULaZlQ%2FuuMMmOsb0GOqUBxdxvObvkTzXrjfLl%2BEmis0hsXo9rrnabLuwZMEVb5%2BaUXmycegcWVc%2BkqLBM%2FsOVFEQOo1VLM6i%2BSAG2RWM1OhYseWEB1wpIUuhp7up8KgX0u%2BBdf8OU7y1DiyEpdm9a4YPKQZHC3OdLW0cdVQta8AwhWqjV3rapm2t%2BrFHtRug%2FQcENHGSdNAf561h%2FHdpgI9ag9gsWhMtUCUd6MSgRxL3a1lKV&X-Amz-Signature=8e5ffc74c809dbdcd3d3de57f85df9cddac4badade4d77d4806026e18271b6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D3KSQT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIyO9ObE%2BJhuxWtjK0t6Uzm5eXVWkBAxrQiva7I1RNwIhAK5pcQIGqMxBxQtDakaQJR04CeAlylB5ndxMXKnl8i0DKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOJGIJI3HU5NUA3bYq3AOxCB308Y9HL0kOvtIYZceEGwSr%2BhP6saQ7kYctgZJnH6l%2BqnNvhuiw3XEGDzYElZtSGmX6pQ1i5DgO8pkcFz7xYC1TwAW%2F%2BhfMCy%2FuMFfzWU3zzDisFxdS%2BcgpmrfuwQq2yFMJ%2FkBMC2oUKWE4gh9m%2BPlJgE6hKH7XmJi0tstGZ1PNrYvOGbbf1jt2uHONxOaKOMVOO9rxToTGCT%2FrJ4WzAUSC5egfC%2FQkPdHISVWVKVxVAJKhU9uA7dqj9pWVwpjNS%2Fv8hsnAK1GDNG6nwpbImHX0dW5bYKGSKara4WYbt3wlvBxsV22Xuf34LOi2rw3cy69BExpeEOxDRGrBHAs8BtkQSH2Uw5ZtqJzWlHjIUg6XbenfD0olGSSy7tOcn3Rs8PAFQ02ytTkJaa%2BcnrrYHMQho6V4nVAk43ogT2OYaw8x7%2BK13CnT3JsEOk8bR9aLhaemMBJYsAR9k0vP2QI6608BSDyJfpK03Gx4RUSOAMoEhESbKS29tT24YRJe6zzpLWKnfjVmhijWG9Tvm3h%2ByLOsTPeRJMRsQ7R3O7N%2BpQe3EnBNd92UHquCvGTr11aNhBJN9o9TowscdFAc8iI%2BEfqJ76yhuDA9hyAdFqRP1DGpnz4cFMaeqc3pFzDykLG9BjqkAXW5KQsXgRYlYkDIvhV9bM8SLxfiRIR1s2zFfxznnsQOe1KiZb44XpzXFdxKCtuJvQexPf%2BgP9%2BBEoaMqm4fKwcnI305hyLeyuGPpWEUiqfCBgUXf1Jb6NAHUobChqcGw7kVuC%2FsUuR0DJl15thU9qYLQd1cXU%2BuNnlMSc9P7kEfCY3vBN2yQKH8Z4vN5MrQRxvGN%2FGaigZUH9Fifp3ozWX0py5m&X-Amz-Signature=f3e89724e7994fd13946f48a1843438684dcdaccca9cf52ef7f64bbeccd88a31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
