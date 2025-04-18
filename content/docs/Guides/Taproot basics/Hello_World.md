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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NV446V%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmcrhlptfTyNkNvJREXO2eS%2BuTU32W3%2Fy0ZgESvG0XXAiEAwSpgTcH7fWl5q7%2Bky%2FuSmjL0I98R97WG61%2FYPemxF%2BUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJjg1xm7cbizcVrFLyrcAwOjEJTaBcAfbNMo45d6MohrrlpbGX27gbpxZj7Lgr1GQmNkSILUuaujxC87KTLfp%2F2%2FRzmChYDcrK%2BCLpQVFeQRVX2WA%2Fbbe%2BxFeUk8XvKoYnijutfvkRlOxQW7pPw4%2BN1MgidQ4psGxisQGBY0jnvrIrns0H9Fnot9h7ndacs2E9dQCPKXG6gd5r%2BL54s8n3WGXEIJngsXHpyhcicD5MzYbP5IM8%2FI8AxaqhkoXAwTqT0zm%2BOc7DB0uU66H4x31HHmomYwH4ccI8zgR%2F2AIsrkj2nXAHajnAcykG0rUIETERIFT8MVMzJSpictaLpG0qBJV4HQ5xBn8k3TfQi%2B5WFkh8kiHk49mJc%2FYGiFeDHuK0MvU23yLHAE7aGSCyBa58QIzFe71Ch4i8fSWsC9QgOBg4t5dSfX1SM%2ByLLEDFm%2BVfjPHdFDCSA%2BzGn%2FLgF7lvbRlnz%2B0De1qcMDSSPCGzpFxKwBgzgw11RWd51MauQ2Pi%2FlW8ZAAnJlaluuuh4YeWJY3gwouXSGkgIs%2FhgjoVSb6cIza28s1zZko%2FHQ5AmUcJ0hs4UFOYgC0jgtqOvjuV37zsmSJs%2Fi%2F2wJAKfRFhdFKBH252o52ziozFUtqAUGkhEYdWchP0tU30tbMOTYhsAGOqUBaEXI0S0bykSGbiqZKYuN5Csiy2Heai6AhNICHdSlzKuu7mVUBTr5gnh7qtx7qnuAMGqHU%2FshEGHcJ4VyYoA1P%2BQ%2BenDXWpvqKv5pv6aJapS0vbK9ENN%2BjEXgs9URMR450ULA4eC%2BFrak7OcqmILWr6ddRpoXI4b%2Fw066Eyh5f%2FghYQfhWFVAzVP%2BD9zUfrJzWKwBt3LBMEUIuXBiooilpb3vgxct&X-Amz-Signature=b46c106fd5ecdd485c8a5c6e3baba2482770c7eba92300346c5d24ddf62d3da2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NV446V%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmcrhlptfTyNkNvJREXO2eS%2BuTU32W3%2Fy0ZgESvG0XXAiEAwSpgTcH7fWl5q7%2Bky%2FuSmjL0I98R97WG61%2FYPemxF%2BUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJjg1xm7cbizcVrFLyrcAwOjEJTaBcAfbNMo45d6MohrrlpbGX27gbpxZj7Lgr1GQmNkSILUuaujxC87KTLfp%2F2%2FRzmChYDcrK%2BCLpQVFeQRVX2WA%2Fbbe%2BxFeUk8XvKoYnijutfvkRlOxQW7pPw4%2BN1MgidQ4psGxisQGBY0jnvrIrns0H9Fnot9h7ndacs2E9dQCPKXG6gd5r%2BL54s8n3WGXEIJngsXHpyhcicD5MzYbP5IM8%2FI8AxaqhkoXAwTqT0zm%2BOc7DB0uU66H4x31HHmomYwH4ccI8zgR%2F2AIsrkj2nXAHajnAcykG0rUIETERIFT8MVMzJSpictaLpG0qBJV4HQ5xBn8k3TfQi%2B5WFkh8kiHk49mJc%2FYGiFeDHuK0MvU23yLHAE7aGSCyBa58QIzFe71Ch4i8fSWsC9QgOBg4t5dSfX1SM%2ByLLEDFm%2BVfjPHdFDCSA%2BzGn%2FLgF7lvbRlnz%2B0De1qcMDSSPCGzpFxKwBgzgw11RWd51MauQ2Pi%2FlW8ZAAnJlaluuuh4YeWJY3gwouXSGkgIs%2FhgjoVSb6cIza28s1zZko%2FHQ5AmUcJ0hs4UFOYgC0jgtqOvjuV37zsmSJs%2Fi%2F2wJAKfRFhdFKBH252o52ziozFUtqAUGkhEYdWchP0tU30tbMOTYhsAGOqUBaEXI0S0bykSGbiqZKYuN5Csiy2Heai6AhNICHdSlzKuu7mVUBTr5gnh7qtx7qnuAMGqHU%2FshEGHcJ4VyYoA1P%2BQ%2BenDXWpvqKv5pv6aJapS0vbK9ENN%2BjEXgs9URMR450ULA4eC%2BFrak7OcqmILWr6ddRpoXI4b%2Fw066Eyh5f%2FghYQfhWFVAzVP%2BD9zUfrJzWKwBt3LBMEUIuXBiooilpb3vgxct&X-Amz-Signature=ed753cf114ee20a166e9864c137972590176651df2d01b4c512cb2843a242ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
