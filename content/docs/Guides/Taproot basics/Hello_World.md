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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL227ACY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmiEHnQJ8AfiEMairgTzDH1e1PCEpDTGmz0xADspOIQIhAIRNXtlZ1R%2FC0KORCvoZhji1zXC2YftWha1VjMm4S3nlKv8DCBYQABoMNjM3NDIzMTgzODA1Igwl2InOgNwjBsftFdgq3AMlfnf7mIj1sosqrrEQhvsIRKKZquChRdrDZsOPrmAt9jnhFxp%2FziyDYcH4ujltQYpqzDl4KXZbSonCyKKQZl%2FLpToH64ug2s5fgelbCaxWeYWmw2Tv3NujT9ELyax1qYKOExitOzS7Ua8SLWc95m%2BcziMCP0jE6op58%2Fj5bOUZMjefqaQLY6i7%2F293RhYH0Rp0xSHo9ujbnPYN0ONKek3G%2BaOr3VDazd8R0O9JV6uaBkdtenvu9u5h0XCMqi3gArh%2BKgZgq9M%2F5Pr0a7cKR8iKIhK62AgWGwNWxbHlxs3aot%2Fjov8kUFsSUy1wsQER4DpPGXBXJYvtz9o%2BX6aEPcqCOOvpYfcgRofTF25nSx75vVxpSz2XwMxyM1GlMRHsPQVWMbRgsvgExooOnfv%2Bddzbj7zK%2Fhmml%2FptacXkE0x46Xlel%2BTCvOk9RNAC4s1CWoTL1Tm3swA6TuDq%2BX48irdkqIHzTpp2VacFuxnrAtcsIr3tOmTbkJpy48i8AF7KZu2NqxDydP7P45K5BUgpBF2rwEnjbYMtN2kM8HKcV36Y0hM0kys%2BLOVUSOqi%2FL8jxawO6JHj56PV10kMY%2FIBJiUxrutIX19x06AXDcBqb8b%2Fu2vhMsdDuVXgWHdJTDCQ79W%2BBjqkAZyIHfSAWqFh5kNyFrXTFiwycN8Qzf9VUAX7HiSsdajLlswtIH%2FP5HRT%2F9nctbYJfmuoW4vTqFA1mrnLjOqubaNvvLE4UWllZ3ZpLccu6CHxQxtXv0GLo4ktZnkrgX6gwN1YbrrxW8pbUjNYSJxU3B9X3GATUZEs3tq8b%2FrcZBLeT7rNqFvZnTcX5g9c63mwRuYA%2BqyFTzGDKj2axO3NW1%2FNiQDY&X-Amz-Signature=e976cad9f52c56bf908799d5c19f3cb1bcaf990feda4ac5c0f2bf0c78a751051&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL227ACY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmiEHnQJ8AfiEMairgTzDH1e1PCEpDTGmz0xADspOIQIhAIRNXtlZ1R%2FC0KORCvoZhji1zXC2YftWha1VjMm4S3nlKv8DCBYQABoMNjM3NDIzMTgzODA1Igwl2InOgNwjBsftFdgq3AMlfnf7mIj1sosqrrEQhvsIRKKZquChRdrDZsOPrmAt9jnhFxp%2FziyDYcH4ujltQYpqzDl4KXZbSonCyKKQZl%2FLpToH64ug2s5fgelbCaxWeYWmw2Tv3NujT9ELyax1qYKOExitOzS7Ua8SLWc95m%2BcziMCP0jE6op58%2Fj5bOUZMjefqaQLY6i7%2F293RhYH0Rp0xSHo9ujbnPYN0ONKek3G%2BaOr3VDazd8R0O9JV6uaBkdtenvu9u5h0XCMqi3gArh%2BKgZgq9M%2F5Pr0a7cKR8iKIhK62AgWGwNWxbHlxs3aot%2Fjov8kUFsSUy1wsQER4DpPGXBXJYvtz9o%2BX6aEPcqCOOvpYfcgRofTF25nSx75vVxpSz2XwMxyM1GlMRHsPQVWMbRgsvgExooOnfv%2Bddzbj7zK%2Fhmml%2FptacXkE0x46Xlel%2BTCvOk9RNAC4s1CWoTL1Tm3swA6TuDq%2BX48irdkqIHzTpp2VacFuxnrAtcsIr3tOmTbkJpy48i8AF7KZu2NqxDydP7P45K5BUgpBF2rwEnjbYMtN2kM8HKcV36Y0hM0kys%2BLOVUSOqi%2FL8jxawO6JHj56PV10kMY%2FIBJiUxrutIX19x06AXDcBqb8b%2Fu2vhMsdDuVXgWHdJTDCQ79W%2BBjqkAZyIHfSAWqFh5kNyFrXTFiwycN8Qzf9VUAX7HiSsdajLlswtIH%2FP5HRT%2F9nctbYJfmuoW4vTqFA1mrnLjOqubaNvvLE4UWllZ3ZpLccu6CHxQxtXv0GLo4ktZnkrgX6gwN1YbrrxW8pbUjNYSJxU3B9X3GATUZEs3tq8b%2FrcZBLeT7rNqFvZnTcX5g9c63mwRuYA%2BqyFTzGDKj2axO3NW1%2FNiQDY&X-Amz-Signature=f7c6bd5f1215f349d9d256d17a01bcea06f198d2d1b7c3b5f33a4131de1ee960&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
