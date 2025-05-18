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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTCM2DH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXZw5ZXYaFkThgXIMR0H3ZnEYIEMBCzuYb27LwFMzB1AiEAnP6VXWQ%2BZ1tQKrna8Pg%2BoG7vT2YMn4QYQUbFXJ0AiNkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG5YlV7RTP8iUBnj9SrcA%2FtBsDw8NcGdfaHUYBmT1vb88bn2hPhXFi2VIkYKBxCXmO%2FcBwc%2FXTws9s7SPBJAfiuvC7HHPyTaNVu6bCs6X%2BLlPpSDjk%2FsM6QB2KCVexVsfkWkmonHpJtg%2BGaYqUB2FG%2F0l0Djk6Xd2oWyZtlqhaEljLeQWJvbPnJf4j1fDLtKOMazhXuxK2luBkmC9yhE1txuV07XjxQENWUX0zrlfWkeACCja6gkVAvjRndQx5X7wEzoc2UPH9YdC9kdQqlZs9rkdNHQsdqM3SB8MkSOti2mgzrzy4ehLrcZQQ7ceIQcCIVHXfOac5ccCbNfkRwabrwy1ZCJzs5dw3Tz2fcThfnBFynJeBMAcoADS%2BhQr%2FUYWnlNf7obF%2F1MXt27LMmPgErErwy3s0PcxdcwyXbc%2FZOpRNFdKw%2FNvl8QINcADTlKCqdFw3zno5f6SBgpplZVouShQVxS7wp54XS30Yg2Fq%2BkD%2FoQ7efkwSMBfq7WroSZsurArHMmeF2FDb3PHfZhATRJQ8lTtuVj2o65SF%2FKG7mXayIknCu673W1EA47qi%2FlEVJlteLgSvCK9lbhLAflGM20%2FjMsPRPc6LFezrTOkyHVZJ2JhkZpfah%2F47e1hucCV1wMA33yUmadK6BnMNf1pcEGOqUB%2B5fWX8rIYjJCavEg%2BwqT64D6aIlx0KkIxKFsMHBxbn3h8CVwqcKBHU28hkruj95XePIWKnrW7ulH%2FxC35Hg%2BrdkH9cMriF7MYqEg8feWFFUT%2BxLGFSHuuTbSg2lTMdFiVTm7cTrp2Td50o%2FDKKu8vqa3oPIRplRQfneQMFjpEqqqZ5BL75QaiUVdhfyHH1SnVNtkj60Ps3bgDhrz9kCKVBKfUUKm&X-Amz-Signature=ef62f401950e8731152d7edb806932c706a6ebfbf2fedef42925bb36b14190d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTCM2DH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXZw5ZXYaFkThgXIMR0H3ZnEYIEMBCzuYb27LwFMzB1AiEAnP6VXWQ%2BZ1tQKrna8Pg%2BoG7vT2YMn4QYQUbFXJ0AiNkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG5YlV7RTP8iUBnj9SrcA%2FtBsDw8NcGdfaHUYBmT1vb88bn2hPhXFi2VIkYKBxCXmO%2FcBwc%2FXTws9s7SPBJAfiuvC7HHPyTaNVu6bCs6X%2BLlPpSDjk%2FsM6QB2KCVexVsfkWkmonHpJtg%2BGaYqUB2FG%2F0l0Djk6Xd2oWyZtlqhaEljLeQWJvbPnJf4j1fDLtKOMazhXuxK2luBkmC9yhE1txuV07XjxQENWUX0zrlfWkeACCja6gkVAvjRndQx5X7wEzoc2UPH9YdC9kdQqlZs9rkdNHQsdqM3SB8MkSOti2mgzrzy4ehLrcZQQ7ceIQcCIVHXfOac5ccCbNfkRwabrwy1ZCJzs5dw3Tz2fcThfnBFynJeBMAcoADS%2BhQr%2FUYWnlNf7obF%2F1MXt27LMmPgErErwy3s0PcxdcwyXbc%2FZOpRNFdKw%2FNvl8QINcADTlKCqdFw3zno5f6SBgpplZVouShQVxS7wp54XS30Yg2Fq%2BkD%2FoQ7efkwSMBfq7WroSZsurArHMmeF2FDb3PHfZhATRJQ8lTtuVj2o65SF%2FKG7mXayIknCu673W1EA47qi%2FlEVJlteLgSvCK9lbhLAflGM20%2FjMsPRPc6LFezrTOkyHVZJ2JhkZpfah%2F47e1hucCV1wMA33yUmadK6BnMNf1pcEGOqUB%2B5fWX8rIYjJCavEg%2BwqT64D6aIlx0KkIxKFsMHBxbn3h8CVwqcKBHU28hkruj95XePIWKnrW7ulH%2FxC35Hg%2BrdkH9cMriF7MYqEg8feWFFUT%2BxLGFSHuuTbSg2lTMdFiVTm7cTrp2Td50o%2FDKKu8vqa3oPIRplRQfneQMFjpEqqqZ5BL75QaiUVdhfyHH1SnVNtkj60Ps3bgDhrz9kCKVBKfUUKm&X-Amz-Signature=8d645d6de4269c697c88613704c8f2332e1e8b4be6182915da76375133ff69cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
