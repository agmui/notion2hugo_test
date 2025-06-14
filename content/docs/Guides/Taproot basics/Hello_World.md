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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKN4C3J%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCihFXyC2P7mzRVW0J4gBkNDEq6YfF41G94hSjlieA4QQIhAJx4s3jCbheqhZoOoi6ifPISQMeuZcIzZZiSE0KZr5csKv8DCDUQABoMNjM3NDIzMTgzODA1IgzMkPrRxRcBccCyJWoq3ANY7dqUFnr%2F7ZlMFd6JsTPKlW1sfJK6yZeaWeySwgFse9wOZHQDZdOCQvVm1UrqrId7%2FQxl%2FnjaYAKBkKhiHc%2BKihWFuQiaDbnE%2BtJFJ6lGsZfCWwL9AEwbKP30QeWl1zKDKi%2FJwNq3zsZ5e4xDgnSyr5tholCbJVN54x%2F39GzEnxEP5bBmBfoj1nRRBiNLn1jt7NvcdqTKk%2Fk8CEmEDiMayEIejdiiJ16HjKnzzXUtZvnE91JEBaVl1vF2hw2NtAlI6R9DqMQMdU3RyMPGgrGMgpTT4b9Ml%2BJkvO6Ud0ZFeYRhu875qtCOiLf12jbtZuw4WSI4EL3GB%2BAPKsW4FQLTg9RXNbQQvQDvRwen5ky8NcOCNm2xjPijfNS3ApDUrh7l5jNIJGoBT2z4pqGnBswDBssvg9ip4EoVw28o%2FEhfzEWkty9cvumY8yjo7V5sqvAQgV85bZhf1j85u7zEiV4%2FWxXpe2GKMAE3bCCtGehal82KAmZew3Lo3a2ed84MI8rw2VjmQGVIHlVDwOQdXZsW9H1%2Fnl2j6CzRBeSjcanJg%2B39DQDbLBAEV0%2BZ49jXH5eHeIKieoZ0lazxW8OUhrJ5FO%2FXf7ndFF3SBwWms6U6wIiAzxnugDjLwkpP0TCepLfCBjqkAbZvj4%2BQGe5bkuYBMpNPrudD2Wu21G5hUF1RCy7J%2Bali5hbQyc%2FWVItem8%2FvtJUwTgb003yLR1giAi0YyfLrP5UN6UWqJfkSQBBJ6GUmYWEB15H%2FMs997sfIt4sjsKvi1CsEHxoeU9CmeD9FiRcqsfgkoTxpPDbNJEqCaXYMwLS4EKdDcW%2F0z0R7Zk1h%2FQtcTWZ2IN0vPX9sxrD3HI4qkQJ%2FG8Lo&X-Amz-Signature=9965a5285afbfd5bda915a4f47a770d930c1dbbaef45d362d1179d16672b8342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKN4C3J%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCihFXyC2P7mzRVW0J4gBkNDEq6YfF41G94hSjlieA4QQIhAJx4s3jCbheqhZoOoi6ifPISQMeuZcIzZZiSE0KZr5csKv8DCDUQABoMNjM3NDIzMTgzODA1IgzMkPrRxRcBccCyJWoq3ANY7dqUFnr%2F7ZlMFd6JsTPKlW1sfJK6yZeaWeySwgFse9wOZHQDZdOCQvVm1UrqrId7%2FQxl%2FnjaYAKBkKhiHc%2BKihWFuQiaDbnE%2BtJFJ6lGsZfCWwL9AEwbKP30QeWl1zKDKi%2FJwNq3zsZ5e4xDgnSyr5tholCbJVN54x%2F39GzEnxEP5bBmBfoj1nRRBiNLn1jt7NvcdqTKk%2Fk8CEmEDiMayEIejdiiJ16HjKnzzXUtZvnE91JEBaVl1vF2hw2NtAlI6R9DqMQMdU3RyMPGgrGMgpTT4b9Ml%2BJkvO6Ud0ZFeYRhu875qtCOiLf12jbtZuw4WSI4EL3GB%2BAPKsW4FQLTg9RXNbQQvQDvRwen5ky8NcOCNm2xjPijfNS3ApDUrh7l5jNIJGoBT2z4pqGnBswDBssvg9ip4EoVw28o%2FEhfzEWkty9cvumY8yjo7V5sqvAQgV85bZhf1j85u7zEiV4%2FWxXpe2GKMAE3bCCtGehal82KAmZew3Lo3a2ed84MI8rw2VjmQGVIHlVDwOQdXZsW9H1%2Fnl2j6CzRBeSjcanJg%2B39DQDbLBAEV0%2BZ49jXH5eHeIKieoZ0lazxW8OUhrJ5FO%2FXf7ndFF3SBwWms6U6wIiAzxnugDjLwkpP0TCepLfCBjqkAbZvj4%2BQGe5bkuYBMpNPrudD2Wu21G5hUF1RCy7J%2Bali5hbQyc%2FWVItem8%2FvtJUwTgb003yLR1giAi0YyfLrP5UN6UWqJfkSQBBJ6GUmYWEB15H%2FMs997sfIt4sjsKvi1CsEHxoeU9CmeD9FiRcqsfgkoTxpPDbNJEqCaXYMwLS4EKdDcW%2F0z0R7Zk1h%2FQtcTWZ2IN0vPX9sxrD3HI4qkQJ%2FG8Lo&X-Amz-Signature=101a2b530cb5cc27230a2f35b233fd434b2512c69001a477838e30e3d20975b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
