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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYFX6RW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvxJLZGqUul6P8oIw2VoSLxvO30bnUAkCfMRnJwvFSAIgDIT4KI9i5gK0Wwv6fBBz7ZpFtdzGsPjTETk1cub4T70qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoJWqkc4EmUsoHwyyrcA7eh1uNO8E45ty4d1YvlWZtLKmk8FrONiCg%2Ff7wACnQFiptC%2B0qqipi4BCTW3X%2FpSwJxEA3ZYf9piuhFa1JiVKzH34Gl5qv22EjOCQ%2B48bwI4Xls%2BFrqJADeT4VRWelDjXTNT0%2FK%2FB8hEdYiWHIsBVNurgw2MtkkKYbz9jeFOXHrtRSeo2HDsAjBuN8IBLWbwzt8%2BNGhPzPO%2Fa0JfPFaKfY6GmTARhEw8IBwiEB3H6WaP2WSRk15m2wYSUGrFF1taP8q1vcYPfTNXy7u11Qb0AHP%2Be%2FeFypAZ3N8%2BUbYs4WoFasI0d7KU7ruEWnQb8454vUdUaxnF5rdvrGqugE8CzwQ3yaRlvdYFsE3ETrIQiYC0nIJJTjgkmq67y2dIZVzSoqeKQD0vlKLHlahJABkFeoJS%2BYRU9q4duBY9DiSFoPQ0WUrW9rkHstXceY4gpP41AuNybAf%2Bg%2BlAOHAWC1hQXoEEfiDzNTHVJugmubIrAA8kLWAoO1kY6ULgQkJpMiBOjsiuHSF2GZcsMye01%2FDcsa1al3%2F6fn%2F7oZZ9ZyqlcujeDBckF7G3ADxnKxOobxeAEbCqoisNkKmBaRY%2FsRJ2R8V5FLVu2bUxt1yOp4oSPZFeDc7byOqCrQgwuBvMJyX6cEGOqUBVBefeA0vTxAZ4BrICKOq%2Bz2RDx5tUsqiDMxPVAm9S86SXVfQ0kfGrpsf%2Bmoin8uEYytiARPZ%2BaK43IJh8qKehFGBdquuP6m5HSd6e6gw2X%2BULgeEN0pCfwhmKufjsBf9cV1V4696EyWpJReVZNL3TequHzSMfgRy9RZkrFoCqswqOjKdM2kO%2FlsTSfrdIiwF2HBanPeK34PamfphkWxVAHFU%2BoUv&X-Amz-Signature=c29acde656c94a5cc054c21968cf454a096e689c11108b9f9b161cea388448ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYFX6RW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvxJLZGqUul6P8oIw2VoSLxvO30bnUAkCfMRnJwvFSAIgDIT4KI9i5gK0Wwv6fBBz7ZpFtdzGsPjTETk1cub4T70qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoJWqkc4EmUsoHwyyrcA7eh1uNO8E45ty4d1YvlWZtLKmk8FrONiCg%2Ff7wACnQFiptC%2B0qqipi4BCTW3X%2FpSwJxEA3ZYf9piuhFa1JiVKzH34Gl5qv22EjOCQ%2B48bwI4Xls%2BFrqJADeT4VRWelDjXTNT0%2FK%2FB8hEdYiWHIsBVNurgw2MtkkKYbz9jeFOXHrtRSeo2HDsAjBuN8IBLWbwzt8%2BNGhPzPO%2Fa0JfPFaKfY6GmTARhEw8IBwiEB3H6WaP2WSRk15m2wYSUGrFF1taP8q1vcYPfTNXy7u11Qb0AHP%2Be%2FeFypAZ3N8%2BUbYs4WoFasI0d7KU7ruEWnQb8454vUdUaxnF5rdvrGqugE8CzwQ3yaRlvdYFsE3ETrIQiYC0nIJJTjgkmq67y2dIZVzSoqeKQD0vlKLHlahJABkFeoJS%2BYRU9q4duBY9DiSFoPQ0WUrW9rkHstXceY4gpP41AuNybAf%2Bg%2BlAOHAWC1hQXoEEfiDzNTHVJugmubIrAA8kLWAoO1kY6ULgQkJpMiBOjsiuHSF2GZcsMye01%2FDcsa1al3%2F6fn%2F7oZZ9ZyqlcujeDBckF7G3ADxnKxOobxeAEbCqoisNkKmBaRY%2FsRJ2R8V5FLVu2bUxt1yOp4oSPZFeDc7byOqCrQgwuBvMJyX6cEGOqUBVBefeA0vTxAZ4BrICKOq%2Bz2RDx5tUsqiDMxPVAm9S86SXVfQ0kfGrpsf%2Bmoin8uEYytiARPZ%2BaK43IJh8qKehFGBdquuP6m5HSd6e6gw2X%2BULgeEN0pCfwhmKufjsBf9cV1V4696EyWpJReVZNL3TequHzSMfgRy9RZkrFoCqswqOjKdM2kO%2FlsTSfrdIiwF2HBanPeK34PamfphkWxVAHFU%2BoUv&X-Amz-Signature=ac06e866187824983ac85af1466b2ee0b8fc0cd4a1f66bb75fedbc0d4ff38feb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
