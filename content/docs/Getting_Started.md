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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R227COEK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7HCBeArwczYIFmyTrNP%2FFu%2BLYF9LOL3PmFEcFZip%2BIgIhAMPWp1a7MLlKr1n6oTdq%2BJy6eImKLv0Fy6UQoLT%2FsFMYKv8DCEsQABoMNjM3NDIzMTgzODA1IgzYG0v8cP%2FoJWWcgYIq3AOJZdisol80g1bzagxTGpreX4v4LeqY9AE09X8q7YyobKWtAJutqj56NXLjfBBV4K30TvyyNy6ot4URxa1mMAj4FvhaoCu4zzsjthDPrU5bbOtFMY4cADjosVRHigowYdHHqz4YOk6KI5N8%2Fli47YPrU6rsndTzA8t0vIWKWJ6kUz%2B8S8R%2B8U2sMr9JUEiRMY0R4DBOETaSlTbas4Oonf%2FiL6w3hpL%2B83OI6WYBCcHJ3foKtau8lxYeu2adCA56LUJMG7WWCG5beRDZvkj5NllnZqVZbZmPUiSCarkPbNxmW2rJ5IEw4Z8Vp%2BJPdz6KRcbnJQJIv01%2FNdwJl%2FJyXE8CC8uNMrdm0YPzBYzkRoy%2Bl7vpDmqxy2zWj4VXRlhIxwzSEiYX8ZT0NeEoL0xpjStji3R2JWHEJX073rKzwSiriAV4PPdqUHDRzJrd6cJCxN3ksYfCwtV3cnApSwL%2FRhMAoV8ZpB8AF3o7V%2B8QhiU2fXgkr7fR1G34gTJq60%2FedC5%2BbiG1t711M3ZqYDdpMenOvDQBeA8utAvmpqRhUoFGr0QHhrspjpbqS8TmfM8Cr%2B9f37QDkVDFR7nu6fqJd4A0OKZk5fKRcvOrMzCjvkWdn1RScmskP%2FKgz1aZkzCW0NLBBjqkAcbHTyrLEm2Z6e88RZYYAOjCVKCLrkPG%2B3GvEptBkvuWfxKEH8Qv9CMLLsX5m81GyNAh0cSGFfDUkXx5NoHm2O4tyKCaOk%2FWYZAMpCcwz5fJOaRtHvkK5wXh%2B4OHu%2BNaY7NsUHRK3enjuMvcr4pHZHbtZ8VrTlBXiIoJVjsk69F8fHLBN0u%2FwsPCehHlbJELJmnuYs7eofZSRrPsYY2eL5%2Flm94v&X-Amz-Signature=348a484247255190b4ee96af834a5192fbff341d3eea462fdb80d6ca09d0eeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R227COEK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7HCBeArwczYIFmyTrNP%2FFu%2BLYF9LOL3PmFEcFZip%2BIgIhAMPWp1a7MLlKr1n6oTdq%2BJy6eImKLv0Fy6UQoLT%2FsFMYKv8DCEsQABoMNjM3NDIzMTgzODA1IgzYG0v8cP%2FoJWWcgYIq3AOJZdisol80g1bzagxTGpreX4v4LeqY9AE09X8q7YyobKWtAJutqj56NXLjfBBV4K30TvyyNy6ot4URxa1mMAj4FvhaoCu4zzsjthDPrU5bbOtFMY4cADjosVRHigowYdHHqz4YOk6KI5N8%2Fli47YPrU6rsndTzA8t0vIWKWJ6kUz%2B8S8R%2B8U2sMr9JUEiRMY0R4DBOETaSlTbas4Oonf%2FiL6w3hpL%2B83OI6WYBCcHJ3foKtau8lxYeu2adCA56LUJMG7WWCG5beRDZvkj5NllnZqVZbZmPUiSCarkPbNxmW2rJ5IEw4Z8Vp%2BJPdz6KRcbnJQJIv01%2FNdwJl%2FJyXE8CC8uNMrdm0YPzBYzkRoy%2Bl7vpDmqxy2zWj4VXRlhIxwzSEiYX8ZT0NeEoL0xpjStji3R2JWHEJX073rKzwSiriAV4PPdqUHDRzJrd6cJCxN3ksYfCwtV3cnApSwL%2FRhMAoV8ZpB8AF3o7V%2B8QhiU2fXgkr7fR1G34gTJq60%2FedC5%2BbiG1t711M3ZqYDdpMenOvDQBeA8utAvmpqRhUoFGr0QHhrspjpbqS8TmfM8Cr%2B9f37QDkVDFR7nu6fqJd4A0OKZk5fKRcvOrMzCjvkWdn1RScmskP%2FKgz1aZkzCW0NLBBjqkAcbHTyrLEm2Z6e88RZYYAOjCVKCLrkPG%2B3GvEptBkvuWfxKEH8Qv9CMLLsX5m81GyNAh0cSGFfDUkXx5NoHm2O4tyKCaOk%2FWYZAMpCcwz5fJOaRtHvkK5wXh%2B4OHu%2BNaY7NsUHRK3enjuMvcr4pHZHbtZ8VrTlBXiIoJVjsk69F8fHLBN0u%2FwsPCehHlbJELJmnuYs7eofZSRrPsYY2eL5%2Flm94v&X-Amz-Signature=edb6fad7756f34ee8ac859c27408c8db20a7f01ece2e9dcf0a4441b4d0add8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R227COEK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7HCBeArwczYIFmyTrNP%2FFu%2BLYF9LOL3PmFEcFZip%2BIgIhAMPWp1a7MLlKr1n6oTdq%2BJy6eImKLv0Fy6UQoLT%2FsFMYKv8DCEsQABoMNjM3NDIzMTgzODA1IgzYG0v8cP%2FoJWWcgYIq3AOJZdisol80g1bzagxTGpreX4v4LeqY9AE09X8q7YyobKWtAJutqj56NXLjfBBV4K30TvyyNy6ot4URxa1mMAj4FvhaoCu4zzsjthDPrU5bbOtFMY4cADjosVRHigowYdHHqz4YOk6KI5N8%2Fli47YPrU6rsndTzA8t0vIWKWJ6kUz%2B8S8R%2B8U2sMr9JUEiRMY0R4DBOETaSlTbas4Oonf%2FiL6w3hpL%2B83OI6WYBCcHJ3foKtau8lxYeu2adCA56LUJMG7WWCG5beRDZvkj5NllnZqVZbZmPUiSCarkPbNxmW2rJ5IEw4Z8Vp%2BJPdz6KRcbnJQJIv01%2FNdwJl%2FJyXE8CC8uNMrdm0YPzBYzkRoy%2Bl7vpDmqxy2zWj4VXRlhIxwzSEiYX8ZT0NeEoL0xpjStji3R2JWHEJX073rKzwSiriAV4PPdqUHDRzJrd6cJCxN3ksYfCwtV3cnApSwL%2FRhMAoV8ZpB8AF3o7V%2B8QhiU2fXgkr7fR1G34gTJq60%2FedC5%2BbiG1t711M3ZqYDdpMenOvDQBeA8utAvmpqRhUoFGr0QHhrspjpbqS8TmfM8Cr%2B9f37QDkVDFR7nu6fqJd4A0OKZk5fKRcvOrMzCjvkWdn1RScmskP%2FKgz1aZkzCW0NLBBjqkAcbHTyrLEm2Z6e88RZYYAOjCVKCLrkPG%2B3GvEptBkvuWfxKEH8Qv9CMLLsX5m81GyNAh0cSGFfDUkXx5NoHm2O4tyKCaOk%2FWYZAMpCcwz5fJOaRtHvkK5wXh%2B4OHu%2BNaY7NsUHRK3enjuMvcr4pHZHbtZ8VrTlBXiIoJVjsk69F8fHLBN0u%2FwsPCehHlbJELJmnuYs7eofZSRrPsYY2eL5%2Flm94v&X-Amz-Signature=0f567e48b3803236b2dab254d756aa1fd23b92c68597b6a02bed77dcf74fa763&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624DZPRB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOBZpdjlomggmU%2F3C8%2B0aH6t%2FEvghjBbwMPVIi6aKKyAiEA63RTBNw2Tq6UHRp0S%2F3VFRWRBClPzG%2B9RF8%2B83A0GPAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLh7EWOFiGWmGQLD9ircA%2BzAc1MNMCkPau1OLcnhVnPjouBRJfda7q3eKqFlAckX2Z6FOsnR3g4SM7YqIh%2FVsp%2BpqdTnDza089RaqaStCNDGbhZtz%2FrYUk9mqKEPoPkhvap0t8Toxv%2FbvJI86F7HLu5DasyWDxwFSZrzGspgy8Cv5Mkc2iPxIxc6wS3lv6w8VR6ztUjroASrvFZy%2BumD8SPgZXIRiUtu%2BqV3NrYLC43LhheIM7uHxN6PIofg9y7qmfzSZNZJCkiqve8J5ja%2BAztgxzW6L52xnW9mD%2FBcrHqpGvxcmb6Lr2Nf%2FOdxwZrd5k6GX1KBte9NYOBubaiWRO%2BTBpvb7WrA17QYvByjcT4EY%2Fx3yhStnDBu%2BXrGE8Pu%2Ft4b9aZkI09STeQgP%2FqYbX3ihUS5eYev590H0HqJ3daScdSueM7ueJ4WdsH9eQYU5Us3mHBTWvuzSKNnZZsBiw1mpglrX51zDIPAZQpAAUot8cbSbszkAzBdH3rn%2FEKcSOCSr0SX8SJ2Lv4wa0UTgP81ttp25SrA1OijF4GOcsURjvINFZGzpSa4uQKY0Lopy0JrpMX0GbHpY1%2FVQIS8%2B39d3jOBoAd5L4LgNp%2BFFP1rElFi%2BX%2Fn3DEIxt5zfKxw4huI6RV8Y3Quw7x8MO7P0sEGOqUB90c1RaqupH%2Fi1uP6kvOubJYottlK%2B%2Bt9ehy9Xo4eeonKlAYlVmJFRGQFKmCGhlhEbOls5yELxjKJX2WkgOEeO2e3c3TWdIihoSZC45znxLLJ9X%2B9KMbwMlzNYiqPsGkgZdX6zD%2BeIdhTLMG6RTvxxX1kmXNLyH01llZful7r%2BHhJIb2k8Ihq4effSxBIByUTNkqwY28P5HyNS7oDHezcmSRVq%2BV%2F&X-Amz-Signature=80508feca6235ab4905214c82b7128befdcf9becce78c64cc8f54dddd40fef19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLENMYE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxroGvbo7Nu%2B08QFevVnmYeYHIJUHYAIBItSmQLnDSpAiB9JBvTIqG6rO%2BZ%2FLPlDulTptfkuouKZbVbwBeMZ4pE%2Fir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4iztDzk%2Bi0w4UQ6pKtwDrHXc%2B0mbR0JL3mtbYjxo8uqAipGiy9w4%2FpUropokJdVrIuDpO1R1bdciw%2B5crw8lEQTrgzSUkptu7UCaEDoW3p5sr%2FTSi9uy4ZVxMHpRKOZep0pXY3leV2ikWRyvv3X%2F9370Ph4CJBmRYSGb9lZ54OWkHE48JbAZHMQtY5ATb1l%2FloJY5kfobuZ8A13KfcOPDZcUrK%2BlrN8ZzifS8jvEcLdDdEvFXjM1rQlTFNwJvllu0qSjZNX9hRcWZ03Mb%2BAD83Rsbk9lWFiGBxkM7loCGVt6jf606jJ6OiUhmrxOGOxq4iRox%2FWcEjWAKeqq4K9KWUO8krBDdGZNSmu0ASqwm3zm60fX3%2FgIuxvSVbWy50Tr9kvGi6jxAw2x3ozUjjJ8XJ%2Fd2clCzOY1uW2f%2F1EjEFz7GGBpg3z9JnTpaDdsMB2m2xcGxx5m3U9Q0d%2BC0Jizs0YLnCMOnro4TZSiNv4slGoOKTFy8Ip1Q5iw4QVQTxtY6VLnRTLb6YrT3Phv12LVhNeL%2BperqefNJJ1pGmD1a%2FhVdMc8bAomVyt20mDcZEq53B7pqHrq8YWj5GcTTUmNW%2FTP6gWRrFxHdHKjZGsqlxL%2BJiivSIKSdW7r74M%2Bxg4Dx7uI%2FXIuDNm4woEw4M%2FSwQY6pgHGqJGHHGpUYp0xxR35FbZqAX3C6JgNXey5rV%2FlV5OK%2BEfOnMX3ETAPVnSYI2WnHuUEvNF5vYv1JSAi%2FO%2BslA7YZBO3%2Bx0deuUcwcl%2FwioWlUcvKm%2Fm%2FBZQvtBiAYUkgy3w%2FxjUr5RqU5shfEVPulPR3KuvLkJsNi77qyMMePJa14%2FPU1es8IDKuEDsfP2dR%2B4%2BBRW0%2BD6r3V8PiB7A4PmDpOR3iiWu&X-Amz-Signature=906170b003db6f4e4d7841134e453f900eaa31ccdf9ac69a7876467105e875ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R227COEK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7HCBeArwczYIFmyTrNP%2FFu%2BLYF9LOL3PmFEcFZip%2BIgIhAMPWp1a7MLlKr1n6oTdq%2BJy6eImKLv0Fy6UQoLT%2FsFMYKv8DCEsQABoMNjM3NDIzMTgzODA1IgzYG0v8cP%2FoJWWcgYIq3AOJZdisol80g1bzagxTGpreX4v4LeqY9AE09X8q7YyobKWtAJutqj56NXLjfBBV4K30TvyyNy6ot4URxa1mMAj4FvhaoCu4zzsjthDPrU5bbOtFMY4cADjosVRHigowYdHHqz4YOk6KI5N8%2Fli47YPrU6rsndTzA8t0vIWKWJ6kUz%2B8S8R%2B8U2sMr9JUEiRMY0R4DBOETaSlTbas4Oonf%2FiL6w3hpL%2B83OI6WYBCcHJ3foKtau8lxYeu2adCA56LUJMG7WWCG5beRDZvkj5NllnZqVZbZmPUiSCarkPbNxmW2rJ5IEw4Z8Vp%2BJPdz6KRcbnJQJIv01%2FNdwJl%2FJyXE8CC8uNMrdm0YPzBYzkRoy%2Bl7vpDmqxy2zWj4VXRlhIxwzSEiYX8ZT0NeEoL0xpjStji3R2JWHEJX073rKzwSiriAV4PPdqUHDRzJrd6cJCxN3ksYfCwtV3cnApSwL%2FRhMAoV8ZpB8AF3o7V%2B8QhiU2fXgkr7fR1G34gTJq60%2FedC5%2BbiG1t711M3ZqYDdpMenOvDQBeA8utAvmpqRhUoFGr0QHhrspjpbqS8TmfM8Cr%2B9f37QDkVDFR7nu6fqJd4A0OKZk5fKRcvOrMzCjvkWdn1RScmskP%2FKgz1aZkzCW0NLBBjqkAcbHTyrLEm2Z6e88RZYYAOjCVKCLrkPG%2B3GvEptBkvuWfxKEH8Qv9CMLLsX5m81GyNAh0cSGFfDUkXx5NoHm2O4tyKCaOk%2FWYZAMpCcwz5fJOaRtHvkK5wXh%2B4OHu%2BNaY7NsUHRK3enjuMvcr4pHZHbtZ8VrTlBXiIoJVjsk69F8fHLBN0u%2FwsPCehHlbJELJmnuYs7eofZSRrPsYY2eL5%2Flm94v&X-Amz-Signature=82e45d0df04f1f3f56cd44ad02e180e303c463c9ae480afbdd23dcbf617ff808&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
