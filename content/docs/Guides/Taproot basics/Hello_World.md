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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PHKJMN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEiKBRwT4KSaVzsr0ZrC3fP0iaVCD%2BWoIkhuy7maevs4AiEA5F7QwLRyqPItLsVVpuYOyk2EfqSt2mqs69Sugmc4tBgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZinm7UzCDK6mAbsSrcA9H9y9RXfnKzBNHOtabd8ntiU2h5z5qm%2B7DDw4fJZ5FozYYnM7jTxAqJnBaqdhxHen5qJLdhWKw%2B6AftTPxYkqhpaxPCWStzdSe4s0SsdEtp0cfvS7Hk0IB%2B%2Bj6bWvuX2WleMmkp97gkwVGNo9zVV%2FUCWtGJhZ0D1VslWxwCUKvnX6Iyjn0pR3awzvJO91rnYXaovXwd3prcXQ4G9LCNIb1dsRzg0S08ezS5YPAsyLm5owwsKlp388cK9%2FAhAtbShz0FgllN82xAebKj6Q1sJjYIdaHIpy%2BlE8xEGtaf9ETfsfN%2BLdUFK%2BAHMUjWaCl77TBObEd0V9CZ2WLUYp3yGS8pW1Xuhx3yIP4s8zS380UXyrGY5zOLrqATjgfAS7NPazFlq0E2p9U211gAv5o9b58%2FT53PNAKmNwK1%2BbrVSa%2FhEsSLnun8URp%2FPTbrokEsf7mkUqs4rc9j2xStIKOjOya3nAbnDL3Iu1w0y2yfDKr%2FADGGTXd7LWpfSHjhsu1zSmv2MniNzruSl5xXs6jRODf82EqwNWwHUNal%2FF5C%2BF5enGG5MqNXwnjn668zUif%2BeYihkBaVIhS0x0ojqMJ79Ni2ht4B4nv9yp3TGzX0eFJcCRXsabgMYCDWYlWfMO%2FBk8QGOqUBYFghShHPUgLr%2BWwxdxeAjicoDNLor7SP7pGdQ6fV2m73OZ1pHHl0VXV0%2FuUX0HMD4zbeTXyVeymn%2FbEGAWbsAuc9Hky3GN9PTzqR1SrpxTdVVV5%2FV2spDs7YgRC%2FNCUppmyTfXcctoudoCwXYd3rX3R57cJHwn71nPqJmwX%2BEIztw12jqwHuX66zeznlCTLAl7YILmF5MYrdyKZ65QgEVIPjiFOF&X-Amz-Signature=bdb1b6de65b31fbe41499f6a64556a7a5d401a7b048037bc00eb1445db87bbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PHKJMN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEiKBRwT4KSaVzsr0ZrC3fP0iaVCD%2BWoIkhuy7maevs4AiEA5F7QwLRyqPItLsVVpuYOyk2EfqSt2mqs69Sugmc4tBgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZinm7UzCDK6mAbsSrcA9H9y9RXfnKzBNHOtabd8ntiU2h5z5qm%2B7DDw4fJZ5FozYYnM7jTxAqJnBaqdhxHen5qJLdhWKw%2B6AftTPxYkqhpaxPCWStzdSe4s0SsdEtp0cfvS7Hk0IB%2B%2Bj6bWvuX2WleMmkp97gkwVGNo9zVV%2FUCWtGJhZ0D1VslWxwCUKvnX6Iyjn0pR3awzvJO91rnYXaovXwd3prcXQ4G9LCNIb1dsRzg0S08ezS5YPAsyLm5owwsKlp388cK9%2FAhAtbShz0FgllN82xAebKj6Q1sJjYIdaHIpy%2BlE8xEGtaf9ETfsfN%2BLdUFK%2BAHMUjWaCl77TBObEd0V9CZ2WLUYp3yGS8pW1Xuhx3yIP4s8zS380UXyrGY5zOLrqATjgfAS7NPazFlq0E2p9U211gAv5o9b58%2FT53PNAKmNwK1%2BbrVSa%2FhEsSLnun8URp%2FPTbrokEsf7mkUqs4rc9j2xStIKOjOya3nAbnDL3Iu1w0y2yfDKr%2FADGGTXd7LWpfSHjhsu1zSmv2MniNzruSl5xXs6jRODf82EqwNWwHUNal%2FF5C%2BF5enGG5MqNXwnjn668zUif%2BeYihkBaVIhS0x0ojqMJ79Ni2ht4B4nv9yp3TGzX0eFJcCRXsabgMYCDWYlWfMO%2FBk8QGOqUBYFghShHPUgLr%2BWwxdxeAjicoDNLor7SP7pGdQ6fV2m73OZ1pHHl0VXV0%2FuUX0HMD4zbeTXyVeymn%2FbEGAWbsAuc9Hky3GN9PTzqR1SrpxTdVVV5%2FV2spDs7YgRC%2FNCUppmyTfXcctoudoCwXYd3rX3R57cJHwn71nPqJmwX%2BEIztw12jqwHuX66zeznlCTLAl7YILmF5MYrdyKZ65QgEVIPjiFOF&X-Amz-Signature=aca905a5ec4116eabd4fa85f2a949956105c5182df351e2c97be2255e966d648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
