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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGQE7XM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICj2DZhMvKwIX1b4%2BFNKrHsHOLoyblWogixUmhw8uwtxAiAUl9Rz1BVkLLTdAHADZqXmXLojKpdMarstc3k%2FiUQhNyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9uzuH9kSQrlFgeEKtwDQZMVeAghupSEdkm3xIne4%2FcNGe8M4AWQ7mugM1q78VGhqfb%2BYSgk5pDf%2BRvptd16tF14mHV6%2BId6V%2B0ja3soUJtVzRG8hJW%2BSZ80IeoAivOPXGn5LNT73%2BrQEUlrpkvmQg9LDnQ45eU43dGzmNt0D7viL4SsMWqQPncQG5PVcbRPRGtxlT4QBZqsdRfUFbtCHpqV%2BoaQefv9gdb6lgFkQQo3AHXjAs7Fve3%2FxDNzrwe7lCjVX98MueaXrAWEXd79oDiSsZNx396TRG%2Fn%2B6hgP4P6LGioc%2BUQpmIk%2BUzQhnMY0y5WvaT6z4xjfFp5xepC5YqUFcqKDsbc3Kv%2FSqqAk8qq%2BTbNLakgG5pVygZtpvEixvqfh1fUOt%2FtEYiMi5zmdSvJ%2BCZRFmcqvzuhKKp8P%2F5o62ELzsLQ369kS7xPwCt3SSGayf37oO8droNidXWyvKrRg1eXgcHsdzbitpw6DqTvm78za6X29F%2BIKl%2BaWNXM39neVt%2FF11faGWlZiodOFrAvOY7tGnS6k0k9HEqOC7oCbtNvZPA5f9bZpXgiQvtTXzTXNdPhD0O27Pu4BH2xiPTZSyrL3S2WWfCM3i72fhbrzT0GJF%2BktZN0sTHYjrOB51th9im1vwc6nWMwq7fXxAY6pgFb4wJIuwBEp%2Fsm8l%2BfWeUpHwTwRIaPiIB%2BjzSlQEjKIMl%2B9SDFaXItMlB7CVmpl4Enni%2F5PqzibohL06IgxERLGNDWTe0JYmTQ7wJNoUZeX6W3k3GqaKBf7b92lyBCT5VkiBH6F%2B4GdMJjEZmfaLEvDaSH6DLM%2BUUIpbatqE2i2fauk8gD7B5OAVWOfBnT%2BNk1dTbSuQ4Avpz6FfQnYJoMc6V%2Fv%2BWL&X-Amz-Signature=a738dfe67980a538f52c7542f1ffaeab459a1099e59ace6cba0aec97d0f3b7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGQE7XM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICj2DZhMvKwIX1b4%2BFNKrHsHOLoyblWogixUmhw8uwtxAiAUl9Rz1BVkLLTdAHADZqXmXLojKpdMarstc3k%2FiUQhNyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9uzuH9kSQrlFgeEKtwDQZMVeAghupSEdkm3xIne4%2FcNGe8M4AWQ7mugM1q78VGhqfb%2BYSgk5pDf%2BRvptd16tF14mHV6%2BId6V%2B0ja3soUJtVzRG8hJW%2BSZ80IeoAivOPXGn5LNT73%2BrQEUlrpkvmQg9LDnQ45eU43dGzmNt0D7viL4SsMWqQPncQG5PVcbRPRGtxlT4QBZqsdRfUFbtCHpqV%2BoaQefv9gdb6lgFkQQo3AHXjAs7Fve3%2FxDNzrwe7lCjVX98MueaXrAWEXd79oDiSsZNx396TRG%2Fn%2B6hgP4P6LGioc%2BUQpmIk%2BUzQhnMY0y5WvaT6z4xjfFp5xepC5YqUFcqKDsbc3Kv%2FSqqAk8qq%2BTbNLakgG5pVygZtpvEixvqfh1fUOt%2FtEYiMi5zmdSvJ%2BCZRFmcqvzuhKKp8P%2F5o62ELzsLQ369kS7xPwCt3SSGayf37oO8droNidXWyvKrRg1eXgcHsdzbitpw6DqTvm78za6X29F%2BIKl%2BaWNXM39neVt%2FF11faGWlZiodOFrAvOY7tGnS6k0k9HEqOC7oCbtNvZPA5f9bZpXgiQvtTXzTXNdPhD0O27Pu4BH2xiPTZSyrL3S2WWfCM3i72fhbrzT0GJF%2BktZN0sTHYjrOB51th9im1vwc6nWMwq7fXxAY6pgFb4wJIuwBEp%2Fsm8l%2BfWeUpHwTwRIaPiIB%2BjzSlQEjKIMl%2B9SDFaXItMlB7CVmpl4Enni%2F5PqzibohL06IgxERLGNDWTe0JYmTQ7wJNoUZeX6W3k3GqaKBf7b92lyBCT5VkiBH6F%2B4GdMJjEZmfaLEvDaSH6DLM%2BUUIpbatqE2i2fauk8gD7B5OAVWOfBnT%2BNk1dTbSuQ4Avpz6FfQnYJoMc6V%2Fv%2BWL&X-Amz-Signature=da6990d48a1ab7965e3f385fd3e761595009c6c3084f497e0e718d5b68efb6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
