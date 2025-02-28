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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEKAOZB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDVy4MddNjxQsRgXqPrOqNuyZVruZLiQ63HsjQpm1AOyQIhAMHIODn1j3PKHIR7f9LZumigvbsaRtVzpvM1igrYrRRLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXki9zaCwXh25a8gQq3AMOQ3LE7gRkjHHCemRkZFn23VYObR5eCbGYraYjDvlQ7FansMkxBc675jJoL4u2s62GnurQlAON2k30F8s9gigB%2FDTSyCLK3eus6iMyOrVQxEp8aQUR3mKlBcze1aQZrYwck%2F739PUO5gu6ul6FiR4YDDnFLOJ%2BPcUQMytT5lYoUsQGd5Xw6ejok1%2B3sNrJE2Q67V9J%2B0v4GKEVblTZAx%2FeD0wCnu3wp90Rqzyp9QCUa4oL1xIBUWwju%2BxtVfUWYFHVxUhLbMtUUq4cwRaLN61Dc2eXpPTnghR9W%2FEkk7O3fqIP1nLsgYSzsGYSps3bV6SEjUcxk3t1fWW8T%2FpTqzPl7PnXxYKSOZYVcHcZ5Y8IgHJIE3bpRZNdBhBcgAqum2T5AIk9lfqlkbTpsqG6jTXCYe7hGeBntlRCzI1khO224ec7yrSdQAyff13Yhiz6a9LGENcYGiCD98Pd4ozhIqgpLOILwpkX50p0N3Qt8zrSz6bLqfgS8Zmd6qooEo%2Bx4fRXon3%2FlnjJpUAjyRuvfU3yTA2LNZ3Wq78C13PsmBG2fdUlnNlkz0xd1JS9gfCeYd2ZVzwmBTvo8n%2BWZU8eLLj9tRz5PGyGH%2F6eO0QdvR%2BEGM4%2Bn3%2FLDZxDU9WTvzDqi4i%2BBjqkAe8EDUJjUEZPc6kxefOr8ZNMftDgHRbCIQ3IAoONv9XNRkHL8OdNE9EsEJqfJGG66c%2BoE7s11GrSIqJGbM0mb%2FToBvtFpi7tEprTQnbj4I16nl0tkvD%2FdUEUJYE%2B19wbPBS%2FOr9jcNky%2F1cS4NZ61SIWdTWM7W3aaNzZH7cCgkhWJTwjSTxKOSllai9xd0FkkuhY7f9vv3TSw9yuOEXUUpHjHp42&X-Amz-Signature=e69f074c4de10617004ad3519b4da7800f98b428205005c8d2c52f4072a6d1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEKAOZB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDVy4MddNjxQsRgXqPrOqNuyZVruZLiQ63HsjQpm1AOyQIhAMHIODn1j3PKHIR7f9LZumigvbsaRtVzpvM1igrYrRRLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXki9zaCwXh25a8gQq3AMOQ3LE7gRkjHHCemRkZFn23VYObR5eCbGYraYjDvlQ7FansMkxBc675jJoL4u2s62GnurQlAON2k30F8s9gigB%2FDTSyCLK3eus6iMyOrVQxEp8aQUR3mKlBcze1aQZrYwck%2F739PUO5gu6ul6FiR4YDDnFLOJ%2BPcUQMytT5lYoUsQGd5Xw6ejok1%2B3sNrJE2Q67V9J%2B0v4GKEVblTZAx%2FeD0wCnu3wp90Rqzyp9QCUa4oL1xIBUWwju%2BxtVfUWYFHVxUhLbMtUUq4cwRaLN61Dc2eXpPTnghR9W%2FEkk7O3fqIP1nLsgYSzsGYSps3bV6SEjUcxk3t1fWW8T%2FpTqzPl7PnXxYKSOZYVcHcZ5Y8IgHJIE3bpRZNdBhBcgAqum2T5AIk9lfqlkbTpsqG6jTXCYe7hGeBntlRCzI1khO224ec7yrSdQAyff13Yhiz6a9LGENcYGiCD98Pd4ozhIqgpLOILwpkX50p0N3Qt8zrSz6bLqfgS8Zmd6qooEo%2Bx4fRXon3%2FlnjJpUAjyRuvfU3yTA2LNZ3Wq78C13PsmBG2fdUlnNlkz0xd1JS9gfCeYd2ZVzwmBTvo8n%2BWZU8eLLj9tRz5PGyGH%2F6eO0QdvR%2BEGM4%2Bn3%2FLDZxDU9WTvzDqi4i%2BBjqkAe8EDUJjUEZPc6kxefOr8ZNMftDgHRbCIQ3IAoONv9XNRkHL8OdNE9EsEJqfJGG66c%2BoE7s11GrSIqJGbM0mb%2FToBvtFpi7tEprTQnbj4I16nl0tkvD%2FdUEUJYE%2B19wbPBS%2FOr9jcNky%2F1cS4NZ61SIWdTWM7W3aaNzZH7cCgkhWJTwjSTxKOSllai9xd0FkkuhY7f9vv3TSw9yuOEXUUpHjHp42&X-Amz-Signature=291c3c348ddde66897513e36959d11ca7d17134e5ec5ddc818f8371416f7243b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNBHDA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDsNocBPas0PqXbYEzAkUcknbgl1jse1XqIlPNZ7IcHmwIhAIl6NSfrV2oUfmy1JPxBtpTKpX61%2Fvk9x4nSICqh9sYEKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjaj6bM6GpMAhCgMAq3APr1pEO4zX2nrg1fxG4LWd73JmE5OsFQAp8OrEZVSXNU%2B0oKpV88tTG%2FI3TBcPcM5tFqMpIlZb%2FrpPIHYecuu9p2IWwZfZi3K2mjKDsMt5%2Bm31beY8eawfJVeA4PlMVhwpfcr%2FjSc7k15VvEtBX6aRYUJ7t8iXYr80XiSKz0Fi77CODfa%2FddSLNP6hJkRc%2FjCHxG9FNbbt25DwKlDDRxqyUHDYrj1%2BFViWfM1XdQzTSl%2BZVrM4RSExparoZOzgrUyep9HCiKnhKinZT3ap9KxVU9oGCVZZ11my7aHgIBRd1lsQCdK3W61K4T0M%2FM6QuLSQ51hwkl6KXd9mOLk8TibmFJRyBUtsq0LZr%2FFEuF4e%2BNySNSEDsVgOV2v%2FnS%2FuOrct9m0Im7GXpVW8dYplkCiik9k6fkxQc92mkLsPKw%2BT2uhCEQR7aiyKw75wycZ5CDfpwuu5B8%2BzVyuaEDk5FhMWAjN002DFmAQOllhHiQvQ%2BkinE3gCrvudyyDVuYs6Dcro8PfkSnVGkF%2FUfGXMbM%2Bw5mqDHJhNShdejk%2BNGamvWedcf96GiQpFro8I4spQbp9lCR4HNetPW4wc3OmbtuoFRpV5oJCtZqLOoVDsrZP14T%2FUAgDXX%2Fsx3ZvTx8jDCi4i%2BBjqkAb%2BxpamxgVa4ccEipV%2BP%2BvKhVc6Y3C2yP8d0BchcD7oYaCL5JH8S1BUgswFaioSZ21I%2BFr8sE3towyEXzpaLQN3UlrnAqe%2FhV4FBVDT8hUGnJhwkeF62g0DI33%2B5XxMkEDfQ7Ip5SARii%2BfJazbaZkqiWzQa7ms%2FRBA6C6zMRFMMWUwnQ5nit%2BtXKg3EMXrlMr7SvYZNuVR%2FCbJW%2BBEGIGgJZ1e%2B&X-Amz-Signature=f561db696a04415be3adbf889ad4ace35a162fe84c520645db34604d774bcc7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632B7POPO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDhg4WcQMyC3lbY6XARSCQcW25%2BRXk8d%2FFMBoX8lmNqaQIgbF0B20f2ku58JezcvVE2fDWMqry1IjpUmWrg0397NfoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8J0wWIyFsuVvC%2FgSrcA1u1A%2BPvT92bJIJbc0f7sclf%2FPCP0r0Ka3KR54fwnDQkCFAMeZpWkx8J4d%2B0ztYBgpnoyUVvL%2B211IM%2FCHaVpY5nU43DpzfthfeyyPbMS05khHyIHKNNadtEV78j2yZcQV%2Bc4WCuEASJ3ZAaEKSz5nxk63EQdXsSfg6RRh8amTaEb6yUmTcK7H8ctQJT8kwUsPqgyzm5l73IO4WgYdT1isC5A8iMfINrOcEjjxKWQ17nTtFjtzDEeZQ1g6e5jEtYyEd4N7ZxMRLS%2FdsuNk0hRpT7nU0mUoMt9PLkzodAlrTTMVNPYclFX8JA27tLOdq9o8ygQHm8SpL478VJk1fo8GYQqFEUJv5ijVGoo0rYngOPJeMHlHNvTrJ3GHmxg9i7Xryz4o1KUPc4CKiV2SAAboFSuUWrVe5n%2BHSBvuHdxonL2khSjdbtRFa%2FidvXiAT4zZ3RGk3esVB3R00Y%2FAiwFvZPPuczAsI15yCiIo4MSle0eYbEsPCs5JT5GOQGllHTsKMN1T5MbvM4UBZ4NI12AJOzuHABgUxI9JVPdmjH6ynyu662nS%2BhJGsXT4L56CGysA7z52Qkz5ZCGrQphNOQ0HaxmKo6U27FD7lnykqpk%2FsnKvxVFZ9n9p41F4MtMMKLiL4GOqUB4JAqjfJbxR8AocGToHu1A%2FysYoNlnpAgzwmTFma3a8R5a%2BLPb0KWMw1YyX8KtD87uAqHWuRdqQnYDEmrXixzyNzQakGJ18bmID1%2BCvfun8D32l1gYtKia1bgJjgkf1ntAVnljHwMbBSwlCRnGg5otBOkO61On2%2FucqrjCwE1oY9lJWfE%2FoK0YIdsrEgpFl83cE7LPyUBFRZkRtQ4NDppRQtqWvea&X-Amz-Signature=241e25d6d8727f6b9bc52f4b77e1625f860e65869c6338e5aee70c8d8570b6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEKAOZB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDVy4MddNjxQsRgXqPrOqNuyZVruZLiQ63HsjQpm1AOyQIhAMHIODn1j3PKHIR7f9LZumigvbsaRtVzpvM1igrYrRRLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXki9zaCwXh25a8gQq3AMOQ3LE7gRkjHHCemRkZFn23VYObR5eCbGYraYjDvlQ7FansMkxBc675jJoL4u2s62GnurQlAON2k30F8s9gigB%2FDTSyCLK3eus6iMyOrVQxEp8aQUR3mKlBcze1aQZrYwck%2F739PUO5gu6ul6FiR4YDDnFLOJ%2BPcUQMytT5lYoUsQGd5Xw6ejok1%2B3sNrJE2Q67V9J%2B0v4GKEVblTZAx%2FeD0wCnu3wp90Rqzyp9QCUa4oL1xIBUWwju%2BxtVfUWYFHVxUhLbMtUUq4cwRaLN61Dc2eXpPTnghR9W%2FEkk7O3fqIP1nLsgYSzsGYSps3bV6SEjUcxk3t1fWW8T%2FpTqzPl7PnXxYKSOZYVcHcZ5Y8IgHJIE3bpRZNdBhBcgAqum2T5AIk9lfqlkbTpsqG6jTXCYe7hGeBntlRCzI1khO224ec7yrSdQAyff13Yhiz6a9LGENcYGiCD98Pd4ozhIqgpLOILwpkX50p0N3Qt8zrSz6bLqfgS8Zmd6qooEo%2Bx4fRXon3%2FlnjJpUAjyRuvfU3yTA2LNZ3Wq78C13PsmBG2fdUlnNlkz0xd1JS9gfCeYd2ZVzwmBTvo8n%2BWZU8eLLj9tRz5PGyGH%2F6eO0QdvR%2BEGM4%2Bn3%2FLDZxDU9WTvzDqi4i%2BBjqkAe8EDUJjUEZPc6kxefOr8ZNMftDgHRbCIQ3IAoONv9XNRkHL8OdNE9EsEJqfJGG66c%2BoE7s11GrSIqJGbM0mb%2FToBvtFpi7tEprTQnbj4I16nl0tkvD%2FdUEUJYE%2B19wbPBS%2FOr9jcNky%2F1cS4NZ61SIWdTWM7W3aaNzZH7cCgkhWJTwjSTxKOSllai9xd0FkkuhY7f9vv3TSw9yuOEXUUpHjHp42&X-Amz-Signature=27a9323010cf4888d89a348dd5349b9529c6f9cef2ba64464bf714eb5c74e709&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
