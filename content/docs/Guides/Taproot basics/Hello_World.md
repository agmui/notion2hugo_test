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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PKNFCV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG0CF32mIKO7oLuJagAwtvzY5ajSz0Mj5lGAv0b7qcfYAiANiPVqT3VSYXlE5DKRKL6BirTkjWNrS1%2BWedDVUZFSUCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiaXoimn%2B5OfNNqVIKtwDJr6FTZvVJCGTYuIPHOxlXqlNEegwMWZIhUafmifLCUkFneTRudUFiZldnd7ViUS3kZbcwdWceA4%2Fi3GefEVoMEawW7GtHWZiCvRSIDkv9Iwrc%2BZM0e6XV9Ve9zbiQpZdJngQdpiBo4PumpqN017e7hPzGl6iRkX%2BKqxs%2FeS29Ug8aROYEiPaNz9ZawN%2FkGN5pez2Uzsd9453R9NGJPET3sMzOFeMvoxks2GMnVRKDbzkPE%2BGSX4Q4Mf1tF4PKjUyBTM%2Fup7S4FH%2Bk5XoVlM3Udm0uGa%2BmhMlg%2BWq3xWV0bHvj5V%2BWGQNgVMX47OzVHbSolON2fmP2KqQe%2B7W2DmYmOJpNFy%2BgsPrJMdZank%2FytdN%2B4Yl%2B47NOZh%2F8dlrohT2q2poMyKJhFO7GahSnZlEHt0febiKsltxixnu%2BEPHe18JrCtOSToMqOvXRGZtDTf%2FjiNMaZR6t20K1WmuulEtr7US245xJALJ6Mvarcr90kupaCJHG1qDfTaw6nTMNu2EzHpsdoMKK3rTY7A15esKsxgIUcVSwcDZ3RtLZE7QXaQupSjodLfTwhBcAybtcq9jVlx3jY41Guiv8cxU1zf1Ba1E0%2FyO8r6kTtZ5JelHPz328fIviGEojw5pa58w3tKZwAY6pgFLKPkAq5DJCIN7l44LYR6VparScOgcDURkD8CzeZSmm%2BlVkvc%2BVByukULKa0kt2PKvVIxD326fx97VXT06iVvATDCMRMX4gDq1SVfc4L4yrgsqm2fehIBTf5rAqqvISFM0cBvQG%2Fo2yYNeO7z8G1eBUQuaUhxlJQdfZxH0gXNZos%2FW8uCLsdBgGH6gP%2F%2BgPlYultdsqgUS8rnQxtcGK5Nexvs21HWO&X-Amz-Signature=79bc1fd4efb20db5d9ecef19a04d46fd2a5a5989f6b5b3b0fcbe8d497f9106f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PKNFCV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG0CF32mIKO7oLuJagAwtvzY5ajSz0Mj5lGAv0b7qcfYAiANiPVqT3VSYXlE5DKRKL6BirTkjWNrS1%2BWedDVUZFSUCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiaXoimn%2B5OfNNqVIKtwDJr6FTZvVJCGTYuIPHOxlXqlNEegwMWZIhUafmifLCUkFneTRudUFiZldnd7ViUS3kZbcwdWceA4%2Fi3GefEVoMEawW7GtHWZiCvRSIDkv9Iwrc%2BZM0e6XV9Ve9zbiQpZdJngQdpiBo4PumpqN017e7hPzGl6iRkX%2BKqxs%2FeS29Ug8aROYEiPaNz9ZawN%2FkGN5pez2Uzsd9453R9NGJPET3sMzOFeMvoxks2GMnVRKDbzkPE%2BGSX4Q4Mf1tF4PKjUyBTM%2Fup7S4FH%2Bk5XoVlM3Udm0uGa%2BmhMlg%2BWq3xWV0bHvj5V%2BWGQNgVMX47OzVHbSolON2fmP2KqQe%2B7W2DmYmOJpNFy%2BgsPrJMdZank%2FytdN%2B4Yl%2B47NOZh%2F8dlrohT2q2poMyKJhFO7GahSnZlEHt0febiKsltxixnu%2BEPHe18JrCtOSToMqOvXRGZtDTf%2FjiNMaZR6t20K1WmuulEtr7US245xJALJ6Mvarcr90kupaCJHG1qDfTaw6nTMNu2EzHpsdoMKK3rTY7A15esKsxgIUcVSwcDZ3RtLZE7QXaQupSjodLfTwhBcAybtcq9jVlx3jY41Guiv8cxU1zf1Ba1E0%2FyO8r6kTtZ5JelHPz328fIviGEojw5pa58w3tKZwAY6pgFLKPkAq5DJCIN7l44LYR6VparScOgcDURkD8CzeZSmm%2BlVkvc%2BVByukULKa0kt2PKvVIxD326fx97VXT06iVvATDCMRMX4gDq1SVfc4L4yrgsqm2fehIBTf5rAqqvISFM0cBvQG%2Fo2yYNeO7z8G1eBUQuaUhxlJQdfZxH0gXNZos%2FW8uCLsdBgGH6gP%2F%2BgPlYultdsqgUS8rnQxtcGK5Nexvs21HWO&X-Amz-Signature=b47e7e089cdccd2ba3bbf2b31fa845f5c724349c8509fb1c88167042b484b4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
