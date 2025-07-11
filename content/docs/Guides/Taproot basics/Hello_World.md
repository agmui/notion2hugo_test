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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUNM4A5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvUwUJE4QzC8S7j5GGXO5SDWNLTKtUOgHTTSKeCGalRwIge%2F1KoRJmRuhkbhkhUqDEBRTJCj1qpVvx1wVV4B8nGLIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2BCDSr3A9l4a42yCrcA9zK9XOymQW8jPfbKPVfRpUvNnj%2BnrjbPZk41TAS72Y6F%2Blvcb0NjF5bZESAHMhZiLgi15%2BtX7lz7NG%2FwAHanBCEp8wRNhvoZRTfylf10g5yJEHCFE%2BKll9eWf9Ugd4qd2Yl3%2FbMQ9l8EugVx%2B244nQCWcMnNeeBMPzm6GYGNv4v470jGUNt3BjjZsNapCZV%2BJwezQvsE8hrvcGrGZ2%2BUDcE5p4fe615vBQsoA0el5SB0qNUD1eSRSJ4DviMxTU0e6s6K9aGMtaHVLarl6ZxcZ4GY6V31IcIbkm4PEBdSdh1hf4pG7wFogyFIILpTUBtz74Hx1JDMSDF4Rs1f%2FkaIEmyWmjeTulHaNKbIFxgH8Y%2FkFtznHjCDiS6qfvEMKJuvfvzdKixGQUyiZvDGDIHas%2BrMArjEM%2FD6sn55OZgf3bLMNjCWrFXVcwEofee1jNw16hMcAg8H1B6qbh2Uli2%2F1hOE8gSRxgFEw5qD%2FJDJeNpo1I%2FpUT1x34Sf5KbFVI2XR0ZJ8z6dYBZya%2FCz8mPb09Gfc%2BHUJelLmzdTu5FizQDEkJpLbMS4DpNNtKbBLLn%2BedN79mnp2TCPZatygru9e6%2F967Zf6ABNyC%2B%2BcuToA3CMy2a6ezwmqm44fZKMMqnw8MGOqUBSXTns6yG306W251UgL50E%2Bj9W%2BNrMgSvNdNyX%2BOtwWw42mkyRQEiHaPG2JriLKohrSHKZ6OU5jBGrK706JzmKqEu%2F9BR%2Bxehr6r7ldG3R%2BY5WXHej1gkOrDxxOZ%2BG259FWjWAM9KmdgeCk7p1RoGIhAM79LJIyZuo34VLFxIEuEUKJlDYfKkfN0eamC0WY1QbPRZWYEfKGTn0deQEhYaHeExpYqE&X-Amz-Signature=5608d098f54924146b6692d8571942c3cd40019c9e714c1be2a7aa37a7b728bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUNM4A5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvUwUJE4QzC8S7j5GGXO5SDWNLTKtUOgHTTSKeCGalRwIge%2F1KoRJmRuhkbhkhUqDEBRTJCj1qpVvx1wVV4B8nGLIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2BCDSr3A9l4a42yCrcA9zK9XOymQW8jPfbKPVfRpUvNnj%2BnrjbPZk41TAS72Y6F%2Blvcb0NjF5bZESAHMhZiLgi15%2BtX7lz7NG%2FwAHanBCEp8wRNhvoZRTfylf10g5yJEHCFE%2BKll9eWf9Ugd4qd2Yl3%2FbMQ9l8EugVx%2B244nQCWcMnNeeBMPzm6GYGNv4v470jGUNt3BjjZsNapCZV%2BJwezQvsE8hrvcGrGZ2%2BUDcE5p4fe615vBQsoA0el5SB0qNUD1eSRSJ4DviMxTU0e6s6K9aGMtaHVLarl6ZxcZ4GY6V31IcIbkm4PEBdSdh1hf4pG7wFogyFIILpTUBtz74Hx1JDMSDF4Rs1f%2FkaIEmyWmjeTulHaNKbIFxgH8Y%2FkFtznHjCDiS6qfvEMKJuvfvzdKixGQUyiZvDGDIHas%2BrMArjEM%2FD6sn55OZgf3bLMNjCWrFXVcwEofee1jNw16hMcAg8H1B6qbh2Uli2%2F1hOE8gSRxgFEw5qD%2FJDJeNpo1I%2FpUT1x34Sf5KbFVI2XR0ZJ8z6dYBZya%2FCz8mPb09Gfc%2BHUJelLmzdTu5FizQDEkJpLbMS4DpNNtKbBLLn%2BedN79mnp2TCPZatygru9e6%2F967Zf6ABNyC%2B%2BcuToA3CMy2a6ezwmqm44fZKMMqnw8MGOqUBSXTns6yG306W251UgL50E%2Bj9W%2BNrMgSvNdNyX%2BOtwWw42mkyRQEiHaPG2JriLKohrSHKZ6OU5jBGrK706JzmKqEu%2F9BR%2Bxehr6r7ldG3R%2BY5WXHej1gkOrDxxOZ%2BG259FWjWAM9KmdgeCk7p1RoGIhAM79LJIyZuo34VLFxIEuEUKJlDYfKkfN0eamC0WY1QbPRZWYEfKGTn0deQEhYaHeExpYqE&X-Amz-Signature=a27579cb6c64851a3dc7839526a3c9f9d6b8ae43498e2766cd495e33bef4939e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
