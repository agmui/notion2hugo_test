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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRT7ZQ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5tlKWFdVBRWFn9SV1MUC%2FKerLWfEH%2BCKYQRlUPFQahAIgCu2fixHSq%2B%2BbXno6ZsmdvcZkIU4AgxQkQEBWcuxiPhUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyGemH%2B0G%2BFaApXDircA13B7JuCXdcqxlIRZPo3lIZzOJG3L3n5AFau6dRX4CJCstZzePkXGsWgdWMBI9TSsH4CTqryVR%2BTc7CXoZ4TaSmcbv09DNKPb2NQmIMCCAOvQKIT63HgNDwBfOS4c68vRelO9IpgIlxlp7O1gqexojomntrASt832nq%2Fvn4e5jKxonW5AIHtqvtU8ZWvJetuN8VPT1ALAyhjnfEZx29bf1m0z1M1cCIpqAKu74j1JMXBLW9q4VABNbGPQnmdGLv7Z6lSFvpSkgw8NqcE5UR%2BXaQ6gKYwIcJeB2geafJymKIq1EzofLoJTkMtbu5umK5f4gfKH0X9aZAKntr3ViyqdASZBj9L4ad%2BLJiePcfVA4KjvYnpEp8CNDL7HMzhSLrhYO91uR9cKfnfxlN4%2BGmIU6FsFiCCjcx9wBdmFFpCla1FDrNuD48G%2BUZxPJsw%2FkeTt%2Fr1e4vI45SLIpB%2BjMnaqzRCyGjJSSZRNQwtU8v%2BswaFrAoimjiU%2FAo2%2FhqUduT8S2rACop%2F8Iw8PWgVFdbqA4gYNbsBPeOsGzvMv7Ebsvzfr44j1UDa1BPf9EXppMxjn%2FwGiChwVN3Kjh%2F1yb6JEscdlIjj8u3YMaP8bDAawPbOiiAdbb0UKwain52eMMHik8MGOqUBI4kTzCId2X3WFzZOEL1pTofL8XHzx80kFswhUSxHOKrNw9DyG%2B5uSh3j5tlmXSddyYmUkJehS6y9aqr6iHHFjwlUJdCuC5lg2wcQ4dSNdEGcHx9qE1wdUWD%2BuGJQHAxZMetiooWaRCOEgnwnfedR%2BxYgHgh0DZx%2FoxSZRwDDlZ93rzEj%2BQJ9NkaiKId8CWSl4U0qGYROA8ft4sNBMU2DyYzz751s&X-Amz-Signature=28706607aeddbd5454ff3ec482596cc235b458f022669f4e181113587026a565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRT7ZQ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5tlKWFdVBRWFn9SV1MUC%2FKerLWfEH%2BCKYQRlUPFQahAIgCu2fixHSq%2B%2BbXno6ZsmdvcZkIU4AgxQkQEBWcuxiPhUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyGemH%2B0G%2BFaApXDircA13B7JuCXdcqxlIRZPo3lIZzOJG3L3n5AFau6dRX4CJCstZzePkXGsWgdWMBI9TSsH4CTqryVR%2BTc7CXoZ4TaSmcbv09DNKPb2NQmIMCCAOvQKIT63HgNDwBfOS4c68vRelO9IpgIlxlp7O1gqexojomntrASt832nq%2Fvn4e5jKxonW5AIHtqvtU8ZWvJetuN8VPT1ALAyhjnfEZx29bf1m0z1M1cCIpqAKu74j1JMXBLW9q4VABNbGPQnmdGLv7Z6lSFvpSkgw8NqcE5UR%2BXaQ6gKYwIcJeB2geafJymKIq1EzofLoJTkMtbu5umK5f4gfKH0X9aZAKntr3ViyqdASZBj9L4ad%2BLJiePcfVA4KjvYnpEp8CNDL7HMzhSLrhYO91uR9cKfnfxlN4%2BGmIU6FsFiCCjcx9wBdmFFpCla1FDrNuD48G%2BUZxPJsw%2FkeTt%2Fr1e4vI45SLIpB%2BjMnaqzRCyGjJSSZRNQwtU8v%2BswaFrAoimjiU%2FAo2%2FhqUduT8S2rACop%2F8Iw8PWgVFdbqA4gYNbsBPeOsGzvMv7Ebsvzfr44j1UDa1BPf9EXppMxjn%2FwGiChwVN3Kjh%2F1yb6JEscdlIjj8u3YMaP8bDAawPbOiiAdbb0UKwain52eMMHik8MGOqUBI4kTzCId2X3WFzZOEL1pTofL8XHzx80kFswhUSxHOKrNw9DyG%2B5uSh3j5tlmXSddyYmUkJehS6y9aqr6iHHFjwlUJdCuC5lg2wcQ4dSNdEGcHx9qE1wdUWD%2BuGJQHAxZMetiooWaRCOEgnwnfedR%2BxYgHgh0DZx%2FoxSZRwDDlZ93rzEj%2BQJ9NkaiKId8CWSl4U0qGYROA8ft4sNBMU2DyYzz751s&X-Amz-Signature=56de21fce19f1fba276cfc45f0bb142e4bb017ab5b233011fec93c3a3c8d4ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
