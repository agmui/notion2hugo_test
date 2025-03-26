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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTXNQJV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDojUVIGpSGjN98EaYPgpGB8PE9QdTMfCTGAiEPoh2iJAiA04TqtrYUaPKPS9RjJLXyclhK4uwkw6WVBBc6ppk144yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtFeOXfbZ2m3Zh1BvKtwDvUn4Y6F%2FU63X1cnKkZ%2BMJtN%2FvpxoBK0zrjY53n6r9jHJXjzsJXLSrfXjmIdLAUG9YEb4M0gNEAoeOv9yLYS8Hf6zEd2PZ7f8TMvll2L4JwOjMBTUc62wH9d9j6J1hzIZOWWLUVigWsRQDjvCmoE9mVDMjwaCH4ZPclonOr2SAe17p2Oa1Vuzr6EXrM%2Bvx7n5oo%2FT8oQZ4D1wcNo0jlw2lG4TlvTQ42lBgMmZwaxnE0XrllSo10JArkkIc9yTNSdEpY5v8Le5KvwS1eGpgW7g1QOBDXi3HaNsO6k8W07UsetIP7E6G5s7mPZNRRekTagcKZibT3Yvu8MyynGoXYQzgFCpRZH0sIMTXohFFZHrVLJ0WTqlMKz2YhsfQw3sEnuv%2Be%2FHBmgO57mpO33f5lYKXSjzaWTyd%2BSKmev%2BwApKCWFOYzzFkdSkdN3%2B%2BzA9mLdqgNZBYC9NEK8Wll%2Bk7YTCDBj9%2F%2BR%2FHG9BDDqNzcHA0x8KfLrTiFIzq%2Ftj6o6jd%2Bv0jcOhmpxSU%2F16B7%2Bxtpq2%2B%2Bz9O5bYaIbaK7T4vSnAIpVQmqOZ%2FwJ2Wfw6c%2FzUVrkPbfv17gArbYeeKtAnLSMNV7cNQq437%2FIwlbZgCFOLgm9njVg%2BNID0RQglu3kwsdeQvwY6pgHk2BQ2y8bQEOjGF8JwvKxTW5gDr5oY%2B5Cm9PEqZAH81rnMgX5jR%2FM24n9HU96wMDqqc%2Bf5MIaV0OjW12OBS6b1pR2a5tt7YdtggwP14036BCLAXANDcVQftHX8L73MeaxAtiw5xLjIrKCGk8Wcz3DatEfA1C%2F6orD%2BXu%2BSnjzTWOjDKg5G8x1f9ko7BoFiauMikbV%2BNCJHsIItTfgRsPFkqUAlDC%2FI&X-Amz-Signature=c4943a3a97e6b9deefc0fa55a60ebc0e1b383deeb437483abe8d403ff636f595&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTXNQJV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDojUVIGpSGjN98EaYPgpGB8PE9QdTMfCTGAiEPoh2iJAiA04TqtrYUaPKPS9RjJLXyclhK4uwkw6WVBBc6ppk144yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtFeOXfbZ2m3Zh1BvKtwDvUn4Y6F%2FU63X1cnKkZ%2BMJtN%2FvpxoBK0zrjY53n6r9jHJXjzsJXLSrfXjmIdLAUG9YEb4M0gNEAoeOv9yLYS8Hf6zEd2PZ7f8TMvll2L4JwOjMBTUc62wH9d9j6J1hzIZOWWLUVigWsRQDjvCmoE9mVDMjwaCH4ZPclonOr2SAe17p2Oa1Vuzr6EXrM%2Bvx7n5oo%2FT8oQZ4D1wcNo0jlw2lG4TlvTQ42lBgMmZwaxnE0XrllSo10JArkkIc9yTNSdEpY5v8Le5KvwS1eGpgW7g1QOBDXi3HaNsO6k8W07UsetIP7E6G5s7mPZNRRekTagcKZibT3Yvu8MyynGoXYQzgFCpRZH0sIMTXohFFZHrVLJ0WTqlMKz2YhsfQw3sEnuv%2Be%2FHBmgO57mpO33f5lYKXSjzaWTyd%2BSKmev%2BwApKCWFOYzzFkdSkdN3%2B%2BzA9mLdqgNZBYC9NEK8Wll%2Bk7YTCDBj9%2F%2BR%2FHG9BDDqNzcHA0x8KfLrTiFIzq%2Ftj6o6jd%2Bv0jcOhmpxSU%2F16B7%2Bxtpq2%2B%2Bz9O5bYaIbaK7T4vSnAIpVQmqOZ%2FwJ2Wfw6c%2FzUVrkPbfv17gArbYeeKtAnLSMNV7cNQq437%2FIwlbZgCFOLgm9njVg%2BNID0RQglu3kwsdeQvwY6pgHk2BQ2y8bQEOjGF8JwvKxTW5gDr5oY%2B5Cm9PEqZAH81rnMgX5jR%2FM24n9HU96wMDqqc%2Bf5MIaV0OjW12OBS6b1pR2a5tt7YdtggwP14036BCLAXANDcVQftHX8L73MeaxAtiw5xLjIrKCGk8Wcz3DatEfA1C%2F6orD%2BXu%2BSnjzTWOjDKg5G8x1f9ko7BoFiauMikbV%2BNCJHsIItTfgRsPFkqUAlDC%2FI&X-Amz-Signature=81061c1c96a9f278433ae5fbfb219e16486caa8526436cc47217699c55ac95df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
