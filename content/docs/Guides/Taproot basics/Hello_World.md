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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573B53K3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBt%2FI2zmCryWu8wqAwL3sAX%2FzF4ApFZCyxUxD41bLi76AiBmbrfdEhJaBBZ4KIF1r5mdO0dgPHU2mOccAIOusEzP2ir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMTsBiXiWUh4XNs5kpKtwD9Db%2FjjdKJgBmXiwXv7PIp%2Fh%2BKvvcMBBOkHpacziF1kTUeMI4QcwVQgNywY40OgRNwaTDnCjWErRf7JhQV42%2Fgcz05Z9XgZ%2FltNQSQbHoXIk5vcLq5bFgxl1C2tQZEghzmvDZikEU19sQOjb5Wz%2FUpkApTVoUc1pzTbJyhXuaeOk7p1O1f1ARRlH716trHnjxfsC4hJJ%2F0ChlGmgyVHSUWRalaIWeOuLjuTxLKRxk8b%2BAiShf4%2BbfqAzNocG8RBbvZe8aGuYkAOn4DVcIKyDFtmcTYy%2BtAk7589L6b%2BX0qxNV8wCfqhTr2CdHs26Dtlh7TssJa4OKH%2FnrCCsW6N38eBofJdPbCDaJ%2FXTfadCz7mH1R4dWaatufGrnB4pxR9gydpA7ubsq3S2Ry7zI354isz36%2Fcu%2FEPXXVv4eor84Mj%2B4wzDduoNaTjs7v1AHH%2BEnnsibszCCkgoyuy0eO%2BISDQECqdhU162CT%2FjEbAEk9zJ3ylW%2BxTHhiYRYZE6UIoGX5Q%2Fu1q30zbORuOXYO1sFAQ%2F%2Bur1R8hUlPls7D%2BNDsJ4qRLqo2FcSjb7SlT%2F%2BtC8QvfhyLYFCbRkdccKWk5s5aDfg2%2FfVeRPEzQ7vESzY4miPjh4UiiQYTbug2L8wx9OLxAY6pgG8vG99lK1IqhzV%2BFE1vnd5X07Sdc0%2B2zAiHJR5iJXAfmZCerIfTYqQqRdsu4MUzMLISwlVDNL5M9GxrUCQgm7jh1nJlFPRiDn2mRgoiPRCm4y3skOljcB9%2FPBcRf7jMscyVSpjySh4AWZgUZTTBICH%2BmNSh7kYF%2FE1W3bllbAtkgo9YYtCh%2BnFRkYgfOWRn7q4xi2TDvJGgzEJ8LiVXRaeTcoQZF7F&X-Amz-Signature=c9bc20f50207d43defb3edaf8c32b8aedb356d4d5b74aca91be710d6cbecbcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573B53K3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBt%2FI2zmCryWu8wqAwL3sAX%2FzF4ApFZCyxUxD41bLi76AiBmbrfdEhJaBBZ4KIF1r5mdO0dgPHU2mOccAIOusEzP2ir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMTsBiXiWUh4XNs5kpKtwD9Db%2FjjdKJgBmXiwXv7PIp%2Fh%2BKvvcMBBOkHpacziF1kTUeMI4QcwVQgNywY40OgRNwaTDnCjWErRf7JhQV42%2Fgcz05Z9XgZ%2FltNQSQbHoXIk5vcLq5bFgxl1C2tQZEghzmvDZikEU19sQOjb5Wz%2FUpkApTVoUc1pzTbJyhXuaeOk7p1O1f1ARRlH716trHnjxfsC4hJJ%2F0ChlGmgyVHSUWRalaIWeOuLjuTxLKRxk8b%2BAiShf4%2BbfqAzNocG8RBbvZe8aGuYkAOn4DVcIKyDFtmcTYy%2BtAk7589L6b%2BX0qxNV8wCfqhTr2CdHs26Dtlh7TssJa4OKH%2FnrCCsW6N38eBofJdPbCDaJ%2FXTfadCz7mH1R4dWaatufGrnB4pxR9gydpA7ubsq3S2Ry7zI354isz36%2Fcu%2FEPXXVv4eor84Mj%2B4wzDduoNaTjs7v1AHH%2BEnnsibszCCkgoyuy0eO%2BISDQECqdhU162CT%2FjEbAEk9zJ3ylW%2BxTHhiYRYZE6UIoGX5Q%2Fu1q30zbORuOXYO1sFAQ%2F%2Bur1R8hUlPls7D%2BNDsJ4qRLqo2FcSjb7SlT%2F%2BtC8QvfhyLYFCbRkdccKWk5s5aDfg2%2FfVeRPEzQ7vESzY4miPjh4UiiQYTbug2L8wx9OLxAY6pgG8vG99lK1IqhzV%2BFE1vnd5X07Sdc0%2B2zAiHJR5iJXAfmZCerIfTYqQqRdsu4MUzMLISwlVDNL5M9GxrUCQgm7jh1nJlFPRiDn2mRgoiPRCm4y3skOljcB9%2FPBcRf7jMscyVSpjySh4AWZgUZTTBICH%2BmNSh7kYF%2FE1W3bllbAtkgo9YYtCh%2BnFRkYgfOWRn7q4xi2TDvJGgzEJ8LiVXRaeTcoQZF7F&X-Amz-Signature=2f5dd8f6fe54d15f10e15c0c9475c84aa69343221c06610daf4a01b1dd158885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
