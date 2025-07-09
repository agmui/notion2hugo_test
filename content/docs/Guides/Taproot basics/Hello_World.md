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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMEQ2P7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIW6vl1lMOuXC0c78zDU8pY%2FPU8l7UHbnQB2tIfz0LxAiEA7t9ts%2Bz04mIyCwEgH9ltuaXcrdeFOtmSg8y5PclybAIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BgLGV8IO1o0hliWCrcA1yHczisCk00POKPqQo1MMvrSwqcN119bqjWIJCfwdxbSa9YR6w7aC24WZZupFB04e%2BzbOLCTuNU%2FzKCJtpuO3xY2KC4gM74Kaqc1HwY0tEcr2jJ%2F93oNOrwQSr4EUpjtAw6vVseuyjhaGSmE1ctxoIT2PqizEeKFjUOROgvojydA4EiWC9WJ29M6PCeszFO3xWhM9t0g1%2Fq%2FjvEWf29YEFczWDXX6mgqApx4qJGQEBqn8KWA28W4oqALDB%2BniojI0sTHW9DSkND8Ym60nKiG3eCeL9SrHbVhrCQc1XkklbXDfM%2BJh9uNxnzD3XklIAK53ZNnM69unANwqx8KREgcqcF6jod6G71m3zhgaUs%2BNm9RMKWfQ%2BUFkq86z4mXnUhp1lO8Ajgtuue6u%2FQrEMEjrPM62NbxCw%2BmQizuqpmJ1AUj0PnsopwjJfv7i2X%2BoP6bA38W5sFCdSO6nV0XfAutEJWZrrbQL4fi8qPWWOHwGP7AXXtdRwujuL%2FO8G%2BYp0sP8ykGYpCJLdthh%2F4P%2BMt7eMxcaZ8dLmhbqamJuRRhVg2y4m9HQQAKA5VBXuTM0Q4HD5MfHmhTQ18%2BLYjRJOznKLCQ6tbjzDRN5ZimUut9Z2CXfnRqIO0mN1PL%2BDiMOKXusMGOqUBKpZNiFYpkV33RAtDugjRLcN8rbgzNC7UmEVJ0JlaUjpu9O2M4YNH%2Fd8SgkM6KDxSCDRWCpLS00Uox3UIGaOAqPoiWRWenRk7IkwYmRdPafo%2FDyWhBOdgmHqPSRhY8eAsB4Y00airJ770gcedRioHZ6%2BqVRYy15uP1%2FR%2BKvu6MlFxaF0tBI9lf4K%2BgDyj7uo%2FMHXO7VVIIAO5Lv6VZrZh9ii4%2Fx%2BW&X-Amz-Signature=cb11ef2e91641b350104a30a5d666dc00b3c725c67c6fb5476c0707cdee3a30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMEQ2P7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIW6vl1lMOuXC0c78zDU8pY%2FPU8l7UHbnQB2tIfz0LxAiEA7t9ts%2Bz04mIyCwEgH9ltuaXcrdeFOtmSg8y5PclybAIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BgLGV8IO1o0hliWCrcA1yHczisCk00POKPqQo1MMvrSwqcN119bqjWIJCfwdxbSa9YR6w7aC24WZZupFB04e%2BzbOLCTuNU%2FzKCJtpuO3xY2KC4gM74Kaqc1HwY0tEcr2jJ%2F93oNOrwQSr4EUpjtAw6vVseuyjhaGSmE1ctxoIT2PqizEeKFjUOROgvojydA4EiWC9WJ29M6PCeszFO3xWhM9t0g1%2Fq%2FjvEWf29YEFczWDXX6mgqApx4qJGQEBqn8KWA28W4oqALDB%2BniojI0sTHW9DSkND8Ym60nKiG3eCeL9SrHbVhrCQc1XkklbXDfM%2BJh9uNxnzD3XklIAK53ZNnM69unANwqx8KREgcqcF6jod6G71m3zhgaUs%2BNm9RMKWfQ%2BUFkq86z4mXnUhp1lO8Ajgtuue6u%2FQrEMEjrPM62NbxCw%2BmQizuqpmJ1AUj0PnsopwjJfv7i2X%2BoP6bA38W5sFCdSO6nV0XfAutEJWZrrbQL4fi8qPWWOHwGP7AXXtdRwujuL%2FO8G%2BYp0sP8ykGYpCJLdthh%2F4P%2BMt7eMxcaZ8dLmhbqamJuRRhVg2y4m9HQQAKA5VBXuTM0Q4HD5MfHmhTQ18%2BLYjRJOznKLCQ6tbjzDRN5ZimUut9Z2CXfnRqIO0mN1PL%2BDiMOKXusMGOqUBKpZNiFYpkV33RAtDugjRLcN8rbgzNC7UmEVJ0JlaUjpu9O2M4YNH%2Fd8SgkM6KDxSCDRWCpLS00Uox3UIGaOAqPoiWRWenRk7IkwYmRdPafo%2FDyWhBOdgmHqPSRhY8eAsB4Y00airJ770gcedRioHZ6%2BqVRYy15uP1%2FR%2BKvu6MlFxaF0tBI9lf4K%2BgDyj7uo%2FMHXO7VVIIAO5Lv6VZrZh9ii4%2Fx%2BW&X-Amz-Signature=c23d721e48da7ef5243eca139f756a7dab190f059d337ee8151a1a026bd20853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
