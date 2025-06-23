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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FKMDDD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCxV9GJ2euG0YAbolmsBayiFiR%2FT25fcupZG4c%2BnGvggIgJHE7Z3UUMrEgI1MTx3%2B6yhOHOCe4FYdBS9h6Gvttx%2BkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlcO8mk54FJPa8PYircA2vzI86yuUOQMSOas6EnuogaQLCAOhgMS7ehkD9DmYb5BPD3rrHxoT%2FFczPcj2MT7T7Rm8Pp0%2FepVst5K6KZmheFr8TKTgWg6YPE%2BH2eWyQGIaXMvgaSbhC7v0Ad2aC1VzDBZ9HXsSF8auLsPorhFR7LRS9sszNohat57TvASG8g0s8ZJV9D7JZTgbe3HnLT4me0R4Zp5Lt9nGElmIdwbUpErdgjRd%2BpF2eOpUhdMWP%2FCBC16IjjMUeuXOcDY79q5T25Gw6rudxqMMztQK7Eti1A9hdnUg2O6S5zP1eTTccXaubuA3DgZN0j7kL7mZQrVe6LymyomZn977sq%2FE5vnWQFszIUTQnQdkHl1DfUDkTY8%2FlYWFf6mbjLqxSjQIaRcJm7Z%2Br7hMZtj4E1LWyGN7f33Yn%2Bqlp%2BKjD9iWO%2BBjxoiasc1WS1R3o5Mef2E0WT7S8jVY%2Fy5UhdhyVaxozbp1hxLv9j89k3%2FxKEjP18WaaaTMEv46C6OwMzzR88TywM6FJto58LwNySjbzVI7G9gNYVl40ZCsy0PWwYq7bjsBeudk1PewCyyrMNrcp7h35PPAFhGD%2Bp3p7czgypdBGEA8wDT33c%2Fvq9ejCtBSyXAJkJ48VG9LwEw8T%2BQMdBMPWn4sIGOqUBlnhJpqWg3%2BWzRiFaWMAOvQFK1Jq4jjWfWw5MDG0FlToCjJ9tbTxIBBwvdYwTnOnLz%2BaT6tCIgz7uBTb66gdyA9YntB5aFzvXPTVobmpcCxtH7HGDA2WH%2BoI4ru%2FwgXL85jA3lY18dkdAbnZDh2AB4gloeG%2BDReqMoCnGrb8QFO%2FLkfB3OqnaiRh6vRqn58M%2Flw8E%2BeFmatBxzBsCVCnjvOjhHryQ&X-Amz-Signature=af3bd307b4273a85d9e6ac5e13c62c0d2484fe94e9928fd55e9edd0a92e49c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FKMDDD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCxV9GJ2euG0YAbolmsBayiFiR%2FT25fcupZG4c%2BnGvggIgJHE7Z3UUMrEgI1MTx3%2B6yhOHOCe4FYdBS9h6Gvttx%2BkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlcO8mk54FJPa8PYircA2vzI86yuUOQMSOas6EnuogaQLCAOhgMS7ehkD9DmYb5BPD3rrHxoT%2FFczPcj2MT7T7Rm8Pp0%2FepVst5K6KZmheFr8TKTgWg6YPE%2BH2eWyQGIaXMvgaSbhC7v0Ad2aC1VzDBZ9HXsSF8auLsPorhFR7LRS9sszNohat57TvASG8g0s8ZJV9D7JZTgbe3HnLT4me0R4Zp5Lt9nGElmIdwbUpErdgjRd%2BpF2eOpUhdMWP%2FCBC16IjjMUeuXOcDY79q5T25Gw6rudxqMMztQK7Eti1A9hdnUg2O6S5zP1eTTccXaubuA3DgZN0j7kL7mZQrVe6LymyomZn977sq%2FE5vnWQFszIUTQnQdkHl1DfUDkTY8%2FlYWFf6mbjLqxSjQIaRcJm7Z%2Br7hMZtj4E1LWyGN7f33Yn%2Bqlp%2BKjD9iWO%2BBjxoiasc1WS1R3o5Mef2E0WT7S8jVY%2Fy5UhdhyVaxozbp1hxLv9j89k3%2FxKEjP18WaaaTMEv46C6OwMzzR88TywM6FJto58LwNySjbzVI7G9gNYVl40ZCsy0PWwYq7bjsBeudk1PewCyyrMNrcp7h35PPAFhGD%2Bp3p7czgypdBGEA8wDT33c%2Fvq9ejCtBSyXAJkJ48VG9LwEw8T%2BQMdBMPWn4sIGOqUBlnhJpqWg3%2BWzRiFaWMAOvQFK1Jq4jjWfWw5MDG0FlToCjJ9tbTxIBBwvdYwTnOnLz%2BaT6tCIgz7uBTb66gdyA9YntB5aFzvXPTVobmpcCxtH7HGDA2WH%2BoI4ru%2FwgXL85jA3lY18dkdAbnZDh2AB4gloeG%2BDReqMoCnGrb8QFO%2FLkfB3OqnaiRh6vRqn58M%2Flw8E%2BeFmatBxzBsCVCnjvOjhHryQ&X-Amz-Signature=6e907c288d522007bc8fba3e7b35926a50b50cba5a0eaffd9a232f073542f6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
