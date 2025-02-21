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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZGTIFO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATJxsBZEQuxIHBo1%2BuC2TPS7Ix7rnygzAaFq9Mw5C%2FOAiB1IyzANsWfghYAM%2B1P8d68HLzmCf1QDL8SMpRcGZDWCCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nX4bY%2Flt5Bz8hsKtwDJPhAxDLyoJFpnrbRWDg4R84dYch19jpC5wXZedKcz2xR3SZoF7mVDMs8rEwROs1bOT7OBGskWFZ8zswzWqlFojMuSBclw3fs1SrXI3fUk0PMDzPblxhueLKkenEPj3mM4iwdyAujfn0ph91DDJ2R4tL2KHgdtCZfCamtJmO6EZU%2BSpHahtmLCyywg504Wd0e1sAXPu8mFYuhCo4CHb%2BqdfQeIxoD2rHAcBLoRLUl2xYDf0VS38yHwKfYRU2GQ%2F3acadV1JTvXLN5y98rjszQa3Ztg7RscPHHLDto6Po6xmUhogcozlMeWhrkBKcuNRqTVlFb6Ds%2Fua7N4vfbktA75EsrxnoTNzSWz6EKqE3SJsWSyBzpoEcAWfHhV1Stig6%2FNH8x%2BFpKOjb5oMfCR95%2BW%2BHFnaqOlHdQTYPZ00g6F9J8h8MU%2Bgvd9gVHXGZArqOOKFzvGLfNfxxcpEshoyzIROiZzoVXyMzYIeprnk5HDk0FUbAZYpovf4pvjEsFuoI621A3ClIuRM8G%2FgaYB5K4HFAFTN32oMK4I99kYT0frkpJN96SIxhOhudJaCkBcl0Xrq2u04NbVc0%2BMX7%2BV%2FGRhYLD3dl72L%2B0zQ4XkdvaBv6myUaQrtWHh1WbSeAwocnhvQY6pgFfkL7%2BNecgUbSseEDJG8lO22LNh%2F1KOED7tmvgnF8Ad7YQHcWCvzTA9dHLBWV3Hzdc2y76InMtjAXhwQMNshndBEGoTYXGHNqU7FPCUsskve%2B1I%2BNrm62BXPgB06DMyjzDwTpL332I5qxCEkCAeU8855Nfpixo2Bzw4Ugp6I5x%2BGhlCTdiNuLclQBr3Vo5WoYG10r6%2BnQO0lVViadj55fk2nv0TPvd&X-Amz-Signature=edf1fc6d3b1c56fb44ac80ee06554c451f01b0cc747ca2bbab8b924960967b92&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZGTIFO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATJxsBZEQuxIHBo1%2BuC2TPS7Ix7rnygzAaFq9Mw5C%2FOAiB1IyzANsWfghYAM%2B1P8d68HLzmCf1QDL8SMpRcGZDWCCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nX4bY%2Flt5Bz8hsKtwDJPhAxDLyoJFpnrbRWDg4R84dYch19jpC5wXZedKcz2xR3SZoF7mVDMs8rEwROs1bOT7OBGskWFZ8zswzWqlFojMuSBclw3fs1SrXI3fUk0PMDzPblxhueLKkenEPj3mM4iwdyAujfn0ph91DDJ2R4tL2KHgdtCZfCamtJmO6EZU%2BSpHahtmLCyywg504Wd0e1sAXPu8mFYuhCo4CHb%2BqdfQeIxoD2rHAcBLoRLUl2xYDf0VS38yHwKfYRU2GQ%2F3acadV1JTvXLN5y98rjszQa3Ztg7RscPHHLDto6Po6xmUhogcozlMeWhrkBKcuNRqTVlFb6Ds%2Fua7N4vfbktA75EsrxnoTNzSWz6EKqE3SJsWSyBzpoEcAWfHhV1Stig6%2FNH8x%2BFpKOjb5oMfCR95%2BW%2BHFnaqOlHdQTYPZ00g6F9J8h8MU%2Bgvd9gVHXGZArqOOKFzvGLfNfxxcpEshoyzIROiZzoVXyMzYIeprnk5HDk0FUbAZYpovf4pvjEsFuoI621A3ClIuRM8G%2FgaYB5K4HFAFTN32oMK4I99kYT0frkpJN96SIxhOhudJaCkBcl0Xrq2u04NbVc0%2BMX7%2BV%2FGRhYLD3dl72L%2B0zQ4XkdvaBv6myUaQrtWHh1WbSeAwocnhvQY6pgFfkL7%2BNecgUbSseEDJG8lO22LNh%2F1KOED7tmvgnF8Ad7YQHcWCvzTA9dHLBWV3Hzdc2y76InMtjAXhwQMNshndBEGoTYXGHNqU7FPCUsskve%2B1I%2BNrm62BXPgB06DMyjzDwTpL332I5qxCEkCAeU8855Nfpixo2Bzw4Ugp6I5x%2BGhlCTdiNuLclQBr3Vo5WoYG10r6%2BnQO0lVViadj55fk2nv0TPvd&X-Amz-Signature=67ecf06c2f3d25c145b42e45dd1e86f5f52f96badb28731f79c6eecd8f8d2cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
