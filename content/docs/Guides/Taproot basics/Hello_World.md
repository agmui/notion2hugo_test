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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663546AE5H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL77YHDCCA2YJwwDIdCAlXVkd82%2BlbpvysWs6y80e%2BdgIhALX9GR3%2FTDE%2FRDnPFdDUfwPSM2spPLCi2bR9ZMgbpDG1KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXXXWDPGZP4WH1KH0q3AO4gdo%2FUG6jA6rFluVlDlaCM0AoTEamHxGWzusrScAwUTT629hYvZC7nLfGQ0c8BKReZ8HpAHXmn0NAIiWG1lCVI9V0RHWAygFjoT34Y74TyGsZMB01PS%2Bc3wm4fnA78qvLrJ6P1Z0nXdWXGKVg7m9P3dxFQ8gS6lAa09pORbRe7aS%2Fe4Ooi6fhe%2FDXEHAJABi0Y%2BHcgqZZymmYwb4XQ%2FyBxYHDKpfEWgpO9AuC%2Fhlhu78VPDPqXaA34cDj6EPHDdF5YarjLwWwyH0BeKP540Uv50jncB986a6zY9MPA1H%2FBk9%2FUG4HLI4Az29RSGf65JZ6vwVc6KJWTdrU4jNm%2FxpLaO3%2FG%2FKH0eftniJWJCIHzT2iR1HHljevUyATCF7oMQ37ZwMix9dVUpxtx0wkWfCrVKF%2Fl7LZ4uWKEYCJo0Mt3XLRmR3xhBp6cY7%2FcHnCuImm1%2F0g5Rt9AM8Zg%2BBTVh1QvDaXZF%2FSiJdUYn9pSo88uoswN6AXg1u7TxG58WeAgkTPvy%2FL1VS9erSfrxbHy%2FeNYYGZiUErNGhHjMizSGW0DpEyF3vOZJQAYgrQ9%2FvGvecDngorVwHqM7mWFr%2FyNz15sC7j4P6I%2B2BSyY7QuElenFZkaycxZGljZ5BUDzD7w7S%2FBjqkAYO1e5rAP2yZZjsxXF%2BzBEXuNbYrLXPi67Ej4Q%2FEVFDJ40i3df4H%2FYc7Mcw340oN%2Ba8z8%2F5YOYVFj2CWbkONVnpN%2F7rmTS9ILxqnZTt2ob5Oq2ZQTuHzHusbWSxSWQbTtcBI1T%2FL%2F6X3Kjt%2FzwfOYplCg1l%2FRlBcMSA%2BIQmK1r5KALd4cIeyOpyp9IH8z3KGOyjbBSlTvq9szH2oksLV%2F2gl%2Btpp&X-Amz-Signature=06dafb1b62fe1e0dad7aa9c49ecd1f31326337af8c50fd8c1a1f39fe7092490f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663546AE5H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL77YHDCCA2YJwwDIdCAlXVkd82%2BlbpvysWs6y80e%2BdgIhALX9GR3%2FTDE%2FRDnPFdDUfwPSM2spPLCi2bR9ZMgbpDG1KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXXXWDPGZP4WH1KH0q3AO4gdo%2FUG6jA6rFluVlDlaCM0AoTEamHxGWzusrScAwUTT629hYvZC7nLfGQ0c8BKReZ8HpAHXmn0NAIiWG1lCVI9V0RHWAygFjoT34Y74TyGsZMB01PS%2Bc3wm4fnA78qvLrJ6P1Z0nXdWXGKVg7m9P3dxFQ8gS6lAa09pORbRe7aS%2Fe4Ooi6fhe%2FDXEHAJABi0Y%2BHcgqZZymmYwb4XQ%2FyBxYHDKpfEWgpO9AuC%2Fhlhu78VPDPqXaA34cDj6EPHDdF5YarjLwWwyH0BeKP540Uv50jncB986a6zY9MPA1H%2FBk9%2FUG4HLI4Az29RSGf65JZ6vwVc6KJWTdrU4jNm%2FxpLaO3%2FG%2FKH0eftniJWJCIHzT2iR1HHljevUyATCF7oMQ37ZwMix9dVUpxtx0wkWfCrVKF%2Fl7LZ4uWKEYCJo0Mt3XLRmR3xhBp6cY7%2FcHnCuImm1%2F0g5Rt9AM8Zg%2BBTVh1QvDaXZF%2FSiJdUYn9pSo88uoswN6AXg1u7TxG58WeAgkTPvy%2FL1VS9erSfrxbHy%2FeNYYGZiUErNGhHjMizSGW0DpEyF3vOZJQAYgrQ9%2FvGvecDngorVwHqM7mWFr%2FyNz15sC7j4P6I%2B2BSyY7QuElenFZkaycxZGljZ5BUDzD7w7S%2FBjqkAYO1e5rAP2yZZjsxXF%2BzBEXuNbYrLXPi67Ej4Q%2FEVFDJ40i3df4H%2FYc7Mcw340oN%2Ba8z8%2F5YOYVFj2CWbkONVnpN%2F7rmTS9ILxqnZTt2ob5Oq2ZQTuHzHusbWSxSWQbTtcBI1T%2FL%2F6X3Kjt%2FzwfOYplCg1l%2FRlBcMSA%2BIQmK1r5KALd4cIeyOpyp9IH8z3KGOyjbBSlTvq9szH2oksLV%2F2gl%2Btpp&X-Amz-Signature=20bc523624e4057340c8778a366a79c7116a0a2416e906a24addd321dc96d277&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
