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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZUSHLG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVOwljtTb09cjrW%2Btxexts12aHN98r212z7c76cfyYwIhAK8%2FcjLlFL3J2TljLeGFY3Jr68gV0%2BZjzY%2B8ZYe91RnHKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZyYwVrLcAnOdFlcq3ANep%2F5ksdOmuki34B53VYK%2BsKC0NAjDRkNqbxLOjJTdtD3QwbjcQxOgJ5MWoDopwgqtfYcbqYuV%2BXU4uDC4uqeTgTj0QHt9pYxvD4sURfPdagm1G3nywOB69U7fVeXuTIpJcdFOdDUG%2F9SIM0ZR5FO1TRbRogmm7uAI1dAmgG%2FqjFI8qS61iS8J6oNVuG2f%2Fn7SSb6GYKwPwOhXtpL%2BqdW3brxlKpGTyknhDhovkgMWkIZC3FpLMxLXGPINT%2FCus%2B%2FKxEyRldVVy0OWgsFPGJhfLUNiXI3IjP833WjYzzt9K99FcbppJKT1scYw%2FBNc8BZ3bTF%2FJ5WzwFkRPNw%2BtommSkd%2FvntIhHXqgDb1B2qv%2FSdbi%2FPnLq33PQ33j0GJ4labyEc5OOwxKio%2FGAu0SnAHrzgaxhyo7tT34hTPx2wLinK5R0ASs3Ba5PFT0Y2BakU9aqp3fUQmLDRwdcVhc%2Bq137VPOHY11GQbHhTHoD5A3cVY1pnG5PW%2FMBU8Xu06MwdmdXeHtKQXezoZB9BAHrpCH8ejGKeqFmT%2BxGyTohDA9vxh9CIbXdyd3d02q7KrxyRiU9YA0Inh6Jq%2FBnmmO7D7UHDuYMeDScQelVLrMxhPK1skoVt%2FCMzMVfeIOjDR%2FIzABjqkAU%2B16C8yPAV4MY6wP4JBk6FMcdb7jijefBYvaYf8NqTonXye8NQ6c%2BQDPgYfWaDwRCV926rcciHDO3tpCLhE4t6DkBX3Qt6MubqaEojC%2B%2BoxPDteFG4ApQiZJ0Q2YeRwarsB6Cr%2Fg%2FfP75YCazQjeaF%2BsVYnXNbwxh6uDvQbvFuIbbKFm6vDBCXym7Bh2xHx6oaVwR0JtVxj8dPmgVN4ctNsvzRP&X-Amz-Signature=cd082ec3e72e6426cc688136fcfe374af257bfdcafed9cefd1bf23beade9bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZUSHLG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVOwljtTb09cjrW%2Btxexts12aHN98r212z7c76cfyYwIhAK8%2FcjLlFL3J2TljLeGFY3Jr68gV0%2BZjzY%2B8ZYe91RnHKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZyYwVrLcAnOdFlcq3ANep%2F5ksdOmuki34B53VYK%2BsKC0NAjDRkNqbxLOjJTdtD3QwbjcQxOgJ5MWoDopwgqtfYcbqYuV%2BXU4uDC4uqeTgTj0QHt9pYxvD4sURfPdagm1G3nywOB69U7fVeXuTIpJcdFOdDUG%2F9SIM0ZR5FO1TRbRogmm7uAI1dAmgG%2FqjFI8qS61iS8J6oNVuG2f%2Fn7SSb6GYKwPwOhXtpL%2BqdW3brxlKpGTyknhDhovkgMWkIZC3FpLMxLXGPINT%2FCus%2B%2FKxEyRldVVy0OWgsFPGJhfLUNiXI3IjP833WjYzzt9K99FcbppJKT1scYw%2FBNc8BZ3bTF%2FJ5WzwFkRPNw%2BtommSkd%2FvntIhHXqgDb1B2qv%2FSdbi%2FPnLq33PQ33j0GJ4labyEc5OOwxKio%2FGAu0SnAHrzgaxhyo7tT34hTPx2wLinK5R0ASs3Ba5PFT0Y2BakU9aqp3fUQmLDRwdcVhc%2Bq137VPOHY11GQbHhTHoD5A3cVY1pnG5PW%2FMBU8Xu06MwdmdXeHtKQXezoZB9BAHrpCH8ejGKeqFmT%2BxGyTohDA9vxh9CIbXdyd3d02q7KrxyRiU9YA0Inh6Jq%2FBnmmO7D7UHDuYMeDScQelVLrMxhPK1skoVt%2FCMzMVfeIOjDR%2FIzABjqkAU%2B16C8yPAV4MY6wP4JBk6FMcdb7jijefBYvaYf8NqTonXye8NQ6c%2BQDPgYfWaDwRCV926rcciHDO3tpCLhE4t6DkBX3Qt6MubqaEojC%2B%2BoxPDteFG4ApQiZJ0Q2YeRwarsB6Cr%2Fg%2FfP75YCazQjeaF%2BsVYnXNbwxh6uDvQbvFuIbbKFm6vDBCXym7Bh2xHx6oaVwR0JtVxj8dPmgVN4ctNsvzRP&X-Amz-Signature=3586e660308e645a7b2a821d1b636d508e9a2d613b0c5fed7a632771e14dd85d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
