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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7VPGBV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD9fP6GTL77XeZnweQLHUu4jZ6U%2F60kmUH6wMMgSOjeBQIgE%2BcRLALk%2BNSsFdHDKbL77aDRj%2F6eeUokLAKk5bCm%2Bz8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0yRfv6EsRNcZbyPSrcAwhToxpMvoJvn8u6dZB5Vh9f0khOHu5wh0G6noNMLGt6K7SLhsBWQN1ow%2Ff4DbhSchimk%2BDvKgkGb2QN%2B5zBKnWs%2B19KG4uGoxMbUWP%2FiJVw4joTdiLm32Gqsm9NE54Vuuni8QWsB6h2t1q6ksCGqtlz8GFBAJnWZQ%2BZoGMHKyDxxgJ%2F39720UNmxcliX3NoEx6BMtuY53EMI5nJ7ci5VisG%2F4vLcBbg9DaxoNVuDQfYEE4PT2VOm%2FZ0UQFQJb1uH%2FjEFpRdYTiDCTUjitZECcjRWmzQ7Cdwat42GLvLrbgFbIFNZNhYQDX2saN6YTA7TmZQqoHc4MqFmFBhxvGmvKpf7shpFzz%2B8VxvmbxgwrgnApDDqtnaxVeGPzDWqU29MYBEyolM%2F1bN5QoOi4dPeJrZys4ih4jsfolunsd20LXkStJfNb3ogsd6SO2TuDmk4vbyqPQB%2Bkfifd62DGPFRYAcDqP26S82vaKAynzCBGKYYli2MCTz8XotbsQlgGimPLC%2F5lPIuF4WKkiQzdfRvDMdh711Bqjufqj%2ByCNfTvkcR7SwnYRU%2BFDa2rB5uV%2FV7G4ZhnbuN%2FHVjMeG9ed78BeIExfzI7hgAWIH4%2BUlU8wfaVpmCtuJVp%2FCPDJyMKy97r8GOqUBh%2BP1M9bYovmASsjoMMbdhUeapUJ9KFGIcmLTwuM%2BwZRQKLnjIfWrnhlzaqi3JSv3UjZ8dgvGYM8USBtkjqZNW06oZPbHujzuDt8BtB13B%2BDo2HiN%2BM0EUHdkMN6Y3azfNg8VLJnmGqzMaPuIZWLLAKVCnCCZEPnU7LzPUZ%2FrV%2FnAr%2F%2Fg4ZotEnc%2Bl%2Fx%2FzgKohLRYetRLVdu5IJIiCQFhRqtbQpAC&X-Amz-Signature=00e43775acc1a50af102d59e5c85d0da7c19c5c2ed38b9c9a2cea3a886eb39d1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7VPGBV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD9fP6GTL77XeZnweQLHUu4jZ6U%2F60kmUH6wMMgSOjeBQIgE%2BcRLALk%2BNSsFdHDKbL77aDRj%2F6eeUokLAKk5bCm%2Bz8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0yRfv6EsRNcZbyPSrcAwhToxpMvoJvn8u6dZB5Vh9f0khOHu5wh0G6noNMLGt6K7SLhsBWQN1ow%2Ff4DbhSchimk%2BDvKgkGb2QN%2B5zBKnWs%2B19KG4uGoxMbUWP%2FiJVw4joTdiLm32Gqsm9NE54Vuuni8QWsB6h2t1q6ksCGqtlz8GFBAJnWZQ%2BZoGMHKyDxxgJ%2F39720UNmxcliX3NoEx6BMtuY53EMI5nJ7ci5VisG%2F4vLcBbg9DaxoNVuDQfYEE4PT2VOm%2FZ0UQFQJb1uH%2FjEFpRdYTiDCTUjitZECcjRWmzQ7Cdwat42GLvLrbgFbIFNZNhYQDX2saN6YTA7TmZQqoHc4MqFmFBhxvGmvKpf7shpFzz%2B8VxvmbxgwrgnApDDqtnaxVeGPzDWqU29MYBEyolM%2F1bN5QoOi4dPeJrZys4ih4jsfolunsd20LXkStJfNb3ogsd6SO2TuDmk4vbyqPQB%2Bkfifd62DGPFRYAcDqP26S82vaKAynzCBGKYYli2MCTz8XotbsQlgGimPLC%2F5lPIuF4WKkiQzdfRvDMdh711Bqjufqj%2ByCNfTvkcR7SwnYRU%2BFDa2rB5uV%2FV7G4ZhnbuN%2FHVjMeG9ed78BeIExfzI7hgAWIH4%2BUlU8wfaVpmCtuJVp%2FCPDJyMKy97r8GOqUBh%2BP1M9bYovmASsjoMMbdhUeapUJ9KFGIcmLTwuM%2BwZRQKLnjIfWrnhlzaqi3JSv3UjZ8dgvGYM8USBtkjqZNW06oZPbHujzuDt8BtB13B%2BDo2HiN%2BM0EUHdkMN6Y3azfNg8VLJnmGqzMaPuIZWLLAKVCnCCZEPnU7LzPUZ%2FrV%2FnAr%2F%2Fg4ZotEnc%2Bl%2Fx%2FzgKohLRYetRLVdu5IJIiCQFhRqtbQpAC&X-Amz-Signature=70a4120db51900315eab0adeef583ee11bbf399c260248da4622b1273e373b28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
