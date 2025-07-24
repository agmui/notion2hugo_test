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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6XIQR2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIA6zvSWEbSfEZqnatcILg4%2FXyIHNEfBu9TmIjuI9AHGxAiBwzc833eaWgIA2N6rM3ICWlgbkTuXiOB2sNCuj3c7FMCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrA9FYhlO6uN3b5gYKtwDz9Y3mgH8uFcx9DVS5uJ2e9J%2Fem86yaqcy12tJtf57U9vK91DlEMbbVqbY7gjVu0aKhWAlbAGXz90dXeBTrbEV69Dr8qEBRWM58OG99zNaHY%2FMqaqRpQQmmGsYqK9UHsRiVYSRVoJX1aevrb2tHRnwPIInJGQ%2B1BSKJNSw5E618RJCnvTymKI6jE9m5gQJxxX9olVZlof8TWua%2FCn%2FGbWDmRm2N59Kogpb0b7mYQoOCKLZr5a7nM77CoJl37wed%2FX3SHhNXrg5x89kYC3inFTHP3AKVY3rLpX9pE8AmZWQc%2BhPzxOXm10m6S%2FF3lId%2FB%2FdUIidX41XfVSMhRPnvO4N%2FTPEwFafUrMriDj%2B%2BzqR3xHPVSFNxhNBXT%2Boqu0goWeuZkDbwixjqcIJNtZVzMTu3vO3t%2Bw4fjUCere6I124UrVDPuJ14y7rbOEpyYOjWQ2ObaGnoDis9ghWi2VVyESrjbLKaqoGbxwfTclF4p4Kj%2Fg7hjwhO5lgF7t8puKgEOgsofPpNhOsYPU4PSBXGpX0s23l6iP71g6VHVYdGRi%2FuDWfH4w4ksMgGcLjWu4Kro%2BiCR%2BZch%2FwWmXQz0TzTuzYwabvYdhULaR5ciora%2BbBtWAGcJ5LRIG%2FFRPdGYw09eKxAY6pgHdOywhz%2FMKHPE795eiUyxgarwr9ZIHOEabDMWz%2FXSArNyA3H5WO%2BScPDpakyY%2BL2P7BtKS4ifT3JrWdQROaSgAjaAj2%2B1KhnxhbxmXmCDoBxPsabXdQsLZ9xUBh90AR%2BwFhuZxomw0IzU1RlcyequUwCfDe7dZ9hH4sdcMtCWvQwWEWqMZVnS2uGKhCCEyCa9TittTaRSeUeGh9c0YFM69vecjajFg&X-Amz-Signature=efda936c89911ca53a7e88c03b4243505d13d4a35f9c34f6e05d6da4699171c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6XIQR2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIA6zvSWEbSfEZqnatcILg4%2FXyIHNEfBu9TmIjuI9AHGxAiBwzc833eaWgIA2N6rM3ICWlgbkTuXiOB2sNCuj3c7FMCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrA9FYhlO6uN3b5gYKtwDz9Y3mgH8uFcx9DVS5uJ2e9J%2Fem86yaqcy12tJtf57U9vK91DlEMbbVqbY7gjVu0aKhWAlbAGXz90dXeBTrbEV69Dr8qEBRWM58OG99zNaHY%2FMqaqRpQQmmGsYqK9UHsRiVYSRVoJX1aevrb2tHRnwPIInJGQ%2B1BSKJNSw5E618RJCnvTymKI6jE9m5gQJxxX9olVZlof8TWua%2FCn%2FGbWDmRm2N59Kogpb0b7mYQoOCKLZr5a7nM77CoJl37wed%2FX3SHhNXrg5x89kYC3inFTHP3AKVY3rLpX9pE8AmZWQc%2BhPzxOXm10m6S%2FF3lId%2FB%2FdUIidX41XfVSMhRPnvO4N%2FTPEwFafUrMriDj%2B%2BzqR3xHPVSFNxhNBXT%2Boqu0goWeuZkDbwixjqcIJNtZVzMTu3vO3t%2Bw4fjUCere6I124UrVDPuJ14y7rbOEpyYOjWQ2ObaGnoDis9ghWi2VVyESrjbLKaqoGbxwfTclF4p4Kj%2Fg7hjwhO5lgF7t8puKgEOgsofPpNhOsYPU4PSBXGpX0s23l6iP71g6VHVYdGRi%2FuDWfH4w4ksMgGcLjWu4Kro%2BiCR%2BZch%2FwWmXQz0TzTuzYwabvYdhULaR5ciora%2BbBtWAGcJ5LRIG%2FFRPdGYw09eKxAY6pgHdOywhz%2FMKHPE795eiUyxgarwr9ZIHOEabDMWz%2FXSArNyA3H5WO%2BScPDpakyY%2BL2P7BtKS4ifT3JrWdQROaSgAjaAj2%2B1KhnxhbxmXmCDoBxPsabXdQsLZ9xUBh90AR%2BwFhuZxomw0IzU1RlcyequUwCfDe7dZ9hH4sdcMtCWvQwWEWqMZVnS2uGKhCCEyCa9TittTaRSeUeGh9c0YFM69vecjajFg&X-Amz-Signature=371667957ff404a2f696ef6b333167142ebdd2d98e0f31c24699ca8d530231d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
