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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMJYOJJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDEFby1Baj4gCG71%2FTtQJU7HXxhdG%2Blfz9fsuVmtdWEZQIgNnorVEzyKM26TOH9k%2Bz09hhdxoBgsY2BG2rKHOcIaAoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOppoXrxkWMsxp%2B6TCrcA9SAPfMEdVtMIiJT2IQULwED%2BqtFuBuPLW1hSPJiPunzH3F83IF9yBA3SPNEyyF5z0fwOYmRDsRLLbRKbkAJdCvpxpjgktacx9DhWgNb43hkdCpgw5H2Xwg6LZg5iXrTKpDrAt2%2FaQvq5fKGVdoz2R94LSETYB%2FN5M5AvKLV2%2BSOYD8HRqCOQfxsOWvBo2s5YtsNm4pxOXeG7UPSViO6Qhrw1uJFEi4y9ePx5f7sq3i8mm4Z6QBYP9NK92ZhQiIeECdIsHZhuK%2Bp611u%2B4jzO3ygbO89%2FiKI2aXkt%2FxWj5MMveYiPyVsTS7MBMFRSnG1eygAdSd4ZO9sPranejJR1YdR%2BZiqdty%2FtYSdA6212FMZ%2FMq0%2Bzdf8OGiEOxNaQeGVMII5K2x%2B8Nd5lKulvDFdbszJG0%2FMF6R4Kkufe30E8M%2BL5NYqoSmqFfJ7fS5B5rKajsH1eeurka68zTBFY0pleKZh8yep9d8HEhjmuFdoiJN8MHlBQI7jZWPy5A7pPN5TkuC5F1gyZdCfdxDx5d7Q%2BThPEaC5IO5pQtZFY0VfP2BTvEWTWPkvi4XmS7k20y09%2B1HO75EayPEFnVfhxusH4JKLjAygmNB%2F0QGkP5%2FPyKLZ5Jjb8C5RdwEIluMMNqpsMIGOqUBKfirRag5TnuaidCubKYXlmfrGUdvwmFkxabQWXsmlULKhnNecer0un180Jq3NR%2BSxP649YVVIz2h3EWTuWVRtOPpLO3WvFE%2Fi6%2BGusYsRttb8DVxlGlwUqOR2gThNDeY2ta6GmBjfrqQjxu7AIAatqJ1z4rw83uaikhnOCpUJ215D6yiRJb86%2BCKq5fG9q7fJ%2Foz%2BOwH45XnueTcUqDetBXUenlr&X-Amz-Signature=1afab9d8e1d7c2393309fe21419c3d8c63aab4e21f7eda4d6906611f9d438bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMJYOJJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDEFby1Baj4gCG71%2FTtQJU7HXxhdG%2Blfz9fsuVmtdWEZQIgNnorVEzyKM26TOH9k%2Bz09hhdxoBgsY2BG2rKHOcIaAoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOppoXrxkWMsxp%2B6TCrcA9SAPfMEdVtMIiJT2IQULwED%2BqtFuBuPLW1hSPJiPunzH3F83IF9yBA3SPNEyyF5z0fwOYmRDsRLLbRKbkAJdCvpxpjgktacx9DhWgNb43hkdCpgw5H2Xwg6LZg5iXrTKpDrAt2%2FaQvq5fKGVdoz2R94LSETYB%2FN5M5AvKLV2%2BSOYD8HRqCOQfxsOWvBo2s5YtsNm4pxOXeG7UPSViO6Qhrw1uJFEi4y9ePx5f7sq3i8mm4Z6QBYP9NK92ZhQiIeECdIsHZhuK%2Bp611u%2B4jzO3ygbO89%2FiKI2aXkt%2FxWj5MMveYiPyVsTS7MBMFRSnG1eygAdSd4ZO9sPranejJR1YdR%2BZiqdty%2FtYSdA6212FMZ%2FMq0%2Bzdf8OGiEOxNaQeGVMII5K2x%2B8Nd5lKulvDFdbszJG0%2FMF6R4Kkufe30E8M%2BL5NYqoSmqFfJ7fS5B5rKajsH1eeurka68zTBFY0pleKZh8yep9d8HEhjmuFdoiJN8MHlBQI7jZWPy5A7pPN5TkuC5F1gyZdCfdxDx5d7Q%2BThPEaC5IO5pQtZFY0VfP2BTvEWTWPkvi4XmS7k20y09%2B1HO75EayPEFnVfhxusH4JKLjAygmNB%2F0QGkP5%2FPyKLZ5Jjb8C5RdwEIluMMNqpsMIGOqUBKfirRag5TnuaidCubKYXlmfrGUdvwmFkxabQWXsmlULKhnNecer0un180Jq3NR%2BSxP649YVVIz2h3EWTuWVRtOPpLO3WvFE%2Fi6%2BGusYsRttb8DVxlGlwUqOR2gThNDeY2ta6GmBjfrqQjxu7AIAatqJ1z4rw83uaikhnOCpUJ215D6yiRJb86%2BCKq5fG9q7fJ%2Foz%2BOwH45XnueTcUqDetBXUenlr&X-Amz-Signature=f352778000dffd5caaf3cabc8f799d333a2441be11b8508d4f87eb855497dcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
