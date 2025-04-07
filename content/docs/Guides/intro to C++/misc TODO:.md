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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2PYMJL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLis51M5%2B8EUcM5cWajXvtspci2Cfm330Z20FC7VFTKwIhALOhQxt4MFywoogfJDTyJUShCsLm7D2WtCf%2BnqF%2Fw2O7Kv8DCGUQABoMNjM3NDIzMTgzODA1IgzRlLWobYJTNhGEzkgq3AMCIJqYP7%2BK98yAo5QxD%2B7dsP4ElbP7mUrbFRCB19%2BsRgrceUkfVvw8Zg0CREB63EzQB01I1VNX%2B86Ja05ysbchkiuVhFRPGvmNxML%2Fb5lm%2BvMNJHFKwxi%2BsGX3axeFTYX8NAHN9YQrqs2E72JylyROf3fjZy4IYoG0YvBBuHE99D7NQTW%2BNFCf5mmQYgy4S8di1Q18TiayFX4dOjC3GO%2FR3yjgrj39Pph2CL1obt2xiDzFk9MyRu85H4jC7ZKukKXiSLDq8F579i0wBfxxsQHra7%2FvuBcP1Dkbqc3zma0KryHKocZ8OkkknoXpi%2BMwIb60qc2Lu7Tl%2FAg63LwalNhhzOOutVopv4tO6Vv5XJKRLGMZWCbmjmyV9oqGOeNyR54Io2hGJk7UmsP%2FsKW1QZe6JRQhHBc89HiEDrFwgwKLemQ4FBlhuvhmy7C7pIm4%2FlvOnYnIZu3fpqRErapHARzId8q1UhBat2zliNmuOixsRJHecXibX%2FWFtmeSXw%2Fu4%2FVP8pXVWY6zWJLbBexCQZ06sq7MOSvF%2BD9orHOYrkqyC%2BBBsbnFSz4znU3MqnSSozcsKdUfQkvPRO78DVZydpdwlCocDw%2FF2ndYeq4kugfyfq2xvpFYBXKfH6L2xTC85dC%2FBjqkAfYzYoReBCaIlnU44bqxXgERW75%2FlO%2FXRRpTUodZQyOHMOUEQTP1egwOUBrWCmG5ibVd2Wvqy324LVf7S2fw9SRlgyr9df49UmDIwUYaVKZDnIbclLqCj11ee41R41WMBDAovSbRwBj28U4PXaBB6yyOnybxf%2BIiMAWSe7XBsigWDDOPCBsByg6X1A8vp0y9nwhbP5k2srs434xa0UY%2FFgVb%2BT7R&X-Amz-Signature=75349baff9161ca9bbbd5909b68a6567fc03f81a91d260610f035eca68de7ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2PYMJL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLis51M5%2B8EUcM5cWajXvtspci2Cfm330Z20FC7VFTKwIhALOhQxt4MFywoogfJDTyJUShCsLm7D2WtCf%2BnqF%2Fw2O7Kv8DCGUQABoMNjM3NDIzMTgzODA1IgzRlLWobYJTNhGEzkgq3AMCIJqYP7%2BK98yAo5QxD%2B7dsP4ElbP7mUrbFRCB19%2BsRgrceUkfVvw8Zg0CREB63EzQB01I1VNX%2B86Ja05ysbchkiuVhFRPGvmNxML%2Fb5lm%2BvMNJHFKwxi%2BsGX3axeFTYX8NAHN9YQrqs2E72JylyROf3fjZy4IYoG0YvBBuHE99D7NQTW%2BNFCf5mmQYgy4S8di1Q18TiayFX4dOjC3GO%2FR3yjgrj39Pph2CL1obt2xiDzFk9MyRu85H4jC7ZKukKXiSLDq8F579i0wBfxxsQHra7%2FvuBcP1Dkbqc3zma0KryHKocZ8OkkknoXpi%2BMwIb60qc2Lu7Tl%2FAg63LwalNhhzOOutVopv4tO6Vv5XJKRLGMZWCbmjmyV9oqGOeNyR54Io2hGJk7UmsP%2FsKW1QZe6JRQhHBc89HiEDrFwgwKLemQ4FBlhuvhmy7C7pIm4%2FlvOnYnIZu3fpqRErapHARzId8q1UhBat2zliNmuOixsRJHecXibX%2FWFtmeSXw%2Fu4%2FVP8pXVWY6zWJLbBexCQZ06sq7MOSvF%2BD9orHOYrkqyC%2BBBsbnFSz4znU3MqnSSozcsKdUfQkvPRO78DVZydpdwlCocDw%2FF2ndYeq4kugfyfq2xvpFYBXKfH6L2xTC85dC%2FBjqkAfYzYoReBCaIlnU44bqxXgERW75%2FlO%2FXRRpTUodZQyOHMOUEQTP1egwOUBrWCmG5ibVd2Wvqy324LVf7S2fw9SRlgyr9df49UmDIwUYaVKZDnIbclLqCj11ee41R41WMBDAovSbRwBj28U4PXaBB6yyOnybxf%2BIiMAWSe7XBsigWDDOPCBsByg6X1A8vp0y9nwhbP5k2srs434xa0UY%2FFgVb%2BT7R&X-Amz-Signature=c14c66d908ba5c2070886c74037c0aeb75225bcd6b89c86cdbd24e97b0ff64fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
