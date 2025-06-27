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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O24OQTY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDedSVjg%2BZt4Qis0XjObM2ZeC%2BtEtjmYPxqckKCdqYr3AIgIsJCTJHYW2GsMaH1x%2Bcq3tm4k3jO4U8v5ercIpvVrbMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCDCRcnz1pXgH1cdqSrcA7Abe67MEGVHI%2BwjwzIFxqX1ng3DEh8eVnt3NS6sbMp%2FED9Nqf%2BWy3CeaWU%2FdhTqvqI3bVyJsKFM7f0Di3EA8KbaOoSeWcEjpEzb0vCsqQ53ynMcEhdUQ3sjzi29BkV%2Fj4ix4di%2FKOAx%2F1vIBPDOgkBEy9TG7kpU%2BjsVXzIfXRyKTSTIf5QKw%2BBq8kGXQ9oyQT%2FMppieU6wk8W9D28wfzsLgUb69fnf6v%2F1pY36ELbuzfRBdyM%2FDFCSTNbp51aeP1apSug25NzF8dEtf7ft07FKb9k2VyzIobDyF67Kx6Ik6MIsTy7CnzLK2bQcS8LR4Rg5%2BU3Q5Mq1IbW7Mf8uYl99LxkfbH1TSsx8pDMiAw%2FjBmThaybJuoQidQJkibDI2kXQOTPF2VPzP%2Boxd0WaSLv0NIpD7eY6LCP80PjasWnZxTYS8skQs8DmZOkGRctSX%2FOhUXGrac4BLQZmvXhh2PSutOvueGslKrhswmdPjWGfykBDkhszoXHFdk93LFWnlsl3%2BOpYWfQmPLr9OIvv3HHNDi2hWdFQXV2Bozly51EGVpXwkHO15NKNyQ93TfXcoRZgZm4bD60kt6Kp4TdKDbDiHSAMS7pJ8nIHeioJS1Vf%2Fr%2FqDJDDWZA34CcydMIT3%2BsIGOqUB%2BBCRfja7Zubin6v9KW17hGijpwqNgfhflsPlZ6x2ZPo%2FCyOT%2FxcILPg5WDarsO8dQ6pr5gbVwpwFeCtZE%2FXaFrmQwVTMF9SL9krjcy%2BJYiV5fdrfuaQYupW%2FCWKNvpwi8c3xjF%2FWA%2FaHqWtUwW599ommK8miuVyyaP%2FtmgrbN3U81K9sLTf8GEE9065qUdd5UclB%2B44%2Bib5BZ%2BENd17IR%2BkFEe%2Bc&X-Amz-Signature=155baf6ad1ca1a2c14924ef42af20ca7ffd6aa35f35c8548232319c7f0673168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O24OQTY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDedSVjg%2BZt4Qis0XjObM2ZeC%2BtEtjmYPxqckKCdqYr3AIgIsJCTJHYW2GsMaH1x%2Bcq3tm4k3jO4U8v5ercIpvVrbMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCDCRcnz1pXgH1cdqSrcA7Abe67MEGVHI%2BwjwzIFxqX1ng3DEh8eVnt3NS6sbMp%2FED9Nqf%2BWy3CeaWU%2FdhTqvqI3bVyJsKFM7f0Di3EA8KbaOoSeWcEjpEzb0vCsqQ53ynMcEhdUQ3sjzi29BkV%2Fj4ix4di%2FKOAx%2F1vIBPDOgkBEy9TG7kpU%2BjsVXzIfXRyKTSTIf5QKw%2BBq8kGXQ9oyQT%2FMppieU6wk8W9D28wfzsLgUb69fnf6v%2F1pY36ELbuzfRBdyM%2FDFCSTNbp51aeP1apSug25NzF8dEtf7ft07FKb9k2VyzIobDyF67Kx6Ik6MIsTy7CnzLK2bQcS8LR4Rg5%2BU3Q5Mq1IbW7Mf8uYl99LxkfbH1TSsx8pDMiAw%2FjBmThaybJuoQidQJkibDI2kXQOTPF2VPzP%2Boxd0WaSLv0NIpD7eY6LCP80PjasWnZxTYS8skQs8DmZOkGRctSX%2FOhUXGrac4BLQZmvXhh2PSutOvueGslKrhswmdPjWGfykBDkhszoXHFdk93LFWnlsl3%2BOpYWfQmPLr9OIvv3HHNDi2hWdFQXV2Bozly51EGVpXwkHO15NKNyQ93TfXcoRZgZm4bD60kt6Kp4TdKDbDiHSAMS7pJ8nIHeioJS1Vf%2Fr%2FqDJDDWZA34CcydMIT3%2BsIGOqUB%2BBCRfja7Zubin6v9KW17hGijpwqNgfhflsPlZ6x2ZPo%2FCyOT%2FxcILPg5WDarsO8dQ6pr5gbVwpwFeCtZE%2FXaFrmQwVTMF9SL9krjcy%2BJYiV5fdrfuaQYupW%2FCWKNvpwi8c3xjF%2FWA%2FaHqWtUwW599ommK8miuVyyaP%2FtmgrbN3U81K9sLTf8GEE9065qUdd5UclB%2B44%2Bib5BZ%2BENd17IR%2BkFEe%2Bc&X-Amz-Signature=11c5b1b677eb9ef6a2a503d5527630d948525c04cdbf069fb3012b9b062a1d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
