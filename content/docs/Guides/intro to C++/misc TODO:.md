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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3ILFM7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCfF3s9efaWXcR0w9HeJm65NDcaIP3uSiuedokZ8Z9W1AIhAPzZTwr09FGgcqCZafMSNzz9aXm4Hxdh0jXqpQdFVwdYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhTyln4L7%2BjbVOCmwq3APiz2yJnV2QN25XbBdEEWBR0xI8h%2FU6k95uVv5vdQsa%2BxqJqN9DdWw1sWwGQs1SkXVFKZlkaQup%2FhVdsvM%2BWJanb6kjJ1Y9N9kVsFB0E%2FDKlrFyCfY1i7VfcCs9R3H6nR%2BzLAi4qvWoAJ7eU0sUXopFPftoGL%2FCa8TyLNqzLXK8fo4DBjNK2ye9dRJf7Rk0lsYKxp0pbzqtuFqx6tRBtZBu6EQjxVus81T4J3Fti%2BHYf1aLzIVyV1%2FeTNZ8g135AlgH6th96RKFSYS%2BYPcgCmVF4cAdO%2BoVaLtFxk8eikd6Bjf5mBnhzGEo%2FmP1ge3%2BZB6dL2tlTpg2ETbqzyU6lqQLcBs96QU1H0Iir%2B2vxhLW32xX%2BTVwyXIayXFu9dS04whmmXZ%2Bs9KZck5VZWxelYQO67OXmQ%2BdbwhQX%2BD627%2BWynz%2BeoYfjJp2wBOfCGwoHHaM1x3WImt%2BahXVQy5Fn4rh5BnnTELpCR8jPvfRUT2o1aGO6VveQJlfg8xPZkx44%2BTPhHhCBHyjkkOlefnYfrexpSmGVUSrwDckq0Y4kfjccCQvMkXX4y20qPt3ZT61iz3rNqYLLbUwzXJKCVRzeEXE28GQzXGMMV%2FZymmmjRYdKioKpiux94gZjkYTsjDxqL%2FBBjqkAbj%2Bm9mBUbh4CVZ7yd0d3YrdLROhT2rV0fqjRgEqVhOnjrnGp1M9M0%2FNgsi5o3gvmzyMQ0mVuKsuqkW7Ruzrsfo3Cqyx7CtqQT41DprIYJD%2BtgQjX1hWqlYuoO%2Bo9OxQKQKKRFN6UCucuLpyvMCHT6A5EH%2BTs0N9Q5tvGoNOf6qErmQsx4jwd7KMp70aySAoN%2FIWESCYr1IOYGu9Pl%2Fj7P0VIJl5&X-Amz-Signature=e05e428725b0ee3e315ea7746fb2936e9f90a7b5a901addfcd744182a037f696&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3ILFM7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCfF3s9efaWXcR0w9HeJm65NDcaIP3uSiuedokZ8Z9W1AIhAPzZTwr09FGgcqCZafMSNzz9aXm4Hxdh0jXqpQdFVwdYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhTyln4L7%2BjbVOCmwq3APiz2yJnV2QN25XbBdEEWBR0xI8h%2FU6k95uVv5vdQsa%2BxqJqN9DdWw1sWwGQs1SkXVFKZlkaQup%2FhVdsvM%2BWJanb6kjJ1Y9N9kVsFB0E%2FDKlrFyCfY1i7VfcCs9R3H6nR%2BzLAi4qvWoAJ7eU0sUXopFPftoGL%2FCa8TyLNqzLXK8fo4DBjNK2ye9dRJf7Rk0lsYKxp0pbzqtuFqx6tRBtZBu6EQjxVus81T4J3Fti%2BHYf1aLzIVyV1%2FeTNZ8g135AlgH6th96RKFSYS%2BYPcgCmVF4cAdO%2BoVaLtFxk8eikd6Bjf5mBnhzGEo%2FmP1ge3%2BZB6dL2tlTpg2ETbqzyU6lqQLcBs96QU1H0Iir%2B2vxhLW32xX%2BTVwyXIayXFu9dS04whmmXZ%2Bs9KZck5VZWxelYQO67OXmQ%2BdbwhQX%2BD627%2BWynz%2BeoYfjJp2wBOfCGwoHHaM1x3WImt%2BahXVQy5Fn4rh5BnnTELpCR8jPvfRUT2o1aGO6VveQJlfg8xPZkx44%2BTPhHhCBHyjkkOlefnYfrexpSmGVUSrwDckq0Y4kfjccCQvMkXX4y20qPt3ZT61iz3rNqYLLbUwzXJKCVRzeEXE28GQzXGMMV%2FZymmmjRYdKioKpiux94gZjkYTsjDxqL%2FBBjqkAbj%2Bm9mBUbh4CVZ7yd0d3YrdLROhT2rV0fqjRgEqVhOnjrnGp1M9M0%2FNgsi5o3gvmzyMQ0mVuKsuqkW7Ruzrsfo3Cqyx7CtqQT41DprIYJD%2BtgQjX1hWqlYuoO%2Bo9OxQKQKKRFN6UCucuLpyvMCHT6A5EH%2BTs0N9Q5tvGoNOf6qErmQsx4jwd7KMp70aySAoN%2FIWESCYr1IOYGu9Pl%2Fj7P0VIJl5&X-Amz-Signature=d53eba89bea90914319f7687967daf32f726b4a1f60fea6292fcdec4e09e4171&X-Amz-SignedHeaders=host&x-id=GetObject)

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
