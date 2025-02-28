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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBXCO64%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDkpq3myAmYiXsGLQXgw2aYJlY0WTQGPwciCp%2F686I9rQIhAI6ono3AuBd7t4ZnEQBZGs3Ok3PRES4PUJ29ONtsWDAEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7nDoPgkoKTCunD%2B8q3AMqg1j%2B4ozEsFwKrhZLpcjIGiWEX4envOFq4oqqE26DNN%2Bu7eZGNcb%2FedY%2B0NwSstCfWfNL42hN3Ajz8WYgIBo9dvd%2F2IafJRlQabs0UexdhJ6pweLFEx%2B7d%2FKDRnytf%2FWObB%2FCjFf0YBnK1TeTeILQHwIQHL8V1MZvp6tsMjtOh4Q17CFSlj25Mj0PfDPj1UieB8Fim91CW5SV6R6Fv%2BUNA8TEOVvOMjmZWmeB3aHi7Ru1LDNQ6prbqscNDjOPxroKuxY%2BxQ%2FbvSTu9mQ2xSYdKuIM2eL3LJpNMeWhHOCrbhowFSrF6CCJIaTeLJNjbjJFChH69ORU8PdJHsRATnbOEzWO%2BUs%2F%2BpghxCrl1XViKhB2L1MF7oz56vhxY%2F5JloTkSInxbZXcJIyVDvA3brgiiZ4j%2FRe%2B13G6iC2D1rrgyFft0clmDphEv2n8wB7RwLzlGCkYEsx3N%2B6ng3M1XLSMTGCxPC%2B9LBH9CfK0gfAxS%2FCIQCt04hiQOWAGrIq9O%2Bk%2BAB%2FYQ%2FmON4V4j5E9wpPpILtyBX0FkADY8%2BPaOSR8JivJyf7PAyGc7QSw3r9dfBD7NnXInzFw1Rmh%2BIlBitdXNpAky2JZ%2FhPb4o8M0zhx7EZ6bJABDYvIcC49IDDgkoa%2BBjqkAX6%2BMa%2FHdZvxmvD%2BZqDOKH5K1B%2FNYln6XxiVvgVqxlp8W9ny3x%2BQoARsOUchy4F6FqDsGJgGHrwuMQH9wOZq6OlHxkfVWI1ae0efbjiQ1TxRvUkOJqJE%2B3tW8XsytoEyjcLhomEAWZp78p4600DoOdvPTtWXENOPLb4Ff01PcsOd9G1JFvBdX%2BiVLh6Y96KH79n7DX%2FkGvQL3iN61ouI9AhoEMhy&X-Amz-Signature=334db577b71e9f9d1f94d21d88a83424a21ae3ebc2b76c0dd188bc38ac1e1d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBXCO64%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDkpq3myAmYiXsGLQXgw2aYJlY0WTQGPwciCp%2F686I9rQIhAI6ono3AuBd7t4ZnEQBZGs3Ok3PRES4PUJ29ONtsWDAEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7nDoPgkoKTCunD%2B8q3AMqg1j%2B4ozEsFwKrhZLpcjIGiWEX4envOFq4oqqE26DNN%2Bu7eZGNcb%2FedY%2B0NwSstCfWfNL42hN3Ajz8WYgIBo9dvd%2F2IafJRlQabs0UexdhJ6pweLFEx%2B7d%2FKDRnytf%2FWObB%2FCjFf0YBnK1TeTeILQHwIQHL8V1MZvp6tsMjtOh4Q17CFSlj25Mj0PfDPj1UieB8Fim91CW5SV6R6Fv%2BUNA8TEOVvOMjmZWmeB3aHi7Ru1LDNQ6prbqscNDjOPxroKuxY%2BxQ%2FbvSTu9mQ2xSYdKuIM2eL3LJpNMeWhHOCrbhowFSrF6CCJIaTeLJNjbjJFChH69ORU8PdJHsRATnbOEzWO%2BUs%2F%2BpghxCrl1XViKhB2L1MF7oz56vhxY%2F5JloTkSInxbZXcJIyVDvA3brgiiZ4j%2FRe%2B13G6iC2D1rrgyFft0clmDphEv2n8wB7RwLzlGCkYEsx3N%2B6ng3M1XLSMTGCxPC%2B9LBH9CfK0gfAxS%2FCIQCt04hiQOWAGrIq9O%2Bk%2BAB%2FYQ%2FmON4V4j5E9wpPpILtyBX0FkADY8%2BPaOSR8JivJyf7PAyGc7QSw3r9dfBD7NnXInzFw1Rmh%2BIlBitdXNpAky2JZ%2FhPb4o8M0zhx7EZ6bJABDYvIcC49IDDgkoa%2BBjqkAX6%2BMa%2FHdZvxmvD%2BZqDOKH5K1B%2FNYln6XxiVvgVqxlp8W9ny3x%2BQoARsOUchy4F6FqDsGJgGHrwuMQH9wOZq6OlHxkfVWI1ae0efbjiQ1TxRvUkOJqJE%2B3tW8XsytoEyjcLhomEAWZp78p4600DoOdvPTtWXENOPLb4Ff01PcsOd9G1JFvBdX%2BiVLh6Y96KH79n7DX%2FkGvQL3iN61ouI9AhoEMhy&X-Amz-Signature=ddbbbe7a021467029b2b9d976ed4c23b61e74feca428810358c8658def473bba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
