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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TO46NV%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWsWIzQnO%2FL3UddTCVVr0LJHOZhEN1Gzmr3cxmmKCHAIgbrH1t21OCCvCgnaiiJcn770V4APDEWH7dlFKNtVImf4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHf7GeA5LysrCzmSbircA2Lurdxclb27cB%2FdmR%2FPA7ertARjT4BtxWmSUfrLK%2FCmAg4bxvQapnNWbkmQdECDmM0RVQ4BIj3%2FBHXKKwWhzNrLhAl2TImD%2FBr2G13woFLCT7RF%2FelqpKrOK01RDl7cFlYUTTSlAQKQk1bPEqVCIsAnqnZptxeeYFZ8sat5eEZ%2FUzbwqiaM8pUQJmP36qP3DZTBtyzjOdYsuXANbOWdv7W6HUtb1hsIlVttc2sa5XBQAtFwVh%2B2rNWUY0JPVre1kQDRkGOYMYu%2BY8LnUyRPuFD2zVX2xzZyYZAlYJqm5%2BxfW6vNys9XZPhCsTEpgtH8t3EVMfB0KHcgzz7NkOtEYfFfs9CJ1%2BjqFfIZ%2FVQtaUf412HcWAvRpQA2cMJv6%2BFl1k7Ay%2FsNTZYK%2BcRxC%2FlPp2GXcmLADqRsntm1EgQAWPnrktQEO3YB%2F5fAyg%2B8PRk2tOA2w5OqcTacpPGpNy4%2BeSptO9gM9gqi%2BeCyEAX1bb4vzbTLARVaEJX6SN3ZXeUZu8YjS2vR6WvpztYSg4AD2A7teUCVzsmSyVoxbn%2FUOhRk%2BLXS6iCTT9e76eXztTIVWmn2JwCEp12BuQu3hA41pBzqLiBMvlsSwvvuAkm%2BsqVDLeJeA%2FHZzagvteI0MPaQ2M0GOqUBZrfS%2B%2FZPzQaewgdYXGxU9Fgtj%2F5P%2BjQsrwAm%2FhzVmEqjTOF%2FTpoHuEHIyO9fWtgVB20YOgGy7a9OO0nV%2FzIlwi3kzjhh%2F9I%2F16X3m%2BzsCNuaI6qdp%2F2WoVlEVCBQPnCJgUI2oSAacZOhOG%2F%2Bi4%2FGUsIQ6rWYtZvdFss%2BWUWLOHiMWZfzM%2FgyPddomDb5NTwRD3QuixJGMmTjh8%2FsePsn%2BF6RFuUg&X-Amz-Signature=213db0688af19e8885d490f1918d908aeaa2f3913d4175fc27055d23c2435fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TO46NV%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWsWIzQnO%2FL3UddTCVVr0LJHOZhEN1Gzmr3cxmmKCHAIgbrH1t21OCCvCgnaiiJcn770V4APDEWH7dlFKNtVImf4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHf7GeA5LysrCzmSbircA2Lurdxclb27cB%2FdmR%2FPA7ertARjT4BtxWmSUfrLK%2FCmAg4bxvQapnNWbkmQdECDmM0RVQ4BIj3%2FBHXKKwWhzNrLhAl2TImD%2FBr2G13woFLCT7RF%2FelqpKrOK01RDl7cFlYUTTSlAQKQk1bPEqVCIsAnqnZptxeeYFZ8sat5eEZ%2FUzbwqiaM8pUQJmP36qP3DZTBtyzjOdYsuXANbOWdv7W6HUtb1hsIlVttc2sa5XBQAtFwVh%2B2rNWUY0JPVre1kQDRkGOYMYu%2BY8LnUyRPuFD2zVX2xzZyYZAlYJqm5%2BxfW6vNys9XZPhCsTEpgtH8t3EVMfB0KHcgzz7NkOtEYfFfs9CJ1%2BjqFfIZ%2FVQtaUf412HcWAvRpQA2cMJv6%2BFl1k7Ay%2FsNTZYK%2BcRxC%2FlPp2GXcmLADqRsntm1EgQAWPnrktQEO3YB%2F5fAyg%2B8PRk2tOA2w5OqcTacpPGpNy4%2BeSptO9gM9gqi%2BeCyEAX1bb4vzbTLARVaEJX6SN3ZXeUZu8YjS2vR6WvpztYSg4AD2A7teUCVzsmSyVoxbn%2FUOhRk%2BLXS6iCTT9e76eXztTIVWmn2JwCEp12BuQu3hA41pBzqLiBMvlsSwvvuAkm%2BsqVDLeJeA%2FHZzagvteI0MPaQ2M0GOqUBZrfS%2B%2FZPzQaewgdYXGxU9Fgtj%2F5P%2BjQsrwAm%2FhzVmEqjTOF%2FTpoHuEHIyO9fWtgVB20YOgGy7a9OO0nV%2FzIlwi3kzjhh%2F9I%2F16X3m%2BzsCNuaI6qdp%2F2WoVlEVCBQPnCJgUI2oSAacZOhOG%2F%2Bi4%2FGUsIQ6rWYtZvdFss%2BWUWLOHiMWZfzM%2FgyPddomDb5NTwRD3QuixJGMmTjh8%2FsePsn%2BF6RFuUg&X-Amz-Signature=ea6482bb4dabf531140a58786869bd031711971fa5ad95e2aefe6aad90000b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
