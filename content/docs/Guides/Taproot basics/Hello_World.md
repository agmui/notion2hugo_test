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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53CPK66%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2F4Ms9PnM7qKFbEL2QAZWCZWv1EWml2Etj5miVQEWqvwIhAMENNEydsX50k5hDstvEP8JFF5gGDRm70IS5mqANhkGbKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGINjclUYBQH3cj0q3AMGYcYiIboBopU66ykcKOQxScXQtfYECFUy4anBZRSHOJKR1p%2FJJKVltuarRZiZsagjYwJv4BQB5dz%2FG5RMRkzhVmRxmyfQxTHC%2FGmuwD%2FNDfE%2Buz4mffho5Qn3kmD04mimA0HNReRabmNzOa0R6JXiPr%2Br01egnSEleOlr25xWeGwa%2FPKPP%2BTjnyvJ0laWqtPgODzn0SsX0LPihxlaqWYshzKFdieHI3Ak5LfJ17sq3o0%2BfhsZZL%2BkC3elEEu%2B9MSIsEUy%2FU%2FAXKFrIosqCTfAyVAZQBuRC%2Bz21UbFtBUlZ00ZcnjQv6ixedSbM2xdoNVW%2BU4a3xm6jcKqP1FuPRDws6JMysLwMmexc7Kyppx8yFx%2B5DT4bb4a%2BoEtOPWcssbNlo%2Fwcl3NUvV5NtkzhewLU4elnx3KdKRKR9nKO2B8%2FOm3P8MZkypVr35r%2FzifzHAPvhcOsCEBiAmHhMf3Ov%2BT9BhADsiWsk%2Fyub2LW4GSVhVVFqH%2FMpdAz%2FiwsFBgS9FjylWE5suxjsEeBOdKbp3NjetKo09yavTjdSY1m33w9jQY6SGqtUv0kz579rlLnBcWE%2BbFgh2sHZwWrRvqLa67F5alL9h7LSZPnWy4wQZFWpDcRopAZaMkgte%2FZDD41tLABjqkAc%2Bc7kwmLDn8zkhkCCIVn9cCVM%2Fr0xPi%2F%2Bs0qtvzJcj6VOz5E19VqyZhRmGXtQLJUwCPGR5ntz8xJxQQP2yF4aYVxDc3t7IJqvm1FTEWcOrAj%2F87z2vCv3oXDCofFCyUiCMpaW%2FNN%2BeXUlAyg5ooK3NNr%2BkpUhK7zbcLS12g4q6QnO8K%2F%2Btcr4kdmBPF1ankcKpIvW0Ly5n9NG4YpAsgkeZywN2r&X-Amz-Signature=aa7002aae01bbfa9fd92337f37061cba9f52684812d87abb9399de812f9d7275&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53CPK66%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2F4Ms9PnM7qKFbEL2QAZWCZWv1EWml2Etj5miVQEWqvwIhAMENNEydsX50k5hDstvEP8JFF5gGDRm70IS5mqANhkGbKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGINjclUYBQH3cj0q3AMGYcYiIboBopU66ykcKOQxScXQtfYECFUy4anBZRSHOJKR1p%2FJJKVltuarRZiZsagjYwJv4BQB5dz%2FG5RMRkzhVmRxmyfQxTHC%2FGmuwD%2FNDfE%2Buz4mffho5Qn3kmD04mimA0HNReRabmNzOa0R6JXiPr%2Br01egnSEleOlr25xWeGwa%2FPKPP%2BTjnyvJ0laWqtPgODzn0SsX0LPihxlaqWYshzKFdieHI3Ak5LfJ17sq3o0%2BfhsZZL%2BkC3elEEu%2B9MSIsEUy%2FU%2FAXKFrIosqCTfAyVAZQBuRC%2Bz21UbFtBUlZ00ZcnjQv6ixedSbM2xdoNVW%2BU4a3xm6jcKqP1FuPRDws6JMysLwMmexc7Kyppx8yFx%2B5DT4bb4a%2BoEtOPWcssbNlo%2Fwcl3NUvV5NtkzhewLU4elnx3KdKRKR9nKO2B8%2FOm3P8MZkypVr35r%2FzifzHAPvhcOsCEBiAmHhMf3Ov%2BT9BhADsiWsk%2Fyub2LW4GSVhVVFqH%2FMpdAz%2FiwsFBgS9FjylWE5suxjsEeBOdKbp3NjetKo09yavTjdSY1m33w9jQY6SGqtUv0kz579rlLnBcWE%2BbFgh2sHZwWrRvqLa67F5alL9h7LSZPnWy4wQZFWpDcRopAZaMkgte%2FZDD41tLABjqkAc%2Bc7kwmLDn8zkhkCCIVn9cCVM%2Fr0xPi%2F%2Bs0qtvzJcj6VOz5E19VqyZhRmGXtQLJUwCPGR5ntz8xJxQQP2yF4aYVxDc3t7IJqvm1FTEWcOrAj%2F87z2vCv3oXDCofFCyUiCMpaW%2FNN%2BeXUlAyg5ooK3NNr%2BkpUhK7zbcLS12g4q6QnO8K%2F%2Btcr4kdmBPF1ankcKpIvW0Ly5n9NG4YpAsgkeZywN2r&X-Amz-Signature=0036e02303b884ce1d56384e952cc3f3d10685f5a80adcd3af9f86ff6a335c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
