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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JPQY5NU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC8jme2xrTg7jNsnOTkzClny5Xd9IrtEoorQk8E8RX32AiBi0GBTuzMz1Qdqp9wa7lzDSPLRbzjoldyNW2p3hd1zkCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2BRy9u2WSJ4TAi5HKtwDdooPDcOL9J43GPo5yj3nyLogfa072bw1K0DkiKvGZY3o9HfgqVX3GRCqqB29LtzjmgSKgUB2MXLcAPhmVGHr9ACJ87zvh98ureeKOC17F2LEdbZ4xexob3XZlGiToxNq32UeyTbt6rm%2Fyb6qEaXaBCaXbqP3tU7ic9vIXDMoAfRkobaw3pSDcaPRdMTjXrT%2FbLFU49dfuR54mogPOOBbHuePEFtCMyD3nt%2Fe1RDlbh6nJvglZtClNF5M58D0cab7wSmYBAzFHI7FvwMAm%2FEQS6%2BZcztLLt%2FsZfHsXftHofjhlHNOqzdm01V9kRNdtyfYamDeOKXEWUeJWqhjj7QrqMbkmA6XfI4gEnSuiDFpsQ5d%2Fb0GurwRpiDxEqPSp8T2z%2Bv%2FUPhRN2C9xyBbwo6shwD3iPECcMK8BoDjSIU6pZZszbb8W86qxgfufngEyr6JC6IFegZzbgLFIWBVreWPWILhoyELP2wmYN8MnlOky7870FxBzRM8dR%2BhArrXZEGn5dL3maVanVy0SkxYmyGLPcA9EmpYN8Q3MeX3bjgWnHn8ScXXxYecma3KwC9Uv%2FjWz9mKlGTvlrjob2P93Ky0LaKfFz30xstc%2Bw1ByUEBj%2B4jQZyRqAm1kFK8VA8w4%2BSUwAY6pgFBW6KsxOLU6478QKjXof%2BmrOvPSb0RhmimQyJyFb%2F6vRIK%2BFYZ9%2Fugi6rzzCaSPjZISEXXqBz72G6YvSYZcNyfXCbj5izBjqgnppWkrPZf2RFn7Ah3z9R%2BbGJW5UyhSVl0C%2Bz6qadWaiFatBZNT5IJNdirhnNVDYP5Tm1YEAm4NMIzO2PCFww8%2FYRRVtDmHFIGMj9D7DhFZtGrReDLAgGGcgA4IOz9&X-Amz-Signature=f7e3fdc2d5ac988190e77a2ea0af2af1d751f42f16b5d376d65f8a559127a839&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JPQY5NU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC8jme2xrTg7jNsnOTkzClny5Xd9IrtEoorQk8E8RX32AiBi0GBTuzMz1Qdqp9wa7lzDSPLRbzjoldyNW2p3hd1zkCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2BRy9u2WSJ4TAi5HKtwDdooPDcOL9J43GPo5yj3nyLogfa072bw1K0DkiKvGZY3o9HfgqVX3GRCqqB29LtzjmgSKgUB2MXLcAPhmVGHr9ACJ87zvh98ureeKOC17F2LEdbZ4xexob3XZlGiToxNq32UeyTbt6rm%2Fyb6qEaXaBCaXbqP3tU7ic9vIXDMoAfRkobaw3pSDcaPRdMTjXrT%2FbLFU49dfuR54mogPOOBbHuePEFtCMyD3nt%2Fe1RDlbh6nJvglZtClNF5M58D0cab7wSmYBAzFHI7FvwMAm%2FEQS6%2BZcztLLt%2FsZfHsXftHofjhlHNOqzdm01V9kRNdtyfYamDeOKXEWUeJWqhjj7QrqMbkmA6XfI4gEnSuiDFpsQ5d%2Fb0GurwRpiDxEqPSp8T2z%2Bv%2FUPhRN2C9xyBbwo6shwD3iPECcMK8BoDjSIU6pZZszbb8W86qxgfufngEyr6JC6IFegZzbgLFIWBVreWPWILhoyELP2wmYN8MnlOky7870FxBzRM8dR%2BhArrXZEGn5dL3maVanVy0SkxYmyGLPcA9EmpYN8Q3MeX3bjgWnHn8ScXXxYecma3KwC9Uv%2FjWz9mKlGTvlrjob2P93Ky0LaKfFz30xstc%2Bw1ByUEBj%2B4jQZyRqAm1kFK8VA8w4%2BSUwAY6pgFBW6KsxOLU6478QKjXof%2BmrOvPSb0RhmimQyJyFb%2F6vRIK%2BFYZ9%2Fugi6rzzCaSPjZISEXXqBz72G6YvSYZcNyfXCbj5izBjqgnppWkrPZf2RFn7Ah3z9R%2BbGJW5UyhSVl0C%2Bz6qadWaiFatBZNT5IJNdirhnNVDYP5Tm1YEAm4NMIzO2PCFww8%2FYRRVtDmHFIGMj9D7DhFZtGrReDLAgGGcgA4IOz9&X-Amz-Signature=7e41b346144501f4a8a587b2c16038811f31ed440b9d965dc1f428df9e214470&X-Amz-SignedHeaders=host&x-id=GetObject)

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
