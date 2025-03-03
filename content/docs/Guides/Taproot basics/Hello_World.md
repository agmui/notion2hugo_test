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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLAHMTE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICju%2Fbk5rLA52nyYsL4IKDM5gI5R3v%2B3pudnpCELyrvnAiAh2OnJAo4eyCNgCGiYUaO5UIXul%2FMz5D2D8yUTFH7QgyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM59c0oihRiR4FSKhQKtwDCh7Sm879tDwhlxKrC890JAivXh3j0OGN6TYggQrW2oCI1kuRCDv2J9nHl8zo6%2FewlM6x%2FB5QbnplGPEib1vqPms30kfh4EIov9YmSfVqaIgeBOC036Z55Lq%2F%2BGVG1s7OYW0BvIO3YYwO5YEKixrpnU3Ob%2FZ5klgohZnSg8xrkQrfO2P6w2H8ibzpHaO07QmGb2R9nSqjwS0MilJGfELKcTHJCFEM8wKpeFmdmw5dl1MXIHd5QNTjiDtKocLvjyYSx1c66WBKE9ZrvhtApM2T2ktTZpsm2uyJuSXsCc%2BhuHClfpYPx3PduGjLvQEaip0v8uprAQrW%2FowA7y90gTObgBtAGcZYVjENVoOkRYTHkxG2MwdOYTaD5vV7BnSlNUN7oex37xN0uuouua8rQSTx9yw%2FPB5khk5cn4MxKRkN7TArE8Kx2c5ZM%2FnXbF4N%2F6pcy4pYUrFcPF8FBmIsCYbt2MnUR%2Fc2lyW3ELf3O2ggv4nOQt6QZvNWJTL11S%2FhYtKHwNn7vrlb165R%2F6z1wX1UOOsrvRpkwnR7h2djgc8tSecmfWUaONyaHn1YZ2ybtCPZjb3rmu0uwRfdkLMX%2FFOmopZNHzcYzaS%2BMdh8dHp%2FbmO3Bs4ATdsziF8svAYwh86VvgY6pgGgjZ8z2%2FFBD6FfhmkHUStaHNrAvlrpjnBL2dPqGcOeoXPiztI9frRurCBi9HXOyWqu4HDWybxzcBVhp5vhsL1cdyD%2BXJKNFvq29v09E86GEzg1FszmOpVlwKhzgXWX2QBVG6pDC%2BkG%2F1K%2F9qloyg4SW0cdJXCIilGH8xA7KJ%2FZZ4WtZLOtZp8tn7aC%2BzPlnsf9MyZZ6qgOkQTvcx8rCFLVbxkQiEdM&X-Amz-Signature=da5f0025b5fe039d91d2dca8523a8f71bd4a3056b3215f7e76b5331d72df5130&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLAHMTE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICju%2Fbk5rLA52nyYsL4IKDM5gI5R3v%2B3pudnpCELyrvnAiAh2OnJAo4eyCNgCGiYUaO5UIXul%2FMz5D2D8yUTFH7QgyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM59c0oihRiR4FSKhQKtwDCh7Sm879tDwhlxKrC890JAivXh3j0OGN6TYggQrW2oCI1kuRCDv2J9nHl8zo6%2FewlM6x%2FB5QbnplGPEib1vqPms30kfh4EIov9YmSfVqaIgeBOC036Z55Lq%2F%2BGVG1s7OYW0BvIO3YYwO5YEKixrpnU3Ob%2FZ5klgohZnSg8xrkQrfO2P6w2H8ibzpHaO07QmGb2R9nSqjwS0MilJGfELKcTHJCFEM8wKpeFmdmw5dl1MXIHd5QNTjiDtKocLvjyYSx1c66WBKE9ZrvhtApM2T2ktTZpsm2uyJuSXsCc%2BhuHClfpYPx3PduGjLvQEaip0v8uprAQrW%2FowA7y90gTObgBtAGcZYVjENVoOkRYTHkxG2MwdOYTaD5vV7BnSlNUN7oex37xN0uuouua8rQSTx9yw%2FPB5khk5cn4MxKRkN7TArE8Kx2c5ZM%2FnXbF4N%2F6pcy4pYUrFcPF8FBmIsCYbt2MnUR%2Fc2lyW3ELf3O2ggv4nOQt6QZvNWJTL11S%2FhYtKHwNn7vrlb165R%2F6z1wX1UOOsrvRpkwnR7h2djgc8tSecmfWUaONyaHn1YZ2ybtCPZjb3rmu0uwRfdkLMX%2FFOmopZNHzcYzaS%2BMdh8dHp%2FbmO3Bs4ATdsziF8svAYwh86VvgY6pgGgjZ8z2%2FFBD6FfhmkHUStaHNrAvlrpjnBL2dPqGcOeoXPiztI9frRurCBi9HXOyWqu4HDWybxzcBVhp5vhsL1cdyD%2BXJKNFvq29v09E86GEzg1FszmOpVlwKhzgXWX2QBVG6pDC%2BkG%2F1K%2F9qloyg4SW0cdJXCIilGH8xA7KJ%2FZZ4WtZLOtZp8tn7aC%2BzPlnsf9MyZZ6qgOkQTvcx8rCFLVbxkQiEdM&X-Amz-Signature=135a8a82990b0d7a48267bd3507ae5bf89ee76f9781898e874087f2d953fd5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
