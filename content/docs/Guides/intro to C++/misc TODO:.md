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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=9749c2a943dfb018fe14ea9ee59adace58b6f998d0865465c0a90fcda1c61166&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=2b3b530e62769db4a459103c1e93704a0bed5de4c90b81926d106fcad284a64b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
