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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJLM64O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDGEGNTRqlwnuGH1XYG0qjwTSih1iYsrK4tSTY4sV6E3QIhANwkHydeoGcmBOztVZD6Xo6Iyx%2FR144gV4c9RZ3WOGKkKv8DCC4QABoMNjM3NDIzMTgzODA1IgyPNVONuPeCnkXsfGQq3ANMvmTt00UN%2FJ8zqfDeqoDk6NEr3Me2PjeBa2YgaMfTJtFbA3qUJsmUqBfPDFkXddLeMapmC4DFLcl41w04LXjIJJqB%2B1k9%2BqH4JwoBSPuHOs4U%2BC15UagZ4GtZiIk6%2FeS5jwvmmDK6wLlqvcBnPJIyRMNHZ1sFJRkv8T3v6vzx70ZQMe6dbfq1eYw6gxLGLKI4kJ8hnL5dsJtLv3pR63dl%2F4GDkZ6Vsd7Lf0CQvs7bqdmtvJ3PbwqNBUXeVqGqcH9R6l2FxQKJZbEAzoostOYESAJzC5y%2Bkbm3AliYq7VnHSXtAH%2BrTHaBIMxrNPWBKCVHT1EHLID1DsxJ1h0oY7PomDQBVVndQ1t2HxjnnoZU1GDHKVopiXahqkzNnkGElQgs7pc2rsoFKXyT4KNU73SvTSVUOM75O0ZyTjCiFBDWK5MtIYKtgo5bQWruURTRXnoh5cop3Gv5XXIFZddiyWqw%2F%2B29to6tK8rh2vK%2B%2BrelnNDsB%2FJBPXPXzKlc8Ab1acO9UcWIwj8kiaJhEczwMrEYkeXKPnprhP09BjzmCOeOUnkNSI42%2BN8u%2B3a1ZRyn09gpYAw4IloFSkiswXRHflBEJuEECa34H2S%2FSFqYBGNdjvFHl5igd489NBvJPTDM2YjEBjqkAX7xekGREcf7XeCBlGfzp3eeDmwiR7jmoArLDstkd2qpF8f5DbNWxmz4KmwaXfDaYdpZqvRSmoHfifbJtNbrhmvfCcat0DLKt8KyQuXLD7PAj%2BoIt7dLlEefl6Ae%2Fi68inxxVSVC7c9bMIbgtoMJzNvIasUPftwtzf8kRoXx7pppjPARsoMI6pwR32a7LiHubygE1efGWB%2BOcWQTWhVmeqaBzeaw&X-Amz-Signature=b0a479b20d434112aee19d8f3af532818f1a7229ca640dbfb62c599d554670fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJLM64O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDGEGNTRqlwnuGH1XYG0qjwTSih1iYsrK4tSTY4sV6E3QIhANwkHydeoGcmBOztVZD6Xo6Iyx%2FR144gV4c9RZ3WOGKkKv8DCC4QABoMNjM3NDIzMTgzODA1IgyPNVONuPeCnkXsfGQq3ANMvmTt00UN%2FJ8zqfDeqoDk6NEr3Me2PjeBa2YgaMfTJtFbA3qUJsmUqBfPDFkXddLeMapmC4DFLcl41w04LXjIJJqB%2B1k9%2BqH4JwoBSPuHOs4U%2BC15UagZ4GtZiIk6%2FeS5jwvmmDK6wLlqvcBnPJIyRMNHZ1sFJRkv8T3v6vzx70ZQMe6dbfq1eYw6gxLGLKI4kJ8hnL5dsJtLv3pR63dl%2F4GDkZ6Vsd7Lf0CQvs7bqdmtvJ3PbwqNBUXeVqGqcH9R6l2FxQKJZbEAzoostOYESAJzC5y%2Bkbm3AliYq7VnHSXtAH%2BrTHaBIMxrNPWBKCVHT1EHLID1DsxJ1h0oY7PomDQBVVndQ1t2HxjnnoZU1GDHKVopiXahqkzNnkGElQgs7pc2rsoFKXyT4KNU73SvTSVUOM75O0ZyTjCiFBDWK5MtIYKtgo5bQWruURTRXnoh5cop3Gv5XXIFZddiyWqw%2F%2B29to6tK8rh2vK%2B%2BrelnNDsB%2FJBPXPXzKlc8Ab1acO9UcWIwj8kiaJhEczwMrEYkeXKPnprhP09BjzmCOeOUnkNSI42%2BN8u%2B3a1ZRyn09gpYAw4IloFSkiswXRHflBEJuEECa34H2S%2FSFqYBGNdjvFHl5igd489NBvJPTDM2YjEBjqkAX7xekGREcf7XeCBlGfzp3eeDmwiR7jmoArLDstkd2qpF8f5DbNWxmz4KmwaXfDaYdpZqvRSmoHfifbJtNbrhmvfCcat0DLKt8KyQuXLD7PAj%2BoIt7dLlEefl6Ae%2Fi68inxxVSVC7c9bMIbgtoMJzNvIasUPftwtzf8kRoXx7pppjPARsoMI6pwR32a7LiHubygE1efGWB%2BOcWQTWhVmeqaBzeaw&X-Amz-Signature=a9e625cc74e5b65e25d5952b0667711e01fe21fefdd5d31f9c1fbc18b2100c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
