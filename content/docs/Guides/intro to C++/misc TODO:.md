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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWQWQDR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIZIISzRiit7EIxnrkHk%2Bh3PWEgrZfb7H%2FLazH1ccbXAiAHkIEYJ7otwLXTXH8YVcu%2FB%2F3EnRvq25YNUC%2FUSMM9kCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR0LNR9%2Bm6oh%2BrT%2BhKtwDNLiS7y3tLrXJhMc9gvC2MVixm%2BjzmnrOXVXpmhpRsLfbDlMr0PT1mTQuXo6TTJxNcxriKIDNzMESu9xilFd2I%2BKTdQo7m7F6ioeaAE9xuH%2BU%2FT5djc%2FI2y7lZSAimRYKOVxX3LAI176cwncRLNTrY3vpq3qc9Zjxd%2FXDZccjS4V00ZlS3P%2BOwu%2Fxjr53lGB33NQj1HKGYEMGK5bP%2F2u%2FFmgtvmIPcCywe%2BOxthTf19azLzgt9AOskq9i57jxnSx6qWJt8vXhCxAnd98tVPcrP4gr3w9AVEZkCyjNbHrpfxvzsXHSZs7rTGbBMGovw1PhEB16%2FbN4LOwsZWcCDT0Rc9Ya3HJVFJYatbDkxFhmt%2F9CUFH%2B3pzSnJq4n5DxSW%2F4Mz9GY8b34crnqo85U07FttbXZhXEfrM29I%2BMpkmQqj63P%2FvqarM5uwKfGq8BmuKIyfkL0glV3Pv9VXURKBLYSg7xB27nqzvWoGBciYAnjqs7vTZwItFgq4DhBCrUptXiWujIIERamSxEU6ZXS%2BIQXx9zB5TREGf64B5ZB3mkoA7LIObWSqz3Zo%2F5S0YuxFF8PkZDj%2Bs%2BFEbjNapIPtyChn6enNAYo3FhA9oSE6614htpAuWxCCduzwARDBcwr57lxAY6pgEO5p2mc59du6sfUSIqYRaoFMB7EM1k5wQqU6p3%2BzM4fKwGmTJ%2Fo8fV0diFiP7OwhLUSqqlflN%2FJWD3ud6qYoMZHpg0PlAMgrJMq%2FwzYfa8SY708KAoR%2F%2FHuqSfhq%2B6a4OaJ0x3C1vK%2F80ePkq1ITUzFxnIxJsy8sitgv3vSMWn99Ag5qNWBZSrjAhVaaoK4HMJdQP3%2BGoUnAYESwuJalDLmg9TZ3R1&X-Amz-Signature=21c4cb26cc4f74ca66786741de1a5ab7f9bdd9c9729120c5c68a34cb4ea5ebd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWQWQDR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIZIISzRiit7EIxnrkHk%2Bh3PWEgrZfb7H%2FLazH1ccbXAiAHkIEYJ7otwLXTXH8YVcu%2FB%2F3EnRvq25YNUC%2FUSMM9kCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR0LNR9%2Bm6oh%2BrT%2BhKtwDNLiS7y3tLrXJhMc9gvC2MVixm%2BjzmnrOXVXpmhpRsLfbDlMr0PT1mTQuXo6TTJxNcxriKIDNzMESu9xilFd2I%2BKTdQo7m7F6ioeaAE9xuH%2BU%2FT5djc%2FI2y7lZSAimRYKOVxX3LAI176cwncRLNTrY3vpq3qc9Zjxd%2FXDZccjS4V00ZlS3P%2BOwu%2Fxjr53lGB33NQj1HKGYEMGK5bP%2F2u%2FFmgtvmIPcCywe%2BOxthTf19azLzgt9AOskq9i57jxnSx6qWJt8vXhCxAnd98tVPcrP4gr3w9AVEZkCyjNbHrpfxvzsXHSZs7rTGbBMGovw1PhEB16%2FbN4LOwsZWcCDT0Rc9Ya3HJVFJYatbDkxFhmt%2F9CUFH%2B3pzSnJq4n5DxSW%2F4Mz9GY8b34crnqo85U07FttbXZhXEfrM29I%2BMpkmQqj63P%2FvqarM5uwKfGq8BmuKIyfkL0glV3Pv9VXURKBLYSg7xB27nqzvWoGBciYAnjqs7vTZwItFgq4DhBCrUptXiWujIIERamSxEU6ZXS%2BIQXx9zB5TREGf64B5ZB3mkoA7LIObWSqz3Zo%2F5S0YuxFF8PkZDj%2Bs%2BFEbjNapIPtyChn6enNAYo3FhA9oSE6614htpAuWxCCduzwARDBcwr57lxAY6pgEO5p2mc59du6sfUSIqYRaoFMB7EM1k5wQqU6p3%2BzM4fKwGmTJ%2Fo8fV0diFiP7OwhLUSqqlflN%2FJWD3ud6qYoMZHpg0PlAMgrJMq%2FwzYfa8SY708KAoR%2F%2FHuqSfhq%2B6a4OaJ0x3C1vK%2F80ePkq1ITUzFxnIxJsy8sitgv3vSMWn99Ag5qNWBZSrjAhVaaoK4HMJdQP3%2BGoUnAYESwuJalDLmg9TZ3R1&X-Amz-Signature=fe571fcfd99c2a93424bc1098bcb4c9f1569f82970f0bdb4de068fac51b82a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
