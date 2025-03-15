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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW55BTNA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxUeuhpHQ9WSecQjcGGGC%2FxH5AqZif%2B4PxNnK7T1wzAiBXMA5RA26jT5%2BXVvtG3PElh11meUFP5Po5x1qmFeRhhyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMebFP2HH0fxyuKMRYKtwDvrX5Nx0kQRFSoGNGW3PBPWPClzanDt2kiu3w%2BfU8JtUQC5cr%2BbxkqDCUimxWtNgDCfh0Vz0K8UEe9VI4J8EnfobddqFO0HvY5UXluhWQEEBSndvHHQ0dfw7lVlz7yrw%2B%2FD7dCLiXYA9LbOtMAVkhKLGDaSv6X1mw%2B9LMc1jUsj3QB8Edzm%2FY15NpcYM7NNWwDDSQZTaOuI1n930J%2F0XYtg5LVj6e1W%2BYT4c6jTbzg7F%2Fqt%2Fu37blg%2FpgAD8zaMQZUgHspAtsTO1156jftvBp2AfQrrbwRqo3D4EgGuoBewus5KZ0e1REyHRG6WY4hIHzJrABg9KOBhcSf4WBvmvY%2B6tjTcDWlAJlIFwBlktYlnldwUi3fzEF0UO7pDf4OZDUPjRzPuRvHmbjsWXTXWUkO%2BMsbxnPG79br4okMgQ3uODFZAHRmlxWICOm8VGn96epI5%2F%2B1JxUINcddl1HF9fCQqAoZRH7rG1ragtZov811f4N%2FlA98WRYkeWY1oKyWhl0vXzblls5pfWMXNP49poCIOH%2F51AE%2FlrakRR5SvkP0Xs6keQJhq%2FjW%2B2YM3LHt4xXM9mmFJunfW35WfyX%2BLzgYi6uLPboUwIQQyXV8QkqktQjJyRuSJXByZ04bpkw1OLXvgY6pgFFpyk0d8tSuH4op2hdlARqb3xvW1KIiDvlexw2btEV3B05CdUzzcOZH73fzXD5ZfKx%2BLIlIdXmV2WXxPbTsNXK61FAW2BBLpgl9p4SI%2F0SGVcdHOdXT4OfrFoRaeIqLTq%2FUq59MpaKUebJjWDVXeERO615mQpLuCYz9U%2BlXMzdyQoqbGW5c%2F5xgAbdJ4EAhgFzMd2nWm5%2Bj5N2ISp6NaX%2BtTHlNgy5&X-Amz-Signature=0a9f4842f6969ea1c0aee461a378b303304f27754fb46e08d7331328ac5b21aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW55BTNA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxUeuhpHQ9WSecQjcGGGC%2FxH5AqZif%2B4PxNnK7T1wzAiBXMA5RA26jT5%2BXVvtG3PElh11meUFP5Po5x1qmFeRhhyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMebFP2HH0fxyuKMRYKtwDvrX5Nx0kQRFSoGNGW3PBPWPClzanDt2kiu3w%2BfU8JtUQC5cr%2BbxkqDCUimxWtNgDCfh0Vz0K8UEe9VI4J8EnfobddqFO0HvY5UXluhWQEEBSndvHHQ0dfw7lVlz7yrw%2B%2FD7dCLiXYA9LbOtMAVkhKLGDaSv6X1mw%2B9LMc1jUsj3QB8Edzm%2FY15NpcYM7NNWwDDSQZTaOuI1n930J%2F0XYtg5LVj6e1W%2BYT4c6jTbzg7F%2Fqt%2Fu37blg%2FpgAD8zaMQZUgHspAtsTO1156jftvBp2AfQrrbwRqo3D4EgGuoBewus5KZ0e1REyHRG6WY4hIHzJrABg9KOBhcSf4WBvmvY%2B6tjTcDWlAJlIFwBlktYlnldwUi3fzEF0UO7pDf4OZDUPjRzPuRvHmbjsWXTXWUkO%2BMsbxnPG79br4okMgQ3uODFZAHRmlxWICOm8VGn96epI5%2F%2B1JxUINcddl1HF9fCQqAoZRH7rG1ragtZov811f4N%2FlA98WRYkeWY1oKyWhl0vXzblls5pfWMXNP49poCIOH%2F51AE%2FlrakRR5SvkP0Xs6keQJhq%2FjW%2B2YM3LHt4xXM9mmFJunfW35WfyX%2BLzgYi6uLPboUwIQQyXV8QkqktQjJyRuSJXByZ04bpkw1OLXvgY6pgFFpyk0d8tSuH4op2hdlARqb3xvW1KIiDvlexw2btEV3B05CdUzzcOZH73fzXD5ZfKx%2BLIlIdXmV2WXxPbTsNXK61FAW2BBLpgl9p4SI%2F0SGVcdHOdXT4OfrFoRaeIqLTq%2FUq59MpaKUebJjWDVXeERO615mQpLuCYz9U%2BlXMzdyQoqbGW5c%2F5xgAbdJ4EAhgFzMd2nWm5%2Bj5N2ISp6NaX%2BtTHlNgy5&X-Amz-Signature=ca6c7fcd83ee4d4cf84a69fe848e80521e2c2066c9dd398b508c53728ca66c40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
