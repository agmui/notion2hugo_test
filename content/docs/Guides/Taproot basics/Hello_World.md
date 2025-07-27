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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTV73PK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQC7ObE3nqFRoCa1G%2BL7jBvdcb%2F0Zcawn0Df1h87WvaAOAIgOi3UQlXGSMrbXMTJRJs%2FLy5k1vO2DnMhJ0g3z3cbc3cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFAq%2FrT5DXIURgLQ1SrcAxKl6Xl3u7KXmlKYwzdE7Mm4FDi%2B3LRIyphKYBfvdB1LKeVBCHw23Ntn96Z73arBQJlmYAwgJ3ETEMXmuSBRDd5HJqKWxO70VlUGIL0Rq0g%2BMSGwGkNvOwbceZt%2BCCAiOqYhqLSV2wWTUNL8uhO52UVd3PN3Tca6xgpiELfQlm1EHs6zMtxhQuycrVNklz96KAYfHbcPBFp5aUuvfv%2Bfqmmq7SltrMhHzM%2FK6aNXwDPS4F6YLJf12h4EyojC%2BKaAaaBJS3QG0xmuH5bjS0LM2vcNj3wVeNgYjuYixJQU2pE3v7tOjC38TbbJL5eu%2FR6Wscme9TCPopMRpUOarQS5FKdaoECWrhzaxevGxe6yeCG8WCgecet4TCaZGu7hjhYKf0GXgxAflq08w9Ek140aJfcPkM%2BZ0l0fpzMQDBfiZML7zMUHpR52ylFQOMWfpL4d9bELUsdKF8usQiyoUC3VajeQldIo1zwS1ekYqe6sqVtBHvD%2BBPjnzGEoB6L%2FQubw3m8Oi0NZ%2BKxD6CffodyLJ%2Fu1lz1T4kchUwMu9qmUsfEU3Hfr%2FlwBB9KAtGBz56DFd3wNBuzYaIh0rzt6HiSHkBMGGhIxZJDPuQJBoMl2OpdKqAqCLF6Go%2FV4upArMNDClcQGOqUBLtwPpC%2F5DjD6k7GvOE9EI%2BZd8RtXnw7baTE49HPjXTvOzbVNzCvKBJfcsHVAYnQrVQsOWRvkwY7sOH%2F6r%2BknVPMczPoD0ZlY1PLkCEe%2FzZpkp3bfX8QCgqoylL0IN7SadWGoC2BXPV0gqRe0qNH6%2BWs1RhHD1cCMruCj%2FR5FC3hcBvurPKZ36coDh5wVE%2FN233MkW2B%2FrDsCnvIeKEznyXCLjFoR&X-Amz-Signature=b4f91ff33c6a227b491d6e426b27e6e0cb90b7d098949571731549917c9d31b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTV73PK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQC7ObE3nqFRoCa1G%2BL7jBvdcb%2F0Zcawn0Df1h87WvaAOAIgOi3UQlXGSMrbXMTJRJs%2FLy5k1vO2DnMhJ0g3z3cbc3cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFAq%2FrT5DXIURgLQ1SrcAxKl6Xl3u7KXmlKYwzdE7Mm4FDi%2B3LRIyphKYBfvdB1LKeVBCHw23Ntn96Z73arBQJlmYAwgJ3ETEMXmuSBRDd5HJqKWxO70VlUGIL0Rq0g%2BMSGwGkNvOwbceZt%2BCCAiOqYhqLSV2wWTUNL8uhO52UVd3PN3Tca6xgpiELfQlm1EHs6zMtxhQuycrVNklz96KAYfHbcPBFp5aUuvfv%2Bfqmmq7SltrMhHzM%2FK6aNXwDPS4F6YLJf12h4EyojC%2BKaAaaBJS3QG0xmuH5bjS0LM2vcNj3wVeNgYjuYixJQU2pE3v7tOjC38TbbJL5eu%2FR6Wscme9TCPopMRpUOarQS5FKdaoECWrhzaxevGxe6yeCG8WCgecet4TCaZGu7hjhYKf0GXgxAflq08w9Ek140aJfcPkM%2BZ0l0fpzMQDBfiZML7zMUHpR52ylFQOMWfpL4d9bELUsdKF8usQiyoUC3VajeQldIo1zwS1ekYqe6sqVtBHvD%2BBPjnzGEoB6L%2FQubw3m8Oi0NZ%2BKxD6CffodyLJ%2Fu1lz1T4kchUwMu9qmUsfEU3Hfr%2FlwBB9KAtGBz56DFd3wNBuzYaIh0rzt6HiSHkBMGGhIxZJDPuQJBoMl2OpdKqAqCLF6Go%2FV4upArMNDClcQGOqUBLtwPpC%2F5DjD6k7GvOE9EI%2BZd8RtXnw7baTE49HPjXTvOzbVNzCvKBJfcsHVAYnQrVQsOWRvkwY7sOH%2F6r%2BknVPMczPoD0ZlY1PLkCEe%2FzZpkp3bfX8QCgqoylL0IN7SadWGoC2BXPV0gqRe0qNH6%2BWs1RhHD1cCMruCj%2FR5FC3hcBvurPKZ36coDh5wVE%2FN233MkW2B%2FrDsCnvIeKEznyXCLjFoR&X-Amz-Signature=4f4825cf263fd93bad6f3001760d25d3340f558741f9dfba10d81919167a5a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
