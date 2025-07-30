---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DG6XMOH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNtadUj0DJpkagWbxoI84vWRL7K45ZgXDYfuNVVumZXgIgLTvvpd%2FMSbBFBsKCJmCMgs6DVWUT2PBlROvjRgW%2BYdUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfbS5KtGVEppq7eHCrcA8qvTazd7Xn25pjKCT0IknnLYkCJh1l9%2BikHKDN2U9h2L8Wuy21OX3lWXMhXAZrKo2HYRwWj%2Flsy1OqJiEuY2tyQbvXZLkPjH3nJSPDMLbTDXWeaD8d2DtawfoxdiJrPuariruIvZYz%2B6jixK9CRrV1WRVXtiu1hVt0h3G4Es3m7pvgIBIWTn%2BB2pgDFqz7GanfQhG%2BnHxL%2Fgjcj40VBqfHOlZt3YOmESFGl5pcyHd1nJvHNu9tiizfOC6msqimEc5vh2v9uZl6QYePjLw4LyqJYgN62onREKzB0ITK31uO0hznpDQ6uDKSpmvUB62bQMCSD32AJw7aJJk9UHKfnU4l%2FudUy1obM1WeVOkvaskpIiR2iRSrmTpUO1R8vy1usWHDuz38zhKSYflb%2FhxMY8vByIJFdqxN5qloa4TynMRY0KFi6hIn8PMYodoyK0p8yEPh%2Bl%2FiFSo5yNxQIrOyJjFRKh5jgbURQdRD7bD5wXP%2Fp1%2BFTBh3A0WuwjQ6r%2B51RFcnI8qXzneztFBy3wQcFnmV%2FTtjCEj1J5IOm7PlT6kZsCFc8sRJz0zfntHvX4Ij5jq8OgnvBMyZuH3ttSjHq6F%2Fz1bnnWqbZxp2jQVCU%2FIZinU0gE2SBcY8GGVwpMMLoqcQGOqUB4vCI43X6HrZpLK1F2dVVvWgQ1H%2BChs7sPAqP%2BswfH7wptqKl3lHFJ37jAyO2leFHn%2FblG1h4IVGSc%2FXjDpEiA10Uqe0EpgFzDAZLrdhjvYOC498uyjiQ%2BQgSyUDeCiZcRSH0CynIfiL9JAJYswXkEwgm4J5jiYipSYdD1dwwtjtYwd6VSId50sUSuuiMo3uKFFIzWT3rWwbWUFPcVKJmyvwj8%2BE3&X-Amz-Signature=dec6a224546aaee79e85e2c2251711757bb741c0309c472022e032cd60d20ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DG6XMOH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNtadUj0DJpkagWbxoI84vWRL7K45ZgXDYfuNVVumZXgIgLTvvpd%2FMSbBFBsKCJmCMgs6DVWUT2PBlROvjRgW%2BYdUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfbS5KtGVEppq7eHCrcA8qvTazd7Xn25pjKCT0IknnLYkCJh1l9%2BikHKDN2U9h2L8Wuy21OX3lWXMhXAZrKo2HYRwWj%2Flsy1OqJiEuY2tyQbvXZLkPjH3nJSPDMLbTDXWeaD8d2DtawfoxdiJrPuariruIvZYz%2B6jixK9CRrV1WRVXtiu1hVt0h3G4Es3m7pvgIBIWTn%2BB2pgDFqz7GanfQhG%2BnHxL%2Fgjcj40VBqfHOlZt3YOmESFGl5pcyHd1nJvHNu9tiizfOC6msqimEc5vh2v9uZl6QYePjLw4LyqJYgN62onREKzB0ITK31uO0hznpDQ6uDKSpmvUB62bQMCSD32AJw7aJJk9UHKfnU4l%2FudUy1obM1WeVOkvaskpIiR2iRSrmTpUO1R8vy1usWHDuz38zhKSYflb%2FhxMY8vByIJFdqxN5qloa4TynMRY0KFi6hIn8PMYodoyK0p8yEPh%2Bl%2FiFSo5yNxQIrOyJjFRKh5jgbURQdRD7bD5wXP%2Fp1%2BFTBh3A0WuwjQ6r%2B51RFcnI8qXzneztFBy3wQcFnmV%2FTtjCEj1J5IOm7PlT6kZsCFc8sRJz0zfntHvX4Ij5jq8OgnvBMyZuH3ttSjHq6F%2Fz1bnnWqbZxp2jQVCU%2FIZinU0gE2SBcY8GGVwpMMLoqcQGOqUB4vCI43X6HrZpLK1F2dVVvWgQ1H%2BChs7sPAqP%2BswfH7wptqKl3lHFJ37jAyO2leFHn%2FblG1h4IVGSc%2FXjDpEiA10Uqe0EpgFzDAZLrdhjvYOC498uyjiQ%2BQgSyUDeCiZcRSH0CynIfiL9JAJYswXkEwgm4J5jiYipSYdD1dwwtjtYwd6VSId50sUSuuiMo3uKFFIzWT3rWwbWUFPcVKJmyvwj8%2BE3&X-Amz-Signature=bf96a402a0b5f5c36d4318295db5aa7c8032d8c9576f788410d063853e97a9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
