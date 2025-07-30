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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFBOF7W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5orDnPb8YbWJ3aI7sHLdrEzlXM6a0mJ0VH96W5yffQIhANOGMDISkd6n3wqw6pkmnCEb5ICPqk0WWWj0B6FcueHGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjwbo8SHEKZkAFC3Mq3ANNaSHneCcUcw%2BhizJfcBLxAhyt6xUioGVFKmGw8FwJqUEhop003zRPVBzroD2PMY4vxwXrl%2BidqarXSkXiIqlEqEqSu%2B%2B6%2BF6uwQM9Jb8XgM4pWXeQJqhZjP57F93cEeNFzCX2hJa4sBsa0Dyk84Ocg1dS6h5xAWIB0jEp55u0HBXFgVH5CZF7QUBJYVKJSoY%2BTQm1P3qJuwh0e%2FPiVCPKcwj%2BSFulCqHb7d8RbCcQwg17HhiM%2BFOXfVXiLAfFKRUj2izgkHAlE%2FYuaFGXnybc1PP8Rzq%2FN8M9KbM7O88pvnPwWXvGlqRu9YX5dTxfx%2Fr8U%2BeAJIRBiC%2FgEsula5yvGr3bmXFe3uAmqNuwacjMTmfiWk%2FygOjQh0RZz7qlKlNXw4CnDiE2EPWcq%2BNMutiM%2BgY%2FSatZN6xN6cXObZiJ8WMuzqm25g7w4zBbx9oPrTNUmRyOIvw5hdIaV2uD3I3p1P38H4%2BzKIYQVArmno69E6iq4vSFb3F%2BeXz7Ubs7VyyK%2B2qamV9h6W%2FYyyno1wCN82N5kywVKBxiTGFGa%2BxinvSpaqr1xuA%2FbVFT%2F%2FqcWkvsXGakILTsemNRddbzrON4NaIzw%2BtdXnn%2BWE9h7uhv42ZoV1gIGQo6tm45MjCx8qXEBjqkAQhqh4Ug%2FtgroVYpsCL27VY17btU6uhe0QJclSP%2Bgu0oJSmgS05sJLA9ORy81jed6lkawXAquU6qISRUGxEGMnHzFd0wpsRlsHvKQBvE9JG7sbxehUd7Uix%2FjUR6Z0db2u%2F6sZP5ssmzq3mo3Axu7fbVWqZxnnL64EJVSXQnRZCUS0sQZ7r0b%2BWA6dpqojRydJ9d9RhSwBqlOgXt8NVRa%2BJgWMFH&X-Amz-Signature=c6dbc8d7efe473c20e30ca8b42a0005d3d827660afa2a40eb373bd31e45388f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFBOF7W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5orDnPb8YbWJ3aI7sHLdrEzlXM6a0mJ0VH96W5yffQIhANOGMDISkd6n3wqw6pkmnCEb5ICPqk0WWWj0B6FcueHGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjwbo8SHEKZkAFC3Mq3ANNaSHneCcUcw%2BhizJfcBLxAhyt6xUioGVFKmGw8FwJqUEhop003zRPVBzroD2PMY4vxwXrl%2BidqarXSkXiIqlEqEqSu%2B%2B6%2BF6uwQM9Jb8XgM4pWXeQJqhZjP57F93cEeNFzCX2hJa4sBsa0Dyk84Ocg1dS6h5xAWIB0jEp55u0HBXFgVH5CZF7QUBJYVKJSoY%2BTQm1P3qJuwh0e%2FPiVCPKcwj%2BSFulCqHb7d8RbCcQwg17HhiM%2BFOXfVXiLAfFKRUj2izgkHAlE%2FYuaFGXnybc1PP8Rzq%2FN8M9KbM7O88pvnPwWXvGlqRu9YX5dTxfx%2Fr8U%2BeAJIRBiC%2FgEsula5yvGr3bmXFe3uAmqNuwacjMTmfiWk%2FygOjQh0RZz7qlKlNXw4CnDiE2EPWcq%2BNMutiM%2BgY%2FSatZN6xN6cXObZiJ8WMuzqm25g7w4zBbx9oPrTNUmRyOIvw5hdIaV2uD3I3p1P38H4%2BzKIYQVArmno69E6iq4vSFb3F%2BeXz7Ubs7VyyK%2B2qamV9h6W%2FYyyno1wCN82N5kywVKBxiTGFGa%2BxinvSpaqr1xuA%2FbVFT%2F%2FqcWkvsXGakILTsemNRddbzrON4NaIzw%2BtdXnn%2BWE9h7uhv42ZoV1gIGQo6tm45MjCx8qXEBjqkAQhqh4Ug%2FtgroVYpsCL27VY17btU6uhe0QJclSP%2Bgu0oJSmgS05sJLA9ORy81jed6lkawXAquU6qISRUGxEGMnHzFd0wpsRlsHvKQBvE9JG7sbxehUd7Uix%2FjUR6Z0db2u%2F6sZP5ssmzq3mo3Axu7fbVWqZxnnL64EJVSXQnRZCUS0sQZ7r0b%2BWA6dpqojRydJ9d9RhSwBqlOgXt8NVRa%2BJgWMFH&X-Amz-Signature=4e86cc7af2d48daab45fe8246f432932836385be44f97264973ed6501f443ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
