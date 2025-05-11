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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVJIZQA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICrQvGcAHcaY9zjUntlwQ3gA%2FxWG6cY4FicvKrRXLpJPAiEA%2F9k2we6B4s2Sg7D8pkNLbzugwTpxh2h9ADY%2BmF6invEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLno%2Fkk%2Bs0eVT%2FpmuSrcA14tvSHS4DJKC9Qn%2FTRGVz7TG7KmCwMmJzxpYIV6eWY%2FQUfglJMsMXs8%2Bq6m3j67kg2ZwRov7yC8moeThar7jjsTCvb55d1IexvQtiyqSZCmXj0n1CR5TWVmLCmO44rLzxAHP%2FBqJ4p5ZbvDJt%2FvgG8zVrhuvEnGCOattB740HDPQncGwmxHJ0n%2Bto8KQev1VvMfaWJKuBXXPEM3Ni4uexN%2FUQE2GThGjlz0XUwRk4nyGOocL%2FvFrYygZL4fJX1j0ES8VPTDwWupMeflPd%2FMu8DO2k1XbCu7pFRU53m5Pa%2BF8YZRFupI2UvD4ikqzSNPXgdofF8c3KrTWOBoD8xydk5fVCfZCJtBqWCeHcOa%2FODhbz0bhTRgRRR5blSO8k5dY6bwS2TDBsAYzrQakPtW4fkc%2FGHIIIZBfsv5dDauXnFAGkmLv46qnLOac%2FTNLv0PG0PrYEYb7TjkRSDNT4LP8ylP7bug78sNrTA715IOuHEFiawPFfvxi0GdzIySiI7GVZIezaFbQ6Q8mVdqnL96NAiRSVIN%2BgVH8UbWURCm5rwE4pmJxt%2BtLoXOc7%2BkPnYq%2FByCVYwesV78XtOD2t2vD2UtA%2F%2BQtisBjA2Wc3GxOWyYRaKbBwH%2BGhV8CXWtMN7egMEGOqUBwYyLccqwCc0GS91zDh6GY%2FpRasz%2BN5doE8g3OAbFigGDLFDAWOLrpAvj%2Bn270r3YTU5kZ3xcSmdWyun699jAYUIVE5ZTgFxkgK5u2i3Trjn2SQjv%2B9zXsaU74CRclfP300d77vZGQ%2BtvS32%2Behnd8kaDMR1LX%2BwGgX%2B1EU5S8CpMz6S2oufFL5K%2BuVL9lgIGBN2j2D48fnnEo2iWqawZhTT%2Bs8oj&X-Amz-Signature=b0f4a816b49792b1a834cba27046dd0ca500faece28d2da02afc933653d7d1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVJIZQA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICrQvGcAHcaY9zjUntlwQ3gA%2FxWG6cY4FicvKrRXLpJPAiEA%2F9k2we6B4s2Sg7D8pkNLbzugwTpxh2h9ADY%2BmF6invEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLno%2Fkk%2Bs0eVT%2FpmuSrcA14tvSHS4DJKC9Qn%2FTRGVz7TG7KmCwMmJzxpYIV6eWY%2FQUfglJMsMXs8%2Bq6m3j67kg2ZwRov7yC8moeThar7jjsTCvb55d1IexvQtiyqSZCmXj0n1CR5TWVmLCmO44rLzxAHP%2FBqJ4p5ZbvDJt%2FvgG8zVrhuvEnGCOattB740HDPQncGwmxHJ0n%2Bto8KQev1VvMfaWJKuBXXPEM3Ni4uexN%2FUQE2GThGjlz0XUwRk4nyGOocL%2FvFrYygZL4fJX1j0ES8VPTDwWupMeflPd%2FMu8DO2k1XbCu7pFRU53m5Pa%2BF8YZRFupI2UvD4ikqzSNPXgdofF8c3KrTWOBoD8xydk5fVCfZCJtBqWCeHcOa%2FODhbz0bhTRgRRR5blSO8k5dY6bwS2TDBsAYzrQakPtW4fkc%2FGHIIIZBfsv5dDauXnFAGkmLv46qnLOac%2FTNLv0PG0PrYEYb7TjkRSDNT4LP8ylP7bug78sNrTA715IOuHEFiawPFfvxi0GdzIySiI7GVZIezaFbQ6Q8mVdqnL96NAiRSVIN%2BgVH8UbWURCm5rwE4pmJxt%2BtLoXOc7%2BkPnYq%2FByCVYwesV78XtOD2t2vD2UtA%2F%2BQtisBjA2Wc3GxOWyYRaKbBwH%2BGhV8CXWtMN7egMEGOqUBwYyLccqwCc0GS91zDh6GY%2FpRasz%2BN5doE8g3OAbFigGDLFDAWOLrpAvj%2Bn270r3YTU5kZ3xcSmdWyun699jAYUIVE5ZTgFxkgK5u2i3Trjn2SQjv%2B9zXsaU74CRclfP300d77vZGQ%2BtvS32%2Behnd8kaDMR1LX%2BwGgX%2B1EU5S8CpMz6S2oufFL5K%2BuVL9lgIGBN2j2D48fnnEo2iWqawZhTT%2Bs8oj&X-Amz-Signature=1e6b473458bb2044f7bdd03e7c90979f824a1ab910662011bd1fe77dc05762f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
