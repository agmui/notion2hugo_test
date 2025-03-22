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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667274W7IT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCYRGsq0RoCfKAYXySE1iUDAw%2BG%2B6B1p62gdGuXeFHbawIhANVv4IISchAsARoUHvpYk3Eu%2BggEz2pMlfKqrx6e6v%2BSKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm%2BFzlTyUUott6lZUq3ANEFVw%2BPBOBRLPJVobvy%2FqQHa0baAYh0ulq558FlUoJy5hxuzZua3t%2FSCo4jx2MXnZIl2yx2Lwo4YWicZGaedT2BToeu%2BISMeXF3WvpKw%2BoCUyqLEu1dWNDDZDocm1Ms5x3YB2x2BXjtAa3DbK6H323udEbWckAjhr8F84xWfelTBAsjqKpZ5HAjc1%2FzJ0fRdLq%2Bb69YCq6CmasFPBdpZ3IuudXZTQnfGiHtMgBIHPTRApm4D%2BJQoTvCkEEUyWwVV32ZaShYAIA%2BHjlS55l89lKnwxvskKaL2R%2FJpt3IPzhXOJrIoIYLihwn4RwEC1WnUf6hIMJ1tRerbRPUDkWCJSefGes9ZqP0JV%2BU0feVwRmzRxsj%2FcVIoK4PC4gIaHhV494KqaW8eBgRdbfpKaAFzv4I37AaAMF4W3pRsAmNpt%2F2RhvtQGiLYMLo%2FLTZAaxb%2FfOb6u0NrimhYjZ6FHJ%2BBo5GT9hoIBRDsP3YmA1IbiGDhNiEPRn6ffcXdmi3WWpDYZYvrysVh7yxfqPrNk7l4fObLlsQ0qGGbtU65SPFPAeMJFJQz68GlY1VDFnzfXTkm1xVzpr%2FtEWQwh039TeXRqWZdKmyLUDLUbGufks3OrNIHVkKEu40wsaXI%2FcmzC7qvm%2BBjqkAZDFeJeM2ji9%2B3DfnmIcgkxTpqkU7g3%2B2vlEUx99rUTcutU5UBddHcMMA7%2BMfG8D8JbTweyiF6GXK21SrDWr%2BfO3v%2BZtroLlWlk5Tng7YP0ZuSFsW%2FVDKjc3VFP6YSuYaGpVh6%2BhS2yEGiMLC4JDLeLdGjdGL6WCiXuYXCPYqB77wD42I8e%2BQamMFCtkxY%2BXRWaiN0e3NSSaxW9ApNYgW3xYRKHD&X-Amz-Signature=d031d0d8ac4bb977161706328d99079dc20180ce3ded96bd157dba42abd031d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667274W7IT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCYRGsq0RoCfKAYXySE1iUDAw%2BG%2B6B1p62gdGuXeFHbawIhANVv4IISchAsARoUHvpYk3Eu%2BggEz2pMlfKqrx6e6v%2BSKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm%2BFzlTyUUott6lZUq3ANEFVw%2BPBOBRLPJVobvy%2FqQHa0baAYh0ulq558FlUoJy5hxuzZua3t%2FSCo4jx2MXnZIl2yx2Lwo4YWicZGaedT2BToeu%2BISMeXF3WvpKw%2BoCUyqLEu1dWNDDZDocm1Ms5x3YB2x2BXjtAa3DbK6H323udEbWckAjhr8F84xWfelTBAsjqKpZ5HAjc1%2FzJ0fRdLq%2Bb69YCq6CmasFPBdpZ3IuudXZTQnfGiHtMgBIHPTRApm4D%2BJQoTvCkEEUyWwVV32ZaShYAIA%2BHjlS55l89lKnwxvskKaL2R%2FJpt3IPzhXOJrIoIYLihwn4RwEC1WnUf6hIMJ1tRerbRPUDkWCJSefGes9ZqP0JV%2BU0feVwRmzRxsj%2FcVIoK4PC4gIaHhV494KqaW8eBgRdbfpKaAFzv4I37AaAMF4W3pRsAmNpt%2F2RhvtQGiLYMLo%2FLTZAaxb%2FfOb6u0NrimhYjZ6FHJ%2BBo5GT9hoIBRDsP3YmA1IbiGDhNiEPRn6ffcXdmi3WWpDYZYvrysVh7yxfqPrNk7l4fObLlsQ0qGGbtU65SPFPAeMJFJQz68GlY1VDFnzfXTkm1xVzpr%2FtEWQwh039TeXRqWZdKmyLUDLUbGufks3OrNIHVkKEu40wsaXI%2FcmzC7qvm%2BBjqkAZDFeJeM2ji9%2B3DfnmIcgkxTpqkU7g3%2B2vlEUx99rUTcutU5UBddHcMMA7%2BMfG8D8JbTweyiF6GXK21SrDWr%2BfO3v%2BZtroLlWlk5Tng7YP0ZuSFsW%2FVDKjc3VFP6YSuYaGpVh6%2BhS2yEGiMLC4JDLeLdGjdGL6WCiXuYXCPYqB77wD42I8e%2BQamMFCtkxY%2BXRWaiN0e3NSSaxW9ApNYgW3xYRKHD&X-Amz-Signature=a8e95df7b4abd5ef4f92e80196dfff0e3a7fc9c1a77410cba86bad35d31e39c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
