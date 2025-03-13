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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZU7T6L%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFxiFwRc9BWCdz9Mmb%2FpBf%2Fny50tbm6fjKb2RD7n5vIAIgU1KweWOlEmT%2FFR4w0C%2F7K8ljxL94XKqAyMjMccvA7rgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8trUIfa8HoAvK5uyrcA44UpAdggE%2BA6bQv%2Bw7ZLtH1WC2JOnrFIhLzObeqBaXJvVeJkKNP6zrCfPWYJYMUSZBstk%2BOryBP%2BZpZzg6V%2F9GHCfBDiU62usIfOem1vc2Ay7bzPMxhojGaJcpltRPpcVQaA6dTakRLZcJnS4kt3m4StU8dDrL4SJbGOlm1V%2Fejz3PCvA4MgfrMYeNfXbvMo2jj4EJGcEitxmy1XH9%2FT3ByKYBVf7h%2FYvHWr2OYDGfiwJ0WrY5GdTWgL0DEHb2PYoUtlYkQFdOQoE%2B2HuCAs1H4iljk1basA9r0jTsYgq1qn2Bu0IfduchT0Wf1lW83yoKMblzCcThQ5DS2PW%2B4Hg04LGQZwKR6DxPdr3OICO2S2TA9MkoaUTu1RMJMxuLZtehv%2BWI6utJxyjU06vmmrHgVNfVGN%2FdeIHyvA5045TY72QDYDXCYlw9ARNAZeUOqoBD6cxhIrDQcPKVOT%2F3uOZOgitIhKP1zoU1s4tBTAhpaDoaJ9LSS%2FD%2BEZv9JCndi9Hw1NkN4cMce5BceuNKW0wNhTZ9ZBU60I3yrIBe92iK8vfWecYGlzybqJ%2BfLtUA%2FChcAf4wBIGeW8X4V9xcE8G5mG0EBuTFIeUeYhBnewgup4NgqXpwwNl0bBvHHMLr2zL4GOqUBhIQ2Ntu1yf78hMEy0iFUP01u5loiYGmyoRd7%2B9nuVNYLjGPmfzwlmscZNs0CnZn3m81IGG7JL%2Bsy%2B8s3AkLhqVCPTAhlAqPdizAg8FGJkgXFjb0GLCzf%2FqdUYzSSbRa8kBaix0fQHo0U2fiiRp%2Bv1%2Fle1PyesojLIwmECGd6NFCagQ7ASYKaU%2F1bq0R4yE9x%2BMfJZvefCCfAAcG%2Bz4F6aA0Z4D2k&X-Amz-Signature=fd32f214d5e7b41f495d9828d17b1646696f9162368dda380be0a03652032bac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZU7T6L%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFxiFwRc9BWCdz9Mmb%2FpBf%2Fny50tbm6fjKb2RD7n5vIAIgU1KweWOlEmT%2FFR4w0C%2F7K8ljxL94XKqAyMjMccvA7rgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8trUIfa8HoAvK5uyrcA44UpAdggE%2BA6bQv%2Bw7ZLtH1WC2JOnrFIhLzObeqBaXJvVeJkKNP6zrCfPWYJYMUSZBstk%2BOryBP%2BZpZzg6V%2F9GHCfBDiU62usIfOem1vc2Ay7bzPMxhojGaJcpltRPpcVQaA6dTakRLZcJnS4kt3m4StU8dDrL4SJbGOlm1V%2Fejz3PCvA4MgfrMYeNfXbvMo2jj4EJGcEitxmy1XH9%2FT3ByKYBVf7h%2FYvHWr2OYDGfiwJ0WrY5GdTWgL0DEHb2PYoUtlYkQFdOQoE%2B2HuCAs1H4iljk1basA9r0jTsYgq1qn2Bu0IfduchT0Wf1lW83yoKMblzCcThQ5DS2PW%2B4Hg04LGQZwKR6DxPdr3OICO2S2TA9MkoaUTu1RMJMxuLZtehv%2BWI6utJxyjU06vmmrHgVNfVGN%2FdeIHyvA5045TY72QDYDXCYlw9ARNAZeUOqoBD6cxhIrDQcPKVOT%2F3uOZOgitIhKP1zoU1s4tBTAhpaDoaJ9LSS%2FD%2BEZv9JCndi9Hw1NkN4cMce5BceuNKW0wNhTZ9ZBU60I3yrIBe92iK8vfWecYGlzybqJ%2BfLtUA%2FChcAf4wBIGeW8X4V9xcE8G5mG0EBuTFIeUeYhBnewgup4NgqXpwwNl0bBvHHMLr2zL4GOqUBhIQ2Ntu1yf78hMEy0iFUP01u5loiYGmyoRd7%2B9nuVNYLjGPmfzwlmscZNs0CnZn3m81IGG7JL%2Bsy%2B8s3AkLhqVCPTAhlAqPdizAg8FGJkgXFjb0GLCzf%2FqdUYzSSbRa8kBaix0fQHo0U2fiiRp%2Bv1%2Fle1PyesojLIwmECGd6NFCagQ7ASYKaU%2F1bq0R4yE9x%2BMfJZvefCCfAAcG%2Bz4F6aA0Z4D2k&X-Amz-Signature=b84e762e7663c11dd47a3e60d594e1b92feda81c129121d29a21c0d042688db2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
