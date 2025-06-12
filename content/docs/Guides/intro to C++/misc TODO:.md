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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXNDXU3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwYxxdYBz%2Bb1k4ihcRWYw63fe5MLTkczejpxF8AX7nhwIgIm99TQGpPEL2Ax%2FnwatcUBFeKqJTkUQ0UWl1VEdmGd0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDj7nS2%2FtkMgWUruyrcA%2BBEKpA%2BGWx1LrXBYkMYH8rTo3tpNcPntllGH%2FSPUdIDgNtsn82fY7LbZcKRJekMuF0e%2BZHsDDsIKEtvyoy9g0%2B%2FSs8bcGYPOXbH4cgRWwccxWfZba5vB1HjfPijGQ34aeIhlXhfxdZwppbL5DBiGUiUNyDVE8oRb5CiTOe7Rnx43da5zaLI%2BXOgaauMOPHJtPU2%2FounUqN42XnLtPcNZjtVb4lrYMRaBnSVcmqZcNphEB2j2dRD3rkL8B8mJ6nMgSSs5ZCzeywFzmvGicrKSe4GLIscvb9wEg99XBqVMu3XcJkAaIXPM7mdwTktPAginH63FOa2JEzA2GFNbC%2F62QNtojgeegFj0S0C6eLMaQ017wQ192kV1%2F%2B1NStEkwaQR4pX7f39I%2FXYgcUEHvg7oL8omKjI1JEN556fvRbJX%2BMeeKgyhrcyRfCmf8cnYGE%2B1QkGTi05kPbs5TeZoC3E%2BBzRYYyt8bQgjZkBWI83w6U71RR35upv6Uu2ygY0niPlM%2BoE0MTqQxpRkEFrXjaBkUBmi4S6fPe9VgsWIt31LkJLtSkyUIo4ATgDTZD8yiNDlSOziSWhpQe3nmmBk9UB%2BFgsE5MV51PvCrRd0zZ%2BJLZu66d8uGmr20epy0JZMMKQrMIGOqUBDYSXNuGOSnmGbX4GDdwC7%2F38d3mBXKKoUJSSvkmDePDRjvGc8P%2BV87JaEWkkEAlZw3og7pAWGbBP7Nd1a0dKWCwfzXjvmZG2S1RJt4I0OjNxSQ14o6MhYMvdHx8%2FkhCUJe66aLUI%2B2Vc7o1NA1yGCOdjsSsSF4L2p%2F%2FRcUCJWe8xqz8GALa6h9HxXjosRJoubCjM4UMcNMs1wXUuOTLHOttHypBa&X-Amz-Signature=7f9c7d8267f9afac1507ee111267891d52bce00464afb173a9d144a298df83a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXNDXU3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDwYxxdYBz%2Bb1k4ihcRWYw63fe5MLTkczejpxF8AX7nhwIgIm99TQGpPEL2Ax%2FnwatcUBFeKqJTkUQ0UWl1VEdmGd0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDj7nS2%2FtkMgWUruyrcA%2BBEKpA%2BGWx1LrXBYkMYH8rTo3tpNcPntllGH%2FSPUdIDgNtsn82fY7LbZcKRJekMuF0e%2BZHsDDsIKEtvyoy9g0%2B%2FSs8bcGYPOXbH4cgRWwccxWfZba5vB1HjfPijGQ34aeIhlXhfxdZwppbL5DBiGUiUNyDVE8oRb5CiTOe7Rnx43da5zaLI%2BXOgaauMOPHJtPU2%2FounUqN42XnLtPcNZjtVb4lrYMRaBnSVcmqZcNphEB2j2dRD3rkL8B8mJ6nMgSSs5ZCzeywFzmvGicrKSe4GLIscvb9wEg99XBqVMu3XcJkAaIXPM7mdwTktPAginH63FOa2JEzA2GFNbC%2F62QNtojgeegFj0S0C6eLMaQ017wQ192kV1%2F%2B1NStEkwaQR4pX7f39I%2FXYgcUEHvg7oL8omKjI1JEN556fvRbJX%2BMeeKgyhrcyRfCmf8cnYGE%2B1QkGTi05kPbs5TeZoC3E%2BBzRYYyt8bQgjZkBWI83w6U71RR35upv6Uu2ygY0niPlM%2BoE0MTqQxpRkEFrXjaBkUBmi4S6fPe9VgsWIt31LkJLtSkyUIo4ATgDTZD8yiNDlSOziSWhpQe3nmmBk9UB%2BFgsE5MV51PvCrRd0zZ%2BJLZu66d8uGmr20epy0JZMMKQrMIGOqUBDYSXNuGOSnmGbX4GDdwC7%2F38d3mBXKKoUJSSvkmDePDRjvGc8P%2BV87JaEWkkEAlZw3og7pAWGbBP7Nd1a0dKWCwfzXjvmZG2S1RJt4I0OjNxSQ14o6MhYMvdHx8%2FkhCUJe66aLUI%2B2Vc7o1NA1yGCOdjsSsSF4L2p%2F%2FRcUCJWe8xqz8GALa6h9HxXjosRJoubCjM4UMcNMs1wXUuOTLHOttHypBa&X-Amz-Signature=446b61e74a7bf6891448e8d310529f9e62e9cdd26252b3e2479cd48086229b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
