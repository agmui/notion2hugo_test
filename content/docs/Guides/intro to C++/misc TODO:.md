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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSFEZZG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDm83gYz9UfTASqAKa%2FQWfZSczGLMCpAidGr6nC3spdJwIgSHmXeZRfeNbX8UWEcD11ansxVwEHMoGCCTy4mEVsXGgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWvjMPEDQdONaKWhyrcA%2BHwTZBO3JyzDP6o4UPaMvj2ZwH%2BWhgo1D4AiunWYTKe9geDzpxpwVWMcknwrYOeIE8m2%2BS1DHhmxkMTV85eKdGnzYV7q6IADeLM7HBSXr%2F5IPSpbB5d7s4qd2Tn7whmiezO2Xr7XW210EOwV2cO0jbciCKDNWOJLKbbFfBvXTvWQBN1cXbx3xKcPFIHwneL4Y5DArO49AaTbGr%2BL%2FrlvlwD8altnstS2OYIgFlSDUZg0uOiMnNEteOI7wzQj9XqK9HEU8hda2e4ZDlR%2Bx10%2B6jVnYPu8s0jaGnngPFuglbrqbp2YlUDHd%2FLIgdxs1GIw2g2%2F%2FWm155NFB4wTdpTRG7lP7sIEI2zcFz%2FIzY0YCXadWaa%2BQUYRQYJZWEgtxwub6UqEEmEEyQgv9jJ1AROC5QlFSHTf0KRFUJZ7GLCiHNcBnUQK9SfSALgduNCX0AA%2BRmr4uRa7uBKij2P2vDirdQXG5AZiPKvUli5I5Fg9gqo7nTPc7%2Fs96oFGO5la3ojQSy0QN0USXWGevdxriJNDsWfgIQ3aJ1yACPTN7%2BbpjDwbRdXg1JDVHYOFcsF2jjWu61KSBYBJSFCnSwGTnber6ShR7tRWVGqlQcPdswKShrrY2%2F%2BVbjYgieHQs14MJ27hMEGOqUB%2Be1SHeo8yvmtWqhZJXcj0PYYdWNDIZqZOlZD7oUdhx44n8sukar%2BdYYLmx6SwZrU0VEl7%2B%2Fd04hZUyntqRvR6UnSepw084NZflLRW9yAGTT7L3EBxmjX71LvQyxPU5jII3ei%2BYiCQLBSbiBRt%2FooXvG4bsCGf6okKbonXiOMh4cdZMIfu6YioDY%2Blu%2Bx9sZtgLE7tsA82jlYRNcHoV3t7wdlslDS&X-Amz-Signature=a548e238f41ff686b68b574fcd7b30813f599d8d5a26496f28f5b35c6564a4af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSFEZZG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDm83gYz9UfTASqAKa%2FQWfZSczGLMCpAidGr6nC3spdJwIgSHmXeZRfeNbX8UWEcD11ansxVwEHMoGCCTy4mEVsXGgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWvjMPEDQdONaKWhyrcA%2BHwTZBO3JyzDP6o4UPaMvj2ZwH%2BWhgo1D4AiunWYTKe9geDzpxpwVWMcknwrYOeIE8m2%2BS1DHhmxkMTV85eKdGnzYV7q6IADeLM7HBSXr%2F5IPSpbB5d7s4qd2Tn7whmiezO2Xr7XW210EOwV2cO0jbciCKDNWOJLKbbFfBvXTvWQBN1cXbx3xKcPFIHwneL4Y5DArO49AaTbGr%2BL%2FrlvlwD8altnstS2OYIgFlSDUZg0uOiMnNEteOI7wzQj9XqK9HEU8hda2e4ZDlR%2Bx10%2B6jVnYPu8s0jaGnngPFuglbrqbp2YlUDHd%2FLIgdxs1GIw2g2%2F%2FWm155NFB4wTdpTRG7lP7sIEI2zcFz%2FIzY0YCXadWaa%2BQUYRQYJZWEgtxwub6UqEEmEEyQgv9jJ1AROC5QlFSHTf0KRFUJZ7GLCiHNcBnUQK9SfSALgduNCX0AA%2BRmr4uRa7uBKij2P2vDirdQXG5AZiPKvUli5I5Fg9gqo7nTPc7%2Fs96oFGO5la3ojQSy0QN0USXWGevdxriJNDsWfgIQ3aJ1yACPTN7%2BbpjDwbRdXg1JDVHYOFcsF2jjWu61KSBYBJSFCnSwGTnber6ShR7tRWVGqlQcPdswKShrrY2%2F%2BVbjYgieHQs14MJ27hMEGOqUB%2Be1SHeo8yvmtWqhZJXcj0PYYdWNDIZqZOlZD7oUdhx44n8sukar%2BdYYLmx6SwZrU0VEl7%2B%2Fd04hZUyntqRvR6UnSepw084NZflLRW9yAGTT7L3EBxmjX71LvQyxPU5jII3ei%2BYiCQLBSbiBRt%2FooXvG4bsCGf6okKbonXiOMh4cdZMIfu6YioDY%2Blu%2Bx9sZtgLE7tsA82jlYRNcHoV3t7wdlslDS&X-Amz-Signature=f05c57094fc027f19fb95da8f748683b12e4801947f64a67cd027ac4822338b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
