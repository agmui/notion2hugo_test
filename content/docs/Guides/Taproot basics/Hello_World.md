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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPBGDSN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfnnQvPP5eXuMqgmYBx10N1%2FH6vSyh1io7ZTd2STI4BAiBHFjFpUoGderOo%2BcyFVFYQCKDucCualgml%2FjQwFet77Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNmoL%2FwHuxHGC81NnKtwD73GIEw4W78LY8NApF1fcdrsh03DB%2BNGWe1FNl%2Bixnr1bN11LEILy5o9Vnr8JWiy6WGHNfUX35TrFVS4Sb0E0ApVdbsPi6fmrw3ZxSqvbWJo60mCXMOOt2ZjCQHiRELGCm0Z%2F5AUViELWIEmF0zcVa%2FEYqh0VK4o4ZeJoVpqkgm8tccvVuBiSCFxM335s8IWiYNQ6O904oqr3MsNBvNkNnXPEY4dsDBMl%2BOPsiQjJSwYQJZLqdlynofRBZX4Vu3ikTdc7cssyaPtIlqA%2FjJ8f%2B3yUD6k0RDzz6%2F6GHH1BkJqGD%2FRjaMc9F4H8A%2FLQNmZvbVdWsPFZwbbqWsF2ErYkassKIpX4dKng7tFqeT4bFxUE2%2Flo5Q6ILCFSeCBVF88Vc8f3RIPTBQzS7NFtjj7i%2B6WUSyjHmJ0oh9i20%2FrCacHdj6A0xL22mNxnvemPY2xRd2O5s1bC9RYZmjHJBZJEtLKTF6Dh8IhdNL%2BjhOZLFV7siVmksZ19x3yGmGW2slQNuvQoOh65J8RQUsZ%2Bt4gZZx2bCbWjP3VaV8SSdPpb%2FrUxUngECEpLNflTItxxJZBmV4QW%2FWR0B5zLwZ%2BjHugdkxr5QdniS7e99TnIY6khpcRL%2Bqjv9n3Ksv77V%2F4whbHmwAY6pgGGKQTiO2rxYN0TC1SPwFlIHCKJTBdK9TuCggg4lQoYTZoIteV5m8PozRkuxV06qj%2B2ZiFsvkniLseVh4YmKiOSm1gqb9XZM6qg869YMBjrcnstRuVyukDBgoMSZIL8VeliE3IK2fH23m3WxAoNZ9jqtcCsb0c3mSypt6pxNV2xukmNN5KVP71yWv4pIv3LcIiBdBH6OY%2Fp%2F6txXEmaTFESnY9hztwf&X-Amz-Signature=5d7448825fc2bad628c81c7994b03b822169712ca4190c6ab576a2b8d3a8450b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPBGDSN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfnnQvPP5eXuMqgmYBx10N1%2FH6vSyh1io7ZTd2STI4BAiBHFjFpUoGderOo%2BcyFVFYQCKDucCualgml%2FjQwFet77Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNmoL%2FwHuxHGC81NnKtwD73GIEw4W78LY8NApF1fcdrsh03DB%2BNGWe1FNl%2Bixnr1bN11LEILy5o9Vnr8JWiy6WGHNfUX35TrFVS4Sb0E0ApVdbsPi6fmrw3ZxSqvbWJo60mCXMOOt2ZjCQHiRELGCm0Z%2F5AUViELWIEmF0zcVa%2FEYqh0VK4o4ZeJoVpqkgm8tccvVuBiSCFxM335s8IWiYNQ6O904oqr3MsNBvNkNnXPEY4dsDBMl%2BOPsiQjJSwYQJZLqdlynofRBZX4Vu3ikTdc7cssyaPtIlqA%2FjJ8f%2B3yUD6k0RDzz6%2F6GHH1BkJqGD%2FRjaMc9F4H8A%2FLQNmZvbVdWsPFZwbbqWsF2ErYkassKIpX4dKng7tFqeT4bFxUE2%2Flo5Q6ILCFSeCBVF88Vc8f3RIPTBQzS7NFtjj7i%2B6WUSyjHmJ0oh9i20%2FrCacHdj6A0xL22mNxnvemPY2xRd2O5s1bC9RYZmjHJBZJEtLKTF6Dh8IhdNL%2BjhOZLFV7siVmksZ19x3yGmGW2slQNuvQoOh65J8RQUsZ%2Bt4gZZx2bCbWjP3VaV8SSdPpb%2FrUxUngECEpLNflTItxxJZBmV4QW%2FWR0B5zLwZ%2BjHugdkxr5QdniS7e99TnIY6khpcRL%2Bqjv9n3Ksv77V%2F4whbHmwAY6pgGGKQTiO2rxYN0TC1SPwFlIHCKJTBdK9TuCggg4lQoYTZoIteV5m8PozRkuxV06qj%2B2ZiFsvkniLseVh4YmKiOSm1gqb9XZM6qg869YMBjrcnstRuVyukDBgoMSZIL8VeliE3IK2fH23m3WxAoNZ9jqtcCsb0c3mSypt6pxNV2xukmNN5KVP71yWv4pIv3LcIiBdBH6OY%2Fp%2F6txXEmaTFESnY9hztwf&X-Amz-Signature=1c51cab41c79ffe2ec80b2c7ccdd935b0fc9dd92c7fe707cdf3575d1326c599b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
