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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR323Y4R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDO2O0QMIc%2BHbbGDmjBuBQump7Chsbcv0352LcEZ0gI%2FwIgaf6Mh2r6Bkj1sgxrLS5GgYS0pMtaDC7qmxBlQGgzUJMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDhpk1HLz6Y0%2BGZmSrcA4L9k%2FZpMVWEJkhE7PSZj64HqEFXHaA%2FIULCD%2FUAvGxLrBGmr6hWjqS5nvvEpOS8sUfVCE6i1y%2BEJnX8ob9xua2GD5sBpjkpf4kkTj%2BwHl3LxnQa1VHgpsoQ36ks3TYJqgpaS92JvaC0E6P2Lh6UAovS9sTGOGPVesbsucmHZnMjBIuglS2ggM7FuFjJnRSgZAoBiWnPhdKJci69ff88La55jXZEaQJwbbCiCWSUMcacmOn4TLc9NnGmm5UgVJQmruMz5C%2Fxma5c4KpBOyxPExu6N%2BeJdxH8PVvsYGMGgNuaNUBOyUDwW1AhpfqyZ8SOVrPsDT6VL%2FVAI9eZ0DIz4YmIqb0RqscgYW%2FqtgCAjyEwwnMELp4ewltP6IRhwfxppxtsa%2FMsKceuv72hp7Rn1TT2qoK3yyTeSrFRMRh0%2BkEYEHW7psAMg1ZkLqzgf5hk%2B4iMsdrfjFyJPlv32Wfs2HtSUe7Qj93rmRLOhyxexKHHZqKLtOaUcfVoSXK1ijWquEQexnBio8wBZCzdCtNiRTAZliN5GKtYtrXTrvzXJxK1wTNNQtZ5%2FfjdrUV%2BqkUmctM01S2B2%2FYSNC3peth0Xinw301W9SqPXqXgFZooeeCpP3cKelNdCt8RTU9eMO2g378GOqUBfHsvKxBZFdPP%2BEscnqe98xCnB0j009IQDgNVCSe0osL%2BqjT%2B2KB%2B%2BmOh3sCHRbAGSOoX%2FGmvaOhJaxpAV%2B8MlO%2BHSJZZ3vm%2F858GI9JlGJBBDSJacAgKlk8eqKxWqkkiqqi6gUcXHQLBFITZg3d8fR%2FYhYrsZlvN8aM8fL%2F8xEIe9hbaY4RjhxtiMKRLVEDoVsa2tl%2BN8Pd%2FgW6M2Wc%2FIaGhMWCD&X-Amz-Signature=fa74c8807b5fcaf4c5169360a4cad50d14ecdb4ec13ecab08c54e6a87634f850&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR323Y4R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDO2O0QMIc%2BHbbGDmjBuBQump7Chsbcv0352LcEZ0gI%2FwIgaf6Mh2r6Bkj1sgxrLS5GgYS0pMtaDC7qmxBlQGgzUJMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDhpk1HLz6Y0%2BGZmSrcA4L9k%2FZpMVWEJkhE7PSZj64HqEFXHaA%2FIULCD%2FUAvGxLrBGmr6hWjqS5nvvEpOS8sUfVCE6i1y%2BEJnX8ob9xua2GD5sBpjkpf4kkTj%2BwHl3LxnQa1VHgpsoQ36ks3TYJqgpaS92JvaC0E6P2Lh6UAovS9sTGOGPVesbsucmHZnMjBIuglS2ggM7FuFjJnRSgZAoBiWnPhdKJci69ff88La55jXZEaQJwbbCiCWSUMcacmOn4TLc9NnGmm5UgVJQmruMz5C%2Fxma5c4KpBOyxPExu6N%2BeJdxH8PVvsYGMGgNuaNUBOyUDwW1AhpfqyZ8SOVrPsDT6VL%2FVAI9eZ0DIz4YmIqb0RqscgYW%2FqtgCAjyEwwnMELp4ewltP6IRhwfxppxtsa%2FMsKceuv72hp7Rn1TT2qoK3yyTeSrFRMRh0%2BkEYEHW7psAMg1ZkLqzgf5hk%2B4iMsdrfjFyJPlv32Wfs2HtSUe7Qj93rmRLOhyxexKHHZqKLtOaUcfVoSXK1ijWquEQexnBio8wBZCzdCtNiRTAZliN5GKtYtrXTrvzXJxK1wTNNQtZ5%2FfjdrUV%2BqkUmctM01S2B2%2FYSNC3peth0Xinw301W9SqPXqXgFZooeeCpP3cKelNdCt8RTU9eMO2g378GOqUBfHsvKxBZFdPP%2BEscnqe98xCnB0j009IQDgNVCSe0osL%2BqjT%2B2KB%2B%2BmOh3sCHRbAGSOoX%2FGmvaOhJaxpAV%2B8MlO%2BHSJZZ3vm%2F858GI9JlGJBBDSJacAgKlk8eqKxWqkkiqqi6gUcXHQLBFITZg3d8fR%2FYhYrsZlvN8aM8fL%2F8xEIe9hbaY4RjhxtiMKRLVEDoVsa2tl%2BN8Pd%2FgW6M2Wc%2FIaGhMWCD&X-Amz-Signature=3d6be38bb30ee494acaf528060eea9d860a2917f90c07c1635ca250ccd9209b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
