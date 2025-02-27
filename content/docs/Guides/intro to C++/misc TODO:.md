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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHRVAW5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIF4I%2BPb3PkXWiOkQJEXsRFdSMl%2FVG1y90X2sIZ5cAB2BAiEAg4AOTMZ%2BTRTId%2Ff8%2B%2BmbGZgS3RXBWOAz8%2BT29fiSYOkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMuXYLv%2FVd5W%2BawHVircA0h1Xy52xuF6WeHVZ%2FehFXUQqlXeZ%2BGAcCEzDVaoaqKPznFV7BWdE9ke4lQVKzoBJ1MGgp8tgJkF1uJSOY1bye8Dh3YxK%2Fg%2B%2BgE3TGImmgHcBIr3i4DLYd1Vu%2FRvk6JisBRD4uIDI5M38SHL3mPhrPVeOXQU4iyBY5ichVttfFse7fwyUWreKaehV0IPqZkXxM2CPlpMCGBZXX%2BsN0YGXhPjxi4cBJ0CbZnowrzezWuOfT2wqNYhnuLjGPB7GB5DRay4SP0pcnreU6TdCDv7KXSmzwdHbH0E4uHQAswyRhASx4%2Bt3lLsUtsVAq59PtOM7WJ%2BYrl9FzCAUSUH3MVO8yH3rftw2sR3PKFgFqCuTd0RAeN9GF%2BgAKVPGDySsIkil5R0Jv8ZQ9JWtlZUja23M2%2FEuOJ%2Ff67jQmLLJUdcfML1mXPIV9KALIanoW2pdndQArHXhUuTdNal%2B0qlQ6kdDgM4i1w1tDU8D56E95j7qsLV3nVcT5JPn8I72jP8B7BioRkEyIneLbzYhmSwi2H5pHcvLw7IlmfSOugWRV0l5erD2%2FtXhvrmb4ZUrww7R6Y7CexsWusOvXqAL9JKzOWgFdLfDBM59NtQTDNdwdgtk0pUHYXJdaNuleh5nnqUMIT2%2Fr0GOqUBgVxY1gVM3zorEWBJYB4Br%2BQpiP7GJ7BinwipuJnmrUuJ1Q%2F5pscUoHZasmlAic%2BU5XBVTlAksM32EJgm6W%2F5UXkmWw1gsm2NcxPVe8D3ZkWCDINWLS9Zz1QaJWfB9GkGzesBC59yqxr170e0jgqORLvtX1DFd1cZxx7N3i7wEQu55eMVRaFt9nauQ%2FOCM7TCgdNkfE%2BPn9RS%2FtRQoxWVh7%2FAog%2Fe&X-Amz-Signature=607d569895c172a27aa5d3716cb63dfc99fc0570317889c7d1e3496fb734f7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHRVAW5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIF4I%2BPb3PkXWiOkQJEXsRFdSMl%2FVG1y90X2sIZ5cAB2BAiEAg4AOTMZ%2BTRTId%2Ff8%2B%2BmbGZgS3RXBWOAz8%2BT29fiSYOkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMuXYLv%2FVd5W%2BawHVircA0h1Xy52xuF6WeHVZ%2FehFXUQqlXeZ%2BGAcCEzDVaoaqKPznFV7BWdE9ke4lQVKzoBJ1MGgp8tgJkF1uJSOY1bye8Dh3YxK%2Fg%2B%2BgE3TGImmgHcBIr3i4DLYd1Vu%2FRvk6JisBRD4uIDI5M38SHL3mPhrPVeOXQU4iyBY5ichVttfFse7fwyUWreKaehV0IPqZkXxM2CPlpMCGBZXX%2BsN0YGXhPjxi4cBJ0CbZnowrzezWuOfT2wqNYhnuLjGPB7GB5DRay4SP0pcnreU6TdCDv7KXSmzwdHbH0E4uHQAswyRhASx4%2Bt3lLsUtsVAq59PtOM7WJ%2BYrl9FzCAUSUH3MVO8yH3rftw2sR3PKFgFqCuTd0RAeN9GF%2BgAKVPGDySsIkil5R0Jv8ZQ9JWtlZUja23M2%2FEuOJ%2Ff67jQmLLJUdcfML1mXPIV9KALIanoW2pdndQArHXhUuTdNal%2B0qlQ6kdDgM4i1w1tDU8D56E95j7qsLV3nVcT5JPn8I72jP8B7BioRkEyIneLbzYhmSwi2H5pHcvLw7IlmfSOugWRV0l5erD2%2FtXhvrmb4ZUrww7R6Y7CexsWusOvXqAL9JKzOWgFdLfDBM59NtQTDNdwdgtk0pUHYXJdaNuleh5nnqUMIT2%2Fr0GOqUBgVxY1gVM3zorEWBJYB4Br%2BQpiP7GJ7BinwipuJnmrUuJ1Q%2F5pscUoHZasmlAic%2BU5XBVTlAksM32EJgm6W%2F5UXkmWw1gsm2NcxPVe8D3ZkWCDINWLS9Zz1QaJWfB9GkGzesBC59yqxr170e0jgqORLvtX1DFd1cZxx7N3i7wEQu55eMVRaFt9nauQ%2FOCM7TCgdNkfE%2BPn9RS%2FtRQoxWVh7%2FAog%2Fe&X-Amz-Signature=d2483410cc151e31d465e575dc8bbf4ce25877515da1fcf3148a520c5740c299&X-Amz-SignedHeaders=host&x-id=GetObject)

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
