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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YYZTBO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAYCxofH0eCh7h6H%2Be3nse9vRM7pj0vQDxd0AjFkF3ZAiBesyX1W3yQ9EW1XlpjAbZrpbOWG%2Bfvi9WeuSXpOLD%2F9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDbFLcf6tasI670fbKtwDPJ4C%2BP1Wz11I3yNNovGRGI4Ctcp6U0WcFpT1qCNx%2Fch8lmMz%2FumrX3J1IVoCtTEMKVDCwsF4HBmQwCtqa05F5N29aDIooknMWmuQHd75wcDmwIXipVxNlB7jCoOwjQpsJYmGLH4erYv54DmcFoZ4YCa4CTAk6JZ21vUB6EgMvSTzhGtqCudSkbOIUl7ex%2B1wcjNu0Emq5mlMVHid1l9OdSuR4ZNwsGTut6ug8Bc83J3w1oQYEkjvKUKHOhMQujm3aqDhZklqGxSeM04dkNKPu7SJcg44A7eu7gMTybptsSgOEHBItJZMIrJsk8a3SOybGMBDZUhLaeiTYrlA9f8o3DD0AuTTyQwZqifuYPRywU1SdNy8vUmixYOPFmEfJT6zYRy%2BhC%2BUGURhaQoGRl1RbeqMmegA0EAbZqMiRs%2BEic9Ka6gZPYRMoOt4bZPTPctI1nNYDrf6QsN0CEQ7NuEQxTS6TiYM%2BarAshpRRY5%2FDJZoexbfEw9MMlC1cQwQ1PcQNrhJD8Rn2%2FYu7pJD4j%2FtpTDYXfKT26CqZsqtL6sTjXJbeOTH07qBcgcRO58MGVVFcQVXOgwVi0QaUooJywoH6RrQ9WvIy3zBiPOKieRI9jdLq1%2BzifMWc7Ym1egwsY6cvwY6pgHJSwvcOlwyQ38ZRD9TYCfYMTDJI0rVoxs%2Bp%2FcI2LQw3oYGT%2FzUYxuHkp2YAGQuTGzwS%2FxQUEvOhR%2BfIbAdfW7RBrIzagYfVSwgTqCQ6ghU1xNg1W1N%2BFTLHXOOpqN5EH2MYoDl22fragaFQpOf5GOFq8QY4es%2FZdNwQQxhRl%2BDA6akAOAiC%2BNUEzc3GmbXv6HPAzkEccPxV3v0gAeCJqACxTLCVk51&X-Amz-Signature=c1c922baadb1a62fcd86077eb0ff1a20d6e5ad339afaeea29f672a1c218cda26&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YYZTBO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAYCxofH0eCh7h6H%2Be3nse9vRM7pj0vQDxd0AjFkF3ZAiBesyX1W3yQ9EW1XlpjAbZrpbOWG%2Bfvi9WeuSXpOLD%2F9yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDbFLcf6tasI670fbKtwDPJ4C%2BP1Wz11I3yNNovGRGI4Ctcp6U0WcFpT1qCNx%2Fch8lmMz%2FumrX3J1IVoCtTEMKVDCwsF4HBmQwCtqa05F5N29aDIooknMWmuQHd75wcDmwIXipVxNlB7jCoOwjQpsJYmGLH4erYv54DmcFoZ4YCa4CTAk6JZ21vUB6EgMvSTzhGtqCudSkbOIUl7ex%2B1wcjNu0Emq5mlMVHid1l9OdSuR4ZNwsGTut6ug8Bc83J3w1oQYEkjvKUKHOhMQujm3aqDhZklqGxSeM04dkNKPu7SJcg44A7eu7gMTybptsSgOEHBItJZMIrJsk8a3SOybGMBDZUhLaeiTYrlA9f8o3DD0AuTTyQwZqifuYPRywU1SdNy8vUmixYOPFmEfJT6zYRy%2BhC%2BUGURhaQoGRl1RbeqMmegA0EAbZqMiRs%2BEic9Ka6gZPYRMoOt4bZPTPctI1nNYDrf6QsN0CEQ7NuEQxTS6TiYM%2BarAshpRRY5%2FDJZoexbfEw9MMlC1cQwQ1PcQNrhJD8Rn2%2FYu7pJD4j%2FtpTDYXfKT26CqZsqtL6sTjXJbeOTH07qBcgcRO58MGVVFcQVXOgwVi0QaUooJywoH6RrQ9WvIy3zBiPOKieRI9jdLq1%2BzifMWc7Ym1egwsY6cvwY6pgHJSwvcOlwyQ38ZRD9TYCfYMTDJI0rVoxs%2Bp%2FcI2LQw3oYGT%2FzUYxuHkp2YAGQuTGzwS%2FxQUEvOhR%2BfIbAdfW7RBrIzagYfVSwgTqCQ6ghU1xNg1W1N%2BFTLHXOOpqN5EH2MYoDl22fragaFQpOf5GOFq8QY4es%2FZdNwQQxhRl%2BDA6akAOAiC%2BNUEzc3GmbXv6HPAzkEccPxV3v0gAeCJqACxTLCVk51&X-Amz-Signature=766bbbff114476027cd6d72753a8192f81f77dc4c2818b24494cfa16f6544549&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
