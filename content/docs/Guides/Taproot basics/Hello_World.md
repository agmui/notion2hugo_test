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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRIJFAH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLlavoV5%2FYbMVfSKtxgc5BxXJi9rpSRkmRG0vGzZ1CwIgGkEgVNDDxB%2FGa5JoObptLbZanEZ5jmlnrYJ0aFp4ZScq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJNhmvsSpkMC5FutEyrcA8kJsgxyMfF2XohoGtqLpm0b9YHosPq7Z2uc2y7bkeVoOsOL8kPEPID%2FKAYj1NGDQVAdT%2FWvzn4oimNe%2F904exiEo8DH07oQOCQlLtac8y2eW3rF%2BoLJdhjwB3V%2FAoqLhsBB%2F8kNPRELzwahqWC7HhTQkmC%2BfpITE%2FeFQGYiZdmpvDZ5gmmePQxYl4%2FjnkwoqvcUGTajadhNe3e1V7sNQBFGyuRMJRAb8YYmF8GcXJwO7kUh9MaT9cHy8hQFF2wj6ze0rylsDNHHGcBfwJK0oSgDFRVi6MPIxMS6mkzZA1DjGZaD5%2F6driYl3KXq%2F77Cpdr7%2B3RPfxKgwtOKg7uhQjsE3cfnSwYO3424DdUUXKiwxI%2Fq9EBEKd0L%2B8y4bhUMPwwvxdOGfGl0eb8cspvIl%2Bk%2FKuNn8BaNMTisqVIBOQc0TikyTh4VG8JUXUMUUp0%2Flv7sJA74PfQjEA6eSQM0VZEQ3hzPK%2BKeDnDsTJAT1m5VNBzfByCkSMxiJXKz5kHLtSqPSEGyYfZxzPzzEKkfdUhkrgmFC%2BJBOS1rA4H3aKwpLYhw5Jmo%2FosLDomGYB7BJm60E1XUpfl3XQLDz05dNxzjnr88IHlq7IpclprnuZulfigQoCghmoi%2FLmLkMMb48MQGOqUBnA68NPOb1C2eP1cEUAy4ACaXHpefyRbNnWFm6nEg%2Fb9237X4W0OV9Fh%2FO1itk7WtligMM7jafrc1pLWa4T%2F6w9Bn8NbNQSQn%2BXaz%2F78pcdsLdf8DU1umuRNnrnQdABTXhX3W6BH1AW8%2BKu9zF%2FGV3wF4OjL4jTWLMqFaLyuT6WM3k4SSsP73wP5B49GKGOTJxYg3%2BXrSfpgYtYfK2FwmOmYAA8Dy&X-Amz-Signature=d90650d49c28173e31df5b36d20aac02171d14df85655701d28f6285efe755e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRIJFAH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLlavoV5%2FYbMVfSKtxgc5BxXJi9rpSRkmRG0vGzZ1CwIgGkEgVNDDxB%2FGa5JoObptLbZanEZ5jmlnrYJ0aFp4ZScq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJNhmvsSpkMC5FutEyrcA8kJsgxyMfF2XohoGtqLpm0b9YHosPq7Z2uc2y7bkeVoOsOL8kPEPID%2FKAYj1NGDQVAdT%2FWvzn4oimNe%2F904exiEo8DH07oQOCQlLtac8y2eW3rF%2BoLJdhjwB3V%2FAoqLhsBB%2F8kNPRELzwahqWC7HhTQkmC%2BfpITE%2FeFQGYiZdmpvDZ5gmmePQxYl4%2FjnkwoqvcUGTajadhNe3e1V7sNQBFGyuRMJRAb8YYmF8GcXJwO7kUh9MaT9cHy8hQFF2wj6ze0rylsDNHHGcBfwJK0oSgDFRVi6MPIxMS6mkzZA1DjGZaD5%2F6driYl3KXq%2F77Cpdr7%2B3RPfxKgwtOKg7uhQjsE3cfnSwYO3424DdUUXKiwxI%2Fq9EBEKd0L%2B8y4bhUMPwwvxdOGfGl0eb8cspvIl%2Bk%2FKuNn8BaNMTisqVIBOQc0TikyTh4VG8JUXUMUUp0%2Flv7sJA74PfQjEA6eSQM0VZEQ3hzPK%2BKeDnDsTJAT1m5VNBzfByCkSMxiJXKz5kHLtSqPSEGyYfZxzPzzEKkfdUhkrgmFC%2BJBOS1rA4H3aKwpLYhw5Jmo%2FosLDomGYB7BJm60E1XUpfl3XQLDz05dNxzjnr88IHlq7IpclprnuZulfigQoCghmoi%2FLmLkMMb48MQGOqUBnA68NPOb1C2eP1cEUAy4ACaXHpefyRbNnWFm6nEg%2Fb9237X4W0OV9Fh%2FO1itk7WtligMM7jafrc1pLWa4T%2F6w9Bn8NbNQSQn%2BXaz%2F78pcdsLdf8DU1umuRNnrnQdABTXhX3W6BH1AW8%2BKu9zF%2FGV3wF4OjL4jTWLMqFaLyuT6WM3k4SSsP73wP5B49GKGOTJxYg3%2BXrSfpgYtYfK2FwmOmYAA8Dy&X-Amz-Signature=622d56dbccb3441591fa2d043bd85fe05222de2e5ea0221c35bbfb062bb31da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
