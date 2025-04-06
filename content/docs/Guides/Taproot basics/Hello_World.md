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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3R6WQ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrvCgmj7zi%2BYzUKaGue3ZdIrAyq4yZK1t4olxRbpmX1AiEAyMvJ4jv7eo8My6p8RY%2FVOnR0nJiixBQYpHbygC4GWGAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE%2BKyQ2SgiPr3obrrSrcA9ly1DKpg5d1o1oS1tY53jjs6jRtAKQRK8T94ZqJnFuM%2FBJNhGGQAk7%2Bias8yAgpHyJGYaiBg5iJeErDbbnBjvi2KLkrurkTPxCA2uHsGFXw4ZD4jrNUo2nvTCku6RVu5thvKrJXyROphv23F6%2BVrSvEKKcHkienweBGnLN0UTuvooInNy%2B6zydM4DLqLW6bJXr%2BMwTSw2o4VfuiFA06CbDGEc3BJcUtYGarRP70dklEX2KtYdNroMT%2BGEpjfBNQOYX1rYBODwMe8d1j5apmab3Xf%2F4FOH2xXgwlrSmAPuS1EbMZM2dIj33mHuqbkxt19m6o2tfQ6rvlA%2Fnaadnl%2BMGXUmnrfn6Vg7voQaVbV6Am4tfJWD%2FJokHS82P2znCeqBVvfuGAOUWg2DNIq3iki8d8go9VD924brz2LgYxZshPfHwOuSVSz8y42lVpZVyCdHCZd9T1Wq3cAupjQEX3QB%2BVtiS4J5XhoLhF3fJPDwBLrkCPBDz%2Bz8eD%2F5l8Rr1aJPgalYkVYyY7NDGE4ycOJpAVxdUnCZ6ixqUY2Fm1zKEvJjPHq0klSH8KMJJxM%2BU%2FcCP6KRmxvr5TOuROIyhCJJmcDSITWdHIOiqnHOTCV8tO1LSUNj2ZhWs0NCvrMLGdyr8GOqUB%2F5t%2Be1zik7XzUU%2Bw2qcEK9RZy0CjTVgD6jyv4%2FexspCqhRm7s4oTVP%2Fb2TkHtTU3h5n%2Bz%2F%2BuJoxLY%2F6Hn8%2FRgRgRo471TPMeZS1ODOgAk9NkS9PRg%2Fvmuh44ea%2FHcqmPSyFjZbr%2B4ntIL07mtyK%2BzL5MG8ny%2FyKY7Ff60qOTVb09T7CLZDXRzi7bMqRHs2a0iDla1%2F5GOxq9ojMXOCYk9sazM%2BBc&X-Amz-Signature=c11b617e34a8b682ac27815ba593feff3b125c41b15d3a7f7401eac1cc0b218f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3R6WQ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrvCgmj7zi%2BYzUKaGue3ZdIrAyq4yZK1t4olxRbpmX1AiEAyMvJ4jv7eo8My6p8RY%2FVOnR0nJiixBQYpHbygC4GWGAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE%2BKyQ2SgiPr3obrrSrcA9ly1DKpg5d1o1oS1tY53jjs6jRtAKQRK8T94ZqJnFuM%2FBJNhGGQAk7%2Bias8yAgpHyJGYaiBg5iJeErDbbnBjvi2KLkrurkTPxCA2uHsGFXw4ZD4jrNUo2nvTCku6RVu5thvKrJXyROphv23F6%2BVrSvEKKcHkienweBGnLN0UTuvooInNy%2B6zydM4DLqLW6bJXr%2BMwTSw2o4VfuiFA06CbDGEc3BJcUtYGarRP70dklEX2KtYdNroMT%2BGEpjfBNQOYX1rYBODwMe8d1j5apmab3Xf%2F4FOH2xXgwlrSmAPuS1EbMZM2dIj33mHuqbkxt19m6o2tfQ6rvlA%2Fnaadnl%2BMGXUmnrfn6Vg7voQaVbV6Am4tfJWD%2FJokHS82P2znCeqBVvfuGAOUWg2DNIq3iki8d8go9VD924brz2LgYxZshPfHwOuSVSz8y42lVpZVyCdHCZd9T1Wq3cAupjQEX3QB%2BVtiS4J5XhoLhF3fJPDwBLrkCPBDz%2Bz8eD%2F5l8Rr1aJPgalYkVYyY7NDGE4ycOJpAVxdUnCZ6ixqUY2Fm1zKEvJjPHq0klSH8KMJJxM%2BU%2FcCP6KRmxvr5TOuROIyhCJJmcDSITWdHIOiqnHOTCV8tO1LSUNj2ZhWs0NCvrMLGdyr8GOqUB%2F5t%2Be1zik7XzUU%2Bw2qcEK9RZy0CjTVgD6jyv4%2FexspCqhRm7s4oTVP%2Fb2TkHtTU3h5n%2Bz%2F%2BuJoxLY%2F6Hn8%2FRgRgRo471TPMeZS1ODOgAk9NkS9PRg%2Fvmuh44ea%2FHcqmPSyFjZbr%2B4ntIL07mtyK%2BzL5MG8ny%2FyKY7Ff60qOTVb09T7CLZDXRzi7bMqRHs2a0iDla1%2F5GOxq9ojMXOCYk9sazM%2BBc&X-Amz-Signature=45c92b20ad7a64fab1fdd2d908f9e1e546a0dc624482329d50b8eee6355f8c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
