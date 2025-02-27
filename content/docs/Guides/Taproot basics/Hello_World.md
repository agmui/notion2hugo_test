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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QA2KMW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBZh%2FHq60lLSQgb8Cxgb%2By46JEjMtnPWu7DloZCWG5pvAiBywRRgHMGUiVa3SzzEOhNMtMzeFKfReXEQ4I9J6EzrEir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMohuAGu9ddnvLhwrxKtwDNwFguBgDjai2iHC63zqWE7xafyCyYiBUMaikELeLghS1ngKOOz2y0Sv8r1FhrpVSl7k80s80FCfHQpY%2BWMzTWV53m46Ttx8QJkqD4nIh6nhRevr1yXy%2F3B07JikAc8QISALqdRduSTJ6hGCgM3GbsxYnfhzT4KnAB9rRhCB81kRNvpYXl9VHyF9KypPY71icMEVIofJIYIA38G%2Fo9uSL%2FxEt6r2QKW%2F0ICvUeFZkC91Y7MAwngR0r8aZRdX4gNCCPplW%2BVs%2BX4hLtehOAEPzvxNJqCvCWeFYfAwWUMFjNnUqUZHHj%2Bsn3NXYMVRuPaZsTZafVeffXUbpZuwWJN%2Bkz13QbqZMM9qJgmXUlfExIiJP7BZv7c21e%2F65b18r4toOWKUt7Mu8clGaS1l%2BbWFmXiocigVenWN74x1jnlhwuja8nRghNjuXz7Ijrca9s7zuy17Uznds5KWVSHU%2BcpnxQlUqXhFOc17U6NNORuAVS%2BssCxkB1iqO1LaIO7aiQQzzJ4fp453%2FHC8SgSRvlekDxSx4%2BXdKEPOlWmSxmvrDeUu%2B9GnXl32Dv4AVFoO3VYxSlNMu3dsikBGpFt%2BslhZrRqJQk%2Fy2Uiwsw2La9ebfIu0FWkvOo5XXwcqMPKowjtGAvgY6pgFxs91az9GbAzsUmZG2fQrWwPH07vyQBSsXCd%2BK29ofk%2BmzeOR%2FkWxz12NiEDCLgsFQkZQo%2F12MHfLN6CaC95Qj1qmjZz%2B2M9d5W8u6cBppDunW3igZiWwqIX3bFfmNJ%2FSGifmIuS35sGAvYd02vTIoy6qNiuMwUQW9ez3OqXiRI7u73JyXb%2B2Rd7uiSpSzXbN4WudMc4ZKn18vOVW1bD7Llq7e%2Fpg%2B&X-Amz-Signature=185c0089dd53fd17915448ab90564c5a58ab553264bb11a0f931707665816dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QA2KMW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBZh%2FHq60lLSQgb8Cxgb%2By46JEjMtnPWu7DloZCWG5pvAiBywRRgHMGUiVa3SzzEOhNMtMzeFKfReXEQ4I9J6EzrEir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMohuAGu9ddnvLhwrxKtwDNwFguBgDjai2iHC63zqWE7xafyCyYiBUMaikELeLghS1ngKOOz2y0Sv8r1FhrpVSl7k80s80FCfHQpY%2BWMzTWV53m46Ttx8QJkqD4nIh6nhRevr1yXy%2F3B07JikAc8QISALqdRduSTJ6hGCgM3GbsxYnfhzT4KnAB9rRhCB81kRNvpYXl9VHyF9KypPY71icMEVIofJIYIA38G%2Fo9uSL%2FxEt6r2QKW%2F0ICvUeFZkC91Y7MAwngR0r8aZRdX4gNCCPplW%2BVs%2BX4hLtehOAEPzvxNJqCvCWeFYfAwWUMFjNnUqUZHHj%2Bsn3NXYMVRuPaZsTZafVeffXUbpZuwWJN%2Bkz13QbqZMM9qJgmXUlfExIiJP7BZv7c21e%2F65b18r4toOWKUt7Mu8clGaS1l%2BbWFmXiocigVenWN74x1jnlhwuja8nRghNjuXz7Ijrca9s7zuy17Uznds5KWVSHU%2BcpnxQlUqXhFOc17U6NNORuAVS%2BssCxkB1iqO1LaIO7aiQQzzJ4fp453%2FHC8SgSRvlekDxSx4%2BXdKEPOlWmSxmvrDeUu%2B9GnXl32Dv4AVFoO3VYxSlNMu3dsikBGpFt%2BslhZrRqJQk%2Fy2Uiwsw2La9ebfIu0FWkvOo5XXwcqMPKowjtGAvgY6pgFxs91az9GbAzsUmZG2fQrWwPH07vyQBSsXCd%2BK29ofk%2BmzeOR%2FkWxz12NiEDCLgsFQkZQo%2F12MHfLN6CaC95Qj1qmjZz%2B2M9d5W8u6cBppDunW3igZiWwqIX3bFfmNJ%2FSGifmIuS35sGAvYd02vTIoy6qNiuMwUQW9ez3OqXiRI7u73JyXb%2B2Rd7uiSpSzXbN4WudMc4ZKn18vOVW1bD7Llq7e%2Fpg%2B&X-Amz-Signature=6ca3e40cfeededf1a25d35ef05af64fd4e02d495b1512bac495bf8c48f110d69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
