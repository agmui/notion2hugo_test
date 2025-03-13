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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DDYCP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgNqOBrLVU9agRHH0vI1mOs9Q%2BWjaYHQBAfWXg0b0uQIgHR5FNjgyf6osIFFc3cyNnOgYCaebsWGH%2FLlAsIZ%2B%2FmAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfTX43RftLxYQi06yrcA0Un4f%2FyVyhF4NGv3StOfSBsdbyg6wy1po0sr79iddUmJVChx%2FMBHIqdFPg9Tds%2B1kGMUEkwmxsbDuNY2qIyiwr0dj%2FcvG53CR0D4FSZ3MNkwSmgol2yV294feZZsG7t2WLo1auN1XGHmeMPzk4NrkHsxEuBVG1SDLaDvA9BMGeUR%2BHUdSlGl1c0NxU%2FP%2FWMloj6UUbgTWFKEB7D0FrjbH6YiVPMYnx7rLz0tWWY44Y3cHgWT68PqB4kzYCVH%2BCJ0uQrJTdMY3nkGcVABzpxLlgVOvxpUuWdiFZXhBbe3ws94UsI3t4ZBzwadZdyD9NBrCfXOwSCq9S2K%2FTN8YLyQukXUbBdWv8es0asewYkOYZdQ0tyzae1%2BER6wWXLuOPQqXwn1nTPiRMdcgdJJI7IkKGI%2BE%2BWK%2FBLhPCiYWxz78cpC0pjGBVSjAko7BlYCJ6WRqnqi%2Fvn1dCpNg1lOIm9EKP5CYufYc8PpyKeWUckMG6Rmn3TUrROX8NLqVQm1EHyfnDXeOTFG0QhlkiiK%2BfjTL%2BQzYT1NkY83GqexKVQrKAoWHGJqxd1pAJToSHXz376jk7SUfL1MJ%2FkHx9OZgm14%2FJl0mHzt%2FjxSriMKcL4UraDLuF2sOhjFKQkdx5qMMPAyL4GOqUBYFAqMPQc2%2BLm%2Bzc1AvVUVMS4eGN7X3rjZ0hH1qi0tJMfvgf%2F14%2FhZc%2F2fnsWi6q51w06jR9fFHcVx5xnpX0Wb3WBWI5VET30oVFcTAze082R0Y0%2B22GSIzYZrzxB0XuTc3WwZPErQfaLOGW9Ryi4hO2te3YjKnhVCk8yBD9lEfSgKRo%2Fx2hzovMd%2Fp75g6OhD0gTL3W2EJWKA7WGcKEMXcdrr%2F7A&X-Amz-Signature=2615167b34a79326bfa33bd90653af22210cb07baae3fd5c31310f0e6a442f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DDYCP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgNqOBrLVU9agRHH0vI1mOs9Q%2BWjaYHQBAfWXg0b0uQIgHR5FNjgyf6osIFFc3cyNnOgYCaebsWGH%2FLlAsIZ%2B%2FmAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfTX43RftLxYQi06yrcA0Un4f%2FyVyhF4NGv3StOfSBsdbyg6wy1po0sr79iddUmJVChx%2FMBHIqdFPg9Tds%2B1kGMUEkwmxsbDuNY2qIyiwr0dj%2FcvG53CR0D4FSZ3MNkwSmgol2yV294feZZsG7t2WLo1auN1XGHmeMPzk4NrkHsxEuBVG1SDLaDvA9BMGeUR%2BHUdSlGl1c0NxU%2FP%2FWMloj6UUbgTWFKEB7D0FrjbH6YiVPMYnx7rLz0tWWY44Y3cHgWT68PqB4kzYCVH%2BCJ0uQrJTdMY3nkGcVABzpxLlgVOvxpUuWdiFZXhBbe3ws94UsI3t4ZBzwadZdyD9NBrCfXOwSCq9S2K%2FTN8YLyQukXUbBdWv8es0asewYkOYZdQ0tyzae1%2BER6wWXLuOPQqXwn1nTPiRMdcgdJJI7IkKGI%2BE%2BWK%2FBLhPCiYWxz78cpC0pjGBVSjAko7BlYCJ6WRqnqi%2Fvn1dCpNg1lOIm9EKP5CYufYc8PpyKeWUckMG6Rmn3TUrROX8NLqVQm1EHyfnDXeOTFG0QhlkiiK%2BfjTL%2BQzYT1NkY83GqexKVQrKAoWHGJqxd1pAJToSHXz376jk7SUfL1MJ%2FkHx9OZgm14%2FJl0mHzt%2FjxSriMKcL4UraDLuF2sOhjFKQkdx5qMMPAyL4GOqUBYFAqMPQc2%2BLm%2Bzc1AvVUVMS4eGN7X3rjZ0hH1qi0tJMfvgf%2F14%2FhZc%2F2fnsWi6q51w06jR9fFHcVx5xnpX0Wb3WBWI5VET30oVFcTAze082R0Y0%2B22GSIzYZrzxB0XuTc3WwZPErQfaLOGW9Ryi4hO2te3YjKnhVCk8yBD9lEfSgKRo%2Fx2hzovMd%2Fp75g6OhD0gTL3W2EJWKA7WGcKEMXcdrr%2F7A&X-Amz-Signature=081996fb566b297412154bce7b577f4146b4d715cdcc3340bbfa5dca9b4ca3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
