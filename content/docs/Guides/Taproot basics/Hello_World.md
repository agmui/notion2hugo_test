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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNT6FJBM%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsYPDexIB1Wgra9UDkaSQF7mMkn9lIFz1redXyif3QAIgaqKrJ3jnSf%2B63McAz4FybMlr52TghbyNPfii7MnprzEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDezTfn0zti2poNnOSrcA0HfOJHlPMPEMSILIFfGVHD27iNYjMO5tuNfXMSSREJMM8qKTNa2ivzNyIsTKYXMOp9ULh6VYtFrG32XLvkRQzPii%2FJBu1iCO%2F7HxJbg3PktmoAsa2sZoT5dsFN0QbyTl3W05gopHbMENN3c2MOp5lcTbhwZJ37KUAs4EpS6mnK99bzGj9jOelsShB0HK1KtvlW3TEVzkTRCmO5N3HgjDEkxEhJh6TEiISozDKKhwzbnlFHjFKGcfzVGVOhworuCNjWsw8N5uX0zHHq8jOS1XSzr5CX2YNcaCOrLwa54MwkPo6yMGguLtwgTsRKg2%2FNdFWMS8TYcD1DDXfb4cofxS7%2FOrVnPTM0SECDFq1jzbsbvZxlIIDrKgRUbRmztYTKlADhSMDYtIQkZD9tbbRM5nAKKuA30uA3QiTr6rxTg2volX83YW6fMwwtvaHCExlROlaHfAI2VTV1oBmUUlgebYrvAz%2F5N5Qg7fbELmV7JGnpRtA5MMJRVSWYiG%2FZxcq5OlKukRhFZ97h6%2BmBYBJgK1NZrFU0TxKBiMbjDpnSZ86p%2FhJPLKjhegVLSjXS%2FHmGRyyqvtyDUlQyIq7cY0ITTYfia0crIQusI7%2FBw9p5nWd593hfkfzGFb9RBHtDcMN716ssGOqUB0LGExSjNHyIGcOU3qEwpgmoBl3cU7e52qZ0IPYC1kPykfLIdA9RB2TgAq2UnuoW1ugE%2F7bAG8%2BFZ4zq8e2VQh2N2wlgKHWFglmSZyVLJCkKIWlQwiJOkCBqjbnbGlc3baQ9YgHv%2FPqL4uHEp8e2OZjgYGsVd7Wvrsr00Z%2Ba6fVgFH7esHRwtJV%2FdHswNEeK3n2UddqSJZ6FshTrNONLqn4vTv7Ur&X-Amz-Signature=8f8e2f7824396ab68f96277258f91fc38b61b31b0ab50f0bbdb49822ae67aa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNT6FJBM%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsYPDexIB1Wgra9UDkaSQF7mMkn9lIFz1redXyif3QAIgaqKrJ3jnSf%2B63McAz4FybMlr52TghbyNPfii7MnprzEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDezTfn0zti2poNnOSrcA0HfOJHlPMPEMSILIFfGVHD27iNYjMO5tuNfXMSSREJMM8qKTNa2ivzNyIsTKYXMOp9ULh6VYtFrG32XLvkRQzPii%2FJBu1iCO%2F7HxJbg3PktmoAsa2sZoT5dsFN0QbyTl3W05gopHbMENN3c2MOp5lcTbhwZJ37KUAs4EpS6mnK99bzGj9jOelsShB0HK1KtvlW3TEVzkTRCmO5N3HgjDEkxEhJh6TEiISozDKKhwzbnlFHjFKGcfzVGVOhworuCNjWsw8N5uX0zHHq8jOS1XSzr5CX2YNcaCOrLwa54MwkPo6yMGguLtwgTsRKg2%2FNdFWMS8TYcD1DDXfb4cofxS7%2FOrVnPTM0SECDFq1jzbsbvZxlIIDrKgRUbRmztYTKlADhSMDYtIQkZD9tbbRM5nAKKuA30uA3QiTr6rxTg2volX83YW6fMwwtvaHCExlROlaHfAI2VTV1oBmUUlgebYrvAz%2F5N5Qg7fbELmV7JGnpRtA5MMJRVSWYiG%2FZxcq5OlKukRhFZ97h6%2BmBYBJgK1NZrFU0TxKBiMbjDpnSZ86p%2FhJPLKjhegVLSjXS%2FHmGRyyqvtyDUlQyIq7cY0ITTYfia0crIQusI7%2FBw9p5nWd593hfkfzGFb9RBHtDcMN716ssGOqUB0LGExSjNHyIGcOU3qEwpgmoBl3cU7e52qZ0IPYC1kPykfLIdA9RB2TgAq2UnuoW1ugE%2F7bAG8%2BFZ4zq8e2VQh2N2wlgKHWFglmSZyVLJCkKIWlQwiJOkCBqjbnbGlc3baQ9YgHv%2FPqL4uHEp8e2OZjgYGsVd7Wvrsr00Z%2Ba6fVgFH7esHRwtJV%2FdHswNEeK3n2UddqSJZ6FshTrNONLqn4vTv7Ur&X-Amz-Signature=d39ec425440df1f65a5ebf44e6226ee6ce26c883d63d63651dffaf5971a9f20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
