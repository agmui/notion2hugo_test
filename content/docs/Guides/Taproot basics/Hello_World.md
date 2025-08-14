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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOLA2NJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxLaUsRaUmqQdxpFVl%2FS1juzE9Np%2F2utOdHPDweG418gIgCb9iIni5OAyWYTC2U6EyCwck7mf2tAd6lzTMDv2Pulcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJNlZTgAoo8W5LcddSrcA%2Ft5tYcimzGfG675wVuveTAiR8b%2Fx4XP1bu4zAq8D3krBZ4nlJ9eHtl2F5UntraO6L1xLhM1y90nS0w2XJL8nJzTCnyi4wyKDe7qRQrDJs%2BZnYHr8RbZ9EAHoQ3H6ccTMGl%2BvuhLn0WC4c3b6vwALBOqQUGd24FZCkcu1eAVmYFjcjxijyVQK43%2BBaQ6yg%2Fn11Pg2s5Ka2JbAqGAu00pzk3c19ea%2BGPKJA2AwfYsHtsf8bdUDvL3SxPTdlAOq2WcibqqQ2o5WSsoo2Hm6W1LxvuYThrNLjGudytbAINLXQZsm78vp45sxOwe4Lap22RoBBl50XhO6yzjvk3I2dKSWirlaGIhWDmp98YjEsOF2zHQWrNuxkMi5VA9CRZZkSMcWk8GKMkuEuXhQ2fyq7jldutA3dm4hLeGtARoE3Sf1HukaezfsWOESEcQQC26SszSdYennpkH%2F%2FT9GbNoFoB5f6uhY5W%2B86oQT%2Fe%2BDT5sEH9ANkzUPoruxh6hjgssDKbhHbKmcjTc%2BGxfFlPyOCleVXljECaUk6Tk24ash5%2B%2B%2Fnt1lA%2BmdoOltRN7h%2B1WIcas4%2FRfTTnGSp6GhpE56QM1iiVgvBIllFkLsl6KkyIOSaMRBR8ZkqfZc8jU69DzMMWE98QGOqUBLmjpZZUPm%2F%2BXV82LgBmS9llED4fJ4rKYI2QUQxJ%2FYSTFvHHBfNXVtU9puiD9DPaxwQAfNEkkWB%2FbM1Q23cbRcsCHumd2SUSFaENJrPRvKbzWZb3ObB23NJHmcNa1K9ZesTWYHXCmqmigILHGyQVWRJrKb%2FFO86QmZ3fHy6n8jwEl44f%2FrciDrKAHLkiShT05E9%2BmiluewovWtarL%2BTH5PW2deSE8&X-Amz-Signature=1752fc0d642499c8d7131a896315032f9c442914c04ae6ec7145480a0ab8d220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOLA2NJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxLaUsRaUmqQdxpFVl%2FS1juzE9Np%2F2utOdHPDweG418gIgCb9iIni5OAyWYTC2U6EyCwck7mf2tAd6lzTMDv2Pulcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJNlZTgAoo8W5LcddSrcA%2Ft5tYcimzGfG675wVuveTAiR8b%2Fx4XP1bu4zAq8D3krBZ4nlJ9eHtl2F5UntraO6L1xLhM1y90nS0w2XJL8nJzTCnyi4wyKDe7qRQrDJs%2BZnYHr8RbZ9EAHoQ3H6ccTMGl%2BvuhLn0WC4c3b6vwALBOqQUGd24FZCkcu1eAVmYFjcjxijyVQK43%2BBaQ6yg%2Fn11Pg2s5Ka2JbAqGAu00pzk3c19ea%2BGPKJA2AwfYsHtsf8bdUDvL3SxPTdlAOq2WcibqqQ2o5WSsoo2Hm6W1LxvuYThrNLjGudytbAINLXQZsm78vp45sxOwe4Lap22RoBBl50XhO6yzjvk3I2dKSWirlaGIhWDmp98YjEsOF2zHQWrNuxkMi5VA9CRZZkSMcWk8GKMkuEuXhQ2fyq7jldutA3dm4hLeGtARoE3Sf1HukaezfsWOESEcQQC26SszSdYennpkH%2F%2FT9GbNoFoB5f6uhY5W%2B86oQT%2Fe%2BDT5sEH9ANkzUPoruxh6hjgssDKbhHbKmcjTc%2BGxfFlPyOCleVXljECaUk6Tk24ash5%2B%2B%2Fnt1lA%2BmdoOltRN7h%2B1WIcas4%2FRfTTnGSp6GhpE56QM1iiVgvBIllFkLsl6KkyIOSaMRBR8ZkqfZc8jU69DzMMWE98QGOqUBLmjpZZUPm%2F%2BXV82LgBmS9llED4fJ4rKYI2QUQxJ%2FYSTFvHHBfNXVtU9puiD9DPaxwQAfNEkkWB%2FbM1Q23cbRcsCHumd2SUSFaENJrPRvKbzWZb3ObB23NJHmcNa1K9ZesTWYHXCmqmigILHGyQVWRJrKb%2FFO86QmZ3fHy6n8jwEl44f%2FrciDrKAHLkiShT05E9%2BmiluewovWtarL%2BTH5PW2deSE8&X-Amz-Signature=fcad096e46ba5b4e58182d3b6c9937731319a35a0a27012722e626b5c73c2f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
