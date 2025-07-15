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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ22OBWI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFAHIuINRIp1SS51FpDrWg0%2Fesigl0XB9C10QEXqpNM7AiEAxVqOQ4qVM4a3gxfjFqtbbWg8SDbJkOpkncrMPMMijhcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHbVx8hPcIRlws48WSrcA8k9Bykz%2B1mQImdQ273YThznuN2oXL3sIJvik0cNhFDvTgfSvxqCkyfYX2lzWLOzNwiudP0jnZbVy7wqwJ9cLQXz0TSYqPUXqd4PMvc5g%2FZ8DswlDPuzyhah%2Foffr%2BMbwzNbZXLSOBLYOaKKm67MJ326DebNbGp3DVMFT%2Fwk6PzRaZuP61ash2Ob01Ftc8vpH6p0MC6OG4taguYQPTBX6zWxo2FCJ5ovgyXS0s2Yk%2B3h5i1bxjz3lGrDCrGRUbNj9YCi9ogr1pMZnCoZSSXEtm4IjqNLCkTUiVPUu7mfaB%2FneSwdeOnlYVwUM%2BOsvlVu7%2BEyWwCLfF9aMINuEesgcQ5WM1lglyADjk5G0BFB7iRBjKbk8kWBRPcM%2FEhmihEGKV2WaBwctOscZTGhWPH5Lrv2Bqnb6ImxzMnNABuwAI31M42ZzmYnOUnXMy%2BN9UZ1HpTjcsCTW9gnLCeQDTlbWzvgIzaJkXBirqFX2IPJwdf4Kg5VT8DQ3PnIpgmvABx1ySUfIzXhx%2BOqvvjwRt%2B1g2vTWbdj%2BFkyUwO7TcSBOl8tPp2dfHMbhzdyH7hE5GMjxdALr%2Fa04FsLXk4itj%2BiJ5OvNvVo62zNj29F7y9WazXFlLUSVPeEAKCHEpt0ML6k1sMGOqUBCWz0%2Fv2MRElo%2FcmVHWei8gC2%2FDiGsoQZOYHerA2ygXT2bf5zdQdhu5QeTajxbTULTdcIUo8lKTYwifMffDMPLLlFEvUIJLfZlcceFAg33D1pwveUfm3RNgawu0l1r%2FD4ZsSMOBx9DCTepTVp6xQBlfM53PpFSq353QaRsQAGj0qJMSajsnxrvHOMMlS4%2BoAyuvuvODvbSPfD4uqAroudQghWaJ7o&X-Amz-Signature=2eddd8b38c6ea1ad8cbb57cca2c1e9f0fc11b8fa71a8dd25136f74fc466fa64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ22OBWI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFAHIuINRIp1SS51FpDrWg0%2Fesigl0XB9C10QEXqpNM7AiEAxVqOQ4qVM4a3gxfjFqtbbWg8SDbJkOpkncrMPMMijhcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHbVx8hPcIRlws48WSrcA8k9Bykz%2B1mQImdQ273YThznuN2oXL3sIJvik0cNhFDvTgfSvxqCkyfYX2lzWLOzNwiudP0jnZbVy7wqwJ9cLQXz0TSYqPUXqd4PMvc5g%2FZ8DswlDPuzyhah%2Foffr%2BMbwzNbZXLSOBLYOaKKm67MJ326DebNbGp3DVMFT%2Fwk6PzRaZuP61ash2Ob01Ftc8vpH6p0MC6OG4taguYQPTBX6zWxo2FCJ5ovgyXS0s2Yk%2B3h5i1bxjz3lGrDCrGRUbNj9YCi9ogr1pMZnCoZSSXEtm4IjqNLCkTUiVPUu7mfaB%2FneSwdeOnlYVwUM%2BOsvlVu7%2BEyWwCLfF9aMINuEesgcQ5WM1lglyADjk5G0BFB7iRBjKbk8kWBRPcM%2FEhmihEGKV2WaBwctOscZTGhWPH5Lrv2Bqnb6ImxzMnNABuwAI31M42ZzmYnOUnXMy%2BN9UZ1HpTjcsCTW9gnLCeQDTlbWzvgIzaJkXBirqFX2IPJwdf4Kg5VT8DQ3PnIpgmvABx1ySUfIzXhx%2BOqvvjwRt%2B1g2vTWbdj%2BFkyUwO7TcSBOl8tPp2dfHMbhzdyH7hE5GMjxdALr%2Fa04FsLXk4itj%2BiJ5OvNvVo62zNj29F7y9WazXFlLUSVPeEAKCHEpt0ML6k1sMGOqUBCWz0%2Fv2MRElo%2FcmVHWei8gC2%2FDiGsoQZOYHerA2ygXT2bf5zdQdhu5QeTajxbTULTdcIUo8lKTYwifMffDMPLLlFEvUIJLfZlcceFAg33D1pwveUfm3RNgawu0l1r%2FD4ZsSMOBx9DCTepTVp6xQBlfM53PpFSq353QaRsQAGj0qJMSajsnxrvHOMMlS4%2BoAyuvuvODvbSPfD4uqAroudQghWaJ7o&X-Amz-Signature=1bee9bc21c66fef86640f5e2b21e167816bb31a9bbdd6eb20b326882659faca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
