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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5AQLHN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDsfr0OwOIgujTM15WYQ6SsW2B6WgsLLCO8DApEtbKGTAIgfLhDPrzaOobzGHP65owaO69RnQe9GrtHtQYE0cR5d3gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGSP4N9nDeNIr1WbGircA9BEG4Q69v8e5yHID3kGWop3IY4uT8mvAIyg4U4xwfIujgTtUgeeWuBaGyfDZ0pfuW7UBrLhIc4u0Y%2FLQTXfZtFVTxpwpeuCXdJ1sVKzCmTHuKSxGWxkQRpiANe7e1wKOXJosqfxDYB%2BoSkvPIjy9zaxjtOdcLnalh24x2dUtqywKB0CJOGVr5P71VkpUlIam9SZfNa0rAVnow%2FeyP2Bnup2LoAVz34xqhuaIpe7Mm39c8cZiTLzupaox0%2FebPVTPJ%2BGjBbeuF30uL%2BLCft5UAFQNG%2BLtcyYJDjLD%2Fyh1vOGl4Uu%2FLzOydklzayR1elrB72mc5RY0E4loBWuXPsg1SEzcE%2F6PcwjrY8vK2kRGvun9RF%2BWBQl2ul%2BavfQ5aqg9s%2FCiBL7fRR3AsI%2B48Rfc9yzHEDL81aAgbYJ%2FW%2FYgElBA0VThhXNWJu3XnScL5vVqALrOeDiuIxOzmYGQKQ3OhKjLat1gAOcVrRNGYT2zfAlacyVCNU3r6tLt8330Bj14pAaUwyEr21gXi3UNC1EuV%2FKjSLzZbSFZoxjageyKd8DAwxre9hYKEDmFiqPLloUtsxbmPiPTN1AGIACBDsI6DJpdiLtC8d63%2FRB3nayidIylB1fSpBhWDBRYMeyMJDF6b4GOqUB2C80%2FkMTpQwZER2nurBp6LsBQwskm9G4JRAusm9qh6oW668cUPdilUVN%2FSeaZJw1RvYIt2lCISxJlJvIsML76Ix3QLG28%2Bpq3MvlQhEuEECwRYb%2BMWENJ7wjFO%2F4wlXa%2F2MCtVl1B1Xte2OPE0QB2FiAI9vJlL%2B5kz5MRMFxMo2x%2FVQ78uO0ezBzc%2BUkoIoPklAWwlBLcZTfXc0P9jQdJbfYMJn2&X-Amz-Signature=85fcffd3ddf8090493c159594225000301bb19652621bff35107db72cc1a29f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5AQLHN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDsfr0OwOIgujTM15WYQ6SsW2B6WgsLLCO8DApEtbKGTAIgfLhDPrzaOobzGHP65owaO69RnQe9GrtHtQYE0cR5d3gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGSP4N9nDeNIr1WbGircA9BEG4Q69v8e5yHID3kGWop3IY4uT8mvAIyg4U4xwfIujgTtUgeeWuBaGyfDZ0pfuW7UBrLhIc4u0Y%2FLQTXfZtFVTxpwpeuCXdJ1sVKzCmTHuKSxGWxkQRpiANe7e1wKOXJosqfxDYB%2BoSkvPIjy9zaxjtOdcLnalh24x2dUtqywKB0CJOGVr5P71VkpUlIam9SZfNa0rAVnow%2FeyP2Bnup2LoAVz34xqhuaIpe7Mm39c8cZiTLzupaox0%2FebPVTPJ%2BGjBbeuF30uL%2BLCft5UAFQNG%2BLtcyYJDjLD%2Fyh1vOGl4Uu%2FLzOydklzayR1elrB72mc5RY0E4loBWuXPsg1SEzcE%2F6PcwjrY8vK2kRGvun9RF%2BWBQl2ul%2BavfQ5aqg9s%2FCiBL7fRR3AsI%2B48Rfc9yzHEDL81aAgbYJ%2FW%2FYgElBA0VThhXNWJu3XnScL5vVqALrOeDiuIxOzmYGQKQ3OhKjLat1gAOcVrRNGYT2zfAlacyVCNU3r6tLt8330Bj14pAaUwyEr21gXi3UNC1EuV%2FKjSLzZbSFZoxjageyKd8DAwxre9hYKEDmFiqPLloUtsxbmPiPTN1AGIACBDsI6DJpdiLtC8d63%2FRB3nayidIylB1fSpBhWDBRYMeyMJDF6b4GOqUB2C80%2FkMTpQwZER2nurBp6LsBQwskm9G4JRAusm9qh6oW668cUPdilUVN%2FSeaZJw1RvYIt2lCISxJlJvIsML76Ix3QLG28%2Bpq3MvlQhEuEECwRYb%2BMWENJ7wjFO%2F4wlXa%2F2MCtVl1B1Xte2OPE0QB2FiAI9vJlL%2B5kz5MRMFxMo2x%2FVQ78uO0ezBzc%2BUkoIoPklAWwlBLcZTfXc0P9jQdJbfYMJn2&X-Amz-Signature=51518e5c3a245c67dbc2a867c1ba7af8bad41ff4a3c9205a7c2b5a8b29ac51f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4YKZZPY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICVXuWefoCDmuejYE%2FD6ugufcvvoQjiOMnCrf%2BGD9VboAiA5YOOwX3CVuspoXnC9yLWoidU2XEJAtT%2F9QJILRLuZzyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM81hTaUUJk%2BC5lqwxKtwDcRRHBr%2B64cP16%2Bt3cpbt1d7TJPKmSfwmbRkjGss59Y%2BpUo4Vg1AHgLnLOBj%2BoZAWdCXItd0wU7uPw3SnYDQ%2FH08YCLvMgFizXkS0ZB%2BBqEsv59moEg%2FuqRlKza4f8zbzOPoWLRO3yGlsSUY%2F9UkQeUngWW31hfBVimvSSq2lS6DbDQPjuZooQ476lBCmcjh3q%2BQjIvKanUFPI3kLzpEF9%2B5F5ZtJdzQk8REHoCvLPKQL7xTQmgbRvww2%2FLYlf7CXdmtUV%2Fj4t59nHwjEWd%2BY341taIWyhayYm7plwi5brCoTIdnMgohjA1l%2FV6zDV9C6xsPIau%2F%2Bl1wnzvlXYCXZN1VlCjwZ8zbhlzlI0wZfHrTaNXQwIYKNqpsZVtn36axqFrHoVXKPcpMl2eSOtwumMxegdDykuP%2BBqWuUnlS6AgEepHohGZ27dpAeX%2Fa1xIglLsOlIYvHc7vGLensRkFgn1r8igVJjibkn6GcW2A0mVBmZEaE%2BFf6MU2YaSr9AQzMrimUV6kHG7jpyqz3N2PuVBThM10ihN5kIbB2uqfzaTKZpDMkDji0WAzXMIt9Yzb8xOkDsO85Mir2TDrqH9YfLpIcWKL7lgLvNXKU8pM8uSCQxjAbtHxl%2FlmZN34w88TpvgY6pgGWtRpy9UBZBcYPxqoYqvqY4zi1tlttBY8NBSmEDBY0%2FJSkVET0%2Bam9z6WKHWc4RUKp72E4EtqVJ9%2BOBLWIGuThUo2JI9gKlz1UpWLWX8%2Fs8yPbGdLL2OdRNMmufI9109Ni8RhSqj3%2B8%2FdsYonkvf%2BDjpOhY68dVs2f8iyK1UsoApszJszq%2F2q3nkXP1DlH4GgSqqJuBXsIYhc9G%2FQeMBa90PFBxLa6&X-Amz-Signature=a77e5b4944314118e4a24ffd0b1f486aeaa63bf9fc150a8b50314a4e01715850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P33R4EP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF%2Fkw2BtJBveQzC9uYIhZPyrwFWppq3G9SWcK0Pc%2B0a8AiEAzyLsvOeCfGdTRy%2Bd1VSeOY2Zq0ArFf66jobiBYOitEEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPy5%2F6hpxPHfCQg%2FxircA6GaQGq%2BRPEdjUYq5oGzeTwIAtgutT7wySr7MfSlOvm7J%2F3yXlXXO4D7z859Ya5j3B0fR1v7yt7m%2BT%2F8kn5qEAcOiTvzdzhA1m44j5o5BEZgudktcqnGOqDL1bfTVLY%2BT654U5T3tTzCcc4kgI%2Br7tikJwNH1OV4xS%2F%2BeUnZba8WSuCCnZ4zEu0p%2B41LfPX5jD2nAz9pKYSL2dA3%2BFIuLZjB%2BK%2FUOCspE2Tudiuf6aN1DyZnqwPp%2Bosl1OjDqwh1zTE1DAbXDJ7l8BhkPOHMGOMQNqYQb7AiFn1Yw7plauZL6JG1YUChccpz47iZuorT4heVnjwinY9AJ7BixkjxJyET603zMorA%2FHQOLeJsAEM7OUqdZXNxMXYgWhdlMdEyYr35pxaLZ%2FtHdCOVtk0R58sIL%2Bs6CvTz3NOJ7lqt%2FdRrUoHXqgGQDhfd2tXugfleGKFm%2FUwtOZspiOW4q7Z96HOQbFkOGTEvNnvCN4ZjV%2BeVZLNd21ZeDcyW56Avu9d9NlyoIaWNNx6A%2FYYshQvCbvRWMjMRZJ%2B%2FeBhdbpWyxvGw31%2FW1V8fQRzJkmY5tS0qlZpRWx5Yd3G4o0v%2BLSv%2BxohU%2Bf1MESjuu95xs1YtMHRe7eR8obQS54%2F4r1vNMNTD6b4GOqUBZgUjks9AABRCfbWQUcuDYz%2BvkY2fCkDPoisTAGabPa9bTueoBa2d9cJ%2BuF3QSoI6FqWBJullFIgWTdXtUE28fUPFuCjwiCh7iIpuZsut8yGIcLXt1uTlvMLpJ5C4YFXTDm5k6MKL0jjp7Y7FmgYVgsr%2FMbXGXdANBqPDU%2BxZ2CYERA7WJ22Hq%2Bt5xcj5oBi8hYbW1CKk2yeAgc98P3uwwKyCl2L0&X-Amz-Signature=bd66d370d2118fff9d55306534834551040eb95785df966f50b427b15c7c130c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5AQLHN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDsfr0OwOIgujTM15WYQ6SsW2B6WgsLLCO8DApEtbKGTAIgfLhDPrzaOobzGHP65owaO69RnQe9GrtHtQYE0cR5d3gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGSP4N9nDeNIr1WbGircA9BEG4Q69v8e5yHID3kGWop3IY4uT8mvAIyg4U4xwfIujgTtUgeeWuBaGyfDZ0pfuW7UBrLhIc4u0Y%2FLQTXfZtFVTxpwpeuCXdJ1sVKzCmTHuKSxGWxkQRpiANe7e1wKOXJosqfxDYB%2BoSkvPIjy9zaxjtOdcLnalh24x2dUtqywKB0CJOGVr5P71VkpUlIam9SZfNa0rAVnow%2FeyP2Bnup2LoAVz34xqhuaIpe7Mm39c8cZiTLzupaox0%2FebPVTPJ%2BGjBbeuF30uL%2BLCft5UAFQNG%2BLtcyYJDjLD%2Fyh1vOGl4Uu%2FLzOydklzayR1elrB72mc5RY0E4loBWuXPsg1SEzcE%2F6PcwjrY8vK2kRGvun9RF%2BWBQl2ul%2BavfQ5aqg9s%2FCiBL7fRR3AsI%2B48Rfc9yzHEDL81aAgbYJ%2FW%2FYgElBA0VThhXNWJu3XnScL5vVqALrOeDiuIxOzmYGQKQ3OhKjLat1gAOcVrRNGYT2zfAlacyVCNU3r6tLt8330Bj14pAaUwyEr21gXi3UNC1EuV%2FKjSLzZbSFZoxjageyKd8DAwxre9hYKEDmFiqPLloUtsxbmPiPTN1AGIACBDsI6DJpdiLtC8d63%2FRB3nayidIylB1fSpBhWDBRYMeyMJDF6b4GOqUB2C80%2FkMTpQwZER2nurBp6LsBQwskm9G4JRAusm9qh6oW668cUPdilUVN%2FSeaZJw1RvYIt2lCISxJlJvIsML76Ix3QLG28%2Bpq3MvlQhEuEECwRYb%2BMWENJ7wjFO%2F4wlXa%2F2MCtVl1B1Xte2OPE0QB2FiAI9vJlL%2B5kz5MRMFxMo2x%2FVQ78uO0ezBzc%2BUkoIoPklAWwlBLcZTfXc0P9jQdJbfYMJn2&X-Amz-Signature=9324ed5c08a7130a4f0b037291aa1bfb791a4d1e6c5fdba6a3bfaa2d1a1580e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
