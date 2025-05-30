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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQS24OV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiL4YDQHr45ttpKM0HBVCoXNg3p3dI0ihRkewzdx618AIgXJ5EH1a0U9CekBrON5SzQshbC0nVMZoTZrHlFARAbMcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJZVuFY9rOIoAYgMircAy8hHxf2FNaHlCRdcEvbrkkdCInRtNGLLg2YQAFVqwbGu%2FihP%2F40oin8INFritazoM3KsO49pxF68DUjgx9Rleb09m37BENwxnik847bO1uRzfuAstvSuyask59NfjYbMmkvo3S9oSivhjeXcUR4hKFbMXLI6nzCNrRklCVSC%2B9BvkbRybmoNdkWnouadoe5%2Bx%2BQOlPB7tbvfgX6cYodfZ9e0n0nk%2BLEeZtA7%2BUnRwyzOsSPb%2BSHNQ%2B44897CXOPffaBlwgTHFZtXLNS1I%2BnTgKmwaxur3T4xWarItRnytqDD0A%2Fe2LNAsYozso8z%2Fq7GoziBfmNaBaW3ZNHAUW0D8fP87hNCdxJOfT1X1VAnELUYZuJJcROGKgtv0MaO232vS4JGnzWZlu9zTUMf2wII9wpTropK49Jqm%2Bpy%2FgnPIci3qJf0FRQI9UVAHbw68XETMkAr9cGDLRV8N%2BqJzYkZXdeM%2F4pqCXxU%2B6SUQufxhOZ5nA510maM6UNfG1Vc3uSwVQKxj%2BQu4fzc%2BuO3ssYil%2BijHVJs2o9O9IuOgXADNbTSQloN7nOEFFubCmMhBmaJ4knewLRARFB7ntExhBgkAfkGL7lKQv79dRILnT7U8nt8njN1Xjx308eyD3fMIe758EGOqUBiHDqx7t4HbWGDQPX8skVE4GtcOEWG6YHht60buDq7GeQyM5KGJd6Ko0e7l3ZZsXqYvLFEfql6gbP6hjlY68kg0uUbyj5B1wYMVLBSZb1%2FBJdbal4ODQJ90ZQmkTMOU%2BhyMwnCHb98fSLOg39xUF62%2Fki0GuXjViZ6PQMf7YxgWllzFCEtHACXXmEGQs9qgHSya3cjEdtVRJgjHjZjBglf9y7NVF7&X-Amz-Signature=20b57b2c7560d53fc72c84192fc84e68181237bd89fd2d5b56789b54b74678e8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQS24OV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiL4YDQHr45ttpKM0HBVCoXNg3p3dI0ihRkewzdx618AIgXJ5EH1a0U9CekBrON5SzQshbC0nVMZoTZrHlFARAbMcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJZVuFY9rOIoAYgMircAy8hHxf2FNaHlCRdcEvbrkkdCInRtNGLLg2YQAFVqwbGu%2FihP%2F40oin8INFritazoM3KsO49pxF68DUjgx9Rleb09m37BENwxnik847bO1uRzfuAstvSuyask59NfjYbMmkvo3S9oSivhjeXcUR4hKFbMXLI6nzCNrRklCVSC%2B9BvkbRybmoNdkWnouadoe5%2Bx%2BQOlPB7tbvfgX6cYodfZ9e0n0nk%2BLEeZtA7%2BUnRwyzOsSPb%2BSHNQ%2B44897CXOPffaBlwgTHFZtXLNS1I%2BnTgKmwaxur3T4xWarItRnytqDD0A%2Fe2LNAsYozso8z%2Fq7GoziBfmNaBaW3ZNHAUW0D8fP87hNCdxJOfT1X1VAnELUYZuJJcROGKgtv0MaO232vS4JGnzWZlu9zTUMf2wII9wpTropK49Jqm%2Bpy%2FgnPIci3qJf0FRQI9UVAHbw68XETMkAr9cGDLRV8N%2BqJzYkZXdeM%2F4pqCXxU%2B6SUQufxhOZ5nA510maM6UNfG1Vc3uSwVQKxj%2BQu4fzc%2BuO3ssYil%2BijHVJs2o9O9IuOgXADNbTSQloN7nOEFFubCmMhBmaJ4knewLRARFB7ntExhBgkAfkGL7lKQv79dRILnT7U8nt8njN1Xjx308eyD3fMIe758EGOqUBiHDqx7t4HbWGDQPX8skVE4GtcOEWG6YHht60buDq7GeQyM5KGJd6Ko0e7l3ZZsXqYvLFEfql6gbP6hjlY68kg0uUbyj5B1wYMVLBSZb1%2FBJdbal4ODQJ90ZQmkTMOU%2BhyMwnCHb98fSLOg39xUF62%2Fki0GuXjViZ6PQMf7YxgWllzFCEtHACXXmEGQs9qgHSya3cjEdtVRJgjHjZjBglf9y7NVF7&X-Amz-Signature=34d5411efcbca401b89b74037b949400f8dd7b06ecd5b358b5ba8bdf16692c56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
