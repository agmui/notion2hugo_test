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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDAX4LMD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLSzPgvnP1F05Np%2FV9SKTawbnUpCbGC1afEcA5B7djzAiEAtUfNTNrxVIaVGXxJZLZFPeW5PqDYSOQlryd4Bro%2F9csqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkTxxdf3dBkOdQGBCrcA%2FRt45P0uzNr4AFyhqz7KiL2k0qR6neY5pQh6U5TgKtQhPjGOiCqTlNKm09LvQRwUNbY6gRXqEA38CcDo%2FTR%2FxaZoPLDpTc25v4T%2FluyirIG266gD0AH1H3YQNAXO6MP6Oo7cMxmMy3PYkF3Q9BjV28t69Zzg1a6YFfsKIGUJSMb3nIRG8dieUcgoBhLJyJ6zH61E50XlaPpi8LendE4CZv0K6vaguZwOHgU7N0F5USK%2Bnpb%2BLz%2FsV3M%2BGICwFXDXZ99yp8HJrlsu8xYLAJ1KHQ3fvhLBwpEPUV1ttw8FKk8E2WG9AmCIbzev1yE0MABMF12j%2FsNkyG38UfFShZtpA9T%2Fk%2BUMmDKDoPiszowDj%2F5Y%2FudccHatsfQSAYt8OatsYA1Mc8EbVeLdc%2B9TE7fQMsZr2%2Bh2h6Ehgg9t%2FseEAPWaqpfie%2Bkclc4sQzDsPEmNH44%2BRXT8Wq%2FInLaaSYNfJPodEtdkGOvhtpmm8I3qbObYIH2dQ0%2FSzNsH8dmfBU5wKC2qSLfSKJsIJz%2BT%2BGPi6gRGLBJABmLYd6l5sTTTkx2Isumc3Y2jgBBrVpEQK2RdpBxjXUzdoBPsKx7eXfnrJ8wcNHN5jJAGg0WFvwczb92diIQNwDSmhdCzaWNMILt0cIGOqUBLs7mGBoEa2bxRy99sYavNLJhUB7V2%2Bp2v2ImPfZWcHVhDHlRCKLzA4AXJyA4ahTgtbkCqCem6i7Watpr4xL1QsEo9TQTsDyraRHuS%2Bq0Ch0bwooU9j6YEe%2Fes042cYof%2FuIqcVy62vM2pwJVoZJcm6Ql2vqV%2FzisUcrEEoGeivf9vkvo%2Fj1avexnKOnquoQe4YCbHG04rQ0lXrMHRlTi8nRKa%2BsJ&X-Amz-Signature=42e1cf88414c36feb88f524d0fcf6587fefe14adaa9e995ba2a0a13010dfb38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDAX4LMD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLSzPgvnP1F05Np%2FV9SKTawbnUpCbGC1afEcA5B7djzAiEAtUfNTNrxVIaVGXxJZLZFPeW5PqDYSOQlryd4Bro%2F9csqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkTxxdf3dBkOdQGBCrcA%2FRt45P0uzNr4AFyhqz7KiL2k0qR6neY5pQh6U5TgKtQhPjGOiCqTlNKm09LvQRwUNbY6gRXqEA38CcDo%2FTR%2FxaZoPLDpTc25v4T%2FluyirIG266gD0AH1H3YQNAXO6MP6Oo7cMxmMy3PYkF3Q9BjV28t69Zzg1a6YFfsKIGUJSMb3nIRG8dieUcgoBhLJyJ6zH61E50XlaPpi8LendE4CZv0K6vaguZwOHgU7N0F5USK%2Bnpb%2BLz%2FsV3M%2BGICwFXDXZ99yp8HJrlsu8xYLAJ1KHQ3fvhLBwpEPUV1ttw8FKk8E2WG9AmCIbzev1yE0MABMF12j%2FsNkyG38UfFShZtpA9T%2Fk%2BUMmDKDoPiszowDj%2F5Y%2FudccHatsfQSAYt8OatsYA1Mc8EbVeLdc%2B9TE7fQMsZr2%2Bh2h6Ehgg9t%2FseEAPWaqpfie%2Bkclc4sQzDsPEmNH44%2BRXT8Wq%2FInLaaSYNfJPodEtdkGOvhtpmm8I3qbObYIH2dQ0%2FSzNsH8dmfBU5wKC2qSLfSKJsIJz%2BT%2BGPi6gRGLBJABmLYd6l5sTTTkx2Isumc3Y2jgBBrVpEQK2RdpBxjXUzdoBPsKx7eXfnrJ8wcNHN5jJAGg0WFvwczb92diIQNwDSmhdCzaWNMILt0cIGOqUBLs7mGBoEa2bxRy99sYavNLJhUB7V2%2Bp2v2ImPfZWcHVhDHlRCKLzA4AXJyA4ahTgtbkCqCem6i7Watpr4xL1QsEo9TQTsDyraRHuS%2Bq0Ch0bwooU9j6YEe%2Fes042cYof%2FuIqcVy62vM2pwJVoZJcm6Ql2vqV%2FzisUcrEEoGeivf9vkvo%2Fj1avexnKOnquoQe4YCbHG04rQ0lXrMHRlTi8nRKa%2BsJ&X-Amz-Signature=2eb5210360e998ca8b8d0ee005834a1728b0fa92d0b98ee48b374802c9a31b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
