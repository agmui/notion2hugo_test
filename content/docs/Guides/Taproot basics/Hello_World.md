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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFRDVXG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEpZ6%2BEofubuIcQgdWzfXJBAnoIiUmaCtuos0uHp8JLAIhAMnU9DUQdMYuPi7aFqKU8XY%2Fzt4%2BIztZgNbpjnXmjCasKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj9uNlZ2tRryxUSg4q3AMS9X9cPbZF3t8YZiM9hYRufC4olcDAobpNvbzj8nkD%2F3IGgxJsG%2BauRL%2FgKMWfeVfRUPuXp2TAhWlW3aw3UCqazodDyG3x9TFf%2FRMhhY3ntyoT6C00flBh9Y40%2Baj04vAHsypmsleCqSzbc1Summ4P7Ova3ZgQNnXMIa8hfQh2RnaWROxn5mSDdUs4xhuwAPddjj8GCzq1jyAn06TXllnNuVrdT8aoFd3g4%2Fix3jL4eNz9XoDXNyRDjSmvIulmV13H8QVFx8apOVcqtXJEjELV6aGMReGA3pHR0seGf%2BD3dYmgk9OXN60GvMDs1Tbb4fY626aJX1tEeflRYIzpptoKBygGXvW5uCboto6gGDlfWkwhOQdm%2Bu7CJ130OLLi7ib9xrYFUNdjaef0JeeBqtPppjPbF273k0HPacnRCsuzkY%2FJKnlTp9rxl%2BAyL86WBDkA0ioNpYYzBEFa2djQ7QqQqDK4NLF4xfuh7F6vZYFrujd%2B0McOYSNRTuU%2BZAHhLEBxF%2Bydm%2FkHBa5LrTJF%2Br2FOwdJn8MCfKk%2F366MsfNBKBPYYGs70DecFseyhpz6t%2FM9d021cX%2BsnE2%2FCGeTWk5QML3YdLLfN4IOzODOydv0cjVQ7UjX6tBbpxg%2BQDD6%2Bbi%2BBjqkASc72OM%2Fnxgr%2BBICg9VLVNBWGf0UOU%2B%2Bcvxr21yeIqYDRRkJtpp6bqsqKLM0XaJ41TFNoiPxVfeBwNmNdE8dyiCOUSL%2FfNk26slXzJFushjoDtfGXU26%2BhJoaLMZ09BjAS2eDGcGhP0dj9KCFX7oi53yVd%2BW%2F9xXha%2BroY2KlnwnaPSrU3YMNqnACxxtFwWf7zsFyt5SDEYwn6KNYXcuRrIXvHA9&X-Amz-Signature=e25705cf4b2e39e1298774846ffb1442b330f35444628c1a9047e25089b61b89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFRDVXG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEpZ6%2BEofubuIcQgdWzfXJBAnoIiUmaCtuos0uHp8JLAIhAMnU9DUQdMYuPi7aFqKU8XY%2Fzt4%2BIztZgNbpjnXmjCasKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj9uNlZ2tRryxUSg4q3AMS9X9cPbZF3t8YZiM9hYRufC4olcDAobpNvbzj8nkD%2F3IGgxJsG%2BauRL%2FgKMWfeVfRUPuXp2TAhWlW3aw3UCqazodDyG3x9TFf%2FRMhhY3ntyoT6C00flBh9Y40%2Baj04vAHsypmsleCqSzbc1Summ4P7Ova3ZgQNnXMIa8hfQh2RnaWROxn5mSDdUs4xhuwAPddjj8GCzq1jyAn06TXllnNuVrdT8aoFd3g4%2Fix3jL4eNz9XoDXNyRDjSmvIulmV13H8QVFx8apOVcqtXJEjELV6aGMReGA3pHR0seGf%2BD3dYmgk9OXN60GvMDs1Tbb4fY626aJX1tEeflRYIzpptoKBygGXvW5uCboto6gGDlfWkwhOQdm%2Bu7CJ130OLLi7ib9xrYFUNdjaef0JeeBqtPppjPbF273k0HPacnRCsuzkY%2FJKnlTp9rxl%2BAyL86WBDkA0ioNpYYzBEFa2djQ7QqQqDK4NLF4xfuh7F6vZYFrujd%2B0McOYSNRTuU%2BZAHhLEBxF%2Bydm%2FkHBa5LrTJF%2Br2FOwdJn8MCfKk%2F366MsfNBKBPYYGs70DecFseyhpz6t%2FM9d021cX%2BsnE2%2FCGeTWk5QML3YdLLfN4IOzODOydv0cjVQ7UjX6tBbpxg%2BQDD6%2Bbi%2BBjqkASc72OM%2Fnxgr%2BBICg9VLVNBWGf0UOU%2B%2Bcvxr21yeIqYDRRkJtpp6bqsqKLM0XaJ41TFNoiPxVfeBwNmNdE8dyiCOUSL%2FfNk26slXzJFushjoDtfGXU26%2BhJoaLMZ09BjAS2eDGcGhP0dj9KCFX7oi53yVd%2BW%2F9xXha%2BroY2KlnwnaPSrU3YMNqnACxxtFwWf7zsFyt5SDEYwn6KNYXcuRrIXvHA9&X-Amz-Signature=53cb55feeeecfc9973d47baf727870438b1d0f97ecf5976e8294ab4da4719d97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
