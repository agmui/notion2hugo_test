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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOHDIHK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEZ0Q0hOYwQzNUUwwIgOgB%2Fr87Yl%2B17OOsSxpJuKwCUyAiEAgAMT4zrgPNTSeQs0JNN3syVNgNmLarqlkJvBSBUn%2FJ0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFF%2BcKWz3GDLCvSZBSrcA5%2B7Tg6w6HId1PTaS6klHg9DR85BmRMrwWSTH28L7mjTRWkoptyNXliBGaIekIX16W9gfMzOXIZCeZmOnAWbb0Yk%2F7JcAaQFODdIzIkISljtYcWfrFj2ltFMTl4V%2BIU3u4a39f9oVKNOrQL4AlZPvT8%2FvumnqeTAnsXAvc%2BGJeTy%2BRWFRPAzxuAapltdVfiEyR4ikS5KQMVciLoHzRE3nvIyZL8CC0Kw6DzEXM031sYuiCOi0tK9Yx9ucl5yD1epLG0H%2BsQu2i3dGItR29B6D5DrtUppGwAN%2FIxr4DbUYLW%2BuTt3EmUf4mnVo8kk1t0EftScRmh5hhDFRawTReP3CcQ4rrreVFqpQTZn4M9ow%2F%2BHG0N%2Bz%2BzjmoVkToXWp1%2FV7yVAHLNcEZSyiD4uPc4IFAuyTzI2lbFHEla8t97jc6wY1gdeD2zF2DRqtbN%2B79wY9yywK%2BBT4XlACmCJ1%2F0%2F6GD0vdWTF3cd8ReRT%2FQ1Pp5fm9pOO%2BI5m0vMiM7Q%2FmIxwhF46arhfdX5%2B9fCoUbqVNHWoqlukmmSVkDpcehpvwWcUFa7cFKfjmzp5NYpDnMRlfqSbOQcrbgZU%2FLMG3sHqGQ8L6OWjZNmcrdLQH62TjhADv6C6j6zJzdrMszuMJXK%2BMIGOqUBRzR9wwwH4ZAKJPBb1VJxbzkTsygOjHfe%2Bl%2FbDrZYikMivc9yRUpVuTuLunPRpnjx2ckB5XE63ZaVUHghtp4VY3SGficMUULYC6ctgq9OHGWHvBnS3iXoF6s9PyQ%2BMCubr8oTW9WSkXtliFRHDWCPcoWdkv3dlWzOb%2FP9AtvQJ%2FCRmD0Lm49Q4wiWicgjJjhnMcEKwJoLS5C7KsKAkDHky2YUnOUz&X-Amz-Signature=16f2d5900c7939f81ec8d1b82ffee794dab363e2536e79d813abd991833230f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOHDIHK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEZ0Q0hOYwQzNUUwwIgOgB%2Fr87Yl%2B17OOsSxpJuKwCUyAiEAgAMT4zrgPNTSeQs0JNN3syVNgNmLarqlkJvBSBUn%2FJ0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFF%2BcKWz3GDLCvSZBSrcA5%2B7Tg6w6HId1PTaS6klHg9DR85BmRMrwWSTH28L7mjTRWkoptyNXliBGaIekIX16W9gfMzOXIZCeZmOnAWbb0Yk%2F7JcAaQFODdIzIkISljtYcWfrFj2ltFMTl4V%2BIU3u4a39f9oVKNOrQL4AlZPvT8%2FvumnqeTAnsXAvc%2BGJeTy%2BRWFRPAzxuAapltdVfiEyR4ikS5KQMVciLoHzRE3nvIyZL8CC0Kw6DzEXM031sYuiCOi0tK9Yx9ucl5yD1epLG0H%2BsQu2i3dGItR29B6D5DrtUppGwAN%2FIxr4DbUYLW%2BuTt3EmUf4mnVo8kk1t0EftScRmh5hhDFRawTReP3CcQ4rrreVFqpQTZn4M9ow%2F%2BHG0N%2Bz%2BzjmoVkToXWp1%2FV7yVAHLNcEZSyiD4uPc4IFAuyTzI2lbFHEla8t97jc6wY1gdeD2zF2DRqtbN%2B79wY9yywK%2BBT4XlACmCJ1%2F0%2F6GD0vdWTF3cd8ReRT%2FQ1Pp5fm9pOO%2BI5m0vMiM7Q%2FmIxwhF46arhfdX5%2B9fCoUbqVNHWoqlukmmSVkDpcehpvwWcUFa7cFKfjmzp5NYpDnMRlfqSbOQcrbgZU%2FLMG3sHqGQ8L6OWjZNmcrdLQH62TjhADv6C6j6zJzdrMszuMJXK%2BMIGOqUBRzR9wwwH4ZAKJPBb1VJxbzkTsygOjHfe%2Bl%2FbDrZYikMivc9yRUpVuTuLunPRpnjx2ckB5XE63ZaVUHghtp4VY3SGficMUULYC6ctgq9OHGWHvBnS3iXoF6s9PyQ%2BMCubr8oTW9WSkXtliFRHDWCPcoWdkv3dlWzOb%2FP9AtvQJ%2FCRmD0Lm49Q4wiWicgjJjhnMcEKwJoLS5C7KsKAkDHky2YUnOUz&X-Amz-Signature=1121900cf217660a58fb7819015678e6ad6abb3807bad332011649d3fbbbd1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
