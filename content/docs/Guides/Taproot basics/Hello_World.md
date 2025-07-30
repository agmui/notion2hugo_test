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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2A5H4O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ND1ZLbtZ06nl0Aums8arwh%2BhuiPeU4h7ACcep3epJAiEAscMknFJi0APdoQWIzhzJYlWbXn%2F0V9MUtpg5wEGM7pQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML90EIgwfZ1zB%2FhXSrcA8jMwgfWTKktFtJu4eoXf%2B8fbHSFKfhj0qPhbpC8Hlvw434dER8iLykGTFYHce70Qr6H9QAn1E54nuvyvdeQsg2zZykVzlzG8kvoLt5hVmpky1lyRrLoTxlY0hhmXfXCLAcAT6cEkPdsQXsS9%2FmRyUS0tcLl35swEabo2rjmH52DEr3crOU1sQwymFWAQmsWTC2ZLZUrMgDHe4mDHFsN4QUFEQiq%2BLbhBcOhbKA01YaAGgyGfQ7tQSBLF2Wm7h7Aot1Nr%2BuPjtkVM9tSSkPbVrx1jXyd59rfswTR12qnt9qnsBh38uvKI5WsawXXHQU5PoXD21WMUEUJ2DWk%2F0d3CAa58ybq0ORMA4MxS3yi0NkckbjMGtT4oYHfLgMlBGO1IfXc0whLCKGgGxEd1OJftw12rQJjW70X%2Foy3wSHmDBba7sodj%2FbCF85CCrLNz80exQBeOJ1Ga9DjE6nR%2BPGbEkkNc%2BA%2FoAbf1t7tMKh37TJxHV0ESYgnS%2B0p7keYbEKptoXg340gisxaJCqK0f91DK7dS2fC%2BkKUTW6Um6D%2BEHbITZ7ZPSGpulYBf7JrPK9bACBIyecu37zXfPXckASD3AQBqVhxw25DlfrTd05zFxnS6NojOTJgNMTv0s%2F9MJaNp8QGOqUBg6B2bbZR55%2FY6vMsMMbkPCo4ut5gnEei%2BohtqvFvEIae74Ksm4F981Ly%2BtYNvZTMtBuxQ8NX5GtWPLzGApUlmNpRDF1AWHCZG7PTj%2F6j8kUZQbvOR7tgxDSEmVqZhGAgmWfqIjgsykP08vQTYfc6yVusTy6xMOg9d4Bg1Vip9HMaeVcVT3smicZMgmX%2Fua3pEx8DFu5N25%2F4CmbOdbZMS%2FxxD3vv&X-Amz-Signature=79dc9fbc8a79eb1f30bbdfe96f060ee161d2fccef25c09809c01602e02359dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2A5H4O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ND1ZLbtZ06nl0Aums8arwh%2BhuiPeU4h7ACcep3epJAiEAscMknFJi0APdoQWIzhzJYlWbXn%2F0V9MUtpg5wEGM7pQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML90EIgwfZ1zB%2FhXSrcA8jMwgfWTKktFtJu4eoXf%2B8fbHSFKfhj0qPhbpC8Hlvw434dER8iLykGTFYHce70Qr6H9QAn1E54nuvyvdeQsg2zZykVzlzG8kvoLt5hVmpky1lyRrLoTxlY0hhmXfXCLAcAT6cEkPdsQXsS9%2FmRyUS0tcLl35swEabo2rjmH52DEr3crOU1sQwymFWAQmsWTC2ZLZUrMgDHe4mDHFsN4QUFEQiq%2BLbhBcOhbKA01YaAGgyGfQ7tQSBLF2Wm7h7Aot1Nr%2BuPjtkVM9tSSkPbVrx1jXyd59rfswTR12qnt9qnsBh38uvKI5WsawXXHQU5PoXD21WMUEUJ2DWk%2F0d3CAa58ybq0ORMA4MxS3yi0NkckbjMGtT4oYHfLgMlBGO1IfXc0whLCKGgGxEd1OJftw12rQJjW70X%2Foy3wSHmDBba7sodj%2FbCF85CCrLNz80exQBeOJ1Ga9DjE6nR%2BPGbEkkNc%2BA%2FoAbf1t7tMKh37TJxHV0ESYgnS%2B0p7keYbEKptoXg340gisxaJCqK0f91DK7dS2fC%2BkKUTW6Um6D%2BEHbITZ7ZPSGpulYBf7JrPK9bACBIyecu37zXfPXckASD3AQBqVhxw25DlfrTd05zFxnS6NojOTJgNMTv0s%2F9MJaNp8QGOqUBg6B2bbZR55%2FY6vMsMMbkPCo4ut5gnEei%2BohtqvFvEIae74Ksm4F981Ly%2BtYNvZTMtBuxQ8NX5GtWPLzGApUlmNpRDF1AWHCZG7PTj%2F6j8kUZQbvOR7tgxDSEmVqZhGAgmWfqIjgsykP08vQTYfc6yVusTy6xMOg9d4Bg1Vip9HMaeVcVT3smicZMgmX%2Fua3pEx8DFu5N25%2F4CmbOdbZMS%2FxxD3vv&X-Amz-Signature=30d780a5e8bc849b43b825d6e55e412f0ec417ebae49e42bc9cbae4d00a3f726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
