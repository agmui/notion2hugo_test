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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHOU424%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDONqTr6uWibF%2BlAoCGMkgG0jH7RW%2FcWVAOQIXNd9xFAQIgIXksnMnLTTHt6RgER%2BVWPJ8jR32PGcJYpAqPRLPV3BsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBPbh6shacC63FokyrcA7EWbgOHeaiPqNNY0pCN9UJDv%2FpMW3JOGUi%2BCAckVmb%2F5yeTP%2BXMHIjFpQjrPRSCCbBxCxp1dKk2XbmBkkE%2BfsGiYQsrruPU6QZIatZs00kwzwXx7cIfRN7XpYIcMmuqWVMV2aV3%2BqPcSkNz92AoJ4liy%2BG%2FWIh76X2rICeRg%2F%2BrF2eCtwmO0bfHDOfXoyEilHp0hHhZ0TmqT6A4izg6tB4g46x23pJix0FD4kniTdIz3bDXqA6%2FTfYfYlyIHEzqTxtJHZbsUnLC8XfZl8vd%2BqcIb3ppLQzhM7FS7KMelkX%2FEg04ZDEDv3i85ovrisXeMtJn0Vmh9hBuJdudSOngUb8Tk9GIq4Q2O78wGXuxj6vEb5BAA3EW%2BK1DEPsJAfF4qI2idb%2FU8Z6glfk0FmnDnyGfocJiUJ1b83NuO8KivQiMru1bONAUFLDDwHu8X%2FVPgFCYnfbQHjGdQWAWNuIJsg0RcZfbFdQLS6EGfrgz%2FHZ6x8OMrYxBpLQGCMRbxoHi7juDQk1aXUc%2FSR8%2FXckM3afcxOUgG42R8n8tMq6WtFoGcgz8h33yQJMeXU8KT1dQWWR4NFf2rLJOa9K1J0O5i%2BmKqDWtpUrhX2PcsIrw65kNU7uk3P1cJQuFIL1DMMHo3MQGOqUB9OZSHjbz0UBzhZBMYBoB9YAxAGIQO4SlIP3EUm0Qjmab6UBYEipEkDMtoojmKncVoCcBN%2BuC3YnKKCaFlnRJwh430NXy1NpiO7UCsEHhEepCs%2Fdy0%2BHOhcHIh%2Fu0hfimbdfGLhSMb%2BL8RMYx038DdUdwn8wbdHyktpmA5Buk4OhppyTJqrT1vWJwnkFxCsOqaoILnGJmroyQpQRwqkES2ifFzmMQ&X-Amz-Signature=9e28450cb277c0aeb0b9d78f9d6084ace5b447de7fbe57911b529ae1e6cac697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHOU424%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDONqTr6uWibF%2BlAoCGMkgG0jH7RW%2FcWVAOQIXNd9xFAQIgIXksnMnLTTHt6RgER%2BVWPJ8jR32PGcJYpAqPRLPV3BsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBPbh6shacC63FokyrcA7EWbgOHeaiPqNNY0pCN9UJDv%2FpMW3JOGUi%2BCAckVmb%2F5yeTP%2BXMHIjFpQjrPRSCCbBxCxp1dKk2XbmBkkE%2BfsGiYQsrruPU6QZIatZs00kwzwXx7cIfRN7XpYIcMmuqWVMV2aV3%2BqPcSkNz92AoJ4liy%2BG%2FWIh76X2rICeRg%2F%2BrF2eCtwmO0bfHDOfXoyEilHp0hHhZ0TmqT6A4izg6tB4g46x23pJix0FD4kniTdIz3bDXqA6%2FTfYfYlyIHEzqTxtJHZbsUnLC8XfZl8vd%2BqcIb3ppLQzhM7FS7KMelkX%2FEg04ZDEDv3i85ovrisXeMtJn0Vmh9hBuJdudSOngUb8Tk9GIq4Q2O78wGXuxj6vEb5BAA3EW%2BK1DEPsJAfF4qI2idb%2FU8Z6glfk0FmnDnyGfocJiUJ1b83NuO8KivQiMru1bONAUFLDDwHu8X%2FVPgFCYnfbQHjGdQWAWNuIJsg0RcZfbFdQLS6EGfrgz%2FHZ6x8OMrYxBpLQGCMRbxoHi7juDQk1aXUc%2FSR8%2FXckM3afcxOUgG42R8n8tMq6WtFoGcgz8h33yQJMeXU8KT1dQWWR4NFf2rLJOa9K1J0O5i%2BmKqDWtpUrhX2PcsIrw65kNU7uk3P1cJQuFIL1DMMHo3MQGOqUB9OZSHjbz0UBzhZBMYBoB9YAxAGIQO4SlIP3EUm0Qjmab6UBYEipEkDMtoojmKncVoCcBN%2BuC3YnKKCaFlnRJwh430NXy1NpiO7UCsEHhEepCs%2Fdy0%2BHOhcHIh%2Fu0hfimbdfGLhSMb%2BL8RMYx038DdUdwn8wbdHyktpmA5Buk4OhppyTJqrT1vWJwnkFxCsOqaoILnGJmroyQpQRwqkES2ifFzmMQ&X-Amz-Signature=6c03bf583def670c5231b7dd0f4216ed79c9e54d480cc32ceab824d9e61588bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
