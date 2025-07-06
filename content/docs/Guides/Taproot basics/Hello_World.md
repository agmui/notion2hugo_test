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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSK36N6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDHXNGqvz4FwSOouMiaoWa6d%2F2PePh%2FefRNAQi7at9MbAiBsCqCAdE%2BWx%2BfC30kY4kBk8Fis9dv2RoCyZ8Ms0gLaVSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMdHtRjKkblewlEXOTKtwDuKN3BJUL5rAfX3C3gGcRuBQK2niYrYMOLi9HRJWgq0tHPcVui%2F9Cdafo2akl63jU4LK43ZRJfWjqKwzB3sOaR63r%2BCyotrEPPfwwPI6PG%2F3oHky0mHw2%2FsekZM7J6PNahCzbU3Nx2P67VqPZ9POGtjhE9V2E5mavlpjt7B%2FFjoRsj5tVaPijgpn7AbgLcRFhDaYb1MA7oAMgA831w1yvtkA33QeNdQy7NwDdRaagHuRU0F3ZZZWt3EueZ40SLIGmtfkT3Oa1pveXwAo9qGjqTfp1zV3%2FjmhK8cwouhtgfz0xGsXfxG%2F7MIp8MBFGT6C11jAmm2WYRh4QI4kYgMOfPMFHdCTrSsZja9EXnWeLV3puGrMowSSCPg1PzfjxDJIZ%2FLcfh4HLcp9YPCvohaIcf%2Fqrl957P1JSu3uoV37HpDpnLrF7V45NU1P%2FlBD1hNU5dvOENWTqKQF2JKnc2ilx5q7mKbM4PptsPyhA2cGfoyOQiVOtBqGOfo1GJnng%2BT7mMi7wGe8yhWYFOoZA39BljrhWb6LOzuItZ9dvNsYcRB2uwXHeycTAHzUea7Ce1Jc%2F4%2FhvCVQrws5jIgD4nX5MEHzEMztOMz3NXgJr44HC80ZGggdFBjY%2BDBmuzcAw3s%2BmwwY6pgFFLEP7Sfctmuvo9afvxV%2FxCOaOTkoN6TURdPq1VGDif8pmZQ%2BKIG7biYWFBgVU%2BKYD6hxJ6zjUUGoV%2F%2BOVYcQItDwn%2FxCR54LxeVx5pRwb2C7a36la1Rn2RGynxSssNtWbDxn37JKKCSuBSwaZRWoyo7cSyOqzhcsR%2FEMdToE6thp1HYs2f%2FAlBvW5QYLCyac0WwbCIv8uTbGI8mOKpDeglokWI30j&X-Amz-Signature=08ccba835e006d1f2cc297925930ae399170b436bf42b17209936967457ef00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSK36N6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDHXNGqvz4FwSOouMiaoWa6d%2F2PePh%2FefRNAQi7at9MbAiBsCqCAdE%2BWx%2BfC30kY4kBk8Fis9dv2RoCyZ8Ms0gLaVSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMdHtRjKkblewlEXOTKtwDuKN3BJUL5rAfX3C3gGcRuBQK2niYrYMOLi9HRJWgq0tHPcVui%2F9Cdafo2akl63jU4LK43ZRJfWjqKwzB3sOaR63r%2BCyotrEPPfwwPI6PG%2F3oHky0mHw2%2FsekZM7J6PNahCzbU3Nx2P67VqPZ9POGtjhE9V2E5mavlpjt7B%2FFjoRsj5tVaPijgpn7AbgLcRFhDaYb1MA7oAMgA831w1yvtkA33QeNdQy7NwDdRaagHuRU0F3ZZZWt3EueZ40SLIGmtfkT3Oa1pveXwAo9qGjqTfp1zV3%2FjmhK8cwouhtgfz0xGsXfxG%2F7MIp8MBFGT6C11jAmm2WYRh4QI4kYgMOfPMFHdCTrSsZja9EXnWeLV3puGrMowSSCPg1PzfjxDJIZ%2FLcfh4HLcp9YPCvohaIcf%2Fqrl957P1JSu3uoV37HpDpnLrF7V45NU1P%2FlBD1hNU5dvOENWTqKQF2JKnc2ilx5q7mKbM4PptsPyhA2cGfoyOQiVOtBqGOfo1GJnng%2BT7mMi7wGe8yhWYFOoZA39BljrhWb6LOzuItZ9dvNsYcRB2uwXHeycTAHzUea7Ce1Jc%2F4%2FhvCVQrws5jIgD4nX5MEHzEMztOMz3NXgJr44HC80ZGggdFBjY%2BDBmuzcAw3s%2BmwwY6pgFFLEP7Sfctmuvo9afvxV%2FxCOaOTkoN6TURdPq1VGDif8pmZQ%2BKIG7biYWFBgVU%2BKYD6hxJ6zjUUGoV%2F%2BOVYcQItDwn%2FxCR54LxeVx5pRwb2C7a36la1Rn2RGynxSssNtWbDxn37JKKCSuBSwaZRWoyo7cSyOqzhcsR%2FEMdToE6thp1HYs2f%2FAlBvW5QYLCyac0WwbCIv8uTbGI8mOKpDeglokWI30j&X-Amz-Signature=e3577ce33b8b4103d66cb07551a31b79ce74fc22b7b7af59a8a109eee6549293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
