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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBSZHQP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGUJIznzGpDD6sfGtZdYcpbW%2Ff8aeygieDnqZGSlEd2aAiEAznFLTx%2BpjjmTlz%2Fr6B8jCf3fl4JC2ytfLTSc1HbEdOIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCVnZGs1%2BAmsXjU%2BwyrcA5fgGCSNJ4vWaP2FzsL4wZboxy8pzoOFo9ooBnFwOlGXw8vg4vcemzDsMhBPKFCCNhOnr0ObhJAOsmU%2BCuUbjOUP9G7gJ7zgcuh46lUIYf6Q5FX%2B9p%2F75O9Z3t9iptAqFu3R8rAGlJUJR5VUq3o6yxoSguPUpRLSPRMyQ7Z7s0T%2FXctjI4N2P0WiaBxnnWIJ6O4YUzrmnGEpJQ5XAsQZAo9zHBQzE2BTzlydMhiDvq7GUIfhug0d5AUWBdcFxmCTGtCwa9v%2FU07FO3cJWL3H3heX0%2Be0vWZn2bCGk4CAPTBXExndkTAL6pUb2v%2FdEStSIpE11i5S1sUVW3pCgSTDRJ1PKKorjsDAK7I9UGG0dkwTzc8ppS78KfJPbctSspGTMg1xHdR4E9FGWtjnrm2FDu7RiS1gqS7RIhvpwEpErIOB%2BOmRg9WPagIwoGZPcbdrEqHrvRZpWIEdmYAnDQccZWUDc8BIPAJ4Ndqe%2Fun0qS3so9HHXLinhq4ugCvvHvFg01k95yC9bvPNSijuU1pVZqWqwyWApggSqXJpNbyHiLxk02wRN2Htgznf5tiT6SxQTKuV%2FRLxfqLqybhF1inJgzwh9lnCS3EdWOprbXF0%2FmyyaGenwtq4OzYN%2B1KPMNitgsIGOqUBVngrQ7fMs%2BnMNtPZZy1CI95nopUcQzNSe%2FCiZUeyI63KrzE6edvhlofiunFQZ5QwgV%2Bl%2FQ%2Bc2rTesnVPLYcF0fOZXQP2D67MOLugHHt1EXD6mAvRBD3JjBLwEi5EbXb6OEzIWJ%2BrW%2FxWmYWHA52%2FSdRW8cOqMW9Ov4OOcAYNb5C8eMiwq2jC2emV6NHSf6lXEpcQJGZfVAySMh0XwB6YeROudFDJ&X-Amz-Signature=27d8ffead0f1606cdca9e80b2eab8c4ebba4a4b5ce9f8c81e479442ee2d8685a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBSZHQP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGUJIznzGpDD6sfGtZdYcpbW%2Ff8aeygieDnqZGSlEd2aAiEAznFLTx%2BpjjmTlz%2Fr6B8jCf3fl4JC2ytfLTSc1HbEdOIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCVnZGs1%2BAmsXjU%2BwyrcA5fgGCSNJ4vWaP2FzsL4wZboxy8pzoOFo9ooBnFwOlGXw8vg4vcemzDsMhBPKFCCNhOnr0ObhJAOsmU%2BCuUbjOUP9G7gJ7zgcuh46lUIYf6Q5FX%2B9p%2F75O9Z3t9iptAqFu3R8rAGlJUJR5VUq3o6yxoSguPUpRLSPRMyQ7Z7s0T%2FXctjI4N2P0WiaBxnnWIJ6O4YUzrmnGEpJQ5XAsQZAo9zHBQzE2BTzlydMhiDvq7GUIfhug0d5AUWBdcFxmCTGtCwa9v%2FU07FO3cJWL3H3heX0%2Be0vWZn2bCGk4CAPTBXExndkTAL6pUb2v%2FdEStSIpE11i5S1sUVW3pCgSTDRJ1PKKorjsDAK7I9UGG0dkwTzc8ppS78KfJPbctSspGTMg1xHdR4E9FGWtjnrm2FDu7RiS1gqS7RIhvpwEpErIOB%2BOmRg9WPagIwoGZPcbdrEqHrvRZpWIEdmYAnDQccZWUDc8BIPAJ4Ndqe%2Fun0qS3so9HHXLinhq4ugCvvHvFg01k95yC9bvPNSijuU1pVZqWqwyWApggSqXJpNbyHiLxk02wRN2Htgznf5tiT6SxQTKuV%2FRLxfqLqybhF1inJgzwh9lnCS3EdWOprbXF0%2FmyyaGenwtq4OzYN%2B1KPMNitgsIGOqUBVngrQ7fMs%2BnMNtPZZy1CI95nopUcQzNSe%2FCiZUeyI63KrzE6edvhlofiunFQZ5QwgV%2Bl%2FQ%2Bc2rTesnVPLYcF0fOZXQP2D67MOLugHHt1EXD6mAvRBD3JjBLwEi5EbXb6OEzIWJ%2BrW%2FxWmYWHA52%2FSdRW8cOqMW9Ov4OOcAYNb5C8eMiwq2jC2emV6NHSf6lXEpcQJGZfVAySMh0XwB6YeROudFDJ&X-Amz-Signature=407bba095515369c164080cd649a4c25c49e13b5e07d419a03da5c74bb45559b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
