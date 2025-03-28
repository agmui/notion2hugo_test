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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ67FZW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5Cf%2Br3xOXKs3KxscPGoYLct6gWrq1EyN9CNtlSYilDAiAnEc%2BT1ESmpd6dOcH9GgsLN1FCV5%2B0QSIf6bVn9pQxNir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCcp78fJHM1xxy2NlKtwDF1IJ0KuAuB3iKu%2F8FMAXlMp1M2SHwOJheJKyTxCZVdCg7SZrqeXBaljCVmmBl0oAlblhyolzbWQl%2BdSPfuCyTo3JJZTQuWlWtX5KY3TpaGtzL%2FFA7o0GsCg0iUbLzG3tybeXilCX404yMkdBprOCP1z%2BLmAqUcG5DaAf80IZMu%2BUsyI0LBhLMMKazDBmFL2uYeniy2bBmuzU3aAx797DPprES%2Bn1UWgSRE2eqQs2vAFX67kJi6gTMC3lRcoGkBYNCZwDuCwYrvrFi123TnBvfs0mEejQIepzov5USU7KW0J%2BrcJhNDm9nxD%2BeXUf2Q%2BkXc9O44Kz99YWYMHd6T2zrccgMP0IkDQnmXSOL7%2BFZk9F%2B5GEQCQFohsaX6KzMOug%2B5Z7daFELcKvmqQCEW%2BM8XUkrt%2BhblX33QtNex8jo%2BS16hbR2O3LOEaNlUnb0ne0qJ2oAsot8%2FleaqX2698tHAdKNRV%2F4dzSN5RwXCzK8S7332%2B%2F9qoDffgw2VLqTgqOH29%2Fi%2FQ3UlJMq4GEZvgMnmRAQ3UhLN%2F9VOdMXafhtCb9P%2BiUHOK%2Bv7sMYLh4ui7j3NGvRsHxkSa6NX4qm7aY9SlDjUM8iFVyi%2Ffh3S41M4vfI9ef2cqJOu5F8CEwirGavwY6pgEE2aCOOwV2Sbc%2F7hepgPazImpubeLwMilRO2bxHL1o9%2BzmTtlEaq8kzwCi2CdnIYeb4n4oWXFFpJSNB1aajaatAqr%2FHrVUPsS5LC9hnL8IOEbsQCQkv3z%2F2mW1dCBnwFB3sIxtc5NgWdTGrNqjA8ArJpQFHu3RKOLmYLZFVgzYqBKI9ZLX%2Fqo9UHcj1HtEAzteZtykZIm5wdsfMnD5IHEJsbOIeSRh&X-Amz-Signature=f8f51f077c354c9d7df80337221a395e36496dad74fc5397fc38496700192564&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ67FZW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5Cf%2Br3xOXKs3KxscPGoYLct6gWrq1EyN9CNtlSYilDAiAnEc%2BT1ESmpd6dOcH9GgsLN1FCV5%2B0QSIf6bVn9pQxNir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCcp78fJHM1xxy2NlKtwDF1IJ0KuAuB3iKu%2F8FMAXlMp1M2SHwOJheJKyTxCZVdCg7SZrqeXBaljCVmmBl0oAlblhyolzbWQl%2BdSPfuCyTo3JJZTQuWlWtX5KY3TpaGtzL%2FFA7o0GsCg0iUbLzG3tybeXilCX404yMkdBprOCP1z%2BLmAqUcG5DaAf80IZMu%2BUsyI0LBhLMMKazDBmFL2uYeniy2bBmuzU3aAx797DPprES%2Bn1UWgSRE2eqQs2vAFX67kJi6gTMC3lRcoGkBYNCZwDuCwYrvrFi123TnBvfs0mEejQIepzov5USU7KW0J%2BrcJhNDm9nxD%2BeXUf2Q%2BkXc9O44Kz99YWYMHd6T2zrccgMP0IkDQnmXSOL7%2BFZk9F%2B5GEQCQFohsaX6KzMOug%2B5Z7daFELcKvmqQCEW%2BM8XUkrt%2BhblX33QtNex8jo%2BS16hbR2O3LOEaNlUnb0ne0qJ2oAsot8%2FleaqX2698tHAdKNRV%2F4dzSN5RwXCzK8S7332%2B%2F9qoDffgw2VLqTgqOH29%2Fi%2FQ3UlJMq4GEZvgMnmRAQ3UhLN%2F9VOdMXafhtCb9P%2BiUHOK%2Bv7sMYLh4ui7j3NGvRsHxkSa6NX4qm7aY9SlDjUM8iFVyi%2Ffh3S41M4vfI9ef2cqJOu5F8CEwirGavwY6pgEE2aCOOwV2Sbc%2F7hepgPazImpubeLwMilRO2bxHL1o9%2BzmTtlEaq8kzwCi2CdnIYeb4n4oWXFFpJSNB1aajaatAqr%2FHrVUPsS5LC9hnL8IOEbsQCQkv3z%2F2mW1dCBnwFB3sIxtc5NgWdTGrNqjA8ArJpQFHu3RKOLmYLZFVgzYqBKI9ZLX%2Fqo9UHcj1HtEAzteZtykZIm5wdsfMnD5IHEJsbOIeSRh&X-Amz-Signature=be94541ceb7dfc8464a95bfa9eac88680a1471f2e448c186b11cdd0678bf8d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
