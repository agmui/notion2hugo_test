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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKVS7XJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDC%2FGKxkmaonapFf7t7j3rtdpjtjUfLxvKIjolDFPienQIgRmsVKwQw4jyOAJJxQjG91FKjhD9prWr7wWCq3dY4THoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCyUFqAVRE%2BbAV2v5CrcA2v0%2F4RNcnrZHWmUh7AEzGD9fuyMLQS%2Bq%2BCwWyUp5NL1DbeOIOJaZEnsMbm%2B2lhNjqfboNrEX5R8SigGZbuDVXVp176FeWvGEYYqF0xhYqZMMm%2BEJYdUHFRMW8p8ISKYp2TOID9%2B43ojUCebWCAsHdvAsB6jrzhRdfqPuPbX7%2FHptBYvgV3p6rvsEiKbAJpB9OPv7zIEHyyNIkvR5eaH1ugUTmCzr%2B116SD5Vx%2FoowR3hgkVUJcGgwBZnvTGjuec8iCBbu3pkv1wJUbrvLY5a9W7skhb5TNXpYG0LoQqkZlCfF6GmIRfDP%2F4VaK4AtucshzytL0rclSebnTcS9g%2BWpZlQDyCM6RITq%2BBPAuWgx1A87lurPP2B693UWwRYRwMGdzMG5A%2BirnVGqE7j7IinrBVzL44o8UzZCJyZoxBhVkoGCTjeutg9WdT1eyHFOK1YTJ%2BQmru55Ih0iq1XTVBLfUfHJLPUIXljrpWVufjL8b17xv4PrL%2B3EICzE5sthSlgZFUJOZ5oL38UtH2MX1%2FiXvEFQGddS%2BSAzhlisQEadH67DJjVNDg7iOX00GXdheqJsNm77OruNHhG6MLzRHcq%2Fa25HpBD0plgdToLyxW%2BS2la85FrU7893PncMvRMKDqr8MGOqUBe4gc9vMRWA6LftQcmwtj0LgsvprJ5LY1Dmzo%2FgLV%2B6QWx9MOaaZ0zX%2B6krbmfQCNxkba59kfKw8awdDORKZXf1tO%2FRjrT7qeWuO6xJAu66wrFR6cqvY5R8nKSEI7t8ei91fP9AyJ3Tckl19AozmuGtntZhWnI7O02%2Bb2DdVyziPuqIHiNhXbtk5iSU7%2Fn%2F4%2BPcpA%2FldhjKvuV59v%2BLjbfhMNZkCr&X-Amz-Signature=a35d06219429b5480fd7002ebad47462191f0b27886aa0acd67a9b3b06843b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKVS7XJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDC%2FGKxkmaonapFf7t7j3rtdpjtjUfLxvKIjolDFPienQIgRmsVKwQw4jyOAJJxQjG91FKjhD9prWr7wWCq3dY4THoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCyUFqAVRE%2BbAV2v5CrcA2v0%2F4RNcnrZHWmUh7AEzGD9fuyMLQS%2Bq%2BCwWyUp5NL1DbeOIOJaZEnsMbm%2B2lhNjqfboNrEX5R8SigGZbuDVXVp176FeWvGEYYqF0xhYqZMMm%2BEJYdUHFRMW8p8ISKYp2TOID9%2B43ojUCebWCAsHdvAsB6jrzhRdfqPuPbX7%2FHptBYvgV3p6rvsEiKbAJpB9OPv7zIEHyyNIkvR5eaH1ugUTmCzr%2B116SD5Vx%2FoowR3hgkVUJcGgwBZnvTGjuec8iCBbu3pkv1wJUbrvLY5a9W7skhb5TNXpYG0LoQqkZlCfF6GmIRfDP%2F4VaK4AtucshzytL0rclSebnTcS9g%2BWpZlQDyCM6RITq%2BBPAuWgx1A87lurPP2B693UWwRYRwMGdzMG5A%2BirnVGqE7j7IinrBVzL44o8UzZCJyZoxBhVkoGCTjeutg9WdT1eyHFOK1YTJ%2BQmru55Ih0iq1XTVBLfUfHJLPUIXljrpWVufjL8b17xv4PrL%2B3EICzE5sthSlgZFUJOZ5oL38UtH2MX1%2FiXvEFQGddS%2BSAzhlisQEadH67DJjVNDg7iOX00GXdheqJsNm77OruNHhG6MLzRHcq%2Fa25HpBD0plgdToLyxW%2BS2la85FrU7893PncMvRMKDqr8MGOqUBe4gc9vMRWA6LftQcmwtj0LgsvprJ5LY1Dmzo%2FgLV%2B6QWx9MOaaZ0zX%2B6krbmfQCNxkba59kfKw8awdDORKZXf1tO%2FRjrT7qeWuO6xJAu66wrFR6cqvY5R8nKSEI7t8ei91fP9AyJ3Tckl19AozmuGtntZhWnI7O02%2Bb2DdVyziPuqIHiNhXbtk5iSU7%2Fn%2F4%2BPcpA%2FldhjKvuV59v%2BLjbfhMNZkCr&X-Amz-Signature=fdccbce907208772ab72caf75b9fd93d90d1d796792d24174b636db1a97ef78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
