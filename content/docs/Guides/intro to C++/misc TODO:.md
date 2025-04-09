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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PH74GWS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB2Ad8OjzcAgOE2EjM3I%2B2mYvvyfA8rRi1xOGZnWqvmlAiEA25REbzjYfQbgwRTR9ag6DWxgjAbbcigdyMTw6VvN9T4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITWyNdgw77yEJ2BZCrcA6HWkMI%2B50UKL4uSFejcqgI8S%2FkgBBm3t%2Fca7l2Bo%2FqHK3SnEzkCtts6NwFX%2FVtIGza88jf7kqlhPqY9IXhBZYh18nRYIq1Ef4ffdkcHTTPuFtQJew9eRPyUcspiLyJW3AoTo3R8ZVxM0bzTn4btl4SZoBJtbDdhAgzQh9vdew%2BhKREccv89USUThp6eqClotucqCoT%2BlknmpGLCKILTvi9xnVEpTse9EDO1YJxmOU8x6VWXjoz%2FOJjNGjrvUwr4p1ZX5AyyUwGXs1lDOxOPHhnUkKFdW2ebh4Vsta41CAOnInzRI1mZhPAqIJDV7RZMtsNfUmD6hkkSXRri7W%2FCCky2bNAWfsCNcEEUh1LNupr7u11y79jLnrKXDPrdmlt7JNcyj4VmvViU%2Ba%2BBOzO4GTiypsOGY6rrcLGFFnpx%2FzCZdvJQ4M%2FjOLZx%2FRK7iKqDOC4aKmq8SVG%2F%2B%2BdNiNJDMel2i%2F4iv2qncPebcFVgL1UUpof8IioyIXebiK5aZDE7%2B0cNTzsbQG2QjVmz8JklfhndwOiEqco2HPR4nBFzdCxojnqYSlEyToGOFaCL4XqS%2FwN8ZK96sP8hNFrwL77C4mOAtpM6hyc01uP1pGUEgO%2FuQK%2FuFwsrYbNXzAwWMIDX178GOqUBVffB4Nvw1PKJhke5CFPujmJAYJ3gpYVYoMiFPL6iuxAxpcaWYTcpmmnZEWt9r9pz5xV6TAZAvy75Kf%2FSLgfXQ%2Fy6slzky9A3MkSdrzBVi3WhEerJyj4tYFvjV4yrwnV2dTuRa7%2FaPa6vxduxJYj9YJ1URKbZQrYeYxx9Q96yUpGS66R%2BMfmStWZ48DNy40VZhjKnGLv2s9zrBNvdIq6cm4Vwd%2BEz&X-Amz-Signature=df3eaacae73a5b352e1de96b4e60c0e7a7418b9de6f237a48cb5a2a15e3c69c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PH74GWS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIB2Ad8OjzcAgOE2EjM3I%2B2mYvvyfA8rRi1xOGZnWqvmlAiEA25REbzjYfQbgwRTR9ag6DWxgjAbbcigdyMTw6VvN9T4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITWyNdgw77yEJ2BZCrcA6HWkMI%2B50UKL4uSFejcqgI8S%2FkgBBm3t%2Fca7l2Bo%2FqHK3SnEzkCtts6NwFX%2FVtIGza88jf7kqlhPqY9IXhBZYh18nRYIq1Ef4ffdkcHTTPuFtQJew9eRPyUcspiLyJW3AoTo3R8ZVxM0bzTn4btl4SZoBJtbDdhAgzQh9vdew%2BhKREccv89USUThp6eqClotucqCoT%2BlknmpGLCKILTvi9xnVEpTse9EDO1YJxmOU8x6VWXjoz%2FOJjNGjrvUwr4p1ZX5AyyUwGXs1lDOxOPHhnUkKFdW2ebh4Vsta41CAOnInzRI1mZhPAqIJDV7RZMtsNfUmD6hkkSXRri7W%2FCCky2bNAWfsCNcEEUh1LNupr7u11y79jLnrKXDPrdmlt7JNcyj4VmvViU%2Ba%2BBOzO4GTiypsOGY6rrcLGFFnpx%2FzCZdvJQ4M%2FjOLZx%2FRK7iKqDOC4aKmq8SVG%2F%2B%2BdNiNJDMel2i%2F4iv2qncPebcFVgL1UUpof8IioyIXebiK5aZDE7%2B0cNTzsbQG2QjVmz8JklfhndwOiEqco2HPR4nBFzdCxojnqYSlEyToGOFaCL4XqS%2FwN8ZK96sP8hNFrwL77C4mOAtpM6hyc01uP1pGUEgO%2FuQK%2FuFwsrYbNXzAwWMIDX178GOqUBVffB4Nvw1PKJhke5CFPujmJAYJ3gpYVYoMiFPL6iuxAxpcaWYTcpmmnZEWt9r9pz5xV6TAZAvy75Kf%2FSLgfXQ%2Fy6slzky9A3MkSdrzBVi3WhEerJyj4tYFvjV4yrwnV2dTuRa7%2FaPa6vxduxJYj9YJ1URKbZQrYeYxx9Q96yUpGS66R%2BMfmStWZ48DNy40VZhjKnGLv2s9zrBNvdIq6cm4Vwd%2BEz&X-Amz-Signature=2fd8120990ece3bfaf17882423a4f0eea7a0f84d25221487d7c45e916b2c5fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
