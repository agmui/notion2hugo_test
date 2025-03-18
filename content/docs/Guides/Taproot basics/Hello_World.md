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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3T3KXG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD96BFqvpnyqG2DapLT1M5K3Js1j0DxBSGnlR5Zwt2fHAIhAKlPH2rtlSFH8YkClVBsHFbsZezgkZucgzWpT4BQJ%2FD5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzvrL7oTMV6%2B6Difs4q3AO3fKxpkBDrBycDduFrwMoGZYf2yUT46FTnmhW4M4JML1vfWSQqeHTGmCws1sUD%2BGV25U96Zieyz9W8a9I5YssrGFs4egPIvELeylBIpSYuuh0777xSPHyhqB7DQyBNmGVzgBGbcAJWZ0%2FOA3LVYBasb6%2B0E0MbRHlabu8QYYNeqZE1xlWkk2NOqlTnOWUJNLsGo%2FCwqVV%2FWIKt8T7PySX6YjSXtTYWok41YsAWmqY%2FH4HMKbk7%2BsEgCzw5heCSXbovRyBhzDBVpaf63Nh%2B%2Fu79pAaFEsyIPxKoJc6zfvts%2BHKRlFGN%2BYVRfGFNZ1tOHrAy58XLI4joiUzrc5aRQ408NmVnsFQD1dmTiJwKh%2FwqMycuerc%2BSxzxnXt5A6hCCv%2F6rSsZyuq0mTgQb3NaXGdTR8lG%2BA7yclrDSPbIKaFem7yNeoOeABFUWX91elkJoYCXA6YkWDUOkVixGU00EjKgybnGw8kKheua1vGa0UJ%2Be8BxIfa8lisKJhVCtgJ53lHbE3f60o2dmy93%2BO0SGDetjQTaiOylXtPmK5iErFV6s%2FZOfTgLfuqZ2ryGI%2FccAKMNDk55HQEIBcpgMGMeTBi8fS7%2BQMJA2%2FkX8ZanEoE1u2z7szFRQ0ZwXNqfuzCi9uS%2BBjqkAUVlWy%2B873wJUhu4K4IP3%2BSjP7r4yEGCRk2XgNkGs%2BDh3agZ0tWDvxssxY3xefOUY43mCBuJfjvqIHXQgedwQ3Jz%2BBCJF4NAiA958DUHD4AmhSS0DhXQU5DLXZaZWUAr8cVPfQp3TuRt%2BcNUjh8t1geUHvc2O1%2BaRZ0%2BEwhV8wUlp1RV3z81kF7twFGslDGPobTgOEVKfGBxf4jKI1ens7J1TXkM&X-Amz-Signature=3195748ad1bbee643fd1e7ab334fb297dc85a2c57ca4631e24892c955e3b46e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3T3KXG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD96BFqvpnyqG2DapLT1M5K3Js1j0DxBSGnlR5Zwt2fHAIhAKlPH2rtlSFH8YkClVBsHFbsZezgkZucgzWpT4BQJ%2FD5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzvrL7oTMV6%2B6Difs4q3AO3fKxpkBDrBycDduFrwMoGZYf2yUT46FTnmhW4M4JML1vfWSQqeHTGmCws1sUD%2BGV25U96Zieyz9W8a9I5YssrGFs4egPIvELeylBIpSYuuh0777xSPHyhqB7DQyBNmGVzgBGbcAJWZ0%2FOA3LVYBasb6%2B0E0MbRHlabu8QYYNeqZE1xlWkk2NOqlTnOWUJNLsGo%2FCwqVV%2FWIKt8T7PySX6YjSXtTYWok41YsAWmqY%2FH4HMKbk7%2BsEgCzw5heCSXbovRyBhzDBVpaf63Nh%2B%2Fu79pAaFEsyIPxKoJc6zfvts%2BHKRlFGN%2BYVRfGFNZ1tOHrAy58XLI4joiUzrc5aRQ408NmVnsFQD1dmTiJwKh%2FwqMycuerc%2BSxzxnXt5A6hCCv%2F6rSsZyuq0mTgQb3NaXGdTR8lG%2BA7yclrDSPbIKaFem7yNeoOeABFUWX91elkJoYCXA6YkWDUOkVixGU00EjKgybnGw8kKheua1vGa0UJ%2Be8BxIfa8lisKJhVCtgJ53lHbE3f60o2dmy93%2BO0SGDetjQTaiOylXtPmK5iErFV6s%2FZOfTgLfuqZ2ryGI%2FccAKMNDk55HQEIBcpgMGMeTBi8fS7%2BQMJA2%2FkX8ZanEoE1u2z7szFRQ0ZwXNqfuzCi9uS%2BBjqkAUVlWy%2B873wJUhu4K4IP3%2BSjP7r4yEGCRk2XgNkGs%2BDh3agZ0tWDvxssxY3xefOUY43mCBuJfjvqIHXQgedwQ3Jz%2BBCJF4NAiA958DUHD4AmhSS0DhXQU5DLXZaZWUAr8cVPfQp3TuRt%2BcNUjh8t1geUHvc2O1%2BaRZ0%2BEwhV8wUlp1RV3z81kF7twFGslDGPobTgOEVKfGBxf4jKI1ens7J1TXkM&X-Amz-Signature=7f7b680406c97965b37bceccb854549fcb14f908ba2371310ba68e5310817df5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
