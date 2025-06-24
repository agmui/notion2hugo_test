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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP2M2XI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHUl8LRuz1WKMRJZ7AhB0CwAKaXHI4GoB%2BjARp%2FbAeqqAiBAJtrz6ya2i9zUQGon2YwGG8DIEEfZXZQ1y13ghQ%2BqAyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfB%2BDcQN1Lv0N6YnZKtwD8htuo3G87CRTU7KVEsAkgBznMylYtVDtC0%2FQxnkodN4D1HATgJZ5HT8HQwUE2GijwPkmKHrkxUTaI1N7MOOJXIJqD6y1WbU%2FF%2BcoHmTLH83gpicKpg4tunssYFVViaVPilcyU2LRb9cfxmrHGylTItXn3%2BCkDm4QtWq%2B%2Fj%2BUC5dcOquqVL%2FviyYjn2nQT1mcrdBvyNHX8gmC2eJmFUEBCvUc01N5qckIvE6cF1wOy%2FPLaAsevnbuXJKsy6baPuBDhdaa14Fb0hGXJn6aEynDYPTyBvst%2Fdzmt%2Bot2gab2xZdmpjx9nFC8YbtzVcJgSClpwsWNMFLPOa0DE%2BrDJe%2Bhn14xKlFj18Y4msXNFuF96rsGeGt5Z9quX6nR1c1n5WmC3U9I0O66aluEIQaoyZN9Z1lC137sShjePyMatNmXlgua4z6rShpl1JHGHa%2FiEl8FkhyuSX8Hvs7ALg79R%2B4THmA5%2B3kAXFB1uyGoXqDK37HzB7F16l7QjMpjnqkvW2X%2Fbsh37Rj0ryLG4FM33aYpYyLJnYjY7wor%2BR4lP%2Bq5fA%2B3K3D73QmDc7kQDxVeLOmynVVnK4bExZ6seHKeih8F5FWyMJ6sEpv0k4JlQ1gAfZLUj6adUQNZWOjaoQwydzqwgY6pgErdyxO4YVmbfrKkV2xHWl5gYnI9f%2BBAZ%2B4T5Aawcamhcz8bwFhYbaS98F814%2FmRSSv9A2nNPBzr2TcHoYxEHmXLyzBU3VuSAvdZ77XhTfsBcV2VORRGBXmzHjFb6lNRoLFfa%2F3kWCRmnNIXBPY19fjhIP4O9IPjCzjKxDQxGl%2FYgyZLz5FvJmGf3xz%2BHw5jL%2FoCn3qenOPXxD7bjpJ0hE2dLM%2BiQSl&X-Amz-Signature=f0e5b0e2dc1e157a7ca1f894e195bea56b78eae9fab903b3e9f496c57809103e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP2M2XI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHUl8LRuz1WKMRJZ7AhB0CwAKaXHI4GoB%2BjARp%2FbAeqqAiBAJtrz6ya2i9zUQGon2YwGG8DIEEfZXZQ1y13ghQ%2BqAyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfB%2BDcQN1Lv0N6YnZKtwD8htuo3G87CRTU7KVEsAkgBznMylYtVDtC0%2FQxnkodN4D1HATgJZ5HT8HQwUE2GijwPkmKHrkxUTaI1N7MOOJXIJqD6y1WbU%2FF%2BcoHmTLH83gpicKpg4tunssYFVViaVPilcyU2LRb9cfxmrHGylTItXn3%2BCkDm4QtWq%2B%2Fj%2BUC5dcOquqVL%2FviyYjn2nQT1mcrdBvyNHX8gmC2eJmFUEBCvUc01N5qckIvE6cF1wOy%2FPLaAsevnbuXJKsy6baPuBDhdaa14Fb0hGXJn6aEynDYPTyBvst%2Fdzmt%2Bot2gab2xZdmpjx9nFC8YbtzVcJgSClpwsWNMFLPOa0DE%2BrDJe%2Bhn14xKlFj18Y4msXNFuF96rsGeGt5Z9quX6nR1c1n5WmC3U9I0O66aluEIQaoyZN9Z1lC137sShjePyMatNmXlgua4z6rShpl1JHGHa%2FiEl8FkhyuSX8Hvs7ALg79R%2B4THmA5%2B3kAXFB1uyGoXqDK37HzB7F16l7QjMpjnqkvW2X%2Fbsh37Rj0ryLG4FM33aYpYyLJnYjY7wor%2BR4lP%2Bq5fA%2B3K3D73QmDc7kQDxVeLOmynVVnK4bExZ6seHKeih8F5FWyMJ6sEpv0k4JlQ1gAfZLUj6adUQNZWOjaoQwydzqwgY6pgErdyxO4YVmbfrKkV2xHWl5gYnI9f%2BBAZ%2B4T5Aawcamhcz8bwFhYbaS98F814%2FmRSSv9A2nNPBzr2TcHoYxEHmXLyzBU3VuSAvdZ77XhTfsBcV2VORRGBXmzHjFb6lNRoLFfa%2F3kWCRmnNIXBPY19fjhIP4O9IPjCzjKxDQxGl%2FYgyZLz5FvJmGf3xz%2BHw5jL%2FoCn3qenOPXxD7bjpJ0hE2dLM%2BiQSl&X-Amz-Signature=43977491117f59828e8667d443ff4ac1985694438c7330aaf31cbe21a33b75f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP2M2XI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHUl8LRuz1WKMRJZ7AhB0CwAKaXHI4GoB%2BjARp%2FbAeqqAiBAJtrz6ya2i9zUQGon2YwGG8DIEEfZXZQ1y13ghQ%2BqAyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfB%2BDcQN1Lv0N6YnZKtwD8htuo3G87CRTU7KVEsAkgBznMylYtVDtC0%2FQxnkodN4D1HATgJZ5HT8HQwUE2GijwPkmKHrkxUTaI1N7MOOJXIJqD6y1WbU%2FF%2BcoHmTLH83gpicKpg4tunssYFVViaVPilcyU2LRb9cfxmrHGylTItXn3%2BCkDm4QtWq%2B%2Fj%2BUC5dcOquqVL%2FviyYjn2nQT1mcrdBvyNHX8gmC2eJmFUEBCvUc01N5qckIvE6cF1wOy%2FPLaAsevnbuXJKsy6baPuBDhdaa14Fb0hGXJn6aEynDYPTyBvst%2Fdzmt%2Bot2gab2xZdmpjx9nFC8YbtzVcJgSClpwsWNMFLPOa0DE%2BrDJe%2Bhn14xKlFj18Y4msXNFuF96rsGeGt5Z9quX6nR1c1n5WmC3U9I0O66aluEIQaoyZN9Z1lC137sShjePyMatNmXlgua4z6rShpl1JHGHa%2FiEl8FkhyuSX8Hvs7ALg79R%2B4THmA5%2B3kAXFB1uyGoXqDK37HzB7F16l7QjMpjnqkvW2X%2Fbsh37Rj0ryLG4FM33aYpYyLJnYjY7wor%2BR4lP%2Bq5fA%2B3K3D73QmDc7kQDxVeLOmynVVnK4bExZ6seHKeih8F5FWyMJ6sEpv0k4JlQ1gAfZLUj6adUQNZWOjaoQwydzqwgY6pgErdyxO4YVmbfrKkV2xHWl5gYnI9f%2BBAZ%2B4T5Aawcamhcz8bwFhYbaS98F814%2FmRSSv9A2nNPBzr2TcHoYxEHmXLyzBU3VuSAvdZ77XhTfsBcV2VORRGBXmzHjFb6lNRoLFfa%2F3kWCRmnNIXBPY19fjhIP4O9IPjCzjKxDQxGl%2FYgyZLz5FvJmGf3xz%2BHw5jL%2FoCn3qenOPXxD7bjpJ0hE2dLM%2BiQSl&X-Amz-Signature=fdb983f19e6de422c3f9134842f6ed2ee812f2a346285367d2158a9031b13434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV3PJ52Y%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCeWco5jWs%2FXRY0yh4CPcJVmeKU%2Bi17wl8bul7y0nV1DwIhAPTjLw5JnaDHhCdVXPqj4ByAsW4%2BfoVruCk7K7fpBaRoKv8DCC8QABoMNjM3NDIzMTgzODA1Igyi13uf76e17rnLFsAq3AOAZi3FZBpyu%2Bq3zSe6evCh8oUO4ceXBBGqfv29TqnPWhNZoneR3PAOH%2F9dMM%2BBsQDL4CbpvG8jLSz7mAGsa1kDy5e%2FJ%2Bw9qS2nQhDBHhc9gLiN76f4cXAlyria9yASJry2lpNNWU2gYVgeXq83UZeTp1RN%2FHjcViQjZ7siNCVU9vm9chCBfLpe%2FExKMAc%2BTGejs7PnWmDGZ5Cags58rPqHz%2F3SBWjKyE%2B%2FX912hJaJmtMTS%2Fp4wVyG%2Bim9QradRC%2FBK0UsHzVJZ46bYSQtHL31UuOB1kRQIWgq3j5KLIqI7%2FpGaBCOfQG7sTjjNmdB1QHNDHWCWnmdLhnUrkiAZ9EfnUGSrR9TC7VHPMtX3cWpVGkjuo4EPpPBXMTP91mJg3obZ8C2oLTEJ2YJXXuoIgIs9skkYgmtfBW%2B7KJfsH1nCs%2BeIWnwVTdOAFjYC4D6VbHQRBs6rAHqNTw0MvduEOtxRlTwIdV%2FUp%2FDmBdjSq5gQKNDPhFUKniSG6v9cqISiBxGJ2ZTE4t%2BVVeqeoVy2lQWLHw3b4qHsDBP3bfrCkwrNwQ39nTaDNCPAXrPpWxVmQkMhB3gtwBpLN4ZHswfERS1t%2Bx8e%2BzJSsANSSt%2B8rBdJPb%2F%2FeJYK2sbLy9WFzCq3erCBjqkAUa0FIXhDTiIOxVSZTGnJWKseeoNZcu1%2BZ6hdZIrObwsow1cUlWC7HJdNLniixCsk4%2Bf0fKK2c%2FZxInumVXUixI87uBnCXooXv4PBJxR9OI%2Fsw4hYq8tB6mys0rj121LnaoVBYshBxX13OlHQnQBZ46Rtyj9Ku%2BArzNJaf0BDg%2BArdw0WErBLbcmzcDm7qxh2dZ7RrV3YoCfsZO%2BlqdOKlnwBVkS&X-Amz-Signature=e458eb966d0d03c9002547f2c2d186f72cd9838a4a70e843f05e3eea8bb40e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSHNZEH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICnHBN0tKo9U6mVyqVlrQJrEYzlu03W3SA%2B5spgB%2B6dKAiEA8UllXJNr0SA7cIrad7YA7jdkxcnPrESONaY0zGzQhHMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHWMsCJSjCH9gq9HmircA%2FbHEX6W7Z%2FAcYdYKlZO5JF8Imx%2BbrfqFJ3iwBVH7ZBWDdV5G7SIxrWZf6dd2GgMrPCI9XhNetKkg14yj%2B2Ew98mENSJIqPMymoV4kLe3UBoKTpUjFbDWit%2F2rnekeWYTaBvZ0%2BHQoLSHdD0ImWtbLFtqWeD6WEVmnPfkfot1kSXppc5McWcA7E3LDfykWMlkJQ5OnC9qXl4YIvFTwvd541qh%2F1aq45AfTmj2%2FI%2FfQeDVIxVCqP9k0i1ASEOYQOWy0l8KjcCqlmt71aFS3YHvLtMhw9wHPj8SBVddGB6%2BLYrANFFGdlpNugpFWIxM4fqTgAe4rZ4%2FlPPDvuKIyCfhtADKjS0R%2FgUvmfvpDBCRsxKgj3YsEii9FUMZCoQGRpCwagwtWaiNXBCWPeCWR771GceT1Vw0SJCGz0sutweGxVTTJtVvRQWEOcIZdJA6BkeYSl74PWXdxYRXQkpwtcLg0g4nNpqMgpKbL%2Bylz9AbK4QEwF5jjBUZrPBX6iQRHHpUHfYi3wiLTEy32YTVI0Q13HpHcNjWw9enklVQ2bXS7GGWuA4psbBUGjjxVUrLlPbsMKQndAXOOpmZ855QW2GwVC2mHOcfXOXCjdilgU57UUCcSVypTLBFv7fRkA%2FMLnd6sIGOqUBO1MvGlDEmco4eF3gN0wTreOIW330ejh7IXVX3gkzrdFupEprffrBA%2BhhI1ld0Vats%2FiBaO0%2Fsfn4Mrltm1Fi%2BKxbO9tMu70dCF5H0PJJZoP1m6IRTB8u%2BYCR%2BCTKXsHpNhg%2BdCl0MBS8hZwFLlduYxmobigfLr2TMG9EKb7VEBbtH7Fj2a2Duc8fC%2BtJQ9QkwcpCxbKN06j3E1Qvo3vEnSG%2FxBpD&X-Amz-Signature=13fb4f1b7f25c7b596b1a6bac9dd36f78aa0af36697a18157305109dea43dc99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP2M2XI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHUl8LRuz1WKMRJZ7AhB0CwAKaXHI4GoB%2BjARp%2FbAeqqAiBAJtrz6ya2i9zUQGon2YwGG8DIEEfZXZQ1y13ghQ%2BqAyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMfB%2BDcQN1Lv0N6YnZKtwD8htuo3G87CRTU7KVEsAkgBznMylYtVDtC0%2FQxnkodN4D1HATgJZ5HT8HQwUE2GijwPkmKHrkxUTaI1N7MOOJXIJqD6y1WbU%2FF%2BcoHmTLH83gpicKpg4tunssYFVViaVPilcyU2LRb9cfxmrHGylTItXn3%2BCkDm4QtWq%2B%2Fj%2BUC5dcOquqVL%2FviyYjn2nQT1mcrdBvyNHX8gmC2eJmFUEBCvUc01N5qckIvE6cF1wOy%2FPLaAsevnbuXJKsy6baPuBDhdaa14Fb0hGXJn6aEynDYPTyBvst%2Fdzmt%2Bot2gab2xZdmpjx9nFC8YbtzVcJgSClpwsWNMFLPOa0DE%2BrDJe%2Bhn14xKlFj18Y4msXNFuF96rsGeGt5Z9quX6nR1c1n5WmC3U9I0O66aluEIQaoyZN9Z1lC137sShjePyMatNmXlgua4z6rShpl1JHGHa%2FiEl8FkhyuSX8Hvs7ALg79R%2B4THmA5%2B3kAXFB1uyGoXqDK37HzB7F16l7QjMpjnqkvW2X%2Fbsh37Rj0ryLG4FM33aYpYyLJnYjY7wor%2BR4lP%2Bq5fA%2B3K3D73QmDc7kQDxVeLOmynVVnK4bExZ6seHKeih8F5FWyMJ6sEpv0k4JlQ1gAfZLUj6adUQNZWOjaoQwydzqwgY6pgErdyxO4YVmbfrKkV2xHWl5gYnI9f%2BBAZ%2B4T5Aawcamhcz8bwFhYbaS98F814%2FmRSSv9A2nNPBzr2TcHoYxEHmXLyzBU3VuSAvdZ77XhTfsBcV2VORRGBXmzHjFb6lNRoLFfa%2F3kWCRmnNIXBPY19fjhIP4O9IPjCzjKxDQxGl%2FYgyZLz5FvJmGf3xz%2BHw5jL%2FoCn3qenOPXxD7bjpJ0hE2dLM%2BiQSl&X-Amz-Signature=822cbf236642bc5e99040b0e06420e424a97b5c68b08dfeb6135506374aad883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
