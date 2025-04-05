---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXJCAXT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzqItz6f9KhSOyc2suCw%2FW%2FP4UpsjUpWwtYAbU9WY1gIhAKsKjSD8UAyij7Vqm66%2FMS1svuLqKXNWysFI1uq2bXxiKv8DCCgQABoMNjM3NDIzMTgzODA1Igx8b4C6WKmYzQwoKWkq3AOqz6mrBGkqD%2B7vWVymAxk5pLd7jFek3j74%2B4EkBzKuspNkYs49eHHf2%2FsvrkLoAXpLPq364tKz%2BNp2%2F6H0cAbhJMJDZc6Pwv5WJWU0HtIzEPBuCx0nb5%2FyZNYw%2FszFVx9JNGYO74WYNjCOJODPXPeTZIGLByeT6bwRe2keRHA9438EdGvGTD5LDOJvdxV0uXGgUlIw2ldm%2FxNoYWRl%2BQxUxNd5DfeQ8%2B8P5ytBFJeQDaXct5llULUx6yShF8DsrvtuU3jp%2BN3wa2FA5H0FAZPnNU9hQSvk9PfnT2EsoQGXtfHC7NTAO08QMjydtYp32UxUa6lb6VqO4Vwvhmt0acwqnce%2BuLI5c8Y9893GufaGj%2FGkHEIVf11W16wxGbdNFWeWDmo%2FAeC2srHC%2BEujOalTQ5%2FQxGJuJjKFzaxb6S3D62xKfnjhbQYxMDkbY1hmBtAPShoW4i2mmmmB4FoY4KwdJqjp%2F77%2F%2BflLhn7nhiTqCa8iS%2Bl3nrsXVnJXBi%2Bz5POh0Ha9Aznd81o3YpE5bm4T%2FNWoXZcQu0ZzFmOBaizQlesO6Jz8Ps518l1Wj8e9P2Lk4lmT6nhw6qpAKAvjBWWNNDAlEt%2FI2oBT58y3rKtHaHeFj1AEOwMgr6HMFzDlocO%2FBjqkAU1B9A7LfP6O9EGcis2F3PqPu5A1sXF0DGuSMsYLvuZ47HToq%2BaWSlRW%2BBfWnKEfFMPzqimDeD7Z6JiVxiiczwt21Jn9L99cmOuM4VOlZhWk45qrwdtm3oHkj1mMjCdJDGYyWXqvDuNfsJ96pGl6eiu0EFnfZd7wEozgIAnfzFKitoaSJOFFkVjMvoSjipqwMwF1JAw%2FHIFokRHI%2FKloIwvKedgo&X-Amz-Signature=ee6a68fb849f706de5a0b8c6b045dfe6180828475d038a06e10f3fe9f3d69c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645D54I3S%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWeqZp6sQXDh%2BBRoad8u2OW2cO2RpNVEfF9CGq%2FvlR1QIge6Jo36J1wc484o1Rfr3E1tvuZfnqt01OHuH%2FJ0X%2BQOkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEKR66jq5rbQaAD51ircAzCEHICMyjt1oT3E39%2Bh%2FEdp%2F4wOA0U1sSFnEVqj85QxvUM4EC0PIOMH1KryMdPCnTJ0pPA5tKzecRExgVsCyBnYH%2BYOfzdaLlIH1pxGF%2FRcHpXWc%2BoxxX%2Bba%2Fye%2F9zBEBsdr65Knd3QY3dZIMUdqcnft%2FqTi5X0sz8VOQkUEyt5Aygdwjgh3nNsxnlS3v3kgo%2Fep%2FQXWekiLEs%2FqemCixEDEy0ayxGC8xHWP0%2F6NeGyjbEACZ6VRfu9kv%2BNIhpayyyERij60eheliCo5wYdPtfCnMwZYz5kQG87cuVuyAZvJO%2FM7XDHyt4rorsOyYvJ6BWuwK42R8HpqZhn2LA4JA1Dl%2FOKuUUORbrrK62kD6okIMHPiI0H4%2FZ9NVV%2BtZFppzSp7x8TXRpCxr3CdaDAbhFDm9qkvXuPQHBz7FJ5n5hvZXbXVuMToDjPIdNAaZw866OynYhNFeka4jmG4GnKlKNm4W0cEN5mfmPEwIJHg%2BVdDcxM8kVepHXomQn%2FrqY54WTlET9z00%2F4l4I4B%2BIblteiFpqMsd%2FLCOhnyNvSoOYmyoZcCVv%2BIUSili7N80Hzknleq30l71ywdw49E8P%2FBB9nNBO%2BJFIoJ6e7ZmVLXaThw2wT55PPlC8Wp2R3MOShw78GOqUBXnOWTJy3qrfJIJd6AsUWgyKd%2F%2FStkG18v33xXUL4SjF4Pq6ejRgkiIzEsbO7IRD0csmPbfwYlh28eAOfKoG502%2FpPiVi%2FsS0kM79L9b%2FTPk5F8KolOWWH3RPQVmG7MPF7wsOTDfd3tk5HoVAqK%2BubsrJW5h%2FAkQWcz%2BXIseB5TCj6C6uLm6u5nkqS%2FTm53kap5ytRmYmde0J1WYIOgRbYoebDO6w&X-Amz-Signature=6b44cb33c243ccada436f409f740210ce1c55f676eb0760d0d66f5c10a3feb61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
