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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7FZDXL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCus0S%2Bqi9HoGLzgJnMd2bnyf6CqAM9T6HRlIS79Mc1PQIhAMUoMXdNsfSbSNu69m8nFWiZsqSxx7YXM6zGC%2FvTFcXsKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD51cWG1acjcAv9tQq3AM6Cp7L3O8qsEfnjw%2FIA6PyBVKBjKJazzkvydehlPl%2FIVBk8Yxu33fxVjTR1HKbvqp2L2JGwwdvO0bSLbhmnmK%2FFXtZemGdVjjeHcqAtP3jd0IkkRJsfvc9b0WFSJR2ki%2FWP19dmnEGAMepz3Khiaa0oF%2FpRDwzuvJOnY836u1iNNOjnJmYVjVQVc6B5ReZteSkXSfelhfMbouQsDJfDFHmUak7JB%2BHNDdGjZYpo4Pjo5jZLPmHqDjGUBIvpthm3rVEXyuBPsJubxVxGiDjtsc6Rs6HiTC3Wjf%2FH%2ButUElifnqdX9C2lE91KjVCQF5Y%2F5B4NcCY7ovFFHkurAKhH6NdzinHfLGEgEtE5GJjKFJ4y2Jdi%2BIYAjr5uIL1fbGkQCPtPAWxHYhNJQjZ%2BjWVuShpeyq8PvKgwVIG3%2ByW%2FPp3oCxej5cJKbnbqMS5JGeqUwHaMa%2F3LIkH0NOog03426%2FGnvocr2THIjnw65kCPuk5rhPimJ1FmDM%2BhApuD3I274PXopxyHWXtj%2BsPRVfmgYpxUvWc7AB20aXV%2BINTGbpq6CmD5X8TpQ4kQm3xHfHd7ZeekTUqn6OZlLHVdumnSjtY5%2FqDNfhOEVt1tsZr0ZD73K%2Bt7ULaV%2B7QYiUCsDDG9eDEBjqkATd71CZB78r3b6pDpMHm3CSq%2B0Qg0jjf9waD2DmcdiDt7zsQ%2BMq4xEn9UxSV6gVtFyjDwRIf8x%2F3CsBxT46u8m9%2FQDDeY4XNJ1u7%2F6%2B0g%2BdNIS9ZCrZNi5sVhhxSa1x9zl1OLjhIV8YfInqPj484OR%2BJkoTvILKcIdDg394QHb2VHlum4mBw6Ny6fBQlUxJdoLJvwd0zqWfOS3lUUUcngslbm8oP&X-Amz-Signature=4de5a5479213a610f597541afe0d4640974868bb98cc2e9d68093abe7d585b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7FZDXL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCus0S%2Bqi9HoGLzgJnMd2bnyf6CqAM9T6HRlIS79Mc1PQIhAMUoMXdNsfSbSNu69m8nFWiZsqSxx7YXM6zGC%2FvTFcXsKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD51cWG1acjcAv9tQq3AM6Cp7L3O8qsEfnjw%2FIA6PyBVKBjKJazzkvydehlPl%2FIVBk8Yxu33fxVjTR1HKbvqp2L2JGwwdvO0bSLbhmnmK%2FFXtZemGdVjjeHcqAtP3jd0IkkRJsfvc9b0WFSJR2ki%2FWP19dmnEGAMepz3Khiaa0oF%2FpRDwzuvJOnY836u1iNNOjnJmYVjVQVc6B5ReZteSkXSfelhfMbouQsDJfDFHmUak7JB%2BHNDdGjZYpo4Pjo5jZLPmHqDjGUBIvpthm3rVEXyuBPsJubxVxGiDjtsc6Rs6HiTC3Wjf%2FH%2ButUElifnqdX9C2lE91KjVCQF5Y%2F5B4NcCY7ovFFHkurAKhH6NdzinHfLGEgEtE5GJjKFJ4y2Jdi%2BIYAjr5uIL1fbGkQCPtPAWxHYhNJQjZ%2BjWVuShpeyq8PvKgwVIG3%2ByW%2FPp3oCxej5cJKbnbqMS5JGeqUwHaMa%2F3LIkH0NOog03426%2FGnvocr2THIjnw65kCPuk5rhPimJ1FmDM%2BhApuD3I274PXopxyHWXtj%2BsPRVfmgYpxUvWc7AB20aXV%2BINTGbpq6CmD5X8TpQ4kQm3xHfHd7ZeekTUqn6OZlLHVdumnSjtY5%2FqDNfhOEVt1tsZr0ZD73K%2Bt7ULaV%2B7QYiUCsDDG9eDEBjqkATd71CZB78r3b6pDpMHm3CSq%2B0Qg0jjf9waD2DmcdiDt7zsQ%2BMq4xEn9UxSV6gVtFyjDwRIf8x%2F3CsBxT46u8m9%2FQDDeY4XNJ1u7%2F6%2B0g%2BdNIS9ZCrZNi5sVhhxSa1x9zl1OLjhIV8YfInqPj484OR%2BJkoTvILKcIdDg394QHb2VHlum4mBw6Ny6fBQlUxJdoLJvwd0zqWfOS3lUUUcngslbm8oP&X-Amz-Signature=e29f4a3e3c42c9790008d162d3cab4930e51027aad8246051eaedef5ec334ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
