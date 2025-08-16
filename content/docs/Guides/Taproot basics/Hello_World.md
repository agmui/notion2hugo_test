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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CNDT6K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGC1xu2apflMRQj8jonLBn4by0yIub2V0v7KQzu01GVyAiAoH0NWGcKo6D%2BMrpRJA0DEeOHf38PUbYblDuxSzsQrECr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyZdl5Ym1%2F5nsgCZhKtwDSTqezXJnNjejZFTmZtBDgZ9ADB9%2Bz9AzRodsI%2FiATia53luVQvLR%2BwoFeEKSvrdDj6BvgoeQdRDH6Q79iem%2B9tF%2Frv6rq3%2BYJoGkegndXtO%2BKDIEXVZekBQ%2BK2cCD8vXLSRaqAIx5nMrXJGjQmrBOXH3j8qc0L5jLFa0uMaHhM6Z%2FsQsRLNT5aBFLJYpUecyRuu9nW1YJ9ZfAbprIKHuyqawy8M2bXf%2BeoEv2%2BPCXzTKpAw5jR9LR8y%2FoDmmK%2FTc5gjhapG8WzXJcIFOgFF%2Bmm3BvXV1ekJCz8DCHQI%2BjkyNp%2FQdg%2BgcEpeGsEv9v64K8Ib%2F0y8%2BH%2BStyMygv2I%2B41VkCtAaOwJO%2BsZl70%2BHDGAQexISNmBU2KV9HI4vHjVBBitMlINVGP2oWGwSiqthNukuYdUFgE%2Bvf9D5fz1IxTY9uuvvuRcxhMcFYwGLnVMF374TEn1XbtpJWotDqb4QxhWfHL5ASvbY%2BbV9ojt1EwTEH4UgQ8lZpvpMVvkR9ckuXrM7KWBIUBsUlAfU2kbS1OOjgmwbQGLJo0b0VHWz%2BmS3TI615bfnWR7dmmZkIQFckanA7lOdrS5tG1uudKGayaz2L23Mo%2B0G92lQiWr6%2FLczeQyc07eSNxb%2B1G4wrvmAxQY6pgFfxXMpSD6WE6lldbS8t5RK6bIJGsWOkmy78v8g0X591EXl2uaswYqFVHETs2XLhaoWFDsvW29LjY%2FkPL11t28Cyc34H9u31lmTfWBMync%2F26p8hUj1rmdiELZTvMRuY%2BaJjqsnmsCehV9h9VSENmbggSGYFTPawCw4i6S5fOLYuaam17Ux0NHqhFRGXyavVBQycZisflxRmGq0xYTPhVs98U4trQCx&X-Amz-Signature=cb2b9f7fbbfd086f90b85fe1a7c9d584cd1cc667ecbad7fe9909443536174975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CNDT6K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGC1xu2apflMRQj8jonLBn4by0yIub2V0v7KQzu01GVyAiAoH0NWGcKo6D%2BMrpRJA0DEeOHf38PUbYblDuxSzsQrECr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyZdl5Ym1%2F5nsgCZhKtwDSTqezXJnNjejZFTmZtBDgZ9ADB9%2Bz9AzRodsI%2FiATia53luVQvLR%2BwoFeEKSvrdDj6BvgoeQdRDH6Q79iem%2B9tF%2Frv6rq3%2BYJoGkegndXtO%2BKDIEXVZekBQ%2BK2cCD8vXLSRaqAIx5nMrXJGjQmrBOXH3j8qc0L5jLFa0uMaHhM6Z%2FsQsRLNT5aBFLJYpUecyRuu9nW1YJ9ZfAbprIKHuyqawy8M2bXf%2BeoEv2%2BPCXzTKpAw5jR9LR8y%2FoDmmK%2FTc5gjhapG8WzXJcIFOgFF%2Bmm3BvXV1ekJCz8DCHQI%2BjkyNp%2FQdg%2BgcEpeGsEv9v64K8Ib%2F0y8%2BH%2BStyMygv2I%2B41VkCtAaOwJO%2BsZl70%2BHDGAQexISNmBU2KV9HI4vHjVBBitMlINVGP2oWGwSiqthNukuYdUFgE%2Bvf9D5fz1IxTY9uuvvuRcxhMcFYwGLnVMF374TEn1XbtpJWotDqb4QxhWfHL5ASvbY%2BbV9ojt1EwTEH4UgQ8lZpvpMVvkR9ckuXrM7KWBIUBsUlAfU2kbS1OOjgmwbQGLJo0b0VHWz%2BmS3TI615bfnWR7dmmZkIQFckanA7lOdrS5tG1uudKGayaz2L23Mo%2B0G92lQiWr6%2FLczeQyc07eSNxb%2B1G4wrvmAxQY6pgFfxXMpSD6WE6lldbS8t5RK6bIJGsWOkmy78v8g0X591EXl2uaswYqFVHETs2XLhaoWFDsvW29LjY%2FkPL11t28Cyc34H9u31lmTfWBMync%2F26p8hUj1rmdiELZTvMRuY%2BaJjqsnmsCehV9h9VSENmbggSGYFTPawCw4i6S5fOLYuaam17Ux0NHqhFRGXyavVBQycZisflxRmGq0xYTPhVs98U4trQCx&X-Amz-Signature=721b34f4b3a6c6f8d45c8feb93ae7c5bb547b080f2b0f576325b6bc183d6ae4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
