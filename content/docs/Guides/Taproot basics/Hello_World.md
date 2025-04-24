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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HWBBMDU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIVfsaLhlCfVUYOyUW54%2FV1uG4ppYZNjG3IbBVz9WUAIgCswfBppnfjHNFUwk5CxSOdt%2BCEc9THSDlJisHqAfjJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI7BSTXeNixWzMEgcyrcA6FtL%2FhixzWhz2SIFI8c6YoM%2FGOoBBalsmOogmLYHeaqGJntYIpjo9XMEaNCAOok%2BoHmFgKTkqCD%2BuVmAD47Da%2BvWl8e1z11PQMg4emkbud5zKaerheUraBBdr1YI%2Fs947%2BRu6GKpyD%2FVBmchoF9GUmZoSN8NvlU9xOvX8ZR4uI1EKDqng9k7G9i%2BfGuftR06Zdd4Tg1mmtwSF4csTpzV8v1v9qrRhJx9jiv4xFOaLc0THtn1QNKUjgD6gQhsia5JkGNl65t4abgdv07xsHePdwLPIdQP7qyoU5xncgzWozCoI3lyPFPTE%2FjidIWo8LBVcynW5k%2FG7x8ZJTFxWMAFZQJT4Poecrl%2BICJpojtyu8LWhE5w1a15mQM%2FGj%2FgiVmsWkc0Nr3nSZvi7fAryZiOFr9NPhW8pYIIw1XUg4J6NhTNGMC1x0qV61hUo4TmRCqwAHWk3%2FOtDt0Ybo3l%2F1gU2Z84fLoT6gmfgb4Q25PdaPRT85qrC%2BZNByFD5EGGI9bWGFF8%2FglZyrwd6Uw9neLJ8xpFYFbeNvDg%2Fi1LhbwAPhqy%2Ft7WYwwGt5gwOU9IsWGtWcpFtxkC1idVLZ3Mm%2FCdfwadXDBJysK7w%2BS%2BpzvGQtWabE1f4muA1lrhchoMNC6qcAGOqUBCKlIq222WhekVwWUWerSZc%2BJq8JTvUpNSj0AZQo0LlrYg37SPbgV6F7lrv9Ns69EGr7V1kgeKvzvRgIHCxWN%2BfjGkx3KXiv2ipcDDx1H5F3W1L1jC7pZZ2CHL2O7qz6ejf%2BMk2LJGr1l%2BL7OsFBLacdemgByv1BGak%2Fg9TYUZEHGdHMsC5K2aVARojvuLjAtPdLvFyGBOtT6%2FZ84luKT4KXdo5Pw&X-Amz-Signature=4d8faa84c8cc20507340220fa884a06cd0129b9acfa8c168555f27e4755fd411&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HWBBMDU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIVfsaLhlCfVUYOyUW54%2FV1uG4ppYZNjG3IbBVz9WUAIgCswfBppnfjHNFUwk5CxSOdt%2BCEc9THSDlJisHqAfjJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI7BSTXeNixWzMEgcyrcA6FtL%2FhixzWhz2SIFI8c6YoM%2FGOoBBalsmOogmLYHeaqGJntYIpjo9XMEaNCAOok%2BoHmFgKTkqCD%2BuVmAD47Da%2BvWl8e1z11PQMg4emkbud5zKaerheUraBBdr1YI%2Fs947%2BRu6GKpyD%2FVBmchoF9GUmZoSN8NvlU9xOvX8ZR4uI1EKDqng9k7G9i%2BfGuftR06Zdd4Tg1mmtwSF4csTpzV8v1v9qrRhJx9jiv4xFOaLc0THtn1QNKUjgD6gQhsia5JkGNl65t4abgdv07xsHePdwLPIdQP7qyoU5xncgzWozCoI3lyPFPTE%2FjidIWo8LBVcynW5k%2FG7x8ZJTFxWMAFZQJT4Poecrl%2BICJpojtyu8LWhE5w1a15mQM%2FGj%2FgiVmsWkc0Nr3nSZvi7fAryZiOFr9NPhW8pYIIw1XUg4J6NhTNGMC1x0qV61hUo4TmRCqwAHWk3%2FOtDt0Ybo3l%2F1gU2Z84fLoT6gmfgb4Q25PdaPRT85qrC%2BZNByFD5EGGI9bWGFF8%2FglZyrwd6Uw9neLJ8xpFYFbeNvDg%2Fi1LhbwAPhqy%2Ft7WYwwGt5gwOU9IsWGtWcpFtxkC1idVLZ3Mm%2FCdfwadXDBJysK7w%2BS%2BpzvGQtWabE1f4muA1lrhchoMNC6qcAGOqUBCKlIq222WhekVwWUWerSZc%2BJq8JTvUpNSj0AZQo0LlrYg37SPbgV6F7lrv9Ns69EGr7V1kgeKvzvRgIHCxWN%2BfjGkx3KXiv2ipcDDx1H5F3W1L1jC7pZZ2CHL2O7qz6ejf%2BMk2LJGr1l%2BL7OsFBLacdemgByv1BGak%2Fg9TYUZEHGdHMsC5K2aVARojvuLjAtPdLvFyGBOtT6%2FZ84luKT4KXdo5Pw&X-Amz-Signature=481fa50874671acc030afaf342c4c0ae5bb7b3d0dde73b0a1d75a37d61beb198&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
