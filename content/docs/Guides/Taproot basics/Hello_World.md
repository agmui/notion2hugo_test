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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DL4UUX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJcIvLVqZOGVk%2BhAW%2FcEXoJ0m4pc%2F%2BcgwAyxOh0LZSAiEA9GoL3BfyZflotm5jYbvEI0tHV4Y5jsfOoajSJpl12rQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWSiZnKw2EaBwxbICrcA2No5a1p7ij%2FFMv9eXYP2rXyjDH%2Bt0rWel4BcnWsZX6iFN5DIDGuy%2FsPyqK8KARBKaUE%2FOuZZubXuCYtCZveKhFLDQE9JO2MJ%2BU5B4XMN0eHTgYR1yd6z2wYV3K84STBYpajdVz%2FizBkXCg%2FqdY7CooFuVtWDragbt2bo2Kj6EZrRtPnABMxjd6Yd6d1vgY%2B7NkoWzqEB9%2BmEIXtKQYKQZ7V1Bz2vVEJBQsG%2BrezpcMa7Vc%2FOwED6E0IxfqR%2FVXoXZnpQZpFbc8xrHK%2BcRqAux3MccIDVofyUpM8oI8vKgRK6gDsaI9bEKScY%2FgfuEx%2B4ssGgg4PDADdqom0PlS9GXSzWJY4f3bRPSqW90%2BycCYQhOTU%2BZlEz4YazOKfV8Nm0TEsYASiuitiuSnXhq8I0pvrf6HembNgf3lkleHYoaAgVRSDxWFEZ542FETHWFsEZuK0n4BzOjC6WqlOCQoPPAfXyxsHxgjV770OMDoStlM%2B2nSXM6M7mov%2F6a2WLSAusVC%2B%2F%2B0EqjEcLuJqZqBiy0iO4lE3h6ZsPWDgSpjFasnuqx%2BgIQEPIU083xNh6ziOk5OStMTx72WRpWAdX46fBYDuB27Ejj3ZnPtMkYhn2i7Ph4iuWVLVtj%2FVTw9BMLXJk74GOqUB2y6GQYi6WLm9JLon2HhUbkFpC%2Bk2DqDz1yiylXgfSgLKJ2nPTemp6%2BGvHwz7Zs7pqb3M%2FvWVZp0Bpl1u9RXilMuvqwbNF5d2g0fMSLlQ3wi3oAESwQt8NTgLgOYhAJhc%2FVHho6jUCB92VMqcJX88BzImpt9T9oqZUOrS8%2FN5b4IL7NyxgJHKVOaKNS8CZMqU61ujIN5%2BsokbJR%2FYin246Zaiq64W&X-Amz-Signature=ed0f882f7f595829ba7e22a95582488858da69f1aa29f95e34687b660765a720&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DL4UUX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJcIvLVqZOGVk%2BhAW%2FcEXoJ0m4pc%2F%2BcgwAyxOh0LZSAiEA9GoL3BfyZflotm5jYbvEI0tHV4Y5jsfOoajSJpl12rQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWSiZnKw2EaBwxbICrcA2No5a1p7ij%2FFMv9eXYP2rXyjDH%2Bt0rWel4BcnWsZX6iFN5DIDGuy%2FsPyqK8KARBKaUE%2FOuZZubXuCYtCZveKhFLDQE9JO2MJ%2BU5B4XMN0eHTgYR1yd6z2wYV3K84STBYpajdVz%2FizBkXCg%2FqdY7CooFuVtWDragbt2bo2Kj6EZrRtPnABMxjd6Yd6d1vgY%2B7NkoWzqEB9%2BmEIXtKQYKQZ7V1Bz2vVEJBQsG%2BrezpcMa7Vc%2FOwED6E0IxfqR%2FVXoXZnpQZpFbc8xrHK%2BcRqAux3MccIDVofyUpM8oI8vKgRK6gDsaI9bEKScY%2FgfuEx%2B4ssGgg4PDADdqom0PlS9GXSzWJY4f3bRPSqW90%2BycCYQhOTU%2BZlEz4YazOKfV8Nm0TEsYASiuitiuSnXhq8I0pvrf6HembNgf3lkleHYoaAgVRSDxWFEZ542FETHWFsEZuK0n4BzOjC6WqlOCQoPPAfXyxsHxgjV770OMDoStlM%2B2nSXM6M7mov%2F6a2WLSAusVC%2B%2F%2B0EqjEcLuJqZqBiy0iO4lE3h6ZsPWDgSpjFasnuqx%2BgIQEPIU083xNh6ziOk5OStMTx72WRpWAdX46fBYDuB27Ejj3ZnPtMkYhn2i7Ph4iuWVLVtj%2FVTw9BMLXJk74GOqUB2y6GQYi6WLm9JLon2HhUbkFpC%2Bk2DqDz1yiylXgfSgLKJ2nPTemp6%2BGvHwz7Zs7pqb3M%2FvWVZp0Bpl1u9RXilMuvqwbNF5d2g0fMSLlQ3wi3oAESwQt8NTgLgOYhAJhc%2FVHho6jUCB92VMqcJX88BzImpt9T9oqZUOrS8%2FN5b4IL7NyxgJHKVOaKNS8CZMqU61ujIN5%2BsokbJR%2FYin246Zaiq64W&X-Amz-Signature=44847cd14efc15c3ba0ec09bbfda0197b7251ee177e0215e4845eb30f29a7822&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
