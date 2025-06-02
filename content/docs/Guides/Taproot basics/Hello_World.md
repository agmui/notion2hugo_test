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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4A4RTZX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIC6Ma8XayFFawMiny%2FOfU1RkBWfQt8k5IaPbg1ZU0ghcAiA6izP%2Fmaae77DEAkgsjO7E9XO6tpWUR%2BL2GTSJoC2j%2FSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrjH4l1nHzzC8E%2FkkKtwDCg0cf%2F3UPCfPstcQ%2F4HDn3HLMjTspJy4yJFCObtorzwPwswvnrisV8zRqultT3fBvdw%2FN4Qrq7BemarQ2htkQFgUVubDPUok69LUPZxfHWpaJnE4w8rm3M%2FdBUCLLcQLRqK1CokNvAO0%2BtNSxH4KbaL4roHCZlV0D0913lv%2FC7XVx3s%2BMAezZxSvpnWOEX%2FAQOog77aXgBmdg0t%2FpXom9m98v947E5602Chtip7ehnSwF%2BsPgz%2BnTvqN45QeJUq5924j3M5uM22r%2BQCCj7TcVv8X3EKUXifgrH2kH6rkbEBei4xS6NHe3qQ5iVl8QseB59GIz4J4R8w%2FfE0a2so7QTWqKTgNdHJnYKY5j%2BSGbR%2Fb3%2FJ0wrzTBXi9oBtKEpp27mgGaRV9896PN%2BMJGmf1kq2VkrGFMAQ4e%2FMFH1MOhZz2u%2FTkQm%2FzVWFGKOY7Qc8WqrCtelHtuS39VgFVMvppLQrzMtLYUWW1XN8rlWmDI%2B6inOT%2B0wukzFu1Uj%2BsJ6OjHRuvoVtQnqQnNvqLOHda05MpoqwnWisCmwJZDwrgF1GzvTJwSAoMmQJAFSp00uKDMh54LMUUVjyvQp347EA0hAEhV3BP2JFUtiotgFEhFpsn9GRiXstTpTFELygwuOL3wQY6pgGflG0hGkc4p0vdLmmt406OdlUpBtU7gZDBdtbrL1GbWqb9JUekJFuO%2BXoG9XvGpqoHqCE2S2UNrdHkFFhmHh01V6w6G%2Fyv4l9dYbwYaAQvXJ3tRkCOk8tI0aNtNx237DVsEqu37q5EZUyZJzYfCl4YJ6ZQMcBkTdEN1JG10TY47MwPveAzuH%2FVBhAnZsp%2BnjDlm5ciuDGFj%2FsofQUx247MyeDcGGhl&X-Amz-Signature=6a7de21610b8216a9892228329c123873055b9f703a045086e263ec37dedd11f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4A4RTZX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIC6Ma8XayFFawMiny%2FOfU1RkBWfQt8k5IaPbg1ZU0ghcAiA6izP%2Fmaae77DEAkgsjO7E9XO6tpWUR%2BL2GTSJoC2j%2FSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrjH4l1nHzzC8E%2FkkKtwDCg0cf%2F3UPCfPstcQ%2F4HDn3HLMjTspJy4yJFCObtorzwPwswvnrisV8zRqultT3fBvdw%2FN4Qrq7BemarQ2htkQFgUVubDPUok69LUPZxfHWpaJnE4w8rm3M%2FdBUCLLcQLRqK1CokNvAO0%2BtNSxH4KbaL4roHCZlV0D0913lv%2FC7XVx3s%2BMAezZxSvpnWOEX%2FAQOog77aXgBmdg0t%2FpXom9m98v947E5602Chtip7ehnSwF%2BsPgz%2BnTvqN45QeJUq5924j3M5uM22r%2BQCCj7TcVv8X3EKUXifgrH2kH6rkbEBei4xS6NHe3qQ5iVl8QseB59GIz4J4R8w%2FfE0a2so7QTWqKTgNdHJnYKY5j%2BSGbR%2Fb3%2FJ0wrzTBXi9oBtKEpp27mgGaRV9896PN%2BMJGmf1kq2VkrGFMAQ4e%2FMFH1MOhZz2u%2FTkQm%2FzVWFGKOY7Qc8WqrCtelHtuS39VgFVMvppLQrzMtLYUWW1XN8rlWmDI%2B6inOT%2B0wukzFu1Uj%2BsJ6OjHRuvoVtQnqQnNvqLOHda05MpoqwnWisCmwJZDwrgF1GzvTJwSAoMmQJAFSp00uKDMh54LMUUVjyvQp347EA0hAEhV3BP2JFUtiotgFEhFpsn9GRiXstTpTFELygwuOL3wQY6pgGflG0hGkc4p0vdLmmt406OdlUpBtU7gZDBdtbrL1GbWqb9JUekJFuO%2BXoG9XvGpqoHqCE2S2UNrdHkFFhmHh01V6w6G%2Fyv4l9dYbwYaAQvXJ3tRkCOk8tI0aNtNx237DVsEqu37q5EZUyZJzYfCl4YJ6ZQMcBkTdEN1JG10TY47MwPveAzuH%2FVBhAnZsp%2BnjDlm5ciuDGFj%2FsofQUx247MyeDcGGhl&X-Amz-Signature=59901152ad99a6fcbe86f5b93dbf49a41aa5d1a97110dac9efa7128371a99004&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
