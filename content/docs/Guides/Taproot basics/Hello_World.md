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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC56SWLL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA41m8Gojf2MtApnDRv5uXc3lYn5HSmsmcbwOX4DA5HPAiByiACWpHnEv%2FMpUbZKEDAe%2FPOTo37yZepHUKVknJVMnSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMLve8Nu4klmz%2BWYsDKtwD7DUuedPlerJTk9fTZNt492XTMadT1AQpR%2FLcKmeJSfp7qq%2BEVAFavQrGJq4GQ%2FJ7UwPFpzX%2BxZErdMzKOsdMmQfK%2BIJ2XpW6eaAzv2Xifc3ugkAJ5xfdI7cBdneedYXadC2LCkBZIpim4Sq0SrWjkVfzpgs8EpQCxH87uq3WAnIGk6r9ze0IvZX%2FAqz9WE2%2FKQd09s3BcLUGeo%2BKb3TzOyYMyJHl%2BYsitpTnBZ%2F9%2FrbmgaFhI%2BDqhPDJbEbyb2SEUFB8SucNZqfPuVK%2FfiGZHjuMiXnl%2F5IUfFqQE1adQrui%2F5MUF9%2B6daGxVyeZpOQJLPOFzSGpwmAA4WQQohfRNPm9dWfzKwhjpkzCdOHKa3KhE9idRI%2FytsqJxyfUvSnb7nUgcJg7PQ0TRg5zxAImoBBQohfHMEmBaFbyF%2Bhtlj1r25bPVO9d9y5aV%2BTqRf0ekeQahwIdlh5eTOQ9a7mOOKu%2BBxHFNyyowPYrtD9pkH%2FgmfltoTH24pRBvVhegulLr07ZXiCYkgYvS7KttXBHP5a%2BddEyGZB8lYq1xBxQgNg9VCqk7Y%2BTzdOgOqak4tKDnnK6XE86Xo%2B98w9DL1PmJmn4SQ6nWG9gPGoVjc7DCPeocYOBvXDvHG4R2I0wqIXUwwY6pgGgfixY5vY2%2Bso%2BAaKIs7ELXMayBuSKCX4SLa%2FsAq7VVhz%2ByY%2FT5HbicCliqm9cKgG3bxJ6iRwbGJ9A%2FNpRFhc%2BrpcpzZ07oSk2eS2%2Bb9BaC2Y1WEoXz9M9g8GJg%2FAwN6jomngvMp07cr5jgoWr3A7zy9ElQoiFenEkULdmBOzXXUrCc3idSISeSeTBrc1OPtfqNI3PzGMEplpv741cULKN2EV2S%2BrV&X-Amz-Signature=7202375e7cbf989d889e015871130c4da17aa91f4e9f57b22a1648c4a2b651e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC56SWLL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA41m8Gojf2MtApnDRv5uXc3lYn5HSmsmcbwOX4DA5HPAiByiACWpHnEv%2FMpUbZKEDAe%2FPOTo37yZepHUKVknJVMnSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMLve8Nu4klmz%2BWYsDKtwD7DUuedPlerJTk9fTZNt492XTMadT1AQpR%2FLcKmeJSfp7qq%2BEVAFavQrGJq4GQ%2FJ7UwPFpzX%2BxZErdMzKOsdMmQfK%2BIJ2XpW6eaAzv2Xifc3ugkAJ5xfdI7cBdneedYXadC2LCkBZIpim4Sq0SrWjkVfzpgs8EpQCxH87uq3WAnIGk6r9ze0IvZX%2FAqz9WE2%2FKQd09s3BcLUGeo%2BKb3TzOyYMyJHl%2BYsitpTnBZ%2F9%2FrbmgaFhI%2BDqhPDJbEbyb2SEUFB8SucNZqfPuVK%2FfiGZHjuMiXnl%2F5IUfFqQE1adQrui%2F5MUF9%2B6daGxVyeZpOQJLPOFzSGpwmAA4WQQohfRNPm9dWfzKwhjpkzCdOHKa3KhE9idRI%2FytsqJxyfUvSnb7nUgcJg7PQ0TRg5zxAImoBBQohfHMEmBaFbyF%2Bhtlj1r25bPVO9d9y5aV%2BTqRf0ekeQahwIdlh5eTOQ9a7mOOKu%2BBxHFNyyowPYrtD9pkH%2FgmfltoTH24pRBvVhegulLr07ZXiCYkgYvS7KttXBHP5a%2BddEyGZB8lYq1xBxQgNg9VCqk7Y%2BTzdOgOqak4tKDnnK6XE86Xo%2B98w9DL1PmJmn4SQ6nWG9gPGoVjc7DCPeocYOBvXDvHG4R2I0wqIXUwwY6pgGgfixY5vY2%2Bso%2BAaKIs7ELXMayBuSKCX4SLa%2FsAq7VVhz%2ByY%2FT5HbicCliqm9cKgG3bxJ6iRwbGJ9A%2FNpRFhc%2BrpcpzZ07oSk2eS2%2Bb9BaC2Y1WEoXz9M9g8GJg%2FAwN6jomngvMp07cr5jgoWr3A7zy9ElQoiFenEkULdmBOzXXUrCc3idSISeSeTBrc1OPtfqNI3PzGMEplpv741cULKN2EV2S%2BrV&X-Amz-Signature=f0860ce0c0ee9680922056de1f66420f17b3cbd96ead766feb6da1d52e275999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
