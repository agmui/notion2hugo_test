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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPGHXVA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKnKh4A3MQqut1BCh7mCu5LKr3T956FGbkaA6sRVfi2wIgfuEv%2B2UnCLYnw8JjyMGiPv7gtCkSrm09GbEQhBppPmQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmjplTkQ%2FJVR%2BmyyyrcAxRbxX1DucbxK9gIGswybToXPbxREdKGGJoYhuBEWdYegki56hAmNBdUyFaSmtnZgsJdmi3UiGlnhFwWLSb%2FbUCt4Jz%2FCcjynDvYAt9kO6iyWS38Pm9Yc2hGO%2BKRnAmH284OgkjaDdSPY9D0K11JolPnBRAiacejlYzDmIBIymp1UiYSOC4v347OC8VlGeUQHi2rlpCO7BJ7ppzvaZdpPSutS7byIHNMq6ESYa6rwUBCzjcJEXTg6iHP5ru0KFDp7dgeubUrAc3%2Bi%2B8s5eHmM0a97K92IJ9b%2FlX4R4qU5VNn4S0hbhL%2FUidXTa18tk1BooPNN1JCgnbqrHzk6tsc%2FFv7TvWHG3ZaK5TdVchLk2r%2Bqo2fWC%2F6PwirLruWG4IpzROy%2Bg%2FAIoQjrxGxA%2FlZh7Crs%2BW6yVMv2ey8n%2FhjPmfO5e09j%2BRvxOaYMLAz%2BHTG40XekwpRfXef7O6AKVScJDolB76KlW%2Ba8PdGaFkOYM38scxEbcEp0hVXQqfi9ObatImnCCNcwXnb0cKpiqQ82%2BRd77OOoOr53l1pecqEMcIyiPeIUrNt5g3IqeI7kiniT93F3FD%2FHeT55vcfN%2BTT51SHQ4KNsHgkm44BbWzB7c6j4IibMgJB1rjkF7DzMImFmsAGOqUBwhy5XbtCv9SKTZ%2FyE2OKQSdQx5gK3%2Bya0POpNMJg%2B88Z0AHmlqfbVMER1%2FR%2BsH8ksvNX5VlqVLZePwFROActYqSYeqS2Ab8NvaaozNKvqzzm6Hcf%2FIfd9n41HIExPMx%2FkE9Qk5q8wx7TUuipfwCY9C1RCDOZfEFdZd0knaJvcKl%2BKcGees0KbwCtlhvTo0EqC7i2IsTUnpyJVO6fIYW4lNyL%2BbSH&X-Amz-Signature=755233c37b8fc75b608f0cb7bd39d4400cb714d18d9366ca9f2b404aa7918473&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPGHXVA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDKnKh4A3MQqut1BCh7mCu5LKr3T956FGbkaA6sRVfi2wIgfuEv%2B2UnCLYnw8JjyMGiPv7gtCkSrm09GbEQhBppPmQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmjplTkQ%2FJVR%2BmyyyrcAxRbxX1DucbxK9gIGswybToXPbxREdKGGJoYhuBEWdYegki56hAmNBdUyFaSmtnZgsJdmi3UiGlnhFwWLSb%2FbUCt4Jz%2FCcjynDvYAt9kO6iyWS38Pm9Yc2hGO%2BKRnAmH284OgkjaDdSPY9D0K11JolPnBRAiacejlYzDmIBIymp1UiYSOC4v347OC8VlGeUQHi2rlpCO7BJ7ppzvaZdpPSutS7byIHNMq6ESYa6rwUBCzjcJEXTg6iHP5ru0KFDp7dgeubUrAc3%2Bi%2B8s5eHmM0a97K92IJ9b%2FlX4R4qU5VNn4S0hbhL%2FUidXTa18tk1BooPNN1JCgnbqrHzk6tsc%2FFv7TvWHG3ZaK5TdVchLk2r%2Bqo2fWC%2F6PwirLruWG4IpzROy%2Bg%2FAIoQjrxGxA%2FlZh7Crs%2BW6yVMv2ey8n%2FhjPmfO5e09j%2BRvxOaYMLAz%2BHTG40XekwpRfXef7O6AKVScJDolB76KlW%2Ba8PdGaFkOYM38scxEbcEp0hVXQqfi9ObatImnCCNcwXnb0cKpiqQ82%2BRd77OOoOr53l1pecqEMcIyiPeIUrNt5g3IqeI7kiniT93F3FD%2FHeT55vcfN%2BTT51SHQ4KNsHgkm44BbWzB7c6j4IibMgJB1rjkF7DzMImFmsAGOqUBwhy5XbtCv9SKTZ%2FyE2OKQSdQx5gK3%2Bya0POpNMJg%2B88Z0AHmlqfbVMER1%2FR%2BsH8ksvNX5VlqVLZePwFROActYqSYeqS2Ab8NvaaozNKvqzzm6Hcf%2FIfd9n41HIExPMx%2FkE9Qk5q8wx7TUuipfwCY9C1RCDOZfEFdZd0knaJvcKl%2BKcGees0KbwCtlhvTo0EqC7i2IsTUnpyJVO6fIYW4lNyL%2BbSH&X-Amz-Signature=147a59a8b5d9b74e81f16b3d4e8736eca5088d3ef2c149fd8933be9ff3610e32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
