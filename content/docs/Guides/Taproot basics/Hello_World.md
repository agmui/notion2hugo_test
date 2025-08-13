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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2NGHWN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZAemqimwj2DGbOwZBOPWyOcx3P%2F2a44A%2FDTeWOUmVngIhAJbiVSboLqcfP2VPOIc%2FWcPy%2BSAB1%2B1%2BP5MrPmbif0%2FPKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMcuP677KPmkx7ezAq3APS21o8egHgytTMUNXyx2IsH68tYrSIUOEdKLYy9Llb91i6Cq88DjIp6ZE2k2oKniD7R2cAEHs%2BrtgnyrlYNjcA0flqeR9TBq6RPyYyTz9M5w4xpDnB9AFVIf59WYZDkldBJCR1Q9Ct25%2B%2BYDUF9Ye16695IKVej%2BEo%2B8cVUm%2FCyMNqakvw90Fw7OoICwh8CpH8nFmCeylcmg7FoeEKE%2BW%2F8w32XE8KlkiIkNgBT3%2F4N4ciSiytLsawNqKbT%2Bm3B2n5dfjHr%2FOSDai89SFuE5AukZCckbbztg86ptdf0DLC5ke7nlAQG6QAGxd%2BviXy%2FnKyjdGKpmgE8d%2BuIEdk4YLuiF61dEP2cb9MKbGhJTHkETnAcrruyebOLbJR6bnsjGC7ovWYXtdtbvkpPECgQXIkRh6rH9c3R9uw5tu%2Bv%2FrJUab1Sl7ewIraOy8%2BpPu%2FX0gmDRlLbhcqMf%2BvKUqo36fWj8wSksdXmhGIqz1Wx%2F3Zi828CwdnZKFpziJNnzKBoI24o6loaEEvwisY6N0gAhkko5%2FtmexTwUeQ2jYKeihIiXluje2RfA%2BwzeWRxYjOcrcS5JNBsPc2vynZYHlU26kEMYHpXjIYjQrshTHpFWGM8%2Bl7XzltjFmJIh7qaTCg0fDEBjqkATeQcwDMop%2Bj2OllDTe8U1vPjwA0YQ2G4n5ah0r3v4e5DRfEgwR7a6Hz0ANTFUxU%2FwPoBhmRyb61ycTtlriJ9rhZbyt3I2Y3ZIiN8CNFIgid9cECQvlyX7Iw5j3UeoxCIdWyNobLH7Mlb7dEbAkpvaRd7spv9tPIDYCZG6xRq6NBXGH%2Fd6wEN29rxylLKi3SaM7UlCD7OkKTyA7AP0Tp%2BtYljWB%2B&X-Amz-Signature=eb8a94c42a036ca905fb766cb3fa60fe9521d01dd20d2dda5cb0747753c35fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2NGHWN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZAemqimwj2DGbOwZBOPWyOcx3P%2F2a44A%2FDTeWOUmVngIhAJbiVSboLqcfP2VPOIc%2FWcPy%2BSAB1%2B1%2BP5MrPmbif0%2FPKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMcuP677KPmkx7ezAq3APS21o8egHgytTMUNXyx2IsH68tYrSIUOEdKLYy9Llb91i6Cq88DjIp6ZE2k2oKniD7R2cAEHs%2BrtgnyrlYNjcA0flqeR9TBq6RPyYyTz9M5w4xpDnB9AFVIf59WYZDkldBJCR1Q9Ct25%2B%2BYDUF9Ye16695IKVej%2BEo%2B8cVUm%2FCyMNqakvw90Fw7OoICwh8CpH8nFmCeylcmg7FoeEKE%2BW%2F8w32XE8KlkiIkNgBT3%2F4N4ciSiytLsawNqKbT%2Bm3B2n5dfjHr%2FOSDai89SFuE5AukZCckbbztg86ptdf0DLC5ke7nlAQG6QAGxd%2BviXy%2FnKyjdGKpmgE8d%2BuIEdk4YLuiF61dEP2cb9MKbGhJTHkETnAcrruyebOLbJR6bnsjGC7ovWYXtdtbvkpPECgQXIkRh6rH9c3R9uw5tu%2Bv%2FrJUab1Sl7ewIraOy8%2BpPu%2FX0gmDRlLbhcqMf%2BvKUqo36fWj8wSksdXmhGIqz1Wx%2F3Zi828CwdnZKFpziJNnzKBoI24o6loaEEvwisY6N0gAhkko5%2FtmexTwUeQ2jYKeihIiXluje2RfA%2BwzeWRxYjOcrcS5JNBsPc2vynZYHlU26kEMYHpXjIYjQrshTHpFWGM8%2Bl7XzltjFmJIh7qaTCg0fDEBjqkATeQcwDMop%2Bj2OllDTe8U1vPjwA0YQ2G4n5ah0r3v4e5DRfEgwR7a6Hz0ANTFUxU%2FwPoBhmRyb61ycTtlriJ9rhZbyt3I2Y3ZIiN8CNFIgid9cECQvlyX7Iw5j3UeoxCIdWyNobLH7Mlb7dEbAkpvaRd7spv9tPIDYCZG6xRq6NBXGH%2Fd6wEN29rxylLKi3SaM7UlCD7OkKTyA7AP0Tp%2BtYljWB%2B&X-Amz-Signature=0983e5eeaa94c6d0a1ab8a56908a5c8b0b58d4ca431f691b36767585238c54fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
