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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTNNVSM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1g2%2B8VfBQcMQHHc2ZMR0askdGK0h8bz8NnyMaWcGjhAiBUzLKpe4nIQyXmASXsjswt%2Be9ImUvpsBprzF3g7P1BniqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwXishvq7bBtPniyKtwD2aSFCC9PWF976KL8R6S5e8Su%2BVl4CScxX9Q7PyYs0UX8maNAQzJUU%2FEgluO9hM%2BwzSc5U93YCAsxskG3j0K9EN5wo64wnB87Ay1xz3%2BNhwf4I7Ba6CGDVHoRoAIXZSWoUoZtEy%2F%2FIDMipTiaBT2aGvjpSpxdF1hwlRPfjIQP2cHjJOt4tHxj7%2Ff41aP9siVBm2VnkZnY97L7l63gkFXZyRiwXxwGOHv9FaW6k2Vv%2FUC0zRbb%2BV5gomwP72Z7m2iQTVkm%2FGyyRLVKTuANL%2FTFzn%2BjMuhJsBCS5cnf6KBDwHUrpmRF%2B56QU9%2BPMBx1bWo9HniT7wjszkgqmhzc8h3EYZ6hN%2F%2F4rFq1mWXKR%2FvKnnDT%2FAi6OeN6qkDAZFtSNB7oFEmrdzJYTz3SUBYU1ugvBM99sChCpAmtZZOSGa6LBn8UrcPfm0h1B%2BJX%2BnKH%2B242kUyMls3FLRpZ8Lp%2FqnJMm6AzOgXsCKPkI6Kyxa%2BP6AI1XkqWHWi2E5qHNZdk2yhqlLu1l0%2FQvFgTxYTX6dW0J%2BG66qAE8WdRt%2FSDZA6uUiURN8tfeRxTHHmjenWgBPXlT8ZZ7nzLJQOkN6d5utSoROwGYc0MO3eQ3mAL1bRHQTy7QQEAFDFs2o7Nvq8wnffLvgY6pgEhaAKWlEbN908CUyO1AmhCSbqal%2BLtl5hDj3xubfUo5zS9ziK3IVCXKH92%2FkK0ClwMHA%2FrAylesEgDGuqm1yIe%2B8a8110NQp%2FhNBWsfkMSuAO8IMCxPghwBGO%2B0tsHgj7jqsqxPTRXXhilOEdCz3opVMPVvxON8oiVqwv2Hvd9E%2BBeEk0OiAYHevmu02ueaA3eq2HARHCPtHEV3v76XarZ6xG393RX&X-Amz-Signature=9a3f0f8554d50783267942052a19020df146c76a0c34c2ef32f6706f0980e960&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTNNVSM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1g2%2B8VfBQcMQHHc2ZMR0askdGK0h8bz8NnyMaWcGjhAiBUzLKpe4nIQyXmASXsjswt%2Be9ImUvpsBprzF3g7P1BniqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwXishvq7bBtPniyKtwD2aSFCC9PWF976KL8R6S5e8Su%2BVl4CScxX9Q7PyYs0UX8maNAQzJUU%2FEgluO9hM%2BwzSc5U93YCAsxskG3j0K9EN5wo64wnB87Ay1xz3%2BNhwf4I7Ba6CGDVHoRoAIXZSWoUoZtEy%2F%2FIDMipTiaBT2aGvjpSpxdF1hwlRPfjIQP2cHjJOt4tHxj7%2Ff41aP9siVBm2VnkZnY97L7l63gkFXZyRiwXxwGOHv9FaW6k2Vv%2FUC0zRbb%2BV5gomwP72Z7m2iQTVkm%2FGyyRLVKTuANL%2FTFzn%2BjMuhJsBCS5cnf6KBDwHUrpmRF%2B56QU9%2BPMBx1bWo9HniT7wjszkgqmhzc8h3EYZ6hN%2F%2F4rFq1mWXKR%2FvKnnDT%2FAi6OeN6qkDAZFtSNB7oFEmrdzJYTz3SUBYU1ugvBM99sChCpAmtZZOSGa6LBn8UrcPfm0h1B%2BJX%2BnKH%2B242kUyMls3FLRpZ8Lp%2FqnJMm6AzOgXsCKPkI6Kyxa%2BP6AI1XkqWHWi2E5qHNZdk2yhqlLu1l0%2FQvFgTxYTX6dW0J%2BG66qAE8WdRt%2FSDZA6uUiURN8tfeRxTHHmjenWgBPXlT8ZZ7nzLJQOkN6d5utSoROwGYc0MO3eQ3mAL1bRHQTy7QQEAFDFs2o7Nvq8wnffLvgY6pgEhaAKWlEbN908CUyO1AmhCSbqal%2BLtl5hDj3xubfUo5zS9ziK3IVCXKH92%2FkK0ClwMHA%2FrAylesEgDGuqm1yIe%2B8a8110NQp%2FhNBWsfkMSuAO8IMCxPghwBGO%2B0tsHgj7jqsqxPTRXXhilOEdCz3opVMPVvxON8oiVqwv2Hvd9E%2BBeEk0OiAYHevmu02ueaA3eq2HARHCPtHEV3v76XarZ6xG393RX&X-Amz-Signature=1d1cc15f906eb7274566db2ca68df5867f9756f2ee9aca6cb28ed7c5a97c5c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
