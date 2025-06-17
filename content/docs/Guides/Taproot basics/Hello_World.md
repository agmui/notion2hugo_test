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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXXVNQ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBAGoWN66eeYhhwaDfAaZXC2ksKj%2Bq%2FcveQIfwyoQTGwIgR6zH8MzMkAJOovRsDS6qrm%2FwpMWlpzmZPWj%2BGScanJcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzQuy1yDZ8873O02CrcA59ZQ5BfySlopaHeMyxGXUrK07CsvcrpgQrzecE30FKAzgcu9FAm8J5yMDhWqsuqq6OgRmJTL%2BCCdNLJGIDDSexFHweMbt10TedroL2TBrhv0jZ9XYE0P21ROq40MiufcTWVsFSa4Z%2BqEKd3iXDVAVY%2BDjVlcrKKnqfuWJbrK7ONMsM7ga6iuV%2BdVj2HffvG%2FgvniTtYhvuBzBE7W1mg%2FYZexn%2BmK%2FM6qg3KaqnzaizXsGk6WsA4vTW9v0pEx%2BUiz75W0C%2FKyB38iZYz0tUvt93LeIWOfNfSRt01Gu6K7bm29uxslx3%2FtThclW7IJFpCyYH4dxWPZuhRcKhH4VWn3pJkGpjE4cN7KY6cHB4Gq3tSRI%2B9MsfVCnOdbY4S9gipYscdsmSXvAuyLMClva3G49VudO0H9YXDA7inEoFAlZOVbgOiBE0apKD3yC12jUikSXZhSj5TFaa1CFnnQsxxd3BiHxPdBvzWA%2FZCUq3QfOamn6sQ6BJCAz4skz4qaJ4M1zF3xGb9jgKrGmCxDfxWhzfL54iae3wJ35L6sYBUXqHpy8YC6jFq0IfspP56p8dvHmfz55VUsPXgdeT66St5esh%2Fb2h705j%2BpyR1KtC5mofhCn%2B8zGEjfCaAZS8GMPKmxcIGOqUBqnNFqFNYdndQaou%2BTrAI5uBfABIo5FRAR0V5d2KCyTSgXmn%2F1rKYIiIQdn8ZSOjxp96YpGx7URXTjj6XYs%2F4qKqCi8h6%2BX7NopA9E5n40Qkf1hlhwXbyUlK7uFFRlmwT1up9YoPD94z3ZlstFZUcUt7zbXzwnhdzMENWzU5yMLrBOIDoDlouXenm3dH7R51QhkAFh59F6XZeIjYtp0ogJKui3tyu&X-Amz-Signature=5aaecec2bbc4bd53efbf92f8093e6bbd5539205a8bd82ae86215448f1b827495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXXVNQ3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBAGoWN66eeYhhwaDfAaZXC2ksKj%2Bq%2FcveQIfwyoQTGwIgR6zH8MzMkAJOovRsDS6qrm%2FwpMWlpzmZPWj%2BGScanJcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzQuy1yDZ8873O02CrcA59ZQ5BfySlopaHeMyxGXUrK07CsvcrpgQrzecE30FKAzgcu9FAm8J5yMDhWqsuqq6OgRmJTL%2BCCdNLJGIDDSexFHweMbt10TedroL2TBrhv0jZ9XYE0P21ROq40MiufcTWVsFSa4Z%2BqEKd3iXDVAVY%2BDjVlcrKKnqfuWJbrK7ONMsM7ga6iuV%2BdVj2HffvG%2FgvniTtYhvuBzBE7W1mg%2FYZexn%2BmK%2FM6qg3KaqnzaizXsGk6WsA4vTW9v0pEx%2BUiz75W0C%2FKyB38iZYz0tUvt93LeIWOfNfSRt01Gu6K7bm29uxslx3%2FtThclW7IJFpCyYH4dxWPZuhRcKhH4VWn3pJkGpjE4cN7KY6cHB4Gq3tSRI%2B9MsfVCnOdbY4S9gipYscdsmSXvAuyLMClva3G49VudO0H9YXDA7inEoFAlZOVbgOiBE0apKD3yC12jUikSXZhSj5TFaa1CFnnQsxxd3BiHxPdBvzWA%2FZCUq3QfOamn6sQ6BJCAz4skz4qaJ4M1zF3xGb9jgKrGmCxDfxWhzfL54iae3wJ35L6sYBUXqHpy8YC6jFq0IfspP56p8dvHmfz55VUsPXgdeT66St5esh%2Fb2h705j%2BpyR1KtC5mofhCn%2B8zGEjfCaAZS8GMPKmxcIGOqUBqnNFqFNYdndQaou%2BTrAI5uBfABIo5FRAR0V5d2KCyTSgXmn%2F1rKYIiIQdn8ZSOjxp96YpGx7URXTjj6XYs%2F4qKqCi8h6%2BX7NopA9E5n40Qkf1hlhwXbyUlK7uFFRlmwT1up9YoPD94z3ZlstFZUcUt7zbXzwnhdzMENWzU5yMLrBOIDoDlouXenm3dH7R51QhkAFh59F6XZeIjYtp0ogJKui3tyu&X-Amz-Signature=ee4d8b8c5d2eeb36b9c7a8b720c8cf0d9a4ff5fe6d32cb303ca6779ff179ad58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
