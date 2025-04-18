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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTQDWSK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLmBGtTkb%2Bj78Gb2SGZE9JHjNyZlOKtO7RjKsnYxwZRAIgI17d12dojOxmhyTNh%2BR%2B5woWD%2BMunH%2BrSrsTRk9GFx8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDI9Tkjo0KmMJUmlkLCrcA6T3M1CABK9JnZuJtxE4954SgkZQVexfLPR2553ZVLGMNEDQQwBWurerPBwXIqDTrz3ks77oKljeXkoYjrTp6ds%2BD4hSoy%2Ftg7ByauE%2FYRU81I%2BA7VygCeLJQuhjQuxUNer3nWPa6IJoyDcSA7DO4XCthQHZilXonShGGV7ZFVWhyu9a8ONBn%2FW1M8s0F8asKiRJeK3YofaWDC8eEfeYu%2B%2BbJ%2F1EILje2MJ9saqVjA768Jclq%2BnxLLaNwJhjIC0Zo455BegiF9qrKL7NCANX0A1k9DENFUW8Cwn4wLSb%2FgU%2Bq4Q94%2Bws%2BRmn6htfkPqw%2B78%2Frbt6bHbH0EA9hT6WbPiJOe%2B%2B%2F0jWwMvF4EFRQKyatmS%2FrIj%2F3VGwFRugZoUyaKccbR8QrJb0gtZ07IEtaANSN5lT7L%2FvtbjbZyufTWVUXxSnfNyRG2xX8H9A%2BwhBALGtPsPcHypmT6EV%2FxgkuzP7%2Bf303Ho%2F3Q%2BxrayIkzoZAJW%2F7I7PJ365Bp8Toz9qu41LfY5eUMHCmv94vmZbe1PIbZfMip6N4u0LubxY09VIvYRlMXzA%2BgHrUf9dhMcCK7x0WVttb1EGSZij3%2BKIqGBOyO%2Ft4A5j2BWDY8C68H2XMCBtI0AVm3Slz2SxMJCUisAGOqUBR8Ib1H8OC5Z3S1wZ6dFLA0%2BEUhh7Emcwt6%2B7HsLXi15%2FHqv%2BS70Y94rS39QcvqAlATQF6nUyFdsK4eJQDflAQvwq2XZOQQkhc6%2BDeOaX1jU538L2VF3awnjfbbt5yvwPCc2ztytXL6bNbKxLHG9bM0kXAKyHWcBtWeQMRMwaCDVW3N9aL4X5s%2FkIEgl9agcPEF1YYdEMiJjGCd1L6HKnpwZHJ3%2Bi&X-Amz-Signature=5d78cefc340da7b826223c65cea1b2eecec4569506fff416d185f08501c6692e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTQDWSK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLmBGtTkb%2Bj78Gb2SGZE9JHjNyZlOKtO7RjKsnYxwZRAIgI17d12dojOxmhyTNh%2BR%2B5woWD%2BMunH%2BrSrsTRk9GFx8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDI9Tkjo0KmMJUmlkLCrcA6T3M1CABK9JnZuJtxE4954SgkZQVexfLPR2553ZVLGMNEDQQwBWurerPBwXIqDTrz3ks77oKljeXkoYjrTp6ds%2BD4hSoy%2Ftg7ByauE%2FYRU81I%2BA7VygCeLJQuhjQuxUNer3nWPa6IJoyDcSA7DO4XCthQHZilXonShGGV7ZFVWhyu9a8ONBn%2FW1M8s0F8asKiRJeK3YofaWDC8eEfeYu%2B%2BbJ%2F1EILje2MJ9saqVjA768Jclq%2BnxLLaNwJhjIC0Zo455BegiF9qrKL7NCANX0A1k9DENFUW8Cwn4wLSb%2FgU%2Bq4Q94%2Bws%2BRmn6htfkPqw%2B78%2Frbt6bHbH0EA9hT6WbPiJOe%2B%2B%2F0jWwMvF4EFRQKyatmS%2FrIj%2F3VGwFRugZoUyaKccbR8QrJb0gtZ07IEtaANSN5lT7L%2FvtbjbZyufTWVUXxSnfNyRG2xX8H9A%2BwhBALGtPsPcHypmT6EV%2FxgkuzP7%2Bf303Ho%2F3Q%2BxrayIkzoZAJW%2F7I7PJ365Bp8Toz9qu41LfY5eUMHCmv94vmZbe1PIbZfMip6N4u0LubxY09VIvYRlMXzA%2BgHrUf9dhMcCK7x0WVttb1EGSZij3%2BKIqGBOyO%2Ft4A5j2BWDY8C68H2XMCBtI0AVm3Slz2SxMJCUisAGOqUBR8Ib1H8OC5Z3S1wZ6dFLA0%2BEUhh7Emcwt6%2B7HsLXi15%2FHqv%2BS70Y94rS39QcvqAlATQF6nUyFdsK4eJQDflAQvwq2XZOQQkhc6%2BDeOaX1jU538L2VF3awnjfbbt5yvwPCc2ztytXL6bNbKxLHG9bM0kXAKyHWcBtWeQMRMwaCDVW3N9aL4X5s%2FkIEgl9agcPEF1YYdEMiJjGCd1L6HKnpwZHJ3%2Bi&X-Amz-Signature=8273a8d409e34a7eb5ed70519fee6b2c02d010e4cdb50ba6ec4657c48bcc830c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
