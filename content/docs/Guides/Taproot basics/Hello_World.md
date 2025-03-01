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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQGISOZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAffiV0hJOWEsjqFWjOyi3sDuc5F%2Fyp%2BAfMw8Ixw14gIAiEAgueNDbAXX57ou%2F5PH729AEaS6PxSfCnatdoHZG422T0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2B1NQUFzq0pK3GJCrcA1WT6hVlJtZBPunOWqDnLsYI8xwMH3m5%2Bo9CNQdYlZjTxXDtqqXMYR%2BYGtPT5DRCtlknSXaiz2F6fPLR8dH8RIX%2FOBuD5ZfN0XzmPSLBlAbejyAsOEjDULdDT28wuYtoax5gT9zY9zyioBy284djSc2YJBo1mB%2Flhv7zq0IpgY6wn3Iamcnp%2FhSydBrPmqAlKzBeSD1ILXJVOk38%2BhGMF5xYym93q4NZ1blpfMpoiJmW5LASJIUWdO2LtqHLLaWWCGoQW3a5Dl8F8TZpWDFW3XdNMyetzTDVf%2Fr8OvJA%2BhBOkbQzsoUGvfTz9nCtnLg0MgysLH6g7O5p2b72khNPWC%2FS4mGY5gAvppp%2Fx1x3dH4xGTQFJSmy%2FKHapSAqkpkkFKTRGBIjnoMg7C0yOWrXyQDuGaaxbTzvG2EwMEv6V%2FGz2ExBVVf2VmeAw%2FN7gAo3G68DAVH3k2%2Bn3m2Tm7vpJvI6f1StYsniQtsmfUAsdvLNjeHe4KlTqnp4SGgYC%2BmTk4%2FPOWVTWLDhdTtmojbUVA2LskUhuaOmR7Sf%2BvXYfiqRGbHA%2BOzkd2gAUevSQZVbQ2nmG4ZwZmvWVncAEzx1Ljk0hADrxbq0%2FhmDWLATjbFGi6ORQ8vFn7Z2C3v0MKmVjL4GOqUBoqOnMQ5nzRm9Z2bJtN4h8ZnkC6jvzEO%2BGzc6iXv8MuaC9M1uaS%2FcqCoxqQnfS%2Fna3X5q7ksDnRaqo%2BylxxlpNYf0HA3UqUsR5zh%2B%2BVsICWcIoGO1AunGblOvtaIyNfk84up1ny7TuE0Z9Stit1TEoSGo2PhLOihHcY%2BzobCzwJ6noI9ESydzOMHpH%2B6N3r01vx%2FY127aokPmRzS1mL6xYxnZkeHU&X-Amz-Signature=cd33b29d6a8a27234a2705dddd975bad11040766d4c085b460da153df771ab45&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQGISOZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAffiV0hJOWEsjqFWjOyi3sDuc5F%2Fyp%2BAfMw8Ixw14gIAiEAgueNDbAXX57ou%2F5PH729AEaS6PxSfCnatdoHZG422T0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2B1NQUFzq0pK3GJCrcA1WT6hVlJtZBPunOWqDnLsYI8xwMH3m5%2Bo9CNQdYlZjTxXDtqqXMYR%2BYGtPT5DRCtlknSXaiz2F6fPLR8dH8RIX%2FOBuD5ZfN0XzmPSLBlAbejyAsOEjDULdDT28wuYtoax5gT9zY9zyioBy284djSc2YJBo1mB%2Flhv7zq0IpgY6wn3Iamcnp%2FhSydBrPmqAlKzBeSD1ILXJVOk38%2BhGMF5xYym93q4NZ1blpfMpoiJmW5LASJIUWdO2LtqHLLaWWCGoQW3a5Dl8F8TZpWDFW3XdNMyetzTDVf%2Fr8OvJA%2BhBOkbQzsoUGvfTz9nCtnLg0MgysLH6g7O5p2b72khNPWC%2FS4mGY5gAvppp%2Fx1x3dH4xGTQFJSmy%2FKHapSAqkpkkFKTRGBIjnoMg7C0yOWrXyQDuGaaxbTzvG2EwMEv6V%2FGz2ExBVVf2VmeAw%2FN7gAo3G68DAVH3k2%2Bn3m2Tm7vpJvI6f1StYsniQtsmfUAsdvLNjeHe4KlTqnp4SGgYC%2BmTk4%2FPOWVTWLDhdTtmojbUVA2LskUhuaOmR7Sf%2BvXYfiqRGbHA%2BOzkd2gAUevSQZVbQ2nmG4ZwZmvWVncAEzx1Ljk0hADrxbq0%2FhmDWLATjbFGi6ORQ8vFn7Z2C3v0MKmVjL4GOqUBoqOnMQ5nzRm9Z2bJtN4h8ZnkC6jvzEO%2BGzc6iXv8MuaC9M1uaS%2FcqCoxqQnfS%2Fna3X5q7ksDnRaqo%2BylxxlpNYf0HA3UqUsR5zh%2B%2BVsICWcIoGO1AunGblOvtaIyNfk84up1ny7TuE0Z9Stit1TEoSGo2PhLOihHcY%2BzobCzwJ6noI9ESydzOMHpH%2B6N3r01vx%2FY127aokPmRzS1mL6xYxnZkeHU&X-Amz-Signature=c088c22617b9ffa74e596be6b3211d788945e129803dcdab8bf1b793df889c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
