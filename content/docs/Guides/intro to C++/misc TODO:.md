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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJVJJDR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD7c4E7UFDKC%2FklyWc%2BA5QyTdpI6PO4OD0gH86d%2FQ5wAiAyg879Rnh2ejTmhxLtlJTp2UjwSwoZ7z123lDKiSyo9CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRVTJ2kJWB3DoOdsaKtwDRNrnrg3zPAvOTUkBVbgIrNzs9tu3UwGUtuwdtPiUKrrJ87vNZdvSbb%2BTAKYzh05oDHrg2HAcxl5eviicfN5Sk5Eo%2BWHPtoERSKXDRYTgSz1afr5GYGU3xVEEJrAVZ4Se%2BEHx1tZPuBi7RPb4zAEC%2Bru30gPDIJZgO2%2FAF74t7BtRWskyr%2FUlYpTQeK5SoCir1lxa9DUtz2lIGep6HY72ARMIipdv0LdsuXB6R9Bn5DZ5KkOtkBLbMMUidE6lKKPwSRi1DQK2mc3j5grHtdosxnrQ0%2FfI2Kb%2BBrrM09ZC1zw4BOHfwUIf5kudZ2g8oCELMbMlI1z67V2GE%2FuNloAhPUAjpZb4v49HEfmRTm38vG05ApLp3MbZlHjElnbwdLxaTwmqd0qLMe90CPE4J6Pn3CubN8ic30laYUYsAxnOxYtM68j%2BsnLJrp6i%2BUxDc4NOfuZSeeQnXLs5KxQJHZT%2F2tmaL81pf3Ku%2FVP1vxU83YXTH%2FXc4BMAe0VVsartl2lP4yQLuKfkfv1be40x7pnELx4GsmMUSQCzmX%2F6yOcwftUiHxkCK9gyTXpIETqcMuEiYGOBonCHMD9d8fv3RukgwundR8PADpXcu85s0J5v3E7mfp98KuZOYs9RqQYwguShvQY6pgG8FYKlEUfU2UEUH%2BjfZEKFcCxI%2Bc2oY1%2BI2FzryiP2hKYBzoVRtUCtLTHya07cJj4D%2FY4OlOtKikzblWobD0DKzhNJKqqbZOw86fPbAJo1geVMUZQAIdmWceEol6fxgoLkF4wmBIKaSmMCFLXoQAiSQ98J7PD17uikpjtv9IZ2cwKXxwLrWjaUPYSy1PymEDTRuXWXqDfa4a0JGwy1kW3BhN0OxWtm&X-Amz-Signature=c60f70a9c4ce7f044016380169171d4019a803b5c3e0dfbb918c14892a6608ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJVJJDR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD7c4E7UFDKC%2FklyWc%2BA5QyTdpI6PO4OD0gH86d%2FQ5wAiAyg879Rnh2ejTmhxLtlJTp2UjwSwoZ7z123lDKiSyo9CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRVTJ2kJWB3DoOdsaKtwDRNrnrg3zPAvOTUkBVbgIrNzs9tu3UwGUtuwdtPiUKrrJ87vNZdvSbb%2BTAKYzh05oDHrg2HAcxl5eviicfN5Sk5Eo%2BWHPtoERSKXDRYTgSz1afr5GYGU3xVEEJrAVZ4Se%2BEHx1tZPuBi7RPb4zAEC%2Bru30gPDIJZgO2%2FAF74t7BtRWskyr%2FUlYpTQeK5SoCir1lxa9DUtz2lIGep6HY72ARMIipdv0LdsuXB6R9Bn5DZ5KkOtkBLbMMUidE6lKKPwSRi1DQK2mc3j5grHtdosxnrQ0%2FfI2Kb%2BBrrM09ZC1zw4BOHfwUIf5kudZ2g8oCELMbMlI1z67V2GE%2FuNloAhPUAjpZb4v49HEfmRTm38vG05ApLp3MbZlHjElnbwdLxaTwmqd0qLMe90CPE4J6Pn3CubN8ic30laYUYsAxnOxYtM68j%2BsnLJrp6i%2BUxDc4NOfuZSeeQnXLs5KxQJHZT%2F2tmaL81pf3Ku%2FVP1vxU83YXTH%2FXc4BMAe0VVsartl2lP4yQLuKfkfv1be40x7pnELx4GsmMUSQCzmX%2F6yOcwftUiHxkCK9gyTXpIETqcMuEiYGOBonCHMD9d8fv3RukgwundR8PADpXcu85s0J5v3E7mfp98KuZOYs9RqQYwguShvQY6pgG8FYKlEUfU2UEUH%2BjfZEKFcCxI%2Bc2oY1%2BI2FzryiP2hKYBzoVRtUCtLTHya07cJj4D%2FY4OlOtKikzblWobD0DKzhNJKqqbZOw86fPbAJo1geVMUZQAIdmWceEol6fxgoLkF4wmBIKaSmMCFLXoQAiSQ98J7PD17uikpjtv9IZ2cwKXxwLrWjaUPYSy1PymEDTRuXWXqDfa4a0JGwy1kW3BhN0OxWtm&X-Amz-Signature=6021f935e138eb7352995f6946435e029d2267fa5e1101e25088037f083a94a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
