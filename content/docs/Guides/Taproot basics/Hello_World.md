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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYZ6XY4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAOQqS60nomHgYSA5EfAa5SO%2F9%2BFTp0Hp%2B0tqUE6kkKAiEA%2FrZoDHL%2BSu0yzljjsB9Npa0Myn9SErZO4jrK0AXm09YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4TNjtMd%2FYjAQI5qCrcA3m9e0z%2BE2h4fB1RMO%2FFkXToWtIh0R7cPpFc85kVXGgEr3IBV6SO6UqOnPTzgeoJciqHKCQgtnCcQBiMuZ%2Fz6wKAVrLukRlbvrRslLFSH%2FHWU0j0wLfKKtBgiOJcUf%2BI1AldQXnbIx%2FpCtPVyDKjzNZx1XXSMuAELa9A1YEP%2BSOfTClt8gstxwCOz1y7mSKB3FFsf6kDZIpGMMzm%2FWr0ghrZ6zT29XdlOfSejzxIejYo2zRb50ExlfY3pADx8RUJkCztxvNVj3IOFWZ8v5vW9lu7LBrHKgj7rm7cwmTjI8TL%2Fg0x99ec9uO5QpS60cd6g%2FqZcBJT9RgWHEqUYt0qNPYEMyFlCAIaRcRfoW1QXkEZHvqjMwzYrB1DoH34XpjKfIMi9u4Gl2Rk3roFtfg%2Bq3m8yZCYOWXiFVWSDvFSdjy42BtIhAzHf3mZC6hD6vxeKGp4MROD9%2FvM66lsrEAgua6Ud5n11J7BzEPdhB1E4eu49CZe%2F8dJqP%2BhkmH8EOc0n6OyuUPTit%2Fesl5sMpbqZhhZbRoe1YFhjxc5iC59PtDtxn8z10Ghm0GkVKx3BxNrhpCBQIRsiZkviyjWYpvjAfYmlWiIXYTCC%2FVNvmhVUsLiwLgBzj1YGiKlXvK2MPa808IGOqUBGw9fre2evAxOKStwAGjj15DJvEJj4eCpDskdinWwHed8rTXB5Y5xKzuUNtWvLzdm96RO989LXOjK9Qu7tNFm1K6vbjaT8kCFNL1yKGNlC4WXa81ah2X%2B6K9HMILxgOxmhuhualmXGgcqmmL3n7Fc7a1KL%2BjmBVPujLNLRAoZwh5F2rVdJxP5sa2VvRhjQEJVKU%2FCFj5ESM8w61jJFAO%2Fj412RxIE&X-Amz-Signature=fe9e7e1d38543bf930c5c6c33aad1ad4c78ae275833412f4d2ac43e8142d8696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYZ6XY4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAOQqS60nomHgYSA5EfAa5SO%2F9%2BFTp0Hp%2B0tqUE6kkKAiEA%2FrZoDHL%2BSu0yzljjsB9Npa0Myn9SErZO4jrK0AXm09YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4TNjtMd%2FYjAQI5qCrcA3m9e0z%2BE2h4fB1RMO%2FFkXToWtIh0R7cPpFc85kVXGgEr3IBV6SO6UqOnPTzgeoJciqHKCQgtnCcQBiMuZ%2Fz6wKAVrLukRlbvrRslLFSH%2FHWU0j0wLfKKtBgiOJcUf%2BI1AldQXnbIx%2FpCtPVyDKjzNZx1XXSMuAELa9A1YEP%2BSOfTClt8gstxwCOz1y7mSKB3FFsf6kDZIpGMMzm%2FWr0ghrZ6zT29XdlOfSejzxIejYo2zRb50ExlfY3pADx8RUJkCztxvNVj3IOFWZ8v5vW9lu7LBrHKgj7rm7cwmTjI8TL%2Fg0x99ec9uO5QpS60cd6g%2FqZcBJT9RgWHEqUYt0qNPYEMyFlCAIaRcRfoW1QXkEZHvqjMwzYrB1DoH34XpjKfIMi9u4Gl2Rk3roFtfg%2Bq3m8yZCYOWXiFVWSDvFSdjy42BtIhAzHf3mZC6hD6vxeKGp4MROD9%2FvM66lsrEAgua6Ud5n11J7BzEPdhB1E4eu49CZe%2F8dJqP%2BhkmH8EOc0n6OyuUPTit%2Fesl5sMpbqZhhZbRoe1YFhjxc5iC59PtDtxn8z10Ghm0GkVKx3BxNrhpCBQIRsiZkviyjWYpvjAfYmlWiIXYTCC%2FVNvmhVUsLiwLgBzj1YGiKlXvK2MPa808IGOqUBGw9fre2evAxOKStwAGjj15DJvEJj4eCpDskdinWwHed8rTXB5Y5xKzuUNtWvLzdm96RO989LXOjK9Qu7tNFm1K6vbjaT8kCFNL1yKGNlC4WXa81ah2X%2B6K9HMILxgOxmhuhualmXGgcqmmL3n7Fc7a1KL%2BjmBVPujLNLRAoZwh5F2rVdJxP5sa2VvRhjQEJVKU%2FCFj5ESM8w61jJFAO%2Fj412RxIE&X-Amz-Signature=220b38142a19706a88ed651eb70910a52942b39127d3907a8d4f4e2594c541ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
