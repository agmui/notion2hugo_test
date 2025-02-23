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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6Y3CF4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5MfYEj6rDYdIx%2FKW7ZMGp8A27NNExJRnk4q1D3pxl5wIgN9sP3u6X5nZTGpXoyH7RScYjQUNVYTD2XLC%2FKqG3bjcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLugFuyYl%2FvJgwZowircA1i8R2pF9fgyWunm8ZmNVBPPfLGCoehlLgKkKZ0nZoso8rasguaKDaqipb9AlLh4RxpOJpZQthHkgq04UjQQTlgFgJzB0YWvSjuwg4H3n0Y6Rj3oo4dInhneu91QzwyiRxwfYY%2BULOxL0o%2FWiseZrNg7SmrOpZbUgzsnsQOslhhQyeRwI%2BFTX2ar4Lku%2BwQZkORYcJY4aPOscghtPmPTGsKUbmu%2FKC3JJYh8Ne2opyuTMPESebwGBcQpUfQ1PrkLOzRMrRVcBGrrBy6T9UD5%2FhbxGrtaF2kp0XxOsu2Mbg3qr6Th2RmQ9k39c8%2BSokMRssHcO8l4Vr4CantXud6Q3RuyBLzbW5p0rBcZ8oLURqojcN65NynutQSMM6RBDCd8%2FxOEthiuZkCrEmf1BnuP4XJI4NQEajQYg6E95%2FBmmRRhfaRtWj8BzJR5tF84B25ZAaIr5IerGjnA1JJQOnhuqmqi5q5ZRhNgf7FZxFtAE21XcFsdhXJTSTbP5uPorVHRQ0JBhMFHJM5tgLRCkXYyQShhF8VJpg4b4BsxvP6Hntg%2BH7F3mWDmMR8HW2Uq3VaqMgV52HK5TYtSHLZ5njCctCZxEDeQOV9kD4oZ1y7nXV5MnPu7fhdwD%2BW58jpKMMvp670GOqUBFju%2F9gqcUx%2Bdzzuenh9FU4hTbreHpwVgy0KS2sr8xf%2FW2lf%2B5tDmuSk9lY6OUZW95pkGdu2FjuZsn0tTfSy9ba0WiLlxh1Sz8s9cHWyZ08zt89ttsnZWK25P%2B66chUHjvkc3FEwqZC%2BcY1UfjSDKVyhm1XS561LiqxIzEGMyRnMh5kaY8%2BVWrqz0E6TQ4NzEkL4O2NfK2umO%2ByS2LX8N5hsWMaO7&X-Amz-Signature=d643b1adf77d87fd96f03507493724bf0ce63442c033e01f53b1ba8cb15f5a44&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6Y3CF4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5MfYEj6rDYdIx%2FKW7ZMGp8A27NNExJRnk4q1D3pxl5wIgN9sP3u6X5nZTGpXoyH7RScYjQUNVYTD2XLC%2FKqG3bjcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLugFuyYl%2FvJgwZowircA1i8R2pF9fgyWunm8ZmNVBPPfLGCoehlLgKkKZ0nZoso8rasguaKDaqipb9AlLh4RxpOJpZQthHkgq04UjQQTlgFgJzB0YWvSjuwg4H3n0Y6Rj3oo4dInhneu91QzwyiRxwfYY%2BULOxL0o%2FWiseZrNg7SmrOpZbUgzsnsQOslhhQyeRwI%2BFTX2ar4Lku%2BwQZkORYcJY4aPOscghtPmPTGsKUbmu%2FKC3JJYh8Ne2opyuTMPESebwGBcQpUfQ1PrkLOzRMrRVcBGrrBy6T9UD5%2FhbxGrtaF2kp0XxOsu2Mbg3qr6Th2RmQ9k39c8%2BSokMRssHcO8l4Vr4CantXud6Q3RuyBLzbW5p0rBcZ8oLURqojcN65NynutQSMM6RBDCd8%2FxOEthiuZkCrEmf1BnuP4XJI4NQEajQYg6E95%2FBmmRRhfaRtWj8BzJR5tF84B25ZAaIr5IerGjnA1JJQOnhuqmqi5q5ZRhNgf7FZxFtAE21XcFsdhXJTSTbP5uPorVHRQ0JBhMFHJM5tgLRCkXYyQShhF8VJpg4b4BsxvP6Hntg%2BH7F3mWDmMR8HW2Uq3VaqMgV52HK5TYtSHLZ5njCctCZxEDeQOV9kD4oZ1y7nXV5MnPu7fhdwD%2BW58jpKMMvp670GOqUBFju%2F9gqcUx%2Bdzzuenh9FU4hTbreHpwVgy0KS2sr8xf%2FW2lf%2B5tDmuSk9lY6OUZW95pkGdu2FjuZsn0tTfSy9ba0WiLlxh1Sz8s9cHWyZ08zt89ttsnZWK25P%2B66chUHjvkc3FEwqZC%2BcY1UfjSDKVyhm1XS561LiqxIzEGMyRnMh5kaY8%2BVWrqz0E6TQ4NzEkL4O2NfK2umO%2ByS2LX8N5hsWMaO7&X-Amz-Signature=f348d9f01b7329dcfe9f0f7dcfb8007312a97cd689eb234e2220cf5ca136567c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
