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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKIS6ENE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0efD61W%2BNAPvqXT8j3z9YkVKUHZHH2N0iFeNGjz3C9gIgc2xhEtZSFRnfOq6zD07cu6%2F7lZSYehNGcLLmwcg9pwIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFc6jYjeL9zLKGGkyrcA1tp0W2RvcTCyFb8OKcuNyaQFLoz34tiHOVY7RRnVGj%2FnF7x3hPCgU46fkCcML3%2FCTI3tlkP%2B6uflDJAEhHzqKPEphxH2%2BViy8gyXYQ9xvFDHuQ%2BFCnOHAmodMNiuv09V0pKV341z3IphIg0r0eaJqIq8VJhNjTN6G0YT%2BMF0bciUabAvyueqleTOmS%2Fe897Ss5nx%2F6OfFUE6phZMxXWX%2BpPzW3wzg8FcZHHNMMwmwmsiG9Qf4om0p9s43QIq2BnxGDLAyvc%2BKeGEwz%2Bm9m1xb9ZehumKEYlyDTmdMGG%2BEKiNW%2Fg4FP%2BZ%2BOE0bhL4lenly9h2YlUxssgi4SX%2BDKpGOFwXQ2%2FWD3GwT4L47e8Qp8UFXsnUzmHzR%2FXVa0LZrM447wdnZOiCqmpZGjHmUYav3dNbvH%2FFZdT6ulQvlCVrkbX3uB8Sk4VVESI6xeyIgY4N9BU7qgo1wQZvmcIz8GpcsWyTTTt7NaB4HOYmaClckzK16N6vysjhgTxwTWp1f2eaAy%2B4tu9T1Quyo3uWNz3fAP6%2BN6F2le0hEwPSrISzqxbB8vX%2BGTPUYo8f8EituekZeW74sZjcKBJyHR%2Fe%2FhaWdWd7jzoyu5jBmMmUQn35U50b0VKvQuNb8Y4uD55MJXwhL8GOqUBIqpE5VDesCKd2i6ISxGF%2F%2FtKFNJN5ad6uvUu1oLY9gzECHUg3NRA675Nz6b6kxY6yFd%2BVgpm9xWmMwVWSzcmz7hvnqpAlDxdTNN6TCN8moMC8vjcPIXRjkhIFGhY4%2FQ5IVegPP86ZmbXmdSp0XZe0SQycN0921wYI51ZM47YL9GCDJtdDkZP%2F7b4MyjsfwEWMti9ehLDPCJ%2Fzrxauy0eseOeHR8L&X-Amz-Signature=a2956af27817a0aee6dbc589bb07ef40b4b773c7d6f0ffffe19851faeaaa00f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKIS6ENE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0efD61W%2BNAPvqXT8j3z9YkVKUHZHH2N0iFeNGjz3C9gIgc2xhEtZSFRnfOq6zD07cu6%2F7lZSYehNGcLLmwcg9pwIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFc6jYjeL9zLKGGkyrcA1tp0W2RvcTCyFb8OKcuNyaQFLoz34tiHOVY7RRnVGj%2FnF7x3hPCgU46fkCcML3%2FCTI3tlkP%2B6uflDJAEhHzqKPEphxH2%2BViy8gyXYQ9xvFDHuQ%2BFCnOHAmodMNiuv09V0pKV341z3IphIg0r0eaJqIq8VJhNjTN6G0YT%2BMF0bciUabAvyueqleTOmS%2Fe897Ss5nx%2F6OfFUE6phZMxXWX%2BpPzW3wzg8FcZHHNMMwmwmsiG9Qf4om0p9s43QIq2BnxGDLAyvc%2BKeGEwz%2Bm9m1xb9ZehumKEYlyDTmdMGG%2BEKiNW%2Fg4FP%2BZ%2BOE0bhL4lenly9h2YlUxssgi4SX%2BDKpGOFwXQ2%2FWD3GwT4L47e8Qp8UFXsnUzmHzR%2FXVa0LZrM447wdnZOiCqmpZGjHmUYav3dNbvH%2FFZdT6ulQvlCVrkbX3uB8Sk4VVESI6xeyIgY4N9BU7qgo1wQZvmcIz8GpcsWyTTTt7NaB4HOYmaClckzK16N6vysjhgTxwTWp1f2eaAy%2B4tu9T1Quyo3uWNz3fAP6%2BN6F2le0hEwPSrISzqxbB8vX%2BGTPUYo8f8EituekZeW74sZjcKBJyHR%2Fe%2FhaWdWd7jzoyu5jBmMmUQn35U50b0VKvQuNb8Y4uD55MJXwhL8GOqUBIqpE5VDesCKd2i6ISxGF%2F%2FtKFNJN5ad6uvUu1oLY9gzECHUg3NRA675Nz6b6kxY6yFd%2BVgpm9xWmMwVWSzcmz7hvnqpAlDxdTNN6TCN8moMC8vjcPIXRjkhIFGhY4%2FQ5IVegPP86ZmbXmdSp0XZe0SQycN0921wYI51ZM47YL9GCDJtdDkZP%2F7b4MyjsfwEWMti9ehLDPCJ%2Fzrxauy0eseOeHR8L&X-Amz-Signature=9b1d459fbff4564dd27bc238986112c20581f6ee016dff7f80d7faf4d5facc60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
