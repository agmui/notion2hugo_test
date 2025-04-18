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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELNMONX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9KXr9wy5Aq4bMuUGDmbA217cKQtvp1uKDDsWazzi03AiBZFX1f6lLpOicIVDTbic8QNICNWPTlz8n9dXnhWc%2F%2FVCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMw%2BWxF7xgmknCL8ZQKtwDPgPBPHECCVCO3nWrSZEMD5ifFr0UjQkGzQhy9lUc0eVyfd2vyDBZvgZUzBKGcHLwezR6GbFZkfN96bqWq4rf8LlR64IuvzvMvL2tQoUoLlTWClex%2By4koVo9Dh%2BZp7slkd%2BVCP8sDCKpJ6N5uqHwk7AtSNlzfTk4nsfiGwNhshX5X6MzGZcPV6SAHnlVqkW719RZyf9xCngmrdkHfoirtT9V%2FLJXGsmoJFBEpBG8TH9%2BSU63uiB3PaH9BmnJ15aBszYStBkQDbzdzSu3cOKI6rrZ7FxKPV2HIRPGYSTUUQzIeBUsc1%2FK90OGZle2vU68CzMKGUCdkJuwHU6qzUqBQ9Imh%2FYXjJ7%2B%2BVjK%2BBStTCP%2BpICDuB92ODiSRc6k7tH5dSa9b4GKSwaWT3n7SkRr1%2BEKZAm3Wj9cYkRzzbueSzs80GHMxBoFS2spY8FaxWESbuOUciIYsK7VCKq%2BNPpX0GQ3axmfHEyr5FQYpoYjzUfsAuMJQxhLLsbDjIK%2FmniOaDcjCp4rjwAqJ5%2FxmDz0ZRuB9WuCMIH2UFXZmpKFz16%2BRbKO6CCadvoqgPF461rZkRT38NbcSNzjo%2F7p7D9wAGRp06q%2F1FtJK1ULpHJ%2BB1U841dpR9sOcSIm0CUw0t%2BJwAY6pgG8uhzygAT5w2zc2xYjmbskqlczaOc67bcNJ0uVsLVkfq%2FZahFheIKQa7QXHbhkR7TOtnfc7mZUjl%2BcTYsA9wPG%2FHIFzNoHvS%2B7PNDzjQBpP7Ijbwdtkix4T2A4gn2rXYjQX302dvMGwjUB7BxaBKsUaKiseCfUZbXdpC5qLnhwAbdolQ0JbLq%2BjamEFkqgRIQSl%2F0DXwMOhb9g2P9t4kFXE7piXs4v&X-Amz-Signature=8347e87102bd6d299ff2ad79fc90416e2bf4527b84306db414eff2cc56109d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELNMONX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9KXr9wy5Aq4bMuUGDmbA217cKQtvp1uKDDsWazzi03AiBZFX1f6lLpOicIVDTbic8QNICNWPTlz8n9dXnhWc%2F%2FVCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMw%2BWxF7xgmknCL8ZQKtwDPgPBPHECCVCO3nWrSZEMD5ifFr0UjQkGzQhy9lUc0eVyfd2vyDBZvgZUzBKGcHLwezR6GbFZkfN96bqWq4rf8LlR64IuvzvMvL2tQoUoLlTWClex%2By4koVo9Dh%2BZp7slkd%2BVCP8sDCKpJ6N5uqHwk7AtSNlzfTk4nsfiGwNhshX5X6MzGZcPV6SAHnlVqkW719RZyf9xCngmrdkHfoirtT9V%2FLJXGsmoJFBEpBG8TH9%2BSU63uiB3PaH9BmnJ15aBszYStBkQDbzdzSu3cOKI6rrZ7FxKPV2HIRPGYSTUUQzIeBUsc1%2FK90OGZle2vU68CzMKGUCdkJuwHU6qzUqBQ9Imh%2FYXjJ7%2B%2BVjK%2BBStTCP%2BpICDuB92ODiSRc6k7tH5dSa9b4GKSwaWT3n7SkRr1%2BEKZAm3Wj9cYkRzzbueSzs80GHMxBoFS2spY8FaxWESbuOUciIYsK7VCKq%2BNPpX0GQ3axmfHEyr5FQYpoYjzUfsAuMJQxhLLsbDjIK%2FmniOaDcjCp4rjwAqJ5%2FxmDz0ZRuB9WuCMIH2UFXZmpKFz16%2BRbKO6CCadvoqgPF461rZkRT38NbcSNzjo%2F7p7D9wAGRp06q%2F1FtJK1ULpHJ%2BB1U841dpR9sOcSIm0CUw0t%2BJwAY6pgG8uhzygAT5w2zc2xYjmbskqlczaOc67bcNJ0uVsLVkfq%2FZahFheIKQa7QXHbhkR7TOtnfc7mZUjl%2BcTYsA9wPG%2FHIFzNoHvS%2B7PNDzjQBpP7Ijbwdtkix4T2A4gn2rXYjQX302dvMGwjUB7BxaBKsUaKiseCfUZbXdpC5qLnhwAbdolQ0JbLq%2BjamEFkqgRIQSl%2F0DXwMOhb9g2P9t4kFXE7piXs4v&X-Amz-Signature=bd9306e1201b556675fabc4259060e2056d27bfeeea8d4c90a2d0b23b38417c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
