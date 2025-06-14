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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIIGWR7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDffHEjIBG9%2FygNSsL%2BuMG6wxFCXaF9NmMrAQjI2V81bQIhAOCAmExxY1hyi%2BEqLZHu3GvrK9Sa8D6oOqzNiQ5N1OtAKv8DCC0QABoMNjM3NDIzMTgzODA1IgzSnONOB61BRPxh2GMq3ANKLAKMkztV3NCYSG0KZtdSaTiMPW1LP8wcy5fe61mxYzG9K5NtEx6g94NhN5V0aUaacIpe%2FKx%2BDneRAxqlkkNrsDyEuVWugg7KbhQYfd2tAVngDXVt3%2FmdVsLvPfOYwIBRvvAymh9SQsOYMRbaMAb2tLYRlC3ilXtH7BBlomBF0ss4XmQsFi4BsEt0xpfr%2FwD7g6whv3KJzbYJPVN8e2U0stMR0h5oZtFH0R8M3pIU6w0Bteyp6AB4On%2BBa2SsPrgq3SThtysyMyWoETo836DGUztoOkDCQsYRnFpJQXodj0KLIN0b86gQeprLdi2%2Fo4MMowVhB32qBEVXGmLRXZO5Du29pcp9N06YdkFpSOEUyhbWpNBFqd6P5bai0JUuNXNjFjPxfMlfDcg2ohj3%2FoR6bb6a0ThdLZyAFAwelYlSU0qwFsZHHIGhs6Blp4P465Odi%2FeTHkOoJujzrG6lJ1eciUusC5opDH21o3gwd3tr0RUsxyqg2Tjf0Eb7sXA%2FkL21GwOVQQuUncHywC1kqZS16FjSSXfYCPYCJ%2BXal06Nwp4j9Bymq7Ba1pegPJejJE57AjFWeo7rvTT0%2FLsH4Juf6VVOez%2BVx3pCcvvouypXVaJUmJ8HxX3Ci6Po3zCWwbXCBjqkAfk1XwWW1SJwKL27GcXDKzUIJNf0PE9ZgX7gLuGo%2BuijkIkxp0tAzo7FYvb1NkrvBpFYRh0mAXEVQ0eZ0Y4qo0S8dlNm%2B050GXfNjroYRSooNL4EBncd4eNh6Cdr3fqEEXACSXgMogKIXaR3BPFO7fdxrhp5JFtx70FriMpyOcopRaHhqmbjSIFPJoW%2BpD6aCcSpBmTEfMlSMugG8bSONPx2wxhH&X-Amz-Signature=3d241b5a2060650779a3d3c912cab2ff90ef3eee4489b7982af65a6f2ab8a94b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIIGWR7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDffHEjIBG9%2FygNSsL%2BuMG6wxFCXaF9NmMrAQjI2V81bQIhAOCAmExxY1hyi%2BEqLZHu3GvrK9Sa8D6oOqzNiQ5N1OtAKv8DCC0QABoMNjM3NDIzMTgzODA1IgzSnONOB61BRPxh2GMq3ANKLAKMkztV3NCYSG0KZtdSaTiMPW1LP8wcy5fe61mxYzG9K5NtEx6g94NhN5V0aUaacIpe%2FKx%2BDneRAxqlkkNrsDyEuVWugg7KbhQYfd2tAVngDXVt3%2FmdVsLvPfOYwIBRvvAymh9SQsOYMRbaMAb2tLYRlC3ilXtH7BBlomBF0ss4XmQsFi4BsEt0xpfr%2FwD7g6whv3KJzbYJPVN8e2U0stMR0h5oZtFH0R8M3pIU6w0Bteyp6AB4On%2BBa2SsPrgq3SThtysyMyWoETo836DGUztoOkDCQsYRnFpJQXodj0KLIN0b86gQeprLdi2%2Fo4MMowVhB32qBEVXGmLRXZO5Du29pcp9N06YdkFpSOEUyhbWpNBFqd6P5bai0JUuNXNjFjPxfMlfDcg2ohj3%2FoR6bb6a0ThdLZyAFAwelYlSU0qwFsZHHIGhs6Blp4P465Odi%2FeTHkOoJujzrG6lJ1eciUusC5opDH21o3gwd3tr0RUsxyqg2Tjf0Eb7sXA%2FkL21GwOVQQuUncHywC1kqZS16FjSSXfYCPYCJ%2BXal06Nwp4j9Bymq7Ba1pegPJejJE57AjFWeo7rvTT0%2FLsH4Juf6VVOez%2BVx3pCcvvouypXVaJUmJ8HxX3Ci6Po3zCWwbXCBjqkAfk1XwWW1SJwKL27GcXDKzUIJNf0PE9ZgX7gLuGo%2BuijkIkxp0tAzo7FYvb1NkrvBpFYRh0mAXEVQ0eZ0Y4qo0S8dlNm%2B050GXfNjroYRSooNL4EBncd4eNh6Cdr3fqEEXACSXgMogKIXaR3BPFO7fdxrhp5JFtx70FriMpyOcopRaHhqmbjSIFPJoW%2BpD6aCcSpBmTEfMlSMugG8bSONPx2wxhH&X-Amz-Signature=6ba883ac66dd71e2f1402b43e46b5259a4f79b6cc3038ead4b17329685f475c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
