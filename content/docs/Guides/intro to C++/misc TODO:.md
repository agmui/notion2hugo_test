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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRHOCX3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFzSRq7snL8r2jZsiJLeK5pR0dt%2FmMFY31Nx7Z0ZjbxAiBdDxPnvT8WPNDQGv8%2BYhHNjSk7JB8YPzFsHlBEajnoBSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bixgj2WG8Bp%2BlOQKKtwD%2FIdDTj2Lj9UoJjaT5yxyddA0j65dlTVD1gC0XOP4yJ2%2Flwz7fk0C4xwxR37w%2FWFSTV%2BCRWslgaLNL2rCzdiZVukyuATijMlATb84VGTQZTxqbFfFKReiBW7lXc9qyOYrvHgu5kOVBKCkGAp7GHAanYhMcPzh2MQlfkE8ArCc0f0nc2y91Yf9MdqQjLwNwQgT61Mf8ptXD12bs2%2BF%2FW6IKqRN6RgXy9m4Z0cw15qxVLHbMdetYG%2BRZ7WAbhz1PIEU8ipWEDPrGHZ2fpIGGSLzO%2F1AUe5VP2577I%2BN7WeNXUQE2GyVPl0QozIzXSyJ2vgaMb16KvQFMCyDvcSPFsi1EPl0Gx6qpqamLSwM7PrWb9uubxbeZ4yBMqKZ3LTechCbal41DFG5QYX3hi%2BKQIW09b%2B53i1mrsDM9UQiu%2FbGwqxE2t0jjCP90%2FFe%2BpxYh99%2FPLsMNW5%2FAJPCwKKpdoshluc5D3crloDzr0UoerAy2MmQBOgwMdw5qtdAUQxfOBbuQzhvZtYOm0%2BhM6%2BLw9bv9sRlrvctjf3ULgwRaVBToGghxq7mZCvlqaksWQ4bWTEGUlrzJ2r8rRe1SJj5IzYy4%2FGZ7QpHcZ%2BCUqhzeklgvvZGho0FmvukTJTE%2BmEw1%2FiIwwY6pgHigUtull%2BNAnbVfr0ZxiU4KSX1zAIWxugPyvP3o0ynBe%2B1z4Rkuz2wiYr9P%2BxAFyY%2BQFSFSvhBzhpw%2FXtd7Nlq27dz2lxu1HNA6a%2B9nnGTQD4qH42%2BwnW4jDo5VGT17K3O5YZx1Zsv2eJ0NC5UmCTXZAAzGcoynYI%2F5S8148akkodiSDtCqifYOOOvAC1TUUSKtoL9Zdp%2B0xDyhO%2BFhOaqNN0ChYLa&X-Amz-Signature=9878f246e6d22c6758f2442b285471157da8dcb958ac8f283c20c70c907bac4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRHOCX3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFzSRq7snL8r2jZsiJLeK5pR0dt%2FmMFY31Nx7Z0ZjbxAiBdDxPnvT8WPNDQGv8%2BYhHNjSk7JB8YPzFsHlBEajnoBSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bixgj2WG8Bp%2BlOQKKtwD%2FIdDTj2Lj9UoJjaT5yxyddA0j65dlTVD1gC0XOP4yJ2%2Flwz7fk0C4xwxR37w%2FWFSTV%2BCRWslgaLNL2rCzdiZVukyuATijMlATb84VGTQZTxqbFfFKReiBW7lXc9qyOYrvHgu5kOVBKCkGAp7GHAanYhMcPzh2MQlfkE8ArCc0f0nc2y91Yf9MdqQjLwNwQgT61Mf8ptXD12bs2%2BF%2FW6IKqRN6RgXy9m4Z0cw15qxVLHbMdetYG%2BRZ7WAbhz1PIEU8ipWEDPrGHZ2fpIGGSLzO%2F1AUe5VP2577I%2BN7WeNXUQE2GyVPl0QozIzXSyJ2vgaMb16KvQFMCyDvcSPFsi1EPl0Gx6qpqamLSwM7PrWb9uubxbeZ4yBMqKZ3LTechCbal41DFG5QYX3hi%2BKQIW09b%2B53i1mrsDM9UQiu%2FbGwqxE2t0jjCP90%2FFe%2BpxYh99%2FPLsMNW5%2FAJPCwKKpdoshluc5D3crloDzr0UoerAy2MmQBOgwMdw5qtdAUQxfOBbuQzhvZtYOm0%2BhM6%2BLw9bv9sRlrvctjf3ULgwRaVBToGghxq7mZCvlqaksWQ4bWTEGUlrzJ2r8rRe1SJj5IzYy4%2FGZ7QpHcZ%2BCUqhzeklgvvZGho0FmvukTJTE%2BmEw1%2FiIwwY6pgHigUtull%2BNAnbVfr0ZxiU4KSX1zAIWxugPyvP3o0ynBe%2B1z4Rkuz2wiYr9P%2BxAFyY%2BQFSFSvhBzhpw%2FXtd7Nlq27dz2lxu1HNA6a%2B9nnGTQD4qH42%2BwnW4jDo5VGT17K3O5YZx1Zsv2eJ0NC5UmCTXZAAzGcoynYI%2F5S8148akkodiSDtCqifYOOOvAC1TUUSKtoL9Zdp%2B0xDyhO%2BFhOaqNN0ChYLa&X-Amz-Signature=8e5f5c78b8fb78595f1c1c51568c7514fdb596291889106be09ecbc3790c303a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
