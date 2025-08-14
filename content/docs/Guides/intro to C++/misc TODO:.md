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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57KAY3R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ2P3HEfNSzvUAatgAGqMOYy%2FPOhS3O8JaNUFqsbIlKAiEA2UlHO%2F3IXK27kLzZECIBMIz1QMqvpa34PuCM%2BtEF5n8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPmkEAvfdpuL9ZqyHCrcA3fnXnZYszHFozTovk2MPGSmK1VqkA3KhBMdNhz%2BZ6d5vYAfiurKCd76pdGeQVHIZnskZesE2Dp0LBlSLtKvX%2FnNIqP7yTjL6%2B%2FYR5F6oyo4mSIdQh85JrW3XroZ6vBas%2FhtsoDxQeFQesI0PqEoPcRg9QuJnaLR%2Fgw%2Fx5cbI48ffBHXRP9AVdnmOZ37blQA5Cz8N%2BpJ%2BlSiICIrE0e2LZLkBbjYJtNVYMK5HAOUskRQpyr%2B0ADhAsHBcyrpGQ9CqMCFXiLBtFcog4Vopb9YMN%2FWWsPR%2Fylr1RgZWUveS5G%2B6LxYjFrvApns3CCNnXZv5A9Y0iu8zmitUfX1Ig%2BEcXSESG%2BPswodju5ghtN1THXVzvvVbI48YqrQ%2Fa3xxmmehpTEfEaFE10Hjo%2FG860umxyLwbwID7XT7QInumokq%2BzpSY7ip9xjJT2WVud0Zv%2BRIfr5eR9X8DCFo13lsAN0NXjpfcWg14hOvBceWgsqG1igBtz6o7a%2FpotLoIhQBojUN%2FI31E7%2BdYUIHVyCQXm6VlmSs7%2Bvfv212CPQGTsh80rFF2io%2BTTE2%2Feka9KQQU8V8sjdsUureg7ZBHFAz%2FB45dyZgE89SE24w0pXXtffD5IX1Ax7qkaTpQKe0xBeMI7g9sQGOqUBklA%2BXyI45rBF0LzLfMnTivwwCgL6XJaUGneDyEZISTfyXjyr8%2FuhR4wJ7yMr2aMQnFFk5tUJoJ%2Bh1yN2kzeLvKQ7OArkVgXfJ14xDQF9hPC1VZHq9HjIrKPgr3zdgAniBJP7HpW%2FY8GUs2QY8K%2Feng1lpPGLcXHiOlcKWLswWCw3rzOaEbjI2kuBxISm4h%2FD%2F7wX3jYo5bh6IiQwXYQxSzoxHYz0&X-Amz-Signature=7369f5fed2906451b8ec5fab7222f6a7da844f617f14606a1c5e17a568a9f7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57KAY3R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ2P3HEfNSzvUAatgAGqMOYy%2FPOhS3O8JaNUFqsbIlKAiEA2UlHO%2F3IXK27kLzZECIBMIz1QMqvpa34PuCM%2BtEF5n8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPmkEAvfdpuL9ZqyHCrcA3fnXnZYszHFozTovk2MPGSmK1VqkA3KhBMdNhz%2BZ6d5vYAfiurKCd76pdGeQVHIZnskZesE2Dp0LBlSLtKvX%2FnNIqP7yTjL6%2B%2FYR5F6oyo4mSIdQh85JrW3XroZ6vBas%2FhtsoDxQeFQesI0PqEoPcRg9QuJnaLR%2Fgw%2Fx5cbI48ffBHXRP9AVdnmOZ37blQA5Cz8N%2BpJ%2BlSiICIrE0e2LZLkBbjYJtNVYMK5HAOUskRQpyr%2B0ADhAsHBcyrpGQ9CqMCFXiLBtFcog4Vopb9YMN%2FWWsPR%2Fylr1RgZWUveS5G%2B6LxYjFrvApns3CCNnXZv5A9Y0iu8zmitUfX1Ig%2BEcXSESG%2BPswodju5ghtN1THXVzvvVbI48YqrQ%2Fa3xxmmehpTEfEaFE10Hjo%2FG860umxyLwbwID7XT7QInumokq%2BzpSY7ip9xjJT2WVud0Zv%2BRIfr5eR9X8DCFo13lsAN0NXjpfcWg14hOvBceWgsqG1igBtz6o7a%2FpotLoIhQBojUN%2FI31E7%2BdYUIHVyCQXm6VlmSs7%2Bvfv212CPQGTsh80rFF2io%2BTTE2%2Feka9KQQU8V8sjdsUureg7ZBHFAz%2FB45dyZgE89SE24w0pXXtffD5IX1Ax7qkaTpQKe0xBeMI7g9sQGOqUBklA%2BXyI45rBF0LzLfMnTivwwCgL6XJaUGneDyEZISTfyXjyr8%2FuhR4wJ7yMr2aMQnFFk5tUJoJ%2Bh1yN2kzeLvKQ7OArkVgXfJ14xDQF9hPC1VZHq9HjIrKPgr3zdgAniBJP7HpW%2FY8GUs2QY8K%2Feng1lpPGLcXHiOlcKWLswWCw3rzOaEbjI2kuBxISm4h%2FD%2F7wX3jYo5bh6IiQwXYQxSzoxHYz0&X-Amz-Signature=a91bdb18ecdcef97a2c112d000ee31a6a12229d06a5d772363dc84a96cedb703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
