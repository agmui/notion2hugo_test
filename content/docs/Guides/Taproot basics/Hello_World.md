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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHEAXZW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5UcgFCK58Gd7SjEJ0GOZ%2BLVrWgV7%2B9W8G4PGF3cVROgIhAMHU26Q24z14XAu1his5n2AV%2FcSjBRrs5ABWrT07LmeIKv8DCDwQABoMNjM3NDIzMTgzODA1IgxsE9IivzbzoRJnDj4q3AOu14mQmogCVt1XHkkxotSBQqbhlk%2Ffjo%2BOkvClYt9i9jfsSgDQvkUOX20ofSEB3kEUHNO2qQhxSnjAKYSfDDWi%2By00ma2Uz1MK127bgYyScGr04JhAWGHRwT7fFnjVLVI4jYAHB2ZoN0AgUadHM75U8CqZjBoxVbWk9wvtota9KJNcZznPSw%2FvBzOfFwLP7RnUPn4cjEaODXNh6lvj9NM%2B0ybP772ydoyUbhrGqfgwMzP8B2vg2m7oZt%2BonIy8xColBR%2BHOmHO1%2BNFDghkE9syf7G8%2BnX7y3tladDtuDOaHq0SnS5dh1isF%2FUVOYH4sw9gQXrIqtkAabRx2Kz3SI6Plx2drZtD9GoNsE1%2BeZXPtFluvU4AQQvt0EsaW54UD0LfbnGEXCu3aspRAO2ScT324A1U%2BCv5u3jSGXOmGDFCCXSHqWpmwt2RavvAAcm3QZLsCDj%2BFQlkA3%2FVTRTa2xTvRX8fFjUrxlrBsSjQXQREzz6u56scCWa6BeCjPNKsV3%2FB0QT1IIIASqoM%2BQSOULBPPQgoRgomEf7gRSiiKb5g29l3QORyeHrLTNxZIJMFsHjh%2FWBgGfN7vfV%2BDxARhiaX2B8FsHrLXSQvdPWJA%2BmtS8RwRM51DHs3Empz8TCFm96%2BBjqkAa4xXfMHDKVySM%2BH8aflaGKR5EoBRxC9aL7kFAIx18rf2njCAmw6GBIqT%2Fs5EsPFzEoryDXHBsuEmBGB5KawreBtiYvYSgHwKu3bjFrA4DqhcU4gb2HZAa3B7E%2Buf1%2FP%2FpSrncu9FiGyOXVdsBNUIJVsbA%2FJwbFaQe2egr6JoUay19XzpkqRtrrJEqFVszov7FLNK0k0XviFtvZdT2e%2F2Uai19oQ&X-Amz-Signature=e06dd95b815e7d074c629061ec6cfd2f5aefa050225e9a4adbb2ca525d2c07b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHEAXZW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5UcgFCK58Gd7SjEJ0GOZ%2BLVrWgV7%2B9W8G4PGF3cVROgIhAMHU26Q24z14XAu1his5n2AV%2FcSjBRrs5ABWrT07LmeIKv8DCDwQABoMNjM3NDIzMTgzODA1IgxsE9IivzbzoRJnDj4q3AOu14mQmogCVt1XHkkxotSBQqbhlk%2Ffjo%2BOkvClYt9i9jfsSgDQvkUOX20ofSEB3kEUHNO2qQhxSnjAKYSfDDWi%2By00ma2Uz1MK127bgYyScGr04JhAWGHRwT7fFnjVLVI4jYAHB2ZoN0AgUadHM75U8CqZjBoxVbWk9wvtota9KJNcZznPSw%2FvBzOfFwLP7RnUPn4cjEaODXNh6lvj9NM%2B0ybP772ydoyUbhrGqfgwMzP8B2vg2m7oZt%2BonIy8xColBR%2BHOmHO1%2BNFDghkE9syf7G8%2BnX7y3tladDtuDOaHq0SnS5dh1isF%2FUVOYH4sw9gQXrIqtkAabRx2Kz3SI6Plx2drZtD9GoNsE1%2BeZXPtFluvU4AQQvt0EsaW54UD0LfbnGEXCu3aspRAO2ScT324A1U%2BCv5u3jSGXOmGDFCCXSHqWpmwt2RavvAAcm3QZLsCDj%2BFQlkA3%2FVTRTa2xTvRX8fFjUrxlrBsSjQXQREzz6u56scCWa6BeCjPNKsV3%2FB0QT1IIIASqoM%2BQSOULBPPQgoRgomEf7gRSiiKb5g29l3QORyeHrLTNxZIJMFsHjh%2FWBgGfN7vfV%2BDxARhiaX2B8FsHrLXSQvdPWJA%2BmtS8RwRM51DHs3Empz8TCFm96%2BBjqkAa4xXfMHDKVySM%2BH8aflaGKR5EoBRxC9aL7kFAIx18rf2njCAmw6GBIqT%2Fs5EsPFzEoryDXHBsuEmBGB5KawreBtiYvYSgHwKu3bjFrA4DqhcU4gb2HZAa3B7E%2Buf1%2FP%2FpSrncu9FiGyOXVdsBNUIJVsbA%2FJwbFaQe2egr6JoUay19XzpkqRtrrJEqFVszov7FLNK0k0XviFtvZdT2e%2F2Uai19oQ&X-Amz-Signature=3910ca50fbe0a14b7a0ac64866a4cb9454b518adec3bee9c857034ae6c514165&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
