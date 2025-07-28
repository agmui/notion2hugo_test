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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXGK6DF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCGRmZyCwv8N6N%2Fid2trYGe92vlKYo%2F2A3sMmNq7n0zuwIhALvHdgq60idYZkAZTJlJ0EXqMeku5xwarknOjW6oaJmwKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGx4OMQU%2F4Rv80bVEq3AN5VoCo8DwYxn7vWjkgetNFExEv5N0g7qxQs5iPWXTOu4YlH%2B7voOnfi%2B5DCY3DGFVA263VQWOdvTLDI9Do9f%2F0vOSRQZtsQLJdr01cw%2Feaz%2B%2F6DjvcAel3nAvknDyDaKMX%2BofJtWmWlVEAI0yoknz%2FhYoUIsJMQERuME31Bb50G5zC%2FEJmOayLgkodSYmpaPSQpNdOc5NgHNn44YT%2FxNi49%2Fof84k6S0Czs0%2FruGw4Yc2lvAIUhdbe2U1sRRFKmrsRms1D62ifxoTiCcWGU%2BN7mAQWi3C7yGZgP3FMcg11CamYXb0bMbcZVLjczjVpqhNoTP0b3ifj2uvXy%2FkUQ2yx9MhyAKIEXB2tce1cFREP8ePeOxQBUYE47ObpUcdf12pDcV%2BEibgLcnkXNcF2hX4mwsdEozEAd7EJdNHSpf5jC7Va79Y%2FyIOiOQjbW22VlSTc%2BSV%2FUOy0vEYPiNtF3SuWDKpa7KLsDBAKAsjrGoD9tPpLZrj2RKU%2B4W5KWe8EWFY4uvJI%2FWhbQciuZuH328yDJsfSfT32Wy56tK0DZU1L8ZQQBQo7OurVCi0Y8yf%2FF0lu7m5aZfizrrFvBZtw3NV61NNXSEfDjhtjkbnK%2Fw5yfaGNao0UgYLUXS26ozCR0p7EBjqkAVThJ9QQ7Unkrl49W3e%2BI6z17DgMBM8JKY4wlytK%2Fx9hZWDCcibgfLZVJpl7OEqVgyZVvZ8c%2F5TmkFRta4oXqBjGZyZ52ElV%2FCBI3T5SWAUdLJJumJQJ5vrZOpsL3n7WIqMGkCPwxYhlf%2F7yz1EJz92O%2BgvTLa3WxW3WN%2B%2Fpqbe%2B3yJ4mdofKkhflCUjAysIx%2B3fTn54EIFjZpKL1GbAzsLjopuQ&X-Amz-Signature=a90f1ef71963308cb2522214c2bc5145208908c57da014f8f489207c6d9e389f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXGK6DF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCGRmZyCwv8N6N%2Fid2trYGe92vlKYo%2F2A3sMmNq7n0zuwIhALvHdgq60idYZkAZTJlJ0EXqMeku5xwarknOjW6oaJmwKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGx4OMQU%2F4Rv80bVEq3AN5VoCo8DwYxn7vWjkgetNFExEv5N0g7qxQs5iPWXTOu4YlH%2B7voOnfi%2B5DCY3DGFVA263VQWOdvTLDI9Do9f%2F0vOSRQZtsQLJdr01cw%2Feaz%2B%2F6DjvcAel3nAvknDyDaKMX%2BofJtWmWlVEAI0yoknz%2FhYoUIsJMQERuME31Bb50G5zC%2FEJmOayLgkodSYmpaPSQpNdOc5NgHNn44YT%2FxNi49%2Fof84k6S0Czs0%2FruGw4Yc2lvAIUhdbe2U1sRRFKmrsRms1D62ifxoTiCcWGU%2BN7mAQWi3C7yGZgP3FMcg11CamYXb0bMbcZVLjczjVpqhNoTP0b3ifj2uvXy%2FkUQ2yx9MhyAKIEXB2tce1cFREP8ePeOxQBUYE47ObpUcdf12pDcV%2BEibgLcnkXNcF2hX4mwsdEozEAd7EJdNHSpf5jC7Va79Y%2FyIOiOQjbW22VlSTc%2BSV%2FUOy0vEYPiNtF3SuWDKpa7KLsDBAKAsjrGoD9tPpLZrj2RKU%2B4W5KWe8EWFY4uvJI%2FWhbQciuZuH328yDJsfSfT32Wy56tK0DZU1L8ZQQBQo7OurVCi0Y8yf%2FF0lu7m5aZfizrrFvBZtw3NV61NNXSEfDjhtjkbnK%2Fw5yfaGNao0UgYLUXS26ozCR0p7EBjqkAVThJ9QQ7Unkrl49W3e%2BI6z17DgMBM8JKY4wlytK%2Fx9hZWDCcibgfLZVJpl7OEqVgyZVvZ8c%2F5TmkFRta4oXqBjGZyZ52ElV%2FCBI3T5SWAUdLJJumJQJ5vrZOpsL3n7WIqMGkCPwxYhlf%2F7yz1EJz92O%2BgvTLa3WxW3WN%2B%2Fpqbe%2B3yJ4mdofKkhflCUjAysIx%2B3fTn54EIFjZpKL1GbAzsLjopuQ&X-Amz-Signature=e997a0d00f63eb5cebddfdd1defde0b5815ac8dbd61fbc807b86c5ce80ab8e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
