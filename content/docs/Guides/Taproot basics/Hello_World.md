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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTC2LYL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDsaEeGcmEN%2FDV5M25IzJnl8hgAARUm6ebrbPOhDPpL6QIhAN09wd49J1ZArjhKq0G0ouUNFJnK2fCeeZzCGYaQan9rKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlM7ASrS4PG9FuCT8q3AMxWkLbdJ1O6G85d8y8vYIkglFAqDQfA%2BDUA9rFYb64JaD49fby9eXFGgGuxuf8NBIgab8uQxEGqLLmzJqVCtdZGfa4hp4oNmvZTC9c4pMPc6oSPG5lW6n28yCApKty5w%2BCTKtkbeOMIo03M7A5Gq9Cy5MCc6KNiE55SQUymElzXMkDBxme7y%2Bx1RSrThq17WJon%2F5BUl1TP42Y%2FxG7ilYKdWlUCyF6tQY%2BhsJZMLh%2F7n%2F9Ux0ChE8c%2F65eUdyYa%2BI4RL49JNCQ%2BeA4aF93z9K0XQbXYCreu1JWM5fRTOWENs9QHMgmqH5d4B4Mnv5SjlSwkaZ3B5iAIcVSGTn%2BiA6EEn7T0ejZZrTGk%2BzFIRnzv6yQkYpLhveVf%2F%2FsWhUDfXuyuhc5JvCj%2B2jvCA50FN7Oluq%2ByTG86nLN09Fa9mxSCYJFFzdKuR2ezilWgnOADhNpFMco13AP5jddS4jNDzx5%2Fit7o3RawYVevsVU7RZKVSu4X0o8JxaiivLxy6m6ODNlE%2Fu50J0jp%2BddFUhlPSmU0NGaEtXiX4isiqam24ppxVwbbujvnDJE5EwHFotx0Yxs1lvgCfUBD9iiSoga%2Bx%2BT5clqvnDk7DXzet2tJnU3vS5bK1VIKYsHpfj%2FAjCkhKLEBjqkAavG2WpB0zmLD2sVUt3q%2FYqLbGYVvZ6ayKovbZlpvhguFC6zE8wwndNUbjDF5HsVaWaAgXVavFnP9msozsd3%2FCMAPaxmIT8ozMHtv2OU1a%2B6bzxk37OVvhMlRrtXQO97jH02hltV%2FZXyVdA04hHi7JGqKT1O0sLuckxtfBKK6NVBaMj2bJ2mkpOuBSar7WpWrjsNm32olOxpsaOQqyqtDnNH692J&X-Amz-Signature=50941e5913e89ffb7713bbc54cb7cc5bc6b7a285cb46fd578d6ed111c9015b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTC2LYL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDsaEeGcmEN%2FDV5M25IzJnl8hgAARUm6ebrbPOhDPpL6QIhAN09wd49J1ZArjhKq0G0ouUNFJnK2fCeeZzCGYaQan9rKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlM7ASrS4PG9FuCT8q3AMxWkLbdJ1O6G85d8y8vYIkglFAqDQfA%2BDUA9rFYb64JaD49fby9eXFGgGuxuf8NBIgab8uQxEGqLLmzJqVCtdZGfa4hp4oNmvZTC9c4pMPc6oSPG5lW6n28yCApKty5w%2BCTKtkbeOMIo03M7A5Gq9Cy5MCc6KNiE55SQUymElzXMkDBxme7y%2Bx1RSrThq17WJon%2F5BUl1TP42Y%2FxG7ilYKdWlUCyF6tQY%2BhsJZMLh%2F7n%2F9Ux0ChE8c%2F65eUdyYa%2BI4RL49JNCQ%2BeA4aF93z9K0XQbXYCreu1JWM5fRTOWENs9QHMgmqH5d4B4Mnv5SjlSwkaZ3B5iAIcVSGTn%2BiA6EEn7T0ejZZrTGk%2BzFIRnzv6yQkYpLhveVf%2F%2FsWhUDfXuyuhc5JvCj%2B2jvCA50FN7Oluq%2ByTG86nLN09Fa9mxSCYJFFzdKuR2ezilWgnOADhNpFMco13AP5jddS4jNDzx5%2Fit7o3RawYVevsVU7RZKVSu4X0o8JxaiivLxy6m6ODNlE%2Fu50J0jp%2BddFUhlPSmU0NGaEtXiX4isiqam24ppxVwbbujvnDJE5EwHFotx0Yxs1lvgCfUBD9iiSoga%2Bx%2BT5clqvnDk7DXzet2tJnU3vS5bK1VIKYsHpfj%2FAjCkhKLEBjqkAavG2WpB0zmLD2sVUt3q%2FYqLbGYVvZ6ayKovbZlpvhguFC6zE8wwndNUbjDF5HsVaWaAgXVavFnP9msozsd3%2FCMAPaxmIT8ozMHtv2OU1a%2B6bzxk37OVvhMlRrtXQO97jH02hltV%2FZXyVdA04hHi7JGqKT1O0sLuckxtfBKK6NVBaMj2bJ2mkpOuBSar7WpWrjsNm32olOxpsaOQqyqtDnNH692J&X-Amz-Signature=486fa02951e0ef3781a65fbbaf1a9c1bc0eea10c5f8983a4ae34391a324d425c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
