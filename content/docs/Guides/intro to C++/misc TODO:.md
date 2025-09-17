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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PFZJDK%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGqVFAbG4wLTDeAYGXn65FYY2d%2BBEaeiONRM95wAOhw4AiEA1TnW9JJ7NQ96CQESjhyxJi4MT3d69ueNUQweJQqsHZAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLF%2BPxUSuwBEizJw9CrcA3sIv8uKG2cvr3qRkSHvBMCRcyLYrEpKWMs2kOM6o7Hwe7zuDhyhsi5KeR0ffO87hTtjA68WFNcW%2FdG6hZKxxesllXoM%2Bbe0DHh%2Fys6%2FRWepZXpZ1EjL729zCRr0mErNHwFssKth4B1FAU64asrbtQf2cZjV%2BFEf84zCBg6%2BD1GlzwgvnBy0bcBi4LlrDbnGzR6pDPMGv5Ztmpl2eaSm4sx5U6ZZ4Fq8X8S6GgzQ%2F6lJgVxcQXwih27Qu3yl1opq5zemwUUdKdCQs4OH4zl16VyGb4mAE17q%2BIQhc16eIRpbQOtBE6%2BybAkAp10tS0YGw0MSWOSR6Jz%2BG6FAcb7CuUsrsjexPuL2Pu8tF2wE%2FRUAG3qRJPfTqOg2tSoq8PehvBhgSXHvtm%2B1TDIrqzjP%2FYYuMowbFQakdA3CxN6Db0nktMkFjLTltxIktp57CV8mMo1f3HLyMtjaY8zQ900Gs5BG0ZmIkbXWqlJDG55Jt15BEIO1AAt%2FYgk0tidwGnmBG9bOj4Puzcvm2b3N%2F%2Fva6yvD2Ux9Cu4FOgj%2FjBDC%2BK2qV4gfhRKSgIRhQY%2FFWwFoQvW8DiAhCFTrAZrMNbe81rXYtB4PLa6StgCWLQgyfj%2Fmd7bxJEl82guUVZUOMNbvp8YGOqUBcmq2krvLrIrfbNItt5mKUOpoVfGakA3Lr7zwdg2dntolh7%2BDsxhmW2OJt%2FBl07oWzpUWrlruedCB%2BaFUiTdzEZn5hDG4vb90pOP2HYXdO7tAE%2F4E4aaYMpVG2LDfJaQxhLzophwuvyD3KeIbM01v80RdvitvG34btVep%2BA9C61QxuWUN8qAXF48VDflC4EH4J5FkHyX8884P1%2BGpvDILvGrT48o9&X-Amz-Signature=58a44a2b861090eac6119a257bf89044167df8e910680fc335e65e3c6a90cc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PFZJDK%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGqVFAbG4wLTDeAYGXn65FYY2d%2BBEaeiONRM95wAOhw4AiEA1TnW9JJ7NQ96CQESjhyxJi4MT3d69ueNUQweJQqsHZAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLF%2BPxUSuwBEizJw9CrcA3sIv8uKG2cvr3qRkSHvBMCRcyLYrEpKWMs2kOM6o7Hwe7zuDhyhsi5KeR0ffO87hTtjA68WFNcW%2FdG6hZKxxesllXoM%2Bbe0DHh%2Fys6%2FRWepZXpZ1EjL729zCRr0mErNHwFssKth4B1FAU64asrbtQf2cZjV%2BFEf84zCBg6%2BD1GlzwgvnBy0bcBi4LlrDbnGzR6pDPMGv5Ztmpl2eaSm4sx5U6ZZ4Fq8X8S6GgzQ%2F6lJgVxcQXwih27Qu3yl1opq5zemwUUdKdCQs4OH4zl16VyGb4mAE17q%2BIQhc16eIRpbQOtBE6%2BybAkAp10tS0YGw0MSWOSR6Jz%2BG6FAcb7CuUsrsjexPuL2Pu8tF2wE%2FRUAG3qRJPfTqOg2tSoq8PehvBhgSXHvtm%2B1TDIrqzjP%2FYYuMowbFQakdA3CxN6Db0nktMkFjLTltxIktp57CV8mMo1f3HLyMtjaY8zQ900Gs5BG0ZmIkbXWqlJDG55Jt15BEIO1AAt%2FYgk0tidwGnmBG9bOj4Puzcvm2b3N%2F%2Fva6yvD2Ux9Cu4FOgj%2FjBDC%2BK2qV4gfhRKSgIRhQY%2FFWwFoQvW8DiAhCFTrAZrMNbe81rXYtB4PLa6StgCWLQgyfj%2Fmd7bxJEl82guUVZUOMNbvp8YGOqUBcmq2krvLrIrfbNItt5mKUOpoVfGakA3Lr7zwdg2dntolh7%2BDsxhmW2OJt%2FBl07oWzpUWrlruedCB%2BaFUiTdzEZn5hDG4vb90pOP2HYXdO7tAE%2F4E4aaYMpVG2LDfJaQxhLzophwuvyD3KeIbM01v80RdvitvG34btVep%2BA9C61QxuWUN8qAXF48VDflC4EH4J5FkHyX8884P1%2BGpvDILvGrT48o9&X-Amz-Signature=319339c1726086af1b90cbb24f9f363a1d4f6d4c3d7ce447da4fec278584a39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
