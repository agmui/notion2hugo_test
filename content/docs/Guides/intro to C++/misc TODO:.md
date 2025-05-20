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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSH5543Y%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnwcmisWHg759q30vmSshSV%2FmE9PQqIdf%2BqVhz2ixvAIhAKQrBVG%2BzCxCuDmPDhBfVe3qzX3PIDb%2BG8DsMrKxAO2LKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbLirbVqwgNz5Hik4q3AOL5lLQuSe0wlSL%2Bm%2ByBVYcddConxizVCow8Qtv144cXAXoCWXGl5fsiLXpblRJ%2FH6SFVZI%2FfQ2JFiOhQhmgCW%2F3X3HuW1B3tGV1ln%2BMpg4B%2Bkyt%2FFIjdpEQHtxg0yayu5lphEIMNZL2%2Fja8H978zmzCutAcyRsf%2FXMMdL2AFyqo1cYIU%2Bm96%2FtlDs6qLAoKKgD7Wo3TkfDH1mk%2F40ZJuNfPlLxGDW%2FTwws5urwqmwV0m%2BaPlUrnIqfR0UfpDmFIEsuvTdzLbooSuRurRc6QlZbSCR4ZyGu%2FS%2FrkJ%2BdXO2eYjcrawRpLHr%2FugsHLXk96nRl4qYDoTlfsIQ6%2BvtWqEFuxS5Xa2Rzz3kbr2RRruX6sWaYZnaF8AT%2BHKxOq8NwmBteeXJRnKQN0Or2is3QTOiIHXyE3WW2trLQNvcGnq%2FFuuTByKcEK2ghoKcyLB8yr2KAVXLJacTArIyQYRBtIA6BUbeBU9FHHuEq0RE2R%2BESMpfnch5Cbemc8TfWRm%2BZPsESF0jgbrorZrwyNW0ypopVeWKSoaK%2FaJQLjzgQUUiRCw3pOf4q1rNVB41RH0xB3Mfg5p3TnXaWyAxTseJMqH6ZnGnjZS9qUSyqlpwmWDqE%2FEiGxvObMU14qXOTfjDKrbHBBjqkAUJ3WYDnxsDnQxDC7Vkyt%2F0907jMSkB0vmwhwzQO%2BxQ%2FvfYi9vg81sXCase06nmb8a5n826TNVVDBvUF%2Fb5NEdYS3XVeF9Xo%2Fg4nVGUxBiq8m0XTp8JwJKsfyiMuy8cS09R%2FgNZdDLoJoaHDxF3yBFfS7H2f8Ta34zlAXnMLdK2SimxA0Cnu4DvewfVspB%2BljeBB7hgiponpEj19BAUtzzTIkaEy&X-Amz-Signature=c3b6ece799fee27df441b70ba4d6e43ea3cbad1d8bcba7a55b2fdfe5c10fe4be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSH5543Y%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXnwcmisWHg759q30vmSshSV%2FmE9PQqIdf%2BqVhz2ixvAIhAKQrBVG%2BzCxCuDmPDhBfVe3qzX3PIDb%2BG8DsMrKxAO2LKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbLirbVqwgNz5Hik4q3AOL5lLQuSe0wlSL%2Bm%2ByBVYcddConxizVCow8Qtv144cXAXoCWXGl5fsiLXpblRJ%2FH6SFVZI%2FfQ2JFiOhQhmgCW%2F3X3HuW1B3tGV1ln%2BMpg4B%2Bkyt%2FFIjdpEQHtxg0yayu5lphEIMNZL2%2Fja8H978zmzCutAcyRsf%2FXMMdL2AFyqo1cYIU%2Bm96%2FtlDs6qLAoKKgD7Wo3TkfDH1mk%2F40ZJuNfPlLxGDW%2FTwws5urwqmwV0m%2BaPlUrnIqfR0UfpDmFIEsuvTdzLbooSuRurRc6QlZbSCR4ZyGu%2FS%2FrkJ%2BdXO2eYjcrawRpLHr%2FugsHLXk96nRl4qYDoTlfsIQ6%2BvtWqEFuxS5Xa2Rzz3kbr2RRruX6sWaYZnaF8AT%2BHKxOq8NwmBteeXJRnKQN0Or2is3QTOiIHXyE3WW2trLQNvcGnq%2FFuuTByKcEK2ghoKcyLB8yr2KAVXLJacTArIyQYRBtIA6BUbeBU9FHHuEq0RE2R%2BESMpfnch5Cbemc8TfWRm%2BZPsESF0jgbrorZrwyNW0ypopVeWKSoaK%2FaJQLjzgQUUiRCw3pOf4q1rNVB41RH0xB3Mfg5p3TnXaWyAxTseJMqH6ZnGnjZS9qUSyqlpwmWDqE%2FEiGxvObMU14qXOTfjDKrbHBBjqkAUJ3WYDnxsDnQxDC7Vkyt%2F0907jMSkB0vmwhwzQO%2BxQ%2FvfYi9vg81sXCase06nmb8a5n826TNVVDBvUF%2Fb5NEdYS3XVeF9Xo%2Fg4nVGUxBiq8m0XTp8JwJKsfyiMuy8cS09R%2FgNZdDLoJoaHDxF3yBFfS7H2f8Ta34zlAXnMLdK2SimxA0Cnu4DvewfVspB%2BljeBB7hgiponpEj19BAUtzzTIkaEy&X-Amz-Signature=938262711dd5cddfb4574d16e7b74287e945dcf037c8b5f05415e18449ef8708&X-Amz-SignedHeaders=host&x-id=GetObject)

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
