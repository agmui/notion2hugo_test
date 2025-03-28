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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQAP2KR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4jr6oAxExAxJSyba%2FC9GTQX3MXzWH4QyDAGKoPJ%2FjFAiEAliBoSwM9XrSio75CxSAM3hpQziXFWLgzAnodePMt6ygq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOpMRXTjkkixfy6jlSrcA4z900W1957jniS%2F6rmsAGPMJdhViIvu1DcTVDnsvAR9mZT%2F1L0hPTSJaOHLl2bG4DvZ489mCLuGMbyGevbWAtUnJ%2FzXmPCgi2v%2FLfSW9aWTvRMvdmnaYufSb28dMmYvOwBw1BuZspEpLp3CUV%2BEnMW8J35YtQxgRzLsrF0yqrMUeVv6%2F166q0HX6KCkBS4DyC%2FjFRzzrPX%2BtCYKTqsxtziMh0B4Gin6l4XzJ5UG%2Bd%2BwxYYnaT%2FFLvHp6bHdnvLP9xAppbtyKbTJNZM4uXAGCCajQZCFGLqQpdDFpmJ8jRQwTbJ%2FMvssAyxEYWCMA0AeddD9CG35qS8we7Kenifa64NN%2Bi3sDK46M6o1AFoWQ4ARr64ycV8wj7m9JdSgAnOM0iEjK6bKw7B%2FmXAk7DSpO8q4JrJD2iAu4kJY6qLNZr%2FztN%2FRCroFgoLvQ8sAnVS4JVNmPQnmh3iI6%2Br92Mg2M9vJTuLn66%2B83%2BuTymVov2IiawzUYKDYIDYWiEDwJDybDbNYZQyze0rMOmRjNnZP2PZyOeVGzsxgryUAe1I8j8IsRD0YYcFq5dcvVekLxZ%2F3zdncZQZ9dX1YdnY%2FQ%2BbTs%2Fg3YQF2kLtE7Sn%2F2XxpkSsbHH%2FSoVjr5ivMHFMbMP7tmr8GOqUBac3J1i1w50yt9XXhfBqvIi2KUFIBNRzDytNWb9aErr%2FvzBjwllcRCkl3uVsAoLT7hjcjCFJPyMm2%2FrGTIgzK%2FSdbWAOIoNH06%2B3TOw2u%2F70lsnMKucXJ3w3mXqPKzEgc6LHwlDJcjghxj4znXb8pmnte68hBQrcfsowYOulFSZP59Kec9foqoYsv8Q2rwsiAKD029djUg4Dt18z2NE4rVwrLQZXb&X-Amz-Signature=446f188accefcdbab4adeb47cb1625c02592c25b09141995e344e2a6b07432be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQAP2KR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4jr6oAxExAxJSyba%2FC9GTQX3MXzWH4QyDAGKoPJ%2FjFAiEAliBoSwM9XrSio75CxSAM3hpQziXFWLgzAnodePMt6ygq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOpMRXTjkkixfy6jlSrcA4z900W1957jniS%2F6rmsAGPMJdhViIvu1DcTVDnsvAR9mZT%2F1L0hPTSJaOHLl2bG4DvZ489mCLuGMbyGevbWAtUnJ%2FzXmPCgi2v%2FLfSW9aWTvRMvdmnaYufSb28dMmYvOwBw1BuZspEpLp3CUV%2BEnMW8J35YtQxgRzLsrF0yqrMUeVv6%2F166q0HX6KCkBS4DyC%2FjFRzzrPX%2BtCYKTqsxtziMh0B4Gin6l4XzJ5UG%2Bd%2BwxYYnaT%2FFLvHp6bHdnvLP9xAppbtyKbTJNZM4uXAGCCajQZCFGLqQpdDFpmJ8jRQwTbJ%2FMvssAyxEYWCMA0AeddD9CG35qS8we7Kenifa64NN%2Bi3sDK46M6o1AFoWQ4ARr64ycV8wj7m9JdSgAnOM0iEjK6bKw7B%2FmXAk7DSpO8q4JrJD2iAu4kJY6qLNZr%2FztN%2FRCroFgoLvQ8sAnVS4JVNmPQnmh3iI6%2Br92Mg2M9vJTuLn66%2B83%2BuTymVov2IiawzUYKDYIDYWiEDwJDybDbNYZQyze0rMOmRjNnZP2PZyOeVGzsxgryUAe1I8j8IsRD0YYcFq5dcvVekLxZ%2F3zdncZQZ9dX1YdnY%2FQ%2BbTs%2Fg3YQF2kLtE7Sn%2F2XxpkSsbHH%2FSoVjr5ivMHFMbMP7tmr8GOqUBac3J1i1w50yt9XXhfBqvIi2KUFIBNRzDytNWb9aErr%2FvzBjwllcRCkl3uVsAoLT7hjcjCFJPyMm2%2FrGTIgzK%2FSdbWAOIoNH06%2B3TOw2u%2F70lsnMKucXJ3w3mXqPKzEgc6LHwlDJcjghxj4znXb8pmnte68hBQrcfsowYOulFSZP59Kec9foqoYsv8Q2rwsiAKD029djUg4Dt18z2NE4rVwrLQZXb&X-Amz-Signature=028c6db74d87763473ec6b6df061e3c1ea97513e9c2527e825154bfa7df87cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
