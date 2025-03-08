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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBTJOXI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGX3QRDkmB7CKrDWdc%2BIkWjwM3U1BhYx1NYkzcI%2F0zeNAiEA5bNCuk0mLh3CVz1YvHrxEh%2FhyjLYfT4Vx7lzdfhBAc4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIopqnUOcZL8YocASyrcA9ccuax9KgHxotOnVPZNyDBgyTgqkVGANrGp5GaeWUen69a5KDrFKQveeK74iZNjeXoP67ejkrj2ACItTJNMF16DltKN67VObgZaPD0sSkbhHSkJ%2FVklZi6A0rYuB3ObIdD3sSMPNMypaXGnLs9Mzut%2B2Gmbpn3rGTm%2BH0Ro52lLf%2BOrxN2fJ9BqkkHc4OOweHsuxJYr0RQ8fOi2Tc3xy8zXislQRs4khtPZeb0F3t8Kisw5%2Faar90WK8sEG%2F%2BjH60vfuXbC7uBLIK8x%2F4lsKBwT0UXCSJsFeOJdvIyVwoPafV592GASgvzzZIQ9rXZYUd4UlyNsRFBCWbnYuAv8PeFON18ymTVmkGSV1Dmk14VQ4zBsxdUGoKOq4qhAWBHuzfOsLZVfLtXwyKHSIks8eeBbmb5BC%2FjR%2BNstjLlSMN4ZRSOU6j8DjLbJPtFH2O4U%2BH9pcBmljKW49azTEO5dJzdMUszROMDKIm1ti2jJG56aML3HzmRH5AnQIf6RvNTAdA8bhxTyiw%2BrCbcL88A1Ay01h5AZmDlB%2BeSh7gDve7tQUYf7xzNxplLeVn7ox%2B8wqukBOUbhmUOve6NCj96jeNPFnRZJIA%2F1kwxd%2BXiRUNGi3BMHcbKqM126ZfDJMKT9sL4GOqUBXJnqOz1Sa8zIRnWaZeRYNVl71E4%2BGaiPvpKBgzAm%2BKbRLZ%2BWe3YLa4i%2FaBX6IX83ixI%2BiL2NW%2B%2B%2FMP9mpoJLgWgC3qLAacmUGSzCbdw8UAmk66o2BGs9Hdrcujsv0nKQuGo7ICYXIV3eyvm7SioWAfedjAefNRvdH6pFSHYrgRKvpHt3Uo10F0i9%2BgN4KERJICzWm4vMEC%2F1kGLdD%2FxyOZtErVHx&X-Amz-Signature=81e2d09bff1eb93be9a41ac9f5c9e7c6362b4c11732942c64d23e95aaee9eb22&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBTJOXI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGX3QRDkmB7CKrDWdc%2BIkWjwM3U1BhYx1NYkzcI%2F0zeNAiEA5bNCuk0mLh3CVz1YvHrxEh%2FhyjLYfT4Vx7lzdfhBAc4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIopqnUOcZL8YocASyrcA9ccuax9KgHxotOnVPZNyDBgyTgqkVGANrGp5GaeWUen69a5KDrFKQveeK74iZNjeXoP67ejkrj2ACItTJNMF16DltKN67VObgZaPD0sSkbhHSkJ%2FVklZi6A0rYuB3ObIdD3sSMPNMypaXGnLs9Mzut%2B2Gmbpn3rGTm%2BH0Ro52lLf%2BOrxN2fJ9BqkkHc4OOweHsuxJYr0RQ8fOi2Tc3xy8zXislQRs4khtPZeb0F3t8Kisw5%2Faar90WK8sEG%2F%2BjH60vfuXbC7uBLIK8x%2F4lsKBwT0UXCSJsFeOJdvIyVwoPafV592GASgvzzZIQ9rXZYUd4UlyNsRFBCWbnYuAv8PeFON18ymTVmkGSV1Dmk14VQ4zBsxdUGoKOq4qhAWBHuzfOsLZVfLtXwyKHSIks8eeBbmb5BC%2FjR%2BNstjLlSMN4ZRSOU6j8DjLbJPtFH2O4U%2BH9pcBmljKW49azTEO5dJzdMUszROMDKIm1ti2jJG56aML3HzmRH5AnQIf6RvNTAdA8bhxTyiw%2BrCbcL88A1Ay01h5AZmDlB%2BeSh7gDve7tQUYf7xzNxplLeVn7ox%2B8wqukBOUbhmUOve6NCj96jeNPFnRZJIA%2F1kwxd%2BXiRUNGi3BMHcbKqM126ZfDJMKT9sL4GOqUBXJnqOz1Sa8zIRnWaZeRYNVl71E4%2BGaiPvpKBgzAm%2BKbRLZ%2BWe3YLa4i%2FaBX6IX83ixI%2BiL2NW%2B%2B%2FMP9mpoJLgWgC3qLAacmUGSzCbdw8UAmk66o2BGs9Hdrcujsv0nKQuGo7ICYXIV3eyvm7SioWAfedjAefNRvdH6pFSHYrgRKvpHt3Uo10F0i9%2BgN4KERJICzWm4vMEC%2F1kGLdD%2FxyOZtErVHx&X-Amz-Signature=f9f52220f7b879c3ce6686414f72e9fa17cb35e85d367291ba5bf2118f1a17f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
