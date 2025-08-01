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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGAJLQL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxXJX9%2F0H25NHXXEw1oG00xBCjf6%2FHx3JS16q8hDoFoQIgUzBB%2FTjQQbrJtzB5AH6%2BwdkKjH2Rbv13UZlDcmzuP64qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnuLlxlP8ry98jLUircAwQtDTX3pN5Tspuk0R8oeaW8fR5Anpozzg%2FO9soSzGabWqWCEncuYx7gkdRmITjUBiMSLYa%2FrZ94LjS4ev8bMea%2Bew1d4Foo2Uqv%2B5w40CMZA25Tp0w%2FPk%2Ff6SKppY99wdwoSdnmJBCJ8VTf2XB2JoSmOySwlIRX41laMZF%2FJSwp67%2BCmBbrH30yopBek0VM0qaDZVRb9FhWHtOWrRiZyJ96FVVIE96xtdhpFM9AL%2B8o5tG8F3r5DbYPIGojAVjor9FrGRiZlKSGD6ulrT7DBpnHyXd45Gpffap8m20mHS67AwZKSpqh9JOarQCzn9LajgV%2FRQGBDIzUbEJ1ShHLNLaTbBKzx6aS3IMSawxIqNpYD7zifP45KdHgLxAM2%2FdyHCGKKOigi%2B1sF5LHKVIosLwe%2FseEXKtdwQJLS4NETi%2BiRhzVLqPcTC8c7Flhrru5FDMTAk0MvWc%2B8CrBwZLaWQByFPoQT%2BKYcqb6SMRSqQfu%2FJOG2p3wJB2ieslRD0ElxPzDTrPKX6Gm3Jfb8R2oV8yYwuCUjxkqk6YoTk5Y2mRnUe9PGNeOo8wXDebOoznKJSEJY7ncNnsEJYRtSqQg0iVrH1lnzG1h%2F4Dv2BUbAIbq8yYH%2BMzRR6BkVlNiMJiws8QGOqUBpTA5Uzmk%2FyLV6F0s77av2DImw3JBQ6g6OEHCRn5rq0X6vMqIIk5a8t%2FSEGGAhizzW8%2F19%2BSHQOra9Ddq3QShuDVrjuOjdwaQdnWhDWtNz4tiEr8RRJR349DQ3FQ584FhQ25yozovRlBD0aYVMuVnGhGnyTtXjKkyMvzFeZ3euNNLqwV1H1OrtMkhU7y52A%2F%2B9JweqDgv99ci%2BBUfXFykuMCDh0wn&X-Amz-Signature=aa066dd1e9f1946db3700285253107647744aa7977ccbae152fa5f2e9744485f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGAJLQL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxXJX9%2F0H25NHXXEw1oG00xBCjf6%2FHx3JS16q8hDoFoQIgUzBB%2FTjQQbrJtzB5AH6%2BwdkKjH2Rbv13UZlDcmzuP64qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnuLlxlP8ry98jLUircAwQtDTX3pN5Tspuk0R8oeaW8fR5Anpozzg%2FO9soSzGabWqWCEncuYx7gkdRmITjUBiMSLYa%2FrZ94LjS4ev8bMea%2Bew1d4Foo2Uqv%2B5w40CMZA25Tp0w%2FPk%2Ff6SKppY99wdwoSdnmJBCJ8VTf2XB2JoSmOySwlIRX41laMZF%2FJSwp67%2BCmBbrH30yopBek0VM0qaDZVRb9FhWHtOWrRiZyJ96FVVIE96xtdhpFM9AL%2B8o5tG8F3r5DbYPIGojAVjor9FrGRiZlKSGD6ulrT7DBpnHyXd45Gpffap8m20mHS67AwZKSpqh9JOarQCzn9LajgV%2FRQGBDIzUbEJ1ShHLNLaTbBKzx6aS3IMSawxIqNpYD7zifP45KdHgLxAM2%2FdyHCGKKOigi%2B1sF5LHKVIosLwe%2FseEXKtdwQJLS4NETi%2BiRhzVLqPcTC8c7Flhrru5FDMTAk0MvWc%2B8CrBwZLaWQByFPoQT%2BKYcqb6SMRSqQfu%2FJOG2p3wJB2ieslRD0ElxPzDTrPKX6Gm3Jfb8R2oV8yYwuCUjxkqk6YoTk5Y2mRnUe9PGNeOo8wXDebOoznKJSEJY7ncNnsEJYRtSqQg0iVrH1lnzG1h%2F4Dv2BUbAIbq8yYH%2BMzRR6BkVlNiMJiws8QGOqUBpTA5Uzmk%2FyLV6F0s77av2DImw3JBQ6g6OEHCRn5rq0X6vMqIIk5a8t%2FSEGGAhizzW8%2F19%2BSHQOra9Ddq3QShuDVrjuOjdwaQdnWhDWtNz4tiEr8RRJR349DQ3FQ584FhQ25yozovRlBD0aYVMuVnGhGnyTtXjKkyMvzFeZ3euNNLqwV1H1OrtMkhU7y52A%2F%2B9JweqDgv99ci%2BBUfXFykuMCDh0wn&X-Amz-Signature=d0d4fe58933f58f8b2314b6a8d8cceaca5b3ba439f764d71527dd75148d60d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
