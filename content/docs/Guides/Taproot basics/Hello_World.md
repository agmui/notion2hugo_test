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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBRZVKM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BIrZ8thMEyDhmPUI74dsJ4AfwnSpybxeSWYqo7r4HYAiBKSyADy0wZi%2FT2vJRyfUwC5Id8gm%2Bwk29Suua0Fsc6biqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1trhLJN0oI8pXgYKtwDbo0LQSgVHuWbJqUUshJX%2Fa0KJqpK6v%2Bw6VAYY2VjPZrfKPtk9qAi9AxsyeQt81HW2zVxUA16fZNeD2g0MplWnitj9CaLEcw9AtrmO7qvivFHARt%2FYQXZlcQ9gKxbyqm0gotAI%2FXb2PHjM3kAEBq9ZlFPwyVzJ6YBTz9Z43SUKy1YGOWSlWbAThX%2FIkLARfmia670vUw58%2BBlQpjdwybCRrZ3z3LGyX3JdZGCdv1dLPCmAleiX%2FgQxd64dIM51Y4kGBkq3qt%2FGsX7arzT7zpsqp5MP%2FQQp0GxbkAdsbi7WgzCUHFCjQfGzYea7MqTf49jMVw7VUgu7g%2BOjueGjErPtjYnlFyHVIJ9%2BFkSjtk%2BgUEUiedI8R0pD7eLaqiM2Du64sr1msqq5hmRBOjRp9He%2FdobRmCsf%2Fj2289SKwRHU6F%2Bnj6jJmWfxU7pXjzj%2BJUTkyluDCjZmpzPVC3dmfXABffjwIfvtIFj%2Fqx5Vz%2BEtowkLX0%2B5tm8pPqTyHEu1bJFoHbX36lgeJUxaWUtiq%2Bz1oYswrlgGGkkcMYEwLoW%2F%2FL69KCdv2m5MajLd5RwTS0lWtWuuNXWMXrUjTPMm34YHZUzrWkr88XxJo87g7M5ki%2B4zKcqPD%2FA1%2Fs7XTMwo87ZwgY6pgGeCeT3LAjBN1T5VP8Bnk3MbF3hyv%2BUfBoxOIWGhSVAgxs4rfiqpJTQTzhDN8lSzDx4CA%2BTF3Vy6V%2FUyVhTjIvhvwpzCx8XOH9s5XGQWJlz4ZRHzETe5TImj7YQQ49PVMIe1%2BPDp0yOFJDs0p%2Bz%2BABIuJFbmvfrDOo6bmCZKtD9uZSvlkMz2DpQGbIzgymfvSJK24h10mypYIH4sopFp%2FTHSy4ESPKD&X-Amz-Signature=67e43b8de257f6318dc25272ccc33d68c8fa534097d79719c2be1ef8149669c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBRZVKM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BIrZ8thMEyDhmPUI74dsJ4AfwnSpybxeSWYqo7r4HYAiBKSyADy0wZi%2FT2vJRyfUwC5Id8gm%2Bwk29Suua0Fsc6biqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1trhLJN0oI8pXgYKtwDbo0LQSgVHuWbJqUUshJX%2Fa0KJqpK6v%2Bw6VAYY2VjPZrfKPtk9qAi9AxsyeQt81HW2zVxUA16fZNeD2g0MplWnitj9CaLEcw9AtrmO7qvivFHARt%2FYQXZlcQ9gKxbyqm0gotAI%2FXb2PHjM3kAEBq9ZlFPwyVzJ6YBTz9Z43SUKy1YGOWSlWbAThX%2FIkLARfmia670vUw58%2BBlQpjdwybCRrZ3z3LGyX3JdZGCdv1dLPCmAleiX%2FgQxd64dIM51Y4kGBkq3qt%2FGsX7arzT7zpsqp5MP%2FQQp0GxbkAdsbi7WgzCUHFCjQfGzYea7MqTf49jMVw7VUgu7g%2BOjueGjErPtjYnlFyHVIJ9%2BFkSjtk%2BgUEUiedI8R0pD7eLaqiM2Du64sr1msqq5hmRBOjRp9He%2FdobRmCsf%2Fj2289SKwRHU6F%2Bnj6jJmWfxU7pXjzj%2BJUTkyluDCjZmpzPVC3dmfXABffjwIfvtIFj%2Fqx5Vz%2BEtowkLX0%2B5tm8pPqTyHEu1bJFoHbX36lgeJUxaWUtiq%2Bz1oYswrlgGGkkcMYEwLoW%2F%2FL69KCdv2m5MajLd5RwTS0lWtWuuNXWMXrUjTPMm34YHZUzrWkr88XxJo87g7M5ki%2B4zKcqPD%2FA1%2Fs7XTMwo87ZwgY6pgGeCeT3LAjBN1T5VP8Bnk3MbF3hyv%2BUfBoxOIWGhSVAgxs4rfiqpJTQTzhDN8lSzDx4CA%2BTF3Vy6V%2FUyVhTjIvhvwpzCx8XOH9s5XGQWJlz4ZRHzETe5TImj7YQQ49PVMIe1%2BPDp0yOFJDs0p%2Bz%2BABIuJFbmvfrDOo6bmCZKtD9uZSvlkMz2DpQGbIzgymfvSJK24h10mypYIH4sopFp%2FTHSy4ESPKD&X-Amz-Signature=3392e563627a4c73cf76aea20a4aa8f4a764249db3995dae7e0211d7ea24c441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
