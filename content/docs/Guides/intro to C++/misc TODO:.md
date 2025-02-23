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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL7Q6Y7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzGp%2BVanOXFTqYZnA3LL5KOeS4O3a8ZFJXA0uVHvmaHAiEApfn7gJ71iy1bEUYsNmKZ2rmIqw%2FBKGerdfkofP%2Fhy6Yq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJfpbAnZg8nKpBsj%2FSrcA1y7fkx7H%2FCmXqs2rHC65DwV%2FQwfnHlOCIYaXQUxvjLXfX1p%2BfEqfBGm1upyUBItF5occzWJRcBFOZlO8MN6CVmzNmXH%2FPsVPb2wnFXfcK4TX3fuzV3E%2F4RP6EsBeQJGOXnOxMirHgnE1T0UzE2%2F%2Bohjyej3wvPQP1DsZQouXXAMiHPZMEtTg0hB7Y89IFKiZ9ErljtGUX7%2FJC%2BGYzJYQlyqidg1%2FRwR6QBafFJU79mH0mm7wIG9o2qTmCqcjrjvPrHGU55Bq9GOUzQPqFw94Ad%2BFdS%2FDA%2FaJqcaVAY4asEozzQD2VYiD%2BQqqZBRDUA6%2FEfSGbTmgfQwwRy%2FG7WE6bguqwk0X2h1rnJRdurugVnPunOVCLnGg%2BESwaBkX%2FdVQo2kIpgK4z8hHNqfThDdCH9V6CB7vXLkqTeYG8T8%2F1rOyz4q2xbg%2FzJZqCl94Hyk1aLk3Kelf1IiB219BrQAR%2FaxeSyaYh%2FSTG8%2FoKVEMvDEcKXbzPJKhlIYciKN30TaHT330b4Ib6baUI9%2BvYmMLoVqPeeCMpi3wQ1e6mwonCemjGa%2Bl0iLX1Js1ezaDGfIkP97vYCeJ1UZv%2BTvPJCvcXpNgPJaS2IVRi6LUBj4Pbo%2BpUf%2F3GzVsadG4ooPML%2BH7b0GOqUBVjLgIac6H%2BRkHntSP5paYXNCtaRa0xGy0sHBaxckppay4qfMO%2B%2FVyQNKcMZvzCHODnffDHsgV1TIQyRVBxXWLOz0v3VVhJFOrxjxQY9kcSx%2BFTe2w7XfobSH3kQ%2FeXY2AyjCmM%2BOCdbZcjfOWIz1ZJPdFj9L6WTcagYziuTo2%2BCUd84Qs0b8I5uyLniJtfgYbgDcfYCsimavPgJTAz5bufW7cWJC&X-Amz-Signature=63455a3ca2a2d85265db9e1325dd6c7d7f0667c1ce71e05268f0ca625c7122be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL7Q6Y7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzGp%2BVanOXFTqYZnA3LL5KOeS4O3a8ZFJXA0uVHvmaHAiEApfn7gJ71iy1bEUYsNmKZ2rmIqw%2FBKGerdfkofP%2Fhy6Yq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJfpbAnZg8nKpBsj%2FSrcA1y7fkx7H%2FCmXqs2rHC65DwV%2FQwfnHlOCIYaXQUxvjLXfX1p%2BfEqfBGm1upyUBItF5occzWJRcBFOZlO8MN6CVmzNmXH%2FPsVPb2wnFXfcK4TX3fuzV3E%2F4RP6EsBeQJGOXnOxMirHgnE1T0UzE2%2F%2Bohjyej3wvPQP1DsZQouXXAMiHPZMEtTg0hB7Y89IFKiZ9ErljtGUX7%2FJC%2BGYzJYQlyqidg1%2FRwR6QBafFJU79mH0mm7wIG9o2qTmCqcjrjvPrHGU55Bq9GOUzQPqFw94Ad%2BFdS%2FDA%2FaJqcaVAY4asEozzQD2VYiD%2BQqqZBRDUA6%2FEfSGbTmgfQwwRy%2FG7WE6bguqwk0X2h1rnJRdurugVnPunOVCLnGg%2BESwaBkX%2FdVQo2kIpgK4z8hHNqfThDdCH9V6CB7vXLkqTeYG8T8%2F1rOyz4q2xbg%2FzJZqCl94Hyk1aLk3Kelf1IiB219BrQAR%2FaxeSyaYh%2FSTG8%2FoKVEMvDEcKXbzPJKhlIYciKN30TaHT330b4Ib6baUI9%2BvYmMLoVqPeeCMpi3wQ1e6mwonCemjGa%2Bl0iLX1Js1ezaDGfIkP97vYCeJ1UZv%2BTvPJCvcXpNgPJaS2IVRi6LUBj4Pbo%2BpUf%2F3GzVsadG4ooPML%2BH7b0GOqUBVjLgIac6H%2BRkHntSP5paYXNCtaRa0xGy0sHBaxckppay4qfMO%2B%2FVyQNKcMZvzCHODnffDHsgV1TIQyRVBxXWLOz0v3VVhJFOrxjxQY9kcSx%2BFTe2w7XfobSH3kQ%2FeXY2AyjCmM%2BOCdbZcjfOWIz1ZJPdFj9L6WTcagYziuTo2%2BCUd84Qs0b8I5uyLniJtfgYbgDcfYCsimavPgJTAz5bufW7cWJC&X-Amz-Signature=bf94bee35ce8eb88126ec27fdb5be5c9a4437fd0ed00408062acf2141ef9ece3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
