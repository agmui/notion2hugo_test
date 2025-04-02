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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTYRSSXB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEodrXZ%2FRC10LPIN6QXjvL3R05TyZLg9KOTnsUSi90zxAiA1O0bsW1ChFTC0yc7Cj5BdnftErcw8r%2Bkq4d6tEkmQhSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmKUdJfu1AeKYehDKtwDioWyHYuAc4xGtGAUsHEmS5kaROblQFCUufgEt0uHOPNrfDbaDNn7sqkMmSO9XLKvXlSGQK4YLTtcSGWnzBz8OoK3olif86IOCT54ob16rfN%2B08r9jhS64BqSNkRDJWZ7vAlX5%2FCNBMR67L3p2m1yPzM6FVtY8kQleRtty3emhPwadRMLl4v4TSpSJrq%2B2LWl3EpjWoSu0WRdA3DT6qrZYckYbOnuLgF2hTgS%2FES5w9FEK239SQB3UolEgdcH7wMIe85JeR6KEAU8h%2BXlhSiFZASftWvODmB7KLwZMNlDlQp0uk%2Fm%2B9PHmdgsTe55iXoXy8ZwpUfSlGA9ShTU%2FjfremkhlIKMPkX7LWHa2wDH0XU9FhRgA8RZF%2FREj55tYJd%2B9pYsJa0smvXglluHB8FzgVzAfzcWanLHjIOoDe3R6ZpVATCCjM14dpmkwVc6eIh1GQtqisyTMz7ESsSBOzfmQEm1j8RtrVC5aMIuGQpQnh2dFzlSszhwIZ5UF8X0EMD1q9gMjHGkPu3bAZ0D%2F5Ufre3B87xEkpzcWGe15nWqeZSGTVq%2Bsl1Y2U9oCNXx0Hj9wfhDbUtoV9z7R3X2p4C7y0K%2F6xm4fYB2iGwtGyTFN7JZ7WeaneZdpnSDvf4woOm1vwY6pgHik2uebimCDMEkS%2BB00uAH5W8%2FUz11o6SRenA%2FBXG%2B5EbLyStMeF1GMk7CaRBqeRQ9xaJmrIaxOXYkM8XgGVC5Pcyjw4IB4DPwBIDh1s%2FCCKebT8N0dMWyKZc2XtTaJVKw6%2BdbJYGhdiwL5yxiCCNQML7qOhgutip4aGsh2tr4frOTddWHX3qpmmhOxJ3JUeYlmqNI7KWsxwJH4OnGFLcdmZGA1Z7d&X-Amz-Signature=68e5416716bab0e134cf2ed0caaed6e974dc081163f25f3ad586ce1f97878079&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTYRSSXB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEodrXZ%2FRC10LPIN6QXjvL3R05TyZLg9KOTnsUSi90zxAiA1O0bsW1ChFTC0yc7Cj5BdnftErcw8r%2Bkq4d6tEkmQhSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmKUdJfu1AeKYehDKtwDioWyHYuAc4xGtGAUsHEmS5kaROblQFCUufgEt0uHOPNrfDbaDNn7sqkMmSO9XLKvXlSGQK4YLTtcSGWnzBz8OoK3olif86IOCT54ob16rfN%2B08r9jhS64BqSNkRDJWZ7vAlX5%2FCNBMR67L3p2m1yPzM6FVtY8kQleRtty3emhPwadRMLl4v4TSpSJrq%2B2LWl3EpjWoSu0WRdA3DT6qrZYckYbOnuLgF2hTgS%2FES5w9FEK239SQB3UolEgdcH7wMIe85JeR6KEAU8h%2BXlhSiFZASftWvODmB7KLwZMNlDlQp0uk%2Fm%2B9PHmdgsTe55iXoXy8ZwpUfSlGA9ShTU%2FjfremkhlIKMPkX7LWHa2wDH0XU9FhRgA8RZF%2FREj55tYJd%2B9pYsJa0smvXglluHB8FzgVzAfzcWanLHjIOoDe3R6ZpVATCCjM14dpmkwVc6eIh1GQtqisyTMz7ESsSBOzfmQEm1j8RtrVC5aMIuGQpQnh2dFzlSszhwIZ5UF8X0EMD1q9gMjHGkPu3bAZ0D%2F5Ufre3B87xEkpzcWGe15nWqeZSGTVq%2Bsl1Y2U9oCNXx0Hj9wfhDbUtoV9z7R3X2p4C7y0K%2F6xm4fYB2iGwtGyTFN7JZ7WeaneZdpnSDvf4woOm1vwY6pgHik2uebimCDMEkS%2BB00uAH5W8%2FUz11o6SRenA%2FBXG%2B5EbLyStMeF1GMk7CaRBqeRQ9xaJmrIaxOXYkM8XgGVC5Pcyjw4IB4DPwBIDh1s%2FCCKebT8N0dMWyKZc2XtTaJVKw6%2BdbJYGhdiwL5yxiCCNQML7qOhgutip4aGsh2tr4frOTddWHX3qpmmhOxJ3JUeYlmqNI7KWsxwJH4OnGFLcdmZGA1Z7d&X-Amz-Signature=40d9bad9d0bb2e332b311e21fd810b9b3630ee05f965ecaf1d6013a0d3138834&X-Amz-SignedHeaders=host&x-id=GetObject)

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
