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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6BHIA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb3u63fwu3FzPX392Gg%2FaFKSAjBnvtlJ0BEB4e5fQnaAIhAOXuoOtinotXcF5CtT7cEigNBUSHDVylrvY0NympxwYMKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOcdSRDaucRejdoa8q3AOhvSUAcXogxR3Y6QOCbwIaw93BAE2GEOEOLPJnAwqwRHuBFOTDw%2BH9iWKUxuLDDfst6eGAFAUPMcTBXNoNZHL%2FL9QLl621FpdOhKtw%2B%2Fb70NAf79ECwxkUGKiJkhs3tFvN%2BnchsNWS83pyLRC2JkoJJ2HOozUgAC3981nDhUwKhG7hILKxL14lYVNzlzc4i5Oc%2B32cM80mCDoO7IP06qgHW6tAl69p%2FMxWUYHFkPX3A63W6%2FrfA%2F%2FCqX6iY1HADInwukTHKS3lz4yUuXe2OeKWS0JF%2BBQ3wGNGP5DZlA9wu5OfHl9zIvibB%2B2lVrJRj04K86X00CxAoEMcTIG7NJnovPTHh0EYWgicaBjo4i5oinMCa%2BbPxZ2p9tvMT70WgGTHcM%2FuyhyluPQ39cz6ccoXSx42%2B2Ye376MW%2BmkNGy%2Fa6gX1Iaf2l8%2BGsMlwEifoHRNWcWtDf8UtVIEslKVEA5iDqLUBIYa993yV1A5Eg0xYNDG7hqiJnHKn0T68upZfpfUrgCpumCr%2BGdybTwFj3NPmax%2F6LJYNDSO9FqvfZAAOs5UwPfb0uQHrCswyfjwhMlKKsRBWh3pXEYC0%2F7RVGDQrrvdl3SdWmyUu8HWSliOOJ8MVie5uq%2FLDxRsPzDXipy%2BBjqkAX%2BqmcyK90ukg3ZLsZppu2Y%2B%2BDmCaCEJ4lNKdHdgh%2BHCDgDZHItqUi%2Bsvgs9%2F9d1f2d3wkDJWr5reOw4EWoGSMKuNZLZ%2B73qdnZOGwsUqHTMdwKxfslEcKSkzGqcmaoImryQSWML2niq0N9VhxL157kexPbv4cthcjgNtL%2BwEXsJdX43NyXcB%2BndquQFJNSMgdsMadRSq9xXw0FqYJ1JFiLvGAdi&X-Amz-Signature=1f03d3fc76d968244ec1d0917ecb957f4ce7a1f6cd8de4fe1235fb2523d6e55c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6BHIA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb3u63fwu3FzPX392Gg%2FaFKSAjBnvtlJ0BEB4e5fQnaAIhAOXuoOtinotXcF5CtT7cEigNBUSHDVylrvY0NympxwYMKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOcdSRDaucRejdoa8q3AOhvSUAcXogxR3Y6QOCbwIaw93BAE2GEOEOLPJnAwqwRHuBFOTDw%2BH9iWKUxuLDDfst6eGAFAUPMcTBXNoNZHL%2FL9QLl621FpdOhKtw%2B%2Fb70NAf79ECwxkUGKiJkhs3tFvN%2BnchsNWS83pyLRC2JkoJJ2HOozUgAC3981nDhUwKhG7hILKxL14lYVNzlzc4i5Oc%2B32cM80mCDoO7IP06qgHW6tAl69p%2FMxWUYHFkPX3A63W6%2FrfA%2F%2FCqX6iY1HADInwukTHKS3lz4yUuXe2OeKWS0JF%2BBQ3wGNGP5DZlA9wu5OfHl9zIvibB%2B2lVrJRj04K86X00CxAoEMcTIG7NJnovPTHh0EYWgicaBjo4i5oinMCa%2BbPxZ2p9tvMT70WgGTHcM%2FuyhyluPQ39cz6ccoXSx42%2B2Ye376MW%2BmkNGy%2Fa6gX1Iaf2l8%2BGsMlwEifoHRNWcWtDf8UtVIEslKVEA5iDqLUBIYa993yV1A5Eg0xYNDG7hqiJnHKn0T68upZfpfUrgCpumCr%2BGdybTwFj3NPmax%2F6LJYNDSO9FqvfZAAOs5UwPfb0uQHrCswyfjwhMlKKsRBWh3pXEYC0%2F7RVGDQrrvdl3SdWmyUu8HWSliOOJ8MVie5uq%2FLDxRsPzDXipy%2BBjqkAX%2BqmcyK90ukg3ZLsZppu2Y%2B%2BDmCaCEJ4lNKdHdgh%2BHCDgDZHItqUi%2Bsvgs9%2F9d1f2d3wkDJWr5reOw4EWoGSMKuNZLZ%2B73qdnZOGwsUqHTMdwKxfslEcKSkzGqcmaoImryQSWML2niq0N9VhxL157kexPbv4cthcjgNtL%2BwEXsJdX43NyXcB%2BndquQFJNSMgdsMadRSq9xXw0FqYJ1JFiLvGAdi&X-Amz-Signature=f1bc87db0db73fd50b5ecbcf695505c094fea85052ff0c7bcf854688984d93a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
