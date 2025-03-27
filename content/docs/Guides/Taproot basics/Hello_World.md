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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4L3F3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcX582fewqmWxmu6hVDwoqNlUwT6lPX60cPGQCWRYBjwIgYTE39POqa15XMYGITgRgSxkores%2BSHFvyJC9KI3yxBoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCEbcVOCsMoKdiDi3yrcAyRi3fopslav5yW7fhGtnT1mJebdVBPTgDBP%2FlU3aLQ0JaNJjaEIs362brUzqr%2BVRp4%2B9r7zfwpwfjj9kCaPmwJO5Y3qbzLPgwnAjvWO336vh7D7ggdnvcLqdlijG3K%2F58MpVIDnW27pk%2BZk95rOUtziBMYUYig8f4Tw2n3SdLPVfur%2By2yndTMbCQnrR24q0H8lV6RVdHzqm08hD0yVjydq%2BQCTpRbpDzR4rKuxHX9hUyVndFJeyKc7GUB%2FbqMrg4XvzU8UXDHjuHAPuLB6JBUTtFf63hCZq6zIgttSbEb%2FRiN1ybihl1eCi5HuW4OPUaT3FwKvIty%2FTV71A0MAtqtIfWC9aEItQLraG98mpPVHAggQFERu9fnc7Jt%2Bw8o6Gx31SvbsPTOBIgQvHmCtjaIWL1kDkyuB1z%2BEDXD%2B6mRjHHqe2iuibzpG6i4bgyL8rnOyxp%2FkYv6R2DugLa2T1qJ1awb9vOaC6w2hLKjEZTOTsuwEgrokjjalikvJWC%2F947CUdBAhh1uIE7bn9TB0L6W5dR0n3%2FzfGeo3WiECPLtNTLc2w5iAjat9wXlr%2FPn%2B8dCgUT1679hMUqjMUqaeH%2Fjn8LU5dhDUYdjYQYh5T5dzrZoXKr0za5Ks3YZEMIujlr8GOqUBoiqLjAvl6zjeyno2KfnBMdgeqmyJt54PFIokj1rjNHU5dV3lB3HZWf%2Fhy%2BV8bSsoVO4QPGpS4%2BYzQdvSmkDqYlkj5MY70zWRocdNfnNwOFjj3FkEq9XLRU1SjATtYZXDZ5Jw0k8XEorKAZy1bcAYuE5BA2csDrGzmnCTpmmWyVuATsVxhm6%2FuX9J4zvH6y6X8KvwPmoXnjtdqpBFnnNY%2FbxXqmLK&X-Amz-Signature=8dea489a655d6dacfd859acd51667aca5e220b9bde4faf856f357a060fa3ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4L3F3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcX582fewqmWxmu6hVDwoqNlUwT6lPX60cPGQCWRYBjwIgYTE39POqa15XMYGITgRgSxkores%2BSHFvyJC9KI3yxBoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCEbcVOCsMoKdiDi3yrcAyRi3fopslav5yW7fhGtnT1mJebdVBPTgDBP%2FlU3aLQ0JaNJjaEIs362brUzqr%2BVRp4%2B9r7zfwpwfjj9kCaPmwJO5Y3qbzLPgwnAjvWO336vh7D7ggdnvcLqdlijG3K%2F58MpVIDnW27pk%2BZk95rOUtziBMYUYig8f4Tw2n3SdLPVfur%2By2yndTMbCQnrR24q0H8lV6RVdHzqm08hD0yVjydq%2BQCTpRbpDzR4rKuxHX9hUyVndFJeyKc7GUB%2FbqMrg4XvzU8UXDHjuHAPuLB6JBUTtFf63hCZq6zIgttSbEb%2FRiN1ybihl1eCi5HuW4OPUaT3FwKvIty%2FTV71A0MAtqtIfWC9aEItQLraG98mpPVHAggQFERu9fnc7Jt%2Bw8o6Gx31SvbsPTOBIgQvHmCtjaIWL1kDkyuB1z%2BEDXD%2B6mRjHHqe2iuibzpG6i4bgyL8rnOyxp%2FkYv6R2DugLa2T1qJ1awb9vOaC6w2hLKjEZTOTsuwEgrokjjalikvJWC%2F947CUdBAhh1uIE7bn9TB0L6W5dR0n3%2FzfGeo3WiECPLtNTLc2w5iAjat9wXlr%2FPn%2B8dCgUT1679hMUqjMUqaeH%2Fjn8LU5dhDUYdjYQYh5T5dzrZoXKr0za5Ks3YZEMIujlr8GOqUBoiqLjAvl6zjeyno2KfnBMdgeqmyJt54PFIokj1rjNHU5dV3lB3HZWf%2Fhy%2BV8bSsoVO4QPGpS4%2BYzQdvSmkDqYlkj5MY70zWRocdNfnNwOFjj3FkEq9XLRU1SjATtYZXDZ5Jw0k8XEorKAZy1bcAYuE5BA2csDrGzmnCTpmmWyVuATsVxhm6%2FuX9J4zvH6y6X8KvwPmoXnjtdqpBFnnNY%2FbxXqmLK&X-Amz-Signature=1c8730137f5f1922a20f87f077c34e0d8dfa86f4b8c2ae23c1401d8c1698c058&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
