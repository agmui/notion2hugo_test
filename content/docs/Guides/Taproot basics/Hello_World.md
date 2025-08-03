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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=1daf84d1b5771ff75f3b7fe1c8a6ff850abe7efeeada0c74330a8388069b94b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=ad4e06cc1af83a8eb1ea35150ef983a89fd57c1c48bb159df45fdb7c8787607b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
