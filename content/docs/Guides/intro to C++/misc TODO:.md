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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMSBLAQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDK5jVSKtRgPhHJvDPV5PhHEGBS1kA8b1y%2BVSitIn9wwwIgVa5rHxxAqonsRyZ8lo5Jcngijx8i0GnohV0nLfl8SrAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJKSXTRWvDGkR6Xv8CrcA0R3xtRy2ZRa33VUOH%2BiMbdjURsJp814Mc6FVdtKDQONc9fUj8c62p2H1XbTuEKdfdpIxynRWnk%2BFpFCGZvDFTHz5%2BkWSFv6hiu8r0o4PH2pMqUSs6fKG40y3tPO3C4G7ajduLHEGXqKK6Bp4ey7m2%2FUhKAbVbEH90fJNReF7amm%2FK1LYLpNoxkTGlKpO1ozeFnuwcPUG3Oj%2BC7cD0CC1m20Pg%2F4rL6sgT%2B82aX7H1cfMs2tLywWKt5W0HpjbaBTcI2lmtc0q3OAN8VX%2B6Q55stcdkqPdisBipozKAf2ZniQjf6cwNXrCN9urvfnoFTUWSiJ4v47mo0%2Bv31ZdVvYV90wgUlxPI06j%2FPSvMv5x9cGVOUhEVVf7%2BPdoGN12gq0ciq7R7r1u6ODDuSoJFGUD1K3r2p%2B3vfLi3grloBgm%2FfIBVIJYHxw3J%2Fbn79ppAhJGhYtxeoWkHkdljncIAdd%2FGsAQ2aprLtrw%2FGhv3cJ8k73GiJgw15xN9g50V%2Fr3GKbCwb4rY1dXNAMDcIgJ92ds%2FVUvR2X0rdt8C6Ep8P9cJIPABuWIbw4WTMseFpVkwW0ZrXKdhp5vrDVnHuUmQ6RzlhWszR8i5Ym6ndGZIKZmTaVlmpezGcme0ML9BKZMOTtrcMGOqUBuR6PNcPNF3dziQfOfUX3n%2BUuEXF9A7%2F%2Bqs6tPi%2FqoAG%2B2lO9%2BoOpLz80KXpAVFoxCX2OGOYuXPdEC66MIgAYDH2S7%2BcOCmTbwwjBIaPUNBYBk4K9cjO7NwDbZo%2FlGr68HiBP0p6SKS1S4ieiMKz2LQCssRQW99e%2FOdmUp%2Bc8DNoO%2Fvu9vhjk%2FDNDNGFgozOiORkSGICbAVJHqxEQPv%2BoUoJfXfFO&X-Amz-Signature=66053b3bfbccd60151cee6c9a16823442fc5e6a61ae5e0b03b5423d43aa6c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMSBLAQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDK5jVSKtRgPhHJvDPV5PhHEGBS1kA8b1y%2BVSitIn9wwwIgVa5rHxxAqonsRyZ8lo5Jcngijx8i0GnohV0nLfl8SrAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJKSXTRWvDGkR6Xv8CrcA0R3xtRy2ZRa33VUOH%2BiMbdjURsJp814Mc6FVdtKDQONc9fUj8c62p2H1XbTuEKdfdpIxynRWnk%2BFpFCGZvDFTHz5%2BkWSFv6hiu8r0o4PH2pMqUSs6fKG40y3tPO3C4G7ajduLHEGXqKK6Bp4ey7m2%2FUhKAbVbEH90fJNReF7amm%2FK1LYLpNoxkTGlKpO1ozeFnuwcPUG3Oj%2BC7cD0CC1m20Pg%2F4rL6sgT%2B82aX7H1cfMs2tLywWKt5W0HpjbaBTcI2lmtc0q3OAN8VX%2B6Q55stcdkqPdisBipozKAf2ZniQjf6cwNXrCN9urvfnoFTUWSiJ4v47mo0%2Bv31ZdVvYV90wgUlxPI06j%2FPSvMv5x9cGVOUhEVVf7%2BPdoGN12gq0ciq7R7r1u6ODDuSoJFGUD1K3r2p%2B3vfLi3grloBgm%2FfIBVIJYHxw3J%2Fbn79ppAhJGhYtxeoWkHkdljncIAdd%2FGsAQ2aprLtrw%2FGhv3cJ8k73GiJgw15xN9g50V%2Fr3GKbCwb4rY1dXNAMDcIgJ92ds%2FVUvR2X0rdt8C6Ep8P9cJIPABuWIbw4WTMseFpVkwW0ZrXKdhp5vrDVnHuUmQ6RzlhWszR8i5Ym6ndGZIKZmTaVlmpezGcme0ML9BKZMOTtrcMGOqUBuR6PNcPNF3dziQfOfUX3n%2BUuEXF9A7%2F%2Bqs6tPi%2FqoAG%2B2lO9%2BoOpLz80KXpAVFoxCX2OGOYuXPdEC66MIgAYDH2S7%2BcOCmTbwwjBIaPUNBYBk4K9cjO7NwDbZo%2FlGr68HiBP0p6SKS1S4ieiMKz2LQCssRQW99e%2FOdmUp%2Bc8DNoO%2Fvu9vhjk%2FDNDNGFgozOiORkSGICbAVJHqxEQPv%2BoUoJfXfFO&X-Amz-Signature=d722b47036a5b9006f3bff2650d20366a169cb6ca4b2791c50012a7de3ec99df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
