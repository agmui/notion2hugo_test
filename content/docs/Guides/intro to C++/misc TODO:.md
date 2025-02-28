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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZXJGNA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCXkogi9MBEbpPK027L0%2F0FwXzP4sk4XfqjFmPjo2GDQIgdEaT5x6Q2z6WxgHoe1hpCBQR1O6vOzrlbb078YECYhoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFs34NWenrwPejfHircA2epZdl7%2FcRCv9K40KGK0e4YMBTl1unGGEZH6N92CbEbB3rotyC5vDyC8BVjT0vsTzPbZXEPWSPVWmyKWK8rbOp43pxHhQMAf%2BMX9PxbnKiDl6zQC4uBXH4r1SskZXAIK3A7qCg8se7Nis%2FqJ4cExq%2Bpiwv5UQeW%2FwPPKL%2BPpby4orRh59B5WOkBtycRfuBInMZqgpR0yhKUCFpeCuMbycjewHtZ8BnXp40oJue%2BQk4ay%2B9b2ADTQqGgVMr%2BOxlWZxB4V8nWNSiAkQXt%2F4Qeyv8wjxHbhJW%2F6iqNzTYjJW5SwYTsBiSvgDbFDDITe0Y96umnbeg2Yw5Uas1VMjt4TS1POSfTAWPRaWDckbYbNQKzqLzxdMSp8%2BGoj1xG%2Bamm3B1Ka3IDWx7I2rt01FVaunz7LFL4EhIwSOGuMKDjwmzD12rDeon05s4LSN3dtY5DPD%2Fgf%2F91VZI4AnG1NR4mYjF2lDjFTL%2Ficnd%2FEr6qEDkey0mYUisB9XXQQ83z7t8EUedWHxJSkWVwHvyk9SVSQCdxZw7YjNIoHZGXY4iayyiE%2FVd3o1QEcqflJ0y6d7Xuwv05W%2FE8hhSxiiIzU4OnuERZAKgqtbzXT3bNL%2BWsKtKqY5WBsh1A2ROD1uImMIuwhb4GOqUBnEP04MMWksobZl108mzKzJN%2FVXxByqAiH731wZBjmDmgo3xZL9gkPqN%2FIF917oeSGLwBHWjtNOhNOaMrxEJJfuIoqXyBX0JP0B0mKtb5yI2h3V9%2B6C3%2FS1Ff1kk%2BrfizX%2BJUutNnnhaU49olIYOv9G53EcHjd68bK20iZmlKTqpFwaWl%2B5Xxe2RVfPN0bOnO%2BSe4nHHalKNPELIPiOjBJ151087j&X-Amz-Signature=3e7acc72e5b72f9447b83a4aa7c0c3998b2437beb9567c08bf66dae93a759877&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZXJGNA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCXkogi9MBEbpPK027L0%2F0FwXzP4sk4XfqjFmPjo2GDQIgdEaT5x6Q2z6WxgHoe1hpCBQR1O6vOzrlbb078YECYhoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFs34NWenrwPejfHircA2epZdl7%2FcRCv9K40KGK0e4YMBTl1unGGEZH6N92CbEbB3rotyC5vDyC8BVjT0vsTzPbZXEPWSPVWmyKWK8rbOp43pxHhQMAf%2BMX9PxbnKiDl6zQC4uBXH4r1SskZXAIK3A7qCg8se7Nis%2FqJ4cExq%2Bpiwv5UQeW%2FwPPKL%2BPpby4orRh59B5WOkBtycRfuBInMZqgpR0yhKUCFpeCuMbycjewHtZ8BnXp40oJue%2BQk4ay%2B9b2ADTQqGgVMr%2BOxlWZxB4V8nWNSiAkQXt%2F4Qeyv8wjxHbhJW%2F6iqNzTYjJW5SwYTsBiSvgDbFDDITe0Y96umnbeg2Yw5Uas1VMjt4TS1POSfTAWPRaWDckbYbNQKzqLzxdMSp8%2BGoj1xG%2Bamm3B1Ka3IDWx7I2rt01FVaunz7LFL4EhIwSOGuMKDjwmzD12rDeon05s4LSN3dtY5DPD%2Fgf%2F91VZI4AnG1NR4mYjF2lDjFTL%2Ficnd%2FEr6qEDkey0mYUisB9XXQQ83z7t8EUedWHxJSkWVwHvyk9SVSQCdxZw7YjNIoHZGXY4iayyiE%2FVd3o1QEcqflJ0y6d7Xuwv05W%2FE8hhSxiiIzU4OnuERZAKgqtbzXT3bNL%2BWsKtKqY5WBsh1A2ROD1uImMIuwhb4GOqUBnEP04MMWksobZl108mzKzJN%2FVXxByqAiH731wZBjmDmgo3xZL9gkPqN%2FIF917oeSGLwBHWjtNOhNOaMrxEJJfuIoqXyBX0JP0B0mKtb5yI2h3V9%2B6C3%2FS1Ff1kk%2BrfizX%2BJUutNnnhaU49olIYOv9G53EcHjd68bK20iZmlKTqpFwaWl%2B5Xxe2RVfPN0bOnO%2BSe4nHHalKNPELIPiOjBJ151087j&X-Amz-Signature=e0fcd5d640181f65efc498b2cecd2bfe1a9cf75592a1bb8ecc1fedfaa005c92e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
