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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC5XWMJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDL6SmR1kJ%2FDoUqQwxqC0Kwhgmc2E5vI2MnjCoGakm3AiBn%2BY3dsqi4O5Jjd8XxXwDF9pTsLvRxMzMfgSotGj%2B1MCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdemR8BfxX85zC3RdKtwD%2FJ7MoBc9nM38MBMWSZHBZoLWSZGYlb7LeiC5lh12c%2FquzFMedsQJp3t3ZFsMgoQ5oJWm4EzLiatFXTavyBf8MaLNqAQI0KgFcgJTva01dvKotpiT0dXopYRqo0JrCWnp3ye2HXkLqLsLO2eZo0x7pdijiVq%2FqZDDV%2BlvJGiP1Lp3g29Z4bjulsHq8yP3FgZLgazb6x96zN3VQg%2F9%2FwMVT0Vjq8rND2aaAdbfAllH56KSbP5GoPx0leH8D0Dfu7%2FqofVwA3przOtpMmDIrQj05p3yByjxRQuM%2F7hvF91TXqbEQauoU3WaKsuz0KLGTYIF72w5pkaJLG2kAaQIiaR2OSPJeSazeoAMbVYJE9Fe22htTm3%2FCFKpDF%2B21KPRdnoWvSHJfRJdugRb%2BxYKnGFARI9eRXuoEDGRkTkf%2BIA8hvbbQYPxFSohU2uDEMFU1D9zIw9MrrQCU%2FhQWGCqEfGdY3PnFpf08TyY046sU50M%2BnhqPrN1ykqmyCHBtFlTxTuGDWaUJcrAVCH0VHfQJKilDt0C0%2Flw1dueJ%2BhYqOsz1%2FtiZHHEwAVwIbV%2BYJlS%2FlSDOkQPHwA%2BNtOJelEPqDy5rfPnRm5hBZw6uVGaUAbOggh8TYJ%2Fox%2BrQI2QfvAwgJ%2BovQY6pgHcc62N%2BaB85SjDFhuduvWzsskrmmw99WIHQPL%2BzBvppbSWBMEP4Ec1S2%2B2aNa6DhXWsr4Y7yeSU0B1DxiSPVlvhaj5M2JQHP0UmSXyyEjCMtmhuHsQeuKGJYOy%2BJ%2FIFJerpLVWL4n7Jf3dNuT411PwWWJxz%2FZVVPs6En2pgZH68Ml7DwistnMJYZm7Zrryznlb%2BctdO8zHjGVBMBXGaiK%2BpufQDjuz&X-Amz-Signature=ef4bea8d4fc350424d274daae89b9a1a9cd8f215091a29f0f7d15f84f61a32a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC5XWMJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDL6SmR1kJ%2FDoUqQwxqC0Kwhgmc2E5vI2MnjCoGakm3AiBn%2BY3dsqi4O5Jjd8XxXwDF9pTsLvRxMzMfgSotGj%2B1MCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdemR8BfxX85zC3RdKtwD%2FJ7MoBc9nM38MBMWSZHBZoLWSZGYlb7LeiC5lh12c%2FquzFMedsQJp3t3ZFsMgoQ5oJWm4EzLiatFXTavyBf8MaLNqAQI0KgFcgJTva01dvKotpiT0dXopYRqo0JrCWnp3ye2HXkLqLsLO2eZo0x7pdijiVq%2FqZDDV%2BlvJGiP1Lp3g29Z4bjulsHq8yP3FgZLgazb6x96zN3VQg%2F9%2FwMVT0Vjq8rND2aaAdbfAllH56KSbP5GoPx0leH8D0Dfu7%2FqofVwA3przOtpMmDIrQj05p3yByjxRQuM%2F7hvF91TXqbEQauoU3WaKsuz0KLGTYIF72w5pkaJLG2kAaQIiaR2OSPJeSazeoAMbVYJE9Fe22htTm3%2FCFKpDF%2B21KPRdnoWvSHJfRJdugRb%2BxYKnGFARI9eRXuoEDGRkTkf%2BIA8hvbbQYPxFSohU2uDEMFU1D9zIw9MrrQCU%2FhQWGCqEfGdY3PnFpf08TyY046sU50M%2BnhqPrN1ykqmyCHBtFlTxTuGDWaUJcrAVCH0VHfQJKilDt0C0%2Flw1dueJ%2BhYqOsz1%2FtiZHHEwAVwIbV%2BYJlS%2FlSDOkQPHwA%2BNtOJelEPqDy5rfPnRm5hBZw6uVGaUAbOggh8TYJ%2Fox%2BrQI2QfvAwgJ%2BovQY6pgHcc62N%2BaB85SjDFhuduvWzsskrmmw99WIHQPL%2BzBvppbSWBMEP4Ec1S2%2B2aNa6DhXWsr4Y7yeSU0B1DxiSPVlvhaj5M2JQHP0UmSXyyEjCMtmhuHsQeuKGJYOy%2BJ%2FIFJerpLVWL4n7Jf3dNuT411PwWWJxz%2FZVVPs6En2pgZH68Ml7DwistnMJYZm7Zrryznlb%2BctdO8zHjGVBMBXGaiK%2BpufQDjuz&X-Amz-Signature=c5fe4faf06b08f97c498b511bea1c7915f747f8cc8786ca1ab53d41335f4094b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
