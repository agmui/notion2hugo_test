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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXKQTZK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2JT33gWKPP6R%2F4B5P28LlF5FoUCVZvkWTjuoASEI6gIgVdgxzMBr9ay0JZQh7PoLUNY9FtVdkapHSTUfgOGom6Iq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF1Vv7TiXhURv%2FG17ircAyhnLiCHfbujCA0GAP1OS2pw5DICkhoEzvV8xJljOBK5lgCKFpkZy%2BEyu6jmaVsS2cS5JWqczBniqiTufhwZUSVcTncphA7ye2IUwKaUf5n3FK%2FARc5yJJajvWqIqe%2FO459X8wgX3JAXzkNDoadnEBtXYzxzsi491bBefQ8NLCw2nd4bunIa0%2FiUxfEuAK4T1gqn04hhHvSbjVhEKklvfQoM9bw%2BDkB6vVZk5Q%2BISqQ7thkU9r8%2FqHZODC77xHz2PVUd%2F8WY5IVZDmakcRP0aqT8APqX%2BPnLGKGMEYSAFBEn7Pk6Aki%2F%2Bf1wuNuaX4lJqqLOKFN%2FmDKhRz6dbj8rTUX7dt932261LFv%2FmvwozF8wn%2Fiu9dmpCfkHk4So%2FNhWoyPJvf6Hqs63R6OY4iTA%2Bd9VO0xUwOLqXKDFtDbWeH1ieA4p2cPSoiZt9itXRrhskplH3RMvHU41HSIfnlnxi%2BeSb4ZIZmm7OQPJEp2C3CM6MvWyPs2KMPKHuotuKjBVITUeA%2BDj79urjASmUoRWg3L2Sw1dyeH7oO3CEmgP95VMZyGiB8JdpiMdvxHa%2BBsaczauGap7k%2BXFVTsgMsQCHou1%2BBCF1KS3y3MOM1nFqbQ12PRP60VvGE674DYXMK28wb8GOqUBSZ%2BV6j0DP0c61gGHYlj5GZdV7OeR441Q%2B3Nt53I1r35ppt23INzZ0F2wRhh%2FSINi90AnHpQ43kl9UPeotnEPAtrSBqzdPYjfzaiiKgKSFor9aR7PjfEhicc0A%2Bj%2BDfIQUbhqMxhVsrzSphT1gHoW4Aeuh73y1uuO0q3zwFCjiqD2DScgzwoPQDJqiaGFN1VqezVWA%2BM4DDcI9IR03%2B6yo357hwbx&X-Amz-Signature=b9165602bb8d1dfa3d96f42c513bee0a9c35dbf77ae9fcf1d933ef4e79657dda&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXKQTZK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX2JT33gWKPP6R%2F4B5P28LlF5FoUCVZvkWTjuoASEI6gIgVdgxzMBr9ay0JZQh7PoLUNY9FtVdkapHSTUfgOGom6Iq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF1Vv7TiXhURv%2FG17ircAyhnLiCHfbujCA0GAP1OS2pw5DICkhoEzvV8xJljOBK5lgCKFpkZy%2BEyu6jmaVsS2cS5JWqczBniqiTufhwZUSVcTncphA7ye2IUwKaUf5n3FK%2FARc5yJJajvWqIqe%2FO459X8wgX3JAXzkNDoadnEBtXYzxzsi491bBefQ8NLCw2nd4bunIa0%2FiUxfEuAK4T1gqn04hhHvSbjVhEKklvfQoM9bw%2BDkB6vVZk5Q%2BISqQ7thkU9r8%2FqHZODC77xHz2PVUd%2F8WY5IVZDmakcRP0aqT8APqX%2BPnLGKGMEYSAFBEn7Pk6Aki%2F%2Bf1wuNuaX4lJqqLOKFN%2FmDKhRz6dbj8rTUX7dt932261LFv%2FmvwozF8wn%2Fiu9dmpCfkHk4So%2FNhWoyPJvf6Hqs63R6OY4iTA%2Bd9VO0xUwOLqXKDFtDbWeH1ieA4p2cPSoiZt9itXRrhskplH3RMvHU41HSIfnlnxi%2BeSb4ZIZmm7OQPJEp2C3CM6MvWyPs2KMPKHuotuKjBVITUeA%2BDj79urjASmUoRWg3L2Sw1dyeH7oO3CEmgP95VMZyGiB8JdpiMdvxHa%2BBsaczauGap7k%2BXFVTsgMsQCHou1%2BBCF1KS3y3MOM1nFqbQ12PRP60VvGE674DYXMK28wb8GOqUBSZ%2BV6j0DP0c61gGHYlj5GZdV7OeR441Q%2B3Nt53I1r35ppt23INzZ0F2wRhh%2FSINi90AnHpQ43kl9UPeotnEPAtrSBqzdPYjfzaiiKgKSFor9aR7PjfEhicc0A%2Bj%2BDfIQUbhqMxhVsrzSphT1gHoW4Aeuh73y1uuO0q3zwFCjiqD2DScgzwoPQDJqiaGFN1VqezVWA%2BM4DDcI9IR03%2B6yo357hwbx&X-Amz-Signature=e78b54b283598d9ee020ba1d7ac70dd8b9892c3dec5991fa38548c549c8c6a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
