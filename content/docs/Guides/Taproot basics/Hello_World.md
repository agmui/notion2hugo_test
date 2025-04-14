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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DQAFDV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJ6DtgN%2FRf%2B5sHUJTVEQtyZcnVw%2FnSvKSj9y%2BHwG%2BmgIgOzGLoalh8dXIEMYf066Bg3hSp6V4QJkYWZDAuQ4kKukq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHBLl%2ByETdA0YhENXyrcA0ZnkkW8dSw8STTyLP5QqThhkDUd6hvsgNSZTQsg83midcxqYBKhJLqzdgK5H01DAXOMSbKAjOoi%2B5OUsOVH6%2BEzcZspcwElrM2e%2FvHjuQL89h2%2BMiimIe9SmGXmr7uQFAXQGSUMqYdgxycMDR99Iw9aZ1u%2B6qi9xB6Ns3B2gd7SUQfWK6CvgA8tr4Dyl1gwcyUAGjRT3T%2FcmAcBCu2GOwowzO10%2FEvXR9b9GqW6A0IayveLB6Oli1i7DrQcPHkKySJrutqUK1r%2BOO3hA2A1fHK4DkZREdsrPvoHoT2vrLu4yIS37OK%2Bb20q1At6GZrR0WxerdDg7A9QNnN9vCzTJn5cmsd12UrQ5OXyE2hhkOhzn4C3BbcLpAHbfWvoCAjg9IXLezVZDEdXcoxfj27lHvz6b70Wq%2BGW4UjUtzSxBjwEj2FYex1KWmMxhOSy4Rafncpgc4JyNI9mg2D48GvQRugiCDxhOzXm%2FoBY6u639MnsNTWAZ3QsxppKhTxlEEOXGSqoKZ3Chp5vdo%2FqJZREzA8kThIYedcvmr1n5O1aoshSHUe8eAgaVspNE2Z92Tjs7DkjODoH9hnTDvpgTGE4jT3G8vUrsFOJcehG1k8yGS6G1sM6TpSi44ZlzO4gMMao9L8GOqUBa1pock%2FF8%2FN5T9zT3brFFcu7x6d2hWEmVhZ0PffGya6U8EtTlBYLYrFuvsYNX%2B41QxS%2B5YxHcmOHfv73Qy%2FqwE8x2m%2B7Btjc9jnQaAzpVAoguXDcSPsDz0%2B1tPOvsuJz0az9bailOnP5XmUmkWJARAsKEYrMsSxtcJktjtPvTVj8pQ050FSMwUrjQpDsKyt9%2Be5Sjyilf5qrA6LqqIMNIUN7pjKc&X-Amz-Signature=34b53793502a745b18b2fc54f572973905a4451e76344ce617cb48e25a5983f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DQAFDV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJ6DtgN%2FRf%2B5sHUJTVEQtyZcnVw%2FnSvKSj9y%2BHwG%2BmgIgOzGLoalh8dXIEMYf066Bg3hSp6V4QJkYWZDAuQ4kKukq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHBLl%2ByETdA0YhENXyrcA0ZnkkW8dSw8STTyLP5QqThhkDUd6hvsgNSZTQsg83midcxqYBKhJLqzdgK5H01DAXOMSbKAjOoi%2B5OUsOVH6%2BEzcZspcwElrM2e%2FvHjuQL89h2%2BMiimIe9SmGXmr7uQFAXQGSUMqYdgxycMDR99Iw9aZ1u%2B6qi9xB6Ns3B2gd7SUQfWK6CvgA8tr4Dyl1gwcyUAGjRT3T%2FcmAcBCu2GOwowzO10%2FEvXR9b9GqW6A0IayveLB6Oli1i7DrQcPHkKySJrutqUK1r%2BOO3hA2A1fHK4DkZREdsrPvoHoT2vrLu4yIS37OK%2Bb20q1At6GZrR0WxerdDg7A9QNnN9vCzTJn5cmsd12UrQ5OXyE2hhkOhzn4C3BbcLpAHbfWvoCAjg9IXLezVZDEdXcoxfj27lHvz6b70Wq%2BGW4UjUtzSxBjwEj2FYex1KWmMxhOSy4Rafncpgc4JyNI9mg2D48GvQRugiCDxhOzXm%2FoBY6u639MnsNTWAZ3QsxppKhTxlEEOXGSqoKZ3Chp5vdo%2FqJZREzA8kThIYedcvmr1n5O1aoshSHUe8eAgaVspNE2Z92Tjs7DkjODoH9hnTDvpgTGE4jT3G8vUrsFOJcehG1k8yGS6G1sM6TpSi44ZlzO4gMMao9L8GOqUBa1pock%2FF8%2FN5T9zT3brFFcu7x6d2hWEmVhZ0PffGya6U8EtTlBYLYrFuvsYNX%2B41QxS%2B5YxHcmOHfv73Qy%2FqwE8x2m%2B7Btjc9jnQaAzpVAoguXDcSPsDz0%2B1tPOvsuJz0az9bailOnP5XmUmkWJARAsKEYrMsSxtcJktjtPvTVj8pQ050FSMwUrjQpDsKyt9%2Be5Sjyilf5qrA6LqqIMNIUN7pjKc&X-Amz-Signature=509c0ad56172aece9b69eba030c0b16d883d66f3af8470c03d0e1b4fbcba61e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
