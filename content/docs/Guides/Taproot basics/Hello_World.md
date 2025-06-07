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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZRWDQO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV0O4ZuqeIvgiJtWmuHxYrfCVpxgGQ4Tmk3UyVACKkpAiAoPX4Gsxpsxew40XenknHneoUvHZ9va0UaB4L%2BmnilWyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsJR27qIaSmno0bXPKtwD9MFWlo8PEWwTAglJzX8so1M9lr8E6zGH7KAVvjb1%2FLm6Gx0wbUReb3bbK%2BkvLASPgKQvG6Uf%2F4xeUzYQbH2cK51NLpw%2B8YeawisKOLg8%2FBk%2BmL0KtMBwqGlN3q2ciw%2FbCtZZ5KPzURRmIG2DxAEokOYgJai363%2Br80J1cbH09FCHK0AHLhDZxXYtsHjtt%2FAAfAB%2FY%2FCxQam7eCPiObCPSuBCXQd1tcq23iSX2sznzBpfmk7oHeOVZNGDK%2FRmdz35y4Fv7nQ31l6xeIpD46j0PKSmS0jrsUMr7Aj4I%2FqvK0gzkXtry9ym8zNzthDXbHaIsMHJdB2KM%2BIwZE8oEsbOvAT0l8XQdSg%2BQdxLs5FSWYKzNYQttIdNSnCLAETIeSEIQydFizmVlWytBcccUoe3O5iXGWJjac%2Bhq86yoP4EEUDcqrH%2BozCrClGsdaYrVMM%2FRk58m3yAkg9q1xref4jMTV7rTk1%2FuJ7ykuLfwxKO2qv33%2BWmD9YgIa%2FQfKMsLq6U1l6XVs0HBr4fXBga5JKqmNJPgHak7GbOLkn37kGqNfoYG7MlDavzZwx0iIk5NJRUo%2BBhNP0UeDz7GBf0pQ6plOSSJeO6aw03yOmeBw6iCWHkOuD%2BdnpFCU9CoZMwzZWSwgY6pgGBJeahu1YaiOkL8sxX4SxAVIQL7oB4NHjPwR9D5QCcj59IDwSeQe3mufIqrHNGk6vR9AVDdFSfQwHgm7KsVDdhy%2F4EqLwVDvWZsWGymqkzTFxecdDNgqnBMlWA41UJbdrrRJAQbXGdiII1Pd9GOsZhvcgr2bltzDUjBjKbfy0jNdIxTklxNTY4MnE6US5CGNrfP%2Bwi79bBurYFxMGYVoh0kx1klD0W&X-Amz-Signature=05b7042ae40adb9a6050dd232d1e916aac910d86801ace5922b30f28bda567f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZRWDQO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV0O4ZuqeIvgiJtWmuHxYrfCVpxgGQ4Tmk3UyVACKkpAiAoPX4Gsxpsxew40XenknHneoUvHZ9va0UaB4L%2BmnilWyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsJR27qIaSmno0bXPKtwD9MFWlo8PEWwTAglJzX8so1M9lr8E6zGH7KAVvjb1%2FLm6Gx0wbUReb3bbK%2BkvLASPgKQvG6Uf%2F4xeUzYQbH2cK51NLpw%2B8YeawisKOLg8%2FBk%2BmL0KtMBwqGlN3q2ciw%2FbCtZZ5KPzURRmIG2DxAEokOYgJai363%2Br80J1cbH09FCHK0AHLhDZxXYtsHjtt%2FAAfAB%2FY%2FCxQam7eCPiObCPSuBCXQd1tcq23iSX2sznzBpfmk7oHeOVZNGDK%2FRmdz35y4Fv7nQ31l6xeIpD46j0PKSmS0jrsUMr7Aj4I%2FqvK0gzkXtry9ym8zNzthDXbHaIsMHJdB2KM%2BIwZE8oEsbOvAT0l8XQdSg%2BQdxLs5FSWYKzNYQttIdNSnCLAETIeSEIQydFizmVlWytBcccUoe3O5iXGWJjac%2Bhq86yoP4EEUDcqrH%2BozCrClGsdaYrVMM%2FRk58m3yAkg9q1xref4jMTV7rTk1%2FuJ7ykuLfwxKO2qv33%2BWmD9YgIa%2FQfKMsLq6U1l6XVs0HBr4fXBga5JKqmNJPgHak7GbOLkn37kGqNfoYG7MlDavzZwx0iIk5NJRUo%2BBhNP0UeDz7GBf0pQ6plOSSJeO6aw03yOmeBw6iCWHkOuD%2BdnpFCU9CoZMwzZWSwgY6pgGBJeahu1YaiOkL8sxX4SxAVIQL7oB4NHjPwR9D5QCcj59IDwSeQe3mufIqrHNGk6vR9AVDdFSfQwHgm7KsVDdhy%2F4EqLwVDvWZsWGymqkzTFxecdDNgqnBMlWA41UJbdrrRJAQbXGdiII1Pd9GOsZhvcgr2bltzDUjBjKbfy0jNdIxTklxNTY4MnE6US5CGNrfP%2Bwi79bBurYFxMGYVoh0kx1klD0W&X-Amz-Signature=9f08177eda469f3dbea3ce67c503ef3cd8e1e8cce409bfa5b50288df13b09f44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
