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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IEMY42%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDW62fZt4g0ImP4ORQtK4fUR%2FY%2Fi2Fqio%2FBG%2Fa24sytAwIgRYiPvdE9JyXpR64QTMGUfSEN9uqToB6GWF3Ulox3AtAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOiaShFh1%2B7To0lrRSrcA6pqYum6Ylg4KnJmFXHnlqe3Jc7d8YxHrod0krrbP%2BmhZbHLMj6kP30eEi8r7UvoIis9nKDG%2BqTDe2x9RTy6OZx21ep1W1lwy08HBl2jDqGzMgU%2BLFsZthqE8H39O8PBgL7VJJD2RvpuK7GDupYG5NNxksCxaBEg9MMM0JlbcpJ72D3jMerm0JLtINd%2F%2B2aC5S3clAy%2FfZIc6i2BBSnzbDx3vtu%2FZNIpGJihc3ha3gEBVTDMKm1gnADFdSRj5uqdv0dRlV75uEIvNS0LQNag0mhVVrj02rQMGA1PFWHjTHqFlt04zY6dMVaCevL%2Bv5C7%2FnFCcHTuD6S1n6Qe5VpeswMYxWcKIODPHQJv%2FnvVwJx7quGnu5qNWvn6s%2F2bIuNt5zjorvbhLHojd7kMRHkribL%2FXAI85TYqXsqw0qEwnxqRSqLE7WCg0tYhvmNrYwcIFeR2%2B4U%2BPdvSaHwfNVKx8kedbvivD0vZS5Wtj%2BPKJEBbrvc6ASdEWIzDDWiyn%2BGhmTiNQaIp7yhAPY2GfdP3OQX7D2WVJBX20uhlU%2FyjjDlsxni1s%2FNko%2BFSLs65TH29XwryeJEy7VXohaR9J2zPMjEOPpjJIZqjtYTWwb2b1eA2eApTayCTG9jGMU%2BGMIfdl8QGOqUB%2FwaY%2F7%2BgDetZOYDGtOgMPZlsfP9Cp%2BSDWi5wP0nDOqhCAGkZE5J5jmhIZqasnnyDytlK4wT72T95eCk65dSutujBKS379d4sJSuNeYG5ZdYu2a9AVL3ErNdOwy28DCqjg8rrTWv2ua%2FAfuAkv%2FnZIU%2FdZYEcwZQK54DNK0f02cLymX%2ByH%2FZYO024dtmQu7wc%2FccdTd9%2FAaIdMuZSfFxBZlH1QmMg&X-Amz-Signature=82c09ce840141fe5e4eda897f5f777b042bfa19f09de66368f4d03f240bbcdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IEMY42%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDW62fZt4g0ImP4ORQtK4fUR%2FY%2Fi2Fqio%2FBG%2Fa24sytAwIgRYiPvdE9JyXpR64QTMGUfSEN9uqToB6GWF3Ulox3AtAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOiaShFh1%2B7To0lrRSrcA6pqYum6Ylg4KnJmFXHnlqe3Jc7d8YxHrod0krrbP%2BmhZbHLMj6kP30eEi8r7UvoIis9nKDG%2BqTDe2x9RTy6OZx21ep1W1lwy08HBl2jDqGzMgU%2BLFsZthqE8H39O8PBgL7VJJD2RvpuK7GDupYG5NNxksCxaBEg9MMM0JlbcpJ72D3jMerm0JLtINd%2F%2B2aC5S3clAy%2FfZIc6i2BBSnzbDx3vtu%2FZNIpGJihc3ha3gEBVTDMKm1gnADFdSRj5uqdv0dRlV75uEIvNS0LQNag0mhVVrj02rQMGA1PFWHjTHqFlt04zY6dMVaCevL%2Bv5C7%2FnFCcHTuD6S1n6Qe5VpeswMYxWcKIODPHQJv%2FnvVwJx7quGnu5qNWvn6s%2F2bIuNt5zjorvbhLHojd7kMRHkribL%2FXAI85TYqXsqw0qEwnxqRSqLE7WCg0tYhvmNrYwcIFeR2%2B4U%2BPdvSaHwfNVKx8kedbvivD0vZS5Wtj%2BPKJEBbrvc6ASdEWIzDDWiyn%2BGhmTiNQaIp7yhAPY2GfdP3OQX7D2WVJBX20uhlU%2FyjjDlsxni1s%2FNko%2BFSLs65TH29XwryeJEy7VXohaR9J2zPMjEOPpjJIZqjtYTWwb2b1eA2eApTayCTG9jGMU%2BGMIfdl8QGOqUB%2FwaY%2F7%2BgDetZOYDGtOgMPZlsfP9Cp%2BSDWi5wP0nDOqhCAGkZE5J5jmhIZqasnnyDytlK4wT72T95eCk65dSutujBKS379d4sJSuNeYG5ZdYu2a9AVL3ErNdOwy28DCqjg8rrTWv2ua%2FAfuAkv%2FnZIU%2FdZYEcwZQK54DNK0f02cLymX%2ByH%2FZYO024dtmQu7wc%2FccdTd9%2FAaIdMuZSfFxBZlH1QmMg&X-Amz-Signature=f1a62074e5efdf407fd3beeb3e6fba6f11999359e983706d346d447431056446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
