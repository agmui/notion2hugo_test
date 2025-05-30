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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5LONOM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESR8wPsEy%2FifPkKlTAmVAeSHGFGKc1gFC9jAcdh03gQIhANxpENc77DNBd%2F%2FtnCISk8DYhdR3nRXRFjvOrTBbXa4pKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPAdFHfsyk34VoUF8q3AMnJKHHerpXUR9auVFMlkaiEKExNnRT%2F9OocLl4HLLtQ9XxIjUteW7j9KIBZNKzZXpKnSy5tAYdukYusk8rvDFV9ROH6qTbqCf7iQf6bSr2m%2FMlEMI9juKnotunZVcZ2cvHjVUGV3P%2B6NDmjzSHuCGT%2F9qwi85PStGjdS67tNLjMAgL5fDTdj1BJXPtk%2Fb7K4lPiY7xda3gzcUI7vkzYcoQUe9GNINmed3OLYTzBUKRyqzbCsTq9v%2FIQRRc25P2xEBpQYo4CuvzPZ1mpWTzjJFqEhipnUd1uG9fzKG3H1TBwF2WtPpHL8lwuMW2K24XYXELwx36osJKTIBE7jvJ6woXwnxKFkLYzZ39Y2EIS1wdF8EzZqDOVgu%2FDng63igrj9cMNY8J23VRJme0FJPlOs9R15YUUYAmU0GLkruQrruslnsDpksDdoyL4SDrSBIzluiyS93ltqI1hcu6af%2BUvg28RA%2FCEQjLKYDYHH%2BW9OS97LCGsITYXhvU4%2BA6BsZXiZeJtDxF9fzaI93qqqmNpgyJfmW5%2BTFO1rAItMDgdvlJV%2BA%2Bz3Xb8aMURsPY03iLNZHIgcsNebo49PR%2BtM58jf4YTvkHOVvzufKTOtB1Kt2Ml040LlzoXfLvnFcYhzDi8ebBBjqkARd%2By23BlKvO9nOl9Cviff2NHdxropGN7S8nsqjv75Z11jbSfI1gjORi%2Bg7mjpu6bAgJLys3vV6Dt00YASajPJlG0CbCt5vwaRDYjzAJE5tm8PWxjMAfh6a6P%2BikAFd1iy1ZeJ3RCeT1wuP9p%2FJb5qIPcmXW1lP1c%2FSC5avHSwwC%2BZqJmAeIY4fNFpJG5U3FKXKTpEOu%2BUX9eiEhLx55TLMCXqEU&X-Amz-Signature=8ddfb8af698287ded6711862209ad6b74e1c4073022e96ee59233179072b0874&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5LONOM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESR8wPsEy%2FifPkKlTAmVAeSHGFGKc1gFC9jAcdh03gQIhANxpENc77DNBd%2F%2FtnCISk8DYhdR3nRXRFjvOrTBbXa4pKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPAdFHfsyk34VoUF8q3AMnJKHHerpXUR9auVFMlkaiEKExNnRT%2F9OocLl4HLLtQ9XxIjUteW7j9KIBZNKzZXpKnSy5tAYdukYusk8rvDFV9ROH6qTbqCf7iQf6bSr2m%2FMlEMI9juKnotunZVcZ2cvHjVUGV3P%2B6NDmjzSHuCGT%2F9qwi85PStGjdS67tNLjMAgL5fDTdj1BJXPtk%2Fb7K4lPiY7xda3gzcUI7vkzYcoQUe9GNINmed3OLYTzBUKRyqzbCsTq9v%2FIQRRc25P2xEBpQYo4CuvzPZ1mpWTzjJFqEhipnUd1uG9fzKG3H1TBwF2WtPpHL8lwuMW2K24XYXELwx36osJKTIBE7jvJ6woXwnxKFkLYzZ39Y2EIS1wdF8EzZqDOVgu%2FDng63igrj9cMNY8J23VRJme0FJPlOs9R15YUUYAmU0GLkruQrruslnsDpksDdoyL4SDrSBIzluiyS93ltqI1hcu6af%2BUvg28RA%2FCEQjLKYDYHH%2BW9OS97LCGsITYXhvU4%2BA6BsZXiZeJtDxF9fzaI93qqqmNpgyJfmW5%2BTFO1rAItMDgdvlJV%2BA%2Bz3Xb8aMURsPY03iLNZHIgcsNebo49PR%2BtM58jf4YTvkHOVvzufKTOtB1Kt2Ml040LlzoXfLvnFcYhzDi8ebBBjqkARd%2By23BlKvO9nOl9Cviff2NHdxropGN7S8nsqjv75Z11jbSfI1gjORi%2Bg7mjpu6bAgJLys3vV6Dt00YASajPJlG0CbCt5vwaRDYjzAJE5tm8PWxjMAfh6a6P%2BikAFd1iy1ZeJ3RCeT1wuP9p%2FJb5qIPcmXW1lP1c%2FSC5avHSwwC%2BZqJmAeIY4fNFpJG5U3FKXKTpEOu%2BUX9eiEhLx55TLMCXqEU&X-Amz-Signature=4c29fc96ea5462489c7369dffff8842fdb65b0c437aae3caf3eb52003f37c479&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5LONOM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESR8wPsEy%2FifPkKlTAmVAeSHGFGKc1gFC9jAcdh03gQIhANxpENc77DNBd%2F%2FtnCISk8DYhdR3nRXRFjvOrTBbXa4pKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPAdFHfsyk34VoUF8q3AMnJKHHerpXUR9auVFMlkaiEKExNnRT%2F9OocLl4HLLtQ9XxIjUteW7j9KIBZNKzZXpKnSy5tAYdukYusk8rvDFV9ROH6qTbqCf7iQf6bSr2m%2FMlEMI9juKnotunZVcZ2cvHjVUGV3P%2B6NDmjzSHuCGT%2F9qwi85PStGjdS67tNLjMAgL5fDTdj1BJXPtk%2Fb7K4lPiY7xda3gzcUI7vkzYcoQUe9GNINmed3OLYTzBUKRyqzbCsTq9v%2FIQRRc25P2xEBpQYo4CuvzPZ1mpWTzjJFqEhipnUd1uG9fzKG3H1TBwF2WtPpHL8lwuMW2K24XYXELwx36osJKTIBE7jvJ6woXwnxKFkLYzZ39Y2EIS1wdF8EzZqDOVgu%2FDng63igrj9cMNY8J23VRJme0FJPlOs9R15YUUYAmU0GLkruQrruslnsDpksDdoyL4SDrSBIzluiyS93ltqI1hcu6af%2BUvg28RA%2FCEQjLKYDYHH%2BW9OS97LCGsITYXhvU4%2BA6BsZXiZeJtDxF9fzaI93qqqmNpgyJfmW5%2BTFO1rAItMDgdvlJV%2BA%2Bz3Xb8aMURsPY03iLNZHIgcsNebo49PR%2BtM58jf4YTvkHOVvzufKTOtB1Kt2Ml040LlzoXfLvnFcYhzDi8ebBBjqkARd%2By23BlKvO9nOl9Cviff2NHdxropGN7S8nsqjv75Z11jbSfI1gjORi%2Bg7mjpu6bAgJLys3vV6Dt00YASajPJlG0CbCt5vwaRDYjzAJE5tm8PWxjMAfh6a6P%2BikAFd1iy1ZeJ3RCeT1wuP9p%2FJb5qIPcmXW1lP1c%2FSC5avHSwwC%2BZqJmAeIY4fNFpJG5U3FKXKTpEOu%2BUX9eiEhLx55TLMCXqEU&X-Amz-Signature=12abde55849b36f46025e222ee285fa14b0d554869500948bb64a71eda4b4f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5QF3OP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3nYnNhuy7x2cKFhbvDTB2fUstrrFyumY%2BetXRiCfgPgIhAK%2F4XqbEHGbALgs2iM3KOTC7IQXEalHXGFGC%2FSkH0itMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytEzrwHwpJyVZmNgcq3AP7BJs%2FkfzOSEHlfQdXAFaF4hc8fHIeczwpVM%2BEnDNPx%2BdllrTYLfaLechLpTyN%2F89J07sjhontuTiIIZPcsHSpVuguCJFFDjOr%2FSNxATqMJC4iIgwU6NUfoypFfhbCPZ37Awmd0Vh0tPunoEiRuV6HFVE7BTWwlyOIzbaQluUf9ZOtcCwwdI0fJsHm49WSymm%2Fg34LeGFFm%2Bp49gUaOZ7nPjKlKKA%2Fv8lvGmPgSMqPdE4hGJGPXMcBlLCdlR2W1SX3hJrkU7IsmUXqjnhlvt2XAecLsr4jpa4tVVo6QNOuUhKZuZg0fofzizURIKsnoTu9ZRKrTewgb5XcoCmtfApNWVSP46T7ZhZHKNlb94w4W8UhWewKyvW%2FoTyIzPxa06rrnXyoppsUyIWNEf92tuqP9B8l4nmnJ1XIbjv3JSpxMLFCHosqvHtcV9LTlDr80zM7bZoNz0HuVckP8DA16ZufkbP21tJJo4RdUHFGnfsKghmKZgWGDHPlfiQ85FLRVnGO7jh8FfwI9ez4kcjLEvg5WZlL5W2n5C72l83LHLcP0DOaHPlB0kNjIQJtlB%2BOTJIEnn48ZIyT9corPUWJ70aYkT%2FhyuADp%2FfMjoJ688scykqVn%2BgVagNsT79YCjCfjOfBBjqkAd55EBc%2BX0UpTuTJs5aQaY6gc%2FL90I1SwDCFjFBR5Ofz4U0gGBsO%2FKz98%2FikiNMr6TqQvAHard%2BffFSrqEvheV7XFGtwk8put0SdRtuJGVlvGk4e3JaPBY3IYuYuLFH09Q00ayk5MEsF9hBMz9qsyUqWW%2Fl3p2ENfNyOh9sidy8UY52FTW0z2q1RSqlv2vSEAyzCaMOHCP2sGmL4V3YNE%2BrweMOc&X-Amz-Signature=eb276a4d88cc4d60517cdd087b648b51592aa177900fc5e6f2d154e64c8ff5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRNDCX2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF54dmVg6cx8uqgkmpVVTWH6%2F92%2FkrpfWdee%2BWev6kCgAiEA7kiaW7lKX5HqbPtxo3JcX2Bxbz0%2BdI1H0SOwSporh5YqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH3A9XushWBquD%2FgircA%2Bgz%2FNzbHYkg4tcdPPxYNlxF6it0K79mmt7DKY56a%2F0ltDT%2Bmvy8iqGz5tgWhTUVj4FdM4v0sgg3lepVMJsG5Y3TPrTNr8284Ku4Q4EGnyeZ2ZvSD4t6GnaaZqjaH4ADxJyVjGrr1WuE%2FrUxUVONdqno13p28gDLzBOyA9z5%2B9m2fRK3C2qribbmQYkjd%2FSXScaBRt56tN5vw4mQ%2BzpdgUu7iED094PiXYKRRpLO2MR7dujTGhyKikgi%2BKR%2FfHypCi1JrimWczovyyAgaRwj%2FmR613GDzZHtnx3x7NqqSGJyTJT1iyRANKVJcPdS1NVUZr1%2Fw9gxzQcID1qdYVY8eo%2ByXATHJYb47KX9YnuDBn7OGHBB%2BgtBNSpBxbj91rA2UKarJ4JzRyrEIlrZEOHpwuE%2BH9u0kmbIrb4P%2FXachYIozj0%2BfH3Tifv5Brm3ABVEFBy2vs8xVIY8XKArilYoB8d%2Fp7hSl%2B2G21WIlhSzl2oST9IhTrvSIqvdYmk%2FqCd17jokAEv5lH8y8dqchjSPT5aajufpe6mFOm2KCtvOvimzV4%2BBgWyWOX%2BMzsVGQZ0b2Rc4EkuxxwwVOtRWB1y5SqNhvmrZVogavDylu%2B2bDvahWMpHIOizVImAlf2vMMfy5sEGOqUBBr0%2FsBwZ75mPy3gdNZ2E87nFVBQsW3wm%2FW9CEUwBjXc3C0KYXMbmScAknhuPN04e8yFcrmI8wBeNMQYpqGgYBI8T7RP%2FtAuUZmZ%2FTA4zUz06SeA4i52bfKpBBS2Fig4r7DqbvDpJDMhNRNIEC97Un2rK7Vv6RickwaZjhC8Xh5%2BzgnjDWEC5dWeGoYy4heuOx%2BME46da30%2BSAa6DnPeF3pzy4L9P&X-Amz-Signature=56e1dca780a555624eb2426a3bbf4f590209c976d55f36afbbf1d974d0916e14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5LONOM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESR8wPsEy%2FifPkKlTAmVAeSHGFGKc1gFC9jAcdh03gQIhANxpENc77DNBd%2F%2FtnCISk8DYhdR3nRXRFjvOrTBbXa4pKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPAdFHfsyk34VoUF8q3AMnJKHHerpXUR9auVFMlkaiEKExNnRT%2F9OocLl4HLLtQ9XxIjUteW7j9KIBZNKzZXpKnSy5tAYdukYusk8rvDFV9ROH6qTbqCf7iQf6bSr2m%2FMlEMI9juKnotunZVcZ2cvHjVUGV3P%2B6NDmjzSHuCGT%2F9qwi85PStGjdS67tNLjMAgL5fDTdj1BJXPtk%2Fb7K4lPiY7xda3gzcUI7vkzYcoQUe9GNINmed3OLYTzBUKRyqzbCsTq9v%2FIQRRc25P2xEBpQYo4CuvzPZ1mpWTzjJFqEhipnUd1uG9fzKG3H1TBwF2WtPpHL8lwuMW2K24XYXELwx36osJKTIBE7jvJ6woXwnxKFkLYzZ39Y2EIS1wdF8EzZqDOVgu%2FDng63igrj9cMNY8J23VRJme0FJPlOs9R15YUUYAmU0GLkruQrruslnsDpksDdoyL4SDrSBIzluiyS93ltqI1hcu6af%2BUvg28RA%2FCEQjLKYDYHH%2BW9OS97LCGsITYXhvU4%2BA6BsZXiZeJtDxF9fzaI93qqqmNpgyJfmW5%2BTFO1rAItMDgdvlJV%2BA%2Bz3Xb8aMURsPY03iLNZHIgcsNebo49PR%2BtM58jf4YTvkHOVvzufKTOtB1Kt2Ml040LlzoXfLvnFcYhzDi8ebBBjqkARd%2By23BlKvO9nOl9Cviff2NHdxropGN7S8nsqjv75Z11jbSfI1gjORi%2Bg7mjpu6bAgJLys3vV6Dt00YASajPJlG0CbCt5vwaRDYjzAJE5tm8PWxjMAfh6a6P%2BikAFd1iy1ZeJ3RCeT1wuP9p%2FJb5qIPcmXW1lP1c%2FSC5avHSwwC%2BZqJmAeIY4fNFpJG5U3FKXKTpEOu%2BUX9eiEhLx55TLMCXqEU&X-Amz-Signature=cc76744ff861e3e0bbfdfd2adf053076da7597738a5fab4818f529d701f20792&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
