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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCW4VWHU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS5ELZUJqAadnkrrTomCh9UfmXcuuiY1y%2BFG6kqOiucAiAdj9m6aCc%2F5nQ6HEvaLwnTl4MlDYttB60R7Hj8WrIKziqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmK7jg0NmWmsUrd8aKtwDHKa4LkTF2O1AtU4K3E0LsePgbe5SVF4lTdkFBJRlAlcolGnWXYPi6YuMhcne%2F9vL53XHnZgKaC17kCsSaFp84v6JurijzDOUgCy%2FyKYuQ6VI0Fo9zwo5JmDID8%2FqIbURL9u7j3fK6YEndclKdIXl4Jl%2FKQ9oPyGVa0Fp9DupDl0%2Fn0Z9A4aNW99EQpXqx6ImzFq9w5SS81I59PXLT%2FXmv9Vjx0St0A3Tsbi1P1j8fcOEl66K1iVtjGNlcoS1HbPtxHxulJTOYHlfnpmK04La5Jy9Sbhx%2BuBGBksR6lT9iDx%2B1FYmEHTZL7mUeBJvWVw2tgTLuzjev9CFv47GQ37NVr7UMUzEJdggeqxtlfYG%2Fv6WqI6fSxN68C9Pe8Jmtyq%2BLs7dWnRa5RGNnLxvDCSXlAbYczCN1ASg9gqo2c3QcQBvjyJbBKcQ%2FO0Rnlg1gp5tXzpByQEVzyU18st0LGeGnessnuiDtlSs4uRvf5e0yTR3PElFNtpsD4JEpSL2k2mO6KfCROfU6hJO2cPWEekxm2%2FmUDKYI5ln8pgVrY3LDUbj52P1C14L1jJeOvgnPb%2B%2FZSR0tFkHdLlzRGs5zqPniTvJALJAgq2X%2B1gIn2%2B6SgKbf8yA4hNOwc7sbd4w4pmdvgY6pgGvp8ObNpBFHWd3LZSwTxvJAvpSP0AZxiN3qOvPfnA%2FnUXZEFu%2BLvBSRxycI10ImDWnWsfXQztC35LfIJQC45itigDrNubIHZDS13UOC%2FlMBV0jPS1MSF0LYfZfXpM85RZUZhGBPmZa8XTLSGCr0D92D5TZqKCpkL8gzwHxXQ3CUDhu7v%2B7a14URQ5fqTH245zOuK9%2BhYmQWvFgbMfTCb32EksV72x7&X-Amz-Signature=d7db3f3e53650495556d094a80f389a7254ae5ce8ade53185c52be14ec4a39e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCW4VWHU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS5ELZUJqAadnkrrTomCh9UfmXcuuiY1y%2BFG6kqOiucAiAdj9m6aCc%2F5nQ6HEvaLwnTl4MlDYttB60R7Hj8WrIKziqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmK7jg0NmWmsUrd8aKtwDHKa4LkTF2O1AtU4K3E0LsePgbe5SVF4lTdkFBJRlAlcolGnWXYPi6YuMhcne%2F9vL53XHnZgKaC17kCsSaFp84v6JurijzDOUgCy%2FyKYuQ6VI0Fo9zwo5JmDID8%2FqIbURL9u7j3fK6YEndclKdIXl4Jl%2FKQ9oPyGVa0Fp9DupDl0%2Fn0Z9A4aNW99EQpXqx6ImzFq9w5SS81I59PXLT%2FXmv9Vjx0St0A3Tsbi1P1j8fcOEl66K1iVtjGNlcoS1HbPtxHxulJTOYHlfnpmK04La5Jy9Sbhx%2BuBGBksR6lT9iDx%2B1FYmEHTZL7mUeBJvWVw2tgTLuzjev9CFv47GQ37NVr7UMUzEJdggeqxtlfYG%2Fv6WqI6fSxN68C9Pe8Jmtyq%2BLs7dWnRa5RGNnLxvDCSXlAbYczCN1ASg9gqo2c3QcQBvjyJbBKcQ%2FO0Rnlg1gp5tXzpByQEVzyU18st0LGeGnessnuiDtlSs4uRvf5e0yTR3PElFNtpsD4JEpSL2k2mO6KfCROfU6hJO2cPWEekxm2%2FmUDKYI5ln8pgVrY3LDUbj52P1C14L1jJeOvgnPb%2B%2FZSR0tFkHdLlzRGs5zqPniTvJALJAgq2X%2B1gIn2%2B6SgKbf8yA4hNOwc7sbd4w4pmdvgY6pgGvp8ObNpBFHWd3LZSwTxvJAvpSP0AZxiN3qOvPfnA%2FnUXZEFu%2BLvBSRxycI10ImDWnWsfXQztC35LfIJQC45itigDrNubIHZDS13UOC%2FlMBV0jPS1MSF0LYfZfXpM85RZUZhGBPmZa8XTLSGCr0D92D5TZqKCpkL8gzwHxXQ3CUDhu7v%2B7a14URQ5fqTH245zOuK9%2BhYmQWvFgbMfTCb32EksV72x7&X-Amz-Signature=9f1f04bba6b842597a7c664e33d9c721b7bfa0125cc31af3e561ad00bf6dbc35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
