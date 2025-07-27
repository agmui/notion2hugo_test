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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQRP2TH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCtJNt86QYA33wLXgZ7zn6KObz0RjWr1E8UX2rZiS3CiQIhAMFww2eeR3BghtGcEZfJaHHNi7o2n1ZD8DazWZcsKi7bKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BWdUG040dhwLIWXMq3AOWoRbknxVsBg9XpyUyE7%2B22FHC1dSkFeFwOY2abZ5kaSKAPd%2BlcuWcbYugdI2XJMSFpkyQHYYrpVJvyaJ0QlNCuPIjfog3g6JIlRGYP1YG3LQRaOWJAhJ7MjO3cO2HqmRlh%2BW60b8chM5%2BFMPADy2CNP9OFjVxNcZTVj5DzAglYkK12Z8bNgN4QDupPyuaWlLV%2BCrD3JyPCdHhKNmu9efUA4ErYzQ6E54tgRTlsBdF7yxjZAtmDeLX0l3R%2B5ewUU3RqjJMae7PVinXuuBWb%2FakpMumIBsQKZb7rA3ssA19TNmUfJHkXfBEEg02HT7m9R%2BPyHoP42LL399QEgSc%2FM38DYHUjP4NmUwktgm%2BDtAAQsLHsUGgSalNZs9fvptZI9Ojbvwfm3XMy1GQbqP52ZgxM0T3%2BDJTJFoEfe%2F8VZfgP5ZuulQeb0sab7bUU6CacR7yl9gdDJ1WkuvOnhjCbBvUWsRWkeaPVMrRxVjJypPhjVWuhZRltJba0gEtkiG4payWQjM0aXGxTJGC8sl11r%2BpIVF32kGB1H7Z9QNvb3JMwKiOCBf3CreQv8FKZpOt%2BuVFrSUagrq04kr0lMaZV9nDDccDcNMfaX2TbBg0GeqmnHECG1S6G%2B4ybSqIGTC5u5bEBjqkAWlOn4CCivP6%2FZ4Hyg6MbZ1Tbscvtt8X%2Bj6I6%2BrbMuAGTgCzeMbJ0SMLJZXs7LxMNvyh1MiZdq7678aN%2BYmFpcgGZwPRqL6KlJYm%2BfD3aJTFI08wu01W619CizK%2F%2FcUZTFiXGijOVjYCE37x3OmTFCF3%2BUfnnaISUKzvt%2BaC6KNFZumYRXcUTVGjMQ0ll%2FuH4Fl168oKEFtjO5ywwZUyKjJiqLSn&X-Amz-Signature=a38b14f88a9061219da800fa482901bd199bb3bd9b0952c930e17005d360c38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQRP2TH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCtJNt86QYA33wLXgZ7zn6KObz0RjWr1E8UX2rZiS3CiQIhAMFww2eeR3BghtGcEZfJaHHNi7o2n1ZD8DazWZcsKi7bKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BWdUG040dhwLIWXMq3AOWoRbknxVsBg9XpyUyE7%2B22FHC1dSkFeFwOY2abZ5kaSKAPd%2BlcuWcbYugdI2XJMSFpkyQHYYrpVJvyaJ0QlNCuPIjfog3g6JIlRGYP1YG3LQRaOWJAhJ7MjO3cO2HqmRlh%2BW60b8chM5%2BFMPADy2CNP9OFjVxNcZTVj5DzAglYkK12Z8bNgN4QDupPyuaWlLV%2BCrD3JyPCdHhKNmu9efUA4ErYzQ6E54tgRTlsBdF7yxjZAtmDeLX0l3R%2B5ewUU3RqjJMae7PVinXuuBWb%2FakpMumIBsQKZb7rA3ssA19TNmUfJHkXfBEEg02HT7m9R%2BPyHoP42LL399QEgSc%2FM38DYHUjP4NmUwktgm%2BDtAAQsLHsUGgSalNZs9fvptZI9Ojbvwfm3XMy1GQbqP52ZgxM0T3%2BDJTJFoEfe%2F8VZfgP5ZuulQeb0sab7bUU6CacR7yl9gdDJ1WkuvOnhjCbBvUWsRWkeaPVMrRxVjJypPhjVWuhZRltJba0gEtkiG4payWQjM0aXGxTJGC8sl11r%2BpIVF32kGB1H7Z9QNvb3JMwKiOCBf3CreQv8FKZpOt%2BuVFrSUagrq04kr0lMaZV9nDDccDcNMfaX2TbBg0GeqmnHECG1S6G%2B4ybSqIGTC5u5bEBjqkAWlOn4CCivP6%2FZ4Hyg6MbZ1Tbscvtt8X%2Bj6I6%2BrbMuAGTgCzeMbJ0SMLJZXs7LxMNvyh1MiZdq7678aN%2BYmFpcgGZwPRqL6KlJYm%2BfD3aJTFI08wu01W619CizK%2F%2FcUZTFiXGijOVjYCE37x3OmTFCF3%2BUfnnaISUKzvt%2BaC6KNFZumYRXcUTVGjMQ0ll%2FuH4Fl168oKEFtjO5ywwZUyKjJiqLSn&X-Amz-Signature=14c2e32e3ffed04dd576da74393516123958506953ffb307a047232502cf7c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
