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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGB2VOO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkx4fBBXDJtVuiO7Ye2N1d4HrxzxPEsWkN8Y2iF84CrwIgH0Apo%2FR1zaTKB2rJNapnSfUVEj2rb5QnNrWZl%2FzBia8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Q9FqvvxuT1qpA8SrcA2oN0bY83ecqF%2BbaJIDgSJysMq194HLm77AzbB2Imvx27XcPkKc2TOXMR4D5pV%2F9NuLwEn8ydyWKDyM4%2B4MuVdi1mcc7wIihk9r8ZqFv%2BTa3bTrJ%2B9whIR2s4Fw970EvWiW6%2FMrjc0x%2FiAWQiC7vVEXA10OLEJgH23CdBlu6WXWLAbxZYdFK8sUjn8xhpb2DYeZbS2gpCOttDXc%2BzmyyuHzWEafHhpGbm67g3vLcAttE96PReI%2F1HprE%2Ft5jUiY8I1x5GXqY3po%2BAZTZaJFD8KETAD3QNQXqJLKBZrzZWlbooXQss%2BAQ%2BDeVfpWfEI9YN9IptzuFpvGMz5WjL90cNaRfZDMEA1U5EfhfowxCKCSyM%2Fueb0LuEKXiVNapCoMQhkax1OsBhubISGxRRUD9RGD%2BmHctm0Xk5zOvV6VtmCdWHvhIkcEMSMP32MTWZQ%2BIrcK1Vry5sIb1fxQjH8fbgmEAkT8n53RfNrV0MkmpHvWX%2BSuWu6%2B%2BakyxPDSZ0PL5ZXLe9YWwkXmqIrc1dGUv0M%2BvMGtADNFIawtlEvWbozHwDmNe32FG4ycBv6Vjjv9eI6mwJbv2u0GhVoJdDsT%2F%2FHOFfLMyd%2BY5NCHwjZzRlEtcfwXQmWBuKuniEQSlMN%2FUzL4GOqUBpE1tEbXjD2WtJ%2Fz4o7uNNHTRz%2FU%2F74OcFlja85xeybBOyLWx1Ee2bFs7zB3Juz6m60K2UEmY92ZsXi39mLkUboF1SMAbWzlTuG9OegFvEej2Z3Y2Qh5JgLn0xZO9C4nEVUUEEI5x%2BoSnxDWR4dGLqUtiwLaOxp9TX6LaOKOyBwHc1n5VM329ddmYtXzD6R75ThpjFmQSrSXh15umovf6%2BEHzd843&X-Amz-Signature=e8f5bc44ea41f33bfe629ed8a17a0cafb7b13ceb7f7a9bd7c8cf4907c7a35686&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGB2VOO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkx4fBBXDJtVuiO7Ye2N1d4HrxzxPEsWkN8Y2iF84CrwIgH0Apo%2FR1zaTKB2rJNapnSfUVEj2rb5QnNrWZl%2FzBia8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Q9FqvvxuT1qpA8SrcA2oN0bY83ecqF%2BbaJIDgSJysMq194HLm77AzbB2Imvx27XcPkKc2TOXMR4D5pV%2F9NuLwEn8ydyWKDyM4%2B4MuVdi1mcc7wIihk9r8ZqFv%2BTa3bTrJ%2B9whIR2s4Fw970EvWiW6%2FMrjc0x%2FiAWQiC7vVEXA10OLEJgH23CdBlu6WXWLAbxZYdFK8sUjn8xhpb2DYeZbS2gpCOttDXc%2BzmyyuHzWEafHhpGbm67g3vLcAttE96PReI%2F1HprE%2Ft5jUiY8I1x5GXqY3po%2BAZTZaJFD8KETAD3QNQXqJLKBZrzZWlbooXQss%2BAQ%2BDeVfpWfEI9YN9IptzuFpvGMz5WjL90cNaRfZDMEA1U5EfhfowxCKCSyM%2Fueb0LuEKXiVNapCoMQhkax1OsBhubISGxRRUD9RGD%2BmHctm0Xk5zOvV6VtmCdWHvhIkcEMSMP32MTWZQ%2BIrcK1Vry5sIb1fxQjH8fbgmEAkT8n53RfNrV0MkmpHvWX%2BSuWu6%2B%2BakyxPDSZ0PL5ZXLe9YWwkXmqIrc1dGUv0M%2BvMGtADNFIawtlEvWbozHwDmNe32FG4ycBv6Vjjv9eI6mwJbv2u0GhVoJdDsT%2F%2FHOFfLMyd%2BY5NCHwjZzRlEtcfwXQmWBuKuniEQSlMN%2FUzL4GOqUBpE1tEbXjD2WtJ%2Fz4o7uNNHTRz%2FU%2F74OcFlja85xeybBOyLWx1Ee2bFs7zB3Juz6m60K2UEmY92ZsXi39mLkUboF1SMAbWzlTuG9OegFvEej2Z3Y2Qh5JgLn0xZO9C4nEVUUEEI5x%2BoSnxDWR4dGLqUtiwLaOxp9TX6LaOKOyBwHc1n5VM329ddmYtXzD6R75ThpjFmQSrSXh15umovf6%2BEHzd843&X-Amz-Signature=b8e66909d742816ff734e06afd82ee3fd664db2f75cc3631698412260d89916d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
