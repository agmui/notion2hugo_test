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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JL2DHNO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdeVc67VSV9sShzNIgcUUjutsaMCNi6bNN4pCHVi09HgIgZGZVtpfO8yGVUnEkLSDCnEdekyDVvbZvqUPLU%2FO4Ag4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEZmIeoopvOyO%2FhQbyrcAzclIcxQnnfSNqBaPVUJAWIH1QC%2Bs5qjhDyE%2FcWkw9MMMJ%2F5ogBDBARmpmWG49lQYXveAxOo3z1P6rzCc8LPyQTrtj%2Fj%2B%2BOYYoH6Ge%2FWce75mvxl%2Fk8bLulJbjGCyQ5FqAnzEOPt2V1o7nCAItkDaKzLEyIYtv9LJUQmwmLOi35xesaIXVkwZQEuoCq4YN2Blld5Ri7U3qMdmyD%2FA4UvyCwKA%2FxPWv1wA5AnsenVTqHeZ0YiHBBHvLBqpPJfe%2FEkWjIGIutrOpg6yrx81ibiUT9l%2FVoPb4PNC9u%2Ba5lFhnh8ZQm0qk%2F18coxnaPDsx3g5Yi6oO6t1qli5GLMBY6dwPYgcjx2BS0eeHo5UoMMPPJX3MZoIpoF34vPs8yvGBzH%2FWjyeHtWNX%2BwBk3cuPcZU8PRGDKfHa3ktaKQgCuOXQe6cHFPQdPugxGUBOxat576ISp1k%2F5E4PCvaAe%2F55JIi%2FVGRwciPUaV%2Fzfhasde3%2Bg%2BaKP3KHozSyCNM09w20wbm%2F3YiQ3qzv7VqyOuoWVpON2gAkDv5Q8wgAhQxSwCLh9GuyK6KltsBLOcyQTY5pu4shE8muqFykJtVoDd%2F6FQv9R0L5fxFgXy7Qj1MwDCuTmFUHgh6tBPCNZWuDSzMP%2Bmqr4GOqUBuWCa%2FZSOvJg7kQCsnd2BbPaIhV1O7amXQ6B8RYVc9nPAF3nOppLIgSiVuTQFepl9IIjrnxDubqfFhgs1NyWDB%2Fx4Tk%2BISzOEkSDzk7apB6cwHqEZ25IdAK7iOVvIYEPVeKSMKwJW4KDqZEXCBxzgIEfled0MfOTA9Oar%2BChO6K0c24o2x94cR8IBwbMhWfrj4w7y5MnLmN7BP4FYYQSmTt9knTb6&X-Amz-Signature=d636274e3df9550306a0da93dbbe82d238840609d573c35622213600e5b3f64f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JL2DHNO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdeVc67VSV9sShzNIgcUUjutsaMCNi6bNN4pCHVi09HgIgZGZVtpfO8yGVUnEkLSDCnEdekyDVvbZvqUPLU%2FO4Ag4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEZmIeoopvOyO%2FhQbyrcAzclIcxQnnfSNqBaPVUJAWIH1QC%2Bs5qjhDyE%2FcWkw9MMMJ%2F5ogBDBARmpmWG49lQYXveAxOo3z1P6rzCc8LPyQTrtj%2Fj%2B%2BOYYoH6Ge%2FWce75mvxl%2Fk8bLulJbjGCyQ5FqAnzEOPt2V1o7nCAItkDaKzLEyIYtv9LJUQmwmLOi35xesaIXVkwZQEuoCq4YN2Blld5Ri7U3qMdmyD%2FA4UvyCwKA%2FxPWv1wA5AnsenVTqHeZ0YiHBBHvLBqpPJfe%2FEkWjIGIutrOpg6yrx81ibiUT9l%2FVoPb4PNC9u%2Ba5lFhnh8ZQm0qk%2F18coxnaPDsx3g5Yi6oO6t1qli5GLMBY6dwPYgcjx2BS0eeHo5UoMMPPJX3MZoIpoF34vPs8yvGBzH%2FWjyeHtWNX%2BwBk3cuPcZU8PRGDKfHa3ktaKQgCuOXQe6cHFPQdPugxGUBOxat576ISp1k%2F5E4PCvaAe%2F55JIi%2FVGRwciPUaV%2Fzfhasde3%2Bg%2BaKP3KHozSyCNM09w20wbm%2F3YiQ3qzv7VqyOuoWVpON2gAkDv5Q8wgAhQxSwCLh9GuyK6KltsBLOcyQTY5pu4shE8muqFykJtVoDd%2F6FQv9R0L5fxFgXy7Qj1MwDCuTmFUHgh6tBPCNZWuDSzMP%2Bmqr4GOqUBuWCa%2FZSOvJg7kQCsnd2BbPaIhV1O7amXQ6B8RYVc9nPAF3nOppLIgSiVuTQFepl9IIjrnxDubqfFhgs1NyWDB%2Fx4Tk%2BISzOEkSDzk7apB6cwHqEZ25IdAK7iOVvIYEPVeKSMKwJW4KDqZEXCBxzgIEfled0MfOTA9Oar%2BChO6K0c24o2x94cR8IBwbMhWfrj4w7y5MnLmN7BP4FYYQSmTt9knTb6&X-Amz-Signature=7762eb8efba2b0cfe5a27b8bb58978ced3036cbc00056d4694ba4f1fd9b4e1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
