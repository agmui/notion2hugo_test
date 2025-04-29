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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBNUVRA%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBLDk7nhkAGeaN11dRx%2BkClNyuSm%2FZn8lJ56sy2zKsPgIhAPZsLZstwFsSoPn7%2F%2FjWJX1p4fPlsMaSLBCvmXWs7MyPKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlnnDYOypexQ1uPL0q3APMt2YoVeywEocZCl91Si0qzFB3hoLHrZcJQkfRYvAWjV2%2BSyhlVu2P%2Btx6tcVYOgHvNtNzDEyaDr3t7s5sfoqhL9qxLtjZ4xMOTZ1kIDAF4CepS1F5gpveThBIVtNQn%2BHepqjhyk0J1WVVKH%2Fs7JL4ceMd63qQhOIG1ZNm8BII4JkQ14C%2B9z0KArpYTUo6UVvr3%2FBxatt8T7%2B%2Bp0Z93M%2FkQFU8S4K5Goevib3rHBv0dbkr5y735OkZepV18Bi%2Fgp5nhGsNkufKgVB7ToIAlsUv3eSAHA6bMgVOMZ6oEGk6i73dQuvzV5VJ9Vw8Jhx4OBv%2FQemITmuKFwGjvHwDnVJoNM3B4F9tRaADcRAU52qen4auURTu0E5uydZWhr4op8gjUwRZYXohjwIRPMAVydGlgDxBHuN988nXrp9F%2F9EtwFpkvurQtFoTQh%2F56%2B%2F%2F5lzQZmlcM82tOvE3pq6hlw7RDxS3Gohg4o0jchxMZwKwT63Ocv9klQkYUNdhQxqM3vJWT%2Bhq%2FAwIUtorc%2BB50GyBeXr8gMMLtdmHM3XoMEWACGICAKesgc7pycZZMkaELeYQKMJcjy7F5x2DR2IcL3jzDsu8Pcg%2FSGwMhbu3hN3DyuLyEXtWX9%2B0fX9yCDCLwMPABjqkAT8vZF%2FtSkkFcKn41qJJwctLwtIMDqx3LraaO%2FW9VmwTjkhdtuSQGHgB9QQONaJa%2FZ30SN8ZW8%2FIEnGVGZgtCIydAyTehc5WLuFna2wiWc1nUStEtVV%2FKNvKaTYFh%2BCEaGi5Qh17i9PqX8PvI1u28eeJwbLtYLcF3eT5r1T%2BcthyCiPnF0%2Fv8%2FWuyqAlTaq%2BMCsXp7SpTpU2z2IdPhElgv8zBhcy&X-Amz-Signature=ef1f63b1bb429cc0967cd3e59fc2423e579fb89ca59538885660927bce6a66b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBNUVRA%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBLDk7nhkAGeaN11dRx%2BkClNyuSm%2FZn8lJ56sy2zKsPgIhAPZsLZstwFsSoPn7%2F%2FjWJX1p4fPlsMaSLBCvmXWs7MyPKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlnnDYOypexQ1uPL0q3APMt2YoVeywEocZCl91Si0qzFB3hoLHrZcJQkfRYvAWjV2%2BSyhlVu2P%2Btx6tcVYOgHvNtNzDEyaDr3t7s5sfoqhL9qxLtjZ4xMOTZ1kIDAF4CepS1F5gpveThBIVtNQn%2BHepqjhyk0J1WVVKH%2Fs7JL4ceMd63qQhOIG1ZNm8BII4JkQ14C%2B9z0KArpYTUo6UVvr3%2FBxatt8T7%2B%2Bp0Z93M%2FkQFU8S4K5Goevib3rHBv0dbkr5y735OkZepV18Bi%2Fgp5nhGsNkufKgVB7ToIAlsUv3eSAHA6bMgVOMZ6oEGk6i73dQuvzV5VJ9Vw8Jhx4OBv%2FQemITmuKFwGjvHwDnVJoNM3B4F9tRaADcRAU52qen4auURTu0E5uydZWhr4op8gjUwRZYXohjwIRPMAVydGlgDxBHuN988nXrp9F%2F9EtwFpkvurQtFoTQh%2F56%2B%2F%2F5lzQZmlcM82tOvE3pq6hlw7RDxS3Gohg4o0jchxMZwKwT63Ocv9klQkYUNdhQxqM3vJWT%2Bhq%2FAwIUtorc%2BB50GyBeXr8gMMLtdmHM3XoMEWACGICAKesgc7pycZZMkaELeYQKMJcjy7F5x2DR2IcL3jzDsu8Pcg%2FSGwMhbu3hN3DyuLyEXtWX9%2B0fX9yCDCLwMPABjqkAT8vZF%2FtSkkFcKn41qJJwctLwtIMDqx3LraaO%2FW9VmwTjkhdtuSQGHgB9QQONaJa%2FZ30SN8ZW8%2FIEnGVGZgtCIydAyTehc5WLuFna2wiWc1nUStEtVV%2FKNvKaTYFh%2BCEaGi5Qh17i9PqX8PvI1u28eeJwbLtYLcF3eT5r1T%2BcthyCiPnF0%2Fv8%2FWuyqAlTaq%2BMCsXp7SpTpU2z2IdPhElgv8zBhcy&X-Amz-Signature=50e210f07cd1d4e0e20c17cbce621c7162321a3832a161efaf62875d9a10bd99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
