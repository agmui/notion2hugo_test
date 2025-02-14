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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJEWPQ5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvQEbim%2BjBx8biYSElVUP4o0%2BGmr2k18DOpboS56UgfQIgB30zLK%2F0vCsExuLLAmeEpDxSFyI0Mz1h%2B7p8d8%2B0h7Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBy0H56n7h7DPN3Q5CrcAwIHQCUMIZ7zOo5mVz3Y9fgMOt7hBBN1icjjkCo%2B8cOFjkTAx5yAmdv5qCso58NUpvCSP8Nc%2FHbdSTSAexLvdEop8kEAnZacznVqtStiP1BPRidFUS2fMse%2FJQEoSgae3lTIfXAQhg7EgSN30vC%2FnsvnOwk%2FErmhMpQz8A8npJgeBv9po0NShhR4ydJJHuPt37h4bX%2FdK%2F0HXVDhAA5Jv2RlcXUgRHeB5mwlC%2BCpS5ozdV3htadd5YJV9HyX2mLEQxSOIc2RdMMGah9TTQ%2Bt9in3C437k2InbAkaMceLu80fpTxGMgiPSb0abYlmM2kdESf%2BHwN9E9AywQ0Adrwzpnn5VSC7Qarciqi5s%2Fv1jdbcdWuJLluyvlOG9trersE5H8FlzHejNqu6TErUqRgfETLRXm%2BdXd6mEurHno%2F77Z00L4Z7XzopcCNpClBLJpwp3AoVFGr08GNh4qvS7jonB33CmbweRDqCinpumuVVGbU%2BMNzVPNfho1sQ2hXyFNBNp1NUiLCUoYRHKjmKyn%2FyOk6Mna5GFIV%2B0m8qj1m8JccigRHnzch%2Famk3ZRt43nKOheS6BarQdi4vRD%2F0iCd1jaCG9Z%2B1qysHpQHm2pT8HxTg40h3YPCMllE4JpxBMMfqvL0GOqUB8A8wGk1%2BP9wxeUX4PYzD5AJpJEgfz5iiyFOCKTzOEYMIo6hdK3XL2vaMiu0zVPNKdmeF07k5KnEtDXgOnWrpGa7RAx64bBJTBmYq%2FuKADvt5WiyxHNVS43NY3CuEy7SnXjpdTrBpVN%2BTw4wGtJfCiEWjL6VTZZxLCGtTtAvQwDdPmgzuZGUc4ebwSFkNqNNLSGHyLx5o2EYFVGncluGNWd%2BDwfuO&X-Amz-Signature=1068ffc89c4e2c346d82425aa22e69f25d017f3c427f24e1c0147fefc43d1d37&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJEWPQ5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvQEbim%2BjBx8biYSElVUP4o0%2BGmr2k18DOpboS56UgfQIgB30zLK%2F0vCsExuLLAmeEpDxSFyI0Mz1h%2B7p8d8%2B0h7Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBy0H56n7h7DPN3Q5CrcAwIHQCUMIZ7zOo5mVz3Y9fgMOt7hBBN1icjjkCo%2B8cOFjkTAx5yAmdv5qCso58NUpvCSP8Nc%2FHbdSTSAexLvdEop8kEAnZacznVqtStiP1BPRidFUS2fMse%2FJQEoSgae3lTIfXAQhg7EgSN30vC%2FnsvnOwk%2FErmhMpQz8A8npJgeBv9po0NShhR4ydJJHuPt37h4bX%2FdK%2F0HXVDhAA5Jv2RlcXUgRHeB5mwlC%2BCpS5ozdV3htadd5YJV9HyX2mLEQxSOIc2RdMMGah9TTQ%2Bt9in3C437k2InbAkaMceLu80fpTxGMgiPSb0abYlmM2kdESf%2BHwN9E9AywQ0Adrwzpnn5VSC7Qarciqi5s%2Fv1jdbcdWuJLluyvlOG9trersE5H8FlzHejNqu6TErUqRgfETLRXm%2BdXd6mEurHno%2F77Z00L4Z7XzopcCNpClBLJpwp3AoVFGr08GNh4qvS7jonB33CmbweRDqCinpumuVVGbU%2BMNzVPNfho1sQ2hXyFNBNp1NUiLCUoYRHKjmKyn%2FyOk6Mna5GFIV%2B0m8qj1m8JccigRHnzch%2Famk3ZRt43nKOheS6BarQdi4vRD%2F0iCd1jaCG9Z%2B1qysHpQHm2pT8HxTg40h3YPCMllE4JpxBMMfqvL0GOqUB8A8wGk1%2BP9wxeUX4PYzD5AJpJEgfz5iiyFOCKTzOEYMIo6hdK3XL2vaMiu0zVPNKdmeF07k5KnEtDXgOnWrpGa7RAx64bBJTBmYq%2FuKADvt5WiyxHNVS43NY3CuEy7SnXjpdTrBpVN%2BTw4wGtJfCiEWjL6VTZZxLCGtTtAvQwDdPmgzuZGUc4ebwSFkNqNNLSGHyLx5o2EYFVGncluGNWd%2BDwfuO&X-Amz-Signature=e4e506497064217a204adbcf41fdb37e08916fdc7cdd79d90b5dfc799791d8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
