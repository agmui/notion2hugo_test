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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723BYQW6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXHYQWkADsQ28O1mgMQTIb%2FFEqBuJmDpd4vysngPYCwIgb0FClg2U9xjCFIDlereCUaiUdFqyLobO0JnxmZFhvB4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFm9RqG3wJHNf2iI%2ByrcA8wqFAFrBos9UBcgZljtPGzbXCltYnOhQMQzDHeFodWQLAc48fV%2BLVwv5JWx7LiWLZmHkUnEbjvfhRu1vT7IyeaaV8grig3wjeJCDhs3m9aNRONRGDik9EJQD%2BH%2FvPYNupH8giQiTgdSda%2F3G%2BCgnmeptMKDsVgrp3eCip0x%2FZGNtm0cdG%2BsDf5vScZHKv4Y4KivmKOVaPPDpy1kBZAfWNay0tvmTmuKOcxML4rGF6WYg3AWkuw%2FH4LNbJE9z2PY3Shex11LPuu77DiPq8PHCSamTPHw%2BKyRex3c5IvZ8382LN53hVFA8fZmkRSdLAlMNX4YuZAyeXfT%2Fk%2FKArWPk0urszii23ArXIBBiCqCpZ%2FZEVLUDtgULe9uASuIqfOMJS%2BKB7C7FgOp7Ob7sMspGWzULtO5P19q4kZlzPOurWxhBE9iKGjrwxlO5bKTqd8KRtCLfLnmfC%2BDremX2AzGu9MtyO0hnXRDfTqcqdrRybQ2n9J0BNfaPZ2ZvbNtSYaZt%2F6rn9aBKDhVwORc0ot1duqZSS0aPQ%2BXwg%2FepwUF3K5ARmrGSuuUmH7WMNA%2F46%2F7kI2%2F9pumJNGGtYbM1zuRUFrvXjB9673NmBwIyxxymQn%2B%2Bh4qxqnXHPXhYcrnMLaZ6cAGOqUBE5i7KZeBrUvGJvwetZCOV7qttpl5MPuLCJFTD4J2DuygWi3h7DHwtBG%2BtwaEhMzmB5glXZze8%2FRxlj9kVtzFMY7JszdA0IDVe5jN6ZlEnK32PaGakCFuwaOrzPGV%2Bq8dx%2F0lsmnAxOL7UbaU7DZGn6dXyb742015fN4wfdD9aJQ%2BFuNQtF1erEFXk80FZfo7GCbXJ5KXeAvhUPCiF9coV2DwTUb%2B&X-Amz-Signature=94cf70a8117adf5454acd5f20f9911f4ef005f2bc028a1c0219227762d49fea6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723BYQW6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXHYQWkADsQ28O1mgMQTIb%2FFEqBuJmDpd4vysngPYCwIgb0FClg2U9xjCFIDlereCUaiUdFqyLobO0JnxmZFhvB4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFm9RqG3wJHNf2iI%2ByrcA8wqFAFrBos9UBcgZljtPGzbXCltYnOhQMQzDHeFodWQLAc48fV%2BLVwv5JWx7LiWLZmHkUnEbjvfhRu1vT7IyeaaV8grig3wjeJCDhs3m9aNRONRGDik9EJQD%2BH%2FvPYNupH8giQiTgdSda%2F3G%2BCgnmeptMKDsVgrp3eCip0x%2FZGNtm0cdG%2BsDf5vScZHKv4Y4KivmKOVaPPDpy1kBZAfWNay0tvmTmuKOcxML4rGF6WYg3AWkuw%2FH4LNbJE9z2PY3Shex11LPuu77DiPq8PHCSamTPHw%2BKyRex3c5IvZ8382LN53hVFA8fZmkRSdLAlMNX4YuZAyeXfT%2Fk%2FKArWPk0urszii23ArXIBBiCqCpZ%2FZEVLUDtgULe9uASuIqfOMJS%2BKB7C7FgOp7Ob7sMspGWzULtO5P19q4kZlzPOurWxhBE9iKGjrwxlO5bKTqd8KRtCLfLnmfC%2BDremX2AzGu9MtyO0hnXRDfTqcqdrRybQ2n9J0BNfaPZ2ZvbNtSYaZt%2F6rn9aBKDhVwORc0ot1duqZSS0aPQ%2BXwg%2FepwUF3K5ARmrGSuuUmH7WMNA%2F46%2F7kI2%2F9pumJNGGtYbM1zuRUFrvXjB9673NmBwIyxxymQn%2B%2Bh4qxqnXHPXhYcrnMLaZ6cAGOqUBE5i7KZeBrUvGJvwetZCOV7qttpl5MPuLCJFTD4J2DuygWi3h7DHwtBG%2BtwaEhMzmB5glXZze8%2FRxlj9kVtzFMY7JszdA0IDVe5jN6ZlEnK32PaGakCFuwaOrzPGV%2Bq8dx%2F0lsmnAxOL7UbaU7DZGn6dXyb742015fN4wfdD9aJQ%2BFuNQtF1erEFXk80FZfo7GCbXJ5KXeAvhUPCiF9coV2DwTUb%2B&X-Amz-Signature=157680a0456299cd5e52e67ad80314f0d7e88892887d3a74800c2f5806ac7b81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
