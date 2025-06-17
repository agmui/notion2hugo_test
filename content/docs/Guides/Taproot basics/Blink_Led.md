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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OJP3TZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9zxB%2Fd3SYMfQ3Hy7V2gETUl%2Fm%2BJ%2FRivaKkOOR%2F4I4QIhAL0c2RgODGX2W3QUw3aib0ntqmpn3Vr6Q%2F%2F%2FWoJFEeMOKv8DCHUQABoMNjM3NDIzMTgzODA1Igzex9xI36oFEVRy5TEq3AMN3Z9D0DOZNELG9k7tJ%2BPdqHJzcWmwqLvprZZgyGM3i15HSbtJzbU%2FDGownN9%2F%2FCJ4cgSC2xNdMuUuUsSfOj7K52JMakN7ubXawdbb8uHeecf3nb8f0LUj0ibqepQgvaX9CJEsI8kKT6S2w%2FH9IOD9Ids9Kq7ujiCOmZvJeqxjHhd2g2E7qne7s832OGM%2Fd671XhpnNbMgdBzkgG57HkPsyFpyaZNt70N%2BI8yhulxdWHBy5se8m3p5HsTTwm9Jn%2FcYOYmRVu76MvwC72MuCFlioDW1HJgMhJDx37GYNXJLfAkvp4Vf4nyULeM2Bq7BqL%2FWW2nq6crrp2PqZ4U8w44RWKvs9Y3HoJeYaJ%2F2XJdrKoiXh5pdS%2FlLgYtjKbkeSMLgogIQV6zGOlsGksT9JLKiv0eJcZ%2F%2BTfStmL2%2BsCpEkGt%2FeR8mRlgRKf%2B7FNfEB7WQu7M8RVPSM5h0UgSTK3Ynx5A%2FIXDrf%2Bb01zW8bYEA0mceW9jd%2Buhsr8O%2FwI8y19QF%2BoarUyfVIT3MdXa5C0lF1Hc71IidHHBKMPEkiBwg%2F%2FAA6W%2BjwjrZXi5dxPgCjoRhC6FMskhVbGBzLSplppnYf4aXVOmb3H9TqhhbTLYpdJa2U7E94TK%2BvVKBeTDGpsXCBjqkAeFO3mP4yPKWxHq3g8A8m0U46lMGXZQJCsAOzD7hnnJ8%2B3NWtU4npv33mk9OxaT%2FoihQzqMfh%2FHldApK2Nw74xeVXl7RwQtaHc0Pfalaqh3t2xXNGCl7NWorMoIKCjERR1DSzgcVhTh0XL%2FdKPYoxM9RSyLf8jIHGDAX%2BrCPB5T219O4oeBIxk81v7liFy73VGUMN7wpWk9Kx4VDXvZQXuw5%2Bk7A&X-Amz-Signature=c5d884c0063afebb96227103bc6ab2048309f20b7deef8b31b6d6f0ab55ffb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QILZDQ5J%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMlLus4HehmGsWosGHQIEaMAgZNgVuu8u3Mtu9%2FK1xdAiEA0ZwNWwNL3syrJkZ3abba5BP08ltCdAan%2Bfhckev18DYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN9aWcUt4lQwb7h5hircA7IhZxbX2ynwbh%2BQdm7EeabaeK3QIrpA00zZ8Wepe7UCXhtaA3S7sNsH6NeMTcQOj7HmRsEp%2FTIzRemV3E0vdwYQSWwsLFg%2BExR918OBUFSiQghOvYt1VUWpiJA6rU0t6B2leMaqQNiv5H%2FYFO9hBDkwEe6KQ34DhXbAQMiT7todv6u%2F0NGcEPebGmMLnkoTHgE%2BIV3qpeZKzJCbXGCQVMsKfURKy3aGnCpL8qx6suLHyjeHlByrrWRp0K6hTRDtV6DYdX1XG3CNrE9nPs1PeDQEsH2YHv%2BL58Nl7BeGPFEexgjeFPPgiO%2F3SwOECDQrB5%2FY3qGcth1jnU4x7CqEpgXBh0ddm8DTuFWPFFLn%2FaTk%2BiFrHR7pbhpxJ4jsA%2FJ2U2VXAGAeJVN%2BgrnId1wg9vFadfLfzAeV9eCc9o7SbateX0T%2Bcb9sTgUsj22GqwAL3i%2Fg3eB6a2KlMs%2BwtrA%2BW1Z1%2BnA9XMCaDOSULonKQ3Scg8dryZrviBGf3%2BcyoRP4l5LhzeaRWz5ur1r2A4PV7vrJcg4kYbpcoepQhC%2FM5UcEKka1XdgpmtUxw168EKYb9fNaDDyeSpMu1h6dLqZeL%2FZg9QA%2FISQyVfLK0fwLdRLQJTq9iOypdsj7cUrbMO6mxcIGOqUBtl1oG4OETSJ2rprhtqIKRFzJ382SU43dJbBwjK5YoQchfGZyVyam3hlS7NivBNmRXvdnkYJvG5zWnYXtUnGIijtBfHv5IgOp3r%2F2lwWAvhZnVpeshavMBTEepQbjREKsywsopjGk%2FM%2F5AK1K5fgwVIdjuFtVF6%2FaOWs552vWGiOYqBzxN3UJW2syWc%2F9saDDszhmMM92nm53aTR0ZtIHiFBvfYtV&X-Amz-Signature=b633a03ab605f2f8a5881af784bb1e76892f2e45f20b7cbadbdbdb877d45bff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
