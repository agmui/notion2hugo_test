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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIT7KYT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCO01tHWF4TnPgNCFCOsA1zl7woosLhJXCg2NEvdyn6uwIhAM5j8ybdPfWKaEfflA1sQF%2BQQUiRUDwOMxXzNmcwx%2BsXKv8DCF0QABoMNjM3NDIzMTgzODA1IgwvYnQLwoA%2FCvRuGB0q3AMr55if9I2sXTbyCa0mCtVmqjWjWkbLcenrQZmXUnOizIQFAtIIH0cKJJ%2FkCT8QgNTZDGQDZrW%2BTIGam2vEMC1gzKIa%2FXsHC1fxTUVL9u8sQHzon7DR8OQc0f6IHydqZlE5dBWPMCvdktrZJa2Y2FE2ZeozDJPqipVI8A0vGSu02A52iRTZN15Qkhnz0mEsLclZf8tnqgIj4rsOzhdvjmT9Sit9tHBcLRhXtuimM%2B6pXsNT6fW8dBsM%2BuGk6phN4EPNSkT1zxLkTruTwnM8Kumuto90Pp1uCuUU7N99vnReBMTpeKATQCSl%2Fbc1sUE3h4jWFn9jHgQn3kc7pAw11PoJL%2FjTBWju8MoAvhBS9V9FqJSTyPhvycdqcpzhXKSSdED0HAWeDsQg0esg7l5x0sVmY6RBMbokqgoeFFTZvVh6cATsg5dOAIu5CrVc97yFnn204V50H8SxjDI5lS7x1MOGJzH0PmfQTdJQA%2BVvQzHMn%2BgJARs6tiC5rHeEW0eVvyBZZyDqnId0h4nAXiKaZGsz%2BE3GkmFDHWJdUeM1phkhpyVKYlj1ADVIHI0ugmVF88oz2hMVehwq078XNqMTmnvCz3XKjxlRrB4QpJTLaUWkc7SVu%2FjWINx5zI5%2FOTCCnce9BjqkAWo9nDylrdCSMRH%2FPaxvuvYezRzHHO4DxfBTIxzuemtSRLOCV51gWlRzh8RWLPMU1NNJrhBbxO31%2FCnRT%2FhqPEu%2F8fW3BuOO7y%2BBMwVI12xx7TWBBUKd8aFqpudwZuAj%2FRTlK9gJiX5UwrCI6%2FF%2FvjU3UvbIrohSejaDzeIRTa1kovT%2Bv43aYZ%2BCrzbhESw7h68WJWKKWQC0I22v3u2a5nQ8WEhg&X-Amz-Signature=5f24c087b5da467f3733286868949383eb48507c43f7a665b74f2d92a9256f86&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIT7KYT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCO01tHWF4TnPgNCFCOsA1zl7woosLhJXCg2NEvdyn6uwIhAM5j8ybdPfWKaEfflA1sQF%2BQQUiRUDwOMxXzNmcwx%2BsXKv8DCF0QABoMNjM3NDIzMTgzODA1IgwvYnQLwoA%2FCvRuGB0q3AMr55if9I2sXTbyCa0mCtVmqjWjWkbLcenrQZmXUnOizIQFAtIIH0cKJJ%2FkCT8QgNTZDGQDZrW%2BTIGam2vEMC1gzKIa%2FXsHC1fxTUVL9u8sQHzon7DR8OQc0f6IHydqZlE5dBWPMCvdktrZJa2Y2FE2ZeozDJPqipVI8A0vGSu02A52iRTZN15Qkhnz0mEsLclZf8tnqgIj4rsOzhdvjmT9Sit9tHBcLRhXtuimM%2B6pXsNT6fW8dBsM%2BuGk6phN4EPNSkT1zxLkTruTwnM8Kumuto90Pp1uCuUU7N99vnReBMTpeKATQCSl%2Fbc1sUE3h4jWFn9jHgQn3kc7pAw11PoJL%2FjTBWju8MoAvhBS9V9FqJSTyPhvycdqcpzhXKSSdED0HAWeDsQg0esg7l5x0sVmY6RBMbokqgoeFFTZvVh6cATsg5dOAIu5CrVc97yFnn204V50H8SxjDI5lS7x1MOGJzH0PmfQTdJQA%2BVvQzHMn%2BgJARs6tiC5rHeEW0eVvyBZZyDqnId0h4nAXiKaZGsz%2BE3GkmFDHWJdUeM1phkhpyVKYlj1ADVIHI0ugmVF88oz2hMVehwq078XNqMTmnvCz3XKjxlRrB4QpJTLaUWkc7SVu%2FjWINx5zI5%2FOTCCnce9BjqkAWo9nDylrdCSMRH%2FPaxvuvYezRzHHO4DxfBTIxzuemtSRLOCV51gWlRzh8RWLPMU1NNJrhBbxO31%2FCnRT%2FhqPEu%2F8fW3BuOO7y%2BBMwVI12xx7TWBBUKd8aFqpudwZuAj%2FRTlK9gJiX5UwrCI6%2FF%2FvjU3UvbIrohSejaDzeIRTa1kovT%2Bv43aYZ%2BCrzbhESw7h68WJWKKWQC0I22v3u2a5nQ8WEhg&X-Amz-Signature=7e74e6f2c093ea5cf07601cb6b64153a3b614b2633c53f0e58b54fe70a7d25d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
