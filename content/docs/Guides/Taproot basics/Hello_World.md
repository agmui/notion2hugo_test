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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXHRNGD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsxNKl4RC1NNGM1EnpRZ0BLtCShUtouWys%2FcV1o%2BAjIAiA2ZmlxEFFtg%2BF%2FJoi%2B%2BnRNSBukzJjjRKyB3DEZsCHIYCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVISfx%2FWBfLJQUwV%2FKtwDEVDQMnsgsyxzdNJw9NAUeXf1D6YPz1aUSCR4ZlkJfVlVubG8ekqhuviZLG2FLMPIcLpjucNdYdI7FDwjWeN%2FNYRqqaC0IbKJOBTHU7SzKwgRs5i5Kb2cxu4gD16NxTNYytGBjxO5uQyDa9F0D9KIZUmesXUiuUh4tYyGHWVVBMJqFeA4G4H2EUsykRV56w19dsmh5SmHyfOxPAH8Xuy39H08o%2BDyqaNO5O1mBf%2FAeAMbBPhXFO0B36x4b8W7ml2ywavtVcYY2eFIygnET%2FGEys4J8KKmCObhl9zetju2rb4i14NctmGj4EYAfwIgtg14%2FLsqJ5TPlfAz2l%2FVOjTV5ZZ0v5TltyMEg9qkdMLoV3hzKiYlcR1e7wS8faaVhPAbVChabe9wtgxVeMLFL57g1hUjTsRaPYO5NDzYaVZBvVNA%2BQF0vj2XTSn8BGZN0cM5i9IVfq7%2BxnHbGdKG57YBCTmCVgd%2BVx4BZ3%2FoodJM7z2%2FQ98fZjliZhoMzB7l7ImeqGS5nmiXjbUNHreHIqV0vbiYaCXXIHI6%2B%2BER%2FKs7bhlM1XpQUjo1CGaXz%2Bjzp9X1qli2N5rJEnWSZYwAR87mtDPkj41SyF%2FkuzrpjXJiWH1d3mDrvRNnyklQHu4wgq21xAY6pgE4S9i81TWiq06W5FbcyV1t%2FAPPMIibKffYF67nMTBmTRrrXOyymVnDukEp4XSJn8qpFLpMkbJBp2PeoLWLnrV%2B%2BNHx7ShbqrISwdobBAmzIojxXI%2FNnPR%2FcUwOnBCQm%2BGV5nhgtcMcAU89v44wdg9SbAvoTxiyNdkoCZq5Cr7Jq3XxzrtKWgLIG7PTt%2FEqQzDS49u9Ln4cxplol4mzL4nyK9pIeI%2BY&X-Amz-Signature=7a08ea187d197bc3e6934ba0988e0a7a151bb1beea4075442f06b7a03d053593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXHRNGD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsxNKl4RC1NNGM1EnpRZ0BLtCShUtouWys%2FcV1o%2BAjIAiA2ZmlxEFFtg%2BF%2FJoi%2B%2BnRNSBukzJjjRKyB3DEZsCHIYCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVISfx%2FWBfLJQUwV%2FKtwDEVDQMnsgsyxzdNJw9NAUeXf1D6YPz1aUSCR4ZlkJfVlVubG8ekqhuviZLG2FLMPIcLpjucNdYdI7FDwjWeN%2FNYRqqaC0IbKJOBTHU7SzKwgRs5i5Kb2cxu4gD16NxTNYytGBjxO5uQyDa9F0D9KIZUmesXUiuUh4tYyGHWVVBMJqFeA4G4H2EUsykRV56w19dsmh5SmHyfOxPAH8Xuy39H08o%2BDyqaNO5O1mBf%2FAeAMbBPhXFO0B36x4b8W7ml2ywavtVcYY2eFIygnET%2FGEys4J8KKmCObhl9zetju2rb4i14NctmGj4EYAfwIgtg14%2FLsqJ5TPlfAz2l%2FVOjTV5ZZ0v5TltyMEg9qkdMLoV3hzKiYlcR1e7wS8faaVhPAbVChabe9wtgxVeMLFL57g1hUjTsRaPYO5NDzYaVZBvVNA%2BQF0vj2XTSn8BGZN0cM5i9IVfq7%2BxnHbGdKG57YBCTmCVgd%2BVx4BZ3%2FoodJM7z2%2FQ98fZjliZhoMzB7l7ImeqGS5nmiXjbUNHreHIqV0vbiYaCXXIHI6%2B%2BER%2FKs7bhlM1XpQUjo1CGaXz%2Bjzp9X1qli2N5rJEnWSZYwAR87mtDPkj41SyF%2FkuzrpjXJiWH1d3mDrvRNnyklQHu4wgq21xAY6pgE4S9i81TWiq06W5FbcyV1t%2FAPPMIibKffYF67nMTBmTRrrXOyymVnDukEp4XSJn8qpFLpMkbJBp2PeoLWLnrV%2B%2BNHx7ShbqrISwdobBAmzIojxXI%2FNnPR%2FcUwOnBCQm%2BGV5nhgtcMcAU89v44wdg9SbAvoTxiyNdkoCZq5Cr7Jq3XxzrtKWgLIG7PTt%2FEqQzDS49u9Ln4cxplol4mzL4nyK9pIeI%2BY&X-Amz-Signature=b95c80326df698beac849416dec944da0753dae71cb2da2d01c58d95e6ee4df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
