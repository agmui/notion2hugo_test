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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652IG5UM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWq61xbarSJXqJ23EZxF2ih9%2BwMkulyDZWmm%2BNMX0UdAiEAgT6K03wv2ThqXkSKXjgseWDEta18sQFqBM6yMlgwN4cqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMW9%2BG7JH5gsNn4MyrcA695uGBk4V1Kd%2FfDjHpF2cS30AoGgc9Ep1dCxdoGbC3jCF0ChTXvfJtzctMB4ochWiIIDjY5MkKg6xWro8fvY4zA8e%2BXvaOGcptl%2FCi9sTiR%2F%2Bh3MtqJ096NMT0n%2BP8zHraCaOanzWz9y9hAZColpmT7uswsfBXLnOG8SrnKkOj9HUOfOR1TZSEv19rFvT02RgzTEdXWR1bbbAXg2DOwTtMuxj4AY3Pn5jWBLNL5aDRvZzJ9OGhK3Y2Y20kOlB2PYfmGbpcYq%2Bh6wK5Y7f1%2BMxRurmomJYt6XRRkf5SU7UCom0slI6PR5xpac%2FVFHpGHfCoBBVFESp4j%2B7u6m7VOXxNfz2HCIw8pz2goNvQ2qK%2BJuGeaNkk%2FVr04BJJxh0wMtdlkTxcnwKNNmla5p3AY3ebde6Rpe5ARLVNLgdoDV4AsIED1avGLRZEeGC6DW6%2BX%2FoshsWBOgQBExGQEdhMohfwOjXVchEt7o53PwTgNFBugtX4Pn6annLjsb658U4gLE30VbjikewUvCElVwBiypfVMtkMXG28N9RbNPmj4hXHSl8rnbrhToM5P4ItUFhrzncVqmNMPOkKh0UPyR%2FFAyvcQIGjyHzLgJu3M2HDfMQHoVVtgGGHP39oTkZfsMIeOib8GOqUBvscqTTS4Ob%2FeK3sJ437BbxDD87qVg2Nxg15edsFMUG3P%2BoK3cRPxCuz64qKXhyZpjEYDJol7zvqfQc2lr0WJPd8d5MpAH1N%2B0nzmlYMJAcQPncimmykTXiBPEfFj7BcKKM%2Bk0FuMqaFjmwZT3tdUSqn%2FwuJUKX7yqRp0aDgCHIkkSPitCdQAw6rgblKeNN9GQ%2BSQr7qFA9mLHmKSDf2r4amu9UkZ&X-Amz-Signature=50dd343bfd409e7c6f9de9ced4b426575088bd4f1cc43b67432d162a1fc40e46&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652IG5UM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWq61xbarSJXqJ23EZxF2ih9%2BwMkulyDZWmm%2BNMX0UdAiEAgT6K03wv2ThqXkSKXjgseWDEta18sQFqBM6yMlgwN4cqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMW9%2BG7JH5gsNn4MyrcA695uGBk4V1Kd%2FfDjHpF2cS30AoGgc9Ep1dCxdoGbC3jCF0ChTXvfJtzctMB4ochWiIIDjY5MkKg6xWro8fvY4zA8e%2BXvaOGcptl%2FCi9sTiR%2F%2Bh3MtqJ096NMT0n%2BP8zHraCaOanzWz9y9hAZColpmT7uswsfBXLnOG8SrnKkOj9HUOfOR1TZSEv19rFvT02RgzTEdXWR1bbbAXg2DOwTtMuxj4AY3Pn5jWBLNL5aDRvZzJ9OGhK3Y2Y20kOlB2PYfmGbpcYq%2Bh6wK5Y7f1%2BMxRurmomJYt6XRRkf5SU7UCom0slI6PR5xpac%2FVFHpGHfCoBBVFESp4j%2B7u6m7VOXxNfz2HCIw8pz2goNvQ2qK%2BJuGeaNkk%2FVr04BJJxh0wMtdlkTxcnwKNNmla5p3AY3ebde6Rpe5ARLVNLgdoDV4AsIED1avGLRZEeGC6DW6%2BX%2FoshsWBOgQBExGQEdhMohfwOjXVchEt7o53PwTgNFBugtX4Pn6annLjsb658U4gLE30VbjikewUvCElVwBiypfVMtkMXG28N9RbNPmj4hXHSl8rnbrhToM5P4ItUFhrzncVqmNMPOkKh0UPyR%2FFAyvcQIGjyHzLgJu3M2HDfMQHoVVtgGGHP39oTkZfsMIeOib8GOqUBvscqTTS4Ob%2FeK3sJ437BbxDD87qVg2Nxg15edsFMUG3P%2BoK3cRPxCuz64qKXhyZpjEYDJol7zvqfQc2lr0WJPd8d5MpAH1N%2B0nzmlYMJAcQPncimmykTXiBPEfFj7BcKKM%2Bk0FuMqaFjmwZT3tdUSqn%2FwuJUKX7yqRp0aDgCHIkkSPitCdQAw6rgblKeNN9GQ%2BSQr7qFA9mLHmKSDf2r4amu9UkZ&X-Amz-Signature=dd1170bfe23f15907fe54d7b3d05e73bef552f18baa74c83d9e5327fb91b3f43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
