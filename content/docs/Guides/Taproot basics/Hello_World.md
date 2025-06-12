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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6RZHDB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE4ZCz%2BtLLQ7B2p1monE2InXhvLvYZKjX%2BEsZDHsVcw9AiBcGVrYg9PkfgT3i6mdOb4BEmw5xsZaMLRlP9Zs1b7L3yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkd5mLyfUil7c9nw0KtwDOL5WTJM4UUOvYp7iBLLjY4uWUaUiM7kOEmAnGNYGMVr5WXUbyKkFTXIZuMX3k6sYpMOcJeaobRsCQUCwSWO8RE5lteGL2EhYfUQmfycf1ujjn0K72wlp8%2F8DJV3PgRNKjf9TO%2B7HRlA%2FDeTnnjbDJRpml1jHKXyxGEhee5YYomOzi66IyPLudy5jCZ6X9tgl9nsJ6r5SE1HdGxet2PEXE3MFcgko8xNFb9g4kxHvJsJP%2FXOZqUF0ukW3xECK3Sw4sDV0LE4TMPWNbNQomdmpIKNJi8r9m09OM7NeGst1G2J94o8XLKHkJxsZdFdc8UIdw%2BmLbV%2FD9TdceYMrroQeaaD8Vs74NAMzcEi0hKfHw8XHtZKG2YbdpuIc6oeOQB3Ax7xL93Zex%2F1fejZpsm%2B88EQBVNwkTZh87kADGQM7SFQ8KxnqNyqx%2BqGtj9RyLZbH8%2BhuHpC%2B5yHAsJD6fvuY7Dy55XV5NcEj3p%2BCMnmBj1n1xGmEL3Z7mnrTI854knvXCB4m%2F0u%2FzCdV4Ur1MZ02%2FqV7viaK%2B1ihjvk6tpG1h2r0ZZyiGSFDW8irFko5cCuneHb6pRRDSeQ8EGFKpWzqbPVe7wO4ZWQGiQOknNbfCDv7kgUdafnf1VqC32AwxZ2qwgY6pgGE8ta%2FxnjjQrG%2BzANnTLRBPE3Pr5bbeWUVBjy%2B2%2Fpbi%2FDf6q4QSYgADN03BU13Oaxkt%2BKmbJBN7dkXPwCtOHDJzwU%2F11Rn%2F0%2Fk1EOxTDrPUFGcvZFknTfs4b829jpTnIqRM5FMlPJ%2F1JYGk53HcNpvMkFBWTum%2FXM1weCfmiJ0RfMgFL4VeYgnw786ibWaK%2Fq6XonJ004Dno2Biq0Hxysp0V0ShoW%2F&X-Amz-Signature=79d5da999791a61375443aceda053f552d6580e1a52fa3d5c2a598a5c0ecd16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6RZHDB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE4ZCz%2BtLLQ7B2p1monE2InXhvLvYZKjX%2BEsZDHsVcw9AiBcGVrYg9PkfgT3i6mdOb4BEmw5xsZaMLRlP9Zs1b7L3yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkd5mLyfUil7c9nw0KtwDOL5WTJM4UUOvYp7iBLLjY4uWUaUiM7kOEmAnGNYGMVr5WXUbyKkFTXIZuMX3k6sYpMOcJeaobRsCQUCwSWO8RE5lteGL2EhYfUQmfycf1ujjn0K72wlp8%2F8DJV3PgRNKjf9TO%2B7HRlA%2FDeTnnjbDJRpml1jHKXyxGEhee5YYomOzi66IyPLudy5jCZ6X9tgl9nsJ6r5SE1HdGxet2PEXE3MFcgko8xNFb9g4kxHvJsJP%2FXOZqUF0ukW3xECK3Sw4sDV0LE4TMPWNbNQomdmpIKNJi8r9m09OM7NeGst1G2J94o8XLKHkJxsZdFdc8UIdw%2BmLbV%2FD9TdceYMrroQeaaD8Vs74NAMzcEi0hKfHw8XHtZKG2YbdpuIc6oeOQB3Ax7xL93Zex%2F1fejZpsm%2B88EQBVNwkTZh87kADGQM7SFQ8KxnqNyqx%2BqGtj9RyLZbH8%2BhuHpC%2B5yHAsJD6fvuY7Dy55XV5NcEj3p%2BCMnmBj1n1xGmEL3Z7mnrTI854knvXCB4m%2F0u%2FzCdV4Ur1MZ02%2FqV7viaK%2B1ihjvk6tpG1h2r0ZZyiGSFDW8irFko5cCuneHb6pRRDSeQ8EGFKpWzqbPVe7wO4ZWQGiQOknNbfCDv7kgUdafnf1VqC32AwxZ2qwgY6pgGE8ta%2FxnjjQrG%2BzANnTLRBPE3Pr5bbeWUVBjy%2B2%2Fpbi%2FDf6q4QSYgADN03BU13Oaxkt%2BKmbJBN7dkXPwCtOHDJzwU%2F11Rn%2F0%2Fk1EOxTDrPUFGcvZFknTfs4b829jpTnIqRM5FMlPJ%2F1JYGk53HcNpvMkFBWTum%2FXM1weCfmiJ0RfMgFL4VeYgnw786ibWaK%2Fq6XonJ004Dno2Biq0Hxysp0V0ShoW%2F&X-Amz-Signature=faebc5ca7ecec5192274ff09638c0eaab3a2bcc2ace132f3417e260d5e84d640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
