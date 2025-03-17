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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYXJ47RX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BghvUKDGn9I29gyqWsUV8fHeBpGrd6JqZLO8Ty3ylrAiBmsYWDCoB6SYxb9h5TyvoialS9ZSu4AJqPNjUJRvOVfCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMa%2B3vjvJx0AuJdoj8KtwDKehZjwVKW9Ft8REZg3G8okvUNHT6D%2B%2BwiDTMZ6uBC1B3%2F7LF%2BPlwEmpsYNh3ACdJ6XqtYBiyoRU026ZFYP7epqeVWPdIe7uaST7f6vJeXK%2Bi6Ti4mOHNxYiz%2FteBZhTrh6WPnpeeH2o%2FF24a0VXrOmArOtvEIEafo9QzxHnlaoGvRzrrl4qd8kGSkyyueBiuTYbWD3iQWf%2ByDp4JgsNx0mIWP7iqji%2F20XgLP5mZjcmr18qwk2FFGQ5lSYXj6QDZcFDRpp7oHM3ocBRi9kRSYUAGVe3eHwULPUEWacEI4wHMeu6GZmtoYTPwQOw%2B8CiBqhDBAxQ4q6hgjwriiFx633MMl2sSim3X8zy%2Fcaiz48WT5rfI7cpemlP3phh1v5d9i8BtcPKFklxfwulLjEvNWsadtxa92nG1qO1S3kyFM8PMWfn2W4hVJGXW08OuovIPn7t0zaw8Dyz%2BbfVZxxJpSdKOUz%2F3AvsjARQdBQMWQNorop3ZLfH6SBJvxqC%2FZmV2tgesf7UUtaeMvnicxPTPkJ8iuiS09g2P6YvTqGebG3EWA5F1z870KmjLHcSFxMP4LH5oqo1yNR%2FCjahoIlGtZ626ad971hvR9DTB2n7KZAc3unRl%2Bk7QsUg5NkswuILivgY6pgGqR0lT%2BzZfW0ptzvh2721zf1x367mSs5lfF4SYdfx1WgcimpEueGQ6ut4OJRh8Gk3o10m%2FJG%2Bh9XBL9ylHTkW4g2YNcdye8RsPAwIxCsckX3XyYIBq65WRl894doPFdjgoWR06yemtjfOlZrCC1nURhGlAhvGBAOc5zyhrzD8t4fGYaZlNr4VS7bxn5sysX%2BMwTI%2BWfTRAJQY7C54l4AlUF8LRLmJR&X-Amz-Signature=a0326c9861154fd3c7b37af4d05590fa1908a57490557bae75ed94b1cdb9c269&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYXJ47RX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BghvUKDGn9I29gyqWsUV8fHeBpGrd6JqZLO8Ty3ylrAiBmsYWDCoB6SYxb9h5TyvoialS9ZSu4AJqPNjUJRvOVfCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMa%2B3vjvJx0AuJdoj8KtwDKehZjwVKW9Ft8REZg3G8okvUNHT6D%2B%2BwiDTMZ6uBC1B3%2F7LF%2BPlwEmpsYNh3ACdJ6XqtYBiyoRU026ZFYP7epqeVWPdIe7uaST7f6vJeXK%2Bi6Ti4mOHNxYiz%2FteBZhTrh6WPnpeeH2o%2FF24a0VXrOmArOtvEIEafo9QzxHnlaoGvRzrrl4qd8kGSkyyueBiuTYbWD3iQWf%2ByDp4JgsNx0mIWP7iqji%2F20XgLP5mZjcmr18qwk2FFGQ5lSYXj6QDZcFDRpp7oHM3ocBRi9kRSYUAGVe3eHwULPUEWacEI4wHMeu6GZmtoYTPwQOw%2B8CiBqhDBAxQ4q6hgjwriiFx633MMl2sSim3X8zy%2Fcaiz48WT5rfI7cpemlP3phh1v5d9i8BtcPKFklxfwulLjEvNWsadtxa92nG1qO1S3kyFM8PMWfn2W4hVJGXW08OuovIPn7t0zaw8Dyz%2BbfVZxxJpSdKOUz%2F3AvsjARQdBQMWQNorop3ZLfH6SBJvxqC%2FZmV2tgesf7UUtaeMvnicxPTPkJ8iuiS09g2P6YvTqGebG3EWA5F1z870KmjLHcSFxMP4LH5oqo1yNR%2FCjahoIlGtZ626ad971hvR9DTB2n7KZAc3unRl%2Bk7QsUg5NkswuILivgY6pgGqR0lT%2BzZfW0ptzvh2721zf1x367mSs5lfF4SYdfx1WgcimpEueGQ6ut4OJRh8Gk3o10m%2FJG%2Bh9XBL9ylHTkW4g2YNcdye8RsPAwIxCsckX3XyYIBq65WRl894doPFdjgoWR06yemtjfOlZrCC1nURhGlAhvGBAOc5zyhrzD8t4fGYaZlNr4VS7bxn5sysX%2BMwTI%2BWfTRAJQY7C54l4AlUF8LRLmJR&X-Amz-Signature=7dbae0fb5e00f31f44ba36f9646682cafdd1fa418596297a912935a2b1fd43b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
