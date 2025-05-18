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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=1b50db3bcf474cbeac35b4eddb6a1e1c7fef0ee8c5803e97c4c4418019637a99&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=c81d6ce693bac9176c0ef131b38471f930bd02e3112ca236357dbcd5e89e0882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
