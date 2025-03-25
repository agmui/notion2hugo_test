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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32SNKYZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6yCTZ%2Bc13J%2F43qlLq2UBCS5x1USWFNf6k8veQDeFvgAiBlMs%2BCxWrmJXX8Gj3JZLyqS416VHOVixySbSuChANYmSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWCzxNUw3QUhecwptKtwD8JFrnC3YcBk%2Ff8Wf%2BXNExkqT0ABJeGCj3SiUqauKSw9LIl7%2FMMeFZEjf9vtQvYQTQXbDTnGPk%2BBF62JV3ZgLo7S7gcz1hbB0YFFhYy2BDl%2BQPD4g5kDK06jxiSu6xaWNo7RS0VUTtYJE0uffqbbPvxZtwB01giN1B8wiiex38Uq%2Be66W8LQJI526u%2ByZv41OWgnW0vIyQndFEtqilAsDktfupm8lezRrcIm%2BwxiTJXeMs14qsoAjoCWU1KbYY29sgx8H0F%2FlnixX4jh6CU6wlOs7r2Y9aoSF80MkZ0txm%2FcEWc5MSRATXYIvGQqjjdYVhi4mUuv6C43zj6fVz%2BjZAUsbYjVARW4uvYL75YJJYq%2FqyLKxsdIrvikJR3EOFXUknSrlggsomTIAyYKgnNZUBj9ZjLk4T0wWkh%2B%2FJ2z1U7F3ERmu7Gcy9MJa9c3SDvRrwEFneeDx9e2jYFO41Av2cD6xbnjZG6V5g8ThZt0SqgcO5tSRdeEhNuEpXawPUbr%2Bt2Sez4Tzs8tF2nLDgGkS9Tg%2FdYsUQR3ER9QfMw75K4tXGdwhXpWEUzPp5AJ9pBDTaDPkTK5nHgsg7CAsoXylcks5O%2FDSU74HCZcIpVNG5ikNWUnw3Tvifg9gQHkw65eMvwY6pgEwjO1G5K519xEpTKy%2Bw5SpObawxcFh9wVVVRJNGutRHfaW6EhiceZ5XOPmlCs7EVG3UAUwb%2BubVBf%2FpOyVNb8bboQHFWHyb%2FRJGGd%2F%2BSGJmiqnVlE0jkCqcWmV8Ct3VodPXLQijTqoS%2Fr6RrvXf5bI%2Brri7%2FmbXOcNvCIvEvBbACWONAAANuhcueRqqVsqTqDjAo5On3%2FfdBTvT7Hmr7B%2B%2FXL%2BCISv&X-Amz-Signature=c08f2b3eae2a0f7e2871ea6251c1eb8dc41c2030b45e8d71bb8236416bd6bb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32SNKYZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6yCTZ%2Bc13J%2F43qlLq2UBCS5x1USWFNf6k8veQDeFvgAiBlMs%2BCxWrmJXX8Gj3JZLyqS416VHOVixySbSuChANYmSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWCzxNUw3QUhecwptKtwD8JFrnC3YcBk%2Ff8Wf%2BXNExkqT0ABJeGCj3SiUqauKSw9LIl7%2FMMeFZEjf9vtQvYQTQXbDTnGPk%2BBF62JV3ZgLo7S7gcz1hbB0YFFhYy2BDl%2BQPD4g5kDK06jxiSu6xaWNo7RS0VUTtYJE0uffqbbPvxZtwB01giN1B8wiiex38Uq%2Be66W8LQJI526u%2ByZv41OWgnW0vIyQndFEtqilAsDktfupm8lezRrcIm%2BwxiTJXeMs14qsoAjoCWU1KbYY29sgx8H0F%2FlnixX4jh6CU6wlOs7r2Y9aoSF80MkZ0txm%2FcEWc5MSRATXYIvGQqjjdYVhi4mUuv6C43zj6fVz%2BjZAUsbYjVARW4uvYL75YJJYq%2FqyLKxsdIrvikJR3EOFXUknSrlggsomTIAyYKgnNZUBj9ZjLk4T0wWkh%2B%2FJ2z1U7F3ERmu7Gcy9MJa9c3SDvRrwEFneeDx9e2jYFO41Av2cD6xbnjZG6V5g8ThZt0SqgcO5tSRdeEhNuEpXawPUbr%2Bt2Sez4Tzs8tF2nLDgGkS9Tg%2FdYsUQR3ER9QfMw75K4tXGdwhXpWEUzPp5AJ9pBDTaDPkTK5nHgsg7CAsoXylcks5O%2FDSU74HCZcIpVNG5ikNWUnw3Tvifg9gQHkw65eMvwY6pgEwjO1G5K519xEpTKy%2Bw5SpObawxcFh9wVVVRJNGutRHfaW6EhiceZ5XOPmlCs7EVG3UAUwb%2BubVBf%2FpOyVNb8bboQHFWHyb%2FRJGGd%2F%2BSGJmiqnVlE0jkCqcWmV8Ct3VodPXLQijTqoS%2Fr6RrvXf5bI%2Brri7%2FmbXOcNvCIvEvBbACWONAAANuhcueRqqVsqTqDjAo5On3%2FfdBTvT7Hmr7B%2B%2FXL%2BCISv&X-Amz-Signature=80fcc3d52e4420893de841a50a70e8d8280be56d8c27a78596a83d143843c74f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
