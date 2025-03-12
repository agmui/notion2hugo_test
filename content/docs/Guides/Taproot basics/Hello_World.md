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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKSPJ3V%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvzycuKWnvEg4uIGUeE%2Fhw%2F0v%2Bfpr4pNkFiYvlkU8tGgIhAJ6oIr2vURY%2BfVYtpdkQzigABh%2BWV4B3BkpB7u9lcIsGKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp20IU61wBMU%2BbFW0q3APkYYWfTAJ1ydwb6N0W6fui%2BrKkwS5L%2FJsRiO4ebntiY5qMdMb5ipEyAiyEpz8zl8RJXdussw5XfFbLaN3WGfgQ9gHo2jTdR0dHxlpnmPzCWfpJUP8%2BY1t6B1%2F25BAZfhPMRF6ALCzzW8fp6MWOO6VDHahZz8xFxlsFO3tgosuqZWICvu%2BSCNaY%2F1YJ%2F3OXWKGrgO0q1b7qOwtCwV9llJ3Fm7WsYJiDUNElqN%2BDssYAgWm%2BtxQUIjMZlgEypgEYK6dapp6bZX8kCT%2B6iDiDMBinruyhHoje3Hb3%2FKaq4eazHSg%2BFoevHaFJohe4jFOlQNPn7UKkEQfWauOTDvjFEFKDCxZwebF1JaC%2BV%2BG%2FXBp7f54lOmvHZJq9vV0JdTuUfgAomVY%2FSTcAmC9i46%2Fb5k%2F3G5ljt%2BczX2DWEinufosdAdPi47LBpjF3eCQN8LK3aNjxBOeYqxQzY5JeLRo2B1nF6ivexA%2BrQgCgoJMK5BdneTe0J7K72dIdLA3KN%2Be70o9UZhURgpE3JdsrsFH7%2FcCtkCnHh0cOpObxyYyaXBM6HPgUsyRPULnz2mXv2JjyJ3U1y1zQR78Pb5xKRnizBTWz0%2FOtS5sA62QRSI01WOKATtYwtttpa%2FORtALblDDc2sS%2BBjqkAS9udWsYNJNj4hUAdoVquvm%2BIhA5MXQKE3a4p7MLHG%2BEdG2a63Ot42G0npRRDA9vcavhBejD5wWmnsS4dvVA6QJ5%2BmW2M1%2Bee%2BCb7ZMheTdzoFbVJSB5eWS2VquJjDavpQT3sTOwLA8kOajay0gDYbsfl0%2B4pLd7AZ6CyhiaUQRWPgVbuyvMNK3szX%2BjrSuAgUI3iS9u2i6rsKegpgxiFsZxTRmA&X-Amz-Signature=44cc2faa501c0174035571825a1ad834ac9d510dfdd2da56e6244fe41f415524&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKSPJ3V%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvzycuKWnvEg4uIGUeE%2Fhw%2F0v%2Bfpr4pNkFiYvlkU8tGgIhAJ6oIr2vURY%2BfVYtpdkQzigABh%2BWV4B3BkpB7u9lcIsGKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp20IU61wBMU%2BbFW0q3APkYYWfTAJ1ydwb6N0W6fui%2BrKkwS5L%2FJsRiO4ebntiY5qMdMb5ipEyAiyEpz8zl8RJXdussw5XfFbLaN3WGfgQ9gHo2jTdR0dHxlpnmPzCWfpJUP8%2BY1t6B1%2F25BAZfhPMRF6ALCzzW8fp6MWOO6VDHahZz8xFxlsFO3tgosuqZWICvu%2BSCNaY%2F1YJ%2F3OXWKGrgO0q1b7qOwtCwV9llJ3Fm7WsYJiDUNElqN%2BDssYAgWm%2BtxQUIjMZlgEypgEYK6dapp6bZX8kCT%2B6iDiDMBinruyhHoje3Hb3%2FKaq4eazHSg%2BFoevHaFJohe4jFOlQNPn7UKkEQfWauOTDvjFEFKDCxZwebF1JaC%2BV%2BG%2FXBp7f54lOmvHZJq9vV0JdTuUfgAomVY%2FSTcAmC9i46%2Fb5k%2F3G5ljt%2BczX2DWEinufosdAdPi47LBpjF3eCQN8LK3aNjxBOeYqxQzY5JeLRo2B1nF6ivexA%2BrQgCgoJMK5BdneTe0J7K72dIdLA3KN%2Be70o9UZhURgpE3JdsrsFH7%2FcCtkCnHh0cOpObxyYyaXBM6HPgUsyRPULnz2mXv2JjyJ3U1y1zQR78Pb5xKRnizBTWz0%2FOtS5sA62QRSI01WOKATtYwtttpa%2FORtALblDDc2sS%2BBjqkAS9udWsYNJNj4hUAdoVquvm%2BIhA5MXQKE3a4p7MLHG%2BEdG2a63Ot42G0npRRDA9vcavhBejD5wWmnsS4dvVA6QJ5%2BmW2M1%2Bee%2BCb7ZMheTdzoFbVJSB5eWS2VquJjDavpQT3sTOwLA8kOajay0gDYbsfl0%2B4pLd7AZ6CyhiaUQRWPgVbuyvMNK3szX%2BjrSuAgUI3iS9u2i6rsKegpgxiFsZxTRmA&X-Amz-Signature=31b8cf10a1aed96f8fc714db0095aa9d1a658cfe764ad4896c8dc967538bc0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
