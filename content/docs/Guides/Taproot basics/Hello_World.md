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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVJLP63%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB0SgtR37jL702Gde5uvK6t7ql%2FL9S2CmWmhEhA6woAiAIQn8Pc8bUEC2aPsjLBAWH1Ofh42uzRikXILhLDlBN%2FyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VI3XNb%2B968rh%2FmAKtwDJ5ketsPw2ywA7D%2FXvVNBFifaI95cjIE9AsuoZteQGNlsLhBOKU8IJFsCSQS5JpDEWqO2%2FKjRIt4vs0ChSHT53K8ukUQHb8MQ34DY5biWaObk3mybW5dnvG3ZMtP0qjNzVehgI4E5cPJRZjqAKcRFBEjV2kz%2B0iu4M%2Bce0X6UPYnkLkM8724IFGpuEz92EQZh81DXUutp4sKLeuoFTLVYXo2mhRl7F2aD3%2Bx4QwM7sURU3lQAF8zn5U4id80w69Rc0xd6zpOOob3Yk17hb%2FzHpqNILMWVkL9uEmEqpdp7hLypkg8jZ%2FRt%2Bui%2Fx6a7BMNE4N3VNoByu17lH2ornmAVQo6h1DILRn8ZpE1uge8bXDq2zObnA6ND87B7b4Dw49a3dpR6JMp%2F8%2FTpPYFNycG2804o2CGguIa8fui5E17DV%2BWIXiGeaGV0iowNe3Cp0HFTz13uY0DEltPJR3RplilmDltrjd2xI0%2F5r3Su%2BMg4d1UPaxPrFX2en1ZfPtwXjxRpvhY7Yt14thzJbFsD6Kb%2B1PVaeMu2RwMVYWkWw9uHXr%2FDNAiTK1M19mDWmVoT8q0bkSu7ceNUAzQDiLHPCfra2h8yvgxJ%2BkyXtdYtm9MAm7Hx99%2FI%2F2kivWB8%2FDUwuOy1wQY6pgH9B0kmvjWJw8PoQ34H%2BMH4ZxFw71dsiaHgtt3Y%2FTXW%2BAky%2FihWKY5y05n%2BI3QafChuHfNVqH6RRh6vf80Sw84fjkxnci0Br4x0AlxAHyA9aTETIByA4%2B36jHmx0fWGrPLqQUdj10FcU3Z%2Bac87JWhgswmKWQBggpaaJhxtUWppxrSdOGqBmhurofDH2eglXJ5qaOP4Bbgk4E%2B7jUILurBmKjrkarph&X-Amz-Signature=6f3648ca164edafe7ac0cb60654aef4e7d492a85aa5b11e6508b4342cc4c61ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVJLP63%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB0SgtR37jL702Gde5uvK6t7ql%2FL9S2CmWmhEhA6woAiAIQn8Pc8bUEC2aPsjLBAWH1Ofh42uzRikXILhLDlBN%2FyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VI3XNb%2B968rh%2FmAKtwDJ5ketsPw2ywA7D%2FXvVNBFifaI95cjIE9AsuoZteQGNlsLhBOKU8IJFsCSQS5JpDEWqO2%2FKjRIt4vs0ChSHT53K8ukUQHb8MQ34DY5biWaObk3mybW5dnvG3ZMtP0qjNzVehgI4E5cPJRZjqAKcRFBEjV2kz%2B0iu4M%2Bce0X6UPYnkLkM8724IFGpuEz92EQZh81DXUutp4sKLeuoFTLVYXo2mhRl7F2aD3%2Bx4QwM7sURU3lQAF8zn5U4id80w69Rc0xd6zpOOob3Yk17hb%2FzHpqNILMWVkL9uEmEqpdp7hLypkg8jZ%2FRt%2Bui%2Fx6a7BMNE4N3VNoByu17lH2ornmAVQo6h1DILRn8ZpE1uge8bXDq2zObnA6ND87B7b4Dw49a3dpR6JMp%2F8%2FTpPYFNycG2804o2CGguIa8fui5E17DV%2BWIXiGeaGV0iowNe3Cp0HFTz13uY0DEltPJR3RplilmDltrjd2xI0%2F5r3Su%2BMg4d1UPaxPrFX2en1ZfPtwXjxRpvhY7Yt14thzJbFsD6Kb%2B1PVaeMu2RwMVYWkWw9uHXr%2FDNAiTK1M19mDWmVoT8q0bkSu7ceNUAzQDiLHPCfra2h8yvgxJ%2BkyXtdYtm9MAm7Hx99%2FI%2F2kivWB8%2FDUwuOy1wQY6pgH9B0kmvjWJw8PoQ34H%2BMH4ZxFw71dsiaHgtt3Y%2FTXW%2BAky%2FihWKY5y05n%2BI3QafChuHfNVqH6RRh6vf80Sw84fjkxnci0Br4x0AlxAHyA9aTETIByA4%2B36jHmx0fWGrPLqQUdj10FcU3Z%2Bac87JWhgswmKWQBggpaaJhxtUWppxrSdOGqBmhurofDH2eglXJ5qaOP4Bbgk4E%2B7jUILurBmKjrkarph&X-Amz-Signature=895e6fed06bef65d0936a28e20e6a2ca4cfef19024aa43b388f4eb2236f01728&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
