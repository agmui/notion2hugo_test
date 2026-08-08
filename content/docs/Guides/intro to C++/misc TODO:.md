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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DYKSPY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGblcHMGKdVEAU4YF8OjFifNP9anx%2FNzuGAbiBgh4o%2B9AiEAtKAgO%2Fp8Lst6hsT7nhZhDXsYlSemAI%2BFOxyzXFcU%2F7Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMziPkECRewtNFN2ECrcA1Snfvz8bYvwAVxujVCTwYMGpfAr86bAnhI5gCmFBYVqvIdvEUc3vSAEIjETRDuzhpm%2F2I4NsCAghuZkOg20rQgtepieNALOAasnzu8WdXG%2BG20mwbX68F2o0ZB7dTE5hWi2%2Byq%2BzMpxp7W3IHNs4zJVKORq%2BOOuJ55r2F3X%2BpbZS%2BKGlItpoqNH9dZzm8HcWBx37hXsDDO6uh4K5njfRuQ1VzyJ7Y37Oqy2YzmoAHLQlG0wxEjvP8sGWRzIsTgicX8fRcISKT3S9FFPkm59pp9R%2BmMqYWCzgKC6qncCPgNAixGdaxU86OhUZRPCxSkZCGg9b0UFCdViqEW46DTIx0EeHujJtuxBLU80rrviyCrIfcKEt619SFMWQdjNo3xSKPxuejz8tP5rcBxfaytxb0mp6P%2BO6EceZhHPkhzLs6CX%2BO%2FR9Ck8qRVNCgBpJ0BKjd1Dn%2FQOLaDUMck9BzoJMk9eYNE74XL8z0cSPhfPQgQVfxP182DAC4PQ%2B5TcIxdSmjRLYUYFLpP9q7xwrEe%2BQOEVpqME3kJj43FJZFwXKg%2FJ4VYA%2F68qlXcoPMaVlT0rw8xmrnuk1tuR5k94VdRDqBZUyXtghvnThT5aV61SQu9TozOIkF%2BcIHAAzIKKMPDs2dMGOqUBxsfYGoMRCNCfCmqaiKTnTaGz5lQiF4tAmU8VjnruyEPj%2BjuakM3694tofp402VdohFgWfofAsE2CkL9UnIG5sw73BGa4hHBXATSu%2Bg4Bmf7WCZ5fGZfziDlgXpFN1GmLBVzKFXeaSKYua%2BhXXY8H5VVQUyzJKxHjjPHs5uc%2FaOjuyo0RUpwws8euNjGvKshxA72xO2ohqP%2BzCoTKiwGVX4FfJD87&X-Amz-Signature=b3f9332a9f878915be3ec1d574a3eeaed0958939790edad80adeb7eb786b32dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DYKSPY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGblcHMGKdVEAU4YF8OjFifNP9anx%2FNzuGAbiBgh4o%2B9AiEAtKAgO%2Fp8Lst6hsT7nhZhDXsYlSemAI%2BFOxyzXFcU%2F7Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMziPkECRewtNFN2ECrcA1Snfvz8bYvwAVxujVCTwYMGpfAr86bAnhI5gCmFBYVqvIdvEUc3vSAEIjETRDuzhpm%2F2I4NsCAghuZkOg20rQgtepieNALOAasnzu8WdXG%2BG20mwbX68F2o0ZB7dTE5hWi2%2Byq%2BzMpxp7W3IHNs4zJVKORq%2BOOuJ55r2F3X%2BpbZS%2BKGlItpoqNH9dZzm8HcWBx37hXsDDO6uh4K5njfRuQ1VzyJ7Y37Oqy2YzmoAHLQlG0wxEjvP8sGWRzIsTgicX8fRcISKT3S9FFPkm59pp9R%2BmMqYWCzgKC6qncCPgNAixGdaxU86OhUZRPCxSkZCGg9b0UFCdViqEW46DTIx0EeHujJtuxBLU80rrviyCrIfcKEt619SFMWQdjNo3xSKPxuejz8tP5rcBxfaytxb0mp6P%2BO6EceZhHPkhzLs6CX%2BO%2FR9Ck8qRVNCgBpJ0BKjd1Dn%2FQOLaDUMck9BzoJMk9eYNE74XL8z0cSPhfPQgQVfxP182DAC4PQ%2B5TcIxdSmjRLYUYFLpP9q7xwrEe%2BQOEVpqME3kJj43FJZFwXKg%2FJ4VYA%2F68qlXcoPMaVlT0rw8xmrnuk1tuR5k94VdRDqBZUyXtghvnThT5aV61SQu9TozOIkF%2BcIHAAzIKKMPDs2dMGOqUBxsfYGoMRCNCfCmqaiKTnTaGz5lQiF4tAmU8VjnruyEPj%2BjuakM3694tofp402VdohFgWfofAsE2CkL9UnIG5sw73BGa4hHBXATSu%2Bg4Bmf7WCZ5fGZfziDlgXpFN1GmLBVzKFXeaSKYua%2BhXXY8H5VVQUyzJKxHjjPHs5uc%2FaOjuyo0RUpwws8euNjGvKshxA72xO2ohqP%2BzCoTKiwGVX4FfJD87&X-Amz-Signature=f1963237a1ce4c33f19be6702ed216da86f0d7c6804473f34d0c877e463fc5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
