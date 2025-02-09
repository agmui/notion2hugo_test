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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIX46UG4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7S5gTg8Uj%2BlHzUR2mBcANmIXK9eIIXiUS2XH8%2Bag88wIgJ%2F9%2FGVgeH88o3%2FHueYG2rp9bYaAaDfsyBGo1ibqxnAwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDBU6Eo%2FbkH8dLKeSrcA4WJap5VG1TOvktUeQRIlJ7bAPvgC5%2BRVRKV%2B%2Bpsut%2FrXlhaF1eas2n%2FlMrix29SumXXOUqJKdj3%2BFbYBMDC1wJMdMzcmatsLp2Zx7UQoYrNgaGhcpOI90hNYaXouYah1hzStXgktbOXut5i61EsWHtV2Q0xPwSmJugINxuC3vlrsotsHuWVQYO58n251kfRMFaozO5DZToWmFLHYQ8nPpZ4da7Js1Tn%2Fr4DxdsSnfRSfCXdxwZsgI%2FVQMDWU0h5T9DWLZnEAKI%2Br4%2BQJ5Oh5lRHXpHsBLs%2BLL7NWAuXRonCVAIJl%2BfV9%2BK9T7RrwUKarBvOPyioyZ6Yt1Q1yIvOMcabL0%2Fe%2BfWSpwbzRJJH7AqM7AbfJobv2iEDytNulgSB3Eq8IMnni8zB8F4F%2FRIv0eZVvFGgkZIJpGudupHrFbHnWFQ1utjgDpLNUVLa6t0OOj3dy6h3vYBz%2BqghOw4sKKWXY8nQTTcqZWiq%2BxnjocNyEI1qmmLYtZyO3Z2wj%2ByGywYgqjLup69ZjlA7mqSfi74S6YqQY0m8uRFE%2Bm%2F8MwQ6di9HvIDlPl9pcDCdYWz2Hqt%2FSOzLbkqwKFIF6Ps66dfajfJb9n1G0VkQpvP5EoDRXQlw4HesBLq63f0zMN6%2BoL0GOqUBNX064iscXmOqMiM4%2FTc7Oti9tRByeYyaP15gpSvGW6PMb4fBu9lpHSXZcr4Ew9rMZ6oiUvH%2BzDVwKQCj41If4jhEWn8QITWevhDmSjacllOUQcMQKPkbq%2Bt1yz4oTeXKwbjzoM36WMRif66%2F%2FhE8ePfhm5j5NvaUkRMfYD7DF2YcFq7OBC%2F8Fv0C27MiOu%2F93x65yqeb1ptDTZgS4lPn2jWlHEAI&X-Amz-Signature=b0d0702ea1e64154049de8989fee828aba358f628fef61ca116040b114aeedc9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIX46UG4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7S5gTg8Uj%2BlHzUR2mBcANmIXK9eIIXiUS2XH8%2Bag88wIgJ%2F9%2FGVgeH88o3%2FHueYG2rp9bYaAaDfsyBGo1ibqxnAwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDBU6Eo%2FbkH8dLKeSrcA4WJap5VG1TOvktUeQRIlJ7bAPvgC5%2BRVRKV%2B%2Bpsut%2FrXlhaF1eas2n%2FlMrix29SumXXOUqJKdj3%2BFbYBMDC1wJMdMzcmatsLp2Zx7UQoYrNgaGhcpOI90hNYaXouYah1hzStXgktbOXut5i61EsWHtV2Q0xPwSmJugINxuC3vlrsotsHuWVQYO58n251kfRMFaozO5DZToWmFLHYQ8nPpZ4da7Js1Tn%2Fr4DxdsSnfRSfCXdxwZsgI%2FVQMDWU0h5T9DWLZnEAKI%2Br4%2BQJ5Oh5lRHXpHsBLs%2BLL7NWAuXRonCVAIJl%2BfV9%2BK9T7RrwUKarBvOPyioyZ6Yt1Q1yIvOMcabL0%2Fe%2BfWSpwbzRJJH7AqM7AbfJobv2iEDytNulgSB3Eq8IMnni8zB8F4F%2FRIv0eZVvFGgkZIJpGudupHrFbHnWFQ1utjgDpLNUVLa6t0OOj3dy6h3vYBz%2BqghOw4sKKWXY8nQTTcqZWiq%2BxnjocNyEI1qmmLYtZyO3Z2wj%2ByGywYgqjLup69ZjlA7mqSfi74S6YqQY0m8uRFE%2Bm%2F8MwQ6di9HvIDlPl9pcDCdYWz2Hqt%2FSOzLbkqwKFIF6Ps66dfajfJb9n1G0VkQpvP5EoDRXQlw4HesBLq63f0zMN6%2BoL0GOqUBNX064iscXmOqMiM4%2FTc7Oti9tRByeYyaP15gpSvGW6PMb4fBu9lpHSXZcr4Ew9rMZ6oiUvH%2BzDVwKQCj41If4jhEWn8QITWevhDmSjacllOUQcMQKPkbq%2Bt1yz4oTeXKwbjzoM36WMRif66%2F%2FhE8ePfhm5j5NvaUkRMfYD7DF2YcFq7OBC%2F8Fv0C27MiOu%2F93x65yqeb1ptDTZgS4lPn2jWlHEAI&X-Amz-Signature=f28a4f4a6b03c2e37171160c9e15b52e7a63febd274ff2b7805cd49e050ae823&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
