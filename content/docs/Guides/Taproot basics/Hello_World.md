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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTEFC43%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHLgJt4ZyQfK%2FCiu53OZXegWiiptnb%2B9Zpa%2FrrP%2F2AkEAiBGRlTTHexdZIVns%2FS8CSGEbpvYLpTJkvwTAHpsGzapCCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuHD7ZIDYlFzvDv%2BKtwDiJoK5V7skKUy2%2FiK0H30W5yaUSFywj4xmI7kuQE4vUsRpzPOoVoY79DwcaFgAv8N4SPpkJQ9iCHCdOtcgFhZY6t%2F87Qj%2BeAXBRYpqGs4CiRoUSh5%2FYOjkJk1ibWcmaeqlvb6VSZdFTNOEC6avmVyyGYDjQsIpctUShvX1BHCkR801m0MEyeELx0b7IpR5zYxz2sgzK7y%2Bq%2B9XVYJS1BkrUFCXu%2FeJDcKG2doXeg2zM%2Bw72jtW%2Bt4TqDXnP0z1kyNeh0lnh%2FXfkvjwkoy3XRVFieETCIuHnPmAWxcLwbKUyLLxSOJvpq6SJuX3mvvk9%2FkQtpA%2FTaHzpNvHrpWUUtYV0y08xJIfgwtUfjI4TyTpjE1umyVOLT47eZBIX5Wyyask%2FWTehRphrnyzYata9ZEI%2BGKo3M94Wbbxg7Nsz1HxPUFyif6cvH9rA%2Btdasv3bfY5J%2BpJW5GDiOYO9Eig5rGDxIsVFgCUo3FTLjMwDPtt768Slfm5NZ0Dzb5S2twiWNw1ghA5t3INRRLSTW8zdNvacWt8tS6pR%2BJId%2BbFL3g4iKR4OBFD0xkvVNElaQuX2l8YA1RLU2LjPkrhBSp5a7hlfx9I6WfKm%2Bhe96N3XcomTfjfQ4oq6r0WPy%2BTpYwrN6AwQY6pgGSP7zxu%2BflIz%2BxsN0%2BwZzJNTZV5ZFsIuLLQx5Kfv3uMQSvjxwvDJw04uWmMAyHo5KypOCPwnh5zCuE9RIaaYkGHxv2LMFcnqUC04RngZpfQhiw5VaOveDgT0tJEaeYuVXjxopiD4yBWvXmAWjsWZAPoQEBoNO1KkKg1KKBFTuZcKJCcqgKrAsp4%2Fa4wiZ1UziWUH7PTwBtGZXEDtPqkDWi5uDkbkyx&X-Amz-Signature=1bf67092904104c3f451c2a0b54587c26395cc777baf0c7ae6aa7fc100499df1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTEFC43%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHLgJt4ZyQfK%2FCiu53OZXegWiiptnb%2B9Zpa%2FrrP%2F2AkEAiBGRlTTHexdZIVns%2FS8CSGEbpvYLpTJkvwTAHpsGzapCCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuHD7ZIDYlFzvDv%2BKtwDiJoK5V7skKUy2%2FiK0H30W5yaUSFywj4xmI7kuQE4vUsRpzPOoVoY79DwcaFgAv8N4SPpkJQ9iCHCdOtcgFhZY6t%2F87Qj%2BeAXBRYpqGs4CiRoUSh5%2FYOjkJk1ibWcmaeqlvb6VSZdFTNOEC6avmVyyGYDjQsIpctUShvX1BHCkR801m0MEyeELx0b7IpR5zYxz2sgzK7y%2Bq%2B9XVYJS1BkrUFCXu%2FeJDcKG2doXeg2zM%2Bw72jtW%2Bt4TqDXnP0z1kyNeh0lnh%2FXfkvjwkoy3XRVFieETCIuHnPmAWxcLwbKUyLLxSOJvpq6SJuX3mvvk9%2FkQtpA%2FTaHzpNvHrpWUUtYV0y08xJIfgwtUfjI4TyTpjE1umyVOLT47eZBIX5Wyyask%2FWTehRphrnyzYata9ZEI%2BGKo3M94Wbbxg7Nsz1HxPUFyif6cvH9rA%2Btdasv3bfY5J%2BpJW5GDiOYO9Eig5rGDxIsVFgCUo3FTLjMwDPtt768Slfm5NZ0Dzb5S2twiWNw1ghA5t3INRRLSTW8zdNvacWt8tS6pR%2BJId%2BbFL3g4iKR4OBFD0xkvVNElaQuX2l8YA1RLU2LjPkrhBSp5a7hlfx9I6WfKm%2Bhe96N3XcomTfjfQ4oq6r0WPy%2BTpYwrN6AwQY6pgGSP7zxu%2BflIz%2BxsN0%2BwZzJNTZV5ZFsIuLLQx5Kfv3uMQSvjxwvDJw04uWmMAyHo5KypOCPwnh5zCuE9RIaaYkGHxv2LMFcnqUC04RngZpfQhiw5VaOveDgT0tJEaeYuVXjxopiD4yBWvXmAWjsWZAPoQEBoNO1KkKg1KKBFTuZcKJCcqgKrAsp4%2Fa4wiZ1UziWUH7PTwBtGZXEDtPqkDWi5uDkbkyx&X-Amz-Signature=f27b5b5bcfecebc5a16b6de81b3ba7cdb69fa2ca9faa33a30a8f56a58b0b5ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
