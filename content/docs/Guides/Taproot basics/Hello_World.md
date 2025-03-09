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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOZHUWM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEMkYXe1dwadRs5zT9NfrPzXv2DuJpOC5g%2FjZe9NsKU6AiEAsuRJ2IIgIh40W5paXxVg4JiUYjik1u1XmsLJL%2FpYvD8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBVGk9LDExmz8Hm77yrcA91l8Q5puzop3udNYy4zTl83aQ1e9BKKjmhwQ33qUGqtR5jW5%2BnWo5i8DNMAM9YCo7zPL%2FbsGfd9fnqBmgW9HlfjekwBLT4tKq9kU6LZZo2n66z6EwsDJ4EIJsxARZAQ%2FEVrnabRXoWfmKYJuGSq1bb6siet%2B97E5D%2BkI1wiMfoWVr1QlB23NcHS3N2RyJOi1U%2Fwqo4DVtGT5kF1w%2FGxk0X2WmOFT5b6Md6wX0U8DwXXja%2BfT9iih3Yup9Dl%2Fyvxo4B6G3%2B8TcbVyOy%2BxfpDLBO%2FCUyM43bjnV%2F0V9BhzZlCRZHYIdF9BmJ7K%2FU2XgsEIicTgD1Nn9hV6KUl4RXTnU2IIeOAAhm7AWPzK9S0%2FPM8QYTn3jBaNDM%2Bb7bJn5u%2FBT5fEVUxsa7G0SAhIY4nsZ5AZJ4mcw5R3EnwVjzR%2FP%2FdhZYmr5F9gT6Iv1KR3PPIa9o6ZLw6%2Fw8VGDMrh8TnaL8H2RAPd91kYBFX1sIUr1DLgXQd62zcC%2Fv5RHUtVY%2B%2FXmI5lJn2bEDHJgI2D42V98XEEv029Yc7MTxcVtxP4TLj%2FGE2CNZdyMgwH6qRUV5tOfGIPTzoj3fyECz%2BmRKSlZX5IVHit3PLuaiBtjmPQj5hV%2Fn5zWHaGvguNSm4MMfrtL4GOqUBpyPeGSo%2BnRlI1pBm21MlZpRxmkDPuhnHu8hUIp40XCCrSe%2BXNq6Zxok4XEnN%2B8PnUiIxCVYsDT%2Bj71Jq5DExy7%2FbQavQFb90pAvLfeInrywWYnPHaxYXuOAAPBqKU8AND6Rf6i3VBzo0WrL%2F7V5mCX7oP01vICYqgbnXPoB6uuxUzBjYg0fKZrUvEJYIY0JwW0zD6X%2FbUw%2F8RtUmHPKPA5N6QqJM&X-Amz-Signature=eb07c4880cbcf5334eb6037a09434f9c4a74649f68229254eefd504003ea1bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOZHUWM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEMkYXe1dwadRs5zT9NfrPzXv2DuJpOC5g%2FjZe9NsKU6AiEAsuRJ2IIgIh40W5paXxVg4JiUYjik1u1XmsLJL%2FpYvD8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBVGk9LDExmz8Hm77yrcA91l8Q5puzop3udNYy4zTl83aQ1e9BKKjmhwQ33qUGqtR5jW5%2BnWo5i8DNMAM9YCo7zPL%2FbsGfd9fnqBmgW9HlfjekwBLT4tKq9kU6LZZo2n66z6EwsDJ4EIJsxARZAQ%2FEVrnabRXoWfmKYJuGSq1bb6siet%2B97E5D%2BkI1wiMfoWVr1QlB23NcHS3N2RyJOi1U%2Fwqo4DVtGT5kF1w%2FGxk0X2WmOFT5b6Md6wX0U8DwXXja%2BfT9iih3Yup9Dl%2Fyvxo4B6G3%2B8TcbVyOy%2BxfpDLBO%2FCUyM43bjnV%2F0V9BhzZlCRZHYIdF9BmJ7K%2FU2XgsEIicTgD1Nn9hV6KUl4RXTnU2IIeOAAhm7AWPzK9S0%2FPM8QYTn3jBaNDM%2Bb7bJn5u%2FBT5fEVUxsa7G0SAhIY4nsZ5AZJ4mcw5R3EnwVjzR%2FP%2FdhZYmr5F9gT6Iv1KR3PPIa9o6ZLw6%2Fw8VGDMrh8TnaL8H2RAPd91kYBFX1sIUr1DLgXQd62zcC%2Fv5RHUtVY%2B%2FXmI5lJn2bEDHJgI2D42V98XEEv029Yc7MTxcVtxP4TLj%2FGE2CNZdyMgwH6qRUV5tOfGIPTzoj3fyECz%2BmRKSlZX5IVHit3PLuaiBtjmPQj5hV%2Fn5zWHaGvguNSm4MMfrtL4GOqUBpyPeGSo%2BnRlI1pBm21MlZpRxmkDPuhnHu8hUIp40XCCrSe%2BXNq6Zxok4XEnN%2B8PnUiIxCVYsDT%2Bj71Jq5DExy7%2FbQavQFb90pAvLfeInrywWYnPHaxYXuOAAPBqKU8AND6Rf6i3VBzo0WrL%2F7V5mCX7oP01vICYqgbnXPoB6uuxUzBjYg0fKZrUvEJYIY0JwW0zD6X%2FbUw%2F8RtUmHPKPA5N6QqJM&X-Amz-Signature=7ae1ee4c4fddf59baee54cd5069328b5e2e1cc1a208510ed0f42dbee128c80ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
