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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GJGNKIE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZaOPlthP0DNHmqf%2BhCNWPL8h%2FsGsuYWDrwyu9e4gPewIhAKKJum1s%2FT0ZmXVujx5WXsN0y8Z0AHf98rkFYpYxDsIKKv8DCBoQABoMNjM3NDIzMTgzODA1IgyBJcFf7ZYlfy6NlaEq3AMhc76HEjQGZjoyT15oKaINras4hvnMnj1BbzgqL%2Fiw2AJHT3nsMOOa8tpSyztRJvjenBDoEaKyLWogzzkvX6GtSeCmNPC2aMp5zFnIoO8dmSQd%2FK5hCbnFp9Jn7u2ZUrGADfDvlfITJXeHpi8IgDKRK9Lj2FJgz46lngEyVUL8TCe6ahIbl3LvemaPBwJfXSCUNJ1391w1CFADpCzmQctNUxk6sFMyatpWrlb4AcIZ5LcqkNUPDY%2FKPAt3D5WWA86L9VYiE6IhEH%2FlI7HzP9ewPiJyd7MaTDLoFnUPM8VsxVsWKDNNaLbT6XHqEtFFRUXiKs%2FQU7neTkI7gokTmJ31Ny6tOI1uKp6QfDD%2BcMpYdjxZAhwEC1wpyTSaheybR0PeCjAmswEjLz6ItRTCGG837D3u3P%2FyJBLqoQblvH1RXfmYe0rc3qe2KEAZLsaB%2FeT248mgJTF6IAVxnwagocUWKoHXMobQIY3QsKEske4%2BKS31rDweU42dmwcmPVFHvRVg6drIsHlQW673kFtZb9h5y4zm267fuKbLulN3DbDyZjzcpTUmuC%2B2%2B%2BW8TYm9UY%2FZnZDjzpXaCf6aexKYfKu1nDTxfvlbsKmn6xg2UWoDB26QYaK574y9%2BsC1GzDM%2BvS%2FBjqkAbAdu16owDV0Gq8jEYh4J1ursdlUQKE7EFjlBanffYT0pB4P7uIFjP%2Fq0oSXgoT%2FgIV7nFM%2B%2B1d%2F%2BtMct5lEAfCpvV%2B%2Bbfnq%2FFseeBw7TFO2Dn2YHy6m7z%2FaPUGZGnjwTsgqIxvjvzs%2BYmU0WL8h3ZPBfmzMVxLo52nbg4r48no%2BZTJeYKiNffTAr24uu1JpCDkxJhPcujhAxndj9mIQzfiCnmcq&X-Amz-Signature=d467f53214215f2242ded9e875c420c47d41bb590def2b1485b6b0cc208fcd00&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GJGNKIE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZaOPlthP0DNHmqf%2BhCNWPL8h%2FsGsuYWDrwyu9e4gPewIhAKKJum1s%2FT0ZmXVujx5WXsN0y8Z0AHf98rkFYpYxDsIKKv8DCBoQABoMNjM3NDIzMTgzODA1IgyBJcFf7ZYlfy6NlaEq3AMhc76HEjQGZjoyT15oKaINras4hvnMnj1BbzgqL%2Fiw2AJHT3nsMOOa8tpSyztRJvjenBDoEaKyLWogzzkvX6GtSeCmNPC2aMp5zFnIoO8dmSQd%2FK5hCbnFp9Jn7u2ZUrGADfDvlfITJXeHpi8IgDKRK9Lj2FJgz46lngEyVUL8TCe6ahIbl3LvemaPBwJfXSCUNJ1391w1CFADpCzmQctNUxk6sFMyatpWrlb4AcIZ5LcqkNUPDY%2FKPAt3D5WWA86L9VYiE6IhEH%2FlI7HzP9ewPiJyd7MaTDLoFnUPM8VsxVsWKDNNaLbT6XHqEtFFRUXiKs%2FQU7neTkI7gokTmJ31Ny6tOI1uKp6QfDD%2BcMpYdjxZAhwEC1wpyTSaheybR0PeCjAmswEjLz6ItRTCGG837D3u3P%2FyJBLqoQblvH1RXfmYe0rc3qe2KEAZLsaB%2FeT248mgJTF6IAVxnwagocUWKoHXMobQIY3QsKEske4%2BKS31rDweU42dmwcmPVFHvRVg6drIsHlQW673kFtZb9h5y4zm267fuKbLulN3DbDyZjzcpTUmuC%2B2%2B%2BW8TYm9UY%2FZnZDjzpXaCf6aexKYfKu1nDTxfvlbsKmn6xg2UWoDB26QYaK574y9%2BsC1GzDM%2BvS%2FBjqkAbAdu16owDV0Gq8jEYh4J1ursdlUQKE7EFjlBanffYT0pB4P7uIFjP%2Fq0oSXgoT%2FgIV7nFM%2B%2B1d%2F%2BtMct5lEAfCpvV%2B%2Bbfnq%2FFseeBw7TFO2Dn2YHy6m7z%2FaPUGZGnjwTsgqIxvjvzs%2BYmU0WL8h3ZPBfmzMVxLo52nbg4r48no%2BZTJeYKiNffTAr24uu1JpCDkxJhPcujhAxndj9mIQzfiCnmcq&X-Amz-Signature=e211e17fc4b98e419949bac771b4fbd8155e6076921f8b3dab9fdc920fbef832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJYEYNP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMzI90qh1HKxgxA0ZXQGCjyf1O3uowSytDONhRCy5eYAiBb%2B0CE5QA9AMOeu5GrCARVoNdVp4n8lU7G6OzW6dl9vir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMrSRj7RKT5lwUjnlHKtwDCNRfpoNnLNbqUHE8EKmL2QBIX2aYazElBkrouER3RRIBAsRH18FMqEOOxkDGN0NZMXRda3MDjQiwND1gL5bgb2X%2B7KQ3pjxD8GbnNWd%2FaFZdqXqHQvFNJAl72jG6wC6nlaEraibYfWlnNv%2FrvNaeCGYQ6sM9BS0cvHv1pVwlENFDpCQsyX7BLmwaM40wggHs4gHCb1SqIJTzrVm0DkuscD5t%2FB4tNnp2o9z9vz162JEJ3a8GaehGKO%2FQ9%2F0tKNvMr5ulDvFgoRmQMWol8MAw0lWMnfvwNiJhgbLMOpNIs6FnZbtv%2BKVCtKyb%2B3WSa0rkCgFnTOEGNQ7I1FaDab4zJWK5SgLOUY%2Bwk9R1it8%2BEGW8JpomgK5Owy4bJhOazeuI6Wbj%2BmMg%2FNq%2FJeMvfkhZx%2FENpch4t5Yn%2FQJY3ARutECwMyURSHhbKUPZpEa4qSa1z9RIHgXvppGK9Go1kr1xYnVMyxgPgYryLwLOoKiTh%2F3XYH0YSljnJBFTLbGKHZPpTeof0RN57Qd3CCFcqtRLEhQ2TtK6oy1gvvpuNM6Hu5tPX7r08vPt%2BDnUuL8QDsT%2Fc5VmhGCNtWBDSr36B92E298FZZm%2Fwr6J3BqQ4BT4KusC0DZ%2B1kDVIJQ2CLAwiPr0vwY6pgGcWNnioQ%2FQ%2BR5AEv1TUsNEkJFZgBsCyr2px31Sz%2FITH83bcufPoGogQTqUSumLb9qUCbB%2B2gOfdELjG029SLRDcBsve5DxAh2t5o7otwa63we75HCOKn5qedkHfnZcqFJUvbUkFFncGeCh%2FAILCXCthAb7%2F%2BiVLNmR%2Fk4Oqw6QL7YDXSdtMxMTioK0rrWGvoRxlbSJZsF8ke9jvp1mm9Sn%2FELQnKVz&X-Amz-Signature=9e53a0546b5438d4f3d6d65a4bf841569b7a217df127172bc8b68b0e2dd0cf85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQNS7ZA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN8w4YNzR3mCk%2Fr2O8RO9lmUEKsHA9%2FV%2B0WjshIXl2%2FAiEAlLH7jVQTj6m0TdqUDOgLgYO8JI7i%2FW2QtOcj2J9QWAIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGSOg5WiUnLWsOo4wSrcA3RpJyO%2FqGNtpANn45iIgnCPI53C0D8WHiMn%2Bowy2zwN3T4Ftnr%2BU6XDCddW%2FgT67OjzJ2ubAqENZSSBZ4diGhCvNoHb7c1i3wRcYBeEXghc04qGyFZzrbpbaWfsrxKfla1VKl1ETvki8rh08t%2Fc9fIO8peoWzVohrwpm%2B5PyQ84Q0Z4o%2F1bv5rO3%2FeIR6qp8dfHCb%2Bdm59aHWEHB4j9RR9PxIbBoBeoA%2B11%2BiDol9JfnSZ0br%2BLl%2BtEWpuq3Xj8QY1SVrJbMcKad8Hp0AFO352483CvixA%2BCI7bPq6%2FQI6Xx%2BfueYWYJiNiV4tiUH4w2fAQ7v4%2FiADxTSBX4pVXrAjlbGfFkz2p23rWN4KjzXWyGfAnUu3UUDbRnj0iewLc%2FBAnAtAaiSbT%2Byj3J2uphw1ki7aP%2Bf5zutoE8MCP37S8808xiFWsx%2FCy4WKc54sCiQw2NQXiopLDSMjQp5u3MFSIPxGtDRwYYcy9ri%2B6jmiu%2B%2FGrHOMM89T42rvvl69yMpsKikGLJFTBNaOroZF5JD37T1xsLgNZ%2BVy4o1FTCWK148LTIi%2Bzan6RLO7O5aM%2ByQXCmh3mkz7Uu7OB5Yrkt%2B2NIBPE4gp3ObNkgZgb1JitRLA08biXvhLr2kK0MP%2F59L8GOqUBvws5QyAzJ%2FwReegfroxd2v%2Br%2BYxsqltw5DO8D5pEb27D3XVGJcrdhWPi3jx3Xz5F2VwYlTgVvIdPY1bzSftPHU0SyNeKME9CbpK%2F7qVVsJIC3h29ViaVtILJ%2FyOMKqnqhSaTSqGX1BMdotDkhSxqvwQyrximoLICDiSWpUjYd60h0Q9Cb1MxqzcSXvwUN%2B85P4BOCg5IwRcY9a%2FhZ5F%2BUnvCmz3G&X-Amz-Signature=04497d8d57b5bb5290a8501827571d4ff2c4c5cecb912cf6092b8660f7226cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GJGNKIE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZaOPlthP0DNHmqf%2BhCNWPL8h%2FsGsuYWDrwyu9e4gPewIhAKKJum1s%2FT0ZmXVujx5WXsN0y8Z0AHf98rkFYpYxDsIKKv8DCBoQABoMNjM3NDIzMTgzODA1IgyBJcFf7ZYlfy6NlaEq3AMhc76HEjQGZjoyT15oKaINras4hvnMnj1BbzgqL%2Fiw2AJHT3nsMOOa8tpSyztRJvjenBDoEaKyLWogzzkvX6GtSeCmNPC2aMp5zFnIoO8dmSQd%2FK5hCbnFp9Jn7u2ZUrGADfDvlfITJXeHpi8IgDKRK9Lj2FJgz46lngEyVUL8TCe6ahIbl3LvemaPBwJfXSCUNJ1391w1CFADpCzmQctNUxk6sFMyatpWrlb4AcIZ5LcqkNUPDY%2FKPAt3D5WWA86L9VYiE6IhEH%2FlI7HzP9ewPiJyd7MaTDLoFnUPM8VsxVsWKDNNaLbT6XHqEtFFRUXiKs%2FQU7neTkI7gokTmJ31Ny6tOI1uKp6QfDD%2BcMpYdjxZAhwEC1wpyTSaheybR0PeCjAmswEjLz6ItRTCGG837D3u3P%2FyJBLqoQblvH1RXfmYe0rc3qe2KEAZLsaB%2FeT248mgJTF6IAVxnwagocUWKoHXMobQIY3QsKEske4%2BKS31rDweU42dmwcmPVFHvRVg6drIsHlQW673kFtZb9h5y4zm267fuKbLulN3DbDyZjzcpTUmuC%2B2%2B%2BW8TYm9UY%2FZnZDjzpXaCf6aexKYfKu1nDTxfvlbsKmn6xg2UWoDB26QYaK574y9%2BsC1GzDM%2BvS%2FBjqkAbAdu16owDV0Gq8jEYh4J1ursdlUQKE7EFjlBanffYT0pB4P7uIFjP%2Fq0oSXgoT%2FgIV7nFM%2B%2B1d%2F%2BtMct5lEAfCpvV%2B%2Bbfnq%2FFseeBw7TFO2Dn2YHy6m7z%2FaPUGZGnjwTsgqIxvjvzs%2BYmU0WL8h3ZPBfmzMVxLo52nbg4r48no%2BZTJeYKiNffTAr24uu1JpCDkxJhPcujhAxndj9mIQzfiCnmcq&X-Amz-Signature=6fa407df698fd3f0b263abad27dd97322bdf8fda8b50ac191a632a3819ce6c24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
