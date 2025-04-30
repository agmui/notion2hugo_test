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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCFGALF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCjlh3LPAZkJBnEbQHcNb4O7hRNF%2F8II5CaCXUqeR7HXwIhAOdHdZBBfFQr%2FRbqoToTMjc%2Bao77PKpTfClvkCYD1SJtKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAZMjerJ7cabef%2Fcq3ANRAOK5hb6T9eqIzMt8bh2lRbIH9pt4XvBVZ%2FTcN2fmEC3YdEPjY75kyoklazDO%2FjgoOYIiJd32NEzo5WOjJGoF%2Fadt7SqYEpMRVx7uQlu3i1mzFvNgrnS4JgShgiUzpmt9WD%2FrvjTvGqyDcJ7p0EAFkKR0IjddD0YWoxU3gZb%2BPbeiZtSf3OFpg8zCTleDw5iyAdwm1vJkJ3fvV%2B6Aba5IfwR1ha3MSCWmG4WxFQ1DebxYqsLCPR1KLDyfZFEQj%2BvxLVwG96v%2FsOqV31kpR3hNujEWiapTtLLF7Xhc72i5LPmfs5HDGy4w%2Bk1Kx1CGEkZdzRk9bqu3sgbg92jnJtERawuUbhFrz7XUsD6NX3g3665Wje4w%2BCZw5L2uxMa0x4RNiEXplr4%2B4vpqbwbCUN439BV23%2Bc0OWrMRsIvYaPypXJ0%2FoSbFx2gaV2oYJko%2BRGRUGn5KsRELVXnqTES75Njq43f%2BFSFjP7e2CkRSEnV%2BdyeU1pMOCQNach7iDIHFIySBJvbBI2YJb2B6UWjqXYLoi%2BHCdAl6azg9f0Wd7GcdBbgwVx9aKlhOSXky4cOqIG4tEw1zaqIU7fVFk6P0aZOrUhcj6x%2FqlfnrBrb9kkB6lh63tBsECT4zwxYyjC6h8bABjqkAWtBXWNzwKCpbpOfyA%2Ba2517chU8DrxggwkJmLIjyDHsXa%2B1n275dIdGO6MPt4OATHz4Y59Dg%2BsODN3kzHuioUuxti3uJWD02sK%2Fnrf%2Fdk94KZklnmWfo2YQFHt0ZnDas2HvhwW5TP6cymON8sCEBUrKEKMjWo4f7zE%2F1Y%2FWrgamAGOVwl4faNGmyUpC0iVQsPa8B3ZZNV9EtwTTwkUQOyvg3qoM&X-Amz-Signature=3a514a5398fab4bc6af7678359201025025f62a63db5dd45f72f77a39cc51400&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCFGALF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCjlh3LPAZkJBnEbQHcNb4O7hRNF%2F8II5CaCXUqeR7HXwIhAOdHdZBBfFQr%2FRbqoToTMjc%2Bao77PKpTfClvkCYD1SJtKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAZMjerJ7cabef%2Fcq3ANRAOK5hb6T9eqIzMt8bh2lRbIH9pt4XvBVZ%2FTcN2fmEC3YdEPjY75kyoklazDO%2FjgoOYIiJd32NEzo5WOjJGoF%2Fadt7SqYEpMRVx7uQlu3i1mzFvNgrnS4JgShgiUzpmt9WD%2FrvjTvGqyDcJ7p0EAFkKR0IjddD0YWoxU3gZb%2BPbeiZtSf3OFpg8zCTleDw5iyAdwm1vJkJ3fvV%2B6Aba5IfwR1ha3MSCWmG4WxFQ1DebxYqsLCPR1KLDyfZFEQj%2BvxLVwG96v%2FsOqV31kpR3hNujEWiapTtLLF7Xhc72i5LPmfs5HDGy4w%2Bk1Kx1CGEkZdzRk9bqu3sgbg92jnJtERawuUbhFrz7XUsD6NX3g3665Wje4w%2BCZw5L2uxMa0x4RNiEXplr4%2B4vpqbwbCUN439BV23%2Bc0OWrMRsIvYaPypXJ0%2FoSbFx2gaV2oYJko%2BRGRUGn5KsRELVXnqTES75Njq43f%2BFSFjP7e2CkRSEnV%2BdyeU1pMOCQNach7iDIHFIySBJvbBI2YJb2B6UWjqXYLoi%2BHCdAl6azg9f0Wd7GcdBbgwVx9aKlhOSXky4cOqIG4tEw1zaqIU7fVFk6P0aZOrUhcj6x%2FqlfnrBrb9kkB6lh63tBsECT4zwxYyjC6h8bABjqkAWtBXWNzwKCpbpOfyA%2Ba2517chU8DrxggwkJmLIjyDHsXa%2B1n275dIdGO6MPt4OATHz4Y59Dg%2BsODN3kzHuioUuxti3uJWD02sK%2Fnrf%2Fdk94KZklnmWfo2YQFHt0ZnDas2HvhwW5TP6cymON8sCEBUrKEKMjWo4f7zE%2F1Y%2FWrgamAGOVwl4faNGmyUpC0iVQsPa8B3ZZNV9EtwTTwkUQOyvg3qoM&X-Amz-Signature=46dc1314a707f317da81a02fe0293fcd0580ca5c49b83e7eb8c6c1ccb758964e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
