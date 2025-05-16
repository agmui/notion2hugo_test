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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4SCAMI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVTusJPd0Y9ZZsL2QI7qDiRypYX1vGUXKgnT%2BnrKSJSAiBrvtgSCuqiHr6JmgcwWeDC%2BekoGU2fJjMxl%2FhGH2wtgyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMFGj6U1jALuQBKDFLKtwDzZfXFdyEXkYvLd1FGY2Te0j%2Fk9248zvSynJSixUWC5TPC%2FBmh37oUdIeISt5DuaN0WHujP8SMVw6pEGpiCrFbwHebXDrv%2BBOBggcS5VUIUpGeFrIk8PwjcwsV52h6esRDaiULbAjLde2sTTd0KixxxOFi7H3202E5FWAxII7%2BHN9j0uHJJwVrVtNC0xONuSl3ZVNJ6wQ%2BPTRiJn91hmXcf9Ow9zMy5mz%2Bd0un9AFUtIUEj4NR7n8zq0q37nl6fwcRJmWYdYoC4VwU1ChluEwJpioxKSFp4l9n8LxP2Im7LSoYWGjaIN5S5gTwMT0INx1LV7Po0v6H1v2RMprIp7KcXohx6FoVEk69fqLzAWVUR08jExeAUpCzr%2FL3bybbYVXLav29xjv10e04xymNdirvLWxWr1EuxKaWS%2FKkmG%2B00jQxuPk43K2BHsac3%2F3tRqMOOVna4kXREO4SIjyiQpn%2FNKKj4aYN8ApxZkqO2bg5GKD8ad7l4j1PlGUjGo1igR4VGhT3xY1DWfl8E%2FTA%2BpmVxkaooX8rWwE%2FoovB7ZsfAnW4mcgCneKiR56jNeqMEJlpzaQJSTDA3yOidffE01pNtmw5Yv%2Fu1oxHNLRrxAk%2Fs5mTFXu8alxpGWx6LUwvP2ZwQY6pgGv08K0rlT0CkJDvWJSbp%2BpF%2Fqs6TNM%2BsNTVwEfNXKE8tnXnaMb8jpCXADcTF5woQLZXGYb%2F%2FAc%2F6opeJmKNJ%2BsUymlO%2Fi4P8hm0QC8J4X4YbxSnjZAvckClZCjyTM0Qi%2Bbmu8uwIYF%2FANSxT95wPjIzkdPEfH5M4fVqrkPvplSiBbqsP0dhIyBAr3BEgBi%2BGpYQrECpJkUqJRs%2FaR%2FScWCNvQl7jYK&X-Amz-Signature=6b659abd6e47893f4684b142cdafe88add4034c39800d539165289dcb1bec29a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4SCAMI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVTusJPd0Y9ZZsL2QI7qDiRypYX1vGUXKgnT%2BnrKSJSAiBrvtgSCuqiHr6JmgcwWeDC%2BekoGU2fJjMxl%2FhGH2wtgyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMFGj6U1jALuQBKDFLKtwDzZfXFdyEXkYvLd1FGY2Te0j%2Fk9248zvSynJSixUWC5TPC%2FBmh37oUdIeISt5DuaN0WHujP8SMVw6pEGpiCrFbwHebXDrv%2BBOBggcS5VUIUpGeFrIk8PwjcwsV52h6esRDaiULbAjLde2sTTd0KixxxOFi7H3202E5FWAxII7%2BHN9j0uHJJwVrVtNC0xONuSl3ZVNJ6wQ%2BPTRiJn91hmXcf9Ow9zMy5mz%2Bd0un9AFUtIUEj4NR7n8zq0q37nl6fwcRJmWYdYoC4VwU1ChluEwJpioxKSFp4l9n8LxP2Im7LSoYWGjaIN5S5gTwMT0INx1LV7Po0v6H1v2RMprIp7KcXohx6FoVEk69fqLzAWVUR08jExeAUpCzr%2FL3bybbYVXLav29xjv10e04xymNdirvLWxWr1EuxKaWS%2FKkmG%2B00jQxuPk43K2BHsac3%2F3tRqMOOVna4kXREO4SIjyiQpn%2FNKKj4aYN8ApxZkqO2bg5GKD8ad7l4j1PlGUjGo1igR4VGhT3xY1DWfl8E%2FTA%2BpmVxkaooX8rWwE%2FoovB7ZsfAnW4mcgCneKiR56jNeqMEJlpzaQJSTDA3yOidffE01pNtmw5Yv%2Fu1oxHNLRrxAk%2Fs5mTFXu8alxpGWx6LUwvP2ZwQY6pgGv08K0rlT0CkJDvWJSbp%2BpF%2Fqs6TNM%2BsNTVwEfNXKE8tnXnaMb8jpCXADcTF5woQLZXGYb%2F%2FAc%2F6opeJmKNJ%2BsUymlO%2Fi4P8hm0QC8J4X4YbxSnjZAvckClZCjyTM0Qi%2Bbmu8uwIYF%2FANSxT95wPjIzkdPEfH5M4fVqrkPvplSiBbqsP0dhIyBAr3BEgBi%2BGpYQrECpJkUqJRs%2FaR%2FScWCNvQl7jYK&X-Amz-Signature=63ada0132287a359e51670ae369c004c1bf58069d5f8e1c461b57a1bf2174d11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
