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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4QYDJZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUgTLTmUWhuBsVvAGqghd%2FeyqNTQK%2FxEEmemyVi24Q7AiBZWeFrFGZH8qZV0Y0eKgBANTdxAmMKmYvmEtsA2K8%2F8SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrChbIGUR4uzU3BwxKtwDVlYoaapwRJEyqczvUe4bIJLR1YIcZRWcH%2BhSmBiLafIiPtWGKWl4lMCpiQuFE8RB8KoFsRw%2FhVVufbE13NbEz6%2BX4HqQ5YFqLvJLU6bzyj%2Fm%2F71zkcYjK0xZmvX1e2RIL8iGljcpNipQfiYpThSYmvTdYpoT2iJGYvDN6w9YO%2B4bOAfdJx91K87faP6cVacnZtboKf75HvpIGVKw1mrkrF0Pg5erAn9ptxv7nCAzFRT5udQvcS5I8tYoNdg%2FD52Sj2%2BLXREqmuAJG%2FYX8K1qnc5PF8urF9AHoKeQkSa65odNQEO1BdquWvHI04ll9kzgYqWnF1Z4as0NMv60f4a1otUv1Hs3srGVw2WG8Ts4%2FInxfMFwje5DHV8OIyH0hiQxzBo7VRgQKZm4%2BV0eqdMDuQ8fEYSbNAc0g%2F07%2ByyZ57lTSC7XgeLqhMK2nvB8XNsNLAVTn0W1NskN%2B%2BTPyC9%2FGceQ1yDvNQCQy1B%2F4Qm4T8iv1gPuoe0yHpiSQR56v9lgv7j3e4lTBHr9hNIZWjOpltd0ZUpW4OYTCYoegxjynrIV4y7NEC0jqo5zXxBVbU8v4jE5GhuUKWrdoBSRkwGoYc5%2BbAjAWN8gftSaEkmJlHy5N%2BkMErxqL7Wui2ownIufxAY6pgFWcYPaEE8nqVNSTii88Dc%2B8aQV1S6d1j5a83xb2tG2%2BChyQhp3rEW%2FKqqgq6Fc5xtqlpVU7%2BxXpyihH29eiL4OM%2FtahlJG2uP9%2BjQHgeP8akx6XrTVW9Eocolwby2JTTlX9ghxElnJhl7r8FbdiXe%2FiyWSUT0RqjMfPIghuolm%2FGUwyJzjkbHu6TFUVSXkDyj8tqgImp9shu%2FAW0QNKblZxeSYxvgN&X-Amz-Signature=377cb0b1ad984c8a09c1655224fd126354c6d7119d04c481e637f40a5701bd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4QYDJZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUgTLTmUWhuBsVvAGqghd%2FeyqNTQK%2FxEEmemyVi24Q7AiBZWeFrFGZH8qZV0Y0eKgBANTdxAmMKmYvmEtsA2K8%2F8SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrChbIGUR4uzU3BwxKtwDVlYoaapwRJEyqczvUe4bIJLR1YIcZRWcH%2BhSmBiLafIiPtWGKWl4lMCpiQuFE8RB8KoFsRw%2FhVVufbE13NbEz6%2BX4HqQ5YFqLvJLU6bzyj%2Fm%2F71zkcYjK0xZmvX1e2RIL8iGljcpNipQfiYpThSYmvTdYpoT2iJGYvDN6w9YO%2B4bOAfdJx91K87faP6cVacnZtboKf75HvpIGVKw1mrkrF0Pg5erAn9ptxv7nCAzFRT5udQvcS5I8tYoNdg%2FD52Sj2%2BLXREqmuAJG%2FYX8K1qnc5PF8urF9AHoKeQkSa65odNQEO1BdquWvHI04ll9kzgYqWnF1Z4as0NMv60f4a1otUv1Hs3srGVw2WG8Ts4%2FInxfMFwje5DHV8OIyH0hiQxzBo7VRgQKZm4%2BV0eqdMDuQ8fEYSbNAc0g%2F07%2ByyZ57lTSC7XgeLqhMK2nvB8XNsNLAVTn0W1NskN%2B%2BTPyC9%2FGceQ1yDvNQCQy1B%2F4Qm4T8iv1gPuoe0yHpiSQR56v9lgv7j3e4lTBHr9hNIZWjOpltd0ZUpW4OYTCYoegxjynrIV4y7NEC0jqo5zXxBVbU8v4jE5GhuUKWrdoBSRkwGoYc5%2BbAjAWN8gftSaEkmJlHy5N%2BkMErxqL7Wui2ownIufxAY6pgFWcYPaEE8nqVNSTii88Dc%2B8aQV1S6d1j5a83xb2tG2%2BChyQhp3rEW%2FKqqgq6Fc5xtqlpVU7%2BxXpyihH29eiL4OM%2FtahlJG2uP9%2BjQHgeP8akx6XrTVW9Eocolwby2JTTlX9ghxElnJhl7r8FbdiXe%2FiyWSUT0RqjMfPIghuolm%2FGUwyJzjkbHu6TFUVSXkDyj8tqgImp9shu%2FAW0QNKblZxeSYxvgN&X-Amz-Signature=2e486c0e361108726cc80468346077750b23e0364c69c075788c8e638a623186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
