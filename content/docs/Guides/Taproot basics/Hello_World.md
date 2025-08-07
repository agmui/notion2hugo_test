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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DQRVW3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDktaoBhscvBQ1k2BHowjzL7wtQNHhT0kzYNTv0mxCm2gIgUXYxUOtvwff%2Fg2uWdS5rgBx183hJLIOMlDN0jM6psu4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRgeOcooOAWApjElSrcA6z0ccTlN3uv7sZzT%2Bx7ufumdbDNP6YkEHWhFxNSsoYNmfg0bdoAuR9%2BeyCm726xN9x5zhK7hEYrBpChSkImhf9fONKcoKSxXdofVy7MLBK8JQ5b9gR74QrUGqOC3nRZKYVsLVm5eeRowdRGluQ5kOTQlv0Nd73C%2BKiNXGyxZnY760Ka0g6QpdUQOeTziiFaTxFu9qmWUs0uXOxGaH%2Fw%2BB82jDeFgAxG6DnBNtRIREJ3QgEz9hB0A9PSqFmNac04mmVllo0WWS2Szf%2FZCWq9b8zYnni1BJuXvrm9hW867OJphrgMovhI2qrFeW%2F2u0Lg5LClKgXpphlow9GZ0Muvr%2BVpSrf025O5GeQp9OTJIhicKSUcf8Hy9yBYvTnpZHswaXO0NYOWzNcqbF3FE8k0H1%2BmFlrthP%2BDEfrdag59qJjofAzbWwy0DXbwDEt6aA5pkn7CXqQInatHbseSW0dmTjA6VhqqJTaoKjmp24kFWdtvcEVVfA4JY50EudTejNk5jICjC%2BQXUJV4jQhjbflpVynCRo8XZHpvC1NCmaPehJv1e9%2FbngFHEJllRcJ%2F9Q9Tuc5BAa%2BhCCqBFGjhJwkLUjimkMmoctMwXzktD6XxzVaiMpUNBtBRR2FvwberMOS00cQGOqUBtjuCvCnVw2dz17vjHBcDPzfVaiSBILFTdtyG5mF63PNQZZbL8343ZeZ4I9LmLm4liGoKOo%2F5Bvo7Zy0LQTGDoC050Nx%2BI3IVlCppfUONemUSIr1hTTF5ZB6hWqnTiBNvCM1galzuHylulq6Jj6GnlMLIPBwnEuov4ZkvSOaDjYHflmTppxmgSgFi9SkeZKOMhM1uY02iyhI9Pw39%2B%2BR%2F3%2Fy7jltA&X-Amz-Signature=4daccc24641af7706f66bdd65ea45676f367e52b0159ffd0ccf8f68e57da29ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DQRVW3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDktaoBhscvBQ1k2BHowjzL7wtQNHhT0kzYNTv0mxCm2gIgUXYxUOtvwff%2Fg2uWdS5rgBx183hJLIOMlDN0jM6psu4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRgeOcooOAWApjElSrcA6z0ccTlN3uv7sZzT%2Bx7ufumdbDNP6YkEHWhFxNSsoYNmfg0bdoAuR9%2BeyCm726xN9x5zhK7hEYrBpChSkImhf9fONKcoKSxXdofVy7MLBK8JQ5b9gR74QrUGqOC3nRZKYVsLVm5eeRowdRGluQ5kOTQlv0Nd73C%2BKiNXGyxZnY760Ka0g6QpdUQOeTziiFaTxFu9qmWUs0uXOxGaH%2Fw%2BB82jDeFgAxG6DnBNtRIREJ3QgEz9hB0A9PSqFmNac04mmVllo0WWS2Szf%2FZCWq9b8zYnni1BJuXvrm9hW867OJphrgMovhI2qrFeW%2F2u0Lg5LClKgXpphlow9GZ0Muvr%2BVpSrf025O5GeQp9OTJIhicKSUcf8Hy9yBYvTnpZHswaXO0NYOWzNcqbF3FE8k0H1%2BmFlrthP%2BDEfrdag59qJjofAzbWwy0DXbwDEt6aA5pkn7CXqQInatHbseSW0dmTjA6VhqqJTaoKjmp24kFWdtvcEVVfA4JY50EudTejNk5jICjC%2BQXUJV4jQhjbflpVynCRo8XZHpvC1NCmaPehJv1e9%2FbngFHEJllRcJ%2F9Q9Tuc5BAa%2BhCCqBFGjhJwkLUjimkMmoctMwXzktD6XxzVaiMpUNBtBRR2FvwberMOS00cQGOqUBtjuCvCnVw2dz17vjHBcDPzfVaiSBILFTdtyG5mF63PNQZZbL8343ZeZ4I9LmLm4liGoKOo%2F5Bvo7Zy0LQTGDoC050Nx%2BI3IVlCppfUONemUSIr1hTTF5ZB6hWqnTiBNvCM1galzuHylulq6Jj6GnlMLIPBwnEuov4ZkvSOaDjYHflmTppxmgSgFi9SkeZKOMhM1uY02iyhI9Pw39%2B%2BR%2F3%2Fy7jltA&X-Amz-Signature=9741175d12f56995525cb0dac9cf2f323e6b44fed3c31b8a02c2e8e49350f6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
