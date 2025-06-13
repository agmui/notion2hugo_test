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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXIQG3Z%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGBdPy7ZAsdz9jOFBQRmwWEP6iihSXPosmXpP2nDpVlnAiAE8Ta1y2Ejqhg7eRg62N69d2PHtFpBAIt4fH497saymyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7THptvHTlObUzSZTKtwDAEDG%2BSD8hbR9W1mj%2BZEiHomyJbKBrh1wAGqBiOaYMIBHFlanhWMVYx9wKC6Nk%2FTJn7FuBUSwLXaUcf6ysO1qRddqvT7d88qtaw2gW8yltuLfBkh%2ByAk6v5%2BvaIEaXDIRWFZJ5vyeQHL6QJwwZT%2BhosGGgjOCtmCSVCmT2lg%2FeXkAVBThOedqd6bgwaRjk25SCwkuHFnUCac2KHTaJUtoWUFagJd98OwvFoXJh787T1%2BlIOTBnk96%2B4r5tbJSIIjg9CRvPslPBjaBr%2Btm22ZlACR1M6R73EiZ6CV5qKoqukt20TY5foLImLcYb41tDJHTiz%2FB2dPbkmMowIpVoLcwUN7PnPgF1uVq%2BA0usj%2FEFV7JyaeDEtwPLFhXWj2d37vjBNhZMpfxk8%2B7Bu0HaQ9RUMQOITrASNKZc1NfQZQ3B80wXcW%2BRksZbqdVWfa0Dg1WOzuhiaQvHJTeVysz247a1bkmydxr3tIpZFZCQBjjFEGflfQe2hec7ZWrU8MEQrWsKFJkKqdUgSlBjUtqOizW%2Ft3pIeTao7ljHmDnFh%2Ff9v5yRmoN%2FfLpxf0MvGKLd05Q%2FayhlFXfFesTj4KwC8OscUngv8AoKTahZUxIJXfGdmrb6xhbnOliGKobuD8w57itwgY6pgEPxx0%2FloJ8y8OSg9qdDvsDaAtZfP7ed7RBjS%2Bhzeu4nw4vm%2FblpThpSpP8XjNOrMm16HKNcBckgBtfKQXxQXcWkghPM36kY0GfPpR%2Fb%2FQtksBbdW0yZTswxgpDTTlVNthqdEkFi6qAjDo5K7sEbKBOjtG0Y%2FmT1CNDAzXWpFTaupTJG1nh%2BJ%2BrCvws3JUwEQe%2Bks5TIRLXFn1ht3EjdjqYnzV3KqCe&X-Amz-Signature=aeef10bef5e291501ccf83b760a5e894575f7996acf246c1feeef85931a617d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXIQG3Z%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGBdPy7ZAsdz9jOFBQRmwWEP6iihSXPosmXpP2nDpVlnAiAE8Ta1y2Ejqhg7eRg62N69d2PHtFpBAIt4fH497saymyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7THptvHTlObUzSZTKtwDAEDG%2BSD8hbR9W1mj%2BZEiHomyJbKBrh1wAGqBiOaYMIBHFlanhWMVYx9wKC6Nk%2FTJn7FuBUSwLXaUcf6ysO1qRddqvT7d88qtaw2gW8yltuLfBkh%2ByAk6v5%2BvaIEaXDIRWFZJ5vyeQHL6QJwwZT%2BhosGGgjOCtmCSVCmT2lg%2FeXkAVBThOedqd6bgwaRjk25SCwkuHFnUCac2KHTaJUtoWUFagJd98OwvFoXJh787T1%2BlIOTBnk96%2B4r5tbJSIIjg9CRvPslPBjaBr%2Btm22ZlACR1M6R73EiZ6CV5qKoqukt20TY5foLImLcYb41tDJHTiz%2FB2dPbkmMowIpVoLcwUN7PnPgF1uVq%2BA0usj%2FEFV7JyaeDEtwPLFhXWj2d37vjBNhZMpfxk8%2B7Bu0HaQ9RUMQOITrASNKZc1NfQZQ3B80wXcW%2BRksZbqdVWfa0Dg1WOzuhiaQvHJTeVysz247a1bkmydxr3tIpZFZCQBjjFEGflfQe2hec7ZWrU8MEQrWsKFJkKqdUgSlBjUtqOizW%2Ft3pIeTao7ljHmDnFh%2Ff9v5yRmoN%2FfLpxf0MvGKLd05Q%2FayhlFXfFesTj4KwC8OscUngv8AoKTahZUxIJXfGdmrb6xhbnOliGKobuD8w57itwgY6pgEPxx0%2FloJ8y8OSg9qdDvsDaAtZfP7ed7RBjS%2Bhzeu4nw4vm%2FblpThpSpP8XjNOrMm16HKNcBckgBtfKQXxQXcWkghPM36kY0GfPpR%2Fb%2FQtksBbdW0yZTswxgpDTTlVNthqdEkFi6qAjDo5K7sEbKBOjtG0Y%2FmT1CNDAzXWpFTaupTJG1nh%2BJ%2BrCvws3JUwEQe%2Bks5TIRLXFn1ht3EjdjqYnzV3KqCe&X-Amz-Signature=3801d161125c57de132263dbf83b9b699598bf406f07743c1773b025da94f724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
