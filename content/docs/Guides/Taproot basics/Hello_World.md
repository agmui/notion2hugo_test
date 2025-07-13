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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW7T3ZA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB4uPrvvys0IjcN%2Bhz2YAtr8%2FHPJNpwKHMnXWIf78Q9wIhAKcPQzGBYxgo9tQEtUXnF6yfdWp7euQMMHx5WUBGstavKv8DCBAQABoMNjM3NDIzMTgzODA1Igy%2BgbUSBNnL%2BPG3MFsq3APCyPCqNmnTnl4GkT4tnIdusnILBOjffVlytCADtqJxRcJduUzoat6ESTzSmJZ8gaiYMLKsyZR%2FUVInYIEhDe5VxE29nsQdNQE0SDFpxGHx9MiJM1aA8CmZzmuZEXIljJ4nYHRuH%2B7cxRWB8YdEjjch7ZzIEN9qFVxrgBdhoc1ahTki5a4gIvtW3WUyplnfUcJdRz4P3gh4Bzu9rsqtis4FvFGn9ZCyn2UteqZoMRxPN67M8GtbbLvbfU5zmvyttRM9%2FKTIXfmdN%2FYCLJot%2BkC5zl9YvElEGTJcaKWH3ThtHvozzXK5WfADktC%2BI1fx2w11aKd8HVUhhDnc7HHjKnav4L9HTDmQjpdDMQ0zPDw0A7VAhymyXCSXhFNZ4PLEQJRaJnyLzGG0S3HZ%2Fu2ToNAW8y7Nohg%2Ftz4iCvFfCOEACXiSo0NN%2BiLi0KUCpuWzqFUtQy2I9WBgDQmmScMH0%2FDO84rJaLnMPf7z9GPtvnbWATbXoHxHM3pgBXPORE2BGaPlMk63LO6ZNZXTv0vl%2BSmJvc8bC2boXRTI30KPRfrSU87IjEuvqE4%2F5ghaQi6UeQkazNmLhx5lXlIzJpoVFme93gn5jT15TIYzYw8JkfMtfzued4kjvOqOwJ070zD3o83DBjqkAW7SoUyzfBxm8QP1R2rSO1vDmv5Ppr9ljsQbgl95v5e%2BCo0vZ4UJxtDtDyizKcyT9PVEmivY2uwGWTmFoiMXddlrbZOWmvqO47MJ1Urn7SqczL9OM8iYJObpr3nuBxdALY%2F8BLM5PN10pWHDxWNsNzVm%2FU3Kpa9ZE01dC33SkdL3NJ7sRcKXXqvN473pWtzdcHLgvBwShOcXF3E3%2Bpm0ChL24ImV&X-Amz-Signature=8936de17c73c99cf4509b80c0af4e7b5586f90dfbb8c22efb07ac82c2131f61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEW7T3ZA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB4uPrvvys0IjcN%2Bhz2YAtr8%2FHPJNpwKHMnXWIf78Q9wIhAKcPQzGBYxgo9tQEtUXnF6yfdWp7euQMMHx5WUBGstavKv8DCBAQABoMNjM3NDIzMTgzODA1Igy%2BgbUSBNnL%2BPG3MFsq3APCyPCqNmnTnl4GkT4tnIdusnILBOjffVlytCADtqJxRcJduUzoat6ESTzSmJZ8gaiYMLKsyZR%2FUVInYIEhDe5VxE29nsQdNQE0SDFpxGHx9MiJM1aA8CmZzmuZEXIljJ4nYHRuH%2B7cxRWB8YdEjjch7ZzIEN9qFVxrgBdhoc1ahTki5a4gIvtW3WUyplnfUcJdRz4P3gh4Bzu9rsqtis4FvFGn9ZCyn2UteqZoMRxPN67M8GtbbLvbfU5zmvyttRM9%2FKTIXfmdN%2FYCLJot%2BkC5zl9YvElEGTJcaKWH3ThtHvozzXK5WfADktC%2BI1fx2w11aKd8HVUhhDnc7HHjKnav4L9HTDmQjpdDMQ0zPDw0A7VAhymyXCSXhFNZ4PLEQJRaJnyLzGG0S3HZ%2Fu2ToNAW8y7Nohg%2Ftz4iCvFfCOEACXiSo0NN%2BiLi0KUCpuWzqFUtQy2I9WBgDQmmScMH0%2FDO84rJaLnMPf7z9GPtvnbWATbXoHxHM3pgBXPORE2BGaPlMk63LO6ZNZXTv0vl%2BSmJvc8bC2boXRTI30KPRfrSU87IjEuvqE4%2F5ghaQi6UeQkazNmLhx5lXlIzJpoVFme93gn5jT15TIYzYw8JkfMtfzued4kjvOqOwJ070zD3o83DBjqkAW7SoUyzfBxm8QP1R2rSO1vDmv5Ppr9ljsQbgl95v5e%2BCo0vZ4UJxtDtDyizKcyT9PVEmivY2uwGWTmFoiMXddlrbZOWmvqO47MJ1Urn7SqczL9OM8iYJObpr3nuBxdALY%2F8BLM5PN10pWHDxWNsNzVm%2FU3Kpa9ZE01dC33SkdL3NJ7sRcKXXqvN473pWtzdcHLgvBwShOcXF3E3%2Bpm0ChL24ImV&X-Amz-Signature=701a6b1598c80ccee97e341c64382dc60f2445faeac5275fc2cf7b9be9633e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
