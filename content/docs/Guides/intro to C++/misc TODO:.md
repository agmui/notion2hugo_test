---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBPQ4V%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpW%2B7Es8IQh%2BsGDJGss%2BNpAXWhKMDF4PcAypjZBd3QPAiAkRu2XfV4pLYX59cI9KD2kgwvzASu5WmzGH4AbwTf43CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJi30%2BeriOqfd%2B5UKtwD4U%2BhVNbZOEQ%2FWKJckkSjmCD6qzWUpvyznKx8OkBysBpPSOdnM85xnBxhX73fzbyEXMfpl%2FZ8qJyKYt6fi2GC2iBYUIEwxsB34FnjqQ9TG9YOdBzzEs3nbI%2B83ofPdwdeOyNWKjUBZ7llgk5dw76iT7nA7cdRbX%2FVS13tUJpxkElJtvohRiuj1hThH6aUC5LJubzrKALaEciExjV0Qhe7RiqYCIuNJ5v%2F8kUrTRiqMUiCC50QZ7O0ZbzLfPNBPLdaAAC5ePbhZKgZOYBkkiofYro2SUN%2FuK81AiJHr7LCi5HFp9nhYSdzYHP2BMmWTimN6lDskuN5bUxOwkkMJy1srdYYG9gpzJs2Jn128T0GXr54v%2BHvHNiPWueTzv2GYJbW59Uwu4v9pkTqR72CM3OTAinxGjiCoa4Pxb8ULrtRgpXuxe17cGzOYbJkmhZMkNpm%2FBEAhoXXyzcyL8zHsnJ%2BGQX73udtldWRH955kTlDqZKIdGPlVbRYICzJOWpQPWG0dnpN%2FXunA%2FZ1tqcnYEzddHFNnwtNckr%2FS9YEfQdm8pxMBvFbOnUMj3qg7tOr1eISzsIeE1IGtSTGi8IMq4LRaeV4xNQtXdIO%2BYnVMOB7e9k6utHTxaLHMCLYxY8wmLuEwwY6pgFsA1%2BlOtD7smuYbdTs%2BpjF2Wt8Y%2BoA%2FRRYhYSnHelBKHBrIwpfSnmxyIzauDAwHwsmfdCRxFV2q9P1XC%2BuvvYyXY12YZB0xzL4k03WQ%2Fxp5jOSEdTy3QJl8ZRwXM1jiHNtR7z95Quh0AFF6Np5%2F5dYslOv62TnMt%2BFReu3LEOf%2FRm%2F3yuHnazOH%2FnKvcqn9Tfe8unqYPEVV05yV%2BuYJ51Xzfp7gwsJ&X-Amz-Signature=4e0cedbf826c0e7ba341f8667ecccedf26e16596e60db85dda4d52ed749102ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBPQ4V%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpW%2B7Es8IQh%2BsGDJGss%2BNpAXWhKMDF4PcAypjZBd3QPAiAkRu2XfV4pLYX59cI9KD2kgwvzASu5WmzGH4AbwTf43CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJi30%2BeriOqfd%2B5UKtwD4U%2BhVNbZOEQ%2FWKJckkSjmCD6qzWUpvyznKx8OkBysBpPSOdnM85xnBxhX73fzbyEXMfpl%2FZ8qJyKYt6fi2GC2iBYUIEwxsB34FnjqQ9TG9YOdBzzEs3nbI%2B83ofPdwdeOyNWKjUBZ7llgk5dw76iT7nA7cdRbX%2FVS13tUJpxkElJtvohRiuj1hThH6aUC5LJubzrKALaEciExjV0Qhe7RiqYCIuNJ5v%2F8kUrTRiqMUiCC50QZ7O0ZbzLfPNBPLdaAAC5ePbhZKgZOYBkkiofYro2SUN%2FuK81AiJHr7LCi5HFp9nhYSdzYHP2BMmWTimN6lDskuN5bUxOwkkMJy1srdYYG9gpzJs2Jn128T0GXr54v%2BHvHNiPWueTzv2GYJbW59Uwu4v9pkTqR72CM3OTAinxGjiCoa4Pxb8ULrtRgpXuxe17cGzOYbJkmhZMkNpm%2FBEAhoXXyzcyL8zHsnJ%2BGQX73udtldWRH955kTlDqZKIdGPlVbRYICzJOWpQPWG0dnpN%2FXunA%2FZ1tqcnYEzddHFNnwtNckr%2FS9YEfQdm8pxMBvFbOnUMj3qg7tOr1eISzsIeE1IGtSTGi8IMq4LRaeV4xNQtXdIO%2BYnVMOB7e9k6utHTxaLHMCLYxY8wmLuEwwY6pgFsA1%2BlOtD7smuYbdTs%2BpjF2Wt8Y%2BoA%2FRRYhYSnHelBKHBrIwpfSnmxyIzauDAwHwsmfdCRxFV2q9P1XC%2BuvvYyXY12YZB0xzL4k03WQ%2Fxp5jOSEdTy3QJl8ZRwXM1jiHNtR7z95Quh0AFF6Np5%2F5dYslOv62TnMt%2BFReu3LEOf%2FRm%2F3yuHnazOH%2FnKvcqn9Tfe8unqYPEVV05yV%2BuYJ51Xzfp7gwsJ&X-Amz-Signature=df30b71a838ad0cbe5f9ca9c2d076de183525ada2066eeecfa0249c48efb7ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
