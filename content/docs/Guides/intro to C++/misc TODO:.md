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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PCYD3B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizZdFquwNEjLuGvD9LNfPQCkXLBPijUbaiF5VX6NYlwIhAM3Ikl1gPeVbQ%2B8CR5WWBUGNp5327J9%2B%2Fzq9AzAU1PANKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFjBUl%2BFfY1i2Wnkgq3AM648xJ8MHtWdfU5OzNSakw1ZKVrJwP5C%2F5PCDgXBXYD4exa3naiaHr8ABJ5sbYueenTc6qJSwzBetJEWVfVNwZBmgcgN3bfbX0V5a53ExtFEkiliooF6Q6HUcb8864l4F9bFSdsv%2FKaR6GJwUzxnVeP38kfyh9Zv5VSiuaH0VuJcnclSCfWqNoOk6qEglHybykPNXhYUL1yrq3F2U8XSJbchhXN666ZdRMFyCJg4hBg4hRTCch4fg9D1y3oKBLIHqL4QfzFA4QQU%2F%2BArhO5cPn67pHhY43dRQHJIvqvMR4s2768bZfCnEXzVWB4nyZ0Tz3eQ%2BiFmJnPu5uITnd%2FNQcO3LRdwSvySGPI%2F8EZMJWLET8c5WElMUyeULDYKoiaNBb%2BQhyl5ZHLOUNtEueMni2K11e%2BDXjPp1sVt1yNPSrPTmk619r7iLY1Gt1TknHDQkb45kdfvokBv%2FHC9DdjqKy45za7tguiInxSubc7y4dZERtAga2xKcWpsElJMzMaOFDRS8WghKB2MFlYCKL1GSYp96NjVA%2F59dM9%2Fw%2F059qp8G6vnzr%2F3pzPzUcLmDD0a5HF0RsWJtKsszDztYqukABLsyCPYzZOntBlVcFWnPiUwwXdv5Ko7N9uceZJjCn5p6%2BBjqkAWHHVQjQCeDqpYhXYfq20dL%2FTUJ%2FZ87ZlaoOFVZUyMcIyNnXXW9RnFlKvkNh8MfduJuHBu4tC%2B7A3ws3nNrC86qNWsfvx4FW1Fxf%2Fs3Xpwfs5f4Y3j5GPML2EudZIQ%2FH6xLCI76YGVQJD6qXBej8kaa%2F8ETpAYMDUwa8jwD6Lod2Ol9Mo13VN8NOMaZZUxsBF2XZLj9KYfkQtJYBHmhYXCv71xnO&X-Amz-Signature=01cd30db2d8425f4050a22df5746d4562b13ff2d6d431d35cd69d63206b22965&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PCYD3B%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizZdFquwNEjLuGvD9LNfPQCkXLBPijUbaiF5VX6NYlwIhAM3Ikl1gPeVbQ%2B8CR5WWBUGNp5327J9%2B%2Fzq9AzAU1PANKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFjBUl%2BFfY1i2Wnkgq3AM648xJ8MHtWdfU5OzNSakw1ZKVrJwP5C%2F5PCDgXBXYD4exa3naiaHr8ABJ5sbYueenTc6qJSwzBetJEWVfVNwZBmgcgN3bfbX0V5a53ExtFEkiliooF6Q6HUcb8864l4F9bFSdsv%2FKaR6GJwUzxnVeP38kfyh9Zv5VSiuaH0VuJcnclSCfWqNoOk6qEglHybykPNXhYUL1yrq3F2U8XSJbchhXN666ZdRMFyCJg4hBg4hRTCch4fg9D1y3oKBLIHqL4QfzFA4QQU%2F%2BArhO5cPn67pHhY43dRQHJIvqvMR4s2768bZfCnEXzVWB4nyZ0Tz3eQ%2BiFmJnPu5uITnd%2FNQcO3LRdwSvySGPI%2F8EZMJWLET8c5WElMUyeULDYKoiaNBb%2BQhyl5ZHLOUNtEueMni2K11e%2BDXjPp1sVt1yNPSrPTmk619r7iLY1Gt1TknHDQkb45kdfvokBv%2FHC9DdjqKy45za7tguiInxSubc7y4dZERtAga2xKcWpsElJMzMaOFDRS8WghKB2MFlYCKL1GSYp96NjVA%2F59dM9%2Fw%2F059qp8G6vnzr%2F3pzPzUcLmDD0a5HF0RsWJtKsszDztYqukABLsyCPYzZOntBlVcFWnPiUwwXdv5Ko7N9uceZJjCn5p6%2BBjqkAWHHVQjQCeDqpYhXYfq20dL%2FTUJ%2FZ87ZlaoOFVZUyMcIyNnXXW9RnFlKvkNh8MfduJuHBu4tC%2B7A3ws3nNrC86qNWsfvx4FW1Fxf%2Fs3Xpwfs5f4Y3j5GPML2EudZIQ%2FH6xLCI76YGVQJD6qXBej8kaa%2F8ETpAYMDUwa8jwD6Lod2Ol9Mo13VN8NOMaZZUxsBF2XZLj9KYfkQtJYBHmhYXCv71xnO&X-Amz-Signature=ca253681e462df461c15231982c75885881131a5a715f3b113f625a6282296b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
