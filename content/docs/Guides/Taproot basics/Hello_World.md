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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZG2VD6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBfrkG6rD2O8sc6WyJnIDRn2u9APx6RA3X3QzvlbRosMAiEAh8RsVz98KPivHdsRvTOdH6VVGThckFm5akJuW1wXefYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMP4krwCmqQA%2FbvJpCrcA8F%2FTrpOk96kxIT9otxSZfXNYx77Sr5%2B%2B8czpQLizc5PUnQpdr0GvUVYgQURzXjCn627VYxFCPJMVld0NxM4Ejs%2F%2BMBhic62fd0uMg%2BP76mZriO80g0z8iQ0mGJSQm9OGOM3jSAFFj%2FthnxtAGOAgrWy7IM3pPEbvEpHUTNCjRhyCIOnH8yREHZP8TBFkbnwEzJEdhBFwBbzEdMBYJUWKHKCMlspO%2Fmn4QfAEESD8O7RxP%2FOfbToo2e4CjVGRIaQWRJdsx5voYi9CjR%2FM3VE1SC9ALDEpAuR1Y0KTvDEiFOZT5PlFujTk%2BFhGqFxMuoqJSG4J2WEjx2bEqy8zje9Z7QNiOfVtCBHM0Sj%2FNMH4kdroqu5xmgGGhDX7AQkFEMCbtxJz9i26nzFXhjAgQ2RLXt%2FESQMTYiZ0vgEBXs4Q3oG0bDxdtljPI1TlqrjE%2BndPKUh8RCxmayNW3N52sZqOileAqbgnyISHhZ3mWNeF7xAFUupcjbGmH5Gf4a6zpukm2hQjE7QRNzv0p0twjA8vflarwDgIS7Bt3tt%2FoxUpqpGa0amweOZ8qz1z8TD1wMxELJCR7qU1m6R5j%2BdbysrpdNex3m84OZlxTUwbLkRoFFid19rDyXupPjf54wWMNnrh8QGOqUB%2BXAQevu7LcCBiKfnPcxhZtGHqBxUYC5b7ROs3Dg4urgGVToJr%2FkfrWkGi%2FW1wM%2BrZtXZ5bixTkNbIVLfWYkNuHj0wIfwPD9JyFjoru0F%2BoNnUOtYySXR6ruLdIqLEo8y%2BpYsHnZTxmH%2Btrf069foxGFrAvHZIu1KAc7%2F%2BscUDMg8ox0skDHsZdrU4hPVJYl4aPoPziNbtOxFIg19XEby2OTwgRes&X-Amz-Signature=75f0b29efa795e0d3fca23ed319bdaca13576073894f82c151917430c77474b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZG2VD6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBfrkG6rD2O8sc6WyJnIDRn2u9APx6RA3X3QzvlbRosMAiEAh8RsVz98KPivHdsRvTOdH6VVGThckFm5akJuW1wXefYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMP4krwCmqQA%2FbvJpCrcA8F%2FTrpOk96kxIT9otxSZfXNYx77Sr5%2B%2B8czpQLizc5PUnQpdr0GvUVYgQURzXjCn627VYxFCPJMVld0NxM4Ejs%2F%2BMBhic62fd0uMg%2BP76mZriO80g0z8iQ0mGJSQm9OGOM3jSAFFj%2FthnxtAGOAgrWy7IM3pPEbvEpHUTNCjRhyCIOnH8yREHZP8TBFkbnwEzJEdhBFwBbzEdMBYJUWKHKCMlspO%2Fmn4QfAEESD8O7RxP%2FOfbToo2e4CjVGRIaQWRJdsx5voYi9CjR%2FM3VE1SC9ALDEpAuR1Y0KTvDEiFOZT5PlFujTk%2BFhGqFxMuoqJSG4J2WEjx2bEqy8zje9Z7QNiOfVtCBHM0Sj%2FNMH4kdroqu5xmgGGhDX7AQkFEMCbtxJz9i26nzFXhjAgQ2RLXt%2FESQMTYiZ0vgEBXs4Q3oG0bDxdtljPI1TlqrjE%2BndPKUh8RCxmayNW3N52sZqOileAqbgnyISHhZ3mWNeF7xAFUupcjbGmH5Gf4a6zpukm2hQjE7QRNzv0p0twjA8vflarwDgIS7Bt3tt%2FoxUpqpGa0amweOZ8qz1z8TD1wMxELJCR7qU1m6R5j%2BdbysrpdNex3m84OZlxTUwbLkRoFFid19rDyXupPjf54wWMNnrh8QGOqUB%2BXAQevu7LcCBiKfnPcxhZtGHqBxUYC5b7ROs3Dg4urgGVToJr%2FkfrWkGi%2FW1wM%2BrZtXZ5bixTkNbIVLfWYkNuHj0wIfwPD9JyFjoru0F%2BoNnUOtYySXR6ruLdIqLEo8y%2BpYsHnZTxmH%2Btrf069foxGFrAvHZIu1KAc7%2F%2BscUDMg8ox0skDHsZdrU4hPVJYl4aPoPziNbtOxFIg19XEby2OTwgRes&X-Amz-Signature=9697f87c354cf03031b382e123f412d58280584b9edfacbaa84262b2f1a85c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
