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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO3VGQL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGckZVl1RgpHCm0Lyt5RtMmEboJg2GbyA%2Bz5eU3r3tLQAiEAiPSpAFUfthPfI6U3mMr4uatIxyFWzRBxFoNnGOI2f8sqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkSGJ9e7eIC5pObWCrcAxILL707gAOjCWH6A5LussZeojuhw3YPWIS2zV47yqNJ6RTH8vMUn6DRRVr%2FR4uqVAp3a79BYfigLil4kiQkYstfYGhiVlhwM1r4rVc1fR%2Bvt5hMPZhqwUUt%2BCRltiIZxrNazRzxYKBU03cnxOMDaI3fier2BGoTnSXET%2FsYaZXRW8D7c1dvzvtT9dNYbL3NcitFRBbFCDa7wmr01PivV0BY6f53xiT3lLH515gPLoSZIdGa71I9MpTfTIUDBWj6otsOq4rj3wn2uP%2BJU0mYPoJPtjkiUtzocpLLhZhFYfu3FWsFwLuaM64pcjvBdlKxjMCXdyROgldSUxZl1UbofX5j0OmnhWKXSHIyUuS0%2B1MegztRLrQQArje9iaVhv7IL%2Bd8z8Ta1Eik9sRy%2Bbh3ApYZOYKV3%2Fe3vLpSs%2FEtsH%2BI6%2BlsNxuwYySxhmcMx7RZFECJm7qniucf0UbY%2B3cGNNDwXrtBc2spXkbh2zwXIxu520Nulo8JdxHZCGrPSOJtvF30WXwfTMJ%2B56uGnkR%2F4j5Qr1aM2u2uBwn1TFu4sVgDZ9TsIboFgKNkmnA3uLo4htDBB6ZKk5tIqqnbWBY1HdfZ010tGqSFc6FsANmqbUpZvQWxWiDtbE8sldu3MNL%2FvMMGOqUBWqxKcKpQIozfBdGX%2FZ3la6%2Fau%2F2aFzOinPsTBF3A9OcPFwxxthbc8TKkoundvUzHkBY5GRpOJUvelB5xNWi8FqVTvxDPIQXkwemp0eUMr%2Bunr0DTTKa37%2BjFUSwaJUSMALQTdQqpL3M%2B7v%2Ba2SDYBWwHbArhkx8bFM8nzvKFuNdg1QthYPnLZ6BEWbxoJwxPs5ED%2F2uhgSK%2Fu%2BF5KSY1gN2FYR0U&X-Amz-Signature=439e78a028ae92bc50fec9f56ec938174487426a3430eac514a05c9ff196c639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO3VGQL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGckZVl1RgpHCm0Lyt5RtMmEboJg2GbyA%2Bz5eU3r3tLQAiEAiPSpAFUfthPfI6U3mMr4uatIxyFWzRBxFoNnGOI2f8sqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkSGJ9e7eIC5pObWCrcAxILL707gAOjCWH6A5LussZeojuhw3YPWIS2zV47yqNJ6RTH8vMUn6DRRVr%2FR4uqVAp3a79BYfigLil4kiQkYstfYGhiVlhwM1r4rVc1fR%2Bvt5hMPZhqwUUt%2BCRltiIZxrNazRzxYKBU03cnxOMDaI3fier2BGoTnSXET%2FsYaZXRW8D7c1dvzvtT9dNYbL3NcitFRBbFCDa7wmr01PivV0BY6f53xiT3lLH515gPLoSZIdGa71I9MpTfTIUDBWj6otsOq4rj3wn2uP%2BJU0mYPoJPtjkiUtzocpLLhZhFYfu3FWsFwLuaM64pcjvBdlKxjMCXdyROgldSUxZl1UbofX5j0OmnhWKXSHIyUuS0%2B1MegztRLrQQArje9iaVhv7IL%2Bd8z8Ta1Eik9sRy%2Bbh3ApYZOYKV3%2Fe3vLpSs%2FEtsH%2BI6%2BlsNxuwYySxhmcMx7RZFECJm7qniucf0UbY%2B3cGNNDwXrtBc2spXkbh2zwXIxu520Nulo8JdxHZCGrPSOJtvF30WXwfTMJ%2B56uGnkR%2F4j5Qr1aM2u2uBwn1TFu4sVgDZ9TsIboFgKNkmnA3uLo4htDBB6ZKk5tIqqnbWBY1HdfZ010tGqSFc6FsANmqbUpZvQWxWiDtbE8sldu3MNL%2FvMMGOqUBWqxKcKpQIozfBdGX%2FZ3la6%2Fau%2F2aFzOinPsTBF3A9OcPFwxxthbc8TKkoundvUzHkBY5GRpOJUvelB5xNWi8FqVTvxDPIQXkwemp0eUMr%2Bunr0DTTKa37%2BjFUSwaJUSMALQTdQqpL3M%2B7v%2Ba2SDYBWwHbArhkx8bFM8nzvKFuNdg1QthYPnLZ6BEWbxoJwxPs5ED%2F2uhgSK%2Fu%2BF5KSY1gN2FYR0U&X-Amz-Signature=2ca0da4ac9544eb383f6407a0e5e4f406abeec1c1832fc44894d4d2ac9cbf7e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
