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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HL5IHW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChDXDJHtFWozFK6uKsecyr0LPrlL47R8Jnij3Fi5dJyAIhALw2gitwleYansBMaJmNOQOvIpJUKMmXJ1aNKQaqZ%2FeWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBCMaCQZouwzpFeGoq3AOQtPqJXdDYSpp946KJcsE5OQ5FsYME5fV0YmME3S4D7%2FpXBBj2bUNYsi472p4gXG%2FfceJACGf%2BZHE2R%2Fo7HY%2F3ImBd299kQZca4fLuwDC52TWHjINOHZ6gYH0EB7sV4%2BfcShDIhHLY0wErmgt5DfuHeR4ITi%2FpfSVd3Z1DSC%2B6S%2FMvSOv4bachQf6joAtOO1zyURZvNlSjuTYPEdmJBVFCTwzCmEbd09ukGaRQ331sd%2BOD4%2FviBZHmFQEuPp1ptCJrFGfxzz8GdWivfhoiU1Vcq%2FETEpJA%2B5B4KwK9PrbIHAz5dKV2OYhU41gtvv4vgmlKMNLOoIv22%2B53BHFOapjy8rEGHiKMPwgPodBE23qV9e%2FIeivGXQtzAFVfhlrhMjDzhRtHL%2B0Zirg4Xc%2FVQQuZcT1Ko41lgojDrapwPWmQ02IoS2I201SdMbbiP79D7cnsv3oMXH3J4h7A3ESN2F%2FhOciduFotG7UI%2FJL7tuwR0L3g58nS%2Fmbpscewwj5Am5x68WIIVWqzptrbCqEbQAirU9tRz15upn4yvFlcRVz%2BtGgHUk3xq4JUqgyMeKwELAjJ6eXX5igBm1cXjifOgWKGafKt1aROVu3M3jdzAKa3armHKGZJ7tyC1SYbAjDR46G9BjqkAbVZ15B7dQBf3SSR7fFdww8PE0hG9GR5h4JxxMdKPZUeVSOpxgeP9PVd%2FhR00cAg1j57igVKsESt2ZVcGZ1eIjVDip6asm0ZVSK6%2F%2FDGyT%2BJADYc1J8JzzEH7hFb2zHohHnn3KtB%2F%2F88VvpoJnBzwg0GnbZhgZGcgVLfNpgJRU7g6wwx3xuRxKPC2Fpvy2f170sOoaxZRQgI%2FjQAJst562aaykRZ&X-Amz-Signature=1e4133fe5bbf13b09191d1b2945aed7d09150743562a1b4ac3afe19a9613297c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HL5IHW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChDXDJHtFWozFK6uKsecyr0LPrlL47R8Jnij3Fi5dJyAIhALw2gitwleYansBMaJmNOQOvIpJUKMmXJ1aNKQaqZ%2FeWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBCMaCQZouwzpFeGoq3AOQtPqJXdDYSpp946KJcsE5OQ5FsYME5fV0YmME3S4D7%2FpXBBj2bUNYsi472p4gXG%2FfceJACGf%2BZHE2R%2Fo7HY%2F3ImBd299kQZca4fLuwDC52TWHjINOHZ6gYH0EB7sV4%2BfcShDIhHLY0wErmgt5DfuHeR4ITi%2FpfSVd3Z1DSC%2B6S%2FMvSOv4bachQf6joAtOO1zyURZvNlSjuTYPEdmJBVFCTwzCmEbd09ukGaRQ331sd%2BOD4%2FviBZHmFQEuPp1ptCJrFGfxzz8GdWivfhoiU1Vcq%2FETEpJA%2B5B4KwK9PrbIHAz5dKV2OYhU41gtvv4vgmlKMNLOoIv22%2B53BHFOapjy8rEGHiKMPwgPodBE23qV9e%2FIeivGXQtzAFVfhlrhMjDzhRtHL%2B0Zirg4Xc%2FVQQuZcT1Ko41lgojDrapwPWmQ02IoS2I201SdMbbiP79D7cnsv3oMXH3J4h7A3ESN2F%2FhOciduFotG7UI%2FJL7tuwR0L3g58nS%2Fmbpscewwj5Am5x68WIIVWqzptrbCqEbQAirU9tRz15upn4yvFlcRVz%2BtGgHUk3xq4JUqgyMeKwELAjJ6eXX5igBm1cXjifOgWKGafKt1aROVu3M3jdzAKa3armHKGZJ7tyC1SYbAjDR46G9BjqkAbVZ15B7dQBf3SSR7fFdww8PE0hG9GR5h4JxxMdKPZUeVSOpxgeP9PVd%2FhR00cAg1j57igVKsESt2ZVcGZ1eIjVDip6asm0ZVSK6%2F%2FDGyT%2BJADYc1J8JzzEH7hFb2zHohHnn3KtB%2F%2F88VvpoJnBzwg0GnbZhgZGcgVLfNpgJRU7g6wwx3xuRxKPC2Fpvy2f170sOoaxZRQgI%2FjQAJst562aaykRZ&X-Amz-Signature=ddc1e702398ad4c96bd739ecb153d4d3622efb402d1a064226eb4238ddb0e464&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
