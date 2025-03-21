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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q6RO5GW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAc72MNm4Ke2w3Gu8txydCE%2ByGPQMXQz25Wjn9Jv7DZ3AiBFQe%2BdvZ%2Fe6eSSZOb0w8bad4HpcItov9hjlZk8a7mIByqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqDtsKla9g8PtdtcKtwDNdYPoSQuErIKVjo3qzt4Gm0Ef7b0xQC5yy5IVb8G2SPix3GavAT2HWxxm6mcFrg92%2BIM8gBcnSyr0ysg1%2FsTbAmWLyalkF0sN2V%2FvoyTB2ZLHKhQCGeROJmMvc1f2Jw91B10IMb8ObH5ZQhcNaGHK%2FPBrgRIQglhqRDHk0INHezSD95wLkpwzQ4YSsorMuwn%2F8UPsvvQ3PPtQntYTi%2BwHMhAh1eSCF7x9vrvbWlXEi4UWpM%2F%2FO3rzBX3Pdh8u4QXThYaWHklYPb7uS6Pgm3vTgyKv6xIs97R%2BkaXgOrzntXHI7qViTv8PEg36nsK7NwPeS%2F7AIDA60sUVxBjHWaXerDk4OqybM4yzM2vkR%2Fz2dkyQyjzu7ah7tgXSMrPhXLARJxiZag6k%2Bb46zJ%2Fzu0JpaAzsrgCx4uzJb9%2FMdy%2F6BE8oypmyyoFKxm71DQv%2B8NtTS5V7KEMOHbTWqE8JDx3hUW6jTmAwM%2F%2FoU4X%2FFb550nVgp47I8ybw6PJ4rFD2YnH2WtVyCvT9YUDHQCpAsh6mbX32PebhTZnuATrgAelzvQLbixE%2Fo4voHTfhAv7yBa4ApbGnDtkBeGrjenRBbcYfBlQDEYAAOWsePicELCDL7xBF0%2BTgzM8Hr2FCugwz7nzvgY6pgELnDPny6nvawNDVjmeYEvETevDsyEdlqDwpqJjrEfAaFdLnSsjfhDQeFxdZ4WWBejtENZ5OIUTWn378C%2BaR60QuNAtwLBUGto%2FHHP7SBnelB03XdIRHtMf7HquWUdD6ylyyciENCCf7Ens6FJSoiJxRXM4JRfSVH8%2FmQI0aj%2FXL%2Fq67UbgfcAhomiJRpVxA1utl2pHRdszjdGD2%2Bqbgp1dgHewcfTV&X-Amz-Signature=eae4b56c00214378e4fb9d8d9d36ea37147895c61f55f8806b69e03ba2814153&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q6RO5GW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAc72MNm4Ke2w3Gu8txydCE%2ByGPQMXQz25Wjn9Jv7DZ3AiBFQe%2BdvZ%2Fe6eSSZOb0w8bad4HpcItov9hjlZk8a7mIByqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqDtsKla9g8PtdtcKtwDNdYPoSQuErIKVjo3qzt4Gm0Ef7b0xQC5yy5IVb8G2SPix3GavAT2HWxxm6mcFrg92%2BIM8gBcnSyr0ysg1%2FsTbAmWLyalkF0sN2V%2FvoyTB2ZLHKhQCGeROJmMvc1f2Jw91B10IMb8ObH5ZQhcNaGHK%2FPBrgRIQglhqRDHk0INHezSD95wLkpwzQ4YSsorMuwn%2F8UPsvvQ3PPtQntYTi%2BwHMhAh1eSCF7x9vrvbWlXEi4UWpM%2F%2FO3rzBX3Pdh8u4QXThYaWHklYPb7uS6Pgm3vTgyKv6xIs97R%2BkaXgOrzntXHI7qViTv8PEg36nsK7NwPeS%2F7AIDA60sUVxBjHWaXerDk4OqybM4yzM2vkR%2Fz2dkyQyjzu7ah7tgXSMrPhXLARJxiZag6k%2Bb46zJ%2Fzu0JpaAzsrgCx4uzJb9%2FMdy%2F6BE8oypmyyoFKxm71DQv%2B8NtTS5V7KEMOHbTWqE8JDx3hUW6jTmAwM%2F%2FoU4X%2FFb550nVgp47I8ybw6PJ4rFD2YnH2WtVyCvT9YUDHQCpAsh6mbX32PebhTZnuATrgAelzvQLbixE%2Fo4voHTfhAv7yBa4ApbGnDtkBeGrjenRBbcYfBlQDEYAAOWsePicELCDL7xBF0%2BTgzM8Hr2FCugwz7nzvgY6pgELnDPny6nvawNDVjmeYEvETevDsyEdlqDwpqJjrEfAaFdLnSsjfhDQeFxdZ4WWBejtENZ5OIUTWn378C%2BaR60QuNAtwLBUGto%2FHHP7SBnelB03XdIRHtMf7HquWUdD6ylyyciENCCf7Ens6FJSoiJxRXM4JRfSVH8%2FmQI0aj%2FXL%2Fq67UbgfcAhomiJRpVxA1utl2pHRdszjdGD2%2Bqbgp1dgHewcfTV&X-Amz-Signature=1705a2ae9883720bb583bfb0f0b2511bd9aaf64e00a156593ff89aa33a28d2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
