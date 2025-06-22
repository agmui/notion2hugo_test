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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAF5FS3S%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICAmSvPP6zmctNHzJ%2BvOKKmPmKaISF1jGM0JLr6iJ5yfAiEArLjQcPCd9dJfVTiksPubCnVzftd8AkN6Jo8kpfV4tyMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZeLMNFdGbz288USrcAzM3BupLXBf54L%2B%2BzmSAA4Ei6FIZ%2BsZamFRV95j%2F9RbDQoRRT%2Bo%2FciwuN5p3n9XNgIJy9E35l2T13nW0uyrHqaAwNqsg83HKp4q25Bq59Z4TQITyb0vbIpjtN6hnHSo%2FLv8Ixy2DTsCQ5j6PsZDabzoVc1iCDmyvRsR6Fi4C84d5pi%2B4DTBclO5Gc25SvMCSmNom5Pzqy3ttprCoy7zg8EIafEc%2F6e895PvHrGCOJzy2pUq003%2F8YmfTD22NFScaJkVIgEt0BQe4iCHO22umV7ZjcJsziv7SiQcsEwC6y4lDKoAKys9uDnpgaZrvutBO%2F9SXcwH%2FTuppWWFtHr%2FcmG%2FjIDjsim%2FxALPh1tVX9BRfHY89uatXKgnN6qRH25PEIKIL%2BDuIDxb3ydf68%2FeM8Pxzpy6BhWr%2BMuqH3oNVLNPw462IbSAnSNyoiTamgMuKbuStVIxTnaxYyqAnNoetHo4olnRVItOk38TEiMcmvnlqDlu4iebc9KBfhjqYeQhbeRjMSpnPW%2BnHK2kRIxYzDVdqLLf3%2Bkme%2BDsjvA2fwPotQWXytmEV3hjPrMddzS%2BGlDB9fPFFVmbal6yBjr7Lq%2FeIZutKCpLhZs18PZhFwc3SM5eZ8Sv7yIaRWEfBMKDP38IGOqUBWubkdT36Po57fi1yYLHj2IEIImnqH9WQwpBGmoiBQhAV5rCAYtDHYDefP3A3asK4IlTpg01uP0c4amljH%2Ba82salTB7I%2FODhDz0YyL4jsPkxL%2FPgW6beibwCWPfy2LcI1uUkQF0Ug39KG0rIYYg%2BLiANOAcCciQTOmhOKmk43kUtYHsVl7z8385B4sQw0ruShAug2fVCzNcgpAI2L%2FPHLAxf5jtz&X-Amz-Signature=10cbd17a2f7057945f6aa9a978dd146ab10ff234c0f94045283828a8471ccaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAF5FS3S%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICAmSvPP6zmctNHzJ%2BvOKKmPmKaISF1jGM0JLr6iJ5yfAiEArLjQcPCd9dJfVTiksPubCnVzftd8AkN6Jo8kpfV4tyMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZeLMNFdGbz288USrcAzM3BupLXBf54L%2B%2BzmSAA4Ei6FIZ%2BsZamFRV95j%2F9RbDQoRRT%2Bo%2FciwuN5p3n9XNgIJy9E35l2T13nW0uyrHqaAwNqsg83HKp4q25Bq59Z4TQITyb0vbIpjtN6hnHSo%2FLv8Ixy2DTsCQ5j6PsZDabzoVc1iCDmyvRsR6Fi4C84d5pi%2B4DTBclO5Gc25SvMCSmNom5Pzqy3ttprCoy7zg8EIafEc%2F6e895PvHrGCOJzy2pUq003%2F8YmfTD22NFScaJkVIgEt0BQe4iCHO22umV7ZjcJsziv7SiQcsEwC6y4lDKoAKys9uDnpgaZrvutBO%2F9SXcwH%2FTuppWWFtHr%2FcmG%2FjIDjsim%2FxALPh1tVX9BRfHY89uatXKgnN6qRH25PEIKIL%2BDuIDxb3ydf68%2FeM8Pxzpy6BhWr%2BMuqH3oNVLNPw462IbSAnSNyoiTamgMuKbuStVIxTnaxYyqAnNoetHo4olnRVItOk38TEiMcmvnlqDlu4iebc9KBfhjqYeQhbeRjMSpnPW%2BnHK2kRIxYzDVdqLLf3%2Bkme%2BDsjvA2fwPotQWXytmEV3hjPrMddzS%2BGlDB9fPFFVmbal6yBjr7Lq%2FeIZutKCpLhZs18PZhFwc3SM5eZ8Sv7yIaRWEfBMKDP38IGOqUBWubkdT36Po57fi1yYLHj2IEIImnqH9WQwpBGmoiBQhAV5rCAYtDHYDefP3A3asK4IlTpg01uP0c4amljH%2Ba82salTB7I%2FODhDz0YyL4jsPkxL%2FPgW6beibwCWPfy2LcI1uUkQF0Ug39KG0rIYYg%2BLiANOAcCciQTOmhOKmk43kUtYHsVl7z8385B4sQw0ruShAug2fVCzNcgpAI2L%2FPHLAxf5jtz&X-Amz-Signature=59cd6beda519bb85b1f4467219abcef9944e2c5642cea2c05051e8cbdfbff53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
