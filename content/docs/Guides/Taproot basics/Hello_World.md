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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWT66C5T%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsxnErErjPmExxjC%2BU0HnSa7ruw6UyYcDh%2FWnuGMDfnAiA%2B3u%2B903kc1aZoDXnh5Bt2CYE%2FoHKhJPKdk%2BRLKBFCuyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLJowWeuZ3nc%2BTFoWKtwDeks8%2BIUCnxCU4WLkJp4LolsKNCOiJHJGicIprvgaAvnE%2BiI1Lutx%2BJ%2BlNSj5FrkNQ2i2OvasrMtS5MXg6NNS7cXqTtXRYpIv6MZf3BnH63RiAbekKL5GwUXRms6ipBoHqL3SU7KUy6cYkJrk6hnEKR0XAzdbZ8R%2BCltqwa%2FeefOoOHtBEt%2Bj1dc1zEaDiC5OPTf0PCE4a00VBYEu%2BWklE9GSRG6oGchkW8mTELPgFK8AFhaNNR59DkatqKwhlix38xbDJXXp%2BblytVzs2u5I%2FmjJQhxRP18B5c2EamcAxmP%2FR7uCst02GXzP%2Bt80lIUTWwU4pADAv77%2FHcfQRaAq8m6XIC7MLMyur442c4wNvMR4raQGHn2BIXQLkUHrIVXY6a5f3i8Oup%2FYyHG0Q7nEDnKy%2B%2BHUcjPDicU1f4V1qgSaFjRP8h6ustVrQxp1eAinfWv8KmmzGEg0SpHOmdq4U0fmd%2Fz9s33%2Fzu8Iyz0npEGL1ImGnV3v5Q7srmib8sBfEa69JEnnIoriWGkF%2FE43lQT8zvQEt2APbN5YxywVCrCztKYik8IKAOFeFLlUQn%2B6Nm2HsQWQixyWXaHbu9QHHvQ1WtHJhUuUeXqyhza2XncqO4PJmPTq1RFbuSYwxrqdvgY6pgGcomXbFGd4QwshHrVFpExEWLKyWeNDhKrF%2FlJNrzwqU7Jcc8vdfO3SliajRVaQYGmvJqJzmn7Xu9Hodokxsql2umOdluGhSBYj7%2FmFnYymxLmdr2MgH5g2u073FPiO9J3JHFLM5Rm0vND6KpD1g%2FBQN6juHI%2FH0ItVbvloARnkvOORWy0tdvYQ%2B6lri%2BGd%2BIj9RktIu2PrdkkqaGK73j%2Bqk3MM7mrz&X-Amz-Signature=8623caf5c9dbcded0a6e7ee1618f0e692ad5683a7bd390b078c4a162f897bf12&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWT66C5T%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsxnErErjPmExxjC%2BU0HnSa7ruw6UyYcDh%2FWnuGMDfnAiA%2B3u%2B903kc1aZoDXnh5Bt2CYE%2FoHKhJPKdk%2BRLKBFCuyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLJowWeuZ3nc%2BTFoWKtwDeks8%2BIUCnxCU4WLkJp4LolsKNCOiJHJGicIprvgaAvnE%2BiI1Lutx%2BJ%2BlNSj5FrkNQ2i2OvasrMtS5MXg6NNS7cXqTtXRYpIv6MZf3BnH63RiAbekKL5GwUXRms6ipBoHqL3SU7KUy6cYkJrk6hnEKR0XAzdbZ8R%2BCltqwa%2FeefOoOHtBEt%2Bj1dc1zEaDiC5OPTf0PCE4a00VBYEu%2BWklE9GSRG6oGchkW8mTELPgFK8AFhaNNR59DkatqKwhlix38xbDJXXp%2BblytVzs2u5I%2FmjJQhxRP18B5c2EamcAxmP%2FR7uCst02GXzP%2Bt80lIUTWwU4pADAv77%2FHcfQRaAq8m6XIC7MLMyur442c4wNvMR4raQGHn2BIXQLkUHrIVXY6a5f3i8Oup%2FYyHG0Q7nEDnKy%2B%2BHUcjPDicU1f4V1qgSaFjRP8h6ustVrQxp1eAinfWv8KmmzGEg0SpHOmdq4U0fmd%2Fz9s33%2Fzu8Iyz0npEGL1ImGnV3v5Q7srmib8sBfEa69JEnnIoriWGkF%2FE43lQT8zvQEt2APbN5YxywVCrCztKYik8IKAOFeFLlUQn%2B6Nm2HsQWQixyWXaHbu9QHHvQ1WtHJhUuUeXqyhza2XncqO4PJmPTq1RFbuSYwxrqdvgY6pgGcomXbFGd4QwshHrVFpExEWLKyWeNDhKrF%2FlJNrzwqU7Jcc8vdfO3SliajRVaQYGmvJqJzmn7Xu9Hodokxsql2umOdluGhSBYj7%2FmFnYymxLmdr2MgH5g2u073FPiO9J3JHFLM5Rm0vND6KpD1g%2FBQN6juHI%2FH0ItVbvloARnkvOORWy0tdvYQ%2B6lri%2BGd%2BIj9RktIu2PrdkkqaGK73j%2Bqk3MM7mrz&X-Amz-Signature=151563d29ae30e58b404f3898facbede97ad5ab37aef2e80ac22f67270f52a06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
