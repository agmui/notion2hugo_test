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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPEBWBS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHYm19SafARZZX7tOboHiXkctosVQqxK5pG2RH6qEg4EAiBzokrdkvtvjk5hjFKJMrGlpFef%2BR%2F4PHvBsDLcP93aYiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDUyxaJlkLZQgKC4KtwDpjkX8%2FWnx9Vc21fG1jfc0nyK7LFtSFUL3dXbSyEB4vRXKDZmUQuQIV%2Bk7HQGB8ecPQ%2BwPSYM6iuQuo4xoREbr35gYBF40IrOQ7iyMJbZcPm6OqVz9ocDx0KoK2s%2B9HS7MT5dTtbdLKi12xXaRpFhKrLdk1AfiVkEjNMbasE6Ij3mauS4vQTT3%2FDrMyoxcimPhok9YcGD%2BdNMADLqIo8fL%2B%2B0m3K%2FcBM5%2FOxdVV6pqFj99FBzhE33erwMyAk8gCNxf3Ecl6Sa4eSa%2FBX6secWY%2BKgeXgHWhbpI8CJipvpNP%2FzueXQ%2BMePP7jSmFcM1eZjCioOI2TMZnvRvi5Z5pwMdNC%2BCwnRRkiMICVkmP4OAF5gqRoyM%2BIrDF6Endb5iDvZu0Nkv%2B0r324%2B%2F94ni8J3YfGGf%2BEcr7yyG0TOs%2BF3bZmYtSNKuCfmTG8iBPaP2InE41TQqF5ir6sgFnUmpdRijLeBXX5BANUKxLH3oHOa7Ui8YFF7H3OEvNixiBwtBv4quOQkBkNYEjXwepAdUkCuLVgzC1p79gaLM%2BRI%2B5P7Oq0hKFvSJbw1TBdCdfhnilxHfU%2Bm7sHoGU5sURtZ2dfdb7B3Wm4dGzbWEF9AvG%2F8KQnIjVUZOOL62bmm%2FOIwisjwwQY6pgH%2Fxapk46VFrSoQlNeD6niACqIvH1BKkALJDWtSfRs7JKjyiJ50qPW%2BXmMTesmkzVXbpteOYH54Ix0D%2B3yOnI9S%2FkPtxcei82CssiWccrPTsTSIxs5mJ7HZwHLyXrB3p1y68OPA6fatA3t%2FanFm3m2JjrsYac7gomQpbOpy%2B6wNgG9gT7ppCj2mxIHvhiPwHacw3dPjgGAEXxnYeYSwhdyvShsxCocn&X-Amz-Signature=9d8090bbe3473f4c1382ac93d199b518f804be326547fb46015548876a22bda9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPEBWBS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHYm19SafARZZX7tOboHiXkctosVQqxK5pG2RH6qEg4EAiBzokrdkvtvjk5hjFKJMrGlpFef%2BR%2F4PHvBsDLcP93aYiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDUyxaJlkLZQgKC4KtwDpjkX8%2FWnx9Vc21fG1jfc0nyK7LFtSFUL3dXbSyEB4vRXKDZmUQuQIV%2Bk7HQGB8ecPQ%2BwPSYM6iuQuo4xoREbr35gYBF40IrOQ7iyMJbZcPm6OqVz9ocDx0KoK2s%2B9HS7MT5dTtbdLKi12xXaRpFhKrLdk1AfiVkEjNMbasE6Ij3mauS4vQTT3%2FDrMyoxcimPhok9YcGD%2BdNMADLqIo8fL%2B%2B0m3K%2FcBM5%2FOxdVV6pqFj99FBzhE33erwMyAk8gCNxf3Ecl6Sa4eSa%2FBX6secWY%2BKgeXgHWhbpI8CJipvpNP%2FzueXQ%2BMePP7jSmFcM1eZjCioOI2TMZnvRvi5Z5pwMdNC%2BCwnRRkiMICVkmP4OAF5gqRoyM%2BIrDF6Endb5iDvZu0Nkv%2B0r324%2B%2F94ni8J3YfGGf%2BEcr7yyG0TOs%2BF3bZmYtSNKuCfmTG8iBPaP2InE41TQqF5ir6sgFnUmpdRijLeBXX5BANUKxLH3oHOa7Ui8YFF7H3OEvNixiBwtBv4quOQkBkNYEjXwepAdUkCuLVgzC1p79gaLM%2BRI%2B5P7Oq0hKFvSJbw1TBdCdfhnilxHfU%2Bm7sHoGU5sURtZ2dfdb7B3Wm4dGzbWEF9AvG%2F8KQnIjVUZOOL62bmm%2FOIwisjwwQY6pgH%2Fxapk46VFrSoQlNeD6niACqIvH1BKkALJDWtSfRs7JKjyiJ50qPW%2BXmMTesmkzVXbpteOYH54Ix0D%2B3yOnI9S%2FkPtxcei82CssiWccrPTsTSIxs5mJ7HZwHLyXrB3p1y68OPA6fatA3t%2FanFm3m2JjrsYac7gomQpbOpy%2B6wNgG9gT7ppCj2mxIHvhiPwHacw3dPjgGAEXxnYeYSwhdyvShsxCocn&X-Amz-Signature=81d1b73cfea6e7cfc4997e83f00348c6ace7f902fde104f1f2cf4933eed055a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
