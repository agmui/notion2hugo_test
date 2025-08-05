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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3EO72Z%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCTDvJl5Bl65i2IjkMQHTq9MnsicCYbYe3NMhbOiTWMNwIgG%2F6ZIrCqcR07XmV6Im036JnwOFdkBiElrUryRepozYkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPQZ7347qcJq6oQ%2BNCrcA4HsiWR%2BlBNUoxGbz1%2FI%2BtJx5cQc5Gy%2FiIjSfegT50Kz%2ByZZUj%2FcFIlGmZaw%2Bp3conP2UV41cfd22gmG9yyDPopyrG43Rq5x9RlSEjmhwertgSH8okd%2Fnry9DhBBRMrv1IguwAx4QX31CsiUlmhwpfs%2Bm9%2FBHzROiiBAuUcvN3Mv8lZXCHPRMPYu2O7jA%2BmEoziwVnRi35oPj0gISyCN%2FbhbJJtH1ueHijVMMZ%2BLtR21w1YNW%2BkEifHp5KUNJS3eM1SHb1hAfCdd2yLkW71j%2FEsdH%2BkxuqNknGaATIdp5pjSINd%2FB0yqjRAxofoLqxBi6lEmcfgi6QREgFleOFtvVGO%2F12btwT5sbFSJ94Zns7LZkLntGMgnpt6ZFxdHA2lnEMbXhzV43MktSUmY1yeNvRX1MT3OXQULCZRvqK0qZLydQdtJkFu%2BsqrHIq5QIbe%2FGqZSFHghjeR3wDaQ7A5OvV38XYu%2Bnt%2FiHGKBLULVZ1gbtsjrY6uUhBy%2BMCkTfvS5SCKN%2BYmZle6%2BYPun9Tbmn8fYscfu8IZhN4q49Qg31oCn9SA%2B9IwOXBlKfl80GnvVNpi7xs6l0U7edVWzOFb4Glw%2B0mfzvDVI249icGBMOeP96JkzP1bkX1wrtPAKMOmzxsQGOqUBu3g%2Bxkgglso7qNG8ChKK7xJhKaqCkEV0aFeDRVmFi8aUCdDwtjKYX%2BVG1P1u07mOvkXI45ycYjgMA1zA%2FuVrjI6eaZj5WCUXK9HVbo78WYNaqX9OIlumVXu5XM%2FiTWyOjiHhhxO%2BFXwejQ0TJdtC%2BcVn%2FTYtiG5R5pYzqkcRxyCca7NxJzva6jbrlM7rnKS9ZoCdLWqFZB0dDXzHd8n5oqIfgZMG&X-Amz-Signature=bcbc6fda8ce872a924f5e4577419c675930441fa3bdce00d2bb5e67640fbb324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3EO72Z%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCTDvJl5Bl65i2IjkMQHTq9MnsicCYbYe3NMhbOiTWMNwIgG%2F6ZIrCqcR07XmV6Im036JnwOFdkBiElrUryRepozYkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPQZ7347qcJq6oQ%2BNCrcA4HsiWR%2BlBNUoxGbz1%2FI%2BtJx5cQc5Gy%2FiIjSfegT50Kz%2ByZZUj%2FcFIlGmZaw%2Bp3conP2UV41cfd22gmG9yyDPopyrG43Rq5x9RlSEjmhwertgSH8okd%2Fnry9DhBBRMrv1IguwAx4QX31CsiUlmhwpfs%2Bm9%2FBHzROiiBAuUcvN3Mv8lZXCHPRMPYu2O7jA%2BmEoziwVnRi35oPj0gISyCN%2FbhbJJtH1ueHijVMMZ%2BLtR21w1YNW%2BkEifHp5KUNJS3eM1SHb1hAfCdd2yLkW71j%2FEsdH%2BkxuqNknGaATIdp5pjSINd%2FB0yqjRAxofoLqxBi6lEmcfgi6QREgFleOFtvVGO%2F12btwT5sbFSJ94Zns7LZkLntGMgnpt6ZFxdHA2lnEMbXhzV43MktSUmY1yeNvRX1MT3OXQULCZRvqK0qZLydQdtJkFu%2BsqrHIq5QIbe%2FGqZSFHghjeR3wDaQ7A5OvV38XYu%2Bnt%2FiHGKBLULVZ1gbtsjrY6uUhBy%2BMCkTfvS5SCKN%2BYmZle6%2BYPun9Tbmn8fYscfu8IZhN4q49Qg31oCn9SA%2B9IwOXBlKfl80GnvVNpi7xs6l0U7edVWzOFb4Glw%2B0mfzvDVI249icGBMOeP96JkzP1bkX1wrtPAKMOmzxsQGOqUBu3g%2Bxkgglso7qNG8ChKK7xJhKaqCkEV0aFeDRVmFi8aUCdDwtjKYX%2BVG1P1u07mOvkXI45ycYjgMA1zA%2FuVrjI6eaZj5WCUXK9HVbo78WYNaqX9OIlumVXu5XM%2FiTWyOjiHhhxO%2BFXwejQ0TJdtC%2BcVn%2FTYtiG5R5pYzqkcRxyCca7NxJzva6jbrlM7rnKS9ZoCdLWqFZB0dDXzHd8n5oqIfgZMG&X-Amz-Signature=53f37f94cff954fbd9dcb6739700e83ece05e84ff6d705e3be4bcb523116ae0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
