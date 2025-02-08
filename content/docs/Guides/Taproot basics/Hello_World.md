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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5Z3Q4Q%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB%2BJIOEboBn8n0akOS%2FlO8xvS2F28E2ZDzLiLZBScySHAiB7QdoIFpZi2rqigOv5teWxtu0YYecU%2F4vpSo0qRdxhcyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJzd%2FrSNsOt0FWjmzKtwDCN%2Fi49mu4ImMYK3sEEb2F%2FfU1iNnXUF5SdbCZoCDLG9bgKhgZ8OsC1FE4KhQh3%2FpgRawC2CSJhvgE%2BMC%2BZ%2BXwKVXjUh06lvSUgvPdfEFcN%2BafAkG%2BFMcXb3lyZAMA3TJEQJ8YVBsLnLJTPxr7TsTgSv9MH9DNtULFCfFJ2OJgx17eZ%2FHG%2BoWqhZhSosAkSMogbr7FUHUjeOqi2GVZNcJA4e6%2BUq7WgP3yL9TfMWHltuMMZBRazvBr9YEO8iFmOGENLPuOEw3MtOdWR%2FGxni4RQCMnGdyn7DTyxmlvA3%2BuXz3ih6b9yPqWL1EQU76wc7MyY%2BylxTUgnB1kUSOzLvvFHs9WBjBPXNdjs5Okdgyh7B%2BoERmTu1m4uR3AbvPheIIz2X8UvBRZih605FAAhymKnz1mL9xKQYPCzmaQjlya3KKJWGWPeOm8LR881DfrRxLhfj1HHXkg%2Bc9e8GRoum4xT0TGvG5siDJ5V0Mejra78rNcGBx0lr0JQIu88%2FfTDm3iJ7m6MBYp1TgODnqPETaKpf%2FVjJ7rZ3D96noiDG2Sm1e8UYc%2F6o2V7N2b9eLcyiamfT5shYbGZN5sttAJbPvAk9uP%2FIK4JVxFY4T9zN9wl81NYNrbGOaL0IBckEwltWbvQY6pgHIgek4OfcpWRypGItgaa1JEPeszMOpDi5IA2b2svcJZtPqjTXSMOvAUXDyPBgErX0jpHDUgf6ltNfL5eXHU8mSUGCDnKu69Nr8KFrYP83iVJc%2FeEXkAQs5Vp53zjdC1115Os2ebJhSj3awYYluuhH%2BN%2BFrBuwWgkejK0YKginF5s4tHxktZBUWNC1%2B2GTAANGqQtTf1HRJ1AvIzu0Dxh5Z%2FFdh8x2%2F&X-Amz-Signature=579933708a615a1c26db65ee9a307a87eb58f17c9cccf855a932472205194533&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5Z3Q4Q%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB%2BJIOEboBn8n0akOS%2FlO8xvS2F28E2ZDzLiLZBScySHAiB7QdoIFpZi2rqigOv5teWxtu0YYecU%2F4vpSo0qRdxhcyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJzd%2FrSNsOt0FWjmzKtwDCN%2Fi49mu4ImMYK3sEEb2F%2FfU1iNnXUF5SdbCZoCDLG9bgKhgZ8OsC1FE4KhQh3%2FpgRawC2CSJhvgE%2BMC%2BZ%2BXwKVXjUh06lvSUgvPdfEFcN%2BafAkG%2BFMcXb3lyZAMA3TJEQJ8YVBsLnLJTPxr7TsTgSv9MH9DNtULFCfFJ2OJgx17eZ%2FHG%2BoWqhZhSosAkSMogbr7FUHUjeOqi2GVZNcJA4e6%2BUq7WgP3yL9TfMWHltuMMZBRazvBr9YEO8iFmOGENLPuOEw3MtOdWR%2FGxni4RQCMnGdyn7DTyxmlvA3%2BuXz3ih6b9yPqWL1EQU76wc7MyY%2BylxTUgnB1kUSOzLvvFHs9WBjBPXNdjs5Okdgyh7B%2BoERmTu1m4uR3AbvPheIIz2X8UvBRZih605FAAhymKnz1mL9xKQYPCzmaQjlya3KKJWGWPeOm8LR881DfrRxLhfj1HHXkg%2Bc9e8GRoum4xT0TGvG5siDJ5V0Mejra78rNcGBx0lr0JQIu88%2FfTDm3iJ7m6MBYp1TgODnqPETaKpf%2FVjJ7rZ3D96noiDG2Sm1e8UYc%2F6o2V7N2b9eLcyiamfT5shYbGZN5sttAJbPvAk9uP%2FIK4JVxFY4T9zN9wl81NYNrbGOaL0IBckEwltWbvQY6pgHIgek4OfcpWRypGItgaa1JEPeszMOpDi5IA2b2svcJZtPqjTXSMOvAUXDyPBgErX0jpHDUgf6ltNfL5eXHU8mSUGCDnKu69Nr8KFrYP83iVJc%2FeEXkAQs5Vp53zjdC1115Os2ebJhSj3awYYluuhH%2BN%2BFrBuwWgkejK0YKginF5s4tHxktZBUWNC1%2B2GTAANGqQtTf1HRJ1AvIzu0Dxh5Z%2FFdh8x2%2F&X-Amz-Signature=f99a4b562213a775cb5143bc04dfc7df495531767dce3167762abe48296b4a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
