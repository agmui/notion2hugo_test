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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIU5UFUU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrX%2BKgbez40eOuiYKDb9tcw69P9VrNv3SGgc9eW%2FJ9NAiEA0x6E3359PTMgYPWJQnudgYpBY7hRKxl1ibnqZw6uSz8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImmGEylEqNaR%2BT0ECrcA97M1zSNRZOeIKlCgXaqWYICzWzD%2BYUWE0Y9f7eFRv1MoqXCPBrF4rDgBwpBDWwjfnQvZcoC6a0JQt4ItbHsUU9X%2FXHhgzBphLh3yeeaGissjXMTiJaapXCMhh7zSmTM5gA3gzAxwy2%2FJk5z6clk6NCBCESlZmeKfjMDntd3XqjDa88dpUnUXwX3QzpgSLWt0eGaxqs2nHw4KtA7ZnUHhHd3JXGMePRZtY9vFqZ9r0g3WmMmLpGo18N7c2MdvDS7c3C6%2BywlFTsgNyNDVNMSr51C7mcMq4vNhrtPEhp9FsuebIFM3JcOZqWJyOgNS3XsDEBfpZj%2Bm00T1rBlr%2FISL%2BwXnPZyjP2lBfhbEoaC1H8RF%2FnqKRdwGz6Ee2B2WKtoc3DVJHnpXv2CEMNfY9az6NK7OL3asUQuzP5mAk48wBJNdXlqMZWac5l%2BUiBZ6YRnHIzQt0qzrS9SEjoMkr%2Fs0Q%2BmaatA00zAoNQjkFC4cod70E8LgBmsNyW7T%2FlqmlsIktZXDnvgH75QMWdjtQgs9yhjgKQ%2BHzmiFYPTUibZzK5vnfjahfa4RumulmeUQAP9RAn1qaUNVtqveXz57WG9ArUW5qWleV154M%2FduGtBJAvMpQwhWcEBmu2VVoJkMMvNwMMGOqUB4EVowyGxvOCADll1FfLacFG%2FY%2FGJVPgM9xeIkXN7vtHclUpcBu%2BYMP7dUPYtE5NR88fVtx%2BgNz5PRVnxBZFydy2jy0YCj7Q6xnu%2F0YgoTrV7FOkCMur6dcV%2FYcMM3BO5leBFZv0AFU40Cr6JZuyMoaHyzg8%2BimMY%2Br2KS3k0Pa7qQD27IJWphP0PR3zoH8Oc491slf5tZdvMG4rJpbck31A9V2Nj&X-Amz-Signature=4d68a48f23257bc7ec01a17defb99bab0eed58123c3ae5dde17434a3b42c8183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIU5UFUU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrX%2BKgbez40eOuiYKDb9tcw69P9VrNv3SGgc9eW%2FJ9NAiEA0x6E3359PTMgYPWJQnudgYpBY7hRKxl1ibnqZw6uSz8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImmGEylEqNaR%2BT0ECrcA97M1zSNRZOeIKlCgXaqWYICzWzD%2BYUWE0Y9f7eFRv1MoqXCPBrF4rDgBwpBDWwjfnQvZcoC6a0JQt4ItbHsUU9X%2FXHhgzBphLh3yeeaGissjXMTiJaapXCMhh7zSmTM5gA3gzAxwy2%2FJk5z6clk6NCBCESlZmeKfjMDntd3XqjDa88dpUnUXwX3QzpgSLWt0eGaxqs2nHw4KtA7ZnUHhHd3JXGMePRZtY9vFqZ9r0g3WmMmLpGo18N7c2MdvDS7c3C6%2BywlFTsgNyNDVNMSr51C7mcMq4vNhrtPEhp9FsuebIFM3JcOZqWJyOgNS3XsDEBfpZj%2Bm00T1rBlr%2FISL%2BwXnPZyjP2lBfhbEoaC1H8RF%2FnqKRdwGz6Ee2B2WKtoc3DVJHnpXv2CEMNfY9az6NK7OL3asUQuzP5mAk48wBJNdXlqMZWac5l%2BUiBZ6YRnHIzQt0qzrS9SEjoMkr%2Fs0Q%2BmaatA00zAoNQjkFC4cod70E8LgBmsNyW7T%2FlqmlsIktZXDnvgH75QMWdjtQgs9yhjgKQ%2BHzmiFYPTUibZzK5vnfjahfa4RumulmeUQAP9RAn1qaUNVtqveXz57WG9ArUW5qWleV154M%2FduGtBJAvMpQwhWcEBmu2VVoJkMMvNwMMGOqUB4EVowyGxvOCADll1FfLacFG%2FY%2FGJVPgM9xeIkXN7vtHclUpcBu%2BYMP7dUPYtE5NR88fVtx%2BgNz5PRVnxBZFydy2jy0YCj7Q6xnu%2F0YgoTrV7FOkCMur6dcV%2FYcMM3BO5leBFZv0AFU40Cr6JZuyMoaHyzg8%2BimMY%2Br2KS3k0Pa7qQD27IJWphP0PR3zoH8Oc491slf5tZdvMG4rJpbck31A9V2Nj&X-Amz-Signature=049ace95f843cfc0c14ff9c086d89dca57066fcf56ebac47484a310122bd4128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
