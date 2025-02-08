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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZF5JILZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGanCO0zVpMRX3orhOMCC74iyKWTtoej8aPD%2FiP1vnooAiAKp5B6f0tguq%2BWG%2FXgiN2RNNJ%2BaE6lPM0VnfCtCcvGzyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKKH%2FNcKV5DQoD7RKtwDol6lw2YRuoBkYL0rto3xkRNs1KiUtGpgG2fXGx6luPcjDmz9iI1u5NP6h%2FwWxNqCLc1FM39A8lgn2oIUlP8H3IfIM06Esbmr2mjymncXTJAzmZ8Y%2F%2FRK%2BbyhhVgoRJ9VTFN%2B56jyyR5EuOs0T5bYNTiFInvbU0fSPEdyyIigNBrPMVImD9uPydpxDGlWYtQJL7CXs8Y%2FFzQv4e65sLksvufvqrrLYF5fps9DdufE2FWE17m17V5hjzXBm%2FAsS3iFdARrTNHu6BYN9Se3WnauvejPiStIKayJy%2FuNb7Ay43sdmMidwruY8AvxU00LifRDrlQU2TQ%2B%2Fl%2BO7uqTIQdifF6DIVK%2F7BxZ%2BDDSDdPOCtY%2BuYuBtRf3sEB%2B8RoOts024fFGms28Dk%2FXOl6eTriqja%2BhOyzIPIuo2rFYn3tSj%2BzMHG%2Bi8ev0qXPR5ZO5AS%2F00vbtLH9TXrDlLXOVDTHUzOEhPNsLVVdxzvFN4%2Baj0Pqo4M1c%2FgTXyXDZrGuOPm%2FzIEEsu0CwjQwMLSkrub9w80Xj8MUvccz0TWZzTFZ%2Fk%2FO81okgTMZHjTriE5OssMcvYDUmWLk7kMe3aLLoYooRXjSY1m5aQZZJY69LCoOqnpRWj51FICWRzXalHLQwqpCcvQY6pgHU2lC%2FnE39jW%2Bo1zf7ViwpwOa%2B6HCQMT2tEAxiJa01nbdy9lbSmkJKZh9Kt38QKAIdkrpQo874UGHiek9OVsmln0EQlDLKFsEBpN82b9K3PwExy1XQxUFXvYJGRNfA3irn3dDABspr0r65WCKJ5NMfeE%2BuY0rFYAJD4IxPel6QLi8UGn5uczaPwD4iDLgYBnPzEzyu11wXcLsliabLuUMNGn%2B%2BC6iQ&X-Amz-Signature=de774962fff4230efb549718d9aff8d63566e005baef8c629b3cb8214a6c1f47&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZF5JILZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGanCO0zVpMRX3orhOMCC74iyKWTtoej8aPD%2FiP1vnooAiAKp5B6f0tguq%2BWG%2FXgiN2RNNJ%2BaE6lPM0VnfCtCcvGzyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKKH%2FNcKV5DQoD7RKtwDol6lw2YRuoBkYL0rto3xkRNs1KiUtGpgG2fXGx6luPcjDmz9iI1u5NP6h%2FwWxNqCLc1FM39A8lgn2oIUlP8H3IfIM06Esbmr2mjymncXTJAzmZ8Y%2F%2FRK%2BbyhhVgoRJ9VTFN%2B56jyyR5EuOs0T5bYNTiFInvbU0fSPEdyyIigNBrPMVImD9uPydpxDGlWYtQJL7CXs8Y%2FFzQv4e65sLksvufvqrrLYF5fps9DdufE2FWE17m17V5hjzXBm%2FAsS3iFdARrTNHu6BYN9Se3WnauvejPiStIKayJy%2FuNb7Ay43sdmMidwruY8AvxU00LifRDrlQU2TQ%2B%2Fl%2BO7uqTIQdifF6DIVK%2F7BxZ%2BDDSDdPOCtY%2BuYuBtRf3sEB%2B8RoOts024fFGms28Dk%2FXOl6eTriqja%2BhOyzIPIuo2rFYn3tSj%2BzMHG%2Bi8ev0qXPR5ZO5AS%2F00vbtLH9TXrDlLXOVDTHUzOEhPNsLVVdxzvFN4%2Baj0Pqo4M1c%2FgTXyXDZrGuOPm%2FzIEEsu0CwjQwMLSkrub9w80Xj8MUvccz0TWZzTFZ%2Fk%2FO81okgTMZHjTriE5OssMcvYDUmWLk7kMe3aLLoYooRXjSY1m5aQZZJY69LCoOqnpRWj51FICWRzXalHLQwqpCcvQY6pgHU2lC%2FnE39jW%2Bo1zf7ViwpwOa%2B6HCQMT2tEAxiJa01nbdy9lbSmkJKZh9Kt38QKAIdkrpQo874UGHiek9OVsmln0EQlDLKFsEBpN82b9K3PwExy1XQxUFXvYJGRNfA3irn3dDABspr0r65WCKJ5NMfeE%2BuY0rFYAJD4IxPel6QLi8UGn5uczaPwD4iDLgYBnPzEzyu11wXcLsliabLuUMNGn%2B%2BC6iQ&X-Amz-Signature=f2b7e777a197135230f2978a5299648879fb195d50a83859f1e4cc8ed4847656&X-Amz-SignedHeaders=host&x-id=GetObject)

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
