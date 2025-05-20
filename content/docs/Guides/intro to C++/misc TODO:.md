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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON6AHJV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FInZoqjffKQALsi%2BRyU7BJnWAKcJpzh9wQeq2KTPBTAiBQ8VaonEWzb%2FW7Wu6puvyJ0vQw9SuBDyWeWqC2637WoyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjfjzmNy3WrBFFRaKtwDf%2BaDwFi44QuElphmrOyDblOPYFbFVyY4p%2BA7TTp%2FZA9w4ayw4HoBnrmdmo0goVJYlXLNfPvUaE2IVyQhOZc5kM4mRWz7XKbMGkbwErau3fduXk29NVrilRx%2Boj2vzXotpYo9ysrUpgz9t0BcY38SyI9PlrFseaSWV2ceKhN%2B0%2FLzzMdLsGR1bu9KGWJy45SKf1ike8wPc4KAwkMJ3QOP16ZLAYGS8vW0r%2Bs911Ots%2BLNt6ClBNSyWihrnfBCua1y8NL5v8W0rHjrW9Z7WZM%2Bqa%2F7p1nzC6qTXg115YFf7%2F4kkmoxNfvtdUUOlk%2FoHakJJUZlTyg26uCkn6CegTC6taf64Ep4qklFWUFVladFPnAVlzOfyHrefQZzPUbd8ubKbiRdy4DfJXp%2Fv%2Fn7Zl%2BvHmzqtKdRz97cYhrocxwn0IJsHD%2FyV1bH%2FRtCJ9%2FlHhoQR3xLo%2BIdtnnEzbAmb5d7Zk9qPWX6uoNwX5UEWu%2FI89cgpxIwwIyl3UdPq5s7lsww8mWY8K3ejk4zRcqo63mnHHM%2FyuRk6XGASIDDKcUvFNtJoo1pe7vH224PSfpOBS06ntL3iLWuQsBj2gGcGijnlFcTtFKRpZuEgYjh9rkrh8%2BqJDLEyoqZKC6u7sIwy8mywQY6pgE1pnUQKQCBJcFs2L4AYphSAWG3qxdrAUYw1pvuKTd3FJkdTI7onHK0CmV%2FZU%2F75gvO2FlIXP%2Fa%2FscUnbq8%2FPF8IOydqgL%2FIVtMgoFwU9pI9fPInzHs7ieyaRVltucn8K39lXcJTqdOs4psRt8LNX8ZZHag3FCSTKQrN8TmKK0hem8V%2FUnOl2K0W0LgUXZdMyK70fA3nsWtlpnsaKa0MWcyiFhhwrGD&X-Amz-Signature=29482c414e18cf2fef32bf4be19fb05228b154eeab3a989be565df02e20c4299&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON6AHJV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FInZoqjffKQALsi%2BRyU7BJnWAKcJpzh9wQeq2KTPBTAiBQ8VaonEWzb%2FW7Wu6puvyJ0vQw9SuBDyWeWqC2637WoyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjfjzmNy3WrBFFRaKtwDf%2BaDwFi44QuElphmrOyDblOPYFbFVyY4p%2BA7TTp%2FZA9w4ayw4HoBnrmdmo0goVJYlXLNfPvUaE2IVyQhOZc5kM4mRWz7XKbMGkbwErau3fduXk29NVrilRx%2Boj2vzXotpYo9ysrUpgz9t0BcY38SyI9PlrFseaSWV2ceKhN%2B0%2FLzzMdLsGR1bu9KGWJy45SKf1ike8wPc4KAwkMJ3QOP16ZLAYGS8vW0r%2Bs911Ots%2BLNt6ClBNSyWihrnfBCua1y8NL5v8W0rHjrW9Z7WZM%2Bqa%2F7p1nzC6qTXg115YFf7%2F4kkmoxNfvtdUUOlk%2FoHakJJUZlTyg26uCkn6CegTC6taf64Ep4qklFWUFVladFPnAVlzOfyHrefQZzPUbd8ubKbiRdy4DfJXp%2Fv%2Fn7Zl%2BvHmzqtKdRz97cYhrocxwn0IJsHD%2FyV1bH%2FRtCJ9%2FlHhoQR3xLo%2BIdtnnEzbAmb5d7Zk9qPWX6uoNwX5UEWu%2FI89cgpxIwwIyl3UdPq5s7lsww8mWY8K3ejk4zRcqo63mnHHM%2FyuRk6XGASIDDKcUvFNtJoo1pe7vH224PSfpOBS06ntL3iLWuQsBj2gGcGijnlFcTtFKRpZuEgYjh9rkrh8%2BqJDLEyoqZKC6u7sIwy8mywQY6pgE1pnUQKQCBJcFs2L4AYphSAWG3qxdrAUYw1pvuKTd3FJkdTI7onHK0CmV%2FZU%2F75gvO2FlIXP%2Fa%2FscUnbq8%2FPF8IOydqgL%2FIVtMgoFwU9pI9fPInzHs7ieyaRVltucn8K39lXcJTqdOs4psRt8LNX8ZZHag3FCSTKQrN8TmKK0hem8V%2FUnOl2K0W0LgUXZdMyK70fA3nsWtlpnsaKa0MWcyiFhhwrGD&X-Amz-Signature=d13f7e776cba6c7be3d6152e56252cb0e47c69d9a9056ad7347acb55504f6154&X-Amz-SignedHeaders=host&x-id=GetObject)

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
