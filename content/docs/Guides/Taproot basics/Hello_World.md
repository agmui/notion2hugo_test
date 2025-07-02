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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BNJOVBJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4dSTwRF5lcZaj7fIlhL4Lj64x4r8ovAS8FKVF8D9jgIhAP2ve0Rrt5MuQQ0kKdYyqD2kFCZBMd7XsgFsvwYqz1zAKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVcOGsumNlZmvID3wq3ANbwHasmAuSahpM4XvqUbcwfT1%2BhOIYTo1CjWiiQnbQFm50txuHLTEc9%2FzaxfLU5KDD%2Fu4YABqeHzQTL5cKaU%2F%2B0BwGTehqfIDUg8uVbi53%2B1A2DTrGdiqMJV%2B%2B590MnF5Mz8PF32Kp1E0Px9r7B%2BOvyAt2S82z9IUlIFuMKYc5KjrWmN0z8KZXMLp8yx1GfBhpLeGHG9WqdMzUwesqjisNnebkdVlzdUl%2BfAWpyVZg%2BBu79RoDJSp1ynOmy87UtW8gzRySAxTU39MYEA4pi1ydr6kF3G9E1OtOzTPGfPOu159aAssWlzc2z64jS1L1GwhnXumx%2BEU8dvXMFRhHhM6HUiVrCuj7XorSHw6WvCdx0LOTh%2Btfv22VGUX1LSvI44ZR5RJHVr1tR6i2%2FI3MNQUamkf3l%2B01eDOqALk6BNYV9CA8qvH0sglMBQZwsco9i8toEMMBNfRTYgW%2FLuqwOMXWqh9wtu66CaqJyDcrzY%2BsaPOTk8YToWBVG8ngTb29OFnjhbDDL4krEApaPIL65u7lDRJLBQLuNsFKvRhKtgTSopiLmK1UoXl7bK1O5I5NAmkkHNc0Pv860SWtdkiGhfBMJvi1Zm30rho4%2BvnC6PvVaRLV8LI0OM2q489D1jDFnZLDBjqkAR%2BiQQZ9yU3coVi2ZDL4kYn6NFhwYBVjW8P59mQXpB5BP2nM%2BLYQuyGPRQXBcK9keozSsikAUyxWFP%2BcRV3jVgE1pP9f2LkVJAOIgEZ8adpdd5QKbLFuc3PnKrwPPBdWzaippt5Tf69E%2FmKSjhIMuAXXCfbNqbNA%2BvcKgSsHgJeApMQMTf9GJ2Rj7XR%2FMulmeVb2Uh%2BLphvTGzhToinp4s%2FWD6G7&X-Amz-Signature=2fdaa35144af331725cb12500195b55aea44767f890181379437245d767cf924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BNJOVBJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4dSTwRF5lcZaj7fIlhL4Lj64x4r8ovAS8FKVF8D9jgIhAP2ve0Rrt5MuQQ0kKdYyqD2kFCZBMd7XsgFsvwYqz1zAKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVcOGsumNlZmvID3wq3ANbwHasmAuSahpM4XvqUbcwfT1%2BhOIYTo1CjWiiQnbQFm50txuHLTEc9%2FzaxfLU5KDD%2Fu4YABqeHzQTL5cKaU%2F%2B0BwGTehqfIDUg8uVbi53%2B1A2DTrGdiqMJV%2B%2B590MnF5Mz8PF32Kp1E0Px9r7B%2BOvyAt2S82z9IUlIFuMKYc5KjrWmN0z8KZXMLp8yx1GfBhpLeGHG9WqdMzUwesqjisNnebkdVlzdUl%2BfAWpyVZg%2BBu79RoDJSp1ynOmy87UtW8gzRySAxTU39MYEA4pi1ydr6kF3G9E1OtOzTPGfPOu159aAssWlzc2z64jS1L1GwhnXumx%2BEU8dvXMFRhHhM6HUiVrCuj7XorSHw6WvCdx0LOTh%2Btfv22VGUX1LSvI44ZR5RJHVr1tR6i2%2FI3MNQUamkf3l%2B01eDOqALk6BNYV9CA8qvH0sglMBQZwsco9i8toEMMBNfRTYgW%2FLuqwOMXWqh9wtu66CaqJyDcrzY%2BsaPOTk8YToWBVG8ngTb29OFnjhbDDL4krEApaPIL65u7lDRJLBQLuNsFKvRhKtgTSopiLmK1UoXl7bK1O5I5NAmkkHNc0Pv860SWtdkiGhfBMJvi1Zm30rho4%2BvnC6PvVaRLV8LI0OM2q489D1jDFnZLDBjqkAR%2BiQQZ9yU3coVi2ZDL4kYn6NFhwYBVjW8P59mQXpB5BP2nM%2BLYQuyGPRQXBcK9keozSsikAUyxWFP%2BcRV3jVgE1pP9f2LkVJAOIgEZ8adpdd5QKbLFuc3PnKrwPPBdWzaippt5Tf69E%2FmKSjhIMuAXXCfbNqbNA%2BvcKgSsHgJeApMQMTf9GJ2Rj7XR%2FMulmeVb2Uh%2BLphvTGzhToinp4s%2FWD6G7&X-Amz-Signature=401cb3e35d375b4f226216d92eddd7f485720820ae4d5723fd7798d537f4f99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
