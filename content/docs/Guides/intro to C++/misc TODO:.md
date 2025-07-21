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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNCESIV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gJ6H%2Ba6QJCIJVZsX1ANqM5TwNHVAT%2B4lLtjjFlXjZAiEAvRxDw7GY9THaqjfDEhdnOKQWJTo7W9wLBsSg5eNmCokqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPGJXsQ3IEyoKbE6SrcAz%2F7e0p5TtTLDo%2BiztoHnLCFHzEMf15Ntnx%2BGxkJPuR06h43mdNe4NiKc8amJqAXM207pNoY8PNdmY4DBsHoUOr1jGe9DjXn9Ka%2BzvrU%2F%2F%2FwXHTkctbbjB3hHeuArhj9tBD%2B7gdbi0v7OV17CJ0mHebfjhecj41dWJS%2Fv3mZhTS%2BM6Vif2Bj%2FiztAfBqW6SPIOzb%2FvxI%2BE9lGIYuJiBQOxloXPeMTVtw8ggeIiy%2BAJEM4aK2yWblSlNvL69i69EkdvnRjAaiy%2Fz5R3TBoP58I%2BaNH2nq%2FuaSpMJe8rwanw2zcotBX%2BmMVSEO0ARtZLE06sFHnOXNYb4pyZ3929uVFxeRvHSqRzZ%2B2M8ClID8vQYn9z3pwjE3%2BwH86PLSXxuoFZNT58dpvSat4GbOrRd9T3aI5CAi7sjAd2FLIRcoqgBKAJrwNpI2U5JRQnfjCBpxDC0LZ2kx2iT03x5UvZBS9WQcDLm9zezTRagCN%2FWQEH%2Brcg9QhvzzC6spPZv%2BxfXcfongxG6Y6COS31BUuHbHmY6lhYbUMIWtYLtY0WutKSQNQ0B%2FxJMuAg%2BkNCPCJzxIPn%2BJdEOP%2Fcqmg5JKJyZf15TspvI1xKfgcRvLbC%2FDIlij6vy4OunRgTvlyYlJMILo%2BcMGOqUBU0qrcvsjtke7z4pP%2BggtMwZcF1B6TqSaRkB00mZ96eg0mw83fyqKMK2rPaKiswtXYDLpglRUGaNrH48TYdjeoKx8T4edgoARyTjxHC5IwZSjjpk76Av32PNSEpcMTsnGPHAxbyUirV7zUX%2BaL5oMggzSNBLDoUQ1SPa9D4uXsRUdtWjobF7YE8DzrGrJ8AUViTchZwbdI6PA9VbyNv%2FY%2BJYzuT7R&X-Amz-Signature=47ce1387a15bb40857785a67bcc030a6e650234519bb569dd4cdfebdf5d6f146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNCESIV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gJ6H%2Ba6QJCIJVZsX1ANqM5TwNHVAT%2B4lLtjjFlXjZAiEAvRxDw7GY9THaqjfDEhdnOKQWJTo7W9wLBsSg5eNmCokqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPGJXsQ3IEyoKbE6SrcAz%2F7e0p5TtTLDo%2BiztoHnLCFHzEMf15Ntnx%2BGxkJPuR06h43mdNe4NiKc8amJqAXM207pNoY8PNdmY4DBsHoUOr1jGe9DjXn9Ka%2BzvrU%2F%2F%2FwXHTkctbbjB3hHeuArhj9tBD%2B7gdbi0v7OV17CJ0mHebfjhecj41dWJS%2Fv3mZhTS%2BM6Vif2Bj%2FiztAfBqW6SPIOzb%2FvxI%2BE9lGIYuJiBQOxloXPeMTVtw8ggeIiy%2BAJEM4aK2yWblSlNvL69i69EkdvnRjAaiy%2Fz5R3TBoP58I%2BaNH2nq%2FuaSpMJe8rwanw2zcotBX%2BmMVSEO0ARtZLE06sFHnOXNYb4pyZ3929uVFxeRvHSqRzZ%2B2M8ClID8vQYn9z3pwjE3%2BwH86PLSXxuoFZNT58dpvSat4GbOrRd9T3aI5CAi7sjAd2FLIRcoqgBKAJrwNpI2U5JRQnfjCBpxDC0LZ2kx2iT03x5UvZBS9WQcDLm9zezTRagCN%2FWQEH%2Brcg9QhvzzC6spPZv%2BxfXcfongxG6Y6COS31BUuHbHmY6lhYbUMIWtYLtY0WutKSQNQ0B%2FxJMuAg%2BkNCPCJzxIPn%2BJdEOP%2Fcqmg5JKJyZf15TspvI1xKfgcRvLbC%2FDIlij6vy4OunRgTvlyYlJMILo%2BcMGOqUBU0qrcvsjtke7z4pP%2BggtMwZcF1B6TqSaRkB00mZ96eg0mw83fyqKMK2rPaKiswtXYDLpglRUGaNrH48TYdjeoKx8T4edgoARyTjxHC5IwZSjjpk76Av32PNSEpcMTsnGPHAxbyUirV7zUX%2BaL5oMggzSNBLDoUQ1SPa9D4uXsRUdtWjobF7YE8DzrGrJ8AUViTchZwbdI6PA9VbyNv%2FY%2BJYzuT7R&X-Amz-Signature=b141e11053724e6c04535aaa59cfb6a5e173097000d09d3f5bc7a06f06492140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
