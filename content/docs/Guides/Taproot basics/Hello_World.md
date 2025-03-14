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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7H7SCB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhMVDECdJyfgcN1okfF5kXusSGAlB6QWg2s1AEbJE7OQIhAL8qxFG31JVeFIYNlU4aYbsBtRGGSfWt81JwhGxu6IjuKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyZB98wI%2BPs6NwuKwq3APvVPookA%2Bf1hgv6bWpXqtywMfRK6%2F3duq3zyGQJT49UzrDm0c2SXxd8yjcn87%2FovEsDAQH7Hde05cgGImIP5zUYmt41qEB7rAwmYxzHUS9i9s7VoW2NV%2FWPPL7ShgyKkridZ2gCRN7Rc%2Besxa%2Fzvqo%2FhIOynKK8ZRF30A2P1skJrQLej1wuB3DUawrQMg8gMmrH3NCbP3p1sk%2Flx8fULpDlPZ8FK8RI%2BSaUgIYpBk0JeoLuCs1Qj%2F6fW1JCoU5U4q5OpOUCMNncMGdJRqb0%2BrL1GfbqxwIHrlpm7r94n%2FNpJK0si98N0rcVuiCfThz9sP1g9VaqzTrRn%2BpZWDhtX3OdRulY42aMzP2fzdVru9Nafrv1NzdXjhLTvaRLlDoZ%2Fu8uDKvBOprQBzMiDdCiwL2XFGPmZB3LKP%2BpKVyYCGFN53PCjkYEt0uReNFO0bOwtuWrwlKri0%2FTx3dZLQf28JT%2BfeKGmO66QOn3la4EQ2iNzCOPw%2FexHhlC1t7I3G6eMwP0uyyquRBnA8Foi1%2B09eeNQ4L0hEqA0%2FaPfTukJHCTuL80ZWEYLKEhX13A0wiDjL2lDgqftqrVQ8CM9tM99%2BaTkmpa08hsvVP1GvG554M%2BaT46cJcrWJsGxwtvTCWk9K%2BBjqkAaqqKOnZmWFvuRC6C1zWG0KcUVFjx8MhDjMriotNakajMcedDoLtS3STDyMk0NlqOrMkFBsvoPiLtVyHuSQp1hlbCxOVd9Z6aJdkFti3R11vshDetQN0aMh1f6tXgKqdee%2B0QYXLkQ%2BdBX0bL8al7HiwDcfWxfAQVwQG7lM5mLNRVPpt5xI8h60wVY1EcfY1sKbSoSgPmuijCL0Z9HqeqFhrjx3Q&X-Amz-Signature=3479c67b83dea0a4063ec677e21d8fa88168214b6c41bc5a5c2b6f9b5ff8657e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7H7SCB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhMVDECdJyfgcN1okfF5kXusSGAlB6QWg2s1AEbJE7OQIhAL8qxFG31JVeFIYNlU4aYbsBtRGGSfWt81JwhGxu6IjuKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyZB98wI%2BPs6NwuKwq3APvVPookA%2Bf1hgv6bWpXqtywMfRK6%2F3duq3zyGQJT49UzrDm0c2SXxd8yjcn87%2FovEsDAQH7Hde05cgGImIP5zUYmt41qEB7rAwmYxzHUS9i9s7VoW2NV%2FWPPL7ShgyKkridZ2gCRN7Rc%2Besxa%2Fzvqo%2FhIOynKK8ZRF30A2P1skJrQLej1wuB3DUawrQMg8gMmrH3NCbP3p1sk%2Flx8fULpDlPZ8FK8RI%2BSaUgIYpBk0JeoLuCs1Qj%2F6fW1JCoU5U4q5OpOUCMNncMGdJRqb0%2BrL1GfbqxwIHrlpm7r94n%2FNpJK0si98N0rcVuiCfThz9sP1g9VaqzTrRn%2BpZWDhtX3OdRulY42aMzP2fzdVru9Nafrv1NzdXjhLTvaRLlDoZ%2Fu8uDKvBOprQBzMiDdCiwL2XFGPmZB3LKP%2BpKVyYCGFN53PCjkYEt0uReNFO0bOwtuWrwlKri0%2FTx3dZLQf28JT%2BfeKGmO66QOn3la4EQ2iNzCOPw%2FexHhlC1t7I3G6eMwP0uyyquRBnA8Foi1%2B09eeNQ4L0hEqA0%2FaPfTukJHCTuL80ZWEYLKEhX13A0wiDjL2lDgqftqrVQ8CM9tM99%2BaTkmpa08hsvVP1GvG554M%2BaT46cJcrWJsGxwtvTCWk9K%2BBjqkAaqqKOnZmWFvuRC6C1zWG0KcUVFjx8MhDjMriotNakajMcedDoLtS3STDyMk0NlqOrMkFBsvoPiLtVyHuSQp1hlbCxOVd9Z6aJdkFti3R11vshDetQN0aMh1f6tXgKqdee%2B0QYXLkQ%2BdBX0bL8al7HiwDcfWxfAQVwQG7lM5mLNRVPpt5xI8h60wVY1EcfY1sKbSoSgPmuijCL0Z9HqeqFhrjx3Q&X-Amz-Signature=7474ec1a2a995d691e2920734d79867288dc6f17cc7d34c9dc75572503b8cd81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
