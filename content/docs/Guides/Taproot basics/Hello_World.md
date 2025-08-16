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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFPQXJB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDB7d%2FnhdCFXm5H8LiOPZflp8fAJd%2BAFHEIFNuMLZxpzQIgbqcq%2BXSVXdzmDoGHJVNv3wvt%2BhctClYPiZMRAoMC%2BNYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDJWsoASUuEErSoRrSrcA7wDrG%2FPAwb03UnCDQFMCK8pE6qT2BczSbnP8uArn31QzjlP0WcLlQ9tHIYFOhfEetVJD5FdiEqUTGPTChSzsnHya6C4ES%2FZQV%2BwD2Tvvpw74g3WuJfWMre%2F944G7HsP074EU9ERT57KmdVRaJvvdGcxGOif0CYQbVYgeRvQ4s9X%2Fg%2FmwNx%2Fu5kdkJ93niKFKsnHJ1ydczADRRu8m4gyee2YdbAXDD%2Byg0iYRz39iCKhZfNOWC9H1v8Qs%2BF5IFMkE8dc%2Bt91kbBXrEbtRMDbc4Prt99kRbA4y2gD0iEZgiTlrdQHLHlhJBzrS2iZ3lbi8T5u2AHhxc2o%2FQtc2A5RQNycv%2Fy97L5QXd6yc22%2BY2pdQVNZZyBEhmw8VGKjDLi7h90EfdWO0LBYykbkGhxlOKJnOSNo7pnNyRGs4i0vsyNcfT6ByC%2BJz7RZ785GXJ8US9KQNOmBH3tquteikUingCQDm6uFu%2FvP04Mm87bq2462zjEP0VPs%2FFK6d3YKeIz7q2k8XhzRyVN8h84CgpbaoPqgrnEedt%2BZI8d0upskXF%2BWYFfIdFrpmiVxl%2F0HIJMnxj8AAo3J%2FQ12ilT19GU3mGPZk%2FJqiqvxXfSbAzEOyvWCPouZ9lIWfxxpsuTrMKv4gMUGOqUBF2kVCflWz8ArPkbaazZuAYg4m4wpJhnfXE1PFqmf6IgxW4Aox2yklw%2B3pVgf8DEOXcHIe2gxQcFJdN1J2Ua0tPMlD4LMfZZU9%2BEHGNJzu%2B80imbdpEGftLXBdiCxNZcMSRRoenYqOS8qlkReViNNfNbyvgOImfQsnj5ushpqi4fG5Ew2o1nN5nESeQSm62jaZIwBm6bwpoEgm%2FEJkxloOvknItlK&X-Amz-Signature=842f0660566a0c3442d4eafa7c60ed2b408f5584cb6cacefc7f5f0b7faa28c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFPQXJB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDB7d%2FnhdCFXm5H8LiOPZflp8fAJd%2BAFHEIFNuMLZxpzQIgbqcq%2BXSVXdzmDoGHJVNv3wvt%2BhctClYPiZMRAoMC%2BNYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDJWsoASUuEErSoRrSrcA7wDrG%2FPAwb03UnCDQFMCK8pE6qT2BczSbnP8uArn31QzjlP0WcLlQ9tHIYFOhfEetVJD5FdiEqUTGPTChSzsnHya6C4ES%2FZQV%2BwD2Tvvpw74g3WuJfWMre%2F944G7HsP074EU9ERT57KmdVRaJvvdGcxGOif0CYQbVYgeRvQ4s9X%2Fg%2FmwNx%2Fu5kdkJ93niKFKsnHJ1ydczADRRu8m4gyee2YdbAXDD%2Byg0iYRz39iCKhZfNOWC9H1v8Qs%2BF5IFMkE8dc%2Bt91kbBXrEbtRMDbc4Prt99kRbA4y2gD0iEZgiTlrdQHLHlhJBzrS2iZ3lbi8T5u2AHhxc2o%2FQtc2A5RQNycv%2Fy97L5QXd6yc22%2BY2pdQVNZZyBEhmw8VGKjDLi7h90EfdWO0LBYykbkGhxlOKJnOSNo7pnNyRGs4i0vsyNcfT6ByC%2BJz7RZ785GXJ8US9KQNOmBH3tquteikUingCQDm6uFu%2FvP04Mm87bq2462zjEP0VPs%2FFK6d3YKeIz7q2k8XhzRyVN8h84CgpbaoPqgrnEedt%2BZI8d0upskXF%2BWYFfIdFrpmiVxl%2F0HIJMnxj8AAo3J%2FQ12ilT19GU3mGPZk%2FJqiqvxXfSbAzEOyvWCPouZ9lIWfxxpsuTrMKv4gMUGOqUBF2kVCflWz8ArPkbaazZuAYg4m4wpJhnfXE1PFqmf6IgxW4Aox2yklw%2B3pVgf8DEOXcHIe2gxQcFJdN1J2Ua0tPMlD4LMfZZU9%2BEHGNJzu%2B80imbdpEGftLXBdiCxNZcMSRRoenYqOS8qlkReViNNfNbyvgOImfQsnj5ushpqi4fG5Ew2o1nN5nESeQSm62jaZIwBm6bwpoEgm%2FEJkxloOvknItlK&X-Amz-Signature=26ae67f6aa8cbe6e9908f7d8b6f05bf86c9fbb6a7ab172962b661d59ec7eb1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
