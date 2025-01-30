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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5S5X5W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPiduU7FEBOuub2XfH%2FKWeNj1FHp2sEzEVSnQ48F6iIwIgYBrO6YLzAf1hgQTvieU6TT3m3Qj%2Bc4xn0M8Ov8QDLyUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWH%2FMROLHUqOSoqESrcA3ye%2BshOzBf0xtyBhmg3MCFz3And1P0jxykYrlxwbqPDczDcJgNyMP%2FRniECIMSWxlFW2nrAdhbme5x2uAMa%2BRkX5huDzvtxKWhcZurbBIdRVrHGua4meSktVJxCkeMvytK2Dm5V9S4k1slRrlenR9p8AlWLI9PqhLzWQ0QGN3HegxkmVhGG0b4S%2B5vwf8mMX8mTD0MFuc4vzvQvV%2FnND4kyuo2cHRAR5e4LwqX4ucNFZEnd3Glg%2B5j7Mm409NjdV3Ln5VdrreyS3vOT4KIbS%2FNInYIybII8YWmMPPeagN5nxjY8sZtbr2Vw1L%2Fj2xy9P3v4tutH9p5kkp4e3blzRGcCdIQ5l33zABlmgzJzAMDPJCsffE3%2FqPn2NsGSUw9QHDeABFx4tLzPvVo7GnBhMOBNxutdXOjyAEvyx89Zq30T9trVpCGFFPIZQ6pq5DwsGRGuXrkftYhZjB%2B%2BuNZ0pI2y9MPPNhDvVNnQly8EBIN8PnvUNLAoQxc%2BGbVhsWMUPMFsZfq4SMcb9fV4Mo0HVukbt7e3GlPs84H18fonykHzOPuiu3JgnxJNJ3m6bVVeoqOXcalH2a00FKCNeVmSHIdo8R1hmbIXzAknJcQEdmbPDZO6JR2KoqBajTWcMJSk7LwGOqUBMvRBjPly1x%2Buqbl0oXxtuIsb4X4RYtGvrN1XT0WxfdwpzIOGEM77yI9dbzKNP5gtIV4iz7N%2FKq20J%2Ba6VQ7ElgyQGz%2F1snOB6%2BejJzsR48JtGAKwdRkPoiAxGavozyLdWiPGe8ifIjn5PGFePNPQk%2BGwzYFyYKcg5nqDFB8p5bXIUIva%2F%2FO%2FKFoDS4vK%2BXiADaFtK26kDTAkUHCzF2gHwkBQs4Kh&X-Amz-Signature=d6ba16b56804a2c7596d4cc7748f69c7e30ac134fdc420d09bdb951b5fbd3202&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5S5X5W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPiduU7FEBOuub2XfH%2FKWeNj1FHp2sEzEVSnQ48F6iIwIgYBrO6YLzAf1hgQTvieU6TT3m3Qj%2Bc4xn0M8Ov8QDLyUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWH%2FMROLHUqOSoqESrcA3ye%2BshOzBf0xtyBhmg3MCFz3And1P0jxykYrlxwbqPDczDcJgNyMP%2FRniECIMSWxlFW2nrAdhbme5x2uAMa%2BRkX5huDzvtxKWhcZurbBIdRVrHGua4meSktVJxCkeMvytK2Dm5V9S4k1slRrlenR9p8AlWLI9PqhLzWQ0QGN3HegxkmVhGG0b4S%2B5vwf8mMX8mTD0MFuc4vzvQvV%2FnND4kyuo2cHRAR5e4LwqX4ucNFZEnd3Glg%2B5j7Mm409NjdV3Ln5VdrreyS3vOT4KIbS%2FNInYIybII8YWmMPPeagN5nxjY8sZtbr2Vw1L%2Fj2xy9P3v4tutH9p5kkp4e3blzRGcCdIQ5l33zABlmgzJzAMDPJCsffE3%2FqPn2NsGSUw9QHDeABFx4tLzPvVo7GnBhMOBNxutdXOjyAEvyx89Zq30T9trVpCGFFPIZQ6pq5DwsGRGuXrkftYhZjB%2B%2BuNZ0pI2y9MPPNhDvVNnQly8EBIN8PnvUNLAoQxc%2BGbVhsWMUPMFsZfq4SMcb9fV4Mo0HVukbt7e3GlPs84H18fonykHzOPuiu3JgnxJNJ3m6bVVeoqOXcalH2a00FKCNeVmSHIdo8R1hmbIXzAknJcQEdmbPDZO6JR2KoqBajTWcMJSk7LwGOqUBMvRBjPly1x%2Buqbl0oXxtuIsb4X4RYtGvrN1XT0WxfdwpzIOGEM77yI9dbzKNP5gtIV4iz7N%2FKq20J%2Ba6VQ7ElgyQGz%2F1snOB6%2BejJzsR48JtGAKwdRkPoiAxGavozyLdWiPGe8ifIjn5PGFePNPQk%2BGwzYFyYKcg5nqDFB8p5bXIUIva%2F%2FO%2FKFoDS4vK%2BXiADaFtK26kDTAkUHCzF2gHwkBQs4Kh&X-Amz-Signature=632346dd098bac1dcaa8d5c58f68cddf71c446e99170607b709b4b034e951f86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
