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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6KVYXW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDbyC%2F0CnZjmxEQ4gd6qtIpzjWR%2F0msB2LwYAdLFT%2BT7wIgE%2Fb3d1h5%2BaPzmhlqPnhHDAPfEB08fXCUldMc3LnC3VcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8tRSCu6BnyXAlHsircAyOQ70UnBVrlTzNDMXzYBwj1CIN9pa1fGGeiA1PPVF6n30XI71etvW0Kb5va5%2BbJHQ2Z0Kr6bobLSknZX0yEH%2ByfIYgWiHYEWtkpHdTvIZa0WRsn4kCiSygQpiUXOsmTdHkBU9SKpIC2mC03XbbsTovAi%2BDW9RC8iwUdx%2BaOASIqbz1MiVamy9QaeV%2FAPUUGseH6%2BR3BDXP7WnoaMsK2gN5CkdHo64bb%2B4u5yzAvhzuvPlm239rlQkSRuh50TK8wvdaRAev9RxG8ZbHU%2FONtqs1W08Dfc5qWywAo0VNt2YRhGu3TikUZw8CdT3Hga%2BLaMDfP%2BVYgK6%2FfGX%2FcgwEixq8lDj2gAmi7B98d1WDlIVqnDWwKVINLc4RAWwfP%2B3FjQYvwbAaqtYW%2B8IpAF4Dc%2FMiMrOVYLR97TQI89MgKnI3AeZBRJQqv4%2FkH1Lt8g0f2OCZxjeiiCu5DW%2BF0s4%2FWgwVYQf2WCQGyliv3%2FnZXA88yEg7fvu8uuJvAAwaq4K97c6cFCNwplRXNC79CRrTbw4ouiWllEVanw%2B3czcAU%2Bl61Vb05yaK5J5n8VEoBew3QJS%2Bm6MMb1BFJS7XSlEilebjdhxra7nw2ZSt1CMysrOcXocVp2ETWEaKIgtkRMNevv74GOqUBx8PV07SbBScoB3wBIMvlSdzinN0j26oqikiHMi7KgpAWvnVmknvN3hVPVF6xFvNXIRmG47lhNiaHbZc2DaVbJWctysQ9BxbindNM2f0QA2YV%2BLMig0tKIkqtrzkwTt5OyqpIiCuNQnq3DO5Axb7pl0CswESCL%2Fn%2BDVUldWWBQqVeCWWd4mGJNQozLztpd%2BO1w275BKYF%2BnbTJl0UhaZVNkJsQZI0&X-Amz-Signature=41b66b1ce9e97efdcc67a61164beaceb6f7ad983045414ab351e99b7d363a2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6KVYXW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDbyC%2F0CnZjmxEQ4gd6qtIpzjWR%2F0msB2LwYAdLFT%2BT7wIgE%2Fb3d1h5%2BaPzmhlqPnhHDAPfEB08fXCUldMc3LnC3VcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8tRSCu6BnyXAlHsircAyOQ70UnBVrlTzNDMXzYBwj1CIN9pa1fGGeiA1PPVF6n30XI71etvW0Kb5va5%2BbJHQ2Z0Kr6bobLSknZX0yEH%2ByfIYgWiHYEWtkpHdTvIZa0WRsn4kCiSygQpiUXOsmTdHkBU9SKpIC2mC03XbbsTovAi%2BDW9RC8iwUdx%2BaOASIqbz1MiVamy9QaeV%2FAPUUGseH6%2BR3BDXP7WnoaMsK2gN5CkdHo64bb%2B4u5yzAvhzuvPlm239rlQkSRuh50TK8wvdaRAev9RxG8ZbHU%2FONtqs1W08Dfc5qWywAo0VNt2YRhGu3TikUZw8CdT3Hga%2BLaMDfP%2BVYgK6%2FfGX%2FcgwEixq8lDj2gAmi7B98d1WDlIVqnDWwKVINLc4RAWwfP%2B3FjQYvwbAaqtYW%2B8IpAF4Dc%2FMiMrOVYLR97TQI89MgKnI3AeZBRJQqv4%2FkH1Lt8g0f2OCZxjeiiCu5DW%2BF0s4%2FWgwVYQf2WCQGyliv3%2FnZXA88yEg7fvu8uuJvAAwaq4K97c6cFCNwplRXNC79CRrTbw4ouiWllEVanw%2B3czcAU%2Bl61Vb05yaK5J5n8VEoBew3QJS%2Bm6MMb1BFJS7XSlEilebjdhxra7nw2ZSt1CMysrOcXocVp2ETWEaKIgtkRMNevv74GOqUBx8PV07SbBScoB3wBIMvlSdzinN0j26oqikiHMi7KgpAWvnVmknvN3hVPVF6xFvNXIRmG47lhNiaHbZc2DaVbJWctysQ9BxbindNM2f0QA2YV%2BLMig0tKIkqtrzkwTt5OyqpIiCuNQnq3DO5Axb7pl0CswESCL%2Fn%2BDVUldWWBQqVeCWWd4mGJNQozLztpd%2BO1w275BKYF%2BnbTJl0UhaZVNkJsQZI0&X-Amz-Signature=c2ae51850fc084729024750fa7127c47a4f19595c0dcc7437cff219acf49b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
