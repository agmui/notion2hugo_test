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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIPZ7CJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG6KBhPNE9KLjc6yD6wlFPT6Blf9f4M4ZeYW0oV2VDU9AiEAoj7kFRxEY0BA4A6LTyAGm%2FFCJLkP6zMuZ465YD6geC0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPFitU1oiQdzQzqPFircA8ElqiliZ5ONB3BaVNyVKchTT7VLfq1k%2BlOmHw0mwHusggqbqX3FfBEu9ebPQcZT5sIs1K3QPpzOajAGjOZHp6xT9KFSXahbuDAe9Dmvk3WuZeQ61rOi2O0zpMr7nVwnAZbya4wp%2BGQBTtIYrzcSrYS5fliJpb6H2rstLCfsUwUM%2B%2F%2FJqTgZr%2F3PyKS0yb96h%2FMhtwfBQTIuoJwHF65iNziuT6hUENgDB32dVF%2BeNehR5%2FSZwo%2FNRXN874h0GpAw3FIiWwc1oUYupta3wrSP0NDdoy4vOcg1Flqil4qV0zzwyo5hAORZ2PsJZCF9FUq9dyMbDy1M4iif4e5Ck7dnmGy9xd5iP88z8TA7v1hh4WGwhiCqvSPVDULrsrkSHrKUzG7WhzWyTnx5E2s1IoeoUOcdVtBYevKqxh%2FWJnH8GEJHrruJmuxWp842gyB63XNP4MioWuI43urUmkWxktcVOml%2FjMRuJdRboA2sMVM2%2FNB8582bgK7HNKEDo00PCCfi8%2FBVE8ydgANazjyHZwH37%2BkFBv3tu7M7RM7CpnlB2dLmdCPToPde8Jb1ogba4dfFWfEVSzqHQ5Vf9cLzMET57hjFQnuYB49%2BVEW5CnNV7JlQ%2F8FjpplkkZHKCzYnMJf2t8IGOqUBkK0V%2B4N8JqpVzOY1e11RZlvIsEKh5C5grmdJyW16ng7Hsa84jZdmSPLFxzqBvzW24RuJkWFIiUd%2BYDoZD0ab5O16UwV7YLzuJ%2F%2Fk3XIxZdiXlB8iZ354TgJeG9dEzde4yxNXo89dbm5fN2fEISrE9NiPhePlYJK6eCgXFr%2BpsMoqYzNZEAVFQBfZUZpgOPuI6T%2FFh%2FeV2nyOceQ25alLahey%2BbTa&X-Amz-Signature=f1975f0a4150d0fd64b993d1f0ecc1faaa0ae9c5ede5a86baa3921451a63ed2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIPZ7CJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG6KBhPNE9KLjc6yD6wlFPT6Blf9f4M4ZeYW0oV2VDU9AiEAoj7kFRxEY0BA4A6LTyAGm%2FFCJLkP6zMuZ465YD6geC0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPFitU1oiQdzQzqPFircA8ElqiliZ5ONB3BaVNyVKchTT7VLfq1k%2BlOmHw0mwHusggqbqX3FfBEu9ebPQcZT5sIs1K3QPpzOajAGjOZHp6xT9KFSXahbuDAe9Dmvk3WuZeQ61rOi2O0zpMr7nVwnAZbya4wp%2BGQBTtIYrzcSrYS5fliJpb6H2rstLCfsUwUM%2B%2F%2FJqTgZr%2F3PyKS0yb96h%2FMhtwfBQTIuoJwHF65iNziuT6hUENgDB32dVF%2BeNehR5%2FSZwo%2FNRXN874h0GpAw3FIiWwc1oUYupta3wrSP0NDdoy4vOcg1Flqil4qV0zzwyo5hAORZ2PsJZCF9FUq9dyMbDy1M4iif4e5Ck7dnmGy9xd5iP88z8TA7v1hh4WGwhiCqvSPVDULrsrkSHrKUzG7WhzWyTnx5E2s1IoeoUOcdVtBYevKqxh%2FWJnH8GEJHrruJmuxWp842gyB63XNP4MioWuI43urUmkWxktcVOml%2FjMRuJdRboA2sMVM2%2FNB8582bgK7HNKEDo00PCCfi8%2FBVE8ydgANazjyHZwH37%2BkFBv3tu7M7RM7CpnlB2dLmdCPToPde8Jb1ogba4dfFWfEVSzqHQ5Vf9cLzMET57hjFQnuYB49%2BVEW5CnNV7JlQ%2F8FjpplkkZHKCzYnMJf2t8IGOqUBkK0V%2B4N8JqpVzOY1e11RZlvIsEKh5C5grmdJyW16ng7Hsa84jZdmSPLFxzqBvzW24RuJkWFIiUd%2BYDoZD0ab5O16UwV7YLzuJ%2F%2Fk3XIxZdiXlB8iZ354TgJeG9dEzde4yxNXo89dbm5fN2fEISrE9NiPhePlYJK6eCgXFr%2BpsMoqYzNZEAVFQBfZUZpgOPuI6T%2FFh%2FeV2nyOceQ25alLahey%2BbTa&X-Amz-Signature=812ad747bbd5749a51ea4fe79f4a9755ef4257c677d6169e42bd959668e1ef1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
