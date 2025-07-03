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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHDUZEV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAh3fbUblwdawpuTwBTyON7YsO6W3UKy8t2d8kuFHGkPAiEA2D%2BD6Fp40gjyFAamBM5nQRzoAC1Q8mrKhRvllGt7NR8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC72NAhWYXxwVIoQWircA8bMFEMbZAljpLMy%2Fpje7%2BMGiEAm49b7dEb80%2BUKr6T2SQFFy%2F5U3YHDo%2FXNzJg0KveTg%2FJsGxdJw0Hthz1pYdejJPkX5MS00sFFj36Zmiav1D31RxkAyb4TF%2FS2OAHBJyl7b%2FKJ3%2ByKmI0sdWqYvQYc1akcdJfh6maq0ajemTJYRbBbgsLgbktMsbIkVrhQBBs3%2BH%2FZQCcsJNYeP09Rl9VXXkX%2B9YTBzkNvOW6AtTiz6idV9vVKQM70951O8tvjueIByOjcUOSwkQ4GnSzKWtmfdKZJpXqwN697rJ1fplckKxQvFN1rkb3HW2fE6LOnKxhBH%2BOU9Ivf9xDeJDWWLnEyYWuIGUGAvmitxxCRSNcoF2mSarxLKLUl%2BxJi9Du88vuVftOt8cfhkqy%2FWm6ARGPTzaV15Lznz4M6n5cWOWEC5vZhPdsUxFGQgVdxb6%2FmnABg27QC3lO0QpQfOKyMTQ6wgn6K%2FoYHMesFfM6WOgFAE96Wca6EYGdAVEGbQiL0YngqH6r%2BciaodminASJOM5yz4klBxdXvmsz7R6HWl4Nh1IhyPT8wiE9vqynqXGeIuHDDqPneNmePMkyF6dxs6qqHYnZbJwNe36qpE%2Fx3qcaqwewCvMhUIdKXOxDIMJnmmsMGOqUBRQbJ5iV1oPQdH1uSHma%2BHY6u2x6oXFg2DHAhntQNJ12pPJYSX7cKAKlVOhOYadCUbqCmkk7g%2FhVqAgVeDTVHtdquAD5jHko5yIcwGXys6Y2wcKKrVyfRh8Qnc%2BoBlhCiYv%2Fz%2FfRAydQ5oVI6ZBBEHt3s5%2FMNcwMpnU0diucLcts4WeP0RBYRmJMJRDN8Dm3GLwbolrUlonYce5jt%2FgM%2F9mkGAeEO&X-Amz-Signature=ed187dfcf9e124ebf5450a283a51625dc2557a511ff005fe80bafd26925d1ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHDUZEV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAh3fbUblwdawpuTwBTyON7YsO6W3UKy8t2d8kuFHGkPAiEA2D%2BD6Fp40gjyFAamBM5nQRzoAC1Q8mrKhRvllGt7NR8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC72NAhWYXxwVIoQWircA8bMFEMbZAljpLMy%2Fpje7%2BMGiEAm49b7dEb80%2BUKr6T2SQFFy%2F5U3YHDo%2FXNzJg0KveTg%2FJsGxdJw0Hthz1pYdejJPkX5MS00sFFj36Zmiav1D31RxkAyb4TF%2FS2OAHBJyl7b%2FKJ3%2ByKmI0sdWqYvQYc1akcdJfh6maq0ajemTJYRbBbgsLgbktMsbIkVrhQBBs3%2BH%2FZQCcsJNYeP09Rl9VXXkX%2B9YTBzkNvOW6AtTiz6idV9vVKQM70951O8tvjueIByOjcUOSwkQ4GnSzKWtmfdKZJpXqwN697rJ1fplckKxQvFN1rkb3HW2fE6LOnKxhBH%2BOU9Ivf9xDeJDWWLnEyYWuIGUGAvmitxxCRSNcoF2mSarxLKLUl%2BxJi9Du88vuVftOt8cfhkqy%2FWm6ARGPTzaV15Lznz4M6n5cWOWEC5vZhPdsUxFGQgVdxb6%2FmnABg27QC3lO0QpQfOKyMTQ6wgn6K%2FoYHMesFfM6WOgFAE96Wca6EYGdAVEGbQiL0YngqH6r%2BciaodminASJOM5yz4klBxdXvmsz7R6HWl4Nh1IhyPT8wiE9vqynqXGeIuHDDqPneNmePMkyF6dxs6qqHYnZbJwNe36qpE%2Fx3qcaqwewCvMhUIdKXOxDIMJnmmsMGOqUBRQbJ5iV1oPQdH1uSHma%2BHY6u2x6oXFg2DHAhntQNJ12pPJYSX7cKAKlVOhOYadCUbqCmkk7g%2FhVqAgVeDTVHtdquAD5jHko5yIcwGXys6Y2wcKKrVyfRh8Qnc%2BoBlhCiYv%2Fz%2FfRAydQ5oVI6ZBBEHt3s5%2FMNcwMpnU0diucLcts4WeP0RBYRmJMJRDN8Dm3GLwbolrUlonYce5jt%2FgM%2F9mkGAeEO&X-Amz-Signature=d8cd2e21b6c53b5bb833057e4e6449ffc8c109c5de2fb95bb27e63e325d48eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
