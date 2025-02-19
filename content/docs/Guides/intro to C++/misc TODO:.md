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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXCRQXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnWE8zI3M7g3u7RjW9kpGP4g70l5DQo9XEL1%2FofgPgxwIhAImoPfk28ynfUPzHFBqEHgJHEPcDE0fd%2FrBy0YvcmITFKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIDe%2BtVP9PaYwknmYq3AMRwEtXwTPBrdYLLsJ0ygdSembjvkux%2BYRax5AphChtDMzj1eHfLXIB%2FlUT%2BB%2FbXdGEO3p%2FUGc3ebQYyVfPsS0qjReoXLeVmFy7C%2Fl9BiGtFVNWyc2Y21DKcgsw%2BDzNYDlbR6nVOQZI3z1MPbsKDMcDEA5HIpbvOYqvi4m47%2BhgpLTpUTZnEWNAYdKp5i0y9emxr8hnNd0u%2FMPsLvj9v%2BF6vub9qqiMLW3vjtVgROe1YyWSsrB4LFaMvFhvothf%2FbcldEKRI%2Bo3uTOu1OQ%2FK7pkG5kZrvLZwSPrDNpAIn11HV70JBtqyFAw9LAgULjVTZF9UyoV4ARSw1BCtGPkJxN3sRiZKmXtGnLyahDzO3bOuNNl2tVay6vGlIqmFGCqaRRI%2FtZ%2FohhsoaZJ%2F3S6V5ZuQZUpGgn9h9choFBtO%2BoBHesoeh9ZoEfhyfGnXJE%2Fesr7AfRHckog9BNrpqg7Pu%2FtB%2BWdGyKFJrjPc8U%2BJWzs%2By8gbdIvvsFATHq%2BU4acId%2FU95P30Akkb1oDsCTzBlTw%2B7tQ1NQjl5CfZBuuF0DKB1yRcseQwG6XaZ9U16E8qH0oLkeIT5%2FtLTQFEzLGDHtXLty%2Be4GbtlVVMXc65Ot%2BW0vqook3wCHWLpMifDDYtdi9BjqkASYg1G7TDhdvtQ9vcbuM5rkcqTR3DkHPjGZlOARHFqGA%2BLkyj1pc5FwQf8Pkyf2fNTODfBx6pYPTdPXXYH5E0%2FpAga3a24Jca4r6gAEDvIZAeHBCvOkxuBH%2FbfOVGmqF3CmdO6sj4Ki%2B5f1KPI%2Bu%2FyRXjL7M0zkr61GxnWq8Jn%2BXgFoSmEjX0iGjldTYnBznV1bLv8E7iIxJW8ZA7pQmP3q2U97p&X-Amz-Signature=ea0cf16dc27c4f7336d576f1191c4d627d8261a50622030d26e55d98edc7b792&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXCRQXY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnWE8zI3M7g3u7RjW9kpGP4g70l5DQo9XEL1%2FofgPgxwIhAImoPfk28ynfUPzHFBqEHgJHEPcDE0fd%2FrBy0YvcmITFKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIDe%2BtVP9PaYwknmYq3AMRwEtXwTPBrdYLLsJ0ygdSembjvkux%2BYRax5AphChtDMzj1eHfLXIB%2FlUT%2BB%2FbXdGEO3p%2FUGc3ebQYyVfPsS0qjReoXLeVmFy7C%2Fl9BiGtFVNWyc2Y21DKcgsw%2BDzNYDlbR6nVOQZI3z1MPbsKDMcDEA5HIpbvOYqvi4m47%2BhgpLTpUTZnEWNAYdKp5i0y9emxr8hnNd0u%2FMPsLvj9v%2BF6vub9qqiMLW3vjtVgROe1YyWSsrB4LFaMvFhvothf%2FbcldEKRI%2Bo3uTOu1OQ%2FK7pkG5kZrvLZwSPrDNpAIn11HV70JBtqyFAw9LAgULjVTZF9UyoV4ARSw1BCtGPkJxN3sRiZKmXtGnLyahDzO3bOuNNl2tVay6vGlIqmFGCqaRRI%2FtZ%2FohhsoaZJ%2F3S6V5ZuQZUpGgn9h9choFBtO%2BoBHesoeh9ZoEfhyfGnXJE%2Fesr7AfRHckog9BNrpqg7Pu%2FtB%2BWdGyKFJrjPc8U%2BJWzs%2By8gbdIvvsFATHq%2BU4acId%2FU95P30Akkb1oDsCTzBlTw%2B7tQ1NQjl5CfZBuuF0DKB1yRcseQwG6XaZ9U16E8qH0oLkeIT5%2FtLTQFEzLGDHtXLty%2Be4GbtlVVMXc65Ot%2BW0vqook3wCHWLpMifDDYtdi9BjqkASYg1G7TDhdvtQ9vcbuM5rkcqTR3DkHPjGZlOARHFqGA%2BLkyj1pc5FwQf8Pkyf2fNTODfBx6pYPTdPXXYH5E0%2FpAga3a24Jca4r6gAEDvIZAeHBCvOkxuBH%2FbfOVGmqF3CmdO6sj4Ki%2B5f1KPI%2Bu%2FyRXjL7M0zkr61GxnWq8Jn%2BXgFoSmEjX0iGjldTYnBznV1bLv8E7iIxJW8ZA7pQmP3q2U97p&X-Amz-Signature=2e2fd6171f72f02448f33faa53881332f3988198ff77b84f4408b925b105917b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
