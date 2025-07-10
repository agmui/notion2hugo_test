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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2AJY7I%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJWyUK6EWPC35g8djfVILMel3FAQYDdCobzgeuS63mpAiEA0o5vEOjT%2FGH8Cbqb6MYR9hlXiuXcE3aBu6K2RPd2ubcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwHrQmKY67Vo1L0KircAyb5FQ2Ok9DB%2BeuPSOkJD0TleNuzSNd2HJlRT9rWlo1jgeNUZoMfhvZKh%2BIBnQgEW1xMb8AHDnW2ZKe3QYFQqR007h0B0tAWZmNWdfOWEwdlPEdglIbxE44RckQovylYK1E%2F8mux%2FJXAIYf6j4y4CTXNlchZMomHIL8DxbxN%2BttIgmZ4MgiQUg%2BYItWmNSWEfuImH8iQbydPMBP8WHMbMDGu3wOVVTOgEECUW9AFdrdhe2zWHoRgqkt8uzg2AkrZDDPY5ynF4WUr69BLlaohBLjORXF92sTklB9E9Dh21g4ZFNbZ7glANK1NSHa58CspIdYXnsScnVQfNPXeH4rL1lTJG%2FR1Nm9VEDdM0suVOZX8G4g28UkwtNUhnV2dhbhPoI%2FQbU6s1w9ST0xo9P9mnfhol6dSlMknb7xTAgroU1HPwxRPXWxgpFvnVZ9KAl21W7rzIZTwCaF0S7b1ey3t1S3KeQlpyg6IaP7oi6T3rSIz1TiLWWr4tJrPsS1YIAtuY%2B1s%2F1EtMiUK0yDiJltfq8aJCL7gwvUyH%2BN1YQWSFEIEAWs5MfM2UjmfbuvciMr%2BygYojxBbiKnPLyWLnlY7LRAvvqHPJ35%2BQsM4%2FEbKppgz4Q8r2yBQ1vT34vezMMfQvMMGOqUBPePKTmt0uUNQpHthHmy2P6oauvB3kddq91mPa1xod%2BixReqyIHHiVWLvPc1hrESUoX%2FMI889QOEwhCqZLMfUcxZUVfAUM8ZhMFZJkq1ATFSl6WmNAlNHrJvJCCenGXF9GxqvmG%2FDYmUhwoRtJsflAlynuIqr8DLL8Jll%2FQiOd5MNAvLfjwaxooEnNU4gCHZr7N9ijZKylkJK5v8xSwy4IoPIZ1TJ&X-Amz-Signature=fa8379360e8ec0c9681488e6032e2b882f7a5809422dcafc9137b42ea50ececd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2AJY7I%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJWyUK6EWPC35g8djfVILMel3FAQYDdCobzgeuS63mpAiEA0o5vEOjT%2FGH8Cbqb6MYR9hlXiuXcE3aBu6K2RPd2ubcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwHrQmKY67Vo1L0KircAyb5FQ2Ok9DB%2BeuPSOkJD0TleNuzSNd2HJlRT9rWlo1jgeNUZoMfhvZKh%2BIBnQgEW1xMb8AHDnW2ZKe3QYFQqR007h0B0tAWZmNWdfOWEwdlPEdglIbxE44RckQovylYK1E%2F8mux%2FJXAIYf6j4y4CTXNlchZMomHIL8DxbxN%2BttIgmZ4MgiQUg%2BYItWmNSWEfuImH8iQbydPMBP8WHMbMDGu3wOVVTOgEECUW9AFdrdhe2zWHoRgqkt8uzg2AkrZDDPY5ynF4WUr69BLlaohBLjORXF92sTklB9E9Dh21g4ZFNbZ7glANK1NSHa58CspIdYXnsScnVQfNPXeH4rL1lTJG%2FR1Nm9VEDdM0suVOZX8G4g28UkwtNUhnV2dhbhPoI%2FQbU6s1w9ST0xo9P9mnfhol6dSlMknb7xTAgroU1HPwxRPXWxgpFvnVZ9KAl21W7rzIZTwCaF0S7b1ey3t1S3KeQlpyg6IaP7oi6T3rSIz1TiLWWr4tJrPsS1YIAtuY%2B1s%2F1EtMiUK0yDiJltfq8aJCL7gwvUyH%2BN1YQWSFEIEAWs5MfM2UjmfbuvciMr%2BygYojxBbiKnPLyWLnlY7LRAvvqHPJ35%2BQsM4%2FEbKppgz4Q8r2yBQ1vT34vezMMfQvMMGOqUBPePKTmt0uUNQpHthHmy2P6oauvB3kddq91mPa1xod%2BixReqyIHHiVWLvPc1hrESUoX%2FMI889QOEwhCqZLMfUcxZUVfAUM8ZhMFZJkq1ATFSl6WmNAlNHrJvJCCenGXF9GxqvmG%2FDYmUhwoRtJsflAlynuIqr8DLL8Jll%2FQiOd5MNAvLfjwaxooEnNU4gCHZr7N9ijZKylkJK5v8xSwy4IoPIZ1TJ&X-Amz-Signature=096a692f832eb7b919797c1a7f4fda64e989d3610cdb78b7962964a4e5389c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
