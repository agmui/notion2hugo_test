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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP4TAJE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW3nA7%2FV9AJFsCnyqQX%2BjwhoPUEoulglR3OrPEtBszgQIgcuFZ8vBbhz2UldEWNMswqygyeCzk2%2F16KKRZQkPoGCYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFJcP71PVGQqiFts%2BSrcA5WKptzJEz6wtKu3Q9MgaA0pWqRkJb0%2B35Ntrd1cNF52HJzbLBz4X%2FMT%2Fa2btewd0bLRDnsVOatP4BvTsmFV9ibXiTkwHOC%2Fk5XlgY5r1qrJSnkVjrK9FVp%2BG8t%2BadsNVXLT%2BVhiB%2FkqNVete3A8FmhQWxrpZD6wa9Blp4RUxB9vtr3A6gG1TFyzdUwB23QXx0ruloLwz1%2BhAwT%2F%2BOg13s5kFt%2FYxlx6xf86WIN%2BR8zRodllrLj0Ap4ixgorc%2FMc6RL%2FIm%2BXUjM6aUs7DWtA%2B1EqkarwOzLtP%2BNc6bhC4fsvckDfqhUr1dibqP%2BfymJyrT93myyWYAVS85NZbtLUmM86MJNoHyNM8sj9T6%2F0SsYOf8qUzjjn7kOcUCuK%2BCCLS%2BduLtEPSUYMv6rtb6KTr6STzf1zi7d43lTUSi9KJ1dRzz5eqSITu86goxqWOe%2FS2wxbyn2tMupmXJYL9uvy9Uyoq0OL%2BffAEdzkeUfhc5fY5Jhpe6YG8KqFiDbRwTi9RqDohCUk5oh3CNtyJXiN004pg5zWgSChyOdo3e5SyBPMP9B1hyYyFw2h9CtMa9h0SczoI4RdW0buNhVfWO0FSJiYC7ezq8xRQJWXKeZ7aLKWHYF1MH%2FBKEZm%2BhweMOLl4b4GOqUBnyWqHa%2Fu6m9H5NL%2FWizC6MWB2iCG%2FONiEb9zrF4%2B2uB2DMTPTqyDJmyHt%2BioAlfiFXMoErWCIjfOB04DuUgaT5FEiiq8tu7T%2Fq4Ik3vouR71EEXds9VB2q7JiObUYSij1kLlZXLRfZSnsBgVZ2MMOEtjz21DkrLQgtlLB%2B05xz4fjpH0nB2VYRYlYEVzE559P8xFu3OVBRScdhNb2qxi44CccPR7&X-Amz-Signature=f2504ec315531081afbb3ff50ef59f1c053411897148a08346204c2b0a657865&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP4TAJE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW3nA7%2FV9AJFsCnyqQX%2BjwhoPUEoulglR3OrPEtBszgQIgcuFZ8vBbhz2UldEWNMswqygyeCzk2%2F16KKRZQkPoGCYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFJcP71PVGQqiFts%2BSrcA5WKptzJEz6wtKu3Q9MgaA0pWqRkJb0%2B35Ntrd1cNF52HJzbLBz4X%2FMT%2Fa2btewd0bLRDnsVOatP4BvTsmFV9ibXiTkwHOC%2Fk5XlgY5r1qrJSnkVjrK9FVp%2BG8t%2BadsNVXLT%2BVhiB%2FkqNVete3A8FmhQWxrpZD6wa9Blp4RUxB9vtr3A6gG1TFyzdUwB23QXx0ruloLwz1%2BhAwT%2F%2BOg13s5kFt%2FYxlx6xf86WIN%2BR8zRodllrLj0Ap4ixgorc%2FMc6RL%2FIm%2BXUjM6aUs7DWtA%2B1EqkarwOzLtP%2BNc6bhC4fsvckDfqhUr1dibqP%2BfymJyrT93myyWYAVS85NZbtLUmM86MJNoHyNM8sj9T6%2F0SsYOf8qUzjjn7kOcUCuK%2BCCLS%2BduLtEPSUYMv6rtb6KTr6STzf1zi7d43lTUSi9KJ1dRzz5eqSITu86goxqWOe%2FS2wxbyn2tMupmXJYL9uvy9Uyoq0OL%2BffAEdzkeUfhc5fY5Jhpe6YG8KqFiDbRwTi9RqDohCUk5oh3CNtyJXiN004pg5zWgSChyOdo3e5SyBPMP9B1hyYyFw2h9CtMa9h0SczoI4RdW0buNhVfWO0FSJiYC7ezq8xRQJWXKeZ7aLKWHYF1MH%2FBKEZm%2BhweMOLl4b4GOqUBnyWqHa%2Fu6m9H5NL%2FWizC6MWB2iCG%2FONiEb9zrF4%2B2uB2DMTPTqyDJmyHt%2BioAlfiFXMoErWCIjfOB04DuUgaT5FEiiq8tu7T%2Fq4Ik3vouR71EEXds9VB2q7JiObUYSij1kLlZXLRfZSnsBgVZ2MMOEtjz21DkrLQgtlLB%2B05xz4fjpH0nB2VYRYlYEVzE559P8xFu3OVBRScdhNb2qxi44CccPR7&X-Amz-Signature=58180ac629a53515813c352805e51faa0a0ab5d0a12e9b8af024bd83d1eb3d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
