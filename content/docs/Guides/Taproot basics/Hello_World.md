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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVOQWZUY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0%2BJxmCt%2BUIcCBwY9u77FRzlxYI5WUev3f7HHasgw%2FNAiBBnrLYfXRhOM71E7xiDU3jKHgkUHfGmO2o%2BrBmnNcTsir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLi6CGyn9GPxcfEdZKtwDLiEnq%2BALVgBaFf04uprV7MSZ%2BzcanIUGPJ2OxCjYRkg8Mor06X5JB0HK7QN9MCuRPR5a7cvNi8diUZzEKpfMYqEN%2FLMXs6VIStm0gsl%2FYXOgcf0F2S7qbYEPlXRFWtG381pzVi8rskZNRIUkAFcrO%2BgAyTuBXNHU0U5bCLXqE8HhqOhL4g3jGoPAu7noukFQe968Vv8o2aFEHqLni1rcYElujHvqjJliDz91xL8tbMb%2FVBFQ2qeDAiKBQF5glojPHfh%2FiCj8ZA3kYCFUM6QkZIdAlr5nYnjgr5gHP5A9MUiI91npxhsMFwjRHSmYQacA1nDEzJ9%2FGiiICldEtZYVB8%2FlSYOBU019wvtkcYkKqTTkcpoJEez7dZfvmQThxySRrjarFkBUM6%2B9jktVpuQxa4xeghu09ABmN2NdbXeo4RhMToCvzTe5lp0RVHcW2fLINYZrUNeXxq%2FvNzzmbXWZ6tZiKPObKmimtbpUk%2B4UBJSNxSGesachLbaA3DQjWhPSRbC4b7IXDm4WFwXDKDgv0LbnVn9Eq5kPfeF44sT%2Fy65DpCwpfeCtoay3vZDDEgI33GFTTLDYHtRVrhovK1d94Y6HO8mMP2JVEGOM6pgIc%2FzwfKOY%2FD%2F9ALYMDX8w26m5wAY6pgFMpk4pamftnCfFsyxGMKM4AkSWjxGQckaiPkAUZ0smySf0SQtxnvHhBaBoICb17HaEuOscQJfA5zMkMmgp%2FFTW50Uv5w4DjF7JCXoyX5pUb6J8Jhv5VJgo5xCHfjm898D5mz6zmsk5aS6wXaxoqD0xQAj9pfXfZFaJirTnD6erg8lAkdDG1E30sqzesDAPwi%2B4dS3hv2DMYcJ1%2FZQRhLLEVwaCQa2x&X-Amz-Signature=f6807910b438a09f49e99b8ac20581fa7bcf85fcab980489e7a34f8fabffe224&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVOQWZUY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0%2BJxmCt%2BUIcCBwY9u77FRzlxYI5WUev3f7HHasgw%2FNAiBBnrLYfXRhOM71E7xiDU3jKHgkUHfGmO2o%2BrBmnNcTsir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLi6CGyn9GPxcfEdZKtwDLiEnq%2BALVgBaFf04uprV7MSZ%2BzcanIUGPJ2OxCjYRkg8Mor06X5JB0HK7QN9MCuRPR5a7cvNi8diUZzEKpfMYqEN%2FLMXs6VIStm0gsl%2FYXOgcf0F2S7qbYEPlXRFWtG381pzVi8rskZNRIUkAFcrO%2BgAyTuBXNHU0U5bCLXqE8HhqOhL4g3jGoPAu7noukFQe968Vv8o2aFEHqLni1rcYElujHvqjJliDz91xL8tbMb%2FVBFQ2qeDAiKBQF5glojPHfh%2FiCj8ZA3kYCFUM6QkZIdAlr5nYnjgr5gHP5A9MUiI91npxhsMFwjRHSmYQacA1nDEzJ9%2FGiiICldEtZYVB8%2FlSYOBU019wvtkcYkKqTTkcpoJEez7dZfvmQThxySRrjarFkBUM6%2B9jktVpuQxa4xeghu09ABmN2NdbXeo4RhMToCvzTe5lp0RVHcW2fLINYZrUNeXxq%2FvNzzmbXWZ6tZiKPObKmimtbpUk%2B4UBJSNxSGesachLbaA3DQjWhPSRbC4b7IXDm4WFwXDKDgv0LbnVn9Eq5kPfeF44sT%2Fy65DpCwpfeCtoay3vZDDEgI33GFTTLDYHtRVrhovK1d94Y6HO8mMP2JVEGOM6pgIc%2FzwfKOY%2FD%2F9ALYMDX8w26m5wAY6pgFMpk4pamftnCfFsyxGMKM4AkSWjxGQckaiPkAUZ0smySf0SQtxnvHhBaBoICb17HaEuOscQJfA5zMkMmgp%2FFTW50Uv5w4DjF7JCXoyX5pUb6J8Jhv5VJgo5xCHfjm898D5mz6zmsk5aS6wXaxoqD0xQAj9pfXfZFaJirTnD6erg8lAkdDG1E30sqzesDAPwi%2B4dS3hv2DMYcJ1%2FZQRhLLEVwaCQa2x&X-Amz-Signature=70421a8259ce82c386c3a05e8529b12d8b90871447ec8d47dcb195e8ba34681e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
