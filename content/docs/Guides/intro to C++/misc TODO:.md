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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676M7JBP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGgjWot0Nd1JfN9sZMh3MRIDgoqnxmziNZJf89aJXZokAiEA1TG4%2FfT8xjgmvq52yQoBWnQImgh8Mwlu81LSEskIsGsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8Gkm7KIL2Npo0uLircA%2FIZGDnp832N%2FLZYl%2B9sIlI%2Fnep4pfuDwcX6Kk%2BqwADqVb%2FY994qesQAu3bZ0zSaR0y6SQFLfElD2cbMtew21ip%2B9TvY2nfzCAM%2BUtQuWlmkQg%2BURv3hHFnOw2xOGrUOH%2BStsE4g9RDLLi2AziSVAYQCRW0g6%2Fup5Nxj87UeBLcD5B%2BqRFlLtuYrMZ4Sp8yCT50hJUKlmh7%2Fkj%2BMaoYnSgvSne407CMVYI6hkbV82HmNsCDF61M9jGpE3x2TBOmq2j4I9c4KPlKo6P95wWY0NFZhP%2FCNY8ExoXjRP4EIajajnznrkMICI78CqyNTIakTWYQsTsTtthhDFpru2pI%2BTNVB33GVLOxCK%2FQaSlyOW52a95Q01U6Ars%2FRDQUkAS35qe1dbOYwQVm%2BBds3%2BYd1xZYfoeA3X1KIkaPPd4UtRGftWAx8OhTqPkezp2AOlJckM3uLfQZIs6gSIBsDoRH%2FTwtCIN4ONUXo53uWbKTRy%2BpwPCQ78C8btF977xcvHQ1J8QFXZ8ZMe7r9gf7ey46SikwDszh3s0CHMetgQKkZuOVOXRgViNyRFhzDC%2FV9X2iQd%2BYLvCfAyT7cIX0Fuu1diiSbLswduk7AQ0L29iQAqrUzUbFSiAxr6iJTT7jJMM6E5rwGOqUBSDE%2B%2BTcDrF%2FIfWm0Vy10ApuCPbTM08NxkGZUg2v%2BxN4PtGcj5E0BaZ4iDRNShvCUd%2BDcFz%2B8%2B9GVlDAuqrSGJWYsXQW%2BnRU2G%2F%2BRyN2DMwYhKGhBgP7LezQUi1g%2Bly0aFFcAzhUXAjBqONzCbjdJ5I8OJCn7Zi3%2BIQqG9tBYXF%2BiYkG%2FO6cWHrIUC6e6QmrixNBNX5ksqx8XZvPaGex%2FZaHt%2F4Di&X-Amz-Signature=2c6ea641fe577fc238fb6048630eb82523a600576d29a75c1e13805736860009&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676M7JBP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGgjWot0Nd1JfN9sZMh3MRIDgoqnxmziNZJf89aJXZokAiEA1TG4%2FfT8xjgmvq52yQoBWnQImgh8Mwlu81LSEskIsGsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8Gkm7KIL2Npo0uLircA%2FIZGDnp832N%2FLZYl%2B9sIlI%2Fnep4pfuDwcX6Kk%2BqwADqVb%2FY994qesQAu3bZ0zSaR0y6SQFLfElD2cbMtew21ip%2B9TvY2nfzCAM%2BUtQuWlmkQg%2BURv3hHFnOw2xOGrUOH%2BStsE4g9RDLLi2AziSVAYQCRW0g6%2Fup5Nxj87UeBLcD5B%2BqRFlLtuYrMZ4Sp8yCT50hJUKlmh7%2Fkj%2BMaoYnSgvSne407CMVYI6hkbV82HmNsCDF61M9jGpE3x2TBOmq2j4I9c4KPlKo6P95wWY0NFZhP%2FCNY8ExoXjRP4EIajajnznrkMICI78CqyNTIakTWYQsTsTtthhDFpru2pI%2BTNVB33GVLOxCK%2FQaSlyOW52a95Q01U6Ars%2FRDQUkAS35qe1dbOYwQVm%2BBds3%2BYd1xZYfoeA3X1KIkaPPd4UtRGftWAx8OhTqPkezp2AOlJckM3uLfQZIs6gSIBsDoRH%2FTwtCIN4ONUXo53uWbKTRy%2BpwPCQ78C8btF977xcvHQ1J8QFXZ8ZMe7r9gf7ey46SikwDszh3s0CHMetgQKkZuOVOXRgViNyRFhzDC%2FV9X2iQd%2BYLvCfAyT7cIX0Fuu1diiSbLswduk7AQ0L29iQAqrUzUbFSiAxr6iJTT7jJMM6E5rwGOqUBSDE%2B%2BTcDrF%2FIfWm0Vy10ApuCPbTM08NxkGZUg2v%2BxN4PtGcj5E0BaZ4iDRNShvCUd%2BDcFz%2B8%2B9GVlDAuqrSGJWYsXQW%2BnRU2G%2F%2BRyN2DMwYhKGhBgP7LezQUi1g%2Bly0aFFcAzhUXAjBqONzCbjdJ5I8OJCn7Zi3%2BIQqG9tBYXF%2BiYkG%2FO6cWHrIUC6e6QmrixNBNX5ksqx8XZvPaGex%2FZaHt%2F4Di&X-Amz-Signature=696818f9dc385712d339d770224cb5e848aa829b59312b2646f2fa51f0c07c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
