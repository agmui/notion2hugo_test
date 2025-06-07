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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMPOEPAP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2FCwg2VoDwfihR%2BgARsyNlFP7Ja348ic5GsgTfYzVdAiBylJmjyAAj184g%2FlCpbs9v386Jtm9Pv4aXWui5PP81oir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTQ0t%2BxvmfQdLPgFEKtwD3rt4XTYrVRerqR8WNM40U9q%2FEFsxIJBkbhoti544z%2BRAsSbh7rvuvk%2FdivcaNInt16Nr0wbTotZu%2BTYWDhOgxnt124iRI%2BGc%2FybZzXqMMtYMMAqCNDHkrF0%2BXYKdxB%2BHPAP10e9bgfj2qAk2yhRAMsaPWtcAH0%2BgXdohqMYHa7hNZswg8ypQxgm2FbtdP9bYVp39by3qLs5O2cRFvrFmh9joH3hRGEF5GBDWlQZ4GkMcPLz8%2Bp%2F6%2BVTk56uGFlsx7HLXP8yIhbzRF1RcdRUNd5%2FTDEoXcAL%2BIsOnAje1PqFoGejYtfbcomcLo1hUTXBTaXhuVdS2GHHWSWrIxAmowKsPrMtJ0XGvB14MF%2B5FTVAoue2w9tr05vhLHmrRHkgiiUYQarXEs5AvCfVDxBwdnMHEjwRAnatLsFydAZ93ft3t5A70XsQQNjUA%2FzFZ60Eah3AEy7XvCujI7Yz4B%2FsOAV198TtkmkWlLkF%2BJOWUb4NtKOt5o9VRntGRZTgw6ogXlQlvRMK8FGzpapLuz5Zbov6ktlD0vcg4%2BlJ%2FUpPvq112AGOPbvKVeoPYBSByyXn5V0PszGjQAWkUCkIxKIvk4dYbNfd%2F2d9fRwDT649KTtuSCob0D%2BODfNfScv4wqPqPwgY6pgEM2jAw0vNoDVHCDoUAJlsN4KrOr2nIOotQVOpYCX7jHUMqj4iy15xkauOHyN%2FsO%2BkS5Zi4nBGBF2VRbddHg8uaXX9tudlb2jTz3QwRNvY2qb7AgpVQK6U6AjibSobPiJbHNCR9xa%2Fd%2BRPX0BKRTvTwmUzxs30Cwc5tosKomJa%2BjTmAcu5lA3N4wr%2FBU0UTOaYf51uOaOf7c1xlSHGt43SOkfwTlWps&X-Amz-Signature=08c9e3b11d2d5661c4a3975e74cb0989875dc88360f8392ee2c1554b098dd5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMPOEPAP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2FCwg2VoDwfihR%2BgARsyNlFP7Ja348ic5GsgTfYzVdAiBylJmjyAAj184g%2FlCpbs9v386Jtm9Pv4aXWui5PP81oir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTQ0t%2BxvmfQdLPgFEKtwD3rt4XTYrVRerqR8WNM40U9q%2FEFsxIJBkbhoti544z%2BRAsSbh7rvuvk%2FdivcaNInt16Nr0wbTotZu%2BTYWDhOgxnt124iRI%2BGc%2FybZzXqMMtYMMAqCNDHkrF0%2BXYKdxB%2BHPAP10e9bgfj2qAk2yhRAMsaPWtcAH0%2BgXdohqMYHa7hNZswg8ypQxgm2FbtdP9bYVp39by3qLs5O2cRFvrFmh9joH3hRGEF5GBDWlQZ4GkMcPLz8%2Bp%2F6%2BVTk56uGFlsx7HLXP8yIhbzRF1RcdRUNd5%2FTDEoXcAL%2BIsOnAje1PqFoGejYtfbcomcLo1hUTXBTaXhuVdS2GHHWSWrIxAmowKsPrMtJ0XGvB14MF%2B5FTVAoue2w9tr05vhLHmrRHkgiiUYQarXEs5AvCfVDxBwdnMHEjwRAnatLsFydAZ93ft3t5A70XsQQNjUA%2FzFZ60Eah3AEy7XvCujI7Yz4B%2FsOAV198TtkmkWlLkF%2BJOWUb4NtKOt5o9VRntGRZTgw6ogXlQlvRMK8FGzpapLuz5Zbov6ktlD0vcg4%2BlJ%2FUpPvq112AGOPbvKVeoPYBSByyXn5V0PszGjQAWkUCkIxKIvk4dYbNfd%2F2d9fRwDT649KTtuSCob0D%2BODfNfScv4wqPqPwgY6pgEM2jAw0vNoDVHCDoUAJlsN4KrOr2nIOotQVOpYCX7jHUMqj4iy15xkauOHyN%2FsO%2BkS5Zi4nBGBF2VRbddHg8uaXX9tudlb2jTz3QwRNvY2qb7AgpVQK6U6AjibSobPiJbHNCR9xa%2Fd%2BRPX0BKRTvTwmUzxs30Cwc5tosKomJa%2BjTmAcu5lA3N4wr%2FBU0UTOaYf51uOaOf7c1xlSHGt43SOkfwTlWps&X-Amz-Signature=32a1268f0a879e9efeed9f5d88910e36c8012d747e64a380e996e2445e003f79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
