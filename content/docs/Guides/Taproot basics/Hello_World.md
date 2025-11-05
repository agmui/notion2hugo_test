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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFDDCMV%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAudjUH%2BZGBt8ir9lTyjoTSwE50UWn3MII%2BtMuiCbXZ2AiEA%2BwNxt0a7atOqj8%2FD%2Buk91LT9i0MV%2B%2BWubn9kcIBM68Iq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEgmfjKAwTmIkgpZQCrcA9vWfIPEezx%2Fs3ur%2FsFCGrSNswiLW%2BDaJ4I%2BP%2BMjW7J1UuJt9cGZT4c%2FU6sn5kgto4vVdZErBu%2BVlSUAxU9tho%2FW3vGipChgvBPd1BovwxQkAVziWYH7XRn4yx9OC1Tvoo0nUa%2Bj4zSAREXbUlWh83CkWP%2Bs4Da3TIljHdAqOeekyo1tWnrQ624f9%2FryJQc4RVgMDEEj69E4GxINnFm779t0reSGXk2wzWfd8ttrnBUyZhNOHZKsu1MzQkx6UnR5M9ylCIg23pRzYGmcYTJcHFEdhkZfZ4KoMhO8GzHRnYAl%2B9RqX7DSb5FhC%2BJdFgi1yOj3nd8WJlgrh8JRw2qvwS%2FJI1aEto5u%2FEOF%2B%2B7Km8hmCCQBzFKL1SBuz9CzaLcMHYNuK6w8u0WVemgETdXSzWTn8nrqtJF7ZBrwFFoBWvpbeFcaNbmZoh6afjUscG7LfJ3GVyVYMYnyQZzv3o3hzdpsgpz%2FL90ROsQMxZcHAbRX3Iq2UI%2Bo7I4%2B4l2Vmr4nCNsLKWuvPBlDU66NS%2F4IgC%2BRzL0a6%2BLN2cKgeMm9XofwUPaCrJwYisT9p%2BaJkVsl66yNgRsu%2BJlXCW6PGOafbLBxk1M9CMc49H%2F7l54Gq0zkOba1vRyQGMpFu0HvMOTdqcgGOqUBoA2o%2Fr2kvj0N3Oq8QFeHm8uY%2BkHhO05fo0UfasLJcCIkeDv7TwBJHvhDUoi8nm3BMOUYuGq48eFFY28ZYw2bui1DsUsM9tITu2YApe7uMLd7VNf1xfxOiT1lvbHj%2BnND0%2BtDlnz9YaEMOlsUWC%2B7BedQ8lVRZBRvM2mdgijZcO4Zpn%2BavJlut6BL2R1dzkaQHLpClRnOQHy4tmB1QnUMGRWLE6NS&X-Amz-Signature=702f5ac9d8c27c8f317930c20b411c95777994a4bfcb715a7bd1b9c211e860ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFDDCMV%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAudjUH%2BZGBt8ir9lTyjoTSwE50UWn3MII%2BtMuiCbXZ2AiEA%2BwNxt0a7atOqj8%2FD%2Buk91LT9i0MV%2B%2BWubn9kcIBM68Iq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEgmfjKAwTmIkgpZQCrcA9vWfIPEezx%2Fs3ur%2FsFCGrSNswiLW%2BDaJ4I%2BP%2BMjW7J1UuJt9cGZT4c%2FU6sn5kgto4vVdZErBu%2BVlSUAxU9tho%2FW3vGipChgvBPd1BovwxQkAVziWYH7XRn4yx9OC1Tvoo0nUa%2Bj4zSAREXbUlWh83CkWP%2Bs4Da3TIljHdAqOeekyo1tWnrQ624f9%2FryJQc4RVgMDEEj69E4GxINnFm779t0reSGXk2wzWfd8ttrnBUyZhNOHZKsu1MzQkx6UnR5M9ylCIg23pRzYGmcYTJcHFEdhkZfZ4KoMhO8GzHRnYAl%2B9RqX7DSb5FhC%2BJdFgi1yOj3nd8WJlgrh8JRw2qvwS%2FJI1aEto5u%2FEOF%2B%2B7Km8hmCCQBzFKL1SBuz9CzaLcMHYNuK6w8u0WVemgETdXSzWTn8nrqtJF7ZBrwFFoBWvpbeFcaNbmZoh6afjUscG7LfJ3GVyVYMYnyQZzv3o3hzdpsgpz%2FL90ROsQMxZcHAbRX3Iq2UI%2Bo7I4%2B4l2Vmr4nCNsLKWuvPBlDU66NS%2F4IgC%2BRzL0a6%2BLN2cKgeMm9XofwUPaCrJwYisT9p%2BaJkVsl66yNgRsu%2BJlXCW6PGOafbLBxk1M9CMc49H%2F7l54Gq0zkOba1vRyQGMpFu0HvMOTdqcgGOqUBoA2o%2Fr2kvj0N3Oq8QFeHm8uY%2BkHhO05fo0UfasLJcCIkeDv7TwBJHvhDUoi8nm3BMOUYuGq48eFFY28ZYw2bui1DsUsM9tITu2YApe7uMLd7VNf1xfxOiT1lvbHj%2BnND0%2BtDlnz9YaEMOlsUWC%2B7BedQ8lVRZBRvM2mdgijZcO4Zpn%2BavJlut6BL2R1dzkaQHLpClRnOQHy4tmB1QnUMGRWLE6NS&X-Amz-Signature=db226722efb2f30689e9d802db6ac94ea07d57adcc956a2d311c5998b0fc0a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
