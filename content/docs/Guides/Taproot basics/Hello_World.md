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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIPMDKE4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BLQd5IvhrYnLwHsjfXutTKgN8tlcEsCmTyxDTLN3EGgIgUXQ1GEY%2B%2Fo172YErW0RwbF8oGHN7xxMCTkjXouyJvK0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0AV6XDAcw75HuU4ircA2Oo3o%2Figl0MUGQWYOpx8O4OCPn9kvlFvbyRhom%2F7ijLjl4Nh9NV6%2FXJV0FxbIyWRV1EBUIPnjpjlaz43UNhzQEQaR5Tj2bxCdS2w3XCUwfhUxNnnOSXRySPG4q0%2Fy0ImKAMF1z9rR63tBwgih0neQB6UH6ucAde%2FJvkcdVgx0hkafh1DvVLVQ2WD6h62%2BynyKYWiCKw3eHbIFbcbt2KLBJ5ZwbeemrG%2FJELdGKqSlz3d0qVeuZ05ObhqSUcrGtyg0q0HTzxz0b1T%2Bn2wXdLSNM%2BxQmT2qlRqpHXvPI5zgmN4tLlbdiu%2BcbJPLfBwZWP2ecLuLYqJIpIyq7AvYa5IH6PBRVajK6YyLXIMRGKjN6SAvS5%2B77ipWRMTYrBEjYrj%2FWZEuyqldqcek4I8oflLTaJjEWGTeKI%2BM9tJf4mj6ijj9rW76TCUFAsNZdDKG5qzpkb27ERZCBG0HWrXZu21r4WIW%2BKd1sXt%2Fenwsvp2Yy%2BmM4q4LRSnsLsXQ3v1AYMzbqg0nfVpqSxmNI30YNSQLQrAB%2FSzLRegZ9%2Fl2vOHLeQJpyeTjHxZCFmptoE5cGMnqV1AgpmLg5Cmqmg4Qy8yxIDaU7OAwrWSyynQa374%2FwWJw%2BGHKqtHVkxQQxOMMytscEGOqUBrfR2XDgXPw1tggykjdbh37LyT8oPI%2FjFH5%2Bge9KhXl%2BFVX6kdyA23NVGCJ9gOhah8PTDSS4h2NNz9lJfW5CEYJG8qAhmE2IwIpIT4tg7wsJGjRqSIDUW0Ts4u1BvEtUhQJP32A8Ms0I%2FZz7Ik0oZVqvgdQurbYXAK1drBCGRpiffyVfha0eSygfN284GSeMys4rdCiTScLfN%2FHxubzioW%2FTSR9Yb&X-Amz-Signature=b0b6cea1e8c81cc212965dc81b3384e64ae1ec219fa510035264300928ff398a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIPMDKE4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BLQd5IvhrYnLwHsjfXutTKgN8tlcEsCmTyxDTLN3EGgIgUXQ1GEY%2B%2Fo172YErW0RwbF8oGHN7xxMCTkjXouyJvK0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0AV6XDAcw75HuU4ircA2Oo3o%2Figl0MUGQWYOpx8O4OCPn9kvlFvbyRhom%2F7ijLjl4Nh9NV6%2FXJV0FxbIyWRV1EBUIPnjpjlaz43UNhzQEQaR5Tj2bxCdS2w3XCUwfhUxNnnOSXRySPG4q0%2Fy0ImKAMF1z9rR63tBwgih0neQB6UH6ucAde%2FJvkcdVgx0hkafh1DvVLVQ2WD6h62%2BynyKYWiCKw3eHbIFbcbt2KLBJ5ZwbeemrG%2FJELdGKqSlz3d0qVeuZ05ObhqSUcrGtyg0q0HTzxz0b1T%2Bn2wXdLSNM%2BxQmT2qlRqpHXvPI5zgmN4tLlbdiu%2BcbJPLfBwZWP2ecLuLYqJIpIyq7AvYa5IH6PBRVajK6YyLXIMRGKjN6SAvS5%2B77ipWRMTYrBEjYrj%2FWZEuyqldqcek4I8oflLTaJjEWGTeKI%2BM9tJf4mj6ijj9rW76TCUFAsNZdDKG5qzpkb27ERZCBG0HWrXZu21r4WIW%2BKd1sXt%2Fenwsvp2Yy%2BmM4q4LRSnsLsXQ3v1AYMzbqg0nfVpqSxmNI30YNSQLQrAB%2FSzLRegZ9%2Fl2vOHLeQJpyeTjHxZCFmptoE5cGMnqV1AgpmLg5Cmqmg4Qy8yxIDaU7OAwrWSyynQa374%2FwWJw%2BGHKqtHVkxQQxOMMytscEGOqUBrfR2XDgXPw1tggykjdbh37LyT8oPI%2FjFH5%2Bge9KhXl%2BFVX6kdyA23NVGCJ9gOhah8PTDSS4h2NNz9lJfW5CEYJG8qAhmE2IwIpIT4tg7wsJGjRqSIDUW0Ts4u1BvEtUhQJP32A8Ms0I%2FZz7Ik0oZVqvgdQurbYXAK1drBCGRpiffyVfha0eSygfN284GSeMys4rdCiTScLfN%2FHxubzioW%2FTSR9Yb&X-Amz-Signature=86a0fbf239c10b2c329a783e6e6d9295a9ba2b47da431690f384d549a7630e39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
