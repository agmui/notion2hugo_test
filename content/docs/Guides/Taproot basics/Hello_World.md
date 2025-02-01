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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSFOPOG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS7Hmq%2BB%2BYOMw0QCoEN9OBpPb1iOXbzmbmIvZieMmNwAiEA3e9NXCCDkGOckA1FObvrxnAwizDuwx0H1BQHMMljMMAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F96kna18nMrGVvzSrcA%2B4p91DFjo8Oj1T6Ldx%2FQHPRnNvB%2BBM8ma%2BmpEBEO%2BIUwDLuJ6%2FaJbcfoyG3PGOyq1LBnDm%2FQa6gTodMU5SEDbZYwVbOY5KRCuuOP5hItEB01qb%2BU%2F5ebPtSlaRXt63AtJpAxyO7MaL%2FZE%2B7dV4AVZ3jpk3Idy1NK5YFitlcccPP%2B2V%2BAhhirhUqRTK3x2Ajd3h7tVyi0MgOPQWcXX0cz7Z2yDK9jMhzihuMKCd0Ud0hkULFuHPcZdh%2BeoKKR2b%2BtlGpdUu6mztdgb3gwYpl%2FClk1QD8D7cy1LNsGbT80baFiTS%2FzEjfzHFREkarBh5vv%2B9VIHtty3mamu4UTurnGyI4b79DctzJ9K0IlDPqUsSNV0V0gTm3ZtnYhg3E90efJrXubCZ64WMIBBC5I1OF2ngFo6P%2FxyEKCSwPyRQQeMJIAONPwSbGwbRmC6tm%2FieeRNyGLcT1%2FWW0nJ%2BAn%2FLnyW0skEr52yxlD6g%2FELtprMn8zdZ%2FfnBsXtVK7ahd40ATu8tC1TJWXngKmdP3HN3GeGrzjKEVCGqL3t%2F6VI8CI2KZEJOdn4gDBJyUUYbwgsTHk8fmH5%2FabLok5u6zeNFB7voZQYISB4ZGBeaDPCMlE1m%2FXfkNIC4ISvm7jKQIMI%2Bm97wGOqUBZ8l%2F%2BvSEzvrHmZ5tStSZk%2B2dmb8b42Matn0ut5HRZcr2CMiKAe1Qh07RLnhiVrR%2BKUAt7kYxxQMV3lyK%2Fii2zaSwuuGwy%2B7mTted8gdQ8R6FgGEoET9yvi8W2zH8uvmc7ZWvP9CRki9Qx2y8TIZ4W2PD0y5hRnAPHNzp2y6HVv0rb5LTq%2BkNpmdOy3%2FWxNP4uyNke2pjSIfnK7%2FfCqpBtTbru6b1&X-Amz-Signature=dbfdccb4bfb9930ce8e9d05ad730b7593499d570634d32d811fee087c2d86a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSFOPOG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS7Hmq%2BB%2BYOMw0QCoEN9OBpPb1iOXbzmbmIvZieMmNwAiEA3e9NXCCDkGOckA1FObvrxnAwizDuwx0H1BQHMMljMMAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F96kna18nMrGVvzSrcA%2B4p91DFjo8Oj1T6Ldx%2FQHPRnNvB%2BBM8ma%2BmpEBEO%2BIUwDLuJ6%2FaJbcfoyG3PGOyq1LBnDm%2FQa6gTodMU5SEDbZYwVbOY5KRCuuOP5hItEB01qb%2BU%2F5ebPtSlaRXt63AtJpAxyO7MaL%2FZE%2B7dV4AVZ3jpk3Idy1NK5YFitlcccPP%2B2V%2BAhhirhUqRTK3x2Ajd3h7tVyi0MgOPQWcXX0cz7Z2yDK9jMhzihuMKCd0Ud0hkULFuHPcZdh%2BeoKKR2b%2BtlGpdUu6mztdgb3gwYpl%2FClk1QD8D7cy1LNsGbT80baFiTS%2FzEjfzHFREkarBh5vv%2B9VIHtty3mamu4UTurnGyI4b79DctzJ9K0IlDPqUsSNV0V0gTm3ZtnYhg3E90efJrXubCZ64WMIBBC5I1OF2ngFo6P%2FxyEKCSwPyRQQeMJIAONPwSbGwbRmC6tm%2FieeRNyGLcT1%2FWW0nJ%2BAn%2FLnyW0skEr52yxlD6g%2FELtprMn8zdZ%2FfnBsXtVK7ahd40ATu8tC1TJWXngKmdP3HN3GeGrzjKEVCGqL3t%2F6VI8CI2KZEJOdn4gDBJyUUYbwgsTHk8fmH5%2FabLok5u6zeNFB7voZQYISB4ZGBeaDPCMlE1m%2FXfkNIC4ISvm7jKQIMI%2Bm97wGOqUBZ8l%2F%2BvSEzvrHmZ5tStSZk%2B2dmb8b42Matn0ut5HRZcr2CMiKAe1Qh07RLnhiVrR%2BKUAt7kYxxQMV3lyK%2Fii2zaSwuuGwy%2B7mTted8gdQ8R6FgGEoET9yvi8W2zH8uvmc7ZWvP9CRki9Qx2y8TIZ4W2PD0y5hRnAPHNzp2y6HVv0rb5LTq%2BkNpmdOy3%2FWxNP4uyNke2pjSIfnK7%2FfCqpBtTbru6b1&X-Amz-Signature=f697733b87d20d53432124aa6c3b49315e34102b2e819cf8935f06ce7530d0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
