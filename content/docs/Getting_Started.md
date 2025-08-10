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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIM4LJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChMd8xhMITnnxQR%2FwoS1vpBl12sLAiNpAoKgHYVl65aAIhAITcEG94MTqT7RSWYWEsVF5a7PPDviQqYZwNw%2FLPi0xBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuV6ZU0pPdQcGpKnUq3APApaW%2BAeYeFg8w9g52YSGqPSKgvkQnNIitXgmUjsI6NGXZrXUWV0BWiutEJQaCXCVYQe%2BZSffohMn4%2B8lEQhVEXIFNoU1WeKxYi4J4mCUtypTTaHRJQ3upbzGmj%2Fqqey8pjixkFQASZ13nlgsrHuyGLIHD6tEc8%2BxoJdslcYvdKcXFafdJatmpP5ovC2XrBllGqIx8hummb4gJD5ZuF2zH2UgMpXQh0I9LaRNulhEKsDB35vMFdUsgVoS88BGewVchWROcTuvPy9jrXwEmBq36s%2Bh5qKHoUXWnxe5hFdB9XN5D9CqOf0%2FwfIVMSBjvqYo3ipHNEZSyvKSIMCPVfljCruc1bVU3MOZ75l0Gr7WnD1cn2B5Db2xiHwjn3AQ%2Blh3PX1uHOz7olXyvJjsf3gWJjbyT2ZcoYegCj13sbr%2Fh8IMFgjjJilAY%2Bqomy0a81pF968JAru067lVLj2OKC1sehGyuEOwIYnbByOubW2gjQwmHI0A090E7SPhtpZPuTDDanSTGJ8brgXKFE9h6DO7C0BJFrILdPe%2Bf6s9Sak7PkgzeXR%2FYqNbg0Y0y8w2CZfvKVycR%2B5tDR21MSb6E8SsEM%2FMAIO%2Fwiij8tsTwKI%2FElRCa8KF7oNAFEYa%2BgzCo0eDEBjqkAQDmdrQteqQWK9pMGtLpRz4dG66QPL0Efr1hYGNJbefVRXqtZHUM8XaQTUXSa%2FFpUZu5%2BztO7BFBt4wzNdYq6FpY3ToyZV1KBH0G2oZIbGTzHB1CKhGRHHzJvsTfshrH0Z8P3InlKD3rPkNF4U2K7DqRLH1xKLZY%2BiQTEOMjDwBpvaqF49aA4wWn1s7VvmihpdgqSFHvmteXZgvCgR45rPh%2FosuV&X-Amz-Signature=b1bcdbc0f2c6543ba98ba3463b8c1f16471e82b0f5614cf5c393cfd6171c4600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIM4LJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChMd8xhMITnnxQR%2FwoS1vpBl12sLAiNpAoKgHYVl65aAIhAITcEG94MTqT7RSWYWEsVF5a7PPDviQqYZwNw%2FLPi0xBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuV6ZU0pPdQcGpKnUq3APApaW%2BAeYeFg8w9g52YSGqPSKgvkQnNIitXgmUjsI6NGXZrXUWV0BWiutEJQaCXCVYQe%2BZSffohMn4%2B8lEQhVEXIFNoU1WeKxYi4J4mCUtypTTaHRJQ3upbzGmj%2Fqqey8pjixkFQASZ13nlgsrHuyGLIHD6tEc8%2BxoJdslcYvdKcXFafdJatmpP5ovC2XrBllGqIx8hummb4gJD5ZuF2zH2UgMpXQh0I9LaRNulhEKsDB35vMFdUsgVoS88BGewVchWROcTuvPy9jrXwEmBq36s%2Bh5qKHoUXWnxe5hFdB9XN5D9CqOf0%2FwfIVMSBjvqYo3ipHNEZSyvKSIMCPVfljCruc1bVU3MOZ75l0Gr7WnD1cn2B5Db2xiHwjn3AQ%2Blh3PX1uHOz7olXyvJjsf3gWJjbyT2ZcoYegCj13sbr%2Fh8IMFgjjJilAY%2Bqomy0a81pF968JAru067lVLj2OKC1sehGyuEOwIYnbByOubW2gjQwmHI0A090E7SPhtpZPuTDDanSTGJ8brgXKFE9h6DO7C0BJFrILdPe%2Bf6s9Sak7PkgzeXR%2FYqNbg0Y0y8w2CZfvKVycR%2B5tDR21MSb6E8SsEM%2FMAIO%2Fwiij8tsTwKI%2FElRCa8KF7oNAFEYa%2BgzCo0eDEBjqkAQDmdrQteqQWK9pMGtLpRz4dG66QPL0Efr1hYGNJbefVRXqtZHUM8XaQTUXSa%2FFpUZu5%2BztO7BFBt4wzNdYq6FpY3ToyZV1KBH0G2oZIbGTzHB1CKhGRHHzJvsTfshrH0Z8P3InlKD3rPkNF4U2K7DqRLH1xKLZY%2BiQTEOMjDwBpvaqF49aA4wWn1s7VvmihpdgqSFHvmteXZgvCgR45rPh%2FosuV&X-Amz-Signature=595df59fc425bea0a82ce52b0ab1f9baed3154c86b24b3c47dac0a12fe6cfb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIM4LJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChMd8xhMITnnxQR%2FwoS1vpBl12sLAiNpAoKgHYVl65aAIhAITcEG94MTqT7RSWYWEsVF5a7PPDviQqYZwNw%2FLPi0xBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuV6ZU0pPdQcGpKnUq3APApaW%2BAeYeFg8w9g52YSGqPSKgvkQnNIitXgmUjsI6NGXZrXUWV0BWiutEJQaCXCVYQe%2BZSffohMn4%2B8lEQhVEXIFNoU1WeKxYi4J4mCUtypTTaHRJQ3upbzGmj%2Fqqey8pjixkFQASZ13nlgsrHuyGLIHD6tEc8%2BxoJdslcYvdKcXFafdJatmpP5ovC2XrBllGqIx8hummb4gJD5ZuF2zH2UgMpXQh0I9LaRNulhEKsDB35vMFdUsgVoS88BGewVchWROcTuvPy9jrXwEmBq36s%2Bh5qKHoUXWnxe5hFdB9XN5D9CqOf0%2FwfIVMSBjvqYo3ipHNEZSyvKSIMCPVfljCruc1bVU3MOZ75l0Gr7WnD1cn2B5Db2xiHwjn3AQ%2Blh3PX1uHOz7olXyvJjsf3gWJjbyT2ZcoYegCj13sbr%2Fh8IMFgjjJilAY%2Bqomy0a81pF968JAru067lVLj2OKC1sehGyuEOwIYnbByOubW2gjQwmHI0A090E7SPhtpZPuTDDanSTGJ8brgXKFE9h6DO7C0BJFrILdPe%2Bf6s9Sak7PkgzeXR%2FYqNbg0Y0y8w2CZfvKVycR%2B5tDR21MSb6E8SsEM%2FMAIO%2Fwiij8tsTwKI%2FElRCa8KF7oNAFEYa%2BgzCo0eDEBjqkAQDmdrQteqQWK9pMGtLpRz4dG66QPL0Efr1hYGNJbefVRXqtZHUM8XaQTUXSa%2FFpUZu5%2BztO7BFBt4wzNdYq6FpY3ToyZV1KBH0G2oZIbGTzHB1CKhGRHHzJvsTfshrH0Z8P3InlKD3rPkNF4U2K7DqRLH1xKLZY%2BiQTEOMjDwBpvaqF49aA4wWn1s7VvmihpdgqSFHvmteXZgvCgR45rPh%2FosuV&X-Amz-Signature=48a51f44716170582883fc285d479558e2c95bd617a331d75656be5ca52c9009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBDOTSX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiVoBWzK%2FTa3T62LccoXO1gYyzweiqzhRfSljIEtz2gAIgO%2BwNpm5Xff7VDtDLSmhSU0HWUOJxCJoabqtqFgO%2BZ0QqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUegHxkT4IjB7DaFSrcA4MvEoVVGLIO24aXFaObT8pvEvMEA5UutpItBVf77sJUNiTyFZeYC%2FmMi2u%2BqZdZD8YSYsjWMGm1f4Iw4gLQTN5%2BRT42U8EFuJMW4y5ZbC5335fnhcKhEsjWX%2F4hbVwKQjwErB2gQLR%2Bnq%2BUoHERqbciqVcF4v96D%2BB3j1qV9hhN24UYJ%2FAYpq1LfF6ktZuNKN2qlH7TVLCmWg0hp8euwmom2GQ%2FD9J%2BbcIZNxImeM65adEPp7tHuzXrrGJP7g8rgvxjuXTy0AD0n1bA6r9ohOZgJ2l%2Bw0eKxxsmj3dttXco0gC9mKXsHu2Zgf1gYMrQEtEj1HT%2BcD4zYmncRnebvS05NIdOOuySCrhHB0aVkU9%2B88OuILSjmoMp0h1ybUZfr2m0lSZtSER8PLk2l9qiIRJ6n%2BUHuL8pJBwFRPwMzX2c7LYtJDug0pvbihqsbMkw9ymRiZYO0MAIoMl%2FWJDXz4S5TNbwFJ1KStN43JLY0LHjA%2Fu6j7P3tOsKQecrqpRgz9rDK7ny7i708TNI0dXDT1qCRKOybGyvEy3YCZwT70J2oMe01jaokayjuAYovhXnZjGPsoCtcfrHFVFBr3o%2F4imQk%2Fjp4B3UrTmwW2BrYTwQHyWZQeXixlRPJCztMNDR4MQGOqUB7J4lIjEVq%2FgxUkvqqf7J8IZG%2Bm5rIZXDuKdCWWFvvHnQgKu4FJpu%2BuqD%2Fv8Hmav8AzmFMFQhKpUbz0vdcjhcDMB0YH8aBHVc%2FFacAkjf7hkTNHOzMT6nVCaWIihGcE9Zj%2BSoUsKggZqLfn8qoZavOSFtiTkl3EWqf3nyE9K4cayCtarrU%2BzIQer%2BR7kaVWY28e4%2BBL%2B1gHHsCvJJxkbwfQjhTku4&X-Amz-Signature=76d3f2eca79eb46ba2e7320904acaf2085354b271803ba9fea5469204c517699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHNPZW6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETCT0WGdNj2J95P%2B%2BFLztc8hs%2BI6ip9DoXETWTIiPNGAiApshS1SSMqeHTUCdXprTzT56u8%2BIqxXJN1JclkOkBNPyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvSXz3lb0F1fqJXOKtwDh8%2FrJ0IwMOgypGH3dfPdey9C2FZvz%2BHa%2B32BGMa8%2BZtYlRK3PNxFL8RF3HE%2BpbibHWH0%2BPBMd9e7oZmT4m4LugNbzbpGcWwrT3EF241Fj7MvtgpoXcuhoU7ZDdN21ipG2EnihEUSu7OMTrgUVNovZm0CGNZAnQab8KQQzZL5UEbtM6KjU4G1MCfFk9TWzi2559GL3Ap9rcTkfmsO17aDv78EL8gcBl6omn%2B41lepsIO9aXyOA7D0kVxtoWtc6GlMxJx271vw6DkYdfTvE7mPSYF5V6l%2BQLHZMvZilrcrSLfrBLS0gRwFSdPMEBaMhO%2FEUU7pPBa9gFuTpt3Tv3DRYNaz%2BqvUHDHBGnz%2FiQuizpWMYXSSd9qJeMclvodjkEuRyAjPOkQN0HRLpGJ%2BDqnIPEK4IOjMqgo84RCqIERoAv9HXQEE2fgHmis%2BfkbyCgGA%2BiAPfCFvQvAM7muYwFUDHXd1KpnczcuPKikaQQvfxI4S7ZBBZWmneDZGVVksMwy4%2B9KEm4LI83HfTjT%2BqG4eDm4FxWigFpXih%2BnGV%2B5suzmgE6rQWmS7Q6NpiW7RR3IJFrusnQVsJYDQpg%2Fp9MKorhhd6y1sWZ0%2BZHNgw61YUads7K8OXhO%2FBXHmQV8whtHgxAY6pgGDi0oLg8CBPLj%2FZQojokMuWhDkFyXR7V6j3MhnzAyfUprYlKtFzN00DEARTWyLVFRpkvlfYYZkQRBxYn0dDDHRWbIzH2EdJdQbv12IVzUnwYGG3RxZpjaN2pcOmyDTGJ4ZCzU1Wmcsa4oc5uSJwQDnNBwmqod5UpBYhW1aru4KljWHwM8PmJdQ9RifiPuWYVT8qhd0%2F%2BkIUveL5fENd7Uhoff6wqOk&X-Amz-Signature=69e98e36c10aa715a359fec651ec25a7a789efe8d2f39ce9992bc774ba737720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIM4LJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChMd8xhMITnnxQR%2FwoS1vpBl12sLAiNpAoKgHYVl65aAIhAITcEG94MTqT7RSWYWEsVF5a7PPDviQqYZwNw%2FLPi0xBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuV6ZU0pPdQcGpKnUq3APApaW%2BAeYeFg8w9g52YSGqPSKgvkQnNIitXgmUjsI6NGXZrXUWV0BWiutEJQaCXCVYQe%2BZSffohMn4%2B8lEQhVEXIFNoU1WeKxYi4J4mCUtypTTaHRJQ3upbzGmj%2Fqqey8pjixkFQASZ13nlgsrHuyGLIHD6tEc8%2BxoJdslcYvdKcXFafdJatmpP5ovC2XrBllGqIx8hummb4gJD5ZuF2zH2UgMpXQh0I9LaRNulhEKsDB35vMFdUsgVoS88BGewVchWROcTuvPy9jrXwEmBq36s%2Bh5qKHoUXWnxe5hFdB9XN5D9CqOf0%2FwfIVMSBjvqYo3ipHNEZSyvKSIMCPVfljCruc1bVU3MOZ75l0Gr7WnD1cn2B5Db2xiHwjn3AQ%2Blh3PX1uHOz7olXyvJjsf3gWJjbyT2ZcoYegCj13sbr%2Fh8IMFgjjJilAY%2Bqomy0a81pF968JAru067lVLj2OKC1sehGyuEOwIYnbByOubW2gjQwmHI0A090E7SPhtpZPuTDDanSTGJ8brgXKFE9h6DO7C0BJFrILdPe%2Bf6s9Sak7PkgzeXR%2FYqNbg0Y0y8w2CZfvKVycR%2B5tDR21MSb6E8SsEM%2FMAIO%2Fwiij8tsTwKI%2FElRCa8KF7oNAFEYa%2BgzCo0eDEBjqkAQDmdrQteqQWK9pMGtLpRz4dG66QPL0Efr1hYGNJbefVRXqtZHUM8XaQTUXSa%2FFpUZu5%2BztO7BFBt4wzNdYq6FpY3ToyZV1KBH0G2oZIbGTzHB1CKhGRHHzJvsTfshrH0Z8P3InlKD3rPkNF4U2K7DqRLH1xKLZY%2BiQTEOMjDwBpvaqF49aA4wWn1s7VvmihpdgqSFHvmteXZgvCgR45rPh%2FosuV&X-Amz-Signature=d6b8b488d7640f48f4a138e9923bd6345e8a54bd69ad835486930ff5a68ec16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
