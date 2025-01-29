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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDT6DFD6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDRAgA%2BSfHaQZqWSgyWMtEk29ZPSw8V9YRSZ%2FJBaG8h3wIhAPGWUercJvcO4VfPEja8rEmQhbsAfNwCGoVRNAnBeflxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNQ0ht4DZBKppcPCgq3AOGr94vFB%2B%2FP%2FSjhhkeJKqedCwFutF5mWgPOoO33zNIhhdurQvARBbPI1m1ZpDhxpOtsFEotZ5MhDy24oj2XWdnjhMqaUV1hZPk6tBxrEaRdVLH1LzQUnTu5S3DO483skq6r68%2Bj9xmhv5YiISG3miLsBGhahI95rTJ0gfyJzg1WSLslK866u6WBbOtEF6rVOBhE18us8RUZpcavKyBoDX7m7bthxQe98A%2BYpYSLGjpwZCevwguy9Ektp01uognS2KJKnZWwgnqsABnDF70gCi4YAjKsgL8AtYtwLnREkgJGQ8dJmVUa1cyTQjrKUodJ%2Fgtqj37rMLepOpl1gGiF2bxrhPzbVj1oRCbmBML6ks1V4lxjEhEMGAMi3IcM3PLovmhrzNqvGlX8xSmdmKs8inyhLTX0Rx3SFfNA3GU39jOLmLm1A4cOtYNYNAuOdDtDAmfs%2BoU6NlpW57gWdgaJDd8AVgq1S8LO7KZiZ8CTVbgCa%2BDMfqbJM54JH5SedA58PKsa0eZUR7fTmaiKWhyyvUHUuOhWEl9N78EqO70Dd9lBqgMRbB98qzZXIufSOpLtVW0HaWvb8ksLLWuI4%2F4V43W8b7In25rMkt2X7FHr5lWEvcbdJFc0lsoGftNvDCzvea8BjqkAY2nEp66MJLhs5STaQ0Me6UIJdrG1erGrZuV6uF63eAyzcRTeM%2BoH8TaEKbEGdoBQHFPIhCPoWnknXY312NU2GTr41k8UrzaI0F8wJM35KmiOBH%2FYyb%2Fffy5eFoVE98HNbVnKGT2%2B5Pr3n5368qNe34UGdE0ZfXd5NpLpwP99wuwmuNnHOff0GdZVwyGMbUiZmgtNf8xVXp9bgUwZzJmLt%2BbsA8K&X-Amz-Signature=7fb0e011f0db57288bfaf548381fe7fecf8834e8fc63d333896812d2b84c1661&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDT6DFD6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDRAgA%2BSfHaQZqWSgyWMtEk29ZPSw8V9YRSZ%2FJBaG8h3wIhAPGWUercJvcO4VfPEja8rEmQhbsAfNwCGoVRNAnBeflxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNQ0ht4DZBKppcPCgq3AOGr94vFB%2B%2FP%2FSjhhkeJKqedCwFutF5mWgPOoO33zNIhhdurQvARBbPI1m1ZpDhxpOtsFEotZ5MhDy24oj2XWdnjhMqaUV1hZPk6tBxrEaRdVLH1LzQUnTu5S3DO483skq6r68%2Bj9xmhv5YiISG3miLsBGhahI95rTJ0gfyJzg1WSLslK866u6WBbOtEF6rVOBhE18us8RUZpcavKyBoDX7m7bthxQe98A%2BYpYSLGjpwZCevwguy9Ektp01uognS2KJKnZWwgnqsABnDF70gCi4YAjKsgL8AtYtwLnREkgJGQ8dJmVUa1cyTQjrKUodJ%2Fgtqj37rMLepOpl1gGiF2bxrhPzbVj1oRCbmBML6ks1V4lxjEhEMGAMi3IcM3PLovmhrzNqvGlX8xSmdmKs8inyhLTX0Rx3SFfNA3GU39jOLmLm1A4cOtYNYNAuOdDtDAmfs%2BoU6NlpW57gWdgaJDd8AVgq1S8LO7KZiZ8CTVbgCa%2BDMfqbJM54JH5SedA58PKsa0eZUR7fTmaiKWhyyvUHUuOhWEl9N78EqO70Dd9lBqgMRbB98qzZXIufSOpLtVW0HaWvb8ksLLWuI4%2F4V43W8b7In25rMkt2X7FHr5lWEvcbdJFc0lsoGftNvDCzvea8BjqkAY2nEp66MJLhs5STaQ0Me6UIJdrG1erGrZuV6uF63eAyzcRTeM%2BoH8TaEKbEGdoBQHFPIhCPoWnknXY312NU2GTr41k8UrzaI0F8wJM35KmiOBH%2FYyb%2Fffy5eFoVE98HNbVnKGT2%2B5Pr3n5368qNe34UGdE0ZfXd5NpLpwP99wuwmuNnHOff0GdZVwyGMbUiZmgtNf8xVXp9bgUwZzJmLt%2BbsA8K&X-Amz-Signature=1436b3569f980fefe1b1e81e0873fffadf5f68742af51f4d61592d684e9ef351&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
