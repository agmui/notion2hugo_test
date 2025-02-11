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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K26BG2C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZbNKT1HSHTs1iCPnmYMvmRHQUY3nwBmLnb%2B2TGNNLrQIhAIwGHmN%2Fb7dHt4DuQcETYdwMOLKKccf3U%2BgafLSnqR%2BeKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWYiqxAXgt7%2BXdNHAq3AMK7jQpe0%2FL4O2NBredKjxVDZhX6kPcclzhvS88S8riP2OYNe28Uq%2BGvJXJpsTX%2BpsDpLNGn6z%2Bf2JVucd81oyoSJczLko1VEovoUQnENpwHM4LPjBLph9xuh2jrgGlAXtMOGNNbhDXg7l52hhCFGYgjVUBZq6U0KdQWULxvw9WwVPLrIY%2B1cpsdAo95vVUJE5ncE4GgMuQtvOdblO46C45Qd4ZmjjFMyufhralM13UW9OV3szvr6OyfNXdW3%2BOrtWUWgjNtAd03y5XbOo0ilN5rpHE08jIwFJt%2FxwihGJfM6UFQAG7usLfcI3HCWu9Ruo2MUdYgsuiFb3Q%2F9v5tScLhiuOqBoPv%2BtS86wZjJpZ%2FU%2BI9bRP6gjYjG2m%2F5m6vNTG3YbijpG4abC%2Bydvd8%2FQiXxgJvWC3uCmTKha7TeUlOnLrhqPqaxK%2BSau1lZkCFRD3LJOv98lj2kSzVGkMHmX3ufQszLwfgBG9zll68hbSSMmUcovURaWEO1hjo7ZAENJF9%2FyxzkZMfKOOKtDcLntTM4YqDEFnqsLTTGAAgx3l%2Bn0soZI1T3hMCpQB7A4ZxTCKRR0nAxWOKn8uE0nwjul8k%2F3Q2AkfExmeRHhY%2BCFH09DcgYPJeDVyOCNxhDCt9qq9BjqkAf%2BwV1kHLXd2BkBOhe8hgG6kdTa3BezzcjRukStW5nUDL%2FZ3SQt1tigS3Bz2v13JEW2lhL3DmUduaFaz7S3aBfzWWWeuXETj%2BBR5yrS%2F1DCXNEVlJENwiU%2B6FDluqKxnuN%2BbQ16QFHwPr8A9BORgPmcBhCltANY3Ip8bskWqZ1vUQJ68nfM7kUH%2B1NMhY25XPrjT8Ez2imOhAeZ1fL1%2FQP2teM7S&X-Amz-Signature=b48bd89125e31b61cec8a7d17acdb66c9473d108ef9586fe17ba99fe830eec41&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K26BG2C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZbNKT1HSHTs1iCPnmYMvmRHQUY3nwBmLnb%2B2TGNNLrQIhAIwGHmN%2Fb7dHt4DuQcETYdwMOLKKccf3U%2BgafLSnqR%2BeKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWYiqxAXgt7%2BXdNHAq3AMK7jQpe0%2FL4O2NBredKjxVDZhX6kPcclzhvS88S8riP2OYNe28Uq%2BGvJXJpsTX%2BpsDpLNGn6z%2Bf2JVucd81oyoSJczLko1VEovoUQnENpwHM4LPjBLph9xuh2jrgGlAXtMOGNNbhDXg7l52hhCFGYgjVUBZq6U0KdQWULxvw9WwVPLrIY%2B1cpsdAo95vVUJE5ncE4GgMuQtvOdblO46C45Qd4ZmjjFMyufhralM13UW9OV3szvr6OyfNXdW3%2BOrtWUWgjNtAd03y5XbOo0ilN5rpHE08jIwFJt%2FxwihGJfM6UFQAG7usLfcI3HCWu9Ruo2MUdYgsuiFb3Q%2F9v5tScLhiuOqBoPv%2BtS86wZjJpZ%2FU%2BI9bRP6gjYjG2m%2F5m6vNTG3YbijpG4abC%2Bydvd8%2FQiXxgJvWC3uCmTKha7TeUlOnLrhqPqaxK%2BSau1lZkCFRD3LJOv98lj2kSzVGkMHmX3ufQszLwfgBG9zll68hbSSMmUcovURaWEO1hjo7ZAENJF9%2FyxzkZMfKOOKtDcLntTM4YqDEFnqsLTTGAAgx3l%2Bn0soZI1T3hMCpQB7A4ZxTCKRR0nAxWOKn8uE0nwjul8k%2F3Q2AkfExmeRHhY%2BCFH09DcgYPJeDVyOCNxhDCt9qq9BjqkAf%2BwV1kHLXd2BkBOhe8hgG6kdTa3BezzcjRukStW5nUDL%2FZ3SQt1tigS3Bz2v13JEW2lhL3DmUduaFaz7S3aBfzWWWeuXETj%2BBR5yrS%2F1DCXNEVlJENwiU%2B6FDluqKxnuN%2BbQ16QFHwPr8A9BORgPmcBhCltANY3Ip8bskWqZ1vUQJ68nfM7kUH%2B1NMhY25XPrjT8Ez2imOhAeZ1fL1%2FQP2teM7S&X-Amz-Signature=b8228e4b754f3805d677fb759957ad214f1655e2d0d0a056a5d9a9c737cb9be3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
