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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJEPF3T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk%2BW93N3dyjMciMMrojRZ14lQ3bPu%2BH5gZm8sbvBDZgIgEpplFmnsLnlZT4yMOaYLiKl%2BUa50dqhb3f70Yu9UIH8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqYqGsWyr%2F%2FBwTruCrcAxS9PlZ1Re4bNbDr2Kraxvx3kMt4r4eHELmB58FQIzlrme2e71lfTZorbU18kGy7%2FePOvrhGYFRgCt2n6sWjnUliqHaiD%2Bix23suGT1uwgZmFjMgTF3YLVDJOpUCbfwzvi7KnEG5TTX71VayqpyDGLZOSLWs%2BO%2BNQsGTIUo8%2B0N4CzqBhYniglwpQQK7b78rv1VAMC5l%2BV0q60DQrX9B47E3bDgYXc%2BK8h389yCUURKm9yegFBf50CgIv5sQWbNjiPCDMAxBln1xhItO6aMIz48079p9Cxlln1bZ30j%2FHP8v9goqOARzjG9Q5nR7W6vDnMTRfzss7KNJXhHSkVYNulSmHK16MoqeP5be1PdrtZVnsSodrGysbX5LpdrV5I%2FKm3Ja6ScOqrjC%2BX2ADm0K5lwfKza8JwLlocrKF5W9kRWZJyvSUgNUMeXlHAb0QnvbHUyvKfl2e05Eu0PJq1ortWxYaaenE9kXlwxMvojpzHLlfSyyX4fQiQHF2nL2mtASfwI112QU%2FqLWSpHLYak3gji0VxXRQWLJwzIkAD0XmDYh9Vm5EpfRJeOu5TFpQpYnlvvTN8VyxGmksCZaY1vvh4x5W5Lifiksmu4%2Fto9dYx9iVFXcTqVRpfgZ2LrOMJ3%2F9MMGOqUBNCs6yenVoY9RPZTJZ3FesQtPi0xr5MoTfvb4wB44EZz6GzMeO9vxIBpqb0YR1OjuGNTt0QpLzq3rfhoi6UmBiDCF0vcAxLVjedaT44OrU90if1AAtJp0bLnHq4zWlAjqJP2qsdUUHfTWmWlwaM7TJC0RgQ5KnNODBWjQIhsf8jEQlbuQq5TmvXpViNRz60biNgRHuvn%2FtbaxG5OavzEYxiKUnXhY&X-Amz-Signature=967514babf98d14861cd70b4b1618788a0dc4b5b095f0a96290316261a013d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJEPF3T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk%2BW93N3dyjMciMMrojRZ14lQ3bPu%2BH5gZm8sbvBDZgIgEpplFmnsLnlZT4yMOaYLiKl%2BUa50dqhb3f70Yu9UIH8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqYqGsWyr%2F%2FBwTruCrcAxS9PlZ1Re4bNbDr2Kraxvx3kMt4r4eHELmB58FQIzlrme2e71lfTZorbU18kGy7%2FePOvrhGYFRgCt2n6sWjnUliqHaiD%2Bix23suGT1uwgZmFjMgTF3YLVDJOpUCbfwzvi7KnEG5TTX71VayqpyDGLZOSLWs%2BO%2BNQsGTIUo8%2B0N4CzqBhYniglwpQQK7b78rv1VAMC5l%2BV0q60DQrX9B47E3bDgYXc%2BK8h389yCUURKm9yegFBf50CgIv5sQWbNjiPCDMAxBln1xhItO6aMIz48079p9Cxlln1bZ30j%2FHP8v9goqOARzjG9Q5nR7W6vDnMTRfzss7KNJXhHSkVYNulSmHK16MoqeP5be1PdrtZVnsSodrGysbX5LpdrV5I%2FKm3Ja6ScOqrjC%2BX2ADm0K5lwfKza8JwLlocrKF5W9kRWZJyvSUgNUMeXlHAb0QnvbHUyvKfl2e05Eu0PJq1ortWxYaaenE9kXlwxMvojpzHLlfSyyX4fQiQHF2nL2mtASfwI112QU%2FqLWSpHLYak3gji0VxXRQWLJwzIkAD0XmDYh9Vm5EpfRJeOu5TFpQpYnlvvTN8VyxGmksCZaY1vvh4x5W5Lifiksmu4%2Fto9dYx9iVFXcTqVRpfgZ2LrOMJ3%2F9MMGOqUBNCs6yenVoY9RPZTJZ3FesQtPi0xr5MoTfvb4wB44EZz6GzMeO9vxIBpqb0YR1OjuGNTt0QpLzq3rfhoi6UmBiDCF0vcAxLVjedaT44OrU90if1AAtJp0bLnHq4zWlAjqJP2qsdUUHfTWmWlwaM7TJC0RgQ5KnNODBWjQIhsf8jEQlbuQq5TmvXpViNRz60biNgRHuvn%2FtbaxG5OavzEYxiKUnXhY&X-Amz-Signature=32b1f0b6ee796de35091ea85b4e1ce70e9844c79959db31f7a9e9349b1e96b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
