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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CMZIFPS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SbqfXrjFzOQdKBSofdmUTqKrSx4Glitk5LJKsdk3yQIhANfYIiRWaX654to23X97JAmUhKK2gSsXvopJpINakbGyKv8DCDUQABoMNjM3NDIzMTgzODA1IgyqdI27C1X0MEDzw%2BEq3ANgbFYBIqYQ%2FcnSsSPP3CPDMblwxG5KRyOfu72XUP99J%2BfPcMIj2nK8fJe%2Bol%2FS7Iz45INJShr6d31z2OoKA8VtZtGCcjiYl3tPYoHy8uS3xANQ95uFCQq7F1nlnTxXTTGTWmlKaCR4PitRsUUHw0sWVIxC8FtAOepM1v%2FX81Lz6wui%2BDXP4SjzN3syY3QQSHMWsQ%2FnTfzjiOCeWq6lhrQVY7VEq%2FmWApE1JK7z7uF7UKLYVypUmBIizoMOG29o1AioYCMwNp5pAfWxQV5IBN7%2F5z%2FIsN4JvJpFMAAQED9lIAFa%2B%2FPWgOPdi4Z7SjcPV4XbKtnF5ZGYJF8p4%2BuKDxzJAlvNrQ5uiHQ2BFdpJEOTDb19V0lIq5ck1xkWK4CkKSKMknMMW8EopLK2R1DZgkb00OROvItXV%2BLjUxcA2i57CmMlJsefgd7eFO7aC2IO21AZnr5oRSmPNw27bXGHABjIX0DkF%2BfHO%2BmcZtxwPin92F%2F78aegkzRbcXIvOmQXRbGNj8kn27IHvaH54dhYyOlzIdkJQjAMjRFExROuAxZSzQF8zCe4FnZ1qbDevLL9tiz1SfeoTn9p2hXfsnOlrbhQzndEmECecQIBIMMLjLYhQNS%2F%2FNMIrYXE%2Bl9fjDCptJG%2FBjqkAZYbkKTXBOjUNh5lkojD6%2Bgy%2FYrVroyFqpMf7ItVvNkXEQ58Xbeom8EUHi8HoHB8PQmdaZxdLVcO%2BiYEnoF4%2FHuvjcaSQMqg96j6KNKYRHXsuJXB0eHU4h8mz4oJXOAoQe6e3xwkTQpghL4GfvNzFAXjWOsA830rf8%2FGpyzL%2FTtgp6sTIBxMKld9t4pLH5WCHG1zDi4usuWnzL1ZHEbRNtEfc7yc&X-Amz-Signature=db0fa0775e2c327116c7b80717169207957e452d27ac460e6d3a16714b13d320&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CMZIFPS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SbqfXrjFzOQdKBSofdmUTqKrSx4Glitk5LJKsdk3yQIhANfYIiRWaX654to23X97JAmUhKK2gSsXvopJpINakbGyKv8DCDUQABoMNjM3NDIzMTgzODA1IgyqdI27C1X0MEDzw%2BEq3ANgbFYBIqYQ%2FcnSsSPP3CPDMblwxG5KRyOfu72XUP99J%2BfPcMIj2nK8fJe%2Bol%2FS7Iz45INJShr6d31z2OoKA8VtZtGCcjiYl3tPYoHy8uS3xANQ95uFCQq7F1nlnTxXTTGTWmlKaCR4PitRsUUHw0sWVIxC8FtAOepM1v%2FX81Lz6wui%2BDXP4SjzN3syY3QQSHMWsQ%2FnTfzjiOCeWq6lhrQVY7VEq%2FmWApE1JK7z7uF7UKLYVypUmBIizoMOG29o1AioYCMwNp5pAfWxQV5IBN7%2F5z%2FIsN4JvJpFMAAQED9lIAFa%2B%2FPWgOPdi4Z7SjcPV4XbKtnF5ZGYJF8p4%2BuKDxzJAlvNrQ5uiHQ2BFdpJEOTDb19V0lIq5ck1xkWK4CkKSKMknMMW8EopLK2R1DZgkb00OROvItXV%2BLjUxcA2i57CmMlJsefgd7eFO7aC2IO21AZnr5oRSmPNw27bXGHABjIX0DkF%2BfHO%2BmcZtxwPin92F%2F78aegkzRbcXIvOmQXRbGNj8kn27IHvaH54dhYyOlzIdkJQjAMjRFExROuAxZSzQF8zCe4FnZ1qbDevLL9tiz1SfeoTn9p2hXfsnOlrbhQzndEmECecQIBIMMLjLYhQNS%2F%2FNMIrYXE%2Bl9fjDCptJG%2FBjqkAZYbkKTXBOjUNh5lkojD6%2Bgy%2FYrVroyFqpMf7ItVvNkXEQ58Xbeom8EUHi8HoHB8PQmdaZxdLVcO%2BiYEnoF4%2FHuvjcaSQMqg96j6KNKYRHXsuJXB0eHU4h8mz4oJXOAoQe6e3xwkTQpghL4GfvNzFAXjWOsA830rf8%2FGpyzL%2FTtgp6sTIBxMKld9t4pLH5WCHG1zDi4usuWnzL1ZHEbRNtEfc7yc&X-Amz-Signature=f6c2db28cd795fbfc08d1f49383fca90f8cc3dd3f68e68a0156d187a2daad294&X-Amz-SignedHeaders=host&x-id=GetObject)

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
