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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGL2GW4O%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaROm%2Fw8cx9AwX6czteTwJ4oRKTjsQb9eSi9ipsPOJawIhAMshLRc87ULBXzK0M%2FccCZbX%2FVu%2Fw9yayBBRDqFsc1nIKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz0ws5mZBASRxFy%2BYq3APF5Kq%2B2otNo7C1Ia39zj%2Fd3MAWmFWQsztXt8aHHcmvbBGy233n5jhmAWtN5vdVl9jSFvKEzIp65vo1%2BMqV0hIF3vK6J24RRE%2FtxivG0wh2KDLAPbeFcnJcZz8%2B%2FGf8ZndtvED64Ob9aa5PthoSr8%2FkmmgUcEoRboFEvkO3F1zSO4Derm4VA1xpBKWbQdr8vpeur%2B1w99gdWGxGoHiZpSO0maHvEckQjJCRONfaInFivKGY%2BjjYlw3o9IokILyw93uojyP%2FCEltuQn2auuX7MBc2NeH5Mvnu%2FQMJYR1Y%2FdWvlybGoxi5CDhWaN%2BFLnU%2BfeReKGnR%2Bn7e9kvhAf5%2FFHxH0T3OwoPaPx8sw2gwF6jR4CAlZVx1zOM4w5NXSRr1eSnqOVVvef37coTE7BHgBeBYR5CTitmvsw01NK0I%2F6K%2BtRj2IO4LlNrMerW5srYxkBe5OgFTNvNS%2BOXOwIfAynW5Vazu14S%2Bsi7I59NMiusA66PL4UO%2BIPbl8aHcQ56Qzckapj9ENZBxZCVC%2B5Uiw6RgnrXjx8GxnktMBNy8uOaMYevMy4HMIKzPs6qU1Hk3SwA4Vky%2FxWCBI6sI4T0So5j5Q4e94mQoVrko%2BsWL%2B%2F9QGeuHWgBXvKLUot4SzCh7Oq9BjqkAbqjWS1Zue39m4ZUWHi6iakovYo2VZf8b3gLLxftcJvQTNEjKE5h4LmacxpQ41Ew2IZWhbI%2BtzhhW2r6rITTwmRrzpOgyyGouvp7Mi7uNhoSeR%2BITrwGP7Yb5VWyPSAerqas2eWzoOBb5Bcid%2F0BJJ%2FH%2BYJvavXRNK0CqayGVq4%2FILNirMgMfsnN858vVW%2FAStABBnFnFfDJwHX2O5eUfeEuVt9g&X-Amz-Signature=c3fa0036d32a1be2dd2c5d2b0dd8a814a3dac8a89a9c272b66ee996f2114d827&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGL2GW4O%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaROm%2Fw8cx9AwX6czteTwJ4oRKTjsQb9eSi9ipsPOJawIhAMshLRc87ULBXzK0M%2FccCZbX%2FVu%2Fw9yayBBRDqFsc1nIKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz0ws5mZBASRxFy%2BYq3APF5Kq%2B2otNo7C1Ia39zj%2Fd3MAWmFWQsztXt8aHHcmvbBGy233n5jhmAWtN5vdVl9jSFvKEzIp65vo1%2BMqV0hIF3vK6J24RRE%2FtxivG0wh2KDLAPbeFcnJcZz8%2B%2FGf8ZndtvED64Ob9aa5PthoSr8%2FkmmgUcEoRboFEvkO3F1zSO4Derm4VA1xpBKWbQdr8vpeur%2B1w99gdWGxGoHiZpSO0maHvEckQjJCRONfaInFivKGY%2BjjYlw3o9IokILyw93uojyP%2FCEltuQn2auuX7MBc2NeH5Mvnu%2FQMJYR1Y%2FdWvlybGoxi5CDhWaN%2BFLnU%2BfeReKGnR%2Bn7e9kvhAf5%2FFHxH0T3OwoPaPx8sw2gwF6jR4CAlZVx1zOM4w5NXSRr1eSnqOVVvef37coTE7BHgBeBYR5CTitmvsw01NK0I%2F6K%2BtRj2IO4LlNrMerW5srYxkBe5OgFTNvNS%2BOXOwIfAynW5Vazu14S%2Bsi7I59NMiusA66PL4UO%2BIPbl8aHcQ56Qzckapj9ENZBxZCVC%2B5Uiw6RgnrXjx8GxnktMBNy8uOaMYevMy4HMIKzPs6qU1Hk3SwA4Vky%2FxWCBI6sI4T0So5j5Q4e94mQoVrko%2BsWL%2B%2F9QGeuHWgBXvKLUot4SzCh7Oq9BjqkAbqjWS1Zue39m4ZUWHi6iakovYo2VZf8b3gLLxftcJvQTNEjKE5h4LmacxpQ41Ew2IZWhbI%2BtzhhW2r6rITTwmRrzpOgyyGouvp7Mi7uNhoSeR%2BITrwGP7Yb5VWyPSAerqas2eWzoOBb5Bcid%2F0BJJ%2FH%2BYJvavXRNK0CqayGVq4%2FILNirMgMfsnN858vVW%2FAStABBnFnFfDJwHX2O5eUfeEuVt9g&X-Amz-Signature=69dab213ab8e4e07d1ff78603682c055af7caefe608c602a54ca03daca7905a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
