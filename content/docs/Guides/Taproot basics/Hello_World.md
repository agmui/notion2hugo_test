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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGRLRZ7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ7g%2F6m5kdgKi4bkOa0XBe1%2FKcM6hVVUaLpyjDEzpVvAiEA9iXeRo3eRK34YeBRrRACT%2B4nmtd09dhLSz47uEghr%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAgjC0PnCr8fbHt%2FzircAxxJWftXNmspLOE5h2urj5r%2FVw8QsOGXfnIgtDCQYDd5Cr396ExdirFD5i7EGhHCRtpx6cAGNTI%2Fbexh7i%2FQGxhSPB%2FvsUMyznC1AnxkqUSXZJklYki56%2FuaBXO8AKb9T3zVELJtIDLaFoMa%2BPIr3eC7HwcwSsNXWU5lYdFeSwQZjR8YWYmCm59oxRDaHSGiAmPqxRiddekpnBaatM4ZkYcXq9pN16SZRr%2FxWOchK0MO3ZvYPv8fdZvXVO6XXqejCblfQggQWNj93N55nKcsEHqeCJ03JbE7FXitYGDb7HRRZWBNtG9EsMTBEYXJYAv1JzQhX2qL61zpPh5P1VV0od0EsqrjJkhBPPZFYj95%2BWe2U2Zq8%2FVvmTl1NDz7S68zOZEc%2FWqNHBTTBGYgbBBGSTeHiCflWCwtgByRl5BFeFuF6iPDpQcYKMSrGIy6kp4HKdXrdcgwE8EGf7pWNa7ok6hkudPvZ%2F8mTPjNOTGkXcsLHrJV9fpyt%2Faas%2B3LZqK3MOsIL9EGgoO7Phih2vjq0tlZ9czeVTI8wu7ipyWVMEJSGuYXGHkAQ7ybsqxXJkDR0z6lEDn0Zxq%2FbfhkM4oWdnM8tGQbQ2tRtM0d4qS5RrwtgYWnUYK0iLtvpQpBMLbHg8AGOqUBgWNRuFUDoQU%2BdFdY5Wdk3uAOzII6F%2FuEHN%2BsgXL1dFrxAyA0uEI67xe5SxdmKNfIMF4aNCTDFF8ihVBUDQ0bAEG0WEPuTYMIMvrlXz4I7xw7EJVP9O507JAaZMvPwuLtV50ibW8JhfF1aIm4qXzsuCvqKmoM3HdfyPNjrbT8lbOiqWGtilVsUYj3h5mx8K3zrso2fzxEZ383AvcfqyrZwATrqA3z&X-Amz-Signature=dc05a91a4b941928a590fd86267b3fdf743f11740a81d147cb5ae881e20f9b22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGRLRZ7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ7g%2F6m5kdgKi4bkOa0XBe1%2FKcM6hVVUaLpyjDEzpVvAiEA9iXeRo3eRK34YeBRrRACT%2B4nmtd09dhLSz47uEghr%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAgjC0PnCr8fbHt%2FzircAxxJWftXNmspLOE5h2urj5r%2FVw8QsOGXfnIgtDCQYDd5Cr396ExdirFD5i7EGhHCRtpx6cAGNTI%2Fbexh7i%2FQGxhSPB%2FvsUMyznC1AnxkqUSXZJklYki56%2FuaBXO8AKb9T3zVELJtIDLaFoMa%2BPIr3eC7HwcwSsNXWU5lYdFeSwQZjR8YWYmCm59oxRDaHSGiAmPqxRiddekpnBaatM4ZkYcXq9pN16SZRr%2FxWOchK0MO3ZvYPv8fdZvXVO6XXqejCblfQggQWNj93N55nKcsEHqeCJ03JbE7FXitYGDb7HRRZWBNtG9EsMTBEYXJYAv1JzQhX2qL61zpPh5P1VV0od0EsqrjJkhBPPZFYj95%2BWe2U2Zq8%2FVvmTl1NDz7S68zOZEc%2FWqNHBTTBGYgbBBGSTeHiCflWCwtgByRl5BFeFuF6iPDpQcYKMSrGIy6kp4HKdXrdcgwE8EGf7pWNa7ok6hkudPvZ%2F8mTPjNOTGkXcsLHrJV9fpyt%2Faas%2B3LZqK3MOsIL9EGgoO7Phih2vjq0tlZ9czeVTI8wu7ipyWVMEJSGuYXGHkAQ7ybsqxXJkDR0z6lEDn0Zxq%2FbfhkM4oWdnM8tGQbQ2tRtM0d4qS5RrwtgYWnUYK0iLtvpQpBMLbHg8AGOqUBgWNRuFUDoQU%2BdFdY5Wdk3uAOzII6F%2FuEHN%2BsgXL1dFrxAyA0uEI67xe5SxdmKNfIMF4aNCTDFF8ihVBUDQ0bAEG0WEPuTYMIMvrlXz4I7xw7EJVP9O507JAaZMvPwuLtV50ibW8JhfF1aIm4qXzsuCvqKmoM3HdfyPNjrbT8lbOiqWGtilVsUYj3h5mx8K3zrso2fzxEZ383AvcfqyrZwATrqA3z&X-Amz-Signature=6045a2d922a47de90e31e0baabbd96aee4b53bd217bac4ddb6cfa8b94f404d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
