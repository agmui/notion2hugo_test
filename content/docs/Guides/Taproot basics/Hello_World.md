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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRHSARY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEdkMc2Zc0EzwYP7SqjoRgYEx%2BUQ%2BH8ZeTT0SUUe1uyAIhAK06TBFF%2FE0BptamUfC3Ihvs%2BUQ0lisUns0iBV6v9c6%2BKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFID1bk%2FYU5Tv486Aq3AOGCHPIh1aCSnySdjiWz7TgZ1uHTRy7FQH45b1ntTfSRNCQ%2B7FIcgjd2es9015auzQAJ6qoCXaWn26eiUOJ3Egcw%2FGPgJ4uLACVbV8gNtWFh0i2LaRF%2BqPlegOrWpKoLFQXmu0ngGQGoTJ2Koxkb%2BvvEHJJkX%2BW0W3Z4pwCXCMZUAZGtCZ9V95Ka7ThcyYYZkUdKxHZkXO6tUwLXtc3McXWzRYOAlAAlehW3T9vTBrzBc9LsZUSVE5bR6y0YVNn4eg%2BMXoUXbScXP2ZNByE8ZnDV4J5vag3bncaKyekeTmNmw9pB7GAykRY6Ylmy58s09lbXGqzD7ZyE3HGBgheAnCazo7js0eZPzPBz3av9mIoGQhrDo6D%2Bzsrkf2MNO5xKzMSqs6zmzWcmMHy5dH8CqputKf4oe%2BNUxmU7aEce7YclvygjiVrh%2FJ7jJqJnw5Emx5TaB7JszBclrcl%2FFDGDWZiX6bq92F3GUtsu7PWnYKNrp87obj3rE6kjS%2Fl4YHBtHcLD9FmnZIE%2B6f7FLwbCSkV7fIhQBOtyuWKdOCxzYjq3bg2t46x1mMISVgjfDRhA22D50Ea4UnIXU%2BT9NiMV%2FeOHkM2zP8%2Bp%2BC8GPuYpxu%2BtbDf3Oh8kV7KnLHQEjD4wMPCBjqkAUmJQRUY%2BL%2FRGhoJBascJ5d%2FxK%2FV3ChqgblrnOUXTVppsh36q%2FMlDD%2FNUiL30a9xImtvQ3AgvkbuMCA49GENsyecEIMlH3YYlBWQP9UgBB9iLi8Pwm%2Fxl7NRxNQeoqL%2BmcS2pCjgbUomVAiobaeGEz7dDnAALmmAz%2B%2BlC%2BXlPLbsGqNj0Tw2E7Pmmr%2BFZZnmsciRuV6mVmTiDInjDtwoLqSiEaF3&X-Amz-Signature=95cfc9cf56d134683201ff8a8d434eddd8f6d72fc026a83ddbda84e057fbeeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRHSARY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEdkMc2Zc0EzwYP7SqjoRgYEx%2BUQ%2BH8ZeTT0SUUe1uyAIhAK06TBFF%2FE0BptamUfC3Ihvs%2BUQ0lisUns0iBV6v9c6%2BKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFID1bk%2FYU5Tv486Aq3AOGCHPIh1aCSnySdjiWz7TgZ1uHTRy7FQH45b1ntTfSRNCQ%2B7FIcgjd2es9015auzQAJ6qoCXaWn26eiUOJ3Egcw%2FGPgJ4uLACVbV8gNtWFh0i2LaRF%2BqPlegOrWpKoLFQXmu0ngGQGoTJ2Koxkb%2BvvEHJJkX%2BW0W3Z4pwCXCMZUAZGtCZ9V95Ka7ThcyYYZkUdKxHZkXO6tUwLXtc3McXWzRYOAlAAlehW3T9vTBrzBc9LsZUSVE5bR6y0YVNn4eg%2BMXoUXbScXP2ZNByE8ZnDV4J5vag3bncaKyekeTmNmw9pB7GAykRY6Ylmy58s09lbXGqzD7ZyE3HGBgheAnCazo7js0eZPzPBz3av9mIoGQhrDo6D%2Bzsrkf2MNO5xKzMSqs6zmzWcmMHy5dH8CqputKf4oe%2BNUxmU7aEce7YclvygjiVrh%2FJ7jJqJnw5Emx5TaB7JszBclrcl%2FFDGDWZiX6bq92F3GUtsu7PWnYKNrp87obj3rE6kjS%2Fl4YHBtHcLD9FmnZIE%2B6f7FLwbCSkV7fIhQBOtyuWKdOCxzYjq3bg2t46x1mMISVgjfDRhA22D50Ea4UnIXU%2BT9NiMV%2FeOHkM2zP8%2Bp%2BC8GPuYpxu%2BtbDf3Oh8kV7KnLHQEjD4wMPCBjqkAUmJQRUY%2BL%2FRGhoJBascJ5d%2FxK%2FV3ChqgblrnOUXTVppsh36q%2FMlDD%2FNUiL30a9xImtvQ3AgvkbuMCA49GENsyecEIMlH3YYlBWQP9UgBB9iLi8Pwm%2Fxl7NRxNQeoqL%2BmcS2pCjgbUomVAiobaeGEz7dDnAALmmAz%2B%2BlC%2BXlPLbsGqNj0Tw2E7Pmmr%2BFZZnmsciRuV6mVmTiDInjDtwoLqSiEaF3&X-Amz-Signature=0df9b0faf619d95e119e474d75c9467c8ac50fb66ca27f1b7e9eb20fd7a514ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
