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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA33ZN25%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFf1MHC9xoorwKgu%2FRpReSVKOrcQq2HpMAysKOaoxWlFAiBYtXT%2FVXLilq2THEsqyZya4lEptGKHkX49i071j8NRQir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMpYDvvHJ4ykbKP6EAKtwDh39Tm2i07GoUlQuMigS45NI6YSXYKgwlipZHvbhSSsrvm5NiSKMLnkRxIDYjdeeHI98Ky32Vfn02q15KA5ZfNuj5X3J0x2N4SM6h3LRetAqYyxtjVso7yHkw%2BfGTy2zb%2F%2BTIy1sVLqB5lJnfIYQejky7ROp8%2FMOvb7GeitdDcy%2FB1rok7D%2BBWcxNdlExVmt9Pv1MaXm7YlfpzJ%2FaUMoo%2FoI7S2X%2BFYhDTv5ab5KLne93iBXI2hM7pEOT7uIZtU8Otpek4UEyjSeS8%2Fx7o6sAXORtMbvoFGqPWhewEXdxuQW1Wsi4YTg4VgpvjB8BMqazhkmkjEadZzEyFyUeIu8LETk9zrMr1R19JkYjxh85Dofx%2B8i1UmLvyFDM06ehpdPLce3CYnINCqYRBYJsgaHYwA1PJ43W5st68X6N0ES5ae41LwQ04cL7UgwrgLyJvlqlglprx9mrYj8NQk%2BEru2ShckFshRlcX6ctJB%2FMfy7YEdFItL%2Byikf5nb6zkMA08Vwsc5N7Jg9pZZ2V%2B15gFXfQkhpfnRTkkaeeKEUu%2B%2B6ESAj8sg4D%2BoSyqeYNt2jhVK7I0MAMrPBnnDkXbj1UNXuQn4gQ3KgzCs1wva5Sg7upvei3Q8Oa8oqK4ZL5%2F8wzq2BvgY6pgH%2FxntxnMhTmehDIzy8OGXlvG4w7fxTo%2BWsGXflAqIZ9FLHDG6AV1UQhrgFIAOP9ktuNySCiGrjxStT8OBGtluwrpFVNdnZ99%2FPQTrHjNbrFFkQ1eaA0736IcBP15%2B9xzIxKOF64Z1VVmnW0bHnQwr6swzl2ERjSU8VEdlTy1IykUuipucID%2Fdu6a9tZvSva0Gwb0aHmX%2Fm8RKmt9t9CJLeZe%2B%2BHcRN&X-Amz-Signature=ad497e5e896cc3f4b30290a5a4faf360d11a9d1bcc41b2a0176b84cf9199133c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA33ZN25%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFf1MHC9xoorwKgu%2FRpReSVKOrcQq2HpMAysKOaoxWlFAiBYtXT%2FVXLilq2THEsqyZya4lEptGKHkX49i071j8NRQir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMpYDvvHJ4ykbKP6EAKtwDh39Tm2i07GoUlQuMigS45NI6YSXYKgwlipZHvbhSSsrvm5NiSKMLnkRxIDYjdeeHI98Ky32Vfn02q15KA5ZfNuj5X3J0x2N4SM6h3LRetAqYyxtjVso7yHkw%2BfGTy2zb%2F%2BTIy1sVLqB5lJnfIYQejky7ROp8%2FMOvb7GeitdDcy%2FB1rok7D%2BBWcxNdlExVmt9Pv1MaXm7YlfpzJ%2FaUMoo%2FoI7S2X%2BFYhDTv5ab5KLne93iBXI2hM7pEOT7uIZtU8Otpek4UEyjSeS8%2Fx7o6sAXORtMbvoFGqPWhewEXdxuQW1Wsi4YTg4VgpvjB8BMqazhkmkjEadZzEyFyUeIu8LETk9zrMr1R19JkYjxh85Dofx%2B8i1UmLvyFDM06ehpdPLce3CYnINCqYRBYJsgaHYwA1PJ43W5st68X6N0ES5ae41LwQ04cL7UgwrgLyJvlqlglprx9mrYj8NQk%2BEru2ShckFshRlcX6ctJB%2FMfy7YEdFItL%2Byikf5nb6zkMA08Vwsc5N7Jg9pZZ2V%2B15gFXfQkhpfnRTkkaeeKEUu%2B%2B6ESAj8sg4D%2BoSyqeYNt2jhVK7I0MAMrPBnnDkXbj1UNXuQn4gQ3KgzCs1wva5Sg7upvei3Q8Oa8oqK4ZL5%2F8wzq2BvgY6pgH%2FxntxnMhTmehDIzy8OGXlvG4w7fxTo%2BWsGXflAqIZ9FLHDG6AV1UQhrgFIAOP9ktuNySCiGrjxStT8OBGtluwrpFVNdnZ99%2FPQTrHjNbrFFkQ1eaA0736IcBP15%2B9xzIxKOF64Z1VVmnW0bHnQwr6swzl2ERjSU8VEdlTy1IykUuipucID%2Fdu6a9tZvSva0Gwb0aHmX%2Fm8RKmt9t9CJLeZe%2B%2BHcRN&X-Amz-Signature=4602981d1af6d74b9fa37a2ead807b00beda29b9c28611b2d6d47922b1726d22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
