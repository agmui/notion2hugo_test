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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4A76CWO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBNrcV2pc1zDdfkHXVhkCQuCFZtRMQ1JDn%2Fcz2AcNKLTAiEA72wfvQwtIvmaXSwsJXutNwNU13xdEtAEVDldZgUacG0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDH1%2FRWC90Nxn500%2FoCrcA73iLzYxYktasHfwIMTjM%2Fs0OAv7W%2BA3jNLzXXWgjgUQ2M2HFFLiB17fGR%2Fx0MudTomOdol%2B6FaiwpUmj8oa9l4LasBOxKyh4V21R3%2F3qo9DZFbXv%2BN7rJm5DR549uDKYj1uGwUYlzQZNgVoV6n51kw8t0PHmbhE8NKc2ficD8JeC0XWPtD5PI8s8DwahRGoZdcjtSw0xIkhkrn%2BaMZUUg5IXIk63B97fiR667ncIKxz7oOLUZKIyn%2BYSmHmPTdfxadnRk3xXPtI%2FklFczoLBusJWBy9SatLI4UbSQxPOTpxiaBMnxc%2F553k9pxSu6A4WLRF%2BVh6wVE%2F5VfgRr9HN2UcrNrTIgvDN0HnC3Vt6%2FLmVxxDKyPoS0xsFn8N5CdgwfKl%2BXv%2FyFIU4H3lrQO5%2FH4Jq4w%2FUCEdHM4FIukExPZJRAhJbVSMvhIAJtg%2FiYqhmd9bdOaVr8CS2PZE3J3Kw%2B5ppe0AIPK%2BexPLV8iLEaCq3DbmHCVe3GxI1PeHjNS7cdWJSPdZIUtSeAOjGw%2FUxgcKyMbVci8YGDbkEg36odEofxyLJapq3J0ZkDpklgNZmzmqVhDnHX4yCHto08qPL9A6gqHt54IOYb4whRjVlQErDz5TXcguXLJdmkDWMLTSgr4GOqUBGopQ5llN2eM4f%2BakokSne9hNn4loU74ME%2B1nom%2BAXfP%2FOyvroBZ%2Bls%2BnSWmqtCpJ9RLZv3wFbUAClxkVUxLPigVkZrbu9ZK2hzAb7hZ4wRuMOhmbocg9gQukRCtezHc4o9OpixjErvVm8364o90a2BNhrVKBptxedHzPN2I1Ru%2F%2FG4QwrlOe4r4BEBTfaYs5FYcOLSOvS0g2nVyNDbN%2F1eTx8VGM&X-Amz-Signature=b06709cfd6de2d1ce8e814fc575717828f34b4c5b298ab28d1da96502611cd98&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4A76CWO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBNrcV2pc1zDdfkHXVhkCQuCFZtRMQ1JDn%2Fcz2AcNKLTAiEA72wfvQwtIvmaXSwsJXutNwNU13xdEtAEVDldZgUacG0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDH1%2FRWC90Nxn500%2FoCrcA73iLzYxYktasHfwIMTjM%2Fs0OAv7W%2BA3jNLzXXWgjgUQ2M2HFFLiB17fGR%2Fx0MudTomOdol%2B6FaiwpUmj8oa9l4LasBOxKyh4V21R3%2F3qo9DZFbXv%2BN7rJm5DR549uDKYj1uGwUYlzQZNgVoV6n51kw8t0PHmbhE8NKc2ficD8JeC0XWPtD5PI8s8DwahRGoZdcjtSw0xIkhkrn%2BaMZUUg5IXIk63B97fiR667ncIKxz7oOLUZKIyn%2BYSmHmPTdfxadnRk3xXPtI%2FklFczoLBusJWBy9SatLI4UbSQxPOTpxiaBMnxc%2F553k9pxSu6A4WLRF%2BVh6wVE%2F5VfgRr9HN2UcrNrTIgvDN0HnC3Vt6%2FLmVxxDKyPoS0xsFn8N5CdgwfKl%2BXv%2FyFIU4H3lrQO5%2FH4Jq4w%2FUCEdHM4FIukExPZJRAhJbVSMvhIAJtg%2FiYqhmd9bdOaVr8CS2PZE3J3Kw%2B5ppe0AIPK%2BexPLV8iLEaCq3DbmHCVe3GxI1PeHjNS7cdWJSPdZIUtSeAOjGw%2FUxgcKyMbVci8YGDbkEg36odEofxyLJapq3J0ZkDpklgNZmzmqVhDnHX4yCHto08qPL9A6gqHt54IOYb4whRjVlQErDz5TXcguXLJdmkDWMLTSgr4GOqUBGopQ5llN2eM4f%2BakokSne9hNn4loU74ME%2B1nom%2BAXfP%2FOyvroBZ%2Bls%2BnSWmqtCpJ9RLZv3wFbUAClxkVUxLPigVkZrbu9ZK2hzAb7hZ4wRuMOhmbocg9gQukRCtezHc4o9OpixjErvVm8364o90a2BNhrVKBptxedHzPN2I1Ru%2F%2FG4QwrlOe4r4BEBTfaYs5FYcOLSOvS0g2nVyNDbN%2F1eTx8VGM&X-Amz-Signature=317a7d58877328e1786bc03daa12402dfa584780ef493dd6add08044ef616290&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
