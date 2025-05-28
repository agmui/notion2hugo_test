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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHUGAFB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBFi%2FVJtZ3ZwhsQM05d%2FGkg%2B%2BMP9VyFG8rwG4jqMNMwIhAMxGCk86rtiXdXYapgh8LMsRqtl0zJzZrJr68rp9xlBHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxuLxXFEoH%2B3ZSl1MQq3APQtV5L5V34IKXpxdYBj284KbR1AxEDIOzTxZnuV25soFU75sAulJPwJstdC6AFU0hhraZ7%2Fc5Ln%2FII43vRjud4Wrag4ltJdamOjmw%2FC0dCfcMQTrtgpl23ocPUgjx%2B3Njrj%2BTG3D%2BtXbYsMwCoprKiUfMD8WSm8i7zYkjRAeNAqwSGYiRw0GJ5XodFz4B1acO30pZEi%2F30ZMDhbnE7MbfqpxffK4BZHGpoQ2pWyUkO9Ctfe5HMfKf1xX6iSQZ1XP8h2gwXMhO7wJfJRhat20AePefKa%2FXZS%2B5WVX8P7eBobbK%2BPm4BQN1INyW1EhLKNDa2j2ZS4hORvXLHf%2F4QU3%2BifiywJ%2B2jNAYZnmV9b%2FlurYL0KGQOZ6knqGcvcVZFYGhHb6QSL1Ue%2Fgr88pJjbR4JVNYlzvxoddt%2BTm7zXBgdqOTGF4WLmlCLr%2FZR65gGsnCHeNZ9xZdVYfooPBXW%2F6DWaha22otbfEZgv659EFu3Ihw7Kny32rHW%2B%2BLzf2dmqvXWjwmNkFkxsRyR%2FEh5QetdlRjRK6KAJRexL%2FFFQueLV29b6Eo9MYk5e0K3F2t13wPs67xPVscI3FYH3XdrG0C0Q4GRwpcmlIL2xXKrPjhsukwD7NfxfE1gnLsEJTDg5d3BBjqkAYjNpJEJAjtOKMdYJUAjsrlss4hbVo92PzHzIu4fDpd%2BcU3GSIFXAfRonhulXn6OuPkDMJMTSWpmjfk5uLOjS%2Bar3rgY0ITYTAiRRN90vR6aVImhuvL%2FPdfrRpEiUCMU%2Fh3oWDKmBC9xe%2Bq%2FRUdToKUZaMnr80LbmFhsZl0jN4YIDy0%2FYlY%2FQl9yUZpc4WDt81TivLAJsgmtvD8qDBffMMagiVVt&X-Amz-Signature=62417ef97c05b55f57838caea14a72fb5ae11d9fa8e684121a8bd06fc884e816&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHUGAFB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBFi%2FVJtZ3ZwhsQM05d%2FGkg%2B%2BMP9VyFG8rwG4jqMNMwIhAMxGCk86rtiXdXYapgh8LMsRqtl0zJzZrJr68rp9xlBHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxuLxXFEoH%2B3ZSl1MQq3APQtV5L5V34IKXpxdYBj284KbR1AxEDIOzTxZnuV25soFU75sAulJPwJstdC6AFU0hhraZ7%2Fc5Ln%2FII43vRjud4Wrag4ltJdamOjmw%2FC0dCfcMQTrtgpl23ocPUgjx%2B3Njrj%2BTG3D%2BtXbYsMwCoprKiUfMD8WSm8i7zYkjRAeNAqwSGYiRw0GJ5XodFz4B1acO30pZEi%2F30ZMDhbnE7MbfqpxffK4BZHGpoQ2pWyUkO9Ctfe5HMfKf1xX6iSQZ1XP8h2gwXMhO7wJfJRhat20AePefKa%2FXZS%2B5WVX8P7eBobbK%2BPm4BQN1INyW1EhLKNDa2j2ZS4hORvXLHf%2F4QU3%2BifiywJ%2B2jNAYZnmV9b%2FlurYL0KGQOZ6knqGcvcVZFYGhHb6QSL1Ue%2Fgr88pJjbR4JVNYlzvxoddt%2BTm7zXBgdqOTGF4WLmlCLr%2FZR65gGsnCHeNZ9xZdVYfooPBXW%2F6DWaha22otbfEZgv659EFu3Ihw7Kny32rHW%2B%2BLzf2dmqvXWjwmNkFkxsRyR%2FEh5QetdlRjRK6KAJRexL%2FFFQueLV29b6Eo9MYk5e0K3F2t13wPs67xPVscI3FYH3XdrG0C0Q4GRwpcmlIL2xXKrPjhsukwD7NfxfE1gnLsEJTDg5d3BBjqkAYjNpJEJAjtOKMdYJUAjsrlss4hbVo92PzHzIu4fDpd%2BcU3GSIFXAfRonhulXn6OuPkDMJMTSWpmjfk5uLOjS%2Bar3rgY0ITYTAiRRN90vR6aVImhuvL%2FPdfrRpEiUCMU%2Fh3oWDKmBC9xe%2Bq%2FRUdToKUZaMnr80LbmFhsZl0jN4YIDy0%2FYlY%2FQl9yUZpc4WDt81TivLAJsgmtvD8qDBffMMagiVVt&X-Amz-Signature=a52cb516a6740d36b29e440b3f2066d38e30c3c140c91f94a77860fa6e51e803&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
