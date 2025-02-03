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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6QZEUD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs%2FUl42sT0d%2BRb%2BruDrW5ci%2B%2FnF7SuVbtw2sRvITdIqAiEAlpi1lDQtfwXs039AkprI%2Fqzp56xjDdBn2Aayrh51Lawq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ3QZpW%2FZtQ%2B1IWuMCrcA9Ozg1CxZj0xCI0TV71hahsMwFvALoxuL8tq8IBdmqhv33qvufZrClq0Fk4E8m97c%2Fxws6f0pS3WAERvwj42P1HV4AOKkloml7qCxlMFfl9%2FtanIbHgki9lTlNA%2FWi4l130%2Fc0n1Jrz7ctVkY4ZC18taFdrB8YLGGf2NeoOIe5J65lkwN%2Fh9yxmKPUOvKR51UBZRjHlID4pwhzHUnJspDeVVmvuAMFYg7UEjqsWV6gcHrRb4LwulIEYX7j5DtzSKjY%2Byb0qJIaafGkSSHy9XEte0ajKkLUHGtKgGbiFNDkEy6AsHQDAnKeiXvbkfd9V4Tz%2FGuW2cVSWCx%2F%2BF33XiWLYOo55j5MhVEwhkyiCuFDED3rzJk8lofHFasK%2Fb5GYipNPuz%2F5Yaypa7TlKE2%2Bh34faYGpRzjJWiu6YvNkwmVuFvCsC4NYHmBYuFUthaINeqkxHm9dJpwYd9bjLTG0YTdAQb%2FNbX23K3Yjy66b01u%2FTIu4CZ6ZfAVnEtN3358uidhXiYq2l1V8790M8prvO90uYuTii%2FchwabZIORAwytdAUn%2B0ac%2FDVuSlLztVhQtwjiyW1sb5xc%2FoqSOQjqC%2Bq4TecYeU2dNmny75EZmkJI73FXHqMQ8E9jjXqTskMPCOg70GOqUByN6m9RQeLVaMFPy36vSZsqB0a4oCDhGUXUFDHXJvOa8okFz%2F5M7%2B9gc3%2FYLNaZLxqyLOkg8tuRusm3mez0xj5FvDpw3LmFj34yd%2BRxEepphXo%2Fb55pXrwXuIUW4Rwv0f%2BnAVQ7dnYXyjHlLkQCytQ4MdOpb5hcoAlSNOjkroMiVh64eA3%2FZWp942IUFEU7RiIn%2BWP7HI6ln9nKSatUPspKaA4%2FQM&X-Amz-Signature=8f8ce008508bd36a1bbb615aa5c6dd50c6caf4289b513e5b223247882e75a112&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6QZEUD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs%2FUl42sT0d%2BRb%2BruDrW5ci%2B%2FnF7SuVbtw2sRvITdIqAiEAlpi1lDQtfwXs039AkprI%2Fqzp56xjDdBn2Aayrh51Lawq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ3QZpW%2FZtQ%2B1IWuMCrcA9Ozg1CxZj0xCI0TV71hahsMwFvALoxuL8tq8IBdmqhv33qvufZrClq0Fk4E8m97c%2Fxws6f0pS3WAERvwj42P1HV4AOKkloml7qCxlMFfl9%2FtanIbHgki9lTlNA%2FWi4l130%2Fc0n1Jrz7ctVkY4ZC18taFdrB8YLGGf2NeoOIe5J65lkwN%2Fh9yxmKPUOvKR51UBZRjHlID4pwhzHUnJspDeVVmvuAMFYg7UEjqsWV6gcHrRb4LwulIEYX7j5DtzSKjY%2Byb0qJIaafGkSSHy9XEte0ajKkLUHGtKgGbiFNDkEy6AsHQDAnKeiXvbkfd9V4Tz%2FGuW2cVSWCx%2F%2BF33XiWLYOo55j5MhVEwhkyiCuFDED3rzJk8lofHFasK%2Fb5GYipNPuz%2F5Yaypa7TlKE2%2Bh34faYGpRzjJWiu6YvNkwmVuFvCsC4NYHmBYuFUthaINeqkxHm9dJpwYd9bjLTG0YTdAQb%2FNbX23K3Yjy66b01u%2FTIu4CZ6ZfAVnEtN3358uidhXiYq2l1V8790M8prvO90uYuTii%2FchwabZIORAwytdAUn%2B0ac%2FDVuSlLztVhQtwjiyW1sb5xc%2FoqSOQjqC%2Bq4TecYeU2dNmny75EZmkJI73FXHqMQ8E9jjXqTskMPCOg70GOqUByN6m9RQeLVaMFPy36vSZsqB0a4oCDhGUXUFDHXJvOa8okFz%2F5M7%2B9gc3%2FYLNaZLxqyLOkg8tuRusm3mez0xj5FvDpw3LmFj34yd%2BRxEepphXo%2Fb55pXrwXuIUW4Rwv0f%2BnAVQ7dnYXyjHlLkQCytQ4MdOpb5hcoAlSNOjkroMiVh64eA3%2FZWp942IUFEU7RiIn%2BWP7HI6ln9nKSatUPspKaA4%2FQM&X-Amz-Signature=e960471bd7fb00c42ac79b17f10ea0e95408b31a2812425bc570c1cfd790b8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
