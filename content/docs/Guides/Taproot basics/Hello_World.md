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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXSZAD5%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd2rZzn0zviYug%2FeW7jfjfBzIb%2Fagt6BwV7oKXxxUUyQIgZNJFCUdphObOHGB%2Bc96ShTRde5%2BT%2BuTtLoApVhcSviAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqBSXab7VG5zwD7yrcA69tk2ChFr7UJYaO6QjLhT45WMEvYDd2qPqMy0%2BWMkjAMvmVadVuD7aGrqNFhlseVhd3kfdAx04MtJT8Bkm3s61R38%2FVV8WHL7HhOOtWM1QgMwoRAAqkRaOM7z8XrMMAHnsfALJi8veqsM7ZzOFtDlf7YpVBjBAMbBM5EITEKakW7Pi4oJp2ZPJP7PBXXDKdV1z%2Bs9nVc9wPJe5FGJ%2F2cMFmWNEsWVpu30ugcAswx69x6r1JhPVe7lRrLgGNeEvhBN96rcsSJhq4aoHMHKx4kQkyqhI62dSANhOC5oeZD7FQuLFP3pdPRCHEEKSmC8yOSkTIDMV2yB0ZwTq0XJuDaFl9WZIervn2hrs14epVcqOoXEU2VIgw40sJxhT1W8owOYQ2UKfnBanJoG1rldyLjYPwaXWUzQ0%2B0WLoLeA3O5XMzm8WkRyDE2DrXiuZYLzhraXP0BmSQuK7lmI8OWoXfTa%2FpCpeM5th8WO1%2F9C61Z1dyxvFC7GmCud9Rm6dOVHzrQCNH31lTSu7HInjBsoZp%2BkDedTKQqiJSsQ4UQ08pdNQI4gBtuWrk5V4wrB00Xgegodf1BEqEICU2AHYYLspa0PmqoEDrq3TIRpaEF0FtFWiqlWFSIEOOS3o5KOhMO%2Fd09QGOqUBIkwMuNfNO5IxqwEdKGEBpca5J6trglnf7BEC9TLP%2FNO2DB8xOiiKMnxVfY7YpN5Ym5NIxCV81RUiC%2BtJF05%2BVY%2BaG0MXZ%2Bbo%2Fyed2DWQczhLUCgZURUu3%2FTOgm6JJSFVCwby4nBLfGb5BnISr3D53wXMQE%2B4YBfxudRHkJhPP2%2FL3VTwndiGVFr2XrFZM9W%2BgFMjDg7Jp3fW57OG64MZBRXylIBr&X-Amz-Signature=de476f23f44e7d5a1546d90e432017a229d4f65d7c0a24016d146045e8a8999c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXSZAD5%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd2rZzn0zviYug%2FeW7jfjfBzIb%2Fagt6BwV7oKXxxUUyQIgZNJFCUdphObOHGB%2Bc96ShTRde5%2BT%2BuTtLoApVhcSviAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqBSXab7VG5zwD7yrcA69tk2ChFr7UJYaO6QjLhT45WMEvYDd2qPqMy0%2BWMkjAMvmVadVuD7aGrqNFhlseVhd3kfdAx04MtJT8Bkm3s61R38%2FVV8WHL7HhOOtWM1QgMwoRAAqkRaOM7z8XrMMAHnsfALJi8veqsM7ZzOFtDlf7YpVBjBAMbBM5EITEKakW7Pi4oJp2ZPJP7PBXXDKdV1z%2Bs9nVc9wPJe5FGJ%2F2cMFmWNEsWVpu30ugcAswx69x6r1JhPVe7lRrLgGNeEvhBN96rcsSJhq4aoHMHKx4kQkyqhI62dSANhOC5oeZD7FQuLFP3pdPRCHEEKSmC8yOSkTIDMV2yB0ZwTq0XJuDaFl9WZIervn2hrs14epVcqOoXEU2VIgw40sJxhT1W8owOYQ2UKfnBanJoG1rldyLjYPwaXWUzQ0%2B0WLoLeA3O5XMzm8WkRyDE2DrXiuZYLzhraXP0BmSQuK7lmI8OWoXfTa%2FpCpeM5th8WO1%2F9C61Z1dyxvFC7GmCud9Rm6dOVHzrQCNH31lTSu7HInjBsoZp%2BkDedTKQqiJSsQ4UQ08pdNQI4gBtuWrk5V4wrB00Xgegodf1BEqEICU2AHYYLspa0PmqoEDrq3TIRpaEF0FtFWiqlWFSIEOOS3o5KOhMO%2Fd09QGOqUBIkwMuNfNO5IxqwEdKGEBpca5J6trglnf7BEC9TLP%2FNO2DB8xOiiKMnxVfY7YpN5Ym5NIxCV81RUiC%2BtJF05%2BVY%2BaG0MXZ%2Bbo%2Fyed2DWQczhLUCgZURUu3%2FTOgm6JJSFVCwby4nBLfGb5BnISr3D53wXMQE%2B4YBfxudRHkJhPP2%2FL3VTwndiGVFr2XrFZM9W%2BgFMjDg7Jp3fW57OG64MZBRXylIBr&X-Amz-Signature=fa2befb6cdb9d8722c7047dd5d9107f6dc9c4afb82e0f02467f85a928218800e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
