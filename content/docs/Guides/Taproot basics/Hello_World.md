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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFITWPW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD6%2BpxJW%2BdGKaAwoD9iV3qoZeYpwZfQGr5fYRf8Ddvd5wIhAODWb%2FHNOA7ndUBbHmCiUmPOljiINZrSTY%2BrWejP0BBtKv8DCF8QABoMNjM3NDIzMTgzODA1IgyKWICOotwHAju2d3gq3AN9Y9KrZ%2F00C80V6xlsMFeFXwk1SKglWKF%2FDyOyVY%2F%2FJFiZaF4wysJ1uQWVJFw3z0%2BAFo4PGqrzsKLUUfaA%2BXlRdTM6J%2B8mgyQVCT%2BbbDaga3R%2BdkpbbdsMRQJtODa3nx8Vy2Q3q7ia19aXJecej9vZtPLalQr7JpL9imZVME2k1w%2BO5V88Ke0QL2BX88c08nL8iguj9RWc01P8m4mYUcb%2FdEjT0Ud0v6VShOaWXdaZa4e62n9o8Y1hsO2oF4%2FUmGijJy8GvF0r3CVJXBhzul8AKaTMxLC31emlPPWByn2lMWS90UPU4qD4VDh44VMiV%2F8tusjPux5%2BJk4dGwaDXny%2BkL408wlVWgHLUFePDD%2BlB0mN6DloPhYZmcnjdrQAGscNHDaHGjTd36pzaA93jD%2FkCyCpJKya5VlYpO43HY%2FJQP8krJNtPcoHWP0CU2%2FVQvI%2FT65jgT160ogqzjvsyyvLTrsvKn%2BFBW8ZiWVqzf8eX2Xshwdu45zRkgJGvQNI%2FgIp4wT86G86iQWDCW2iuff0QN4qx2bm34sNja4OgiMkTvZ3vdi4SBnH4VYD5cCUJT9vulbKRxKtlkvCu7Y4wlHrggfpGMhHQbRlrKjfCS%2Fvu42bRWqKF7eFkWB49jCR%2BpK9BjqkAQ8sZWnW8CWFR57klncaimSTWj1E2bru5WVzob2axhbUFwapaoqb71x%2B28D7FjPuJY3zglXunakSO%2B%2FkTVlvenA3dzPqeZdty9kx7xMSpw9UKtgUcpujoky2q0WQLQb9XJM850OpwF0phvqwsPRLN3EoePrqOe7mAjtO2DxdNA6ub69vuujdY0qQ3lVncQ1MBALVowoY7JfzWy4HQoYrHMBqej8B&X-Amz-Signature=b5ccd816541ebdd2d4a06574bdcaa18950123edf0e7f45a7c1f2980066a09c81&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFITWPW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD6%2BpxJW%2BdGKaAwoD9iV3qoZeYpwZfQGr5fYRf8Ddvd5wIhAODWb%2FHNOA7ndUBbHmCiUmPOljiINZrSTY%2BrWejP0BBtKv8DCF8QABoMNjM3NDIzMTgzODA1IgyKWICOotwHAju2d3gq3AN9Y9KrZ%2F00C80V6xlsMFeFXwk1SKglWKF%2FDyOyVY%2F%2FJFiZaF4wysJ1uQWVJFw3z0%2BAFo4PGqrzsKLUUfaA%2BXlRdTM6J%2B8mgyQVCT%2BbbDaga3R%2BdkpbbdsMRQJtODa3nx8Vy2Q3q7ia19aXJecej9vZtPLalQr7JpL9imZVME2k1w%2BO5V88Ke0QL2BX88c08nL8iguj9RWc01P8m4mYUcb%2FdEjT0Ud0v6VShOaWXdaZa4e62n9o8Y1hsO2oF4%2FUmGijJy8GvF0r3CVJXBhzul8AKaTMxLC31emlPPWByn2lMWS90UPU4qD4VDh44VMiV%2F8tusjPux5%2BJk4dGwaDXny%2BkL408wlVWgHLUFePDD%2BlB0mN6DloPhYZmcnjdrQAGscNHDaHGjTd36pzaA93jD%2FkCyCpJKya5VlYpO43HY%2FJQP8krJNtPcoHWP0CU2%2FVQvI%2FT65jgT160ogqzjvsyyvLTrsvKn%2BFBW8ZiWVqzf8eX2Xshwdu45zRkgJGvQNI%2FgIp4wT86G86iQWDCW2iuff0QN4qx2bm34sNja4OgiMkTvZ3vdi4SBnH4VYD5cCUJT9vulbKRxKtlkvCu7Y4wlHrggfpGMhHQbRlrKjfCS%2Fvu42bRWqKF7eFkWB49jCR%2BpK9BjqkAQ8sZWnW8CWFR57klncaimSTWj1E2bru5WVzob2axhbUFwapaoqb71x%2B28D7FjPuJY3zglXunakSO%2B%2FkTVlvenA3dzPqeZdty9kx7xMSpw9UKtgUcpujoky2q0WQLQb9XJM850OpwF0phvqwsPRLN3EoePrqOe7mAjtO2DxdNA6ub69vuujdY0qQ3lVncQ1MBALVowoY7JfzWy4HQoYrHMBqej8B&X-Amz-Signature=a29cc4ffe10c78de30fe5e3039784433329ccd97b1872fa2a7dbc05df0c7800c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
