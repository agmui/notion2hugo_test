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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XCTYXP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGeNJdOnwDWrnydNFqjPoyrpM5PyJQczhHZM4vLUZGCxAiAA9Ru6jBqVu66CHQxTGeBYHs3sccELquaGCgXsEYVp6yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMdrTpKQ%2B7qYLwjnM9KtwDIjJZVX8a7JftxUCcT2bfR2SHXgVjYzwn5GRLW7wDugFErEmKbPt%2FMTJGWw6GTdUaNYse7bux1DFGOONHP4eA%2BQ6a3xNGyn9ixWaLxJrQLDq1%2BlJ%2BpEVtKhFV2nghnTUF7NCnxwWWVJiEhEwrYJJscbGZ7o7mX%2Bu9OGpJdDO5SU3K5aEAfT5DJaZplY%2BUnbD2pUzaio83%2BpEq8q3M0yN9sW7dcD4cnIOYQAH%2BthFKVmtCjeW7xKsLLD5sMg107gf1b54tEg8QsDphhGdxMUiuRXB944L9l5C0FtJPBbAyXL%2FjGc5uiBsH5iaePLgOlYJc%2FoYx9m%2FnnYumi12LrIVx1IFX4XBczLWDvRQxCxvPM0nVdtJ9hUnsDt9x9oFBzg2i5JSXp34qrS71XEu7S7Vm2Gs35YLISeyEvexWVx1H527FL2RBwX%2Fdxk4AdoXjMs00dQc1JEHEmFKbanPeNiwqu8D2OohXQ4dYwFgv%2FhXwutui2E7nCcw8gtnnqede8oSh8IExo9nXGx%2BKfheXzYAknAyTqEoVQ7BoYmQLKsUftoSwg1LJrtSrxPy4QTtiFXF%2FdiUdr7UNyKTfyVgbIIx5%2BbEdlCMOsJsj7lN1ig38LJCRqsalntfdFpXXEIUwz%2Fj4wgY6pgHVScCXLz06nbaOINaEfIzuU7umx3vm%2Ff%2FgwRESloINiqjQlxX5f9CoUPPEq%2FF2sLTUQp7SMaf%2F3ywxrL603A2ycdanBzmLwndM6ny42RDVtnFv3TP4oZOKVnAQ%2By5U0tc%2BlTlyF77uzom8o5qMiIHyE%2F12h2kDdIDhGwzr1r%2Bb2Lb58UeXTXtfasx8Y7EOuYwA%2BOpICGu%2B8RDsgOA6HA8Xkc7Q28Dt&X-Amz-Signature=c2eae7f4f548204edd15cc46581b83a4c1373b939167fc6f7c2c801b913810da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XCTYXP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGeNJdOnwDWrnydNFqjPoyrpM5PyJQczhHZM4vLUZGCxAiAA9Ru6jBqVu66CHQxTGeBYHs3sccELquaGCgXsEYVp6yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMdrTpKQ%2B7qYLwjnM9KtwDIjJZVX8a7JftxUCcT2bfR2SHXgVjYzwn5GRLW7wDugFErEmKbPt%2FMTJGWw6GTdUaNYse7bux1DFGOONHP4eA%2BQ6a3xNGyn9ixWaLxJrQLDq1%2BlJ%2BpEVtKhFV2nghnTUF7NCnxwWWVJiEhEwrYJJscbGZ7o7mX%2Bu9OGpJdDO5SU3K5aEAfT5DJaZplY%2BUnbD2pUzaio83%2BpEq8q3M0yN9sW7dcD4cnIOYQAH%2BthFKVmtCjeW7xKsLLD5sMg107gf1b54tEg8QsDphhGdxMUiuRXB944L9l5C0FtJPBbAyXL%2FjGc5uiBsH5iaePLgOlYJc%2FoYx9m%2FnnYumi12LrIVx1IFX4XBczLWDvRQxCxvPM0nVdtJ9hUnsDt9x9oFBzg2i5JSXp34qrS71XEu7S7Vm2Gs35YLISeyEvexWVx1H527FL2RBwX%2Fdxk4AdoXjMs00dQc1JEHEmFKbanPeNiwqu8D2OohXQ4dYwFgv%2FhXwutui2E7nCcw8gtnnqede8oSh8IExo9nXGx%2BKfheXzYAknAyTqEoVQ7BoYmQLKsUftoSwg1LJrtSrxPy4QTtiFXF%2FdiUdr7UNyKTfyVgbIIx5%2BbEdlCMOsJsj7lN1ig38LJCRqsalntfdFpXXEIUwz%2Fj4wgY6pgHVScCXLz06nbaOINaEfIzuU7umx3vm%2Ff%2FgwRESloINiqjQlxX5f9CoUPPEq%2FF2sLTUQp7SMaf%2F3ywxrL603A2ycdanBzmLwndM6ny42RDVtnFv3TP4oZOKVnAQ%2By5U0tc%2BlTlyF77uzom8o5qMiIHyE%2F12h2kDdIDhGwzr1r%2Bb2Lb58UeXTXtfasx8Y7EOuYwA%2BOpICGu%2B8RDsgOA6HA8Xkc7Q28Dt&X-Amz-Signature=9080712a73ad3ef03a20d51c9a425442f1b5b3969b84a0c0b5657452f4838234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
