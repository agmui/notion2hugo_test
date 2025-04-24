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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GUKD3S5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPy9St%2BzC6pLtYQLZYwHZ3%2FV1P8Wns2b3sME7ruaLI0AiAHdW1sNKcT%2FvmeZFBxsL5hVJFLwYqNPdRaGmrGVscxNSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwyKDr7tldjz3ydtQKtwDyBNP3O9kbvnT78KJPhWQ4lw3C8%2BQfa2Z0QiuLtLdrPx1IY7t8Y%2Fc0d6sBmCRP7VMWcMT7MFbZgUhfNK%2Bwa5oep2HN5LhrwfkrNf2inA80%2B81NdDidu8QcBXsoc%2F6ITRLuRVkmuNdPhbYGoUV8abOT83CYgiq2OyEW3l3COMdpspKrDOibesld9AtZJQZzHpxmoFh9lwowWHyxNzG11KwPJWXmu5d05axDeiKJrJ8szqyQIiRKeiG4SRHGE2INdlJZ5nmYO9lySzUlty47uOLTPLT%2F3wcz1w30WxXN5cg6jGL2yCDjJHF%2B3Aj5gEHcA4XLbVI6BAc1qLUyNVn4OjcRIW5Wm1cPWi6EGk7wC3EuD5dadCgN%2BYBrR2LSh%2FyOt%2F2LfCbZH3q4nJaSMFyY7a8GDCfQCmz7ZZSiZiNod1L9EVhG7znQPntUCRH7mRW76SKbYvAj9jWr9t8a6DzjiFStKWllfehbJoA8KJ5KCgp2s0NIiDH5xFf1nBwlCHt1RN5cEbqRC10%2BdfFJnyRQxCc1Qmi25MdngyY12y3hDDHn0ZxP5LZJSYxLvD07XEIkLn1m9ZtW%2Fv8%2FCzptLATXStcHE%2Bni1hB4wN%2FMwh3nYeicCkmSHuJouAiUjPeMBMwyPSqwAY6pgF%2BtlAQuK1J9C%2BkcV53q3M43%2F6Dh8QrKVg%2B99bsrxrwvNGAt70A3VY2%2F47oeYaO8piy9TQ9ix20pLZ45hLoNyywiYZ39nyeQj4KttVWfTtdF2Aj7ToM8ViyH%2F5oaCibKaAUkuw1NwVJq%2B%2By6xsvnggrnhznG3dcv8GP7Wo%2Fm5PZ7s0BZtqQ4tMtNnhRLKlH9DxYoRThaH1Lq6qaAtPHiRfXq2KnjMfl&X-Amz-Signature=d5646607a1fb0a2124febc6e2c5a749769555530543ec36d3ea70d732b301fab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GUKD3S5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPy9St%2BzC6pLtYQLZYwHZ3%2FV1P8Wns2b3sME7ruaLI0AiAHdW1sNKcT%2FvmeZFBxsL5hVJFLwYqNPdRaGmrGVscxNSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwyKDr7tldjz3ydtQKtwDyBNP3O9kbvnT78KJPhWQ4lw3C8%2BQfa2Z0QiuLtLdrPx1IY7t8Y%2Fc0d6sBmCRP7VMWcMT7MFbZgUhfNK%2Bwa5oep2HN5LhrwfkrNf2inA80%2B81NdDidu8QcBXsoc%2F6ITRLuRVkmuNdPhbYGoUV8abOT83CYgiq2OyEW3l3COMdpspKrDOibesld9AtZJQZzHpxmoFh9lwowWHyxNzG11KwPJWXmu5d05axDeiKJrJ8szqyQIiRKeiG4SRHGE2INdlJZ5nmYO9lySzUlty47uOLTPLT%2F3wcz1w30WxXN5cg6jGL2yCDjJHF%2B3Aj5gEHcA4XLbVI6BAc1qLUyNVn4OjcRIW5Wm1cPWi6EGk7wC3EuD5dadCgN%2BYBrR2LSh%2FyOt%2F2LfCbZH3q4nJaSMFyY7a8GDCfQCmz7ZZSiZiNod1L9EVhG7znQPntUCRH7mRW76SKbYvAj9jWr9t8a6DzjiFStKWllfehbJoA8KJ5KCgp2s0NIiDH5xFf1nBwlCHt1RN5cEbqRC10%2BdfFJnyRQxCc1Qmi25MdngyY12y3hDDHn0ZxP5LZJSYxLvD07XEIkLn1m9ZtW%2Fv8%2FCzptLATXStcHE%2Bni1hB4wN%2FMwh3nYeicCkmSHuJouAiUjPeMBMwyPSqwAY6pgF%2BtlAQuK1J9C%2BkcV53q3M43%2F6Dh8QrKVg%2B99bsrxrwvNGAt70A3VY2%2F47oeYaO8piy9TQ9ix20pLZ45hLoNyywiYZ39nyeQj4KttVWfTtdF2Aj7ToM8ViyH%2F5oaCibKaAUkuw1NwVJq%2B%2By6xsvnggrnhznG3dcv8GP7Wo%2Fm5PZ7s0BZtqQ4tMtNnhRLKlH9DxYoRThaH1Lq6qaAtPHiRfXq2KnjMfl&X-Amz-Signature=ae2648467e53a480b7f774b0485a75a47b5f39cf1de16b9fc812976df6dc0257&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
