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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S3U5VR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICxX8KsP2Zx8eZj9QATR950DRajFg8bmtdePEX366SlkAiBYyZ4xHlf236Kh7YFGIV3VsDQIuTt%2FlXrWfRQNORDBRir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMr5Veqnj4tkWXz5ihKtwDTY7w0cEy5XJG53sASteAZR2nD8BIDtHHQKOgxAWRW%2BmoHR6VfMosBay53Is54FxKABWQhE5GH8bOAMJYp4pfmVElQQC5ahC1NRnH9NZ40rN7hh13JMLNahhZOyHrgd0T65HxenvDjX3DpHc%2BGZs9%2BXnFsxsx91x6%2FfDs2uka75pvKY7%2Bv1MI10kk4VOTmxOD2kgwtoOhkTIbQdKvFaMWfgJom6uAqdw3EGRsFuPl2DyaPnzXDh3isJcp8ux4MdBxywdnsF4i%2BY9RHqcDA5fjKjMU2QDzEPco%2BtEzacQ2KQzYEi7kSG73%2BxnXLS3mlshHK2LdTlqerVg2mR2AHSnjLnROf%2Bdnni0CdEJoyRFnqGQh7jbUyJZCQ%2FwBlWM0gRWQHWY8X%2Fa71NuLQ1zpMbSjTr1MZA2Z%2B3hVYKP48CJMsUvfueqOltOInuGWnz%2FU0lu9YIq8hZo%2BFgciIVj5wpLp3AiCT%2Bu86FZiCo9C4bTFpxsbJPyYQ5pPpHkrP1UltXwilKaj2%2BO5bz1ekQT52rst2tDpkaRcATQI%2FTGIg%2BtUV0tYZfsYz7Yik201qLIxK3KJDM2oZqIrJJtOIJ8zi4uDTW7jGmWz1HswBhI%2BqgRQwyftYrxeFnIFizgxb5Mw3pyMxAY6pgG0t1hloc6ZvxlWJOV9pOjuI5vmGEkFs%2F2QXAlM33d0BHp43h6Dp%2FxcNVOLWVwh6dX18GaIbk64gghZhcGKogZBQhqCac9mcUwylwocc%2BL7nZ%2BI11y9luvcPkCNsehIeYUcxhxk7Bkozj4GiyHu13H4ZegLJcyJIDbdW1wuxxs%2FIDJmldluidl16uetj0h6qHY39I0bMZYoYdSGdcRRVn2gx0M1m9mA&X-Amz-Signature=6fca7cb198c868393de78b4a1487327bd5a2406f399525a9de8be5374d390ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S3U5VR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICxX8KsP2Zx8eZj9QATR950DRajFg8bmtdePEX366SlkAiBYyZ4xHlf236Kh7YFGIV3VsDQIuTt%2FlXrWfRQNORDBRir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMr5Veqnj4tkWXz5ihKtwDTY7w0cEy5XJG53sASteAZR2nD8BIDtHHQKOgxAWRW%2BmoHR6VfMosBay53Is54FxKABWQhE5GH8bOAMJYp4pfmVElQQC5ahC1NRnH9NZ40rN7hh13JMLNahhZOyHrgd0T65HxenvDjX3DpHc%2BGZs9%2BXnFsxsx91x6%2FfDs2uka75pvKY7%2Bv1MI10kk4VOTmxOD2kgwtoOhkTIbQdKvFaMWfgJom6uAqdw3EGRsFuPl2DyaPnzXDh3isJcp8ux4MdBxywdnsF4i%2BY9RHqcDA5fjKjMU2QDzEPco%2BtEzacQ2KQzYEi7kSG73%2BxnXLS3mlshHK2LdTlqerVg2mR2AHSnjLnROf%2Bdnni0CdEJoyRFnqGQh7jbUyJZCQ%2FwBlWM0gRWQHWY8X%2Fa71NuLQ1zpMbSjTr1MZA2Z%2B3hVYKP48CJMsUvfueqOltOInuGWnz%2FU0lu9YIq8hZo%2BFgciIVj5wpLp3AiCT%2Bu86FZiCo9C4bTFpxsbJPyYQ5pPpHkrP1UltXwilKaj2%2BO5bz1ekQT52rst2tDpkaRcATQI%2FTGIg%2BtUV0tYZfsYz7Yik201qLIxK3KJDM2oZqIrJJtOIJ8zi4uDTW7jGmWz1HswBhI%2BqgRQwyftYrxeFnIFizgxb5Mw3pyMxAY6pgG0t1hloc6ZvxlWJOV9pOjuI5vmGEkFs%2F2QXAlM33d0BHp43h6Dp%2FxcNVOLWVwh6dX18GaIbk64gghZhcGKogZBQhqCac9mcUwylwocc%2BL7nZ%2BI11y9luvcPkCNsehIeYUcxhxk7Bkozj4GiyHu13H4ZegLJcyJIDbdW1wuxxs%2FIDJmldluidl16uetj0h6qHY39I0bMZYoYdSGdcRRVn2gx0M1m9mA&X-Amz-Signature=69defc67ce4fe1f4d808f93beb9725982c0f0a8bf1a1ad501ca48dbf8290a610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
