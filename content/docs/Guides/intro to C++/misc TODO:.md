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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODOQMME%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQ1VPSku%2Brwp1kQfazYWGsKWIsZLasf0Lmbp2Nm8xbDAiB28sxEI7zLYKp0YCpnzdJgCoQqtJaK27MAKoFLEcZ%2BGiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejZLtWJgEsPyko7%2BKtwDUIYDP2YNHS25L3Q75CWN1LjqiNabNfXdeGJYIKxt65ymQoVVz0u8kBHZBC2mcU4JShiN0KakSyrwTyKc7BS%2BLIszQ0mq1qnm1Y8U0GS14aUhjSz5qEC%2Bo9zsKPiYdiRAz20FshNG4ndFxXbaGlZu8LOTjlNidaE78%2BrIAHn7mbOJRXarqc4GgK2ZaHM5TpUF%2BWoaQn2njzo00uBaybpr8hwv0kbvy0YMOBtKBpWREyyilxt%2FFKV5MaUH06gSVOeyRg7h9G%2F%2F%2FtvOaJEHSoCNSoEaEoy8FtUoeUzNda%2FGIaoNjHQ9QipZrk5cWjooDd%2FWur8BjxuYMNH4h8TftJab7I7oBe1GI9sa7cWW5fk%2B1uVuPR0PEW6Mi6kG2mYwIgrh%2Fe%2F7UZ5lz0nTK%2BANezvlezNKuDtAlQuD6jM4DM%2FEpS6sGb4QDFTEMUbiDL%2BkXTL0zSIcKaRnxEt4H3vva%2FwbOTlxLzXsKYTa36YFCJnifXRxyYJ6rINtpQo835SfESmRNm9wQ0LK6CnJFLEDFzz6OXtpHgAqkFqz5hhIXvPFTnnjV44Fniz0dISzGZAMKWqcDyUdlWiXqBuifEjzJB8Ggvrd%2FcTZS7V2N8dDyRjat5Zf5zTjvpw8Gs8tibowrITOwgY6pgHIH3p65%2BuMUiXLByh%2B7640VSEXmcTkgE7i%2FMZBAq2CzJ82h8rsKD3gz6MK2EopLZsru5P17S4v3bGExNpyJTZN%2BnTtwaw%2FsL5RVNGEqmDbt8opY7s3xk2FLnl5XtcwGsMiRCmJRRi0jkE9bEVce7Ll2LrROUzIK4hCgbbppbsIQ2uDnI2ro0TruYesny9jkDK2OTwHF8OVrSt9HmmiW8ph11zklzpR&X-Amz-Signature=37b4e5bb8a5d030dbfc951515eeb71cc872f90aeb782c5064293e6771e3ca021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODOQMME%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQ1VPSku%2Brwp1kQfazYWGsKWIsZLasf0Lmbp2Nm8xbDAiB28sxEI7zLYKp0YCpnzdJgCoQqtJaK27MAKoFLEcZ%2BGiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejZLtWJgEsPyko7%2BKtwDUIYDP2YNHS25L3Q75CWN1LjqiNabNfXdeGJYIKxt65ymQoVVz0u8kBHZBC2mcU4JShiN0KakSyrwTyKc7BS%2BLIszQ0mq1qnm1Y8U0GS14aUhjSz5qEC%2Bo9zsKPiYdiRAz20FshNG4ndFxXbaGlZu8LOTjlNidaE78%2BrIAHn7mbOJRXarqc4GgK2ZaHM5TpUF%2BWoaQn2njzo00uBaybpr8hwv0kbvy0YMOBtKBpWREyyilxt%2FFKV5MaUH06gSVOeyRg7h9G%2F%2F%2FtvOaJEHSoCNSoEaEoy8FtUoeUzNda%2FGIaoNjHQ9QipZrk5cWjooDd%2FWur8BjxuYMNH4h8TftJab7I7oBe1GI9sa7cWW5fk%2B1uVuPR0PEW6Mi6kG2mYwIgrh%2Fe%2F7UZ5lz0nTK%2BANezvlezNKuDtAlQuD6jM4DM%2FEpS6sGb4QDFTEMUbiDL%2BkXTL0zSIcKaRnxEt4H3vva%2FwbOTlxLzXsKYTa36YFCJnifXRxyYJ6rINtpQo835SfESmRNm9wQ0LK6CnJFLEDFzz6OXtpHgAqkFqz5hhIXvPFTnnjV44Fniz0dISzGZAMKWqcDyUdlWiXqBuifEjzJB8Ggvrd%2FcTZS7V2N8dDyRjat5Zf5zTjvpw8Gs8tibowrITOwgY6pgHIH3p65%2BuMUiXLByh%2B7640VSEXmcTkgE7i%2FMZBAq2CzJ82h8rsKD3gz6MK2EopLZsru5P17S4v3bGExNpyJTZN%2BnTtwaw%2FsL5RVNGEqmDbt8opY7s3xk2FLnl5XtcwGsMiRCmJRRi0jkE9bEVce7Ll2LrROUzIK4hCgbbppbsIQ2uDnI2ro0TruYesny9jkDK2OTwHF8OVrSt9HmmiW8ph11zklzpR&X-Amz-Signature=d0e273d2126a78ecb99f1a2d707ec2b3476c5bdeb05652abd449222847a4e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
