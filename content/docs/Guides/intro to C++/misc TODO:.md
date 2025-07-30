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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRQG2SB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyPo4WMaZCVgOMK%2BCcml3TUb4kfBfD0A7mYXR7FUCvgQIhANm5%2Fhr9%2BAhkyN1wkTQhUcmkBtxJ3%2FgiuydHgLjpEKaFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj7wiBt0a653WU1Aq3ANgQfYOJupb2GX9BzQiZlW2mLPWP5m5lCiYrBhDvnjoSPoxUV9jULKthW5jIMFJTvU9HNNNl4akKbWG27sHF%2FLXpYmGkf3SUcGifVmKPnh%2FOMLUoT0XR1cy5XvxbvEAOi9MUwPED%2Bfxh25CH4GFW4rqNL9xEsCRvZ7cENivwrRvi3H9QbZ2myHEx%2BQJ0D7R08sSMkOfOl6BWUT%2BaEMgt6yMsnFuyTZ5ewPdsgSFkHeJUnVG6K2uphYCJmxsGRuSp9%2BnjL9pRiiQ7K8JpyPNIfP%2BYa%2FyVE6N2fP9to8S6WOt%2Br6s2fXA5SQzI%2BI%2F69jj05Di58xe%2Fpf4CSdu56crs9tJPGADVo9wHcl1XhAl6%2BXc917U7z2yS6k7gdVjKwEg7znXlJqH%2BjueoaWqrMXP7hD6J5eZHHBW7XUywa1jzG2j4MRg63Kzj0Fh7EAOfPISfnqYioYBhrF8d7Vy6%2Bz1JEZ1TzD4i2lr74V6NMBYT5MS9jc5hK9KRhRnbDFRmMwndeZFDhDc%2B0z%2FahLjlaU%2BLgelH6u9YIUeoxMmvfnpfGf9aDhQLjH%2B0TuYID6KisbMUr%2FsODtUMZYM2Ffj8sERSMuvig5UVLlBSL3NoMmdHn42YeoUgStmlwmB15A05DDMuqnEBjqkASebbr5Qy6fLAO8xB4Q6bqBDQI8LBq5toEp5cQq1sNIJx%2BaqSWUttolWxNq0leDyIMV4BRyxBpcVeGcZuw%2F2kT4lHPfmecI%2FQHzuNwCAO2J7wYhO3PdagWTt6UXY%2Byc%2BsUf0%2BIaYgN%2Bara6cs6q7vtQvgRekDCeST%2BfIWnE4sHLM0zbZj9iZ7FAyVekF9oavcjJG8Z9jX59RAFDKmko6Ojli7hkZ&X-Amz-Signature=8291ed4a31444dad5ccbb2d70c14d3664489fce745e22826d900fbef0d80cb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRQG2SB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyPo4WMaZCVgOMK%2BCcml3TUb4kfBfD0A7mYXR7FUCvgQIhANm5%2Fhr9%2BAhkyN1wkTQhUcmkBtxJ3%2FgiuydHgLjpEKaFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj7wiBt0a653WU1Aq3ANgQfYOJupb2GX9BzQiZlW2mLPWP5m5lCiYrBhDvnjoSPoxUV9jULKthW5jIMFJTvU9HNNNl4akKbWG27sHF%2FLXpYmGkf3SUcGifVmKPnh%2FOMLUoT0XR1cy5XvxbvEAOi9MUwPED%2Bfxh25CH4GFW4rqNL9xEsCRvZ7cENivwrRvi3H9QbZ2myHEx%2BQJ0D7R08sSMkOfOl6BWUT%2BaEMgt6yMsnFuyTZ5ewPdsgSFkHeJUnVG6K2uphYCJmxsGRuSp9%2BnjL9pRiiQ7K8JpyPNIfP%2BYa%2FyVE6N2fP9to8S6WOt%2Br6s2fXA5SQzI%2BI%2F69jj05Di58xe%2Fpf4CSdu56crs9tJPGADVo9wHcl1XhAl6%2BXc917U7z2yS6k7gdVjKwEg7znXlJqH%2BjueoaWqrMXP7hD6J5eZHHBW7XUywa1jzG2j4MRg63Kzj0Fh7EAOfPISfnqYioYBhrF8d7Vy6%2Bz1JEZ1TzD4i2lr74V6NMBYT5MS9jc5hK9KRhRnbDFRmMwndeZFDhDc%2B0z%2FahLjlaU%2BLgelH6u9YIUeoxMmvfnpfGf9aDhQLjH%2B0TuYID6KisbMUr%2FsODtUMZYM2Ffj8sERSMuvig5UVLlBSL3NoMmdHn42YeoUgStmlwmB15A05DDMuqnEBjqkASebbr5Qy6fLAO8xB4Q6bqBDQI8LBq5toEp5cQq1sNIJx%2BaqSWUttolWxNq0leDyIMV4BRyxBpcVeGcZuw%2F2kT4lHPfmecI%2FQHzuNwCAO2J7wYhO3PdagWTt6UXY%2Byc%2BsUf0%2BIaYgN%2Bara6cs6q7vtQvgRekDCeST%2BfIWnE4sHLM0zbZj9iZ7FAyVekF9oavcjJG8Z9jX59RAFDKmko6Ojli7hkZ&X-Amz-Signature=53f7e5d0c29aa2ec3df25f07cea5d3b9cd321aa45c8f2ede4cac2c008ab8ff7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
