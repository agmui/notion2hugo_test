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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOCXNET%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTBdr%2FoUBswxvNMs1GBOvlf62HpUmCyWrvHPglr564MAiBDsbhMVG2XcIOXHKmGY3GTWKY78BoYHh%2FzhHFqof%2F67SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkolzvgiaYoRUN5VEKtwDfqq8%2BHI0Qq85fnwnHtovqqLFMos57xXR0mQ5TzOSUEQlwzUme3d3U9kZO16mjUjaHBdD51AoZCluIjUnUGNX5xcNz9iJ4%2FBEJ1decoaB7jQdB7HkJewkQjNLOoMqdAbghKWAnJ6OFP%2FNIAvrDwtviM%2BHMbCbfYknyRwfLCHLwE0CLC48Yt%2F1W%2BjZHekEX4L0A%2FfU6de1XiS9Iok%2BRaBM6iVARrnWOdsVwLO7s2SJc3e%2FAehEqECMVMHyCVwkgw8ugG3UJVgNwuzGFcHXLZBfy57%2F%2Bk7BG7gUTE7zXTufJfdM7ojYnlMSwrK4BLD9wMzjKWJ%2B3u1N0eSBgUx75kCHxQiGUfjdwyweL7x%2B%2FbojT6WEe5YzuAsiTtftfCElXhfWT1qDQD4%2FCXzgNKhQv0Y6KZcHAc1hPgvg7t6jFaU091ilVxvWeAoUkDYw8ZKACzqMJCMCCv24IcED6S8l2B7sKJ2llpCWLPW5QAsApJu1f%2FmLy46hf3%2Fu4TlxQIFT4aul2VhPzEdOwfRuoR462%2FNkIELQraUg2ULMkvSOztoTOfrYSMHVSgXHFksLwaeCt1uDxRF7b%2BONtk0iEa88zvAUH1y4ntKIhStjQ7gmRDnjru5%2FcxZlZFcJt3oCIvwwuLGswQY6pgEazv8Hky4qhTZOVakuIZmE6b%2BHzcF3CSiBdbdE7P70YwerKFlq5ubOIPBI7%2FjZ9DzLCrBQg1ZTqDakGstd76EC2s50LRUzrA8GUXXzkeTO8GhEHAGZo1MfJYRdv7DfhiO4eTKtXNng2YT54cwto%2BVeX1gRgSBvtOCcA8SSnsfC1JDdGbheWhwafGSKStzVk5HBw4sdOv2vLjyQFo7DN%2F0wr9dSBoBm&X-Amz-Signature=bb53dc5f56b686a3d2ba316f3ed006ea6a14faaedba65c75d066987c7ae91a66&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UOCXNET%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTBdr%2FoUBswxvNMs1GBOvlf62HpUmCyWrvHPglr564MAiBDsbhMVG2XcIOXHKmGY3GTWKY78BoYHh%2FzhHFqof%2F67SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkolzvgiaYoRUN5VEKtwDfqq8%2BHI0Qq85fnwnHtovqqLFMos57xXR0mQ5TzOSUEQlwzUme3d3U9kZO16mjUjaHBdD51AoZCluIjUnUGNX5xcNz9iJ4%2FBEJ1decoaB7jQdB7HkJewkQjNLOoMqdAbghKWAnJ6OFP%2FNIAvrDwtviM%2BHMbCbfYknyRwfLCHLwE0CLC48Yt%2F1W%2BjZHekEX4L0A%2FfU6de1XiS9Iok%2BRaBM6iVARrnWOdsVwLO7s2SJc3e%2FAehEqECMVMHyCVwkgw8ugG3UJVgNwuzGFcHXLZBfy57%2F%2Bk7BG7gUTE7zXTufJfdM7ojYnlMSwrK4BLD9wMzjKWJ%2B3u1N0eSBgUx75kCHxQiGUfjdwyweL7x%2B%2FbojT6WEe5YzuAsiTtftfCElXhfWT1qDQD4%2FCXzgNKhQv0Y6KZcHAc1hPgvg7t6jFaU091ilVxvWeAoUkDYw8ZKACzqMJCMCCv24IcED6S8l2B7sKJ2llpCWLPW5QAsApJu1f%2FmLy46hf3%2Fu4TlxQIFT4aul2VhPzEdOwfRuoR462%2FNkIELQraUg2ULMkvSOztoTOfrYSMHVSgXHFksLwaeCt1uDxRF7b%2BONtk0iEa88zvAUH1y4ntKIhStjQ7gmRDnjru5%2FcxZlZFcJt3oCIvwwuLGswQY6pgEazv8Hky4qhTZOVakuIZmE6b%2BHzcF3CSiBdbdE7P70YwerKFlq5ubOIPBI7%2FjZ9DzLCrBQg1ZTqDakGstd76EC2s50LRUzrA8GUXXzkeTO8GhEHAGZo1MfJYRdv7DfhiO4eTKtXNng2YT54cwto%2BVeX1gRgSBvtOCcA8SSnsfC1JDdGbheWhwafGSKStzVk5HBw4sdOv2vLjyQFo7DN%2F0wr9dSBoBm&X-Amz-Signature=315dddc028bc8ef9d758919e92d86bc0346bb049057263d9f69b00212216f940&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
