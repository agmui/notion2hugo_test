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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQU3OOAD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmkbnVJELi9o%2Fw1sY0p2HitFVk9KrekFb718nrMZJcxAiADJAYn47eLnGbFZJojXBvE3YGTTLLYxd0RcUKxUsfVXir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMMCe2Y6Nck0VxLWjWKtwDjyIXe81fDLV4t7W7g%2BORvI9a4Xdk35nTNyBYtOmEP8ZSeEv8aaq7sFQsO36ORfBWoZOpo72OWu%2BVW5HHAN37jIJH6G1G2NtsH5u1uJrKHw9SDgAhWNbCELrs1Mg9MtU216DBZ6sq%2FuaJF47FtYmILfAtLibTq9imDTjmAdAopyG%2BXQG8NsBBSAya2j2%2F104o%2BvAfzVokXTXK%2BoGmJNzgbQ8dCx%2FoBCdoxix7Kkn3xQer7IZWSZN8Y19Nkh55XKnsfze8qZpixlJXZSLGlT9ahWDuT3i%2FXSBj3RMHG%2BgO4e4bS%2F5bzKy1dKcxUehaWbrSJPHXXKiielSdp6LfIqo9Xgd9EkQDrmVbxhBfIcvCoL2BtHD4p9qxrw%2BYJ%2B2qk32vIPmc00ihJ09E1%2FLj2xtnGOICBhHQhpNHUkzoztnYSNd8ndIYjJ3Cj0%2B1baM1CaRtvq%2BjF4PABDOT65k2rh3V90r%2B%2BWZHQkWNZ9dXHCkTC2%2BtZmvKc%2BlZNvSz8DkB64ClEcxKV8R1NjwiBapJFm8i3ilEnI%2BJk7eOQz6k5xxcrqW%2Bsil%2Bj%2F5lwGR8ldgnjQwUHbZJD3kEAUAvXEHRDrlq4d9MNtProe3GAHaoUKVR1YWvNHn0Vde%2BmvQNRJwwvavTwQY6pgF182AuPT30euzl7YiwVs45oWa1GA7b58QlpEJSJ95B8E0MAcR4v8pv33fxbaNuGWbbCbzot%2BuBs%2B5Xawdo0B%2BXfGovrrDIVc0fkctCCnYi7xQp26OvOkTEnXLKJHDP9eMXaqrGmZLpPHYm5kpINmboANjQGAUFjD%2BgdicxQT9JjIyKJ3mEbJsHRK%2BHx8BlpJxGcHDj70rYF0lTSUsRsSDex2Crn0Wx&X-Amz-Signature=b5664a717b2e8c5f0aec22447e6e973896c48477266c0bdcb29fa0f06a4f3d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQU3OOAD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmkbnVJELi9o%2Fw1sY0p2HitFVk9KrekFb718nrMZJcxAiADJAYn47eLnGbFZJojXBvE3YGTTLLYxd0RcUKxUsfVXir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMMCe2Y6Nck0VxLWjWKtwDjyIXe81fDLV4t7W7g%2BORvI9a4Xdk35nTNyBYtOmEP8ZSeEv8aaq7sFQsO36ORfBWoZOpo72OWu%2BVW5HHAN37jIJH6G1G2NtsH5u1uJrKHw9SDgAhWNbCELrs1Mg9MtU216DBZ6sq%2FuaJF47FtYmILfAtLibTq9imDTjmAdAopyG%2BXQG8NsBBSAya2j2%2F104o%2BvAfzVokXTXK%2BoGmJNzgbQ8dCx%2FoBCdoxix7Kkn3xQer7IZWSZN8Y19Nkh55XKnsfze8qZpixlJXZSLGlT9ahWDuT3i%2FXSBj3RMHG%2BgO4e4bS%2F5bzKy1dKcxUehaWbrSJPHXXKiielSdp6LfIqo9Xgd9EkQDrmVbxhBfIcvCoL2BtHD4p9qxrw%2BYJ%2B2qk32vIPmc00ihJ09E1%2FLj2xtnGOICBhHQhpNHUkzoztnYSNd8ndIYjJ3Cj0%2B1baM1CaRtvq%2BjF4PABDOT65k2rh3V90r%2B%2BWZHQkWNZ9dXHCkTC2%2BtZmvKc%2BlZNvSz8DkB64ClEcxKV8R1NjwiBapJFm8i3ilEnI%2BJk7eOQz6k5xxcrqW%2Bsil%2Bj%2F5lwGR8ldgnjQwUHbZJD3kEAUAvXEHRDrlq4d9MNtProe3GAHaoUKVR1YWvNHn0Vde%2BmvQNRJwwvavTwQY6pgF182AuPT30euzl7YiwVs45oWa1GA7b58QlpEJSJ95B8E0MAcR4v8pv33fxbaNuGWbbCbzot%2BuBs%2B5Xawdo0B%2BXfGovrrDIVc0fkctCCnYi7xQp26OvOkTEnXLKJHDP9eMXaqrGmZLpPHYm5kpINmboANjQGAUFjD%2BgdicxQT9JjIyKJ3mEbJsHRK%2BHx8BlpJxGcHDj70rYF0lTSUsRsSDex2Crn0Wx&X-Amz-Signature=d92f074dc0abd9d3806d06c6eadcac9d8085f871c969e2ec0db7fb7795e03633&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
