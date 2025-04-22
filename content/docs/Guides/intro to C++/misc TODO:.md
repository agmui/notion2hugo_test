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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEFU6VF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC61T3r2Zd48iZmJKzsHlZMjBEUHtY5ZfMeiNzFbAZd4AIgMKC%2F2ZhGssNDUIy38VDqusig5zLswFXTkHgl4HxX73IqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJyJFvU5UOqNhAX0CrcA817antPPdrbApNgBopIOk6dbJ86yHEyFTDiBVle4EJOzjvJVTAqRxpRZSm1ZPwSjcyukVhr38i4DDn1yIEJ%2FER2gzJ3eynO16K1z8Pyfco3ZHDdE97YcwlAnHhRZu1zacBxBnaFyy%2BdBhez68b5l1qzIe5l%2FuckN2sH4t41PTbiriPfK%2BwrLC7dkmzt7iX%2FjcYvVeYjNGuxwB9s7i4wygUKi4Vj7n8CEQuegp3%2Fg25WSVv0lWFKzzo6VMydSFslgal0%2BUrJL5SY%2BihZ1Q%2FzKOPc9vnN9GK9GOPpb3u4aZc683zGgDiBxrawfQ0zlRGD%2FvwUI7FiP55koX8Z2y0HvWMMuSxIsrSf5WfK1pMArHMzeovZE7FglqjZXaVEnnuHbOILQARRLcOMUVI8NaqOE2qksLVgDE%2BeHgUOl3oYRATS99E2PnNTcQCZBGewIjg8uD1POlTsLIdTwyGpW8ghtst4K%2BcYLSjxXOWDGcpvuqbhURYsY4AMu8m8qejm8vZea1CakmMa3dHFtH5t%2F9doD3mrGAqqbsw8VUS3duvyYbvokBnSd7o2WpMdvpcEvGyUjCZYK3p84ISs%2FUacx7HWnhdz617LLFAMPCD4vRwTNchrasK%2BzfU8rOqG%2BBfVML2fn8AGOqUBmmM9Y6eA99d80pqnILvHWw%2B33QDkm%2FhlllvkVIRhJih3Al%2BBbhDcixvsBJSoXVLQmRIlxnsZh7zTeTHpbRvKm%2BBmxLxPgnm5KMsvFUHLNjR%2BlPMu0KZrkeBgQN30xQ3KO0tkJ3HBg%2FLu5IN1dSNsjnEHQ%2B%2BH0OLJaJNsboT8zA%2BbLuclznN7PFEifzCMnhh%2FaJd0Mvz%2By8yL%2BwS7MJ8oXr9EHZX7&X-Amz-Signature=cce7e992e727122ed5d1b7f1adeda94bfc9697c6988c677502cf2c1cf5f277cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEFU6VF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC61T3r2Zd48iZmJKzsHlZMjBEUHtY5ZfMeiNzFbAZd4AIgMKC%2F2ZhGssNDUIy38VDqusig5zLswFXTkHgl4HxX73IqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJyJFvU5UOqNhAX0CrcA817antPPdrbApNgBopIOk6dbJ86yHEyFTDiBVle4EJOzjvJVTAqRxpRZSm1ZPwSjcyukVhr38i4DDn1yIEJ%2FER2gzJ3eynO16K1z8Pyfco3ZHDdE97YcwlAnHhRZu1zacBxBnaFyy%2BdBhez68b5l1qzIe5l%2FuckN2sH4t41PTbiriPfK%2BwrLC7dkmzt7iX%2FjcYvVeYjNGuxwB9s7i4wygUKi4Vj7n8CEQuegp3%2Fg25WSVv0lWFKzzo6VMydSFslgal0%2BUrJL5SY%2BihZ1Q%2FzKOPc9vnN9GK9GOPpb3u4aZc683zGgDiBxrawfQ0zlRGD%2FvwUI7FiP55koX8Z2y0HvWMMuSxIsrSf5WfK1pMArHMzeovZE7FglqjZXaVEnnuHbOILQARRLcOMUVI8NaqOE2qksLVgDE%2BeHgUOl3oYRATS99E2PnNTcQCZBGewIjg8uD1POlTsLIdTwyGpW8ghtst4K%2BcYLSjxXOWDGcpvuqbhURYsY4AMu8m8qejm8vZea1CakmMa3dHFtH5t%2F9doD3mrGAqqbsw8VUS3duvyYbvokBnSd7o2WpMdvpcEvGyUjCZYK3p84ISs%2FUacx7HWnhdz617LLFAMPCD4vRwTNchrasK%2BzfU8rOqG%2BBfVML2fn8AGOqUBmmM9Y6eA99d80pqnILvHWw%2B33QDkm%2FhlllvkVIRhJih3Al%2BBbhDcixvsBJSoXVLQmRIlxnsZh7zTeTHpbRvKm%2BBmxLxPgnm5KMsvFUHLNjR%2BlPMu0KZrkeBgQN30xQ3KO0tkJ3HBg%2FLu5IN1dSNsjnEHQ%2B%2BH0OLJaJNsboT8zA%2BbLuclznN7PFEifzCMnhh%2FaJd0Mvz%2By8yL%2BwS7MJ8oXr9EHZX7&X-Amz-Signature=87d7d5fbd4d114a7b1972882d3e37b82456f261fff23ca9663539da4d8f470ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
