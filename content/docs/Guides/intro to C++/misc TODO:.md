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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6S4ZTY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCifeFJxiezqmh8o8WVDSoMxwO9xtFAJxNHvlHv%2FiN%2FmAIhAOlUkPDY1HK%2BqlHYsf%2BgoRLqaUGs2IQW94Zn6oxIU8vEKv8DCEoQABoMNjM3NDIzMTgzODA1IgxpGbCO3vmsPOJoajEq3AP3MSJAzLpu5JwHT3Szzm1r0Q%2FR86o%2FtFKyalgeKDefl2lyZOy%2FGeRULrBJJuPmbCYCrAJd8V7TGv8rmj42hcyaBJkbssIX64fgliE%2FpeHb3HnTHKSFubWeoJE4oLDG9%2FQzqgArTg9FffuaXPdQY3ggZz9JPKgb9i%2F17A4q%2FDVsYryaHDLOQgPYMaj8bGDI0QryK%2BeAnLXqqXYKktl5eTmWbRjo0FsxS5x%2BywXCNryXw3pm8tKSx7Ng0%2FSz5GADus63%2B4n9cjShzgbbQ%2F8Y2V4JRZXm%2BGBx5l57gDOAx%2BDLkgYSgoYcveMySqwrSE8cUfiBeTVcxXtXXEVKLIiOqRnkFNDON7gpKOffUVscmepMEl0NFhDlEXR5J8LyJtiymWX0nDhnygmIYDtnBAeFdRn%2FpWeX06GioARLxC%2By%2FrbkzdxtUr54RCLBFVyVyka8aMlr6h3KhU3NBzBIeI8Bl7FSSnzzzZ%2Fmq3iDnlwvG0fMLVPwQYv%2FyB1ClRjvmL0Qgrx89l7Br53RGo3iP1S61zaigQK0M95U6Yd0CNyTRmchdFvDsD5%2By3rqvGXEAW7h1DWfUd1vCHvNFPx0XXmrs%2FbWuT%2BiBvar%2FFf%2FyIMcDB%2FLow3F5IQ4C9bv4dJ0aDCF8Pe9BjqkAfICiyu1skUUiF8XmuYsQXhIpMiSW8ZvOYCiEMHtyH2pY6WRqEx7e0wiQv6c%2F%2FH1V0Ot5mRrINHj6t866%2FT8LNCrzNfZEko7TmU%2FaWUlyZtyctpPSuGHoMqtRbbXvvF8vDLF2OJrn%2BHsM5niM52a3t4fMZ0yA%2BzGGxX8TSTImHX82CqlJeAMzsEzkdVtUUnEHWV9GFXTsgqE9pGZzYh4k%2F9%2F6Jh%2F&X-Amz-Signature=b9333b48efd55ac1a30ba74c4176fa0546bf7fbee061d63627acd48416a96527&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6S4ZTY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCifeFJxiezqmh8o8WVDSoMxwO9xtFAJxNHvlHv%2FiN%2FmAIhAOlUkPDY1HK%2BqlHYsf%2BgoRLqaUGs2IQW94Zn6oxIU8vEKv8DCEoQABoMNjM3NDIzMTgzODA1IgxpGbCO3vmsPOJoajEq3AP3MSJAzLpu5JwHT3Szzm1r0Q%2FR86o%2FtFKyalgeKDefl2lyZOy%2FGeRULrBJJuPmbCYCrAJd8V7TGv8rmj42hcyaBJkbssIX64fgliE%2FpeHb3HnTHKSFubWeoJE4oLDG9%2FQzqgArTg9FffuaXPdQY3ggZz9JPKgb9i%2F17A4q%2FDVsYryaHDLOQgPYMaj8bGDI0QryK%2BeAnLXqqXYKktl5eTmWbRjo0FsxS5x%2BywXCNryXw3pm8tKSx7Ng0%2FSz5GADus63%2B4n9cjShzgbbQ%2F8Y2V4JRZXm%2BGBx5l57gDOAx%2BDLkgYSgoYcveMySqwrSE8cUfiBeTVcxXtXXEVKLIiOqRnkFNDON7gpKOffUVscmepMEl0NFhDlEXR5J8LyJtiymWX0nDhnygmIYDtnBAeFdRn%2FpWeX06GioARLxC%2By%2FrbkzdxtUr54RCLBFVyVyka8aMlr6h3KhU3NBzBIeI8Bl7FSSnzzzZ%2Fmq3iDnlwvG0fMLVPwQYv%2FyB1ClRjvmL0Qgrx89l7Br53RGo3iP1S61zaigQK0M95U6Yd0CNyTRmchdFvDsD5%2By3rqvGXEAW7h1DWfUd1vCHvNFPx0XXmrs%2FbWuT%2BiBvar%2FFf%2FyIMcDB%2FLow3F5IQ4C9bv4dJ0aDCF8Pe9BjqkAfICiyu1skUUiF8XmuYsQXhIpMiSW8ZvOYCiEMHtyH2pY6WRqEx7e0wiQv6c%2F%2FH1V0Ot5mRrINHj6t866%2FT8LNCrzNfZEko7TmU%2FaWUlyZtyctpPSuGHoMqtRbbXvvF8vDLF2OJrn%2BHsM5niM52a3t4fMZ0yA%2BzGGxX8TSTImHX82CqlJeAMzsEzkdVtUUnEHWV9GFXTsgqE9pGZzYh4k%2F9%2F6Jh%2F&X-Amz-Signature=411d066917d7aed436bd28165d16f229eb5a6df9f3fc21763ed3b9bf7546a877&X-Amz-SignedHeaders=host&x-id=GetObject)

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
