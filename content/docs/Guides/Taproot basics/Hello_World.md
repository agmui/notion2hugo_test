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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4O3BC2A%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvb6qKueidg0jwpU%2BfIYSG%2BcVcNVdCjBsWpgOGLHymyAiANddrPoaZEBcmv%2BDlmYkd1lncZJp4yHlYX%2BbVJejU2ZCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUF3tUUxMxyWIWuzpKtwDu6mFXphcVLQe7fa2G3AU%2F4PlueYtyTboLRWcc8Unw03NDDI6oNcPaTRbCDaJCserBT9hrLatojIMYLme%2B1g%2BNmsv%2BrxnKhYl0swQEbSMi3mPAXGkBaDM%2F%2BhEh4v2FgVIxOpizWaWotbRGIqS9hia4pDhOeCrQDDqUE6m%2BlSLO%2FjAqc56g6FLF1IytpvWXPPSOvh1cnX7XeOPa8GZA811Nknzbb8JtF%2BaKMuXXGzWcfFLfYU6Y3IxBSYCtCn7mjv1h3YNlErIYf8FUrfspwfNiv85%2FaRwuFEIBUuM4wIh5j%2BF4yDWjTDw9IIZLcSTiZgPuB8e7DMK0zYeboRWaAmmdf0pWMRbi2BTl4v1EFNBk066N0TKx0ZH1TndBviwv1HeP8qKCgPZSLJJUB91SRkVNwiImVHvf%2B4%2FrOP220BanVIUlJvn7ZXYdVb%2FGzZe0e05DO3NxvjjD1%2FTG%2BGgKTLoGlbV1NGa0Z25uslxwtnquorkVaL6w9TozGlxZuGDuTGeM%2B5baKSheEWyXVbirlsIVjZcnyJGPCwUNM9a80neplN%2BPaKwtEjDLavY12QR2CFdoF2FhhFdfhcE7fn6H42azekwutPV055gXAVRH7evikhUuy91lKQctg%2B36V4wrOalwgY6pgEVaMyv1Q47vOVtpAVAWdicWK8DFA4LhP40waiC1I%2FZ%2FGNdm4hF3Dv1kACJcT1eNb5V8IWzYsLChN7uDzrKcB%2BGByszy%2FhWxH%2FrVtZmKlhqzupoxoWpcAjc2EKuh8P9aAqYFswUS7IDLqfNpb0cFW%2FXP5LDKetYROVpDLiRt2s1q5fZJWkZTFgWwcuSiW86%2BHYIWMEhp3tkePz8inxTBWkAErLGVMpa&X-Amz-Signature=b38e4d21b7994188b4428d72886a3f2f6259895604731148026e4589787b9f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4O3BC2A%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvb6qKueidg0jwpU%2BfIYSG%2BcVcNVdCjBsWpgOGLHymyAiANddrPoaZEBcmv%2BDlmYkd1lncZJp4yHlYX%2BbVJejU2ZCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUF3tUUxMxyWIWuzpKtwDu6mFXphcVLQe7fa2G3AU%2F4PlueYtyTboLRWcc8Unw03NDDI6oNcPaTRbCDaJCserBT9hrLatojIMYLme%2B1g%2BNmsv%2BrxnKhYl0swQEbSMi3mPAXGkBaDM%2F%2BhEh4v2FgVIxOpizWaWotbRGIqS9hia4pDhOeCrQDDqUE6m%2BlSLO%2FjAqc56g6FLF1IytpvWXPPSOvh1cnX7XeOPa8GZA811Nknzbb8JtF%2BaKMuXXGzWcfFLfYU6Y3IxBSYCtCn7mjv1h3YNlErIYf8FUrfspwfNiv85%2FaRwuFEIBUuM4wIh5j%2BF4yDWjTDw9IIZLcSTiZgPuB8e7DMK0zYeboRWaAmmdf0pWMRbi2BTl4v1EFNBk066N0TKx0ZH1TndBviwv1HeP8qKCgPZSLJJUB91SRkVNwiImVHvf%2B4%2FrOP220BanVIUlJvn7ZXYdVb%2FGzZe0e05DO3NxvjjD1%2FTG%2BGgKTLoGlbV1NGa0Z25uslxwtnquorkVaL6w9TozGlxZuGDuTGeM%2B5baKSheEWyXVbirlsIVjZcnyJGPCwUNM9a80neplN%2BPaKwtEjDLavY12QR2CFdoF2FhhFdfhcE7fn6H42azekwutPV055gXAVRH7evikhUuy91lKQctg%2B36V4wrOalwgY6pgEVaMyv1Q47vOVtpAVAWdicWK8DFA4LhP40waiC1I%2FZ%2FGNdm4hF3Dv1kACJcT1eNb5V8IWzYsLChN7uDzrKcB%2BGByszy%2FhWxH%2FrVtZmKlhqzupoxoWpcAjc2EKuh8P9aAqYFswUS7IDLqfNpb0cFW%2FXP5LDKetYROVpDLiRt2s1q5fZJWkZTFgWwcuSiW86%2BHYIWMEhp3tkePz8inxTBWkAErLGVMpa&X-Amz-Signature=f456757ac01a8d7c0ad24e48158523106ddc475739913590c981a20073bcbe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
