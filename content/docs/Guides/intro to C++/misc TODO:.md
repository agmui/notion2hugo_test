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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5L6O2J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCazp2Od%2BOJorEDPrSRgWk8bTyFN7DrehLG0PKoB7wTVwIgTQ3HRYXn0%2FB7vbT9gGsd%2Bg56tsRqp%2BKR6%2FDD7HE%2B%2FvsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXu21CSQHFGHDWsBircA8OxTk%2FBB%2FpYkGDZ0nKKQYQ%2BH0zTC%2FgFaFgesJyHM%2FXAX6t3b6hppwLEEPpfA%2BqtWqd1ZF66eNrNeC6CV7AuTAUryATFSVd2WXREgF2SsV73cfI8RGJh1R0Fmj%2Fh5BOX8pQtGw25hksbX67jEvuvuIPG2Gso1EYXZ1xiwoS%2ByUlmiImyrZ%2FiibEwEsGDaZhs6uP%2FeFYu8jnpvuVzbFy5pIhBFwCAGfyy2DQz6l1C9j7hCCc7re1%2Fwg%2F%2BUkwKg5267JC0eZX5aGwzsem09lvQLlJDZXFfaUgJeeZfKrucpGFAa5sLvOlqjCo4PWOBAB0r5mC8geaDdj0EbYsVD5DqcRaEgjsbdqbZz32xO3kfF%2F4RB5Uzx2gx1Tj3fSX%2FWR73x%2FxvPpLODTgH4hWxDNfOv8tCC18jrmV5BshWB5FA8uVFNpKtOo9PDnK%2FjiuHdXxf0GMz%2FfoxcHpp80muz7jfsQmXgrf8kGnRJNZrOSHVOndQfsPc6%2BNkedIV4lWdakr5%2BlqMP7KfHN%2BX5VPhATIpX%2BjPv5D%2FRBNB56JuUh9HG25RktLenSHABTR8HEUfIQVYKFpzJDEcGdtctnuuS88n6nXSGlQkCKl1Eata53tUnc1Ea3dDOH9xOksx%2FJluMLeL3r8GOqUBcOC5v%2Fq391dPipue8Qhi3zQdk809kiMD%2BNMBSSA%2FxiGe%2F0mCjmV37jZZJKAOubIoXkdHbXFZwJ%2BrGSqJNWlgHNjQzLcXBOacbTkRvNfjZYrgzr8PmUkQE6SaAPqK9%2BwSIicNs7Z76nyAkqYvePTQjXaA0tSqlrpwghoLGsStBSbUSh6NmWpb%2FB1Xm4lX4z8BsiT8gVR82VR9fSxcLgqzGJ9voWuq&X-Amz-Signature=a33ac7d29ba360fe238cfdbe7e6e18e42850878157515b8a32717ee5edf3a8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5L6O2J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCazp2Od%2BOJorEDPrSRgWk8bTyFN7DrehLG0PKoB7wTVwIgTQ3HRYXn0%2FB7vbT9gGsd%2Bg56tsRqp%2BKR6%2FDD7HE%2B%2FvsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXu21CSQHFGHDWsBircA8OxTk%2FBB%2FpYkGDZ0nKKQYQ%2BH0zTC%2FgFaFgesJyHM%2FXAX6t3b6hppwLEEPpfA%2BqtWqd1ZF66eNrNeC6CV7AuTAUryATFSVd2WXREgF2SsV73cfI8RGJh1R0Fmj%2Fh5BOX8pQtGw25hksbX67jEvuvuIPG2Gso1EYXZ1xiwoS%2ByUlmiImyrZ%2FiibEwEsGDaZhs6uP%2FeFYu8jnpvuVzbFy5pIhBFwCAGfyy2DQz6l1C9j7hCCc7re1%2Fwg%2F%2BUkwKg5267JC0eZX5aGwzsem09lvQLlJDZXFfaUgJeeZfKrucpGFAa5sLvOlqjCo4PWOBAB0r5mC8geaDdj0EbYsVD5DqcRaEgjsbdqbZz32xO3kfF%2F4RB5Uzx2gx1Tj3fSX%2FWR73x%2FxvPpLODTgH4hWxDNfOv8tCC18jrmV5BshWB5FA8uVFNpKtOo9PDnK%2FjiuHdXxf0GMz%2FfoxcHpp80muz7jfsQmXgrf8kGnRJNZrOSHVOndQfsPc6%2BNkedIV4lWdakr5%2BlqMP7KfHN%2BX5VPhATIpX%2BjPv5D%2FRBNB56JuUh9HG25RktLenSHABTR8HEUfIQVYKFpzJDEcGdtctnuuS88n6nXSGlQkCKl1Eata53tUnc1Ea3dDOH9xOksx%2FJluMLeL3r8GOqUBcOC5v%2Fq391dPipue8Qhi3zQdk809kiMD%2BNMBSSA%2FxiGe%2F0mCjmV37jZZJKAOubIoXkdHbXFZwJ%2BrGSqJNWlgHNjQzLcXBOacbTkRvNfjZYrgzr8PmUkQE6SaAPqK9%2BwSIicNs7Z76nyAkqYvePTQjXaA0tSqlrpwghoLGsStBSbUSh6NmWpb%2FB1Xm4lX4z8BsiT8gVR82VR9fSxcLgqzGJ9voWuq&X-Amz-Signature=0990156dac270509c2df6a5a038db6623d5d09040a27c8f1e102ec2e91b5432f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
