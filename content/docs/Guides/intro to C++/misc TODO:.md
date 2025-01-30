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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRH34WDT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt%2FFEUSZTi3iTvfvz2i5AaveYqL16dSdn%2BtkJ5Bnu2gAiAxfs975O8di2XSskrk2r%2BulFoXEP%2BD0C2fgN6HtHBKKiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAqdNn%2FKsZp0KvMTKtwDZgPnCgTuaXxlkyXLtGesfNI7tNQGoYBKMDKzmwItJM7i2pKg8nmLtoHTIrWAcJsisZcqMx9JiL8Qhm%2Ffx6mHuVj%2BHGP9BD9TWEt8%2BWmgqBrNKxlDLr0k90qfTF1%2F2ffNgJXL4zG5FN9Hzke1yp3Pe4cF%2FOayp7Yqvr23ZgQXwFPzJmfwT7z79FhuVvwG95R%2FJ6vTazMsZ%2FCMbL2x%2B4CiTREZGcUevje60YU82UpqSZRPboesD9X8t%2BGLJdXXGoB5VEByn1OJ3gp%2BnRjPBq4hQ2F643uLRMgyiNFbbnWyzlYjKEMri%2FvX6Wpy9psA0p8hl%2FPAdr5AxDIEoJ3o7Aer1Wx388cP%2FxkrRYGcm8%2B7E%2FLmZvUO%2BsFrLsL3b57wuwbOH2C8odXkJh9T6U6z2Xk4%2FBETxpIc11%2FNYyFjMJ8pHzEGTjA4vd1Civ6bZm2GQsx%2Fs%2BkQc33raNiH1vzJcwNglWExKhIkZOVADOYC0O%2FOXi4vQDfI2QvLvH3SkNI108OpW2Wy%2BMYjqJdx7r9SpwSn9n3Ezygk15atunhtfwX8ntBxS2k0npu8OHPCpiNk8h3P%2Bsl7uoVSTwOOjePnrCwG8hDTbtS7%2FeVDTeDDdSSI42GovnAyLix%2FUJ7NO5IwxfPuvAY6pgErxCinmHv%2BQc3WmjVlvshdRnPmJl1MaliBLByfsHtdx6mHaNUOn1aKqm6L6kP0dbuIsb9G%2BPVyX5sRoIkf2jonif%2FcdhIkRl38MGBezmY%2B8Ks29dIhHvfoegw%2BYrI8M4xx9lmVhIjulD4UYUHl%2BG7rWXjk8u0f2wjbakfzCnMnysoI9%2FiBHBQQ8HJLjdzIPTNVEgvzzRZXObLN5FmkkoPGc17DZXPt&X-Amz-Signature=d9f14739e37f98081dc2a6bd89ec3beb26262da5c16822a8a28ff38cf8e23f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRH34WDT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt%2FFEUSZTi3iTvfvz2i5AaveYqL16dSdn%2BtkJ5Bnu2gAiAxfs975O8di2XSskrk2r%2BulFoXEP%2BD0C2fgN6HtHBKKiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAqdNn%2FKsZp0KvMTKtwDZgPnCgTuaXxlkyXLtGesfNI7tNQGoYBKMDKzmwItJM7i2pKg8nmLtoHTIrWAcJsisZcqMx9JiL8Qhm%2Ffx6mHuVj%2BHGP9BD9TWEt8%2BWmgqBrNKxlDLr0k90qfTF1%2F2ffNgJXL4zG5FN9Hzke1yp3Pe4cF%2FOayp7Yqvr23ZgQXwFPzJmfwT7z79FhuVvwG95R%2FJ6vTazMsZ%2FCMbL2x%2B4CiTREZGcUevje60YU82UpqSZRPboesD9X8t%2BGLJdXXGoB5VEByn1OJ3gp%2BnRjPBq4hQ2F643uLRMgyiNFbbnWyzlYjKEMri%2FvX6Wpy9psA0p8hl%2FPAdr5AxDIEoJ3o7Aer1Wx388cP%2FxkrRYGcm8%2B7E%2FLmZvUO%2BsFrLsL3b57wuwbOH2C8odXkJh9T6U6z2Xk4%2FBETxpIc11%2FNYyFjMJ8pHzEGTjA4vd1Civ6bZm2GQsx%2Fs%2BkQc33raNiH1vzJcwNglWExKhIkZOVADOYC0O%2FOXi4vQDfI2QvLvH3SkNI108OpW2Wy%2BMYjqJdx7r9SpwSn9n3Ezygk15atunhtfwX8ntBxS2k0npu8OHPCpiNk8h3P%2Bsl7uoVSTwOOjePnrCwG8hDTbtS7%2FeVDTeDDdSSI42GovnAyLix%2FUJ7NO5IwxfPuvAY6pgErxCinmHv%2BQc3WmjVlvshdRnPmJl1MaliBLByfsHtdx6mHaNUOn1aKqm6L6kP0dbuIsb9G%2BPVyX5sRoIkf2jonif%2FcdhIkRl38MGBezmY%2B8Ks29dIhHvfoegw%2BYrI8M4xx9lmVhIjulD4UYUHl%2BG7rWXjk8u0f2wjbakfzCnMnysoI9%2FiBHBQQ8HJLjdzIPTNVEgvzzRZXObLN5FmkkoPGc17DZXPt&X-Amz-Signature=4cf9b0b82aeec93c3cfb17c0103270e2e99cdfe9f7b05ebf85f13b86b9d3bfff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
