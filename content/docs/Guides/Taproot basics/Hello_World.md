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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4Z64ZVY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ3CKJO6PlT04peHN4SV%2FZWzrLhTU5YqofOJ6mt1xLXQIgMOMgbnAfO9g0Vy4WygJZMxgeXsRZWczTcI5rCyx0MWwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTzjScGQkOA2fcGqSrcAzaTUtY%2FRk4eKKaF4%2B9OzzgXC7Du05NAm%2FGY4XjAnzEsO9iFAQzMrUc7e4t5DBZYQulPv3uvbQmB8PD25E6GMs1CktuLYkxvlv%2BL2VtY2MxwX9RdmvoHOMbOCbzSjEaj1%2Bx68p9zkXEBSMrN6zFVAQQbn2PqXYrdevQIdeao846dqKu5jEQ2VJ18AHtFQCksX8Mi7tlahqBYEHHdVBTazWXfxcxKCh08x1d331YDDiT82jY%2BeyWu8%2FUQsYNKWQQoKZCE9eck91G9RcEbh8gJm1RBNovigaL8S50ehRSNV2OzBg7l2Qw9uS%2F%2FnjstPxqEDHbVSJtmTTFo7rgB2ozaZbc6GYAxkZdGR7C5vj71w2A6Ow%2BZApc3gerL7J6Seqn9FGeMgLnvD7B4fBccQAohpJVMQHV0Ds%2BwxG7fhu0KChrnZ1jz6IM0TASLR%2Bu%2FyiFAMP3O%2FH%2B%2BGW%2FXFaEhV7nNsbZe34TPkAZL8eRJcxxBA9YSSrOj1EX4o5c4fJcFmBfsguVv5%2Fdc%2FbRvySVehoCthWYHNpKdcZHB%2Fn2g2IYtnC2%2FpnTJxxgmj3AN8mWug1u3Sp9N%2BCbEKBgecwNVTUJY2jhfEoIzB%2BV8hMLignocN%2BAtkGXjZVoFCgIyB8A4MLP9s8MGOqUBOFRqpTGRVFvC8zCx%2BJ%2FJMYwX8BJSSaK11COWf2Z7aa8tYkIygOb4Ya1KlUlJKQEyRh1YuvxCWrJwl47oN1SayIkk4JaFXyFYo%2FzbEVOXfRzjZmq0dJJRc8ajp62pf5JkCPCg%2Fbur%2B5%2Fbe5%2BvMCoSWgfoJ%2F3e8lVW%2Bzyc104VmUsQQEycUrr%2BTlxuKfR18DOE8vjGnvcWqkWNVKYED7YCFQ3rURRn&X-Amz-Signature=c3f95ba070fcfc26366b56aca18e0a72ba5f241fb7ab511f4ff77262643dde93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4Z64ZVY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ3CKJO6PlT04peHN4SV%2FZWzrLhTU5YqofOJ6mt1xLXQIgMOMgbnAfO9g0Vy4WygJZMxgeXsRZWczTcI5rCyx0MWwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTzjScGQkOA2fcGqSrcAzaTUtY%2FRk4eKKaF4%2B9OzzgXC7Du05NAm%2FGY4XjAnzEsO9iFAQzMrUc7e4t5DBZYQulPv3uvbQmB8PD25E6GMs1CktuLYkxvlv%2BL2VtY2MxwX9RdmvoHOMbOCbzSjEaj1%2Bx68p9zkXEBSMrN6zFVAQQbn2PqXYrdevQIdeao846dqKu5jEQ2VJ18AHtFQCksX8Mi7tlahqBYEHHdVBTazWXfxcxKCh08x1d331YDDiT82jY%2BeyWu8%2FUQsYNKWQQoKZCE9eck91G9RcEbh8gJm1RBNovigaL8S50ehRSNV2OzBg7l2Qw9uS%2F%2FnjstPxqEDHbVSJtmTTFo7rgB2ozaZbc6GYAxkZdGR7C5vj71w2A6Ow%2BZApc3gerL7J6Seqn9FGeMgLnvD7B4fBccQAohpJVMQHV0Ds%2BwxG7fhu0KChrnZ1jz6IM0TASLR%2Bu%2FyiFAMP3O%2FH%2B%2BGW%2FXFaEhV7nNsbZe34TPkAZL8eRJcxxBA9YSSrOj1EX4o5c4fJcFmBfsguVv5%2Fdc%2FbRvySVehoCthWYHNpKdcZHB%2Fn2g2IYtnC2%2FpnTJxxgmj3AN8mWug1u3Sp9N%2BCbEKBgecwNVTUJY2jhfEoIzB%2BV8hMLignocN%2BAtkGXjZVoFCgIyB8A4MLP9s8MGOqUBOFRqpTGRVFvC8zCx%2BJ%2FJMYwX8BJSSaK11COWf2Z7aa8tYkIygOb4Ya1KlUlJKQEyRh1YuvxCWrJwl47oN1SayIkk4JaFXyFYo%2FzbEVOXfRzjZmq0dJJRc8ajp62pf5JkCPCg%2Fbur%2B5%2Fbe5%2BvMCoSWgfoJ%2F3e8lVW%2Bzyc104VmUsQQEycUrr%2BTlxuKfR18DOE8vjGnvcWqkWNVKYED7YCFQ3rURRn&X-Amz-Signature=6503aca65bace25f0f4380a5ae0b138a441a35d9ee07feedc57aa97d42e4f38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
