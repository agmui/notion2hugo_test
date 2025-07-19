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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWDLDUQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4JIi1WbHJRoF7DAXhKfzTiY6ZyvwJ8aujBk6opSwuFAiEA0SCqwnr0Vlni79N76RlRIkFDhfUSlTtvTVGIJg%2BPIHMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcw4wIiEd%2Fq4Bc68SrcAxf3uNT1MFv9TZioMnJY77u75sAxA%2BcGV3ruL3TwZYw4oba%2BmmfsDoz%2BRPKfwouV3%2F4Lzh8OlSxitY1UO9Sq5t8uI90LZFWwaMmKamLHQmbTKKWj%2FwDk8%2FzsmdIEBFJ6NqOEIUkPuFfCGPfiyh1V18LAxgqdZR1s7O8BNWqltCeQiUzVcSCuye6oCoAMiOHdi8GKu4zErLqFOwjazYSkVMQ50%2F6l5a12z6%2FYyBvHGa9sZMUN7DVbgiGS8zhGAjCpY7C9J024EPCOflRTovFHR%2Bdg2U7H2NXUpjKFv%2FxrQ8DpsfTJ00FAf4Sm7nYV3SRo73zpQCuF5b0kKTgJtfQFE61nHncZN8g7qLanUUjCeWiZz3t%2BDFN7u6L38%2FQZMmFeGgTB8W431%2BxlYUms6QXe%2BH8LEkMguPij5lHPJZYHfJjdoH%2FXvDuPEpnQabGQ2t3%2FhiOaR7YBGrOGNlq8RsMuVcvjiZ%2BZbOHdcVom1GYdWpsQrYNGlZqaMk7qkphsgNR7vf7cotxCRiTvASRKKUj1yRgRmuiuXYgHlzEVezSluYAxklZW3U9iRb6XwqgNUhw1DmsSDpKJxF7yIU6FvZXVq5roS1GS4%2FPqDWw2QlHGnXk1k0FnAUfHmZ4409ZWMMbF7MMGOqUBdiZecycAtnnt2JfT9bG7r8roUYhdI%2F9Ra96Dqof14h2AYbNGZY7lYVwrqPMawR7H4OiuK8zOoEDR88%2FUm%2BkVlG4hjs04Xavrs28jfWqX3%2FylK46hyNSB0EiD05Qeu%2BmkGqZCJg8EUuTiY9%2FQzLlvg0S7Dqr0n7kOj86jMkojB30GJGDeLNOW9GV2gn4fh1uaILMumrS4R61W8%2FYQCqXXdojUJQ6d&X-Amz-Signature=5fda48bd79fa4236a48b4907b58963650102fc45f3813c0c75b6911362d27e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWDLDUQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4JIi1WbHJRoF7DAXhKfzTiY6ZyvwJ8aujBk6opSwuFAiEA0SCqwnr0Vlni79N76RlRIkFDhfUSlTtvTVGIJg%2BPIHMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcw4wIiEd%2Fq4Bc68SrcAxf3uNT1MFv9TZioMnJY77u75sAxA%2BcGV3ruL3TwZYw4oba%2BmmfsDoz%2BRPKfwouV3%2F4Lzh8OlSxitY1UO9Sq5t8uI90LZFWwaMmKamLHQmbTKKWj%2FwDk8%2FzsmdIEBFJ6NqOEIUkPuFfCGPfiyh1V18LAxgqdZR1s7O8BNWqltCeQiUzVcSCuye6oCoAMiOHdi8GKu4zErLqFOwjazYSkVMQ50%2F6l5a12z6%2FYyBvHGa9sZMUN7DVbgiGS8zhGAjCpY7C9J024EPCOflRTovFHR%2Bdg2U7H2NXUpjKFv%2FxrQ8DpsfTJ00FAf4Sm7nYV3SRo73zpQCuF5b0kKTgJtfQFE61nHncZN8g7qLanUUjCeWiZz3t%2BDFN7u6L38%2FQZMmFeGgTB8W431%2BxlYUms6QXe%2BH8LEkMguPij5lHPJZYHfJjdoH%2FXvDuPEpnQabGQ2t3%2FhiOaR7YBGrOGNlq8RsMuVcvjiZ%2BZbOHdcVom1GYdWpsQrYNGlZqaMk7qkphsgNR7vf7cotxCRiTvASRKKUj1yRgRmuiuXYgHlzEVezSluYAxklZW3U9iRb6XwqgNUhw1DmsSDpKJxF7yIU6FvZXVq5roS1GS4%2FPqDWw2QlHGnXk1k0FnAUfHmZ4409ZWMMbF7MMGOqUBdiZecycAtnnt2JfT9bG7r8roUYhdI%2F9Ra96Dqof14h2AYbNGZY7lYVwrqPMawR7H4OiuK8zOoEDR88%2FUm%2BkVlG4hjs04Xavrs28jfWqX3%2FylK46hyNSB0EiD05Qeu%2BmkGqZCJg8EUuTiY9%2FQzLlvg0S7Dqr0n7kOj86jMkojB30GJGDeLNOW9GV2gn4fh1uaILMumrS4R61W8%2FYQCqXXdojUJQ6d&X-Amz-Signature=70a860f3daa32990b3a565e3af7d45db8fbdc8b16b3458e5dde2a0727a10a354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
