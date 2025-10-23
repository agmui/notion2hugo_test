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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVXW657%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7s7L4JF7%2FdmHoiFfVhISga9fn8W6QRzLS7updgH4nvAIhALN68awH%2ByIlOi3iE7x3RDEUREl7juuvRKWMPR9x%2FrJnKv8DCDoQABoMNjM3NDIzMTgzODA1IgypZHghS50MbZGsvsQq3AOVlzu56x0aj17%2BVBdUz6ipVY0clqALvUi%2BTPitl1jnKDXp51ZkZqSsrt0VWfryTAObmjT2ZGQ8qDW82izMvVRAfsFsy4U6p9b9fm%2FlJDbUhO6lhnypiWshIpe2LyHAvQyoWONajKg6CsHF8%2FKdovC3%2BduqdGR%2Fi3f0c7zKj8AfIcLt32iuX%2BVC1eub9vwxJ%2F58awgc4ew1IYq30rvyUMtw8CsYWbxSE95IGqHAN5dSg%2B4GBDD8ATnBBrenXC1lsaERo9MNr6szIeQXSJ%2FB9tLM3e5MpkDs1AzLWvSU%2B433KTZinllQBTcH8ul7kbdFkhq7KyGiQHdJH1Z4qJ1x9CW%2FD4vFci809cw4JNjEyaw11tYlqAUQmAbOxGopuZ%2BwXbrulueXdK%2FSr2knUeG1%2Fl06IYkgA12722eRNlJZTZJG6LyuUuUqjo9NQ0DSfOyU1k5oZPYcJqY2y8pG1xGtLTc4UcYYf%2FoOi5wQASVm%2FFFhNEk6NY6gogE8s1WnabpYtr%2BSjfVYDXM2HpfwzMGKdcOpa%2B76G0B9j7ED8tdlLkUJVRS%2F8opFMbw9%2FRKpJI1I%2BfR2ggRQ4NrG7e20ljuN0nb4oDGjkf7R68Ul9cbDjwVDe1VbHU7NjOTyejbnRTDq7%2BXHBjqkAb%2Feqkez9kMOEO4ZdJxN1n4YItrxuY8sIEMh2qZ9xf8cGpH%2BV5jBK1cXlVwkbeDmsWl1Na0zrGBVDx41TRsN8DH9IXuO8VduKrcA8g%2BF9EhHN7E6VfDubaSGe16IOC8RVOm7w%2FuwfvLnWbeffgRLSjjnJohxSz%2BNsBdONmY%2BSIaHXGQ6i4Gbx0dBnBm1FxTOg%2B47bzhAeTSP0UzZbqPMYKelVhCw&X-Amz-Signature=2f027f62b5111fe605871678ebef08dfdebdaf7fcb5e61d97aba89a47cc8ad5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVXW657%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7s7L4JF7%2FdmHoiFfVhISga9fn8W6QRzLS7updgH4nvAIhALN68awH%2ByIlOi3iE7x3RDEUREl7juuvRKWMPR9x%2FrJnKv8DCDoQABoMNjM3NDIzMTgzODA1IgypZHghS50MbZGsvsQq3AOVlzu56x0aj17%2BVBdUz6ipVY0clqALvUi%2BTPitl1jnKDXp51ZkZqSsrt0VWfryTAObmjT2ZGQ8qDW82izMvVRAfsFsy4U6p9b9fm%2FlJDbUhO6lhnypiWshIpe2LyHAvQyoWONajKg6CsHF8%2FKdovC3%2BduqdGR%2Fi3f0c7zKj8AfIcLt32iuX%2BVC1eub9vwxJ%2F58awgc4ew1IYq30rvyUMtw8CsYWbxSE95IGqHAN5dSg%2B4GBDD8ATnBBrenXC1lsaERo9MNr6szIeQXSJ%2FB9tLM3e5MpkDs1AzLWvSU%2B433KTZinllQBTcH8ul7kbdFkhq7KyGiQHdJH1Z4qJ1x9CW%2FD4vFci809cw4JNjEyaw11tYlqAUQmAbOxGopuZ%2BwXbrulueXdK%2FSr2knUeG1%2Fl06IYkgA12722eRNlJZTZJG6LyuUuUqjo9NQ0DSfOyU1k5oZPYcJqY2y8pG1xGtLTc4UcYYf%2FoOi5wQASVm%2FFFhNEk6NY6gogE8s1WnabpYtr%2BSjfVYDXM2HpfwzMGKdcOpa%2B76G0B9j7ED8tdlLkUJVRS%2F8opFMbw9%2FRKpJI1I%2BfR2ggRQ4NrG7e20ljuN0nb4oDGjkf7R68Ul9cbDjwVDe1VbHU7NjOTyejbnRTDq7%2BXHBjqkAb%2Feqkez9kMOEO4ZdJxN1n4YItrxuY8sIEMh2qZ9xf8cGpH%2BV5jBK1cXlVwkbeDmsWl1Na0zrGBVDx41TRsN8DH9IXuO8VduKrcA8g%2BF9EhHN7E6VfDubaSGe16IOC8RVOm7w%2FuwfvLnWbeffgRLSjjnJohxSz%2BNsBdONmY%2BSIaHXGQ6i4Gbx0dBnBm1FxTOg%2B47bzhAeTSP0UzZbqPMYKelVhCw&X-Amz-Signature=409694692ee7b8ee1cde90d043786aafad6112e3e3bf0abcddde719cb4f98f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
