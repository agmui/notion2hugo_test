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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQ3GAZZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FQC9p%2BZl3lcNO9Tm5ddjgBiFtXLM9JsTsnPjPOhOXgIhAIDm1wSJ8xg37Au%2BugyG2vRfWKssmBiBABWA9k2lQIFuKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj3n%2F%2BQPunfUz8kXsq3AMjj3tJPAAMKp9lcxJ7qC3na2GrpvvgwKub1JhOwDOv5dEcZjzApBwo7OjrTKGPGeVIaXdF409%2BG5Sq135wlEJZRrpi1nY2ATVcgpp3W6l05DD%2BEtBDlFk9AzOJBjahg2jGUlSoOPRryCbcn5KqPQoXDamBLoKfCV2%2FYUYnjfjOyLdGx1jBypnY4SptufJBkCEArnWUMIqu92nkqG4guESK5A2slz0vXGU2ziHT6%2FdOBttK50j5KNQFOAmV1bP8wkKb6QYUfFjDurxON4OmX5ls%2FThlEizpJT4fgL59kCsDNkg4NP2sjKgLpJ3dM2sizUmD%2F4DMIypSoBxExBqkgftPLfqUsfBDvcbuWfDHyYv7XFZ%2BXXDu8IgdhRRbG2H1Tr1p4lhPVYs5O0Xk2AFax%2B0czhimadrCP5eKuA47%2BVT7klJeUsWEKCYQtRGEyfS0busx%2FFrOdt%2BBcVBcstJJJp3y1SYYVeuWwVfmlPvSvmeQBYb4emTmvOY06O%2FUNg%2FMnnkmueBAAZqETj6sf8RIHiuyveFuSMJMAzvsgEAPqwcG9DzFbj%2FQOOPDM7WAnrnj60IP2qcmYh%2FE%2Bm9OthawWeSl3RmBb0mN2YrVbDWaj3%2FQXFDImCJILt0hWGjGFDDi2Za%2BBjqkAfeparvlQGF4Eam8%2BmiLWBzy%2BRYdWlgoArnJvTLnk2TpSc%2FS61l5d8V2heceah4KhQVWA%2FA0p0wZo5y6gQRDeK80SRhq6qyPhKSMQfZ%2FoLxJmLO6wAa2FBdOH3KLFArcKRGt8LjFPLimob%2B5DvBdJZ%2BwkXQ4aLgLsBAiTiMSyVD7IkmkZPYjsJsPb%2BuKFJ73FSjicFlf9Mzi4qj84bdL1G7pw6wt&X-Amz-Signature=0e923e7d700d7c6319689dad1e986d2844bdf5afd803e4c0a0f04251dbe85fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQ3GAZZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FQC9p%2BZl3lcNO9Tm5ddjgBiFtXLM9JsTsnPjPOhOXgIhAIDm1wSJ8xg37Au%2BugyG2vRfWKssmBiBABWA9k2lQIFuKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj3n%2F%2BQPunfUz8kXsq3AMjj3tJPAAMKp9lcxJ7qC3na2GrpvvgwKub1JhOwDOv5dEcZjzApBwo7OjrTKGPGeVIaXdF409%2BG5Sq135wlEJZRrpi1nY2ATVcgpp3W6l05DD%2BEtBDlFk9AzOJBjahg2jGUlSoOPRryCbcn5KqPQoXDamBLoKfCV2%2FYUYnjfjOyLdGx1jBypnY4SptufJBkCEArnWUMIqu92nkqG4guESK5A2slz0vXGU2ziHT6%2FdOBttK50j5KNQFOAmV1bP8wkKb6QYUfFjDurxON4OmX5ls%2FThlEizpJT4fgL59kCsDNkg4NP2sjKgLpJ3dM2sizUmD%2F4DMIypSoBxExBqkgftPLfqUsfBDvcbuWfDHyYv7XFZ%2BXXDu8IgdhRRbG2H1Tr1p4lhPVYs5O0Xk2AFax%2B0czhimadrCP5eKuA47%2BVT7klJeUsWEKCYQtRGEyfS0busx%2FFrOdt%2BBcVBcstJJJp3y1SYYVeuWwVfmlPvSvmeQBYb4emTmvOY06O%2FUNg%2FMnnkmueBAAZqETj6sf8RIHiuyveFuSMJMAzvsgEAPqwcG9DzFbj%2FQOOPDM7WAnrnj60IP2qcmYh%2FE%2Bm9OthawWeSl3RmBb0mN2YrVbDWaj3%2FQXFDImCJILt0hWGjGFDDi2Za%2BBjqkAfeparvlQGF4Eam8%2BmiLWBzy%2BRYdWlgoArnJvTLnk2TpSc%2FS61l5d8V2heceah4KhQVWA%2FA0p0wZo5y6gQRDeK80SRhq6qyPhKSMQfZ%2FoLxJmLO6wAa2FBdOH3KLFArcKRGt8LjFPLimob%2B5DvBdJZ%2BwkXQ4aLgLsBAiTiMSyVD7IkmkZPYjsJsPb%2BuKFJ73FSjicFlf9Mzi4qj84bdL1G7pw6wt&X-Amz-Signature=6a9dc6b6955edee8b3accbc9dc5f9a170ba62fef5341d9ed61bbc96e7fcab300&X-Amz-SignedHeaders=host&x-id=GetObject)

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
