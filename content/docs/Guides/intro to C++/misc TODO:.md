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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6LB7U5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCim15jQZzwXxuU2wg0IfzppS9qkupW3UHgbse4y7%2BvDwIgOEHV4NK8ioVQufYhKkA2LsHtnZMHE%2BlRnOIgxru%2FjJYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDELr4OF6LcJyXEpRYSrcA5YXrdVr84GNZdDq5tX4oDKZcGVMwDF%2B6WD3YUrrzkHEn8a5PZreRo0ZHy%2BzbVipMszKm3a%2BgUabljxNIluuj1dRFTIryc%2FSR6gVe8P2SaTqjqHCyWCQxUzADrvv3vyA99udv82X1CffQE4WlCs6mdEpruo5InE0dbs07as1KloU0HCSC5L8O9oVKTUR05vYRMiJ%2FwMmWWddsRy0%2FvdejzUo%2BfT3dM6wTHV0nwpqfdfJyl3ELeMLSGeyyjgRITftCEGqFLCwsV7vBx0CzjoAwCW6j9e9uawEpNA9xWrx6KYKeJ6N4OkoF5z8m2wAoSKw612k6g0b5D9e1cV34YGfrrQabNDdiVNV%2BzrB1NWixYnLooDDYn7sdaNswYMm60mfbBfwnwq4fargmqsGpeiZMn8dMSgRuT18umkUZUUy4zsjp9ExqBW5Wc3PF7EkW8%2BImsW%2B16ViBUQeKeBnkvdks%2FKqIB84yR0CLq0p%2Ba8cOo1I%2FM8fW6Apiz79Pefaf4745Y%2BJ7jl6RcsHsAZEkyGaCU8lQRscCMGcpqLiMm6IEGHvHBUiFEUcPECs7igtzdcSDowNGuGkXEVgcwb1VUW2vskAk8GUCj5OXx%2BOnwkByU39v8MOyLePsYntg58sMPCDub0GOqUBGaMkyd23bSvLy2nbiQsxdm3CrS13Wabqz6fHEZhdaeBBiCl%2FYENVDvJ7PJIYPkRfYQktZEkNcSZwfLjHGNwDAGKDNHyVEbuHO3wnZdof50mq4IGt91HWQu1V6iho3DXhHqISICwe4TNAJH3yvs0%2FqWBhpq2iiobHqHgUtDEieMNsJEdjrxmZ46CngPmeBqLXxZBqQK8SnsgqC4vBxUqLmZYzGyH0&X-Amz-Signature=27515a9802a9dfdf1e65ba6029d2463a568159d81e7dc6af2b782cf91da961e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6LB7U5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCim15jQZzwXxuU2wg0IfzppS9qkupW3UHgbse4y7%2BvDwIgOEHV4NK8ioVQufYhKkA2LsHtnZMHE%2BlRnOIgxru%2FjJYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDELr4OF6LcJyXEpRYSrcA5YXrdVr84GNZdDq5tX4oDKZcGVMwDF%2B6WD3YUrrzkHEn8a5PZreRo0ZHy%2BzbVipMszKm3a%2BgUabljxNIluuj1dRFTIryc%2FSR6gVe8P2SaTqjqHCyWCQxUzADrvv3vyA99udv82X1CffQE4WlCs6mdEpruo5InE0dbs07as1KloU0HCSC5L8O9oVKTUR05vYRMiJ%2FwMmWWddsRy0%2FvdejzUo%2BfT3dM6wTHV0nwpqfdfJyl3ELeMLSGeyyjgRITftCEGqFLCwsV7vBx0CzjoAwCW6j9e9uawEpNA9xWrx6KYKeJ6N4OkoF5z8m2wAoSKw612k6g0b5D9e1cV34YGfrrQabNDdiVNV%2BzrB1NWixYnLooDDYn7sdaNswYMm60mfbBfwnwq4fargmqsGpeiZMn8dMSgRuT18umkUZUUy4zsjp9ExqBW5Wc3PF7EkW8%2BImsW%2B16ViBUQeKeBnkvdks%2FKqIB84yR0CLq0p%2Ba8cOo1I%2FM8fW6Apiz79Pefaf4745Y%2BJ7jl6RcsHsAZEkyGaCU8lQRscCMGcpqLiMm6IEGHvHBUiFEUcPECs7igtzdcSDowNGuGkXEVgcwb1VUW2vskAk8GUCj5OXx%2BOnwkByU39v8MOyLePsYntg58sMPCDub0GOqUBGaMkyd23bSvLy2nbiQsxdm3CrS13Wabqz6fHEZhdaeBBiCl%2FYENVDvJ7PJIYPkRfYQktZEkNcSZwfLjHGNwDAGKDNHyVEbuHO3wnZdof50mq4IGt91HWQu1V6iho3DXhHqISICwe4TNAJH3yvs0%2FqWBhpq2iiobHqHgUtDEieMNsJEdjrxmZ46CngPmeBqLXxZBqQK8SnsgqC4vBxUqLmZYzGyH0&X-Amz-Signature=219e3ab757470753f1f6da145d12e81e4fbef759d289fdd36d192d3e07f366cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
