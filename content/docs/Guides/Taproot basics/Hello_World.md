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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVREDDFM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnrMKYLjDE5NQ0%2FqzhcLvSZkCub671xAgOPT1xMeBQwIgaT7HeJJp4sNs9t7ml1KATRMkYS5fCrCsLarepke7UOYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMNMbR8N8cnhV9ZASSrcA3pkGtq6eS4fLp6K1zQg3yiMhmzz%2FIo4vMmUfB%2F3cjUIsXoEMF9zW8rxJsEssPAWq6uL20NaF9I6gbPthd0Au2ZwkVL64pA5LVyfLOYzNSjHij88kZyMhaUCGcs5wo7WP0jJQiBIK8HazqL2ISiR%2BTUbpoqJUZume4ZF7%2B%2F%2Fb%2FTMngXJheLANi8RWacsYDyGL%2BNTuZZF6HbVy79fBc2hbHylczpFEHjBPMMUYgQaf4HDZqJ3aKpU9ewwscB3Xh8YaULQIJ0L65V9Ilmb8vy78SLLDzmn73nHphH%2BhQtLLojF7rnY7aokPt4Z96IGG1yGQ4PtOFeNULPb7Rl8GF8uCaf8%2BEstzBH4OgzE%2FfySfJfoXToy9eitznXeTwcd8B%2FZ96UWYq3BHXTDuWP%2B4sLUem6TLb5g2386GgaPfOgJjkEZg52puEIjObYWUIslacvvjIHcv3d1dZDUuEslcMfE8eQv%2F77ANP142h%2BsOd%2BcH2Ft32ADjOR4nTVTvxA4zYdraym9h05je%2FRsrciTtOoMQZ7K7aFBd%2FcbkxTNorvKEfVGhOU0vWj8747Gx69ukbFt4oYlIG6I3j3sW3V5s1LOQhStbCgSXO6okxaarpZgQ92gokbwbsoz8d5UUdbLMM6O174GOqUBTKSMxns%2FmrFDy3PsmpXKlrO4qGbVLAIEkj36wy1bIuE%2B6aTcM3RQqBSDuPVugmHggMwLU2lpTfjOmkGhyfpGcmGxr4j37tqHZX8lPcwjKW9MomD7Y%2B1yvz3INX0WZQTXBLoEDAqZWJ3%2Flj3uF7K9RSTa%2FXGK6fS0Bi2RuoUgQPuVNr711Fb8KoPQHzGKC5JRHdMPhyjg0hHiym1OEtGUgXxmUYAV&X-Amz-Signature=f8f896d8239bba9450e9151db2117cab4733c42a4fd9fffc541e1923b8b2e04f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVREDDFM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnrMKYLjDE5NQ0%2FqzhcLvSZkCub671xAgOPT1xMeBQwIgaT7HeJJp4sNs9t7ml1KATRMkYS5fCrCsLarepke7UOYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMNMbR8N8cnhV9ZASSrcA3pkGtq6eS4fLp6K1zQg3yiMhmzz%2FIo4vMmUfB%2F3cjUIsXoEMF9zW8rxJsEssPAWq6uL20NaF9I6gbPthd0Au2ZwkVL64pA5LVyfLOYzNSjHij88kZyMhaUCGcs5wo7WP0jJQiBIK8HazqL2ISiR%2BTUbpoqJUZume4ZF7%2B%2F%2Fb%2FTMngXJheLANi8RWacsYDyGL%2BNTuZZF6HbVy79fBc2hbHylczpFEHjBPMMUYgQaf4HDZqJ3aKpU9ewwscB3Xh8YaULQIJ0L65V9Ilmb8vy78SLLDzmn73nHphH%2BhQtLLojF7rnY7aokPt4Z96IGG1yGQ4PtOFeNULPb7Rl8GF8uCaf8%2BEstzBH4OgzE%2FfySfJfoXToy9eitznXeTwcd8B%2FZ96UWYq3BHXTDuWP%2B4sLUem6TLb5g2386GgaPfOgJjkEZg52puEIjObYWUIslacvvjIHcv3d1dZDUuEslcMfE8eQv%2F77ANP142h%2BsOd%2BcH2Ft32ADjOR4nTVTvxA4zYdraym9h05je%2FRsrciTtOoMQZ7K7aFBd%2FcbkxTNorvKEfVGhOU0vWj8747Gx69ukbFt4oYlIG6I3j3sW3V5s1LOQhStbCgSXO6okxaarpZgQ92gokbwbsoz8d5UUdbLMM6O174GOqUBTKSMxns%2FmrFDy3PsmpXKlrO4qGbVLAIEkj36wy1bIuE%2B6aTcM3RQqBSDuPVugmHggMwLU2lpTfjOmkGhyfpGcmGxr4j37tqHZX8lPcwjKW9MomD7Y%2B1yvz3INX0WZQTXBLoEDAqZWJ3%2Flj3uF7K9RSTa%2FXGK6fS0Bi2RuoUgQPuVNr711Fb8KoPQHzGKC5JRHdMPhyjg0hHiym1OEtGUgXxmUYAV&X-Amz-Signature=c00a7ec0ad0fc6d00c5efab74542cf566a9df04884b28670b25722a86ffec31a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
