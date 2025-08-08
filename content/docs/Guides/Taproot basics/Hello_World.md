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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEWTWX6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFKuKUmSExHw%2Fcu1CrHM5pyqpBcrMR0%2B3ewgiTWl6eovAiAPD0ajbncPjH%2BkbqA0jtAog%2BKQ%2FsQb8QyNUjdUEc7IsiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzF8EFXb76Z61MXsKtwD9JmWH8hGEDXPwMa2e2EffqFf0KzCQA%2FxPn%2FvQfrFjtfwJoH3KLmENoRMvJZBNWyqzE9NYXgMaxO%2FTplTUhPl4KJ95G5Pc6ubIe37u0mbIEZHxQiTmMeNOzJe%2BA7gD5t%2FjYFz6DlQTy8zCnYiu7wWDjkVOnYHKF5zBIs%2BpqMmqudxk084V6tSY2I7Z7QhP1Y2CUvh34Bl7WUR3kJ%2BVF4Xr%2F23qTV%2F0DuHixiZ865pHkOCMZIPBVqopfbl3Vb4VPkvby6kFUDmkZzHeifaQSbRrHju4SiMswGUssJGDpdhh%2FRoZj%2BRFwI1COyRgIrCsDy4e6gDhbUmwBGaLtV93k04TE0FlhmH%2BgbZHsIYDdqnWeQWTzKmH7Nye2YSbRZFwYZU4%2BKjcm6yIwSaNaTjl7g7%2FKBnymvidw6B%2BqZKRgWQxnNYJDTpwTwqAzVAJ49BS73guvCgFKMadOrIRpb6%2FwSNQ1F5PpORofoZqvs6JBSEcVc1OUF42D49R7PzA%2BtCP5ovbmqpOeyK8iyJAWhd5ZzfWB4Cyj4Q1oQCIPuU3%2F3iaQ95XjKFopXbuyXl5yUyayRlcuXP4Q59glmfSrxFy43MY2sw1sWiil1yJBJr7iWUUQI%2F7%2F4Fs7rSIbbe940w9dLVxAY6pgExL8I%2FOghdjloSBkCgPtHDbOAQKR8Y1CV3XaV9pgC8TM48GIiJXbmG2UVz4o5sy6q2VxN7oQ0Iv2hJ3d6tCTJHXzS7kPAWDUcocROmawJyMR9FzWGBfOiisnKGz2Ov8VWkrbnptiSGWldDrBQUVde0X2SbdmmFN6FgW5KchXZISzl%2BpMswFwd969MfZrTyk0hy9%2B%2FkMYxE1KhKwiec0X%2B2FmtIgYyA&X-Amz-Signature=81012392946041359eae8ffbc239c11ada5707ccb819edec209013d3d69f6cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEWTWX6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFKuKUmSExHw%2Fcu1CrHM5pyqpBcrMR0%2B3ewgiTWl6eovAiAPD0ajbncPjH%2BkbqA0jtAog%2BKQ%2FsQb8QyNUjdUEc7IsiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzF8EFXb76Z61MXsKtwD9JmWH8hGEDXPwMa2e2EffqFf0KzCQA%2FxPn%2FvQfrFjtfwJoH3KLmENoRMvJZBNWyqzE9NYXgMaxO%2FTplTUhPl4KJ95G5Pc6ubIe37u0mbIEZHxQiTmMeNOzJe%2BA7gD5t%2FjYFz6DlQTy8zCnYiu7wWDjkVOnYHKF5zBIs%2BpqMmqudxk084V6tSY2I7Z7QhP1Y2CUvh34Bl7WUR3kJ%2BVF4Xr%2F23qTV%2F0DuHixiZ865pHkOCMZIPBVqopfbl3Vb4VPkvby6kFUDmkZzHeifaQSbRrHju4SiMswGUssJGDpdhh%2FRoZj%2BRFwI1COyRgIrCsDy4e6gDhbUmwBGaLtV93k04TE0FlhmH%2BgbZHsIYDdqnWeQWTzKmH7Nye2YSbRZFwYZU4%2BKjcm6yIwSaNaTjl7g7%2FKBnymvidw6B%2BqZKRgWQxnNYJDTpwTwqAzVAJ49BS73guvCgFKMadOrIRpb6%2FwSNQ1F5PpORofoZqvs6JBSEcVc1OUF42D49R7PzA%2BtCP5ovbmqpOeyK8iyJAWhd5ZzfWB4Cyj4Q1oQCIPuU3%2F3iaQ95XjKFopXbuyXl5yUyayRlcuXP4Q59glmfSrxFy43MY2sw1sWiil1yJBJr7iWUUQI%2F7%2F4Fs7rSIbbe940w9dLVxAY6pgExL8I%2FOghdjloSBkCgPtHDbOAQKR8Y1CV3XaV9pgC8TM48GIiJXbmG2UVz4o5sy6q2VxN7oQ0Iv2hJ3d6tCTJHXzS7kPAWDUcocROmawJyMR9FzWGBfOiisnKGz2Ov8VWkrbnptiSGWldDrBQUVde0X2SbdmmFN6FgW5KchXZISzl%2BpMswFwd969MfZrTyk0hy9%2B%2FkMYxE1KhKwiec0X%2B2FmtIgYyA&X-Amz-Signature=a3931d4f4123fe132cc2f0fc1ab20f4ecb8cabea569751488e5a09a57455196a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
