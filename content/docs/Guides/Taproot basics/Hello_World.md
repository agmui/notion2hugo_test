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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2KQT42%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn5VoFkPVY6bC%2Be9t9DEfp%2Bfon0PMzkPUVW5HFvoLNBAIhAKYemTWGs0dJP2tZGXPLJNPXAA%2BCb2Uq5VPDA0Tl%2Bu5EKv8DCGUQABoMNjM3NDIzMTgzODA1IgwGCov9686vaneGZ1Uq3APhZphEy8%2FeY6DTJmde%2FdnIUDN%2BmdtLVoA1Y14wKU8GsXir3ge50S5gGRP1%2FsB3FICUE4lUStixrYmJCmpnAd%2BKDjCskTWUKtyC654w6j2II7xsvYpTIUv0iRaHbToIc151risk%2FvovEuo3JRbaXWrsh%2FE%2FaD9cvG2hzHoqiNcLMrTZOV3xrilqURy5cEViM9rb9VqyOhJ9IFfe84XMMLJKdF3HgcUgGHH3OYEWYfj%2BDKZ%2Fa8iTCBXnp2Gfz%2BPfgB%2BRvU1xKF0FCobc%2F%2FZz6Y4s%2FbkRACL5bz1biF1Ib1c9TxCyhgBdZwBXLlazEhchkerUHCgaSZHVHBmPi2AiXrY166WWfo8f6EXdL1j0FqSyl0RIbVAJehTXRsZ8Qwx2OH9y%2B5dPVCqcB1ybQ7uiexidzAT0lOU%2BfnmkleFHhIEoyBi31ZeHujp40TqM64Rk%2F2Ks1VzrLOdzWZdsuTyHL5%2BoYHC8zQPDAd57FZdpwz5Sb1v0L1c1AKmGJb1F5MAbeTpt8dwu60Bl21bJKxpCh%2F5k7xjTC4vN9%2BQs9K26T7aHOC%2FrFutzvK8E61o2p%2FpsMZQXBuGulK2OQp7QAMBflClhDgTCnKN1FbJjt98GLeJYgnb8Jf5x%2FIpVfsGlITDokY3CBjqkAWptfaYZFonbgmy6jJQqUr5wbqGJLrK4aQTzAZFO2gPPfKzySOGPHw9ffcHoCmXqYU5%2BZLr%2B6rSfFwpUZKW%2BwvN7rbB8gD4LapdFXcwGPioAHtZm2lTlXqEUywO9ilnb1Mk7VWyO3BQ%2B6IGwMBFbjUS8FtWlc4m2bP6A8XKGTbVWKv%2B6uTRLGZSYwYABBo2aqnK6Lo78DabhGAXhNfHwueYPbKL4&X-Amz-Signature=2bc9320a6894f0ecb97cfa7d4787c5a825e42243082874e85dad33c68201c12c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2KQT42%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn5VoFkPVY6bC%2Be9t9DEfp%2Bfon0PMzkPUVW5HFvoLNBAIhAKYemTWGs0dJP2tZGXPLJNPXAA%2BCb2Uq5VPDA0Tl%2Bu5EKv8DCGUQABoMNjM3NDIzMTgzODA1IgwGCov9686vaneGZ1Uq3APhZphEy8%2FeY6DTJmde%2FdnIUDN%2BmdtLVoA1Y14wKU8GsXir3ge50S5gGRP1%2FsB3FICUE4lUStixrYmJCmpnAd%2BKDjCskTWUKtyC654w6j2II7xsvYpTIUv0iRaHbToIc151risk%2FvovEuo3JRbaXWrsh%2FE%2FaD9cvG2hzHoqiNcLMrTZOV3xrilqURy5cEViM9rb9VqyOhJ9IFfe84XMMLJKdF3HgcUgGHH3OYEWYfj%2BDKZ%2Fa8iTCBXnp2Gfz%2BPfgB%2BRvU1xKF0FCobc%2F%2FZz6Y4s%2FbkRACL5bz1biF1Ib1c9TxCyhgBdZwBXLlazEhchkerUHCgaSZHVHBmPi2AiXrY166WWfo8f6EXdL1j0FqSyl0RIbVAJehTXRsZ8Qwx2OH9y%2B5dPVCqcB1ybQ7uiexidzAT0lOU%2BfnmkleFHhIEoyBi31ZeHujp40TqM64Rk%2F2Ks1VzrLOdzWZdsuTyHL5%2BoYHC8zQPDAd57FZdpwz5Sb1v0L1c1AKmGJb1F5MAbeTpt8dwu60Bl21bJKxpCh%2F5k7xjTC4vN9%2BQs9K26T7aHOC%2FrFutzvK8E61o2p%2FpsMZQXBuGulK2OQp7QAMBflClhDgTCnKN1FbJjt98GLeJYgnb8Jf5x%2FIpVfsGlITDokY3CBjqkAWptfaYZFonbgmy6jJQqUr5wbqGJLrK4aQTzAZFO2gPPfKzySOGPHw9ffcHoCmXqYU5%2BZLr%2B6rSfFwpUZKW%2BwvN7rbB8gD4LapdFXcwGPioAHtZm2lTlXqEUywO9ilnb1Mk7VWyO3BQ%2B6IGwMBFbjUS8FtWlc4m2bP6A8XKGTbVWKv%2B6uTRLGZSYwYABBo2aqnK6Lo78DabhGAXhNfHwueYPbKL4&X-Amz-Signature=6cf81415ded1cc855b338085bf28bad1aa4eb4c9314ba285e63c0ba8bd738f67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
