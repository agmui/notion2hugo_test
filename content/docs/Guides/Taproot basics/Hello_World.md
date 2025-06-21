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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DR3V3UM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwCRD9RmBG6RYZxb048jl66%2F7La5GT7Dprn7bvWdii%2FAiBIe69n3LiMp%2B%2BOa5JiNSr%2Bmk1Wp9wGND%2BBAYgN10OTVSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9obV2YUZ7nc90odAKtwDN57842o%2FFGoT%2BG%2BMcIlH8fX8Z7sALzd%2F%2BOttQ6hARFmCmoFlB%2B8VGjHXU9VzZbUWZoypTRpAAS8eIiLP1Me%2FM3d8lnHtldaRNo6y%2BGkl1LoPvIZjIxB2osCN8YvNy%2F8YUjuiTF4dL4hr%2F%2BHhG8SHA%2BsTi3zRbDFBoGN3cHeD70AO8CH%2FzmGerlOzcYM1uE6h5joAH7rf6rg44Pm0ha0dr4MTDYHGcv6HfiatxrWbCkyQGKj2GnQYIqUmog6DDURLeyTvGowMQ6na2bwV0xlk3eXvU36jMEXt5owXhJEa%2B6uP6v0k9dekNz%2Bq%2Flc6GOpjvISL1249N4UbDrDcgxs4OgF77eC0zOj4L%2FxUoKgtXuYeymT6EZC1ZZ%2FihvENsaSIuqdl2uiVx5WCs5847Kihnj0LI%2FZbvgERbFxhYx31IkWt0aJppK5Uq%2B9%2F76TEx54xFSK81lrtZWfkmRib2jqWE0ApBz7rXXWvIy5D2MXS3PARyY1UyqmpsjBSbtw8mpb7ClHwnI9PANyyAk9zTbBV9ZWztkMPa6s1ryQTP3f%2Fv5R5f9TZW0%2FwEBTB%2FEqhotB3gA49CCqisTdHGAgV65%2BZnFfyuiQI4qi7nHJSNRgApVhPLEBPTUl%2BOWa%2FfXYw8dTZwgY6pgGmPJoy3pQ3uRWJ19Ac%2FL0%2FkbrNSbPiU5FfA0KP0yJiTPGd9v2UkfMx9ooWe1ptZiH1UECl1xQfrG1nc5BEWc79HH7%2Bd1vQnJKaPyz6Dowuf%2FDmfbjRRJ3Ml0xUzZJtGLTncRXpL1oJ728ZB2FQboVG72vuKXVT3aBrCEtpSi99YjHJMAkBoDHLrs3ASnPwIDa9o%2FEfkzxt5OIn2XhvlqyI8xEgQgXS&X-Amz-Signature=16ee269e60d06e3c51ed9e70e87711ae27820ca4fa5ab19c6a78a5b338cafe0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DR3V3UM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwCRD9RmBG6RYZxb048jl66%2F7La5GT7Dprn7bvWdii%2FAiBIe69n3LiMp%2B%2BOa5JiNSr%2Bmk1Wp9wGND%2BBAYgN10OTVSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9obV2YUZ7nc90odAKtwDN57842o%2FFGoT%2BG%2BMcIlH8fX8Z7sALzd%2F%2BOttQ6hARFmCmoFlB%2B8VGjHXU9VzZbUWZoypTRpAAS8eIiLP1Me%2FM3d8lnHtldaRNo6y%2BGkl1LoPvIZjIxB2osCN8YvNy%2F8YUjuiTF4dL4hr%2F%2BHhG8SHA%2BsTi3zRbDFBoGN3cHeD70AO8CH%2FzmGerlOzcYM1uE6h5joAH7rf6rg44Pm0ha0dr4MTDYHGcv6HfiatxrWbCkyQGKj2GnQYIqUmog6DDURLeyTvGowMQ6na2bwV0xlk3eXvU36jMEXt5owXhJEa%2B6uP6v0k9dekNz%2Bq%2Flc6GOpjvISL1249N4UbDrDcgxs4OgF77eC0zOj4L%2FxUoKgtXuYeymT6EZC1ZZ%2FihvENsaSIuqdl2uiVx5WCs5847Kihnj0LI%2FZbvgERbFxhYx31IkWt0aJppK5Uq%2B9%2F76TEx54xFSK81lrtZWfkmRib2jqWE0ApBz7rXXWvIy5D2MXS3PARyY1UyqmpsjBSbtw8mpb7ClHwnI9PANyyAk9zTbBV9ZWztkMPa6s1ryQTP3f%2Fv5R5f9TZW0%2FwEBTB%2FEqhotB3gA49CCqisTdHGAgV65%2BZnFfyuiQI4qi7nHJSNRgApVhPLEBPTUl%2BOWa%2FfXYw8dTZwgY6pgGmPJoy3pQ3uRWJ19Ac%2FL0%2FkbrNSbPiU5FfA0KP0yJiTPGd9v2UkfMx9ooWe1ptZiH1UECl1xQfrG1nc5BEWc79HH7%2Bd1vQnJKaPyz6Dowuf%2FDmfbjRRJ3Ml0xUzZJtGLTncRXpL1oJ728ZB2FQboVG72vuKXVT3aBrCEtpSi99YjHJMAkBoDHLrs3ASnPwIDa9o%2FEfkzxt5OIn2XhvlqyI8xEgQgXS&X-Amz-Signature=69dd57529364fbec77e4ae49933e62c3ed02060a3a91b68ad8950b49a8a97a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
