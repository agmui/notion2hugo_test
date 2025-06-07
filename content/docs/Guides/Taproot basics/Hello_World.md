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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVPN2M2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPB4FhkE9tRJi%2B6wrqDWCwAuWakNPmeatn7A%2FGqWx1TAiAm7R8qVJwkKAOzY9gI6SnIEAsJWaizbM8pqVdk6li6Vyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMvAtYpwLDorQJUEs0KtwDSx7PVC%2FWVdMWsQEkOrJ2bQhQp5SEHhtH0b5kqhKVyyPcVi9ZS3ZXl3bQ2yoPMIJn1nTFK3AItGBDr0zpYMvUPYSbdJ4eLCw4so%2FKh1ZggJznDpxS4%2FF09695PyXtYBpBWyo14VzTZlWzJ00iPJEVvygIANp23KJfssQE8rJmfaTz5MvsQTsW%2FiEzwzylvwu8k70m3WFP0FLOgHqNzhpo4bAXsjZ4zg74bwLyp1xBgotvHZeD0%2BdoYjf%2FnZZVzWFEHZe0H5s51Lrvu%2B6PsGnW67KkfXqKPisiIESytlRZTqiqIN%2BxqE839I91u3jfTq%2BvIwobnn5StqJscFrwgHr4IUAPsqR8XCo8dI8HHSakM9vKEGzDt52b0yCSVjQVnTGbWKv1Po3d7yxudEU0MxG%2Fwt1olaq4HEnjVfuH1%2B%2BCpwvkLf9q%2FBZGi5Z48Ryx21fhzpmKo9mb7h%2BaKgoS0yZhlmpRIMx4xsMF3oytLRyF3wVqngiCJma4P%2BcoRaSPXokCRpWQ92XXQTSy0z7vxl8sWoEcCEDKH8jAl3V8iSI9a9k0n0%2FeXSSSSiXOQ6zoUDAOLU2cm8A0sOnDKDgUIsN3%2F%2FE2HHvqgQqV4q1rPxPDKC%2BfvDeou6nN5psJv7kwu8COwgY6pgFsuSQA2TJwUuCeoA%2BH%2BciEhvzkwVoS%2BHmZlO6z49laXSyoiiVi4SU8R%2FhZxQzMDzLscRYtOD%2BgrqypjVeAr0x%2FaX38VJdwEsz8qYopYSt8pRE1KM%2FUidw28Rz2SkAxsfrPJTb270KNfWudN5Q%2BRjULLoXeGmfkPxyBWGzusrWqW%2FsYxYJhLtU7A43B2KhdovXnHFRKGIYS9cYJ1vEGq4n10Hmv1zaa&X-Amz-Signature=61deaee62101a138b74a9bbd0a9de4b0acb11abe5cc3eb01bf6b6cf3d903d52b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVPN2M2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPB4FhkE9tRJi%2B6wrqDWCwAuWakNPmeatn7A%2FGqWx1TAiAm7R8qVJwkKAOzY9gI6SnIEAsJWaizbM8pqVdk6li6Vyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMvAtYpwLDorQJUEs0KtwDSx7PVC%2FWVdMWsQEkOrJ2bQhQp5SEHhtH0b5kqhKVyyPcVi9ZS3ZXl3bQ2yoPMIJn1nTFK3AItGBDr0zpYMvUPYSbdJ4eLCw4so%2FKh1ZggJznDpxS4%2FF09695PyXtYBpBWyo14VzTZlWzJ00iPJEVvygIANp23KJfssQE8rJmfaTz5MvsQTsW%2FiEzwzylvwu8k70m3WFP0FLOgHqNzhpo4bAXsjZ4zg74bwLyp1xBgotvHZeD0%2BdoYjf%2FnZZVzWFEHZe0H5s51Lrvu%2B6PsGnW67KkfXqKPisiIESytlRZTqiqIN%2BxqE839I91u3jfTq%2BvIwobnn5StqJscFrwgHr4IUAPsqR8XCo8dI8HHSakM9vKEGzDt52b0yCSVjQVnTGbWKv1Po3d7yxudEU0MxG%2Fwt1olaq4HEnjVfuH1%2B%2BCpwvkLf9q%2FBZGi5Z48Ryx21fhzpmKo9mb7h%2BaKgoS0yZhlmpRIMx4xsMF3oytLRyF3wVqngiCJma4P%2BcoRaSPXokCRpWQ92XXQTSy0z7vxl8sWoEcCEDKH8jAl3V8iSI9a9k0n0%2FeXSSSSiXOQ6zoUDAOLU2cm8A0sOnDKDgUIsN3%2F%2FE2HHvqgQqV4q1rPxPDKC%2BfvDeou6nN5psJv7kwu8COwgY6pgFsuSQA2TJwUuCeoA%2BH%2BciEhvzkwVoS%2BHmZlO6z49laXSyoiiVi4SU8R%2FhZxQzMDzLscRYtOD%2BgrqypjVeAr0x%2FaX38VJdwEsz8qYopYSt8pRE1KM%2FUidw28Rz2SkAxsfrPJTb270KNfWudN5Q%2BRjULLoXeGmfkPxyBWGzusrWqW%2FsYxYJhLtU7A43B2KhdovXnHFRKGIYS9cYJ1vEGq4n10Hmv1zaa&X-Amz-Signature=91af933ab201307b5577d1ccce6e375d120dc13f166e44a3680bd68db75973ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
