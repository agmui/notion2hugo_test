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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7S4F5BG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBCmDwAgu%2BIH07Z%2F2g%2Fe2Ss28g3HNrx4MgceiD0FsWZAiAJIxT%2FhEjG8H67gv02jikjJKrJ3nt6atg5h3Sn%2B%2BeAJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTIbZpzai6WrG596KtwDmoWLyrMaxUwLEQca1HCiSTKbtgHrwTqQwqwLKU4oxRx1tOi0GbgpdCQFof%2BNOlcw7CRJyFYnozAFyNHJxEadS96XG3BXHtaI1gGKwOV1JSw%2F5AWwZVSg%2F5wmcPaVCtyZA0z%2BRuhoGM0b8NOOai9XzKUcMRL%2B8Y2fSOiM5FJh8hFPyi0ZOlcgOQAFONfW4Jl%2BgQLjc0BPFNLPUalmekjE5TFMKhaH5GWRkG7bZNG%2B0jYu7DE0CD%2FrLiMgnpUwdElKzfzeO9nUnYOi8u5YWcyxzftCqWsbbdiAxAJgi5f2948hxgM1AfLu27Sbk9SlILoZ%2BKABQ3UFOEuIi7DH7G8Of6cmgqRKY6D3jjNTuGJafBCy%2FQ08nde%2Fd9otcKAyUVjcDgFlqKbaiXWBvrIFsAIMIwKJg4Ehcfboj31nsMuy1XDZIkzMXWMNapp1RY0n8k1Z8JzSjnqZ5rk4iAB4WrNNt%2BtzqWxdyyjl7xFt%2FN26MQhMvDb%2FJcST4AdqL6Pe0Z5RvNzTdv5mJaVBFknutNBSFbjQxbz6wk1Xu9aP5IR7sd4ZNEtKvbjNi19vOaAhJ4zBMgXpnAn1DL6GhBwYLU%2FHaSKSoJhw1xxWX7%2BSu97OjyNuhIWQ6T8rkPUWv6wwxYfgvQY6pgFvC6EmC%2BSeNy7xBv3%2BB6KlxlEDmSiTYDwHobO1hV6yQh%2BQmje6laR6%2F%2FJnCfFTGt5oPQSNKDweu7Di49bd1rj7m0SZ4rQ1Y1mHwhriXxX1DBqEpDuTOMqEoo1f2Qsc3RsfexqeiAm%2F28Sypr8DyIKmQvF57UZ2ZDlGSpWFay9vsyqXoWmA5XRqrnbnewgq0czVpf8aB8VR4NPc89cUUtjBbaYQnlCG&X-Amz-Signature=e14ce262a3f380f3b22017faba45be5105cfb29cf04a83e08e5b0004794ea382&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7S4F5BG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBCmDwAgu%2BIH07Z%2F2g%2Fe2Ss28g3HNrx4MgceiD0FsWZAiAJIxT%2FhEjG8H67gv02jikjJKrJ3nt6atg5h3Sn%2B%2BeAJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTIbZpzai6WrG596KtwDmoWLyrMaxUwLEQca1HCiSTKbtgHrwTqQwqwLKU4oxRx1tOi0GbgpdCQFof%2BNOlcw7CRJyFYnozAFyNHJxEadS96XG3BXHtaI1gGKwOV1JSw%2F5AWwZVSg%2F5wmcPaVCtyZA0z%2BRuhoGM0b8NOOai9XzKUcMRL%2B8Y2fSOiM5FJh8hFPyi0ZOlcgOQAFONfW4Jl%2BgQLjc0BPFNLPUalmekjE5TFMKhaH5GWRkG7bZNG%2B0jYu7DE0CD%2FrLiMgnpUwdElKzfzeO9nUnYOi8u5YWcyxzftCqWsbbdiAxAJgi5f2948hxgM1AfLu27Sbk9SlILoZ%2BKABQ3UFOEuIi7DH7G8Of6cmgqRKY6D3jjNTuGJafBCy%2FQ08nde%2Fd9otcKAyUVjcDgFlqKbaiXWBvrIFsAIMIwKJg4Ehcfboj31nsMuy1XDZIkzMXWMNapp1RY0n8k1Z8JzSjnqZ5rk4iAB4WrNNt%2BtzqWxdyyjl7xFt%2FN26MQhMvDb%2FJcST4AdqL6Pe0Z5RvNzTdv5mJaVBFknutNBSFbjQxbz6wk1Xu9aP5IR7sd4ZNEtKvbjNi19vOaAhJ4zBMgXpnAn1DL6GhBwYLU%2FHaSKSoJhw1xxWX7%2BSu97OjyNuhIWQ6T8rkPUWv6wwxYfgvQY6pgFvC6EmC%2BSeNy7xBv3%2BB6KlxlEDmSiTYDwHobO1hV6yQh%2BQmje6laR6%2F%2FJnCfFTGt5oPQSNKDweu7Di49bd1rj7m0SZ4rQ1Y1mHwhriXxX1DBqEpDuTOMqEoo1f2Qsc3RsfexqeiAm%2F28Sypr8DyIKmQvF57UZ2ZDlGSpWFay9vsyqXoWmA5XRqrnbnewgq0czVpf8aB8VR4NPc89cUUtjBbaYQnlCG&X-Amz-Signature=4f6e6d054373c9e0a7fc7f86a17f40a0c3ce8d7b1c2a994734029f90097bd4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
