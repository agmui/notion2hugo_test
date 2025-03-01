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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3D5QV2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGVutiwIVLvQ0YwI0rwViotMVOprMm38El%2FUsIsdXm4yAiEAv2GrdFDxNqxnBA47%2FVPN%2BDnECepdmDqMrP9u29uNoj8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlONbw0Tex%2BlvGMDircAwc%2BqafzM6xhRoMeiOkVBzgiAsRilRphfBDz5A4aNO%2BjUK2v5x3kxcsluunnc1PuwRB9QavyKgSe%2FMP2s33RoS%2BQybWDBfB9UUtlJckhDXa6CDMbuESlGc7h3%2Fz45MPSjawTh6f0A8rXaRMBwM8%2FP5DQ1pMNWlsWzdeFmETpI1QpPxGjw4dv1XGL7TLggzg2pnptdn51busNdBKNAoZnIAxaPQ0ui69LBgw5qRFxoWfkJrKYsshNnFAegQ90up0wyP1abRodk5jmQIw2yTvmBbwSErOholO%2FBXXLn1kcFJV5YHEJbDj56i%2FcKjEEBa0uRh1UNjoCGwIdiApjZArNlAkAdP9oJnPvr9K5qd71mQuXpJfHYHC5P%2B%2BctBhCytcO4qPPS6wDFBM5a%2B3GxOxG9vAFuQ2%2BJKe3%2FeSykyu6ADDrrZRdyycNWk1At%2BMeoJWzLpjuwIKRukRGIyN7eOZBvGop0bE03iD3yl%2F66o1IKscA%2B3nHnJ5gCxnFjkH77wPNcdE%2BLS4bRW5gMH0bupO3OUeK0BPJE8fB4DDKIIwTKZpgjoSUKK%2F1vvgC3Puf4bZeFEI4SWbJeEaFPJ%2BPbs3RjohD8WYml64AT%2FVSQw5VMyZidPXzrunwJHB0VotpMJ7yib4GOqUBzyyc2A5LMFLFs%2FlDrADbxttCbxIr1xHaTAyW6RTdaXMJ9oH7ITGr%2B6xn72GYuWgzlxqj%2BaT1AIWeSIdarFXWgHgWY7rd2vrtS2lSl3V7ZhQXn0rAyF%2FtaxrE65kk6rbWQNWBaaXdwSn0o8yzqmSiKt06WwXx17%2FW8sOWnGg4i0H%2BZHdgrwcdGn0oOmh7OsK%2BVEtv39zhYRKhffNgk%2FLabveJzzK3&X-Amz-Signature=58996904ca7c5245d61c9981346388e1ac0bd8084eb09e07b603c5c676f6b5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3D5QV2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGVutiwIVLvQ0YwI0rwViotMVOprMm38El%2FUsIsdXm4yAiEAv2GrdFDxNqxnBA47%2FVPN%2BDnECepdmDqMrP9u29uNoj8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlONbw0Tex%2BlvGMDircAwc%2BqafzM6xhRoMeiOkVBzgiAsRilRphfBDz5A4aNO%2BjUK2v5x3kxcsluunnc1PuwRB9QavyKgSe%2FMP2s33RoS%2BQybWDBfB9UUtlJckhDXa6CDMbuESlGc7h3%2Fz45MPSjawTh6f0A8rXaRMBwM8%2FP5DQ1pMNWlsWzdeFmETpI1QpPxGjw4dv1XGL7TLggzg2pnptdn51busNdBKNAoZnIAxaPQ0ui69LBgw5qRFxoWfkJrKYsshNnFAegQ90up0wyP1abRodk5jmQIw2yTvmBbwSErOholO%2FBXXLn1kcFJV5YHEJbDj56i%2FcKjEEBa0uRh1UNjoCGwIdiApjZArNlAkAdP9oJnPvr9K5qd71mQuXpJfHYHC5P%2B%2BctBhCytcO4qPPS6wDFBM5a%2B3GxOxG9vAFuQ2%2BJKe3%2FeSykyu6ADDrrZRdyycNWk1At%2BMeoJWzLpjuwIKRukRGIyN7eOZBvGop0bE03iD3yl%2F66o1IKscA%2B3nHnJ5gCxnFjkH77wPNcdE%2BLS4bRW5gMH0bupO3OUeK0BPJE8fB4DDKIIwTKZpgjoSUKK%2F1vvgC3Puf4bZeFEI4SWbJeEaFPJ%2BPbs3RjohD8WYml64AT%2FVSQw5VMyZidPXzrunwJHB0VotpMJ7yib4GOqUBzyyc2A5LMFLFs%2FlDrADbxttCbxIr1xHaTAyW6RTdaXMJ9oH7ITGr%2B6xn72GYuWgzlxqj%2BaT1AIWeSIdarFXWgHgWY7rd2vrtS2lSl3V7ZhQXn0rAyF%2FtaxrE65kk6rbWQNWBaaXdwSn0o8yzqmSiKt06WwXx17%2FW8sOWnGg4i0H%2BZHdgrwcdGn0oOmh7OsK%2BVEtv39zhYRKhffNgk%2FLabveJzzK3&X-Amz-Signature=127ab9b4ed173bcba8a296ea86caf06c1d04584b3922370ed26cd1a655f236fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
