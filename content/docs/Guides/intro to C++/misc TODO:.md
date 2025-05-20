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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDCF354%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEclDjW5cQmjFzmb95dU%2BhSV1iU1kRdFCyPDnOYpFoUQIgFTDzTdXKSaHfuIaGWQvLkUjSSddlYQosnqxAVhGypHkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BN1rdPeWhckH42EircA2CZMuZ1G3W%2FEHq1mQ%2BnPlBt2h1Mhz6FSalsPFRRYpE6U3ihMPD8OL9ONE6GnFw7424EG2p6vxEXGBncLWs%2F7j%2Fn8PnTlylpr%2B3FWfG6u%2B9aQFIUlR8S%2BCJxsgymiP%2BpPeD3EkiAwESfT%2Bpt3DhZ9BO7fuSXMHn5pkYQjpqFuxwiGeE2Ni%2Bbhmiqwqydloa5hFc1ejcTKw7CR7O2FarO%2BOQViSL1ruyxuY6VrUpOlesLIQ9xd9qlUjM%2BDmNJHGIE3%2FJ7okBdsIQklRYlKplZdAuluwhgA5Vn02SWrLt2sc6pyzFe%2F4B%2FHUuIyqK17MOwHdRDb7bN3TxAK%2B0lmC1pJLQWtfEGMYZ%2FcHECd8PMEcrPOZ0QXKuWzXl4VvRdhetmfgBxewhy0B0tnos4SrKIcBiMPuMYmpEeiuPC1PPwARNnqxdlheNDMvkYwdOEnZWRJo7Kb9vE5BEg5X0SL6zJuAQZQOimpuDs4ZcYdEZ9WtHQG%2Bb43zWqUw4A%2BSpai1B94%2F2YXiQuKCAnkLK1pPDswJfxEqfiW7qh8hERKv7VLd5I%2BY2MZw0ppOmzU3yczmirJEF8R7GC3wcOVD%2B%2BiqTIgoIluNwLOdZ2T47fnbYszjqUGihNyOjO1iQCe%2F%2BYMMLLs8EGOqUBn297IoX4TUbMb%2F8YYLDTu86BUUXmHI8mRyIL%2BC9Wfx4tXXE9lGmGEbOTJxqfrihbvA5GDvyhK%2FcMzLnUpcSx05YnJzFuEfdmatdQy9WObMJHmTxMiuummbZZCl1QKGE95J5GfIEZBV%2FKV8aqY9i4JQiAf8Hz%2BfTe6tQn2x3nae59PbA9OUPPCTxF26erGZIJEhT0eF0jFLBfsM5lnMR42EDa4S1I&X-Amz-Signature=47c193cc3e647cbd33563ba1208ace8e7a866620f7acfd765a8b2b5e9cc31f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDCF354%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEclDjW5cQmjFzmb95dU%2BhSV1iU1kRdFCyPDnOYpFoUQIgFTDzTdXKSaHfuIaGWQvLkUjSSddlYQosnqxAVhGypHkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BN1rdPeWhckH42EircA2CZMuZ1G3W%2FEHq1mQ%2BnPlBt2h1Mhz6FSalsPFRRYpE6U3ihMPD8OL9ONE6GnFw7424EG2p6vxEXGBncLWs%2F7j%2Fn8PnTlylpr%2B3FWfG6u%2B9aQFIUlR8S%2BCJxsgymiP%2BpPeD3EkiAwESfT%2Bpt3DhZ9BO7fuSXMHn5pkYQjpqFuxwiGeE2Ni%2Bbhmiqwqydloa5hFc1ejcTKw7CR7O2FarO%2BOQViSL1ruyxuY6VrUpOlesLIQ9xd9qlUjM%2BDmNJHGIE3%2FJ7okBdsIQklRYlKplZdAuluwhgA5Vn02SWrLt2sc6pyzFe%2F4B%2FHUuIyqK17MOwHdRDb7bN3TxAK%2B0lmC1pJLQWtfEGMYZ%2FcHECd8PMEcrPOZ0QXKuWzXl4VvRdhetmfgBxewhy0B0tnos4SrKIcBiMPuMYmpEeiuPC1PPwARNnqxdlheNDMvkYwdOEnZWRJo7Kb9vE5BEg5X0SL6zJuAQZQOimpuDs4ZcYdEZ9WtHQG%2Bb43zWqUw4A%2BSpai1B94%2F2YXiQuKCAnkLK1pPDswJfxEqfiW7qh8hERKv7VLd5I%2BY2MZw0ppOmzU3yczmirJEF8R7GC3wcOVD%2B%2BiqTIgoIluNwLOdZ2T47fnbYszjqUGihNyOjO1iQCe%2F%2BYMMLLs8EGOqUBn297IoX4TUbMb%2F8YYLDTu86BUUXmHI8mRyIL%2BC9Wfx4tXXE9lGmGEbOTJxqfrihbvA5GDvyhK%2FcMzLnUpcSx05YnJzFuEfdmatdQy9WObMJHmTxMiuummbZZCl1QKGE95J5GfIEZBV%2FKV8aqY9i4JQiAf8Hz%2BfTe6tQn2x3nae59PbA9OUPPCTxF26erGZIJEhT0eF0jFLBfsM5lnMR42EDa4S1I&X-Amz-Signature=287c366a47ce66b7f475575e23d7ae7c7aafbf7d8144391e23813886f140b055&X-Amz-SignedHeaders=host&x-id=GetObject)

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
