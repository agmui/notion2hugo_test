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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDNSOWZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIEi%2Fb1TGsQ3hZXewyqXrWrYcMisN%2F%2B0eKhvd39E2eQIhAIkGv9DGK9mbTwxf4fzpJpRT88X9qddSEm%2BgNvUO%2BqKcKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwss3nisFuzgrSYMpYq3AN27J0kd0Ls3KJZtlqsv5EfIfRNyMYwX%2F2HjK%2FxpILXkzHaRj3QSCiy4V65EEWeAd4%2B4jebb%2FOsSadftporQdOBwefUzvV6iarQDpkQ2%2BQPbA03MupXrUvsoTqCWhL3xrap7hmobFbqKFdjSY9xyONZLciuzxIcNWNO2oPjHj5V2AmSqbl6HFcXk8FseeCH%2BqmHbLK%2BYyHo%2BIOtz79Q%2F5FdBHucezIZIVR2dfnHZAQsrWE6DvZ5RTAsR2AX9y%2Bhn5%2BAsV4yG%2FAPLtpyB9t5W0rlRJqAdXs6Q5pg%2Fhws0eTEhFXoufEwUwCKB7PprUclHGogqK0XqhxtFlO8SF7VCtTYcQnMr%2FBPzwJb1OE2qIN2cqGzaNOddQZugZp68%2Ff6kXXh5QQzG8%2Fd8ud8JJSXaS2txQCvQD1m0rcIO5EmLcnVOUf8JOLTLNgJYnT0W3mCgu4zadRYxnxdfzsBlEP1PpA%2BVB0mQbHcCtXriuZSUF3kWbYhe4bufB6XfH1Kk1ATUm%2BVZWh70Lw0bRRcfmJOK0qv0ikwvY8zGNBGia7lHvIYmzjnNwZHxCWj1Gkzg1p2Vtn%2F2fvVXv7A9c%2FctsvIPgGe7HniUSujLTlJ4UmxuqLXEyfCKaTen7A9GfFAHTDUr9jCBjqkAUDCPkx5gLIUVdATbSKY4fT7dRIi01iZiM%2FZtbWd2wGtg4JDV1jbmw6UZiYGh2%2BP2b564N3fal8F%2B8q2LaXjfeppAozpFMU1Ahw3%2B0qr59xJBxAENAzGgd%2BRz6uk9XLhVvIJbmdS9jkGZn3Gyt3efCMQJ4fz9TpzIcbJdG8x2z0LdJG05gY0rsaGI%2FZQLb45NVTsDu139y0A%2Fa1ngl1%2B3ipjvE96&X-Amz-Signature=17f2a2e42d7f046174630d0311cf71f63d21d2763f71fa7e9a48daa0c2e3b3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDNSOWZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIEi%2Fb1TGsQ3hZXewyqXrWrYcMisN%2F%2B0eKhvd39E2eQIhAIkGv9DGK9mbTwxf4fzpJpRT88X9qddSEm%2BgNvUO%2BqKcKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwss3nisFuzgrSYMpYq3AN27J0kd0Ls3KJZtlqsv5EfIfRNyMYwX%2F2HjK%2FxpILXkzHaRj3QSCiy4V65EEWeAd4%2B4jebb%2FOsSadftporQdOBwefUzvV6iarQDpkQ2%2BQPbA03MupXrUvsoTqCWhL3xrap7hmobFbqKFdjSY9xyONZLciuzxIcNWNO2oPjHj5V2AmSqbl6HFcXk8FseeCH%2BqmHbLK%2BYyHo%2BIOtz79Q%2F5FdBHucezIZIVR2dfnHZAQsrWE6DvZ5RTAsR2AX9y%2Bhn5%2BAsV4yG%2FAPLtpyB9t5W0rlRJqAdXs6Q5pg%2Fhws0eTEhFXoufEwUwCKB7PprUclHGogqK0XqhxtFlO8SF7VCtTYcQnMr%2FBPzwJb1OE2qIN2cqGzaNOddQZugZp68%2Ff6kXXh5QQzG8%2Fd8ud8JJSXaS2txQCvQD1m0rcIO5EmLcnVOUf8JOLTLNgJYnT0W3mCgu4zadRYxnxdfzsBlEP1PpA%2BVB0mQbHcCtXriuZSUF3kWbYhe4bufB6XfH1Kk1ATUm%2BVZWh70Lw0bRRcfmJOK0qv0ikwvY8zGNBGia7lHvIYmzjnNwZHxCWj1Gkzg1p2Vtn%2F2fvVXv7A9c%2FctsvIPgGe7HniUSujLTlJ4UmxuqLXEyfCKaTen7A9GfFAHTDUr9jCBjqkAUDCPkx5gLIUVdATbSKY4fT7dRIi01iZiM%2FZtbWd2wGtg4JDV1jbmw6UZiYGh2%2BP2b564N3fal8F%2B8q2LaXjfeppAozpFMU1Ahw3%2B0qr59xJBxAENAzGgd%2BRz6uk9XLhVvIJbmdS9jkGZn3Gyt3efCMQJ4fz9TpzIcbJdG8x2z0LdJG05gY0rsaGI%2FZQLb45NVTsDu139y0A%2Fa1ngl1%2B3ipjvE96&X-Amz-Signature=fa81b17f54fd131fdef2f79ad21e9664d94bf9bbdb95b77c03a0258c0210066e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
