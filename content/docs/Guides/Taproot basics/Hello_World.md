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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXL5LAR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGikrM%2FG5SzgCl4XJ9UxEEKDhmUrT8A8djpBTZMoY66JAiBISuWWE2X9i9L%2FSNOrUvVi9sGu4mWsO9%2BvnLzM%2Fx%2BAByr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM3I5hjVkhq%2B51tsusKtwDpt%2FW8SwoLBRED0nqTbLFLc1iUtFSHSerVwe9Wtu8f8UA1vvQgNXVmz6%2FW54WHnfHRYJ%2F9%2Fops4XOeVELh3B5MsmZPIctvz71s8RvRnZz90QXDdLKy0TqwQDw6KwWLeTrVSM4XifdFyMszvRMtRI%2FXmsqVoT2Ei0zWypxG2i2d4xOc5NMoH%2BUU9Ul8qcLga2CfgSX%2FurWilA6il5QhHbqJC8nAR4D4HCBOltGCv3iJ07UFtYQhfRQdokixIdeDp%2F0l%2Fcdr1Ni66ff49ORzr0ugvUp3%2BJp3AgXjoSFDwZYTmoH1E9uP3oj4eW8yS%2F2iSM44q%2FSdTOjMdHTzdSWG3R8mZ%2BTcE%2Fdc05Q9vOb67Wlc%2BQEakiF09ITECofAUI49HWnk6ZiDjewAraJlgrL454qKYIfAK%2Fk69tfAKwlBinYaoTSV%2FX2AFM9Rj1svtXLC19fRNWHtwnUN4xbHnpLc2la69I%2Fi%2B8%2FVIRRjZhJGAPkNq1Tn85oh5bz9DCIGbe491PJzeH17FJIWrGaKXSkLOkaIE2p5XVy9X0iiUuybTjkrBUhsC1h%2BIldSzH4yF2GJNrLK2Ac%2BMAm0fH%2Bk0QFAW1fooltrMEq8%2F7I0JwQuigqtSf%2B%2BDf08YoFhL%2B8CIUwmNuXxAY6pgE8KUkul3weRH29Bwu3gO0bfWJtJwKKdKmRSmsF6RMQilDMiZy8g2nRswbTE5Or2jIr9ltHge4Y0Gp6E4yd0x5CUl7N9hhLL1%2FlZRDTt3%2BwM5wV0fEiv9yIAPkYlf2gUs%2F07nu37n1JDz1kjYtJjXfT3l4CdTDRSDFG8PQ5oNvoV0Mn%2FiUFjKKQNFMpZinCZ8vlMCMEmF3ELIh7dJOUj5CDeKUBSZpA&X-Amz-Signature=bf743aa4cd79d01abcb5da805ab55ffba3fe66106ef1ae69555bb51116f814f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXL5LAR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGikrM%2FG5SzgCl4XJ9UxEEKDhmUrT8A8djpBTZMoY66JAiBISuWWE2X9i9L%2FSNOrUvVi9sGu4mWsO9%2BvnLzM%2Fx%2BAByr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM3I5hjVkhq%2B51tsusKtwDpt%2FW8SwoLBRED0nqTbLFLc1iUtFSHSerVwe9Wtu8f8UA1vvQgNXVmz6%2FW54WHnfHRYJ%2F9%2Fops4XOeVELh3B5MsmZPIctvz71s8RvRnZz90QXDdLKy0TqwQDw6KwWLeTrVSM4XifdFyMszvRMtRI%2FXmsqVoT2Ei0zWypxG2i2d4xOc5NMoH%2BUU9Ul8qcLga2CfgSX%2FurWilA6il5QhHbqJC8nAR4D4HCBOltGCv3iJ07UFtYQhfRQdokixIdeDp%2F0l%2Fcdr1Ni66ff49ORzr0ugvUp3%2BJp3AgXjoSFDwZYTmoH1E9uP3oj4eW8yS%2F2iSM44q%2FSdTOjMdHTzdSWG3R8mZ%2BTcE%2Fdc05Q9vOb67Wlc%2BQEakiF09ITECofAUI49HWnk6ZiDjewAraJlgrL454qKYIfAK%2Fk69tfAKwlBinYaoTSV%2FX2AFM9Rj1svtXLC19fRNWHtwnUN4xbHnpLc2la69I%2Fi%2B8%2FVIRRjZhJGAPkNq1Tn85oh5bz9DCIGbe491PJzeH17FJIWrGaKXSkLOkaIE2p5XVy9X0iiUuybTjkrBUhsC1h%2BIldSzH4yF2GJNrLK2Ac%2BMAm0fH%2Bk0QFAW1fooltrMEq8%2F7I0JwQuigqtSf%2B%2BDf08YoFhL%2B8CIUwmNuXxAY6pgE8KUkul3weRH29Bwu3gO0bfWJtJwKKdKmRSmsF6RMQilDMiZy8g2nRswbTE5Or2jIr9ltHge4Y0Gp6E4yd0x5CUl7N9hhLL1%2FlZRDTt3%2BwM5wV0fEiv9yIAPkYlf2gUs%2F07nu37n1JDz1kjYtJjXfT3l4CdTDRSDFG8PQ5oNvoV0Mn%2FiUFjKKQNFMpZinCZ8vlMCMEmF3ELIh7dJOUj5CDeKUBSZpA&X-Amz-Signature=98f27d4efa0124d7f4cc2096afb0d4d723312bc3f191481e56ff58658ada8346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
