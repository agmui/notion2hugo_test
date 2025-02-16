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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ3OSC2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH0k8FUkBHnIxqOSJaGgRF%2Fto9FN0hS6AT%2BQ0IRFwM%2BQIhAPN4sM8qCEq1872lTgSLAKnP1I9AoNVMTXkEFPhseUHXKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvZ7dXj1nEFXS5koYq3APNkJkPvZ8j31USkanHDvGBBZ3hb7ibskZ9C5xXTv2BM5ZYcU72HPFa6wavgkC8DL5yRjWeJ3Q3kfuci2QQAIpyA8LQCO0BTKGKL1vAfh%2Fy%2B%2BXXcOoBpSkcNviKERHG4luB3eNj1rBgeqIV0xUCk5M74vMSa6pOuXAECUaOaMarIzcvbaONxK8xTAlmZvVfAdBL%2BQ6jnI2FCRy236mLZkYb4w6b%2FyOk7nXHsA9uZdy8zFZceIVBDPDprjth9PtosCyvlNJIJCKs0%2FWCo3Awo5PO70oKncOaTAvii6tO3mCpiTARlciRhxS%2BGXgzh5d2v4IbdwW2o65btawdl7%2FnczdIj%2FLDB1wY1WFjNOs8LIdT4o0daC5of7M9dgKyZWH99rEuCXZfVpos7gccyMu7QvAxUBQCwMO0YqVWEkoEY%2BpaAuVAXb4kv6I7%2BjudHz%2FNvg1UTObVn0qKidPPNYRY0C5I%2BlxR7MtHVw9Onp5O6FIIj1i2MqbWSrijQ%2FS6oxTIQr9DycRvzQJuDhHKEVaTbra470w%2FyEZcFuwlRZCl%2Fg%2B5GBE%2BrXZ%2FyrAHu0IY7ugFtcLFBk4PkBL%2BgxH2P9BVudlex1E%2Brht8kuq6mda0oEAPhSx%2FDjtld02aVYLbhjCypMm9BjqkAQX57RKi7OMKNmmJiqJjNHLxGpZ56dBAwQPVwtWNr33Oaelyxfg8Sg2wNIr0AqLrMwrq1KtkeM6aRkeOQSI%2Fjg9dLNTpK7JmcxwLTml9QiXz7T72HLV2Df6GNxmS4tGS2qMcCOtc5148kbz9W3eZnjpvWyHaZguCxZt6keOr%2BUeUiWDyeXU1EUpZY1qf0CcBAWmf7yjnV%2BRcWRgV1RYP26lqO4U9&X-Amz-Signature=38dc5f186fb4815f1224a003972eb213a3da6485abefbbe13f21aab2789dede2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ3OSC2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH0k8FUkBHnIxqOSJaGgRF%2Fto9FN0hS6AT%2BQ0IRFwM%2BQIhAPN4sM8qCEq1872lTgSLAKnP1I9AoNVMTXkEFPhseUHXKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvZ7dXj1nEFXS5koYq3APNkJkPvZ8j31USkanHDvGBBZ3hb7ibskZ9C5xXTv2BM5ZYcU72HPFa6wavgkC8DL5yRjWeJ3Q3kfuci2QQAIpyA8LQCO0BTKGKL1vAfh%2Fy%2B%2BXXcOoBpSkcNviKERHG4luB3eNj1rBgeqIV0xUCk5M74vMSa6pOuXAECUaOaMarIzcvbaONxK8xTAlmZvVfAdBL%2BQ6jnI2FCRy236mLZkYb4w6b%2FyOk7nXHsA9uZdy8zFZceIVBDPDprjth9PtosCyvlNJIJCKs0%2FWCo3Awo5PO70oKncOaTAvii6tO3mCpiTARlciRhxS%2BGXgzh5d2v4IbdwW2o65btawdl7%2FnczdIj%2FLDB1wY1WFjNOs8LIdT4o0daC5of7M9dgKyZWH99rEuCXZfVpos7gccyMu7QvAxUBQCwMO0YqVWEkoEY%2BpaAuVAXb4kv6I7%2BjudHz%2FNvg1UTObVn0qKidPPNYRY0C5I%2BlxR7MtHVw9Onp5O6FIIj1i2MqbWSrijQ%2FS6oxTIQr9DycRvzQJuDhHKEVaTbra470w%2FyEZcFuwlRZCl%2Fg%2B5GBE%2BrXZ%2FyrAHu0IY7ugFtcLFBk4PkBL%2BgxH2P9BVudlex1E%2Brht8kuq6mda0oEAPhSx%2FDjtld02aVYLbhjCypMm9BjqkAQX57RKi7OMKNmmJiqJjNHLxGpZ56dBAwQPVwtWNr33Oaelyxfg8Sg2wNIr0AqLrMwrq1KtkeM6aRkeOQSI%2Fjg9dLNTpK7JmcxwLTml9QiXz7T72HLV2Df6GNxmS4tGS2qMcCOtc5148kbz9W3eZnjpvWyHaZguCxZt6keOr%2BUeUiWDyeXU1EUpZY1qf0CcBAWmf7yjnV%2BRcWRgV1RYP26lqO4U9&X-Amz-Signature=a1266f4b35caf5d83928cfa67cdaf29d18b83320710e8a755472ce79ef03f9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
