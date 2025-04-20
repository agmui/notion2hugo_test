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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOHWIEU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC%2FRXG80Gl%2BTqdqz8xvTb7z3Bx%2FizFhcI91meNHhWbd3gIhAKvAxvV7FFEkMTCArq377Xv3bG%2BIctjpuugMAzhD3fw1KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUBRe0gl4Nsh8G7iUq3AM4gGSmLyfw37ywar8aQxURF4jC9wOQLrVcRL0qTB0kDbb9QwSRdHd3yrgE8lTsRyoYYV%2BI1G9lVvOnRWR0FMfzCyStrkL0V%2BJmEiugKZUzIa5lSwXiHxQxQsCaU7cyjo56ifK5JhYN3%2B%2BkVT10N3BCQY4Mmly52JwYMxmAwqY%2Flrz4RWWT4MSAc81lEemkMjvQc%2BFbrZF44%2F8YlHNJm2zcAR1gvII1o6drDXMRx%2Ba3A56Y4wLehIBQr5HknED%2F5RkfKvW8Hd4ODxV6gbLLFyZTHWZrSyV6NnPqRDY%2B6nrDK63w9DwEE9ae6ntVtBnp%2BZPW7jTVKvLqFw4BgalCITcPmKy4EkfYZcFF4ERQC35qqOpGwBNz2j85EGrRsSA07vbP2%2BOr5dMieA21%2BeAjHzYpCMcIoqECsa5aoAIBh0%2BhhiChv1o3Tm%2B1SZiTfrDysGA6J6PgCIOUSorsoAjbz%2FCLZg%2BfbomvwQLJNFENYmFI0Oj8ryZYUErin0yZwUlry9K0pS2c%2B%2Fh0fnkZMUFExELII8cqMYy%2BeQ33Gu9ODMqZH79KJQCESg81FxFANOg8dQMinnDW7Zq24ODvjfgVWc2o3AkRGzGg5BzFA%2BZ7vXwTlIyU1%2FGm%2BJuHYjIG7DDjypPABjqkAYVGGZOTFoXsk4Wf9eduMGsg0O6CC1rLqwgVS7UN1g1ByXvl8P0oGQk%2FseZaQnA%2FibjZnSTaIIaboDqem7LQgxDtDVzRfjxAl3R5jYhwrCLhxDXc42SIdZkuvmX4MU5f2wiiO865ettJijsyz%2Fp3RY9e3HCNhK16g2YomKPx0eCZeRsH%2BglVs4iM%2BCzAuSjWwBaKNeJR8iDT2OFPY5nm9sgGnbUu&X-Amz-Signature=373466e743dac2c26c8875e48e615e08127c21d2cc63ef4f2878c2668b8a9aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOHWIEU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC%2FRXG80Gl%2BTqdqz8xvTb7z3Bx%2FizFhcI91meNHhWbd3gIhAKvAxvV7FFEkMTCArq377Xv3bG%2BIctjpuugMAzhD3fw1KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUBRe0gl4Nsh8G7iUq3AM4gGSmLyfw37ywar8aQxURF4jC9wOQLrVcRL0qTB0kDbb9QwSRdHd3yrgE8lTsRyoYYV%2BI1G9lVvOnRWR0FMfzCyStrkL0V%2BJmEiugKZUzIa5lSwXiHxQxQsCaU7cyjo56ifK5JhYN3%2B%2BkVT10N3BCQY4Mmly52JwYMxmAwqY%2Flrz4RWWT4MSAc81lEemkMjvQc%2BFbrZF44%2F8YlHNJm2zcAR1gvII1o6drDXMRx%2Ba3A56Y4wLehIBQr5HknED%2F5RkfKvW8Hd4ODxV6gbLLFyZTHWZrSyV6NnPqRDY%2B6nrDK63w9DwEE9ae6ntVtBnp%2BZPW7jTVKvLqFw4BgalCITcPmKy4EkfYZcFF4ERQC35qqOpGwBNz2j85EGrRsSA07vbP2%2BOr5dMieA21%2BeAjHzYpCMcIoqECsa5aoAIBh0%2BhhiChv1o3Tm%2B1SZiTfrDysGA6J6PgCIOUSorsoAjbz%2FCLZg%2BfbomvwQLJNFENYmFI0Oj8ryZYUErin0yZwUlry9K0pS2c%2B%2Fh0fnkZMUFExELII8cqMYy%2BeQ33Gu9ODMqZH79KJQCESg81FxFANOg8dQMinnDW7Zq24ODvjfgVWc2o3AkRGzGg5BzFA%2BZ7vXwTlIyU1%2FGm%2BJuHYjIG7DDjypPABjqkAYVGGZOTFoXsk4Wf9eduMGsg0O6CC1rLqwgVS7UN1g1ByXvl8P0oGQk%2FseZaQnA%2FibjZnSTaIIaboDqem7LQgxDtDVzRfjxAl3R5jYhwrCLhxDXc42SIdZkuvmX4MU5f2wiiO865ettJijsyz%2Fp3RY9e3HCNhK16g2YomKPx0eCZeRsH%2BglVs4iM%2BCzAuSjWwBaKNeJR8iDT2OFPY5nm9sgGnbUu&X-Amz-Signature=73e7bdac0b16c0bd32696b12902752bfbfdc765cc51705160b9170ee6f3b36f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
