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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JMULC4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvMFr5IH9g4L5omkZtz625ygZZVL74W9JnbB0OS21NtAiEA8Y8T6tUZcs5B1GXRoPJB5IzSj%2BUJ29BJcPdSF85rsNYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdBaulsB1SINy6GDCrcA8g5wqNlRM73IUWcOtJ8RpMDFp8%2FDvmC3ARCHWmIbbMDjzBgltrpDwf%2BRIdb29wjtctIOlVi4qsj33QKpUGT5LyiXqx50GFYtask76JLA6hKxDfmql0%2Bq%2BUyBoskcz8rO96K%2BGgVJgRWLFXxOQXMUPY4C7i6NbF7V1slpDKXH%2F%2BADjo2JY32SNLTpuOs2fVW5Gl8HzgaGVt%2B%2Fz3gNyVbRKfVsLpH%2Fzw2ixCHMqHV1DnnpDbiELUudp4x%2Bf4UAnnLiL85qg2HH3q%2BGnP8JUIjZ1XktmxFBPXUyVi5JVaGYORRgXH8TCq26Q7YvmMM9y9bzs57%2FRl%2BN21GqaG8UnpXzYX6%2B2qN3rsSGfmVHk88dDos2vI7lINJCusCcxNIVfzJYqb1T7dfckaqI0YmzbX4BQMGUjoGbM%2BMiocheAKWmyH6ld6x51UyQ5RW1Kg%2BsKT3WKOetiwhP3oH7zhtVZ6lFfUYNwd%2B%2B4qLPTu4hqFhU8DH%2BleovxFP8RLPlvaRcRjvQPaJ7f0N3%2BlUqXd2UU2wEWCk2%2FO4NRvYsOAmps5H3Z6n%2BPjfWE5jmE02VjwQVQNQWX1alED6yQur4BUrom7naVRnmnherR80ArQis07NjkhVxVFPmERUZvmM6zAIMOKcu78GOqUBHOXyzsbeUQPeZUnyIcePQcED5A4w5RUfw6t7OgMtl3MvZOvJXj9Gp5e%2BHpM0fh7uMZGNyVCM7TU%2BAzzemCI%2BjugbL6vq28kB8XKSzqUfIKKsRGesTgOIg8ZsgBmPenSsmSheNb3GXg8rMEnulfNDP3tWwMRRbuc%2BiiX7WAgXfYBHwLQ14WreOTRHWkRV4%2Fs9BE%2ByfDfXgsZECU8I%2BdzCJe10V2jw&X-Amz-Signature=3323f2b96e6af508a465f9d906b9bd5fa9458ef287447d6a598c85e0d8d75610&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JMULC4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvMFr5IH9g4L5omkZtz625ygZZVL74W9JnbB0OS21NtAiEA8Y8T6tUZcs5B1GXRoPJB5IzSj%2BUJ29BJcPdSF85rsNYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdBaulsB1SINy6GDCrcA8g5wqNlRM73IUWcOtJ8RpMDFp8%2FDvmC3ARCHWmIbbMDjzBgltrpDwf%2BRIdb29wjtctIOlVi4qsj33QKpUGT5LyiXqx50GFYtask76JLA6hKxDfmql0%2Bq%2BUyBoskcz8rO96K%2BGgVJgRWLFXxOQXMUPY4C7i6NbF7V1slpDKXH%2F%2BADjo2JY32SNLTpuOs2fVW5Gl8HzgaGVt%2B%2Fz3gNyVbRKfVsLpH%2Fzw2ixCHMqHV1DnnpDbiELUudp4x%2Bf4UAnnLiL85qg2HH3q%2BGnP8JUIjZ1XktmxFBPXUyVi5JVaGYORRgXH8TCq26Q7YvmMM9y9bzs57%2FRl%2BN21GqaG8UnpXzYX6%2B2qN3rsSGfmVHk88dDos2vI7lINJCusCcxNIVfzJYqb1T7dfckaqI0YmzbX4BQMGUjoGbM%2BMiocheAKWmyH6ld6x51UyQ5RW1Kg%2BsKT3WKOetiwhP3oH7zhtVZ6lFfUYNwd%2B%2B4qLPTu4hqFhU8DH%2BleovxFP8RLPlvaRcRjvQPaJ7f0N3%2BlUqXd2UU2wEWCk2%2FO4NRvYsOAmps5H3Z6n%2BPjfWE5jmE02VjwQVQNQWX1alED6yQur4BUrom7naVRnmnherR80ArQis07NjkhVxVFPmERUZvmM6zAIMOKcu78GOqUBHOXyzsbeUQPeZUnyIcePQcED5A4w5RUfw6t7OgMtl3MvZOvJXj9Gp5e%2BHpM0fh7uMZGNyVCM7TU%2BAzzemCI%2BjugbL6vq28kB8XKSzqUfIKKsRGesTgOIg8ZsgBmPenSsmSheNb3GXg8rMEnulfNDP3tWwMRRbuc%2BiiX7WAgXfYBHwLQ14WreOTRHWkRV4%2Fs9BE%2ByfDfXgsZECU8I%2BdzCJe10V2jw&X-Amz-Signature=1e415f9550322c5e0c1c6e7aec984d32e68fe0c4cebd2500ba928ded9c287166&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
