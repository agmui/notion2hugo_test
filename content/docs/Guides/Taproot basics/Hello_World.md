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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAF4HCU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFISs5Y7UA%2F1hC%2BPtt%2BjSOqJnM9VHFLuKYarm2gmsyhPAiEAjjQZY%2FxfcYJQkeGeKgRrLM%2FO4eG6GMVNaUp2E1rrSocqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpQysB6fybJVpvOaSrcA0ys95Kh4B%2BXdzrkR3WfLv96h3H%2BaWj27pijfY5nj3dQhKpJcsXt6wRa%2BybuTpZW3Y4NZ97LPHxzXIpZ0N0Jb7SsnbgvScUBN09bjLDw5aCRie2%2FapFSlN%2F9%2F9pb1V4k79edKVlKmIxzXG%2Bbd6MMGec326XOLIX%2BH7OK9DmJYewHxSVT2CWdPRhcUVGebGeI%2Fq7y6vX0DR%2BzmTQ8xvk5x3nr5SpI1zrTVaps2eMpW4MdF2%2F3wxj42wHh2tqmYB1JqDtYQmb7yCOPwvRLiNA9LMu3lSNYf2RjQkvHisNzKesDSeL8Nz7%2BfK4CGQNAvC5bHBV6Jha9IsDgIaYHhwrSj3pCN8v3ke66qtRBooOhLDudkpydBTUwAcXetTy0SQCS34XBHtoOK0cIMvCH3WhYmRuKGSoOT2B7w1dnXgAue0KakwtiZXbylSjL02I3RPFGruT6MpqRWdyLDpdac1UwqTplm97gND3qXhsbcCPPwO%2FuzhQY31QPNmhp4GIhQzCCo7GQnOS8zvkIgi9cYbATP%2Fskr4P%2FmUoCAilfbW02FE7Dn9mg5Euy04%2BsYg1hdZnHy%2Fi1MtxyU%2BUg%2BrD6YmGp1y1FD8gR69%2B83Vvv7BK6xH0WGYl0z9x2uFpjOWFpMLbFrcQGOqUBiz9J6quguTbrCop0aFbZsWxCtgUeSpQr5dPUduYO9kth9DpCtTpP%2FC7murIfE6NmRRRwwNNwee1AdWy8%2FFZREybVo5enZ8QPmySAPGz21sg7%2FqDW%2BRbtRDGVNeXfQTA3owMgZo%2Fznk3Z0J5aYX34mCX6QLdWAC8ODlxPIVMq%2FeJjfygESBkmQMfyWhH%2FYjKYY49oWGDCllrGR0KmLhRYEhCJ8ooP&X-Amz-Signature=1c686934a08891e9e603d77edbbb07898d933561fe3f278ec46055bfe366e53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAF4HCU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFISs5Y7UA%2F1hC%2BPtt%2BjSOqJnM9VHFLuKYarm2gmsyhPAiEAjjQZY%2FxfcYJQkeGeKgRrLM%2FO4eG6GMVNaUp2E1rrSocqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpQysB6fybJVpvOaSrcA0ys95Kh4B%2BXdzrkR3WfLv96h3H%2BaWj27pijfY5nj3dQhKpJcsXt6wRa%2BybuTpZW3Y4NZ97LPHxzXIpZ0N0Jb7SsnbgvScUBN09bjLDw5aCRie2%2FapFSlN%2F9%2F9pb1V4k79edKVlKmIxzXG%2Bbd6MMGec326XOLIX%2BH7OK9DmJYewHxSVT2CWdPRhcUVGebGeI%2Fq7y6vX0DR%2BzmTQ8xvk5x3nr5SpI1zrTVaps2eMpW4MdF2%2F3wxj42wHh2tqmYB1JqDtYQmb7yCOPwvRLiNA9LMu3lSNYf2RjQkvHisNzKesDSeL8Nz7%2BfK4CGQNAvC5bHBV6Jha9IsDgIaYHhwrSj3pCN8v3ke66qtRBooOhLDudkpydBTUwAcXetTy0SQCS34XBHtoOK0cIMvCH3WhYmRuKGSoOT2B7w1dnXgAue0KakwtiZXbylSjL02I3RPFGruT6MpqRWdyLDpdac1UwqTplm97gND3qXhsbcCPPwO%2FuzhQY31QPNmhp4GIhQzCCo7GQnOS8zvkIgi9cYbATP%2Fskr4P%2FmUoCAilfbW02FE7Dn9mg5Euy04%2BsYg1hdZnHy%2Fi1MtxyU%2BUg%2BrD6YmGp1y1FD8gR69%2B83Vvv7BK6xH0WGYl0z9x2uFpjOWFpMLbFrcQGOqUBiz9J6quguTbrCop0aFbZsWxCtgUeSpQr5dPUduYO9kth9DpCtTpP%2FC7murIfE6NmRRRwwNNwee1AdWy8%2FFZREybVo5enZ8QPmySAPGz21sg7%2FqDW%2BRbtRDGVNeXfQTA3owMgZo%2Fznk3Z0J5aYX34mCX6QLdWAC8ODlxPIVMq%2FeJjfygESBkmQMfyWhH%2FYjKYY49oWGDCllrGR0KmLhRYEhCJ8ooP&X-Amz-Signature=7ddc59680c03bb593616b3b766fd12632c3c0afac904f5380ad732349e5d6236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
