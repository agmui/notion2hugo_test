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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GLTCRZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8olGywJi53%2BNM%2BkN6tHj5CZOfSsdVGhpZPs%2FTGpl7eQIhAOngQ%2B%2Fy1RClErIrXhdKzhfvNoX%2F9xkVIOqKU3atMWmoKv8DCFoQABoMNjM3NDIzMTgzODA1IgzT%2BLHS3wTlShtEbOAq3AP%2B8VYXvEFXcbNCIhhhxdjfnZuUYQHWyiiR7XLA2PFH3d0zwrDGfkGdD3KvqdCU%2BUR69GQYEQOEx9Nam2go1SaDrVKOrIayj2eUCgdPjD2BX76sdQKY3Ob%2FRtr4q60BvMLw86b1iifypSedyDk3MxA5tvNcd%2FnxaBBMuuFMux2oylNDC5kx6cVt8x%2FLMGVsOD7mTjC0u7gnNnTidaxAek8oSw5mFG2O%2BiszlbajlgKnedv6enISjjU3sDWTFAJmk%2Bg%2FLo1VWFgpYTwy6astopweVALAAVsXD4W5LLb%2FvrKDnpdHAUDXlXhLSh7Bv43HXYzysrdRkFKJ7Puu7TjAcOCpLgcXYloK%2FnxDg%2F%2BJIiAI04u1295AMGaIfxEhsnu%2FvrmBOHeeOSVO8rdr09GZi2ZGCUy6jT7GblJxb9SLYDARAHTVdHozlt9CWGslLsRB2GuALdCXr4YgjFxVs7riFGfAawiRwC%2BEeMn3EKxCXLdymgFETa1T2HVFIh%2FBzXN4cUmaulsVuRw1i%2Fs0StsikEE8Je35ASQRaDhLHbxx4ErW5yumB1ZRSz%2Fv4EuBIjfkEj2UjsfNaAYl0zzlDMcGhjJkFplzRDCcgUrnr2rnPOxmNPUdhXRFZ0QxSQaOXzDRsezABjqkAU5Wj61MFhCqyCkUw2fzpQXFs7stJrRrCGdhdhzURekkfXjPohGctpMB0ZBnoG3uycZ%2B%2FRJW0B9PM3gwM%2BrqtWBuXDXrBfFTPIjrcvbbOyY0e8syhHte5%2FZTF48vpWYBUDeWK7jGLadWGdnTn83RnozXTohiOy2RzTq38j8HmHDU2uKiD2xrpW16gDriwzp5pIv4LLzdsynV33WdeYLejf5rPpEQ&X-Amz-Signature=9f5073f1399544ce771f8941eebd8cf1f3b1c1fe6f5133453e8177ce6c4267c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GLTCRZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8olGywJi53%2BNM%2BkN6tHj5CZOfSsdVGhpZPs%2FTGpl7eQIhAOngQ%2B%2Fy1RClErIrXhdKzhfvNoX%2F9xkVIOqKU3atMWmoKv8DCFoQABoMNjM3NDIzMTgzODA1IgzT%2BLHS3wTlShtEbOAq3AP%2B8VYXvEFXcbNCIhhhxdjfnZuUYQHWyiiR7XLA2PFH3d0zwrDGfkGdD3KvqdCU%2BUR69GQYEQOEx9Nam2go1SaDrVKOrIayj2eUCgdPjD2BX76sdQKY3Ob%2FRtr4q60BvMLw86b1iifypSedyDk3MxA5tvNcd%2FnxaBBMuuFMux2oylNDC5kx6cVt8x%2FLMGVsOD7mTjC0u7gnNnTidaxAek8oSw5mFG2O%2BiszlbajlgKnedv6enISjjU3sDWTFAJmk%2Bg%2FLo1VWFgpYTwy6astopweVALAAVsXD4W5LLb%2FvrKDnpdHAUDXlXhLSh7Bv43HXYzysrdRkFKJ7Puu7TjAcOCpLgcXYloK%2FnxDg%2F%2BJIiAI04u1295AMGaIfxEhsnu%2FvrmBOHeeOSVO8rdr09GZi2ZGCUy6jT7GblJxb9SLYDARAHTVdHozlt9CWGslLsRB2GuALdCXr4YgjFxVs7riFGfAawiRwC%2BEeMn3EKxCXLdymgFETa1T2HVFIh%2FBzXN4cUmaulsVuRw1i%2Fs0StsikEE8Je35ASQRaDhLHbxx4ErW5yumB1ZRSz%2Fv4EuBIjfkEj2UjsfNaAYl0zzlDMcGhjJkFplzRDCcgUrnr2rnPOxmNPUdhXRFZ0QxSQaOXzDRsezABjqkAU5Wj61MFhCqyCkUw2fzpQXFs7stJrRrCGdhdhzURekkfXjPohGctpMB0ZBnoG3uycZ%2B%2FRJW0B9PM3gwM%2BrqtWBuXDXrBfFTPIjrcvbbOyY0e8syhHte5%2FZTF48vpWYBUDeWK7jGLadWGdnTn83RnozXTohiOy2RzTq38j8HmHDU2uKiD2xrpW16gDriwzp5pIv4LLzdsynV33WdeYLejf5rPpEQ&X-Amz-Signature=0b31ec6671f0097c2e6c5bf33a3646d080024db1002dd08fd4de1d9e644ca8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
