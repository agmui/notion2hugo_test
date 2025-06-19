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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLDO6JQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGV%2F6iFkBoRP54wf%2F0co04f0crIPAuDIJVjtE73rTGgIhAI2A8J%2BbS%2Bq32QLDjtxYgqFwKmb4OyYSyFknXVzxxieKKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwcf5Fj9GgW4ta9NEcq3AOUiI8u7OBJBT0EQB4T6kiIvZCQ%2FWYQsuv7A0Wd2NeqeJZnfqhMaG8EEvlUJhwyAOrGBNPcE1F%2BAFyEBrFIeDQDtf8MiM4FW%2FUzzyMIQjdQ4uZo%2BVJDgrSuWgfGTdAyWNxgmaSJZ6W4dCAo9wveqxTglgiHC%2BfwsSKQDLdkZdcVV27hk2VLVZbZtijFNo5s0rQcENkK9O2bV9JvmbmgnZRFZ4GuunBOMBwGsI5FRw%2BLaDMSuFgDNy8lGlP%2FTqffIuYg%2BV5RT7%2FHJGaSSqIroTbXDVGk9Cj6KyBF1rAjrdB0ZHr9mmFipQ7hyN9%2FUBiLegGcmAgzzpeWKiNQneZae9elOsB5J57jDbZwAhUO0RFs5Z9EAGUzrM%2B63GitXvUT70h40gxhkMprLQxKua8xKff0SrFJYNhrFQoLDOlzqtuYt47vMtuNsio27jM0%2F%2BanqRaHDReqI9ioYZiscBpcMZxKzHm%2BTozJBbuiO%2FL6k6S6w7RX43an8Oj4XuWwwwMOwqfxRQJU2rFHlGvLFWTbFn6GCELgSeNccMMjhAhKZcNt2KQrg7kZfbRkPAaB9K1NHoQ5xU7ELOT6cA10RUy5yBvLw6YkXjqC5DkHBbhO8MhVCBtUnCQTiJmdv5vX2jDzs9DCBjqkAWuIYKaPx%2BI0%2FHcoLobCzGZPTKSC2rIP4b%2FADnQCuEdt0%2FKT5A4hvfQqBOxyhrW2tnOpEFNc7A1vBBmnKzyxQ0tqnsEbUMK9Un3%2BHNssEu1gTNxK4XGdyxswyCA8u9mPk2Dmoyhh%2B2hsqNKyZU03ABQ2vBLqi%2Fk8fhkOyLlUiZV3cTKgPLGobCsbaQE6COi0EPN4mQ7Q35jlyWXcPRU4zsXgdKpa&X-Amz-Signature=00c1251450cf426d3a8298c817b3cada0cc55c85cc660fd496885ad8cf11d75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLDO6JQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGV%2F6iFkBoRP54wf%2F0co04f0crIPAuDIJVjtE73rTGgIhAI2A8J%2BbS%2Bq32QLDjtxYgqFwKmb4OyYSyFknXVzxxieKKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwcf5Fj9GgW4ta9NEcq3AOUiI8u7OBJBT0EQB4T6kiIvZCQ%2FWYQsuv7A0Wd2NeqeJZnfqhMaG8EEvlUJhwyAOrGBNPcE1F%2BAFyEBrFIeDQDtf8MiM4FW%2FUzzyMIQjdQ4uZo%2BVJDgrSuWgfGTdAyWNxgmaSJZ6W4dCAo9wveqxTglgiHC%2BfwsSKQDLdkZdcVV27hk2VLVZbZtijFNo5s0rQcENkK9O2bV9JvmbmgnZRFZ4GuunBOMBwGsI5FRw%2BLaDMSuFgDNy8lGlP%2FTqffIuYg%2BV5RT7%2FHJGaSSqIroTbXDVGk9Cj6KyBF1rAjrdB0ZHr9mmFipQ7hyN9%2FUBiLegGcmAgzzpeWKiNQneZae9elOsB5J57jDbZwAhUO0RFs5Z9EAGUzrM%2B63GitXvUT70h40gxhkMprLQxKua8xKff0SrFJYNhrFQoLDOlzqtuYt47vMtuNsio27jM0%2F%2BanqRaHDReqI9ioYZiscBpcMZxKzHm%2BTozJBbuiO%2FL6k6S6w7RX43an8Oj4XuWwwwMOwqfxRQJU2rFHlGvLFWTbFn6GCELgSeNccMMjhAhKZcNt2KQrg7kZfbRkPAaB9K1NHoQ5xU7ELOT6cA10RUy5yBvLw6YkXjqC5DkHBbhO8MhVCBtUnCQTiJmdv5vX2jDzs9DCBjqkAWuIYKaPx%2BI0%2FHcoLobCzGZPTKSC2rIP4b%2FADnQCuEdt0%2FKT5A4hvfQqBOxyhrW2tnOpEFNc7A1vBBmnKzyxQ0tqnsEbUMK9Un3%2BHNssEu1gTNxK4XGdyxswyCA8u9mPk2Dmoyhh%2B2hsqNKyZU03ABQ2vBLqi%2Fk8fhkOyLlUiZV3cTKgPLGobCsbaQE6COi0EPN4mQ7Q35jlyWXcPRU4zsXgdKpa&X-Amz-Signature=500944a32921497fe6bb512619b0d51551a9fb3069e9e863475cb797ad07f2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
