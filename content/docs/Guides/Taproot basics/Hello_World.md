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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIF6MBOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VUWLyIIw2B8vROCC%2FdyDZu3FmoCtE59ebfF6mAdBfAiEAsVo3ZlJKC81afG26oRhixY6ZOwJDrzzFN0ktf1fH3XIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOtTZ7XNEv4G72xUoyrcA9fX0GIbdX3%2FtI0Z56VM8Q0ev%2BS%2FjlHTbxDvaxMxBelTWVnGCS1CdIm0OzuE5EBr6n72mLlsZSFr2QKNae8HlN4vWUbDTSUCCU6rRYepFU3ZBKklXZtnCgs0aag6FS12HiQbhBsSJpNOHzY%2Fu5WkaQXGUhOGgA8zQih7BlAmI2ZwuS5XbKY0VZB%2FbohrA9OLK5RGE4MyrsPZn1He83YPj9OBi%2BLcQZsDLXaR2r5Qk0aLHkFRuIWlFKq33me7dcg0QWpUJ9Sf3ASMod6fTDlM8Idl%2BYdSWVqjcRI2wH3wXAjGjdKIV5cDQs3yhzZ%2Bg%2FQRU2aS4lUQMTB9qSlw3V9mrQHjJ%2BVCEu0akTRsI40GT763WsJFeaANRsBMKUIAeGH6qDtlj0voR%2B0LmnuKcV9zifry9ZqbjWhziaszLT6x6Cgg%2FCip0YNTG%2Bl2wTJsiovZFKNp8a6nesEh4Ndk000ODd3aw%2BomM3byk%2BuxwHwNjFv%2FMGfrn%2FPDOY3RSvle4iPs3SbFLkWvUhGMhUubX8UVGOHAH4jDBXLgFH0tV17EXrw%2FMJu9gYvNJ2OAXSnzKzOzXyPtemoNPTodB7KIryKuatSJHBXxtqZrwtLlx6EtWp8SgXK9dk%2FT2wXgzFfQMIaj4r4GOqUBSqjOxaeHGPt5ShLgTqC6awBnqdceWJrQdM%2BHlHqKKEZoFHZH08L4gsVBIN4XR0f1lJFqF1CluCx8vchIkTBvz4cI6esrv3obPPttEtndLBNjRa6Nc%2Bcwstu3LjHwL%2B3vKxdBEViNS3PYxmzXOxcf7vLB3eZoOeWRFpGlUqmYCRkLN3CaDQmVe2%2F7arXlYMqVLWU%2BZSzB20rDlEw%2FMAnOvPEPdQ17&X-Amz-Signature=9f9c31c238b273707d4942147284c31168beb39940975bf5e835d589d0edc694&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIF6MBOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VUWLyIIw2B8vROCC%2FdyDZu3FmoCtE59ebfF6mAdBfAiEAsVo3ZlJKC81afG26oRhixY6ZOwJDrzzFN0ktf1fH3XIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOtTZ7XNEv4G72xUoyrcA9fX0GIbdX3%2FtI0Z56VM8Q0ev%2BS%2FjlHTbxDvaxMxBelTWVnGCS1CdIm0OzuE5EBr6n72mLlsZSFr2QKNae8HlN4vWUbDTSUCCU6rRYepFU3ZBKklXZtnCgs0aag6FS12HiQbhBsSJpNOHzY%2Fu5WkaQXGUhOGgA8zQih7BlAmI2ZwuS5XbKY0VZB%2FbohrA9OLK5RGE4MyrsPZn1He83YPj9OBi%2BLcQZsDLXaR2r5Qk0aLHkFRuIWlFKq33me7dcg0QWpUJ9Sf3ASMod6fTDlM8Idl%2BYdSWVqjcRI2wH3wXAjGjdKIV5cDQs3yhzZ%2Bg%2FQRU2aS4lUQMTB9qSlw3V9mrQHjJ%2BVCEu0akTRsI40GT763WsJFeaANRsBMKUIAeGH6qDtlj0voR%2B0LmnuKcV9zifry9ZqbjWhziaszLT6x6Cgg%2FCip0YNTG%2Bl2wTJsiovZFKNp8a6nesEh4Ndk000ODd3aw%2BomM3byk%2BuxwHwNjFv%2FMGfrn%2FPDOY3RSvle4iPs3SbFLkWvUhGMhUubX8UVGOHAH4jDBXLgFH0tV17EXrw%2FMJu9gYvNJ2OAXSnzKzOzXyPtemoNPTodB7KIryKuatSJHBXxtqZrwtLlx6EtWp8SgXK9dk%2FT2wXgzFfQMIaj4r4GOqUBSqjOxaeHGPt5ShLgTqC6awBnqdceWJrQdM%2BHlHqKKEZoFHZH08L4gsVBIN4XR0f1lJFqF1CluCx8vchIkTBvz4cI6esrv3obPPttEtndLBNjRa6Nc%2Bcwstu3LjHwL%2B3vKxdBEViNS3PYxmzXOxcf7vLB3eZoOeWRFpGlUqmYCRkLN3CaDQmVe2%2F7arXlYMqVLWU%2BZSzB20rDlEw%2FMAnOvPEPdQ17&X-Amz-Signature=b3066b2e6d178fb078fc7d3acc64ec1b7816e636be90a03743de3ee45f436e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
