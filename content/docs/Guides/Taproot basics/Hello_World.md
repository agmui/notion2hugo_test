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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E64VTO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEM6ZrbHd1eZawxiUyq%2Bx2lElY09LK8Hz5Ylb41yxHCtAiEAmGGTDQnKPoOD6v731QBrOx%2FbtBJZTHPV5EoEiSjZ148q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEkWUorlodNYJouYRCrcA%2F%2BH1L7KGcSPaexs%2Bc5kfMJgkteOXR3c%2FhnQdxlFiEcwoTqGR%2F%2Bvn6gMIzHRr6wGIXdpzWLfcrf06XYt5gy2SaZmTM2YJ9bFB3wgX1eouC2Zy9UF5zsPMYNSA0sQU%2Fo2AEH8iOhSpIYQD62r5Xq1UdjK2G022z6YNm2qG7ytwuzUaZeW2OiOCLyUOFzMu98Pv4%2BOqvbrvj%2FdC71R3DME4yRh%2B9Q9AdXT3IdE%2FAX%2BuR3oAPpRW0B47V45dYbzHT%2B4CsLqnvBRcsneQFLvuplcgG%2FN9SJ2UhMtYLGcl7AQ2OalidO97e2Xy3sNY4uiwptKuXXBWHZlJ4uqhi7bvJ5uovWCj3pjWszCB9hwrIkr%2Br8XzVOQkATztle6upPQEj7PvyqZNGEY7eIGTvjncKutOQ1tEEWtKN45icU1lxP%2F9sXrfV8aqFPvrWNjP1sq6XYhB3AjDyQB18Rsg%2FDCqkTaTfe%2FbjgZaDmM1T9RlQFnuMh9tEmsZQ1Vy%2BOMUFQkOAsvoiDr7XmXqni6n7%2BR%2B9UL%2FpehVgBGndkWPBuWNWcFSw6NiyhHqAY4W%2F3QyozKC93%2FQgdSIlFeG8jkCByZYIIKIxAWRm3LOn%2BoDWfy0kAbjOspwXiiNf3qUzNA1fOJMOunob8GOqUBOgQExy71giCFIk4597KhoUPmizHayIaXsph%2FpBKI2OuBc02YXaVd5L0WJepDp%2BuwmD2asAGsPaDZrf%2F4yT7kZxYnXWC4XQddcaF%2FwRck9TaLITyQuXUtBT3%2BrTuAPbcuqCtSPYtNpjIS8r2%2BvRwJ%2BvtUyLfAyEmBLx9eO8PfjFNq%2B2MpLSf64VB9pKtZdFHEXprhFLzgV08i%2B3ON%2FqgXT62d2woX&X-Amz-Signature=196a940418bb407409602958eda5bee4d799200430a0d5a81c8ef3141f665563&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E64VTO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEM6ZrbHd1eZawxiUyq%2Bx2lElY09LK8Hz5Ylb41yxHCtAiEAmGGTDQnKPoOD6v731QBrOx%2FbtBJZTHPV5EoEiSjZ148q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEkWUorlodNYJouYRCrcA%2F%2BH1L7KGcSPaexs%2Bc5kfMJgkteOXR3c%2FhnQdxlFiEcwoTqGR%2F%2Bvn6gMIzHRr6wGIXdpzWLfcrf06XYt5gy2SaZmTM2YJ9bFB3wgX1eouC2Zy9UF5zsPMYNSA0sQU%2Fo2AEH8iOhSpIYQD62r5Xq1UdjK2G022z6YNm2qG7ytwuzUaZeW2OiOCLyUOFzMu98Pv4%2BOqvbrvj%2FdC71R3DME4yRh%2B9Q9AdXT3IdE%2FAX%2BuR3oAPpRW0B47V45dYbzHT%2B4CsLqnvBRcsneQFLvuplcgG%2FN9SJ2UhMtYLGcl7AQ2OalidO97e2Xy3sNY4uiwptKuXXBWHZlJ4uqhi7bvJ5uovWCj3pjWszCB9hwrIkr%2Br8XzVOQkATztle6upPQEj7PvyqZNGEY7eIGTvjncKutOQ1tEEWtKN45icU1lxP%2F9sXrfV8aqFPvrWNjP1sq6XYhB3AjDyQB18Rsg%2FDCqkTaTfe%2FbjgZaDmM1T9RlQFnuMh9tEmsZQ1Vy%2BOMUFQkOAsvoiDr7XmXqni6n7%2BR%2B9UL%2FpehVgBGndkWPBuWNWcFSw6NiyhHqAY4W%2F3QyozKC93%2FQgdSIlFeG8jkCByZYIIKIxAWRm3LOn%2BoDWfy0kAbjOspwXiiNf3qUzNA1fOJMOunob8GOqUBOgQExy71giCFIk4597KhoUPmizHayIaXsph%2FpBKI2OuBc02YXaVd5L0WJepDp%2BuwmD2asAGsPaDZrf%2F4yT7kZxYnXWC4XQddcaF%2FwRck9TaLITyQuXUtBT3%2BrTuAPbcuqCtSPYtNpjIS8r2%2BvRwJ%2BvtUyLfAyEmBLx9eO8PfjFNq%2B2MpLSf64VB9pKtZdFHEXprhFLzgV08i%2B3ON%2FqgXT62d2woX&X-Amz-Signature=72836d56c2d5e325b07a98baaec0edf7b776f19f04eea623b71e6fee5b65286b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
