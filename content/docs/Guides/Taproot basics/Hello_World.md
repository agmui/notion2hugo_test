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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCIKOOY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxJLQJYqrV%2FRRZjouAk1q%2BsLw2oPxr0NC64BFwKQZvFAIhALMHa4%2Bsq2R3quutEulW6h%2Fe9L3RsYnChhxl9oI8YE7pKv8DCBkQABoMNjM3NDIzMTgzODA1Igyh60NzDOEFowZp2MUq3AMNRvEbwWJyhT8CJocXtKzmUXxBE4jG8hZYzXav8bMbodBHqWZ6GbSxZvweZhiw%2B4e8AZOL66%2BAYCK3b0TCZcdB%2B96kZ4rBRb5LwEOL%2FAEdw17VpGMUheSs4R0Tx2w68l9o9vK2p9h%2B5cb5s81hmbQr1%2Fyc5g0aYDJ47WsiCI0WbUwN49m5%2F5iDmjw6gAHX8fwuGyx6XYqPa8OpE8opq5DDAefl3Cetiaxj6xu1n%2B%2FxmHdkJUbBXQHNPYZw9MHbgbtOS4fh97up5HP5OriHsnCy%2BtN1oB9dUIDY2f44cHzc5b89HwsnqOuETZ2mlLe5C0ZIbwNpvzJ3bVRrIgSf3Km%2F2dCNV9HjEqP2ZzTjz%2F3x7UlYoGUNqdHwTLvOTXvul3yRd8MGZmRrOvptpQRfQ%2FYy6RLPGyoGWJ5UMUOv9xroe8%2FQaWWWrFMdxgE7AJr24cCN5P1jxaYa40pODNXXTXtFqLX%2BpTLt2NKp06EepSHIPhlImmgi7zWfZxChMAD6x2yiuj2THItrWODPEccQ4aTk26AM7C2wdNr%2FlGyZ93gkP1NcHPmyCU8kkQbIRdiriCSTddWUVU2GJThZH5lOJcWxnkoM4HmcUo%2FcwKBDnAQzL%2BONGMiz%2FAArI5aPfzCX3PS%2FBjqkAdanBkSY7lXlSw01tvnNqcB6Q0oyrSBY945SaMMErXTolwBwkO0noPnibCiEAOI8horrdOJzCnlsy%2FiHkwvGP6mr3kVFu23LNjQAUO0tcfOFT9Y1YRBq2IrvQhrsRcH5BK5SKrnFScuATVG2bb4HUHEjungfI1atNVyyDUKBGfYgC%2F8BLenHE4fyVe40iujoarWlSbvVyHT38W2c%2FScZsPaJ1EsH&X-Amz-Signature=047008ce0dc46866934c51d0d223546252018ab32f95466a8d1de10b0966e375&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCIKOOY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxJLQJYqrV%2FRRZjouAk1q%2BsLw2oPxr0NC64BFwKQZvFAIhALMHa4%2Bsq2R3quutEulW6h%2Fe9L3RsYnChhxl9oI8YE7pKv8DCBkQABoMNjM3NDIzMTgzODA1Igyh60NzDOEFowZp2MUq3AMNRvEbwWJyhT8CJocXtKzmUXxBE4jG8hZYzXav8bMbodBHqWZ6GbSxZvweZhiw%2B4e8AZOL66%2BAYCK3b0TCZcdB%2B96kZ4rBRb5LwEOL%2FAEdw17VpGMUheSs4R0Tx2w68l9o9vK2p9h%2B5cb5s81hmbQr1%2Fyc5g0aYDJ47WsiCI0WbUwN49m5%2F5iDmjw6gAHX8fwuGyx6XYqPa8OpE8opq5DDAefl3Cetiaxj6xu1n%2B%2FxmHdkJUbBXQHNPYZw9MHbgbtOS4fh97up5HP5OriHsnCy%2BtN1oB9dUIDY2f44cHzc5b89HwsnqOuETZ2mlLe5C0ZIbwNpvzJ3bVRrIgSf3Km%2F2dCNV9HjEqP2ZzTjz%2F3x7UlYoGUNqdHwTLvOTXvul3yRd8MGZmRrOvptpQRfQ%2FYy6RLPGyoGWJ5UMUOv9xroe8%2FQaWWWrFMdxgE7AJr24cCN5P1jxaYa40pODNXXTXtFqLX%2BpTLt2NKp06EepSHIPhlImmgi7zWfZxChMAD6x2yiuj2THItrWODPEccQ4aTk26AM7C2wdNr%2FlGyZ93gkP1NcHPmyCU8kkQbIRdiriCSTddWUVU2GJThZH5lOJcWxnkoM4HmcUo%2FcwKBDnAQzL%2BONGMiz%2FAArI5aPfzCX3PS%2FBjqkAdanBkSY7lXlSw01tvnNqcB6Q0oyrSBY945SaMMErXTolwBwkO0noPnibCiEAOI8horrdOJzCnlsy%2FiHkwvGP6mr3kVFu23LNjQAUO0tcfOFT9Y1YRBq2IrvQhrsRcH5BK5SKrnFScuATVG2bb4HUHEjungfI1atNVyyDUKBGfYgC%2F8BLenHE4fyVe40iujoarWlSbvVyHT38W2c%2FScZsPaJ1EsH&X-Amz-Signature=0278197b916e805fe48e37dd51c53640853134ea9cdaab8d28aa01b761447055&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
