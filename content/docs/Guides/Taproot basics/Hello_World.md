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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKY3NAX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMiXYxNLKXhVzHbA6etdVYhJxii6mUOv6mxA6x3tIKaAiAn7n1mqMtWl1ET582nEmTTKULH1qCjjv1Mdj0SDHCP8CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRmFDZKe3AFuHW4AUKtwD%2B%2F3NCJ5OYxXqNF5%2Bmk7YY%2F7alqEb7eN55qX5%2FxUS3GFw%2F1wp3yQUf9ER5BYGBIB1CUUlkrPfQb%2BvK5afO%2Bm8xBY9AmfWPUchJ0%2BG%2BbvC0FkEwMelFOFeWUnhT463yhDjXFN5IPfniWkIlXyFsobKR74e5nslT9V54iy%2Bek4AHJ4CAV8lPjLbDVDDpyrHeTo93IDSlFXxrOXDNVq5yBzkasjyypuEbIINvpKoW8VZV2oaXFaHybHsPw4oicfZWVbu2AO%2BKVJAkIpfkFCOpKHjN2HFT1cZkvpaQL9x4XciJJkfl%2FBY1H8wJeyp9yMUtx8Qxf2AAvlJBQAZEChwtkNgUBFeFH4782AjrwZGMBKP7bnADwooshAevU08Ds8x%2BjFbg0PDnLGpveGi24hEOSr3h8erWPlH%2BV%2BoNALGeYil6Q%2FvcyQpL0YDOpiu%2FVuPjZjxq4OrGyEyeCPPgjVJ6eAETQAyx3B3vWNWaVFz8fCHh0L7HJ6ecMd2DVPMkTjrAaXW0diwO5Gvl%2BfVx8%2F337iPCxx2hAbNK4uuA92mU%2B3fI%2FNAwj8kEjRjNER2%2BUMTVaMAu%2B7N0NFrkImfyJ5OEdE9ZiJMhZVhUTrmJCclieByLlJBXTB79Xhr%2FTqEqyownKrlvQY6pgG%2F4pRMFlEeWc7NZ2SgOnS37hyEls885AyNPxTeseoLgIP6U%2B0Dmk6HsS0Cz80xZidQ99f38Rl31i2Owtb6Bb5WjM%2BCCJnJQtpC%2FRKh9iekdPqS%2FUdizl3qKBFHyIE2258%2ByL0Z3YgMIvTawgvi52dFgpZ7GHub%2Fuz2IP%2FRR0wKV34opfiPxYFC31KUzvgrFvsWCSCozxB4cM0oibUs0Xxouy193rDb&X-Amz-Signature=64a7003fa0fb1c81a69a460c2130fb5c6120d136bbcf20d8e829b6ac46cb8fca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKY3NAX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMiXYxNLKXhVzHbA6etdVYhJxii6mUOv6mxA6x3tIKaAiAn7n1mqMtWl1ET582nEmTTKULH1qCjjv1Mdj0SDHCP8CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRmFDZKe3AFuHW4AUKtwD%2B%2F3NCJ5OYxXqNF5%2Bmk7YY%2F7alqEb7eN55qX5%2FxUS3GFw%2F1wp3yQUf9ER5BYGBIB1CUUlkrPfQb%2BvK5afO%2Bm8xBY9AmfWPUchJ0%2BG%2BbvC0FkEwMelFOFeWUnhT463yhDjXFN5IPfniWkIlXyFsobKR74e5nslT9V54iy%2Bek4AHJ4CAV8lPjLbDVDDpyrHeTo93IDSlFXxrOXDNVq5yBzkasjyypuEbIINvpKoW8VZV2oaXFaHybHsPw4oicfZWVbu2AO%2BKVJAkIpfkFCOpKHjN2HFT1cZkvpaQL9x4XciJJkfl%2FBY1H8wJeyp9yMUtx8Qxf2AAvlJBQAZEChwtkNgUBFeFH4782AjrwZGMBKP7bnADwooshAevU08Ds8x%2BjFbg0PDnLGpveGi24hEOSr3h8erWPlH%2BV%2BoNALGeYil6Q%2FvcyQpL0YDOpiu%2FVuPjZjxq4OrGyEyeCPPgjVJ6eAETQAyx3B3vWNWaVFz8fCHh0L7HJ6ecMd2DVPMkTjrAaXW0diwO5Gvl%2BfVx8%2F337iPCxx2hAbNK4uuA92mU%2B3fI%2FNAwj8kEjRjNER2%2BUMTVaMAu%2B7N0NFrkImfyJ5OEdE9ZiJMhZVhUTrmJCclieByLlJBXTB79Xhr%2FTqEqyownKrlvQY6pgG%2F4pRMFlEeWc7NZ2SgOnS37hyEls885AyNPxTeseoLgIP6U%2B0Dmk6HsS0Cz80xZidQ99f38Rl31i2Owtb6Bb5WjM%2BCCJnJQtpC%2FRKh9iekdPqS%2FUdizl3qKBFHyIE2258%2ByL0Z3YgMIvTawgvi52dFgpZ7GHub%2Fuz2IP%2FRR0wKV34opfiPxYFC31KUzvgrFvsWCSCozxB4cM0oibUs0Xxouy193rDb&X-Amz-Signature=03870cb4e2a7c7875a5f840ec8f3c382b039636e8d68cb48a89932f09e6ea844&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
