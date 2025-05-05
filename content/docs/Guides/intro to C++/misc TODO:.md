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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN43E3HO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPNFzOJFc2g8XR9tC5YTpZpXKfsa7Kj8%2FaBiqw5L8QKgIgBXzfRKHrsc0SfaGfkky7VJA1%2B9%2BmP4DXNeiy4SusWGIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBwt6k3rqwLAJOrZpircA5I8L5oHX4S6I4ziJnZkHTPoGYnzl2f0QzSzQnWRe%2BN7aYSYBHMsDHBfJ%2B4X%2FTNFsOTYETgEnPyFo5bEXFpH3iV0x2nTvZKVxUOqMXks1GPgZn5IwAGLbsJMaBFgEBPJIr6DH6msgK4wG%2BZNVWq5mkzKQ2FovHU6yhMrXjmx%2FblVTJkSqEmS3IV%2FZ1ntmFfE5SqYFckD5rdsZ0acixjEzUhOecjVHProQeaNEoewgmf7DFTU%2BrxRpdfXvCS6JrGINRogFqgIUSO166oIGZS7Nw%2F5SKvYZy1gsEWVBlbQO7ntFa4pKQK0PEQC%2B0zRk0qIcaOBUrnfbpDLOfDN9JmYupZa%2FK%2F2Lfpeoz4XjJrJh%2Fe4eaR8IjbuJTg8C%2Bt8XyQOneAUW7Om16uwWK59YT1w5S5T08R75adVC3HJz%2FGdH4f5%2FAxAP1mFB6FCcHlaJGAolN15J1PBMdD7bJEDeEUoB67Y%2BQOaWBqJ%2BqswXDc6NHiSrSU7GjzckiTDwnCURBPSFEjQWNDtN16ChLG%2FIXiVpt%2B%2FT5BqYSs6VXRq6QaQRUWMo3zNYlYZISRX%2B5Kuv89LlJRNLvTMWHPyl2uhl6H%2FjFOJu0XDLXdF3Uib2NQcogPh7qnbq7A1hl0Z4XlAMNX648AGOqUBE1XP%2B5webbdL1Hm2ispUQCVwA%2FmF2ws%2FOqX0Hi5J2Q45XO89VbCXCT%2BeZQde2bgvQVi8IQKZYO2eZ%2Ft0S82KRa9CTTVllYEAcX9%2Bt%2B4zGF5sMms3pW0iHXTR%2BGKeiPDzIaczBkfh0Itdbu51cRJYcKuKxuQhrsdH5nBYZvC%2BNq4fpqSavpquWOUtZsZCVdJCRr9OHu3N7K9M9auKNweXbEi9BINc&X-Amz-Signature=1d3e407ff6eca4a179294643384e129ec7eb7a2d18b2fd941482688626029337&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN43E3HO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPNFzOJFc2g8XR9tC5YTpZpXKfsa7Kj8%2FaBiqw5L8QKgIgBXzfRKHrsc0SfaGfkky7VJA1%2B9%2BmP4DXNeiy4SusWGIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBwt6k3rqwLAJOrZpircA5I8L5oHX4S6I4ziJnZkHTPoGYnzl2f0QzSzQnWRe%2BN7aYSYBHMsDHBfJ%2B4X%2FTNFsOTYETgEnPyFo5bEXFpH3iV0x2nTvZKVxUOqMXks1GPgZn5IwAGLbsJMaBFgEBPJIr6DH6msgK4wG%2BZNVWq5mkzKQ2FovHU6yhMrXjmx%2FblVTJkSqEmS3IV%2FZ1ntmFfE5SqYFckD5rdsZ0acixjEzUhOecjVHProQeaNEoewgmf7DFTU%2BrxRpdfXvCS6JrGINRogFqgIUSO166oIGZS7Nw%2F5SKvYZy1gsEWVBlbQO7ntFa4pKQK0PEQC%2B0zRk0qIcaOBUrnfbpDLOfDN9JmYupZa%2FK%2F2Lfpeoz4XjJrJh%2Fe4eaR8IjbuJTg8C%2Bt8XyQOneAUW7Om16uwWK59YT1w5S5T08R75adVC3HJz%2FGdH4f5%2FAxAP1mFB6FCcHlaJGAolN15J1PBMdD7bJEDeEUoB67Y%2BQOaWBqJ%2BqswXDc6NHiSrSU7GjzckiTDwnCURBPSFEjQWNDtN16ChLG%2FIXiVpt%2B%2FT5BqYSs6VXRq6QaQRUWMo3zNYlYZISRX%2B5Kuv89LlJRNLvTMWHPyl2uhl6H%2FjFOJu0XDLXdF3Uib2NQcogPh7qnbq7A1hl0Z4XlAMNX648AGOqUBE1XP%2B5webbdL1Hm2ispUQCVwA%2FmF2ws%2FOqX0Hi5J2Q45XO89VbCXCT%2BeZQde2bgvQVi8IQKZYO2eZ%2Ft0S82KRa9CTTVllYEAcX9%2Bt%2B4zGF5sMms3pW0iHXTR%2BGKeiPDzIaczBkfh0Itdbu51cRJYcKuKxuQhrsdH5nBYZvC%2BNq4fpqSavpquWOUtZsZCVdJCRr9OHu3N7K9M9auKNweXbEi9BINc&X-Amz-Signature=87f7626b6ea71651288928199c7a4a45f2f3f753da4ef7c15a7b92ce86fef385&X-Amz-SignedHeaders=host&x-id=GetObject)

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
