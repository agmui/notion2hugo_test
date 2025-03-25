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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSR75S6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWkn5PAikG6iDZP2eVkCu531DHt9WU7N8DcZu3ncPsAiEAh70Oti8Fb1K%2B4JKCPQtoVJ4BXXgkNF0EZffRFAwE39sq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJiGkcjxS4eLXcga%2FCrcAyb7M6XexvlLPWTGsDIW0YcEz4R3BJ1fzCdUY2zRaNVXUB5I8tj2fVaKsGKsNmIcGIhprZY7MfLhviLSOKpk1OHJ%2FuiHmYmMNWUTDwRi4AZSKjLlR3PbwCtCXxbZdXrPnzJatRzJKGAaNGrIhZpdrx8eEAtlkreTurPs%2Fsef09kYKcMC4QI77rQtAB2fW0u7qbAIcUIOOqt5ZBdIZXc%2BUXEI5JsgT%2BPmyTBsqfLLMAsbnwhUgokAIpVeFnJnXmXJLPtuWPkc9zCMy1FSRGFIf4Vg6AxTM9T5ntKmQwgLtw0nFBU1fI1rvg2gThZv3h8%2FIU%2B%2Bvskg8dG4Imdqo%2FbulJHl7yhx%2Bo9ch%2Ff5oyiHIvXtFnCUNbDLWGpuz1CfIkdmUiDi3S%2FmqqX9s4kyTb9hFkAxqluDd41JqEIoBxO2esyvu%2BZpv14DYvzt18vKcQinba1xP1DZVJUPTfcp5iW14tJZkYMm5Nc7ggbo9%2Fmlr7qhr5qual3i8PqOKsqdtBAobIniRX5VH6jGOQNux%2Fdo38tyVzo3OGyI2oOkMtcJ0ipf79Db33%2Bk4zaOhHWuqpYnl20GQ7ggIirUzhL954JuvHzuOD4NKGSdxizM3cJaSyRVVARcXAIABCesoPCJMPWJir8GOqUBO9TkV6J%2Bk8c53pCTqRJtqXJrLtFeuCss9B9ez6QME7zgqSjXO0t3bDhNOPNM%2FIydw5MDPeFtLklCBVLVvWEp61SRxul9kd4NN3TxnyIAPSQuc0tKuPICPZuFmZQ3z5lHQLC%2B8kLpIh5AiyW8%2BII3Gfh7WMIcpEx1X38pgBMzg%2FPN8%2F0rKhnPS7pDPeSnljucP2PLdPRGaYf2e0yN2FLmWCtwub1a&X-Amz-Signature=38b88e4eab023f543ba5a4d79bf75cc23bf9ef5996c292cfd792ca218047b7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSR75S6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWkn5PAikG6iDZP2eVkCu531DHt9WU7N8DcZu3ncPsAiEAh70Oti8Fb1K%2B4JKCPQtoVJ4BXXgkNF0EZffRFAwE39sq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJiGkcjxS4eLXcga%2FCrcAyb7M6XexvlLPWTGsDIW0YcEz4R3BJ1fzCdUY2zRaNVXUB5I8tj2fVaKsGKsNmIcGIhprZY7MfLhviLSOKpk1OHJ%2FuiHmYmMNWUTDwRi4AZSKjLlR3PbwCtCXxbZdXrPnzJatRzJKGAaNGrIhZpdrx8eEAtlkreTurPs%2Fsef09kYKcMC4QI77rQtAB2fW0u7qbAIcUIOOqt5ZBdIZXc%2BUXEI5JsgT%2BPmyTBsqfLLMAsbnwhUgokAIpVeFnJnXmXJLPtuWPkc9zCMy1FSRGFIf4Vg6AxTM9T5ntKmQwgLtw0nFBU1fI1rvg2gThZv3h8%2FIU%2B%2Bvskg8dG4Imdqo%2FbulJHl7yhx%2Bo9ch%2Ff5oyiHIvXtFnCUNbDLWGpuz1CfIkdmUiDi3S%2FmqqX9s4kyTb9hFkAxqluDd41JqEIoBxO2esyvu%2BZpv14DYvzt18vKcQinba1xP1DZVJUPTfcp5iW14tJZkYMm5Nc7ggbo9%2Fmlr7qhr5qual3i8PqOKsqdtBAobIniRX5VH6jGOQNux%2Fdo38tyVzo3OGyI2oOkMtcJ0ipf79Db33%2Bk4zaOhHWuqpYnl20GQ7ggIirUzhL954JuvHzuOD4NKGSdxizM3cJaSyRVVARcXAIABCesoPCJMPWJir8GOqUBO9TkV6J%2Bk8c53pCTqRJtqXJrLtFeuCss9B9ez6QME7zgqSjXO0t3bDhNOPNM%2FIydw5MDPeFtLklCBVLVvWEp61SRxul9kd4NN3TxnyIAPSQuc0tKuPICPZuFmZQ3z5lHQLC%2B8kLpIh5AiyW8%2BII3Gfh7WMIcpEx1X38pgBMzg%2FPN8%2F0rKhnPS7pDPeSnljucP2PLdPRGaYf2e0yN2FLmWCtwub1a&X-Amz-Signature=6de95c20ce82724049b64d71eab2495efd8e3389eaecdd3ec5639406d3ee0b36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
