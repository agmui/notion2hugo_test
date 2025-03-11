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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YZVH6KX%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEr2twXAwbQ6LIt968fBDMN0jFu%2Be8u4WNL1vmWe4bFBAiEAw79VWkC5cChmeLcWeMfXVUcaAwwshETLIlyFJaBMFdAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZAXhFrGQkSI3SAUyrcAzyy59QS8yJ4RwQIcwRq%2Bf1YFW1h8f9ceBkoCv%2FtNbM2aOGiv%2Bf62YOI3aLCZJ88jfEGj8%2B84Nc7dfYuWKCQv%2F0NY4roJNU%2BqwQ6inR7fnI5QbAwCRMhNHh3GMXM0OjxBxjnC5BVjfkVrQW3eUuchYlT3GvGgHbduhZbgu%2B8TD94R1FKuXLdfLx8i%2Fz%2FN5%2BskAAyw%2BXIZTBrqzRzQsD6ucYAQB0Qm5sK80wTxNDO95vodQMS9zvCZJfFFxk%2FxRbdcfnW%2FT4KMloI0kuex%2FVHj4LZeEdJgz3zYEBOSNbayAk4a3cimExwdm55j3%2FSPPQ277sOOtjWMEXn8jIRuu6AR3CCDVLtfhxR92VPC3VPe%2FWpCB3WsSel1PNL0hUZgyeSNqzNqpOPIZAJ6KMvEvs%2FOtlejzkfhd9KT2CDmzc%2BRZyW%2BPhYlfgOl48LI2IcuN8a1qDy8WWOYm7gbTtJhNjENis02cYVV6JPaHrtxOOypYpbf%2Fsfdaol3kHf%2FXpObKQ2wrYkyxJnk6NbsVQOdQ0GE5qIcTw2Y4P85oKZeDeNQWamE2ib8aEMbNO8veKq01NantG4EW7LJQROF8NEHtEeb8%2F5OBm5sACxOZI5JKfWBqAdVO7sSzgCbBJjki25MKOQwr4GOqUBfBQ%2FnD7jeCsFPtpNiDWy%2BpAPUQgsaYx3BjZwfSXHw2NUHY8inktLJ5IhYvT3VY1%2Fm4K3dKwYXdiyK5bDSS0F4BAYLCJX1YMILhSgdlhNLKJL8p9iEttruM2Flzmg1M7L%2BhxuIv36x%2FiEyFcX%2B5pCHGQgfC5UmPnHhwe3v9QMRXWzdqL%2FDlOb6kjeHtl6YWuj2ksHBHx3cwWV4oPR6L5hWzwbYMRD&X-Amz-Signature=d110d6b40f18bbc2004aeffe6a339a26fc47c2d67f50688831f38ae72c1dbbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YZVH6KX%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEr2twXAwbQ6LIt968fBDMN0jFu%2Be8u4WNL1vmWe4bFBAiEAw79VWkC5cChmeLcWeMfXVUcaAwwshETLIlyFJaBMFdAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZAXhFrGQkSI3SAUyrcAzyy59QS8yJ4RwQIcwRq%2Bf1YFW1h8f9ceBkoCv%2FtNbM2aOGiv%2Bf62YOI3aLCZJ88jfEGj8%2B84Nc7dfYuWKCQv%2F0NY4roJNU%2BqwQ6inR7fnI5QbAwCRMhNHh3GMXM0OjxBxjnC5BVjfkVrQW3eUuchYlT3GvGgHbduhZbgu%2B8TD94R1FKuXLdfLx8i%2Fz%2FN5%2BskAAyw%2BXIZTBrqzRzQsD6ucYAQB0Qm5sK80wTxNDO95vodQMS9zvCZJfFFxk%2FxRbdcfnW%2FT4KMloI0kuex%2FVHj4LZeEdJgz3zYEBOSNbayAk4a3cimExwdm55j3%2FSPPQ277sOOtjWMEXn8jIRuu6AR3CCDVLtfhxR92VPC3VPe%2FWpCB3WsSel1PNL0hUZgyeSNqzNqpOPIZAJ6KMvEvs%2FOtlejzkfhd9KT2CDmzc%2BRZyW%2BPhYlfgOl48LI2IcuN8a1qDy8WWOYm7gbTtJhNjENis02cYVV6JPaHrtxOOypYpbf%2Fsfdaol3kHf%2FXpObKQ2wrYkyxJnk6NbsVQOdQ0GE5qIcTw2Y4P85oKZeDeNQWamE2ib8aEMbNO8veKq01NantG4EW7LJQROF8NEHtEeb8%2F5OBm5sACxOZI5JKfWBqAdVO7sSzgCbBJjki25MKOQwr4GOqUBfBQ%2FnD7jeCsFPtpNiDWy%2BpAPUQgsaYx3BjZwfSXHw2NUHY8inktLJ5IhYvT3VY1%2Fm4K3dKwYXdiyK5bDSS0F4BAYLCJX1YMILhSgdlhNLKJL8p9iEttruM2Flzmg1M7L%2BhxuIv36x%2FiEyFcX%2B5pCHGQgfC5UmPnHhwe3v9QMRXWzdqL%2FDlOb6kjeHtl6YWuj2ksHBHx3cwWV4oPR6L5hWzwbYMRD&X-Amz-Signature=b91f0016c7b4abfffd54c2bee8ca2837ac92e60ed54ea35dc716db868b00a371&X-Amz-SignedHeaders=host&x-id=GetObject)

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
