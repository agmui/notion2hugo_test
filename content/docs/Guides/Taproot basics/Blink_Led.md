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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMLYAM4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGcNpsErMJxcDc7MDjc3ZZ5aXxDMbe4BluNxGbRu4lmAiBEEjWAawaNPg91tzcYeFKFLe0jP541j6d6cO2QUG9toSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72mNDhyZV7Mrrx7tKtwDMQ9hOpRlm03uT5BHkIsInj8rrfCoqAnoMhJrNCumFwAsHOg7Q1GONzsSISQbKxo4YlZ2gfNiFLZbj6sKJvJcM993u3pYs2arU47v%2B9v3msnmok3VDHcmgjmbIgtLcxJJ1FsmnBAir%2B55WbXlyyAjaEsi0CD9b4NGbm4gse1nYJfJ7iJ%2BMqxNDAi57mqlMWV2Q2QaPR2Cc8XwdwMHwjXuPQCh9GRh%2BrXF3ckMoXB7EyTIDxDGBdCYMh7tlBSsHcsFP6nvhlxfoIm%2F1z6svGhTNAji7o%2Bar%2BXMF0pJt7cTi%2BnLyF8fITbX%2FfNWbYetmRxmHn6Zn6E5RPub5H6lqLphF%2BKwTJhhbagiRohoG2w2BuAjWJCbWXsvo5mdj%2FtJMjqsF%2BkUwuh99mf9lhZhmqA7AtcpNj8iX%2FgB94mndtR%2BaGhSdqJEVwLoJm8hJvTNvcRTqKwGHmEZ9eHpbtKeBk3pdQcAE63S1LDv72VZhKWDLQIyaZgFRH5FrmJ7S5zFfUuyzhZvoRM3RJVU6H%2BecAZs4A4s2lOlfbmxQY12A9ysBQNqBfILW%2FOO2hFUU%2Bmx2lc0i%2B2Jx9YtadJNut1ebDTfd2V2gs70xvmQFjlgwwIMY%2FSLAIuIJhepW1yzUSww2MXswwY6pgED22D%2FerKnUYRqzr%2BC2MUwITixAL8Pe8ICt3giK%2FCQd2%2BdI1aRGfgGqUGvLwqXoHdRIi57M6s%2BnNho8CnXHq%2ByJGkS18ugEe6aHKoiPDrtbKKMqK%2B%2F%2F4%2BCUbkkpG4KrG72lusJq9u7Xg40iDvCz2l7g7Y%2BZDPBq5uQ%2FybVuPdsr4nOUYqEPJJgz37f9Za4c00MjDyvUuaVvojM3dO19CZrtHH3qhWs&X-Amz-Signature=17d4b548a9d1cddd889b3a4e6f59fc00b840ea336c77379d63b514ecd7a693e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZG75ZEY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgNA3FTP%2B2B5eGKT4osoHKkyE%2BVA4%2B%2Bn39WFdmYZvgpAiEAwERi%2F2W0ljLepmigEs36khqfWeATKQaO4eRRCTXr7NUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFZrKbze2V9uirSESrcA6aNR6GhDEYAN8nXQWPWJFrTHWjU3zYGUJyxlFexFx6ZYEm81qmo0Vzzgk1kWHqqC4uOOwqfbqrNmGrEZ9uJUqDLzb8dsEgFb4wDcgVTQ9kLR9zcwWqybz7zhwSV71YFdZJ%2FkeZcL7fFsyyXL0aXyEzZyqjDPXe4O9BfZdXLeChTm0StcXVaW%2FSv6OJVkQLaG1Abmjt8WqblqihtwkWAzc3j4BjhpohXU40m8kCqbjfaqcPX5DCn8Rf849oi4Ix1yM66nvtZ1q4u%2BADFlIQ6Spz83AzGg6a8aipAjGJmpFxqFxdyGtAWgzE9vq01I4SwAa1HVXKpYHDXhdOAAifs8pNnCkOMSEw7hMnMd6cWiKn5NWAO1IGOoYaZpQw6tIdkNX70ULKmUPQmHMxUgPLKKFoT%2FI6O8rxiJZfyomfJ94VOLVD8EBRJKoc1xC30xbrb2INp759hPcXQMxq9YcP4sQq9BCEGCwVj0VP5%2Fhk37lYCo7bi3%2BBOGJz1fnzvboJUn79yqJ1CUnQfjUAmEkVU0Pfe1NhmPBtdCG0kPmo3CQxtn%2F%2FXmyQ59chpCgds88AHqVLd1L4l3MOZnnVOdPZzxNqP0kkFAUm5tV4M9nX%2F5MHudQ%2BfaTOx5X0ZvlLrMP7E7MMGOqUBu8lLRbro9vTDbzGJaq3%2F%2BhmccDw0yZUkw9NaXegtTwjWyHiyoa%2BPj4zjZN0Spf%2BcaheSO7NRQT3abq9J0hhw6nsxJ9q1iK%2BNBIg7NxSUC2g4xcSG8jIVf6MrGNzWME4HoBAVdPqoHzh3RMlF6FHSa%2BdbiwOkr5wd6jynIXE2v4%2Fv%2FOY401mIw5n9GkBnvuF3o3tt9itNPtar%2FoDefjb4R9WV8NUw&X-Amz-Signature=343c050e73ba13018dbb0af29081fa2712245330c5c86aa7fd3e006ec7f97339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
