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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDMN7KO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFvDW%2BjtF%2FsDkdSONNceiZ9axv9h4wxPnut%2FTr4%2B88SKAiAr6NVKsep4apRpE0cxuZINdcQydSKjrFV62%2BhQ16lQdSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdv4EIcNEOr9VN06PKtwDEaptOLRNKV0u%2FUnMMwQkhmw4nC4y6K9RMm1%2F2IzX8TCnOMNejyNVCa47Rjikaj3ilYejZVuPWjlHQlCoXh%2BokI%2BmyXER9%2Fuy8XadWgXz6eqWwt1yw5TzR3nmBRT2UQEHGFKQhQbaYFT%2FDwqNm5%2BTFesBF2ziRfMFDOZybrab5D5CZw7oJyAsGCr4npMW2j41WS3J8rSOaYOMLa3oX97JDFf%2BSoTtTWyJ4PElTDFnGLgwrBjJOLv%2By56wlqAfxc1dWttY2xFQUipwbDo1zQ47smE%2B6QoJZ%2Fy4QgKdWtnTkvTldv6ajetyvX2Bbp1CvQb2xRIUJ25JSYjTtv3NhwubfXDHOso9FY%2Bhg%2BoziHjetPYy2lkCHiKgbyOqvP9kDG6Hb6x02ae%2BVfrEBJvqCeRovDX%2BHE8X1RRbl5NW857cc4YGqosLBFjPFGQkX0CHxextkGNcXiJdfkv4dDTG0bTkKnwoNiB8gesbNDEFGb%2F04HNX6JsFvx57qqqU5BHNv4rx6Q%2B93Ep%2Bn0dHej2iE9D6CZi0QKDN%2FT5avjAnbHRFl2GLgn1xUDIIzeX6Zvwgb3PbzX3GPPSuqQVHOLwiTpp%2B1N%2BOFYUfVXOixb5tzY40oTuMlGuR80heTOaPHnowwLaUwAY6pgGKJtCU94Y0z0Q34ZPysV9P3Acs5KTbw9m15PXwjLhZl1KE1LzZEGrb%2BgCdIkmnHzhZWwGl5EvWrvW0Ov6jHplTxDImXr1i3sKS3SDbUyDVlf7DKsB%2B6lr0Bgw5kUy3l9a1Xtg0Bvcb6Ht9Y3pg3zYdyo9PLt8zPNI4We9hD6ZCFPlpLLViNyVO3qPkGB%2BonbwGJ3YmSPUdCJgpyt9BV1UYTn81BLX1&X-Amz-Signature=869a5a37b9b970e125edc83335a1a4855cc2aaae3a54b1a7af69ee4a53951d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDMN7KO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFvDW%2BjtF%2FsDkdSONNceiZ9axv9h4wxPnut%2FTr4%2B88SKAiAr6NVKsep4apRpE0cxuZINdcQydSKjrFV62%2BhQ16lQdSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdv4EIcNEOr9VN06PKtwDEaptOLRNKV0u%2FUnMMwQkhmw4nC4y6K9RMm1%2F2IzX8TCnOMNejyNVCa47Rjikaj3ilYejZVuPWjlHQlCoXh%2BokI%2BmyXER9%2Fuy8XadWgXz6eqWwt1yw5TzR3nmBRT2UQEHGFKQhQbaYFT%2FDwqNm5%2BTFesBF2ziRfMFDOZybrab5D5CZw7oJyAsGCr4npMW2j41WS3J8rSOaYOMLa3oX97JDFf%2BSoTtTWyJ4PElTDFnGLgwrBjJOLv%2By56wlqAfxc1dWttY2xFQUipwbDo1zQ47smE%2B6QoJZ%2Fy4QgKdWtnTkvTldv6ajetyvX2Bbp1CvQb2xRIUJ25JSYjTtv3NhwubfXDHOso9FY%2Bhg%2BoziHjetPYy2lkCHiKgbyOqvP9kDG6Hb6x02ae%2BVfrEBJvqCeRovDX%2BHE8X1RRbl5NW857cc4YGqosLBFjPFGQkX0CHxextkGNcXiJdfkv4dDTG0bTkKnwoNiB8gesbNDEFGb%2F04HNX6JsFvx57qqqU5BHNv4rx6Q%2B93Ep%2Bn0dHej2iE9D6CZi0QKDN%2FT5avjAnbHRFl2GLgn1xUDIIzeX6Zvwgb3PbzX3GPPSuqQVHOLwiTpp%2B1N%2BOFYUfVXOixb5tzY40oTuMlGuR80heTOaPHnowwLaUwAY6pgGKJtCU94Y0z0Q34ZPysV9P3Acs5KTbw9m15PXwjLhZl1KE1LzZEGrb%2BgCdIkmnHzhZWwGl5EvWrvW0Ov6jHplTxDImXr1i3sKS3SDbUyDVlf7DKsB%2B6lr0Bgw5kUy3l9a1Xtg0Bvcb6Ht9Y3pg3zYdyo9PLt8zPNI4We9hD6ZCFPlpLLViNyVO3qPkGB%2BonbwGJ3YmSPUdCJgpyt9BV1UYTn81BLX1&X-Amz-Signature=b50e73e04ec3e2ae2e45cc89f4fd00da9717046e9036017c764f79bae7996066&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
