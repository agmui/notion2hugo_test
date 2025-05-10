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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVLG6LW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvMp9LhbHw3Svo5FHZ4%2F8UE7YfkTdE247DTNNUDn%2BSwAiEAwA2713UDB8T9mxP7ffG24Gyu4x9FQBYYbhpsuKdH7rYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpk6X0X3vDcLnhG0CrcAwGDRoGoo6%2BpG3E0R9yRj9SIUzEnyBe70gH4ECb4Tw4Ga47A9mro%2BAmOLtFEbIDQWMc%2FzjSHzK8DMKlbaWPOY%2BAdK26Hrt7APWSuzrTBmVR%2F9nmHk9RyBoN22iiXOv2dFXtLHq%2BkC837P8RRSbQmPxKunJMLYDkEtWmcHJ7bRPDaNGUilCjXutzaxkgaT6M9PRZGIJ9X%2FkJbY8vv3we9HwCqY%2BLFYhEOdoQAJG9Ct8tO%2BxUQ9sYQ3tyWYb3K8Psbo30z3wjGIRrVhbpObLDrJYHI72fRXP49U%2FDXQHrAWjMtf5NX17LYgCLuLxQ3J%2B5T7nLPVk%2BgDaSONfxr9a7PL%2B0hndvqWL9I21PRJwLuKs0j%2BczAG29omSyupwfg%2Bdrr43ZuAVzDdyGgYdPoU1vMJ5FeM1TwrHBBSPKllolt62LYJ6NCN6CvE%2Be%2BptZNfuFkOFx3qjw1g44YBKnqgPHWk6afH6hZ%2FyVmWr8jk3v%2Bu%2FQdbEflgi8IG%2FbxtBtoM3RFY0I9sLUKtoHxhvqaNwgSbQWGd2Bnnv1eFdjRRdSiOyJ7jyarZNMl6oWrg2h39YLkaPh1SZ2wspE5l0tELFsrUR0f4Qn4zZVr1wWeuit5crlMBI1h5OXqqdJH4xXxML7W%2B8AGOqUB%2BQvMf7xZ5Vmf1JdaKLeHGt%2FwcsAYBVCRTRoymyIwL%2FS0f8HJUomwBPVQsjz1pjrzwpY9cAwQ8p%2FBQLyH%2Bb3drVTn22Jcy%2Fvh3NyejVD%2FPkdyMwdOHuxiLZeRaHM%2BINLboTmh%2F%2FvS53MV31Ke7m1YzKRQjRos4GdW01CX6uXdhItVik%2FAVH2rSyW0L9ZIziI4dCp%2FLwjB4O%2F655XvzJHG7xnBbN60&X-Amz-Signature=e0686a5cd3c7bd9318de3d28231930cd61e037c9567151c5ffd2d264a041fa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVLG6LW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvMp9LhbHw3Svo5FHZ4%2F8UE7YfkTdE247DTNNUDn%2BSwAiEAwA2713UDB8T9mxP7ffG24Gyu4x9FQBYYbhpsuKdH7rYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpk6X0X3vDcLnhG0CrcAwGDRoGoo6%2BpG3E0R9yRj9SIUzEnyBe70gH4ECb4Tw4Ga47A9mro%2BAmOLtFEbIDQWMc%2FzjSHzK8DMKlbaWPOY%2BAdK26Hrt7APWSuzrTBmVR%2F9nmHk9RyBoN22iiXOv2dFXtLHq%2BkC837P8RRSbQmPxKunJMLYDkEtWmcHJ7bRPDaNGUilCjXutzaxkgaT6M9PRZGIJ9X%2FkJbY8vv3we9HwCqY%2BLFYhEOdoQAJG9Ct8tO%2BxUQ9sYQ3tyWYb3K8Psbo30z3wjGIRrVhbpObLDrJYHI72fRXP49U%2FDXQHrAWjMtf5NX17LYgCLuLxQ3J%2B5T7nLPVk%2BgDaSONfxr9a7PL%2B0hndvqWL9I21PRJwLuKs0j%2BczAG29omSyupwfg%2Bdrr43ZuAVzDdyGgYdPoU1vMJ5FeM1TwrHBBSPKllolt62LYJ6NCN6CvE%2Be%2BptZNfuFkOFx3qjw1g44YBKnqgPHWk6afH6hZ%2FyVmWr8jk3v%2Bu%2FQdbEflgi8IG%2FbxtBtoM3RFY0I9sLUKtoHxhvqaNwgSbQWGd2Bnnv1eFdjRRdSiOyJ7jyarZNMl6oWrg2h39YLkaPh1SZ2wspE5l0tELFsrUR0f4Qn4zZVr1wWeuit5crlMBI1h5OXqqdJH4xXxML7W%2B8AGOqUB%2BQvMf7xZ5Vmf1JdaKLeHGt%2FwcsAYBVCRTRoymyIwL%2FS0f8HJUomwBPVQsjz1pjrzwpY9cAwQ8p%2FBQLyH%2Bb3drVTn22Jcy%2Fvh3NyejVD%2FPkdyMwdOHuxiLZeRaHM%2BINLboTmh%2F%2FvS53MV31Ke7m1YzKRQjRos4GdW01CX6uXdhItVik%2FAVH2rSyW0L9ZIziI4dCp%2FLwjB4O%2F655XvzJHG7xnBbN60&X-Amz-Signature=aa7b5cc69888ca00966704a741f2b50cfc3231a2706f91bdaaaa1093fdd3331d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
