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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GFTMCK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFzi%2FUlAbjuhP1hYJu9bSJL3USoE1pkUxTZ9JClmAyzFAiBx2O2IDT18G6OsGWoC2XbB3JVPnWJOqoHluz%2BY2400VCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRZFnsqUdg7It6H4KtwDBMwLE9mw0xFe9%2FfuoL6VAV7GNf4AapHNB5Vp1qq1p4XWuvmuwmBzOImZ9vcTNu9b5UPbcUggSfPJwdnoIHnZ%2FCQwWkiXReA8bnADHucjHocsS6KSGKDuSwbZOoLoR5K%2BaGPY%2BeuJ85rC7mKPd%2Bc0j8%2FElgQCzkzx9fogw7niigrSK7U4y19TBAeSmcJzpiQg1fImTvJUGn0RscVP89dC4%2B0fJNiOIYzmKQGhILYQcM%2FBXkaIKPHrdhWCMvvytK2Ebz0FrbiOzGox8%2BIy4lq77gdW5Cgypd3%2F8R1YyeYWixtmDjgYp8oLDq6BaoE2S8GctEUg%2BWgy2K6JaoLVUaOL5Ea0tlF%2BnUNByTcBtK5q6kSWJMNFaaN9fj%2BqnCalWcjAeVfsGx%2Bi%2FytJyHxnl4Akh9D%2BEgsORiBxgglg5xJ9pksMdtEc0kNmTeMpFilS%2BJIBUOLXREJD7qedvLPZdfNpC6s%2B7ewSbgGKr%2Fv6yXYRHUyW7iyNEFNg4Mq9VNo1f60sabsZ0LZHFGj29Q0wix4OPwEAoyUjoFi1FZxea6u0KmkOTUAl%2F6iU7rEmeUQg9pDQzfWbzEqpYUzLMQZcfYB5ismq7%2FFuzoPqCsa70r8TLKTTQ9C5mk2hw6j5ascwzIDJwAY6pgE5E%2F%2BFmTuxxeyOdDp4ixPBrAWKZxtcjQ7Nkim0bTEPfCaS9G09x7o1eRmnlMoV4t7jQ01AK2SldOcnt2%2Fz6bd%2BbW253PTD7q972clWKrC0HMY6gM8gm8Zw2x%2FM4kpEDQ2eY2Rx48EJBbgYAdegBOqwcQ74SyjhDbbjBXcM352BSdb8LNcDuXkzHVQ4y7vRK4onok92SjwQhSPgiLNAGMk%2FDleMwtDf&X-Amz-Signature=9d48848f6bef9be36c5ed20cd860e22114a098c5f0541337ced0f0f10a2d0591&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GFTMCK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFzi%2FUlAbjuhP1hYJu9bSJL3USoE1pkUxTZ9JClmAyzFAiBx2O2IDT18G6OsGWoC2XbB3JVPnWJOqoHluz%2BY2400VCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRZFnsqUdg7It6H4KtwDBMwLE9mw0xFe9%2FfuoL6VAV7GNf4AapHNB5Vp1qq1p4XWuvmuwmBzOImZ9vcTNu9b5UPbcUggSfPJwdnoIHnZ%2FCQwWkiXReA8bnADHucjHocsS6KSGKDuSwbZOoLoR5K%2BaGPY%2BeuJ85rC7mKPd%2Bc0j8%2FElgQCzkzx9fogw7niigrSK7U4y19TBAeSmcJzpiQg1fImTvJUGn0RscVP89dC4%2B0fJNiOIYzmKQGhILYQcM%2FBXkaIKPHrdhWCMvvytK2Ebz0FrbiOzGox8%2BIy4lq77gdW5Cgypd3%2F8R1YyeYWixtmDjgYp8oLDq6BaoE2S8GctEUg%2BWgy2K6JaoLVUaOL5Ea0tlF%2BnUNByTcBtK5q6kSWJMNFaaN9fj%2BqnCalWcjAeVfsGx%2Bi%2FytJyHxnl4Akh9D%2BEgsORiBxgglg5xJ9pksMdtEc0kNmTeMpFilS%2BJIBUOLXREJD7qedvLPZdfNpC6s%2B7ewSbgGKr%2Fv6yXYRHUyW7iyNEFNg4Mq9VNo1f60sabsZ0LZHFGj29Q0wix4OPwEAoyUjoFi1FZxea6u0KmkOTUAl%2F6iU7rEmeUQg9pDQzfWbzEqpYUzLMQZcfYB5ismq7%2FFuzoPqCsa70r8TLKTTQ9C5mk2hw6j5ascwzIDJwAY6pgE5E%2F%2BFmTuxxeyOdDp4ixPBrAWKZxtcjQ7Nkim0bTEPfCaS9G09x7o1eRmnlMoV4t7jQ01AK2SldOcnt2%2Fz6bd%2BbW253PTD7q972clWKrC0HMY6gM8gm8Zw2x%2FM4kpEDQ2eY2Rx48EJBbgYAdegBOqwcQ74SyjhDbbjBXcM352BSdb8LNcDuXkzHVQ4y7vRK4onok92SjwQhSPgiLNAGMk%2FDleMwtDf&X-Amz-Signature=f8f9e053a9e23bd56c9a7908abfe8afb2c8c1f9712ff12b3234dad031d621266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
