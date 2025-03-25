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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OV2ATTC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4%2FXd6wWPOtRALWTqukObIM0s49iOy%2Fqe96Z1RyRWT5AiB28ATqAUchX%2FQpnMllBIIoFKCZTMyf1peL6wdUdkrvJSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTphutddlCIJ46DqfKtwDy8tJwR8rgbd8OF%2F4IjCl1w6cnP9TIAZ63ZBqVUz6BQ3S6uQlbs3WKO8u1ck%2BQ3Z%2BLwvcaFjFwiSqJORpFzSJPb%2B4gWcZgAZ8DJj%2BO9lacvt4vBJ35ASPzfDqJUUe9M27POnHwqYGhqtHfuvTftsRK%2BS2FZdFAUl8l01ssEEQPFpE8Ucj1hjxOwO01az6WTKs8NqM1YqK10dFxD8RlKYwAg3Q6Ai2p6wcOHJofosQNCatS8KQpQqEE5%2BOYuLkt9By%2FIFq1hXRR5%2FOrby9yD1r9yq19hKUPVm0lqdfMZaXvrfISfLXA4m3YuzKppPulCk0Dyx6rDfyw%2BVX7Mc9Vaax210Vo4hZysyjt33CFXWXj88Qwnam2IJl0GasNc8%2BKrxYt4Ubg9tt4o7qFCwyighUIDMO%2Bmf5dixHeBSYVO3Pd5%2FPQDx6O5CSapyyj%2FUFW1flkTYA%2FJyVqXG6rXAge6nB13sIb4qbYpp1Pv%2BK0WdRa7n4GrJb14sh8%2FoA%2FGqBdQ6yNvddBnVlYZaiHpM9VlKcJDtJGUfS3kPdPFgYxcxuWMYyeYyxkvQ90M7SQIw7RGWLEKbbETAlTyqC2gl%2Fpott1nj%2Frs8xjRrSrivjO95SidxLSIHjQtbBVt4GLtowl%2FGIvwY6pgFRfyMItbflrlwP%2B%2BvpO2dpcbwe9oxskBvbiNYjQKmMQ3Ml58JvUSDzn5K%2B1wBvYQlMILTzis8e7k38dGHoAyGD9G0mbkNEgf%2BvNgoQOag1fAMopy2pEX3RcujuuixPkI0IBPCVHG3XB52FGvWISbJgmf3HtfvGmPJ4qazW%2BP3W9atEvx8vPa16ieQn%2BjcwKhcyQvQgj%2FteT0tJIkLJYzzDxqrIoT7V&X-Amz-Signature=d7d367ade73792052951888add3ed1f91a44dd40e8cf0f67fa88e84443921b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OV2ATTC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4%2FXd6wWPOtRALWTqukObIM0s49iOy%2Fqe96Z1RyRWT5AiB28ATqAUchX%2FQpnMllBIIoFKCZTMyf1peL6wdUdkrvJSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTphutddlCIJ46DqfKtwDy8tJwR8rgbd8OF%2F4IjCl1w6cnP9TIAZ63ZBqVUz6BQ3S6uQlbs3WKO8u1ck%2BQ3Z%2BLwvcaFjFwiSqJORpFzSJPb%2B4gWcZgAZ8DJj%2BO9lacvt4vBJ35ASPzfDqJUUe9M27POnHwqYGhqtHfuvTftsRK%2BS2FZdFAUl8l01ssEEQPFpE8Ucj1hjxOwO01az6WTKs8NqM1YqK10dFxD8RlKYwAg3Q6Ai2p6wcOHJofosQNCatS8KQpQqEE5%2BOYuLkt9By%2FIFq1hXRR5%2FOrby9yD1r9yq19hKUPVm0lqdfMZaXvrfISfLXA4m3YuzKppPulCk0Dyx6rDfyw%2BVX7Mc9Vaax210Vo4hZysyjt33CFXWXj88Qwnam2IJl0GasNc8%2BKrxYt4Ubg9tt4o7qFCwyighUIDMO%2Bmf5dixHeBSYVO3Pd5%2FPQDx6O5CSapyyj%2FUFW1flkTYA%2FJyVqXG6rXAge6nB13sIb4qbYpp1Pv%2BK0WdRa7n4GrJb14sh8%2FoA%2FGqBdQ6yNvddBnVlYZaiHpM9VlKcJDtJGUfS3kPdPFgYxcxuWMYyeYyxkvQ90M7SQIw7RGWLEKbbETAlTyqC2gl%2Fpott1nj%2Frs8xjRrSrivjO95SidxLSIHjQtbBVt4GLtowl%2FGIvwY6pgFRfyMItbflrlwP%2B%2BvpO2dpcbwe9oxskBvbiNYjQKmMQ3Ml58JvUSDzn5K%2B1wBvYQlMILTzis8e7k38dGHoAyGD9G0mbkNEgf%2BvNgoQOag1fAMopy2pEX3RcujuuixPkI0IBPCVHG3XB52FGvWISbJgmf3HtfvGmPJ4qazW%2BP3W9atEvx8vPa16ieQn%2BjcwKhcyQvQgj%2FteT0tJIkLJYzzDxqrIoT7V&X-Amz-Signature=c4680612541611e4bc5b47ad6018ca59923603ef1f59443ec3fa1df390e0db53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
