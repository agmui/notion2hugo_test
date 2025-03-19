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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIPHKY4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICv7c6Y94%2FQtfAxEJFTddiBjXDLZ6Qj5mtlxGjk5fVLGAiEAgibt8HM1TYJ7nchtOjFTunU0K80Bb6mkkB26tR4cnDcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4cZ9ISbwXhuZ19cSrcA7eRFclG33ICfQgG%2BJSDs4PHFzs7tEFA9Of10Cgtmhephtfxe6sDumENGAIxySN1BizE6hVrRMwSVBOsKo%2F3OfULAuKMoj1C5VmagKQgwv8wwT29zxYdnqjJRp85SHy737lqVZmVvonjKLodrXCPaHruhQUa0CBr1PnRJ2yJLtvqmLzW%2FwTy4gpCxpbacpOgb87QzwNpIcieBgmRXWUHbGQSjGHONus0BKRpuvFBBp9GjJ1NUgPs%2FN2ne6vDvmOR8SwR383eLmE5KXATKz%2FAHsvSvjeroczYpRsiwGwKMzjH92J%2FfhkWOio4Zbj9x%2BtADnpW5%2BVDOUzhqHilfilDRiY%2FLBlq1TZh6g11%2BXRD5whDJmWUKFM11IxGwrMly%2BJtZYfqwKDqFCqbcR55zhSYengLwG7vL%2FkrypkvjnKYR3spt5D88KY7Zg9bYM3DhGj%2BWRghy2STUrKL521cVs0lk4jn2Ht63Agcz%2BG56oTHxZIB2tpeQdjnuRhoU4XBL8UAPNWKJ%2FBHXIfgxG1Zskmb2ig2jP%2FtpIewqeHSWgixPJbb6fS8P2nICZku1q3wO%2B9UvQgm4qHVFObFM%2BfuHoipeZwY8bxyGR1uzGcgLnYdWOMgpzk2I4ozUbG8gTFSMNKd674GOqUBO8m9k9j93l3muEwaeazmcDJ%2FcPrwSNHDZA5aTZZ6mWuUv0fbwaD9xtFD8XwRomv2pndXzv2lopIE16u4MPPqfbCQhXPjYzeskrw2RAdYeHwXs5N0tO4QwreO7y%2BBxhtc3UJnXr8eesPii8940MmwPNQRNYRrcFwDLM%2FPMHpKlPv5dxhbpC7AuiSflIYx72bwQVbK2qMcWW6f%2FmcwYyUQGKDZTkPh&X-Amz-Signature=4af931c5a0a3083a87301b931d6cc43343a2e1529981661a5629fd032ab0debe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIPHKY4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICv7c6Y94%2FQtfAxEJFTddiBjXDLZ6Qj5mtlxGjk5fVLGAiEAgibt8HM1TYJ7nchtOjFTunU0K80Bb6mkkB26tR4cnDcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4cZ9ISbwXhuZ19cSrcA7eRFclG33ICfQgG%2BJSDs4PHFzs7tEFA9Of10Cgtmhephtfxe6sDumENGAIxySN1BizE6hVrRMwSVBOsKo%2F3OfULAuKMoj1C5VmagKQgwv8wwT29zxYdnqjJRp85SHy737lqVZmVvonjKLodrXCPaHruhQUa0CBr1PnRJ2yJLtvqmLzW%2FwTy4gpCxpbacpOgb87QzwNpIcieBgmRXWUHbGQSjGHONus0BKRpuvFBBp9GjJ1NUgPs%2FN2ne6vDvmOR8SwR383eLmE5KXATKz%2FAHsvSvjeroczYpRsiwGwKMzjH92J%2FfhkWOio4Zbj9x%2BtADnpW5%2BVDOUzhqHilfilDRiY%2FLBlq1TZh6g11%2BXRD5whDJmWUKFM11IxGwrMly%2BJtZYfqwKDqFCqbcR55zhSYengLwG7vL%2FkrypkvjnKYR3spt5D88KY7Zg9bYM3DhGj%2BWRghy2STUrKL521cVs0lk4jn2Ht63Agcz%2BG56oTHxZIB2tpeQdjnuRhoU4XBL8UAPNWKJ%2FBHXIfgxG1Zskmb2ig2jP%2FtpIewqeHSWgixPJbb6fS8P2nICZku1q3wO%2B9UvQgm4qHVFObFM%2BfuHoipeZwY8bxyGR1uzGcgLnYdWOMgpzk2I4ozUbG8gTFSMNKd674GOqUBO8m9k9j93l3muEwaeazmcDJ%2FcPrwSNHDZA5aTZZ6mWuUv0fbwaD9xtFD8XwRomv2pndXzv2lopIE16u4MPPqfbCQhXPjYzeskrw2RAdYeHwXs5N0tO4QwreO7y%2BBxhtc3UJnXr8eesPii8940MmwPNQRNYRrcFwDLM%2FPMHpKlPv5dxhbpC7AuiSflIYx72bwQVbK2qMcWW6f%2FmcwYyUQGKDZTkPh&X-Amz-Signature=33e13692c49f386bf957799f62c982c3bd688b13976f144ea4f1aab2ca4885be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
