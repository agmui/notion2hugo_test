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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGQHJVL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNKBEc%2Fu1aNwsxbErXdIrpQvRwVHPXgg8LG2tsyNoNNgIgaXKJZp3DArZOvBvAWbxYYaNm2Ty2W8exsulm5%2BihoAEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGNNzr7xtcaKtfNbhCrcA2cn8sZM8iGVjA4WfvJgFNDPF1a5x5K0B8sWvazO%2B7T8w1kGGtazqKyN%2FY6Ej%2BGAlnsn7OWBs6qMhlP0wRMik1yl6BHIIV%2FJDtQgMU%2FAZYppRi7m6pVwgXkuYocBdOuFjJplqt7%2BkG4rCWxCfEEfThHxfUcMnxNznB%2Bohnc5jNDAED6ZrOLEZrBrtbjefJ8GRQJXWZMP5yXtPiXxxfhnfIdwPnfi85zaLwdM6dF25X6A2e2sccDOLseRT7Hfn9VM%2B8iHKplZb3dRt0HmTzfPBeWph8RqcmKj8ZC%2FZbBg3nMBfpCLNY%2Bd3Us7VGKIi1d70mniOcg%2BQkIzkAKP7FeDds3OchbwbnWyKcnmpAOpqvhAHDtfpCSrhCgIXGswpTUiYM5ykE1%2Bht2crtEWFWMOwCKtu%2FD%2B6z1Fr1rEBoBuuXEKsCu7Sp1EwmoBy09%2FpCuDWcTt%2FAVhqfQiYU2xr04s%2BlYXokaaYGmS9x1GEGBmtRbaPRxjpnGrNxf1gNZV4oVUydUAJIYm70%2BDVJuTNRVfNHdj%2FY4Ap4AKGnVTCltLp5ePCJ0EQoyUb1YzmWxVej8Pt8DJ8h9r3J35HG%2FYqNc4CvYg5a76Qf7dFfujxaqtew6Zzh0leCRA9rr5SARPMIyez8EGOqUBkWKpuQpQi9besEdzxy7z%2FVd0xGMt42LM%2Fgul1wHIWxviHafyPkFXw%2F8CXNiRFbCxUvF6un%2BMD7KJovcRFoktxXzqjpi1%2BEfEiiWK%2FGfqBP6%2FCj2PXEhO7GBW4GdBXYc%2B3QNIe3PXh33Q6kud34OE8Cd2JTV0x8uSHz9M7rxRv1msLVv8n4yYXISr5kVrbYrkNww96oUinZ0V6QMBOSRlPG6e0gVl&X-Amz-Signature=bc1aa1237f3a2487a4db8a3bcdc22da35d789c11fb2e988fa6997a59b8278e13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGQHJVL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNKBEc%2Fu1aNwsxbErXdIrpQvRwVHPXgg8LG2tsyNoNNgIgaXKJZp3DArZOvBvAWbxYYaNm2Ty2W8exsulm5%2BihoAEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGNNzr7xtcaKtfNbhCrcA2cn8sZM8iGVjA4WfvJgFNDPF1a5x5K0B8sWvazO%2B7T8w1kGGtazqKyN%2FY6Ej%2BGAlnsn7OWBs6qMhlP0wRMik1yl6BHIIV%2FJDtQgMU%2FAZYppRi7m6pVwgXkuYocBdOuFjJplqt7%2BkG4rCWxCfEEfThHxfUcMnxNznB%2Bohnc5jNDAED6ZrOLEZrBrtbjefJ8GRQJXWZMP5yXtPiXxxfhnfIdwPnfi85zaLwdM6dF25X6A2e2sccDOLseRT7Hfn9VM%2B8iHKplZb3dRt0HmTzfPBeWph8RqcmKj8ZC%2FZbBg3nMBfpCLNY%2Bd3Us7VGKIi1d70mniOcg%2BQkIzkAKP7FeDds3OchbwbnWyKcnmpAOpqvhAHDtfpCSrhCgIXGswpTUiYM5ykE1%2Bht2crtEWFWMOwCKtu%2FD%2B6z1Fr1rEBoBuuXEKsCu7Sp1EwmoBy09%2FpCuDWcTt%2FAVhqfQiYU2xr04s%2BlYXokaaYGmS9x1GEGBmtRbaPRxjpnGrNxf1gNZV4oVUydUAJIYm70%2BDVJuTNRVfNHdj%2FY4Ap4AKGnVTCltLp5ePCJ0EQoyUb1YzmWxVej8Pt8DJ8h9r3J35HG%2FYqNc4CvYg5a76Qf7dFfujxaqtew6Zzh0leCRA9rr5SARPMIyez8EGOqUBkWKpuQpQi9besEdzxy7z%2FVd0xGMt42LM%2Fgul1wHIWxviHafyPkFXw%2F8CXNiRFbCxUvF6un%2BMD7KJovcRFoktxXzqjpi1%2BEfEiiWK%2FGfqBP6%2FCj2PXEhO7GBW4GdBXYc%2B3QNIe3PXh33Q6kud34OE8Cd2JTV0x8uSHz9M7rxRv1msLVv8n4yYXISr5kVrbYrkNww96oUinZ0V6QMBOSRlPG6e0gVl&X-Amz-Signature=9738bf0c8a0cb15057c678f15f781d4a6548dae94d03252d4790e6efbcead0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
