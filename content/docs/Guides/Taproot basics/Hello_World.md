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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUF4B7H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGW3P%2B1Q6%2FBBEOZ%2Fr4I0GS81lUmEKPg6B9cC51lxgXgJAiBG9NkEsIOup5C8UC4xl2S8lXkeiSDhRf%2BikxyFBTowxyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19yEVHuAqGrX46Y2KtwD7hkKruUPLW2KTtD9E6iEImMPZBho4QenQlvuHFza7snJ3VElNtlMI3TpafzorPJeeU8tR1R%2Byb6nQe%2BcJdTO9%2B76uwefLn1%2Foj%2B3jVrlYJQyrgXAb3J64qLuELpfcXbkmkVo3ZlXo9Dd%2FBJcVltYHcrg2LLa6dhAMeepg5eM15wNZNK%2BFbsRfrVtH9NiDCqCbmibZe6aTbHEzD1qG5kIe%2FxvtVaydH%2F39R0aIsC3aye1a7wOee8kFaV3Cn10YzmH51%2F4GSyR6I%2FZ6GC%2FiJISoyrtvYwr4esKccxJE2f7bsOymSVbfJY6syF%2FRu5wPaKXXUJW8hoF3rQKq7wFM6%2FsMGGklCy1qc36e827N3M8nTvN1VIWGryLYmxHAeQduaJ7nUy9DsuyVDKfHgCLsy7szXaRe%2F1Rtc7hnc%2BJ0UG6cfVu4X2dA61c7Lsmpp2f3L2S5KEroQ6dHjppEEr0a9UGpfbLD%2FZEVXS%2BIKE0Ua6n4pNdHbsDSideCDg42xlJcAUeXeh7sF9cmwhDfi60ibVRjhxNr87np4fRlUYGig8BtZ%2BytdTYi8q%2FHZeboi2lCII0Aene3648dby4FQZ4y8gKZGrIoMmYfeNQVxvsRNKB4n5hhB6vKaDlqPgO%2BQowjKmexAY6pgHkYd%2BPNCZmtNrDxE5YoyDxByRDK7cO6Z9dRxxho5R5ieF6ZnVeOz0m%2FWbtu18JJ3zTsA9Olb8t91dYE%2BbkCaQ7koC%2FdmssBHKFMB9kMJCZLCVGQU4NFhrDuqWv0oFF5Z%2BTFmyvWC2%2FC9JSPtPEg%2F%2F0dSt0zs1rIJ3NaR7W9rXvAoEP9Yn%2BkdbT9gHFhZ3K46ZWOduLWgy9Waq7dgEF80I41ooxhZG4&X-Amz-Signature=c1f76e22061127377c41ac9341b4141b6a405891bde20946b7972529426c592f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUF4B7H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGW3P%2B1Q6%2FBBEOZ%2Fr4I0GS81lUmEKPg6B9cC51lxgXgJAiBG9NkEsIOup5C8UC4xl2S8lXkeiSDhRf%2BikxyFBTowxyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19yEVHuAqGrX46Y2KtwD7hkKruUPLW2KTtD9E6iEImMPZBho4QenQlvuHFza7snJ3VElNtlMI3TpafzorPJeeU8tR1R%2Byb6nQe%2BcJdTO9%2B76uwefLn1%2Foj%2B3jVrlYJQyrgXAb3J64qLuELpfcXbkmkVo3ZlXo9Dd%2FBJcVltYHcrg2LLa6dhAMeepg5eM15wNZNK%2BFbsRfrVtH9NiDCqCbmibZe6aTbHEzD1qG5kIe%2FxvtVaydH%2F39R0aIsC3aye1a7wOee8kFaV3Cn10YzmH51%2F4GSyR6I%2FZ6GC%2FiJISoyrtvYwr4esKccxJE2f7bsOymSVbfJY6syF%2FRu5wPaKXXUJW8hoF3rQKq7wFM6%2FsMGGklCy1qc36e827N3M8nTvN1VIWGryLYmxHAeQduaJ7nUy9DsuyVDKfHgCLsy7szXaRe%2F1Rtc7hnc%2BJ0UG6cfVu4X2dA61c7Lsmpp2f3L2S5KEroQ6dHjppEEr0a9UGpfbLD%2FZEVXS%2BIKE0Ua6n4pNdHbsDSideCDg42xlJcAUeXeh7sF9cmwhDfi60ibVRjhxNr87np4fRlUYGig8BtZ%2BytdTYi8q%2FHZeboi2lCII0Aene3648dby4FQZ4y8gKZGrIoMmYfeNQVxvsRNKB4n5hhB6vKaDlqPgO%2BQowjKmexAY6pgHkYd%2BPNCZmtNrDxE5YoyDxByRDK7cO6Z9dRxxho5R5ieF6ZnVeOz0m%2FWbtu18JJ3zTsA9Olb8t91dYE%2BbkCaQ7koC%2FdmssBHKFMB9kMJCZLCVGQU4NFhrDuqWv0oFF5Z%2BTFmyvWC2%2FC9JSPtPEg%2F%2F0dSt0zs1rIJ3NaR7W9rXvAoEP9Yn%2BkdbT9gHFhZ3K46ZWOduLWgy9Waq7dgEF80I41ooxhZG4&X-Amz-Signature=5d39e9df64df1620e3af07b508bbad8c789a03b1728f1c5b858a5f71deaf3f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
