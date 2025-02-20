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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625G5BNAT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7SnAQ4GX8QkgUIDFITNekxfGVmY4KqdzzIkKdeEatGAIhALP5PsOm12eYNc9yX7FLtS2rulvbKpzIWtwidSO%2F1ZWVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqCboZWO82IMFOMGYq3APeD6%2FCVcKLhnOfAnzJyl%2FTKDdswTM0qaLKfmwrePCPvxNuR9Oz4jV%2Fw5Y1f91dDQX6rTLIRk9TqU2mvo961pooYo7sXNAxBuN7bmWIt%2Bcr52J%2B3E7W%2BSlsPQ4vtqRRcYwnot5V0rqRgGyQLwTnTRE8coxupB7tF%2FTBazo7iHrPcfJ29T6%2BryRZn9nKB%2B93eoeqhCmckj8%2BswtWT8XnW1ObmXrE11GJZgGVXsktoumovtSGxI11Gx2hIPlN6VdlkpfSf6sRJkdTJ9Sizs0dygmTZHI8ChLd50PIgyDEC%2F%2FTL24vnZuhyjNd0icC21weB%2FijacaKPiS7bV7%2Feka8b97%2B6nuAsPN8hITWP8HtlDGT%2BMTV2EByamh9E6zyhhFQFv%2Fj%2FNnuCiyJejEDHVhvYujGfyC8flUomKHq2Ak27prVBq9HJPzjiDU6bDcehV00To7gcl8ArgJSrRzUyPtSDj%2FuXISesGHakg2h0TMe3sGpZxQISzJMdCGi34RzAnDZnqDxLo65G2obYiMwkM4%2Fr5vjIsYgPp1TzXYTBkoYzCKjx9bPJh2uHXjFz7kxN6DZreccUpg33bMS4AkXfpHkuz2D%2Bc3Lwd0yUF4cCrTWTq4Bcuekw%2BUIttmfZ%2FDvnTDCld29BjqkAbPzFIl6mphYH31pPWDSfySYQbfKvtQi1pRS8q3K2lSzUC7UQX%2BQjNTCgWNdlAv8W8%2F0bWAd5F8sT0Urh0KxaCkd5Tr7a9qG0FNhkyJ8YcSSa1kCWZ5ovbRhCEjKYLuQMbdPAgNOvtdQGTrjOPngV8xaVojxmSxXGlPMSdCTvyZ1%2F2IoynPNu3qqWKSggG0R7tw3jb%2FmCxTy8pQ0dNByjqtK0Go6&X-Amz-Signature=e0da750ca592d37502657860478228642521755190304ee2e64c83a7017b224a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625G5BNAT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7SnAQ4GX8QkgUIDFITNekxfGVmY4KqdzzIkKdeEatGAIhALP5PsOm12eYNc9yX7FLtS2rulvbKpzIWtwidSO%2F1ZWVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqCboZWO82IMFOMGYq3APeD6%2FCVcKLhnOfAnzJyl%2FTKDdswTM0qaLKfmwrePCPvxNuR9Oz4jV%2Fw5Y1f91dDQX6rTLIRk9TqU2mvo961pooYo7sXNAxBuN7bmWIt%2Bcr52J%2B3E7W%2BSlsPQ4vtqRRcYwnot5V0rqRgGyQLwTnTRE8coxupB7tF%2FTBazo7iHrPcfJ29T6%2BryRZn9nKB%2B93eoeqhCmckj8%2BswtWT8XnW1ObmXrE11GJZgGVXsktoumovtSGxI11Gx2hIPlN6VdlkpfSf6sRJkdTJ9Sizs0dygmTZHI8ChLd50PIgyDEC%2F%2FTL24vnZuhyjNd0icC21weB%2FijacaKPiS7bV7%2Feka8b97%2B6nuAsPN8hITWP8HtlDGT%2BMTV2EByamh9E6zyhhFQFv%2Fj%2FNnuCiyJejEDHVhvYujGfyC8flUomKHq2Ak27prVBq9HJPzjiDU6bDcehV00To7gcl8ArgJSrRzUyPtSDj%2FuXISesGHakg2h0TMe3sGpZxQISzJMdCGi34RzAnDZnqDxLo65G2obYiMwkM4%2Fr5vjIsYgPp1TzXYTBkoYzCKjx9bPJh2uHXjFz7kxN6DZreccUpg33bMS4AkXfpHkuz2D%2Bc3Lwd0yUF4cCrTWTq4Bcuekw%2BUIttmfZ%2FDvnTDCld29BjqkAbPzFIl6mphYH31pPWDSfySYQbfKvtQi1pRS8q3K2lSzUC7UQX%2BQjNTCgWNdlAv8W8%2F0bWAd5F8sT0Urh0KxaCkd5Tr7a9qG0FNhkyJ8YcSSa1kCWZ5ovbRhCEjKYLuQMbdPAgNOvtdQGTrjOPngV8xaVojxmSxXGlPMSdCTvyZ1%2F2IoynPNu3qqWKSggG0R7tw3jb%2FmCxTy8pQ0dNByjqtK0Go6&X-Amz-Signature=eaf4b80af043a8376d465b6d364c2b072ddc41a31a75a5cd02ddf61a4f83eeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
