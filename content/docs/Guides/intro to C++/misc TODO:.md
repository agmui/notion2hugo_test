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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETFILEC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDRlpcPIMMkIPJrbRn%2BVD7OrSLl9ZL418657j6%2F1fljDQIhAKKWWrfvc7q2K5AJq2FHvTWDwO6bBcvRNef0qflUHVtnKv8DCEUQABoMNjM3NDIzMTgzODA1Igzfd6kjixEPKEsgAZcq3AN14nDUT7Fx2EbYpilkSxERQk8nXDK4pzuafhrK%2FRlKTLYsfqSqdOiXBzTHdkJZwrcTwiboz6%2FnL3Lhgv06e9rrjaOS3KLXU0M1Stga68LTPNLRtLi%2FjDmayAI7XYPxsj3sBLlYkl66SDHMd27lTK3JvDvd6T%2BzP2f88CHeGWJc%2F7cbToNhYTv650Y4Ihk8WyZClC%2BFT0UVzSmgVSSMn9yfe%2FK8Te6NMKc5fUi41vmrpaP7mPh3%2B9evWZ1EH34%2BeHRFhXnMJVuhO8xXqdInvr9Ydb3bfSNGZNO3XxrcZY%2BG%2Bu8Jae9H5wBz1KPEgPgREw09qKXx1EZzKFKHQR%2Fm9WcnW9RMWEAocHsH1iyjOfFhP12iZ4fXxvvp0DdtT%2Bzj0ZGtdeTEQGdQfCBSJrkRj3RGvz0sQ91JPQaC%2BXFYT9p%2FhYKFpDOY4yCFcbSPORwhodp1pGSNjxY5S0R%2B469j8B5YYIkdAtgdFp%2F22JtJyenmXDfVy%2BgoZNIGryy1JH8KPKuL2djFc46V0PKYEqcBo7M5pdRq%2Bj3gx3%2B%2F3AYnZL7TTgRL%2FjjuEdHd1pwbLxz0BDEwU4hfvBuhmxcLGD%2F5H%2FiHqvx0XwCDIBvLaEAnsH5P%2Bm%2F4s5%2F1fAgK8xBZ9DDBg9nDBjqkAdyrmxiKSk5pZPJXlszfhq1ZrOy3K0kxrSz%2F%2Fx4LtPLLwlRcNPkOiVgmPmpDi3TaZO328lO23Zr8k4U67JImZg3%2BfhMZFxheUW6StO0cf8QGMckx4pcaaw5xjr0aJEUHK%2Bvc2ZAJoHYHZ5%2BBeyqBdUQCYiObqdX%2FyLFYObKTmH1KSSLdopl4KG79T1UAR8xs7SapGA7lIfdamb0uiKP5IyzrveeL&X-Amz-Signature=b778ad2b04c888c6c451c6ab73e91430d00f5cc08aa6461aa346abc195caccdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETFILEC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDRlpcPIMMkIPJrbRn%2BVD7OrSLl9ZL418657j6%2F1fljDQIhAKKWWrfvc7q2K5AJq2FHvTWDwO6bBcvRNef0qflUHVtnKv8DCEUQABoMNjM3NDIzMTgzODA1Igzfd6kjixEPKEsgAZcq3AN14nDUT7Fx2EbYpilkSxERQk8nXDK4pzuafhrK%2FRlKTLYsfqSqdOiXBzTHdkJZwrcTwiboz6%2FnL3Lhgv06e9rrjaOS3KLXU0M1Stga68LTPNLRtLi%2FjDmayAI7XYPxsj3sBLlYkl66SDHMd27lTK3JvDvd6T%2BzP2f88CHeGWJc%2F7cbToNhYTv650Y4Ihk8WyZClC%2BFT0UVzSmgVSSMn9yfe%2FK8Te6NMKc5fUi41vmrpaP7mPh3%2B9evWZ1EH34%2BeHRFhXnMJVuhO8xXqdInvr9Ydb3bfSNGZNO3XxrcZY%2BG%2Bu8Jae9H5wBz1KPEgPgREw09qKXx1EZzKFKHQR%2Fm9WcnW9RMWEAocHsH1iyjOfFhP12iZ4fXxvvp0DdtT%2Bzj0ZGtdeTEQGdQfCBSJrkRj3RGvz0sQ91JPQaC%2BXFYT9p%2FhYKFpDOY4yCFcbSPORwhodp1pGSNjxY5S0R%2B469j8B5YYIkdAtgdFp%2F22JtJyenmXDfVy%2BgoZNIGryy1JH8KPKuL2djFc46V0PKYEqcBo7M5pdRq%2Bj3gx3%2B%2F3AYnZL7TTgRL%2FjjuEdHd1pwbLxz0BDEwU4hfvBuhmxcLGD%2F5H%2FiHqvx0XwCDIBvLaEAnsH5P%2Bm%2F4s5%2F1fAgK8xBZ9DDBg9nDBjqkAdyrmxiKSk5pZPJXlszfhq1ZrOy3K0kxrSz%2F%2Fx4LtPLLwlRcNPkOiVgmPmpDi3TaZO328lO23Zr8k4U67JImZg3%2BfhMZFxheUW6StO0cf8QGMckx4pcaaw5xjr0aJEUHK%2Bvc2ZAJoHYHZ5%2BBeyqBdUQCYiObqdX%2FyLFYObKTmH1KSSLdopl4KG79T1UAR8xs7SapGA7lIfdamb0uiKP5IyzrveeL&X-Amz-Signature=8e15df143ad6d1d4ac90611e8fac4dc3521f4f4247ecf2a215235fa3004b5756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
