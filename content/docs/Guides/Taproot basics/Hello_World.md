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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUHRC4F%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDpotMuWzUlbTLkRn9DFzO6kOEwe6B4WXKq5Ysb5TKJZwIhAIIkeXFwR%2FTEYjGEdkKU58Ji%2BtB2JA7OmLkN75lIiWz8Kv8DCAIQABoMNjM3NDIzMTgzODA1IgxfTAI76NLXASiFGFwq3ANQ5uweSw3f1odfDHd%2FcKxEKpLU2k3FnQa8YhKyklQxvI1%2F9%2F7096Iyol86MNgJjEQ2qQdbcuz2eyN8aRBqrElrE%2BCG0oXq3N4qbjWhElEHJMpEY7QFGSmEotVGtzTLZRJ3m%2F6DXTXElR36rPCXthy85zlCJ0xL4HJF0k1%2BagPSRt7N4i9VcUYEfamSosk39bcCKemGBDWF3%2FPuZKM85xY0zcY9%2FGeURzeGWRHXcfuVlQG0HggHStHZyvV8QXpK%2F49tgcjUddda%2B8SmwRcu4l3GJCTw%2F82ns4U06QwzD2PUMtHKj2u8%2Fe4URQUwvPT9ZG2oAnDiAKubDvNbra%2B%2BWxR06b4AHKJyl2F4ex%2BnAtiM532XyIwj9hocRsBNDhpjk%2BfgN5eUalF%2F9YoZQEslibL1tY%2F8plta0p4vkqOO9yJfCLFGvsAfCCDnvGsKQiT0L9ENTpdr2Yc%2FlJka2EwQ816ZZDbAOhTINH1V3raVk7Ts0t6YkaQm6gHaw0W9hDNXk4iFxO3XlbbEpSXh2U3VBSbT1uxnZB%2Fr7a1o7dvMp7PAC%2FIASs%2ByzOKrEm3FMrA5zd48tdfIVWTaMWjXllmNxos7EiaMCXLV0CHaahItiCHGDyC8LYuMZ%2BZ8T14D9DDRrNDLBjqkAVXpPO7XOTZO1FaTJgpVQN5p%2BIlo1L41nz6JftCW1hbDSUAe2YLbjjmedBb%2Bhsw1vRAaTOJdznUJA2Dqe0LYVK14wa%2BTA5%2BRptihM4ns07g4iK0%2F0YKEOTUslNvQHMfZ6FBLSfOoiShBwgsznI0l0lwG08%2BVO73OPKgIkkvW9Rh3T0XYEIVFOvLy9xbNh55z4u3B8Y52MtqtMm3SwUW%2BLGFXyEDU&X-Amz-Signature=78cc8cfb05a59e51666779939dc3478be8c5e23fe03a6c4c3ec767b74fd85c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUHRC4F%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDpotMuWzUlbTLkRn9DFzO6kOEwe6B4WXKq5Ysb5TKJZwIhAIIkeXFwR%2FTEYjGEdkKU58Ji%2BtB2JA7OmLkN75lIiWz8Kv8DCAIQABoMNjM3NDIzMTgzODA1IgxfTAI76NLXASiFGFwq3ANQ5uweSw3f1odfDHd%2FcKxEKpLU2k3FnQa8YhKyklQxvI1%2F9%2F7096Iyol86MNgJjEQ2qQdbcuz2eyN8aRBqrElrE%2BCG0oXq3N4qbjWhElEHJMpEY7QFGSmEotVGtzTLZRJ3m%2F6DXTXElR36rPCXthy85zlCJ0xL4HJF0k1%2BagPSRt7N4i9VcUYEfamSosk39bcCKemGBDWF3%2FPuZKM85xY0zcY9%2FGeURzeGWRHXcfuVlQG0HggHStHZyvV8QXpK%2F49tgcjUddda%2B8SmwRcu4l3GJCTw%2F82ns4U06QwzD2PUMtHKj2u8%2Fe4URQUwvPT9ZG2oAnDiAKubDvNbra%2B%2BWxR06b4AHKJyl2F4ex%2BnAtiM532XyIwj9hocRsBNDhpjk%2BfgN5eUalF%2F9YoZQEslibL1tY%2F8plta0p4vkqOO9yJfCLFGvsAfCCDnvGsKQiT0L9ENTpdr2Yc%2FlJka2EwQ816ZZDbAOhTINH1V3raVk7Ts0t6YkaQm6gHaw0W9hDNXk4iFxO3XlbbEpSXh2U3VBSbT1uxnZB%2Fr7a1o7dvMp7PAC%2FIASs%2ByzOKrEm3FMrA5zd48tdfIVWTaMWjXllmNxos7EiaMCXLV0CHaahItiCHGDyC8LYuMZ%2BZ8T14D9DDRrNDLBjqkAVXpPO7XOTZO1FaTJgpVQN5p%2BIlo1L41nz6JftCW1hbDSUAe2YLbjjmedBb%2Bhsw1vRAaTOJdznUJA2Dqe0LYVK14wa%2BTA5%2BRptihM4ns07g4iK0%2F0YKEOTUslNvQHMfZ6FBLSfOoiShBwgsznI0l0lwG08%2BVO73OPKgIkkvW9Rh3T0XYEIVFOvLy9xbNh55z4u3B8Y52MtqtMm3SwUW%2BLGFXyEDU&X-Amz-Signature=cc0f936365845c4aec6c12add24ecb49d862f7e50843b153c23ff8a1663d0983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
