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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLJ7LTA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMRziiNYtCpLz6ykPaAKOM3nd53DDhTpJaoG1g6%2B%2BsLQIgEG8NeHmiJpekweVadkYYQDzk16BUpVVsEFgCkTtyDSAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJI%2BX%2F6vFMNQI%2BKT4SrcA7TChvU%2FuV7ebBne4P0a8U66l5GnCGihf1EHRGc6Z9Y6lEg9CDjzpdhi2iOfTQlH0KhiDsHBOAReWEy2VK0NLITzCqk2Ld7Nk%2FZhHqYRH3QihBO33Yw8KvPjyBVVfP1w0vVWorJ1x5C6WjBV0ZSBAXZTbhTNPSzvps%2Fmz%2BXPL6eJPhDwy4CI0wX3daUvrNpUmjfRUHkYBYEw4ffKeFmP3bRGcQ43g29PmV39bN6B%2FdvveYLz2mGbcCC%2F0eX4sgHz%2FjVaQZ84kE4Q1SAF20TdeDAgZoKk6OKQ9eHqv2v4WDGhyk5bUShmL9IBSPg4%2BsFHaXW6b7k5z9mEWeu3YzMwzVLIu7uBUkKbFQaTKyiXZCJvY75amQbvHuUtzFb3%2F79qRp9XtM3iiF8PO7D0X0VEDyaLsfGbXWqfmNfv0UOp9aJ4vEIWQpMZDmCiLgUccwpOKxplU0I8YIfqJmnluXfrv2Rp2Ac6f%2FEwSrJ2NAxH5ia5I0q%2BWDgaNGay3Z%2FzpmVlXY3kcAM%2BBH23iEUTDcPfaqZgoz7RB2EwwULCOHJZ332BWe%2B9xyHBKK6HIS2rzspyr5WrNOxoUPKyXLZXWPrZuYYFzd2Nd00NL1N8yGtivfLPEvGoVdLgoojmzXHFMISu9sQGOqUBlFg3vcyf75tOVamdKShzhDP%2BQSxRTurCMW70HLal%2FkiO%2Fjt%2BsyUE0Tlp5ut3VLaH0Y9nV%2BxTZYixC47vKMCmD66wQ2JwrfvXeroaOGk%2BzhsyemamR3rZmd7ro4bT6ack5mGDSpmaIlTmyU%2BPX%2BL1eiu584h8ugh%2FDfN2IykU8zbG5UqGFyo6hL3BXBU9rnGSboUwUJC56jGwvwNBhEdbTGuD0jN%2B&X-Amz-Signature=6b69bc09d727c9fa46e69341bd2007f846395897273c68866880c6efd8e4326e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLJ7LTA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMRziiNYtCpLz6ykPaAKOM3nd53DDhTpJaoG1g6%2B%2BsLQIgEG8NeHmiJpekweVadkYYQDzk16BUpVVsEFgCkTtyDSAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJI%2BX%2F6vFMNQI%2BKT4SrcA7TChvU%2FuV7ebBne4P0a8U66l5GnCGihf1EHRGc6Z9Y6lEg9CDjzpdhi2iOfTQlH0KhiDsHBOAReWEy2VK0NLITzCqk2Ld7Nk%2FZhHqYRH3QihBO33Yw8KvPjyBVVfP1w0vVWorJ1x5C6WjBV0ZSBAXZTbhTNPSzvps%2Fmz%2BXPL6eJPhDwy4CI0wX3daUvrNpUmjfRUHkYBYEw4ffKeFmP3bRGcQ43g29PmV39bN6B%2FdvveYLz2mGbcCC%2F0eX4sgHz%2FjVaQZ84kE4Q1SAF20TdeDAgZoKk6OKQ9eHqv2v4WDGhyk5bUShmL9IBSPg4%2BsFHaXW6b7k5z9mEWeu3YzMwzVLIu7uBUkKbFQaTKyiXZCJvY75amQbvHuUtzFb3%2F79qRp9XtM3iiF8PO7D0X0VEDyaLsfGbXWqfmNfv0UOp9aJ4vEIWQpMZDmCiLgUccwpOKxplU0I8YIfqJmnluXfrv2Rp2Ac6f%2FEwSrJ2NAxH5ia5I0q%2BWDgaNGay3Z%2FzpmVlXY3kcAM%2BBH23iEUTDcPfaqZgoz7RB2EwwULCOHJZ332BWe%2B9xyHBKK6HIS2rzspyr5WrNOxoUPKyXLZXWPrZuYYFzd2Nd00NL1N8yGtivfLPEvGoVdLgoojmzXHFMISu9sQGOqUBlFg3vcyf75tOVamdKShzhDP%2BQSxRTurCMW70HLal%2FkiO%2Fjt%2BsyUE0Tlp5ut3VLaH0Y9nV%2BxTZYixC47vKMCmD66wQ2JwrfvXeroaOGk%2BzhsyemamR3rZmd7ro4bT6ack5mGDSpmaIlTmyU%2BPX%2BL1eiu584h8ugh%2FDfN2IykU8zbG5UqGFyo6hL3BXBU9rnGSboUwUJC56jGwvwNBhEdbTGuD0jN%2B&X-Amz-Signature=c2de0dfddfa9164fac70ed19c99800e0775aa2d72884897e34e2d4211dec60b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
