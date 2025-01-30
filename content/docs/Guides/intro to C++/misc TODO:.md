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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVJ5CIP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUAE6MZVrSQXXAJa4s1TvCU%2FFjBaazK%2FNEd3TWt4hymgIhALsPPJ4eB3Om%2FL2Fh%2FG5Umje0zPlW9zo%2BlZ7dx3PcokuKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLz3C8HGBze%2Bkkqu4q3AMbvZVQXr3hzxBDIygyfl86GSTKOTlsX5Vr5YGDQ50oFnm%2BPYvRH1VQ6LMZ%2B%2FIKwjKgkLca8l%2B6dxRmVDgBp9MAFmeJH%2B2t3%2BgSnCfKnkc%2FdNQP3ObCCj%2FMz0P2R0S5U222HSLMBQokt0lVpxFBqqEAsFsU6Rdz4qBc9dTV1Kp2UAo88B4lInaJeheAarqjdNsb%2F6aYKU77wv%2F01joFJrX3AePAj8D2qJnXOjMcTGW4H9DOHG62jHQbbdcmdJdlvukARwgWmtXkH3WurqlhBJEDBBHHunq5p1%2BukSksONWdzmdcMR%2BOCoMkRY07eF2HndWQ28ssEb88I8%2Fa%2BH65NasOxZvckN2l2LmGYs2D74tPDJDKz7ucG2SDksxkwvxz9APge3nqux3jZsPwhrQ30P4wYObLt9M9jAIT6fh8gFYRBBp6wvriTuAB%2BtoFiXEcSfJ4tMdBiQXl7WzUpp5xymN1otiAyh%2BewS3YPKdNN2jJ7EJ6IRGtfasyLoavlgOfrja17X3Y3xDMtfZI32%2FyT9QWLbWv8r4U%2B5tLHvO8uNF4uum1YIqDG1m33a7GLMKCBa7pZGmOdg7ECgfCvrB3yDFk7t6Popu1MZzDKSjV4H9A1evFthXjEv8Huy5x%2BTDS2O68BjqkARie52CbAqGZd57lgw4pN7h7riGV4pYDCrfLfVmist1aPF32CwQHTAghE%2Bn7AxpYH4%2Fh17jn%2Bt0vHDhHDOEPY7lDFKHBJ3cZs10G3VHoZSLqjyWeK00hmdMAn3xH27RJOTEMn62SPS7FwBDvDC9HUG0oPpUDD9ayQRK3VMDlYYXysr7KOLsSF42%2BQkmDjuM1d0FO2ddnDNU%2BhfnxQs477%2BMRUAPa&X-Amz-Signature=5028bc3fa2b6646b1042cdbb3baa2f6bc7a8697abe8dbfeec20466b0df1ab4d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVJ5CIP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUAE6MZVrSQXXAJa4s1TvCU%2FFjBaazK%2FNEd3TWt4hymgIhALsPPJ4eB3Om%2FL2Fh%2FG5Umje0zPlW9zo%2BlZ7dx3PcokuKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLz3C8HGBze%2Bkkqu4q3AMbvZVQXr3hzxBDIygyfl86GSTKOTlsX5Vr5YGDQ50oFnm%2BPYvRH1VQ6LMZ%2B%2FIKwjKgkLca8l%2B6dxRmVDgBp9MAFmeJH%2B2t3%2BgSnCfKnkc%2FdNQP3ObCCj%2FMz0P2R0S5U222HSLMBQokt0lVpxFBqqEAsFsU6Rdz4qBc9dTV1Kp2UAo88B4lInaJeheAarqjdNsb%2F6aYKU77wv%2F01joFJrX3AePAj8D2qJnXOjMcTGW4H9DOHG62jHQbbdcmdJdlvukARwgWmtXkH3WurqlhBJEDBBHHunq5p1%2BukSksONWdzmdcMR%2BOCoMkRY07eF2HndWQ28ssEb88I8%2Fa%2BH65NasOxZvckN2l2LmGYs2D74tPDJDKz7ucG2SDksxkwvxz9APge3nqux3jZsPwhrQ30P4wYObLt9M9jAIT6fh8gFYRBBp6wvriTuAB%2BtoFiXEcSfJ4tMdBiQXl7WzUpp5xymN1otiAyh%2BewS3YPKdNN2jJ7EJ6IRGtfasyLoavlgOfrja17X3Y3xDMtfZI32%2FyT9QWLbWv8r4U%2B5tLHvO8uNF4uum1YIqDG1m33a7GLMKCBa7pZGmOdg7ECgfCvrB3yDFk7t6Popu1MZzDKSjV4H9A1evFthXjEv8Huy5x%2BTDS2O68BjqkARie52CbAqGZd57lgw4pN7h7riGV4pYDCrfLfVmist1aPF32CwQHTAghE%2Bn7AxpYH4%2Fh17jn%2Bt0vHDhHDOEPY7lDFKHBJ3cZs10G3VHoZSLqjyWeK00hmdMAn3xH27RJOTEMn62SPS7FwBDvDC9HUG0oPpUDD9ayQRK3VMDlYYXysr7KOLsSF42%2BQkmDjuM1d0FO2ddnDNU%2BhfnxQs477%2BMRUAPa&X-Amz-Signature=1818014b8e3c26e758c74a7bf2d02b725891ccc579ae9566f26a5d59bf899da6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
