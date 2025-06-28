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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUR2D6F%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdcCgsV%2FRoZD7PocXmMxuwTFi2v8ZUjUqvtmuyD7HT2AiBUjnet2%2BY1HY3B6Zr7zDHBHblksa5QQxMp9d9ZIpPYRiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdMKZOxSD0upLYm3KtwD3zKL8%2FXBCyu82ri1%2BFZajqjhBwEWpA7h9BJOmLI6veByiwvcET0VMaPVdZcI9EwBITNs3SXgU7dxEjzg0e7SPH9%2BcbAkIW10GPYx590fqXlPKOIftDLjDlvxZIpTF4%2Fy3Om7vCm26Tl%2FkxFlspsR2bYTwnrf8K2YwMb5sa5Z4B4zyBnSPFk64G4JX9sM4ZiKv7i4Y%2Bj1DZYcOIJvXxnpPg%2FuwlsAzA4MZJ8ONLoWJ2FSJqfFGSG2goQW4aX4E8v6iw%2BqTO4H8yd6L5RUDIK0fNJc%2FOIDPh7TDT7VZ%2FtCTLXxjDr%2FzVk1p3xhGAkSWYWvfwxmWg2CzGu0b6WKCvM2wGuuer5HL75bX6PuyF8FGyD1SaQzLt4Zm%2BvKZbuZqX4Ip8LUi3j8wRfN7RZRRcECqjnnLZAdxhl35o28K0hMP%2Ba3IbQgqtjRV0Rr3I2zG%2BeyI4OTE1yBqfjSGpwP5KgQBxM9aEBodFiNWUJ2jhI8M8u8KfmFx%2BHge3J%2BJpW8F9%2FwQxtz6B7h%2F572MTyLQUOkrkw9qXgENwPyJZQBNqAtlPA3B8YtaR6elksYPhXWMq4DYc1OELzijuqQaCCszM%2F680Wo6zKnzFW%2BYBkBEZE3a84o8WCzL28hc5WabHwwh6H%2BwgY6pgFb6tD0MkS7Aii9B44KcG7Roq89tg9%2Fvi7jjXG2g55TiYtfI%2B4mLC%2Bra%2Fh%2BCwVDWCJ5eVPoECjpAsU308%2FXhO6BQmo6KRYXl4Bf1Qr66ZHX2YAJB1TH6wou0vpD6Awhk%2F44h3o%2FE3jMg8ffFd0TjenDyLc%2BqWZ1x%2FtPHBgBu9wnn5%2FPALo9KiqWHqLrFtG7Eo7yOuvux1eNAcNUAQwh9TiBiL0BWUGk&X-Amz-Signature=8156bddbfcb00504df60195c4b1a5af8cf15156a10bb8b458345cfb1c5ab91c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUR2D6F%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdcCgsV%2FRoZD7PocXmMxuwTFi2v8ZUjUqvtmuyD7HT2AiBUjnet2%2BY1HY3B6Zr7zDHBHblksa5QQxMp9d9ZIpPYRiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdMKZOxSD0upLYm3KtwD3zKL8%2FXBCyu82ri1%2BFZajqjhBwEWpA7h9BJOmLI6veByiwvcET0VMaPVdZcI9EwBITNs3SXgU7dxEjzg0e7SPH9%2BcbAkIW10GPYx590fqXlPKOIftDLjDlvxZIpTF4%2Fy3Om7vCm26Tl%2FkxFlspsR2bYTwnrf8K2YwMb5sa5Z4B4zyBnSPFk64G4JX9sM4ZiKv7i4Y%2Bj1DZYcOIJvXxnpPg%2FuwlsAzA4MZJ8ONLoWJ2FSJqfFGSG2goQW4aX4E8v6iw%2BqTO4H8yd6L5RUDIK0fNJc%2FOIDPh7TDT7VZ%2FtCTLXxjDr%2FzVk1p3xhGAkSWYWvfwxmWg2CzGu0b6WKCvM2wGuuer5HL75bX6PuyF8FGyD1SaQzLt4Zm%2BvKZbuZqX4Ip8LUi3j8wRfN7RZRRcECqjnnLZAdxhl35o28K0hMP%2Ba3IbQgqtjRV0Rr3I2zG%2BeyI4OTE1yBqfjSGpwP5KgQBxM9aEBodFiNWUJ2jhI8M8u8KfmFx%2BHge3J%2BJpW8F9%2FwQxtz6B7h%2F572MTyLQUOkrkw9qXgENwPyJZQBNqAtlPA3B8YtaR6elksYPhXWMq4DYc1OELzijuqQaCCszM%2F680Wo6zKnzFW%2BYBkBEZE3a84o8WCzL28hc5WabHwwh6H%2BwgY6pgFb6tD0MkS7Aii9B44KcG7Roq89tg9%2Fvi7jjXG2g55TiYtfI%2B4mLC%2Bra%2Fh%2BCwVDWCJ5eVPoECjpAsU308%2FXhO6BQmo6KRYXl4Bf1Qr66ZHX2YAJB1TH6wou0vpD6Awhk%2F44h3o%2FE3jMg8ffFd0TjenDyLc%2BqWZ1x%2FtPHBgBu9wnn5%2FPALo9KiqWHqLrFtG7Eo7yOuvux1eNAcNUAQwh9TiBiL0BWUGk&X-Amz-Signature=3deb7cbc1c64d2db8c768dc91a61c8fb9921cd81b282e6a84d8636c6b7682d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
