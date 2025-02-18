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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH2JJAV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGPUlH9OcMBCUWoFAoE684USBnS%2BjsPi9%2B4MEYcfHsNfAiBfu7jHrURNpdqXZXBKw2tpa8VkoMVz0XDZyb6NdUMriyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2FiyRPCcQR2kKkpwKtwDuOh83PTQkIMBL1Mcsktfn2cV1jDr8Uix%2BEmWQnNVpEOK0bEPRaezLTW4AHJ%2BHYRvWw3fU0vWW%2F1gfWYU5xL0f%2FcP%2FhC8jDBuf6%2F0%2B5BhyddjpscXKBu%2F5xiEDtn1nt2tGJZHpn3P%2FA%2FkGZZKzw6uPUaYB2UYDVtk9z9IuZ4iEXumoS%2FUHtho%2FUtpTQgJcmKXXXOnaDnDkOO54TzTq8agghCBszmjY5Z6J8uxIxn52MS0UJh%2BAY2lLdkMnt9eFlrJrTUogmtGpuyDGhQoaGEvdqKUQcoTL993VbzrMLpS%2BEIsf9O7OyCADMLiYi4Aro4ETwuO8vfL9ZhoPcnQnx6XvMjYAoZvJ7fqWNb%2BVFjlEfHn1%2BjlniOPf3ORT2%2FjGeWM9lW1p4l2J5ZeiTPxXemOmFADUjkm46JTTnUUC6rVC59EZG8efYOO4Pe6lYalrWncGH2UIllYnOZMG0pfaBu0tIxXz87Qwg9ZA%2F3ervy3qtKfOf2aY2LnbXcBUNrqAKzraDxRfVwTY%2FITonrCuTPvzCMSwFCUcrmU82ckvZjSzoHpKsbopEkAMwGfnu9VZYqW18ZcCEnkNgTGHaMhbLqpAdi0X8vtxF3mAlQnvG9EUOTws%2BlDD8vn%2FxvlgkQww7LSvQY6pgHrhlQIPYUJqqCbLZZNW%2F97lwN7TT4y%2FtlBRiBKSpIJ1deZsPWbKf8X9V0g1Oo1EkKuQFR8eVRnT9Iox1ujJi%2Bgqe9Zspl31i0Os5IxdMLNR%2BQohGi59L1208%2BxtgLOTXLi4o5qzag20NeguTEdxxUxJ1UqcRjKdfA9BkmTLRB91cDFG4acC1PFReJhpiixpGfcDMjMrJFfqYXp810L9NgsjMGzpB78&X-Amz-Signature=dc096212a3f1fd7c439e871c2d8715a8e4243f41d0e2b4b94676eb04523e98dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH2JJAV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGPUlH9OcMBCUWoFAoE684USBnS%2BjsPi9%2B4MEYcfHsNfAiBfu7jHrURNpdqXZXBKw2tpa8VkoMVz0XDZyb6NdUMriyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2FiyRPCcQR2kKkpwKtwDuOh83PTQkIMBL1Mcsktfn2cV1jDr8Uix%2BEmWQnNVpEOK0bEPRaezLTW4AHJ%2BHYRvWw3fU0vWW%2F1gfWYU5xL0f%2FcP%2FhC8jDBuf6%2F0%2B5BhyddjpscXKBu%2F5xiEDtn1nt2tGJZHpn3P%2FA%2FkGZZKzw6uPUaYB2UYDVtk9z9IuZ4iEXumoS%2FUHtho%2FUtpTQgJcmKXXXOnaDnDkOO54TzTq8agghCBszmjY5Z6J8uxIxn52MS0UJh%2BAY2lLdkMnt9eFlrJrTUogmtGpuyDGhQoaGEvdqKUQcoTL993VbzrMLpS%2BEIsf9O7OyCADMLiYi4Aro4ETwuO8vfL9ZhoPcnQnx6XvMjYAoZvJ7fqWNb%2BVFjlEfHn1%2BjlniOPf3ORT2%2FjGeWM9lW1p4l2J5ZeiTPxXemOmFADUjkm46JTTnUUC6rVC59EZG8efYOO4Pe6lYalrWncGH2UIllYnOZMG0pfaBu0tIxXz87Qwg9ZA%2F3ervy3qtKfOf2aY2LnbXcBUNrqAKzraDxRfVwTY%2FITonrCuTPvzCMSwFCUcrmU82ckvZjSzoHpKsbopEkAMwGfnu9VZYqW18ZcCEnkNgTGHaMhbLqpAdi0X8vtxF3mAlQnvG9EUOTws%2BlDD8vn%2FxvlgkQww7LSvQY6pgHrhlQIPYUJqqCbLZZNW%2F97lwN7TT4y%2FtlBRiBKSpIJ1deZsPWbKf8X9V0g1Oo1EkKuQFR8eVRnT9Iox1ujJi%2Bgqe9Zspl31i0Os5IxdMLNR%2BQohGi59L1208%2BxtgLOTXLi4o5qzag20NeguTEdxxUxJ1UqcRjKdfA9BkmTLRB91cDFG4acC1PFReJhpiixpGfcDMjMrJFfqYXp810L9NgsjMGzpB78&X-Amz-Signature=3550af1ee622caec75ca76c77afefd23062bca469fbcbcd7a1687fed5debfe0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
