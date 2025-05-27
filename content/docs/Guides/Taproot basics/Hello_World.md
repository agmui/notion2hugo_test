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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJJBQS6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOpXx80YZTvTURlB1WkebtLSY9i5plo95gLiWaytzHoAiEA1FNLRuHNdDQdztu81qVQXEhjQIIeBFoPttjEjI7rp3Iq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNXaMS3aTJJFDrTGBCrcA2JnUfz4AmJZlYBctuY5TBneYhYIa%2Fhloz84CMyHWwLkb4rOOF%2FA35W6oXaXULMm7U6r6KcHRvzrmR1MdebY65IssBdAZPyg6QW1bk8K8fUURWFTkULdD0pxphagUcL28dvYj7N6GYkkqj37xU312pNJeZ4i1ecH09DdYCEdjybEPt6FvkLRBqZvL%2B7WOuqh%2Ff3fLcOzWp4BVd%2BhiyHsSQnQz1vRccjNWn5SNg5L3XPid8P%2FVSxXF9AvVYEoJpQ0aG3AAX58rBFaaEnwvmQAYE53t6JQlDvgTkkveGkwXC5SeULyO%2FetgofRfwuT1jwRMd%2Br9e0iuDsk1MGANbQaW3v0%2F%2BYP%2B7TQGf0m1tXUW6ODRkAfpDHsHMign35bofwLEWGV4Q7IsqOsY1ZWyHrEHsPKV0zOjuXi%2B6I8uLNmU6oxP%2BreYfXt%2FBqWBuT4k2W3bLvskBG3N6UHegzUOPCY0o5K1H7XaJw4ZtZ%2B5lZ8y5Yt7rUUckcHxh5ED%2FSJ7GfNO5Jpgj%2BrryvlNnKoJSHm9paPO97n9AtkGcNPiVgKBG24oERWsIPQuMlfg3KFiVBBo%2Fc1hUAxyNys3eqneG%2BbDgrEwDLWQrrImA0Be7w%2F1mSRGicpqwdUUkc6Lk7lMLO01cEGOqUBFGSCcPo%2Fmp%2BknKSy9UUbQxu%2BavqWasfov%2FSBt6H4fbD1MODZYdLj6MvjlLWMOB%2BOqngSXK6WxUgZm15isiA09UaiygWA4g6tsW36soa0%2FDQc2fqK9udQ8CcH356fg93H8lzN6Cyy79JB6u4PyHPYqX5zcP%2BcKl%2B4imRRghnDfygvXuoX8tXMnMQzAcUkzWbVEnv1YUDfwCJY208Td4ZDioEMLdb0&X-Amz-Signature=e3fb42213fb2d02a5ca80bcd8e673a9ad70b84cb6351a5e25483b9e1580b0d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJJBQS6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOpXx80YZTvTURlB1WkebtLSY9i5plo95gLiWaytzHoAiEA1FNLRuHNdDQdztu81qVQXEhjQIIeBFoPttjEjI7rp3Iq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNXaMS3aTJJFDrTGBCrcA2JnUfz4AmJZlYBctuY5TBneYhYIa%2Fhloz84CMyHWwLkb4rOOF%2FA35W6oXaXULMm7U6r6KcHRvzrmR1MdebY65IssBdAZPyg6QW1bk8K8fUURWFTkULdD0pxphagUcL28dvYj7N6GYkkqj37xU312pNJeZ4i1ecH09DdYCEdjybEPt6FvkLRBqZvL%2B7WOuqh%2Ff3fLcOzWp4BVd%2BhiyHsSQnQz1vRccjNWn5SNg5L3XPid8P%2FVSxXF9AvVYEoJpQ0aG3AAX58rBFaaEnwvmQAYE53t6JQlDvgTkkveGkwXC5SeULyO%2FetgofRfwuT1jwRMd%2Br9e0iuDsk1MGANbQaW3v0%2F%2BYP%2B7TQGf0m1tXUW6ODRkAfpDHsHMign35bofwLEWGV4Q7IsqOsY1ZWyHrEHsPKV0zOjuXi%2B6I8uLNmU6oxP%2BreYfXt%2FBqWBuT4k2W3bLvskBG3N6UHegzUOPCY0o5K1H7XaJw4ZtZ%2B5lZ8y5Yt7rUUckcHxh5ED%2FSJ7GfNO5Jpgj%2BrryvlNnKoJSHm9paPO97n9AtkGcNPiVgKBG24oERWsIPQuMlfg3KFiVBBo%2Fc1hUAxyNys3eqneG%2BbDgrEwDLWQrrImA0Be7w%2F1mSRGicpqwdUUkc6Lk7lMLO01cEGOqUBFGSCcPo%2Fmp%2BknKSy9UUbQxu%2BavqWasfov%2FSBt6H4fbD1MODZYdLj6MvjlLWMOB%2BOqngSXK6WxUgZm15isiA09UaiygWA4g6tsW36soa0%2FDQc2fqK9udQ8CcH356fg93H8lzN6Cyy79JB6u4PyHPYqX5zcP%2BcKl%2B4imRRghnDfygvXuoX8tXMnMQzAcUkzWbVEnv1YUDfwCJY208Td4ZDioEMLdb0&X-Amz-Signature=24dd3221d0e813cf2ea873ac3892355d0cd29559abca0e85004be71fa75657e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
