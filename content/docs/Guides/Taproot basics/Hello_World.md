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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CPWX6Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPwRdVb3bwf1mB%2Bocxar0Lkg%2FZv9Xkz6Y4FeVe13oYwIgMu3aHG9FuaGacVZgfRYvc%2BfMs7EX7fCpoxta2fjWYR4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxem74GuMNaLuBtdircA6EI7kCBZedIuu3ke3OExyEREtZ8gNk%2F9RT1uZlXLa955myFrqQsI1kk3N6fLMtcHBMgmFv%2FAPU7%2FYP60Qv4XBzmt7%2FTzHeImqyjA3X3UpKSx8MsU0MiL9eOMC7AIal2l3sGYsLP5AXgPaEP4J%2FgoCPLjN%2B19SkKnIgqOrNHc5Zad9YMt3HtDgfAG803A7Iq056zw%2BtIAVOYCn3Y3dEpABeNjQpKpdIfH6q9NWPN1LbSZ7FQoLsML5dzY3Ix8MAZuzbH81BpdeYio4nLtkT67IofbsVGMh77SYbJHxIKViXi5WqcizPf571IXfg6gEG31c8MYy6spBo21TkcwJYhMyg7lF00bI4UNyZLgQXQPRyZHJvyPnLQ9%2BaWLK8pByviNYtGIV4lf54S0sAB6npvAcuKcbEW%2Br8IXpx9%2FCKM058LXMovC3jHBYQzM%2BrIqvFp2PrpHSN5HpEBVukoo1zCP6qqdiZFf4AGasoXNUBrjimrSm4phHT0HqLT8MksRPOmkDC5RJl9JTyDPTAcqM6UviilSnTUVoxIaZd11OWOHQw2I7ncFDg6Aii36mFr0bO%2FvW%2F%2FIVm7s2MeupOhgoxJXsV%2B5K4zhtpJY6NJeCJlEJgIaGweqBt4G5RFy88vMIT1%2B8AGOqUBv8Sd236pCwp2andrvbxY%2BoEEpd1CliinEj1fZWTm4Fzs2aUCXiMG3ZsAUvsZLAoMKByMdStOW4cn4DsT%2BwTH4k7Z%2BFdvcqJtV2K0vdrUE1%2FXSvkzkqwL8uuP5h%2FB5Cnu1GKfd4AHXzURC23aDLXvui7xwKytZGU6OqrFLsAPJKxxHhCSndsoglNkejuFU0eNjnfxBaZpMX3UUW70Zez4slDYPeFu&X-Amz-Signature=17819ff8ad16d6a77f3a2fa91937c3888048078ec71db90e177331affc1e8b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CPWX6Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPwRdVb3bwf1mB%2Bocxar0Lkg%2FZv9Xkz6Y4FeVe13oYwIgMu3aHG9FuaGacVZgfRYvc%2BfMs7EX7fCpoxta2fjWYR4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxem74GuMNaLuBtdircA6EI7kCBZedIuu3ke3OExyEREtZ8gNk%2F9RT1uZlXLa955myFrqQsI1kk3N6fLMtcHBMgmFv%2FAPU7%2FYP60Qv4XBzmt7%2FTzHeImqyjA3X3UpKSx8MsU0MiL9eOMC7AIal2l3sGYsLP5AXgPaEP4J%2FgoCPLjN%2B19SkKnIgqOrNHc5Zad9YMt3HtDgfAG803A7Iq056zw%2BtIAVOYCn3Y3dEpABeNjQpKpdIfH6q9NWPN1LbSZ7FQoLsML5dzY3Ix8MAZuzbH81BpdeYio4nLtkT67IofbsVGMh77SYbJHxIKViXi5WqcizPf571IXfg6gEG31c8MYy6spBo21TkcwJYhMyg7lF00bI4UNyZLgQXQPRyZHJvyPnLQ9%2BaWLK8pByviNYtGIV4lf54S0sAB6npvAcuKcbEW%2Br8IXpx9%2FCKM058LXMovC3jHBYQzM%2BrIqvFp2PrpHSN5HpEBVukoo1zCP6qqdiZFf4AGasoXNUBrjimrSm4phHT0HqLT8MksRPOmkDC5RJl9JTyDPTAcqM6UviilSnTUVoxIaZd11OWOHQw2I7ncFDg6Aii36mFr0bO%2FvW%2F%2FIVm7s2MeupOhgoxJXsV%2B5K4zhtpJY6NJeCJlEJgIaGweqBt4G5RFy88vMIT1%2B8AGOqUBv8Sd236pCwp2andrvbxY%2BoEEpd1CliinEj1fZWTm4Fzs2aUCXiMG3ZsAUvsZLAoMKByMdStOW4cn4DsT%2BwTH4k7Z%2BFdvcqJtV2K0vdrUE1%2FXSvkzkqwL8uuP5h%2FB5Cnu1GKfd4AHXzURC23aDLXvui7xwKytZGU6OqrFLsAPJKxxHhCSndsoglNkejuFU0eNjnfxBaZpMX3UUW70Zez4slDYPeFu&X-Amz-Signature=23791959fdc94871f2d7a6548e8ae4c7b114ea073fba6d4922a7747953eb5a23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
