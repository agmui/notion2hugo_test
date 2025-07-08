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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTS7YAG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMgeEagzDvgi09sL2b9C9Cd635oNOmPWmNhhe6a%2BaHqAiBcWaupSX0KtYaEBunCWSRuHv1or17OvOEH00kLuPb97SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDfkE7JkXqV47jhoKtwDgNXA6Ma55dt9p7Jim6WXDP%2Bf49QfbKiJPQCgFgBkeQwE%2BWoE403Ad9AryOkPA2DWJvB%2FTMYiQ2RQ8NswIfstl3S%2F1sn5eaiaL2VqSylD0%2B4eyV8%2Bcm8y2EUzJ5JFXr84FUKeu%2BmIhzkToKk6owAD6YXKyN63qPI3O%2BI8iT%2FQWe3byVXzY%2B2u%2F5uQH0eRatpO3zJA5zWuoDjZ%2FXXZQTPPYTpSspnh%2FPfD%2FF1keXTHWwx3xjnCt4T8C81vWP2Q9j3i7SCcRfjI2Zi9HmbXwhCbZwK3bV3Ua8is%2BI4hi2%2FDjS2N8KDuROEnbW1nsNVONtjusIGf%2BmivERpIZbnkMroe2QmGOcA%2BwvZ2YBzJCCnIv%2B008wrpc3THmXQRXN1mXx0LKGFuMu3JAcsR6mo4RlXrOZQNI%2BFpuxnGSuZ95s2Y%2B9O7qGTzRFtKCjvfqS50rp%2BmWOzamNoTh2GfYS3Z9x0JKbkQesu%2B1P78OxSgVYQBPUFxqfuVJROPn0KXF1duAFZfUFbKD3Bew29OFJUudg4ETG7fImQSkZYZFqcrGr%2Fot2MH08xNz7JbRMcTE90KKibuX4NhtRnahFz4fO8QtjvR%2FzlHngHPsU%2FbOBA8wkQCOgntSzAsOuWVDDHo2N0wiK61wwY6pgHfJAui%2F953n6JtSaUHXH1ae9LxDcc7BkK5Ng8ZBqGzpLYYQcci2ZXktogkxug%2BOrbJInRrq7R5E%2FERb8bBJB93mNE93mWnsHwrwLR32xW1TNJe2Fy3wIuGfml9fhyaZjAJn%2BN2dBrn0VgMhfIZz8%2F1HKKfkmgq4YcAb2nwbmErOhZqzYQEPKnJfvProxm7jThFFWSbUh2RsufYZUuIDxJUfN%2BNsysV&X-Amz-Signature=5d313392275eb687b3e0baa8e972d5b9b6131bf43019bcc3aeb013b726c52997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTS7YAG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMgeEagzDvgi09sL2b9C9Cd635oNOmPWmNhhe6a%2BaHqAiBcWaupSX0KtYaEBunCWSRuHv1or17OvOEH00kLuPb97SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDfkE7JkXqV47jhoKtwDgNXA6Ma55dt9p7Jim6WXDP%2Bf49QfbKiJPQCgFgBkeQwE%2BWoE403Ad9AryOkPA2DWJvB%2FTMYiQ2RQ8NswIfstl3S%2F1sn5eaiaL2VqSylD0%2B4eyV8%2Bcm8y2EUzJ5JFXr84FUKeu%2BmIhzkToKk6owAD6YXKyN63qPI3O%2BI8iT%2FQWe3byVXzY%2B2u%2F5uQH0eRatpO3zJA5zWuoDjZ%2FXXZQTPPYTpSspnh%2FPfD%2FF1keXTHWwx3xjnCt4T8C81vWP2Q9j3i7SCcRfjI2Zi9HmbXwhCbZwK3bV3Ua8is%2BI4hi2%2FDjS2N8KDuROEnbW1nsNVONtjusIGf%2BmivERpIZbnkMroe2QmGOcA%2BwvZ2YBzJCCnIv%2B008wrpc3THmXQRXN1mXx0LKGFuMu3JAcsR6mo4RlXrOZQNI%2BFpuxnGSuZ95s2Y%2B9O7qGTzRFtKCjvfqS50rp%2BmWOzamNoTh2GfYS3Z9x0JKbkQesu%2B1P78OxSgVYQBPUFxqfuVJROPn0KXF1duAFZfUFbKD3Bew29OFJUudg4ETG7fImQSkZYZFqcrGr%2Fot2MH08xNz7JbRMcTE90KKibuX4NhtRnahFz4fO8QtjvR%2FzlHngHPsU%2FbOBA8wkQCOgntSzAsOuWVDDHo2N0wiK61wwY6pgHfJAui%2F953n6JtSaUHXH1ae9LxDcc7BkK5Ng8ZBqGzpLYYQcci2ZXktogkxug%2BOrbJInRrq7R5E%2FERb8bBJB93mNE93mWnsHwrwLR32xW1TNJe2Fy3wIuGfml9fhyaZjAJn%2BN2dBrn0VgMhfIZz8%2F1HKKfkmgq4YcAb2nwbmErOhZqzYQEPKnJfvProxm7jThFFWSbUh2RsufYZUuIDxJUfN%2BNsysV&X-Amz-Signature=a367d38d474c06bd4faac8142900223e04fa8fe8228b23f17c34386a32742b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
