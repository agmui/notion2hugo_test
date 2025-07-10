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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J7X5XM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5IFA7bbmV4BoS1OKaiw%2FiwlPui5qZkTDBdN3ibskmQAiBcVteL77c5uOI18esRRJsEWxwm9qK5MthdHyLGISC6SCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1cYt%2FiwRTxPyJghKtwDXCK5QExh%2BrRYt95WjfMWnFHv1%2FooivpvNcJUDb17GLzc7p%2F5z%2Feh2M0YdyD%2FnBSDDRgv5P3OTu7G97nr0su8lhfRxjVNLDGIgRybbKSdu%2BTFFE6RGkpc3ZcJvEOiBETf5cwrgAxrASPHpoddkiB4qiaX9grS6CwMihGxrLK4v2J6Q2q90TGzUIoraa2yBbLH5AvMqibQSBQyXKm3e5yp3d%2FYQXduTLE9aOy4MrTbVLf%2BPZVnbBSOmcCJkNNo0nxBbDExp%2F%2BE0OMwuZztoJzkGfQ2gZ7ePtcZfOcfszba88Mb6Hd%2FR1FOYY3Lj5xmy3g1iRjC9C8tUyEZ35I9Ieh4ftnBStpUmCi2uBw%2FNoFS0CIsGvsMXK5OU6gCGYnuoo6xwGNRmd0pZLTJlKxCpBZi3eh77OwhuqAjOgtQq%2FH%2B2V41BxZOg3Ji3qQsVo9ueqG8tS%2BItKucDR2B1697CoTy6sxIom%2FrbFNGAPB9A%2B0REJJXHg1vGUEQOVYBL4zO9LW6LY1709ZnjrH7aqjH%2BaeMRpbtl%2B0rmc4JH3K%2F2h1conv23hnNJ4pvyTqi9Wj1NGN3FXYOa8Hnhhdi%2FPRxSA9Va2vxHqWzltp%2BJhJbIBXry8QzhTT%2FlP4HXczSMr4w5PC7wwY6pgFv36hGaAFZlbRvd0KdBoZ9g3vFLPe9jnKjqPh%2FIOjdMbYCOseja2gm1Q4MH%2BoAnjr1jQ41mP1E1JspqF9whW61kGttdQRG44liBXi6Q7D93bs68qqfPGb7PpxuWTozHKjW8bDbfGiPg%2BmiaGD3GEIX%2FM0US8u5K%2BkMKyy%2BBb%2FhesD6K39RJP4NMDSDvRa7SCJLBY2wFNFiIHq021uQmU7Yo%2BUcJe4g&X-Amz-Signature=31ae0a5ad9e0d14368116844cade52e1aa8bcf78bffbcf163f38461d436e0ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J7X5XM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5IFA7bbmV4BoS1OKaiw%2FiwlPui5qZkTDBdN3ibskmQAiBcVteL77c5uOI18esRRJsEWxwm9qK5MthdHyLGISC6SCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1cYt%2FiwRTxPyJghKtwDXCK5QExh%2BrRYt95WjfMWnFHv1%2FooivpvNcJUDb17GLzc7p%2F5z%2Feh2M0YdyD%2FnBSDDRgv5P3OTu7G97nr0su8lhfRxjVNLDGIgRybbKSdu%2BTFFE6RGkpc3ZcJvEOiBETf5cwrgAxrASPHpoddkiB4qiaX9grS6CwMihGxrLK4v2J6Q2q90TGzUIoraa2yBbLH5AvMqibQSBQyXKm3e5yp3d%2FYQXduTLE9aOy4MrTbVLf%2BPZVnbBSOmcCJkNNo0nxBbDExp%2F%2BE0OMwuZztoJzkGfQ2gZ7ePtcZfOcfszba88Mb6Hd%2FR1FOYY3Lj5xmy3g1iRjC9C8tUyEZ35I9Ieh4ftnBStpUmCi2uBw%2FNoFS0CIsGvsMXK5OU6gCGYnuoo6xwGNRmd0pZLTJlKxCpBZi3eh77OwhuqAjOgtQq%2FH%2B2V41BxZOg3Ji3qQsVo9ueqG8tS%2BItKucDR2B1697CoTy6sxIom%2FrbFNGAPB9A%2B0REJJXHg1vGUEQOVYBL4zO9LW6LY1709ZnjrH7aqjH%2BaeMRpbtl%2B0rmc4JH3K%2F2h1conv23hnNJ4pvyTqi9Wj1NGN3FXYOa8Hnhhdi%2FPRxSA9Va2vxHqWzltp%2BJhJbIBXry8QzhTT%2FlP4HXczSMr4w5PC7wwY6pgFv36hGaAFZlbRvd0KdBoZ9g3vFLPe9jnKjqPh%2FIOjdMbYCOseja2gm1Q4MH%2BoAnjr1jQ41mP1E1JspqF9whW61kGttdQRG44liBXi6Q7D93bs68qqfPGb7PpxuWTozHKjW8bDbfGiPg%2BmiaGD3GEIX%2FM0US8u5K%2BkMKyy%2BBb%2FhesD6K39RJP4NMDSDvRa7SCJLBY2wFNFiIHq021uQmU7Yo%2BUcJe4g&X-Amz-Signature=492e2e771fb5bbf034708c8d719fa773d7847ce8e9564292bb1de0ea4a57a6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
