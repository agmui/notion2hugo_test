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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DYOKI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC6yQ3jvBTQ4EVrU2Gc163SC6%2B89DSM4nHrZu8vJF9%2FXAIhAOsPRIY%2FYOIn4sKY4WWxeg3IJTe28rRj9tkHNtTVoughKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8rNEDLgxcw1KNjDwq3AME0TR4d46KoCdPmztU0a2loyyaupuZJGJ%2FA0LvP9JtANOURniuhBpDtjvzHITu14jtazMnsea2zY3zXtm1uA%2FmoZ6tLRVw2Y9SI7ozDeYcvnHpnFqjCTMw%2BJyP7m4xcRg0vjiHBEQjv8X5f5w1zf62%2BN%2Fxc1tBd55q4oJs6tJcoaT4d4%2B53hgLoS%2B6%2FWqR9B1GFYQMMDoE7NZIL8MVrZ7iRRFUkJVgSfv1Ig4%2BCnCquijpmAcCIPuW0VkvZnYa1TFt4Yg8t3kTYDweNHpMTbeuM0Dm2gkdfX14NlGo1IsHcV8gPoE3raqgvDQORSWslm1O5dU0297evTgMakZcW8AK%2FeAKbzXUqUGMO5UjaaYSl8LG3u%2BcYOlLOmyWI%2B7X58Gmkn8PovjfIBbpb7SdPCW8eypDrfhakxmLMAAJ0OFjfNMInHJxyDOkeMuTjxf8SP2wVG9o%2F7O4qYHyVbokF4HPWTtws73HoEgNsd01tvEbYFdIdhgkKq2OyS%2BIdOpW60WpYWuRIeQI6BCb8DUIaJISVTcPptOYnqQCyN0LqS2nTvu2uRjKd74Bi%2BJ5gOyYvUZhrbZGwBCPXBP8x2rd1yprt0T2U9c2AxmlKt8kgxB2bM88sIkZyA5GwqCK%2FzCmp9jEBjqkAaCgF%2FR5NrfBRjVeI3dNl3BybcUffaSKA2F%2FZQ9BBTqdJNiYzbLicH8hQWbUbE5CnWENHOWQJbDqp0Mtw5EhPilehhFTaKwOPMSZ8TcCPKx%2BO%2Baa5M%2BLzRPO9Aq%2FTc68saa5DcIsS4M1iTxPVz2JdM%2BpaxzuLKzBFInSO%2F3SchLTRgi%2BzPMWMNT4Y0QrR%2FRG%2Fff7vvM0PQvn1BiivzfAD09hct2K&X-Amz-Signature=abaf8914dd59f54c1d8b18f08d72411009a1996b33ad1b963bf65b7294a53daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DYOKI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC6yQ3jvBTQ4EVrU2Gc163SC6%2B89DSM4nHrZu8vJF9%2FXAIhAOsPRIY%2FYOIn4sKY4WWxeg3IJTe28rRj9tkHNtTVoughKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8rNEDLgxcw1KNjDwq3AME0TR4d46KoCdPmztU0a2loyyaupuZJGJ%2FA0LvP9JtANOURniuhBpDtjvzHITu14jtazMnsea2zY3zXtm1uA%2FmoZ6tLRVw2Y9SI7ozDeYcvnHpnFqjCTMw%2BJyP7m4xcRg0vjiHBEQjv8X5f5w1zf62%2BN%2Fxc1tBd55q4oJs6tJcoaT4d4%2B53hgLoS%2B6%2FWqR9B1GFYQMMDoE7NZIL8MVrZ7iRRFUkJVgSfv1Ig4%2BCnCquijpmAcCIPuW0VkvZnYa1TFt4Yg8t3kTYDweNHpMTbeuM0Dm2gkdfX14NlGo1IsHcV8gPoE3raqgvDQORSWslm1O5dU0297evTgMakZcW8AK%2FeAKbzXUqUGMO5UjaaYSl8LG3u%2BcYOlLOmyWI%2B7X58Gmkn8PovjfIBbpb7SdPCW8eypDrfhakxmLMAAJ0OFjfNMInHJxyDOkeMuTjxf8SP2wVG9o%2F7O4qYHyVbokF4HPWTtws73HoEgNsd01tvEbYFdIdhgkKq2OyS%2BIdOpW60WpYWuRIeQI6BCb8DUIaJISVTcPptOYnqQCyN0LqS2nTvu2uRjKd74Bi%2BJ5gOyYvUZhrbZGwBCPXBP8x2rd1yprt0T2U9c2AxmlKt8kgxB2bM88sIkZyA5GwqCK%2FzCmp9jEBjqkAaCgF%2FR5NrfBRjVeI3dNl3BybcUffaSKA2F%2FZQ9BBTqdJNiYzbLicH8hQWbUbE5CnWENHOWQJbDqp0Mtw5EhPilehhFTaKwOPMSZ8TcCPKx%2BO%2Baa5M%2BLzRPO9Aq%2FTc68saa5DcIsS4M1iTxPVz2JdM%2BpaxzuLKzBFInSO%2F3SchLTRgi%2BzPMWMNT4Y0QrR%2FRG%2Fff7vvM0PQvn1BiivzfAD09hct2K&X-Amz-Signature=386be7207aeb78d2a243faedc8e95a5d91744c45b04c0e77218c8c04ff7161a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DYOKI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC6yQ3jvBTQ4EVrU2Gc163SC6%2B89DSM4nHrZu8vJF9%2FXAIhAOsPRIY%2FYOIn4sKY4WWxeg3IJTe28rRj9tkHNtTVoughKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8rNEDLgxcw1KNjDwq3AME0TR4d46KoCdPmztU0a2loyyaupuZJGJ%2FA0LvP9JtANOURniuhBpDtjvzHITu14jtazMnsea2zY3zXtm1uA%2FmoZ6tLRVw2Y9SI7ozDeYcvnHpnFqjCTMw%2BJyP7m4xcRg0vjiHBEQjv8X5f5w1zf62%2BN%2Fxc1tBd55q4oJs6tJcoaT4d4%2B53hgLoS%2B6%2FWqR9B1GFYQMMDoE7NZIL8MVrZ7iRRFUkJVgSfv1Ig4%2BCnCquijpmAcCIPuW0VkvZnYa1TFt4Yg8t3kTYDweNHpMTbeuM0Dm2gkdfX14NlGo1IsHcV8gPoE3raqgvDQORSWslm1O5dU0297evTgMakZcW8AK%2FeAKbzXUqUGMO5UjaaYSl8LG3u%2BcYOlLOmyWI%2B7X58Gmkn8PovjfIBbpb7SdPCW8eypDrfhakxmLMAAJ0OFjfNMInHJxyDOkeMuTjxf8SP2wVG9o%2F7O4qYHyVbokF4HPWTtws73HoEgNsd01tvEbYFdIdhgkKq2OyS%2BIdOpW60WpYWuRIeQI6BCb8DUIaJISVTcPptOYnqQCyN0LqS2nTvu2uRjKd74Bi%2BJ5gOyYvUZhrbZGwBCPXBP8x2rd1yprt0T2U9c2AxmlKt8kgxB2bM88sIkZyA5GwqCK%2FzCmp9jEBjqkAaCgF%2FR5NrfBRjVeI3dNl3BybcUffaSKA2F%2FZQ9BBTqdJNiYzbLicH8hQWbUbE5CnWENHOWQJbDqp0Mtw5EhPilehhFTaKwOPMSZ8TcCPKx%2BO%2Baa5M%2BLzRPO9Aq%2FTc68saa5DcIsS4M1iTxPVz2JdM%2BpaxzuLKzBFInSO%2F3SchLTRgi%2BzPMWMNT4Y0QrR%2FRG%2Fff7vvM0PQvn1BiivzfAD09hct2K&X-Amz-Signature=cb9649dd1646cf9f9a9315da63ec1bcbe3038617503697dbe839e222bbdad170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VY7FFUC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQ%2Bw93q1fop8AcEtwXZpw1xL5Jr64cCyUz1G4TY4%2FOgQIhAJCcjky7LECOuBWh%2BLZrzw0Ox7EnZu4MEu2uJN4NkE%2FWKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMFiJ6hJWnDiV6JLEq3ANKS4pQKbzVHT3xlucXDfFCqcYVhTDTjnhVw%2Bcl69HbDw3ox2iHlT60lP2WDqZxUKk%2BYlurx5GtmGfRC5hbZgffNXhVDJIAMOo8KZ4NqSmgh5mQLvDPt8eC7%2FtVZRlxNnsV%2B5oBNIT1klSNSJzQGCefZtIBz1laUtVKO6lcTuEEaBIjsmJwLNFxUFogrj8qLicI1lgeiElkH6Q4W7a9WrMsivcsMwWDIqnPyBDknhJi5h2zTODhpLUXc%2BWRpeGGxhWTOXg9dRrM4hI4PJZTQQtCIk6Qm8DO9rvBxbJ%2BzdVkQarFy9c8qfLy2i21eFifwcDG9zPp6I1%2Fmj0XxiigjBET906ksoksCjo9fWSxm2TexeyAE8A%2FzQhsFsGGwzGnFcWa5irlcIts42ICS5XVWy21b%2FZlIFoJIGHm4iHfv8%2BSIP2kbhRNoDgw5qp%2Br2JmAscmRu%2BibklekBBx5HUBN8rJdshIDx1PDImiPtoz3Km5pB14ceo%2F3ArYtizzNubv%2F8vM3lYdHfCUww0v1iZ6oI7yJMH4eBDbBf0TDXUcEZcBiFl%2BA932hXmz3gyPXCqWE0oUCdn56ZKF3MVi3KOckvXSkUXKDAU3jd%2B7qBZUtOwvC1SvN1GLXw40nGa5szDkptjEBjqkAV%2BxdEaevSD%2BA6xTBlCwNNAuwTk4No2jQ5egugoqd1aCuUZd6Ru4WdfDxq%2Fvyyv%2BE4yw3v%2BE5OepAfQlEYuaO0elpFnoqS7eBWMODWlnZBWUQNVXgI%2FDXI6sy1NP827BuqL4DrE2BHsdgqyz%2B%2BdGfEHztT3FbB%2F4J7VxYTkp6HPx3GvXXYh2sFMgWURv3Mn7b93AUnz%2FB8vBu43tJMIbhm44A26m&X-Amz-Signature=62df731b220ed12fbb2fe22029975cfdd6b9c79e0e1b582b4ca07c6290b43a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZZOGTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCID%2Fuu3yCG2XhY8tXFv58yO3skvByJPk9zbU8fZtj12OnAiEA7WR2n%2FmfjYDcW2tbRJ3wd5JbjojJWt6NlRiFAls0nhwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdyl82CM4h5tNIrNCrcA3CEdaLREidYtNopiPA6blAk0vkDmv%2FcKA8C8PQzJpLWBDvWXOUe%2Fzm8uWvPXQHdefGdxJ5b7lqy5UngJDWUXmVGmYlYRURu%2F8fAugQespk2kNez9CNjdwtvk97K66VEd%2Bo7UYia0UmDuKqlU97rbFQcjyUQYhL8a5K%2B9PJGm%2BHqEidsdH%2BhOXsNMNUMFwtmTFcfusd%2BU1WyK2ro4l5Rr%2FzNOrx%2Bj0EQpc0UhRH6qDPB76XTPbvM%2B%2Fu6hdd5nu9V7%2Ft647xgZoXlzUuVvRipxVsoLc2O1sEbj2F8ZwH%2BysDBTzTQrb7sSqiGtsDZ%2BHsf5aloK3sUEw4ejNNMGZKi3vbQTeauNN9tpfo8wZadDNZ1CuCoqy8c32ISLftbuk986Uhy765Foj1%2F6MNvyisZAbwaiPDr0jTCrm0Ufz0mWjYWDap6AobEqwTn4tMirXf1xg5xTyN0zE08KYbAOXdoM%2BXPvzlcjbViN85GVik8NK9G4l01siA4yuGD5UU90WKGkHWJLu5QL%2Bt8GJueIaXNRFiE5xZTvRCmhbDJidTYHs8aoq3bSE0Qe%2BfLAktfQHKCWD7S2772vMhdvU0JlETebp40T1mSkOMLO2HqY6cnnKOV6%2FNVBHpD0rS0CnbRMKKn2MQGOqUBxQGhbf7o4%2FR8ZneU3qf6nNWXKHrNLipe2on1OYN3ziD0MJO7p3OiWEPmU5TETPMHBptHP7zfQwdb3%2BbVePTlOow7uTm9gPi66sHMBlkrytqKjuU0y2R7N7lxxaMad10975Fqe86HnymBHQmTFyoBxc6MfEs8lfPy8r7qaB6AMs%2FcfEw73WMKdev7L4Ahgur9gD69eTvJYEYdv2n5p0iqK2rqHO7R&X-Amz-Signature=18240a5d76e9821a39dee5122ebe260cad9fc978e779606733224b3debe899af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DYOKI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC6yQ3jvBTQ4EVrU2Gc163SC6%2B89DSM4nHrZu8vJF9%2FXAIhAOsPRIY%2FYOIn4sKY4WWxeg3IJTe28rRj9tkHNtTVoughKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8rNEDLgxcw1KNjDwq3AME0TR4d46KoCdPmztU0a2loyyaupuZJGJ%2FA0LvP9JtANOURniuhBpDtjvzHITu14jtazMnsea2zY3zXtm1uA%2FmoZ6tLRVw2Y9SI7ozDeYcvnHpnFqjCTMw%2BJyP7m4xcRg0vjiHBEQjv8X5f5w1zf62%2BN%2Fxc1tBd55q4oJs6tJcoaT4d4%2B53hgLoS%2B6%2FWqR9B1GFYQMMDoE7NZIL8MVrZ7iRRFUkJVgSfv1Ig4%2BCnCquijpmAcCIPuW0VkvZnYa1TFt4Yg8t3kTYDweNHpMTbeuM0Dm2gkdfX14NlGo1IsHcV8gPoE3raqgvDQORSWslm1O5dU0297evTgMakZcW8AK%2FeAKbzXUqUGMO5UjaaYSl8LG3u%2BcYOlLOmyWI%2B7X58Gmkn8PovjfIBbpb7SdPCW8eypDrfhakxmLMAAJ0OFjfNMInHJxyDOkeMuTjxf8SP2wVG9o%2F7O4qYHyVbokF4HPWTtws73HoEgNsd01tvEbYFdIdhgkKq2OyS%2BIdOpW60WpYWuRIeQI6BCb8DUIaJISVTcPptOYnqQCyN0LqS2nTvu2uRjKd74Bi%2BJ5gOyYvUZhrbZGwBCPXBP8x2rd1yprt0T2U9c2AxmlKt8kgxB2bM88sIkZyA5GwqCK%2FzCmp9jEBjqkAaCgF%2FR5NrfBRjVeI3dNl3BybcUffaSKA2F%2FZQ9BBTqdJNiYzbLicH8hQWbUbE5CnWENHOWQJbDqp0Mtw5EhPilehhFTaKwOPMSZ8TcCPKx%2BO%2Baa5M%2BLzRPO9Aq%2FTc68saa5DcIsS4M1iTxPVz2JdM%2BpaxzuLKzBFInSO%2F3SchLTRgi%2BzPMWMNT4Y0QrR%2FRG%2Fff7vvM0PQvn1BiivzfAD09hct2K&X-Amz-Signature=1ca56eadebcd2160d72a79fd1ebb3b23cb1c3aaef44b3c340a9dd490bb191420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
