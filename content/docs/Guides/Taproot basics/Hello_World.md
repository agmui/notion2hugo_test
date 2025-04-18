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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4AFCQK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnP7kUx83Y4U4PbeXrJO06IvEeLrEcahgwQJRrxDUwMgIgZIT4Iur%2F1AcOW7u3v1sIq8bsgPJi9HxYxVPDOSMjTJQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLDXo0MQILRyY8RrfircA6u5o77FeweHipyCrHUapzedCtfghSYs9r0HuxnVPqyw%2Bplll8YO%2FSStHe49BEhV91hLjfB7Dyx6rq9OHEwJ43LY1NAOaSBNcp9IXReajx2pFvoFUG1tzSq291x51NpiF0jvKsz6TrehgzLfJO0i9ZzDkB%2BTYaoZwKCWR9IrLi5W1MGlCtA%2FpXNwKodPJuDeKMzUyeoclyls6P74y454kfZsQEEVuJG%2FoMMZVjB%2BDT8xlHAMPFaGgx%2FBZ4jml%2B%2Fpifay9pEe43GANDw0BodImCcguQNJVZkCgZaS2EEBBz4SbF96ZrKBX8PReuYprWff25WPbGO31zwuy%2FCO3GDkJVZqUhHdcB9%2Fo7jNpy1x%2FLZkhfkDgDfa8hT2%2BrTTPstFCoNm4QaI0QWsWsjbXSOjyp6Lbedx9hnvKZixovhEjxezC%2FOAxFA0vH%2FtRIEv0K1JsKQWTrGEVmNyOkxZ4t1dFJ52WyM1BERRIZgSYlEnpDkXN1HwlKVbMpe4Gz3WDIPAhoiMixXUbvFvOsQSmnkQtNDEWMuykAR2GcW5Jf5bsohGqO%2F%2BOQEU12%2BcugjW90Tcyyx4JGstbL%2FkReSci5w9mi3%2BoVWjDF%2BBMR8rKUHNrRWWQWfZcJpMlgkenlDmMMneh8AGOqUBldJTOjFV7%2B5qTxKhubf9wH35jk6mz61h%2FhU3n1dchJ5YJGRBPOXeY6WI9XmBVGjCEjo6BkbGDle4H3ZRGnCanzZrJ4ZRc7sAoMRMRlyyxg5Tbs4J6yFmBT6pPxK%2BCnSU5rYDkIoaWvTO0rQbuk7afLQr1A84q%2FDhLctM0plf9%2B7y7mgcVvrXbbZUlTWDq0%2BFPqLE5zqNm6cHQIYdO2FM3ODolv8o&X-Amz-Signature=09c1b6138f537cc10ddcf93c5c85fa67085b17034dd416c7bdc0793a84b07297&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4AFCQK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnP7kUx83Y4U4PbeXrJO06IvEeLrEcahgwQJRrxDUwMgIgZIT4Iur%2F1AcOW7u3v1sIq8bsgPJi9HxYxVPDOSMjTJQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLDXo0MQILRyY8RrfircA6u5o77FeweHipyCrHUapzedCtfghSYs9r0HuxnVPqyw%2Bplll8YO%2FSStHe49BEhV91hLjfB7Dyx6rq9OHEwJ43LY1NAOaSBNcp9IXReajx2pFvoFUG1tzSq291x51NpiF0jvKsz6TrehgzLfJO0i9ZzDkB%2BTYaoZwKCWR9IrLi5W1MGlCtA%2FpXNwKodPJuDeKMzUyeoclyls6P74y454kfZsQEEVuJG%2FoMMZVjB%2BDT8xlHAMPFaGgx%2FBZ4jml%2B%2Fpifay9pEe43GANDw0BodImCcguQNJVZkCgZaS2EEBBz4SbF96ZrKBX8PReuYprWff25WPbGO31zwuy%2FCO3GDkJVZqUhHdcB9%2Fo7jNpy1x%2FLZkhfkDgDfa8hT2%2BrTTPstFCoNm4QaI0QWsWsjbXSOjyp6Lbedx9hnvKZixovhEjxezC%2FOAxFA0vH%2FtRIEv0K1JsKQWTrGEVmNyOkxZ4t1dFJ52WyM1BERRIZgSYlEnpDkXN1HwlKVbMpe4Gz3WDIPAhoiMixXUbvFvOsQSmnkQtNDEWMuykAR2GcW5Jf5bsohGqO%2F%2BOQEU12%2BcugjW90Tcyyx4JGstbL%2FkReSci5w9mi3%2BoVWjDF%2BBMR8rKUHNrRWWQWfZcJpMlgkenlDmMMneh8AGOqUBldJTOjFV7%2B5qTxKhubf9wH35jk6mz61h%2FhU3n1dchJ5YJGRBPOXeY6WI9XmBVGjCEjo6BkbGDle4H3ZRGnCanzZrJ4ZRc7sAoMRMRlyyxg5Tbs4J6yFmBT6pPxK%2BCnSU5rYDkIoaWvTO0rQbuk7afLQr1A84q%2FDhLctM0plf9%2B7y7mgcVvrXbbZUlTWDq0%2BFPqLE5zqNm6cHQIYdO2FM3ODolv8o&X-Amz-Signature=7fa0d43a0b902b36cec04dca0121f09e9a8f378bff422b6f81bf974359fdefdb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
