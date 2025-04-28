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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFP7GUZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1of9L4nGEBNsz88lOG0zIoHrhxauMG8Y9%2BFyTrsCA%2FAiEAgQmMIvm4PCwsW87A8wfkPd4jwh1YL2XqC8wksLuL4Ewq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJyjTYAWPZP%2FTYW8UircA3v69%2FlRKhBaZ5%2B0cmKW4pVeKV8Qxs0UELjc6TP08%2FgcLCI0GGVrvhBwOyDP5GCUBVX8HGY0I8Po6iCmcQNf3EoIoff6RelDWfW%2BC1Gr5eGz%2Fp74kq%2BKAOwLz0btLbIbKak9B%2F35kYkDHcOtRDAQ2BbodDkdK4%2FQ%2BQuCFQ94D%2BiusrXBwHaMc340W2oXzy08NcxiPuYVBYmP61pwmZeXWkeQxHw%2B6LTXzZyNNQBHUqRh9teU2340P4V0GG3QoPHEUZEzImxIHq2zJyk6BcoQrTLhYgSrjXIkhjrz0S1mEjfJOl5rVBEinaJvPtpYfL8le0cEBNvgfPBKJBarz6xABi%2FdhL0VANm%2Bd4B2ewfx3yjkko2GsvYpLt46EEmGO2zyIOT43Id%2FGJN1CeTt%2Fs%2F%2ByU2W%2BUqJZl720UIwAiyGc8Qg3Qf1KTnNgeA8l1VuCsynswnsSW0y1NQbBGjMll5oSOZSxE51FBBw3pZLpsYhPcavI2I3SNeEGn8X6Xo2CIelu6BsEF%2FRcPKlTgXLmaMGsLxA8%2BgiFtvWDCLLVYWlj9NChwIZRMQfXb1Q9JafKV%2Fn2aee9Ugy7YNK%2BsBupF3Eb0MNn5dVZTi061BY4Sf68q8XmMOA3Hhng%2BIvITVaMPCbv8AGOqUB1FV9NmeYAJiEJJw%2FQtjnYuCAmiYBwv4Fjxr1Kl3pet4R3HC5pX5eYsbx8Ik3KnIMg08wk5kSD2qHOM%2BpU1lbihajl%2FJVPACJJ%2BKGDazj2sL4poP8Hqn9fISBy5Vxtsa4mwvF9mEynxwarKcLVzyf6cOAn%2F%2FHIkNhAAFRart8tG7RdIdmbpmS0sv0xKLUGTOLUkkMDG2qfreY%2B0OlfwJSQF%2FDbmNt&X-Amz-Signature=ddbb62e3e9847276fa8daeb7fa3b6d7fc52c7861ef3150b6e3490a717962388b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFP7GUZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1of9L4nGEBNsz88lOG0zIoHrhxauMG8Y9%2BFyTrsCA%2FAiEAgQmMIvm4PCwsW87A8wfkPd4jwh1YL2XqC8wksLuL4Ewq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJyjTYAWPZP%2FTYW8UircA3v69%2FlRKhBaZ5%2B0cmKW4pVeKV8Qxs0UELjc6TP08%2FgcLCI0GGVrvhBwOyDP5GCUBVX8HGY0I8Po6iCmcQNf3EoIoff6RelDWfW%2BC1Gr5eGz%2Fp74kq%2BKAOwLz0btLbIbKak9B%2F35kYkDHcOtRDAQ2BbodDkdK4%2FQ%2BQuCFQ94D%2BiusrXBwHaMc340W2oXzy08NcxiPuYVBYmP61pwmZeXWkeQxHw%2B6LTXzZyNNQBHUqRh9teU2340P4V0GG3QoPHEUZEzImxIHq2zJyk6BcoQrTLhYgSrjXIkhjrz0S1mEjfJOl5rVBEinaJvPtpYfL8le0cEBNvgfPBKJBarz6xABi%2FdhL0VANm%2Bd4B2ewfx3yjkko2GsvYpLt46EEmGO2zyIOT43Id%2FGJN1CeTt%2Fs%2F%2ByU2W%2BUqJZl720UIwAiyGc8Qg3Qf1KTnNgeA8l1VuCsynswnsSW0y1NQbBGjMll5oSOZSxE51FBBw3pZLpsYhPcavI2I3SNeEGn8X6Xo2CIelu6BsEF%2FRcPKlTgXLmaMGsLxA8%2BgiFtvWDCLLVYWlj9NChwIZRMQfXb1Q9JafKV%2Fn2aee9Ugy7YNK%2BsBupF3Eb0MNn5dVZTi061BY4Sf68q8XmMOA3Hhng%2BIvITVaMPCbv8AGOqUB1FV9NmeYAJiEJJw%2FQtjnYuCAmiYBwv4Fjxr1Kl3pet4R3HC5pX5eYsbx8Ik3KnIMg08wk5kSD2qHOM%2BpU1lbihajl%2FJVPACJJ%2BKGDazj2sL4poP8Hqn9fISBy5Vxtsa4mwvF9mEynxwarKcLVzyf6cOAn%2F%2FHIkNhAAFRart8tG7RdIdmbpmS0sv0xKLUGTOLUkkMDG2qfreY%2B0OlfwJSQF%2FDbmNt&X-Amz-Signature=492114b786a6d5105e1cfa01074db7a0adde1e07eac6e06474d6ff1c260e30f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
