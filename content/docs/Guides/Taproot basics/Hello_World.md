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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ETU2NJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDhqAo0GanrVaZ5urmuLkSRd1rZ6dRqB707yWZ63ADJNAIhAJApDRmIW2YSmOJPPw0Hz8R%2FAdn5pPerXKR6D8%2FLozBFKv8DCCUQABoMNjM3NDIzMTgzODA1IgwvUXMNWARussVcA%2Fsq3APsQ5Oy0ACizm3WkcVsXI3RwTfbSZ4Ukdqwr%2FfFNlmycDhuDwwAIGLX1KQPbUJ2eaX7y%2FPn%2BLXgdWrudrFkon6bSh67QuM8pTAqc3P8QAiSfzFAPB%2BJLO1hbnPezmQ2j70UvSE4vg0kTNDwT6%2BE1nIyqMpMUT2ekeHoubs4lENxC1oFcx%2FaK%2F2T%2FwomJa7oW85pWpK5fjf%2BkAfdLCyKbNYPYV1rvWMwwNhrF6zgZ2GvBHf2LgptBQvm9Yg7lFARmf%2Bl5gGyO7FJDvj%2FhwufQKCKMmTlFUrmO08i578pT6XN2jxJAlIBPLLzjiI%2F6DGqxDaCVuSsRxI8%2F3tDBxMx%2BERfvMJsM4mGGgM9UEZ3eFYOkymzEeHU%2FXgGlHm4szaeeErxZNZqJWhY8m04AX3mwBGDrmWswsBjN8VnoWdt%2FvT%2FqcZcAV2K%2F%2Bs0NTUMxvJiRFqw7T3GEyLFhzPDESy2T7W5A4CDv%2Fe9BM2lYltX%2FLhAlOaUTSTDRweFapW5uXzcP6qYxGl0OiNIB8pMB2UClZX07iYuE0rx7AruutW3eU3HuTfgYrFj5TFgJgVL5gHTWt%2FQVB%2FEHi5MBmTyhfHr8aB4QXf%2B4bV5eAt3xK8uprhmdQG%2BTXuFXVgHpzKaiTD%2BiP%2FBBjqkARPMQm9RThRgU7FcSGgZe4rbV8%2Fjodxyzc3a1p3lIsLoamrA2LK97hnAREG0c6Lefk3GN7KOqAVY2hgl19dACKqYITuV00DvDXS%2FkBk0XMq%2BwCqPw5pY7wMg1gPG533zskw1UElD2Lqxb%2BON7byvfIvewoVOzQUAVO2oexOPG1l62YsBwB5czM3VVAlE%2BbLJ43bfKUpO4MB50874LiPAvSmDshJG&X-Amz-Signature=216fb4d6ade26a6e2f1832ccbe6f78c90269d148a522a7ecab5d6266e49ca4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ETU2NJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDhqAo0GanrVaZ5urmuLkSRd1rZ6dRqB707yWZ63ADJNAIhAJApDRmIW2YSmOJPPw0Hz8R%2FAdn5pPerXKR6D8%2FLozBFKv8DCCUQABoMNjM3NDIzMTgzODA1IgwvUXMNWARussVcA%2Fsq3APsQ5Oy0ACizm3WkcVsXI3RwTfbSZ4Ukdqwr%2FfFNlmycDhuDwwAIGLX1KQPbUJ2eaX7y%2FPn%2BLXgdWrudrFkon6bSh67QuM8pTAqc3P8QAiSfzFAPB%2BJLO1hbnPezmQ2j70UvSE4vg0kTNDwT6%2BE1nIyqMpMUT2ekeHoubs4lENxC1oFcx%2FaK%2F2T%2FwomJa7oW85pWpK5fjf%2BkAfdLCyKbNYPYV1rvWMwwNhrF6zgZ2GvBHf2LgptBQvm9Yg7lFARmf%2Bl5gGyO7FJDvj%2FhwufQKCKMmTlFUrmO08i578pT6XN2jxJAlIBPLLzjiI%2F6DGqxDaCVuSsRxI8%2F3tDBxMx%2BERfvMJsM4mGGgM9UEZ3eFYOkymzEeHU%2FXgGlHm4szaeeErxZNZqJWhY8m04AX3mwBGDrmWswsBjN8VnoWdt%2FvT%2FqcZcAV2K%2F%2Bs0NTUMxvJiRFqw7T3GEyLFhzPDESy2T7W5A4CDv%2Fe9BM2lYltX%2FLhAlOaUTSTDRweFapW5uXzcP6qYxGl0OiNIB8pMB2UClZX07iYuE0rx7AruutW3eU3HuTfgYrFj5TFgJgVL5gHTWt%2FQVB%2FEHi5MBmTyhfHr8aB4QXf%2B4bV5eAt3xK8uprhmdQG%2BTXuFXVgHpzKaiTD%2BiP%2FBBjqkARPMQm9RThRgU7FcSGgZe4rbV8%2Fjodxyzc3a1p3lIsLoamrA2LK97hnAREG0c6Lefk3GN7KOqAVY2hgl19dACKqYITuV00DvDXS%2FkBk0XMq%2BwCqPw5pY7wMg1gPG533zskw1UElD2Lqxb%2BON7byvfIvewoVOzQUAVO2oexOPG1l62YsBwB5czM3VVAlE%2BbLJ43bfKUpO4MB50874LiPAvSmDshJG&X-Amz-Signature=c9502023720c47f4c920586c3f126ac98a1dbb7796796f87a9a89221e18e206d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
