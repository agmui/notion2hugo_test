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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SILGB4CL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAtvdFUORsAumeb8oRWk4juhIm23YEyzj54dh9offm4fAiBN7h2P%2F%2Bi9I7wYSOTdh4kRGB7M%2BGbto8dYAjJkzdr5Qir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMD%2FfeTQ05i9aSI8eYKtwD1BJNmqDcetDkKmv99kiCKR3PgSlBqR%2BAJ3RCDeOmkKwNBv02T2z0p%2ByMtnkCELJIgriIteoJmTclRj%2B3Rz1dZdqyj35lk205J8uJHuJEVgV9mYENyD%2B75eEDxNmpjV%2Bzy0VWBbk1P4h%2F0Jnnjzyw5SpwSsUP4AMhcFvALeFNhC5ULxPYD5HZIEL4in0%2BtQh01CtkWkT1YVUWx2s7%2BUewTtk5WPOHGLZfAdsj%2B4Ay1Lax3e0mksdISsdAu2G8VcdWLzPDlaEfin%2FwbiZkLClkttImB8itzM%2FYJtXo8cs0TSf5cTZ0AOSwX0QaHfj%2BlAcOQHL8ZFhK2a350Yy2W33I2hIgtClnfqMdrKFpiLyGGdVspwWkY7kpv%2BpbxR1XuhtlbpMqN7c9F%2Fi4QKBaHg4FQWnWsh5cC9swLtd5fwMZFg%2BZyTTQXY0AnYhkPDPYP9zw64NBxZrXWe21RElF7TPkYHfpImQ675asZ%2FHJbM3Z7RUVHIDVSKJbeXXE5xdeB0W0OHcDIIs%2FhsShhU4SeIuxrmOypedRIxIaIxjCQOKSnMOcMYGdoDfWdgXKJMtf1kNvx6jj4z1Hm6wgTJRUbOr4zPT0b3rEA9%2FOK1j5ISd8Mfp2t6BAQVrwdbDcTYkw7J2TvQY6pgE7MzuYH%2BEobgw96MMC7nzyyKOXFazziwby4YKEeDbi6DgMeZve8HT%2Ft2gu5B7z19mHvPVHvTi%2FtXt9z8fEYakiew2yr5KGpwPB9uA682SSDbgEHw9ZEFEaxKI56PVH4PswGUdOwb6rmvHnTJQ1Wg7O3SjtovlKsKSXJ4u5cHCu2cU30J9EWDJKQ3uEtccahs94xLMdLOYVxxC4GHP%2FAB6Mrj68aBHg&X-Amz-Signature=5f6773a1df6909547e103af18b09d32df5637880ff1d6619006ab2e3221ee609&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SILGB4CL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAtvdFUORsAumeb8oRWk4juhIm23YEyzj54dh9offm4fAiBN7h2P%2F%2Bi9I7wYSOTdh4kRGB7M%2BGbto8dYAjJkzdr5Qir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMD%2FfeTQ05i9aSI8eYKtwD1BJNmqDcetDkKmv99kiCKR3PgSlBqR%2BAJ3RCDeOmkKwNBv02T2z0p%2ByMtnkCELJIgriIteoJmTclRj%2B3Rz1dZdqyj35lk205J8uJHuJEVgV9mYENyD%2B75eEDxNmpjV%2Bzy0VWBbk1P4h%2F0Jnnjzyw5SpwSsUP4AMhcFvALeFNhC5ULxPYD5HZIEL4in0%2BtQh01CtkWkT1YVUWx2s7%2BUewTtk5WPOHGLZfAdsj%2B4Ay1Lax3e0mksdISsdAu2G8VcdWLzPDlaEfin%2FwbiZkLClkttImB8itzM%2FYJtXo8cs0TSf5cTZ0AOSwX0QaHfj%2BlAcOQHL8ZFhK2a350Yy2W33I2hIgtClnfqMdrKFpiLyGGdVspwWkY7kpv%2BpbxR1XuhtlbpMqN7c9F%2Fi4QKBaHg4FQWnWsh5cC9swLtd5fwMZFg%2BZyTTQXY0AnYhkPDPYP9zw64NBxZrXWe21RElF7TPkYHfpImQ675asZ%2FHJbM3Z7RUVHIDVSKJbeXXE5xdeB0W0OHcDIIs%2FhsShhU4SeIuxrmOypedRIxIaIxjCQOKSnMOcMYGdoDfWdgXKJMtf1kNvx6jj4z1Hm6wgTJRUbOr4zPT0b3rEA9%2FOK1j5ISd8Mfp2t6BAQVrwdbDcTYkw7J2TvQY6pgE7MzuYH%2BEobgw96MMC7nzyyKOXFazziwby4YKEeDbi6DgMeZve8HT%2Ft2gu5B7z19mHvPVHvTi%2FtXt9z8fEYakiew2yr5KGpwPB9uA682SSDbgEHw9ZEFEaxKI56PVH4PswGUdOwb6rmvHnTJQ1Wg7O3SjtovlKsKSXJ4u5cHCu2cU30J9EWDJKQ3uEtccahs94xLMdLOYVxxC4GHP%2FAB6Mrj68aBHg&X-Amz-Signature=31bf0404dc7ab6af1beb2a3d6f87314675fe60c9b597a71d1b09d3bd0e369a86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
