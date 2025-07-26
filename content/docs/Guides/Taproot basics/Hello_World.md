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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWR3MAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICouA08X9Ce1fBzmdv7%2Futd1AXe8KNgH85xGGed0UZvNAiB%2FMlgmiZ9dSKS2LN6tnTSvtNh0xgasAdIMIdBZTme5Pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjxsH1ojqidEK51ovKtwDWhYEx9BKKAU2vnZ3lp10SAQpMtwcPpch8AFNav5mkQmTUfOE5ClkTm0apHW9lBNk1bDPlK8wEM6WcVyjvWbiBwwhMuQuL0oRCkRVRrEAlJVAep0YlCJ1eVNT8n9wSOLtKaGD%2BXnoKZjeEpPcOw8cpxZEam9olLTz7kbbHAAIkoqCOfKXPTSfK7etW7jmgeeMURKHiBXJnARAxNQ3iX%2B4w%2FuTUfyK4hFtfF8uXUUdhlXcxnUQa0GBxWFqC9xWubbks%2B6d19l%2FN%2F3oLXykJ%2BQkiA1Fh7X5ukOtQsXo1L%2B2Hc0zPa09C1VnLUtsHhbxaCCkzcJ%2FRLg92oEV3%2FGVTjRKRwDWf%2B9KkEgZ4JOJ6JJ6uDR09MMhKSMtqBAsfzbfns6A1fT1ANTg346GQc28ABh6bMCR6yz92jXWeJwf2ySXEtOLSlBYNH5aun%2Fdpd28tQxGj4cwtDcfUPaDNBd1PUzKsHxlPt0iKMrW0vcN%2BkiCRUWV21xwtdf2zhFW4mt6mwAEAfq%2BQZg9sUic%2FtOFXimCUGptKOgyJzEIn78raFk3m6mRMeLVHgayunqdHmf709q3Fzh2g97jz7ggkoCcbYakYHRsbaQtxkTvsj%2BW8nGtWH4U2bFJq4Brn6AetDAwsf%2BUxAY6pgHaF79pdnVjfOKgETBIzNEFbGOO4oxhpzlCBdOVwpj7JJSXMnLfARVF4bBDsLxPeXPENjVrXEvsKmq2huWtcoI1MWoFgL5m2Xyt2BAjafVbO%2F12ZRiUdjdbD4MEIgBEud0M3SwE%2BdBZ2wdliMJB3cDNHbIBwohvxeHlXhy0prmvhJugPH%2BqJf4JKKIXpJhcttPgjt%2FKzd%2BF6JJ7MtWJFDONzjveATtH&X-Amz-Signature=728c8faf1a25d8cce086e0bc5b83712d92e4f6652d4463428179a2b66f477dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWR3MAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICouA08X9Ce1fBzmdv7%2Futd1AXe8KNgH85xGGed0UZvNAiB%2FMlgmiZ9dSKS2LN6tnTSvtNh0xgasAdIMIdBZTme5Pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjxsH1ojqidEK51ovKtwDWhYEx9BKKAU2vnZ3lp10SAQpMtwcPpch8AFNav5mkQmTUfOE5ClkTm0apHW9lBNk1bDPlK8wEM6WcVyjvWbiBwwhMuQuL0oRCkRVRrEAlJVAep0YlCJ1eVNT8n9wSOLtKaGD%2BXnoKZjeEpPcOw8cpxZEam9olLTz7kbbHAAIkoqCOfKXPTSfK7etW7jmgeeMURKHiBXJnARAxNQ3iX%2B4w%2FuTUfyK4hFtfF8uXUUdhlXcxnUQa0GBxWFqC9xWubbks%2B6d19l%2FN%2F3oLXykJ%2BQkiA1Fh7X5ukOtQsXo1L%2B2Hc0zPa09C1VnLUtsHhbxaCCkzcJ%2FRLg92oEV3%2FGVTjRKRwDWf%2B9KkEgZ4JOJ6JJ6uDR09MMhKSMtqBAsfzbfns6A1fT1ANTg346GQc28ABh6bMCR6yz92jXWeJwf2ySXEtOLSlBYNH5aun%2Fdpd28tQxGj4cwtDcfUPaDNBd1PUzKsHxlPt0iKMrW0vcN%2BkiCRUWV21xwtdf2zhFW4mt6mwAEAfq%2BQZg9sUic%2FtOFXimCUGptKOgyJzEIn78raFk3m6mRMeLVHgayunqdHmf709q3Fzh2g97jz7ggkoCcbYakYHRsbaQtxkTvsj%2BW8nGtWH4U2bFJq4Brn6AetDAwsf%2BUxAY6pgHaF79pdnVjfOKgETBIzNEFbGOO4oxhpzlCBdOVwpj7JJSXMnLfARVF4bBDsLxPeXPENjVrXEvsKmq2huWtcoI1MWoFgL5m2Xyt2BAjafVbO%2F12ZRiUdjdbD4MEIgBEud0M3SwE%2BdBZ2wdliMJB3cDNHbIBwohvxeHlXhy0prmvhJugPH%2BqJf4JKKIXpJhcttPgjt%2FKzd%2BF6JJ7MtWJFDONzjveATtH&X-Amz-Signature=4c0d21bd30fa6c5c44531049e58cdbc256bfab382143e967c21ae238f61b36a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
