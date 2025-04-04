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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHJI2IE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGdfLDKr8S4xbLM1WS8bF8pWurdqUieaEUtFW8%2FMekDAiBrlsywOV0u2mN1R7tsA5L6pBRKYr0sEgBr3DHiMVvQcSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEC2uXNrOUhevZLzKtwD0WilUVFpfbvkft63DFky%2FYSa7QqDbnGTd2QCUD5qI6cBk1piz6uMVSHi%2F25fQkL8qOURf4TvHO%2Blfbv44sm7m6kw4d6dGbxVlqda98Nn1d%2BxXoS8WokFsdI6bCpya2%2BhYxFooOcJS4E1rpIuIpTq%2BJTdqvB68RayMtxU%2FxsLqmivncgbtt5Ti6jtjP7euWzJ6tZJ7NyM3X%2BKPAeeH5gU3wdWuacX3gbBWIAwSL5KcdYdGhY%2B43KesLz05v8ZnYv13H6dieir45IXdBUw1zAsnuBX0CbytyjduFbFaXO7w3qP8%2FQOqyFpZLGtptnwEOMVczmsDEhsNXypUploSjevbbFG1eILk8Oi37nDGOwG6M773FXqvOv%2BqlgODmud5bXJaPCsySEgXLk4SNyJyUKnN6kyLWDT7WRIEUiiZZnzGD25Rp8zGu2h76L00P%2BLIh5Bx9fgDbLbhP6bVyM1PUDCizf625a0mNplBysPN%2FVoajz2Ja1P0lrUiAOu1R%2FR198hYn68%2F3hlu8srPyH9DMB1h9xB1VrmIBFdJVQQTPkDmpwJkG70GAxNb4frfRdfG97P3enxNDRLz%2BleLvYIdmb%2B8b%2Bk7FCU%2Fumtu6MDZEwP1lrzPAFA4MWFB4iX4AYwlMW9vwY6pgERe43ZwhnPXjIttPh9Dl1qduG2hC%2FERTBnkMaLcSmh0c0yDCl3pnrY3MvkmtXYJu6tEAOBmqJSPxadCMM97d6WDElp%2B8751C93rOnUfw8o5c3pnL5ND8xr4qKOIxHK0xhEwi9ZmX%2BKFdhbmC0LDMYd%2FqBJhN3ymzo9SbVnXO%2BdodAF93cvYqPN3Sb3ateQNE0TDx5J9fdoRpRMVPQ5NT7TQwxwht%2Ba&X-Amz-Signature=959e3ccbc78502eddde46563b0d31e0b733f52545c8f2f53488fe506edf71375&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHJI2IE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGdfLDKr8S4xbLM1WS8bF8pWurdqUieaEUtFW8%2FMekDAiBrlsywOV0u2mN1R7tsA5L6pBRKYr0sEgBr3DHiMVvQcSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEC2uXNrOUhevZLzKtwD0WilUVFpfbvkft63DFky%2FYSa7QqDbnGTd2QCUD5qI6cBk1piz6uMVSHi%2F25fQkL8qOURf4TvHO%2Blfbv44sm7m6kw4d6dGbxVlqda98Nn1d%2BxXoS8WokFsdI6bCpya2%2BhYxFooOcJS4E1rpIuIpTq%2BJTdqvB68RayMtxU%2FxsLqmivncgbtt5Ti6jtjP7euWzJ6tZJ7NyM3X%2BKPAeeH5gU3wdWuacX3gbBWIAwSL5KcdYdGhY%2B43KesLz05v8ZnYv13H6dieir45IXdBUw1zAsnuBX0CbytyjduFbFaXO7w3qP8%2FQOqyFpZLGtptnwEOMVczmsDEhsNXypUploSjevbbFG1eILk8Oi37nDGOwG6M773FXqvOv%2BqlgODmud5bXJaPCsySEgXLk4SNyJyUKnN6kyLWDT7WRIEUiiZZnzGD25Rp8zGu2h76L00P%2BLIh5Bx9fgDbLbhP6bVyM1PUDCizf625a0mNplBysPN%2FVoajz2Ja1P0lrUiAOu1R%2FR198hYn68%2F3hlu8srPyH9DMB1h9xB1VrmIBFdJVQQTPkDmpwJkG70GAxNb4frfRdfG97P3enxNDRLz%2BleLvYIdmb%2B8b%2Bk7FCU%2Fumtu6MDZEwP1lrzPAFA4MWFB4iX4AYwlMW9vwY6pgERe43ZwhnPXjIttPh9Dl1qduG2hC%2FERTBnkMaLcSmh0c0yDCl3pnrY3MvkmtXYJu6tEAOBmqJSPxadCMM97d6WDElp%2B8751C93rOnUfw8o5c3pnL5ND8xr4qKOIxHK0xhEwi9ZmX%2BKFdhbmC0LDMYd%2FqBJhN3ymzo9SbVnXO%2BdodAF93cvYqPN3Sb3ateQNE0TDx5J9fdoRpRMVPQ5NT7TQwxwht%2Ba&X-Amz-Signature=345cc81f0f1d5f6d2337ff689b7f50a81c0f01f9e17e97165fbd2091e35e0f47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
