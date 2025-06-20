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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CCTMT5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE54IsJnzKpSIMChUhii1al59oFdPcZ%2BcVOgEABZAX%2F7AiBM4hiQLfgDFIETkOClJeGpCdbLZSjMtfYw%2FE43sdgOBCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsaaq32jgHfmQqITRKtwDWvySjaMVF0bFqJf4HhXrXu%2BPD0oYaNKfU5vfWpj3hnyctqVxUYWjgFdVsS%2F%2FYua7vxnb8lZKF%2B1W5TU6Jn6q00J7lLL67qimsPRV1V2Gs2QvmB%2BYxkN5h2V2ybqSclaMdd7V2IoihFf1KqxeffLJFoUCqw2aY2tSK57wwJKpNJP6PP4dcr6pLkcSdRclbuUKDVtxkv6F%2BRNlTgoIhcN6W%2FhP%2BZwpDho7mhGle1rHpBt%2BaUyN40VK6J9SiMoS%2B3QmDYHeOHGUizYtslwdt3sr8hpxKc1OHjDfGxpuz%2F5Y7AlFletsrMOPYNz5CoN8x6nGNYhkZcOjPWJTu1XJML1H1PLHpWG%2F5gS1ni5x8ZEQzNSkOkamqTsv4QyFCT3%2FwUmoc2e0a4GBj2CLSkj%2FYWfuVh%2B%2FYN%2BU9vn8R8SdX4K1FJ5U5QDgKadzFq9utsIIGNZAysaGwOZCuhWXKeUhfGg0FR5SazQBOE0EhCVYP5rxJDkUs%2FX5I%2BTMx5KiHg%2Fu4982MkwqW4TMco9noRavgFU2exXsEEPIuyt6WhkIw2qItpn5eCdw0zx7pMKZpObk5Adt3ceHj1QodnZ4YBdhQbbGphlxhHy%2FmFyHCB2gINgDee0TsAzxvVpKzIulM24wl%2FHUwgY6pgHVMsaDGL%2BwDjqFh2oUPGTPkf6VswSUb%2Fphtndec%2B3yENnhxt439xL%2BPknZeSfYCVZLSb3361MB%2B%2Br19phhBKPPSEWZowttX41Q6Kuvc6p1NGsr9sttJPfFUvacfS786FJ3vF4UT1d%2FNxK8mfwx6npj1So3ipyr8QVi1puFTsapFL1NYGKLZ442HoKRLGY8F7x33opEfcXs6LJ8otJ0%2B1STmFbMt3bX&X-Amz-Signature=7133d9011fbb67ed23ce5de217e023d08907d1758b65b03e2f01c4e530935de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CCTMT5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE54IsJnzKpSIMChUhii1al59oFdPcZ%2BcVOgEABZAX%2F7AiBM4hiQLfgDFIETkOClJeGpCdbLZSjMtfYw%2FE43sdgOBCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsaaq32jgHfmQqITRKtwDWvySjaMVF0bFqJf4HhXrXu%2BPD0oYaNKfU5vfWpj3hnyctqVxUYWjgFdVsS%2F%2FYua7vxnb8lZKF%2B1W5TU6Jn6q00J7lLL67qimsPRV1V2Gs2QvmB%2BYxkN5h2V2ybqSclaMdd7V2IoihFf1KqxeffLJFoUCqw2aY2tSK57wwJKpNJP6PP4dcr6pLkcSdRclbuUKDVtxkv6F%2BRNlTgoIhcN6W%2FhP%2BZwpDho7mhGle1rHpBt%2BaUyN40VK6J9SiMoS%2B3QmDYHeOHGUizYtslwdt3sr8hpxKc1OHjDfGxpuz%2F5Y7AlFletsrMOPYNz5CoN8x6nGNYhkZcOjPWJTu1XJML1H1PLHpWG%2F5gS1ni5x8ZEQzNSkOkamqTsv4QyFCT3%2FwUmoc2e0a4GBj2CLSkj%2FYWfuVh%2B%2FYN%2BU9vn8R8SdX4K1FJ5U5QDgKadzFq9utsIIGNZAysaGwOZCuhWXKeUhfGg0FR5SazQBOE0EhCVYP5rxJDkUs%2FX5I%2BTMx5KiHg%2Fu4982MkwqW4TMco9noRavgFU2exXsEEPIuyt6WhkIw2qItpn5eCdw0zx7pMKZpObk5Adt3ceHj1QodnZ4YBdhQbbGphlxhHy%2FmFyHCB2gINgDee0TsAzxvVpKzIulM24wl%2FHUwgY6pgHVMsaDGL%2BwDjqFh2oUPGTPkf6VswSUb%2Fphtndec%2B3yENnhxt439xL%2BPknZeSfYCVZLSb3361MB%2B%2Br19phhBKPPSEWZowttX41Q6Kuvc6p1NGsr9sttJPfFUvacfS786FJ3vF4UT1d%2FNxK8mfwx6npj1So3ipyr8QVi1puFTsapFL1NYGKLZ442HoKRLGY8F7x33opEfcXs6LJ8otJ0%2B1STmFbMt3bX&X-Amz-Signature=8ce16b4c2817b8b0faf68fb68f36bd413a4904a26d7b48932a3b6696166faa0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
