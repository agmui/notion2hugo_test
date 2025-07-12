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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS7DLGI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfGfRzKALOO5mJzza8Q%2FmpvMFnOrb0P8neeY59%2BnG%2BAiBO1agSfQHpxRSaSyNcEzvRH%2B7kxPZkWIhEAh5ljBhg1CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpvwYO8JPyXX05SjKtwDclFZtO8zojp67tbuGLdof%2FZ5pN8ZbxxXYVXWWOFKTlTeDHP4kKj%2BZ9Cq%2FfooA0Dm3qYTEfNyAZj%2FlLuhRKspcQuDW9%2FSLIa7CrT%2Fwe%2FchZo1viXZ%2BK%2Fjl010rlMUCk%2Fm%2Bobz1qsnf%2BSibPTkWHJlwca97Qi8dLok8nIYjTuSP%2FZ7jRa7aQ3g0KuuABvgzFfAYfvK%2FK2IoHDFi1V3OnE5e%2Bp%2FGMbiXwiHmMvfTr03KnVZT2USy1srpH1rq9jFqpPWPLG6Qcyg7DLSvAhv7DWwY182FVW3lNTW2qPtRJFNYfbvI4Q2P0nkeY0jI4xZSm3V6w4v9Ldcs3TiPhzTj0njtcYXE6UWR0H1h9Bb8fUPvho%2F3UPIy9pA%2FK%2FTuyyaI5Vm%2B5eF%2BUSLamqSKl2C0FjjY0dWEyGrkxqwwsOqf18n8RbmEK4NvL1TB0Te7naj8jzC9YPnwSIZIvnEJ%2F9CLNoJJn2AdTTKIkjDMxTD5dtvggq%2FUD3R99wgGWJYJUpH63YZ87DoOoAg8hVpleYHHeNYSVso7jsYZQRiYZhsGPQlwKtotnACriimwwcjHMrWGSmW9Wzd563yxyriFBXYKVGNM1EDcrWkBeeCjZI6XF7oG5DDm7EwzP%2FQhS9brrMw28vIwwY6pgEOPo3aYFKpYMUhm9bChIYKZLpk%2FqyFECuazKSjGV6nbAfWa5c58zN%2FvT7Ko7gI9O2e1Gj6kxlQ7w3%2FYIwIoRUtAqj1bKwEHKPGaoTmcDRZpzdkzUNU7yXPH%2Fb0P0nKjMH7tGr6UqNduc7Lnd7fp%2F52bciwnjLvIcvhiyqxS9vxTTMbhtYQO%2B22tI%2BChuDW6IiLjUC%2BpT7iRsAHLg%2BfM4zu%2BAMs8M41&X-Amz-Signature=73892bbc90026925c413d3c3bc25636a9303a1f17dd6f309b23973d8ae07110b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS7DLGI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfGfRzKALOO5mJzza8Q%2FmpvMFnOrb0P8neeY59%2BnG%2BAiBO1agSfQHpxRSaSyNcEzvRH%2B7kxPZkWIhEAh5ljBhg1CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpvwYO8JPyXX05SjKtwDclFZtO8zojp67tbuGLdof%2FZ5pN8ZbxxXYVXWWOFKTlTeDHP4kKj%2BZ9Cq%2FfooA0Dm3qYTEfNyAZj%2FlLuhRKspcQuDW9%2FSLIa7CrT%2Fwe%2FchZo1viXZ%2BK%2Fjl010rlMUCk%2Fm%2Bobz1qsnf%2BSibPTkWHJlwca97Qi8dLok8nIYjTuSP%2FZ7jRa7aQ3g0KuuABvgzFfAYfvK%2FK2IoHDFi1V3OnE5e%2Bp%2FGMbiXwiHmMvfTr03KnVZT2USy1srpH1rq9jFqpPWPLG6Qcyg7DLSvAhv7DWwY182FVW3lNTW2qPtRJFNYfbvI4Q2P0nkeY0jI4xZSm3V6w4v9Ldcs3TiPhzTj0njtcYXE6UWR0H1h9Bb8fUPvho%2F3UPIy9pA%2FK%2FTuyyaI5Vm%2B5eF%2BUSLamqSKl2C0FjjY0dWEyGrkxqwwsOqf18n8RbmEK4NvL1TB0Te7naj8jzC9YPnwSIZIvnEJ%2F9CLNoJJn2AdTTKIkjDMxTD5dtvggq%2FUD3R99wgGWJYJUpH63YZ87DoOoAg8hVpleYHHeNYSVso7jsYZQRiYZhsGPQlwKtotnACriimwwcjHMrWGSmW9Wzd563yxyriFBXYKVGNM1EDcrWkBeeCjZI6XF7oG5DDm7EwzP%2FQhS9brrMw28vIwwY6pgEOPo3aYFKpYMUhm9bChIYKZLpk%2FqyFECuazKSjGV6nbAfWa5c58zN%2FvT7Ko7gI9O2e1Gj6kxlQ7w3%2FYIwIoRUtAqj1bKwEHKPGaoTmcDRZpzdkzUNU7yXPH%2Fb0P0nKjMH7tGr6UqNduc7Lnd7fp%2F52bciwnjLvIcvhiyqxS9vxTTMbhtYQO%2B22tI%2BChuDW6IiLjUC%2BpT7iRsAHLg%2BfM4zu%2BAMs8M41&X-Amz-Signature=86e86d02fc6096411f2db1a813d64a92a2b141dd8752ad033db9b5289bc1abae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
