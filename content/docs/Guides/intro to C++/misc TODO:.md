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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WN6RH7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGNsP6jk%2BXRVCO9VMd5rqZZex9FH3qthd3SkFnKY%2Fp5HAiBgNldCiKbhvCBzd5UsmhUBLQDq484W1BC4udfhDT%2BnIyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMWYW1zjkr0hzciNA9KtwD5YOZmFjTDeFdDtRa8%2FbroswvQL6Zdg8alWeRFz1F3ejb%2FiyK%2FIicppjkZsdPs8NDorXq7zj16yfqimfT7c1zfibIYYxHc3%2B4KAxHoitROcUOLroN%2FxIOkeJPtD6m3lnBWFbTOxFgB%2BBfXngKNarnSg6jG7RZHTIaPw553MsCzm67sFpO5xaHMpECJ7WQkFMvh3BouDXghaZ%2FbCq2Cjc87otzgGuYBhnY%2B4q4NzzYiiCwA7mXqA%2B9R8%2Fis5U%2Bgcl8ecNdX0LGsEfVCNWnEWJ62Jng2PCfkL23ioEN3XH0c1mWqVSDfiZrtfl9B63BUJI99jZmzJpgSUiLdoqh2g%2Flnn24hSedLJEdCfzdjVP3FzqlTVpnWusNmTQ%2B2xFDuKE7VSCsSMTjbUwdtwH3UiZvHIJS4c13KOdPWA0zEUovORMEzoZqwjfeVt42sdteWXEOiIvWVnADK%2FEme1axW%2B%2FaSoOAXsie2wyGrSWLiZgaX1iVzYVPmHujsX7BTlFjFWlAJ75hcNSEJBbGvNR2%2Fxmzb7QJM3aLAFAWDKyYGmoFooPUCaZqg%2F%2F4dWfpQyQHR2hwTRxC5s5DOz2oKoEovHByRXCj68TqYht8rjBvQIeluQArQiDipEt8r8bpUnkw%2BP69wgY6pgH%2F1v6V33IEyZeEagLXYF1%2BHFgxqfKNmDqJEtggtcCXSEQ07d1r%2BSp1i64p%2FN75iJCl5phdDs4SigAuURAr8ARTMMKAQoSg%2BB1T6HbbHIiJyfoNymzKmPEQLFcEeTiC%2F2Q81VdpGUkGMb7nchrpSSTYd%2BC2WUxh7VMHfIIl7v7jM9HBT6QbJdJXmPwjt1lq5QGaWRHGt8hT38OxFK6mcRRSE4ygaL1f&X-Amz-Signature=5d80551beeb8e46070088176e3c592c08adee96c7670c5628f37d4b16d93e921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WN6RH7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGNsP6jk%2BXRVCO9VMd5rqZZex9FH3qthd3SkFnKY%2Fp5HAiBgNldCiKbhvCBzd5UsmhUBLQDq484W1BC4udfhDT%2BnIyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMWYW1zjkr0hzciNA9KtwD5YOZmFjTDeFdDtRa8%2FbroswvQL6Zdg8alWeRFz1F3ejb%2FiyK%2FIicppjkZsdPs8NDorXq7zj16yfqimfT7c1zfibIYYxHc3%2B4KAxHoitROcUOLroN%2FxIOkeJPtD6m3lnBWFbTOxFgB%2BBfXngKNarnSg6jG7RZHTIaPw553MsCzm67sFpO5xaHMpECJ7WQkFMvh3BouDXghaZ%2FbCq2Cjc87otzgGuYBhnY%2B4q4NzzYiiCwA7mXqA%2B9R8%2Fis5U%2Bgcl8ecNdX0LGsEfVCNWnEWJ62Jng2PCfkL23ioEN3XH0c1mWqVSDfiZrtfl9B63BUJI99jZmzJpgSUiLdoqh2g%2Flnn24hSedLJEdCfzdjVP3FzqlTVpnWusNmTQ%2B2xFDuKE7VSCsSMTjbUwdtwH3UiZvHIJS4c13KOdPWA0zEUovORMEzoZqwjfeVt42sdteWXEOiIvWVnADK%2FEme1axW%2B%2FaSoOAXsie2wyGrSWLiZgaX1iVzYVPmHujsX7BTlFjFWlAJ75hcNSEJBbGvNR2%2Fxmzb7QJM3aLAFAWDKyYGmoFooPUCaZqg%2F%2F4dWfpQyQHR2hwTRxC5s5DOz2oKoEovHByRXCj68TqYht8rjBvQIeluQArQiDipEt8r8bpUnkw%2BP69wgY6pgH%2F1v6V33IEyZeEagLXYF1%2BHFgxqfKNmDqJEtggtcCXSEQ07d1r%2BSp1i64p%2FN75iJCl5phdDs4SigAuURAr8ARTMMKAQoSg%2BB1T6HbbHIiJyfoNymzKmPEQLFcEeTiC%2F2Q81VdpGUkGMb7nchrpSSTYd%2BC2WUxh7VMHfIIl7v7jM9HBT6QbJdJXmPwjt1lq5QGaWRHGt8hT38OxFK6mcRRSE4ygaL1f&X-Amz-Signature=de547948ea089c33b489801c936354c17676f87d5834032339fe2d2fd15e09fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
