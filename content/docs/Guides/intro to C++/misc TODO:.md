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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=81b76f53f043b7edea4403e10f9ecd4f98b71be391dc766a2082e8cdca75f669&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=a50a54726d211c72b4692bebe97d5153258a4c04c4ab30fdf9f2a2af66549b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
