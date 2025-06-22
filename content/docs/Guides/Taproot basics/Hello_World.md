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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVIFKS2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSHLSG5aqb5v4ZtJrE81La41BU%2B%2Fa%2F0yea%2FsTsTDM6PAiBWx5mjzjQDIFwvx0ZiA59rHFqNOBPruF%2FpR0E68q2ZsyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkeQj%2BYNtje3dvOsCKtwDJh%2FP%2FZGTtpZ0sggwZssjPC7hjH%2FpPBOmxb1eob15AepfgWPGoX3IZKbJKVBuDOHIVCoYSPVv3A49o6iOqHxsRjZiA6gsoGTM3ef3Nvj%2BWBFqCZfQCZG1QKgQtHZQw9ybEFHRjcNTMuLnpOiVGbWhqwMW4U7e2vAVN0jv3H2VG3rYRobYk6yjK4eU3V%2FYSzcLAmynUSCwUSVHuyFZm7pgv2m3AzHaAZEmwPnIy1OqNKM2TAWv%2FHpL3kzcEatrgdkKkydBJvYe98rXG6TWpwBro7fogBJMTP5SHfhMb06KdUJokuPLxd6ydqOSTtWcgBtZYCuwmlwjSclGirFrZwYroItMRtxpYQdV9q4X9qcy767HFwM7BQBOtiuix9txhwIwcTz2f7pLwiR5Clqd3oqbL1H1Il92RdVC8oNnHlCnyR5%2BAJCyVS9%2FDpNeaFIfaICCBn0vbBRKslpFVocN7d82sijqtNuYffv7tgKr7AdagMyx0xLhJd%2Fe3vNRwfg63%2FyWXsdy1ii3mWjDtc5dFItnR2siNe4wpVdVN%2FN9wvQV688KgFAf%2B2J0NTtVbb13%2BmSPt7r15GVxiRE7AlY1QwA0qipZmJVBu5G0GoIsbpR3J2fEQmZZ82pl6ED7kFEwi4jdwgY6pgGnHcrXrWtK0dDC%2BkjxTP9f0y9vYeKEg%2Bzz7ElCt8S%2BuTmDTbVsjSuokLORxCJOAr1V8SsGLHACJD0DYb%2B9RXID22wbWUo%2BTdSIN%2FrfeD5Tf5%2BoR1RI7dY1DYR%2F8Q5FyhVWKEFiodWIdb1n6IOyFz8NDs9BSQ5Wu1fulCmcrXKnN56v9Hzc3DDy9nQ8nW5GNMgvTKPDEqLMnMIA7QmYtGcEtoh%2BBcEN&X-Amz-Signature=17a507c82d88f1f90d7e948353552c9ff184be5df836982c0bd0c2c5315a6e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVIFKS2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSHLSG5aqb5v4ZtJrE81La41BU%2B%2Fa%2F0yea%2FsTsTDM6PAiBWx5mjzjQDIFwvx0ZiA59rHFqNOBPruF%2FpR0E68q2ZsyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkeQj%2BYNtje3dvOsCKtwDJh%2FP%2FZGTtpZ0sggwZssjPC7hjH%2FpPBOmxb1eob15AepfgWPGoX3IZKbJKVBuDOHIVCoYSPVv3A49o6iOqHxsRjZiA6gsoGTM3ef3Nvj%2BWBFqCZfQCZG1QKgQtHZQw9ybEFHRjcNTMuLnpOiVGbWhqwMW4U7e2vAVN0jv3H2VG3rYRobYk6yjK4eU3V%2FYSzcLAmynUSCwUSVHuyFZm7pgv2m3AzHaAZEmwPnIy1OqNKM2TAWv%2FHpL3kzcEatrgdkKkydBJvYe98rXG6TWpwBro7fogBJMTP5SHfhMb06KdUJokuPLxd6ydqOSTtWcgBtZYCuwmlwjSclGirFrZwYroItMRtxpYQdV9q4X9qcy767HFwM7BQBOtiuix9txhwIwcTz2f7pLwiR5Clqd3oqbL1H1Il92RdVC8oNnHlCnyR5%2BAJCyVS9%2FDpNeaFIfaICCBn0vbBRKslpFVocN7d82sijqtNuYffv7tgKr7AdagMyx0xLhJd%2Fe3vNRwfg63%2FyWXsdy1ii3mWjDtc5dFItnR2siNe4wpVdVN%2FN9wvQV688KgFAf%2B2J0NTtVbb13%2BmSPt7r15GVxiRE7AlY1QwA0qipZmJVBu5G0GoIsbpR3J2fEQmZZ82pl6ED7kFEwi4jdwgY6pgGnHcrXrWtK0dDC%2BkjxTP9f0y9vYeKEg%2Bzz7ElCt8S%2BuTmDTbVsjSuokLORxCJOAr1V8SsGLHACJD0DYb%2B9RXID22wbWUo%2BTdSIN%2FrfeD5Tf5%2BoR1RI7dY1DYR%2F8Q5FyhVWKEFiodWIdb1n6IOyFz8NDs9BSQ5Wu1fulCmcrXKnN56v9Hzc3DDy9nQ8nW5GNMgvTKPDEqLMnMIA7QmYtGcEtoh%2BBcEN&X-Amz-Signature=30062f0e9f5c2693ceefca10e88f576cc304907eca75969d61acf76163950fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
