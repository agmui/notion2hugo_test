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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKRTB65%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCKksWn50jkB4k%2FREJFNbA6bsEFnFT5jHl0JuIKkTo1mQIgSKCbVL88YCVkQtmUdRqANrOOK1Je6gQCGw79I7nNpc8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMJJUW067FE4tva0myrcA%2BsWjgEqOhDZtRja6ZUj8g4QSltOqlCddAEr4q6kc3%2B%2BhphfEFa7r7bScrA7I0e5kjkKdrq0yiIHXr6S%2FHLjrMEtEh0l5u%2BdcfclIK0Kyz2C7lpn6eNVk9WKLsF9T4AOO4zcsNO7CMeOgMDVo8qpF6phBMMr9wjbBAEMYBaQ2KQiHaVjdufM3Vf43fjTrvIJCVjzgMEXghyfxnleJOaQrRIQp0txV5Ze1n%2FyjiBVhjsIOD0smwpSTpeQQvRbaORk6gK%2BS5N5HNExzEglvHOoKagcZxf3lRgD7Hdqtu1ZdEvgFyxCXdtA8sZdKg339eRz4h3yurp3idOWy%2BXE9H46rFQqDmWKzRKHzmY1n%2F3ggXZB6h79NQsPYyj2%2BDadp3zgc%2BwyKM7uME0R9N8Tq1cOt7LXLMyG%2Fz9W8Ri%2BEYf%2BdhQifGW%2FzJrM1iJcaSjU9MRuTES%2BdICegNDfjoiR%2Bs8E8Z5i7q%2FAqy%2Bg07TmbOYdbueNCurI0nnXVSym0wftCSE%2B4sl2HsDZ%2FaU7phYEdLzz5QAJZOjIWBhCXEhJa7jbxuu4sNCsYXFz3iLep7ufouEP493ZG5y%2F1jnxnkOYJvJs4ZeZGsTRCstd%2F6jEdQ4FkCzdZxZFpfzxsVyX9yIrMIONjcQGOqUBW6af4onSaCi0uHV%2Fp9aXdEZtnYA1mPGEsukpVOQFyn4szpHSEEU2cYv5z%2FHxen5lx5MTzO7wZ4bczhGyALV9Au3%2FFNKQK7CDNO0q72gtKm6lWJCuQ1HGLsaoEOMR0ZnLn%2BPVHnTmnSLMlPE5h024gC0b45A9WOfbrJeeMwRhWywPma4GjkQ2O4h0YWC%2BYLw3P1jMNEiQlPnPGaMnVZ9XlkbWhn4u&X-Amz-Signature=1ed2be20ffb1a1adaa68c9bfe2777535ad26001aa9748372371f4e69c792c1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKRTB65%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCKksWn50jkB4k%2FREJFNbA6bsEFnFT5jHl0JuIKkTo1mQIgSKCbVL88YCVkQtmUdRqANrOOK1Je6gQCGw79I7nNpc8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMJJUW067FE4tva0myrcA%2BsWjgEqOhDZtRja6ZUj8g4QSltOqlCddAEr4q6kc3%2B%2BhphfEFa7r7bScrA7I0e5kjkKdrq0yiIHXr6S%2FHLjrMEtEh0l5u%2BdcfclIK0Kyz2C7lpn6eNVk9WKLsF9T4AOO4zcsNO7CMeOgMDVo8qpF6phBMMr9wjbBAEMYBaQ2KQiHaVjdufM3Vf43fjTrvIJCVjzgMEXghyfxnleJOaQrRIQp0txV5Ze1n%2FyjiBVhjsIOD0smwpSTpeQQvRbaORk6gK%2BS5N5HNExzEglvHOoKagcZxf3lRgD7Hdqtu1ZdEvgFyxCXdtA8sZdKg339eRz4h3yurp3idOWy%2BXE9H46rFQqDmWKzRKHzmY1n%2F3ggXZB6h79NQsPYyj2%2BDadp3zgc%2BwyKM7uME0R9N8Tq1cOt7LXLMyG%2Fz9W8Ri%2BEYf%2BdhQifGW%2FzJrM1iJcaSjU9MRuTES%2BdICegNDfjoiR%2Bs8E8Z5i7q%2FAqy%2Bg07TmbOYdbueNCurI0nnXVSym0wftCSE%2B4sl2HsDZ%2FaU7phYEdLzz5QAJZOjIWBhCXEhJa7jbxuu4sNCsYXFz3iLep7ufouEP493ZG5y%2F1jnxnkOYJvJs4ZeZGsTRCstd%2F6jEdQ4FkCzdZxZFpfzxsVyX9yIrMIONjcQGOqUBW6af4onSaCi0uHV%2Fp9aXdEZtnYA1mPGEsukpVOQFyn4szpHSEEU2cYv5z%2FHxen5lx5MTzO7wZ4bczhGyALV9Au3%2FFNKQK7CDNO0q72gtKm6lWJCuQ1HGLsaoEOMR0ZnLn%2BPVHnTmnSLMlPE5h024gC0b45A9WOfbrJeeMwRhWywPma4GjkQ2O4h0YWC%2BYLw3P1jMNEiQlPnPGaMnVZ9XlkbWhn4u&X-Amz-Signature=ff33b08a81a2bd5b70d4507b77d0783a1aa5a5a4bab602c9fcabf0bc929415c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
