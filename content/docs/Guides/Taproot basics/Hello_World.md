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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMM3GK2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDV03dNFN%2FoR%2BBFjBoz6Dgs15BHNjvYAs6Xzq9X9e8sMgIgH%2FsHA4VpzsSWfDnTyDZS53RtEScWOfnZuNCE6Vw%2F8I0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F8F8H0%2Fgpn1ai2CircAy3X4Ef4FTJ7D7ZX0tXWDIj2gKaXXrmFJM1d%2FwHiMO9yWEhVkJ%2B3YsPnFx2IjEDpJ8cLpncbR7c2%2Ff2opUayN27w4YNERb3DDeLjZ8DGNpgDeN8qjKEy50F1cl%2Bg48zfXYTPvlGa0pUTj7mZ6iAZHsirId7QWEu%2BEI5iYcEahNkuAAK0SZDC2uO7sneTwUjSv1mPXeBwMmiMxly98%2B1ou0Z%2BssZKHEpg4v1QJuW%2B9gDOFz5wanyoQZraPr8HlTfOc5Vzo6GGlRuI5OiqlkmfhhYNANoK4Zuwbe54DDSv9M%2B0wWsnQrdEzQmEMnLpS5m9US3iUeGlgFYhnlF3lJiIVvhrdV3HOLL%2FYtcY0XPHyx8yirhNDYudPIx6dL6eqC7UhLUkmprdU1jsyVD%2Fs08ldAFJWo60066QPWQgy51aFb6a2RxPBjYq6gdKdEZNWKlxutXNFE3C79cjfW5JNXHRn3SFglDF2Z94a9liiJIrttYLyyIKGdlQD5m5sehyEgr90%2BQDguj79rNvaDr0lidQQJDBR7wbwWdGPNv3XNOhP7VJeaW9FEhxPh%2F7Fsy1qhRuf1q2pIZg%2FHpPWN6KyXDpbWOEvnLw99Fv3WX55eGNA0vcZrb6nJlvlNTxXZOVMJHJ08AGOqUBrSZUSiClpXhbuGNuoZZPRzbsyVI%2Bshll8XrCMPqxG%2FrOlG%2BXtBknGNtEmFsamepUkrwbC8qSuAQAAQcsPVjrHtAI9jJ6yr9yccLw3HygJeLPqLOZzLEOp4ZvR9TseqvisTe3yHNZYqt6wkPST9nBUFbYRL0pWkQVH29dn9jF38mOApJampRGOxLqNoUDw1mUSRN2PQyKeAog%2BFJ3N%2BohbuMO6KzD&X-Amz-Signature=a0f61379668e3b79cfcb40c34cb6e8aabff8594e73e5b02d77fdf2784df5427b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMM3GK2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDV03dNFN%2FoR%2BBFjBoz6Dgs15BHNjvYAs6Xzq9X9e8sMgIgH%2FsHA4VpzsSWfDnTyDZS53RtEScWOfnZuNCE6Vw%2F8I0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F8F8H0%2Fgpn1ai2CircAy3X4Ef4FTJ7D7ZX0tXWDIj2gKaXXrmFJM1d%2FwHiMO9yWEhVkJ%2B3YsPnFx2IjEDpJ8cLpncbR7c2%2Ff2opUayN27w4YNERb3DDeLjZ8DGNpgDeN8qjKEy50F1cl%2Bg48zfXYTPvlGa0pUTj7mZ6iAZHsirId7QWEu%2BEI5iYcEahNkuAAK0SZDC2uO7sneTwUjSv1mPXeBwMmiMxly98%2B1ou0Z%2BssZKHEpg4v1QJuW%2B9gDOFz5wanyoQZraPr8HlTfOc5Vzo6GGlRuI5OiqlkmfhhYNANoK4Zuwbe54DDSv9M%2B0wWsnQrdEzQmEMnLpS5m9US3iUeGlgFYhnlF3lJiIVvhrdV3HOLL%2FYtcY0XPHyx8yirhNDYudPIx6dL6eqC7UhLUkmprdU1jsyVD%2Fs08ldAFJWo60066QPWQgy51aFb6a2RxPBjYq6gdKdEZNWKlxutXNFE3C79cjfW5JNXHRn3SFglDF2Z94a9liiJIrttYLyyIKGdlQD5m5sehyEgr90%2BQDguj79rNvaDr0lidQQJDBR7wbwWdGPNv3XNOhP7VJeaW9FEhxPh%2F7Fsy1qhRuf1q2pIZg%2FHpPWN6KyXDpbWOEvnLw99Fv3WX55eGNA0vcZrb6nJlvlNTxXZOVMJHJ08AGOqUBrSZUSiClpXhbuGNuoZZPRzbsyVI%2Bshll8XrCMPqxG%2FrOlG%2BXtBknGNtEmFsamepUkrwbC8qSuAQAAQcsPVjrHtAI9jJ6yr9yccLw3HygJeLPqLOZzLEOp4ZvR9TseqvisTe3yHNZYqt6wkPST9nBUFbYRL0pWkQVH29dn9jF38mOApJampRGOxLqNoUDw1mUSRN2PQyKeAog%2BFJ3N%2BohbuMO6KzD&X-Amz-Signature=de5cfee2d87ccacffa494b151d89e83ed3d2f2f9ce6c91827511400287391858&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
