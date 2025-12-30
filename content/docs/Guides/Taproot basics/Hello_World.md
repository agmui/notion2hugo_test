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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHD55HZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ovQX58iviJHUJtzAk7XeRpkWbXeXFq398rOTjpgkgAIgKiD715fnkrEjr4vB88pPgfEOs%2BT7%2BOk3ZGm11KU4%2F5AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS3R9HGMAYMHs9FqircA1zOnku9JNbG5nGGcLCB%2BiQVDs5R%2FeqTQjpPHiR4%2FD%2B82tNpOcmRfXtdTPf7Let0Wm2ypLpgNvCK2BXPTMszRQ7NG2mAcHGCTSSPD2Xz4PSDWzEDAs4mghfU9Y4ogQgNoGwGbCFDSXUFbDUm%2BHUWvq%2FpUObjm1IbyXmMbRxgy7hY7LETfA%2B62CSG4AUP93usGckxtMS6aYN6yDOIQQV1qGjx%2ByX0IofpW0TrbstYch87vTKGdWYHCN26w7hNMDU%2BvTXRGOVSgA0WqmA57JV%2FKPAXAAn9SAmO1zabprgieuY0X5CtsYnkMvaMRxncyc5IVWk8rznBvXhsKkrhtKriQ2WtbN8K3%2Bu4f1fNeuV9ZrEvUdFHo5GYGYEwUAg5%2Facrde5%2FwCKcn2m91hxHNmWqW54Y09X1%2FqWC2rMvdzxIPpYWTMr%2BUH5nQoltqNX7TpD5Id%2B%2BnrdHJpwfCTbwG7Zg3rpflxeW53IWXY4bBeTG6O%2B3ywPhP8MBA%2F6a9laUrD6za%2B9fWjdaG0xrZrHNNtav%2Bv6s66UrUlvsXVoOrs4mjKJxOK0tJ4z%2Fl7c699FVlrMKzQvEzjpTf9FBhlR0RXWnTnyYPsML9r7rzok6%2BOIAE%2BKP2uXUhBeLhW%2BpYniDMJ7ZzMoGOqUByQxYHVOkpknqM3vEmMV3OK2YgQ9pTGJeA26dDxpRAWgSyv4Mabt1WXQE1eEMPCgp7eAF0OE%2FfJwYfFU%2FLXjRm7YJrltryfqecLXC4K75WS2pdDL%2FNhqa2lHY0AzXmcV6ytXtgvo7NFKeQGFzmzJYniCLkTe%2Ft2DPKZUcgY0rrpfsH6agQwJ6CNIMTQD5IOs9NrnNHR8BsPipCO8k6Vbm5TOC0R9f&X-Amz-Signature=0f4ca48ad9fd10a21d7597a803e54895d566d47f42dcf30be60a121d7f3dba5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHD55HZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ovQX58iviJHUJtzAk7XeRpkWbXeXFq398rOTjpgkgAIgKiD715fnkrEjr4vB88pPgfEOs%2BT7%2BOk3ZGm11KU4%2F5AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS3R9HGMAYMHs9FqircA1zOnku9JNbG5nGGcLCB%2BiQVDs5R%2FeqTQjpPHiR4%2FD%2B82tNpOcmRfXtdTPf7Let0Wm2ypLpgNvCK2BXPTMszRQ7NG2mAcHGCTSSPD2Xz4PSDWzEDAs4mghfU9Y4ogQgNoGwGbCFDSXUFbDUm%2BHUWvq%2FpUObjm1IbyXmMbRxgy7hY7LETfA%2B62CSG4AUP93usGckxtMS6aYN6yDOIQQV1qGjx%2ByX0IofpW0TrbstYch87vTKGdWYHCN26w7hNMDU%2BvTXRGOVSgA0WqmA57JV%2FKPAXAAn9SAmO1zabprgieuY0X5CtsYnkMvaMRxncyc5IVWk8rznBvXhsKkrhtKriQ2WtbN8K3%2Bu4f1fNeuV9ZrEvUdFHo5GYGYEwUAg5%2Facrde5%2FwCKcn2m91hxHNmWqW54Y09X1%2FqWC2rMvdzxIPpYWTMr%2BUH5nQoltqNX7TpD5Id%2B%2BnrdHJpwfCTbwG7Zg3rpflxeW53IWXY4bBeTG6O%2B3ywPhP8MBA%2F6a9laUrD6za%2B9fWjdaG0xrZrHNNtav%2Bv6s66UrUlvsXVoOrs4mjKJxOK0tJ4z%2Fl7c699FVlrMKzQvEzjpTf9FBhlR0RXWnTnyYPsML9r7rzok6%2BOIAE%2BKP2uXUhBeLhW%2BpYniDMJ7ZzMoGOqUByQxYHVOkpknqM3vEmMV3OK2YgQ9pTGJeA26dDxpRAWgSyv4Mabt1WXQE1eEMPCgp7eAF0OE%2FfJwYfFU%2FLXjRm7YJrltryfqecLXC4K75WS2pdDL%2FNhqa2lHY0AzXmcV6ytXtgvo7NFKeQGFzmzJYniCLkTe%2Ft2DPKZUcgY0rrpfsH6agQwJ6CNIMTQD5IOs9NrnNHR8BsPipCO8k6Vbm5TOC0R9f&X-Amz-Signature=1a69c851b6ddb46d754e329b2e6b87fba972ac7a947dfefb19dc1e47cf6a9e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
