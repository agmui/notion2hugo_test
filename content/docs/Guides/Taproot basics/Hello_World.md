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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU5SRLJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7qIWN%2FblNqlHYx3bvKc4fsJGdFGhjnIl5GmjKgfrCFAiEA25gvuXuiThfflBgyB9CjHpY2yw1lSe3sTGgxOiy96oUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDLtcbq%2BPaWenwRw5OyrcAz4wamrqOoc304T8%2BQyLwMAM0fxaRgxoHwvCcSUIpQBVYxxPrxa6%2F0vvNAlgjt546ABLd1qMdiFnWaexfct%2FrmSyYZQKBFRnuGiaTsc2E4emaoRD7ZHNW3kNx4iQMlIk4FFBt4wxiHDT52PmzwlR4lW2oHBRznIXigtmQKdYvIK86PDcCSuih74Aa7eG9JVV3b9ZPxaOh7cY94R2sKY2jYs30F7LtsfzjeHt8NO2wT6allAn7dkC1O%2BO73m1kIurYurQicvqXuPgwZtXQ%2Bv4R%2BQ3nmN3MVdGSx1pJSg4G5khrep%2FtAs0BsbnJFF9dfw3t6B2ecQ2JQQ7jje28lWsb7IISKr4xAxXML%2FzCklFLOi%2BWL9KBrkP4MDGuVP37bLaKyX3h7hVbdlW2mf1nIRziuqq6cxChf6J2mXVqdgizu5QEBF740%2FSNfIoQIY4iFJJtj6SQ4dlqaT84gojrQhEJwHkCLnRqquyB9N%2BJzSEpMn%2Fd71oGQ1Mi0CfY9nB5nsAYASJ0pOhG6RxQKEGqj0mNtbM5zoKDB4eDmaf4AM9tKq2sW8nQXgm%2FeZC3gUiLrRO%2B2LiZ9f9FYrWWbko8ThV3TQzfjmS%2BE82%2FTAO%2FHc4GMeZNijqZ7HOa5dsZgTtMJao9L8GOqUBQNF0x8TTxvFZMwWXAIwjGhg4L5xj%2BZqvZc968qfesQAoZDVlXE6lCnBLQvvHZldzINIjR2Sl84f4%2F2oT6CerJ5MRXWptywSk9WyNHfEoPJSPco5HV1yylxoVW1xEXeJFpUQr9bntMR5jcY36taNKS7MmcafOiMzZOmApz99y0plSy1Lac3j8Fvj8GcKDtWntkgPN0A5DngJQDCp%2Bh214SXN5GqAx&X-Amz-Signature=7be125c8059feae3bb5a2cdef4991ca727fcf9630e0e07a6e622330250ee7440&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU5SRLJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7qIWN%2FblNqlHYx3bvKc4fsJGdFGhjnIl5GmjKgfrCFAiEA25gvuXuiThfflBgyB9CjHpY2yw1lSe3sTGgxOiy96oUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDLtcbq%2BPaWenwRw5OyrcAz4wamrqOoc304T8%2BQyLwMAM0fxaRgxoHwvCcSUIpQBVYxxPrxa6%2F0vvNAlgjt546ABLd1qMdiFnWaexfct%2FrmSyYZQKBFRnuGiaTsc2E4emaoRD7ZHNW3kNx4iQMlIk4FFBt4wxiHDT52PmzwlR4lW2oHBRznIXigtmQKdYvIK86PDcCSuih74Aa7eG9JVV3b9ZPxaOh7cY94R2sKY2jYs30F7LtsfzjeHt8NO2wT6allAn7dkC1O%2BO73m1kIurYurQicvqXuPgwZtXQ%2Bv4R%2BQ3nmN3MVdGSx1pJSg4G5khrep%2FtAs0BsbnJFF9dfw3t6B2ecQ2JQQ7jje28lWsb7IISKr4xAxXML%2FzCklFLOi%2BWL9KBrkP4MDGuVP37bLaKyX3h7hVbdlW2mf1nIRziuqq6cxChf6J2mXVqdgizu5QEBF740%2FSNfIoQIY4iFJJtj6SQ4dlqaT84gojrQhEJwHkCLnRqquyB9N%2BJzSEpMn%2Fd71oGQ1Mi0CfY9nB5nsAYASJ0pOhG6RxQKEGqj0mNtbM5zoKDB4eDmaf4AM9tKq2sW8nQXgm%2FeZC3gUiLrRO%2B2LiZ9f9FYrWWbko8ThV3TQzfjmS%2BE82%2FTAO%2FHc4GMeZNijqZ7HOa5dsZgTtMJao9L8GOqUBQNF0x8TTxvFZMwWXAIwjGhg4L5xj%2BZqvZc968qfesQAoZDVlXE6lCnBLQvvHZldzINIjR2Sl84f4%2F2oT6CerJ5MRXWptywSk9WyNHfEoPJSPco5HV1yylxoVW1xEXeJFpUQr9bntMR5jcY36taNKS7MmcafOiMzZOmApz99y0plSy1Lac3j8Fvj8GcKDtWntkgPN0A5DngJQDCp%2Bh214SXN5GqAx&X-Amz-Signature=3e7982e4822abb33d83ed3846871529d49e7777ece9885c8c8fb213b1a45fbad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
