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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OGO7FR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIA5HMSpExcawvUCz7gKmSghNTV222Wyc3%2FzFaa7XHABZAiA5XoZ%2Bz9xOTAU2woXJljTCKnqGnNvXN93SVoY9y5p1TyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0G59M6WC8UPoFIYDKtwDkwKVs0c4VIt6y47c1UFvxoFTq9QG90p%2Bxk2rPenwJ%2BAHQNU3PSazArOgwaaIBNzPSNkefeEQTHriaMqZNx%2FC6wgANgMqwZ%2BzqMQ2KFIJJBICpE0kVvNG9%2BZYOTsKHmSFf5s6gApFTs1EAiIaAxd251yjR9peg%2FEu4mYUEg40oYj6n%2BooWGazSK59M1C49oyfzL87NeYQuXmpXtP0EB%2BfgSUudbDJDTq8zwkppE2Q9eGOpBmcDOxaaF1FGdMIA5y%2F4Pj%2B0A%2FYK1HE1ESDOpNSYvySBuXgqgcSyL9g%2BaJk%2Bx5ggDCIVMDTc7K%2FwmiqLw37zjnQ7ryWy4czUQ6nCHnipSUn7ZxpGXsSfVFkpy9vcUCSL4uZEdswK94Jxm2bFBMXRupxkEGt945%2BvETJ6xyTOs8UJNlKr7PLtGbZ9a6GiNEruo0Fwq6HVhiREGdmlQKNcy%2BDQw3qkqap3oTn%2B41hqMj2ZJczIQrX4A%2B2dky%2FnzrtcDidcr00aQpr3Rv3YsupcuKoMHYuMtpLSQsiOKBr83J4ZX3NYd2S1i3PAkrlr4MkfBiuTsmMopWVIy%2FF1f1MDLp%2BhP%2FTPADuS2EiAS4NblZx4U1UDz7IgWLc7%2FHnT5iYFtWw6fY1GlEsl38wqrL3wQY6pgGnC6O%2BqkEDKwAE3P1qmpfGD689RvbTL6gcYwQIXb9%2BaT6Qe9qQaA0SCpcjPPl1SmuAqWNIRtT9K%2BX%2FgH2pk9ZZVcAURnRkHodrryk50oVBxENwBV%2FHGFO61Z0p3AK%2B5BIPqHxaaK8ebL8JnnjrWHmUYfSHof3g9L4Wuwkl68xKbpyBS%2FHy0IbI8d8j%2BtD8vJRY%2BqYbWUgZ70z2JTyzIzFAlNIZ1%2FXP&X-Amz-Signature=d105a332577cb958cd7486d3705f7081c875db4e57fae6b741df37892fc05cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OGO7FR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIA5HMSpExcawvUCz7gKmSghNTV222Wyc3%2FzFaa7XHABZAiA5XoZ%2Bz9xOTAU2woXJljTCKnqGnNvXN93SVoY9y5p1TyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0G59M6WC8UPoFIYDKtwDkwKVs0c4VIt6y47c1UFvxoFTq9QG90p%2Bxk2rPenwJ%2BAHQNU3PSazArOgwaaIBNzPSNkefeEQTHriaMqZNx%2FC6wgANgMqwZ%2BzqMQ2KFIJJBICpE0kVvNG9%2BZYOTsKHmSFf5s6gApFTs1EAiIaAxd251yjR9peg%2FEu4mYUEg40oYj6n%2BooWGazSK59M1C49oyfzL87NeYQuXmpXtP0EB%2BfgSUudbDJDTq8zwkppE2Q9eGOpBmcDOxaaF1FGdMIA5y%2F4Pj%2B0A%2FYK1HE1ESDOpNSYvySBuXgqgcSyL9g%2BaJk%2Bx5ggDCIVMDTc7K%2FwmiqLw37zjnQ7ryWy4czUQ6nCHnipSUn7ZxpGXsSfVFkpy9vcUCSL4uZEdswK94Jxm2bFBMXRupxkEGt945%2BvETJ6xyTOs8UJNlKr7PLtGbZ9a6GiNEruo0Fwq6HVhiREGdmlQKNcy%2BDQw3qkqap3oTn%2B41hqMj2ZJczIQrX4A%2B2dky%2FnzrtcDidcr00aQpr3Rv3YsupcuKoMHYuMtpLSQsiOKBr83J4ZX3NYd2S1i3PAkrlr4MkfBiuTsmMopWVIy%2FF1f1MDLp%2BhP%2FTPADuS2EiAS4NblZx4U1UDz7IgWLc7%2FHnT5iYFtWw6fY1GlEsl38wqrL3wQY6pgGnC6O%2BqkEDKwAE3P1qmpfGD689RvbTL6gcYwQIXb9%2BaT6Qe9qQaA0SCpcjPPl1SmuAqWNIRtT9K%2BX%2FgH2pk9ZZVcAURnRkHodrryk50oVBxENwBV%2FHGFO61Z0p3AK%2B5BIPqHxaaK8ebL8JnnjrWHmUYfSHof3g9L4Wuwkl68xKbpyBS%2FHy0IbI8d8j%2BtD8vJRY%2BqYbWUgZ70z2JTyzIzFAlNIZ1%2FXP&X-Amz-Signature=c0fe638ac67d0a778f61cacf6bf34274b4c59298ec9ac2c2fdda2d1048c7b608&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
