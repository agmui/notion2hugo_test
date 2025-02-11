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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6NQIYR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwxguHsHZ%2BYRXr%2BwJ9ajliOyD%2BKRPVY%2BmXmxdpqtVAqAiBnZedRCpTF5EyQVtha2sXV4Gqj3g01tSiuGYWXqiHCXyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbWYqhwLXJBqCqNJKtwDHO8fUiokOEXTVzLi9pw2VKNrHfppGUfmIvafN1o%2BXQy2HHa124K6CHQDETLt7Uu%2FqdMIj2x2QOdt7WdSl7y1Qs%2BnucSqmUaLC%2F0N0qizIHrV3B2ibXxv96lXUC2CFAIrxYuBEYl5dLhTh7XzWtnXs4PpgNQNpZI7MTvatoGdW1V%2FQghLOgW%2BCjon2cA8W5CRulB49FvuwlSuQNaCq2%2BXPLCFcsbx4eYtTbgThew1rwpKmhigBmNQRgb32I5q%2B2okIiNjmKOkEpKoI1MkzDRmsyUhx%2FeQG5y87ki8cNawXuTxPZVDgjJ8KyVF6aFkxBcltucbLTywL8GQwB8xZgvTWaceTiqCdbp2zfyg%2BSh%2BLdUzDtfJSudx6FV7wVPkPPaawHIwxb%2Fy08djYF%2FyDhCp4BEhLftiLr26eYTqUCj5cyc7Hp%2BdLdx8lfuRDLeXjth3Ic1wDd3fCf063WfieWYwuL3f0hOJueqMCNYvTzcMYe3JeHh3wR3mG511YEOEZ0yfGFXkXzcRqWOFMdUGiSatydlShRKIhZBI4AyOOMO1Sgyj1d7RLWGvj7AHCXpGrRPTdrnSQ82sRdddBfor2WgpCwHBeEaPdc756AJr8g6vyPKnlN9HRNRGMWYRumMwy8muvQY6pgGGpf2m9xrXfFJ3vQTx8tQbwsONQrXtxUSYmE30tpOzDXyEr8b%2FG9fZa%2FzorpTj1%2FJq%2FAJ6t%2FcSKQH3aZF1tLRo%2BA%2B251MGm2WDeNG3nTqXxyAx2yimJm7wcHvpz2gygm8f0CvlyL9Rvwr9kQ%2FHotz8Z4s4yW%2BMxsbYVCmsjhAMeco96CMmsQM1n6sqRj1v83goYp0msLPfoyAkkVXYwHGfSm7onPn9&X-Amz-Signature=4c9aadbdbdf17f44fd02c2f2194d3749903bd93b112814875002d4386b5c47b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6NQIYR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwxguHsHZ%2BYRXr%2BwJ9ajliOyD%2BKRPVY%2BmXmxdpqtVAqAiBnZedRCpTF5EyQVtha2sXV4Gqj3g01tSiuGYWXqiHCXyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbWYqhwLXJBqCqNJKtwDHO8fUiokOEXTVzLi9pw2VKNrHfppGUfmIvafN1o%2BXQy2HHa124K6CHQDETLt7Uu%2FqdMIj2x2QOdt7WdSl7y1Qs%2BnucSqmUaLC%2F0N0qizIHrV3B2ibXxv96lXUC2CFAIrxYuBEYl5dLhTh7XzWtnXs4PpgNQNpZI7MTvatoGdW1V%2FQghLOgW%2BCjon2cA8W5CRulB49FvuwlSuQNaCq2%2BXPLCFcsbx4eYtTbgThew1rwpKmhigBmNQRgb32I5q%2B2okIiNjmKOkEpKoI1MkzDRmsyUhx%2FeQG5y87ki8cNawXuTxPZVDgjJ8KyVF6aFkxBcltucbLTywL8GQwB8xZgvTWaceTiqCdbp2zfyg%2BSh%2BLdUzDtfJSudx6FV7wVPkPPaawHIwxb%2Fy08djYF%2FyDhCp4BEhLftiLr26eYTqUCj5cyc7Hp%2BdLdx8lfuRDLeXjth3Ic1wDd3fCf063WfieWYwuL3f0hOJueqMCNYvTzcMYe3JeHh3wR3mG511YEOEZ0yfGFXkXzcRqWOFMdUGiSatydlShRKIhZBI4AyOOMO1Sgyj1d7RLWGvj7AHCXpGrRPTdrnSQ82sRdddBfor2WgpCwHBeEaPdc756AJr8g6vyPKnlN9HRNRGMWYRumMwy8muvQY6pgGGpf2m9xrXfFJ3vQTx8tQbwsONQrXtxUSYmE30tpOzDXyEr8b%2FG9fZa%2FzorpTj1%2FJq%2FAJ6t%2FcSKQH3aZF1tLRo%2BA%2B251MGm2WDeNG3nTqXxyAx2yimJm7wcHvpz2gygm8f0CvlyL9Rvwr9kQ%2FHotz8Z4s4yW%2BMxsbYVCmsjhAMeco96CMmsQM1n6sqRj1v83goYp0msLPfoyAkkVXYwHGfSm7onPn9&X-Amz-Signature=ebb3aa15b2c0b934d83e5b453c40235fea0703a1a11e8d6242240b0ed3781d41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
