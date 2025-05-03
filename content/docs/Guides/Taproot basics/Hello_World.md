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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4IWPUG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCX%2F%2FRKBtpmhvicfTrAE%2F%2Bxfz93AmW%2B0wkM4c2wxbBwawIgcPaRiQxs7zQcvKCfXxL8rwICDyZfI%2FbRjnzmmLUMDvcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPPBfGw3wjxpkSb3SrcA%2Bkjf72uk47VNW7ZwagEp14r23R5rrnnLTDysC7CAzIq6lONzczpGly8uKQhd2%2B9VjmUQVMtZy43rZ1lExM9fZeZC2cNthFqAf4OlCav%2Bn8zNeVW3dlCMTuc0SvbZ9ydi6r0NSUO7Z60rz4w1Y1ecfojrAWTBntYTLL0M3c5yPUm4cd%2FBNhF8yGvMrJuwx2C4z9kStUcWVcV14jZtYP36jsBSV8VjQu7%2FzdDBE6EO%2Bz1gXxNlJFqJkiUa3W47H16ERAcAzrdb0MgGtKU0JH41D6RClS%2BUS0my6rd64j1pN79iTCReth635x9qy7LYPA%2FwPJijXcUCrwaNQbp3X6VOdz1v455p00A%2FjmN8RpiL69vApM2poZ8BvC2hGxesO%2FlOoV5vv8k87ezAJDFBrmspXW1r5DrdqJVqrMfozs2ioLPuNIoOUt8i%2BblTy7eWQvTYMEZm0%2B8vRq64O9B%2BKvNdPzWauFtCBkUcZPFe4CB6dejjDdomwFjPdTj8gXK6gPO5mnjPlLfT%2FXe0oQrgrW0tI1uZttW%2BYsOOIfCoAHCiuuCCuc%2FsvR%2BxE1ycvO7UyPaYm7%2B3Xn3iDZe6tZjhTrN6qJOGZtMTv5hzf0zO6P6DFjmOh%2B223Tkc1RLIQG%2FMIbu1cAGOqUBmjbj%2FBh9lwCCjwE8j%2Fek2hWM9I4bqtBshy2quRw3XbgMcSNPGoq5HrBZB5HD1IQ3n5C7aqETnCb5B5WOeYcdqZ2K2wu9pqrTcO5h1IJxcA3yQm%2Bw4fFvS%2BAkw%2BcHEyWgCSz9mp2i0wzmhuNuqBzyiyIMzLpV1OuAekmWDlEOOqnw7%2B1SW%2Fv968oBr0Bv6qV4l6W7ShjDUaoJWoOMf%2Btxi6fjNqhU&X-Amz-Signature=d36959613996248c69dda150da75c0d214ce944cc8b257b77eac61c00271873a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4IWPUG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCX%2F%2FRKBtpmhvicfTrAE%2F%2Bxfz93AmW%2B0wkM4c2wxbBwawIgcPaRiQxs7zQcvKCfXxL8rwICDyZfI%2FbRjnzmmLUMDvcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPPBfGw3wjxpkSb3SrcA%2Bkjf72uk47VNW7ZwagEp14r23R5rrnnLTDysC7CAzIq6lONzczpGly8uKQhd2%2B9VjmUQVMtZy43rZ1lExM9fZeZC2cNthFqAf4OlCav%2Bn8zNeVW3dlCMTuc0SvbZ9ydi6r0NSUO7Z60rz4w1Y1ecfojrAWTBntYTLL0M3c5yPUm4cd%2FBNhF8yGvMrJuwx2C4z9kStUcWVcV14jZtYP36jsBSV8VjQu7%2FzdDBE6EO%2Bz1gXxNlJFqJkiUa3W47H16ERAcAzrdb0MgGtKU0JH41D6RClS%2BUS0my6rd64j1pN79iTCReth635x9qy7LYPA%2FwPJijXcUCrwaNQbp3X6VOdz1v455p00A%2FjmN8RpiL69vApM2poZ8BvC2hGxesO%2FlOoV5vv8k87ezAJDFBrmspXW1r5DrdqJVqrMfozs2ioLPuNIoOUt8i%2BblTy7eWQvTYMEZm0%2B8vRq64O9B%2BKvNdPzWauFtCBkUcZPFe4CB6dejjDdomwFjPdTj8gXK6gPO5mnjPlLfT%2FXe0oQrgrW0tI1uZttW%2BYsOOIfCoAHCiuuCCuc%2FsvR%2BxE1ycvO7UyPaYm7%2B3Xn3iDZe6tZjhTrN6qJOGZtMTv5hzf0zO6P6DFjmOh%2B223Tkc1RLIQG%2FMIbu1cAGOqUBmjbj%2FBh9lwCCjwE8j%2Fek2hWM9I4bqtBshy2quRw3XbgMcSNPGoq5HrBZB5HD1IQ3n5C7aqETnCb5B5WOeYcdqZ2K2wu9pqrTcO5h1IJxcA3yQm%2Bw4fFvS%2BAkw%2BcHEyWgCSz9mp2i0wzmhuNuqBzyiyIMzLpV1OuAekmWDlEOOqnw7%2B1SW%2Fv968oBr0Bv6qV4l6W7ShjDUaoJWoOMf%2Btxi6fjNqhU&X-Amz-Signature=a7779877c9811f8da3e93558262f3ccda0f465050eceb79bbc87578a8ae6a852&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
