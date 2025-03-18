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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HNODMU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIE7WGHfBpanOukMZdBSMUAt84IisNir99v0%2ByDp%2Bur%2BRAiAUvWah%2FR1Zoo3T9%2B4KabbRpaTd%2Flye6DyOTyH7NPMUsCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMtHtPCc5VaoPmIsNMKtwDx0UXmviAcqml3oUL2PEJsyCk9aNx%2Bii7z%2F4zYYGs5c4%2BtEvz6xK%2BO5VGT5YpP020JsxRqElBrEnKQlwso6Zg2ZbfNCrkbfCf1LhJAT%2Bt40O6EFUpKAjNlWbr7Pz58SKqBwWG3JRpc6j%2Bis%2BkuS2jQeVQr5SKsZSlVyp82YXWkdPJ3TQOC2cBR8wJ0EvvrXhiBkgPwDrfxnsHV790smUwil6N766ALcdi7RkAc1c7yVGudpL3SVsS%2F6IMEm5XBpUqFFULmYtAhzgKqz4ybXsAbc1J1yFjZJ%2F36zZEh0yz%2FE6Jr47pNZiUgXs0uwoEF%2FFl9VXov3PUt0hqvJV14r2E6ai579t1%2Brc3YZjXgc3i6yQwErsepiSdYiRHEd5F8yxSipO6WR6b8zaGV8TK%2B7ByGaoC83MIk0SJq5BCQotWqSFzJxTqCp6Te9yh0yV7aL2HQnv%2Bo02nVefdRtABdPQIl6v6%2FQsVZfGBroxI6HCwLyfP4bj2gIJAlHG6kfPmKpSCeIapeOynJqdAmQeDhcIxIp%2FiV%2BtU1A5cSD8o48AkPPzZqQwLLwZFiaOWp5313Llks1dxwym3HrYpEoyCd1%2BTRLCZgY4Dl3nkurqoYDQ%2FRFnNs17q%2FAmmizu3Im4w4rHnvgY6pgE03GPn%2Blu2AI7ZbJ0dKiJPP5IHFlPiEeAYMoVic8zZB%2FrWMt1BmX0aySkXJU8z1dd%2BRxQbzYvsk2B5D3z1MCn3H11Jxk5IqREqed9JJX%2BV15QMhWz3N0Cpxr2XJ9OsEAFmbJ%2F8Ieb8K%2F%2FXr2yh1dsPc0zTAsxFqgHeIPxyw%2Ba3KkBBY363F9S9yhZbIlxGOYbIQ1nXCoN5PiB4MfV0wiDC7Jlppz85&X-Amz-Signature=8628864d7afc95a44f5d0d91ee6a9cfd5646a0051118905772d1ffce0f8d355a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HNODMU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIE7WGHfBpanOukMZdBSMUAt84IisNir99v0%2ByDp%2Bur%2BRAiAUvWah%2FR1Zoo3T9%2B4KabbRpaTd%2Flye6DyOTyH7NPMUsCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMtHtPCc5VaoPmIsNMKtwDx0UXmviAcqml3oUL2PEJsyCk9aNx%2Bii7z%2F4zYYGs5c4%2BtEvz6xK%2BO5VGT5YpP020JsxRqElBrEnKQlwso6Zg2ZbfNCrkbfCf1LhJAT%2Bt40O6EFUpKAjNlWbr7Pz58SKqBwWG3JRpc6j%2Bis%2BkuS2jQeVQr5SKsZSlVyp82YXWkdPJ3TQOC2cBR8wJ0EvvrXhiBkgPwDrfxnsHV790smUwil6N766ALcdi7RkAc1c7yVGudpL3SVsS%2F6IMEm5XBpUqFFULmYtAhzgKqz4ybXsAbc1J1yFjZJ%2F36zZEh0yz%2FE6Jr47pNZiUgXs0uwoEF%2FFl9VXov3PUt0hqvJV14r2E6ai579t1%2Brc3YZjXgc3i6yQwErsepiSdYiRHEd5F8yxSipO6WR6b8zaGV8TK%2B7ByGaoC83MIk0SJq5BCQotWqSFzJxTqCp6Te9yh0yV7aL2HQnv%2Bo02nVefdRtABdPQIl6v6%2FQsVZfGBroxI6HCwLyfP4bj2gIJAlHG6kfPmKpSCeIapeOynJqdAmQeDhcIxIp%2FiV%2BtU1A5cSD8o48AkPPzZqQwLLwZFiaOWp5313Llks1dxwym3HrYpEoyCd1%2BTRLCZgY4Dl3nkurqoYDQ%2FRFnNs17q%2FAmmizu3Im4w4rHnvgY6pgE03GPn%2Blu2AI7ZbJ0dKiJPP5IHFlPiEeAYMoVic8zZB%2FrWMt1BmX0aySkXJU8z1dd%2BRxQbzYvsk2B5D3z1MCn3H11Jxk5IqREqed9JJX%2BV15QMhWz3N0Cpxr2XJ9OsEAFmbJ%2F8Ieb8K%2F%2FXr2yh1dsPc0zTAsxFqgHeIPxyw%2Ba3KkBBY363F9S9yhZbIlxGOYbIQ1nXCoN5PiB4MfV0wiDC7Jlppz85&X-Amz-Signature=01eb14dbee972606629d9e7803f40bf02cbba582432083b7769e605499c8a642&X-Amz-SignedHeaders=host&x-id=GetObject)

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
