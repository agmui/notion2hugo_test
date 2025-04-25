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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFPPTD6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERj5yZ0xban1MDLZKydU2XLuUTswRxa%2BAmUiJAA26xcAiBXAKtJWwy%2FhSVrSpdFSudnmQbPwMEIjC7DlrpbVoemySr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMqK9ePsX7fCPyE51LKtwDLZOgHXBrzvD7GO4gYJLn9QBwQFMO0%2FPHxkIIylrA0zpWHbdAMjNygBz%2FemqqEDUQbv1Z7r5I%2BRaH7IzOojje1UStbvZJz0xnPM4AF1miVm8aduh7PRXPQBJqtNxAYjGG%2BCzVPRul9NM7kF2tD6ac8JHO%2Bk9wKozunBkXVk8xKa3JyUKG1mBGrd%2Fqvf2lEqjau30xVIaepWBO7oCSq07gS81eXJyeCszkACWWbRNwkp0KVF2ZVz62heawe%2B54R17%2BbiaFVoRHtaRNIMQHfCOQ%2FwdOHF%2FjgMrs9izP9GA9Vo%2FIJhKy1pyjU7dQQzGJ3%2B2GThhbL2deTT0ROwwyMQ7wETCzgUu5z70W%2Fa2UXsin8ZAbJqCWM0fhoyX7fl%2FMVgP0PpMogQEGjF3Q8de5PKkGqOP6Vbrdv9becWAfy57k3Ycjz%2FzBVcPLHjV0x7CG3pgyLXRPJZvQB8aL5nTZ35kfVEyVjSbNfcOT3BcIDHa9XJEpjAUrdCWEm%2BTwR619EpKDBIFICapFysN4%2F%2BQhvP8bArMhOXkAzNs7eOIT%2Bq7rCzGliSgUPex4hHeK%2BhQlV7dfcqsGLqd5HtkMDp0QXeS%2Bsr%2Fa2o%2BS0vVpro%2B3AB8MJQSe1rv20BdD%2B%2BgrwnowvqqrwAY6pgGnbze7hYwawRv3v%2Bo3vvZH9NtmxTGmHY%2FPKtv6z25zjkU7h9CQcdVDawvMl18iBJq%2B%2FF3FNzSwl0Jvte%2BPUCcILE61iH7rHbOrSi4HVT97%2FmmSWHxSlg10XLp4CrPVl9pnWczztxMVy9TTsYKEiZw7XgsqSVT%2FZCXJyb9dy59bYRFA6rapNOkp8rBusNcA8%2FXZUp2jfk0lXJFGiZQdy9eoc7G6MrQJ&X-Amz-Signature=814279af9f103dbf0c18b31874617ee05505de85916eb871ddc5f148ad7c0935&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFPPTD6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERj5yZ0xban1MDLZKydU2XLuUTswRxa%2BAmUiJAA26xcAiBXAKtJWwy%2FhSVrSpdFSudnmQbPwMEIjC7DlrpbVoemySr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMqK9ePsX7fCPyE51LKtwDLZOgHXBrzvD7GO4gYJLn9QBwQFMO0%2FPHxkIIylrA0zpWHbdAMjNygBz%2FemqqEDUQbv1Z7r5I%2BRaH7IzOojje1UStbvZJz0xnPM4AF1miVm8aduh7PRXPQBJqtNxAYjGG%2BCzVPRul9NM7kF2tD6ac8JHO%2Bk9wKozunBkXVk8xKa3JyUKG1mBGrd%2Fqvf2lEqjau30xVIaepWBO7oCSq07gS81eXJyeCszkACWWbRNwkp0KVF2ZVz62heawe%2B54R17%2BbiaFVoRHtaRNIMQHfCOQ%2FwdOHF%2FjgMrs9izP9GA9Vo%2FIJhKy1pyjU7dQQzGJ3%2B2GThhbL2deTT0ROwwyMQ7wETCzgUu5z70W%2Fa2UXsin8ZAbJqCWM0fhoyX7fl%2FMVgP0PpMogQEGjF3Q8de5PKkGqOP6Vbrdv9becWAfy57k3Ycjz%2FzBVcPLHjV0x7CG3pgyLXRPJZvQB8aL5nTZ35kfVEyVjSbNfcOT3BcIDHa9XJEpjAUrdCWEm%2BTwR619EpKDBIFICapFysN4%2F%2BQhvP8bArMhOXkAzNs7eOIT%2Bq7rCzGliSgUPex4hHeK%2BhQlV7dfcqsGLqd5HtkMDp0QXeS%2Bsr%2Fa2o%2BS0vVpro%2B3AB8MJQSe1rv20BdD%2B%2BgrwnowvqqrwAY6pgGnbze7hYwawRv3v%2Bo3vvZH9NtmxTGmHY%2FPKtv6z25zjkU7h9CQcdVDawvMl18iBJq%2B%2FF3FNzSwl0Jvte%2BPUCcILE61iH7rHbOrSi4HVT97%2FmmSWHxSlg10XLp4CrPVl9pnWczztxMVy9TTsYKEiZw7XgsqSVT%2FZCXJyb9dy59bYRFA6rapNOkp8rBusNcA8%2FXZUp2jfk0lXJFGiZQdy9eoc7G6MrQJ&X-Amz-Signature=57ba91c1c2f1bbb5e320e55a88c197fe2c6d4393c0401438d3789c361fc4ffd2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
