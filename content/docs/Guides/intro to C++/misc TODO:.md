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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4LGRMF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBOu2XckECvgF5ecg5J1Qu7ZBef5MA6qeRtwjKlN0qUYAiARPwN%2FHsE4LU1IlF9iKb1pHZ36ctQX0DbjCpAQwzIlfyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMDl34ECzi5mex8ip8KtwD7t4Pz4S88gorRyucOyl6VkXhTm2kd0ZMi793g3l3YMLbO8jnr07ZJGDe1u9fkWCDZNHQ6nwiNo88iFXrPgeFrmYIiT9QgoZALSbIxiUua9FGR79CffR7AAmiWZUQs8Wlq4UcXSiFMOwe0J%2BUDQPIMKzgC1ABVknWKrMh9rrhmyE9J0Ejgrz%2Bu5MKGHH90C63nn8pvX4qc1faMSHrIHe66%2BTCC5EEk%2BBI5lTEVQwd9ZII%2B1uEXejWYEp26aK2X5ZaU0dB7u22ZvY1NwpzpQli%2Bv7ubheZ2K0T3Jq8xHA1tkcEliF397Hw131tkT%2B9yIRmYUjIVkNBmlAUtugVNH99fvV4SuHKnBYnPZIoYnBhs7nk5RULeShFXPlyBLiUcgaD7xL1w3hKJWW2JSuneFF5SHONcu7adWTMH1f5EAXnSjnaml5GJ%2BEhPYpgqODEvzbCCuzG4xEiJJAJAFTmw0OLCPocR%2Bn%2BXNPjTwtaajpTX%2Fzp0w2G%2FoET5K25O%2FWq6Fxc7kRV8Sh76eRQKd%2B1dzhKK36c3MbJWLjTcxELomu1jTntbWK5jAyjCohlwgfIWJdxJ%2F3SMOgPV1xkZU69nQ%2BJKbW4LnlJXZIfDZba8o%2BHAK7vZ5MyVL95Jo2L2qEw3rqWxAY6pgH6s6id0H2J6ugvUpU9MjXQmD7NhpERNOU69xdoK4LN3l7JL4zzcRSYxJ9aLmJW%2F%2Bb8cwpravaxV0P04xAD5jSlnz554PTohdAD54gMrhmy2%2B3J5oklHY23%2F3lsaUPSXE%2F8w9fM6hPtNItE2XQSDupSKtS53XlVH0NtlebS4NOvR4Q%2BEZF2ATSpzwbtAsUxajU9Com2wAq96SNoWSTDICuPHexaUKsF&X-Amz-Signature=640761f98bbf15bc9dba0daf491f3048c2e0a8e44dfca096467b9fd4b2c67eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4LGRMF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBOu2XckECvgF5ecg5J1Qu7ZBef5MA6qeRtwjKlN0qUYAiARPwN%2FHsE4LU1IlF9iKb1pHZ36ctQX0DbjCpAQwzIlfyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMDl34ECzi5mex8ip8KtwD7t4Pz4S88gorRyucOyl6VkXhTm2kd0ZMi793g3l3YMLbO8jnr07ZJGDe1u9fkWCDZNHQ6nwiNo88iFXrPgeFrmYIiT9QgoZALSbIxiUua9FGR79CffR7AAmiWZUQs8Wlq4UcXSiFMOwe0J%2BUDQPIMKzgC1ABVknWKrMh9rrhmyE9J0Ejgrz%2Bu5MKGHH90C63nn8pvX4qc1faMSHrIHe66%2BTCC5EEk%2BBI5lTEVQwd9ZII%2B1uEXejWYEp26aK2X5ZaU0dB7u22ZvY1NwpzpQli%2Bv7ubheZ2K0T3Jq8xHA1tkcEliF397Hw131tkT%2B9yIRmYUjIVkNBmlAUtugVNH99fvV4SuHKnBYnPZIoYnBhs7nk5RULeShFXPlyBLiUcgaD7xL1w3hKJWW2JSuneFF5SHONcu7adWTMH1f5EAXnSjnaml5GJ%2BEhPYpgqODEvzbCCuzG4xEiJJAJAFTmw0OLCPocR%2Bn%2BXNPjTwtaajpTX%2Fzp0w2G%2FoET5K25O%2FWq6Fxc7kRV8Sh76eRQKd%2B1dzhKK36c3MbJWLjTcxELomu1jTntbWK5jAyjCohlwgfIWJdxJ%2F3SMOgPV1xkZU69nQ%2BJKbW4LnlJXZIfDZba8o%2BHAK7vZ5MyVL95Jo2L2qEw3rqWxAY6pgH6s6id0H2J6ugvUpU9MjXQmD7NhpERNOU69xdoK4LN3l7JL4zzcRSYxJ9aLmJW%2F%2Bb8cwpravaxV0P04xAD5jSlnz554PTohdAD54gMrhmy2%2B3J5oklHY23%2F3lsaUPSXE%2F8w9fM6hPtNItE2XQSDupSKtS53XlVH0NtlebS4NOvR4Q%2BEZF2ATSpzwbtAsUxajU9Com2wAq96SNoWSTDICuPHexaUKsF&X-Amz-Signature=39f8b9dfe5aa41a1a0a9d956761295675d6121deca7c5815d35bf7b40b653c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
