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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZA5JUF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWW4heGVlfYDutkr%2BkI6UQHZBMz0i%2Fi1Hzl1w%2ByRQmqAiBOwsTdyYdAarAMbUy%2BkY%2Fv4TdFMbLBbAHSbvWdH19VpCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM3ZPvrq9Qtdjd%2FKVeKtwDJGTiLx4nHSv5xhAITyPgSac0lqbWp6Ta52fvyuquaHWn8PsLQKtBnksLR7hDMCTU0M8lTS9S6Zs%2FO5duGrQvJEB4vgzUi0cIGnyroLeSOMU88GHXFh7S4QEjAyQLmG%2FwtmwbG4XGnczwHL4smD6pOLipzPcbSA7lTir1fvnGOpse85k64LSGvNjbSlB6yNxDvaNGd3DRQJeHMnlmOTvlGTNN90spmkW3JXcV09dRWdG08N4TPxcXx3nz109S2hjy3jDfMV4908jZp7SNjrcTrBbCzkzmlHFx9Wbo7rAa11Ui7ueXoOcA3l%2FoJ9ZXeZxbcbs6Y8FqExqz2ATJzfmyln9R%2FSFy1W7c0bpywG0wFeZ8%2FJuvddALBaEsZczk5%2B1uJ4VhwNBvWy9CyEgj2X24%2BSj%2BxZUUT6Sxq7TlzSN2IKCrZjaXYMgjBv47F0FVYzQ3TslR6GHhBV0sRwyqupJdpIXj8EuRAjc3mvqyHlqcOf3td03WjJVQFTm1I6yJqP6oS4njTSumV4s80GZ5C182f5QsuHFFMuv%2F6qLr1DQ5iIx80N1mQe4GZaDF%2B49f1TOJxZJMxXYSvA41fGPEgOoaWpr%2B1pJUiIZ%2B%2BuuAVXyIVIhiq9NOvac6yX9vxd0wxt35vwY6pgFPM08oDVjSRh5Kjr2d9Wkrzepxz58dHhXslrMA1CsUmfiB5QY5YFwzgzx8jEEdaJYp4nDfpU3LAE%2Fg9u0Hom6%2BGM07iF2ZOe96SQHZ%2Fyq%2FMK8x3%2F%2BUCboYGaD2aAxE5u61d4JbGVRCaEctwWG7GUECA96q7UBI4KbFYi3A6MzNk2O%2FRRmy4L621EhmeAsC0mJ%2FhLSgWNj0%2BwNCnwCwTXyI94PoH6dP&X-Amz-Signature=50f5c3a3a46ab0bc95434818826bfe9b781e1616d27fee711f5da10a12fe97c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZA5JUF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWW4heGVlfYDutkr%2BkI6UQHZBMz0i%2Fi1Hzl1w%2ByRQmqAiBOwsTdyYdAarAMbUy%2BkY%2Fv4TdFMbLBbAHSbvWdH19VpCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM3ZPvrq9Qtdjd%2FKVeKtwDJGTiLx4nHSv5xhAITyPgSac0lqbWp6Ta52fvyuquaHWn8PsLQKtBnksLR7hDMCTU0M8lTS9S6Zs%2FO5duGrQvJEB4vgzUi0cIGnyroLeSOMU88GHXFh7S4QEjAyQLmG%2FwtmwbG4XGnczwHL4smD6pOLipzPcbSA7lTir1fvnGOpse85k64LSGvNjbSlB6yNxDvaNGd3DRQJeHMnlmOTvlGTNN90spmkW3JXcV09dRWdG08N4TPxcXx3nz109S2hjy3jDfMV4908jZp7SNjrcTrBbCzkzmlHFx9Wbo7rAa11Ui7ueXoOcA3l%2FoJ9ZXeZxbcbs6Y8FqExqz2ATJzfmyln9R%2FSFy1W7c0bpywG0wFeZ8%2FJuvddALBaEsZczk5%2B1uJ4VhwNBvWy9CyEgj2X24%2BSj%2BxZUUT6Sxq7TlzSN2IKCrZjaXYMgjBv47F0FVYzQ3TslR6GHhBV0sRwyqupJdpIXj8EuRAjc3mvqyHlqcOf3td03WjJVQFTm1I6yJqP6oS4njTSumV4s80GZ5C182f5QsuHFFMuv%2F6qLr1DQ5iIx80N1mQe4GZaDF%2B49f1TOJxZJMxXYSvA41fGPEgOoaWpr%2B1pJUiIZ%2B%2BuuAVXyIVIhiq9NOvac6yX9vxd0wxt35vwY6pgFPM08oDVjSRh5Kjr2d9Wkrzepxz58dHhXslrMA1CsUmfiB5QY5YFwzgzx8jEEdaJYp4nDfpU3LAE%2Fg9u0Hom6%2BGM07iF2ZOe96SQHZ%2Fyq%2FMK8x3%2F%2BUCboYGaD2aAxE5u61d4JbGVRCaEctwWG7GUECA96q7UBI4KbFYi3A6MzNk2O%2FRRmy4L621EhmeAsC0mJ%2FhLSgWNj0%2BwNCnwCwTXyI94PoH6dP&X-Amz-Signature=a494f50921a19c97aa3aca0cf84e33e94d7ce24e90303997426dd0ccff6c22b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
