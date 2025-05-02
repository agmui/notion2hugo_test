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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDLYNHR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIClSxfglQnILsHSlWmb0hntzgWtOkmIfZmqE8SyBTEezAiEArNyViSBVJs83A0Bw7o4lyRGggEgvV80HdmTrkXT4lIgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFFaXZ631f%2B6aYicircA84vrW8IurnILX2K1O2j1F1LV%2BVRfIFqXkSiMtirxFCIMeRDcydsMmcPW1zl7GHY2YAhZkK7w4raxEz4vX6289iJmcpbchT4hg%2BpJvK%2Bme8ZYM68n2oFdCVcn53%2FBbJssJKhzSxj87ueoTg9rHlLPhksl5gsicPx89DM2cpjA4Qd%2F1ud2bKIYRvETKrhus7Rf3zfMkPhgKO3RBcGjOAWIR69TqYkOHgUJxVLJdx1T659cDyo0TiZDjeRd6vPpUJ4xeSbAjlCUB1gwMLwZmsrbhcC6KzFPE5sX2O0C9HxhsL2N4AEwPNeSrDy2AHAUGFrOXyy2O%2BcBo9fgTqgadYmlBsZUPTlz9X5taWCtyJlVUSLRfWxhKHF%2FIEgUspD9ik4KZeLOgjm0uBc73oLfht%2BXve5gWq%2FzjA%2BgfLwfRS0cOkANPpcC9WNClQ5VJuPtiYDKCDlNEeX4Bsnz6drzzaPzupDWEkCqMeOS%2BaX2kokBku3MBP6DOkO6wLo13UdO9oeRL%2BcF64p87iNt1LvMT0YC%2Fd%2BW4z3olQ%2FSATJsIykTHpGn3AdNZdKD44dGhx2dB3sd%2BQ3GZTUU4GESX9oLIVCYyEL%2F2VJdQGhFCLf%2BDzYHalj3d8JkFuN30VBX1ZQMKX00cAGOqUB2DMxxO%2Bl%2BPi1Td2PwYNMrd944O%2BcfSAYSVejJrHLSLXzEi8Upauz6FFyHCChuOAVZYI3ydHsBrRmUjpcnVhQr0TJzFycyXx7o4ull7Vbtb9lyhqYe3yTqXK2J734K4CdVl%2FvQayUIuMZZTab7OwtlsXeV7yoPxPzcUcKzp2Nv4ghffFhkoSy0nyq3s3xNE9RrqBVAyy%2FJWjA%2F1qC4tedNJoQ5%2B1h&X-Amz-Signature=0cb7eaceddf326cf838eb9d62552f37f9b3777ef1d6eb3a54546e58a8b18feab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDLYNHR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIClSxfglQnILsHSlWmb0hntzgWtOkmIfZmqE8SyBTEezAiEArNyViSBVJs83A0Bw7o4lyRGggEgvV80HdmTrkXT4lIgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFFaXZ631f%2B6aYicircA84vrW8IurnILX2K1O2j1F1LV%2BVRfIFqXkSiMtirxFCIMeRDcydsMmcPW1zl7GHY2YAhZkK7w4raxEz4vX6289iJmcpbchT4hg%2BpJvK%2Bme8ZYM68n2oFdCVcn53%2FBbJssJKhzSxj87ueoTg9rHlLPhksl5gsicPx89DM2cpjA4Qd%2F1ud2bKIYRvETKrhus7Rf3zfMkPhgKO3RBcGjOAWIR69TqYkOHgUJxVLJdx1T659cDyo0TiZDjeRd6vPpUJ4xeSbAjlCUB1gwMLwZmsrbhcC6KzFPE5sX2O0C9HxhsL2N4AEwPNeSrDy2AHAUGFrOXyy2O%2BcBo9fgTqgadYmlBsZUPTlz9X5taWCtyJlVUSLRfWxhKHF%2FIEgUspD9ik4KZeLOgjm0uBc73oLfht%2BXve5gWq%2FzjA%2BgfLwfRS0cOkANPpcC9WNClQ5VJuPtiYDKCDlNEeX4Bsnz6drzzaPzupDWEkCqMeOS%2BaX2kokBku3MBP6DOkO6wLo13UdO9oeRL%2BcF64p87iNt1LvMT0YC%2Fd%2BW4z3olQ%2FSATJsIykTHpGn3AdNZdKD44dGhx2dB3sd%2BQ3GZTUU4GESX9oLIVCYyEL%2F2VJdQGhFCLf%2BDzYHalj3d8JkFuN30VBX1ZQMKX00cAGOqUB2DMxxO%2Bl%2BPi1Td2PwYNMrd944O%2BcfSAYSVejJrHLSLXzEi8Upauz6FFyHCChuOAVZYI3ydHsBrRmUjpcnVhQr0TJzFycyXx7o4ull7Vbtb9lyhqYe3yTqXK2J734K4CdVl%2FvQayUIuMZZTab7OwtlsXeV7yoPxPzcUcKzp2Nv4ghffFhkoSy0nyq3s3xNE9RrqBVAyy%2FJWjA%2F1qC4tedNJoQ5%2B1h&X-Amz-Signature=e824bdf20aef4f1791aa108d2f575fa23884c9b42ec4372ee022a4e1277f9e22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
