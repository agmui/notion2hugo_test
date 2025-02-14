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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPJTJE5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2M%2BZVSznSt3SIB5kA1u%2BRaWl8%2FwB42a6z7Dm5zm0UtwIgSKW9PRJxFsMXAwiVzDwfDDhZqvKv8BIO1hRJCNIvfuMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAW7o5yU3cni%2Fd9QnSrcA4tT0cwB5wfnQmVtwaC9SOkvu01ncv3M1%2BBHt4XJ6I%2FnfJ%2BhEjuVn1eCWMtv73cZArh13zHSBeW%2Flbjo5CVYQjsDwOeZKq0pxvUHRWJDlJxrEco1rVrSWOiakLhQNdSWVYVZkQjj6VpjRF3klR9XNIqnt%2FoPIDZreSq8wY2h4ZLVptbE8ny5FDjg7YKAOQDjltcqFc%2BLjr7YdtqwkJec%2BXFQSvOhALr9uHqOo49o1Fl%2B0Sp8b%2FhQxp23FgLFtKzT6%2BFIcQGnaKIK2LPzsbEmvqjvq1uYsq7RZdhlpQ9G0lqEi%2FApTLJ1V9JLUjAkuRXjHT8d%2BLo3pR20Wa8LFYUQxbP4mx2Y4n%2F9YitQghJNcgi4WJIlaOWHcIAfA1SAe0n9ONB%2B1M%2BaziYjnuLA8NE5pjfmVJ0DCO8WxQLAdvNOTnTRZhDpSNb9ghJ8zb3ljN9qETFCeJamzlp2JDBRbPuNPYflZMrjfeFGy5V5W1S5EHEVXYOLi%2FT2DYVyOVwUCboOlH4HWOIEdthVZW%2F1LDLYIWojZ784QltVDDKM1vJyscWXxJ6AQKrHGfmdQnkw6eRwRDWqJ%2FYBQ74KB1YK1NbYYFMdE0NNg09qPm7oPoqtNQziO8eE%2BSjqCrNlY9KiMOjqvL0GOqUB3Hf98uZ7jf0pPakvjEK%2FxDMJC%2FWdBWWLXoCurynyYfBRlqLP3I3h%2BKcF7jcIqXtfX%2BmZFxFT9isos%2BOexhIf4NtrcotnS%2BuSO488jcxwme4Y9UNYXuH7PCJfivW45uyl2mzbfYT%2FShu2gUkqcVfYLvy%2B9g3SP73VWm5A%2Fuh3880wSrYwoS7lqKP%2FRlX0OAaq6dzrGPtZf2zl%2BH5MgFhplgO7sBRb&X-Amz-Signature=56f674f463a68063703e39ed88fd10c31a9f3f3d78bc2274843a824018063e40&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPJTJE5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2M%2BZVSznSt3SIB5kA1u%2BRaWl8%2FwB42a6z7Dm5zm0UtwIgSKW9PRJxFsMXAwiVzDwfDDhZqvKv8BIO1hRJCNIvfuMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAW7o5yU3cni%2Fd9QnSrcA4tT0cwB5wfnQmVtwaC9SOkvu01ncv3M1%2BBHt4XJ6I%2FnfJ%2BhEjuVn1eCWMtv73cZArh13zHSBeW%2Flbjo5CVYQjsDwOeZKq0pxvUHRWJDlJxrEco1rVrSWOiakLhQNdSWVYVZkQjj6VpjRF3klR9XNIqnt%2FoPIDZreSq8wY2h4ZLVptbE8ny5FDjg7YKAOQDjltcqFc%2BLjr7YdtqwkJec%2BXFQSvOhALr9uHqOo49o1Fl%2B0Sp8b%2FhQxp23FgLFtKzT6%2BFIcQGnaKIK2LPzsbEmvqjvq1uYsq7RZdhlpQ9G0lqEi%2FApTLJ1V9JLUjAkuRXjHT8d%2BLo3pR20Wa8LFYUQxbP4mx2Y4n%2F9YitQghJNcgi4WJIlaOWHcIAfA1SAe0n9ONB%2B1M%2BaziYjnuLA8NE5pjfmVJ0DCO8WxQLAdvNOTnTRZhDpSNb9ghJ8zb3ljN9qETFCeJamzlp2JDBRbPuNPYflZMrjfeFGy5V5W1S5EHEVXYOLi%2FT2DYVyOVwUCboOlH4HWOIEdthVZW%2F1LDLYIWojZ784QltVDDKM1vJyscWXxJ6AQKrHGfmdQnkw6eRwRDWqJ%2FYBQ74KB1YK1NbYYFMdE0NNg09qPm7oPoqtNQziO8eE%2BSjqCrNlY9KiMOjqvL0GOqUB3Hf98uZ7jf0pPakvjEK%2FxDMJC%2FWdBWWLXoCurynyYfBRlqLP3I3h%2BKcF7jcIqXtfX%2BmZFxFT9isos%2BOexhIf4NtrcotnS%2BuSO488jcxwme4Y9UNYXuH7PCJfivW45uyl2mzbfYT%2FShu2gUkqcVfYLvy%2B9g3SP73VWm5A%2Fuh3880wSrYwoS7lqKP%2FRlX0OAaq6dzrGPtZf2zl%2BH5MgFhplgO7sBRb&X-Amz-Signature=500a4f37b0a7e6509d6bec76f26b33be285eebdef45c155a7223fe61bce0acc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
