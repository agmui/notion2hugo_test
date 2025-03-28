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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY2I5XK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk2KAfT9%2F5K3Tf31ODnQ5Z0g%2BZCC5m18sKhk5OskynwAiEA%2BJnnkz8qBmNAr8C6jiIiAOgKZec3SabBJBI0rR%2FeC%2BAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPs3u0FlAqBVKFa3RCrcA%2FPhUOuCCfAJQV2DC5550o%2FufmpUYBVMddKNUWDhf%2B7KrmwVaUueUVk6RXm0nrXYpew2LVHMJR6a0YO64%2FRMtKO4kbOzzQI7EUOjbwmzjPRPlQQih4jdqE89fssex5aIBQWCDDiJ0QwIT%2BXzoxkqARQ5AgiahQteNq6Hl5uP7RBlhlbxs542VtoDDaKXstWS%2B1tmuKpf2Xr0yh4xcpQcoUMb8wScGsuyD%2BpqtGjfPru8fJnNrJWfuxLXAla74N0sH7OU%2FctQ8BeJPXOaARJ%2BMa%2FHWzl3lgdbLJ9qbMuLeWZCiibcw3muot7nwznPzeEK2K8Qtpbn8ItGN7OwmjRV1LMP1WrChX7lNcRXlmC0eOKnau%2F2l6GFtJFR3ng9nngUukVnNPJx07tPpkRoFQuzlnWO9Eg%2BTELmoYhKjbEUX2IBKchynEOPFnhM9BDFKOy51Z%2Bsjycyxi%2FQcr%2FVwtaf7QJYOFxhzDzMQN74fG41bL%2Bx1LNLNNKDkF66p2DC8T27FLCFGTexFeISj%2F0762eYRkcOPcLljrOe8MlR5%2BEzO8eRIDx3RvhM56Gal6TE6JMErVC6FB5w7cjIgCNj9j1v975rqJwe5vGFkd%2BLgzIJkw%2FI0%2FZ6lHuklAOSW00NMNLbl78GOqUBZlVFyKlIvO3EDDupN9sDjrhwhSv9HfeDyS2vsCb1OT1CDe5brNHGuZJISL%2BWUmQlsRg6huSv8AK4viH4YFXYAUcvemfDhEcmer84ittV6W9iDohBGHXSeOkEvUBdRMrIRkVKZ9Z0kUwQjWsVghf38s9sfrHKNS5YOXSuUqD9nAHZHHCVS4mJmV51qojsTe9IiDAiJd8HoU0mrgrCilMfL%2FuCBdOy&X-Amz-Signature=45df329d83efd6aadcd6a7a7c62f7adbf19e977307d8e88b3033eaa51a72c971&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY2I5XK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk2KAfT9%2F5K3Tf31ODnQ5Z0g%2BZCC5m18sKhk5OskynwAiEA%2BJnnkz8qBmNAr8C6jiIiAOgKZec3SabBJBI0rR%2FeC%2BAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPs3u0FlAqBVKFa3RCrcA%2FPhUOuCCfAJQV2DC5550o%2FufmpUYBVMddKNUWDhf%2B7KrmwVaUueUVk6RXm0nrXYpew2LVHMJR6a0YO64%2FRMtKO4kbOzzQI7EUOjbwmzjPRPlQQih4jdqE89fssex5aIBQWCDDiJ0QwIT%2BXzoxkqARQ5AgiahQteNq6Hl5uP7RBlhlbxs542VtoDDaKXstWS%2B1tmuKpf2Xr0yh4xcpQcoUMb8wScGsuyD%2BpqtGjfPru8fJnNrJWfuxLXAla74N0sH7OU%2FctQ8BeJPXOaARJ%2BMa%2FHWzl3lgdbLJ9qbMuLeWZCiibcw3muot7nwznPzeEK2K8Qtpbn8ItGN7OwmjRV1LMP1WrChX7lNcRXlmC0eOKnau%2F2l6GFtJFR3ng9nngUukVnNPJx07tPpkRoFQuzlnWO9Eg%2BTELmoYhKjbEUX2IBKchynEOPFnhM9BDFKOy51Z%2Bsjycyxi%2FQcr%2FVwtaf7QJYOFxhzDzMQN74fG41bL%2Bx1LNLNNKDkF66p2DC8T27FLCFGTexFeISj%2F0762eYRkcOPcLljrOe8MlR5%2BEzO8eRIDx3RvhM56Gal6TE6JMErVC6FB5w7cjIgCNj9j1v975rqJwe5vGFkd%2BLgzIJkw%2FI0%2FZ6lHuklAOSW00NMNLbl78GOqUBZlVFyKlIvO3EDDupN9sDjrhwhSv9HfeDyS2vsCb1OT1CDe5brNHGuZJISL%2BWUmQlsRg6huSv8AK4viH4YFXYAUcvemfDhEcmer84ittV6W9iDohBGHXSeOkEvUBdRMrIRkVKZ9Z0kUwQjWsVghf38s9sfrHKNS5YOXSuUqD9nAHZHHCVS4mJmV51qojsTe9IiDAiJd8HoU0mrgrCilMfL%2FuCBdOy&X-Amz-Signature=d236fc41b3594d77f00145f09a00fd2e4fd06fe920ecc78d162558931aa65389&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJFAJS6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrrhMkYEPNof8CZ0etv9yzVNOH1poh7aRZDgFhqwKTJAIgDIFhNkq9AsqHTlkaP2Q0PpOEOHYhtjTq7vYuo6LbOJwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPW0LSdYM1xTc8RdnyrcA3x9Jbj1WuVSEFLHmJZH2By5g4gUxFfunLxbF0kh3UPkDyuMazPzsAW3P6M4I74YSDDnKJq0sE1%2B6Dnj6%2FPAfFTcT%2FAGwGQZMBJ%2BykIJ5Sh7xyU1mRlfOQCpQNy0jFGxG%2BlTe16dzwyUmMuB1rx4rxV2witJG665NDjSwH7%2FLZ1Mxd7HGKrLhDER%2BR2wtBEZIHcnxrxhlI4LNShJWy2zyYA%2F4l9YKLmjvjzUCK0OoAqhI6QDrAyAqk3HZQwcEiSBtSVkXbn4lFGdx27bTAgBOULJ44ABYCethqCG8vAifotMBkrLROkjonDid0FqxA6cMVZ9FyYtiu7pVN6HTg40TmspZEIIt2Bu8ygpUosdDDt3ZDAvYwRpWSl4a0Dggnw7QSaYzXydbtmD9AJt8RfaArtNHqA31tmdqcPXCUPrw0TT45HGua2pdVAvQ9jZJb8WT8XGvASThDhtx%2BuOq%2BSGPeumdWxfsXArD%2FN1szF1VsOjRbMt8Ng2NQA%2B47l82xytZoOZiVk%2BeokJ3TPr07LksbfDq0w2NBe%2BUGQWa63ZaMFO%2BAGfcDNQvJub8t4q%2BKN%2FsK%2B0Z63TT%2B90yzpAiQBmedrBQ5qKB4g4Ma%2BdfIzAdsv%2BuHEZ57iv%2BKVi0OFoMJrcl78GOqUBKiBfeXM2LdHATUKR02rKf50pHKm5iX19mXyUwx7QGqALpnsCTkGvvfMzaTj9CE68xA9bxEXH5Cbx%2BRB5NYjhsSeNy6E%2BurzJiJEd%2FXG1tXARL29hresMqdBoqvMFw2gMiGZ6VL9XdxD7kqcxWKDBd7ZYd0mhI7o4EiPuFLQbBTVLeQOmo%2Bv2nBPqUVpJpOGIGGWlw7NM8PzHI3ysI%2Fwni7F9y3Pa&X-Amz-Signature=7c1b330aae2f2764ace98d88afdb651ff342b354c2dcd06abcb7fab5f542b1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGCHVMX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy9AzWIgDdZsiBUS2nE8vG7ryZRjg6dwFc4Ejx9IR%2B0wIhANBvoZ6E610kdPiIec0H5l5mNe2lpgZrovvvXBq%2FT3l9Kv8DCFIQABoMNjM3NDIzMTgzODA1Igzc2ebABvxc%2FT29ytgq3AMouNWpBgtaHUb7XLqRZV%2BfTtSiPJkK2GMrl7SfUdhWfZaaoecN9y1QAeipZ7dSq48UAoMn7Szq5kTu3OHc72s8D58O59AmwEifKtLDaE3cmfrB%2BapCUmMVmLPxBQWfB9k08Gs9hXh3hnQKlx9h8D4oEXNgpObL0oc91DzPT6f5G7xEpJAy40d2%2BeUPfhNxkDfdYupNjAkmKyGr22Ozf4Gn9cLBuFLTv2JpjafNp1aEsP1TPJ%2FV6wG2VC%2F4oIhz8IyZDqKlDirs6935%2B4bp9F6dlzAfsx8kQmZDdbWWDVzHeeAnixGLb%2FeWeQphLZx1AOU86rD7KqKevwLqshDdens%2FgQBNs%2B6YiGvmRJGQgQse5ILZWX4BgIyfNbSdbFRABfjx2ddtl7AWG2Gi3sHqoCiDTHZ374OFG6JLo9fRob7ltB%2BAgBGqLslrZcXDzVoiybc3i%2B2HT6vLqKkQy9mbuukxMGiOl6IooqkN5Ztn0%2BUO7VqnJM2JtHfrjVHoY%2Fc%2Fu55EgGxkp%2BGJHEsVDgobbxKF6aHqUOm4O5twRletJxGwBNiFF3HjjkSVO42MpIHKVbJ2mNqI%2F8KdAB1jXjhbvQJ9oSo0B2vhjvMoFrq0Lgk8NJfb20hng73qVKe2iDDS25e%2FBjqkARVKd8NikdFHJXWlgYvm7rQ7VC%2F9Jp9UqmJeISmD2ANbPl9o0ojpD%2B5Yrpz7wgUTYa0xxlDEEbWKnDU4YCZGYS1ddY0bV22cHvixmzkn16biTv3IYTovyU3frHbE8TaKsf4pmB3dL9pOShWOoBrnFhQCnj8Zc0aYDATRurgX9U58jXGdePgbqOknXnEnRAaeTLmk18VK0lLBrAN7j2ub1NdFp68m&X-Amz-Signature=8f18044faf432c44f8e09dedc772531fc729c6bf6eabf1bc24c1c5bce04de608&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY2I5XK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk2KAfT9%2F5K3Tf31ODnQ5Z0g%2BZCC5m18sKhk5OskynwAiEA%2BJnnkz8qBmNAr8C6jiIiAOgKZec3SabBJBI0rR%2FeC%2BAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPs3u0FlAqBVKFa3RCrcA%2FPhUOuCCfAJQV2DC5550o%2FufmpUYBVMddKNUWDhf%2B7KrmwVaUueUVk6RXm0nrXYpew2LVHMJR6a0YO64%2FRMtKO4kbOzzQI7EUOjbwmzjPRPlQQih4jdqE89fssex5aIBQWCDDiJ0QwIT%2BXzoxkqARQ5AgiahQteNq6Hl5uP7RBlhlbxs542VtoDDaKXstWS%2B1tmuKpf2Xr0yh4xcpQcoUMb8wScGsuyD%2BpqtGjfPru8fJnNrJWfuxLXAla74N0sH7OU%2FctQ8BeJPXOaARJ%2BMa%2FHWzl3lgdbLJ9qbMuLeWZCiibcw3muot7nwznPzeEK2K8Qtpbn8ItGN7OwmjRV1LMP1WrChX7lNcRXlmC0eOKnau%2F2l6GFtJFR3ng9nngUukVnNPJx07tPpkRoFQuzlnWO9Eg%2BTELmoYhKjbEUX2IBKchynEOPFnhM9BDFKOy51Z%2Bsjycyxi%2FQcr%2FVwtaf7QJYOFxhzDzMQN74fG41bL%2Bx1LNLNNKDkF66p2DC8T27FLCFGTexFeISj%2F0762eYRkcOPcLljrOe8MlR5%2BEzO8eRIDx3RvhM56Gal6TE6JMErVC6FB5w7cjIgCNj9j1v975rqJwe5vGFkd%2BLgzIJkw%2FI0%2FZ6lHuklAOSW00NMNLbl78GOqUBZlVFyKlIvO3EDDupN9sDjrhwhSv9HfeDyS2vsCb1OT1CDe5brNHGuZJISL%2BWUmQlsRg6huSv8AK4viH4YFXYAUcvemfDhEcmer84ittV6W9iDohBGHXSeOkEvUBdRMrIRkVKZ9Z0kUwQjWsVghf38s9sfrHKNS5YOXSuUqD9nAHZHHCVS4mJmV51qojsTe9IiDAiJd8HoU0mrgrCilMfL%2FuCBdOy&X-Amz-Signature=1dce6d46042689cfef3bd1cb3ea39b1bfe32692c8880659b5e0dae360f1c7463&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
