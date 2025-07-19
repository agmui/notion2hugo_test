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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHVHOMN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrDv%2BINARTn7pJgMzoy%2FMCn7ZSOm2n%2ByN6DlHFRiQnXAiASXcugH5JLwMYORDF%2FBNKnK%2F5cOq4c3WbVOgsIZJFxbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTk1YAy%2FlBmOCH8KKtwDYNLEj4rhqceDT0DPK5JH2QoiQphYDZb785fWoVXX0lRGtZbeDJc2wuyBtG4IYkEGphnrgU5JfB0qTc2RAsvz1q4vByxjxo3NghEUWCcuqI%2F3%2FH88LMo3OLVyBgaJU22iIEZLTgyOLdMESVP%2Bhux%2FSxJ4cVMjrye7S8PE125Tj%2BejCwXfWDXiPVXps5PPxZ3tJYV8O%2F5W32R2cjMbvW%2F7ZSnqFFUXrxkUdaWJ%2B%2FrAmhIFYKzditeD%2FeVZQ1k%2FDt4F1cmfFQx5Vll98yuL60HvmN3UpsCLYt6CSaYVbYoXFWV020pV3L%2FRVa9OEHqV7OAGC63g8ykjunehodcVucQpmONHVpYdA1Rp0%2Bm5hgaLFqud2LAFaVR7E5%2FghtnstgBtjCpVuJLUkNVYmEKACdzQCHaBlpkgQ6oLGT1YRJ4BcERjAbN076oXJiK1%2Bq2frzZqEVdlbed6pgkNI23YWdX516%2B1Z5aBKDZmx3zCDcCMN38Jnr0Wip4DoVNRwUtzf5SR4BuDR%2F%2B4cpD8a1Dhf4TLEydhYCbda2eqoDwiDd3yGTlZTnuNwE%2B%2FyxePiB7Bk3OiqUOVC7CGEPt09qOwVKC0%2FVmLvUkGrYGGjUU63SLl0NWBmHEqdYdfg%2Bo0uScwuMXswwY6pgFJTYB%2FJXPWUpmy8GvXXaKZl995pmNQfGJSmlmck0gvbWKBSjtldnFBmYVDoQ5UANvdIV7F7AmZSbn61l8MoUQgROlW8AKeTbqTIngJlsfpOdTCHKKG%2FRv4hW4HPBtSuuyz%2BeCJYcoSGqudtRsGjvS45OYvQ00dTzB14XxH7GnsaNufakaEIgk7FZW0T%2BTad22HdTsZTJUPteClCSnAhMCC21LDL59W&X-Amz-Signature=025647a44a294e0cc4d0857a36e8aaf1e8e5d1c5dba003b1e60a5697601b2c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHVHOMN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrDv%2BINARTn7pJgMzoy%2FMCn7ZSOm2n%2ByN6DlHFRiQnXAiASXcugH5JLwMYORDF%2FBNKnK%2F5cOq4c3WbVOgsIZJFxbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTk1YAy%2FlBmOCH8KKtwDYNLEj4rhqceDT0DPK5JH2QoiQphYDZb785fWoVXX0lRGtZbeDJc2wuyBtG4IYkEGphnrgU5JfB0qTc2RAsvz1q4vByxjxo3NghEUWCcuqI%2F3%2FH88LMo3OLVyBgaJU22iIEZLTgyOLdMESVP%2Bhux%2FSxJ4cVMjrye7S8PE125Tj%2BejCwXfWDXiPVXps5PPxZ3tJYV8O%2F5W32R2cjMbvW%2F7ZSnqFFUXrxkUdaWJ%2B%2FrAmhIFYKzditeD%2FeVZQ1k%2FDt4F1cmfFQx5Vll98yuL60HvmN3UpsCLYt6CSaYVbYoXFWV020pV3L%2FRVa9OEHqV7OAGC63g8ykjunehodcVucQpmONHVpYdA1Rp0%2Bm5hgaLFqud2LAFaVR7E5%2FghtnstgBtjCpVuJLUkNVYmEKACdzQCHaBlpkgQ6oLGT1YRJ4BcERjAbN076oXJiK1%2Bq2frzZqEVdlbed6pgkNI23YWdX516%2B1Z5aBKDZmx3zCDcCMN38Jnr0Wip4DoVNRwUtzf5SR4BuDR%2F%2B4cpD8a1Dhf4TLEydhYCbda2eqoDwiDd3yGTlZTnuNwE%2B%2FyxePiB7Bk3OiqUOVC7CGEPt09qOwVKC0%2FVmLvUkGrYGGjUU63SLl0NWBmHEqdYdfg%2Bo0uScwuMXswwY6pgFJTYB%2FJXPWUpmy8GvXXaKZl995pmNQfGJSmlmck0gvbWKBSjtldnFBmYVDoQ5UANvdIV7F7AmZSbn61l8MoUQgROlW8AKeTbqTIngJlsfpOdTCHKKG%2FRv4hW4HPBtSuuyz%2BeCJYcoSGqudtRsGjvS45OYvQ00dTzB14XxH7GnsaNufakaEIgk7FZW0T%2BTad22HdTsZTJUPteClCSnAhMCC21LDL59W&X-Amz-Signature=60164d34d6ce361ca16e2d4fbaf0791936455da2a98e2c57b1271598b15bce9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
