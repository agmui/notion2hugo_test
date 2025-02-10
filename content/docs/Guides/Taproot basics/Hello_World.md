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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E4HMDXW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDknwFr0NVvlH2Rv8Owqy4hBMd%2FkY0O7M%2BJ5Ah%2FG1yx4QIhAKAW%2Bk5hzfwQTwP3%2FiL1SjIC5IT1ENKg3mYJRaHB3dVfKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4lvAIr5NYS8MTYEIq3ANus8ZXrTbvtXT8ECGHm1nRVy0mWvW1t1CivSgpJisjAL5EcgJ74GZPPsJA8irgECubvskL2C08AQ6C0JPfsv0mp87hXeisYdbFmClbUzn%2F1c%2Fl7Q1HwwZdvWOcNXlsJNeM5S9giUNIvaz9Lpx%2FHkDIik8jJ7kGSdKtoqGYHIySK0l0JNqA%2FfCB5v3Cg46OZFT73RDYFQTUBkUot2elUnllghAfODxl5YHgJrHYUnqZvSOXFUbFJm4YDxojvr9bX3lmLS6qWxdYSrzudXKJtP%2BvkJOxhVsfRmqCMs6vmhcB1mAuJPYdFf1BafLEHpVC3tD%2BloXxc45FSQkI41jZpamfN4WI41P6fLvuk9JERAeQILg0eju1J4mREma7g9Neplco6d%2Bj1cPv6EV8Fj33zJSxRNzGV%2FpfkV9sYLJ5ZC96DuVUSMHJxZxW1RTIl0r0uj%2BC7LZKBwlO0jkX4R%2BdLQT3wH0Ng2IZ3dZxnD7ONqAH4rzCe1fCnNZwabaWAccDGKT%2FaIG68GMw13PVpnuzpn6eH41%2BkQcXe2L%2Fe7VeIRWHmphRquc%2FpmgymITuwjCQ3Z7Dip%2B6SoI5zf348BNyp0o0HNZr80rlJdDbmxTu1oPYlD4rCkQ%2FGxomXq0HBzDBzam9BjqkAWJR1%2ByS0TXkCrk2rDbeEBeHI147%2BEEAKuaUQQwNdh3ZQRLmoFXT86GpmSxP1zoMVunC3vuWPMhRS4heUY8eCGoA9NNwsWEg%2FWtpH41FSy5znbJ28nrbx%2BfuYEuX50FblibUhR5aWOGyYY9F9M50xc7wr%2Fs%2FaE4PSXGMV%2BPjkfHEU3Rpl2VR%2B4u5sizNq4dF0wIFMBgLjPpsSJBT7vFXcGo216Ha&X-Amz-Signature=64e21571f1b21c60f70fb4b3b7843d1da330e1e4b6b3cd70dbf4873a61767763&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E4HMDXW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDknwFr0NVvlH2Rv8Owqy4hBMd%2FkY0O7M%2BJ5Ah%2FG1yx4QIhAKAW%2Bk5hzfwQTwP3%2FiL1SjIC5IT1ENKg3mYJRaHB3dVfKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4lvAIr5NYS8MTYEIq3ANus8ZXrTbvtXT8ECGHm1nRVy0mWvW1t1CivSgpJisjAL5EcgJ74GZPPsJA8irgECubvskL2C08AQ6C0JPfsv0mp87hXeisYdbFmClbUzn%2F1c%2Fl7Q1HwwZdvWOcNXlsJNeM5S9giUNIvaz9Lpx%2FHkDIik8jJ7kGSdKtoqGYHIySK0l0JNqA%2FfCB5v3Cg46OZFT73RDYFQTUBkUot2elUnllghAfODxl5YHgJrHYUnqZvSOXFUbFJm4YDxojvr9bX3lmLS6qWxdYSrzudXKJtP%2BvkJOxhVsfRmqCMs6vmhcB1mAuJPYdFf1BafLEHpVC3tD%2BloXxc45FSQkI41jZpamfN4WI41P6fLvuk9JERAeQILg0eju1J4mREma7g9Neplco6d%2Bj1cPv6EV8Fj33zJSxRNzGV%2FpfkV9sYLJ5ZC96DuVUSMHJxZxW1RTIl0r0uj%2BC7LZKBwlO0jkX4R%2BdLQT3wH0Ng2IZ3dZxnD7ONqAH4rzCe1fCnNZwabaWAccDGKT%2FaIG68GMw13PVpnuzpn6eH41%2BkQcXe2L%2Fe7VeIRWHmphRquc%2FpmgymITuwjCQ3Z7Dip%2B6SoI5zf348BNyp0o0HNZr80rlJdDbmxTu1oPYlD4rCkQ%2FGxomXq0HBzDBzam9BjqkAWJR1%2ByS0TXkCrk2rDbeEBeHI147%2BEEAKuaUQQwNdh3ZQRLmoFXT86GpmSxP1zoMVunC3vuWPMhRS4heUY8eCGoA9NNwsWEg%2FWtpH41FSy5znbJ28nrbx%2BfuYEuX50FblibUhR5aWOGyYY9F9M50xc7wr%2Fs%2FaE4PSXGMV%2BPjkfHEU3Rpl2VR%2B4u5sizNq4dF0wIFMBgLjPpsSJBT7vFXcGo216Ha&X-Amz-Signature=b030686791e98e687f3495a0eed0bc24544d2ae47c9a6929fa95d78d3cb5a402&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
