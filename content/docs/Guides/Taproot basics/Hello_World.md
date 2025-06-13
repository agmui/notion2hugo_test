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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYY4YTV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDip1RugjX3W7zbqTQqBSHdBGiqug7SLnja4jbx88GSawIhAIZuJ4uASGUGnM1S85l%2F6Ux5a54NQyoHJEKhbB8ejUZ%2FKv8DCBsQABoMNjM3NDIzMTgzODA1IgzzhFHnywmmQYjyMocq3AOKCDpBY2WSK1nTBFfErzf9G4ua3CEdxxyurjzpNH4FnYNe4n9GWQvotkrQz5glHvHsxERVJ%2BQQag0wDaCFoMMYiuoIS1TaTvR0mnt6j2m9cHu1O%2B5OubGHhUJbsMGSKC%2F%2FjgsGLDqhqrAtknrgjFKNLl7vLhJrw%2FeaWrg7czHOffVYurfNposgE83tvqPgvdyfOFyq4%2ByXQVBv3meDQ6axdwWNm7qzU%2BPG%2BL2LyDf5mcHV6kYjnao2Q90g8SA49336VKbJNWUMsVCcXgkJvuDeAenKecSVx%2FEIRcpfk5zpev6D3v%2BYq%2BaquNDkKb2TkprkcG9xb%2BpWAls%2FUhhfVSnbplIIpWCUhMnbLK7YjmPTAmAzI0N2PScon1yrOqzFpKPwdtAm4R7T5rYRcLpP%2FaUktTDlQAMw8n26Ri0ZkhzNFvxNEdhbH1K28k1yDPcSRmZuRcRF42Gb3ypasc88Ts%2BcBOfIXUcKLPLHD48V4ZcazE6akqR6h%2Bne5rFNTp4bWATZffc6GlnPDvptaCcotoQPncBc8Q%2BK1gCdckr1caIDjTEIpKWAwwzG7axCup%2B35W60cyRsfk0oZ4JWDxZI%2F7nfy1hoBAX77Sg9wV%2BeU%2FemLZWbVT7Yay35aAN%2FUTC90rHCBjqkAavzQIqfME7D6uNi%2BnimJwUnQcSZ7WYqblEumG3dbeyphH%2B%2B7aJ%2FSNSk7vVaffn1lCLwFqfcBb4KoFauG7cYN7I9G4zS3JKypBGjpS0%2Bovb%2BGd%2B%2B4rjBL8nDFqg0wfxG0%2F96PYREPMs3mvkx%2BpPBpQk1EexTsB4aeB2HiOorCQjguail77HoK8%2FvgcpRRQ0BFQKRDGiLNfogoTr8hcP2FriL2gaZ&X-Amz-Signature=d3c323381b83ce96ea4948d5b999ab238292271a301872f1e26ca3354eb44a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYY4YTV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDip1RugjX3W7zbqTQqBSHdBGiqug7SLnja4jbx88GSawIhAIZuJ4uASGUGnM1S85l%2F6Ux5a54NQyoHJEKhbB8ejUZ%2FKv8DCBsQABoMNjM3NDIzMTgzODA1IgzzhFHnywmmQYjyMocq3AOKCDpBY2WSK1nTBFfErzf9G4ua3CEdxxyurjzpNH4FnYNe4n9GWQvotkrQz5glHvHsxERVJ%2BQQag0wDaCFoMMYiuoIS1TaTvR0mnt6j2m9cHu1O%2B5OubGHhUJbsMGSKC%2F%2FjgsGLDqhqrAtknrgjFKNLl7vLhJrw%2FeaWrg7czHOffVYurfNposgE83tvqPgvdyfOFyq4%2ByXQVBv3meDQ6axdwWNm7qzU%2BPG%2BL2LyDf5mcHV6kYjnao2Q90g8SA49336VKbJNWUMsVCcXgkJvuDeAenKecSVx%2FEIRcpfk5zpev6D3v%2BYq%2BaquNDkKb2TkprkcG9xb%2BpWAls%2FUhhfVSnbplIIpWCUhMnbLK7YjmPTAmAzI0N2PScon1yrOqzFpKPwdtAm4R7T5rYRcLpP%2FaUktTDlQAMw8n26Ri0ZkhzNFvxNEdhbH1K28k1yDPcSRmZuRcRF42Gb3ypasc88Ts%2BcBOfIXUcKLPLHD48V4ZcazE6akqR6h%2Bne5rFNTp4bWATZffc6GlnPDvptaCcotoQPncBc8Q%2BK1gCdckr1caIDjTEIpKWAwwzG7axCup%2B35W60cyRsfk0oZ4JWDxZI%2F7nfy1hoBAX77Sg9wV%2BeU%2FemLZWbVT7Yay35aAN%2FUTC90rHCBjqkAavzQIqfME7D6uNi%2BnimJwUnQcSZ7WYqblEumG3dbeyphH%2B%2B7aJ%2FSNSk7vVaffn1lCLwFqfcBb4KoFauG7cYN7I9G4zS3JKypBGjpS0%2Bovb%2BGd%2B%2B4rjBL8nDFqg0wfxG0%2F96PYREPMs3mvkx%2BpPBpQk1EexTsB4aeB2HiOorCQjguail77HoK8%2FvgcpRRQ0BFQKRDGiLNfogoTr8hcP2FriL2gaZ&X-Amz-Signature=dec4f626059201142f40394c825db1abd2f95546790b2bc5ba332ce3111adf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
