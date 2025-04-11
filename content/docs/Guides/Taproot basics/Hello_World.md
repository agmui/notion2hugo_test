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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXCBK7I%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIDjur%2BZ65UBZVCDc3RDhLVt%2FRdDFW%2BCWCFqHEMdqFnVWAiEAs10qdVnn%2BNeLLA%2Fm5aw8sAtnM6jebIFS86dK1yyjuRcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOn0mPzyrQGbL2JuCrcAz9tuofhAyUAy8m8%2Fd88O4S49GEAMwIMrJ%2FfUpBkdXaMSMXYcR5rSAyAxMhuXdVb9AmaNJqIxuGZYY099EVTP%2BFUlJ96FFre6IO%2F2jbSgtMePfjr6xwC5SSxLkb%2FW4bymBdea%2FNfp1BBRTL9R3fzV47TfkEk1eJ9lz0cjGL%2Fbea6g65Qsi2dPwwYz7lLkhe%2FQoVNcfZ0rQYmY6E%2FJfRJcBbGJfuvPI5nWK4ELnzmG4MoEXw%2B2VXObZJ28uK0JoFmkd4dRrWVixuKn%2BnA5qMjZKc1ucOSEZpURekFxs4glqdqa8GkIBLEmAjshDoeLB9whokIQglS%2FUV7fxu66Ak1OOitCf1ya4JaLsHJaRWs7yElRxQnRfMvxxZvT7%2BryB0F9pdj9T%2BKYbOFhQ32dpN4ikxdLUMMBHO6QprfA%2FFCH5btKGdYC7MIpyoRHEiC8zcAXrlfKDOoX4w5Hc86QGsjba2GU4TD%2BSN80KauvxPt5JX6tJ9njX84iHB0dxDfE%2B3TJmtcrnguwONJMeV%2Fc5Hx0tkVkG72wsg38DGrg1S99fN4UvKHv5ZbaL%2F43Ze2fUVF3jQm0Bqr2qFblJtFC2GeKUPkomrQMggX8gjTiZrGtghVgGYZBV1s1P0%2BZmk0MP7c4b8GOqUBck5ljtOXbS01HuuR2K2pNIavEF3GN11ZDoo5HklZ7Le8cL9DsxpU8fDYBkJ5MqyXZVtwZkz1OlpeTYzUkPEv7juz4FMLLtFk5TdOwA2EeoFKAzQGfDNcH01sLik4XnManF%2B6Ipr0KobcbfTXIKOpaFZwDqCHjtS0JyHmerZcJGmPKDb32FO7eABdz2B7htYpuwab60X%2F3DKffg65QwWdrIU0M2K4&X-Amz-Signature=2b99a3565efb3e256cad13ea03f29e688954255058a6e00733ece6193ab250a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXCBK7I%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIDjur%2BZ65UBZVCDc3RDhLVt%2FRdDFW%2BCWCFqHEMdqFnVWAiEAs10qdVnn%2BNeLLA%2Fm5aw8sAtnM6jebIFS86dK1yyjuRcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOn0mPzyrQGbL2JuCrcAz9tuofhAyUAy8m8%2Fd88O4S49GEAMwIMrJ%2FfUpBkdXaMSMXYcR5rSAyAxMhuXdVb9AmaNJqIxuGZYY099EVTP%2BFUlJ96FFre6IO%2F2jbSgtMePfjr6xwC5SSxLkb%2FW4bymBdea%2FNfp1BBRTL9R3fzV47TfkEk1eJ9lz0cjGL%2Fbea6g65Qsi2dPwwYz7lLkhe%2FQoVNcfZ0rQYmY6E%2FJfRJcBbGJfuvPI5nWK4ELnzmG4MoEXw%2B2VXObZJ28uK0JoFmkd4dRrWVixuKn%2BnA5qMjZKc1ucOSEZpURekFxs4glqdqa8GkIBLEmAjshDoeLB9whokIQglS%2FUV7fxu66Ak1OOitCf1ya4JaLsHJaRWs7yElRxQnRfMvxxZvT7%2BryB0F9pdj9T%2BKYbOFhQ32dpN4ikxdLUMMBHO6QprfA%2FFCH5btKGdYC7MIpyoRHEiC8zcAXrlfKDOoX4w5Hc86QGsjba2GU4TD%2BSN80KauvxPt5JX6tJ9njX84iHB0dxDfE%2B3TJmtcrnguwONJMeV%2Fc5Hx0tkVkG72wsg38DGrg1S99fN4UvKHv5ZbaL%2F43Ze2fUVF3jQm0Bqr2qFblJtFC2GeKUPkomrQMggX8gjTiZrGtghVgGYZBV1s1P0%2BZmk0MP7c4b8GOqUBck5ljtOXbS01HuuR2K2pNIavEF3GN11ZDoo5HklZ7Le8cL9DsxpU8fDYBkJ5MqyXZVtwZkz1OlpeTYzUkPEv7juz4FMLLtFk5TdOwA2EeoFKAzQGfDNcH01sLik4XnManF%2B6Ipr0KobcbfTXIKOpaFZwDqCHjtS0JyHmerZcJGmPKDb32FO7eABdz2B7htYpuwab60X%2F3DKffg65QwWdrIU0M2K4&X-Amz-Signature=8cff57f9cb38bed7c61a54bf53fac21f0ad815e0d346b2ae4e8f66d823882322&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
