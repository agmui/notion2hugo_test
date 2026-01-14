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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDYIBVB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA6yUdv8nGZRgMVDP3GIEjr04CmJQ0kZHzvN9baGsDxoAiAGWvIyCxZxQXy5wMQu154n5BO1v8l7rqs3T98bg4Xyayr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMApVihFBoV%2Bn6WgThKtwDd4mcOtlDSgOokDU8fc5TTfAO%2Bym9POQh1UFThocnKiUhHvEetQlGov3V8Y9LHPAisZ6%2Bf5KP8D9ZHHs2TZXKl8xHkYiHEjA3zxkUg%2Fbu7oxcYvqffk7sGqIi9cLKzYt%2F2Sr785yZKUPOoFoEbZP9GfCL%2BNlgBKlmEg27gna6Q8jmWS46C6Lga5Xdj%2FGWaX%2BMRGU843jWvFF%2FT9FBCeWzpzv0yFGZkEQQhmLTJQQB0vCB4Vm1d4pzYaTmMA5hTdoaxYuNPvORHs%2BE5PvMIaDa87mwhfYuOtFfgu5YI6pYSWxxnNow%2Bimd8Kfin5gUzYlfK9iOo4Z7PzHpMdOCOR61tkLGkuRJLalvUZgvld%2F2r%2BMVx9jk%2BI7gxnbFWuubFBaq7pvSlAuvcMquAmbgIXVRJfeSFheupz1g%2BFuDMHNmtm2H2DM7NjTCYblYhbmBBO2f8Wpn6CNzBUw%2B7Kkmq7PJfNWjXBwrdy%2BGpe4QERF7Ar6QsJU%2BFEOCxOLPHs4dMcKqahd6NlmG4d%2B7xD7SVpWOP3FeHhkZq2vjn2JcjxkVyFBVWqk31fuea%2F4hKrbHKMJ7ot3TxF8e558QPi%2FCuMYTRx6r6MErSwHWX7GexucMxHePqgn9gXhd5N0FQ9Aw%2FM2bywY6pgGS%2FUYZcLthwUrXIwKF50sjER%2FM6KoGBjBy3kzxVhUigSSZOjevY8x82fvcGGiai9tLisQ1aiEY3yxSIlccSlHVxDxR4lawp6c%2FAXnTDqTPdFleQC254IzrD8tx5L7bABpfyXqjYg8c7fZuGphNzmC2n7tWB%2BiVv13PVM4qGgklUlQ%2BgyWU661zhdr8ruijO71nlx%2B4BcI%2FIZh4Ez668Vc4ZdFoR8LU&X-Amz-Signature=48da51d4234d2c1e98e832cb1b9e8b52bf92d6c617a0315d4c849dfceac07ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDYIBVB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA6yUdv8nGZRgMVDP3GIEjr04CmJQ0kZHzvN9baGsDxoAiAGWvIyCxZxQXy5wMQu154n5BO1v8l7rqs3T98bg4Xyayr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMApVihFBoV%2Bn6WgThKtwDd4mcOtlDSgOokDU8fc5TTfAO%2Bym9POQh1UFThocnKiUhHvEetQlGov3V8Y9LHPAisZ6%2Bf5KP8D9ZHHs2TZXKl8xHkYiHEjA3zxkUg%2Fbu7oxcYvqffk7sGqIi9cLKzYt%2F2Sr785yZKUPOoFoEbZP9GfCL%2BNlgBKlmEg27gna6Q8jmWS46C6Lga5Xdj%2FGWaX%2BMRGU843jWvFF%2FT9FBCeWzpzv0yFGZkEQQhmLTJQQB0vCB4Vm1d4pzYaTmMA5hTdoaxYuNPvORHs%2BE5PvMIaDa87mwhfYuOtFfgu5YI6pYSWxxnNow%2Bimd8Kfin5gUzYlfK9iOo4Z7PzHpMdOCOR61tkLGkuRJLalvUZgvld%2F2r%2BMVx9jk%2BI7gxnbFWuubFBaq7pvSlAuvcMquAmbgIXVRJfeSFheupz1g%2BFuDMHNmtm2H2DM7NjTCYblYhbmBBO2f8Wpn6CNzBUw%2B7Kkmq7PJfNWjXBwrdy%2BGpe4QERF7Ar6QsJU%2BFEOCxOLPHs4dMcKqahd6NlmG4d%2B7xD7SVpWOP3FeHhkZq2vjn2JcjxkVyFBVWqk31fuea%2F4hKrbHKMJ7ot3TxF8e558QPi%2FCuMYTRx6r6MErSwHWX7GexucMxHePqgn9gXhd5N0FQ9Aw%2FM2bywY6pgGS%2FUYZcLthwUrXIwKF50sjER%2FM6KoGBjBy3kzxVhUigSSZOjevY8x82fvcGGiai9tLisQ1aiEY3yxSIlccSlHVxDxR4lawp6c%2FAXnTDqTPdFleQC254IzrD8tx5L7bABpfyXqjYg8c7fZuGphNzmC2n7tWB%2BiVv13PVM4qGgklUlQ%2BgyWU661zhdr8ruijO71nlx%2B4BcI%2FIZh4Ez668Vc4ZdFoR8LU&X-Amz-Signature=f2e71e63e8886a66cd97dbea725ed8175c0ec4044e89a124dd789ade21cf46e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
