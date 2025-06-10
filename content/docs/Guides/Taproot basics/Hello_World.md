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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSE5DDG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtSb6uZz4nt5Ay3eAMlczikNXOQdjuVHlO%2BwuEDqiNAAiEAj8huNwBAdcN8oBM08dVzsJV3j54EJOiBp9UhUvaP544qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFva3cfcKQCrpZbUKyrcA1XdEjmoQa2WNfIK%2FsyKn41O8k%2F2LhJNQ95ClYE2ZLYIGcL4ZnAv3spjYR8erzgim0zhCbmefX592MlFMqX769jVjMzf0jaRSDUJYHDocLOBzVyjiSl%2FHVfw9cDkHMUkq0BsyJwz4wzWsryTzBknddvgbVWR439HR%2BMKEiFDxW6gm65QZdKpE2fiBOU92AB8S%2BkmwrS8cgpqwf0cL%2Fdmcsfvoa1y3ADaiBH1SYsy3PHu52on5qcDh%2B5s7Eza6cOm7qs1sVpkJmIqgpG9MYq1LlD9E6QFAuuPP3S77KbONdDJdZRp6j%2B4IKdAwnnF0Fm1qAv%2F6mSZThj43UICua4ZUFSlaxEHSR3x%2Bt8IoU%2FsJ4DQpCsx3%2F%2FcHfMVrSg5R4vsRRELPxS8GD%2FIAnNwJscopbcyp7tYC%2FN1pbnODFN82LZgvzdm6I9ozN6NoP7TCX0Ksf4R6nhgdxLyCrr24WuNDnRxJIflllYT5aG1pSjxNGAjRjr%2BpsmdG%2B%2BvgxlGXSEzMVZuiZZqAX1kbSRcMA9KuUg1xH8kN2Lvl4RZ1uJVL55YVUIZ40OMu5qzm161wwV7YWgH4lUxIgcxDnU8vEjdW7BW5rMyZx3tC%2FvIMqxD9e37tmpMyoxPboLS1BehMJzLocIGOqUBOsS6MfPzhjZPbBsPsvmIMd3F08zuS6XpzIvnZ%2FNShFxIHbfNpBl%2BhFWS%2Fsp80XS7MsuhKJ%2FtspsYB2gb9Sb6WiXqsnQnoTL54XbZAiahcCdHAP3oNI1Iu%2FDJdbV9VKiH778z0egaiGZOlvMUjkGRRb%2BRUEP5xM1XpuTt%2FjguDhERxJoJM7rB8pgp4I7boCvnZFfPSLGdpDa9BFlMrsWe72VpI7o8&X-Amz-Signature=e3d9e7d8536bce4cfa86c77d0b85dacaa4e7bcb65f1f8223a038908972ee8e19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSE5DDG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtSb6uZz4nt5Ay3eAMlczikNXOQdjuVHlO%2BwuEDqiNAAiEAj8huNwBAdcN8oBM08dVzsJV3j54EJOiBp9UhUvaP544qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFva3cfcKQCrpZbUKyrcA1XdEjmoQa2WNfIK%2FsyKn41O8k%2F2LhJNQ95ClYE2ZLYIGcL4ZnAv3spjYR8erzgim0zhCbmefX592MlFMqX769jVjMzf0jaRSDUJYHDocLOBzVyjiSl%2FHVfw9cDkHMUkq0BsyJwz4wzWsryTzBknddvgbVWR439HR%2BMKEiFDxW6gm65QZdKpE2fiBOU92AB8S%2BkmwrS8cgpqwf0cL%2Fdmcsfvoa1y3ADaiBH1SYsy3PHu52on5qcDh%2B5s7Eza6cOm7qs1sVpkJmIqgpG9MYq1LlD9E6QFAuuPP3S77KbONdDJdZRp6j%2B4IKdAwnnF0Fm1qAv%2F6mSZThj43UICua4ZUFSlaxEHSR3x%2Bt8IoU%2FsJ4DQpCsx3%2F%2FcHfMVrSg5R4vsRRELPxS8GD%2FIAnNwJscopbcyp7tYC%2FN1pbnODFN82LZgvzdm6I9ozN6NoP7TCX0Ksf4R6nhgdxLyCrr24WuNDnRxJIflllYT5aG1pSjxNGAjRjr%2BpsmdG%2B%2BvgxlGXSEzMVZuiZZqAX1kbSRcMA9KuUg1xH8kN2Lvl4RZ1uJVL55YVUIZ40OMu5qzm161wwV7YWgH4lUxIgcxDnU8vEjdW7BW5rMyZx3tC%2FvIMqxD9e37tmpMyoxPboLS1BehMJzLocIGOqUBOsS6MfPzhjZPbBsPsvmIMd3F08zuS6XpzIvnZ%2FNShFxIHbfNpBl%2BhFWS%2Fsp80XS7MsuhKJ%2FtspsYB2gb9Sb6WiXqsnQnoTL54XbZAiahcCdHAP3oNI1Iu%2FDJdbV9VKiH778z0egaiGZOlvMUjkGRRb%2BRUEP5xM1XpuTt%2FjguDhERxJoJM7rB8pgp4I7boCvnZFfPSLGdpDa9BFlMrsWe72VpI7o8&X-Amz-Signature=646f3690c71ba4c72c67350cbb739c92a11716e7ac9241ede67c8d184fdc549e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
