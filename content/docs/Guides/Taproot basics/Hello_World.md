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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTVGAI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqfihFEhUByyN1YtoWK1a1jSZUqAlZPkSj%2B4iKglKGuwIgGQ2PYSbiS%2BuJEFOjbp%2Fj4Lzvdif8FLRBPEdV4Syaj4gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLqXEYV042WaNiEfSrcA1Qa7EkmOfOZXNlGRHmMFP%2BE1Dzv1M2%2BxaitUHld7yHRDP9IVJBtGfx0W5N9IPqiNZERA5xyd8XQqXlAmDuvSgPsXq8nJqEOnxJ88yXO7AHjjhXNM%2F%2FIT8Im2SgpcixGfI4YWsEmYwDojKiyy4pzfl%2By7%2F3XBFACbB%2BaH%2BXKbe1gv7q290JSkqCvwgLB4FxCp0sYl03sH7PHu94Gy23J6fGgXVljdfXkamKJi5ohRPfBfp7marrLXYkElEpfVq3x867%2FYA3CWt8wAZFgp7mg4QGfwxxiTaWOF%2BuK8uM5KcRGOnsdNcpfgL0wU%2FDLH%2Bd0aoBHy2lhT07cC1Q0qdJA2KMjAxXDrCffVle7%2B%2BXhpWeX1F5MlixJHBFgVv332ixm43NHG8OJzUPMbDWSQgfSESfRYQjEQ4p3CONpfqzvPZmbYf1r8bRCxUEypTTu3n6Wq%2BKg0xihZM7Ba6vF%2BqegFi4YVD8DiqZlqu9wGdgD%2Fzz2XI9E6mA%2B3I8ygaXRqxX6yGT%2FVByOfo39EG0BjC%2BfYFXMnKmbwL2iucKlflCczka8bA%2F4dHv%2BwNhv8hik5e6ApiXCHkrtviJFYkDR3XSFA%2BAjDHfLZNtPzHLt5B2wsNDCy95PRgTDc1LHGTT0MLf7tL8GOqUBO9OqS9hCKVAAIDSfCZ1pwWCyydDdIrSFklhTQd7eAoA%2FXVJ1AJ5yBDMleS0moXPIjhEnTRME%2Ft0wb7HIdo5KaWuQEqxo8cuN9xAIxpkSoX8ffRkaM8xt9DVfUiqAMkXVJKwCgB7KanvjVoHyQHxgJONFsc7H9PlWD1ZlUHiqhY4aFAgVEfxUPRufGNYMvhQRxn4rjRuJlx7Wq5MN7d9INlp7i0Fw&X-Amz-Signature=e76bdf9ad8af4570a0807078acaee645c3603407d77d71b710887e086c43921d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTVGAI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqfihFEhUByyN1YtoWK1a1jSZUqAlZPkSj%2B4iKglKGuwIgGQ2PYSbiS%2BuJEFOjbp%2Fj4Lzvdif8FLRBPEdV4Syaj4gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLqXEYV042WaNiEfSrcA1Qa7EkmOfOZXNlGRHmMFP%2BE1Dzv1M2%2BxaitUHld7yHRDP9IVJBtGfx0W5N9IPqiNZERA5xyd8XQqXlAmDuvSgPsXq8nJqEOnxJ88yXO7AHjjhXNM%2F%2FIT8Im2SgpcixGfI4YWsEmYwDojKiyy4pzfl%2By7%2F3XBFACbB%2BaH%2BXKbe1gv7q290JSkqCvwgLB4FxCp0sYl03sH7PHu94Gy23J6fGgXVljdfXkamKJi5ohRPfBfp7marrLXYkElEpfVq3x867%2FYA3CWt8wAZFgp7mg4QGfwxxiTaWOF%2BuK8uM5KcRGOnsdNcpfgL0wU%2FDLH%2Bd0aoBHy2lhT07cC1Q0qdJA2KMjAxXDrCffVle7%2B%2BXhpWeX1F5MlixJHBFgVv332ixm43NHG8OJzUPMbDWSQgfSESfRYQjEQ4p3CONpfqzvPZmbYf1r8bRCxUEypTTu3n6Wq%2BKg0xihZM7Ba6vF%2BqegFi4YVD8DiqZlqu9wGdgD%2Fzz2XI9E6mA%2B3I8ygaXRqxX6yGT%2FVByOfo39EG0BjC%2BfYFXMnKmbwL2iucKlflCczka8bA%2F4dHv%2BwNhv8hik5e6ApiXCHkrtviJFYkDR3XSFA%2BAjDHfLZNtPzHLt5B2wsNDCy95PRgTDc1LHGTT0MLf7tL8GOqUBO9OqS9hCKVAAIDSfCZ1pwWCyydDdIrSFklhTQd7eAoA%2FXVJ1AJ5yBDMleS0moXPIjhEnTRME%2Ft0wb7HIdo5KaWuQEqxo8cuN9xAIxpkSoX8ffRkaM8xt9DVfUiqAMkXVJKwCgB7KanvjVoHyQHxgJONFsc7H9PlWD1ZlUHiqhY4aFAgVEfxUPRufGNYMvhQRxn4rjRuJlx7Wq5MN7d9INlp7i0Fw&X-Amz-Signature=723dbcaf9e4e7c98c25ec396daf4d1e967817193ec60d76213afcb2b3ee6bfeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
