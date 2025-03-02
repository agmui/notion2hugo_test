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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HXKWY4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDKdClrI%2Bn5iDy4yWHsNfHZ1KLPGBwl78EWI4FF3PqFOgIhAILray6rH3%2BoyBWTNtUqUAoZsRExOlVdt9fXtVck1tzuKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fr8LCbryFMSHr18cq3AM7N%2FDb2MTLpx8bBf8CbPxPpBt8qh7w7NNaC%2BuUt9LqazelYWeMBpYoP9mUiKm7uwPESQ6kNJVSK9G%2Fht2%2F9kVpeYxbFoodesI%2Bpra7e0PJ31Ocp%2Bn9TXCX4WxsDVtE3VvfrjrBnp6yFSiwso1D8i4QfVglje1qrAjO4Jj9x8pijBFUuHlgz6zIwCsh6ua0DGcGoFquOaIWBgsOX5%2FhMjGF4ChE3WuunWPIXr3myt660H25tCQVPWY36DgHeQ3JewJEXn9EeSDaPOzL%2BfelhkQWg4AtPQii5PO8iHYHn%2FGD9MJ1NmkeNEVqX3sEF9A%2FjSbsUTIW%2FIbxKDzEiv3i%2BYEYNB7kcPfVKiFBTXBz%2FmX99EX4wDqUMURBS%2B9Qah6LJUZJXt0ufFf6MBHqRvYlI9gRHpyUv945QtNbUC3KLeyInX31n0FOjBRFl06AxUyJVBoUZa38hQ1JdtnKo8%2FdU7pN6EQr%2B3Fuu%2BmT9O2kFx9dHun0SvADRPUtm1RoSFeXZ6zyo%2FVHFbSpFmSOO3RGdVGJrCewAn8no0fqpaOXTWeL6DOB0jBwPlZJpZcyn11joJpPudHVDrV7lCCprZ07MeNTCBfRUvyj4JzgimwKzTkI6eDN5sEojnzWkqS8UjDJ9o6%2BBjqkAa7OXpYxeQ81U7YoLrvQUdjZY5Ex0kwHEh8jqcoWiMQt6ImkKSeuCOIbAJhloXdiiRechqdTePbVKyPb61hGVxqHW6TZ8YDAcudr20X4tp1OPimV62Aayn3crm4zroXb6kG06kxpbD9Df3XbnofPh94zbvFMzFXG6fJS4pVjrYlaKVsLElwy73dQJqTDDdDT9xk%2F9ufo9zB6In55QezOlhMOIzUS&X-Amz-Signature=89e4ef227757962f0da65f6358291ac4277d5f4f55b96e9ab373b04ba402f486&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HXKWY4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDKdClrI%2Bn5iDy4yWHsNfHZ1KLPGBwl78EWI4FF3PqFOgIhAILray6rH3%2BoyBWTNtUqUAoZsRExOlVdt9fXtVck1tzuKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fr8LCbryFMSHr18cq3AM7N%2FDb2MTLpx8bBf8CbPxPpBt8qh7w7NNaC%2BuUt9LqazelYWeMBpYoP9mUiKm7uwPESQ6kNJVSK9G%2Fht2%2F9kVpeYxbFoodesI%2Bpra7e0PJ31Ocp%2Bn9TXCX4WxsDVtE3VvfrjrBnp6yFSiwso1D8i4QfVglje1qrAjO4Jj9x8pijBFUuHlgz6zIwCsh6ua0DGcGoFquOaIWBgsOX5%2FhMjGF4ChE3WuunWPIXr3myt660H25tCQVPWY36DgHeQ3JewJEXn9EeSDaPOzL%2BfelhkQWg4AtPQii5PO8iHYHn%2FGD9MJ1NmkeNEVqX3sEF9A%2FjSbsUTIW%2FIbxKDzEiv3i%2BYEYNB7kcPfVKiFBTXBz%2FmX99EX4wDqUMURBS%2B9Qah6LJUZJXt0ufFf6MBHqRvYlI9gRHpyUv945QtNbUC3KLeyInX31n0FOjBRFl06AxUyJVBoUZa38hQ1JdtnKo8%2FdU7pN6EQr%2B3Fuu%2BmT9O2kFx9dHun0SvADRPUtm1RoSFeXZ6zyo%2FVHFbSpFmSOO3RGdVGJrCewAn8no0fqpaOXTWeL6DOB0jBwPlZJpZcyn11joJpPudHVDrV7lCCprZ07MeNTCBfRUvyj4JzgimwKzTkI6eDN5sEojnzWkqS8UjDJ9o6%2BBjqkAa7OXpYxeQ81U7YoLrvQUdjZY5Ex0kwHEh8jqcoWiMQt6ImkKSeuCOIbAJhloXdiiRechqdTePbVKyPb61hGVxqHW6TZ8YDAcudr20X4tp1OPimV62Aayn3crm4zroXb6kG06kxpbD9Df3XbnofPh94zbvFMzFXG6fJS4pVjrYlaKVsLElwy73dQJqTDDdDT9xk%2F9ufo9zB6In55QezOlhMOIzUS&X-Amz-Signature=057eddde8dd6e8f507b9eefdc97586f1780e9d30916ff98d6aa6c693543e7cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
