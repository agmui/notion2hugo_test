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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSCVQFF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5FTNygI4URM7V9IX0vKk3oLxmhM%2FYmHU9kLZ0OuYxAiA01pVfDAoyNm0Fx4L40GoNq2psk0Lq6iYIQBb6JXxlOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuEob774S0PnA6RRKtwDuRcqCe99%2BTl9nj4J7En39ndrM8%2BxSUkN8iBiXLZr7ZTf4E3X%2F6w2J%2FQ0ZipgWV%2FoRoTqTZpsN8TpGAFM6eK9DMqApKAZJeL4u6cQLk7eos2G%2Bx%2B3E1m%2FvLm9JIY8BpWzoIuZCUG2c%2BfnvyQq56Snj1I%2FOGf%2FkY1RZCQI6VRkUtsinp%2FUtxzkammsgMgurW4T5VkxiDIinHokHhyaiHsyRGhg4aTlzjt64ItalNonC%2F2h5uonc6pGbrN8QlhvJ3NzwQNhb%2BVFWm3NKRGWgqVjjhaqj0vUDmdihqEgs0EDz4oOt34M541MJ0pKbLTSW4BnOohUyHLhonj8ggbiPjEptEZISl9AaipfB9T7yt8W5ImxA8h%2BwkYv%2FF94aAvVRsaNs0yMZlPpmdQs0XRO48gRYpSHaqV%2FwJ0%2FO0lz8Ys9KunLy5luZMPVljLiUrrYc14BndMWtwC8vNWrisIwt1TB7hlmCIC95%2FfqjB1UuBGt9NGV2nzuCSioqCm%2FNwHkCnyQZDTHHGxb2WqfnTD2HNrG37Jn9WhB9WobVVsRvIbJjxOLtI31cnoYeRNzcEDXOtn2IBNVWDgfYDLSvYIAEhI0hyXQDCJ9PKcKpY7%2B7BBsRnK56uUieCfQh3JvKVYwhrGCvwY6pgFy8711j7xCQ8q8p4RUcRxDOPYtlNDCHRrv7SPekpkFiZrbjj813rrKtcQUd2dgjzhoJpQtBdqbobefbiqtni%2BEn4mzPXUGcbbISI6Pqwt5rtNtPDp64nN7HDuT5QYMC%2FF4z0Btvq2IproWP6vtB88R3Pq6tnRTQfQ0rL1rCURo1nEXFBGT6%2BeNvof6ZuvuOyGFrBlKsMKP2Lw0Gg86f%2BH6kbiH1hv1&X-Amz-Signature=307e566a5f40ba1286c526b1a7ee2416c015cf8c4688495cd6c80e346e0c2aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSCVQFF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5FTNygI4URM7V9IX0vKk3oLxmhM%2FYmHU9kLZ0OuYxAiA01pVfDAoyNm0Fx4L40GoNq2psk0Lq6iYIQBb6JXxlOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuEob774S0PnA6RRKtwDuRcqCe99%2BTl9nj4J7En39ndrM8%2BxSUkN8iBiXLZr7ZTf4E3X%2F6w2J%2FQ0ZipgWV%2FoRoTqTZpsN8TpGAFM6eK9DMqApKAZJeL4u6cQLk7eos2G%2Bx%2B3E1m%2FvLm9JIY8BpWzoIuZCUG2c%2BfnvyQq56Snj1I%2FOGf%2FkY1RZCQI6VRkUtsinp%2FUtxzkammsgMgurW4T5VkxiDIinHokHhyaiHsyRGhg4aTlzjt64ItalNonC%2F2h5uonc6pGbrN8QlhvJ3NzwQNhb%2BVFWm3NKRGWgqVjjhaqj0vUDmdihqEgs0EDz4oOt34M541MJ0pKbLTSW4BnOohUyHLhonj8ggbiPjEptEZISl9AaipfB9T7yt8W5ImxA8h%2BwkYv%2FF94aAvVRsaNs0yMZlPpmdQs0XRO48gRYpSHaqV%2FwJ0%2FO0lz8Ys9KunLy5luZMPVljLiUrrYc14BndMWtwC8vNWrisIwt1TB7hlmCIC95%2FfqjB1UuBGt9NGV2nzuCSioqCm%2FNwHkCnyQZDTHHGxb2WqfnTD2HNrG37Jn9WhB9WobVVsRvIbJjxOLtI31cnoYeRNzcEDXOtn2IBNVWDgfYDLSvYIAEhI0hyXQDCJ9PKcKpY7%2B7BBsRnK56uUieCfQh3JvKVYwhrGCvwY6pgFy8711j7xCQ8q8p4RUcRxDOPYtlNDCHRrv7SPekpkFiZrbjj813rrKtcQUd2dgjzhoJpQtBdqbobefbiqtni%2BEn4mzPXUGcbbISI6Pqwt5rtNtPDp64nN7HDuT5QYMC%2FF4z0Btvq2IproWP6vtB88R3Pq6tnRTQfQ0rL1rCURo1nEXFBGT6%2BeNvof6ZuvuOyGFrBlKsMKP2Lw0Gg86f%2BH6kbiH1hv1&X-Amz-Signature=8721879ca0c2d70e01c09284bf89468fdd4580ed4859c5c5cce355923accbdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
