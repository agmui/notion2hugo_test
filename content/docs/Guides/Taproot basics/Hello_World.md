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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVYR4LS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHrxlqksXgb1DPodVQEyuwd4j9yjRkoGCff4o7QTSNkpAiEAp4Fjpt0He2Y1gcs4aRkvWEELm5XrDLpuMU5QRS1ZFWIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaVcso93HPuS7%2Bx0SrcA1Gt5XL%2BQpyZLNv5Zd0UWoGvdR2GQ66MeKay%2BM06UfXZNHOa8LLmojbCzzGceIVS2oWK5zca0tUB7QomENdThVX8sRoypeneXJW9lNjCHAGPF2madMiGtyGQQiRPDH0c9ic%2FsTYJZeHE2epAM9%2FvWwMU%2FiME8xuPg12TcP462YEPY1mUlLeOCS1zi%2BZDOMv0VDermtUJbMnhKF9aY4VykcBXu5%2FrRpEje%2FQqfbJSZhWtFyRPnxoym4%2Bk7Unyye9gaBwIMEZ0IfVsz3vZH81GB7Nt%2BJ1P2eI6h680TGIfCSInEwKvc00W2cOGAVrYODPWd%2Fp%2B2iOwOxQr51co5EBy6WVzjHmSDnvDJJ%2F%2FJkm2IM4GMeaY9xsXiUk9%2Bi9vC%2FLY9OXnsVhA%2F9RoFAZp76yfytjlsZDY3FiAmrLX4D%2Bdjjl4%2BTF7Q6qB3una%2B2Zm4tCHCMkBshUcax7laEvvng1h6vYHBmR%2B6VP6ie7VyfY458%2FcaE4pEnnYQGjQj%2F56w32cPoR9xCl3FQfTR76lYvKYY4V0CrCopBhriqfOwyNM%2FNqFo88ndE%2F%2FLWKe4z6if62BeOzByeyuVwe7DpCqjnhyHFmMGQZgkx2EfOXJIqDAn4Lseu2qk4YvoVu65znRMOWLpL8GOqUBZ47Y%2Fs%2Bcxmv2aYvWo8hYqO8UibPzXFslKS0rT06RULjnVZ7dZ0JhwP4yN1lapRTVe2hh0sBt99DKRov6r2JprupdegwMijXdVWNOaiHyy%2F%2FUQPSPBmgiscZJPy9Zl0cMSPlx9cAUjxm1SS%2Bnz6OEQzkRkWOlXZOqKZgAdELR9UuOZVRB40ka2H6F6MQsGFAFwC8%2FD3MPyhu7rkXd6NapzLKD6bIb&X-Amz-Signature=ecd574c88aa30787e955d078ee0654bcf28285e0c05f4367bc8eb50a9d0d0b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVYR4LS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHrxlqksXgb1DPodVQEyuwd4j9yjRkoGCff4o7QTSNkpAiEAp4Fjpt0He2Y1gcs4aRkvWEELm5XrDLpuMU5QRS1ZFWIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaVcso93HPuS7%2Bx0SrcA1Gt5XL%2BQpyZLNv5Zd0UWoGvdR2GQ66MeKay%2BM06UfXZNHOa8LLmojbCzzGceIVS2oWK5zca0tUB7QomENdThVX8sRoypeneXJW9lNjCHAGPF2madMiGtyGQQiRPDH0c9ic%2FsTYJZeHE2epAM9%2FvWwMU%2FiME8xuPg12TcP462YEPY1mUlLeOCS1zi%2BZDOMv0VDermtUJbMnhKF9aY4VykcBXu5%2FrRpEje%2FQqfbJSZhWtFyRPnxoym4%2Bk7Unyye9gaBwIMEZ0IfVsz3vZH81GB7Nt%2BJ1P2eI6h680TGIfCSInEwKvc00W2cOGAVrYODPWd%2Fp%2B2iOwOxQr51co5EBy6WVzjHmSDnvDJJ%2F%2FJkm2IM4GMeaY9xsXiUk9%2Bi9vC%2FLY9OXnsVhA%2F9RoFAZp76yfytjlsZDY3FiAmrLX4D%2Bdjjl4%2BTF7Q6qB3una%2B2Zm4tCHCMkBshUcax7laEvvng1h6vYHBmR%2B6VP6ie7VyfY458%2FcaE4pEnnYQGjQj%2F56w32cPoR9xCl3FQfTR76lYvKYY4V0CrCopBhriqfOwyNM%2FNqFo88ndE%2F%2FLWKe4z6if62BeOzByeyuVwe7DpCqjnhyHFmMGQZgkx2EfOXJIqDAn4Lseu2qk4YvoVu65znRMOWLpL8GOqUBZ47Y%2Fs%2Bcxmv2aYvWo8hYqO8UibPzXFslKS0rT06RULjnVZ7dZ0JhwP4yN1lapRTVe2hh0sBt99DKRov6r2JprupdegwMijXdVWNOaiHyy%2F%2FUQPSPBmgiscZJPy9Zl0cMSPlx9cAUjxm1SS%2Bnz6OEQzkRkWOlXZOqKZgAdELR9UuOZVRB40ka2H6F6MQsGFAFwC8%2FD3MPyhu7rkXd6NapzLKD6bIb&X-Amz-Signature=16c202d2bae6b5bba98c84e75610e54498f2b3c16e0aee70a1b4f83b45931055&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
