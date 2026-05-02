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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GHGSN7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDjW7ctgHBj8%2B8wJ0R8LwbAgDaTf%2FEyChZN4IPENf68JAiB6fNHHCsyxXo7yNZLb6108EzPiEzHLPJ2EEpBDl6y7vCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMB0EWyZt%2BnD2X1wENKtwDCCR7UYSoGAKidUOe%2BakQdH1nVwC9fCMexF1qRjTed3fBekdIaGNQy1HNzjZFq%2FKW5Kf2D3Icw8gVb84Ua3iLPKleUHJrmsLKULXzlIpRIqdULL5NfKRQmUZmuIaqjWWT%2B0%2B%2Bw%2BbKlOtl9jhzCGerxc8yiqwRsSQ%2BfM5euIGERMSN3MJqaMNwvMfxLieU6beu3mZFdrhqNrEEA9EZ8EYZ7iLeKEASZviL3VKd6yCkSirefR171yr8F09x9Ql1o4F1ILRsQDL%2BKOgn7ysNAHKZv9KlQ5%2BNZjaIPA629zbCRNWR6MonnHysKLZeNrgiK%2BVNOb3XypeMWwCpEoXnbyrImicAkuPtaLfqLKgZzab43hhxcQ%2BGNFlRhP1QFbgnP%2Bz0ZSX0DtWkpYQfdwCzMIlvJAhP22ZvT2D8pe3GtcfPEhHBYBfV0W6dVEXo2j1D%2FsJhH%2FLOZw%2Fe8ylalukKC%2FeJYStpsP2hvjuLIIQTflBcyCm%2Fjq5lw8Gh053NThrwyPMiFw%2BYoQihSRAFqeexMsRvNS2ISlnHketez3%2BowQhdZbGmdV22KCrXZtwq8qiezc5Z2lOotYUbWrAHJT0UOqeh4GlcK60jHuz5xcN3ZSZNm14r5Gwuz8jgERKCyEswr8nVzwY6pgF9BbT7MMS9GA25q%2FmXiptzmI0Y8fiZS2tzp6hWq3J435UIS1iWolg8bJziqYLaTVoNx8P88BtFjdJWkCdlPD9QnphjWhlm2J5cg3Pdk4S01gtvD%2FwEqRMX7usEgGQKblY4FINU5TA7L6FUdKjfxsNE9f9kObjzdj%2F6Ep2t%2Bd9eANVWx4Iju%2FP1KKUlkF203p7c1ter2kgnM3KSdRVYfo%2BlzucaRBXq&X-Amz-Signature=de43eb74c9d8bc774c63ba372694233108eea7064d4c1af29bc31ee66b88ea8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GHGSN7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDjW7ctgHBj8%2B8wJ0R8LwbAgDaTf%2FEyChZN4IPENf68JAiB6fNHHCsyxXo7yNZLb6108EzPiEzHLPJ2EEpBDl6y7vCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMB0EWyZt%2BnD2X1wENKtwDCCR7UYSoGAKidUOe%2BakQdH1nVwC9fCMexF1qRjTed3fBekdIaGNQy1HNzjZFq%2FKW5Kf2D3Icw8gVb84Ua3iLPKleUHJrmsLKULXzlIpRIqdULL5NfKRQmUZmuIaqjWWT%2B0%2B%2Bw%2BbKlOtl9jhzCGerxc8yiqwRsSQ%2BfM5euIGERMSN3MJqaMNwvMfxLieU6beu3mZFdrhqNrEEA9EZ8EYZ7iLeKEASZviL3VKd6yCkSirefR171yr8F09x9Ql1o4F1ILRsQDL%2BKOgn7ysNAHKZv9KlQ5%2BNZjaIPA629zbCRNWR6MonnHysKLZeNrgiK%2BVNOb3XypeMWwCpEoXnbyrImicAkuPtaLfqLKgZzab43hhxcQ%2BGNFlRhP1QFbgnP%2Bz0ZSX0DtWkpYQfdwCzMIlvJAhP22ZvT2D8pe3GtcfPEhHBYBfV0W6dVEXo2j1D%2FsJhH%2FLOZw%2Fe8ylalukKC%2FeJYStpsP2hvjuLIIQTflBcyCm%2Fjq5lw8Gh053NThrwyPMiFw%2BYoQihSRAFqeexMsRvNS2ISlnHketez3%2BowQhdZbGmdV22KCrXZtwq8qiezc5Z2lOotYUbWrAHJT0UOqeh4GlcK60jHuz5xcN3ZSZNm14r5Gwuz8jgERKCyEswr8nVzwY6pgF9BbT7MMS9GA25q%2FmXiptzmI0Y8fiZS2tzp6hWq3J435UIS1iWolg8bJziqYLaTVoNx8P88BtFjdJWkCdlPD9QnphjWhlm2J5cg3Pdk4S01gtvD%2FwEqRMX7usEgGQKblY4FINU5TA7L6FUdKjfxsNE9f9kObjzdj%2F6Ep2t%2Bd9eANVWx4Iju%2FP1KKUlkF203p7c1ter2kgnM3KSdRVYfo%2BlzucaRBXq&X-Amz-Signature=cad36eddd64dcf3f726e632e4894510696b10aa64c32d4d77b5fda0b28dd2233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
