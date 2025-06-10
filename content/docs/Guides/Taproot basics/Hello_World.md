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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K56PKUT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA5WKi7BiJCradN7EVKmlmrDHwI1U8dtGOZzHosGmC5AiAoqj2jXDKkqjG78K7CfYDntbQEf8ZH%2B%2BbCUPy7vbIrvSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzBcWqYXa39TcOJHoKtwDa4Zje6hRA6T5LHMcFdZd8G3HWfwKh6j3v1sHFC9Xp4KPTKO0W8K1njNPk5dw3EBv77g403fZhwdwbvj4brRkRKsVKODvTkn7v8QyU0UMx7bCbP0nrSRqgvoPOGHIM7KfVxS1975EHBiCO37tBg2uGH1vHMeAZvu5pJj2JCzWP6cI%2BLbO5dwuxpgLFvoifeGMJ3A9Tb7GAF8MH40Cd5o55Bgfb0i6cF8NMyBDN0VxJ8DorY7uKq6w9KNIr%2FPvM6cmg%2B13lXUsgD0xsoKX14rEvFOxPHKryLKl8Ph0yxp9SoFM9%2BdUxlsE7znnDJLpyfJ%2BTDEyPT2VBVQOmA6Q%2B024ELlwta9FnA3k2nHpeHfjWMFPZ8VHJ5JcefbAZ7oHMCjARjdc%2FkpWWWif2qKLuVoJny6L7U84sJ3X%2BZueO9FVvkBhdiMVBRlehaDSM0p1ZUnZlFCrk9FQu0QPT18FwGYnBQ%2FdMRt24EhYj3ZQ345mtiD578h7aZ8h9ef8WFcRpMuj9hsZ3bdzbRUaO81JDCmaQSuUKbujQXxaz95cPGO9R5YCTHja93MWd2OGwxKz4hcuYlyT4a1%2Fq%2FPMNTWt726RPM0PoQMbAasRnz7QlT%2Bk2y0Nsm866zrnp2b9Pk8wz8ihwgY6pgGFAAG9qth3MtGeF55gHUiyDSN74Oiuau4XisdlNkopdnB6gRMovKn6vqnSGrJVb6aNnhU5iPLRJWoCH%2BEliwXQbkfMXalwJWeS1G9u5pfzjfT8JT161xR7RRgbeZVI6dSicj8GckU79KLslaHQfmmL59%2FKpglcZmwMDmQen%2B1E86k2hNN%2Bn5LGxjXkvsdK1X5T3%2FyuJ8t5FoYnK65vxLBpz28n1oLs&X-Amz-Signature=c85f5565b656a6650fe7a6e4fc71e11e6c62e6391db2d04f88971baf05aefe86&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K56PKUT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA5WKi7BiJCradN7EVKmlmrDHwI1U8dtGOZzHosGmC5AiAoqj2jXDKkqjG78K7CfYDntbQEf8ZH%2B%2BbCUPy7vbIrvSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzBcWqYXa39TcOJHoKtwDa4Zje6hRA6T5LHMcFdZd8G3HWfwKh6j3v1sHFC9Xp4KPTKO0W8K1njNPk5dw3EBv77g403fZhwdwbvj4brRkRKsVKODvTkn7v8QyU0UMx7bCbP0nrSRqgvoPOGHIM7KfVxS1975EHBiCO37tBg2uGH1vHMeAZvu5pJj2JCzWP6cI%2BLbO5dwuxpgLFvoifeGMJ3A9Tb7GAF8MH40Cd5o55Bgfb0i6cF8NMyBDN0VxJ8DorY7uKq6w9KNIr%2FPvM6cmg%2B13lXUsgD0xsoKX14rEvFOxPHKryLKl8Ph0yxp9SoFM9%2BdUxlsE7znnDJLpyfJ%2BTDEyPT2VBVQOmA6Q%2B024ELlwta9FnA3k2nHpeHfjWMFPZ8VHJ5JcefbAZ7oHMCjARjdc%2FkpWWWif2qKLuVoJny6L7U84sJ3X%2BZueO9FVvkBhdiMVBRlehaDSM0p1ZUnZlFCrk9FQu0QPT18FwGYnBQ%2FdMRt24EhYj3ZQ345mtiD578h7aZ8h9ef8WFcRpMuj9hsZ3bdzbRUaO81JDCmaQSuUKbujQXxaz95cPGO9R5YCTHja93MWd2OGwxKz4hcuYlyT4a1%2Fq%2FPMNTWt726RPM0PoQMbAasRnz7QlT%2Bk2y0Nsm866zrnp2b9Pk8wz8ihwgY6pgGFAAG9qth3MtGeF55gHUiyDSN74Oiuau4XisdlNkopdnB6gRMovKn6vqnSGrJVb6aNnhU5iPLRJWoCH%2BEliwXQbkfMXalwJWeS1G9u5pfzjfT8JT161xR7RRgbeZVI6dSicj8GckU79KLslaHQfmmL59%2FKpglcZmwMDmQen%2B1E86k2hNN%2Bn5LGxjXkvsdK1X5T3%2FyuJ8t5FoYnK65vxLBpz28n1oLs&X-Amz-Signature=3ceab4e961eb22d00692a5ba1c46de18ca1ed927da107ba521944ecf4906a14f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
