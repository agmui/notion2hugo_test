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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QLKUDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Gle1AlZVitgJbkiHEFQRz81PJwCB%2Bn7ckph96wCcaAiANRyoY1O%2F9Tll1Kfi4lJWjpE%2FSIcnjRA2CYJ5iuidlbSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8blYSVcCvZ7YjY%2FWKtwDSZizLDg20JeOw4u11xroHMfpHXe5rfkBnK1rwA4Tcu2kE%2B61gsJvCYysqY1cld%2BDGJw0H2cbFecMTIYa1j19NVYuD7e8oyuQtElFZKJ02WHDMmG4D3vuMaxqIOBBarWRyfuHgmEvq39DMCaCjD8dma7R7XFxLY17sCQgZOXS2TtWp5zLChyr%2BjcJDp3j04OUdjvfT3e8Fuz%2BHHmNOQIeiCXrJpKk%2BWEY1BMS2zZAWl2cM3OPyrDJb7B0l9AbR%2B%2Bj%2Bkw%2FfEyMPf%2Bzrz5O7H8NPXMHzu5RIiKLyQcxdRWGkE%2FStZY6L4vJ5XDjhGO4Hsnv0zAkhQwMEzDfUtujWU6gWMTC1Oa9XqLU1haDtTroYJC%2FBATTMFt00M9%2F9b0mzURaueh8GFQbvI7KijFFNGoTye%2Ft%2FxZz7y69m4tx7mbTryx%2BlFlEsmmhEVVQtKcAHRaceeBOff%2B%2BR1%2B%2BghlrC6P68zPNdM6IifmoBvODDI1724CPq76WIEIBiyc3Ajxh%2FNwOVKXWhekJEqvI86sZVkKlVLQ8%2Br%2BFSOQGLFQ9MpgRIvZtI7R5iPl8q1MfpZwjpLt2ZYjm2udUX7PME%2BBU4SrtLuRzLZ5Dp7RXCN3OKhwPSTrfpGOqgLg3%2Fm898TQw0YqTwwY6pgE45RYdteLaWrDGB5BRIkyCm4OuXC4O%2BY8zlqoefBItqCU2R2t121%2BZHhxvPuCm3GYdDcNCZMpWoBzEmjxAMY3ZXKb%2FqflHHKmf8qrI4pC3MUm7hs2HIdmm3f210BehNGT1eGAm%2BXCRbbSeNd30OYtNJl9UMp6dASjEWozBoNBos4BO%2BK5gUSLj9tMYdvTATtGbgFrwklUITKXCs3eWBMqLm5XYyoor&X-Amz-Signature=55172bc198b2337448de9d382deb07351951c1a90cb77fa200a54cc4d593499a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QLKUDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Gle1AlZVitgJbkiHEFQRz81PJwCB%2Bn7ckph96wCcaAiANRyoY1O%2F9Tll1Kfi4lJWjpE%2FSIcnjRA2CYJ5iuidlbSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8blYSVcCvZ7YjY%2FWKtwDSZizLDg20JeOw4u11xroHMfpHXe5rfkBnK1rwA4Tcu2kE%2B61gsJvCYysqY1cld%2BDGJw0H2cbFecMTIYa1j19NVYuD7e8oyuQtElFZKJ02WHDMmG4D3vuMaxqIOBBarWRyfuHgmEvq39DMCaCjD8dma7R7XFxLY17sCQgZOXS2TtWp5zLChyr%2BjcJDp3j04OUdjvfT3e8Fuz%2BHHmNOQIeiCXrJpKk%2BWEY1BMS2zZAWl2cM3OPyrDJb7B0l9AbR%2B%2Bj%2Bkw%2FfEyMPf%2Bzrz5O7H8NPXMHzu5RIiKLyQcxdRWGkE%2FStZY6L4vJ5XDjhGO4Hsnv0zAkhQwMEzDfUtujWU6gWMTC1Oa9XqLU1haDtTroYJC%2FBATTMFt00M9%2F9b0mzURaueh8GFQbvI7KijFFNGoTye%2Ft%2FxZz7y69m4tx7mbTryx%2BlFlEsmmhEVVQtKcAHRaceeBOff%2B%2BR1%2B%2BghlrC6P68zPNdM6IifmoBvODDI1724CPq76WIEIBiyc3Ajxh%2FNwOVKXWhekJEqvI86sZVkKlVLQ8%2Br%2BFSOQGLFQ9MpgRIvZtI7R5iPl8q1MfpZwjpLt2ZYjm2udUX7PME%2BBU4SrtLuRzLZ5Dp7RXCN3OKhwPSTrfpGOqgLg3%2Fm898TQw0YqTwwY6pgE45RYdteLaWrDGB5BRIkyCm4OuXC4O%2BY8zlqoefBItqCU2R2t121%2BZHhxvPuCm3GYdDcNCZMpWoBzEmjxAMY3ZXKb%2FqflHHKmf8qrI4pC3MUm7hs2HIdmm3f210BehNGT1eGAm%2BXCRbbSeNd30OYtNJl9UMp6dASjEWozBoNBos4BO%2BK5gUSLj9tMYdvTATtGbgFrwklUITKXCs3eWBMqLm5XYyoor&X-Amz-Signature=2d2edf3606598ce08944caa274f3882691f3e5d22c3b056c0c53bf9e84d998c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
