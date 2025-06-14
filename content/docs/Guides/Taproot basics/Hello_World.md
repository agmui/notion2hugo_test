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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPPKJAB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFj%2FRTzLDz%2FQi%2B9GF%2Bg8zTWTrbazvw3K%2FnrXLUZKFwQMAiADXrG88UZEWyDfj2HX1rhnvPC1oikWvYj%2FkqN4onZKhSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMCVL1VCWubuVhxZThKtwDX6tNciml2CEuyvXRW8d0VfrLpvhDg4wRpVwhkKgzrZcYH20CYK2pWf0gWtsZ2%2Fku1PXJ34MVsIR89TawSEf5SOeLGI2untoEDxKVis3XjsG7iPNDZEn1v601kKeLhBKHOnlHrbLnFKSmeWXy7SRAZIj8Tg921PrBhC57GftAHAPMHxOMT29%2FBCotbgSjmyQWM8%2FKHyMGZ%2FTuYobRhe1d6jTIuAcK1UNZ6CgpiJKZCQysyrmLRVlXalTImsC9Zxf%2B97NKk4mNyxEHeMCQGCGutLOVW%2Fyj2rHKR1sCBbP6pMBw51gKw6NkdlKgeUYWkqz4eq%2BS0qG3QylBXfra3g8wrQ0uHKn%2Bkia62pmrW3fvZviiHHKEq5EaZCe%2B6MlEtepwc5hzKODpvaNn0AoRY%2FqRXZiGlnZUkhGwDflHn%2FxqwZHfOhlifx%2F0IVx06fKTkCrmwjSxVNhMOEjGkbA4xusmwI5MVrhq6DmKcVKIkR7ac8jXS%2BvBwvG%2BhzPZ3z%2BNThMz0ChO%2FuoUgJiT06HLW3Cj7W7S5MWzXgG%2FFASgx%2FIoTv3iQTcIPlJj4qyVhC3rAdP%2BL4qdszXNWGPozR6JSqgLg9AtU7pSk%2F9hhYZ3DAzpz%2FALPXKjGobbgh4RvOsw%2B7u0wgY6pgEun6X8HpEQyaGVLPr8ek%2FGWCYYCcsGDC3I%2F0CgTsHi%2F39MBi8QD9CueXUZpLd%2FAcw0OknPV9Sf%2FlpvOghv64zdj7yiDgUIb1MpOrg%2BeQ89aMJBWX6R9lEQYw9j73a5al8%2BepbzZpMZkxJ4uhz0eM5mVk5ohLi9ME%2Bm17s1x3pESY%2FwSE%2FnVtPagzWTREa6LslGp%2F%2FgFZuAGBPA1Z9fSyvE%2FTpwEmn0&X-Amz-Signature=8741b94028f37c11f894eae0097440aa02b5f9e3fa1652b359513902283e07ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPPKJAB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFj%2FRTzLDz%2FQi%2B9GF%2Bg8zTWTrbazvw3K%2FnrXLUZKFwQMAiADXrG88UZEWyDfj2HX1rhnvPC1oikWvYj%2FkqN4onZKhSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMCVL1VCWubuVhxZThKtwDX6tNciml2CEuyvXRW8d0VfrLpvhDg4wRpVwhkKgzrZcYH20CYK2pWf0gWtsZ2%2Fku1PXJ34MVsIR89TawSEf5SOeLGI2untoEDxKVis3XjsG7iPNDZEn1v601kKeLhBKHOnlHrbLnFKSmeWXy7SRAZIj8Tg921PrBhC57GftAHAPMHxOMT29%2FBCotbgSjmyQWM8%2FKHyMGZ%2FTuYobRhe1d6jTIuAcK1UNZ6CgpiJKZCQysyrmLRVlXalTImsC9Zxf%2B97NKk4mNyxEHeMCQGCGutLOVW%2Fyj2rHKR1sCBbP6pMBw51gKw6NkdlKgeUYWkqz4eq%2BS0qG3QylBXfra3g8wrQ0uHKn%2Bkia62pmrW3fvZviiHHKEq5EaZCe%2B6MlEtepwc5hzKODpvaNn0AoRY%2FqRXZiGlnZUkhGwDflHn%2FxqwZHfOhlifx%2F0IVx06fKTkCrmwjSxVNhMOEjGkbA4xusmwI5MVrhq6DmKcVKIkR7ac8jXS%2BvBwvG%2BhzPZ3z%2BNThMz0ChO%2FuoUgJiT06HLW3Cj7W7S5MWzXgG%2FFASgx%2FIoTv3iQTcIPlJj4qyVhC3rAdP%2BL4qdszXNWGPozR6JSqgLg9AtU7pSk%2F9hhYZ3DAzpz%2FALPXKjGobbgh4RvOsw%2B7u0wgY6pgEun6X8HpEQyaGVLPr8ek%2FGWCYYCcsGDC3I%2F0CgTsHi%2F39MBi8QD9CueXUZpLd%2FAcw0OknPV9Sf%2FlpvOghv64zdj7yiDgUIb1MpOrg%2BeQ89aMJBWX6R9lEQYw9j73a5al8%2BepbzZpMZkxJ4uhz0eM5mVk5ohLi9ME%2Bm17s1x3pESY%2FwSE%2FnVtPagzWTREa6LslGp%2F%2FgFZuAGBPA1Z9fSyvE%2FTpwEmn0&X-Amz-Signature=a9a47eb096eb0dc683b5c4e3b98891a6184281db71e1b7265addb8468643fee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
