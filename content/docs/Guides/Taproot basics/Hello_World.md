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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECZCBY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjELgIZK%2F6lkz6wR3vbtTfVCIRJZbCFBdz%2Bv8cFfjrNwIgG2Gb9DkdElUL6CNwdVtFILZBvsmIVqWemfWtsn4Sv7Mq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDjjfyZ2VajK8%2Fx3dCrcA2Q39T%2Fqq%2BAXNEyRMwkrunrZgw%2Bx%2FJdqvopE7zeCGlhbUrXmIX00bqOLlPt16wegPHXVNg%2B5MrtZBX%2BkN23obgiTGC4gD%2BRfHDSJH1IxMt6ZomkZtWRsL5PLKjeDpJ3bXuldbAxkuP00ucv1RSY9zUaj4hFLVWc2IqmxXXJhr%2Ft%2FGbO4RkMzpq2Ed9lABNMEdo5oDGQR5CBudOaW%2F3IBJaV18GrDHYh7KdR5XMJbFscct%2FcBCPM7uJadm%2FGlLzZQfsEFxSXSInnXved%2FCOFGACmZ2P%2B6RQo83HudlQL71otn5dFpTab6t%2Fv3bQO2LV6kNpvg%2F5Oznl4ZOF08YeZ40J178WFK3yShapHQizczChD3ICrjlp4Qx%2Bs77PVR5EHlDDXX9%2FJIaV7%2BWU7rcPAsVLPZIzM%2FG%2Bjxl0%2F4YD3LD%2F912F5KJkKP6MtwjnrfY2nqTxK6tntCCMZG02fKU9fvS7g7Jg4lacDFT6HSjTwxedbtEuDF%2FSlcc9YGfdfrvDvwGfShtxkD%2Brh438ajNcm%2BmWsenxoATmthKcKywj%2B6K8bUCwmZnO8lH4OxChYvTWDfAnGk0yDcr9atqPDbrEY%2BTDXEPwu6z1hqVlF6ljfvC7KSpebxgkCNDxepMBeeMP2a7cAGOqUBObo5zrZknqZMFALXr6q0DP4pJdKfTx4s9PyHkXWaGhXxHa7KUYjjhVE7PzsoXzCgYIqmC6fkEfxUA9ld5nzLflw4I04Vt1ZuXNz6f%2BAIgcZJsQDgpOzuc49k%2BUS58m45s6ihVGTkeCGS5sgz1Ow1txGEFXrYmJmToj%2FQvcVDDtGD0WwxsAi5oizzFCEIzH8QKu3m9mLQV%2BLAkYKneh6HdanE%2BV63&X-Amz-Signature=aaea8a6d27f6f803881840c8397c8d328576409cdf44e99cf5d16b2b7f767c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECZCBY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjELgIZK%2F6lkz6wR3vbtTfVCIRJZbCFBdz%2Bv8cFfjrNwIgG2Gb9DkdElUL6CNwdVtFILZBvsmIVqWemfWtsn4Sv7Mq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDjjfyZ2VajK8%2Fx3dCrcA2Q39T%2Fqq%2BAXNEyRMwkrunrZgw%2Bx%2FJdqvopE7zeCGlhbUrXmIX00bqOLlPt16wegPHXVNg%2B5MrtZBX%2BkN23obgiTGC4gD%2BRfHDSJH1IxMt6ZomkZtWRsL5PLKjeDpJ3bXuldbAxkuP00ucv1RSY9zUaj4hFLVWc2IqmxXXJhr%2Ft%2FGbO4RkMzpq2Ed9lABNMEdo5oDGQR5CBudOaW%2F3IBJaV18GrDHYh7KdR5XMJbFscct%2FcBCPM7uJadm%2FGlLzZQfsEFxSXSInnXved%2FCOFGACmZ2P%2B6RQo83HudlQL71otn5dFpTab6t%2Fv3bQO2LV6kNpvg%2F5Oznl4ZOF08YeZ40J178WFK3yShapHQizczChD3ICrjlp4Qx%2Bs77PVR5EHlDDXX9%2FJIaV7%2BWU7rcPAsVLPZIzM%2FG%2Bjxl0%2F4YD3LD%2F912F5KJkKP6MtwjnrfY2nqTxK6tntCCMZG02fKU9fvS7g7Jg4lacDFT6HSjTwxedbtEuDF%2FSlcc9YGfdfrvDvwGfShtxkD%2Brh438ajNcm%2BmWsenxoATmthKcKywj%2B6K8bUCwmZnO8lH4OxChYvTWDfAnGk0yDcr9atqPDbrEY%2BTDXEPwu6z1hqVlF6ljfvC7KSpebxgkCNDxepMBeeMP2a7cAGOqUBObo5zrZknqZMFALXr6q0DP4pJdKfTx4s9PyHkXWaGhXxHa7KUYjjhVE7PzsoXzCgYIqmC6fkEfxUA9ld5nzLflw4I04Vt1ZuXNz6f%2BAIgcZJsQDgpOzuc49k%2BUS58m45s6ihVGTkeCGS5sgz1Ow1txGEFXrYmJmToj%2FQvcVDDtGD0WwxsAi5oizzFCEIzH8QKu3m9mLQV%2BLAkYKneh6HdanE%2BV63&X-Amz-Signature=de1c9402a609b003283cdb2ab190c5e0d016abe410de313987372f3da18363d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
