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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLRDI4U%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQA38HfXANy8jsB1n9bLd4qVmNLEC6NfjngX2ggiry1AiEAmBndqzNqRELTNDj2OVndru%2BwAYTCQwAHP%2FTVvPk97wUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDHyajH8nSwnnCvOoCrcAxg%2Bu8nJEEBus%2BIM67yippwzbYx1WYWI7hPdFDNQ6v3H%2FjYmSwQqFKnAnfjd2Z1hBnHWfYuYkU6X1vi3g6Q0ZAba%2F5FNnXuHNJklUoVgosBU4oP7xXrva%2BTKpqDYhS1C3dQXEXyscYIxv78MoOIWHlsimVFA%2BvhGAdlkTjm5DeQV1d%2FAN%2Bga34SrvKP2G8T1oX92BEK4fvnY6LJ9X6Hm28xB1FyrJLiLUrd5Q%2FgNCLIZrsd7z65iCBPG7VhYf%2BSWG64qdesMfNeGi7dSxueRFN2GdENzjcgP%2FWbAbZi9sP5UEH5pVHwXNpet8jb0hJuPRxU59%2F6CxZvFiNGPvE%2Fr1zdCRvOYg6FWVr39NQHpycdC1nIUoSKFDXFzN6slRsH9Lpdwc3yvftHL1KLqeqos2xb7Bd5U9428ltodD0bHA7815GFw%2BvqZrBE7GAyHju0jU9kpKvk%2FplxD7ccDNe2e0v9c8Ms5kB1H07lM4oLuLRWonyxN1vhfrfND4hKR72LL%2BJ1lZqQ%2FhozB6EfBjvY70enbTOXyxW6ewSrSNggO7UOeoFpsE%2BvAYWZh%2BTNdgPKviBLhJ7phjpWgLCz2E8tOoLRvOYXSpbDESg%2F60Nr3L06v3tZIww8XOSFmbYG3MNXT0r8GOqUBDyPg6nhRbcVfFqucbqc0AOIxNrVVW1hODopQ2zZZOD8%2BWRDnzy%2FKz2z8dK8JXbDMCji3XsT8DkTlaImnfkJcbJtmtcFf8rWbtBC%2FJiSnsehXpQAx%2F%2Fd3qntbaK9lJ1nTX%2BTqI6K6ws9%2BKAnq3RPJSKlwHZBlK6%2FhUudNXdgCTQiOSGckPhMvTF4JtQDBbYLhJN%2BIcm8dwbvrxxEt0xrA%2BE4ZjI7Y&X-Amz-Signature=af328708745a0e0e72ddaa2a73fb651a810f7ead47dc86d9e11b1f0c44003690&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLRDI4U%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQA38HfXANy8jsB1n9bLd4qVmNLEC6NfjngX2ggiry1AiEAmBndqzNqRELTNDj2OVndru%2BwAYTCQwAHP%2FTVvPk97wUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDHyajH8nSwnnCvOoCrcAxg%2Bu8nJEEBus%2BIM67yippwzbYx1WYWI7hPdFDNQ6v3H%2FjYmSwQqFKnAnfjd2Z1hBnHWfYuYkU6X1vi3g6Q0ZAba%2F5FNnXuHNJklUoVgosBU4oP7xXrva%2BTKpqDYhS1C3dQXEXyscYIxv78MoOIWHlsimVFA%2BvhGAdlkTjm5DeQV1d%2FAN%2Bga34SrvKP2G8T1oX92BEK4fvnY6LJ9X6Hm28xB1FyrJLiLUrd5Q%2FgNCLIZrsd7z65iCBPG7VhYf%2BSWG64qdesMfNeGi7dSxueRFN2GdENzjcgP%2FWbAbZi9sP5UEH5pVHwXNpet8jb0hJuPRxU59%2F6CxZvFiNGPvE%2Fr1zdCRvOYg6FWVr39NQHpycdC1nIUoSKFDXFzN6slRsH9Lpdwc3yvftHL1KLqeqos2xb7Bd5U9428ltodD0bHA7815GFw%2BvqZrBE7GAyHju0jU9kpKvk%2FplxD7ccDNe2e0v9c8Ms5kB1H07lM4oLuLRWonyxN1vhfrfND4hKR72LL%2BJ1lZqQ%2FhozB6EfBjvY70enbTOXyxW6ewSrSNggO7UOeoFpsE%2BvAYWZh%2BTNdgPKviBLhJ7phjpWgLCz2E8tOoLRvOYXSpbDESg%2F60Nr3L06v3tZIww8XOSFmbYG3MNXT0r8GOqUBDyPg6nhRbcVfFqucbqc0AOIxNrVVW1hODopQ2zZZOD8%2BWRDnzy%2FKz2z8dK8JXbDMCji3XsT8DkTlaImnfkJcbJtmtcFf8rWbtBC%2FJiSnsehXpQAx%2F%2Fd3qntbaK9lJ1nTX%2BTqI6K6ws9%2BKAnq3RPJSKlwHZBlK6%2FhUudNXdgCTQiOSGckPhMvTF4JtQDBbYLhJN%2BIcm8dwbvrxxEt0xrA%2BE4ZjI7Y&X-Amz-Signature=79058966b686e6f32262eceba7dab5038acd1512f3dd0b6b7dedc781425f2449&X-Amz-SignedHeaders=host&x-id=GetObject)

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
