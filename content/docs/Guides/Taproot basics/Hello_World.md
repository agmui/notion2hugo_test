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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQGF2D6%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgOldGWGjJGADyvYHdxaLbOIXxHv9PlUsAZ1Mh0ZzX%2FAiApuBe7cWItm5278%2Br98QjhJbq5Ib0ZrXBo70uCjqapEir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FAjzHiRzlOLKncUqKtwDjNxnKEQgjkO7Asr25Ir2lQzYMR%2FXuzfTbf17od8SrDTiK9S1mdMnHmTVaolkZ8GzMGjFrQXlm%2Fd2lSKYnAN3YEz9vOlSoI4hgVexJ89M6lx7nY6yCVuIBk%2BFw8ksFXP28I53kXeQe98mIl0vv87llMWmk%2BhrYpO9S74wBrJFLJwy8MkOZCRMJftYlSf5o34RfzzWW9OsoquG1mIyD8UMEdcUMDO3H2CF%2BlHsJ3qK8cIQRlA67OkKjNAtjnH8lAEXscliKbgCf%2FsHgEUvF%2BvBQFyzqKN5WC0IQFVAi47rGguzasW1k26%2Bf97A22vYW63%2FkPztlxB5aBz6XvCGCyPAdpCQXGap7YcChBClFjiHbJsPj3hwQGoeAbjDPMYT3GUa7j1l3%2F0J3BLetaucwj63YVU5pppufolMmq4%2FyqkY%2BGvmg5iWjswVPu2joGV9LI2zc%2FzksNcvims7VViCCTrEEPHiivv6OVFExJ76CFkYdk1Qz1mrUoP0UEZROqgEhwYUajL%2BKPapxuPY7dLjX7dD2IFwark06LTnGUw13SPbcSqj1tRvhLkI4tONbdFmUe5cwT%2F77%2F%2F5nZFNtpxNOShpqaYYWYPDsVh4L5W7U6vEfbmbfUS02hmvxmfeTFoww5ywywY6pgHV%2BcFIzPK9dNRD0%2F13ZLxqrRW5J%2FivCmL%2F50%2Fuw9s6zQyeFLa00XYcbn0eqcVwXCXzhY5M0dvL1A2vJDPZdGl2G0EkATx48nYPM%2F8RSoBXmn0beP0uXLtGCYNbOhCgIY8x%2B0WEAoI5Z5rhsXvDjiE3TdRwU0LkAkpF9iovVOn457emTs3NNxoUWh7Pv6WbmnDuKZatAK0SKHt2%2FeFNB9At%2FpJqJHwB&X-Amz-Signature=0cbaee999aa89aa0edd2b449c19dbe8bae49408d2f7701269c82038a513ab5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQGF2D6%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgOldGWGjJGADyvYHdxaLbOIXxHv9PlUsAZ1Mh0ZzX%2FAiApuBe7cWItm5278%2Br98QjhJbq5Ib0ZrXBo70uCjqapEir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FAjzHiRzlOLKncUqKtwDjNxnKEQgjkO7Asr25Ir2lQzYMR%2FXuzfTbf17od8SrDTiK9S1mdMnHmTVaolkZ8GzMGjFrQXlm%2Fd2lSKYnAN3YEz9vOlSoI4hgVexJ89M6lx7nY6yCVuIBk%2BFw8ksFXP28I53kXeQe98mIl0vv87llMWmk%2BhrYpO9S74wBrJFLJwy8MkOZCRMJftYlSf5o34RfzzWW9OsoquG1mIyD8UMEdcUMDO3H2CF%2BlHsJ3qK8cIQRlA67OkKjNAtjnH8lAEXscliKbgCf%2FsHgEUvF%2BvBQFyzqKN5WC0IQFVAi47rGguzasW1k26%2Bf97A22vYW63%2FkPztlxB5aBz6XvCGCyPAdpCQXGap7YcChBClFjiHbJsPj3hwQGoeAbjDPMYT3GUa7j1l3%2F0J3BLetaucwj63YVU5pppufolMmq4%2FyqkY%2BGvmg5iWjswVPu2joGV9LI2zc%2FzksNcvims7VViCCTrEEPHiivv6OVFExJ76CFkYdk1Qz1mrUoP0UEZROqgEhwYUajL%2BKPapxuPY7dLjX7dD2IFwark06LTnGUw13SPbcSqj1tRvhLkI4tONbdFmUe5cwT%2F77%2F%2F5nZFNtpxNOShpqaYYWYPDsVh4L5W7U6vEfbmbfUS02hmvxmfeTFoww5ywywY6pgHV%2BcFIzPK9dNRD0%2F13ZLxqrRW5J%2FivCmL%2F50%2Fuw9s6zQyeFLa00XYcbn0eqcVwXCXzhY5M0dvL1A2vJDPZdGl2G0EkATx48nYPM%2F8RSoBXmn0beP0uXLtGCYNbOhCgIY8x%2B0WEAoI5Z5rhsXvDjiE3TdRwU0LkAkpF9iovVOn457emTs3NNxoUWh7Pv6WbmnDuKZatAK0SKHt2%2FeFNB9At%2FpJqJHwB&X-Amz-Signature=d24ba9d641b4b932b8589624151f867a4b33e77ff018be5f3c6fd79fba15075d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
