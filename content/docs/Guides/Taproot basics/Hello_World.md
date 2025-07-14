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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPJLP6C%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD2squnvV8O5OTTT33IE05WunkfvysO7DF1ELeHwITJVwIhANdNrbxRImUrIz1TfP217s3%2FvnfhLcMsVkRGOrsIaHJuKv8DCCMQABoMNjM3NDIzMTgzODA1Igwhr6W%2Fx5BqkGZNnwcq3AOaX5KSSXg%2B2aVgv1Sn1otQ%2BBiOeQIz5%2B9ZAu%2BlA270BofF7wnT7g0qj%2FzFbQbl6e7PTaK52%2B%2BiMiLFytBZMEN6diStg4e03fyZkvFz8itYcs%2FZ5plLXQuy%2B2vXF7YQVp2nOV9HUJ%2Bl0bHpFla6%2F38xDIXIoMQ024gCSc3JcBcAi7Ss3ejZQlRWmYNP3BWwD8zFa15pOafVjZUJnAOWi%2BXfGANoBozO12SwFxIugf7KrnXofiACMXlToYhzDS4sO5OaAy0pGCt3Y%2BCG%2FjNKdo4R8NMpSbrXGhQWNgWTKwMnFZFt5t8TQojYMbKEscUw%2BBB%2FvIdPU8vE88PmMH7qeW8bDulawEmK%2ByRrc6qgyc%2BbPa7d6eYxliO6OV5C7hSUfdNSsbnpoSwDzwbSmKwqULj6HsvmPwBE1bvYT7IpfldEcNmzEsYJyTs%2BEdGWQXIo%2B7TcTIXg7yWajpuB3RXMs0q0KevR%2Bs3lSUZzfjLc%2FTbmrnAbR54F%2BniUGVUW1EhTcEgvzN%2BqYSQnYIwi3ta%2B8S%2BeOHZKmkZMs46J6K%2BP%2B0nC6DZts9Ivn376P28AdqRLEp%2BU8RbZYe6t6fuKE8yixly1VQ9ZoztCID8wqq20Z7X9Vg09BPiIbP7jdo5BLjC6y9HDBjqkAfTWQHA46nnMgyYjCfVQaYcp%2FraSwxvhk7eKuoEU%2BP8d8XNBDOPelqFMKXsWwZLWtxUZ0iwCVhLxPNb8XOKAXa3se9IWNSYvtMvVfRkm%2FRHNrRrAMa1m60qKLteAjCIOic%2FWmVZJcQQL5w5DEGd6w%2BhK6Wj3QzgSYBe6jvXTbyrclIHrVr53UJkA7x8Yg4cmXPpkcraDPhdVfp22FCvtGFY7jeR0&X-Amz-Signature=48a9777893d3621bcad90c1625e17ad0bb5fa53f0f37a2939a5c0759f6d61e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPJLP6C%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD2squnvV8O5OTTT33IE05WunkfvysO7DF1ELeHwITJVwIhANdNrbxRImUrIz1TfP217s3%2FvnfhLcMsVkRGOrsIaHJuKv8DCCMQABoMNjM3NDIzMTgzODA1Igwhr6W%2Fx5BqkGZNnwcq3AOaX5KSSXg%2B2aVgv1Sn1otQ%2BBiOeQIz5%2B9ZAu%2BlA270BofF7wnT7g0qj%2FzFbQbl6e7PTaK52%2B%2BiMiLFytBZMEN6diStg4e03fyZkvFz8itYcs%2FZ5plLXQuy%2B2vXF7YQVp2nOV9HUJ%2Bl0bHpFla6%2F38xDIXIoMQ024gCSc3JcBcAi7Ss3ejZQlRWmYNP3BWwD8zFa15pOafVjZUJnAOWi%2BXfGANoBozO12SwFxIugf7KrnXofiACMXlToYhzDS4sO5OaAy0pGCt3Y%2BCG%2FjNKdo4R8NMpSbrXGhQWNgWTKwMnFZFt5t8TQojYMbKEscUw%2BBB%2FvIdPU8vE88PmMH7qeW8bDulawEmK%2ByRrc6qgyc%2BbPa7d6eYxliO6OV5C7hSUfdNSsbnpoSwDzwbSmKwqULj6HsvmPwBE1bvYT7IpfldEcNmzEsYJyTs%2BEdGWQXIo%2B7TcTIXg7yWajpuB3RXMs0q0KevR%2Bs3lSUZzfjLc%2FTbmrnAbR54F%2BniUGVUW1EhTcEgvzN%2BqYSQnYIwi3ta%2B8S%2BeOHZKmkZMs46J6K%2BP%2B0nC6DZts9Ivn376P28AdqRLEp%2BU8RbZYe6t6fuKE8yixly1VQ9ZoztCID8wqq20Z7X9Vg09BPiIbP7jdo5BLjC6y9HDBjqkAfTWQHA46nnMgyYjCfVQaYcp%2FraSwxvhk7eKuoEU%2BP8d8XNBDOPelqFMKXsWwZLWtxUZ0iwCVhLxPNb8XOKAXa3se9IWNSYvtMvVfRkm%2FRHNrRrAMa1m60qKLteAjCIOic%2FWmVZJcQQL5w5DEGd6w%2BhK6Wj3QzgSYBe6jvXTbyrclIHrVr53UJkA7x8Yg4cmXPpkcraDPhdVfp22FCvtGFY7jeR0&X-Amz-Signature=b826ab36930bfbe9b5af37e5aa74d3c5974d187ff25a583e112615517723f200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
