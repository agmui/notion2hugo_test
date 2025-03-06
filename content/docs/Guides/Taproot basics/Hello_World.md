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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CGQ2PD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhdcIXOTzv%2Fu%2BsQSptNzQ%2B5bNGvPHTSfnwWbM33ZFe6AiEAoyM1CcUrlLTp1P8zMH1zQfar97RYOfK%2B4Pqpz4iRK60q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDCAFTNqvo940hFcpyrcA8lc2BAKxG5qAygBNjywhZE3jsht%2FYId34lz%2FeJhNM7ptjg0FVNEU%2FTOMBk1gbmy8y4RyAGRHGJBaI%2FxLEAfMLpsMt%2FvrCWhoSmFR69%2FbmTy%2FfFsyeFX2MjSCszr6hV6vSoefCZV2k88GtX2xz5Xc1mcdhxUiMD43S5sCcDcIp3%2FwsB3xCtlZZa4NCpQJ9ZBBKzdt063FGs6Dmh%2BWJEqtjXoCukaoh8EvRGhK6EOqj9QO36lwQJqSVZzDy%2FcIc%2Bsam6xV7qnuE2lz6%2BQfVdvMA11iL0hLKXSdoXT7Vg5d9N8FjouFONv6PDqAvl4oga1pVZICcGpCwFYTeNEOeQ0SN8pJ%2BY%2BeGk3zm4xY6G7JG5orROEj9YM7AakOZC9ytH8CxSKB2dCsNtE7%2FgU2O8XN6aPhRJcQBwCVKCcBYpxvHZGJhQvHoJ8DyBWNRWPYO4PN717eaGWEqTdudKwEv5YFu6lFUSAHkm0SXdB18R1m9LnbxIGxxtwa1Q2sAz7qTkFly8TzZO3Q7VsluCL6SojI93ahCziRkelNoY8TAyK1NxSdS7xGVkl1LC33Vjuq0ixcWq0ha0Pfowqf0p406CdPUCOa%2BUNy72OO62pjeMgb07L1mGm9pfwV2fPqJM6MKvwpr4GOqUBBril1BQ7mQuuZBShXomgxp6ZC30ks0IX41uR5fYul1EyEQitYiXArJG%2FFv0Ghldriazl8HXImT35H8ofgAymgwzIlcTW5GCl1VK4LFEDqFodFEYkhmMpG4NLdvEa%2Fps0UG36mPZQMuN%2FFK66IZWMh%2FdwaVx4VLVomkKVKg0nnexWjTbbbC0ul50qsGEpdomNPpxkcosphyrUL4azIw2Xx0%2FG7YCC&X-Amz-Signature=504657fa9b165e1a6a33aed76163bed5f3afceeeb8085d426e479178700175a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CGQ2PD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhdcIXOTzv%2Fu%2BsQSptNzQ%2B5bNGvPHTSfnwWbM33ZFe6AiEAoyM1CcUrlLTp1P8zMH1zQfar97RYOfK%2B4Pqpz4iRK60q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDCAFTNqvo940hFcpyrcA8lc2BAKxG5qAygBNjywhZE3jsht%2FYId34lz%2FeJhNM7ptjg0FVNEU%2FTOMBk1gbmy8y4RyAGRHGJBaI%2FxLEAfMLpsMt%2FvrCWhoSmFR69%2FbmTy%2FfFsyeFX2MjSCszr6hV6vSoefCZV2k88GtX2xz5Xc1mcdhxUiMD43S5sCcDcIp3%2FwsB3xCtlZZa4NCpQJ9ZBBKzdt063FGs6Dmh%2BWJEqtjXoCukaoh8EvRGhK6EOqj9QO36lwQJqSVZzDy%2FcIc%2Bsam6xV7qnuE2lz6%2BQfVdvMA11iL0hLKXSdoXT7Vg5d9N8FjouFONv6PDqAvl4oga1pVZICcGpCwFYTeNEOeQ0SN8pJ%2BY%2BeGk3zm4xY6G7JG5orROEj9YM7AakOZC9ytH8CxSKB2dCsNtE7%2FgU2O8XN6aPhRJcQBwCVKCcBYpxvHZGJhQvHoJ8DyBWNRWPYO4PN717eaGWEqTdudKwEv5YFu6lFUSAHkm0SXdB18R1m9LnbxIGxxtwa1Q2sAz7qTkFly8TzZO3Q7VsluCL6SojI93ahCziRkelNoY8TAyK1NxSdS7xGVkl1LC33Vjuq0ixcWq0ha0Pfowqf0p406CdPUCOa%2BUNy72OO62pjeMgb07L1mGm9pfwV2fPqJM6MKvwpr4GOqUBBril1BQ7mQuuZBShXomgxp6ZC30ks0IX41uR5fYul1EyEQitYiXArJG%2FFv0Ghldriazl8HXImT35H8ofgAymgwzIlcTW5GCl1VK4LFEDqFodFEYkhmMpG4NLdvEa%2Fps0UG36mPZQMuN%2FFK66IZWMh%2FdwaVx4VLVomkKVKg0nnexWjTbbbC0ul50qsGEpdomNPpxkcosphyrUL4azIw2Xx0%2FG7YCC&X-Amz-Signature=56f6cc2ce363278f6790083de78a38c4fceef80ce81325b84b2c4cbdb86d3182&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
