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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2O2P2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkxs2VlWKp4T8U%2B5d6nOOgN9eDng3TbUIKY7oKxhu5bAiBH6mXg7PD0sUNDJwC217kQL13nIDOZuMzQ5B%2ByMjORgSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38Dy3Xjpl3jpqYdHKtwDJ2sEiLmz34kToBK2cNaWBgnJj15Uut8mbNRqHGeJOERu5cS%2BHosXa8pWHXJXBxYA6IdYPD4u%2F%2Bh3uYJNCgT9eDOTm9aMoNccxvaCngIcdyuGrGnliZtRICJ1WRmQU2KSm0sNl5ZydysStSHraDxLZtkIp6Pxz8vlkcWXoukQnR9i0S1b2QuMsaUYu8AldCqFZp6%2FXF8l0dGG%2Fp281Ki79gnI4kdeabkuMGCTP3tqFAUaiJ7NvCAwr5EoYLgHYLb6t6F06Ct8UQLnEiy3OeYugHAb8BNyN22FMiLelMSHZwE0p3QNewG1GRu%2BD83LieBtAKX%2BHp%2BttoroxruZ5BQEJXTO9XQilT6JEDQ5IuVgzX7xslHDuTuJgFdLmcXHsLBmlO%2FXWLYsq67l4Y%2BR3PREgfF9znV6zNhgLRQKrRBP12jdALzCgYx%2FMqgONHVFikfDVBaWC7WBn1qlwQxu38lWdKmbRc6ylSKRM6SU54TfISuXAVc1FSN0Ymolsk8GktpHLTHOMgRdCS4VMsnPhsWb5xgN5c%2BOaUWFZzXyhOVTfZx7XwIDgn%2BB%2FU%2BF87TjGSsQIT5svhVVTzshecuNG0m67weyyJWRf9%2FBcSHs3w%2BZ3RpNckoFdwyuh40XyBow1JaVvgY6pgECzVJZKzZ6gRAInZ8Xm76B8VoWU7x%2BvHxaGUW%2FpF3xGNcucjm6G5ulb9c5J2f7Q7jEGxhb8a%2BbOkoiIzfBF2GTMSE%2BK6lkxY%2BbSugeABC92D3DYSM6X6fivyH%2BYAMQDAP1ueFG8LKx8cPnkwkjzZfoNNQh87oZLJNMivXNU5GoE5ZLyxCy%2BuEZ%2FMoACRfPKw1Y9Yrfw9vRx0yPk9TNC8xtF0y%2BYT%2FG&X-Amz-Signature=75de5f88a577f8a144766374de6f615afa8c17b800fa6ac7cbfe1e0e4de5acc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2O2P2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkxs2VlWKp4T8U%2B5d6nOOgN9eDng3TbUIKY7oKxhu5bAiBH6mXg7PD0sUNDJwC217kQL13nIDOZuMzQ5B%2ByMjORgSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38Dy3Xjpl3jpqYdHKtwDJ2sEiLmz34kToBK2cNaWBgnJj15Uut8mbNRqHGeJOERu5cS%2BHosXa8pWHXJXBxYA6IdYPD4u%2F%2Bh3uYJNCgT9eDOTm9aMoNccxvaCngIcdyuGrGnliZtRICJ1WRmQU2KSm0sNl5ZydysStSHraDxLZtkIp6Pxz8vlkcWXoukQnR9i0S1b2QuMsaUYu8AldCqFZp6%2FXF8l0dGG%2Fp281Ki79gnI4kdeabkuMGCTP3tqFAUaiJ7NvCAwr5EoYLgHYLb6t6F06Ct8UQLnEiy3OeYugHAb8BNyN22FMiLelMSHZwE0p3QNewG1GRu%2BD83LieBtAKX%2BHp%2BttoroxruZ5BQEJXTO9XQilT6JEDQ5IuVgzX7xslHDuTuJgFdLmcXHsLBmlO%2FXWLYsq67l4Y%2BR3PREgfF9znV6zNhgLRQKrRBP12jdALzCgYx%2FMqgONHVFikfDVBaWC7WBn1qlwQxu38lWdKmbRc6ylSKRM6SU54TfISuXAVc1FSN0Ymolsk8GktpHLTHOMgRdCS4VMsnPhsWb5xgN5c%2BOaUWFZzXyhOVTfZx7XwIDgn%2BB%2FU%2BF87TjGSsQIT5svhVVTzshecuNG0m67weyyJWRf9%2FBcSHs3w%2BZ3RpNckoFdwyuh40XyBow1JaVvgY6pgECzVJZKzZ6gRAInZ8Xm76B8VoWU7x%2BvHxaGUW%2FpF3xGNcucjm6G5ulb9c5J2f7Q7jEGxhb8a%2BbOkoiIzfBF2GTMSE%2BK6lkxY%2BbSugeABC92D3DYSM6X6fivyH%2BYAMQDAP1ueFG8LKx8cPnkwkjzZfoNNQh87oZLJNMivXNU5GoE5ZLyxCy%2BuEZ%2FMoACRfPKw1Y9Yrfw9vRx0yPk9TNC8xtF0y%2BYT%2FG&X-Amz-Signature=60d4ca34a34293a94920d919bc6fe0dc5c535ec0f3f144a4072a39e814541f19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
