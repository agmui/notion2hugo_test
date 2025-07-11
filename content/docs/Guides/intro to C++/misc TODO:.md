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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYEY4O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFwu7h7LTAN6t2xn5yJ5qE10ebFRm95GzgpLDoaZ5zAIgGI1RDdb9dIEg23fIam04yZJwLY8h2VGSasiQnyoMCwYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLX8MjolTtAp33zcyrcA8TivgKrcK689b76ytWMRF6J%2BsaKMmEDp1Rchm2ZDQOuq2h82dpzlExsFCm5apnEntkZaYQx2oueliYauTaaiEleyAjLAQJpnTr1D%2B8bGPt1lhLqZnlAfiKFt%2BOymomdZoKtxwcmXMuq3Hg%2BuVu3gDhApgGZs5hy00iibIoFQP4YqtWMh%2FIwTxUtGf1GV9sZofyNiyY0NzOKvqH3cAOT1JT%2FBreoumEx6bAfD%2FCuPcvK6g%2BQu2JnqMwo3OMhHWCsUVGoZTuY%2B1PnP2DYetVBNJhJvNJnv3%2FTBa1I%2BuiCCG0gtaYGPL7ySFpJllqUQ%2BRTKSjTDv1HZRMkqGt2Z8xlhAxHzRZz0agPKl4W16zGGDxp4YpqjUclqt2HSV7Ltxg3bCD6m4Q5Rg2wc4DSnIJTVKCrFmzx4njffWsgpGtloxYvWt7By5rX%2B7GxEidF%2FSEBNm42qKZ7x46AV%2FFlXGhZvjkOr8ZI8SvVopywMBTnFyjFXbze1ihh0%2FarFjG2I1QsWnzJGZTTchkzyZzYYblXHmfYFyubJhAdbQH196FhiC8H7ItfB5orhJ9sLOFz9TD1L8C3uc5Y9acGZbVcMejlxGtAYbJ2Dz2PLOXnITXgkqxlB9%2B20MOINlaxaEP7MM7VxcMGOqUBUEpaIgvf5FkeCrWsbdtEZ9788XwBGX0wPyzSn25ZgHSByipk4oleon2NDZu%2BHp4a7GuZlvovtX3k77Ij5l0YEiJ%2FsDUlr%2BYIWlwhyW59vAJtU95YJe3hJVKFuv1sONaNb3W1p1kmBBdwppMd%2Ffx4GaEE5XFZb1Ycf1gIa3DXGF4jV7bHJeqJDLMAHPJ%2BcPdcXm9UI5LVkQ2rAAe%2FbabAPvfhQdLO&X-Amz-Signature=bc9c8f78462356a5cb890aab37d29e6c8f21bbeda51505b609df1aeb414c1fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRYEY4O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFwu7h7LTAN6t2xn5yJ5qE10ebFRm95GzgpLDoaZ5zAIgGI1RDdb9dIEg23fIam04yZJwLY8h2VGSasiQnyoMCwYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLX8MjolTtAp33zcyrcA8TivgKrcK689b76ytWMRF6J%2BsaKMmEDp1Rchm2ZDQOuq2h82dpzlExsFCm5apnEntkZaYQx2oueliYauTaaiEleyAjLAQJpnTr1D%2B8bGPt1lhLqZnlAfiKFt%2BOymomdZoKtxwcmXMuq3Hg%2BuVu3gDhApgGZs5hy00iibIoFQP4YqtWMh%2FIwTxUtGf1GV9sZofyNiyY0NzOKvqH3cAOT1JT%2FBreoumEx6bAfD%2FCuPcvK6g%2BQu2JnqMwo3OMhHWCsUVGoZTuY%2B1PnP2DYetVBNJhJvNJnv3%2FTBa1I%2BuiCCG0gtaYGPL7ySFpJllqUQ%2BRTKSjTDv1HZRMkqGt2Z8xlhAxHzRZz0agPKl4W16zGGDxp4YpqjUclqt2HSV7Ltxg3bCD6m4Q5Rg2wc4DSnIJTVKCrFmzx4njffWsgpGtloxYvWt7By5rX%2B7GxEidF%2FSEBNm42qKZ7x46AV%2FFlXGhZvjkOr8ZI8SvVopywMBTnFyjFXbze1ihh0%2FarFjG2I1QsWnzJGZTTchkzyZzYYblXHmfYFyubJhAdbQH196FhiC8H7ItfB5orhJ9sLOFz9TD1L8C3uc5Y9acGZbVcMejlxGtAYbJ2Dz2PLOXnITXgkqxlB9%2B20MOINlaxaEP7MM7VxcMGOqUBUEpaIgvf5FkeCrWsbdtEZ9788XwBGX0wPyzSn25ZgHSByipk4oleon2NDZu%2BHp4a7GuZlvovtX3k77Ij5l0YEiJ%2FsDUlr%2BYIWlwhyW59vAJtU95YJe3hJVKFuv1sONaNb3W1p1kmBBdwppMd%2Ffx4GaEE5XFZb1Ycf1gIa3DXGF4jV7bHJeqJDLMAHPJ%2BcPdcXm9UI5LVkQ2rAAe%2FbabAPvfhQdLO&X-Amz-Signature=a7730df5a25e5b8fe31fa8d471ea9d353c47c6d812305a715d47443bf481d6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
