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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPPBE2W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEUosB3zFQ7nxviXM1fitZmvooC%2Bifwn7T5g%2FDbPsH5gIgQ%2F3NILhxM6eStmTJ7pX47uzAXWjnsbqXSUCYyMJM19QqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNln4aneKGf5vZ5GtircA9krKnR0kv9B2yMPNRmPgwLv2Rit5hTDSYhPHAHTIbJCkIED16fOMavCIR3d1gTQIjhv5h9JLwMfBdA2G%2FRnhSkZa1gSLhJElwkpl5BW8Xwmyx%2FfhRtjbE2G3fbtnT833D2LtIThssX1yjTKh4d52NlqTH6FPeyQpPJ%2BHTJi%2BfZWSCsO9xOT1EJkP011V2BfArm28vwbjjGpIyIiSMA81%2Fkg3%2FXrvUQyIbY0w06yAI0SjylmwxgtatlJYdShx%2BsvhLBOh8pIsisAsFn0D7DlN5s945XsapBCMEeanrpSH5B9KuIrb%2FcLaZOukjRBqz1%2FDfJ%2FHap4BQ5P%2Bl0P0YVJAQW2rDqcE7SJ2Ll7eqHsF593KBvwEdvununItgvEJPWoQsqqtghX0dOBrwIqHo8YFTfPF2lPmgEJYt5te%2F0FSaEexx8kEGIq9i8vbBJ4xmZ6OyOaARb%2Fb25g5VXdDKiDtFUniPmeE7BJoMtmELwtOuUQd7HjuqlHabwPQQBetDKL6LA%2BhR%2BVjqwB3FeqFyhqDGCpwOauxi97o2mWWkFbNofVvba9SZzZCXxk9vuuo0x1mlIaQ0S2pRJS1N5MKGF%2BL%2FYgMe5K9HjjrjBVSa3EqraJI3OVSSFp%2FZqtaQxiMPLR5sQGOqUBU64gJryYffDNvFRiqBNBztR9LZN006j9FC6Sdjv2YsAeVcQujMoyiLTJoCRXkbb718%2FQ1033aJ6vZB1piD1ztkHnYpLhxN5isD%2B2Ij8f8omTF1%2F8Zklt%2BP4TGd%2F1oXh2aVSCW1K72J8BK4K5VfkJamtK6uBbjorpKacVbJMqPPGSUFR%2BsubQ95OZsSdjMvQbaVBeBbs8x8Qr8oZ2ljkQ2O27aNva&X-Amz-Signature=cc0eacba767843a2a9e1be600fd4bbd6de2477c1c290b915ef798a1d75e03587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPPBE2W%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEUosB3zFQ7nxviXM1fitZmvooC%2Bifwn7T5g%2FDbPsH5gIgQ%2F3NILhxM6eStmTJ7pX47uzAXWjnsbqXSUCYyMJM19QqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNln4aneKGf5vZ5GtircA9krKnR0kv9B2yMPNRmPgwLv2Rit5hTDSYhPHAHTIbJCkIED16fOMavCIR3d1gTQIjhv5h9JLwMfBdA2G%2FRnhSkZa1gSLhJElwkpl5BW8Xwmyx%2FfhRtjbE2G3fbtnT833D2LtIThssX1yjTKh4d52NlqTH6FPeyQpPJ%2BHTJi%2BfZWSCsO9xOT1EJkP011V2BfArm28vwbjjGpIyIiSMA81%2Fkg3%2FXrvUQyIbY0w06yAI0SjylmwxgtatlJYdShx%2BsvhLBOh8pIsisAsFn0D7DlN5s945XsapBCMEeanrpSH5B9KuIrb%2FcLaZOukjRBqz1%2FDfJ%2FHap4BQ5P%2Bl0P0YVJAQW2rDqcE7SJ2Ll7eqHsF593KBvwEdvununItgvEJPWoQsqqtghX0dOBrwIqHo8YFTfPF2lPmgEJYt5te%2F0FSaEexx8kEGIq9i8vbBJ4xmZ6OyOaARb%2Fb25g5VXdDKiDtFUniPmeE7BJoMtmELwtOuUQd7HjuqlHabwPQQBetDKL6LA%2BhR%2BVjqwB3FeqFyhqDGCpwOauxi97o2mWWkFbNofVvba9SZzZCXxk9vuuo0x1mlIaQ0S2pRJS1N5MKGF%2BL%2FYgMe5K9HjjrjBVSa3EqraJI3OVSSFp%2FZqtaQxiMPLR5sQGOqUBU64gJryYffDNvFRiqBNBztR9LZN006j9FC6Sdjv2YsAeVcQujMoyiLTJoCRXkbb718%2FQ1033aJ6vZB1piD1ztkHnYpLhxN5isD%2B2Ij8f8omTF1%2F8Zklt%2BP4TGd%2F1oXh2aVSCW1K72J8BK4K5VfkJamtK6uBbjorpKacVbJMqPPGSUFR%2BsubQ95OZsSdjMvQbaVBeBbs8x8Qr8oZ2ljkQ2O27aNva&X-Amz-Signature=037ae6a5cc3faa2dbb302a4d349b5bc40186b99a275e1b422282a60527cf9b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
