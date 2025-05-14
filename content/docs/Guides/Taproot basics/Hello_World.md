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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEU2GMA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCGkgJFOgrZMErEKYdFwwvDV7hnCio10ZD78Fk6OmtgNQIhAOZ9HwgEfvnx3EmKJxz7Qklpxz2oL%2FN64V%2BDTxFLx%2BbLKv8DCBcQABoMNjM3NDIzMTgzODA1IgxeU4wWKkPOS4sRkY0q3APUL5RULCXkZMMmH%2By%2Bqnoh3OHj2YdK6OYIHFl3xrtHKDmnBfGaQV7FQLnC8%2FHeJ30m5ewXK0WxntfRgauTfCPVCunwdFea%2BgzHFsHTKzhuoYLK75XKlybBT4QTx5jlwFX5VZF2E8RM1JFpCuuKCijLsOfdwx5bKHHpG%2BrcJ1QM9ob7Bqpp3RCSZf5D4%2BUVzb%2BiLfMjYaEVZ4j1gjXDQ8DjKZhsCbo9L8QJeGTY17aDaP07mV4PvuIYPewRFnzkLgxC%2B7wn%2F%2F27xfBHI4jXXRnRhEuaaVIxn6OgFTqXDMjQ0Fv5JTXLSCHeIN89B2J%2FExmFCzh6DIC3oZpLX4P8TBW5GY4Rd6DvVBuJQQTkuIvYzbZmTR7B%2FThju1dimV0Z9BjuoR8caxrEW2%2FZU5TADHFiIBMMhl%2F16j5zmjzOfPRW9RZAHerOvFlMlU5D1ILg7CBgPyx579MyPtARmGSVNmTXOqVXOKFEZhoaQ1DtQdCDUeTTMZUEWT0dwYD1NwPv%2BJ8jRGyBsPlvYahg3d%2BD2cwz5W4hle56eDYnPbIgkF%2F3UxKa0XFhxwVlOzcyvYRvFlFUF6mYWKblIT4mK46KA8S%2FKnEUZJUlk0QGapE9A2d1fgj%2FklC1y0KZAsTi%2BTCvupLBBjqkAX0ZwVljh6th7SduZmRA3PXMptMsBAhfegXvYl6ACq6OGOEg6G7iQSDsjc5JxsAdS9VdA7Yx4w0BBEe6bdF106LHqD%2BNEDBedFxVrv%2BQxd1iqSyTdNZ5nlyyx2rYcGs45u7A0E8JoCpBPd200QGrwLV0DRRTPM%2B9I1CQkgGN1F08yMAKyo1JqLSjn0%2FfCajiWcmE7brhBZSzfoGBOOWVOmLRp1B2&X-Amz-Signature=8fc28562a22a62f454e1f4596a9be19ac8f79d60dc6851157d4562cbd69911d4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEU2GMA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCGkgJFOgrZMErEKYdFwwvDV7hnCio10ZD78Fk6OmtgNQIhAOZ9HwgEfvnx3EmKJxz7Qklpxz2oL%2FN64V%2BDTxFLx%2BbLKv8DCBcQABoMNjM3NDIzMTgzODA1IgxeU4wWKkPOS4sRkY0q3APUL5RULCXkZMMmH%2By%2Bqnoh3OHj2YdK6OYIHFl3xrtHKDmnBfGaQV7FQLnC8%2FHeJ30m5ewXK0WxntfRgauTfCPVCunwdFea%2BgzHFsHTKzhuoYLK75XKlybBT4QTx5jlwFX5VZF2E8RM1JFpCuuKCijLsOfdwx5bKHHpG%2BrcJ1QM9ob7Bqpp3RCSZf5D4%2BUVzb%2BiLfMjYaEVZ4j1gjXDQ8DjKZhsCbo9L8QJeGTY17aDaP07mV4PvuIYPewRFnzkLgxC%2B7wn%2F%2F27xfBHI4jXXRnRhEuaaVIxn6OgFTqXDMjQ0Fv5JTXLSCHeIN89B2J%2FExmFCzh6DIC3oZpLX4P8TBW5GY4Rd6DvVBuJQQTkuIvYzbZmTR7B%2FThju1dimV0Z9BjuoR8caxrEW2%2FZU5TADHFiIBMMhl%2F16j5zmjzOfPRW9RZAHerOvFlMlU5D1ILg7CBgPyx579MyPtARmGSVNmTXOqVXOKFEZhoaQ1DtQdCDUeTTMZUEWT0dwYD1NwPv%2BJ8jRGyBsPlvYahg3d%2BD2cwz5W4hle56eDYnPbIgkF%2F3UxKa0XFhxwVlOzcyvYRvFlFUF6mYWKblIT4mK46KA8S%2FKnEUZJUlk0QGapE9A2d1fgj%2FklC1y0KZAsTi%2BTCvupLBBjqkAX0ZwVljh6th7SduZmRA3PXMptMsBAhfegXvYl6ACq6OGOEg6G7iQSDsjc5JxsAdS9VdA7Yx4w0BBEe6bdF106LHqD%2BNEDBedFxVrv%2BQxd1iqSyTdNZ5nlyyx2rYcGs45u7A0E8JoCpBPd200QGrwLV0DRRTPM%2B9I1CQkgGN1F08yMAKyo1JqLSjn0%2FfCajiWcmE7brhBZSzfoGBOOWVOmLRp1B2&X-Amz-Signature=77e7c807043dce7c086b95ba9a46f334bd93c89ac7f4b29b17c0902431c24800&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
