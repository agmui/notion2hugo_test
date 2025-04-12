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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKJEX3R%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGrdUukEJddOtlE%2FO9gjT8fPf3bl3OjGe%2FBt4sZm4wtuAiAZC7KoeepM535SPRfcTHlrD19kVaj3o4NAuuBSwdK0JSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEruLfJ6uqzXtX5DKtwDAHg%2FzMp14m4l%2BWIs6YJuTQU79oyH8mK5Z%2FwROMCnkWVPOee%2FgJcMdSbGyi%2F4bxnl4hvrDXdiXM%2BUi%2BPKbbiyK8rqMYQapVod5sT%2BekHHsgBIYeGuahbI6LEhUZtY7Rm%2BahU9gMz0C7keFUn4PbYloLY%2BKXzTgFz0KVMTb175rLtczzZSaDUxFRrgxAYUtgL4Bvz7MNhDO2dsynPo5ZDkpO%2BJKN8dznEelDoeBHZ6Ssgvg0r%2BqjOoOrNqllJ6%2BD2M%2FyWa45QoEIHvbgO98Ys7lJVLxJkJOrg1JBNt%2B6DwzhCy2xqceqKBKcpaYpSDzCtRezw1d%2FbR74qS02wPrCrm4st%2FVrz7QCivSV0S2LYFT6tURCVA7EUjPyoWNRpCK08K4S%2BEbskl5m305mRz7bT9UCRtFM50pCE%2BJlWiMWAIbcRBII9yqOlqQoyvphYi3lPjOXZPaLqVA7ZVmyaMYKrvPkjs4W79%2FxwkC%2F4JbnqrEi0KsAOqQeFsVy9yVOlD9eakT15Nrfa%2B%2BP%2ByjWXGXDyzHfVlKvpVj1IFoPB7X8baPAXQvpvnQyeYUWmDsyHZb0O%2FKR78t7OJJNrSwzGkdRAC1261Im68xbukMaP%2Bt8%2BXQ5TDV4trOaz6lAfuJoIwp%2FvpvwY6pgEowmdd090d%2F9cwF1AtKKzJLphZrwP7qMztS4uLg0gOMc2eLEPAaLscroQUBg4adQ27M7sEZ1V93lppvbbkzz7fEFAuewZw%2BzRMuON10UPq6rNSZu%2BylGvgt4jOMFF23sA43rcqgpzOOEQ6HMkjUfHv8xxE3wQNzLMUjTuJyBomR3WigNlruuuVrZ1xQQCB7eo6%2B0rckgSpqxoOtQ0MDOEuhfHlcFob&X-Amz-Signature=b302e6bbe2036f0319c4713a80fc4aa6ed82e16b16a6b592bebb8de3eda7a097&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKJEX3R%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGrdUukEJddOtlE%2FO9gjT8fPf3bl3OjGe%2FBt4sZm4wtuAiAZC7KoeepM535SPRfcTHlrD19kVaj3o4NAuuBSwdK0JSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEruLfJ6uqzXtX5DKtwDAHg%2FzMp14m4l%2BWIs6YJuTQU79oyH8mK5Z%2FwROMCnkWVPOee%2FgJcMdSbGyi%2F4bxnl4hvrDXdiXM%2BUi%2BPKbbiyK8rqMYQapVod5sT%2BekHHsgBIYeGuahbI6LEhUZtY7Rm%2BahU9gMz0C7keFUn4PbYloLY%2BKXzTgFz0KVMTb175rLtczzZSaDUxFRrgxAYUtgL4Bvz7MNhDO2dsynPo5ZDkpO%2BJKN8dznEelDoeBHZ6Ssgvg0r%2BqjOoOrNqllJ6%2BD2M%2FyWa45QoEIHvbgO98Ys7lJVLxJkJOrg1JBNt%2B6DwzhCy2xqceqKBKcpaYpSDzCtRezw1d%2FbR74qS02wPrCrm4st%2FVrz7QCivSV0S2LYFT6tURCVA7EUjPyoWNRpCK08K4S%2BEbskl5m305mRz7bT9UCRtFM50pCE%2BJlWiMWAIbcRBII9yqOlqQoyvphYi3lPjOXZPaLqVA7ZVmyaMYKrvPkjs4W79%2FxwkC%2F4JbnqrEi0KsAOqQeFsVy9yVOlD9eakT15Nrfa%2B%2BP%2ByjWXGXDyzHfVlKvpVj1IFoPB7X8baPAXQvpvnQyeYUWmDsyHZb0O%2FKR78t7OJJNrSwzGkdRAC1261Im68xbukMaP%2Bt8%2BXQ5TDV4trOaz6lAfuJoIwp%2FvpvwY6pgEowmdd090d%2F9cwF1AtKKzJLphZrwP7qMztS4uLg0gOMc2eLEPAaLscroQUBg4adQ27M7sEZ1V93lppvbbkzz7fEFAuewZw%2BzRMuON10UPq6rNSZu%2BylGvgt4jOMFF23sA43rcqgpzOOEQ6HMkjUfHv8xxE3wQNzLMUjTuJyBomR3WigNlruuuVrZ1xQQCB7eo6%2B0rckgSpqxoOtQ0MDOEuhfHlcFob&X-Amz-Signature=e388184521c4ae488172358bf885b0e10ec9c78c82ed49c4443d751ee2fccbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
