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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSX7KFY%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEH4AquqgpDgkOmRinBnhwjXZewgEtdqWxeVzWAZot%2BtAiBsN97zTVTOxEL4bDik2qd0z6wJHq2QSFfhL2JVDvsInyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjoFRHYUR7%2B2yUaJKtwDuLzmVmHssCYNwPWDryjYxRPmj2vEHv8JkaEUE3rXUiurXeHR3HeSGZ43hUeWf%2BMVXyNQB1r02Bm8gIu%2F6AZJdKlAbmEsRYmEUezbOPfROi6GosrOKawzgyd0AgzVh6aVakiS49kx5Rm9hbJdeDjeH6amhd7695TxkYY%2F7J09MQlbBI2oYmSY9HBV3qbsxK%2BkOmd6VvtzAPeCheTmsp6MI1d1ibz124fJtFjsFqR4cIUjNWFXM7QAOMCXqsZjOpZzHP2SEPZSJ7j%2BHfHec0XisvZqRvUTU6KY5nrGb37YWUxizW7WMJRVQnS9RPopSKMLMzMj45XJVh14dzNPQ70a9gxDy%2Bb%2B90CYUzQp8UVtAi0YqaIbIHEiuZVCLywA%2FP4zho0pAH7IRJqGqX5IBR3EgzsdWOK8ZFUCokvr2Vyl3xaJPQRc2Q%2BTPoNUyo0RzyOH24CaApCa%2FBN7ZIRqBhOVdUlFCnO8ftJ8KV7vJuu5clF8hnLMFRj3BLFatnBL3mjc1Cz3OPhU0V4pTgx2sgy71SpvE5HkBzu8buzE%2BhfqQ7OjU6N%2F8YoEOz9iXdpD3w8Gu3iVh9P%2FVc1FDq%2FKyM6CGYE9sgg73upqVnzxlg3wOMe2aYdbsghKuTQccjowt9G0zAY6pgEZZUU5lsNU7rmUOH4tm6NLlMOa8tAovI4y4KUIBBXU9ooMIsRUl%2Fj6KyH2hEdFI4jQvKhlFqx8rQR49oBoCEbK7TNvZjcQ7b7XmtTmxqU0N3%2FyvPgRdgaSYszD3Zus%2BQbIjqnqimfmC3WWfEaR7vjsL6xKRbCinw%2BOaXxXAvZx2%2FULJdUip4DFrbgH2PiAUhSVBYzYlCpqKYLRR79uC67XS9l3SVxc&X-Amz-Signature=94996d400b87bf33ad1925465235f40b545eddb36d258f7c7e33f7814ecd8dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSX7KFY%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEH4AquqgpDgkOmRinBnhwjXZewgEtdqWxeVzWAZot%2BtAiBsN97zTVTOxEL4bDik2qd0z6wJHq2QSFfhL2JVDvsInyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjoFRHYUR7%2B2yUaJKtwDuLzmVmHssCYNwPWDryjYxRPmj2vEHv8JkaEUE3rXUiurXeHR3HeSGZ43hUeWf%2BMVXyNQB1r02Bm8gIu%2F6AZJdKlAbmEsRYmEUezbOPfROi6GosrOKawzgyd0AgzVh6aVakiS49kx5Rm9hbJdeDjeH6amhd7695TxkYY%2F7J09MQlbBI2oYmSY9HBV3qbsxK%2BkOmd6VvtzAPeCheTmsp6MI1d1ibz124fJtFjsFqR4cIUjNWFXM7QAOMCXqsZjOpZzHP2SEPZSJ7j%2BHfHec0XisvZqRvUTU6KY5nrGb37YWUxizW7WMJRVQnS9RPopSKMLMzMj45XJVh14dzNPQ70a9gxDy%2Bb%2B90CYUzQp8UVtAi0YqaIbIHEiuZVCLywA%2FP4zho0pAH7IRJqGqX5IBR3EgzsdWOK8ZFUCokvr2Vyl3xaJPQRc2Q%2BTPoNUyo0RzyOH24CaApCa%2FBN7ZIRqBhOVdUlFCnO8ftJ8KV7vJuu5clF8hnLMFRj3BLFatnBL3mjc1Cz3OPhU0V4pTgx2sgy71SpvE5HkBzu8buzE%2BhfqQ7OjU6N%2F8YoEOz9iXdpD3w8Gu3iVh9P%2FVc1FDq%2FKyM6CGYE9sgg73upqVnzxlg3wOMe2aYdbsghKuTQccjowt9G0zAY6pgEZZUU5lsNU7rmUOH4tm6NLlMOa8tAovI4y4KUIBBXU9ooMIsRUl%2Fj6KyH2hEdFI4jQvKhlFqx8rQR49oBoCEbK7TNvZjcQ7b7XmtTmxqU0N3%2FyvPgRdgaSYszD3Zus%2BQbIjqnqimfmC3WWfEaR7vjsL6xKRbCinw%2BOaXxXAvZx2%2FULJdUip4DFrbgH2PiAUhSVBYzYlCpqKYLRR79uC67XS9l3SVxc&X-Amz-Signature=f3ac7fba0625bd4590a76732823cbbb5f4f5d352a9558156c9ec3b556d120b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
