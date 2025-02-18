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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427AAQLO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBn2Nx5CyooOCp%2B36rDiLVzC%2Bop87X6%2ByDGh5XwofGC9AiBAtDoXQfVMeEYWKttt5w9prdiDjT65xocOgujeywvNLiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2Fjj5seXuKtlFkYKtwD%2BAcQgu20kkgE7UE8ZYJZhH6UOpEy3zhQdH%2BLoPiksvFWNNdsGDFGz7tzGJgnMPa%2FZb1zjb878Dsy5xWtHI3WyW0MIt%2F470eWBELdk4FbpYQZQJcZgtGvqJrhcDkRafqTCWguSj3AdvvkAn0KEpfQDvbZ%2BJV8kEtxRKW0qU%2BflpTb4rRJhdz8tdv%2FQSva2bpN%2FFr7jcEaugOsD%2BTvIa%2Bo5KqGyaE5EhFY2hS2B4by2gEaS0ZwDmYYe4p7BLDPo4l510ffQj60rDgjPPrBgLWOpV%2BVAqUAXlmNyKvAjTbJ5fVhLs8KdYVu%2FFw6hSMZ4%2BPI55wZHM%2B1sWOK7b%2F%2BB0tw5qrzaY6vIjwit31cEUPGev5u0Mc1qpzXWSJh4MvQxY%2F%2Fzjc%2FSzW%2BvG1wRx2KLnYuL%2FJdyJCmO38a272ExJTUQHQJVzQC%2FY9ULXS%2Bbf%2BHKhno0B9l00zvGpCLsvr8EeSz5284owFksKQnAFBv24zEhz4JyviX9ndw6Gl9hNsp0%2BXvg0SYaKpfN%2FggBWNn%2FudMvibRWjN18NGJWtAb9nkYjNzcoaKaZxqJ8moNbH7bbhg3xP3bzMW8v2C4Z6mm7lPYAng8Zl9kJCJgORE6qeJ6DpniFuwCdp3tZ2ZUXnkwpsXPvQY6pgGp1vSq%2BpVzgg1P29rtxWYE4omt4PeM1jft97ShHL8erZ3R6s5W%2B4sEcCKG0LB3mGT%2BGQ%2BTYfI0o0df0QksDqakGtEGQap0tKsyrzlAvsfB246fp3B26%2BM7NRRyxH%2FsC875zotu5BTYfSHX2VE02NR0YaiQuLRndCqaXtGRnfww4Xd52a8KdfPsHgBLLrwxLZbTT5YmbUxJMcG1JaClgYJ0yW1d4nES&X-Amz-Signature=5707271f42fe81ec3798c865c308da976a103ded9e1feec11e646e19f34d774e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427AAQLO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBn2Nx5CyooOCp%2B36rDiLVzC%2Bop87X6%2ByDGh5XwofGC9AiBAtDoXQfVMeEYWKttt5w9prdiDjT65xocOgujeywvNLiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2Fjj5seXuKtlFkYKtwD%2BAcQgu20kkgE7UE8ZYJZhH6UOpEy3zhQdH%2BLoPiksvFWNNdsGDFGz7tzGJgnMPa%2FZb1zjb878Dsy5xWtHI3WyW0MIt%2F470eWBELdk4FbpYQZQJcZgtGvqJrhcDkRafqTCWguSj3AdvvkAn0KEpfQDvbZ%2BJV8kEtxRKW0qU%2BflpTb4rRJhdz8tdv%2FQSva2bpN%2FFr7jcEaugOsD%2BTvIa%2Bo5KqGyaE5EhFY2hS2B4by2gEaS0ZwDmYYe4p7BLDPo4l510ffQj60rDgjPPrBgLWOpV%2BVAqUAXlmNyKvAjTbJ5fVhLs8KdYVu%2FFw6hSMZ4%2BPI55wZHM%2B1sWOK7b%2F%2BB0tw5qrzaY6vIjwit31cEUPGev5u0Mc1qpzXWSJh4MvQxY%2F%2Fzjc%2FSzW%2BvG1wRx2KLnYuL%2FJdyJCmO38a272ExJTUQHQJVzQC%2FY9ULXS%2Bbf%2BHKhno0B9l00zvGpCLsvr8EeSz5284owFksKQnAFBv24zEhz4JyviX9ndw6Gl9hNsp0%2BXvg0SYaKpfN%2FggBWNn%2FudMvibRWjN18NGJWtAb9nkYjNzcoaKaZxqJ8moNbH7bbhg3xP3bzMW8v2C4Z6mm7lPYAng8Zl9kJCJgORE6qeJ6DpniFuwCdp3tZ2ZUXnkwpsXPvQY6pgGp1vSq%2BpVzgg1P29rtxWYE4omt4PeM1jft97ShHL8erZ3R6s5W%2B4sEcCKG0LB3mGT%2BGQ%2BTYfI0o0df0QksDqakGtEGQap0tKsyrzlAvsfB246fp3B26%2BM7NRRyxH%2FsC875zotu5BTYfSHX2VE02NR0YaiQuLRndCqaXtGRnfww4Xd52a8KdfPsHgBLLrwxLZbTT5YmbUxJMcG1JaClgYJ0yW1d4nES&X-Amz-Signature=131b0e6beac8b52968f178e92f86d2713dc0332c2c51c02eb296710ba51e8323&X-Amz-SignedHeaders=host&x-id=GetObject)

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
