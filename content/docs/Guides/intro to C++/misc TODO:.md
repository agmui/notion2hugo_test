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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBGX3UI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwCdEf8iiv3hwCzQc%2BTgVdNJfmNXaL5%2BPS5UXIBNi8%2BQIgbgVt32iv%2B%2B18IjjgBULAVoF1HaZOc9V%2BeP1p5DYozcgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO8AR5WCLfLtZc4GRSrcA1bEKAWbohVifHKgJxC0jzOAd8C%2FkDOBHfUAc1sTOyjL8vFwrbffuO%2BPukcPE7LqiXO6z1t4zzuOUvWLeoypYmJMjP%2Fdq6ERrTfOtr35JOsfoTWfRgxYgY3TRqWC35PplfynK7Hr3TEJAtwwalzGEKoP4KnN2qRhKop4wGBewPEcwDnHJRTl%2B30mPSxcHlnrPScIK3X%2BxFmv%2BHGEmfqFY852%2BorQ2cFu33kjCPdNwfSTrbWkFNLKLTyQTLEM%2F2tVnivutNMr7zor1qKpRh118K3CvCe1YwvJGTCOOBB%2F%2B2Z36%2F9v%2BU%2FsH5j8mtqcr4PSO0cD8UkCSWyh5Rh99zH1zgnKJt9D6RzCMsUt70gWSJb%2Fl3k1HQfLXx3ng2E1HnKE4vE4cySurVc%2BN%2FjH2ofQfoLqXZg9vRw2X8TOHImyY6WXyNmr1BzDxndCplgFQs0smLizA0s%2Bic56IcoavU4PAe%2FBkAc4jmpQ8ca6QlRdOaQ0lKKiwgVxkqLrfZ558H5ln%2FlpHSJVjuS2jvtDLfRWw8V4JA6ccHTfrEz%2BcfDQaT%2Bv5hwQjIm2NLty3SgIzyDRJO4kVLtfsy%2FfQvPseZEesF7fLaWcjgso1fxXX4M5FdVwDCORadS97icBmowcMIDUpb4GOqUB4W5m6cIwYnIVoInUoZYdExMfKS8dP0Xyt6tXqAH99LNa%2F6OkBqUdw8wR6DlenjIwbgt%2BEE8cnpX1IoQ8qkwcoOU9WVmMGIfiOaNddtTOI7upWeZug4w1SncfTzS6Winw%2ByUQW7I1hd8vQusupp2IDWCaX8OF2%2FCt56OBzRjuUXJnNw8o0WZ7aINwPCXGtVg8w7ug8oW9kVlW%2BgTprSJE1zsAYxI%2B&X-Amz-Signature=ad5a64f92f1bd86c35a8fa4fd61ea5ea82c3dabf36870dfc53867f5fb9495730&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBGX3UI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwCdEf8iiv3hwCzQc%2BTgVdNJfmNXaL5%2BPS5UXIBNi8%2BQIgbgVt32iv%2B%2B18IjjgBULAVoF1HaZOc9V%2BeP1p5DYozcgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO8AR5WCLfLtZc4GRSrcA1bEKAWbohVifHKgJxC0jzOAd8C%2FkDOBHfUAc1sTOyjL8vFwrbffuO%2BPukcPE7LqiXO6z1t4zzuOUvWLeoypYmJMjP%2Fdq6ERrTfOtr35JOsfoTWfRgxYgY3TRqWC35PplfynK7Hr3TEJAtwwalzGEKoP4KnN2qRhKop4wGBewPEcwDnHJRTl%2B30mPSxcHlnrPScIK3X%2BxFmv%2BHGEmfqFY852%2BorQ2cFu33kjCPdNwfSTrbWkFNLKLTyQTLEM%2F2tVnivutNMr7zor1qKpRh118K3CvCe1YwvJGTCOOBB%2F%2B2Z36%2F9v%2BU%2FsH5j8mtqcr4PSO0cD8UkCSWyh5Rh99zH1zgnKJt9D6RzCMsUt70gWSJb%2Fl3k1HQfLXx3ng2E1HnKE4vE4cySurVc%2BN%2FjH2ofQfoLqXZg9vRw2X8TOHImyY6WXyNmr1BzDxndCplgFQs0smLizA0s%2Bic56IcoavU4PAe%2FBkAc4jmpQ8ca6QlRdOaQ0lKKiwgVxkqLrfZ558H5ln%2FlpHSJVjuS2jvtDLfRWw8V4JA6ccHTfrEz%2BcfDQaT%2Bv5hwQjIm2NLty3SgIzyDRJO4kVLtfsy%2FfQvPseZEesF7fLaWcjgso1fxXX4M5FdVwDCORadS97icBmowcMIDUpb4GOqUB4W5m6cIwYnIVoInUoZYdExMfKS8dP0Xyt6tXqAH99LNa%2F6OkBqUdw8wR6DlenjIwbgt%2BEE8cnpX1IoQ8qkwcoOU9WVmMGIfiOaNddtTOI7upWeZug4w1SncfTzS6Winw%2ByUQW7I1hd8vQusupp2IDWCaX8OF2%2FCt56OBzRjuUXJnNw8o0WZ7aINwPCXGtVg8w7ug8oW9kVlW%2BgTprSJE1zsAYxI%2B&X-Amz-Signature=ea3db5eb4b2a2a944d20fbb9cc6f582bbaa867d1fdb0f9fb104fa0e3e9b1bb51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
