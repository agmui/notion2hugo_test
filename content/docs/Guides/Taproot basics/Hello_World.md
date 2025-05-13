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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNPI2GH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC9ZppnYgrDZRDRBhhEdS6mLYwPZ39orkbiFYV7TMrz7wIgclto7dO2pCbIeDwUqf827%2BK%2B0fBUC9aC7fx5PvIgbQAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLla0SFsK%2BvojIbyBCrcAw4aRQpPNUhJZSTUddhi2QS7SWxFNRKV0nJMS74%2Bc4DDc5wqve%2FJlvusyDCf8VfRgt092KQA%2B8SJ%2BGd4HUt2UT0YfIfyGSgsFYkKLtmYNMCvDpGlwLCg7qyw0DDz67GUbZrOCdPpSTZIxKIMkjAagFQ0vuRdgi7zln0D9UiPar6h56uemrXIm8kxq2hZM1DTODG1reIXEs2lsWgny74dwLw2bHchRiPmNdop2jIloZESn4xmt6%2B7gmnTtT9JrXWY0JR0zV7eeOWpdULSHD52%2Bkua28ifLusQmT3XXvUHP%2B1TWKeb%2B8a7ihgwzuPTDyqWaDNamN9W6usckwcZyd3U5jxZpXBUUspFu7DSmH%2Bq96aJ4LSpZr6JehP0iLSZG%2FyQ49eOtPEOKzeowR8cRGLNL%2FqnAVxNaCe79OKytczlJr9xKNZBdzkSNNye%2FD8sY%2Br3iEjyLpGYbhCPdMclglFvt2euO8ZvM%2B6bpeBfexa7SXXAn5fHrbtssSUwRW7bVKA5JsgPrUckukmrnia5iNXoxn%2BPRZFJliwVwLJJCexyL8Tl2A2IsY0LsaQkj3hXfbsh4kyObXRlFSMKNGqerc2VH76AA51JzQMSuo36wwf1RW2OlULGgVwFxNSUGwOhMLf3isEGOqUBfEePRCjyoiNNCQza%2BNyuOvaCIUB8O3YvBwEccB98PDsv1jDPXzvJ4d4XIRwzsnMLJPVsH90ou2prxK74ZwRFpq4zx0OtI%2BJlGQQ1ezPI%2Biwnw8CRxIpTB%2B94hrncfkh8c%2FSS%2Ft9CDjO%2BWI5Hw3XnUAQ0Ae2DuzPb%2FU7rWzMrH057gHf2%2ByQTNfnaxNr4%2FtfjprdWPlhpf9KXGX%2BoaIaT652tzA%2Fs&X-Amz-Signature=a94a0fa538f1a92cf5a326d01c7b263cb11977a59395bd3e61ff32567ca43070&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNPI2GH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC9ZppnYgrDZRDRBhhEdS6mLYwPZ39orkbiFYV7TMrz7wIgclto7dO2pCbIeDwUqf827%2BK%2B0fBUC9aC7fx5PvIgbQAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLla0SFsK%2BvojIbyBCrcAw4aRQpPNUhJZSTUddhi2QS7SWxFNRKV0nJMS74%2Bc4DDc5wqve%2FJlvusyDCf8VfRgt092KQA%2B8SJ%2BGd4HUt2UT0YfIfyGSgsFYkKLtmYNMCvDpGlwLCg7qyw0DDz67GUbZrOCdPpSTZIxKIMkjAagFQ0vuRdgi7zln0D9UiPar6h56uemrXIm8kxq2hZM1DTODG1reIXEs2lsWgny74dwLw2bHchRiPmNdop2jIloZESn4xmt6%2B7gmnTtT9JrXWY0JR0zV7eeOWpdULSHD52%2Bkua28ifLusQmT3XXvUHP%2B1TWKeb%2B8a7ihgwzuPTDyqWaDNamN9W6usckwcZyd3U5jxZpXBUUspFu7DSmH%2Bq96aJ4LSpZr6JehP0iLSZG%2FyQ49eOtPEOKzeowR8cRGLNL%2FqnAVxNaCe79OKytczlJr9xKNZBdzkSNNye%2FD8sY%2Br3iEjyLpGYbhCPdMclglFvt2euO8ZvM%2B6bpeBfexa7SXXAn5fHrbtssSUwRW7bVKA5JsgPrUckukmrnia5iNXoxn%2BPRZFJliwVwLJJCexyL8Tl2A2IsY0LsaQkj3hXfbsh4kyObXRlFSMKNGqerc2VH76AA51JzQMSuo36wwf1RW2OlULGgVwFxNSUGwOhMLf3isEGOqUBfEePRCjyoiNNCQza%2BNyuOvaCIUB8O3YvBwEccB98PDsv1jDPXzvJ4d4XIRwzsnMLJPVsH90ou2prxK74ZwRFpq4zx0OtI%2BJlGQQ1ezPI%2Biwnw8CRxIpTB%2B94hrncfkh8c%2FSS%2Ft9CDjO%2BWI5Hw3XnUAQ0Ae2DuzPb%2FU7rWzMrH057gHf2%2ByQTNfnaxNr4%2FtfjprdWPlhpf9KXGX%2BoaIaT652tzA%2Fs&X-Amz-Signature=b71b7fe1d9c784b0f2e7c1fa857a24d01c1068f53eafd0643fba9202345e4b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
