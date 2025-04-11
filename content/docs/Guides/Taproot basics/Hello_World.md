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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJA3YVA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD7J3j3ryHsuPZn84YGOinreEjhpDpd4D%2BcRO3L7acu8QIhAORp%2FVv307nygZ06aMBOSgSyOyqAJX18YS%2FkancDrGabKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLUHtpJghVgpEZm%2FAq3APlzry%2Bscl%2Bc4f5jt6trCuvi6qqPBS9jzrbwSfZgnerFcgHzjx7HHpHW2kpOQkPUw%2FvsVvRAvEt%2FF0Fa1nz5%2F7YvhlF7PF6TDhrL9v8sdgEnaYp%2FQUmicYj2ujhiSpxgMWWc0Ey5wTC4L%2FQP0Ocqu6fZOKTFELexoFgPxTUQStXU%2FAk0NNPhaoTjx9OOotNKuxwyP%2F0CU5odyNgOTRUnMddO5CHkwpeMPUGnPyX%2BPd6RtfWGhzJzaOiPjigiDRzGQ8bDzduCKoc2uviJUqBL58CMvcurTcjd8EYx6zpylR%2F6WBT5Trhy96GFO1IFqfyARWpDARmOGghHgFRSUw9M4tLJAaAHzvGN72WQmoDa1RKW3jkU6XpIeib8PdgO%2BDU5sUoj%2FTik%2BY%2FyFCSxw%2FDT0tq400%2FOWbevwzBeydgdjCFaNGp0QXIvYyLbvFCLd2cyl3eytf%2BZQI16RB190z6lVyvlyHGx8hutloqJZdvnEHOdlqmN6nAbaA3ZtL%2F792BOjZQ4b2obuxu915FRgv7Q9Sw2VkO9n%2BJUoEgTzyoTCXmIYRw9qnj6bVzR2JbCYL%2BsMSZgQwSowW3cO3ozE7btHFT3N5vW6hXDcfw%2FCXL5pYTgOYJCptacXq52ccn1DDzu%2BW%2FBjqkAWOu5QVsVgtOFz45t4zsHo6MMF0ZYqcQ9%2FA2lj6L%2B4fVh1ccAfCgJTrG%2F6dw68zqyH1W3MOVyXJN8dQDvxxwOMUeYQCxqXeGRNP2qQF%2B950aWdrXiEVkPhVf%2Fis%2BHGt%2BxXylFr3c93o4YOYyovArEvjeAt5mGBZpp7e07vHzLN911g1KOXpVsj0gMaPPvZGiZ4QduiWk1G2efjaQM7oyb0ePvONR&X-Amz-Signature=a7e8210f17e9ecd9daffa1db9558f3fa0fea64d17ac1d4d04ef42be45ef7e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJA3YVA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD7J3j3ryHsuPZn84YGOinreEjhpDpd4D%2BcRO3L7acu8QIhAORp%2FVv307nygZ06aMBOSgSyOyqAJX18YS%2FkancDrGabKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLUHtpJghVgpEZm%2FAq3APlzry%2Bscl%2Bc4f5jt6trCuvi6qqPBS9jzrbwSfZgnerFcgHzjx7HHpHW2kpOQkPUw%2FvsVvRAvEt%2FF0Fa1nz5%2F7YvhlF7PF6TDhrL9v8sdgEnaYp%2FQUmicYj2ujhiSpxgMWWc0Ey5wTC4L%2FQP0Ocqu6fZOKTFELexoFgPxTUQStXU%2FAk0NNPhaoTjx9OOotNKuxwyP%2F0CU5odyNgOTRUnMddO5CHkwpeMPUGnPyX%2BPd6RtfWGhzJzaOiPjigiDRzGQ8bDzduCKoc2uviJUqBL58CMvcurTcjd8EYx6zpylR%2F6WBT5Trhy96GFO1IFqfyARWpDARmOGghHgFRSUw9M4tLJAaAHzvGN72WQmoDa1RKW3jkU6XpIeib8PdgO%2BDU5sUoj%2FTik%2BY%2FyFCSxw%2FDT0tq400%2FOWbevwzBeydgdjCFaNGp0QXIvYyLbvFCLd2cyl3eytf%2BZQI16RB190z6lVyvlyHGx8hutloqJZdvnEHOdlqmN6nAbaA3ZtL%2F792BOjZQ4b2obuxu915FRgv7Q9Sw2VkO9n%2BJUoEgTzyoTCXmIYRw9qnj6bVzR2JbCYL%2BsMSZgQwSowW3cO3ozE7btHFT3N5vW6hXDcfw%2FCXL5pYTgOYJCptacXq52ccn1DDzu%2BW%2FBjqkAWOu5QVsVgtOFz45t4zsHo6MMF0ZYqcQ9%2FA2lj6L%2B4fVh1ccAfCgJTrG%2F6dw68zqyH1W3MOVyXJN8dQDvxxwOMUeYQCxqXeGRNP2qQF%2B950aWdrXiEVkPhVf%2Fis%2BHGt%2BxXylFr3c93o4YOYyovArEvjeAt5mGBZpp7e07vHzLN911g1KOXpVsj0gMaPPvZGiZ4QduiWk1G2efjaQM7oyb0ePvONR&X-Amz-Signature=b242ac72c3f969c66f232746e767af078b5acaaf6d342ac1bb6be0d181a9be30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
