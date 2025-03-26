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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWZTZ7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiNV0dK52mGbZckxyzHOBVq78dWkMfHjU%2FfvfFHsXpQIhAP3H8sBpf642M6%2FV1kQJ32tZKeD2pTQDS%2B17hSR%2F444xKv8DCCoQABoMNjM3NDIzMTgzODA1IgxsLc4Mw6db1TtyLFMq3APGBT8GflxL5AQvRHjUov9%2BS4qIgep1GTbgD%2FIHSAWKbLcTpVIFqfov3KnBox0qzOghots5r0nzT2Zu5IX%2BzCJJkzRAol3sjqq4rEcR5Amm65%2B%2BEy8UT1%2BOLet1UnyW1lbyUBXx0X3vxkLrA2hK3VYCHUXH%2Bns%2F7PLFPlo%2BUwUYpFP6nNmx5WxCQ8XzLxW6RwvYC1DD%2B5Cy2drmJo5m7ZtTs%2B4SIB79gYRbYyy%2BZAdCkjUz4rGtWxshi2%2FmA4Pg8TIlMQHCUtN8tiZWDBgR0GrL1k%2BNVZKk%2F4KOQVl679bZrO8R1EMJrCMm9UyelHYK8vEToDVNzvpIa3w4tBPgKdd%2FXuJvvbNw7CaCbZQjCJjaZCEF5Rl7NUS5WJKrgPcWCfOI0rHdsQ%2FTiIpW6QKIdOqpRuxaRlsF%2BWbrJW7sfz32JjKQCr5rqAuO4Px%2B1hKhYGcuv9Gsro29ofavBAG2avPcD8eSEw7WN7cboUZK45OCXV31rx5nrpMspabijXYk%2FU52u%2BPaCoqX5fsR4pdjCG6sjMyq%2FMctlV6Ejjq7zTAgaZ%2BeTyZYSXrFTSR2Yxo1r%2FZ50JiJ8eFqTICDIPOuJrQfuMZCQ2v6Junme7DcATYCvOvx7ZsNEvWU2LfxYDDNio%2B%2FBjqkAQlxRWMa7ZLZ0dRTmO6AyyX6Y6ZxJaMF7PCWIcEppKw4gCaJBQl6V5KVADrEQRFjKflLuXDmsTPOF%2F8XQ2TAWjhrXB9qnti%2B9re%2F%2BvuJsiL5mqn0Qz8k0Hw4LR4uiSNOvwExgUGdQ5UaDEUkOZ48Vl6IAokDhLNZp5Tqv%2BaebWgwZGAzMFBcKxbHgpn3%2FNx5yHCrsdFB62lovwP65Tq2blGYDU2j&X-Amz-Signature=2bf01171f63ce316bdfc488fb5aa1dc490e71e42b94991046106b75fe4bf6540&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWZTZ7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiNV0dK52mGbZckxyzHOBVq78dWkMfHjU%2FfvfFHsXpQIhAP3H8sBpf642M6%2FV1kQJ32tZKeD2pTQDS%2B17hSR%2F444xKv8DCCoQABoMNjM3NDIzMTgzODA1IgxsLc4Mw6db1TtyLFMq3APGBT8GflxL5AQvRHjUov9%2BS4qIgep1GTbgD%2FIHSAWKbLcTpVIFqfov3KnBox0qzOghots5r0nzT2Zu5IX%2BzCJJkzRAol3sjqq4rEcR5Amm65%2B%2BEy8UT1%2BOLet1UnyW1lbyUBXx0X3vxkLrA2hK3VYCHUXH%2Bns%2F7PLFPlo%2BUwUYpFP6nNmx5WxCQ8XzLxW6RwvYC1DD%2B5Cy2drmJo5m7ZtTs%2B4SIB79gYRbYyy%2BZAdCkjUz4rGtWxshi2%2FmA4Pg8TIlMQHCUtN8tiZWDBgR0GrL1k%2BNVZKk%2F4KOQVl679bZrO8R1EMJrCMm9UyelHYK8vEToDVNzvpIa3w4tBPgKdd%2FXuJvvbNw7CaCbZQjCJjaZCEF5Rl7NUS5WJKrgPcWCfOI0rHdsQ%2FTiIpW6QKIdOqpRuxaRlsF%2BWbrJW7sfz32JjKQCr5rqAuO4Px%2B1hKhYGcuv9Gsro29ofavBAG2avPcD8eSEw7WN7cboUZK45OCXV31rx5nrpMspabijXYk%2FU52u%2BPaCoqX5fsR4pdjCG6sjMyq%2FMctlV6Ejjq7zTAgaZ%2BeTyZYSXrFTSR2Yxo1r%2FZ50JiJ8eFqTICDIPOuJrQfuMZCQ2v6Junme7DcATYCvOvx7ZsNEvWU2LfxYDDNio%2B%2FBjqkAQlxRWMa7ZLZ0dRTmO6AyyX6Y6ZxJaMF7PCWIcEppKw4gCaJBQl6V5KVADrEQRFjKflLuXDmsTPOF%2F8XQ2TAWjhrXB9qnti%2B9re%2F%2BvuJsiL5mqn0Qz8k0Hw4LR4uiSNOvwExgUGdQ5UaDEUkOZ48Vl6IAokDhLNZp5Tqv%2BaebWgwZGAzMFBcKxbHgpn3%2FNx5yHCrsdFB62lovwP65Tq2blGYDU2j&X-Amz-Signature=227f0589c74e57025fbd87242c4c1346e5227fb82ce3ed8b68939ca1f8a43ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
