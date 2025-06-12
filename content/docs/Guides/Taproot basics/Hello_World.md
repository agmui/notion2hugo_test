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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RLS3KW6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFGz2dnbrJYSZjF93zoHh7IgV9OQbAUWxfZlYHkaxLqgAiAG%2FMldMXqXUnIfp%2ByqcHgTcQYjNU9jfs421hRq%2FotoPiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVTo7G1qFpKylSDU1KtwD%2FX6Wck%2F%2Bly9KLuyh9PQT%2BA1qhBBMrfHawnQsBQJ4q0CJQ2yO7AAm0zVrequOUOD2VQm7zOyklZZYfs0DBhS5MAOctzAIxbT8aNOH1woNv%2FNOyEFRLAxcjPWhKJ2tjyiMnF32ekKuA%2BZHkE3nVGh19y9K0uA7%2FMGpyRJCCqp%2FXVCK2G3uzV7Ty1MkKMDeUh%2BrqIHlzKX%2BWIaISBcYN01MgBhihaw3PTZa8UiOYjoofGKhpaZRMoRypSE6ZC%2FWrB1ZLnJdCUo29Bt%2BGGv4UW9ZGqd29TaNkutU4Vn%2B%2B3I2UAqsAxzDnFJSszpwdJDnghyFuWWGZ9BiDFSDhLD7QxVUBL0%2Bgb79LtU7m%2FU0x5cEESdNjmHeIN%2FsZIfS7ZxuXvWBZ2P%2FWp%2BzcZKf8uvr9oi00aBBUDTfg6XURUpYIPsikhC6AwxyINaE9V6gGaaMeuAuxkOl%2BWmczbBWT3cjhEgTMufAjTPrIFH5xYw%2BFZzKJbNht6XGOn6CeduUGZqtBMh3ciM65DP57opuiL%2B6D%2F5HgHYxTEb4xH0T%2BgRNzRhIiKp3OuCb3RoITi%2FQaO8LAEqbqgfARNIZ8ipz2MZTXHCu87H%2BATH9GqpIjdWAGnLe8c3VVV1dZ%2FmqqLFNhwUwypCswgY6pgEk5GHgCNAneTZCnfHeFQ%2BeJkAyZrB4VsGRpL4JnGkrDaSgsCrDJ%2FnShYzPksjgQp%2BkuHtHdO01PqSALeHplD2TlxobT4szzTf8FTs%2Bwm%2BT5HDq9d1YtCfnb0nY53fxo%2Fr6YBqtw3vPXgj2T4jHd7KvF3v7mHrBLpIrO0gJ%2BU%2Ba0FTH%2FOUxycTWBKNyKj%2FKJi%2BWCW1Tid2yydRorNw2J9QhWO%2FJmMAl&X-Amz-Signature=ae5b826bfd405d548387f5017602c901f1a7df44ad0a97060d37b20b1e1608a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RLS3KW6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFGz2dnbrJYSZjF93zoHh7IgV9OQbAUWxfZlYHkaxLqgAiAG%2FMldMXqXUnIfp%2ByqcHgTcQYjNU9jfs421hRq%2FotoPiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVTo7G1qFpKylSDU1KtwD%2FX6Wck%2F%2Bly9KLuyh9PQT%2BA1qhBBMrfHawnQsBQJ4q0CJQ2yO7AAm0zVrequOUOD2VQm7zOyklZZYfs0DBhS5MAOctzAIxbT8aNOH1woNv%2FNOyEFRLAxcjPWhKJ2tjyiMnF32ekKuA%2BZHkE3nVGh19y9K0uA7%2FMGpyRJCCqp%2FXVCK2G3uzV7Ty1MkKMDeUh%2BrqIHlzKX%2BWIaISBcYN01MgBhihaw3PTZa8UiOYjoofGKhpaZRMoRypSE6ZC%2FWrB1ZLnJdCUo29Bt%2BGGv4UW9ZGqd29TaNkutU4Vn%2B%2B3I2UAqsAxzDnFJSszpwdJDnghyFuWWGZ9BiDFSDhLD7QxVUBL0%2Bgb79LtU7m%2FU0x5cEESdNjmHeIN%2FsZIfS7ZxuXvWBZ2P%2FWp%2BzcZKf8uvr9oi00aBBUDTfg6XURUpYIPsikhC6AwxyINaE9V6gGaaMeuAuxkOl%2BWmczbBWT3cjhEgTMufAjTPrIFH5xYw%2BFZzKJbNht6XGOn6CeduUGZqtBMh3ciM65DP57opuiL%2B6D%2F5HgHYxTEb4xH0T%2BgRNzRhIiKp3OuCb3RoITi%2FQaO8LAEqbqgfARNIZ8ipz2MZTXHCu87H%2BATH9GqpIjdWAGnLe8c3VVV1dZ%2FmqqLFNhwUwypCswgY6pgEk5GHgCNAneTZCnfHeFQ%2BeJkAyZrB4VsGRpL4JnGkrDaSgsCrDJ%2FnShYzPksjgQp%2BkuHtHdO01PqSALeHplD2TlxobT4szzTf8FTs%2Bwm%2BT5HDq9d1YtCfnb0nY53fxo%2Fr6YBqtw3vPXgj2T4jHd7KvF3v7mHrBLpIrO0gJ%2BU%2Ba0FTH%2FOUxycTWBKNyKj%2FKJi%2BWCW1Tid2yydRorNw2J9QhWO%2FJmMAl&X-Amz-Signature=77b9919d45d5d8c141f35be35dde80e4dad98193f8ccd536528e2996b65da190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
