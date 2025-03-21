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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZE7WOKP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQChFGja5i1onNcge%2BBM96Ysc%2B2qYB%2FRcVnsvIbv262ZeQIhAPaawbv4%2FE6muDJyGCIJN%2FxMVY93v2jfJyR8kuY8mFGRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMTC8%2FJC1%2FXJV5EKQq3AN%2BgUFd7oCnRzPAk%2Bw7tp3tAt1DIYs0%2FPndx6zlewnDLzTCvkoVhDGTbE%2FKiSoJAd8jlNPPDhpq4oy33JAOTz1rlp2%2FY%2FgVScUf709XlkPDPf7qILSDa00d1%2FajzgpffEsClKgg98GwWSUZ0JYrfXp1iYF5G7k7ZA78ibalXtOtDmSGqMyFL7oXu7hmLDZcCZyO5myCWkNk4NHhax%2BLLTbKR%2BntYC2IrgDZx6FRWR31IudxjKcHotHdN7tovobrvd2XEcjE%2B%2FDN%2FlSQ4at2hpWEn7zKVQ2YnhgSYC5x6iBvRV4Ta2tRUOCdX0MTltN3OaortBL%2FftqDmoD5vyYo93xzFa4CA3BZpuxZfE2sHF6UAcUkFlNDS8CiI7Xhn%2B8OCS%2BumoVKx6biMbX19ddgu5TUBn8SwrhcVgWR2QxxPGMlIx42aVhfq18IAVUY7vhMsysUGXDGeiFWopRK1KJ%2FjLBEMgAvsO7dTOjR%2B74KvM8t9DRb3lNYUcwxLBTt0fjF4PFevFkIn%2FycGBScdQblDF6fhyqU0MBYdCorsv223YCR2VaSmpWIijhjAwU1FPxxu79OnEhaQYvdZmGE%2F1t4PXDdZrFOc5nx5Hd66YgmWyF%2FeC6MBPhLhJzsiNkcGzCn2%2Fa%2BBjqkAQDnSUEJxU4iF16PSat6GbLfagVNzaamByoDc58VMs6Yiy%2B%2F5n0oH9ZLHeiBhnhvsZY8i8C4cgnkuLN5QCgtMOXwEEVqhxle90WbefAjfreQQi%2F4UCqqBs8E6UHh0vTOrGKKrXKOkkT7gp3UQ9SQNnl8An9jNrAGwwUAPYa9T26LkCiI6j%2BRCzdYhc47d6RD%2F6lRuI5IVFoqFAzyMtE0qcEt90iy&X-Amz-Signature=a23b93f458b75af5ed0838606cdf5d4848c05f424a4b7e52eb08e501c7f0822f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZE7WOKP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQChFGja5i1onNcge%2BBM96Ysc%2B2qYB%2FRcVnsvIbv262ZeQIhAPaawbv4%2FE6muDJyGCIJN%2FxMVY93v2jfJyR8kuY8mFGRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMTC8%2FJC1%2FXJV5EKQq3AN%2BgUFd7oCnRzPAk%2Bw7tp3tAt1DIYs0%2FPndx6zlewnDLzTCvkoVhDGTbE%2FKiSoJAd8jlNPPDhpq4oy33JAOTz1rlp2%2FY%2FgVScUf709XlkPDPf7qILSDa00d1%2FajzgpffEsClKgg98GwWSUZ0JYrfXp1iYF5G7k7ZA78ibalXtOtDmSGqMyFL7oXu7hmLDZcCZyO5myCWkNk4NHhax%2BLLTbKR%2BntYC2IrgDZx6FRWR31IudxjKcHotHdN7tovobrvd2XEcjE%2B%2FDN%2FlSQ4at2hpWEn7zKVQ2YnhgSYC5x6iBvRV4Ta2tRUOCdX0MTltN3OaortBL%2FftqDmoD5vyYo93xzFa4CA3BZpuxZfE2sHF6UAcUkFlNDS8CiI7Xhn%2B8OCS%2BumoVKx6biMbX19ddgu5TUBn8SwrhcVgWR2QxxPGMlIx42aVhfq18IAVUY7vhMsysUGXDGeiFWopRK1KJ%2FjLBEMgAvsO7dTOjR%2B74KvM8t9DRb3lNYUcwxLBTt0fjF4PFevFkIn%2FycGBScdQblDF6fhyqU0MBYdCorsv223YCR2VaSmpWIijhjAwU1FPxxu79OnEhaQYvdZmGE%2F1t4PXDdZrFOc5nx5Hd66YgmWyF%2FeC6MBPhLhJzsiNkcGzCn2%2Fa%2BBjqkAQDnSUEJxU4iF16PSat6GbLfagVNzaamByoDc58VMs6Yiy%2B%2F5n0oH9ZLHeiBhnhvsZY8i8C4cgnkuLN5QCgtMOXwEEVqhxle90WbefAjfreQQi%2F4UCqqBs8E6UHh0vTOrGKKrXKOkkT7gp3UQ9SQNnl8An9jNrAGwwUAPYa9T26LkCiI6j%2BRCzdYhc47d6RD%2F6lRuI5IVFoqFAzyMtE0qcEt90iy&X-Amz-Signature=28c5b9a2240da31f59c01fe628b00062ac8feb33ca5ce364d82912c8753a2657&X-Amz-SignedHeaders=host&x-id=GetObject)

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
