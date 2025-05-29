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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFCIG52%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDkYSfiMIbMCv7tZzxHeoAznM4keAr9Yu07nOs3uxaHAiEApXMwJ5RDGAAo5ZVk5Gpfax987H4Z%2FiaT31wG%2Fxa0ALwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf1XNee72ZUQkS2SircA%2BI53Hra9kSuLVXgfoug2djrRhOmQuRjb62sy1rPjslX7gTD9ecZ9q0e0FuMnfeNnkuPdps%2FZmsf2%2F1ZSiFgHPRr2w9soaZ0AlvqxQax9KHMGgQDI%2F0Kw3HChwAhWR8i3FpNXuJ81pHBW959EjCsjD1vQwqs8VYRj7UcUCjZnyIOLGfx0grG8xF49imKXc1hV6%2BNUN0jYno8kzYNbfSZr85CEkPzuCWMpntKZPljaKh4Rd9s0AG6JeOTT2IDEP9JrhaYGOEVGNHpxZLe9w15Aj0msgnATTVvTc6JRnNdKeVZW%2BDCCxWopsLrbBXoCAXR1xtM8VatEWM858qhm%2FLI%2BYmRtQdQOAH%2FbnfKYTwr0xLXN5x%2FWs7TbP4ud0Gkdfi2QvNimqh0IOSGhf6NUedTjcG1HX96c%2FFMN0K1sbEaEN5OL8gdGGZ%2BSpUH78Pd8%2FNYtiKGKeS9Pu1cLQDGluUWcOEvbK%2FgZuKPuJFGd4%2BCZC1aomyebJcIthvRzUXsh6nwG%2BFZgkBB2vbDt2ohdIE2picegqfmaEQcn2aQwpzH73k1s3CxZH7jjr1eCVYtJlTyqj4Sxcaf%2FqF6sVHlM%2Fl4JwKjuQisuPGloVAG6LoE%2BHV%2FHaMhtpS0VIRhqiz5MKzb38EGOqUBGBJ7aGwM7xLC9dKB0PW9x1TwLYHxei0%2BX6YIKMw%2BrQOhLcDs4Exf7%2BMBC9G9DHxURyKh9ibmTPOKgdMcp7hQxqXNARK3%2BD88mBoCCGtwFx5YrNUXv9cy1KZ6lIdfIwj9KiwzXSCLcd5i1PpKaAs08vd3wK%2FPh1o8Hs0YcoPBLpUG1V44aoL5fgcWtay%2BGdE%2FnUqumr0Z7cQ7vc%2BdhEv6xeEeN%2FJ9&X-Amz-Signature=d4559c3d67dcc43a4091d8c4ee28899e376eef712ff646b27d6bf211dfee2eda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFCIG52%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDkYSfiMIbMCv7tZzxHeoAznM4keAr9Yu07nOs3uxaHAiEApXMwJ5RDGAAo5ZVk5Gpfax987H4Z%2FiaT31wG%2Fxa0ALwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf1XNee72ZUQkS2SircA%2BI53Hra9kSuLVXgfoug2djrRhOmQuRjb62sy1rPjslX7gTD9ecZ9q0e0FuMnfeNnkuPdps%2FZmsf2%2F1ZSiFgHPRr2w9soaZ0AlvqxQax9KHMGgQDI%2F0Kw3HChwAhWR8i3FpNXuJ81pHBW959EjCsjD1vQwqs8VYRj7UcUCjZnyIOLGfx0grG8xF49imKXc1hV6%2BNUN0jYno8kzYNbfSZr85CEkPzuCWMpntKZPljaKh4Rd9s0AG6JeOTT2IDEP9JrhaYGOEVGNHpxZLe9w15Aj0msgnATTVvTc6JRnNdKeVZW%2BDCCxWopsLrbBXoCAXR1xtM8VatEWM858qhm%2FLI%2BYmRtQdQOAH%2FbnfKYTwr0xLXN5x%2FWs7TbP4ud0Gkdfi2QvNimqh0IOSGhf6NUedTjcG1HX96c%2FFMN0K1sbEaEN5OL8gdGGZ%2BSpUH78Pd8%2FNYtiKGKeS9Pu1cLQDGluUWcOEvbK%2FgZuKPuJFGd4%2BCZC1aomyebJcIthvRzUXsh6nwG%2BFZgkBB2vbDt2ohdIE2picegqfmaEQcn2aQwpzH73k1s3CxZH7jjr1eCVYtJlTyqj4Sxcaf%2FqF6sVHlM%2Fl4JwKjuQisuPGloVAG6LoE%2BHV%2FHaMhtpS0VIRhqiz5MKzb38EGOqUBGBJ7aGwM7xLC9dKB0PW9x1TwLYHxei0%2BX6YIKMw%2BrQOhLcDs4Exf7%2BMBC9G9DHxURyKh9ibmTPOKgdMcp7hQxqXNARK3%2BD88mBoCCGtwFx5YrNUXv9cy1KZ6lIdfIwj9KiwzXSCLcd5i1PpKaAs08vd3wK%2FPh1o8Hs0YcoPBLpUG1V44aoL5fgcWtay%2BGdE%2FnUqumr0Z7cQ7vc%2BdhEv6xeEeN%2FJ9&X-Amz-Signature=d716dad4abb50e9baded68199e8d8a4b17392e4f9922f17b983319d0c1389b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
