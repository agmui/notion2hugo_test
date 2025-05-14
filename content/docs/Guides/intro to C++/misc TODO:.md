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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFCKQMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFFJJ5WLgaa7bpRNUlshQrD85yrqSTKHSeffxfiHc2tvAiEAt5HWon5IHTox%2Fo1pXRsf3mfeQS%2BIiX%2Fbpiyqfdu5aqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFHM%2Fr8aE4Qq%2Bb3goSrcA4Pa3liYty1U6CusAh3gmhWFoM8kZmZXmMgxnMG5WxCMB%2FflRWyJ9ZfVOqA9jDiOgaKLUBnNKDgjVl5vK7xGocID1v7mw2JR%2FrjKmmSIsyo334reTcsnOveWtDGA3APUY7OU7SlikOEt%2FDn7YzodfGBq8ig2Hg%2BtQ9QJ6odMTBzmxSh%2FsOpI4PbGd8ZbzPfwTYv8yFYIMRKmbCQiDcEoMi5e2eG5Skq5ovT39n3BN7VrqFYX57YhuLU4zBhudyBIP240B6idtAEc%2BKT0hSZQP6VB0qvwT1qtFCaNxmmSL744jJJQN7WAd2K2qk98n%2Fg0%2BuL19s7Zd2ZJ%2FWFh4ldHGBMWM7gim23DzsdB0xyLJXwe02iEPI0N85SnT9KD6esed%2FH3CRFl9SettrqZ1RqUIr5ukbbaBVS%2Bu%2BLSzFxmUc%2Bq118tVHLeucBoTQN5IZ7QhBfzBb8dakF7ekAtgkvhED2y31dEJDOFXWGzOct8mJFHDVYkO%2FgiBiFSXhAbUkVULfFVtgtn6QDF%2F2B4%2FB%2BaK2l%2FqavMknmuF%2F66X9wpZhe2mGY1gkg9r%2FLOTslA3vyAdxq8QngX8fCWyaSI0ZRAJUam0JgthIkyiEJA17YcasfR8mBeTwvemIByw5LSMPuhksEGOqUBWVEu8WDnqOLVicXOaG7jDVAdn3Dp88NaS2vpsxAqvdONXyi6AIPDbajLPxZMcLdNgE5dl5RJGA57monFTEOHvphHZicee71YZ6CHZGzYPHe7H2zNAh8CGSVHllmNqhD7jkeEGcYzAU7IRvXGkYajKv9Bbw%2BRdwE7MX4GnNeLJylWbNrfAs4amUro5MDMS8Go2eDMCGoX4UJGeshU6Nq2doip8CI3&X-Amz-Signature=8f8b9225dc73062aa36dba23d4c93bfe2b614706e5c455654d75c9d1384257ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFCKQMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFFJJ5WLgaa7bpRNUlshQrD85yrqSTKHSeffxfiHc2tvAiEAt5HWon5IHTox%2Fo1pXRsf3mfeQS%2BIiX%2Fbpiyqfdu5aqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFHM%2Fr8aE4Qq%2Bb3goSrcA4Pa3liYty1U6CusAh3gmhWFoM8kZmZXmMgxnMG5WxCMB%2FflRWyJ9ZfVOqA9jDiOgaKLUBnNKDgjVl5vK7xGocID1v7mw2JR%2FrjKmmSIsyo334reTcsnOveWtDGA3APUY7OU7SlikOEt%2FDn7YzodfGBq8ig2Hg%2BtQ9QJ6odMTBzmxSh%2FsOpI4PbGd8ZbzPfwTYv8yFYIMRKmbCQiDcEoMi5e2eG5Skq5ovT39n3BN7VrqFYX57YhuLU4zBhudyBIP240B6idtAEc%2BKT0hSZQP6VB0qvwT1qtFCaNxmmSL744jJJQN7WAd2K2qk98n%2Fg0%2BuL19s7Zd2ZJ%2FWFh4ldHGBMWM7gim23DzsdB0xyLJXwe02iEPI0N85SnT9KD6esed%2FH3CRFl9SettrqZ1RqUIr5ukbbaBVS%2Bu%2BLSzFxmUc%2Bq118tVHLeucBoTQN5IZ7QhBfzBb8dakF7ekAtgkvhED2y31dEJDOFXWGzOct8mJFHDVYkO%2FgiBiFSXhAbUkVULfFVtgtn6QDF%2F2B4%2FB%2BaK2l%2FqavMknmuF%2F66X9wpZhe2mGY1gkg9r%2FLOTslA3vyAdxq8QngX8fCWyaSI0ZRAJUam0JgthIkyiEJA17YcasfR8mBeTwvemIByw5LSMPuhksEGOqUBWVEu8WDnqOLVicXOaG7jDVAdn3Dp88NaS2vpsxAqvdONXyi6AIPDbajLPxZMcLdNgE5dl5RJGA57monFTEOHvphHZicee71YZ6CHZGzYPHe7H2zNAh8CGSVHllmNqhD7jkeEGcYzAU7IRvXGkYajKv9Bbw%2BRdwE7MX4GnNeLJylWbNrfAs4amUro5MDMS8Go2eDMCGoX4UJGeshU6Nq2doip8CI3&X-Amz-Signature=8788b1886fb9bebeceb070f602f116d12f6741e9790ab8715c8f3b39291b9079&X-Amz-SignedHeaders=host&x-id=GetObject)

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
