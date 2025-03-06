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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMCNEKA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtg49g4XXSkpXDjpEL6rifywx5q0LUMb9T%2FeC6hGWGYAiEAgoXIJT9cYR8HYEnf%2F%2Ba2EeyXgdC%2B3GAtTLhz7Yn0400q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH6C89kz3PuXyrlGoCrcA0gvj3HCZy%2F2ohofd%2FGgiBPFLgphXQ%2BDHYOywNd2EDyh%2BL1erfC8WuwAyQHwAyE%2BchfkvNivaUnb1da0kwmf6dN0%2BDFmUiZkFFcZNenkj1PJBnqg4xbUexhxyfaNSKqJWjilJJrxFJwT4p6zi1YWYXs7otH2Gi0lJClxKdN6AgV1BZ11KiQ6L7N%2FTwtcLb0GKB%2F2MRJZ5M3Ok2L1SgpNnq2okCPd8dYTtKlT6ipElBkE4xYxqcpgJDhyOQuD1rOwphttMhbnl9PTgEYcAgWrnzFgex85aYQd8TG3EDeCoh3xRJYOacGvmMWuEFFhiuHVm95EnG5ehrLoKjg%2FMzRvFVW21NleZLz1phe6s0id8b%2F7oW8YoQ0EMcAa2fCQ9os2blLXMcV%2Ft2wEPWWKNeHF62lMinTfhak7Jx4LeNZgqyNRyXquHClSR1FV%2Fq9DYarv4ND3FM29lOtDExoLI8%2FN8QK%2BrkCvA%2FJs56xxXPomgT2FT4dwnMiv%2BRB4h9yXY5%2B%2FPK56qSWsTd5ER3OAQ4eRTlmHy%2FvXoS1nloKxrLWbHJbUuZuJ2u1fVHU5H7nt0NMm9HlnABIrO7Oe775rccI5QdkqjVO%2BLBFtIPmujPk91JlUp62jMX4iK7iepBGyMI%2Bup74GOqUB3N7Gw%2B3HaAU7Z3JOBEfXOVuCGEjK2GEcjGCjukZdh9ZtXEymdiaEFiPDHEnQSnmU%2FbmtQ7r3Tv2vXURVqIdl2oiBaNarnHNqt9tuoQG6NlfjgwjTVqiQUwcXufSnIBAaNYHWVrtSGjH3VulRa2FRa8BN6Vy5yhRBNNt%2BK%2F77TlElwl4FtMDi6GUaG89CDAnJi8vZp39S%2BOBcAENQKvHQyl9B%2FIBJ&X-Amz-Signature=8bb0fc96790b7a0f1985533ae3b352fea75311ae676bb6d9998e81cd6d8c97ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMCNEKA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtg49g4XXSkpXDjpEL6rifywx5q0LUMb9T%2FeC6hGWGYAiEAgoXIJT9cYR8HYEnf%2F%2Ba2EeyXgdC%2B3GAtTLhz7Yn0400q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH6C89kz3PuXyrlGoCrcA0gvj3HCZy%2F2ohofd%2FGgiBPFLgphXQ%2BDHYOywNd2EDyh%2BL1erfC8WuwAyQHwAyE%2BchfkvNivaUnb1da0kwmf6dN0%2BDFmUiZkFFcZNenkj1PJBnqg4xbUexhxyfaNSKqJWjilJJrxFJwT4p6zi1YWYXs7otH2Gi0lJClxKdN6AgV1BZ11KiQ6L7N%2FTwtcLb0GKB%2F2MRJZ5M3Ok2L1SgpNnq2okCPd8dYTtKlT6ipElBkE4xYxqcpgJDhyOQuD1rOwphttMhbnl9PTgEYcAgWrnzFgex85aYQd8TG3EDeCoh3xRJYOacGvmMWuEFFhiuHVm95EnG5ehrLoKjg%2FMzRvFVW21NleZLz1phe6s0id8b%2F7oW8YoQ0EMcAa2fCQ9os2blLXMcV%2Ft2wEPWWKNeHF62lMinTfhak7Jx4LeNZgqyNRyXquHClSR1FV%2Fq9DYarv4ND3FM29lOtDExoLI8%2FN8QK%2BrkCvA%2FJs56xxXPomgT2FT4dwnMiv%2BRB4h9yXY5%2B%2FPK56qSWsTd5ER3OAQ4eRTlmHy%2FvXoS1nloKxrLWbHJbUuZuJ2u1fVHU5H7nt0NMm9HlnABIrO7Oe775rccI5QdkqjVO%2BLBFtIPmujPk91JlUp62jMX4iK7iepBGyMI%2Bup74GOqUB3N7Gw%2B3HaAU7Z3JOBEfXOVuCGEjK2GEcjGCjukZdh9ZtXEymdiaEFiPDHEnQSnmU%2FbmtQ7r3Tv2vXURVqIdl2oiBaNarnHNqt9tuoQG6NlfjgwjTVqiQUwcXufSnIBAaNYHWVrtSGjH3VulRa2FRa8BN6Vy5yhRBNNt%2BK%2F77TlElwl4FtMDi6GUaG89CDAnJi8vZp39S%2BOBcAENQKvHQyl9B%2FIBJ&X-Amz-Signature=a5ca68d0ffb9fd7b516925ea51d4317eb537fed574de0ccf8810fb7463cbd73d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
