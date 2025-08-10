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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623N2QHUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNwSMU5A9NhjG0lB0k6ij6Hm0LWra2Lro0riq7EkUMIAiAVQ9F9LSn9EzTohV7%2B3Rs%2FFOF0ozD1YsLgp3iegZGZTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtkUbNeZqsBbgNXmyKtwDNirFkwZha5zsJoP2h3sUjBqCKLayyUwbMP%2FfrT6GUBhyXVltKkIA4BmbGb8940az5Wd3jvwIRxEwztaPdchiYpilQMOytGh6c%2Fp7OFANN4QmL7k9VmDZf5on2orqusNOfisAFb8HvyXbq7C5lj5RY8emIJeKI5tbYIEOshP4xR9qaQGnY0zp%2FN13%2FwuoWblX4jG7eYP2fhkXvZcjbCPoez48nyjjX%2BgA5x2S84udhbB4VI6kJzbFR3j%2BXhaCNUyanVGLVrWTuTQLFh%2FL1Zuwnf3jDCaWzMeUdGr8qmM2ZTar%2F1X1%2BRyzsG4Ny%2BxmZZpy3qX2yOCp4amcosm6pzuhtL4hJVq0dUl%2BBf%2F3y5YDjS0miGKJVWrqah%2Bht93BWUGnCHK8tC2xt8dzJVHMx84aHklsMqOrDKziI4URYsZ4SrVL%2FKVybvvziI7RzYlBaDpYAaa0PDmoGFm6C%2BgrMTPcvn0DdSefpPID1J2%2FDAFBe%2BX4uOVEhUyAkYNekRWAiNJalzhM3oLrcyZaDG1dCq8KkLKCPQIeRJ2BJjjfSfU5knD4gixavw%2FLKIAUtqqCFBJ7XVGweZdOnozD3pCXBeskz2XGilMzwHNdQgqGMcqm0LcsV0k94DdMXWlO1Akwj7%2FixAY6pgH8Er3zWh7MvIj0eFiwLBFdHmS47QJg%2FaAvlCQEyEE6EHU8X%2BD112r6ANUaV5x7WH%2BaXDAHc8u2WTfcWjbNLk%2FdUP6YDulpYa0AkSoerlxvilZ1e3heWfUE6wjoKDvQBJ%2FOIGk%2FyftL3%2F5m6%2BErdRAb2gjPT8fIsbAsISTETLIMESLe7jvVmDP05YiBGj1Z602ccZIDXbJCIU0ArfuTFEq5JsKeuP0h&X-Amz-Signature=24f489c64448b349b63d4d4aba9ea8ea2a0ee4033fd6f8baed467d8b3e583d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623N2QHUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNwSMU5A9NhjG0lB0k6ij6Hm0LWra2Lro0riq7EkUMIAiAVQ9F9LSn9EzTohV7%2B3Rs%2FFOF0ozD1YsLgp3iegZGZTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtkUbNeZqsBbgNXmyKtwDNirFkwZha5zsJoP2h3sUjBqCKLayyUwbMP%2FfrT6GUBhyXVltKkIA4BmbGb8940az5Wd3jvwIRxEwztaPdchiYpilQMOytGh6c%2Fp7OFANN4QmL7k9VmDZf5on2orqusNOfisAFb8HvyXbq7C5lj5RY8emIJeKI5tbYIEOshP4xR9qaQGnY0zp%2FN13%2FwuoWblX4jG7eYP2fhkXvZcjbCPoez48nyjjX%2BgA5x2S84udhbB4VI6kJzbFR3j%2BXhaCNUyanVGLVrWTuTQLFh%2FL1Zuwnf3jDCaWzMeUdGr8qmM2ZTar%2F1X1%2BRyzsG4Ny%2BxmZZpy3qX2yOCp4amcosm6pzuhtL4hJVq0dUl%2BBf%2F3y5YDjS0miGKJVWrqah%2Bht93BWUGnCHK8tC2xt8dzJVHMx84aHklsMqOrDKziI4URYsZ4SrVL%2FKVybvvziI7RzYlBaDpYAaa0PDmoGFm6C%2BgrMTPcvn0DdSefpPID1J2%2FDAFBe%2BX4uOVEhUyAkYNekRWAiNJalzhM3oLrcyZaDG1dCq8KkLKCPQIeRJ2BJjjfSfU5knD4gixavw%2FLKIAUtqqCFBJ7XVGweZdOnozD3pCXBeskz2XGilMzwHNdQgqGMcqm0LcsV0k94DdMXWlO1Akwj7%2FixAY6pgH8Er3zWh7MvIj0eFiwLBFdHmS47QJg%2FaAvlCQEyEE6EHU8X%2BD112r6ANUaV5x7WH%2BaXDAHc8u2WTfcWjbNLk%2FdUP6YDulpYa0AkSoerlxvilZ1e3heWfUE6wjoKDvQBJ%2FOIGk%2FyftL3%2F5m6%2BErdRAb2gjPT8fIsbAsISTETLIMESLe7jvVmDP05YiBGj1Z602ccZIDXbJCIU0ArfuTFEq5JsKeuP0h&X-Amz-Signature=3a25153151ed58528a36014702757cf579ea55895fb72bed3eb4e6570f85a471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
