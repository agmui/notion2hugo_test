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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOWRHYV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEA258Ex4MrnWOxAjEBBGfUiHtS57Prn7Wf8YxRU4lkqAiEArCw89dlxGXcna7nKM7%2BiBCsuPcohmPIaS3eWdXidTbAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHrkgRzGDRHxuydM9ircAzcrnICrLC9%2BNq%2FAruPu79FMfyj2exxSBhXBUoIFKcqWWqLkuBQ%2FtVEX55Ag1ak04RoEchhadwMnCHetv2fpwI5nD2xgWAQvMnQIUu3jASly26audvrIQporOyLmku86Bkh9el6AGMz0dwLtid35F36lDMXknvQLbkKbBlKrAidVG0QFJkvKZqew050PFwjw43%2F5M9qXJ3FWDuA2N%2B%2F3rOY2pb8UpYpa26vceuxtpoPigQVR%2FKqnaj2bYeq8dPL1ry8Y41py2x4OEHImzDt9fSiYj3Uhm6kjJ95%2FAepJUouv0wIx8%2B6g41h3XRTb1ZyrjyjbJXVcSvojvaZyznWmTDkgQRMjAEUdc8l1eSTNWmsGSdRfJvCzH%2B9BS52lR0Tm3Y9D3k4EG83T0RsfTapH0OmC3IXoPaTD9tNIyObbw7%2FnUSRAI9ds223unncP4uEulZ7tMJ37bnYm9d7KVa2PXvliLyYxISsGgfj1FCSKtaqfIaNhwRkDOWAYqQV21A5sCW6fzlvWP%2FVRegqDXX2GwDEYgMHICk8Okk8kxX7Ih8xu5jx5fJDfw3q11g1A15k3oYh5lXFM%2FuM%2BhnkzuBpL0dm4wh9hT9pQkkXGf4v5%2BdeV8PK1B2LBwy5HZYKAMJyq18MGOqUBF3m7l5IuF%2FZnVKgq8hCNh0sBjEozambYzu%2FVAvDBoGco%2BK8Vm4XAzGMQ1g%2Fl4qfm5%2FCy%2Fb1XDt%2B325w4qAiBWb76eJlzJMvXWhSiy5%2BQe7T9TgL4VJ3LJQG9qqCbdkqOu0N4cSP7NvwmUEuDOHKRsMGqn1j%2FV7GRJWdVHBz0FZ8DawYzRJ1jVAJM3fpA%2BhRA0zFG%2Fxq2ct5noUvoGYDgHtCtLlXC&X-Amz-Signature=3236c5bcd8344463af968deb87cef6e50f63d3686aaea821d2a8866cb8967d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOWRHYV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEA258Ex4MrnWOxAjEBBGfUiHtS57Prn7Wf8YxRU4lkqAiEArCw89dlxGXcna7nKM7%2BiBCsuPcohmPIaS3eWdXidTbAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHrkgRzGDRHxuydM9ircAzcrnICrLC9%2BNq%2FAruPu79FMfyj2exxSBhXBUoIFKcqWWqLkuBQ%2FtVEX55Ag1ak04RoEchhadwMnCHetv2fpwI5nD2xgWAQvMnQIUu3jASly26audvrIQporOyLmku86Bkh9el6AGMz0dwLtid35F36lDMXknvQLbkKbBlKrAidVG0QFJkvKZqew050PFwjw43%2F5M9qXJ3FWDuA2N%2B%2F3rOY2pb8UpYpa26vceuxtpoPigQVR%2FKqnaj2bYeq8dPL1ry8Y41py2x4OEHImzDt9fSiYj3Uhm6kjJ95%2FAepJUouv0wIx8%2B6g41h3XRTb1ZyrjyjbJXVcSvojvaZyznWmTDkgQRMjAEUdc8l1eSTNWmsGSdRfJvCzH%2B9BS52lR0Tm3Y9D3k4EG83T0RsfTapH0OmC3IXoPaTD9tNIyObbw7%2FnUSRAI9ds223unncP4uEulZ7tMJ37bnYm9d7KVa2PXvliLyYxISsGgfj1FCSKtaqfIaNhwRkDOWAYqQV21A5sCW6fzlvWP%2FVRegqDXX2GwDEYgMHICk8Okk8kxX7Ih8xu5jx5fJDfw3q11g1A15k3oYh5lXFM%2FuM%2BhnkzuBpL0dm4wh9hT9pQkkXGf4v5%2BdeV8PK1B2LBwy5HZYKAMJyq18MGOqUBF3m7l5IuF%2FZnVKgq8hCNh0sBjEozambYzu%2FVAvDBoGco%2BK8Vm4XAzGMQ1g%2Fl4qfm5%2FCy%2Fb1XDt%2B325w4qAiBWb76eJlzJMvXWhSiy5%2BQe7T9TgL4VJ3LJQG9qqCbdkqOu0N4cSP7NvwmUEuDOHKRsMGqn1j%2FV7GRJWdVHBz0FZ8DawYzRJ1jVAJM3fpA%2BhRA0zFG%2Fxq2ct5noUvoGYDgHtCtLlXC&X-Amz-Signature=c15128f4812f06e9d28518c43a97ab1cbb8951fba96bf6ee46daafaf21e1faba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
