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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACMWV7F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkkUvoD7nWwPvspXN30Q%2Fopu2NOvpksGNBNDMYscqPtgIgWji%2Fv1yfEeCLyqU%2FRWE27CdItC8airYqE213V8iuRs0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrJ39GvwjQg%2FQP%2ByrcA61pmLMZC%2BlAKBsCQjAiQoaiBLI5Nxlo899KRIp%2BP3%2B9nXWB4iXnOnsmACYQmIHcyhq6ab1KQNTTnmi%2Bj9atwv3QaBTgimG4vmGlE2D7es97WPOYK1eSEpJf%2BHD7tNjwrH3QD0prLlQnJXAZGh3h0aB1NdKuxmDajLaxawPIO8XyZEbwoDLKsGQ6GkLc8aFUgoZ%2BS9jnISOKIx4jj7xS9Dy0wKxa5LUTatHvV81zzCGPKbCBhvkHBkauAuPvwjI1RBzECeidF%2BgdppRBAUkdM%2F6DW5mKCvKzj2rT5Xb%2FW2PHR%2BQIcccc6U1pSRf8GFMEMMeNP%2F58TLEAOb7I%2FhlPML5nDzQFnUuSZvwcME9Z4wNnfPZiPSNb2WSHVo2GIqU6ENr3KI8E53POUAy1RLkKEVjOfaGKeoX4wIDXjm0cm%2B1xOFVn1lXAad7w8fDDoL1cSi1%2Bi2%2BaUGfYjH2Gl8MAg1nDtSXWizlGTwAMbvsWpi5nn6Rf%2Bmh9HQMTyUd8BTBvJ1QwxYbXlhO%2B3LU5kyfBHxPHM1ZbBAcCqPhNx7b3biQFBKQHrxTXiHzrvL%2Fw2E93K0VXucqigY1rxmJmYCNM6Ln519q6av8cgqNbsD4iqAIfuFiYLKhhiJA4iRSqMPev68MGOqUBMyc3uq%2FBEAJQnAhHFw%2F7hCvqWUrqbvmNLuzvRZ9jPxk28kg4LFmrTWcJQgqy43%2B5E650eKqYICzwkIIjTU3KJhmJt9ADqsy%2FtnGDAkQwd5DiyDg1Q1OdbeMXh8C8KmIDFeBjVTH81kJCShNxBfPJyI5R9vgf68hJEPWhNfr1dH4DIwicf3LUFVzwQUyp%2Fa4K2DLG6dLQYb8DjGiJd5%2BwPl7WfZT%2B&X-Amz-Signature=fce9138fbcc01c1de6f8a46ef3aeb5fbc42a8855e65982a948da6c7efddd7d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACMWV7F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkkUvoD7nWwPvspXN30Q%2Fopu2NOvpksGNBNDMYscqPtgIgWji%2Fv1yfEeCLyqU%2FRWE27CdItC8airYqE213V8iuRs0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrJ39GvwjQg%2FQP%2ByrcA61pmLMZC%2BlAKBsCQjAiQoaiBLI5Nxlo899KRIp%2BP3%2B9nXWB4iXnOnsmACYQmIHcyhq6ab1KQNTTnmi%2Bj9atwv3QaBTgimG4vmGlE2D7es97WPOYK1eSEpJf%2BHD7tNjwrH3QD0prLlQnJXAZGh3h0aB1NdKuxmDajLaxawPIO8XyZEbwoDLKsGQ6GkLc8aFUgoZ%2BS9jnISOKIx4jj7xS9Dy0wKxa5LUTatHvV81zzCGPKbCBhvkHBkauAuPvwjI1RBzECeidF%2BgdppRBAUkdM%2F6DW5mKCvKzj2rT5Xb%2FW2PHR%2BQIcccc6U1pSRf8GFMEMMeNP%2F58TLEAOb7I%2FhlPML5nDzQFnUuSZvwcME9Z4wNnfPZiPSNb2WSHVo2GIqU6ENr3KI8E53POUAy1RLkKEVjOfaGKeoX4wIDXjm0cm%2B1xOFVn1lXAad7w8fDDoL1cSi1%2Bi2%2BaUGfYjH2Gl8MAg1nDtSXWizlGTwAMbvsWpi5nn6Rf%2Bmh9HQMTyUd8BTBvJ1QwxYbXlhO%2B3LU5kyfBHxPHM1ZbBAcCqPhNx7b3biQFBKQHrxTXiHzrvL%2Fw2E93K0VXucqigY1rxmJmYCNM6Ln519q6av8cgqNbsD4iqAIfuFiYLKhhiJA4iRSqMPev68MGOqUBMyc3uq%2FBEAJQnAhHFw%2F7hCvqWUrqbvmNLuzvRZ9jPxk28kg4LFmrTWcJQgqy43%2B5E650eKqYICzwkIIjTU3KJhmJt9ADqsy%2FtnGDAkQwd5DiyDg1Q1OdbeMXh8C8KmIDFeBjVTH81kJCShNxBfPJyI5R9vgf68hJEPWhNfr1dH4DIwicf3LUFVzwQUyp%2Fa4K2DLG6dLQYb8DjGiJd5%2BwPl7WfZT%2B&X-Amz-Signature=d179f7e2d12b8b744ff8d1e070ac4d951ea27ee30b2461deee602a8cb7c6cd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
