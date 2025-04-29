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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BQEC7O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8wrf3sRttU4K4guUFpRK81tpfyKQ2S09cyZmRGC3XkAiBLS4%2BAMKDKpdi1rp%2Fqodu4jeAgDvClZnD10A0h3%2FA%2BbSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1TXTYUeg%2FSmBhhppKtwDWEgmWC7Zd3LXffQvtQvxBesvynIVuEr8w16YCt5lQwjb7XeIK0TmulkR7qpl%2Fk7%2FU3EqHFKf%2BpTPnflZhN8AEGMQD6%2BGCXd8NjhunvT1rWIUu49SbnCcbB39ec0XTk5CB7XoKrCR72LUsc1f7fu3RhHY0D%2BRFhyrUI9pfNru2otwyb%2B%2Fl31v4nMjTcIWVDeXSSnO9vq%2FlV6if8q8xLZEPcSGtYWIliA74AM4RpL4eSsJqUQhjzOqW7QMcjCZqB3R0%2BckLDRdma99lg%2BGpUP6h0yZ9wW6zEGiv%2BHwDZzRI8jdRLro%2FPWmBZzxfxmPx9zu7trcWXNtELX9j7%2FTzStY6jY7avVqXpkMPYj6d2683OJjPFUWUHzGtlFWC%2BYegRclp7mhNubo0MvZ68BlvR88jkV98G3QZWKtNfSQCvg7Xh3ye2vyoZVeMxRJwOBHSHGTwZweQbT1nHXYE37YVCzIqH6uG2K9b7jB78UYPW%2FS9FxxU5vOdFItH5xhyTx74mGXyZwNB4MypOx7k6C8SObfVAYsLWvRLkGcNg6314l8fhHyUTgpkpEUGkDXHigMASoHkyXZW%2BD1aGrMo1%2BfdsPisegK72VSrnRSYIdwegpyaPuDVuXneLj2mWfw7EkwiIzBwAY6pgFv5t%2BTBj06iUIwhVDrSih3xLwhAuvx9%2F6yQYsi6ocJ0aNGSonveG3ZQIASapQdf0iLAt%2BJQNFcphJ66eH0yPbLELLz6byYz5JcU6oF%2FnxaG4JECZZfZ2JzbrLtgNxulNkdmksolFmTS1Bt4V1H1%2Fn24Rf1U15cXd1t8EHwV4ZhOjwBqZrHWUxQrYXaXhMXtqgOEqZQsOp2f%2BiOVBxLyVyT%2F2QN6tu3&X-Amz-Signature=7070e4d01c13a912087db44d89aa0d907ec9cec104a5b6da79ceaea1ad85a987&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BQEC7O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8wrf3sRttU4K4guUFpRK81tpfyKQ2S09cyZmRGC3XkAiBLS4%2BAMKDKpdi1rp%2Fqodu4jeAgDvClZnD10A0h3%2FA%2BbSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1TXTYUeg%2FSmBhhppKtwDWEgmWC7Zd3LXffQvtQvxBesvynIVuEr8w16YCt5lQwjb7XeIK0TmulkR7qpl%2Fk7%2FU3EqHFKf%2BpTPnflZhN8AEGMQD6%2BGCXd8NjhunvT1rWIUu49SbnCcbB39ec0XTk5CB7XoKrCR72LUsc1f7fu3RhHY0D%2BRFhyrUI9pfNru2otwyb%2B%2Fl31v4nMjTcIWVDeXSSnO9vq%2FlV6if8q8xLZEPcSGtYWIliA74AM4RpL4eSsJqUQhjzOqW7QMcjCZqB3R0%2BckLDRdma99lg%2BGpUP6h0yZ9wW6zEGiv%2BHwDZzRI8jdRLro%2FPWmBZzxfxmPx9zu7trcWXNtELX9j7%2FTzStY6jY7avVqXpkMPYj6d2683OJjPFUWUHzGtlFWC%2BYegRclp7mhNubo0MvZ68BlvR88jkV98G3QZWKtNfSQCvg7Xh3ye2vyoZVeMxRJwOBHSHGTwZweQbT1nHXYE37YVCzIqH6uG2K9b7jB78UYPW%2FS9FxxU5vOdFItH5xhyTx74mGXyZwNB4MypOx7k6C8SObfVAYsLWvRLkGcNg6314l8fhHyUTgpkpEUGkDXHigMASoHkyXZW%2BD1aGrMo1%2BfdsPisegK72VSrnRSYIdwegpyaPuDVuXneLj2mWfw7EkwiIzBwAY6pgFv5t%2BTBj06iUIwhVDrSih3xLwhAuvx9%2F6yQYsi6ocJ0aNGSonveG3ZQIASapQdf0iLAt%2BJQNFcphJ66eH0yPbLELLz6byYz5JcU6oF%2FnxaG4JECZZfZ2JzbrLtgNxulNkdmksolFmTS1Bt4V1H1%2Fn24Rf1U15cXd1t8EHwV4ZhOjwBqZrHWUxQrYXaXhMXtqgOEqZQsOp2f%2BiOVBxLyVyT%2F2QN6tu3&X-Amz-Signature=643ca7545dbfa0b64b1d686469f581ed795e901b7673bc6fafe303e6aa4247eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
