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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJUES2T%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheQuO9BsVBpe6cm7H%2BBET4xZtcdziXs2R9ttRtYNf9AiEAjcLUMhn5aXi21b%2BwzDVjba10Njt%2FJcx85XWjD3hNpEkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH28ZuaFld2hcLmmyrcA%2FdQhduVdoCgF%2FqTNmYg9Pv8LgNNtuQcJUi%2FqvMFXxflZ9Gpg%2BJGKHIdxwPoMyn2b%2FmwqZ2YPmvzjnmIsZIetkl4H5UYb10s0l2VJza%2BOksi4dkY2Oi4yKZvZRnNb3IXB%2BT93EO0H1rjdCd2MBtPIQ8IP7dg7RUEJlrzInQdcqTzQhjkaM0scrUoG8T15OaGrGegcI5JGzZAgMKHY8SqC0rS2W29dynyuoUaoxgptVF52EAWU6rWsZDFKdfMewdPu6SmMK%2BUq3UFznGH%2FzVqkNzewCnM6obt9rVBOqkRZJabnpG3CzeXp7BHTwzG%2BZLxqQYDGMC4PFeCdN5BoMDxqbwMhJgKSlNyLkBKUl%2FzRQHt7yq%2FcjssD%2BzURH9p0d93lSFsPC5qRvvhMkHmwI90MUpatQUMBd43PbMhEAITofS%2Bcbny0ZB6wqP92r4p2Z1T2rK5oHy0oiZf5YmMITzAdkyefNDTDTeESwBG%2FxhsDwnFZYZGab2yx2QqjIEGLwvESqNFRIrlza28Wg%2FUqJWY45eejO4IW9V96pz%2B3udw%2BWgtBGRxithqVuK4Q4jUVppa%2FiLTIsxYlaXlChqzzDev8d6y34WtHXYN%2FPxpYw0MVTWdCJ6KKoQvuwUUHBMoMJy6lMMGOqUBYCXzxCr6Emj%2BO%2FJbLkkZ0DYSQQOHOAk7Gwa49cZkJiDaaKXLG8zd2iolca7DbKShqO7wNbHk78L87GyKNPHPs%2Bcwg9l%2F0MmhXWn7unQ%2FKPTlPSRvDKCPHVmfSovlFV2szmWvY4ZTHE%2F1BSKN6B2wVLZ4n5HUfA%2Fnf%2F4v9rI8WqChR6CdN6rXsLXNl68qBxu5Y1DJ4fBBYoq0n3suesgQiNt3AkkH&X-Amz-Signature=04f871e7a238b32cf50f3370df16c5d3d6e4f3f0828ecfc1f1e489013d858072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJUES2T%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheQuO9BsVBpe6cm7H%2BBET4xZtcdziXs2R9ttRtYNf9AiEAjcLUMhn5aXi21b%2BwzDVjba10Njt%2FJcx85XWjD3hNpEkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH28ZuaFld2hcLmmyrcA%2FdQhduVdoCgF%2FqTNmYg9Pv8LgNNtuQcJUi%2FqvMFXxflZ9Gpg%2BJGKHIdxwPoMyn2b%2FmwqZ2YPmvzjnmIsZIetkl4H5UYb10s0l2VJza%2BOksi4dkY2Oi4yKZvZRnNb3IXB%2BT93EO0H1rjdCd2MBtPIQ8IP7dg7RUEJlrzInQdcqTzQhjkaM0scrUoG8T15OaGrGegcI5JGzZAgMKHY8SqC0rS2W29dynyuoUaoxgptVF52EAWU6rWsZDFKdfMewdPu6SmMK%2BUq3UFznGH%2FzVqkNzewCnM6obt9rVBOqkRZJabnpG3CzeXp7BHTwzG%2BZLxqQYDGMC4PFeCdN5BoMDxqbwMhJgKSlNyLkBKUl%2FzRQHt7yq%2FcjssD%2BzURH9p0d93lSFsPC5qRvvhMkHmwI90MUpatQUMBd43PbMhEAITofS%2Bcbny0ZB6wqP92r4p2Z1T2rK5oHy0oiZf5YmMITzAdkyefNDTDTeESwBG%2FxhsDwnFZYZGab2yx2QqjIEGLwvESqNFRIrlza28Wg%2FUqJWY45eejO4IW9V96pz%2B3udw%2BWgtBGRxithqVuK4Q4jUVppa%2FiLTIsxYlaXlChqzzDev8d6y34WtHXYN%2FPxpYw0MVTWdCJ6KKoQvuwUUHBMoMJy6lMMGOqUBYCXzxCr6Emj%2BO%2FJbLkkZ0DYSQQOHOAk7Gwa49cZkJiDaaKXLG8zd2iolca7DbKShqO7wNbHk78L87GyKNPHPs%2Bcwg9l%2F0MmhXWn7unQ%2FKPTlPSRvDKCPHVmfSovlFV2szmWvY4ZTHE%2F1BSKN6B2wVLZ4n5HUfA%2Fnf%2F4v9rI8WqChR6CdN6rXsLXNl68qBxu5Y1DJ4fBBYoq0n3suesgQiNt3AkkH&X-Amz-Signature=1e90bb70bc7d3935eef95d6de310452591775961d28d645b1f555da0e30ca1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
