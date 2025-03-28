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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBFX52%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4nO4bCuQMcKUnor4ZidMQVfgccCyijjLzYB%2BGnMd0QIgZKzKztaEXFjneS4fp1vhSKay6Ouf5bJ2aem8ueo4i8cq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFyOIbk7n%2Fy%2FG0EWTyrcA8oe%2FxN1Vox88Sk2hBxzUKlxMMY7vgq8H63%2FtwuaonzC7IFfAR6YE32x8HUoPBMQiMmBQmBL6Yh6XnRlPoJr1JFi17Bcx7gSboWs7meEdsivSvikkGuBY61MB3CpFC0d3iyic5y8AJA2NBLkCT5dRCNNtqQMLVcRQCzycJSjnicIVfXjDdCNbc6AgMG%2FRBjFQCXtYATIQZvdt09suYOZiHyhT%2BmwavWTc9iPD7B1scqUjchUSpbtxs70y8uvwA5BP9ZjbJ8aPqVP0oREvNWnyaQaN%2FFmTmv9yy0wBYbSybdRrKLWT%2BNXfBC%2B8NWqbl9zDp%2FsAoNMGYyu0MrzlqQedrXzq81SWWHIz8XFean0CLwX83RL4wqPX0nSB2k8u7SLcFRArn3hGmRAT0jSSogT7577Btn%2FgdQ4YIZKABwsF3cufGahPBK8hekZChq5DelTfXnlrjreDed1QqznoehdRzVQTH9mJFmcraQHgsVdtnu3hGzSS0LE4GgsQVXw3Z6gN%2BEJMgvtnomECBQepdAp8dhNr13ltW4nNZjhcJoD2ogkpjN4LSXe6InYgZRnuWUYteJ0mGAnYhj2gL%2FWGNY0Xvgvq8tZwUzQWppSP1LLUqkZv1jzhF5OwblQ6feuMLalm78GOqUBGEmuMk%2Ffsj7ZUyxyH895hskRv7VO3kMex3wFUvZxOEX4m9k24QOAE4mlgBPkm8jhHzF7KD2tZI7AebB7r5OxmDVFGxyjdD4U1aOyG50xX8ps45rpXUYncl%2BdFPmPtRbrrYYftd1vHEENrB00lzyGH4M6%2FUT7Lyj6qBFci3Vfd38uLDeXOqZCyieN6j%2BpFHCxhri%2BWcB%2BHN%2FrDhFFCR8pQ9AEhpgL&X-Amz-Signature=75ad1145b52d108f15277c25cd71e30e747e9a00302a3ab0b14d677134ef4175&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBFX52%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4nO4bCuQMcKUnor4ZidMQVfgccCyijjLzYB%2BGnMd0QIgZKzKztaEXFjneS4fp1vhSKay6Ouf5bJ2aem8ueo4i8cq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFyOIbk7n%2Fy%2FG0EWTyrcA8oe%2FxN1Vox88Sk2hBxzUKlxMMY7vgq8H63%2FtwuaonzC7IFfAR6YE32x8HUoPBMQiMmBQmBL6Yh6XnRlPoJr1JFi17Bcx7gSboWs7meEdsivSvikkGuBY61MB3CpFC0d3iyic5y8AJA2NBLkCT5dRCNNtqQMLVcRQCzycJSjnicIVfXjDdCNbc6AgMG%2FRBjFQCXtYATIQZvdt09suYOZiHyhT%2BmwavWTc9iPD7B1scqUjchUSpbtxs70y8uvwA5BP9ZjbJ8aPqVP0oREvNWnyaQaN%2FFmTmv9yy0wBYbSybdRrKLWT%2BNXfBC%2B8NWqbl9zDp%2FsAoNMGYyu0MrzlqQedrXzq81SWWHIz8XFean0CLwX83RL4wqPX0nSB2k8u7SLcFRArn3hGmRAT0jSSogT7577Btn%2FgdQ4YIZKABwsF3cufGahPBK8hekZChq5DelTfXnlrjreDed1QqznoehdRzVQTH9mJFmcraQHgsVdtnu3hGzSS0LE4GgsQVXw3Z6gN%2BEJMgvtnomECBQepdAp8dhNr13ltW4nNZjhcJoD2ogkpjN4LSXe6InYgZRnuWUYteJ0mGAnYhj2gL%2FWGNY0Xvgvq8tZwUzQWppSP1LLUqkZv1jzhF5OwblQ6feuMLalm78GOqUBGEmuMk%2Ffsj7ZUyxyH895hskRv7VO3kMex3wFUvZxOEX4m9k24QOAE4mlgBPkm8jhHzF7KD2tZI7AebB7r5OxmDVFGxyjdD4U1aOyG50xX8ps45rpXUYncl%2BdFPmPtRbrrYYftd1vHEENrB00lzyGH4M6%2FUT7Lyj6qBFci3Vfd38uLDeXOqZCyieN6j%2BpFHCxhri%2BWcB%2BHN%2FrDhFFCR8pQ9AEhpgL&X-Amz-Signature=08f99d2d42f9d076a4d7eb7e86ed50effa0aa080307ffe09aa001f2fa95ad8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
