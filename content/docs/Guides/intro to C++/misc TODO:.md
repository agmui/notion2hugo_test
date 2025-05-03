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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=a760eb9a031e7a219aa76dd6e89a962a3d71335e56f44211bbe785afbca9157a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=22687a93833a591082e28aa17dfde63b75d19791480a40c6da2ef9319b189b37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
