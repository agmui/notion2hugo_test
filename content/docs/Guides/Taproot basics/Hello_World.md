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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHGZIK6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHA%2F4GLyoeQSkNTHpa3V1kGZGzvBOIFTfD4Kxeq1VlhgIhAJf7xJu5gr2jcjPAjvHtY9kn%2Bc2ji%2FZJV40mYeZjaBw5Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxN%2BuzmJMjQeORfXqkq3AO4%2B1AD1wqVURAZ%2FrpMm%2FKSoe76fyDGRRWEIOh1KhDmkMNNOalFnMiJUK7UiIEsUmyXDzDXu83bEUBoqdevdhl5C3%2FD4pT0%2BnxrV6dlK8peORZnISBjdD942WSBXGMNCV7fpdyysf8DyXtj3yTJ%2BRrHFDljIs3a9Ymlc9dN2qTZdg7VbIET5PdMdixWbMmrR6WFUbHEPIkXSG%2FoMj%2B1Jv1xd3kteg2jKy26gsnBvm9qgEKyptEoITgyKL3xt1o0BQ773hbAF56%2BQEKz09ZjJ3UUVit9%2FTqvVbCpsv0od2dnlx4t3iuTIIil02fO5obEPyhUCdukWsK%2Bk3bKaCutLA7eAk26Ed8srltbAajLK0Td2RWyayM%2FASpE%2B30HTMfxVdYYC3wH3JulKFEjs%2FmlWxeTflw4XSxKOPF0yii3FYx2vNAtm5R4dCLIGfJUSnXRVk3IcUjgnjl60i0RZZgDmvJwAEtzrrdobBRSsk9lrw71hPivD0vN8PPM1sWt07LdUY5rpSwfP1nm2zSPrQT%2Fo5UjwkCppDjeLo8xHK1HHGVttBWX1eOzhftELlt%2BzlG4O4rGqpbGTrszc39%2Bh%2BhFHDaYeHPTyibHGidWGWw9gL%2B4pH3PtaPUZIdrKloP7TDg36u%2BBjqkAVqRCKpy1P%2BSR0FZbGLA7a7heOPGuXNOQS1xvp5Zg1Hlex%2BZ5HZ1sdR%2Bj7%2FkN3TQGsbqbhoYIr2f5C6V6n0WvuTt6Yx2v1B48me0EoUL4iMkT208Nn0Z%2F1zEAuisNHZPNcg5o2GK6Bi5W5yBRQs38r5U6y1rbOEEsqX2AX6cYBOEDmaDE6rgOIFOLM4HxshKUjc9xv0yITGRHLStp3WvcSDSwUNy&X-Amz-Signature=ed75a2dcc8af3fe9269cd19a2f4ffbb7c01b0db0a43b23cbd3fc46d13f30293e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHGZIK6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHA%2F4GLyoeQSkNTHpa3V1kGZGzvBOIFTfD4Kxeq1VlhgIhAJf7xJu5gr2jcjPAjvHtY9kn%2Bc2ji%2FZJV40mYeZjaBw5Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxN%2BuzmJMjQeORfXqkq3AO4%2B1AD1wqVURAZ%2FrpMm%2FKSoe76fyDGRRWEIOh1KhDmkMNNOalFnMiJUK7UiIEsUmyXDzDXu83bEUBoqdevdhl5C3%2FD4pT0%2BnxrV6dlK8peORZnISBjdD942WSBXGMNCV7fpdyysf8DyXtj3yTJ%2BRrHFDljIs3a9Ymlc9dN2qTZdg7VbIET5PdMdixWbMmrR6WFUbHEPIkXSG%2FoMj%2B1Jv1xd3kteg2jKy26gsnBvm9qgEKyptEoITgyKL3xt1o0BQ773hbAF56%2BQEKz09ZjJ3UUVit9%2FTqvVbCpsv0od2dnlx4t3iuTIIil02fO5obEPyhUCdukWsK%2Bk3bKaCutLA7eAk26Ed8srltbAajLK0Td2RWyayM%2FASpE%2B30HTMfxVdYYC3wH3JulKFEjs%2FmlWxeTflw4XSxKOPF0yii3FYx2vNAtm5R4dCLIGfJUSnXRVk3IcUjgnjl60i0RZZgDmvJwAEtzrrdobBRSsk9lrw71hPivD0vN8PPM1sWt07LdUY5rpSwfP1nm2zSPrQT%2Fo5UjwkCppDjeLo8xHK1HHGVttBWX1eOzhftELlt%2BzlG4O4rGqpbGTrszc39%2Bh%2BhFHDaYeHPTyibHGidWGWw9gL%2B4pH3PtaPUZIdrKloP7TDg36u%2BBjqkAVqRCKpy1P%2BSR0FZbGLA7a7heOPGuXNOQS1xvp5Zg1Hlex%2BZ5HZ1sdR%2Bj7%2FkN3TQGsbqbhoYIr2f5C6V6n0WvuTt6Yx2v1B48me0EoUL4iMkT208Nn0Z%2F1zEAuisNHZPNcg5o2GK6Bi5W5yBRQs38r5U6y1rbOEEsqX2AX6cYBOEDmaDE6rgOIFOLM4HxshKUjc9xv0yITGRHLStp3WvcSDSwUNy&X-Amz-Signature=dfd2dbbbf3d7495189266ebc7bc6d2791b16f97739c6dac0fe30bea68cd18730&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
