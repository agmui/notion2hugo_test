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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS657CPA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFuh99560sdoqil4AcSUxaVHaJ2G1YSBsHEy%2BRHhgA5gIgR5QIAwDJEE1LAbD61dAJXDPTI2LioABcV1YtwlmcdDkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBvnkKjNhPsX7mDuiSrcA58aVDEkhMxZX7DV1NxZxkyhPaD7FgtFk9fcpgcEh7e%2BWkXsiap9YczM2xNRHotH5opCd3HnqxnncU3wUD8oQ3Fog5RH537XNWHpOoz1Nuym2O9XdLzeGUqtQHj%2B%2B31J8DPFpswQZWyE%2FjEGcGt%2BKv%2Fm3On6th4XLXGuo03fXvaFOyLhRFUrnplEmRA2OdqhX1SEjiWnh0wfY2aL%2FJ%2FaVBDj0oATMwL5cwYtyCONactlVzK04LlAmm9nKkeNUP64RqNSjhTGZMMuQxQ9C68fojiNKhHnE8MrIU1F9EAzEy1MqG9%2FynxKtwM5Wqtabz9SzM2zM3u3ct0q9P4M44c2py4mPG%2BIDGnoHfi43NRoEZ%2BJkjP7J2iEIAxG8MHedvcr6Be7D1W2PyluoWnIlg8rnUZwqNROITf9AmizDUsnZzh5aRbLZ15Ufa6PE9K7uYg0bWKy0W2UDND4d%2FSn3Ckp6C8Da59JVQqJ4hfkKf5Cr8v72jeiAf2FS35dcrHbnGK5Mjose3NZIIFckGGYdxP6CJcT9mPZNm6yFOcoQREUkHtJ01Nt%2FcbL9JNdCW4LOGD4t%2FJazS5CZEna6z2hQqUApVHZi4NbJkX8OeYjxgncpryg42Bvvru96AaO8MTmMP64wL8GOqUBPXsXX7AbnX5uVoGavaNme%2BvOIHVz5Bz4jZW5oS9T66iFaHeIj1oPPK6Ar88GFkZVjtViepBplBVR7ry50qkg1HXt%2Bz%2Fyplo9HTyRRlYAB7q6rCiXPoYGJsE0YMasowN34IKJpkPxB0nIFscrNZuIsJpftN%2BwINxMdvDP9hoWNiovoA%2FxmcCO8989bK1%2Fv9E%2FhyFKfeNQEvE8aqkWCBkyFgGENtKs&X-Amz-Signature=c3afdfb6723f43c4dad8ff8c63ee029c67dce81dd2cc9499e828206fbdf9ba24&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS657CPA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFuh99560sdoqil4AcSUxaVHaJ2G1YSBsHEy%2BRHhgA5gIgR5QIAwDJEE1LAbD61dAJXDPTI2LioABcV1YtwlmcdDkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBvnkKjNhPsX7mDuiSrcA58aVDEkhMxZX7DV1NxZxkyhPaD7FgtFk9fcpgcEh7e%2BWkXsiap9YczM2xNRHotH5opCd3HnqxnncU3wUD8oQ3Fog5RH537XNWHpOoz1Nuym2O9XdLzeGUqtQHj%2B%2B31J8DPFpswQZWyE%2FjEGcGt%2BKv%2Fm3On6th4XLXGuo03fXvaFOyLhRFUrnplEmRA2OdqhX1SEjiWnh0wfY2aL%2FJ%2FaVBDj0oATMwL5cwYtyCONactlVzK04LlAmm9nKkeNUP64RqNSjhTGZMMuQxQ9C68fojiNKhHnE8MrIU1F9EAzEy1MqG9%2FynxKtwM5Wqtabz9SzM2zM3u3ct0q9P4M44c2py4mPG%2BIDGnoHfi43NRoEZ%2BJkjP7J2iEIAxG8MHedvcr6Be7D1W2PyluoWnIlg8rnUZwqNROITf9AmizDUsnZzh5aRbLZ15Ufa6PE9K7uYg0bWKy0W2UDND4d%2FSn3Ckp6C8Da59JVQqJ4hfkKf5Cr8v72jeiAf2FS35dcrHbnGK5Mjose3NZIIFckGGYdxP6CJcT9mPZNm6yFOcoQREUkHtJ01Nt%2FcbL9JNdCW4LOGD4t%2FJazS5CZEna6z2hQqUApVHZi4NbJkX8OeYjxgncpryg42Bvvru96AaO8MTmMP64wL8GOqUBPXsXX7AbnX5uVoGavaNme%2BvOIHVz5Bz4jZW5oS9T66iFaHeIj1oPPK6Ar88GFkZVjtViepBplBVR7ry50qkg1HXt%2Bz%2Fyplo9HTyRRlYAB7q6rCiXPoYGJsE0YMasowN34IKJpkPxB0nIFscrNZuIsJpftN%2BwINxMdvDP9hoWNiovoA%2FxmcCO8989bK1%2Fv9E%2FhyFKfeNQEvE8aqkWCBkyFgGENtKs&X-Amz-Signature=f4822c9479b250d97abfcced3f481bf3ab8dd3fb74edf85e9e7a869ab2e762a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
