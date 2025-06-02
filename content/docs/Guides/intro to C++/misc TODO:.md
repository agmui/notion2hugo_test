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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4KRUMY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDlV1n80IhcDmuOQuY2sGOAoNm%2FGGzmH8prDP5AGLG7CwIhAJJaQuqzjav2ZIzwFtOkVeuXv8fOZsH1K786TsUGRSbaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz42gaUFAcLiZTvK4Iq3AN%2FCWFgZK97jW1A8ES0kkrBv40okk0dVuZgy4nt1h%2BRwNnzOurfww8DzVKqRPpBb9lebjRPvt0UXHVKNWy2GOvPFWWssj3p%2BJAN3IromddIK3nDHvS3gBRHfu1iqFZpPdyjYEfb75mng2zakUb7j9pCFBo9BWzEwi8XyLJVvKOms0dMuC4Hc%2F9fRhC%2BUgLiEUy0mnBCMaN6Q3eIPx5ZmmP8O0XRlC5m%2FznLbqJgugApxswT0oS8ugh3bETrZ6i4DfBvJJQpi1oCaXnC1aGwaphpgJF%2BPcufru3ofx8N8HjFSpCczaPetqJ3E%2FO8JP3LARUIF7BxjAhcXdC4uRS0VJOfMqAe5Xuz3wGdCV8EcqmdnmaLX4yl6OdPUuAQ0%2FvvAlDro7Swgxwhe6VJ%2B9ejtcGdWsB0fYzJ9ExL69fFZ1YHvA5atWe0LGcwPHXzbDIW7fYcVkxRpLBKt97QIdLp0GfbOlqePHxfOHVZaVWxgttDYMkSsMAL2w9MA3lLvB1xqyKViy7T5Zb3xjyDhaWxESoB4udZ1zVhway9Ae9%2BX6GYMsswbNDUsZGCoWhqAAyinaAMYFAkn%2BQwoZQFW9bdpgbvo%2BvkIGh9%2F4GPSxuU2sMxSplWHommDHLIPQbShTC9zvPBBjqkAWvwkv9CasayUUhr7ht65PsIeBqX2qg6T%2B4bOhr279sIZXVUTMUx1JDn9fmAEDCvMpSpSxXxiseJn0pNSudHJjNnfj0LX7Ym4sYWPmwoAHenQCAn33%2BSgggUdTadrZuAyz7R%2B33xg6w8RAuK%2B1caRT1bRjn2kyRFm2cowFlV67ok%2B%2BqJP0lvWFRWy1Do3WfuG5EnS2mtD9GgKiztNjNE7bwmA%2FUp&X-Amz-Signature=7f302416d42bfcaff258090889ed3525dc2f9f8c5efed67e8fdf6b7aa12dee76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4KRUMY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDlV1n80IhcDmuOQuY2sGOAoNm%2FGGzmH8prDP5AGLG7CwIhAJJaQuqzjav2ZIzwFtOkVeuXv8fOZsH1K786TsUGRSbaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz42gaUFAcLiZTvK4Iq3AN%2FCWFgZK97jW1A8ES0kkrBv40okk0dVuZgy4nt1h%2BRwNnzOurfww8DzVKqRPpBb9lebjRPvt0UXHVKNWy2GOvPFWWssj3p%2BJAN3IromddIK3nDHvS3gBRHfu1iqFZpPdyjYEfb75mng2zakUb7j9pCFBo9BWzEwi8XyLJVvKOms0dMuC4Hc%2F9fRhC%2BUgLiEUy0mnBCMaN6Q3eIPx5ZmmP8O0XRlC5m%2FznLbqJgugApxswT0oS8ugh3bETrZ6i4DfBvJJQpi1oCaXnC1aGwaphpgJF%2BPcufru3ofx8N8HjFSpCczaPetqJ3E%2FO8JP3LARUIF7BxjAhcXdC4uRS0VJOfMqAe5Xuz3wGdCV8EcqmdnmaLX4yl6OdPUuAQ0%2FvvAlDro7Swgxwhe6VJ%2B9ejtcGdWsB0fYzJ9ExL69fFZ1YHvA5atWe0LGcwPHXzbDIW7fYcVkxRpLBKt97QIdLp0GfbOlqePHxfOHVZaVWxgttDYMkSsMAL2w9MA3lLvB1xqyKViy7T5Zb3xjyDhaWxESoB4udZ1zVhway9Ae9%2BX6GYMsswbNDUsZGCoWhqAAyinaAMYFAkn%2BQwoZQFW9bdpgbvo%2BvkIGh9%2F4GPSxuU2sMxSplWHommDHLIPQbShTC9zvPBBjqkAWvwkv9CasayUUhr7ht65PsIeBqX2qg6T%2B4bOhr279sIZXVUTMUx1JDn9fmAEDCvMpSpSxXxiseJn0pNSudHJjNnfj0LX7Ym4sYWPmwoAHenQCAn33%2BSgggUdTadrZuAyz7R%2B33xg6w8RAuK%2B1caRT1bRjn2kyRFm2cowFlV67ok%2B%2BqJP0lvWFRWy1Do3WfuG5EnS2mtD9GgKiztNjNE7bwmA%2FUp&X-Amz-Signature=0dfeb7f3d0218ef87971324c1c5f699d41d44002b9e031838b0ff83be108234a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
