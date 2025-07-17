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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243WSUQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDMCV7WSAjl7TKuD9iJihTcGrURML5lNC7O%2FlNhG8QMMAIhAL6SKXKn%2FOxZKOUbquQ5%2FMGHAQCoTH%2FeqgmldbHK00TBKv8DCHAQABoMNjM3NDIzMTgzODA1IgyNlkzxWCB3XKbGgHEq3AO1gWRVgslISq8bpCJgz%2Bp85OM%2BgrR7XeDIcsnA52vheaHvmFifv8b1CUDi3Nn%2Fw6AVdRsl1cTuZHod%2FTud08FyqRq95ycMCf1A8P56i6k1pMmyRB0BX%2F%2Bp8Wa4ewr0zwGhaALIMx2vrONkbco1C896tLbhyZpns4c%2Bj0gaDqFUpJcOV9g8zSKhBvKiEoD%2BwGxl1%2FvELHexrYidVWXDm7EHunSFnwPISzBhhPIcQSjgUPkVNUgW1EUhlUqHguTSI8RQ5IsCwiDaguWXQg7piFGY9gVUPeBrfv90vrRqh%2Fg2iOXoJ8fJI0ymNTqfWoi5n2ktM0r3qh7tqtB5K2Uu5NR%2FRRYsTfIxP5oCISn05n34Ov8H4aW0iGFuwSozn%2B%2FIE8AnIfRMvcV98CAzzg4kWCM16wOe%2FotUDio02aypa9uCGciYrEoIUqPwJb4%2FWiig29d7PqtNm7hv%2FtIJuwNTkgP%2FeKyee1HDfuUWasfCDH5YSgUwe%2F4h1AjCAlQ%2BmY5Z2VRQune4tDXRA%2FtkxV2a%2FJyr9upQP6fKyhem5O55pCj9csPaleRj1zHrkdbwqcUZ0wWsTw2KR1QepQKrKednxSy9zTP3yUp%2FCXAlqiqY4oNgyQdeCK35bvnfB1ebrDDAwOLDBjqkAV38LU2XWSbKRPI56t2TTpUsUGmrE54Pyspypf0RVft5i5Fzgy52vG0RF41Mdh3Ag%2FLnhWMAoOMIuK7P%2F9co1aHaXg0fJ5EIiSrqpG4mAgUqzHVzjCDRfOx3%2FnclZpxeIrWDFgLqF%2BYCle%2BwZLLbHwFNDoKPReA%2BJuos4iJFGl0HgNCvFSpJhDOkX4DiZBxzch1FN7ZiUW1TL2LG61hWPNlo6bc2&X-Amz-Signature=a6859418c51cfad5573bd40f392b8e2b1b5f3a98142e317943f537ee65a649eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243WSUQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDMCV7WSAjl7TKuD9iJihTcGrURML5lNC7O%2FlNhG8QMMAIhAL6SKXKn%2FOxZKOUbquQ5%2FMGHAQCoTH%2FeqgmldbHK00TBKv8DCHAQABoMNjM3NDIzMTgzODA1IgyNlkzxWCB3XKbGgHEq3AO1gWRVgslISq8bpCJgz%2Bp85OM%2BgrR7XeDIcsnA52vheaHvmFifv8b1CUDi3Nn%2Fw6AVdRsl1cTuZHod%2FTud08FyqRq95ycMCf1A8P56i6k1pMmyRB0BX%2F%2Bp8Wa4ewr0zwGhaALIMx2vrONkbco1C896tLbhyZpns4c%2Bj0gaDqFUpJcOV9g8zSKhBvKiEoD%2BwGxl1%2FvELHexrYidVWXDm7EHunSFnwPISzBhhPIcQSjgUPkVNUgW1EUhlUqHguTSI8RQ5IsCwiDaguWXQg7piFGY9gVUPeBrfv90vrRqh%2Fg2iOXoJ8fJI0ymNTqfWoi5n2ktM0r3qh7tqtB5K2Uu5NR%2FRRYsTfIxP5oCISn05n34Ov8H4aW0iGFuwSozn%2B%2FIE8AnIfRMvcV98CAzzg4kWCM16wOe%2FotUDio02aypa9uCGciYrEoIUqPwJb4%2FWiig29d7PqtNm7hv%2FtIJuwNTkgP%2FeKyee1HDfuUWasfCDH5YSgUwe%2F4h1AjCAlQ%2BmY5Z2VRQune4tDXRA%2FtkxV2a%2FJyr9upQP6fKyhem5O55pCj9csPaleRj1zHrkdbwqcUZ0wWsTw2KR1QepQKrKednxSy9zTP3yUp%2FCXAlqiqY4oNgyQdeCK35bvnfB1ebrDDAwOLDBjqkAV38LU2XWSbKRPI56t2TTpUsUGmrE54Pyspypf0RVft5i5Fzgy52vG0RF41Mdh3Ag%2FLnhWMAoOMIuK7P%2F9co1aHaXg0fJ5EIiSrqpG4mAgUqzHVzjCDRfOx3%2FnclZpxeIrWDFgLqF%2BYCle%2BwZLLbHwFNDoKPReA%2BJuos4iJFGl0HgNCvFSpJhDOkX4DiZBxzch1FN7ZiUW1TL2LG61hWPNlo6bc2&X-Amz-Signature=61c6635e676686b9c872cf52356b8846ae2d69d29412bae80a07873932157103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243WSUQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDMCV7WSAjl7TKuD9iJihTcGrURML5lNC7O%2FlNhG8QMMAIhAL6SKXKn%2FOxZKOUbquQ5%2FMGHAQCoTH%2FeqgmldbHK00TBKv8DCHAQABoMNjM3NDIzMTgzODA1IgyNlkzxWCB3XKbGgHEq3AO1gWRVgslISq8bpCJgz%2Bp85OM%2BgrR7XeDIcsnA52vheaHvmFifv8b1CUDi3Nn%2Fw6AVdRsl1cTuZHod%2FTud08FyqRq95ycMCf1A8P56i6k1pMmyRB0BX%2F%2Bp8Wa4ewr0zwGhaALIMx2vrONkbco1C896tLbhyZpns4c%2Bj0gaDqFUpJcOV9g8zSKhBvKiEoD%2BwGxl1%2FvELHexrYidVWXDm7EHunSFnwPISzBhhPIcQSjgUPkVNUgW1EUhlUqHguTSI8RQ5IsCwiDaguWXQg7piFGY9gVUPeBrfv90vrRqh%2Fg2iOXoJ8fJI0ymNTqfWoi5n2ktM0r3qh7tqtB5K2Uu5NR%2FRRYsTfIxP5oCISn05n34Ov8H4aW0iGFuwSozn%2B%2FIE8AnIfRMvcV98CAzzg4kWCM16wOe%2FotUDio02aypa9uCGciYrEoIUqPwJb4%2FWiig29d7PqtNm7hv%2FtIJuwNTkgP%2FeKyee1HDfuUWasfCDH5YSgUwe%2F4h1AjCAlQ%2BmY5Z2VRQune4tDXRA%2FtkxV2a%2FJyr9upQP6fKyhem5O55pCj9csPaleRj1zHrkdbwqcUZ0wWsTw2KR1QepQKrKednxSy9zTP3yUp%2FCXAlqiqY4oNgyQdeCK35bvnfB1ebrDDAwOLDBjqkAV38LU2XWSbKRPI56t2TTpUsUGmrE54Pyspypf0RVft5i5Fzgy52vG0RF41Mdh3Ag%2FLnhWMAoOMIuK7P%2F9co1aHaXg0fJ5EIiSrqpG4mAgUqzHVzjCDRfOx3%2FnclZpxeIrWDFgLqF%2BYCle%2BwZLLbHwFNDoKPReA%2BJuos4iJFGl0HgNCvFSpJhDOkX4DiZBxzch1FN7ZiUW1TL2LG61hWPNlo6bc2&X-Amz-Signature=feb34eaa44febc97877261c873e6564b7cdc097e22a62f159bec0ba92c654ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMCEGAO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIC24UK3nZ6inJ5QD%2Bn0DwqMGDu8YF%2B%2FQAhggKJyfQIiZAiEApUAdjyfkZ%2BjLDrwH387mkE4WeGEYcontr36WoaeY%2F0Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFjiWMq%2F%2F8Z9D9BTmircA%2FViA1dfFyIOALsETEbgQ06gb3ilDvsEJuj6s2puEivUAZVGiNJAFhpFz1Z46gDTOQkFy49YPwhUVPVFGm%2F0vxtxjtMD%2F5LlQURPyEs%2FSJm789pQSeiK%2FKBF56EV2r3KM2P%2BnZCFadxgNsXM4QKM%2BvLJ00zAhpWlef5zo00bb88PeUCJuDbzPzaup%2F%2F%2F49lvEGc18CdgIjDBpLnJw5L9B45rK%2BU57olSnOpB5BYLxVmpZqThEX9CNy7%2F0kbBmSluVrxwsbyVrWAYBfCCpyTVV%2FPFzpHAOsy%2BxVtqpSAS3BdWTeKM0RX%2Bi6KA7jwt3rDGcTFCn6XRT8vXY2c0jqw50MjGfucbL2kqbuA8kMwKMl%2F%2F%2FT%2BWVO0EZ5tkAgX2WD3n7o%2FUPu4RwlcLT6p6krAP8L3GsPBanNoYNxTCawYiaO6mHQGB%2Bc13deLKcMmDJ0EFt8uo9ySJiVqU%2Fu6TMI5ZVfCEL470PZ9%2BkbRfapiucGwHf7VMSSncv0bcNJWPVo9vEaEeNCgLaFaoppiCJO6jp%2FUcBGBPqofDXP5x%2FsE3BZXMKxB%2BCjtl0efCZlTbxnJMZMrmViQC68UbW51FRmYuN1ivSJ3J60Qr9BN2CNixGH7TfaQIdH04N%2FxrhrQlMIjB4sMGOqUBjSdRQxl%2F7mzaNsTK6CbUXT1UduQYrs9xHa%2FTYz%2FwA1Mww6Uxi8qKhfhwpxZpZElErBHZC9tNN9ocJopaqMhg7dhswXG2qJG0HSAtNHIfMJjGXY6fo8SavIJSEhXHh3pR6f0jCdUvVU%2F5rPUud5P%2Bk5CKWhMLhkLnbFnDr3isX7JxOTpK%2BZm89UXYhBOGbkB3dfOBrVIaBeHfy2rIkuEyfrW8SELo&X-Amz-Signature=b8d286f0331c998386211c96da58a76901f7c160dbcf0760495369cea68a7976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=bcfbeea5dfab84b63d6e1f6a307a56569a6cfbc3c001529a1a5492556d5ebe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243WSUQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDMCV7WSAjl7TKuD9iJihTcGrURML5lNC7O%2FlNhG8QMMAIhAL6SKXKn%2FOxZKOUbquQ5%2FMGHAQCoTH%2FeqgmldbHK00TBKv8DCHAQABoMNjM3NDIzMTgzODA1IgyNlkzxWCB3XKbGgHEq3AO1gWRVgslISq8bpCJgz%2Bp85OM%2BgrR7XeDIcsnA52vheaHvmFifv8b1CUDi3Nn%2Fw6AVdRsl1cTuZHod%2FTud08FyqRq95ycMCf1A8P56i6k1pMmyRB0BX%2F%2Bp8Wa4ewr0zwGhaALIMx2vrONkbco1C896tLbhyZpns4c%2Bj0gaDqFUpJcOV9g8zSKhBvKiEoD%2BwGxl1%2FvELHexrYidVWXDm7EHunSFnwPISzBhhPIcQSjgUPkVNUgW1EUhlUqHguTSI8RQ5IsCwiDaguWXQg7piFGY9gVUPeBrfv90vrRqh%2Fg2iOXoJ8fJI0ymNTqfWoi5n2ktM0r3qh7tqtB5K2Uu5NR%2FRRYsTfIxP5oCISn05n34Ov8H4aW0iGFuwSozn%2B%2FIE8AnIfRMvcV98CAzzg4kWCM16wOe%2FotUDio02aypa9uCGciYrEoIUqPwJb4%2FWiig29d7PqtNm7hv%2FtIJuwNTkgP%2FeKyee1HDfuUWasfCDH5YSgUwe%2F4h1AjCAlQ%2BmY5Z2VRQune4tDXRA%2FtkxV2a%2FJyr9upQP6fKyhem5O55pCj9csPaleRj1zHrkdbwqcUZ0wWsTw2KR1QepQKrKednxSy9zTP3yUp%2FCXAlqiqY4oNgyQdeCK35bvnfB1ebrDDAwOLDBjqkAV38LU2XWSbKRPI56t2TTpUsUGmrE54Pyspypf0RVft5i5Fzgy52vG0RF41Mdh3Ag%2FLnhWMAoOMIuK7P%2F9co1aHaXg0fJ5EIiSrqpG4mAgUqzHVzjCDRfOx3%2FnclZpxeIrWDFgLqF%2BYCle%2BwZLLbHwFNDoKPReA%2BJuos4iJFGl0HgNCvFSpJhDOkX4DiZBxzch1FN7ZiUW1TL2LG61hWPNlo6bc2&X-Amz-Signature=7331ed7908817af47642a8fcc89290edfc7124ffade3e4ea49dfc280b4e8acda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
