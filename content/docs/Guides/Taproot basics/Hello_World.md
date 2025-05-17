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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXALM246%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID36oIPY3c0ZIwSXZUlLgytf14SuUdth1uzzeOY1yrDbAiEAx7oFk3eZvoEAnR%2BfZop1NlZ%2FmJAzA0X2OU4NHuBfJP8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLQI8VUuKh2UPaLuByrcA5LK4ebiXycmF%2FT9zFjJMIUlVeX4FSnOPwe6%2F8vMdXnEI3epTnMqI4N3Sa%2BWn6mXd6rG5yPNAj%2FlYz5IxK32NBk7wEtRdfFNzuzSftO0VIc0etwgcu3A0IuxUhqFGEULW8F8w6OxTGXRUEfNiJXzG7Q0wkPd5Rx9zy8aLB3%2BkF1MC9ODSW%2FH%2Fc8Q3e%2B4rE2u90lKOlKFxbpWOEaJkdOkY58ZrwIOZKBbpcpwp3F6Zq%2BRf22ZWFPIVf5kauEHCIeLWABSiQlVkIJe27lyHcIvwUrNuCvGCkfiSbUUwETcrOskeWC1w%2FDQeU640GmcC9j0ivO6qo7EDKvftvt9dZgaeL5qWrOF%2BIhTREmfgux%2F7g6OxK7E%2BmX%2BwVPAK6yVDwDgjZJR%2FE%2F0lKtc8e1RTDXM%2BbFhz29R%2FITFmwh8D%2B8zsWCx3oJpBSMrHWzGIQQnUNfaDmK2JhcdhjasA%2FxxhZUeLGz0vD3oZz6rplti9y1JUg%2BUhbnUKdhHirw0iFxz9XZJFpmpM5UYQOoDa26YNUibfvworHHqFApOxml8uWKWI5tyx9rum8VuXcdeYs71Z3nx8omh%2F0RQMozjOnuxboFf0wgt2RLUiXnmG2nbwJMi1e8dw9tluv7iUORIWYNGMPC1osEGOqUBPo38Xuhq08tGNxUkW8Wyosr1MbsLtZ0lfVv9Gcih5WCMhbUb5J%2B1JZA7AjMeu2aJ8ZJyc9vKJkMJ4XgBnXz7BOjhmWKv2Ee91%2F5OG0GWvydSgPu1tBOdSZQkeU1c%2BK%2FjUobxwgJixnqQ486Nz1vJyb1noH6CzrywGoBov6pwzyvV4ftmQcOD0sxDrhiI%2BfISeFs3bw32R%2BvCGBgeHiz8tEscSUeS&X-Amz-Signature=61da1f628c5166df727ccbc5ecbd25f98b0cf09ffd5c4ec88cfb6300fac93edf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXALM246%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID36oIPY3c0ZIwSXZUlLgytf14SuUdth1uzzeOY1yrDbAiEAx7oFk3eZvoEAnR%2BfZop1NlZ%2FmJAzA0X2OU4NHuBfJP8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLQI8VUuKh2UPaLuByrcA5LK4ebiXycmF%2FT9zFjJMIUlVeX4FSnOPwe6%2F8vMdXnEI3epTnMqI4N3Sa%2BWn6mXd6rG5yPNAj%2FlYz5IxK32NBk7wEtRdfFNzuzSftO0VIc0etwgcu3A0IuxUhqFGEULW8F8w6OxTGXRUEfNiJXzG7Q0wkPd5Rx9zy8aLB3%2BkF1MC9ODSW%2FH%2Fc8Q3e%2B4rE2u90lKOlKFxbpWOEaJkdOkY58ZrwIOZKBbpcpwp3F6Zq%2BRf22ZWFPIVf5kauEHCIeLWABSiQlVkIJe27lyHcIvwUrNuCvGCkfiSbUUwETcrOskeWC1w%2FDQeU640GmcC9j0ivO6qo7EDKvftvt9dZgaeL5qWrOF%2BIhTREmfgux%2F7g6OxK7E%2BmX%2BwVPAK6yVDwDgjZJR%2FE%2F0lKtc8e1RTDXM%2BbFhz29R%2FITFmwh8D%2B8zsWCx3oJpBSMrHWzGIQQnUNfaDmK2JhcdhjasA%2FxxhZUeLGz0vD3oZz6rplti9y1JUg%2BUhbnUKdhHirw0iFxz9XZJFpmpM5UYQOoDa26YNUibfvworHHqFApOxml8uWKWI5tyx9rum8VuXcdeYs71Z3nx8omh%2F0RQMozjOnuxboFf0wgt2RLUiXnmG2nbwJMi1e8dw9tluv7iUORIWYNGMPC1osEGOqUBPo38Xuhq08tGNxUkW8Wyosr1MbsLtZ0lfVv9Gcih5WCMhbUb5J%2B1JZA7AjMeu2aJ8ZJyc9vKJkMJ4XgBnXz7BOjhmWKv2Ee91%2F5OG0GWvydSgPu1tBOdSZQkeU1c%2BK%2FjUobxwgJixnqQ486Nz1vJyb1noH6CzrywGoBov6pwzyvV4ftmQcOD0sxDrhiI%2BfISeFs3bw32R%2BvCGBgeHiz8tEscSUeS&X-Amz-Signature=e61132f539048e1005d737c283e8e9a0d4d7684ff9e7d4999c179321bd4573d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
