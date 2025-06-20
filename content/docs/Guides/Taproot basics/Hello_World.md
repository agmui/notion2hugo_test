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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74622BV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9SFjXzukRDnO06nZDaFTfAtOz6RLQ4rDc5kavJEkB%2FgIgG7nrjov3Yi0%2BHlrDCbjEGMnqdIsLvFss%2BYmNvNqI92QqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FxaVv6jopYIpzZxCrcAwciy1vLaz4W4ARyyqz2V8vuzY%2BBYjbD0JEiRRc2IThc5kMZzyBunqOSZ4L46L4NBo1AUhtpBUuPXQcbXpDe22Lp6hft9qDusPpr2hO8%2BUPuLJb2vMHHR67Tp%2BiK%2BnTeGuaFxyoWxuOj5e15Yccrm6lOYnyVZtW9lwsy73AyFBfSWWK%2FSRxmMFDieEtCUl9OJ7hkpeu22bO0DqMdl7HhXces97%2BnidOT6av2EjjKLcrRp8IBLtCJwgT2Y3R47r5drUTToO0%2BS0oSrap6sBjpiZU04KJK0gZu6UVgxTXY8F%2BwbnH55u5hldyyWYcdEhyOOM31Hl6EmbrC%2F2A0reppf90czLmOLrKC%2BOHSNQibmCsvAltHuS4p5yp71hsJdXLqHmIvudRV2zJ%2BoCWBFvOyL2EswXKiYlTkKBV2%2BE4VVWqzfkCyzQkViA4%2Fa2MFtjAYyeRX6pLAdHcPirtkuDgFhERdmn5WcAPGV8FgY1YdW%2FK8GLm3MF1%2BP8C6nq2rTpAw5RRZOzhlvyWbC5yUdGBgejN2NyETx6zUe1DAuMfEg%2F4Vr3Mih3Kap8IGJUuYWmqpLJKm8SzjWb9Lt6UDCSNrwKx5Hm15rNaecchI6NqrlDRwN05t5a%2BL8n6jIgC%2BMIO%2B08IGOqUBcuLYSwDzQJXSLBKSdQNK9x3bKodpibnTSgVgl1gXpPdb3LuXUZY4pCn9LWmj2EkK9PYPkRZOGMy77aMCKRH37SqPlgwj%2FUFvowKh0L7q24vkoHVOHOKXVC2VqKdR1LXAEt5pS5R30NQBiy3TZhvWCPZ3x3M8ZydVFKTS3ris9rW2MrwDfG%2BzIHQNWrSkT0pgLlzR%2Fo6gjJqmN5LrePYfdwDXtKQb&X-Amz-Signature=fb1a67548e2694e77b70823d7bf5197d04e5eeff18331948bcd754876b44cc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74622BV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9SFjXzukRDnO06nZDaFTfAtOz6RLQ4rDc5kavJEkB%2FgIgG7nrjov3Yi0%2BHlrDCbjEGMnqdIsLvFss%2BYmNvNqI92QqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FxaVv6jopYIpzZxCrcAwciy1vLaz4W4ARyyqz2V8vuzY%2BBYjbD0JEiRRc2IThc5kMZzyBunqOSZ4L46L4NBo1AUhtpBUuPXQcbXpDe22Lp6hft9qDusPpr2hO8%2BUPuLJb2vMHHR67Tp%2BiK%2BnTeGuaFxyoWxuOj5e15Yccrm6lOYnyVZtW9lwsy73AyFBfSWWK%2FSRxmMFDieEtCUl9OJ7hkpeu22bO0DqMdl7HhXces97%2BnidOT6av2EjjKLcrRp8IBLtCJwgT2Y3R47r5drUTToO0%2BS0oSrap6sBjpiZU04KJK0gZu6UVgxTXY8F%2BwbnH55u5hldyyWYcdEhyOOM31Hl6EmbrC%2F2A0reppf90czLmOLrKC%2BOHSNQibmCsvAltHuS4p5yp71hsJdXLqHmIvudRV2zJ%2BoCWBFvOyL2EswXKiYlTkKBV2%2BE4VVWqzfkCyzQkViA4%2Fa2MFtjAYyeRX6pLAdHcPirtkuDgFhERdmn5WcAPGV8FgY1YdW%2FK8GLm3MF1%2BP8C6nq2rTpAw5RRZOzhlvyWbC5yUdGBgejN2NyETx6zUe1DAuMfEg%2F4Vr3Mih3Kap8IGJUuYWmqpLJKm8SzjWb9Lt6UDCSNrwKx5Hm15rNaecchI6NqrlDRwN05t5a%2BL8n6jIgC%2BMIO%2B08IGOqUBcuLYSwDzQJXSLBKSdQNK9x3bKodpibnTSgVgl1gXpPdb3LuXUZY4pCn9LWmj2EkK9PYPkRZOGMy77aMCKRH37SqPlgwj%2FUFvowKh0L7q24vkoHVOHOKXVC2VqKdR1LXAEt5pS5R30NQBiy3TZhvWCPZ3x3M8ZydVFKTS3ris9rW2MrwDfG%2BzIHQNWrSkT0pgLlzR%2Fo6gjJqmN5LrePYfdwDXtKQb&X-Amz-Signature=e2a93079567cdf0091ea26cb6207a01a51f6710a0485750e7bf897844038e33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
