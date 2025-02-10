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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOK23ZHY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtPAdvVf9rsP7Jl7pra5sfKEK3iQ6Vd156Sf83%2BeKIYgIgLJC21ftW9mw4Z8XDsRAsHx%2FPPFkN8EfZbdMIKfL3sBIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2CVfpMX%2Fz3RSZUZCrcA50AEfBAp2E41CX552hy3Xr%2FaWCY4vo%2B%2BajtshVDqnrohuWT0C1gwxyHr5S2kzF52HnFsKzQyzB093Dq5j48pJldCJ5%2FwsPlIuRK%2B6xUO4yuc6lp9yAu%2FNiXlNNWT6kkn42NNs4zFy%2Fp%2BphxVaXJQK6LTw6OHi7hvujYo%2BXaS4A0ymn4OuT8QUywwjG0SodcVYXomR8htxEW9DOB89B2n3ProsI9ykpZiFkpSeQ0Bdo2d6cDztK3hpbdufSelmJZk9fkajS2ZdpdIl36THGSaEZnuOsd2sZE%2FOTKVKa5SkgUYT7Z5k6P0D5GOY0EGq7SV5eV61J62EcsXyW1sG2S4TylAWXaDQTGDHtugJkQCRVFhS%2Ft5PHotoX31KhUtBdjCk35g1qQyblqpfbXRgiY2Gbms2%2FCzkJXhQJp3lvLacLvebSdx7mGx9IA5ZMVx%2BeY7XnyTemaXEHa0gquhQoNGxNX%2FhQLRIUcZKnHIj3SIdNf5uW5IZqbmET5bz5KWb2kZXAwURcxAfYn9p0hbbXb2HaCcg%2FfHwJyN8CgMLLcS0avE8GLZAJSLVnv4OqDWOReg5gkimzWGdKDkLWPI0appCjTK2yJaI56E5bx%2BZ6rK2gPfk%2B0hFWn13Ai%2BScIMPjMqb0GOqUBuayRl4eCl1GMeva3XSA%2FGdnnXHYwhqhL8rsbsH9S4lYQaB81aZ8eN8akq875xARTMI2mUg0gft74%2BEHOz1M0rKqS4lyoL0WD0GcMlXUQBiYj3hwKKXxshi17%2FKYp4MwslEZfIQ6Z%2FCDA0b6DlgJ1xYp9giBtgLHI5G5pNQShSAoxbBCW%2Fr2fEELY10r57XsAT%2B5gtyY9VCObDiRB3J6Uq9MYFvvT&X-Amz-Signature=0283ee24717dfbb5dafd28ad66eefcee5b59d3d2cde3e81c1186f5faa5d6bd90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOK23ZHY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtPAdvVf9rsP7Jl7pra5sfKEK3iQ6Vd156Sf83%2BeKIYgIgLJC21ftW9mw4Z8XDsRAsHx%2FPPFkN8EfZbdMIKfL3sBIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2CVfpMX%2Fz3RSZUZCrcA50AEfBAp2E41CX552hy3Xr%2FaWCY4vo%2B%2BajtshVDqnrohuWT0C1gwxyHr5S2kzF52HnFsKzQyzB093Dq5j48pJldCJ5%2FwsPlIuRK%2B6xUO4yuc6lp9yAu%2FNiXlNNWT6kkn42NNs4zFy%2Fp%2BphxVaXJQK6LTw6OHi7hvujYo%2BXaS4A0ymn4OuT8QUywwjG0SodcVYXomR8htxEW9DOB89B2n3ProsI9ykpZiFkpSeQ0Bdo2d6cDztK3hpbdufSelmJZk9fkajS2ZdpdIl36THGSaEZnuOsd2sZE%2FOTKVKa5SkgUYT7Z5k6P0D5GOY0EGq7SV5eV61J62EcsXyW1sG2S4TylAWXaDQTGDHtugJkQCRVFhS%2Ft5PHotoX31KhUtBdjCk35g1qQyblqpfbXRgiY2Gbms2%2FCzkJXhQJp3lvLacLvebSdx7mGx9IA5ZMVx%2BeY7XnyTemaXEHa0gquhQoNGxNX%2FhQLRIUcZKnHIj3SIdNf5uW5IZqbmET5bz5KWb2kZXAwURcxAfYn9p0hbbXb2HaCcg%2FfHwJyN8CgMLLcS0avE8GLZAJSLVnv4OqDWOReg5gkimzWGdKDkLWPI0appCjTK2yJaI56E5bx%2BZ6rK2gPfk%2B0hFWn13Ai%2BScIMPjMqb0GOqUBuayRl4eCl1GMeva3XSA%2FGdnnXHYwhqhL8rsbsH9S4lYQaB81aZ8eN8akq875xARTMI2mUg0gft74%2BEHOz1M0rKqS4lyoL0WD0GcMlXUQBiYj3hwKKXxshi17%2FKYp4MwslEZfIQ6Z%2FCDA0b6DlgJ1xYp9giBtgLHI5G5pNQShSAoxbBCW%2Fr2fEELY10r57XsAT%2B5gtyY9VCObDiRB3J6Uq9MYFvvT&X-Amz-Signature=e852246e18fca222d3e0ebb33446c2a97560fab56d4c937d5fc1abe2d23f0885&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
