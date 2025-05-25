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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6264Q7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2BZySlGE%2BlQ6EBgiqRhD3eoi4slF%2BrZki0RrWxJGw7wAiBAVF%2FgUYNmmlBnK12dGdbejKFFrp6Wrdu9%2BcNOUQgJQir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMPfTg76RX73iTMbW3KtwD%2BQvGaemixvcdvECoHsqLaIw7CSlOs%2FiCS3mpXENiRagIVE3RJX4MxOluJEvJdujU927cL4Km0VYY4yBGLXE%2FPrf4NnwwAZtab3g4QIK3lpGRqGBQ8c8dUNcZmf4IYHQhxlXYgN4t%2Fm%2BLf5EvH%2Baac8cw5opExhRA29E10u%2FLUXS%2FnAf9QV4V4RjPuBDvkSSSG7o1e3uGOgCu2TG%2FGnwPRk2K40Gb4arTDpoyuqiTUFm4DXUryqwFED%2BvZUULwYEnMU7xSqs%2B%2BLd4fbvDWr2NKD46db4H75oTX9wGdoaMsKpr%2FpI8w7PoKSWfE3VVXy1DON9tNP7Y7gYkPj2YipQnstpMALC49AvwGHVVzdefiqJtV1Eg6g%2Fiu7aFpA9QHFVRDaHDqRRBbAyPRd7U63ymToY0cnImQEsqyxhXTmmmtinIXHp4ynH2Kbb1xQOt%2Bv%2FK%2FT9CgmR1BllAZYQxP4kFkJHt7p9GhDnZb1rqWVvrAm0oC6jHXbQQy0Hdd1khM0O7rgudb5Z9QxEWzLCctzMNL7doqhyfN0ILVfKGO8RN6d9Z%2F7V1vpPQr8JGT77pBGsvLr46cChowQgQRy7TUQWRU8oJUauC4dYNqjOYWxKpYNZxv419vRMQUP%2B3xqAw6%2BzLwQY6pgGjXmbYlpJqwUwD9cBWet8mVtzX3BIXRnJFcpj1O24O%2FrmZSO7uX5DEJaxg%2FDCJ2eLCF%2FhkNEuRWY3frdYbG9BJLPqVWhVYtEkG8t2Mh%2BbaahsRLDbiZ1yoiSjs6ky6EK9EGtOMeFXcByec4VoDGFI6ZwS%2BNJD%2FYvIhcwhX%2B5009iAsK83mVfCA8VY%2F13R0vk9D4mG2%2FbDRK0k85GXOk1ghhr6Gfc%2F9&X-Amz-Signature=08e09a3fb26b1a65ec8808057eca526aa81893d81fd9ba53307c57f8ab30a5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6264Q7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2BZySlGE%2BlQ6EBgiqRhD3eoi4slF%2BrZki0RrWxJGw7wAiBAVF%2FgUYNmmlBnK12dGdbejKFFrp6Wrdu9%2BcNOUQgJQir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMPfTg76RX73iTMbW3KtwD%2BQvGaemixvcdvECoHsqLaIw7CSlOs%2FiCS3mpXENiRagIVE3RJX4MxOluJEvJdujU927cL4Km0VYY4yBGLXE%2FPrf4NnwwAZtab3g4QIK3lpGRqGBQ8c8dUNcZmf4IYHQhxlXYgN4t%2Fm%2BLf5EvH%2Baac8cw5opExhRA29E10u%2FLUXS%2FnAf9QV4V4RjPuBDvkSSSG7o1e3uGOgCu2TG%2FGnwPRk2K40Gb4arTDpoyuqiTUFm4DXUryqwFED%2BvZUULwYEnMU7xSqs%2B%2BLd4fbvDWr2NKD46db4H75oTX9wGdoaMsKpr%2FpI8w7PoKSWfE3VVXy1DON9tNP7Y7gYkPj2YipQnstpMALC49AvwGHVVzdefiqJtV1Eg6g%2Fiu7aFpA9QHFVRDaHDqRRBbAyPRd7U63ymToY0cnImQEsqyxhXTmmmtinIXHp4ynH2Kbb1xQOt%2Bv%2FK%2FT9CgmR1BllAZYQxP4kFkJHt7p9GhDnZb1rqWVvrAm0oC6jHXbQQy0Hdd1khM0O7rgudb5Z9QxEWzLCctzMNL7doqhyfN0ILVfKGO8RN6d9Z%2F7V1vpPQr8JGT77pBGsvLr46cChowQgQRy7TUQWRU8oJUauC4dYNqjOYWxKpYNZxv419vRMQUP%2B3xqAw6%2BzLwQY6pgGjXmbYlpJqwUwD9cBWet8mVtzX3BIXRnJFcpj1O24O%2FrmZSO7uX5DEJaxg%2FDCJ2eLCF%2FhkNEuRWY3frdYbG9BJLPqVWhVYtEkG8t2Mh%2BbaahsRLDbiZ1yoiSjs6ky6EK9EGtOMeFXcByec4VoDGFI6ZwS%2BNJD%2FYvIhcwhX%2B5009iAsK83mVfCA8VY%2F13R0vk9D4mG2%2FbDRK0k85GXOk1ghhr6Gfc%2F9&X-Amz-Signature=579679194e6b3b47874060e2250e2a08ce1b75f5694b6ea5f2d6fec15d10ecef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
