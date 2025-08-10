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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FTHOXB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWQ%2BqogP7y0WaglWbiW29VnqAej%2BSNIfVmVEDUiBbs4AiEAnA9KDzQ1SnXB8Qpu4b0P0d%2Fx9I86sI92286i2%2BciM4AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIywnW4ErLHZns4FcircA5hegnKdMACYJHDDIRdYVrXfuz0grWcL1%2FzZI76%2BrmNeScVifHWr7T3CWRytiPtcMkay8UDQ3Hh%2BmTQ6pIYS12us2ytDZXirb2SAK9JWL3ndLeVTFFVV%2BC7hWgfDmXwiNDUawE2tW6PtrcGmNP36h10DfvtInpXiwitkLBvvtRvZq7A7YnBr4Mv7Ym0N%2FoHsgMwr7VK17TdvJ3Qxh2X5EpiHH7QxEopFCQVZoxO3TzgM1%2BlpYYARZrEuuVO6E8Uiiz6XuqhdcdFgG0WpqFUzj1Tq4YqBv5ugBCGk%2BNThmQRQ5bSVVSwpJhKXl1YN%2FqM0QEU0bVNPNIgHR1Ow%2B%2F7%2FurfFAUwNd6N6CuJ%2BoeG7bprKqSnp6Ny6StyM1nC%2FbvhgCqJZUWnmr08XFopmd%2B4iZvLwuIk7Su%2FtJJlcrTcxXltHtSGRkNanr4vpYaElggKEGe1%2Fuo%2ByfXxmHSE9Xrbxw4zh0Fu75B%2B9kydQjEfrRKd%2BxFkY8ZRfox%2FOzPshQqj9tcE9EM%2F0AcIHYJtyInXmFtxh1Z6xHs6zzmwcVV7T22jmZx3Rgxyxmf0d1VcHYuws6ZpxuXFysy2qiBYd20GSVnLHeOlJ9ODzYLW4WWUfk%2BF1O1FoUVOrI7F72didMOO648QGOqUBsZyjgPPblOIMYrMzl%2FBs0eCVDywLZHf2YFem1vtrtVMFPoaaJJpnp1D3AowN4sURw%2BcaXx7z4Vp4%2B44b7oceVBpKtTQi6lhZ0BPAwSOP%2BuIVYKlw4cei4SeI%2BlNGRKVZ25xqwtLhjMPMwAbDYJ0OfXfdZ0d8oq0Eix8Kjm%2BttVOwP6qfBuhM85Y8PJ%2FZoaKg9KAhNfJ4q7noTjEquJFixH4j1ZBO&X-Amz-Signature=8e732084b64ccc33fcd1bce2357e5c0a232b7d117ce51ee1268e7d83a9937623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FTHOXB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWQ%2BqogP7y0WaglWbiW29VnqAej%2BSNIfVmVEDUiBbs4AiEAnA9KDzQ1SnXB8Qpu4b0P0d%2Fx9I86sI92286i2%2BciM4AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIywnW4ErLHZns4FcircA5hegnKdMACYJHDDIRdYVrXfuz0grWcL1%2FzZI76%2BrmNeScVifHWr7T3CWRytiPtcMkay8UDQ3Hh%2BmTQ6pIYS12us2ytDZXirb2SAK9JWL3ndLeVTFFVV%2BC7hWgfDmXwiNDUawE2tW6PtrcGmNP36h10DfvtInpXiwitkLBvvtRvZq7A7YnBr4Mv7Ym0N%2FoHsgMwr7VK17TdvJ3Qxh2X5EpiHH7QxEopFCQVZoxO3TzgM1%2BlpYYARZrEuuVO6E8Uiiz6XuqhdcdFgG0WpqFUzj1Tq4YqBv5ugBCGk%2BNThmQRQ5bSVVSwpJhKXl1YN%2FqM0QEU0bVNPNIgHR1Ow%2B%2F7%2FurfFAUwNd6N6CuJ%2BoeG7bprKqSnp6Ny6StyM1nC%2FbvhgCqJZUWnmr08XFopmd%2B4iZvLwuIk7Su%2FtJJlcrTcxXltHtSGRkNanr4vpYaElggKEGe1%2Fuo%2ByfXxmHSE9Xrbxw4zh0Fu75B%2B9kydQjEfrRKd%2BxFkY8ZRfox%2FOzPshQqj9tcE9EM%2F0AcIHYJtyInXmFtxh1Z6xHs6zzmwcVV7T22jmZx3Rgxyxmf0d1VcHYuws6ZpxuXFysy2qiBYd20GSVnLHeOlJ9ODzYLW4WWUfk%2BF1O1FoUVOrI7F72didMOO648QGOqUBsZyjgPPblOIMYrMzl%2FBs0eCVDywLZHf2YFem1vtrtVMFPoaaJJpnp1D3AowN4sURw%2BcaXx7z4Vp4%2B44b7oceVBpKtTQi6lhZ0BPAwSOP%2BuIVYKlw4cei4SeI%2BlNGRKVZ25xqwtLhjMPMwAbDYJ0OfXfdZ0d8oq0Eix8Kjm%2BttVOwP6qfBuhM85Y8PJ%2FZoaKg9KAhNfJ4q7noTjEquJFixH4j1ZBO&X-Amz-Signature=b0611d3246d0b0edcb3e439ad71c4963c016b9b9b0fddc79c7f449558bb2b5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
