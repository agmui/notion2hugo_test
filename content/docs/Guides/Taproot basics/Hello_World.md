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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTECRW5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWWw9igJPnnEgRH3klPlh65nJph0jw6unJHJAX%2BelI5AiAx5%2FNXFUc%2FlZsFzdXZtmSPvKjvLmk54vngteAYF3Kh7ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzz94b0cznG5Avq%2F7KtwDtDNHSxUFgxmzQZt5czwq4OaX3PVsgoMrfxNZuED66V4ia%2BnsgiZlDAteDzbqGhLGLredvqnUzH6ZTJdwQs9CSWCGZh%2FnVP9zfIoUPyCk%2FWcVN3sHSjkcixKeGXx%2F2Hccdq%2FkwXTpRR4boqPpLUVERSu2rLpTOUK%2FjrevDsvJuZXXGLuZSKApV%2FlrtzyodSY5hLdqWtaBt%2FEKE3kIv%2FxlYBN5TpWCvHXXl6UkoEe1PYa%2BmdTSMw5ielkcMG6f1eLkltkSlGD7X87CRNXKAgkIFtyloLol5bpQMPiQSqAddGxGVmMYO7YEF%2BcM7BZdgWAYxL6mT%2BvwFGUamxE1mVTia93zn6BriPpqGaYqYT28yJfiDfJdSBMtGAU2aCNOiFp61KolAvn%2FLOvRVX6qZq6nU0e3SD4Gncxm04DCOxZIlfX%2FBj6fD0IeumBQY2tdkoyMX4Am8K%2BqZkk8sOkrWjpLjjGWi5GpfRhY3C31Wh0XKEFV4hj3MTYvHfu4Dd6dHxs3J20LaBZNvPWFNgLS6RQFAMWRCgWz%2FaJvhJVGTdo8NgMFTuM%2BRAk0lXfbUJ5qqztbaT9xjWp0%2FhvG2zVjyEPQ3zrK8%2FYaBUfr6TYGRAuME8D6mtS5065ug301rpswzMnjwAY6pgFdoNvkLXfiFK9LVrw37rfXoP3eQwKPBDatCLyKFJAn7ZDleNTqYWlOSB8N0zt7kMW3k3jJMjEgBU0XfIX2Bs%2B4ZzKGDtDe%2BWr2a7wcLDpHLiZQ0PckTDdDsP34AHoxEKjlhA04qMuX8h%2BWNQpe0uzDvLOEV4hiE6%2FB4Gtb8%2Fp5jh6dGl3YnSWoS%2BdW4KtDOZpMY2upGof5kxgYQMZqvM0BDYRJrSgt&X-Amz-Signature=65e2c5e52947f27a8a8cd7edb2438f2d9488c6b396892fca662e6f0aa947105b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTECRW5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWWw9igJPnnEgRH3klPlh65nJph0jw6unJHJAX%2BelI5AiAx5%2FNXFUc%2FlZsFzdXZtmSPvKjvLmk54vngteAYF3Kh7ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzz94b0cznG5Avq%2F7KtwDtDNHSxUFgxmzQZt5czwq4OaX3PVsgoMrfxNZuED66V4ia%2BnsgiZlDAteDzbqGhLGLredvqnUzH6ZTJdwQs9CSWCGZh%2FnVP9zfIoUPyCk%2FWcVN3sHSjkcixKeGXx%2F2Hccdq%2FkwXTpRR4boqPpLUVERSu2rLpTOUK%2FjrevDsvJuZXXGLuZSKApV%2FlrtzyodSY5hLdqWtaBt%2FEKE3kIv%2FxlYBN5TpWCvHXXl6UkoEe1PYa%2BmdTSMw5ielkcMG6f1eLkltkSlGD7X87CRNXKAgkIFtyloLol5bpQMPiQSqAddGxGVmMYO7YEF%2BcM7BZdgWAYxL6mT%2BvwFGUamxE1mVTia93zn6BriPpqGaYqYT28yJfiDfJdSBMtGAU2aCNOiFp61KolAvn%2FLOvRVX6qZq6nU0e3SD4Gncxm04DCOxZIlfX%2FBj6fD0IeumBQY2tdkoyMX4Am8K%2BqZkk8sOkrWjpLjjGWi5GpfRhY3C31Wh0XKEFV4hj3MTYvHfu4Dd6dHxs3J20LaBZNvPWFNgLS6RQFAMWRCgWz%2FaJvhJVGTdo8NgMFTuM%2BRAk0lXfbUJ5qqztbaT9xjWp0%2FhvG2zVjyEPQ3zrK8%2FYaBUfr6TYGRAuME8D6mtS5065ug301rpswzMnjwAY6pgFdoNvkLXfiFK9LVrw37rfXoP3eQwKPBDatCLyKFJAn7ZDleNTqYWlOSB8N0zt7kMW3k3jJMjEgBU0XfIX2Bs%2B4ZzKGDtDe%2BWr2a7wcLDpHLiZQ0PckTDdDsP34AHoxEKjlhA04qMuX8h%2BWNQpe0uzDvLOEV4hiE6%2FB4Gtb8%2Fp5jh6dGl3YnSWoS%2BdW4KtDOZpMY2upGof5kxgYQMZqvM0BDYRJrSgt&X-Amz-Signature=09109ef84b58021252934c1eedadb640caa310e307b8f7a6d831fca55c730cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
