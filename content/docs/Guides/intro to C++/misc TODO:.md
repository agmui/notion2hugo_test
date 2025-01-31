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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZOXPON%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtOAvF3CJ9%2FzZIKNZpkzi1uIWBzvyYo4DmLYBguA%2FtxwIgfywur8Dj%2B5AQnIS5GVkv%2B7lppttyrh42ISJ8cux6fikqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd9jxRZNMz6Fo%2BHqyrcA07SHh0QHwYwxkeNTT9xMG0vlApAjH04XCzisL6cb243IXmDR5VaPSK5CkE09CJhIl%2FTRnLYDOsO6f6sqU0YeHoMN2NuqSOMxi82IoQZN9MC7b1TB3ki2oeVmGg88l2QEqShL5Tvqk0%2FNzqm4mPgQyBMWnoXQaNytbTuw10nU66dClT7uMyvtxs1clcg2B3EgFKQS4t9Y9ggA0J2LxmxibHca7tPkOqOBga%2BoXpw6kxetO5B%2B9BRKQ2p%2F%2BkZ10EsBZeaBnbdjccoDqZNcEijay%2BYa66pAl%2FmeEinKe07sd2mv3fJU1n6g%2FnWKBUBGuBumM%2Bx9ugovnnk2%2FwsNsKaGyDkYgZ6IoErLUBMetd8O%2BLiPA8Cxv9zwDo7%2FiW6nMSMw77AdVv7%2BdUhgwt%2Bdq1dgu%2BtjjKVfIZasctbZ4E1vgpr5sYz%2FMfAI4jpdpMlYv%2Fy8jqXsrcYQRf1pTUz7zZhM7k9mIVc6zVT786ejckXI%2BsY28BpIYAY9SrQBEO6MGo%2Bvsjsed61QknxtuXnbHjWb4l%2FJUW%2FvhHqtZWxbBJ3irlyYQIWwXNWJFIViTIgrrsKFVKxyhzplqoUwSM4q64T9qA%2Frx3tYz02l4b6VD8n3Z8rEI40J1VVS1cWzWkuMIP79LwGOqUBALrPfmp3uStDwgbSVkWYR3VeekqDWXZ908Fi6pHvyYkPFHx43me1%2BfR%2FMvmoz%2BB8GTKH2zZthw5mxc70d6tcwaNDSrQaaUdO5fXE0wHzCMlBk73jldhgczf2Kts1JY8hbkyc3TIJVxzbNTxUqeIRJjc5NbEDbWBqU%2B8ATiyim28sh%2F%2BhLX0G9QTOOxSXSwWqITzpleDEivfzsDxna1%2BYjfecSfoS&X-Amz-Signature=20c7f5898f5f25f837291d1d77098e120fe05963935bfb4d2c349c18ec059788&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZOXPON%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtOAvF3CJ9%2FzZIKNZpkzi1uIWBzvyYo4DmLYBguA%2FtxwIgfywur8Dj%2B5AQnIS5GVkv%2B7lppttyrh42ISJ8cux6fikqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd9jxRZNMz6Fo%2BHqyrcA07SHh0QHwYwxkeNTT9xMG0vlApAjH04XCzisL6cb243IXmDR5VaPSK5CkE09CJhIl%2FTRnLYDOsO6f6sqU0YeHoMN2NuqSOMxi82IoQZN9MC7b1TB3ki2oeVmGg88l2QEqShL5Tvqk0%2FNzqm4mPgQyBMWnoXQaNytbTuw10nU66dClT7uMyvtxs1clcg2B3EgFKQS4t9Y9ggA0J2LxmxibHca7tPkOqOBga%2BoXpw6kxetO5B%2B9BRKQ2p%2F%2BkZ10EsBZeaBnbdjccoDqZNcEijay%2BYa66pAl%2FmeEinKe07sd2mv3fJU1n6g%2FnWKBUBGuBumM%2Bx9ugovnnk2%2FwsNsKaGyDkYgZ6IoErLUBMetd8O%2BLiPA8Cxv9zwDo7%2FiW6nMSMw77AdVv7%2BdUhgwt%2Bdq1dgu%2BtjjKVfIZasctbZ4E1vgpr5sYz%2FMfAI4jpdpMlYv%2Fy8jqXsrcYQRf1pTUz7zZhM7k9mIVc6zVT786ejckXI%2BsY28BpIYAY9SrQBEO6MGo%2Bvsjsed61QknxtuXnbHjWb4l%2FJUW%2FvhHqtZWxbBJ3irlyYQIWwXNWJFIViTIgrrsKFVKxyhzplqoUwSM4q64T9qA%2Frx3tYz02l4b6VD8n3Z8rEI40J1VVS1cWzWkuMIP79LwGOqUBALrPfmp3uStDwgbSVkWYR3VeekqDWXZ908Fi6pHvyYkPFHx43me1%2BfR%2FMvmoz%2BB8GTKH2zZthw5mxc70d6tcwaNDSrQaaUdO5fXE0wHzCMlBk73jldhgczf2Kts1JY8hbkyc3TIJVxzbNTxUqeIRJjc5NbEDbWBqU%2B8ATiyim28sh%2F%2BhLX0G9QTOOxSXSwWqITzpleDEivfzsDxna1%2BYjfecSfoS&X-Amz-Signature=2a7a1e06f55e154888f82c465615cfa176f7d1784bb9ca6b5483127e262406e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
