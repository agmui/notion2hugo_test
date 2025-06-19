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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM5IIX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9L5FNRYwq50AD8iRtaIusGXKGJ87iEa6b%2BnmjlgDICAIhAKRXJ9a0UWX%2B4InW%2FJbVBFkBsi7gzqNHaZCr4gsw4w86KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg7b0H9o6d%2B2mqVKIq3AMII4uKDiQx%2B06DR29W82TrsOrRhJKeoCVNVNfL4%2FuggkULM%2FqboadUz0UpPyuZXytAbRTa32kuK5KN5F6KCYPmEs5ZmSV2fn9lg2l4eRIO%2Fqr5xFCZoIiAxFBbPtLNPUOu83yqFJThe7ZvDtI%2FcotnYaoW2c5jGZbGrzQcCOiOZWH9UeP3Zzgc7j3d7W1B8TBPm%2FbzBRMhoE1Lwo4BoMZKG4KSQIskHdiEAHr6Ej8b9BMuJNrsHTYG%2Beo3vwZrSJGy1POxxN%2FhOYIrHkY5IIDGL4s8W4EbN4lp2wKQPkWC6GNRlDI977jsh9m%2BurIaYnICix%2BRdqFyZKwwoOgZynPdPTR9DDZ1l%2FufhYQ8qS7Qdi4QckkbSUtX8WQpwTyhnPYDKcZGNmVU1jVDo5Re%2FGLyXMKlToPQVq%2BtkI7uiMH4BUwt8lF3SlpCPDSmjxUWFrZFKVsAyKADqrHAvbDQJfDud1tSYp8j62Vs4RbcAtCPMjNtJvHkXQDHn5ErmzuXCO6KbyTk4utTUoxInD2y4HgqHdx6VEB1mIK5Wn2Nf0PMd%2B2nrZCY3iQyxzdGp%2BomwjawnJ9T6PsAe1CLw%2BevK6L2%2FTA57JjRN1SgJQSH3VX18GK%2BqcAlqkuZNSzZVDD93dDCBjqkAex1faJWGU9t0zvQTbLbfX4b1bqFsax4FLsCtNwZGHaZ8W2SrXdcX6tyn55tBp7UU%2FtghsObOvCjtWP%2FNsGdzwD3tO0T3GFuBxfZryIq0fECSd3u8V1XmsbRCsPhp%2BSV%2BkBvWS4XdcusTThwX%2BUUE1xo0Cft1p7IbxpZa5%2BYZUWaxkgD%2FoxwYEQPvOypYqAsmplO3IPN%2BVvsQ7BESKt0bsnw5iFt&X-Amz-Signature=c6bbe9c4ec3c1ec7b21114626d671df8378d51cc150d3b8391b648b3695d6a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM5IIX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9L5FNRYwq50AD8iRtaIusGXKGJ87iEa6b%2BnmjlgDICAIhAKRXJ9a0UWX%2B4InW%2FJbVBFkBsi7gzqNHaZCr4gsw4w86KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg7b0H9o6d%2B2mqVKIq3AMII4uKDiQx%2B06DR29W82TrsOrRhJKeoCVNVNfL4%2FuggkULM%2FqboadUz0UpPyuZXytAbRTa32kuK5KN5F6KCYPmEs5ZmSV2fn9lg2l4eRIO%2Fqr5xFCZoIiAxFBbPtLNPUOu83yqFJThe7ZvDtI%2FcotnYaoW2c5jGZbGrzQcCOiOZWH9UeP3Zzgc7j3d7W1B8TBPm%2FbzBRMhoE1Lwo4BoMZKG4KSQIskHdiEAHr6Ej8b9BMuJNrsHTYG%2Beo3vwZrSJGy1POxxN%2FhOYIrHkY5IIDGL4s8W4EbN4lp2wKQPkWC6GNRlDI977jsh9m%2BurIaYnICix%2BRdqFyZKwwoOgZynPdPTR9DDZ1l%2FufhYQ8qS7Qdi4QckkbSUtX8WQpwTyhnPYDKcZGNmVU1jVDo5Re%2FGLyXMKlToPQVq%2BtkI7uiMH4BUwt8lF3SlpCPDSmjxUWFrZFKVsAyKADqrHAvbDQJfDud1tSYp8j62Vs4RbcAtCPMjNtJvHkXQDHn5ErmzuXCO6KbyTk4utTUoxInD2y4HgqHdx6VEB1mIK5Wn2Nf0PMd%2B2nrZCY3iQyxzdGp%2BomwjawnJ9T6PsAe1CLw%2BevK6L2%2FTA57JjRN1SgJQSH3VX18GK%2BqcAlqkuZNSzZVDD93dDCBjqkAex1faJWGU9t0zvQTbLbfX4b1bqFsax4FLsCtNwZGHaZ8W2SrXdcX6tyn55tBp7UU%2FtghsObOvCjtWP%2FNsGdzwD3tO0T3GFuBxfZryIq0fECSd3u8V1XmsbRCsPhp%2BSV%2BkBvWS4XdcusTThwX%2BUUE1xo0Cft1p7IbxpZa5%2BYZUWaxkgD%2FoxwYEQPvOypYqAsmplO3IPN%2BVvsQ7BESKt0bsnw5iFt&X-Amz-Signature=abd68025405cbf83c3d7d1153d3c9afa67fdef96123f83af923f9a5bf0061f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
