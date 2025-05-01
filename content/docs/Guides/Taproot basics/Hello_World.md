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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325SVAW7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAfx9P%2B6aLIMP%2B9o23HTi0zMno6Gz9ew62DsUR3rkBKWAiAZQrgfZlU026ipQvgbC%2BX7%2F8B4NMEK9bMT272Q6JapOCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgCXMn%2BJf6jNmTz1KtwDec4QvtFPl4zGoYI7Nzn4Y0%2Bj7pxmJ5Okw6vUm%2FzfwtU8YGpepxj5Z6AERUBqu9CFamBCNlvcZJJ3PZrXDOOnOyfFODAyocdAKUB2i6SfLvZT677UDZlgVIbcoCRucvhJ3Me6ikmNRWmlGRLZWDaOpP15%2B4avgNDR2eLyBuMKUrErC5wV4Yxt73Yy2Z8Rmo%2BCssLr5WUdWRn4sjy9RIY%2BEGwwkIMxLApM8J4t67VlKinPggn223gN3SIUf%2FdPQ4QeTS%2Fi2zCD14qX44zHs0lOmdzitjpIjcqcTAlBLN2LwskYn8HSjnSOl97reDJApflf4cKUzaXPuSKnetjDMQyNAQaWFVlRZGaZ5GiBHAiEd21LlbgdG2BrDeUIyD7te7ew%2FpvWgU8fYEkMz8315pT63oDYLGnhYOCSZWtg8bbhyDe0AsWcxOgIuyx0wcBz1kOK0k9dR36wymRzLijPu3CxM4fqldyzPjE%2Fv9MbSPfFcXyF3UbIXcKcl%2BHCN7BYgNq2uH8%2BFAWUBCxdcFc5EPtWwTOgRzZTfK%2FdevpKdrHRd3zEKNv2%2FVWfjEKllgvuFfbehGKljaFFXNAizcLIJXut4eThkrgi4g2tw6fe%2Fci2jOHqWc5qfkRNtNVAlcUw1MfPwAY6pgGI1Nw3iR6zJWt6DJplmyJsl1kCxS%2F9DnBbAFhL6Xq%2Bw2%2B9SiCqURamRDPeMFUbnJwfY8UF0d4ryTpojdzWgpNCpN7Ss9yhVUaXe8F5KyQsfJOW4WQBM6fJ55k4mzV8p76uZCgLrVYn1FBLfhSl5rF%2Bw0XEaHZquVpMEqBCMDfwkqsnr8Ep6Un3VpRm9u8rLrAKaxwsWXDsbLbSB3e7TlvNkGQ1dA9Q&X-Amz-Signature=cfe28a75ea9bb14a9ff21af818583d81d5b02f0e0f86802505e26eabc9f24533&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325SVAW7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAfx9P%2B6aLIMP%2B9o23HTi0zMno6Gz9ew62DsUR3rkBKWAiAZQrgfZlU026ipQvgbC%2BX7%2F8B4NMEK9bMT272Q6JapOCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMgCXMn%2BJf6jNmTz1KtwDec4QvtFPl4zGoYI7Nzn4Y0%2Bj7pxmJ5Okw6vUm%2FzfwtU8YGpepxj5Z6AERUBqu9CFamBCNlvcZJJ3PZrXDOOnOyfFODAyocdAKUB2i6SfLvZT677UDZlgVIbcoCRucvhJ3Me6ikmNRWmlGRLZWDaOpP15%2B4avgNDR2eLyBuMKUrErC5wV4Yxt73Yy2Z8Rmo%2BCssLr5WUdWRn4sjy9RIY%2BEGwwkIMxLApM8J4t67VlKinPggn223gN3SIUf%2FdPQ4QeTS%2Fi2zCD14qX44zHs0lOmdzitjpIjcqcTAlBLN2LwskYn8HSjnSOl97reDJApflf4cKUzaXPuSKnetjDMQyNAQaWFVlRZGaZ5GiBHAiEd21LlbgdG2BrDeUIyD7te7ew%2FpvWgU8fYEkMz8315pT63oDYLGnhYOCSZWtg8bbhyDe0AsWcxOgIuyx0wcBz1kOK0k9dR36wymRzLijPu3CxM4fqldyzPjE%2Fv9MbSPfFcXyF3UbIXcKcl%2BHCN7BYgNq2uH8%2BFAWUBCxdcFc5EPtWwTOgRzZTfK%2FdevpKdrHRd3zEKNv2%2FVWfjEKllgvuFfbehGKljaFFXNAizcLIJXut4eThkrgi4g2tw6fe%2Fci2jOHqWc5qfkRNtNVAlcUw1MfPwAY6pgGI1Nw3iR6zJWt6DJplmyJsl1kCxS%2F9DnBbAFhL6Xq%2Bw2%2B9SiCqURamRDPeMFUbnJwfY8UF0d4ryTpojdzWgpNCpN7Ss9yhVUaXe8F5KyQsfJOW4WQBM6fJ55k4mzV8p76uZCgLrVYn1FBLfhSl5rF%2Bw0XEaHZquVpMEqBCMDfwkqsnr8Ep6Un3VpRm9u8rLrAKaxwsWXDsbLbSB3e7TlvNkGQ1dA9Q&X-Amz-Signature=052908b59c2619869de87ed8bea506146ddf950b6dabbb010a8a585a69ce9ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
