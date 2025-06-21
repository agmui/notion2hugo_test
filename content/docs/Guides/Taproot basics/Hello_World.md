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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6RFRKM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADCam9UzLn0KOOY%2F4NYp5aqo123mcBfDHBf7sQAprWeAiEAiLYBasfjItngLuDUl8UVklcFzgroZ2w%2BRUNl7l5Z4AAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAISIr2Sygwg1odPYSrcAyAJgLGTLKp02mkR2WoFEu08YrxJMwpcfrJ20pSwTmRrV9d46%2F3ck7wyZCOcJOzbhJcDIIhSMouGShboZB6MPaCtks2c8PrbHkVwLsy8MJd%2FjjKlz9ux4xvYRte1UdwURIEvigmLCBiTAsdsD8MlxMgs%2BRROIUjzm%2Bp6fZGhJ2JUST2%2BuWkm6TrwkhD4A0wcX7Vri4wfMy7ocOWdytAILpmQHt6SCwNYAVecMRD0nouCN2Nf4FiDIkNwl930mvoMScRtuVpgX0Q%2BCFnI4K1Sd7A8s0%2BcmCiMU5Wg5xAh8hd6vgBzJnK2rj%2BVpqOif%2BFq52EiUQAZ5JF%2FoUsIua%2FD63%2Bj4iXs0mXKNh3Ev4RDODLdeFZ%2Fr5Pj9%2FYxEDWUdsPeOv7PpvC8D39WZm%2FF4YLQ0aSDUJwl5x9vI4mSnltvNlIoc4zyf20965s0K50sho2AONkc9tXdDj3RALiYNvFfVDFFY6ALaDmljSpNkKokEw0osso21xHctO%2FSkV8%2BbqP3fnwVD%2FxCw0GFm7IrZPQ9uf%2F6vR5ipHfr8DkCqAPKUgJuTTN3EUwN2wx%2BcccdQeQwGTtYwryjtEOWKvJt%2BmCWzi2Cp2naoSsOxSyfBv%2BLkD%2FZ%2Bvfdfnd62rRogKTzMO2v2MIGOqUBSHCADetilkCu2VXRVyvpGe7GJQfMu%2F6oj6nEqjxPfITfYg0k%2FYDKnCjdllwRpko%2BIMqeX0e3sjtcHEy45BDhrCsg6LloOSFtT8HaBoead7R5%2F63eJ609Jfwu3cBcwwlhL6ZLLGrrMU6jup2JDw1bD%2Fthg8TVFrQRBvUfi20YmfB1bT626FeE3AGugX1T8MAkywFjnsnL0y4xrCGJltp2ZuM9eVlk&X-Amz-Signature=86ad04df07269f70156b4053bd1a697867c446aba24c5b5b0d99169744a4f3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6RFRKM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADCam9UzLn0KOOY%2F4NYp5aqo123mcBfDHBf7sQAprWeAiEAiLYBasfjItngLuDUl8UVklcFzgroZ2w%2BRUNl7l5Z4AAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAISIr2Sygwg1odPYSrcAyAJgLGTLKp02mkR2WoFEu08YrxJMwpcfrJ20pSwTmRrV9d46%2F3ck7wyZCOcJOzbhJcDIIhSMouGShboZB6MPaCtks2c8PrbHkVwLsy8MJd%2FjjKlz9ux4xvYRte1UdwURIEvigmLCBiTAsdsD8MlxMgs%2BRROIUjzm%2Bp6fZGhJ2JUST2%2BuWkm6TrwkhD4A0wcX7Vri4wfMy7ocOWdytAILpmQHt6SCwNYAVecMRD0nouCN2Nf4FiDIkNwl930mvoMScRtuVpgX0Q%2BCFnI4K1Sd7A8s0%2BcmCiMU5Wg5xAh8hd6vgBzJnK2rj%2BVpqOif%2BFq52EiUQAZ5JF%2FoUsIua%2FD63%2Bj4iXs0mXKNh3Ev4RDODLdeFZ%2Fr5Pj9%2FYxEDWUdsPeOv7PpvC8D39WZm%2FF4YLQ0aSDUJwl5x9vI4mSnltvNlIoc4zyf20965s0K50sho2AONkc9tXdDj3RALiYNvFfVDFFY6ALaDmljSpNkKokEw0osso21xHctO%2FSkV8%2BbqP3fnwVD%2FxCw0GFm7IrZPQ9uf%2F6vR5ipHfr8DkCqAPKUgJuTTN3EUwN2wx%2BcccdQeQwGTtYwryjtEOWKvJt%2BmCWzi2Cp2naoSsOxSyfBv%2BLkD%2FZ%2Bvfdfnd62rRogKTzMO2v2MIGOqUBSHCADetilkCu2VXRVyvpGe7GJQfMu%2F6oj6nEqjxPfITfYg0k%2FYDKnCjdllwRpko%2BIMqeX0e3sjtcHEy45BDhrCsg6LloOSFtT8HaBoead7R5%2F63eJ609Jfwu3cBcwwlhL6ZLLGrrMU6jup2JDw1bD%2Fthg8TVFrQRBvUfi20YmfB1bT626FeE3AGugX1T8MAkywFjnsnL0y4xrCGJltp2ZuM9eVlk&X-Amz-Signature=896b6da305292a0787ac414038bab876e417de803050cf8f068097141ae6943e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
