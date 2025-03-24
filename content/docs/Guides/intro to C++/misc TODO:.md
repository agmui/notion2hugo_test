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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5GIEDT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYrlHrae8pTXIGDsIlvdKUojsiwXZkYPDAUofXXP4qwIgLNDg8AHVnOAUccGNfdGbd0Co0y%2B%2FPB11kkHN%2BmeF6G8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKm9DfukcuK3HRILKSrcA4plUmrkyDWu3bPXFdg1jFe428s8Na%2F85rWy5lTPklhfaIcwIFfI5mSA%2FIkbNAnUQanUPCANpa%2Bnd1UKd7qnNE4fNt%2B3zSr9fuxQr48y6WBQgAdhmHmWlzz%2Fc6eombfwN4aO8x3ngjF5beN%2BTSbUBTZ9Levhxrrr4LWd5AfB%2B4Aht6k0y4hgq6EhGi7KYWI22AYhtyUrSVqr2ZAmeuolwDhI8kvBnCv%2BbCMqhciEhrNwj8Kf5BSRKzX7SdSdRGIXzjG9C6Ra9mjgW6MPOwRsgDm9djYuhyIA1BsajqfjO5pqhh8f5j1FtR7bnmtqF6mvxtuUmMRvtAtrUSRk6HXn6iapGwIowOOLRq80cPlTpGhvQaKloEQKc%2B%2BCzyhsLqFYekGz%2FxgvSX%2B67G2isPKx7saktuFYO7rCQqz5FJqjhcaINiC5h7aSFUX8f7dFgutSqQGmL%2Bg0S9t03u3z5zFA7CEwdXG2pL9jkArXHGCFZ8F8IQtn9mTLOhO0FSajW7w8lD1ZZh6n%2B6xdGv5Ub%2B%2BNhj9XjirdvhxF7zQcsANcL8H5ms9VzpvJVVOiCH1IrhAGzPiUSAdMJAmqrGsunjh7rP5fwBPtMTiiTPVof6og6HTTkX4izfg3MryJ365IMP3Wgr8GOqUBZWRiCyOBpo8g%2F%2BTE54ihLiYpw%2FMZjlOsU1uLT%2BHypipmIpcBjW3XNYD7XJ6KSSlaGhTeRbAKlEu51Zws%2FlhYDsiibIGBHMFzB2kUyTN4YuHhOhYGyvlsVkaWh1VNaOmz%2Bcc8tmBMyGhsRV6egHlIx8%2BTV9hQD5SRrkLmX%2FOKJweFxFCqi51%2BXCOI3XO5jGpurKjACG0iQYNrvAMOip85QbhxXhrd&X-Amz-Signature=48ef2e93e1eba17f8e8e95dfed036ce2ba586239fd009292371f9fefaf8319d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5GIEDT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYrlHrae8pTXIGDsIlvdKUojsiwXZkYPDAUofXXP4qwIgLNDg8AHVnOAUccGNfdGbd0Co0y%2B%2FPB11kkHN%2BmeF6G8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKm9DfukcuK3HRILKSrcA4plUmrkyDWu3bPXFdg1jFe428s8Na%2F85rWy5lTPklhfaIcwIFfI5mSA%2FIkbNAnUQanUPCANpa%2Bnd1UKd7qnNE4fNt%2B3zSr9fuxQr48y6WBQgAdhmHmWlzz%2Fc6eombfwN4aO8x3ngjF5beN%2BTSbUBTZ9Levhxrrr4LWd5AfB%2B4Aht6k0y4hgq6EhGi7KYWI22AYhtyUrSVqr2ZAmeuolwDhI8kvBnCv%2BbCMqhciEhrNwj8Kf5BSRKzX7SdSdRGIXzjG9C6Ra9mjgW6MPOwRsgDm9djYuhyIA1BsajqfjO5pqhh8f5j1FtR7bnmtqF6mvxtuUmMRvtAtrUSRk6HXn6iapGwIowOOLRq80cPlTpGhvQaKloEQKc%2B%2BCzyhsLqFYekGz%2FxgvSX%2B67G2isPKx7saktuFYO7rCQqz5FJqjhcaINiC5h7aSFUX8f7dFgutSqQGmL%2Bg0S9t03u3z5zFA7CEwdXG2pL9jkArXHGCFZ8F8IQtn9mTLOhO0FSajW7w8lD1ZZh6n%2B6xdGv5Ub%2B%2BNhj9XjirdvhxF7zQcsANcL8H5ms9VzpvJVVOiCH1IrhAGzPiUSAdMJAmqrGsunjh7rP5fwBPtMTiiTPVof6og6HTTkX4izfg3MryJ365IMP3Wgr8GOqUBZWRiCyOBpo8g%2F%2BTE54ihLiYpw%2FMZjlOsU1uLT%2BHypipmIpcBjW3XNYD7XJ6KSSlaGhTeRbAKlEu51Zws%2FlhYDsiibIGBHMFzB2kUyTN4YuHhOhYGyvlsVkaWh1VNaOmz%2Bcc8tmBMyGhsRV6egHlIx8%2BTV9hQD5SRrkLmX%2FOKJweFxFCqi51%2BXCOI3XO5jGpurKjACG0iQYNrvAMOip85QbhxXhrd&X-Amz-Signature=b855664752e9eb3b916c9f42ac43956f07983a97025549b50206b4e9bb8f5de6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
