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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIHQZQK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRfbv7SB45hN5VHioSp3KdYhDKc9qbCo9QGZYLMDPiQAIhAN1bNa36aBl%2BF4raylcQ65sTveUeTV5Z%2BTRugLtc%2FOGgKv8DCGEQABoMNjM3NDIzMTgzODA1IgwhDML85P7jyyB8R4Aq3AM%2BzkJhhR77vgDK9MO%2FAxo%2BWhqEAHiuVBubYaL3AeApmkiu7on%2Ft1YuOBfJwvinfXcXCSqH7wQYt0cRAD6rDf1dFFHuGCZmWEOV9BEzMxLAgrJGs4jnxcvIgBy0eWMl%2FtyXT8l0d9Enc4DQgKx6BvkjvnCl8Dd3dnbOtopII7JhhbAFY8HlYMBOzFvb4FR7%2FPh4PrUzv5gkUryMhUmEO34GPEDunxD3txKz%2Br4MzL9IRWzjosjoF0NBNEBWrTXt4fhti3O85pYyTI3THvTip8ryzvjq83lTuyv1ssjK%2FtojfL86QRTxDUR8gPsALBH%2BCsgad0Pjh4ONFJ%2FIhTtW7pHf8YAPsoAGdPGNtX7le5OHPpYNyxTioFPDnlOv2HsOFj2uC%2FxmGaSzRULmOIiEg4QKSokFdI3d1r1KpSgiJymGu07KGUVfF6aGklxH5Uh9vmXYActvPenKLV6vtbIc9bibgdcjayYdkVD1dZ4PiGe7W6Z%2Bp%2FPST0lwb%2Frj4T3e8SkJWd3WUuBuJX%2BMBoMxjgE%2F3rkmW4PT885JymaoTfOrN%2BEMCOf1c8f%2FXreKT9Ht7LfJe6SnMYa%2FsQxoVfIkN9vYTOB2mUzwVxnvMIsuOLxkhjh0h4ljUMxGJkinFDCQoozCBjqkAXCm43Ci6v%2Bm7QwUcxL5qC%2FeZPenrrNexkiBiX%2BpXwTxV3JK%2FjFjX8qIyOHrvFlld3Nv3Vrxv3lpzIxFGYzEYjGlECbkgtzSiImYfCts42i5c9%2FcKLpuCKqhu%2FKaGPu2gGL83bh6kg%2FxH7ibKRLSP7KE%2BqvLiDOzwV%2BqIdwYt%2FJEPQr0zy2LvxLeaGfUIFsuO%2FdjR3CZPESAqpBxf7pcD2tY99Kt&X-Amz-Signature=8c961c6fee57ef42610f203ac9c96fde574d519652d8c2f4f9668193cd2b2f95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIHQZQK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRfbv7SB45hN5VHioSp3KdYhDKc9qbCo9QGZYLMDPiQAIhAN1bNa36aBl%2BF4raylcQ65sTveUeTV5Z%2BTRugLtc%2FOGgKv8DCGEQABoMNjM3NDIzMTgzODA1IgwhDML85P7jyyB8R4Aq3AM%2BzkJhhR77vgDK9MO%2FAxo%2BWhqEAHiuVBubYaL3AeApmkiu7on%2Ft1YuOBfJwvinfXcXCSqH7wQYt0cRAD6rDf1dFFHuGCZmWEOV9BEzMxLAgrJGs4jnxcvIgBy0eWMl%2FtyXT8l0d9Enc4DQgKx6BvkjvnCl8Dd3dnbOtopII7JhhbAFY8HlYMBOzFvb4FR7%2FPh4PrUzv5gkUryMhUmEO34GPEDunxD3txKz%2Br4MzL9IRWzjosjoF0NBNEBWrTXt4fhti3O85pYyTI3THvTip8ryzvjq83lTuyv1ssjK%2FtojfL86QRTxDUR8gPsALBH%2BCsgad0Pjh4ONFJ%2FIhTtW7pHf8YAPsoAGdPGNtX7le5OHPpYNyxTioFPDnlOv2HsOFj2uC%2FxmGaSzRULmOIiEg4QKSokFdI3d1r1KpSgiJymGu07KGUVfF6aGklxH5Uh9vmXYActvPenKLV6vtbIc9bibgdcjayYdkVD1dZ4PiGe7W6Z%2Bp%2FPST0lwb%2Frj4T3e8SkJWd3WUuBuJX%2BMBoMxjgE%2F3rkmW4PT885JymaoTfOrN%2BEMCOf1c8f%2FXreKT9Ht7LfJe6SnMYa%2FsQxoVfIkN9vYTOB2mUzwVxnvMIsuOLxkhjh0h4ljUMxGJkinFDCQoozCBjqkAXCm43Ci6v%2Bm7QwUcxL5qC%2FeZPenrrNexkiBiX%2BpXwTxV3JK%2FjFjX8qIyOHrvFlld3Nv3Vrxv3lpzIxFGYzEYjGlECbkgtzSiImYfCts42i5c9%2FcKLpuCKqhu%2FKaGPu2gGL83bh6kg%2FxH7ibKRLSP7KE%2BqvLiDOzwV%2BqIdwYt%2FJEPQr0zy2LvxLeaGfUIFsuO%2FdjR3CZPESAqpBxf7pcD2tY99Kt&X-Amz-Signature=8fd60f81e68e795b8721769e21302c828d9bb95fe086893f228008b88f306349&X-Amz-SignedHeaders=host&x-id=GetObject)

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
