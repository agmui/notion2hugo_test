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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5MCRSO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCah%2FU4Yk60hgW2jtYeVSDyAvDain69r%2BrNBd%2FSjzCYzQIgRnamD6LQPnt7uSaUUNwWI8IwWD0SfYfImIeZAbBeT7kqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK52le5N3GmP%2BTh24yrcA7FAPbAYIRe0nAI4%2BXecy%2BmXAFdV1IMSvIeMwW6zcIxf3fiJ7GalZOwuULS3xmGIPtSQhHYwtBUHGmLnDf9qoaj%2BOLJ8f5UCt%2BVRpo1sHX8pPo7tunu9Xuu8C9dV3DL1pNM1BV8K2WNSByw%2FI6VkaXtcn7gWgxlDlFkRo810KCRmTWiuYQ1sH%2FbZMvfDys54hDtI86mGHCqEpnTey%2BYfPf7ZEReEoPuyBRisWcERwtNJ%2F87DzF1my4f7k0XyeHg2vJXbW%2B1G%2B7rX9%2BjN3g96HS6cvkQazjfCiw6QB%2BZfMpq7ZGCoAYFiPS8dpurMP4YSOFGkheekpsDMXtxTpnEnnJegLiotEh%2Fo4ER%2B7ZBKrzXPAf3r8aHx8ErS8LM1UGRvLaTqpy%2FgxJOyT%2F7qMhY5ihUV7K37w8YS%2BVz2l4OIfcE1SlVJ7MbKquJhPT4Pch0PsoU%2FuhV6Vi5uciUut3fQcpKlaGLhiml1Cvp1F3LBQuBtdwHdiiTuhsYlZGSd2u0J3IjkLC2XxgZPeppFUI3XWjw0DjT8rU%2BeosQyqrv0nmhD69aWo20Of0xYxVRhJuw2Z%2BwBqekyuXIuS1ItZ55CHhJSRXJTy3HFRm6UArz9F7SRoS71JfAiFOdQGDyaMIb9lb4GOqUB%2BufxBEkVuN7XXXKMUkhF4f6oF5wt2g2hBHOCLjhnCiJBEs%2B3Qtl20ScFysZemWR9Dl7zt8Rr%2FlAN9XxDePbszA6ITMJpPiwpSdI5u5AswXlFVqGx0GR7XLY2kr3%2F9Vc3Mdbz3OwvDGpOgku80VYtz%2F%2FSGa%2F4%2FPLVBXp9dzUmrRcGvFcCw%2F2cdnPhSvpG9vOMo95W%2BKfEGJ3XAk7QAPxotSIBqV%2Fr&X-Amz-Signature=2695e4af9936e341d422fbb5a17f931d992bb2ba6993e1b221fcfdd9e8612f44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5MCRSO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCah%2FU4Yk60hgW2jtYeVSDyAvDain69r%2BrNBd%2FSjzCYzQIgRnamD6LQPnt7uSaUUNwWI8IwWD0SfYfImIeZAbBeT7kqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK52le5N3GmP%2BTh24yrcA7FAPbAYIRe0nAI4%2BXecy%2BmXAFdV1IMSvIeMwW6zcIxf3fiJ7GalZOwuULS3xmGIPtSQhHYwtBUHGmLnDf9qoaj%2BOLJ8f5UCt%2BVRpo1sHX8pPo7tunu9Xuu8C9dV3DL1pNM1BV8K2WNSByw%2FI6VkaXtcn7gWgxlDlFkRo810KCRmTWiuYQ1sH%2FbZMvfDys54hDtI86mGHCqEpnTey%2BYfPf7ZEReEoPuyBRisWcERwtNJ%2F87DzF1my4f7k0XyeHg2vJXbW%2B1G%2B7rX9%2BjN3g96HS6cvkQazjfCiw6QB%2BZfMpq7ZGCoAYFiPS8dpurMP4YSOFGkheekpsDMXtxTpnEnnJegLiotEh%2Fo4ER%2B7ZBKrzXPAf3r8aHx8ErS8LM1UGRvLaTqpy%2FgxJOyT%2F7qMhY5ihUV7K37w8YS%2BVz2l4OIfcE1SlVJ7MbKquJhPT4Pch0PsoU%2FuhV6Vi5uciUut3fQcpKlaGLhiml1Cvp1F3LBQuBtdwHdiiTuhsYlZGSd2u0J3IjkLC2XxgZPeppFUI3XWjw0DjT8rU%2BeosQyqrv0nmhD69aWo20Of0xYxVRhJuw2Z%2BwBqekyuXIuS1ItZ55CHhJSRXJTy3HFRm6UArz9F7SRoS71JfAiFOdQGDyaMIb9lb4GOqUB%2BufxBEkVuN7XXXKMUkhF4f6oF5wt2g2hBHOCLjhnCiJBEs%2B3Qtl20ScFysZemWR9Dl7zt8Rr%2FlAN9XxDePbszA6ITMJpPiwpSdI5u5AswXlFVqGx0GR7XLY2kr3%2F9Vc3Mdbz3OwvDGpOgku80VYtz%2F%2FSGa%2F4%2FPLVBXp9dzUmrRcGvFcCw%2F2cdnPhSvpG9vOMo95W%2BKfEGJ3XAk7QAPxotSIBqV%2Fr&X-Amz-Signature=482aa89e7e7f0faf7cf91360b36c5fe2cee38fa387313a9bc99d8beaa2e0768e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
