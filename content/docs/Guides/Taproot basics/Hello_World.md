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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666RSUHGP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBzcl1lpeeDQ4RAPDuK%2Bgx3pNd686S5kLYrLU7Axzg5hAiEArw2WaHtF1%2FPKL4uW3lPm87TrtSoc7XC0zGBNB6Go4vsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj0%2FWdYjkeRpvTAdSrcA5ujFzw86lH38431TjBQbnAqlkQwPBBjMPEwzsAYbp4WBIgO9qGU7xX1xtQyvmhs7xZJqhNsr%2B9%2FVCvIPL3DhNkpmNMKqHNbp59LTCuKuxytC909u2VitjBxeH8B3HmcZHdW%2Fqz8GcXLwb9lwVgU%2F7zcJGQOCQATSTAej15WD8OZCqO76cJNn%2BGJBiF5%2FtJOX9migE1WPuFCPhvuNyfN2KOXifcjc%2BT6GPZiIm%2BQwdBwXx%2FEMp37pNCXz2%2BTQIg88BXg8CIRWZ8xnxOXM4ysGVN94XByt%2FDpc%2F6VBPb%2BNJn4qrRgsy3Kzzf19Hg5CKF80m8dBZJ9gIJyzw17qvY05E2F5x2RRo1UoOI%2FD3k0dveuLrqZVVo6eClIoQtO8iFR8oSLzdl7e4O4p1Wpq6DRqi%2F3BI7uA566vPOtVTGIOd%2FqD7MQne%2Bx42%2BaCfnaIxOhxgfcCWq0lAombNULB4fF7tVhOu5KLeV9YdufUO5E9r0KWR0Ds9KzliIgyRsufPqLHYUOXmHl7jnZsIwTBHwb7vcypFU6HZDJyaZzWPWhUTgxE4nRLzt%2FsDJhqnZVlAY3NN%2B%2B%2FHnKGRcW%2FRVuEBYb0tVt3xvGMrd2Ql948BYmNGr7U6B3oFRdLwKpvBfnMMKinMAGOqUBOmMwrzvBx6ULUIEb%2FvXDUccThyMXmKxBUKSc83J0i6FN5x%2BZWs0OgSN6oL4iuvAdH2rrZw0T09lhG4E2SY9B6ELqNTUTvhYGGeHSHAlk020jcXnXCWeTVQ0YpQrYHw7RXZXesgnaVHmrDkYpqrUQ%2BY5R21s7Gz%2F%2ByhFms5hTgwBwBMdn2YbOeuQNmntJ8RzR%2FvFgXMlpP%2FzFZoTzQzBMkeRqws59&X-Amz-Signature=9a8cbc71ef25861f5c3453624ab7bb7de3d14bb03294958fb6588a6523981e49&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666RSUHGP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBzcl1lpeeDQ4RAPDuK%2Bgx3pNd686S5kLYrLU7Axzg5hAiEArw2WaHtF1%2FPKL4uW3lPm87TrtSoc7XC0zGBNB6Go4vsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj0%2FWdYjkeRpvTAdSrcA5ujFzw86lH38431TjBQbnAqlkQwPBBjMPEwzsAYbp4WBIgO9qGU7xX1xtQyvmhs7xZJqhNsr%2B9%2FVCvIPL3DhNkpmNMKqHNbp59LTCuKuxytC909u2VitjBxeH8B3HmcZHdW%2Fqz8GcXLwb9lwVgU%2F7zcJGQOCQATSTAej15WD8OZCqO76cJNn%2BGJBiF5%2FtJOX9migE1WPuFCPhvuNyfN2KOXifcjc%2BT6GPZiIm%2BQwdBwXx%2FEMp37pNCXz2%2BTQIg88BXg8CIRWZ8xnxOXM4ysGVN94XByt%2FDpc%2F6VBPb%2BNJn4qrRgsy3Kzzf19Hg5CKF80m8dBZJ9gIJyzw17qvY05E2F5x2RRo1UoOI%2FD3k0dveuLrqZVVo6eClIoQtO8iFR8oSLzdl7e4O4p1Wpq6DRqi%2F3BI7uA566vPOtVTGIOd%2FqD7MQne%2Bx42%2BaCfnaIxOhxgfcCWq0lAombNULB4fF7tVhOu5KLeV9YdufUO5E9r0KWR0Ds9KzliIgyRsufPqLHYUOXmHl7jnZsIwTBHwb7vcypFU6HZDJyaZzWPWhUTgxE4nRLzt%2FsDJhqnZVlAY3NN%2B%2B%2FHnKGRcW%2FRVuEBYb0tVt3xvGMrd2Ql948BYmNGr7U6B3oFRdLwKpvBfnMMKinMAGOqUBOmMwrzvBx6ULUIEb%2FvXDUccThyMXmKxBUKSc83J0i6FN5x%2BZWs0OgSN6oL4iuvAdH2rrZw0T09lhG4E2SY9B6ELqNTUTvhYGGeHSHAlk020jcXnXCWeTVQ0YpQrYHw7RXZXesgnaVHmrDkYpqrUQ%2BY5R21s7Gz%2F%2ByhFms5hTgwBwBMdn2YbOeuQNmntJ8RzR%2FvFgXMlpP%2FzFZoTzQzBMkeRqws59&X-Amz-Signature=c42af640d2ffbb315250366bb7ef1ae6b3e06e4f8826a1f576893416b5b522f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
