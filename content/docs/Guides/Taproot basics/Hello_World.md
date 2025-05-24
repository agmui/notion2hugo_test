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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZYRCCP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCICTFdA38trlTgu%2BoqZKox1%2FlSoaw6y3VutQ%2BwpcbRBoyAiEAk3%2BVguCBLehwVShDyMPn%2F6IYpN4mq0YeZxo5NxWHcLgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFnfVDm4pXmGQIJ4CrcA5D2sCZ6Of8LZt6F2USwXlcA143ezfIxfWWmZ3QJCNLU%2FKWVtqnVwMV9PNBDOrwM0TBekaNhgHbsp3Lbx7OYSYq5x7s6FUupzTCUJVzjK6nZ1HxmMdY3p1kAVSfVLxnSbeOImgHDx8%2BAoSpWg%2B0HMctcchQ0kkVE3BWUTCIETWF%2F1uixxXyFtfgYix7YBGh4UbhD2a9j17W6GwtYBO2bHode%2BBbcRlkUSTmxSeUOMDFGoKW9egvUhzHuCuJlfJwelLMwtSPVJULtPAvs72rXn0Kc4halZdvpMu%2Bgcq6HBWcuOFbEaTSU8W59LKCBYs%2FWzJ6YVKPrDSbv%2BEo2NTGr%2FJeuxG%2B76SxAOfKUF8Gv2aRccTLCQG5gI2k5wuXoD58Wlpo5j2FNhQl7yEIVxyvq9BZ5%2F59vGIFpovfXIrNej0ozPZ2sM9qeOouedFn4iDkcFha0RcNXNqelofhlRuiiX%2FBiRa81uPRvYC0cpJQuRCPDgYzdg1t%2FVfO%2Bs3fssmSzV0sh6SpgR%2BgLjsoSjaH195l%2FbT24LZFBLXmJNqwgC75yBqxKsw1j0hdtqpDQ3QzSIqEZfl1ene3TRcDD%2F3r6Vlig8uEiLMeEwBhVhdsI78HWtsABgemp4BDJCSHGMNyrxcEGOqUB5rZgi12DcoP12bl3hvDe9XpU2T4v%2F0nSk4bHOkgJf9U0ZN8e0Cj3rn7D5ajPLIfLvp7a3DteOJq6c%2F%2BQzvFhGHPBKDsom0xIUBRe6%2BVrSuP450e5su3fajqQYcVVYo0quwLgyxk%2F4BEU37EmBx9j1JgQUDzZwyr42d6kH8oKXjFtJQVf5b3yvZ7iir6Adp3u5DZ4R3AsnuhDVqhn5YzPQ3NCpHGr&X-Amz-Signature=c794558a4f6e2a776cea2766f1dccb5c2aefb1af53faf4aab1fc3cedb33b52a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZYRCCP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCICTFdA38trlTgu%2BoqZKox1%2FlSoaw6y3VutQ%2BwpcbRBoyAiEAk3%2BVguCBLehwVShDyMPn%2F6IYpN4mq0YeZxo5NxWHcLgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFnfVDm4pXmGQIJ4CrcA5D2sCZ6Of8LZt6F2USwXlcA143ezfIxfWWmZ3QJCNLU%2FKWVtqnVwMV9PNBDOrwM0TBekaNhgHbsp3Lbx7OYSYq5x7s6FUupzTCUJVzjK6nZ1HxmMdY3p1kAVSfVLxnSbeOImgHDx8%2BAoSpWg%2B0HMctcchQ0kkVE3BWUTCIETWF%2F1uixxXyFtfgYix7YBGh4UbhD2a9j17W6GwtYBO2bHode%2BBbcRlkUSTmxSeUOMDFGoKW9egvUhzHuCuJlfJwelLMwtSPVJULtPAvs72rXn0Kc4halZdvpMu%2Bgcq6HBWcuOFbEaTSU8W59LKCBYs%2FWzJ6YVKPrDSbv%2BEo2NTGr%2FJeuxG%2B76SxAOfKUF8Gv2aRccTLCQG5gI2k5wuXoD58Wlpo5j2FNhQl7yEIVxyvq9BZ5%2F59vGIFpovfXIrNej0ozPZ2sM9qeOouedFn4iDkcFha0RcNXNqelofhlRuiiX%2FBiRa81uPRvYC0cpJQuRCPDgYzdg1t%2FVfO%2Bs3fssmSzV0sh6SpgR%2BgLjsoSjaH195l%2FbT24LZFBLXmJNqwgC75yBqxKsw1j0hdtqpDQ3QzSIqEZfl1ene3TRcDD%2F3r6Vlig8uEiLMeEwBhVhdsI78HWtsABgemp4BDJCSHGMNyrxcEGOqUB5rZgi12DcoP12bl3hvDe9XpU2T4v%2F0nSk4bHOkgJf9U0ZN8e0Cj3rn7D5ajPLIfLvp7a3DteOJq6c%2F%2BQzvFhGHPBKDsom0xIUBRe6%2BVrSuP450e5su3fajqQYcVVYo0quwLgyxk%2F4BEU37EmBx9j1JgQUDzZwyr42d6kH8oKXjFtJQVf5b3yvZ7iir6Adp3u5DZ4R3AsnuhDVqhn5YzPQ3NCpHGr&X-Amz-Signature=9eda93a3217d83a04affd1ebb610b8675bbdc6d0b28301f8a09fc646794762ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
